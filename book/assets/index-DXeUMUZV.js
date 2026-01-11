(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Ot;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(Ot||(Ot={}));function wf(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}class vf{diff(t,r,n={}){let i;typeof n=="function"?(i=n,n={}):"callback"in n&&(i=n.callback);const o=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(o,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,i)}diffWithOptionsObj(t,r,n,i){var o;const s=E=>{if(E=this.postProcess(E,n),i){setTimeout(function(){i(E)},0);return}else return E},a=r.length,u=t.length;let l=1,c=a+u;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));const d=(o=n.timeout)!==null&&o!==void 0?o:1/0,f=Date.now()+d,m=[{oldPos:-1,lastComponent:void 0}];let b=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=u&&b+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let w=-1/0,x=1/0;const D=()=>{for(let E=Math.max(w,-l);E<=Math.min(x,l);E+=2){let M;const I=m[E-1],L=m[E+1];I&&(m[E-1]=void 0);let se=!1;if(L){const Ae=L.oldPos-E;se=L&&0<=Ae&&Ae<a}const ye=I&&I.oldPos+1<u;if(!se&&!ye){m[E]=void 0;continue}if(!ye||se&&I.oldPos<L.oldPos?M=this.addToPath(L,!0,!1,0,n):M=this.addToPath(I,!1,!0,1,n),b=this.extractCommon(M,r,t,E,n),M.oldPos+1>=u&&b+1>=a)return s(this.buildValues(M.lastComponent,r,t))||!0;m[E]=M,M.oldPos+1>=u&&(x=Math.min(x,E-1)),b+1>=a&&(w=Math.max(w,E+1))}l++};if(i)(function E(){setTimeout(function(){if(l>c||Date.now()>f)return i(void 0);D()||E()},0)})();else for(;l<=c&&Date.now()<=f;){const E=D();if(E)return E}}addToPath(t,r,n,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,i,o){const s=r.length,a=n.length;let u=t.oldPos,l=u-i,c=0;for(;l+1<s&&u+1<a&&this.equals(n[u+1],r[l+1],o);)l++,u++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,u=0,l=0;for(;a<s;a++){const c=i[a];if(c.removed)c.value=this.join(n.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let d=r.slice(u,u+c.count);d=d.map(function(f,m){const b=n[l+m];return b.length>f.length?b:f}),c.value=this.join(d)}else c.value=this.join(r.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return i}}function ph(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function gh(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function bd(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function wd(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function js(e,t){return bd(e,t,"")}function fu(e,t){return wd(e,t,"")}function yh(e,t){return t.slice(0,q2(e,t))}function q2(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const i=Array(n);let o=0;i[0]=0;for(let s=1;s<n;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=r;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function Us(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function ai(e){const t=e.match(/^\s*/);return t?t[0]:""}const Gu="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",K2=new RegExp(`[${Gu}]+|\\s+|[^${Gu}]`,"ug");class G2 extends vf{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=Array.from(s.segment(t),a=>a.segment)}else n=t.match(K2)||[];const i=[];let o=null;return n.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&bh(n,o,i,s),n=s,i=null,o=null)}),(i||o)&&bh(n,o,i,null),t}}const Z2=new G2;function H2(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?X2(e,t,r):Z2.diff(e,t,r)}function bh(e,t,r,n){if(t&&r){const i=ai(t.value),o=Us(t.value),s=ai(r.value),a=Us(r.value);if(e){const u=ph(i,s);e.value=wd(e.value,s,u),t.value=js(t.value,u),r.value=js(r.value,u)}if(n){const u=gh(o,a);n.value=bd(n.value,a,u),t.value=fu(t.value,u),r.value=fu(r.value,u)}}else if(r){if(e){const i=ai(r.value);r.value=r.value.substring(i.length)}if(n){const i=ai(n.value);n.value=n.value.substring(i.length)}}else if(e&&n){const i=ai(n.value),o=ai(t.value),s=Us(t.value),a=ph(i,o);t.value=js(t.value,a);const u=gh(js(i,a),s);t.value=fu(t.value,u),n.value=bd(n.value,i,u),e.value=wd(e.value,i,i.slice(0,i.length-u.length))}else if(n){const i=ai(n.value),o=Us(t.value),s=yh(o,i);t.value=fu(t.value,s)}else if(e){const i=Us(e.value),o=ai(t.value),s=yh(i,o);t.value=js(t.value,s)}}class J2 extends vf{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Gu}]+|[^\\S\\n\\r]+|[^${Gu}]`,"ug");return t.match(r)||[]}}const Y2=new J2;function X2(e,t,r){return Y2.diff(e,t,r)}class Q2 extends vf{constructor(){super(...arguments),this.tokenize=rv}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const ev=new Q2;function tv(e,t,r){return ev.diff(e,t,r)}function rv(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let i=0;i<n.length;i++){const o=n[i];i%2&&!t.newlineIsToken?r[r.length-1]+=o:r.push(o)}return r}function wh(e){return Rg(e,new Map)}function Rg(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const r={};return t.set(e,r),Object.entries(e).sort((n,i)=>n[0].localeCompare(i[0])).forEach(([n,i])=>{const o=Rg(i,t);r[n]=o}),r}else return e}var nv=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,iv=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ov=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,wc={Space_Separator:nv,ID_Start:iv,ID_Continue:ov},rt={isSpaceSeparator(e){return typeof e=="string"&&wc.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||wc.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||wc.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let vd,Qt,Un,Zu,$i,un,xt,$f,ua;var sv=function(t,r){vd=String(t),Qt="start",Un=[],Zu=0,$i=1,un=0,xt=void 0,$f=void 0,ua=void 0;do xt=av(),cv[Qt]();while(xt.type!=="eof");return typeof r=="function"?$d({"":ua},"",r):ua};function $d(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const o=String(i),s=$d(n,o,r);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const o=$d(n,i,r);o===void 0?delete n[i]:Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let re,Q,Ys,On,le;function av(){for(re="default",Q="",Ys=!1,On=1;;){le=Gn();const e=Lg[re]();if(e)return e}}function Gn(){if(vd[Zu])return String.fromCodePoint(vd.codePointAt(Zu))}function T(){const e=Gn();return e===`
`?($i++,un=0):e?un+=e.length:un++,e&&(Zu+=e.length),e}const Lg={default(){switch(le){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":T();return;case"/":T(),re="comment";return;case void 0:return T(),Re("eof")}if(rt.isSpaceSeparator(le)){T();return}return Lg[Qt]()},comment(){switch(le){case"*":T(),re="multiLineComment";return;case"/":T(),re="singleLineComment";return}throw Le(T())},multiLineComment(){switch(le){case"*":T(),re="multiLineCommentAsterisk";return;case void 0:throw Le(T())}T()},multiLineCommentAsterisk(){switch(le){case"*":T();return;case"/":T(),re="default";return;case void 0:throw Le(T())}T(),re="multiLineComment"},singleLineComment(){switch(le){case`
`:case"\r":case"\u2028":case"\u2029":T(),re="default";return;case void 0:return T(),Re("eof")}T()},value(){switch(le){case"{":case"[":return Re("punctuator",T());case"n":return T(),Bi("ull"),Re("null",null);case"t":return T(),Bi("rue"),Re("boolean",!0);case"f":return T(),Bi("alse"),Re("boolean",!1);case"-":case"+":T()==="-"&&(On=-1),re="sign";return;case".":Q=T(),re="decimalPointLeading";return;case"0":Q=T(),re="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Q=T(),re="decimalInteger";return;case"I":return T(),Bi("nfinity"),Re("numeric",1/0);case"N":return T(),Bi("aN"),Re("numeric",NaN);case'"':case"'":Ys=T()==='"',Q="",re="string";return}throw Le(T())},identifierNameStartEscape(){if(le!=="u")throw Le(T());T();const e=Dd();switch(e){case"$":case"_":break;default:if(!rt.isIdStartChar(e))throw vh();break}Q+=e,re="identifierName"},identifierName(){switch(le){case"$":case"_":case"‌":case"‍":Q+=T();return;case"\\":T(),re="identifierNameEscape";return}if(rt.isIdContinueChar(le)){Q+=T();return}return Re("identifier",Q)},identifierNameEscape(){if(le!=="u")throw Le(T());T();const e=Dd();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!rt.isIdContinueChar(e))throw vh();break}Q+=e,re="identifierName"},sign(){switch(le){case".":Q=T(),re="decimalPointLeading";return;case"0":Q=T(),re="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Q=T(),re="decimalInteger";return;case"I":return T(),Bi("nfinity"),Re("numeric",On*(1/0));case"N":return T(),Bi("aN"),Re("numeric",NaN)}throw Le(T())},zero(){switch(le){case".":Q+=T(),re="decimalPoint";return;case"e":case"E":Q+=T(),re="decimalExponent";return;case"x":case"X":Q+=T(),re="hexadecimal";return}return Re("numeric",On*0)},decimalInteger(){switch(le){case".":Q+=T(),re="decimalPoint";return;case"e":case"E":Q+=T(),re="decimalExponent";return}if(rt.isDigit(le)){Q+=T();return}return Re("numeric",On*Number(Q))},decimalPointLeading(){if(rt.isDigit(le)){Q+=T(),re="decimalFraction";return}throw Le(T())},decimalPoint(){switch(le){case"e":case"E":Q+=T(),re="decimalExponent";return}if(rt.isDigit(le)){Q+=T(),re="decimalFraction";return}return Re("numeric",On*Number(Q))},decimalFraction(){switch(le){case"e":case"E":Q+=T(),re="decimalExponent";return}if(rt.isDigit(le)){Q+=T();return}return Re("numeric",On*Number(Q))},decimalExponent(){switch(le){case"+":case"-":Q+=T(),re="decimalExponentSign";return}if(rt.isDigit(le)){Q+=T(),re="decimalExponentInteger";return}throw Le(T())},decimalExponentSign(){if(rt.isDigit(le)){Q+=T(),re="decimalExponentInteger";return}throw Le(T())},decimalExponentInteger(){if(rt.isDigit(le)){Q+=T();return}return Re("numeric",On*Number(Q))},hexadecimal(){if(rt.isHexDigit(le)){Q+=T(),re="hexadecimalInteger";return}throw Le(T())},hexadecimalInteger(){if(rt.isHexDigit(le)){Q+=T();return}return Re("numeric",On*Number(Q))},string(){switch(le){case"\\":T(),Q+=uv();return;case'"':if(Ys)return T(),Re("string",Q);Q+=T();return;case"'":if(!Ys)return T(),Re("string",Q);Q+=T();return;case`
`:case"\r":throw Le(T());case"\u2028":case"\u2029":dv(le);break;case void 0:throw Le(T())}Q+=T()},start(){switch(le){case"{":case"[":return Re("punctuator",T())}re="value"},beforePropertyName(){switch(le){case"$":case"_":Q=T(),re="identifierName";return;case"\\":T(),re="identifierNameStartEscape";return;case"}":return Re("punctuator",T());case'"':case"'":Ys=T()==='"',re="string";return}if(rt.isIdStartChar(le)){Q+=T(),re="identifierName";return}throw Le(T())},afterPropertyName(){if(le===":")return Re("punctuator",T());throw Le(T())},beforePropertyValue(){re="value"},afterPropertyValue(){switch(le){case",":case"}":return Re("punctuator",T())}throw Le(T())},beforeArrayValue(){if(le==="]")return Re("punctuator",T());re="value"},afterArrayValue(){switch(le){case",":case"]":return Re("punctuator",T())}throw Le(T())},end(){throw Le(T())}};function Re(e,t){return{type:e,value:t,line:$i,column:un}}function Bi(e){for(const t of e){if(Gn()!==t)throw Le(T());T()}}function uv(){switch(Gn()){case"b":return T(),"\b";case"f":return T(),"\f";case"n":return T(),`
`;case"r":return T(),"\r";case"t":return T(),"	";case"v":return T(),"\v";case"0":if(T(),rt.isDigit(Gn()))throw Le(T());return"\0";case"x":return T(),lv();case"u":return T(),Dd();case`
`:case"\u2028":case"\u2029":return T(),"";case"\r":return T(),Gn()===`
`&&T(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Le(T());case void 0:throw Le(T())}return T()}function lv(){let e="",t=Gn();if(!rt.isHexDigit(t)||(e+=T(),t=Gn(),!rt.isHexDigit(t)))throw Le(T());return e+=T(),String.fromCodePoint(parseInt(e,16))}function Dd(){let e="",t=4;for(;t-- >0;){const r=Gn();if(!rt.isHexDigit(r))throw Le(T());e+=T()}return String.fromCodePoint(parseInt(e,16))}const cv={start(){if(xt.type==="eof")throw Ri();vc()},beforePropertyName(){switch(xt.type){case"identifier":case"string":$f=xt.value,Qt="afterPropertyName";return;case"punctuator":mu();return;case"eof":throw Ri()}},afterPropertyName(){if(xt.type==="eof")throw Ri();Qt="beforePropertyValue"},beforePropertyValue(){if(xt.type==="eof")throw Ri();vc()},beforeArrayValue(){if(xt.type==="eof")throw Ri();if(xt.type==="punctuator"&&xt.value==="]"){mu();return}vc()},afterPropertyValue(){if(xt.type==="eof")throw Ri();switch(xt.value){case",":Qt="beforePropertyName";return;case"}":mu()}},afterArrayValue(){if(xt.type==="eof")throw Ri();switch(xt.value){case",":Qt="beforeArrayValue";return;case"]":mu()}},end(){}};function vc(){let e;switch(xt.type){case"punctuator":switch(xt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=xt.value;break}if(ua===void 0)ua=e;else{const t=Un[Un.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,$f,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Un.push(e),Array.isArray(e)?Qt="beforeArrayValue":Qt="beforePropertyName";else{const t=Un[Un.length-1];t==null?Qt="end":Array.isArray(t)?Qt="afterArrayValue":Qt="afterPropertyValue"}}function mu(){Un.pop();const e=Un[Un.length-1];e==null?Qt="end":Array.isArray(e)?Qt="afterArrayValue":Qt="afterPropertyValue"}function Le(e){return Hu(e===void 0?`JSON5: invalid end of input at ${$i}:${un}`:`JSON5: invalid character '${jg(e)}' at ${$i}:${un}`)}function Ri(){return Hu(`JSON5: invalid end of input at ${$i}:${un}`)}function vh(){return un-=5,Hu(`JSON5: invalid identifier character at ${$i}:${un}`)}function dv(e){console.warn(`JSON5: '${jg(e)}' in strings is not valid ECMAScript; consider escaping`)}function jg(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Hu(e){const t=new SyntaxError(e);return t.lineNumber=$i,t.columnNumber=un,t}var fv=function(t,r,n){const i=[];let o="",s,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const w of r){let x;typeof w=="string"?x=w:(typeof w=="number"||w instanceof String||w instanceof Number)&&(x=String(w)),x!==void 0&&s.indexOf(x)<0&&s.push(x)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(w,x){let D=x[w];switch(D!=null&&(typeof D.toJSON5=="function"?D=D.toJSON5(w):typeof D.toJSON=="function"&&(D=D.toJSON(w))),a&&(D=a.call(x,w,D)),D instanceof Number?D=Number(D):D instanceof String?D=String(D):D instanceof Boolean&&(D=D.valueOf()),D){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof D=="string")return d(D);if(typeof D=="number")return String(D);if(typeof D=="object")return Array.isArray(D)?b(D):f(D)}function d(w){const x={"'":.1,'"':.2},D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let E="";for(let I=0;I<w.length;I++){const L=w[I];switch(L){case"'":case'"':x[L]++,E+=L;continue;case"\0":if(rt.isDigit(w[I+1])){E+="\\x00";continue}}if(D[L]){E+=D[L];continue}if(L<" "){let se=L.charCodeAt(0).toString(16);E+="\\x"+("00"+se).substring(se.length);continue}E+=L}const M=l||Object.keys(x).reduce((I,L)=>x[I]<x[L]?I:L);return E=E.replace(new RegExp(M,"g"),D[M]),M+E+M}function f(w){if(i.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");i.push(w);let x=o;o=o+u;let D=s||Object.keys(w),E=[];for(const I of D){const L=c(I,w);if(L!==void 0){let se=m(I)+":";u!==""&&(se+=" "),se+=L,E.push(se)}}let M;if(E.length===0)M="{}";else{let I;if(u==="")I=E.join(","),M="{"+I+"}";else{let L=`,
`+o;I=E.join(L),M=`{
`+o+I+`,
`+x+"}"}}return i.pop(),o=x,M}function m(w){if(w.length===0)return d(w);const x=String.fromCodePoint(w.codePointAt(0));if(!rt.isIdStartChar(x))return d(w);for(let D=x.length;D<w.length;D++)if(!rt.isIdContinueChar(String.fromCodePoint(w.codePointAt(D))))return d(w);return w}function b(w){if(i.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");i.push(w);let x=o;o=o+u;let D=[];for(let M=0;M<w.length;M++){const I=c(String(M),w);D.push(I!==void 0?I:"null")}let E;if(D.length===0)E="[]";else if(u==="")E="["+D.join(",")+"]";else{let M=`,
`+o,I=D.join(M);E=`[
`+o+I+`,
`+x+"]"}return i.pop(),o=x,E}};const mv={parse:sv,stringify:fv};var hv=mv;const Ug="__@@augment-vir-undefined-sentinel@@__",pv=new RegExp(`['"]${Ug}['"]`);function g(e,t){if(typeof e=="string")return e;try{return hv.stringify(e,(n,i)=>i===void 0?Ug:typeof i=="bigint"?Number(i):i,t||void 0).split(pv).join("undefined")}catch{return String(e)}}var gv=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var ln;(function(e){e.Node="node",e.Web="web"})(ln||(ln={}));function yv(){return gv?ln.Node:ln.Web}const _g=yv();function Df(e){return _g===e}function Vg(e){return e[_g]()}function bv(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",i=n?tv:H2,o=[r?"":`
`,g(t&&typeof t=="object"&&!Array.isArray(t)?wh(t):t,4),`
`].join(""),s=[r?"":`
`,g(e&&typeof e=="object"&&!Array.isArray(e)?wh(e):e,4),`
`].join(""),a=wv(n,i(o,s)),u=Df(ln.Node);return[[u?zn.Green:""," +added (unexpected, added in actual)",u?zn.Red:""," -missing (expected, missing from actual)",u?zn.Reset:""].join(""),r?`

`:`
`,a].join("")}var zn;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(zn||(zn={}));var Ju;(function(e){e.Added="+",e.Removed="-"})(Ju||(Ju={}));function wv(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(i=>$h(i,n)).join(`
`)).join(""):t.map(n=>$h(void 0,n)).join("")}function $h(e,t){if(e!=null&&!e)return"";const r=Df(ln.Node),n=t.added?Ju.Added:t.removed?Ju.Removed:e==null?"":" ",i=t.added?zn.Green:t.removed?zn.Red:zn.Reset;return[r?i:"",n,e??t.value,zn.Reset].join("")}function Ge(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function vv(e){return Ge(e).filter(t=>isNaN(Number(t)))}function Ur(e){return vv(e).map(r=>e[r])}const $v=[".",":",";",",","?","!"],Dv=new RegExp(`[${$v.join("")}]+$`);function Dh(e){return e.replace(Dv,"")}function St(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):g(e)}function vs(...e){const t=e.map(o=>St(o)).filter(o=>!!Dh(o)),r=t[t.length-1]?.endsWith("."),n=t.map(o=>Dh(St(o)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function et(e){return e instanceof Error?e:new Error(St(e))}function kl(e,t){const r=et(e),n=vs(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var k;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(k||(k={}));var U;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(U||(U={}));U.ClientError,U.ServerError;k.Continue+"",U.Information,k.SwitchingProtocols+"",U.Information,k.Processing+"",U.Information,k.EarlyHints+"",U.Information,k.Ok+"",U.Success,k.Created+"",U.Success,k.Accepted+"",U.Success,k.NonAuthoritativeInformation+"",U.Success,k.NoContent+"",U.Success,k.ResetContent+"",U.Success,k.PartialContent+"",U.Success,k.MultiStatus+"",U.Success,k.AlreadyReported+"",U.Success,k.ImUsed+"",U.Success,k.MultipleChoices+"",U.Redirect,k.MovedPermanently+"",U.Redirect,k.Found+"",U.Redirect,k.SeeOther+"",U.Redirect,k.NotModified+"",U.Redirect,k.UseProxy+"",U.Redirect,k.Unused+"",U.Redirect,k.TemporaryRedirect+"",U.Redirect,k.PermanentRedirect+"",U.Redirect,k.BadRequest+"",U.ClientError,k.Unauthorized+"",U.ClientError,k.PaymentRequired+"",U.ClientError,k.Forbidden+"",U.ClientError,k.NotFound+"",U.ClientError,k.MethodNotAllowed+"",U.ClientError,k.NotAcceptable+"",U.ClientError,k.ProxyAuthenticationRequired+"",U.ClientError,k.RequestTimeout+"",U.ClientError,k.Conflict+"",U.ClientError,k.Gone+"",U.ClientError,k.LengthRequired+"",U.ClientError,k.PreconditionFailed+"",U.ClientError,k.PayloadTooLarge+"",U.ClientError,k.UriTooLong+"",U.ClientError,k.UnsupportedMediaType+"",U.ClientError,k.RangeNotSatisfiable+"",U.ClientError,k.ExpectationFailed+"",U.ClientError,k.ImATeapot+"",U.ClientError,k.MisdirectedRequest+"",U.ClientError,k.UnprocessableContent+"",U.ClientError,k.Locked+"",U.ClientError,k.FailedDependency+"",U.ClientError,k.TooEarly+"",U.ClientError,k.UpgradeRequired+"",U.ClientError,k.PreconditionRequired+"",U.ClientError,k.TooManyRequests+"",U.ClientError,k.RequestHeaderFieldsTooLarge+"",U.ClientError,k.UnavailableForLegalReasons+"",U.ClientError,k.InternalServerError+"",U.ServerError,k.NotImplemented+"",U.ServerError,k.BadGateway+"",U.ServerError,k.ServiceUnavailable+"",U.ServerError,k.GatewayTimeout+"",U.ServerError,k.HttpVersionNotSupported+"",U.ServerError,k.VariantAlsoNegotiates+"",U.ServerError,k.InsufficientStorage+"",U.ServerError,k.LoopDetected+"",U.ServerError,k.NotExtended+"",U.ServerError,k.NetworkAuthenticationRequired+"",U.ServerError;const Bu={[U.Information]:[k.Continue,k.SwitchingProtocols,k.Processing,k.EarlyHints],[U.Success]:[k.Ok,k.Created,k.Accepted,k.NonAuthoritativeInformation,k.NoContent,k.ResetContent,k.PartialContent,k.MultiStatus,k.AlreadyReported,k.ImUsed],[U.Redirect]:[k.MultipleChoices,k.MovedPermanently,k.Found,k.SeeOther,k.NotModified,k.UseProxy,k.Unused,k.TemporaryRedirect,k.PermanentRedirect],[U.ClientError]:[k.BadRequest,k.Unauthorized,k.PaymentRequired,k.Forbidden,k.NotFound,k.MethodNotAllowed,k.NotAcceptable,k.ProxyAuthenticationRequired,k.RequestTimeout,k.Conflict,k.Gone,k.LengthRequired,k.PreconditionFailed,k.PayloadTooLarge,k.UriTooLong,k.UnsupportedMediaType,k.RangeNotSatisfiable,k.ExpectationFailed,k.ImATeapot,k.MisdirectedRequest,k.UnprocessableContent,k.Locked,k.FailedDependency,k.TooEarly,k.UpgradeRequired,k.PreconditionRequired,k.TooManyRequests,k.RequestHeaderFieldsTooLarge,k.UnavailableForLegalReasons],[U.ServerError]:[k.InternalServerError,k.NotImplemented,k.BadGateway,k.ServiceUnavailable,k.GatewayTimeout,k.HttpVersionNotSupported,k.VariantAlsoNegotiates,k.InsufficientStorage,k.LoopDetected,k.NotExtended,k.NetworkAuthenticationRequired]};function xf({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Yu{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(et(n))}})}}class fo extends Error{}class xv extends fo{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Av extends fo{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Ev extends fo{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Ro extends fo{}class Wg extends fo{constructor(t){super(`Invalid unit ${t}`)}}class Vt extends fo{}class ui extends fo{constructor(){super("Zone is an abstract class")}}const R="numeric",cn="short",Ar="long",Xu={year:R,month:R,day:R},zg={year:R,month:cn,day:R},Cv={year:R,month:cn,day:R,weekday:cn},qg={year:R,month:Ar,day:R},Kg={year:R,month:Ar,day:R,weekday:Ar},Gg={hour:R,minute:R},Zg={hour:R,minute:R,second:R},Hg={hour:R,minute:R,second:R,timeZoneName:cn},Jg={hour:R,minute:R,second:R,timeZoneName:Ar},Yg={hour:R,minute:R,hourCycle:"h23"},Xg={hour:R,minute:R,second:R,hourCycle:"h23"},Qg={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:cn},ey={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:Ar},ty={year:R,month:R,day:R,hour:R,minute:R},ry={year:R,month:R,day:R,hour:R,minute:R,second:R},ny={year:R,month:cn,day:R,hour:R,minute:R},iy={year:R,month:cn,day:R,hour:R,minute:R,second:R},kv={year:R,month:cn,day:R,weekday:cn,hour:R,minute:R},oy={year:R,month:Ar,day:R,hour:R,minute:R,timeZoneName:cn},sy={year:R,month:Ar,day:R,hour:R,minute:R,second:R,timeZoneName:cn},ay={year:R,month:Ar,day:R,weekday:Ar,hour:R,minute:R,timeZoneName:Ar},uy={year:R,month:Ar,day:R,weekday:Ar,hour:R,minute:R,second:R,timeZoneName:Ar};class _a{get type(){throw new ui}get name(){throw new ui}get ianaName(){return this.name}get isUniversal(){throw new ui}offsetName(t,r){throw new ui}formatOffset(t,r){throw new ui}offset(t){throw new ui}equals(t){throw new ui}get isValid(){throw new ui}}let $c=null;class Fl extends _a{static get instance(){return $c===null&&($c=new Fl),$c}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return wy(t,r,n)}formatOffset(t,r){return la(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const xd=new Map;function Fv(e){let t=xd.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),xd.set(e,t)),t}const Sv={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Tv(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,o,s,a,u,l,c]=n;return[s,i,o,a,u,l,c]}function Mv(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:o,value:s}=r[i],a=Sv[o];o==="era"?n[a]=s:H(a)||(n[a]=parseInt(s,10))}return n}const Dc=new Map;class Jn extends _a{static create(t){let r=Dc.get(t);return r===void 0&&Dc.set(t,r=new Jn(t)),r}static resetCache(){Dc.clear(),xd.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Jn.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return wy(t,r,n,this.name)}formatOffset(t,r){return la(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=Fv(this.name);let[i,o,s,a,u,l,c]=n.formatToParts?Mv(n,r):Tv(n,r);a==="BC"&&(i=-Math.abs(i)+1);const f=Tl({year:i,month:o,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let m=+r;const b=m%1e3;return m-=b>=0?b:1e3+b,(f-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let xh={};function Pv(e,t={}){const r=JSON.stringify([e,t]);let n=xh[r];return n||(n=new Intl.ListFormat(e,t),xh[r]=n),n}const Ad=new Map;function Ed(e,t={}){const r=JSON.stringify([e,t]);let n=Ad.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),Ad.set(r,n)),n}const Cd=new Map;function Nv(e,t={}){const r=JSON.stringify([e,t]);let n=Cd.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),Cd.set(r,n)),n}const kd=new Map;function Iv(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let o=kd.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),kd.set(i,o)),o}let Xs=null;function Ov(){return Xs||(Xs=new Intl.DateTimeFormat().resolvedOptions().locale,Xs)}const Fd=new Map;function ly(e){let t=Fd.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Fd.set(e,t)),t}const Sd=new Map;function Bv(e){let t=Sd.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...cy,...t}),Sd.set(e,t)}return t}function Rv(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=Ed(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=Ed(u).resolvedOptions(),i=u}const{numberingSystem:o,calendar:s}=n;return[i,o,s]}}function Lv(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function jv(e){const t=[];for(let r=1;r<=12;r++){const n=J.utc(2009,r,1);t.push(e(n))}return t}function Uv(e){const t=[];for(let r=1;r<=7;r++){const n=J.utc(2016,11,13+r);t.push(e(n))}return t}function hu(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function _v(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||ly(e.locale).numberingSystem==="latn"}class Vv{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:o,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=Nv(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Ff(t,3);return lt(r,this.padTo)}}}class Wv{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Jn.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=Ed(r,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class zv{constructor(t,r,n){this.opts={style:"long",...n},!r&&yy()&&(this.rtf=Iv(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):f$(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const cy={firstDay:1,minimalDays:4,weekend:[6,7]};class Ee{static fromOpts(t){return Ee.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,o=!1){const s=t||qe.defaultLocale,a=s||(o?"en-US":Ov()),u=r||qe.defaultNumberingSystem,l=n||qe.defaultOutputCalendar,c=Md(i)||qe.defaultWeekSettings;return new Ee(a,u,l,c,s)}static resetCache(){Xs=null,Ad.clear(),Cd.clear(),kd.clear(),Fd.clear(),Sd.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return Ee.create(t,r,n,i)}constructor(t,r,n,i,o){const[s,a,u]=Rv(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=Lv(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=_v(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Ee.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Md(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return hu(this,t,Dy,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const i=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";if(!this.monthsCache[o][t]){const s=n?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=jv(s)}return this.monthsCache[o][t]})}weekdays(t,r=!1){return hu(this,t,Ey,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Uv(o=>this.extract(o,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return hu(this,void 0,()=>Cy,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[J.utc(2016,11,13,9),J.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return hu(this,t,ky,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[J.utc(-40,1,1),J.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new Vv(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Wv(t,this.intl,r)}relFormatter(t={}){return new zv(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Pv(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||ly(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:by()?Bv(this.locale):cy}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let xc=null;class er extends _a{static get utcInstance(){return xc===null&&(xc=new er(0)),xc}static instance(t){return t===0?er.utcInstance:new er(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new er(Ml(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${la(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${la(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return la(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class qv extends _a{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function hi(e,t){if(H(e)||e===null)return t;if(e instanceof _a)return e;if(Yv(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Fl.instance:r==="utc"||r==="gmt"?er.utcInstance:er.parseSpecifier(r)||Jn.create(e)}else return yi(e)?er.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new qv(e)}const Af={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Ah={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Kv=Af.hanidec.replace(/[\[|\]]/g,"").split("");function Gv(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Af.hanidec)!==-1)t+=Kv.indexOf(e[r]);else for(const i in Ah){const[o,s]=Ah[i];n>=o&&n<=s&&(t+=n-o)}}return parseInt(t,10)}else return t}const Td=new Map;function Zv(){Td.clear()}function tn({numberingSystem:e},t=""){const r=e||"latn";let n=Td.get(r);n===void 0&&(n=new Map,Td.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${Af[r]}${t}`),n.set(t,i)),i}let Eh=()=>Date.now(),Ch="system",kh=null,Fh=null,Sh=null,Th=60,Mh,Ph=null;class qe{static get now(){return Eh}static set now(t){Eh=t}static set defaultZone(t){Ch=t}static get defaultZone(){return hi(Ch,Fl.instance)}static get defaultLocale(){return kh}static set defaultLocale(t){kh=t}static get defaultNumberingSystem(){return Fh}static set defaultNumberingSystem(t){Fh=t}static get defaultOutputCalendar(){return Sh}static set defaultOutputCalendar(t){Sh=t}static get defaultWeekSettings(){return Ph}static set defaultWeekSettings(t){Ph=Md(t)}static get twoDigitCutoffYear(){return Th}static set twoDigitCutoffYear(t){Th=t%100}static get throwOnInvalid(){return Mh}static set throwOnInvalid(t){Mh=t}static resetCaches(){Ee.resetCache(),Jn.resetCache(),J.resetCache(),Zv()}}class sn{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const dy=[0,31,59,90,120,151,181,212,243,273,304,334],fy=[0,31,60,91,121,152,182,213,244,274,305,335];function Wr(e,t){return new sn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Ef(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function my(e,t,r){return r+(Va(e)?fy:dy)[t-1]}function hy(e,t){const r=Va(e)?fy:dy,n=r.findIndex(o=>o<t),i=t-r[n];return{month:n+1,day:i}}function Cf(e,t){return(e-t+7)%7+1}function Qu(e,t=4,r=1){const{year:n,month:i,day:o}=e,s=my(n,i,o),a=Cf(Ef(n,i,o),r);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=n-1,u=$a(l,t,r)):u>$a(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...Pl(e)}}function Nh(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:o}=e,s=Cf(Ef(n,1,t),r),a=zo(n);let u=i*7+o-s-7+t,l;u<1?(l=n-1,u+=zo(l)):u>a?(l=n+1,u-=zo(n)):l=n;const{month:c,day:d}=hy(l,u);return{year:l,month:c,day:d,...Pl(e)}}function Ac(e){const{year:t,month:r,day:n}=e,i=my(t,r,n);return{year:t,ordinal:i,...Pl(e)}}function Ih(e){const{year:t,ordinal:r}=e,{month:n,day:i}=hy(t,r);return{year:t,month:n,day:i,...Pl(e)}}function Oh(e,t){if(!H(e.localWeekday)||!H(e.localWeekNumber)||!H(e.localWeekYear)){if(!H(e.weekday)||!H(e.weekNumber)||!H(e.weekYear))throw new Ro("Cannot mix locale-based week fields with ISO-based week fields");return H(e.localWeekday)||(e.weekday=e.localWeekday),H(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),H(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Hv(e,t=4,r=1){const n=Sl(e.weekYear),i=zr(e.weekNumber,1,$a(e.weekYear,t,r)),o=zr(e.weekday,1,7);return n?i?o?!1:Wr("weekday",e.weekday):Wr("week",e.weekNumber):Wr("weekYear",e.weekYear)}function Jv(e){const t=Sl(e.year),r=zr(e.ordinal,1,zo(e.year));return t?r?!1:Wr("ordinal",e.ordinal):Wr("year",e.year)}function py(e){const t=Sl(e.year),r=zr(e.month,1,12),n=zr(e.day,1,el(e.year,e.month));return t?r?n?!1:Wr("day",e.day):Wr("month",e.month):Wr("year",e.year)}function gy(e){const{hour:t,minute:r,second:n,millisecond:i}=e,o=zr(t,0,23)||t===24&&r===0&&n===0&&i===0,s=zr(r,0,59),a=zr(n,0,59),u=zr(i,0,999);return o?s?a?u?!1:Wr("millisecond",i):Wr("second",n):Wr("minute",r):Wr("hour",t)}function H(e){return typeof e>"u"}function yi(e){return typeof e=="number"}function Sl(e){return typeof e=="number"&&e%1===0}function Yv(e){return typeof e=="string"}function Xv(e){return Object.prototype.toString.call(e)==="[object Date]"}function yy(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function by(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Qv(e){return Array.isArray(e)?e:[e]}function Bh(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const o=[t(i),i];return n&&r(n[0],o[0])===n[0]?n:o},null)[1]}function e$(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function es(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Md(e){if(e==null)return null;if(typeof e!="object")throw new Vt("Week settings must be an object");if(!zr(e.firstDay,1,7)||!zr(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!zr(t,1,7)))throw new Vt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function zr(e,t,r){return Sl(e)&&e>=t&&e<=r}function t$(e,t){return e-t*Math.floor(e/t)}function lt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function di(e){if(!(H(e)||e===null||e===""))return parseInt(e,10)}function Li(e){if(!(H(e)||e===null||e===""))return parseFloat(e)}function kf(e){if(!(H(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Ff(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function Va(e){return e%4===0&&(e%100!==0||e%400===0)}function zo(e){return Va(e)?366:365}function el(e,t){const r=t$(t-1,12)+1,n=e+(t-r)/12;return r===2?Va(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Tl(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Rh(e,t,r){return-Cf(Ef(e,1,t),r)+t-1}function $a(e,t=4,r=1){const n=Rh(e,t,r),i=Rh(e+1,t,r);return(zo(e)-n+i)/7}function Pd(e){return e>99?e:e>qe.twoDigitCutoffYear?1900+e:2e3+e}function wy(e,t,r,n=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(o.timeZone=n);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(r,s).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Ml(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function vy(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new Vt(`Invalid unit value ${e}`);return t}function tl(e,t){const r={};for(const n in e)if(es(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=vy(i)}return r}function la(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${lt(r,2)}:${lt(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${lt(r,2)}${lt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Pl(e){return e$(e,["hour","minute","second","millisecond"])}const r$=["January","February","March","April","May","June","July","August","September","October","November","December"],$y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n$=["J","F","M","A","M","J","J","A","S","O","N","D"];function Dy(e){switch(e){case"narrow":return[...n$];case"short":return[...$y];case"long":return[...r$];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const xy=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ay=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],i$=["M","T","W","T","F","S","S"];function Ey(e){switch(e){case"narrow":return[...i$];case"short":return[...Ay];case"long":return[...xy];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Cy=["AM","PM"],o$=["Before Christ","Anno Domini"],s$=["BC","AD"],a$=["B","A"];function ky(e){switch(e){case"narrow":return[...a$];case"short":return[...s$];case"long":return[...o$];default:return null}}function u$(e){return Cy[e.hour<12?0:1]}function l$(e,t){return Ey(t)[e.weekday-1]}function c$(e,t){return Dy(t)[e.month-1]}function d$(e,t){return ky(t)[e.year<0?0:1]}function f$(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&o){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${i[e][0]}`;case-1:return d?"yesterday":`last ${i[e][0]}`;case 0:return d?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function Lh(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const m$={D:Xu,DD:zg,DDD:qg,DDDD:Kg,t:Gg,tt:Zg,ttt:Hg,tttt:Jg,T:Yg,TT:Xg,TTT:Qg,TTTT:ey,f:ty,ff:ny,fff:oy,ffff:ay,F:ry,FF:iy,FFF:sy,FFFF:uy};class zt{static create(t,r={}){return new zt(t,r)}static parseFormat(t){let r=null,n="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||i)&&o.push({literal:i||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&o.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&o.push({literal:i||/^\s+$/.test(n),val:n}),o}static macroTokenToFormatOpts(t){return m$[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return lt(t,r);const i={...this.opts};return r>0&&(i.padTo=r),n&&(i.signDisplay=n),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(m,b)=>this.loc.extract(t,m,b),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?u$(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(m,b)=>n?c$(t,m):o(b?{month:m}:{month:m,day:"numeric"},"month"),l=(m,b)=>n?l$(t,m):o(b?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),c=m=>{const b=zt.macroTokenToFormatOpts(m);return b?this.formatWithSystemDefault(t,b):m},d=m=>n?d$(t,m):o({era:m},"era"),f=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(m)}};return Lh(zt.parseFormat(r),f)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,d)=>f=>{const m=i(f);if(m){const b=d.isNegativeDuration&&m!==d.largestUnit?n:1;let w;return this.opts.signMode==="negativeLargestOnly"&&m!==d.largestUnit?w="never":this.opts.signMode==="all"?w="always":w="auto",this.num(c.get(m)*b,f.length,w)}else return f},s=zt.parseFormat(r),a=s.reduce((c,{literal:d,val:f})=>d?c:c.concat(f),[]),u=t.shiftTo(...a.map(i).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Lh(s,o(u,l))}}const Fy=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function $s(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Ds(...e){return t=>e.reduce(([r,n,i],o)=>{const[s,a,u]=o(t,i);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function xs(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function Sy(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=di(t[r+i]);return[n,null,r+i]}}const Ty=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,h$=`(?:${Ty.source}?(?:\\[(${Fy.source})\\])?)?`,Sf=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,My=RegExp(`${Sf.source}${h$}`),Tf=RegExp(`(?:[Tt]${My.source})?`),p$=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,g$=/(\d{4})-?W(\d\d)(?:-?(\d))?/,y$=/(\d{4})-?(\d{3})/,b$=Sy("weekYear","weekNumber","weekDay"),w$=Sy("year","ordinal"),v$=/(\d{4})-(\d\d)-(\d\d)/,Py=RegExp(`${Sf.source} ?(?:${Ty.source}|(${Fy.source}))?`),$$=RegExp(`(?: ${Py.source})?`);function qo(e,t,r){const n=e[t];return H(n)?r:di(n)}function D$(e,t){return[{year:qo(e,t),month:qo(e,t+1,1),day:qo(e,t+2,1)},null,t+3]}function As(e,t){return[{hours:qo(e,t,0),minutes:qo(e,t+1,0),seconds:qo(e,t+2,0),milliseconds:kf(e[t+3])},null,t+4]}function Wa(e,t){const r=!e[t]&&!e[t+1],n=Ml(e[t+1],e[t+2]),i=r?null:er.instance(n);return[{},i,t+3]}function za(e,t){const r=e[t]?Jn.create(e[t]):null;return[{},r,t+1]}const x$=RegExp(`^T?${Sf.source}$`),A$=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function E$(e){const[t,r,n,i,o,s,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",f=(m,b=!1)=>m!==void 0&&(b||m&&c)?-m:m;return[{years:f(Li(r)),months:f(Li(n)),weeks:f(Li(i)),days:f(Li(o)),hours:f(Li(s)),minutes:f(Li(a)),seconds:f(Li(u),u==="-0"),milliseconds:f(kf(l),d)}]}const C$={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Mf(e,t,r,n,i,o,s){const a={year:t.length===2?Pd(di(t)):di(t),month:$y.indexOf(r)+1,day:di(n),hour:di(i),minute:di(o)};return s&&(a.second=di(s)),e&&(a.weekday=e.length>3?xy.indexOf(e)+1:Ay.indexOf(e)+1),a}const k$=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function F$(e){const[,t,r,n,i,o,s,a,u,l,c,d]=e,f=Mf(t,i,n,r,o,s,a);let m;return u?m=C$[u]:l?m=0:m=Ml(c,d),[f,new er(m)]}function S$(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const T$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,M$=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,P$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function jh(e){const[,t,r,n,i,o,s,a]=e;return[Mf(t,i,n,r,o,s,a),er.utcInstance]}function N$(e){const[,t,r,n,i,o,s,a]=e;return[Mf(t,a,r,n,i,o,s),er.utcInstance]}const I$=$s(p$,Tf),O$=$s(g$,Tf),B$=$s(y$,Tf),R$=$s(My),Ny=Ds(D$,As,Wa,za),L$=Ds(b$,As,Wa,za),j$=Ds(w$,As,Wa,za),U$=Ds(As,Wa,za);function _$(e){return xs(e,[I$,Ny],[O$,L$],[B$,j$],[R$,U$])}function V$(e){return xs(S$(e),[k$,F$])}function W$(e){return xs(e,[T$,jh],[M$,jh],[P$,N$])}function z$(e){return xs(e,[A$,E$])}const q$=Ds(As);function K$(e){return xs(e,[x$,q$])}const G$=$s(v$,$$),Z$=$s(Py),H$=Ds(As,Wa,za);function J$(e){return xs(e,[G$,Ny],[Z$,H$])}const Uh="Invalid Duration",Iy={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Y$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Iy},Rr=146097/400,Fo=146097/4800,X$={years:{quarters:4,months:12,weeks:Rr/7,days:Rr,hours:Rr*24,minutes:Rr*24*60,seconds:Rr*24*60*60,milliseconds:Rr*24*60*60*1e3},quarters:{months:3,weeks:Rr/28,days:Rr/4,hours:Rr*24/4,minutes:Rr*24*60/4,seconds:Rr*24*60*60/4,milliseconds:Rr*24*60*60*1e3/4},months:{weeks:Fo/7,days:Fo,hours:Fo*24,minutes:Fo*24*60,seconds:Fo*24*60*60,milliseconds:Fo*24*60*60*1e3},...Iy},Zi=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Q$=Zi.slice(0).reverse();function Mn(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new de(n)}function Oy(e,t){let r=t.milliseconds??0;for(const n of Q$.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function _h(e,t){const r=Oy(e,t)<0?-1:1;Zi.reduceRight((n,i)=>{if(H(t[i]))return n;if(n){const o=t[n]*r,s=e[i][n],a=Math.floor(o/s);t[i]+=a*r,t[n]-=a*s*r}return i},null),Zi.reduce((n,i)=>{if(H(t[i]))return n;if(n){const o=t[n]%1;t[n]-=o,t[i]+=o*e[n][i]}return i},null)}function Vh(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class de{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?X$:Y$;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Ee.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return de.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Vt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new de({values:tl(t,de.normalizeUnit),loc:Ee.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(yi(t))return de.fromMillis(t);if(de.isDuration(t))return t;if(typeof t=="object")return de.fromObject(t);throw new Vt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=z$(t);return n?de.fromObject(n,r):de.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=K$(t);return n?de.fromObject(n,r):de.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Vt("need to specify a reason the Duration is invalid");const n=t instanceof sn?t:new sn(t,r);if(qe.throwOnInvalid)throw new Ev(n);return new de({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Wg(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?zt.create(this.loc,n).formatDurationFromString(this,t):Uh}toHuman(t={}){if(!this.isValid)return Uh;const r=t.showZeros!==!1,n=Zi.map(i=>{const o=this.values[i];return H(o)||o===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Ff(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},J.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Oy(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=de.fromDurationLike(t),n={};for(const i of Zi)(es(r.values,i)||es(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Mn(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=de.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=vy(t(this.values[n],n));return Mn(this,{values:r},!0)}get(t){return this[de.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...tl(t,de.normalizeUnit)};return Mn(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Mn(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return _h(this.matrix,t),Mn(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Vh(this.normalize().shiftToAll().toObject());return Mn(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>de.normalizeUnit(s));const r={},n={},i=this.toObject();let o;for(const s of Zi)if(t.indexOf(s)>=0){o=s;let a=0;for(const l in n)a+=this.matrix[l][s]*n[l],n[l]=0;yi(i[s])&&(a+=i[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else yi(i[s])&&(n[s]=i[s]);for(const s in n)n[s]!==0&&(r[o]+=s===o?n[s]:n[s]/this.matrix[o][s]);return _h(this.matrix,r),Mn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Mn(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Vh(this.values);return Mn(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of Zi)if(!r(this.values[n],t.values[n]))return!1;return!0}}const So="Invalid Interval";function e5(e,t){return!e||!e.isValid?Xe.invalid("missing or invalid start"):!t||!t.isValid?Xe.invalid("missing or invalid end"):t<e?Xe.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Xe{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Vt("need to specify a reason the Interval is invalid");const n=t instanceof sn?t:new sn(t,r);if(qe.throwOnInvalid)throw new Av(n);return new Xe({invalid:n})}static fromDateTimes(t,r){const n=_s(t),i=_s(r),o=e5(n,i);return o??new Xe({start:n,end:i})}static after(t,r){const n=de.fromDurationLike(r),i=_s(t);return Xe.fromDateTimes(i,i.plus(n))}static before(t,r){const n=de.fromDurationLike(r),i=_s(t);return Xe.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let o,s;try{o=J.fromISO(n,r),s=o.isValid}catch{s=!1}let a,u;try{a=J.fromISO(i,r),u=a.isValid}catch{u=!1}if(s&&u)return Xe.fromDateTimes(o,a);if(s){const l=de.fromISO(i,r);if(l.isValid)return Xe.after(o,l)}else if(u){const l=de.fromISO(n,r);if(l.isValid)return Xe.before(a,l)}}return Xe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?Xe.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(_s).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:i}=this,o=0;for(;i<this.e;){const s=r[o]||this.e,a=+s>+this.e?this.e:s;n.push(Xe.fromDateTimes(i,a)),i=a,o+=1}return n}splitBy(t){const r=de.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,o;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));o=+a>+this.e?this.e:a,s.push(Xe.fromDateTimes(n,o)),n=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:Xe.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return Xe.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],o=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(Xe.fromDateTimes(r,u.time)),r=null);return Xe.merge(i)}difference(...t){return Xe.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:So}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Xu,r={}){return this.isValid?zt.create(this.s.loc.clone(r),t).formatInterval(this):So}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:So}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:So}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:So}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:So}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):de.invalid(this.invalidReason)}mapEndpoints(t){return Xe.fromDateTimes(t(this.s),t(this.e))}}class pu{static hasDST(t=qe.defaultZone){const r=J.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Jn.isValidZone(t)}static normalizeZone(t){return hi(t,qe.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Ee.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Ee.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Ee.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||Ee.create(r,n,o)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||Ee.create(r,n,o)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Ee.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Ee.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Ee.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Ee.create(r,null,"gregory").eras(t)}static features(){return{relative:yy(),localeWeek:by()}}}function Wh(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(de.fromMillis(n).as("days"))}function t5(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Wh(u,l);return(c-c%7)/7}],["days",Wh]],i={},o=e;let s,a;for(const[u,l]of n)r.indexOf(u)>=0&&(s=u,i[u]=l(e,t),a=o.plus(i),a>t?(i[u]--,e=o.plus(i),e>t&&(a=e,i[u]--,e=o.plus(i))):e=a);return[e,i,a,s]}function r5(e,t,r,n){let[i,o,s,a]=t5(e,t,r);const u=t-i,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+u/(s-i)));const c=de.fromObject(o,n);return l.length>0?de.fromMillis(u,n).shiftTo(...l).plus(c):c}const n5="missing Intl.DateTimeFormat.formatToParts support";function we(e,t=r=>r){return{regex:e,deser:([r])=>t(Gv(r))}}const i5=" ",By=`[ ${i5}]`,Ry=new RegExp(By,"g");function o5(e){return e.replace(/\./g,"\\.?").replace(Ry,By)}function zh(e){return e.replace(/\./g,"").replace(Ry," ").toLowerCase()}function rn(e,t){return e===null?null:{regex:RegExp(e.map(o5).join("|")),deser:([r])=>e.findIndex(n=>zh(r)===zh(n))+t}}function qh(e,t){return{regex:e,deser:([,r,n])=>Ml(r,n),groups:t}}function gu(e){return{regex:e,deser:([t])=>t}}function s5(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function a5(e,t){const r=tn(t),n=tn(t,"{2}"),i=tn(t,"{3}"),o=tn(t,"{4}"),s=tn(t,"{6}"),a=tn(t,"{1,2}"),u=tn(t,"{1,3}"),l=tn(t,"{1,6}"),c=tn(t,"{1,9}"),d=tn(t,"{2,4}"),f=tn(t,"{4,6}"),m=x=>({regex:RegExp(s5(x.val)),deser:([D])=>D,literal:!0}),w=(x=>{if(e.literal)return m(x);switch(x.val){case"G":return rn(t.eras("short"),0);case"GG":return rn(t.eras("long"),0);case"y":return we(l);case"yy":return we(d,Pd);case"yyyy":return we(o);case"yyyyy":return we(f);case"yyyyyy":return we(s);case"M":return we(a);case"MM":return we(n);case"MMM":return rn(t.months("short",!0),1);case"MMMM":return rn(t.months("long",!0),1);case"L":return we(a);case"LL":return we(n);case"LLL":return rn(t.months("short",!1),1);case"LLLL":return rn(t.months("long",!1),1);case"d":return we(a);case"dd":return we(n);case"o":return we(u);case"ooo":return we(i);case"HH":return we(n);case"H":return we(a);case"hh":return we(n);case"h":return we(a);case"mm":return we(n);case"m":return we(a);case"q":return we(a);case"qq":return we(n);case"s":return we(a);case"ss":return we(n);case"S":return we(u);case"SSS":return we(i);case"u":return gu(c);case"uu":return gu(a);case"uuu":return we(r);case"a":return rn(t.meridiems(),0);case"kkkk":return we(o);case"kk":return we(d,Pd);case"W":return we(a);case"WW":return we(n);case"E":case"c":return we(r);case"EEE":return rn(t.weekdays("short",!1),1);case"EEEE":return rn(t.weekdays("long",!1),1);case"ccc":return rn(t.weekdays("short",!0),1);case"cccc":return rn(t.weekdays("long",!0),1);case"Z":case"ZZ":return qh(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return qh(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return gu(/[a-z_+-/]{1,256}?/i);case" ":return gu(/[^\S\n\r]/);default:return m(x)}})(e)||{invalidReason:n5};return w.token=e,w}const u5={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function l5(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const o=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=u5[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function c5(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function d5(e,t,r){const n=e.match(t);if(n){const i={};let o=1;for(const s in r)if(es(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(o,o+u))),o+=u}return[n,i]}else return[n,{}]}function f5(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return H(e.z)||(r=Jn.create(e.z)),H(e.Z)||(r||(r=new er(e.Z)),n=e.Z),H(e.q)||(e.M=(e.q-1)*3+1),H(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),H(e.u)||(e.S=kf(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),r,n]}let Ec=null;function m5(){return Ec||(Ec=J.fromMillis(1555555555555)),Ec}function h5(e,t){if(e.literal)return e;const r=zt.macroTokenToFormatOpts(e.val),n=_y(r,t);return n==null||n.includes(void 0)?e:n}function Ly(e,t){return Array.prototype.concat(...e.map(r=>h5(r,t)))}class jy{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Ly(zt.parseFormat(r),t),this.units=this.tokens.map(n=>a5(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=c5(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=d5(t,this.regex,this.handlers),[i,o,s]=n?f5(n):[null,null,void 0];if(es(n,"a")&&es(n,"H"))throw new Ro("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Uy(e,t,r){return new jy(e,r).explainFromTokens(t)}function p5(e,t,r){const{result:n,zone:i,specificOffset:o,invalidReason:s}=Uy(e,t,r);return[n,i,o,s]}function _y(e,t){if(!e)return null;const n=zt.create(t,e).dtFormatter(m5()),i=n.formatToParts(),o=n.resolvedOptions();return i.map(s=>l5(s,e,o))}const Cc="Invalid DateTime",Kh=864e13;function Qs(e){return new sn("unsupported zone",`the zone "${e.name}" is not supported`)}function kc(e){return e.weekData===null&&(e.weekData=Qu(e.c)),e.weekData}function Fc(e){return e.localWeekData===null&&(e.localWeekData=Qu(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function ji(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new J({...r,...t,old:r})}function Vy(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const o=r.offset(n);return i===o?[n,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function yu(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Ru(e,t,r){return Vy(Tl(e),t,r)}function Gh(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:n,month:i,day:Math.min(e.c.day,el(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=de.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Tl(o);let[u,l]=Vy(a,r,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function To(e,t,r,n,i,o){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=J.fromObject(e,{...r,zone:u,specificOffset:o});return s?l:l.setZone(a)}else return J.invalid(new sn("unparsable",`the input "${i}" can't be parsed as ${n}`))}function bu(e,t,r=!0){return e.isValid?zt.create(Ee.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Sc(e,t,r){const n=e.c.year>9999||e.c.year<0;let i="";if(n&&e.c.year>=0&&(i+="+"),i+=lt(e.c.year,n?6:4),r==="year")return i;if(t){if(i+="-",i+=lt(e.c.month),r==="month")return i;i+="-"}else if(i+=lt(e.c.month),r==="month")return i;return i+=lt(e.c.day),i}function Zh(e,t,r,n,i,o,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=lt(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=lt(e.c.minute),s==="minute")break;a&&(u+=":",u+=lt(e.c.second))}else{if(u+=lt(e.c.minute),s==="minute")break;a&&(u+=lt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=lt(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?u+="Z":e.o<0?(u+="-",u+=lt(Math.trunc(-e.o/60)),u+=":",u+=lt(Math.trunc(-e.o%60))):(u+="+",u+=lt(Math.trunc(e.o/60)),u+=":",u+=lt(Math.trunc(e.o%60)))),o&&(u+="["+e.zone.ianaName+"]"),u}const Wy={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},g5={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},y5={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Lu=["year","month","day","hour","minute","second","millisecond"],b5=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],w5=["year","ordinal","hour","minute","second","millisecond"];function ju(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Wg(e);return t}function Hh(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return ju(e)}}function v5(e){if(ea===void 0&&(ea=qe.now()),e.type!=="iana")return e.offset(ea);const t=e.name;let r=Nd.get(t);return r===void 0&&(r=e.offset(ea),Nd.set(t,r)),r}function Jh(e,t){const r=hi(t.zone,qe.defaultZone);if(!r.isValid)return J.invalid(Qs(r));const n=Ee.fromObject(t);let i,o;if(H(e.year))i=qe.now();else{for(const u of Lu)H(e[u])&&(e[u]=Wy[u]);const s=py(e)||gy(e);if(s)return J.invalid(s);const a=v5(r);[i,o]=Ru(e,a,r)}return new J({ts:i,zone:r,loc:n,o})}function Yh(e,t,r){const n=H(r.round)?!0:r.round,i=H(r.rounding)?"trunc":r.rounding,o=(a,u)=>(a=Ff(a,n||r.calendary?0:2,r.calendary?"round":i),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return o(u,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function Xh(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let ea;const Nd=new Map;class J{constructor(t){const r=t.zone||qe.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new sn("invalid input"):null)||(r.isValid?null:Qs(r));this.ts=H(t.ts)?qe.now():t.ts;let i=null,o=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,o]=[t.old.c,t.old.o];else{const a=yi(t.o)&&!t.old?t.o:r.offset(this.ts);i=yu(this.ts,a),n=Number.isNaN(i.year)?new sn("invalid input"):null,i=n?null:i,o=n?null:a}this._zone=r,this.loc=t.loc||Ee.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new J({})}static local(){const[t,r]=Xh(arguments),[n,i,o,s,a,u,l]=r;return Jh({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Xh(arguments),[n,i,o,s,a,u,l]=r;return t.zone=er.utcInstance,Jh({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=Xv(t)?t.valueOf():NaN;if(Number.isNaN(n))return J.invalid("invalid input");const i=hi(r.zone,qe.defaultZone);return i.isValid?new J({ts:n,zone:i,loc:Ee.fromObject(r)}):J.invalid(Qs(i))}static fromMillis(t,r={}){if(yi(t))return t<-Kh||t>Kh?J.invalid("Timestamp out of range"):new J({ts:t,zone:hi(r.zone,qe.defaultZone),loc:Ee.fromObject(r)});throw new Vt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(yi(t))return new J({ts:t*1e3,zone:hi(r.zone,qe.defaultZone),loc:Ee.fromObject(r)});throw new Vt("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=hi(r.zone,qe.defaultZone);if(!n.isValid)return J.invalid(Qs(n));const i=Ee.fromObject(r),o=tl(t,Hh),{minDaysInFirstWeek:s,startOfWeek:a}=Oh(o,i),u=qe.now(),l=H(r.specificOffset)?n.offset(u):r.specificOffset,c=!H(o.ordinal),d=!H(o.year),f=!H(o.month)||!H(o.day),m=d||f,b=o.weekYear||o.weekNumber;if((m||c)&&b)throw new Ro("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&c)throw new Ro("Can't mix ordinal dates with month/day");const w=b||o.weekday&&!m;let x,D,E=yu(u,l);w?(x=b5,D=g5,E=Qu(E,s,a)):c?(x=w5,D=y5,E=Ac(E)):(x=Lu,D=Wy);let M=!1;for(const Dt of x){const Pt=o[Dt];H(Pt)?M?o[Dt]=D[Dt]:o[Dt]=E[Dt]:M=!0}const I=w?Hv(o,s,a):c?Jv(o):py(o),L=I||gy(o);if(L)return J.invalid(L);const se=w?Nh(o,s,a):c?Ih(o):o,[ye,Ae]=Ru(se,l,n),je=new J({ts:ye,zone:n,o:Ae,loc:i});return o.weekday&&m&&t.weekday!==je.weekday?J.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${je.toISO()}`):je.isValid?je:J.invalid(je.invalid)}static fromISO(t,r={}){const[n,i]=_$(t);return To(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=V$(t);return To(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=W$(t);return To(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(H(t)||H(r))throw new Vt("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=n,s=Ee.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,u,l,c]=p5(s,t,r);return c?J.invalid(c):To(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return J.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=J$(t);return To(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Vt("need to specify a reason the DateTime is invalid");const n=t instanceof sn?t:new sn(t,r);if(qe.throwOnInvalid)throw new xv(n);return new J({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=_y(t,Ee.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return Ly(zt.parseFormat(t),Ee.fromObject(r)).map(i=>i.val).join("")}static resetCache(){ea=void 0,Nd.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?kc(this).weekYear:NaN}get weekNumber(){return this.isValid?kc(this).weekNumber:NaN}get weekday(){return this.isValid?kc(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Fc(this).weekday:NaN}get localWeekNumber(){return this.isValid?Fc(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Fc(this).weekYear:NaN}get ordinal(){return this.isValid?Ac(this.c).ordinal:NaN}get monthShort(){return this.isValid?pu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?pu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?pu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?pu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Tl(this.c),i=this.zone.offset(n-t),o=this.zone.offset(n+t),s=this.zone.offset(n-i*r),a=this.zone.offset(n-o*r);if(s===a)return[this];const u=n-s*r,l=n-a*r,c=yu(u,s),d=yu(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[ji(this,{ts:u}),ji(this,{ts:l})]:[this]}get isInLeapYear(){return Va(this.year)}get daysInMonth(){return el(this.year,this.month)}get daysInYear(){return this.isValid?zo(this.year):NaN}get weeksInWeekYear(){return this.isValid?$a(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?$a(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=zt.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(er.instance(t),r)}toLocal(){return this.setZone(qe.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=hi(t,qe.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const o=t.offset(this.ts),s=this.toObject();[i]=Ru(s,o,t)}return ji(this,{ts:i,zone:t})}else return J.invalid(Qs(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return ji(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=tl(t,Hh),{minDaysInFirstWeek:n,startOfWeek:i}=Oh(r,this.loc),o=!H(r.weekYear)||!H(r.weekNumber)||!H(r.weekday),s=!H(r.ordinal),a=!H(r.year),u=!H(r.month)||!H(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||s)&&c)throw new Ro("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new Ro("Can't mix ordinal dates with month/day");let d;o?d=Nh({...Qu(this.c,n,i),...r},n,i):H(r.ordinal)?(d={...this.toObject(),...r},H(r.day)&&(d.day=Math.min(el(d.year,d.month),d.day))):d=Ih({...Ac(this.c),...r});const[f,m]=Ru(d,this.o,this.zone);return ji(this,{ts:f,o:m})}plus(t){if(!this.isValid)return this;const r=de.fromDurationLike(t);return ji(this,Gh(this,r))}minus(t){if(!this.isValid)return this;const r=de.fromDurationLike(t).negate();return ji(this,Gh(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=de.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(n.weekNumber=this.weekNumber-1),n.weekday=o}else n.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);n.month=(o-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?zt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Cc}toLocaleString(t=Xu,r={}){return this.isValid?zt.create(this.loc.clone(r),t).formatDateTime(this):Cc}toLocaleParts(t={}){return this.isValid?zt.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=ju(s);const a=t==="extended";let u=Sc(this,a,s);return Lu.indexOf(s)>=3&&(u+="T"),u+=Zh(this,a,r,n,i,o,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?Sc(this,t==="extended",ju(r)):null}toISOWeekDate(){return bu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=ju(a),(i&&Lu.indexOf(a)>=3?"T":"")+Zh(this,s==="extended",r,t,n,o,a)):null}toRFC2822(){return bu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return bu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Sc(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),bu(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Cc}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return de.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},o=Qv(r).map(de.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=r5(a,u,o,i);return s?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(J.now(),t,r)}until(t){return this.isValid?Xe.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r,n)<=i&&i<=o.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||J.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),Yh(r,this.plus(n),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?Yh(t.base||J.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(J.isDateTime))throw new Vt("min requires all arguments be DateTimes");return Bh(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(J.isDateTime))throw new Vt("max requires all arguments be DateTimes");return Bh(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:o=null}=n,s=Ee.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return Uy(s,t,r)}static fromStringExplain(t,r,n={}){return J.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,o=Ee.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new jy(o,t)}static fromFormatParser(t,r,n={}){if(H(t)||H(r))throw new Vt("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=n,s=Ee.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(r.locale))throw new Vt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?J.invalid(c):To(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Xu}static get DATE_MED(){return zg}static get DATE_MED_WITH_WEEKDAY(){return Cv}static get DATE_FULL(){return qg}static get DATE_HUGE(){return Kg}static get TIME_SIMPLE(){return Gg}static get TIME_WITH_SECONDS(){return Zg}static get TIME_WITH_SHORT_OFFSET(){return Hg}static get TIME_WITH_LONG_OFFSET(){return Jg}static get TIME_24_SIMPLE(){return Yg}static get TIME_24_WITH_SECONDS(){return Xg}static get TIME_24_WITH_SHORT_OFFSET(){return Qg}static get TIME_24_WITH_LONG_OFFSET(){return ey}static get DATETIME_SHORT(){return ty}static get DATETIME_SHORT_WITH_SECONDS(){return ry}static get DATETIME_MED(){return ny}static get DATETIME_MED_WITH_SECONDS(){return iy}static get DATETIME_MED_WITH_WEEKDAY(){return kv}static get DATETIME_FULL(){return oy}static get DATETIME_FULL_WITH_SECONDS(){return sy}static get DATETIME_HUGE(){return ay}static get DATETIME_HUGE_WITH_SECONDS(){return uy}}function _s(e){if(J.isDateTime(e))return e;if(e&&e.valueOf&&yi(e.valueOf()))return J.fromJSDate(e);if(e&&typeof e=="object")return J.fromObject(e);throw new Vt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Ce;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Ce||(Ce={}));const $5=[Ce.Milliseconds,Ce.Seconds,Ce.Minutes,Ce.Hours,Ce.Days,Ce.Weeks,Ce.Months,Ce.Years];Ce.Milliseconds+"",Ce.Seconds+"",Ce.Minutes+"",Ce.Hours+"",Ce.Days+"",Ce.Weeks+"",Ce.Months+"",Ce.Years+"";function D5(e){return $5.filter(t=>e[t])}function Id(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function x5(e){return Id(Math.max(e-.4,0),{decimalCount:0})}function Qh(e){return e===0?0:Math.sign(e)}function ts(e,t,r={}){const n={},i={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=D5(t).reverse();if(o||s)return a.forEach(c=>{n[c]=o?1/0:-1/0}),n;let u=de.fromObject(e).as(Ce.Milliseconds);const l=Qh(u);return a.forEach((c,d)=>{const f=d===a.length-1;if(c===Ce.Milliseconds)n.milliseconds=Id(u,i);else{const m=de.fromObject({milliseconds:u}).as(c),b=Math.sign(m),w=Math.abs(m),x=f?Id(w,i):Math.floor(i.decimalCount==null?w:x5(w)),D=x===0?0:x*b;n[c]=D,u-=de.fromObject({[c]:D}).as(Ce.Milliseconds),l!==Qh(u)&&(u=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var K;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(K||(K={}));K.Year,K.Hour,K.Minute,K.Second,K.Millisecond;K.Month,K.Week,K.Day;K.Millisecond,K.Second,K.Minute,K.Hour,K.Day,K.Week,K.Month,K.Year;const e0={min:0,max:23},t0={min:0,max:59},r0={min:0,max:59},n0={min:0,max:999};var Wt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(Wt||(Wt={}));Wt.Sunday+"",Wt.Monday+"",Wt.Tuesday+"",Wt.Wednesday+"",Wt.Thursday+"",Wt.Friday+"",Wt.Saturday+"";Wt.Sunday,Wt.Monday,Wt.Tuesday,Wt.Wednesday,Wt.Thursday,Wt.Friday,Wt.Saturday;var ur;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(ur||(ur={}));ur.January,ur.February,ur.March,ur.April,ur.May,ur.June,ur.July,ur.August,ur.September,ur.October,ur.November,ur.December;const i0={min:1,max:12},o0={min:1,max:31};function ro(e){const t=new Yu,n=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:ts(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function zy(...e){const t=e.join(""),r=wf(Array.from(t));return Array.from(r).join("")}function qy(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Ky(e,t){const r=zy([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Gy(e,r)}function Gy(e,t){const r=zy(t);return typeof e=="string"?new RegExp(qy(e),r):new RegExp(e.source,r)}function Zy(e,{caseSensitive:t}){const n="".replaceAll("i","");return Gy(e,n)}function Pf(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Hy(e,t){return t?typeof t=="string"?!!new RegExp(qy(t),"i").exec(e):!!Ky(t,"i").exec(e):!1}class p extends Error{name="AssertionError";constructor(t,r){super(vs(r,t)||"Assertion failed.")}}const s0={interval:{milliseconds:100},timeout:{seconds:10}},Tc=Symbol("not set");async function A5(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:o,options:s}=E5(t),a=ts(s.timeout,{milliseconds:!0}).milliseconds,u=ts(s.interval,{milliseconds:!0});let l=Tc,c;async function d(){try{l=r?n():await n(),e(l,...i)}catch(m){l=Tc,c=et(m)}}const f=Date.now();for(;l===Tc;)if(await d(),await ro(u),Date.now()-f>=a){const b=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw kl(c,b)}return l}function P(e,t=!1){return((...r)=>A5(e,r,t))}function E5(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Jy(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Jy(e){return{interval:e?.interval||s0.interval,timeout:e?.timeout||s0.timeout}}const Vs={isFalse(e,t){if(e!==!1)throw new p(`'${g(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${g(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new p(`'${g(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new p(`'${g(e)}' is not truthy.`,t)}},Yy={assert:Vs,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new p(`'${g(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${g(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new p(`'${g(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new p(`'${g(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:P(Vs.isFalse),isFalsy:P(Vs.isFalsy),isTrue:P(Vs.isTrue),isTruthy:P(Vs.isTruthy)}};function C5(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${g(e)} does not end with ${g(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${g(e)} does not end with ${g(t)}}`,r)}function k5(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new p(`${g(e)} ends with ${g(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${g(e)} ends with ${g(t)}}`,r)}function F5(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${g(e)} does not start with ${g(t)}}`,r)}else if(e[0]!==t)throw new p(`${g(e)} does not start with ${g(t)}}`,r)}function S5(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new p(`${g(e)} starts with ${g(t)}}`,r)}else if(e[0]===t)throw new p(`${g(e)} starts with ${g(t)}}`,r)}const Ws={endsWith:C5,endsWithout:k5,startsWith:F5,startsWithout:S5},Xy={assert:Ws,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${g(e)} does not end with ${g(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${g(e)} does not end with ${g(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new p(`${g(e)} ends with ${g(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${g(e)} ends with ${g(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${g(e)} does not start with ${g(t)}}`,r)}else if(e[0]!==t)throw new p(`${g(e)} does not start with ${g(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new p(`${g(e)} starts with ${g(t)}}`,r)}else if(e[0]===t)throw new p(`${g(e)} starts with ${g(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:P(Ws.endsWith),endsWithout:P(Ws.endsWithout),startsWith:P(Ws.startsWith),startsWithout:P(Ws.startsWithout)}};function T5(e,t,r){const n=Ur(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Bn(e,t){return Ur(t).includes(e)}const Mc={isEnumValue(e,t,r){T5(e,t,r)},isNotEnumValue(e,t,r){const n=Ur(t);if(n.includes(e))throw new p(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Qy={assert:Mc,check:{isEnumValue:Bn,isNotEnumValue(e,t){return!Ur(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=Ur(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=Ur(t);if(n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(Ur(t).includes(e))return e},isNotEnumValue(e,t){if(!Ur(t).includes(e))return e}},waitUntil:{isEnumValue:P(Mc.isEnumValue),isNotEnumValue:P(Mc.isNotEnumValue)}},Pc={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${g(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${g(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new p(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new p("Entries are equal.",r)}},e1={assert:Pc,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],o=t[n];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],o=t[n];return i!==o})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${g(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${g(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new p(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new p("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:P(Pc.entriesEqual),notEntriesEqual:P(Pc.notEntriesEqual)}};function rl(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Da(e,t){if(!(e===t||rl(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!rl(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{Da(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${St(s)}`)}})}throw new Error("Values are not JSON equal.")}}function ta(e,t){if(e===t||rl(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!rl(r,n)?!1:Object.keys(e).every(o=>ta(e[o],t[o]))}return!1}const Nc={jsonEquals(e,t,r){try{Da(e,t)}catch(n){throw new p(St(n),r)}},notJsonEquals(e,t,r){try{Da(e,t)}catch{return}throw new p("Values are JSON equal.",r)}},t1={assert:Nc,check:{jsonEquals(e,t){return ta(e,t)},notJsonEquals(e,t){return!ta(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Da(e,t),e}catch(n){throw new p(St(n),r)}},notJsonEquals(e,t,r){try{Da(e,t)}catch{return e}throw new p("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(ta(e,t))return e},notJsonEquals(e,t){if(!ta(e,t))return e}},waitUntil:{jsonEquals:P(Nc.jsonEquals),notJsonEquals:P(Nc.notJsonEquals)}};function a0(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function r1(){this._key="chai/deep-eql__"+Math.random()+Date.now()}r1.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var n1=typeof WeakMap=="function"?WeakMap:r1;function u0(e,t,r){if(!r||rs(e)||rs(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}function wu(e,t,r,n){if(!(!r||rs(e)||rs(t))){var i=r.get(e);i?i.set(t,n):(i=new n1,i.set(t,n),r.set(e,i))}}function on(e,t,r){if(r&&r.comparator)return l0(e,t,r);var n=i1(e,t);return n!==null?n:l0(e,t,r)}function i1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:rs(e)||rs(t)?!1:null}function l0(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new n1;var n=r&&r.comparator,i=u0(e,t,r.memoize);if(i!==null)return i;var o=u0(t,e,r.memoize);if(o!==null)return o;if(n){var s=n(e,t);if(s===!1||s===!0)return wu(e,t,r.memoize,s),s;var a=i1(e,t);if(a!==null)return a}var u=a0(e);if(u!==a0(t))return wu(e,t,r.memoize,!1),!1;wu(e,t,r.memoize,!0);var l=M5(e,t,u,r);return wu(e,t,r.memoize,l),l}function M5(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return on(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return o1(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Xi(e,t,n);case"RegExp":return P5(e,t);case"Generator":return N5(e,t,n);case"DataView":return Xi(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Xi(new Uint8Array(e),new Uint8Array(t),n);case"Set":return c0(e,t,n);case"Map":return c0(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return O5(e,t,n)}}function P5(e,t){return e.toString()===t.toString()}function c0(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),Xi(n.sort(),i.sort(),r)}function Xi(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(on(e[i],t[i],r)===!1)return!1;return!0}function N5(e,t,r){return Xi(Od(e),Od(t),r)}function I5(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function d0(e){if(I5(e))try{return Od(e[Symbol.iterator]())}catch{return[]}return[]}function Od(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function f0(e){var t=[];for(var r in e)t.push(r);return t}function m0(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function o1(e,t,r,n){var i=r.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(on(e[r[o]],t[r[o]],n)===!1)return!1;return!0}function O5(e,t,r){var n=f0(e),i=f0(t),o=m0(e),s=m0(t);if(n=n.concat(o),i=i.concat(s),n.length&&n.length===i.length)return Xi(h0(n).sort(),h0(i).sort())===!1?!1:o1(e,t,n,r);var a=d0(e),u=d0(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Xi(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}function rs(e){return e===null||typeof e!="object"}function h0(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class Ko extends p{name="DiffError";constructor(t,r,n,i){const o=bv(r,n);super([t,Pf(o)].join(`
`),i)}}function fi(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const ci={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${g(t)}

.`,r):new Ko("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

strictly equals

${g(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${g(t)}

.`,r):new Ko("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

loosely equals

${g(t)}

`,r)},deepEquals(e,t,r){if(!on(e,t,{comparator:fi}))throw new Ko("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(on(e,t,{comparator:fi}))throw new p(`

${g(e)}

deeply equals

${g(t)}

`,r)}},s1=ci.deepEquals,a1={assert:ci,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return on(e,t,{comparator:fi})},notDeepEquals(e,t){return!on(e,t,{comparator:fi})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${g(t)}

.`,r):new Ko("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

strictly equals

${g(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${g(t)}

.`,r):new Ko("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

loosely equals

${g(t)}

`,r);return e},deepEquals(e,t,r){if(on(e,t,{comparator:fi}))return e;throw new Ko("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(on(e,t,{comparator:fi}))throw new p(`

${g(e)}

deeply equals

${g(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(on(e,t,{comparator:fi}))return e},notDeepEquals(e,t){if(!on(e,t,{comparator:fi}))return e}},waitUntil:{strictEquals:P(ci.strictEquals),notStrictEquals:P(ci.notStrictEquals),looseEquals:P(ci.looseEquals),notLooseEquals:P(ci.notLooseEquals),deepEquals:P(ci.deepEquals),notDeepEquals:P(ci.notDeepEquals)}};function vr(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function jr(e,t){return typeof t=="string"?t.includes(e):vr(t,e)}const Pn={hasValue(e,t,r){if(!vr(e,t))throw new p(`'${g(e)}' does not have value '${g(t)}'.`,r)},lacksValue(e,t,r){if(vr(e,t))throw new p(`'${g(e)}' has value '${g(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new p(`'${g(e)}' does not have values '${g(t)}'.`,r)}if(n.length)throw new p(`'${g(e)}' does not have values '${g(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new p(`'${g(e)}' has values '${g(n)}'.`,r)},isIn(e,t,r){if(!jr(e,t))throw new p(`'${g(e)}'

is not in

${g(t)}.`,r)},isNotIn(e,t,r){if(jr(e,t))throw new p(`'${g(e)}'

is in

${g(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${g(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new p(`'${g(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new p(`'${g(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${g(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${g(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${g(e)}' is not empty.`,t)}}},u1={assert:Pn,check:{hasValue(e,t){return vr(e,t)},lacksValue(e,t){return!vr(e,t)},hasValues(e,t){return t.every(r=>vr(e,r))},lacksValues(e,t){return t.every(r=>!vr(e,r))},isIn(e,t){return jr(e,t)},isNotIn(e,t){return!jr(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!vr(e,t))throw new p(`'${g(e)}' does not have value '${g(t)}'.`,r);return e},lacksValue(e,t,r){if(vr(e,t))throw new p(`'${g(e)}' has value '${g(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new p(`'${g(e)}' does not have values '${g(t)}'.`,r)}if(n.length)throw new p(`'${g(e)}' does not have values '${g(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new p(`'${g(e)}' has values '${g(n)}'.`,r);return e},isIn(e,t,r){if(!jr(e,t))throw new p(`'${g(e)}'

is not in

${g(t)}.`,r);return e},isNotIn(e,t,r){if(jr(e,t))throw new p(`'${g(e)}'

is in

${g(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${g(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new p(`'${g(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new p(`'${g(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${g(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${g(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${g(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(vr(e,t))return e},lacksValue(e,t){if(!vr(e,t))return e},hasValues(e,t){if(t.every(r=>vr(e,r)))return e},lacksValues(e,t){if(!t.every(r=>vr(e,r)))return e},isIn(e,t){if(jr(e,t))return e},isNotIn(e,t){if(!jr(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:P(Pn.hasValue),lacksValue:P(Pn.lacksValue),hasValues:P(Pn.hasValues),lacksValues:P(Pn.lacksValues),isIn:P(Pn.isIn),isNotIn:P(Pn.isNotIn),isEmpty:P(Pn.isEmpty),isNotEmpty:P(Pn.isNotEmpty)}},Ic={isHttpStatus(e,t){if(!Bn(e,k))throw new p(`${g(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Bn(e,k)){if(!jr(e,Bu[t]))throw new p(`${g(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${g(e)} is not a valid HTTP status.`,r)}},l1={assert:Ic,check:{isHttpStatus(e){return Bn(e,k)},isHttpStatusCategory(e,t){return Bn(e,k)&&jr(e,Bu[t])}},assertWrap:{isHttpStatus(e,t){if(!Bn(e,k))throw new p(`${g(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Bn(e,k)){if(!jr(e,Bu[t]))throw new p(`${g(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${g(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Bn(e,k))return e},isHttpStatusCategory(e,t){if(Bn(e,k)&&jr(e,Bu[t]))return e}},waitUntil:{isHttpStatus:P(Ic.isHttpStatus),isHttpStatusCategory:P(Ic.isHttpStatusCategory)}},Oc={instanceOf(e,t,r){if(!(e instanceof t))throw new p(`'${g(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${g(e)}' is an instance of '${t.name}'`,r)}},c1={assert:Oc,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new p(`'${g(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${g(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:P(Oc.instanceOf),notInstanceOf:P(Oc.notInstanceOf)}},B5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function _e(e,t){return B5.some(r=>{try{return r(e,t)}catch{return!1}})}const Ui={isKeyOf(e,t,r){if(!_e(t,e))throw new p(`'${String(e)}' is not a key of '${g(t)}'.`,r)},isNotKeyOf(e,t,r){if(_e(t,e))throw new p(`'${String(e)}' is a key of '${g(t)}'.`,r)},hasKey(e,t,r){if(!_e(e,t))throw new p(`'${g(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(_e(e,t))throw new p(`'${g(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!_e(e,i));if(n.length)throw new p(`'${g(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>_e(e,i));if(n.length)throw new p(`'${g(e)}' does not lack keys '${n.join(",")}'.`,r)}},d1={assert:Ui,check:{isKeyOf(e,t){return _e(t,e)},isNotKeyOf(e,t){return!_e(t,e)},hasKey:_e,lacksKey(e,t){return!_e(e,t)},hasKeys(e,t){return t.every(r=>_e(e,r))},lacksKeys(e,t){return t.every(r=>!_e(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!_e(t,e))throw new p(`'${String(e)}' is not a key of '${g(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(_e(t,e))throw new p(`'${String(e)}' is a key of '${g(t)}'.`,r);return e},hasKey(e,t,r){if(!_e(e,t))throw new p(`'${g(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(_e(e,t))throw new p(`'${g(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!_e(e,i));if(n.length)throw new p(`'${g(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>_e(e,i));if(n.length)throw new p(`'${g(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(_e(t,e))return e},isNotKeyOf(e,t){if(!_e(t,e))return e},hasKey(e,t){if(_e(e,t))return e},lacksKey(e,t){if(!_e(e,t))return e},hasKeys(e,t){if(t.every(r=>_e(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!_e(e,r)))return e}},waitUntil:{isKeyOf:P(Ui.isKeyOf),isNotKeyOf:P(Ui.isNotKeyOf),hasKey:P(Ui.hasKey),lacksKey:P(Ui.lacksKey),hasKeys:P(Ui.hasKeys),lacksKeys:P(Ui.lacksKeys)}};function R5(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Ge(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r)}function L5(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Ge(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r)}const Bc={isLengthAtLeast:R5,isLengthExactly:L5},f1={assert:Bc,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ge(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ge(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ge(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ge(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ge(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ge(e).length)===t)return e})},waitUntil:{isLengthAtLeast:P(Bc.isLengthAtLeast),isLengthExactly:P(Bc.isLengthExactly)}},j5={never(e){throw new p("This code should not have executed.",e)}},m1={assert:j5,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Rc={isDefined(e,t){if(e==null)throw new p(`'${g(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new p(`'${g(e)}' is not a nullish.`,t)}},h1={assert:Rc,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new p(`'${g(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new p(`'${g(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:P(Rc.isDefined),isNullish:P(Rc.isNullish)}},sr={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${g({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${g({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n)}},p1={assert:sr,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${g({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${g({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:P(sr.isInBounds),isOutBounds:P(sr.isOutBounds),isInteger:P(sr.isInteger),isNotInteger:P(sr.isNotInteger),isAbove:P(sr.isAbove),isAtLeast:P(sr.isAtLeast),isBelow:P(sr.isBelow),isAtMost:P(sr.isAtMost),isNaN:P(sr.isNaN),isFinite:P(sr.isFinite),isInfinite:P(sr.isInfinite),isApproximately:P(sr.isApproximately),isNotApproximately:P(sr.isNotApproximately)}};function U5(e,t,r,n,i){return qa(...Nl(e,t,r,n,i),!1)}function Nl(e,t,r,n,i){const o=Array.isArray(r);return[o?e:s1,o?t:e,o?r:t,o?n:r,o?i:n]}function qa(e,t,r,n,i,o){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,n),o?a(l):a()}catch(l){u(new p(`Output from '${t.name}' did not produce expected output. ${St(l)}`,i))}});try{return e(s,n),o?s:void 0}catch(a){throw new p(`Output from '${t.name}' did not produce expected output. ${St(a)}`,i)}}function _5(e,t,r,n,i){try{const o=qa(...Nl(e,t,r,n,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function V5(e,t,r,n,i){return qa(...Nl(e,t,r,n,i),!0)}function W5(e,t,r,n,i){try{const o=qa(...Nl(e,t,r,n,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Lc=Symbol("not set");async function z5(e,t,r,n,i,o){const s=Array.isArray(r),a=s?e:s1,u=s?t:e,l=s?r:t,c=s?n:r,d=Jy(s?i:n),f=s?o:i,m=ts(d.timeout,{milliseconds:!0}).milliseconds,b=ts(d.interval,{milliseconds:!0});let w=Lc,x;async function D(){try{w=await qa(a,u,l,c,void 0,!0)}catch(M){w=Lc,x=et(M)}}const E=Date.now();for(;w===Lc;)if(await D(),await ro(b),Date.now()-E>=m)throw kl(x,vs(f,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return w}const q5={output:U5},g1={assert:q5,check:{output:_5},assertWrap:{output:V5},checkWrap:{output:W5},waitUntil:{output:z5}},zs={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${g(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${g(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${g(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${g(e)}' is not a Primitive.`,t)}},y1={assert:zs,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${g(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${g(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${g(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${g(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:P(zs.isNotPrimitive),isNotPropertyKey:P(zs.isNotPropertyKey),isPrimitive:P(zs.isPrimitive),isPropertyKey:P(zs.isPropertyKey)}},qs={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${g(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${g(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${g(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${g(e)}' is a Promise.`,t)}},b1={assert:qs,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${g(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${g(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${g(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${g(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:P(qs.isPromiseLike,!0),isNotPromiseLike:P(qs.isNotPromiseLike,!0),isPromise:P(qs.isPromise,!0),isNotPromise:P(qs.isNotPromise,!0)}},jc={matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r)}},w1={assert:jc,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:P(jc.matches,!0),mismatches:P(jc.mismatches,!0)}},ze={isArray(e,t){if(!Array.isArray(e))throw new p(`'${g(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${g(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${g(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new p(`'${g(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new p(`'${g(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${g(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${g(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${g(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new p(`'${g(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${g(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new p(`'${g(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${g(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${g(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${g(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${g(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new p(`'${g(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${g(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${g(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new p(`'${g(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${g(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${g(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${g(e)}' is a undefined.`,t)}},v1={assert:ze,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new p(`'${g(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${g(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${g(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new p(`'${g(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new p(`'${g(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${g(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${g(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${g(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new p(`'${g(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${g(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new p(`'${g(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${g(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${g(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${g(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${g(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new p(`'${g(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${g(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${g(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new p(`'${g(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${g(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${g(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${g(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:P(ze.isArray),isBigInt:P(ze.isBigInt),isBoolean:P(ze.isBoolean),isFunction:P(ze.isFunction),isNull:P(ze.isNull),isNumber:P(ze.isNumber),isObject:P(ze.isObject),isPlainObject:P(ze.isPlainObject),isString:P(ze.isString),isSymbol:P(ze.isSymbol),isUndefined:P(ze.isUndefined),isNotArray:P(ze.isNotArray),isNotBigInt:P(ze.isNotBigInt),isNotBoolean:P(ze.isNotBoolean),isNotFunction:P(ze.isNotFunction),isNotNull:P(ze.isNotNull),isNotNumber:P(ze.isNotNumber),isNotObject:P(ze.isNotObject),isNotPlainObject:P(ze.isNotPlainObject),isNotString:P(ze.isNotString),isNotSymbol:P(ze.isNotSymbol),isNotUndefined:P(ze.isNotUndefined)}};var lr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(lr||(lr={}));function Nf(e,t,r){If(e,{noError:"No error.",notInstance:`'${g(e)}' is not an error instance.`},t,r)}function p0(e,t,r){If(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${g(e)}' is not an error instance.`},t,r)}function If(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new p(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=St(e);if(typeof r.matchMessage=="string"){if(!Hy(i,r.matchMessage))throw new p(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new p(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new p(t.notInstance,n);else throw new p(t.noError,n)}function g0(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=St(e);if(typeof t.matchMessage=="string"){if(!Hy(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Il(e,t,r,n){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(u){i=et(u)}try{p0(i,r,n),e===lr.Assert?s():e===lr.Check?s(!0):s(i)}catch(u){e===lr.CheckWrap?s(void 0):e===lr.Check?s(!1):a(et(u))}})}catch(o){i=et(o)}try{return p0(i,r,n),e===lr.Check?!0:e!==lr.Assert?i:void 0}catch(o){if(e===lr.CheckWrap)return;if(e===lr.Check)return!1;throw o}}function K5(e,t,r){return Il(lr.Assert,e,t,r)}function G5(e,t){return Il(lr.Check,e,t)}function Z5(e,t,r){return Il(lr.AssertWrap,e,t,r)}function H5(e,t,r){return Il(lr.CheckWrap,e,t,r)}const J5=P(Nf);function Y5(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${g(o)}'`);return J5(i,async()=>{try{await o();return}catch(u){return et(u)}},a,s)}const X5={throws:K5,isError:Nf},$1={assert:X5,check:{throws:G5,isError(e,t){return g0(e,t)}},assertWrap:{throws:Z5,isError(e,t,r){return If(e,{noError:"No error.",notInstance:`'${g(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:H5,isError(e,t){if(g0(e,t))return e}},waitUntil:{throws:Y5,isError:P(Nf)}},mi=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Uc={isUuid(e,t){if(!String(e).match(mi))throw new p(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(mi))throw new p(`'${String(e)}' is a UUID.`,t)}},D1={assert:Uc,check:{isUuid(e){return!!String(e).match(mi)},isNotUuid(e){return!String(e).match(mi)}},assertWrap:{isUuid(e,t){if(!String(e).match(mi))throw new p(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(mi))throw new p(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(mi))return e},isNotUuid(e){if(!String(e).match(mi))return e}},waitUntil:{isUuid:P(Uc.isUuid),isNotUuid:P(Uc.isNotUuid)}},Q5={...m1.assert,...Yy.assert,...Xy.assert,...e1.assert,...Qy.assert,...l1.assert,...c1.assert,...t1.assert,...d1.assert,...f1.assert,...h1.assert,...p1.assert,...g1.assert,...y1.assert,...b1.assert,...w1.assert,...v1.assert,...a1.assert,...$1.assert,...D1.assert,...u1.assert},Of=[Yy,Xy,e1,Qy,l1,c1,t1,d1,f1,m1,h1,p1,g1,y1,b1,w1,v1,a1,$1,D1,u1],eD=Object.assign({},...Of.map(e=>e.check)),F=Object.assign(function(t){return!!t},eD);function tD(e,t,r){return Uu(e,t,r,new Set)}function Uu(e,t,r,n){if(e=y0(e),t=y0(t),F.isObject(e)&&F.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Uu(Ge(e).sort(),Ge(t).sort(),r,n))return!1;let i=!1;const o=Ge(e).map(s=>{const a=Uu(e[s],t[s],r,n);return F.isPromise(a)&&(i=!0),a});return b0(i,o)}else if(F.isArray(e)&&F.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const u=Uu(s,t[a],r,n);return F.isPromise(u)&&(i=!0),u});return b0(i,o)}else return r(e,t)}function y0(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function b0(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(F.isTrue))}catch(i){n(et(i))}}):t.every(F.isTrue)}const rD=Object.assign({},...Of.map(e=>e.assertWrap)),dn=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r);return t},rD);function nD(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const iD={tsType:nD},oD={assert:iD},sD={fail:e=>{throw new p("Failure triggered.",e)}},aD={...oD.assert,...Q5,...sD},Ct=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r)},aD),uD=Object.assign({},...Of.map(e=>e.checkWrap)),x1=Object.assign(function(t){if(t)return t},uD);function lD(e,t){return F.hasKey(e,"entryType")&&e.entryType===t}function _i(e,t){return e.controlType===t}var G;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(G||(G={}));const A1=Symbol("any-type"),cD={[G.Checkbox]:!1,[G.Color]:"",[G.Custom]:void 0,[G.Dropdown]:"",[G.Hidden]:A1,[G.Number]:0,[G.Text]:""};function dD(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{if(i.controlType===G.Custom)return;const o=cD[i.controlType];o!==A1&&(typeof o!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function fD(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return F.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(n,a),o(a)}catch(a){s(et(a))}}):(e.set(n,i),i)}}function mo(e,t,r){if(t in e)return e[t];{const n=r();return F.isPromise(n)?new Promise(async(i,o)=>{try{const s=await n;e[t]=s,i(s)}catch(s){o(et(s))}}):(e[t]=n,n)}}function no(e){return Ge(e).map(t=>[t,e[t]])}function xa(e){return Object.fromEntries(e)}function ei(e,t,r){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return r(a,i,o,s)&&n.push(a),n},[])}function mD(e,t,r={}){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return mo(n,a,()=>[]).push(i),n},{})}function Ol(e,t,r={}){try{let n=!1;const i=e.map((o,s,a)=>{const u=t(o,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(F.isTruthy);return n?new Promise(async(o,s)=>{try{const a=ei(await Promise.all(i),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},F.isTruthy);o(xa(a))}catch(a){s(et(a))}}):xa(i)}catch(n){throw et(n)}}function hD(e){return Object.entries(e).reverse().filter(([,t])=>t.length).reduce((t,[r,n])=>(t.length||(t=[{}]),n.flatMap(i=>t.map(o=>({...o,[r]:i})))),[])}function pD(e){return Array.isArray(e)?e:[e]}function gD({min:e,max:t}){const{min:r,max:n}=xf({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/i)*i,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return r+l%i}const w0=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Qi(e=16){let t="";for(let r=0;r<e;r++){const n=gD({min:0,max:w0.length-1});t+=w0[n]}return t}function E1(e){if(F.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>St(t).trim()).join(`
`))}function yD(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):F.hasKey(t,"fallbackValue")?t.fallbackValue:et(n)):r}catch(r){return t.handleError?t.handleError(r):F.hasKey(t,"fallbackValue")?t.fallbackValue:et(r)}}function bD(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const wD="modulepreload",vD=function(e){return"/vira/book/"+e},v0={},nl=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=u(r.map(l=>{if(l=vD(l),l in v0)return;v0[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":wD,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,b)=>{f.addEventListener("load",m),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var bt;(function(e){e.Standard="stdout",e.Error="stderr"})(bt||(bt={}));var oe;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(oe||(oe={}));async function $D(){return await Vg({async[ln.Node](){const e=(await nl(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[oe.Bold]:e.bold.open,[oe.Debug]:e.blueBright.open,[oe.Error]:e.red.open,[oe.Faint]:e.gray.open,[oe.Info]:e.cyan.open,[oe.Mutate]:e.magenta.open,[oe.NormalWeight]:"\x1B[22m",[oe.Plain]:"",[oe.Reset]:e.reset.open,[oe.Success]:e.green.open,[oe.Warning]:e.yellow.open}},[ln.Web](){return Promise.resolve({[oe.Bold]:"font-weight: bold",[oe.Debug]:"color: blue",[oe.Error]:"color: red",[oe.Faint]:"color: grey",[oe.Info]:"color: teal",[oe.Mutate]:"color: magenta",[oe.NormalWeight]:"",[oe.Plain]:"",[oe.Reset]:"",[oe.Success]:"color: green",[oe.Warning]:"color: orange"})}})}const wr=await $D(),DD={[oe.Bold]:{colors:[wr.bold],logType:bt.Standard},[oe.Debug]:{colors:[wr.debug],logType:bt.Standard},[oe.Faint]:{colors:[wr.faint],logType:bt.Standard},[oe.Info]:{colors:[wr.info],logType:bt.Standard},[oe.Mutate]:{colors:[wr.mutate,wr.bold],logType:bt.Standard},[oe.NormalWeight]:{colors:[wr.normalWeight],logType:bt.Standard},[oe.Plain]:{colors:[],logType:bt.Standard},[oe.Reset]:{colors:[wr.reset],logType:bt.Standard},[oe.Success]:{colors:[wr.success,wr.bold],logType:bt.Standard},[oe.Error]:{colors:[wr.error,wr.bold],logType:bt.Error},[oe.Warning]:{colors:[wr.warning],logType:bt.Error}};function hr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Go({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function xD(e,t){try{let r=!1;const n=no(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(F.isTruthy);return r?new Promise(async(i,o)=>{try{const s=ei(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},F.isTruthy);i(xa(s))}catch(s){o(et(s))}}):xa(n)}catch(r){throw et(r)}}function AD(e,t){return xD(e,(r,n)=>{const i=n,o=t(n,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function C1(e,...t){const r={...e};return t.forEach(n=>{n&&no(n).forEach(([i,o])=>{o!=null&&(r[i]=o)})}),r}function ED(e){return e.replace(/,/g,"")}function CD(e){return typeof e=="number"?e:Number(typeof e=="string"?ED(e):e)}function kD(e){const t=FD(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function FD(e){const t=CD(e);if(!isNaN(t))return t}const k1="px";function Aa(e){return Bf({value:e,suffix:k1})}function SD(e){return kD(F1({value:e,suffix:k1}))}function Bf({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function F1({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function TD(){return await Vg({async[ln.Node](){const{inspect:e}=await nl(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[oe.Reset].colors.join("")].join(""),css:void 0}}},[ln.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:ei(r.colorConfig[t].colors,s=>F1({value:s,suffix:";"}),F.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?St(s):g(s)).join(`
`),r.omitColors?"":r.colorConfig[oe.Reset].colors.join("")].join(""),css:n}}}})}const MD=await TD(),PD={colorConfig:DD,omitColors:!1},ND=S1({[bt.Error](){},[bt.Standard](){}});function S1(e,t){const r=C1(PD,t);function n(o){e[r.colorConfig[o.colorKey].logType](MD({...o,options:r}))}const i=AD(oe,o=>(...s)=>n({args:s,colorKey:o}));return{...i,if(o){return o?i:ND}}}const ID=Df(ln.Node)?{[bt.Error]({text:e}){process.stderr.write(e+`
`)},[bt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[bt.Error]({text:e,css:t}){console.error(hr({value:e,prefix:"%c"}),t)},[bt.Standard]({text:e,css:t}){console.log(hr({value:e,prefix:"%c"}),t)}},Rf=S1(ID);function OD(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function BD(e,{digits:t}){const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function RD({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=Ky(Zy(t,{caseSensitive:r}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),o}function LD(e,t,{caseSensitive:r}){const n=RD({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=Zy(t,{caseSensitive:r});return e.split(i).reduce((s,a,u)=>{const l=n[u],c=s.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function jD(e,t){return e.split(t)}function $0(e,t){const{min:r,max:n}=xf(t);if(t.takeOverflow){const i=n-r+1,o=(e-r)%i;return o<0?r+i+o:r+o}else return e>n?r:e<r?n:e}function nr(e,t){let r=!1;const n=Ge(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(r=!0),i[o]=s,i},{});return r?new Promise(async(i,o)=>{try{await Promise.all(Ge(n).map(async s=>{const a=await n[s];n[s]=a})),i(n)}catch(s){o(et(s))}}):n}function Bl(e,t){const r=no(e).filter(([n,i])=>t(n,i,e));return xa(r)}function UD(e,t){return Bl(e,r=>!t.includes(r))}function _D(e,t){return Bl(e,r=>t.includes(r))}function Bd(e){return Ge(e).map(t=>e[t])}function T1(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var Yn;(function(e){e.Upper="upper",e.Lower="lower"})(Yn||(Yn={}));const VD={firstLetterCase:Yn.Lower};function WD(e,t){if(!e.length)return"";const r=e[0];return(t===Yn.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function zD(e){return e.toLowerCase()!==e.toUpperCase()}function D0(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(zD(n)){if(t===Yn.Upper&&n!==n.toUpperCase()||t===Yn.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function qD(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""}),i=C1(VD,t);return WD(n,i.firstLetterCase)}function KD(e){return e.split("").reduce((r,n,i,o)=>{const s=i>0&&o[i-1]||"",a=i<o.length-1&&o[i+1]||"",u=D0(s,Yn.Lower,{rejectNoCaseCharacters:!0})||D0(a,Yn.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function GD(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function ZD({value:e,wrapper:t}){return hr({value:Bf({value:e,suffix:t}),prefix:t})}function bn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Lf(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class HD{listeners={};universalListeners=new Map;getListenerCount(){return Bd(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function i(o,s){r.once&&n(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const i=F.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(r)||!1;function s(a,u){n.once&&o(),r(a,u)}return mo(this.listeners,i,()=>new Map).set(r,{listener:s,removeListener:o}),o}removeListener(t,r){const n=F.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const o=i.get(r);return o?o.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=Bd(this.listeners).reduce((n,i)=>{const o=i.size||0;return i.clear(),n+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class jf extends HD{}function Uf(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Rd(e,t,r){return Uf(globalThis,e,t,r)}function _f(e,t){return Ea(e.title),e.parent?[..._f(e.parent),Ea(e.parent.title)].concat([]):[]}function Ea(e){return T1(e).toLowerCase().replaceAll(/\s/g,"-")}function JD({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const YD=/[/?#&=]/;function M1(e){const t=e.match(YD);return e.trim()?Ea(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const XD={[Ot.ElementExample]:()=>[],[Ot.Page]:e=>[M1(e.title),...dD(e.controls,e.title)].filter(F.isTruthy),[Ot.Root]:()=>[]},il="_isBookTreeNode",P1=new Map;function QD(e){return P1.get(e)}function ex(e,t){fD(P1,e,()=>t)}function Zo(e,t){return N1(e)&&e.entry.entryType===t}function N1(e){return!!(F.hasKeys(e,[il,"entry"])&&e[il])}function tx(){return{[il]:!0,entry:{entryType:Ot.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function rx({entries:e,debug:t}){const r=QD(e);if(r)return r;const n=tx();e.forEach(s=>Vf({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const i=I1(n),o={tree:n,flattenedNodes:i};return ex(e,o),t&&console.info("element-book tree:",n),o}function nx(e,t,r){if(!t.parent)return e;const n=Ld(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Vf({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=Ld(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${_f(t).join(" > ")}`);return i}function Vf({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=XD[t.entryType](t);t.errors.push(...i);const o=nx(e,t,r),s=Ea(t.title),a=o.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[il]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};o.children[s]=u,lD(t,Ot.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Vf({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Ld(e,t){const r=N1(e)?e.fullUrlBreadcrumbs.slice(0,-1):_f(e);return r.length?r.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function I1(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>I1(i));return[e,...r].flat()}function Wf(e,t){return zf(e,["",...t],void 0)}function zf(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const o=e.children[i||""],s=o&&zf(o,n,r);return{...e.controls,...s}}function ix(e,t,r){const n={...e};return zf(n,["",...t],r),n}function O1(e,t){const r=t?.controls||(Zo(e,Ot.Page)?nr(e.entry.controls,(i,o)=>o.initValue):{});return{children:nr(e.children,(i,o)=>O1(o,t?.children?.[o.urlBreadcrumb])),controls:r}}function ge(e){const t={...e,entryType:Ot.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,isVertical:t.useVerticalExamples,entryType:Ot.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),M1(n.title)].filter(F.isTruthy)};r.add(n.title),t.elementExamples[Ea(i.title)]=i}}),t}var cr;(function(e){e.Search="search",e.Book="book"})(cr||(cr={}));function jd(e){return e[0]===cr.Book?"":e[1]?decodeURIComponent(e[1]):""}const ns={hash:void 0,paths:[cr.Book],search:void 0};const _u=globalThis,qf=_u.ShadowRoot&&(_u.ShadyCSS===void 0||_u.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kf=Symbol(),x0=new WeakMap;let B1=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Kf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(qf&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=x0.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&x0.set(r,t))}return t}toString(){return this.cssText}};const Pe=e=>new B1(typeof e=="string"?e:e+"",void 0,Kf),Vu=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new B1(r,e,Kf)},ox=(e,t)=>{if(qf)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=_u.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},A0=qf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Pe(r)})(e):e;const{is:sx,defineProperty:ax,getOwnPropertyDescriptor:ux,getOwnPropertyNames:lx,getOwnPropertySymbols:cx,getPrototypeOf:dx}=Object,Rl=globalThis,E0=Rl.trustedTypes,fx=E0?E0.emptyScript:"",mx=Rl.reactiveElementPolyfillSupport,ca=(e,t)=>e,ol={toAttribute(e,t){switch(t){case Boolean:e=e?fx:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Gf=(e,t)=>!sx(e,t),C0={attribute:!0,type:String,converter:ol,reflect:!1,useDefault:!1,hasChanged:Gf};Symbol.metadata??=Symbol("metadata"),Rl.litPropertyMetadata??=new WeakMap;let Bo=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=C0){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&ax(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=ux(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??C0}static _$Ei(){if(this.hasOwnProperty(ca("elementProperties")))return;const t=dx(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ca("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ca("properties"))){const r=this.properties,n=[...lx(r),...cx(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(A0(i))}else t!==void 0&&r.push(A0(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ox(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:ol).toAttribute(r,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ol;this._$Em=i;const a=s.fromAttribute(r,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,r,n,i=!1,o){if(t!==void 0){const s=this.constructor;if(i===!1&&(o=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Gf)(o,r)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Bo.elementStyles=[],Bo.shadowRootOptions={mode:"open"},Bo[ca("elementProperties")]=new Map,Bo[ca("finalized")]=new Map,mx?.({ReactiveElement:Bo}),(Rl.reactiveElementVersions??=[]).push("2.1.2");const Zf=globalThis,k0=e=>e,sl=Zf.trustedTypes,F0=sl?sl.createPolicy("lit-html",{createHTML:e=>e}):void 0,R1="$lit$",pi=`lit$${Math.random().toFixed(9).slice(2)}$`,L1="?"+pi,hx=`<${L1}>`,io=document,Ca=()=>io.createComment(""),ka=e=>e===null||typeof e!="object"&&typeof e!="function",Hf=Array.isArray,px=e=>Hf(e)||typeof e?.[Symbol.iterator]=="function",_c=`[ 	
\f\r]`,Ks=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S0=/-->/g,T0=/>/g,Vi=RegExp(`>|${_c}(?:([^\\s"'>=/]+)(${_c}*=${_c}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),M0=/'/g,P0=/"/g,j1=/^(?:script|style|textarea|title)$/i,gx=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),yx=gx(1),Cr=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),N0=new WeakMap,Hi=io.createTreeWalker(io,129);function U1(e,t){if(!Hf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return F0!==void 0?F0.createHTML(t):t}const bx=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=Ks;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,f=0;for(;f<u.length&&(s.lastIndex=f,c=s.exec(u),c!==null);)f=s.lastIndex,s===Ks?c[1]==="!--"?s=S0:c[1]!==void 0?s=T0:c[2]!==void 0?(j1.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Vi):c[3]!==void 0&&(s=Vi):s===Vi?c[0]===">"?(s=i??Ks,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?Vi:c[3]==='"'?P0:M0):s===P0||s===M0?s=Vi:s===S0||s===T0?s=Ks:(s=Vi,i=void 0);const m=s===Vi&&e[a+1].startsWith("/>")?" ":"";o+=s===Ks?u+hx:d>=0?(n.push(l),u.slice(0,d)+R1+u.slice(d)+pi+m):u+pi+(d===-2?a:m)}return[U1(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Fa{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,u=this.parts,[l,c]=bx(t,r);if(this.el=Fa.createElement(l,n),Hi.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Hi.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(R1)){const f=c[s++],m=i.getAttribute(d).split(pi),b=/([.?@])?(.*)/.exec(f);u.push({type:1,index:o,name:b[2],strings:m,ctor:b[1]==="."?vx:b[1]==="?"?$x:b[1]==="@"?Dx:Ll}),i.removeAttribute(d)}else d.startsWith(pi)&&(u.push({type:6,index:o}),i.removeAttribute(d));if(j1.test(i.tagName)){const d=i.textContent.split(pi),f=d.length-1;if(f>0){i.textContent=sl?sl.emptyScript:"";for(let m=0;m<f;m++)i.append(d[m],Ca()),Hi.nextNode(),u.push({type:2,index:++o});i.append(d[f],Ca())}}}else if(i.nodeType===8)if(i.data===L1)u.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(pi,d+1))!==-1;)u.push({type:7,index:o}),d+=pi.length-1}o++}}static createElement(t,r){const n=io.createElement("template");return n.innerHTML=t,n}}function is(e,t,r=e,n){if(t===Cr)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const o=ka(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=is(e,i._$AS(e,t.values),i,n)),t}class wx{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??io).importNode(r,!0);Hi.currentNode=i;let o=Hi.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Es(o,o.nextSibling,this,t):u.type===1?l=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(l=new xx(o,this,t)),this._$AV.push(l),u=n[++a]}s!==u?.index&&(o=Hi.nextNode(),s++)}return Hi.currentNode=io,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Es{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=is(this,t,r),ka(t)?t===X||t==null||t===""?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==Cr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):px(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==X&&ka(this._$AH)?this._$AA.nextSibling.data=t:this.T(io.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Fa.createElement(U1(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const o=new wx(i,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=N0.get(t.strings);return r===void 0&&N0.set(t.strings,r=new Fa(t)),r}k(t){Hf(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new Es(this.O(Ca()),this.O(Ca()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=k0(t).nextSibling;k0(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ll{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=X}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=is(this,t,r,0),s=!ka(t)||t!==this._$AH&&t!==Cr,s&&(this._$AH=t);else{const a=t;let u,l;for(t=o[0],u=0;u<o.length-1;u++)l=is(this,a[n+u],r,u),l===Cr&&(l=this._$AH[u]),s||=!ka(l)||l!==this._$AH[u],l===X?t=X:t!==X&&(t+=(l??"")+o[u+1]),this._$AH[u]=l}s&&!i&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class vx extends Ll{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class $x extends Ll{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class Dx extends Ll{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=is(this,t,r,0)??X)===Cr)return;const n=this._$AH,i=t===X&&n!==X||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==X&&(n===X||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class xx{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){is(this,t)}}const Ax={I:Es},Ex=Zf.litHtmlPolyfillSupport;Ex?.(Fa,Es),(Zf.litHtmlVersions??=[]).push("3.3.2");const Cx=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const o=r?.renderBefore??null;n._$litPart$=i=new Es(t.insertBefore(Ca(),o),o,void 0,r??{})}return i._$AI(e),i};const Jf=globalThis;let da=class extends Bo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Cx(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Cr}};da._$litElement$=!0,da.finalized=!0,Jf.litElementHydrateSupport?.({LitElement:da});const kx=Jf.litElementPolyfillSupport;kx?.({LitElement:da});(Jf.litElementVersions??=[]).push("4.2.2");function Gr(e){if(F.isObject(e))return nr(e,(r,n)=>{if(!F.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(KD(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const o=n,s=r.startsWith("--")?Pe(r):r.startsWith("-")?Vu`-${Pe(r)}`:Vu`--${Pe(r)}`;return{name:s,value:Vu`var(${s}, ${Pe(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${Gr.name}' function.`)}function _1({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function Fx({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}const $e=Gr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Sx={nav:{hover:{background:$e["element-book-nav-hover-background-color"],foreground:$e["element-book-nav-hover-foreground-color"]},active:{background:$e["element-book-nav-active-background-color"],foreground:$e["element-book-nav-active-foreground-color"]},selected:{background:$e["element-book-nav-selected-background-color"],foreground:$e["element-book-nav-selected-foreground-color"]}},accent:{icon:$e["element-book-accent-icon-color"]},page:{background:$e["element-book-page-background-color"],backgroundFaint1:$e["element-book-page-background-faint-level-1-color"],backgroundFaint2:$e["element-book-page-background-faint-level-2-color"],foreground:$e["element-book-page-foreground-color"],foregroundFaint1:$e["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:$e["element-book-page-foreground-faint-level-2-color"]}};function Tx(e,t){V1(e,t,Sx)}function Ud(e){return F.hasKey(e,"_$cssResult$")}function I0(e){return F.hasKeys(e,["name","value","default"])&&F.isString(e.default)&&Ud(e.name)&&Ud(e.value)}function V1(e,t,r){Object.entries(t).forEach(([n,i])=>{const o=r[n];if(!o)throw new Error(`no nestedCssVar at key '${n}'`);if(Ud(i)){if(!I0(o))throw new Error(`got a CSS result at '${n}' but no CSS var`);_1({forCssVar:o,onElement:e,toValue:String(i)})}else{if(I0(o))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);V1(e,i,o)}})}function ra(e,t){let r=e.length,n,i,o=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,o=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(c=>[c]):[[]],s=!0);let a=i[0].length,u=i[0].map((c,d)=>i.map(f=>f[d])),l=n.map(c=>u.map(d=>{let f=0;if(!Array.isArray(c)){for(let m of d)f+=c*m;return f}for(let m=0;m<c.length;m++)f+=c[m]*(d[m]||0);return f}));return r===1&&o&&(l=l[0]),a===1&&s?r===1&&o?l[0]:l.map(c=>c[0]):l}function Vc(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Qe(e,t,r=[0,0,0]){const n=Vc(e,t[0]),i=Vc(e,t[1]),o=Vc(e,t[2]);return r[0]=n,r[1]=i,r[2]=o,r}function Cs(e){return bi(e)==="string"}function bi(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Yf(e,{precision:t=16,unit:r}){return xe(e)?"none":(e=+Xf(e,t),e+(r??""))}function xe(e){return e===null}function ct(e){return xe(e)?0:e}function Xf(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}function Sa(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function W1(e,t,r){return(r-e)/(t-e)}function _d(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:Sa(t[0],t[1],W1(e[0],e[1],r))}function jl(e,t,r){return Math.max(Math.min(r,t),e)}function Ul(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function dt(e,t){return Ul(Math.abs(e)**t,e)}function Qf(e,t){return t===0?0:e/t}function z1(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}function os(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),i=n?.constructor?.name;if(i===r)return!0;if(!i||i==="Object")return!1;e=n}return!1}var Mx=Object.freeze({__proto__:null,bisectLeft:z1,clamp:jl,copySign:Ul,interpolate:Sa,interpolateInv:W1,isInstance:os,isNone:xe,isString:Cs,mapRange:_d,multiplyMatrices:ra,multiply_v3_m3x3:Qe,serializeNumber:Yf,skipNone:ct,spow:dt,toPrecision:Xf,type:bi,zdiv:Qf});class Px{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Di=new Px;var kr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let O0=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:i,max:o}=n.groups;(i||o)&&(this.range=[+i,+o])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),_d(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return t=_d(this.coordRange,n,t),Yf(t,{unit:i,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return os(t,this)?t:new this(t,r)}};const Wc=Symbol("instance");class al{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Wc]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let i=["<number>","<percentage>"];return n.type==="angle"&&i.push("<angle>"),i})),this.coords=this.coords.map((n,i)=>{let o=this.spaceCoords[i];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>O0.get(s,o))}))}serializeCoords(t,r,n){return n=t.map((i,o)=>O0.get(n?.[o]??this.coords[o][0],this.spaceCoords[o])),t.map((i,o)=>n[o].serialize(i,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,i],o)=>{let s=t[o];if(xe(s)||isNaN(s))return s;let a=r[o],u=this.coords[o].find(l=>l.type==a);if(!u){let l=i.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${l} in ${this.name}()`)}return s=u.resolve(s),u.range&&(r[o]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||os(t,this)?t:t[Wc]?t[Wc]:new al(t,...r)}}const tr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Vd(e){return Array.isArray(e)?e:tr[e]}function ul(e,t,r,n={}){if(e=Vd(e),t=Vd(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(Di.run("chromatic-adaptation-start",i),i.M||(i.W1===tr.D65&&i.W2===tr.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===tr.D50&&i.W2===tr.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Di.run("chromatic-adaptation-end",i),i.M)return Qe(i.XYZ,i.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function q1(e,t){let r={str:String(e)?.trim(),options:t};if(Di.run("parse-start",r),r.color)return r.color;r.parsed=Ix(r.str);let n,i=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let o=r.parsed.name,s,a,u=r.parsed.args,l=u.map((f,m)=>r.parsed.argMeta[m]?.type);if(o==="color"){let f=u.shift();l.shift();let m=f.startsWith("--")?f.substring(2):`--${f}`,b=[f,m];if(s=_.findFormat({name:o,id:b,type:"function"}),!s){let w,x=f in _.registry?f:m;if(x in _.registry){let D=_.registry[x].formats?.color?.id;D&&(w=`Did you mean ${e.replace("color("+f,"color("+D)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(w??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!f.startsWith("--")&&kr.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${f}).`),f.startsWith("--")&&!s.id.startsWith("--")&&kr.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${f}).`)}else s=_.findFormat({name:o,type:"function"}),a=s.space;i&&Object.assign(i,{format:s,formatId:s.name,types:l,commas:r.parsed.commas});let c=1;r.parsed.lastAlpha&&(c=r.parsed.args.pop(),i&&(i.alphaType=l.pop()));let d=s.coords.length;if(u.length!==d)throw new TypeError(`Expected ${d} coordinates for ${a.id} in ${r.str}), got ${u.length}`);u=s.coerceCoords(u,l),n={spaceId:a.id,coords:u,alpha:c}}else e:for(let o of _.all)for(let s in o.formats){let a=o.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let u=o.getFormat(a),l=u.parse(r.str);if(l){i&&Object.assign(i,{format:u,formatId:s}),n=l;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=xe(n.alpha)?n.alpha:n.alpha===void 0?1:jl(0,n.alpha,1),n}const K1={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},ll={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(K1).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Nx(e){let t={},r=e.match(ll.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*K1[r]):ll.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function Ix(e){if(!e)return;e=e.trim();let t=e.match(ll.function);if(t){let r=[],n=[],i=!1,o=t[1].toLowerCase(),s=t[2].replace(ll.singleArgument,(a,u)=>{let{value:l,meta:c}=Nx(u);return(a.startsWith("/")||o!=="color"&&r.length===3)&&(i=!0),r.push(l),n.push(c),""});return{name:o,args:r,argMeta:n,lastAlpha:i,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function Y(e,t){if(Array.isArray(e))return e.map(n=>Y(n,t));if(!e)throw new TypeError("Empty color reference");Cs(e)&&(e=q1(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=_.get(r)),e.alpha===void 0&&(e.alpha=1),e}const Ox=75e-6;class _{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?_.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Vd(n),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:_.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:Bx(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Di.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Ox}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,o)=>{let s=n[o];if(s.type!=="angle"&&s.range){if(xe(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=al.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=Y(t);[t,r]=[a.space,a.coords]}if(t=_.get(t),this.equals(t))return r;r=r.map(a=>xe(a)?0:a);let n=this.path,i=t.path,o,s;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)o=n[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=Y(t);[t,r]=[n.space,n.coords]}return t=_.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(_.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||os(t,this))return t;if(bi(t)==="string"){let i=_.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return _.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=_.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[i,o]of Object.entries(n.formats)){o.name??=i,o.type??="function";let s=(!t.name||o.name===t.name)&&(!t.type||o.type===t.type);if(t.id){let a=o.ids||[o.id],u=Array.isArray(t.id)?t.id:[t.id];s&&=u.some(l=>a.includes(l))}if(s){let a=al.get(o,n);return a!==o&&(n.formats[o.name]=a),a}}return null}static resolveCoord(t,r){let n=bi(t),i,o;if(n==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=_.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=bi(o),n==="number"||n==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=_.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function Bx(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Bt=new _({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Kt extends _{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Bt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=Qe(r,t.toXYZ_M);return this.white!==this.base.white&&(n=ul(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=ul(this.base.white,this.white,r),Qe(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function G1(e,t={}){if(Array.isArray(e))return e.map(u=>G1(u,t));let{cssProperty:r="background-color",element:n,...i}=t,o=null;try{return Y(e,i)}catch(u){o=u}let{CSS:s,getComputedStyle:a}=globalThis;if(Cs(e)&&n&&s&&a&&s.supports(r,e)){let u=n.style[r];e!==u&&(n.style[r]=e);let l=a(n).getPropertyValue(r);if(e!==u&&(n.style[r]=u),l!==e)try{return Y(l,i)}catch(c){o=c}else o={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=o),null}function Ka(e,t){e=Y(e);let r=_.get(t,t?.space),n=t?.precision,i;return!r||e.space.equals(r)?i=e.coords.slice():i=r.from(e),n===void 0?i:i.map(o=>Xf(o,n))}function Dr(e,t){if(e=Y(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=_.resolveCoord(t,e.space);return Ka(e,r)[n]}function em(e,t,r,n){return e=Y(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=_.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}em.returns="color";function Xn(e,t,r){if(e=Y(e),arguments.length===2&&bi(arguments[1])==="object"){let n=arguments[1];for(let i in n)Xn(e,i,n[i])}else if(typeof r=="function"&&(r=r(Dr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:i}=_.resolveCoord(t,e.space),o=Ka(e,n);o[i]=r,em(e,n,o)}return e}Xn.returns="color";var tm=new _({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Bt,fromBase:e=>ul(Bt.white,"D50",e),toBase:e=>ul("D50",Bt.white,e)});const Rx=216/24389,B0=24/116,vu=24389/27;let zc=tr.D50;var xr=new _({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:zc,base:tm,fromBase(e){let r=e.map((s,a)=>s/zc[a]).map(s=>s>Rx?Math.cbrt(s):(vu*s+16)/116),n=116*r[1]-16,i=500*(r[0]-r[1]),o=200*(r[1]-r[2]);return[n,i,o]},toBase(e){let[t,r,n]=e,i=[];return i[1]=(t+16)/116,i[0]=r/500+i[1],i[2]=i[1]-n/200,[i[0]>B0?Math.pow(i[0],3):(116*i[0]-16)/vu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/vu,i[2]>B0?Math.pow(i[2],3):(116*i[2]-16)/vu].map((s,a)=>s*zc[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Zr(e){return typeof e!="number"?e:(e%360+360)%360}function Z1(e,t){let[r,n]=t,i=xe(r),o=xe(n);if(i&&o)return[r,n];if(i?r=n:o&&(n=r),e==="raw")return t;r=Zr(r),n=Zr(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Fr=new _({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:xr,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,u=a[1]-a[0];this.ε=u/1e5}let[t,r,n]=e,i=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,o=i?null:Zr(Math.atan2(n,r)*180/Math.PI),s=i?0:Math.sqrt(r**2+n**2);return[t,s,o]},toBase(e){let[t,r,n]=e,i=null,o=null;return xe(n)||(r=r<0?0:r,i=r*Math.cos(n*Math.PI/180),o=r*Math.sin(n*Math.PI/180)),[t,i,o]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const R0=25**7,cl=Math.PI,L0=180/cl,Mo=cl/180;function j0(e){const t=e*e;return t*t*t*e}function H1(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=Y([e,t]);let[o,s,a]=xr.from(e),u=Fr.from(xr,[o,s,a])[1],[l,c,d]=xr.from(t),f=Fr.from(xr,[l,c,d])[1];u<0&&(u=0),f<0&&(f=0);let m=(u+f)/2,b=j0(m),w=.5*(1-Math.sqrt(b/(b+R0))),x=(1+w)*s,D=(1+w)*c,E=Math.sqrt(x**2+a**2),M=Math.sqrt(D**2+d**2),I=x===0&&a===0?0:Math.atan2(a,x),L=D===0&&d===0?0:Math.atan2(d,D);I<0&&(I+=2*cl),L<0&&(L+=2*cl),I*=L0,L*=L0;let se=l-o,ye=M-E,Ae=L-I,je=I+L,Dt=Math.abs(Ae),Pt;E*M===0?Pt=0:Dt<=180?Pt=Ae:Ae>180?Pt=Ae-360:Ae<-180?Pt=Ae+360:kr.warn("the unthinkable has happened");let br=2*Math.sqrt(M*E)*Math.sin(Pt*Mo/2),$n=(o+l)/2,Qr=(E+M)/2,Oi=j0(Qr),Zt;E*M===0?Zt=je:Dt<=180?Zt=je/2:je<360?Zt=(je+360)/2:Zt=(je-360)/2;let Eo=($n-50)**2,Co=1+.015*Eo/Math.sqrt(20+Eo),oi=1+.045*Qr,Ht=1;Ht-=.17*Math.cos((Zt-30)*Mo),Ht+=.24*Math.cos(2*Zt*Mo),Ht+=.32*Math.cos((3*Zt+6)*Mo),Ht-=.2*Math.cos((4*Zt-63)*Mo);let Ue=1+.015*Qr*Ht,Jt=30*Math.exp(-1*((Zt-275)/25)**2),Sn=2*Math.sqrt(Oi/(Oi+R0)),Br=-1*Math.sin(2*Jt*Mo)*Sn,Dn=(se/(r*Co))**2;return Dn+=(ye/(n*oi))**2,Dn+=(br/(i*Ue))**2,Dn+=Br*(ye/(n*oi))*(br/(i*Ue)),Math.sqrt(Dn)}const Lx=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],jx=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Ux=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],wi=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var fn=new _({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Bt,fromBase(e){let t=Qe(e,Lx);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Qe(t,Ux,t)},toBase(e){let t=Qe(e,wi);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,Qe(t,jx,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Wd(e,t){[e,t]=Y([e,t]);let[r,n,i]=fn.from(e),[o,s,a]=fn.from(t),u=r-o,l=n-s,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const _x=75e-6;function eo(e,t,{epsilon:r=_x}={}){e=Y(e),t||(t=e.space),t=_.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ss(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function J1(e,t,r="lab"){r=_.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((o,s,a)=>{let u=i[a];return xe(s)||xe(u)?o:o+(u-s)**2},0))}function Vx(e,t){return J1(e,t,"lab")}const Wx=Math.PI,U0=Wx/180;function zx(e,t,{l:r=2,c:n=1}={}){[e,t]=Y([e,t]);let[i,o,s]=xr.from(e),[,a,u]=Fr.from(xr,[i,o,s]),[l,c,d]=xr.from(t),f=Fr.from(xr,[l,c,d])[1];a<0&&(a=0),f<0&&(f=0);let m=i-l,b=a-f,w=o-c,x=s-d,D=w**2+x**2-b**2,E=.511;i>=16&&(E=.040975*i/(1+.01765*i));let M=.0638*a/(1+.0131*a)+.638,I;xe(u)&&(u=0),u>=164&&u<=345?I=.56+Math.abs(.2*Math.cos((u+168)*U0)):I=.36+Math.abs(.4*Math.cos((u+35)*U0));let L=Math.pow(a,4),se=Math.sqrt(L/(L+1900)),ye=M*(se*I+1-se),Ae=(m/(r*E))**2;return Ae+=(b/(n*M))**2,Ae+=D/ye**2,Math.sqrt(Ae)}const _0=203;var rm=new _({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Bt,fromBase(e){return e.map(t=>t*_0)},toBase(e){return e.map(t=>t/_0)}});const $u=1.15,Du=.66,V0=2610/2**14,qx=2**14/2610,W0=3424/2**12,z0=2413/2**7,q0=2392/2**7,Kx=1.7*2523/2**5,K0=2**5/(1.7*2523),xu=-.56,qc=16295499532821565e-27,Gx=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Zx=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Hx=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Jx=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var Y1=new _({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:rm,fromBase(e){let[t,r,n]=e,i=$u*t-($u-1)*n,o=Du*r-(Du-1)*t,a=Qe([i,o,n],Gx).map(function(f){let m=W0+z0*dt(f/1e4,V0),b=1+q0*dt(f/1e4,V0);return dt(m/b,Kx)}),[u,l,c]=Qe(a,Hx);return[(1+xu)*u/(1+xu*u)-qc,l,c]},toBase(e){let[t,r,n]=e,i=(t+qc)/(1+xu-xu*(t+qc)),s=Qe([i,r,n],Jx).map(function(f){let m=W0-dt(f,K0),b=q0*dt(f,K0)-z0;return 1e4*dt(m/b,qx)}),[a,u,l]=Qe(s,Zx),c=(a+($u-1)*l)/$u,d=(u+(Du-1)*c)/Du;return[c,d,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),zd=new _({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Y1,fromBase:Fr.fromBase,toBase:Fr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function Yx(e,t){[e,t]=Y([e,t]);let[r,n,i]=zd.from(e),[o,s,a]=zd.from(t),u=r-o,l=n-s;xe(i)&&xe(a)?(i=0,a=0):xe(i)?i=a:xe(a)&&(a=i);let c=i-a,d=2*Math.sqrt(n*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const X1=3424/4096,Q1=2413/128,eb=2392/128,G0=2610/16384,Xx=2523/32,Qx=16384/2610,Z0=32/2523,eA=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],tA=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],rA=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],nA=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var qd=new _({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:rm,fromBase(e){let t=Qe(e,eA);return iA(t)},toBase(e){let t=oA(e);return Qe(t,nA)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function iA(e){let t=e.map(function(r){let n=X1+Q1*(r/1e4)**G0,i=1+eb*(r/1e4)**G0;return(n/i)**Xx});return Qe(t,tA)}function oA(e){return Qe(e,rA).map(function(n){let i=Math.max(n**Z0-X1,0),o=Q1-eb*n**Z0;return 1e4*(i/o)**Qx})}function sA(e,t){[e,t]=Y([e,t]);let[r,n,i]=qd.from(e),[o,s,a]=qd.from(t);return 720*Math.sqrt((r-o)**2+.25*(n-s)**2+(i-a)**2)}function aA(e,t){[e,t]=Y([e,t]);let r=2,[n,i,o]=fn.from(e),[s,a,u]=fn.from(t),l=n-s,c=r*(i-a),d=r*(o-u);return Math.sqrt(l**2+c**2+d**2)}const uA=tr.D65,tb=.42,H0=1/tb,Kc=2*Math.PI,rb=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],lA=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],cA=[[460,451,288],[460,-891,-261],[460,-220,-6300]],dA={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},zi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},fA=180/Math.PI,J0=Math.PI/180;function nb(e,t){return e.map(n=>{const i=dt(t*Math.abs(n)*.01,tb);return 400*Ul(i,n)/(i+27.13)})}function mA(e,t){const r=100/t*27.13**H0;return e.map(n=>{const i=Math.abs(n);return Ul(r*dt(i/(400-i),H0),n)})}function hA(e){let t=Zr(e);t<=zi.h[0]&&(t+=360);const r=z1(zi.h,t)-1,[n,i]=zi.h.slice(r,r+2),[o,s]=zi.e.slice(r,r+2),a=zi.H[r],u=(t-n)/o;return a+100*u/(u+(i-t)/s)}function pA(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=zi.h.slice(r,r+2),[o,s]=zi.e.slice(r,r+2);return Zr((t*(s*n-o*i)-100*n*s)/(t*(s-o)-100*s))}function ib(e,t,r,n,i){const o={};o.discounting=i,o.refWhite=e,o.surround=n;const s=e.map(x=>x*100);o.la=t,o.yb=r;const a=s[1],u=Qe(s,rb);let l=dA[o.surround];const c=l[0];o.c=l[1],o.nc=l[2];const f=(1/(5*o.la+1))**4;o.fl=f*o.la+.1*(1-f)*(1-f)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const m=Math.max(Math.min(c*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map(x=>Sa(1,a/x,m)),o.dRgbInv=o.dRgb.map(x=>1/x);const b=u.map((x,D)=>x*o.dRgb[D]),w=nb(b,o.fl);return o.aW=o.nbb*(2*w[0]+w[1]+.05*w[2]),o}const Y0=ib(uA,64/Math.PI*.2,20,"average",!1);function Kd(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Zr(e.h)*J0:r=pA(e.H)*J0;const n=Math.cos(r),i=Math.sin(r);let o=0;e.J!==void 0?o=dt(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=dt(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*dt(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,f=23*(d+.305)*Qf(a,23*c+a*(11*n+108*i)),m=f*n,b=f*i,w=mA(Qe([d,m,b],cA).map(x=>x*1/1403),t.fl);return Qe(w.map((x,D)=>x*t.dRgbInv[D]),lA).map(x=>x/100)}function ob(e,t){const r=e.map(M=>M*100),n=nb(Qe(r,rb).map((M,I)=>M*t.dRgb[I]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,o=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(o,i)%Kc+Kc)%Kc,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Qf(a*Math.sqrt(i**2+o**2),n[0]+n[1]+1.05*n[2]+.305),l=dt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=dt(c/t.aW,.5*t.c*t.z),f=100*dt(d,2),m=4/t.c*d*(t.aW+4)*t.flRoot,b=l*d,w=b*t.flRoot,x=Zr(s*fA),D=hA(x),E=50*dt(t.c*l/(t.aW+4),1/2);return{J:f,C:b,h:x,s:E,Q:m,M:w,H:D}}var gA=new _({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Bt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=ob(e,Y0),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return Kd({J:e[0],M:e[1],h:e[2]},Y0)}});const yA=tr.D65,bA=216/24389,sb=24389/27;function wA(e){return 116*(e>bA?Math.cbrt(e):(sb*e+16)/116)-16}function Gd(e){return e>8?Math.pow((e+16)/116,3):e/sb}function vA(e,t){let[r,n,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=Gd(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){o=Kd({J:s,C:n,h:r},t);const f=Math.abs(o[1]-a);if(f<d){if(f<=u)return o;d=f}s=s-(o[1]-a)*s/(2*o[1]),c+=1}return Kd({J:s,C:n,h:r},t)}function $A(e,t){const r=wA(e[1]);if(r===0)return[0,0,0];const n=ob(e,nm);return[Zr(n.h),n.C,r]}const nm=ib(yA,200/Math.PI*Gd(50),Gd(50)*100,"average",!1);var Ta=new _({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Bt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=$A(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return vA(e,nm)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const DA=Math.PI/180,X0=[1,.007,.0228];function Q0(e){e[1]<0&&(e=Ta.fromBase(Ta.toBase(e)));const t=Math.log(Math.max(1+X0[2]*e[1]*nm.flRoot,1))/X0[2],r=e[0]*DA,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function xA(e,t){[e,t]=Y([e,t]);let[r,n,i]=Q0(Ta.from(e)),[o,s,a]=Q0(Ta.from(t));return Math.sqrt((r-o)**2+(n-s)**2+(i-a)**2)}var as={deltaE76:Vx,deltaECMC:zx,deltaE2000:H1,deltaEJz:Yx,deltaEITP:sA,deltaEOK:Wd,deltaEOK2:aA,deltaEHCT:xA};function AA(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const ep={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function xi(e,{method:t=kr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:o=void 0}={}){if(e=Y(e),Cs(arguments[1])?r=arguments[1]:r||(r=e.space),r=_.get(r),eo(e,r,{epsilon:0}))return e;let s;if(t==="css")s=EA(e,{space:r});else{if(t!=="clip"&&!eo(e,r)){Object.prototype.hasOwnProperty.call(ep,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:o}=ep[t]);let a=H1;if(n!==""){for(let l in as)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=as[l];break}}i===0&&(i=1e-16);let u=xi(Oe(e,r),{method:"clip",space:r});if(a(e,u)>i){if(o&&Object.keys(o).length===3){let E=_.resolveCoord(o.channel),M=Dr(Oe(e,E.space),E.id);if(xe(M)&&(M=0),M>=o.max)return Oe({space:"xyz-d65",coords:tr.D65},e.space);if(M<=o.min)return Oe({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=_.resolveCoord(t),c=l.space,d=l.id,f=Oe(e,c);f.coords.forEach((E,M)=>{xe(E)&&(f.coords[M]=0)});let b=(l.range||l.refRange)[0],w=AA(i),x=b,D=Dr(f,d);for(;D-x>w;){let E=ss(f);E=xi(E,{space:r,method:"clip"}),a(f,E)-i<w?x=Dr(f,d):D=Dr(f,d),Xn(f,d,(x+D)/2)}s=Oe(f,r)}else s=u}else s=Oe(e,r);if(t==="clip"||!eo(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(s=Oe(s,e.space)),e.coords=s.coords,e}xi.returns="color";const tp={WHITE:{space:fn,coords:[1,0,0],alpha:1},BLACK:{space:fn,coords:[0,0,0],alpha:1}};function EA(e,{space:t}={}){e=Y(e),t||(t=e.space),t=_.get(t);const i=_.get("oklch");if(t.isUnbounded)return Oe(e,t);const o=Oe(e,i);let s=o.coords[0];if(s>=1){const b=Oe(tp.WHITE,t);return b.alpha=e.alpha,Oe(b,t)}if(s<=0){const b=Oe(tp.BLACK,t);return b.alpha=e.alpha,Oe(b,t)}if(eo(o,t,{epsilon:0}))return Oe(o,t);function a(b){const w=Oe(b,t),x=Object.values(t.coords);return w.coords=w.coords.map((D,E)=>{if("range"in x[E]){const[M,I]=x[E].range;return jl(M,D,I)}return D}),w}let u=0,l=o.coords[1],c=!0,d=ss(o),f=a(d),m=Wd(f,d);if(m<.02)return f;for(;l-u>1e-4;){const b=(u+l)/2;if(d.coords[1]=b,c&&eo(d,t,{epsilon:0}))u=b;else if(f=a(d),m=Wd(f,d),m<.02){if(.02-m<1e-4)break;c=!1,u=b}else l=b}return f}function Oe(e,t,{inGamut:r}={}){e=Y(e),t=_.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=xi(i,r===!0?void 0:r)),i}Oe.returns="color";function fa(e,t={}){let{precision:r=kr.precision,format:n,inGamut:i=!0,coords:o,alpha:s,commas:a}=t,u,l=Y(e),c=n,d=l.parseMeta;d&&!n&&(d.format.canSerialize()&&(n=d.format,c=d.formatId),o??=d.types,s??=d.alphaType,a??=d.commas),c&&(n=l.space.getFormat(n)??_.findFormat(c)),n||(n=l.space.getFormat("default")??_.DEFAULT_FORMAT,c=n.name),n&&n.space&&n.space!==l.space&&(l=Oe(l,n.space));let f=l.coords.slice();if(i||=n.toGamut,i&&!eo(l)&&(f=xi(ss(l),i===!0?void 0:i).coords),n.type==="custom")if(n.serialize)u=n.serialize(f,l.alpha,t);else throw new TypeError(`format ${c} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",b=n.serializeCoords(f,r,o);if(m==="color"){let M=n.id||n.ids?.[0]||l.space.cssId||l.space.id;b.unshift(M)}let w=l.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let x=s?.type??"<number>",D=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&w<1,E="";if(a??=n.commas,D){if(r!==null){let M;x==="<percentage>"&&(M="%",w*=100),w=Yf(w,{precision:r,unit:M})}E=`${a?",":" /"} ${w}`}u=`${m}(${b.join(a?", ":" ")}${E})`}return u}const CA=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],kA=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ma=new Kt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:CA,fromXYZ_M:kA}),ab=new Kt({id:"rec2020",name:"REC.2020",base:Ma,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const FA=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],SA=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ub=new Kt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:FA,fromXYZ_M:SA});const TA=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],$t=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var lb=new Kt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:TA,fromXYZ_M:$t}),rp={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let np=Array(3).fill("<percentage> | <number>[0, 255]"),ip=Array(3).fill("<number>[0, 255]");var oo=new Kt({id:"srgb",name:"sRGB",base:lb,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:np},rgb_number:{name:"rgb",commas:!0,coords:ip,alpha:!1},color:{},rgba:{coords:np,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ip},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let i=r&&e.every(s=>s%17===0);return"#"+e.map(s=>i?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=rp.black,t.alpha=0):t.coords=rp[e],t.coords)return t}}}}),cb=new Kt({id:"p3",cssId:"display-p3",name:"P3",base:ub,fromBase:oo.fromBase,toBase:oo.toBase});kr.display_space=oo;let MA;if(typeof CSS<"u"&&CSS.supports)for(let e of[xr,ab,cb]){let t=e.getMinCoords(),n=fa({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){kr.display_space=e;break}}function PA(e,{space:t=kr.display_space,...r}={}){e=Y(e);let n=fa(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!kr.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(xe)||xe(e.alpha))&&!(MA??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=ss(e),i.coords=i.coords.map(ct),i.alpha=ct(i.alpha),n=fa(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=Oe(i,t),n=new String(fa(i,r)),n.color=i}return n}function NA(e,t,{space:r,hue:n="shorter"}={}){e=Y(e),r||=e.space,r=_.get(r);let i=Object.values(r.coords);[e,t]=[e,t].map(l=>Oe(l,r));let[o,s]=[e,t].map(l=>l.coords),a=o.map((l,c)=>{let d=i[c],f=s[c];return d.type==="angle"&&([l,f]=Z1(n,[l,f])),op(l,f)}),u=op(e.alpha,t.alpha);return{space:r,coords:a,alpha:u}}function op(e,t){return xe(e)||xe(t)?e===t?null:0:e-t}function IA(e,t){return e=Y(e),t=Y(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Ai(e){return Dr(e,[Bt,"y"])}function db(e,t){Xn(e,[Bt,"y"],t)}function OA(e){Object.defineProperty(e.prototype,"luminance",{get(){return Ai(this)},set(t){db(this,t)}})}var BA=Object.freeze({__proto__:null,getLuminance:Ai,register:OA,setLuminance:db});function RA(e,t){e=Y(e),t=Y(t);let r=Math.max(Ai(e),0),n=Math.max(Ai(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const LA=.56,jA=.57,UA=.62,_A=.65,sp=.022,VA=1.414,WA=.1,zA=5e-4,qA=1.14,ap=.027,KA=1.14;function up(e){return e>=sp?e:e+(sp-e)**VA}function Po(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function GA(e,t){t=Y(t),e=Y(e);let r,n,i,o,s,a;t=Oe(t,"srgb"),[o,s,a]=t.coords.map(m=>xe(m)?0:m);let u=Po(o)*.2126729+Po(s)*.7151522+Po(a)*.072175;e=Oe(e,"srgb"),[o,s,a]=e.coords.map(m=>xe(m)?0:m);let l=Po(o)*.2126729+Po(s)*.7151522+Po(a)*.072175,c=up(u),d=up(l),f=d>c;return Math.abs(d-c)<zA?n=0:f?(r=d**LA-c**jA,n=r*qA):(r=d**_A-c**UA,n=r*KA),Math.abs(n)<WA?i=0:n>0?i=n-ap:i=n+ap,i*100}function ZA(e,t){e=Y(e),t=Y(t);let r=Math.max(Ai(e),0),n=Math.max(Ai(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const HA=5e4;function JA(e,t){e=Y(e),t=Y(t);let r=Math.max(Ai(e),0),n=Math.max(Ai(t),0);return n>r&&([r,n]=[n,r]),n===0?HA:(r-n)/n}function YA(e,t){e=Y(e),t=Y(t);let r=Dr(e,[xr,"l"]),n=Dr(t,[xr,"l"]);return Math.abs(r-n)}const XA=216/24389,lp=24/116,Au=24389/27;let Gc=tr.D65;var Zd=new _({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Gc,base:Bt,fromBase(e){let r=e.map((n,i)=>n/Gc[i]).map(n=>n>XA?Math.cbrt(n):(Au*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>lp?Math.pow(t[0],3):(116*t[0]-16)/Au,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Au,t[2]>lp?Math.pow(t[2],3):(116*t[2]-16)/Au].map((n,i)=>n*Gc[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Zc=Math.pow(5,.5)*.5+.5;function QA(e,t){e=Y(e),t=Y(t);let r=Dr(e,[Zd,"l"]),n=Dr(t,[Zd,"l"]),i=Math.abs(Math.pow(r,Zc)-Math.pow(n,Zc)),o=Math.pow(i,1/Zc)*Math.SQRT2-40;return o<7.5?0:o}var Wu=Object.freeze({__proto__:null,contrastAPCA:GA,contrastDeltaPhi:QA,contrastLstar:YA,contrastMichelson:ZA,contrastWCAG21:RA,contrastWeber:JA});function eE(e,t,r){Cs(r)&&(r={algorithm:r});let{algorithm:n,...i}=r||{};if(!n){let o=Object.keys(Wu).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=Y(e),t=Y(t);for(let o in Wu)if("contrast"+n.toLowerCase()===o.toLowerCase())return Wu[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function _l(e){let[t,r,n]=Ka(e,Bt),i=t+15*r+3*n;return[4*t/i,9*r/i]}function fb(e){let[t,r,n]=Ka(e,Bt),i=t+r+n;return[t/i,r/i]}function tE(e){Object.defineProperty(e.prototype,"uv",{get(){return _l(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return fb(this)}})}var rE=Object.freeze({__proto__:null,register:tE,uv:_l,xy:fb});function na(e,t,r={}){Cs(r)&&(r={method:r});let{method:n=kr.deltaE,...i}=r;for(let o in as)if("deltae"+n.toLowerCase()===o.toLowerCase())return as[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function mb(e,t=.25){let n=[_.get("oklch","lch"),"l"];return Xn(e,n,i=>i*(1+t))}function hb(e,t=.25){let n=[_.get("oklch","lch"),"l"];return Xn(e,n,i=>i*(1-t))}mb.returns="color";hb.returns="color";var nE=Object.freeze({__proto__:null,darken:hb,lighten:mb});function pb(e,t,r,n={}){return[e,t]=[Y(e),Y(t)],bi(r)==="object"&&([r,n]=[.5,r]),Ga(e,t,n)(r??.5)}function gb(e,t,r={}){let n;im(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[Y(e),Y(t)],n=Ga(e,t,u));let l=na(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let f=1/(c-1);d=Array.from({length:c},(m,b)=>{let w=b*f;return{p:w,color:n(w)}})}if(i>0){let f=d.reduce((m,b,w)=>{if(w===0)return 0;let x=na(b.color,d[w-1].color,o);return Math.max(m,x)},0);for(;f>i;){f=0;for(let m=1;m<d.length&&d.length<a;m++){let b=d[m-1],w=d[m],x=(w.p+b.p)/2,D=n(x);f=Math.max(f,na(D,b.color),na(D,w.color)),d.splice(m,0,{p:x,color:n(x)}),m++}}}return d=d.map(f=>f.color),d}function Ga(e,t,r={}){if(im(e)){let[u,l]=[e,t];return Ga(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:o,premultiplied:s}=r;e=Y(e),t=Y(t),e=ss(e),t=ss(t);let a={colors:[e,t],options:r};if(n?n=_.get(n):n=_.registry[kr.interpolationSpace]||e.space,i=i?_.get(i):n,e=Oe(e,n),t=Oe(t,n),e=xi(e),t=xi(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[Dr(e,l),Dr(t,l)];xe(c)&&!xe(d)?c=d:xe(d)&&!xe(c)&&(d=c),[c,d]=Z1(u,[c,d]),Xn(e,l,c),Xn(t,l,d)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((f,m)=>{let b=t.coords[m];return Sa(f,b,u)}),c=Sa(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return s&&(d.coords=d.coords.map(f=>f/c)),i!==n&&(d=Oe(d,i)),d},{rangeArgs:a})}function im(e){return bi(e)==="function"&&!!e.rangeArgs}kr.interpolationSpace="lab";function iE(e){e.defineFunction("mix",pb,{returns:"color"}),e.defineFunction("range",Ga,{returns:"function<color>"}),e.defineFunction("steps",gb,{returns:"array<color>"})}var oE=Object.freeze({__proto__:null,isRange:im,mix:pb,range:Ga,register:iE,steps:gb}),sE=new _({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:oo,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,u]=[null,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-n)/l+2;break;case o:s=(n-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),yb=new _({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:oo,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,u]=[null,0,t],l=t-r;if(l!==0){switch(t){case n:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-n)/l+2;break;case o:s=(n-i)/l+4}s=s*60}return u&&(a=l/u),s>=360&&(s-=360),[s,a*100,u*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[i(5),i(3),i(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),aE=new _({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:yb,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let o=1-n,s=o===0?0:1-r/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const uE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],lE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var bb=new Kt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:uE,fromXYZ_M:lE}),cE=new Kt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:bb,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const dE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var wb=new Kt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:tm,toXYZ_M:dE,fromXYZ_M:fE});const mE=1/512,hE=16/512;var pE=new Kt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:wb,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<hE?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=mE?r*n**(1/1.8):16*t})}});const Eu=1.09929682680944,cp=.018053968510807;var gE=new Kt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Ma,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<cp*4.5?t/4.5:r*Math.pow((n+Eu-1)/Eu,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=cp?r*(Eu*Math.pow(n,.45)-(Eu-1)):4.5*t})}}),yE=new _({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:fn,fromBase:Fr.fromBase,toBase:Fr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const us=2*Math.PI,dl=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],fl=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Hc=Number.MAX_VALUE,ma=.206,om=.03,ia=(1+ma)/(1+om);function Nt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((i,o)=>{n+=i*t[o]}),n}function ha(e){return .5*(ia*e-ma+Math.sqrt((ia*e-ma)*(ia*e-ma)+4*om*ia*e))}function Ho(e){return(e**2+ma*e)/(ia*(e+om))}function sm(e){let[t,r]=e;return[r/t,r/(1-t)]}function bE(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function am(e,t){let r=Qe(e,wi);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,Qe(r,t,r)}function Vl(e,t,r,n){let i=vE(e,t,r,n),o=am([1,i*e,i*t],r),s=dt(1/Math.max(...o),1/3),a=s*i;return[s,a]}function wE(e,t,r,n,i,o,s,a){let u;if(a===void 0&&(a=Vl(e,t,o,s)),(r-i)*a[1]-(a[0]-i)*n<=0)u=a[1]*i/(n*a[0]+a[1]*(i-r));else{u=a[1]*(i-1)/(n*(a[0]-1)+a[1]*(i-r));let l=r-i,c=n,d=Nt(wi[0].slice(1),[e,t]),f=Nt(wi[1].slice(1),[e,t]),m=Nt(wi[2].slice(1),[e,t]),b=l+c*d,w=l+c*f,x=l+c*m,D=i*(1-u)+u*r,E=u*n,M=D+E*d,I=D+E*f,L=D+E*m,se=M**3,ye=I**3,Ae=L**3,je=3*b*M**2,Dt=3*w*I**2,Pt=3*x*L**2,br=6*b**2*M,$n=6*w**2*I,Qr=6*x**2*L,Oi=Nt(o[0],[se,ye,Ae])-1,Zt=Nt(o[0],[je,Dt,Pt]),Eo=Nt(o[0],[br,$n,Qr]),Co=Zt/(Zt*Zt-.5*Oi*Eo),oi=-Oi*Co,Ht=Nt(o[1],[se,ye,Ae])-1,Ue=Nt(o[1],[je,Dt,Pt]),Jt=Nt(o[1],[br,$n,Qr]),Sn=Ue/(Ue*Ue-.5*Ht*Jt),Br=-Ht*Sn,Dn=Nt(o[2],[se,ye,Ae])-1,si=Nt(o[2],[je,Dt,Pt]),lu=Nt(o[2],[br,$n,Qr]),cu=si/(si*si-.5*Dn*lu),ko=-Dn*cu;oi=Co>=0?oi:Hc,Br=Sn>=0?Br:Hc,ko=cu>=0?ko:Hc,u+=Math.min(oi,Math.min(Br,ko))}return u}function vb(e,t,r){let[n,i,o]=e,s=Vl(i,o,t,r),a=wE(i,o,n,1,n,t,r,s),u=sm(s),l=a/Math.min(n*u[0],(1-n)*u[1]),c=bE(i,o),d=n*c[0],f=(1-n)*c[1],m=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/f**4)));return d=n*.4,f=(1-n)*.8,[Math.sqrt(1/(1/d**2+1/f**2)),m,a]}function vE(e,t,r,n){let i,o,s,a,u,l,c,d;Nt(n[0][0],[e,t])>1?([i,o,s,a,u]=n[0][1],[l,c,d]=r[0]):Nt(n[1][0],[e,t])>1?([i,o,s,a,u]=n[1][1],[l,c,d]=r[1]):([i,o,s,a,u]=n[2][1],[l,c,d]=r[2]);let f=i+o*e+s*t+a*e**2+u*e*t,m=Nt(wi[0].slice(1),[e,t]),b=Nt(wi[1].slice(1),[e,t]),w=Nt(wi[2].slice(1),[e,t]),x=1+f*m,D=1+f*b,E=1+f*w,M=x**3,I=D**3,L=E**3,se=3*m*x**2,ye=3*b*D**2,Ae=3*w*E**2,je=6*m**2*x,Dt=6*b**2*D,Pt=6*w**2*E,br=l*M+c*I+d*L,$n=l*se+c*ye+d*Ae,Qr=l*je+c*Dt+d*Pt;return f=f-br*$n/($n**2-.5*br*Qr),f}function $E(e,t,r){let[n,i,o]=e,s=Ho(o),a=null,u=null;if(n=Zr(n)/360,s!==0&&s!==1&&i!==0){let l=Math.cos(us*n),c=Math.sin(us*n),[d,f,m]=vb([s,l,c],t,r),b=.8,w=1.25,x,D,E,M;i<b?(x=w*i,D=0,E=b*d,M=1-E/f):(x=5*(i-.8),D=f,E=.2*f**2*1.25**2/d,M=1-E/(m-f));let I=D+x*E/(1-M*x);a=I*l,u=I*c}return[s,a,u]}function DE(e,t,r){let n=1e-7,i=1e-4,o=e[0],s=0,a=ha(o),u=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/us;if(a!==0&&a!==1&&u!==0){let d=e[1]/u,f=e[2]/u,[m,b,w]=vb([o,d,f],t,r),x=.8,D=1.25,E,M,I,L;u<b?(M=x*m,I=1-M/b,L=u/(M+I*u),s=L*x):(E=b,M=.2*b**2*D**2/m,I=1-M/(w-b),L=(u-E)/(M+I*(u-E)),s=x+.2*L)}const c=Math.abs(s)<i;return c||a===0||Math.abs(1-a)<n?(l=null,c||(s=0)):l=Zr(l*360),[l,s,a]}var xE=new _({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:fn,gamutSpace:"self",fromBase(e){return DE(e,dl,fl)},toBase(e){return $E(e,dl,fl)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),$b=new _({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:fn,fromBase(e){return[ha(e[0]),e[1],e[2]]},toBase(e){return[Ho(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),AE=new _({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:$b,fromBase:Fr.fromBase,toBase:Fr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function EE(e,t,r){let[n,i,o]=e;n=Zr(n)/360;let s=Ho(o),a=null,u=null;if(s!==0&&i!==0){let l=Math.cos(us*n),c=Math.sin(us*n),d=Vl(l,c,t,r),[f,m]=sm(d),b=.5,w=1-b/f,x=1-i*b/(b+m-m*w*i),D=i*m*b/(b+m-m*w*i);s=o*x;let E=o*D,M=Ho(x),I=D*M/x,L=Ho(s);E=E*L/s,s=L;let[se,ye,Ae]=am([M,l*I,c*I],t),je=dt(1/Math.max(Math.max(se,ye),Math.max(Ae,0)),1/3);s=s*je,E=E*je,a=E*l,u=E*c}return[s,a,u]}function CE(e,t,r){let n=1e-4,i=e[0],o=0,s=ha(i),a=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/us;if(i!==0&&i!==1&&a!==0){let l=e[1]/a,c=e[2]/a,d=Vl(l,c,t,r),[f,m]=sm(d),b=.5,w=1-b/f,x=m/(a+i*m),D=x*i,E=x*a,M=Ho(D),I=E*M/D,[L,se,ye]=am([M,l*I,c*I],t),Ae=dt(1/Math.max(Math.max(L,se),Math.max(ye,0)),1/3);i=i/Ae,a=a/Ae,a=a*ha(i)/i,i=ha(i),s=i/D,o=(b+m)*E/(m*b+m*w*E)}return Math.abs(o)<n||s===0?u=null:u=Zr(u*360),[u,o,s]}var kE=new _({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:fn,gamutSpace:"self",fromBase(e){return CE(e,dl,fl)},toBase(e){return EE(e,dl,fl)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let Db=tr.D65;const FE=216/24389,dp=24389/27,[fp,mp]=_l({space:Bt,coords:Db});var xb=new _({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Db,base:Bt,fromBase(e){let t=[ct(e[0]),ct(e[1]),ct(e[2])],r=t[1],[n,i]=_l({space:Bt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let o=r<=FE?dp*r:116*Math.cbrt(r)-16;return[o,13*o*(n-fp),13*o*(i-mp)]},toBase(e){let[t,r,n]=e;if(t===0||xe(t))return[0,0,0];r=ct(r),n=ct(n);let i=r/(13*t)+fp,o=n/(13*t)+mp,s=t<=8?t/dp:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),um=new _({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:xb,fromBase:Fr.fromBase,toBase:Fr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const SE=216/24389,TE=24389/27,hp=$t[0][0],pp=$t[0][1],Jc=$t[0][2],gp=$t[1][0],yp=$t[1][1],Yc=$t[1][2],bp=$t[2][0],wp=$t[2][1],Xc=$t[2][2];function No(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function ml(e){const t=Math.pow(e+16,3)/1560896,r=t>SE?t:e/TE,n=r*(284517*hp-94839*Jc),i=r*(838422*Jc+769860*pp+731718*hp),o=r*(632260*Jc-126452*pp),s=r*(284517*gp-94839*Yc),a=r*(838422*Yc+769860*yp+731718*gp),u=r*(632260*Yc-126452*yp),l=r*(284517*bp-94839*Xc),c=r*(838422*Xc+769860*wp+731718*bp),d=r*(632260*Xc-126452*wp);return{r0s:n/o,r0i:i*e/o,r1s:n/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function vp(e,t){const r=t/360*Math.PI*2,n=No(e.r0s,e.r0i,r),i=No(e.r1s,e.r1i,r),o=No(e.g0s,e.g0i,r),s=No(e.g1s,e.g1i,r),a=No(e.b0s,e.b0i,r),u=No(e.b1s,e.b1i,r);return Math.min(n,i,o,s,a,u)}var ME=new _({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:um,gamutSpace:oo,fromBase(e){let[t,r,n]=[ct(e[0]),ct(e[1]),ct(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=ml(t),s=vp(o,n);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[ct(e[0]),ct(e[1]),ct(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=ml(n);i=vp(o,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});$t[0][0];$t[0][1];$t[0][2];$t[1][0];$t[1][1];$t[1][2];$t[2][0];$t[2][1];$t[2][2];function Io(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function $p(e){let t=Io(e.r0s,e.r0i),r=Io(e.r1s,e.r1i),n=Io(e.g0s,e.g0i),i=Io(e.g1s,e.g1i),o=Io(e.b0s,e.b0i),s=Io(e.b1s,e.b1i);return Math.min(t,r,n,i,o,s)}var PE=new _({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:um,gamutSpace:"self",fromBase(e){let[t,r,n]=[ct(e[0]),ct(e[1]),ct(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=ml(t),s=$p(o);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[ct(e[0]),ct(e[1]),ct(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=ml(n);i=$p(o)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),lm=new Kt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:Ma.toBase,fromBase:Ma.fromBase});const Dp=203,xp=2610/2**14,NE=2**14/2610,IE=2523/2**5,Ap=2**5/2523,Ep=3424/2**12,Cp=2413/2**7,kp=2392/2**7;var OE=new Kt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:lm,toBase(e){return e.map(function(t){return(Math.max(t**Ap-Ep,0)/(Cp-kp*t**Ap))**NE*1e4/Dp})},fromBase(e){return e.map(function(t){let r=Math.max(t*Dp/1e4,0),n=Ep+Cp*r**xp,i=1+kp*r**xp;return(n/i)**IE})}});const Fp=.17883277,Sp=.28466892,Tp=.55991073,Qc=3.7743;var BE=new Kt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:lm,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Qc:(Math.exp((t-Tp)/Fp)+Sp)/12*Qc})},fromBase(e){return e.map(function(t){return t/=Qc,t<=1/12?dt(3*t,.5):Fp*Math.log(12*t-Sp)+Tp})}});const Ab={};Di.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Eb(e.W1,e.W2,e.options.method))});Di.add("chromatic-adaptation-end",e=>{e.M||(e.M=Eb(e.W1,e.W2,e.options.method))});function Wl({id:e,toCone_M:t,fromCone_M:r}){Ab[e]=arguments[0]}function Eb(e,t,r="Bradford"){let n=Ab[r],[i,o,s]=ra(n.toCone_M,e),[a,u,l]=ra(n.toCone_M,t),c=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],d=ra(c,n.toCone_M);return ra(n.fromCone_M,d)}Wl({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Wl({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Wl({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Wl({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(tr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});tr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const RE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],LE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Cb=new Kt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:tr.ACES,toXYZ_M:RE,fromXYZ_M:LE});const Cu=2**-16,ed=-.35828683,ku=(Math.log2(65504)+9.72)/17.52;var jE=new Kt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[ed,ku],name:"Red"},g:{range:[ed,ku],name:"Green"},b:{range:[ed,ku],name:"Blue"}},referred:"scene",base:Cb,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Cu)*2:r<ku?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Cu)+9.72)/17.52:t<Cu?(Math.log2(Cu+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Mp=Object.freeze({__proto__:null,A98RGB:cE,A98RGB_Linear:bb,ACEScc:jE,ACEScg:Cb,CAM16_JMh:gA,HCT:Ta,HPLuv:PE,HSL:sE,HSLuv:ME,HSV:yb,HWB:aE,ICTCP:qd,JzCzHz:zd,Jzazbz:Y1,LCH:Fr,LCHuv:um,Lab:xr,Lab_D65:Zd,Luv:xb,OKLCH:yE,OKLab:fn,OKLrCH:AE,OKLrab:$b,Okhsl:xE,Okhsv:kE,P3:cb,P3_Linear:ub,ProPhoto:pE,ProPhoto_Linear:wb,REC_2020:ab,REC_2020_Linear:Ma,REC_2020_Scene_Referred:gE,REC_2100_HLG:BE,REC_2100_Linear:lm,REC_2100_PQ:OE,XYZ_ABS_D65:rm,XYZ_D50:tm,XYZ_D65:Bt,sRGB:oo,sRGB_Linear:lb});class ee{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Y(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,i,o;r?(n=r.space||r.spaceId,i=r.coords,o=r.alpha):[n,i,o]=t,Object.defineProperty(this,"space",{value:_.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=xe(o)?o:o===void 0?1:jl(0,o,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new ee(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=PA(this,...t);return r.color=new ee(r.color),r}static get(t,...r){return os(t,this)?t:new ee(t,...r)}static try(t,r){if(os(t,this))return t;let n=G1(t,r);return n?new ee(n):null}static defineFunction(t,r,n=r){let{instance:i=!0,returns:o}=n,s=function(...a){let u=r(...a);if(o==="color")u=ee.get(u);else if(o==="function<color>"){let l=u;u=function(...c){let d=l(...c);return ee.get(d)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>ee.get(l)));return u};t in ee||(ee[t]=s),i&&(ee.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)ee.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(ee);else for(let r in t)ee.defineFunction(r,t[r])}}ee.defineFunctions({get:Dr,getAll:Ka,set:Xn,setAll:em,to:Oe,equals:IA,inGamut:eo,toGamut:xi,distance:J1,deltas:NA,toString:fa});Object.assign(ee,{util:Mx,hooks:Di,WHITES:tr,Space:_,spaces:_.registry,parse:q1,defaults:kr});for(let e of Object.keys(Mp))_.register(Mp[e]);for(let e in _.registry)Hd(e,_.registry[e]);Di.add("colorspace-init-end",e=>{Hd(e.id,e),e.aliases?.forEach(t=>{Hd(t,e)})});function Hd(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ee.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let i=new Proxy(n,{has:((o,s)=>{try{return _.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)}),get:(o,s,a)=>{if(s&&typeof s!="symbol"&&!(s in o)&&s in i){let{index:u}=_.resolveCoord([t,s]);if(u>=0)return o[u]}return Reflect.get(o,s,a)},set:(o,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in o)||Number(s)>=0){let{index:l}=_.resolveCoord([t,s]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,s,a,u)}});return i},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}ee.extend(as);ee.extend({deltaE:na});Object.assign(ee,{deltaEMethods:as});ee.extend(nE);ee.extend({contrast:eE});ee.extend(rE);ee.extend(BA);ee.extend(oE);ee.extend(Wu);const kb=Symbol("no update");function Pp(e){return e!==kb}class td extends bn()("observable-value-update"){}class UE extends bn()("observable-value-resolve"){}class _E extends bn()("observable-value-error"){}class VE extends Lf("observable-destroy"){}class WE extends Lf("observable-callback-call"){}class zE extends bn()("observable-params-update"){}class Fb{listenTarget=new jf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===kb)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const i=this.value;return this.value=r,this.listenTarget.dispatch(new td({detail:[r,i]})),!0}return!1}listen(t,r){const n=i=>r(...i.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(td,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(td,r)}destroy(){this.listenTarget.dispatch(new VE),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function cm(e,t){return tD(e,t,(r,n)=>F.isFunction(r)&&F.isFunction(n)?!0:F.strictEquals(r,n))}var pa;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(pa||(pa={}));class qE extends Fb{equalityCheck;waitingForValueDeferredPromise=new Yu;lastSetPromise;lastSetId=Qi();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||cm,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Qi();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Yu,super.setValue(this.waitingForValueDeferredPromise.promise,F.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=et(n);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return Pp(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,F.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Qi(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new UE({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,F.strictEquals),this.dispatch(new _E({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Pp(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(et(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?pa.Rejected:this.value instanceof Promise?pa.Waiting:pa.Resolved}}class Lo extends qE{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Lo.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||cm,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Lo.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Lo.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(et(t))}finally{this.dispatch(new WE)}}updateLastParams(t){try{return this.internalParams===Lo.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new zE({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(et(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return F.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function KE(e){return pt(e)&&!yr(e)&&!Ha(e)&&Symbol.asyncIterator in e}function yr(e){return Array.isArray(e)}function Sb(e){return typeof e=="bigint"}function Za(e){return typeof e=="boolean"}function dm(e){return e instanceof globalThis.Date}function GE(e){return typeof e=="function"}function ZE(e){return pt(e)&&!yr(e)&&!Ha(e)&&Symbol.iterator in e}function HE(e){return e===null}function kn(e){return typeof e=="number"}function pt(e){return typeof e=="object"&&e!==null}function Tb(e){return e instanceof globalThis.RegExp}function st(e){return typeof e=="string"}function JE(e){return typeof e=="symbol"}function Ha(e){return e instanceof globalThis.Uint8Array}function ft(e){return e===void 0}function YE(e){return e.map(t=>hl(t))}function XE(e){return new Date(e.getTime())}function QE(e){return new Uint8Array(e)}function eC(e){return new RegExp(e.source,e.flags)}function tC(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=hl(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=hl(e[r]);return t}function hl(e){return yr(e)?YE(e):dm(e)?XE(e):Ha(e)?QE(e):Tb(e)?eC(e):pt(e)?tC(e):e}function Sr(e){return hl(e)}function fm(e,t){return Sr(t===void 0?e:{...t,...e})}function Mb(e){return Fn(e)&&globalThis.Symbol.asyncIterator in e}function Pb(e){return Fn(e)&&globalThis.Symbol.iterator in e}function Nb(e){return e instanceof globalThis.Promise}function mm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function hm(e){return e instanceof globalThis.Uint8Array}function Ib(e,t){return t in e}function Fn(e){return e!==null&&typeof e=="object"}function Tr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function ki(e){return e===void 0}function zl(e){return e===null}function ql(e){return typeof e=="boolean"}function ne(e){return typeof e=="number"}function Ob(e){return globalThis.Number.isInteger(e)}function _n(e){return typeof e=="bigint"}function Er(e){return typeof e=="string"}function Bb(e){return typeof e=="function"}function Kl(e){return typeof e=="symbol"}function Rb(e){return _n(e)||ql(e)||zl(e)||ne(e)||Er(e)||Kl(e)||ki(e)}var ot;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Fn(s);return e.AllowArrayObject?a:a&&!Tr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function i(s){return e.AllowNaN?ne(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=ki(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(ot||(ot={}));function rC(e){return globalThis.Object.freeze(e).map(t=>pl(t))}function nC(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=pl(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=pl(e[r]);return globalThis.Object.freeze(t)}function pl(e){return yr(e)?rC(e):dm(e)?e:Ha(e)?e:Tb(e)?e:pt(e)?nC(e):e}function O(e,t){const r=t!==void 0?{...t,...e}:e;switch(ot.InstanceMode){case"freeze":return pl(r);case"clone":return Sr(r);default:return r}}class jt extends Error{constructor(t){super(t)}}const dr=Symbol.for("TypeBox.Transform"),Ja=Symbol.for("TypeBox.Readonly"),ti=Symbol.for("TypeBox.Optional"),Gl=Symbol.for("TypeBox.Hint"),N=Symbol.for("TypeBox.Kind");function pm(e){return pt(e)&&e[Ja]==="Readonly"}function Fi(e){return pt(e)&&e[ti]==="Optional"}function Lb(e){return fe(e,"Any")}function jb(e){return fe(e,"Argument")}function ks(e){return fe(e,"Array")}function Zl(e){return fe(e,"AsyncIterator")}function Hl(e){return fe(e,"BigInt")}function Ya(e){return fe(e,"Boolean")}function Fs(e){return fe(e,"Computed")}function Ss(e){return fe(e,"Constructor")}function iC(e){return fe(e,"Date")}function Ts(e){return fe(e,"Function")}function Ms(e){return fe(e,"Integer")}function Jr(e){return fe(e,"Intersect")}function Jl(e){return fe(e,"Iterator")}function fe(e,t){return pt(e)&&N in e&&e[N]===t}function Ub(e){return Za(e)||kn(e)||st(e)}function ho(e){return fe(e,"Literal")}function po(e){return fe(e,"MappedKey")}function Ir(e){return fe(e,"MappedResult")}function Xa(e){return fe(e,"Never")}function oC(e){return fe(e,"Not")}function gm(e){return fe(e,"Null")}function Ps(e){return fe(e,"Number")}function wn(e){return fe(e,"Object")}function Yl(e){return fe(e,"Promise")}function Xl(e){return fe(e,"Record")}function pr(e){return fe(e,"Ref")}function _b(e){return fe(e,"RegExp")}function Qa(e){return fe(e,"String")}function ym(e){return fe(e,"Symbol")}function go(e){return fe(e,"TemplateLiteral")}function sC(e){return fe(e,"This")}function Be(e){return pt(e)&&dr in e}function yo(e){return fe(e,"Tuple")}function eu(e){return fe(e,"Undefined")}function Mt(e){return fe(e,"Union")}function aC(e){return fe(e,"Uint8Array")}function uC(e){return fe(e,"Unknown")}function lC(e){return fe(e,"Unsafe")}function cC(e){return fe(e,"Void")}function dC(e){return pt(e)&&N in e&&st(e[N])}function rr(e){return Lb(e)||jb(e)||ks(e)||Ya(e)||Hl(e)||Zl(e)||Fs(e)||Ss(e)||iC(e)||Ts(e)||Ms(e)||Jr(e)||Jl(e)||ho(e)||po(e)||Ir(e)||Xa(e)||oC(e)||gm(e)||Ps(e)||wn(e)||Yl(e)||Xl(e)||pr(e)||_b(e)||Qa(e)||ym(e)||go(e)||sC(e)||yo(e)||eu(e)||Mt(e)||aC(e)||uC(e)||lC(e)||cC(e)||dC(e)}const fC=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Vb(e){try{return new RegExp(e),!0}catch{return!1}}function bm(e){if(!st(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function Wb(e){return wm(e)||Ze(e)}function Gs(e){return ft(e)||Sb(e)}function Me(e){return ft(e)||kn(e)}function wm(e){return ft(e)||Za(e)}function Te(e){return ft(e)||st(e)}function mC(e){return ft(e)||st(e)&&bm(e)&&Vb(e)}function hC(e){return ft(e)||st(e)&&bm(e)}function zb(e){return ft(e)||Ze(e)}function gl(e){return pt(e)&&e[ti]==="Optional"}function mn(e){return me(e,"Any")&&Te(e.$id)}function pC(e){return me(e,"Argument")&&kn(e.index)}function bo(e){return me(e,"Array")&&e.type==="array"&&Te(e.$id)&&Ze(e.items)&&Me(e.minItems)&&Me(e.maxItems)&&wm(e.uniqueItems)&&zb(e.contains)&&Me(e.minContains)&&Me(e.maxContains)}function vm(e){return me(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Te(e.$id)&&Ze(e.items)}function Ql(e){return me(e,"BigInt")&&e.type==="bigint"&&Te(e.$id)&&Gs(e.exclusiveMaximum)&&Gs(e.exclusiveMinimum)&&Gs(e.maximum)&&Gs(e.minimum)&&Gs(e.multipleOf)}function wo(e){return me(e,"Boolean")&&e.type==="boolean"&&Te(e.$id)}function gC(e){return me(e,"Computed")&&st(e.target)&&yr(e.parameters)&&e.parameters.every(t=>Ze(t))}function ec(e){return me(e,"Constructor")&&e.type==="Constructor"&&Te(e.$id)&&yr(e.parameters)&&e.parameters.every(t=>Ze(t))&&Ze(e.returns)}function tc(e){return me(e,"Date")&&e.type==="Date"&&Te(e.$id)&&Me(e.exclusiveMaximumTimestamp)&&Me(e.exclusiveMinimumTimestamp)&&Me(e.maximumTimestamp)&&Me(e.minimumTimestamp)&&Me(e.multipleOfTimestamp)}function rc(e){return me(e,"Function")&&e.type==="Function"&&Te(e.$id)&&yr(e.parameters)&&e.parameters.every(t=>Ze(t))&&Ze(e.returns)}function ri(e){return me(e,"Integer")&&e.type==="integer"&&Te(e.$id)&&Me(e.exclusiveMaximum)&&Me(e.exclusiveMinimum)&&Me(e.maximum)&&Me(e.minimum)&&Me(e.multipleOf)}function qb(e){return pt(e)&&Object.entries(e).every(([t,r])=>bm(t)&&Ze(r))}function vo(e){return me(e,"Intersect")&&!(st(e.type)&&e.type!=="object")&&yr(e.allOf)&&e.allOf.every(t=>Ze(t)&&!DC(t))&&Te(e.type)&&(wm(e.unevaluatedProperties)||zb(e.unevaluatedProperties))&&Te(e.$id)}function $m(e){return me(e,"Iterator")&&e.type==="Iterator"&&Te(e.$id)&&Ze(e.items)}function me(e,t){return pt(e)&&N in e&&e[N]===t}function Kb(e){return Si(e)&&st(e.const)}function Gb(e){return Si(e)&&kn(e.const)}function Zb(e){return Si(e)&&Za(e.const)}function Si(e){return me(e,"Literal")&&Te(e.$id)&&yC(e.const)}function yC(e){return Za(e)||kn(e)||st(e)}function bC(e){return me(e,"MappedKey")&&yr(e.keys)&&e.keys.every(t=>kn(t)||st(t))}function wC(e){return me(e,"MappedResult")&&qb(e.properties)}function Ti(e){return me(e,"Never")&&pt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function ls(e){return me(e,"Not")&&Ze(e.not)}function Dm(e){return me(e,"Null")&&e.type==="null"&&Te(e.$id)}function fr(e){return me(e,"Number")&&e.type==="number"&&Te(e.$id)&&Me(e.exclusiveMaximum)&&Me(e.exclusiveMinimum)&&Me(e.maximum)&&Me(e.minimum)&&Me(e.multipleOf)}function He(e){return me(e,"Object")&&e.type==="object"&&Te(e.$id)&&qb(e.properties)&&Wb(e.additionalProperties)&&Me(e.minProperties)&&Me(e.maxProperties)}function xm(e){return me(e,"Promise")&&e.type==="Promise"&&Te(e.$id)&&Ze(e.item)}function Lt(e){return me(e,"Record")&&e.type==="object"&&Te(e.$id)&&Wb(e.additionalProperties)&&pt(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&Vb(r[0])&&pt(t.patternProperties)&&Ze(t.patternProperties[r[0]])})(e)}function vC(e){return me(e,"Ref")&&Te(e.$id)&&st(e.$ref)}function Pa(e){return me(e,"RegExp")&&Te(e.$id)&&st(e.source)&&st(e.flags)&&Me(e.maxLength)&&Me(e.minLength)}function hn(e){return me(e,"String")&&e.type==="string"&&Te(e.$id)&&Me(e.minLength)&&Me(e.maxLength)&&mC(e.pattern)&&hC(e.format)}function Na(e){return me(e,"Symbol")&&e.type==="symbol"&&Te(e.$id)}function Ia(e){return me(e,"TemplateLiteral")&&e.type==="string"&&st(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function $C(e){return me(e,"This")&&Te(e.$id)&&st(e.$ref)}function DC(e){return pt(e)&&dr in e}function nc(e){return me(e,"Tuple")&&e.type==="array"&&Te(e.$id)&&kn(e.minItems)&&kn(e.maxItems)&&e.minItems===e.maxItems&&(ft(e.items)&&ft(e.additionalItems)&&e.minItems===0||yr(e.items)&&e.items.every(t=>Ze(t)))}function so(e){return me(e,"Undefined")&&e.type==="undefined"&&Te(e.$id)}function Qn(e){return me(e,"Union")&&Te(e.$id)&&pt(e)&&yr(e.anyOf)&&e.anyOf.every(t=>Ze(t))}function tu(e){return me(e,"Uint8Array")&&e.type==="Uint8Array"&&Te(e.$id)&&Me(e.minByteLength)&&Me(e.maxByteLength)}function pn(e){return me(e,"Unknown")&&Te(e.$id)}function xC(e){return me(e,"Unsafe")}function ic(e){return me(e,"Void")&&e.type==="void"&&Te(e.$id)}function AC(e){return pt(e)&&N in e&&st(e[N])&&!fC.includes(e[N])}function Ze(e){return pt(e)&&(mn(e)||pC(e)||bo(e)||wo(e)||Ql(e)||vm(e)||gC(e)||ec(e)||tc(e)||rc(e)||ri(e)||vo(e)||$m(e)||Si(e)||bC(e)||wC(e)||Ti(e)||ls(e)||Dm(e)||fr(e)||He(e)||xm(e)||Lt(e)||vC(e)||Pa(e)||hn(e)||Na(e)||Ia(e)||$C(e)||nc(e)||so(e)||Qn(e)||tu(e)||pn(e)||xC(e)||ic(e)||AC(e))}const EC="(true|false)",zu="(0|[1-9][0-9]*)",Hb="(.*)",CC="(?!.*)",cs=`^${zu}$`,ds=`^${Hb}$`,kC=`^${CC}$`,Jb=new Map;function Am(e){return Jb.has(e)}function Em(e){return Jb.get(e)}const Cm=new Map;function Ei(e){return Cm.has(e)}function km(e,t){Cm.set(e,t)}function Fm(e){return Cm.get(e)}function FC(e,t){return e.includes(t)}function SC(e){return[...new Set(e)]}function TC(e,t){return e.filter(r=>t.includes(r))}function MC(e,t){return e.reduce((r,n)=>TC(r,n),t)}function PC(e){return e.length===1?e[0]:e.length>1?MC(e.slice(1),e[0]):[]}function NC(e){const t=[];for(const r of e)t.push(...r);return t}function Oa(e){return O({[N]:"Any"},e)}function Sm(e,t){return O({[N]:"Array",type:"array",items:e},t)}function IC(e){return O({[N]:"Argument",index:e})}function Tm(e,t){return O({[N]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function wt(e,t,r){return O({[N]:"Computed",target:e,parameters:t},r)}function OC(e,t){const{[t]:r,...n}=e;return n}function Mr(e,t){return t.reduce((r,n)=>OC(r,n),e)}function Je(e){return O({[N]:"Never",not:{}},e)}function Ut(e){return O({[N]:"MappedResult",properties:e})}function Mm(e,t,r){return O({[N]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function ru(e,t,r){return O({[N]:"Function",type:"Function",parameters:e,returns:t},r)}function Jd(e,t){return O({[N]:"Union",anyOf:e},t)}function BC(e){return e.some(t=>Fi(t))}function Np(e){return e.map(t=>Fi(t)?RC(t):t)}function RC(e){return Mr(e,[ti])}function LC(e,t){return BC(e)?Ni(Jd(Np(e),t)):Jd(Np(e),t)}function Ns(e,t){return e.length===1?O(e[0],t):e.length===0?Je(t):LC(e,t)}function _t(e,t){return e.length===0?Je(t):e.length===1?O(e[0],t):Jd(e,t)}class Ip extends jt{}function jC(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Pm(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function qn(e,t){return Pm(e,t,"(")}function Ba(e,t){return Pm(e,t,")")}function Yb(e,t){return Pm(e,t,"|")}function UC(e){if(!(qn(e,0)&&Ba(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(qn(e,r)&&(t+=1),Ba(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function _C(e){return e.slice(1,e.length-1)}function VC(e){let t=0;for(let r=0;r<e.length;r++)if(qn(e,r)&&(t+=1),Ba(e,r)&&(t-=1),Yb(e,r)&&t===0)return!0;return!1}function WC(e){for(let t=0;t<e.length;t++)if(qn(e,t))return!0;return!1}function zC(e){let[t,r]=[0,0];const n=[];for(let o=0;o<e.length;o++)if(qn(e,o)&&(t+=1),Ba(e,o)&&(t-=1),Yb(e,o)&&t===0){const s=e.slice(r,o);s.length>0&&n.push(fs(s)),r=o+1}const i=e.slice(r);return i.length>0&&n.push(fs(i)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function qC(e){function t(i,o){if(!qn(i,o))throw new Ip("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(qn(i,a)&&(s+=1),Ba(i,a)&&(s-=1),s===0)return[o,a];throw new Ip("TemplateLiteralParser: Unclosed group parens in expression")}function r(i,o){for(let s=o;s<i.length;s++)if(qn(i,s))return[o,s];return[o,i.length]}const n=[];for(let i=0;i<e.length;i++)if(qn(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);n.push(fs(a)),i=s}else{const[o,s]=r(e,i),a=e.slice(o,s);a.length>0&&n.push(fs(a)),i=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function fs(e){return UC(e)?fs(_C(e)):VC(e)?zC(e):WC(e)?qC(e):{type:"const",const:jC(e)}}function Nm(e){return fs(e.slice(1,e.length-1))}class KC extends jt{}function GC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function ZC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function HC(e){return e.type==="const"&&e.const===".*"}function Ra(e){return GC(e)||HC(e)?!1:ZC(e)?!0:e.type==="and"?e.expr.every(t=>Ra(t)):e.type==="or"?e.expr.every(t=>Ra(t)):e.type==="const"?!0:(()=>{throw new KC("Unknown expression type")})()}function JC(e){const t=Nm(e.pattern);return Ra(t)}class YC extends jt{}function*Xb(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Xb(e.slice(1)))yield`${t}${r}`}function*XC(e){return yield*Xb(e.expr.map(t=>[...oc(t)]))}function*QC(e){for(const t of e.expr)yield*oc(t)}function*ek(e){return yield e.const}function*oc(e){return e.type==="and"?yield*XC(e):e.type==="or"?yield*QC(e):e.type==="const"?yield*ek(e):(()=>{throw new YC("Unknown expression")})()}function Qb(e){const t=Nm(e.pattern);return Ra(t)?[...oc(t)]:[]}function mt(e,t){return O({[N]:"Literal",const:e,type:typeof e},t)}function ew(e){return O({[N]:"Boolean",type:"boolean"},e)}function Im(e){return O({[N]:"BigInt",type:"bigint"},e)}function $o(e){return O({[N]:"Number",type:"number"},e)}function ao(e){return O({[N]:"String",type:"string"},e)}function*tk(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield ew():t==="number"?yield $o():t==="bigint"?yield Im():t==="string"?yield ao():yield(()=>{const r=t.split("|").map(n=>mt(n.trim()));return r.length===0?Je():r.length===1?r[0]:Ns(r)})()}function*rk(e){if(e[1]!=="{"){const t=mt("$"),r=Yd(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=tk(e.slice(2,t)),n=Yd(e.slice(t+1));return yield*[...r,...n]}yield mt(e)}function*Yd(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=mt(e.slice(0,t)),n=rk(e.slice(t));return yield*[r,...n]}yield mt(e)}function nk(e){return[...Yd(e)]}class ik extends jt{}function ok(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function tw(e,t){return go(e)?e.pattern.slice(1,e.pattern.length-1):Mt(e)?`(${e.anyOf.map(r=>tw(r,t)).join("|")})`:Ps(e)?`${t}${zu}`:Ms(e)?`${t}${zu}`:Hl(e)?`${t}${zu}`:Qa(e)?`${t}${Hb}`:ho(e)?`${t}${ok(e.const.toString())}`:Ya(e)?`${t}${EC}`:(()=>{throw new ik(`Unexpected Kind '${e[N]}'`)})()}function Op(e){return`^${e.map(t=>tw(t,"")).join("")}$`}function yl(e){const r=Qb(e).map(n=>mt(n));return Ns(r)}function rw(e,t){const r=st(e)?Op(nk(e)):Op(e);return O({[N]:"TemplateLiteral",type:"string",pattern:r},t)}function sk(e){return Qb(e).map(r=>r.toString())}function ak(e){const t=[];for(const r of e)t.push(...Mi(r));return t}function uk(e){return[e.toString()]}function Mi(e){return[...new Set(go(e)?sk(e):Mt(e)?ak(e.anyOf):ho(e)?uk(e.const):Ps(e)?["[number]"]:Ms(e)?["[number]"]:[])]}function lk(e,t,r){const n={};for(const i of Object.getOwnPropertyNames(t))n[i]=sc(e,Mi(t[i]),r);return n}function ck(e,t,r){return lk(e,t.properties,r)}function dk(e,t,r){const n=ck(e,t,r);return Ut(n)}function nw(e,t){return e.map(r=>iw(r,t))}function fk(e){return e.filter(t=>!Xa(t))}function mk(e,t){return aw(fk(nw(e,t)))}function hk(e){return e.some(t=>Xa(t))?[]:e}function pk(e,t){return Ns(hk(nw(e,t)))}function gk(e,t){return t in e?e[t]:t==="[number]"?Ns(e):Je()}function yk(e,t){return t==="[number]"?e:Je()}function bk(e,t){return t in e?e[t]:Je()}function iw(e,t){return Jr(e)?mk(e.allOf,t):Mt(e)?pk(e.anyOf,t):yo(e)?gk(e.items??[],t):ks(e)?yk(e.items,t):wn(e)?bk(e.properties,t):Je()}function Om(e,t){return t.map(r=>iw(e,r))}function Bp(e,t){return Ns(Om(e,t))}function sc(e,t,r){if(pr(e)||pr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!rr(e)||!rr(t))throw new jt(n);return wt("Index",[e,t])}return Ir(t)?dk(e,t,r):po(t)?Dk(e,t,r):O(rr(t)?Bp(e,Mi(t)):Bp(e,t),r)}function wk(e,t,r){return{[t]:sc(e,[t],Sr(r))}}function vk(e,t,r){return t.reduce((n,i)=>({...n,...wk(e,i,r)}),{})}function $k(e,t,r){return vk(e,t.keys,r)}function Dk(e,t,r){const n=$k(e,t,r);return Ut(n)}function Bm(e,t){return O({[N]:"Iterator",type:"Iterator",items:e},t)}function xk(e){return globalThis.Object.keys(e).filter(t=>!Fi(e[t]))}function Ak(e,t){const r=xk(e),n=r.length>0?{[N]:"Object",type:"object",required:r,properties:e}:{[N]:"Object",type:"object",properties:e};return O(n,t)}var Tt=Ak;function ow(e,t){return O({[N]:"Promise",type:"Promise",item:e},t)}function Ek(e){return O(Mr(e,[Ja]))}function Ck(e){return O({...e,[Ja]:"Readonly"})}function kk(e,t){return t===!1?Ek(e):Ck(e)}function Pi(e,t){const r=t??!0;return Ir(e)?Tk(e,r):kk(e,r)}function Fk(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Pi(e[n],t);return r}function Sk(e,t){return Fk(e.properties,t)}function Tk(e,t){const r=Sk(e,t);return Ut(r)}function Is(e,t){return O(e.length>0?{[N]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[N]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function sw(e,t){return e in t?Lr(e,t[e]):Ut(t)}function Mk(e){return{[e]:mt(e)}}function Pk(e){const t={};for(const r of e)t[r]=mt(r);return t}function Nk(e,t){return FC(t,e)?Mk(e):Pk(t)}function Ik(e,t){const r=Nk(e,t);return sw(e,r)}function Zs(e,t){return t.map(r=>Lr(e,r))}function Ok(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=Lr(e,t[n]);return r}function Lr(e,t){const r={...t};return Fi(t)?Ni(Lr(e,Mr(t,[ti]))):pm(t)?Pi(Lr(e,Mr(t,[Ja]))):Ir(t)?sw(e,t.properties):po(t)?Ik(e,t.keys):Ss(t)?Mm(Zs(e,t.parameters),Lr(e,t.returns),r):Ts(t)?ru(Zs(e,t.parameters),Lr(e,t.returns),r):Zl(t)?Tm(Lr(e,t.items),r):Jl(t)?Bm(Lr(e,t.items),r):Jr(t)?Ii(Zs(e,t.allOf),r):Mt(t)?_t(Zs(e,t.anyOf),r):yo(t)?Is(Zs(e,t.items??[]),r):wn(t)?Tt(Ok(e,t.properties),r):ks(t)?Sm(Lr(e,t.items),r):Yl(t)?ow(Lr(e,t.item),r):t}function Bk(e,t){const r={};for(const n of e)r[n]=Lr(n,t);return r}function Rk(e,t,r){const n=rr(e)?Mi(e):e,i=t({[N]:"MappedKey",keys:n}),o=Bk(n,i);return Tt(o,r)}function Lk(e){return O(Mr(e,[ti]))}function jk(e){return O({...e,[ti]:"Optional"})}function Uk(e,t){return t===!1?Lk(e):jk(e)}function Ni(e,t){const r=t??!0;return Ir(e)?Wk(e,r):Uk(e,r)}function _k(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Ni(e[n],t);return r}function Vk(e,t){return _k(e.properties,t)}function Wk(e,t){const r=Vk(e,t);return Ut(r)}function Xd(e,t={}){const r=e.every(i=>wn(i)),n=rr(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return O(t.unevaluatedProperties===!1||rr(t.unevaluatedProperties)||r?{...n,[N]:"Intersect",type:"object",allOf:e}:{...n,[N]:"Intersect",allOf:e},t)}function zk(e){return e.every(t=>Fi(t))}function qk(e){return Mr(e,[ti])}function Rp(e){return e.map(t=>Fi(t)?qk(t):t)}function Kk(e,t){return zk(e)?Ni(Xd(Rp(e),t)):Xd(Rp(e),t)}function aw(e,t={}){if(e.length===1)return O(e[0],t);if(e.length===0)return Je(t);if(e.some(r=>Be(r)))throw new Error("Cannot intersect transform types");return Kk(e,t)}function Ii(e,t){if(e.length===1)return O(e[0],t);if(e.length===0)return Je(t);if(e.some(r=>Be(r)))throw new Error("Cannot intersect transform types");return Xd(e,t)}function Os(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new jt("Ref: $ref must be a string");return O({[N]:"Ref",$ref:t},r)}function Gk(e,t){return wt("Awaited",[wt(e,t)])}function Zk(e){return wt("Awaited",[Os(e)])}function Hk(e){return Ii(uw(e))}function Jk(e){return _t(uw(e))}function Yk(e){return ac(e)}function uw(e){return e.map(t=>ac(t))}function ac(e,t){return O(Fs(e)?Gk(e.target,e.parameters):Jr(e)?Hk(e.allOf):Mt(e)?Jk(e.anyOf):Yl(e)?Yk(e.item):pr(e)?Zk(e.$ref):e,t)}function lw(e){const t=[];for(const r of e)t.push(Do(r));return t}function Xk(e){const t=lw(e);return NC(t)}function Qk(e){const t=lw(e);return PC(t)}function e4(e){return e.map((t,r)=>r.toString())}function t4(e){return["[number]"]}function r4(e){return globalThis.Object.getOwnPropertyNames(e)}function n4(e){return Qd?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function Do(e){return Jr(e)?Xk(e.allOf):Mt(e)?Qk(e.anyOf):yo(e)?e4(e.items??[]):ks(e)?t4(e.items):wn(e)?r4(e.properties):Xl(e)?n4(e.patternProperties):[]}let Qd=!1;function ms(e){Qd=!0;const t=Do(e);return Qd=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function i4(e,t){return wt("KeyOf",[wt(e,t)])}function o4(e){return wt("KeyOf",[Os(e)])}function s4(e,t){const r=Do(e),n=a4(r),i=Ns(n);return O(i,t)}function a4(e){return e.map(t=>t==="[number]"?$o():mt(t))}function Rm(e,t){return Fs(e)?i4(e.target,e.parameters):pr(e)?o4(e.$ref):Ir(e)?c4(e,t):s4(e,t)}function u4(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Rm(e[n],Sr(t));return r}function l4(e,t){return u4(e.properties,t)}function c4(e,t){const r=l4(e,t);return Ut(r)}function cw(e){const t=Do(e),r=Om(e,t);return t.map((n,i)=>[t[i],r[i]])}function d4(e){const t=[];for(const r of e)t.push(...Do(r));return SC(t)}function f4(e){return e.filter(t=>!Xa(t))}function m4(e,t){const r=[];for(const n of e)r.push(...Om(n,[t]));return f4(r)}function h4(e,t){const r={};for(const n of t)r[n]=aw(m4(e,n));return r}function p4(e,t){const r=d4(e),n=h4(e,r);return Tt(n,t)}function dw(e){return O({[N]:"Date",type:"Date"},e)}function fw(e){return O({[N]:"Null",type:"null"},e)}function mw(e){return O({[N]:"Symbol",type:"symbol"},e)}function hw(e){return O({[N]:"Undefined",type:"undefined"},e)}function pw(e){return O({[N]:"Uint8Array",type:"Uint8Array"},e)}function uc(e){return O({[N]:"Unknown"},e)}function g4(e){return e.map(t=>Lm(t,!1))}function y4(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Pi(Lm(e[r],!1));return t}function Fu(e,t){return t===!0?e:Pi(e)}function Lm(e,t){return KE(e)||ZE(e)?Fu(Oa(),t):yr(e)?Pi(Is(g4(e))):Ha(e)?pw():dm(e)?dw():pt(e)?Fu(Tt(y4(e)),t):GE(e)?Fu(ru([],uc()),t):ft(e)?hw():HE(e)?fw():JE(e)?mw():Sb(e)?Im():kn(e)||Za(e)||st(e)?mt(e):Tt({})}function b4(e,t){return O(Lm(e,!0),t)}function w4(e,t){return Ss(e)?Is(e.parameters,t):Je(t)}function v4(e,t){if(ft(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(r)].map(o=>mt(o));return _t(i,{...t,[Gl]:"Enum"})}class $4 extends jt{}var S;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(S||(S={}));function Hr(e){return e===S.False?e:S.True}function Bs(e){throw new $4(e)}function gt(e){return Ti(e)||vo(e)||Qn(e)||pn(e)||mn(e)}function yt(e,t){return Ti(t)?bw():vo(t)?lc(e,t):Qn(t)?Um(e,t):pn(t)?Dw():mn(t)?jm():Bs("StructuralRight")}function jm(e,t){return S.True}function D4(e,t){return vo(t)?lc(e,t):Qn(t)&&t.anyOf.some(r=>mn(r)||pn(r))?S.True:Qn(t)?S.Union:pn(t)||mn(t)?S.True:S.Union}function x4(e,t){return pn(e)?S.False:mn(e)?S.Union:Ti(e)?S.True:S.False}function A4(e,t){return He(t)&&cc(t)?S.True:gt(t)?yt(e,t):bo(t)?Hr(Se(e.items,t.items)):S.False}function E4(e,t){return gt(t)?yt(e,t):vm(t)?Hr(Se(e.items,t.items)):S.False}function C4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):Ql(t)?S.True:S.False}function gw(e,t){return Zb(e)||wo(e)?S.True:S.False}function k4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):wo(t)?S.True:S.False}function F4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):ec(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>Hr(Se(t.parameters[n],r))===S.True)?Hr(Se(e.returns,t.returns)):S.False:S.False}function S4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):tc(t)?S.True:S.False}function T4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):rc(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>Hr(Se(t.parameters[n],r))===S.True)?Hr(Se(e.returns,t.returns)):S.False:S.False}function yw(e,t){return Si(e)&&kn(e.const)||fr(e)||ri(e)?S.True:S.False}function M4(e,t){return ri(t)||fr(t)?S.True:gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):S.False}function lc(e,t){return t.allOf.every(r=>Se(e,r)===S.True)?S.True:S.False}function P4(e,t){return e.allOf.some(r=>Se(r,t)===S.True)?S.True:S.False}function N4(e,t){return gt(t)?yt(e,t):$m(t)?Hr(Se(e.items,t.items)):S.False}function I4(e,t){return Si(t)&&t.const===e.const?S.True:gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):hn(t)?$w(e):fr(t)?ww(e):ri(t)?yw(e):wo(t)?gw(e):S.False}function bw(e,t){return S.False}function O4(e,t){return S.True}function Lp(e){let[t,r]=[e,0];for(;ls(t);)t=t.not,r+=1;return r%2===0?t:uc()}function B4(e,t){return ls(e)?Se(Lp(e),t):ls(t)?Se(e,Lp(t)):Bs("Invalid fallthrough for Not")}function R4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):Dm(t)?S.True:S.False}function ww(e,t){return Gb(e)||fr(e)||ri(e)?S.True:S.False}function L4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):ri(t)||fr(t)?S.True:S.False}function gr(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function jp(e){return cc(e)}function Up(e){return gr(e,0)||gr(e,1)&&"description"in e.properties&&Qn(e.properties.description)&&e.properties.description.anyOf.length===2&&(hn(e.properties.description.anyOf[0])&&so(e.properties.description.anyOf[1])||hn(e.properties.description.anyOf[1])&&so(e.properties.description.anyOf[0]))}function rd(e){return gr(e,0)}function _p(e){return gr(e,0)}function j4(e){return gr(e,0)}function U4(e){return gr(e,0)}function _4(e){return cc(e)}function V4(e){const t=$o();return gr(e,0)||gr(e,1)&&"length"in e.properties&&Hr(Se(e.properties.length,t))===S.True}function W4(e){return gr(e,0)}function cc(e){const t=$o();return gr(e,0)||gr(e,1)&&"length"in e.properties&&Hr(Se(e.properties.length,t))===S.True}function z4(e){const t=ru([Oa()],Oa());return gr(e,0)||gr(e,1)&&"then"in e.properties&&Hr(Se(e.properties.then,t))===S.True}function vw(e,t){return Se(e,t)===S.False||gl(e)&&!gl(t)?S.False:S.True}function Gt(e,t){return pn(e)?S.False:mn(e)?S.Union:Ti(e)||Kb(e)&&jp(t)||Gb(e)&&rd(t)||Zb(e)&&_p(t)||Na(e)&&Up(t)||Ql(e)&&j4(t)||hn(e)&&jp(t)||Na(e)&&Up(t)||fr(e)&&rd(t)||ri(e)&&rd(t)||wo(e)&&_p(t)||tu(e)&&_4(t)||tc(e)&&U4(t)||ec(e)&&W4(t)||rc(e)&&V4(t)?S.True:Lt(e)&&hn(ef(e))?t[Gl]==="Record"?S.True:S.False:Lt(e)&&fr(ef(e))&&gr(t,0)?S.True:S.False}function q4(e,t){return gt(t)?yt(e,t):Lt(t)?Yr(e,t):He(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!gl(t.properties[r]))return S.False;if(gl(t.properties[r]))return S.True;if(vw(e.properties[r],t.properties[r])===S.False)return S.False}return S.True})():S.False}function K4(e,t){return gt(t)?yt(e,t):He(t)&&z4(t)?S.True:xm(t)?Hr(Se(e.item,t.item)):S.False}function ef(e){return cs in e.patternProperties?$o():ds in e.patternProperties?ao():Bs("Unknown record key pattern")}function tf(e){return cs in e.patternProperties?e.patternProperties[cs]:ds in e.patternProperties?e.patternProperties[ds]:Bs("Unable to get record value schema")}function Yr(e,t){const[r,n]=[ef(t),tf(t)];return Kb(e)&&fr(r)&&Hr(Se(e,n))===S.True?S.True:tu(e)&&fr(r)||hn(e)&&fr(r)||bo(e)&&fr(r)?Se(e,n):He(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(vw(n,e.properties[i])===S.False)return S.False;return S.True})():S.False}function G4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Se(tf(e),tf(t)):S.False}function Z4(e,t){const r=Pa(e)?ao():e,n=Pa(t)?ao():t;return Se(r,n)}function $w(e,t){return Si(e)&&st(e.const)||hn(e)?S.True:S.False}function H4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):hn(t)?S.True:S.False}function J4(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):Na(t)?S.True:S.False}function Y4(e,t){return Ia(e)?Se(yl(e),t):Ia(t)?Se(e,yl(t)):Bs("Invalid fallthrough for TemplateLiteral")}function X4(e,t){return bo(t)&&e.items!==void 0&&e.items.every(r=>Se(r,t.items)===S.True)}function Q4(e,t){return Ti(e)?S.True:pn(e)?S.False:mn(e)?S.Union:S.False}function e3(e,t){return gt(t)?yt(e,t):He(t)&&cc(t)||bo(t)&&X4(e,t)?S.True:nc(t)?ft(e.items)&&!ft(t.items)||!ft(e.items)&&ft(t.items)?S.False:ft(e.items)&&!ft(t.items)||e.items.every((r,n)=>Se(r,t.items[n])===S.True)?S.True:S.False:S.False}function t3(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):tu(t)?S.True:S.False}function r3(e,t){return gt(t)?yt(e,t):He(t)?Gt(e,t):Lt(t)?Yr(e,t):ic(t)?o3(e):so(t)?S.True:S.False}function Um(e,t){return t.anyOf.some(r=>Se(e,r)===S.True)?S.True:S.False}function n3(e,t){return e.anyOf.every(r=>Se(r,t)===S.True)?S.True:S.False}function Dw(e,t){return S.True}function i3(e,t){return Ti(t)?bw():vo(t)?lc(e,t):Qn(t)?Um(e,t):mn(t)?jm():hn(t)?$w(e):fr(t)?ww(e):ri(t)?yw(e):wo(t)?gw(e):bo(t)?x4(e):nc(t)?Q4(e):He(t)?Gt(e,t):pn(t)?S.True:S.False}function o3(e,t){return so(e)||so(e)?S.True:S.False}function s3(e,t){return vo(t)?lc(e,t):Qn(t)?Um(e,t):pn(t)?Dw():mn(t)?jm():He(t)?Gt(e,t):ic(t)?S.True:S.False}function Se(e,t){return Ia(e)||Ia(t)?Y4(e,t):Pa(e)||Pa(t)?Z4(e,t):ls(e)||ls(t)?B4(e,t):mn(e)?D4(e,t):bo(e)?A4(e,t):Ql(e)?C4(e,t):wo(e)?k4(e,t):vm(e)?E4(e,t):ec(e)?F4(e,t):tc(e)?S4(e,t):rc(e)?T4(e,t):ri(e)?M4(e,t):vo(e)?P4(e,t):$m(e)?N4(e,t):Si(e)?I4(e,t):Ti(e)?O4():Dm(e)?R4(e,t):fr(e)?L4(e,t):He(e)?q4(e,t):Lt(e)?G4(e,t):hn(e)?H4(e,t):Na(e)?J4(e,t):nc(e)?e3(e,t):xm(e)?K4(e,t):tu(e)?t3(e,t):so(e)?r3(e,t):Qn(e)?n3(e,t):pn(e)?i3(e,t):ic(e)?s3(e,t):Bs(`Unknown left type operand '${e[N]}'`)}function nu(e,t){return Se(e,t)}function a3(e,t,r,n,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=_m(e[s],t,r,n,Sr(i));return o}function u3(e,t,r,n,i){return a3(e.properties,t,r,n,i)}function l3(e,t,r,n,i){const o=u3(e,t,r,n,i);return Ut(o)}function c3(e,t,r,n){const i=nu(e,t);return i===S.Union?_t([r,n]):i===S.True?r:n}function _m(e,t,r,n,i){return Ir(e)?l3(e,t,r,n,i):po(e)?O(h3(e,t,r,n,i)):O(c3(e,t,r,n),i)}function d3(e,t,r,n,i){return{[e]:_m(mt(e),t,r,n,Sr(i))}}function f3(e,t,r,n,i){return e.reduce((o,s)=>({...o,...d3(s,t,r,n,i)}),{})}function m3(e,t,r,n,i){return f3(e.keys,t,r,n,i)}function h3(e,t,r,n,i){const o=m3(e,t,r,n,i);return Ut(o)}function p3(e){return e.allOf.every(t=>Rs(t))}function g3(e){return e.anyOf.some(t=>Rs(t))}function y3(e){return!Rs(e.not)}function Rs(e){return e[N]==="Intersect"?p3(e):e[N]==="Union"?g3(e):e[N]==="Not"?y3(e):e[N]==="Undefined"}function b3(e,t){return Vm(yl(e),t)}function w3(e,t){const r=e.filter(n=>nu(n,t)===S.False);return r.length===1?r[0]:_t(r)}function Vm(e,t,r={}){return go(e)?O(b3(e,t),r):Ir(e)?O(D3(e,t),r):O(Mt(e)?w3(e.anyOf,t):nu(e,t)!==S.False?Je():e,r)}function v3(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Vm(e[n],t);return r}function $3(e,t){return v3(e.properties,t)}function D3(e,t){const r=$3(e,t);return Ut(r)}function x3(e,t){return Wm(yl(e),t)}function A3(e,t){const r=e.filter(n=>nu(n,t)!==S.False);return r.length===1?r[0]:_t(r)}function Wm(e,t,r){return go(e)?O(x3(e,t),r):Ir(e)?O(k3(e,t),r):O(Mt(e)?A3(e.anyOf,t):nu(e,t)!==S.False?e:Je(),r)}function E3(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Wm(e[n],t);return r}function C3(e,t){return E3(e.properties,t)}function k3(e,t){const r=C3(e,t);return Ut(r)}function F3(e,t){return Ss(e)?O(e.returns,t):Je(t)}function xw(e){return Pi(Ni(e))}function xo(e,t,r){return O({[N]:"Record",type:"object",patternProperties:{[e]:t}},r)}function zm(e,t,r){const n={};for(const i of e)n[i]=t;return Tt(n,{...r,[Gl]:"Record"})}function S3(e,t,r){return JC(e)?zm(Mi(e),t,r):xo(e.pattern,t,r)}function T3(e,t,r){return zm(Mi(_t(e)),t,r)}function M3(e,t,r){return zm([e.toString()],t,r)}function P3(e,t,r){return xo(e.source,t,r)}function N3(e,t,r){const n=ft(e.pattern)?ds:e.pattern;return xo(n,t,r)}function I3(e,t,r){return xo(ds,t,r)}function O3(e,t,r){return xo(kC,t,r)}function B3(e,t,r){return Tt({true:t,false:t},r)}function R3(e,t,r){return xo(cs,t,r)}function L3(e,t,r){return xo(cs,t,r)}function Aw(e,t,r={}){return Mt(e)?T3(e.anyOf,t,r):go(e)?S3(e,t,r):ho(e)?M3(e.const,t,r):Ya(e)?B3(e,t,r):Ms(e)?R3(e,t,r):Ps(e)?L3(e,t,r):_b(e)?P3(e,t,r):Qa(e)?N3(e,t,r):Lb(e)?I3(e,t,r):Xa(e)?O3(e,t,r):Je(r)}function qm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function j3(e){const t=qm(e);return t===ds?ao():t===cs?$o():ao({pattern:t})}function Ew(e){return e.patternProperties[qm(e)]}function U3(e,t){return t.parameters=iu(e,t.parameters),t.returns=gn(e,t.returns),t}function _3(e,t){return t.parameters=iu(e,t.parameters),t.returns=gn(e,t.returns),t}function V3(e,t){return t.allOf=iu(e,t.allOf),t}function W3(e,t){return t.anyOf=iu(e,t.anyOf),t}function z3(e,t){return ft(t.items)||(t.items=iu(e,t.items)),t}function q3(e,t){return t.items=gn(e,t.items),t}function K3(e,t){return t.items=gn(e,t.items),t}function G3(e,t){return t.items=gn(e,t.items),t}function Z3(e,t){return t.item=gn(e,t.item),t}function H3(e,t){const r=Q3(e,t.properties);return{...t,...Tt(r)}}function J3(e,t){const r=gn(e,j3(t)),n=gn(e,Ew(t)),i=Aw(r,n);return{...t,...i}}function Y3(e,t){return t.index in e?e[t.index]:uc()}function X3(e,t){const r=pm(t),n=Fi(t),i=gn(e,t);return r&&n?xw(i):r&&!n?Pi(i):!r&&n?Ni(i):i}function Q3(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:X3(e,t[n])}),{})}function iu(e,t){return t.map(r=>gn(e,r))}function gn(e,t){return Ss(t)?U3(e,t):Ts(t)?_3(e,t):Jr(t)?V3(e,t):Mt(t)?W3(e,t):yo(t)?z3(e,t):ks(t)?q3(e,t):Zl(t)?K3(e,t):Jl(t)?G3(e,t):Yl(t)?Z3(e,t):wn(t)?H3(e,t):Xl(t)?J3(e,t):jb(t)?Y3(e,t):t}function e6(e,t){return gn(t,fm(e))}function t6(e){return O({[N]:"Integer",type:"integer"},e)}function r6(e,t,r){return{[e]:Ls(mt(e),t,Sr(r))}}function n6(e,t,r){return e.reduce((i,o)=>({...i,...r6(o,t,r)}),{})}function i6(e,t,r){return n6(e.keys,t,r)}function o6(e,t,r){const n=i6(e,t,r);return Ut(n)}function s6(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function a6(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function u6(e){return e.toUpperCase()}function l6(e){return e.toLowerCase()}function c6(e,t,r){const n=Nm(e.pattern);if(!Ra(n))return{...e,pattern:Cw(e.pattern,t)};const s=[...oc(n)].map(l=>mt(l)),a=kw(s,t),u=_t(a);return rw([u],r)}function Cw(e,t){return typeof e=="string"?t==="Uncapitalize"?s6(e):t==="Capitalize"?a6(e):t==="Uppercase"?u6(e):t==="Lowercase"?l6(e):e:e.toString()}function kw(e,t){return e.map(r=>Ls(r,t))}function Ls(e,t,r={}){return po(e)?o6(e,t,r):go(e)?c6(e,t,r):Mt(e)?_t(kw(e.anyOf,t),r):ho(e)?mt(Cw(e.const,t),r):O(e,r)}function d6(e,t={}){return Ls(e,"Capitalize",t)}function f6(e,t={}){return Ls(e,"Lowercase",t)}function m6(e,t={}){return Ls(e,"Uncapitalize",t)}function h6(e,t={}){return Ls(e,"Uppercase",t)}function p6(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=dc(e[i],t,Sr(r));return n}function g6(e,t,r){return p6(e.properties,t,r)}function y6(e,t,r){const n=g6(e,t,r);return Ut(n)}function b6(e,t){return e.map(r=>Km(r,t))}function w6(e,t){return e.map(r=>Km(r,t))}function v6(e,t){const{[t]:r,...n}=e;return n}function $6(e,t){return t.reduce((r,n)=>v6(r,n),e)}function D6(e,t,r){const n=Mr(e,[dr,"$id","required","properties"]),i=$6(r,t);return Tt(i,n)}function x6(e){const t=e.reduce((r,n)=>Ub(n)?[...r,mt(n)]:r,[]);return _t(t)}function Km(e,t){return Jr(e)?Ii(b6(e.allOf,t)):Mt(e)?_t(w6(e.anyOf,t)):wn(e)?D6(e,t,e.properties):Tt({})}function dc(e,t,r){const n=yr(t)?x6(t):t,i=rr(t)?Mi(t):t,o=pr(e),s=pr(t);return Ir(e)?y6(e,i,r):po(t)?k6(e,t,r):o&&s?wt("Omit",[e,n],r):!o&&s?wt("Omit",[e,n],r):o&&!s?wt("Omit",[e,n],r):O({...Km(e,i),...r})}function A6(e,t,r){return{[t]:dc(e,[t],Sr(r))}}function E6(e,t,r){return t.reduce((n,i)=>({...n,...A6(e,i,r)}),{})}function C6(e,t,r){return E6(e,t.keys,r)}function k6(e,t,r){const n=C6(e,t,r);return Ut(n)}function F6(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=fc(e[i],t,Sr(r));return n}function S6(e,t,r){return F6(e.properties,t,r)}function T6(e,t,r){const n=S6(e,t,r);return Ut(n)}function M6(e,t){return e.map(r=>Gm(r,t))}function P6(e,t){return e.map(r=>Gm(r,t))}function N6(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function I6(e,t,r){const n=Mr(e,[dr,"$id","required","properties"]),i=N6(r,t);return Tt(i,n)}function O6(e){const t=e.reduce((r,n)=>Ub(n)?[...r,mt(n)]:r,[]);return _t(t)}function Gm(e,t){return Jr(e)?Ii(M6(e.allOf,t)):Mt(e)?_t(P6(e.anyOf,t)):wn(e)?I6(e,t,e.properties):Tt({})}function fc(e,t,r){const n=yr(t)?O6(t):t,i=rr(t)?Mi(t):t,o=pr(e),s=pr(t);return Ir(e)?T6(e,i,r):po(t)?j6(e,t,r):o&&s?wt("Pick",[e,n],r):!o&&s?wt("Pick",[e,n],r):o&&!s?wt("Pick",[e,n],r):O({...Gm(e,i),...r})}function B6(e,t,r){return{[t]:fc(e,[t],Sr(r))}}function R6(e,t,r){return t.reduce((n,i)=>({...n,...B6(e,i,r)}),{})}function L6(e,t,r){return R6(e,t.keys,r)}function j6(e,t,r){const n=L6(e,t,r);return Ut(n)}function U6(e,t){return wt("Partial",[wt(e,t)])}function _6(e){return wt("Partial",[Os(e)])}function V6(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Ni(e[r]);return t}function W6(e,t){const r=Mr(e,[dr,"$id","required","properties"]),n=V6(t);return Tt(n,r)}function Vp(e){return e.map(t=>Fw(t))}function Fw(e){return Fs(e)?U6(e.target,e.parameters):pr(e)?_6(e.$ref):Jr(e)?Ii(Vp(e.allOf)):Mt(e)?_t(Vp(e.anyOf)):wn(e)?W6(e,e.properties):Hl(e)||Ya(e)||Ms(e)||ho(e)||gm(e)||Ps(e)||Qa(e)||ym(e)||eu(e)?e:Tt({})}function Zm(e,t){return Ir(e)?K6(e,t):O({...Fw(e),...t})}function z6(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Zm(e[n],Sr(t));return r}function q6(e,t){return z6(e.properties,t)}function K6(e,t){const r=q6(e,t);return Ut(r)}function G6(e,t){return wt("Required",[wt(e,t)])}function Z6(e){return wt("Required",[Os(e)])}function H6(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Mr(e[r],[ti]);return t}function J6(e,t){const r=Mr(e,[dr,"$id","required","properties"]),n=H6(t);return Tt(n,r)}function Wp(e){return e.map(t=>Sw(t))}function Sw(e){return Fs(e)?G6(e.target,e.parameters):pr(e)?Z6(e.$ref):Jr(e)?Ii(Wp(e.allOf)):Mt(e)?_t(Wp(e.anyOf)):wn(e)?J6(e,e.properties):Hl(e)||Ya(e)||Ms(e)||ho(e)||gm(e)||Ps(e)||Qa(e)||ym(e)||eu(e)?e:Tt({})}function Hm(e,t){return Ir(e)?Q6(e,t):O({...Sw(e),...t})}function Y6(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Hm(e[n],t);return r}function X6(e,t){return Y6(e.properties,t)}function Q6(e,t){const r=X6(e,t);return Ut(r)}function eF(e,t){return t.map(r=>pr(r)?Jm(e,r.$ref):Pr(e,r))}function Jm(e,t){return t in e?pr(e[t])?Jm(e,e[t].$ref):Pr(e,e[t]):Je()}function tF(e){return ac(e[0])}function rF(e){return sc(e[0],e[1])}function nF(e){return Rm(e[0])}function iF(e){return Zm(e[0])}function oF(e){return dc(e[0],e[1])}function sF(e){return fc(e[0],e[1])}function aF(e){return Hm(e[0])}function uF(e,t,r){const n=eF(e,r);return t==="Awaited"?tF(n):t==="Index"?rF(n):t==="KeyOf"?nF(n):t==="Partial"?iF(n):t==="Omit"?oF(n):t==="Pick"?sF(n):t==="Required"?aF(n):Je()}function lF(e,t){return Sm(Pr(e,t))}function cF(e,t){return Tm(Pr(e,t))}function dF(e,t,r){return Mm(ou(e,t),Pr(e,r))}function fF(e,t,r){return ru(ou(e,t),Pr(e,r))}function mF(e,t){return Ii(ou(e,t))}function hF(e,t){return Bm(Pr(e,t))}function pF(e,t){return Tt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Pr(e,t[n])}),{}))}function gF(e,t){const[r,n]=[Pr(e,Ew(t)),qm(t)],i=fm(t);return i.patternProperties[n]=r,i}function yF(e,t){return pr(t)?{...Jm(e,t.$ref),[dr]:t[dr]}:t}function bF(e,t){return Is(ou(e,t))}function wF(e,t){return _t(ou(e,t))}function ou(e,t){return t.map(r=>Pr(e,r))}function Pr(e,t){return Fi(t)?O(Pr(e,Mr(t,[ti])),t):pm(t)?O(Pr(e,Mr(t,[Ja])),t):Be(t)?O(yF(e,t),t):ks(t)?O(lF(e,t.items),t):Zl(t)?O(cF(e,t.items),t):Fs(t)?O(uF(e,t.target,t.parameters)):Ss(t)?O(dF(e,t.parameters,t.returns),t):Ts(t)?O(fF(e,t.parameters,t.returns),t):Jr(t)?O(mF(e,t.allOf),t):Jl(t)?O(hF(e,t.items),t):wn(t)?O(pF(e,t.properties),t):Xl(t)?O(gF(e,t)):yo(t)?O(bF(e,t.items||[]),t):Mt(t)?O(wF(e,t.anyOf),t):t}function vF(e,t){return t in e?Pr(e,e[t]):Je()}function $F(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:vF(e,r)}),{})}class DF{constructor(t){const r=$F(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:O(this.$defs[t],r)};return O({[N]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function xF(e){return new DF(e)}function AF(e,t){return O({[N]:"Not",not:e},t)}function EF(e,t){return Ts(e)?Is(e.parameters,t):Je()}let CF=0;function kF(e,t={}){ft(t.$id)&&(t.$id=`T${CF++}`);const r=fm(e({[N]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,O({[Gl]:"Recursive",...r},t)}function FF(e,t){const r=st(e)?new globalThis.RegExp(e):e;return O({[N]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function SF(e){return Jr(e)?e.allOf:Mt(e)?e.anyOf:yo(e)?e.items??[]:[]}function TF(e){return SF(e)}function MF(e,t){return Ts(e)?O(e.returns,t):Je(t)}class PF{constructor(t){this.schema=t}Decode(t){return new NF(this.schema,t)}}class NF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const o={Encode:s=>r[dr].Encode(t(s)),Decode:s=>this.decode(r[dr].Decode(s))};return{...r,[dr]:o}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[dr]:n}}Encode(t){return Be(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function IF(e){return new PF(e)}function OF(e={}){return O({[N]:e[N]??"Unsafe"},e)}function BF(e){return O({[N]:"Void",type:"void"},e)}const RF=Object.freeze(Object.defineProperty({__proto__:null,Any:Oa,Argument:IC,Array:Sm,AsyncIterator:Tm,Awaited:ac,BigInt:Im,Boolean:ew,Capitalize:d6,Composite:p4,Const:b4,Constructor:Mm,ConstructorParameters:w4,Date:dw,Enum:v4,Exclude:Vm,Extends:_m,Extract:Wm,Function:ru,Index:sc,InstanceType:F3,Instantiate:e6,Integer:t6,Intersect:Ii,Iterator:Bm,KeyOf:Rm,Literal:mt,Lowercase:f6,Mapped:Rk,Module:xF,Never:Je,Not:AF,Null:fw,Number:$o,Object:Tt,Omit:dc,Optional:Ni,Parameters:EF,Partial:Zm,Pick:fc,Promise:ow,Readonly:Pi,ReadonlyOptional:xw,Record:Aw,Recursive:kF,Ref:Os,RegExp:FF,Required:Hm,Rest:TF,ReturnType:MF,String:ao,Symbol:mw,TemplateLiteral:rw,Transform:IF,Tuple:Is,Uint8Array:pw,Uncapitalize:m6,Undefined:hw,Union:_t,Unknown:uc,Unsafe:OF,Uppercase:h6,Void:BF},Symbol.toStringTag,{value:"Module"})),Ie=RF;function Tw(e){switch(e.errorType){case C.ArrayContains:return"Expected array to contain at least one matching value";case C.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case C.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case C.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case C.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case C.ArrayUniqueItems:return"Expected array elements to be unique";case C.Array:return"Expected array";case C.AsyncIterator:return"Expected AsyncIterator";case C.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case C.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case C.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case C.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case C.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case C.BigInt:return"Expected bigint";case C.Boolean:return"Expected boolean";case C.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case C.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case C.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case C.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case C.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case C.Date:return"Expected Date";case C.Function:return"Expected function";case C.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case C.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case C.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case C.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case C.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case C.Integer:return"Expected integer";case C.IntersectUnevaluatedProperties:return"Unexpected property";case C.Intersect:return"Expected all values to match";case C.Iterator:return"Expected Iterator";case C.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case C.Never:return"Never";case C.Not:return"Value should not match";case C.Null:return"Expected null";case C.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case C.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case C.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case C.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case C.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case C.Number:return"Expected number";case C.Object:return"Expected object";case C.ObjectAdditionalProperties:return"Unexpected property";case C.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case C.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case C.ObjectRequiredProperty:return"Expected required property";case C.Promise:return"Expected Promise";case C.RegExp:return"Expected string to match regular expression";case C.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case C.StringFormat:return`Expected string to match '${e.schema.format}' format`;case C.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case C.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case C.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case C.String:return"Expected string";case C.Symbol:return"Expected symbol";case C.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case C.Tuple:return"Expected tuple";case C.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case C.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case C.Uint8Array:return"Expected Uint8Array";case C.Undefined:return"Expected undefined";case C.Union:return"Expected union value";case C.Void:return"Expected void";case C.Kind:return`Expected kind '${e.schema[N]}'`;default:return"Unknown error type"}}let Mw=Tw;function LF(e){Mw=e}function jF(){return Mw}class UF extends jt{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function _F(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new UF(e);return Xr(r,t)}function mc(e,t){return!Er(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function Xr(e,t){return e[N]==="This"||e[N]==="Ref"?_F(e,t):e}class VF extends jt{constructor(t){super("Unable to hash value"),this.value=t}}var Nr;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Nr||(Nr={}));let jo=BigInt("14695981039346656037");const[WF,zF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],qF=Array.from({length:256}).map((e,t)=>BigInt(t)),Pw=new Float64Array(1),Nw=new DataView(Pw.buffer),Iw=new Uint8Array(Pw.buffer);function*KF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function GF(e){qt(Nr.Array);for(const t of e)hs(t)}function ZF(e){qt(Nr.Boolean),qt(e?1:0)}function HF(e){qt(Nr.BigInt),Nw.setBigInt64(0,e);for(const t of Iw)qt(t)}function JF(e){qt(Nr.Date),hs(e.getTime())}function YF(e){qt(Nr.Null)}function XF(e){qt(Nr.Number),Nw.setFloat64(0,e);for(const t of Iw)qt(t)}function QF(e){qt(Nr.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())hs(t),hs(e[t])}function e8(e){qt(Nr.String);for(let t=0;t<e.length;t++)for(const r of KF(e.charCodeAt(t)))qt(r)}function t8(e){qt(Nr.Symbol),hs(e.description)}function r8(e){qt(Nr.Uint8Array);for(let t=0;t<e.length;t++)qt(e[t])}function n8(e){return qt(Nr.Undefined)}function hs(e){if(Tr(e))return GF(e);if(ql(e))return ZF(e);if(_n(e))return HF(e);if(mm(e))return JF(e);if(zl(e))return YF();if(ne(e))return XF(e);if(Fn(e))return QF(e);if(Er(e))return e8(e);if(Kl(e))return t8(e);if(hm(e))return r8(e);if(ki(e))return n8();throw new VF(e)}function qt(e){jo=jo^qF[e],jo=jo*WF%zF}function Ym(e){return jo=BigInt("14695981039346656037"),hs(e),jo}class i8 extends jt{constructor(t){super("Unknown type"),this.schema=t}}function o8(e){return e[N]==="Any"||e[N]==="Unknown"}function ue(e){return e!==void 0}function s8(e,t,r){return!0}function a8(e,t,r){return!0}function u8(e,t,r){if(!Tr(r)||ue(e.minItems)&&!(r.length>=e.minItems)||ue(e.maxItems)&&!(r.length<=e.maxItems)||!r.every(o=>kt(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of r){const a=Ym(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(ue(e.contains)||ne(e.minContains)||ne(e.maxContains)))return!0;const n=ue(e.contains)?e.contains:Je(),i=r.reduce((o,s)=>kt(n,t,s)?o+1:o,0);return!(i===0||ne(e.minContains)&&i<e.minContains||ne(e.maxContains)&&i>e.maxContains)}function l8(e,t,r){return Mb(r)}function c8(e,t,r){return!(!_n(r)||ue(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ue(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ue(e.maximum)&&!(r<=e.maximum)||ue(e.minimum)&&!(r>=e.minimum)||ue(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function d8(e,t,r){return ql(r)}function f8(e,t,r){return kt(e.returns,t,r.prototype)}function m8(e,t,r){return!(!mm(r)||ue(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||ue(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||ue(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||ue(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||ue(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function h8(e,t,r){return Bb(r)}function p8(e,t,r){const n=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return kt(i,[...t,...n],r)}function g8(e,t,r){return!(!Ob(r)||ue(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ue(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ue(e.maximum)&&!(r<=e.maximum)||ue(e.minimum)&&!(r>=e.minimum)||ue(e.multipleOf)&&r%e.multipleOf!==0)}function y8(e,t,r){const n=e.allOf.every(i=>kt(i,t,r));if(e.unevaluatedProperties===!1){const i=new RegExp(ms(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s));return n&&o}else if(rr(e.unevaluatedProperties)){const i=new RegExp(ms(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s)||kt(e.unevaluatedProperties,t,r[s]));return n&&o}else return n}function b8(e,t,r){return Pb(r)}function w8(e,t,r){return r===e.const}function v8(e,t,r){return!1}function $8(e,t,r){return!kt(e.not,t,r)}function D8(e,t,r){return zl(r)}function x8(e,t,r){return!(!ot.IsNumberLike(r)||ue(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ue(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ue(e.minimum)&&!(r>=e.minimum)||ue(e.maximum)&&!(r<=e.maximum)||ue(e.multipleOf)&&r%e.multipleOf!==0)}function A8(e,t,r){if(!ot.IsObjectLike(r)||ue(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ue(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const i of n){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!kt(o,t,r[i])||(Rs(o)||o8(o))&&!(i in r))return!1}else if(ot.IsExactOptionalProperty(r,i)&&!kt(o,t,r[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&i.length===n.length?!0:i.every(o=>n.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(o=>n.includes(o)||kt(e.additionalProperties,t,r[o])):!0}function E8(e,t,r){return Nb(r)}function C8(e,t,r){if(!ot.IsRecordLike(r)||ue(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ue(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,i]=Object.entries(e.patternProperties)[0],o=new RegExp(n),s=Object.entries(r).every(([l,c])=>o.test(l)?kt(i,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([l,c])=>o.test(l)?!0:kt(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(l=>o.test(l)):!0;return s&&a&&u}function k8(e,t,r){return kt(Xr(e,t),t,r)}function F8(e,t,r){const n=new RegExp(e.source,e.flags);return ue(e.minLength)&&!(r.length>=e.minLength)||ue(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function S8(e,t,r){return!Er(r)||ue(e.minLength)&&!(r.length>=e.minLength)||ue(e.maxLength)&&!(r.length<=e.maxLength)||ue(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:ue(e.format)?Am(e.format)?Em(e.format)(r):!1:!0}function T8(e,t,r){return Kl(r)}function M8(e,t,r){return Er(r)&&new RegExp(e.pattern).test(r)}function P8(e,t,r){return kt(Xr(e,t),t,r)}function N8(e,t,r){if(!Tr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!kt(e.items[n],t,r[n]))return!1;return!0}function I8(e,t,r){return ki(r)}function O8(e,t,r){return e.anyOf.some(n=>kt(n,t,r))}function B8(e,t,r){return!(!hm(r)||ue(e.maxByteLength)&&!(r.length<=e.maxByteLength)||ue(e.minByteLength)&&!(r.length>=e.minByteLength))}function R8(e,t,r){return!0}function L8(e,t,r){return ot.IsVoidLike(r)}function j8(e,t,r){return Ei(e[N])?Fm(e[N])(e,r):!1}function kt(e,t,r){const n=ue(e.$id)?mc(e,t):t,i=e;switch(i[N]){case"Any":return s8();case"Argument":return a8();case"Array":return u8(i,n,r);case"AsyncIterator":return l8(i,n,r);case"BigInt":return c8(i,n,r);case"Boolean":return d8(i,n,r);case"Constructor":return f8(i,n,r);case"Date":return m8(i,n,r);case"Function":return h8(i,n,r);case"Import":return p8(i,n,r);case"Integer":return g8(i,n,r);case"Intersect":return y8(i,n,r);case"Iterator":return b8(i,n,r);case"Literal":return w8(i,n,r);case"Never":return v8();case"Not":return $8(i,n,r);case"Null":return D8(i,n,r);case"Number":return x8(i,n,r);case"Object":return A8(i,n,r);case"Promise":return E8(i,n,r);case"Record":return C8(i,n,r);case"Ref":return k8(i,n,r);case"RegExp":return F8(i,n,r);case"String":return S8(i,n,r);case"Symbol":return T8(i,n,r);case"TemplateLiteral":return M8(i,n,r);case"This":return P8(i,n,r);case"Tuple":return N8(i,n,r);case"Undefined":return I8(i,n,r);case"Union":return O8(i,n,r);case"Uint8Array":return B8(i,n,r);case"Unknown":return R8();case"Void":return L8(i,n,r);default:if(!Ei(i[N]))throw new i8(i);return j8(i,n,r)}}function bl(...e){return e.length===3?kt(e[0],e[1],e[2]):kt(e[0],[],e[1])}var C;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(C||(C={}));class U8 extends jt{constructor(t){super("Unknown type"),this.schema=t}}function Rn(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function ae(e){return e!==void 0}class Ow{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function B(e,t,r,n,i=[]){return{type:e,schema:t,path:r,value:n,message:jF()({errorType:e,path:r,schema:t,value:n,errors:i}),errors:i}}function*_8(e,t,r,n){}function*V8(e,t,r,n){}function*W8(e,t,r,n){if(!Tr(n))return yield B(C.Array,e,r,n);ae(e.minItems)&&!(n.length>=e.minItems)&&(yield B(C.ArrayMinItems,e,r,n)),ae(e.maxItems)&&!(n.length<=e.maxItems)&&(yield B(C.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*Ft(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=Ym(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield B(C.ArrayUniqueItems,e,r,n)),!(ae(e.contains)||ae(e.minContains)||ae(e.maxContains)))return;const i=ae(e.contains)?e.contains:Je(),o=n.reduce((s,a,u)=>Ft(i,t,`${r}${u}`,a).next().done===!0?s+1:s,0);o===0&&(yield B(C.ArrayContains,e,r,n)),ne(e.minContains)&&o<e.minContains&&(yield B(C.ArrayMinContains,e,r,n)),ne(e.maxContains)&&o>e.maxContains&&(yield B(C.ArrayMaxContains,e,r,n))}function*z8(e,t,r,n){Mb(n)||(yield B(C.AsyncIterator,e,r,n))}function*q8(e,t,r,n){if(!_n(n))return yield B(C.BigInt,e,r,n);ae(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield B(C.BigIntExclusiveMaximum,e,r,n)),ae(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield B(C.BigIntExclusiveMinimum,e,r,n)),ae(e.maximum)&&!(n<=e.maximum)&&(yield B(C.BigIntMaximum,e,r,n)),ae(e.minimum)&&!(n>=e.minimum)&&(yield B(C.BigIntMinimum,e,r,n)),ae(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield B(C.BigIntMultipleOf,e,r,n))}function*K8(e,t,r,n){ql(n)||(yield B(C.Boolean,e,r,n))}function*G8(e,t,r,n){yield*Ft(e.returns,t,r,n.prototype)}function*Z8(e,t,r,n){if(!mm(n))return yield B(C.Date,e,r,n);ae(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield B(C.DateExclusiveMaximumTimestamp,e,r,n)),ae(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield B(C.DateExclusiveMinimumTimestamp,e,r,n)),ae(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield B(C.DateMaximumTimestamp,e,r,n)),ae(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield B(C.DateMinimumTimestamp,e,r,n)),ae(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield B(C.DateMultipleOfTimestamp,e,r,n))}function*H8(e,t,r,n){Bb(n)||(yield B(C.Function,e,r,n))}function*J8(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*Ft(o,[...t,...i],r,n)}function*Y8(e,t,r,n){if(!Ob(n))return yield B(C.Integer,e,r,n);ae(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield B(C.IntegerExclusiveMaximum,e,r,n)),ae(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield B(C.IntegerExclusiveMinimum,e,r,n)),ae(e.maximum)&&!(n<=e.maximum)&&(yield B(C.IntegerMaximum,e,r,n)),ae(e.minimum)&&!(n>=e.minimum)&&(yield B(C.IntegerMinimum,e,r,n)),ae(e.multipleOf)&&n%e.multipleOf!==0&&(yield B(C.IntegerMultipleOf,e,r,n))}function*X8(e,t,r,n){let i=!1;for(const o of e.allOf)for(const s of Ft(o,t,r,n))i=!0,yield s;if(i)return yield B(C.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const o=new RegExp(ms(e));for(const s of Object.getOwnPropertyNames(n))o.test(s)||(yield B(C.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(ms(e));for(const s of Object.getOwnPropertyNames(n))if(!o.test(s)){const a=Ft(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*Q8(e,t,r,n){Pb(n)||(yield B(C.Iterator,e,r,n))}function*eS(e,t,r,n){n!==e.const&&(yield B(C.Literal,e,r,n))}function*tS(e,t,r,n){yield B(C.Never,e,r,n)}function*rS(e,t,r,n){Ft(e.not,t,r,n).next().done===!0&&(yield B(C.Not,e,r,n))}function*nS(e,t,r,n){zl(n)||(yield B(C.Null,e,r,n))}function*iS(e,t,r,n){if(!ot.IsNumberLike(n))return yield B(C.Number,e,r,n);ae(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield B(C.NumberExclusiveMaximum,e,r,n)),ae(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield B(C.NumberExclusiveMinimum,e,r,n)),ae(e.maximum)&&!(n<=e.maximum)&&(yield B(C.NumberMaximum,e,r,n)),ae(e.minimum)&&!(n>=e.minimum)&&(yield B(C.NumberMinimum,e,r,n)),ae(e.multipleOf)&&n%e.multipleOf!==0&&(yield B(C.NumberMultipleOf,e,r,n))}function*oS(e,t,r,n){if(!ot.IsObjectLike(n))return yield B(C.Object,e,r,n);ae(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield B(C.ObjectMinProperties,e,r,n)),ae(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield B(C.ObjectMaxProperties,e,r,n));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of i)s.includes(a)||(yield B(C.ObjectRequiredProperty,e.properties[a],`${r}/${Rn(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield B(C.ObjectAdditionalProperties,e,`${r}/${Rn(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*Ft(e.additionalProperties,t,`${r}/${Rn(a)}`,n[a]));for(const a of o){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*Ft(u,t,`${r}/${Rn(a)}`,n[a]),Rs(e)&&!(a in n)&&(yield B(C.ObjectRequiredProperty,u,`${r}/${Rn(a)}`,void 0))):ot.IsExactOptionalProperty(n,a)&&(yield*Ft(u,t,`${r}/${Rn(a)}`,n[a]))}}function*sS(e,t,r,n){Nb(n)||(yield B(C.Promise,e,r,n))}function*aS(e,t,r,n){if(!ot.IsRecordLike(n))return yield B(C.Object,e,r,n);ae(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield B(C.ObjectMinProperties,e,r,n)),ae(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield B(C.ObjectMaxProperties,e,r,n));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*Ft(o,t,`${r}/${Rn(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*Ft(e.additionalProperties,t,`${r}/${Rn(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield B(C.ObjectAdditionalProperties,e,`${r}/${Rn(a)}`,u)}}function*uS(e,t,r,n){yield*Ft(Xr(e,t),t,r,n)}function*lS(e,t,r,n){if(!Er(n))return yield B(C.String,e,r,n);if(ae(e.minLength)&&!(n.length>=e.minLength)&&(yield B(C.StringMinLength,e,r,n)),ae(e.maxLength)&&!(n.length<=e.maxLength)&&(yield B(C.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield B(C.RegExp,e,r,n)}function*cS(e,t,r,n){if(!Er(n))return yield B(C.String,e,r,n);ae(e.minLength)&&!(n.length>=e.minLength)&&(yield B(C.StringMinLength,e,r,n)),ae(e.maxLength)&&!(n.length<=e.maxLength)&&(yield B(C.StringMaxLength,e,r,n)),Er(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield B(C.StringPattern,e,r,n))),Er(e.format)&&(Am(e.format)?Em(e.format)(n)||(yield B(C.StringFormat,e,r,n)):yield B(C.StringFormatUnknown,e,r,n))}function*dS(e,t,r,n){Kl(n)||(yield B(C.Symbol,e,r,n))}function*fS(e,t,r,n){if(!Er(n))return yield B(C.String,e,r,n);new RegExp(e.pattern).test(n)||(yield B(C.StringPattern,e,r,n))}function*mS(e,t,r,n){yield*Ft(Xr(e,t),t,r,n)}function*hS(e,t,r,n){if(!Tr(n))return yield B(C.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield B(C.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield B(C.TupleLength,e,r,n);if(e.items)for(let i=0;i<e.items.length;i++)yield*Ft(e.items[i],t,`${r}/${i}`,n[i])}function*pS(e,t,r,n){ki(n)||(yield B(C.Undefined,e,r,n))}function*gS(e,t,r,n){if(bl(e,t,n))return;const i=e.anyOf.map(o=>new Ow(Ft(o,t,r,n)));yield B(C.Union,e,r,n,i)}function*yS(e,t,r,n){if(!hm(n))return yield B(C.Uint8Array,e,r,n);ae(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield B(C.Uint8ArrayMaxByteLength,e,r,n)),ae(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield B(C.Uint8ArrayMinByteLength,e,r,n))}function*bS(e,t,r,n){}function*wS(e,t,r,n){ot.IsVoidLike(n)||(yield B(C.Void,e,r,n))}function*vS(e,t,r,n){Fm(e[N])(e,n)||(yield B(C.Kind,e,r,n))}function*Ft(e,t,r,n){const i=ae(e.$id)?[...t,e]:t,o=e;switch(o[N]){case"Any":return yield*_8();case"Argument":return yield*V8();case"Array":return yield*W8(o,i,r,n);case"AsyncIterator":return yield*z8(o,i,r,n);case"BigInt":return yield*q8(o,i,r,n);case"Boolean":return yield*K8(o,i,r,n);case"Constructor":return yield*G8(o,i,r,n);case"Date":return yield*Z8(o,i,r,n);case"Function":return yield*H8(o,i,r,n);case"Import":return yield*J8(o,i,r,n);case"Integer":return yield*Y8(o,i,r,n);case"Intersect":return yield*X8(o,i,r,n);case"Iterator":return yield*Q8(o,i,r,n);case"Literal":return yield*eS(o,i,r,n);case"Never":return yield*tS(o,i,r,n);case"Not":return yield*rS(o,i,r,n);case"Null":return yield*nS(o,i,r,n);case"Number":return yield*iS(o,i,r,n);case"Object":return yield*oS(o,i,r,n);case"Promise":return yield*sS(o,i,r,n);case"Record":return yield*aS(o,i,r,n);case"Ref":return yield*uS(o,i,r,n);case"RegExp":return yield*lS(o,i,r,n);case"String":return yield*cS(o,i,r,n);case"Symbol":return yield*dS(o,i,r,n);case"TemplateLiteral":return yield*fS(o,i,r,n);case"This":return yield*mS(o,i,r,n);case"Tuple":return yield*hS(o,i,r,n);case"Undefined":return yield*pS(o,i,r,n);case"Union":return yield*gS(o,i,r,n);case"Uint8Array":return yield*yS(o,i,r,n);case"Unknown":return yield*bS();case"Void":return yield*wS(o,i,r,n);default:if(!Ei(o[N]))throw new U8(e);return yield*vS(o,i,r,n)}}function $S(...e){const t=e.length===3?Ft(e[0],e[1],"",e[2]):Ft(e[0],[],"",e[1]);return new Ow(t)}class DS extends jt{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class xS extends jt{constructor(t,r,n,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=i}}function Ve(e,t,r){try{return Be(e)?e[dr].Decode(r):r}catch(n){throw new xS(e,t,r,n)}}function AS(e,t,r,n){return Tr(n)?Ve(e,r,n.map((i,o)=>vn(e.items,t,`${r}/${o}`,i))):Ve(e,r,n)}function ES(e,t,r,n){if(!Fn(n)||Rb(n))return Ve(e,r,n);const i=cw(e),o=i.map(c=>c[0]),s={...n};for(const[c,d]of i)c in s&&(s[c]=vn(d,t,`${r}/${c}`,s[c]));if(!Be(e.unevaluatedProperties))return Ve(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Ve(u,`${r}/${c}`,l[c]));return Ve(e,r,l)}function CS(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=vn(o,[...t,...i],r,n);return Ve(e,r,s)}function kS(e,t,r,n){return Ve(e,r,vn(e.not,t,r,n))}function FS(e,t,r,n){if(!Fn(n))return Ve(e,r,n);const i=Do(e),o={...n};for(const l of i)Ib(o,l)&&(ki(o[l])&&(!eu(e.properties[l])||ot.IsExactOptionalProperty(o,l))||(o[l]=vn(e.properties[l],t,`${r}/${l}`,o[l])));if(!rr(e.additionalProperties))return Ve(e,r,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,u={...o};for(const l of s)i.includes(l)||(u[l]=Ve(a,`${r}/${l}`,u[l]));return Ve(e,r,u)}function SS(e,t,r,n){if(!Fn(n))return Ve(e,r,n);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...n};for(const c of Object.getOwnPropertyNames(n))o.test(c)&&(s[c]=vn(e.patternProperties[i],t,`${r}/${c}`,s[c]));if(!rr(e.additionalProperties))return Ve(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.test(c)||(l[c]=Ve(u,`${r}/${c}`,l[c]));return Ve(e,r,l)}function TS(e,t,r,n){const i=Xr(e,t);return Ve(e,r,vn(i,t,r,n))}function MS(e,t,r,n){const i=Xr(e,t);return Ve(e,r,vn(i,t,r,n))}function PS(e,t,r,n){return Tr(n)&&Tr(e.items)?Ve(e,r,e.items.map((i,o)=>vn(i,t,`${r}/${o}`,n[o]))):Ve(e,r,n)}function NS(e,t,r,n){for(const i of e.anyOf){if(!bl(i,t,n))continue;const o=vn(i,t,r,n);return Ve(e,r,o)}return Ve(e,r,n)}function vn(e,t,r,n){const i=mc(e,t),o=e;switch(e[N]){case"Array":return AS(o,i,r,n);case"Import":return CS(o,i,r,n);case"Intersect":return ES(o,i,r,n);case"Not":return kS(o,i,r,n);case"Object":return FS(o,i,r,n);case"Record":return SS(o,i,r,n);case"Ref":return TS(o,i,r,n);case"Symbol":return Ve(o,r,n);case"This":return MS(o,i,r,n);case"Tuple":return PS(o,i,r,n);case"Union":return NS(o,i,r,n);default:return Ve(o,r,n)}}function IS(e,t,r){return vn(e,t,"",r)}class OS extends jt{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class BS extends jt{constructor(t,r,n,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=i}}function Rt(e,t,r){try{return Be(e)?e[dr].Encode(r):r}catch(n){throw new BS(e,t,r,n)}}function RS(e,t,r,n){const i=Rt(e,r,n);return Tr(i)?i.map((o,s)=>yn(e.items,t,`${r}/${s}`,o)):i}function LS(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=Rt(e,r,n);return yn(o,[...t,...i],r,s)}function jS(e,t,r,n){const i=Rt(e,r,n);if(!Fn(n)||Rb(n))return i;const o=cw(e),s=o.map(d=>d[0]),a={...i};for(const[d,f]of o)d in a&&(a[d]=yn(f,t,`${r}/${d}`,a[d]));if(!Be(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const d of u)s.includes(d)||(c[d]=Rt(l,`${r}/${d}`,c[d]));return c}function US(e,t,r,n){return Rt(e.not,r,Rt(e,r,n))}function _S(e,t,r,n){const i=Rt(e,r,n);if(!Fn(i))return i;const o=Do(e),s={...i};for(const c of o)Ib(s,c)&&(ki(s[c])&&(!eu(e.properties[c])||ot.IsExactOptionalProperty(s,c))||(s[c]=yn(e.properties[c],t,`${r}/${c}`,s[c])));if(!rr(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Rt(u,`${r}/${c}`,l[c]));return l}function VS(e,t,r,n){const i=Rt(e,r,n);if(!Fn(n))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const d of Object.getOwnPropertyNames(n))s.test(d)&&(a[d]=yn(e.patternProperties[o],t,`${r}/${d}`,a[d]));if(!rr(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const d of u)s.test(d)||(c[d]=Rt(l,`${r}/${d}`,c[d]));return c}function WS(e,t,r,n){const i=Xr(e,t),o=yn(i,t,r,n);return Rt(e,r,o)}function zS(e,t,r,n){const i=Xr(e,t),o=yn(i,t,r,n);return Rt(e,r,o)}function qS(e,t,r,n){const i=Rt(e,r,n);return Tr(e.items)?e.items.map((o,s)=>yn(o,t,`${r}/${s}`,i[s])):[]}function KS(e,t,r,n){for(const i of e.anyOf){if(!bl(i,t,n))continue;const o=yn(i,t,r,n);return Rt(e,r,o)}for(const i of e.anyOf){const o=yn(i,t,r,n);if(bl(e,t,o))return Rt(e,r,o)}return Rt(e,r,n)}function yn(e,t,r,n){const i=mc(e,t),o=e;switch(e[N]){case"Array":return RS(o,i,r,n);case"Import":return LS(o,i,r,n);case"Intersect":return jS(o,i,r,n);case"Not":return US(o,i,r,n);case"Object":return _S(o,i,r,n);case"Record":return VS(o,i,r,n);case"Ref":return WS(o,i,r,n);case"This":return zS(o,i,r,n);case"Tuple":return qS(o,i,r,n);case"Union":return KS(o,i,r,n);default:return Rt(o,r,n)}}function GS(e,t,r){return yn(e,t,"",r)}function ZS(e,t){return Be(e)||vt(e.items,t)}function HS(e,t){return Be(e)||vt(e.items,t)}function JS(e,t){return Be(e)||vt(e.returns,t)||e.parameters.some(r=>vt(r,t))}function YS(e,t){return Be(e)||vt(e.returns,t)||e.parameters.some(r=>vt(r,t))}function XS(e,t){return Be(e)||Be(e.unevaluatedProperties)||e.allOf.some(r=>vt(r,t))}function QS(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),n=e.$defs[e.$ref];return Be(e)||vt(n,[...r,...t])}function e9(e,t){return Be(e)||vt(e.items,t)}function t9(e,t){return Be(e)||vt(e.not,t)}function r9(e,t){return Be(e)||Object.values(e.properties).some(r=>vt(r,t))||rr(e.additionalProperties)&&vt(e.additionalProperties,t)}function n9(e,t){return Be(e)||vt(e.item,t)}function i9(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Be(e)||vt(n,t)||rr(e.additionalProperties)&&Be(e.additionalProperties)}function o9(e,t){return Be(e)?!0:vt(Xr(e,t),t)}function s9(e,t){return Be(e)?!0:vt(Xr(e,t),t)}function a9(e,t){return Be(e)||!ki(e.items)&&e.items.some(r=>vt(r,t))}function u9(e,t){return Be(e)||e.anyOf.some(r=>vt(r,t))}function vt(e,t){const r=mc(e,t),n=e;if(e.$id&&rf.has(e.$id))return!1;switch(e.$id&&rf.add(e.$id),e[N]){case"Array":return ZS(n,r);case"AsyncIterator":return HS(n,r);case"Constructor":return JS(n,r);case"Function":return YS(n,r);case"Import":return QS(n,r);case"Intersect":return XS(n,r);case"Iterator":return e9(n,r);case"Not":return t9(n,r);case"Object":return r9(n,r);case"Promise":return n9(n,r);case"Record":return i9(n,r);case"Ref":return o9(n,r);case"This":return s9(n,r);case"Tuple":return a9(n,r);case"Union":return u9(n,r);default:return Be(e)}}const rf=new Set;function l9(e,t){return rf.clear(),vt(e,t)}class c9{constructor(t,r,n,i){this.schema=t,this.references=r,this.checkFunc=n,this.code=i,this.hasTransform=l9(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return $S(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new DS(this.schema,t,this.Errors(t).First());return this.hasTransform?IS(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?GS(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new OS(this.schema,t,this.Errors(t).First());return r}}var Vn;(function(e){function t(o){return o===36}e.DollarSign=t;function r(o){return o===95}e.IsUnderscore=r;function n(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=n;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(Vn||(Vn={}));var wl;(function(e){function t(o){return o.length===0?!1:Vn.IsNumeric(o.charCodeAt(0))}function r(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(Vn.IsAlpha(a)||Vn.IsNumeric(a)||Vn.DollarSign(a)||Vn.IsUnderscore(a)))return!1}return!0}function n(o){return o.replace(/'/g,"\\'")}function i(o,s){return r(s)?`${o}.${s}`:`${o}['${n(s)}']`}e.Encode=i})(wl||(wl={}));var nf;(function(e){function t(r){const n=[];for(let i=0;i<r.length;i++){const o=r.charCodeAt(i);Vn.IsNumeric(o)||Vn.IsAlpha(o)?n.push(r.charAt(i)):n.push(`_${o}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(nf||(nf={}));var of;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(of||(of={}));class d9 extends jt{constructor(t){super("Unknown type"),this.schema=t}}class zp extends jt{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var qi;(function(e){function t(s,a,u){return ot.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${wl.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return ot.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return ot.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function i(s){return ot.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return ot.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(qi||(qi={}));var ga;(function(e){function t(y){return y[N]==="Any"||y[N]==="Unknown"}function*r(y,j,$){yield"true"}function*n(y,j,$){yield"true"}function*i(y,j,$){yield`Array.isArray(${$})`;const[Z,W]=[si("value","any"),si("acc","number")];ne(y.maxItems)&&(yield`${$}.length <= ${y.maxItems}`),ne(y.minItems)&&(yield`${$}.length >= ${y.minItems}`);const q=Jt(y.items,j,"value");if(yield`${$}.every((${Z}) => ${q})`,Ze(y.contains)||ne(y.minContains)||ne(y.maxContains)){const Ne=Ze(y.contains)?y.contains:Je(),or=Jt(Ne,j,"value"),Tn=ne(y.minContains)?[`(count >= ${y.minContains})`]:[],en=ne(y.maxContains)?[`(count <= ${y.maxContains})`]:[],xn=`const count = value.reduce((${W}, ${Z}) => ${or} ? acc + 1 : acc, 0)`,du=["(count > 0)",...Tn,...en].join(" && ");yield`((${Z}) => { ${xn}; return ${du}})(${$})`}y.uniqueItems===!0&&(yield`((${Z}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${$})`)}function*o(y,j,$){yield`(typeof value === 'object' && Symbol.asyncIterator in ${$})`}function*s(y,j,$){yield`(typeof ${$} === 'bigint')`,_n(y.exclusiveMaximum)&&(yield`${$} < BigInt(${y.exclusiveMaximum})`),_n(y.exclusiveMinimum)&&(yield`${$} > BigInt(${y.exclusiveMinimum})`),_n(y.maximum)&&(yield`${$} <= BigInt(${y.maximum})`),_n(y.minimum)&&(yield`${$} >= BigInt(${y.minimum})`),_n(y.multipleOf)&&(yield`(${$} % BigInt(${y.multipleOf})) === 0`)}function*a(y,j,$){yield`(typeof ${$} === 'boolean')`}function*u(y,j,$){yield*Ht(y.returns,j,`${$}.prototype`)}function*l(y,j,$){yield`(${$} instanceof Date) && Number.isFinite(${$}.getTime())`,ne(y.exclusiveMaximumTimestamp)&&(yield`${$}.getTime() < ${y.exclusiveMaximumTimestamp}`),ne(y.exclusiveMinimumTimestamp)&&(yield`${$}.getTime() > ${y.exclusiveMinimumTimestamp}`),ne(y.maximumTimestamp)&&(yield`${$}.getTime() <= ${y.maximumTimestamp}`),ne(y.minimumTimestamp)&&(yield`${$}.getTime() >= ${y.minimumTimestamp}`),ne(y.multipleOfTimestamp)&&(yield`(${$}.getTime() % ${y.multipleOfTimestamp}) === 0`)}function*c(y,j,$){yield`(typeof ${$} === 'function')`}function*d(y,j,$){const Z=globalThis.Object.getOwnPropertyNames(y.$defs).reduce((W,q)=>[...W,y.$defs[q]],[]);yield*Ht(Os(y.$ref),[...j,...Z],$)}function*f(y,j,$){yield`Number.isInteger(${$})`,ne(y.exclusiveMaximum)&&(yield`${$} < ${y.exclusiveMaximum}`),ne(y.exclusiveMinimum)&&(yield`${$} > ${y.exclusiveMinimum}`),ne(y.maximum)&&(yield`${$} <= ${y.maximum}`),ne(y.minimum)&&(yield`${$} >= ${y.minimum}`),ne(y.multipleOf)&&(yield`(${$} % ${y.multipleOf}) === 0`)}function*m(y,j,$){const Z=y.allOf.map(W=>Jt(W,j,$)).join(" && ");if(y.unevaluatedProperties===!1){const W=Br(`${new RegExp(ms(y))};`),q=`Object.getOwnPropertyNames(${$}).every(key => ${W}.test(key))`;yield`(${Z} && ${q})`}else if(Ze(y.unevaluatedProperties)){const W=Br(`${new RegExp(ms(y))};`),q=`Object.getOwnPropertyNames(${$}).every(key => ${W}.test(key) || ${Jt(y.unevaluatedProperties,j,`${$}[key]`)})`;yield`(${Z} && ${q})`}else yield`(${Z})`}function*b(y,j,$){yield`(typeof value === 'object' && Symbol.iterator in ${$})`}function*w(y,j,$){typeof y.const=="number"||typeof y.const=="boolean"?yield`(${$} === ${y.const})`:yield`(${$} === '${of.Escape(y.const)}')`}function*x(y,j,$){yield"false"}function*D(y,j,$){yield`(!${Jt(y.not,j,$)})`}function*E(y,j,$){yield`(${$} === null)`}function*M(y,j,$){yield qi.IsNumberLike($),ne(y.exclusiveMaximum)&&(yield`${$} < ${y.exclusiveMaximum}`),ne(y.exclusiveMinimum)&&(yield`${$} > ${y.exclusiveMinimum}`),ne(y.maximum)&&(yield`${$} <= ${y.maximum}`),ne(y.minimum)&&(yield`${$} >= ${y.minimum}`),ne(y.multipleOf)&&(yield`(${$} % ${y.multipleOf}) === 0`)}function*I(y,j,$){yield qi.IsObjectLike($),ne(y.minProperties)&&(yield`Object.getOwnPropertyNames(${$}).length >= ${y.minProperties}`),ne(y.maxProperties)&&(yield`Object.getOwnPropertyNames(${$}).length <= ${y.maxProperties}`);const Z=Object.getOwnPropertyNames(y.properties);for(const W of Z){const q=wl.Encode($,W),Ne=y.properties[W];if(y.required&&y.required.includes(W))yield*Ht(Ne,j,q),(Rs(Ne)||t(Ne))&&(yield`('${W}' in ${$})`);else{const or=Jt(Ne,j,q);yield qi.IsExactOptionalProperty($,W,or)}}if(y.additionalProperties===!1)if(y.required&&y.required.length===Z.length)yield`Object.getOwnPropertyNames(${$}).length === ${Z.length}`;else{const W=`[${Z.map(q=>`'${q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${$}).every(key => ${W}.includes(key))`}if(typeof y.additionalProperties=="object"){const W=Jt(y.additionalProperties,j,`${$}[key]`),q=`[${Z.map(Ne=>`'${Ne}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${$}).every(key => ${q}.includes(key) || ${W}))`}}function*L(y,j,$){yield`${$} instanceof Promise`}function*se(y,j,$){yield qi.IsRecordLike($),ne(y.minProperties)&&(yield`Object.getOwnPropertyNames(${$}).length >= ${y.minProperties}`),ne(y.maxProperties)&&(yield`Object.getOwnPropertyNames(${$}).length <= ${y.maxProperties}`);const[Z,W]=Object.entries(y.patternProperties)[0],q=Br(`${new RegExp(Z)}`),Ne=Jt(W,j,"value"),or=Ze(y.additionalProperties)?Jt(y.additionalProperties,j,$):y.additionalProperties===!1?"false":"true",Tn=`(${q}.test(key) ? ${Ne} : ${or})`;yield`(Object.entries(${$}).every(([key, value]) => ${Tn}))`}function*ye(y,j,$){const Z=Xr(y,j);if(Ue.functions.has(y.$ref))return yield`${Sn(y.$ref)}(${$})`;yield*Ht(Z,j,$)}function*Ae(y,j,$){const Z=Br(`${new RegExp(y.source,y.flags)};`);yield`(typeof ${$} === 'string')`,ne(y.maxLength)&&(yield`${$}.length <= ${y.maxLength}`),ne(y.minLength)&&(yield`${$}.length >= ${y.minLength}`),yield`${Z}.test(${$})`}function*je(y,j,$){yield`(typeof ${$} === 'string')`,ne(y.maxLength)&&(yield`${$}.length <= ${y.maxLength}`),ne(y.minLength)&&(yield`${$}.length >= ${y.minLength}`),y.pattern!==void 0&&(yield`${Br(`${new RegExp(y.pattern)};`)}.test(${$})`),y.format!==void 0&&(yield`format('${y.format}', ${$})`)}function*Dt(y,j,$){yield`(typeof ${$} === 'symbol')`}function*Pt(y,j,$){yield`(typeof ${$} === 'string')`,yield`${Br(`${new RegExp(y.pattern)};`)}.test(${$})`}function*br(y,j,$){yield`${Sn(y.$ref)}(${$})`}function*$n(y,j,$){if(yield`Array.isArray(${$})`,y.items===void 0)return yield`${$}.length === 0`;yield`(${$}.length === ${y.maxItems})`;for(let Z=0;Z<y.items.length;Z++)yield`${Jt(y.items[Z],j,`${$}[${Z}]`)}`}function*Qr(y,j,$){yield`${$} === undefined`}function*Oi(y,j,$){yield`(${y.anyOf.map(W=>Jt(W,j,$)).join(" || ")})`}function*Zt(y,j,$){yield`${$} instanceof Uint8Array`,ne(y.maxByteLength)&&(yield`(${$}.length <= ${y.maxByteLength})`),ne(y.minByteLength)&&(yield`(${$}.length >= ${y.minByteLength})`)}function*Eo(y,j,$){yield"true"}function*Co(y,j,$){yield qi.IsVoidLike($)}function*oi(y,j,$){const Z=Ue.instances.size;Ue.instances.set(Z,y),yield`kind('${y[N]}', ${Z}, ${$})`}function*Ht(y,j,$,Z=!0){const W=Er(y.$id)?[...j,y]:j,q=y;if(Z&&Er(y.$id)){const Ne=Sn(y.$id);if(Ue.functions.has(Ne))return yield`${Ne}(${$})`;{Ue.functions.set(Ne,"<deferred>");const or=Dn(Ne,y,j,"value",!1);return Ue.functions.set(Ne,or),yield`${Ne}(${$})`}}switch(q[N]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*i(q,W,$);case"AsyncIterator":return yield*o(q,W,$);case"BigInt":return yield*s(q,W,$);case"Boolean":return yield*a(q,W,$);case"Constructor":return yield*u(q,W,$);case"Date":return yield*l(q,W,$);case"Function":return yield*c(q,W,$);case"Import":return yield*d(q,W,$);case"Integer":return yield*f(q,W,$);case"Intersect":return yield*m(q,W,$);case"Iterator":return yield*b(q,W,$);case"Literal":return yield*w(q,W,$);case"Never":return yield*x();case"Not":return yield*D(q,W,$);case"Null":return yield*E(q,W,$);case"Number":return yield*M(q,W,$);case"Object":return yield*I(q,W,$);case"Promise":return yield*L(q,W,$);case"Record":return yield*se(q,W,$);case"Ref":return yield*ye(q,W,$);case"RegExp":return yield*Ae(q,W,$);case"String":return yield*je(q,W,$);case"Symbol":return yield*Dt(q,W,$);case"TemplateLiteral":return yield*Pt(q,W,$);case"This":return yield*br(q,W,$);case"Tuple":return yield*$n(q,W,$);case"Undefined":return yield*Qr(q,W,$);case"Union":return yield*Oi(q,W,$);case"Uint8Array":return yield*Zt(q,W,$);case"Unknown":return yield*Eo();case"Void":return yield*Co(q,W,$);default:if(!Ei(q[N]))throw new d9(y);return yield*oi(q,W,$)}}const Ue={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Jt(y,j,$,Z=!0){return`(${[...Ht(y,j,$,Z)].join(" && ")})`}function Sn(y){return`check_${nf.Encode(y)}`}function Br(y){const j=`local_${Ue.variables.size}`;return Ue.variables.set(j,`const ${j} = ${y}`),j}function Dn(y,j,$,Z,W=!0){const[q,Ne]=[`
`,xn=>"".padStart(xn," ")],or=si("value","any"),Tn=lu("boolean"),en=[...Ht(j,$,Z,W)].map(xn=>`${Ne(4)}${xn}`).join(` &&${q}`);return`function ${y}(${or})${Tn} {${q}${Ne(2)}return (${q}${en}${q}${Ne(2)})
}`}function si(y,j){const $=Ue.language==="typescript"?`: ${j}`:"";return`${y}${$}`}function lu(y){return Ue.language==="typescript"?`: ${y}`:""}function cu(y,j,$){const Z=Dn("check",y,j,"value"),W=si("value","any"),q=lu("boolean"),Ne=[...Ue.functions.values()],or=[...Ue.variables.values()],Tn=Er(y.$id)?`return function check(${W})${q} {
  return ${Sn(y.$id)}(value)
}`:`return ${Z}`;return[...or,...Ne,Tn].join(`
`)}function ko(...y){const j={language:"javascript"},[$,Z,W]=y.length===2&&Tr(y[1])?[y[0],y[1],j]:y.length===2&&!Tr(y[1])?[y[0],[],y[1]]:y.length===3?[y[0],y[1],y[2]]:y.length===1?[y[0],[],j]:[null,[],j];if(Ue.language=W.language,Ue.variables.clear(),Ue.functions.clear(),Ue.instances.clear(),!Ze($))throw new zp($);for(const q of Z)if(!Ze(q))throw new zp(q);return cu($,Z)}e.Code=ko;function V2(y,j=[]){const $=ko(y,j,{language:"javascript"}),Z=globalThis.Function("kind","format","hash",$),W=new Map(Ue.instances);function q(en,xn,du){if(!Ei(en)||!W.has(xn))return!1;const W2=Fm(en),z2=W.get(xn);return W2(z2,du)}function Ne(en,xn){return Am(en)?Em(en)(xn):!1}function or(en){return Ym(en)}const Tn=Z(q,Ne,or);return new c9(y,j,Tn,$)}e.Compile=V2})(ga||(ga={}));const sf={};function Bw(e,t){e in sf||(sf[e]=t)}let qp=!1;function f9(){qp||(qp=!0,LF(e=>(sf[e.schema[N]]||Tw)(e)))}const af=Symbol.for("object-shape-tester.shape-identifier");function Fe(e){if(f9(),Xm(e))return e;const t=uf(e),r=Ki(t,!1),n=Ki(t,!0),i={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:ga.Compile(t),$_compiledSchemaNoExtraKeys:ga.Compile(r),$_compiledSchemaExtraKeys:ga.Compile(n)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[af]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Xm(e){return F.hasKey(e,af)&&!!e[af]}function Qm(e){return F.hasKey(e,N)}function Ki(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Ki(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Ki(n,t))),Qm(e.items)?r.items=Ki(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Ki(n,t))),F.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([i,o])=>{n[i]=Ki(o,t)}),r.properties=n}return r.additionalProperties=t,r}function uf(e){if(Qm(e))return e;if(Xm(e))return e.$_schema;if(F.isFunction(e))return Ie.Function([],Ie.Any(),{default:e});if(F.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,i])=>{const o=uf(i);r[n]=o,t[n]=o.default}),Ie.Object(r,{default:t})}else{if(F.isArray(e))return Ie.Array(Ie.Union(e.map(t=>uf(t))),{default:[]});if(F.isPrimitive(e)){if(F.isString(e))return Ie.String({default:e});if(F.isNumber(e))return Ie.Number({default:e});if(F.isBoolean(e))return Ie.Boolean({default:e});if(F.isSymbol(e))return Ie.Symbol({default:e});if(F.isNull(e))return Ie.Null({default:null});if(F.isUndefined(e))return Ie.Undefined({default:void 0});if(F.isBigInt(e))return Ie.BigInt({default:e});Ct.tsType(e).equals(),Ct.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${g(e)}`)}}function m9({checkValue:e,default:t,name:r}){return Ei(r)||km(r,(n,i)=>e(i)),(n=t)=>Fe(Ie.Unsafe({[N]:r,default:n}))}function ps(e,t){const r=Ur(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Fe(Ie.Union(r.map(n=>Ie.Literal(n)),{default:t??r[0]}))}function ce(e){return F.isSymbol(e)?h9(e):Fe(Ie.Const(e,{default:e}))}const Su="ExactSymbol";function h9(e){return Ei(Su)||km(Su,(t,r)=>r===t.symbol),Bw(Su,({schema:t})=>`Expected symbol ${t.symbol?.description?ZD({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Fe(Ie.Unsafe({[N]:Su,symbol:e,default:e}))}function p9(...e){const t={},r=e.map(n=>{const i=Fe(n);return Object.assign(t,i.default),i.$_schema});return Fe(Ie.Composite(r,{default:t}))}function It(e,t={}){ot.ExactOptionalPropertyTypes=!0;const r=Fe(e).$_schema,n=t.alsoUndefined?Ie.Union([Ie.Undefined(),r]):r;return Fe(Ie.Optional(n))}function Ke(...e){let t;const r=e.map((n,i)=>{const o=Fe(n);return i||(t=o.default),o.$_schema});return Fe(Ie.Union(r,{default:t}))}class g9 extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(o=>Rw(o)).join(`
`),i=vs(r,`Shape mismatch:
${Pf(n,1)}`);super(i),this.errors=t,this.failureMessage=r}}function y9(e){return e.errors.flatMap(t=>Array.from(t))}function Rw(e,t=0){const r=y9(e).map(i=>Rw(i,t+1)),n=[e.path,e.message].filter(F.isTruthy).join(": ")+(r.length?":":"");return[Pf(n,t),...r].join(`
`)}function Ji(e,t,r={}){return jw(t,r).Check(e)}function Lw(e,t,r={},n){if(Ji(e,t,r))return;const i=Array.from(jw(t,r).Errors(e));if(i.length)throw new g9(i,n)}function jw(e,t){return e=b9(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function b9(e){return Fe(e)}function Uo({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:i}=xf(r),o=r.default??(i-n)/2+n,s=Fe(Ie.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:i}:{maximum:i},default:o})),a=yD(()=>Lw(o,s));if(a)throw kl(a,"Default range value is not within range.");return s}const qu="recordShape";function hc({keys:e,values:t,partial:r,additionalProperties:n}){w9();const i=Uw(e),o=Fe(t);return Fe(Ie.Unsafe({[N]:qu,keysShape:i,valuesShape:o,isPartial:!!r,additionalProperties:!!n,default:v9({isPartial:!!r,keysShape:i,valuesShape:o})}))}function w9(){Ei(qu)||km(qu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:Ji(i,e.keysShape),a=Ji(o,e.valuesShape);return s&&a}),n=e.isPartial?!0:!Kp(e.keysShape,t).length;return r&&n}),Bw(qu,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const i=ei(Object.entries(n),([u])=>u,(u,[l,c])=>!Ji(l,r.keysShape)||!Ji(c,r.valuesShape)),o=Kp(r.keysShape,n),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(F.isTruthy).join(`
`)})}function Kp(e,t){const r=vl(e).filter(n=>F.isPropertyKey(n));return r.length?r.filter(n=>!F.hasKey(t,n)):[]}function v9({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=vl(e),i=t.default;return Object.fromEntries(n.map(o=>[o,i]))}}function Uw(e){return Xm(e)?e:Qm(e)?Fe(e):F.isObject(e)?ps(e):F.isArray(e)&&F.isLengthAtLeast(e,1)?Ke(...e.map(t=>ce(t))):F.isPropertyKey(e)?Fe(e):Fe(Ie.Undefined())}function vl(e){const t=e.$_schema,r=t[N].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?wf(t.anyOf.flatMap(n=>vl(Fe(n)))):["undefined","number","string","symbol"].includes(r)?[]:vl(Uw(e.default))}function $9(e){return Fe(Ie.Unknown({default:e}))}const D9=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],eh=D9.reduce((e,t)=>(e[t]=t,e),{});qe.defaultZone.name;const _w=eh.UTC,x9=Fe({hour:Uo({...e0,default:e0.min}),minute:Uo({...t0,default:t0.min}),second:Uo({...r0,default:r0.min}),millisecond:Uo({...n0,default:n0.min}),timezone:ps(eh,_w)}),A9=Fe({year:2023,month:Uo({...i0,default:i0.min}),day:Uo({...o0,default:o0.min}),timezone:ps(eh,_w)});Fe(p9(A9,x9));Ce.Years+"",Ce.Months+"",Ce.Weeks+"",Ce.Days+"",Ce.Hours+"",Ce.Minutes+"",Ce.Seconds+"",Ce.Milliseconds+"";Fe(Ke({get:ce(K.Month),in:Ke(ce(K.Year))},{get:ce(K.Week),in:Ke(ce(K.Year),ce(K.Month))},{get:ce(K.Day),in:Ke(ce(K.Year),ce(K.Month),ce(K.Week))},{get:ce(K.Hour),in:Ke(ce(K.Year),ce(K.Month),ce(K.Week),ce(K.Day))},{get:ce(K.Minute),in:Ke(ce(K.Year),ce(K.Month),ce(K.Week),ce(K.Day),ce(K.Hour))},{get:ce(K.Second),in:Ke(ce(K.Year),ce(K.Month),ce(K.Week),ce(K.Day),ce(K.Hour),ce(K.Minute))},{get:ce(K.Millisecond),in:Ke(ce(K.Year),ce(K.Month),ce(K.Week),ce(K.Day),ce(K.Hour),ce(K.Minute),ce(K.Second))}));hc({keys:ps(Ce),values:-1,partial:!0});var Gp;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Gp||(Gp={}));var lf;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(lf||(lf={}));var Zp;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Zp||(Zp={}));const E9={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};_D(E9,Ur(lf));m9({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return C9(e)}});function C9(e){return J.fromISO(e).toUTC().toISO()===e}const k9=Fe({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:$9()});function nd(e){return Ji(e,k9,{allowExtraKeys:!0})}class Vw extends Fb{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||cm}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:F9}=Ax,Hp=e=>e,Jp=()=>document.createComment(""),Hs=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const o=n.insertBefore(Jp(),i),s=n.insertBefore(Jp(),i);r=new F9(o,s,e,e.options)}else{const o=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(o!==i||a){let u=r._$AA;for(;u!==o;){const l=Hp(u).nextSibling;Hp(n).insertBefore(u,i),u=l}}}return r},Wi=(e,t,r=e)=>(e._$AI(t,r),e),S9={},T9=(e,t=S9)=>e._$AH=t,M9=e=>e._$AH,id=e=>{e._$AR(),e._$AA.remove()};const th={ATTRIBUTE:1,CHILD:2,ELEMENT:6},ni=e=>(...t)=>({_$litDirective$:e,values:t});class ii{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const P9={attribute:!0,type:String,converter:ol,reflect:!1,hasChanged:Gf},N9=(e=P9,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function I9(e){return(t,r)=>typeof r=="object"?N9(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}const ir=ni(class extends ii{constructor(e){if(super(e),e.type!==th.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Cr}});const nt=e=>e??X;function O9(e,t,r){return e?t(e):r?.(e)}class B9 extends da{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function R9(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const u=o[a.index];u&&u.splice(0,0,...a.values)}),o.flat()}function cf(e){return F.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function rh(e){return F.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Ww(e){return ei(e,t=>{if(cf(t))return t.definition;if(rh(t))return t.tagInterpolationKey||t},F.isTruthy)}const zw=new WeakMap;function L9(e,t){const r=Ww(t);return qw(zw,[e,...r]).value?.template}function j9(e,t,r){const n=Ww(t);return Gw(zw,[e,...n],r)}function qw(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=Kw(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?qw(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function Kw(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function Gw(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=Kw(e,t,n);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Gw(u,t,r,n+1)}function Zw(e,t,r){const n=L9(e,t),i=n??r();if(!n){const a=j9(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=R9(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function Hw(e,t,r,n){const i=[],o=[],s=[],a=[];return e.forEach((l,c)=>{const d=i.length-1,f=i[d],m=c-1,b=t[m];n&&n(l);let w,x=[];if(typeof f=="string"&&(w=r(f,l,b),w)){i[d]=[f,w.replacement].join(""),s.push(m);const E=w.getExtraValues;x=E?E(b):[],x.length&&E?(i[d]+=" ",x.forEach((M,I)=>{I&&i.push(" ")}),a.push(M=>{const I=M[m],L=E(I);return{index:m,values:L}}),i.push(l)):i[d]+=l}w||i.push(l);const D=e.raw[c];w?(o[d]=[o[d],w.replacement,D].join(""),x.length&&x.forEach(()=>{o.push("")})):o.push(D)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function U9(...[e,t,r]){if(rh(r))return{replacement:r.tagName,getExtraValues:void 0}}function _9(e,t){return Hw(e,t,U9)}function A(e,...t){const r=Zw(e,t,()=>_9(e,t));return Vu(r.strings,...r.values)}const V9={allowPolymorphicState:!1,errorHandler:void 0};function Jw(e,t){const r=e.instanceState;Ge(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Ge(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class W9 extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function nh(){return e=>class extends W9{static type=e;_type=e;constructor(t){super(e,t)}}}function ht(){return nh()}function z9(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=nh()([e,n].join("-"));return r[n]=i,r},{}):{}}function q9(e){return e?nr(e,t=>t):{}}function Yw(e,t){t in e||I9()(e,t)}function K9(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Yp(e,t){const r=e;function n(s){t?K9(s,e,e.tagName):Yw(e,s)}function i(s,a){return n(a),r[a]}return new Proxy({},{get:i,set(s,a,u){n(a);const l=r[a];function c(f){s[a]=f,r[a]=f}const d=e.observablePropertyListenerMap[a];if(l!==u&&nd(l)&&d&&l.removeListener(d),nd(u))if(d)u.listen(!1,d);else{let f=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=f,u.listen(!1,f)}else nd(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function Xp(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function Qp(e,t,r){return r?Ol(r,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function G9({hostClassNames:e,cssVars:t}){return{hostClasses:nr(e,(r,n)=>({name:Pe(n),selector:Pe(`:host(.${n})`)})),cssVars:t}}function Z9({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&Ge(t).forEach(o=>{const s=t[o],a=r[o];typeof s=="function"&&(s({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function H9({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:i}){function o(a){Ge(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:r,slotNames:n,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Ao(...e){return Ct.isEmpty(e),t=>{const r=t;if(!F.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return J9({...r,options:{...r.options}})}}function J9(e){if(!F.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!F.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...V9,...e.options},r=z9(e.tagName,e.events),n=q9(e.hostClasses);e.hostClasses&&Xp(e.tagName,e.hostClasses),e.cssVars&&Xp(e.tagName,e.cssVars);const i=e.cssVars?Gr(e.cssVars):{},o=Qp(e.tagName,"slot",e.slotNames),s=Qp(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(G9({hostClassNames:n,cssVars:i})):e.styles||A``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}const c=class extends B9{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return H9({element:this,eventsMap:r,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(d);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");Ge(m).forEach(b=>{Yw(this,b),this.instanceState[b]=m[b]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(d);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return Z9({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=kl(d,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,t.errorHandler?.(f),St(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{F.hasKey(d,"destroy")&&F.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(d){Jw(this,d)}observablePropertyListenerMap={};instanceInputs=Yp(this,!1);instanceState=Yp(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:qD(e.tagName,{firstLetterCase:Yn.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class Y9 extends Lo{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function X9(e){return new Y9(e)}const eg=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},Q9=ni(class extends ii{constructor(e){if(super(e),e.type!==th.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],o=[];let s=0;for(const a of e)i[s]=n?n(a,s):s,o[s]=r(a,s),s++;return{values:o,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=M9(e),{values:o,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],u=[];let l,c,d=0,f=i.length-1,m=0,b=o.length-1;for(;d<=f&&m<=b;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(a[d]===s[m])u[m]=Wi(i[d],o[m]),d++,m++;else if(a[f]===s[b])u[b]=Wi(i[f],o[b]),f--,b--;else if(a[d]===s[b])u[b]=Wi(i[d],o[b]),Hs(e,u[b+1],i[d]),d++,b--;else if(a[f]===s[m])u[m]=Wi(i[f],o[m]),Hs(e,i[d],i[f]),f--,m++;else if(l===void 0&&(l=eg(s,m,b),c=eg(a,d,f)),l.has(a[d]))if(l.has(a[f])){const w=c.get(s[m]),x=w!==void 0?i[w]:null;if(x===null){const D=Hs(e,i[d]);Wi(D,o[m]),u[m]=D}else u[m]=Wi(x,o[m]),Hs(e,i[d],x),i[w]=null;m++}else id(i[f]),f--;else id(i[d]),d++;for(;m<=b;){const w=Hs(e,u[b+1]);Wi(w,o[m]),u[m++]=w}for(;d<=f;){const w=i[d++];w!==null&&id(w)}return this.ut=s,T9(e,u),Cr}}),eT=Q9;function su(e,t){return La(e,t),e.element}function tT(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function La(e,t){const r=tT(e),n=r?`: in ${r}`:"";if(e.type!==th.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function rT(e,t){return ni(class extends ii{element;constructor(r){super(r),this.element=dn.instanceOf(su(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),Cr}})}const Kn=rT("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const i=mo(r,"allAttributesApplied",()=>new Set);Ge(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===X?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function nT(e){const t=ni(class extends ii{element;constructor(r){super(r),this.element=su(r,e)}render(r){return this.element.setAttribute(e,r),Cr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function z(e,t){return iT(e,t)}const iT=ni(class extends ii{element;lastListenerMetaData;constructor(e){super(e),this.element=su(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Cr}});function oT(e){return z("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const tg="onDomCreated",uo=ni(class extends ii{element;constructor(e){super(e),La(e,tg)}update(e,[t]){La(e,tg);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),rg="onResize",Xw=ni(class extends ii{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&sT(this.element,this.callback,e)});callback;constructor(e){super(e),La(e,rg)}update(e,[t]){La(e,rg),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function sT(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function mr(e,t,r){return O9(e,()=>t,()=>r)}const{attributeDirective:aT}=nT("data-test-id"),Zn=aT;function Qw(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>i=>(t(i),Ao(...n)(r(i)))}function uT(e,t){return lT(void 0,e)}const lT=ni(class extends ii{element;constructor(e){super(e),this.element=su(e,"assign")}render(e,t){return Jw(this.element,t),Cr}}),cT={};function dT(e,t){return t.map((r,n)=>{const i=e[n],o=e[n+1];if(i&&o){const{shouldHaveTagNameHere:s}=e2(i,o);if(s&&F.isString(r))return{tagName:r,tagInterpolationKey:mo(cT,r,()=>({tagName:r}))}}return r})}function e2(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function fT(...[e,t,r]){const n=cf(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:o}=e2(e,t),s=rh(n);if(s&&o&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!o||!s?void 0:{replacement:n.tagName,getExtraValues(u){const l=cf(u)?u.inputs:void 0;return[i&&l?uT(l):void 0].filter(F.isTruthy)}}}function mT(e){}function hT(e){return Hw(e.strings,e.values,fT,mT)}function h(e,...t){const r=dT(e,t),n=yx(e,...r),i=Zw(e,r,()=>hT(n));return{...n,strings:i.strings,values:i.values}}function df(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],o=(t??[""]).map((s,a)=>{const u=pT(s,n[a]);return`${s}${u}`});return T1(o.join(""))}function pT(e,t){return t._$litType$!=null||t._$litDirective$!=null?df(t):Array.isArray(t)?t.map(n=>df(n)).join(""):e.endsWith("=")?`"${t}"`:t}function t2(e){return nr(e,(t,r)=>r instanceof ee?Pe(r.toString({format:"hex"})):t2(r))}const gT="dodgerblue";function ff(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function od({background:e,foreground:t}){return{background:e??new ee(ff(t)),foreground:t??new ee(ff(e))}}var $l;(function(e){e.Dark="dark",e.Light="light"})($l||($l={}));function yT(e){return e==="black"?"white":"black"}const bT={black:{foregroundFaint1:new ee("#ccc"),foregroundFaint2:new ee("#eee")},white:{foregroundFaint1:new ee("#ccc"),foregroundFaint2:new ee("#eee")}},wT={black:{backgroundFaint1:new ee("#666"),backgroundFaint2:new ee("#444")},white:{backgroundFaint1:new ee("#ccc"),backgroundFaint2:new ee("#fafafa")}};function ng({themeColor:e=gT,themeStyle:t=$l.Light}={}){const r=new ee(e),n=new ee(t===$l.Dark?"black":"white"),i=ff(n),o=new ee(i),s={nav:{hover:od({background:r.clone().set({"hsl.l":93})}),active:od({background:r.clone().set({"hsl.l":90})}),selected:od({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...wT[yT(i)],foreground:o,...bT[i]}};return t2(s)}var An;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(An||(An={}));async function mf(e=1){const t=new Yu;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function vT(e,t){return{element:e,children:r2(e)}}function r2(e,t,r){return $T(e).map(n=>{const i=r2(n);return{element:n,children:i}})}function $T(e){return[...e.children,...e.shadowRoot?.children??[]]}function sd(e){return e.matches(":focus")}function ih(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:ih(t)}function n2(e,t){if(t(e))return e;const r=ih(e);if(r)return n2(r,t)}async function DT(e){return xT(e,1)}async function xT(e,t){return new Promise(r=>{new IntersectionObserver((i,o)=>{Ct.isLengthAtLeast(i,1),o.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}function Yi(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,o=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return n}function AT(e){const t=ih(e);return t&&n2(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function ET({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=o.codePointAt(s);for(;a<r;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const CT=Qi(32);function Ku(e){return e.join(CT)}function i2(e){if(!e.length)return[];const t=Ku(e),r=i2(e.slice(0,-1));return[t,...r]}const kT=["error","errors"];function FT(e){return kT.includes(e)}function ST({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(s=>(n(s),Ku(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&FT(t),s=Ku(i.fullUrlBreadcrumbs);if(ET({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>F.isString(u)?u:df(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||r[s]){const u=i2(i.fullUrlBreadcrumbs);n(i),u.forEach(l=>r[l]=!0)}else r[s]=!1}),e.filter(i=>{const o=Ku(i.fullUrlBreadcrumbs),s=r[o];if(!F.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class oh extends Error{name="SpaRouterError"}class ig extends oh{name="GlobalUrlEventsConsolidationError"}class TT extends oh{name="SanitizationDepthMaxed"}Fe({paths:[""],search:It(Ke(void 0,hc({keys:"",values:[""]}))),hash:It(Ke(void 0,""))});const MT=Fe({basePath:It("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:It(1,{alsoUndefined:!0}),disableWarnings:It(!1,{alsoUndefined:!0}),isPaused:It(!1,{alsoUndefined:!0})}),ad="://";function sh(...e){const t=e.join("/"),[r,n=""]=t.includes(ad)?t.split(ad):["",t];let i=!1;const o=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(i)return s;const c=l[u+1];let d=a;const f=c?.startsWith("?"),m=!a.includes("?")&&f,b=c==="?";if(f||m){i=!0;let w=!1;const x=l.slice(u+2).reduce((D,E)=>(E.includes("#")&&(w=!0),w?D.concat(E):[D,E].join("&")),"");d=[a,c,b?Go({value:x,prefix:"&"}):x].join("")}return s.concat(d)},[]);return[r,r?ad:"",o.join("/")].join("")}var gs;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(gs||(gs={}));var ys;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(ys||(ys={}));const PT=Fe({encoding:It(Ke(void 0,ps(gs))),searchParamStrategy:It(Ke(void 0,ps(ys)))});function Tu(e,t){return e.map(r=>{if(r!=null)return Jo(String(r),t)}).filter(r=>r!=null)}function Jo(e,t){return t?.encoding===gs.Decode?decodeURIComponent(e):t?.encoding===gs.Encode?encodeURIComponent(e):e}const NT=Fe(hc({keys:"",values:[""]}));function IT(e,t,r){const n=r?.searchParamStrategy===ys.Clear?{}:nr(e,(s,a)=>pD(a)),i=nr(t,(s,a)=>{if(r?.searchParamStrategy===ys.Append){const u=n[s],l=F.isArray(u)?u:[u];if(a){const c=F.isArray(a)?a:[a];return Tu([...l,...c],r)}else return Tu(l,r)}else return F.isArray(a)?Tu(a,r):a?Tu([a],r):void 0});return Bl({...n,...i},(s,a)=>!!a)}function o2(e,t){return F.isString(e)&&!e.includes("?")?{}:(F.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=jD(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const u=s2({options:t,key:s,value:a}),l=mo(o,u.key,()=>[]);return a!=null&&l.push(u.value),o},{})}function OT(e){if(e!=null)return F.isArray(e)?[...e]:e===""?[]:[e]}function BT(e,t){const r=ei(Object.entries(e),([n,i])=>{const o=OT(i);return o?.length?o.map(s=>{const a=s2({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?hr({value:r.join("&"),prefix:"?"}):""}function s2({options:e,key:t,value:r}){return{key:Jo(t,e),value:Jo(String(r),e)}}function a2({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",r?r+"@":"",pc({hostname:t,port:i}),ah({hash:e,pathname:n,search:s})].join("")}function u2({pathname:e}){const t=Go({value:e,prefix:"/"});return t?t.split("/"):[]}function ah({hash:e,pathname:t,search:r}){return[hr({value:t,prefix:"/"}),r?hr({value:r,prefix:"?"}):"",e?hr({value:e,prefix:"#"}):""].join("")}function pc({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function l2({hostname:e,port:t,protocol:r}){return[r,pc({hostname:e,port:t})].filter(F.isTruthy).join("://")}function Yo(e,t){const r=F.isString(e)?Go({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?hr({value:Jo(n,t),prefix:"#"}):"",o=r.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?hr({value:Jo(s,t),prefix:"?"}):"",u=o.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),f=c.replace(/^[^@]*@/,""),m=d!==f,[b,...w]=m?d.split(":").reverse():[],x=w.toReversed().join("").replace(/[/:]/g,"")||"",D=b?.replace(/[/:]/g,"")||"",E=LD(f.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),M=E[0]?.endsWith("]")?"":E[1]===":"&&E[0]||"",L=f.replace(new RegExp(`:${M}($|/)`),"$1").replace(/\/.*/,""),se=f.replace(/^[^/]*(\/|$)/,"$1"),ye=Jo(se.replace(/^[^/]*(?:\/|$)/,"/"),t),Ae=pc({hostname:L,port:M}),je=l2({hostname:L,port:M,protocol:l}),Dt=a2({hash:i,hostname:L,password:D,pathname:ye,port:M,protocol:l,search:a,username:x}),Pt=o2(a),br=u2({pathname:ye});return{fullPath:ah({hash:i,pathname:ye,search:a}),hash:i,host:Ae,hostname:L,href:Dt,origin:je,password:D,pathname:ye,paths:br,port:M,protocol:l,search:a,searchParams:Pt,username:x}}Fe({hash:It(Ke(void 0,"")),search:It(Ke(void 0,"",hc({keys:"",values:Ke(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:It(Ke(void 0,"")),pathname:It(Ke(void 0,"")),paths:It(Ke(void 0,[""])),protocol:It(Ke(void 0,"")),username:It(Ke(void 0,"")),password:It(Ke(void 0,"")),port:It(Ke(void 0,"",-1))});function RT(e,t,r){const n=!!r,i=t==null||Ji(t,PT,{allowExtraKeys:!1}),o=i?Yo(""):F.instanceOf(e,URL)||F.isString(e)?Yo(e):e,s=i?e:t,a=F.isString(s)&&s.startsWith("."),u=F.isString(s)||F.instanceOf(s,URL)?Bl(Yo(s),(w,x)=>F.isTruthy(x)):s,l=n?r:i?t:void 0,c=nr(o,(w,x)=>{if(!F.hasKey(u,w))return x;const D=u[w];return F.isNumber(D)?String(D):F.isString(D)?w==="hash"&&D?hr({value:D,prefix:"#"}):w==="pathname"?hr({value:D,prefix:"/"}):D:x});F.hasKey(u,"paths")&&u.paths&&(c.pathname=sh(a?o.pathname:"",...u.paths));const d=F.isString(u.search)?o2(hr({value:u.search,prefix:"?"})):bD(u.search||{}),f=IT(c.searchParams,d,{...l,encoding:gs.None}),m=BT(f,l);return{...c,searchParams:f,search:m,paths:u2(c),fullPath:ah(c),host:pc(c),origin:l2(c),href:a2({...c,search:m})}}const LT=Fe({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:NT,hash:"",fullPath:"/",href:"/"});({...LT.default});const jT=0;function c2(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==jT)}const gc="locationchange",Wn=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const og=Wn?.pushState;function sg(...e){if(!og)return;const t=og.apply(Wn,e);return globalThis.dispatchEvent(new Event(gc)),t}const ag=Wn?.replaceState;function ug(...e){if(!ag)return;const t=ag.apply(Wn,e);return globalThis.dispatchEvent(new Event(gc)),t}function UT(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Wn)){{if(Wn.pushState===sg)throw new ig("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Wn.replaceState===ug)throw new ig("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Wn.pushState=sg,Wn.replaceState=ug,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(gc))})}}function Mu(e,t){const r=Yo(e),n=Go({value:Go({value:r.pathname,prefix:hr({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],o=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?Go({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class uh{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Lw(t,MT),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new Vw({defaultValue:r,equalityCheck:()=>!1}),UT(),this.removeGlobalListener=Uf(globalThis,gc,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new TT("Looping route sanitization detected; aborting window URL change listener.");const n=Mu(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);F.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:sh(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Mu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Mu(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),o=this.routeIncludesBasePath(Mu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return RT(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?hr({value:o.hash,prefix:"#"}):""},{searchParamStrategy:ys.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=Yo(n);return this.params.isPaused||!r.force&&F.jsonEquals(Yo(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return c2(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new oh(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function _T(e){return new uh({basePath:e,sanitizeRoute(t){return{paths:VT(t.paths),hash:void 0,search:void 0}}})}function VT(e){const t=e[0];if(F.isEnumValue(t,cr)){if(t===cr.Book)return[cr.Book,...e.slice(1)];if(t===cr.Search)return e[1]?[t,e[1]]:[cr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return ns.paths}const Dl=nh()("element-book-change-route"),lg="vira-",We=Qw({assertInputs:e=>{if(!e.tagName.startsWith(lg))throw new Error(`Tag name should start with '${lg}' but got '${e.tagName}'`)}});var be=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))(be||{});function ud(e,t){if(e)return t?Bf({value:e,suffix:"*"}):e}function WT(e){return Bd(e).every(t=>t.isHidden||!t.isRequired?!0:F.isString(t.value)?!!t.value:t.value!=null)}const v=Gr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function ie({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function zT(e){try{if(!e)throw new Error("invalid empty color");return new ee(e)}catch{throw new Error(`Invalid color: ${g(e)}`)}}function cg(e,t){const r=Ge(t).map(n=>{const i=t[n],o=zT(i);return`${v[n].name}: ${o.toString()};`}).join(" ");return ie({name:e.name,svgTemplate:h`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const qT=ie({name:"Bell24Icon",svgTemplate:h`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),KT=ie({name:"Chat24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),lh=ie({name:"Check24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),GT=ie({name:"ChevronDown24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${v["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),ch=ie({name:"ChevronUp24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${v["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),d2=ie({name:"CloseX24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ZT=ie({name:"Commit24Icon",svgTemplate:h`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),HT=ie({name:"Copy24Icon",svgTemplate:h`
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
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),JT=ie({name:"Document24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),YT=ie({name:"DocumentSearch24Icon",svgTemplate:h`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),XT=ie({name:"DoubleChevron24Icon",svgTemplate:h`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),f2=ie({name:"Element16Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),qr=ie({name:"Element24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),QT=ie({name:"ExternalLink24Icon",svgTemplate:h`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),m2=ie({name:"EyeClosed24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${v["vira-icon-fill-color"].value}
            stroke=${v["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),h2=ie({name:"EyeOpen24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${v["vira-icon-fill-color"].value}
            stroke=${v["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),eM=ie({name:"Filter24Icon",svgTemplate:h`
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
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),tM=ie({name:"Link24Icon",svgTemplate:h`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />

            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),p2=ie({name:"Loader24Icon",svgTemplate:h`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Hn=Gr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),rM=A`
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
`,lo=ie({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            ${rM}
        </style>
        ${p2.svgTemplate}
    `}),nM=ie({name:"Lock24Icon",svgTemplate:h`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),ya=ie({name:"Options24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),iM=ie({name:"Pencil24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),oM=ie({name:"Shield24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),sM=ie({name:"SortAscending24Icon",svgTemplate:h`
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
                fill=${v["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),aM=ie({name:"SortDescending24Icon",svgTemplate:h`
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
                fill=${v["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),uM=ie({name:"SpeakerLoud24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),lM=ie({name:"SpeakerMedium24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),cM=ie({name:"SpeakerMuted24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),dM=ie({name:"SpeakerQuiet24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),fM=ie({name:"Star24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),xl=ie({name:"StatusFailure24Icon",svgTemplate:h`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),mM=ie({name:"StatusInProgress24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),hM=ie({name:"StatusSuccess24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),pM=ie({name:"StatusUnknown24Icon",svgTemplate:h`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),gM=ie({name:"StatusWarning24Icon",svgTemplate:h`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),yM=ie({name:"Upload24Icon",svgTemplate:h`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),g2=ie({name:"X24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),hf={Bell24Icon:qT,Chat24Icon:KT,Check24Icon:lh,ChevronDown24Icon:GT,ChevronUp24Icon:ch,CloseX24Icon:d2,Commit24Icon:ZT,Copy24Icon:HT,Document24Icon:JT,DocumentSearch24Icon:YT,DoubleChevron24Icon:XT,Element16Icon:f2,Element24Icon:qr,ExternalLink24Icon:QT,EyeClosed24Icon:m2,EyeOpen24Icon:h2,Filter24Icon:eM,Link24Icon:tM,Loader24Icon:p2,LoaderAnimated24Icon:lo,Lock24Icon:nM,Options24Icon:ya,Pencil24Icon:iM,Shield24Icon:oM,SortAscending24Icon:sM,SortDescending24Icon:aM,SpeakerLoud24Icon:uM,SpeakerMedium24Icon:lM,SpeakerMuted24Icon:cM,SpeakerQuiet24Icon:dM,Star24Icon:fM,StatusFailure24Icon:xl,StatusInProgress24Icon:mM,StatusSuccess24Icon:hM,StatusUnknown24Icon:pM,StatusWarning24Icon:gM,Upload24Icon:yM,X24Icon:g2},Kr=Gr({"vira-form-input-radius":"8px"}),co=A`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,bs=Gr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":A`calc(${Kr["vira-form-input-radius"].value} + 2px)`});function au({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const i=Pe(Aa(r+t+e)),o=A`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${bs["vira-focus-outline-color"].value};
        border-radius: ${bs["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?o:A`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const te=Gr({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),V=We()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>A`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),ve=We()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal},styles:({hostClasses:e})=>A`
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
                font-weight: ${te["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${te["vira-form-selection-hover-background-color"].value};
            }
        }

        ${V} {
            ${v["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${te["vira-form-border-color"].value};
            color: ${te["vira-form-foreground-color"].value};
            border-radius: ${Kr["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${au({elementBorderSize:1})}

            &.checked {
                & ${V} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${te["vira-form-error-foreground-color"].value};
            }

            &:active {
                background-color: ${te["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${co};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:ht()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const i=e.label?h`
                  <span
                      class="label-text"
                      ${Kn(e.attributePassthrough?.text)}
                      style=${nt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:X;return h`
            <label
                class=${ir({disabled:!!e.disabled})}
                ${Kn(e.attributePassthrough?.label)}
                style=${nt(e.stylePassthrough?.label)}
                ${z("mousedown",n)}
            >
                ${i}
                <span
                    class="custom-checkbox ${ir({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${nt(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Kn(e.attributePassthrough?.["custom-checkbox"])}
                    style=${nt(e.stylePassthrough?.["custom-checkbox"])}
                    ${oT(n)}
                >
                    <${V.assign({icon:lh,fitContainer:!0})}
                        ${Kn(e.attributePassthrough?.[V.tagName])}
                        style=${nt(e.stylePassthrough?.[V.tagName])}
                    ></${V}>
                </span>
            </label>
        `}}),uu=A`
    padding: 0;
    margin: 0;
`,_r=A`
    ${uu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,ld=Gr({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Xo={menuShadow:A`
        filter: drop-shadow(0px 5px 5px ${ld["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:A`
        filter: drop-shadow(0px -5px 5px ${ld["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:A`
        box-shadow: 0 5px 15px ${ld["modal-shadow-color"].value};
    `},ws=A`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,nn=Gr({"vira-white":"#ffffff","vira-black":"#000000","vira-teal-10":"#c9f6ee","vira-teal-20":"#89ebda","vira-teal-30":"#3fddc3","vira-teal-40":"#23c9ad","vira-teal-50":"#1fb59b","vira-teal-60":"#1a9681","vira-teal-70":"#147464","vira-teal-80":"#0d4c42","vira-teal-90":"#09362f","vira-blue-10":"#ddf0f9","vira-blue-20":"#b9e0f3","vira-blue-30":"#95d0ec","vira-blue-40":"#6dbee5","vira-blue-50":"#44acde","vira-blue-60":"#228ec4","vira-blue-70":"#1a6e98","vira-blue-80":"#114864","vira-blue-90":"#092736","vira-purple-10":"#f0eafb","vira-purple-20":"#e0d4f8","vira-purple-30":"#d1bff4","vira-purple-40":"#c0a9f0","vira-purple-50":"#b093ec","vira-purple-60":"#9770e6","vira-purple-70":"#7745de","vira-purple-80":"#4c1ea9","vira-purple-90":"#31136d","vira-pink-10":"#fbe7f9","vira-pink-20":"#f6cdf3","vira-pink-30":"#f2b3ed","vira-pink-40":"#ed96e6","vira-pink-50":"#e778df","vira-pink-60":"#dd3bd0","vira-pink-70":"#b01fa4","vira-pink-80":"#74146c","vira-pink-90":"#360933","vira-red-10":"#fbe8ec","vira-red-20":"#f7d0d7","vira-red-30":"#f3b8c2","vira-red-40":"#ee9eac","vira-red-50":"#e98495","vira-red-60":"#e1546b","vira-red-70":"#c1223c","vira-red-80":"#7f1628","vira-red-90":"#6d1322","vira-orange-10":"#f8ebd9","vira-orange-20":"#f1d6af","vira-orange-30":"#eac186","vira-orange-40":"#e2aa5c","vira-orange-50":"#da932d","vira-orange-60":"#b77920","vira-orange-70":"#8e5e19","vira-orange-80":"#5e3d10","vira-orange-90":"#362409","vira-green-10":"#e2f4bd","vira-green-20":"#c1e776","vira-green-30":"#9fd927","vira-green-40":"#8fc422","vira-green-50":"#80b11f","vira-green-60":"#6a931a","vira-green-70":"#527214","vira-green-80":"#364b0d","vira-green-90":"#273609","vira-yellow-10":"#f3f199","vira-yellow-20":"#e4e01a","vira-yellow-30":"#d0cd18","vira-yellow-40":"#bdb915","vira-yellow-50":"#aaa613","vira-yellow-60":"#8d8a10","vira-yellow-70":"#6d6b0c","vira-yellow-80":"#484608","vira-yellow-90":"#393807","vira-grey-10":"#ededed","vira-grey-20":"#dadada","vira-grey-30":"#c7c7c7","vira-grey-40":"#b4b4b4","vira-grey-50":"#a2a2a2","vira-grey-60":"#878787","vira-grey-70":"#686868","vira-grey-80":"#444444","vira-grey-90":"#202020"});function dg(e){return F.isPrimitive(e)||"_$cssResult$"in e?String(e):e.default}function Ln(e,t,r,n){if(F.isPrimitive(t)||"_$cssResult$"in t)return t;if("refDefaultBackground"in t)return"--var(default-bg)";if("refDefaultForeground"in t)return"--var(default-fg)";if("refBackground"in t||"refForeground"in t){const i=F.hasKey(t,"refBackground")?"refBackground":F.hasKey(t,"refForeground")?"refForeground":void 0,o=i&&F.hasKey(t,i)?t[i]:void 0,s=i==="refBackground"?"background":"foreground",a=o&&n[o];if(!a)throw new Error(`Color theme ${i} reference '${o}' does not exist. (Referenced from '${e}'.)`);const u=a[s]||(s==="foreground"?Ln("default-fg",r.foreground,r,n):Ln("default-bg",r.background,r,n));return`var(--${o}-${s==="foreground"?"fg":"bg"}, ${Ln(o,u,r,n)})`}else return t.value}const Js="theme-default";function bM(e,t){try{if(Js in t)throw new Error(`Cannot define theme color by name '${Js}', it is used internally.`);const r=Gr({"default-fg":Ln("default-fg",e.foreground,e,t),"default-bg":Ln("default-bg",e.background,e,t),"default-inverse-fg":Ln("default-inverse-fg",e.background,e,t),"default-inverse-bg":Ln("default-inverse-bg",e.foreground,e,t)}),n=no(t).reduce((l,[c,d])=>{const f=fg(c);return l[f.foreground]=d.foreground?Ln([c,"foreground"].join(" "),d.foreground,e,t):`var(${r["default-fg"].name}, ${r["default-fg"].default})`,l[f.background]=d.background?Ln([c,"background"].join(" "),d.background,e,t):`var(${r["default-bg"].name}, ${r["default-bg"].default})`,l[f.foregroundInverse]=`var(--${f.background}, ${l[f.background]})`,l[f.backgroundInverse]=`var(--${f.foreground}, ${l[f.foreground]})`,l},{}),i=Gr(n),o={},s={};no(t).forEach(([l,c])=>{Ct.isString(l);const d=fg(l),f=i[d.foreground],m=i[d.background],b=i[d.foregroundInverse],w=i[d.backgroundInverse];Ct.isDefined(f),Ct.isDefined(m),Ct.isDefined(b),Ct.isDefined(w),o[l]={foreground:f,background:m,init:c,name:l},s[l]={foreground:b,background:w,init:c,name:l}});const a={foreground:r["default-fg"],background:r["default-bg"],init:e,name:Js},u={...a,foreground:r["default-inverse-fg"],background:r["default-inverse-bg"]};return{colors:{[Js]:a,...o},inverse:{[Js]:u,...s},init:{colors:t,default:e}}}catch(r){throw globalThis.setTimeout(()=>Rf.error(r)),r}}function fg(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}function wM(e,t){const r=y2(e.init.default,1,void 0,t),n=$M(e.init.colors,1,e.init.default,t);return`defineColorTheme(
${r},
${n},
)`}function Et(e){return"    ".repeat(e)}function Pu(e,t){return typeof e!=typeof t?!1:typeof e=="string"||typeof e=="number"?e===t:"_$cssResult$"in e&&"_$cssResult$"in t?e.cssText===t.cssText:JSON.stringify(e)===JSON.stringify(t)}function vM(e){const t=e.match(/^var\(--([^,)]+)/);return t?t[1]:void 0}function mg(e,t,r){if(typeof e=="string")return`'${e}'`;if(typeof e=="number")return String(e);if("_$cssResult$"in e){const n=String(e);{const i=vM(n);if(i)return`${r}['${i}']`}return`css\`${n}\``}else if("refBackground"in e||"refForeground"in e||"refDefaultBackground"in e||"refDefaultForeground"in e){const n=[];return"refForeground"in e&&n.push(`${Et(t+1)}refForeground: '${e.refForeground}',`),"refBackground"in e&&n.push(`${Et(t+1)}refBackground: '${e.refBackground}',`),"refDefaultForeground"in e&&n.push(`${Et(t+1)}refDefaultForeground: true,`),"refDefaultBackground"in e&&n.push(`${Et(t+1)}refDefaultBackground: true,`),`{
${n.join(`
`)}
${Et(t)}}`}else return`'${e.default}'`}function y2(e,t,r,n){const i=[];return"foreground"in e&&(!r||!Pu(e.foreground,r.foreground))&&(r&&Pu(e.foreground,r.background)?i.push(`${Et(t+1)}foreground: {
${Et(t+2)}refDefaultBackground: true,
${Et(t+1)}},`):i.push(`${Et(t+1)}foreground: ${mg(e.foreground,t+1,n)},`)),"background"in e&&(!r||!Pu(e.background,r.background))&&(r&&Pu(e.background,r.foreground)?i.push(`${Et(t+1)}background: {
${Et(t+2)}refDefaultForeground: true,
${Et(t+1)}},`):i.push(`${Et(t+1)}background: ${mg(e.background,t+1,n)},`)),`${Et(t)}{
${i.join(`
`)}
${Et(t)}}`}function $M(e,t,r,n){const i=no(e).map(([o,s])=>`${Et(t+1)}'${o}': ${y2(s,t+1,r,n).trimStart()},`);return`${Et(t)}{
${i.join(`
`)}
${Et(t)}}`}function pf({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>pf({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function DM({value:e,allowed:t,blocked:r}){const n=t?pf({input:e,matcher:t}):!0,i=r?pf({input:e,matcher:r}):!1;return n&&!i}function gf(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(DM({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function xM({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const o=Yi(r,HTMLInputElement),s=F.hasKey(r,"data")&&x1.isString(r.data)||"";if(s){const{blocked:u}=gf({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=gf({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var Qo=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Qo||{});const ut=We()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>A`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${te["vira-form-foreground-color"].value};
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
                    font-weight: ${te["vira-form-label-font-weight"].value};
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
                ${_r};
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
                ${_r};
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
                border-radius: ${Kr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${te["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${_r};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Kr["vira-form-input-radius"].value};
                background-color: ${te["vira-form-background-color"].value};
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
                ${_r};
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
                    ${au({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${te["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${te["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${te["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${ws};
            }

            button {
                ${_r};
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
                    border-color: ${te["vira-form-error-foreground-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${co};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:ht(),inputBlocked:ht()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Qi(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i,host:o})=>{const{filtered:s}=gf({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?h`
                  <${V.assign({icon:e.icon})} class="left-side-icon"></${V}>
              `:X,u=e.fitText?A`
                  width: ${r.forcedInputWidth}px;
              `:X,l=z("mousedown",f=>{const m=Yi(f,HTMLElement,{useOriginalTarget:!0}),b=dn.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);m!==b&&(f.preventDefault(),b.focus())}),c=e.disableBrowserHelps||e.type==="password",d=h`
            <span class="input-wrapper" ${e.label?X:l}>
                ${a}
                ${mr(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${Xw(({contentRect:f})=>{n({forcedInputWidth:f.width})})}
                        >
                            <pre>${s||e.placeholder||X}</pre>
                        </span>
                    `)}

                <input
                    id=${nt(e.label?r.randomId:void 0)}
                    aria-label=${nt(e.label||void 0)}
                    autofocus=${!1}
                    type=${AM(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${nt(c?"off":void 0)}
                    autocorrect=${nt(c?"off":void 0)}
                    autocapitalize=${nt(c?"off":void 0)}
                    spellcheck=${nt(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${z("input",f=>{xM({inputs:e,previousValue:s,event:f,inputBlockedCallback(m){t(new i.inputBlocked(m))},newValueCallback(m){t(new i.valueChange(m))}})})}
                    placeholder=${nt(e.placeholder||void 0)}
                    ${Kn(e.attributePassthrough)}
                />

                ${mr(!!(e.showClearButton&&e.value),h`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${z("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${z("click",()=>{e.disabled||t(new i.valueChange(""))})}
                        >
                            <${V.assign({icon:d2})}></${V}>
                        </button>
                    `)}
                ${mr(e.type==="password",h`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${z("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${z("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${V.assign({icon:r.showPassword?h2:m2})}></${V}>
                        </button>
                    `)}
                ${mr(!!e.suffix,h`
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
            `:d}});function AM(e,t){return e==="password"&&t?"text":e||"text"}const it=We()({tagName:"vira-select",state(){return{randomId:Qi(32)}},events:{valueChange:ht()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${te["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${_r};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${Kr["vira-form-input-radius"].value};
            background-color: ${te["vira-form-background-color"].value};
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
                    ${au({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${te["vira-form-placeholder-color"].value};
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
                border-radius: ${Kr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${te["vira-form-border-color"].value};
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
                font-weight: ${te["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${co}
            }
            ${V} {
                ${co}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${te["vira-form-error-foreground-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const i=e.value||void 0,o=e.placeholder||i==null?h`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:X,s=h`
            <span class="select-wrapper">
                <select
                    .value=${nt(i)}
                    class=${ir({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${nt(e.label?t.randomId:void 0)}
                    aria-label=${nt(e.label||void 0)}
                    aria-disabled=${nt(e.disabled?"true":void 0)}
                    ${z("input",a=>{const u=Yi(a,HTMLSelectElement),l=u.value;u.value!==i&&(u.selectedIndex=e.options.findIndex(c=>c.value===i)),r(new n.valueChange(l))})}
                    ${Kn(e.attributePassthrough?.select)}
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

                <${V.assign({icon:e.icon})} class="input-icon"></${V}>
                <${V.assign({icon:ch})} class="trigger-icon"></${V}>
            </span>
        `;return e.label?h`
                <label for=${t.randomId} ${Kn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),ar=We()({tagName:"vira-form",events:{valueChange:ht(),validChange:ht()},styles:A`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const o=WT(e.fields);o!==n.lastIsValid&&(i({lastIsValid:o}),t(new r.validChange({allFieldsAreValid:o})));const s=no(e.fields).map(([a,u])=>u.isHidden?X:u.type===be.Checkbox?h`
                        <${ve.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:ud(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Zn(u.testId):X}
                            ${z(ve.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${ve}>
                    `:u.type===be.Select?h`
                        <${it.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:ud(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Zn(u.testId):X}
                            ${z(it.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${it}>
                    `:h`
                        <${ut.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:ud(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===be.NewPassword?{autocomplete:"new-password"}:u.type===be.ExistingPassword?{autocomplete:"password"}:u.type===be.Email?{autocomplete:"email"}:{},type:[be.NewPassword,be.ExistingPassword,be.PlainPassword].includes(u.type)?Qo.Password:u.type===be.Email?Qo.Email:Qo.Default})}
                            ${u.testId?Zn(u.testId):X}
                            ${z(ut.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${ut}>
                    `);return h`
            <form ${z("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function EM(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${GD(r)}`)}function CM(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function hg({open:e,callback:t,popUpManager:r,host:n,options:i}){if(e){const o=r.showPopUp(n,i);t?.(o)}else r.removePopUp(),t?.(void 0)}const $r=We()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>A`
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
    `,render({inputs:e}){return h`
            <div class="item">
                <${V.assign({icon:lh})}></${V}>
                <slot>${e.label}</slot>
            </div>
        `}});function kM(e,t){return e>t}function FM(e,t){return e<t}function ja(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var En;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(En||(En={}));var De;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(De||(De={}));function yc(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const i=n[t.x];if(i)if(i.navEntry.navParams.group){const o=yc(i.children);o&&(r=o.node)}else i.navEntry.navParams.disabled||(r=i)}}if(r)return{node:r,coords:t}}function pg(e,t,r,n){if(!t){const u=yc(e.children);return u?(ja(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:De.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:De.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=b2(t.position,r),a=n?!0:!o;return i&&a?(ja(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:r,navAction:De.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:r,navAction:De.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:De.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:De.Navigate}}function b2(e,t){let r=!1,n,i=1;const o=Date.now();for(;!r||!n;)if(n=SM(e,t,i),r=!n.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return Rf.warning("Failed to find next non-disabled node."),n;return n}function SM(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Ct.isDefined(n,"missing parent");const i=dn.isDefined(n.children[e.nodeCoords.y]),o=n.children.length>1&&(t===En.Down||t===En.Up),s=t===En.Down||t===En.Right?r:-1*r,a=s<0?kM:FM,u=o?$0(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=dn.isDefined(n.children[u]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:$0(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),d=n.children[u]?.[c],f=o?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:f,coords:{x:c,y:u}}}function TM(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:De.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=b2(n,t),a=i?.navEntry.navParams.group?yc(i.children):{node:i,coords:s},u=r?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:De.Pibling}:u?(ja(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:De.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:De.Pibling}}var Xt;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Xt||(Xt={}));const an={name:"data-nav",js(e){return e?`[${an.name}*="${e}"]`:`[${an.name}]`},css({baseSelector:e="",navValue:t}={}){return A`
            ${Pe(e)}${Pe(an.js(t))}
        `}},dh="navEntry";function w2(e){return dh in e}function v2(e){if(w2(e)){const t=e[dh];return dn.instanceOf(t,$2,"Invalid nav entry")}else return}function MM(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Xt.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class $2{element;navParams;navTreeNode;navValue;eventListener=MM(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Ct.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(an.name,""),sd(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,i=t===(n===Xt.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Xt.Focused),sd(this.element)||this.element.focus()):(this.removeNavValue(Xt.Focused),sd(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,De.Focus)}activate(t){const r=this.navValue,n=t===(r===Xt.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(Xt.Active):this.setNavValue(Xt.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,De.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(an.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(an.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function D2(e,t){Object.entries(t).forEach(([r,n])=>{F.isBoolean(n)&&n?e.setAttribute(r,""):F.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const PM=ni(class extends ii{element;lastKey;constructor(e){super(e),this.element=su(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Cr}});function NM(e){return"group"in e?Xt.Group:e.disabled?Xt.Disabled:""}function gg(e,t={}){return PM(g(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Ct.instanceOf(r,HTMLElement);const i={[an.name]:NM(t),tabindex:n?0:-1};D2(r,i);const o=v2(r)||new $2(r,e,t);w2(r)?(o.navParams=t,o.navController=e):r[dh]=o,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function IM(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:De.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:De.Enter};const r=t.position.node.children[0]?.[0];return r?(ja(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:De.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:De.Enter}}function OM(e,t){return x2([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function x2(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:n},node:s};if(r(a))return a;const u=x2(e.concat(a),s.children,r);if(u)return u}}}function A2(e,t){const r=OM(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function BM(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:De.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:De.Exit};const{nodeCoords:n}=A2(e,r.navEntry);return ja(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:De.Exit,coords:n}}class RM extends bn()("nav-exit"){}class E2 extends bn()("nav-activate"){}class LM extends bn()("nav-focus"){}class jM extends bn()("nav-enter"){}class UM extends bn()("nav-navigate"){}class _M extends bn()("nav-navigate-pibling"){}function VM(e){return{root:!0,children:C2(e)?.children||[]}}function C2(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=v2(t),n=WM(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function WM(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const i=n.navEntry.navParams.x,o=n.navEntry.navParams.y||0,s=mo(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(n):s.withX.push({x:i,node:n})}return e.children.forEach(n=>{const i=C2(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,o)=>i.x-o.x),n.withX.forEach(({x:i,node:o})=>{n.noX.splice(i,0,o)}),n.noX)).filter(F.isTruthy)}class k2 extends jf{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){yc(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=A2(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords};return r&&(n===De.Activate?this.dispatch(new E2({detail:o})):n===De.Focus&&this.dispatch(new LM({detail:o}))),o}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:De.Navigate,reason:"NavController is locked."};const n=pg(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new UM({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:De.Enter,reason:"NavController is locked."};const r=IM(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new jM({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:De.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:De.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Ct.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:De.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===De.Activate&&this.currentNavEntry.entry.focus(!0);const t=BM(this.getNavTree(),this.currentNavEntry);return this.dispatch(new RM({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:De.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),o={...this.currentNavEntry?TM(this.currentNavEntry,r,t):pg(n,void 0,r,t),navAction:De.Pibling};return this.dispatch(new _M({detail:o})),o}buildNavTree(){const t=vT(this.rootElement),r=VM(t);return this.cachedNavTree=r,r}}const _o=We()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>A`
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
                    ${Kn(e.attributePassthrough?.a)}
                    style=${nt(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return h`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${Kn(e.attributePassthrough?.a)}
                    style=${nt(e.stylePassthrough?.a)}
                    ${z("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),yg={item:"menu-item"},ba=We()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new k2(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>A`
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
            background-color: ${te["vira-form-background-color"].value};
            color: ${te["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${_r};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${an.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Xt.Focused})}, ${an.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Xt.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${te["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${an.css({baseSelector:".menu-item:not(.disabled)",navValue:Xt.Focused})},
                ${an.css({baseSelector:".menu-item:not(.disabled)",navValue:Xt.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${te["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${$r} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${co};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){EM(e.items);const r=e.items.map(n=>{const i=!!e.selected?.includes(n.id),o=F.isString(n.label)?h`
                      <${$r.assign({label:n.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${$r}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&i;return n.route?h`
                    <${_o.assign({route:n.route})}
                        class="menu-item ${ir({disabled:!!n.disabled,selected:i})}"
                        ${Zn(yg.item)}
                        title=${nt(n.titleText||void 0)}
                        role="option"
                        ${gg(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${_o}>
                `:h`
                    <button
                        class="menu-item ${ir({disabled:!!n.disabled,selected:i})}"
                        ${Zn(yg.item)}
                        title=${nt(n.titleText||void 0)}
                        role="option"
                        ${gg(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return h`
            ${r}
        `}});var fh=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(fh||{}),Al=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Al||{});const wa=We()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${Kr["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${te["vira-form-background-color"].value};
            border: 1px solid ${te["vira-form-border-color"].value};
            color: ${te["vira-form-foreground-color"].value};
            ${Xo.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${Xo.menuShadowReversed}
            border-radius: ${Kr["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${Kr["vira-form-input-radius"].value};
        }
    `,render(){return h`
            <slot></slot>
        `}}),Nu=globalThis.document;class zM extends Vw{constructor(){if(super({defaultValue:!!Nu?.hidden,equalityCheck:F.strictEquals}),!Nu)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,Nu));const t=r=>this.updateVisibility(r,Nu);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=KM.includes(t.type),i=qM.includes(t.type),o=n?!0:i?!1:r.hasFocus()||!r.hidden;this.setValue(o)}}const qM=["blur","focusout","pagehide"],KM=["focus","focusin","pageshow"],GM=new zM;function ZM(e,t){return GM.listen(e,t)}const bg={top:0,left:0,right:0,bottom:0};class F2 extends Lf("hide-pop-up"){}class S2 extends bn()("nav-select"){}class HM{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new jf;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let r=!1;const n=new ResizeObserver(()=>{r?this.removePopUp():r=!0});n.observe(t),this.cleanupCallbacks=[()=>{n.disconnect()},ZM(!1,i=>{i||this.removePopUp()}),this.navController.listen(E2,i=>{i.detail.success&&(this.listenTarget.dispatch(new S2({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),Rd("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Rd("keydown",i=>{const o=i.code;if(o==="Escape")this.removePopUp();else if(this.options.supportNavigation){const s=i.composedPath()[0];if(s instanceof HTMLInputElement&&(s.type==="text"||s.type==="search"||s.type==="email"||s.type==="url"||s.type==="tel"||s.type==="password"||s.type==="number")||s instanceof HTMLTextAreaElement||s instanceof HTMLElement&&s.isContentEditable)return;o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:En.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:En.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:En.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:En.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new F2)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=AT(t);Ct.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=nr(bg,b=>o[b]),d=nr(bg,b=>{const w=l[b],x=c[b];return Math.abs(w-x)}),f=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace,m=d.left>d.right+n.horizontalDiffThreshold&&d.right<n.minRightSpace;return this.attachGlobalListeners(i),{popDown:!f,popRight:!m,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var vi=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(vi||{});const pe=We()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new HM(new k2(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${_r};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${au({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${ws};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${co}
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
    `,events:{navSelect:ht(),openChange:ht(),init:ht()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:o}){e.popUpManager.listen(F2,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Ct.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(S2,s=>{n.keepOpenAfterInteraction||hg({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:o,slotNames:s}){function a({emitEvent:b,open:w},x){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&x){const D=o.shadowRoot.querySelector(".dropdown-trigger");if(D&&!x.composedPath().includes(D))return}hg({open:w,callback(D){i({showPopUpResult:D}),b&&e(new t.openChange(D))},host:o,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,l=u==="right"&&r.showPopUpResult?n.ignoreMaxWidth?A`
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
                    `:void 0;function m(b){a({emitEvent:!0,open:!r.showPopUpResult},b)}return h`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${ir({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${z("keydown",b=>{!r.showPopUpResult&&b.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},b)})}
                ${z("click",b=>{b.detail===0&&m(b)})}
                ${z("mousedown",b=>{b.button===0&&m(b)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${ir({"right-aligned":u==="right"})}"
                    style=${f}
                >
                    ${mr(!!r.showPopUpResult,h`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),JM={menu:"menu-trigger-menu"},gi=We()({tagName:"vira-menu-trigger",styles:A`
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
    `,events:{itemActivate:ht(),openChange:ht()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:i}){return h`
            <${pe.assign({...e,keepOpenAfterInteraction:!0,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||vi.Left})}
                class=${ir({open:!!t.showPopUpResult})}
                ${z(pe.events.init,o=>{r({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${z(pe.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&n(new i.openChange(o.detail)),r({showPopUpResult:o.detail})})}
                ${z(pe.events.navSelect,o=>{const s=o.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new i.itemActivate(CM(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${pe.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?h`
                          <${wa.assign({direction:t.showPopUpResult.popDown?Al.Downwards:Al.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${pe.slotNames.popUp}
                              class=${ir({"full-width-menu":e.horizontalAnchor===vi.Both})}
                          >
                              <${ba.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Zn(JM.menu)}
                              ></${ba}>
                          </${wa}>
                      `:X}
            </${pe}>
        `}}),Ye=We()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>A`
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
        `}});var Vo=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Vo||{});const he=We()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ws};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${bs["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${co};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${_r};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Kr["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Hn["vira-interaction-animation-duration"].value},
                background-color
                    ${Hn["vira-interaction-animation-duration"].value},
                border-color ${Hn["vira-interaction-animation-duration"].value};

            ${au({elementBorderSize:2})}
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
    `,render:({inputs:e})=>{const t=e.icon?h`
                  <${V.assign({icon:e.icon})}></${V}>
              `:X,r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:h`
                  <span class="empty-text">&nbsp;</span>
              `;return h`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var yf=(e=>(e.Error="error",e.Success="success",e))(yf||{});const cd=We()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${te["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${te["vira-form-success-foreground-color"].value};
        }
    `,render(){return h`
            <slot></slot>
        `}}),Nn=We()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${_r};
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
    `,events:{expandChange:ht()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:o}){const s=o.expanded?A`
                  height: ${e.contentHeight}px;
              `:A`
                  height: 0;
              `;return h`
            <button
                class="header-wrapper"
                ${z("click",()=>{n(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${Xw(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),dd={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},oa=We()({tagName:"vira-dropdown",styles:A`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${gi} {
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
            ${ws};
            border: 1px solid ${te["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${Kr["vira-form-input-radius"].value};
            background-color: ${te["vira-form-background-color"].value};
            color: ${te["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:ht(),openChange:ht()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:i}){const o=ei(t.selected,c=>t.options.find(d=>d.id===c),F.isTruthy),s=t.icon?h`
                  <${V.assign({icon:t.icon})}
                      ${Zn(dd.icon)}
                  ></${V}>
              `:X,a=!o.length,u=t.selectionPrefix&&!a?h`
                      <span class="selected-label-prefix" ${Zn(dd.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:X,l=a?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return h`
            <${gi.assign({...t,items:t.options,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||vi.Both})}
                ${z(gi.events.openChange,c=>{i({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${z(gi.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${ir({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Zn(dd.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${ir({"using-placeholder":a})}"
                        title=${nt(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${V.assign({icon:ch})}
                            class="trigger-icon"
                        ></${V}>
                    </span>
                </div>
            </${gi}>
        `}}),to=We()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>A`
        :host {
            color: ${te["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return h`
            <slot></slot>
        `}}),li=We()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:ht(),imageError:ht()},styles:({hostClasses:e})=>A`
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
                      <${V.assign({icon:xl})} class="error"></${V}>
                  </slot>
              `:t.loadedUrls[s]?void 0:h`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${V.assign({icon:lo})}></${V}>
                    </slot>
                `;return h`
            ${mr(!!a,a)}
            <img
                class=${ir({hidden:!!a})}
                ${z("load",async()=>{e._debugLoadDelay&&await ro(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new i.imageLoad)})}
                ${z("error",async u=>{e._debugLoadDelay&&await ro(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new i.imageError(u.error))})}
                src=${s}
            />
        `}}),YM=["pagehide","pageshow","popstate"],In=We()({tagName:"vira-modal",events:{modalClose:ht()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${uu};
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
            ${Xo.modal}

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
                        ${_r};
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:i,slotNames:o}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=YM.map(u=>Rd(u,()=>{i(new n.modalClose)}));r({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),i(new n.modalClose))}return h`
            <dialog
                ${uo(a=>{r({dialogElement:dn.instanceOf(a,HTMLDialogElement)})})}
                ${z("close",()=>{s()})}
                ${z("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${uo(a=>{r({contentElement:dn.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${o.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?h`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:X}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${z("click",()=>{t.dialogElement?.close()})}
                        >
                            <${V.assign({icon:g2})}></${V}>
                        </button>
                    </div>
                    ${e.open?h`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:X}
                </div>
            </dialog>
        `}}),Cn=We()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>A`
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
                ${uo(o=>{if(!r.automaticallySwitch)return;const s={elementToTest:o,host:n,updateState:t},a=new ResizeObserver(()=>{fd(s)});a.observe(n),a.observe(o);const u=Uf(o,"slotchange",()=>{fd(s)});fd(s),i.cleanup?.(),t({cleanup(){a.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function fd({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const Yt=We()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>A`
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
    `,render({inputs:e,host:t}){const r=e.min||0,i=(e.max||100)-r,o=e.value-r,s=OD(Math.round(o/i*100),{min:0,max:100});return D2(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),h`
            <div
                class="progress-bar"
                style=${s?A`
                          width: ${s}%;
                      `:A`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function T2(e){return X9({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function M2(e,{ready:t,loading:r,error:n,key:i}){return i&&e.update(i),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(o=>({[o.key]:o.element}))):t({[e.value.key]:e.value.element})}const Or=Qw(),Vr=Or()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>A`
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
                ${z("click",n=>{(!e.router||c2(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new Dl(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function XM(e,t){return e.entry.entryType===Ot.Root?!1:e.entry.entryType===Ot.Page||F.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:F.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const jn=Or()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>A`
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
            ${Vr.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${V} {
            display: inline-flex;
            color: ${$e["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!XM(r,e.selectedPath))return;const n=A`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return h`
                <li style=${n}>
                    <${Vr.assign({router:e.router,route:{paths:[cr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ir({"title-row":!0,selected:e.selectedPath?F.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${mr(Zo(r,Ot.ElementExample),h`
                                    <${V.assign({icon:f2})}></${V}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Vr}>
                </li>
            `});return h`
            <${Vr.assign({route:ns,router:e.router})}>
                <slot name=${An.NavHeader}>Book</slot>
            </${Vr}>
            <ul>
                ${t}
            </ul>
        `}});async function QM(e){await mf(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await DT(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Ci=Or()({tagName:"book-error",styles:A`
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
            `)}}),Ua=Or()({tagName:"book-page-controls",events:{controlValueChange:ht()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>A`
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

        ${ut} {
            height: 24px;
            max-width: 128px;
        }

        ${V}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],o)=>{if(i.controlType===G.Hidden)return"";const s=eP(e.currentValues[n],i,a=>{const u=F.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return h`
                    <div class="control-wrapper">
                        ${mr(o===0,h`
                                <${V.assign({icon:ya})}
                                    class="options-icon"
                                ></${V}>
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
                `}):""}});function eP(e,t,r){return _i(t,G.Hidden)?"":_i(t,G.Checkbox)?h`
            <input
                type="checkbox"
                ?checked=${e}
                ${z("input",n=>{const i=Yi(n,HTMLInputElement);r(i.checked)})}
            />
        `:_i(t,G.Color)?h`
            <input
                type="color"
                .value=${e}
                ${z("input",n=>{const i=Yi(n,HTMLInputElement);r(i.value)})}
            />
        `:_i(t,G.Text)?h`
            <${ut.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${z(ut.events.valueChange,n=>{r(n.detail)})}
            ></${ut}>
        `:_i(t,G.Number)?h`
            <input
                type="number"
                .value=${e}
                ${z("input",n=>{const i=Yi(n,HTMLInputElement);r(i.value)})}
            />
        `:_i(t,G.Dropdown)?h`
            <select
                .value=${e}
                ${z("input",n=>{const i=Yi(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>h`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:_i(t,G.Custom)?t.content:h`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const wg=Or()({tagName:"book-breadcrumbs",styles:A`
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
                <${Vr.assign({route:{hash:void 0,search:void 0,paths:[cr.Book,...s]},router:e.router})}>
                    ${r}
                </${Vr}>
                ${a}
            `}):h`
                &nbsp;
            `}}),md=Or()({tagName:"book-breadcrumbs-bar",styles:A`
        :host {
            border-bottom: 1px solid
                ${$e["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${$e["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return h`
            ${mr(!!e.currentSearch,h`
                    &nbsp;
                `,h`
                    <${wg.assign({currentRoute:e.currentRoute,router:e.router})}></${wg}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${z("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await ro({milliseconds:200}),n.value===i&&(n.value?t(new Dl({paths:[cr.Search,encodeURIComponent(n.value)]})):t(new Dl(ns)))})}
            />
        `}}),vg=Or()({tagName:"book-entry-description",styles:A`
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>h`
                <p>${t}</p>
            `)}}),$g=Or()({tagName:"book-page-wrapper",styles:A`
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

        ${Vr} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?h`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:h`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[cr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?E1(e.pageNode.entry.errors):void 0;return n&&console.error(n),h`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Vr.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Vr}>
                    ${n?h`
                              <${Ci.assign({message:n.message})}></${Ci}>
                          `:h`
                              <${vg.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${vg}>
                              <${Ua.assign({config:e.pageNode.entry.controls,currentValues:Wf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Ua}>
                          `}
                </div>
            </div>
        `}}),Iu=Or()({tagName:"book-element-example-controls",styles:A`
        :host {
            display: flex;
            color: ${$e["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[cr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return h`
            <${Vr.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Vr}>
        `}}),Dg=Symbol("unset-internal-state"),xg=Or()({tagName:"book-element-example-viewer",state(){return{isUnset:Dg}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw E1(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Dg&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return h`
                ${mr(!!t.elementExampleNode.entry.styles,h`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",St(n)),console.error(n),h`
                <${Ci.assign({message:`${t.elementExampleNode.entry.title} failed: ${St(n)}`})}></${Ci}>
            `}},options:{allowPolymorphicState:!0}}),Ag=Or()({tagName:"book-element-example-wrapper",styles:A`
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

        ${Iu} {
            color: ${$e["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Iu} {
            color: ${$e["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return h`
            <div class="individual-example-wrapper">
                <${Iu.assign(UD(e,["currentPageControls"]))}></${Iu}>
                <${xg.assign(e)}></${xg}>
            </div>
        `}}),tP={milliseconds:10};let sa;const El=new Map,Gi=new Map;function rP(){return sa||(sa=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=El.get(r);if(n)if(t.isIntersecting){if(!Gi.has(r)){const i=globalThis.setTimeout(()=>{Gi.delete(r),n(),sa?.unobserve(r),El.delete(r)},ts(tP,{milliseconds:!0}).milliseconds);Gi.set(r,i)}}else{const i=Gi.get(r);i&&(clearTimeout(i),Gi.delete(r))}}},{rootMargin:"100px"})),sa}function Eg(e){const t=Gi.get(e);t&&(clearTimeout(t),Gi.delete(e)),El.delete(e),sa?.unobserve(e)}const Ou=Or()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:A`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&Eg(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:h`
            <div
                class="placeholder"
                ${uo(n=>{t.placeholderElement&&Eg(t.placeholderElement),r({placeholderElement:n}),El.set(n,()=>{r({hasRendered:!0})}),rP().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function P2(e,t,r,n){const i=Ld(r,n),o=[];if(i){const s=P2(e,t,i,n);s&&o.push(s)}if(Zo(r,Ot.Page)&&!e.includes(r)){const s=Wf(t,r.fullUrlBreadcrumbs);o.push({config:r.entry.controls,current:s,breadcrumbs:nr(s,()=>r.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function nP({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:o}){if(!e.length&&n)return[h`
                No results
            `];const s=F.isLengthAtLeast(e,1)?P2(e,i,e[0],o):void 0,a=s&&Object.values(s.config).length&&F.isLengthAtLeast(e,1)?h`
                  <${Ua.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Ua}>
              `:X,u=eT(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Zo(l,Ot.Page))return h`
                    <${$g.assign({isTopLevel:t,pageNode:l,controls:i,router:r})}
                        class="block-entry"
                    ></${$g}>
                `;if(Zo(l,Ot.ElementExample)){const c=Wf(i,l.fullUrlBreadcrumbs.slice(0,-1)),d=h`
                    <${Ag.assign({elementExampleNode:l,currentPageControls:c,router:r})}></${Ag}>
                `;return h`
                    <${Ou.assign({content:d})}
                        class="inline-entry ${ir({"block-entry":l.entry.isVertical})}"
                    ></${Ou}>
                `}else{if(Zo(l,Ot.Root))return X;{const c=h`
                    <${Ci.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}></${Ci}>
                `;return h`
                    <${Ou.assign({content:c})}
                        class="block-entry"
                    ></${Ou}>
                `}}});return[a,u]}const Oo=Or()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:A`
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

        ${md} {
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
    `,events:{loadingRender:ht()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const o=jd(e.currentRoute.paths),s=nP({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return h`
            <${md.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${md}>

            ${mr(e.showLoading,h`
                    <div
                        ${uo(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${V.assign({icon:lo})}></${V}>
                    </div>
                    ${mr(!!n.lastElement,h`
                            ${n.lastElement}
                            <slot name=${An.Footer}></slot>
                        `)}
                `,h`
                    <div
                        ${uo(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${An.Footer}></slot>
                `)}
        `}});function iP(e,t,r){const n=Cg(e,t);return n.length?n:(r(ns),Cg(e,ns.paths))}function Cg(e,t){return e.filter(r=>JD({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const hd=Ao()({tagName:"element-book-app",state(){return{currentRoute:ns,router:void 0,loading:!0,colors:{config:void 0,theme:ng(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:ht()},styles:A`
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

        ${Oo} {
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
    `,init({host:e,state:t}){setTimeout(async()=>{await kg(e,jd(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const d=s(c);return!F.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(F.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=s(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=_T(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,E=>{n({currentRoute:E})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!F.jsonEquals(c,e.colors.config)){const D=ng(c);n({colors:{config:c,theme:D}}),Tx(r,D)}const d=t._debug??!1,f=rx({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:O1(f.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=jd(e.currentRoute.paths),w=(m?ST({flattenedNodes:f.flattenedNodes,searchQuery:m}):void 0)??iP(f.flattenedNodes,e.currentRoute.paths,l);u(w[0]?.entry.title);const x=e.treeBasedControls?.controls;return x?(t._debug&&console.info({currentControls:x}),h`
                <div
                    class="root"
                    ${z(Dl,async D=>{const E=D.detail;if(!a(E))return;if(n({loading:!0}),l(E),!(r.shadowRoot.querySelector(jn.tagName)instanceof jn))throw new TypeError(`Failed to find child '${jn.tagName}'`);await kg(r,m,e.currentRoute)})}
                    ${z(Ua.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const E=ix(x,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:E}})})}
                >
                    <${jn.assign({flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${An.NavHeader}
                            slot=${An.NavHeader}
                        ></slot>
                    </${jn}>
                    <${Oo.assign({controls:x,currentNodes:w,currentRoute:e.currentRoute,debug:d,originalTree:f.tree,router:e.router,showLoading:e.loading})}
                        ${z(Oo.events.loadingRender,async D=>{await mf();const E=r.shadowRoot.querySelector(Oo.tagName);E?E.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Oo.tagName}' for scrolling.`),await mf(),n({loading:!D.detail})})}
                    >
                        <slot
                            name=${An.Footer}
                            slot=${An.Footer}
                        ></slot>
                    </${Oo}>
                </div>
            `):h`
                    <${Ci.assign({message:"Failed to generate page controls."})}></${Ci}>
                `}catch(c){return console.error(c),h`
                <p class="error">${St(c)}</p>
            `}}});async function kg(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(jn.tagName);if(!(n instanceof jn))throw new TypeError(`Failed to find child '${jn.tagName}'`);await QM(n)}function Fg(e){if(typeof e=="string")return oP(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function oP(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(c){for(let d=0;d<3;d++)n[d]=parseInt(c[d+1],16);return n[3]=1,!0}},l=u.rex.exec(s[a]);return n[4]=t=u.sprig(l),n}}let i={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,u=0,l=10,c=100,d=2.55,f="1";s[23]&&(f=s[23],delete s[23]),n[3]=f.match(/%/g)?parseFloat(f)/c:parseFloat(f);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,u=m);switch(u){case 4:l=16,c=15,n[3]=parseInt(s[u],l)/c;case 3:l=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],l);break;case 5:l=16;case 9:n[0]=n[1]=n[2]=l==10?parseFloat(s[u]):parseInt(s[u],l);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*d;break;case 8:l=16,c=255,n[3]=parseInt(s[8],l)/c;case 7:l=16;case 11:for(let m=0;m<3;m++)n[m]=l==10?parseFloat(s[a+m]):parseInt(s[a+m],l);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*d;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/c:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let M=function(I){let L=(I+E/30)%12,se=m*Math.min(b,1-b);return b-se*Math.max(-1,Math.min(L-3,9-L,1))},m,b,w,x,D,E=n[0]%360;if(E<0&&(E+=360),n[5].match(/^hsla?/i))m=n[1],b=n[2],w=0,D=1;else if(n[5].match(/^hwba?/i)){if(w=n[1],x=n[2],w+x>=1){n[0]=n[1]=n[2]=w/(w+x),n[5]="sRGB";break}m=1,b=.5,D=1-w-x}n[0]=Math.round(255*(M(0)*D+w)),n[1]=Math.round(255*(M(8)*D+w)),n[2]=Math.round(255*(M(4)*D+w)),n[5]="sRGB"}break}return!0}},o=i.rex.exec(e);return o?(n[4]=t=i.parsley(o),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const at={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function sP(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let i=0,o=0,s="BoW";return e=e>at.blkThrs?e:e+Math.pow(at.blkThrs-e,at.blkClmp),t=t>at.blkThrs?t:t+Math.pow(at.blkThrs-t,at.blkClmp),Math.abs(t-e)<at.deltaYmin?0:(t>e?(i=(Math.pow(t,at.normBG)-Math.pow(e,at.normTXT))*at.scaleBoW,o=i<at.loClip?0:i-at.loBoWoffset):(s="WoB",i=(Math.pow(t,at.revBG)-Math.pow(e,at.revTXT))*at.scaleWoB,o=i>-.1?0:i+at.loWoBoffset),r<0?o*100:r==0?Math.round(Math.abs(o)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(o*100).toFixed(r):0)}function aP(e,t,r=-1,n=!0){let i=Fg(t),o=Fg(e);return!(o[3]==""||o[3]==1)&&(o=lP(o,i,n)),sP(Sg(o),Sg(i),r)}function uP(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],o=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const u=.2,l=e==0?1:e*u|0;let c=0,d=(e-r[l][c])*u;for(c++;c<o;c++)a=r[l][c],a>400?s[c]=a:e<14.5?s[c]=999:e<29.5?s[c]=777:a>24?s[c]=Math.round(a-n[l][c]*d):s[c]=a-(2*n[l][c]*d|0)*.5;return s}function Sg(e=[0,0,0]){function t(r){return Math.pow(r/255,at.mainTRC)}return at.sRco*t(e[0])+at.sGco*t(e[1])+at.sBco*t(e[2])}function lP(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],i=[0,0,0,1,!0];for(let o=0;o<3;o++)i[o]=t[o]*n+e[o]*e[3],r&&(i[o]=Math.min(Math.round(i[o]),255));return i}const N2={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};nr(N2,e=>e);Object.fromEntries(Object.entries(N2).map(([e,t])=>[t,e]));function mh({background:e,foreground:t}){const r=BD(Number(aP(t,e)),{digits:1});return{contrast:r,fontSizes:fP(r),contrastLevel:mP(r)}}function cP(e,t){return t.reduce((r,n)=>{const i=Math.abs(mh({foreground:n,background:e}).contrast);return i>r.contrast?r:{contrast:i,color:n}},{contrast:1/0,color:""}).color}function dP(e,t){const r=F.isArray(e.foreground)?e.foreground:F.isArray(e.background)?e.background:new Error("No color array provided.");if(r instanceof Error)throw r;const n=Tg.indexOf(t);return r.reduce((o,s)=>{const a=mh({foreground:F.isString(e.foreground)?e.foreground:s,background:F.isString(e.background)?e.background:s}),l=Tg.indexOf(a.contrastLevel.name)-n;return l>0||o.distance>l?o:{color:s,distance:l}},{distance:0,color:void 0}).color}function fP(e){const t=uP(e).slice(1);return Ol(t,(n,i)=>({key:(i+1)*100,value:n}))}function mP(e){return dn.isDefined(bc.find(t=>t.min<=Math.abs(e)))}var ke;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(ke||(ke={}));const I2={[ke.SmallBodyText]:"Small Text",[ke.BodyText]:"Body Text",[ke.NonBodyText]:"Non-body Text",[ke.Header]:"Header",[ke.Placeholder]:"Placeholder",[ke.Decoration]:"Decoration",[ke.Invisible]:"Invisible"},Tg=[ke.SmallBodyText,ke.BodyText,ke.NonBodyText,ke.Header,ke.Placeholder,ke.Decoration,ke.Invisible],bc=[{min:90,name:ke.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:ke.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:ke.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:ke.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:ke.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:ke.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:ke.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Ol(bc,e=>({key:e.min,value:e}));Ol(bc,e=>({key:e.name,value:e}));const pd=Ao()({tagName:"vir-contrast-indicator",styles:A`
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

        .${Pe(ke.Invisible)} {
            color: red;
        }
        .${Pe(ke.Decoration)} {
            color: #ff6600;
        }
        .${Pe(ke.Placeholder)} {
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
    `,render({inputs:e}){const t=bc.toReversed().slice(1).map(i=>h`
                    <div
                        class="gauge-level ${ir({active:i.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return h`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${I2[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),Cl=Ao()({tagName:"theme-vir-color-example",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"theme-vir-color-example-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${_r};
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
            ${uu};
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
    `,render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(a=>{const u=[r.color[a].name,r.showVarValues||e.forceShowEverything?":":""].filter(F.isTruthy).join(""),l=r.showVarValues||e.forceShowEverything?h`
                          <span>${r.color[a].default}</span>
                      `:X;return h`
                <p>
                    <span>${u}</span>
                    ${l}
                </p>
            `}),i=r.showVarNames||e.forceShowEverything?h`
                      <div class="css-var-names">${n}</div>
                  `:X,o=e.previewElement?mh({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=o&&(r.showContrast||e.forceShowEverything)?h`
                      <${pd.assign({contrast:o,fontWeight:r.fontWeight})}></${pd}>
                  `:X;return h`
            <button
                ${z("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${uo(a=>{t({previewElement:dn.instanceOf(a,HTMLElement)})})}
                class="color-preview"
                style=${A`
                    color: ${Pe(r.color.foreground.default)};
                    background: ${Pe(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${A`
                                visibility: ${Pe((o?.fontSizes[400]||1/0)>150?"hidden":"visible")};
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
        `}}),O2=["#000000","#ffffff","#000","#fff","white","black"];function B2(e,t=O2){const r={};return Object.values(e).forEach(n=>{if(t.includes(n.default))return;const i=hP(n);mo(r,i.colorName,()=>[]).push(i)}),r}function hP(e){const t=String(e.name).replace(/^-+/,"").split("-"),r=t.length>2?t.at(-1):void 0,n=dn.isTruthy(t[0]),i=t.slice(1,r?-1:void 0).join("-");return{suffix:r,prefix:n,colorName:i,definition:e,cssVarName:String(e.name)}}function R2(e,{mapFrom:t,mapTo:r}){return F.isArray(e)?wf(e.map(n=>{if(t&&F.isKeyOf(n,t))return n;if(r&&F.isKeyOf(n,r)&&r[n]!=null)return r[n];throw new Error(`Unknown font weight: ${String(n)}`)})):R2(ei(Object.entries(e),([n,i])=>{if(i)return n},F.isTruthy),{mapTo:r,mapFrom:t})}const pP={background:"white",foreground:"black"},gP={[ke.BodyText]:!0,[ke.Header]:!0,[ke.Placeholder]:!0,[ke.Decoration]:!0};function yP(e,{defaultTheme:t=pP,omittedColorValues:r=O2,crossContrastLevels:n=gP}={}){const i=R2(n,{mapFrom:I2}),o=B2(e,r),s=Object.fromEntries(Object.entries(o).flatMap(([a,u])=>{Ct.isLengthAtLeast(u,1);const l=u.map(w=>w.definition.default),c=hD({crossWith:["ahead-background","behind-background","ahead-foreground","behind-foreground","self-light-front","self-light-back"],contrast:i}),d=u[0],f=dg(t.foreground),m=dg(t.background),b=cP("white",l);return ei(c,w=>{const x=[d.prefix,d.colorName,w.crossWith,w.contrast].join("-"),D=w.crossWith==="ahead-background"?{foreground:l,background:m}:w.crossWith==="behind-background"?{foreground:m,background:l}:w.crossWith==="ahead-foreground"?{foreground:l,background:f}:w.crossWith==="behind-foreground"?{foreground:f,background:l}:w.crossWith==="self-light-back"?{foreground:l,background:b}:{foreground:b,background:l},E=dP(D,w.contrast),M=u.find(I=>I.definition.default===E);if(!M){Rf.error(`No valid '${a}' color cross found for: ${g(w)} with ${g(l)}`);return}return[x,nr(D,(I,L)=>F.isString(L)?L:M.definition.value)]},F.isTruthy)}));return bM(t,s)}function bP({parent:e,title:t,theme:r,hideInverseColors:n,overrides:i,useVerticalLayout:o,prefixGroupByCount:s=0}){const a={"Show Var Names":{controlType:G.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:G.Checkbox,initValue:!0}},u=ge({parent:e,title:t,controls:a});function l({controls:b,theme:w,themeColorName:x}){const D=F.isKeyOf(x,w.colors)?w.colors[x]:void 0,E=F.isKeyOf(x,w.inverse)?w.inverse[x]:void 0;if(!D||!E)throw new Error(`No theme color found by name '${x}'`);const M=h`
            <${Cl.assign({color:D,showVarValues:!0,showVarNames:b["Show Var Names"],showContrast:b["Show Contrast Tips"],fontWeight:400})}></${Cl}>
        `;return h`
            <div class="with-inverse">${M}${X}</div>
        `}function c(b,w){const x=mD(Object.keys(w.colors),D=>s?D.split("-").slice(0,s).join("-"):D);Object.entries(x).forEach(([D,E])=>{E&&b({title:D,styles:A`
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
                    `,render({controls:M}){return E.map(I=>l({controls:M,theme:w,themeColorName:I}))}})})}const d=["Click a color preview to show CSS var names and values."],f=ge({parent:u,title:"Default Theme",descriptionParagraphs:d,useVerticalExamples:o,controls:{copy:{controlType:G.Custom,content:h`
                    <button
                        ${z("click",async()=>{const b=wM(r,"viraColorPalette");await navigator.clipboard.writeText(b)})}
                    >
                        Copy Code
                    </button>
                `}},defineExamples({defineExample:b}){c(b,r)}}),m=(i||[]).map(b=>ge({parent:u,title:b.name,useVerticalExamples:o,descriptionParagraphs:d,defineExamples({defineExample:w}){c(w,b.asTheme)}}));return[u,f,...m]}const wP=[{title:"Black",fontWeight:400,foreground:nn["vira-black"]},{title:"Black",fontWeight:700,foreground:nn["vira-black"]},{title:"White",fontWeight:400,foreground:nn["vira-white"]},{title:"White",fontWeight:700,foreground:nn["vira-white"]},{title:"Black",fontWeight:400,background:nn["vira-black"]},{title:"Black",fontWeight:700,background:nn["vira-black"]},{title:"White",fontWeight:400,background:nn["vira-white"]},{title:"White",fontWeight:700,background:nn["vira-white"]}];function vP({colors:e,parent:t,title:r,includeContrast:n,includeTheme:i,useVerticalTheme:o}){const s=B2(e),a=ge({parent:t,title:r}),u=ge({parent:a,title:"Palette",defineExamples({defineExample:m}){Object.entries(s).forEach(([b,w])=>{m({title:b,styles:A`
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
                                    color: ${nn["vira-grey-50"].value};
                                }

                                & .color-value {
                                    margin-left: 1ch;
                                }
                            }
                        `,render(){return w.map(x=>h`
                                    <div class="swatch-wrapper">
                                        <div
                                            class="swatch"
                                            style=${A`
                                                background-color: ${Pe(x.definition.default)};
                                            `}
                                        ></div>
                                        <p class="color-details">
                                            <span>${x.cssVarName}</span>
                                            <br />
                                            <span class="color-value">
                                                ${x.definition.default}
                                            </span>
                                        </p>
                                    </div>
                                `)}})})}}),l=ge({parent:a,title:"Palette Contrast"});function c(m,b){return ge({parent:l,title:`${r} ${m}`,defineExamples({defineExample:w}){Object.entries(s).forEach(([x,D])=>{const E=F.isArray(b)?b:b(D);w({title:x,styles:A`
                                :host {
                                    display: flex;
                                    flex-direction: column;
                                    gap: 24px;
                                }

                                p {
                                    ${uu}
                                }

                                .darkness-level {
                                    text-align: center;
                                    font-size: 12px;
                                    color: ${nn["vira-grey-50"].value};
                                }

                                td {
                                    padding: 4px;
                                    min-width: 170px;
                                }
                            `,render(){const M=D.map(L=>{const se=E.map(ye=>h`
                                            <td>
                                                <p class="darkness-level">${L.suffix}</p>
                                                <${Cl.assign({color:{background:ye.background||L.definition,foreground:ye.foreground||L.definition},showVarValues:!0,showVarNames:!1,showContrast:!0,fontWeight:ye.fontWeight})}></${Cl}>
                                            </td>
                                        `);return h`
                                        <tr>${se}</tr>
                                    `}),I=E.map(L=>{const se=L.background?"in back":"in front",ye=[L.title,`(${se})`,`(${L.fontWeight})`].join(" ");return h`
                                        <th>${ye}</th>
                                    `});return h`
                                    <table cellspacing="0" cellpadding="0">
                                        <thead><tr>${I}</tr></thead>
                                        <tbody>${M}</tbody>
                                    </table>
                                `}})})}})}const d=c("Contrast Black White",wP);function f(m){return c(`Contrast Self ${m}`,b=>b.map(w=>({fontWeight:m,title:w.suffix||"",foreground:w.definition})))}return[a,u,l,d,f(400),f(700),...bP({parent:a,title:"Theme (auto)",theme:yP(e),hideInverseColors:!0,useVerticalLayout:o,prefixGroupByCount:2})].filter(F.isTruthy)}const tt=ge({title:"Elements",parent:void 0}),hh=ge({title:"Styles",parent:void 0}),L2=ge({title:"Util",parent:void 0}),$P=ge({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:G.Color,initValue:""},"Fill Color":{controlType:G.Color,initValue:""},"Stroke Width":{controlType:G.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(hf).forEach(t=>{e({title:t.name,styles:A`
                    :host(:hover) ${V} {
                        background-color: #f2f2f2;
                    }

                    ${V} {
                        padding: 8px;
                        border-radius: ${Kr["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=A`
                        ${v["vira-icon-fill-color"].name}: ${Pe(r["Fill Color"]||"inherit")};
                        ${v["vira-icon-stroke-color"].name}: ${Pe(r["Stroke Color"]||"inherit")};
                        ${v["vira-icon-stroke-width"].name}: ${Pe(r["Stroke Width"]?Aa(r["Stroke Width"]):"inherit")};
                    `;return h`
                        <${V.assign({icon:t})} style=${n}></${V}>
                    `}})})}}),DP=vP({colors:nn,parent:hh,title:"Vira Color",includeContrast:!0,includeTheme:!0}),j2={async element1(){return await ro({seconds:2}),(await nl(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-ClctHCGU.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await ro({seconds:2}),(await nl(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-B3f46izx.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},Mg=Ao()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:T2(j2)}},render({state:e,inputs:t}){return M2(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return h`
                    <${to}>
                        ${vs("Failed to import element",St(r))}
                    </${to}>
                `},loading(){return h`
                    <${V.assign({icon:lo})}></${V}>
                `},ready(r){if(r.element1)return h`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return h`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Ct.never("The error element will always error")}})}}),Pg=Ao()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:T2(j2)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),M2(e.dynamicElements,{error(r){return h`
                    <${to}>
                        ${vs("Failed to import element",St(r))}
                    </${to}>
                `},loading(){return h`
                    <${V.assign({icon:lo})}></${V}>
                `},ready(r){if(r.element1)return h`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return h`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Ct.never("The error element will always error")}})}}),Ng=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],xP=ge({parent:L2,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return h`
                    <${it.assign({value:String(t.value),options:Ng})}
                        ${z(it.events.valueChange,n=>{const i=Number(n.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);r({value:i})})}
                    ></${it}>
                    <${Mg.assign({numberValue:t.value})}></${Mg}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return h`
                    <${it.assign({value:String(t.value),options:Ng})}
                        ${z(it.events.valueChange,n=>{const i=Number(n.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);r({value:i})})}
                    ></${it}>
                    <${Pg.assign({numberValue:t.value})}></${Pg}>
                `}})}}),AP=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:h`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:A`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:A`
            ${$r} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],EP=ge({title:$r.tagName,parent:tt,controls:{Selected:{controlType:G.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:G.Text,initValue:""}},defineExamples({defineExample:e}){AP.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?h`
                            <${$r.assign(n)}>
                                ${t.customTemplate}
                            </${$r}>
                        `:h`
                            <${$r.assign(n)}></${$r}>
                        `}})})}}),bf=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new uh({sanitizeRoute(e){return e}})}}],CP=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:fh.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...bf,{id:"long",label:h`
                        <${$r.assign({selected:!1})}>
                            <div
                                style=${A`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${$r}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:vi.Both,items:[...bf,{id:"long",label:h`
                        <${$r.assign({selected:!1})}>
                            <div
                                style=${A`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${$r}>
                    `}]}}],kP=ge({parent:tt,title:gi.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){CP.forEach(t=>{e({title:t.title,styles:A`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return h`
                        <${gi.assign({items:bf,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${gi}>
                    `}})})}}),U2=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],FP=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...U2,{id:4,label:"link here",route:{route:{paths:["test"]},router:new uh({sanitizeRoute(e){return e}})}}]}}],SP=ge({parent:tt,title:ba.tagName,defineExamples({defineExample:e}){FP.forEach(t=>{e({title:t.title,render(){return h`
                        <${ba.assign({isMultiSelect:!1,navController:void 0,items:U2,selected:[],...t.inputs})}></${ba}>
                    `}})})}}),_2=[];Ur(Al).forEach(e=>{Ur(fh).forEach(t=>{_2.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const TP=ge({parent:tt,title:wa.tagName,defineExamples({defineExample:e}){_2.forEach(t=>{e({title:t.title,styles:A`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return h`
                        <${wa.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${wa}>
                    `}})})}}),MP=ge({parent:tt,title:pe.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:A`
                ${pe} {
                    ${bs["vira-focus-outline-border-radius"].name}: 0;
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
                    <${pe.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${pe.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>Pop up!</div>
                    </${pe}>
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
            `,render(){return h`
                    <${pe.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${pe.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${pe}>
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
            `,render(){return h`
                    <${pe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:vi.Right})}>
                        <div slot=${pe.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${pe}>
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
            `,render(){return h`
                    <${pe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:vi.Left})}>
                        <div slot=${pe.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${pe}>
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
            `,render(){return h`
                    <${pe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:vi.Right})}>
                        <div slot=${pe.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>not long</div>
                    </${pe}>
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
            `,render(){return h`
                    <div class="container">
                        <${pe.assign({keepOpenAfterInteraction:!0})}>
                            <div class="trigger" slot=${pe.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${pe.slotNames.popUp}>
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
                        </${pe}>
                    </div>
                `}})}}),PP=[{title:"menu shadow",styles:Xo.menuShadow},{title:"menu shadow reversed",styles:Xo.menuShadowReversed},{title:"modal",styles:Xo.modal}],NP=ge({parent:hh,title:"Shadows",defineExamples({defineExample:e}){PP.forEach(t=>{e({title:t.title,styles:A`
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
                    `}})})}}),IP=ge({parent:tt,title:Ye.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:G.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return h`
                    <${Ye.assign({text:"Text here",bold:!1})}></${Ye}>
                `}}),e({title:"Bold",render(){return h`
                    <${Ye.assign({text:"Text here",bold:!0})}></${Ye}>
                `}}),e({title:"Dynamic",render({controls:t}){return h`
                    <${Ye.assign({text:"Text here",bold:t.bolded})}></${Ye}>
                `}}),e({title:"Resized",styles:A`
                ${Ye} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return h`
                    <${Ye.assign({text:"Not Bolded",bold:!1})}></${Ye}>
                    <${Ye.assign({text:"Bolded",bold:!0})}></${Ye}>
                `}}),e({title:"Alignment",styles:A`
                ${Ye} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return h`
                    <${Ye.assign({text:"Not Bolded",bold:!1})}></${Ye}>
                    <${Ye.assign({text:"Bolded",bold:!0})}></${Ye}>
                `}}),e({title:"Stylized",styles:A`
                ${Ye} {
                    text-decoration: underline;
                }
            `,render(){return h`
                    <${Ye.assign({text:"Not Bolded",bold:!1})}></${Ye}>
                    <${Ye.assign({text:"Bolded",bold:!0})}></${Ye}>
                `}})}}),OP=ge({parent:tt,title:he.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:G.Color,initValue:he.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:G.Color,initValue:he.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:G.Color,initValue:he.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:G.Color,initValue:he.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:i}){const o=n??A``;e({title:r,styles:o,render({controls:s}){const a=A`
                        ${he.cssVars["vira-button-primary-color"].name}: ${Pe(s["Primary color"]||"inherit")};
                        ${he.cssVars["vira-button-secondary-color"].name}: ${Pe(s["Secondary color"]||"inherit")};
                        ${he.cssVars["vira-button-primary-hover-color"].name}: ${Pe(s["Hover color"]||"inherit")};
                        ${he.cssVars["vira-button-primary-active-color"].name}: ${Pe(s["Active color"]||"inherit")};
                    `;return h`
                        <${he.assign({text:"hello",...i})}
                            style=${a}
                        ></${he}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:ya}}),t({title:"with expanding icon",inputs:{icon:ya,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Vo.Outline}}),t({title:"only icon",inputs:{icon:ya,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:A`
                ${he} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:A`
                ${he} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:A`
                :host {
                    ${he.cssVars["vira-button-primary-color"].name}: pink;
                    ${he.cssVars["vira-button-secondary-color"].name}: purple;
                    ${he.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${he.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return h`
                    <${he.assign({text:"hello"})}></${he}>
                `}})}}),BP=[{title:"basic"},{title:"success",inputs:{cardState:yf.Success}},{title:"error",inputs:{cardState:yf.Error}},{title:"long",content:h`
            <p
                style=${A`
                    ${uu}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],RP=ge({parent:tt,title:cd.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){BP.forEach(t=>{e({title:t.title,render(){return h`
                        <${cd.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${cd}>
                    `}})})}}),LP=ge({parent:tt,title:ve.tagName,controls:{Checked:{controlType:G.Checkbox,initValue:!1},Disabled:{controlType:G.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return h`
                    <${ve.assign({value:t.checked})}
                        ${z(ve.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ve}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return h`
                    <${ve.assign({value:t.checked})}
                        ${z(ve.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ve}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return h`
                    <${ve.assign({value:t.checked,hasError:!0})}
                        ${z(ve.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ve}>
                `}}),e({title:"disabled unchecked",render(){return h`
                    <${ve.assign({value:!1,disabled:!0})}></${ve}>
                `}}),e({title:"disabled checked",render(){return h`
                    <${ve.assign({value:!0,disabled:!0})}></${ve}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return h`
                    <${ve.assign({value:t.Checked,disabled:t.Disabled})}></${ve}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return h`
                    <${ve.assign({value:!0})}></${ve}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return h`
                    <${ve.assign({value:t.checked,label:"label goes here"})}
                        ${z(ve.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ve}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return h`
                    <${ve.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${z(ve.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ve}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:A`
                ${ve} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return h`
                    <${ve.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${z(ve.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ve}>
                `}})}}),jP=ge({title:Nn.tagName,parent:tt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>h`
                        <${Nn.assign({expanded:!!r.expandedStates[i]})}
                            ${z(Nn.events.expandChange,o=>{const s=[...r.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${Nn.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${z("click",()=>{const o=[...r.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${mr(!!r.showMoreStates[i],h`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${Nn}>
                    `)}}),e({title:"wider examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>h`
                        <${Nn.assign({expanded:!!r.expandedStates[i]})}
                            ${z(Nn.events.expandChange,o=>{const s=[...r.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${Nn.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${z("click",()=>{const o=[...r.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${mr(!!r.showMoreStates[i],h`
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
                        </${Nn}>
                    `)}})}}),va=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],UP=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...va,{id:42,label:h`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...va,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:A`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:A`
            ${oa} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:qr}}],_P=ge({title:oa.tagName,parent:tt,controls:{Selected:{controlType:G.Dropdown,initValue:"",options:["",...va.map(e=>e.label)]},Prefix:{controlType:G.Text,initValue:""},"Force State":{controlType:G.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:G.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:G.Dropdown,initValue:"",options:["",...Object.keys(hf)]},Disabled:{controlType:G.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:G.Text,initValue:"Select something"}},defineExamples({defineExample:e}){UP.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||va,selected:i.Selected?[va.find(s=>s.label===i.Selected)?.id].filter(F.isTruthy):r.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?hf[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return h`
                        <${oa.assign(o)}
                            ${z(oa.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${oa}>
                    `}})})}}),VP=ge({parent:tt,title:to.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return h`
                    <${to}>Error Content</${to}>
                `}})}}),gd=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],WP=ge({parent:tt,title:ar.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:be.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:be.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:be.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:be.Email,label:"Email Address",value:t.email},password:{type:be.NewPassword,label:"Password",value:t.password},userRole:{type:be.Select,label:"Role",options:gd,value:t.userRole,placeholder:"placeholder"},disabledField:{type:be.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:be.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return h`
                    <${ar.assign({fields:n})}
                        ${z(ar.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${he.assign({text:"Cancel",buttonStyle:Vo.Outline})}></${he}>
                            <${he.assign({text:"Submit"})}></${he}>
                        </div>
                    </${ar}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:be.Text,label:"First Name",value:t.firstName},lastName:{type:be.Text,label:"Last Name",value:t.lastName}};return h`
                    <${ar.assign({fields:n})}
                        ${z(ar.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <${ut.assign({value:"",label:"More stuff"})}></${ut}>
                        <div class="buttons">
                            <${he.assign({text:"Cancel",buttonStyle:Vo.Outline})}></${he}>
                            <${he.assign({text:"Submit"})}></${he}>
                        </div>
                    </${ar}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${ar} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:be.Text,label:"First Name",value:t.firstName},lastName:{type:be.Text,label:"Last Name",value:t.lastName},subscribe:{type:be.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:be.Email,label:"Email Address",value:t.email},password:{type:be.NewPassword,label:"Password",value:t.password},userRole:{type:be.Select,label:"Role",options:gd,value:t.userRole}};return h`
                    <${ar.assign({fields:n})}
                        ${z(ar.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${he.assign({text:"Cancel",buttonStyle:Vo.Outline})}></${he}>
                            <${he.assign({text:"Submit"})}></${he}>
                        </div>
                    </${ar}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:be.Text,label:"First Name",value:t.firstName},lastName:{type:be.Text,label:"Last Name",value:t.lastName},subscribe:{type:be.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:be.Email,label:"Email Address",value:t.email},password:{type:be.NewPassword,label:"Password",value:t.password},userRole:{type:be.Select,label:"Role",options:gd,value:t.userRole}};return h`
                    <${ar.assign({fields:n,isDisabled:!0})}
                        ${z(ar.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${he.assign({text:"Cancel",buttonStyle:Vo.Outline})}></${he}>
                            <${he.assign({text:"Submit"})}></${he}>
                        </div>
                    </${ar}>
                `}})}}),zP=ge({title:V.tagName,parent:tt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return h`
                    <${V.assign({icon:qr})}></${V}>
                `}}),e({title:"using createColoredIcon",render(){return h`
                    <${V.assign({icon:cg(qr,{"vira-icon-stroke-color":"red"})})}></${V}>
                `}}),e({title:"fit container",styles:A`
                ${V} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return h`
                    <${V.assign({icon:cg(qr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${V}>
                `}})}}),qP=ge({title:li.tagName,parent:tt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:A`
                    border-radius: 32px;
                `,loadingSlot:h`
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
                        <${V.assign({icon:lo,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:A`
                    border-radius: 32px;
                `,errorSlot:h`
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
                        <${V.assign({icon:xl,fitContainer:!0})}
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
                `,allowReload:!0,loadingSlot:h`
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
                        <${V.assign({icon:lo,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `,errorSlot:h`
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
                        <${V.assign({icon:xl,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:A`
                    ${li} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||A``}
                    }

                    ${r.allowReload?A`
                              ${li} {
                                  cursor: pointer;
                              }

                              ${li}:hover {
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
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:i}){return h`
                        <${li.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${z("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${Qi()}`})})}
                        >
                            ${r.loadingSlot?h`
                                      <div class="slot-wrapper" slot=${li.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:X}${r.errorSlot?h`
                                      <div class="slot-wrapper" slot=${li.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:X}
                        </${li}>
                    `}})})}}),KP=ge({title:ut.tagName,parent:tt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:G.Color,initValue:te["vira-form-foreground-color"].default},"Placeholder color":{controlType:G.Color,initValue:te["vira-form-placeholder-color"].default},"Border color":{controlType:G.Color,initValue:te["vira-form-border-color"].default},"Focus color":{controlType:G.Color,initValue:bs["vira-focus-outline-color"].default},"Selection color":{controlType:G.Color,initValue:te["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:i,inputs:o}){e({title:i,styles:A`
                    ${n||A``}
                `,state(){return{value:o.value}},render({state:s,updateState:a,controls:u}){const l={[String(te["vira-form-foreground-color"].name)]:u["Text color"],[String(te["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(te["vira-form-border-color"].name)]:u["Border color"],[String(bs["vira-focus-outline-color"].name)]:u["Focus color"],[String(te["vira-form-text-selection-color"].name)]:u["Selection color"]},c=nr(l,(f,m)=>m||"inherit"),d=Object.entries(c).map(([f,m])=>[f,m].join(": ")+";").join(`
`);return h`
                        <${ut.assign({...o,value:s.value})}
                            style=${d}
                            ${z(ut.events.valueChange,f=>{a({value:f.detail}),console.info("changed:",f.detail)})}
                        ></${ut}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:qr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:A`
                    ${ut} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:qr}},{title:"taller height",styles:A`
                    ${ut} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:qr}},{title:"shorter height",styles:A`
                    ${ut} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:qr}},{title:"max width",styles:A`
                    ${ut} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:A`
                    ${ut} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Qo.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Qo.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:A`
                    ${ut} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:A`
                    ${ut} {
                        width: unset;
                    }
                `}].forEach(t)}}),GP=ge({title:_o.tagName,parent:tt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:G.Color,initValue:""},"Hover color":{controlType:G.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:i}){const o=A`
                        ${_o.cssVars["vira-link-hover-color"].name}: ${Pe(i["Hover color"]||"inherit")};
                        color: ${Pe(i["CSS Color"]||"inherit")};
                    `;return h`
                        <${_o.assign(n)} style=${o}>My Link</${_o}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),ZP=ge({title:In.tagName,parent:tt,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return h`
                    <button
                        ${z("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${In.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${z(In.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${In}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:A`
                ${In} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${In.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return h`
                    <button
                        ${z("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${In.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${z(In.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${In}>
                `}})}}),aa=A`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,yd=h`
    <${Cn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${Cn.slotNames.large}>Large</div>
        <div class="small" slot=${Cn.slotNames.small}>Small</div>
    </${Cn}>
`,Wo={max:120,min:25,default:80},Ig=We()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":Aa(Wo.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const i=x1.isNumber(SD(Fx({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Wo.default;(i>=Wo.max||i<=Wo.min)&&t({increment:e.increment*-1}),_1({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:Aa(i+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return h`
            <slot></slot>
        `}}),Og=We()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":Aa(Wo.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:A`
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
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return h`
            <${Cn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${Cn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${Cn.slotNames.small}>Small</div>
            </${Cn}>
        `}}),HP=ge({title:Cn.tagName,parent:tt,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:A`
                ${aa}
            `,render(){return yd}}),e({title:"overflowing",styles:A`
                ${aa}

                ${Cn} {
                    max-width: 50px;
                }
            `,render(){return yd}}),e({title:"dynamic size",styles:A`
                ${aa}

                .wrapper {
                    width: ${Wo.max+10}px;
                }
            `,render(){return h`
                    <div class="wrapper">
                        <${Ig}>
                            ${yd}
                        </${Ig}>
                    </div>
                `}}),e({title:"dynamic slot",styles:A`
                ${aa}
            `,render(){return h`
                    <${Og}></${Og}>
                `}})}}),JP=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:A`
            :host {
                ${Yt.cssVars["vira-progress-background-color"].name}: red;
                ${Yt.cssVars["vira-progress-foreground-color"].name}: black;
                ${Yt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Yt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:A`
            :host {
                ${Yt.cssVars["vira-progress-background-color"].name}: red;
                ${Yt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Yt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Yt} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:A`
            :host {
                ${Yt.cssVars["vira-progress-background-color"].name}: red;
                ${Yt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Yt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Yt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],YP=ge({parent:tt,title:Yt.tagName,defineExamples({defineExample:e}){JP.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,render(){return h`
                        <${Yt.assign({value:50,...t.inputs})}></${Yt}>
                    `}})})}}),At=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],XP=[{title:"basic",inputs:{options:At}},{title:"with really long option",inputs:{options:[...At,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:At,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:At,disabled:!0}},{title:"error",inputs:{options:At,hasError:!0}},{title:"with icon",inputs:{options:At,icon:qr}},{title:"custom width",inputs:{options:At},styles:A`
            ${it} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:At,icon:qr},styles:A`
            ${it} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:At,icon:qr},styles:A`
            ${it} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:At,label:"Pick an option"}},{title:"with long label",inputs:{options:At,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:At,label:"Pick a really really really really long option"},styles:A`
            ${it} {
                width: unset;
            }
        `}],QP=ge({parent:tt,title:it.tagName,defineExamples({defineExample:e}){XP.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return h`
                        <${it.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${z(it.events.valueChange,i=>{n({selected:i.detail})})}
                        ></${it}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return h`
                    <${it.assign({options:At,value:At[0]?.value})}></${it}>
                `}}),e({title:"force update",render(){return h`
                    <${Bg}></${Bg}>
                `}})}}),Bg=We()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=At.findIndex(i=>i.value===t.value),n=dn.isDefined(At[(r+1)%At.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return h`
            <${it.assign({options:At,value:e.value})}></${it}>
        `}}),eN=[tt,$P,hh,L2],tN=[IP,OP,RP,LP,jP,_P,VP,WP,zP,qP,KP,GP,EP,SP,kP,ZP,HP,TP,MP,YP,QP].sort((e,t)=>e.title.localeCompare(t.title)),rN=[...tN,xP,NP,...DP],nN=[...eN,...rN];Ao()({tagName:"vira-book-app",styles:A`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${hd} {
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
            <${hd.assign({internalRouterConfig:{basePath:sh("vira"),useInternalRouter:!0},pages:nN,themeColor:"#33ccff"})}>
                <h1 slot=${An.NavHeader}>Vira</h1>
            </${hd}>
        `}});export{Ao as d,h};
