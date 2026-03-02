(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Yt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(Yt||(Yt={}));function Sc(e,t=r=>r){const r=new Map;return e.filter(n=>{const o=t(n);return r.get(o)?!1:(r.set(o,n),!0)})}class $h{diff(t,r,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const i=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(i,n)),l=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,l,n,o)}diffWithOptionsObj(t,r,n,o){var i;const s=E=>{if(E=this.postProcess(E,n),o){setTimeout(function(){o(E)},0);return}else return E},a=r.length,l=t.length;let c=1,d=a+l;n.maxEditLength!=null&&(d=Math.min(d,n.maxEditLength));const f=(i=n.timeout)!==null&&i!==void 0?i:1/0,h=Date.now()+f,m=[{oldPos:-1,lastComponent:void 0}];let y=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=l&&y+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let $=-1/0,k=1/0;const x=()=>{for(let E=Math.max($,-c);E<=Math.min(k,c);E+=2){let N;const R=m[E-1],q=m[E+1];R&&(m[E-1]=void 0);let ie=!1;if(q){const me=q.oldPos-E;ie=q&&0<=me&&me<a}const Ce=R&&R.oldPos+1<l;if(!ie&&!Ce){m[E]=void 0;continue}if(!Ce||ie&&R.oldPos<q.oldPos?N=this.addToPath(q,!0,!1,0,n):N=this.addToPath(R,!1,!0,1,n),y=this.extractCommon(N,r,t,E,n),N.oldPos+1>=l&&y+1>=a)return s(this.buildValues(N.lastComponent,r,t))||!0;m[E]=N,N.oldPos+1>=l&&(k=Math.min(k,E-1)),y+1>=a&&($=Math.max($,E+1))}c++};if(o)(function E(){setTimeout(function(){if(c>d||Date.now()>h)return o(void 0);x()||E()},0)})();else for(;c<=d&&Date.now()<=h;){const E=x();if(E)return E}}addToPath(t,r,n,o,i){const s=t.lastComponent;return s&&!i.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+o,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,o,i){const s=r.length,a=n.length;let l=t.oldPos,c=l-o,d=0;for(;c+1<s&&l+1<a&&this.equals(n[l+1],r[c+1],i);)c++,l++,d++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return d&&!i.oneChangePerToken&&(t.lastComponent={count:d,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=l,c}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const s=o.length;let a=0,l=0,c=0;for(;a<s;a++){const d=o[a];if(d.removed)d.value=this.join(n.slice(c,c+d.count)),c+=d.count;else{if(!d.added&&this.useLongestToken){let f=r.slice(l,l+d.count);f=f.map(function(h,m){const y=n[c+m];return y.length>h.length?y:h}),d.value=this.join(f)}else d.value=this.join(r.slice(l,l+d.count));l+=d.count,d.added||(c+=d.count)}}return o}}function Fg(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function Mg(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function u0(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function c0(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function ka(e,t){return u0(e,t,"")}function su(e,t){return c0(e,t,"")}function Sg(e,t){return t.slice(0,uk(e,t))}function uk(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const o=Array(n);let i=0;o[0]=0;for(let s=1;s<n;s++){for(t[s]==t[i]?o[s]=o[i]:o[s]=i;i>0&&t[s]!=t[i];)i=o[i];t[s]==t[i]&&i++}i=0;for(let s=r;s<e.length;s++){for(;i>0&&e[s]!=t[i];)i=o[i];e[s]==t[i]&&i++}return i}function xa(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function No(e){const t=e.match(/^\s*/);return t?t[0]:""}const Vu="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",ck=new RegExp(`[${Vu}]+|\\s+|[^${Vu}]`,"ug");class dk extends $h{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const l=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(l)?n[n.length-1]+=l:n.push(l)}}else n=t.match(ck)||[];const o=[];let i=null;return n.forEach(s=>{/\s/.test(s)?i==null?o.push(s):o.push(o.pop()+s):i!=null&&/\s/.test(i)?o[o.length-1]==i?o.push(o.pop()+s):o.push(i+s):o.push(s),i=s}),o}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,o=null,i=null;return t.forEach(s=>{s.added?o=s:s.removed?i=s:((o||i)&&Tg(n,i,o,s),n=s,o=null,i=null)}),(o||i)&&Tg(n,i,o,null),t}}const fk=new dk;function hk(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?pk(e,t,r):fk.diff(e,t,r)}function Tg(e,t,r,n){if(t&&r){const o=No(t.value),i=xa(t.value),s=No(r.value),a=xa(r.value);if(e){const l=Fg(o,s);e.value=c0(e.value,s,l),t.value=ka(t.value,l),r.value=ka(r.value,l)}if(n){const l=Mg(i,a);n.value=u0(n.value,a,l),t.value=su(t.value,l),r.value=su(r.value,l)}}else if(r){if(e){const o=No(r.value);r.value=r.value.substring(o.length)}if(n){const o=No(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=No(n.value),i=No(t.value),s=xa(t.value),a=Fg(o,i);t.value=ka(t.value,a);const l=Mg(ka(o,a),s);t.value=su(t.value,l),n.value=u0(n.value,o,l),e.value=c0(e.value,o,o.slice(0,o.length-l.length))}else if(n){const o=No(n.value),i=xa(t.value),s=Sg(i,o);t.value=su(t.value,s)}else if(e){const o=xa(e.value),i=No(t.value),s=Sg(o,i);t.value=ka(t.value,s)}}class mk extends $h{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Vu}]+|[^\\S\\n\\r]+|[^${Vu}]`,"ug");return t.match(r)||[]}}const gk=new mk;function pk(e,t,r){return gk.diff(e,t,r)}class bk extends $h{constructor(){super(...arguments),this.tokenize=wk}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const yk=new bk;function vk(e,t,r){return yk.diff(e,t,r)}function wk(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const i=n[o];o%2&&!t.newlineIsToken?r[r.length-1]+=i:r.push(i)}return r}function Ng(e,t){return Ay(e,new Map)}function Ay(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((o,i)=>o[0].localeCompare(i[0])).forEach(([o,i])=>{const s=Ay(i,t);n[o]=s}),n}else return e}var $k=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,kk=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,xk=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Od={Space_Separator:$k,ID_Start:kk,ID_Continue:xk},gt={isSpaceSeparator(e){return typeof e=="string"&&Od.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Od.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Od.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let d0,pr,mo,qu,Yo,Cn,_t,kh,Ha;var Dk=function(t,r){d0=String(t),pr="start",mo=[],qu=0,Yo=1,Cn=0,_t=void 0,kh=void 0,Ha=void 0;do _t=Ak(),Fk[pr]();while(_t.type!=="eof");return typeof r=="function"?f0({"":Ha},"",r):Ha};function f0(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const i=String(o),s=f0(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const i=f0(n,o,r);i===void 0?delete n[o]:Object.defineProperty(n,o,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let ce,le,Ba,uo,ve;function Ak(){for(ce="default",le="",Ba=!1,uo=1;;){ve=ko();const e=Ey[ce]();if(e)return e}}function ko(){if(d0[qu])return String.fromCodePoint(d0.codePointAt(qu))}function P(){const e=ko();return e===`
`?(Yo++,Cn=0):e?Cn+=e.length:Cn++,e&&(qu+=e.length),e}const Ey={default(){switch(ve){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":P();return;case"/":P(),ce="comment";return;case void 0:return P(),Je("eof")}if(gt.isSpaceSeparator(ve)){P();return}return Ey[pr]()},comment(){switch(ve){case"*":P(),ce="multiLineComment";return;case"/":P(),ce="singleLineComment";return}throw Ye(P())},multiLineComment(){switch(ve){case"*":P(),ce="multiLineCommentAsterisk";return;case void 0:throw Ye(P())}P()},multiLineCommentAsterisk(){switch(ve){case"*":P();return;case"/":P(),ce="default";return;case void 0:throw Ye(P())}P(),ce="multiLineComment"},singleLineComment(){switch(ve){case`
`:case"\r":case"\u2028":case"\u2029":P(),ce="default";return;case void 0:return P(),Je("eof")}P()},value(){switch(ve){case"{":case"[":return Je("punctuator",P());case"n":return P(),pi("ull"),Je("null",null);case"t":return P(),pi("rue"),Je("boolean",!0);case"f":return P(),pi("alse"),Je("boolean",!1);case"-":case"+":P()==="-"&&(uo=-1),ce="sign";return;case".":le=P(),ce="decimalPointLeading";return;case"0":le=P(),ce="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":le=P(),ce="decimalInteger";return;case"I":return P(),pi("nfinity"),Je("numeric",1/0);case"N":return P(),pi("aN"),Je("numeric",NaN);case'"':case"'":Ba=P()==='"',le="",ce="string";return}throw Ye(P())},identifierNameStartEscape(){if(ve!=="u")throw Ye(P());P();const e=h0();switch(e){case"$":case"_":break;default:if(!gt.isIdStartChar(e))throw Pg();break}le+=e,ce="identifierName"},identifierName(){switch(ve){case"$":case"_":case"‌":case"‍":le+=P();return;case"\\":P(),ce="identifierNameEscape";return}if(gt.isIdContinueChar(ve)){le+=P();return}return Je("identifier",le)},identifierNameEscape(){if(ve!=="u")throw Ye(P());P();const e=h0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!gt.isIdContinueChar(e))throw Pg();break}le+=e,ce="identifierName"},sign(){switch(ve){case".":le=P(),ce="decimalPointLeading";return;case"0":le=P(),ce="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":le=P(),ce="decimalInteger";return;case"I":return P(),pi("nfinity"),Je("numeric",uo*(1/0));case"N":return P(),pi("aN"),Je("numeric",NaN)}throw Ye(P())},zero(){switch(ve){case".":le+=P(),ce="decimalPoint";return;case"e":case"E":le+=P(),ce="decimalExponent";return;case"x":case"X":le+=P(),ce="hexadecimal";return}return Je("numeric",uo*0)},decimalInteger(){switch(ve){case".":le+=P(),ce="decimalPoint";return;case"e":case"E":le+=P(),ce="decimalExponent";return}if(gt.isDigit(ve)){le+=P();return}return Je("numeric",uo*Number(le))},decimalPointLeading(){if(gt.isDigit(ve)){le+=P(),ce="decimalFraction";return}throw Ye(P())},decimalPoint(){switch(ve){case"e":case"E":le+=P(),ce="decimalExponent";return}if(gt.isDigit(ve)){le+=P(),ce="decimalFraction";return}return Je("numeric",uo*Number(le))},decimalFraction(){switch(ve){case"e":case"E":le+=P(),ce="decimalExponent";return}if(gt.isDigit(ve)){le+=P();return}return Je("numeric",uo*Number(le))},decimalExponent(){switch(ve){case"+":case"-":le+=P(),ce="decimalExponentSign";return}if(gt.isDigit(ve)){le+=P(),ce="decimalExponentInteger";return}throw Ye(P())},decimalExponentSign(){if(gt.isDigit(ve)){le+=P(),ce="decimalExponentInteger";return}throw Ye(P())},decimalExponentInteger(){if(gt.isDigit(ve)){le+=P();return}return Je("numeric",uo*Number(le))},hexadecimal(){if(gt.isHexDigit(ve)){le+=P(),ce="hexadecimalInteger";return}throw Ye(P())},hexadecimalInteger(){if(gt.isHexDigit(ve)){le+=P();return}return Je("numeric",uo*Number(le))},string(){switch(ve){case"\\":P(),le+=Ek();return;case'"':if(Ba)return P(),Je("string",le);le+=P();return;case"'":if(!Ba)return P(),Je("string",le);le+=P();return;case`
`:case"\r":throw Ye(P());case"\u2028":case"\u2029":Mk(ve);break;case void 0:throw Ye(P())}le+=P()},start(){switch(ve){case"{":case"[":return Je("punctuator",P())}ce="value"},beforePropertyName(){switch(ve){case"$":case"_":le=P(),ce="identifierName";return;case"\\":P(),ce="identifierNameStartEscape";return;case"}":return Je("punctuator",P());case'"':case"'":Ba=P()==='"',ce="string";return}if(gt.isIdStartChar(ve)){le+=P(),ce="identifierName";return}throw Ye(P())},afterPropertyName(){if(ve===":")return Je("punctuator",P());throw Ye(P())},beforePropertyValue(){ce="value"},afterPropertyValue(){switch(ve){case",":case"}":return Je("punctuator",P())}throw Ye(P())},beforeArrayValue(){if(ve==="]")return Je("punctuator",P());ce="value"},afterArrayValue(){switch(ve){case",":case"]":return Je("punctuator",P())}throw Ye(P())},end(){throw Ye(P())}};function Je(e,t){return{type:e,value:t,line:Yo,column:Cn}}function pi(e){for(const t of e){if(ko()!==t)throw Ye(P());P()}}function Ek(){switch(ko()){case"b":return P(),"\b";case"f":return P(),"\f";case"n":return P(),`
`;case"r":return P(),"\r";case"t":return P(),"	";case"v":return P(),"\v";case"0":if(P(),gt.isDigit(ko()))throw Ye(P());return"\0";case"x":return P(),Ck();case"u":return P(),h0();case`
`:case"\u2028":case"\u2029":return P(),"";case"\r":return P(),ko()===`
`&&P(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Ye(P());case void 0:throw Ye(P())}return P()}function Ck(){let e="",t=ko();if(!gt.isHexDigit(t)||(e+=P(),t=ko(),!gt.isHexDigit(t)))throw Ye(P());return e+=P(),String.fromCodePoint(parseInt(e,16))}function h0(){let e="",t=4;for(;t-- >0;){const r=ko();if(!gt.isHexDigit(r))throw Ye(P());e+=P()}return String.fromCodePoint(parseInt(e,16))}const Fk={start(){if(_t.type==="eof")throw bi();Bd()},beforePropertyName(){switch(_t.type){case"identifier":case"string":kh=_t.value,pr="afterPropertyName";return;case"punctuator":au();return;case"eof":throw bi()}},afterPropertyName(){if(_t.type==="eof")throw bi();pr="beforePropertyValue"},beforePropertyValue(){if(_t.type==="eof")throw bi();Bd()},beforeArrayValue(){if(_t.type==="eof")throw bi();if(_t.type==="punctuator"&&_t.value==="]"){au();return}Bd()},afterPropertyValue(){if(_t.type==="eof")throw bi();switch(_t.value){case",":pr="beforePropertyName";return;case"}":au()}},afterArrayValue(){if(_t.type==="eof")throw bi();switch(_t.value){case",":pr="beforeArrayValue";return;case"]":au()}},end(){}};function Bd(){let e;switch(_t.type){case"punctuator":switch(_t.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=_t.value;break}if(Ha===void 0)Ha=e;else{const t=mo[mo.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,kh,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")mo.push(e),Array.isArray(e)?pr="beforeArrayValue":pr="beforePropertyName";else{const t=mo[mo.length-1];t==null?pr="end":Array.isArray(t)?pr="afterArrayValue":pr="afterPropertyValue"}}function au(){mo.pop();const e=mo[mo.length-1];e==null?pr="end":Array.isArray(e)?pr="afterArrayValue":pr="afterPropertyValue"}function Ye(e){return Wu(e===void 0?`JSON5: invalid end of input at ${Yo}:${Cn}`:`JSON5: invalid character '${Cy(e)}' at ${Yo}:${Cn}`)}function bi(){return Wu(`JSON5: invalid end of input at ${Yo}:${Cn}`)}function Pg(){return Cn-=5,Wu(`JSON5: invalid identifier character at ${Yo}:${Cn}`)}function Mk(e){console.warn(`JSON5: '${Cy(e)}' in strings is not valid ECMAScript; consider escaping`)}function Cy(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Wu(e){const t=new SyntaxError(e);return t.lineNumber=Yo,t.columnNumber=Cn,t}var Sk=function(t,r,n){const o=[];let i="",s,a,l="",c;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,c=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const $ of r){let k;typeof $=="string"?k=$:(typeof $=="number"||$ instanceof String||$ instanceof Number)&&(k=String($)),k!==void 0&&s.indexOf(k)<0&&s.push(k)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),l="          ".substr(0,n)):typeof n=="string"&&(l=n.substr(0,10)),d("",{"":t});function d($,k){let x=k[$];switch(x!=null&&(typeof x.toJSON5=="function"?x=x.toJSON5($):typeof x.toJSON=="function"&&(x=x.toJSON($))),a&&(x=a.call(k,$,x)),x instanceof Number?x=Number(x):x instanceof String?x=String(x):x instanceof Boolean&&(x=x.valueOf()),x){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof x=="string")return f(x);if(typeof x=="number")return String(x);if(typeof x=="object")return Array.isArray(x)?y(x):h(x)}function f($){const k={"'":.1,'"':.2},x={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let E="";for(let R=0;R<$.length;R++){const q=$[R];switch(q){case"'":case'"':k[q]++,E+=q;continue;case"\0":if(gt.isDigit($[R+1])){E+="\\x00";continue}}if(x[q]){E+=x[q];continue}if(q<" "){let ie=q.charCodeAt(0).toString(16);E+="\\x"+("00"+ie).substring(ie.length);continue}E+=q}const N=c||Object.keys(k).reduce((R,q)=>k[R]<k[q]?R:q);return E=E.replace(new RegExp(N,"g"),x[N]),N+E+N}function h($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let k=i;i=i+l;let x=s||Object.keys($),E=[];for(const R of x){const q=d(R,$);if(q!==void 0){let ie=m(R)+":";l!==""&&(ie+=" "),ie+=q,E.push(ie)}}let N;if(E.length===0)N="{}";else{let R;if(l==="")R=E.join(","),N="{"+R+"}";else{let q=`,
`+i;R=E.join(q),N=`{
`+i+R+`,
`+k+"}"}}return o.pop(),i=k,N}function m($){if($.length===0)return f($);const k=String.fromCodePoint($.codePointAt(0));if(!gt.isIdStartChar(k))return f($);for(let x=k.length;x<$.length;x++)if(!gt.isIdContinueChar(String.fromCodePoint($.codePointAt(x))))return f($);return $}function y($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let k=i;i=i+l;let x=[];for(let N=0;N<$.length;N++){const R=d(String(N),$);x.push(R!==void 0?R:"null")}let E;if(x.length===0)E="[]";else if(l==="")E="["+x.join(",")+"]";else{let N=`,
`+i,R=x.join(N);E=`[
`+i+R+`,
`+k+"]"}return o.pop(),i=k,E}};const Tk={parse:Dk,stringify:Sk};var Nk=Tk;const Fy="__@@augment-vir-undefined-sentinel@@__",Pk=new RegExp(`['"]${Fy}['"]`);function v(e,t){if(typeof e=="string")return e;try{return Nk.stringify(e,(n,o)=>o===void 0?Fy:typeof o=="bigint"?Number(o):o,t||void 0).split(Pk).join("undefined")}catch{return String(e)}}var Ik=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Fn;(function(e){e.Node="node",e.Web="web"})(Fn||(Fn={}));function Ok(){return Ik?Fn.Node:Fn.Web}const My=Ok();function xh(e){return My===e}function Sy(e){return e[My]()}function Bk(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",o=n?vk:hk,i=[r?"":`
`,v(t&&typeof t=="object"&&!Array.isArray(t)?Ng(t):t,4),`
`].join(""),s=[r?"":`
`,v(e&&typeof e=="object"&&!Array.isArray(e)?Ng(e):e,4),`
`].join(""),a=Rk(n,o(i,s)),l=xh(Fn.Node);return[[l?yo.Green:""," +added (unexpected, added in actual)",l?yo.Red:""," -missing (expected, missing from actual)",l?yo.Reset:""].join(""),r?`

`:`
`,a].join("")}var yo;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(yo||(yo={}));var Ku;(function(e){e.Added="+",e.Removed="-"})(Ku||(Ku={}));function Rk(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(o=>Ig(o,n)).join(`
`)).join(""):t.map(n=>Ig(void 0,n)).join("")}function Ig(e,t){if(e!=null&&!e)return"";const r=xh(Fn.Node),n=t.added?Ku.Added:t.removed?Ku.Removed:e==null?"":" ",o=t.added?yo.Green:t.removed?yo.Red:yo.Reset;return[r?o:"",n,e??t.value,yo.Reset].join("")}function je(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Lk(e){return je(e).filter(t=>isNaN(Number(t)))}function br(e){return Lk(e).map(r=>e[r])}const jk=[".",":",";",",","?","!"],_k=new RegExp(`[${jk.join("")}]+$`);function Og(e){return e.replace(_k,"")}function Wt(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):v(e)}function Ji(...e){const t=e.map(i=>Wt(i)).filter(i=>!!Og(i)),r=t[t.length-1]?.endsWith("."),n=t.map(i=>Og(Wt(i)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function mt(e){return e instanceof Error?e:new Error(Wt(e))}function ta(e,t){const r=mt(e),n=Ji(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var M;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(M||(M={}));var K;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(K||(K={}));K.ClientError,K.ServerError;M.Continue+"",K.Information,M.SwitchingProtocols+"",K.Information,M.Processing+"",K.Information,M.EarlyHints+"",K.Information,M.Ok+"",K.Success,M.Created+"",K.Success,M.Accepted+"",K.Success,M.NonAuthoritativeInformation+"",K.Success,M.NoContent+"",K.Success,M.ResetContent+"",K.Success,M.PartialContent+"",K.Success,M.MultiStatus+"",K.Success,M.AlreadyReported+"",K.Success,M.ImUsed+"",K.Success,M.MultipleChoices+"",K.Redirect,M.MovedPermanently+"",K.Redirect,M.Found+"",K.Redirect,M.SeeOther+"",K.Redirect,M.NotModified+"",K.Redirect,M.UseProxy+"",K.Redirect,M.Unused+"",K.Redirect,M.TemporaryRedirect+"",K.Redirect,M.PermanentRedirect+"",K.Redirect,M.BadRequest+"",K.ClientError,M.Unauthorized+"",K.ClientError,M.PaymentRequired+"",K.ClientError,M.Forbidden+"",K.ClientError,M.NotFound+"",K.ClientError,M.MethodNotAllowed+"",K.ClientError,M.NotAcceptable+"",K.ClientError,M.ProxyAuthenticationRequired+"",K.ClientError,M.RequestTimeout+"",K.ClientError,M.Conflict+"",K.ClientError,M.Gone+"",K.ClientError,M.LengthRequired+"",K.ClientError,M.PreconditionFailed+"",K.ClientError,M.PayloadTooLarge+"",K.ClientError,M.UriTooLong+"",K.ClientError,M.UnsupportedMediaType+"",K.ClientError,M.RangeNotSatisfiable+"",K.ClientError,M.ExpectationFailed+"",K.ClientError,M.ImATeapot+"",K.ClientError,M.MisdirectedRequest+"",K.ClientError,M.UnprocessableContent+"",K.ClientError,M.Locked+"",K.ClientError,M.FailedDependency+"",K.ClientError,M.TooEarly+"",K.ClientError,M.UpgradeRequired+"",K.ClientError,M.PreconditionRequired+"",K.ClientError,M.TooManyRequests+"",K.ClientError,M.RequestHeaderFieldsTooLarge+"",K.ClientError,M.UnavailableForLegalReasons+"",K.ClientError,M.InternalServerError+"",K.ServerError,M.NotImplemented+"",K.ServerError,M.BadGateway+"",K.ServerError,M.ServiceUnavailable+"",K.ServerError,M.GatewayTimeout+"",K.ServerError,M.HttpVersionNotSupported+"",K.ServerError,M.VariantAlsoNegotiates+"",K.ServerError,M.InsufficientStorage+"",K.ServerError,M.LoopDetected+"",K.ServerError,M.NotExtended+"",K.ServerError,M.NetworkAuthenticationRequired+"",K.ServerError;const Pu={[K.Information]:[M.Continue,M.SwitchingProtocols,M.Processing,M.EarlyHints],[K.Success]:[M.Ok,M.Created,M.Accepted,M.NonAuthoritativeInformation,M.NoContent,M.ResetContent,M.PartialContent,M.MultiStatus,M.AlreadyReported,M.ImUsed],[K.Redirect]:[M.MultipleChoices,M.MovedPermanently,M.Found,M.SeeOther,M.NotModified,M.UseProxy,M.Unused,M.TemporaryRedirect,M.PermanentRedirect],[K.ClientError]:[M.BadRequest,M.Unauthorized,M.PaymentRequired,M.Forbidden,M.NotFound,M.MethodNotAllowed,M.NotAcceptable,M.ProxyAuthenticationRequired,M.RequestTimeout,M.Conflict,M.Gone,M.LengthRequired,M.PreconditionFailed,M.PayloadTooLarge,M.UriTooLong,M.UnsupportedMediaType,M.RangeNotSatisfiable,M.ExpectationFailed,M.ImATeapot,M.MisdirectedRequest,M.UnprocessableContent,M.Locked,M.FailedDependency,M.TooEarly,M.UpgradeRequired,M.PreconditionRequired,M.TooManyRequests,M.RequestHeaderFieldsTooLarge,M.UnavailableForLegalReasons],[K.ServerError]:[M.InternalServerError,M.NotImplemented,M.BadGateway,M.ServiceUnavailable,M.GatewayTimeout,M.HttpVersionNotSupported,M.VariantAlsoNegotiates,M.InsufficientStorage,M.LoopDetected,M.NotExtended,M.NetworkAuthenticationRequired]};function Dh({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Gu{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(mt(n))}})}}class Yi extends Error{}class Uk extends Yi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class zk extends Yi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Vk extends Yi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class xs extends Yi{}class Ty extends Yi{constructor(t){super(`Invalid unit ${t}`)}}class lr extends Yi{}class Po extends Yi{constructor(){super("Zone is an abstract class")}}const V="numeric",Mn="short",qr="long",Hu={year:V,month:V,day:V},Ny={year:V,month:Mn,day:V},qk={year:V,month:Mn,day:V,weekday:Mn},Py={year:V,month:qr,day:V},Iy={year:V,month:qr,day:V,weekday:qr},Oy={hour:V,minute:V},By={hour:V,minute:V,second:V},Ry={hour:V,minute:V,second:V,timeZoneName:Mn},Ly={hour:V,minute:V,second:V,timeZoneName:qr},jy={hour:V,minute:V,hourCycle:"h23"},_y={hour:V,minute:V,second:V,hourCycle:"h23"},Uy={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:Mn},zy={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:qr},Vy={year:V,month:V,day:V,hour:V,minute:V},qy={year:V,month:V,day:V,hour:V,minute:V,second:V},Wy={year:V,month:Mn,day:V,hour:V,minute:V},Ky={year:V,month:Mn,day:V,hour:V,minute:V,second:V},Wk={year:V,month:Mn,day:V,weekday:Mn,hour:V,minute:V},Gy={year:V,month:qr,day:V,hour:V,minute:V,timeZoneName:Mn},Hy={year:V,month:qr,day:V,hour:V,minute:V,second:V,timeZoneName:Mn},Zy={year:V,month:qr,day:V,weekday:qr,hour:V,minute:V,timeZoneName:qr},Jy={year:V,month:qr,day:V,weekday:qr,hour:V,minute:V,second:V,timeZoneName:qr};class Pl{get type(){throw new Po}get name(){throw new Po}get ianaName(){return this.name}get isUniversal(){throw new Po}offsetName(t,r){throw new Po}formatOffset(t,r){throw new Po}offset(t){throw new Po}equals(t){throw new Po}get isValid(){throw new Po}}let Rd=null;class Tc extends Pl{static get instance(){return Rd===null&&(Rd=new Tc),Rd}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return av(t,r,n)}formatOffset(t,r){return Za(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const m0=new Map;function Kk(e){let t=m0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),m0.set(e,t)),t}const Gk={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Hk(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,s,a,l,c,d]=n;return[s,o,i,a,l,c,d]}function Zk(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:s}=r[o],a=Gk[i];i==="era"?n[a]=s:re(a)||(n[a]=parseInt(s,10))}return n}const Ld=new Map;class Do extends Pl{static create(t){let r=Ld.get(t);return r===void 0&&Ld.set(t,r=new Do(t)),r}static resetCache(){Ld.clear(),m0.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Do.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return av(t,r,n,this.name)}formatOffset(t,r){return Za(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=Kk(this.name);let[o,i,s,a,l,c,d]=n.formatToParts?Zk(n,r):Hk(n,r);a==="BC"&&(o=-Math.abs(o)+1);const h=Pc({year:o,month:i,day:s,hour:l===24?0:l,minute:c,second:d,millisecond:0});let m=+r;const y=m%1e3;return m-=y>=0?y:1e3+y,(h-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Bg={};function Jk(e,t={}){const r=JSON.stringify([e,t]);let n=Bg[r];return n||(n=new Intl.ListFormat(e,t),Bg[r]=n),n}const g0=new Map;function p0(e,t={}){const r=JSON.stringify([e,t]);let n=g0.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),g0.set(r,n)),n}const b0=new Map;function Yk(e,t={}){const r=JSON.stringify([e,t]);let n=b0.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),b0.set(r,n)),n}const y0=new Map;function Xk(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=y0.get(o);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),y0.set(o,i)),i}let Ra=null;function Qk(){return Ra||(Ra=new Intl.DateTimeFormat().resolvedOptions().locale,Ra)}const v0=new Map;function Yy(e){let t=v0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),v0.set(e,t)),t}const w0=new Map;function ex(e){let t=w0.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...Xy,...t}),w0.set(e,t)}return t}function tx(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=p0(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=p0(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:s}=n;return[o,i,s]}}function rx(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function nx(e){const t=[];for(let r=1;r<=12;r++){const n=ne.utc(2009,r,1);t.push(e(n))}return t}function ox(e){const t=[];for(let r=1;r<=7;r++){const n=ne.utc(2016,11,13+r);t.push(e(n))}return t}function lu(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function ix(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Yy(e.locale).numberingSystem==="latn"}class sx{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=Yk(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Mh(t,3);return wt(r,this.padTo)}}}class ax{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Do.create(a).valid?(o=a,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=p0(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class lx{constructor(t,r,n){this.opts={style:"long",...n},!r&&iv()&&(this.rtf=Xk(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Sx(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Xy={firstDay:1,minimalDays:4,weekend:[6,7]};class Pe{static fromOpts(t){return Pe.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const s=t||it.defaultLocale,a=s||(i?"en-US":Qk()),l=r||it.defaultNumberingSystem,c=n||it.defaultOutputCalendar,d=k0(o)||it.defaultWeekSettings;return new Pe(a,l,c,d,s)}static resetCache(){Ra=null,g0.clear(),b0.clear(),y0.clear(),v0.clear(),w0.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return Pe.create(t,r,n,o)}constructor(t,r,n,o,i){const[s,a,l]=tx(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||l||null,this.weekSettings=o,this.intl=rx(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=ix(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Pe.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,k0(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return lu(this,t,cv,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const o=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";if(!this.monthsCache[i][t]){const s=n?a=>this.dtFormatter(a,o).format():a=>this.extract(a,o,"month");this.monthsCache[i][t]=nx(s)}return this.monthsCache[i][t]})}weekdays(t,r=!1){return lu(this,t,hv,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=ox(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return lu(this,void 0,()=>mv,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[ne.utc(2016,11,13,9),ne.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return lu(this,t,gv,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[ne.utc(-40,1,1),ne.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),s=i.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new sx(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new ax(t,this.intl,r)}relFormatter(t={}){return new lx(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Jk(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Yy(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:sv()?ex(this.locale):Xy}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let jd=null;class yr extends Pl{static get utcInstance(){return jd===null&&(jd=new yr(0)),jd}static instance(t){return t===0?yr.utcInstance:new yr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new yr(Ic(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Za(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Za(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Za(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class ux extends Pl{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function _o(e,t){if(re(e)||e===null)return t;if(e instanceof Pl)return e;if(gx(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Tc.instance:r==="utc"||r==="gmt"?yr.utcInstance:yr.parseSpecifier(r)||Do.create(e)}else return Ko(e)?yr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new ux(e)}const Ah={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Rg={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},cx=Ah.hanidec.replace(/[\[|\]]/g,"").split("");function dx(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Ah.hanidec)!==-1)t+=cx.indexOf(e[r]);else for(const o in Rg){const[i,s]=Rg[o];n>=i&&n<=s&&(t+=n-i)}}return parseInt(t,10)}else return t}const $0=new Map;function fx(){$0.clear()}function $n({numberingSystem:e},t=""){const r=e||"latn";let n=$0.get(r);n===void 0&&(n=new Map,$0.set(r,n));let o=n.get(t);return o===void 0&&(o=new RegExp(`${Ah[r]}${t}`),n.set(t,o)),o}let Lg=()=>Date.now(),jg="system",_g=null,Ug=null,zg=null,Vg=60,qg,Wg=null;class it{static get now(){return Lg}static set now(t){Lg=t}static set defaultZone(t){jg=t}static get defaultZone(){return _o(jg,Tc.instance)}static get defaultLocale(){return _g}static set defaultLocale(t){_g=t}static get defaultNumberingSystem(){return Ug}static set defaultNumberingSystem(t){Ug=t}static get defaultOutputCalendar(){return zg}static set defaultOutputCalendar(t){zg=t}static get defaultWeekSettings(){return Wg}static set defaultWeekSettings(t){Wg=k0(t)}static get twoDigitCutoffYear(){return Vg}static set twoDigitCutoffYear(t){Vg=t%100}static get throwOnInvalid(){return qg}static set throwOnInvalid(t){qg=t}static resetCaches(){Pe.resetCache(),Do.resetCache(),ne.resetCache(),fx()}}class An{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Qy=[0,31,59,90,120,151,181,212,243,273,304,334],ev=[0,31,60,91,121,152,182,213,244,274,305,335];function fn(e,t){return new An("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Eh(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function tv(e,t,r){return r+(Il(e)?ev:Qy)[t-1]}function rv(e,t){const r=Il(e)?ev:Qy,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function Ch(e,t){return(e-t+7)%7+1}function Zu(e,t=4,r=1){const{year:n,month:o,day:i}=e,s=tv(n,o,i),a=Ch(Eh(n,o,i),r);let l=Math.floor((s-a+14-t)/7),c;return l<1?(c=n-1,l=ul(c,t,r)):l>ul(n,t,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:a,...Oc(e)}}function Kg(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,s=Ch(Eh(n,1,t),r),a=Fs(n);let l=o*7+i-s-7+t,c;l<1?(c=n-1,l+=Fs(c)):l>a?(c=n+1,l-=Fs(n)):c=n;const{month:d,day:f}=rv(c,l);return{year:c,month:d,day:f,...Oc(e)}}function _d(e){const{year:t,month:r,day:n}=e,o=tv(t,r,n);return{year:t,ordinal:o,...Oc(e)}}function Gg(e){const{year:t,ordinal:r}=e,{month:n,day:o}=rv(t,r);return{year:t,month:n,day:o,...Oc(e)}}function Hg(e,t){if(!re(e.localWeekday)||!re(e.localWeekNumber)||!re(e.localWeekYear)){if(!re(e.weekday)||!re(e.weekNumber)||!re(e.weekYear))throw new xs("Cannot mix locale-based week fields with ISO-based week fields");return re(e.localWeekday)||(e.weekday=e.localWeekday),re(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),re(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function hx(e,t=4,r=1){const n=Nc(e.weekYear),o=hn(e.weekNumber,1,ul(e.weekYear,t,r)),i=hn(e.weekday,1,7);return n?o?i?!1:fn("weekday",e.weekday):fn("week",e.weekNumber):fn("weekYear",e.weekYear)}function mx(e){const t=Nc(e.year),r=hn(e.ordinal,1,Fs(e.year));return t?r?!1:fn("ordinal",e.ordinal):fn("year",e.year)}function nv(e){const t=Nc(e.year),r=hn(e.month,1,12),n=hn(e.day,1,Ju(e.year,e.month));return t?r?n?!1:fn("day",e.day):fn("month",e.month):fn("year",e.year)}function ov(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=hn(t,0,23)||t===24&&r===0&&n===0&&o===0,s=hn(r,0,59),a=hn(n,0,59),l=hn(o,0,999);return i?s?a?l?!1:fn("millisecond",o):fn("second",n):fn("minute",r):fn("hour",t)}function re(e){return typeof e>"u"}function Ko(e){return typeof e=="number"}function Nc(e){return typeof e=="number"&&e%1===0}function gx(e){return typeof e=="string"}function px(e){return Object.prototype.toString.call(e)==="[object Date]"}function iv(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function sv(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function bx(e){return Array.isArray(e)?e:[e]}function Zg(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function yx(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function Bs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function k0(e){if(e==null)return null;if(typeof e!="object")throw new lr("Week settings must be an object");if(!hn(e.firstDay,1,7)||!hn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!hn(t,1,7)))throw new lr("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function hn(e,t,r){return Nc(e)&&e>=t&&e<=r}function vx(e,t){return e-t*Math.floor(e/t)}function wt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function Ro(e){if(!(re(e)||e===null||e===""))return parseInt(e,10)}function yi(e){if(!(re(e)||e===null||e===""))return parseFloat(e)}function Fh(e){if(!(re(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Mh(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function Il(e){return e%4===0&&(e%100!==0||e%400===0)}function Fs(e){return Il(e)?366:365}function Ju(e,t){const r=vx(t-1,12)+1,n=e+(t-r)/12;return r===2?Il(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Pc(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Jg(e,t,r){return-Ch(Eh(e,1,t),r)+t-1}function ul(e,t=4,r=1){const n=Jg(e,t,r),o=Jg(e+1,t,r);return(Fs(e)-n+o)/7}function x0(e){return e>99?e:e>it.twoDigitCutoffYear?1900+e:2e3+e}function av(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const s={timeZoneName:t,...i},a=new Intl.DateTimeFormat(r,s).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function Ic(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function lv(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new lr(`Invalid unit value ${e}`);return t}function Yu(e,t){const r={};for(const n in e)if(Bs(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=lv(o)}return r}function Za(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${wt(r,2)}:${wt(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${wt(r,2)}${wt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Oc(e){return yx(e,["hour","minute","second","millisecond"])}const wx=["January","February","March","April","May","June","July","August","September","October","November","December"],uv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$x=["J","F","M","A","M","J","J","A","S","O","N","D"];function cv(e){switch(e){case"narrow":return[...$x];case"short":return[...uv];case"long":return[...wx];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const dv=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],kx=["M","T","W","T","F","S","S"];function hv(e){switch(e){case"narrow":return[...kx];case"short":return[...fv];case"long":return[...dv];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const mv=["AM","PM"],xx=["Before Christ","Anno Domini"],Dx=["BC","AD"],Ax=["B","A"];function gv(e){switch(e){case"narrow":return[...Ax];case"short":return[...Dx];case"long":return[...xx];default:return null}}function Ex(e){return mv[e.hour<12?0:1]}function Cx(e,t){return hv(t)[e.weekday-1]}function Fx(e,t){return cv(t)[e.month-1]}function Mx(e,t){return gv(t)[e.year<0?0:1]}function Sx(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),l=a===1,c=o[e],d=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return s?`${a} ${d} ago`:`in ${a} ${d}`}function Yg(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Tx={D:Hu,DD:Ny,DDD:Py,DDDD:Iy,t:Oy,tt:By,ttt:Ry,tttt:Ly,T:jy,TT:_y,TTT:Uy,TTTT:zy,f:Vy,ff:Wy,fff:Gy,ffff:Zy,F:qy,FF:Ky,FFF:Hy,FFFF:Jy};class cr{static create(t,r={}){return new cr(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||o)&&i.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",o=!o):o||a===r?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return Tx[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return wt(t,r);const o={...this.opts};return r>0&&(o.padTo=r),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(m,y)=>this.loc.extract(t,m,y),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?Ex(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(m,y)=>n?Fx(t,m):i(y?{month:m}:{month:m,day:"numeric"},"month"),c=(m,y)=>n?Cx(t,m):i(y?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),d=m=>{const y=cr.macroTokenToFormatOpts(m);return y?this.formatWithSystemDefault(t,y):m},f=m=>n?Mx(t,m):i({era:m},"era"),h=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(m)}};return Yg(cr.parseFormat(r),h)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=d=>{switch(d[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},i=(d,f)=>h=>{const m=o(h);if(m){const y=f.isNegativeDuration&&m!==f.largestUnit?n:1;let $;return this.opts.signMode==="negativeLargestOnly"&&m!==f.largestUnit?$="never":this.opts.signMode==="all"?$="always":$="auto",this.num(d.get(m)*y,h.length,$)}else return h},s=cr.parseFormat(r),a=s.reduce((d,{literal:f,val:h})=>f?d:d.concat(h),[]),l=t.shiftTo(...a.map(o).filter(d=>d)),c={isNegativeDuration:l<0,largestUnit:Object.keys(l.values)[0]};return Yg(s,i(l,c))}}const pv=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function ra(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function na(...e){return t=>e.reduce(([r,n,o],i)=>{const[s,a,l]=i(t,o);return[{...r,...s},a||n,l]},[{},null,1]).slice(0,2)}function oa(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function bv(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=Ro(t[r+o]);return[n,null,r+o]}}const yv=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,Nx=`(?:${yv.source}?(?:\\[(${pv.source})\\])?)?`,Sh=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,vv=RegExp(`${Sh.source}${Nx}`),Th=RegExp(`(?:[Tt]${vv.source})?`),Px=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Ix=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ox=/(\d{4})-?(\d{3})/,Bx=bv("weekYear","weekNumber","weekDay"),Rx=bv("year","ordinal"),Lx=/(\d{4})-(\d\d)-(\d\d)/,wv=RegExp(`${Sh.source} ?(?:${yv.source}|(${pv.source}))?`),jx=RegExp(`(?: ${wv.source})?`);function Ms(e,t,r){const n=e[t];return re(n)?r:Ro(n)}function _x(e,t){return[{year:Ms(e,t),month:Ms(e,t+1,1),day:Ms(e,t+2,1)},null,t+3]}function ia(e,t){return[{hours:Ms(e,t,0),minutes:Ms(e,t+1,0),seconds:Ms(e,t+2,0),milliseconds:Fh(e[t+3])},null,t+4]}function Ol(e,t){const r=!e[t]&&!e[t+1],n=Ic(e[t+1],e[t+2]),o=r?null:yr.instance(n);return[{},o,t+3]}function Bl(e,t){const r=e[t]?Do.create(e[t]):null;return[{},r,t+1]}const Ux=RegExp(`^T?${Sh.source}$`),zx=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Vx(e){const[t,r,n,o,i,s,a,l,c]=e,d=t[0]==="-",f=l&&l[0]==="-",h=(m,y=!1)=>m!==void 0&&(y||m&&d)?-m:m;return[{years:h(yi(r)),months:h(yi(n)),weeks:h(yi(o)),days:h(yi(i)),hours:h(yi(s)),minutes:h(yi(a)),seconds:h(yi(l),l==="-0"),milliseconds:h(Fh(c),f)}]}const qx={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Nh(e,t,r,n,o,i,s){const a={year:t.length===2?x0(Ro(t)):Ro(t),month:uv.indexOf(r)+1,day:Ro(n),hour:Ro(o),minute:Ro(i)};return s&&(a.second=Ro(s)),e&&(a.weekday=e.length>3?dv.indexOf(e)+1:fv.indexOf(e)+1),a}const Wx=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Kx(e){const[,t,r,n,o,i,s,a,l,c,d,f]=e,h=Nh(t,o,n,r,i,s,a);let m;return l?m=qx[l]:c?m=0:m=Ic(d,f),[h,new yr(m)]}function Gx(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Hx=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Zx=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Jx=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Xg(e){const[,t,r,n,o,i,s,a]=e;return[Nh(t,o,n,r,i,s,a),yr.utcInstance]}function Yx(e){const[,t,r,n,o,i,s,a]=e;return[Nh(t,a,r,n,o,i,s),yr.utcInstance]}const Xx=ra(Px,Th),Qx=ra(Ix,Th),e4=ra(Ox,Th),t4=ra(vv),$v=na(_x,ia,Ol,Bl),r4=na(Bx,ia,Ol,Bl),n4=na(Rx,ia,Ol,Bl),o4=na(ia,Ol,Bl);function i4(e){return oa(e,[Xx,$v],[Qx,r4],[e4,n4],[t4,o4])}function s4(e){return oa(Gx(e),[Wx,Kx])}function a4(e){return oa(e,[Hx,Xg],[Zx,Xg],[Jx,Yx])}function l4(e){return oa(e,[zx,Vx])}const u4=na(ia);function c4(e){return oa(e,[Ux,u4])}const d4=ra(Lx,jx),f4=ra(wv),h4=na(ia,Ol,Bl);function m4(e){return oa(e,[d4,$v],[f4,h4])}const Qg="Invalid Duration",kv={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},g4={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...kv},sn=146097/400,fs=146097/4800,p4={years:{quarters:4,months:12,weeks:sn/7,days:sn,hours:sn*24,minutes:sn*24*60,seconds:sn*24*60*60,milliseconds:sn*24*60*60*1e3},quarters:{months:3,weeks:sn/28,days:sn/4,hours:sn*24/4,minutes:sn*24*60/4,seconds:sn*24*60*60/4,milliseconds:sn*24*60*60*1e3/4},months:{weeks:fs/7,days:fs,hours:fs*24,minutes:fs*24*60,seconds:fs*24*60*60,milliseconds:fs*24*60*60*1e3},...kv},Mi=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],b4=Mi.slice(0).reverse();function so(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new $e(n)}function xv(e,t){let r=t.milliseconds??0;for(const n of b4.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function ep(e,t){const r=xv(e,t)<0?-1:1;Mi.reduceRight((n,o)=>{if(re(t[o]))return n;if(n){const i=t[n]*r,s=e[o][n],a=Math.floor(i/s);t[o]+=a*r,t[n]-=a*s*r}return o},null),Mi.reduce((n,o)=>{if(re(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function tp(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class $e{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?p4:g4;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Pe.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return $e.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new lr(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new $e({values:Yu(t,$e.normalizeUnit),loc:Pe.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Ko(t))return $e.fromMillis(t);if($e.isDuration(t))return t;if(typeof t=="object")return $e.fromObject(t);throw new lr(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=l4(t);return n?$e.fromObject(n,r):$e.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=c4(t);return n?$e.fromObject(n,r):$e.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new lr("need to specify a reason the Duration is invalid");const n=t instanceof An?t:new An(t,r);if(it.throwOnInvalid)throw new Vk(n);return new $e({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Ty(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?cr.create(this.loc,n).formatDurationFromString(this,t):Qg}toHuman(t={}){if(!this.isValid)return Qg;const r=t.showZeros!==!1,n=Mi.map(o=>{const i=this.values[o];return re(i)||i===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:o.slice(0,-1)}).format(i)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Mh(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},ne.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?xv(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=$e.fromDurationLike(t),n={};for(const o of Mi)(Bs(r.values,o)||Bs(this.values,o))&&(n[o]=r.get(o)+this.get(o));return so(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=$e.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=lv(t(this.values[n],n));return so(this,{values:r},!0)}get(t){return this[$e.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Yu(t,$e.normalizeUnit)};return so(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return so(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return ep(this.matrix,t),so(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=tp(this.normalize().shiftToAll().toObject());return so(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>$e.normalizeUnit(s));const r={},n={},o=this.toObject();let i;for(const s of Mi)if(t.indexOf(s)>=0){i=s;let a=0;for(const c in n)a+=this.matrix[c][s]*n[c],n[c]=0;Ko(o[s])&&(a+=o[s]);const l=Math.trunc(a);r[s]=l,n[s]=(a*1e3-l*1e3)/1e3}else Ko(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(r[i]+=s===i?n[s]:n[s]/this.matrix[i][s]);return ep(this.matrix,r),so(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return so(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=tp(this.values);return so(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Mi)if(!r(this.values[n],t.values[n]))return!1;return!0}}const hs="Invalid Interval";function y4(e,t){return!e||!e.isValid?ft.invalid("missing or invalid start"):!t||!t.isValid?ft.invalid("missing or invalid end"):t<e?ft.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ft{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new lr("need to specify a reason the Interval is invalid");const n=t instanceof An?t:new An(t,r);if(it.throwOnInvalid)throw new zk(n);return new ft({invalid:n})}static fromDateTimes(t,r){const n=Da(t),o=Da(r),i=y4(n,o);return i??new ft({start:n,end:o})}static after(t,r){const n=$e.fromDurationLike(r),o=Da(t);return ft.fromDateTimes(o,o.plus(n))}static before(t,r){const n=$e.fromDurationLike(r),o=Da(t);return ft.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,s;try{i=ne.fromISO(n,r),s=i.isValid}catch{s=!1}let a,l;try{a=ne.fromISO(o,r),l=a.isValid}catch{l=!1}if(s&&l)return ft.fromDateTimes(i,a);if(s){const c=$e.fromISO(o,r);if(c.isValid)return ft.after(i,c)}else if(l){const c=$e.fromISO(n,r);if(c.isValid)return ft.before(a,c)}}return ft.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ft.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Da).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const s=r[i]||this.e,a=+s>+this.e?this.e:s;n.push(ft.fromDateTimes(o,a)),o=a,i+=1}return n}splitBy(t){const r=$e.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(l=>l*o));i=+a>+this.e?this.e:a,s.push(ft.fromDateTimes(n,i)),n=i,o+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ft.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ft.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],s)=>i?i.overlaps(s)||i.abutsStart(s)?[o,i.union(s)]:[o.concat([i]),s]:[o,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),s=Array.prototype.concat(...i),a=s.sort((l,c)=>l.time-c.time);for(const l of a)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(ft.fromDateTimes(r,l.time)),r=null);return ft.merge(o)}difference(...t){return ft.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:hs}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Hu,r={}){return this.isValid?cr.create(this.s.loc.clone(r),t).formatInterval(this):hs}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:hs}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:hs}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:hs}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:hs}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):$e.invalid(this.invalidReason)}mapEndpoints(t){return ft.fromDateTimes(t(this.s),t(this.e))}}class uu{static hasDST(t=it.defaultZone){const r=ne.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Do.isValidZone(t)}static normalizeZone(t){return _o(t,it.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Pe.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Pe.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Pe.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Pe.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Pe.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Pe.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Pe.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Pe.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Pe.create(r,null,"gregory").eras(t)}static features(){return{relative:iv(),localeWeek:sv()}}}function rp(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor($e.fromMillis(n).as("days"))}function v4(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=rp(l,c);return(d-d%7)/7}],["days",rp]],o={},i=e;let s,a;for(const[l,c]of n)r.indexOf(l)>=0&&(s=l,o[l]=c(e,t),a=i.plus(o),a>t?(o[l]--,e=i.plus(o),e>t&&(a=e,o[l]--,e=i.plus(o))):e=a);return[e,o,a,s]}function w4(e,t,r,n){let[o,i,s,a]=v4(e,t,r);const l=t-o,c=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(s<t&&(s=o.plus({[a]:1})),s!==o&&(i[a]=(i[a]||0)+l/(s-o)));const d=$e.fromObject(i,n);return c.length>0?$e.fromMillis(l,n).shiftTo(...c).plus(d):d}const $4="missing Intl.DateTimeFormat.formatToParts support";function Me(e,t=r=>r){return{regex:e,deser:([r])=>t(dx(r))}}const k4=" ",Dv=`[ ${k4}]`,Av=new RegExp(Dv,"g");function x4(e){return e.replace(/\./g,"\\.?").replace(Av,Dv)}function np(e){return e.replace(/\./g,"").replace(Av," ").toLowerCase()}function kn(e,t){return e===null?null:{regex:RegExp(e.map(x4).join("|")),deser:([r])=>e.findIndex(n=>np(r)===np(n))+t}}function op(e,t){return{regex:e,deser:([,r,n])=>Ic(r,n),groups:t}}function cu(e){return{regex:e,deser:([t])=>t}}function D4(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function A4(e,t){const r=$n(t),n=$n(t,"{2}"),o=$n(t,"{3}"),i=$n(t,"{4}"),s=$n(t,"{6}"),a=$n(t,"{1,2}"),l=$n(t,"{1,3}"),c=$n(t,"{1,6}"),d=$n(t,"{1,9}"),f=$n(t,"{2,4}"),h=$n(t,"{4,6}"),m=k=>({regex:RegExp(D4(k.val)),deser:([x])=>x,literal:!0}),$=(k=>{if(e.literal)return m(k);switch(k.val){case"G":return kn(t.eras("short"),0);case"GG":return kn(t.eras("long"),0);case"y":return Me(c);case"yy":return Me(f,x0);case"yyyy":return Me(i);case"yyyyy":return Me(h);case"yyyyyy":return Me(s);case"M":return Me(a);case"MM":return Me(n);case"MMM":return kn(t.months("short",!0),1);case"MMMM":return kn(t.months("long",!0),1);case"L":return Me(a);case"LL":return Me(n);case"LLL":return kn(t.months("short",!1),1);case"LLLL":return kn(t.months("long",!1),1);case"d":return Me(a);case"dd":return Me(n);case"o":return Me(l);case"ooo":return Me(o);case"HH":return Me(n);case"H":return Me(a);case"hh":return Me(n);case"h":return Me(a);case"mm":return Me(n);case"m":return Me(a);case"q":return Me(a);case"qq":return Me(n);case"s":return Me(a);case"ss":return Me(n);case"S":return Me(l);case"SSS":return Me(o);case"u":return cu(d);case"uu":return cu(a);case"uuu":return Me(r);case"a":return kn(t.meridiems(),0);case"kkkk":return Me(i);case"kk":return Me(f,x0);case"W":return Me(a);case"WW":return Me(n);case"E":case"c":return Me(r);case"EEE":return kn(t.weekdays("short",!1),1);case"EEEE":return kn(t.weekdays("long",!1),1);case"ccc":return kn(t.weekdays("short",!0),1);case"cccc":return kn(t.weekdays("long",!0),1);case"Z":case"ZZ":return op(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return op(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return cu(/[a-z_+-/]{1,256}?/i);case" ":return cu(/[^\S\n\r]/);default:return m(k)}})(e)||{invalidReason:$4};return $.token=e,$}const E4={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function C4(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=E4[s];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function F4(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function M4(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const s in r)if(Bs(r,s)){const a=r[s],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(o[a.token.val[0]]=a.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function S4(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return re(e.z)||(r=Do.create(e.z)),re(e.Z)||(r||(r=new yr(e.Z)),n=e.Z),re(e.q)||(e.M=(e.q-1)*3+1),re(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),re(e.u)||(e.S=Fh(e.u)),[Object.keys(e).reduce((i,s)=>{const a=t(s);return a&&(i[a]=e[s]),i},{}),r,n]}let Ud=null;function T4(){return Ud||(Ud=ne.fromMillis(1555555555555)),Ud}function N4(e,t){if(e.literal)return e;const r=cr.macroTokenToFormatOpts(e.val),n=Mv(r,t);return n==null||n.includes(void 0)?e:n}function Ev(e,t){return Array.prototype.concat(...e.map(r=>N4(r,t)))}class Cv{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Ev(cr.parseFormat(r),t),this.units=this.tokens.map(n=>A4(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=F4(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(t){if(this.isValid){const[r,n]=M4(t,this.regex,this.handlers),[o,i,s]=n?S4(n):[null,null,void 0];if(Bs(n,"a")&&Bs(n,"H"))throw new xs("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:o,zone:i,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Fv(e,t,r){return new Cv(e,r).explainFromTokens(t)}function P4(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:s}=Fv(e,t,r);return[n,o,i,s]}function Mv(e,t){if(!e)return null;const n=cr.create(t,e).dtFormatter(T4()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(s=>C4(s,e,i))}const zd="Invalid DateTime",ip=864e13;function La(e){return new An("unsupported zone",`the zone "${e.name}" is not supported`)}function Vd(e){return e.weekData===null&&(e.weekData=Zu(e.c)),e.weekData}function qd(e){return e.localWeekData===null&&(e.localWeekData=Zu(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function vi(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ne({...r,...t,old:r})}function Sv(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function du(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Iu(e,t,r){return Sv(Pc(e),t,r)}function sp(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,Ju(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=$e.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Pc(i);let[l,c]=Sv(a,r,e.zone);return s!==0&&(l+=s,c=e.zone.offset(l)),{ts:l,o:c}}function ms(e,t,r,n,o,i){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const l=t||a,c=ne.fromObject(e,{...r,zone:l,specificOffset:i});return s?c:c.setZone(a)}else return ne.invalid(new An("unparsable",`the input "${o}" can't be parsed as ${n}`))}function fu(e,t,r=!0){return e.isValid?cr.create(Pe.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Wd(e,t,r){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=wt(e.c.year,n?6:4),r==="year")return o;if(t){if(o+="-",o+=wt(e.c.month),r==="month")return o;o+="-"}else if(o+=wt(e.c.month),r==="month")return o;return o+=wt(e.c.day),o}function ap(e,t,r,n,o,i,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,l="";switch(s){case"day":case"month":case"year":break;default:if(l+=wt(e.c.hour),s==="hour")break;if(t){if(l+=":",l+=wt(e.c.minute),s==="minute")break;a&&(l+=":",l+=wt(e.c.second))}else{if(l+=wt(e.c.minute),s==="minute")break;a&&(l+=wt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(l+=".",l+=wt(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!i?l+="Z":e.o<0?(l+="-",l+=wt(Math.trunc(-e.o/60)),l+=":",l+=wt(Math.trunc(-e.o%60))):(l+="+",l+=wt(Math.trunc(e.o/60)),l+=":",l+=wt(Math.trunc(e.o%60)))),i&&(l+="["+e.zone.ianaName+"]"),l}const Tv={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},I4={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},O4={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ou=["year","month","day","hour","minute","second","millisecond"],B4=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],R4=["year","ordinal","hour","minute","second","millisecond"];function Bu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Ty(e);return t}function lp(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Bu(e)}}function L4(e){if(ja===void 0&&(ja=it.now()),e.type!=="iana")return e.offset(ja);const t=e.name;let r=D0.get(t);return r===void 0&&(r=e.offset(ja),D0.set(t,r)),r}function up(e,t){const r=_o(t.zone,it.defaultZone);if(!r.isValid)return ne.invalid(La(r));const n=Pe.fromObject(t);let o,i;if(re(e.year))o=it.now();else{for(const l of Ou)re(e[l])&&(e[l]=Tv[l]);const s=nv(e)||ov(e);if(s)return ne.invalid(s);const a=L4(r);[o,i]=Iu(e,a,r)}return new ne({ts:o,zone:r,loc:n,o:i})}function cp(e,t,r){const n=re(r.round)?!0:r.round,o=re(r.rounding)?"trunc":r.rounding,i=(a,l)=>(a=Mh(a,n||r.calendary?0:2,r.calendary?"round":o),t.loc.clone(r).relFormatter(r).format(a,l)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const l=s(a);if(Math.abs(l)>=1)return i(l,a)}return i(e>t?-0:0,r.units[r.units.length-1])}function dp(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let ja;const D0=new Map;class ne{constructor(t){const r=t.zone||it.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new An("invalid input"):null)||(r.isValid?null:La(r));this.ts=re(t.ts)?it.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const a=Ko(t.o)&&!t.old?t.o:r.offset(this.ts);o=du(this.ts,a),n=Number.isNaN(o.year)?new An("invalid input"):null,o=n?null:o,i=n?null:a}this._zone=r,this.loc=t.loc||Pe.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new ne({})}static local(){const[t,r]=dp(arguments),[n,o,i,s,a,l,c]=r;return up({year:n,month:o,day:i,hour:s,minute:a,second:l,millisecond:c},t)}static utc(){const[t,r]=dp(arguments),[n,o,i,s,a,l,c]=r;return t.zone=yr.utcInstance,up({year:n,month:o,day:i,hour:s,minute:a,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=px(t)?t.valueOf():NaN;if(Number.isNaN(n))return ne.invalid("invalid input");const o=_o(r.zone,it.defaultZone);return o.isValid?new ne({ts:n,zone:o,loc:Pe.fromObject(r)}):ne.invalid(La(o))}static fromMillis(t,r={}){if(Ko(t))return t<-ip||t>ip?ne.invalid("Timestamp out of range"):new ne({ts:t,zone:_o(r.zone,it.defaultZone),loc:Pe.fromObject(r)});throw new lr(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Ko(t))return new ne({ts:t*1e3,zone:_o(r.zone,it.defaultZone),loc:Pe.fromObject(r)});throw new lr("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=_o(r.zone,it.defaultZone);if(!n.isValid)return ne.invalid(La(n));const o=Pe.fromObject(r),i=Yu(t,lp),{minDaysInFirstWeek:s,startOfWeek:a}=Hg(i,o),l=it.now(),c=re(r.specificOffset)?n.offset(l):r.specificOffset,d=!re(i.ordinal),f=!re(i.year),h=!re(i.month)||!re(i.day),m=f||h,y=i.weekYear||i.weekNumber;if((m||d)&&y)throw new xs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&d)throw new xs("Can't mix ordinal dates with month/day");const $=y||i.weekday&&!m;let k,x,E=du(l,c);$?(k=B4,x=I4,E=Zu(E,s,a)):d?(k=R4,x=O4,E=_d(E)):(k=Ou,x=Tv);let N=!1;for(const He of k){const Ze=i[He];re(Ze)?N?i[He]=x[He]:i[He]=E[He]:N=!0}const R=$?hx(i,s,a):d?mx(i):nv(i),q=R||ov(i);if(q)return ne.invalid(q);const ie=$?Kg(i,s,a):d?Gg(i):i,[Ce,me]=Iu(ie,c,n),De=new ne({ts:Ce,zone:n,o:me,loc:o});return i.weekday&&m&&t.weekday!==De.weekday?ne.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${De.toISO()}`):De.isValid?De:ne.invalid(De.invalid)}static fromISO(t,r={}){const[n,o]=i4(t);return ms(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=s4(t);return ms(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=a4(t);return ms(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(re(t)||re(r))throw new lr("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,s=Pe.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[a,l,c,d]=P4(s,t,r);return d?ne.invalid(d):ms(a,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return ne.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=m4(t);return ms(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new lr("need to specify a reason the DateTime is invalid");const n=t instanceof An?t:new An(t,r);if(it.throwOnInvalid)throw new Uk(n);return new ne({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Mv(t,Pe.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return Ev(cr.parseFormat(t),Pe.fromObject(r)).map(o=>o.val).join("")}static resetCache(){ja=void 0,D0.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Vd(this).weekYear:NaN}get weekNumber(){return this.isValid?Vd(this).weekNumber:NaN}get weekday(){return this.isValid?Vd(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?qd(this).weekday:NaN}get localWeekNumber(){return this.isValid?qd(this).weekNumber:NaN}get localWeekYear(){return this.isValid?qd(this).weekYear:NaN}get ordinal(){return this.isValid?_d(this.c).ordinal:NaN}get monthShort(){return this.isValid?uu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?uu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?uu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?uu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Pc(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),s=this.zone.offset(n-o*r),a=this.zone.offset(n-i*r);if(s===a)return[this];const l=n-s*r,c=n-a*r,d=du(l,s),f=du(c,a);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[vi(this,{ts:l}),vi(this,{ts:c})]:[this]}get isInLeapYear(){return Il(this.year)}get daysInMonth(){return Ju(this.year,this.month)}get daysInYear(){return this.isValid?Fs(this.year):NaN}get weeksInWeekYear(){return this.isValid?ul(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ul(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=cr.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(yr.instance(t),r)}toLocal(){return this.setZone(it.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=_o(t,it.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),s=this.toObject();[o]=Iu(s,i,t)}return vi(this,{ts:o,zone:t})}else return ne.invalid(La(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return vi(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Yu(t,lp),{minDaysInFirstWeek:n,startOfWeek:o}=Hg(r,this.loc),i=!re(r.weekYear)||!re(r.weekNumber)||!re(r.weekday),s=!re(r.ordinal),a=!re(r.year),l=!re(r.month)||!re(r.day),c=a||l,d=r.weekYear||r.weekNumber;if((c||s)&&d)throw new xs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&s)throw new xs("Can't mix ordinal dates with month/day");let f;i?f=Kg({...Zu(this.c,n,o),...r},n,o):re(r.ordinal)?(f={...this.toObject(),...r},re(r.day)&&(f.day=Math.min(Ju(f.year,f.month),f.day))):f=Gg({..._d(this.c),...r});const[h,m]=Iu(f,this.o,this.zone);return vi(this,{ts:h,o:m})}plus(t){if(!this.isValid)return this;const r=$e.fromDurationLike(t);return vi(this,sp(this,r))}minus(t){if(!this.isValid)return this;const r=$e.fromDurationLike(t).negate();return vi(this,sp(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=$e.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:s}=this;s<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?cr.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):zd}toLocaleString(t=Hu,r={}){return this.isValid?cr.create(this.loc.clone(r),t).formatDateTime(this):zd}toLocaleParts(t={}){return this.isValid?cr.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Bu(s);const a=t==="extended";let l=Wd(this,a,s);return Ou.indexOf(s)>=3&&(l+="T"),l+=ap(this,a,r,n,o,i,s),l}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?Wd(this,t==="extended",Bu(r)):null}toISOWeekDate(){return fu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Bu(a),(o&&Ou.indexOf(a)>=3?"T":"")+ap(this,s==="extended",r,t,n,i,a)):null}toRFC2822(){return fu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return fu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Wd(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),fu(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():zd}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return $e.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=bx(r).map($e.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,l=s?t:this,c=w4(a,l,i,o);return s?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(ne.now(),t,r)}until(t){return this.isValid?ft.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||ne.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),cp(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?cp(t.base||ne.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(ne.isDateTime))throw new lr("min requires all arguments be DateTimes");return Zg(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(ne.isDateTime))throw new lr("max requires all arguments be DateTimes");return Zg(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,s=Pe.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return Fv(s,t,r)}static fromStringExplain(t,r,n={}){return ne.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:o=null}=r,i=Pe.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new Cv(i,t)}static fromFormatParser(t,r,n={}){if(re(t)||re(r))throw new lr("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:i=null}=n,s=Pe.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});if(!s.equals(r.locale))throw new lr(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:l,specificOffset:c,invalidReason:d}=r.explainFromTokens(t);return d?ne.invalid(d):ms(a,l,n,`format ${r.format}`,t,c)}static get DATE_SHORT(){return Hu}static get DATE_MED(){return Ny}static get DATE_MED_WITH_WEEKDAY(){return qk}static get DATE_FULL(){return Py}static get DATE_HUGE(){return Iy}static get TIME_SIMPLE(){return Oy}static get TIME_WITH_SECONDS(){return By}static get TIME_WITH_SHORT_OFFSET(){return Ry}static get TIME_WITH_LONG_OFFSET(){return Ly}static get TIME_24_SIMPLE(){return jy}static get TIME_24_WITH_SECONDS(){return _y}static get TIME_24_WITH_SHORT_OFFSET(){return Uy}static get TIME_24_WITH_LONG_OFFSET(){return zy}static get DATETIME_SHORT(){return Vy}static get DATETIME_SHORT_WITH_SECONDS(){return qy}static get DATETIME_MED(){return Wy}static get DATETIME_MED_WITH_SECONDS(){return Ky}static get DATETIME_MED_WITH_WEEKDAY(){return Wk}static get DATETIME_FULL(){return Gy}static get DATETIME_FULL_WITH_SECONDS(){return Hy}static get DATETIME_HUGE(){return Zy}static get DATETIME_HUGE_WITH_SECONDS(){return Jy}}function Da(e){if(ne.isDateTime(e))return e;if(e&&e.valueOf&&Ko(e.valueOf()))return ne.fromJSDate(e);if(e&&typeof e=="object")return ne.fromObject(e);throw new lr(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Ie;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Ie||(Ie={}));const j4=[Ie.Milliseconds,Ie.Seconds,Ie.Minutes,Ie.Hours,Ie.Days,Ie.Weeks,Ie.Months,Ie.Years];Ie.Milliseconds+"",Ie.Seconds+"",Ie.Minutes+"",Ie.Hours+"",Ie.Days+"",Ie.Weeks+"",Ie.Months+"",Ie.Years+"";function _4(e){return j4.filter(t=>e[t])}function A0(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function U4(e){return A0(Math.max(e-.4,0),{decimalCount:0})}function fp(e){return e===0?0:Math.sign(e)}function Rs(e,t,r={}){const n={},o={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},i=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=_4(t).reverse();if(i||s)return a.forEach(d=>{n[d]=i?1/0:-1/0}),n;let l=$e.fromObject(e).as(Ie.Milliseconds);const c=fp(l);return a.forEach((d,f)=>{const h=f===a.length-1;if(d===Ie.Milliseconds)n.milliseconds=A0(l,o);else{const m=$e.fromObject({milliseconds:l}).as(d),y=Math.sign(m),$=Math.abs(m),k=h?A0($,o):Math.floor(o.decimalCount==null?$:U4($)),x=k===0?0:k*y;n[d]=x,l-=$e.fromObject({[d]:x}).as(Ie.Milliseconds),c!==fp(l)&&(l=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const hp={min:0,max:23},mp={min:0,max:59},gp={min:0,max:59},pp={min:0,max:999};var ur;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(ur||(ur={}));ur.Sunday+"",ur.Monday+"",ur.Tuesday+"",ur.Wednesday+"",ur.Thursday+"",ur.Friday+"",ur.Saturday+"";ur.Sunday,ur.Monday,ur.Tuesday,ur.Wednesday,ur.Thursday,ur.Friday,ur.Saturday;var Er;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Er||(Er={}));Er.January,Er.February,Er.March,Er.April,Er.May,Er.June,Er.July,Er.August,Er.September,Er.October,Er.November,Er.December;const bp={min:1,max:12},yp={min:1,max:31};function ji(e){const t=new Gu,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:Rs(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function Nv(...e){const t=e.join(""),r=Sc(Array.from(t));return Array.from(r).join("")}function Pv(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Iv(e,t){const r=Nv([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Ov(e,r)}function Ov(e,t){const r=Nv(t);return typeof e=="string"?new RegExp(Pv(e),r):new RegExp(e.source,r)}function Bv(e,{caseSensitive:t}){const n="".replaceAll("i","");return Ov(e,n)}function Ph(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Rv(e,t){return t?typeof t=="string"?!!new RegExp(Pv(t),"i").exec(e):!!Iv(t,"i").exec(e):!1}class p extends Error{name="AssertionError";constructor(t,r){super(Ji(r,t)||"Assertion failed.")}}const vp={interval:{milliseconds:100},timeout:{seconds:10}},Kd=Symbol("not set");async function z4(e,t,r){const{callback:n,extraAssertionArgs:o,failureMessage:i,options:s}=V4(t),a=Rs(s.timeout,{milliseconds:!0}).milliseconds,l=Rs(s.interval,{milliseconds:!0});let c=Kd,d;async function f(){try{c=r?n():await n(),e(c,...o)}catch(m){c=Kd,d=mt(m)}}const h=Date.now();for(;c===Kd;)if(await f(),await ji(l),Date.now()-h>=a){const y=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw ta(d,y)}return c}function O(e,t=!1){return((...r)=>z4(e,r,t))}function V4(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Lv(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Lv(e){return{interval:e?.interval||vp.interval,timeout:e?.timeout||vp.timeout}}const Aa={isFalse(e,t){if(e!==!1)throw new p(`'${v(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${v(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new p(`'${v(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new p(`'${v(e)}' is not truthy.`,t)}},jv={assert:Aa,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new p(`'${v(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${v(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new p(`'${v(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new p(`'${v(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:O(Aa.isFalse),isFalsy:O(Aa.isFalsy),isTrue:O(Aa.isTrue),isTruthy:O(Aa.isTruthy)}};function q4(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${v(e)} does not end with ${v(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${v(e)} does not end with ${v(t)}}`,r)}function W4(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new p(`${v(e)} ends with ${v(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${v(e)} ends with ${v(t)}}`,r)}function K4(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${v(e)} does not start with ${v(t)}}`,r)}else if(e[0]!==t)throw new p(`${v(e)} does not start with ${v(t)}}`,r)}function G4(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new p(`${v(e)} starts with ${v(t)}}`,r)}else if(e[0]===t)throw new p(`${v(e)} starts with ${v(t)}}`,r)}const Ea={endsWith:q4,endsWithout:W4,startsWith:K4,startsWithout:G4},_v={assert:Ea,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${v(e)} does not end with ${v(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${v(e)} does not end with ${v(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new p(`${v(e)} ends with ${v(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${v(e)} ends with ${v(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${v(e)} does not start with ${v(t)}}`,r)}else if(e[0]!==t)throw new p(`${v(e)} does not start with ${v(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new p(`${v(e)} starts with ${v(t)}}`,r)}else if(e[0]===t)throw new p(`${v(e)} starts with ${v(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:O(Ea.endsWith),endsWithout:O(Ea.endsWithout),startsWith:O(Ea.startsWith),startsWithout:O(Ea.startsWithout)}};function H4(e,t,r){const n=br(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function co(e,t){return br(t).includes(e)}const Gd={isEnumValue(e,t,r){H4(e,t,r)},isNotEnumValue(e,t,r){const n=br(t);if(n.includes(e))throw new p(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Uv={assert:Gd,check:{isEnumValue:co,isNotEnumValue(e,t){return!br(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=br(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=br(t);if(n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(br(t).includes(e))return e},isNotEnumValue(e,t){if(!br(t).includes(e))return e}},waitUntil:{isEnumValue:O(Gd.isEnumValue),isNotEnumValue:O(Gd.isNotEnumValue)}},Hd={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${v(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${v(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))throw new p("Entries are equal.",r)}},zv={assert:Hd,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const o=e[n],i=t[n];return o===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const o=e[n],i=t[n];return o!==i})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${v(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${v(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e;throw new p("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(o=>{const i=e[o],s=t[o];return i===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const i=e[o],s=t[o];return i!==s}))return e}},waitUntil:{entriesEqual:O(Hd.entriesEqual),notEntriesEqual:O(Hd.notEntriesEqual)}};function Xu(e,t){return JSON.stringify(e)===JSON.stringify(t)}function cl(e,t){if(!(e===t||Xu(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Xu(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{cl(e[i],t[i])}catch(s){throw new Error(`JSON objects are not equal at key '${i}': ${Wt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function _a(e,t){if(e===t||Xu(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Xu(r,n)?!1:Object.keys(e).every(i=>_a(e[i],t[i]))}return!1}const Zd={jsonEquals(e,t,r){try{cl(e,t)}catch(n){throw new p(Wt(n),r)}},notJsonEquals(e,t,r){try{cl(e,t)}catch{return}throw new p("Values are JSON equal.",r)}},Vv={assert:Zd,check:{jsonEquals(e,t){return _a(e,t)},notJsonEquals(e,t){return!_a(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return cl(e,t),e}catch(n){throw new p(Wt(n),r)}},notJsonEquals(e,t,r){try{cl(e,t)}catch{return e}throw new p("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(_a(e,t))return e},notJsonEquals(e,t){if(!_a(e,t))return e}},waitUntil:{jsonEquals:O(Zd.jsonEquals),notJsonEquals:O(Zd.notJsonEquals)}};function wp(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function qv(){this._key="chai/deep-eql__"+Math.random()+Date.now()}qv.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Wv=typeof WeakMap=="function"?WeakMap:qv;function $p(e,t,r){if(!r||Ls(e)||Ls(t))return null;var n=r.get(e);if(n){var o=n.get(t);if(typeof o=="boolean")return o}return null}function hu(e,t,r,n){if(!(!r||Ls(e)||Ls(t))){var o=r.get(e);o?o.set(t,n):(o=new Wv,o.set(t,n),r.set(e,o))}}function Dn(e,t,r){if(r&&r.comparator)return kp(e,t,r);var n=Kv(e,t);return n!==null?n:kp(e,t,r)}function Kv(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Ls(e)||Ls(t)?!1:null}function kp(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Wv;var n=r&&r.comparator,o=$p(e,t,r.memoize);if(o!==null)return o;var i=$p(t,e,r.memoize);if(i!==null)return i;if(n){var s=n(e,t);if(s===!1||s===!0)return hu(e,t,r.memoize,s),s;var a=Kv(e,t);if(a!==null)return a}var l=wp(e);if(l!==wp(t))return hu(e,t,r.memoize,!1),!1;hu(e,t,r.memoize,!0);var c=Z4(e,t,l,r);return hu(e,t,r.memoize,c),c}function Z4(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return Dn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Gv(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ni(e,t,n);case"RegExp":return J4(e,t);case"Generator":return Y4(e,t,n);case"DataView":return Ni(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Ni(new Uint8Array(e),new Uint8Array(t),n);case"Set":return xp(e,t,n);case"Map":return xp(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Q4(e,t,n)}}function J4(e,t){return e.toString()===t.toString()}function xp(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){o.push([s,a])}),Ni(n.sort(),o.sort(),r)}function Ni(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(Dn(e[o],t[o],r)===!1)return!1;return!0}function Y4(e,t,r){return Ni(E0(e),E0(t),r)}function X4(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function Dp(e){if(X4(e))try{return E0(e[Symbol.iterator]())}catch{return[]}return[]}function E0(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function Ap(e){var t=[];for(var r in e)t.push(r);return t}function Ep(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var o=r[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&t.push(o)}return t}function Gv(e,t,r,n){var o=r.length;if(o===0)return!0;for(var i=0;i<o;i+=1)if(Dn(e[r[i]],t[r[i]],n)===!1)return!1;return!0}function Q4(e,t,r){var n=Ap(e),o=Ap(t),i=Ep(e),s=Ep(t);if(n=n.concat(i),o=o.concat(s),n.length&&n.length===o.length)return Ni(Cp(n).sort(),Cp(o).sort())===!1?!1:Gv(e,t,n,r);var a=Dp(e),l=Dp(t);return a.length&&a.length===l.length?(a.sort(),l.sort(),Ni(a,l,r)):n.length===0&&a.length===0&&o.length===0&&l.length===0}function Ls(e){return e===null||typeof e!="object"}function Cp(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class Ss extends p{name="DiffError";constructor(t,r,n,o){const i=Bk(r,n);super([t,Ph(i)].join(`
`),o)}}function Lo(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Bo={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${v(t)}

.`,r):new Ss("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${v(t)}

.`,r):new p(`

${v(e)}

strictly equals

${v(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${v(t)}

.`,r):new Ss("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${v(t)}

.`,r):new p(`

${v(e)}

loosely equals

${v(t)}

`,r)},deepEquals(e,t,r){if(!Dn(e,t,{comparator:Lo}))throw new Ss("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Dn(e,t,{comparator:Lo}))throw new p(`

${v(e)}

deeply equals

${v(t)}

`,r)}},Hv=Bo.deepEquals,Zv={assert:Bo,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Dn(e,t,{comparator:Lo})},notDeepEquals(e,t){return!Dn(e,t,{comparator:Lo})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${v(t)}

.`,r):new Ss("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${v(t)}

.`,r):new p(`

${v(e)}

strictly equals

${v(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${v(t)}

.`,r):new Ss("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${v(t)}

.`,r):new p(`

${v(e)}

loosely equals

${v(t)}

`,r);return e},deepEquals(e,t,r){if(Dn(e,t,{comparator:Lo}))return e;throw new Ss("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Dn(e,t,{comparator:Lo}))throw new p(`

${v(e)}

deeply equals

${v(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Dn(e,t,{comparator:Lo}))return e},notDeepEquals(e,t){if(!Dn(e,t,{comparator:Lo}))return e}},waitUntil:{strictEquals:O(Bo.strictEquals),notStrictEquals:O(Bo.notStrictEquals),looseEquals:O(Bo.looseEquals),notLooseEquals:O(Bo.notLooseEquals),deepEquals:O(Bo.deepEquals),notDeepEquals:O(Bo.notDeepEquals)}};function jr(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function un(e,t){return typeof t=="string"?t.includes(e):jr(t,e)}const ao={hasValue(e,t,r){if(!jr(e,t))throw new p(`'${v(e)}' does not have value '${v(t)}'.`,r)},lacksValue(e,t,r){if(jr(e,t))throw new p(`'${v(e)}' has value '${v(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${v(e)}' does not have values '${v(t)}'.`,r)}if(n.length)throw new p(`'${v(e)}' does not have values '${v(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${v(e)}' has values '${v(n)}'.`,r)},isIn(e,t,r){if(!un(e,t))throw new p(`'${v(e)}'

is not in

${v(t)}.`,r)},isNotIn(e,t,r){if(un(e,t))throw new p(`'${v(e)}'

is in

${v(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${v(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new p(`'${v(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new p(`'${v(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${v(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${v(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${v(e)}' is not empty.`,t)}}},Jv={assert:ao,check:{hasValue(e,t){return jr(e,t)},lacksValue(e,t){return!jr(e,t)},hasValues(e,t){return t.every(r=>jr(e,r))},lacksValues(e,t){return t.every(r=>!jr(e,r))},isIn(e,t){return un(e,t)},isNotIn(e,t){return!un(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!jr(e,t))throw new p(`'${v(e)}' does not have value '${v(t)}'.`,r);return e},lacksValue(e,t,r){if(jr(e,t))throw new p(`'${v(e)}' has value '${v(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${v(e)}' does not have values '${v(t)}'.`,r)}if(n.length)throw new p(`'${v(e)}' does not have values '${v(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${v(e)}' has values '${v(n)}'.`,r);return e},isIn(e,t,r){if(!un(e,t))throw new p(`'${v(e)}'

is not in

${v(t)}.`,r);return e},isNotIn(e,t,r){if(un(e,t))throw new p(`'${v(e)}'

is in

${v(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${v(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new p(`'${v(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new p(`'${v(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${v(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${v(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${v(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(jr(e,t))return e},lacksValue(e,t){if(!jr(e,t))return e},hasValues(e,t){if(t.every(r=>jr(e,r)))return e},lacksValues(e,t){if(!t.every(r=>jr(e,r)))return e},isIn(e,t){if(un(e,t))return e},isNotIn(e,t){if(!un(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:O(ao.hasValue),lacksValue:O(ao.lacksValue),hasValues:O(ao.hasValues),lacksValues:O(ao.lacksValues),isIn:O(ao.isIn),isNotIn:O(ao.isNotIn),isEmpty:O(ao.isEmpty),isNotEmpty:O(ao.isNotEmpty)}},Jd={isHttpStatus(e,t){if(!co(e,M))throw new p(`${v(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(co(e,M)){if(!un(e,Pu[t]))throw new p(`${v(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${v(e)} is not a valid HTTP status.`,r)}},Yv={assert:Jd,check:{isHttpStatus(e){return co(e,M)},isHttpStatusCategory(e,t){return co(e,M)&&un(e,Pu[t])}},assertWrap:{isHttpStatus(e,t){if(!co(e,M))throw new p(`${v(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(co(e,M)){if(!un(e,Pu[t]))throw new p(`${v(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${v(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(co(e,M))return e},isHttpStatusCategory(e,t){if(co(e,M)&&un(e,Pu[t]))return e}},waitUntil:{isHttpStatus:O(Jd.isHttpStatus),isHttpStatusCategory:O(Jd.isHttpStatusCategory)}},Yd={instanceOf(e,t,r){if(!(e instanceof t))throw new p(`'${v(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${v(e)}' is an instance of '${t.name}'`,r)}},Xv={assert:Yd,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new p(`'${v(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${v(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:O(Yd.instanceOf),notInstanceOf:O(Yd.notInstanceOf)}},e3=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function et(e,t){return e3.some(r=>{try{return r(e,t)}catch{return!1}})}const wi={isKeyOf(e,t,r){if(!et(t,e))throw new p(`'${String(e)}' is not a key of '${v(t)}'.`,r)},isNotKeyOf(e,t,r){if(et(t,e))throw new p(`'${String(e)}' is a key of '${v(t)}'.`,r)},hasKey(e,t,r){if(!et(e,t))throw new p(`'${v(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(et(e,t))throw new p(`'${v(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(o=>!et(e,o));if(n.length)throw new p(`'${v(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(o=>et(e,o));if(n.length)throw new p(`'${v(e)}' does not lack keys '${n.join(",")}'.`,r)}},Qv={assert:wi,check:{isKeyOf(e,t){return et(t,e)},isNotKeyOf(e,t){return!et(t,e)},hasKey:et,lacksKey(e,t){return!et(e,t)},hasKeys(e,t){return t.every(r=>et(e,r))},lacksKeys(e,t){return t.every(r=>!et(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!et(t,e))throw new p(`'${String(e)}' is not a key of '${v(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(et(t,e))throw new p(`'${String(e)}' is a key of '${v(t)}'.`,r);return e},hasKey(e,t,r){if(!et(e,t))throw new p(`'${v(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(et(e,t))throw new p(`'${v(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(o=>!et(e,o));if(n.length)throw new p(`'${v(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(o=>et(e,o));if(n.length)throw new p(`'${v(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(et(t,e))return e},isNotKeyOf(e,t){if(!et(t,e))return e},hasKey(e,t){if(et(e,t))return e},lacksKey(e,t){if(!et(e,t))return e},hasKeys(e,t){if(t.every(r=>et(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!et(e,r)))return e}},waitUntil:{isKeyOf:O(wi.isKeyOf),isNotKeyOf:O(wi.isNotKeyOf),hasKey:O(wi.hasKey),lacksKey:O(wi.lacksKey),hasKeys:O(wi.hasKeys),lacksKeys:O(wi.lacksKeys)}};function t3(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r)}function r3(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r)}const Xd={isLengthAtLeast:t3,isLengthExactly:r3},e2={assert:Xd,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:je(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:je(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)===t)return e})},waitUntil:{isLengthAtLeast:O(Xd.isLengthAtLeast),isLengthExactly:O(Xd.isLengthExactly)}},n3={never(e){throw new p("This code should not have executed.",e)}},t2={assert:n3,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Qd={isDefined(e,t){if(e==null)throw new p(`'${v(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new p(`'${v(e)}' is not a nullish.`,t)}},r2={assert:Qd,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new p(`'${v(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new p(`'${v(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:O(Qd.isDefined),isNullish:O(Qd.isNullish)}},xr={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${v({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${v({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n)}},n2={assert:xr,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${v({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${v({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:O(xr.isInBounds),isOutBounds:O(xr.isOutBounds),isInteger:O(xr.isInteger),isNotInteger:O(xr.isNotInteger),isAbove:O(xr.isAbove),isAtLeast:O(xr.isAtLeast),isBelow:O(xr.isBelow),isAtMost:O(xr.isAtMost),isNaN:O(xr.isNaN),isFinite:O(xr.isFinite),isInfinite:O(xr.isInfinite),isApproximately:O(xr.isApproximately),isNotApproximately:O(xr.isNotApproximately)}};function o3(e,t,r,n,o){return Rl(...Bc(e,t,r,n,o),!1)}function Bc(e,t,r,n,o){const i=Array.isArray(r);return[i?e:Hv,i?t:e,i?r:t,i?n:r,i?o:n]}function Rl(e,t,r,n,o,i){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,l)=>{try{const c=await s;e(c,n),i?a(c):a()}catch(c){l(new p(`Output from '${t.name}' did not produce expected output. ${Wt(c)}`,o))}});try{return e(s,n),i?s:void 0}catch(a){throw new p(`Output from '${t.name}' did not produce expected output. ${Wt(a)}`,o)}}function i3(e,t,r,n,o){try{const i=Rl(...Bc(e,t,r,n,o),!1);return i instanceof Promise?new Promise(async s=>{try{await i,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function s3(e,t,r,n,o){return Rl(...Bc(e,t,r,n,o),!0)}function a3(e,t,r,n,o){try{const i=Rl(...Bc(e,t,r,n,o),!0);return i instanceof Promise?new Promise(async s=>{try{s(await i)}catch{s(void 0)}}):i}catch{return}}const ef=Symbol("not set");async function l3(e,t,r,n,o,i){const s=Array.isArray(r),a=s?e:Hv,l=s?t:e,c=s?r:t,d=s?n:r,f=Lv(s?o:n),h=s?i:o,m=Rs(f.timeout,{milliseconds:!0}).milliseconds,y=Rs(f.interval,{milliseconds:!0});let $=ef,k;async function x(){try{$=await Rl(a,l,c,d,void 0,!0)}catch(N){$=ef,k=mt(N)}}const E=Date.now();for(;$===ef;)if(await x(),await ji(y),Date.now()-E>=m)throw ta(k,Ji(h,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return $}const u3={output:o3},o2={assert:u3,check:{output:i3},assertWrap:{output:s3},checkWrap:{output:a3},waitUntil:{output:l3}},Ca={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${v(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${v(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${v(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${v(e)}' is not a Primitive.`,t)}},i2={assert:Ca,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${v(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${v(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${v(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${v(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:O(Ca.isNotPrimitive),isNotPropertyKey:O(Ca.isNotPropertyKey),isPrimitive:O(Ca.isPrimitive),isPropertyKey:O(Ca.isPropertyKey)}},Fa={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${v(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${v(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${v(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${v(e)}' is a Promise.`,t)}},s2={assert:Fa,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${v(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${v(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${v(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${v(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:O(Fa.isPromiseLike,!0),isNotPromiseLike:O(Fa.isNotPromiseLike,!0),isPromise:O(Fa.isPromise,!0),isNotPromise:O(Fa.isNotPromise,!0)}},tf={matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r)}},a2={assert:tf,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:O(tf.matches,!0),mismatches:O(tf.mismatches,!0)}},nt={isArray(e,t){if(!Array.isArray(e))throw new p(`'${v(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${v(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${v(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new p(`'${v(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new p(`'${v(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${v(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${v(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${v(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new p(`'${v(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${v(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new p(`'${v(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${v(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${v(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${v(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${v(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new p(`'${v(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${v(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${v(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new p(`'${v(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${v(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${v(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${v(e)}' is a undefined.`,t)}},l2={assert:nt,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new p(`'${v(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${v(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${v(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new p(`'${v(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new p(`'${v(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${v(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${v(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${v(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new p(`'${v(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${v(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new p(`'${v(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${v(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${v(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${v(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${v(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new p(`'${v(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${v(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${v(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new p(`'${v(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${v(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${v(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${v(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:O(nt.isArray),isBigInt:O(nt.isBigInt),isBoolean:O(nt.isBoolean),isFunction:O(nt.isFunction),isNull:O(nt.isNull),isNumber:O(nt.isNumber),isObject:O(nt.isObject),isPlainObject:O(nt.isPlainObject),isString:O(nt.isString),isSymbol:O(nt.isSymbol),isUndefined:O(nt.isUndefined),isNotArray:O(nt.isNotArray),isNotBigInt:O(nt.isNotBigInt),isNotBoolean:O(nt.isNotBoolean),isNotFunction:O(nt.isNotFunction),isNotNull:O(nt.isNotNull),isNotNumber:O(nt.isNotNumber),isNotObject:O(nt.isNotObject),isNotPlainObject:O(nt.isNotPlainObject),isNotString:O(nt.isNotString),isNotSymbol:O(nt.isNotSymbol),isNotUndefined:O(nt.isNotUndefined)}};var Cr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Cr||(Cr={}));function Ih(e,t,r){Oh(e,{noError:"No error.",notInstance:`'${v(e)}' is not an error instance.`},t,r)}function Fp(e,t,r){Oh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${v(e)}' is not an error instance.`},t,r)}function Oh(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const o=e.constructor.name;throw new p(`Error constructor '${o}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const o=Wt(e);if(typeof r.matchMessage=="string"){if(!Rv(o,r.matchMessage))throw new p(`Error message

'${o}'

does not contain

'${r.matchMessage}'.`,n)}else if(!o.match(r.matchMessage))throw new p(`Error message

'${o}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new p(t.notInstance,n);else throw new p(t.noError,n)}function Mp(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Wt(e);if(typeof t.matchMessage=="string"){if(!Rv(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Rc(e,t,r,n){let o;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(s,a)=>{try{await i}catch(l){o=mt(l)}try{Fp(o,r,n),e===Cr.Assert?s():e===Cr.Check?s(!0):s(o)}catch(l){e===Cr.CheckWrap?s(void 0):e===Cr.Check?s(!1):a(mt(l))}})}catch(i){o=mt(i)}try{return Fp(o,r,n),e===Cr.Check?!0:e!==Cr.Assert?o:void 0}catch(i){if(e===Cr.CheckWrap)return;if(e===Cr.Check)return!1;throw i}}function c3(e,t,r){return Rc(Cr.Assert,e,t,r)}function d3(e,t){return Rc(Cr.Check,e,t)}function f3(e,t,r){return Rc(Cr.AssertWrap,e,t,r)}function h3(e,t,r){return Rc(Cr.CheckWrap,e,t,r)}const m3=O(Ih);function g3(e,t,r,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,i=o?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${v(i)}'`);return m3(o,async()=>{try{await i();return}catch(l){return mt(l)}},a,s)}const p3={throws:c3,isError:Ih},u2={assert:p3,check:{throws:d3,isError(e,t){return Mp(e,t)}},assertWrap:{throws:f3,isError(e,t,r){return Oh(e,{noError:"No error.",notInstance:`'${v(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:h3,isError(e,t){if(Mp(e,t))return e}},waitUntil:{throws:g3,isError:O(Ih)}},jo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,rf={isUuid(e,t){if(!String(e).match(jo))throw new p(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(jo))throw new p(`'${String(e)}' is a UUID.`,t)}},c2={assert:rf,check:{isUuid(e){return!!String(e).match(jo)},isNotUuid(e){return!String(e).match(jo)}},assertWrap:{isUuid(e,t){if(!String(e).match(jo))throw new p(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(jo))throw new p(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(jo))return e},isNotUuid(e){if(!String(e).match(jo))return e}},waitUntil:{isUuid:O(rf.isUuid),isNotUuid:O(rf.isNotUuid)}},b3={...t2.assert,...jv.assert,..._v.assert,...zv.assert,...Uv.assert,...Yv.assert,...Xv.assert,...Vv.assert,...Qv.assert,...e2.assert,...r2.assert,...n2.assert,...o2.assert,...i2.assert,...s2.assert,...a2.assert,...l2.assert,...Zv.assert,...u2.assert,...c2.assert,...Jv.assert},Bh=[jv,_v,zv,Uv,Yv,Xv,Vv,Qv,e2,t2,r2,n2,o2,i2,s2,a2,l2,Zv,u2,c2,Jv],y3=Object.assign({},...Bh.map(e=>e.check)),C=Object.assign(function(t){return!!t},y3);function v3(e,t,r){return Ru(e,t,r,new Set)}function Ru(e,t,r,n){if(e=Sp(e),t=Sp(t),C.isObject(e)&&C.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Ru(je(e).sort(),je(t).sort(),r,n))return!1;let o=!1;const i=je(e).map(s=>{const a=Ru(e[s],t[s],r,n);return C.isPromise(a)&&(o=!0),a});return Tp(o,i)}else if(C.isArray(e)&&C.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let o=!1;const i=e.map((s,a)=>{const l=Ru(s,t[a],r,n);return C.isPromise(l)&&(o=!0),l});return Tp(o,i)}else return r(e,t)}function Sp(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Tp(e,t){return e?new Promise(async(r,n)=>{try{const o=await Promise.all(t);r(o.every(C.isTrue))}catch(o){n(mt(o))}}):t.every(C.isTrue)}const w3=Object.assign({},...Bh.map(e=>e.assertWrap)),Ut=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r);return t},w3);function $3(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const k3={tsType:$3},x3={assert:k3},D3={fail:e=>{throw new p("Failure triggered.",e)}},A3={...x3.assert,...b3,...D3},Dt=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r)},A3),E3=Object.assign({},...Bh.map(e=>e.checkWrap)),Rh=Object.assign(function(t){if(t)return t},E3);function C3(e,t){return C.hasKey(e,"entryType")&&e.entryType===t}function $i(e,t){return e.controlType===t}var X;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(X||(X={}));const d2=Symbol("any-type"),F3={[X.Checkbox]:!1,[X.Color]:"",[X.Custom]:void 0,[X.Dropdown]:"",[X.Hidden]:d2,[X.Number]:0,[X.Text]:""};function M3(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===X.Custom)return;const i=F3[o.controlType];i!==d2&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function S3(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return C.isPromise(o)?new Promise(async(i,s)=>{try{const a=await o;e.set(n,a),i(a)}catch(a){s(mt(a))}}):(e.set(n,o),o)}}function Xi(e,t,r){if(t in e)return e[t];{const n=r();return C.isPromise(n)?new Promise(async(o,i)=>{try{const s=await n;e[t]=s,o(s)}catch(s){i(mt(s))}}):(e[t]=n,n)}}function Sn(e){return je(e).map(t=>[t,e[t]])}function dl(e){return Object.fromEntries(e)}function Rn(e,t,r){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return r(a,o,i,s)&&n.push(a),n},[])}function T3(e,t,r={}){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return Xi(n,a,()=>[]).push(o),n},{})}function Xo(e,t,r={}){try{let n=!1;const o=e.map((i,s,a)=>{const l=t(i,s,a);return l instanceof Promise?(n=!0,l):l?[l.key,l.value]:void 0}).filter(C.isTruthy);return n?new Promise(async(i,s)=>{try{const a=Rn(await Promise.all(o),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},C.isTruthy);i(dl(a))}catch(a){s(mt(a))}}):dl(o)}catch(n){throw mt(n)}}function N3(e,t){const r=[];let n=!1;for(let o=0;o<e;o++){const i=t(o);C.isPromise(i)&&(n=!0),r.push(i)}return n?Promise.all(r):r}function P3(e){return Array.isArray(e)?e:[e]}function I3({min:e,max:t}){const{min:r,max:n}=Dh({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)),s=Math.ceil(i/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/o)*o,l=new Uint8Array(s);let c;do crypto.getRandomValues(l),c=l.reduce((d,f,h)=>d+f*256**h,0);while(c>=a);return r+c%o}const Np=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function Pi(e=16){let t="";for(let r=0;r<e;r++){const n=I3({min:0,max:Np.length-1});t+=Np[n]}return t}function f2(e){if(C.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Wt(t).trim()).join(`
`))}function h2(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):C.hasKey(t,"fallbackValue")?t.fallbackValue:mt(n)):r}catch(r){return t.handleError?t.handleError(r):C.hasKey(t,"fallbackValue")?t.fallbackValue:mt(r)}}function xn(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const O3="modulepreload",B3=function(e){return"/vira/book/"+e},Pp={},Qu=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let l=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=l(r.map(c=>{if(c=B3(c),c in Pp)return;Pp[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":O3,d||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),d)return new Promise((m,y)=>{h.addEventListener("load",m),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var Pt;(function(e){e.Standard="stdout",e.Error="stderr"})(Pt||(Pt={}));var ge;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ge||(ge={}));async function R3(){return await Sy({async[Fn.Node](){const e=(await Qu(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ge.Bold]:e.bold.open,[ge.Debug]:e.blueBright.open,[ge.Error]:e.red.open,[ge.Faint]:e.gray.open,[ge.Info]:e.cyan.open,[ge.Mutate]:e.magenta.open,[ge.NormalWeight]:"\x1B[22m",[ge.Plain]:"",[ge.Reset]:e.reset.open,[ge.Success]:e.green.open,[ge.Warning]:e.yellow.open}},[Fn.Web](){return Promise.resolve({[ge.Bold]:"font-weight: bold",[ge.Debug]:"color: blue",[ge.Error]:"color: red",[ge.Faint]:"color: grey",[ge.Info]:"color: teal",[ge.Mutate]:"color: magenta",[ge.NormalWeight]:"",[ge.Plain]:"",[ge.Reset]:"",[ge.Success]:"color: green",[ge.Warning]:"color: orange"})}})}const Lr=await R3(),L3={[ge.Bold]:{colors:[Lr.bold],logType:Pt.Standard},[ge.Debug]:{colors:[Lr.debug],logType:Pt.Standard},[ge.Faint]:{colors:[Lr.faint],logType:Pt.Standard},[ge.Info]:{colors:[Lr.info],logType:Pt.Standard},[ge.Mutate]:{colors:[Lr.mutate,Lr.bold],logType:Pt.Standard},[ge.NormalWeight]:{colors:[Lr.normalWeight],logType:Pt.Standard},[ge.Plain]:{colors:[],logType:Pt.Standard},[ge.Reset]:{colors:[Lr.reset],logType:Pt.Standard},[ge.Success]:{colors:[Lr.success,Lr.bold],logType:Pt.Standard},[ge.Error]:{colors:[Lr.error,Lr.bold],logType:Pt.Error},[ge.Warning]:{colors:[Lr.warning],logType:Pt.Error}};function wr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Ii({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function m2(e,t){try{let r=!1;const n=Sn(e).map(([o,i])=>{const s=t(o,i,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(C.isTruthy);return r?new Promise(async(o,i)=>{try{const s=Rn(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},C.isTruthy);o(dl(s))}catch(s){i(mt(s))}}):dl(n)}catch(r){throw mt(r)}}function g2(e,t){return m2(e,(r,n)=>{const o=n,i=t(n,e);return i instanceof Promise?i.then(s=>({key:o,value:s})):{key:o,value:i}})}function p2(e,...t){const r={...e};return t.forEach(n=>{n&&Sn(n).forEach(([o,i])=>{i!=null&&(r[o]=i)})}),r}function j3(e){return e.replace(/,/g,"")}function _3(e){return typeof e=="number"?e:Number(typeof e=="string"?j3(e):e)}function U3(e){const t=z3(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function z3(e){const t=_3(e);if(!isNaN(t))return t}const b2="px";function fl(e){return Lh({value:e,suffix:b2})}function V3(e){return U3(jh({value:e,suffix:b2}))}function Lh({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function jh({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function q3(){return await Sy({async[Fn.Node](){const{inspect:e}=await Qu(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const o=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[ge.Reset].colors.join("")].join(""),css:void 0}}},[Fn.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:Rn(r.colorConfig[t].colors,s=>jh({value:s,suffix:";"}),C.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Wt(s):v(s)).join(`
`),r.omitColors?"":r.colorConfig[ge.Reset].colors.join("")].join(""),css:n}}}})}const W3=await q3(),K3={colorConfig:L3,omitColors:!1},G3=y2({[Pt.Error](){},[Pt.Standard](){}});function y2(e,t){const r=p2(K3,t);function n(i){e[r.colorConfig[i.colorKey].logType](W3({...i,options:r}))}const o=g2(ge,i=>(...s)=>n({args:s,colorKey:i}));return{...o,if(i){return i?o:G3}}}const H3=xh(Fn.Node)?{[Pt.Error]({text:e}){process.stderr.write(e+`
`)},[Pt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[Pt.Error]({text:e,css:t}){console.error(wr({value:e,prefix:"%c"}),t)},[Pt.Standard]({text:e,css:t}){console.log(wr({value:e,prefix:"%c"}),t)}},v2=y2(H3);function Z3(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function w2(e,{digits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function J3({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const o=Iv(Bv(t,{caseSensitive:r}),"g"),i=[];return e.replace(o,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const l=s[0];if(typeof l!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof l}!`);i.push({index:a,length:l.length});const c=s[0];if(typeof c!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return c}),i}function Y3(e,t,{caseSensitive:r}){const n=J3({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),o=Bv(t,{caseSensitive:r});return e.split(o).reduce((s,a,l)=>{const c=n[l],d=s.concat(a);if(c){const f=e.slice(c.index,c.index+c.length);return d.concat(f)}else return d},[])}function X3(e,t){return e.split(t)}function Ip(e,t){const{min:r,max:n}=Dh(t);if(t.takeOverflow){const o=n-r+1,i=(e-r)%o;return i<0?r+o+i:r+i}else return e>n?r:e<r?n:e}function rt(e,t){let r=!1;const n=je(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),o[i]=s,o},{});return r?new Promise(async(o,i)=>{try{await Promise.all(je(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(mt(s))}}):n}function Lc(e,t){const r=Sn(e).filter(([n,o])=>t(n,o,e));return dl(r)}function Q3(e,t){return Lc(e,r=>t.includes(r))}function hl(e){return je(e).map(t=>e[t])}function $2(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var ml;(function(e){e.Upper="upper",e.Lower="lower"})(ml||(ml={}));const e6={firstLetterCase:ml.Lower};function t6(e,t){if(!e.length)return"";const r=e[0];return(t===ml.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function r6(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""}),o=p2(e6,t);return t6(n,o.firstLetterCase)}function k2(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function n6({value:e,wrapper:t}){return wr({value:Lh({value:e,suffix:t}),prefix:t})}function Ln(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function _h(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class o6{listeners={};universalListeners=new Map;getListenerCount(){return hl(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function o(i,s){r.once&&n(),t(i,s)}return this.universalListeners.set(t,{listener:o,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const o=C.isString(t)?t:t.type,i=()=>this.listeners[o]?.delete(r)||!1;function s(a,l){n.once&&i(),r(a,l)}return Xi(this.listeners,o,()=>new Map).set(r,{listener:s,removeListener:i}),i}removeListener(t,r){const n=C.isString(t)?t:t.type,o=this.listeners[n];if(!o)return!1;const i=o.get(r);return i?i.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(o=>{o.listener(t,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(t,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=hl(this.listeners).reduce((n,o)=>{const i=o.size||0;return o.clear(),n+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class Uh extends o6{}function zh(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function C0(e,t,r){return zh(globalThis,e,t,r)}function Vh(e,t){return gl(e.title),e.parent?[...Vh(e.parent),gl(e.parent.title)].concat([]):[]}function gl(e){return $2(e).toLowerCase().replaceAll(/\s/g,"-")}function i6({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const s6=/[/?#&=]/;function x2(e){const t=e.match(s6);return e.trim()?gl(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const a6={[Yt.ElementExample]:()=>[],[Yt.Page]:e=>[x2(e.title),...M3(e.controls,e.title)].filter(C.isTruthy),[Yt.Root]:()=>[]},ec="_isBookTreeNode",D2=new Map;function l6(e){return D2.get(e)}function u6(e,t){S3(D2,e,()=>t)}function Ts(e,t){return A2(e)&&e.entry.entryType===t}function A2(e){return!!(C.hasKeys(e,[ec,"entry"])&&e[ec])}function c6(){return{[ec]:!0,entry:{entryType:Yt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function d6({entries:e,debug:t}){const r=l6(e);if(r)return r;const n=c6();e.forEach(s=>qh({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=E2(n),i={tree:n,flattenedNodes:o};return u6(e,i),t&&console.info("element-book tree:",n),i}function f6(e,t,r){if(!t.parent)return e;const n=F0(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),qh({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=F0(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Vh(t).join(" > ")}`);return o}function qh({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=a6[t.entryType](t);t.errors.push(...o);const i=f6(e,t,r),s=gl(t.title),a=i.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const l={[ec]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};i.children[s]=l,C3(t,Yt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(c=>qh({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function F0(e,t){const r=A2(e)?e.fullUrlBreadcrumbs.slice(0,-1):Vh(e);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function E2(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>E2(o));return[e,...r].flat()}function Wh(e,t){return Kh(e,["",...t],void 0)}function Kh(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],s=i&&Kh(i,n,r);return{...e.controls,...s}}function h6(e,t,r){const n={...e};return Kh(n,["",...t],r),n}function C2(e,t){const r=t?.controls||(Ts(e,Yt.Page)?rt(e.entry.controls,(o,i)=>i.initValue):{});return{children:rt(e.children,(o,i)=>C2(i,t?.children?.[i.urlBreadcrumb])),controls:r}}function Fe(e){const t={...e,entryType:Yt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:t.useVerticalExamples,entryType:Yt.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),x2(n.title)].filter(C.isTruthy)};r.add(n.title),t.elementExamples[gl(o.title)]=o}}),t}var Mr;(function(e){e.Search="search",e.Book="book"})(Mr||(Mr={}));function F2(e){return e[0]===Mr.Book?"":e[1]?decodeURIComponent(e[1]):""}const js={hash:void 0,paths:[Mr.Book],search:void 0};class tc{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=tc.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(M2.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return tc.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw ta(r,`Failed to define CSS var: ${v(t,4)}

`)}}}const M2=new tc;const Lu=globalThis,Gh=Lu.ShadowRoot&&(Lu.ShadyCSS===void 0||Lu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hh=Symbol(),Op=new WeakMap;let qo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Hh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Gh&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Op.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Op.set(r,t))}return t}toString(){return this.cssText}};const he=e=>new qo(typeof e=="string"?e:e+"",void 0,Hh),S2=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new qo(r,e,Hh)},m6=(e,t)=>{if(Gh)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Lu.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},Bp=Gh?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return he(r)})(e):e;const{is:g6,defineProperty:p6,getOwnPropertyDescriptor:b6,getOwnPropertyNames:y6,getOwnPropertySymbols:v6,getPrototypeOf:w6}=Object,jc=globalThis,Rp=jc.trustedTypes,$6=Rp?Rp.emptyScript:"",k6=jc.reactiveElementPolyfillSupport,Ja=(e,t)=>e,rc={toAttribute(e,t){switch(t){case Boolean:e=e?$6:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Zh=(e,t)=>!g6(e,t),Lp={attribute:!0,type:String,converter:rc,reflect:!1,useDefault:!1,hasChanged:Zh};Symbol.metadata??=Symbol("metadata"),jc.litPropertyMetadata??=new WeakMap;let $s=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Lp){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&p6(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=b6(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Lp}static _$Ei(){if(this.hasOwnProperty(Ja("elementProperties")))return;const t=w6(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ja("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ja("properties"))){const r=this.properties,n=[...y6(r),...v6(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Bp(o))}else t!==void 0&&r.push(Bp(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return m6(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:rc).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,r){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:rc;this._$Em=o;const a=s.fromAttribute(r,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){const s=this.constructor;if(o===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Zh)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,i]of n){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};$s.elementStyles=[],$s.shadowRootOptions={mode:"open"},$s[Ja("elementProperties")]=new Map,$s[Ja("finalized")]=new Map,k6?.({ReactiveElement:$s}),(jc.reactiveElementVersions??=[]).push("2.1.2");const Jh=globalThis,jp=e=>e,nc=Jh.trustedTypes,_p=nc?nc.createPolicy("lit-html",{createHTML:e=>e}):void 0,T2="$lit$",Uo=`lit$${Math.random().toFixed(9).slice(2)}$`,N2="?"+Uo,x6=`<${N2}>`,_i=document,pl=()=>_i.createComment(""),bl=e=>e===null||typeof e!="object"&&typeof e!="function",Yh=Array.isArray,D6=e=>Yh(e)||typeof e?.[Symbol.iterator]=="function",nf=`[ 	
\f\r]`,Ma=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Up=/-->/g,zp=/>/g,ki=RegExp(`>|${nf}(?:([^\\s"'>=/]+)(${nf}*=${nf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vp=/'/g,qp=/"/g,P2=/^(?:script|style|textarea|title)$/i,A6=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),E6=A6(1),Kr=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),Wp=new WeakMap,Si=_i.createTreeWalker(_i,129);function I2(e,t){if(!Yh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return _p!==void 0?_p.createHTML(t):t}const C6=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=Ma;for(let a=0;a<r;a++){const l=e[a];let c,d,f=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===Ma?d[1]==="!--"?s=Up:d[1]!==void 0?s=zp:d[2]!==void 0?(P2.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=ki):d[3]!==void 0&&(s=ki):s===ki?d[0]===">"?(s=o??Ma,f=-1):d[1]===void 0?f=-2:(f=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?ki:d[3]==='"'?qp:Vp):s===qp||s===Vp?s=ki:s===Up||s===zp?s=Ma:(s=ki,o=void 0);const m=s===ki&&e[a+1].startsWith("/>")?" ":"";i+=s===Ma?l+x6:f>=0?(n.push(c),l.slice(0,f)+T2+l.slice(f)+Uo+m):l+Uo+(f===-2?a:m)}return[I2(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class yl{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[c,d]=C6(t,r);if(this.el=yl.createElement(c,n),Si.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Si.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(T2)){const h=d[s++],m=o.getAttribute(f).split(Uo),y=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:y[2],strings:m,ctor:y[1]==="."?M6:y[1]==="?"?S6:y[1]==="@"?T6:Uc}),o.removeAttribute(f)}else f.startsWith(Uo)&&(l.push({type:6,index:i}),o.removeAttribute(f));if(P2.test(o.tagName)){const f=o.textContent.split(Uo),h=f.length-1;if(h>0){o.textContent=nc?nc.emptyScript:"";for(let m=0;m<h;m++)o.append(f[m],pl()),Si.nextNode(),l.push({type:2,index:++i});o.append(f[h],pl())}}}else if(o.nodeType===8)if(o.data===N2)l.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(Uo,f+1))!==-1;)l.push({type:7,index:i}),f+=Uo.length-1}i++}}static createElement(t,r){const n=_i.createElement("template");return n.innerHTML=t,n}}function _s(e,t,r=e,n){if(t===Kr)return t;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const i=bl(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(t=_s(e,o._$AS(e,t.values),o,n)),t}class F6{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=(t?.creationScope??_i).importNode(r,!0);Si.currentNode=o;let i=Si.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new _c(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new N6(i,this,t)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=Si.nextNode(),s++)}return Si.currentNode=_i,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}let _c=class O2{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=_s(this,t,r),bl(t)?t===ee||t==null||t===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):t!==this._$AH&&t!==Kr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):D6(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ee&&bl(this._$AH)?this._$AA.nextSibling.data=t:this.T(_i.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=yl.createElement(I2(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const i=new F6(o,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(t){let r=Wp.get(t.strings);return r===void 0&&Wp.set(t.strings,r=new yl(t)),r}k(t){Yh(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new O2(this.O(pl()),this.O(pl()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=jp(t).nextSibling;jp(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Uc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ee}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=_s(this,t,r,0),s=!bl(t)||t!==this._$AH&&t!==Kr,s&&(this._$AH=t);else{const a=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=_s(this,a[n+l],r,l),c===Kr&&(c=this._$AH[l]),s||=!bl(c)||c!==this._$AH[l],c===ee?t=ee:t!==ee&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class M6 extends Uc{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ee?void 0:t}}class S6 extends Uc{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ee)}}class T6 extends Uc{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=_s(this,t,r,0)??ee)===Kr)return;const n=this._$AH,o=t===ee&&n!==ee||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==ee&&(n===ee||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class N6{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){_s(this,t)}}const P6={I:_c},I6=Jh.litHtmlPolyfillSupport;I6?.(yl,_c),(Jh.litHtmlVersions??=[]).push("3.3.2");const O6=(e,t,r)=>{const n=r?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const i=r?.renderBefore??null;n._$litPart$=o=new _c(t.insertBefore(pl(),i),i,void 0,r??{})}return o._$AI(e),o};const Xh=globalThis;let Ya=class extends $s{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=O6(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Kr}};Ya._$litElement$=!0,Ya.finalized=!0,Xh.litElementHydrateSupport?.({LitElement:Ya});const B6=Xh.litElementPolyfillSupport;B6?.({LitElement:Ya});(Xh.litElementVersions??=[]).push("4.2.2");function Qh({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function R6({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}var Us;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(Us||(Us={}));var Kp;(function(e){e.Space="+",e.Comma="#"})(Kp||(Kp={}));function Xn(e,t={}){return rt(e,(n,o)=>{L6(n);const i=o,s=C.isObject(i)&&!(i instanceof qo),a=C.isString(i)||C.isNumber(i)||i instanceof qo?String(i):String(i.default),l=C.isString(i)||C.isNumber(i)||i instanceof qo?String(i):String(i.initialValue||i.default),c=he(wr({value:n.replace(/^-+/,""),prefix:"--"})),d={name:c,value:S2`var(${c}, ${he(a)})`,syntax:C.isString(i)||C.isNumber(i)||i instanceof qo?Us.Any:M0(i.syntax),default:a},f=String(d.name);if(!l)throw new Error(`Initial value for CSS var ${f} cannot be empty.`);return s&&!t.skipRegistration&&M2.registerProperty({inherits:!0,name:f,initialValue:l,syntax:d.syntax})&&globalThis.document?.documentElement&&Qh({forCssVar:d,onElement:globalThis.document.documentElement,toValue:a}),d})}function L6(e){try{if(C.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(Ji("Invalid CSS var name.",t,`Got '${v(e)}'`))}}function M0(e){return e?C.isString(e)?e:e.union?e.union.map(t=>M0(t)).join(" | "):e.list?`${M0(e.list.values)}${e.list.separator}`:e.raw:Us.Any}const Se=Xn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),j6={nav:{hover:{background:Se["element-book-nav-hover-background-color"],foreground:Se["element-book-nav-hover-foreground-color"]},active:{background:Se["element-book-nav-active-background-color"],foreground:Se["element-book-nav-active-foreground-color"]},selected:{background:Se["element-book-nav-selected-background-color"],foreground:Se["element-book-nav-selected-foreground-color"]}},accent:{icon:Se["element-book-accent-icon-color"]},page:{background:Se["element-book-page-background-color"],backgroundFaint1:Se["element-book-page-background-faint-level-1-color"],backgroundFaint2:Se["element-book-page-background-faint-level-2-color"],foreground:Se["element-book-page-foreground-color"],foregroundFaint1:Se["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Se["element-book-page-foreground-faint-level-2-color"]}};function _6(e,t){B2(e,t,j6)}function S0(e){return C.hasKey(e,"_$cssResult$")}function Gp(e){return C.hasKeys(e,["name","value","default"])&&C.isString(e.default)&&S0(e.name)&&S0(e.value)}function B2(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(S0(o)){if(!Gp(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Qh({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Gp(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);B2(e,o,i)}})}function Ua(e,t){let r=e.length,n,o,i=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,i=!0),Array.isArray(t[0])?o=t:(o=t.length>0?t.map(d=>[d]):[[]],s=!0);let a=o[0].length,l=o[0].map((d,f)=>o.map(h=>h[f])),c=n.map(d=>l.map(f=>{let h=0;if(!Array.isArray(d)){for(let m of f)h+=d*m;return h}for(let m=0;m<d.length;m++)h+=d[m]*(f[m]||0);return h}));return r===1&&i&&(c=c[0]),a===1&&s?r===1&&i?c[0]:c.map(d=>d[0]):c}function of(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ht(e,t,r=[0,0,0]){const n=of(e,t[0]),o=of(e,t[1]),i=of(e,t[2]);return r[0]=n,r[1]=o,r[2]=i,r}function sa(e){return Go(e)==="string"}function Go(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function em(e,{precision:t=16,unit:r}){return Ne(e)?"none":(e=+tm(e,t),e+(r??""))}function Ne(e){return e===null}function $t(e){return Ne(e)?0:e}function tm(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const o=10**(t-n);return Math.floor(e*o+.5)/o}function vl(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function R2(e,t,r){return(r-e)/(t-e)}function T0(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:vl(t[0],t[1],R2(e[0],e[1],r))}function zc(e,t,r){return Math.max(Math.min(r,t),e)}function Vc(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function kt(e,t){return Vc(Math.abs(e)**t,e)}function rm(e,t){return t===0?0:e/t}function L2(e,t,r=0,n=e.length){for(;r<n;){const o=r+n>>1;e[o]<t?r=o+1:n=o}return r}function zs(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===r)return!0;if(!o||o==="Object")return!1;e=n}return!1}var U6=Object.freeze({__proto__:null,bisectLeft:L2,clamp:zc,copySign:Vc,interpolate:vl,interpolateInv:R2,isInstance:zs,isNone:Ne,isString:sa,mapRange:T0,multiplyMatrices:Ua,multiply_v3_m3x3:ht,serializeNumber:em,skipNone:$t,spow:kt,toPrecision:tm,type:Go,zdiv:rm});class z6{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Qo=new z6;var Gr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let Hp=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:o,max:i}=n.groups;(o||i)&&(this.range=[+o,+i])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),T0(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return t=T0(this.coordRange,n,t),em(t,{unit:o,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return zs(t,this)?t:new this(t,r)}};const sf=Symbol("instance");class oc{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[sf]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let i=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>Hp.get(s,i))}))}serializeCoords(t,r,n){return n=t.map((o,i)=>Hp.get(n?.[i]??this.coords[i][0],this.spaceCoords[i])),t.map((o,i)=>n[i].serialize(o,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,o],i)=>{let s=t[i];if(Ne(s)||isNaN(s))return s;let a=r[i],l=this.coords[i].find(c=>c.type==a);if(!l){let c=o.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${c} in ${this.name}()`)}return s=l.resolve(s),l.range&&(r[i]=l.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||zs(t,this)?t:t[sf]?t[sf]:new oc(t,...r)}}const vr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function N0(e){return Array.isArray(e)?e:vr[e]}function ic(e,t,r,n={}){if(e=N0(e),t=N0(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Qo.run("chromatic-adaptation-start",o),o.M||(o.W1===vr.D65&&o.W2===vr.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===vr.D50&&o.W2===vr.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Qo.run("chromatic-adaptation-end",o),o.M)return ht(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function j2(e,t){let r={str:String(e)?.trim(),options:t};if(Qo.run("parse-start",r),r.color)return r.color;r.parsed=q6(r.str);let n,o=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let i=r.parsed.name,s,a,l=r.parsed.args,c=l.map((h,m)=>r.parsed.argMeta[m]?.type);if(i==="color"){let h=l.shift();c.shift();let m=h.startsWith("--")?h.substring(2):`--${h}`,y=[h,m];if(s=G.findFormat({name:i,id:y,type:"function"}),!s){let $,k=h in G.registry?h:m;if(k in G.registry){let x=G.registry[k].formats?.color?.id;x&&($=`Did you mean ${e.replace("color("+h,"color("+x)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+($??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!h.startsWith("--")&&Gr.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${h}).`),h.startsWith("--")&&!s.id.startsWith("--")&&Gr.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${h}).`)}else s=G.findFormat({name:i,type:"function"}),a=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:c,commas:r.parsed.commas});let d=1;r.parsed.lastAlpha&&(d=r.parsed.args.pop(),o&&(o.alphaType=c.pop()));let f=s.coords.length;if(l.length!==f)throw new TypeError(`Expected ${f} coordinates for ${a.id} in ${r.str}), got ${l.length}`);l=s.coerceCoords(l,c),n={spaceId:a.id,coords:l,alpha:d}}else e:for(let i of G.all)for(let s in i.formats){let a=i.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let l=i.getFormat(a),c=l.parse(r.str);if(c){o&&Object.assign(o,{format:l,formatId:s}),n=c;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Ne(n.alpha)?n.alpha:n.alpha===void 0?1:zc(0,n.alpha,1),n}const _2={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},sc={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(_2).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function V6(e){let t={},r=e.match(sc.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*_2[r]):sc.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function q6(e){if(!e)return;e=e.trim();let t=e.match(sc.function);if(t){let r=[],n=[],o=!1,i=t[1].toLowerCase(),s=t[2].replace(sc.singleArgument,(a,l)=>{let{value:c,meta:d}=V6(l);return(a.startsWith("/")||i!=="color"&&r.length===3)&&(o=!0),r.push(c),n.push(d),""});return{name:i,args:r,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function oe(e,t){if(Array.isArray(e))return e.map(n=>oe(n,t));if(!e)throw new TypeError("Empty color reference");sa(e)&&(e=j2(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=G.get(r)),e.alpha===void 0&&(e.alpha=1),e}const W6=75e-6;class G{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?G.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r;let n=t.white??this.base.white??"D65";this.white=N0(n),this.formats=t.formats??{};for(let o in this.formats){let i=this.formats[o];i.type||="function",i.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:G.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:K6(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Qo.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=W6}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let s=n[i];if(s.type!=="angle"&&s.range){if(Ne(o))return!0;let[a,l]=s.range;return(a===void 0||o>=a-r)&&(l===void 0||o<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=oc.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=oe(t);[t,r]=[a.space,a.coords]}if(t=G.get(t),this.equals(t))return r;r=r.map(a=>Ne(a)?0:a);let n=this.path,o=t.path,i,s;for(let a=0;a<n.length&&n[a].equals(o[a]);a++)i=n[a],s=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=oe(t);[t,r]=[n.space,n.coords]}return t=G.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push(o?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(G.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||zs(t,this))return t;if(Go(t)==="string"){let o=G.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return G.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=G.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[o,i]of Object.entries(n.formats)){i.name??=o,i.type??="function";let s=(!t.name||i.name===t.name)&&(!t.type||i.type===t.type);if(t.id){let a=i.ids||[i.id],l=Array.isArray(t.id)?t.id:[t.id];s&&=l.some(c=>a.includes(c))}if(s){let a=oc.get(i,n);return a!==i&&(n.formats[i.name]=a),a}}return null}static resolveCoord(t,r){let n=Go(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=G.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Go(i),n==="number"||n==="string"&&i>=0){let l=Object.entries(o.coords)[i];if(l)return{space:o,id:l[0],index:i,...l[1]}}o=G.get(o);let s=i.toLowerCase(),a=0;for(let l in o.coords){let c=o.coords[l];if(l.toLowerCase()===s||c.name?.toLowerCase()===s)return{space:o,id:l,index:a,...c};a++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function K6(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Xt=new G({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class fr extends G{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Xt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=ht(r,t.toXYZ_M);return this.white!==this.base.white&&(n=ic(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=ic(this.base.white,this.white,r),ht(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function U2(e,t={}){if(Array.isArray(e))return e.map(l=>U2(l,t));let{cssProperty:r="background-color",element:n,...o}=t,i=null;try{return oe(e,o)}catch(l){i=l}let{CSS:s,getComputedStyle:a}=globalThis;if(sa(e)&&n&&s&&a&&s.supports(r,e)){let l=n.style[r];e!==l&&(n.style[r]=e);let c=a(n).getPropertyValue(r);if(e!==l&&(n.style[r]=l),c!==e)try{return oe(c,o)}catch(d){i=d}else i={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=i),null}function Ll(e,t){e=oe(e);let r=G.get(t,t?.space),n=t?.precision,o;return!r||e.space.equals(r)?o=e.coords.slice():o=r.from(e),n===void 0?o:o.map(i=>tm(i,n))}function zr(e,t){if(e=oe(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=G.resolveCoord(t,e.space);return Ll(e,r)[n]}function nm(e,t,r,n){return e=oe(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=G.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}nm.returns="color";function Ao(e,t,r){if(e=oe(e),arguments.length===2&&Go(arguments[1])==="object"){let n=arguments[1];for(let o in n)Ao(e,o,n[o])}else if(typeof r=="function"&&(r=r(zr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:o}=G.resolveCoord(t,e.space),i=Ll(e,n);i[o]=r,nm(e,n,i)}return e}Ao.returns="color";var om=new G({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Xt,fromBase:e=>ic(Xt.white,"D50",e),toBase:e=>ic("D50",Xt.white,e)});const G6=216/24389,Zp=24/116,mu=24389/27;let af=vr.D50;var Vr=new G({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:af,base:om,fromBase(e){let r=e.map((s,a)=>s/af[a]).map(s=>s>G6?Math.cbrt(s):(mu*s+16)/116),n=116*r[1]-16,o=500*(r[0]-r[1]),i=200*(r[1]-r[2]);return[n,o,i]},toBase(e){let[t,r,n]=e,o=[];return o[1]=(t+16)/116,o[0]=r/500+o[1],o[2]=o[1]-n/200,[o[0]>Zp?Math.pow(o[0],3):(116*o[0]-16)/mu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/mu,o[2]>Zp?Math.pow(o[2],3):(116*o[2]-16)/mu].map((s,a)=>s*af[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function mn(e){return typeof e!="number"?e:(e%360+360)%360}function z2(e,t){let[r,n]=t,o=Ne(r),i=Ne(n);if(o&&i)return[r,n];if(o?r=n:i&&(n=r),e==="raw")return t;r=mn(r),n=mn(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Hr=new G({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Vr,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,l=a[1]-a[0];this.ε=l/1e5}let[t,r,n]=e,o=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,i=o?null:mn(Math.atan2(n,r)*180/Math.PI),s=o?0:Math.sqrt(r**2+n**2);return[t,s,i]},toBase(e){let[t,r,n]=e,o=null,i=null;return Ne(n)||(r=r<0?0:r,o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Jp=25**7,ac=Math.PI,Yp=180/ac,gs=ac/180;function Xp(e){const t=e*e;return t*t*t*e}function V2(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){[e,t]=oe([e,t]);let[i,s,a]=Vr.from(e),l=Hr.from(Vr,[i,s,a])[1],[c,d,f]=Vr.from(t),h=Hr.from(Vr,[c,d,f])[1];l<0&&(l=0),h<0&&(h=0);let m=(l+h)/2,y=Xp(m),$=.5*(1-Math.sqrt(y/(y+Jp))),k=(1+$)*s,x=(1+$)*d,E=Math.sqrt(k**2+a**2),N=Math.sqrt(x**2+f**2),R=k===0&&a===0?0:Math.atan2(a,k),q=x===0&&f===0?0:Math.atan2(f,x);R<0&&(R+=2*ac),q<0&&(q+=2*ac),R*=Yp,q*=Yp;let ie=c-i,Ce=N-E,me=q-R,De=R+q,He=Math.abs(me),Ze;E*N===0?Ze=0:He<=180?Ze=me:me>180?Ze=me-360:me<-180?Ze=me+360:Gr.warn("the unthinkable has happened");let St=2*Math.sqrt(N*E)*Math.sin(Ze*gs/2),Rr=(i+c)/2,mr=(E+N)/2,no=Xp(mr),jt;E*N===0?jt=De:He<=180?jt=De/2:De<360?jt=(De+360)/2:jt=(De-360)/2;let zn=(Rr-50)**2,oo=1+.015*zn/Math.sqrt(20+zn),rn=1+.045*mr,Ht=1;Ht-=.17*Math.cos((jt-30)*gs),Ht+=.24*Math.cos(2*jt*gs),Ht+=.32*Math.cos((3*jt+6)*gs),Ht-=.2*Math.cos((4*jt-63)*gs);let Ue=1+.015*mr*Ht,Tt=30*Math.exp(-1*((jt-275)/25)**2),nn=2*Math.sqrt(no/(no+Jp)),sr=-1*Math.sin(2*Tt*gs)*nn,on=(ie/(r*oo))**2;return on+=(Ce/(n*rn))**2,on+=(St/(o*Ue))**2,on+=sr*(Ce/(n*rn))*(St/(o*Ue)),Math.sqrt(on)}const H6=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Z6=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],J6=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Ho=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Tn=new G({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Xt,fromBase(e){let t=ht(e,H6);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),ht(t,J6,t)},toBase(e){let t=ht(e,Ho);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,ht(t,Z6,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function P0(e,t){[e,t]=oe([e,t]);let[r,n,o]=Tn.from(e),[i,s,a]=Tn.from(t),l=r-i,c=n-s,d=o-a;return Math.sqrt(l**2+c**2+d**2)}const Y6=75e-6;function Oi(e,t,{epsilon:r=Y6}={}){e=oe(e),t||(t=e.space),t=G.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Vs(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function q2(e,t,r="lab"){r=G.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,s,a)=>{let l=o[a];return Ne(s)||Ne(l)?i:i+(l-s)**2},0))}function X6(e,t){return q2(e,t,"lab")}const Q6=Math.PI,Qp=Q6/180;function eD(e,t,{l:r=2,c:n=1}={}){[e,t]=oe([e,t]);let[o,i,s]=Vr.from(e),[,a,l]=Hr.from(Vr,[o,i,s]),[c,d,f]=Vr.from(t),h=Hr.from(Vr,[c,d,f])[1];a<0&&(a=0),h<0&&(h=0);let m=o-c,y=a-h,$=i-d,k=s-f,x=$**2+k**2-y**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let N=.0638*a/(1+.0131*a)+.638,R;Ne(l)&&(l=0),l>=164&&l<=345?R=.56+Math.abs(.2*Math.cos((l+168)*Qp)):R=.36+Math.abs(.4*Math.cos((l+35)*Qp));let q=Math.pow(a,4),ie=Math.sqrt(q/(q+1900)),Ce=N*(ie*R+1-ie),me=(m/(r*E))**2;return me+=(y/(n*N))**2,me+=x/Ce**2,Math.sqrt(me)}const eb=203;var im=new G({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Xt,fromBase(e){return e.map(t=>t*eb)},toBase(e){return e.map(t=>t/eb)}});const gu=1.15,pu=.66,tb=2610/2**14,tD=2**14/2610,rb=3424/2**12,nb=2413/2**7,ob=2392/2**7,rD=1.7*2523/2**5,ib=2**5/(1.7*2523),bu=-.56,lf=16295499532821565e-27,nD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],oD=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],iD=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],sD=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var W2=new G({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:im,fromBase(e){let[t,r,n]=e,o=gu*t-(gu-1)*n,i=pu*r-(pu-1)*t,a=ht([o,i,n],nD).map(function(h){let m=rb+nb*kt(h/1e4,tb),y=1+ob*kt(h/1e4,tb);return kt(m/y,rD)}),[l,c,d]=ht(a,iD);return[(1+bu)*l/(1+bu*l)-lf,c,d]},toBase(e){let[t,r,n]=e,o=(t+lf)/(1+bu-bu*(t+lf)),s=ht([o,r,n],sD).map(function(h){let m=rb-kt(h,ib),y=ob*kt(h,ib)-nb;return 1e4*kt(m/y,tD)}),[a,l,c]=ht(s,oD),d=(a+(gu-1)*c)/gu,f=(l+(pu-1)*d)/pu;return[d,f,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),I0=new G({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:W2,fromBase:Hr.fromBase,toBase:Hr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function aD(e,t){[e,t]=oe([e,t]);let[r,n,o]=I0.from(e),[i,s,a]=I0.from(t),l=r-i,c=n-s;Ne(o)&&Ne(a)?(o=0,a=0):Ne(o)?o=a:Ne(a)&&(a=o);let d=o-a,f=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}const K2=3424/4096,G2=2413/128,H2=2392/128,sb=2610/16384,lD=2523/32,uD=16384/2610,ab=32/2523,cD=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],dD=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],fD=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],hD=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var O0=new G({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:im,fromBase(e){let t=ht(e,cD);return mD(t)},toBase(e){let t=gD(e);return ht(t,hD)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function mD(e){let t=e.map(function(r){let n=K2+G2*(r/1e4)**sb,o=1+H2*(r/1e4)**sb;return(n/o)**lD});return ht(t,dD)}function gD(e){return ht(e,fD).map(function(n){let o=Math.max(n**ab-K2,0),i=G2-H2*n**ab;return 1e4*(o/i)**uD})}function pD(e,t){[e,t]=oe([e,t]);let[r,n,o]=O0.from(e),[i,s,a]=O0.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-s)**2+(o-a)**2)}function bD(e,t){[e,t]=oe([e,t]);let r=2,[n,o,i]=Tn.from(e),[s,a,l]=Tn.from(t),c=n-s,d=r*(o-a),f=r*(i-l);return Math.sqrt(c**2+d**2+f**2)}const yD=vr.D65,Z2=.42,lb=1/Z2,uf=2*Math.PI,J2=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],vD=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],wD=[[460,451,288],[460,-891,-261],[460,-220,-6300]],$D={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ai={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},kD=180/Math.PI,ub=Math.PI/180;function Y2(e,t){return e.map(n=>{const o=kt(t*Math.abs(n)*.01,Z2);return 400*Vc(o,n)/(o+27.13)})}function xD(e,t){const r=100/t*27.13**lb;return e.map(n=>{const o=Math.abs(n);return Vc(r*kt(o/(400-o),lb),n)})}function DD(e){let t=mn(e);t<=Ai.h[0]&&(t+=360);const r=L2(Ai.h,t)-1,[n,o]=Ai.h.slice(r,r+2),[i,s]=Ai.e.slice(r,r+2),a=Ai.H[r],l=(t-n)/i;return a+100*l/(l+(o-t)/s)}function AD(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,o]=Ai.h.slice(r,r+2),[i,s]=Ai.e.slice(r,r+2);return mn((t*(s*n-i*o)-100*n*s)/(t*(s-i)-100*s))}function X2(e,t,r,n,o){const i={};i.discounting=o,i.refWhite=e,i.surround=n;const s=e.map(k=>k*100);i.la=t,i.yb=r;const a=s[1],l=ht(s,J2);let c=$D[i.surround];const d=c[0];i.c=c[1],i.nc=c[2];const h=(1/(5*i.la+1))**4;i.fl=h*i.la+.1*(1-h)*(1-h)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(d*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=l.map(k=>vl(1,a/k,m)),i.dRgbInv=i.dRgb.map(k=>1/k);const y=l.map((k,x)=>k*i.dRgb[x]),$=Y2(y,i.fl);return i.aW=i.nbb*(2*$[0]+$[1]+.05*$[2]),i}const cb=X2(yD,64/Math.PI*.2,20,"average",!1);function B0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=mn(e.h)*ub:r=AD(e.H)*ub;const n=Math.cos(r),o=Math.sin(r);let i=0;e.J!==void 0?i=kt(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/i:e.M!==void 0?s=e.M/t.flRoot/i:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=kt(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),c=t.aW*kt(i,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*l,f=c/t.nbb,h=23*(f+.305)*rm(a,23*d+a*(11*n+108*o)),m=h*n,y=h*o,$=xD(ht([f,m,y],wD).map(k=>k*1/1403),t.fl);return ht($.map((k,x)=>k*t.dRgbInv[x]),vD).map(k=>k/100)}function Q2(e,t){const r=e.map(N=>N*100),n=Y2(ht(r,J2).map((N,R)=>N*t.dRgb[R]),t.fl),o=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(i,o)%uf+uf)%uf,a=.25*(Math.cos(s+2)+3.8),l=5e4/13*t.nc*t.ncb*rm(a*Math.sqrt(o**2+i**2),n[0]+n[1]+1.05*n[2]+.305),c=kt(l,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=kt(d/t.aW,.5*t.c*t.z),h=100*kt(f,2),m=4/t.c*f*(t.aW+4)*t.flRoot,y=c*f,$=y*t.flRoot,k=mn(s*kD),x=DD(k),E=50*kt(t.c*c/(t.aW+4),1/2);return{J:h,C:y,h:k,s:E,Q:m,M:$,H:x}}var ED=new G({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Xt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=Q2(e,cb),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return B0({J:e[0],M:e[1],h:e[2]},cb)}});const CD=vr.D65,FD=216/24389,ew=24389/27;function MD(e){return 116*(e>FD?Math.cbrt(e):(ew*e+16)/116)-16}function R0(e){return e>8?Math.pow((e+16)/116,3):e/ew}function SD(e,t){let[r,n,o]=e,i=[],s=0;if(o===0)return[0,0,0];let a=R0(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const l=2e-12,c=15;let d=0,f=1/0;for(;d<=c;){i=B0({J:s,C:n,h:r},t);const h=Math.abs(i[1]-a);if(h<f){if(h<=l)return i;f=h}s=s-(i[1]-a)*s/(2*i[1]),d+=1}return B0({J:s,C:n,h:r},t)}function TD(e,t){const r=MD(e[1]);if(r===0)return[0,0,0];const n=Q2(e,sm);return[mn(n.h),n.C,r]}const sm=X2(CD,200/Math.PI*R0(50),R0(50)*100,"average",!1);var wl=new G({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Xt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=TD(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return SD(e,sm)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const ND=Math.PI/180,db=[1,.007,.0228];function fb(e){e[1]<0&&(e=wl.fromBase(wl.toBase(e)));const t=Math.log(Math.max(1+db[2]*e[1]*sm.flRoot,1))/db[2],r=e[0]*ND,n=t*Math.cos(r),o=t*Math.sin(r);return[e[2],n,o]}function PD(e,t){[e,t]=oe([e,t]);let[r,n,o]=fb(wl.from(e)),[i,s,a]=fb(wl.from(t));return Math.sqrt((r-i)**2+(n-s)**2+(o-a)**2)}var qs={deltaE76:X6,deltaECMC:eD,deltaE2000:V2,deltaEJz:aD,deltaEITP:pD,deltaEOK:P0,deltaEOK2:bD,deltaEHCT:PD};function ID(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const hb={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ei(e,{method:t=Gr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:i=void 0}={}){if(e=oe(e),sa(arguments[1])?r=arguments[1]:r||(r=e.space),r=G.get(r),Oi(e,r,{epsilon:0}))return e;let s;if(t==="css")s=OD(e,{space:r});else{if(t!=="clip"&&!Oi(e,r)){Object.prototype.hasOwnProperty.call(hb,t)&&({method:t,jnd:o,deltaEMethod:n,blackWhiteClamp:i}=hb[t]);let a=V2;if(n!==""){for(let c in qs)if("deltae"+n.toLowerCase()===c.toLowerCase()){a=qs[c];break}}o===0&&(o=1e-16);let l=ei(We(e,r),{method:"clip",space:r});if(a(e,l)>o){if(i&&Object.keys(i).length===3){let E=G.resolveCoord(i.channel),N=zr(We(e,E.space),E.id);if(Ne(N)&&(N=0),N>=i.max)return We({space:"xyz-d65",coords:vr.D65},e.space);if(N<=i.min)return We({space:"xyz-d65",coords:[0,0,0]},e.space)}let c=G.resolveCoord(t),d=c.space,f=c.id,h=We(e,d);h.coords.forEach((E,N)=>{Ne(E)&&(h.coords[N]=0)});let y=(c.range||c.refRange)[0],$=ID(o),k=y,x=zr(h,f);for(;x-k>$;){let E=Vs(h);E=ei(E,{space:r,method:"clip"}),a(h,E)-o<$?k=zr(h,f):x=zr(h,f),Ao(h,f,(k+x)/2)}s=We(h,r)}else s=l}else s=We(e,r);if(t==="clip"||!Oi(s,r,{epsilon:0})){let a=Object.values(r.coords).map(l=>l.range||[]);s.coords=s.coords.map((l,c)=>{let[d,f]=a[c];return d!==void 0&&(l=Math.max(d,l)),f!==void 0&&(l=Math.min(l,f)),l})}}return r!==e.space&&(s=We(s,e.space)),e.coords=s.coords,e}ei.returns="color";const mb={WHITE:{space:Tn,coords:[1,0,0],alpha:1},BLACK:{space:Tn,coords:[0,0,0],alpha:1}};function OD(e,{space:t}={}){e=oe(e),t||(t=e.space),t=G.get(t);const o=G.get("oklch");if(t.isUnbounded)return We(e,t);const i=We(e,o);let s=i.coords[0];if(s>=1){const y=We(mb.WHITE,t);return y.alpha=e.alpha,We(y,t)}if(s<=0){const y=We(mb.BLACK,t);return y.alpha=e.alpha,We(y,t)}if(Oi(i,t,{epsilon:0}))return We(i,t);function a(y){const $=We(y,t),k=Object.values(t.coords);return $.coords=$.coords.map((x,E)=>{if("range"in k[E]){const[N,R]=k[E].range;return zc(N,x,R)}return x}),$}let l=0,c=i.coords[1],d=!0,f=Vs(i),h=a(f),m=P0(h,f);if(m<.02)return h;for(;c-l>1e-4;){const y=(l+c)/2;if(f.coords[1]=y,d&&Oi(f,t,{epsilon:0}))l=y;else if(h=a(f),m=P0(h,f),m<.02){if(.02-m<1e-4)break;d=!1,l=y}else c=y}return h}function We(e,t,{inGamut:r}={}){e=oe(e),t=G.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ei(o,r===!0?void 0:r)),o}We.returns="color";function Xa(e,t={}){let{precision:r=Gr.precision,format:n,inGamut:o=!0,coords:i,alpha:s,commas:a}=t,l,c=oe(e),d=n,f=c.parseMeta;f&&!n&&(f.format.canSerialize()&&(n=f.format,d=f.formatId),i??=f.types,s??=f.alphaType,a??=f.commas),d&&(n=c.space.getFormat(n)??G.findFormat(d)),n||(n=c.space.getFormat("default")??G.DEFAULT_FORMAT,d=n.name),n&&n.space&&n.space!==c.space&&(c=We(c,n.space));let h=c.coords.slice();if(o||=n.toGamut,o&&!Oi(c)&&(h=ei(Vs(c),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)l=n.serialize(h,c.alpha,t);else throw new TypeError(`format ${d} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",y=n.serializeCoords(h,r,i);if(m==="color"){let N=n.id||n.ids?.[0]||c.space.cssId||c.space.id;y.unshift(N)}let $=c.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let k=s?.type??"<number>",x=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&$<1,E="";if(a??=n.commas,x){if(r!==null){let N;k==="<percentage>"&&(N="%",$*=100),$=em($,{precision:r,unit:N})}E=`${a?",":" /"} ${$}`}l=`${m}(${y.join(a?", ":" ")}${E})`}return l}const BD=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],RD=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var $l=new fr({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:BD,fromXYZ_M:RD}),tw=new fr({id:"rec2020",name:"REC.2020",base:$l,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const LD=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],jD=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var rw=new fr({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:LD,fromXYZ_M:jD});const _D=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Rt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var nw=new fr({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:_D,fromXYZ_M:Rt}),gb={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let pb=Array(3).fill("<percentage> | <number>[0, 255]"),bb=Array(3).fill("<number>[0, 255]");var Ui=new fr({id:"srgb",name:"sRGB",base:nw,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:pb},rgb_number:{name:"rgb",commas:!0,coords:bb,alpha:!1},color:{},rgba:{coords:pb,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:bb},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let o=r&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=gb.black,t.alpha=0):t.coords=gb[e],t.coords)return t}}}}),ow=new fr({id:"p3",cssId:"display-p3",name:"P3",base:rw,fromBase:Ui.fromBase,toBase:Ui.toBase});Gr.display_space=Ui;let UD;if(typeof CSS<"u"&&CSS.supports)for(let e of[Vr,tw,ow]){let t=e.getMinCoords(),n=Xa({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Gr.display_space=e;break}}function zD(e,{space:t=Gr.display_space,...r}={}){e=oe(e);let n=Xa(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Gr.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Ne)||Ne(e.alpha))&&!(UD??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=Vs(e),o.coords=o.coords.map($t),o.alpha=$t(o.alpha),n=Xa(o,r),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=We(o,t),n=new String(Xa(o,r)),n.color=o}return n}function VD(e,t,{space:r,hue:n="shorter"}={}){e=oe(e),r||=e.space,r=G.get(r);let o=Object.values(r.coords);[e,t]=[e,t].map(c=>We(c,r));let[i,s]=[e,t].map(c=>c.coords),a=i.map((c,d)=>{let f=o[d],h=s[d];return f.type==="angle"&&([c,h]=z2(n,[c,h])),yb(c,h)}),l=yb(e.alpha,t.alpha);return{space:r,coords:a,alpha:l}}function yb(e,t){return Ne(e)||Ne(t)?e===t?null:0:e-t}function qD(e,t){return e=oe(e),t=oe(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ti(e){return zr(e,[Xt,"y"])}function iw(e,t){Ao(e,[Xt,"y"],t)}function WD(e){Object.defineProperty(e.prototype,"luminance",{get(){return ti(this)},set(t){iw(this,t)}})}var KD=Object.freeze({__proto__:null,getLuminance:ti,register:WD,setLuminance:iw});function GD(e,t){e=oe(e),t=oe(t);let r=Math.max(ti(e),0),n=Math.max(ti(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const HD=.56,ZD=.57,JD=.62,YD=.65,vb=.022,XD=1.414,QD=.1,e8=5e-4,t8=1.14,wb=.027,r8=1.14;function $b(e){return e>=vb?e:e+(vb-e)**XD}function ps(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function n8(e,t){t=oe(t),e=oe(e);let r,n,o,i,s,a;t=We(t,"srgb"),[i,s,a]=t.coords.map(m=>Ne(m)?0:m);let l=ps(i)*.2126729+ps(s)*.7151522+ps(a)*.072175;e=We(e,"srgb"),[i,s,a]=e.coords.map(m=>Ne(m)?0:m);let c=ps(i)*.2126729+ps(s)*.7151522+ps(a)*.072175,d=$b(l),f=$b(c),h=f>d;return Math.abs(f-d)<e8?n=0:h?(r=f**HD-d**ZD,n=r*t8):(r=f**YD-d**JD,n=r*r8),Math.abs(n)<QD?o=0:n>0?o=n-wb:o=n+wb,o*100}function o8(e,t){e=oe(e),t=oe(t);let r=Math.max(ti(e),0),n=Math.max(ti(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const i8=5e4;function s8(e,t){e=oe(e),t=oe(t);let r=Math.max(ti(e),0),n=Math.max(ti(t),0);return n>r&&([r,n]=[n,r]),n===0?i8:(r-n)/n}function a8(e,t){e=oe(e),t=oe(t);let r=zr(e,[Vr,"l"]),n=zr(t,[Vr,"l"]);return Math.abs(r-n)}const l8=216/24389,kb=24/116,yu=24389/27;let cf=vr.D65;var L0=new G({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:cf,base:Xt,fromBase(e){let r=e.map((n,o)=>n/cf[o]).map(n=>n>l8?Math.cbrt(n):(yu*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>kb?Math.pow(t[0],3):(116*t[0]-16)/yu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/yu,t[2]>kb?Math.pow(t[2],3):(116*t[2]-16)/yu].map((n,o)=>n*cf[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const df=Math.pow(5,.5)*.5+.5;function u8(e,t){e=oe(e),t=oe(t);let r=zr(e,[L0,"l"]),n=zr(t,[L0,"l"]),o=Math.abs(Math.pow(r,df)-Math.pow(n,df)),i=Math.pow(o,1/df)*Math.SQRT2-40;return i<7.5?0:i}var ju=Object.freeze({__proto__:null,contrastAPCA:n8,contrastDeltaPhi:u8,contrastLstar:a8,contrastMichelson:o8,contrastWCAG21:GD,contrastWeber:s8});function c8(e,t,r){sa(r)&&(r={algorithm:r});let{algorithm:n,...o}=r||{};if(!n){let i=Object.keys(ju).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=oe(e),t=oe(t);for(let i in ju)if("contrast"+n.toLowerCase()===i.toLowerCase())return ju[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function qc(e){let[t,r,n]=Ll(e,Xt),o=t+15*r+3*n;return[4*t/o,9*r/o]}function sw(e){let[t,r,n]=Ll(e,Xt),o=t+r+n;return[t/o,r/o]}function d8(e){Object.defineProperty(e.prototype,"uv",{get(){return qc(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return sw(this)}})}var f8=Object.freeze({__proto__:null,register:d8,uv:qc,xy:sw});function za(e,t,r={}){sa(r)&&(r={method:r});let{method:n=Gr.deltaE,...o}=r;for(let i in qs)if("deltae"+n.toLowerCase()===i.toLowerCase())return qs[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function aw(e,t=.25){let n=[G.get("oklch","lch"),"l"];return Ao(e,n,o=>o*(1+t))}function lw(e,t=.25){let n=[G.get("oklch","lch"),"l"];return Ao(e,n,o=>o*(1-t))}aw.returns="color";lw.returns="color";var h8=Object.freeze({__proto__:null,darken:lw,lighten:aw});function uw(e,t,r,n={}){return[e,t]=[oe(e),oe(t)],Go(r)==="object"&&([r,n]=[.5,r]),jl(e,t,n)(r??.5)}function cw(e,t,r={}){let n;am(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:s=2,maxSteps:a=1e3,...l}=r;n||([e,t]=[oe(e),oe(t)],n=jl(e,t,l));let c=za(e,t),d=o>0?Math.max(s,Math.ceil(c/o)+1):s,f=[];if(a!==void 0&&(d=Math.min(d,a)),d===1)f=[{p:.5,color:n(.5)}];else{let h=1/(d-1);f=Array.from({length:d},(m,y)=>{let $=y*h;return{p:$,color:n($)}})}if(o>0){let h=f.reduce((m,y,$)=>{if($===0)return 0;let k=za(y.color,f[$-1].color,i);return Math.max(m,k)},0);for(;h>o;){h=0;for(let m=1;m<f.length&&f.length<a;m++){let y=f[m-1],$=f[m],k=($.p+y.p)/2,x=n(k);h=Math.max(h,za(x,y.color),za(x,$.color)),f.splice(m,0,{p:k,color:n(k)}),m++}}}return f=f.map(h=>h.color),f}function jl(e,t,r={}){if(am(e)){let[l,c]=[e,t];return jl(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:s}=r;e=oe(e),t=oe(t),e=Vs(e),t=Vs(t);let a={colors:[e,t],options:r};if(n?n=G.get(n):n=G.registry[Gr.interpolationSpace]||e.space,o=o?G.get(o):n,e=We(e,n),t=We(t,n),e=ei(e),t=ei(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,f]=[zr(e,c),zr(t,c)];Ne(d)&&!Ne(f)?d=f:Ne(f)&&!Ne(d)&&(f=d),[d,f]=z2(l,[d,f]),Ao(e,c,d),Ao(t,c,f)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((h,m)=>{let y=t.coords[m];return vl(h,y,l)}),d=vl(e.alpha,t.alpha,l),f={space:n,coords:c,alpha:d};return s&&(f.coords=f.coords.map(h=>h/d)),o!==n&&(f=We(f,o)),f},{rangeArgs:a})}function am(e){return Go(e)==="function"&&!!e.rangeArgs}Gr.interpolationSpace="lab";function m8(e){e.defineFunction("mix",uw,{returns:"color"}),e.defineFunction("range",jl,{returns:"function<color>"}),e.defineFunction("steps",cw,{returns:"array<color>"})}var g8=Object.freeze({__proto__:null,isRange:am,mix:uw,range:jl,register:m8,steps:cw}),p8=new G({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ui,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,l]=[null,0,(r+t)/2],c=t-r;if(c!==0){switch(a=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-i)/c+(o<i?6:0);break;case o:s=(i-n)/c+2;break;case i:s=(n-o)/c+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),dw=new G({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ui,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,l]=[null,0,t],c=t-r;if(c!==0){switch(t){case n:s=(o-i)/c+(o<i?6:0);break;case o:s=(i-n)/c+2;break;case i:s=(n-o)/c+4}s=s*60}return l&&(a=c/l),s>=360&&(s-=360),[s,a*100,l*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),b8=new G({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:dw,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let i=1-n,s=i===0?0:1-r/i;return[t,s*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const y8=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],v8=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var fw=new fr({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:y8,fromXYZ_M:v8}),w8=new fr({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:fw,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const $8=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],k8=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var hw=new fr({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:om,toXYZ_M:$8,fromXYZ_M:k8});const x8=1/512,D8=16/512;var A8=new fr({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:hw,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<D8?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=x8?r*n**(1/1.8):16*t})}});const vu=1.09929682680944,xb=.018053968510807;var E8=new fr({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:$l,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<xb*4.5?t/4.5:r*Math.pow((n+vu-1)/vu,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=xb?r*(vu*Math.pow(n,.45)-(vu-1)):4.5*t})}}),C8=new G({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Tn,fromBase:Hr.fromBase,toBase:Hr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Ws=2*Math.PI,lc=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],uc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],ff=Number.MAX_VALUE,Qa=.206,lm=.03,Va=(1+Qa)/(1+lm);function Zt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((o,i)=>{n+=o*t[i]}),n}function el(e){return .5*(Va*e-Qa+Math.sqrt((Va*e-Qa)*(Va*e-Qa)+4*lm*Va*e))}function Ns(e){return(e**2+Qa*e)/(Va*(e+lm))}function um(e){let[t,r]=e;return[r/t,r/(1-t)]}function F8(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function cm(e,t){let r=ht(e,Ho);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,ht(r,t,r)}function Wc(e,t,r,n){let o=S8(e,t,r,n),i=cm([1,o*e,o*t],r),s=kt(1/Math.max(...i),1/3),a=s*o;return[s,a]}function M8(e,t,r,n,o,i,s,a){let l;if(a===void 0&&(a=Wc(e,t,i,s)),(r-o)*a[1]-(a[0]-o)*n<=0)l=a[1]*o/(n*a[0]+a[1]*(o-r));else{l=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-r));let c=r-o,d=n,f=Zt(Ho[0].slice(1),[e,t]),h=Zt(Ho[1].slice(1),[e,t]),m=Zt(Ho[2].slice(1),[e,t]),y=c+d*f,$=c+d*h,k=c+d*m,x=o*(1-l)+l*r,E=l*n,N=x+E*f,R=x+E*h,q=x+E*m,ie=N**3,Ce=R**3,me=q**3,De=3*y*N**2,He=3*$*R**2,Ze=3*k*q**2,St=6*y**2*N,Rr=6*$**2*R,mr=6*k**2*q,no=Zt(i[0],[ie,Ce,me])-1,jt=Zt(i[0],[De,He,Ze]),zn=Zt(i[0],[St,Rr,mr]),oo=jt/(jt*jt-.5*no*zn),rn=-no*oo,Ht=Zt(i[1],[ie,Ce,me])-1,Ue=Zt(i[1],[De,He,Ze]),Tt=Zt(i[1],[St,Rr,mr]),nn=Ue/(Ue*Ue-.5*Ht*Tt),sr=-Ht*nn,on=Zt(i[2],[ie,Ce,me])-1,vn=Zt(i[2],[De,He,Ze]),To=Zt(i[2],[St,Rr,mr]),ou=vn/(vn*vn-.5*on*To),ds=-on*ou;rn=oo>=0?rn:ff,sr=nn>=0?sr:ff,ds=ou>=0?ds:ff,l+=Math.min(rn,Math.min(sr,ds))}return l}function mw(e,t,r){let[n,o,i]=e,s=Wc(o,i,t,r),a=M8(o,i,n,1,n,t,r,s),l=um(s),c=a/Math.min(n*l[0],(1-n)*l[1]),d=F8(o,i),f=n*d[0],h=(1-n)*d[1],m=.9*c*Math.sqrt(Math.sqrt(1/(1/f**4+1/h**4)));return f=n*.4,h=(1-n)*.8,[Math.sqrt(1/(1/f**2+1/h**2)),m,a]}function S8(e,t,r,n){let o,i,s,a,l,c,d,f;Zt(n[0][0],[e,t])>1?([o,i,s,a,l]=n[0][1],[c,d,f]=r[0]):Zt(n[1][0],[e,t])>1?([o,i,s,a,l]=n[1][1],[c,d,f]=r[1]):([o,i,s,a,l]=n[2][1],[c,d,f]=r[2]);let h=o+i*e+s*t+a*e**2+l*e*t,m=Zt(Ho[0].slice(1),[e,t]),y=Zt(Ho[1].slice(1),[e,t]),$=Zt(Ho[2].slice(1),[e,t]),k=1+h*m,x=1+h*y,E=1+h*$,N=k**3,R=x**3,q=E**3,ie=3*m*k**2,Ce=3*y*x**2,me=3*$*E**2,De=6*m**2*k,He=6*y**2*x,Ze=6*$**2*E,St=c*N+d*R+f*q,Rr=c*ie+d*Ce+f*me,mr=c*De+d*He+f*Ze;return h=h-St*Rr/(Rr**2-.5*St*mr),h}function T8(e,t,r){let[n,o,i]=e,s=Ns(i),a=null,l=null;if(n=mn(n)/360,s!==0&&s!==1&&o!==0){let c=Math.cos(Ws*n),d=Math.sin(Ws*n),[f,h,m]=mw([s,c,d],t,r),y=.8,$=1.25,k,x,E,N;o<y?(k=$*o,x=0,E=y*f,N=1-E/h):(k=5*(o-.8),x=h,E=.2*h**2*1.25**2/f,N=1-E/(m-h));let R=x+k*E/(1-N*k);a=R*c,l=R*d}return[s,a,l]}function N8(e,t,r){let n=1e-7,o=1e-4,i=e[0],s=0,a=el(i),l=Math.sqrt(e[1]**2+e[2]**2),c=.5+Math.atan2(-e[2],-e[1])/Ws;if(a!==0&&a!==1&&l!==0){let f=e[1]/l,h=e[2]/l,[m,y,$]=mw([i,f,h],t,r),k=.8,x=1.25,E,N,R,q;l<y?(N=k*m,R=1-N/y,q=l/(N+R*l),s=q*k):(E=y,N=.2*y**2*x**2/m,R=1-N/($-y),q=(l-E)/(N+R*(l-E)),s=k+.2*q)}const d=Math.abs(s)<o;return d||a===0||Math.abs(1-a)<n?(c=null,d||(s=0)):c=mn(c*360),[c,s,a]}var P8=new G({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Tn,gamutSpace:"self",fromBase(e){return N8(e,lc,uc)},toBase(e){return T8(e,lc,uc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),gw=new G({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Tn,fromBase(e){return[el(e[0]),e[1],e[2]]},toBase(e){return[Ns(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),I8=new G({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:gw,fromBase:Hr.fromBase,toBase:Hr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function O8(e,t,r){let[n,o,i]=e;n=mn(n)/360;let s=Ns(i),a=null,l=null;if(s!==0&&o!==0){let c=Math.cos(Ws*n),d=Math.sin(Ws*n),f=Wc(c,d,t,r),[h,m]=um(f),y=.5,$=1-y/h,k=1-o*y/(y+m-m*$*o),x=o*m*y/(y+m-m*$*o);s=i*k;let E=i*x,N=Ns(k),R=x*N/k,q=Ns(s);E=E*q/s,s=q;let[ie,Ce,me]=cm([N,c*R,d*R],t),De=kt(1/Math.max(Math.max(ie,Ce),Math.max(me,0)),1/3);s=s*De,E=E*De,a=E*c,l=E*d}return[s,a,l]}function B8(e,t,r){let n=1e-4,o=e[0],i=0,s=el(o),a=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/Ws;if(o!==0&&o!==1&&a!==0){let c=e[1]/a,d=e[2]/a,f=Wc(c,d,t,r),[h,m]=um(f),y=.5,$=1-y/h,k=m/(a+o*m),x=k*o,E=k*a,N=Ns(x),R=E*N/x,[q,ie,Ce]=cm([N,c*R,d*R],t),me=kt(1/Math.max(Math.max(q,ie),Math.max(Ce,0)),1/3);o=o/me,a=a/me,a=a*el(o)/o,o=el(o),s=o/x,i=(y+m)*E/(m*y+m*$*E)}return Math.abs(i)<n||s===0?l=null:l=mn(l*360),[l,i,s]}var R8=new G({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Tn,gamutSpace:"self",fromBase(e){return B8(e,lc,uc)},toBase(e){return O8(e,lc,uc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let pw=vr.D65;const L8=216/24389,Db=24389/27,[Ab,Eb]=qc({space:Xt,coords:pw});var bw=new G({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:pw,base:Xt,fromBase(e){let t=[$t(e[0]),$t(e[1]),$t(e[2])],r=t[1],[n,o]=qc({space:Xt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let i=r<=L8?Db*r:116*Math.cbrt(r)-16;return[i,13*i*(n-Ab),13*i*(o-Eb)]},toBase(e){let[t,r,n]=e;if(t===0||Ne(t))return[0,0,0];r=$t(r),n=$t(n);let o=r/(13*t)+Ab,i=n/(13*t)+Eb,s=t<=8?t/Db:Math.pow((t+16)/116,3);return[s*(9*o/(4*i)),s,s*((12-3*o-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),dm=new G({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:bw,fromBase:Hr.fromBase,toBase:Hr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const j8=216/24389,_8=24389/27,Cb=Rt[0][0],Fb=Rt[0][1],hf=Rt[0][2],Mb=Rt[1][0],Sb=Rt[1][1],mf=Rt[1][2],Tb=Rt[2][0],Nb=Rt[2][1],gf=Rt[2][2];function bs(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function cc(e){const t=Math.pow(e+16,3)/1560896,r=t>j8?t:e/_8,n=r*(284517*Cb-94839*hf),o=r*(838422*hf+769860*Fb+731718*Cb),i=r*(632260*hf-126452*Fb),s=r*(284517*Mb-94839*mf),a=r*(838422*mf+769860*Sb+731718*Mb),l=r*(632260*mf-126452*Sb),c=r*(284517*Tb-94839*gf),d=r*(838422*gf+769860*Nb+731718*Tb),f=r*(632260*gf-126452*Nb);return{r0s:n/i,r0i:o*e/i,r1s:n/(i+126452),r1i:(o-769860)*e/(i+126452),g0s:s/l,g0i:a*e/l,g1s:s/(l+126452),g1i:(a-769860)*e/(l+126452),b0s:c/f,b0i:d*e/f,b1s:c/(f+126452),b1i:(d-769860)*e/(f+126452)}}function Pb(e,t){const r=t/360*Math.PI*2,n=bs(e.r0s,e.r0i,r),o=bs(e.r1s,e.r1i,r),i=bs(e.g0s,e.g0i,r),s=bs(e.g1s,e.g1i,r),a=bs(e.b0s,e.b0i,r),l=bs(e.b1s,e.b1i,r);return Math.min(n,o,i,s,a,l)}var U8=new G({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dm,gamutSpace:Ui,fromBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=cc(t),s=Pb(i,n);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=cc(n);o=Pb(i,t)/100*r}return[n,o,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Rt[0][0];Rt[0][1];Rt[0][2];Rt[1][0];Rt[1][1];Rt[1][2];Rt[2][0];Rt[2][1];Rt[2][2];function ys(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Ib(e){let t=ys(e.r0s,e.r0i),r=ys(e.r1s,e.r1i),n=ys(e.g0s,e.g0i),o=ys(e.g1s,e.g1i),i=ys(e.b0s,e.b0i),s=ys(e.b1s,e.b1i);return Math.min(t,r,n,o,i,s)}var z8=new G({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dm,gamutSpace:"self",fromBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=cc(t),s=Ib(i);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=cc(n);o=Ib(i)/100*r}return[n,o,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),fm=new fr({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:$l.toBase,fromBase:$l.fromBase});const Ob=203,Bb=2610/2**14,V8=2**14/2610,q8=2523/2**5,Rb=2**5/2523,Lb=3424/2**12,jb=2413/2**7,_b=2392/2**7;var W8=new fr({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:fm,toBase(e){return e.map(function(t){return(Math.max(t**Rb-Lb,0)/(jb-_b*t**Rb))**V8*1e4/Ob})},fromBase(e){return e.map(function(t){let r=Math.max(t*Ob/1e4,0),n=Lb+jb*r**Bb,o=1+_b*r**Bb;return(n/o)**q8})}});const Ub=.17883277,zb=.28466892,Vb=.55991073,pf=3.7743;var K8=new fr({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:fm,toBase(e){return e.map(function(t){return t<=.5?t**2/3*pf:(Math.exp((t-Vb)/Ub)+zb)/12*pf})},fromBase(e){return e.map(function(t){return t/=pf,t<=1/12?kt(3*t,.5):Ub*Math.log(12*t-zb)+Vb})}});const yw={};Qo.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=vw(e.W1,e.W2,e.options.method))});Qo.add("chromatic-adaptation-end",e=>{e.M||(e.M=vw(e.W1,e.W2,e.options.method))});function Kc({id:e,toCone_M:t,fromCone_M:r}){yw[e]=arguments[0]}function vw(e,t,r="Bradford"){let n=yw[r],[o,i,s]=Ua(n.toCone_M,e),[a,l,c]=Ua(n.toCone_M,t),d=[[a/o,0,0],[0,l/i,0],[0,0,c/s]],f=Ua(d,n.toCone_M);return Ua(n.fromCone_M,f)}Kc({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Kc({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Kc({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Kc({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(vr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});vr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const G8=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],H8=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ww=new fr({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:vr.ACES,toXYZ_M:G8,fromXYZ_M:H8});const wu=2**-16,bf=-.35828683,$u=(Math.log2(65504)+9.72)/17.52;var Z8=new fr({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[bf,$u],name:"Red"},g:{range:[bf,$u],name:"Green"},b:{range:[bf,$u],name:"Blue"}},referred:"scene",base:ww,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-wu)*2:r<$u?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(wu)+9.72)/17.52:t<wu?(Math.log2(wu+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),qb=Object.freeze({__proto__:null,A98RGB:w8,A98RGB_Linear:fw,ACEScc:Z8,ACEScg:ww,CAM16_JMh:ED,HCT:wl,HPLuv:z8,HSL:p8,HSLuv:U8,HSV:dw,HWB:b8,ICTCP:O0,JzCzHz:I0,Jzazbz:W2,LCH:Hr,LCHuv:dm,Lab:Vr,Lab_D65:L0,Luv:bw,OKLCH:C8,OKLab:Tn,OKLrCH:I8,OKLrab:gw,Okhsl:P8,Okhsv:R8,P3:ow,P3_Linear:rw,ProPhoto:A8,ProPhoto_Linear:hw,REC_2020:tw,REC_2020_Linear:$l,REC_2020_Scene_Referred:E8,REC_2100_HLG:K8,REC_2100_Linear:fm,REC_2100_PQ:W8,XYZ_ABS_D65:im,XYZ_D50:om,XYZ_D65:Xt,sRGB:Ui,sRGB_Linear:nw});let Ke=class Ar{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=oe(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:G.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Ne(i)?i:i===void 0?1:zc(0,i,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Ar(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=zD(this,...t);return r.color=new Ar(r.color),r}static get(t,...r){return zs(t,this)?t:new Ar(t,...r)}static try(t,r){if(zs(t,this))return t;let n=U2(t,r);return n?new Ar(n):null}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,s=function(...a){let l=r(...a);if(i==="color")l=Ar.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let f=c(...d);return Ar.get(f)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>Ar.get(c)));return l};t in Ar||(Ar[t]=s),o&&(Ar.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)Ar.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Ar);else for(let r in t)Ar.defineFunction(r,t[r])}};Ke.defineFunctions({get:zr,getAll:Ll,set:Ao,setAll:nm,to:We,equals:qD,inGamut:Oi,toGamut:ei,distance:q2,deltas:VD,toString:Xa});Object.assign(Ke,{util:U6,hooks:Qo,WHITES:vr,Space:G,spaces:G.registry,parse:j2,defaults:Gr});for(let e of Object.keys(qb))G.register(qb[e]);for(let e in G.registry)j0(e,G.registry[e]);Qo.add("colorspace-init-end",e=>{j0(e.id,e),e.aliases?.forEach(t=>{j0(t,e)})});function j0(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(Ke.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:((i,s)=>{try{return G.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)}),get:(i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)&&s in o){let{index:l}=G.resolveCoord([t,s]);if(l>=0)return i[l]}return Reflect.get(i,s,a)},set:(i,s,a,l)=>{if(s&&typeof s!="symbol"&&!(s in i)||Number(s)>=0){let{index:c}=G.resolveCoord([t,s]);if(c>=0)return i[c]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,l)}});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}Ke.extend(qs);Ke.extend({deltaE:za});Object.assign(Ke,{deltaEMethods:qs});Ke.extend(h8);Ke.extend({contrast:c8});Ke.extend(f8);Ke.extend(KD);Ke.extend(g8);Ke.extend(ju);const $w=Symbol("no update");function Wb(e){return e!==$w}class yf extends Ln()("observable-value-update"){}class J8 extends Ln()("observable-value-resolve"){}class Y8 extends Ln()("observable-value-error"){}class X8 extends _h("observable-destroy"){}class Q8 extends _h("observable-callback-call"){}class e9 extends Ln()("observable-params-update"){}class kw{listenTarget=new Uh;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===$w)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const o=this.value;return this.value=r,this.listenTarget.dispatch(new yf({detail:[r,o]})),!0}return!1}listen(t,r){const n=o=>r(...o.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(yf,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(yf,r)}destroy(){this.listenTarget.dispatch(new X8),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function hm(e,t){return v3(e,t,(r,n)=>C.isFunction(r)&&C.isFunction(n)?!0:C.strictEquals(r,n))}var tl;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(tl||(tl={}));class t9 extends kw{equalityCheck;waitingForValueDeferredPromise=new Gu;lastSetPromise;lastSetId=Pi();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||hm,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Pi();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Gu,super.setValue(this.waitingForValueDeferredPromise.promise,C.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=mt(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(t){return Wb(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,C.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Pi(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new J8({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,C.strictEquals),this.dispatch(new Y8({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Wb(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(mt(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?tl.Rejected:this.value instanceof Promise?tl.Waiting:tl.Resolved}}class Ds extends t9{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Ds.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||hm,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Ds.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Ds.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(mt(t))}finally{this.dispatch(new Q8)}}updateLastParams(t){try{return this.internalParams===Ds.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new e9({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(mt(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return C.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function r9(e){return Ct(e)&&!Br(e)&&!Ul(e)&&Symbol.asyncIterator in e}function Br(e){return Array.isArray(e)}function xw(e){return typeof e=="bigint"}function _l(e){return typeof e=="boolean"}function mm(e){return e instanceof globalThis.Date}function n9(e){return typeof e=="function"}function o9(e){return Ct(e)&&!Br(e)&&!Ul(e)&&Symbol.iterator in e}function i9(e){return e===null}function Qn(e){return typeof e=="number"}function Ct(e){return typeof e=="object"&&e!==null}function Dw(e){return e instanceof globalThis.RegExp}function yt(e){return typeof e=="string"}function s9(e){return typeof e=="symbol"}function Ul(e){return e instanceof globalThis.Uint8Array}function xt(e){return e===void 0}function a9(e){return e.map(t=>dc(t))}function l9(e){return new Date(e.getTime())}function u9(e){return new Uint8Array(e)}function c9(e){return new RegExp(e.source,e.flags)}function d9(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=dc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=dc(e[r]);return t}function dc(e){return Br(e)?a9(e):mm(e)?l9(e):Ul(e)?u9(e):Dw(e)?c9(e):Ct(e)?d9(e):e}function Zr(e){return dc(e)}function gm(e,t){return Zr(t===void 0?e:{...t,...e})}function Aw(e){return eo(e)&&globalThis.Symbol.asyncIterator in e}function Ew(e){return eo(e)&&globalThis.Symbol.iterator in e}function Cw(e){return e instanceof globalThis.Promise}function pm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function bm(e){return e instanceof globalThis.Uint8Array}function Fw(e,t){return t in e}function eo(e){return e!==null&&typeof e=="object"}function Jr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function li(e){return e===void 0}function Gc(e){return e===null}function Hc(e){return typeof e=="boolean"}function de(e){return typeof e=="number"}function Mw(e){return globalThis.Number.isInteger(e)}function go(e){return typeof e=="bigint"}function Wr(e){return typeof e=="string"}function Sw(e){return typeof e=="function"}function Zc(e){return typeof e=="symbol"}function Tw(e){return go(e)||Hc(e)||Gc(e)||de(e)||Wr(e)||Zc(e)||li(e)}var bt;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=eo(s);return e.AllowArrayObject?a:a&&!Jr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function o(s){return e.AllowNaN?de(s):Number.isFinite(s)}e.IsNumberLike=o;function i(s){const a=li(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=i})(bt||(bt={}));function f9(e){return globalThis.Object.freeze(e).map(t=>fc(t))}function h9(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=fc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=fc(e[r]);return globalThis.Object.freeze(t)}function fc(e){return Br(e)?f9(e):mm(e)?e:Ul(e)?e:Dw(e)?e:Ct(e)?h9(e):e}function _(e,t){const r=t!==void 0?{...t,...e}:e;switch(bt.InstanceMode){case"freeze":return fc(r);case"clone":return Zr(r);default:return r}}class nr extends Error{constructor(t){super(t)}}const Tr=Symbol.for("TypeBox.Transform"),zl=Symbol.for("TypeBox.Readonly"),Co=Symbol.for("TypeBox.Optional"),Jc=Symbol.for("TypeBox.Hint"),L=Symbol.for("TypeBox.Kind");function ym(e){return Ct(e)&&e[zl]==="Readonly"}function ui(e){return Ct(e)&&e[Co]==="Optional"}function Nw(e){return ke(e,"Any")}function Pw(e){return ke(e,"Argument")}function aa(e){return ke(e,"Array")}function Yc(e){return ke(e,"AsyncIterator")}function Xc(e){return ke(e,"BigInt")}function Vl(e){return ke(e,"Boolean")}function la(e){return ke(e,"Computed")}function ua(e){return ke(e,"Constructor")}function m9(e){return ke(e,"Date")}function ca(e){return ke(e,"Function")}function da(e){return ke(e,"Integer")}function pn(e){return ke(e,"Intersect")}function Qc(e){return ke(e,"Iterator")}function ke(e,t){return Ct(e)&&L in e&&e[L]===t}function Iw(e){return _l(e)||Qn(e)||yt(e)}function Qi(e){return ke(e,"Literal")}function es(e){return ke(e,"MappedKey")}function en(e){return ke(e,"MappedResult")}function ql(e){return ke(e,"Never")}function g9(e){return ke(e,"Not")}function vm(e){return ke(e,"Null")}function fa(e){return ke(e,"Number")}function jn(e){return ke(e,"Object")}function ed(e){return ke(e,"Promise")}function td(e){return ke(e,"Record")}function Ir(e){return ke(e,"Ref")}function Ow(e){return ke(e,"RegExp")}function Wl(e){return ke(e,"String")}function wm(e){return ke(e,"Symbol")}function ts(e){return ke(e,"TemplateLiteral")}function p9(e){return ke(e,"This")}function Ge(e){return Ct(e)&&Tr in e}function rs(e){return ke(e,"Tuple")}function Kl(e){return ke(e,"Undefined")}function Gt(e){return ke(e,"Union")}function b9(e){return ke(e,"Uint8Array")}function y9(e){return ke(e,"Unknown")}function v9(e){return ke(e,"Unsafe")}function w9(e){return ke(e,"Void")}function $9(e){return Ct(e)&&L in e&&yt(e[L])}function $r(e){return Nw(e)||Pw(e)||aa(e)||Vl(e)||Xc(e)||Yc(e)||la(e)||ua(e)||m9(e)||ca(e)||da(e)||pn(e)||Qc(e)||Qi(e)||es(e)||en(e)||ql(e)||g9(e)||vm(e)||fa(e)||jn(e)||ed(e)||td(e)||Ir(e)||Ow(e)||Wl(e)||wm(e)||ts(e)||p9(e)||rs(e)||Kl(e)||Gt(e)||b9(e)||y9(e)||v9(e)||w9(e)||$9(e)}const k9=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Bw(e){try{return new RegExp(e),!0}catch{return!1}}function $m(e){if(!yt(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function Rw(e){return km(e)||at(e)}function Sa(e){return xt(e)||xw(e)}function ze(e){return xt(e)||Qn(e)}function km(e){return xt(e)||_l(e)}function Le(e){return xt(e)||yt(e)}function x9(e){return xt(e)||yt(e)&&$m(e)&&Bw(e)}function D9(e){return xt(e)||yt(e)&&$m(e)}function Lw(e){return xt(e)||at(e)}function hc(e){return Ct(e)&&e[Co]==="Optional"}function Nn(e){return xe(e,"Any")&&Le(e.$id)}function A9(e){return xe(e,"Argument")&&Qn(e.index)}function ns(e){return xe(e,"Array")&&e.type==="array"&&Le(e.$id)&&at(e.items)&&ze(e.minItems)&&ze(e.maxItems)&&km(e.uniqueItems)&&Lw(e.contains)&&ze(e.minContains)&&ze(e.maxContains)}function xm(e){return xe(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Le(e.$id)&&at(e.items)}function rd(e){return xe(e,"BigInt")&&e.type==="bigint"&&Le(e.$id)&&Sa(e.exclusiveMaximum)&&Sa(e.exclusiveMinimum)&&Sa(e.maximum)&&Sa(e.minimum)&&Sa(e.multipleOf)}function os(e){return xe(e,"Boolean")&&e.type==="boolean"&&Le(e.$id)}function E9(e){return xe(e,"Computed")&&yt(e.target)&&Br(e.parameters)&&e.parameters.every(t=>at(t))}function nd(e){return xe(e,"Constructor")&&e.type==="Constructor"&&Le(e.$id)&&Br(e.parameters)&&e.parameters.every(t=>at(t))&&at(e.returns)}function od(e){return xe(e,"Date")&&e.type==="Date"&&Le(e.$id)&&ze(e.exclusiveMaximumTimestamp)&&ze(e.exclusiveMinimumTimestamp)&&ze(e.maximumTimestamp)&&ze(e.minimumTimestamp)&&ze(e.multipleOfTimestamp)}function id(e){return xe(e,"Function")&&e.type==="Function"&&Le(e.$id)&&Br(e.parameters)&&e.parameters.every(t=>at(t))&&at(e.returns)}function Fo(e){return xe(e,"Integer")&&e.type==="integer"&&Le(e.$id)&&ze(e.exclusiveMaximum)&&ze(e.exclusiveMinimum)&&ze(e.maximum)&&ze(e.minimum)&&ze(e.multipleOf)}function jw(e){return Ct(e)&&Object.entries(e).every(([t,r])=>$m(t)&&at(r))}function is(e){return xe(e,"Intersect")&&!(yt(e.type)&&e.type!=="object")&&Br(e.allOf)&&e.allOf.every(t=>at(t)&&!N9(t))&&Le(e.type)&&(km(e.unevaluatedProperties)||Lw(e.unevaluatedProperties))&&Le(e.$id)}function Dm(e){return xe(e,"Iterator")&&e.type==="Iterator"&&Le(e.$id)&&at(e.items)}function xe(e,t){return Ct(e)&&L in e&&e[L]===t}function _w(e){return ci(e)&&yt(e.const)}function Uw(e){return ci(e)&&Qn(e.const)}function zw(e){return ci(e)&&_l(e.const)}function ci(e){return xe(e,"Literal")&&Le(e.$id)&&C9(e.const)}function C9(e){return _l(e)||Qn(e)||yt(e)}function F9(e){return xe(e,"MappedKey")&&Br(e.keys)&&e.keys.every(t=>Qn(t)||yt(t))}function M9(e){return xe(e,"MappedResult")&&jw(e.properties)}function di(e){return xe(e,"Never")&&Ct(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Ks(e){return xe(e,"Not")&&at(e.not)}function Am(e){return xe(e,"Null")&&e.type==="null"&&Le(e.$id)}function Nr(e){return xe(e,"Number")&&e.type==="number"&&Le(e.$id)&&ze(e.exclusiveMaximum)&&ze(e.exclusiveMinimum)&&ze(e.maximum)&&ze(e.minimum)&&ze(e.multipleOf)}function lt(e){return xe(e,"Object")&&e.type==="object"&&Le(e.$id)&&jw(e.properties)&&Rw(e.additionalProperties)&&ze(e.minProperties)&&ze(e.maxProperties)}function Em(e){return xe(e,"Promise")&&e.type==="Promise"&&Le(e.$id)&&at(e.item)}function er(e){return xe(e,"Record")&&e.type==="object"&&Le(e.$id)&&Rw(e.additionalProperties)&&Ct(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&Bw(r[0])&&Ct(t.patternProperties)&&at(t.patternProperties[r[0]])})(e)}function S9(e){return xe(e,"Ref")&&Le(e.$id)&&yt(e.$ref)}function kl(e){return xe(e,"RegExp")&&Le(e.$id)&&yt(e.source)&&yt(e.flags)&&ze(e.maxLength)&&ze(e.minLength)}function Pn(e){return xe(e,"String")&&e.type==="string"&&Le(e.$id)&&ze(e.minLength)&&ze(e.maxLength)&&x9(e.pattern)&&D9(e.format)}function xl(e){return xe(e,"Symbol")&&e.type==="symbol"&&Le(e.$id)}function Dl(e){return xe(e,"TemplateLiteral")&&e.type==="string"&&yt(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function T9(e){return xe(e,"This")&&Le(e.$id)&&yt(e.$ref)}function N9(e){return Ct(e)&&Tr in e}function sd(e){return xe(e,"Tuple")&&e.type==="array"&&Le(e.$id)&&Qn(e.minItems)&&Qn(e.maxItems)&&e.minItems===e.maxItems&&(xt(e.items)&&xt(e.additionalItems)&&e.minItems===0||Br(e.items)&&e.items.every(t=>at(t)))}function zi(e){return xe(e,"Undefined")&&e.type==="undefined"&&Le(e.$id)}function Eo(e){return xe(e,"Union")&&Le(e.$id)&&Ct(e)&&Br(e.anyOf)&&e.anyOf.every(t=>at(t))}function Gl(e){return xe(e,"Uint8Array")&&e.type==="Uint8Array"&&Le(e.$id)&&ze(e.minByteLength)&&ze(e.maxByteLength)}function In(e){return xe(e,"Unknown")&&Le(e.$id)}function P9(e){return xe(e,"Unsafe")}function ad(e){return xe(e,"Void")&&e.type==="void"&&Le(e.$id)}function I9(e){return Ct(e)&&L in e&&yt(e[L])&&!k9.includes(e[L])}function at(e){return Ct(e)&&(Nn(e)||A9(e)||ns(e)||os(e)||rd(e)||xm(e)||E9(e)||nd(e)||od(e)||id(e)||Fo(e)||is(e)||Dm(e)||ci(e)||F9(e)||M9(e)||di(e)||Ks(e)||Am(e)||Nr(e)||lt(e)||Em(e)||er(e)||S9(e)||kl(e)||Pn(e)||xl(e)||Dl(e)||T9(e)||sd(e)||zi(e)||Eo(e)||Gl(e)||In(e)||P9(e)||ad(e)||I9(e))}const O9="(true|false)",_u="(0|[1-9][0-9]*)",Vw="(.*)",B9="(?!.*)",Gs=`^${_u}$`,Hs=`^${Vw}$`,R9=`^${B9}$`,qw=new Map;function Cm(e){return qw.has(e)}function Fm(e){return qw.get(e)}const Mm=new Map;function ri(e){return Mm.has(e)}function Sm(e,t){Mm.set(e,t)}function Tm(e){return Mm.get(e)}function L9(e,t){return e.includes(t)}function j9(e){return[...new Set(e)]}function _9(e,t){return e.filter(r=>t.includes(r))}function U9(e,t){return e.reduce((r,n)=>_9(r,n),t)}function z9(e){return e.length===1?e[0]:e.length>1?U9(e.slice(1),e[0]):[]}function V9(e){const t=[];for(const r of e)t.push(...r);return t}function Al(e){return _({[L]:"Any"},e)}function Nm(e,t){return _({[L]:"Array",type:"array",items:e},t)}function q9(e){return _({[L]:"Argument",index:e})}function Pm(e,t){return _({[L]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function Ot(e,t,r){return _({[L]:"Computed",target:e,parameters:t},r)}function W9(e,t){const{[t]:r,...n}=e;return n}function Yr(e,t){return t.reduce((r,n)=>W9(r,n),e)}function ut(e){return _({[L]:"Never",not:{}},e)}function or(e){return _({[L]:"MappedResult",properties:e})}function Im(e,t,r){return _({[L]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function Hl(e,t,r){return _({[L]:"Function",type:"Function",parameters:e,returns:t},r)}function _0(e,t){return _({[L]:"Union",anyOf:e},t)}function K9(e){return e.some(t=>ui(t))}function Kb(e){return e.map(t=>ui(t)?G9(t):t)}function G9(e){return Yr(e,[Co])}function H9(e,t){return K9(e)?mi(_0(Kb(e),t)):_0(Kb(e),t)}function ha(e,t){return e.length===1?_(e[0],t):e.length===0?ut(t):H9(e,t)}function ir(e,t){return e.length===0?ut(t):e.length===1?_(e[0],t):_0(e,t)}class Gb extends nr{}function Z9(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Om(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function vo(e,t){return Om(e,t,"(")}function El(e,t){return Om(e,t,")")}function Ww(e,t){return Om(e,t,"|")}function J9(e){if(!(vo(e,0)&&El(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(vo(e,r)&&(t+=1),El(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function Y9(e){return e.slice(1,e.length-1)}function X9(e){let t=0;for(let r=0;r<e.length;r++)if(vo(e,r)&&(t+=1),El(e,r)&&(t-=1),Ww(e,r)&&t===0)return!0;return!1}function Q9(e){for(let t=0;t<e.length;t++)if(vo(e,t))return!0;return!1}function eA(e){let[t,r]=[0,0];const n=[];for(let i=0;i<e.length;i++)if(vo(e,i)&&(t+=1),El(e,i)&&(t-=1),Ww(e,i)&&t===0){const s=e.slice(r,i);s.length>0&&n.push(Zs(s)),r=i+1}const o=e.slice(r);return o.length>0&&n.push(Zs(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function tA(e){function t(o,i){if(!vo(o,i))throw new Gb("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=i;a<o.length;a++)if(vo(o,a)&&(s+=1),El(o,a)&&(s-=1),s===0)return[i,a];throw new Gb("TemplateLiteralParser: Unclosed group parens in expression")}function r(o,i){for(let s=i;s<o.length;s++)if(vo(o,s))return[i,s];return[i,o.length]}const n=[];for(let o=0;o<e.length;o++)if(vo(e,o)){const[i,s]=t(e,o),a=e.slice(i,s+1);n.push(Zs(a)),o=s}else{const[i,s]=r(e,o),a=e.slice(i,s);a.length>0&&n.push(Zs(a)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function Zs(e){return J9(e)?Zs(Y9(e)):X9(e)?eA(e):Q9(e)?tA(e):{type:"const",const:Z9(e)}}function Bm(e){return Zs(e.slice(1,e.length-1))}class rA extends nr{}function nA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function oA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function iA(e){return e.type==="const"&&e.const===".*"}function Cl(e){return nA(e)||iA(e)?!1:oA(e)?!0:e.type==="and"?e.expr.every(t=>Cl(t)):e.type==="or"?e.expr.every(t=>Cl(t)):e.type==="const"?!0:(()=>{throw new rA("Unknown expression type")})()}function sA(e){const t=Bm(e.pattern);return Cl(t)}class aA extends nr{}function*Kw(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Kw(e.slice(1)))yield`${t}${r}`}function*lA(e){return yield*Kw(e.expr.map(t=>[...ld(t)]))}function*uA(e){for(const t of e.expr)yield*ld(t)}function*cA(e){return yield e.const}function*ld(e){return e.type==="and"?yield*lA(e):e.type==="or"?yield*uA(e):e.type==="const"?yield*cA(e):(()=>{throw new aA("Unknown expression")})()}function Gw(e){const t=Bm(e.pattern);return Cl(t)?[...ld(t)]:[]}function At(e,t){return _({[L]:"Literal",const:e,type:typeof e},t)}function Hw(e){return _({[L]:"Boolean",type:"boolean"},e)}function Rm(e){return _({[L]:"BigInt",type:"bigint"},e)}function ss(e){return _({[L]:"Number",type:"number"},e)}function Vi(e){return _({[L]:"String",type:"string"},e)}function*dA(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Hw():t==="number"?yield ss():t==="bigint"?yield Rm():t==="string"?yield Vi():yield(()=>{const r=t.split("|").map(n=>At(n.trim()));return r.length===0?ut():r.length===1?r[0]:ha(r)})()}function*fA(e){if(e[1]!=="{"){const t=At("$"),r=U0(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=dA(e.slice(2,t)),n=U0(e.slice(t+1));return yield*[...r,...n]}yield At(e)}function*U0(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=At(e.slice(0,t)),n=fA(e.slice(t));return yield*[r,...n]}yield At(e)}function hA(e){return[...U0(e)]}class mA extends nr{}function gA(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Zw(e,t){return ts(e)?e.pattern.slice(1,e.pattern.length-1):Gt(e)?`(${e.anyOf.map(r=>Zw(r,t)).join("|")})`:fa(e)?`${t}${_u}`:da(e)?`${t}${_u}`:Xc(e)?`${t}${_u}`:Wl(e)?`${t}${Vw}`:Qi(e)?`${t}${gA(e.const.toString())}`:Vl(e)?`${t}${O9}`:(()=>{throw new mA(`Unexpected Kind '${e[L]}'`)})()}function Hb(e){return`^${e.map(t=>Zw(t,"")).join("")}$`}function mc(e){const r=Gw(e).map(n=>At(n));return ha(r)}function Jw(e,t){const r=yt(e)?Hb(hA(e)):Hb(e);return _({[L]:"TemplateLiteral",type:"string",pattern:r},t)}function pA(e){return Gw(e).map(r=>r.toString())}function bA(e){const t=[];for(const r of e)t.push(...fi(r));return t}function yA(e){return[e.toString()]}function fi(e){return[...new Set(ts(e)?pA(e):Gt(e)?bA(e.anyOf):Qi(e)?yA(e.const):fa(e)?["[number]"]:da(e)?["[number]"]:[])]}function vA(e,t,r){const n={};for(const o of Object.getOwnPropertyNames(t))n[o]=ud(e,fi(t[o]),r);return n}function wA(e,t,r){return vA(e,t.properties,r)}function $A(e,t,r){const n=wA(e,t,r);return or(n)}function Yw(e,t){return e.map(r=>Xw(r,t))}function kA(e){return e.filter(t=>!ql(t))}function xA(e,t){return t5(kA(Yw(e,t)))}function DA(e){return e.some(t=>ql(t))?[]:e}function AA(e,t){return ha(DA(Yw(e,t)))}function EA(e,t){return t in e?e[t]:t==="[number]"?ha(e):ut()}function CA(e,t){return t==="[number]"?e:ut()}function FA(e,t){return t in e?e[t]:ut()}function Xw(e,t){return pn(e)?xA(e.allOf,t):Gt(e)?AA(e.anyOf,t):rs(e)?EA(e.items??[],t):aa(e)?CA(e.items,t):jn(e)?FA(e.properties,t):ut()}function Lm(e,t){return t.map(r=>Xw(e,r))}function Zb(e,t){return ha(Lm(e,t))}function ud(e,t,r){if(Ir(e)||Ir(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!$r(e)||!$r(t))throw new nr(n);return Ot("Index",[e,t])}return en(t)?$A(e,t,r):es(t)?NA(e,t,r):_($r(t)?Zb(e,fi(t)):Zb(e,t),r)}function MA(e,t,r){return{[t]:ud(e,[t],Zr(r))}}function SA(e,t,r){return t.reduce((n,o)=>({...n,...MA(e,o,r)}),{})}function TA(e,t,r){return SA(e,t.keys,r)}function NA(e,t,r){const n=TA(e,t,r);return or(n)}function jm(e,t){return _({[L]:"Iterator",type:"Iterator",items:e},t)}function PA(e){return globalThis.Object.keys(e).filter(t=>!ui(e[t]))}function IA(e,t){const r=PA(e),n=r.length>0?{[L]:"Object",type:"object",required:r,properties:e}:{[L]:"Object",type:"object",properties:e};return _(n,t)}var Kt=IA;function Qw(e,t){return _({[L]:"Promise",type:"Promise",item:e},t)}function OA(e){return _(Yr(e,[zl]))}function BA(e){return _({...e,[zl]:"Readonly"})}function RA(e,t){return t===!1?OA(e):BA(e)}function hi(e,t){const r=t??!0;return en(e)?_A(e,r):RA(e,r)}function LA(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=hi(e[n],t);return r}function jA(e,t){return LA(e.properties,t)}function _A(e,t){const r=jA(e,t);return or(r)}function ma(e,t){return _(e.length>0?{[L]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[L]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function e5(e,t){return e in t?ln(e,t[e]):or(t)}function UA(e){return{[e]:At(e)}}function zA(e){const t={};for(const r of e)t[r]=At(r);return t}function VA(e,t){return L9(t,e)?UA(e):zA(t)}function qA(e,t){const r=VA(e,t);return e5(e,r)}function Ta(e,t){return t.map(r=>ln(e,r))}function WA(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=ln(e,t[n]);return r}function ln(e,t){const r={...t};return ui(t)?mi(ln(e,Yr(t,[Co]))):ym(t)?hi(ln(e,Yr(t,[zl]))):en(t)?e5(e,t.properties):es(t)?qA(e,t.keys):ua(t)?Im(Ta(e,t.parameters),ln(e,t.returns),r):ca(t)?Hl(Ta(e,t.parameters),ln(e,t.returns),r):Yc(t)?Pm(ln(e,t.items),r):Qc(t)?jm(ln(e,t.items),r):pn(t)?gi(Ta(e,t.allOf),r):Gt(t)?ir(Ta(e,t.anyOf),r):rs(t)?ma(Ta(e,t.items??[]),r):jn(t)?Kt(WA(e,t.properties),r):aa(t)?Nm(ln(e,t.items),r):ed(t)?Qw(ln(e,t.item),r):t}function KA(e,t){const r={};for(const n of e)r[n]=ln(n,t);return r}function GA(e,t,r){const n=$r(e)?fi(e):e,o=t({[L]:"MappedKey",keys:n}),i=KA(n,o);return Kt(i,r)}function HA(e){return _(Yr(e,[Co]))}function ZA(e){return _({...e,[Co]:"Optional"})}function JA(e,t){return t===!1?HA(e):ZA(e)}function mi(e,t){const r=t??!0;return en(e)?QA(e,r):JA(e,r)}function YA(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=mi(e[n],t);return r}function XA(e,t){return YA(e.properties,t)}function QA(e,t){const r=XA(e,t);return or(r)}function z0(e,t={}){const r=e.every(o=>jn(o)),n=$r(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return _(t.unevaluatedProperties===!1||$r(t.unevaluatedProperties)||r?{...n,[L]:"Intersect",type:"object",allOf:e}:{...n,[L]:"Intersect",allOf:e},t)}function eE(e){return e.every(t=>ui(t))}function tE(e){return Yr(e,[Co])}function Jb(e){return e.map(t=>ui(t)?tE(t):t)}function rE(e,t){return eE(e)?mi(z0(Jb(e),t)):z0(Jb(e),t)}function t5(e,t={}){if(e.length===1)return _(e[0],t);if(e.length===0)return ut(t);if(e.some(r=>Ge(r)))throw new Error("Cannot intersect transform types");return rE(e,t)}function gi(e,t){if(e.length===1)return _(e[0],t);if(e.length===0)return ut(t);if(e.some(r=>Ge(r)))throw new Error("Cannot intersect transform types");return z0(e,t)}function ga(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new nr("Ref: $ref must be a string");return _({[L]:"Ref",$ref:t},r)}function nE(e,t){return Ot("Awaited",[Ot(e,t)])}function oE(e){return Ot("Awaited",[ga(e)])}function iE(e){return gi(r5(e))}function sE(e){return ir(r5(e))}function aE(e){return cd(e)}function r5(e){return e.map(t=>cd(t))}function cd(e,t){return _(la(e)?nE(e.target,e.parameters):pn(e)?iE(e.allOf):Gt(e)?sE(e.anyOf):ed(e)?aE(e.item):Ir(e)?oE(e.$ref):e,t)}function n5(e){const t=[];for(const r of e)t.push(as(r));return t}function lE(e){const t=n5(e);return V9(t)}function uE(e){const t=n5(e);return z9(t)}function cE(e){return e.map((t,r)=>r.toString())}function dE(e){return["[number]"]}function fE(e){return globalThis.Object.getOwnPropertyNames(e)}function hE(e){return V0?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function as(e){return pn(e)?lE(e.allOf):Gt(e)?uE(e.anyOf):rs(e)?cE(e.items??[]):aa(e)?dE(e.items):jn(e)?fE(e.properties):td(e)?hE(e.patternProperties):[]}let V0=!1;function Js(e){V0=!0;const t=as(e);return V0=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function mE(e,t){return Ot("KeyOf",[Ot(e,t)])}function gE(e){return Ot("KeyOf",[ga(e)])}function pE(e,t){const r=as(e),n=bE(r),o=ha(n);return _(o,t)}function bE(e){return e.map(t=>t==="[number]"?ss():At(t))}function _m(e,t){return la(e)?mE(e.target,e.parameters):Ir(e)?gE(e.$ref):en(e)?wE(e,t):pE(e,t)}function yE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=_m(e[n],Zr(t));return r}function vE(e,t){return yE(e.properties,t)}function wE(e,t){const r=vE(e,t);return or(r)}function o5(e){const t=as(e),r=Lm(e,t);return t.map((n,o)=>[t[o],r[o]])}function $E(e){const t=[];for(const r of e)t.push(...as(r));return j9(t)}function kE(e){return e.filter(t=>!ql(t))}function xE(e,t){const r=[];for(const n of e)r.push(...Lm(n,[t]));return kE(r)}function DE(e,t){const r={};for(const n of t)r[n]=t5(xE(e,n));return r}function AE(e,t){const r=$E(e),n=DE(e,r);return Kt(n,t)}function i5(e){return _({[L]:"Date",type:"Date"},e)}function s5(e){return _({[L]:"Null",type:"null"},e)}function a5(e){return _({[L]:"Symbol",type:"symbol"},e)}function l5(e){return _({[L]:"Undefined",type:"undefined"},e)}function u5(e){return _({[L]:"Uint8Array",type:"Uint8Array"},e)}function dd(e){return _({[L]:"Unknown"},e)}function EE(e){return e.map(t=>Um(t,!1))}function CE(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=hi(Um(e[r],!1));return t}function ku(e,t){return t===!0?e:hi(e)}function Um(e,t){return r9(e)||o9(e)?ku(Al(),t):Br(e)?hi(ma(EE(e))):Ul(e)?u5():mm(e)?i5():Ct(e)?ku(Kt(CE(e)),t):n9(e)?ku(Hl([],dd()),t):xt(e)?l5():i9(e)?s5():s9(e)?a5():xw(e)?Rm():Qn(e)||_l(e)||yt(e)?At(e):Kt({})}function FE(e,t){return _(Um(e,!0),t)}function ME(e,t){return ua(e)?ma(e.parameters,t):ut(t)}function SE(e,t){if(xt(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(i=>isNaN(i)).map(i=>e[i]),o=[...new Set(r)].map(i=>At(i));return ir(o,{...t,[Jc]:"Enum"})}class TE extends nr{}var S;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(S||(S={}));function gn(e){return e===S.False?e:S.True}function pa(e){throw new TE(e)}function Ft(e){return di(e)||is(e)||Eo(e)||In(e)||Nn(e)}function Mt(e,t){return di(t)?f5():is(t)?fd(e,t):Eo(t)?Vm(e,t):In(t)?p5():Nn(t)?zm():pa("StructuralRight")}function zm(e,t){return S.True}function NE(e,t){return is(t)?fd(e,t):Eo(t)&&t.anyOf.some(r=>Nn(r)||In(r))?S.True:Eo(t)?S.Union:In(t)||Nn(t)?S.True:S.Union}function PE(e,t){return In(e)?S.False:Nn(e)?S.Union:di(e)?S.True:S.False}function IE(e,t){return lt(t)&&hd(t)?S.True:Ft(t)?Mt(e,t):ns(t)?gn(Re(e.items,t.items)):S.False}function OE(e,t){return Ft(t)?Mt(e,t):xm(t)?gn(Re(e.items,t.items)):S.False}function BE(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):rd(t)?S.True:S.False}function c5(e,t){return zw(e)||os(e)?S.True:S.False}function RE(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):os(t)?S.True:S.False}function LE(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):nd(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>gn(Re(t.parameters[n],r))===S.True)?gn(Re(e.returns,t.returns)):S.False:S.False}function jE(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):od(t)?S.True:S.False}function _E(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):id(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>gn(Re(t.parameters[n],r))===S.True)?gn(Re(e.returns,t.returns)):S.False:S.False}function d5(e,t){return ci(e)&&Qn(e.const)||Nr(e)||Fo(e)?S.True:S.False}function UE(e,t){return Fo(t)||Nr(t)?S.True:Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):S.False}function fd(e,t){return t.allOf.every(r=>Re(e,r)===S.True)?S.True:S.False}function zE(e,t){return e.allOf.some(r=>Re(r,t)===S.True)?S.True:S.False}function VE(e,t){return Ft(t)?Mt(e,t):Dm(t)?gn(Re(e.items,t.items)):S.False}function qE(e,t){return ci(t)&&t.const===e.const?S.True:Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):Pn(t)?g5(e):Nr(t)?h5(e):Fo(t)?d5(e):os(t)?c5(e):S.False}function f5(e,t){return S.False}function WE(e,t){return S.True}function Yb(e){let[t,r]=[e,0];for(;Ks(t);)t=t.not,r+=1;return r%2===0?t:dd()}function KE(e,t){return Ks(e)?Re(Yb(e),t):Ks(t)?Re(e,Yb(t)):pa("Invalid fallthrough for Not")}function GE(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):Am(t)?S.True:S.False}function h5(e,t){return Uw(e)||Nr(e)||Fo(e)?S.True:S.False}function HE(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):Fo(t)||Nr(t)?S.True:S.False}function Or(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function Xb(e){return hd(e)}function Qb(e){return Or(e,0)||Or(e,1)&&"description"in e.properties&&Eo(e.properties.description)&&e.properties.description.anyOf.length===2&&(Pn(e.properties.description.anyOf[0])&&zi(e.properties.description.anyOf[1])||Pn(e.properties.description.anyOf[1])&&zi(e.properties.description.anyOf[0]))}function vf(e){return Or(e,0)}function e1(e){return Or(e,0)}function ZE(e){return Or(e,0)}function JE(e){return Or(e,0)}function YE(e){return hd(e)}function XE(e){const t=ss();return Or(e,0)||Or(e,1)&&"length"in e.properties&&gn(Re(e.properties.length,t))===S.True}function QE(e){return Or(e,0)}function hd(e){const t=ss();return Or(e,0)||Or(e,1)&&"length"in e.properties&&gn(Re(e.properties.length,t))===S.True}function eC(e){const t=Hl([Al()],Al());return Or(e,0)||Or(e,1)&&"then"in e.properties&&gn(Re(e.properties.then,t))===S.True}function m5(e,t){return Re(e,t)===S.False||hc(e)&&!hc(t)?S.False:S.True}function hr(e,t){return In(e)?S.False:Nn(e)?S.Union:di(e)||_w(e)&&Xb(t)||Uw(e)&&vf(t)||zw(e)&&e1(t)||xl(e)&&Qb(t)||rd(e)&&ZE(t)||Pn(e)&&Xb(t)||xl(e)&&Qb(t)||Nr(e)&&vf(t)||Fo(e)&&vf(t)||os(e)&&e1(t)||Gl(e)&&YE(t)||od(e)&&JE(t)||nd(e)&&QE(t)||id(e)&&XE(t)?S.True:er(e)&&Pn(q0(e))?t[Jc]==="Record"?S.True:S.False:er(e)&&Nr(q0(e))&&Or(t,0)?S.True:S.False}function tC(e,t){return Ft(t)?Mt(e,t):er(t)?bn(e,t):lt(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!hc(t.properties[r]))return S.False;if(hc(t.properties[r]))return S.True;if(m5(e.properties[r],t.properties[r])===S.False)return S.False}return S.True})():S.False}function rC(e,t){return Ft(t)?Mt(e,t):lt(t)&&eC(t)?S.True:Em(t)?gn(Re(e.item,t.item)):S.False}function q0(e){return Gs in e.patternProperties?ss():Hs in e.patternProperties?Vi():pa("Unknown record key pattern")}function W0(e){return Gs in e.patternProperties?e.patternProperties[Gs]:Hs in e.patternProperties?e.patternProperties[Hs]:pa("Unable to get record value schema")}function bn(e,t){const[r,n]=[q0(t),W0(t)];return _w(e)&&Nr(r)&&gn(Re(e,n))===S.True?S.True:Gl(e)&&Nr(r)||Pn(e)&&Nr(r)||ns(e)&&Nr(r)?Re(e,n):lt(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(m5(n,e.properties[o])===S.False)return S.False;return S.True})():S.False}function nC(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?Re(W0(e),W0(t)):S.False}function oC(e,t){const r=kl(e)?Vi():e,n=kl(t)?Vi():t;return Re(r,n)}function g5(e,t){return ci(e)&&yt(e.const)||Pn(e)?S.True:S.False}function iC(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):Pn(t)?S.True:S.False}function sC(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):xl(t)?S.True:S.False}function aC(e,t){return Dl(e)?Re(mc(e),t):Dl(t)?Re(e,mc(t)):pa("Invalid fallthrough for TemplateLiteral")}function lC(e,t){return ns(t)&&e.items!==void 0&&e.items.every(r=>Re(r,t.items)===S.True)}function uC(e,t){return di(e)?S.True:In(e)?S.False:Nn(e)?S.Union:S.False}function cC(e,t){return Ft(t)?Mt(e,t):lt(t)&&hd(t)||ns(t)&&lC(e,t)?S.True:sd(t)?xt(e.items)&&!xt(t.items)||!xt(e.items)&&xt(t.items)?S.False:xt(e.items)&&!xt(t.items)||e.items.every((r,n)=>Re(r,t.items[n])===S.True)?S.True:S.False:S.False}function dC(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):Gl(t)?S.True:S.False}function fC(e,t){return Ft(t)?Mt(e,t):lt(t)?hr(e,t):er(t)?bn(e,t):ad(t)?gC(e):zi(t)?S.True:S.False}function Vm(e,t){return t.anyOf.some(r=>Re(e,r)===S.True)?S.True:S.False}function hC(e,t){return e.anyOf.every(r=>Re(r,t)===S.True)?S.True:S.False}function p5(e,t){return S.True}function mC(e,t){return di(t)?f5():is(t)?fd(e,t):Eo(t)?Vm(e,t):Nn(t)?zm():Pn(t)?g5(e):Nr(t)?h5(e):Fo(t)?d5(e):os(t)?c5(e):ns(t)?PE(e):sd(t)?uC(e):lt(t)?hr(e,t):In(t)?S.True:S.False}function gC(e,t){return zi(e)||zi(e)?S.True:S.False}function pC(e,t){return is(t)?fd(e,t):Eo(t)?Vm(e,t):In(t)?p5():Nn(t)?zm():lt(t)?hr(e,t):ad(t)?S.True:S.False}function Re(e,t){return Dl(e)||Dl(t)?aC(e,t):kl(e)||kl(t)?oC(e,t):Ks(e)||Ks(t)?KE(e,t):Nn(e)?NE(e,t):ns(e)?IE(e,t):rd(e)?BE(e,t):os(e)?RE(e,t):xm(e)?OE(e,t):nd(e)?LE(e,t):od(e)?jE(e,t):id(e)?_E(e,t):Fo(e)?UE(e,t):is(e)?zE(e,t):Dm(e)?VE(e,t):ci(e)?qE(e,t):di(e)?WE():Am(e)?GE(e,t):Nr(e)?HE(e,t):lt(e)?tC(e,t):er(e)?nC(e,t):Pn(e)?iC(e,t):xl(e)?sC(e,t):sd(e)?cC(e,t):Em(e)?rC(e,t):Gl(e)?dC(e,t):zi(e)?fC(e,t):Eo(e)?hC(e,t):In(e)?mC(e,t):ad(e)?pC(e,t):pa(`Unknown left type operand '${e[L]}'`)}function Zl(e,t){return Re(e,t)}function bC(e,t,r,n,o){const i={};for(const s of globalThis.Object.getOwnPropertyNames(e))i[s]=qm(e[s],t,r,n,Zr(o));return i}function yC(e,t,r,n,o){return bC(e.properties,t,r,n,o)}function vC(e,t,r,n,o){const i=yC(e,t,r,n,o);return or(i)}function wC(e,t,r,n){const o=Zl(e,t);return o===S.Union?ir([r,n]):o===S.True?r:n}function qm(e,t,r,n,o){return en(e)?vC(e,t,r,n,o):es(e)?_(DC(e,t,r,n,o)):_(wC(e,t,r,n),o)}function $C(e,t,r,n,o){return{[e]:qm(At(e),t,r,n,Zr(o))}}function kC(e,t,r,n,o){return e.reduce((i,s)=>({...i,...$C(s,t,r,n,o)}),{})}function xC(e,t,r,n,o){return kC(e.keys,t,r,n,o)}function DC(e,t,r,n,o){const i=xC(e,t,r,n,o);return or(i)}function AC(e){return e.allOf.every(t=>ba(t))}function EC(e){return e.anyOf.some(t=>ba(t))}function CC(e){return!ba(e.not)}function ba(e){return e[L]==="Intersect"?AC(e):e[L]==="Union"?EC(e):e[L]==="Not"?CC(e):e[L]==="Undefined"}function FC(e,t){return Wm(mc(e),t)}function MC(e,t){const r=e.filter(n=>Zl(n,t)===S.False);return r.length===1?r[0]:ir(r)}function Wm(e,t,r={}){return ts(e)?_(FC(e,t),r):en(e)?_(NC(e,t),r):_(Gt(e)?MC(e.anyOf,t):Zl(e,t)!==S.False?ut():e,r)}function SC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Wm(e[n],t);return r}function TC(e,t){return SC(e.properties,t)}function NC(e,t){const r=TC(e,t);return or(r)}function PC(e,t){return Km(mc(e),t)}function IC(e,t){const r=e.filter(n=>Zl(n,t)!==S.False);return r.length===1?r[0]:ir(r)}function Km(e,t,r){return ts(e)?_(PC(e,t),r):en(e)?_(RC(e,t),r):_(Gt(e)?IC(e.anyOf,t):Zl(e,t)!==S.False?e:ut(),r)}function OC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Km(e[n],t);return r}function BC(e,t){return OC(e.properties,t)}function RC(e,t){const r=BC(e,t);return or(r)}function LC(e,t){return ua(e)?_(e.returns,t):ut(t)}function b5(e){return hi(mi(e))}function ls(e,t,r){return _({[L]:"Record",type:"object",patternProperties:{[e]:t}},r)}function Gm(e,t,r){const n={};for(const o of e)n[o]=t;return Kt(n,{...r,[Jc]:"Record"})}function jC(e,t,r){return sA(e)?Gm(fi(e),t,r):ls(e.pattern,t,r)}function _C(e,t,r){return Gm(fi(ir(e)),t,r)}function UC(e,t,r){return Gm([e.toString()],t,r)}function zC(e,t,r){return ls(e.source,t,r)}function VC(e,t,r){const n=xt(e.pattern)?Hs:e.pattern;return ls(n,t,r)}function qC(e,t,r){return ls(Hs,t,r)}function WC(e,t,r){return ls(R9,t,r)}function KC(e,t,r){return Kt({true:t,false:t},r)}function GC(e,t,r){return ls(Gs,t,r)}function HC(e,t,r){return ls(Gs,t,r)}function y5(e,t,r={}){return Gt(e)?_C(e.anyOf,t,r):ts(e)?jC(e,t,r):Qi(e)?UC(e.const,t,r):Vl(e)?KC(e,t,r):da(e)?GC(e,t,r):fa(e)?HC(e,t,r):Ow(e)?zC(e,t,r):Wl(e)?VC(e,t,r):Nw(e)?qC(e,t,r):ql(e)?WC(e,t,r):ut(r)}function Hm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function ZC(e){const t=Hm(e);return t===Hs?Vi():t===Gs?ss():Vi({pattern:t})}function v5(e){return e.patternProperties[Hm(e)]}function JC(e,t){return t.parameters=Jl(e,t.parameters),t.returns=On(e,t.returns),t}function YC(e,t){return t.parameters=Jl(e,t.parameters),t.returns=On(e,t.returns),t}function XC(e,t){return t.allOf=Jl(e,t.allOf),t}function QC(e,t){return t.anyOf=Jl(e,t.anyOf),t}function e7(e,t){return xt(t.items)||(t.items=Jl(e,t.items)),t}function t7(e,t){return t.items=On(e,t.items),t}function r7(e,t){return t.items=On(e,t.items),t}function n7(e,t){return t.items=On(e,t.items),t}function o7(e,t){return t.item=On(e,t.item),t}function i7(e,t){const r=u7(e,t.properties);return{...t,...Kt(r)}}function s7(e,t){const r=On(e,ZC(t)),n=On(e,v5(t)),o=y5(r,n);return{...t,...o}}function a7(e,t){return t.index in e?e[t.index]:dd()}function l7(e,t){const r=ym(t),n=ui(t),o=On(e,t);return r&&n?b5(o):r&&!n?hi(o):!r&&n?mi(o):o}function u7(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:l7(e,t[n])}),{})}function Jl(e,t){return t.map(r=>On(e,r))}function On(e,t){return ua(t)?JC(e,t):ca(t)?YC(e,t):pn(t)?XC(e,t):Gt(t)?QC(e,t):rs(t)?e7(e,t):aa(t)?t7(e,t):Yc(t)?r7(e,t):Qc(t)?n7(e,t):ed(t)?o7(e,t):jn(t)?i7(e,t):td(t)?s7(e,t):Pw(t)?a7(e,t):t}function c7(e,t){return On(t,gm(e))}function d7(e){return _({[L]:"Integer",type:"integer"},e)}function f7(e,t,r){return{[e]:ya(At(e),t,Zr(r))}}function h7(e,t,r){return e.reduce((o,i)=>({...o,...f7(i,t,r)}),{})}function m7(e,t,r){return h7(e.keys,t,r)}function g7(e,t,r){const n=m7(e,t,r);return or(n)}function p7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function b7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function y7(e){return e.toUpperCase()}function v7(e){return e.toLowerCase()}function w7(e,t,r){const n=Bm(e.pattern);if(!Cl(n))return{...e,pattern:w5(e.pattern,t)};const s=[...ld(n)].map(c=>At(c)),a=$5(s,t),l=ir(a);return Jw([l],r)}function w5(e,t){return typeof e=="string"?t==="Uncapitalize"?p7(e):t==="Capitalize"?b7(e):t==="Uppercase"?y7(e):t==="Lowercase"?v7(e):e:e.toString()}function $5(e,t){return e.map(r=>ya(r,t))}function ya(e,t,r={}){return es(e)?g7(e,t,r):ts(e)?w7(e,t,r):Gt(e)?ir($5(e.anyOf,t),r):Qi(e)?At(w5(e.const,t),r):_(e,r)}function $7(e,t={}){return ya(e,"Capitalize",t)}function k7(e,t={}){return ya(e,"Lowercase",t)}function x7(e,t={}){return ya(e,"Uncapitalize",t)}function D7(e,t={}){return ya(e,"Uppercase",t)}function A7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=md(e[o],t,Zr(r));return n}function E7(e,t,r){return A7(e.properties,t,r)}function C7(e,t,r){const n=E7(e,t,r);return or(n)}function F7(e,t){return e.map(r=>Zm(r,t))}function M7(e,t){return e.map(r=>Zm(r,t))}function S7(e,t){const{[t]:r,...n}=e;return n}function T7(e,t){return t.reduce((r,n)=>S7(r,n),e)}function N7(e,t,r){const n=Yr(e,[Tr,"$id","required","properties"]),o=T7(r,t);return Kt(o,n)}function P7(e){const t=e.reduce((r,n)=>Iw(n)?[...r,At(n)]:r,[]);return ir(t)}function Zm(e,t){return pn(e)?gi(F7(e.allOf,t)):Gt(e)?ir(M7(e.anyOf,t)):jn(e)?N7(e,t,e.properties):Kt({})}function md(e,t,r){const n=Br(t)?P7(t):t,o=$r(t)?fi(t):t,i=Ir(e),s=Ir(t);return en(e)?C7(e,o,r):es(t)?R7(e,t,r):i&&s?Ot("Omit",[e,n],r):!i&&s?Ot("Omit",[e,n],r):i&&!s?Ot("Omit",[e,n],r):_({...Zm(e,o),...r})}function I7(e,t,r){return{[t]:md(e,[t],Zr(r))}}function O7(e,t,r){return t.reduce((n,o)=>({...n,...I7(e,o,r)}),{})}function B7(e,t,r){return O7(e,t.keys,r)}function R7(e,t,r){const n=B7(e,t,r);return or(n)}function L7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=gd(e[o],t,Zr(r));return n}function j7(e,t,r){return L7(e.properties,t,r)}function _7(e,t,r){const n=j7(e,t,r);return or(n)}function U7(e,t){return e.map(r=>Jm(r,t))}function z7(e,t){return e.map(r=>Jm(r,t))}function V7(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function q7(e,t,r){const n=Yr(e,[Tr,"$id","required","properties"]),o=V7(r,t);return Kt(o,n)}function W7(e){const t=e.reduce((r,n)=>Iw(n)?[...r,At(n)]:r,[]);return ir(t)}function Jm(e,t){return pn(e)?gi(U7(e.allOf,t)):Gt(e)?ir(z7(e.anyOf,t)):jn(e)?q7(e,t,e.properties):Kt({})}function gd(e,t,r){const n=Br(t)?W7(t):t,o=$r(t)?fi(t):t,i=Ir(e),s=Ir(t);return en(e)?_7(e,o,r):es(t)?Z7(e,t,r):i&&s?Ot("Pick",[e,n],r):!i&&s?Ot("Pick",[e,n],r):i&&!s?Ot("Pick",[e,n],r):_({...Jm(e,o),...r})}function K7(e,t,r){return{[t]:gd(e,[t],Zr(r))}}function G7(e,t,r){return t.reduce((n,o)=>({...n,...K7(e,o,r)}),{})}function H7(e,t,r){return G7(e,t.keys,r)}function Z7(e,t,r){const n=H7(e,t,r);return or(n)}function J7(e,t){return Ot("Partial",[Ot(e,t)])}function Y7(e){return Ot("Partial",[ga(e)])}function X7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=mi(e[r]);return t}function Q7(e,t){const r=Yr(e,[Tr,"$id","required","properties"]),n=X7(t);return Kt(n,r)}function t1(e){return e.map(t=>k5(t))}function k5(e){return la(e)?J7(e.target,e.parameters):Ir(e)?Y7(e.$ref):pn(e)?gi(t1(e.allOf)):Gt(e)?ir(t1(e.anyOf)):jn(e)?Q7(e,e.properties):Xc(e)||Vl(e)||da(e)||Qi(e)||vm(e)||fa(e)||Wl(e)||wm(e)||Kl(e)?e:Kt({})}function Ym(e,t){return en(e)?rF(e,t):_({...k5(e),...t})}function eF(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Ym(e[n],Zr(t));return r}function tF(e,t){return eF(e.properties,t)}function rF(e,t){const r=tF(e,t);return or(r)}function nF(e,t){return Ot("Required",[Ot(e,t)])}function oF(e){return Ot("Required",[ga(e)])}function iF(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Yr(e[r],[Co]);return t}function sF(e,t){const r=Yr(e,[Tr,"$id","required","properties"]),n=iF(t);return Kt(n,r)}function r1(e){return e.map(t=>x5(t))}function x5(e){return la(e)?nF(e.target,e.parameters):Ir(e)?oF(e.$ref):pn(e)?gi(r1(e.allOf)):Gt(e)?ir(r1(e.anyOf)):jn(e)?sF(e,e.properties):Xc(e)||Vl(e)||da(e)||Qi(e)||vm(e)||fa(e)||Wl(e)||wm(e)||Kl(e)?e:Kt({})}function Xm(e,t){return en(e)?uF(e,t):_({...x5(e),...t})}function aF(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Xm(e[n],t);return r}function lF(e,t){return aF(e.properties,t)}function uF(e,t){const r=lF(e,t);return or(r)}function cF(e,t){return t.map(r=>Ir(r)?Qm(e,r.$ref):Xr(e,r))}function Qm(e,t){return t in e?Ir(e[t])?Qm(e,e[t].$ref):Xr(e,e[t]):ut()}function dF(e){return cd(e[0])}function fF(e){return ud(e[0],e[1])}function hF(e){return _m(e[0])}function mF(e){return Ym(e[0])}function gF(e){return md(e[0],e[1])}function pF(e){return gd(e[0],e[1])}function bF(e){return Xm(e[0])}function yF(e,t,r){const n=cF(e,r);return t==="Awaited"?dF(n):t==="Index"?fF(n):t==="KeyOf"?hF(n):t==="Partial"?mF(n):t==="Omit"?gF(n):t==="Pick"?pF(n):t==="Required"?bF(n):ut()}function vF(e,t){return Nm(Xr(e,t))}function wF(e,t){return Pm(Xr(e,t))}function $F(e,t,r){return Im(Yl(e,t),Xr(e,r))}function kF(e,t,r){return Hl(Yl(e,t),Xr(e,r))}function xF(e,t){return gi(Yl(e,t))}function DF(e,t){return jm(Xr(e,t))}function AF(e,t){return Kt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Xr(e,t[n])}),{}))}function EF(e,t){const[r,n]=[Xr(e,v5(t)),Hm(t)],o=gm(t);return o.patternProperties[n]=r,o}function CF(e,t){return Ir(t)?{...Qm(e,t.$ref),[Tr]:t[Tr]}:t}function FF(e,t){return ma(Yl(e,t))}function MF(e,t){return ir(Yl(e,t))}function Yl(e,t){return t.map(r=>Xr(e,r))}function Xr(e,t){return ui(t)?_(Xr(e,Yr(t,[Co])),t):ym(t)?_(Xr(e,Yr(t,[zl])),t):Ge(t)?_(CF(e,t),t):aa(t)?_(vF(e,t.items),t):Yc(t)?_(wF(e,t.items),t):la(t)?_(yF(e,t.target,t.parameters)):ua(t)?_($F(e,t.parameters,t.returns),t):ca(t)?_(kF(e,t.parameters,t.returns),t):pn(t)?_(xF(e,t.allOf),t):Qc(t)?_(DF(e,t.items),t):jn(t)?_(AF(e,t.properties),t):td(t)?_(EF(e,t)):rs(t)?_(FF(e,t.items||[]),t):Gt(t)?_(MF(e,t.anyOf),t):t}function SF(e,t){return t in e?Xr(e,e[t]):ut()}function TF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:SF(e,r)}),{})}class NF{constructor(t){const r=TF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:_(this.$defs[t],r)};return _({[L]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function PF(e){return new NF(e)}function IF(e,t){return _({[L]:"Not",not:e},t)}function OF(e,t){return ca(e)?ma(e.parameters,t):ut()}let BF=0;function RF(e,t={}){xt(t.$id)&&(t.$id=`T${BF++}`);const r=gm(e({[L]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,_({[Jc]:"Recursive",...r},t)}function LF(e,t){const r=yt(e)?new globalThis.RegExp(e):e;return _({[L]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function jF(e){return pn(e)?e.allOf:Gt(e)?e.anyOf:rs(e)?e.items??[]:[]}function _F(e){return jF(e)}function UF(e,t){return ca(e)?_(e.returns,t):ut(t)}class zF{constructor(t){this.schema=t}Decode(t){return new VF(this.schema,t)}}class VF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const i={Encode:s=>r[Tr].Encode(t(s)),Decode:s=>this.decode(r[Tr].Decode(s))};return{...r,[Tr]:i}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Tr]:n}}Encode(t){return Ge(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function qF(e){return new zF(e)}function WF(e={}){return _({[L]:e[L]??"Unsafe"},e)}function KF(e){return _({[L]:"Void",type:"void"},e)}const GF=Object.freeze(Object.defineProperty({__proto__:null,Any:Al,Argument:q9,Array:Nm,AsyncIterator:Pm,Awaited:cd,BigInt:Rm,Boolean:Hw,Capitalize:$7,Composite:AE,Const:FE,Constructor:Im,ConstructorParameters:ME,Date:i5,Enum:SE,Exclude:Wm,Extends:qm,Extract:Km,Function:Hl,Index:ud,InstanceType:LC,Instantiate:c7,Integer:d7,Intersect:gi,Iterator:jm,KeyOf:_m,Literal:At,Lowercase:k7,Mapped:GA,Module:PF,Never:ut,Not:IF,Null:s5,Number:ss,Object:Kt,Omit:md,Optional:mi,Parameters:OF,Partial:Ym,Pick:gd,Promise:Qw,Readonly:hi,ReadonlyOptional:b5,Record:y5,Recursive:RF,Ref:ga,RegExp:LF,Required:Xm,Rest:_F,ReturnType:UF,String:Vi,Symbol:a5,TemplateLiteral:Jw,Transform:qF,Tuple:ma,Uint8Array:u5,Uncapitalize:x7,Undefined:l5,Union:ir,Unknown:dd,Unsafe:WF,Uppercase:D7,Void:KF},Symbol.toStringTag,{value:"Module"})),qe=GF;function D5(e){switch(e.errorType){case F.ArrayContains:return"Expected array to contain at least one matching value";case F.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case F.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case F.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case F.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case F.ArrayUniqueItems:return"Expected array elements to be unique";case F.Array:return"Expected array";case F.AsyncIterator:return"Expected AsyncIterator";case F.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case F.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case F.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case F.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case F.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case F.BigInt:return"Expected bigint";case F.Boolean:return"Expected boolean";case F.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case F.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case F.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case F.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case F.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case F.Date:return"Expected Date";case F.Function:return"Expected function";case F.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case F.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case F.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case F.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case F.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case F.Integer:return"Expected integer";case F.IntersectUnevaluatedProperties:return"Unexpected property";case F.Intersect:return"Expected all values to match";case F.Iterator:return"Expected Iterator";case F.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case F.Never:return"Never";case F.Not:return"Value should not match";case F.Null:return"Expected null";case F.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case F.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case F.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case F.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case F.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case F.Number:return"Expected number";case F.Object:return"Expected object";case F.ObjectAdditionalProperties:return"Unexpected property";case F.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case F.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case F.ObjectRequiredProperty:return"Expected required property";case F.Promise:return"Expected Promise";case F.RegExp:return"Expected string to match regular expression";case F.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case F.StringFormat:return`Expected string to match '${e.schema.format}' format`;case F.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case F.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case F.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case F.String:return"Expected string";case F.Symbol:return"Expected symbol";case F.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case F.Tuple:return"Expected tuple";case F.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case F.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case F.Uint8Array:return"Expected Uint8Array";case F.Undefined:return"Expected undefined";case F.Union:return"Expected union value";case F.Void:return"Expected void";case F.Kind:return`Expected kind '${e.schema[L]}'`;default:return"Unknown error type"}}let A5=D5;function HF(e){A5=e}function ZF(){return A5}class JF extends nr{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function YF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new JF(e);return yn(r,t)}function pd(e,t){return!Wr(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function yn(e,t){return e[L]==="This"||e[L]==="Ref"?YF(e,t):e}class XF extends nr{constructor(t){super("Unable to hash value"),this.value=t}}var Qr;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Qr||(Qr={}));let As=BigInt("14695981039346656037");const[QF,eM]=[BigInt("1099511628211"),BigInt("18446744073709551616")],tM=Array.from({length:256}).map((e,t)=>BigInt(t)),E5=new Float64Array(1),C5=new DataView(E5.buffer),F5=new Uint8Array(E5.buffer);function*rM(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function nM(e){dr(Qr.Array);for(const t of e)Ys(t)}function oM(e){dr(Qr.Boolean),dr(e?1:0)}function iM(e){dr(Qr.BigInt),C5.setBigInt64(0,e);for(const t of F5)dr(t)}function sM(e){dr(Qr.Date),Ys(e.getTime())}function aM(e){dr(Qr.Null)}function lM(e){dr(Qr.Number),C5.setFloat64(0,e);for(const t of F5)dr(t)}function uM(e){dr(Qr.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Ys(t),Ys(e[t])}function cM(e){dr(Qr.String);for(let t=0;t<e.length;t++)for(const r of rM(e.charCodeAt(t)))dr(r)}function dM(e){dr(Qr.Symbol),Ys(e.description)}function fM(e){dr(Qr.Uint8Array);for(let t=0;t<e.length;t++)dr(e[t])}function hM(e){return dr(Qr.Undefined)}function Ys(e){if(Jr(e))return nM(e);if(Hc(e))return oM(e);if(go(e))return iM(e);if(pm(e))return sM(e);if(Gc(e))return aM();if(de(e))return lM(e);if(eo(e))return uM(e);if(Wr(e))return cM(e);if(Zc(e))return dM(e);if(bm(e))return fM(e);if(li(e))return hM();throw new XF(e)}function dr(e){As=As^tM[e],As=As*QF%eM}function eg(e){return As=BigInt("14695981039346656037"),Ys(e),As}class mM extends nr{constructor(t){super("Unknown type"),this.schema=t}}function gM(e){return e[L]==="Any"||e[L]==="Unknown"}function ye(e){return e!==void 0}function pM(e,t,r){return!0}function bM(e,t,r){return!0}function yM(e,t,r){if(!Jr(r)||ye(e.minItems)&&!(r.length>=e.minItems)||ye(e.maxItems)&&!(r.length<=e.maxItems))return!1;for(const i of r)if(!Vt(e.items,t,i))return!1;if(e.uniqueItems===!0&&!(function(){const i=new Set;for(const s of r){const a=eg(s);if(i.has(a))return!1;i.add(a)}return!0})())return!1;if(!(ye(e.contains)||de(e.minContains)||de(e.maxContains)))return!0;const n=ye(e.contains)?e.contains:ut(),o=r.reduce((i,s)=>Vt(n,t,s)?i+1:i,0);return!(o===0||de(e.minContains)&&o<e.minContains||de(e.maxContains)&&o>e.maxContains)}function vM(e,t,r){return Aw(r)}function wM(e,t,r){return!(!go(r)||ye(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ye(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ye(e.maximum)&&!(r<=e.maximum)||ye(e.minimum)&&!(r>=e.minimum)||ye(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function $M(e,t,r){return Hc(r)}function kM(e,t,r){return Vt(e.returns,t,r.prototype)}function xM(e,t,r){return!(!pm(r)||ye(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||ye(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||ye(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||ye(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||ye(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function DM(e,t,r){return Sw(r)}function AM(e,t,r){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return Vt(o,[...t,...n],r)}function EM(e,t,r){return!(!Mw(r)||ye(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ye(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ye(e.maximum)&&!(r<=e.maximum)||ye(e.minimum)&&!(r>=e.minimum)||ye(e.multipleOf)&&r%e.multipleOf!==0)}function CM(e,t,r){const n=e.allOf.every(o=>Vt(o,t,r));if(e.unevaluatedProperties===!1){const o=new RegExp(Js(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s));return n&&i}else if($r(e.unevaluatedProperties)){const o=new RegExp(Js(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s)||Vt(e.unevaluatedProperties,t,r[s]));return n&&i}else return n}function FM(e,t,r){return Ew(r)}function MM(e,t,r){return r===e.const}function SM(e,t,r){return!1}function TM(e,t,r){return!Vt(e.not,t,r)}function NM(e,t,r){return Gc(r)}function PM(e,t,r){return!(!bt.IsNumberLike(r)||ye(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ye(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ye(e.minimum)&&!(r>=e.minimum)||ye(e.maximum)&&!(r<=e.maximum)||ye(e.multipleOf)&&r%e.multipleOf!==0)}function IM(e,t,r){if(!bt.IsObjectLike(r)||ye(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ye(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const i=e.properties[o];if(e.required&&e.required.includes(o)){if(!Vt(i,t,r[o])||(ba(i)||gM(i))&&!(o in r))return!1}else if(bt.IsExactOptionalProperty(r,o)&&!Vt(i,t,r[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(i=>n.includes(i))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(i=>n.includes(i)||Vt(e.additionalProperties,t,r[i])):!0}function OM(e,t,r){return Cw(r)}function BM(e,t,r){if(!bt.IsRecordLike(r)||ye(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ye(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],i=new RegExp(n),s=Object.entries(r).every(([c,d])=>i.test(c)?Vt(o,t,d):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([c,d])=>i.test(c)?!0:Vt(e.additionalProperties,t,d)):!0,l=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(c=>i.test(c)):!0;return s&&a&&l}function RM(e,t,r){return Vt(yn(e,t),t,r)}function LM(e,t,r){const n=new RegExp(e.source,e.flags);return ye(e.minLength)&&!(r.length>=e.minLength)||ye(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function jM(e,t,r){return!Wr(r)||ye(e.minLength)&&!(r.length>=e.minLength)||ye(e.maxLength)&&!(r.length<=e.maxLength)||ye(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:ye(e.format)?Cm(e.format)?Fm(e.format)(r):!1:!0}function _M(e,t,r){return Zc(r)}function UM(e,t,r){return Wr(r)&&new RegExp(e.pattern).test(r)}function zM(e,t,r){return Vt(yn(e,t),t,r)}function VM(e,t,r){if(!Jr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Vt(e.items[n],t,r[n]))return!1;return!0}function qM(e,t,r){return li(r)}function WM(e,t,r){return e.anyOf.some(n=>Vt(n,t,r))}function KM(e,t,r){return!(!bm(r)||ye(e.maxByteLength)&&!(r.length<=e.maxByteLength)||ye(e.minByteLength)&&!(r.length>=e.minByteLength))}function GM(e,t,r){return!0}function HM(e,t,r){return bt.IsVoidLike(r)}function ZM(e,t,r){return ri(e[L])?Tm(e[L])(e,r):!1}function Vt(e,t,r){const n=ye(e.$id)?pd(e,t):t,o=e;switch(o[L]){case"Any":return pM();case"Argument":return bM();case"Array":return yM(o,n,r);case"AsyncIterator":return vM(o,n,r);case"BigInt":return wM(o,n,r);case"Boolean":return $M(o,n,r);case"Constructor":return kM(o,n,r);case"Date":return xM(o,n,r);case"Function":return DM(o,n,r);case"Import":return AM(o,n,r);case"Integer":return EM(o,n,r);case"Intersect":return CM(o,n,r);case"Iterator":return FM(o,n,r);case"Literal":return MM(o,n,r);case"Never":return SM();case"Not":return TM(o,n,r);case"Null":return NM(o,n,r);case"Number":return PM(o,n,r);case"Object":return IM(o,n,r);case"Promise":return OM(o,n,r);case"Record":return BM(o,n,r);case"Ref":return RM(o,n,r);case"RegExp":return LM(o,n,r);case"String":return jM(o,n,r);case"Symbol":return _M(o,n,r);case"TemplateLiteral":return UM(o,n,r);case"This":return zM(o,n,r);case"Tuple":return VM(o,n,r);case"Undefined":return qM(o,n,r);case"Union":return WM(o,n,r);case"Uint8Array":return KM(o,n,r);case"Unknown":return GM();case"Void":return HM(o,n,r);default:if(!ri(o[L]))throw new mM(o);return ZM(o,n,r)}}function gc(...e){return e.length===3?Vt(e[0],e[1],e[2]):Vt(e[0],[],e[1])}var F;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(F||(F={}));class JM extends nr{constructor(t){super("Unknown type"),this.schema=t}}function fo(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function be(e){return e!==void 0}class M5{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function z(e,t,r,n,o=[]){return{type:e,schema:t,path:r,value:n,message:ZF()({errorType:e,path:r,schema:t,value:n,errors:o}),errors:o}}function*YM(e,t,r,n){}function*XM(e,t,r,n){}function*QM(e,t,r,n){if(!Jr(n))return yield z(F.Array,e,r,n);be(e.minItems)&&!(n.length>=e.minItems)&&(yield z(F.ArrayMinItems,e,r,n)),be(e.maxItems)&&!(n.length<=e.maxItems)&&(yield z(F.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*qt(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const l=eg(a);if(s.has(l))return!1;s.add(l)}return!0})()&&(yield z(F.ArrayUniqueItems,e,r,n)),!(be(e.contains)||be(e.minContains)||be(e.maxContains)))return;const o=be(e.contains)?e.contains:ut(),i=n.reduce((s,a,l)=>qt(o,t,`${r}${l}`,a).next().done===!0?s+1:s,0);i===0&&(yield z(F.ArrayContains,e,r,n)),de(e.minContains)&&i<e.minContains&&(yield z(F.ArrayMinContains,e,r,n)),de(e.maxContains)&&i>e.maxContains&&(yield z(F.ArrayMaxContains,e,r,n))}function*eS(e,t,r,n){Aw(n)||(yield z(F.AsyncIterator,e,r,n))}function*tS(e,t,r,n){if(!go(n))return yield z(F.BigInt,e,r,n);be(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield z(F.BigIntExclusiveMaximum,e,r,n)),be(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield z(F.BigIntExclusiveMinimum,e,r,n)),be(e.maximum)&&!(n<=e.maximum)&&(yield z(F.BigIntMaximum,e,r,n)),be(e.minimum)&&!(n>=e.minimum)&&(yield z(F.BigIntMinimum,e,r,n)),be(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield z(F.BigIntMultipleOf,e,r,n))}function*rS(e,t,r,n){Hc(n)||(yield z(F.Boolean,e,r,n))}function*nS(e,t,r,n){yield*qt(e.returns,t,r,n.prototype)}function*oS(e,t,r,n){if(!pm(n))return yield z(F.Date,e,r,n);be(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield z(F.DateExclusiveMaximumTimestamp,e,r,n)),be(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield z(F.DateExclusiveMinimumTimestamp,e,r,n)),be(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield z(F.DateMaximumTimestamp,e,r,n)),be(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield z(F.DateMinimumTimestamp,e,r,n)),be(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield z(F.DateMultipleOfTimestamp,e,r,n))}function*iS(e,t,r,n){Sw(n)||(yield z(F.Function,e,r,n))}function*sS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];yield*qt(i,[...t,...o],r,n)}function*aS(e,t,r,n){if(!Mw(n))return yield z(F.Integer,e,r,n);be(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield z(F.IntegerExclusiveMaximum,e,r,n)),be(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield z(F.IntegerExclusiveMinimum,e,r,n)),be(e.maximum)&&!(n<=e.maximum)&&(yield z(F.IntegerMaximum,e,r,n)),be(e.minimum)&&!(n>=e.minimum)&&(yield z(F.IntegerMinimum,e,r,n)),be(e.multipleOf)&&n%e.multipleOf!==0&&(yield z(F.IntegerMultipleOf,e,r,n))}function*lS(e,t,r,n){let o=!1;for(const i of e.allOf)for(const s of qt(i,t,r,n))o=!0,yield s;if(o)return yield z(F.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const i=new RegExp(Js(e));for(const s of Object.getOwnPropertyNames(n))i.test(s)||(yield z(F.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const i=new RegExp(Js(e));for(const s of Object.getOwnPropertyNames(n))if(!i.test(s)){const a=qt(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*uS(e,t,r,n){Ew(n)||(yield z(F.Iterator,e,r,n))}function*cS(e,t,r,n){n!==e.const&&(yield z(F.Literal,e,r,n))}function*dS(e,t,r,n){yield z(F.Never,e,r,n)}function*fS(e,t,r,n){qt(e.not,t,r,n).next().done===!0&&(yield z(F.Not,e,r,n))}function*hS(e,t,r,n){Gc(n)||(yield z(F.Null,e,r,n))}function*mS(e,t,r,n){if(!bt.IsNumberLike(n))return yield z(F.Number,e,r,n);be(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield z(F.NumberExclusiveMaximum,e,r,n)),be(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield z(F.NumberExclusiveMinimum,e,r,n)),be(e.maximum)&&!(n<=e.maximum)&&(yield z(F.NumberMaximum,e,r,n)),be(e.minimum)&&!(n>=e.minimum)&&(yield z(F.NumberMinimum,e,r,n)),be(e.multipleOf)&&n%e.multipleOf!==0&&(yield z(F.NumberMultipleOf,e,r,n))}function*gS(e,t,r,n){if(!bt.IsObjectLike(n))return yield z(F.Object,e,r,n);be(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield z(F.ObjectMinProperties,e,r,n)),be(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield z(F.ObjectMaxProperties,e,r,n));const o=Array.isArray(e.required)?e.required:[],i=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of o)s.includes(a)||(yield z(F.ObjectRequiredProperty,e.properties[a],`${r}/${fo(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)i.includes(a)||(yield z(F.ObjectAdditionalProperties,e,`${r}/${fo(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)i.includes(a)||(yield*qt(e.additionalProperties,t,`${r}/${fo(a)}`,n[a]));for(const a of i){const l=e.properties[a];e.required&&e.required.includes(a)?(yield*qt(l,t,`${r}/${fo(a)}`,n[a]),ba(e)&&!(a in n)&&(yield z(F.ObjectRequiredProperty,l,`${r}/${fo(a)}`,void 0))):bt.IsExactOptionalProperty(n,a)&&(yield*qt(l,t,`${r}/${fo(a)}`,n[a]))}}function*pS(e,t,r,n){Cw(n)||(yield z(F.Promise,e,r,n))}function*bS(e,t,r,n){if(!bt.IsRecordLike(n))return yield z(F.Object,e,r,n);be(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield z(F.ObjectMinProperties,e,r,n)),be(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield z(F.ObjectMaxProperties,e,r,n));const[o,i]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[a,l]of Object.entries(n))s.test(a)&&(yield*qt(i,t,`${r}/${fo(a)}`,l));if(typeof e.additionalProperties=="object")for(const[a,l]of Object.entries(n))s.test(a)||(yield*qt(e.additionalProperties,t,`${r}/${fo(a)}`,l));if(e.additionalProperties===!1){for(const[a,l]of Object.entries(n))if(!s.test(a))return yield z(F.ObjectAdditionalProperties,e,`${r}/${fo(a)}`,l)}}function*yS(e,t,r,n){yield*qt(yn(e,t),t,r,n)}function*vS(e,t,r,n){if(!Wr(n))return yield z(F.String,e,r,n);if(be(e.minLength)&&!(n.length>=e.minLength)&&(yield z(F.StringMinLength,e,r,n)),be(e.maxLength)&&!(n.length<=e.maxLength)&&(yield z(F.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield z(F.RegExp,e,r,n)}function*wS(e,t,r,n){if(!Wr(n))return yield z(F.String,e,r,n);be(e.minLength)&&!(n.length>=e.minLength)&&(yield z(F.StringMinLength,e,r,n)),be(e.maxLength)&&!(n.length<=e.maxLength)&&(yield z(F.StringMaxLength,e,r,n)),Wr(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield z(F.StringPattern,e,r,n))),Wr(e.format)&&(Cm(e.format)?Fm(e.format)(n)||(yield z(F.StringFormat,e,r,n)):yield z(F.StringFormatUnknown,e,r,n))}function*$S(e,t,r,n){Zc(n)||(yield z(F.Symbol,e,r,n))}function*kS(e,t,r,n){if(!Wr(n))return yield z(F.String,e,r,n);new RegExp(e.pattern).test(n)||(yield z(F.StringPattern,e,r,n))}function*xS(e,t,r,n){yield*qt(yn(e,t),t,r,n)}function*DS(e,t,r,n){if(!Jr(n))return yield z(F.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield z(F.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield z(F.TupleLength,e,r,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*qt(e.items[o],t,`${r}/${o}`,n[o])}function*AS(e,t,r,n){li(n)||(yield z(F.Undefined,e,r,n))}function*ES(e,t,r,n){if(gc(e,t,n))return;const o=e.anyOf.map(i=>new M5(qt(i,t,r,n)));yield z(F.Union,e,r,n,o)}function*CS(e,t,r,n){if(!bm(n))return yield z(F.Uint8Array,e,r,n);be(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield z(F.Uint8ArrayMaxByteLength,e,r,n)),be(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield z(F.Uint8ArrayMinByteLength,e,r,n))}function*FS(e,t,r,n){}function*MS(e,t,r,n){bt.IsVoidLike(n)||(yield z(F.Void,e,r,n))}function*SS(e,t,r,n){Tm(e[L])(e,n)||(yield z(F.Kind,e,r,n))}function*qt(e,t,r,n){const o=be(e.$id)?[...t,e]:t,i=e;switch(i[L]){case"Any":return yield*YM();case"Argument":return yield*XM();case"Array":return yield*QM(i,o,r,n);case"AsyncIterator":return yield*eS(i,o,r,n);case"BigInt":return yield*tS(i,o,r,n);case"Boolean":return yield*rS(i,o,r,n);case"Constructor":return yield*nS(i,o,r,n);case"Date":return yield*oS(i,o,r,n);case"Function":return yield*iS(i,o,r,n);case"Import":return yield*sS(i,o,r,n);case"Integer":return yield*aS(i,o,r,n);case"Intersect":return yield*lS(i,o,r,n);case"Iterator":return yield*uS(i,o,r,n);case"Literal":return yield*cS(i,o,r,n);case"Never":return yield*dS(i,o,r,n);case"Not":return yield*fS(i,o,r,n);case"Null":return yield*hS(i,o,r,n);case"Number":return yield*mS(i,o,r,n);case"Object":return yield*gS(i,o,r,n);case"Promise":return yield*pS(i,o,r,n);case"Record":return yield*bS(i,o,r,n);case"Ref":return yield*yS(i,o,r,n);case"RegExp":return yield*vS(i,o,r,n);case"String":return yield*wS(i,o,r,n);case"Symbol":return yield*$S(i,o,r,n);case"TemplateLiteral":return yield*kS(i,o,r,n);case"This":return yield*xS(i,o,r,n);case"Tuple":return yield*DS(i,o,r,n);case"Undefined":return yield*AS(i,o,r,n);case"Union":return yield*ES(i,o,r,n);case"Uint8Array":return yield*CS(i,o,r,n);case"Unknown":return yield*FS();case"Void":return yield*MS(i,o,r,n);default:if(!ri(i[L]))throw new JM(e);return yield*SS(i,o,r,n)}}function TS(...e){const t=e.length===3?qt(e[0],e[1],"",e[2]):qt(e[0],[],"",e[1]);return new M5(t)}class NS extends nr{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class PS extends nr{constructor(t,r,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=o}}function tt(e,t,r){try{return Ge(e)?e[Tr].Decode(r):r}catch(n){throw new PS(e,t,r,n)}}function IS(e,t,r,n){return Jr(n)?tt(e,r,n.map((o,i)=>_n(e.items,t,`${r}/${i}`,o))):tt(e,r,n)}function OS(e,t,r,n){if(!eo(n)||Tw(n))return tt(e,r,n);const o=o5(e),i=o.map(d=>d[0]),s={...n};for(const[d,f]of o)d in s&&(s[d]=_n(f,t,`${r}/${d}`,s[d]));if(!Ge(e.unevaluatedProperties))return tt(e,r,s);const a=Object.getOwnPropertyNames(s),l=e.unevaluatedProperties,c={...s};for(const d of a)i.includes(d)||(c[d]=tt(l,`${r}/${d}`,c[d]));return tt(e,r,c)}function BS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=_n(i,[...t,...o],r,n);return tt(e,r,s)}function RS(e,t,r,n){return tt(e,r,_n(e.not,t,r,n))}function LS(e,t,r,n){if(!eo(n))return tt(e,r,n);const o=as(e),i={...n};for(const c of o)Fw(i,c)&&(li(i[c])&&(!Kl(e.properties[c])||bt.IsExactOptionalProperty(i,c))||(i[c]=_n(e.properties[c],t,`${r}/${c}`,i[c])));if(!$r(e.additionalProperties))return tt(e,r,i);const s=Object.getOwnPropertyNames(i),a=e.additionalProperties,l={...i};for(const c of s)o.includes(c)||(l[c]=tt(a,`${r}/${c}`,l[c]));return tt(e,r,l)}function jS(e,t,r,n){if(!eo(n))return tt(e,r,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],i=new RegExp(o),s={...n};for(const d of Object.getOwnPropertyNames(n))i.test(d)&&(s[d]=_n(e.patternProperties[o],t,`${r}/${d}`,s[d]));if(!$r(e.additionalProperties))return tt(e,r,s);const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,c={...s};for(const d of a)i.test(d)||(c[d]=tt(l,`${r}/${d}`,c[d]));return tt(e,r,c)}function _S(e,t,r,n){const o=yn(e,t);return tt(e,r,_n(o,t,r,n))}function US(e,t,r,n){const o=yn(e,t);return tt(e,r,_n(o,t,r,n))}function zS(e,t,r,n){return Jr(n)&&Jr(e.items)?tt(e,r,e.items.map((o,i)=>_n(o,t,`${r}/${i}`,n[i]))):tt(e,r,n)}function VS(e,t,r,n){for(const o of e.anyOf){if(!gc(o,t,n))continue;const i=_n(o,t,r,n);return tt(e,r,i)}return tt(e,r,n)}function _n(e,t,r,n){const o=pd(e,t),i=e;switch(e[L]){case"Array":return IS(i,o,r,n);case"Import":return BS(i,o,r,n);case"Intersect":return OS(i,o,r,n);case"Not":return RS(i,o,r,n);case"Object":return LS(i,o,r,n);case"Record":return jS(i,o,r,n);case"Ref":return _S(i,o,r,n);case"Symbol":return tt(i,r,n);case"This":return US(i,o,r,n);case"Tuple":return zS(i,o,r,n);case"Union":return VS(i,o,r,n);default:return tt(i,r,n)}}function qS(e,t,r){return _n(e,t,"",r)}class WS extends nr{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class KS extends nr{constructor(t,r,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=o}}function Qt(e,t,r){try{return Ge(e)?e[Tr].Encode(r):r}catch(n){throw new KS(e,t,r,n)}}function GS(e,t,r,n){const o=Qt(e,r,n);return Jr(o)?o.map((i,s)=>Bn(e.items,t,`${r}/${s}`,i)):o}function HS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=Qt(e,r,n);return Bn(i,[...t,...o],r,s)}function ZS(e,t,r,n){const o=Qt(e,r,n);if(!eo(n)||Tw(n))return o;const i=o5(e),s=i.map(f=>f[0]),a={...o};for(const[f,h]of i)f in a&&(a[f]=Bn(h,t,`${r}/${f}`,a[f]));if(!Ge(e.unevaluatedProperties))return a;const l=Object.getOwnPropertyNames(a),c=e.unevaluatedProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=Qt(c,`${r}/${f}`,d[f]));return d}function JS(e,t,r,n){return Qt(e.not,r,Qt(e,r,n))}function YS(e,t,r,n){const o=Qt(e,r,n);if(!eo(o))return o;const i=as(e),s={...o};for(const d of i)Fw(s,d)&&(li(s[d])&&(!Kl(e.properties[d])||bt.IsExactOptionalProperty(s,d))||(s[d]=Bn(e.properties[d],t,`${r}/${d}`,s[d])));if(!$r(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,c={...s};for(const d of a)i.includes(d)||(c[d]=Qt(l,`${r}/${d}`,c[d]));return c}function XS(e,t,r,n){const o=Qt(e,r,n);if(!eo(n))return o;const i=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(i),a={...o};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=Bn(e.patternProperties[i],t,`${r}/${f}`,a[f]));if(!$r(e.additionalProperties))return a;const l=Object.getOwnPropertyNames(a),c=e.additionalProperties,d={...a};for(const f of l)s.test(f)||(d[f]=Qt(c,`${r}/${f}`,d[f]));return d}function QS(e,t,r,n){const o=yn(e,t),i=Bn(o,t,r,n);return Qt(e,r,i)}function eT(e,t,r,n){const o=yn(e,t),i=Bn(o,t,r,n);return Qt(e,r,i)}function tT(e,t,r,n){const o=Qt(e,r,n);return Jr(e.items)?e.items.map((i,s)=>Bn(i,t,`${r}/${s}`,o[s])):[]}function rT(e,t,r,n){for(const o of e.anyOf){if(!gc(o,t,n))continue;const i=Bn(o,t,r,n);return Qt(e,r,i)}for(const o of e.anyOf){const i=Bn(o,t,r,n);if(gc(e,t,i))return Qt(e,r,i)}return Qt(e,r,n)}function Bn(e,t,r,n){const o=pd(e,t),i=e;switch(e[L]){case"Array":return GS(i,o,r,n);case"Import":return HS(i,o,r,n);case"Intersect":return ZS(i,o,r,n);case"Not":return JS(i,o,r,n);case"Object":return YS(i,o,r,n);case"Record":return XS(i,o,r,n);case"Ref":return QS(i,o,r,n);case"This":return eT(i,o,r,n);case"Tuple":return tT(i,o,r,n);case"Union":return rT(i,o,r,n);default:return Qt(i,r,n)}}function nT(e,t,r){return Bn(e,t,"",r)}function oT(e,t){return Ge(e)||Bt(e.items,t)}function iT(e,t){return Ge(e)||Bt(e.items,t)}function sT(e,t){return Ge(e)||Bt(e.returns,t)||e.parameters.some(r=>Bt(r,t))}function aT(e,t){return Ge(e)||Bt(e.returns,t)||e.parameters.some(r=>Bt(r,t))}function lT(e,t){return Ge(e)||Ge(e.unevaluatedProperties)||e.allOf.some(r=>Bt(r,t))}function uT(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,i)=>[...o,e.$defs[i]],[]),n=e.$defs[e.$ref];return Ge(e)||Bt(n,[...r,...t])}function cT(e,t){return Ge(e)||Bt(e.items,t)}function dT(e,t){return Ge(e)||Bt(e.not,t)}function fT(e,t){return Ge(e)||Object.values(e.properties).some(r=>Bt(r,t))||$r(e.additionalProperties)&&Bt(e.additionalProperties,t)}function hT(e,t){return Ge(e)||Bt(e.item,t)}function mT(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Ge(e)||Bt(n,t)||$r(e.additionalProperties)&&Ge(e.additionalProperties)}function gT(e,t){return Ge(e)?!0:Bt(yn(e,t),t)}function pT(e,t){return Ge(e)?!0:Bt(yn(e,t),t)}function bT(e,t){return Ge(e)||!li(e.items)&&e.items.some(r=>Bt(r,t))}function yT(e,t){return Ge(e)||e.anyOf.some(r=>Bt(r,t))}function Bt(e,t){const r=pd(e,t),n=e;if(e.$id&&K0.has(e.$id))return!1;switch(e.$id&&K0.add(e.$id),e[L]){case"Array":return oT(n,r);case"AsyncIterator":return iT(n,r);case"Constructor":return sT(n,r);case"Function":return aT(n,r);case"Import":return uT(n,r);case"Intersect":return lT(n,r);case"Iterator":return cT(n,r);case"Not":return dT(n,r);case"Object":return fT(n,r);case"Promise":return hT(n,r);case"Record":return mT(n,r);case"Ref":return gT(n,r);case"This":return pT(n,r);case"Tuple":return bT(n,r);case"Union":return yT(n,r);default:return Ge(e)}}const K0=new Set;function vT(e,t){return K0.clear(),Bt(e,t)}class wT{constructor(t,r,n,o){this.schema=t,this.references=r,this.checkFunc=n,this.code=o,this.hasTransform=vT(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return TS(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new NS(this.schema,t,this.Errors(t).First());return this.hasTransform?qS(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?nT(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new WS(this.schema,t,this.Errors(t).First());return r}}var po;(function(e){function t(i){return i===36}e.DollarSign=t;function r(i){return i===95}e.IsUnderscore=r;function n(i){return i>=65&&i<=90||i>=97&&i<=122}e.IsAlpha=n;function o(i){return i>=48&&i<=57}e.IsNumeric=o})(po||(po={}));var pc;(function(e){function t(i){return i.length===0?!1:po.IsNumeric(i.charCodeAt(0))}function r(i){if(t(i))return!1;for(let s=0;s<i.length;s++){const a=i.charCodeAt(s);if(!(po.IsAlpha(a)||po.IsNumeric(a)||po.DollarSign(a)||po.IsUnderscore(a)))return!1}return!0}function n(i){return i.replace(/'/g,"\\'")}function o(i,s){return r(s)?`${i}.${s}`:`${i}['${n(s)}']`}e.Encode=o})(pc||(pc={}));var G0;(function(e){function t(r){const n=[];for(let o=0;o<r.length;o++){const i=r.charCodeAt(o);po.IsNumeric(i)||po.IsAlpha(i)?n.push(r.charAt(o)):n.push(`_${i}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(G0||(G0={}));var H0;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(H0||(H0={}));class $T extends nr{constructor(t){super("Unknown type"),this.schema=t}}class n1 extends nr{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Ei;(function(e){function t(s,a,l){return bt.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${l} : true)`:`(${pc.Encode(s,a)} !== undefined ? ${l} : true)`}e.IsExactOptionalProperty=t;function r(s){return bt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return bt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function o(s){return bt.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=o;function i(s){return bt.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=i})(Ei||(Ei={}));var rl;(function(e){function t(w){return w[L]==="Any"||w[L]==="Unknown"}function*r(w,W,A){yield"true"}function*n(w,W,A){yield"true"}function*o(w,W,A){yield`Array.isArray(${A})`;const[te,H]=[vn("value","any"),vn("acc","number")];de(w.maxItems)&&(yield`${A}.length <= ${w.maxItems}`),de(w.minItems)&&(yield`${A}.length >= ${w.minItems}`);const Z=Tt(w.items,W,"value");if(yield`((array) => { for(const ${te} of array) if(!(${Z})) { return false }; return true; })(${A})`,at(w.contains)||de(w.minContains)||de(w.maxContains)){const Ve=at(w.contains)?w.contains:ut(),kr=Tt(Ve,W,"value"),io=de(w.minContains)?[`(count >= ${w.minContains})`]:[],wn=de(w.maxContains)?[`(count <= ${w.maxContains})`]:[],Vn=`const count = value.reduce((${H}, ${te}) => ${kr} ? acc + 1 : acc, 0)`,iu=["(count > 0)",...io,...wn].join(" && ");yield`((${te}) => { ${Vn}; return ${iu}})(${A})`}w.uniqueItems===!0&&(yield`((${te}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${A})`)}function*i(w,W,A){yield`(typeof value === 'object' && Symbol.asyncIterator in ${A})`}function*s(w,W,A){yield`(typeof ${A} === 'bigint')`,go(w.exclusiveMaximum)&&(yield`${A} < BigInt(${w.exclusiveMaximum})`),go(w.exclusiveMinimum)&&(yield`${A} > BigInt(${w.exclusiveMinimum})`),go(w.maximum)&&(yield`${A} <= BigInt(${w.maximum})`),go(w.minimum)&&(yield`${A} >= BigInt(${w.minimum})`),go(w.multipleOf)&&(yield`(${A} % BigInt(${w.multipleOf})) === 0`)}function*a(w,W,A){yield`(typeof ${A} === 'boolean')`}function*l(w,W,A){yield*Ht(w.returns,W,`${A}.prototype`)}function*c(w,W,A){yield`(${A} instanceof Date) && Number.isFinite(${A}.getTime())`,de(w.exclusiveMaximumTimestamp)&&(yield`${A}.getTime() < ${w.exclusiveMaximumTimestamp}`),de(w.exclusiveMinimumTimestamp)&&(yield`${A}.getTime() > ${w.exclusiveMinimumTimestamp}`),de(w.maximumTimestamp)&&(yield`${A}.getTime() <= ${w.maximumTimestamp}`),de(w.minimumTimestamp)&&(yield`${A}.getTime() >= ${w.minimumTimestamp}`),de(w.multipleOfTimestamp)&&(yield`(${A}.getTime() % ${w.multipleOfTimestamp}) === 0`)}function*d(w,W,A){yield`(typeof ${A} === 'function')`}function*f(w,W,A){const te=globalThis.Object.getOwnPropertyNames(w.$defs).reduce((H,Z)=>[...H,w.$defs[Z]],[]);yield*Ht(ga(w.$ref),[...W,...te],A)}function*h(w,W,A){yield`Number.isInteger(${A})`,de(w.exclusiveMaximum)&&(yield`${A} < ${w.exclusiveMaximum}`),de(w.exclusiveMinimum)&&(yield`${A} > ${w.exclusiveMinimum}`),de(w.maximum)&&(yield`${A} <= ${w.maximum}`),de(w.minimum)&&(yield`${A} >= ${w.minimum}`),de(w.multipleOf)&&(yield`(${A} % ${w.multipleOf}) === 0`)}function*m(w,W,A){const te=w.allOf.map(H=>Tt(H,W,A)).join(" && ");if(w.unevaluatedProperties===!1){const H=sr(`${new RegExp(Js(w))};`),Z=`Object.getOwnPropertyNames(${A}).every(key => ${H}.test(key))`;yield`(${te} && ${Z})`}else if(at(w.unevaluatedProperties)){const H=sr(`${new RegExp(Js(w))};`),Z=`Object.getOwnPropertyNames(${A}).every(key => ${H}.test(key) || ${Tt(w.unevaluatedProperties,W,`${A}[key]`)})`;yield`(${te} && ${Z})`}else yield`(${te})`}function*y(w,W,A){yield`(typeof value === 'object' && Symbol.iterator in ${A})`}function*$(w,W,A){typeof w.const=="number"||typeof w.const=="boolean"?yield`(${A} === ${w.const})`:yield`(${A} === '${H0.Escape(w.const)}')`}function*k(w,W,A){yield"false"}function*x(w,W,A){yield`(!${Tt(w.not,W,A)})`}function*E(w,W,A){yield`(${A} === null)`}function*N(w,W,A){yield Ei.IsNumberLike(A),de(w.exclusiveMaximum)&&(yield`${A} < ${w.exclusiveMaximum}`),de(w.exclusiveMinimum)&&(yield`${A} > ${w.exclusiveMinimum}`),de(w.maximum)&&(yield`${A} <= ${w.maximum}`),de(w.minimum)&&(yield`${A} >= ${w.minimum}`),de(w.multipleOf)&&(yield`(${A} % ${w.multipleOf}) === 0`)}function*R(w,W,A){yield Ei.IsObjectLike(A),de(w.minProperties)&&(yield`Object.getOwnPropertyNames(${A}).length >= ${w.minProperties}`),de(w.maxProperties)&&(yield`Object.getOwnPropertyNames(${A}).length <= ${w.maxProperties}`);const te=Object.getOwnPropertyNames(w.properties);for(const H of te){const Z=pc.Encode(A,H),Ve=w.properties[H];if(w.required&&w.required.includes(H))yield*Ht(Ve,W,Z),(ba(Ve)||t(Ve))&&(yield`('${H}' in ${A})`);else{const kr=Tt(Ve,W,Z);yield Ei.IsExactOptionalProperty(A,H,kr)}}if(w.additionalProperties===!1)if(w.required&&w.required.length===te.length)yield`Object.getOwnPropertyNames(${A}).length === ${te.length}`;else{const H=`[${te.map(Z=>`'${Z}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${A}).every(key => ${H}.includes(key))`}if(typeof w.additionalProperties=="object"){const H=Tt(w.additionalProperties,W,`${A}[key]`),Z=`[${te.map(Ve=>`'${Ve}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${A}).every(key => ${Z}.includes(key) || ${H}))`}}function*q(w,W,A){yield`${A} instanceof Promise`}function*ie(w,W,A){yield Ei.IsRecordLike(A),de(w.minProperties)&&(yield`Object.getOwnPropertyNames(${A}).length >= ${w.minProperties}`),de(w.maxProperties)&&(yield`Object.getOwnPropertyNames(${A}).length <= ${w.maxProperties}`);const[te,H]=Object.entries(w.patternProperties)[0],Z=sr(`${new RegExp(te)}`),Ve=Tt(H,W,"value"),kr=at(w.additionalProperties)?Tt(w.additionalProperties,W,A):w.additionalProperties===!1?"false":"true",io=`(${Z}.test(key) ? ${Ve} : ${kr})`;yield`(Object.entries(${A}).every(([key, value]) => ${io}))`}function*Ce(w,W,A){const te=yn(w,W);if(Ue.functions.has(w.$ref))return yield`${nn(w.$ref)}(${A})`;yield*Ht(te,W,A)}function*me(w,W,A){const te=sr(`${new RegExp(w.source,w.flags)};`);yield`(typeof ${A} === 'string')`,de(w.maxLength)&&(yield`${A}.length <= ${w.maxLength}`),de(w.minLength)&&(yield`${A}.length >= ${w.minLength}`),yield`${te}.test(${A})`}function*De(w,W,A){yield`(typeof ${A} === 'string')`,de(w.maxLength)&&(yield`${A}.length <= ${w.maxLength}`),de(w.minLength)&&(yield`${A}.length >= ${w.minLength}`),w.pattern!==void 0&&(yield`${sr(`${new RegExp(w.pattern)};`)}.test(${A})`),w.format!==void 0&&(yield`format('${w.format}', ${A})`)}function*He(w,W,A){yield`(typeof ${A} === 'symbol')`}function*Ze(w,W,A){yield`(typeof ${A} === 'string')`,yield`${sr(`${new RegExp(w.pattern)};`)}.test(${A})`}function*St(w,W,A){yield`${nn(w.$ref)}(${A})`}function*Rr(w,W,A){if(yield`Array.isArray(${A})`,w.items===void 0)return yield`${A}.length === 0`;yield`(${A}.length === ${w.maxItems})`;for(let te=0;te<w.items.length;te++)yield`${Tt(w.items[te],W,`${A}[${te}]`)}`}function*mr(w,W,A){yield`${A} === undefined`}function*no(w,W,A){yield`(${w.anyOf.map(H=>Tt(H,W,A)).join(" || ")})`}function*jt(w,W,A){yield`${A} instanceof Uint8Array`,de(w.maxByteLength)&&(yield`(${A}.length <= ${w.maxByteLength})`),de(w.minByteLength)&&(yield`(${A}.length >= ${w.minByteLength})`)}function*zn(w,W,A){yield"true"}function*oo(w,W,A){yield Ei.IsVoidLike(A)}function*rn(w,W,A){const te=Ue.instances.size;Ue.instances.set(te,w),yield`kind('${w[L]}', ${te}, ${A})`}function*Ht(w,W,A,te=!0){const H=Wr(w.$id)?[...W,w]:W,Z=w;if(te&&Wr(w.$id)){const Ve=nn(w.$id);if(Ue.functions.has(Ve))return yield`${Ve}(${A})`;{Ue.functions.set(Ve,"<deferred>");const kr=on(Ve,w,W,"value",!1);return Ue.functions.set(Ve,kr),yield`${Ve}(${A})`}}switch(Z[L]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*o(Z,H,A);case"AsyncIterator":return yield*i(Z,H,A);case"BigInt":return yield*s(Z,H,A);case"Boolean":return yield*a(Z,H,A);case"Constructor":return yield*l(Z,H,A);case"Date":return yield*c(Z,H,A);case"Function":return yield*d(Z,H,A);case"Import":return yield*f(Z,H,A);case"Integer":return yield*h(Z,H,A);case"Intersect":return yield*m(Z,H,A);case"Iterator":return yield*y(Z,H,A);case"Literal":return yield*$(Z,H,A);case"Never":return yield*k();case"Not":return yield*x(Z,H,A);case"Null":return yield*E(Z,H,A);case"Number":return yield*N(Z,H,A);case"Object":return yield*R(Z,H,A);case"Promise":return yield*q(Z,H,A);case"Record":return yield*ie(Z,H,A);case"Ref":return yield*Ce(Z,H,A);case"RegExp":return yield*me(Z,H,A);case"String":return yield*De(Z,H,A);case"Symbol":return yield*He(Z,H,A);case"TemplateLiteral":return yield*Ze(Z,H,A);case"This":return yield*St(Z,H,A);case"Tuple":return yield*Rr(Z,H,A);case"Undefined":return yield*mr(Z,H,A);case"Union":return yield*no(Z,H,A);case"Uint8Array":return yield*jt(Z,H,A);case"Unknown":return yield*zn();case"Void":return yield*oo(Z,H,A);default:if(!ri(Z[L]))throw new $T(w);return yield*rn(Z,H,A)}}const Ue={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Tt(w,W,A,te=!0){return`(${[...Ht(w,W,A,te)].join(" && ")})`}function nn(w){return`check_${G0.Encode(w)}`}function sr(w){const W=`local_${Ue.variables.size}`;return Ue.variables.set(W,`const ${W} = ${w}`),W}function on(w,W,A,te,H=!0){const[Z,Ve]=[`
`,Vn=>"".padStart(Vn," ")],kr=vn("value","any"),io=To("boolean"),wn=[...Ht(W,A,te,H)].map(Vn=>`${Ve(4)}${Vn}`).join(` &&${Z}`);return`function ${w}(${kr})${io} {${Z}${Ve(2)}return (${Z}${wn}${Z}${Ve(2)})
}`}function vn(w,W){const A=Ue.language==="typescript"?`: ${W}`:"";return`${w}${A}`}function To(w){return Ue.language==="typescript"?`: ${w}`:""}function ou(w,W,A){const te=on("check",w,W,"value"),H=vn("value","any"),Z=To("boolean"),Ve=[...Ue.functions.values()],kr=[...Ue.variables.values()],io=Wr(w.$id)?`return function check(${H})${Z} {
  return ${nn(w.$id)}(value)
}`:`return ${te}`;return[...kr,...Ve,io].join(`
`)}function ds(...w){const W={language:"javascript"},[A,te,H]=w.length===2&&Jr(w[1])?[w[0],w[1],W]:w.length===2&&!Jr(w[1])?[w[0],[],w[1]]:w.length===3?[w[0],w[1],w[2]]:w.length===1?[w[0],[],W]:[null,[],W];if(Ue.language=H.language,Ue.variables.clear(),Ue.functions.clear(),Ue.instances.clear(),!at(A))throw new n1(A);for(const Z of te)if(!at(Z))throw new n1(Z);return ou(A,te)}e.Code=ds;function sk(w,W=[]){const A=ds(w,W,{language:"javascript"}),te=globalThis.Function("kind","format","hash",A),H=new Map(Ue.instances);function Z(wn,Vn,iu){if(!ri(wn)||!H.has(Vn))return!1;const ak=Tm(wn),lk=H.get(Vn);return ak(lk,iu)}function Ve(wn,Vn){return Cm(wn)?Fm(wn)(Vn):!1}function kr(wn){return eg(wn)}const io=te(Z,Ve,kr);return new wT(w,W,io,A)}e.Compile=sk})(rl||(rl={}));const Z0={};function S5(e,t){e in Z0||(Z0[e]=t)}let o1=!1;function kT(){o1||(o1=!0,HF(e=>(Z0[e.schema[L]]||D5)(e)))}const J0=Symbol.for("object-shape-tester.shape-identifier");function Oe(e){if(kT(),tg(e))return e;const t=Y0(e),r=Ci(t,!1),n=Ci(t,!0),o={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:rl.Compile(t),$_compiledSchemaNoExtraKeys:rl.Compile(r),$_compiledSchemaExtraKeys:rl.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[J0]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}function tg(e){return C.hasKey(e,J0)&&!!e[J0]}function rg(e){return C.hasKey(e,L)}function Ci(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Ci(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Ci(n,t))),rg(e.items)?r.items=Ci(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Ci(n,t))),C.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,i])=>{n[o]=Ci(i,t)}),r.properties=n}return r.additionalProperties=t,r}function Y0(e){if(rg(e))return e;if(tg(e))return e.$_schema;if(C.isFunction(e))return qe.Function([],qe.Any(),{default:e});if(C.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,o])=>{const i=Y0(o);r[n]=i,t[n]=i.default}),qe.Object(r,{default:t})}else{if(C.isArray(e))return qe.Array(qe.Union(e.map(t=>Y0(t))),{default:[]});if(C.isPrimitive(e)){if(C.isString(e))return qe.String({default:e});if(C.isNumber(e))return qe.Number({default:e});if(C.isBoolean(e))return qe.Boolean({default:e});if(C.isSymbol(e))return qe.Symbol({default:e});if(C.isNull(e))return qe.Null({default:null});if(C.isUndefined(e))return qe.Undefined({default:void 0});if(C.isBigInt(e))return qe.BigInt({default:e});Dt.tsType(e).equals(),Dt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${v(e)}`)}}function xT({checkValue:e,default:t,name:r}){return ri(r)||Sm(r,(n,o)=>e(o)),(n=t)=>Oe(qe.Unsafe({[L]:r,default:n}))}function qi(e,t){const r=br(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Oe(qe.Union(r.map(n=>qe.Literal(n)),{default:t??r[0]}))}function we(e){return C.isSymbol(e)?DT(e):Oe(qe.Const(e,{default:e}))}const xu="ExactSymbol";function DT(e){return ri(xu)||Sm(xu,(t,r)=>r===t.symbol),S5(xu,({schema:t})=>`Expected symbol ${t.symbol?.description?n6({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Oe(qe.Unsafe({[L]:xu,symbol:e,default:e}))}function AT(...e){const t={},r=e.map(n=>{const o=Oe(n);return Object.assign(t,o.default),o.$_schema});return Oe(qe.Composite(r,{default:t}))}function Jt(e,t={}){bt.ExactOptionalPropertyTypes=!0;const r=Oe(e).$_schema,n=t.alsoUndefined?qe.Union([qe.Undefined(),r]):r;return Oe(qe.Optional(n))}function st(...e){let t;const r=e.map((n,o)=>{const i=Oe(n);return o||(t=i.default),i.$_schema});return Oe(qe.Union(r,{default:t}))}class ET extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(i=>T5(i)).join(`
`),o=Ji(r,`Shape mismatch:
${Ph(n,1)}`);super(o),this.errors=t,this.failureMessage=r}}function CT(e){return e.errors.flatMap(t=>Array.from(t))}function T5(e,t=0){const r=CT(e).map(o=>T5(o,t+1)),n=[e.path,e.message].filter(C.isTruthy).join(": ")+(r.length?":":"");return[Ph(n,t),...r].join(`
`)}function Wo(e,t,r={}){return N5(t,r).Check(e)}function bc(e,t,r={},n){if(Wo(e,t,r))return;const o=Array.from(N5(t,r).Errors(e));if(o.length)throw new ET(o,n)}function N5(e,t){return e=FT(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function FT(e){return Oe(e)}function Es({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:o}=Dh(r),i=r.default??(o-n)/2+n,s=Oe(qe.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:i})),a=h2(()=>bc(i,s));if(a)throw ta(a,"Default range value is not within range.");return s}const Uu="recordShape";function bd({keys:e,values:t,partial:r,additionalProperties:n}){MT();const o=P5(e),i=Oe(t);return Oe(qe.Unsafe({[L]:Uu,keysShape:o,valuesShape:i,isPartial:!!r,additionalProperties:!!n,default:ST({isPartial:!!r,keysShape:o,valuesShape:i})}))}function MT(){ri(Uu)||Sm(Uu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([o,i])=>{const s=e.additionalProperties?!0:Wo(o,e.keysShape),a=Wo(i,e.valuesShape);return s&&a}),n=e.isPartial?!0:!i1(e.keysShape,t).length;return r&&n}),S5(Uu,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=Rn(Object.entries(n),([l])=>l,(l,[c,d])=>!Wo(c,r.keysShape)||!Wo(d,r.valuesShape)),i=i1(r.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",a=i.length?["Missing keys",i.join(",")].join(": "):"";return[s,a].filter(C.isTruthy).join(`
`)})}function i1(e,t){const r=yc(e).filter(n=>C.isPropertyKey(n));return r.length?r.filter(n=>!C.hasKey(t,n)):[]}function ST({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=yc(e),o=t.default;return Object.fromEntries(n.map(i=>[i,o]))}}function P5(e){return tg(e)?e:rg(e)?Oe(e):C.isObject(e)?qi(e):C.isArray(e)&&C.isLengthAtLeast(e,1)?st(...e.map(t=>we(t))):C.isPropertyKey(e)?Oe(e):Oe(qe.Undefined())}function yc(e){const t=e.$_schema,r=t[L].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Sc(t.anyOf.flatMap(n=>yc(Oe(n)))):["undefined","number","string","symbol"].includes(r)?[]:yc(P5(e.default))}function TT(e){return Oe(qe.Unknown({default:e}))}const NT=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],ng=NT.reduce((e,t)=>(e[t]=t,e),{});it.defaultZone.name;const I5=ng.UTC,PT=Oe({hour:Es({...hp,default:hp.min}),minute:Es({...mp,default:mp.min}),second:Es({...gp,default:gp.min}),millisecond:Es({...pp,default:pp.min}),timezone:qi(ng,I5)}),IT=Oe({year:2023,month:Es({...bp,default:bp.min}),day:Es({...yp,default:yp.min}),timezone:qi(ng,I5)});Oe(AT(IT,PT));Ie.Years+"",Ie.Months+"",Ie.Weeks+"",Ie.Days+"",Ie.Hours+"",Ie.Minutes+"",Ie.Seconds+"",Ie.Milliseconds+"";Oe(st({get:we(J.Month),in:st(we(J.Year))},{get:we(J.Week),in:st(we(J.Year),we(J.Month))},{get:we(J.Day),in:st(we(J.Year),we(J.Month),we(J.Week))},{get:we(J.Hour),in:st(we(J.Year),we(J.Month),we(J.Week),we(J.Day))},{get:we(J.Minute),in:st(we(J.Year),we(J.Month),we(J.Week),we(J.Day),we(J.Hour))},{get:we(J.Second),in:st(we(J.Year),we(J.Month),we(J.Week),we(J.Day),we(J.Hour),we(J.Minute))},{get:we(J.Millisecond),in:st(we(J.Year),we(J.Month),we(J.Week),we(J.Day),we(J.Hour),we(J.Minute),we(J.Second))}));bd({keys:qi(Ie),values:-1,partial:!0});var s1;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(s1||(s1={}));var X0;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(X0||(X0={}));var a1;(function(e){e.Year="year",e.Month="month",e.Day="day"})(a1||(a1={}));const OT={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Q3(OT,br(X0));xT({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return BT(e)}});function BT(e){return ne.fromISO(e).toUTC().toISO()===e}const RT=Oe({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:TT()});function wf(e){return Wo(e,RT,{allowExtraKeys:!0})}class O5 extends kw{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||hm}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:LT}=P6,l1=e=>e,u1=()=>document.createComment(""),Na=(e,t,r)=>{const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(u1(),o),s=n.insertBefore(u1(),o);r=new LT(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let l;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(l=e._$AU)!==s._$AU&&r._$AP(l)}if(i!==o||a){let l=r._$AA;for(;l!==i;){const c=l1(l).nextSibling;l1(n).insertBefore(l,o),l=c}}}return r},xi=(e,t,r=e)=>(e._$AI(t,r),e),jT={},_T=(e,t=jT)=>e._$AH=t,UT=e=>e._$AH,$f=e=>{e._$AR(),e._$AA.remove()};const og={ATTRIBUTE:1,CHILD:2,ELEMENT:6},to=e=>(...t)=>({_$litDirective$:e,values:t});class ro{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const zT={attribute:!0,type:String,converter:rc,reflect:!1,hasChanged:Zh},VT=(e=zT,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function qT(e){return(t,r)=>typeof r=="object"?VT(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const tr=to(class extends ro{constructor(e){if(super(e),e.type!==og.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Kr}});const pt=e=>e??ee;function WT(e,t,r){return e?t(e):r?.(e)}class KT extends Ya{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function GT(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(a=>!!a.index).length;if(n||o)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const l=i[a.index];l&&l.splice(0,0,...a.values)}),i.flat()}function Q0(e){return C.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function ig(e){return C.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function B5(e){return Rn(e,t=>{if(Q0(t))return t.definition;if(ig(t))return t.tagInterpolationKey||t},C.isTruthy)}const R5=new WeakMap;function HT(e,t){const r=B5(t);return L5(R5,[e,...r]).value?.template}function ZT(e,t,r){const n=B5(t);return _5(R5,[e,...n],r)}function L5(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=j5(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?L5(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function j5(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function _5(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:s}=j5(e,t,n);if(!i)return{result:!1,reason:s};const a=o??{nested:void 0,template:void 0};if(o||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),_5(l,t,r,n+1)}function U5(e,t,r){const n=HT(e,t),o=n??r();if(!n){const a=ZT(e,t,o);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=o.valuesTransform(t),s=GT(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function z5(e,t,r,n){const o=[],i=[],s=[],a=[];return e.forEach((c,d)=>{const f=o.length-1,h=o[f],m=d-1,y=t[m];n&&n(c);let $,k=[];if(typeof h=="string"&&($=r(h,c,y),$)){o[f]=[h,$.replacement].join(""),s.push(m);const E=$.getExtraValues;k=E?E(y):[],k.length&&E?(o[f]+=" ",k.forEach((N,R)=>{R&&o.push(" ")}),a.push(N=>{const R=N[m],q=E(R);return{index:m,values:q}}),o.push(c)):o[f]+=c}$||o.push(c);const x=e.raw[d];$?(i[f]=[i[f],$.replacement,x].join(""),k.length&&k.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=a.flatMap(f=>f(c));return{valueIndexDeletions:s,valueInsertions:d}}}}function JT(...[e,t,r]){if(ig(r))return{replacement:r.tagName,getExtraValues:void 0}}function YT(e,t){return z5(e,t,JT)}function D(e,...t){const r=U5(e,t,()=>YT(e,t));return S2(r.strings,...r.values)}const XT={allowPolymorphicState:!1,errorHandler:void 0};function V5(e,t){const r=e.instanceState;je(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&je(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class QT extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function sg(){return e=>class extends QT{static type=e;_type=e;constructor(t){super(e,t)}}}function Xe(){return sg()}function eN(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=sg()([e,n].join("-"));return r[n]=o,r},{}):{}}function tN(e){return e?rt(e,t=>t):{}}function q5(e,t){t in e||qT()(e,t)}function rN(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function c1(e,t){const r=e;function n(s){t?rN(s,e,e.tagName):q5(e,s)}function o(s,a){return n(a),r[a]}return new Proxy({},{get:o,set(s,a,l){n(a);const c=r[a];function d(h){s[a]=h,r[a]=h}const f=e.observablePropertyListenerMap[a];if(c!==l&&wf(c)&&f&&c.removeListener(f),wf(l))if(f)l.listen(!1,f);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=h,l.listen(!1,h)}else wf(c)&&(e.observablePropertyListenerMap[a]=void 0);return d(l),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return o(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function d1(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function f1(e,t,r){return r?Xo(r,o=>({key:o,value:[e,t,o].join("-")}),{}):{}}function nN({hostClassNames:e,cssVars:t}){return{hostClasses:rt(e,(r,n)=>({name:he(n),selector:he(`:host(.${n})`)})),cssVars:t}}function oN({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&je(t).forEach(i=>{const s=t[i],a=r[i];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function iN({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:o}){function i(a){je(a).forEach(l=>{const c=a[l];e.instanceState[l]=c})}return{cssVars:r,slotNames:n,testIds:o,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function Un(...e){return Dt.isEmpty(e),t=>{const r=t;if(!C.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return sN({...r,options:{...r.options}})}}function sN(e){if(!C.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!C.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...XT,...e.options},r=eN(e.tagName,e.events),n=tN(e.hostClasses);e.hostClasses&&d1(e.tagName,e.hostClasses),e.cssVars&&d1(e.tagName,e.cssVars);const o=e.cssVars?Xn(e.cssVars):{},i=f1(e.tagName,"slot",e.slotNames),s=f1(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(nN({hostClassNames:n,cssVars:o})):e.styles||D``,l=e.render;function c(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=class extends KT{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return iN({element:this,eventsMap:r,cssVars:o,slotNamesMap:i,testIdsMap:s})}static assign=c;static events=r;static render=l;static hostClasses=n;static cssVars=o;static init=e;static slotNames=i;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(f);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");je(m).forEach(y=>{q5(this,y),this.instanceState[y]=m[y]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const h=l(f);if(h instanceof Promise)throw new TypeError("render cannot be asynchronous");return oN({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=ta(f,`Failed to render ${e.tagName}`);return console.error(h),this._lastRenderError=h,t.errorHandler?.(h),Wt(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{C.hasKey(f,"destroy")&&C.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){V5(this,f)}observablePropertyListenerMap={};instanceInputs=c1(this,!1);instanceState=c1(this,!t.allowPolymorphicState);constructor(){super(),this.definition=d}};return Object.defineProperties(d,{name:{value:r6(e.tagName,{firstLetterCase:ml.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,d)),d}class aN extends Ds{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function lN(e){return new aN(e)}const h1=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},uN=to(class extends ro{constructor(e){if(super(e),e.type!==og.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let s=0;for(const a of e)o[s]=n?n(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=UT(e),{values:i,keys:s}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??=[],l=[];let c,d,f=0,h=o.length-1,m=0,y=i.length-1;for(;f<=h&&m<=y;)if(o[f]===null)f++;else if(o[h]===null)h--;else if(a[f]===s[m])l[m]=xi(o[f],i[m]),f++,m++;else if(a[h]===s[y])l[y]=xi(o[h],i[y]),h--,y--;else if(a[f]===s[y])l[y]=xi(o[f],i[y]),Na(e,l[y+1],o[f]),f++,y--;else if(a[h]===s[m])l[m]=xi(o[h],i[m]),Na(e,o[f],o[h]),h--,m++;else if(c===void 0&&(c=h1(s,m,y),d=h1(a,f,h)),c.has(a[f]))if(c.has(a[h])){const $=d.get(s[m]),k=$!==void 0?o[$]:null;if(k===null){const x=Na(e,o[f]);xi(x,i[m]),l[m]=x}else l[m]=xi(k,i[m]),Na(e,o[f],k),o[$]=null;m++}else $f(o[h]),h--;else $f(o[f]),f++;for(;m<=y;){const $=Na(e,l[y+1]);xi($,i[m]),l[m++]=$}for(;f<=h;){const $=o[f++];$!==null&&$f($)}return this.ut=s,_T(e,l),Kr}}),cN=uN;function Xl(e,t){return Wi(e,t),e.element}function dN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Wi(e,t){const r=dN(e),n=r?`: in ${r}`:"";if(e.type!==og.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function fN(e,t){return to(class extends ro{element;constructor(r){super(r),this.element=Ut.instanceOf(Xl(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),Kr}})}const wo=fN("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const o=Xi(r,"allAttributesApplied",()=>new Set);je(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);o.add(i)}),o.forEach(i=>{const s=t[i];s==null||s===!1||s===ee?e.removeAttribute(i):s===""||s===!0?e.setAttribute(i,""):e.setAttribute(i,String(s))})});function hN(e){const t=to(class extends ro{element;constructor(r){super(r),this.element=Xl(r,e)}render(r){return this.element.setAttribute(e,r),Kr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function j(e,t){return mN(e,t)}const mN=to(class extends ro{element;lastListenerMetaData;constructor(e){super(e),this.element=Xl(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Kr}});function gN(e){return j("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const m1="onDomCreated",Ki=to(class extends ro{element;constructor(e){super(e),Wi(e,m1)}update(e,[t]){Wi(e,m1);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),g1="onDomRendered",pN=to(class extends ro{constructor(e){super(e),Wi(e,g1)}update(e,[t]){Wi(e,g1);const r=e.element;return window.requestAnimationFrame(()=>t(r)),this.render(t)}render(e){}}),p1="onResize",W5=to(class extends ro{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&bN(this.element,this.callback,e)});callback;constructor(e){super(e),Wi(e,p1)}update(e,[t]){Wi(e,p1),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function bN(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function Pr(e,t,r){return WT(e,()=>t,()=>r)}const{attributeDirective:yN}=hN("data-test-id"),Hn=yN;function K5(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(t(o),Un(...n)(r(o)))}function vN(e,t){return wN(void 0,e)}const wN=to(class extends ro{element;constructor(e){super(e),this.element=Xl(e,"assign")}render(e,t){return V5(this.element,t),Kr}}),$N={};function kN(e,t){return t.map((r,n)=>{const o=e[n],i=e[n+1];if(o&&i){const{shouldHaveTagNameHere:s}=G5(o,i);if(s&&C.isString(r))return{tagName:r,tagInterpolationKey:Xi($N,r,()=>({tagName:r}))}}return r})}function G5(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function xN(...[e,t,r]){const n=Q0(r)?r.definition:r,{isOpeningTag:o,shouldHaveTagNameHere:i}=G5(e,t),s=ig(n);if(s&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(l){const c=Q0(l)?l.inputs:void 0;return[o&&c?vN(c):void 0].filter(C.isTruthy)}}}function DN(e){}function AN(e){return z5(e.strings,e.values,xN,DN)}function g(e,...t){const r=kN(e,t),n=E6(e,...r),o=U5(e,r,()=>AN(n));return{...n,strings:o.strings,values:o.values}}function eh(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],i=(t??[""]).map((s,a)=>{const l=EN(s,n[a]);return`${s}${l}`});return $2(i.join(""))}function EN(e,t){return t._$litType$!=null||t._$litDirective$!=null?eh(t):Array.isArray(t)?t.map(n=>eh(n)).join(""):e.endsWith("=")?`"${t}"`:t}function H5(e){return rt(e,(t,r)=>r instanceof Ke?he(r.toString({format:"hex"})):H5(r))}const CN="dodgerblue";function th(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function kf({background:e,foreground:t}){return{background:e??new Ke(th(t)),foreground:t??new Ke(th(e))}}var vc;(function(e){e.Dark="dark",e.Light="light"})(vc||(vc={}));function FN(e){return e==="black"?"white":"black"}const MN={black:{foregroundFaint1:new Ke("#ccc"),foregroundFaint2:new Ke("#eee")},white:{foregroundFaint1:new Ke("#ccc"),foregroundFaint2:new Ke("#eee")}},SN={black:{backgroundFaint1:new Ke("#666"),backgroundFaint2:new Ke("#444")},white:{backgroundFaint1:new Ke("#ccc"),backgroundFaint2:new Ke("#fafafa")}};function b1({themeColor:e=CN,themeStyle:t=vc.Light}={}){const r=new Ke(e),n=new Ke(t===vc.Dark?"black":"white"),o=th(n),i=new Ke(o),s={nav:{hover:kf({background:r.clone().set({"hsl.l":93})}),active:kf({background:r.clone().set({"hsl.l":90})}),selected:kf({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...SN[FN(o)],foreground:i,...MN[o]}};return H5(s)}var Zn;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Zn||(Zn={}));async function y1(e=1){const t=new Gu;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function TN(e,t){return{element:e,children:Z5(e)}}function Z5(e,t,r){return NN(e).map(n=>{const o=Z5(n);return{element:n,children:o}})}function NN(e){return[...e.children,...e.shadowRoot?.children??[]]}function xf(e){return e.matches(":focus")}function ag(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:ag(t)}function J5(e,t){if(t(e))return e;const r=ag(e);if(r)return J5(r,t)}function yd(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const o=t.name,i=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${i}'.`;throw new Error(s)}return n}function PN(e){const t=ag(e);return t&&J5(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function IN(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function ON({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const l=i.codePointAt(s);for(;a<r;)if(o.codePointAt(a++)===l)continue e;return!1}return!0}const BN=Pi(32);function zu(e){return e.join(BN)}function Y5(e){if(!e.length)return[];const t=zu(e),r=Y5(e.slice(0,-1));return[t,...r]}const RN=["error","errors"];function LN(e){return RN.includes(e)}function jN({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),zu(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&LN(t),s=zu(o.fullUrlBreadcrumbs);if(ON({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(l=>C.isString(l)?l:eh(l))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[s]){const l=Y5(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const i=zu(o.fullUrlBreadcrumbs),s=r[i];if(!C.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class lg extends Error{name="SpaRouterError"}class v1 extends lg{name="GlobalUrlEventsConsolidationError"}class _N extends lg{name="SanitizationDepthMaxed"}Oe({paths:[""],search:Jt(st(void 0,bd({keys:"",values:[""]}))),hash:Jt(st(void 0,""))});const UN=Oe({basePath:Jt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Jt(1,{alsoUndefined:!0}),disableWarnings:Jt(!1,{alsoUndefined:!0}),isPaused:Jt(!1,{alsoUndefined:!0})}),Df="://";function ug(...e){const t=e.join("/"),[r,n=""]=t.includes(Df)?t.split(Df):["",t];let o=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,l,c)=>{if(o)return s;const d=c[l+1];let f=a;const h=d?.startsWith("?"),m=!a.includes("?")&&h,y=d==="?";if(h||m){o=!0;let $=!1;const k=c.slice(l+2).reduce((x,E)=>(E.includes("#")&&($=!0),$?x.concat(E):[x,E].join("&")),"");f=[a,d,y?Ii({value:k,prefix:"&"}):k].join("")}return s.concat(f)},[]);return[r,r?Df:"",i.join("/")].join("")}var Xs;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Xs||(Xs={}));var Qs;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Qs||(Qs={}));const zN=Oe({encoding:Jt(st(void 0,qi(Xs))),searchParamStrategy:Jt(st(void 0,qi(Qs)))});function Du(e,t){return e.map(r=>{if(r!=null)return Ps(String(r),t)}).filter(r=>r!=null)}function Ps(e,t){return t?.encoding===Xs.Decode?decodeURIComponent(e):t?.encoding===Xs.Encode?encodeURIComponent(e):e}const VN=Oe(bd({keys:"",values:[""]}));function qN(e,t,r){const n=r?.searchParamStrategy===Qs.Clear?{}:rt(e,(s,a)=>P3(a)),o=rt(t,(s,a)=>{if(r?.searchParamStrategy===Qs.Append){const l=n[s],c=C.isArray(l)?l:[l];if(a){const d=C.isArray(a)?a:[a];return Du([...c,...d],r)}else return Du(c,r)}else return C.isArray(a)?Du(a,r):a?Du([a],r):void 0});return Lc({...n,...o},(s,a)=>!!a)}function X5(e,t){return C.isString(e)&&!e.includes("?")?{}:(C.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[s,...a]=X3(i,"=");return[s,a.length?a.join("="):void 0]}).reduce((i,[s,a])=>{const l=Q5({options:t,key:s,value:a}),c=Xi(i,l.key,()=>[]);return a!=null&&c.push(l.value),i},{})}function WN(e){if(e!=null)return C.isArray(e)?[...e]:e===""?[]:[e]}function KN(e,t){const r=Rn(Object.entries(e),([n,o])=>{const i=WN(o);return i?.length?i.map(s=>{const a=Q5({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return r.length?wr({value:r.join("&"),prefix:"?"}):""}function Q5({options:e,key:t,value:r}){return{key:Ps(t,e),value:Ps(String(r),e)}}function e$({hash:e,hostname:t,password:r,pathname:n,port:o,protocol:i,search:s,username:a}){return[i?i+"://":"",a?a+":":"",r?r+"@":"",vd({hostname:t,port:o}),cg({hash:e,pathname:n,search:s})].join("")}function t$({pathname:e}){const t=Ii({value:e,prefix:"/"});return t?t.split("/"):[]}function cg({hash:e,pathname:t,search:r}){return[wr({value:t,prefix:"/"}),r?wr({value:r,prefix:"?"}):"",e?wr({value:e,prefix:"#"}):""].join("")}function vd({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function r$({hostname:e,port:t,protocol:r}){return[r,vd({hostname:e,port:t})].filter(C.isTruthy).join("://")}function Is(e,t){const r=C.isString(e)?Ii({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),o=n?wr({value:Ps(n,t),prefix:"#"}):"",i=r.replace(/#[^#]*$/,""),s=i.replace(/^[^?]*(?:\?|$)/,""),a=s?wr({value:Ps(s,t),prefix:"?"}):"",l=i.replace(/\?[^?]*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=d.replace(/@.*/,""),h=d.replace(/^[^@]*@/,""),m=f!==h,[y,...$]=m?f.split(":").reverse():[],k=$.toReversed().join("").replace(/[/:]/g,"")||"",x=y?.replace(/[/:]/g,"")||"",E=Y3(h.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),N=E[0]?.endsWith("]")?"":E[1]===":"&&E[0]||"",q=h.replace(new RegExp(`:${N}($|/)`),"$1").replace(/\/.*/,""),ie=h.replace(/^[^/]*(\/|$)/,"$1"),Ce=Ps(ie.replace(/^[^/]*(?:\/|$)/,"/"),t),me=vd({hostname:q,port:N}),De=r$({hostname:q,port:N,protocol:c}),He=e$({hash:o,hostname:q,password:x,pathname:Ce,port:N,protocol:c,search:a,username:k}),Ze=X5(a),St=t$({pathname:Ce});return{fullPath:cg({hash:o,pathname:Ce,search:a}),hash:o,host:me,hostname:q,href:He,origin:De,password:x,pathname:Ce,paths:St,port:N,protocol:c,search:a,searchParams:Ze,username:k}}Oe({hash:Jt(st(void 0,"")),search:Jt(st(void 0,"",bd({keys:"",values:st(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Jt(st(void 0,"")),pathname:Jt(st(void 0,"")),paths:Jt(st(void 0,[""])),protocol:Jt(st(void 0,"")),username:Jt(st(void 0,"")),password:Jt(st(void 0,"")),port:Jt(st(void 0,"",-1))});function GN(e,t,r){const n=!!r,o=t==null||Wo(t,zN,{allowExtraKeys:!1}),i=o?Is(""):C.instanceOf(e,URL)||C.isString(e)?Is(e):e,s=o?e:t,a=C.isString(s)&&s.startsWith("."),l=C.isString(s)||C.instanceOf(s,URL)?Lc(Is(s),($,k)=>C.isTruthy(k)):s,c=n?r:o?t:void 0,d=rt(i,($,k)=>{if(!C.hasKey(l,$))return k;const x=l[$];return C.isNumber(x)?String(x):C.isString(x)?$==="hash"&&x?wr({value:x,prefix:"#"}):$==="pathname"?wr({value:x,prefix:"/"}):x:k});C.hasKey(l,"paths")&&l.paths&&(d.pathname=ug(a?i.pathname:"",...l.paths));const f=C.isString(l.search)?X5(wr({value:l.search,prefix:"?"})):xn(l.search||{}),h=qN(d.searchParams,f,{...c,encoding:Xs.None}),m=KN(h,c);return{...d,searchParams:h,search:m,paths:t$(d),fullPath:cg(d),host:vd(d),origin:r$(d),href:e$({...d,search:m})}}const HN=Oe({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:VN,hash:"",fullPath:"/",href:"/"});({...HN.default});const ZN=0;function n$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==ZN)}const wd="locationchange",bo=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const w1=bo?.pushState;function $1(...e){if(!w1)return;const t=w1.apply(bo,e);return globalThis.dispatchEvent(new Event(wd)),t}const k1=bo?.replaceState;function x1(...e){if(!k1)return;const t=k1.apply(bo,e);return globalThis.dispatchEvent(new Event(wd)),t}function JN(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!bo)){{if(bo.pushState===$1)throw new v1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(bo.replaceState===x1)throw new v1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,bo.pushState=$1,bo.replaceState=x1,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(wd))})}}function Au(e,t){const r=Is(e),n=Ii({value:Ii({value:r.pathname,prefix:wr({value:t||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?Ii({value:r.hash,prefix:"#"}):void 0;return{paths:o,search:i,hash:s}}class dg{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){bc(t,UN),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new O5({defaultValue:r,equalityCheck:()=>!1}),JN(),this.removeGlobalListener=zh(globalThis,wd,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new _N("Looping route sanitization detected; aborting window URL change listener.");const n=Au(globalThis.location.href,this.params.basePath),o=t.sanitizeRoute(n);C.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:ug(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Au(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Au(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),i=this.routeIncludesBasePath(Au(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return GN(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?wr({value:i.hash,prefix:"#"}):""},{searchParamStrategy:Qs.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:o}=Is(n);return this.params.isPaused||!r.force&&C.jsonEquals(Is(globalThis.location.href).fullPath,o)?!1:r.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(t,r){return n$(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new lg(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function YN(e){return new dg({basePath:e,sanitizeRoute(t){return{paths:XN(t.paths),hash:void 0,search:void 0}}})}function XN(e){const t=e[0];if(C.isEnumValue(t,Mr)){if(t===Mr.Book)return[Mr.Book,...e.slice(1)];if(t===Mr.Search)return e[1]?[t,e[1]]:[Mr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return js.paths}const wc=sg()("element-book-change-route"),D1="vira-",Qe=K5({assertInputs:e=>{if(!e.tagName.startsWith(D1))throw new Error(`Tag name should start with '${D1}' but got '${e.tagName}'`)}});var Ae=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(Ae||{});function Eu(e,t){if(e)return t?Lh({value:e,suffix:"*"}):e}function QN(e){return hl(e).every(t=>t.isHidden||!t.isRequired?!0:C.isString(t.value)?!!t.value:t.value!=null)}const b=Xn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function Q({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const eP=Q({name:"ArrowUp24Icon",svgTemplate:g`
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
    `}),tP=Q({name:"AutoTheme24Icon",svgTemplate:g`
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
    `}),rP=Q({name:"Bell24Icon",svgTemplate:g`
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
    `}),nP=Q({name:"Chat24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),o$=Q({name:"Check16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),fg=Q({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),oP=Q({name:"ChevronDown24Icon",svgTemplate:g`
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
    `}),hg=Q({name:"ChevronUp24Icon",svgTemplate:g`
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
    `}),i$=Q({name:"CloseX16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),s$=Q({name:"CloseX24Icon",svgTemplate:g`
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
    `}),iP=Q({name:"Commit24Icon",svgTemplate:g`
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
    `}),rh=Q({name:"Copy24Icon",svgTemplate:g`
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
    `}),sP=Q({name:"Document24Icon",svgTemplate:g`
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
    `}),aP=Q({name:"DocumentSearch24Icon",svgTemplate:g`
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
    `}),lP=Q({name:"DoubleChevron24Icon",svgTemplate:g`
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
    `}),a$=Q({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),It=Q({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),uP=Q({name:"ExternalLink24Icon",svgTemplate:g`
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
    `}),l$=Q({name:"EyeClosed24Icon",svgTemplate:g`
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
    `}),u$=Q({name:"EyeOpen24Icon",svgTemplate:g`
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
    `}),cP=Q({name:"Filter24Icon",svgTemplate:g`
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
    `}),dP=Q({name:"Globe24Icon",svgTemplate:g`
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
    `}),fP=Q({name:"Link24Icon",svgTemplate:g`
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
    `}),c$=Q({name:"Loader24Icon",svgTemplate:g`
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
    `}),xo=Xn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),hP=D`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${xo["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Gi=Q({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${hP}
        </style>
        ${c$.svgTemplate}
    `}),mP=Q({name:"Lock24Icon",svgTemplate:g`
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
    `}),gP=Q({name:"MagnifyingGlass24Icon",svgTemplate:g`
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
    `}),pP=Q({name:"Moon24Icon",svgTemplate:g`
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
    `}),nl=Q({name:"Options24Icon",svgTemplate:g`
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
    `}),bP=Q({name:"Pencil24Icon",svgTemplate:g`
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
    `}),yP=Q({name:"Printer24Icon",svgTemplate:g`
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
    `}),vP=Q({name:"Shield24Icon",svgTemplate:g`
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
    `}),wP=Q({name:"SortAscending24Icon",svgTemplate:g`
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
    `}),$P=Q({name:"SortDescending24Icon",svgTemplate:g`
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
    `}),kP=Q({name:"Sparkle24Icon",svgTemplate:g`
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
    `}),xP=Q({name:"SpeakerLoud24Icon",svgTemplate:g`
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
    `}),DP=Q({name:"SpeakerMedium24Icon",svgTemplate:g`
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
    `}),AP=Q({name:"SpeakerMuted24Icon",svgTemplate:g`
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
    `}),EP=Q({name:"SpeakerQuiet24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),nh=Q({name:"Star24Icon",svgTemplate:g`
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
    `}),$c=Q({name:"StatusFailure24Icon",svgTemplate:g`
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
    `}),CP=Q({name:"StatusInProgress24Icon",svgTemplate:g`
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
    `}),qa=Q({name:"StatusSuccess24Icon",svgTemplate:g`
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
    `}),FP=Q({name:"StatusUnknown24Icon",svgTemplate:g`
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
    `}),MP=Q({name:"StatusWarning24Icon",svgTemplate:g`
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
    `}),SP=Q({name:"Sun24Icon",svgTemplate:g`
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
    `}),TP=Q({name:"Upload24Icon",svgTemplate:g`
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
    `}),d$=Q({name:"X24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function an(e,t){const r=je(t).map(o=>{if(t[o])return`${b[o].name}: ${String(t[o])};`}).filter(C.isTruthy).join(" "),n=D`
        ${he(r)}
        display: inline-flex;
        vertical-align: middle;
    `;return Q({name:e.name,svgTemplate:g`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const oh={ArrowUp24Icon:eP,AutoTheme24Icon:tP,Bell24Icon:rP,Chat24Icon:nP,Check16Icon:o$,Check24Icon:fg,ChevronDown24Icon:oP,ChevronUp24Icon:hg,CloseX16Icon:i$,CloseX24Icon:s$,Commit24Icon:iP,Copy24Icon:rh,Document24Icon:sP,DocumentSearch24Icon:aP,DoubleChevron24Icon:lP,Element16Icon:a$,Element24Icon:It,ExternalLink24Icon:uP,EyeClosed24Icon:l$,EyeOpen24Icon:u$,Filter24Icon:cP,Globe24Icon:dP,Link24Icon:fP,Loader24Icon:c$,LoaderAnimated24Icon:Gi,Lock24Icon:mP,MagnifyingGlass24Icon:gP,Moon24Icon:pP,Options24Icon:nl,Pencil24Icon:bP,Printer24Icon:yP,Shield24Icon:vP,SortAscending24Icon:wP,SortDescending24Icon:$P,Sparkle24Icon:kP,SpeakerLoud24Icon:xP,SpeakerMedium24Icon:DP,SpeakerMuted24Icon:AP,SpeakerQuiet24Icon:EP,Star24Icon:nh,StatusFailure24Icon:$c,StatusInProgress24Icon:CP,StatusSuccess24Icon:qa,StatusUnknown24Icon:FP,StatusWarning24Icon:MP,Sun24Icon:SP,Upload24Icon:TP,X24Icon:d$},Hi=D`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`;function A1(e){return C.isPrimitive(e)||e instanceof qo?String(e):e.default}function qn(e,t,r,n){const o=`${r.prefix}-default-fg`,i=`${r.prefix}-default-bg`;if(C.isPrimitive(t)||t instanceof qo)return t;if("refDefaultBackground"in t)return`var(--${i}, ${A1(r.background)})`;if("refDefaultForeground"in t)return`var(--${o}, ${A1(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const s=C.hasKey(t,"refBackground")?"refBackground":C.hasKey(t,"refForeground")?"refForeground":void 0,a=s&&C.hasKey(t,s)?t[s]:void 0,l=s==="refBackground"?"background":"foreground",c=a&&n[a];if(!c)throw new Error(`Color theme ${s} reference '${a}' does not exist. (Referenced from '${e}'.)`);const d=c[l]||(l==="foreground"?qn(o,r.foreground,r,n):qn(i,r.background,r,n));return`var(--${a}-${l==="foreground"?"fg":"bg"}, ${qn(a,d,r,n)})`}else return t.value}const Fr="theme-default";function f$(e,t){try{if(Fr in t)throw new Error(`Cannot define theme color by name '${Fr}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,i=`${e.prefix}-default-inverse-bg`,s={[r]:qn(r,e.foreground,e,t),[n]:qn(n,e.background,e,t),[o]:qn(o,e.background,e,t),[i]:qn(i,e.foreground,e,t)},a=Xn(s),l=Sn(t).reduce((y,[$,k])=>{const x=E1($),E=k.foreground?qn([$,"foreground"].join(" "),k.foreground,e,t):`var(${a[r].name}, ${a[r].default})`,N=k.background?qn([$,"background"].join(" "),k.background,e,t):`var(${a[n].name}, ${a[n].default})`;return y[x.foreground]=E,y[x.background]=N,y[x.foregroundInverse]=`var(--${x.background}, ${N})`,y[x.backgroundInverse]=`var(--${x.foreground}, ${E})`,y},{}),c=Xn(l),d={},f={};Sn(t).forEach(([y,$])=>{Dt.isString(y);const k=E1(y),x=c[k.foreground],E=c[k.background],N=c[k.foregroundInverse],R=c[k.backgroundInverse];Dt.isDefined(x),Dt.isDefined(E),Dt.isDefined(N),Dt.isDefined(R),d[y]={foreground:x,background:E,init:$,name:y},f[y]={foreground:N,background:R,init:$,name:y}});const h={foreground:a[r],background:a[n],init:e,name:Fr},m={...h,foreground:a[o],background:a[i]};return{colors:{[Fr]:h,...d},inverse:{[Fr]:m,...f},init:{colors:t,default:e},prefix:e.prefix}}catch(r){throw globalThis.setTimeout(()=>v2.error(r)),r}}function E1(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}const u=Xn({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-0":"#f3f6f6","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"});function Af({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:o}){const i=n?.[t];i&&(o[String(r[t].name)]=String(qn(t,i,e.init.default,e.init.colors)))}function NP(e,t,{defaultOverride:r,colorOverrides:n}){const o={};r&&je(r).forEach(l=>{Af({originalTheme:e,layerKey:l,override:r,themeColor:e.colors[Fr],overrideValues:o})});const i={};n&&Sn(n).forEach(([l,c])=>{const d=e.colors[l];if(!d)throw new Error(`Override color name '${l}' does not exist in the theme being overridden.`);Af({originalTheme:e,layerKey:"foreground",override:c,themeColor:d,overrideValues:i}),Af({originalTheme:e,layerKey:"background",override:c,themeColor:d,overrideValues:i})});const s=rt(e.init.colors,(l,c)=>{const d=n?.[l];return{...c,...d}}),a=f$({...e.init.default,...r},s);return{name:t,overrides:{...o,...i},originalTheme:e,asTheme:a}}const se=f$({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:u["vira-red-90"]},"vira-red-foreground-body":{foreground:u["vira-red-80"]},"vira-red-foreground-non-body":{foreground:u["vira-red-60"]},"vira-red-foreground-header":{foreground:u["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:u["vira-red-30"]},"vira-red-foreground-decoration":{foreground:u["vira-red-20"]},"vira-red-foreground-invisible":{foreground:u["vira-red-10"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-red-90"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-red-80"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-red-60"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-red-40"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-red-30"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-red-20"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-red-5"]},"vira-red-behind-fg-small-body":{background:u["vira-red-5"]},"vira-red-behind-fg-body":{background:u["vira-red-20"]},"vira-red-behind-fg-non-body":{background:u["vira-red-30"]},"vira-red-behind-fg-header":{background:u["vira-red-50"]},"vira-red-behind-fg-placeholder":{background:u["vira-red-60"]},"vira-red-behind-fg-decoration":{background:u["vira-red-80"]},"vira-red-behind-fg-invisible":{background:u["vira-red-90"]},"vira-red-on-self-body":{foreground:u["vira-red-90"],background:u["vira-red-10"]},"vira-red-on-self-non-body":{foreground:u["vira-red-90"],background:u["vira-red-20"]},"vira-red-on-self-header":{foreground:u["vira-red-90"],background:u["vira-red-40"]},"vira-red-on-self-placeholder":{foreground:u["vira-red-90"],background:u["vira-red-50"]},"vira-red-on-self-decoration":{foreground:u["vira-red-90"],background:u["vira-red-70"]},"vira-red-on-self-invisible":{foreground:u["vira-red-90"],background:u["vira-red-80"]},"vira-orange-foreground-small-body":{foreground:u["vira-orange-90"]},"vira-orange-foreground-body":{foreground:u["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:u["vira-orange-60"]},"vira-orange-foreground-header":{foreground:u["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:u["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:u["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:u["vira-orange-10"]},"vira-orange-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-orange-90"]},"vira-orange-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-orange-80"]},"vira-orange-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-orange-60"]},"vira-orange-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-orange-40"]},"vira-orange-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-orange-30"]},"vira-orange-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-orange-20"]},"vira-orange-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-orange-5"]},"vira-orange-behind-fg-small-body":{background:u["vira-orange-5"]},"vira-orange-behind-fg-body":{background:u["vira-orange-20"]},"vira-orange-behind-fg-non-body":{background:u["vira-orange-30"]},"vira-orange-behind-fg-header":{background:u["vira-orange-50"]},"vira-orange-behind-fg-placeholder":{background:u["vira-orange-60"]},"vira-orange-behind-fg-decoration":{background:u["vira-orange-80"]},"vira-orange-behind-fg-invisible":{background:u["vira-orange-90"]},"vira-orange-on-self-body":{foreground:u["vira-orange-90"],background:u["vira-orange-10"]},"vira-orange-on-self-non-body":{foreground:u["vira-orange-90"],background:u["vira-orange-20"]},"vira-orange-on-self-header":{foreground:u["vira-orange-90"],background:u["vira-orange-40"]},"vira-orange-on-self-placeholder":{foreground:u["vira-orange-90"],background:u["vira-orange-50"]},"vira-orange-on-self-decoration":{foreground:u["vira-orange-90"],background:u["vira-orange-70"]},"vira-orange-on-self-invisible":{foreground:u["vira-orange-90"],background:u["vira-orange-80"]},"vira-yellow-foreground-small-body":{foreground:u["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:u["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:u["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:u["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:u["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:u["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:u["vira-yellow-5"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-90"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-70"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-60"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-40"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-30"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-20"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-5"]},"vira-yellow-behind-fg-small-body":{background:u["vira-yellow-5"]},"vira-yellow-behind-fg-body":{background:u["vira-yellow-20"]},"vira-yellow-behind-fg-non-body":{background:u["vira-yellow-30"]},"vira-yellow-behind-fg-header":{background:u["vira-yellow-50"]},"vira-yellow-behind-fg-placeholder":{background:u["vira-yellow-60"]},"vira-yellow-behind-fg-decoration":{background:u["vira-yellow-80"]},"vira-yellow-behind-fg-invisible":{background:u["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:u["vira-yellow-90"],background:u["vira-yellow-10"]},"vira-yellow-on-self-non-body":{foreground:u["vira-yellow-90"],background:u["vira-yellow-20"]},"vira-yellow-on-self-header":{foreground:u["vira-yellow-90"],background:u["vira-yellow-40"]},"vira-yellow-on-self-placeholder":{foreground:u["vira-yellow-90"],background:u["vira-yellow-50"]},"vira-yellow-on-self-decoration":{foreground:u["vira-yellow-90"],background:u["vira-yellow-70"]},"vira-yellow-on-self-invisible":{foreground:u["vira-yellow-90"],background:u["vira-yellow-80"]},"vira-green-foreground-small-body":{foreground:u["vira-green-90"]},"vira-green-foreground-body":{foreground:u["vira-green-80"]},"vira-green-foreground-non-body":{foreground:u["vira-green-60"]},"vira-green-foreground-header":{foreground:u["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:u["vira-green-30"]},"vira-green-foreground-decoration":{foreground:u["vira-green-20"]},"vira-green-foreground-invisible":{foreground:u["vira-green-5"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-green-90"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-green-70"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-green-60"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-green-40"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-green-30"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-green-20"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-green-5"]},"vira-green-behind-fg-small-body":{background:u["vira-green-5"]},"vira-green-behind-fg-body":{background:u["vira-green-20"]},"vira-green-behind-fg-non-body":{background:u["vira-green-30"]},"vira-green-behind-fg-header":{background:u["vira-green-50"]},"vira-green-behind-fg-placeholder":{background:u["vira-green-60"]},"vira-green-behind-fg-decoration":{background:u["vira-green-80"]},"vira-green-behind-fg-invisible":{background:u["vira-green-90"]},"vira-green-on-self-body":{foreground:u["vira-green-90"],background:u["vira-green-10"]},"vira-green-on-self-non-body":{foreground:u["vira-green-90"],background:u["vira-green-20"]},"vira-green-on-self-header":{foreground:u["vira-green-90"],background:u["vira-green-40"]},"vira-green-on-self-placeholder":{foreground:u["vira-green-90"],background:u["vira-green-50"]},"vira-green-on-self-decoration":{foreground:u["vira-green-90"],background:u["vira-green-70"]},"vira-green-on-self-invisible":{foreground:u["vira-green-90"],background:u["vira-green-80"]},"vira-teal-foreground-small-body":{foreground:u["vira-teal-90"]},"vira-teal-foreground-body":{foreground:u["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:u["vira-teal-60"]},"vira-teal-foreground-header":{foreground:u["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:u["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:u["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:u["vira-teal-5"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-teal-90"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-teal-80"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-teal-60"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-teal-40"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-teal-30"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-teal-20"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-teal-5"]},"vira-teal-behind-fg-small-body":{background:u["vira-teal-5"]},"vira-teal-behind-fg-body":{background:u["vira-teal-20"]},"vira-teal-behind-fg-non-body":{background:u["vira-teal-30"]},"vira-teal-behind-fg-header":{background:u["vira-teal-50"]},"vira-teal-behind-fg-placeholder":{background:u["vira-teal-60"]},"vira-teal-behind-fg-decoration":{background:u["vira-teal-80"]},"vira-teal-behind-fg-invisible":{background:u["vira-teal-90"]},"vira-teal-on-self-body":{foreground:u["vira-teal-90"],background:u["vira-teal-10"]},"vira-teal-on-self-non-body":{foreground:u["vira-teal-90"],background:u["vira-teal-20"]},"vira-teal-on-self-header":{foreground:u["vira-teal-90"],background:u["vira-teal-40"]},"vira-teal-on-self-placeholder":{foreground:u["vira-teal-90"],background:u["vira-teal-50"]},"vira-teal-on-self-decoration":{foreground:u["vira-teal-90"],background:u["vira-teal-70"]},"vira-teal-on-self-invisible":{foreground:u["vira-teal-90"],background:u["vira-teal-80"]},"vira-blue-foreground-small-body":{foreground:u["vira-blue-90"]},"vira-blue-foreground-body":{foreground:u["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:u["vira-blue-70"]},"vira-blue-foreground-header":{foreground:u["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:u["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:u["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:u["vira-blue-10"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-blue-90"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-blue-80"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-blue-60"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-blue-40"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-blue-30"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-blue-20"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-blue-5"]},"vira-blue-behind-fg-small-body":{background:u["vira-blue-5"]},"vira-blue-behind-fg-body":{background:u["vira-blue-20"]},"vira-blue-behind-fg-non-body":{background:u["vira-blue-30"]},"vira-blue-behind-fg-header":{background:u["vira-blue-50"]},"vira-blue-behind-fg-placeholder":{background:u["vira-blue-60"]},"vira-blue-behind-fg-decoration":{background:u["vira-blue-80"]},"vira-blue-behind-fg-invisible":{background:u["vira-blue-90"]},"vira-blue-on-self-body":{foreground:u["vira-blue-90"],background:u["vira-blue-10"]},"vira-blue-on-self-non-body":{foreground:u["vira-blue-90"],background:u["vira-blue-20"]},"vira-blue-on-self-header":{foreground:u["vira-blue-90"],background:u["vira-blue-40"]},"vira-blue-on-self-placeholder":{foreground:u["vira-blue-90"],background:u["vira-blue-50"]},"vira-blue-on-self-decoration":{foreground:u["vira-blue-90"],background:u["vira-blue-70"]},"vira-blue-on-self-invisible":{foreground:u["vira-blue-90"],background:u["vira-blue-80"]},"vira-purple-foreground-small-body":{foreground:u["vira-purple-90"]},"vira-purple-foreground-body":{foreground:u["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:u["vira-purple-60"]},"vira-purple-foreground-header":{foreground:u["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:u["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:u["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:u["vira-purple-5"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-purple-90"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-purple-80"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-purple-60"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-purple-40"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-purple-30"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-purple-20"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-purple-5"]},"vira-purple-behind-fg-small-body":{background:u["vira-purple-5"]},"vira-purple-behind-fg-body":{background:u["vira-purple-20"]},"vira-purple-behind-fg-non-body":{background:u["vira-purple-30"]},"vira-purple-behind-fg-header":{background:u["vira-purple-50"]},"vira-purple-behind-fg-placeholder":{background:u["vira-purple-60"]},"vira-purple-behind-fg-decoration":{background:u["vira-purple-80"]},"vira-purple-behind-fg-invisible":{background:u["vira-purple-90"]},"vira-purple-on-self-body":{foreground:u["vira-purple-90"],background:u["vira-purple-10"]},"vira-purple-on-self-non-body":{foreground:u["vira-purple-90"],background:u["vira-purple-20"]},"vira-purple-on-self-header":{foreground:u["vira-purple-90"],background:u["vira-purple-40"]},"vira-purple-on-self-placeholder":{foreground:u["vira-purple-90"],background:u["vira-purple-50"]},"vira-purple-on-self-decoration":{foreground:u["vira-purple-90"],background:u["vira-purple-70"]},"vira-purple-on-self-invisible":{foreground:u["vira-purple-90"],background:u["vira-purple-80"]},"vira-pink-foreground-small-body":{foreground:u["vira-pink-90"]},"vira-pink-foreground-body":{foreground:u["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:u["vira-pink-60"]},"vira-pink-foreground-header":{foreground:u["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:u["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:u["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:u["vira-pink-10"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-pink-90"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-pink-80"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-pink-60"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-pink-40"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-pink-30"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-pink-20"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-pink-5"]},"vira-pink-behind-fg-small-body":{background:u["vira-pink-5"]},"vira-pink-behind-fg-body":{background:u["vira-pink-20"]},"vira-pink-behind-fg-non-body":{background:u["vira-pink-30"]},"vira-pink-behind-fg-header":{background:u["vira-pink-50"]},"vira-pink-behind-fg-placeholder":{background:u["vira-pink-60"]},"vira-pink-behind-fg-decoration":{background:u["vira-pink-80"]},"vira-pink-behind-fg-invisible":{background:u["vira-pink-90"]},"vira-pink-on-self-body":{foreground:u["vira-pink-90"],background:u["vira-pink-10"]},"vira-pink-on-self-non-body":{foreground:u["vira-pink-90"],background:u["vira-pink-20"]},"vira-pink-on-self-header":{foreground:u["vira-pink-90"],background:u["vira-pink-40"]},"vira-pink-on-self-placeholder":{foreground:u["vira-pink-90"],background:u["vira-pink-50"]},"vira-pink-on-self-decoration":{foreground:u["vira-pink-90"],background:u["vira-pink-70"]},"vira-pink-on-self-invisible":{foreground:u["vira-pink-90"],background:u["vira-pink-80"]},"vira-grey-foreground-small-body":{foreground:u["vira-grey-90"]},"vira-grey-foreground-body":{foreground:u["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:u["vira-grey-60"]},"vira-grey-foreground-header":{foreground:u["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:u["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:u["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:u["vira-grey-5"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-grey-90"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-grey-80"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-grey-60"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-grey-40"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-grey-30"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-grey-20"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-grey-5"]},"vira-grey-behind-fg-small-body":{background:u["vira-grey-5"]},"vira-grey-behind-fg-body":{background:u["vira-grey-20"]},"vira-grey-behind-fg-non-body":{background:u["vira-grey-30"]},"vira-grey-behind-fg-header":{background:u["vira-grey-50"]},"vira-grey-behind-fg-placeholder":{background:u["vira-grey-60"]},"vira-grey-behind-fg-decoration":{background:u["vira-grey-80"]},"vira-grey-behind-fg-invisible":{background:u["vira-grey-90"]},"vira-grey-on-self-body":{foreground:u["vira-grey-90"],background:u["vira-grey-10"]},"vira-grey-on-self-non-body":{foreground:u["vira-grey-90"],background:u["vira-grey-20"]},"vira-grey-on-self-header":{foreground:u["vira-grey-90"],background:u["vira-grey-40"]},"vira-grey-on-self-placeholder":{foreground:u["vira-grey-90"],background:u["vira-grey-50"]},"vira-grey-on-self-decoration":{foreground:u["vira-grey-90"],background:u["vira-grey-70"]},"vira-grey-on-self-invisible":{foreground:u["vira-grey-90"],background:u["vira-grey-80"]}}),PP=NP(se,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:u["vira-red-5"]},"vira-red-foreground-body":{foreground:u["vira-red-20"]},"vira-red-foreground-non-body":{foreground:u["vira-red-30"]},"vira-red-foreground-placeholder":{foreground:u["vira-red-60"]},"vira-red-foreground-decoration":{foreground:u["vira-red-80"]},"vira-red-foreground-invisible":{foreground:u["vira-red-90"]},"vira-red-behind-bg-small-body":{background:u["vira-red-5"]},"vira-red-behind-bg-body":{background:u["vira-red-20"]},"vira-red-behind-bg-non-body":{background:u["vira-red-30"]},"vira-red-behind-bg-header":{background:u["vira-red-50"]},"vira-red-behind-bg-placeholder":{background:u["vira-red-60"]},"vira-red-behind-bg-decoration":{background:u["vira-red-80"]},"vira-red-behind-bg-invisible":{background:u["vira-red-90"]},"vira-red-behind-fg-small-body":{background:u["vira-red-90"]},"vira-red-behind-fg-body":{background:u["vira-red-80"]},"vira-red-behind-fg-non-body":{background:u["vira-red-60"]},"vira-red-behind-fg-header":{background:u["vira-red-40"]},"vira-red-behind-fg-placeholder":{background:u["vira-red-30"]},"vira-red-behind-fg-decoration":{background:u["vira-red-20"]},"vira-red-behind-fg-invisible":{background:u["vira-red-5"]},"vira-red-on-self-body":{foreground:u["vira-red-5"],background:u["vira-red-90"]},"vira-red-on-self-non-body":{foreground:u["vira-red-5"],background:u["vira-red-70"]},"vira-red-on-self-header":{foreground:u["vira-red-5"],background:u["vira-red-60"]},"vira-red-on-self-placeholder":{foreground:u["vira-red-5"],background:u["vira-red-40"]},"vira-red-on-self-decoration":{foreground:u["vira-red-5"],background:u["vira-red-30"]},"vira-red-on-self-invisible":{foreground:u["vira-red-5"],background:u["vira-red-10"]},"vira-orange-foreground-small-body":{foreground:u["vira-orange-5"]},"vira-orange-foreground-body":{foreground:u["vira-orange-20"]},"vira-orange-foreground-non-body":{foreground:u["vira-orange-30"]},"vira-orange-foreground-placeholder":{foreground:u["vira-orange-60"]},"vira-orange-foreground-decoration":{foreground:u["vira-orange-80"]},"vira-orange-foreground-invisible":{foreground:u["vira-orange-90"]},"vira-orange-behind-bg-small-body":{background:u["vira-orange-5"]},"vira-orange-behind-bg-body":{background:u["vira-orange-20"]},"vira-orange-behind-bg-non-body":{background:u["vira-orange-30"]},"vira-orange-behind-bg-header":{background:u["vira-orange-50"]},"vira-orange-behind-bg-placeholder":{background:u["vira-orange-60"]},"vira-orange-behind-bg-decoration":{background:u["vira-orange-80"]},"vira-orange-behind-bg-invisible":{background:u["vira-orange-90"]},"vira-orange-behind-fg-small-body":{background:u["vira-orange-90"]},"vira-orange-behind-fg-body":{background:u["vira-orange-80"]},"vira-orange-behind-fg-non-body":{background:u["vira-orange-60"]},"vira-orange-behind-fg-header":{background:u["vira-orange-40"]},"vira-orange-behind-fg-placeholder":{background:u["vira-orange-30"]},"vira-orange-behind-fg-decoration":{background:u["vira-orange-20"]},"vira-orange-behind-fg-invisible":{background:u["vira-orange-5"]},"vira-orange-on-self-body":{foreground:u["vira-orange-5"],background:u["vira-orange-90"]},"vira-orange-on-self-non-body":{foreground:u["vira-orange-5"],background:u["vira-orange-70"]},"vira-orange-on-self-header":{foreground:u["vira-orange-5"],background:u["vira-orange-60"]},"vira-orange-on-self-placeholder":{foreground:u["vira-orange-5"],background:u["vira-orange-40"]},"vira-orange-on-self-decoration":{foreground:u["vira-orange-5"],background:u["vira-orange-30"]},"vira-orange-on-self-invisible":{foreground:u["vira-orange-5"],background:u["vira-orange-10"]},"vira-yellow-foreground-small-body":{foreground:u["vira-yellow-5"]},"vira-yellow-foreground-body":{foreground:u["vira-yellow-20"]},"vira-yellow-foreground-non-body":{foreground:u["vira-yellow-30"]},"vira-yellow-foreground-placeholder":{foreground:u["vira-yellow-60"]},"vira-yellow-foreground-decoration":{foreground:u["vira-yellow-80"]},"vira-yellow-foreground-invisible":{foreground:u["vira-yellow-90"]},"vira-yellow-behind-bg-small-body":{background:u["vira-yellow-5"]},"vira-yellow-behind-bg-body":{background:u["vira-yellow-20"]},"vira-yellow-behind-bg-non-body":{background:u["vira-yellow-30"]},"vira-yellow-behind-bg-header":{background:u["vira-yellow-50"]},"vira-yellow-behind-bg-placeholder":{background:u["vira-yellow-60"]},"vira-yellow-behind-bg-decoration":{background:u["vira-yellow-80"]},"vira-yellow-behind-bg-invisible":{background:u["vira-yellow-90"]},"vira-yellow-behind-fg-small-body":{background:u["vira-yellow-90"]},"vira-yellow-behind-fg-body":{background:u["vira-yellow-70"]},"vira-yellow-behind-fg-non-body":{background:u["vira-yellow-60"]},"vira-yellow-behind-fg-header":{background:u["vira-yellow-40"]},"vira-yellow-behind-fg-placeholder":{background:u["vira-yellow-30"]},"vira-yellow-behind-fg-decoration":{background:u["vira-yellow-20"]},"vira-yellow-behind-fg-invisible":{background:u["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:u["vira-yellow-5"],background:u["vira-yellow-90"]},"vira-yellow-on-self-non-body":{foreground:u["vira-yellow-5"],background:u["vira-yellow-70"]},"vira-yellow-on-self-header":{foreground:u["vira-yellow-5"],background:u["vira-yellow-60"]},"vira-yellow-on-self-placeholder":{foreground:u["vira-yellow-5"],background:u["vira-yellow-40"]},"vira-yellow-on-self-decoration":{foreground:u["vira-yellow-5"],background:u["vira-yellow-30"]},"vira-yellow-on-self-invisible":{foreground:u["vira-yellow-5"],background:u["vira-yellow-10"]},"vira-green-foreground-small-body":{foreground:u["vira-green-5"]},"vira-green-foreground-body":{foreground:u["vira-green-20"]},"vira-green-foreground-non-body":{foreground:u["vira-green-30"]},"vira-green-foreground-placeholder":{foreground:u["vira-green-60"]},"vira-green-foreground-decoration":{foreground:u["vira-green-80"]},"vira-green-foreground-invisible":{foreground:u["vira-green-90"]},"vira-green-behind-bg-small-body":{background:u["vira-green-5"]},"vira-green-behind-bg-body":{background:u["vira-green-20"]},"vira-green-behind-bg-non-body":{background:u["vira-green-30"]},"vira-green-behind-bg-header":{background:u["vira-green-50"]},"vira-green-behind-bg-placeholder":{background:u["vira-green-60"]},"vira-green-behind-bg-decoration":{background:u["vira-green-80"]},"vira-green-behind-bg-invisible":{background:u["vira-green-90"]},"vira-green-behind-fg-small-body":{background:u["vira-green-90"]},"vira-green-behind-fg-body":{background:u["vira-green-70"]},"vira-green-behind-fg-non-body":{background:u["vira-green-60"]},"vira-green-behind-fg-header":{background:u["vira-green-40"]},"vira-green-behind-fg-placeholder":{background:u["vira-green-30"]},"vira-green-behind-fg-decoration":{background:u["vira-green-20"]},"vira-green-behind-fg-invisible":{background:u["vira-green-5"]},"vira-green-on-self-body":{foreground:u["vira-green-5"],background:u["vira-green-90"]},"vira-green-on-self-non-body":{foreground:u["vira-green-5"],background:u["vira-green-70"]},"vira-green-on-self-header":{foreground:u["vira-green-5"],background:u["vira-green-60"]},"vira-green-on-self-placeholder":{foreground:u["vira-green-5"],background:u["vira-green-40"]},"vira-green-on-self-decoration":{foreground:u["vira-green-5"],background:u["vira-green-30"]},"vira-green-on-self-invisible":{foreground:u["vira-green-5"],background:u["vira-green-10"]},"vira-teal-foreground-small-body":{foreground:u["vira-teal-5"]},"vira-teal-foreground-body":{foreground:u["vira-teal-20"]},"vira-teal-foreground-non-body":{foreground:u["vira-teal-30"]},"vira-teal-foreground-placeholder":{foreground:u["vira-teal-60"]},"vira-teal-foreground-decoration":{foreground:u["vira-teal-80"]},"vira-teal-foreground-invisible":{foreground:u["vira-teal-90"]},"vira-teal-behind-bg-small-body":{background:u["vira-teal-5"]},"vira-teal-behind-bg-body":{background:u["vira-teal-20"]},"vira-teal-behind-bg-non-body":{background:u["vira-teal-30"]},"vira-teal-behind-bg-header":{background:u["vira-teal-50"]},"vira-teal-behind-bg-placeholder":{background:u["vira-teal-60"]},"vira-teal-behind-bg-decoration":{background:u["vira-teal-80"]},"vira-teal-behind-bg-invisible":{background:u["vira-teal-90"]},"vira-teal-behind-fg-small-body":{background:u["vira-teal-90"]},"vira-teal-behind-fg-body":{background:u["vira-teal-80"]},"vira-teal-behind-fg-non-body":{background:u["vira-teal-60"]},"vira-teal-behind-fg-header":{background:u["vira-teal-40"]},"vira-teal-behind-fg-placeholder":{background:u["vira-teal-30"]},"vira-teal-behind-fg-decoration":{background:u["vira-teal-20"]},"vira-teal-behind-fg-invisible":{background:u["vira-teal-5"]},"vira-teal-on-self-body":{foreground:u["vira-teal-5"],background:u["vira-teal-90"]},"vira-teal-on-self-non-body":{foreground:u["vira-teal-5"],background:u["vira-teal-70"]},"vira-teal-on-self-header":{foreground:u["vira-teal-5"],background:u["vira-teal-60"]},"vira-teal-on-self-placeholder":{foreground:u["vira-teal-5"],background:u["vira-teal-40"]},"vira-teal-on-self-decoration":{foreground:u["vira-teal-5"],background:u["vira-teal-30"]},"vira-teal-on-self-invisible":{foreground:u["vira-teal-5"],background:u["vira-teal-10"]},"vira-blue-foreground-small-body":{foreground:u["vira-blue-5"]},"vira-blue-foreground-body":{foreground:u["vira-blue-20"]},"vira-blue-foreground-non-body":{foreground:u["vira-blue-30"]},"vira-blue-foreground-placeholder":{foreground:u["vira-blue-60"]},"vira-blue-foreground-decoration":{foreground:u["vira-blue-80"]},"vira-blue-foreground-invisible":{foreground:u["vira-blue-90"]},"vira-blue-behind-bg-small-body":{background:u["vira-blue-5"]},"vira-blue-behind-bg-body":{background:u["vira-blue-20"]},"vira-blue-behind-bg-non-body":{background:u["vira-blue-30"]},"vira-blue-behind-bg-header":{background:u["vira-blue-50"]},"vira-blue-behind-bg-placeholder":{background:u["vira-blue-60"]},"vira-blue-behind-bg-decoration":{background:u["vira-blue-80"]},"vira-blue-behind-bg-invisible":{background:u["vira-blue-90"]},"vira-blue-behind-fg-small-body":{background:u["vira-blue-90"]},"vira-blue-behind-fg-body":{background:u["vira-blue-80"]},"vira-blue-behind-fg-non-body":{background:u["vira-blue-60"]},"vira-blue-behind-fg-header":{background:u["vira-blue-40"]},"vira-blue-behind-fg-placeholder":{background:u["vira-blue-30"]},"vira-blue-behind-fg-decoration":{background:u["vira-blue-20"]},"vira-blue-behind-fg-invisible":{background:u["vira-blue-5"]},"vira-blue-on-self-body":{foreground:u["vira-blue-5"],background:u["vira-blue-90"]},"vira-blue-on-self-non-body":{foreground:u["vira-blue-5"],background:u["vira-blue-70"]},"vira-blue-on-self-header":{foreground:u["vira-blue-5"],background:u["vira-blue-60"]},"vira-blue-on-self-placeholder":{foreground:u["vira-blue-5"],background:u["vira-blue-40"]},"vira-blue-on-self-decoration":{foreground:u["vira-blue-5"],background:u["vira-blue-30"]},"vira-blue-on-self-invisible":{foreground:u["vira-blue-5"],background:u["vira-blue-10"]},"vira-purple-foreground-small-body":{foreground:u["vira-purple-5"]},"vira-purple-foreground-body":{foreground:u["vira-purple-20"]},"vira-purple-foreground-non-body":{foreground:u["vira-purple-30"]},"vira-purple-foreground-placeholder":{foreground:u["vira-purple-60"]},"vira-purple-foreground-decoration":{foreground:u["vira-purple-80"]},"vira-purple-foreground-invisible":{foreground:u["vira-purple-90"]},"vira-purple-behind-bg-small-body":{background:u["vira-purple-5"]},"vira-purple-behind-bg-body":{background:u["vira-purple-20"]},"vira-purple-behind-bg-non-body":{background:u["vira-purple-30"]},"vira-purple-behind-bg-header":{background:u["vira-purple-50"]},"vira-purple-behind-bg-placeholder":{background:u["vira-purple-60"]},"vira-purple-behind-bg-decoration":{background:u["vira-purple-80"]},"vira-purple-behind-bg-invisible":{background:u["vira-purple-90"]},"vira-purple-behind-fg-small-body":{background:u["vira-purple-90"]},"vira-purple-behind-fg-body":{background:u["vira-purple-80"]},"vira-purple-behind-fg-non-body":{background:u["vira-purple-60"]},"vira-purple-behind-fg-header":{background:u["vira-purple-40"]},"vira-purple-behind-fg-placeholder":{background:u["vira-purple-30"]},"vira-purple-behind-fg-decoration":{background:u["vira-purple-20"]},"vira-purple-behind-fg-invisible":{background:u["vira-purple-5"]},"vira-purple-on-self-body":{foreground:u["vira-purple-5"],background:u["vira-purple-90"]},"vira-purple-on-self-non-body":{foreground:u["vira-purple-5"],background:u["vira-purple-70"]},"vira-purple-on-self-header":{foreground:u["vira-purple-5"],background:u["vira-purple-60"]},"vira-purple-on-self-placeholder":{foreground:u["vira-purple-5"],background:u["vira-purple-40"]},"vira-purple-on-self-decoration":{foreground:u["vira-purple-5"],background:u["vira-purple-30"]},"vira-purple-on-self-invisible":{foreground:u["vira-purple-5"],background:u["vira-purple-10"]},"vira-pink-foreground-small-body":{foreground:u["vira-pink-5"]},"vira-pink-foreground-body":{foreground:u["vira-pink-20"]},"vira-pink-foreground-non-body":{foreground:u["vira-pink-30"]},"vira-pink-foreground-placeholder":{foreground:u["vira-pink-60"]},"vira-pink-foreground-decoration":{foreground:u["vira-pink-80"]},"vira-pink-foreground-invisible":{foreground:u["vira-pink-90"]},"vira-pink-behind-bg-small-body":{background:u["vira-pink-5"]},"vira-pink-behind-bg-body":{background:u["vira-pink-20"]},"vira-pink-behind-bg-non-body":{background:u["vira-pink-30"]},"vira-pink-behind-bg-header":{background:u["vira-pink-50"]},"vira-pink-behind-bg-placeholder":{background:u["vira-pink-60"]},"vira-pink-behind-bg-decoration":{background:u["vira-pink-80"]},"vira-pink-behind-bg-invisible":{background:u["vira-pink-90"]},"vira-pink-behind-fg-small-body":{background:u["vira-pink-90"]},"vira-pink-behind-fg-body":{background:u["vira-pink-80"]},"vira-pink-behind-fg-non-body":{background:u["vira-pink-60"]},"vira-pink-behind-fg-header":{background:u["vira-pink-40"]},"vira-pink-behind-fg-placeholder":{background:u["vira-pink-30"]},"vira-pink-behind-fg-decoration":{background:u["vira-pink-20"]},"vira-pink-behind-fg-invisible":{background:u["vira-pink-5"]},"vira-pink-on-self-body":{foreground:u["vira-pink-5"],background:u["vira-pink-90"]},"vira-pink-on-self-non-body":{foreground:u["vira-pink-5"],background:u["vira-pink-70"]},"vira-pink-on-self-header":{foreground:u["vira-pink-5"],background:u["vira-pink-60"]},"vira-pink-on-self-placeholder":{foreground:u["vira-pink-5"],background:u["vira-pink-40"]},"vira-pink-on-self-decoration":{foreground:u["vira-pink-5"],background:u["vira-pink-30"]},"vira-pink-on-self-invisible":{foreground:u["vira-pink-5"],background:u["vira-pink-10"]},"vira-grey-foreground-small-body":{foreground:u["vira-grey-5"]},"vira-grey-foreground-body":{foreground:u["vira-grey-20"]},"vira-grey-foreground-non-body":{foreground:u["vira-grey-30"]},"vira-grey-foreground-placeholder":{foreground:u["vira-grey-60"]},"vira-grey-foreground-decoration":{foreground:u["vira-grey-80"]},"vira-grey-foreground-invisible":{foreground:u["vira-grey-90"]},"vira-grey-behind-bg-small-body":{background:u["vira-grey-5"]},"vira-grey-behind-bg-body":{background:u["vira-grey-20"]},"vira-grey-behind-bg-non-body":{background:u["vira-grey-30"]},"vira-grey-behind-bg-header":{background:u["vira-grey-50"]},"vira-grey-behind-bg-placeholder":{background:u["vira-grey-60"]},"vira-grey-behind-bg-decoration":{background:u["vira-grey-80"]},"vira-grey-behind-bg-invisible":{background:u["vira-grey-90"]},"vira-grey-behind-fg-small-body":{background:u["vira-grey-90"]},"vira-grey-behind-fg-body":{background:u["vira-grey-80"]},"vira-grey-behind-fg-non-body":{background:u["vira-grey-60"]},"vira-grey-behind-fg-header":{background:u["vira-grey-40"]},"vira-grey-behind-fg-placeholder":{background:u["vira-grey-30"]},"vira-grey-behind-fg-decoration":{background:u["vira-grey-20"]},"vira-grey-behind-fg-invisible":{background:u["vira-grey-5"]},"vira-grey-on-self-body":{foreground:u["vira-grey-5"],background:u["vira-grey-90"]},"vira-grey-on-self-non-body":{foreground:u["vira-grey-5"],background:u["vira-grey-70"]},"vira-grey-on-self-header":{foreground:u["vira-grey-5"],background:u["vira-grey-60"]},"vira-grey-on-self-placeholder":{foreground:u["vira-grey-5"],background:u["vira-grey-40"]},"vira-grey-on-self-decoration":{foreground:u["vira-grey-5"],background:u["vira-grey-30"]},"vira-grey-on-self-invisible":{foreground:u["vira-grey-5"],background:u["vira-grey-10"]}}}),C1="8px",T=Xn({"vira-form-border-color":se.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":se.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":se.colors[Fr].background.value,"vira-form-foreground-color":se.colors[Fr].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":se.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":se.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":se.colors["vira-blue-behind-bg-invisible"].background.value,"vira-form-selection-active-color":se.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-error-color":se.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":se.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":se.colors["vira-red-behind-bg-body"].background.value,"vira-form-success-color":se.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":C1,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":se.colors["vira-blue-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":D`calc(var(--vira-form-radius, ${he(C1)}) + 2px)`,"vira-form-plain-color":u["vira-grey-0"].value,"vira-form-plain-hover-color":se.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":se.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":se.colors["vira-blue-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":se.colors["vira-blue-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":se.colors["vira-blue-behind-bg-body"].background.value,"vira-form-danger-color":se.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":se.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":se.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":se.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":se.colors["vira-grey-foreground-decoration"].foreground.value});function Ql({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const o=he(fl(r+t+e)),i=D`
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
    `;return n?i:D`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${i}
        }
    `}const I=Qe()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>D`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),ue=Qe()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>D`
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

            ${Ql({elementBorderSize:1})}

            &.checked {
                & ${I} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${T["vira-form-error-color"].value};
            }

            &.disabled {
                ${Hi};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:Xe()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const o=e.label?g`
                  <span
                      class="label-text"
                      ${wo(e.attributePassthrough?.text)}
                      style=${pt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:ee;return g`
            <label
                class=${tr({disabled:!!e.disabled})}
                ${wo(e.attributePassthrough?.label)}
                style=${pt(e.stylePassthrough?.label)}
                ${j("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${tr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${pt(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${wo(e.attributePassthrough?.["custom-checkbox"])}
                    style=${pt(e.stylePassthrough?.["custom-checkbox"])}
                    ${gN(n)}
                >
                    <${I.assign({icon:fg,fitContainer:!0})}
                        ${wo(e.attributePassthrough?.[I.tagName])}
                        style=${pt(e.stylePassthrough?.[I.tagName])}
                    ></${I}>
                </span>
            </label>
        `}}),mg=Xn({"vira-monospace":"monospace"});function F1(e){if(typeof e=="string")return IP(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function IP(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let l={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(d){for(let f=0;f<3;f++)n[f]=parseInt(d[f+1],16);return n[3]=1,!0}},c=l.rex.exec(s[a]);return n[4]=t=l.sprig(c),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,l=0,c=10,d=100,f=2.55,h="1";s[23]&&(h=s[23],delete s[23]),n[3]=h.match(/%/g)?parseFloat(h)/d:parseFloat(h);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,l=m);switch(l){case 4:c=16,d=15,n[3]=parseInt(s[l],c)/d;case 3:c=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],c);break;case 5:c=16;case 9:n[0]=n[1]=n[2]=c==10?parseFloat(s[l]):parseInt(s[l],c);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[l])*f;break;case 8:c=16,d=255,n[3]=parseInt(s[8],c)/d;case 7:c=16;case 11:for(let m=0;m<3;m++)n[m]=c==10?parseFloat(s[a+m]):parseInt(s[a+m],c);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*f;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/d:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let N=function(R){let q=(R+E/30)%12,ie=m*Math.min(y,1-y);return y-ie*Math.max(-1,Math.min(q-3,9-q,1))},m,y,$,k,x,E=n[0]%360;if(E<0&&(E+=360),n[5].match(/^hsla?/i))m=n[1],y=n[2],$=0,x=1;else if(n[5].match(/^hwba?/i)){if($=n[1],k=n[2],$+k>=1){n[0]=n[1]=n[2]=$/($+k),n[5]="sRGB";break}m=1,y=.5,x=1-$-k}n[0]=Math.round(255*(N(0)*x+$)),n[1]=Math.round(255*(N(8)*x+$)),n[2]=Math.round(255*(N(4)*x+$)),n[5]="sRGB"}break}return!0}},i=o.rex.exec(e);return i?(n[4]=t=o.parsley(i),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const vt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function OP(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let o=0,i=0,s="BoW";return e=e>vt.blkThrs?e:e+Math.pow(vt.blkThrs-e,vt.blkClmp),t=t>vt.blkThrs?t:t+Math.pow(vt.blkThrs-t,vt.blkClmp),Math.abs(t-e)<vt.deltaYmin?0:(t>e?(o=(Math.pow(t,vt.normBG)-Math.pow(e,vt.normTXT))*vt.scaleBoW,i=o<vt.loClip?0:o-vt.loBoWoffset):(s="WoB",o=(Math.pow(t,vt.revBG)-Math.pow(e,vt.revTXT))*vt.scaleWoB,i=o>-.1?0:o+vt.loWoBoffset),r<0?i*100:r==0?Math.round(Math.abs(i)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(i*100).toFixed(r):0)}function BP(e,t,r=-1,n=!0){let o=F1(t),i=F1(e);return!(i[3]==""||i[3]==1)&&(i=LP(i,o,n)),OP(M1(i),M1(o),r)}function RP(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],i=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const l=.2,c=e==0?1:e*l|0;let d=0,f=(e-r[c][d])*l;for(d++;d<i;d++)a=r[c][d],a>400?s[d]=a:e<14.5?s[d]=999:e<29.5?s[d]=777:a>24?s[d]=Math.round(a-n[c][d]*f):s[d]=a-(2*n[c][d]*f|0)*.5;return s}function M1(e=[0,0,0]){function t(r){return Math.pow(r/255,vt.mainTRC)}return vt.sRco*t(e[0])+vt.sGco*t(e[1])+vt.sBco*t(e[2])}function LP(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let i=0;i<3;i++)o[i]=t[i]*n+e[i]*e[3],r&&(o[i]=Math.min(Math.round(o[i]),255));return o}const h$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};rt(h$,e=>e);Object.fromEntries(Object.entries(h$).map(([e,t])=>[t,e]));const S1=new Map;function jP({background:e,foreground:t}){const r=`${t}|${e}`,n=S1.get(r);if(n)return n;const o=w2(Number(BP(t,e)),{digits:1}),i={contrast:o,fontSizes:_P(o),contrastLevel:UP(o)};return S1.set(r,i),i}function _P(e){const t=RP(e).slice(1);return Xo(t,(n,o)=>({key:(o+1)*100,value:n}))}function UP(e){return Ut.isDefined($d.find(t=>t.min<=Math.abs(e)))}var ae;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(ae||(ae={}));const zP={[ae.SmallBodyText]:"Small Text",[ae.BodyText]:"Body Text",[ae.NonBodyText]:"Non-body Text",[ae.Header]:"Header",[ae.Placeholder]:"Placeholder",[ae.Decoration]:"Decoration",[ae.Invisible]:"Invisible"};ae.SmallBodyText,ae.BodyText,ae.NonBodyText,ae.Header,ae.Placeholder,ae.Decoration,ae.Invisible;const $d=[{min:90,name:ae.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:ae.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:ae.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:ae.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:ae.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:ae.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:ae.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Xo($d,e=>({key:e.min,value:e}));Xo($d,e=>({key:e.name,value:e}));const VP=br(ae).sort((e,t)=>Number(t.includes("-"))-Number(e.includes("-"))),qP=Sc(Rn(Object.keys(se.colors),e=>e.split("-")[1],e=>e!=="default")).filter(C.isTruthy),ks=Xo(qP,e=>({key:e,value:e}),{}),WP=je(se.colors),ar=g2(ks,e=>{const t=Sc(Rn(WP,r=>VP.reduce((n,o)=>jh({value:n,suffix:`-${o}`}),Ii({value:r,prefix:`vira-${e}-`})),(r,n)=>n.startsWith(`vira-${e}-`)));return Xo(t,r=>({key:r,value:Xo(br(ae),n=>{const o=`vira-${e}-${r}-${n}`;if(C.hasKey(se.colors,o))return{key:n,value:se.colors[o]}})}))});var cn=(e=>(e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none",e))(cn||{});const T1={accent:ks.blue,neutral:ks.grey,danger:ks.red,warning:ks.orange,positive:ks.green},N1=["accent","plain","neutral","danger","warning","positive"];var Di=(e=>(e.Large="large",e.Medium="medium",e.Small="small",e.None="none",e))(Di||{});const KP=["small","medium","large"];var zo=(e=>(e.Standard="standard",e.Subtle="subtle",e.None="none",e))(zo||{});const GP=["standard","subtle"],Ef={large:40,medium:32,small:24},eu=D`
    padding: 0;
    margin: 0;
`,Sr=D`
    ${eu};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Cf=Xn({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Bi={menuShadow:D`
        filter: drop-shadow(0px 5px 5px ${Cf["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:D`
        filter: drop-shadow(0px -5px 5px ${Cf["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:D`
        box-shadow: 0 5px 15px ${Cf["modal-shadow-color"].value};
    `},ni=D`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`;function ih({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>ih({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function HP({value:e,allowed:t,blocked:r}){const n=String(e),o=t?ih({input:n,matcher:t}):!0,i=r?ih({input:n,matcher:r}):!1;return o&&!i}function sh(e){const t=String(e.value);if(!e.value)return{filtered:t,blocked:""};const{filtered:r,blocked:n}=t.split("").reduce((o,i)=>(HP({...e,value:i})?o.filtered.push(i):o.blocked.push(i),o),{filtered:[],blocked:[]});return{filtered:r.join(""),blocked:n.join("")}}function ZP({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){const i=yd(r,HTMLInputElement),s=C.hasKey(r,"data")&&Rh.isString(r.data)||"";if(s){const{blocked:l}=sh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l.length&&n(l)}const a=sh({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&o(a)}var Ti=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(Ti||{});const Ee=Qe()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>D`
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
                ${Sr};
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
                ${ni};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Sr};
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
                ${Sr};
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
                ${Sr};
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
                    ${Ql({elementBorderSize:0,noNesting:!0})}
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
                ${ni};
            }

            button {
                ${Sr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${xo["vira-interaction-animation-duration"].value};
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
                    ${Hi};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:Xe(),inputBlocked:Xe()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Pi(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:o,host:i})=>{const{filtered:s}=sh({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?g`
                  <${I.assign({icon:e.icon})} class="left-side-icon"></${I}>
              `:ee,l=e.fitText?D`
                  width: ${r.forcedInputWidth}px;
              `:ee,c=j("mousedown",h=>{const m=yd(h,HTMLElement,{useOriginalTarget:!0}),y=Ut.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement);m!==y&&(h.preventDefault(),y.focus())}),d=e.disableBrowserHelps||e.type==="password",f=g`
            <span class="input-wrapper" ${e.label?ee:c}>
                ${a}
                ${Pr(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${W5(({contentRect:h})=>{n({forcedInputWidth:h.width})})}
                        >
                            <pre>${s||e.placeholder||ee}</pre>
                        </span>
                    `)}

                <input
                    id=${pt(e.label?r.randomId:void 0)}
                    aria-label=${pt(e.label||void 0)}
                    autofocus=${!1}
                    type=${JP(e.type,r.showPassword)}
                    style=${l}
                    autocomplete=${pt(d?"off":void 0)}
                    autocorrect=${pt(d?"off":void 0)}
                    autocapitalize=${pt(d?"off":void 0)}
                    spellcheck=${pt(d?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${j("input",h=>{ZP({inputs:e,previousValue:s,event:h,inputBlockedCallback(m){t(new o.inputBlocked(m))},newValueCallback(m){t(new o.valueChange(m))}})})}
                    placeholder=${pt(e.placeholder||void 0)}
                    ${wo(e.attributePassthrough)}
                />

                ${Pr(!!(e.showClearButton&&e.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${j("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${j("click",()=>{e.disabled||t(new o.valueChange(""))})}
                        >
                            <${I.assign({icon:s$})}></${I}>
                        </button>
                    `)}
                ${Pr(e.type==="password",g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${j("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${j("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${I.assign({icon:r.showPassword?u$:l$})}></${I}>
                        </button>
                    `)}
                ${Pr(!!e.suffix,g`
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
            `:f}});function JP(e,t){return e==="password"&&t?"text":e||"text"}const _e=Qe()({tagName:"vira-select",state(){return{randomId:Pi(32)}},events:{valueChange:Xe()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError,"vira-select-not-raw":({inputs:e})=>!e.rawSelect},styles:({hostClasses:e,cssVars:t})=>D`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${T["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Sr};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
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
                cursor: pointer;
                /* Prevent the left pixel of text getting cut off. */
                padding-left: 0.5px;
                padding-right: 26px;
                overflow: hidden;
                text-overflow: ellipsis;

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
        }

        ${e["vira-select-not-raw"].selector} {
            .select-wrapper {
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
                    padding: ${t["vira-select-padding-vertical"].value} 31px
                        ${t["vira-select-padding-vertical"].value}
                        ${t["vira-select-padding-horizontal"].value};

                    &:focus:focus-visible:not([aria-disabled='true']) ~ .focus-border {
                        ${Ql({elementBorderSize:0,noNesting:!0})}
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
                        ${xo["vira-interaction-animation-duration"].value};
                }
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
                ${Hi}
            }
            ${I} {
                ${Hi}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${T["vira-form-error-color"].value};
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const o=e.value||void 0,i=e.placeholder||o==null?g`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:ee,s=g`
            <span class="select-wrapper">
                <select
                    .value=${pt(o)}
                    class=${tr({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${pt(e.label?t.randomId:void 0)}
                    aria-label=${pt(e.label||void 0)}
                    aria-disabled=${pt(e.disabled?"true":void 0)}
                    ${j("input",a=>{const l=yd(a,HTMLSelectElement),c=l.value;l.value!==o&&(l.selectedIndex=e.options.findIndex(d=>d.value===o)),r(new n.valueChange(c))})}
                    ${wo(e.attributePassthrough?.select)}
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
                <${I.assign({icon:hg})} class="trigger-icon"></${I}>
            </span>
        `;return e.label?g`
                <label for=${t.randomId} ${wo(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),Dr=Qe()({tagName:"vira-form",events:{valueChange:Xe(),validChange:Xe()},styles:D`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=QN(e.fields);i!==n.lastIsValid&&(o({lastIsValid:i}),t(new r.validChange({allFieldsAreValid:i})));const s=Sn(e.fields).map(([a,l])=>l.isHidden?ee:l.type===Ae.Checkbox?g`
                        <${ue.assign({value:l.value||!1,disabled:e.isDisabled||l.isDisabled,hasError:l.hasError,label:Eu(l.label,!!l.isRequired&&!e.hideRequiredMarkers)})}
                            ${l.testId?Hn(l.testId):ee}
                            ${j(ue.events.valueChange,c=>{t(new r.valueChange({key:a,...l,value:c.detail}))})}
                        ></${ue}>
                    `:l.type===Ae.Select?g`
                        <${_e.assign({options:l.options,value:l.value,placeholder:l.placeholder,disabled:e.isDisabled||l.isDisabled,label:Eu(l.label,!!l.isRequired&&!e.hideRequiredMarkers),hasError:l.hasError,icon:l.icon})}
                            ${l.testId?Hn(l.testId):ee}
                            ${j(_e.events.valueChange,c=>{t(new r.valueChange({key:a,...l,value:c.detail}))})}
                        ></${_e}>
                    `:l.type===Ae.Number?g`
                        <${Ee.assign({value:l.value?.toString()||"",disabled:e.isDisabled||l.isDisabled,allowedInputs:/\d/,hasError:l.hasError,icon:l.icon,label:Eu(l.label,!!l.isRequired&&!e.hideRequiredMarkers),placeholder:l.placeholder,showClearButton:e.showClearButtons,type:Ti.Number,attributePassthrough:{...l.min===void 0?{}:{min:String(l.min)},...l.max===void 0?{}:{max:String(l.max)},...l.step===void 0?{}:{step:String(l.step)}}})}
                            ${l.testId?Hn(l.testId):ee}
                            ${j(Ee.events.valueChange,c=>{const d=c.detail===""?void 0:Number(c.detail);t(new r.valueChange({key:a,...l,value:d}))})}
                        ></${Ee}>
                    `:g`
                        <${Ee.assign({value:l.value||"",disabled:e.isDisabled||l.isDisabled,hasError:l.hasError,icon:l.icon,label:Eu(l.label,!!l.isRequired&&!e.hideRequiredMarkers),placeholder:l.placeholder,showClearButton:e.showClearButtons,attributePassthrough:l.isUsername?{autocomplete:"username"}:l.type===Ae.NewPassword?{autocomplete:"new-password"}:l.type===Ae.ExistingPassword?{autocomplete:"password"}:l.type===Ae.Email?{autocomplete:"email"}:{},type:[Ae.NewPassword,Ae.ExistingPassword,Ae.PlainPassword].includes(l.type)?Ti.Password:l.type===Ae.Email?Ti.Email:Ti.Default})}
                            ${l.testId?Hn(l.testId):ee}
                            ${j(Ee.events.valueChange,c=>{t(new r.valueChange({key:a,...l,value:c.detail}))})}
                        ></${Ee}>
                    `);return g`
            <form ${j("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function YP(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${k2(r)}`)}function XP(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function P1({open:e,callback:t,popUpManager:r,host:n,options:o}){if(e){const i=r.showPopUp(n,o);t?.(i)}else r.removePopUp(),t?.(void 0)}const Ur=Qe()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>D`
        :host {
            display: flex;
            ${ni};
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
                <${I.assign({icon:fg})}></${I}>
                <slot>${e.label}</slot>
            </div>
        `}});function QP(e,t){return e>t}function eI(e,t){return e<t}function Fl(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var Jn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Jn||(Jn={}));var Te;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Te||(Te={}));function kd(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const o=n[t.x];if(o)if(o.navEntry.navParams.group){const i=kd(o.children);i&&(r=i.node)}else o.navEntry.navParams.disabled||(r=o)}}if(r)return{node:r,coords:t}}function I1(e,t,r,n){if(!t){const l=kd(e.children);return l?(Fl(l.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.node.element,coords:l.coords,direction:r,navAction:Te.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Te.Navigate}}const{nextNode:o,requiresWrapping:i,coords:s}=m$(t.position,r),a=n?!0:!i;return o&&a?(Fl(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:i,direction:r,navAction:Te.Navigate,coords:s}):o?a?{success:!1,reason:"no conditions matched",direction:r,navAction:Te.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Te.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Te.Navigate}}function m$(e,t){let r=!1,n,o=1;const i=Date.now();for(;!r||!n;)if(n=tI(e,t,o),r=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-i>1e3)return v2.warning("Failed to find next non-disabled node."),n;return n}function tI(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Dt.isDefined(n,"missing parent");const o=Ut.isDefined(n.children[e.nodeCoords.y]),i=n.children.length>1&&(t===Jn.Down||t===Jn.Up),s=t===Jn.Down||t===Jn.Right?r:-1*r,a=s<0?QP:eI,l=i?Ip(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,c=Ut.isDefined(n.children[l]),d=i?e.nodeCoords.x>=c.length?c.length-1:e.nodeCoords.x:Ip(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),f=n.children[l]?.[d],h=i?a(l,e.nodeCoords.y):a(d,e.nodeCoords.x);return{nextNode:f,requiresWrapping:h,coords:{x:d,y:l}}}function rI(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Te.Pibling};const{nextNode:o,requiresWrapping:i,coords:s}=m$(n,t),a=o?.navEntry.navParams.group?kd(o.children):{node:o,coords:s},l=r?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Te.Pibling}:l?(Fl(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:Te.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Te.Pibling}}var gr;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(gr||(gr={}));const En={name:"data-nav",js(e){return e?`[${En.name}*="${e}"]`:`[${En.name}]`},css({baseSelector:e="",navValue:t}={}){return D`
            ${he(e)}${he(En.js(t))}
        `}},gg="navEntry";function g$(e){return gg in e}function p$(e){if(g$(e)){const t=e[gg];return Ut.instanceOf(t,b$,"Invalid nav entry")}else return}function nI(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==gr.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class b${element;navParams;navTreeNode;navValue;eventListener=nI(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Dt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(En.name,""),xf(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,o=t===(n===gr.Focused);if(!(this.navParams.group||this.navController.locked||o||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(gr.Focused),xf(this.element)||this.element.focus()):(this.removeNavValue(gr.Focused),xf(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Te.Focus)}activate(t){const r=this.navValue,n=t===(r===gr.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(gr.Active):this.setNavValue(gr.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Te.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(En.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(En.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function y$(e,t){Object.entries(t).forEach(([r,n])=>{C.isBoolean(n)&&n?e.setAttribute(r,""):C.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const oI=to(class extends ro{element;lastKey;constructor(e){super(e),this.element=Xl(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Kr}});function iI(e){return"group"in e?gr.Group:e.disabled?gr.Disabled:""}function O1(e,t={}){return oI(v(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Dt.instanceOf(r,HTMLElement);const o={[En.name]:iI(t),tabindex:n?0:-1};y$(r,o);const i=p$(r)||new b$(r,e,t);g$(r)?(i.navParams=t,i.navController=e):r[gg]=i,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function sI(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Te.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Te.Enter};const r=t.position.node.children[0]?.[0];return r?(Fl(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Te.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Te.Enter}}function aI(e,t){return v$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function v$(e,t,r){for(let n=0;n<t.length;n++){const o=t[n];for(let i=0;i<o.length;i++){const s=o[i],a={ancestorChain:e,nodeCoords:{x:i,y:n},node:s};if(r(a))return a;const l=v$(e.concat(a),s.children,r);if(l)return l}}}function w$(e,t){const r=aI(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function lI(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Te.Exit};const r=t.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Te.Exit};const{nodeCoords:n}=w$(e,r.navEntry);return Fl(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Te.Exit,coords:n}}class uI extends Ln()("nav-exit"){}class $$ extends Ln()("nav-activate"){}class cI extends Ln()("nav-focus"){}class dI extends Ln()("nav-enter"){}class fI extends Ln()("nav-navigate"){}class hI extends Ln()("nav-navigate-pibling"){}function mI(e){return{root:!0,children:k$(e)?.children||[]}}function k$(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=p$(t),n=gI(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function gI(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(l=>r(l)));return}const o=n.navEntry.navParams.x,i=n.navEntry.navParams.y||0,s=Xi(t,i,()=>({noX:[],withX:[],y:i}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return e.children.forEach(n=>{const o=k$(n);o&&r(o)}),t.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,i)=>o.x-i.x),n.withX.forEach(({x:o,node:i})=>{n.noX.splice(o,0,i)}),n.noX)).filter(C.isTruthy)}class x$ extends Uh{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){kd(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=w$(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:o}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const i={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return r&&(n===Te.Activate?this.dispatch(new $$({detail:i})):n===Te.Focus&&this.dispatch(new cI({detail:i}))),i}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Te.Navigate,reason:"NavController is locked."};const n=I1(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new fI({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Te.Enter,reason:"NavController is locked."};const r=sI(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new dI({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Te.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Te.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Dt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Te.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Te.Activate&&this.currentNavEntry.entry.focus(!0);const t=lI(this.getNavTree(),this.currentNavEntry);return this.dispatch(new uI({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Te.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),i={...this.currentNavEntry?rI(this.currentNavEntry,r,t):I1(n,void 0,r,t),navAction:Te.Pibling};return this.dispatch(new hI({detail:i})),i}buildNavTree(){const t=TN(this.rootElement),r=mI(t);return this.cachedNavTree=r,r}}const ol=Qe()({tagName:"vira-link",hostClasses:{"vira-link-link-styles":({inputs:e})=>!e.disableLinkStyles},styles:({hostClasses:e})=>D`
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
                    ${wo(e.attributePassthrough?.a)}
                    style=${pt(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return g`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${wo(e.attributePassthrough?.a)}
                    style=${pt(e.stylePassthrough?.a)}
                    ${j("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),B1={item:"menu-item"},il=Qe()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new x$(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>D`
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
            ${Sr};
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

        ${En.css({baseSelector:".menu-item.default-pointer-styles:not(.disabled):not(.selected)",navValue:gr.Focused})}, .menu-item.default-pointer-styles:not(.disabled):not(.selected):hover {
            background-color: ${T["vira-form-selection-hover-color"].value};
            outline: none;
        }
        ${En.css({baseSelector:".menu-item.default-pointer-styles:not(.disabled):not(.selected)",navValue:gr.Active})}, .menu-item.default-pointer-styles:not(.disabled):not(.selected):active {
            background-color: ${T["vira-form-selection-active-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${En.css({baseSelector:".menu-item:not(.disabled)",navValue:gr.Focused})},
                .menu-item:not(.disabled):hover {
                background-color: ${T["vira-form-selection-hover-color"].value};
                outline: none;
            }

            &
                ${En.css({baseSelector:".menu-item:not(.disabled)",navValue:gr.Active})},
                .menu-item:not(.disabled):active {
                background-color: ${T["vira-form-selection-active-color"].value};
                outline: none;
            }
        }

        ${Ur} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${Hi};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){YP(e.items);const r=e.items.map(n=>{const o=!!e.selected?.includes(n.id),i=C.isString(n.label)?g`
                      <${Ur.assign({label:n.label,selected:o,hideCheckIcon:e.hideCheckIcons})}></${Ur}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&o;return n.route?g`
                    <${ol.assign({route:n.route,disableLinkStyles:!0})}
                        class="menu-item ${tr({disabled:!!n.disabled,selected:o,"default-pointer-styles":!n.disableDefaultPointerStyles,"no-default-pointer-styles":!!n.disableDefaultPointerStyles})}"
                        ${Hn(B1.item)}
                        title=${pt(n.titleText||void 0)}
                        role="option"
                        ${O1(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </${ol}>
                `:g`
                    <button
                        class="menu-item ${tr({disabled:!!n.disabled,selected:o,"default-pointer-styles":!n.disableDefaultPointerStyles,"no-default-pointer-styles":!!n.disableDefaultPointerStyles})}"
                        ${Hn(B1.item)}
                        title=${pt(n.titleText||void 0)}
                        role="option"
                        ${O1(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </button>
                `});return g`
            ${r}
        `}});var pg=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(pg||{}),kc=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(kc||{});const sl=Qe()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>D`
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
            ${Bi.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${Bi.menuShadowReversed}
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
        `}}),Cu=globalThis.document;class pI extends O5{constructor(){if(super({defaultValue:!!Cu?.hidden,equalityCheck:C.strictEquals}),!Cu)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,Cu));const t=r=>this.updateVisibility(r,Cu);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=yI.includes(t.type),o=bI.includes(t.type),i=n?!0:o?!1:r.hasFocus()||!r.hidden;this.setValue(i)}}const bI=["blur","focusout","pagehide"],yI=["focus","focusin","pageshow"],vI=new pI;function wI(e,t){return vI.listen(e,t)}function ah(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const R1={top:0,left:0,right:0,bottom:0};class D$ extends _h("hide-pop-up"){}class A$ extends Ln()("nav-select"){}class $I{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new Uh;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[wI(!1,t=>{t||this.removePopUp()}),this.navController.listen($$,t=>{const r=t.composedPath()[0];r instanceof Element&&ah(r)||t.detail.success&&(this.listenTarget.dispatch(new A$({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),C0("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),C0("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&ah(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Jn.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Jn.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Jn.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Jn.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new D$)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},o=PN(t);Dt.instanceOf(o,HTMLElement);const i=t.getBoundingClientRect(),s=o.getBoundingClientRect(),a=o.offsetWidth-o.clientWidth,l=o.offsetHeight-o.clientHeight,c=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-l},d=rt(R1,y=>i[y]),f=rt(R1,y=>{const $=c[y],k=d[y];return Math.abs($-k)}),h=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace,m=f.left>f.right+n.horizontalDiffThreshold&&f.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!h,popRight:!m,positions:{container:c,root:d,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Zo=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(Zo||{});const fe=Qe()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new $I(new x$(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>D`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Sr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${Ql({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${ni};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Hi}
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
    `,events:{navSelect:Xe(),openChange:Xe(),init:Xe()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:o,events:i}){e.popUpManager.listen(D$,()=>{if(t({showPopUpResult:void 0}),o(new i.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Dt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(A$,s=>{n.keepOpenAfterInteraction||P1({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),o(new i.navSelect(s.detail))}),o(new i.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:o,host:i,slotNames:s}){function a({emitEvent:y,open:$},k){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&k){const x=i.shadowRoot.querySelector(".dropdown-trigger");if(x&&!k.composedPath().includes(x))return}P1({open:$,callback(x){o({showPopUpResult:x}),y&&e(new t.openChange(x))},host:i,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const l=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,c=l==="right"&&r.showPopUpResult?n.ignoreMaxWidth?D`
                          left: unset;
                      `:D`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:D`
                      left: ${n.popUpOffset?.left||0}px;
                  `,d=r.showPopUpResult&&l==="left"?n.ignoreMaxWidth?D`
                          right: unset;
                      `:D`
                          right: -${r.showPopUpResult.positions.diff.right}px;
                      `:D`
                      right: ${n.popUpOffset?.right||0}px;
                  `,f=D`
            ${c}
            ${d}
        `,h=r.showPopUpResult?r.showPopUpResult.popDown?n.ignoreMaxHeight?D`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:D`
                          bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:n.ignoreMaxHeight?D`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:D`
                        top: -${r.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:void 0;function m(y){a({emitEvent:!0,open:!r.showPopUpResult},y)}return g`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${tr({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${j("keydown",y=>{!r.showPopUpResult&&y.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},y)})}
                ${j("click",y=>{if(y.detail===0){let $=!1;if(IN(({element:k})=>ah(k)?($=!0,!0):!1),$)return;m(y)}})}
                ${j("mousedown",y=>{y.button===0&&m(y)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${tr({"right-aligned":l==="right"})}"
                    style=${h}
                >
                    ${Pr(!!r.showPopUpResult,g`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),kI={menu:"menu-trigger-menu"},Vo=Qe()({tagName:"vira-menu-trigger",styles:D`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${fe} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:Xe(),openChange:Xe()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:o}){return g`
            <${fe.assign({...e,keepOpenAfterInteraction:!0,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||Zo.Left})}
                class=${tr({open:!!t.showPopUpResult})}
                ${j(fe.events.init,i=>{r({navController:i.detail.navController,popUpManager:i.detail.popUpManager})})}
                ${j(fe.events.openChange,i=>{!!t.showPopUpResult!=!!i.detail&&n(new o.openChange(i.detail)),r({showPopUpResult:i.detail})})}
                ${j(fe.events.navSelect,i=>{const s=i.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new o.itemActivate(XP(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${fe.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?g`
                          <${sl.assign({direction:t.showPopUpResult.popDown?kc.Downwards:kc.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${fe.slotNames.popUp}
                              class=${tr({"full-width-menu":e.horizontalAnchor===Zo.Both})}
                          >
                              <${il.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Hn(kI.menu)}
                              ></${il}>
                          </${sl}>
                      `:ee}
            </${fe}>
        `}}),dt=Qe()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>D`
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
        `}});var Kn=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e.Danger="vira-button-danger",e.DangerOutline="vira-button-danger-outline",e.Ghost="vira-button-ghost",e.Plain="vira-button-plain",e))(Kn||{});const ot=Qe()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline"||e.buttonStyle==="vira-button-danger-outline","vira-button-danger-style":({inputs:e})=>e.buttonStyle==="vira-button-danger"||e.buttonStyle==="vira-button-danger-outline","vira-button-ghost-style":({inputs:e})=>e.buttonStyle==="vira-button-ghost","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon,"vira-button-icon-only":({inputs:e})=>!!e.icon&&!e.text,"vira-button-plain-style":({inputs:e})=>e.buttonStyle==="vira-button-plain","vira-button-default-style":({inputs:e})=>!e.buttonStyle||e.buttonStyle==="vira-button-default"},cssVars:{"vira-button-padding":"5px 10px","vira-button-internal-foreground-color":T["vira-form-background-color"].value,"vira-button-internal-background-color":T["vira-form-accent-primary-color"].value,"vira-button-border-color":"transparent"},styles:({hostClasses:e,cssVars:t})=>D`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ni};
            ${T["vira-form-focus-outline-color"].name}: ${T["vira-form-accent-primary-hover-color"].value}
        }

        ${e["vira-button-icon-only"].selector} {
            ${t["vira-button-padding"].name}: 5px;
        }

        ${e["vira-button-disabled"].selector} {
            ${Hi};
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
            ${Sr};
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
                color ${xo["vira-interaction-animation-duration"].value},
                background-color
                    ${xo["vira-interaction-animation-duration"].value},
                border-color ${xo["vira-interaction-animation-duration"].value};

            ${Ql({elementBorderSize:2})}
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
              `:ee,r=e.text?g`
                  <span class="text-template">${e.text}</span>
              `:g`
                  <span class="empty-text">&nbsp;</span>
              `;return g`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var lh=(e=>(e.Error="error",e.Success="success",e))(lh||{});const Ff=Qe()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":D`1px solid ${T["vira-form-border-color"].value}`,"vira-card-padding":T["vira-form-wrapper-radius"].value},styles:({hostClasses:e,cssVars:t})=>D`
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
        `}}),lo=Qe()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:["header"],styles:({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Sr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${xo["vira-pretty-animation-duration"].value};
            overflow: hidden;

            &.collapsed {
                ${ni}
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
    `,events:{expandChange:Xe()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:o,inputs:i}){const s=i.expanded?D`
                  height: ${e.contentHeight}px;
              `:D`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${j("click",()=>{n(new o.expandChange(!i.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${tr({collapsed:!i.expanded})}"
                style=${s}
                disabled="disabled"
            >
                <div
                    ${W5(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Mf={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},Wa=Qe()({tagName:"vira-dropdown",styles:D`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${Vo} {
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
                ${xo["vira-interaction-animation-duration"].value} linear;
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
            ${ni};
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
    `,events:{selectedChange:Xe(),openChange:Xe()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:o}){const i=Rn(t.selected,d=>t.options.find(f=>f.id===d),C.isTruthy),s=t.icon?g`
                  <${I.assign({icon:t.icon})}
                      ${Hn(Mf.icon)}
                  ></${I}>
              `:ee,a=!i.length,l=t.selectionPrefix&&!a?g`
                      <span class="selected-label-prefix" ${Hn(Mf.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:ee,c=a?t.placeholder||"":t.isMultiSelect&&i.length>1?`${i.length} Selected`:i[0]?.label||"";return g`
            <${Vo.assign({...t,items:t.options,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||Zo.Both})}
                ${j(Vo.events.openChange,d=>{o({showPopUpResult:d.detail}),r(new n.openChange(d.detail))})}
                ${j(Vo.events.itemActivate,d=>{r(new n.selectedChange(d.detail))})}
            >
                <div
                    class="dropdown-trigger ${tr({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Hn(Mf.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${tr({"using-placeholder":a})}"
                        title=${pt(a?void 0:c)}
                    >
                        ${l} ${c}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${I.assign({icon:hg})}
                            class="trigger-icon"
                        ></${I}>
                    </span>
                </div>
            </${Vo}>
        `}}),Ri=Qe()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>D`
        :host {
            color: ${T["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Io=Qe()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:Xe(),imageError:Xe()},styles:({hostClasses:e})=>D`
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
                      <${I.assign({icon:$c})} class="error"></${I}>
                  </slot>
              `:t.loadedUrls[s]?void 0:g`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${I.assign({icon:Gi})}></${I}>
                    </slot>
                `;return g`
            ${Pr(!!a,a)}
            <img
                class=${tr({hidden:!!a})}
                ${j("load",async()=>{e._debugLoadDelay&&await ji(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${j("error",async l=>{e._debugLoadDelay&&await ji(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new o.imageError(l.error))})}
                src=${s}
            />
        `}}),xI=["pagehide","pageshow","popstate"],Oo=Qe()({tagName:"vira-modal",events:{modalClose:Xe()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:({hostClasses:e,cssVars:t})=>D`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${eu};
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
            ${Bi.modal}

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
                        ${Sr};
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:o,slotNames:i}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=xI.map(l=>C0(l,()=>{o(new n.modalClose)}));r({cleanup:()=>{a.forEach(l=>l())}})}function s(){e.open&&(t.cleanup?.(),o(new n.modalClose))}return g`
            <dialog
                ${Ki(a=>{r({dialogElement:Ut.instanceOf(a,HTMLDialogElement)})})}
                ${j("close",()=>{s()})}
                ${j("mousedown",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Ki(a=>{r({contentElement:Ut.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${i.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?g`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:ee}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${j("click",()=>{t.dialogElement?.close()})}
                        >
                            <${I.assign({icon:d$})}></${I}>
                        </button>
                    </div>
                    ${e.open?g`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:ee}
                </div>
            </dialog>
        `}}),Yn=Qe()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>D`
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
                ${Ki(i=>{if(!r.automaticallySwitch)return;const s={elementToTest:i,host:n,updateState:t},a=new ResizeObserver(()=>{Sf(s)});a.observe(n),a.observe(i);const l=zh(i,"slotchange",()=>{Sf(s)});Sf(s),o.cleanup?.(),t({cleanup(){a.disconnect(),l()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function Sf({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const ho=Qe()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:({cssVars:e})=>D`
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
    `,render({inputs:e,host:t}){const r=e.min||0,o=(e.max||100)-r,i=e.value-r,s=Z3(Math.round(i/o*100),{min:0,max:100});return y$(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),g`
            <div
                class="progress-bar"
                style=${s?D`
                          width: ${s}%;
                      `:D`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});var Ml;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(Ml||(Ml={}));const bg={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:Ml.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},oi=rt(bg,e=>e),pe={...oi,name:"name",hexString:"hexString"},Wn=rt(bg,(e,t)=>{const r=C.isEnumValue(e,Ml)&&C.isEnumValue(e,oi)?e:"conversionFormat"in t&&t.conversionFormat&&C.isEnumValue(t.conversionFormat,Ml)&&C.isEnumValue(t.conversionFormat,oi)?t.conversionFormat:void 0;return Dt.isTruthy(r,`Invalid conversion format for color format '${e}' ${v(t)}.`),{...t,colorFormat:e,conversionFormat:r,rawSyntax:Ut.isEnumValue("rawSyntax"in t&&t.rawSyntax?t.rawSyntax:e,pe)}});Xo(hl(bg),e=>({key:e.colorSpace,value:e.colorSpace}),{});Sn(Wn).reduce((e,[t,r])=>(Xi(e,r.colorSpace,()=>({}))[t]=r,e),{});function DI(e){return e.startsWith("rgb")?pe.rgb:e.startsWith("hsl")?pe.hsl:e.startsWith("hwb")?pe.hwb:e.startsWith("oklab")?pe.oklab:e.startsWith("oklch")?pe.oklch:e.startsWith("lab")?pe.lab:e.startsWith("lch")?pe.lch:e.startsWith("#")?pe.hexString:pe.name}const uh={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in uh)Object.freeze(uh[e]);const Sl=Object.freeze(uh),AI=Object.keys(Sl).reduce((e,t)=>t.length>e.length?t:e),EI=Lc(rt(Sl,(e,t)=>Rn(Object.entries(Sl),([n])=>n,(n,[,o])=>n===e?!1:C.deepEquals(o,t))),(e,t)=>!!t.length),L1=Object.entries(EI).reduce((e,t)=>{const r=[e[0],...e[1]].join(", ");return[t[0],...t[1]].join(", ").length>r.length?t:e}).reduce((e,t)=>C.isArray(t)?[...e,...t]:[...e,t],[]),j1=Math.max(AI.length,L1.length+(L1.length-1)*2),E$=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},CI={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},FI=e=>E$(CI[e.toLowerCase()],6),MI=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,SI=e=>{let t;return(t=e.match(MI))?E$(parseInt(t[1],16),t[1].length):void 0},Jo="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",al=`${Jo}%`,yg=`(?:${Jo}%|${Jo})`,TI=`(?:${Jo}(deg|grad|rad|turn)|${Jo})`,ea="\\s*,\\s*",NI=new RegExp(`^rgba?\\(\\s*${Jo}${ea}${Jo}${ea}${Jo}\\s*(?:,\\s*${yg}\\s*)?\\)$`),PI=new RegExp(`^rgba?\\(\\s*${al}${ea}${al}${ea}${al}\\s*(?:,\\s*${yg}\\s*)?\\)$`),II=e=>{let t={mode:"rgb"},r;if(r=e.match(NI))r[1]!==void 0&&(t.r=r[1]/255),r[2]!==void 0&&(t.g=r[2]/255),r[3]!==void 0&&(t.b=r[3]/255);else if(r=e.match(PI))r[1]!==void 0&&(t.r=r[1]/100),r[2]!==void 0&&(t.g=r[2]/100),r[3]!==void 0&&(t.b=r[3]/100);else return;return r[4]!==void 0?t.alpha=Math.max(0,Math.min(1,r[4]/100)):r[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[5]))),t},ch=(e,t)=>e===void 0?void 0:typeof e!="object"?hh(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,Zi=(e="rgb")=>t=>(t=ch(t,e))!==void 0?t.mode===e?t:Gn[t.mode][e]?Gn[t.mode][e](t):e==="rgb"?Gn[t.mode].rgb(t):Gn.rgb[e](Gn[t.mode].rgb(t)):void 0,Gn={},C$={},xc=[],F$={},OI=e=>e,Be=e=>(Gn[e.mode]={...Gn[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{Gn[t]||(Gn[t]={}),Gn[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=OI)}),C$[e.mode]=e,(e.parse||[]).forEach(t=>{BI(t,e.mode)}),Zi(e.mode)),xd=e=>C$[e],BI=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");F$[e]=t}else typeof e=="function"&&xc.indexOf(e)<0&&xc.push(e)},dh=/[^\x00-\x7F]|[a-zA-Z_]/,RI=/[^\x00-\x7F]|[-\w]/,B={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let Y=0;function Fu(e){let t=e[Y],r=e[Y+1];return t==="-"||t==="+"?/\d/.test(r)||r==="."&&/\d/.test(e[Y+2]):t==="."?/\d/.test(r):/\d/.test(t)}function fh(e){if(Y>=e.length)return!1;let t=e[Y];if(dh.test(t))return!0;if(t==="-"){if(e.length-Y<2)return!1;let r=e[Y+1];return!!(r==="-"||dh.test(r))}return!1}const LI={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function Pa(e){let t="";if((e[Y]==="-"||e[Y]==="+")&&(t+=e[Y++]),t+=Mu(e),e[Y]==="."&&/\d/.test(e[Y+1])&&(t+=e[Y++]+Mu(e)),(e[Y]==="e"||e[Y]==="E")&&((e[Y+1]==="-"||e[Y+1]==="+")&&/\d/.test(e[Y+2])?t+=e[Y++]+e[Y++]+Mu(e):/\d/.test(e[Y+1])&&(t+=e[Y++]+Mu(e))),fh(e)){let r=Dc(e);return r==="deg"||r==="rad"||r==="turn"||r==="grad"?{type:B.Hue,value:t*LI[r]}:void 0}return e[Y]==="%"?(Y++,{type:B.Percentage,value:+t}):{type:B.Number,value:+t}}function Mu(e){let t="";for(;/\d/.test(e[Y]);)t+=e[Y++];return t}function Dc(e){let t="";for(;Y<e.length&&RI.test(e[Y]);)t+=e[Y++];return t}function jI(e){let t=Dc(e);return e[Y]==="("?(Y++,{type:B.Function,value:t}):t==="none"?{type:B.None,value:void 0}:{type:B.Ident,value:t}}function _I(e=""){let t=e.trim(),r=[],n;for(Y=0;Y<t.length;){if(n=t[Y++],n===`
`||n==="	"||n===" "){for(;Y<t.length&&(t[Y]===`
`||t[Y]==="	"||t[Y]===" ");)Y++;continue}if(n===",")return;if(n===")"){r.push({type:B.ParenClose});continue}if(n==="+"){if(Y--,Fu(t)){r.push(Pa(t));continue}return}if(n==="-"){if(Y--,Fu(t)){r.push(Pa(t));continue}if(fh(t)){r.push({type:B.Ident,value:Dc(t)});continue}return}if(n==="."){if(Y--,Fu(t)){r.push(Pa(t));continue}return}if(n==="/"){for(;Y<t.length&&(t[Y]===`
`||t[Y]==="	"||t[Y]===" ");)Y++;let o;if(Fu(t)&&(o=Pa(t),o.type!==B.Hue)){r.push({type:B.Alpha,value:o});continue}if(fh(t)&&Dc(t)==="none"){r.push({type:B.Alpha,value:{type:B.None,value:void 0}});continue}return}if(/\d/.test(n)){Y--,r.push(Pa(t));continue}if(dh.test(n)){Y--,r.push(jI(t));continue}return}return r}function UI(e){e._i=0;let t=e[e._i++];if(!t||t.type!==B.Function||t.value!=="color"||(t=e[e._i++],t.type!==B.Ident))return;const r=F$[t.value];if(!r)return;const n={mode:r},o=M$(e,!1);if(!o)return;const i=xd(r).channels;for(let s=0,a,l;s<i.length;s++)a=o[s],l=i[s],a.type!==B.None&&(n[l]=a.type===B.Number?a.value:a.value/100,l==="alpha"&&(n[l]=Math.max(0,Math.min(1,n[l]))));return n}function M$(e,t){const r=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===B.None||n.type===B.Number||n.type===B.Alpha||n.type===B.Percentage||t&&n.type===B.Hue){r.push(n);continue}if(n.type===B.ParenClose){if(e._i<e.length)return;continue}return}if(!(r.length<3||r.length>4)){if(r.length===4){if(r[3].type!==B.Alpha)return;r[3]=r[3].value}return r.length===3&&r.push({type:B.None,value:void 0}),r.every(o=>o.type!==B.Alpha)?r:void 0}}function zI(e,t){e._i=0;let r=e[e._i++];if(!r||r.type!==B.Function)return;let n=M$(e,t);if(n)return n.unshift(r.value),n}const hh=e=>{if(typeof e!="string")return;const t=_I(e),r=t?zI(t,!0):void 0;let n,o=0,i=xc.length;for(;o<i;)if((n=xc[o++](e,r))!==void 0)return n;return t?UI(t):void 0};function VI(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const r={mode:"rgb"},[,n,o,i,s]=t;if(!(n.type===B.Hue||o.type===B.Hue||i.type===B.Hue))return n.type!==B.None&&(r.r=n.type===B.Number?n.value/255:n.value/100),o.type!==B.None&&(r.g=o.type===B.Number?o.value/255:o.value/100),i.type!==B.None&&(r.b=i.type===B.Number?i.value/255:i.value/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const qI=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,WI=(e,t,r)=>e+r*(t-e),KI=e=>{let t=[];for(let r=0;r<e.length-1;r++){let n=e[r],o=e[r+1];n===void 0&&o===void 0?t.push(void 0):n!==void 0&&o!==void 0?t.push([n,o]):t.push(n!==void 0?[n,n]:[o,o])}return t},GI=e=>t=>{let r=KI(t);return n=>{let o=n*r.length,i=n>=1?r.length-1:Math.max(Math.floor(o),0),s=r[i];return s===void 0?void 0:e(s[0],s[1],o-i)}},U=GI(WI),Lt=e=>{let t=!1,r=e.map(n=>n!==void 0?(t=!0,n):1);return t?r:e},va={mode:"rgb",channels:["r","g","b","alpha"],parse:[VI,SI,II,FI,qI,"srgb"],serialize:"srgb",interpolate:{r:U,g:U,b:U,alpha:{use:U,fixup:Lt}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},Tf=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),_1=e=>{let t=Tf(e.r),r=Tf(e.g),n=Tf(e.b),o={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*r+.1882286462349947*n,y:.297344975250536*t+.6273635662554661*r+.0752914584939979*n,z:.0270313613864123*t+.0706888525358272*r+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},Nf=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),U1=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"a98",r:Nf(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*r),g:Nf(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*r),b:Nf(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*r)};return n!==void 0&&(o.alpha=n),o},Pf=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},wa=({r:e,g:t,b:r,alpha:n})=>{let o={mode:"lrgb",r:Pf(e),g:Pf(t),b:Pf(r)};return n!==void 0&&(o.alpha=n),o},us=e=>{let{r:t,g:r,b:n,alpha:o}=wa(e),i={mode:"xyz65",x:.4123907992659593*t+.357584339383878*r+.1804807884018343*n,y:.2126390058715102*t+.715168678767756*r+.0721923153607337*n,z:.0193308187155918*t+.119194779794626*r+.9505321522496607*n};return o!==void 0&&(i.alpha=o),i},If=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},$a=({r:e,g:t,b:r,alpha:n},o="rgb")=>{let i={mode:o,r:If(e),g:If(t),b:If(r)};return n!==void 0&&(i.alpha=n),i},cs=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=$a({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*r,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*r,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*r});return n!==void 0&&(o.alpha=n),o},HI={...va,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>U1(us(e)),xyz65:U1},toMode:{rgb:e=>cs(_1(e)),xyz65:_1}},rr=e=>(e=e%360)<0?e+360:e,ZI=(e,t)=>e.map((r,n,o)=>{if(r===void 0)return r;let i=rr(r);return n===0||e[n-1]===void 0?i:t(i-rr(o[n-1]))}).reduce((r,n)=>!r.length||n===void 0||r[r.length-1]===void 0?(r.push(n),r):(r.push(n+r[r.length-1]),r),[]),Mo=e=>ZI(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),zt=[-.14861,1.78277,-.29227,-.90649,1.97294,0],JI=Math.PI/180,YI=180/Math.PI;let z1=zt[3]*zt[4],V1=zt[1]*zt[4],q1=zt[1]*zt[2]-zt[0]*zt[3];const XI=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(q1*r+e*z1-t*V1)/(q1+z1-V1),i=r-o,s=(zt[4]*(t-o)-zt[2]*i)/zt[3],a={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(i*i+s*s)/(zt[4]*o*(1-o))};return a.s&&(a.h=Math.atan2(s,i)*YI-120),n!==void 0&&(a.alpha=n),a},QI=({h:e,s:t,l:r,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*JI,r===void 0&&(r=0);let i=t===void 0?0:t*r*(1-r),s=Math.cos(e),a=Math.sin(e);return o.r=r+i*(zt[0]*s+zt[1]*a),o.g=r+i*(zt[2]*s+zt[3]*a),o.b=r+i*(zt[4]*s+zt[5]*a),n!==void 0&&(o.alpha=n),o},Dd=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let r=rr(e.h),n=rr(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*o},eO=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let r=rr(e.h),n=rr(t.h);return Math.abs(n-r)>180?r-(n-360*Math.sign(n-r)):n-r},Ad=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let r=rr(e.h),n=rr(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*o},tO=(e="rgb",t=[1,1,1,0])=>{let r=xd(e),n=r.channels,o=r.difference,i=Zi(e);return(s,a)=>{let l=i(s),c=i(a);return Math.sqrt(n.reduce((d,f,h)=>{let m=o[f]?o[f](l,c):l[f]-c[f];return d+(t[h]||0)*Math.pow(isNaN(m)?0:m,2)},0))}},So=e=>{let t=e.reduce((n,o)=>{if(o!==void 0){let i=o*Math.PI/180;n.sin+=Math.sin(i),n.cos+=Math.cos(i)}return n},{sin:0,cos:0}),r=Math.atan2(t.sin,t.cos)*180/Math.PI;return r<0?360+r:r},rO={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:XI},toMode:{rgb:QI},interpolate:{h:{use:U,fixup:Mo},s:U,l:U,alpha:{use:U,fixup:Lt}},difference:{h:Dd},average:{h:So}},ii=({l:e,a:t,b:r,alpha:n},o="lch")=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),s={mode:o,l:e,c:i};return i&&(s.h=rr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},si=({l:e,c:t,h:r,alpha:n},o="lab")=>{r===void 0&&(r=0);let i={mode:o,l:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},S$=Math.pow(29,3)/Math.pow(3,3),T$=Math.pow(6,3)/Math.pow(29,3),Et={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},Os={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let Of=e=>Math.pow(e,3)>T$?Math.pow(e,3):(116*e-16)/S$;const N$=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,i=t/500+o,s=o-r/200,a={mode:"xyz65",x:Of(i)*Os.X,y:Of(o)*Os.Y,z:Of(s)*Os.Z};return n!==void 0&&(a.alpha=n),a},Ed=e=>cs(N$(e)),Bf=e=>e>T$?Math.cbrt(e):(S$*e+16)/116,P$=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Bf(e/Os.X),i=Bf(t/Os.Y),s=Bf(r/Os.Z),a={mode:"lab65",l:116*i-16,a:500*(o-i),b:200*(i-s)};return n!==void 0&&(a.alpha=n),a},Cd=e=>{let t=P$(us(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Ac=1,I$=1,Tl=26/180*Math.PI,Ec=Math.cos(Tl),Cc=Math.sin(Tl),O$=100/Math.log(139/100),mh=({l:e,c:t,h:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"lab65",l:(Math.exp(e*Ac/O$)-1)/.0039},i=(Math.exp(.0435*t*I$*Ac)-1)/.075,s=i*Math.cos(r/180*Math.PI-Tl),a=i*Math.sin(r/180*Math.PI-Tl);return o.a=s*Ec-a/.83*Cc,o.b=s*Cc+a/.83*Ec,n!==void 0&&(o.alpha=n),o},gh=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=t*Ec+r*Cc,i=.83*(r*Ec-t*Cc),s=Math.sqrt(o*o+i*i),a={mode:"dlch",l:O$/Ac*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*I$*Ac)};return a.c&&(a.h=rr((Math.atan2(i,o)+Tl)/Math.PI*180)),n!==void 0&&(a.alpha=n),a},W1=e=>mh(ii(e,"dlch")),K1=e=>si(gh(e),"dlab"),nO={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:W1,rgb:e=>Ed(W1(e))},fromMode:{lab65:K1,rgb:e=>K1(Cd(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Lt}}},oO={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:mh,dlab:e=>si(e,"dlab"),rgb:e=>Ed(mh(e))},fromMode:{lab65:gh,dlab:e=>ii(e,"dlch"),rgb:e=>gh(Cd(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:U,c:U,h:{use:U,fixup:Mo},alpha:{use:U,fixup:Lt}},difference:{h:Ad},average:{h:So}};function iO({h:e,s:t,i:r,alpha:n}){e=rr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r:r*(1+t*(3/(2-o)-1)),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1-t)};break;case 1:i={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1+t*(3/(2-o)-1)),b:r*(1-t)};break;case 2:i={r:r*(1-t),g:r*(1+t*(3/(2-o)-1)),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;case 3:i={r:r*(1-t),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1+t*(3/(2-o)-1))};break;case 4:i={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3/(2-o)-1))};break;case 5:i={r:r*(1+t*(3/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;default:i={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return i.mode="rgb",n!==void 0&&(i.alpha=n),i}function sO({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsi",s:e+t+r===0?0:1-3*i/(e+t+r),i:(e+t+r)/3};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const aO={mode:"hsi",toMode:{rgb:iO},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:sO},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Mo},s:U,i:U,alpha:{use:U,fixup:Lt}},difference:{h:Dd},average:{h:So}};function lO({h:e,s:t,l:r,alpha:n}){e=rr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=r+t*(r<.5?r:1-r),i=o-(o-r)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:o,g:i,b:2*r-o};break;case 1:s={r:i,g:o,b:2*r-o};break;case 2:s={r:2*r-o,g:o,b:i};break;case 3:s={r:2*r-o,g:i,b:o};break;case 4:s={r:i,g:2*r-o,b:o};break;case 5:s={r:o,g:2*r-o,b:i};break;default:s={r:2*r-o,g:2*r-o,b:2*r-o}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}function uO({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsl",s:o===i?0:(o-i)/(1-Math.abs(o+i-1)),l:.5*(o+i)};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const cO=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},dO=new RegExp(`^hsla?\\(\\s*${TI}${ea}${al}${ea}${al}\\s*(?:,\\s*${yg}\\s*)?\\)$`),fO=e=>{let t=e.match(dO);if(!t)return;let r={mode:"hsl"};return t[3]!==void 0?r.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(r.h=cO(t[1],t[2])),t[4]!==void 0&&(r.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(r.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?r.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[7]))),r};function hO(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const r={mode:"hsl"},[,n,o,i,s]=t;if(n.type!==B.None){if(n.type===B.Percentage)return;r.h=n.value}if(o.type!==B.None){if(o.type===B.Hue)return;r.s=o.value/100}if(i.type!==B.None){if(i.type===B.Hue)return;r.l=i.value/100}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const B$={mode:"hsl",toMode:{rgb:lO},fromMode:{rgb:uO},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[hO,fO],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Mo},s:U,l:U,alpha:{use:U,fixup:Lt}},difference:{h:Dd},average:{h:So}};function R$({h:e,s:t,v:r,alpha:n}){e=rr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r,g:r*(1-t*o),b:r*(1-t)};break;case 1:i={r:r*(1-t*o),g:r,b:r*(1-t)};break;case 2:i={r:r*(1-t),g:r,b:r*(1-t*o)};break;case 3:i={r:r*(1-t),g:r*(1-t*o),b:r};break;case 4:i={r:r*(1-t*o),g:r*(1-t),b:r};break;case 5:i={r,g:r*(1-t),b:r*(1-t*o)};break;default:i={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return i.mode="rgb",n!==void 0&&(i.alpha=n),i}function L$({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsv",s:o===0?0:1-i/o,v:o};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const j$={mode:"hsv",toMode:{rgb:R$},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:L$},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Mo},s:U,v:U,alpha:{use:U,fixup:Lt}},difference:{h:Dd},average:{h:So}};function mO({h:e,w:t,b:r,alpha:n}){if(t===void 0&&(t=0),r===void 0&&(r=0),t+r>1){let o=t+r;t/=o,r/=o}return R$({h:e,s:r===1?1:1-t/(1-r),v:1-r,alpha:n})}function gO(e){let t=L$(e);if(t===void 0)return;let r=t.s!==void 0?t.s:0,n=t.v!==void 0?t.v:0,o={mode:"hwb",w:(1-r)*n,b:1-n};return t.h!==void 0&&(o.h=t.h),t.alpha!==void 0&&(o.alpha=t.alpha),o}function pO(e,t){if(!t||t[0]!=="hwb")return;const r={mode:"hwb"},[,n,o,i,s]=t;if(n.type!==B.None){if(n.type===B.Percentage)return;r.h=n.value}if(o.type!==B.None){if(o.type===B.Hue)return;r.w=o.value/100}if(i.type!==B.None){if(i.type===B.Hue)return;r.b=i.value/100}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const bO={mode:"hwb",toMode:{rgb:mO},fromMode:{rgb:gO},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[pO],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Mo},w:U,b:U,alpha:{use:U,fixup:Lt}},difference:{h:eO},average:{h:So}},_$=203,Fd=.1593017578125,U$=78.84375,Md=.8359375,Sd=18.8515625,Td=18.6875;function Rf(e){if(e<0)return 0;const t=Math.pow(e,1/U$);return 1e4*Math.pow(Math.max(0,t-Md)/(Sd-Td*t),1/Fd)}function Lf(e){if(e<0)return 0;const t=Math.pow(e/1e4,Fd);return Math.pow((Md+Sd*t)/(1+Td*t),U$)}const jf=e=>Math.max(e/_$,0),G1=({i:e,t,p:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=Rf(e+.008609037037932761*t+.11102962500302593*r),i=Rf(e-.00860903703793275*t-.11102962500302599*r),s=Rf(e+.5600313357106791*t-.32062717498731885*r),a={mode:"xyz65",x:jf(2.070152218389422*o-1.3263473389671556*i+.2066510476294051*s),y:jf(.3647385209748074*o+.680566024947227*i-.0453045459220346*s),z:jf(-.049747207535812*o-.0492609666966138*i+1.1880659249923042*s)};return n!==void 0&&(a.alpha=n),a},_f=(e=0)=>Math.max(e*_$,0),H1=({x:e,y:t,z:r,alpha:n})=>{const o=_f(e),i=_f(t),s=_f(r),a=Lf(.3592832590121217*o+.6976051147779502*i-.0358915932320289*s),l=Lf(-.1920808463704995*o+1.1004767970374323*i+.0753748658519118*s),c=Lf(.0070797844607477*o+.0748396662186366*i+.8433265453898765*s),d=.5*a+.5*l,f=1.61376953125*a-3.323486328125*l+1.709716796875*c,h=4.378173828125*a-4.24560546875*l-.132568359375*c,m={mode:"itp",i:d,t:f,p:h};return n!==void 0&&(m.alpha=n),m},yO={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:G1,rgb:e=>cs(G1(e))},fromMode:{xyz65:H1,rgb:e=>H1(us(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:U,t:U,p:U,alpha:{use:U,fixup:Lt}}},vO=134.03437499999998,wO=16295499532821565e-27,Uf=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,Fd);return Math.pow((Md+Sd*t)/(1+Td*t),vO)},zf=(e=0)=>Math.max(e*203,0),z$=({x:e,y:t,z:r,alpha:n})=>{e=zf(e),t=zf(t),r=zf(r);let o=1.15*e-.15*r,i=.66*t+.34*e,s=Uf(.41478972*o+.579999*i+.014648*r),a=Uf(-.20151*o+1.120649*i+.0531008*r),l=Uf(-.0166008*o+.2648*i+.6684799*r),c=(s+a)/2,d={mode:"jab",j:.44*c/(1-.56*c)-wO,a:3.524*s-4.066708*a+.542708*l,b:.199076*s+1.096799*a-1.295875*l};return n!==void 0&&(d.alpha=n),d},$O=134.03437499999998,Z1=16295499532821565e-27,Vf=e=>{if(e<0)return 0;let t=Math.pow(e,1/$O);return 1e4*Math.pow((Md-t)/(Td*t-Sd),1/Fd)},qf=e=>e/203,V$=({j:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+Z1)/(.44+.56*(e+Z1)),i=Vf(o+.13860504*t+.058047316*r),s=Vf(o-.13860504*t-.058047316*r),a=Vf(o-.096019242*t-.8118919*r),l={mode:"xyz65",x:qf(1.661373024652174*i-.914523081304348*s+.23136208173913045*a),y:qf(-.3250758611844533*i+1.571847026732543*s-.21825383453227928*a),z:qf(-.090982811*i-.31272829*s+1.5227666*a)};return n!==void 0&&(l.alpha=n),l},q$=e=>{let t=z$(us(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},W$=e=>cs(V$(e)),kO={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:q$,xyz65:z$},toMode:{rgb:W$,xyz65:V$},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:U,a:U,b:U,alpha:{use:U,fixup:Lt}}},J1=({j:e,a:t,b:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),i={mode:"jch",j:e,c:o};return o&&(i.h=rr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(i.alpha=n),i},Y1=({j:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"jab",j:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},xO={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:Y1,rgb:e=>W$(Y1(e))},fromMode:{rgb:e=>J1(q$(e)),jab:J1},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:U,fixup:Mo},c:U,j:U,alpha:{use:U,fixup:Lt}},difference:{h:Ad},average:{h:So}},Nd=Math.pow(29,3)/Math.pow(3,3),vg=Math.pow(6,3)/Math.pow(29,3);let Wf=e=>Math.pow(e,3)>vg?Math.pow(e,3):(116*e-16)/Nd;const wg=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,i=t/500+o,s=o-r/200,a={mode:"xyz50",x:Wf(i)*Et.X,y:Wf(o)*Et.Y,z:Wf(s)*Et.Z};return n!==void 0&&(a.alpha=n),a},tu=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=$a({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*r,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*r,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*r});return n!==void 0&&(o.alpha=n),o},K$=e=>tu(wg(e)),ru=e=>{let{r:t,g:r,b:n,alpha:o}=wa(e),i={mode:"xyz50",x:.436065742824811*t+.3851514688337912*r+.14307845442264197*n,y:.22249319175623702*t+.7168870538238823*r+.06061979053616537*n,z:.013923904500943465*t+.09708128566574634*r+.7140993584005155*n};return o!==void 0&&(i.alpha=o),i},Kf=e=>e>vg?Math.cbrt(e):(Nd*e+16)/116,$g=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Kf(e/Et.X),i=Kf(t/Et.Y),s=Kf(r/Et.Z),a={mode:"lab",l:116*i-16,a:500*(o-i),b:200*(i-s)};return n!==void 0&&(a.alpha=n),a},G$=e=>{let t=$g(ru(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function DO(e,t){if(!t||t[0]!=="lab")return;const r={mode:"lab"},[,n,o,i,s]=t;if(!(n.type===B.Hue||o.type===B.Hue||i.type===B.Hue))return n.type!==B.None&&(r.l=Math.min(Math.max(0,n.value),100)),o.type!==B.None&&(r.a=o.type===B.Number?o.value:o.value*125/100),i.type!==B.None&&(r.b=i.type===B.Number?i.value:i.value*125/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const kg={mode:"lab",toMode:{xyz50:wg,rgb:K$},fromMode:{xyz50:$g,rgb:G$},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[DO],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Lt}}},AO={...kg,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:N$,rgb:Ed},fromMode:{xyz65:P$,rgb:Cd},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function EO(e,t){if(!t||t[0]!=="lch")return;const r={mode:"lch"},[,n,o,i,s]=t;if(n.type!==B.None){if(n.type===B.Hue)return;r.l=Math.min(Math.max(0,n.value),100)}if(o.type!==B.None&&(r.c=Math.max(0,o.type===B.Number?o.value:o.value*150/100)),i.type!==B.None){if(i.type===B.Percentage)return;r.h=i.value}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const xg={mode:"lch",toMode:{lab:si,rgb:e=>K$(si(e))},fromMode:{rgb:e=>ii(G$(e)),lab:ii},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[EO],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Mo},c:U,l:U,alpha:{use:U,fixup:Lt}},difference:{h:Ad},average:{h:So}},CO={...xg,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>si(e,"lab65"),rgb:e=>Ed(si(e,"lab65"))},fromMode:{rgb:e=>ii(Cd(e),"lch65"),lab65:e=>ii(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},H$=({l:e,u:t,v:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),i={mode:"lchuv",l:e,c:o};return o&&(i.h=rr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(i.alpha=n),i},Z$=({l:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"luv",l:e,u:t?t*Math.cos(r/180*Math.PI):0,v:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},J$=(e,t,r)=>4*e/(e+15*t+3*r),Y$=(e,t,r)=>9*t/(e+15*t+3*r),FO=J$(Et.X,Et.Y,Et.Z),MO=Y$(Et.X,Et.Y,Et.Z),SO=e=>e<=vg?Nd*e:116*Math.cbrt(e)-16,ph=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=SO(t/Et.Y),i=J$(e,t,r),s=Y$(e,t,r);!isFinite(i)||!isFinite(s)?o=i=s=0:(i=13*o*(i-FO),s=13*o*(s-MO));let a={mode:"luv",l:o,u:i,v:s};return n!==void 0&&(a.alpha=n),a},TO=(e,t,r)=>4*e/(e+15*t+3*r),NO=(e,t,r)=>9*t/(e+15*t+3*r),PO=TO(Et.X,Et.Y,Et.Z),IO=NO(Et.X,Et.Y,Et.Z),bh=({l:e,u:t,v:r,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),r===void 0&&(r=0);let o=t/(13*e)+PO,i=r/(13*e)+IO,s=Et.Y*(e<=8?e/Nd:Math.pow((e+16)/116,3)),a=s*(9*o)/(4*i),l=s*(12-3*o-20*i)/(4*i),c={mode:"xyz50",x:a,y:s,z:l};return n!==void 0&&(c.alpha=n),c},OO=e=>H$(ph(ru(e))),BO=e=>tu(bh(Z$(e))),RO={mode:"lchuv",toMode:{luv:Z$,rgb:BO},fromMode:{rgb:OO,luv:H$},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:U,fixup:Mo},c:U,l:U,alpha:{use:U,fixup:Lt}},difference:{h:Ad},average:{h:So}},LO={...va,mode:"lrgb",toMode:{rgb:$a},fromMode:{rgb:wa},parse:["srgb-linear"],serialize:"srgb-linear"},jO={mode:"luv",toMode:{xyz50:bh,rgb:e=>tu(bh(e))},fromMode:{xyz50:ph,rgb:e=>ph(ru(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:U,u:U,v:U,alpha:{use:U,fixup:Lt}}},X$=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*r),i=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*r),s=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*r),a={mode:"oklab",l:.210454268309314*o+.7936177747023054*i-.0040720430116193*s,a:1.9779985324311684*o-2.42859224204858*i+.450593709617411*s,b:.0259040424655478*o+.7827717124575296*i-.8086757549230774*s};return n!==void 0&&(a.alpha=n),a},Pd=e=>{let t=X$(wa(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},nu=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.pow(e+.3963377773761749*t+.2158037573099136*r,3),i=Math.pow(e-.1055613458156586*t-.0638541728258133*r,3),s=Math.pow(e-.0894841775298119*t-1.2914855480194092*r,3),a={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*i+.2309699031821044*s,g:-1.2684379732850317*o+2.6097573492876887*i-.3413193760026573*s,b:-.0041960761386756*o-.7034186179359362*i+1.7076146940746117*s};return n!==void 0&&(a.alpha=n),a},Id=e=>$a(nu(e));function yh(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}function Fc(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function _O(e,t){let r,n,o,i,s,a,l,c;-1.88170328*e-.80936493*t>1?(r=1.19086277,n=1.76576728,o=.59662641,i=.75515197,s=.56771245,a=4.0767416621,l=-3.3077115913,c=.2309699292):1.81444104*e-1.19445276*t>1?(r=.73956515,n=-.45954404,o=.08285427,i=.1254107,s=.14503204,a=-1.2684380046,l=2.6097574011,c=-.3413193965):(r=1.35733652,n=-.00915799,o=-1.1513021,i=-.50559606,s=.00692167,a=-.0041960863,l=-.7034186147,c=1.707614701);let d=r+n*e+o*t+i*e*e+s*e*t,f=.3963377774*e+.2158037573*t,h=-.1055613458*e-.0638541728*t,m=-.0894841775*e-1.291485548*t;{let y=1+d*f,$=1+d*h,k=1+d*m,x=y*y*y,E=$*$*$,N=k*k*k,R=3*f*y*y,q=3*h*$*$,ie=3*m*k*k,Ce=6*f*f*y,me=6*h*h*$,De=6*m*m*k,He=a*x+l*E+c*N,Ze=a*R+l*q+c*ie,St=a*Ce+l*me+c*De;d=d-He*Ze/(Ze*Ze-.5*He*St)}return d}function Dg(e,t){let r=_O(e,t),n=nu({l:1,a:r*e,b:r*t}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),i=o*r;return[o,i]}function UO(e,t,r,n,o,i=null){i||(i=Dg(e,t));let s;if((r-o)*i[1]-(i[0]-o)*n<=0)s=i[1]*o/(n*i[0]+i[1]*(o-r));else{s=i[1]*(o-1)/(n*(i[0]-1)+i[1]*(o-r));{let a=r-o,l=n,c=.3963377774*e+.2158037573*t,d=-.1055613458*e-.0638541728*t,f=-.0894841775*e-1.291485548*t,h=a+l*c,m=a+l*d,y=a+l*f;{let $=o*(1-s)+s*r,k=s*n,x=$+k*c,E=$+k*d,N=$+k*f,R=x*x*x,q=E*E*E,ie=N*N*N,Ce=3*h*x*x,me=3*m*E*E,De=3*y*N*N,He=6*h*h*x,Ze=6*m*m*E,St=6*y*y*N,Rr=4.0767416621*R-3.3077115913*q+.2309699292*ie-1,mr=4.0767416621*Ce-3.3077115913*me+.2309699292*De,no=4.0767416621*He-3.3077115913*Ze+.2309699292*St,jt=mr/(mr*mr-.5*Rr*no),zn=-Rr*jt,oo=-1.2684380046*R+2.6097574011*q-.3413193965*ie-1,rn=-1.2684380046*Ce+2.6097574011*me-.3413193965*De,Ht=-1.2684380046*He+2.6097574011*Ze-.3413193965*St,Ue=rn/(rn*rn-.5*oo*Ht),Tt=-oo*Ue,nn=-.0041960863*R-.7034186147*q+1.707614701*ie-1,sr=-.0041960863*Ce-.7034186147*me+1.707614701*De,on=-.0041960863*He-.7034186147*Ze+1.707614701*St,vn=sr/(sr*sr-.5*nn*on),To=-nn*vn;zn=jt>=0?zn:1e6,Tt=Ue>=0?Tt:1e6,To=vn>=0?To:1e6,s+=Math.min(zn,Math.min(Tt,To))}}}return s}function Ag(e,t,r=null){r||(r=Dg(e,t));let n=r[0],o=r[1];return[o/n,o/(1-n)]}function Q$(e,t,r){let n=Dg(t,r),o=UO(t,r,e,1,e,n),i=Ag(t,r,n),s=.11516993+1/(7.4477897+4.1590124*r+t*(-2.19557347+1.75198401*r+t*(-2.13704948-10.02301043*r+t*(-4.24894561+5.38770819*r+4.69891013*t)))),a=.11239642+1/(1.6132032-.68124379*r+t*(.40370612+.90148123*r+t*(-.27087943+.6122399*r+t*(.00299215-.45399568*r-.14661872*t)))),l=o/Math.min(e*i[0],(1-e)*i[1]),c=e*s,d=(1-e)*a,f=.9*l*Math.sqrt(Math.sqrt(1/(1/(c*c*c*c)+1/(d*d*d*d))));return c=e*.4,d=(1-e)*.8,[Math.sqrt(1/(1/(c*c)+1/(d*d))),f,o]}function X1(e){const t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:yh(t)};e.alpha!==void 0&&(o.alpha=e.alpha);let i=Math.sqrt(r*r+n*n);if(!i)return o.s=0,o;let[s,a,l]=Q$(t,r/i,n/i),c;if(i<a){let d=0,f=.8*s,h=1-f/a;c=(i-d)/(f+h*(i-d))*.8}else{let d=a,f=.2*a*a*1.25*1.25/s,h=1-f/(l-a);c=.8+.2*((i-d)/(f+h*(i-d)))}return c&&(o.s=c,o.h=rr(Math.atan2(n,r)*180/Math.PI)),o}function Q1(e){let t=e.h!==void 0?e.h:0,r=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:Fc(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!r||n===1)return o.a=o.b=0,o;let i=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[a,l,c]=Q$(o.l,i,s),d,f,h,m;r<.8?(d=1.25*r,f=0,h=.8*a,m=1-h/l):(d=5*(r-.8),f=l,h=.2*l*l*1.25*1.25/a,m=1-h/(c-l));let y=f+d*h/(1-m*d);return o.a=y*i,o.b=y*s,o}const zO={...B$,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:X1,rgb:e=>X1(Pd(e))},toMode:{oklab:Q1,rgb:e=>Id(Q1(e))}};function ey(e){let t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(r*r+n*n),i=o?r/o:1,s=o?n/o:1,[a,l]=Ag(i,s),c=.5,d=1-c/a,f=l/(o+t*l),h=f*t,m=f*o,y=Fc(h),$=m*y/h,k=nu({l:y,a:i*$,b:s*$}),x=Math.cbrt(1/Math.max(k.r,k.g,k.b,0));t=t/x,o=o/x*yh(t)/t,t=yh(t);const E={mode:"okhsv",s:o?(c+l)*m/(l*c+l*d*m):0,v:t?t/h:0};return E.s&&(E.h=rr(Math.atan2(n,r)*180/Math.PI)),e.alpha!==void 0&&(E.alpha=e.alpha),E}function ty(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const r=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,i=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[a,l]=Ag(i,s),c=.5,d=1-c/a,f=1-n*c/(c+l-l*d*n),h=n*l*c/(c+l-l*d*n),m=Fc(f),y=h*m/f,$=nu({l:m,a:i*y,b:s*y}),k=Math.cbrt(1/Math.max($.r,$.g,$.b,0)),x=Fc(o*f),E=h*x/f;return t.l=x*k,t.a=E*i*k,t.b=E*s*k,t}const VO={...j$,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:ey,rgb:e=>ey(Pd(e))},toMode:{oklab:ty,rgb:e=>Id(ty(e))}};function qO(e,t){if(!t||t[0]!=="oklab")return;const r={mode:"oklab"},[,n,o,i,s]=t;if(!(n.type===B.Hue||o.type===B.Hue||i.type===B.Hue))return n.type!==B.None&&(r.l=Math.min(Math.max(0,n.type===B.Number?n.value:n.value/100),1)),o.type!==B.None&&(r.a=o.type===B.Number?o.value:o.value*.4/100),i.type!==B.None&&(r.b=i.type===B.Number?i.value:i.value*.4/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const WO={...kg,mode:"oklab",toMode:{lrgb:nu,rgb:Id},fromMode:{lrgb:X$,rgb:Pd},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[qO],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function KO(e,t){if(!t||t[0]!=="oklch")return;const r={mode:"oklch"},[,n,o,i,s]=t;if(n.type!==B.None){if(n.type===B.Hue)return;r.l=Math.min(Math.max(0,n.type===B.Number?n.value:n.value/100),1)}if(o.type!==B.None&&(r.c=Math.max(0,o.type===B.Number?o.value:o.value*.4/100)),i.type!==B.None){if(i.type===B.Percentage)return;r.h=i.value}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const GO={...xg,mode:"oklch",toMode:{oklab:e=>si(e,"oklab"),rgb:e=>Id(si(e,"oklab"))},fromMode:{rgb:e=>ii(Pd(e),"oklch"),oklab:e=>ii(e,"oklch")},parse:[KO],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},ry=e=>{let{r:t,g:r,b:n,alpha:o}=wa(e),i={mode:"xyz65",x:.486570948648216*t+.265667693169093*r+.1982172852343625*n,y:.2289745640697487*t+.6917385218365062*r+.079286914093745*n,z:0*t+.0451133818589026*r+1.043944368900976*n};return o!==void 0&&(i.alpha=o),i},ny=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=$a({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*r,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*r,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*r},"p3");return n!==void 0&&(o.alpha=n),o},HO={...va,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>ny(us(e)),xyz65:ny},toMode:{rgb:e=>cs(ry(e)),xyz65:ry}},Gf=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},oy=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"prophoto",r:Gf(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*r),g:Gf(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*r),b:Gf(e*0+t*0+1.2119675456389452*r)};return n!==void 0&&(o.alpha=n),o},Hf=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},iy=e=>{let t=Hf(e.r),r=Hf(e.g),n=Hf(e.b),o={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*r+.0313477341283922*n,y:.2880748288194013*t+.7118352342418731*r+899369387256e-16*n,z:0*t+0*r+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},ZO={...va,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:oy,rgb:e=>oy(ru(e))},toMode:{xyz50:iy,rgb:e=>tu(iy(e))}},sy=1.09929682680944,JO=.018053968510807,Zf=e=>{const t=Math.abs(e);return t>JO?(Math.sign(e)||1)*(sy*Math.pow(t,.45)-(sy-1)):4.5*e},ay=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"rec2020",r:Zf(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*r),g:Zf(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*r),b:Zf(e*.0176398574453108-t*.0427706132578085+.9421031212354739*r)};return n!==void 0&&(o.alpha=n),o},ly=1.09929682680944,YO=.018053968510807,Jf=(e=0)=>{let t=Math.abs(e);return t<YO*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+ly-1)/ly,1/.45)},uy=e=>{let t=Jf(e.r),r=Jf(e.g),n=Jf(e.b),o={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*r+.1688809751641721*n,y:.262700212011267*t+.6779980715188708*r+.059301716469862*n,z:0*t+.0280726930490874*r+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},XO={...va,mode:"rec2020",fromMode:{xyz65:ay,rgb:e=>ay(us(e))},toMode:{xyz65:uy,rgb:e=>cs(uy(e))},parse:["rec2020"],serialize:"rec2020"},Li=.0037930732552754493,ek=Math.cbrt(Li),Yf=e=>Math.cbrt(e)-ek,QO=e=>{const{r:t,g:r,b:n,alpha:o}=wa(e),i=Yf(.3*t+.622*r+.078*n+Li),s=Yf(.23*t+.692*r+.078*n+Li),a=Yf(.2434226892454782*t+.2047674442449682*r+.5518098665095535*n+Li),l={mode:"xyb",x:(i-s)/2,y:(i+s)/2,b:a-(i+s)/2};return o!==void 0&&(l.alpha=o),l},Xf=e=>Math.pow(e+ek,3),eB=({x:e,y:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=Xf(e+t)-Li,i=Xf(t-e)-Li,s=Xf(r+t)-Li,a=$a({r:11.031566904639861*o-9.866943908131562*i-.16462299650829934*s,g:-3.2541473810744237*o+4.418770377582723*i-.16462299650829934*s,b:-3.6588512867136815*o+2.7129230459360922*i+1.9459282407775895*s});return n!==void 0&&(a.alpha=n),a},tB={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:eB},fromMode:{rgb:QO},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:U,y:U,b:U,alpha:{use:U,fixup:Lt}}},rB={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:tu,lab:$g},fromMode:{rgb:ru,lab:wg},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Lt}}},nB=e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let i={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*r-.0501922295431356*n,y:.0296278156881593*t+.990434484573249*r-.0170738250293851*n,z:-.0092430581525912*t+.0150551448965779*r+.7518742899580008*n};return o!==void 0&&(i.alpha=o),i},oB=e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let i={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*r+.0632593086610217*n,y:-.0283697069632081*t+1.0099954580058226*r+.021041398966943*n,z:.0123140016883199*t-.0205076964334779*r+1.3303659366080753*n};return o!==void 0&&(i.alpha=o),i},iB={mode:"xyz65",toMode:{rgb:cs,xyz50:nB},fromMode:{rgb:us,xyz50:oB},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Lt}}},sB=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*r,i:.59597799*e-.2741761*t-.32180189*r,q:.21147017*e-.52261711*t+.31114694*r};return n!==void 0&&(o.alpha=n),o},aB=({y:e,i:t,q:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"rgb",r:e+.95608445*t+.6208885*r,g:e-.27137664*t-.6486059*r,b:e-1.10561724*t+1.70250126*r};return n!==void 0&&(o.alpha=n),o},lB={mode:"yiq",toMode:{rgb:aB},fromMode:{rgb:sB},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:U,i:U,q:U,alpha:{use:U,fixup:Lt}}},uB=e=>Math.max(0,Math.min(1,e||0)),Qf=e=>Math.round(uB(e)*255),cB=Zi("rgb"),dB=e=>{if(e===void 0)return;let t=Qf(e.r),r=Qf(e.g),n=Qf(e.b);return"#"+(1<<24|t<<16|r<<8|n).toString(16).slice(1)},fB=e=>dB(cB(e)),hB=e=>{const t={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},mB=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function gB(e="rgb"){const{gamut:t}=xd(e);if(!t)return n=>!0;const r=Zi(typeof t=="string"?t:e);return n=>mB(r(n))}function pB(e="rgb"){const{gamut:t}=xd(e);if(!t)return i=>ch(i);const r=typeof t=="string"?t:e,n=Zi(r),o=gB(r);return i=>{const s=ch(i);if(!s)return;const a=n(s);if(o(a))return s;const l=hB(a);return s.mode===l.mode?l:Zi(s.mode)(l)}}Be(HI);Be(rO);Be(nO);Be(oO);Be(aO);Be(B$);Be(j$);Be(bO);Be(yO);Be(kO);Be(xO);Be(kg);Be(AO);Be(xg);Be(CO);Be(RO);Be(LO);Be(jO);Be(zO);Be(VO);Be(WO);Be(GO);Be(HO);Be(ZO);Be(XO);Be(va);Be(tB);Be(rB);Be(iB);Be(lB);const bB=tO("rgb");class $o{constructor(t){this.set(t)}static isValidColorString(t){try{return new $o(t),!0}catch{return!1}}static isColor(t){return t instanceof $o}static deserialize(t){const r=JSON.parse(t),n=new $o("black");return Sn(r).forEach(([o,i])=>{o==="originalColorSyntax"?n.originalColorSyntax=Ut.isEnumValue(i,pe,"Cannot deserialize: invalid color syntax."):n._allColors[o]=i}),n}getRgbDistance(t){return bB(this.#e,t)}getClosestNamedColor(){return je(Sl).reduce((t,r)=>{const n=this.getRgbDistance(r);return n<t.distance?{distance:n,name:r}:t},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=pe.hex;#e=Ut.isDefined(hh("black"));_allColors={names:["black"],[pe.name]:"black",hexString:"#000000",[pe.hex]:{r:0,g:0,b:0},[pe.rgb]:{r:0,g:0,b:0},[pe.hsl]:{h:0,s:0,l:0},[pe.hwb]:{h:0,w:0,b:0},[pe.lab]:{l:0,a:0,b:0},[pe.lch]:{l:0,c:0,h:0},[pe.oklab]:{l:0,a:0,b:0},[pe.oklch]:{l:0,c:0,h:0}};clone(){return $o.deserialize(this.serialize())}setByString(t){const r=hh(t);if(!r)throw new Error(`Unable to parse invalid color string: '${t}'`);this.originalColorSyntax=DI(t),this.#e=r,this.pullFromInternalColor()}set(t){if(C.isString(t))return this.setByString(t);if(Dt.isLengthExactly(Object.keys(t),1,`Cannot set multiple color formats at once: got '${k2(Object.keys(t))}'`),t.hexString||t.name)this.setByString(t.hexString||t.name);else{const[r,n]=Ut.isDefined(Sn(t)[0]),o=Wn[r],i=Object.values(rt(o.coords,s=>{const a=n[s],l=o.coords[Ut.isKeyOf(s,o.coords)],c=a!=null&&a>=l.min&&a<=l.max?n[s]:this[r][s];return Ut.isDefined(c)}));this.setByString(`${o.conversionFormat}(${i.join(" ")})`)}}pullFromInternalColor(){br(oi).forEach(t=>{const r=Wn[t],n=r.conversionFormat,o=C.isKeyOf(this.#e.mode,Wn)?Wn[this.#e.mode]:void 0,i=pB(r.colorSpace===o?.colorSpace?n:"rgb")(Zi(n)(this.#e));i||Dt.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${t}'.`),je(this[t]).forEach(s=>{const a=i[s],l=r.coords[Ut.isKeyOf(s,r.coords)];a!=null&&(this._allColors[t][s]=w2((a||0)*(l.factor||1),{digits:l.digits||0}))})}),this._allColors.hexString=fB(this.#e),this._allColors.names=yB(this.rgb),this._allColors[pe.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return xn(this._allColors)}toFormattedStrings(){return{...rt(Wn,r=>Object.values(this[r]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(j1," "),[pe.name]:(this.names[0]||"").padEnd(j1," "),[pe.hexString]:this[pe.hexString]}}toCss(){return{...rt(Wn,r=>{const n=Object.values(this[r]);return`${r}(${n.join(" ")})`}),[pe.hexString]:this[pe.hexString],[pe.name]:this.names[0]||""}}get names(){return xn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[pe.hexString]}get hex(){return xn(this._allColors[pe.hex])}get rgb(){return xn(this._allColors[pe.rgb])}get hsl(){return xn(this._allColors[pe.hsl])}get hwb(){return xn(this._allColors[pe.hwb])}get lab(){return xn(this._allColors[pe.lab])}get lch(){return xn(this._allColors[pe.lch])}get oklab(){return xn(this._allColors[pe.oklab])}get oklch(){return xn(this._allColors[pe.oklch])}}function yB(e){return Rn(Sn(Sl),([t])=>t,(t,[,r])=>C.deepEquals(r,[e.r,e.g,e.b]))}function _r(e){return D`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}const e0=Un()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:({cssVars:e})=>D`
        :host {
            display: flex;
            align-items: center;
            font-family: ${mg["vira-monospace"].value};
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

        ${Ee} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,events:{valueChange:Xe()},render({inputs:e,events:t,dispatch:r,cssVars:n}){const o=Wn[e.colorFormatName],i=o.coords[e.colorCoordinateName];if(!i)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,a=N3(s,f=>{const h=i.min+(i.max-i.min)*(f/s);return new $o({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:h}}).toCss()[o.conversionFormat]}),l=D`linear-gradient(to right, ${he(a.join(","))})`,c=Ut.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),d=i.radix?Math.round(c).toString(i.radix).toUpperCase().padStart(i.radixPad||0,"0"):String(c);return g`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${D`
                    ${n["vir-color-slider-gradient"].name}: ${l};
                `}
                step=${Math.pow(10,i.digits?-i.digits:0)}
                ${pN(f=>{Dt.instanceOf(f,HTMLInputElement),f.min=String(i.min),f.max=String(i.max),f.value=String(c)})}
                ${j("input",f=>{const h=yd(f,HTMLInputElement),m=Number(h.value);isNaN(m)||r(new t.valueChange(m))})}
            />
            <${Ee.assign({value:d})}
                ${j(Ee.events.valueChange,f=>{const h=i.radix?parseInt(f.detail,i.radix):Number(f.detail);isNaN(h)||r(new t.valueChange(h))})}
            ></${Ee}>
        `}}),t0=Un()({tagName:"vir-color-format-sliders",styles:D`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${eu};
        }
    `,events:{colorChange:Xe()},render({inputs:e,dispatch:t,events:r}){const n=Wn[e.colorFormatName],o=je(n.coords).map(i=>g`
                    <${e0.assign({color:e.color,colorCoordinateName:i,colorFormatName:e.colorFormatName})}
                        ${j(e0.events.valueChange,s=>{const a=e.color.clone();a.set({[e.colorFormatName]:{[i]:s.detail}});const l=a.toCss()[n.conversionFormat];t(new r.colorChange(l))})}
                    ></${e0}>
                `);return g`
            ${e.showFormatName?g`
                      <h3>${e.colorFormatName}</h3>
                  `:ee}
            ${o}
        `}}),r0=Un()({tagName:"vir-color-swatch",styles:D`
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
                style=${D`
                    background-color: ${he(t)};
                    color: ${he(r)};
                `}
            >
                <slot></slot>
            </div>
        `}}),n0=Un()({tagName:"vir-contrast-indicator",styles:D`
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

        .${he(ae.Invisible)} {
            color: red;
        }
        .${he(ae.Decoration)} {
            color: #ff6600;
        }
        .${he(ae.Placeholder)} {
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
    `,render({inputs:e}){const t=$d.toReversed().slice(1).map(o=>g`
                    <div
                        class="gauge-level ${tr({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return g`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${zP[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),cy=Un()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Sr};
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
            font-family: ${mg["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${eu};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${n0} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(a=>{const l=[r.color[a].name,r.showVarValues||e.forceShowEverything?":":""].filter(C.isTruthy).join(""),c=r.showVarValues||e.forceShowEverything?g`
                          <span>${r.color[a].default}</span>
                      `:ee;return g`
                <p>
                    <span>${l}</span>
                    ${c}
                </p>
            `}),o=r.showVarNames||e.forceShowEverything?g`
                      <div class="css-var-names">${n}</div>
                  `:ee,i=e.previewElement?jP({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=i&&(r.showContrast||e.forceShowEverything)?g`
                      <${n0.assign({contrast:i,fontWeight:r.fontWeight})}></${n0}>
                  `:ee;return g`
            <button
                ${j("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${Ki(a=>{t({previewElement:Ut.instanceOf(a,HTMLElement)})})}
                class="color-preview"
                style=${D`
                    color: ${he(r.color.foreground.default)};
                    background: ${he(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${D`
                                visibility: ${he((i?.fontSizes[400]||1/0)>150?"hidden":"visible")};
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
        `}});class vB{shapes;options;constructor(t,r={}){this.shapes=t,this.options=r,this.storeName=r.storeName||"local-storage-client",this.get=rt(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.set=rt(this.shapes,n=>o=>{bc(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const i=this.getAllValues();return i[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(i)),o}),this.delete=rt(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o))})}storeName;getAllValues({throwErrorOnFailure:t=!1}={}){return h2(()=>{const r=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return m2(r,(n,o)=>{const i=this.shapes[n];if(i){if(t)bc(o,i,{allowExtraKeys:!0});else if(!Wo(o,i,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:r=>{if(t)throw ta(r,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const o0=new vB({lastFormat:qi(oi)}),wB=hl(oi).map(e=>({value:e,label:e.toUpperCase()})),Ia=Un()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:Us.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:Us.Length}},state(){return{selectedFormatName:o0.get.lastFormat()||oi.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>D`
        :host {
            display: inline-flex;
        }

        ${t["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${Sr}
            cursor: pointer;
            display: flex;
        }

        ${fe} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${r0} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${mg["vira-monospace"].value};
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
            ${Bi.menuShadow}
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

            & ${Ee} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:Xe()},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=$o.isColor(e.color)?e.color:new $o(e.color||"black"),s=Wn[n.selectedFormatName],a=n.rawInput??i.toCss()[s.rawSyntax],l=g`
            <div class="raw-input-wrapper">
                <${Ee.assign({value:a})}
                    ${j(Ee.events.valueChange,h=>{const m=h.detail;o({rawInput:m}),$o.isValidColorString(m)&&t(new r.colorChange(m))})}
                ></${Ee}>
                <button
                    class="code-button"
                    ${j("click",async()=>{await globalThis.navigator.clipboard.writeText(a)})}
                >
                    <${I.assign({icon:rh,fitContainer:!0})}></${I}>
                </button>
            </div>
        `,c=g`
            <button
                class="code-button"
                ${j("click",async()=>{await globalThis.navigator.clipboard.writeText(i.hexString)})}
            >
                <span>${i.hexString}</span>
                <${I.assign({icon:rh,fitContainer:!0})}></${I}>
            </button>
        `,d=g`
            <div class="swatch-wrapper">
                <${r0.assign({backgroundColor:i})}></${r0}>
                ${e.showHexValue?c:ee}
            </div>
        `,f=g`
            <div class="picker">
                <${_e.assign({options:wB,value:n.selectedFormatName})}
                    ${j(_e.events.valueChange,h=>{const m=Rh.isEnumValue(h.detail,oi);m&&(o({selectedFormatName:m}),o0.set.lastFormat(m))})}
                ></${_e}>
                ${l}
                <${t0.assign({color:i,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${j(t0.events.colorChange,h=>{t(new r.colorChange(h.detail)),o({rawInput:void 0})})}
                ></${t0}>
            </div>
        `;return e.alwaysShowPicker?g`
                ${d} ${f}
            `:g`
                <${fe.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${fe.slotNames.trigger}
                        ${j("mousedown",()=>{const h=o0.get.lastFormat();h&&o({selectedFormatName:h})})}
                    >
                        ${d}
                    </button>
                    <div class="pop-up" slot=${fe.slotNames.popUp}>
                        ${f}
                    </div>
                </${fe}>
            `}}),Su="None";function $B({parent:e,title:t,theme:r,hideInverseColors:n,overrides:o,useVerticalLayout:i,prefixGroupByCount:s=2,hideCopyCode:a}){const l={"Show Var Names":{controlType:X.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:X.Checkbox,initValue:!0}},c={"Theme Override":{controlType:X.Dropdown,initValue:Su,options:[Su,...(o||[]).map(k=>{if(k.name===Su)throw new Error(`Cannot have theme override named '${Su}'`);return k.name})]}},d=Fe({parent:e,title:t,controls:l});function f({controls:k,theme:x,themeColorName:E}){const N=C.isKeyOf(E,x.colors)?x.colors[E]:void 0,R=C.isKeyOf(E,x.inverse)?x.inverse[E]:void 0;if(!N||!R)throw new Error(`No theme color found by name '${E}'`);const q=g`
            <${cy.assign({color:N,showVarValues:!0,showVarNames:k["Show Var Names"],showContrast:k["Show Contrast Tips"],fontWeight:400})}></${cy}>
        `;return g`
            <div class="with-inverse">${q}${ee}</div>
        `}function h(k,x,E){const N=T3(Object.keys(x.colors),R=>s?R.split("-").slice(0,s).join("-"):R);Object.entries(N).forEach(([R,q])=>{q&&k({title:R,styles:D`
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
                    `,render({controls:ie}){const me=("Theme Override"in ie&&ie["Theme Override"]&&E?.find(De=>De.name===ie["Theme Override"])||void 0)?.asTheme||x;return g`
                            <div class="theme-wrapper">
                                ${q.map(De=>f({controls:ie,theme:me,themeColorName:De}))}
                            </div>
                        `}})})}const m=["Click a color preview to show CSS var names and values."],y=Fe({parent:d,title:"Default",descriptionParagraphs:m,useVerticalExamples:i,controls:{...c},defineExamples({defineExample:k}){h(k,r,o)}}),$=(o||[]).map(k=>Fe({parent:d,title:k.name,useVerticalExamples:i,descriptionParagraphs:m,defineExamples({defineExample:x}){h(x,k.asTheme,void 0)}}));return[d,y,...$]}function kB(e){if(!C.hasKey(T1,e))throw new Error(`No ViraTag color for variant '${e}'`);const t=T1[e];return D`
        :host(
                .vira-tag-color-${he(e)}.vira-tag-emphasis-${he(zo.Standard)}
            )
            button {
            ${_r(ar[t]["behind-bg"][ae.NonBodyText])}
            border-color: ${ar[t]["behind-bg"][ae.NonBodyText].background.value};

            &:hover {
                ${_r(ar[t]["behind-bg"][ae.Header])}
                border-color: ${ar[t]["behind-bg"][ae.Header].background.value};
            }
            &:active {
                ${_r(ar[t]["behind-bg"][ae.NonBodyText])}
                border-color: ${ar[t]["behind-bg"][ae.NonBodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${he(e)}.vira-tag-emphasis-${he(zo.Subtle)}
            )
            button {
            ${_r(ar[t]["on-self"][ae.BodyText])}
            border-color: ${ar[t]["on-self"][ae.BodyText].background.value};

            &:hover {
                ${_r(ar[t]["on-self"][ae.NonBodyText])}
                border-color: ${ar[t]["on-self"][ae.NonBodyText].background.value};
            }
            &:active {
                ${_r(ar[t]["on-self"][ae.BodyText])}
                border-color: ${ar[t]["on-self"][ae.BodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${he(e)}.vira-tag-not-checked.vira-tag-not-checked.vira-tag-not-checked
            )
            button {
            color: ${ar[t]["on-self"][ae.BodyText].foreground.value};
            background-color: transparent;
            border-color: ${ar[t]["on-self"][ae.BodyText].background.value};

            &:hover {
                background-color: ${ar[t]["behind-bg"][ae.Invisible].background.value};
            }
            &:active {
                background-color: ${ar[t]["behind-bg"][ae.Decoration].background.value};
            }
        }
    `}function xB(){return he([cn.Accent,cn.Danger,cn.Neutral,cn.Positive,cn.Warning].map(e=>kB(e)).join(" "))}const Oa=Qe()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"white","vira-tag-background-color":"black","vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:Xe(),cancel:Xe()},hostClasses:{"vira-tag-selectable":({inputs:e})=>C.isBoolean(e.isClickable?.selected),"vira-tag-checked":({inputs:e})=>!!e.isClickable?.selected,"vira-tag-not-checked":({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-cancellable":({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-not-clickable":({inputs:e})=>!e.isClickable,"vira-tag-disabled":({inputs:e})=>!!e.disabled,"vira-tag-size-large":({inputs:e})=>e.size===Di.Large,"vira-tag-size-medium":({inputs:e})=>!e.size||e.size===Di.Medium,"vira-tag-size-small":({inputs:e})=>e.size===Di.Small,"vira-tag-emphasis-standard":({inputs:e})=>!e.emphasis||e.emphasis===zo.Standard,"vira-tag-emphasis-subtle":({inputs:e})=>e.emphasis===zo.Subtle,"vira-tag-color-accent":({inputs:e})=>!e.color||e.color===cn.Accent,"vira-tag-color-plain":({inputs:e})=>e.color===cn.Plain,"vira-tag-color-neutral":({inputs:e})=>e.color===cn.Neutral,"vira-tag-color-danger":({inputs:e})=>e.color===cn.Danger,"vira-tag-color-warning":({inputs:e})=>e.color===cn.Warning,"vira-tag-color-positive":({inputs:e})=>e.color===cn.Positive},styles:({cssVars:e,hostClasses:t})=>D`
        :host {
            display: inline-flex;
        }

        button {
            ${Sr}
            flex-shrink: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: ${e["vira-tag-gap"].value};
            border-radius: ${e["vira-tag-border-radius"].value};
            border-width: ${e["vira-tag-border-width"].value};
            border-style: solid;
            border-color: transparent;
            color: ${e["vira-tag-text-color"].value};
            background-color: ${e["vira-tag-background-color"].value};
            box-sizing: border-box;
            padding: 0 ${e["vira-tag-horizontal-padding"].value};

            &[disabled] {
                cursor: default;
                pointer-events: none;
            }
        }

        .cancel-x,
        .selected-check,
        .text {
            height: 0;
            display: flex;
            align-items: center;
        }

        .cancel-x {
            display: none;
            margin-right: -2px;
        }

        .selected-check {
            margin-left: -2px;
            display: none;
            visibility: hidden;
        }

        ${t["vira-tag-selectable"].selector} .selected-check {
            display: flex;
        }
        ${t["vira-tag-checked"].selector} .selected-check {
            visibility: visible;
        }
        ${t["vira-tag-cancellable"].selector} .cancel-x {
            display: flex;
        }
        ${t["vira-tag-size-large"].selector} button {
            height: ${Ef[Di.Large]}px;
            font-size: ${T["vira-form-large-text-size"].value};
            padding: 0 var(${e["vira-tag-horizontal-padding"].name}, 16px);
        }
        ${t["vira-tag-size-medium"].selector} button {
            height: ${Ef[Di.Medium]}px;
            font-size: ${T["vira-form-medium-text-size"].value};
        }
        ${t["vira-tag-size-small"].selector} button {
            height: ${Ef[Di.Small]}px;
            font-size: ${T["vira-form-small-text-size"].value};
        }

        ${xB()}

        :host(.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}) {
            cursor: not-allowed;
            ${ni}

            & button {
                ${_r(se.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${se.colors["vira-grey-behind-bg-decoration"].background.value}
            }

            &.${t["vira-tag-emphasis-subtle"].name} button {
                ${_r(se.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${se.colors["vira-grey-behind-bg-decoration"].background.value}
            }
        }

        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${he(zo.Standard)}
            )
            button {
            ${_r(se.inverse[Fr])};
            border-color: ${se.inverse[Fr].background.value};

            &:hover {
                ${_r(se.colors["vira-grey-behind-bg-non-body"])};
                border-color: ${se.colors["vira-grey-behind-bg-non-body"].background.value};
            }
            &:active {
                ${_r(se.inverse[Fr])};
                border-color: ${se.inverse[Fr].background.value};
            }
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${he(zo.Subtle)}
            )
            button {
            background-color: transparent;
            color: ${se.colors[Fr].foreground.value};
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            color: ${se.colors[Fr].foreground.value};
            background-color: transparent;
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${he(zo.Subtle)}
            )
            button,
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            &:hover {
                ${_r(se.colors["vira-grey-behind-fg-small-body"])}
                border-color: ${se.colors["vira-grey-behind-fg-small-body"].background.value};
            }
            &:active {
                ${_r(se.colors["vira-grey-behind-fg-body"])}
                border-color: ${se.colors["vira-grey-behind-fg-body"].background.value};
            }
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=!e.isClickable||!!e.disabled;return g`
            <button
                ?disabled=${n}
                ${j("click",()=>{n||(e.isClickable?.selected!=null?t(new r.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&t(new r.cancel))})}
            >
                <${I.assign({icon:o$})}
                    class="selected-check"
                ></${I}>
                <span class="text">${String(e.text)}</span>
                <${I.assign({icon:i$})}
                    class="cancel-x"
                ></${I}>
            </button>
        `}});function tk(e){return lN({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function rk(e,{ready:t,loading:r,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(i=>({[i.key]:i.element}))):t({[e.value.key]:e.value.element})}const tn=K5(),dn=tn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:({cssVars:e})=>D`
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
                ${j("click",n=>{(!e.router||n$(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new wc(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function DB(e,t){return e.entry.entryType===Yt.Root?!1:e.entry.entryType===Yt.Page||C.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:C.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const vs=tn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Se["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Se["element-book-nav-hover-background-color"].value};
            color: ${Se["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Se["element-book-nav-active-background-color"].value};
            color: ${Se["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${dn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Se["element-book-nav-selected-background-color"].value};
            color: ${Se["element-book-nav-selected-foreground-color"].value};
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
            color: ${Se["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!DB(r,e.selectedPath))return;const n=D`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${n}>
                    <${dn.assign({router:e.router,route:{paths:[Mr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${tr({"title-row":!0,selected:e.selectedPath?C.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Pr(Ts(r,Yt.ElementExample),g`
                                    <${I.assign({icon:a$})}></${I}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${dn}>
                </li>
            `});return g`
            <${dn.assign({route:js,router:e.router})}>
                <slot name=${Zn.NavHeader}>Book</slot>
            </${dn}>
            <ul>
                ${t}
            </ul>
        `}}),ai=tn()({tagName:"book-error",styles:D`
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
    `,render({inputs:e}){return(C.isArray(e.message)?e.message:[e.message]).map(r=>g`
                <p>${r}</p>
            `)}}),Nl=tn()({tagName:"book-page-controls",events:{controlValueChange:Xe()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Se["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Ee}, ${_e} {
            height: 24px;
            max-width: 128px;
        }

        ${I}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===X.Hidden)return"";const s=AB(e.currentValues[n],o,a=>{const l=C.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...Object.fromEntries(Object.keys(e.config).map(c=>[c,e.currentValues[c]])),[n]:a}}))});return g`
                    <div class="control-wrapper">
                        ${Pr(i===0,g`
                                <${I.assign({icon:nl})}
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
                `}):""}});function AB(e,t,r){return $i(t,X.Hidden)?"":$i(t,X.Checkbox)?g`
            <${ue.assign({value:!!e})}
                ${j(ue.events.valueChange,n=>{r(n.detail)})}
            ></${ue}>
        `:$i(t,X.Color)?g`
            <${Ia.assign({color:e})}
                style=${D`
                    ${Ia.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${Ia.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${j(Ia.events.colorChange,n=>{r(n.detail)})}
            ></${Ia}>
        `:$i(t,X.Text)?g`
            <${Ee.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${j(Ee.events.valueChange,n=>{r(n.detail)})}
            ></${Ee}>
        `:$i(t,X.Number)?g`
            <${Ee.assign({value:e,allowedInputs:/[\d.]/})}
                ${j(Ee.events.valueChange,n=>{r(n.detail)})}
            ></${Ee}>
        `:$i(t,X.Dropdown)?g`
            <${_e.assign({value:e,options:t.options.map(n=>({label:n,value:n}))})}
                ${j(_e.events.valueChange,n=>{r(n.detail)})}
            ></${_e}>
        `:$i(t,X.Custom)?t.content:g`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const dy=tn()({tagName:"book-breadcrumbs",styles:D`
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
                <${dn.assign({route:{hash:void 0,search:void 0,paths:[Mr.Book,...s]},router:e.router})}>
                    ${r}
                </${dn}>
                ${a}
            `}):g`
                &nbsp;
            `}}),i0=tn()({tagName:"book-breadcrumbs-bar",styles:D`
        :host {
            border-bottom: 1px solid
                ${Se["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Se["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return g`
            ${Pr(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${dy.assign({currentRoute:e.currentRoute,router:e.router})}></${dy}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${j("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await ji({milliseconds:200}),n.value===o&&(n.value?t(new wc({paths:[Mr.Search,encodeURIComponent(n.value)]})):t(new wc(js)))})}
            />
        `}}),fy=tn()({tagName:"book-entry-description",styles:D`
        :host {
            color: ${Se["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Se["element-book-page-foreground-color"].value};
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
            `)}}),hy=tn()({tagName:"book-page-wrapper",styles:D`
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

        ${dn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?g`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:g`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Mr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?f2(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?t:g`
                  <${dn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${dn}>
              `;return g`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?g`
                              <${ai.assign({message:n.message})}></${ai}>
                          `:g`
                              <${fy.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${fy}>
                              <${Nl.assign({config:e.pageNode.entry.controls,currentValues:Wh(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Nl}>
                          `}
                </div>
            </div>
        `}}),Tu=tn()({tagName:"book-element-example-title",styles:D`
        :host {
            display: flex;
            color: ${Se["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[Mr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${dn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${dn}>
        `}}),my=Symbol("unset-internal-state"),gy=tn()({tagName:"book-element-example-viewer",state(){return{isUnset:my}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw f2(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===my&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return g`
                ${Pr(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Wt(n)),console.error(n),g`
                <${ai.assign({message:`${t.elementExampleNode.entry.title} failed: ${Wt(n)}`})}></${ai}>
            `}},options:{allowPolymorphicState:!0}}),py=tn()({tagName:"book-element-example-wrapper",styles:D`
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

        ${Tu} {
            color: ${Se["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Tu} {
            color: ${Se["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${Tu.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${Tu}>
                <${gy.assign(e)}></${gy}>
            </div>
        `}}),EB={milliseconds:10};let Ka;const Mc=new Map,Fi=new Map;function CB(){return Ka||(Ka=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Mc.get(r);if(n)if(t.isIntersecting){if(!Fi.has(r)){const o=globalThis.setTimeout(()=>{Fi.delete(r),n(),Ka?.unobserve(r),Mc.delete(r)},Rs(EB,{milliseconds:!0}).milliseconds);Fi.set(r,o)}}else{const o=Fi.get(r);o&&(clearTimeout(o),Fi.delete(r))}}},{rootMargin:"100px"})),Ka}function by(e){const t=Fi.get(e);t&&(clearTimeout(t),Fi.delete(e)),Mc.delete(e),Ka?.unobserve(e)}const Nu=tn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:D`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&by(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:g`
            <div
                class="placeholder"
                ${Ki(n=>{t.placeholderElement&&by(t.placeholderElement),r({placeholderElement:n}),Mc.set(n,()=>{r({hasRendered:!0})}),CB().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function nk(e,t,r,n){const o=F0(r,n),i=[];if(o){const s=nk(e,t,o,n);s&&i.push(s)}if(Ts(r,Yt.Page)&&!e.includes(r)){const s=Wh(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:s,breadcrumbs:rt(s,()=>r.fullUrlBreadcrumbs)})}return i.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function FB({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:o,controls:i,originalTree:s}){if(!t.length&&o)return[g`
                No results
            `];const a=C.isLengthAtLeast(t,1)?nk(t,i,t[0],s):void 0,l=a&&Object.values(a.config).length&&C.isLengthAtLeast(t,1)?g`
                  <${Nl.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Nl}>
              `:ee,c=cN(t,d=>d.fullUrlBreadcrumbs.join(">"),d=>{if(Ts(d,Yt.Page))return g`
                    <${hy.assign({blockNavigation:e,isTopLevel:r,pageNode:d,controls:i,router:n})}
                        class="block-entry"
                    ></${hy}>
                `;if(Ts(d,Yt.ElementExample)){const f=Wh(i,d.fullUrlBreadcrumbs.slice(0,-1)),h=g`
                    <${py.assign({blockNavigation:e,elementExampleNode:d,currentPageControls:f,router:n})}></${py}>
                `;return g`
                    <${Nu.assign({content:h})}
                        class="inline-entry ${tr({"block-entry":d.entry.isVertical})}"
                    ></${Nu}>
                `}else{if(Ts(d,Yt.Root))return ee;{const f=g`
                    <${ai.assign({message:`Unknown entry type for rendering: '${d.entry.entryType}'`})}></${ai}>
                `;return g`
                    <${Nu.assign({content:f})}
                        class="block-entry"
                    ></${Nu}>
                `}}});return[l,c]}const ws=tn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:D`
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

        ${i0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${xo["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Xe()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=F2(e.currentRoute.paths),s=FB({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return g`
            <${i0.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${i0}>

            ${Pr(e.showLoading,g`
                    <div
                        ${Ki(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${I.assign({icon:Gi})}></${I}>
                    </div>
                    ${Pr(!!n.lastElement,g`
                            ${n.lastElement}
                            <slot name=${Zn.Footer}></slot>
                        `)}
                `,g`
                    <div
                        ${Ki(a=>{o({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${Zn.Footer}></slot>
                `)}
        `}});function MB(e,t,r){const n=yy(e,t);return n.length?n:(r(js),yy(e,js.paths))}function yy(e,t){return e.filter(r=>i6({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const s0=Un()({tagName:"element-book-app",state(){return{currentRoute:js,router:void 0,loading:!0,colors:{config:void 0,theme:b1(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:Xe()},styles:D`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Se["element-book-page-background-color"].value};
            color: ${Se["element-book-page-foreground-color"].value};
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

        ${ws} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${vs} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{t._debug&&console.info("rendering element-book app");function s(d){return{...e.currentRoute,...d}}function a(d){const f=s(d);return!C.jsonEquals(e.currentRoute,f)}function l(d){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,d].filter(C.isTruthy).join(" - "))}function c(d){if(!a(d))return;const f=s(d);e.router?e.router.setRoute(f):n({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!C.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!C.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const x=YN(t.internalRouterConfig.basePath);n({router:x}),x.listen(!0,E=>{n({currentRoute:E})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const d={themeColor:t.themeColor};if(!C.jsonEquals(d,e.colors.config)){const x=b1(d);n({colors:{config:d,theme:x}}),_6(r,x)}const f=t._debug??!1,h=d6({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:C2(h.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=F2(e.currentRoute.paths),$=(m?jN({flattenedNodes:h.flattenedNodes,searchQuery:m}):void 0)??MB(h.flattenedNodes,e.currentRoute.paths,c);l($[0]?.entry.title);const k=e.treeBasedControls?.controls;return k?(t._debug&&console.info({currentControls:k}),g`
                <div
                    class="root"
                    ${j(wc,x=>{const E=x.detail;if(!a(E))return;if(n({loading:!0}),c(E),!(r.shadowRoot.querySelector(vs.tagName)instanceof vs))throw new TypeError(`Failed to find child '${vs.tagName}'`)})}
                    ${j(Nl.events.controlValueChange,x=>{if(!e.treeBasedControls)return;const E=h6(k,x.detail.fullUrlBreadcrumbs,x.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:E}})})}
                >
                    ${t.blockNavigation?ee:g`
                              <${vs.assign({flattenedNodes:h.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot
                                      name=${Zn.NavHeader}
                                      slot=${Zn.NavHeader}
                                  ></slot>
                              </${vs}>
                          `}
                    <${ws.assign({blockNavigation:!!t.blockNavigation,controls:k,currentNodes:$,currentRoute:e.currentRoute,debug:f,originalTree:h.tree,router:e.router,showLoading:e.loading})}
                        ${j(ws.events.loadingRender,async x=>{await y1();const E=r.shadowRoot.querySelector(ws.tagName);E?E.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${ws.tagName}' for scrolling.`),await y1(),n({loading:!x.detail})})}
                    >
                        <slot
                            name=${Zn.Footer}
                            slot=${Zn.Footer}
                        ></slot>
                    </${ws}>
                </div>
            `):g`
                    <${ai.assign({message:"Failed to generate page controls."})}></${ai}>
                `}catch(d){return console.error(d),g`
                <p class="error">${Wt(d)}</p>
            `}}}),ct=Fe({title:"Elements",parent:void 0}),Eg=Fe({title:"Styles",parent:void 0}),Cg=Fe({title:"Util",parent:void 0}),SB=Fe({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:X.Color,initValue:""},"Fill Color":{controlType:X.Color,initValue:""},"Stroke Width":{controlType:X.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(oh).forEach(t=>{e({title:t.name,styles:D`
                    :host(:hover) ${I} {
                        background-color: #f2f2f2;
                    }

                    ${I} {
                        padding: 8px;
                        border-radius: ${T["vira-form-radius"].value};
                    }
                `,render({controls:r}){const n=D`
                        ${b["vira-icon-fill-color"].name}: ${he(r["Fill Color"]||"inherit")};
                        ${b["vira-icon-stroke-color"].name}: ${he(r["Stroke Color"]||"inherit")};
                        ${b["vira-icon-stroke-width"].name}: ${he(r["Stroke Width"]?fl(r["Stroke Width"]):"inherit")};
                    `;return g`
                        <${I.assign({icon:t})} style=${n}></${I}>
                    `}})})}}),TB=$B({parent:Eg,theme:se,title:"Vira Theme",hideInverseColors:!0,overrides:[PP],hideCopyCode:!0}),NB=Fe({title:an.name,parent:Cg,descriptionParagraphs:["Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){e({title:"stroke color",styles:D`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=an(It,{"vira-icon-stroke-color":"red"});return g`
                    <${I.assign({icon:It})}></${I}>
                    <span>→</span>
                    <${I.assign({icon:t})}></${I}>
                `}}),e({title:"fill color",styles:D`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=an(nh,{"vira-icon-fill-color":"gold","vira-icon-stroke-color":"orange"});return g`
                    <${I.assign({icon:nh})}></${I}>
                    <span>→</span>
                    <${I.assign({icon:t})}></${I}>
                `}}),e({title:"stroke width",styles:D`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=an(qa,{"vira-icon-stroke-color":"green","vira-icon-stroke-width":"3px"});return g`
                    <${I.assign({icon:qa})}></${I}>
                    <span>→</span>
                    <${I.assign({icon:t})}></${I}>
                `}}),e({title:"with CSS var values",styles:D`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=an(qa,{"vira-icon-stroke-color":`${T["vira-form-error-color"].value}`}),r=an(qa,{"vira-icon-stroke-color":`${T["vira-form-success-color"].value}`});return g`
                    <${I.assign({icon:t})}></${I}>
                    <${I.assign({icon:r})}></${I}>
                `}}),e({title:"multiple icons with different colors",styles:D`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,render(){const t=an(It,{"vira-icon-stroke-color":"red"}),r=an(It,{"vira-icon-stroke-color":"dodgerblue"}),n=an(It,{"vira-icon-stroke-color":"green"}),o=an(It,{"vira-icon-stroke-color":"purple"});return g`
                    <${I.assign({icon:t})}></${I}>
                    <${I.assign({icon:r})}></${I}>
                    <${I.assign({icon:n})}></${I}>
                    <${I.assign({icon:o})}></${I}>
                `}})}}),ok={async element1(){return await ji({seconds:2}),(await Qu(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-k8Q1Rzms.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await ji({seconds:2}),(await Qu(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-Bw3mdp3p.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},vy=Un()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:tk(ok)}},render({state:e,inputs:t}){return rk(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return g`
                    <${Ri}>
                        ${Ji("Failed to import element",Wt(r))}
                    </${Ri}>
                `},loading(){return g`
                    <${I.assign({icon:Gi})}></${I}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Dt.never("The error element will always error")}})}}),wy=Un()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:tk(ok)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),rk(e.dynamicElements,{error(r){return g`
                    <${Ri}>
                        ${Ji("Failed to import element",Wt(r))}
                    </${Ri}>
                `},loading(){return g`
                    <${I.assign({icon:Gi})}></${I}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Dt.never("The error element will always error")}})}}),$y=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],PB=Fe({parent:Cg,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:D`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${_e.assign({value:String(t.value),options:$y})}
                        ${j(_e.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${_e}>
                    <${vy.assign({numberValue:t.value})}></${vy}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:D`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${_e.assign({value:String(t.value),options:$y})}
                        ${j(_e.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${_e}>
                    <${wy.assign({numberValue:t.value})}></${wy}>
                `}})}}),IB=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:g`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:D`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:D`
            ${Ur} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],OB=Fe({title:Ur.tagName,parent:ct,controls:{Selected:{controlType:X.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:X.Text,initValue:""}},defineExamples({defineExample:e}){IB.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?g`
                            <${Ur.assign(n)}>
                                ${t.customTemplate}
                            </${Ur}>
                        `:g`
                            <${Ur.assign(n)}></${Ur}>
                        `}})})}}),vh=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new dg({sanitizeRoute(e){return e}})}}],BB=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:pg.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...vh,{id:"long",label:g`
                        <${Ur.assign({selected:!1})}>
                            <div
                                style=${D`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${Ur}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:Zo.Both,items:[...vh,{id:"long",label:g`
                        <${Ur.assign({selected:!1})}>
                            <div
                                style=${D`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${Ur}>
                    `}]}}],RB=Fe({parent:ct,title:Vo.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){BB.forEach(t=>{e({title:t.title,styles:D`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${Vo.assign({items:vh,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${Vo}>
                    `}})})}}),wh=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],LB=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...wh,{id:4,label:"link here",route:{route:{paths:["test"]},router:new dg({sanitizeRoute(e){return e}})}}]}},{title:"with multi selection",inputs:{isMultiSelect:!0,selected:[2]}},{title:"with custom template",inputs:{items:[...wh,{id:4,disableDefaultPointerStyles:!0,label:g`
                        <span
                            style=${D`
                                color: blue;
                            `}
                        >
                            Custom Item
                        </span>
                    `}]}}],jB=Fe({parent:ct,title:il.tagName,defineExamples({defineExample:e}){LB.forEach(t=>{e({title:t.title,render(){return g`
                        <${il.assign({isMultiSelect:!1,navController:void 0,items:wh,selected:[],...t.inputs})}></${il}>
                    `}})})}}),ik=[];br(kc).forEach(e=>{br(pg).forEach(t=>{ik.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const _B=Fe({parent:ct,title:sl.tagName,defineExamples({defineExample:e}){ik.forEach(t=>{e({title:t.title,styles:D`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${sl.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${sl}>
                    `}})})}}),UB=Fe({parent:ct,title:fe.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:D`
                ${fe} {
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
                    <${fe.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${fe.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>Pop up!</div>
                    </${fe}>
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
            `,render(){return g`
                    <${fe.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${fe.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${fe}>
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
            `,render(){return g`
                    <${fe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Zo.Right})}>
                        <div slot=${fe.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${fe}>
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
            `,render(){return g`
                    <${fe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Zo.Left})}>
                        <div slot=${fe.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${fe}>
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
            `,render(){return g`
                    <${fe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Zo.Right})}>
                        <div slot=${fe.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>not long</div>
                    </${fe}>
                `}}),e({title:"ignoreMaxWidth wide content",styles:D`
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
                        <${fe.assign({keepOpenAfterInteraction:!0})}>
                            <div class="trigger" slot=${fe.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${fe.slotNames.popUp}>
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
                        </${fe}>
                    </div>
                `}})}}),zB=[{title:"menu shadow",styles:Bi.menuShadow},{title:"menu shadow reversed",styles:Bi.menuShadowReversed},{title:"modal",styles:Bi.modal}],VB=Fe({parent:Eg,title:"Shadows",defineExamples({defineExample:e}){zB.forEach(t=>{e({title:t.title,styles:D`
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
                    `}})})}}),qB=Fe({parent:ct,title:dt.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:X.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return g`
                    <${dt.assign({text:"Text here",bold:!1})}></${dt}>
                `}}),e({title:"Bold",render(){return g`
                    <${dt.assign({text:"Text here",bold:!0})}></${dt}>
                `}}),e({title:"Dynamic",render({controls:t}){return g`
                    <${dt.assign({text:"Text here",bold:t.bolded})}></${dt}>
                `}}),e({title:"Resized",styles:D`
                ${dt} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return g`
                    <${dt.assign({text:"Not Bolded",bold:!1})}></${dt}>
                    <${dt.assign({text:"Bolded",bold:!0})}></${dt}>
                `}}),e({title:"Alignment",styles:D`
                ${dt} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return g`
                    <${dt.assign({text:"Not Bolded",bold:!1})}></${dt}>
                    <${dt.assign({text:"Bolded",bold:!0})}></${dt}>
                `}}),e({title:"Stylized",styles:D`
                ${dt} {
                    text-decoration: underline;
                }
            `,render(){return g`
                    <${dt.assign({text:"Not Bolded",bold:!1})}></${dt}>
                    <${dt.assign({text:"Bolded",bold:!0})}></${dt}>
                `}})}}),WB=Fe({parent:ct,title:ot.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:X.Color,initValue:""},"Secondary color":{controlType:X.Color,initValue:""},"Hover color":{controlType:X.Color,initValue:""},"Active color":{controlType:X.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:o}){const i=n??D``;e({title:r,styles:i,render({controls:s}){const a=D`
                        ${T["vira-form-accent-primary-color"].name}: ${he(s["Primary color"]||"inherit")};
                        ${T["vira-form-background-color"].name}: ${he(s["Secondary color"]||"inherit")};
                        ${T["vira-form-accent-primary-hover-color"].name}: ${he(s["Hover color"]||"inherit")};
                        ${T["vira-form-accent-primary-active-color"].name}: ${he(s["Active color"]||"inherit")};
                    `;return g`
                        <${ot.assign({text:"hello",...o})}
                            style=${a}
                        ></${ot}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:nl}}),t({title:"with expanding icon",inputs:{icon:nl,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Kn.Outline}}),t({title:"ghost",inputs:{buttonStyle:Kn.Ghost}}),t({title:"plain",inputs:{buttonStyle:Kn.Plain}}),t({title:"danger",inputs:{buttonStyle:Kn.Danger}}),t({title:"danger outline",inputs:{buttonStyle:Kn.DangerOutline}}),t({title:"only icon",inputs:{icon:nl,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:D`
                ${ot} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:D`
                ${ot} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:D`
                :host {
                    ${T["vira-form-accent-primary-color"].name}: pink;
                    ${T["vira-form-background-color"].name}: purple;
                    ${T["vira-form-accent-primary-hover-color"].name}: orange;
                    ${T["vira-form-accent-primary-active-color"].name}: yellow;
                }
            `,render(){return g`
                    <${ot.assign({text:"hello"})}></${ot}>
                `}})}}),KB=[{title:"basic"},{title:"success",inputs:{cardState:lh.Success}},{title:"error",inputs:{cardState:lh.Error}},{title:"long",content:g`
            <p
                style=${D`
                    ${eu}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],GB=Fe({parent:ct,title:Ff.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){KB.forEach(t=>{e({title:t.title,render(){return g`
                        <${Ff.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${Ff}>
                    `}})})}}),HB=Fe({parent:ct,title:ue.tagName,controls:{Checked:{controlType:X.Checkbox,initValue:!1},Disabled:{controlType:X.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ue.assign({value:t.checked})}
                        ${j(ue.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ue}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ue.assign({value:t.checked})}
                        ${j(ue.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ue}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ue.assign({value:t.checked,hasError:!0})}
                        ${j(ue.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ue}>
                `}}),e({title:"disabled unchecked",render(){return g`
                    <${ue.assign({value:!1,disabled:!0})}></${ue}>
                `}}),e({title:"disabled checked",render(){return g`
                    <${ue.assign({value:!0,disabled:!0})}></${ue}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return g`
                    <${ue.assign({value:t.Checked,disabled:t.Disabled})}></${ue}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return g`
                    <${ue.assign({value:!0})}></${ue}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ue.assign({value:t.checked,label:"label goes here"})}
                        ${j(ue.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ue}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ue.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${j(ue.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ue}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:D`
                ${ue} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${ue.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${j(ue.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ue}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ue.assign({value:t.checked,fillWhenChecked:!0})}
                        ${j(ue.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ue}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ue.assign({value:t.checked,fillWhenUnchecked:!0})}
                        ${j(ue.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ue}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ue.assign({value:t.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${j(ue.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ue}>
                `}})}}),ZB=Fe({title:lo.tagName,parent:ct,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:D`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${lo.assign({expanded:!!r.expandedStates[o]})}
                            ${j(lo.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${lo.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${j("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Pr(!!r.showMoreStates[o],g`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${lo}>
                    `)}}),e({title:"wider examples",styles:D`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${lo.assign({expanded:!!r.expandedStates[o]})}
                            ${j(lo.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${lo.slotNames.header}
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
                            ${Pr(!!r.showMoreStates[o],g`
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
                        </${lo}>
                    `)}})}}),ll=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],JB=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...ll,{id:42,label:g`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...ll,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:D`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:D`
            ${Wa} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:It}}],YB=Fe({title:Wa.tagName,parent:ct,controls:{Selected:{controlType:X.Dropdown,initValue:"",options:["",...ll.map(e=>e.label)]},Prefix:{controlType:X.Text,initValue:""},"Force State":{controlType:X.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:X.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:X.Dropdown,initValue:"",options:["",...Object.keys(oh)]},Disabled:{controlType:X.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:X.Text,initValue:"Select something"}},defineExamples({defineExample:e}){JB.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:o}){const i={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:o.Placeholder,options:t.inputs?.options||ll,selected:o.Selected?[ll.find(s=>s.label===o.Selected)?.id].filter(C.isTruthy):r.selected,selectionPrefix:o.Prefix||t.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":t.inputs?.isDisabled,icon:o.Icon?oh[o.Icon]:t.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return g`
                        <${Wa.assign(i)}
                            ${j(Wa.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${Wa}>
                    `}})})}}),XB=Fe({parent:ct,title:Ri.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${Ri}>Error Content</${Ri}>
                `}})}}),a0=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],QB=Fe({parent:ct,title:Dr.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Ae.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:Ae.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:Ae.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Ae.Email,label:"Email Address",value:t.email},password:{type:Ae.NewPassword,label:"Password",value:t.password},userRole:{type:Ae.Select,label:"Role",options:a0,value:t.userRole,placeholder:"placeholder"},quantity:{type:Ae.Number,label:"Quantity",value:t.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:Ae.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:Ae.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return g`
                    <${Dr.assign({fields:n})}
                        ${j(Dr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ot.assign({text:"Cancel",buttonStyle:Kn.Outline})}></${ot}>
                            <${ot.assign({text:"Submit"})}></${ot}>
                        </div>
                    </${Dr}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Ae.Text,label:"First Name",value:t.firstName},lastName:{type:Ae.Text,label:"Last Name",value:t.lastName}};return g`
                    <${Dr.assign({fields:n})}
                        ${j(Dr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <${Ee.assign({value:"",label:"More stuff"})}></${Ee}>
                        <div class="buttons">
                            <${ot.assign({text:"Cancel",buttonStyle:Kn.Outline})}></${ot}>
                            <${ot.assign({text:"Submit"})}></${ot}>
                        </div>
                    </${Dr}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Dr} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Ae.Text,label:"First Name",value:t.firstName},lastName:{type:Ae.Text,label:"Last Name",value:t.lastName},subscribe:{type:Ae.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Ae.Email,label:"Email Address",value:t.email},password:{type:Ae.NewPassword,label:"Password",value:t.password},userRole:{type:Ae.Select,label:"Role",options:a0,value:t.userRole}};return g`
                    <${Dr.assign({fields:n})}
                        ${j(Dr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ot.assign({text:"Cancel",buttonStyle:Kn.Outline})}></${ot}>
                            <${ot.assign({text:"Submit"})}></${ot}>
                        </div>
                    </${Dr}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Ae.Text,label:"First Name",value:t.firstName},lastName:{type:Ae.Text,label:"Last Name",value:t.lastName},subscribe:{type:Ae.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Ae.Email,label:"Email Address",value:t.email},password:{type:Ae.NewPassword,label:"Password",value:t.password},userRole:{type:Ae.Select,label:"Role",options:a0,value:t.userRole}};return g`
                    <${Dr.assign({fields:n,isDisabled:!0})}
                        ${j(Dr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ot.assign({text:"Cancel",buttonStyle:Kn.Outline})}></${ot}>
                            <${ot.assign({text:"Submit"})}></${ot}>
                        </div>
                    </${Dr}>
                `}})}}),eR=Fe({title:I.tagName,parent:ct,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${I.assign({icon:It})}></${I}>
                `}}),e({title:"using createColoredIcon",render(){return g`
                    <${I.assign({icon:an(It,{"vira-icon-stroke-color":"red"})})}></${I}>
                `}}),e({title:"fit container",styles:D`
                ${I} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return g`
                    <${I.assign({icon:an(It,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${I}>
                `}})}}),tR=Fe({title:Io.tagName,parent:ct,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:D`
                    border-radius: 32px;
                `,loadingSlot:g`
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
                        <${I.assign({icon:Gi,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${I}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:D`
                    border-radius: 32px;
                `,errorSlot:g`
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
                        <${I.assign({icon:$c,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${I}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:D`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:D`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:D`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:g`
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
                        <${I.assign({icon:Gi,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${I}>
                    </div>
                `,errorSlot:g`
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
                        <${I.assign({icon:$c,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${I}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:D`
                    ${Io} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||D``}
                    }

                    ${r.allowReload?D`
                              ${Io} {
                                  cursor: pointer;
                              }

                              ${Io}:hover {
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
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:o}){return g`
                        <${Io.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${j("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${Pi()}`})})}
                        >
                            ${r.loadingSlot?g`
                                      <div class="slot-wrapper" slot=${Io.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:ee}${r.errorSlot?g`
                                      <div class="slot-wrapper" slot=${Io.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:ee}
                        </${Io}>
                    `}})})}}),rR=Fe({title:Ee.tagName,parent:ct,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:X.Color,initValue:T["vira-form-foreground-color"].default},"Placeholder color":{controlType:X.Color,initValue:T["vira-form-placeholder-color"].default},"Border color":{controlType:X.Color,initValue:T["vira-form-border-color"].default},"Focus color":{controlType:X.Color,initValue:T["vira-form-focus-outline-color"].default},"Selection color":{controlType:X.Color,initValue:T["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:o,inputs:i}){e({title:o,styles:D`
                    ${n||D``}
                `,state(){return{value:i.value}},render({state:s,updateState:a,controls:l}){const c={[String(T["vira-form-foreground-color"].name)]:l["Text color"],[String(T["vira-form-placeholder-color"].name)]:l["Placeholder color"],[String(T["vira-form-border-color"].name)]:l["Border color"],[String(T["vira-form-focus-outline-color"].name)]:l["Focus color"],[String(T["vira-form-text-selection-color"].name)]:l["Selection color"]},d=rt(c,(h,m)=>m||"inherit"),f=Object.entries(d).map(([h,m])=>[h,m].join(": ")+";").join(`
`);return g`
                        <${Ee.assign({...i,value:s.value})}
                            style=${f}
                            ${j(Ee.events.valueChange,h=>{a({value:h.detail}),console.info("changed:",h.detail)})}
                        ></${Ee}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:It}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:D`
                    ${Ee} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:It}},{title:"taller height",styles:D`
                    ${Ee} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:It}},{title:"shorter height",styles:D`
                    ${Ee} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:It}},{title:"max width",styles:D`
                    ${Ee} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:D`
                    ${Ee} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Ti.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Ti.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:D`
                    ${Ee} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:D`
                    ${Ee} {
                        width: unset;
                    }
                `}].forEach(t)}}),nR=Fe({title:ol.tagName,parent:ct,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:X.Color,initValue:""},"Hover color":{controlType:X.Color,initValue:""},"Active color":{controlType:X.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:o}){const i=D`
                        ${T["vira-form-accent-primary-color"].name}: ${he(o["Hover color"]||"inherit")};
                        ${T["vira-form-accent-primary-active-color"].name}: ${he(o["Active color"]||"inherit")};
                        color: ${he(o["CSS Color"]||"inherit")};
                    `;return g`
                        <${ol.assign(n)} style=${i}>My Link</${ol}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}}),t({title:"disabled link styles",inputs:{disableLinkStyles:!0,link:{newTab:!0,url:"https://www.wikipedia.org"}}})}}),oR=Fe({title:Oo.tagName,parent:ct,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return g`
                    <button
                        ${j("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Oo.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${j(Oo.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Oo}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:D`
                ${Oo} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${T["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return g`
                    <button
                        ${j("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Oo.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${j(Oo.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Oo}>
                `}})}}),Ga=D`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,l0=g`
    <${Yn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${Yn.slotNames.large}>Large</div>
        <div class="small" slot=${Yn.slotNames.small}>Small</div>
    </${Yn}>
`,Cs={max:120,min:25,default:80},ky=Qe()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":fl(Cs.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>D`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const o=Rh.isNumber(V3(R6({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Cs.default;(o>=Cs.max||o<=Cs.min)&&t({increment:e.increment*-1}),Qh({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:fl(o+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return g`
            <slot></slot>
        `}}),xy=Qe()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":fl(Cs.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:D`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${Ga}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return g`
            <${Yn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${Yn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${Yn.slotNames.small}>Small</div>
            </${Yn}>
        `}}),iR=Fe({title:Yn.tagName,parent:ct,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:D`
                ${Ga}
            `,render(){return l0}}),e({title:"overflowing",styles:D`
                ${Ga}

                ${Yn} {
                    max-width: 50px;
                }
            `,render(){return l0}}),e({title:"dynamic size",styles:D`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Ga}

                .wrapper {
                    width: ${Cs.max+10}px;
                }
            `,render(){return g`
                    <div class="wrapper">
                        <${ky}>
                            ${l0}
                        </${ky}>
                    </div>
                `}}),e({title:"dynamic slot",styles:D`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Ga}
            `,render(){return g`
                    <${xy}></${xy}>
                `}})}}),sR=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:D`
            :host {
                ${T["vira-form-filled-background-color"].name}: red;
                ${T["vira-form-accent-primary-color"].name}: black;
                ${ho.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ho} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:D`
            :host {
                ${T["vira-form-filled-background-color"].name}: red;
                ${T["vira-form-accent-primary-color"].name}: yellow;
                ${ho.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ho} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:D`
            :host {
                ${T["vira-form-filled-background-color"].name}: red;
                ${T["vira-form-accent-primary-color"].name}: yellow;
                ${ho.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ho} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],aR=Fe({parent:ct,title:ho.tagName,defineExamples({defineExample:e}){sR.forEach(t=>{e({title:t.title,styles:D`
                    ${t.styles||D``}
                `,render(){return g`
                        <${ho.assign({value:50,...t.inputs})}></${ho}>
                    `}})})}}),Nt=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],lR=[{title:"basic",inputs:{options:Nt}},{title:"with really long option",inputs:{options:[...Nt,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:Nt,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:Nt,disabled:!0}},{title:"error",inputs:{options:Nt,hasError:!0}},{title:"with icon",inputs:{options:Nt,icon:It}},{title:"custom width",inputs:{options:Nt},styles:D`
            ${_e} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:Nt,icon:It},styles:D`
            ${_e} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:Nt,icon:It},styles:D`
            ${_e} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:Nt,label:"Pick an option"}},{title:"with long label",inputs:{options:Nt,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:Nt,label:"Pick a really really really really long option"},styles:D`
            ${_e} {
                width: unset;
            }
        `},{title:"raw",inputs:{options:[...Nt,{label:"really really really really really really really really long option",value:"something"}],rawSelect:!0,icon:It}}],uR=Fe({parent:ct,title:_e.tagName,defineExamples({defineExample:e}){lR.forEach(t=>{e({title:t.title,styles:D`
                    ${t.styles||D``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return g`
                        <${_e.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${j(_e.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${_e}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return g`
                    <${_e.assign({options:Nt,value:Nt[0]?.value})}></${_e}>
                `}}),e({title:"force update",render(){return g`
                    <${Dy}></${Dy}>
                `}})}}),Dy=Qe()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=Nt.findIndex(o=>o.value===t.value),n=Ut.isDefined(Nt[(r+1)%Nt.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return g`
            <${_e.assign({options:Nt,value:e.value})}></${_e}>
        `}}),cR=[{label:"basic",isClickable:void 0},{label:"selectable",isClickable:{selected:!0}},{label:"cancellable",isClickable:{cancellable:!0}},{label:"disabled",disabled:!0,isClickable:{selected:!0}}],dR=Fe({parent:ct,title:Oa.tagName,descriptionParagraphs:["A tag element with selectable, cancellable, size, emphasis, and color variants."],defineExamples({defineExample:e}){KP.forEach(t=>{e({title:t,styles:D`
                    table {
                        border-collapse: collapse;
                    }

                    th,
                    td {
                        padding: 8px;
                        text-align: center;
                    }

                    th {
                        font-weight: normal;
                    }

                    .cancelled {
                        visibility: hidden;
                    }
                `,state(){return{clicked:{}}},render({state:r,updateState:n}){return cR.map(({label:o,...i})=>g`
                            <h3>${o}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${N1.map(s=>g`
                                                <th>${s}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${GP.map(s=>g`
                                            <tr>
                                                <th>${s}</th>
                                                ${N1.map(a=>{const l=[o,s,a].join("-"),c=C.isBoolean(i.isClickable?.selected)?{selected:!r.clicked[l]}:i.isClickable,d=g`
                                                        <${Oa.assign({text:"Label",...i,size:t,emphasis:s,color:a,isClickable:c})}
                                                            class=${tr({cancelled:!!i.isClickable?.cancellable&&!!r.clicked[l]})}
                                                            ${j(Oa.events.cancel,()=>{n({clicked:{...r.clicked,[l]:!0}})})}
                                                            ${j(Oa.events.toggle,f=>{n({clicked:{...r.clicked,[l]:!f.detail}})})}
                                                        ></${Oa}>
                                                    `;return g`
                                                        <td>${d}</td>
                                                    `})}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})})}}),fR=[ct,SB,Eg,Cg],hR=[qB,WB,GB,HB,ZB,YB,XB,QB,eR,tR,rR,nR,OB,jB,RB,oR,iR,_B,UB,aR,uR,dR].sort((e,t)=>e.title.localeCompare(t.title)),mR=[...hR,NB,PB,VB,...TB],gR=[...fR,...mR];Un()({tagName:"vira-book-app",styles:D`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${s0} {
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
            <${s0.assign({internalRouterConfig:{basePath:ug("vira"),useInternalRouter:!0},pages:gR,themeColor:"#33ccff"})}>
                <h1 slot=${Zn.NavHeader}>Vira</h1>
            </${s0}>
        `}});export{Un as d,g as h};
