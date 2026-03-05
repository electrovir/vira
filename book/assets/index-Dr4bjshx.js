(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var tr;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(tr||(tr={}));function Pc(e,t=r=>r){const r=new Map;return e.filter(n=>{const o=t(n);return r.get(o)?!1:(r.set(o,n),!0)})}class Ah{diff(t,r,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const i=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(i,n)),l=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,l,n,o)}diffWithOptionsObj(t,r,n,o){var i;const s=x=>{if(x=this.postProcess(x,n),o){setTimeout(function(){o(x)},0);return}else return x},a=r.length,l=t.length;let c=1,d=a+l;n.maxEditLength!=null&&(d=Math.min(d,n.maxEditLength));const f=(i=n.timeout)!==null&&i!==void 0?i:1/0,h=Date.now()+f,m=[{oldPos:-1,lastComponent:void 0}];let g=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=l&&g+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let b=-1/0,y=1/0;const $=()=>{for(let x=Math.max(b,-c);x<=Math.min(y,c);x+=2){let E;const N=m[x-1],B=m[x+1];N&&(m[x-1]=void 0);let Z=!1;if(B){const ee=B.oldPos-x;Z=B&&0<=ee&&ee<a}const Q=N&&N.oldPos+1<l;if(!Z&&!Q){m[x]=void 0;continue}if(!Q||Z&&N.oldPos<B.oldPos?E=this.addToPath(B,!0,!1,0,n):E=this.addToPath(N,!1,!0,1,n),g=this.extractCommon(E,r,t,x,n),E.oldPos+1>=l&&g+1>=a)return s(this.buildValues(E.lastComponent,r,t))||!0;m[x]=E,E.oldPos+1>=l&&(y=Math.min(y,x-1)),g+1>=a&&(b=Math.max(b,x+1))}c++};if(o)(function x(){setTimeout(function(){if(c>d||Date.now()>h)return o(void 0);$()||x()},0)})();else for(;c<=d&&Date.now()<=h;){const x=$();if(x)return x}}addToPath(t,r,n,o,i){const s=t.lastComponent;return s&&!i.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+o,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,o,i){const s=r.length,a=n.length;let l=t.oldPos,c=l-o,d=0;for(;c+1<s&&l+1<a&&this.equals(n[l+1],r[c+1],i);)c++,l++,d++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return d&&!i.oneChangePerToken&&(t.lastComponent={count:d,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=l,c}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const s=o.length;let a=0,l=0,c=0;for(;a<s;a++){const d=o[a];if(d.removed)d.value=this.join(n.slice(c,c+d.count)),c+=d.count;else{if(!d.added&&this.useLongestToken){let f=r.slice(l,l+d.count);f=f.map(function(h,m){const g=n[c+m];return g.length>h.length?g:h}),d.value=this.join(f)}else d.value=this.join(r.slice(l,l+d.count));l+=d.count,d.added||(c+=d.count)}}return o}}function Cg(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function Sg(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function g0(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function p0(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function Ea(e,t){return g0(e,t,"")}function au(e,t){return p0(e,t,"")}function Mg(e,t){return t.slice(0,ik(e,t))}function ik(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const o=Array(n);let i=0;o[0]=0;for(let s=1;s<n;s++){for(t[s]==t[i]?o[s]=o[i]:o[s]=i;i>0&&t[s]!=t[i];)i=o[i];t[s]==t[i]&&i++}i=0;for(let s=r;s<e.length;s++){for(;i>0&&e[s]!=t[i];)i=o[i];e[s]==t[i]&&i++}return i}function Ca(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function To(e){const t=e.match(/^\s*/);return t?t[0]:""}const Gu="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",sk=new RegExp(`[${Gu}]+|\\s+|[^${Gu}]`,"ug");class ak extends Ah{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const l=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(l)?n[n.length-1]+=l:n.push(l)}}else n=t.match(sk)||[];const o=[];let i=null;return n.forEach(s=>{/\s/.test(s)?i==null?o.push(s):o.push(o.pop()+s):i!=null&&/\s/.test(i)?o[o.length-1]==i?o.push(o.pop()+s):o.push(i+s):o.push(s),i=s}),o}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,o=null,i=null;return t.forEach(s=>{s.added?o=s:s.removed?i=s:((o||i)&&Fg(n,i,o,s),n=s,o=null,i=null)}),(o||i)&&Fg(n,i,o,null),t}}const lk=new ak;function uk(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?fk(e,t,r):lk.diff(e,t,r)}function Fg(e,t,r,n){if(t&&r){const o=To(t.value),i=Ca(t.value),s=To(r.value),a=Ca(r.value);if(e){const l=Cg(o,s);e.value=p0(e.value,s,l),t.value=Ea(t.value,l),r.value=Ea(r.value,l)}if(n){const l=Sg(i,a);n.value=g0(n.value,a,l),t.value=au(t.value,l),r.value=au(r.value,l)}}else if(r){if(e){const o=To(r.value);r.value=r.value.substring(o.length)}if(n){const o=To(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=To(n.value),i=To(t.value),s=Ca(t.value),a=Cg(o,i);t.value=Ea(t.value,a);const l=Sg(Ea(o,a),s);t.value=au(t.value,l),n.value=g0(n.value,o,l),e.value=p0(e.value,o,o.slice(0,o.length-l.length))}else if(n){const o=To(n.value),i=Ca(t.value),s=Mg(i,o);t.value=au(t.value,s)}else if(e){const o=Ca(e.value),i=To(t.value),s=Mg(o,i);t.value=Ea(t.value,s)}}class ck extends Ah{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Gu}]+|[^\\S\\n\\r]+|[^${Gu}]`,"ug");return t.match(r)||[]}}const dk=new ck;function fk(e,t,r){return dk.diff(e,t,r)}class hk extends Ah{constructor(){super(...arguments),this.tokenize=pk}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const mk=new hk;function gk(e,t,r){return mk.diff(e,t,r)}function pk(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const i=n[o];o%2&&!t.newlineIsToken?r[r.length-1]+=i:r.push(i)}return r}function Tg(e,t){return Ay(e,new Map)}function Ay(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((o,i)=>o[0].localeCompare(i[0])).forEach(([o,i])=>{const s=Ay(i,t);n[o]=s}),n}else return e}var bk=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,yk=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,vk=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,_d={Space_Separator:bk,ID_Start:yk,ID_Continue:vk},vt={isSpaceSeparator(e){return typeof e=="string"&&_d.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||_d.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||_d.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let b0,yr,uo,Hu,Yo,Cn,Wt,Eh,Qa;var wk=function(t,r){b0=String(t),yr="start",uo=[],Hu=0,Yo=1,Cn=0,Wt=void 0,Eh=void 0,Qa=void 0;do Wt=$k(),Dk[yr]();while(Wt.type!=="eof");return typeof r=="function"?y0({"":Qa},"",r):Qa};function y0(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const i=String(o),s=y0(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const i=y0(n,o,r);i===void 0?delete n[o]:Object.defineProperty(n,o,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let pe,he,_a,oo,De;function $k(){for(pe="default",he="",_a=!1,oo=1;;){De=vo();const e=Ey[pe]();if(e)return e}}function vo(){if(b0[Hu])return String.fromCodePoint(b0.codePointAt(Hu))}function I(){const e=vo();return e===`
`?(Yo++,Cn=0):e?Cn+=e.length:Cn++,e&&(Hu+=e.length),e}const Ey={default(){switch(De){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":I();return;case"/":I(),pe="comment";return;case void 0:return I(),Xe("eof")}if(vt.isSpaceSeparator(De)){I();return}return Ey[yr]()},comment(){switch(De){case"*":I(),pe="multiLineComment";return;case"/":I(),pe="singleLineComment";return}throw Qe(I())},multiLineComment(){switch(De){case"*":I(),pe="multiLineCommentAsterisk";return;case void 0:throw Qe(I())}I()},multiLineCommentAsterisk(){switch(De){case"*":I();return;case"/":I(),pe="default";return;case void 0:throw Qe(I())}I(),pe="multiLineComment"},singleLineComment(){switch(De){case`
`:case"\r":case"\u2028":case"\u2029":I(),pe="default";return;case void 0:return I(),Xe("eof")}I()},value(){switch(De){case"{":case"[":return Xe("punctuator",I());case"n":return I(),pi("ull"),Xe("null",null);case"t":return I(),pi("rue"),Xe("boolean",!0);case"f":return I(),pi("alse"),Xe("boolean",!1);case"-":case"+":I()==="-"&&(oo=-1),pe="sign";return;case".":he=I(),pe="decimalPointLeading";return;case"0":he=I(),pe="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":he=I(),pe="decimalInteger";return;case"I":return I(),pi("nfinity"),Xe("numeric",1/0);case"N":return I(),pi("aN"),Xe("numeric",NaN);case'"':case"'":_a=I()==='"',he="",pe="string";return}throw Qe(I())},identifierNameStartEscape(){if(De!=="u")throw Qe(I());I();const e=v0();switch(e){case"$":case"_":break;default:if(!vt.isIdStartChar(e))throw Ng();break}he+=e,pe="identifierName"},identifierName(){switch(De){case"$":case"_":case"‌":case"‍":he+=I();return;case"\\":I(),pe="identifierNameEscape";return}if(vt.isIdContinueChar(De)){he+=I();return}return Xe("identifier",he)},identifierNameEscape(){if(De!=="u")throw Qe(I());I();const e=v0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!vt.isIdContinueChar(e))throw Ng();break}he+=e,pe="identifierName"},sign(){switch(De){case".":he=I(),pe="decimalPointLeading";return;case"0":he=I(),pe="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":he=I(),pe="decimalInteger";return;case"I":return I(),pi("nfinity"),Xe("numeric",oo*(1/0));case"N":return I(),pi("aN"),Xe("numeric",NaN)}throw Qe(I())},zero(){switch(De){case".":he+=I(),pe="decimalPoint";return;case"e":case"E":he+=I(),pe="decimalExponent";return;case"x":case"X":he+=I(),pe="hexadecimal";return}return Xe("numeric",oo*0)},decimalInteger(){switch(De){case".":he+=I(),pe="decimalPoint";return;case"e":case"E":he+=I(),pe="decimalExponent";return}if(vt.isDigit(De)){he+=I();return}return Xe("numeric",oo*Number(he))},decimalPointLeading(){if(vt.isDigit(De)){he+=I(),pe="decimalFraction";return}throw Qe(I())},decimalPoint(){switch(De){case"e":case"E":he+=I(),pe="decimalExponent";return}if(vt.isDigit(De)){he+=I(),pe="decimalFraction";return}return Xe("numeric",oo*Number(he))},decimalFraction(){switch(De){case"e":case"E":he+=I(),pe="decimalExponent";return}if(vt.isDigit(De)){he+=I();return}return Xe("numeric",oo*Number(he))},decimalExponent(){switch(De){case"+":case"-":he+=I(),pe="decimalExponentSign";return}if(vt.isDigit(De)){he+=I(),pe="decimalExponentInteger";return}throw Qe(I())},decimalExponentSign(){if(vt.isDigit(De)){he+=I(),pe="decimalExponentInteger";return}throw Qe(I())},decimalExponentInteger(){if(vt.isDigit(De)){he+=I();return}return Xe("numeric",oo*Number(he))},hexadecimal(){if(vt.isHexDigit(De)){he+=I(),pe="hexadecimalInteger";return}throw Qe(I())},hexadecimalInteger(){if(vt.isHexDigit(De)){he+=I();return}return Xe("numeric",oo*Number(he))},string(){switch(De){case"\\":I(),he+=kk();return;case'"':if(_a)return I(),Xe("string",he);he+=I();return;case"'":if(!_a)return I(),Xe("string",he);he+=I();return;case`
`:case"\r":throw Qe(I());case"\u2028":case"\u2029":Ak(De);break;case void 0:throw Qe(I())}he+=I()},start(){switch(De){case"{":case"[":return Xe("punctuator",I())}pe="value"},beforePropertyName(){switch(De){case"$":case"_":he=I(),pe="identifierName";return;case"\\":I(),pe="identifierNameStartEscape";return;case"}":return Xe("punctuator",I());case'"':case"'":_a=I()==='"',pe="string";return}if(vt.isIdStartChar(De)){he+=I(),pe="identifierName";return}throw Qe(I())},afterPropertyName(){if(De===":")return Xe("punctuator",I());throw Qe(I())},beforePropertyValue(){pe="value"},afterPropertyValue(){switch(De){case",":case"}":return Xe("punctuator",I())}throw Qe(I())},beforeArrayValue(){if(De==="]")return Xe("punctuator",I());pe="value"},afterArrayValue(){switch(De){case",":case"]":return Xe("punctuator",I())}throw Qe(I())},end(){throw Qe(I())}};function Xe(e,t){return{type:e,value:t,line:Yo,column:Cn}}function pi(e){for(const t of e){if(vo()!==t)throw Qe(I());I()}}function kk(){switch(vo()){case"b":return I(),"\b";case"f":return I(),"\f";case"n":return I(),`
`;case"r":return I(),"\r";case"t":return I(),"	";case"v":return I(),"\v";case"0":if(I(),vt.isDigit(vo()))throw Qe(I());return"\0";case"x":return I(),xk();case"u":return I(),v0();case`
`:case"\u2028":case"\u2029":return I(),"";case"\r":return I(),vo()===`
`&&I(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Qe(I());case void 0:throw Qe(I())}return I()}function xk(){let e="",t=vo();if(!vt.isHexDigit(t)||(e+=I(),t=vo(),!vt.isHexDigit(t)))throw Qe(I());return e+=I(),String.fromCodePoint(parseInt(e,16))}function v0(){let e="",t=4;for(;t-- >0;){const r=vo();if(!vt.isHexDigit(r))throw Qe(I());e+=I()}return String.fromCodePoint(parseInt(e,16))}const Dk={start(){if(Wt.type==="eof")throw bi();Ud()},beforePropertyName(){switch(Wt.type){case"identifier":case"string":Eh=Wt.value,yr="afterPropertyName";return;case"punctuator":lu();return;case"eof":throw bi()}},afterPropertyName(){if(Wt.type==="eof")throw bi();yr="beforePropertyValue"},beforePropertyValue(){if(Wt.type==="eof")throw bi();Ud()},beforeArrayValue(){if(Wt.type==="eof")throw bi();if(Wt.type==="punctuator"&&Wt.value==="]"){lu();return}Ud()},afterPropertyValue(){if(Wt.type==="eof")throw bi();switch(Wt.value){case",":yr="beforePropertyName";return;case"}":lu()}},afterArrayValue(){if(Wt.type==="eof")throw bi();switch(Wt.value){case",":yr="beforeArrayValue";return;case"]":lu()}},end(){}};function Ud(){let e;switch(Wt.type){case"punctuator":switch(Wt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Wt.value;break}if(Qa===void 0)Qa=e;else{const t=uo[uo.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Eh,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")uo.push(e),Array.isArray(e)?yr="beforeArrayValue":yr="beforePropertyName";else{const t=uo[uo.length-1];t==null?yr="end":Array.isArray(t)?yr="afterArrayValue":yr="afterPropertyValue"}}function lu(){uo.pop();const e=uo[uo.length-1];e==null?yr="end":Array.isArray(e)?yr="afterArrayValue":yr="afterPropertyValue"}function Qe(e){return Zu(e===void 0?`JSON5: invalid end of input at ${Yo}:${Cn}`:`JSON5: invalid character '${Cy(e)}' at ${Yo}:${Cn}`)}function bi(){return Zu(`JSON5: invalid end of input at ${Yo}:${Cn}`)}function Ng(){return Cn-=5,Zu(`JSON5: invalid identifier character at ${Yo}:${Cn}`)}function Ak(e){console.warn(`JSON5: '${Cy(e)}' in strings is not valid ECMAScript; consider escaping`)}function Cy(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Zu(e){const t=new SyntaxError(e);return t.lineNumber=Yo,t.columnNumber=Cn,t}var Ek=function(t,r,n){const o=[];let i="",s,a,l="",c;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,c=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const b of r){let y;typeof b=="string"?y=b:(typeof b=="number"||b instanceof String||b instanceof Number)&&(y=String(b)),y!==void 0&&s.indexOf(y)<0&&s.push(y)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),l="          ".substr(0,n)):typeof n=="string"&&(l=n.substr(0,10)),d("",{"":t});function d(b,y){let $=y[b];switch($!=null&&(typeof $.toJSON5=="function"?$=$.toJSON5(b):typeof $.toJSON=="function"&&($=$.toJSON(b))),a&&($=a.call(y,b,$)),$ instanceof Number?$=Number($):$ instanceof String?$=String($):$ instanceof Boolean&&($=$.valueOf()),$){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof $=="string")return f($);if(typeof $=="number")return String($);if(typeof $=="object")return Array.isArray($)?g($):h($)}function f(b){const y={"'":.1,'"':.2},$={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let x="";for(let N=0;N<b.length;N++){const B=b[N];switch(B){case"'":case'"':y[B]++,x+=B;continue;case"\0":if(vt.isDigit(b[N+1])){x+="\\x00";continue}}if($[B]){x+=$[B];continue}if(B<" "){let Z=B.charCodeAt(0).toString(16);x+="\\x"+("00"+Z).substring(Z.length);continue}x+=B}const E=c||Object.keys(y).reduce((N,B)=>y[N]<y[B]?N:B);return x=x.replace(new RegExp(E,"g"),$[E]),E+x+E}function h(b){if(o.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");o.push(b);let y=i;i=i+l;let $=s||Object.keys(b),x=[];for(const N of $){const B=d(N,b);if(B!==void 0){let Z=m(N)+":";l!==""&&(Z+=" "),Z+=B,x.push(Z)}}let E;if(x.length===0)E="{}";else{let N;if(l==="")N=x.join(","),E="{"+N+"}";else{let B=`,
`+i;N=x.join(B),E=`{
`+i+N+`,
`+y+"}"}}return o.pop(),i=y,E}function m(b){if(b.length===0)return f(b);const y=String.fromCodePoint(b.codePointAt(0));if(!vt.isIdStartChar(y))return f(b);for(let $=y.length;$<b.length;$++)if(!vt.isIdContinueChar(String.fromCodePoint(b.codePointAt($))))return f(b);return b}function g(b){if(o.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");o.push(b);let y=i;i=i+l;let $=[];for(let E=0;E<b.length;E++){const N=d(String(E),b);$.push(N!==void 0?N:"null")}let x;if($.length===0)x="[]";else if(l==="")x="["+$.join(",")+"]";else{let E=`,
`+i,N=$.join(E);x=`[
`+i+N+`,
`+y+"]"}return o.pop(),i=y,x}};const Ck={parse:wk,stringify:Ek};var Sk=Ck;const Sy="__@@augment-vir-undefined-sentinel@@__",Mk=new RegExp(`['"]${Sy}['"]`);function k(e,t){if(typeof e=="string")return e;try{return Sk.stringify(e,(n,o)=>o===void 0?Sy:typeof o=="bigint"?Number(o):o,t||void 0).split(Mk).join("undefined")}catch{return String(e)}}var Fk=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Sn;(function(e){e.Node="node",e.Web="web"})(Sn||(Sn={}));function Tk(){return Fk?Sn.Node:Sn.Web}const My=Tk();function Ch(e){return My===e}function Fy(e){return e[My]()}function Nk(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",o=n?gk:uk,i=[r?"":`
`,k(t&&typeof t=="object"&&!Array.isArray(t)?Tg(t):t,4),`
`].join(""),s=[r?"":`
`,k(e&&typeof e=="object"&&!Array.isArray(e)?Tg(e):e,4),`
`].join(""),a=Pk(n,o(i,s)),l=Ch(Sn.Node);return[[l?mo.Green:""," +added (unexpected, added in actual)",l?mo.Red:""," -missing (expected, missing from actual)",l?mo.Reset:""].join(""),r?`

`:`
`,a].join("")}var mo;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(mo||(mo={}));var Ju;(function(e){e.Added="+",e.Removed="-"})(Ju||(Ju={}));function Pk(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(o=>Pg(o,n)).join(`
`)).join(""):t.map(n=>Pg(void 0,n)).join("")}function Pg(e,t){if(e!=null&&!e)return"";const r=Ch(Sn.Node),n=t.added?Ju.Added:t.removed?Ju.Removed:e==null?"":" ",o=t.added?mo.Green:t.removed?mo.Red:mo.Reset;return[r?o:"",n,e??t.value,mo.Reset].join("")}function ze(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ik(e){return ze(e).filter(t=>isNaN(Number(t)))}function qr(e){return Ik(e).map(r=>e[r])}const Ok=[".",":",";",",","?","!"],Bk=new RegExp(`[${Ok.join("")}]+$`);function Ig(e){return e.replace(Bk,"")}function Zt(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):k(e)}function Xi(...e){const t=e.map(i=>Zt(i)).filter(i=>!!Ig(i)),r=t[t.length-1]?.endsWith("."),n=t.map(i=>Ig(Zt(i)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function yt(e){return e instanceof Error?e:new Error(Zt(e))}function ia(e,t){const r=yt(e),n=Xi(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var F;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(F||(F={}));var K;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(K||(K={}));K.ClientError,K.ServerError;F.Continue+"",K.Information,F.SwitchingProtocols+"",K.Information,F.Processing+"",K.Information,F.EarlyHints+"",K.Information,F.Ok+"",K.Success,F.Created+"",K.Success,F.Accepted+"",K.Success,F.NonAuthoritativeInformation+"",K.Success,F.NoContent+"",K.Success,F.ResetContent+"",K.Success,F.PartialContent+"",K.Success,F.MultiStatus+"",K.Success,F.AlreadyReported+"",K.Success,F.ImUsed+"",K.Success,F.MultipleChoices+"",K.Redirect,F.MovedPermanently+"",K.Redirect,F.Found+"",K.Redirect,F.SeeOther+"",K.Redirect,F.NotModified+"",K.Redirect,F.UseProxy+"",K.Redirect,F.Unused+"",K.Redirect,F.TemporaryRedirect+"",K.Redirect,F.PermanentRedirect+"",K.Redirect,F.BadRequest+"",K.ClientError,F.Unauthorized+"",K.ClientError,F.PaymentRequired+"",K.ClientError,F.Forbidden+"",K.ClientError,F.NotFound+"",K.ClientError,F.MethodNotAllowed+"",K.ClientError,F.NotAcceptable+"",K.ClientError,F.ProxyAuthenticationRequired+"",K.ClientError,F.RequestTimeout+"",K.ClientError,F.Conflict+"",K.ClientError,F.Gone+"",K.ClientError,F.LengthRequired+"",K.ClientError,F.PreconditionFailed+"",K.ClientError,F.PayloadTooLarge+"",K.ClientError,F.UriTooLong+"",K.ClientError,F.UnsupportedMediaType+"",K.ClientError,F.RangeNotSatisfiable+"",K.ClientError,F.ExpectationFailed+"",K.ClientError,F.ImATeapot+"",K.ClientError,F.MisdirectedRequest+"",K.ClientError,F.UnprocessableContent+"",K.ClientError,F.Locked+"",K.ClientError,F.FailedDependency+"",K.ClientError,F.TooEarly+"",K.ClientError,F.UpgradeRequired+"",K.ClientError,F.PreconditionRequired+"",K.ClientError,F.TooManyRequests+"",K.ClientError,F.RequestHeaderFieldsTooLarge+"",K.ClientError,F.UnavailableForLegalReasons+"",K.ClientError,F.InternalServerError+"",K.ServerError,F.NotImplemented+"",K.ServerError,F.BadGateway+"",K.ServerError,F.ServiceUnavailable+"",K.ServerError,F.GatewayTimeout+"",K.ServerError,F.HttpVersionNotSupported+"",K.ServerError,F.VariantAlsoNegotiates+"",K.ServerError,F.InsufficientStorage+"",K.ServerError,F.LoopDetected+"",K.ServerError,F.NotExtended+"",K.ServerError,F.NetworkAuthenticationRequired+"",K.ServerError;const Bu={[K.Information]:[F.Continue,F.SwitchingProtocols,F.Processing,F.EarlyHints],[K.Success]:[F.Ok,F.Created,F.Accepted,F.NonAuthoritativeInformation,F.NoContent,F.ResetContent,F.PartialContent,F.MultiStatus,F.AlreadyReported,F.ImUsed],[K.Redirect]:[F.MultipleChoices,F.MovedPermanently,F.Found,F.SeeOther,F.NotModified,F.UseProxy,F.Unused,F.TemporaryRedirect,F.PermanentRedirect],[K.ClientError]:[F.BadRequest,F.Unauthorized,F.PaymentRequired,F.Forbidden,F.NotFound,F.MethodNotAllowed,F.NotAcceptable,F.ProxyAuthenticationRequired,F.RequestTimeout,F.Conflict,F.Gone,F.LengthRequired,F.PreconditionFailed,F.PayloadTooLarge,F.UriTooLong,F.UnsupportedMediaType,F.RangeNotSatisfiable,F.ExpectationFailed,F.ImATeapot,F.MisdirectedRequest,F.UnprocessableContent,F.Locked,F.FailedDependency,F.TooEarly,F.UpgradeRequired,F.PreconditionRequired,F.TooManyRequests,F.RequestHeaderFieldsTooLarge,F.UnavailableForLegalReasons],[K.ServerError]:[F.InternalServerError,F.NotImplemented,F.BadGateway,F.ServiceUnavailable,F.GatewayTimeout,F.HttpVersionNotSupported,F.VariantAlsoNegotiates,F.InsufficientStorage,F.LoopDetected,F.NotExtended,F.NetworkAuthenticationRequired]};function Sh({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Yu{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(yt(n))}})}}class Qi extends Error{}class Rk extends Qi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Lk extends Qi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class jk extends Qi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class As extends Qi{}class Ty extends Qi{constructor(t){super(`Invalid unit ${t}`)}}class fr extends Qi{}class No extends Qi{constructor(){super("Zone is an abstract class")}}const V="numeric",Mn="short",Kr="long",Xu={year:V,month:V,day:V},Ny={year:V,month:Mn,day:V},_k={year:V,month:Mn,day:V,weekday:Mn},Py={year:V,month:Kr,day:V},Iy={year:V,month:Kr,day:V,weekday:Kr},Oy={hour:V,minute:V},By={hour:V,minute:V,second:V},Ry={hour:V,minute:V,second:V,timeZoneName:Mn},Ly={hour:V,minute:V,second:V,timeZoneName:Kr},jy={hour:V,minute:V,hourCycle:"h23"},_y={hour:V,minute:V,second:V,hourCycle:"h23"},Uy={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:Mn},zy={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:Kr},qy={year:V,month:V,day:V,hour:V,minute:V},Vy={year:V,month:V,day:V,hour:V,minute:V,second:V},Wy={year:V,month:Mn,day:V,hour:V,minute:V},Ky={year:V,month:Mn,day:V,hour:V,minute:V,second:V},Uk={year:V,month:Mn,day:V,weekday:Mn,hour:V,minute:V},Gy={year:V,month:Kr,day:V,hour:V,minute:V,timeZoneName:Mn},Hy={year:V,month:Kr,day:V,hour:V,minute:V,second:V,timeZoneName:Mn},Zy={year:V,month:Kr,day:V,weekday:Kr,hour:V,minute:V,timeZoneName:Kr},Jy={year:V,month:Kr,day:V,weekday:Kr,hour:V,minute:V,second:V,timeZoneName:Kr};class Il{get type(){throw new No}get name(){throw new No}get ianaName(){return this.name}get isUniversal(){throw new No}offsetName(t,r){throw new No}formatOffset(t,r){throw new No}offset(t){throw new No}equals(t){throw new No}get isValid(){throw new No}}let zd=null;class Ic extends Il{static get instance(){return zd===null&&(zd=new Ic),zd}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return av(t,r,n)}formatOffset(t,r){return el(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const w0=new Map;function zk(e){let t=w0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),w0.set(e,t)),t}const qk={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Vk(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,s,a,l,c,d]=n;return[s,o,i,a,l,c,d]}function Wk(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:s}=r[o],a=qk[i];i==="era"?n[a]=s:ie(a)||(n[a]=parseInt(s,10))}return n}const qd=new Map;class $o extends Il{static create(t){let r=qd.get(t);return r===void 0&&qd.set(t,r=new $o(t)),r}static resetCache(){qd.clear(),w0.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=$o.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return av(t,r,n,this.name)}formatOffset(t,r){return el(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=zk(this.name);let[o,i,s,a,l,c,d]=n.formatToParts?Wk(n,r):Vk(n,r);a==="BC"&&(o=-Math.abs(o)+1);const h=Bc({year:o,month:i,day:s,hour:l===24?0:l,minute:c,second:d,millisecond:0});let m=+r;const g=m%1e3;return m-=g>=0?g:1e3+g,(h-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Og={};function Kk(e,t={}){const r=JSON.stringify([e,t]);let n=Og[r];return n||(n=new Intl.ListFormat(e,t),Og[r]=n),n}const $0=new Map;function k0(e,t={}){const r=JSON.stringify([e,t]);let n=$0.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),$0.set(r,n)),n}const x0=new Map;function Gk(e,t={}){const r=JSON.stringify([e,t]);let n=x0.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),x0.set(r,n)),n}const D0=new Map;function Hk(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=D0.get(o);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),D0.set(o,i)),i}let Ua=null;function Zk(){return Ua||(Ua=new Intl.DateTimeFormat().resolvedOptions().locale,Ua)}const A0=new Map;function Yy(e){let t=A0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),A0.set(e,t)),t}const E0=new Map;function Jk(e){let t=E0.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...Xy,...t}),E0.set(e,t)}return t}function Yk(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=k0(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=k0(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:s}=n;return[o,i,s]}}function Xk(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Qk(e){const t=[];for(let r=1;r<=12;r++){const n=ae.utc(2009,r,1);t.push(e(n))}return t}function ex(e){const t=[];for(let r=1;r<=7;r++){const n=ae.utc(2016,11,13+r);t.push(e(n))}return t}function uu(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function tx(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Yy(e.locale).numberingSystem==="latn"}class rx{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=Gk(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Ph(t,3);return xt(r,this.padTo)}}}class nx{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&$o.create(a).valid?(o=a,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=k0(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class ox{constructor(t,r,n){this.opts={style:"long",...n},!r&&iv()&&(this.rtf=Hk(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Ex(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Xy={firstDay:1,minimalDays:4,weekend:[6,7]};class Re{static fromOpts(t){return Re.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const s=t||lt.defaultLocale,a=s||(i?"en-US":Zk()),l=r||lt.defaultNumberingSystem,c=n||lt.defaultOutputCalendar,d=S0(o)||lt.defaultWeekSettings;return new Re(a,l,c,d,s)}static resetCache(){Ua=null,$0.clear(),x0.clear(),D0.clear(),A0.clear(),E0.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return Re.create(t,r,n,o)}constructor(t,r,n,o,i){const[s,a,l]=Yk(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||l||null,this.weekSettings=o,this.intl=Xk(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=tx(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Re.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,S0(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return uu(this,t,cv,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const o=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";if(!this.monthsCache[i][t]){const s=n?a=>this.dtFormatter(a,o).format():a=>this.extract(a,o,"month");this.monthsCache[i][t]=Qk(s)}return this.monthsCache[i][t]})}weekdays(t,r=!1){return uu(this,t,hv,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=ex(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return uu(this,void 0,()=>mv,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[ae.utc(2016,11,13,9),ae.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return uu(this,t,gv,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[ae.utc(-40,1,1),ae.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),s=i.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new rx(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new nx(t,this.intl,r)}relFormatter(t={}){return new ox(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Kk(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Yy(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:sv()?Jk(this.locale):Xy}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Vd=null;class vr extends Il{static get utcInstance(){return Vd===null&&(Vd=new vr(0)),Vd}static instance(t){return t===0?vr.utcInstance:new vr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new vr(Rc(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${el(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${el(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return el(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class ix extends Il{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function _o(e,t){if(ie(e)||e===null)return t;if(e instanceof Il)return e;if(dx(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Ic.instance:r==="utc"||r==="gmt"?vr.utcInstance:vr.parseSpecifier(r)||$o.create(e)}else return Ko(e)?vr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new ix(e)}const Mh={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Bg={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},sx=Mh.hanidec.replace(/[\[|\]]/g,"").split("");function ax(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Mh.hanidec)!==-1)t+=sx.indexOf(e[r]);else for(const o in Bg){const[i,s]=Bg[o];n>=i&&n<=s&&(t+=n-i)}}return parseInt(t,10)}else return t}const C0=new Map;function lx(){C0.clear()}function kn({numberingSystem:e},t=""){const r=e||"latn";let n=C0.get(r);n===void 0&&(n=new Map,C0.set(r,n));let o=n.get(t);return o===void 0&&(o=new RegExp(`${Mh[r]}${t}`),n.set(t,o)),o}let Rg=()=>Date.now(),Lg="system",jg=null,_g=null,Ug=null,zg=60,qg,Vg=null;class lt{static get now(){return Rg}static set now(t){Rg=t}static set defaultZone(t){Lg=t}static get defaultZone(){return _o(Lg,Ic.instance)}static get defaultLocale(){return jg}static set defaultLocale(t){jg=t}static get defaultNumberingSystem(){return _g}static set defaultNumberingSystem(t){_g=t}static get defaultOutputCalendar(){return Ug}static set defaultOutputCalendar(t){Ug=t}static get defaultWeekSettings(){return Vg}static set defaultWeekSettings(t){Vg=S0(t)}static get twoDigitCutoffYear(){return zg}static set twoDigitCutoffYear(t){zg=t%100}static get throwOnInvalid(){return qg}static set throwOnInvalid(t){qg=t}static resetCaches(){Re.resetCache(),$o.resetCache(),ae.resetCache(),lx()}}class En{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Qy=[0,31,59,90,120,151,181,212,243,273,304,334],ev=[0,31,60,91,121,152,182,213,244,274,305,335];function fn(e,t){return new En("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Fh(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function tv(e,t,r){return r+(Ol(e)?ev:Qy)[t-1]}function rv(e,t){const r=Ol(e)?ev:Qy,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function Th(e,t){return(e-t+7)%7+1}function Qu(e,t=4,r=1){const{year:n,month:o,day:i}=e,s=tv(n,o,i),a=Th(Fh(n,o,i),r);let l=Math.floor((s-a+14-t)/7),c;return l<1?(c=n-1,l=ul(c,t,r)):l>ul(n,t,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:a,...Lc(e)}}function Wg(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,s=Th(Fh(n,1,t),r),a=Fs(n);let l=o*7+i-s-7+t,c;l<1?(c=n-1,l+=Fs(c)):l>a?(c=n+1,l-=Fs(n)):c=n;const{month:d,day:f}=rv(c,l);return{year:c,month:d,day:f,...Lc(e)}}function Wd(e){const{year:t,month:r,day:n}=e,o=tv(t,r,n);return{year:t,ordinal:o,...Lc(e)}}function Kg(e){const{year:t,ordinal:r}=e,{month:n,day:o}=rv(t,r);return{year:t,month:n,day:o,...Lc(e)}}function Gg(e,t){if(!ie(e.localWeekday)||!ie(e.localWeekNumber)||!ie(e.localWeekYear)){if(!ie(e.weekday)||!ie(e.weekNumber)||!ie(e.weekYear))throw new As("Cannot mix locale-based week fields with ISO-based week fields");return ie(e.localWeekday)||(e.weekday=e.localWeekday),ie(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),ie(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function ux(e,t=4,r=1){const n=Oc(e.weekYear),o=hn(e.weekNumber,1,ul(e.weekYear,t,r)),i=hn(e.weekday,1,7);return n?o?i?!1:fn("weekday",e.weekday):fn("week",e.weekNumber):fn("weekYear",e.weekYear)}function cx(e){const t=Oc(e.year),r=hn(e.ordinal,1,Fs(e.year));return t?r?!1:fn("ordinal",e.ordinal):fn("year",e.year)}function nv(e){const t=Oc(e.year),r=hn(e.month,1,12),n=hn(e.day,1,ec(e.year,e.month));return t?r?n?!1:fn("day",e.day):fn("month",e.month):fn("year",e.year)}function ov(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=hn(t,0,23)||t===24&&r===0&&n===0&&o===0,s=hn(r,0,59),a=hn(n,0,59),l=hn(o,0,999);return i?s?a?l?!1:fn("millisecond",o):fn("second",n):fn("minute",r):fn("hour",t)}function ie(e){return typeof e>"u"}function Ko(e){return typeof e=="number"}function Oc(e){return typeof e=="number"&&e%1===0}function dx(e){return typeof e=="string"}function fx(e){return Object.prototype.toString.call(e)==="[object Date]"}function iv(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function sv(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function hx(e){return Array.isArray(e)?e:[e]}function Hg(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function mx(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function js(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function S0(e){if(e==null)return null;if(typeof e!="object")throw new fr("Week settings must be an object");if(!hn(e.firstDay,1,7)||!hn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!hn(t,1,7)))throw new fr("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function hn(e,t,r){return Oc(e)&&e>=t&&e<=r}function gx(e,t){return e-t*Math.floor(e/t)}function xt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function Ro(e){if(!(ie(e)||e===null||e===""))return parseInt(e,10)}function yi(e){if(!(ie(e)||e===null||e===""))return parseFloat(e)}function Nh(e){if(!(ie(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Ph(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function Ol(e){return e%4===0&&(e%100!==0||e%400===0)}function Fs(e){return Ol(e)?366:365}function ec(e,t){const r=gx(t-1,12)+1,n=e+(t-r)/12;return r===2?Ol(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Bc(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Zg(e,t,r){return-Th(Fh(e,1,t),r)+t-1}function ul(e,t=4,r=1){const n=Zg(e,t,r),o=Zg(e+1,t,r);return(Fs(e)-n+o)/7}function M0(e){return e>99?e:e>lt.twoDigitCutoffYear?1900+e:2e3+e}function av(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const s={timeZoneName:t,...i},a=new Intl.DateTimeFormat(r,s).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function Rc(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function lv(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new fr(`Invalid unit value ${e}`);return t}function tc(e,t){const r={};for(const n in e)if(js(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=lv(o)}return r}function el(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${xt(r,2)}:${xt(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${xt(r,2)}${xt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Lc(e){return mx(e,["hour","minute","second","millisecond"])}const px=["January","February","March","April","May","June","July","August","September","October","November","December"],uv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],bx=["J","F","M","A","M","J","J","A","S","O","N","D"];function cv(e){switch(e){case"narrow":return[...bx];case"short":return[...uv];case"long":return[...px];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const dv=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],yx=["M","T","W","T","F","S","S"];function hv(e){switch(e){case"narrow":return[...yx];case"short":return[...fv];case"long":return[...dv];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const mv=["AM","PM"],vx=["Before Christ","Anno Domini"],wx=["BC","AD"],$x=["B","A"];function gv(e){switch(e){case"narrow":return[...$x];case"short":return[...wx];case"long":return[...vx];default:return null}}function kx(e){return mv[e.hour<12?0:1]}function xx(e,t){return hv(t)[e.weekday-1]}function Dx(e,t){return cv(t)[e.month-1]}function Ax(e,t){return gv(t)[e.year<0?0:1]}function Ex(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),l=a===1,c=o[e],d=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return s?`${a} ${d} ago`:`in ${a} ${d}`}function Jg(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Cx={D:Xu,DD:Ny,DDD:Py,DDDD:Iy,t:Oy,tt:By,ttt:Ry,tttt:Ly,T:jy,TT:_y,TTT:Uy,TTTT:zy,f:qy,ff:Wy,fff:Gy,ffff:Zy,F:Vy,FF:Ky,FFF:Hy,FFFF:Jy};class mr{static create(t,r={}){return new mr(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||o)&&i.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",o=!o):o||a===r?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return Cx[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return xt(t,r);const o={...this.opts};return r>0&&(o.padTo=r),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(m,g)=>this.loc.extract(t,m,g),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?kx(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(m,g)=>n?Dx(t,m):i(g?{month:m}:{month:m,day:"numeric"},"month"),c=(m,g)=>n?xx(t,m):i(g?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),d=m=>{const g=mr.macroTokenToFormatOpts(m);return g?this.formatWithSystemDefault(t,g):m},f=m=>n?Ax(t,m):i({era:m},"era"),h=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(m)}};return Jg(mr.parseFormat(r),h)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=d=>{switch(d[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},i=(d,f)=>h=>{const m=o(h);if(m){const g=f.isNegativeDuration&&m!==f.largestUnit?n:1;let b;return this.opts.signMode==="negativeLargestOnly"&&m!==f.largestUnit?b="never":this.opts.signMode==="all"?b="always":b="auto",this.num(d.get(m)*g,h.length,b)}else return h},s=mr.parseFormat(r),a=s.reduce((d,{literal:f,val:h})=>f?d:d.concat(h),[]),l=t.shiftTo(...a.map(o).filter(d=>d)),c={isNegativeDuration:l<0,largestUnit:Object.keys(l.values)[0]};return Jg(s,i(l,c))}}const pv=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function sa(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function aa(...e){return t=>e.reduce(([r,n,o],i)=>{const[s,a,l]=i(t,o);return[{...r,...s},a||n,l]},[{},null,1]).slice(0,2)}function la(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function bv(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=Ro(t[r+o]);return[n,null,r+o]}}const yv=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,Sx=`(?:${yv.source}?(?:\\[(${pv.source})\\])?)?`,Ih=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,vv=RegExp(`${Ih.source}${Sx}`),Oh=RegExp(`(?:[Tt]${vv.source})?`),Mx=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Fx=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Tx=/(\d{4})-?(\d{3})/,Nx=bv("weekYear","weekNumber","weekDay"),Px=bv("year","ordinal"),Ix=/(\d{4})-(\d\d)-(\d\d)/,wv=RegExp(`${Ih.source} ?(?:${yv.source}|(${pv.source}))?`),Ox=RegExp(`(?: ${wv.source})?`);function Ts(e,t,r){const n=e[t];return ie(n)?r:Ro(n)}function Bx(e,t){return[{year:Ts(e,t),month:Ts(e,t+1,1),day:Ts(e,t+2,1)},null,t+3]}function ua(e,t){return[{hours:Ts(e,t,0),minutes:Ts(e,t+1,0),seconds:Ts(e,t+2,0),milliseconds:Nh(e[t+3])},null,t+4]}function Bl(e,t){const r=!e[t]&&!e[t+1],n=Rc(e[t+1],e[t+2]),o=r?null:vr.instance(n);return[{},o,t+3]}function Rl(e,t){const r=e[t]?$o.create(e[t]):null;return[{},r,t+1]}const Rx=RegExp(`^T?${Ih.source}$`),Lx=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function jx(e){const[t,r,n,o,i,s,a,l,c]=e,d=t[0]==="-",f=l&&l[0]==="-",h=(m,g=!1)=>m!==void 0&&(g||m&&d)?-m:m;return[{years:h(yi(r)),months:h(yi(n)),weeks:h(yi(o)),days:h(yi(i)),hours:h(yi(s)),minutes:h(yi(a)),seconds:h(yi(l),l==="-0"),milliseconds:h(Nh(c),f)}]}const _x={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Bh(e,t,r,n,o,i,s){const a={year:t.length===2?M0(Ro(t)):Ro(t),month:uv.indexOf(r)+1,day:Ro(n),hour:Ro(o),minute:Ro(i)};return s&&(a.second=Ro(s)),e&&(a.weekday=e.length>3?dv.indexOf(e)+1:fv.indexOf(e)+1),a}const Ux=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function zx(e){const[,t,r,n,o,i,s,a,l,c,d,f]=e,h=Bh(t,o,n,r,i,s,a);let m;return l?m=_x[l]:c?m=0:m=Rc(d,f),[h,new vr(m)]}function qx(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Vx=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Wx=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Kx=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Yg(e){const[,t,r,n,o,i,s,a]=e;return[Bh(t,o,n,r,i,s,a),vr.utcInstance]}function Gx(e){const[,t,r,n,o,i,s,a]=e;return[Bh(t,a,r,n,o,i,s),vr.utcInstance]}const Hx=sa(Mx,Oh),Zx=sa(Fx,Oh),Jx=sa(Tx,Oh),Yx=sa(vv),$v=aa(Bx,ua,Bl,Rl),Xx=aa(Nx,ua,Bl,Rl),Qx=aa(Px,ua,Bl,Rl),e4=aa(ua,Bl,Rl);function t4(e){return la(e,[Hx,$v],[Zx,Xx],[Jx,Qx],[Yx,e4])}function r4(e){return la(qx(e),[Ux,zx])}function n4(e){return la(e,[Vx,Yg],[Wx,Yg],[Kx,Gx])}function o4(e){return la(e,[Lx,jx])}const i4=aa(ua);function s4(e){return la(e,[Rx,i4])}const a4=sa(Ix,Ox),l4=sa(wv),u4=aa(ua,Bl,Rl);function c4(e){return la(e,[a4,$v],[l4,u4])}const Xg="Invalid Duration",kv={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},d4={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...kv},an=146097/400,ms=146097/4800,f4={years:{quarters:4,months:12,weeks:an/7,days:an,hours:an*24,minutes:an*24*60,seconds:an*24*60*60,milliseconds:an*24*60*60*1e3},quarters:{months:3,weeks:an/28,days:an/4,hours:an*24/4,minutes:an*24*60/4,seconds:an*24*60*60/4,milliseconds:an*24*60*60*1e3/4},months:{weeks:ms/7,days:ms,hours:ms*24,minutes:ms*24*60,seconds:ms*24*60*60,milliseconds:ms*24*60*60*1e3},...kv},Fi=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],h4=Fi.slice(0).reverse();function ro(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new Ee(n)}function xv(e,t){let r=t.milliseconds??0;for(const n of h4.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Qg(e,t){const r=xv(e,t)<0?-1:1;Fi.reduceRight((n,o)=>{if(ie(t[o]))return n;if(n){const i=t[n]*r,s=e[o][n],a=Math.floor(i/s);t[o]+=a*r,t[n]-=a*s*r}return o},null),Fi.reduce((n,o)=>{if(ie(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function ep(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class Ee{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?f4:d4;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Re.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return Ee.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new fr(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new Ee({values:tc(t,Ee.normalizeUnit),loc:Re.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Ko(t))return Ee.fromMillis(t);if(Ee.isDuration(t))return t;if(typeof t=="object")return Ee.fromObject(t);throw new fr(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=o4(t);return n?Ee.fromObject(n,r):Ee.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=s4(t);return n?Ee.fromObject(n,r):Ee.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new fr("need to specify a reason the Duration is invalid");const n=t instanceof En?t:new En(t,r);if(lt.throwOnInvalid)throw new jk(n);return new Ee({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Ty(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?mr.create(this.loc,n).formatDurationFromString(this,t):Xg}toHuman(t={}){if(!this.isValid)return Xg;const r=t.showZeros!==!1,n=Fi.map(o=>{const i=this.values[o];return ie(i)||i===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:o.slice(0,-1)}).format(i)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Ph(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},ae.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?xv(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=Ee.fromDurationLike(t),n={};for(const o of Fi)(js(r.values,o)||js(this.values,o))&&(n[o]=r.get(o)+this.get(o));return ro(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=Ee.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=lv(t(this.values[n],n));return ro(this,{values:r},!0)}get(t){return this[Ee.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...tc(t,Ee.normalizeUnit)};return ro(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return ro(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Qg(this.matrix,t),ro(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=ep(this.normalize().shiftToAll().toObject());return ro(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>Ee.normalizeUnit(s));const r={},n={},o=this.toObject();let i;for(const s of Fi)if(t.indexOf(s)>=0){i=s;let a=0;for(const c in n)a+=this.matrix[c][s]*n[c],n[c]=0;Ko(o[s])&&(a+=o[s]);const l=Math.trunc(a);r[s]=l,n[s]=(a*1e3-l*1e3)/1e3}else Ko(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(r[i]+=s===i?n[s]:n[s]/this.matrix[i][s]);return Qg(this.matrix,r),ro(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return ro(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=ep(this.values);return ro(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Fi)if(!r(this.values[n],t.values[n]))return!1;return!0}}const gs="Invalid Interval";function m4(e,t){return!e||!e.isValid?gt.invalid("missing or invalid start"):!t||!t.isValid?gt.invalid("missing or invalid end"):t<e?gt.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class gt{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new fr("need to specify a reason the Interval is invalid");const n=t instanceof En?t:new En(t,r);if(lt.throwOnInvalid)throw new Lk(n);return new gt({invalid:n})}static fromDateTimes(t,r){const n=Sa(t),o=Sa(r),i=m4(n,o);return i??new gt({start:n,end:o})}static after(t,r){const n=Ee.fromDurationLike(r),o=Sa(t);return gt.fromDateTimes(o,o.plus(n))}static before(t,r){const n=Ee.fromDurationLike(r),o=Sa(t);return gt.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,s;try{i=ae.fromISO(n,r),s=i.isValid}catch{s=!1}let a,l;try{a=ae.fromISO(o,r),l=a.isValid}catch{l=!1}if(s&&l)return gt.fromDateTimes(i,a);if(s){const c=Ee.fromISO(o,r);if(c.isValid)return gt.after(i,c)}else if(l){const c=Ee.fromISO(n,r);if(c.isValid)return gt.before(a,c)}}return gt.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?gt.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Sa).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const s=r[i]||this.e,a=+s>+this.e?this.e:s;n.push(gt.fromDateTimes(o,a)),o=a,i+=1}return n}splitBy(t){const r=Ee.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(l=>l*o));i=+a>+this.e?this.e:a,s.push(gt.fromDateTimes(n,i)),n=i,o+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:gt.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return gt.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],s)=>i?i.overlaps(s)||i.abutsStart(s)?[o,i.union(s)]:[o.concat([i]),s]:[o,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),s=Array.prototype.concat(...i),a=s.sort((l,c)=>l.time-c.time);for(const l of a)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(gt.fromDateTimes(r,l.time)),r=null);return gt.merge(o)}difference(...t){return gt.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:gs}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Xu,r={}){return this.isValid?mr.create(this.s.loc.clone(r),t).formatInterval(this):gs}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:gs}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:gs}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:gs}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:gs}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):Ee.invalid(this.invalidReason)}mapEndpoints(t){return gt.fromDateTimes(t(this.s),t(this.e))}}class cu{static hasDST(t=lt.defaultZone){const r=ae.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return $o.isValidZone(t)}static normalizeZone(t){return _o(t,lt.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Re.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Re.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Re.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Re.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Re.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Re.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Re.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Re.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Re.create(r,null,"gregory").eras(t)}static features(){return{relative:iv(),localeWeek:sv()}}}function tp(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(Ee.fromMillis(n).as("days"))}function g4(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=tp(l,c);return(d-d%7)/7}],["days",tp]],o={},i=e;let s,a;for(const[l,c]of n)r.indexOf(l)>=0&&(s=l,o[l]=c(e,t),a=i.plus(o),a>t?(o[l]--,e=i.plus(o),e>t&&(a=e,o[l]--,e=i.plus(o))):e=a);return[e,o,a,s]}function p4(e,t,r,n){let[o,i,s,a]=g4(e,t,r);const l=t-o,c=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(s<t&&(s=o.plus({[a]:1})),s!==o&&(i[a]=(i[a]||0)+l/(s-o)));const d=Ee.fromObject(i,n);return c.length>0?Ee.fromMillis(l,n).shiftTo(...c).plus(d):d}const b4="missing Intl.DateTimeFormat.formatToParts support";function Pe(e,t=r=>r){return{regex:e,deser:([r])=>t(ax(r))}}const y4=" ",Dv=`[ ${y4}]`,Av=new RegExp(Dv,"g");function v4(e){return e.replace(/\./g,"\\.?").replace(Av,Dv)}function rp(e){return e.replace(/\./g,"").replace(Av," ").toLowerCase()}function xn(e,t){return e===null?null:{regex:RegExp(e.map(v4).join("|")),deser:([r])=>e.findIndex(n=>rp(r)===rp(n))+t}}function np(e,t){return{regex:e,deser:([,r,n])=>Rc(r,n),groups:t}}function du(e){return{regex:e,deser:([t])=>t}}function w4(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function $4(e,t){const r=kn(t),n=kn(t,"{2}"),o=kn(t,"{3}"),i=kn(t,"{4}"),s=kn(t,"{6}"),a=kn(t,"{1,2}"),l=kn(t,"{1,3}"),c=kn(t,"{1,6}"),d=kn(t,"{1,9}"),f=kn(t,"{2,4}"),h=kn(t,"{4,6}"),m=y=>({regex:RegExp(w4(y.val)),deser:([$])=>$,literal:!0}),b=(y=>{if(e.literal)return m(y);switch(y.val){case"G":return xn(t.eras("short"),0);case"GG":return xn(t.eras("long"),0);case"y":return Pe(c);case"yy":return Pe(f,M0);case"yyyy":return Pe(i);case"yyyyy":return Pe(h);case"yyyyyy":return Pe(s);case"M":return Pe(a);case"MM":return Pe(n);case"MMM":return xn(t.months("short",!0),1);case"MMMM":return xn(t.months("long",!0),1);case"L":return Pe(a);case"LL":return Pe(n);case"LLL":return xn(t.months("short",!1),1);case"LLLL":return xn(t.months("long",!1),1);case"d":return Pe(a);case"dd":return Pe(n);case"o":return Pe(l);case"ooo":return Pe(o);case"HH":return Pe(n);case"H":return Pe(a);case"hh":return Pe(n);case"h":return Pe(a);case"mm":return Pe(n);case"m":return Pe(a);case"q":return Pe(a);case"qq":return Pe(n);case"s":return Pe(a);case"ss":return Pe(n);case"S":return Pe(l);case"SSS":return Pe(o);case"u":return du(d);case"uu":return du(a);case"uuu":return Pe(r);case"a":return xn(t.meridiems(),0);case"kkkk":return Pe(i);case"kk":return Pe(f,M0);case"W":return Pe(a);case"WW":return Pe(n);case"E":case"c":return Pe(r);case"EEE":return xn(t.weekdays("short",!1),1);case"EEEE":return xn(t.weekdays("long",!1),1);case"ccc":return xn(t.weekdays("short",!0),1);case"cccc":return xn(t.weekdays("long",!0),1);case"Z":case"ZZ":return np(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return np(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return du(/[a-z_+-/]{1,256}?/i);case" ":return du(/[^\S\n\r]/);default:return m(y)}})(e)||{invalidReason:b4};return b.token=e,b}const k4={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function x4(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=k4[s];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function D4(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function A4(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const s in r)if(js(r,s)){const a=r[s],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(o[a.token.val[0]]=a.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function E4(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return ie(e.z)||(r=$o.create(e.z)),ie(e.Z)||(r||(r=new vr(e.Z)),n=e.Z),ie(e.q)||(e.M=(e.q-1)*3+1),ie(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),ie(e.u)||(e.S=Nh(e.u)),[Object.keys(e).reduce((i,s)=>{const a=t(s);return a&&(i[a]=e[s]),i},{}),r,n]}let Kd=null;function C4(){return Kd||(Kd=ae.fromMillis(1555555555555)),Kd}function S4(e,t){if(e.literal)return e;const r=mr.macroTokenToFormatOpts(e.val),n=Mv(r,t);return n==null||n.includes(void 0)?e:n}function Ev(e,t){return Array.prototype.concat(...e.map(r=>S4(r,t)))}class Cv{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Ev(mr.parseFormat(r),t),this.units=this.tokens.map(n=>$4(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=D4(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(t){if(this.isValid){const[r,n]=A4(t,this.regex,this.handlers),[o,i,s]=n?E4(n):[null,null,void 0];if(js(n,"a")&&js(n,"H"))throw new As("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:o,zone:i,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Sv(e,t,r){return new Cv(e,r).explainFromTokens(t)}function M4(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:s}=Sv(e,t,r);return[n,o,i,s]}function Mv(e,t){if(!e)return null;const n=mr.create(t,e).dtFormatter(C4()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(s=>x4(s,e,i))}const Gd="Invalid DateTime",op=864e13;function za(e){return new En("unsupported zone",`the zone "${e.name}" is not supported`)}function Hd(e){return e.weekData===null&&(e.weekData=Qu(e.c)),e.weekData}function Zd(e){return e.localWeekData===null&&(e.localWeekData=Qu(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function vi(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ae({...r,...t,old:r})}function Fv(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function fu(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Ru(e,t,r){return Fv(Bc(e),t,r)}function ip(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,ec(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=Ee.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Bc(i);let[l,c]=Fv(a,r,e.zone);return s!==0&&(l+=s,c=e.zone.offset(l)),{ts:l,o:c}}function ps(e,t,r,n,o,i){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const l=t||a,c=ae.fromObject(e,{...r,zone:l,specificOffset:i});return s?c:c.setZone(a)}else return ae.invalid(new En("unparsable",`the input "${o}" can't be parsed as ${n}`))}function hu(e,t,r=!0){return e.isValid?mr.create(Re.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Jd(e,t,r){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=xt(e.c.year,n?6:4),r==="year")return o;if(t){if(o+="-",o+=xt(e.c.month),r==="month")return o;o+="-"}else if(o+=xt(e.c.month),r==="month")return o;return o+=xt(e.c.day),o}function sp(e,t,r,n,o,i,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,l="";switch(s){case"day":case"month":case"year":break;default:if(l+=xt(e.c.hour),s==="hour")break;if(t){if(l+=":",l+=xt(e.c.minute),s==="minute")break;a&&(l+=":",l+=xt(e.c.second))}else{if(l+=xt(e.c.minute),s==="minute")break;a&&(l+=xt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(l+=".",l+=xt(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!i?l+="Z":e.o<0?(l+="-",l+=xt(Math.trunc(-e.o/60)),l+=":",l+=xt(Math.trunc(-e.o%60))):(l+="+",l+=xt(Math.trunc(e.o/60)),l+=":",l+=xt(Math.trunc(e.o%60)))),i&&(l+="["+e.zone.ianaName+"]"),l}const Tv={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},F4={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},T4={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Lu=["year","month","day","hour","minute","second","millisecond"],N4=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],P4=["year","ordinal","hour","minute","second","millisecond"];function ju(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Ty(e);return t}function ap(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return ju(e)}}function I4(e){if(qa===void 0&&(qa=lt.now()),e.type!=="iana")return e.offset(qa);const t=e.name;let r=F0.get(t);return r===void 0&&(r=e.offset(qa),F0.set(t,r)),r}function lp(e,t){const r=_o(t.zone,lt.defaultZone);if(!r.isValid)return ae.invalid(za(r));const n=Re.fromObject(t);let o,i;if(ie(e.year))o=lt.now();else{for(const l of Lu)ie(e[l])&&(e[l]=Tv[l]);const s=nv(e)||ov(e);if(s)return ae.invalid(s);const a=I4(r);[o,i]=Ru(e,a,r)}return new ae({ts:o,zone:r,loc:n,o:i})}function up(e,t,r){const n=ie(r.round)?!0:r.round,o=ie(r.rounding)?"trunc":r.rounding,i=(a,l)=>(a=Ph(a,n||r.calendary?0:2,r.calendary?"round":o),t.loc.clone(r).relFormatter(r).format(a,l)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const l=s(a);if(Math.abs(l)>=1)return i(l,a)}return i(e>t?-0:0,r.units[r.units.length-1])}function cp(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let qa;const F0=new Map;class ae{constructor(t){const r=t.zone||lt.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new En("invalid input"):null)||(r.isValid?null:za(r));this.ts=ie(t.ts)?lt.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const a=Ko(t.o)&&!t.old?t.o:r.offset(this.ts);o=fu(this.ts,a),n=Number.isNaN(o.year)?new En("invalid input"):null,o=n?null:o,i=n?null:a}this._zone=r,this.loc=t.loc||Re.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new ae({})}static local(){const[t,r]=cp(arguments),[n,o,i,s,a,l,c]=r;return lp({year:n,month:o,day:i,hour:s,minute:a,second:l,millisecond:c},t)}static utc(){const[t,r]=cp(arguments),[n,o,i,s,a,l,c]=r;return t.zone=vr.utcInstance,lp({year:n,month:o,day:i,hour:s,minute:a,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=fx(t)?t.valueOf():NaN;if(Number.isNaN(n))return ae.invalid("invalid input");const o=_o(r.zone,lt.defaultZone);return o.isValid?new ae({ts:n,zone:o,loc:Re.fromObject(r)}):ae.invalid(za(o))}static fromMillis(t,r={}){if(Ko(t))return t<-op||t>op?ae.invalid("Timestamp out of range"):new ae({ts:t,zone:_o(r.zone,lt.defaultZone),loc:Re.fromObject(r)});throw new fr(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Ko(t))return new ae({ts:t*1e3,zone:_o(r.zone,lt.defaultZone),loc:Re.fromObject(r)});throw new fr("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=_o(r.zone,lt.defaultZone);if(!n.isValid)return ae.invalid(za(n));const o=Re.fromObject(r),i=tc(t,ap),{minDaysInFirstWeek:s,startOfWeek:a}=Gg(i,o),l=lt.now(),c=ie(r.specificOffset)?n.offset(l):r.specificOffset,d=!ie(i.ordinal),f=!ie(i.year),h=!ie(i.month)||!ie(i.day),m=f||h,g=i.weekYear||i.weekNumber;if((m||d)&&g)throw new As("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&d)throw new As("Can't mix ordinal dates with month/day");const b=g||i.weekday&&!m;let y,$,x=fu(l,c);b?(y=N4,$=F4,x=Qu(x,s,a)):d?(y=P4,$=T4,x=Wd(x)):(y=Lu,$=Tv);let E=!1;for(const ge of y){const ve=i[ge];ie(ve)?E?i[ge]=$[ge]:i[ge]=x[ge]:E=!0}const N=b?ux(i,s,a):d?cx(i):nv(i),B=N||ov(i);if(B)return ae.invalid(B);const Z=b?Wg(i,s,a):d?Kg(i):i,[Q,ee]=Ru(Z,c,n),J=new ae({ts:Q,zone:n,o:ee,loc:o});return i.weekday&&m&&t.weekday!==J.weekday?ae.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${J.toISO()}`):J.isValid?J:ae.invalid(J.invalid)}static fromISO(t,r={}){const[n,o]=t4(t);return ps(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=r4(t);return ps(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=n4(t);return ps(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(ie(t)||ie(r))throw new fr("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,s=Re.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[a,l,c,d]=M4(s,t,r);return d?ae.invalid(d):ps(a,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return ae.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=c4(t);return ps(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new fr("need to specify a reason the DateTime is invalid");const n=t instanceof En?t:new En(t,r);if(lt.throwOnInvalid)throw new Rk(n);return new ae({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Mv(t,Re.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return Ev(mr.parseFormat(t),Re.fromObject(r)).map(o=>o.val).join("")}static resetCache(){qa=void 0,F0.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Hd(this).weekYear:NaN}get weekNumber(){return this.isValid?Hd(this).weekNumber:NaN}get weekday(){return this.isValid?Hd(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Zd(this).weekday:NaN}get localWeekNumber(){return this.isValid?Zd(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Zd(this).weekYear:NaN}get ordinal(){return this.isValid?Wd(this.c).ordinal:NaN}get monthShort(){return this.isValid?cu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?cu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?cu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?cu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Bc(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),s=this.zone.offset(n-o*r),a=this.zone.offset(n-i*r);if(s===a)return[this];const l=n-s*r,c=n-a*r,d=fu(l,s),f=fu(c,a);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[vi(this,{ts:l}),vi(this,{ts:c})]:[this]}get isInLeapYear(){return Ol(this.year)}get daysInMonth(){return ec(this.year,this.month)}get daysInYear(){return this.isValid?Fs(this.year):NaN}get weeksInWeekYear(){return this.isValid?ul(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ul(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=mr.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(vr.instance(t),r)}toLocal(){return this.setZone(lt.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=_o(t,lt.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),s=this.toObject();[o]=Ru(s,i,t)}return vi(this,{ts:o,zone:t})}else return ae.invalid(za(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return vi(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=tc(t,ap),{minDaysInFirstWeek:n,startOfWeek:o}=Gg(r,this.loc),i=!ie(r.weekYear)||!ie(r.weekNumber)||!ie(r.weekday),s=!ie(r.ordinal),a=!ie(r.year),l=!ie(r.month)||!ie(r.day),c=a||l,d=r.weekYear||r.weekNumber;if((c||s)&&d)throw new As("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&s)throw new As("Can't mix ordinal dates with month/day");let f;i?f=Wg({...Qu(this.c,n,o),...r},n,o):ie(r.ordinal)?(f={...this.toObject(),...r},ie(r.day)&&(f.day=Math.min(ec(f.year,f.month),f.day))):f=Kg({...Wd(this.c),...r});const[h,m]=Ru(f,this.o,this.zone);return vi(this,{ts:h,o:m})}plus(t){if(!this.isValid)return this;const r=Ee.fromDurationLike(t);return vi(this,ip(this,r))}minus(t){if(!this.isValid)return this;const r=Ee.fromDurationLike(t).negate();return vi(this,ip(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=Ee.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:s}=this;s<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?mr.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Gd}toLocaleString(t=Xu,r={}){return this.isValid?mr.create(this.loc.clone(r),t).formatDateTime(this):Gd}toLocaleParts(t={}){return this.isValid?mr.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=ju(s);const a=t==="extended";let l=Jd(this,a,s);return Lu.indexOf(s)>=3&&(l+="T"),l+=sp(this,a,r,n,o,i,s),l}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?Jd(this,t==="extended",ju(r)):null}toISOWeekDate(){return hu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=ju(a),(o&&Lu.indexOf(a)>=3?"T":"")+sp(this,s==="extended",r,t,n,i,a)):null}toRFC2822(){return hu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return hu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Jd(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),hu(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Gd}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return Ee.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=hx(r).map(Ee.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,l=s?t:this,c=p4(a,l,i,o);return s?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(ae.now(),t,r)}until(t){return this.isValid?gt.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||ae.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),up(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?up(t.base||ae.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(ae.isDateTime))throw new fr("min requires all arguments be DateTimes");return Hg(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(ae.isDateTime))throw new fr("max requires all arguments be DateTimes");return Hg(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,s=Re.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return Sv(s,t,r)}static fromStringExplain(t,r,n={}){return ae.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:o=null}=r,i=Re.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new Cv(i,t)}static fromFormatParser(t,r,n={}){if(ie(t)||ie(r))throw new fr("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:i=null}=n,s=Re.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});if(!s.equals(r.locale))throw new fr(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:l,specificOffset:c,invalidReason:d}=r.explainFromTokens(t);return d?ae.invalid(d):ps(a,l,n,`format ${r.format}`,t,c)}static get DATE_SHORT(){return Xu}static get DATE_MED(){return Ny}static get DATE_MED_WITH_WEEKDAY(){return _k}static get DATE_FULL(){return Py}static get DATE_HUGE(){return Iy}static get TIME_SIMPLE(){return Oy}static get TIME_WITH_SECONDS(){return By}static get TIME_WITH_SHORT_OFFSET(){return Ry}static get TIME_WITH_LONG_OFFSET(){return Ly}static get TIME_24_SIMPLE(){return jy}static get TIME_24_WITH_SECONDS(){return _y}static get TIME_24_WITH_SHORT_OFFSET(){return Uy}static get TIME_24_WITH_LONG_OFFSET(){return zy}static get DATETIME_SHORT(){return qy}static get DATETIME_SHORT_WITH_SECONDS(){return Vy}static get DATETIME_MED(){return Wy}static get DATETIME_MED_WITH_SECONDS(){return Ky}static get DATETIME_MED_WITH_WEEKDAY(){return Uk}static get DATETIME_FULL(){return Gy}static get DATETIME_FULL_WITH_SECONDS(){return Hy}static get DATETIME_HUGE(){return Zy}static get DATETIME_HUGE_WITH_SECONDS(){return Jy}}function Sa(e){if(ae.isDateTime(e))return e;if(e&&e.valueOf&&Ko(e.valueOf()))return ae.fromJSDate(e);if(e&&typeof e=="object")return ae.fromObject(e);throw new fr(`Unknown datetime argument: ${e}, of type ${typeof e}`)}Intl.DateTimeFormat().resolvedOptions().locale;var H;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(H||(H={}));H.Year,H.Hour,H.Minute,H.Second,H.Millisecond;H.Month,H.Week,H.Day;H.Millisecond,H.Second,H.Minute,H.Hour,H.Day,H.Week,H.Month,H.Year;const dp={min:0,max:23},fp={min:0,max:59},hp={min:0,max:59},mp={min:0,max:999};var le;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(le||(le={}));const O4=[le.Milliseconds,le.Seconds,le.Minutes,le.Hours,le.Days,le.Weeks,le.Months,le.Years];le.Milliseconds+"",le.Seconds+"",le.Minutes+"",le.Hours+"",le.Days+"",le.Weeks+"",le.Months+"",le.Years+"";le.Years+"",H.Year,le.Months+"",H.Month,le.Weeks+"",H.Week,le.Days+"",H.Day,le.Hours+"",H.Hour,le.Minutes+"",H.Minute,le.Seconds+"",H.Second,le.Milliseconds+"",H.Millisecond;H.Year+"",le.Years,H.Month+"",le.Months,H.Week+"",le.Weeks,H.Day+"",le.Days,H.Hour+"",le.Hours,H.Minute+"",le.Minutes,H.Second+"",le.Seconds,H.Millisecond+"",le.Milliseconds;function B4(e){return O4.filter(t=>e[t])}function T0(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function R4(e){return T0(Math.max(e-.4,0),{decimalCount:0})}function gp(e){return e===0?0:Math.sign(e)}function _s(e,t,r={}){const n={},o={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},i=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=B4(t).reverse();if(i||s)return a.forEach(d=>{n[d]=i?1/0:-1/0}),n;let l=Ee.fromObject(e).as(le.Milliseconds);const c=gp(l);return a.forEach((d,f)=>{const h=f===a.length-1;if(d===le.Milliseconds)n.milliseconds=T0(l,o);else{const m=Ee.fromObject({milliseconds:l}).as(d),g=Math.sign(m),b=Math.abs(m),y=h?T0(b,o):Math.floor(o.decimalCount==null?b:R4(b)),$=y===0?0:y*g;n[d]=$,l-=Ee.fromObject({[d]:$}).as(le.Milliseconds),c!==gp(l)&&(l=0)}}),n}var hr;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(hr||(hr={}));hr.Sunday+"",hr.Monday+"",hr.Tuesday+"",hr.Wednesday+"",hr.Thursday+"",hr.Friday+"",hr.Saturday+"";hr.Sunday,hr.Monday,hr.Tuesday,hr.Wednesday,hr.Thursday,hr.Friday,hr.Saturday;var Mr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Mr||(Mr={}));Mr.January,Mr.February,Mr.March,Mr.April,Mr.May,Mr.June,Mr.July,Mr.August,Mr.September,Mr.October,Mr.November,Mr.December;const pp={min:1,max:12},bp={min:1,max:31};function zi(e){const t=new Yu,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:_s(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function Nv(...e){const t=e.join(""),r=Pc(Array.from(t));return Array.from(r).join("")}function Pv(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Iv(e,t){const r=Nv([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Ov(e,r)}function Ov(e,t){const r=Nv(t);return typeof e=="string"?new RegExp(Pv(e),r):new RegExp(e.source,r)}function Bv(e,{caseSensitive:t}){const n="".replaceAll("i","");return Ov(e,n)}function Rh(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Rv(e,t){return t?typeof t=="string"?!!new RegExp(Pv(t),"i").exec(e):!!Iv(t,"i").exec(e):!1}class w extends Error{name="AssertionError";constructor(t,r){super(Xi(r,t)||"Assertion failed.")}}const yp={interval:{milliseconds:100},timeout:{seconds:10}},Yd=Symbol("not set");async function L4(e,t,r){const{callback:n,extraAssertionArgs:o,failureMessage:i,options:s}=j4(t),a=_s(s.timeout,{milliseconds:!0}).milliseconds,l=_s(s.interval,{milliseconds:!0});let c=Yd,d;async function f(){try{c=r?n():await n(),e(c,...o)}catch(m){c=Yd,d=yt(m)}}const h=Date.now();for(;c===Yd;)if(await f(),await zi(l),Date.now()-h>=a){const g=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw ia(d,g)}return c}function R(e,t=!1){return((...r)=>L4(e,r,t))}function j4(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Lv(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Lv(e){return{interval:e?.interval||yp.interval,timeout:e?.timeout||yp.timeout}}const Ma={isFalse(e,t){if(e!==!1)throw new w(`'${k(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new w(`'${k(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new w(`'${k(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new w(`'${k(e)}' is not truthy.`,t)}},jv={assert:Ma,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new w(`'${k(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new w(`'${k(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new w(`'${k(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new w(`'${k(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:R(Ma.isFalse),isFalsy:R(Ma.isFalsy),isTrue:R(Ma.isTrue),isTruthy:R(Ma.isTruthy)}};function _4(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new w(`${k(e)} does not end with ${k(t)}}`,r)}else if(e[e.length-1]!==t)throw new w(`${k(e)} does not end with ${k(t)}}`,r)}function U4(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new w(`${k(e)} ends with ${k(t)}}`,r)}else if(e[e.length-1]===t)throw new w(`${k(e)} ends with ${k(t)}}`,r)}function z4(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new w(`${k(e)} does not start with ${k(t)}}`,r)}else if(e[0]!==t)throw new w(`${k(e)} does not start with ${k(t)}}`,r)}function q4(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new w(`${k(e)} starts with ${k(t)}}`,r)}else if(e[0]===t)throw new w(`${k(e)} starts with ${k(t)}}`,r)}const Fa={endsWith:_4,endsWithout:U4,startsWith:z4,startsWithout:q4},_v={assert:Fa,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new w(`${k(e)} does not end with ${k(t)}}`,r)}else if(e[e.length-1]!==t)throw new w(`${k(e)} does not end with ${k(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new w(`${k(e)} ends with ${k(t)}}`,r)}else if(e[e.length-1]===t)throw new w(`${k(e)} ends with ${k(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new w(`${k(e)} does not start with ${k(t)}}`,r)}else if(e[0]!==t)throw new w(`${k(e)} does not start with ${k(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new w(`${k(e)} starts with ${k(t)}}`,r)}else if(e[0]===t)throw new w(`${k(e)} starts with ${k(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:R(Fa.endsWith),endsWithout:R(Fa.endsWithout),startsWith:R(Fa.startsWith),startsWithout:R(Fa.startsWithout)}};function V4(e,t,r){const n=qr(t);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function io(e,t){return qr(t).includes(e)}const Xd={isEnumValue(e,t,r){V4(e,t,r)},isNotEnumValue(e,t,r){const n=qr(t);if(n.includes(e))throw new w(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Uv={assert:Xd,check:{isEnumValue:io,isNotEnumValue(e,t){return!qr(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=qr(t);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=qr(t);if(n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(qr(t).includes(e))return e},isNotEnumValue(e,t){if(!qr(t).includes(e))return e}},waitUntil:{isEnumValue:R(Xd.isEnumValue),isNotEnumValue:R(Xd.isNotEnumValue)}},Qd={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new w(`${k(e)} is not an object.`,r);if(!t||typeof t!="object")throw new w(`${k(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new w(`Entries are not equal at key '${String(o)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))throw new w("Entries are equal.",r)}},zv={assert:Qd,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const o=e[n],i=t[n];return o===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const o=e[n],i=t[n];return o!==i})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new w(`${k(e)} is not an object.`,r);if(!t||typeof t!="object")throw new w(`${k(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new w(`Entries are not equal at key '${String(o)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e;throw new w("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(o=>{const i=e[o],s=t[o];return i===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const i=e[o],s=t[o];return i!==s}))return e}},waitUntil:{entriesEqual:R(Qd.entriesEqual),notEntriesEqual:R(Qd.notEntriesEqual)}};function rc(e,t){return JSON.stringify(e)===JSON.stringify(t)}function cl(e,t){if(!(e===t||rc(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!rc(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{cl(e[i],t[i])}catch(s){throw new Error(`JSON objects are not equal at key '${i}': ${Zt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Va(e,t){if(e===t||rc(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!rc(r,n)?!1:Object.keys(e).every(i=>Va(e[i],t[i]))}return!1}const ef={jsonEquals(e,t,r){try{cl(e,t)}catch(n){throw new w(Zt(n),r)}},notJsonEquals(e,t,r){try{cl(e,t)}catch{return}throw new w("Values are JSON equal.",r)}},qv={assert:ef,check:{jsonEquals(e,t){return Va(e,t)},notJsonEquals(e,t){return!Va(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return cl(e,t),e}catch(n){throw new w(Zt(n),r)}},notJsonEquals(e,t,r){try{cl(e,t)}catch{return e}throw new w("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Va(e,t))return e},notJsonEquals(e,t){if(!Va(e,t))return e}},waitUntil:{jsonEquals:R(ef.jsonEquals),notJsonEquals:R(ef.notJsonEquals)}};function vp(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Vv(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Vv.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Wv=typeof WeakMap=="function"?WeakMap:Vv;function wp(e,t,r){if(!r||Us(e)||Us(t))return null;var n=r.get(e);if(n){var o=n.get(t);if(typeof o=="boolean")return o}return null}function mu(e,t,r,n){if(!(!r||Us(e)||Us(t))){var o=r.get(e);o?o.set(t,n):(o=new Wv,o.set(t,n),r.set(e,o))}}function An(e,t,r){if(r&&r.comparator)return $p(e,t,r);var n=Kv(e,t);return n!==null?n:$p(e,t,r)}function Kv(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Us(e)||Us(t)?!1:null}function $p(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Wv;var n=r&&r.comparator,o=wp(e,t,r.memoize);if(o!==null)return o;var i=wp(t,e,r.memoize);if(i!==null)return i;if(n){var s=n(e,t);if(s===!1||s===!0)return mu(e,t,r.memoize,s),s;var a=Kv(e,t);if(a!==null)return a}var l=vp(e);if(l!==vp(t))return mu(e,t,r.memoize,!1),!1;mu(e,t,r.memoize,!0);var c=W4(e,t,l,r);return mu(e,t,r.memoize,c),c}function W4(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return An(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Gv(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Pi(e,t,n);case"RegExp":return K4(e,t);case"Generator":return G4(e,t,n);case"DataView":return Pi(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Pi(new Uint8Array(e),new Uint8Array(t),n);case"Set":return kp(e,t,n);case"Map":return kp(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Z4(e,t,n)}}function K4(e,t){return e.toString()===t.toString()}function kp(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){o.push([s,a])}),Pi(n.sort(),o.sort(),r)}function Pi(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(An(e[o],t[o],r)===!1)return!1;return!0}function G4(e,t,r){return Pi(N0(e),N0(t),r)}function H4(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function xp(e){if(H4(e))try{return N0(e[Symbol.iterator]())}catch{return[]}return[]}function N0(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function Dp(e){var t=[];for(var r in e)t.push(r);return t}function Ap(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var o=r[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&t.push(o)}return t}function Gv(e,t,r,n){var o=r.length;if(o===0)return!0;for(var i=0;i<o;i+=1)if(An(e[r[i]],t[r[i]],n)===!1)return!1;return!0}function Z4(e,t,r){var n=Dp(e),o=Dp(t),i=Ap(e),s=Ap(t);if(n=n.concat(i),o=o.concat(s),n.length&&n.length===o.length)return Pi(Ep(n).sort(),Ep(o).sort())===!1?!1:Gv(e,t,n,r);var a=xp(e),l=xp(t);return a.length&&a.length===l.length?(a.sort(),l.sort(),Pi(a,l,r)):n.length===0&&a.length===0&&o.length===0&&l.length===0}function Us(e){return e===null||typeof e!="object"}function Ep(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class Ns extends w{name="DiffError";constructor(t,r,n,o){const i=Nk(r,n);super([t,Rh(i)].join(`
`),o)}}function Lo(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Bo={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Strict reference equality failed for 

${k(t)}

.`,r):new Ns("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${k(t)}

.`,r):new w(`

${k(e)}

strictly equals

${k(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Loose reference equality failed for 

${k(t)}

.`,r):new Ns("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${k(t)}

.`,r):new w(`

${k(e)}

loosely equals

${k(t)}

`,r)},deepEquals(e,t,r){if(!An(e,t,{comparator:Lo}))throw new Ns("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(An(e,t,{comparator:Lo}))throw new w(`

${k(e)}

deeply equals

${k(t)}

`,r)}},Hv=Bo.deepEquals,Zv={assert:Bo,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return An(e,t,{comparator:Lo})},notDeepEquals(e,t){return!An(e,t,{comparator:Lo})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Strict reference equality failed for 

${k(t)}

.`,r):new Ns("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${k(t)}

.`,r):new w(`

${k(e)}

strictly equals

${k(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Loose reference equality failed for 

${k(t)}

.`,r):new Ns("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${k(t)}

.`,r):new w(`

${k(e)}

loosely equals

${k(t)}

`,r);return e},deepEquals(e,t,r){if(An(e,t,{comparator:Lo}))return e;throw new Ns("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(An(e,t,{comparator:Lo}))throw new w(`

${k(e)}

deeply equals

${k(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(An(e,t,{comparator:Lo}))return e},notDeepEquals(e,t){if(!An(e,t,{comparator:Lo}))return e}},waitUntil:{strictEquals:R(Bo.strictEquals),notStrictEquals:R(Bo.notStrictEquals),looseEquals:R(Bo.looseEquals),notLooseEquals:R(Bo.notLooseEquals),deepEquals:R(Bo.deepEquals),notDeepEquals:R(Bo.notDeepEquals)}};function _r(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function un(e,t){return typeof t=="string"?t.includes(e):_r(t,e)}const no={hasValue(e,t,r){if(!_r(e,t))throw new w(`'${k(e)}' does not have value '${k(t)}'.`,r)},lacksValue(e,t,r){if(_r(e,t))throw new w(`'${k(e)}' has value '${k(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new w(`'${k(e)}' does not have values '${k(t)}'.`,r)}if(n.length)throw new w(`'${k(e)}' does not have values '${k(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new w(`'${k(e)}' has values '${k(n)}'.`,r)},isIn(e,t,r){if(!un(e,t))throw new w(`'${k(e)}'

is not in

${k(t)}.`,r)},isNotIn(e,t,r){if(un(e,t))throw new w(`'${k(e)}'

is in

${k(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new w(`'${k(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new w(`'${k(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new w(`'${k(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${k(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${k(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${k(e)}' is not empty.`,t)}}},Jv={assert:no,check:{hasValue(e,t){return _r(e,t)},lacksValue(e,t){return!_r(e,t)},hasValues(e,t){return t.every(r=>_r(e,r))},lacksValues(e,t){return t.every(r=>!_r(e,r))},isIn(e,t){return un(e,t)},isNotIn(e,t){return!un(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!_r(e,t))throw new w(`'${k(e)}' does not have value '${k(t)}'.`,r);return e},lacksValue(e,t,r){if(_r(e,t))throw new w(`'${k(e)}' has value '${k(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new w(`'${k(e)}' does not have values '${k(t)}'.`,r)}if(n.length)throw new w(`'${k(e)}' does not have values '${k(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new w(`'${k(e)}' has values '${k(n)}'.`,r);return e},isIn(e,t,r){if(!un(e,t))throw new w(`'${k(e)}'

is not in

${k(t)}.`,r);return e},isNotIn(e,t,r){if(un(e,t))throw new w(`'${k(e)}'

is in

${k(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new w(`'${k(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new w(`'${k(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new w(`'${k(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${k(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${k(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${k(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(_r(e,t))return e},lacksValue(e,t){if(!_r(e,t))return e},hasValues(e,t){if(t.every(r=>_r(e,r)))return e},lacksValues(e,t){if(!t.every(r=>_r(e,r)))return e},isIn(e,t){if(un(e,t))return e},isNotIn(e,t){if(!un(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:R(no.hasValue),lacksValue:R(no.lacksValue),hasValues:R(no.hasValues),lacksValues:R(no.lacksValues),isIn:R(no.isIn),isNotIn:R(no.isNotIn),isEmpty:R(no.isEmpty),isNotEmpty:R(no.isNotEmpty)}},tf={isHttpStatus(e,t){if(!io(e,F))throw new w(`${k(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(io(e,F)){if(!un(e,Bu[t]))throw new w(`${k(e)} is not a '${t}' HTTP status.`,r)}else throw new w(`${k(e)} is not a valid HTTP status.`,r)}},Yv={assert:tf,check:{isHttpStatus(e){return io(e,F)},isHttpStatusCategory(e,t){return io(e,F)&&un(e,Bu[t])}},assertWrap:{isHttpStatus(e,t){if(!io(e,F))throw new w(`${k(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(io(e,F)){if(!un(e,Bu[t]))throw new w(`${k(e)} is not a '${t}' HTTP status.`,r)}else throw new w(`${k(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(io(e,F))return e},isHttpStatusCategory(e,t){if(io(e,F)&&un(e,Bu[t]))return e}},waitUntil:{isHttpStatus:R(tf.isHttpStatus),isHttpStatusCategory:R(tf.isHttpStatusCategory)}},rf={instanceOf(e,t,r){if(!(e instanceof t))throw new w(`'${k(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new w(`'${k(e)}' is an instance of '${t.name}'`,r)}},Xv={assert:rf,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new w(`'${k(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new w(`'${k(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:R(rf.instanceOf),notInstanceOf:R(rf.notInstanceOf)}},J4=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function nt(e,t){return J4.some(r=>{try{return r(e,t)}catch{return!1}})}const wi={isKeyOf(e,t,r){if(!nt(t,e))throw new w(`'${String(e)}' is not a key of '${k(t)}'.`,r)},isNotKeyOf(e,t,r){if(nt(t,e))throw new w(`'${String(e)}' is a key of '${k(t)}'.`,r)},hasKey(e,t,r){if(!nt(e,t))throw new w(`'${k(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(nt(e,t))throw new w(`'${k(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(o=>!nt(e,o));if(n.length)throw new w(`'${k(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(o=>nt(e,o));if(n.length)throw new w(`'${k(e)}' does not lack keys '${n.join(",")}'.`,r)}},Qv={assert:wi,check:{isKeyOf(e,t){return nt(t,e)},isNotKeyOf(e,t){return!nt(t,e)},hasKey:nt,lacksKey(e,t){return!nt(e,t)},hasKeys(e,t){return t.every(r=>nt(e,r))},lacksKeys(e,t){return t.every(r=>!nt(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!nt(t,e))throw new w(`'${String(e)}' is not a key of '${k(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(nt(t,e))throw new w(`'${String(e)}' is a key of '${k(t)}'.`,r);return e},hasKey(e,t,r){if(!nt(e,t))throw new w(`'${k(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(nt(e,t))throw new w(`'${k(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(o=>!nt(e,o));if(n.length)throw new w(`'${k(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(o=>nt(e,o));if(n.length)throw new w(`'${k(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(nt(t,e))return e},isNotKeyOf(e,t){if(!nt(t,e))return e},hasKey(e,t){if(nt(e,t))return e},lacksKey(e,t){if(!nt(e,t))return e},hasKeys(e,t){if(t.every(r=>nt(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!nt(e,r)))return e}},waitUntil:{isKeyOf:R(wi.isKeyOf),isNotKeyOf:R(wi.isNotKeyOf),hasKey:R(wi.hasKey),lacksKey:R(wi.lacksKey),hasKeys:R(wi.hasKeys),lacksKeys:R(wi.lacksKeys)}};function Y4(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)<t)throw new w(`Length '${e.length}' is not at least '${t}'.`,r)}function X4(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)!==t)throw new w(`Length '${e.length}' is not exactly '${t}'.`,r)}const nf={isLengthAtLeast:Y4,isLengthExactly:X4},e2={assert:nf,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)<t)throw new w(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)!==t)throw new w(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)===t)return e})},waitUntil:{isLengthAtLeast:R(nf.isLengthAtLeast),isLengthExactly:R(nf.isLengthExactly)}},Q4={never(e){throw new w("This code should not have executed.",e)}},t2={assert:Q4,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},of={isDefined(e,t){if(e==null)throw new w(`'${k(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new w(`'${k(e)}' is not a nullish.`,t)}},r2={assert:of,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new w(`'${k(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new w(`'${k(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:R(of.isDefined),isNullish:R(of.isNullish)}},Er={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new w(`${e} is not within the bounds ${k({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new w(`${e} is not outside the bounds ${k({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new w(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new w(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new w(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new w(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new w(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new w(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new w(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new w(`${e} is within ±${r} of ${t}`,n)}},n2={assert:Er,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new w(`${e} is not within the bounds ${k({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new w(`${e} is not outside the bounds ${k({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new w(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new w(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new w(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new w(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new w(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new w(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new w(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new w(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:R(Er.isInBounds),isOutBounds:R(Er.isOutBounds),isInteger:R(Er.isInteger),isNotInteger:R(Er.isNotInteger),isAbove:R(Er.isAbove),isAtLeast:R(Er.isAtLeast),isBelow:R(Er.isBelow),isAtMost:R(Er.isAtMost),isNaN:R(Er.isNaN),isFinite:R(Er.isFinite),isInfinite:R(Er.isInfinite),isApproximately:R(Er.isApproximately),isNotApproximately:R(Er.isNotApproximately)}};function e3(e,t,r,n,o){return Ll(...jc(e,t,r,n,o),!1)}function jc(e,t,r,n,o){const i=Array.isArray(r);return[i?e:Hv,i?t:e,i?r:t,i?n:r,i?o:n]}function Ll(e,t,r,n,o,i){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,l)=>{try{const c=await s;e(c,n),i?a(c):a()}catch(c){l(new w(`Output from '${t.name}' did not produce expected output. ${Zt(c)}`,o))}});try{return e(s,n),i?s:void 0}catch(a){throw new w(`Output from '${t.name}' did not produce expected output. ${Zt(a)}`,o)}}function t3(e,t,r,n,o){try{const i=Ll(...jc(e,t,r,n,o),!1);return i instanceof Promise?new Promise(async s=>{try{await i,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function r3(e,t,r,n,o){return Ll(...jc(e,t,r,n,o),!0)}function n3(e,t,r,n,o){try{const i=Ll(...jc(e,t,r,n,o),!0);return i instanceof Promise?new Promise(async s=>{try{s(await i)}catch{s(void 0)}}):i}catch{return}}const sf=Symbol("not set");async function o3(e,t,r,n,o,i){const s=Array.isArray(r),a=s?e:Hv,l=s?t:e,c=s?r:t,d=s?n:r,f=Lv(s?o:n),h=s?i:o,m=_s(f.timeout,{milliseconds:!0}).milliseconds,g=_s(f.interval,{milliseconds:!0});let b=sf,y;async function $(){try{b=await Ll(a,l,c,d,void 0,!0)}catch(E){b=sf,y=yt(E)}}const x=Date.now();for(;b===sf;)if(await $(),await zi(g),Date.now()-x>=m)throw ia(y,Xi(h,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return b}const i3={output:e3},o2={assert:i3,check:{output:t3},assertWrap:{output:r3},checkWrap:{output:n3},waitUntil:{output:o3}},Ta={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${k(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${k(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${k(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${k(e)}' is not a Primitive.`,t)}},i2={assert:Ta,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${k(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${k(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${k(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${k(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:R(Ta.isNotPrimitive),isNotPropertyKey:R(Ta.isNotPropertyKey),isPrimitive:R(Ta.isPrimitive),isPropertyKey:R(Ta.isPropertyKey)}},Na={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${k(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${k(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new w(`'${k(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new w(`'${k(e)}' is a Promise.`,t)}},s2={assert:Na,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${k(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${k(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new w(`'${k(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new w(`'${k(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:R(Na.isPromiseLike,!0),isNotPromiseLike:R(Na.isNotPromiseLike,!0),isPromise:R(Na.isPromise,!0),isNotPromise:R(Na.isNotPromise,!0)}},af={matches(e,t,r){if(!t.test(e))throw new w(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new w(`'${e}' matches ${t}`,r)}},a2={assert:af,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new w(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new w(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:R(af.matches,!0),mismatches:R(af.mismatches,!0)}},st={isArray(e,t){if(!Array.isArray(e))throw new w(`'${k(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new w(`'${k(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new w(`'${k(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new w(`'${k(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new w(`'${k(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new w(`'${k(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${k(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${k(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new w(`'${k(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new w(`'${k(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new w(`'${k(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new w(`'${k(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new w(`'${k(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new w(`'${k(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new w(`'${k(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new w(`'${k(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new w(`'${k(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${k(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new w(`'${k(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new w(`'${k(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new w(`'${k(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new w(`'${k(e)}' is a undefined.`,t)}},l2={assert:st,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new w(`'${k(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new w(`'${k(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new w(`'${k(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new w(`'${k(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new w(`'${k(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new w(`'${k(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${k(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${k(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new w(`'${k(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new w(`'${k(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new w(`'${k(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new w(`'${k(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new w(`'${k(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new w(`'${k(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new w(`'${k(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new w(`'${k(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new w(`'${k(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${k(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new w(`'${k(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new w(`'${k(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new w(`'${k(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new w(`'${k(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:R(st.isArray),isBigInt:R(st.isBigInt),isBoolean:R(st.isBoolean),isFunction:R(st.isFunction),isNull:R(st.isNull),isNumber:R(st.isNumber),isObject:R(st.isObject),isPlainObject:R(st.isPlainObject),isString:R(st.isString),isSymbol:R(st.isSymbol),isUndefined:R(st.isUndefined),isNotArray:R(st.isNotArray),isNotBigInt:R(st.isNotBigInt),isNotBoolean:R(st.isNotBoolean),isNotFunction:R(st.isNotFunction),isNotNull:R(st.isNotNull),isNotNumber:R(st.isNotNumber),isNotObject:R(st.isNotObject),isNotPlainObject:R(st.isNotPlainObject),isNotString:R(st.isNotString),isNotSymbol:R(st.isNotSymbol),isNotUndefined:R(st.isNotUndefined)}};var Fr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Fr||(Fr={}));function Lh(e,t,r){jh(e,{noError:"No error.",notInstance:`'${k(e)}' is not an error instance.`},t,r)}function Cp(e,t,r){jh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${k(e)}' is not an error instance.`},t,r)}function jh(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const o=e.constructor.name;throw new w(`Error constructor '${o}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const o=Zt(e);if(typeof r.matchMessage=="string"){if(!Rv(o,r.matchMessage))throw new w(`Error message

'${o}'

does not contain

'${r.matchMessage}'.`,n)}else if(!o.match(r.matchMessage))throw new w(`Error message

'${o}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new w(t.notInstance,n);else throw new w(t.noError,n)}function Sp(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Zt(e);if(typeof t.matchMessage=="string"){if(!Rv(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function _c(e,t,r,n){let o;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(s,a)=>{try{await i}catch(l){o=yt(l)}try{Cp(o,r,n),e===Fr.Assert?s():e===Fr.Check?s(!0):s(o)}catch(l){e===Fr.CheckWrap?s(void 0):e===Fr.Check?s(!1):a(yt(l))}})}catch(i){o=yt(i)}try{return Cp(o,r,n),e===Fr.Check?!0:e!==Fr.Assert?o:void 0}catch(i){if(e===Fr.CheckWrap)return;if(e===Fr.Check)return!1;throw i}}function s3(e,t,r){return _c(Fr.Assert,e,t,r)}function a3(e,t){return _c(Fr.Check,e,t)}function l3(e,t,r){return _c(Fr.AssertWrap,e,t,r)}function u3(e,t,r){return _c(Fr.CheckWrap,e,t,r)}const c3=R(Lh);function d3(e,t,r,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,i=o?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${k(i)}'`);return c3(o,async()=>{try{await i();return}catch(l){return yt(l)}},a,s)}const f3={throws:s3,isError:Lh},u2={assert:f3,check:{throws:a3,isError(e,t){return Sp(e,t)}},assertWrap:{throws:l3,isError(e,t,r){return jh(e,{noError:"No error.",notInstance:`'${k(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:u3,isError(e,t){if(Sp(e,t))return e}},waitUntil:{throws:d3,isError:R(Lh)}},jo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,lf={isUuid(e,t){if(!String(e).match(jo))throw new w(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(jo))throw new w(`'${String(e)}' is a UUID.`,t)}},c2={assert:lf,check:{isUuid(e){return!!String(e).match(jo)},isNotUuid(e){return!String(e).match(jo)}},assertWrap:{isUuid(e,t){if(!String(e).match(jo))throw new w(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(jo))throw new w(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(jo))return e},isNotUuid(e){if(!String(e).match(jo))return e}},waitUntil:{isUuid:R(lf.isUuid),isNotUuid:R(lf.isNotUuid)}},h3={...t2.assert,...jv.assert,..._v.assert,...zv.assert,...Uv.assert,...Yv.assert,...Xv.assert,...qv.assert,...Qv.assert,...e2.assert,...r2.assert,...n2.assert,...o2.assert,...i2.assert,...s2.assert,...a2.assert,...l2.assert,...Zv.assert,...u2.assert,...c2.assert,...Jv.assert},_h=[jv,_v,zv,Uv,Yv,Xv,qv,Qv,e2,t2,r2,n2,o2,i2,s2,a2,l2,Zv,u2,c2,Jv],m3=Object.assign({},..._h.map(e=>e.check)),S=Object.assign(function(t){return!!t},m3);function g3(e,t,r){return _u(e,t,r,new Set)}function _u(e,t,r,n){if(e=Mp(e),t=Mp(t),S.isObject(e)&&S.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!_u(ze(e).sort(),ze(t).sort(),r,n))return!1;let o=!1;const i=ze(e).map(s=>{const a=_u(e[s],t[s],r,n);return S.isPromise(a)&&(o=!0),a});return Fp(o,i)}else if(S.isArray(e)&&S.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let o=!1;const i=e.map((s,a)=>{const l=_u(s,t[a],r,n);return S.isPromise(l)&&(o=!0),l});return Fp(o,i)}else return r(e,t)}function Mp(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Fp(e,t){return e?new Promise(async(r,n)=>{try{const o=await Promise.all(t);r(o.every(S.isTrue))}catch(o){n(yt(o))}}):t.every(S.isTrue)}const p3=Object.assign({},..._h.map(e=>e.assertWrap)),pt=Object.assign(function(t,r){if(!t)throw new w("Assertion failed.",r);return t},p3);function b3(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const y3={tsType:b3},v3={assert:y3},w3={fail:e=>{throw new w("Failure triggered.",e)}},$3={...v3.assert,...h3,...w3},Lt=Object.assign(function(t,r){if(!t)throw new w("Assertion failed.",r)},$3),k3=Object.assign({},..._h.map(e=>e.checkWrap)),Uh=Object.assign(function(t){if(t)return t},k3);function x3(e,t){return S.hasKey(e,"entryType")&&e.entryType===t}function $i(e,t){return e.controlType===t}var se;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(se||(se={}));const d2=Symbol("any-type"),D3={[se.Checkbox]:!1,[se.Color]:"",[se.Custom]:void 0,[se.Dropdown]:"",[se.Hidden]:d2,[se.Number]:0,[se.Text]:""};function A3(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===se.Custom)return;const i=D3[o.controlType];i!==d2&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function E3(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return S.isPromise(o)?new Promise(async(i,s)=>{try{const a=await o;e.set(n,a),i(a)}catch(a){s(yt(a))}}):(e.set(n,o),o)}}function es(e,t,r){if(t in e)return e[t];{const n=r();return S.isPromise(n)?new Promise(async(o,i)=>{try{const s=await n;e[t]=s,o(s)}catch(s){i(yt(s))}}):(e[t]=n,n)}}function Fn(e){return ze(e).map(t=>[t,e[t]])}function dl(e){return Object.fromEntries(e)}function Rn(e,t,r){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return r(a,o,i,s)&&n.push(a),n},[])}function C3(e,t,r={}){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return es(n,a,()=>[]).push(o),n},{})}function Xo(e,t,r={}){try{let n=!1;const o=e.map((i,s,a)=>{const l=t(i,s,a);return l instanceof Promise?(n=!0,l):l?[l.key,l.value]:void 0}).filter(S.isTruthy);return n?new Promise(async(i,s)=>{try{const a=Rn(await Promise.all(o),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},S.isTruthy);i(dl(a))}catch(a){s(yt(a))}}):dl(o)}catch(n){throw yt(n)}}function S3(e,t){const r=[];let n=!1;for(let o=0;o<e;o++){const i=t(o);S.isPromise(i)&&(n=!0),r.push(i)}return n?Promise.all(r):r}function M3(e){return Array.isArray(e)?e:[e]}function F3({min:e,max:t}){const{min:r,max:n}=Sh({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)),s=Math.ceil(i/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/o)*o,l=new Uint8Array(s);let c;do crypto.getRandomValues(l),c=l.reduce((d,f,h)=>d+f*256**h,0);while(c>=a);return r+c%o}const Tp=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function Ii(e=16){let t="";for(let r=0;r<e;r++){const n=F3({min:0,max:Tp.length-1});t+=Tp[n]}return t}function f2(e){if(S.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Zt(t).trim()).join(`
`))}function h2(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):S.hasKey(t,"fallbackValue")?t.fallbackValue:yt(n)):r}catch(r){return t.handleError?t.handleError(r):S.hasKey(t,"fallbackValue")?t.fallbackValue:yt(r)}}const{hasOwnProperty:jl}=Object.prototype,T3=/[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;function Po(e){return e.length<5e3&&!T3.test(e)?`"${e}"`:JSON.stringify(e)}function uf(e,t){if(e.length>200||t)return e.sort(t);for(let r=1;r<e.length;r++){const n=e[r];let o=r;for(;o!==0&&e[o-1]>n;)e[o]=e[o-1],o--;e[o]=n}return e}const N3=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)),Symbol.toStringTag).get;function cf(e){return N3.call(e)!==void 0&&e.length!==0}function Np(e,t,r){e.length<r&&(r=e.length);const n=t===","?"":" ";let o=`"0":${n}${e[0]}`;for(let i=1;i<r;i++)o+=`${t}"${i}":${n}${e[i]}`;return o}function P3(e){if(jl.call(e,"circularValue")){const t=e.circularValue;if(typeof t=="string")return`"${t}"`;if(t==null)return t;if(t===Error||t===TypeError)return{toString(){throw new TypeError("Converting circular structure to JSON")}};throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')}return'"[Circular]"'}function I3(e){let t;if(jl.call(e,"deterministic")&&(t=e.deterministic,typeof t!="boolean"&&typeof t!="function"))throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');return t===void 0?!0:t}function O3(e,t){let r;if(jl.call(e,t)&&(r=e[t],typeof r!="boolean"))throw new TypeError(`The "${t}" argument must be of type boolean`);return r===void 0?!0:r}function Pp(e,t){let r;if(jl.call(e,t)){if(r=e[t],typeof r!="number")throw new TypeError(`The "${t}" argument must be of type number`);if(!Number.isInteger(r))throw new TypeError(`The "${t}" argument must be an integer`);if(r<1)throw new RangeError(`The "${t}" argument must be >= 1`)}return r===void 0?1/0:r}function ki(e){return e===1?"1 item":`${e} items`}function B3(e){const t=new Set;for(const r of e)(typeof r=="string"||typeof r=="number")&&t.add(String(r));return t}function R3(e){if(jl.call(e,"strict")){const t=e.strict;if(typeof t!="boolean")throw new TypeError('The "strict" argument must be of type boolean');if(t)return r=>{let n=`Object can not safely be stringified. Received type ${typeof r}`;throw typeof r!="function"&&(n+=` (${r.toString()})`),new Error(n)}}}function L3(e){e={...e};const t=R3(e);t&&(e.bigint===void 0&&(e.bigint=!1),"circularValue"in e||(e.circularValue=Error));const r=P3(e),n=O3(e,"bigint"),o=I3(e),i=typeof o=="function"?o:void 0,s=Pp(e,"maximumDepth"),a=Pp(e,"maximumBreadth");function l(m,g,b,y,$,x){let E=g[m];switch(typeof E=="object"&&E!==null&&typeof E.toJSON=="function"&&(E=E.toJSON(m)),E=y.call(g,m,E),typeof E){case"string":return Po(E);case"object":{if(E===null)return"null";if(b.includes(E))return r;let N="",B=",";const Z=x;if(Array.isArray(E)){if(E.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(E),$!==""&&(x+=$,N+=`
${x}`,B=`,
${x}`);const Me=Math.min(E.length,a);let rt=0;for(;rt<Me-1;rt++){const Dr=l(String(rt),E,b,y,$,x);N+=Dr===void 0?"null":Dr,N+=B}const Ke=l(String(rt),E,b,y,$,x);if(N+=Ke===void 0?"null":Ke,E.length-1>a){const Dr=E.length-a-1;N+=`${B}"... ${ki(Dr)} not stringified"`}return $!==""&&(N+=`
${Z}`),b.pop(),`[${N}]`}let Q=Object.keys(E);const ee=Q.length;if(ee===0)return"{}";if(s<b.length+1)return'"[Object]"';let J="",ge="";$!==""&&(x+=$,B=`,
${x}`,J=" ");const ve=Math.min(ee,a);o&&!cf(E)&&(Q=uf(Q,i)),b.push(E);for(let Me=0;Me<ve;Me++){const rt=Q[Me],Ke=l(rt,E,b,y,$,x);Ke!==void 0&&(N+=`${ge}${Po(rt)}:${J}${Ke}`,ge=B)}if(ee>a){const Me=ee-a;N+=`${ge}"...":${J}"${ki(Me)} not stringified"`,ge=B}return $!==""&&ge.length>1&&(N=`
${x}${N}
${Z}`),b.pop(),`{${N}}`}case"number":return isFinite(E)?String(E):t?t(E):"null";case"boolean":return E?"true":"false";case"undefined":return;case"bigint":if(n)return String(E);default:return t?t(E):void 0}}function c(m,g,b,y,$,x){switch(typeof g=="object"&&g!==null&&typeof g.toJSON=="function"&&(g=g.toJSON(m)),typeof g){case"string":return Po(g);case"object":{if(g===null)return"null";if(b.includes(g))return r;const E=x;let N="",B=",";if(Array.isArray(g)){if(g.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(g),$!==""&&(x+=$,N+=`
${x}`,B=`,
${x}`);const ee=Math.min(g.length,a);let J=0;for(;J<ee-1;J++){const ve=c(String(J),g[J],b,y,$,x);N+=ve===void 0?"null":ve,N+=B}const ge=c(String(J),g[J],b,y,$,x);if(N+=ge===void 0?"null":ge,g.length-1>a){const ve=g.length-a-1;N+=`${B}"... ${ki(ve)} not stringified"`}return $!==""&&(N+=`
${E}`),b.pop(),`[${N}]`}b.push(g);let Z="";$!==""&&(x+=$,B=`,
${x}`,Z=" ");let Q="";for(const ee of y){const J=c(ee,g[ee],b,y,$,x);J!==void 0&&(N+=`${Q}${Po(ee)}:${Z}${J}`,Q=B)}return $!==""&&Q.length>1&&(N=`
${x}${N}
${E}`),b.pop(),`{${N}}`}case"number":return isFinite(g)?String(g):t?t(g):"null";case"boolean":return g?"true":"false";case"undefined":return;case"bigint":if(n)return String(g);default:return t?t(g):void 0}}function d(m,g,b,y,$){switch(typeof g){case"string":return Po(g);case"object":{if(g===null)return"null";if(typeof g.toJSON=="function"){if(g=g.toJSON(m),typeof g!="object")return d(m,g,b,y,$);if(g===null)return"null"}if(b.includes(g))return r;const x=$;if(Array.isArray(g)){if(g.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(g),$+=y;let J=`
${$}`;const ge=`,
${$}`,ve=Math.min(g.length,a);let Me=0;for(;Me<ve-1;Me++){const Ke=d(String(Me),g[Me],b,y,$);J+=Ke===void 0?"null":Ke,J+=ge}const rt=d(String(Me),g[Me],b,y,$);if(J+=rt===void 0?"null":rt,g.length-1>a){const Ke=g.length-a-1;J+=`${ge}"... ${ki(Ke)} not stringified"`}return J+=`
${x}`,b.pop(),`[${J}]`}let E=Object.keys(g);const N=E.length;if(N===0)return"{}";if(s<b.length+1)return'"[Object]"';$+=y;const B=`,
${$}`;let Z="",Q="",ee=Math.min(N,a);cf(g)&&(Z+=Np(g,B,a),E=E.slice(g.length),ee-=g.length,Q=B),o&&(E=uf(E,i)),b.push(g);for(let J=0;J<ee;J++){const ge=E[J],ve=d(ge,g[ge],b,y,$);ve!==void 0&&(Z+=`${Q}${Po(ge)}: ${ve}`,Q=B)}if(N>a){const J=N-a;Z+=`${Q}"...": "${ki(J)} not stringified"`,Q=B}return Q!==""&&(Z=`
${$}${Z}
${x}`),b.pop(),`{${Z}}`}case"number":return isFinite(g)?String(g):t?t(g):"null";case"boolean":return g?"true":"false";case"undefined":return;case"bigint":if(n)return String(g);default:return t?t(g):void 0}}function f(m,g,b){switch(typeof g){case"string":return Po(g);case"object":{if(g===null)return"null";if(typeof g.toJSON=="function"){if(g=g.toJSON(m),typeof g!="object")return f(m,g,b);if(g===null)return"null"}if(b.includes(g))return r;let y="";const $=g.length!==void 0;if($&&Array.isArray(g)){if(g.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(g);const Z=Math.min(g.length,a);let Q=0;for(;Q<Z-1;Q++){const J=f(String(Q),g[Q],b);y+=J===void 0?"null":J,y+=","}const ee=f(String(Q),g[Q],b);if(y+=ee===void 0?"null":ee,g.length-1>a){const J=g.length-a-1;y+=`,"... ${ki(J)} not stringified"`}return b.pop(),`[${y}]`}let x=Object.keys(g);const E=x.length;if(E===0)return"{}";if(s<b.length+1)return'"[Object]"';let N="",B=Math.min(E,a);$&&cf(g)&&(y+=Np(g,",",a),x=x.slice(g.length),B-=g.length,N=","),o&&(x=uf(x,i)),b.push(g);for(let Z=0;Z<B;Z++){const Q=x[Z],ee=f(Q,g[Q],b);ee!==void 0&&(y+=`${N}${Po(Q)}:${ee}`,N=",")}if(E>a){const Z=E-a;y+=`${N}"...":"${ki(Z)} not stringified"`}return b.pop(),`{${y}}`}case"number":return isFinite(g)?String(g):t?t(g):"null";case"boolean":return g?"true":"false";case"undefined":return;case"bigint":if(n)return String(g);default:return t?t(g):void 0}}function h(m,g,b){if(arguments.length>1){let y="";if(typeof b=="number"?y=" ".repeat(Math.min(b,10)):typeof b=="string"&&(y=b.slice(0,10)),g!=null){if(typeof g=="function")return l("",{"":m},[],g,y,"");if(Array.isArray(g))return c("",m,[],B3(g),y,"")}if(y.length!==0)return d("",m,[],y,"")}return f("",m,[])}return h}const j3=L3({maximumDepth:15,maximumBreadth:50});function _3(...e){return j3(...e)||""}function Dn(e,{enableUnsafeCopyAll:t}={}){try{const r=t?JSON.stringify(e):_3(e);return JSON.parse(r)}catch(r){throw console.error("Failed to JSON copy for",e),r}}const U3="modulepreload",z3=function(e){return"/vira/book/"+e},Ip={},nc=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let l=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=l(r.map(c=>{if(c=z3(c),c in Ip)return;Ip[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":U3,d||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),d)return new Promise((m,g)=>{h.addEventListener("load",m),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var It;(function(e){e.Standard="stdout",e.Error="stderr"})(It||(It={}));var ye;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ye||(ye={}));async function q3(){return await Fy({async[Sn.Node](){const e=(await nc(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ye.Bold]:e.bold.open,[ye.Debug]:e.blueBright.open,[ye.Error]:e.red.open,[ye.Faint]:e.gray.open,[ye.Info]:e.cyan.open,[ye.Mutate]:e.magenta.open,[ye.NormalWeight]:"\x1B[22m",[ye.Plain]:"",[ye.Reset]:e.reset.open,[ye.Success]:e.green.open,[ye.Warning]:e.yellow.open}},[Sn.Web](){return Promise.resolve({[ye.Bold]:"font-weight: bold",[ye.Debug]:"color: blue",[ye.Error]:"color: red",[ye.Faint]:"color: grey",[ye.Info]:"color: teal",[ye.Mutate]:"color: magenta",[ye.NormalWeight]:"",[ye.Plain]:"",[ye.Reset]:"",[ye.Success]:"color: green",[ye.Warning]:"color: orange"})}})}const jr=await q3(),V3={[ye.Bold]:{colors:[jr.bold],logType:It.Standard},[ye.Debug]:{colors:[jr.debug],logType:It.Standard},[ye.Faint]:{colors:[jr.faint],logType:It.Standard},[ye.Info]:{colors:[jr.info],logType:It.Standard},[ye.Mutate]:{colors:[jr.mutate,jr.bold],logType:It.Standard},[ye.NormalWeight]:{colors:[jr.normalWeight],logType:It.Standard},[ye.Plain]:{colors:[],logType:It.Standard},[ye.Reset]:{colors:[jr.reset],logType:It.Standard},[ye.Success]:{colors:[jr.success,jr.bold],logType:It.Standard},[ye.Error]:{colors:[jr.error,jr.bold],logType:It.Error},[ye.Warning]:{colors:[jr.warning],logType:It.Error}};function $r({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Oi({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function m2(e,t){try{let r=!1;const n=Fn(e).map(([o,i])=>{const s=t(o,i,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(S.isTruthy);return r?new Promise(async(o,i)=>{try{const s=Rn(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},S.isTruthy);o(dl(s))}catch(s){i(yt(s))}}):dl(n)}catch(r){throw yt(r)}}function g2(e,t){return m2(e,(r,n)=>{const o=n,i=t(n,e);return i instanceof Promise?i.then(s=>({key:o,value:s})):{key:o,value:i}})}function p2(e,...t){const r={...e};return t.forEach(n=>{n&&Fn(n).forEach(([o,i])=>{i!=null&&(r[o]=i)})}),r}function W3(e){return e.replace(/,/g,"")}function K3(e){return typeof e=="number"?e:Number(typeof e=="string"?W3(e):e)}function G3(e){const t=H3(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function H3(e){const t=K3(e);if(!isNaN(t))return t}const b2="px";function fl(e){return zh({value:e,suffix:b2})}function Z3(e){return G3(qh({value:e,suffix:b2}))}function zh({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function qh({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function J3(){return await Fy({async[Sn.Node](){const{inspect:e}=await nc(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const o=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[ye.Reset].colors.join("")].join(""),css:void 0}}},[Sn.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:Rn(r.colorConfig[t].colors,s=>qh({value:s,suffix:";"}),S.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Zt(s):k(s)).join(`
`),r.omitColors?"":r.colorConfig[ye.Reset].colors.join("")].join(""),css:n}}}})}const Y3=await J3(),X3={colorConfig:V3,omitColors:!1},Q3=y2({[It.Error](){},[It.Standard](){}});function y2(e,t){const r=p2(X3,t);function n(i){e[r.colorConfig[i.colorKey].logType](Y3({...i,options:r}))}const o=g2(ye,i=>(...s)=>n({args:s,colorKey:i}));return{...o,if(i){return i?o:Q3}}}const e6=Ch(Sn.Node)?{[It.Error]({text:e}){process.stderr.write(e+`
`)},[It.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[It.Error]({text:e,css:t}){console.error($r({value:e,prefix:"%c"}),t)},[It.Standard]({text:e,css:t}){console.log($r({value:e,prefix:"%c"}),t)}},v2=y2(e6);function t6(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function w2(e,{digits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function r6({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const o=Iv(Bv(t,{caseSensitive:r}),"g"),i=[];return e.replace(o,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const l=s[0];if(typeof l!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof l}!`);i.push({index:a,length:l.length});const c=s[0];if(typeof c!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return c}),i}function n6(e,t,{caseSensitive:r}){const n=r6({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),o=Bv(t,{caseSensitive:r});return e.split(o).reduce((s,a,l)=>{const c=n[l],d=s.concat(a);if(c){const f=e.slice(c.index,c.index+c.length);return d.concat(f)}else return d},[])}function o6(e,t){return e.split(t)}function Op(e,t){const{min:r,max:n}=Sh(t);if(t.takeOverflow){const o=n-r+1,i=(e-r)%o;return i<0?r+o+i:r+i}else return e>n?r:e<r?n:e}function it(e,t){let r=!1;const n=ze(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),o[i]=s,o},{});return r?new Promise(async(o,i)=>{try{await Promise.all(ze(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(yt(s))}}):n}function Uc(e,t){const r=Fn(e).filter(([n,o])=>t(n,o,e));return dl(r)}function i6(e,t){return Uc(e,r=>t.includes(r))}function hl(e){return ze(e).map(t=>e[t])}function $2(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var ml;(function(e){e.Upper="upper",e.Lower="lower"})(ml||(ml={}));const s6={firstLetterCase:ml.Lower};function a6(e,t){if(!e.length)return"";const r=e[0];return(t===ml.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function l6(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""}),o=p2(s6,t);return a6(n,o.firstLetterCase)}function u6(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function c6({value:e,wrapper:t}){return $r({value:zh({value:e,suffix:t}),prefix:t})}function Ln(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Vh(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class d6{listeners={};universalListeners=new Map;getListenerCount(){return hl(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function o(i,s){r.once&&n(),t(i,s)}return this.universalListeners.set(t,{listener:o,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const o=S.isString(t)?t:t.type,i=()=>this.listeners[o]?.delete(r)||!1;function s(a,l){n.once&&i(),r(a,l)}return es(this.listeners,o,()=>new Map).set(r,{listener:s,removeListener:i}),i}removeListener(t,r){const n=S.isString(t)?t:t.type,o=this.listeners[n];if(!o)return!1;const i=o.get(r);return i?i.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(o=>{o.listener(t,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(t,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=hl(this.listeners).reduce((n,o)=>{const i=o.size||0;return o.clear(),n+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class Wh extends d6{}function go(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function P0(e,t,r){return go(globalThis,e,t,r)}function Kh(e,t){return gl(e.title),e.parent?[...Kh(e.parent),gl(e.parent.title)].concat([]):[]}function gl(e){return $2(e).toLowerCase().replaceAll(/\s/g,"-")}function f6({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const h6=/[/?#&=]/;function k2(e){const t=e.match(h6);return e.trim()?gl(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const m6={[tr.ElementExample]:()=>[],[tr.Page]:e=>[k2(e.title),...A3(e.controls,e.title)].filter(S.isTruthy),[tr.Root]:()=>[]},oc="_isBookTreeNode",x2=new Map;function g6(e){return x2.get(e)}function p6(e,t){E3(x2,e,()=>t)}function Ps(e,t){return D2(e)&&e.entry.entryType===t}function D2(e){return!!(S.hasKeys(e,[oc,"entry"])&&e[oc])}function b6(){return{[oc]:!0,entry:{entryType:tr.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function y6({entries:e,debug:t}){const r=g6(e);if(r)return r;const n=b6();e.forEach(s=>Gh({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=A2(n),i={tree:n,flattenedNodes:o};return p6(e,i),t&&console.info("element-book tree:",n),i}function v6(e,t,r){if(!t.parent)return e;const n=I0(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Gh({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=I0(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Kh(t).join(" > ")}`);return o}function Gh({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=m6[t.entryType](t);t.errors.push(...o);const i=v6(e,t,r),s=gl(t.title),a=i.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const l={[oc]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};i.children[s]=l,x3(t,tr.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(c=>Gh({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function I0(e,t){const r=D2(e)?e.fullUrlBreadcrumbs.slice(0,-1):Kh(e);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function A2(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>A2(o));return[e,...r].flat()}function Hh(e,t){return Zh(e,["",...t],void 0)}function Zh(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],s=i&&Zh(i,n,r);return{...e.controls,...s}}function w6(e,t,r){const n={...e};return Zh(n,["",...t],r),n}function E2(e,t){const r=t?.controls||(Ps(e,tr.Page)?it(e.entry.controls,(o,i)=>i.initValue):{});return{children:it(e.children,(o,i)=>E2(i,t?.children?.[i.urlBreadcrumb])),controls:r}}function Ne(e){const t={...e,entryType:tr.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:t.useVerticalExamples,entryType:tr.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),k2(n.title)].filter(S.isTruthy)};r.add(n.title),t.elementExamples[gl(o.title)]=o}}),t}var Nr;(function(e){e.Search="search",e.Book="book"})(Nr||(Nr={}));function C2(e){return e[0]===Nr.Book?"":e[1]?decodeURIComponent(e[1]):""}const zs={hash:void 0,paths:[Nr.Book],search:void 0};class ic{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=ic.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(S2.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return ic.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw ia(r,`Failed to define CSS var: ${k(t,4)}

`)}}}const S2=new ic;const Uu=globalThis,Jh=Uu.ShadowRoot&&(Uu.ShadyCSS===void 0||Uu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yh=Symbol(),Bp=new WeakMap;let qo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Yh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Jh&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Bp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Bp.set(r,t))}return t}toString(){return this.cssText}};const ke=e=>new qo(typeof e=="string"?e:e+"",void 0,Yh),M2=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new qo(r,e,Yh)},$6=(e,t)=>{if(Jh)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Uu.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},Rp=Jh?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return ke(r)})(e):e;const{is:k6,defineProperty:x6,getOwnPropertyDescriptor:D6,getOwnPropertyNames:A6,getOwnPropertySymbols:E6,getPrototypeOf:C6}=Object,zc=globalThis,Lp=zc.trustedTypes,S6=Lp?Lp.emptyScript:"",M6=zc.reactiveElementPolyfillSupport,tl=(e,t)=>e,sc={toAttribute(e,t){switch(t){case Boolean:e=e?S6:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Xh=(e,t)=>!k6(e,t),jp={attribute:!0,type:String,converter:sc,reflect:!1,useDefault:!1,hasChanged:Xh};Symbol.metadata??=Symbol("metadata"),zc.litPropertyMetadata??=new WeakMap;let xs=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=jp){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&x6(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=D6(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??jp}static _$Ei(){if(this.hasOwnProperty(tl("elementProperties")))return;const t=C6(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tl("properties"))){const r=this.properties,n=[...A6(r),...E6(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Rp(o))}else t!==void 0&&r.push(Rp(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $6(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:sc).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,r){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:sc;this._$Em=o;const a=s.fromAttribute(r,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){const s=this.constructor;if(o===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Xh)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,i]of n){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};xs.elementStyles=[],xs.shadowRootOptions={mode:"open"},xs[tl("elementProperties")]=new Map,xs[tl("finalized")]=new Map,M6?.({ReactiveElement:xs}),(zc.reactiveElementVersions??=[]).push("2.1.2");const Qh=globalThis,_p=e=>e,ac=Qh.trustedTypes,Up=ac?ac.createPolicy("lit-html",{createHTML:e=>e}):void 0,F2="$lit$",Uo=`lit$${Math.random().toFixed(9).slice(2)}$`,T2="?"+Uo,F6=`<${T2}>`,qi=document,pl=()=>qi.createComment(""),bl=e=>e===null||typeof e!="object"&&typeof e!="function",em=Array.isArray,T6=e=>em(e)||typeof e?.[Symbol.iterator]=="function",df=`[ 	
\f\r]`,Pa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zp=/-->/g,qp=/>/g,xi=RegExp(`>|${df}(?:([^\\s"'>=/]+)(${df}*=${df}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vp=/'/g,Wp=/"/g,N2=/^(?:script|style|textarea|title)$/i,N6=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),P6=N6(1),mn=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),Kp=new WeakMap,Ti=qi.createTreeWalker(qi,129);function P2(e,t){if(!em(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Up!==void 0?Up.createHTML(t):t}const I6=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=Pa;for(let a=0;a<r;a++){const l=e[a];let c,d,f=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===Pa?d[1]==="!--"?s=zp:d[1]!==void 0?s=qp:d[2]!==void 0?(N2.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=xi):d[3]!==void 0&&(s=xi):s===xi?d[0]===">"?(s=o??Pa,f=-1):d[1]===void 0?f=-2:(f=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?xi:d[3]==='"'?Wp:Vp):s===Wp||s===Vp?s=xi:s===zp||s===qp?s=Pa:(s=xi,o=void 0);const m=s===xi&&e[a+1].startsWith("/>")?" ":"";i+=s===Pa?l+F6:f>=0?(n.push(c),l.slice(0,f)+F2+l.slice(f)+Uo+m):l+Uo+(f===-2?a:m)}return[P2(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class yl{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[c,d]=I6(t,r);if(this.el=yl.createElement(c,n),Ti.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Ti.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(F2)){const h=d[s++],m=o.getAttribute(f).split(Uo),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:g[2],strings:m,ctor:g[1]==="."?B6:g[1]==="?"?R6:g[1]==="@"?L6:Vc}),o.removeAttribute(f)}else f.startsWith(Uo)&&(l.push({type:6,index:i}),o.removeAttribute(f));if(N2.test(o.tagName)){const f=o.textContent.split(Uo),h=f.length-1;if(h>0){o.textContent=ac?ac.emptyScript:"";for(let m=0;m<h;m++)o.append(f[m],pl()),Ti.nextNode(),l.push({type:2,index:++i});o.append(f[h],pl())}}}else if(o.nodeType===8)if(o.data===T2)l.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(Uo,f+1))!==-1;)l.push({type:7,index:i}),f+=Uo.length-1}i++}}static createElement(t,r){const n=qi.createElement("template");return n.innerHTML=t,n}}function qs(e,t,r=e,n){if(t===mn)return t;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const i=bl(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(t=qs(e,o._$AS(e,t.values),o,n)),t}class O6{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=(t?.creationScope??qi).importNode(r,!0);Ti.currentNode=o;let i=Ti.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new qc(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new j6(i,this,t)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=Ti.nextNode(),s++)}return Ti.currentNode=qi,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}let qc=class I2{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=qs(this,t,r),bl(t)?t===te||t==null||t===""?(this._$AH!==te&&this._$AR(),this._$AH=te):t!==this._$AH&&t!==mn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):T6(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==te&&bl(this._$AH)?this._$AA.nextSibling.data=t:this.T(qi.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=yl.createElement(P2(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const i=new O6(o,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(t){let r=Kp.get(t.strings);return r===void 0&&Kp.set(t.strings,r=new yl(t)),r}k(t){em(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new I2(this.O(pl()),this.O(pl()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=_p(t).nextSibling;_p(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Vc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=te,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=te}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=qs(this,t,r,0),s=!bl(t)||t!==this._$AH&&t!==mn,s&&(this._$AH=t);else{const a=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=qs(this,a[n+l],r,l),c===mn&&(c=this._$AH[l]),s||=!bl(c)||c!==this._$AH[l],c===te?t=te:t!==te&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class B6 extends Vc{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===te?void 0:t}}class R6 extends Vc{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==te)}}class L6 extends Vc{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=qs(this,t,r,0)??te)===mn)return;const n=this._$AH,o=t===te&&n!==te||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==te&&(n===te||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class j6{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){qs(this,t)}}const _6={I:qc},U6=Qh.litHtmlPolyfillSupport;U6?.(yl,qc),(Qh.litHtmlVersions??=[]).push("3.3.2");const z6=(e,t,r)=>{const n=r?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const i=r?.renderBefore??null;n._$litPart$=o=new qc(t.insertBefore(pl(),i),i,void 0,r??{})}return o._$AI(e),o};const tm=globalThis;let rl=class extends xs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=z6(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mn}};rl._$litElement$=!0,rl.finalized=!0,tm.litElementHydrateSupport?.({LitElement:rl});const q6=tm.litElementPolyfillSupport;q6?.({LitElement:rl});(tm.litElementVersions??=[]).push("4.2.2");function rm({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function V6({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}var Vs;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(Vs||(Vs={}));var Gp;(function(e){e.Space="+",e.Comma="#"})(Gp||(Gp={}));function Yn(e,t={}){return it(e,(n,o)=>{W6(n);const i=o,s=S.isObject(i)&&!(i instanceof qo),a=S.isString(i)||S.isNumber(i)||i instanceof qo?String(i):String(i.default),l=S.isString(i)||S.isNumber(i)||i instanceof qo?String(i):String(i.initialValue||i.default),c=ke($r({value:n.replace(/^-+/,""),prefix:"--"})),d={name:c,value:M2`var(${c}, ${ke(a)})`,syntax:S.isString(i)||S.isNumber(i)||i instanceof qo?Vs.Any:O0(i.syntax),default:a},f=String(d.name);if(!l)throw new Error(`Initial value for CSS var ${f} cannot be empty.`);return s&&!t.skipRegistration&&S2.registerProperty({inherits:!0,name:f,initialValue:l,syntax:d.syntax})&&globalThis.document?.documentElement&&rm({forCssVar:d,onElement:globalThis.document.documentElement,toValue:a}),d})}function W6(e){try{if(S.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(Xi("Invalid CSS var name.",t,`Got '${k(e)}'`))}}function O0(e){return e?S.isString(e)?e:e.union?e.union.map(t=>O0(t)).join(" | "):e.list?`${O0(e.list.values)}${e.list.separator}`:e.raw:Vs.Any}const Ie=Yn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),K6={nav:{hover:{background:Ie["element-book-nav-hover-background-color"],foreground:Ie["element-book-nav-hover-foreground-color"]},active:{background:Ie["element-book-nav-active-background-color"],foreground:Ie["element-book-nav-active-foreground-color"]},selected:{background:Ie["element-book-nav-selected-background-color"],foreground:Ie["element-book-nav-selected-foreground-color"]}},accent:{icon:Ie["element-book-accent-icon-color"]},page:{background:Ie["element-book-page-background-color"],backgroundFaint1:Ie["element-book-page-background-faint-level-1-color"],backgroundFaint2:Ie["element-book-page-background-faint-level-2-color"],foreground:Ie["element-book-page-foreground-color"],foregroundFaint1:Ie["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Ie["element-book-page-foreground-faint-level-2-color"]}};function G6(e,t){O2(e,t,K6)}function B0(e){return S.hasKey(e,"_$cssResult$")}function Hp(e){return S.hasKeys(e,["name","value","default"])&&S.isString(e.default)&&B0(e.name)&&B0(e.value)}function O2(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(B0(o)){if(!Hp(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);rm({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Hp(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);O2(e,o,i)}})}function Wa(e,t){let r=e.length,n,o,i=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,i=!0),Array.isArray(t[0])?o=t:(o=t.length>0?t.map(d=>[d]):[[]],s=!0);let a=o[0].length,l=o[0].map((d,f)=>o.map(h=>h[f])),c=n.map(d=>l.map(f=>{let h=0;if(!Array.isArray(d)){for(let m of f)h+=d*m;return h}for(let m=0;m<d.length;m++)h+=d[m]*(f[m]||0);return h}));return r===1&&i&&(c=c[0]),a===1&&s?r===1&&i?c[0]:c.map(d=>d[0]):c}function ff(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function bt(e,t,r=[0,0,0]){const n=ff(e,t[0]),o=ff(e,t[1]),i=ff(e,t[2]);return r[0]=n,r[1]=o,r[2]=i,r}function ca(e){return Go(e)==="string"}function Go(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function nm(e,{precision:t=16,unit:r}){return Be(e)?"none":(e=+om(e,t),e+(r??""))}function Be(e){return e===null}function Dt(e){return Be(e)?0:e}function om(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const o=10**(t-n);return Math.floor(e*o+.5)/o}function vl(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function B2(e,t,r){return(r-e)/(t-e)}function R0(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:vl(t[0],t[1],B2(e[0],e[1],r))}function Wc(e,t,r){return Math.max(Math.min(r,t),e)}function Kc(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function At(e,t){return Kc(Math.abs(e)**t,e)}function im(e,t){return t===0?0:e/t}function R2(e,t,r=0,n=e.length){for(;r<n;){const o=r+n>>1;e[o]<t?r=o+1:n=o}return r}function Ws(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===r)return!0;if(!o||o==="Object")return!1;e=n}return!1}var H6=Object.freeze({__proto__:null,bisectLeft:R2,clamp:Wc,copySign:Kc,interpolate:vl,interpolateInv:B2,isInstance:Ws,isNone:Be,isString:ca,mapRange:R0,multiplyMatrices:Wa,multiply_v3_m3x3:bt,serializeNumber:nm,skipNone:Dt,spow:At,toPrecision:om,type:Go,zdiv:im});class Z6{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Qo=new Z6;var Hr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let Zp=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:o,max:i}=n.groups;(o||i)&&(this.range=[+o,+i])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),R0(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return t=R0(this.coordRange,n,t),nm(t,{unit:o,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return Ws(t,this)?t:new this(t,r)}};const hf=Symbol("instance");class lc{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[hf]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let i=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>Zp.get(s,i))}))}serializeCoords(t,r,n){return n=t.map((o,i)=>Zp.get(n?.[i]??this.coords[i][0],this.spaceCoords[i])),t.map((o,i)=>n[i].serialize(o,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,o],i)=>{let s=t[i];if(Be(s)||isNaN(s))return s;let a=r[i],l=this.coords[i].find(c=>c.type==a);if(!l){let c=o.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${c} in ${this.name}()`)}return s=l.resolve(s),l.range&&(r[i]=l.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||Ws(t,this)?t:t[hf]?t[hf]:new lc(t,...r)}}const wr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function L0(e){return Array.isArray(e)?e:wr[e]}function uc(e,t,r,n={}){if(e=L0(e),t=L0(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Qo.run("chromatic-adaptation-start",o),o.M||(o.W1===wr.D65&&o.W2===wr.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===wr.D50&&o.W2===wr.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Qo.run("chromatic-adaptation-end",o),o.M)return bt(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function L2(e,t){let r={str:String(e)?.trim(),options:t};if(Qo.run("parse-start",r),r.color)return r.color;r.parsed=Y6(r.str);let n,o=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let i=r.parsed.name,s,a,l=r.parsed.args,c=l.map((h,m)=>r.parsed.argMeta[m]?.type);if(i==="color"){let h=l.shift();c.shift();let m=h.startsWith("--")?h.substring(2):`--${h}`,g=[h,m];if(s=G.findFormat({name:i,id:g,type:"function"}),!s){let b,y=h in G.registry?h:m;if(y in G.registry){let $=G.registry[y].formats?.color?.id;$&&(b=`Did you mean ${e.replace("color("+h,"color("+$)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(b??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!h.startsWith("--")&&Hr.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${h}).`),h.startsWith("--")&&!s.id.startsWith("--")&&Hr.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${h}).`)}else s=G.findFormat({name:i,type:"function"}),a=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:c,commas:r.parsed.commas});let d=1;r.parsed.lastAlpha&&(d=r.parsed.args.pop(),o&&(o.alphaType=c.pop()));let f=s.coords.length;if(l.length!==f)throw new TypeError(`Expected ${f} coordinates for ${a.id} in ${r.str}), got ${l.length}`);l=s.coerceCoords(l,c),n={spaceId:a.id,coords:l,alpha:d}}else e:for(let i of G.all)for(let s in i.formats){let a=i.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let l=i.getFormat(a),c=l.parse(r.str);if(c){o&&Object.assign(o,{format:l,formatId:s}),n=c;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Be(n.alpha)?n.alpha:n.alpha===void 0?1:Wc(0,n.alpha,1),n}const j2={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},cc={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(j2).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function J6(e){let t={},r=e.match(cc.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*j2[r]):cc.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function Y6(e){if(!e)return;e=e.trim();let t=e.match(cc.function);if(t){let r=[],n=[],o=!1,i=t[1].toLowerCase(),s=t[2].replace(cc.singleArgument,(a,l)=>{let{value:c,meta:d}=J6(l);return(a.startsWith("/")||i!=="color"&&r.length===3)&&(o=!0),r.push(c),n.push(d),""});return{name:i,args:r,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function ue(e,t){if(Array.isArray(e))return e.map(n=>ue(n,t));if(!e)throw new TypeError("Empty color reference");ca(e)&&(e=L2(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=G.get(r)),e.alpha===void 0&&(e.alpha=1),e}const X6=75e-6;class G{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?G.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r;let n=t.white??this.base.white??"D65";this.white=L0(n),this.formats=t.formats??{};for(let o in this.formats){let i=this.formats[o];i.type||="function",i.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:G.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:Q6(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Qo.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=X6}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let s=n[i];if(s.type!=="angle"&&s.range){if(Be(o))return!0;let[a,l]=s.range;return(a===void 0||o>=a-r)&&(l===void 0||o<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=lc.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=ue(t);[t,r]=[a.space,a.coords]}if(t=G.get(t),this.equals(t))return r;r=r.map(a=>Be(a)?0:a);let n=this.path,o=t.path,i,s;for(let a=0;a<n.length&&n[a].equals(o[a]);a++)i=n[a],s=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=ue(t);[t,r]=[n.space,n.coords]}return t=G.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push(o?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(G.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||Ws(t,this))return t;if(Go(t)==="string"){let o=G.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return G.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=G.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[o,i]of Object.entries(n.formats)){i.name??=o,i.type??="function";let s=(!t.name||i.name===t.name)&&(!t.type||i.type===t.type);if(t.id){let a=i.ids||[i.id],l=Array.isArray(t.id)?t.id:[t.id];s&&=l.some(c=>a.includes(c))}if(s){let a=lc.get(i,n);return a!==i&&(n.formats[i.name]=a),a}}return null}static resolveCoord(t,r){let n=Go(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=G.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Go(i),n==="number"||n==="string"&&i>=0){let l=Object.entries(o.coords)[i];if(l)return{space:o,id:l[0],index:i,...l[1]}}o=G.get(o);let s=i.toLowerCase(),a=0;for(let l in o.coords){let c=o.coords[l];if(l.toLowerCase()===s||c.name?.toLowerCase()===s)return{space:o,id:l,index:a,...c};a++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function Q6(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var rr=new G({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class pr extends G{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=rr),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=bt(r,t.toXYZ_M);return this.white!==this.base.white&&(n=uc(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=uc(this.base.white,this.white,r),bt(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function _2(e,t={}){if(Array.isArray(e))return e.map(l=>_2(l,t));let{cssProperty:r="background-color",element:n,...o}=t,i=null;try{return ue(e,o)}catch(l){i=l}let{CSS:s,getComputedStyle:a}=globalThis;if(ca(e)&&n&&s&&a&&s.supports(r,e)){let l=n.style[r];e!==l&&(n.style[r]=e);let c=a(n).getPropertyValue(r);if(e!==l&&(n.style[r]=l),c!==e)try{return ue(c,o)}catch(d){i=d}else i={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=i),null}function _l(e,t){e=ue(e);let r=G.get(t,t?.space),n=t?.precision,o;return!r||e.space.equals(r)?o=e.coords.slice():o=r.from(e),n===void 0?o:o.map(i=>om(i,n))}function Vr(e,t){if(e=ue(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=G.resolveCoord(t,e.space);return _l(e,r)[n]}function sm(e,t,r,n){return e=ue(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=G.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}sm.returns="color";function ko(e,t,r){if(e=ue(e),arguments.length===2&&Go(arguments[1])==="object"){let n=arguments[1];for(let o in n)ko(e,o,n[o])}else if(typeof r=="function"&&(r=r(Vr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:o}=G.resolveCoord(t,e.space),i=_l(e,n);i[o]=r,sm(e,n,i)}return e}ko.returns="color";var am=new G({id:"xyz-d50",name:"XYZ D50",white:"D50",base:rr,fromBase:e=>uc(rr.white,"D50",e),toBase:e=>uc("D50",rr.white,e)});const eD=216/24389,Jp=24/116,gu=24389/27;let mf=wr.D50;var Wr=new G({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:mf,base:am,fromBase(e){let r=e.map((s,a)=>s/mf[a]).map(s=>s>eD?Math.cbrt(s):(gu*s+16)/116),n=116*r[1]-16,o=500*(r[0]-r[1]),i=200*(r[1]-r[2]);return[n,o,i]},toBase(e){let[t,r,n]=e,o=[];return o[1]=(t+16)/116,o[0]=r/500+o[1],o[2]=o[1]-n/200,[o[0]>Jp?Math.pow(o[0],3):(116*o[0]-16)/gu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/gu,o[2]>Jp?Math.pow(o[2],3):(116*o[2]-16)/gu].map((s,a)=>s*mf[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function gn(e){return typeof e!="number"?e:(e%360+360)%360}function U2(e,t){let[r,n]=t,o=Be(r),i=Be(n);if(o&&i)return[r,n];if(o?r=n:i&&(n=r),e==="raw")return t;r=gn(r),n=gn(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Zr=new G({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Wr,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,l=a[1]-a[0];this.ε=l/1e5}let[t,r,n]=e,o=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,i=o?null:gn(Math.atan2(n,r)*180/Math.PI),s=o?0:Math.sqrt(r**2+n**2);return[t,s,i]},toBase(e){let[t,r,n]=e,o=null,i=null;return Be(n)||(r=r<0?0:r,o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Yp=25**7,dc=Math.PI,Xp=180/dc,bs=dc/180;function Qp(e){const t=e*e;return t*t*t*e}function z2(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){[e,t]=ue([e,t]);let[i,s,a]=Wr.from(e),l=Zr.from(Wr,[i,s,a])[1],[c,d,f]=Wr.from(t),h=Zr.from(Wr,[c,d,f])[1];l<0&&(l=0),h<0&&(h=0);let m=(l+h)/2,g=Qp(m),b=.5*(1-Math.sqrt(g/(g+Yp))),y=(1+b)*s,$=(1+b)*d,x=Math.sqrt(y**2+a**2),E=Math.sqrt($**2+f**2),N=y===0&&a===0?0:Math.atan2(a,y),B=$===0&&f===0?0:Math.atan2(f,$);N<0&&(N+=2*dc),B<0&&(B+=2*dc),N*=Xp,B*=Xp;let Z=c-i,Q=E-x,ee=B-N,J=N+B,ge=Math.abs(ee),ve;x*E===0?ve=0:ge<=180?ve=ee:ee>180?ve=ee-360:ee<-180?ve=ee+360:Hr.warn("the unthinkable has happened");let Me=2*Math.sqrt(E*x)*Math.sin(ve*bs/2),rt=(i+c)/2,Ke=(x+E)/2,Dr=Qp(Ke),qt;x*E===0?qt=J:ge<=180?qt=J/2:J<360?qt=(J+360)/2:qt=(J-360)/2;let zn=(rt-50)**2,eo=1+.015*zn/Math.sqrt(20+zn),nn=1+.045*Ke,Xt=1;Xt-=.17*Math.cos((qt-30)*bs),Xt+=.24*Math.cos(2*qt*bs),Xt+=.32*Math.cos((3*qt+6)*bs),Xt-=.2*Math.cos((4*qt-63)*bs);let Ve=1+.015*Ke*Xt,Nt=30*Math.exp(-1*((qt-275)/25)**2),on=2*Math.sqrt(Dr/(Dr+Yp)),ur=-1*Math.sin(2*Nt*bs)*on,sn=(Z/(r*eo))**2;return sn+=(Q/(n*nn))**2,sn+=(Me/(o*Ve))**2,sn+=ur*(Q/(n*nn))*(Me/(o*Ve)),Math.sqrt(sn)}const tD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],rD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],nD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Ho=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Tn=new G({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:rr,fromBase(e){let t=bt(e,tD);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),bt(t,nD,t)},toBase(e){let t=bt(e,Ho);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,bt(t,rD,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function j0(e,t){[e,t]=ue([e,t]);let[r,n,o]=Tn.from(e),[i,s,a]=Tn.from(t),l=r-i,c=n-s,d=o-a;return Math.sqrt(l**2+c**2+d**2)}const oD=75e-6;function Bi(e,t,{epsilon:r=oD}={}){e=ue(e),t||(t=e.space),t=G.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Ks(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function q2(e,t,r="lab"){r=G.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,s,a)=>{let l=o[a];return Be(s)||Be(l)?i:i+(l-s)**2},0))}function iD(e,t){return q2(e,t,"lab")}const sD=Math.PI,eb=sD/180;function aD(e,t,{l:r=2,c:n=1}={}){[e,t]=ue([e,t]);let[o,i,s]=Wr.from(e),[,a,l]=Zr.from(Wr,[o,i,s]),[c,d,f]=Wr.from(t),h=Zr.from(Wr,[c,d,f])[1];a<0&&(a=0),h<0&&(h=0);let m=o-c,g=a-h,b=i-d,y=s-f,$=b**2+y**2-g**2,x=.511;o>=16&&(x=.040975*o/(1+.01765*o));let E=.0638*a/(1+.0131*a)+.638,N;Be(l)&&(l=0),l>=164&&l<=345?N=.56+Math.abs(.2*Math.cos((l+168)*eb)):N=.36+Math.abs(.4*Math.cos((l+35)*eb));let B=Math.pow(a,4),Z=Math.sqrt(B/(B+1900)),Q=E*(Z*N+1-Z),ee=(m/(r*x))**2;return ee+=(g/(n*E))**2,ee+=$/Q**2,Math.sqrt(ee)}const tb=203;var lm=new G({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:rr,fromBase(e){return e.map(t=>t*tb)},toBase(e){return e.map(t=>t/tb)}});const pu=1.15,bu=.66,rb=2610/2**14,lD=2**14/2610,nb=3424/2**12,ob=2413/2**7,ib=2392/2**7,uD=1.7*2523/2**5,sb=2**5/(1.7*2523),yu=-.56,gf=16295499532821565e-27,cD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],dD=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],fD=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],hD=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var V2=new G({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:lm,fromBase(e){let[t,r,n]=e,o=pu*t-(pu-1)*n,i=bu*r-(bu-1)*t,a=bt([o,i,n],cD).map(function(h){let m=nb+ob*At(h/1e4,rb),g=1+ib*At(h/1e4,rb);return At(m/g,uD)}),[l,c,d]=bt(a,fD);return[(1+yu)*l/(1+yu*l)-gf,c,d]},toBase(e){let[t,r,n]=e,o=(t+gf)/(1+yu-yu*(t+gf)),s=bt([o,r,n],hD).map(function(h){let m=nb-At(h,sb),g=ib*At(h,sb)-ob;return 1e4*At(m/g,lD)}),[a,l,c]=bt(s,dD),d=(a+(pu-1)*c)/pu,f=(l+(bu-1)*d)/bu;return[d,f,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),_0=new G({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:V2,fromBase:Zr.fromBase,toBase:Zr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function mD(e,t){[e,t]=ue([e,t]);let[r,n,o]=_0.from(e),[i,s,a]=_0.from(t),l=r-i,c=n-s;Be(o)&&Be(a)?(o=0,a=0):Be(o)?o=a:Be(a)&&(a=o);let d=o-a,f=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}const W2=3424/4096,K2=2413/128,G2=2392/128,ab=2610/16384,gD=2523/32,pD=16384/2610,lb=32/2523,bD=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],yD=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],vD=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],wD=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var U0=new G({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:lm,fromBase(e){let t=bt(e,bD);return $D(t)},toBase(e){let t=kD(e);return bt(t,wD)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function $D(e){let t=e.map(function(r){let n=W2+K2*(r/1e4)**ab,o=1+G2*(r/1e4)**ab;return(n/o)**gD});return bt(t,yD)}function kD(e){return bt(e,vD).map(function(n){let o=Math.max(n**lb-W2,0),i=K2-G2*n**lb;return 1e4*(o/i)**pD})}function xD(e,t){[e,t]=ue([e,t]);let[r,n,o]=U0.from(e),[i,s,a]=U0.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-s)**2+(o-a)**2)}function DD(e,t){[e,t]=ue([e,t]);let r=2,[n,o,i]=Tn.from(e),[s,a,l]=Tn.from(t),c=n-s,d=r*(o-a),f=r*(i-l);return Math.sqrt(c**2+d**2+f**2)}const AD=wr.D65,H2=.42,ub=1/H2,pf=2*Math.PI,Z2=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],ED=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],CD=[[460,451,288],[460,-891,-261],[460,-220,-6300]],SD={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ei={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},MD=180/Math.PI,cb=Math.PI/180;function J2(e,t){return e.map(n=>{const o=At(t*Math.abs(n)*.01,H2);return 400*Kc(o,n)/(o+27.13)})}function FD(e,t){const r=100/t*27.13**ub;return e.map(n=>{const o=Math.abs(n);return Kc(r*At(o/(400-o),ub),n)})}function TD(e){let t=gn(e);t<=Ei.h[0]&&(t+=360);const r=R2(Ei.h,t)-1,[n,o]=Ei.h.slice(r,r+2),[i,s]=Ei.e.slice(r,r+2),a=Ei.H[r],l=(t-n)/i;return a+100*l/(l+(o-t)/s)}function ND(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,o]=Ei.h.slice(r,r+2),[i,s]=Ei.e.slice(r,r+2);return gn((t*(s*n-i*o)-100*n*s)/(t*(s-i)-100*s))}function Y2(e,t,r,n,o){const i={};i.discounting=o,i.refWhite=e,i.surround=n;const s=e.map(y=>y*100);i.la=t,i.yb=r;const a=s[1],l=bt(s,Z2);let c=SD[i.surround];const d=c[0];i.c=c[1],i.nc=c[2];const h=(1/(5*i.la+1))**4;i.fl=h*i.la+.1*(1-h)*(1-h)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(d*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=l.map(y=>vl(1,a/y,m)),i.dRgbInv=i.dRgb.map(y=>1/y);const g=l.map((y,$)=>y*i.dRgb[$]),b=J2(g,i.fl);return i.aW=i.nbb*(2*b[0]+b[1]+.05*b[2]),i}const db=Y2(AD,64/Math.PI*.2,20,"average",!1);function z0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=gn(e.h)*cb:r=ND(e.H)*cb;const n=Math.cos(r),o=Math.sin(r);let i=0;e.J!==void 0?i=At(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/i:e.M!==void 0?s=e.M/t.flRoot/i:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=At(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),c=t.aW*At(i,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*l,f=c/t.nbb,h=23*(f+.305)*im(a,23*d+a*(11*n+108*o)),m=h*n,g=h*o,b=FD(bt([f,m,g],CD).map(y=>y*1/1403),t.fl);return bt(b.map((y,$)=>y*t.dRgbInv[$]),ED).map(y=>y/100)}function X2(e,t){const r=e.map(E=>E*100),n=J2(bt(r,Z2).map((E,N)=>E*t.dRgb[N]),t.fl),o=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(i,o)%pf+pf)%pf,a=.25*(Math.cos(s+2)+3.8),l=5e4/13*t.nc*t.ncb*im(a*Math.sqrt(o**2+i**2),n[0]+n[1]+1.05*n[2]+.305),c=At(l,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=At(d/t.aW,.5*t.c*t.z),h=100*At(f,2),m=4/t.c*f*(t.aW+4)*t.flRoot,g=c*f,b=g*t.flRoot,y=gn(s*MD),$=TD(y),x=50*At(t.c*c/(t.aW+4),1/2);return{J:h,C:g,h:y,s:x,Q:m,M:b,H:$}}var PD=new G({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:rr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=X2(e,db),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return z0({J:e[0],M:e[1],h:e[2]},db)}});const ID=wr.D65,OD=216/24389,Q2=24389/27;function BD(e){return 116*(e>OD?Math.cbrt(e):(Q2*e+16)/116)-16}function q0(e){return e>8?Math.pow((e+16)/116,3):e/Q2}function RD(e,t){let[r,n,o]=e,i=[],s=0;if(o===0)return[0,0,0];let a=q0(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const l=2e-12,c=15;let d=0,f=1/0;for(;d<=c;){i=z0({J:s,C:n,h:r},t);const h=Math.abs(i[1]-a);if(h<f){if(h<=l)return i;f=h}s=s-(i[1]-a)*s/(2*i[1]),d+=1}return z0({J:s,C:n,h:r},t)}function LD(e,t){const r=BD(e[1]);if(r===0)return[0,0,0];const n=X2(e,um);return[gn(n.h),n.C,r]}const um=Y2(ID,200/Math.PI*q0(50),q0(50)*100,"average",!1);var wl=new G({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:rr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=LD(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return RD(e,um)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const jD=Math.PI/180,fb=[1,.007,.0228];function hb(e){e[1]<0&&(e=wl.fromBase(wl.toBase(e)));const t=Math.log(Math.max(1+fb[2]*e[1]*um.flRoot,1))/fb[2],r=e[0]*jD,n=t*Math.cos(r),o=t*Math.sin(r);return[e[2],n,o]}function _D(e,t){[e,t]=ue([e,t]);let[r,n,o]=hb(wl.from(e)),[i,s,a]=hb(wl.from(t));return Math.sqrt((r-i)**2+(n-s)**2+(o-a)**2)}var Gs={deltaE76:iD,deltaECMC:aD,deltaE2000:z2,deltaEJz:mD,deltaEITP:xD,deltaEOK:j0,deltaEOK2:DD,deltaEHCT:_D};function UD(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const mb={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ei(e,{method:t=Hr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:i=void 0}={}){if(e=ue(e),ca(arguments[1])?r=arguments[1]:r||(r=e.space),r=G.get(r),Bi(e,r,{epsilon:0}))return e;let s;if(t==="css")s=zD(e,{space:r});else{if(t!=="clip"&&!Bi(e,r)){Object.prototype.hasOwnProperty.call(mb,t)&&({method:t,jnd:o,deltaEMethod:n,blackWhiteClamp:i}=mb[t]);let a=z2;if(n!==""){for(let c in Gs)if("deltae"+n.toLowerCase()===c.toLowerCase()){a=Gs[c];break}}o===0&&(o=1e-16);let l=ei(Ze(e,r),{method:"clip",space:r});if(a(e,l)>o){if(i&&Object.keys(i).length===3){let x=G.resolveCoord(i.channel),E=Vr(Ze(e,x.space),x.id);if(Be(E)&&(E=0),E>=i.max)return Ze({space:"xyz-d65",coords:wr.D65},e.space);if(E<=i.min)return Ze({space:"xyz-d65",coords:[0,0,0]},e.space)}let c=G.resolveCoord(t),d=c.space,f=c.id,h=Ze(e,d);h.coords.forEach((x,E)=>{Be(x)&&(h.coords[E]=0)});let g=(c.range||c.refRange)[0],b=UD(o),y=g,$=Vr(h,f);for(;$-y>b;){let x=Ks(h);x=ei(x,{space:r,method:"clip"}),a(h,x)-o<b?y=Vr(h,f):$=Vr(h,f),ko(h,f,(y+$)/2)}s=Ze(h,r)}else s=l}else s=Ze(e,r);if(t==="clip"||!Bi(s,r,{epsilon:0})){let a=Object.values(r.coords).map(l=>l.range||[]);s.coords=s.coords.map((l,c)=>{let[d,f]=a[c];return d!==void 0&&(l=Math.max(d,l)),f!==void 0&&(l=Math.min(l,f)),l})}}return r!==e.space&&(s=Ze(s,e.space)),e.coords=s.coords,e}ei.returns="color";const gb={WHITE:{space:Tn,coords:[1,0,0],alpha:1},BLACK:{space:Tn,coords:[0,0,0],alpha:1}};function zD(e,{space:t}={}){e=ue(e),t||(t=e.space),t=G.get(t);const o=G.get("oklch");if(t.isUnbounded)return Ze(e,t);const i=Ze(e,o);let s=i.coords[0];if(s>=1){const g=Ze(gb.WHITE,t);return g.alpha=e.alpha,Ze(g,t)}if(s<=0){const g=Ze(gb.BLACK,t);return g.alpha=e.alpha,Ze(g,t)}if(Bi(i,t,{epsilon:0}))return Ze(i,t);function a(g){const b=Ze(g,t),y=Object.values(t.coords);return b.coords=b.coords.map(($,x)=>{if("range"in y[x]){const[E,N]=y[x].range;return Wc(E,$,N)}return $}),b}let l=0,c=i.coords[1],d=!0,f=Ks(i),h=a(f),m=j0(h,f);if(m<.02)return h;for(;c-l>1e-4;){const g=(l+c)/2;if(f.coords[1]=g,d&&Bi(f,t,{epsilon:0}))l=g;else if(h=a(f),m=j0(h,f),m<.02){if(.02-m<1e-4)break;d=!1,l=g}else c=g}return h}function Ze(e,t,{inGamut:r}={}){e=ue(e),t=G.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ei(o,r===!0?void 0:r)),o}Ze.returns="color";function nl(e,t={}){let{precision:r=Hr.precision,format:n,inGamut:o=!0,coords:i,alpha:s,commas:a}=t,l,c=ue(e),d=n,f=c.parseMeta;f&&!n&&(f.format.canSerialize()&&(n=f.format,d=f.formatId),i??=f.types,s??=f.alphaType,a??=f.commas),d&&(n=c.space.getFormat(n)??G.findFormat(d)),n||(n=c.space.getFormat("default")??G.DEFAULT_FORMAT,d=n.name),n&&n.space&&n.space!==c.space&&(c=Ze(c,n.space));let h=c.coords.slice();if(o||=n.toGamut,o&&!Bi(c)&&(h=ei(Ks(c),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)l=n.serialize(h,c.alpha,t);else throw new TypeError(`format ${d} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",g=n.serializeCoords(h,r,i);if(m==="color"){let E=n.id||n.ids?.[0]||c.space.cssId||c.space.id;g.unshift(E)}let b=c.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let y=s?.type??"<number>",$=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&b<1,x="";if(a??=n.commas,$){if(r!==null){let E;y==="<percentage>"&&(E="%",b*=100),b=nm(b,{precision:r,unit:E})}x=`${a?",":" /"} ${b}`}l=`${m}(${g.join(a?", ":" ")}${x})`}return l}const qD=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],VD=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var $l=new pr({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:qD,fromXYZ_M:VD}),ew=new pr({id:"rec2020",name:"REC.2020",base:$l,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const WD=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],KD=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var tw=new pr({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:WD,fromXYZ_M:KD});const GD=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ut=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var rw=new pr({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:GD,fromXYZ_M:Ut}),pb={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let bb=Array(3).fill("<percentage> | <number>[0, 255]"),yb=Array(3).fill("<number>[0, 255]");var Vi=new pr({id:"srgb",name:"sRGB",base:rw,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:bb},rgb_number:{name:"rgb",commas:!0,coords:yb,alpha:!1},color:{},rgba:{coords:bb,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:yb},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let o=r&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=pb.black,t.alpha=0):t.coords=pb[e],t.coords)return t}}}}),nw=new pr({id:"p3",cssId:"display-p3",name:"P3",base:tw,fromBase:Vi.fromBase,toBase:Vi.toBase});Hr.display_space=Vi;let HD;if(typeof CSS<"u"&&CSS.supports)for(let e of[Wr,ew,nw]){let t=e.getMinCoords(),n=nl({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Hr.display_space=e;break}}function ZD(e,{space:t=Hr.display_space,...r}={}){e=ue(e);let n=nl(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Hr.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Be)||Be(e.alpha))&&!(HD??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=Ks(e),o.coords=o.coords.map(Dt),o.alpha=Dt(o.alpha),n=nl(o,r),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=Ze(o,t),n=new String(nl(o,r)),n.color=o}return n}function JD(e,t,{space:r,hue:n="shorter"}={}){e=ue(e),r||=e.space,r=G.get(r);let o=Object.values(r.coords);[e,t]=[e,t].map(c=>Ze(c,r));let[i,s]=[e,t].map(c=>c.coords),a=i.map((c,d)=>{let f=o[d],h=s[d];return f.type==="angle"&&([c,h]=U2(n,[c,h])),vb(c,h)}),l=vb(e.alpha,t.alpha);return{space:r,coords:a,alpha:l}}function vb(e,t){return Be(e)||Be(t)?e===t?null:0:e-t}function YD(e,t){return e=ue(e),t=ue(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ti(e){return Vr(e,[rr,"y"])}function ow(e,t){ko(e,[rr,"y"],t)}function XD(e){Object.defineProperty(e.prototype,"luminance",{get(){return ti(this)},set(t){ow(this,t)}})}var QD=Object.freeze({__proto__:null,getLuminance:ti,register:XD,setLuminance:ow});function e8(e,t){e=ue(e),t=ue(t);let r=Math.max(ti(e),0),n=Math.max(ti(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const t8=.56,r8=.57,n8=.62,o8=.65,wb=.022,i8=1.414,s8=.1,a8=5e-4,l8=1.14,$b=.027,u8=1.14;function kb(e){return e>=wb?e:e+(wb-e)**i8}function ys(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function c8(e,t){t=ue(t),e=ue(e);let r,n,o,i,s,a;t=Ze(t,"srgb"),[i,s,a]=t.coords.map(m=>Be(m)?0:m);let l=ys(i)*.2126729+ys(s)*.7151522+ys(a)*.072175;e=Ze(e,"srgb"),[i,s,a]=e.coords.map(m=>Be(m)?0:m);let c=ys(i)*.2126729+ys(s)*.7151522+ys(a)*.072175,d=kb(l),f=kb(c),h=f>d;return Math.abs(f-d)<a8?n=0:h?(r=f**t8-d**r8,n=r*l8):(r=f**o8-d**n8,n=r*u8),Math.abs(n)<s8?o=0:n>0?o=n-$b:o=n+$b,o*100}function d8(e,t){e=ue(e),t=ue(t);let r=Math.max(ti(e),0),n=Math.max(ti(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const f8=5e4;function h8(e,t){e=ue(e),t=ue(t);let r=Math.max(ti(e),0),n=Math.max(ti(t),0);return n>r&&([r,n]=[n,r]),n===0?f8:(r-n)/n}function m8(e,t){e=ue(e),t=ue(t);let r=Vr(e,[Wr,"l"]),n=Vr(t,[Wr,"l"]);return Math.abs(r-n)}const g8=216/24389,xb=24/116,vu=24389/27;let bf=wr.D65;var V0=new G({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:bf,base:rr,fromBase(e){let r=e.map((n,o)=>n/bf[o]).map(n=>n>g8?Math.cbrt(n):(vu*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>xb?Math.pow(t[0],3):(116*t[0]-16)/vu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/vu,t[2]>xb?Math.pow(t[2],3):(116*t[2]-16)/vu].map((n,o)=>n*bf[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const yf=Math.pow(5,.5)*.5+.5;function p8(e,t){e=ue(e),t=ue(t);let r=Vr(e,[V0,"l"]),n=Vr(t,[V0,"l"]),o=Math.abs(Math.pow(r,yf)-Math.pow(n,yf)),i=Math.pow(o,1/yf)*Math.SQRT2-40;return i<7.5?0:i}var zu=Object.freeze({__proto__:null,contrastAPCA:c8,contrastDeltaPhi:p8,contrastLstar:m8,contrastMichelson:d8,contrastWCAG21:e8,contrastWeber:h8});function b8(e,t,r){ca(r)&&(r={algorithm:r});let{algorithm:n,...o}=r||{};if(!n){let i=Object.keys(zu).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=ue(e),t=ue(t);for(let i in zu)if("contrast"+n.toLowerCase()===i.toLowerCase())return zu[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Gc(e){let[t,r,n]=_l(e,rr),o=t+15*r+3*n;return[4*t/o,9*r/o]}function iw(e){let[t,r,n]=_l(e,rr),o=t+r+n;return[t/o,r/o]}function y8(e){Object.defineProperty(e.prototype,"uv",{get(){return Gc(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return iw(this)}})}var v8=Object.freeze({__proto__:null,register:y8,uv:Gc,xy:iw});function Ka(e,t,r={}){ca(r)&&(r={method:r});let{method:n=Hr.deltaE,...o}=r;for(let i in Gs)if("deltae"+n.toLowerCase()===i.toLowerCase())return Gs[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function sw(e,t=.25){let n=[G.get("oklch","lch"),"l"];return ko(e,n,o=>o*(1+t))}function aw(e,t=.25){let n=[G.get("oklch","lch"),"l"];return ko(e,n,o=>o*(1-t))}sw.returns="color";aw.returns="color";var w8=Object.freeze({__proto__:null,darken:aw,lighten:sw});function lw(e,t,r,n={}){return[e,t]=[ue(e),ue(t)],Go(r)==="object"&&([r,n]=[.5,r]),Ul(e,t,n)(r??.5)}function uw(e,t,r={}){let n;cm(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:s=2,maxSteps:a=1e3,...l}=r;n||([e,t]=[ue(e),ue(t)],n=Ul(e,t,l));let c=Ka(e,t),d=o>0?Math.max(s,Math.ceil(c/o)+1):s,f=[];if(a!==void 0&&(d=Math.min(d,a)),d===1)f=[{p:.5,color:n(.5)}];else{let h=1/(d-1);f=Array.from({length:d},(m,g)=>{let b=g*h;return{p:b,color:n(b)}})}if(o>0){let h=f.reduce((m,g,b)=>{if(b===0)return 0;let y=Ka(g.color,f[b-1].color,i);return Math.max(m,y)},0);for(;h>o;){h=0;for(let m=1;m<f.length&&f.length<a;m++){let g=f[m-1],b=f[m],y=(b.p+g.p)/2,$=n(y);h=Math.max(h,Ka($,g.color),Ka($,b.color)),f.splice(m,0,{p:y,color:n(y)}),m++}}}return f=f.map(h=>h.color),f}function Ul(e,t,r={}){if(cm(e)){let[l,c]=[e,t];return Ul(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:s}=r;e=ue(e),t=ue(t),e=Ks(e),t=Ks(t);let a={colors:[e,t],options:r};if(n?n=G.get(n):n=G.registry[Hr.interpolationSpace]||e.space,o=o?G.get(o):n,e=Ze(e,n),t=Ze(t,n),e=ei(e),t=ei(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,f]=[Vr(e,c),Vr(t,c)];Be(d)&&!Be(f)?d=f:Be(f)&&!Be(d)&&(f=d),[d,f]=U2(l,[d,f]),ko(e,c,d),ko(t,c,f)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((h,m)=>{let g=t.coords[m];return vl(h,g,l)}),d=vl(e.alpha,t.alpha,l),f={space:n,coords:c,alpha:d};return s&&(f.coords=f.coords.map(h=>h/d)),o!==n&&(f=Ze(f,o)),f},{rangeArgs:a})}function cm(e){return Go(e)==="function"&&!!e.rangeArgs}Hr.interpolationSpace="lab";function $8(e){e.defineFunction("mix",lw,{returns:"color"}),e.defineFunction("range",Ul,{returns:"function<color>"}),e.defineFunction("steps",uw,{returns:"array<color>"})}var k8=Object.freeze({__proto__:null,isRange:cm,mix:lw,range:Ul,register:$8,steps:uw}),x8=new G({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Vi,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,l]=[null,0,(r+t)/2],c=t-r;if(c!==0){switch(a=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-i)/c+(o<i?6:0);break;case o:s=(i-n)/c+2;break;case i:s=(n-o)/c+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),cw=new G({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Vi,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,l]=[null,0,t],c=t-r;if(c!==0){switch(t){case n:s=(o-i)/c+(o<i?6:0);break;case o:s=(i-n)/c+2;break;case i:s=(n-o)/c+4}s=s*60}return l&&(a=c/l),s>=360&&(s-=360),[s,a*100,l*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),D8=new G({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:cw,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let i=1-n,s=i===0?0:1-r/i;return[t,s*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const A8=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],E8=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var dw=new pr({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:A8,fromXYZ_M:E8}),C8=new pr({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:dw,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const S8=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],M8=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var fw=new pr({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:am,toXYZ_M:S8,fromXYZ_M:M8});const F8=1/512,T8=16/512;var N8=new pr({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:fw,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<T8?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=F8?r*n**(1/1.8):16*t})}});const wu=1.09929682680944,Db=.018053968510807;var P8=new pr({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:$l,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<Db*4.5?t/4.5:r*Math.pow((n+wu-1)/wu,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=Db?r*(wu*Math.pow(n,.45)-(wu-1)):4.5*t})}}),I8=new G({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Tn,fromBase:Zr.fromBase,toBase:Zr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Hs=2*Math.PI,fc=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],hc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],vf=Number.MAX_VALUE,ol=.206,dm=.03,Ga=(1+ol)/(1+dm);function Qt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((o,i)=>{n+=o*t[i]}),n}function il(e){return .5*(Ga*e-ol+Math.sqrt((Ga*e-ol)*(Ga*e-ol)+4*dm*Ga*e))}function Is(e){return(e**2+ol*e)/(Ga*(e+dm))}function fm(e){let[t,r]=e;return[r/t,r/(1-t)]}function O8(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function hm(e,t){let r=bt(e,Ho);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,bt(r,t,r)}function Hc(e,t,r,n){let o=R8(e,t,r,n),i=hm([1,o*e,o*t],r),s=At(1/Math.max(...i),1/3),a=s*o;return[s,a]}function B8(e,t,r,n,o,i,s,a){let l;if(a===void 0&&(a=Hc(e,t,i,s)),(r-o)*a[1]-(a[0]-o)*n<=0)l=a[1]*o/(n*a[0]+a[1]*(o-r));else{l=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-r));let c=r-o,d=n,f=Qt(Ho[0].slice(1),[e,t]),h=Qt(Ho[1].slice(1),[e,t]),m=Qt(Ho[2].slice(1),[e,t]),g=c+d*f,b=c+d*h,y=c+d*m,$=o*(1-l)+l*r,x=l*n,E=$+x*f,N=$+x*h,B=$+x*m,Z=E**3,Q=N**3,ee=B**3,J=3*g*E**2,ge=3*b*N**2,ve=3*y*B**2,Me=6*g**2*E,rt=6*b**2*N,Ke=6*y**2*B,Dr=Qt(i[0],[Z,Q,ee])-1,qt=Qt(i[0],[J,ge,ve]),zn=Qt(i[0],[Me,rt,Ke]),eo=qt/(qt*qt-.5*Dr*zn),nn=-Dr*eo,Xt=Qt(i[1],[Z,Q,ee])-1,Ve=Qt(i[1],[J,ge,ve]),Nt=Qt(i[1],[Me,rt,Ke]),on=Ve/(Ve*Ve-.5*Xt*Nt),ur=-Xt*on,sn=Qt(i[2],[Z,Q,ee])-1,wn=Qt(i[2],[J,ge,ve]),Fo=Qt(i[2],[Me,rt,Ke]),iu=wn/(wn*wn-.5*sn*Fo),hs=-sn*iu;nn=eo>=0?nn:vf,ur=on>=0?ur:vf,hs=iu>=0?hs:vf,l+=Math.min(nn,Math.min(ur,hs))}return l}function hw(e,t,r){let[n,o,i]=e,s=Hc(o,i,t,r),a=B8(o,i,n,1,n,t,r,s),l=fm(s),c=a/Math.min(n*l[0],(1-n)*l[1]),d=O8(o,i),f=n*d[0],h=(1-n)*d[1],m=.9*c*Math.sqrt(Math.sqrt(1/(1/f**4+1/h**4)));return f=n*.4,h=(1-n)*.8,[Math.sqrt(1/(1/f**2+1/h**2)),m,a]}function R8(e,t,r,n){let o,i,s,a,l,c,d,f;Qt(n[0][0],[e,t])>1?([o,i,s,a,l]=n[0][1],[c,d,f]=r[0]):Qt(n[1][0],[e,t])>1?([o,i,s,a,l]=n[1][1],[c,d,f]=r[1]):([o,i,s,a,l]=n[2][1],[c,d,f]=r[2]);let h=o+i*e+s*t+a*e**2+l*e*t,m=Qt(Ho[0].slice(1),[e,t]),g=Qt(Ho[1].slice(1),[e,t]),b=Qt(Ho[2].slice(1),[e,t]),y=1+h*m,$=1+h*g,x=1+h*b,E=y**3,N=$**3,B=x**3,Z=3*m*y**2,Q=3*g*$**2,ee=3*b*x**2,J=6*m**2*y,ge=6*g**2*$,ve=6*b**2*x,Me=c*E+d*N+f*B,rt=c*Z+d*Q+f*ee,Ke=c*J+d*ge+f*ve;return h=h-Me*rt/(rt**2-.5*Me*Ke),h}function L8(e,t,r){let[n,o,i]=e,s=Is(i),a=null,l=null;if(n=gn(n)/360,s!==0&&s!==1&&o!==0){let c=Math.cos(Hs*n),d=Math.sin(Hs*n),[f,h,m]=hw([s,c,d],t,r),g=.8,b=1.25,y,$,x,E;o<g?(y=b*o,$=0,x=g*f,E=1-x/h):(y=5*(o-.8),$=h,x=.2*h**2*1.25**2/f,E=1-x/(m-h));let N=$+y*x/(1-E*y);a=N*c,l=N*d}return[s,a,l]}function j8(e,t,r){let n=1e-7,o=1e-4,i=e[0],s=0,a=il(i),l=Math.sqrt(e[1]**2+e[2]**2),c=.5+Math.atan2(-e[2],-e[1])/Hs;if(a!==0&&a!==1&&l!==0){let f=e[1]/l,h=e[2]/l,[m,g,b]=hw([i,f,h],t,r),y=.8,$=1.25,x,E,N,B;l<g?(E=y*m,N=1-E/g,B=l/(E+N*l),s=B*y):(x=g,E=.2*g**2*$**2/m,N=1-E/(b-g),B=(l-x)/(E+N*(l-x)),s=y+.2*B)}const d=Math.abs(s)<o;return d||a===0||Math.abs(1-a)<n?(c=null,d||(s=0)):c=gn(c*360),[c,s,a]}var _8=new G({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Tn,gamutSpace:"self",fromBase(e){return j8(e,fc,hc)},toBase(e){return L8(e,fc,hc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),mw=new G({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Tn,fromBase(e){return[il(e[0]),e[1],e[2]]},toBase(e){return[Is(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),U8=new G({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:mw,fromBase:Zr.fromBase,toBase:Zr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function z8(e,t,r){let[n,o,i]=e;n=gn(n)/360;let s=Is(i),a=null,l=null;if(s!==0&&o!==0){let c=Math.cos(Hs*n),d=Math.sin(Hs*n),f=Hc(c,d,t,r),[h,m]=fm(f),g=.5,b=1-g/h,y=1-o*g/(g+m-m*b*o),$=o*m*g/(g+m-m*b*o);s=i*y;let x=i*$,E=Is(y),N=$*E/y,B=Is(s);x=x*B/s,s=B;let[Z,Q,ee]=hm([E,c*N,d*N],t),J=At(1/Math.max(Math.max(Z,Q),Math.max(ee,0)),1/3);s=s*J,x=x*J,a=x*c,l=x*d}return[s,a,l]}function q8(e,t,r){let n=1e-4,o=e[0],i=0,s=il(o),a=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/Hs;if(o!==0&&o!==1&&a!==0){let c=e[1]/a,d=e[2]/a,f=Hc(c,d,t,r),[h,m]=fm(f),g=.5,b=1-g/h,y=m/(a+o*m),$=y*o,x=y*a,E=Is($),N=x*E/$,[B,Z,Q]=hm([E,c*N,d*N],t),ee=At(1/Math.max(Math.max(B,Z),Math.max(Q,0)),1/3);o=o/ee,a=a/ee,a=a*il(o)/o,o=il(o),s=o/$,i=(g+m)*x/(m*g+m*b*x)}return Math.abs(i)<n||s===0?l=null:l=gn(l*360),[l,i,s]}var V8=new G({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Tn,gamutSpace:"self",fromBase(e){return q8(e,fc,hc)},toBase(e){return z8(e,fc,hc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let gw=wr.D65;const W8=216/24389,Ab=24389/27,[Eb,Cb]=Gc({space:rr,coords:gw});var pw=new G({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:gw,base:rr,fromBase(e){let t=[Dt(e[0]),Dt(e[1]),Dt(e[2])],r=t[1],[n,o]=Gc({space:rr,coords:t});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let i=r<=W8?Ab*r:116*Math.cbrt(r)-16;return[i,13*i*(n-Eb),13*i*(o-Cb)]},toBase(e){let[t,r,n]=e;if(t===0||Be(t))return[0,0,0];r=Dt(r),n=Dt(n);let o=r/(13*t)+Eb,i=n/(13*t)+Cb,s=t<=8?t/Ab:Math.pow((t+16)/116,3);return[s*(9*o/(4*i)),s,s*((12-3*o-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),mm=new G({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:pw,fromBase:Zr.fromBase,toBase:Zr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const K8=216/24389,G8=24389/27,Sb=Ut[0][0],Mb=Ut[0][1],wf=Ut[0][2],Fb=Ut[1][0],Tb=Ut[1][1],$f=Ut[1][2],Nb=Ut[2][0],Pb=Ut[2][1],kf=Ut[2][2];function vs(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function mc(e){const t=Math.pow(e+16,3)/1560896,r=t>K8?t:e/G8,n=r*(284517*Sb-94839*wf),o=r*(838422*wf+769860*Mb+731718*Sb),i=r*(632260*wf-126452*Mb),s=r*(284517*Fb-94839*$f),a=r*(838422*$f+769860*Tb+731718*Fb),l=r*(632260*$f-126452*Tb),c=r*(284517*Nb-94839*kf),d=r*(838422*kf+769860*Pb+731718*Nb),f=r*(632260*kf-126452*Pb);return{r0s:n/i,r0i:o*e/i,r1s:n/(i+126452),r1i:(o-769860)*e/(i+126452),g0s:s/l,g0i:a*e/l,g1s:s/(l+126452),g1i:(a-769860)*e/(l+126452),b0s:c/f,b0i:d*e/f,b1s:c/(f+126452),b1i:(d-769860)*e/(f+126452)}}function Ib(e,t){const r=t/360*Math.PI*2,n=vs(e.r0s,e.r0i,r),o=vs(e.r1s,e.r1i,r),i=vs(e.g0s,e.g0i,r),s=vs(e.g1s,e.g1i,r),a=vs(e.b0s,e.b0i,r),l=vs(e.b1s,e.b1i,r);return Math.min(n,o,i,s,a,l)}var H8=new G({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:mm,gamutSpace:Vi,fromBase(e){let[t,r,n]=[Dt(e[0]),Dt(e[1]),Dt(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=mc(t),s=Ib(i,n);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[Dt(e[0]),Dt(e[1]),Dt(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=mc(n);o=Ib(i,t)/100*r}return[n,o,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Ut[0][0];Ut[0][1];Ut[0][2];Ut[1][0];Ut[1][1];Ut[1][2];Ut[2][0];Ut[2][1];Ut[2][2];function ws(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Ob(e){let t=ws(e.r0s,e.r0i),r=ws(e.r1s,e.r1i),n=ws(e.g0s,e.g0i),o=ws(e.g1s,e.g1i),i=ws(e.b0s,e.b0i),s=ws(e.b1s,e.b1i);return Math.min(t,r,n,o,i,s)}var Z8=new G({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:mm,gamutSpace:"self",fromBase(e){let[t,r,n]=[Dt(e[0]),Dt(e[1]),Dt(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=mc(t),s=Ob(i);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[Dt(e[0]),Dt(e[1]),Dt(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=mc(n);o=Ob(i)/100*r}return[n,o,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),gm=new pr({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:$l.toBase,fromBase:$l.fromBase});const Bb=203,Rb=2610/2**14,J8=2**14/2610,Y8=2523/2**5,Lb=2**5/2523,jb=3424/2**12,_b=2413/2**7,Ub=2392/2**7;var X8=new pr({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:gm,toBase(e){return e.map(function(t){return(Math.max(t**Lb-jb,0)/(_b-Ub*t**Lb))**J8*1e4/Bb})},fromBase(e){return e.map(function(t){let r=Math.max(t*Bb/1e4,0),n=jb+_b*r**Rb,o=1+Ub*r**Rb;return(n/o)**Y8})}});const zb=.17883277,qb=.28466892,Vb=.55991073,xf=3.7743;var Q8=new pr({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:gm,toBase(e){return e.map(function(t){return t<=.5?t**2/3*xf:(Math.exp((t-Vb)/zb)+qb)/12*xf})},fromBase(e){return e.map(function(t){return t/=xf,t<=1/12?At(3*t,.5):zb*Math.log(12*t-qb)+Vb})}});const bw={};Qo.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=yw(e.W1,e.W2,e.options.method))});Qo.add("chromatic-adaptation-end",e=>{e.M||(e.M=yw(e.W1,e.W2,e.options.method))});function Zc({id:e,toCone_M:t,fromCone_M:r}){bw[e]=arguments[0]}function yw(e,t,r="Bradford"){let n=bw[r],[o,i,s]=Wa(n.toCone_M,e),[a,l,c]=Wa(n.toCone_M,t),d=[[a/o,0,0],[0,l/i,0],[0,0,c/s]],f=Wa(d,n.toCone_M);return Wa(n.fromCone_M,f)}Zc({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Zc({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Zc({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Zc({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(wr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});wr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const e9=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],t9=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var vw=new pr({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:wr.ACES,toXYZ_M:e9,fromXYZ_M:t9});const $u=2**-16,Df=-.35828683,ku=(Math.log2(65504)+9.72)/17.52;var r9=new pr({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Df,ku],name:"Red"},g:{range:[Df,ku],name:"Green"},b:{range:[Df,ku],name:"Blue"}},referred:"scene",base:vw,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-$u)*2:r<ku?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2($u)+9.72)/17.52:t<$u?(Math.log2($u+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Wb=Object.freeze({__proto__:null,A98RGB:C8,A98RGB_Linear:dw,ACEScc:r9,ACEScg:vw,CAM16_JMh:PD,HCT:wl,HPLuv:Z8,HSL:x8,HSLuv:H8,HSV:cw,HWB:D8,ICTCP:U0,JzCzHz:_0,Jzazbz:V2,LCH:Zr,LCHuv:mm,Lab:Wr,Lab_D65:V0,Luv:pw,OKLCH:I8,OKLab:Tn,OKLrCH:U8,OKLrab:mw,Okhsl:_8,Okhsv:V8,P3:nw,P3_Linear:tw,ProPhoto:N8,ProPhoto_Linear:fw,REC_2020:ew,REC_2020_Linear:$l,REC_2020_Scene_Referred:P8,REC_2100_HLG:Q8,REC_2100_Linear:gm,REC_2100_PQ:X8,XYZ_ABS_D65:lm,XYZ_D50:am,XYZ_D65:rr,sRGB:Vi,sRGB_Linear:rw});let Je=class Sr{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=ue(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:G.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Be(i)?i:i===void 0?1:Wc(0,i,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Sr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=ZD(this,...t);return r.color=new Sr(r.color),r}static get(t,...r){return Ws(t,this)?t:new Sr(t,...r)}static try(t,r){if(Ws(t,this))return t;let n=_2(t,r);return n?new Sr(n):null}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,s=function(...a){let l=r(...a);if(i==="color")l=Sr.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let f=c(...d);return Sr.get(f)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>Sr.get(c)));return l};t in Sr||(Sr[t]=s),o&&(Sr.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)Sr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Sr);else for(let r in t)Sr.defineFunction(r,t[r])}};Je.defineFunctions({get:Vr,getAll:_l,set:ko,setAll:sm,to:Ze,equals:YD,inGamut:Bi,toGamut:ei,distance:q2,deltas:JD,toString:nl});Object.assign(Je,{util:H6,hooks:Qo,WHITES:wr,Space:G,spaces:G.registry,parse:L2,defaults:Hr});for(let e of Object.keys(Wb))G.register(Wb[e]);for(let e in G.registry)W0(e,G.registry[e]);Qo.add("colorspace-init-end",e=>{W0(e.id,e),e.aliases?.forEach(t=>{W0(t,e)})});function W0(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(Je.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:((i,s)=>{try{return G.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)}),get:(i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)&&s in o){let{index:l}=G.resolveCoord([t,s]);if(l>=0)return i[l]}return Reflect.get(i,s,a)},set:(i,s,a,l)=>{if(s&&typeof s!="symbol"&&!(s in i)||Number(s)>=0){let{index:c}=G.resolveCoord([t,s]);if(c>=0)return i[c]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,l)}});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}Je.extend(Gs);Je.extend({deltaE:Ka});Object.assign(Je,{deltaEMethods:Gs});Je.extend(w8);Je.extend({contrast:b8});Je.extend(v8);Je.extend(QD);Je.extend(k8);Je.extend(zu);const ww=Symbol("no update");function Kb(e){return e!==ww}class Af extends Ln()("observable-value-update"){}class n9 extends Ln()("observable-value-resolve"){}class o9 extends Ln()("observable-value-error"){}class i9 extends Vh("observable-destroy"){}class s9 extends Vh("observable-callback-call"){}class a9 extends Ln()("observable-params-update"){}class $w{listenTarget=new Wh;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===ww)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const o=this.value;return this.value=r,this.listenTarget.dispatch(new Af({detail:[r,o]})),!0}return!1}listen(t,r){const n=o=>r(...o.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(Af,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Af,r)}destroy(){this.listenTarget.dispatch(new i9),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function pm(e,t){return g3(e,t,(r,n)=>S.isFunction(r)&&S.isFunction(n)?!0:S.strictEquals(r,n))}var sl;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(sl||(sl={}));class l9 extends $w{equalityCheck;waitingForValueDeferredPromise=new Yu;lastSetPromise;lastSetId=Ii();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck="equalityCheck"in t?t.equalityCheck:pm,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Ii();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Yu,super.setValue(this.waitingForValueDeferredPromise.promise,S.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=yt(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(t){return Kb(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,S.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Ii(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new n9({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,S.strictEquals),this.dispatch(new o9({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Kb(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(yt(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?sl.Rejected:this.value instanceof Promise?sl.Waiting:sl.Resolved}}class Es extends l9{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Es.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck="equalityCheck"in t?t.equalityCheck:pm,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Es.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Es.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(yt(t))}finally{this.dispatch(new s9)}}updateLastParams(t){try{return this.internalParams===Es.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new a9({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(yt(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return S.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function u9(e){return Mt(e)&&!Lr(e)&&!ql(e)&&Symbol.asyncIterator in e}function Lr(e){return Array.isArray(e)}function kw(e){return typeof e=="bigint"}function zl(e){return typeof e=="boolean"}function bm(e){return e instanceof globalThis.Date}function c9(e){return typeof e=="function"}function d9(e){return Mt(e)&&!Lr(e)&&!ql(e)&&Symbol.iterator in e}function f9(e){return e===null}function Xn(e){return typeof e=="number"}function Mt(e){return typeof e=="object"&&e!==null}function xw(e){return e instanceof globalThis.RegExp}function $t(e){return typeof e=="string"}function h9(e){return typeof e=="symbol"}function ql(e){return e instanceof globalThis.Uint8Array}function Et(e){return e===void 0}function m9(e){return e.map(t=>gc(t))}function g9(e){return new Date(e.getTime())}function p9(e){return new Uint8Array(e)}function b9(e){return new RegExp(e.source,e.flags)}function y9(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=gc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=gc(e[r]);return t}function gc(e){return Lr(e)?m9(e):bm(e)?g9(e):ql(e)?p9(e):xw(e)?b9(e):Mt(e)?y9(e):e}function Jr(e){return gc(e)}function ym(e,t){return Jr(t===void 0?e:{...t,...e})}function Dw(e){return Qn(e)&&globalThis.Symbol.asyncIterator in e}function Aw(e){return Qn(e)&&globalThis.Symbol.iterator in e}function Ew(e){return e instanceof globalThis.Promise}function vm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function wm(e){return e instanceof globalThis.Uint8Array}function Cw(e,t){return t in e}function Qn(e){return e!==null&&typeof e=="object"}function Yr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function li(e){return e===void 0}function Jc(e){return e===null}function Yc(e){return typeof e=="boolean"}function be(e){return typeof e=="number"}function Sw(e){return globalThis.Number.isInteger(e)}function co(e){return typeof e=="bigint"}function Gr(e){return typeof e=="string"}function Mw(e){return typeof e=="function"}function Xc(e){return typeof e=="symbol"}function Fw(e){return co(e)||Yc(e)||Jc(e)||be(e)||Gr(e)||Xc(e)||li(e)}var wt;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Qn(s);return e.AllowArrayObject?a:a&&!Yr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function o(s){return e.AllowNaN?be(s):Number.isFinite(s)}e.IsNumberLike=o;function i(s){const a=li(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=i})(wt||(wt={}));function v9(e){return globalThis.Object.freeze(e).map(t=>pc(t))}function w9(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=pc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=pc(e[r]);return globalThis.Object.freeze(t)}function pc(e){return Lr(e)?v9(e):bm(e)?e:ql(e)?e:xw(e)?e:Mt(e)?w9(e):e}function U(e,t){const r=t!==void 0?{...t,...e}:e;switch(wt.InstanceMode){case"freeze":return pc(r);case"clone":return Jr(r);default:return r}}class sr extends Error{constructor(t){super(t)}}const Pr=Symbol.for("TypeBox.Transform"),Vl=Symbol.for("TypeBox.Readonly"),Do=Symbol.for("TypeBox.Optional"),Qc=Symbol.for("TypeBox.Hint"),j=Symbol.for("TypeBox.Kind");function $m(e){return Mt(e)&&e[Vl]==="Readonly"}function ui(e){return Mt(e)&&e[Do]==="Optional"}function Tw(e){return Ce(e,"Any")}function Nw(e){return Ce(e,"Argument")}function da(e){return Ce(e,"Array")}function ed(e){return Ce(e,"AsyncIterator")}function td(e){return Ce(e,"BigInt")}function Wl(e){return Ce(e,"Boolean")}function fa(e){return Ce(e,"Computed")}function ha(e){return Ce(e,"Constructor")}function $9(e){return Ce(e,"Date")}function ma(e){return Ce(e,"Function")}function ga(e){return Ce(e,"Integer")}function bn(e){return Ce(e,"Intersect")}function rd(e){return Ce(e,"Iterator")}function Ce(e,t){return Mt(e)&&j in e&&e[j]===t}function Pw(e){return zl(e)||Xn(e)||$t(e)}function ts(e){return Ce(e,"Literal")}function rs(e){return Ce(e,"MappedKey")}function tn(e){return Ce(e,"MappedResult")}function Kl(e){return Ce(e,"Never")}function k9(e){return Ce(e,"Not")}function km(e){return Ce(e,"Null")}function pa(e){return Ce(e,"Number")}function jn(e){return Ce(e,"Object")}function nd(e){return Ce(e,"Promise")}function od(e){return Ce(e,"Record")}function Br(e){return Ce(e,"Ref")}function Iw(e){return Ce(e,"RegExp")}function Gl(e){return Ce(e,"String")}function xm(e){return Ce(e,"Symbol")}function ns(e){return Ce(e,"TemplateLiteral")}function x9(e){return Ce(e,"This")}function Ye(e){return Mt(e)&&Pr in e}function os(e){return Ce(e,"Tuple")}function Hl(e){return Ce(e,"Undefined")}function Yt(e){return Ce(e,"Union")}function D9(e){return Ce(e,"Uint8Array")}function A9(e){return Ce(e,"Unknown")}function E9(e){return Ce(e,"Unsafe")}function C9(e){return Ce(e,"Void")}function S9(e){return Mt(e)&&j in e&&$t(e[j])}function kr(e){return Tw(e)||Nw(e)||da(e)||Wl(e)||td(e)||ed(e)||fa(e)||ha(e)||$9(e)||ma(e)||ga(e)||bn(e)||rd(e)||ts(e)||rs(e)||tn(e)||Kl(e)||k9(e)||km(e)||pa(e)||jn(e)||nd(e)||od(e)||Br(e)||Iw(e)||Gl(e)||xm(e)||ns(e)||x9(e)||os(e)||Hl(e)||Yt(e)||D9(e)||A9(e)||E9(e)||C9(e)||S9(e)}const M9=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Ow(e){try{return new RegExp(e),!0}catch{return!1}}function Dm(e){if(!$t(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function Bw(e){return Am(e)||ct(e)}function Ia(e){return Et(e)||kw(e)}function We(e){return Et(e)||Xn(e)}function Am(e){return Et(e)||zl(e)}function Ue(e){return Et(e)||$t(e)}function F9(e){return Et(e)||$t(e)&&Dm(e)&&Ow(e)}function T9(e){return Et(e)||$t(e)&&Dm(e)}function Rw(e){return Et(e)||ct(e)}function bc(e){return Mt(e)&&e[Do]==="Optional"}function Nn(e){return Se(e,"Any")&&Ue(e.$id)}function N9(e){return Se(e,"Argument")&&Xn(e.index)}function is(e){return Se(e,"Array")&&e.type==="array"&&Ue(e.$id)&&ct(e.items)&&We(e.minItems)&&We(e.maxItems)&&Am(e.uniqueItems)&&Rw(e.contains)&&We(e.minContains)&&We(e.maxContains)}function Em(e){return Se(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Ue(e.$id)&&ct(e.items)}function id(e){return Se(e,"BigInt")&&e.type==="bigint"&&Ue(e.$id)&&Ia(e.exclusiveMaximum)&&Ia(e.exclusiveMinimum)&&Ia(e.maximum)&&Ia(e.minimum)&&Ia(e.multipleOf)}function ss(e){return Se(e,"Boolean")&&e.type==="boolean"&&Ue(e.$id)}function P9(e){return Se(e,"Computed")&&$t(e.target)&&Lr(e.parameters)&&e.parameters.every(t=>ct(t))}function sd(e){return Se(e,"Constructor")&&e.type==="Constructor"&&Ue(e.$id)&&Lr(e.parameters)&&e.parameters.every(t=>ct(t))&&ct(e.returns)}function ad(e){return Se(e,"Date")&&e.type==="Date"&&Ue(e.$id)&&We(e.exclusiveMaximumTimestamp)&&We(e.exclusiveMinimumTimestamp)&&We(e.maximumTimestamp)&&We(e.minimumTimestamp)&&We(e.multipleOfTimestamp)}function ld(e){return Se(e,"Function")&&e.type==="Function"&&Ue(e.$id)&&Lr(e.parameters)&&e.parameters.every(t=>ct(t))&&ct(e.returns)}function Ao(e){return Se(e,"Integer")&&e.type==="integer"&&Ue(e.$id)&&We(e.exclusiveMaximum)&&We(e.exclusiveMinimum)&&We(e.maximum)&&We(e.minimum)&&We(e.multipleOf)}function Lw(e){return Mt(e)&&Object.entries(e).every(([t,r])=>Dm(t)&&ct(r))}function as(e){return Se(e,"Intersect")&&!($t(e.type)&&e.type!=="object")&&Lr(e.allOf)&&e.allOf.every(t=>ct(t)&&!j9(t))&&Ue(e.type)&&(Am(e.unevaluatedProperties)||Rw(e.unevaluatedProperties))&&Ue(e.$id)}function Cm(e){return Se(e,"Iterator")&&e.type==="Iterator"&&Ue(e.$id)&&ct(e.items)}function Se(e,t){return Mt(e)&&j in e&&e[j]===t}function jw(e){return ci(e)&&$t(e.const)}function _w(e){return ci(e)&&Xn(e.const)}function Uw(e){return ci(e)&&zl(e.const)}function ci(e){return Se(e,"Literal")&&Ue(e.$id)&&I9(e.const)}function I9(e){return zl(e)||Xn(e)||$t(e)}function O9(e){return Se(e,"MappedKey")&&Lr(e.keys)&&e.keys.every(t=>Xn(t)||$t(t))}function B9(e){return Se(e,"MappedResult")&&Lw(e.properties)}function di(e){return Se(e,"Never")&&Mt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Zs(e){return Se(e,"Not")&&ct(e.not)}function Sm(e){return Se(e,"Null")&&e.type==="null"&&Ue(e.$id)}function Ir(e){return Se(e,"Number")&&e.type==="number"&&Ue(e.$id)&&We(e.exclusiveMaximum)&&We(e.exclusiveMinimum)&&We(e.maximum)&&We(e.minimum)&&We(e.multipleOf)}function dt(e){return Se(e,"Object")&&e.type==="object"&&Ue(e.$id)&&Lw(e.properties)&&Bw(e.additionalProperties)&&We(e.minProperties)&&We(e.maxProperties)}function Mm(e){return Se(e,"Promise")&&e.type==="Promise"&&Ue(e.$id)&&ct(e.item)}function or(e){return Se(e,"Record")&&e.type==="object"&&Ue(e.$id)&&Bw(e.additionalProperties)&&Mt(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&Ow(r[0])&&Mt(t.patternProperties)&&ct(t.patternProperties[r[0]])})(e)}function R9(e){return Se(e,"Ref")&&Ue(e.$id)&&$t(e.$ref)}function kl(e){return Se(e,"RegExp")&&Ue(e.$id)&&$t(e.source)&&$t(e.flags)&&We(e.maxLength)&&We(e.minLength)}function Pn(e){return Se(e,"String")&&e.type==="string"&&Ue(e.$id)&&We(e.minLength)&&We(e.maxLength)&&F9(e.pattern)&&T9(e.format)}function xl(e){return Se(e,"Symbol")&&e.type==="symbol"&&Ue(e.$id)}function Dl(e){return Se(e,"TemplateLiteral")&&e.type==="string"&&$t(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function L9(e){return Se(e,"This")&&Ue(e.$id)&&$t(e.$ref)}function j9(e){return Mt(e)&&Pr in e}function ud(e){return Se(e,"Tuple")&&e.type==="array"&&Ue(e.$id)&&Xn(e.minItems)&&Xn(e.maxItems)&&e.minItems===e.maxItems&&(Et(e.items)&&Et(e.additionalItems)&&e.minItems===0||Lr(e.items)&&e.items.every(t=>ct(t)))}function Wi(e){return Se(e,"Undefined")&&e.type==="undefined"&&Ue(e.$id)}function xo(e){return Se(e,"Union")&&Ue(e.$id)&&Mt(e)&&Lr(e.anyOf)&&e.anyOf.every(t=>ct(t))}function Zl(e){return Se(e,"Uint8Array")&&e.type==="Uint8Array"&&Ue(e.$id)&&We(e.minByteLength)&&We(e.maxByteLength)}function In(e){return Se(e,"Unknown")&&Ue(e.$id)}function _9(e){return Se(e,"Unsafe")}function cd(e){return Se(e,"Void")&&e.type==="void"&&Ue(e.$id)}function U9(e){return Mt(e)&&j in e&&$t(e[j])&&!M9.includes(e[j])}function ct(e){return Mt(e)&&(Nn(e)||N9(e)||is(e)||ss(e)||id(e)||Em(e)||P9(e)||sd(e)||ad(e)||ld(e)||Ao(e)||as(e)||Cm(e)||ci(e)||O9(e)||B9(e)||di(e)||Zs(e)||Sm(e)||Ir(e)||dt(e)||Mm(e)||or(e)||R9(e)||kl(e)||Pn(e)||xl(e)||Dl(e)||L9(e)||ud(e)||Wi(e)||xo(e)||Zl(e)||In(e)||_9(e)||cd(e)||U9(e))}const z9="(true|false)",qu="(0|[1-9][0-9]*)",zw="(.*)",q9="(?!.*)",Js=`^${qu}$`,Ys=`^${zw}$`,V9=`^${q9}$`,qw=new Map;function Fm(e){return qw.has(e)}function Tm(e){return qw.get(e)}const Nm=new Map;function ri(e){return Nm.has(e)}function Pm(e,t){Nm.set(e,t)}function Im(e){return Nm.get(e)}function W9(e,t){return e.includes(t)}function K9(e){return[...new Set(e)]}function G9(e,t){return e.filter(r=>t.includes(r))}function H9(e,t){return e.reduce((r,n)=>G9(r,n),t)}function Z9(e){return e.length===1?e[0]:e.length>1?H9(e.slice(1),e[0]):[]}function J9(e){const t=[];for(const r of e)t.push(...r);return t}function Al(e){return U({[j]:"Any"},e)}function Om(e,t){return U({[j]:"Array",type:"array",items:e},t)}function Y9(e){return U({[j]:"Argument",index:e})}function Bm(e,t){return U({[j]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function jt(e,t,r){return U({[j]:"Computed",target:e,parameters:t},r)}function X9(e,t){const{[t]:r,...n}=e;return n}function Xr(e,t){return t.reduce((r,n)=>X9(r,n),e)}function ft(e){return U({[j]:"Never",not:{}},e)}function ar(e){return U({[j]:"MappedResult",properties:e})}function Rm(e,t,r){return U({[j]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function Jl(e,t,r){return U({[j]:"Function",type:"Function",parameters:e,returns:t},r)}function K0(e,t){return U({[j]:"Union",anyOf:e},t)}function Q9(e){return e.some(t=>ui(t))}function Gb(e){return e.map(t=>ui(t)?eA(t):t)}function eA(e){return Xr(e,[Do])}function tA(e,t){return Q9(e)?mi(K0(Gb(e),t)):K0(Gb(e),t)}function ba(e,t){return e.length===1?U(e[0],t):e.length===0?ft(t):tA(e,t)}function lr(e,t){return e.length===0?ft(t):e.length===1?U(e[0],t):K0(e,t)}class Hb extends sr{}function rA(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Lm(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function po(e,t){return Lm(e,t,"(")}function El(e,t){return Lm(e,t,")")}function Vw(e,t){return Lm(e,t,"|")}function nA(e){if(!(po(e,0)&&El(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(po(e,r)&&(t+=1),El(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function oA(e){return e.slice(1,e.length-1)}function iA(e){let t=0;for(let r=0;r<e.length;r++)if(po(e,r)&&(t+=1),El(e,r)&&(t-=1),Vw(e,r)&&t===0)return!0;return!1}function sA(e){for(let t=0;t<e.length;t++)if(po(e,t))return!0;return!1}function aA(e){let[t,r]=[0,0];const n=[];for(let i=0;i<e.length;i++)if(po(e,i)&&(t+=1),El(e,i)&&(t-=1),Vw(e,i)&&t===0){const s=e.slice(r,i);s.length>0&&n.push(Xs(s)),r=i+1}const o=e.slice(r);return o.length>0&&n.push(Xs(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function lA(e){function t(o,i){if(!po(o,i))throw new Hb("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=i;a<o.length;a++)if(po(o,a)&&(s+=1),El(o,a)&&(s-=1),s===0)return[i,a];throw new Hb("TemplateLiteralParser: Unclosed group parens in expression")}function r(o,i){for(let s=i;s<o.length;s++)if(po(o,s))return[i,s];return[i,o.length]}const n=[];for(let o=0;o<e.length;o++)if(po(e,o)){const[i,s]=t(e,o),a=e.slice(i,s+1);n.push(Xs(a)),o=s}else{const[i,s]=r(e,o),a=e.slice(i,s);a.length>0&&n.push(Xs(a)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function Xs(e){return nA(e)?Xs(oA(e)):iA(e)?aA(e):sA(e)?lA(e):{type:"const",const:rA(e)}}function jm(e){return Xs(e.slice(1,e.length-1))}class uA extends sr{}function cA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function dA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function fA(e){return e.type==="const"&&e.const===".*"}function Cl(e){return cA(e)||fA(e)?!1:dA(e)?!0:e.type==="and"?e.expr.every(t=>Cl(t)):e.type==="or"?e.expr.every(t=>Cl(t)):e.type==="const"?!0:(()=>{throw new uA("Unknown expression type")})()}function hA(e){const t=jm(e.pattern);return Cl(t)}class mA extends sr{}function*Ww(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Ww(e.slice(1)))yield`${t}${r}`}function*gA(e){return yield*Ww(e.expr.map(t=>[...dd(t)]))}function*pA(e){for(const t of e.expr)yield*dd(t)}function*bA(e){return yield e.const}function*dd(e){return e.type==="and"?yield*gA(e):e.type==="or"?yield*pA(e):e.type==="const"?yield*bA(e):(()=>{throw new mA("Unknown expression")})()}function Kw(e){const t=jm(e.pattern);return Cl(t)?[...dd(t)]:[]}function Ct(e,t){return U({[j]:"Literal",const:e,type:typeof e},t)}function Gw(e){return U({[j]:"Boolean",type:"boolean"},e)}function _m(e){return U({[j]:"BigInt",type:"bigint"},e)}function ls(e){return U({[j]:"Number",type:"number"},e)}function Ki(e){return U({[j]:"String",type:"string"},e)}function*yA(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Gw():t==="number"?yield ls():t==="bigint"?yield _m():t==="string"?yield Ki():yield(()=>{const r=t.split("|").map(n=>Ct(n.trim()));return r.length===0?ft():r.length===1?r[0]:ba(r)})()}function*vA(e){if(e[1]!=="{"){const t=Ct("$"),r=G0(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=yA(e.slice(2,t)),n=G0(e.slice(t+1));return yield*[...r,...n]}yield Ct(e)}function*G0(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=Ct(e.slice(0,t)),n=vA(e.slice(t));return yield*[r,...n]}yield Ct(e)}function wA(e){return[...G0(e)]}class $A extends sr{}function kA(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Hw(e,t){return ns(e)?e.pattern.slice(1,e.pattern.length-1):Yt(e)?`(${e.anyOf.map(r=>Hw(r,t)).join("|")})`:pa(e)?`${t}${qu}`:ga(e)?`${t}${qu}`:td(e)?`${t}${qu}`:Gl(e)?`${t}${zw}`:ts(e)?`${t}${kA(e.const.toString())}`:Wl(e)?`${t}${z9}`:(()=>{throw new $A(`Unexpected Kind '${e[j]}'`)})()}function Zb(e){return`^${e.map(t=>Hw(t,"")).join("")}$`}function yc(e){const r=Kw(e).map(n=>Ct(n));return ba(r)}function Zw(e,t){const r=$t(e)?Zb(wA(e)):Zb(e);return U({[j]:"TemplateLiteral",type:"string",pattern:r},t)}function xA(e){return Kw(e).map(r=>r.toString())}function DA(e){const t=[];for(const r of e)t.push(...fi(r));return t}function AA(e){return[e.toString()]}function fi(e){return[...new Set(ns(e)?xA(e):Yt(e)?DA(e.anyOf):ts(e)?AA(e.const):pa(e)?["[number]"]:ga(e)?["[number]"]:[])]}function EA(e,t,r){const n={};for(const o of Object.getOwnPropertyNames(t))n[o]=fd(e,fi(t[o]),r);return n}function CA(e,t,r){return EA(e,t.properties,r)}function SA(e,t,r){const n=CA(e,t,r);return ar(n)}function Jw(e,t){return e.map(r=>Yw(r,t))}function MA(e){return e.filter(t=>!Kl(t))}function FA(e,t){return e5(MA(Jw(e,t)))}function TA(e){return e.some(t=>Kl(t))?[]:e}function NA(e,t){return ba(TA(Jw(e,t)))}function PA(e,t){return t in e?e[t]:t==="[number]"?ba(e):ft()}function IA(e,t){return t==="[number]"?e:ft()}function OA(e,t){return t in e?e[t]:ft()}function Yw(e,t){return bn(e)?FA(e.allOf,t):Yt(e)?NA(e.anyOf,t):os(e)?PA(e.items??[],t):da(e)?IA(e.items,t):jn(e)?OA(e.properties,t):ft()}function Um(e,t){return t.map(r=>Yw(e,r))}function Jb(e,t){return ba(Um(e,t))}function fd(e,t,r){if(Br(e)||Br(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!kr(e)||!kr(t))throw new sr(n);return jt("Index",[e,t])}return tn(t)?SA(e,t,r):rs(t)?jA(e,t,r):U(kr(t)?Jb(e,fi(t)):Jb(e,t),r)}function BA(e,t,r){return{[t]:fd(e,[t],Jr(r))}}function RA(e,t,r){return t.reduce((n,o)=>({...n,...BA(e,o,r)}),{})}function LA(e,t,r){return RA(e,t.keys,r)}function jA(e,t,r){const n=LA(e,t,r);return ar(n)}function zm(e,t){return U({[j]:"Iterator",type:"Iterator",items:e},t)}function _A(e){return globalThis.Object.keys(e).filter(t=>!ui(e[t]))}function UA(e,t){const r=_A(e),n=r.length>0?{[j]:"Object",type:"object",required:r,properties:e}:{[j]:"Object",type:"object",properties:e};return U(n,t)}var Jt=UA;function Xw(e,t){return U({[j]:"Promise",type:"Promise",item:e},t)}function zA(e){return U(Xr(e,[Vl]))}function qA(e){return U({...e,[Vl]:"Readonly"})}function VA(e,t){return t===!1?zA(e):qA(e)}function hi(e,t){const r=t??!0;return tn(e)?GA(e,r):VA(e,r)}function WA(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=hi(e[n],t);return r}function KA(e,t){return WA(e.properties,t)}function GA(e,t){const r=KA(e,t);return ar(r)}function ya(e,t){return U(e.length>0?{[j]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[j]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function Qw(e,t){return e in t?ln(e,t[e]):ar(t)}function HA(e){return{[e]:Ct(e)}}function ZA(e){const t={};for(const r of e)t[r]=Ct(r);return t}function JA(e,t){return W9(t,e)?HA(e):ZA(t)}function YA(e,t){const r=JA(e,t);return Qw(e,r)}function Oa(e,t){return t.map(r=>ln(e,r))}function XA(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=ln(e,t[n]);return r}function ln(e,t){const r={...t};return ui(t)?mi(ln(e,Xr(t,[Do]))):$m(t)?hi(ln(e,Xr(t,[Vl]))):tn(t)?Qw(e,t.properties):rs(t)?YA(e,t.keys):ha(t)?Rm(Oa(e,t.parameters),ln(e,t.returns),r):ma(t)?Jl(Oa(e,t.parameters),ln(e,t.returns),r):ed(t)?Bm(ln(e,t.items),r):rd(t)?zm(ln(e,t.items),r):bn(t)?gi(Oa(e,t.allOf),r):Yt(t)?lr(Oa(e,t.anyOf),r):os(t)?ya(Oa(e,t.items??[]),r):jn(t)?Jt(XA(e,t.properties),r):da(t)?Om(ln(e,t.items),r):nd(t)?Xw(ln(e,t.item),r):t}function QA(e,t){const r={};for(const n of e)r[n]=ln(n,t);return r}function eE(e,t,r){const n=kr(e)?fi(e):e,o=t({[j]:"MappedKey",keys:n}),i=QA(n,o);return Jt(i,r)}function tE(e){return U(Xr(e,[Do]))}function rE(e){return U({...e,[Do]:"Optional"})}function nE(e,t){return t===!1?tE(e):rE(e)}function mi(e,t){const r=t??!0;return tn(e)?sE(e,r):nE(e,r)}function oE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=mi(e[n],t);return r}function iE(e,t){return oE(e.properties,t)}function sE(e,t){const r=iE(e,t);return ar(r)}function H0(e,t={}){const r=e.every(o=>jn(o)),n=kr(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return U(t.unevaluatedProperties===!1||kr(t.unevaluatedProperties)||r?{...n,[j]:"Intersect",type:"object",allOf:e}:{...n,[j]:"Intersect",allOf:e},t)}function aE(e){return e.every(t=>ui(t))}function lE(e){return Xr(e,[Do])}function Yb(e){return e.map(t=>ui(t)?lE(t):t)}function uE(e,t){return aE(e)?mi(H0(Yb(e),t)):H0(Yb(e),t)}function e5(e,t={}){if(e.length===1)return U(e[0],t);if(e.length===0)return ft(t);if(e.some(r=>Ye(r)))throw new Error("Cannot intersect transform types");return uE(e,t)}function gi(e,t){if(e.length===1)return U(e[0],t);if(e.length===0)return ft(t);if(e.some(r=>Ye(r)))throw new Error("Cannot intersect transform types");return H0(e,t)}function va(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new sr("Ref: $ref must be a string");return U({[j]:"Ref",$ref:t},r)}function cE(e,t){return jt("Awaited",[jt(e,t)])}function dE(e){return jt("Awaited",[va(e)])}function fE(e){return gi(t5(e))}function hE(e){return lr(t5(e))}function mE(e){return hd(e)}function t5(e){return e.map(t=>hd(t))}function hd(e,t){return U(fa(e)?cE(e.target,e.parameters):bn(e)?fE(e.allOf):Yt(e)?hE(e.anyOf):nd(e)?mE(e.item):Br(e)?dE(e.$ref):e,t)}function r5(e){const t=[];for(const r of e)t.push(us(r));return t}function gE(e){const t=r5(e);return J9(t)}function pE(e){const t=r5(e);return Z9(t)}function bE(e){return e.map((t,r)=>r.toString())}function yE(e){return["[number]"]}function vE(e){return globalThis.Object.getOwnPropertyNames(e)}function wE(e){return Z0?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function us(e){return bn(e)?gE(e.allOf):Yt(e)?pE(e.anyOf):os(e)?bE(e.items??[]):da(e)?yE(e.items):jn(e)?vE(e.properties):od(e)?wE(e.patternProperties):[]}let Z0=!1;function Qs(e){Z0=!0;const t=us(e);return Z0=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function $E(e,t){return jt("KeyOf",[jt(e,t)])}function kE(e){return jt("KeyOf",[va(e)])}function xE(e,t){const r=us(e),n=DE(r),o=ba(n);return U(o,t)}function DE(e){return e.map(t=>t==="[number]"?ls():Ct(t))}function qm(e,t){return fa(e)?$E(e.target,e.parameters):Br(e)?kE(e.$ref):tn(e)?CE(e,t):xE(e,t)}function AE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=qm(e[n],Jr(t));return r}function EE(e,t){return AE(e.properties,t)}function CE(e,t){const r=EE(e,t);return ar(r)}function n5(e){const t=us(e),r=Um(e,t);return t.map((n,o)=>[t[o],r[o]])}function SE(e){const t=[];for(const r of e)t.push(...us(r));return K9(t)}function ME(e){return e.filter(t=>!Kl(t))}function FE(e,t){const r=[];for(const n of e)r.push(...Um(n,[t]));return ME(r)}function TE(e,t){const r={};for(const n of t)r[n]=e5(FE(e,n));return r}function NE(e,t){const r=SE(e),n=TE(e,r);return Jt(n,t)}function o5(e){return U({[j]:"Date",type:"Date"},e)}function i5(e){return U({[j]:"Null",type:"null"},e)}function s5(e){return U({[j]:"Symbol",type:"symbol"},e)}function a5(e){return U({[j]:"Undefined",type:"undefined"},e)}function l5(e){return U({[j]:"Uint8Array",type:"Uint8Array"},e)}function md(e){return U({[j]:"Unknown"},e)}function PE(e){return e.map(t=>Vm(t,!1))}function IE(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=hi(Vm(e[r],!1));return t}function xu(e,t){return t===!0?e:hi(e)}function Vm(e,t){return u9(e)||d9(e)?xu(Al(),t):Lr(e)?hi(ya(PE(e))):ql(e)?l5():bm(e)?o5():Mt(e)?xu(Jt(IE(e)),t):c9(e)?xu(Jl([],md()),t):Et(e)?a5():f9(e)?i5():h9(e)?s5():kw(e)?_m():Xn(e)||zl(e)||$t(e)?Ct(e):Jt({})}function OE(e,t){return U(Vm(e,!0),t)}function BE(e,t){return ha(e)?ya(e.parameters,t):ft(t)}function RE(e,t){if(Et(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(i=>isNaN(i)).map(i=>e[i]),o=[...new Set(r)].map(i=>Ct(i));return lr(o,{...t,[Qc]:"Enum"})}class LE extends sr{}var T;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(T||(T={}));function pn(e){return e===T.False?e:T.True}function wa(e){throw new LE(e)}function Ft(e){return di(e)||as(e)||xo(e)||In(e)||Nn(e)}function Tt(e,t){return di(t)?d5():as(t)?gd(e,t):xo(t)?Km(e,t):In(t)?g5():Nn(t)?Wm():wa("StructuralRight")}function Wm(e,t){return T.True}function jE(e,t){return as(t)?gd(e,t):xo(t)&&t.anyOf.some(r=>Nn(r)||In(r))?T.True:xo(t)?T.Union:In(t)||Nn(t)?T.True:T.Union}function _E(e,t){return In(e)?T.False:Nn(e)?T.Union:di(e)?T.True:T.False}function UE(e,t){return dt(t)&&pd(t)?T.True:Ft(t)?Tt(e,t):is(t)?pn(_e(e.items,t.items)):T.False}function zE(e,t){return Ft(t)?Tt(e,t):Em(t)?pn(_e(e.items,t.items)):T.False}function qE(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):id(t)?T.True:T.False}function u5(e,t){return Uw(e)||ss(e)?T.True:T.False}function VE(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):ss(t)?T.True:T.False}function WE(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):sd(t)?e.parameters.length>t.parameters.length?T.False:e.parameters.every((r,n)=>pn(_e(t.parameters[n],r))===T.True)?pn(_e(e.returns,t.returns)):T.False:T.False}function KE(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):ad(t)?T.True:T.False}function GE(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):ld(t)?e.parameters.length>t.parameters.length?T.False:e.parameters.every((r,n)=>pn(_e(t.parameters[n],r))===T.True)?pn(_e(e.returns,t.returns)):T.False:T.False}function c5(e,t){return ci(e)&&Xn(e.const)||Ir(e)||Ao(e)?T.True:T.False}function HE(e,t){return Ao(t)||Ir(t)?T.True:Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):T.False}function gd(e,t){return t.allOf.every(r=>_e(e,r)===T.True)?T.True:T.False}function ZE(e,t){return e.allOf.some(r=>_e(r,t)===T.True)?T.True:T.False}function JE(e,t){return Ft(t)?Tt(e,t):Cm(t)?pn(_e(e.items,t.items)):T.False}function YE(e,t){return ci(t)&&t.const===e.const?T.True:Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):Pn(t)?m5(e):Ir(t)?f5(e):Ao(t)?c5(e):ss(t)?u5(e):T.False}function d5(e,t){return T.False}function XE(e,t){return T.True}function Xb(e){let[t,r]=[e,0];for(;Zs(t);)t=t.not,r+=1;return r%2===0?t:md()}function QE(e,t){return Zs(e)?_e(Xb(e),t):Zs(t)?_e(e,Xb(t)):wa("Invalid fallthrough for Not")}function eC(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):Sm(t)?T.True:T.False}function f5(e,t){return _w(e)||Ir(e)||Ao(e)?T.True:T.False}function tC(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):Ao(t)||Ir(t)?T.True:T.False}function Rr(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function Qb(e){return pd(e)}function e1(e){return Rr(e,0)||Rr(e,1)&&"description"in e.properties&&xo(e.properties.description)&&e.properties.description.anyOf.length===2&&(Pn(e.properties.description.anyOf[0])&&Wi(e.properties.description.anyOf[1])||Pn(e.properties.description.anyOf[1])&&Wi(e.properties.description.anyOf[0]))}function Ef(e){return Rr(e,0)}function t1(e){return Rr(e,0)}function rC(e){return Rr(e,0)}function nC(e){return Rr(e,0)}function oC(e){return pd(e)}function iC(e){const t=ls();return Rr(e,0)||Rr(e,1)&&"length"in e.properties&&pn(_e(e.properties.length,t))===T.True}function sC(e){return Rr(e,0)}function pd(e){const t=ls();return Rr(e,0)||Rr(e,1)&&"length"in e.properties&&pn(_e(e.properties.length,t))===T.True}function aC(e){const t=Jl([Al()],Al());return Rr(e,0)||Rr(e,1)&&"then"in e.properties&&pn(_e(e.properties.then,t))===T.True}function h5(e,t){return _e(e,t)===T.False||bc(e)&&!bc(t)?T.False:T.True}function br(e,t){return In(e)?T.False:Nn(e)?T.Union:di(e)||jw(e)&&Qb(t)||_w(e)&&Ef(t)||Uw(e)&&t1(t)||xl(e)&&e1(t)||id(e)&&rC(t)||Pn(e)&&Qb(t)||xl(e)&&e1(t)||Ir(e)&&Ef(t)||Ao(e)&&Ef(t)||ss(e)&&t1(t)||Zl(e)&&oC(t)||ad(e)&&nC(t)||sd(e)&&sC(t)||ld(e)&&iC(t)?T.True:or(e)&&Pn(J0(e))?t[Qc]==="Record"?T.True:T.False:or(e)&&Ir(J0(e))&&Rr(t,0)?T.True:T.False}function lC(e,t){return Ft(t)?Tt(e,t):or(t)?yn(e,t):dt(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!bc(t.properties[r]))return T.False;if(bc(t.properties[r]))return T.True;if(h5(e.properties[r],t.properties[r])===T.False)return T.False}return T.True})():T.False}function uC(e,t){return Ft(t)?Tt(e,t):dt(t)&&aC(t)?T.True:Mm(t)?pn(_e(e.item,t.item)):T.False}function J0(e){return Js in e.patternProperties?ls():Ys in e.patternProperties?Ki():wa("Unknown record key pattern")}function Y0(e){return Js in e.patternProperties?e.patternProperties[Js]:Ys in e.patternProperties?e.patternProperties[Ys]:wa("Unable to get record value schema")}function yn(e,t){const[r,n]=[J0(t),Y0(t)];return jw(e)&&Ir(r)&&pn(_e(e,n))===T.True?T.True:Zl(e)&&Ir(r)||Pn(e)&&Ir(r)||is(e)&&Ir(r)?_e(e,n):dt(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(h5(n,e.properties[o])===T.False)return T.False;return T.True})():T.False}function cC(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?_e(Y0(e),Y0(t)):T.False}function dC(e,t){const r=kl(e)?Ki():e,n=kl(t)?Ki():t;return _e(r,n)}function m5(e,t){return ci(e)&&$t(e.const)||Pn(e)?T.True:T.False}function fC(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):Pn(t)?T.True:T.False}function hC(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):xl(t)?T.True:T.False}function mC(e,t){return Dl(e)?_e(yc(e),t):Dl(t)?_e(e,yc(t)):wa("Invalid fallthrough for TemplateLiteral")}function gC(e,t){return is(t)&&e.items!==void 0&&e.items.every(r=>_e(r,t.items)===T.True)}function pC(e,t){return di(e)?T.True:In(e)?T.False:Nn(e)?T.Union:T.False}function bC(e,t){return Ft(t)?Tt(e,t):dt(t)&&pd(t)||is(t)&&gC(e,t)?T.True:ud(t)?Et(e.items)&&!Et(t.items)||!Et(e.items)&&Et(t.items)?T.False:Et(e.items)&&!Et(t.items)||e.items.every((r,n)=>_e(r,t.items[n])===T.True)?T.True:T.False:T.False}function yC(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):Zl(t)?T.True:T.False}function vC(e,t){return Ft(t)?Tt(e,t):dt(t)?br(e,t):or(t)?yn(e,t):cd(t)?kC(e):Wi(t)?T.True:T.False}function Km(e,t){return t.anyOf.some(r=>_e(e,r)===T.True)?T.True:T.False}function wC(e,t){return e.anyOf.every(r=>_e(r,t)===T.True)?T.True:T.False}function g5(e,t){return T.True}function $C(e,t){return di(t)?d5():as(t)?gd(e,t):xo(t)?Km(e,t):Nn(t)?Wm():Pn(t)?m5(e):Ir(t)?f5(e):Ao(t)?c5(e):ss(t)?u5(e):is(t)?_E(e):ud(t)?pC(e):dt(t)?br(e,t):In(t)?T.True:T.False}function kC(e,t){return Wi(e)||Wi(e)?T.True:T.False}function xC(e,t){return as(t)?gd(e,t):xo(t)?Km(e,t):In(t)?g5():Nn(t)?Wm():dt(t)?br(e,t):cd(t)?T.True:T.False}function _e(e,t){return Dl(e)||Dl(t)?mC(e,t):kl(e)||kl(t)?dC(e,t):Zs(e)||Zs(t)?QE(e,t):Nn(e)?jE(e,t):is(e)?UE(e,t):id(e)?qE(e,t):ss(e)?VE(e,t):Em(e)?zE(e,t):sd(e)?WE(e,t):ad(e)?KE(e,t):ld(e)?GE(e,t):Ao(e)?HE(e,t):as(e)?ZE(e,t):Cm(e)?JE(e,t):ci(e)?YE(e,t):di(e)?XE():Sm(e)?eC(e,t):Ir(e)?tC(e,t):dt(e)?lC(e,t):or(e)?cC(e,t):Pn(e)?fC(e,t):xl(e)?hC(e,t):ud(e)?bC(e,t):Mm(e)?uC(e,t):Zl(e)?yC(e,t):Wi(e)?vC(e,t):xo(e)?wC(e,t):In(e)?$C(e,t):cd(e)?xC(e,t):wa(`Unknown left type operand '${e[j]}'`)}function Yl(e,t){return _e(e,t)}function DC(e,t,r,n,o){const i={};for(const s of globalThis.Object.getOwnPropertyNames(e))i[s]=Gm(e[s],t,r,n,Jr(o));return i}function AC(e,t,r,n,o){return DC(e.properties,t,r,n,o)}function EC(e,t,r,n,o){const i=AC(e,t,r,n,o);return ar(i)}function CC(e,t,r,n){const o=Yl(e,t);return o===T.Union?lr([r,n]):o===T.True?r:n}function Gm(e,t,r,n,o){return tn(e)?EC(e,t,r,n,o):rs(e)?U(TC(e,t,r,n,o)):U(CC(e,t,r,n),o)}function SC(e,t,r,n,o){return{[e]:Gm(Ct(e),t,r,n,Jr(o))}}function MC(e,t,r,n,o){return e.reduce((i,s)=>({...i,...SC(s,t,r,n,o)}),{})}function FC(e,t,r,n,o){return MC(e.keys,t,r,n,o)}function TC(e,t,r,n,o){const i=FC(e,t,r,n,o);return ar(i)}function NC(e){return e.allOf.every(t=>$a(t))}function PC(e){return e.anyOf.some(t=>$a(t))}function IC(e){return!$a(e.not)}function $a(e){return e[j]==="Intersect"?NC(e):e[j]==="Union"?PC(e):e[j]==="Not"?IC(e):e[j]==="Undefined"}function OC(e,t){return Hm(yc(e),t)}function BC(e,t){const r=e.filter(n=>Yl(n,t)===T.False);return r.length===1?r[0]:lr(r)}function Hm(e,t,r={}){return ns(e)?U(OC(e,t),r):tn(e)?U(jC(e,t),r):U(Yt(e)?BC(e.anyOf,t):Yl(e,t)!==T.False?ft():e,r)}function RC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Hm(e[n],t);return r}function LC(e,t){return RC(e.properties,t)}function jC(e,t){const r=LC(e,t);return ar(r)}function _C(e,t){return Zm(yc(e),t)}function UC(e,t){const r=e.filter(n=>Yl(n,t)!==T.False);return r.length===1?r[0]:lr(r)}function Zm(e,t,r){return ns(e)?U(_C(e,t),r):tn(e)?U(VC(e,t),r):U(Yt(e)?UC(e.anyOf,t):Yl(e,t)!==T.False?e:ft(),r)}function zC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Zm(e[n],t);return r}function qC(e,t){return zC(e.properties,t)}function VC(e,t){const r=qC(e,t);return ar(r)}function WC(e,t){return ha(e)?U(e.returns,t):ft(t)}function p5(e){return hi(mi(e))}function cs(e,t,r){return U({[j]:"Record",type:"object",patternProperties:{[e]:t}},r)}function Jm(e,t,r){const n={};for(const o of e)n[o]=t;return Jt(n,{...r,[Qc]:"Record"})}function KC(e,t,r){return hA(e)?Jm(fi(e),t,r):cs(e.pattern,t,r)}function GC(e,t,r){return Jm(fi(lr(e)),t,r)}function HC(e,t,r){return Jm([e.toString()],t,r)}function ZC(e,t,r){return cs(e.source,t,r)}function JC(e,t,r){const n=Et(e.pattern)?Ys:e.pattern;return cs(n,t,r)}function YC(e,t,r){return cs(Ys,t,r)}function XC(e,t,r){return cs(V9,t,r)}function QC(e,t,r){return Jt({true:t,false:t},r)}function e7(e,t,r){return cs(Js,t,r)}function t7(e,t,r){return cs(Js,t,r)}function b5(e,t,r={}){return Yt(e)?GC(e.anyOf,t,r):ns(e)?KC(e,t,r):ts(e)?HC(e.const,t,r):Wl(e)?QC(e,t,r):ga(e)?e7(e,t,r):pa(e)?t7(e,t,r):Iw(e)?ZC(e,t,r):Gl(e)?JC(e,t,r):Tw(e)?YC(e,t,r):Kl(e)?XC(e,t,r):ft(r)}function Ym(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function r7(e){const t=Ym(e);return t===Ys?Ki():t===Js?ls():Ki({pattern:t})}function y5(e){return e.patternProperties[Ym(e)]}function n7(e,t){return t.parameters=Xl(e,t.parameters),t.returns=On(e,t.returns),t}function o7(e,t){return t.parameters=Xl(e,t.parameters),t.returns=On(e,t.returns),t}function i7(e,t){return t.allOf=Xl(e,t.allOf),t}function s7(e,t){return t.anyOf=Xl(e,t.anyOf),t}function a7(e,t){return Et(t.items)||(t.items=Xl(e,t.items)),t}function l7(e,t){return t.items=On(e,t.items),t}function u7(e,t){return t.items=On(e,t.items),t}function c7(e,t){return t.items=On(e,t.items),t}function d7(e,t){return t.item=On(e,t.item),t}function f7(e,t){const r=p7(e,t.properties);return{...t,...Jt(r)}}function h7(e,t){const r=On(e,r7(t)),n=On(e,y5(t)),o=b5(r,n);return{...t,...o}}function m7(e,t){return t.index in e?e[t.index]:md()}function g7(e,t){const r=$m(t),n=ui(t),o=On(e,t);return r&&n?p5(o):r&&!n?hi(o):!r&&n?mi(o):o}function p7(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:g7(e,t[n])}),{})}function Xl(e,t){return t.map(r=>On(e,r))}function On(e,t){return ha(t)?n7(e,t):ma(t)?o7(e,t):bn(t)?i7(e,t):Yt(t)?s7(e,t):os(t)?a7(e,t):da(t)?l7(e,t):ed(t)?u7(e,t):rd(t)?c7(e,t):nd(t)?d7(e,t):jn(t)?f7(e,t):od(t)?h7(e,t):Nw(t)?m7(e,t):t}function b7(e,t){return On(t,ym(e))}function y7(e){return U({[j]:"Integer",type:"integer"},e)}function v7(e,t,r){return{[e]:ka(Ct(e),t,Jr(r))}}function w7(e,t,r){return e.reduce((o,i)=>({...o,...v7(i,t,r)}),{})}function $7(e,t,r){return w7(e.keys,t,r)}function k7(e,t,r){const n=$7(e,t,r);return ar(n)}function x7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function D7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function A7(e){return e.toUpperCase()}function E7(e){return e.toLowerCase()}function C7(e,t,r){const n=jm(e.pattern);if(!Cl(n))return{...e,pattern:v5(e.pattern,t)};const s=[...dd(n)].map(c=>Ct(c)),a=w5(s,t),l=lr(a);return Zw([l],r)}function v5(e,t){return typeof e=="string"?t==="Uncapitalize"?x7(e):t==="Capitalize"?D7(e):t==="Uppercase"?A7(e):t==="Lowercase"?E7(e):e:e.toString()}function w5(e,t){return e.map(r=>ka(r,t))}function ka(e,t,r={}){return rs(e)?k7(e,t,r):ns(e)?C7(e,t,r):Yt(e)?lr(w5(e.anyOf,t),r):ts(e)?Ct(v5(e.const,t),r):U(e,r)}function S7(e,t={}){return ka(e,"Capitalize",t)}function M7(e,t={}){return ka(e,"Lowercase",t)}function F7(e,t={}){return ka(e,"Uncapitalize",t)}function T7(e,t={}){return ka(e,"Uppercase",t)}function N7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=bd(e[o],t,Jr(r));return n}function P7(e,t,r){return N7(e.properties,t,r)}function I7(e,t,r){const n=P7(e,t,r);return ar(n)}function O7(e,t){return e.map(r=>Xm(r,t))}function B7(e,t){return e.map(r=>Xm(r,t))}function R7(e,t){const{[t]:r,...n}=e;return n}function L7(e,t){return t.reduce((r,n)=>R7(r,n),e)}function j7(e,t,r){const n=Xr(e,[Pr,"$id","required","properties"]),o=L7(r,t);return Jt(o,n)}function _7(e){const t=e.reduce((r,n)=>Pw(n)?[...r,Ct(n)]:r,[]);return lr(t)}function Xm(e,t){return bn(e)?gi(O7(e.allOf,t)):Yt(e)?lr(B7(e.anyOf,t)):jn(e)?j7(e,t,e.properties):Jt({})}function bd(e,t,r){const n=Lr(t)?_7(t):t,o=kr(t)?fi(t):t,i=Br(e),s=Br(t);return tn(e)?I7(e,o,r):rs(t)?V7(e,t,r):i&&s?jt("Omit",[e,n],r):!i&&s?jt("Omit",[e,n],r):i&&!s?jt("Omit",[e,n],r):U({...Xm(e,o),...r})}function U7(e,t,r){return{[t]:bd(e,[t],Jr(r))}}function z7(e,t,r){return t.reduce((n,o)=>({...n,...U7(e,o,r)}),{})}function q7(e,t,r){return z7(e,t.keys,r)}function V7(e,t,r){const n=q7(e,t,r);return ar(n)}function W7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=yd(e[o],t,Jr(r));return n}function K7(e,t,r){return W7(e.properties,t,r)}function G7(e,t,r){const n=K7(e,t,r);return ar(n)}function H7(e,t){return e.map(r=>Qm(r,t))}function Z7(e,t){return e.map(r=>Qm(r,t))}function J7(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function Y7(e,t,r){const n=Xr(e,[Pr,"$id","required","properties"]),o=J7(r,t);return Jt(o,n)}function X7(e){const t=e.reduce((r,n)=>Pw(n)?[...r,Ct(n)]:r,[]);return lr(t)}function Qm(e,t){return bn(e)?gi(H7(e.allOf,t)):Yt(e)?lr(Z7(e.anyOf,t)):jn(e)?Y7(e,t,e.properties):Jt({})}function yd(e,t,r){const n=Lr(t)?X7(t):t,o=kr(t)?fi(t):t,i=Br(e),s=Br(t);return tn(e)?G7(e,o,r):rs(t)?rS(e,t,r):i&&s?jt("Pick",[e,n],r):!i&&s?jt("Pick",[e,n],r):i&&!s?jt("Pick",[e,n],r):U({...Qm(e,o),...r})}function Q7(e,t,r){return{[t]:yd(e,[t],Jr(r))}}function eS(e,t,r){return t.reduce((n,o)=>({...n,...Q7(e,o,r)}),{})}function tS(e,t,r){return eS(e,t.keys,r)}function rS(e,t,r){const n=tS(e,t,r);return ar(n)}function nS(e,t){return jt("Partial",[jt(e,t)])}function oS(e){return jt("Partial",[va(e)])}function iS(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=mi(e[r]);return t}function sS(e,t){const r=Xr(e,[Pr,"$id","required","properties"]),n=iS(t);return Jt(n,r)}function r1(e){return e.map(t=>$5(t))}function $5(e){return fa(e)?nS(e.target,e.parameters):Br(e)?oS(e.$ref):bn(e)?gi(r1(e.allOf)):Yt(e)?lr(r1(e.anyOf)):jn(e)?sS(e,e.properties):td(e)||Wl(e)||ga(e)||ts(e)||km(e)||pa(e)||Gl(e)||xm(e)||Hl(e)?e:Jt({})}function eg(e,t){return tn(e)?uS(e,t):U({...$5(e),...t})}function aS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=eg(e[n],Jr(t));return r}function lS(e,t){return aS(e.properties,t)}function uS(e,t){const r=lS(e,t);return ar(r)}function cS(e,t){return jt("Required",[jt(e,t)])}function dS(e){return jt("Required",[va(e)])}function fS(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Xr(e[r],[Do]);return t}function hS(e,t){const r=Xr(e,[Pr,"$id","required","properties"]),n=fS(t);return Jt(n,r)}function n1(e){return e.map(t=>k5(t))}function k5(e){return fa(e)?cS(e.target,e.parameters):Br(e)?dS(e.$ref):bn(e)?gi(n1(e.allOf)):Yt(e)?lr(n1(e.anyOf)):jn(e)?hS(e,e.properties):td(e)||Wl(e)||ga(e)||ts(e)||km(e)||pa(e)||Gl(e)||xm(e)||Hl(e)?e:Jt({})}function tg(e,t){return tn(e)?pS(e,t):U({...k5(e),...t})}function mS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=tg(e[n],t);return r}function gS(e,t){return mS(e.properties,t)}function pS(e,t){const r=gS(e,t);return ar(r)}function bS(e,t){return t.map(r=>Br(r)?rg(e,r.$ref):Qr(e,r))}function rg(e,t){return t in e?Br(e[t])?rg(e,e[t].$ref):Qr(e,e[t]):ft()}function yS(e){return hd(e[0])}function vS(e){return fd(e[0],e[1])}function wS(e){return qm(e[0])}function $S(e){return eg(e[0])}function kS(e){return bd(e[0],e[1])}function xS(e){return yd(e[0],e[1])}function DS(e){return tg(e[0])}function AS(e,t,r){const n=bS(e,r);return t==="Awaited"?yS(n):t==="Index"?vS(n):t==="KeyOf"?wS(n):t==="Partial"?$S(n):t==="Omit"?kS(n):t==="Pick"?xS(n):t==="Required"?DS(n):ft()}function ES(e,t){return Om(Qr(e,t))}function CS(e,t){return Bm(Qr(e,t))}function SS(e,t,r){return Rm(Ql(e,t),Qr(e,r))}function MS(e,t,r){return Jl(Ql(e,t),Qr(e,r))}function FS(e,t){return gi(Ql(e,t))}function TS(e,t){return zm(Qr(e,t))}function NS(e,t){return Jt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Qr(e,t[n])}),{}))}function PS(e,t){const[r,n]=[Qr(e,y5(t)),Ym(t)],o=ym(t);return o.patternProperties[n]=r,o}function IS(e,t){return Br(t)?{...rg(e,t.$ref),[Pr]:t[Pr]}:t}function OS(e,t){return ya(Ql(e,t))}function BS(e,t){return lr(Ql(e,t))}function Ql(e,t){return t.map(r=>Qr(e,r))}function Qr(e,t){return ui(t)?U(Qr(e,Xr(t,[Do])),t):$m(t)?U(Qr(e,Xr(t,[Vl])),t):Ye(t)?U(IS(e,t),t):da(t)?U(ES(e,t.items),t):ed(t)?U(CS(e,t.items),t):fa(t)?U(AS(e,t.target,t.parameters)):ha(t)?U(SS(e,t.parameters,t.returns),t):ma(t)?U(MS(e,t.parameters,t.returns),t):bn(t)?U(FS(e,t.allOf),t):rd(t)?U(TS(e,t.items),t):jn(t)?U(NS(e,t.properties),t):od(t)?U(PS(e,t)):os(t)?U(OS(e,t.items||[]),t):Yt(t)?U(BS(e,t.anyOf),t):t}function RS(e,t){return t in e?Qr(e,e[t]):ft()}function LS(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:RS(e,r)}),{})}class jS{constructor(t){const r=LS(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:U(this.$defs[t],r)};return U({[j]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function _S(e){return new jS(e)}function US(e,t){return U({[j]:"Not",not:e},t)}function zS(e,t){return ma(e)?ya(e.parameters,t):ft()}let qS=0;function VS(e,t={}){Et(t.$id)&&(t.$id=`T${qS++}`);const r=ym(e({[j]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,U({[Qc]:"Recursive",...r},t)}function WS(e,t){const r=$t(e)?new globalThis.RegExp(e):e;return U({[j]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function KS(e){return bn(e)?e.allOf:Yt(e)?e.anyOf:os(e)?e.items??[]:[]}function GS(e){return KS(e)}function HS(e,t){return ma(e)?U(e.returns,t):ft(t)}class ZS{constructor(t){this.schema=t}Decode(t){return new JS(this.schema,t)}}class JS{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const i={Encode:s=>r[Pr].Encode(t(s)),Decode:s=>this.decode(r[Pr].Decode(s))};return{...r,[Pr]:i}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Pr]:n}}Encode(t){return Ye(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function YS(e){return new ZS(e)}function XS(e={}){return U({[j]:e[j]??"Unsafe"},e)}function QS(e){return U({[j]:"Void",type:"void"},e)}const eM=Object.freeze(Object.defineProperty({__proto__:null,Any:Al,Argument:Y9,Array:Om,AsyncIterator:Bm,Awaited:hd,BigInt:_m,Boolean:Gw,Capitalize:S7,Composite:NE,Const:OE,Constructor:Rm,ConstructorParameters:BE,Date:o5,Enum:RE,Exclude:Hm,Extends:Gm,Extract:Zm,Function:Jl,Index:fd,InstanceType:WC,Instantiate:b7,Integer:y7,Intersect:gi,Iterator:zm,KeyOf:qm,Literal:Ct,Lowercase:M7,Mapped:eE,Module:_S,Never:ft,Not:US,Null:i5,Number:ls,Object:Jt,Omit:bd,Optional:mi,Parameters:zS,Partial:eg,Pick:yd,Promise:Xw,Readonly:hi,ReadonlyOptional:p5,Record:b5,Recursive:VS,Ref:va,RegExp:WS,Required:tg,Rest:GS,ReturnType:HS,String:Ki,Symbol:s5,TemplateLiteral:Zw,Transform:YS,Tuple:ya,Uint8Array:l5,Uncapitalize:F7,Undefined:a5,Union:lr,Unknown:md,Unsafe:XS,Uppercase:T7,Void:QS},Symbol.toStringTag,{value:"Module"})),He=eM;function x5(e){switch(e.errorType){case M.ArrayContains:return"Expected array to contain at least one matching value";case M.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case M.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case M.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case M.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case M.ArrayUniqueItems:return"Expected array elements to be unique";case M.Array:return"Expected array";case M.AsyncIterator:return"Expected AsyncIterator";case M.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case M.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case M.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case M.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case M.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case M.BigInt:return"Expected bigint";case M.Boolean:return"Expected boolean";case M.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case M.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case M.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case M.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case M.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case M.Date:return"Expected Date";case M.Function:return"Expected function";case M.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case M.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case M.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case M.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case M.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case M.Integer:return"Expected integer";case M.IntersectUnevaluatedProperties:return"Unexpected property";case M.Intersect:return"Expected all values to match";case M.Iterator:return"Expected Iterator";case M.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case M.Never:return"Never";case M.Not:return"Value should not match";case M.Null:return"Expected null";case M.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case M.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case M.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case M.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case M.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case M.Number:return"Expected number";case M.Object:return"Expected object";case M.ObjectAdditionalProperties:return"Unexpected property";case M.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case M.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case M.ObjectRequiredProperty:return"Expected required property";case M.Promise:return"Expected Promise";case M.RegExp:return"Expected string to match regular expression";case M.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case M.StringFormat:return`Expected string to match '${e.schema.format}' format`;case M.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case M.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case M.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case M.String:return"Expected string";case M.Symbol:return"Expected symbol";case M.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case M.Tuple:return"Expected tuple";case M.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case M.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case M.Uint8Array:return"Expected Uint8Array";case M.Undefined:return"Expected undefined";case M.Union:return"Expected union value";case M.Void:return"Expected void";case M.Kind:return`Expected kind '${e.schema[j]}'`;default:return"Unknown error type"}}let D5=x5;function tM(e){D5=e}function rM(){return D5}class nM extends sr{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function oM(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new nM(e);return vn(r,t)}function vd(e,t){return!Gr(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function vn(e,t){return e[j]==="This"||e[j]==="Ref"?oM(e,t):e}class iM extends sr{constructor(t){super("Unable to hash value"),this.value=t}}var en;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(en||(en={}));let Cs=BigInt("14695981039346656037");const[sM,aM]=[BigInt("1099511628211"),BigInt("18446744073709551616")],lM=Array.from({length:256}).map((e,t)=>BigInt(t)),A5=new Float64Array(1),E5=new DataView(A5.buffer),C5=new Uint8Array(A5.buffer);function*uM(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function cM(e){gr(en.Array);for(const t of e)ea(t)}function dM(e){gr(en.Boolean),gr(e?1:0)}function fM(e){gr(en.BigInt),E5.setBigInt64(0,e);for(const t of C5)gr(t)}function hM(e){gr(en.Date),ea(e.getTime())}function mM(e){gr(en.Null)}function gM(e){gr(en.Number),E5.setFloat64(0,e);for(const t of C5)gr(t)}function pM(e){gr(en.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())ea(t),ea(e[t])}function bM(e){gr(en.String);for(let t=0;t<e.length;t++)for(const r of uM(e.charCodeAt(t)))gr(r)}function yM(e){gr(en.Symbol),ea(e.description)}function vM(e){gr(en.Uint8Array);for(let t=0;t<e.length;t++)gr(e[t])}function wM(e){return gr(en.Undefined)}function ea(e){if(Yr(e))return cM(e);if(Yc(e))return dM(e);if(co(e))return fM(e);if(vm(e))return hM(e);if(Jc(e))return mM();if(be(e))return gM(e);if(Qn(e))return pM(e);if(Gr(e))return bM(e);if(Xc(e))return yM(e);if(wm(e))return vM(e);if(li(e))return wM();throw new iM(e)}function gr(e){Cs=Cs^lM[e],Cs=Cs*sM%aM}function ng(e){return Cs=BigInt("14695981039346656037"),ea(e),Cs}class $M extends sr{constructor(t){super("Unknown type"),this.schema=t}}function kM(e){return e[j]==="Any"||e[j]==="Unknown"}function xe(e){return e!==void 0}function xM(e,t,r){return!0}function DM(e,t,r){return!0}function AM(e,t,r){if(!Yr(r)||xe(e.minItems)&&!(r.length>=e.minItems)||xe(e.maxItems)&&!(r.length<=e.maxItems))return!1;for(const i of r)if(!Gt(e.items,t,i))return!1;if(e.uniqueItems===!0&&!(function(){const i=new Set;for(const s of r){const a=ng(s);if(i.has(a))return!1;i.add(a)}return!0})())return!1;if(!(xe(e.contains)||be(e.minContains)||be(e.maxContains)))return!0;const n=xe(e.contains)?e.contains:ft(),o=r.reduce((i,s)=>Gt(n,t,s)?i+1:i,0);return!(o===0||be(e.minContains)&&o<e.minContains||be(e.maxContains)&&o>e.maxContains)}function EM(e,t,r){return Dw(r)}function CM(e,t,r){return!(!co(r)||xe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||xe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||xe(e.maximum)&&!(r<=e.maximum)||xe(e.minimum)&&!(r>=e.minimum)||xe(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function SM(e,t,r){return Yc(r)}function MM(e,t,r){return Gt(e.returns,t,r.prototype)}function FM(e,t,r){return!(!vm(r)||xe(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||xe(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||xe(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||xe(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||xe(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function TM(e,t,r){return Mw(r)}function NM(e,t,r){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return Gt(o,[...t,...n],r)}function PM(e,t,r){return!(!Sw(r)||xe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||xe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||xe(e.maximum)&&!(r<=e.maximum)||xe(e.minimum)&&!(r>=e.minimum)||xe(e.multipleOf)&&r%e.multipleOf!==0)}function IM(e,t,r){const n=e.allOf.every(o=>Gt(o,t,r));if(e.unevaluatedProperties===!1){const o=new RegExp(Qs(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s));return n&&i}else if(kr(e.unevaluatedProperties)){const o=new RegExp(Qs(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s)||Gt(e.unevaluatedProperties,t,r[s]));return n&&i}else return n}function OM(e,t,r){return Aw(r)}function BM(e,t,r){return r===e.const}function RM(e,t,r){return!1}function LM(e,t,r){return!Gt(e.not,t,r)}function jM(e,t,r){return Jc(r)}function _M(e,t,r){return!(!wt.IsNumberLike(r)||xe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||xe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||xe(e.minimum)&&!(r>=e.minimum)||xe(e.maximum)&&!(r<=e.maximum)||xe(e.multipleOf)&&r%e.multipleOf!==0)}function UM(e,t,r){if(!wt.IsObjectLike(r)||xe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||xe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const i=e.properties[o];if(e.required&&e.required.includes(o)){if(!Gt(i,t,r[o])||($a(i)||kM(i))&&!(o in r))return!1}else if(wt.IsExactOptionalProperty(r,o)&&!Gt(i,t,r[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(i=>n.includes(i))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(i=>n.includes(i)||Gt(e.additionalProperties,t,r[i])):!0}function zM(e,t,r){return Ew(r)}function qM(e,t,r){if(!wt.IsRecordLike(r)||xe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||xe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],i=new RegExp(n),s=Object.entries(r).every(([c,d])=>i.test(c)?Gt(o,t,d):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([c,d])=>i.test(c)?!0:Gt(e.additionalProperties,t,d)):!0,l=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(c=>i.test(c)):!0;return s&&a&&l}function VM(e,t,r){return Gt(vn(e,t),t,r)}function WM(e,t,r){const n=new RegExp(e.source,e.flags);return xe(e.minLength)&&!(r.length>=e.minLength)||xe(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function KM(e,t,r){return!Gr(r)||xe(e.minLength)&&!(r.length>=e.minLength)||xe(e.maxLength)&&!(r.length<=e.maxLength)||xe(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:xe(e.format)?Fm(e.format)?Tm(e.format)(r):!1:!0}function GM(e,t,r){return Xc(r)}function HM(e,t,r){return Gr(r)&&new RegExp(e.pattern).test(r)}function ZM(e,t,r){return Gt(vn(e,t),t,r)}function JM(e,t,r){if(!Yr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Gt(e.items[n],t,r[n]))return!1;return!0}function YM(e,t,r){return li(r)}function XM(e,t,r){return e.anyOf.some(n=>Gt(n,t,r))}function QM(e,t,r){return!(!wm(r)||xe(e.maxByteLength)&&!(r.length<=e.maxByteLength)||xe(e.minByteLength)&&!(r.length>=e.minByteLength))}function eF(e,t,r){return!0}function tF(e,t,r){return wt.IsVoidLike(r)}function rF(e,t,r){return ri(e[j])?Im(e[j])(e,r):!1}function Gt(e,t,r){const n=xe(e.$id)?vd(e,t):t,o=e;switch(o[j]){case"Any":return xM();case"Argument":return DM();case"Array":return AM(o,n,r);case"AsyncIterator":return EM(o,n,r);case"BigInt":return CM(o,n,r);case"Boolean":return SM(o,n,r);case"Constructor":return MM(o,n,r);case"Date":return FM(o,n,r);case"Function":return TM(o,n,r);case"Import":return NM(o,n,r);case"Integer":return PM(o,n,r);case"Intersect":return IM(o,n,r);case"Iterator":return OM(o,n,r);case"Literal":return BM(o,n,r);case"Never":return RM();case"Not":return LM(o,n,r);case"Null":return jM(o,n,r);case"Number":return _M(o,n,r);case"Object":return UM(o,n,r);case"Promise":return zM(o,n,r);case"Record":return qM(o,n,r);case"Ref":return VM(o,n,r);case"RegExp":return WM(o,n,r);case"String":return KM(o,n,r);case"Symbol":return GM(o,n,r);case"TemplateLiteral":return HM(o,n,r);case"This":return ZM(o,n,r);case"Tuple":return JM(o,n,r);case"Undefined":return YM(o,n,r);case"Union":return XM(o,n,r);case"Uint8Array":return QM(o,n,r);case"Unknown":return eF();case"Void":return tF(o,n,r);default:if(!ri(o[j]))throw new $M(o);return rF(o,n,r)}}function vc(...e){return e.length===3?Gt(e[0],e[1],e[2]):Gt(e[0],[],e[1])}var M;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(M||(M={}));class nF extends sr{constructor(t){super("Unknown type"),this.schema=t}}function so(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function $e(e){return e!==void 0}class S5{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function q(e,t,r,n,o=[]){return{type:e,schema:t,path:r,value:n,message:rM()({errorType:e,path:r,schema:t,value:n,errors:o}),errors:o}}function*oF(e,t,r,n){}function*iF(e,t,r,n){}function*sF(e,t,r,n){if(!Yr(n))return yield q(M.Array,e,r,n);$e(e.minItems)&&!(n.length>=e.minItems)&&(yield q(M.ArrayMinItems,e,r,n)),$e(e.maxItems)&&!(n.length<=e.maxItems)&&(yield q(M.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*Ht(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const l=ng(a);if(s.has(l))return!1;s.add(l)}return!0})()&&(yield q(M.ArrayUniqueItems,e,r,n)),!($e(e.contains)||$e(e.minContains)||$e(e.maxContains)))return;const o=$e(e.contains)?e.contains:ft(),i=n.reduce((s,a,l)=>Ht(o,t,`${r}${l}`,a).next().done===!0?s+1:s,0);i===0&&(yield q(M.ArrayContains,e,r,n)),be(e.minContains)&&i<e.minContains&&(yield q(M.ArrayMinContains,e,r,n)),be(e.maxContains)&&i>e.maxContains&&(yield q(M.ArrayMaxContains,e,r,n))}function*aF(e,t,r,n){Dw(n)||(yield q(M.AsyncIterator,e,r,n))}function*lF(e,t,r,n){if(!co(n))return yield q(M.BigInt,e,r,n);$e(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield q(M.BigIntExclusiveMaximum,e,r,n)),$e(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield q(M.BigIntExclusiveMinimum,e,r,n)),$e(e.maximum)&&!(n<=e.maximum)&&(yield q(M.BigIntMaximum,e,r,n)),$e(e.minimum)&&!(n>=e.minimum)&&(yield q(M.BigIntMinimum,e,r,n)),$e(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield q(M.BigIntMultipleOf,e,r,n))}function*uF(e,t,r,n){Yc(n)||(yield q(M.Boolean,e,r,n))}function*cF(e,t,r,n){yield*Ht(e.returns,t,r,n.prototype)}function*dF(e,t,r,n){if(!vm(n))return yield q(M.Date,e,r,n);$e(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield q(M.DateExclusiveMaximumTimestamp,e,r,n)),$e(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield q(M.DateExclusiveMinimumTimestamp,e,r,n)),$e(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield q(M.DateMaximumTimestamp,e,r,n)),$e(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield q(M.DateMinimumTimestamp,e,r,n)),$e(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield q(M.DateMultipleOfTimestamp,e,r,n))}function*fF(e,t,r,n){Mw(n)||(yield q(M.Function,e,r,n))}function*hF(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];yield*Ht(i,[...t,...o],r,n)}function*mF(e,t,r,n){if(!Sw(n))return yield q(M.Integer,e,r,n);$e(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield q(M.IntegerExclusiveMaximum,e,r,n)),$e(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield q(M.IntegerExclusiveMinimum,e,r,n)),$e(e.maximum)&&!(n<=e.maximum)&&(yield q(M.IntegerMaximum,e,r,n)),$e(e.minimum)&&!(n>=e.minimum)&&(yield q(M.IntegerMinimum,e,r,n)),$e(e.multipleOf)&&n%e.multipleOf!==0&&(yield q(M.IntegerMultipleOf,e,r,n))}function*gF(e,t,r,n){let o=!1;for(const i of e.allOf)for(const s of Ht(i,t,r,n))o=!0,yield s;if(o)return yield q(M.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const i=new RegExp(Qs(e));for(const s of Object.getOwnPropertyNames(n))i.test(s)||(yield q(M.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const i=new RegExp(Qs(e));for(const s of Object.getOwnPropertyNames(n))if(!i.test(s)){const a=Ht(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*pF(e,t,r,n){Aw(n)||(yield q(M.Iterator,e,r,n))}function*bF(e,t,r,n){n!==e.const&&(yield q(M.Literal,e,r,n))}function*yF(e,t,r,n){yield q(M.Never,e,r,n)}function*vF(e,t,r,n){Ht(e.not,t,r,n).next().done===!0&&(yield q(M.Not,e,r,n))}function*wF(e,t,r,n){Jc(n)||(yield q(M.Null,e,r,n))}function*$F(e,t,r,n){if(!wt.IsNumberLike(n))return yield q(M.Number,e,r,n);$e(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield q(M.NumberExclusiveMaximum,e,r,n)),$e(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield q(M.NumberExclusiveMinimum,e,r,n)),$e(e.maximum)&&!(n<=e.maximum)&&(yield q(M.NumberMaximum,e,r,n)),$e(e.minimum)&&!(n>=e.minimum)&&(yield q(M.NumberMinimum,e,r,n)),$e(e.multipleOf)&&n%e.multipleOf!==0&&(yield q(M.NumberMultipleOf,e,r,n))}function*kF(e,t,r,n){if(!wt.IsObjectLike(n))return yield q(M.Object,e,r,n);$e(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield q(M.ObjectMinProperties,e,r,n)),$e(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield q(M.ObjectMaxProperties,e,r,n));const o=Array.isArray(e.required)?e.required:[],i=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of o)s.includes(a)||(yield q(M.ObjectRequiredProperty,e.properties[a],`${r}/${so(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)i.includes(a)||(yield q(M.ObjectAdditionalProperties,e,`${r}/${so(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)i.includes(a)||(yield*Ht(e.additionalProperties,t,`${r}/${so(a)}`,n[a]));for(const a of i){const l=e.properties[a];e.required&&e.required.includes(a)?(yield*Ht(l,t,`${r}/${so(a)}`,n[a]),$a(e)&&!(a in n)&&(yield q(M.ObjectRequiredProperty,l,`${r}/${so(a)}`,void 0))):wt.IsExactOptionalProperty(n,a)&&(yield*Ht(l,t,`${r}/${so(a)}`,n[a]))}}function*xF(e,t,r,n){Ew(n)||(yield q(M.Promise,e,r,n))}function*DF(e,t,r,n){if(!wt.IsRecordLike(n))return yield q(M.Object,e,r,n);$e(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield q(M.ObjectMinProperties,e,r,n)),$e(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield q(M.ObjectMaxProperties,e,r,n));const[o,i]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[a,l]of Object.entries(n))s.test(a)&&(yield*Ht(i,t,`${r}/${so(a)}`,l));if(typeof e.additionalProperties=="object")for(const[a,l]of Object.entries(n))s.test(a)||(yield*Ht(e.additionalProperties,t,`${r}/${so(a)}`,l));if(e.additionalProperties===!1){for(const[a,l]of Object.entries(n))if(!s.test(a))return yield q(M.ObjectAdditionalProperties,e,`${r}/${so(a)}`,l)}}function*AF(e,t,r,n){yield*Ht(vn(e,t),t,r,n)}function*EF(e,t,r,n){if(!Gr(n))return yield q(M.String,e,r,n);if($e(e.minLength)&&!(n.length>=e.minLength)&&(yield q(M.StringMinLength,e,r,n)),$e(e.maxLength)&&!(n.length<=e.maxLength)&&(yield q(M.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield q(M.RegExp,e,r,n)}function*CF(e,t,r,n){if(!Gr(n))return yield q(M.String,e,r,n);$e(e.minLength)&&!(n.length>=e.minLength)&&(yield q(M.StringMinLength,e,r,n)),$e(e.maxLength)&&!(n.length<=e.maxLength)&&(yield q(M.StringMaxLength,e,r,n)),Gr(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield q(M.StringPattern,e,r,n))),Gr(e.format)&&(Fm(e.format)?Tm(e.format)(n)||(yield q(M.StringFormat,e,r,n)):yield q(M.StringFormatUnknown,e,r,n))}function*SF(e,t,r,n){Xc(n)||(yield q(M.Symbol,e,r,n))}function*MF(e,t,r,n){if(!Gr(n))return yield q(M.String,e,r,n);new RegExp(e.pattern).test(n)||(yield q(M.StringPattern,e,r,n))}function*FF(e,t,r,n){yield*Ht(vn(e,t),t,r,n)}function*TF(e,t,r,n){if(!Yr(n))return yield q(M.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield q(M.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield q(M.TupleLength,e,r,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*Ht(e.items[o],t,`${r}/${o}`,n[o])}function*NF(e,t,r,n){li(n)||(yield q(M.Undefined,e,r,n))}function*PF(e,t,r,n){if(vc(e,t,n))return;const o=e.anyOf.map(i=>new S5(Ht(i,t,r,n)));yield q(M.Union,e,r,n,o)}function*IF(e,t,r,n){if(!wm(n))return yield q(M.Uint8Array,e,r,n);$e(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield q(M.Uint8ArrayMaxByteLength,e,r,n)),$e(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield q(M.Uint8ArrayMinByteLength,e,r,n))}function*OF(e,t,r,n){}function*BF(e,t,r,n){wt.IsVoidLike(n)||(yield q(M.Void,e,r,n))}function*RF(e,t,r,n){Im(e[j])(e,n)||(yield q(M.Kind,e,r,n))}function*Ht(e,t,r,n){const o=$e(e.$id)?[...t,e]:t,i=e;switch(i[j]){case"Any":return yield*oF();case"Argument":return yield*iF();case"Array":return yield*sF(i,o,r,n);case"AsyncIterator":return yield*aF(i,o,r,n);case"BigInt":return yield*lF(i,o,r,n);case"Boolean":return yield*uF(i,o,r,n);case"Constructor":return yield*cF(i,o,r,n);case"Date":return yield*dF(i,o,r,n);case"Function":return yield*fF(i,o,r,n);case"Import":return yield*hF(i,o,r,n);case"Integer":return yield*mF(i,o,r,n);case"Intersect":return yield*gF(i,o,r,n);case"Iterator":return yield*pF(i,o,r,n);case"Literal":return yield*bF(i,o,r,n);case"Never":return yield*yF(i,o,r,n);case"Not":return yield*vF(i,o,r,n);case"Null":return yield*wF(i,o,r,n);case"Number":return yield*$F(i,o,r,n);case"Object":return yield*kF(i,o,r,n);case"Promise":return yield*xF(i,o,r,n);case"Record":return yield*DF(i,o,r,n);case"Ref":return yield*AF(i,o,r,n);case"RegExp":return yield*EF(i,o,r,n);case"String":return yield*CF(i,o,r,n);case"Symbol":return yield*SF(i,o,r,n);case"TemplateLiteral":return yield*MF(i,o,r,n);case"This":return yield*FF(i,o,r,n);case"Tuple":return yield*TF(i,o,r,n);case"Undefined":return yield*NF(i,o,r,n);case"Union":return yield*PF(i,o,r,n);case"Uint8Array":return yield*IF(i,o,r,n);case"Unknown":return yield*OF();case"Void":return yield*BF(i,o,r,n);default:if(!ri(i[j]))throw new nF(e);return yield*RF(i,o,r,n)}}function LF(...e){const t=e.length===3?Ht(e[0],e[1],"",e[2]):Ht(e[0],[],"",e[1]);return new S5(t)}class jF extends sr{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class _F extends sr{constructor(t,r,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=o}}function ot(e,t,r){try{return Ye(e)?e[Pr].Decode(r):r}catch(n){throw new _F(e,t,r,n)}}function UF(e,t,r,n){return Yr(n)?ot(e,r,n.map((o,i)=>_n(e.items,t,`${r}/${i}`,o))):ot(e,r,n)}function zF(e,t,r,n){if(!Qn(n)||Fw(n))return ot(e,r,n);const o=n5(e),i=o.map(d=>d[0]),s={...n};for(const[d,f]of o)d in s&&(s[d]=_n(f,t,`${r}/${d}`,s[d]));if(!Ye(e.unevaluatedProperties))return ot(e,r,s);const a=Object.getOwnPropertyNames(s),l=e.unevaluatedProperties,c={...s};for(const d of a)i.includes(d)||(c[d]=ot(l,`${r}/${d}`,c[d]));return ot(e,r,c)}function qF(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=_n(i,[...t,...o],r,n);return ot(e,r,s)}function VF(e,t,r,n){return ot(e,r,_n(e.not,t,r,n))}function WF(e,t,r,n){if(!Qn(n))return ot(e,r,n);const o=us(e),i={...n};for(const c of o)Cw(i,c)&&(li(i[c])&&(!Hl(e.properties[c])||wt.IsExactOptionalProperty(i,c))||(i[c]=_n(e.properties[c],t,`${r}/${c}`,i[c])));if(!kr(e.additionalProperties))return ot(e,r,i);const s=Object.getOwnPropertyNames(i),a=e.additionalProperties,l={...i};for(const c of s)o.includes(c)||(l[c]=ot(a,`${r}/${c}`,l[c]));return ot(e,r,l)}function KF(e,t,r,n){if(!Qn(n))return ot(e,r,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],i=new RegExp(o),s={...n};for(const d of Object.getOwnPropertyNames(n))i.test(d)&&(s[d]=_n(e.patternProperties[o],t,`${r}/${d}`,s[d]));if(!kr(e.additionalProperties))return ot(e,r,s);const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,c={...s};for(const d of a)i.test(d)||(c[d]=ot(l,`${r}/${d}`,c[d]));return ot(e,r,c)}function GF(e,t,r,n){const o=vn(e,t);return ot(e,r,_n(o,t,r,n))}function HF(e,t,r,n){const o=vn(e,t);return ot(e,r,_n(o,t,r,n))}function ZF(e,t,r,n){return Yr(n)&&Yr(e.items)?ot(e,r,e.items.map((o,i)=>_n(o,t,`${r}/${i}`,n[i]))):ot(e,r,n)}function JF(e,t,r,n){for(const o of e.anyOf){if(!vc(o,t,n))continue;const i=_n(o,t,r,n);return ot(e,r,i)}return ot(e,r,n)}function _n(e,t,r,n){const o=vd(e,t),i=e;switch(e[j]){case"Array":return UF(i,o,r,n);case"Import":return qF(i,o,r,n);case"Intersect":return zF(i,o,r,n);case"Not":return VF(i,o,r,n);case"Object":return WF(i,o,r,n);case"Record":return KF(i,o,r,n);case"Ref":return GF(i,o,r,n);case"Symbol":return ot(i,r,n);case"This":return HF(i,o,r,n);case"Tuple":return ZF(i,o,r,n);case"Union":return JF(i,o,r,n);default:return ot(i,r,n)}}function YF(e,t,r){return _n(e,t,"",r)}class XF extends sr{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class QF extends sr{constructor(t,r,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=o}}function nr(e,t,r){try{return Ye(e)?e[Pr].Encode(r):r}catch(n){throw new QF(e,t,r,n)}}function eT(e,t,r,n){const o=nr(e,r,n);return Yr(o)?o.map((i,s)=>Bn(e.items,t,`${r}/${s}`,i)):o}function tT(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=nr(e,r,n);return Bn(i,[...t,...o],r,s)}function rT(e,t,r,n){const o=nr(e,r,n);if(!Qn(n)||Fw(n))return o;const i=n5(e),s=i.map(f=>f[0]),a={...o};for(const[f,h]of i)f in a&&(a[f]=Bn(h,t,`${r}/${f}`,a[f]));if(!Ye(e.unevaluatedProperties))return a;const l=Object.getOwnPropertyNames(a),c=e.unevaluatedProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=nr(c,`${r}/${f}`,d[f]));return d}function nT(e,t,r,n){return nr(e.not,r,nr(e,r,n))}function oT(e,t,r,n){const o=nr(e,r,n);if(!Qn(o))return o;const i=us(e),s={...o};for(const d of i)Cw(s,d)&&(li(s[d])&&(!Hl(e.properties[d])||wt.IsExactOptionalProperty(s,d))||(s[d]=Bn(e.properties[d],t,`${r}/${d}`,s[d])));if(!kr(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,c={...s};for(const d of a)i.includes(d)||(c[d]=nr(l,`${r}/${d}`,c[d]));return c}function iT(e,t,r,n){const o=nr(e,r,n);if(!Qn(n))return o;const i=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(i),a={...o};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=Bn(e.patternProperties[i],t,`${r}/${f}`,a[f]));if(!kr(e.additionalProperties))return a;const l=Object.getOwnPropertyNames(a),c=e.additionalProperties,d={...a};for(const f of l)s.test(f)||(d[f]=nr(c,`${r}/${f}`,d[f]));return d}function sT(e,t,r,n){const o=vn(e,t),i=Bn(o,t,r,n);return nr(e,r,i)}function aT(e,t,r,n){const o=vn(e,t),i=Bn(o,t,r,n);return nr(e,r,i)}function lT(e,t,r,n){const o=nr(e,r,n);return Yr(e.items)?e.items.map((i,s)=>Bn(i,t,`${r}/${s}`,o[s])):[]}function uT(e,t,r,n){for(const o of e.anyOf){if(!vc(o,t,n))continue;const i=Bn(o,t,r,n);return nr(e,r,i)}for(const o of e.anyOf){const i=Bn(o,t,r,n);if(vc(e,t,i))return nr(e,r,i)}return nr(e,r,n)}function Bn(e,t,r,n){const o=vd(e,t),i=e;switch(e[j]){case"Array":return eT(i,o,r,n);case"Import":return tT(i,o,r,n);case"Intersect":return rT(i,o,r,n);case"Not":return nT(i,o,r,n);case"Object":return oT(i,o,r,n);case"Record":return iT(i,o,r,n);case"Ref":return sT(i,o,r,n);case"This":return aT(i,o,r,n);case"Tuple":return lT(i,o,r,n);case"Union":return uT(i,o,r,n);default:return nr(i,r,n)}}function cT(e,t,r){return Bn(e,t,"",r)}function dT(e,t){return Ye(e)||_t(e.items,t)}function fT(e,t){return Ye(e)||_t(e.items,t)}function hT(e,t){return Ye(e)||_t(e.returns,t)||e.parameters.some(r=>_t(r,t))}function mT(e,t){return Ye(e)||_t(e.returns,t)||e.parameters.some(r=>_t(r,t))}function gT(e,t){return Ye(e)||Ye(e.unevaluatedProperties)||e.allOf.some(r=>_t(r,t))}function pT(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,i)=>[...o,e.$defs[i]],[]),n=e.$defs[e.$ref];return Ye(e)||_t(n,[...r,...t])}function bT(e,t){return Ye(e)||_t(e.items,t)}function yT(e,t){return Ye(e)||_t(e.not,t)}function vT(e,t){return Ye(e)||Object.values(e.properties).some(r=>_t(r,t))||kr(e.additionalProperties)&&_t(e.additionalProperties,t)}function wT(e,t){return Ye(e)||_t(e.item,t)}function $T(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Ye(e)||_t(n,t)||kr(e.additionalProperties)&&Ye(e.additionalProperties)}function kT(e,t){return Ye(e)?!0:_t(vn(e,t),t)}function xT(e,t){return Ye(e)?!0:_t(vn(e,t),t)}function DT(e,t){return Ye(e)||!li(e.items)&&e.items.some(r=>_t(r,t))}function AT(e,t){return Ye(e)||e.anyOf.some(r=>_t(r,t))}function _t(e,t){const r=vd(e,t),n=e;if(e.$id&&X0.has(e.$id))return!1;switch(e.$id&&X0.add(e.$id),e[j]){case"Array":return dT(n,r);case"AsyncIterator":return fT(n,r);case"Constructor":return hT(n,r);case"Function":return mT(n,r);case"Import":return pT(n,r);case"Intersect":return gT(n,r);case"Iterator":return bT(n,r);case"Not":return yT(n,r);case"Object":return vT(n,r);case"Promise":return wT(n,r);case"Record":return $T(n,r);case"Ref":return kT(n,r);case"This":return xT(n,r);case"Tuple":return DT(n,r);case"Union":return AT(n,r);default:return Ye(e)}}const X0=new Set;function ET(e,t){return X0.clear(),_t(e,t)}class CT{constructor(t,r,n,o){this.schema=t,this.references=r,this.checkFunc=n,this.code=o,this.hasTransform=ET(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return LF(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new jF(this.schema,t,this.Errors(t).First());return this.hasTransform?YF(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?cT(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new XF(this.schema,t,this.Errors(t).First());return r}}var fo;(function(e){function t(i){return i===36}e.DollarSign=t;function r(i){return i===95}e.IsUnderscore=r;function n(i){return i>=65&&i<=90||i>=97&&i<=122}e.IsAlpha=n;function o(i){return i>=48&&i<=57}e.IsNumeric=o})(fo||(fo={}));var wc;(function(e){function t(i){return i.length===0?!1:fo.IsNumeric(i.charCodeAt(0))}function r(i){if(t(i))return!1;for(let s=0;s<i.length;s++){const a=i.charCodeAt(s);if(!(fo.IsAlpha(a)||fo.IsNumeric(a)||fo.DollarSign(a)||fo.IsUnderscore(a)))return!1}return!0}function n(i){return i.replace(/'/g,"\\'")}function o(i,s){return r(s)?`${i}.${s}`:`${i}['${n(s)}']`}e.Encode=o})(wc||(wc={}));var Q0;(function(e){function t(r){const n=[];for(let o=0;o<r.length;o++){const i=r.charCodeAt(o);fo.IsNumeric(i)||fo.IsAlpha(i)?n.push(r.charAt(o)):n.push(`_${i}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(Q0||(Q0={}));var eh;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(eh||(eh={}));class ST extends sr{constructor(t){super("Unknown type"),this.schema=t}}class o1 extends sr{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Ci;(function(e){function t(s,a,l){return wt.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${l} : true)`:`(${wc.Encode(s,a)} !== undefined ? ${l} : true)`}e.IsExactOptionalProperty=t;function r(s){return wt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return wt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function o(s){return wt.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=o;function i(s){return wt.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=i})(Ci||(Ci={}));var al;(function(e){function t(D){return D[j]==="Any"||D[j]==="Unknown"}function*r(D,W,C){yield"true"}function*n(D,W,C){yield"true"}function*o(D,W,C){yield`Array.isArray(${C})`;const[oe,Y]=[wn("value","any"),wn("acc","number")];be(D.maxItems)&&(yield`${C}.length <= ${D.maxItems}`),be(D.minItems)&&(yield`${C}.length >= ${D.minItems}`);const X=Nt(D.items,W,"value");if(yield`((array) => { for(const ${oe} of array) if(!(${X})) { return false }; return true; })(${C})`,ct(D.contains)||be(D.minContains)||be(D.maxContains)){const Ge=ct(D.contains)?D.contains:ft(),Ar=Nt(Ge,W,"value"),to=be(D.minContains)?[`(count >= ${D.minContains})`]:[],$n=be(D.maxContains)?[`(count <= ${D.maxContains})`]:[],qn=`const count = value.reduce((${Y}, ${oe}) => ${Ar} ? acc + 1 : acc, 0)`,su=["(count > 0)",...to,...$n].join(" && ");yield`((${oe}) => { ${qn}; return ${su}})(${C})`}D.uniqueItems===!0&&(yield`((${oe}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${C})`)}function*i(D,W,C){yield`(typeof value === 'object' && Symbol.asyncIterator in ${C})`}function*s(D,W,C){yield`(typeof ${C} === 'bigint')`,co(D.exclusiveMaximum)&&(yield`${C} < BigInt(${D.exclusiveMaximum})`),co(D.exclusiveMinimum)&&(yield`${C} > BigInt(${D.exclusiveMinimum})`),co(D.maximum)&&(yield`${C} <= BigInt(${D.maximum})`),co(D.minimum)&&(yield`${C} >= BigInt(${D.minimum})`),co(D.multipleOf)&&(yield`(${C} % BigInt(${D.multipleOf})) === 0`)}function*a(D,W,C){yield`(typeof ${C} === 'boolean')`}function*l(D,W,C){yield*Xt(D.returns,W,`${C}.prototype`)}function*c(D,W,C){yield`(${C} instanceof Date) && Number.isFinite(${C}.getTime())`,be(D.exclusiveMaximumTimestamp)&&(yield`${C}.getTime() < ${D.exclusiveMaximumTimestamp}`),be(D.exclusiveMinimumTimestamp)&&(yield`${C}.getTime() > ${D.exclusiveMinimumTimestamp}`),be(D.maximumTimestamp)&&(yield`${C}.getTime() <= ${D.maximumTimestamp}`),be(D.minimumTimestamp)&&(yield`${C}.getTime() >= ${D.minimumTimestamp}`),be(D.multipleOfTimestamp)&&(yield`(${C}.getTime() % ${D.multipleOfTimestamp}) === 0`)}function*d(D,W,C){yield`(typeof ${C} === 'function')`}function*f(D,W,C){const oe=globalThis.Object.getOwnPropertyNames(D.$defs).reduce((Y,X)=>[...Y,D.$defs[X]],[]);yield*Xt(va(D.$ref),[...W,...oe],C)}function*h(D,W,C){yield`Number.isInteger(${C})`,be(D.exclusiveMaximum)&&(yield`${C} < ${D.exclusiveMaximum}`),be(D.exclusiveMinimum)&&(yield`${C} > ${D.exclusiveMinimum}`),be(D.maximum)&&(yield`${C} <= ${D.maximum}`),be(D.minimum)&&(yield`${C} >= ${D.minimum}`),be(D.multipleOf)&&(yield`(${C} % ${D.multipleOf}) === 0`)}function*m(D,W,C){const oe=D.allOf.map(Y=>Nt(Y,W,C)).join(" && ");if(D.unevaluatedProperties===!1){const Y=ur(`${new RegExp(Qs(D))};`),X=`Object.getOwnPropertyNames(${C}).every(key => ${Y}.test(key))`;yield`(${oe} && ${X})`}else if(ct(D.unevaluatedProperties)){const Y=ur(`${new RegExp(Qs(D))};`),X=`Object.getOwnPropertyNames(${C}).every(key => ${Y}.test(key) || ${Nt(D.unevaluatedProperties,W,`${C}[key]`)})`;yield`(${oe} && ${X})`}else yield`(${oe})`}function*g(D,W,C){yield`(typeof value === 'object' && Symbol.iterator in ${C})`}function*b(D,W,C){typeof D.const=="number"||typeof D.const=="boolean"?yield`(${C} === ${D.const})`:yield`(${C} === '${eh.Escape(D.const)}')`}function*y(D,W,C){yield"false"}function*$(D,W,C){yield`(!${Nt(D.not,W,C)})`}function*x(D,W,C){yield`(${C} === null)`}function*E(D,W,C){yield Ci.IsNumberLike(C),be(D.exclusiveMaximum)&&(yield`${C} < ${D.exclusiveMaximum}`),be(D.exclusiveMinimum)&&(yield`${C} > ${D.exclusiveMinimum}`),be(D.maximum)&&(yield`${C} <= ${D.maximum}`),be(D.minimum)&&(yield`${C} >= ${D.minimum}`),be(D.multipleOf)&&(yield`(${C} % ${D.multipleOf}) === 0`)}function*N(D,W,C){yield Ci.IsObjectLike(C),be(D.minProperties)&&(yield`Object.getOwnPropertyNames(${C}).length >= ${D.minProperties}`),be(D.maxProperties)&&(yield`Object.getOwnPropertyNames(${C}).length <= ${D.maxProperties}`);const oe=Object.getOwnPropertyNames(D.properties);for(const Y of oe){const X=wc.Encode(C,Y),Ge=D.properties[Y];if(D.required&&D.required.includes(Y))yield*Xt(Ge,W,X),($a(Ge)||t(Ge))&&(yield`('${Y}' in ${C})`);else{const Ar=Nt(Ge,W,X);yield Ci.IsExactOptionalProperty(C,Y,Ar)}}if(D.additionalProperties===!1)if(D.required&&D.required.length===oe.length)yield`Object.getOwnPropertyNames(${C}).length === ${oe.length}`;else{const Y=`[${oe.map(X=>`'${X}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${C}).every(key => ${Y}.includes(key))`}if(typeof D.additionalProperties=="object"){const Y=Nt(D.additionalProperties,W,`${C}[key]`),X=`[${oe.map(Ge=>`'${Ge}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${C}).every(key => ${X}.includes(key) || ${Y}))`}}function*B(D,W,C){yield`${C} instanceof Promise`}function*Z(D,W,C){yield Ci.IsRecordLike(C),be(D.minProperties)&&(yield`Object.getOwnPropertyNames(${C}).length >= ${D.minProperties}`),be(D.maxProperties)&&(yield`Object.getOwnPropertyNames(${C}).length <= ${D.maxProperties}`);const[oe,Y]=Object.entries(D.patternProperties)[0],X=ur(`${new RegExp(oe)}`),Ge=Nt(Y,W,"value"),Ar=ct(D.additionalProperties)?Nt(D.additionalProperties,W,C):D.additionalProperties===!1?"false":"true",to=`(${X}.test(key) ? ${Ge} : ${Ar})`;yield`(Object.entries(${C}).every(([key, value]) => ${to}))`}function*Q(D,W,C){const oe=vn(D,W);if(Ve.functions.has(D.$ref))return yield`${on(D.$ref)}(${C})`;yield*Xt(oe,W,C)}function*ee(D,W,C){const oe=ur(`${new RegExp(D.source,D.flags)};`);yield`(typeof ${C} === 'string')`,be(D.maxLength)&&(yield`${C}.length <= ${D.maxLength}`),be(D.minLength)&&(yield`${C}.length >= ${D.minLength}`),yield`${oe}.test(${C})`}function*J(D,W,C){yield`(typeof ${C} === 'string')`,be(D.maxLength)&&(yield`${C}.length <= ${D.maxLength}`),be(D.minLength)&&(yield`${C}.length >= ${D.minLength}`),D.pattern!==void 0&&(yield`${ur(`${new RegExp(D.pattern)};`)}.test(${C})`),D.format!==void 0&&(yield`format('${D.format}', ${C})`)}function*ge(D,W,C){yield`(typeof ${C} === 'symbol')`}function*ve(D,W,C){yield`(typeof ${C} === 'string')`,yield`${ur(`${new RegExp(D.pattern)};`)}.test(${C})`}function*Me(D,W,C){yield`${on(D.$ref)}(${C})`}function*rt(D,W,C){if(yield`Array.isArray(${C})`,D.items===void 0)return yield`${C}.length === 0`;yield`(${C}.length === ${D.maxItems})`;for(let oe=0;oe<D.items.length;oe++)yield`${Nt(D.items[oe],W,`${C}[${oe}]`)}`}function*Ke(D,W,C){yield`${C} === undefined`}function*Dr(D,W,C){yield`(${D.anyOf.map(Y=>Nt(Y,W,C)).join(" || ")})`}function*qt(D,W,C){yield`${C} instanceof Uint8Array`,be(D.maxByteLength)&&(yield`(${C}.length <= ${D.maxByteLength})`),be(D.minByteLength)&&(yield`(${C}.length >= ${D.minByteLength})`)}function*zn(D,W,C){yield"true"}function*eo(D,W,C){yield Ci.IsVoidLike(C)}function*nn(D,W,C){const oe=Ve.instances.size;Ve.instances.set(oe,D),yield`kind('${D[j]}', ${oe}, ${C})`}function*Xt(D,W,C,oe=!0){const Y=Gr(D.$id)?[...W,D]:W,X=D;if(oe&&Gr(D.$id)){const Ge=on(D.$id);if(Ve.functions.has(Ge))return yield`${Ge}(${C})`;{Ve.functions.set(Ge,"<deferred>");const Ar=sn(Ge,D,W,"value",!1);return Ve.functions.set(Ge,Ar),yield`${Ge}(${C})`}}switch(X[j]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*o(X,Y,C);case"AsyncIterator":return yield*i(X,Y,C);case"BigInt":return yield*s(X,Y,C);case"Boolean":return yield*a(X,Y,C);case"Constructor":return yield*l(X,Y,C);case"Date":return yield*c(X,Y,C);case"Function":return yield*d(X,Y,C);case"Import":return yield*f(X,Y,C);case"Integer":return yield*h(X,Y,C);case"Intersect":return yield*m(X,Y,C);case"Iterator":return yield*g(X,Y,C);case"Literal":return yield*b(X,Y,C);case"Never":return yield*y();case"Not":return yield*$(X,Y,C);case"Null":return yield*x(X,Y,C);case"Number":return yield*E(X,Y,C);case"Object":return yield*N(X,Y,C);case"Promise":return yield*B(X,Y,C);case"Record":return yield*Z(X,Y,C);case"Ref":return yield*Q(X,Y,C);case"RegExp":return yield*ee(X,Y,C);case"String":return yield*J(X,Y,C);case"Symbol":return yield*ge(X,Y,C);case"TemplateLiteral":return yield*ve(X,Y,C);case"This":return yield*Me(X,Y,C);case"Tuple":return yield*rt(X,Y,C);case"Undefined":return yield*Ke(X,Y,C);case"Union":return yield*Dr(X,Y,C);case"Uint8Array":return yield*qt(X,Y,C);case"Unknown":return yield*zn();case"Void":return yield*eo(X,Y,C);default:if(!ri(X[j]))throw new ST(D);return yield*nn(X,Y,C)}}const Ve={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Nt(D,W,C,oe=!0){return`(${[...Xt(D,W,C,oe)].join(" && ")})`}function on(D){return`check_${Q0.Encode(D)}`}function ur(D){const W=`local_${Ve.variables.size}`;return Ve.variables.set(W,`const ${W} = ${D}`),W}function sn(D,W,C,oe,Y=!0){const[X,Ge]=[`
`,qn=>"".padStart(qn," ")],Ar=wn("value","any"),to=Fo("boolean"),$n=[...Xt(W,C,oe,Y)].map(qn=>`${Ge(4)}${qn}`).join(` &&${X}`);return`function ${D}(${Ar})${to} {${X}${Ge(2)}return (${X}${$n}${X}${Ge(2)})
}`}function wn(D,W){const C=Ve.language==="typescript"?`: ${W}`:"";return`${D}${C}`}function Fo(D){return Ve.language==="typescript"?`: ${D}`:""}function iu(D,W,C){const oe=sn("check",D,W,"value"),Y=wn("value","any"),X=Fo("boolean"),Ge=[...Ve.functions.values()],Ar=[...Ve.variables.values()],to=Gr(D.$id)?`return function check(${Y})${X} {
  return ${on(D.$id)}(value)
}`:`return ${oe}`;return[...Ar,...Ge,to].join(`
`)}function hs(...D){const W={language:"javascript"},[C,oe,Y]=D.length===2&&Yr(D[1])?[D[0],D[1],W]:D.length===2&&!Yr(D[1])?[D[0],[],D[1]]:D.length===3?[D[0],D[1],D[2]]:D.length===1?[D[0],[],W]:[null,[],W];if(Ve.language=Y.language,Ve.variables.clear(),Ve.functions.clear(),Ve.instances.clear(),!ct(C))throw new o1(C);for(const X of oe)if(!ct(X))throw new o1(X);return iu(C,oe)}e.Code=hs;function rk(D,W=[]){const C=hs(D,W,{language:"javascript"}),oe=globalThis.Function("kind","format","hash",C),Y=new Map(Ve.instances);function X($n,qn,su){if(!ri($n)||!Y.has(qn))return!1;const nk=Im($n),ok=Y.get(qn);return nk(ok,su)}function Ge($n,qn){return Fm($n)?Tm($n)(qn):!1}function Ar($n){return ng($n)}const to=oe(X,Ge,Ar);return new CT(D,W,to,C)}e.Compile=rk})(al||(al={}));const th={};function M5(e,t){e in th||(th[e]=t)}let i1=!1;function MT(){i1||(i1=!0,tM(e=>(th[e.schema[j]]||x5)(e)))}const rh=Symbol.for("object-shape-tester.shape-identifier");function Le(e){if(MT(),og(e))return e;const t=nh(e),r=Si(t,!1),n=Si(t,!0),o={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:al.Compile(t),$_compiledSchemaNoExtraKeys:al.Compile(r),$_compiledSchemaExtraKeys:al.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[rh]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}function og(e){return S.hasKey(e,rh)&&!!e[rh]}function ig(e){return S.hasKey(e,j)}function Si(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Si(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Si(n,t))),ig(e.items)?r.items=Si(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Si(n,t))),S.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,i])=>{n[o]=Si(i,t)}),r.properties=n}return r.additionalProperties=t,r}function nh(e){if(ig(e))return e;if(og(e))return e.$_schema;if(S.isFunction(e))return He.Function([],He.Any(),{default:e});if(S.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,o])=>{const i=nh(o);r[n]=i,t[n]=i.default}),He.Object(r,{default:t})}else{if(S.isArray(e))return He.Array(He.Union(e.map(t=>nh(t))),{default:[]});if(S.isPrimitive(e)){if(S.isString(e))return He.String({default:e});if(S.isNumber(e))return He.Number({default:e});if(S.isBoolean(e))return He.Boolean({default:e});if(S.isSymbol(e))return He.Symbol({default:e});if(S.isNull(e))return He.Null({default:null});if(S.isUndefined(e))return He.Undefined({default:void 0});if(S.isBigInt(e))return He.BigInt({default:e});Lt.tsType(e).equals(),Lt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${k(e)}`)}}function FT({checkValue:e,default:t,name:r}){return ri(r)||Pm(r,(n,o)=>e(o)),(n=t)=>Le(He.Unsafe({[j]:r,default:n}))}function Gi(e,t){const r=qr(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Le(He.Union(r.map(n=>He.Literal(n)),{default:t??r[0]}))}function Ae(e){return S.isSymbol(e)?TT(e):Le(He.Const(e,{default:e}))}const Du="ExactSymbol";function TT(e){return ri(Du)||Pm(Du,(t,r)=>r===t.symbol),M5(Du,({schema:t})=>`Expected symbol ${t.symbol?.description?c6({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Le(He.Unsafe({[j]:Du,symbol:e,default:e}))}function NT(...e){const t={},r=e.map(n=>{const o=Le(n);return Object.assign(t,o.default),o.$_schema});return Le(He.Composite(r,{default:t}))}function er(e,t={}){wt.ExactOptionalPropertyTypes=!0;const r=Le(e).$_schema,n=t.alsoUndefined?He.Union([He.Undefined(),r]):r;return Le(He.Optional(n))}function ut(...e){let t;const r=e.map((n,o)=>{const i=Le(n);return o||(t=i.default),i.$_schema});return Le(He.Union(r,{default:t}))}class PT extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(i=>F5(i)).join(`
`),o=Xi(r,`Shape mismatch:
${Rh(n,1)}`);super(o),this.errors=t,this.failureMessage=r}}function IT(e){return e.errors.flatMap(t=>Array.from(t))}function F5(e,t=0){const r=IT(e).map(o=>F5(o,t+1)),n=[e.path,e.message].filter(S.isTruthy).join(": ")+(r.length?":":"");return[Rh(n,t),...r].join(`
`)}function Vo(e,t,r={}){return T5(t,r).Check(e)}function $c(e,t,r={},n){if(Vo(e,t,r))return;const o=Array.from(T5(t,r).Errors(e));if(o.length)throw new PT(o,n)}function T5(e,t){return e=OT(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function OT(e){return Le(e)}function Ss({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:o}=Sh(r),i=r.default??(o-n)/2+n,s=Le(He.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:i})),a=h2(()=>$c(i,s));if(a)throw ia(a,"Default range value is not within range.");return s}const Vu="recordShape";function wd({keys:e,values:t,partial:r,additionalProperties:n}){BT();const o=N5(e),i=Le(t);return Le(He.Unsafe({[j]:Vu,keysShape:o,valuesShape:i,isPartial:!!r,additionalProperties:!!n,default:RT({isPartial:!!r,keysShape:o,valuesShape:i})}))}function BT(){ri(Vu)||Pm(Vu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([o,i])=>{const s=e.additionalProperties?!0:Vo(o,e.keysShape),a=Vo(i,e.valuesShape);return s&&a}),n=e.isPartial?!0:!s1(e.keysShape,t).length;return r&&n}),M5(Vu,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=Rn(Object.entries(n),([l])=>l,(l,[c,d])=>!Vo(c,r.keysShape)||!Vo(d,r.valuesShape)),i=s1(r.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",a=i.length?["Missing keys",i.join(",")].join(": "):"";return[s,a].filter(S.isTruthy).join(`
`)})}function s1(e,t){const r=kc(e).filter(n=>S.isPropertyKey(n));return r.length?r.filter(n=>!S.hasKey(t,n)):[]}function RT({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=kc(e),o=t.default;return Object.fromEntries(n.map(i=>[i,o]))}}function N5(e){return og(e)?e:ig(e)?Le(e):S.isObject(e)?Gi(e):S.isArray(e)&&S.isLengthAtLeast(e,1)?ut(...e.map(t=>Ae(t))):S.isPropertyKey(e)?Le(e):Le(He.Undefined())}function kc(e){const t=e.$_schema,r=t[j].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Pc(t.anyOf.flatMap(n=>kc(Le(n)))):["undefined","number","string","symbol"].includes(r)?[]:kc(N5(e.default))}function LT(e){return Le(He.Unknown({default:e}))}const jT=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],sg=jT.reduce((e,t)=>(e[t]=t,e),{});lt.defaultZone.name;const P5=sg.UTC,_T=Le({hour:Ss({...dp,default:dp.min}),minute:Ss({...fp,default:fp.min}),second:Ss({...hp,default:hp.min}),millisecond:Ss({...mp,default:mp.min}),timezone:Gi(sg,P5)}),UT=Le({year:2023,month:Ss({...pp,default:pp.min}),day:Ss({...bp,default:bp.min}),timezone:Gi(sg,P5)});Le(NT(UT,_T));le.Years+"",le.Months+"",le.Weeks+"",le.Days+"",le.Hours+"",le.Minutes+"",le.Seconds+"",le.Milliseconds+"";Le(ut({get:Ae(H.Month),in:ut(Ae(H.Year))},{get:Ae(H.Week),in:ut(Ae(H.Year),Ae(H.Month))},{get:Ae(H.Day),in:ut(Ae(H.Year),Ae(H.Month),Ae(H.Week))},{get:Ae(H.Hour),in:ut(Ae(H.Year),Ae(H.Month),Ae(H.Week),Ae(H.Day))},{get:Ae(H.Minute),in:ut(Ae(H.Year),Ae(H.Month),Ae(H.Week),Ae(H.Day),Ae(H.Hour))},{get:Ae(H.Second),in:ut(Ae(H.Year),Ae(H.Month),Ae(H.Week),Ae(H.Day),Ae(H.Hour),Ae(H.Minute))},{get:Ae(H.Millisecond),in:ut(Ae(H.Year),Ae(H.Month),Ae(H.Week),Ae(H.Day),Ae(H.Hour),Ae(H.Minute),Ae(H.Second))}));wd({keys:Gi(le),values:-1,partial:!0});var a1;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(a1||(a1={}));var oh;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(oh||(oh={}));var l1;(function(e){e.Year="year",e.Month="month",e.Day="day"})(l1||(l1={}));const zT={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};i6(zT,qr(oh));FT({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return qT(e)}});function qT(e){return ae.fromISO(e).toUTC().toISO()===e}const VT=Le({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:LT()});function Cf(e){return Vo(e,VT,{allowExtraKeys:!0})}class I5 extends $w{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck="equalityCheck"in t?t.equalityCheck:pm}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:WT}=_6,u1=e=>e,c1=()=>document.createComment(""),Ba=(e,t,r)=>{const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(c1(),o),s=n.insertBefore(c1(),o);r=new WT(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let l;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(l=e._$AU)!==s._$AU&&r._$AP(l)}if(i!==o||a){let l=r._$AA;for(;l!==i;){const c=u1(l).nextSibling;u1(n).insertBefore(l,o),l=c}}}return r},Di=(e,t,r=e)=>(e._$AI(t,r),e),KT={},GT=(e,t=KT)=>e._$AH=t,HT=e=>e._$AH,Sf=e=>{e._$AR(),e._$AA.remove()};const ag={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Eo=e=>(...t)=>({_$litDirective$:e,values:t});class Co{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const ZT={attribute:!0,type:String,converter:sc,reflect:!1,hasChanged:Xh},JT=(e=ZT,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function YT(e){return(t,r)=>typeof r=="object"?JT(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const xr=Eo(class extends Co{constructor(e){if(super(e),e.type!==ag.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return mn}});const Ot=e=>e??te;function XT(e,t,r){return e?t(e):r?.(e)}class QT extends rl{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function eN(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(a=>!!a.index).length;if(n||o)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const l=i[a.index];l&&l.splice(0,0,...a.values)}),i.flat()}function ih(e){return S.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function lg(e){return S.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function O5(e){return Rn(e,t=>{if(ih(t))return t.definition;if(lg(t))return t.tagInterpolationKey||t},S.isTruthy)}const B5=new WeakMap;function tN(e,t){const r=O5(t);return R5(B5,[e,...r]).value?.template}function rN(e,t,r){const n=O5(t);return j5(B5,[e,...n],r)}function R5(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=L5(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?R5(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function L5(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function j5(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:s}=L5(e,t,n);if(!i)return{result:!1,reason:s};const a=o??{nested:void 0,template:void 0};if(o||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),j5(l,t,r,n+1)}function _5(e,t,r){const n=tN(e,t),o=n??r();if(!n){const a=rN(e,t,o);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=o.valuesTransform(t),s=eN(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function U5(e,t,r,n){const o=[],i=[],s=[],a=[];return e.forEach((c,d)=>{const f=o.length-1,h=o[f],m=d-1,g=t[m];n&&n(c);let b,y=[];if(typeof h=="string"&&(b=r(h,c,g),b)){o[f]=[h,b.replacement].join(""),s.push(m);const x=b.getExtraValues;y=x?x(g):[],y.length&&x?(o[f]+=" ",y.forEach((E,N)=>{N&&o.push(" ")}),a.push(E=>{const N=E[m],B=x(N);return{index:m,values:B}}),o.push(c)):o[f]+=c}b||o.push(c);const $=e.raw[d];b?(i[f]=[i[f],b.replacement,$].join(""),y.length&&y.forEach(()=>{i.push("")})):i.push($)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=a.flatMap(f=>f(c));return{valueIndexDeletions:s,valueInsertions:d}}}}function nN(...[e,t,r]){if(lg(r))return{replacement:r.tagName,getExtraValues:void 0}}function oN(e,t){return U5(e,t,nN)}function A(e,...t){const r=_5(e,t,()=>oN(e,t));return M2(r.strings,...r.values)}const iN={allowPolymorphicState:!1,errorHandler:void 0};function z5(e,t){const r=e.instanceState;ze(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ze(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class sN extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function ug(){return e=>class extends sN{static type=e;_type=e;constructor(t){super(e,t)}}}function et(){return ug()}function aN(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=ug()([e,n].join("-"));return r[n]=o,r},{}):{}}function lN(e){return e?it(e,t=>t):{}}function q5(e,t){t in e||YT()(e,t)}function uN(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function d1(e,t){const r=e;function n(s){t?uN(s,e,e.tagName):q5(e,s)}function o(s,a){return n(a),r[a]}return new Proxy({},{get:o,set(s,a,l){n(a);const c=r[a];function d(h){s[a]=h,r[a]=h}const f=e.observablePropertyListenerMap[a];if(c!==l&&Cf(c)&&f&&c.removeListener(f),Cf(l))if(f)l.listen(!1,f);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=h,l.listen(!1,h)}else Cf(c)&&(e.observablePropertyListenerMap[a]=void 0);return d(l),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return o(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function f1(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function h1(e,t,r){return r?Xo(r,o=>({key:o,value:[e,t,o].join("-")}),{}):{}}function cN({hostClassNames:e,cssVars:t}){return{hostClasses:it(e,(r,n)=>({name:ke(n),selector:ke(`:host(.${n})`)})),cssVars:t}}function dN({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ze(t).forEach(i=>{const s=t[i],a=r[i];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function fN({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:o}){function i(a){ze(a).forEach(l=>{const c=a[l];e.instanceState[l]=c})}return{cssVars:r,slotNames:n,testIds:o,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function Un(...e){return Lt.isEmpty(e),t=>{const r=t;if(!S.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return hN({...r,options:{...r.options}})}}function hN(e){if(!S.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!S.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...iN,...e.options},r=aN(e.tagName,e.events),n=lN(e.hostClasses);e.hostClasses&&f1(e.tagName,e.hostClasses),e.cssVars&&f1(e.tagName,e.cssVars);const o=e.cssVars?Yn(e.cssVars):{},i=h1(e.tagName,"slot",e.slotNames),s=h1(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(cN({hostClassNames:n,cssVars:o})):e.styles||A``,l=e.render;function c(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=class extends QT{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return fN({element:this,eventsMap:r,cssVars:o,slotNamesMap:i,testIdsMap:s})}static assign=c;static events=r;static render=l;static hostClasses=n;static cssVars=o;static init=e;static slotNames=i;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(f);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");ze(m).forEach(g=>{q5(this,g),this.instanceState[g]=m[g]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const h=l(f);if(h instanceof Promise)throw new TypeError("render cannot be asynchronous");return dN({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=ia(f,`Failed to render ${e.tagName}`);return console.error(h),this._lastRenderError=h,t.errorHandler?.(h),Zt(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{S.hasKey(f,"destroy")&&S.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){z5(this,f)}observablePropertyListenerMap={};instanceInputs=d1(this,!1);instanceState=d1(this,!t.allowPolymorphicState);constructor(){super(),this.definition=d}};return Object.defineProperties(d,{name:{value:l6(e.tagName,{firstLetterCase:ml.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,d)),d}class mN extends Es{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function gN(e){return new mN(e)}const m1=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},pN=Eo(class extends Co{constructor(e){if(super(e),e.type!==ag.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let s=0;for(const a of e)o[s]=n?n(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=HT(e),{values:i,keys:s}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??=[],l=[];let c,d,f=0,h=o.length-1,m=0,g=i.length-1;for(;f<=h&&m<=g;)if(o[f]===null)f++;else if(o[h]===null)h--;else if(a[f]===s[m])l[m]=Di(o[f],i[m]),f++,m++;else if(a[h]===s[g])l[g]=Di(o[h],i[g]),h--,g--;else if(a[f]===s[g])l[g]=Di(o[f],i[g]),Ba(e,l[g+1],o[f]),f++,g--;else if(a[h]===s[m])l[m]=Di(o[h],i[m]),Ba(e,o[f],o[h]),h--,m++;else if(c===void 0&&(c=m1(s,m,g),d=m1(a,f,h)),c.has(a[f]))if(c.has(a[h])){const b=d.get(s[m]),y=b!==void 0?o[b]:null;if(y===null){const $=Ba(e,o[f]);Di($,i[m]),l[m]=$}else l[m]=Di(y,i[m]),Ba(e,o[f],y),o[b]=null;m++}else Sf(o[h]),h--;else Sf(o[f]),f++;for(;m<=g;){const b=Ba(e,l[g+1]);Di(b,i[m]),l[m++]=b}for(;f<=h;){const b=o[f++];b!==null&&Sf(b)}return this.ut=s,GT(e,l),mn}}),bN=pN;function $d(e,t){return Hi(e,t),e.element}function yN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Hi(e,t){const r=yN(e),n=r?`: in ${r}`:"";if(e.type!==ag.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function vN(e,t){return Eo(class extends Co{element;constructor(r){super(r),this.element=pt.instanceOf($d(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),mn}})}const bo=vN("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const o=es(r,"allAttributesApplied",()=>new Set);ze(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);o.add(i)}),o.forEach(i=>{const s=t[i];s==null||s===!1||s===te?e.removeAttribute(i):s===""||s===!0?e.setAttribute(i,""):e.setAttribute(i,String(s))})});function wN(e){const t=Eo(class extends Co{element;constructor(r){super(r),this.element=$d(r,e)}render(r){return this.element.setAttribute(e,r),mn}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function _(e,t){return $N(e,t)}const $N=Eo(class extends Co{element;lastListenerMetaData;constructor(e){super(e),this.element=$d(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),mn}});function kN(e){return _("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const g1="onDomCreated",Zi=Eo(class extends Co{element;constructor(e){super(e),Hi(e,g1)}update(e,[t]){Hi(e,g1);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),p1="onDomRendered",xN=Eo(class extends Co{constructor(e){super(e),Hi(e,p1)}update(e,[t]){Hi(e,p1);const r=e.element;return window.requestAnimationFrame(()=>t(r)),this.render(t)}render(e){}}),b1="onResize",V5=Eo(class extends Co{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&DN(this.element,this.callback,e)});callback;constructor(e){super(e),Hi(e,b1)}update(e,[t]){Hi(e,b1),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function DN(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function Or(e,t,r){return XT(e,()=>t,()=>r)}const{attributeDirective:AN}=wN("data-test-id"),Wo=AN;function W5(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(t(o),Un(...n)(r(o)))}function EN(e,t){return CN(void 0,e)}const CN=Eo(class extends Co{element;constructor(e){super(e),this.element=$d(e,"assign")}render(e,t){return z5(this.element,t),mn}}),SN={};function MN(e,t){return t.map((r,n)=>{const o=e[n],i=e[n+1];if(o&&i){const{shouldHaveTagNameHere:s}=K5(o,i);if(s&&S.isString(r))return{tagName:r,tagInterpolationKey:es(SN,r,()=>({tagName:r}))}}return r})}function K5(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function FN(...[e,t,r]){const n=ih(r)?r.definition:r,{isOpeningTag:o,shouldHaveTagNameHere:i}=K5(e,t),s=lg(n);if(s&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(l){const c=ih(l)?l.inputs:void 0;return[o&&c?EN(c):void 0].filter(S.isTruthy)}}}function TN(e){}function NN(e){return U5(e.strings,e.values,FN,TN)}function p(e,...t){const r=MN(e,t),n=P6(e,...r),o=_5(e,r,()=>NN(n));return{...n,strings:o.strings,values:o.values}}function sh(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],i=(t??[""]).map((s,a)=>{const l=PN(s,n[a]);return`${s}${l}`});return $2(i.join(""))}function PN(e,t){return t._$litType$!=null||t._$litDirective$!=null?sh(t):Array.isArray(t)?t.map(n=>sh(n)).join(""):e.endsWith("=")?`"${t}"`:t}function G5(e){return it(e,(t,r)=>r instanceof Je?ke(r.toString({format:"hex"})):G5(r))}const IN="dodgerblue";function ah(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Mf({background:e,foreground:t}){return{background:e??new Je(ah(t)),foreground:t??new Je(ah(e))}}var xc;(function(e){e.Dark="dark",e.Light="light"})(xc||(xc={}));function ON(e){return e==="black"?"white":"black"}const BN={black:{foregroundFaint1:new Je("#ccc"),foregroundFaint2:new Je("#eee")},white:{foregroundFaint1:new Je("#ccc"),foregroundFaint2:new Je("#eee")}},RN={black:{backgroundFaint1:new Je("#666"),backgroundFaint2:new Je("#444")},white:{backgroundFaint1:new Je("#ccc"),backgroundFaint2:new Je("#fafafa")}};function y1({themeColor:e=IN,themeStyle:t=xc.Light}={}){const r=new Je(e),n=new Je(t===xc.Dark?"black":"white"),o=ah(n),i=new Je(o),s={nav:{hover:Mf({background:r.clone().set({"hsl.l":93})}),active:Mf({background:r.clone().set({"hsl.l":90})}),selected:Mf({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...RN[ON(o)],foreground:i,...BN[o]}};return G5(s)}async function v1(e=1){const t=new Yu;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function LN(e,t){return{element:e,children:H5(e)}}function H5(e,t,r){return jN(e).map(n=>{const o=H5(n);return{element:n,children:o}})}function jN(e){return[...e.children,...e.shadowRoot?.children??[]]}function Ff(e){return e.matches(":focus")}function cg(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:cg(t)}function Z5(e,t){if(t(e))return e;const r=cg(e);if(r)return Z5(r,t)}function kd(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const o=t.name,i=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${i}'.`;throw new Error(s)}return n}function _N(e){const t=cg(e);return t&&Z5(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function UN(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function zN({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const l=i.codePointAt(s);for(;a<r;)if(o.codePointAt(a++)===l)continue e;return!1}return!0}const qN=Ii(32);function Wu(e){return e.join(qN)}function J5(e){if(!e.length)return[];const t=Wu(e),r=J5(e.slice(0,-1));return[t,...r]}const VN=["error","errors"];function WN(e){return VN.includes(e)}function KN({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Wu(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&WN(t),s=Wu(o.fullUrlBreadcrumbs);if(zN({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(l=>S.isString(l)?l:sh(l))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[s]){const l=J5(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const i=Wu(o.fullUrlBreadcrumbs),s=r[i];if(!S.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class dg extends Error{name="SpaRouterError"}class w1 extends dg{name="GlobalUrlEventsConsolidationError"}class GN extends dg{name="SanitizationDepthMaxed"}Le({paths:[""],search:er(ut(void 0,wd({keys:"",values:[""]}))),hash:er(ut(void 0,""))});const HN=Le({basePath:er("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:er(1,{alsoUndefined:!0}),disableWarnings:er(!1,{alsoUndefined:!0}),isPaused:er(!1,{alsoUndefined:!0})}),Tf="://";function fg(...e){const t=e.join("/"),[r,n=""]=t.includes(Tf)?t.split(Tf):["",t];let o=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,l,c)=>{if(o)return s;const d=c[l+1];let f=a;const h=d?.startsWith("?"),m=!a.includes("?")&&h,g=d==="?";if(h||m){o=!0;let b=!1;const y=c.slice(l+2).reduce(($,x)=>(x.includes("#")&&(b=!0),b?$.concat(x):[$,x].join("&")),"");f=[a,d,g?Oi({value:y,prefix:"&"}):y].join("")}return s.concat(f)},[]);return[r,r?Tf:"",i.join("/")].join("")}var ta;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(ta||(ta={}));var ra;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(ra||(ra={}));const ZN=Le({encoding:er(ut(void 0,Gi(ta))),searchParamStrategy:er(ut(void 0,Gi(ra)))});function Au(e,t){return e.map(r=>{if(r!=null)return Os(String(r),t)}).filter(r=>r!=null)}function Os(e,t){return t?.encoding===ta.Decode?decodeURIComponent(e):t?.encoding===ta.Encode?encodeURIComponent(e):e}const JN=Le(wd({keys:"",values:[""]}));function YN(e,t,r){const n=r?.searchParamStrategy===ra.Clear?{}:it(e,(s,a)=>M3(a)),o=it(t,(s,a)=>{if(r?.searchParamStrategy===ra.Append){const l=n[s],c=S.isArray(l)?l:[l];if(a){const d=S.isArray(a)?a:[a];return Au([...c,...d],r)}else return Au(c,r)}else return S.isArray(a)?Au(a,r):a?Au([a],r):void 0});return Uc({...n,...o},(s,a)=>!!a)}function Y5(e,t){return S.isString(e)&&!e.includes("?")?{}:(S.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[s,...a]=o6(i,"=");return[s,a.length?a.join("="):void 0]}).reduce((i,[s,a])=>{const l=X5({options:t,key:s,value:a}),c=es(i,l.key,()=>[]);return a!=null&&c.push(l.value),i},{})}function XN(e){if(e!=null)return S.isArray(e)?[...e]:e===""?[]:[e]}function QN(e,t){const r=Rn(Object.entries(e),([n,o])=>{const i=XN(o);return i?.length?i.map(s=>{const a=X5({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return r.length?$r({value:r.join("&"),prefix:"?"}):""}function X5({options:e,key:t,value:r}){return{key:Os(t,e),value:Os(String(r),e)}}function Q5({hash:e,hostname:t,password:r,pathname:n,port:o,protocol:i,search:s,username:a}){return[i?i+"://":"",a?a+":":"",r?r+"@":"",xd({hostname:t,port:o}),hg({hash:e,pathname:n,search:s})].join("")}function e$({pathname:e}){const t=Oi({value:e,prefix:"/"});return t?t.split("/"):[]}function hg({hash:e,pathname:t,search:r}){return[$r({value:t,prefix:"/"}),r?$r({value:r,prefix:"?"}):"",e?$r({value:e,prefix:"#"}):""].join("")}function xd({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function t$({hostname:e,port:t,protocol:r}){return[r,xd({hostname:e,port:t})].filter(S.isTruthy).join("://")}function Bs(e,t){const r=S.isString(e)?Oi({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),o=n?$r({value:Os(n,t),prefix:"#"}):"",i=r.replace(/#[^#]*$/,""),s=i.replace(/^[^?]*(?:\?|$)/,""),a=s?$r({value:Os(s,t),prefix:"?"}):"",l=i.replace(/\?[^?]*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=d.replace(/@.*/,""),h=d.replace(/^[^@]*@/,""),m=f!==h,[g,...b]=m?f.split(":").reverse():[],y=b.toReversed().join("").replace(/[/:]/g,"")||"",$=g?.replace(/[/:]/g,"")||"",x=n6(h.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),E=x[0]?.endsWith("]")?"":x[1]===":"&&x[0]||"",B=h.replace(new RegExp(`:${E}($|/)`),"$1").replace(/\/.*/,""),Z=h.replace(/^[^/]*(\/|$)/,"$1"),Q=Os(Z.replace(/^[^/]*(?:\/|$)/,"/"),t),ee=xd({hostname:B,port:E}),J=t$({hostname:B,port:E,protocol:c}),ge=Q5({hash:o,hostname:B,password:$,pathname:Q,port:E,protocol:c,search:a,username:y}),ve=Y5(a),Me=e$({pathname:Q});return{fullPath:hg({hash:o,pathname:Q,search:a}),hash:o,host:ee,hostname:B,href:ge,origin:J,password:$,pathname:Q,paths:Me,port:E,protocol:c,search:a,searchParams:ve,username:y}}Le({hash:er(ut(void 0,"")),search:er(ut(void 0,"",wd({keys:"",values:ut(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:er(ut(void 0,"")),pathname:er(ut(void 0,"")),paths:er(ut(void 0,[""])),protocol:er(ut(void 0,"")),username:er(ut(void 0,"")),password:er(ut(void 0,"")),port:er(ut(void 0,"",-1))});function eP(e,t,r){const n=!!r,o=t==null||Vo(t,ZN,{allowExtraKeys:!1}),i=o?Bs(""):S.instanceOf(e,URL)||S.isString(e)?Bs(e):e,s=o?e:t,a=S.isString(s)&&s.startsWith("."),l=S.isString(s)||S.instanceOf(s,URL)?Uc(Bs(s),(b,y)=>S.isTruthy(y)):s,c=n?r:o?t:void 0,d=it(i,(b,y)=>{if(!S.hasKey(l,b))return y;const $=l[b];return S.isNumber($)?String($):S.isString($)?b==="hash"&&$?$r({value:$,prefix:"#"}):b==="pathname"?$r({value:$,prefix:"/"}):$:y});S.hasKey(l,"paths")&&l.paths&&(d.pathname=fg(a?i.pathname:"",...l.paths));const f=S.isString(l.search)?Y5($r({value:l.search,prefix:"?"})):Dn(l.search||{}),h=YN(d.searchParams,f,{...c,encoding:ta.None}),m=QN(h,c);return{...d,searchParams:h,search:m,paths:e$(d),fullPath:hg(d),host:xd(d),origin:t$(d),href:Q5({...d,search:m})}}const tP=Le({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:JN,hash:"",fullPath:"/",href:"/"});({...tP.default});const rP=0;function r$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==rP)}const Dd="locationchange",ho=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const $1=ho?.pushState;function k1(...e){if(!$1)return;const t=$1.apply(ho,e);return globalThis.dispatchEvent(new Event(Dd)),t}const x1=ho?.replaceState;function D1(...e){if(!x1)return;const t=x1.apply(ho,e);return globalThis.dispatchEvent(new Event(Dd)),t}function nP(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!ho)){{if(ho.pushState===k1)throw new w1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(ho.replaceState===D1)throw new w1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,ho.pushState=k1,ho.replaceState=D1,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Dd))})}}function Eu(e,t){const r=Bs(e),n=Oi({value:Oi({value:r.pathname,prefix:$r({value:t||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?Oi({value:r.hash,prefix:"#"}):void 0;return{paths:o,search:i,hash:s}}class oP{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){$c(t,HN),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new I5({defaultValue:r,equalityCheck:()=>!1}),nP(),this.removeGlobalListener=go(globalThis,Dd,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new GN("Looping route sanitization detected; aborting window URL change listener.");const n=Eu(globalThis.location.href,this.params.basePath),o=t.sanitizeRoute(n);S.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:fg(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Eu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Eu(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),i=this.routeIncludesBasePath(Eu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return eP(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?$r({value:i.hash,prefix:"#"}):""},{searchParamStrategy:ra.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:o}=Bs(n);return this.params.isPaused||!r.force&&S.jsonEquals(Bs(globalThis.location.href).fullPath,o)?!1:r.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(t,r){return r$(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new dg(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function iP(e){return new oP({basePath:e,sanitizeRoute(t){return{paths:sP(t.paths),hash:void 0,search:void 0}}})}function sP(e){const t=e[0];if(S.isEnumValue(t,Nr)){if(t===Nr.Book)return[Nr.Book,...e.slice(1)];if(t===Nr.Search)return e[1]?[t,e[1]]:[Nr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return zs.paths}const Dc=ug()("element-book-change-route"),v=Yn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function re({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const mg=re({name:"Check24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function A1(e){return S.isPrimitive(e)||e instanceof qo?String(e):e.default}function Vn(e,t,r,n){const o=`${r.prefix}-default-fg`,i=`${r.prefix}-default-bg`;if(S.isPrimitive(t)||t instanceof qo)return t;if("refDefaultBackground"in t)return`var(--${i}, ${A1(r.background)})`;if("refDefaultForeground"in t)return`var(--${o}, ${A1(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const s=S.hasKey(t,"refBackground")?"refBackground":S.hasKey(t,"refForeground")?"refForeground":void 0,a=s&&S.hasKey(t,s)?t[s]:void 0,l=s==="refBackground"?"background":"foreground",c=a&&n[a];if(!c)throw new Error(`Color theme ${s} reference '${a}' does not exist. (Referenced from '${e}'.)`);const d=c[l]||(l==="foreground"?Vn(o,r.foreground,r,n):Vn(i,r.background,r,n));return`var(--${a}-${l==="foreground"?"fg":"bg"}, ${Vn(a,d,r,n)})`}else return t.value}const Tr="theme-default";function n$(e,t){try{if(Tr in t)throw new Error(`Cannot define theme color by name '${Tr}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,i=`${e.prefix}-default-inverse-bg`,s={[r]:Vn(r,e.foreground,e,t),[n]:Vn(n,e.background,e,t),[o]:Vn(o,e.background,e,t),[i]:Vn(i,e.foreground,e,t)},a=Yn(s),l=Fn(t).reduce((g,[b,y])=>{const $=E1(b),x=y.foreground?Vn([b,"foreground"].join(" "),y.foreground,e,t):`var(${a[r].name}, ${a[r].default})`,E=y.background?Vn([b,"background"].join(" "),y.background,e,t):`var(${a[n].name}, ${a[n].default})`;return g[$.foreground]=x,g[$.background]=E,g[$.foregroundInverse]=`var(--${$.background}, ${E})`,g[$.backgroundInverse]=`var(--${$.foreground}, ${x})`,g},{}),c=Yn(l),d={},f={};Fn(t).forEach(([g,b])=>{Lt.isString(g);const y=E1(g),$=c[y.foreground],x=c[y.background],E=c[y.foregroundInverse],N=c[y.backgroundInverse];Lt.isDefined($),Lt.isDefined(x),Lt.isDefined(E),Lt.isDefined(N),d[g]={foreground:$,background:x,init:b,name:g},f[g]={foreground:E,background:N,init:b,name:g}});const h={foreground:a[r],background:a[n],init:e,name:Tr},m={...h,foreground:a[o],background:a[i]};return{colors:{[Tr]:h,...d},inverse:{[Tr]:m,...f},init:{colors:t,default:e},prefix:e.prefix}}catch(r){throw globalThis.setTimeout(()=>v2.error(r)),r}}function E1(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}const u=Yn({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-0":"#f3f6f6","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"});function Nf({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:o}){const i=n?.[t];i&&(o[String(r[t].name)]=String(Vn(t,i,e.init.default,e.init.colors)))}function aP(e,t,{defaultOverride:r,colorOverrides:n}){const o={};r&&ze(r).forEach(l=>{Nf({originalTheme:e,layerKey:l,override:r,themeColor:e.colors[Tr],overrideValues:o})});const i={};n&&Fn(n).forEach(([l,c])=>{const d=e.colors[l];if(!d)throw new Error(`Override color name '${l}' does not exist in the theme being overridden.`);Nf({originalTheme:e,layerKey:"foreground",override:c,themeColor:d,overrideValues:i}),Nf({originalTheme:e,layerKey:"background",override:c,themeColor:d,overrideValues:i})});const s=it(e.init.colors,(l,c)=>{const d=n?.[l];return{...c,...d}}),a=n$({...e.init.default,...r},s);return{name:t,overrides:{...o,...i},originalTheme:e,asTheme:a}}const ce=n$({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:u["vira-red-90"]},"vira-red-foreground-body":{foreground:u["vira-red-80"]},"vira-red-foreground-non-body":{foreground:u["vira-red-60"]},"vira-red-foreground-header":{foreground:u["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:u["vira-red-30"]},"vira-red-foreground-decoration":{foreground:u["vira-red-20"]},"vira-red-foreground-invisible":{foreground:u["vira-red-10"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-red-90"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-red-80"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-red-60"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-red-40"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-red-30"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-red-20"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-red-5"]},"vira-red-behind-fg-small-body":{background:u["vira-red-5"]},"vira-red-behind-fg-body":{background:u["vira-red-20"]},"vira-red-behind-fg-non-body":{background:u["vira-red-30"]},"vira-red-behind-fg-header":{background:u["vira-red-50"]},"vira-red-behind-fg-placeholder":{background:u["vira-red-60"]},"vira-red-behind-fg-decoration":{background:u["vira-red-80"]},"vira-red-behind-fg-invisible":{background:u["vira-red-90"]},"vira-red-on-self-body":{foreground:u["vira-red-90"],background:u["vira-red-10"]},"vira-red-on-self-non-body":{foreground:u["vira-red-90"],background:u["vira-red-20"]},"vira-red-on-self-header":{foreground:u["vira-red-90"],background:u["vira-red-40"]},"vira-red-on-self-placeholder":{foreground:u["vira-red-90"],background:u["vira-red-50"]},"vira-red-on-self-decoration":{foreground:u["vira-red-90"],background:u["vira-red-70"]},"vira-red-on-self-invisible":{foreground:u["vira-red-90"],background:u["vira-red-80"]},"vira-orange-foreground-small-body":{foreground:u["vira-orange-90"]},"vira-orange-foreground-body":{foreground:u["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:u["vira-orange-60"]},"vira-orange-foreground-header":{foreground:u["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:u["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:u["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:u["vira-orange-10"]},"vira-orange-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-orange-90"]},"vira-orange-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-orange-80"]},"vira-orange-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-orange-60"]},"vira-orange-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-orange-40"]},"vira-orange-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-orange-30"]},"vira-orange-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-orange-20"]},"vira-orange-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-orange-5"]},"vira-orange-behind-fg-small-body":{background:u["vira-orange-5"]},"vira-orange-behind-fg-body":{background:u["vira-orange-20"]},"vira-orange-behind-fg-non-body":{background:u["vira-orange-30"]},"vira-orange-behind-fg-header":{background:u["vira-orange-50"]},"vira-orange-behind-fg-placeholder":{background:u["vira-orange-60"]},"vira-orange-behind-fg-decoration":{background:u["vira-orange-80"]},"vira-orange-behind-fg-invisible":{background:u["vira-orange-90"]},"vira-orange-on-self-body":{foreground:u["vira-orange-90"],background:u["vira-orange-10"]},"vira-orange-on-self-non-body":{foreground:u["vira-orange-90"],background:u["vira-orange-20"]},"vira-orange-on-self-header":{foreground:u["vira-orange-90"],background:u["vira-orange-40"]},"vira-orange-on-self-placeholder":{foreground:u["vira-orange-90"],background:u["vira-orange-50"]},"vira-orange-on-self-decoration":{foreground:u["vira-orange-90"],background:u["vira-orange-70"]},"vira-orange-on-self-invisible":{foreground:u["vira-orange-90"],background:u["vira-orange-80"]},"vira-yellow-foreground-small-body":{foreground:u["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:u["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:u["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:u["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:u["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:u["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:u["vira-yellow-5"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-90"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-70"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-60"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-40"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-30"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-20"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-yellow-5"]},"vira-yellow-behind-fg-small-body":{background:u["vira-yellow-5"]},"vira-yellow-behind-fg-body":{background:u["vira-yellow-20"]},"vira-yellow-behind-fg-non-body":{background:u["vira-yellow-30"]},"vira-yellow-behind-fg-header":{background:u["vira-yellow-50"]},"vira-yellow-behind-fg-placeholder":{background:u["vira-yellow-60"]},"vira-yellow-behind-fg-decoration":{background:u["vira-yellow-80"]},"vira-yellow-behind-fg-invisible":{background:u["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:u["vira-yellow-90"],background:u["vira-yellow-10"]},"vira-yellow-on-self-non-body":{foreground:u["vira-yellow-90"],background:u["vira-yellow-20"]},"vira-yellow-on-self-header":{foreground:u["vira-yellow-90"],background:u["vira-yellow-40"]},"vira-yellow-on-self-placeholder":{foreground:u["vira-yellow-90"],background:u["vira-yellow-50"]},"vira-yellow-on-self-decoration":{foreground:u["vira-yellow-90"],background:u["vira-yellow-70"]},"vira-yellow-on-self-invisible":{foreground:u["vira-yellow-90"],background:u["vira-yellow-80"]},"vira-green-foreground-small-body":{foreground:u["vira-green-90"]},"vira-green-foreground-body":{foreground:u["vira-green-80"]},"vira-green-foreground-non-body":{foreground:u["vira-green-60"]},"vira-green-foreground-header":{foreground:u["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:u["vira-green-30"]},"vira-green-foreground-decoration":{foreground:u["vira-green-20"]},"vira-green-foreground-invisible":{foreground:u["vira-green-5"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-green-90"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-green-70"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-green-60"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-green-40"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-green-30"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-green-20"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-green-5"]},"vira-green-behind-fg-small-body":{background:u["vira-green-5"]},"vira-green-behind-fg-body":{background:u["vira-green-20"]},"vira-green-behind-fg-non-body":{background:u["vira-green-30"]},"vira-green-behind-fg-header":{background:u["vira-green-50"]},"vira-green-behind-fg-placeholder":{background:u["vira-green-60"]},"vira-green-behind-fg-decoration":{background:u["vira-green-80"]},"vira-green-behind-fg-invisible":{background:u["vira-green-90"]},"vira-green-on-self-body":{foreground:u["vira-green-90"],background:u["vira-green-10"]},"vira-green-on-self-non-body":{foreground:u["vira-green-90"],background:u["vira-green-20"]},"vira-green-on-self-header":{foreground:u["vira-green-90"],background:u["vira-green-40"]},"vira-green-on-self-placeholder":{foreground:u["vira-green-90"],background:u["vira-green-50"]},"vira-green-on-self-decoration":{foreground:u["vira-green-90"],background:u["vira-green-70"]},"vira-green-on-self-invisible":{foreground:u["vira-green-90"],background:u["vira-green-80"]},"vira-teal-foreground-small-body":{foreground:u["vira-teal-90"]},"vira-teal-foreground-body":{foreground:u["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:u["vira-teal-60"]},"vira-teal-foreground-header":{foreground:u["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:u["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:u["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:u["vira-teal-5"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-teal-90"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-teal-80"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-teal-60"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-teal-40"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-teal-30"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-teal-20"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-teal-5"]},"vira-teal-behind-fg-small-body":{background:u["vira-teal-5"]},"vira-teal-behind-fg-body":{background:u["vira-teal-20"]},"vira-teal-behind-fg-non-body":{background:u["vira-teal-30"]},"vira-teal-behind-fg-header":{background:u["vira-teal-50"]},"vira-teal-behind-fg-placeholder":{background:u["vira-teal-60"]},"vira-teal-behind-fg-decoration":{background:u["vira-teal-80"]},"vira-teal-behind-fg-invisible":{background:u["vira-teal-90"]},"vira-teal-on-self-body":{foreground:u["vira-teal-90"],background:u["vira-teal-10"]},"vira-teal-on-self-non-body":{foreground:u["vira-teal-90"],background:u["vira-teal-20"]},"vira-teal-on-self-header":{foreground:u["vira-teal-90"],background:u["vira-teal-40"]},"vira-teal-on-self-placeholder":{foreground:u["vira-teal-90"],background:u["vira-teal-50"]},"vira-teal-on-self-decoration":{foreground:u["vira-teal-90"],background:u["vira-teal-70"]},"vira-teal-on-self-invisible":{foreground:u["vira-teal-90"],background:u["vira-teal-80"]},"vira-blue-foreground-small-body":{foreground:u["vira-blue-90"]},"vira-blue-foreground-body":{foreground:u["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:u["vira-blue-70"]},"vira-blue-foreground-header":{foreground:u["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:u["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:u["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:u["vira-blue-10"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-blue-90"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-blue-80"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-blue-60"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-blue-40"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-blue-30"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-blue-20"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-blue-5"]},"vira-blue-behind-fg-small-body":{background:u["vira-blue-5"]},"vira-blue-behind-fg-body":{background:u["vira-blue-20"]},"vira-blue-behind-fg-non-body":{background:u["vira-blue-30"]},"vira-blue-behind-fg-header":{background:u["vira-blue-50"]},"vira-blue-behind-fg-placeholder":{background:u["vira-blue-60"]},"vira-blue-behind-fg-decoration":{background:u["vira-blue-80"]},"vira-blue-behind-fg-invisible":{background:u["vira-blue-90"]},"vira-blue-on-self-body":{foreground:u["vira-blue-90"],background:u["vira-blue-10"]},"vira-blue-on-self-non-body":{foreground:u["vira-blue-90"],background:u["vira-blue-20"]},"vira-blue-on-self-header":{foreground:u["vira-blue-90"],background:u["vira-blue-40"]},"vira-blue-on-self-placeholder":{foreground:u["vira-blue-90"],background:u["vira-blue-50"]},"vira-blue-on-self-decoration":{foreground:u["vira-blue-90"],background:u["vira-blue-70"]},"vira-blue-on-self-invisible":{foreground:u["vira-blue-90"],background:u["vira-blue-80"]},"vira-purple-foreground-small-body":{foreground:u["vira-purple-90"]},"vira-purple-foreground-body":{foreground:u["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:u["vira-purple-60"]},"vira-purple-foreground-header":{foreground:u["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:u["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:u["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:u["vira-purple-5"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-purple-90"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-purple-80"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-purple-60"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-purple-40"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-purple-30"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-purple-20"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-purple-5"]},"vira-purple-behind-fg-small-body":{background:u["vira-purple-5"]},"vira-purple-behind-fg-body":{background:u["vira-purple-20"]},"vira-purple-behind-fg-non-body":{background:u["vira-purple-30"]},"vira-purple-behind-fg-header":{background:u["vira-purple-50"]},"vira-purple-behind-fg-placeholder":{background:u["vira-purple-60"]},"vira-purple-behind-fg-decoration":{background:u["vira-purple-80"]},"vira-purple-behind-fg-invisible":{background:u["vira-purple-90"]},"vira-purple-on-self-body":{foreground:u["vira-purple-90"],background:u["vira-purple-10"]},"vira-purple-on-self-non-body":{foreground:u["vira-purple-90"],background:u["vira-purple-20"]},"vira-purple-on-self-header":{foreground:u["vira-purple-90"],background:u["vira-purple-40"]},"vira-purple-on-self-placeholder":{foreground:u["vira-purple-90"],background:u["vira-purple-50"]},"vira-purple-on-self-decoration":{foreground:u["vira-purple-90"],background:u["vira-purple-70"]},"vira-purple-on-self-invisible":{foreground:u["vira-purple-90"],background:u["vira-purple-80"]},"vira-pink-foreground-small-body":{foreground:u["vira-pink-90"]},"vira-pink-foreground-body":{foreground:u["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:u["vira-pink-60"]},"vira-pink-foreground-header":{foreground:u["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:u["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:u["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:u["vira-pink-10"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-pink-90"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-pink-80"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-pink-60"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-pink-40"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-pink-30"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-pink-20"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-pink-5"]},"vira-pink-behind-fg-small-body":{background:u["vira-pink-5"]},"vira-pink-behind-fg-body":{background:u["vira-pink-20"]},"vira-pink-behind-fg-non-body":{background:u["vira-pink-30"]},"vira-pink-behind-fg-header":{background:u["vira-pink-50"]},"vira-pink-behind-fg-placeholder":{background:u["vira-pink-60"]},"vira-pink-behind-fg-decoration":{background:u["vira-pink-80"]},"vira-pink-behind-fg-invisible":{background:u["vira-pink-90"]},"vira-pink-on-self-body":{foreground:u["vira-pink-90"],background:u["vira-pink-10"]},"vira-pink-on-self-non-body":{foreground:u["vira-pink-90"],background:u["vira-pink-20"]},"vira-pink-on-self-header":{foreground:u["vira-pink-90"],background:u["vira-pink-40"]},"vira-pink-on-self-placeholder":{foreground:u["vira-pink-90"],background:u["vira-pink-50"]},"vira-pink-on-self-decoration":{foreground:u["vira-pink-90"],background:u["vira-pink-70"]},"vira-pink-on-self-invisible":{foreground:u["vira-pink-90"],background:u["vira-pink-80"]},"vira-grey-foreground-small-body":{foreground:u["vira-grey-90"]},"vira-grey-foreground-body":{foreground:u["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:u["vira-grey-60"]},"vira-grey-foreground-header":{foreground:u["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:u["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:u["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:u["vira-grey-5"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:u["vira-grey-90"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:u["vira-grey-80"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:u["vira-grey-60"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:u["vira-grey-40"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:u["vira-grey-30"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:u["vira-grey-20"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:u["vira-grey-5"]},"vira-grey-behind-fg-small-body":{background:u["vira-grey-5"]},"vira-grey-behind-fg-body":{background:u["vira-grey-20"]},"vira-grey-behind-fg-non-body":{background:u["vira-grey-30"]},"vira-grey-behind-fg-header":{background:u["vira-grey-50"]},"vira-grey-behind-fg-placeholder":{background:u["vira-grey-60"]},"vira-grey-behind-fg-decoration":{background:u["vira-grey-80"]},"vira-grey-behind-fg-invisible":{background:u["vira-grey-90"]},"vira-grey-on-self-body":{foreground:u["vira-grey-90"],background:u["vira-grey-10"]},"vira-grey-on-self-non-body":{foreground:u["vira-grey-90"],background:u["vira-grey-20"]},"vira-grey-on-self-header":{foreground:u["vira-grey-90"],background:u["vira-grey-40"]},"vira-grey-on-self-placeholder":{foreground:u["vira-grey-90"],background:u["vira-grey-50"]},"vira-grey-on-self-decoration":{foreground:u["vira-grey-90"],background:u["vira-grey-70"]},"vira-grey-on-self-invisible":{foreground:u["vira-grey-90"],background:u["vira-grey-80"]}}),lP=aP(ce,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:u["vira-red-5"]},"vira-red-foreground-body":{foreground:u["vira-red-20"]},"vira-red-foreground-non-body":{foreground:u["vira-red-30"]},"vira-red-foreground-placeholder":{foreground:u["vira-red-60"]},"vira-red-foreground-decoration":{foreground:u["vira-red-80"]},"vira-red-foreground-invisible":{foreground:u["vira-red-90"]},"vira-red-behind-bg-small-body":{background:u["vira-red-5"]},"vira-red-behind-bg-body":{background:u["vira-red-20"]},"vira-red-behind-bg-non-body":{background:u["vira-red-30"]},"vira-red-behind-bg-header":{background:u["vira-red-50"]},"vira-red-behind-bg-placeholder":{background:u["vira-red-60"]},"vira-red-behind-bg-decoration":{background:u["vira-red-80"]},"vira-red-behind-bg-invisible":{background:u["vira-red-90"]},"vira-red-behind-fg-small-body":{background:u["vira-red-90"]},"vira-red-behind-fg-body":{background:u["vira-red-80"]},"vira-red-behind-fg-non-body":{background:u["vira-red-60"]},"vira-red-behind-fg-header":{background:u["vira-red-40"]},"vira-red-behind-fg-placeholder":{background:u["vira-red-30"]},"vira-red-behind-fg-decoration":{background:u["vira-red-20"]},"vira-red-behind-fg-invisible":{background:u["vira-red-5"]},"vira-red-on-self-body":{foreground:u["vira-red-5"],background:u["vira-red-90"]},"vira-red-on-self-non-body":{foreground:u["vira-red-5"],background:u["vira-red-70"]},"vira-red-on-self-header":{foreground:u["vira-red-5"],background:u["vira-red-60"]},"vira-red-on-self-placeholder":{foreground:u["vira-red-5"],background:u["vira-red-40"]},"vira-red-on-self-decoration":{foreground:u["vira-red-5"],background:u["vira-red-30"]},"vira-red-on-self-invisible":{foreground:u["vira-red-5"],background:u["vira-red-10"]},"vira-orange-foreground-small-body":{foreground:u["vira-orange-5"]},"vira-orange-foreground-body":{foreground:u["vira-orange-20"]},"vira-orange-foreground-non-body":{foreground:u["vira-orange-30"]},"vira-orange-foreground-placeholder":{foreground:u["vira-orange-60"]},"vira-orange-foreground-decoration":{foreground:u["vira-orange-80"]},"vira-orange-foreground-invisible":{foreground:u["vira-orange-90"]},"vira-orange-behind-bg-small-body":{background:u["vira-orange-5"]},"vira-orange-behind-bg-body":{background:u["vira-orange-20"]},"vira-orange-behind-bg-non-body":{background:u["vira-orange-30"]},"vira-orange-behind-bg-header":{background:u["vira-orange-50"]},"vira-orange-behind-bg-placeholder":{background:u["vira-orange-60"]},"vira-orange-behind-bg-decoration":{background:u["vira-orange-80"]},"vira-orange-behind-bg-invisible":{background:u["vira-orange-90"]},"vira-orange-behind-fg-small-body":{background:u["vira-orange-90"]},"vira-orange-behind-fg-body":{background:u["vira-orange-80"]},"vira-orange-behind-fg-non-body":{background:u["vira-orange-60"]},"vira-orange-behind-fg-header":{background:u["vira-orange-40"]},"vira-orange-behind-fg-placeholder":{background:u["vira-orange-30"]},"vira-orange-behind-fg-decoration":{background:u["vira-orange-20"]},"vira-orange-behind-fg-invisible":{background:u["vira-orange-5"]},"vira-orange-on-self-body":{foreground:u["vira-orange-5"],background:u["vira-orange-90"]},"vira-orange-on-self-non-body":{foreground:u["vira-orange-5"],background:u["vira-orange-70"]},"vira-orange-on-self-header":{foreground:u["vira-orange-5"],background:u["vira-orange-60"]},"vira-orange-on-self-placeholder":{foreground:u["vira-orange-5"],background:u["vira-orange-40"]},"vira-orange-on-self-decoration":{foreground:u["vira-orange-5"],background:u["vira-orange-30"]},"vira-orange-on-self-invisible":{foreground:u["vira-orange-5"],background:u["vira-orange-10"]},"vira-yellow-foreground-small-body":{foreground:u["vira-yellow-5"]},"vira-yellow-foreground-body":{foreground:u["vira-yellow-20"]},"vira-yellow-foreground-non-body":{foreground:u["vira-yellow-30"]},"vira-yellow-foreground-placeholder":{foreground:u["vira-yellow-60"]},"vira-yellow-foreground-decoration":{foreground:u["vira-yellow-80"]},"vira-yellow-foreground-invisible":{foreground:u["vira-yellow-90"]},"vira-yellow-behind-bg-small-body":{background:u["vira-yellow-5"]},"vira-yellow-behind-bg-body":{background:u["vira-yellow-20"]},"vira-yellow-behind-bg-non-body":{background:u["vira-yellow-30"]},"vira-yellow-behind-bg-header":{background:u["vira-yellow-50"]},"vira-yellow-behind-bg-placeholder":{background:u["vira-yellow-60"]},"vira-yellow-behind-bg-decoration":{background:u["vira-yellow-80"]},"vira-yellow-behind-bg-invisible":{background:u["vira-yellow-90"]},"vira-yellow-behind-fg-small-body":{background:u["vira-yellow-90"]},"vira-yellow-behind-fg-body":{background:u["vira-yellow-70"]},"vira-yellow-behind-fg-non-body":{background:u["vira-yellow-60"]},"vira-yellow-behind-fg-header":{background:u["vira-yellow-40"]},"vira-yellow-behind-fg-placeholder":{background:u["vira-yellow-30"]},"vira-yellow-behind-fg-decoration":{background:u["vira-yellow-20"]},"vira-yellow-behind-fg-invisible":{background:u["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:u["vira-yellow-5"],background:u["vira-yellow-90"]},"vira-yellow-on-self-non-body":{foreground:u["vira-yellow-5"],background:u["vira-yellow-70"]},"vira-yellow-on-self-header":{foreground:u["vira-yellow-5"],background:u["vira-yellow-60"]},"vira-yellow-on-self-placeholder":{foreground:u["vira-yellow-5"],background:u["vira-yellow-40"]},"vira-yellow-on-self-decoration":{foreground:u["vira-yellow-5"],background:u["vira-yellow-30"]},"vira-yellow-on-self-invisible":{foreground:u["vira-yellow-5"],background:u["vira-yellow-10"]},"vira-green-foreground-small-body":{foreground:u["vira-green-5"]},"vira-green-foreground-body":{foreground:u["vira-green-20"]},"vira-green-foreground-non-body":{foreground:u["vira-green-30"]},"vira-green-foreground-placeholder":{foreground:u["vira-green-60"]},"vira-green-foreground-decoration":{foreground:u["vira-green-80"]},"vira-green-foreground-invisible":{foreground:u["vira-green-90"]},"vira-green-behind-bg-small-body":{background:u["vira-green-5"]},"vira-green-behind-bg-body":{background:u["vira-green-20"]},"vira-green-behind-bg-non-body":{background:u["vira-green-30"]},"vira-green-behind-bg-header":{background:u["vira-green-50"]},"vira-green-behind-bg-placeholder":{background:u["vira-green-60"]},"vira-green-behind-bg-decoration":{background:u["vira-green-80"]},"vira-green-behind-bg-invisible":{background:u["vira-green-90"]},"vira-green-behind-fg-small-body":{background:u["vira-green-90"]},"vira-green-behind-fg-body":{background:u["vira-green-70"]},"vira-green-behind-fg-non-body":{background:u["vira-green-60"]},"vira-green-behind-fg-header":{background:u["vira-green-40"]},"vira-green-behind-fg-placeholder":{background:u["vira-green-30"]},"vira-green-behind-fg-decoration":{background:u["vira-green-20"]},"vira-green-behind-fg-invisible":{background:u["vira-green-5"]},"vira-green-on-self-body":{foreground:u["vira-green-5"],background:u["vira-green-90"]},"vira-green-on-self-non-body":{foreground:u["vira-green-5"],background:u["vira-green-70"]},"vira-green-on-self-header":{foreground:u["vira-green-5"],background:u["vira-green-60"]},"vira-green-on-self-placeholder":{foreground:u["vira-green-5"],background:u["vira-green-40"]},"vira-green-on-self-decoration":{foreground:u["vira-green-5"],background:u["vira-green-30"]},"vira-green-on-self-invisible":{foreground:u["vira-green-5"],background:u["vira-green-10"]},"vira-teal-foreground-small-body":{foreground:u["vira-teal-5"]},"vira-teal-foreground-body":{foreground:u["vira-teal-20"]},"vira-teal-foreground-non-body":{foreground:u["vira-teal-30"]},"vira-teal-foreground-placeholder":{foreground:u["vira-teal-60"]},"vira-teal-foreground-decoration":{foreground:u["vira-teal-80"]},"vira-teal-foreground-invisible":{foreground:u["vira-teal-90"]},"vira-teal-behind-bg-small-body":{background:u["vira-teal-5"]},"vira-teal-behind-bg-body":{background:u["vira-teal-20"]},"vira-teal-behind-bg-non-body":{background:u["vira-teal-30"]},"vira-teal-behind-bg-header":{background:u["vira-teal-50"]},"vira-teal-behind-bg-placeholder":{background:u["vira-teal-60"]},"vira-teal-behind-bg-decoration":{background:u["vira-teal-80"]},"vira-teal-behind-bg-invisible":{background:u["vira-teal-90"]},"vira-teal-behind-fg-small-body":{background:u["vira-teal-90"]},"vira-teal-behind-fg-body":{background:u["vira-teal-80"]},"vira-teal-behind-fg-non-body":{background:u["vira-teal-60"]},"vira-teal-behind-fg-header":{background:u["vira-teal-40"]},"vira-teal-behind-fg-placeholder":{background:u["vira-teal-30"]},"vira-teal-behind-fg-decoration":{background:u["vira-teal-20"]},"vira-teal-behind-fg-invisible":{background:u["vira-teal-5"]},"vira-teal-on-self-body":{foreground:u["vira-teal-5"],background:u["vira-teal-90"]},"vira-teal-on-self-non-body":{foreground:u["vira-teal-5"],background:u["vira-teal-70"]},"vira-teal-on-self-header":{foreground:u["vira-teal-5"],background:u["vira-teal-60"]},"vira-teal-on-self-placeholder":{foreground:u["vira-teal-5"],background:u["vira-teal-40"]},"vira-teal-on-self-decoration":{foreground:u["vira-teal-5"],background:u["vira-teal-30"]},"vira-teal-on-self-invisible":{foreground:u["vira-teal-5"],background:u["vira-teal-10"]},"vira-blue-foreground-small-body":{foreground:u["vira-blue-5"]},"vira-blue-foreground-body":{foreground:u["vira-blue-20"]},"vira-blue-foreground-non-body":{foreground:u["vira-blue-30"]},"vira-blue-foreground-placeholder":{foreground:u["vira-blue-60"]},"vira-blue-foreground-decoration":{foreground:u["vira-blue-80"]},"vira-blue-foreground-invisible":{foreground:u["vira-blue-90"]},"vira-blue-behind-bg-small-body":{background:u["vira-blue-5"]},"vira-blue-behind-bg-body":{background:u["vira-blue-20"]},"vira-blue-behind-bg-non-body":{background:u["vira-blue-30"]},"vira-blue-behind-bg-header":{background:u["vira-blue-50"]},"vira-blue-behind-bg-placeholder":{background:u["vira-blue-60"]},"vira-blue-behind-bg-decoration":{background:u["vira-blue-80"]},"vira-blue-behind-bg-invisible":{background:u["vira-blue-90"]},"vira-blue-behind-fg-small-body":{background:u["vira-blue-90"]},"vira-blue-behind-fg-body":{background:u["vira-blue-80"]},"vira-blue-behind-fg-non-body":{background:u["vira-blue-60"]},"vira-blue-behind-fg-header":{background:u["vira-blue-40"]},"vira-blue-behind-fg-placeholder":{background:u["vira-blue-30"]},"vira-blue-behind-fg-decoration":{background:u["vira-blue-20"]},"vira-blue-behind-fg-invisible":{background:u["vira-blue-5"]},"vira-blue-on-self-body":{foreground:u["vira-blue-5"],background:u["vira-blue-90"]},"vira-blue-on-self-non-body":{foreground:u["vira-blue-5"],background:u["vira-blue-70"]},"vira-blue-on-self-header":{foreground:u["vira-blue-5"],background:u["vira-blue-60"]},"vira-blue-on-self-placeholder":{foreground:u["vira-blue-5"],background:u["vira-blue-40"]},"vira-blue-on-self-decoration":{foreground:u["vira-blue-5"],background:u["vira-blue-30"]},"vira-blue-on-self-invisible":{foreground:u["vira-blue-5"],background:u["vira-blue-10"]},"vira-purple-foreground-small-body":{foreground:u["vira-purple-5"]},"vira-purple-foreground-body":{foreground:u["vira-purple-20"]},"vira-purple-foreground-non-body":{foreground:u["vira-purple-30"]},"vira-purple-foreground-placeholder":{foreground:u["vira-purple-60"]},"vira-purple-foreground-decoration":{foreground:u["vira-purple-80"]},"vira-purple-foreground-invisible":{foreground:u["vira-purple-90"]},"vira-purple-behind-bg-small-body":{background:u["vira-purple-5"]},"vira-purple-behind-bg-body":{background:u["vira-purple-20"]},"vira-purple-behind-bg-non-body":{background:u["vira-purple-30"]},"vira-purple-behind-bg-header":{background:u["vira-purple-50"]},"vira-purple-behind-bg-placeholder":{background:u["vira-purple-60"]},"vira-purple-behind-bg-decoration":{background:u["vira-purple-80"]},"vira-purple-behind-bg-invisible":{background:u["vira-purple-90"]},"vira-purple-behind-fg-small-body":{background:u["vira-purple-90"]},"vira-purple-behind-fg-body":{background:u["vira-purple-80"]},"vira-purple-behind-fg-non-body":{background:u["vira-purple-60"]},"vira-purple-behind-fg-header":{background:u["vira-purple-40"]},"vira-purple-behind-fg-placeholder":{background:u["vira-purple-30"]},"vira-purple-behind-fg-decoration":{background:u["vira-purple-20"]},"vira-purple-behind-fg-invisible":{background:u["vira-purple-5"]},"vira-purple-on-self-body":{foreground:u["vira-purple-5"],background:u["vira-purple-90"]},"vira-purple-on-self-non-body":{foreground:u["vira-purple-5"],background:u["vira-purple-70"]},"vira-purple-on-self-header":{foreground:u["vira-purple-5"],background:u["vira-purple-60"]},"vira-purple-on-self-placeholder":{foreground:u["vira-purple-5"],background:u["vira-purple-40"]},"vira-purple-on-self-decoration":{foreground:u["vira-purple-5"],background:u["vira-purple-30"]},"vira-purple-on-self-invisible":{foreground:u["vira-purple-5"],background:u["vira-purple-10"]},"vira-pink-foreground-small-body":{foreground:u["vira-pink-5"]},"vira-pink-foreground-body":{foreground:u["vira-pink-20"]},"vira-pink-foreground-non-body":{foreground:u["vira-pink-30"]},"vira-pink-foreground-placeholder":{foreground:u["vira-pink-60"]},"vira-pink-foreground-decoration":{foreground:u["vira-pink-80"]},"vira-pink-foreground-invisible":{foreground:u["vira-pink-90"]},"vira-pink-behind-bg-small-body":{background:u["vira-pink-5"]},"vira-pink-behind-bg-body":{background:u["vira-pink-20"]},"vira-pink-behind-bg-non-body":{background:u["vira-pink-30"]},"vira-pink-behind-bg-header":{background:u["vira-pink-50"]},"vira-pink-behind-bg-placeholder":{background:u["vira-pink-60"]},"vira-pink-behind-bg-decoration":{background:u["vira-pink-80"]},"vira-pink-behind-bg-invisible":{background:u["vira-pink-90"]},"vira-pink-behind-fg-small-body":{background:u["vira-pink-90"]},"vira-pink-behind-fg-body":{background:u["vira-pink-80"]},"vira-pink-behind-fg-non-body":{background:u["vira-pink-60"]},"vira-pink-behind-fg-header":{background:u["vira-pink-40"]},"vira-pink-behind-fg-placeholder":{background:u["vira-pink-30"]},"vira-pink-behind-fg-decoration":{background:u["vira-pink-20"]},"vira-pink-behind-fg-invisible":{background:u["vira-pink-5"]},"vira-pink-on-self-body":{foreground:u["vira-pink-5"],background:u["vira-pink-90"]},"vira-pink-on-self-non-body":{foreground:u["vira-pink-5"],background:u["vira-pink-70"]},"vira-pink-on-self-header":{foreground:u["vira-pink-5"],background:u["vira-pink-60"]},"vira-pink-on-self-placeholder":{foreground:u["vira-pink-5"],background:u["vira-pink-40"]},"vira-pink-on-self-decoration":{foreground:u["vira-pink-5"],background:u["vira-pink-30"]},"vira-pink-on-self-invisible":{foreground:u["vira-pink-5"],background:u["vira-pink-10"]},"vira-grey-foreground-small-body":{foreground:u["vira-grey-5"]},"vira-grey-foreground-body":{foreground:u["vira-grey-20"]},"vira-grey-foreground-non-body":{foreground:u["vira-grey-30"]},"vira-grey-foreground-placeholder":{foreground:u["vira-grey-60"]},"vira-grey-foreground-decoration":{foreground:u["vira-grey-80"]},"vira-grey-foreground-invisible":{foreground:u["vira-grey-90"]},"vira-grey-behind-bg-small-body":{background:u["vira-grey-5"]},"vira-grey-behind-bg-body":{background:u["vira-grey-20"]},"vira-grey-behind-bg-non-body":{background:u["vira-grey-30"]},"vira-grey-behind-bg-header":{background:u["vira-grey-50"]},"vira-grey-behind-bg-placeholder":{background:u["vira-grey-60"]},"vira-grey-behind-bg-decoration":{background:u["vira-grey-80"]},"vira-grey-behind-bg-invisible":{background:u["vira-grey-90"]},"vira-grey-behind-fg-small-body":{background:u["vira-grey-90"]},"vira-grey-behind-fg-body":{background:u["vira-grey-80"]},"vira-grey-behind-fg-non-body":{background:u["vira-grey-60"]},"vira-grey-behind-fg-header":{background:u["vira-grey-40"]},"vira-grey-behind-fg-placeholder":{background:u["vira-grey-30"]},"vira-grey-behind-fg-decoration":{background:u["vira-grey-20"]},"vira-grey-behind-fg-invisible":{background:u["vira-grey-5"]},"vira-grey-on-self-body":{foreground:u["vira-grey-5"],background:u["vira-grey-90"]},"vira-grey-on-self-non-body":{foreground:u["vira-grey-5"],background:u["vira-grey-70"]},"vira-grey-on-self-header":{foreground:u["vira-grey-5"],background:u["vira-grey-60"]},"vira-grey-on-self-placeholder":{foreground:u["vira-grey-5"],background:u["vira-grey-40"]},"vira-grey-on-self-decoration":{foreground:u["vira-grey-5"],background:u["vira-grey-30"]},"vira-grey-on-self-invisible":{foreground:u["vira-grey-5"],background:u["vira-grey-10"]}}}),C1="8px",P=Yn({"vira-form-border-color":ce.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":ce.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":ce.colors[Tr].background.value,"vira-form-foreground-color":ce.colors[Tr].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":ce.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":ce.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":ce.colors["vira-blue-behind-bg-invisible"].background.value,"vira-form-selection-active-color":ce.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-error-color":ce.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":ce.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":ce.colors["vira-red-behind-bg-body"].background.value,"vira-form-success-color":ce.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":C1,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":ce.colors["vira-blue-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":A`calc(var(--vira-form-radius, ${ke(C1)}) + 2px)`,"vira-form-plain-color":u["vira-grey-0"].value,"vira-form-plain-hover-color":ce.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":ce.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":ce.colors["vira-blue-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":ce.colors["vira-blue-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":ce.colors["vira-blue-behind-bg-body"].background.value,"vira-form-danger-color":ce.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":ce.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":ce.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":ce.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":ce.colors["vira-grey-foreground-decoration"].foreground.value}),na=A`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,wo=Yn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function eu({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const o=ke(fl(r+t+e)),i=A`
        content: '';
        top: calc(${o} * -1);
        left: calc(${o} * -1);
        position: absolute;
        width: calc(100% + calc(${o} * 2));
        height: calc(100% + calc(${o} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${P["vira-form-focus-outline-color"].value};
        border-radius: ${P["vira-form-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?i:A`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${i}
        }
    `}const gg=Yn({"vira-monospace":"monospace"});function S1(e){if(typeof e=="string")return uP(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function uP(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let l={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(d){for(let f=0;f<3;f++)n[f]=parseInt(d[f+1],16);return n[3]=1,!0}},c=l.rex.exec(s[a]);return n[4]=t=l.sprig(c),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,l=0,c=10,d=100,f=2.55,h="1";s[23]&&(h=s[23],delete s[23]),n[3]=h.match(/%/g)?parseFloat(h)/d:parseFloat(h);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,l=m);switch(l){case 4:c=16,d=15,n[3]=parseInt(s[l],c)/d;case 3:c=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],c);break;case 5:c=16;case 9:n[0]=n[1]=n[2]=c==10?parseFloat(s[l]):parseInt(s[l],c);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[l])*f;break;case 8:c=16,d=255,n[3]=parseInt(s[8],c)/d;case 7:c=16;case 11:for(let m=0;m<3;m++)n[m]=c==10?parseFloat(s[a+m]):parseInt(s[a+m],c);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*f;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/d:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let E=function(N){let B=(N+x/30)%12,Z=m*Math.min(g,1-g);return g-Z*Math.max(-1,Math.min(B-3,9-B,1))},m,g,b,y,$,x=n[0]%360;if(x<0&&(x+=360),n[5].match(/^hsla?/i))m=n[1],g=n[2],b=0,$=1;else if(n[5].match(/^hwba?/i)){if(b=n[1],y=n[2],b+y>=1){n[0]=n[1]=n[2]=b/(b+y),n[5]="sRGB";break}m=1,g=.5,$=1-b-y}n[0]=Math.round(255*(E(0)*$+b)),n[1]=Math.round(255*(E(8)*$+b)),n[2]=Math.round(255*(E(4)*$+b)),n[5]="sRGB"}break}return!0}},i=o.rex.exec(e);return i?(n[4]=t=o.parsley(i),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const kt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function cP(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let o=0,i=0,s="BoW";return e=e>kt.blkThrs?e:e+Math.pow(kt.blkThrs-e,kt.blkClmp),t=t>kt.blkThrs?t:t+Math.pow(kt.blkThrs-t,kt.blkClmp),Math.abs(t-e)<kt.deltaYmin?0:(t>e?(o=(Math.pow(t,kt.normBG)-Math.pow(e,kt.normTXT))*kt.scaleBoW,i=o<kt.loClip?0:o-kt.loBoWoffset):(s="WoB",o=(Math.pow(t,kt.revBG)-Math.pow(e,kt.revTXT))*kt.scaleWoB,i=o>-.1?0:o+kt.loWoBoffset),r<0?i*100:r==0?Math.round(Math.abs(i)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(i*100).toFixed(r):0)}function dP(e,t,r=-1,n=!0){let o=S1(t),i=S1(e);return!(i[3]==""||i[3]==1)&&(i=hP(i,o,n)),cP(M1(i),M1(o),r)}function fP(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],i=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const l=.2,c=e==0?1:e*l|0;let d=0,f=(e-r[c][d])*l;for(d++;d<i;d++)a=r[c][d],a>400?s[d]=a:e<14.5?s[d]=999:e<29.5?s[d]=777:a>24?s[d]=Math.round(a-n[c][d]*f):s[d]=a-(2*n[c][d]*f|0)*.5;return s}function M1(e=[0,0,0]){function t(r){return Math.pow(r/255,kt.mainTRC)}return kt.sRco*t(e[0])+kt.sGco*t(e[1])+kt.sBco*t(e[2])}function hP(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let i=0;i<3;i++)o[i]=t[i]*n+e[i]*e[3],r&&(o[i]=Math.min(Math.round(o[i]),255));return o}const o$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};it(o$,e=>e);Object.fromEntries(Object.entries(o$).map(([e,t])=>[t,e]));const F1=new Map;function mP({background:e,foreground:t}){const r=`${t}|${e}`,n=F1.get(r);if(n)return n;const o=w2(Number(dP(t,e)),{digits:1}),i={contrast:o,fontSizes:gP(o),contrastLevel:pP(o)};return F1.set(r,i),i}function gP(e){const t=fP(e).slice(1);return Xo(t,(n,o)=>({key:(o+1)*100,value:n}))}function pP(e){return pt.isDefined(Ad.find(t=>t.min<=Math.abs(e)))}var fe;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(fe||(fe={}));const bP={[fe.SmallBodyText]:"Small Text",[fe.BodyText]:"Body Text",[fe.NonBodyText]:"Non-body Text",[fe.Header]:"Header",[fe.Placeholder]:"Placeholder",[fe.Decoration]:"Decoration",[fe.Invisible]:"Invisible"};fe.SmallBodyText,fe.BodyText,fe.NonBodyText,fe.Header,fe.Placeholder,fe.Decoration,fe.Invisible;const Ad=[{min:90,name:fe.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:fe.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:fe.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:fe.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:fe.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:fe.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:fe.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Xo(Ad,e=>({key:e.min,value:e}));Xo(Ad,e=>({key:e.name,value:e}));const yP=qr(fe).sort((e,t)=>Number(t.includes("-"))-Number(e.includes("-"))),vP=Pc(Rn(Object.keys(ce.colors),e=>e.split("-")[1],e=>e!=="default")).filter(S.isTruthy),Ds=Xo(vP,e=>({key:e,value:e}),{}),wP=ze(ce.colors),cr=g2(Ds,e=>{const t=Pc(Rn(wP,r=>yP.reduce((n,o)=>qh({value:n,suffix:`-${o}`}),Oi({value:r,prefix:`vira-${e}-`})),(r,n)=>n.startsWith(`vira-${e}-`)));return Xo(t,r=>({key:r,value:Xo(qr(fe),n=>{const o=`vira-${e}-${r}-${n}`;if(S.hasKey(ce.colors,o))return{key:n,value:ce.colors[o]}})}))});var cn=(e=>(e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none",e))(cn||{});const T1={accent:Ds.blue,neutral:Ds.grey,danger:Ds.red,warning:Ds.orange,positive:Ds.green},N1=["accent","plain","neutral","danger","warning","positive"];var Ai=(e=>(e.Large="large",e.Medium="medium",e.Small="small",e.None="none",e))(Ai||{});const $P=["small","medium","large"];var zo=(e=>(e.Standard="standard",e.Subtle="subtle",e.None="none",e))(zo||{});const kP=["standard","subtle"],Pf={large:40,medium:32,small:24},tu=A`
    padding: 0;
    margin: 0;
`,Bt=A`
    ${tu};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,If=Yn({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Ri={menuShadow:A`
        filter: drop-shadow(0px 5px 5px ${If["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:A`
        filter: drop-shadow(0px -5px 5px ${If["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:A`
        box-shadow: 0 5px 15px ${If["modal-shadow-color"].value};
    `},ni=A`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,P1="vira-",tt=W5({assertInputs:e=>{if(!e.tagName.startsWith(P1))throw new Error(`Tag name should start with '${P1}' but got '${e.tagName}'`)}}),O=tt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Zo=tt()({tagName:"vira-menu-item",state(){return{cleanup:void 0}},hostClasses:{"vira-menu-item-selected":({inputs:e})=>!!e.selected||!!e.iconOverride,"vira-menu-item-disabled":({inputs:e})=>!!e.disabled,"vira-menu-item-enabled":({inputs:e})=>!e.disabled,"vira-menu-item-default-icon":({inputs:e})=>!e.iconOverride,"vira-menu-item-default-styles":({inputs:e})=>!e.disablePointerStyles},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            ${ni};
            box-sizing: border-box;
            max-width: 100%;
            gap: 1px;
            overflow: hidden;
            padding: 8px 3px;
            padding-right: 16px;
            align-items: center;
            text-align: left;
        }

        ${e["vira-menu-item-disabled"].selector}${e["vira-menu-item-default-styles"].selector} {
            cursor: not-allowed;

            & .slot-wrapper,
            & ${O} {
                opacity: 0.3;
                pointer-events: none;
            }
        }

        ${e["vira-menu-item-enabled"].selector}${e["vira-menu-item-default-styles"].selector} {
            cursor: pointer;

            &:host(:focus) {
                background-color: ${P["vira-form-selection-hover-color"].value};
                outline: none;
            }

            &:host(:active) {
                background-color: ${P["vira-form-selection-active-color"].value};
                outline: none;
            }
        }

        ${e["vira-menu-item-default-icon"].selector} {
            ${O} {
                visibility: hidden;
            }
        }

        ${e["vira-menu-item-selected"].selector} ${O} {
            visibility: visible;
        }

        .slot-wrapper {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
        }
    `,init({state:e,updateState:t,host:r,inputs:n}){r.setAttribute("role","menuitem"),r.setAttribute("tabindex",n.disabled?"-1":"0"),r.setAttribute("aria-selected",String(!!n.selected)),r.setAttribute("aria-disabled",String(!!n.disabled)),e.cleanup?.();const o={};function i(a){if(o[a.type])return;if(n.disabled){a.preventDefault(),a.stopPropagation();return}pt.instanceOf(r.shadowRoot.querySelector("slot"),HTMLSlotElement).assignedElements({flatten:!0}).forEach(c=>{c instanceof HTMLElement&&!a.composedPath().includes(c)&&(a.preventDefault(),a.stopPropagation(),o[a.type]=!0,c.dispatchEvent(new MouseEvent(a.type,a)),delete o[a.type])})}const s=[go(r,"click",i),go(r,"mousedown",i),go(r,"mouseenter",()=>{n.disabled||r.focus()}),go(r,"mouseleave",()=>{n.disabled||r.blur()})];t({cleanup:()=>{s.forEach(a=>a())}})},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({inputs:e}){return p`
            <${O.assign({icon:e.iconOverride||mg})}></${O}>
            <div class="slot-wrapper">
                <slot>&nbsp;</slot>
            </div>
        `}});var i$=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(i$||{}),Sl=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Sl||{});const Li=tt()({tagName:"vira-menu",hostClasses:{"vira-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            overscroll-behavior: contain;
            border-radius: ${P["vira-form-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${P["vira-form-background-color"].value};
            border: 1px solid ${P["vira-form-border-color"].value};
            color: ${P["vira-form-foreground-color"].value};
            ${Ri.menuShadow}
        }

        ${e["vira-menu-open-upwards"].selector} {
            ${Ri.menuShadowReversed}
            border-radius: ${P["vira-form-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-menu-rounded"].selector} {
            border-radius: ${P["vira-form-radius"].value};
        }
    `,render(){return p`
            <slot>&nbsp;</slot>
        `}});function xP(e,t){return e>t}function DP(e,t){return e<t}function Ml(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var Hn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Hn||(Hn={}));var Oe;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Oe||(Oe={}));function Ed(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const o=n[t.x];if(o)if(o.navEntry.navParams.group){const i=Ed(o.children);i&&(r=i.node)}else o.navEntry.navParams.disabled||(r=o)}}if(r)return{node:r,coords:t}}function I1(e,t,r,n){if(!t){const l=Ed(e.children);return l?(Ml(l.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.node.element,coords:l.coords,direction:r,navAction:Oe.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Oe.Navigate}}const{nextNode:o,requiresWrapping:i,coords:s}=s$(t.position,r),a=n?!0:!i;return o&&a?(Ml(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:i,direction:r,navAction:Oe.Navigate,coords:s}):o?a?{success:!1,reason:"no conditions matched",direction:r,navAction:Oe.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Oe.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Oe.Navigate}}function s$(e,t){let r=!1,n,o=1;const i=Date.now();for(;!r||!n;)if(n=AP(e,t,o),r=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-i>1e3)return v2.warning("Failed to find next non-disabled node."),n;return n}function AP(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Lt.isDefined(n,"missing parent");const o=pt.isDefined(n.children[e.nodeCoords.y]),i=n.children.length>1&&(t===Hn.Down||t===Hn.Up),s=t===Hn.Down||t===Hn.Right?r:-1*r,a=s<0?xP:DP,l=i?Op(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,c=pt.isDefined(n.children[l]),d=i?e.nodeCoords.x>=c.length?c.length-1:e.nodeCoords.x:Op(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),f=n.children[l]?.[d],h=i?a(l,e.nodeCoords.y):a(d,e.nodeCoords.x);return{nextNode:f,requiresWrapping:h,coords:{x:d,y:l}}}function EP(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Oe.Pibling};const{nextNode:o,requiresWrapping:i,coords:s}=s$(n,t),a=o?.navEntry.navParams.group?Ed(o.children):{node:o,coords:s},l=r?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Oe.Pibling}:l?(Ml(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:Oe.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Oe.Pibling}}var ao;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(ao||(ao={}));const Of={name:"data-nav"},a$="navEntry";function CP(e){return a$ in e}function SP(e){if(CP(e)){const t=e[a$];return pt.instanceOf(t,FP,"Invalid nav entry")}else return}function MP(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==ao.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class FP{element;navParams;navTreeNode;navValue;eventListener=MP(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Lt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Of.name,""),Ff(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,o=t===(n===ao.Focused);if(!(this.navParams.group||this.navController.locked||o||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(ao.Focused),Ff(this.element)||this.element.focus()):(this.removeNavValue(ao.Focused),Ff(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Oe.Focus)}activate(t){const r=this.navValue,n=t===(r===ao.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(ao.Active):this.setNavValue(ao.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Oe.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Of.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Of.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function TP(e,t){Object.entries(t).forEach(([r,n])=>{S.isBoolean(n)&&n?e.setAttribute(r,""):S.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}function NP(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Oe.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Oe.Enter};const r=t.position.node.children[0]?.[0];return r?(Ml(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Oe.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Oe.Enter}}function PP(e,t){return l$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function l$(e,t,r){for(let n=0;n<t.length;n++){const o=t[n];for(let i=0;i<o.length;i++){const s=o[i],a={ancestorChain:e,nodeCoords:{x:i,y:n},node:s};if(r(a))return a;const l=l$(e.concat(a),s.children,r);if(l)return l}}}function u$(e,t){const r=PP(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function IP(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Oe.Exit};const r=t.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Oe.Exit};const{nodeCoords:n}=u$(e,r.navEntry);return Ml(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Oe.Exit,coords:n}}class OP extends Ln()("nav-exit"){}class c$ extends Ln()("nav-activate"){}class BP extends Ln()("nav-focus"){}class RP extends Ln()("nav-enter"){}class LP extends Ln()("nav-navigate"){}class jP extends Ln()("nav-navigate-pibling"){}function _P(e){return{root:!0,children:d$(e)?.children||[]}}function d$(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=SP(t),n=UP(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function UP(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(l=>r(l)));return}const o=n.navEntry.navParams.x,i=n.navEntry.navParams.y||0,s=es(t,i,()=>({noX:[],withX:[],y:i}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return e.children.forEach(n=>{const o=d$(n);o&&r(o)}),t.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,i)=>o.x-i.x),n.withX.forEach(({x:o,node:i})=>{n.noX.splice(o,0,i)}),n.noX)).filter(S.isTruthy)}class zP extends Wh{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Ed(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=u$(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:o}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const i={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return r&&(n===Oe.Activate?this.dispatch(new c$({detail:i})):n===Oe.Focus&&this.dispatch(new BP({detail:i}))),i}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Oe.Navigate,reason:"NavController is locked."};const n=I1(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new LP({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Oe.Enter,reason:"NavController is locked."};const r=NP(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new RP({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Oe.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Oe.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Lt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Oe.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Oe.Activate&&this.currentNavEntry.entry.focus(!0);const t=IP(this.getNavTree(),this.currentNavEntry);return this.dispatch(new OP({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Oe.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),i={...this.currentNavEntry?EP(this.currentNavEntry,r,t):I1(n,void 0,r,t),navAction:Oe.Pibling};return this.dispatch(new jP({detail:i})),i}buildNavTree(){const t=LN(this.rootElement),r=_P(t);return this.cachedNavTree=r,r}}function O1({open:e,callback:t,popUpManager:r,host:n,options:o}){if(e){const i=r.showPopUp(n,o);t?.(i)}else r.removePopUp(),t?.(void 0)}function f$(e){return e.map((t,r)=>p`
            <${Zo.assign({...t})}
                ${_("click",async n=>{await t.onClick?.({event:n,index:r})})}
            >
                ${t.content}
            </${Zo}>
        `)}const Cu=globalThis.document;class qP extends I5{constructor(){if(super({defaultValue:!!Cu?.hidden,equalityCheck:S.strictEquals}),!Cu)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,Cu));const t=r=>this.updateVisibility(r,Cu);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=WP.includes(t.type),o=VP.includes(t.type),i=n?!0:o?!1:r.hasFocus()||!r.hidden;this.setValue(i)}}const VP=["blur","focusout","pagehide"],WP=["focus","focusin","pageshow"],KP=new qP;function GP(e,t){return KP.listen(e,t)}function lh(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const B1={top:0,left:0,right:0,bottom:0};class h$ extends Vh("hide-pop-up"){}class m$ extends Ln()("nav-select"){}class HP{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new Wh;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[GP(!1,t=>{t||this.removePopUp()}),this.navController.listen(c$,t=>{const r=t.composedPath()[0];r instanceof Element&&lh(r)||t.detail.success&&(this.listenTarget.dispatch(new m$({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),P0("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),P0("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&lh(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Hn.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Hn.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Hn.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Hn.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new h$)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},o=_N(t);Lt.instanceOf(o,HTMLElement);const i=t.getBoundingClientRect(),s=o.getBoundingClientRect(),a=o.offsetWidth-o.clientWidth,l=o.offsetHeight-o.clientHeight,c=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-l},d=it(B1,g=>i[g]),f=it(B1,g=>{const b=c[g],y=d[g];return Math.abs(b-y)}),h=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace,m=f.left>f.right+n.horizontalDiffThreshold&&f.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!h,popRight:!m,positions:{container:c,root:d,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var ji=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(ji||{});const de=tt()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new HP(new zP(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Bt};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${eu({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${ni};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${na}
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
    `,events:{navSelect:et(),openChange:et(),init:et()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:o,events:i}){e.popUpManager.listen(h$,()=>{if(t({showPopUpResult:void 0}),o(new i.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Lt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(m$,s=>{n.keepOpenAfterInteraction||O1({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),o(new i.navSelect(s.detail))}),o(new i.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:o,host:i,slotNames:s}){function a({emitEvent:g,open:b},y){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&y){const $=i.shadowRoot.querySelector(".dropdown-trigger");if($&&!y.composedPath().includes($))return}O1({open:b,callback($){o({showPopUpResult:$}),g&&e(new t.openChange($))},host:i,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const l=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,c=l==="right"&&r.showPopUpResult?n.ignoreMaxWidth?A`
                          left: unset;
                      `:A`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:A`
                      left: ${n.popUpOffset?.left||0}px;
                  `,d=r.showPopUpResult&&l==="left"?n.ignoreMaxWidth?A`
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
                    `:void 0;function m(g){a({emitEvent:!0,open:!r.showPopUpResult},g)}return p`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${xr({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${_("keydown",g=>{!r.showPopUpResult&&g.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},g)})}
                ${_("click",g=>{if(g.detail===0){let b=!1;if(UN(({element:y})=>lh(y)?(b=!0,!0):!1),b)return;m(g)}else if(g.button===0&&r.showPopUpResult){const b=i.shadowRoot.querySelector(".dropdown-trigger");b&&!g.composedPath().includes(b)&&a({emitEvent:!0,open:!1},g)}})}
                ${_("mousedown",g=>{if(g.button!==0)return;const b=pt.instanceOf(i.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);g.composedPath().includes(b)&&m(g)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${xr({"right-aligned":l==="right"})}"
                    style=${h}
                >
                    ${Or(!!r.showPopUpResult,p`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),Su=tt()({tagName:"vira-menu-trigger",slotNames:["trigger"],styles:A`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${de} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{openChange:et()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:o,slotNames:i}){return p`
            <${de.assign({...e})}
                class=${xr({open:!!t.showPopUpResult})}
                ${_(de.events.init,s=>{r({navController:s.detail.navController,popUpManager:s.detail.popUpManager})})}
                ${_(de.events.openChange,s=>{!!t.showPopUpResult!=!!s.detail&&n(new o.openChange(s.detail)),r({showPopUpResult:s.detail})})}
            >
                <slot name=${i.trigger} slot=${de.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?p`
                          <${Li.assign({direction:t.showPopUpResult.popDown?Sl.Downwards:Sl.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${de.slotNames.popUp}
                              class=${xr({"full-width-menu":e.horizontalAnchor===ji.Both})}
                          >
                              <slot></slot>
                          </${Li}>
                      `:te}
            </${de}>
        `}}),mt=tt()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>A`
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
        `}});var Kn=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e.Danger="vira-button-danger",e.DangerOutline="vira-button-danger-outline",e.Ghost="vira-button-ghost",e.Plain="vira-button-plain",e))(Kn||{});const at=tt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline"||e.buttonStyle==="vira-button-danger-outline","vira-button-danger-style":({inputs:e})=>e.buttonStyle==="vira-button-danger"||e.buttonStyle==="vira-button-danger-outline","vira-button-ghost-style":({inputs:e})=>e.buttonStyle==="vira-button-ghost","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon,"vira-button-icon-only":({inputs:e})=>!!e.icon&&!e.text,"vira-button-plain-style":({inputs:e})=>e.buttonStyle==="vira-button-plain","vira-button-default-style":({inputs:e})=>!e.buttonStyle||e.buttonStyle==="vira-button-default"},cssVars:{"vira-button-padding":"5px 10px","vira-button-internal-foreground-color":P["vira-form-background-color"].value,"vira-button-internal-background-color":P["vira-form-accent-primary-color"].value,"vira-button-border-color":"transparent"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ni};
            ${P["vira-form-focus-outline-color"].name}: ${P["vira-form-accent-primary-hover-color"].value}
        }

        ${e["vira-button-icon-only"].selector} {
            ${t["vira-button-padding"].name}: 5px;
        }

        ${e["vira-button-disabled"].selector} {
            ${na};
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${P["vira-form-accent-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${P["vira-form-accent-primary-active-color"].value};
        }

        ${e["vira-button-danger-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${P["vira-form-error-color"].value};
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${P["vira-form-error-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${P["vira-form-error-active-color"].value};
            }
        }

        ${e["vira-button-ghost-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: transparent;
                ${t["vira-button-internal-foreground-color"].name}: currentColor;
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${P["vira-form-filled-background-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${P["vira-form-filled-active-background-color"].value};
            }
        }

        ${e["vira-button-plain-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${P["vira-form-plain-color"].value};
                color: currentColor;
                ${t["vira-button-border-color"].name}: ${P["vira-form-plain-active-color"].value};
                border-width: 1px;
            }
            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${P["vira-form-plain-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${P["vira-form-plain-active-color"].value};
            }
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: ${t["vira-button-internal-foreground-color"].value};
            ${t["vira-button-border-color"].name}: currentColor;
        }

        button {
            ${Bt};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid ${t["vira-button-border-color"].value};
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${P["vira-form-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${wo["vira-interaction-animation-duration"].value},
                background-color
                    ${wo["vira-interaction-animation-duration"].value},
                border-color ${wo["vira-interaction-animation-duration"].value};

            ${eu({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${O} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${O} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?p`
                  <${O.assign({icon:e.icon})}></${O}>
              `:te,r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:p`
                  <span class="empty-text">&nbsp;</span>
              `;return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var uh=(e=>(e.Error="error",e.Success="success",e))(uh||{});const Bf=tt()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":A`1px solid ${P["vira-form-border-color"].value}`,"vira-card-padding":P["vira-form-wrapper-radius"].value},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${P["vira-form-wrapper-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${P["vira-form-error-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${P["vira-form-success-color"].value};
        }
    `,render(){return p`
            <slot></slot>
        `}}),ZP=re({name:"ArrowDown24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M12 5v14m0 0-7-7m7 7 7-7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),JP=re({name:"ArrowLeft24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M19 12H5m0 0 7-7m-7 7 7 7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),YP=re({name:"ArrowRight24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M5 12h14m0 0-7-7m7 7-7 7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),XP=re({name:"ArrowUp24Icon",svgTemplate:p`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),QP=re({name:"AutoTheme24Icon",svgTemplate:p`
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
                fill=${v["vira-icon-stroke-color"].value}
                stroke="none"
                style="fill-rule:nonzero"
            />
            <path
                d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 0v16"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),eI=re({name:"Bell24Icon",svgTemplate:p`
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
    `}),tI=re({name:"Chat24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),g$=re({name:"Check16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),rI=re({name:"ChevronDown24Icon",svgTemplate:p`
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
    `}),Cd=re({name:"ChevronUp24Icon",svgTemplate:p`
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
    `}),p$=re({name:"CloseX16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),b$=re({name:"CloseX24Icon",svgTemplate:p`
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
    `}),nI=re({name:"Commit24Icon",svgTemplate:p`
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
    `}),ch=re({name:"Copy24Icon",svgTemplate:p`
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
    `}),oI=re({name:"Document24Icon",svgTemplate:p`
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
    `}),iI=re({name:"DocumentSearch24Icon",svgTemplate:p`
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
    `}),sI=re({name:"DoubleChevron24Icon",svgTemplate:p`
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
    `}),y$=re({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Rt=re({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),aI=re({name:"ExternalLink24Icon",svgTemplate:p`
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
    `}),v$=re({name:"EyeClosed24Icon",svgTemplate:p`
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
    `}),w$=re({name:"EyeOpen24Icon",svgTemplate:p`
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
    `}),lI=re({name:"Filter24Icon",svgTemplate:p`
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
    `}),uI=re({name:"Globe24Icon",svgTemplate:p`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9H3m9 9c-5 0-9-4-9-9m9 9q3.5-3.9 3.6-9 0-5.1-3.6-9m0 18a14 14 0 0 1-3.6-9q0-5.1 3.6-9m-9 9c0-5 4-9 9-9"
                style="fill-rule:nonzero;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),cI=re({name:"Link24Icon",svgTemplate:p`
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
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),$$=re({name:"Loader24Icon",svgTemplate:p`
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
    `}),dI=A`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${wo["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ji=re({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${dI}
        </style>
        ${$$.svgTemplate}
    `}),fI=re({name:"Lock24Icon",svgTemplate:p`
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
    `}),hI=re({name:"MagnifyingGlass24Icon",svgTemplate:p`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),mI=re({name:"Moon24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${v["vira-icon-stroke-color"].value}
            stroke-width=${v["vira-icon-stroke-width"].value}
            fill=${v["vira-icon-fill-color"].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `}),Rs=re({name:"Options24Icon",svgTemplate:p`
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
    `}),gI=re({name:"Pencil24Icon",svgTemplate:p`
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
    `}),pI=re({name:"Printer24Icon",svgTemplate:p`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),bI=re({name:"Shield24Icon",svgTemplate:p`
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
    `}),yI=re({name:"SortAscending24Icon",svgTemplate:p`
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
    `}),vI=re({name:"SortDescending24Icon",svgTemplate:p`
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
    `}),wI=re({name:"Sparkle24Icon",svgTemplate:p`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$I=re({name:"SpeakerLoud24Icon",svgTemplate:p`
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
    `}),kI=re({name:"SpeakerMedium24Icon",svgTemplate:p`
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
    `}),xI=re({name:"SpeakerMuted24Icon",svgTemplate:p`
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
    `}),DI=re({name:"SpeakerQuiet24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),dh=re({name:"Star24Icon",svgTemplate:p`
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
    `}),Ac=re({name:"StatusFailure24Icon",svgTemplate:p`
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
    `}),AI=re({name:"StatusInProgress24Icon",svgTemplate:p`
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
    `}),Ha=re({name:"StatusSuccess24Icon",svgTemplate:p`
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
    `}),EI=re({name:"StatusUnknown24Icon",svgTemplate:p`
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
    `}),CI=re({name:"StatusWarning24Icon",svgTemplate:p`
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
    `}),SI=re({name:"Sun24Icon",svgTemplate:p`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),MI=re({name:"Upload24Icon",svgTemplate:p`
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
    `}),k$=re({name:"X24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Ur(e,t){const r=ze(t).map(o=>{if(t[o])return`${v[o].name}: ${String(t[o])};`}).filter(S.isTruthy).join(" "),n=A`
        ${ke(r)}
        display: inline-flex;
        vertical-align: middle;
    `;return re({name:e.name,svgTemplate:p`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const fh={ArrowDown24Icon:ZP,ArrowLeft24Icon:JP,ArrowRight24Icon:YP,ArrowUp24Icon:XP,AutoTheme24Icon:QP,Bell24Icon:eI,Chat24Icon:tI,Check16Icon:g$,Check24Icon:mg,ChevronDown24Icon:rI,ChevronUp24Icon:Cd,CloseX16Icon:p$,CloseX24Icon:b$,Commit24Icon:nI,Copy24Icon:ch,Document24Icon:oI,DocumentSearch24Icon:iI,DoubleChevron24Icon:sI,Element16Icon:y$,Element24Icon:Rt,ExternalLink24Icon:aI,EyeClosed24Icon:v$,EyeOpen24Icon:w$,Filter24Icon:lI,Globe24Icon:uI,Link24Icon:cI,Loader24Icon:$$,LoaderAnimated24Icon:Ji,Lock24Icon:fI,MagnifyingGlass24Icon:hI,Moon24Icon:mI,Options24Icon:Rs,Pencil24Icon:gI,Printer24Icon:pI,Shield24Icon:bI,SortAscending24Icon:yI,SortDescending24Icon:vI,Sparkle24Icon:wI,SpeakerLoud24Icon:$I,SpeakerMedium24Icon:kI,SpeakerMuted24Icon:xI,SpeakerQuiet24Icon:DI,Star24Icon:dh,StatusFailure24Icon:Ac,StatusInProgress24Icon:AI,StatusSuccess24Icon:Ha,StatusUnknown24Icon:EI,StatusWarning24Icon:CI,Sun24Icon:SI,Upload24Icon:MI,X24Icon:k$},me=tt()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${O} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${v["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        ${e["vira-checkbox-filled-checked"].selector} {
            & .custom-checkbox.checked {
                color: ${P["vira-form-background-color"].value};
                background-color: ${P["vira-form-accent-primary-color"].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${P["vira-form-accent-primary-hover-color"].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${P["vira-form-accent-primary-active-color"].value};
                }
            }
        }
        ${e["vira-checkbox-filled-unchecked"].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${P["vira-form-background-color"].value};
                background-color: ${P["vira-form-error-color"].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${P["vira-form-error-hover-color"].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${P["vira-form-error-active-color"].value};
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
                font-weight: ${P["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${P["vira-form-selection-hover-color"].value};
            }
            &:active .custom-checkbox {
                background-color: ${P["vira-form-selection-active-color"].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${P["vira-form-border-color"].value};
            color: ${P["vira-form-foreground-color"].value};
            border-radius: ${P["vira-form-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${eu({elementBorderSize:1})}

            &.checked {
                & ${O} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${P["vira-form-error-color"].value};
            }

            &.disabled {
                ${na};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:et()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const o=e.label?p`
                  <span
                      class="label-text"
                      ${bo(e.attributePassthrough?.text)}
                      style=${Ot(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:te;return p`
            <label
                class=${xr({disabled:!!e.disabled})}
                ${bo(e.attributePassthrough?.label)}
                style=${Ot(e.stylePassthrough?.label)}
                ${_("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${xr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Ot(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${bo(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Ot(e.stylePassthrough?.["custom-checkbox"])}
                    ${kN(n)}
                >
                    <${O.assign({icon:mg,fitContainer:!0})}
                        ${bo(e.attributePassthrough?.[O.tagName])}
                        style=${Ot(e.stylePassthrough?.[O.tagName])}
                    ></${O}>
                </span>
            </label>
        `}}),dr=tt()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:["header"],styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Bt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${wo["vira-pretty-animation-duration"].value};
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
    `,events:{expandChange:et()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:o,inputs:i}){const s=i.expanded?A`
                  height: ${e.contentHeight}px;
              `:A`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${_("click",()=>{n(new o.expandChange(!i.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${xr({collapsed:!i.expanded})}"
                style=${s}
                disabled="disabled"
            >
                <div
                    ${V5(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Vt=tt()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:et()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":({state:e})=>e.isExpanded,"vira-collapsible-card-expansion-blocked":({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-card-styles":({inputs:e})=>!e.rawCollapsible},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
        }

        ${e["vira-collapsible-card-expanded"].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${dr} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e["vira-collapsible-card-card-styles"].selector} {
            & ${dr} {
                border: 1px solid ${P["vira-form-border-color"].value};
                border-radius: ${P["vira-form-wrapper-radius"].value};
            }

            & .card-header {
                padding: 8px 16px;
            }

            & .card-content {
                padding: 8px 16px 8px 16px;
            }
        }

        ${e["vira-collapsible-card-expansion-blocked"].selector} {
            & .header-wrapper {
                cursor: default;
            }
        }

        .card-header {
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            & .header-filler {
                flex-grow: 1;
            }
        }

        .card-content {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            overflow-x: auto;
            overflow-y: hidden;
        }

        @media print {
            ${dr} {
                border: none !important;
            }

            .card-header {
                padding: 8px 0 !important;
            }

            .card-content {
                overflow: visible !important;
                padding: 8px 0 16px 0 !important;
            }

            .open-caret {
                display: none;
            }
        }
    `,slotNames:["header"],render({inputs:e,slotNames:t,state:r,updateState:n,testIds:o,dispatch:i,events:s}){e.blockExpansion&&n({isExpanded:!0});const a=r.isExpanded||e.expandOnPrint?p`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:te,l=e.hideHeader?te:p`
                  <div class="card-header">
                      <slot name=${t.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?te:p`
                                <${O.assign({icon:Cd,fitContainer:!0})}
                                    ${Wo(o.openCaret)}
                                    class="open-caret"
                                ></${O}>
                            `}
                  </div>
              `;return p`
            <${dr.assign({expanded:r.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${_(dr.events.expandChange,c=>{c.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:c.detail}),i(new s.expandToggle(c.detail)))})}
            >
                <div class="header-wrapper" slot=${dr.slotNames.header}>
                    ${l}
                </div>
                ${a}
            </${dr}>
        `}}),Za=tt()({tagName:"vira-dropdown",testIds:["leadingIcon","prefixText","trigger"],styles:A`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${de} {
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
                ${wo["vira-interaction-animation-duration"].value} linear;
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
            border: 1px solid ${P["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${P["vira-form-radius"].value};
            background-color: ${P["vira-form-background-color"].value};
            color: ${P["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:et(),openChange:et()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:o,testIds:i}){const s=Rn(t.selected,h=>t.options.find(m=>m.value===h),S.isTruthy),a=t.icon?p`
                  <${O.assign({icon:t.icon})}
                      ${Wo(i.leadingIcon)}
                  ></${O}>
              `:te,l=!s.length,c=t.selectionPrefix&&!l?p`
                      <span class="selected-label-prefix" ${Wo(i.prefixText)}>
                          ${t.selectionPrefix}
                      </span>
                  `:te,d=l?t.placeholder||"":t.isMultiSelect&&s.length>1?`${s.length} Selected`:s[0]?.label||"",f=p`
            <${Li.assign({direction:e.showPopUpResult?.popDown?Sl.Downwards:Sl.Upwards})}
                slot=${de.slotNames.popUp}
            >
                ${f$(t.options.map(h=>({content:h.label,onClick(){r(new n.selectedChange([h.value]))},disabled:h.disabled,selected:s.includes(h)})))}
            </${Li}>
        `;return p`
            <${de.assign({...t,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||ji.Both})}
                ${_(de.events.openChange,h=>{!!e.showPopUpResult!=!!h.detail&&r(new n.openChange(h.detail)),o({showPopUpResult:h.detail})})}
            >
                <div
                    class="dropdown-trigger ${xr({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    slot=${de.slotNames.trigger}
                    ${Wo(i.trigger)}
                >
                    ${a}
                    <span
                        class="selection-display ${xr({"using-placeholder":l})}"
                        title=${Ot(l?void 0:d)}
                    >
                        ${c} ${d}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${O.assign({icon:Cd})}
                            class="trigger-icon"
                        ></${O}>
                    </span>
                </div>
                ${e.showPopUpResult?f:te}
            </${de}>
        `}}),_i=tt()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>A`
        :host {
            color: ${P["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return p`
            <slot></slot>
        `}});var Fe=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(Fe||{});function Mu(e,t){if(e)return t?zh({value:e,suffix:"*"}):e}function FI(e){return hl(e).every(t=>t.isHidden||!t.isRequired?!0:S.isString(t.value)?!!t.value:t.value!=null)}function hh({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>hh({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function TI({value:e,allowed:t,blocked:r}){const n=String(e),o=t?hh({input:n,matcher:t}):!0,i=r?hh({input:n,matcher:r}):!1;return o&&!i}function mh(e){const t=String(e.value);if(!e.value)return{filtered:t,blocked:""};const{filtered:r,blocked:n}=t.split("").reduce((o,i)=>(TI({...e,value:i})?o.filtered.push(i):o.blocked.push(i),o),{filtered:[],blocked:[]});return{filtered:r.join(""),blocked:n.join("")}}function NI({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){const i=kd(r,HTMLInputElement),s=S.hasKey(r,"data")&&Uh.isString(r.data)||"";if(s){const{blocked:l}=mh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l.length&&n(l)}const a=mh({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&o(a)}var Ni=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(Ni||{});const Te=tt()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>A`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${P["vira-form-foreground-color"].value};
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
                    font-weight: ${P["vira-form-label-font-weight"].value};
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
                ${Bt};
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
                ${Bt};
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
                border-radius: ${P["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${P["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Bt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${P["vira-form-radius"].value};
                background-color: ${P["vira-form-background-color"].value};
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
                ${Bt};
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
                    ${eu({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${P["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${P["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${P["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${ni};
            }

            button {
                ${Bt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${wo["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${P["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${P["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${P["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${P["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${P["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${P["vira-form-error-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${na};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:et(),inputBlocked:et()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Ii(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:o,host:i})=>{const{filtered:s}=mh({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?p`
                  <${O.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${O}>
              `:te,l=e.fitText?A`
                  width: ${r.forcedInputWidth}px;
              `:te,c=_("mousedown",h=>{const m=kd(h,HTMLElement,{useOriginalTarget:!0}),g=pt.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement);m!==g&&(h.preventDefault(),g.focus())}),d=e.disableBrowserHelps||e.type==="password",f=p`
            <span class="input-wrapper" ${e.label?te:c}>
                ${a}
                ${Or(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${V5(({contentRect:h})=>{n({forcedInputWidth:h.width})})}
                        >
                            <pre>${s||e.placeholder||te}</pre>
                        </span>
                    `)}

                <input
                    id=${Ot(e.label?r.randomId:void 0)}
                    aria-label=${Ot(e.label||void 0)}
                    autofocus=${!1}
                    type=${PI(e.type,r.showPassword)}
                    style=${l}
                    autocomplete=${Ot(d?"off":void 0)}
                    autocorrect=${Ot(d?"off":void 0)}
                    autocapitalize=${Ot(d?"off":void 0)}
                    spellcheck=${Ot(d?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${_("input",h=>{NI({inputs:e,previousValue:s,event:h,inputBlockedCallback(m){t(new o.inputBlocked(m))},newValueCallback(m){t(new o.valueChange(m))}})})}
                    placeholder=${Ot(e.placeholder||void 0)}
                    ${bo(e.attributePassthrough)}
                />

                ${Or(!!(e.showClearButton&&e.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${_("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${_("click",()=>{e.disabled||t(new o.valueChange(""))})}
                        >
                            <${O.assign({icon:b$})}></${O}>
                        </button>
                    `)}
                ${Or(e.type==="password",p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${_("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${_("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${O.assign({icon:r.showPassword?w$:v$})}></${O}>
                        </button>
                    `)}
                ${Or(!!e.suffix,p`
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
                <label for=${r.randomId} ${c}>
                    <span class="input-label">${e.label}</span>
                    ${f}
                </label>
            `:f}});function PI(e,t){return e==="password"&&t?"text":e||"text"}const qe=tt()({tagName:"vira-select",state(){return{randomId:Ii(32),cleanup:void 0}},events:{valueChange:et()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError,"vira-select-not-raw":({inputs:e})=>!e.rawSelect},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${P["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Bt};
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
                padding-right: 28px;
                overflow: hidden;
                text-overflow: ellipsis;

                &.placeholder {
                    color: ${P["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${O} {
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
                border-radius: ${P["vira-form-radius"].value};
                color: ${P["vira-form-foreground-color"].value};
                background-color: ${P["vira-form-background-color"].value};
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
                        ${eu({elementBorderSize:0,noNesting:!0})}
                    }
                }

                & .border-style {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: ${P["vira-form-radius"].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${P["vira-form-border-color"].value};
                    transition: border
                        ${wo["vira-interaction-animation-duration"].value};
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
                font-weight: ${P["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${na}
            }
            ${O} {
                ${na}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${P["vira-form-error-color"].value};
        }
    `,init({state:e,updateState:t,host:r}){e.cleanup?.();const n=[go(r,"mousedown",o=>{const i=pt.instanceOf(r.shadowRoot.querySelector("select"),HTMLSelectElement);o.composedPath().includes(i)||(o.preventDefault(),o.stopPropagation(),(i.showPicker||i.showPopover).call(i))})];t({cleanup:()=>{n.forEach(o=>o())}})},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({inputs:e,state:t,dispatch:r,events:n}){const o=e.value||void 0,i=e.placeholder||o==null?p`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:te,s=p`
            <span class="select-wrapper">
                <select
                    .value=${Ot(o)}
                    class=${xr({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Ot(e.label?t.randomId:void 0)}
                    aria-label=${Ot(e.label||void 0)}
                    aria-disabled=${Ot(e.disabled?"true":void 0)}
                    ${_("input",a=>{const l=kd(a,HTMLSelectElement),c=l.value;l.value!==o&&(l.selectedIndex=e.options.findIndex(d=>d.value===o)),r(new n.valueChange(c))})}
                    ${bo(e.attributePassthrough?.select)}
                >
                    ${i}
                    ${e.options.map(a=>p`
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

                <${O.assign({icon:e.icon})}
                    class="input-icon"
                ></${O}>
                <${O.assign({icon:Cd})}
                    class="trigger-icon"
                ></${O}>
            </span>
        `;return e.label?p`
                <label for=${t.randomId} ${bo(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),Cr=tt()({tagName:"vira-form",events:{valueChange:et(),validChange:et()},styles:A`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=FI(e.fields);i!==n.lastIsValid&&(o({lastIsValid:i}),t(new r.validChange({allFieldsAreValid:i})));const s=Fn(e.fields).map(([a,l])=>l.isHidden?te:l.type===Fe.Checkbox?p`
                        <${me.assign({value:l.value||!1,disabled:e.isDisabled||l.isDisabled,hasError:l.hasError,label:Mu(l.label,!!l.isRequired&&!e.hideRequiredMarkers)})}
                            ${l.testId?Wo(l.testId):te}
                            ${_(me.events.valueChange,c=>{t(new r.valueChange({key:a,...l,value:c.detail}))})}
                        ></${me}>
                    `:l.type===Fe.Select?p`
                        <${qe.assign({options:l.options,value:l.value,placeholder:l.placeholder,disabled:e.isDisabled||l.isDisabled,label:Mu(l.label,!!l.isRequired&&!e.hideRequiredMarkers),hasError:l.hasError,icon:l.icon})}
                            ${l.testId?Wo(l.testId):te}
                            ${_(qe.events.valueChange,c=>{t(new r.valueChange({key:a,...l,value:c.detail}))})}
                        ></${qe}>
                    `:l.type===Fe.Number?p`
                        <${Te.assign({value:l.value?.toString()||"",disabled:e.isDisabled||l.isDisabled,allowedInputs:/\d/,hasError:l.hasError,icon:l.icon,label:Mu(l.label,!!l.isRequired&&!e.hideRequiredMarkers),placeholder:l.placeholder,showClearButton:e.showClearButtons,type:Ni.Number,attributePassthrough:{...l.min===void 0?{}:{min:String(l.min)},...l.max===void 0?{}:{max:String(l.max)},...l.step===void 0?{}:{step:String(l.step)}}})}
                            ${l.testId?Wo(l.testId):te}
                            ${_(Te.events.valueChange,c=>{const d=c.detail===""?void 0:Number(c.detail);t(new r.valueChange({key:a,...l,value:d}))})}
                        ></${Te}>
                    `:p`
                        <${Te.assign({value:l.value||"",disabled:e.isDisabled||l.isDisabled,hasError:l.hasError,icon:l.icon,label:Mu(l.label,!!l.isRequired&&!e.hideRequiredMarkers),placeholder:l.placeholder,showClearButton:e.showClearButtons,attributePassthrough:l.isUsername?{autocomplete:"username"}:l.type===Fe.NewPassword?{autocomplete:"new-password"}:l.type===Fe.ExistingPassword?{autocomplete:"password"}:l.type===Fe.Email?{autocomplete:"email"}:{},type:[Fe.NewPassword,Fe.ExistingPassword,Fe.PlainPassword].includes(l.type)?Ni.Password:l.type===Fe.Email?Ni.Email:Ni.Default})}
                            ${l.testId?Wo(l.testId):te}
                            ${_(Te.events.valueChange,c=>{t(new r.valueChange({key:a,...l,value:c.detail}))})}
                        ></${Te}>
                    `);return p`
            <form ${_("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}}),Io=tt()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:et(),imageError:et()},styles:({hostClasses:e})=>A`
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
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:o,slotNames:i}){const s=e.imageUrl,a=t.erroredUrls[s]?p`
                  <slot class="status-wrapper" name=${i.error}>
                      <${O.assign({icon:Ac})}
                          class="error"
                      ></${O}>
                  </slot>
              `:t.loadedUrls[s]?void 0:p`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${O.assign({icon:Ji})}></${O}>
                    </slot>
                `;return p`
            ${Or(!!a,a)}
            <img
                class=${xr({hidden:!!a})}
                ${_("load",async()=>{e._debugLoadDelay&&await zi(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${_("error",async l=>{e._debugLoadDelay&&await zi(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new o.imageError(l.error))})}
                src=${s}
            />
        `}}),Zn=tt()({tagName:"vira-link",state(){return{cleanup:void 0}},hostClasses:{"vira-link-link-styles":({inputs:e})=>!e.disableLinkStyles},styles:({hostClasses:e})=>A`
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
                color: ${P["vira-form-accent-primary-color"].value};
            }

            &:active a,
            & a:active {
                color: ${P["vira-form-accent-primary-active-color"].value};
            }
        }
    `,init({state:e,updateState:t,host:r}){e.cleanup?.();let n=!1;const o=[go(r,"click",i=>{if(n)return;const s=pt.instanceOf(r.shadowRoot.querySelector("a"),HTMLAnchorElement);i.composedPath().includes(s)||(i.preventDefault(),i.stopPropagation(),n=!0,s.dispatchEvent(new MouseEvent(i.type,i)),n=!1)})];t({cleanup:()=>{o.forEach(i=>i())}})},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({inputs:e}){function t(r){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,r)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return p`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${bo(e.attributePassthrough?.a)}
                    style=${Ot(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return p`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${bo(e.attributePassthrough?.a)}
                    style=${Ot(e.stylePassthrough?.a)}
                    ${_("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),II=["pagehide","pageshow","popstate"],Oo=tt()({tagName:"vira-modal",events:{modalClose:et()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${tu};
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
            ${Ri.modal}

            &[open] {
                display: flex;
            }
            &::backdrop {
                background: ${P["vira-form-modal-backdrop-color"].value};
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
                            color: ${P["vira-form-secondary-body-foreground"].value};
                        }
                    }

                    & button.close {
                        ${Bt};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${P["vira-form-radius"].value};

                        &:hover {
                            background-color: ${P["vira-form-selection-hover-color"].value};
                        }

                        & ${O} {
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:o,slotNames:i}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=II.map(l=>P0(l,()=>{o(new n.modalClose)}));r({cleanup:()=>{a.forEach(l=>l())}})}function s(){e.open&&(t.cleanup?.(),o(new n.modalClose))}return p`
            <dialog
                ${Zi(a=>{r({dialogElement:pt.instanceOf(a,HTMLDialogElement)})})}
                ${_("close",()=>{s()})}
                ${_("mousedown",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Zi(a=>{r({contentElement:pt.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${i.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?p`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:te}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${_("click",()=>{t.dialogElement?.close()})}
                        >
                            <${O.assign({icon:k$})}></${O}>
                        </button>
                    </div>
                    ${e.open?p`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:te}
                </div>
            </dialog>
        `}}),Jn=tt()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>A`
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
    `,cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({slotNames:e,updateState:t,inputs:r,host:n,state:o}){return p`
            <div
                class="large"
                ${Zi(i=>{if(!r.automaticallySwitch)return;const s={elementToTest:i,host:n,updateState:t},a=new ResizeObserver(()=>{Rf(s)});a.observe(n),a.observe(i);const l=go(i,"slotchange",()=>{Rf(s)});Rf(s),o.cleanup?.(),t({cleanup(){a.disconnect(),l()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function Rf({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const lo=tt()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:({cssVars:e})=>A`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${P["vira-form-accent-primary-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${P["vira-form-filled-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,render({inputs:e,host:t}){const r=e.min||0,o=(e.max||100)-r,i=e.value-r,s=t6(Math.round(i/o*100),{min:0,max:100});return TP(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),p`
            <div
                class="progress-bar"
                style=${s?A`
                          width: ${s}%;
                      `:A`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});var Fl;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(Fl||(Fl={}));const pg={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:Fl.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},oi=it(pg,e=>e),we={...oi,name:"name",hexString:"hexString"},Wn=it(pg,(e,t)=>{const r=S.isEnumValue(e,Fl)&&S.isEnumValue(e,oi)?e:"conversionFormat"in t&&t.conversionFormat&&S.isEnumValue(t.conversionFormat,Fl)&&S.isEnumValue(t.conversionFormat,oi)?t.conversionFormat:void 0;return Lt.isTruthy(r,`Invalid conversion format for color format '${e}' ${k(t)}.`),{...t,colorFormat:e,conversionFormat:r,rawSyntax:pt.isEnumValue("rawSyntax"in t&&t.rawSyntax?t.rawSyntax:e,we)}});Xo(hl(pg),e=>({key:e.colorSpace,value:e.colorSpace}),{});Fn(Wn).reduce((e,[t,r])=>(es(e,r.colorSpace,()=>({}))[t]=r,e),{});function OI(e){return e.startsWith("rgb")?we.rgb:e.startsWith("hsl")?we.hsl:e.startsWith("hwb")?we.hwb:e.startsWith("oklab")?we.oklab:e.startsWith("oklch")?we.oklch:e.startsWith("lab")?we.lab:e.startsWith("lch")?we.lch:e.startsWith("#")?we.hexString:we.name}const gh={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in gh)Object.freeze(gh[e]);const Tl=Object.freeze(gh),BI=Object.keys(Tl).reduce((e,t)=>t.length>e.length?t:e),RI=Uc(it(Tl,(e,t)=>Rn(Object.entries(Tl),([n])=>n,(n,[,o])=>n===e?!1:S.deepEquals(o,t))),(e,t)=>!!t.length),R1=Object.entries(RI).reduce((e,t)=>{const r=[e[0],...e[1]].join(", ");return[t[0],...t[1]].join(", ").length>r.length?t:e}).reduce((e,t)=>S.isArray(t)?[...e,...t]:[...e,t],[]),L1=Math.max(BI.length,R1.length+(R1.length-1)*2),x$=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},LI={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jI=e=>x$(LI[e.toLowerCase()],6),_I=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,UI=e=>{let t;return(t=e.match(_I))?x$(parseInt(t[1],16),t[1].length):void 0},Jo="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",ll=`${Jo}%`,bg=`(?:${Jo}%|${Jo})`,zI=`(?:${Jo}(deg|grad|rad|turn)|${Jo})`,oa="\\s*,\\s*",qI=new RegExp(`^rgba?\\(\\s*${Jo}${oa}${Jo}${oa}${Jo}\\s*(?:,\\s*${bg}\\s*)?\\)$`),VI=new RegExp(`^rgba?\\(\\s*${ll}${oa}${ll}${oa}${ll}\\s*(?:,\\s*${bg}\\s*)?\\)$`),WI=e=>{let t={mode:"rgb"},r;if(r=e.match(qI))r[1]!==void 0&&(t.r=r[1]/255),r[2]!==void 0&&(t.g=r[2]/255),r[3]!==void 0&&(t.b=r[3]/255);else if(r=e.match(VI))r[1]!==void 0&&(t.r=r[1]/100),r[2]!==void 0&&(t.g=r[2]/100),r[3]!==void 0&&(t.b=r[3]/100);else return;return r[4]!==void 0?t.alpha=Math.max(0,Math.min(1,r[4]/100)):r[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[5]))),t},ph=(e,t)=>e===void 0?void 0:typeof e!="object"?vh(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,Yi=(e="rgb")=>t=>(t=ph(t,e))!==void 0?t.mode===e?t:Gn[t.mode][e]?Gn[t.mode][e](t):e==="rgb"?Gn[t.mode].rgb(t):Gn.rgb[e](Gn[t.mode].rgb(t)):void 0,Gn={},D$={},Ec=[],A$={},KI=e=>e,je=e=>(Gn[e.mode]={...Gn[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{Gn[t]||(Gn[t]={}),Gn[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=KI)}),D$[e.mode]=e,(e.parse||[]).forEach(t=>{GI(t,e.mode)}),Yi(e.mode)),Sd=e=>D$[e],GI=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");A$[e]=t}else typeof e=="function"&&Ec.indexOf(e)<0&&Ec.push(e)},bh=/[^\x00-\x7F]|[a-zA-Z_]/,HI=/[^\x00-\x7F]|[-\w]/,L={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let ne=0;function Fu(e){let t=e[ne],r=e[ne+1];return t==="-"||t==="+"?/\d/.test(r)||r==="."&&/\d/.test(e[ne+2]):t==="."?/\d/.test(r):/\d/.test(t)}function yh(e){if(ne>=e.length)return!1;let t=e[ne];if(bh.test(t))return!0;if(t==="-"){if(e.length-ne<2)return!1;let r=e[ne+1];return!!(r==="-"||bh.test(r))}return!1}const ZI={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function Ra(e){let t="";if((e[ne]==="-"||e[ne]==="+")&&(t+=e[ne++]),t+=Tu(e),e[ne]==="."&&/\d/.test(e[ne+1])&&(t+=e[ne++]+Tu(e)),(e[ne]==="e"||e[ne]==="E")&&((e[ne+1]==="-"||e[ne+1]==="+")&&/\d/.test(e[ne+2])?t+=e[ne++]+e[ne++]+Tu(e):/\d/.test(e[ne+1])&&(t+=e[ne++]+Tu(e))),yh(e)){let r=Cc(e);return r==="deg"||r==="rad"||r==="turn"||r==="grad"?{type:L.Hue,value:t*ZI[r]}:void 0}return e[ne]==="%"?(ne++,{type:L.Percentage,value:+t}):{type:L.Number,value:+t}}function Tu(e){let t="";for(;/\d/.test(e[ne]);)t+=e[ne++];return t}function Cc(e){let t="";for(;ne<e.length&&HI.test(e[ne]);)t+=e[ne++];return t}function JI(e){let t=Cc(e);return e[ne]==="("?(ne++,{type:L.Function,value:t}):t==="none"?{type:L.None,value:void 0}:{type:L.Ident,value:t}}function YI(e=""){let t=e.trim(),r=[],n;for(ne=0;ne<t.length;){if(n=t[ne++],n===`
`||n==="	"||n===" "){for(;ne<t.length&&(t[ne]===`
`||t[ne]==="	"||t[ne]===" ");)ne++;continue}if(n===",")return;if(n===")"){r.push({type:L.ParenClose});continue}if(n==="+"){if(ne--,Fu(t)){r.push(Ra(t));continue}return}if(n==="-"){if(ne--,Fu(t)){r.push(Ra(t));continue}if(yh(t)){r.push({type:L.Ident,value:Cc(t)});continue}return}if(n==="."){if(ne--,Fu(t)){r.push(Ra(t));continue}return}if(n==="/"){for(;ne<t.length&&(t[ne]===`
`||t[ne]==="	"||t[ne]===" ");)ne++;let o;if(Fu(t)&&(o=Ra(t),o.type!==L.Hue)){r.push({type:L.Alpha,value:o});continue}if(yh(t)&&Cc(t)==="none"){r.push({type:L.Alpha,value:{type:L.None,value:void 0}});continue}return}if(/\d/.test(n)){ne--,r.push(Ra(t));continue}if(bh.test(n)){ne--,r.push(JI(t));continue}return}return r}function XI(e){e._i=0;let t=e[e._i++];if(!t||t.type!==L.Function||t.value!=="color"||(t=e[e._i++],t.type!==L.Ident))return;const r=A$[t.value];if(!r)return;const n={mode:r},o=E$(e,!1);if(!o)return;const i=Sd(r).channels;for(let s=0,a,l;s<i.length;s++)a=o[s],l=i[s],a.type!==L.None&&(n[l]=a.type===L.Number?a.value:a.value/100,l==="alpha"&&(n[l]=Math.max(0,Math.min(1,n[l]))));return n}function E$(e,t){const r=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===L.None||n.type===L.Number||n.type===L.Alpha||n.type===L.Percentage||t&&n.type===L.Hue){r.push(n);continue}if(n.type===L.ParenClose){if(e._i<e.length)return;continue}return}if(!(r.length<3||r.length>4)){if(r.length===4){if(r[3].type!==L.Alpha)return;r[3]=r[3].value}return r.length===3&&r.push({type:L.None,value:void 0}),r.every(o=>o.type!==L.Alpha)?r:void 0}}function QI(e,t){e._i=0;let r=e[e._i++];if(!r||r.type!==L.Function)return;let n=E$(e,t);if(n)return n.unshift(r.value),n}const vh=e=>{if(typeof e!="string")return;const t=YI(e),r=t?QI(t,!0):void 0;let n,o=0,i=Ec.length;for(;o<i;)if((n=Ec[o++](e,r))!==void 0)return n;return t?XI(t):void 0};function eO(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const r={mode:"rgb"},[,n,o,i,s]=t;if(!(n.type===L.Hue||o.type===L.Hue||i.type===L.Hue))return n.type!==L.None&&(r.r=n.type===L.Number?n.value/255:n.value/100),o.type!==L.None&&(r.g=o.type===L.Number?o.value/255:o.value/100),i.type!==L.None&&(r.b=i.type===L.Number?i.value/255:i.value/100),s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const tO=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,rO=(e,t,r)=>e+r*(t-e),nO=e=>{let t=[];for(let r=0;r<e.length-1;r++){let n=e[r],o=e[r+1];n===void 0&&o===void 0?t.push(void 0):n!==void 0&&o!==void 0?t.push([n,o]):t.push(n!==void 0?[n,n]:[o,o])}return t},oO=e=>t=>{let r=nO(t);return n=>{let o=n*r.length,i=n>=1?r.length-1:Math.max(Math.floor(o),0),s=r[i];return s===void 0?void 0:e(s[0],s[1],o-i)}},z=oO(rO),zt=e=>{let t=!1,r=e.map(n=>n!==void 0?(t=!0,n):1);return t?r:e},xa={mode:"rgb",channels:["r","g","b","alpha"],parse:[eO,UI,WI,jI,tO,"srgb"],serialize:"srgb",interpolate:{r:z,g:z,b:z,alpha:{use:z,fixup:zt}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},Lf=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),j1=e=>{let t=Lf(e.r),r=Lf(e.g),n=Lf(e.b),o={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*r+.1882286462349947*n,y:.297344975250536*t+.6273635662554661*r+.0752914584939979*n,z:.0270313613864123*t+.0706888525358272*r+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},jf=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),_1=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"a98",r:jf(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*r),g:jf(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*r),b:jf(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*r)};return n!==void 0&&(o.alpha=n),o},_f=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},Da=({r:e,g:t,b:r,alpha:n})=>{let o={mode:"lrgb",r:_f(e),g:_f(t),b:_f(r)};return n!==void 0&&(o.alpha=n),o},ds=e=>{let{r:t,g:r,b:n,alpha:o}=Da(e),i={mode:"xyz65",x:.4123907992659593*t+.357584339383878*r+.1804807884018343*n,y:.2126390058715102*t+.715168678767756*r+.0721923153607337*n,z:.0193308187155918*t+.119194779794626*r+.9505321522496607*n};return o!==void 0&&(i.alpha=o),i},Uf=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},Aa=({r:e,g:t,b:r,alpha:n},o="rgb")=>{let i={mode:o,r:Uf(e),g:Uf(t),b:Uf(r)};return n!==void 0&&(i.alpha=n),i},fs=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Aa({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*r,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*r,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*r});return n!==void 0&&(o.alpha=n),o},iO={...xa,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>_1(ds(e)),xyz65:_1},toMode:{rgb:e=>fs(j1(e)),xyz65:j1}},ir=e=>(e=e%360)<0?e+360:e,sO=(e,t)=>e.map((r,n,o)=>{if(r===void 0)return r;let i=ir(r);return n===0||e[n-1]===void 0?i:t(i-ir(o[n-1]))}).reduce((r,n)=>!r.length||n===void 0||r[r.length-1]===void 0?(r.push(n),r):(r.push(n+r[r.length-1]),r),[]),So=e=>sO(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),Kt=[-.14861,1.78277,-.29227,-.90649,1.97294,0],aO=Math.PI/180,lO=180/Math.PI;let U1=Kt[3]*Kt[4],z1=Kt[1]*Kt[4],q1=Kt[1]*Kt[2]-Kt[0]*Kt[3];const uO=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(q1*r+e*U1-t*z1)/(q1+U1-z1),i=r-o,s=(Kt[4]*(t-o)-Kt[2]*i)/Kt[3],a={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(i*i+s*s)/(Kt[4]*o*(1-o))};return a.s&&(a.h=Math.atan2(s,i)*lO-120),n!==void 0&&(a.alpha=n),a},cO=({h:e,s:t,l:r,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*aO,r===void 0&&(r=0);let i=t===void 0?0:t*r*(1-r),s=Math.cos(e),a=Math.sin(e);return o.r=r+i*(Kt[0]*s+Kt[1]*a),o.g=r+i*(Kt[2]*s+Kt[3]*a),o.b=r+i*(Kt[4]*s+Kt[5]*a),n!==void 0&&(o.alpha=n),o},Md=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let r=ir(e.h),n=ir(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*o},dO=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let r=ir(e.h),n=ir(t.h);return Math.abs(n-r)>180?r-(n-360*Math.sign(n-r)):n-r},Fd=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let r=ir(e.h),n=ir(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*o},fO=(e="rgb",t=[1,1,1,0])=>{let r=Sd(e),n=r.channels,o=r.difference,i=Yi(e);return(s,a)=>{let l=i(s),c=i(a);return Math.sqrt(n.reduce((d,f,h)=>{let m=o[f]?o[f](l,c):l[f]-c[f];return d+(t[h]||0)*Math.pow(isNaN(m)?0:m,2)},0))}},Mo=e=>{let t=e.reduce((n,o)=>{if(o!==void 0){let i=o*Math.PI/180;n.sin+=Math.sin(i),n.cos+=Math.cos(i)}return n},{sin:0,cos:0}),r=Math.atan2(t.sin,t.cos)*180/Math.PI;return r<0?360+r:r},hO={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:uO},toMode:{rgb:cO},interpolate:{h:{use:z,fixup:So},s:z,l:z,alpha:{use:z,fixup:zt}},difference:{h:Md},average:{h:Mo}},ii=({l:e,a:t,b:r,alpha:n},o="lch")=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),s={mode:o,l:e,c:i};return i&&(s.h=ir(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},si=({l:e,c:t,h:r,alpha:n},o="lab")=>{r===void 0&&(r=0);let i={mode:o,l:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},C$=Math.pow(29,3)/Math.pow(3,3),S$=Math.pow(6,3)/Math.pow(29,3),St={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},Ls={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let zf=e=>Math.pow(e,3)>S$?Math.pow(e,3):(116*e-16)/C$;const M$=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,i=t/500+o,s=o-r/200,a={mode:"xyz65",x:zf(i)*Ls.X,y:zf(o)*Ls.Y,z:zf(s)*Ls.Z};return n!==void 0&&(a.alpha=n),a},Td=e=>fs(M$(e)),qf=e=>e>S$?Math.cbrt(e):(C$*e+16)/116,F$=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=qf(e/Ls.X),i=qf(t/Ls.Y),s=qf(r/Ls.Z),a={mode:"lab65",l:116*i-16,a:500*(o-i),b:200*(i-s)};return n!==void 0&&(a.alpha=n),a},Nd=e=>{let t=F$(ds(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Sc=1,T$=1,Nl=26/180*Math.PI,Mc=Math.cos(Nl),Fc=Math.sin(Nl),N$=100/Math.log(139/100),wh=({l:e,c:t,h:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"lab65",l:(Math.exp(e*Sc/N$)-1)/.0039},i=(Math.exp(.0435*t*T$*Sc)-1)/.075,s=i*Math.cos(r/180*Math.PI-Nl),a=i*Math.sin(r/180*Math.PI-Nl);return o.a=s*Mc-a/.83*Fc,o.b=s*Fc+a/.83*Mc,n!==void 0&&(o.alpha=n),o},$h=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=t*Mc+r*Fc,i=.83*(r*Mc-t*Fc),s=Math.sqrt(o*o+i*i),a={mode:"dlch",l:N$/Sc*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*T$*Sc)};return a.c&&(a.h=ir((Math.atan2(i,o)+Nl)/Math.PI*180)),n!==void 0&&(a.alpha=n),a},V1=e=>wh(ii(e,"dlch")),W1=e=>si($h(e),"dlab"),mO={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:V1,rgb:e=>Td(V1(e))},fromMode:{lab65:W1,rgb:e=>W1(Nd(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:z,a:z,b:z,alpha:{use:z,fixup:zt}}},gO={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:wh,dlab:e=>si(e,"dlab"),rgb:e=>Td(wh(e))},fromMode:{lab65:$h,dlab:e=>ii(e,"dlch"),rgb:e=>$h(Nd(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:z,c:z,h:{use:z,fixup:So},alpha:{use:z,fixup:zt}},difference:{h:Fd},average:{h:Mo}};function pO({h:e,s:t,i:r,alpha:n}){e=ir(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r:r*(1+t*(3/(2-o)-1)),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1-t)};break;case 1:i={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1+t*(3/(2-o)-1)),b:r*(1-t)};break;case 2:i={r:r*(1-t),g:r*(1+t*(3/(2-o)-1)),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;case 3:i={r:r*(1-t),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1+t*(3/(2-o)-1))};break;case 4:i={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3/(2-o)-1))};break;case 5:i={r:r*(1+t*(3/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;default:i={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return i.mode="rgb",n!==void 0&&(i.alpha=n),i}function bO({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsi",s:e+t+r===0?0:1-3*i/(e+t+r),i:(e+t+r)/3};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const yO={mode:"hsi",toMode:{rgb:pO},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:bO},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:z,fixup:So},s:z,i:z,alpha:{use:z,fixup:zt}},difference:{h:Md},average:{h:Mo}};function vO({h:e,s:t,l:r,alpha:n}){e=ir(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=r+t*(r<.5?r:1-r),i=o-(o-r)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:o,g:i,b:2*r-o};break;case 1:s={r:i,g:o,b:2*r-o};break;case 2:s={r:2*r-o,g:o,b:i};break;case 3:s={r:2*r-o,g:i,b:o};break;case 4:s={r:i,g:2*r-o,b:o};break;case 5:s={r:o,g:2*r-o,b:i};break;default:s={r:2*r-o,g:2*r-o,b:2*r-o}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}function wO({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsl",s:o===i?0:(o-i)/(1-Math.abs(o+i-1)),l:.5*(o+i)};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const $O=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},kO=new RegExp(`^hsla?\\(\\s*${zI}${oa}${ll}${oa}${ll}\\s*(?:,\\s*${bg}\\s*)?\\)$`),xO=e=>{let t=e.match(kO);if(!t)return;let r={mode:"hsl"};return t[3]!==void 0?r.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(r.h=$O(t[1],t[2])),t[4]!==void 0&&(r.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(r.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?r.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[7]))),r};function DO(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const r={mode:"hsl"},[,n,o,i,s]=t;if(n.type!==L.None){if(n.type===L.Percentage)return;r.h=n.value}if(o.type!==L.None){if(o.type===L.Hue)return;r.s=o.value/100}if(i.type!==L.None){if(i.type===L.Hue)return;r.l=i.value/100}return s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const P$={mode:"hsl",toMode:{rgb:vO},fromMode:{rgb:wO},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[DO,xO],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:z,fixup:So},s:z,l:z,alpha:{use:z,fixup:zt}},difference:{h:Md},average:{h:Mo}};function I$({h:e,s:t,v:r,alpha:n}){e=ir(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r,g:r*(1-t*o),b:r*(1-t)};break;case 1:i={r:r*(1-t*o),g:r,b:r*(1-t)};break;case 2:i={r:r*(1-t),g:r,b:r*(1-t*o)};break;case 3:i={r:r*(1-t),g:r*(1-t*o),b:r};break;case 4:i={r:r*(1-t*o),g:r*(1-t),b:r};break;case 5:i={r,g:r*(1-t),b:r*(1-t*o)};break;default:i={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return i.mode="rgb",n!==void 0&&(i.alpha=n),i}function O$({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsv",s:o===0?0:1-i/o,v:o};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const B$={mode:"hsv",toMode:{rgb:I$},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:O$},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:z,fixup:So},s:z,v:z,alpha:{use:z,fixup:zt}},difference:{h:Md},average:{h:Mo}};function AO({h:e,w:t,b:r,alpha:n}){if(t===void 0&&(t=0),r===void 0&&(r=0),t+r>1){let o=t+r;t/=o,r/=o}return I$({h:e,s:r===1?1:1-t/(1-r),v:1-r,alpha:n})}function EO(e){let t=O$(e);if(t===void 0)return;let r=t.s!==void 0?t.s:0,n=t.v!==void 0?t.v:0,o={mode:"hwb",w:(1-r)*n,b:1-n};return t.h!==void 0&&(o.h=t.h),t.alpha!==void 0&&(o.alpha=t.alpha),o}function CO(e,t){if(!t||t[0]!=="hwb")return;const r={mode:"hwb"},[,n,o,i,s]=t;if(n.type!==L.None){if(n.type===L.Percentage)return;r.h=n.value}if(o.type!==L.None){if(o.type===L.Hue)return;r.w=o.value/100}if(i.type!==L.None){if(i.type===L.Hue)return;r.b=i.value/100}return s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const SO={mode:"hwb",toMode:{rgb:AO},fromMode:{rgb:EO},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[CO],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:z,fixup:So},w:z,b:z,alpha:{use:z,fixup:zt}},difference:{h:dO},average:{h:Mo}},R$=203,Pd=.1593017578125,L$=78.84375,Id=.8359375,Od=18.8515625,Bd=18.6875;function Vf(e){if(e<0)return 0;const t=Math.pow(e,1/L$);return 1e4*Math.pow(Math.max(0,t-Id)/(Od-Bd*t),1/Pd)}function Wf(e){if(e<0)return 0;const t=Math.pow(e/1e4,Pd);return Math.pow((Id+Od*t)/(1+Bd*t),L$)}const Kf=e=>Math.max(e/R$,0),K1=({i:e,t,p:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=Vf(e+.008609037037932761*t+.11102962500302593*r),i=Vf(e-.00860903703793275*t-.11102962500302599*r),s=Vf(e+.5600313357106791*t-.32062717498731885*r),a={mode:"xyz65",x:Kf(2.070152218389422*o-1.3263473389671556*i+.2066510476294051*s),y:Kf(.3647385209748074*o+.680566024947227*i-.0453045459220346*s),z:Kf(-.049747207535812*o-.0492609666966138*i+1.1880659249923042*s)};return n!==void 0&&(a.alpha=n),a},Gf=(e=0)=>Math.max(e*R$,0),G1=({x:e,y:t,z:r,alpha:n})=>{const o=Gf(e),i=Gf(t),s=Gf(r),a=Wf(.3592832590121217*o+.6976051147779502*i-.0358915932320289*s),l=Wf(-.1920808463704995*o+1.1004767970374323*i+.0753748658519118*s),c=Wf(.0070797844607477*o+.0748396662186366*i+.8433265453898765*s),d=.5*a+.5*l,f=1.61376953125*a-3.323486328125*l+1.709716796875*c,h=4.378173828125*a-4.24560546875*l-.132568359375*c,m={mode:"itp",i:d,t:f,p:h};return n!==void 0&&(m.alpha=n),m},MO={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:K1,rgb:e=>fs(K1(e))},fromMode:{xyz65:G1,rgb:e=>G1(ds(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:z,t:z,p:z,alpha:{use:z,fixup:zt}}},FO=134.03437499999998,TO=16295499532821565e-27,Hf=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,Pd);return Math.pow((Id+Od*t)/(1+Bd*t),FO)},Zf=(e=0)=>Math.max(e*203,0),j$=({x:e,y:t,z:r,alpha:n})=>{e=Zf(e),t=Zf(t),r=Zf(r);let o=1.15*e-.15*r,i=.66*t+.34*e,s=Hf(.41478972*o+.579999*i+.014648*r),a=Hf(-.20151*o+1.120649*i+.0531008*r),l=Hf(-.0166008*o+.2648*i+.6684799*r),c=(s+a)/2,d={mode:"jab",j:.44*c/(1-.56*c)-TO,a:3.524*s-4.066708*a+.542708*l,b:.199076*s+1.096799*a-1.295875*l};return n!==void 0&&(d.alpha=n),d},NO=134.03437499999998,H1=16295499532821565e-27,Jf=e=>{if(e<0)return 0;let t=Math.pow(e,1/NO);return 1e4*Math.pow((Id-t)/(Bd*t-Od),1/Pd)},Yf=e=>e/203,_$=({j:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+H1)/(.44+.56*(e+H1)),i=Jf(o+.13860504*t+.058047316*r),s=Jf(o-.13860504*t-.058047316*r),a=Jf(o-.096019242*t-.8118919*r),l={mode:"xyz65",x:Yf(1.661373024652174*i-.914523081304348*s+.23136208173913045*a),y:Yf(-.3250758611844533*i+1.571847026732543*s-.21825383453227928*a),z:Yf(-.090982811*i-.31272829*s+1.5227666*a)};return n!==void 0&&(l.alpha=n),l},U$=e=>{let t=j$(ds(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},z$=e=>fs(_$(e)),PO={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:U$,xyz65:j$},toMode:{rgb:z$,xyz65:_$},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:z,a:z,b:z,alpha:{use:z,fixup:zt}}},Z1=({j:e,a:t,b:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),i={mode:"jch",j:e,c:o};return o&&(i.h=ir(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(i.alpha=n),i},J1=({j:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"jab",j:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},IO={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:J1,rgb:e=>z$(J1(e))},fromMode:{rgb:e=>Z1(U$(e)),jab:Z1},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:z,fixup:So},c:z,j:z,alpha:{use:z,fixup:zt}},difference:{h:Fd},average:{h:Mo}},Rd=Math.pow(29,3)/Math.pow(3,3),yg=Math.pow(6,3)/Math.pow(29,3);let Xf=e=>Math.pow(e,3)>yg?Math.pow(e,3):(116*e-16)/Rd;const vg=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,i=t/500+o,s=o-r/200,a={mode:"xyz50",x:Xf(i)*St.X,y:Xf(o)*St.Y,z:Xf(s)*St.Z};return n!==void 0&&(a.alpha=n),a},ru=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Aa({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*r,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*r,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*r});return n!==void 0&&(o.alpha=n),o},q$=e=>ru(vg(e)),nu=e=>{let{r:t,g:r,b:n,alpha:o}=Da(e),i={mode:"xyz50",x:.436065742824811*t+.3851514688337912*r+.14307845442264197*n,y:.22249319175623702*t+.7168870538238823*r+.06061979053616537*n,z:.013923904500943465*t+.09708128566574634*r+.7140993584005155*n};return o!==void 0&&(i.alpha=o),i},Qf=e=>e>yg?Math.cbrt(e):(Rd*e+16)/116,wg=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Qf(e/St.X),i=Qf(t/St.Y),s=Qf(r/St.Z),a={mode:"lab",l:116*i-16,a:500*(o-i),b:200*(i-s)};return n!==void 0&&(a.alpha=n),a},V$=e=>{let t=wg(nu(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function OO(e,t){if(!t||t[0]!=="lab")return;const r={mode:"lab"},[,n,o,i,s]=t;if(!(n.type===L.Hue||o.type===L.Hue||i.type===L.Hue))return n.type!==L.None&&(r.l=Math.min(Math.max(0,n.value),100)),o.type!==L.None&&(r.a=o.type===L.Number?o.value:o.value*125/100),i.type!==L.None&&(r.b=i.type===L.Number?i.value:i.value*125/100),s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const $g={mode:"lab",toMode:{xyz50:vg,rgb:q$},fromMode:{xyz50:wg,rgb:V$},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[OO],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:z,a:z,b:z,alpha:{use:z,fixup:zt}}},BO={...$g,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:M$,rgb:Td},fromMode:{xyz65:F$,rgb:Nd},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function RO(e,t){if(!t||t[0]!=="lch")return;const r={mode:"lch"},[,n,o,i,s]=t;if(n.type!==L.None){if(n.type===L.Hue)return;r.l=Math.min(Math.max(0,n.value),100)}if(o.type!==L.None&&(r.c=Math.max(0,o.type===L.Number?o.value:o.value*150/100)),i.type!==L.None){if(i.type===L.Percentage)return;r.h=i.value}return s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const kg={mode:"lch",toMode:{lab:si,rgb:e=>q$(si(e))},fromMode:{rgb:e=>ii(V$(e)),lab:ii},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[RO],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:z,fixup:So},c:z,l:z,alpha:{use:z,fixup:zt}},difference:{h:Fd},average:{h:Mo}},LO={...kg,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>si(e,"lab65"),rgb:e=>Td(si(e,"lab65"))},fromMode:{rgb:e=>ii(Nd(e),"lch65"),lab65:e=>ii(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},W$=({l:e,u:t,v:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),i={mode:"lchuv",l:e,c:o};return o&&(i.h=ir(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(i.alpha=n),i},K$=({l:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"luv",l:e,u:t?t*Math.cos(r/180*Math.PI):0,v:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},G$=(e,t,r)=>4*e/(e+15*t+3*r),H$=(e,t,r)=>9*t/(e+15*t+3*r),jO=G$(St.X,St.Y,St.Z),_O=H$(St.X,St.Y,St.Z),UO=e=>e<=yg?Rd*e:116*Math.cbrt(e)-16,kh=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=UO(t/St.Y),i=G$(e,t,r),s=H$(e,t,r);!isFinite(i)||!isFinite(s)?o=i=s=0:(i=13*o*(i-jO),s=13*o*(s-_O));let a={mode:"luv",l:o,u:i,v:s};return n!==void 0&&(a.alpha=n),a},zO=(e,t,r)=>4*e/(e+15*t+3*r),qO=(e,t,r)=>9*t/(e+15*t+3*r),VO=zO(St.X,St.Y,St.Z),WO=qO(St.X,St.Y,St.Z),xh=({l:e,u:t,v:r,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),r===void 0&&(r=0);let o=t/(13*e)+VO,i=r/(13*e)+WO,s=St.Y*(e<=8?e/Rd:Math.pow((e+16)/116,3)),a=s*(9*o)/(4*i),l=s*(12-3*o-20*i)/(4*i),c={mode:"xyz50",x:a,y:s,z:l};return n!==void 0&&(c.alpha=n),c},KO=e=>W$(kh(nu(e))),GO=e=>ru(xh(K$(e))),HO={mode:"lchuv",toMode:{luv:K$,rgb:GO},fromMode:{rgb:KO,luv:W$},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:z,fixup:So},c:z,l:z,alpha:{use:z,fixup:zt}},difference:{h:Fd},average:{h:Mo}},ZO={...xa,mode:"lrgb",toMode:{rgb:Aa},fromMode:{rgb:Da},parse:["srgb-linear"],serialize:"srgb-linear"},JO={mode:"luv",toMode:{xyz50:xh,rgb:e=>ru(xh(e))},fromMode:{xyz50:kh,rgb:e=>kh(nu(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:z,u:z,v:z,alpha:{use:z,fixup:zt}}},Z$=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*r),i=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*r),s=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*r),a={mode:"oklab",l:.210454268309314*o+.7936177747023054*i-.0040720430116193*s,a:1.9779985324311684*o-2.42859224204858*i+.450593709617411*s,b:.0259040424655478*o+.7827717124575296*i-.8086757549230774*s};return n!==void 0&&(a.alpha=n),a},Ld=e=>{let t=Z$(Da(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},ou=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.pow(e+.3963377773761749*t+.2158037573099136*r,3),i=Math.pow(e-.1055613458156586*t-.0638541728258133*r,3),s=Math.pow(e-.0894841775298119*t-1.2914855480194092*r,3),a={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*i+.2309699031821044*s,g:-1.2684379732850317*o+2.6097573492876887*i-.3413193760026573*s,b:-.0041960761386756*o-.7034186179359362*i+1.7076146940746117*s};return n!==void 0&&(a.alpha=n),a},jd=e=>Aa(ou(e));function Dh(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}function Tc(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function YO(e,t){let r,n,o,i,s,a,l,c;-1.88170328*e-.80936493*t>1?(r=1.19086277,n=1.76576728,o=.59662641,i=.75515197,s=.56771245,a=4.0767416621,l=-3.3077115913,c=.2309699292):1.81444104*e-1.19445276*t>1?(r=.73956515,n=-.45954404,o=.08285427,i=.1254107,s=.14503204,a=-1.2684380046,l=2.6097574011,c=-.3413193965):(r=1.35733652,n=-.00915799,o=-1.1513021,i=-.50559606,s=.00692167,a=-.0041960863,l=-.7034186147,c=1.707614701);let d=r+n*e+o*t+i*e*e+s*e*t,f=.3963377774*e+.2158037573*t,h=-.1055613458*e-.0638541728*t,m=-.0894841775*e-1.291485548*t;{let g=1+d*f,b=1+d*h,y=1+d*m,$=g*g*g,x=b*b*b,E=y*y*y,N=3*f*g*g,B=3*h*b*b,Z=3*m*y*y,Q=6*f*f*g,ee=6*h*h*b,J=6*m*m*y,ge=a*$+l*x+c*E,ve=a*N+l*B+c*Z,Me=a*Q+l*ee+c*J;d=d-ge*ve/(ve*ve-.5*ge*Me)}return d}function xg(e,t){let r=YO(e,t),n=ou({l:1,a:r*e,b:r*t}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),i=o*r;return[o,i]}function XO(e,t,r,n,o,i=null){i||(i=xg(e,t));let s;if((r-o)*i[1]-(i[0]-o)*n<=0)s=i[1]*o/(n*i[0]+i[1]*(o-r));else{s=i[1]*(o-1)/(n*(i[0]-1)+i[1]*(o-r));{let a=r-o,l=n,c=.3963377774*e+.2158037573*t,d=-.1055613458*e-.0638541728*t,f=-.0894841775*e-1.291485548*t,h=a+l*c,m=a+l*d,g=a+l*f;{let b=o*(1-s)+s*r,y=s*n,$=b+y*c,x=b+y*d,E=b+y*f,N=$*$*$,B=x*x*x,Z=E*E*E,Q=3*h*$*$,ee=3*m*x*x,J=3*g*E*E,ge=6*h*h*$,ve=6*m*m*x,Me=6*g*g*E,rt=4.0767416621*N-3.3077115913*B+.2309699292*Z-1,Ke=4.0767416621*Q-3.3077115913*ee+.2309699292*J,Dr=4.0767416621*ge-3.3077115913*ve+.2309699292*Me,qt=Ke/(Ke*Ke-.5*rt*Dr),zn=-rt*qt,eo=-1.2684380046*N+2.6097574011*B-.3413193965*Z-1,nn=-1.2684380046*Q+2.6097574011*ee-.3413193965*J,Xt=-1.2684380046*ge+2.6097574011*ve-.3413193965*Me,Ve=nn/(nn*nn-.5*eo*Xt),Nt=-eo*Ve,on=-.0041960863*N-.7034186147*B+1.707614701*Z-1,ur=-.0041960863*Q-.7034186147*ee+1.707614701*J,sn=-.0041960863*ge-.7034186147*ve+1.707614701*Me,wn=ur/(ur*ur-.5*on*sn),Fo=-on*wn;zn=qt>=0?zn:1e6,Nt=Ve>=0?Nt:1e6,Fo=wn>=0?Fo:1e6,s+=Math.min(zn,Math.min(Nt,Fo))}}}return s}function Dg(e,t,r=null){r||(r=xg(e,t));let n=r[0],o=r[1];return[o/n,o/(1-n)]}function J$(e,t,r){let n=xg(t,r),o=XO(t,r,e,1,e,n),i=Dg(t,r,n),s=.11516993+1/(7.4477897+4.1590124*r+t*(-2.19557347+1.75198401*r+t*(-2.13704948-10.02301043*r+t*(-4.24894561+5.38770819*r+4.69891013*t)))),a=.11239642+1/(1.6132032-.68124379*r+t*(.40370612+.90148123*r+t*(-.27087943+.6122399*r+t*(.00299215-.45399568*r-.14661872*t)))),l=o/Math.min(e*i[0],(1-e)*i[1]),c=e*s,d=(1-e)*a,f=.9*l*Math.sqrt(Math.sqrt(1/(1/(c*c*c*c)+1/(d*d*d*d))));return c=e*.4,d=(1-e)*.8,[Math.sqrt(1/(1/(c*c)+1/(d*d))),f,o]}function Y1(e){const t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:Dh(t)};e.alpha!==void 0&&(o.alpha=e.alpha);let i=Math.sqrt(r*r+n*n);if(!i)return o.s=0,o;let[s,a,l]=J$(t,r/i,n/i),c;if(i<a){let d=0,f=.8*s,h=1-f/a;c=(i-d)/(f+h*(i-d))*.8}else{let d=a,f=.2*a*a*1.25*1.25/s,h=1-f/(l-a);c=.8+.2*((i-d)/(f+h*(i-d)))}return c&&(o.s=c,o.h=ir(Math.atan2(n,r)*180/Math.PI)),o}function X1(e){let t=e.h!==void 0?e.h:0,r=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:Tc(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!r||n===1)return o.a=o.b=0,o;let i=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[a,l,c]=J$(o.l,i,s),d,f,h,m;r<.8?(d=1.25*r,f=0,h=.8*a,m=1-h/l):(d=5*(r-.8),f=l,h=.2*l*l*1.25*1.25/a,m=1-h/(c-l));let g=f+d*h/(1-m*d);return o.a=g*i,o.b=g*s,o}const QO={...P$,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:Y1,rgb:e=>Y1(Ld(e))},toMode:{oklab:X1,rgb:e=>jd(X1(e))}};function Q1(e){let t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(r*r+n*n),i=o?r/o:1,s=o?n/o:1,[a,l]=Dg(i,s),c=.5,d=1-c/a,f=l/(o+t*l),h=f*t,m=f*o,g=Tc(h),b=m*g/h,y=ou({l:g,a:i*b,b:s*b}),$=Math.cbrt(1/Math.max(y.r,y.g,y.b,0));t=t/$,o=o/$*Dh(t)/t,t=Dh(t);const x={mode:"okhsv",s:o?(c+l)*m/(l*c+l*d*m):0,v:t?t/h:0};return x.s&&(x.h=ir(Math.atan2(n,r)*180/Math.PI)),e.alpha!==void 0&&(x.alpha=e.alpha),x}function ey(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const r=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,i=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[a,l]=Dg(i,s),c=.5,d=1-c/a,f=1-n*c/(c+l-l*d*n),h=n*l*c/(c+l-l*d*n),m=Tc(f),g=h*m/f,b=ou({l:m,a:i*g,b:s*g}),y=Math.cbrt(1/Math.max(b.r,b.g,b.b,0)),$=Tc(o*f),x=h*$/f;return t.l=$*y,t.a=x*i*y,t.b=x*s*y,t}const eB={...B$,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:Q1,rgb:e=>Q1(Ld(e))},toMode:{oklab:ey,rgb:e=>jd(ey(e))}};function tB(e,t){if(!t||t[0]!=="oklab")return;const r={mode:"oklab"},[,n,o,i,s]=t;if(!(n.type===L.Hue||o.type===L.Hue||i.type===L.Hue))return n.type!==L.None&&(r.l=Math.min(Math.max(0,n.type===L.Number?n.value:n.value/100),1)),o.type!==L.None&&(r.a=o.type===L.Number?o.value:o.value*.4/100),i.type!==L.None&&(r.b=i.type===L.Number?i.value:i.value*.4/100),s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const rB={...$g,mode:"oklab",toMode:{lrgb:ou,rgb:jd},fromMode:{lrgb:Z$,rgb:Ld},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[tB],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function nB(e,t){if(!t||t[0]!=="oklch")return;const r={mode:"oklch"},[,n,o,i,s]=t;if(n.type!==L.None){if(n.type===L.Hue)return;r.l=Math.min(Math.max(0,n.type===L.Number?n.value:n.value/100),1)}if(o.type!==L.None&&(r.c=Math.max(0,o.type===L.Number?o.value:o.value*.4/100)),i.type!==L.None){if(i.type===L.Percentage)return;r.h=i.value}return s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const oB={...kg,mode:"oklch",toMode:{oklab:e=>si(e,"oklab"),rgb:e=>jd(si(e,"oklab"))},fromMode:{rgb:e=>ii(Ld(e),"oklch"),oklab:e=>ii(e,"oklch")},parse:[nB],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},ty=e=>{let{r:t,g:r,b:n,alpha:o}=Da(e),i={mode:"xyz65",x:.486570948648216*t+.265667693169093*r+.1982172852343625*n,y:.2289745640697487*t+.6917385218365062*r+.079286914093745*n,z:0*t+.0451133818589026*r+1.043944368900976*n};return o!==void 0&&(i.alpha=o),i},ry=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Aa({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*r,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*r,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*r},"p3");return n!==void 0&&(o.alpha=n),o},iB={...xa,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>ry(ds(e)),xyz65:ry},toMode:{rgb:e=>fs(ty(e)),xyz65:ty}},e0=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},ny=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"prophoto",r:e0(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*r),g:e0(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*r),b:e0(e*0+t*0+1.2119675456389452*r)};return n!==void 0&&(o.alpha=n),o},t0=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},oy=e=>{let t=t0(e.r),r=t0(e.g),n=t0(e.b),o={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*r+.0313477341283922*n,y:.2880748288194013*t+.7118352342418731*r+899369387256e-16*n,z:0*t+0*r+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},sB={...xa,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:ny,rgb:e=>ny(nu(e))},toMode:{xyz50:oy,rgb:e=>ru(oy(e))}},iy=1.09929682680944,aB=.018053968510807,r0=e=>{const t=Math.abs(e);return t>aB?(Math.sign(e)||1)*(iy*Math.pow(t,.45)-(iy-1)):4.5*e},sy=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"rec2020",r:r0(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*r),g:r0(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*r),b:r0(e*.0176398574453108-t*.0427706132578085+.9421031212354739*r)};return n!==void 0&&(o.alpha=n),o},ay=1.09929682680944,lB=.018053968510807,n0=(e=0)=>{let t=Math.abs(e);return t<lB*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+ay-1)/ay,1/.45)},ly=e=>{let t=n0(e.r),r=n0(e.g),n=n0(e.b),o={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*r+.1688809751641721*n,y:.262700212011267*t+.6779980715188708*r+.059301716469862*n,z:0*t+.0280726930490874*r+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},uB={...xa,mode:"rec2020",fromMode:{xyz65:sy,rgb:e=>sy(ds(e))},toMode:{xyz65:ly,rgb:e=>fs(ly(e))},parse:["rec2020"],serialize:"rec2020"},Ui=.0037930732552754493,Y$=Math.cbrt(Ui),o0=e=>Math.cbrt(e)-Y$,cB=e=>{const{r:t,g:r,b:n,alpha:o}=Da(e),i=o0(.3*t+.622*r+.078*n+Ui),s=o0(.23*t+.692*r+.078*n+Ui),a=o0(.2434226892454782*t+.2047674442449682*r+.5518098665095535*n+Ui),l={mode:"xyb",x:(i-s)/2,y:(i+s)/2,b:a-(i+s)/2};return o!==void 0&&(l.alpha=o),l},i0=e=>Math.pow(e+Y$,3),dB=({x:e,y:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=i0(e+t)-Ui,i=i0(t-e)-Ui,s=i0(r+t)-Ui,a=Aa({r:11.031566904639861*o-9.866943908131562*i-.16462299650829934*s,g:-3.2541473810744237*o+4.418770377582723*i-.16462299650829934*s,b:-3.6588512867136815*o+2.7129230459360922*i+1.9459282407775895*s});return n!==void 0&&(a.alpha=n),a},fB={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:dB},fromMode:{rgb:cB},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:z,y:z,b:z,alpha:{use:z,fixup:zt}}},hB={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:ru,lab:wg},fromMode:{rgb:nu,lab:vg},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:z,y:z,z,alpha:{use:z,fixup:zt}}},mB=e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let i={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*r-.0501922295431356*n,y:.0296278156881593*t+.990434484573249*r-.0170738250293851*n,z:-.0092430581525912*t+.0150551448965779*r+.7518742899580008*n};return o!==void 0&&(i.alpha=o),i},gB=e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let i={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*r+.0632593086610217*n,y:-.0283697069632081*t+1.0099954580058226*r+.021041398966943*n,z:.0123140016883199*t-.0205076964334779*r+1.3303659366080753*n};return o!==void 0&&(i.alpha=o),i},pB={mode:"xyz65",toMode:{rgb:fs,xyz50:mB},fromMode:{rgb:ds,xyz50:gB},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:z,y:z,z,alpha:{use:z,fixup:zt}}},bB=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*r,i:.59597799*e-.2741761*t-.32180189*r,q:.21147017*e-.52261711*t+.31114694*r};return n!==void 0&&(o.alpha=n),o},yB=({y:e,i:t,q:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"rgb",r:e+.95608445*t+.6208885*r,g:e-.27137664*t-.6486059*r,b:e-1.10561724*t+1.70250126*r};return n!==void 0&&(o.alpha=n),o},vB={mode:"yiq",toMode:{rgb:yB},fromMode:{rgb:bB},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:z,i:z,q:z,alpha:{use:z,fixup:zt}}},wB=e=>Math.max(0,Math.min(1,e||0)),s0=e=>Math.round(wB(e)*255),$B=Yi("rgb"),kB=e=>{if(e===void 0)return;let t=s0(e.r),r=s0(e.g),n=s0(e.b);return"#"+(1<<24|t<<16|r<<8|n).toString(16).slice(1)},xB=e=>kB($B(e)),DB=e=>{const t={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},AB=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function EB(e="rgb"){const{gamut:t}=Sd(e);if(!t)return n=>!0;const r=Yi(typeof t=="string"?t:e);return n=>AB(r(n))}function CB(e="rgb"){const{gamut:t}=Sd(e);if(!t)return i=>ph(i);const r=typeof t=="string"?t:e,n=Yi(r),o=EB(r);return i=>{const s=ph(i);if(!s)return;const a=n(s);if(o(a))return s;const l=DB(a);return s.mode===l.mode?l:Yi(s.mode)(l)}}je(iO);je(hO);je(mO);je(gO);je(yO);je(P$);je(B$);je(SO);je(MO);je(PO);je(IO);je($g);je(BO);je(kg);je(LO);je(HO);je(ZO);je(JO);je(QO);je(eB);je(rB);je(oB);je(iB);je(sB);je(uB);je(xa);je(fB);je(hB);je(pB);je(vB);const SB=fO("rgb");class yo{constructor(t){this.set(t)}static isValidColorString(t){try{return new yo(t),!0}catch{return!1}}static isColor(t){return t instanceof yo}static deserialize(t){const r=JSON.parse(t),n=new yo("black");return Fn(r).forEach(([o,i])=>{o==="originalColorSyntax"?n.originalColorSyntax=pt.isEnumValue(i,we,"Cannot deserialize: invalid color syntax."):n._allColors[o]=i}),n}getRgbDistance(t){return SB(this.#e,t)}getClosestNamedColor(){return ze(Tl).reduce((t,r)=>{const n=this.getRgbDistance(r);return n<t.distance?{distance:n,name:r}:t},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=we.hex;#e=pt.isDefined(vh("black"));_allColors={names:["black"],[we.name]:"black",hexString:"#000000",[we.hex]:{r:0,g:0,b:0},[we.rgb]:{r:0,g:0,b:0},[we.hsl]:{h:0,s:0,l:0},[we.hwb]:{h:0,w:0,b:0},[we.lab]:{l:0,a:0,b:0},[we.lch]:{l:0,c:0,h:0},[we.oklab]:{l:0,a:0,b:0},[we.oklch]:{l:0,c:0,h:0}};clone(){return yo.deserialize(this.serialize())}setByString(t){const r=vh(t);if(!r)throw new Error(`Unable to parse invalid color string: '${t}'`);this.originalColorSyntax=OI(t),this.#e=r,this.pullFromInternalColor()}set(t){if(S.isString(t))return this.setByString(t);if(Lt.isLengthExactly(Object.keys(t),1,`Cannot set multiple color formats at once: got '${u6(Object.keys(t))}'`),t.hexString||t.name)this.setByString(t.hexString||t.name);else{const[r,n]=pt.isDefined(Fn(t)[0]),o=Wn[r],i=Object.values(it(o.coords,s=>{const a=n[s],l=o.coords[pt.isKeyOf(s,o.coords)],c=a!=null&&a>=l.min&&a<=l.max?n[s]:this[r][s];return pt.isDefined(c)}));this.setByString(`${o.conversionFormat}(${i.join(" ")})`)}}pullFromInternalColor(){qr(oi).forEach(t=>{const r=Wn[t],n=r.conversionFormat,o=S.isKeyOf(this.#e.mode,Wn)?Wn[this.#e.mode]:void 0,i=CB(r.colorSpace===o?.colorSpace?n:"rgb")(Yi(n)(this.#e));i||Lt.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${t}'.`),ze(this[t]).forEach(s=>{const a=i[s],l=r.coords[pt.isKeyOf(s,r.coords)];a!=null&&(this._allColors[t][s]=w2((a||0)*(l.factor||1),{digits:l.digits||0}))})}),this._allColors.hexString=xB(this.#e),this._allColors.names=MB(this.rgb),this._allColors[we.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return Dn(this._allColors)}toFormattedStrings(){return{...it(Wn,r=>Object.values(this[r]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(L1," "),[we.name]:(this.names[0]||"").padEnd(L1," "),[we.hexString]:this[we.hexString]}}toCss(){return{...it(Wn,r=>{const n=Object.values(this[r]);return`${r}(${n.join(" ")})`}),[we.hexString]:this[we.hexString],[we.name]:this.names[0]||""}}get names(){return Dn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[we.hexString]}get hex(){return Dn(this._allColors[we.hex])}get rgb(){return Dn(this._allColors[we.rgb])}get hsl(){return Dn(this._allColors[we.hsl])}get hwb(){return Dn(this._allColors[we.hwb])}get lab(){return Dn(this._allColors[we.lab])}get lch(){return Dn(this._allColors[we.lch])}get oklab(){return Dn(this._allColors[we.oklab])}get oklch(){return Dn(this._allColors[we.oklch])}}function MB(e){return Rn(Fn(Tl),([t])=>t,(t,[,r])=>S.deepEquals(r,[e.r,e.g,e.b]))}function zr(e){return A`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}const a0=Un()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:({cssVars:e})=>A`
        :host {
            display: flex;
            align-items: center;
            font-family: ${gg["vira-monospace"].value};
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

        ${Te} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,events:{valueChange:et()},render({inputs:e,events:t,dispatch:r,cssVars:n}){const o=Wn[e.colorFormatName],i=o.coords[e.colorCoordinateName];if(!i)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,a=S3(s,f=>{const h=i.min+(i.max-i.min)*(f/s);return new yo({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:h}}).toCss()[o.conversionFormat]}),l=A`linear-gradient(to right, ${ke(a.join(","))})`,c=pt.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),d=i.radix?Math.round(c).toString(i.radix).toUpperCase().padStart(i.radixPad||0,"0"):String(c);return p`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${A`
                    ${n["vir-color-slider-gradient"].name}: ${l};
                `}
                step=${Math.pow(10,i.digits?-i.digits:0)}
                ${xN(f=>{Lt.instanceOf(f,HTMLInputElement),f.min=String(i.min),f.max=String(i.max),f.value=String(c)})}
                ${_("input",f=>{const h=kd(f,HTMLInputElement),m=Number(h.value);isNaN(m)||r(new t.valueChange(m))})}
            />
            <${Te.assign({value:d})}
                ${_(Te.events.valueChange,f=>{const h=i.radix?parseInt(f.detail,i.radix):Number(f.detail);isNaN(h)||r(new t.valueChange(h))})}
            ></${Te}>
        `}}),l0=Un()({tagName:"vir-color-format-sliders",styles:A`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${tu};
        }
    `,events:{colorChange:et()},render({inputs:e,dispatch:t,events:r}){const n=Wn[e.colorFormatName],o=ze(n.coords).map(i=>p`
                    <${a0.assign({color:e.color,colorCoordinateName:i,colorFormatName:e.colorFormatName})}
                        ${_(a0.events.valueChange,s=>{const a=e.color.clone();a.set({[e.colorFormatName]:{[i]:s.detail}});const l=a.toCss()[n.conversionFormat];t(new r.colorChange(l))})}
                    ></${a0}>
                `);return p`
            ${e.showFormatName?p`
                      <h3>${e.colorFormatName}</h3>
                  `:te}
            ${o}
        `}}),u0=Un()({tagName:"vir-color-swatch",styles:A`
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
    `,render({inputs:e}){const t=e.backgroundColor||e.foregroundColor,r=e.foregroundColor||"transparent";return p`
            <div
                style=${A`
                    background-color: ${ke(t)};
                    color: ${ke(r)};
                `}
            >
                <slot></slot>
            </div>
        `}}),c0=Un()({tagName:"vir-contrast-indicator",styles:A`
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

        .${ke(fe.Invisible)} {
            color: red;
        }
        .${ke(fe.Decoration)} {
            color: #ff6600;
        }
        .${ke(fe.Placeholder)} {
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
    `,render({inputs:e}){const t=Ad.toReversed().slice(1).map(o=>p`
                    <div
                        class="gauge-level ${xr({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return p`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${bP[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),uy=Un()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Bt};
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
            font-family: ${gg["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${tu};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${c0} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(a=>{const l=[r.color[a].name,r.showVarValues||e.forceShowEverything?":":""].filter(S.isTruthy).join(""),c=r.showVarValues||e.forceShowEverything?p`
                          <span>${r.color[a].default}</span>
                      `:te;return p`
                <p>
                    <span>${l}</span>
                    ${c}
                </p>
            `}),o=r.showVarNames||e.forceShowEverything?p`
                      <div class="css-var-names">${n}</div>
                  `:te,i=e.previewElement?mP({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=i&&(r.showContrast||e.forceShowEverything)?p`
                      <${c0.assign({contrast:i,fontWeight:r.fontWeight})}></${c0}>
                  `:te;return p`
            <button
                ${_("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${Zi(a=>{t({previewElement:pt.instanceOf(a,HTMLElement)})})}
                class="color-preview"
                style=${A`
                    color: ${ke(r.color.foreground.default)};
                    background: ${ke(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${A`
                                visibility: ${ke((i?.fontSizes[400]||1/0)>150?"hidden":"visible")};
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
        `}});class FB{shapes;options;constructor(t,r={}){this.shapes=t,this.options=r,this.storeName=r.storeName||"local-storage-client",this.get=it(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.set=it(this.shapes,n=>o=>{$c(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const i=this.getAllValues();return i[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(i)),o}),this.delete=it(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o))})}storeName;getAllValues({throwErrorOnFailure:t=!1}={}){return h2(()=>{const r=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return m2(r,(n,o)=>{const i=this.shapes[n];if(i){if(t)$c(o,i,{allowExtraKeys:!0});else if(!Vo(o,i,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:r=>{if(t)throw ia(r,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const d0=new FB({lastFormat:Gi(oi)}),TB=hl(oi).map(e=>({value:e,label:e.toUpperCase()})),La=Un()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:Vs.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:Vs.Length}},state(){return{selectedFormatName:d0.get.lastFormat()||oi.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>A`
        :host {
            display: inline-flex;
        }

        ${t["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${Bt}
            cursor: pointer;
            display: flex;
        }

        ${de} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${u0} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${gg["vira-monospace"].value};
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 2px;
            align-items: center;

            & ${O} {
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
            ${Ri.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${P["vira-form-border-color"].name}: #ddd;
            color: #666;

            & ${Te} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:et()},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=yo.isColor(e.color)?e.color:new yo(e.color||"black"),s=Wn[n.selectedFormatName],a=n.rawInput??i.toCss()[s.rawSyntax],l=p`
            <div class="raw-input-wrapper">
                <${Te.assign({value:a})}
                    ${_(Te.events.valueChange,h=>{const m=h.detail;o({rawInput:m}),yo.isValidColorString(m)&&t(new r.colorChange(m))})}
                ></${Te}>
                <button
                    class="code-button"
                    ${_("click",async()=>{await globalThis.navigator.clipboard.writeText(a)})}
                >
                    <${O.assign({icon:ch,fitContainer:!0})}></${O}>
                </button>
            </div>
        `,c=p`
            <button
                class="code-button"
                ${_("click",async()=>{await globalThis.navigator.clipboard.writeText(i.hexString)})}
            >
                <span>${i.hexString}</span>
                <${O.assign({icon:ch,fitContainer:!0})}></${O}>
            </button>
        `,d=p`
            <div class="swatch-wrapper">
                <${u0.assign({backgroundColor:i})}></${u0}>
                ${e.showHexValue?c:te}
            </div>
        `,f=p`
            <div class="picker">
                <${qe.assign({options:TB,value:n.selectedFormatName})}
                    ${_(qe.events.valueChange,h=>{const m=Uh.isEnumValue(h.detail,oi);m&&(o({selectedFormatName:m}),d0.set.lastFormat(m))})}
                ></${qe}>
                ${l}
                <${l0.assign({color:i,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${_(l0.events.colorChange,h=>{t(new r.colorChange(h.detail)),o({rawInput:void 0})})}
                ></${l0}>
            </div>
        `;return e.alwaysShowPicker?p`
                ${d} ${f}
            `:p`
                <${de.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${de.slotNames.trigger}
                        ${_("mousedown",()=>{const h=d0.get.lastFormat();h&&o({selectedFormatName:h})})}
                    >
                        ${d}
                    </button>
                    <div class="pop-up" slot=${de.slotNames.popUp}>
                        ${f}
                    </div>
                </${de}>
            `}}),Nu="None";function NB({parent:e,title:t,theme:r,hideInverseColors:n,overrides:o,useVerticalLayout:i,prefixGroupByCount:s=2,hideCopyCode:a}){const l={"Show Var Names":{controlType:se.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:se.Checkbox,initValue:!0}},c={"Theme Override":{controlType:se.Dropdown,initValue:Nu,options:[Nu,...(o||[]).map(y=>{if(y.name===Nu)throw new Error(`Cannot have theme override named '${Nu}'`);return y.name})]}},d=Ne({parent:e,title:t,controls:l});function f({controls:y,theme:$,themeColorName:x}){const E=S.isKeyOf(x,$.colors)?$.colors[x]:void 0,N=S.isKeyOf(x,$.inverse)?$.inverse[x]:void 0;if(!E||!N)throw new Error(`No theme color found by name '${x}'`);const B=p`
            <${uy.assign({color:E,showVarValues:!0,showVarNames:y["Show Var Names"],showContrast:y["Show Contrast Tips"],fontWeight:400})}></${uy}>
        `;return p`
            <div class="with-inverse">${B}${te}</div>
        `}function h(y,$,x){const E=C3(Object.keys($.colors),N=>s?N.split("-").slice(0,s).join("-"):N);Object.entries(E).forEach(([N,B])=>{B&&y({title:N,styles:A`
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
                    `,render({controls:Z}){const ee=("Theme Override"in Z&&Z["Theme Override"]&&x?.find(J=>J.name===Z["Theme Override"])||void 0)?.asTheme||$;return p`
                            <div class="theme-wrapper">
                                ${B.map(J=>f({controls:Z,theme:ee,themeColorName:J}))}
                            </div>
                        `}})})}const m=["Click a color preview to show CSS var names and values."],g=Ne({parent:d,title:"Default",descriptionParagraphs:m,useVerticalExamples:i,controls:{...c},defineExamples({defineExample:y}){h(y,r,o)}}),b=(o||[]).map(y=>Ne({parent:d,title:y.name,useVerticalExamples:i,descriptionParagraphs:m,defineExamples({defineExample:$}){h($,y.asTheme,void 0)}}));return[d,g,...b]}function PB(e){if(!S.hasKey(T1,e))throw new Error(`No ViraTag color for variant '${e}'`);const t=T1[e];return A`
        :host(
                .vira-tag-color-${ke(e)}.vira-tag-emphasis-${ke(zo.Standard)}
            )
            button {
            ${zr(cr[t]["behind-bg"][fe.NonBodyText])}
            border-color: ${cr[t]["behind-bg"][fe.NonBodyText].background.value};

            &:hover {
                ${zr(cr[t]["behind-bg"][fe.Header])}
                border-color: ${cr[t]["behind-bg"][fe.Header].background.value};
            }
            &:active {
                ${zr(cr[t]["behind-bg"][fe.NonBodyText])}
                border-color: ${cr[t]["behind-bg"][fe.NonBodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${ke(e)}.vira-tag-emphasis-${ke(zo.Subtle)}
            )
            button {
            ${zr(cr[t]["on-self"][fe.BodyText])}
            border-color: ${cr[t]["on-self"][fe.BodyText].background.value};

            &:hover {
                ${zr(cr[t]["on-self"][fe.NonBodyText])}
                border-color: ${cr[t]["on-self"][fe.NonBodyText].background.value};
            }
            &:active {
                ${zr(cr[t]["on-self"][fe.BodyText])}
                border-color: ${cr[t]["on-self"][fe.BodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${ke(e)}.vira-tag-not-checked.vira-tag-not-checked.vira-tag-not-checked
            )
            button {
            color: ${cr[t]["on-self"][fe.BodyText].foreground.value};
            background-color: transparent;
            border-color: ${cr[t]["on-self"][fe.BodyText].background.value};

            &:hover {
                background-color: ${cr[t]["behind-bg"][fe.Invisible].background.value};
            }
            &:active {
                background-color: ${cr[t]["behind-bg"][fe.Decoration].background.value};
            }
        }
    `}function IB(){return ke([cn.Accent,cn.Danger,cn.Neutral,cn.Positive,cn.Warning].map(e=>PB(e)).join(" "))}const ja=tt()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"white","vira-tag-background-color":"black","vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:et(),cancel:et()},hostClasses:{"vira-tag-selectable":({inputs:e})=>S.isBoolean(e.isClickable?.selected),"vira-tag-checked":({inputs:e})=>!!e.isClickable?.selected,"vira-tag-not-checked":({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-cancellable":({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-not-clickable":({inputs:e})=>!e.isClickable,"vira-tag-disabled":({inputs:e})=>!!e.disabled,"vira-tag-size-large":({inputs:e})=>e.size===Ai.Large,"vira-tag-size-medium":({inputs:e})=>!e.size||e.size===Ai.Medium,"vira-tag-size-small":({inputs:e})=>e.size===Ai.Small,"vira-tag-emphasis-standard":({inputs:e})=>!e.emphasis||e.emphasis===zo.Standard,"vira-tag-emphasis-subtle":({inputs:e})=>e.emphasis===zo.Subtle,"vira-tag-color-accent":({inputs:e})=>!e.color||e.color===cn.Accent,"vira-tag-color-plain":({inputs:e})=>e.color===cn.Plain,"vira-tag-color-neutral":({inputs:e})=>e.color===cn.Neutral,"vira-tag-color-danger":({inputs:e})=>e.color===cn.Danger,"vira-tag-color-warning":({inputs:e})=>e.color===cn.Warning,"vira-tag-color-positive":({inputs:e})=>e.color===cn.Positive},styles:({cssVars:e,hostClasses:t})=>A`
        :host {
            display: inline-flex;
        }

        button {
            ${Bt}
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
            height: ${Pf[Ai.Large]}px;
            font-size: ${P["vira-form-large-text-size"].value};
            padding: 0 var(${e["vira-tag-horizontal-padding"].name}, 16px);
        }
        ${t["vira-tag-size-medium"].selector} button {
            height: ${Pf[Ai.Medium]}px;
            font-size: ${P["vira-form-medium-text-size"].value};
        }
        ${t["vira-tag-size-small"].selector} button {
            height: ${Pf[Ai.Small]}px;
            font-size: ${P["vira-form-small-text-size"].value};
        }

        ${IB()}

        :host(.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}) {
            cursor: not-allowed;
            ${ni}

            & button {
                ${zr(ce.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${ce.colors["vira-grey-behind-bg-decoration"].background.value}
            }

            &.${t["vira-tag-emphasis-subtle"].name} button {
                ${zr(ce.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${ce.colors["vira-grey-behind-bg-decoration"].background.value}
            }
        }

        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${ke(zo.Standard)}
            )
            button {
            ${zr(ce.inverse[Tr])};
            border-color: ${ce.inverse[Tr].background.value};

            &:hover {
                ${zr(ce.colors["vira-grey-behind-bg-non-body"])};
                border-color: ${ce.colors["vira-grey-behind-bg-non-body"].background.value};
            }
            &:active {
                ${zr(ce.inverse[Tr])};
                border-color: ${ce.inverse[Tr].background.value};
            }
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${ke(zo.Subtle)}
            )
            button {
            background-color: transparent;
            color: ${ce.colors[Tr].foreground.value};
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            color: ${ce.colors[Tr].foreground.value};
            background-color: transparent;
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${ke(zo.Subtle)}
            )
            button,
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            &:hover {
                ${zr(ce.colors["vira-grey-behind-fg-small-body"])}
                border-color: ${ce.colors["vira-grey-behind-fg-small-body"].background.value};
            }
            &:active {
                ${zr(ce.colors["vira-grey-behind-fg-body"])}
                border-color: ${ce.colors["vira-grey-behind-fg-body"].background.value};
            }
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=!e.isClickable||!!e.disabled;return p`
            <button
                ?disabled=${n}
                ${_("click",()=>{n||(e.isClickable?.selected!=null?t(new r.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&t(new r.cancel))})}
            >
                <${O.assign({icon:g$})}
                    class="selected-check"
                ></${O}>
                <span class="text">${String(e.text)}</span>
                <${O.assign({icon:p$})}
                    class="cancel-x"
                ></${O}>
            </button>
        `}});function X$(e){return gN({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function Q$(e,{ready:t,loading:r,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(i=>({[i.key]:i.element}))):t({[e.value.key]:e.value.element})}const rn=W5(),dn=rn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:({cssVars:e})=>A`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return p`
            <a
                href=${r}
                ${_("click",n=>{(!e.router||r$(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new Dc(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function OB(e,t){return e.entry.entryType===tr.Root?!1:e.entry.entryType===tr.Page||S.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:S.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const $s=rn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Ie["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Ie["element-book-nav-hover-background-color"].value};
            color: ${Ie["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Ie["element-book-nav-active-background-color"].value};
            color: ${Ie["element-book-nav-active-foreground-color"].value};
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
            background-color: ${Ie["element-book-nav-selected-background-color"].value};
            color: ${Ie["element-book-nav-selected-foreground-color"].value};
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

        ${O} {
            display: inline-flex;
            color: ${Ie["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!OB(r,e.selectedPath))return;const n=A`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${dn.assign({router:e.router,route:{paths:[Nr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${xr({"title-row":!0,selected:e.selectedPath?S.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Or(Ps(r,tr.ElementExample),p`
                                    <${O.assign({icon:y$})}></${O}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${dn}>
                </li>
            `});return p`
            <${dn.assign({route:zs,router:e.router})}>
                <slot>Book</slot>
            </${dn}>
            <ul>
                ${t}
            </ul>
        `}}),ai=rn()({tagName:"book-error",styles:A`
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
    `,render({inputs:e}){return(S.isArray(e.message)?e.message:[e.message]).map(r=>p`
                <p>${r}</p>
            `)}}),Pl=rn()({tagName:"book-page-controls",events:{controlValueChange:et()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Ie["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Te}, ${qe} {
            height: 24px;
            max-width: 128px;
        }

        ${O}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===se.Hidden)return"";const s=BB(e.currentValues[n],o,a=>{const l=S.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...Object.fromEntries(Object.keys(e.config).map(c=>[c,e.currentValues[c]])),[n]:a}}))});return p`
                    <div class="control-wrapper">
                        ${Or(i===0,p`
                                <${O.assign({icon:Rs})}
                                    class="options-icon"
                                ></${O}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===se.Custom?p`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function BB(e,t,r){return $i(t,se.Hidden)?"":$i(t,se.Checkbox)?p`
            <${me.assign({value:!!e})}
                ${_(me.events.valueChange,n=>{r(n.detail)})}
            ></${me}>
        `:$i(t,se.Color)?p`
            <${La.assign({color:e})}
                style=${A`
                    ${La.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${La.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${_(La.events.colorChange,n=>{r(n.detail)})}
            ></${La}>
        `:$i(t,se.Text)?p`
            <${Te.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${_(Te.events.valueChange,n=>{r(n.detail)})}
            ></${Te}>
        `:$i(t,se.Number)?p`
            <${Te.assign({value:e,allowedInputs:/[\d.]/})}
                ${_(Te.events.valueChange,n=>{r(n.detail)})}
            ></${Te}>
        `:$i(t,se.Dropdown)?p`
            <${qe.assign({value:e,options:t.options.map(n=>({label:n,value:n}))})}
                ${_(qe.events.valueChange,n=>{r(n.detail)})}
            ></${qe}>
        `:$i(t,se.Custom)?t.content:p`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const cy=rn()({tagName:"book-breadcrumbs",styles:A`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,s=o.slice(0,n+1),a=i?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${dn.assign({route:{hash:void 0,search:void 0,paths:[Nr.Book,...s]},router:e.router})}>
                    ${r}
                </${dn}>
                ${a}
            `}):p`
                &nbsp;
            `}}),f0=rn()({tagName:"book-breadcrumbs-bar",styles:A`
        :host {
            border-bottom: 1px solid
                ${Ie["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Ie["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return p`
            ${Or(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${cy.assign({currentRoute:e.currentRoute,router:e.router})}></${cy}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${_("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await zi({milliseconds:200}),n.value===o&&(n.value?t(new Dc({paths:[Nr.Search,encodeURIComponent(n.value)]})):t(new Dc(zs)))})}
            />
        `}}),dy=rn()({tagName:"book-entry-description",styles:A`
        :host {
            color: ${Ie["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Ie["element-book-page-foreground-color"].value};
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
            `)}}),fy=rn()({tagName:"book-page-wrapper",styles:A`
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
    `,render({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Nr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?f2(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?t:p`
                  <${dn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${dn}>
              `;return p`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?p`
                              <${ai.assign({message:n.message})}></${ai}>
                          `:p`
                              <${dy.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${dy}>
                              <${Pl.assign({config:e.pageNode.entry.controls,currentValues:Hh(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Pl}>
                          `}
                </div>
            </div>
        `}}),Pu=rn()({tagName:"book-element-example-title",styles:A`
        :host {
            display: flex;
            color: ${Ie["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[Nr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${dn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${dn}>
        `}}),hy=Symbol("unset-internal-state"),my=rn()({tagName:"book-element-example-viewer",state(){return{isUnset:hy}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw f2(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===hy&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return p`
                ${Or(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Zt(n)),console.error(n),p`
                <${ai.assign({message:`${t.elementExampleNode.entry.title} failed: ${Zt(n)}`})}></${ai}>
            `}},options:{allowPolymorphicState:!0}}),gy=rn()({tagName:"book-element-example-wrapper",styles:A`
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

        ${Pu} {
            color: ${Ie["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Pu} {
            color: ${Ie["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${Pu.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${Pu}>
                <${my.assign(e)}></${my}>
            </div>
        `}}),RB={milliseconds:10};let Ja;const Nc=new Map,Mi=new Map;function LB(){return Ja||(Ja=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Nc.get(r);if(n)if(t.isIntersecting){if(!Mi.has(r)){const o=globalThis.setTimeout(()=>{Mi.delete(r),n(),Ja?.unobserve(r),Nc.delete(r)},_s(RB,{milliseconds:!0}).milliseconds);Mi.set(r,o)}}else{const o=Mi.get(r);o&&(clearTimeout(o),Mi.delete(r))}}},{rootMargin:"100px"})),Ja}function py(e){const t=Mi.get(e);t&&(clearTimeout(t),Mi.delete(e)),Nc.delete(e),Ja?.unobserve(e)}const Iu=rn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:A`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&py(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:p`
            <div
                class="placeholder"
                ${Zi(n=>{t.placeholderElement&&py(t.placeholderElement),r({placeholderElement:n}),Nc.set(n,()=>{r({hasRendered:!0})}),LB().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function ek(e,t,r,n){const o=I0(r,n),i=[];if(o){const s=ek(e,t,o,n);s&&i.push(s)}if(Ps(r,tr.Page)&&!e.includes(r)){const s=Hh(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:s,breadcrumbs:it(s,()=>r.fullUrlBreadcrumbs)})}return i.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function jB({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:o,controls:i,originalTree:s}){if(!t.length&&o)return[p`
                No results
            `];const a=S.isLengthAtLeast(t,1)?ek(t,i,t[0],s):void 0,l=a&&Object.values(a.config).length&&S.isLengthAtLeast(t,1)?p`
                  <${Pl.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Pl}>
              `:te,c=bN(t,d=>d.fullUrlBreadcrumbs.join(">"),d=>{if(Ps(d,tr.Page))return p`
                    <${fy.assign({blockNavigation:e,isTopLevel:r,pageNode:d,controls:i,router:n})}
                        class="block-entry"
                    ></${fy}>
                `;if(Ps(d,tr.ElementExample)){const f=Hh(i,d.fullUrlBreadcrumbs.slice(0,-1)),h=p`
                    <${gy.assign({blockNavigation:e,elementExampleNode:d,currentPageControls:f,router:n})}></${gy}>
                `;return p`
                    <${Iu.assign({content:h})}
                        class="inline-entry ${xr({"block-entry":d.entry.isVertical})}"
                    ></${Iu}>
                `}else{if(Ps(d,tr.Root))return te;{const f=p`
                    <${ai.assign({message:`Unknown entry type for rendering: '${d.entry.entryType}'`})}></${ai}>
                `;return p`
                    <${Iu.assign({content:f})}
                        class="block-entry"
                    ></${Iu}>
                `}}});return[l,c]}const ks=rn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:A`
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

        ${f0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${wo["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:et()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=C2(e.currentRoute.paths),s=jB({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return p`
            <${f0.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${f0}>

            ${Or(e.showLoading,p`
                    <div
                        ${Zi(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${O.assign({icon:Ji})}></${O}>
                    </div>
                    ${Or(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot></slot>
                        `)}
                `,p`
                    <div
                        ${Zi(a=>{o({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot></slot>
                `)}
        `}});function _B(e,t,r){const n=by(e,t);return n.length?n:(r(zs),by(e,zs.paths))}function by(e,t){return e.filter(r=>f6({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Ou=Un()({tagName:"element-book-app",state(){return{currentRoute:zs,router:void 0,loading:!0,colors:{config:void 0,theme:y1(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:et()},slotNames:["footer","navHeader"],styles:A`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Ie["element-book-page-background-color"].value};
            color: ${Ie["element-book-page-foreground-color"].value};
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

        ${ks} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${$s} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i,slotNames:s})=>{t._debug&&console.info("rendering element-book app");function a(f){return{...e.currentRoute,...f}}function l(f){const h=a(f);return!S.jsonEquals(e.currentRoute,h)}function c(f){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,f].filter(S.isTruthy).join(" - "))}function d(f){if(!l(f))return;const h=a(f);e.router?e.router.setRoute(h):n({currentRoute:{...e.currentRoute,...h}}),t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(h.paths))}try{if(t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const x=iP(t.internalRouterConfig.basePath);n({router:x}),x.listen(!0,E=>{n({currentRoute:E})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const f={themeColor:t.themeColor};if(!S.jsonEquals(f,e.colors.config)){const x=y1(f);n({colors:{config:f,theme:x}}),G6(r,x)}const h=t._debug??!1,m=y6({entries:t.pages,debug:h});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:E2(m.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const g=C2(e.currentRoute.paths),y=(g?KN({flattenedNodes:m.flattenedNodes,searchQuery:g}):void 0)??_B(m.flattenedNodes,e.currentRoute.paths,d);c(y[0]?.entry.title);const $=e.treeBasedControls?.controls;return $?(t._debug&&console.info({currentControls:$}),p`
                <div
                    class="root"
                    ${_(Dc,x=>{const E=x.detail;if(!l(E))return;if(n({loading:!0}),d(E),!(r.shadowRoot.querySelector($s.tagName)instanceof $s))throw new TypeError(`Failed to find child '${$s.tagName}'`)})}
                    ${_(Pl.events.controlValueChange,x=>{if(!e.treeBasedControls)return;const E=w6($,x.detail.fullUrlBreadcrumbs,x.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:E}})})}
                >
                    ${t.blockNavigation?te:p`
                              <${$s.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:g?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${s.navHeader}></slot>
                              </${$s}>
                          `}
                    <${ks.assign({blockNavigation:!!t.blockNavigation,controls:$,currentNodes:y,currentRoute:e.currentRoute,debug:h,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${_(ks.events.loadingRender,async x=>{await v1();const E=r.shadowRoot.querySelector(ks.tagName);E?E.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${ks.tagName}' for scrolling.`),await v1(),n({loading:!x.detail})})}
                    >
                        <slot name=${s.footer}></slot>
                    </${ks}>
                </div>
            `):p`
                    <${ai.assign({message:"Failed to generate page controls."})}></${ai}>
                `}catch(f){return console.error(f),p`
                <p class="error">${Zt(f)}</p>
            `}}}),ht=Ne({title:"Elements",parent:void 0}),Ag=Ne({title:"Styles",parent:void 0}),Eg=Ne({title:"Util",parent:void 0}),UB=Ne({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:se.Color,initValue:""},"Fill Color":{controlType:se.Color,initValue:""},"Stroke Width":{controlType:se.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(fh).forEach(t=>{e({title:t.name,styles:A`
                    :host(:hover) ${O} {
                        background-color: #f2f2f2;
                    }

                    ${O} {
                        padding: 8px;
                        border-radius: ${P["vira-form-radius"].value};
                    }
                `,render({controls:r}){const n=A`
                        ${v["vira-icon-fill-color"].name}: ${ke(r["Fill Color"]||"inherit")};
                        ${v["vira-icon-stroke-color"].name}: ${ke(r["Stroke Color"]||"inherit")};
                        ${v["vira-icon-stroke-width"].name}: ${ke(r["Stroke Width"]?fl(r["Stroke Width"]):"inherit")};
                    `;return p`
                        <${O.assign({icon:t})}
                            style=${n}
                        ></${O}>
                    `}})})}}),zB=NB({parent:Ag,theme:ce,title:"Vira Theme",hideInverseColors:!0,overrides:[lP],hideCopyCode:!0}),qB=Ne({title:Ur.name,parent:Eg,descriptionParagraphs:["Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){e({title:"stroke color",styles:A`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=Ur(Rt,{"vira-icon-stroke-color":"red"});return p`
                    <${O.assign({icon:Rt})}></${O}>
                    <span>→</span>
                    <${O.assign({icon:t})}></${O}>
                `}}),e({title:"fill color",styles:A`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=Ur(dh,{"vira-icon-fill-color":"gold","vira-icon-stroke-color":"orange"});return p`
                    <${O.assign({icon:dh})}></${O}>
                    <span>→</span>
                    <${O.assign({icon:t})}></${O}>
                `}}),e({title:"stroke width",styles:A`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=Ur(Ha,{"vira-icon-stroke-color":"green","vira-icon-stroke-width":"3px"});return p`
                    <${O.assign({icon:Ha})}></${O}>
                    <span>→</span>
                    <${O.assign({icon:t})}></${O}>
                `}}),e({title:"with CSS var values",styles:A`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=Ur(Ha,{"vira-icon-stroke-color":`${P["vira-form-error-color"].value}`}),r=Ur(Ha,{"vira-icon-stroke-color":`${P["vira-form-success-color"].value}`});return p`
                    <${O.assign({icon:t})}></${O}>
                    <${O.assign({icon:r})}></${O}>
                `}}),e({title:"multiple icons with different colors",styles:A`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,render(){const t=Ur(Rt,{"vira-icon-stroke-color":"red"}),r=Ur(Rt,{"vira-icon-stroke-color":"dodgerblue"}),n=Ur(Rt,{"vira-icon-stroke-color":"green"}),o=Ur(Rt,{"vira-icon-stroke-color":"purple"});return p`
                    <${O.assign({icon:t})}></${O}>
                    <${O.assign({icon:r})}></${O}>
                    <${O.assign({icon:n})}></${O}>
                    <${O.assign({icon:o})}></${O}>
                `}})}}),tk={async element1(){return await zi({seconds:2}),(await nc(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-xM6_0-w2.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await zi({seconds:2}),(await nc(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-4xykBdDT.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},yy=Un()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:X$(tk)}},render({state:e,inputs:t}){return Q$(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return p`
                    <${_i}>
                        ${Xi("Failed to import element",Zt(r))}
                    </${_i}>
                `},loading(){return p`
                    <${O.assign({icon:Ji})}></${O}>
                `},ready(r){if(r.element1)return p`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return p`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Lt.never("The error element will always error")}})}}),vy=Un()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:X$(tk)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),Q$(e.dynamicElements,{error(r){return p`
                    <${_i}>
                        ${Xi("Failed to import element",Zt(r))}
                    </${_i}>
                `},loading(){return p`
                    <${O.assign({icon:Ji})}></${O}>
                `},ready(r){if(r.element1)return p`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return p`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Lt.never("The error element will always error")}})}}),wy=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],VB=Ne({parent:Eg,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return p`
                    <${qe.assign({value:String(t.value),options:wy})}
                        ${_(qe.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${qe}>
                    <${yy.assign({numberValue:t.value})}></${yy}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return p`
                    <${qe.assign({value:String(t.value),options:wy})}
                        ${_(qe.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${qe}>
                    <${vy.assign({numberValue:t.value})}></${vy}>
                `}})}}),WB=[{title:"unselected",content:"my label",inputs:{selected:!1}},{title:"selected",content:"my label",inputs:{selected:!0}},{title:"with custom child",content:"custom child",inputs:{selected:!0},customTemplate:p`
            <b>This is custom</b>
        `},{title:"constrained width",content:"has more text than is possible to fit",customStyle:A`
            :host {
                max-width: 100px;
            }
        `,inputs:{selected:!0}},{title:"stretched width",content:"wide",customStyle:A`
            ${Zo} {
                width: 400px;
            }
        `,inputs:{selected:!0}},{title:"disabled",content:"my label",inputs:{selected:!0,disabled:!0}},{title:"no default pointer styles",content:"my label",inputs:{selected:!0,disablePointerStyles:!0}},{title:"icon override",content:"my label",inputs:{selected:!1,iconOverride:Ur(Rs,{"vira-icon-stroke-color":"blue"})}},{title:"with ViraLink content",customStyle:A`
            ${Zn} {
                text-decoration: none;
            }
        `,content:p`
            <${Zn.assign({link:{url:"https://example.com",newTab:!0},disableLinkStyles:!0})}>
                link label
            </${Zn}>
        `,inputs:{selected:!1}}],KB=Ne({title:Zo.tagName,parent:ht,defineExamples({defineExample:e}){WB.forEach(t=>{e({title:t.title,styles:t.customStyle,render(){return p`
                        <${Zo.assign(t.inputs)}>${t.content}</${Zo}>
                    `}})})}}),Ya=[{content:"one"},{content:"two"},{content:"three"},{content:"four"},{content:"five"},{content:"six"}],$y={content:p`
        <div
            style=${A`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `}
        >
            This menu item is much longer than the others
        </div>
    `},GB=[{title:"basic"},{title:"rounded",inputs:{menuCornerStyle:i$.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",menuItems:[...Ya,$y]},{title:"restricted long item",inputs:{horizontalAnchor:ji.Both},menuItems:[...Ya,$y]},{title:"ViraLink URL item",menuItems:[...Ya,{content:p`
                    <${Zn.assign({link:{url:"https://www.wikipedia.org",newTab:!0},disableLinkStyles:!0})}>
                        Wikipedia link
                    </${Zn}>
                `}]},{title:"ViraLink route item",menuItems:[...Ya,{content:p`
                    <${Zn.assign({route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(e,t){return console.info(e,t),!1}}},disableLinkStyles:!0})}>
                        Route link
                    </${Zn}>
                `}]}],HB=Ne({parent:ht,title:Su.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){GB.forEach(t=>{e({title:t.title,styles:A`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){const r=t.menuItems||Ya;return p`
                        <${Su.assign({popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger" slot=${Su.slotNames.trigger}>
                                Trigger Menu
                            </div>
                            ${f$(r)}
                        </${Su}>
                    `}})})}}),ZB=[{title:"basic",items:[{content:"one"},{content:"two"},{content:"three"}]},{title:"with selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three"}]},{title:"with multi selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three",selected:!0}]},{title:"with disabled item",items:[{content:"one"},{content:"two",disabled:!0},{content:"three"}]}],JB=Ne({parent:ht,title:Li.tagName,defineExamples({defineExample:e}){ZB.forEach(t=>{e({title:t.title,render(){return p`
                        <${Li.assign({...t.menuInputs})}>
                            ${t.items.map(r=>p`
                                    <${Zo.assign({selected:r.selected,disabled:r.disabled,disablePointerStyles:r.disablePointerStyles})}>
                                        ${r.content}
                                    </${Zo}>
                                `)}
                        </${Li}>
                    `}})})}}),YB=Ne({parent:ht,title:de.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:A`
                ${de} {
                    ${P["vira-form-focus-outline-border-radius"].name}: 0;
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
                    <${de.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${de.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>Pop up!</div>
                    </${de}>
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
            `,render(){return p`
                    <${de.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
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
            `,render(){return p`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:ji.Right})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
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
            `,render(){return p`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:ji.Left})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
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
            `,render(){return p`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:ji.Right})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>not long</div>
                    </${de}>
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
            `,render(){return p`
                    <div class="container">
                        <${de.assign({keepOpenAfterInteraction:!0})}>
                            <div class="trigger" slot=${de.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${de.slotNames.popUp}>
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
                        </${de}>
                    </div>
                `}})}}),XB=[{title:"menu shadow",styles:Ri.menuShadow},{title:"menu shadow reversed",styles:Ri.menuShadowReversed},{title:"modal",styles:Ri.modal}],QB=Ne({parent:Ag,title:"Shadows",defineExamples({defineExample:e}){XB.forEach(t=>{e({title:t.title,styles:A`
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
                    `}})})}}),eR=Ne({parent:ht,title:mt.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:se.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return p`
                    <${mt.assign({text:"Text here",bold:!1})}></${mt}>
                `}}),e({title:"Bold",render(){return p`
                    <${mt.assign({text:"Text here",bold:!0})}></${mt}>
                `}}),e({title:"Dynamic",render({controls:t}){return p`
                    <${mt.assign({text:"Text here",bold:t.bolded})}></${mt}>
                `}}),e({title:"Resized",styles:A`
                ${mt} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return p`
                    <${mt.assign({text:"Not Bolded",bold:!1})}></${mt}>
                    <${mt.assign({text:"Bolded",bold:!0})}></${mt}>
                `}}),e({title:"Alignment",styles:A`
                ${mt} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return p`
                    <${mt.assign({text:"Not Bolded",bold:!1})}></${mt}>
                    <${mt.assign({text:"Bolded",bold:!0})}></${mt}>
                `}}),e({title:"Stylized",styles:A`
                ${mt} {
                    text-decoration: underline;
                }
            `,render(){return p`
                    <${mt.assign({text:"Not Bolded",bold:!1})}></${mt}>
                    <${mt.assign({text:"Bolded",bold:!0})}></${mt}>
                `}})}}),tR=Ne({parent:ht,title:at.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:se.Color,initValue:""},"Secondary color":{controlType:se.Color,initValue:""},"Hover color":{controlType:se.Color,initValue:""},"Active color":{controlType:se.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:o}){const i=n??A``;e({title:r,styles:i,render({controls:s}){const a=A`
                        ${P["vira-form-accent-primary-color"].name}: ${ke(s["Primary color"]||"inherit")};
                        ${P["vira-form-background-color"].name}: ${ke(s["Secondary color"]||"inherit")};
                        ${P["vira-form-accent-primary-hover-color"].name}: ${ke(s["Hover color"]||"inherit")};
                        ${P["vira-form-accent-primary-active-color"].name}: ${ke(s["Active color"]||"inherit")};
                    `;return p`
                        <${at.assign({text:"hello",...o})}
                            style=${a}
                        ></${at}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Rs}}),t({title:"with expanding icon",inputs:{icon:Rs,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Kn.Outline}}),t({title:"ghost",inputs:{buttonStyle:Kn.Ghost}}),t({title:"plain",inputs:{buttonStyle:Kn.Plain}}),t({title:"danger",inputs:{buttonStyle:Kn.Danger}}),t({title:"danger outline",inputs:{buttonStyle:Kn.DangerOutline}}),t({title:"only icon",inputs:{icon:Rs,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:A`
                ${at} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:A`
                ${at} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:A`
                :host {
                    ${P["vira-form-accent-primary-color"].name}: pink;
                    ${P["vira-form-background-color"].name}: purple;
                    ${P["vira-form-accent-primary-hover-color"].name}: orange;
                    ${P["vira-form-accent-primary-active-color"].name}: yellow;
                }
            `,render(){return p`
                    <${at.assign({text:"hello"})}></${at}>
                `}})}}),rR=[{title:"basic"},{title:"success",inputs:{cardState:uh.Success}},{title:"error",inputs:{cardState:uh.Error}},{title:"long",content:p`
            <p
                style=${A`
                    ${tu}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],nR=Ne({parent:ht,title:Bf.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){rR.forEach(t=>{e({title:t.title,render(){return p`
                        <${Bf.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${Bf}>
                    `}})})}}),oR=Ne({parent:ht,title:me.tagName,controls:{Checked:{controlType:se.Checkbox,initValue:!1},Disabled:{controlType:se.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return p`
                    <${me.assign({value:t.checked})}
                        ${_(me.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${me}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return p`
                    <${me.assign({value:t.checked})}
                        ${_(me.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${me}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return p`
                    <${me.assign({value:t.checked,hasError:!0})}
                        ${_(me.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${me}>
                `}}),e({title:"disabled unchecked",render(){return p`
                    <${me.assign({value:!1,disabled:!0})}></${me}>
                `}}),e({title:"disabled checked",render(){return p`
                    <${me.assign({value:!0,disabled:!0})}></${me}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return p`
                    <${me.assign({value:t.Checked,disabled:t.Disabled})}></${me}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return p`
                    <${me.assign({value:!0})}></${me}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return p`
                    <${me.assign({value:t.checked,label:"label goes here"})}
                        ${_(me.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${me}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return p`
                    <${me.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${_(me.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${me}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:A`
                ${me} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return p`
                    <${me.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${_(me.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${me}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:t,updateState:r}){return p`
                    <${me.assign({value:t.checked,fillWhenChecked:!0})}
                        ${_(me.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${me}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return p`
                    <${me.assign({value:t.checked,fillWhenUnchecked:!0})}
                        ${_(me.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${me}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:t,updateState:r}){return p`
                    <${me.assign({value:t.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${_(me.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${me}>
                `}})}}),iR=Ne({title:Vt.tagName,parent:ht,descriptionParagraphs:["A collapsible card element with built-in header, caret icon, and card styling. Wraps ViraCollapsibleWrapper with opinionated styles."],defineExamples({defineExample:e}){e({title:"basic",styles:A`
                p {
                    ${Bt}
                }
            `,render(){return p`
                    <${Vt}>
                        <span slot=${Vt.slotNames.header}>Card Header</span>
                        <p>Card content goes here.</p>
                    </${Vt}>
                `}}),e({title:"start expanded",styles:A`
                p {
                    ${Bt}
                }
            `,render(){return p`
                    <${Vt.assign({startExpanded:!0})}>
                        <span slot=${Vt.slotNames.header}>
                            Expanded Card Header
                        </span>
                        <p>This card starts expanded.</p>
                    </${Vt}>
                `}}),e({title:"block expansion",styles:A`
                p {
                    ${Bt}
                }
            `,render(){return p`
                    <${Vt.assign({blockExpansion:!0})}>
                        <span slot=${Vt.slotNames.header}>Always Expanded</span>
                        <p>This card cannot be collapsed.</p>
                    </${Vt}>
                `}}),e({title:"raw collapsible",styles:A`
                p {
                    ${Bt}
                }
            `,render(){return p`
                    <${Vt.assign({rawCollapsible:!0,startExpanded:!0})}>
                        <span slot=${Vt.slotNames.header}>Raw Header</span>
                        <p>No card border or padding styles.</p>
                    </${Vt}>
                `}}),e({title:"hidden header",styles:A`
                p {
                    ${Bt}
                }
            `,render(){return p`
                    <${Vt.assign({hideHeader:!0,startExpanded:!0})}>
                        <p>Content with no header visible.</p>
                    </${Vt}>
                `}}),e({title:"wide",styles:A`
                div {
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                }
                p {
                    ${Bt}
                }
            `,render(){return p`
                    <div>
                        <${Vt}>
                            <span slot=${Vt.slotNames.header}>Wide</span>
                            <p>Content content content content content content content.</p>
                        </${Vt}>
                    </div>
                `}})}}),sR=Ne({title:dr.tagName,parent:ht,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>p`
                        <${dr.assign({expanded:!!r.expandedStates[o]})}
                            ${_(dr.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${dr.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${_("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Or(!!r.showMoreStates[o],p`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${dr}>
                    `)}}),e({title:"wider examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>p`
                        <${dr.assign({expanded:!!r.expandedStates[o]})}
                            ${_(dr.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${dr.slotNames.header}
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
                            ${Or(!!r.showMoreStates[o],p`
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
                        </${dr}>
                    `)}})}}),Ku=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Really really super duper long option",value:"4"},{label:"Really really super duper long option",value:"5"},{label:"Really really super duper long option",value:"6"},{label:"Really really super duper long option",value:"7"},{label:"Really really super duper long it just keeps going because it's so long option",value:"8"}],aR=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{value:"1",label:"1"},{value:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with disabled item",inputs:{selected:[],options:[...Ku,{value:"42",label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:A`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:A`
            ${Za} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Rt}}],lR=Ne({title:Za.tagName,parent:ht,controls:{Selected:{controlType:se.Dropdown,initValue:"",options:["",...Ku.map(e=>e.label)]},Prefix:{controlType:se.Text,initValue:""},"Force State":{controlType:se.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:se.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:se.Dropdown,initValue:"",options:["",...Object.keys(fh)]},Disabled:{controlType:se.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:se.Text,initValue:"Select something"}},defineExamples({defineExample:e}){aR.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:o}){const i={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:o.Placeholder,options:t.inputs?.options||Ku,selected:o.Selected?[Ku.find(s=>s.label===o.Selected)?.value].filter(S.isTruthy):r.selected,selectionPrefix:o.Prefix||t.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":t.inputs?.isDisabled,icon:o.Icon?fh[o.Icon]:t.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return p`
                        <${Za.assign(i)}
                            ${_(Za.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${Za}>
                    `}})})}}),uR=Ne({parent:ht,title:_i.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return p`
                    <${_i}>Error Content</${_i}>
                `}})}}),h0=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],cR=Ne({parent:ht,title:Cr.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Fe.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:Fe.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:Fe.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Fe.Email,label:"Email Address",value:t.email},password:{type:Fe.NewPassword,label:"Password",value:t.password},userRole:{type:Fe.Select,label:"Role",options:h0,value:t.userRole,placeholder:"placeholder"},quantity:{type:Fe.Number,label:"Quantity",value:t.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:Fe.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:Fe.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return p`
                    <${Cr.assign({fields:n})}
                        ${_(Cr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${at.assign({text:"Cancel",buttonStyle:Kn.Outline})}></${at}>
                            <${at.assign({text:"Submit"})}></${at}>
                        </div>
                    </${Cr}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Fe.Text,label:"First Name",value:t.firstName},lastName:{type:Fe.Text,label:"Last Name",value:t.lastName}};return p`
                    <${Cr.assign({fields:n})}
                        ${_(Cr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <${Te.assign({value:"",label:"More stuff"})}></${Te}>
                        <div class="buttons">
                            <${at.assign({text:"Cancel",buttonStyle:Kn.Outline})}></${at}>
                            <${at.assign({text:"Submit"})}></${at}>
                        </div>
                    </${Cr}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Cr} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Fe.Text,label:"First Name",value:t.firstName},lastName:{type:Fe.Text,label:"Last Name",value:t.lastName},subscribe:{type:Fe.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Fe.Email,label:"Email Address",value:t.email},password:{type:Fe.NewPassword,label:"Password",value:t.password},userRole:{type:Fe.Select,label:"Role",options:h0,value:t.userRole}};return p`
                    <${Cr.assign({fields:n})}
                        ${_(Cr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${at.assign({text:"Cancel",buttonStyle:Kn.Outline})}></${at}>
                            <${at.assign({text:"Submit"})}></${at}>
                        </div>
                    </${Cr}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Fe.Text,label:"First Name",value:t.firstName},lastName:{type:Fe.Text,label:"Last Name",value:t.lastName},subscribe:{type:Fe.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Fe.Email,label:"Email Address",value:t.email},password:{type:Fe.NewPassword,label:"Password",value:t.password},userRole:{type:Fe.Select,label:"Role",options:h0,value:t.userRole}};return p`
                    <${Cr.assign({fields:n,isDisabled:!0})}
                        ${_(Cr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${at.assign({text:"Cancel",buttonStyle:Kn.Outline})}></${at}>
                            <${at.assign({text:"Submit"})}></${at}>
                        </div>
                    </${Cr}>
                `}})}}),dR=Ne({title:O.tagName,parent:ht,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return p`
                    <${O.assign({icon:Rt})}></${O}>
                `}}),e({title:"using createColoredIcon",render(){return p`
                    <${O.assign({icon:Ur(Rt,{"vira-icon-stroke-color":"red"})})}></${O}>
                `}}),e({title:"fit container",styles:A`
                ${O} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return p`
                    <${O.assign({icon:Ur(Rt,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${O}>
                `}})}}),fR=Ne({title:Io.tagName,parent:ht,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:A`
                    border-radius: 32px;
                `,loadingSlot:p`
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
                        <${O.assign({icon:Ji,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:A`
                    border-radius: 32px;
                `,errorSlot:p`
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
                        <${O.assign({icon:Ac,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:A`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:A`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:A`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:p`
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
                        <${O.assign({icon:Ji,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `,errorSlot:p`
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
                        <${O.assign({icon:Ac,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:A`
                    ${Io} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||A``}
                    }

                    ${r.allowReload?A`
                              ${Io} {
                                  cursor: pointer;
                              }

                              ${Io}:hover {
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
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:o}){return p`
                        <${Io.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${_("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${Ii()}`})})}
                        >
                            ${r.loadingSlot?p`
                                      <div class="slot-wrapper" slot=${Io.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:te}${r.errorSlot?p`
                                      <div class="slot-wrapper" slot=${Io.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:te}
                        </${Io}>
                    `}})})}}),hR=Ne({title:Te.tagName,parent:ht,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:se.Color,initValue:P["vira-form-foreground-color"].default},"Placeholder color":{controlType:se.Color,initValue:P["vira-form-placeholder-color"].default},"Border color":{controlType:se.Color,initValue:P["vira-form-border-color"].default},"Focus color":{controlType:se.Color,initValue:P["vira-form-focus-outline-color"].default},"Selection color":{controlType:se.Color,initValue:P["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:o,inputs:i}){e({title:o,styles:A`
                    ${n||A``}
                `,state(){return{value:i.value}},render({state:s,updateState:a,controls:l}){const c={[String(P["vira-form-foreground-color"].name)]:l["Text color"],[String(P["vira-form-placeholder-color"].name)]:l["Placeholder color"],[String(P["vira-form-border-color"].name)]:l["Border color"],[String(P["vira-form-focus-outline-color"].name)]:l["Focus color"],[String(P["vira-form-text-selection-color"].name)]:l["Selection color"]},d=it(c,(h,m)=>m||"inherit"),f=Object.entries(d).map(([h,m])=>[h,m].join(": ")+";").join(`
`);return p`
                        <${Te.assign({...i,value:s.value})}
                            style=${f}
                            ${_(Te.events.valueChange,h=>{a({value:h.detail}),console.info("changed:",h.detail)})}
                        ></${Te}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Rt}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:A`
                    ${Te} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Rt}},{title:"taller height",styles:A`
                    ${Te} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Rt}},{title:"shorter height",styles:A`
                    ${Te} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Rt}},{title:"max width",styles:A`
                    ${Te} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:A`
                    ${Te} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Ni.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Ni.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:A`
                    ${Te} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:A`
                    ${Te} {
                        width: unset;
                    }
                `}].forEach(t)}}),mR=Ne({title:Zn.tagName,parent:ht,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:se.Color,initValue:""},"Hover color":{controlType:se.Color,initValue:""},"Active color":{controlType:se.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:o}){const i=A`
                        ${P["vira-form-accent-primary-color"].name}: ${ke(o["Hover color"]||"inherit")};
                        ${P["vira-form-accent-primary-active-color"].name}: ${ke(o["Active color"]||"inherit")};
                        color: ${ke(o["CSS Color"]||"inherit")};
                    `;return p`
                        <${Zn.assign(n)} style=${i}>My Link</${Zn}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}}),t({title:"disabled link styles",inputs:{disableLinkStyles:!0,link:{newTab:!0,url:"https://www.wikipedia.org"}}})}}),gR=Ne({title:Oo.tagName,parent:ht,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return p`
                    <button
                        ${_("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Oo.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${_(Oo.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Oo}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:A`
                ${Oo} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${P["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return p`
                    <button
                        ${_("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Oo.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${_(Oo.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Oo}>
                `}})}}),Xa=A`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,m0=p`
    <${Jn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${Jn.slotNames.large}>Large</div>
        <div class="small" slot=${Jn.slotNames.small}>Small</div>
    </${Jn}>
`,Ms={max:120,min:25,default:80},ky=tt()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":fl(Ms.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const o=Uh.isNumber(Z3(V6({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Ms.default;(o>=Ms.max||o<=Ms.min)&&t({increment:e.increment*-1}),rm({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:fl(o+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return p`
            <slot></slot>
        `}}),xy=tt()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":fl(Ms.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${Xa}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return p`
            <${Jn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${Jn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${Jn.slotNames.small}>Small</div>
            </${Jn}>
        `}}),pR=Ne({title:Jn.tagName,parent:ht,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:A`
                ${Xa}
            `,render(){return m0}}),e({title:"overflowing",styles:A`
                ${Xa}

                ${Jn} {
                    max-width: 50px;
                }
            `,render(){return m0}}),e({title:"dynamic size",styles:A`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Xa}

                .wrapper {
                    width: ${Ms.max+10}px;
                }
            `,render(){return p`
                    <div class="wrapper">
                        <${ky}>
                            ${m0}
                        </${ky}>
                    </div>
                `}}),e({title:"dynamic slot",styles:A`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Xa}
            `,render(){return p`
                    <${xy}></${xy}>
                `}})}}),bR=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:A`
            :host {
                ${P["vira-form-filled-background-color"].name}: red;
                ${P["vira-form-accent-primary-color"].name}: black;
                ${lo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${lo} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:A`
            :host {
                ${P["vira-form-filled-background-color"].name}: red;
                ${P["vira-form-accent-primary-color"].name}: yellow;
                ${lo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${lo} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:A`
            :host {
                ${P["vira-form-filled-background-color"].name}: red;
                ${P["vira-form-accent-primary-color"].name}: yellow;
                ${lo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${lo} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],yR=Ne({parent:ht,title:lo.tagName,defineExamples({defineExample:e}){bR.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,render(){return p`
                        <${lo.assign({value:50,...t.inputs})}></${lo}>
                    `}})})}}),Pt=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],vR=[{title:"basic",inputs:{options:Pt}},{title:"with really long option",inputs:{options:[...Pt,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:Pt,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:Pt,disabled:!0}},{title:"error",inputs:{options:Pt,hasError:!0}},{title:"with icon",inputs:{options:Pt,icon:Rt}},{title:"custom width",inputs:{options:Pt},styles:A`
            ${qe} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:Pt,icon:Rt},styles:A`
            ${qe} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:Pt,icon:Rt},styles:A`
            ${qe} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:Pt,label:"Pick an option"}},{title:"with long label",inputs:{options:Pt,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:Pt,label:"Pick a really really really really long option"},styles:A`
            ${qe} {
                width: unset;
            }
        `},{title:"raw",inputs:{options:[...Pt,{label:"really really really really really really really really long option",value:"something"}],rawSelect:!0,icon:Rt}}],wR=Ne({parent:ht,title:qe.tagName,defineExamples({defineExample:e}){vR.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return p`
                        <${qe.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${_(qe.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${qe}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return p`
                    <${qe.assign({options:Pt,value:Pt[0]?.value})}></${qe}>
                `}}),e({title:"force update",render(){return p`
                    <${Dy}></${Dy}>
                `}})}}),Dy=tt()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=Pt.findIndex(o=>o.value===t.value),n=pt.isDefined(Pt[(r+1)%Pt.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return p`
            <${qe.assign({options:Pt,value:e.value})}></${qe}>
        `}}),$R=[{label:"basic",isClickable:void 0},{label:"selectable",isClickable:{selected:!0}},{label:"cancellable",isClickable:{cancellable:!0}},{label:"disabled",disabled:!0,isClickable:{selected:!0}}],kR=Ne({parent:ht,title:ja.tagName,descriptionParagraphs:["A tag element with selectable, cancellable, size, emphasis, and color variants."],defineExamples({defineExample:e}){$P.forEach(t=>{e({title:t,styles:A`
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
                `,state(){return{clicked:{}}},render({state:r,updateState:n}){return $R.map(({label:o,...i})=>p`
                            <h3>${o}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${N1.map(s=>p`
                                                <th>${s}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${kP.map(s=>p`
                                            <tr>
                                                <th>${s}</th>
                                                ${N1.map(a=>{const l=[o,s,a].join("-"),c=S.isBoolean(i.isClickable?.selected)?{selected:!r.clicked[l]}:i.isClickable,d=p`
                                                        <${ja.assign({text:"Label",...i,size:t,emphasis:s,color:a,isClickable:c})}
                                                            class=${xr({cancelled:!!i.isClickable?.cancellable&&!!r.clicked[l]})}
                                                            ${_(ja.events.cancel,()=>{n({clicked:{...r.clicked,[l]:!0}})})}
                                                            ${_(ja.events.toggle,f=>{n({clicked:{...r.clicked,[l]:!f.detail}})})}
                                                        ></${ja}>
                                                    `;return p`
                                                        <td>${d}</td>
                                                    `})}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})})}}),xR=[ht,UB,Ag,Eg],DR=[eR,tR,nR,oR,iR,sR,lR,uR,cR,dR,fR,hR,mR,KB,JB,HB,gR,pR,YB,yR,wR,kR].sort((e,t)=>e.title.localeCompare(t.title)),AR=[...DR,qB,VB,QB,...zB],ER=[...xR,...AR];Un()({tagName:"vira-book-app",styles:A`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Ou} {
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
            <${Ou.assign({internalRouterConfig:{basePath:fg("vira"),useInternalRouter:!0},pages:ER,themeColor:"#33ccff"})}>
                <h1 slot=${Ou.slotNames.navHeader}>Vira</h1>
            </${Ou}>
        `}});export{Un as d,p as h};
