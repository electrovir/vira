var Jk=Object.defineProperty;var i=(e,r)=>Jk(e,"name",{value:r,configurable:!0});i(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}i(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}i(n,"processPreload")},"polyfill")();var it;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(it||(it={}));function Uc(e,r=t=>t){const t=new Map;return e.filter(n=>{const o=r(n);return t.get(o)?!1:(t.set(o,n),!0)})}i(Uc,"removeDuplicates");class Fh{static{i(this,"Diff")}diff(r,t,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const s=this.castInput(r,n),a=this.castInput(t,n),l=this.removeEmpty(this.tokenize(s,n)),u=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(l,u,n,o)}diffWithOptionsObj(r,t,n,o){var s;const a=i(D=>{if(D=this.postProcess(D,n),o){setTimeout(function(){o(D)},0);return}else return D},"done"),l=t.length,u=r.length;let d=1,f=l+u;n.maxEditLength!=null&&(f=Math.min(f,n.maxEditLength));const h=(s=n.timeout)!==null&&s!==void 0?s:1/0,g=Date.now()+h,m=[{oldPos:-1,lastComponent:void 0}];let p=this.extractCommon(m[0],t,r,0,n);if(m[0].oldPos+1>=u&&p+1>=l)return a(this.buildValues(m[0].lastComponent,t,r));let v=-1/0,w=1/0;const k=i(()=>{for(let D=Math.max(v,-d);D<=Math.min(w,d);D+=2){let A;const I=m[D-1],L=m[D+1];I&&(m[D-1]=void 0);let Y=!1;if(L){const te=L.oldPos-D;Y=L&&0<=te&&te<l}const re=I&&I.oldPos+1<u;if(!Y&&!re){m[D]=void 0;continue}if(!re||Y&&I.oldPos<L.oldPos?A=this.addToPath(L,!0,!1,0,n):A=this.addToPath(I,!1,!0,1,n),p=this.extractCommon(A,t,r,D,n),A.oldPos+1>=u&&p+1>=l)return a(this.buildValues(A.lastComponent,t,r))||!0;m[D]=A,A.oldPos+1>=u&&(w=Math.min(w,D-1)),p+1>=l&&(v=Math.max(v,D+1))}d++},"execEditLength");if(o)i(function D(){setTimeout(function(){if(d>f||Date.now()>g)return o(void 0);k()||D()},0)},"exec")();else for(;d<=f&&Date.now()<=g;){const D=k();if(D)return D}}addToPath(r,t,n,o,s){const a=r.lastComponent;return a&&!s.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:r.oldPos+o,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:r.oldPos+o,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(r,t,n,o,s){const a=t.length,l=n.length;let u=r.oldPos,d=u-o,f=0;for(;d+1<a&&u+1<l&&this.equals(n[u+1],t[d+1],s);)d++,u++,f++,s.oneChangePerToken&&(r.lastComponent={count:1,previousComponent:r.lastComponent,added:!1,removed:!1});return f&&!s.oneChangePerToken&&(r.lastComponent={count:f,previousComponent:r.lastComponent,added:!1,removed:!1}),r.oldPos=u,d}equals(r,t,n){return n.comparator?n.comparator(r,t):r===t||!!n.ignoreCase&&r.toLowerCase()===t.toLowerCase()}removeEmpty(r){const t=[];for(let n=0;n<r.length;n++)r[n]&&t.push(r[n]);return t}castInput(r,t){return r}tokenize(r,t){return Array.from(r)}join(r){return r.join("")}postProcess(r,t){return r}get useLongestToken(){return!1}buildValues(r,t,n){const o=[];let s;for(;r;)o.push(r),s=r.previousComponent,delete r.previousComponent,r=s;o.reverse();const a=o.length;let l=0,u=0,d=0;for(;l<a;l++){const f=o[l];if(f.removed)f.value=this.join(n.slice(d,d+f.count)),d+=f.count;else{if(!f.added&&this.useLongestToken){let h=t.slice(u,u+f.count);h=h.map(function(g,m){const p=n[d+m];return p.length>g.length?p:g}),f.value=this.join(h)}else f.value=this.join(t.slice(u,u+f.count));u+=f.count,f.added||(d+=f.count)}}return o}}function Vm(e,r){let t;for(t=0;t<e.length&&t<r.length;t++)if(e[t]!=r[t])return e.slice(0,t);return e.slice(0,t)}i(Vm,"longestCommonPrefix");function qm(e,r){let t;if(!e||!r||e[e.length-1]!=r[r.length-1])return"";for(t=0;t<e.length&&t<r.length;t++)if(e[e.length-(t+1)]!=r[r.length-(t+1)])return e.slice(-t);return e.slice(-t)}i(qm,"longestCommonSuffix");function x0(e,r,t){if(e.slice(0,r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(r)}; this is a bug`);return t+e.slice(r.length)}i(x0,"replacePrefix");function D0(e,r,t){if(!r)return e+t;if(e.slice(-r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(r)}; this is a bug`);return e.slice(0,-r.length)+t}i(D0,"replaceSuffix");function Sa(e,r){return x0(e,r,"")}i(Sa,"removePrefix$1");function cu(e,r){return D0(e,r,"")}i(cu,"removeSuffix$1");function Wm(e,r){return r.slice(0,Yk(e,r))}i(Wm,"maximumOverlap");function Yk(e,r){let t=0;e.length>r.length&&(t=e.length-r.length);let n=r.length;e.length<r.length&&(n=e.length);const o=Array(n);let s=0;o[0]=0;for(let a=1;a<n;a++){for(r[a]==r[s]?o[a]=o[s]:o[a]=s;s>0&&r[a]!=r[s];)s=o[s];r[a]==r[s]&&s++}s=0;for(let a=t;a<e.length;a++){for(;s>0&&e[a]!=r[s];)s=o[s];e[a]==r[s]&&s++}return s}i(Yk,"overlapCount");function Ma(e){let r;for(r=e.length-1;r>=0&&e[r].match(/\s/);r--);return e.substring(r+1)}i(Ma,"trailingWs");function Po(e){const r=e.match(/^\s*/);return r?r[0]:""}i(Po,"leadingWs");const Yu="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Xk=new RegExp(`[${Yu}]+|\\s+|[^${Yu}]`,"ug");class Qk extends Fh{static{i(this,"WordDiff")}equals(r,t,n){return n.ignoreCase&&(r=r.toLowerCase(),t=t.toLowerCase()),r.trim()===t.trim()}tokenize(r,t={}){let n;if(t.intlSegmenter){const a=t.intlSegmenter;if(a.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const l of Array.from(a.segment(r))){const u=l.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=r.match(Xk)||[];const o=[];let s=null;return n.forEach(a=>{/\s/.test(a)?s==null?o.push(a):o.push(o.pop()+a):s!=null&&/\s/.test(s)?o[o.length-1]==s?o.push(o.pop()+a):o.push(s+a):o.push(a),s=a}),o}join(r){return r.map((t,n)=>n==0?t:t.replace(/^\s+/,"")).join("")}postProcess(r,t){if(!r||t.oneChangePerToken)return r;let n=null,o=null,s=null;return r.forEach(a=>{a.added?o=a:a.removed?s=a:((o||s)&&Km(n,s,o,a),n=a,o=null,s=null)}),(o||s)&&Km(n,s,o,null),r}}const ex=new Qk;function rx(e,r,t){return t?.ignoreWhitespace!=null&&!t.ignoreWhitespace?ox(e,r,t):ex.diff(e,r,t)}i(rx,"diffWords");function Km(e,r,t,n){if(r&&t){const o=Po(r.value),s=Ma(r.value),a=Po(t.value),l=Ma(t.value);if(e){const u=Vm(o,a);e.value=D0(e.value,a,u),r.value=Sa(r.value,u),t.value=Sa(t.value,u)}if(n){const u=qm(s,l);n.value=x0(n.value,l,u),r.value=cu(r.value,u),t.value=cu(t.value,u)}}else if(t){if(e){const o=Po(t.value);t.value=t.value.substring(o.length)}if(n){const o=Po(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=Po(n.value),s=Po(r.value),a=Ma(r.value),l=Vm(o,s);r.value=Sa(r.value,l);const u=qm(Sa(o,l),a);r.value=cu(r.value,u),n.value=x0(n.value,o,u),e.value=D0(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=Po(n.value),s=Ma(r.value),a=Wm(s,o);r.value=cu(r.value,a)}else if(e){const o=Ma(e.value),s=Po(r.value),a=Wm(o,s);r.value=Sa(r.value,a)}}i(Km,"dedupeWhitespaceInChangeObjects");class tx extends Fh{static{i(this,"WordsWithSpaceDiff")}tokenize(r){const t=new RegExp(`(\\r?\\n)|[${Yu}]+|[^\\S\\n\\r]+|[^${Yu}]`,"ug");return r.match(t)||[]}}const nx=new tx;function ox(e,r,t){return nx.diff(e,r,t)}i(ox,"diffWordsWithSpace");class ix extends Fh{static{i(this,"LineDiff")}constructor(){super(...arguments),this.tokenize=lx}equals(r,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(r.endsWith(`
`)&&(r=r.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(r,t,n)}}const sx=new ix;function ax(e,r,t){return sx.diff(e,r,t)}i(ax,"diffLines");function lx(e,r){r.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const t=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const s=n[o];o%2&&!r.newlineIsToken?t[t.length-1]+=s:t.push(s)}return t}i(lx,"tokenize$1");function Gm(e,r){return Uv(e,new Map)}i(Gm,"sortObject");function Uv(e,r,t){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(r.has(e))return r.get(e);const n={};return r.set(e,n),Object.entries(e).sort((o,s)=>o[0].localeCompare(s[0])).forEach(([o,s])=>{const a=Uv(s,r);n[o]=a}),n}else return e}i(Uv,"recursivelySortObject");var ux=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,cx=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,dx=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Zd={Space_Separator:ux,ID_Start:cx,ID_Continue:dx},xr={isSpaceSeparator(e){return typeof e=="string"&&Zd.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Zd.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Zd.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let C0,kt,ho,Xu,Xo,Tn,Zr,Th,el;var fx=i(function(r,t){C0=String(r),kt="start",ho=[],Xu=0,Xo=1,Tn=0,Zr=void 0,Th=void 0,el=void 0;do Zr=hx(),px[kt]();while(Zr.type!=="eof");return typeof t=="function"?E0({"":el},"",t):el},"parse");function E0(e,r,t){const n=e[r];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const s=String(o),a=E0(n,s,t);a===void 0?delete n[s]:Object.defineProperty(n,s,{value:a,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const s=E0(n,o,t);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}return t.call(e,r,n)}i(E0,"internalize");let be,he,za,ao,De;function hx(){for(be="default",he="",za=!1,ao=1;;){De=ko();const e=zv[be]();if(e)return e}}i(hx,"lex");function ko(){if(C0[Xu])return String.fromCodePoint(C0.codePointAt(Xu))}i(ko,"peek");function O(){const e=ko();return e===`
`?(Xo++,Tn=0):e?Tn+=e.length:Tn++,e&&(Xu+=e.length),e}i(O,"read");const zv={default(){switch(De){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":O();return;case"/":O(),be="comment";return;case void 0:return O(),tr("eof")}if(xr.isSpaceSeparator(De)){O();return}return zv[kt]()},comment(){switch(De){case"*":O(),be="multiLineComment";return;case"/":O(),be="singleLineComment";return}throw nr(O())},multiLineComment(){switch(De){case"*":O(),be="multiLineCommentAsterisk";return;case void 0:throw nr(O())}O()},multiLineCommentAsterisk(){switch(De){case"*":O();return;case"/":O(),be="default";return;case void 0:throw nr(O())}O(),be="multiLineComment"},singleLineComment(){switch(De){case`
`:case"\r":case"\u2028":case"\u2029":O(),be="default";return;case void 0:return O(),tr("eof")}O()},value(){switch(De){case"{":case"[":return tr("punctuator",O());case"n":return O(),vi("ull"),tr("null",null);case"t":return O(),vi("rue"),tr("boolean",!0);case"f":return O(),vi("alse"),tr("boolean",!1);case"-":case"+":O()==="-"&&(ao=-1),be="sign";return;case".":he=O(),be="decimalPointLeading";return;case"0":he=O(),be="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":he=O(),be="decimalInteger";return;case"I":return O(),vi("nfinity"),tr("numeric",1/0);case"N":return O(),vi("aN"),tr("numeric",NaN);case'"':case"'":za=O()==='"',he="",be="string";return}throw nr(O())},identifierNameStartEscape(){if(De!=="u")throw nr(O());O();const e=A0();switch(e){case"$":case"_":break;default:if(!xr.isIdStartChar(e))throw Hm();break}he+=e,be="identifierName"},identifierName(){switch(De){case"$":case"_":case"‌":case"‍":he+=O();return;case"\\":O(),be="identifierNameEscape";return}if(xr.isIdContinueChar(De)){he+=O();return}return tr("identifier",he)},identifierNameEscape(){if(De!=="u")throw nr(O());O();const e=A0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!xr.isIdContinueChar(e))throw Hm();break}he+=e,be="identifierName"},sign(){switch(De){case".":he=O(),be="decimalPointLeading";return;case"0":he=O(),be="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":he=O(),be="decimalInteger";return;case"I":return O(),vi("nfinity"),tr("numeric",ao*(1/0));case"N":return O(),vi("aN"),tr("numeric",NaN)}throw nr(O())},zero(){switch(De){case".":he+=O(),be="decimalPoint";return;case"e":case"E":he+=O(),be="decimalExponent";return;case"x":case"X":he+=O(),be="hexadecimal";return}return tr("numeric",ao*0)},decimalInteger(){switch(De){case".":he+=O(),be="decimalPoint";return;case"e":case"E":he+=O(),be="decimalExponent";return}if(xr.isDigit(De)){he+=O();return}return tr("numeric",ao*Number(he))},decimalPointLeading(){if(xr.isDigit(De)){he+=O(),be="decimalFraction";return}throw nr(O())},decimalPoint(){switch(De){case"e":case"E":he+=O(),be="decimalExponent";return}if(xr.isDigit(De)){he+=O(),be="decimalFraction";return}return tr("numeric",ao*Number(he))},decimalFraction(){switch(De){case"e":case"E":he+=O(),be="decimalExponent";return}if(xr.isDigit(De)){he+=O();return}return tr("numeric",ao*Number(he))},decimalExponent(){switch(De){case"+":case"-":he+=O(),be="decimalExponentSign";return}if(xr.isDigit(De)){he+=O(),be="decimalExponentInteger";return}throw nr(O())},decimalExponentSign(){if(xr.isDigit(De)){he+=O(),be="decimalExponentInteger";return}throw nr(O())},decimalExponentInteger(){if(xr.isDigit(De)){he+=O();return}return tr("numeric",ao*Number(he))},hexadecimal(){if(xr.isHexDigit(De)){he+=O(),be="hexadecimalInteger";return}throw nr(O())},hexadecimalInteger(){if(xr.isHexDigit(De)){he+=O();return}return tr("numeric",ao*Number(he))},string(){switch(De){case"\\":O(),he+=gx();return;case'"':if(za)return O(),tr("string",he);he+=O();return;case"'":if(!za)return O(),tr("string",he);he+=O();return;case`
`:case"\r":throw nr(O());case"\u2028":case"\u2029":bx(De);break;case void 0:throw nr(O())}he+=O()},start(){switch(De){case"{":case"[":return tr("punctuator",O())}be="value"},beforePropertyName(){switch(De){case"$":case"_":he=O(),be="identifierName";return;case"\\":O(),be="identifierNameStartEscape";return;case"}":return tr("punctuator",O());case'"':case"'":za=O()==='"',be="string";return}if(xr.isIdStartChar(De)){he+=O(),be="identifierName";return}throw nr(O())},afterPropertyName(){if(De===":")return tr("punctuator",O());throw nr(O())},beforePropertyValue(){be="value"},afterPropertyValue(){switch(De){case",":case"}":return tr("punctuator",O())}throw nr(O())},beforeArrayValue(){if(De==="]")return tr("punctuator",O());be="value"},afterArrayValue(){switch(De){case",":case"]":return tr("punctuator",O())}throw nr(O())},end(){throw nr(O())}};function tr(e,r){return{type:e,value:r,line:Xo,column:Tn}}i(tr,"newToken");function vi(e){for(const r of e){if(ko()!==r)throw nr(O());O()}}i(vi,"literal");function gx(){switch(ko()){case"b":return O(),"\b";case"f":return O(),"\f";case"n":return O(),`
`;case"r":return O(),"\r";case"t":return O(),"	";case"v":return O(),"\v";case"0":if(O(),xr.isDigit(ko()))throw nr(O());return"\0";case"x":return O(),mx();case"u":return O(),A0();case`
`:case"\u2028":case"\u2029":return O(),"";case"\r":return O(),ko()===`
`&&O(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw nr(O());case void 0:throw nr(O())}return O()}i(gx,"escape");function mx(){let e="",r=ko();if(!xr.isHexDigit(r)||(e+=O(),r=ko(),!xr.isHexDigit(r)))throw nr(O());return e+=O(),String.fromCodePoint(parseInt(e,16))}i(mx,"hexEscape");function A0(){let e="",r=4;for(;r-- >0;){const t=ko();if(!xr.isHexDigit(t))throw nr(O());e+=O()}return String.fromCodePoint(parseInt(e,16))}i(A0,"unicodeEscape");const px={start(){if(Zr.type==="eof")throw yi();Jd()},beforePropertyName(){switch(Zr.type){case"identifier":case"string":Th=Zr.value,kt="afterPropertyName";return;case"punctuator":du();return;case"eof":throw yi()}},afterPropertyName(){if(Zr.type==="eof")throw yi();kt="beforePropertyValue"},beforePropertyValue(){if(Zr.type==="eof")throw yi();Jd()},beforeArrayValue(){if(Zr.type==="eof")throw yi();if(Zr.type==="punctuator"&&Zr.value==="]"){du();return}Jd()},afterPropertyValue(){if(Zr.type==="eof")throw yi();switch(Zr.value){case",":kt="beforePropertyName";return;case"}":du()}},afterArrayValue(){if(Zr.type==="eof")throw yi();switch(Zr.value){case",":kt="beforeArrayValue";return;case"]":du()}},end(){}};function Jd(){let e;switch(Zr.type){case"punctuator":switch(Zr.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Zr.value;break}if(el===void 0)el=e;else{const r=ho[ho.length-1];Array.isArray(r)?r.push(e):Object.defineProperty(r,Th,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")ho.push(e),Array.isArray(e)?kt="beforeArrayValue":kt="beforePropertyName";else{const r=ho[ho.length-1];r==null?kt="end":Array.isArray(r)?kt="afterArrayValue":kt="afterPropertyValue"}}i(Jd,"push");function du(){ho.pop();const e=ho[ho.length-1];e==null?kt="end":Array.isArray(e)?kt="afterArrayValue":kt="afterPropertyValue"}i(du,"pop");function nr(e){return Qu(e===void 0?`JSON5: invalid end of input at ${Xo}:${Tn}`:`JSON5: invalid character '${Vv(e)}' at ${Xo}:${Tn}`)}i(nr,"invalidChar");function yi(){return Qu(`JSON5: invalid end of input at ${Xo}:${Tn}`)}i(yi,"invalidEOF");function Hm(){return Tn-=5,Qu(`JSON5: invalid identifier character at ${Xo}:${Tn}`)}i(Hm,"invalidIdentifier");function bx(e){console.warn(`JSON5: '${Vv(e)}' in strings is not valid ECMAScript; consider escaping`)}i(bx,"separatorChar");function Vv(e){const r={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(r[e])return r[e];if(e<" "){const t=e.charCodeAt(0).toString(16);return"\\x"+("00"+t).substring(t.length)}return e}i(Vv,"formatChar");function Qu(e){const r=new SyntaxError(e);return r.lineNumber=Xo,r.columnNumber=Tn,r}i(Qu,"syntaxError");var vx=i(function(r,t,n){const o=[];let s="",a,l,u="",d;if(t!=null&&typeof t=="object"&&!Array.isArray(t)&&(n=t.space,d=t.quote,t=t.replacer),typeof t=="function")l=t;else if(Array.isArray(t)){a=[];for(const v of t){let w;typeof v=="string"?w=v:(typeof v=="number"||v instanceof String||v instanceof Number)&&(w=String(v)),w!==void 0&&a.indexOf(w)<0&&a.push(w)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),f("",{"":r});function f(v,w){let k=w[v];switch(k!=null&&(typeof k.toJSON5=="function"?k=k.toJSON5(v):typeof k.toJSON=="function"&&(k=k.toJSON(v))),l&&(k=l.call(w,v,k)),k instanceof Number?k=Number(k):k instanceof String?k=String(k):k instanceof Boolean&&(k=k.valueOf()),k){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof k=="string")return h(k);if(typeof k=="number")return String(k);if(typeof k=="object")return Array.isArray(k)?p(k):g(k)}i(f,"serializeProperty");function h(v){const w={"'":.1,'"':.2},k={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let D="";for(let I=0;I<v.length;I++){const L=v[I];switch(L){case"'":case'"':w[L]++,D+=L;continue;case"\0":if(xr.isDigit(v[I+1])){D+="\\x00";continue}}if(k[L]){D+=k[L];continue}if(L<" "){let Y=L.charCodeAt(0).toString(16);D+="\\x"+("00"+Y).substring(Y.length);continue}D+=L}const A=d||Object.keys(w).reduce((I,L)=>w[I]<w[L]?I:L);return D=D.replace(new RegExp(A,"g"),k[A]),A+D+A}i(h,"quoteString");function g(v){if(o.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");o.push(v);let w=s;s=s+u;let k=a||Object.keys(v),D=[];for(const I of k){const L=f(I,v);if(L!==void 0){let Y=m(I)+":";u!==""&&(Y+=" "),Y+=L,D.push(Y)}}let A;if(D.length===0)A="{}";else{let I;if(u==="")I=D.join(","),A="{"+I+"}";else{let L=`,
`+s;I=D.join(L),A=`{
`+s+I+`,
`+w+"}"}}return o.pop(),s=w,A}i(g,"serializeObject");function m(v){if(v.length===0)return h(v);const w=String.fromCodePoint(v.codePointAt(0));if(!xr.isIdStartChar(w))return h(v);for(let k=w.length;k<v.length;k++)if(!xr.isIdContinueChar(String.fromCodePoint(v.codePointAt(k))))return h(v);return v}i(m,"serializeKey");function p(v){if(o.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");o.push(v);let w=s;s=s+u;let k=[];for(let A=0;A<v.length;A++){const I=f(String(A),v);k.push(I!==void 0?I:"null")}let D;if(k.length===0)D="[]";else if(u==="")D="["+k.join(",")+"]";else{let A=`,
`+s,I=k.join(A);D=`[
`+s+I+`,
`+w+"]"}return o.pop(),s=w,D}i(p,"serializeArray")},"stringify");const yx={parse:fx,stringify:vx};var wx=yx;const qv="__@@augment-vir-undefined-sentinel@@__",$x=new RegExp(`['"]${qv}['"]`);function x(e,r){if(typeof e=="string")return e;try{return wx.stringify(e,(n,o)=>o===void 0?qv:typeof o=="bigint"?Number(o):o,r||void 0).split($x).join("undefined")}catch{return String(e)}}i(x,"stringify");var kx=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Nn;(function(e){e.Node="node",e.Web="web"})(Nn||(Nn={}));function xx(){return kx?Nn.Node:Nn.Web}i(xx,"determineRuntimeEnv");const Wv=xx();function Nh(e){return Wv===e}i(Nh,"isRuntimeEnv");function Kv(e){return e[Wv]()}i(Kv,"perEnv");function Dx(e,r){const t=typeof r=="string"&&typeof e=="string",n=typeof r!="string"||typeof e!="string",o=n?ax:rx,s=[t?"":`
`,x(r&&typeof r=="object"&&!Array.isArray(r)?Gm(r):r,4),`
`].join(""),a=[t?"":`
`,x(e&&typeof e=="object"&&!Array.isArray(e)?Gm(e):e,4),`
`].join(""),l=Cx(n,o(s,a)),u=Nh(Nn.Node);return[[u?bo.Green:""," +added (unexpected, added in actual)",u?bo.Red:""," -missing (expected, missing from actual)",u?bo.Reset:""].join(""),t?`

`:`
`,l].join("")}i(Dx,"prettyDiff");var bo;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(bo||(bo={}));var ec;(function(e){e.Added="+",e.Removed="-"})(ec||(ec={}));function Cx(e,r){return e?r.flatMap(n=>n.value.split(`
`).map(o=>Zm(o,n)).join(`
`)).join(""):r.map(n=>Zm(void 0,n)).join("")}i(Cx,"addDiffColors");function Zm(e,r){if(e!=null&&!e)return"";const t=Nh(Nn.Node),n=r.added?ec.Added:r.removed?ec.Removed:e==null?"":" ",o=r.added?bo.Green:r.removed?bo.Red:bo.Reset;return[t?o:"",n,e??r.value,bo.Reset].join("")}i(Zm,"addColorToChange");function We(e){let r;try{r=Reflect.ownKeys(e)}catch{}return r??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}i(We,"getObjectTypedKeys");function Ex(e){return We(e).filter(r=>isNaN(Number(r)))}i(Ex,"getEnumKeys");function Kt(e){return Ex(e).map(t=>e[t])}i(Kt,"getEnumValues");const Ax=[".",":",";",",","?","!"],Sx=new RegExp(`[${Ax.join("")}]+$`);function Jm(e){return e.replace(Sx,"")}i(Jm,"removeEndingPunctuation");function Qr(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):x(e)}i(Qr,"extractErrorMessage");function Xi(...e){const r=e.map(s=>Qr(s)).filter(s=>!!Jm(s)),t=r[r.length-1]?.endsWith("."),n=r.map(s=>Jm(Qr(s)));return(n.length<2?n[0]||"":n.join(": "))+(t?".":"")}i(Xi,"combineErrorMessages");function kr(e){return e instanceof Error?e:new Error(Qr(e))}i(kr,"ensureError");function sa(e,r){const t=kr(e),n=Xi(r,t.message);try{return t.message=n,t}catch{return new Error(n,{cause:e})}}i(sa,"ensureErrorAndPrependMessage");var N;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(N||(N={}));var H;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(H||(H={}));H.ClientError,H.ServerError;N.Continue+"",H.Information,N.SwitchingProtocols+"",H.Information,N.Processing+"",H.Information,N.EarlyHints+"",H.Information,N.Ok+"",H.Success,N.Created+"",H.Success,N.Accepted+"",H.Success,N.NonAuthoritativeInformation+"",H.Success,N.NoContent+"",H.Success,N.ResetContent+"",H.Success,N.PartialContent+"",H.Success,N.MultiStatus+"",H.Success,N.AlreadyReported+"",H.Success,N.ImUsed+"",H.Success,N.MultipleChoices+"",H.Redirect,N.MovedPermanently+"",H.Redirect,N.Found+"",H.Redirect,N.SeeOther+"",H.Redirect,N.NotModified+"",H.Redirect,N.UseProxy+"",H.Redirect,N.Unused+"",H.Redirect,N.TemporaryRedirect+"",H.Redirect,N.PermanentRedirect+"",H.Redirect,N.BadRequest+"",H.ClientError,N.Unauthorized+"",H.ClientError,N.PaymentRequired+"",H.ClientError,N.Forbidden+"",H.ClientError,N.NotFound+"",H.ClientError,N.MethodNotAllowed+"",H.ClientError,N.NotAcceptable+"",H.ClientError,N.ProxyAuthenticationRequired+"",H.ClientError,N.RequestTimeout+"",H.ClientError,N.Conflict+"",H.ClientError,N.Gone+"",H.ClientError,N.LengthRequired+"",H.ClientError,N.PreconditionFailed+"",H.ClientError,N.PayloadTooLarge+"",H.ClientError,N.UriTooLong+"",H.ClientError,N.UnsupportedMediaType+"",H.ClientError,N.RangeNotSatisfiable+"",H.ClientError,N.ExpectationFailed+"",H.ClientError,N.ImATeapot+"",H.ClientError,N.MisdirectedRequest+"",H.ClientError,N.UnprocessableContent+"",H.ClientError,N.Locked+"",H.ClientError,N.FailedDependency+"",H.ClientError,N.TooEarly+"",H.ClientError,N.UpgradeRequired+"",H.ClientError,N.PreconditionRequired+"",H.ClientError,N.TooManyRequests+"",H.ClientError,N.RequestHeaderFieldsTooLarge+"",H.ClientError,N.UnavailableForLegalReasons+"",H.ClientError,N.InternalServerError+"",H.ServerError,N.NotImplemented+"",H.ServerError,N.BadGateway+"",H.ServerError,N.ServiceUnavailable+"",H.ServerError,N.GatewayTimeout+"",H.ServerError,N.HttpVersionNotSupported+"",H.ServerError,N.VariantAlsoNegotiates+"",H.ServerError,N.InsufficientStorage+"",H.ServerError,N.LoopDetected+"",H.ServerError,N.NotExtended+"",H.ServerError,N.NetworkAuthenticationRequired+"",H.ServerError;const ju={[H.Information]:[N.Continue,N.SwitchingProtocols,N.Processing,N.EarlyHints],[H.Success]:[N.Ok,N.Created,N.Accepted,N.NonAuthoritativeInformation,N.NoContent,N.ResetContent,N.PartialContent,N.MultiStatus,N.AlreadyReported,N.ImUsed],[H.Redirect]:[N.MultipleChoices,N.MovedPermanently,N.Found,N.SeeOther,N.NotModified,N.UseProxy,N.Unused,N.TemporaryRedirect,N.PermanentRedirect],[H.ClientError]:[N.BadRequest,N.Unauthorized,N.PaymentRequired,N.Forbidden,N.NotFound,N.MethodNotAllowed,N.NotAcceptable,N.ProxyAuthenticationRequired,N.RequestTimeout,N.Conflict,N.Gone,N.LengthRequired,N.PreconditionFailed,N.PayloadTooLarge,N.UriTooLong,N.UnsupportedMediaType,N.RangeNotSatisfiable,N.ExpectationFailed,N.ImATeapot,N.MisdirectedRequest,N.UnprocessableContent,N.Locked,N.FailedDependency,N.TooEarly,N.UpgradeRequired,N.PreconditionRequired,N.TooManyRequests,N.RequestHeaderFieldsTooLarge,N.UnavailableForLegalReasons],[H.ServerError]:[N.InternalServerError,N.NotImplemented,N.BadGateway,N.ServiceUnavailable,N.GatewayTimeout,N.HttpVersionNotSupported,N.VariantAlsoNegotiates,N.InsufficientStorage,N.LoopDetected,N.NotExtended,N.NetworkAuthenticationRequired]};function Ph({min:e,max:r}){return e>r?{min:r,max:e}:{min:e,max:r}}i(Ph,"ensureMinMax");class rc{static{i(this,"DeferredPromise")}promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((r,t)=>{this.resolve=n=>(this.isSettled=!0,r(n)),this.reject=n=>{this.isSettled=!0,t(kr(n))}})}}class Qi extends Error{static{i(this,"LuxonError")}}class Mx extends Qi{static{i(this,"InvalidDateTimeError")}constructor(r){super(`Invalid DateTime: ${r.toMessage()}`)}}class Fx extends Qi{static{i(this,"InvalidIntervalError")}constructor(r){super(`Invalid Interval: ${r.toMessage()}`)}}class Tx extends Qi{static{i(this,"InvalidDurationError")}constructor(r){super(`Invalid Duration: ${r.toMessage()}`)}}class Es extends Qi{static{i(this,"ConflictingSpecificationError")}}class Gv extends Qi{static{i(this,"InvalidUnitError")}constructor(r){super(`Invalid unit ${r}`)}}class pt extends Qi{static{i(this,"InvalidArgumentError")}}class Io extends Qi{static{i(this,"ZoneIsAbstractError")}constructor(){super("Zone is an abstract class")}}const K="numeric",Pn="short",Zt="long",tc={year:K,month:K,day:K},Hv={year:K,month:Pn,day:K},Nx={year:K,month:Pn,day:K,weekday:Pn},Zv={year:K,month:Zt,day:K},Jv={year:K,month:Zt,day:K,weekday:Zt},Yv={hour:K,minute:K},Xv={hour:K,minute:K,second:K},Qv={hour:K,minute:K,second:K,timeZoneName:Pn},ey={hour:K,minute:K,second:K,timeZoneName:Zt},ry={hour:K,minute:K,hourCycle:"h23"},ty={hour:K,minute:K,second:K,hourCycle:"h23"},ny={hour:K,minute:K,second:K,hourCycle:"h23",timeZoneName:Pn},oy={hour:K,minute:K,second:K,hourCycle:"h23",timeZoneName:Zt},iy={year:K,month:K,day:K,hour:K,minute:K},sy={year:K,month:K,day:K,hour:K,minute:K,second:K},ay={year:K,month:Pn,day:K,hour:K,minute:K},ly={year:K,month:Pn,day:K,hour:K,minute:K,second:K},Px={year:K,month:Pn,day:K,weekday:Pn,hour:K,minute:K},uy={year:K,month:Zt,day:K,hour:K,minute:K,timeZoneName:Pn},cy={year:K,month:Zt,day:K,hour:K,minute:K,second:K,timeZoneName:Pn},dy={year:K,month:Zt,day:K,weekday:Zt,hour:K,minute:K,timeZoneName:Zt},fy={year:K,month:Zt,day:K,weekday:Zt,hour:K,minute:K,second:K,timeZoneName:Zt};class Bl{static{i(this,"Zone")}get type(){throw new Io}get name(){throw new Io}get ianaName(){return this.name}get isUniversal(){throw new Io}offsetName(r,t){throw new Io}formatOffset(r,t){throw new Io}offset(r){throw new Io}equals(r){throw new Io}get isValid(){throw new Io}}let Yd=null;class zc extends Bl{static{i(this,"SystemZone")}static get instance(){return Yd===null&&(Yd=new zc),Yd}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return xy(r,t,n)}formatOffset(r,t){return rl(this.offset(r),t)}offset(r){return-new Date(r).getTimezoneOffset()}equals(r){return r.type==="system"}get isValid(){return!0}}const S0=new Map;function Ix(e){let r=S0.get(e);return r===void 0&&(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),S0.set(e,r)),r}i(Ix,"makeDTF");const Ox={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Bx(e,r){const t=e.format(r).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t),[,o,s,a,l,u,d,f]=n;return[a,o,s,l,u,d,f]}i(Bx,"hackyOffset");function Rx(e,r){const t=e.formatToParts(r),n=[];for(let o=0;o<t.length;o++){const{type:s,value:a}=t[o],l=Ox[s];s==="era"?n[l]=a:ae(l)||(n[l]=parseInt(a,10))}return n}i(Rx,"partsOffset");const Xd=new Map;class xo extends Bl{static{i(this,"IANAZone")}static create(r){let t=Xd.get(r);return t===void 0&&Xd.set(r,t=new xo(r)),t}static resetCache(){Xd.clear(),S0.clear()}static isValidSpecifier(r){return this.isValidZone(r)}static isValidZone(r){if(!r)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:r}).format(),!0}catch{return!1}}constructor(r){super(),this.zoneName=r,this.valid=xo.isValidZone(r)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return xy(r,t,n,this.name)}formatOffset(r,t){return rl(this.offset(r),t)}offset(r){if(!this.valid)return NaN;const t=new Date(r);if(isNaN(t))return NaN;const n=Ix(this.name);let[o,s,a,l,u,d,f]=n.formatToParts?Rx(n,t):Bx(n,t);l==="BC"&&(o=-Math.abs(o)+1);const g=qc({year:o,month:s,day:a,hour:u===24?0:u,minute:d,second:f,millisecond:0});let m=+t;const p=m%1e3;return m-=p>=0?p:1e3+p,(g-m)/(60*1e3)}equals(r){return r.type==="iana"&&r.name===this.name}get isValid(){return this.valid}}let Ym={};function Lx(e,r={}){const t=JSON.stringify([e,r]);let n=Ym[t];return n||(n=new Intl.ListFormat(e,r),Ym[t]=n),n}i(Lx,"getCachedLF");const M0=new Map;function F0(e,r={}){const t=JSON.stringify([e,r]);let n=M0.get(t);return n===void 0&&(n=new Intl.DateTimeFormat(e,r),M0.set(t,n)),n}i(F0,"getCachedDTF");const T0=new Map;function jx(e,r={}){const t=JSON.stringify([e,r]);let n=T0.get(t);return n===void 0&&(n=new Intl.NumberFormat(e,r),T0.set(t,n)),n}i(jx,"getCachedINF");const N0=new Map;function _x(e,r={}){const{base:t,...n}=r,o=JSON.stringify([e,n]);let s=N0.get(o);return s===void 0&&(s=new Intl.RelativeTimeFormat(e,r),N0.set(o,s)),s}i(_x,"getCachedRTF");let Va=null;function Ux(){return Va||(Va=new Intl.DateTimeFormat().resolvedOptions().locale,Va)}i(Ux,"systemLocale");const P0=new Map;function hy(e){let r=P0.get(e);return r===void 0&&(r=new Intl.DateTimeFormat(e).resolvedOptions(),P0.set(e,r)),r}i(hy,"getCachedIntResolvedOptions");const I0=new Map;function zx(e){let r=I0.get(e);if(!r){const t=new Intl.Locale(e);r="getWeekInfo"in t?t.getWeekInfo():t.weekInfo,"minimalDays"in r||(r={...gy,...r}),I0.set(e,r)}return r}i(zx,"getCachedWeekInfo");function Vx(e){const r=e.indexOf("-x-");r!==-1&&(e=e.substring(0,r));const t=e.indexOf("-u-");if(t===-1)return[e];{let n,o;try{n=F0(e).resolvedOptions(),o=e}catch{const u=e.substring(0,t);n=F0(u).resolvedOptions(),o=u}const{numberingSystem:s,calendar:a}=n;return[o,s,a]}}i(Vx,"parseLocaleString");function qx(e,r,t){return(t||r)&&(e.includes("-u-")||(e+="-u"),t&&(e+=`-ca-${t}`),r&&(e+=`-nu-${r}`)),e}i(qx,"intlConfigString");function Wx(e){const r=[];for(let t=1;t<=12;t++){const n=le.utc(2009,t,1);r.push(e(n))}return r}i(Wx,"mapMonths");function Kx(e){const r=[];for(let t=1;t<=7;t++){const n=le.utc(2016,11,13+t);r.push(e(n))}return r}i(Kx,"mapWeekdays");function fu(e,r,t,n){const o=e.listingMode();return o==="error"?null:o==="en"?t(r):n(r)}i(fu,"listStuff");function Gx(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||hy(e.locale).numberingSystem==="latn"}i(Gx,"supportsFastNumbers");class Hx{static{i(this,"PolyNumberFormatter")}constructor(r,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:s,...a}=n;if(!t||Object.keys(a).length>0){const l={useGrouping:!1,...n};n.padTo>0&&(l.minimumIntegerDigits=n.padTo),this.inf=jx(r,l)}}format(r){if(this.inf){const t=this.floor?Math.floor(r):r;return this.inf.format(t)}else{const t=this.floor?Math.floor(r):Lh(r,3);return Ar(t,this.padTo)}}}class Zx{static{i(this,"PolyDateFormatter")}constructor(r,t,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=r;else if(r.zone.type==="fixed"){const a=-1*(r.offset/60),l=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;r.offset!==0&&xo.create(l).valid?(o=l,this.dt=r):(o="UTC",this.dt=r.offset===0?r:r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone)}else r.zone.type==="system"?this.dt=r:r.zone.type==="iana"?(this.dt=r,o=r.zone.name):(o="UTC",this.dt=r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone);const s={...this.opts};s.timeZone=s.timeZone||o,this.dtf=F0(t,s)}format(){return this.originalZone?this.formatToParts().map(({value:r})=>r).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const r=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?r.map(t=>{if(t.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...t,value:n}}else return t}):r}resolvedOptions(){return this.dtf.resolvedOptions()}}class Jx{static{i(this,"PolyRelFormatter")}constructor(r,t,n){this.opts={style:"long",...n},!t&&$y()&&(this.rtf=_x(r,n))}format(r,t){return this.rtf?this.rtf.format(r,t):v4(t,r,this.opts.numeric,this.opts.style!=="long")}formatToParts(r,t){return this.rtf?this.rtf.formatToParts(r,t):[]}}const gy={firstDay:1,minimalDays:4,weekend:[6,7]};class je{static{i(this,"Locale")}static fromOpts(r){return je.create(r.locale,r.numberingSystem,r.outputCalendar,r.weekSettings,r.defaultToEN)}static create(r,t,n,o,s=!1){const a=r||fr.defaultLocale,l=a||(s?"en-US":Ux()),u=t||fr.defaultNumberingSystem,d=n||fr.defaultOutputCalendar,f=B0(o)||fr.defaultWeekSettings;return new je(l,u,d,f,a)}static resetCache(){Va=null,M0.clear(),T0.clear(),N0.clear(),P0.clear(),I0.clear()}static fromObject({locale:r,numberingSystem:t,outputCalendar:n,weekSettings:o}={}){return je.create(r,t,n,o)}constructor(r,t,n,o,s){const[a,l,u]=Vx(r);this.locale=a,this.numberingSystem=t||l||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=qx(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Gx(this)),this.fastNumbersCached}listingMode(){const r=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return r&&t?"en":"intl"}clone(r){return!r||Object.getOwnPropertyNames(r).length===0?this:je.create(r.locale||this.specifiedLocale,r.numberingSystem||this.numberingSystem,r.outputCalendar||this.outputCalendar,B0(r.weekSettings)||this.weekSettings,r.defaultToEN||!1)}redefaultToEN(r={}){return this.clone({...r,defaultToEN:!0})}redefaultToSystem(r={}){return this.clone({...r,defaultToEN:!1})}months(r,t=!1){return fu(this,r,Ey,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");t&=!n;const o=t?{month:r,day:"numeric"}:{month:r},s=t?"format":"standalone";if(!this.monthsCache[s][r]){const a=n?l=>this.dtFormatter(l,o).format():l=>this.extract(l,o,"month");this.monthsCache[s][r]=Wx(a)}return this.monthsCache[s][r]})}weekdays(r,t=!1){return fu(this,r,My,()=>{const n=t?{weekday:r,year:"numeric",month:"long",day:"numeric"}:{weekday:r},o=t?"format":"standalone";return this.weekdaysCache[o][r]||(this.weekdaysCache[o][r]=Kx(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[o][r]})}meridiems(){return fu(this,void 0,()=>Fy,()=>{if(!this.meridiemCache){const r={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[le.utc(2016,11,13,9),le.utc(2016,11,13,19)].map(t=>this.extract(t,r,"dayperiod"))}return this.meridiemCache})}eras(r){return fu(this,r,Ty,()=>{const t={era:r};return this.eraCache[r]||(this.eraCache[r]=[le.utc(-40,1,1),le.utc(2017,1,1)].map(n=>this.extract(n,t,"era"))),this.eraCache[r]})}extract(r,t,n){const o=this.dtFormatter(r,t),s=o.formatToParts(),a=s.find(l=>l.type.toLowerCase()===n);return a?a.value:null}numberFormatter(r={}){return new Hx(this.intl,r.forceSimple||this.fastNumbers,r)}dtFormatter(r,t={}){return new Zx(r,this.intl,t)}relFormatter(r={}){return new Jx(this.intl,this.isEnglish(),r)}listFormatter(r={}){return Lx(this.intl,r)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||hy(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:ky()?zx(this.locale):gy}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(r){return this.locale===r.locale&&this.numberingSystem===r.numberingSystem&&this.outputCalendar===r.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Qd=null;class xt extends Bl{static{i(this,"FixedOffsetZone")}static get utcInstance(){return Qd===null&&(Qd=new xt(0)),Qd}static instance(r){return r===0?xt.utcInstance:new xt(r)}static parseSpecifier(r){if(r){const t=r.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new xt(Wc(t[1],t[2]))}return null}constructor(r){super(),this.fixed=r}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${rl(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${rl(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(r,t){return rl(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(r){return r.type==="fixed"&&r.fixed===this.fixed}get isValid(){return!0}}class Yx extends Bl{static{i(this,"InvalidZone")}constructor(r){super(),this.zoneName=r}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function zo(e,r){if(ae(e)||e===null)return r;if(e instanceof Bl)return e;if(n4(e)){const t=e.toLowerCase();return t==="default"?r:t==="local"||t==="system"?zc.instance:t==="utc"||t==="gmt"?xt.utcInstance:xt.parseSpecifier(t)||xo.create(e)}else return Go(e)?xt.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Yx(e)}i(zo,"normalizeZone");const Ih={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Xm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Xx=Ih.hanidec.replace(/[\[|\]]/g,"").split("");function Qx(e){let r=parseInt(e,10);if(isNaN(r)){r="";for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(e[t].search(Ih.hanidec)!==-1)r+=Xx.indexOf(e[t]);else for(const o in Xm){const[s,a]=Xm[o];n>=s&&n<=a&&(r+=n-s)}}return parseInt(r,10)}else return r}i(Qx,"parseDigits");const O0=new Map;function e4(){O0.clear()}i(e4,"resetDigitRegexCache");function En({numberingSystem:e},r=""){const t=e||"latn";let n=O0.get(t);n===void 0&&(n=new Map,O0.set(t,n));let o=n.get(r);return o===void 0&&(o=new RegExp(`${Ih[t]}${r}`),n.set(r,o)),o}i(En,"digitRegex");let Qm=i(()=>Date.now(),"now"),ep="system",rp=null,tp=null,np=null,op=60,ip,sp=null;class fr{static{i(this,"Settings")}static get now(){return Qm}static set now(r){Qm=r}static set defaultZone(r){ep=r}static get defaultZone(){return zo(ep,zc.instance)}static get defaultLocale(){return rp}static set defaultLocale(r){rp=r}static get defaultNumberingSystem(){return tp}static set defaultNumberingSystem(r){tp=r}static get defaultOutputCalendar(){return np}static set defaultOutputCalendar(r){np=r}static get defaultWeekSettings(){return sp}static set defaultWeekSettings(r){sp=B0(r)}static get twoDigitCutoffYear(){return op}static set twoDigitCutoffYear(r){op=r%100}static get throwOnInvalid(){return ip}static set throwOnInvalid(r){ip=r}static resetCaches(){je.resetCache(),xo.resetCache(),le.resetCache(),e4()}}class Fn{static{i(this,"Invalid")}constructor(r,t){this.reason=r,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const my=[0,31,59,90,120,151,181,212,243,273,304,334],py=[0,31,60,91,121,152,182,213,244,274,305,335];function mn(e,r){return new Fn("unit out of range",`you specified ${r} (of type ${typeof r}) as a ${e}, which is invalid`)}i(mn,"unitOutOfRange");function Oh(e,r,t){const n=new Date(Date.UTC(e,r-1,t));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}i(Oh,"dayOfWeek");function by(e,r,t){return t+(Rl(e)?py:my)[r-1]}i(by,"computeOrdinal");function vy(e,r){const t=Rl(e)?py:my,n=t.findIndex(s=>s<r),o=r-t[n];return{month:n+1,day:o}}i(vy,"uncomputeOrdinal");function Bh(e,r){return(e-r+7)%7+1}i(Bh,"isoWeekdayToLocal");function nc(e,r=4,t=1){const{year:n,month:o,day:s}=e,a=by(n,o,s),l=Bh(Oh(n,o,s),t);let u=Math.floor((a-l+14-r)/7),d;return u<1?(d=n-1,u=cl(d,r,t)):u>cl(n,r,t)?(d=n+1,u=1):d=n,{weekYear:d,weekNumber:u,weekday:l,...Kc(e)}}i(nc,"gregorianToWeek");function ap(e,r=4,t=1){const{weekYear:n,weekNumber:o,weekday:s}=e,a=Bh(Oh(n,1,r),t),l=Ns(n);let u=o*7+s-a-7+r,d;u<1?(d=n-1,u+=Ns(d)):u>l?(d=n+1,u-=Ns(n)):d=n;const{month:f,day:h}=vy(d,u);return{year:d,month:f,day:h,...Kc(e)}}i(ap,"weekToGregorian");function ef(e){const{year:r,month:t,day:n}=e,o=by(r,t,n);return{year:r,ordinal:o,...Kc(e)}}i(ef,"gregorianToOrdinal");function lp(e){const{year:r,ordinal:t}=e,{month:n,day:o}=vy(r,t);return{year:r,month:n,day:o,...Kc(e)}}i(lp,"ordinalToGregorian");function up(e,r){if(!ae(e.localWeekday)||!ae(e.localWeekNumber)||!ae(e.localWeekYear)){if(!ae(e.weekday)||!ae(e.weekNumber)||!ae(e.weekYear))throw new Es("Cannot mix locale-based week fields with ISO-based week fields");return ae(e.localWeekday)||(e.weekday=e.localWeekday),ae(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),ae(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:r.getMinDaysInFirstWeek(),startOfWeek:r.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}i(up,"usesLocalWeekValues");function r4(e,r=4,t=1){const n=Vc(e.weekYear),o=pn(e.weekNumber,1,cl(e.weekYear,r,t)),s=pn(e.weekday,1,7);return n?o?s?!1:mn("weekday",e.weekday):mn("week",e.weekNumber):mn("weekYear",e.weekYear)}i(r4,"hasInvalidWeekData");function t4(e){const r=Vc(e.year),t=pn(e.ordinal,1,Ns(e.year));return r?t?!1:mn("ordinal",e.ordinal):mn("year",e.year)}i(t4,"hasInvalidOrdinalData");function yy(e){const r=Vc(e.year),t=pn(e.month,1,12),n=pn(e.day,1,oc(e.year,e.month));return r?t?n?!1:mn("day",e.day):mn("month",e.month):mn("year",e.year)}i(yy,"hasInvalidGregorianData");function wy(e){const{hour:r,minute:t,second:n,millisecond:o}=e,s=pn(r,0,23)||r===24&&t===0&&n===0&&o===0,a=pn(t,0,59),l=pn(n,0,59),u=pn(o,0,999);return s?a?l?u?!1:mn("millisecond",o):mn("second",n):mn("minute",t):mn("hour",r)}i(wy,"hasInvalidTimeData");function ae(e){return typeof e>"u"}i(ae,"isUndefined");function Go(e){return typeof e=="number"}i(Go,"isNumber");function Vc(e){return typeof e=="number"&&e%1===0}i(Vc,"isInteger");function n4(e){return typeof e=="string"}i(n4,"isString$1");function o4(e){return Object.prototype.toString.call(e)==="[object Date]"}i(o4,"isDate");function $y(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}i($y,"hasRelative");function ky(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}i(ky,"hasLocaleWeekInfo");function i4(e){return Array.isArray(e)?e:[e]}i(i4,"maybeArray");function cp(e,r,t){if(e.length!==0)return e.reduce((n,o)=>{const s=[r(o),o];return n&&t(n[0],s[0])===n[0]?n:s},null)[1]}i(cp,"bestBy");function s4(e,r){return r.reduce((t,n)=>(t[n]=e[n],t),{})}i(s4,"pick");function _s(e,r){return Object.prototype.hasOwnProperty.call(e,r)}i(_s,"hasOwnProperty$1");function B0(e){if(e==null)return null;if(typeof e!="object")throw new pt("Week settings must be an object");if(!pn(e.firstDay,1,7)||!pn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(r=>!pn(r,1,7)))throw new pt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}i(B0,"validateWeekSettings");function pn(e,r,t){return Vc(e)&&e>=r&&e<=t}i(pn,"integerBetween");function a4(e,r){return e-r*Math.floor(e/r)}i(a4,"floorMod");function Ar(e,r=2){const t=e<0;let n;return t?n="-"+(""+-e).padStart(r,"0"):n=(""+e).padStart(r,"0"),n}i(Ar,"padStart");function jo(e){if(!(ae(e)||e===null||e===""))return parseInt(e,10)}i(jo,"parseInteger");function wi(e){if(!(ae(e)||e===null||e===""))return parseFloat(e)}i(wi,"parseFloating");function Rh(e){if(!(ae(e)||e===null||e==="")){const r=parseFloat("0."+e)*1e3;return Math.floor(r)}}i(Rh,"parseMillis");function Lh(e,r,t="round"){const n=10**r;switch(t){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${t} is out of range`)}}i(Lh,"roundTo");function Rl(e){return e%4===0&&(e%100!==0||e%400===0)}i(Rl,"isLeapYear");function Ns(e){return Rl(e)?366:365}i(Ns,"daysInYear");function oc(e,r){const t=a4(r-1,12)+1,n=e+(r-t)/12;return t===2?Rl(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][t-1]}i(oc,"daysInMonth");function qc(e){let r=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(r=new Date(r),r.setUTCFullYear(e.year,e.month-1,e.day)),+r}i(qc,"objToLocalTS");function dp(e,r,t){return-Bh(Oh(e,1,r),t)+r-1}i(dp,"firstWeekOffset");function cl(e,r=4,t=1){const n=dp(e,r,t),o=dp(e+1,r,t);return(Ns(e)-n+o)/7}i(cl,"weeksInWeekYear");function R0(e){return e>99?e:e>fr.twoDigitCutoffYear?1900+e:2e3+e}i(R0,"untruncateYear");function xy(e,r,t,n=null){const o=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const a={timeZoneName:r,...s},l=new Intl.DateTimeFormat(t,a).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return l?l.value:null}i(xy,"parseZoneInfo");function Wc(e,r){let t=parseInt(e,10);Number.isNaN(t)&&(t=0);const n=parseInt(r,10)||0,o=t<0||Object.is(t,-0)?-n:n;return t*60+o}i(Wc,"signedOffset");function Dy(e){const r=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(r))throw new pt(`Invalid unit value ${e}`);return r}i(Dy,"asNumber");function ic(e,r){const t={};for(const n in e)if(_s(e,n)){const o=e[n];if(o==null)continue;t[r(n)]=Dy(o)}return t}i(ic,"normalizeObject");function rl(e,r){const t=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(r){case"short":return`${o}${Ar(t,2)}:${Ar(n,2)}`;case"narrow":return`${o}${t}${n>0?`:${n}`:""}`;case"techie":return`${o}${Ar(t,2)}${Ar(n,2)}`;default:throw new RangeError(`Value format ${r} is out of range for property format`)}}i(rl,"formatOffset");function Kc(e){return s4(e,["hour","minute","second","millisecond"])}i(Kc,"timeObject");const l4=["January","February","March","April","May","June","July","August","September","October","November","December"],Cy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u4=["J","F","M","A","M","J","J","A","S","O","N","D"];function Ey(e){switch(e){case"narrow":return[...u4];case"short":return[...Cy];case"long":return[...l4];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}i(Ey,"months");const Ay=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Sy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],c4=["M","T","W","T","F","S","S"];function My(e){switch(e){case"narrow":return[...c4];case"short":return[...Sy];case"long":return[...Ay];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}i(My,"weekdays");const Fy=["AM","PM"],d4=["Before Christ","Anno Domini"],f4=["BC","AD"],h4=["B","A"];function Ty(e){switch(e){case"narrow":return[...h4];case"short":return[...f4];case"long":return[...d4];default:return null}}i(Ty,"eras");function g4(e){return Fy[e.hour<12?0:1]}i(g4,"meridiemForDateTime");function m4(e,r){return My(r)[e.weekday-1]}i(m4,"weekdayForDateTime");function p4(e,r){return Ey(r)[e.month-1]}i(p4,"monthForDateTime");function b4(e,r){return Ty(r)[e.year<0?0:1]}i(b4,"eraForDateTime");function v4(e,r,t="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(t==="auto"&&s){const h=e==="days";switch(r){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const a=Object.is(r,-0)||r<0,l=Math.abs(r),u=l===1,d=o[e],f=n?u?d[1]:d[2]||d[1]:u?o[e][0]:e;return a?`${l} ${f} ago`:`in ${l} ${f}`}i(v4,"formatRelativeTime");function fp(e,r){let t="";for(const n of e)n.literal?t+=n.val:t+=r(n.val);return t}i(fp,"stringifyTokens");const y4={D:tc,DD:Hv,DDD:Zv,DDDD:Jv,t:Yv,tt:Xv,ttt:Qv,tttt:ey,T:ry,TT:ty,TTT:ny,TTTT:oy,f:iy,ff:ay,fff:uy,ffff:dy,F:sy,FF:ly,FFF:cy,FFFF:fy};class vt{static{i(this,"Formatter")}static create(r,t={}){return new vt(r,t)}static parseFormat(r){let t=null,n="",o=!1;const s=[];for(let a=0;a<r.length;a++){const l=r.charAt(a);l==="'"?((n.length>0||o)&&s.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),t=null,n="",o=!o):o||l===t?n+=l:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=l,t=l)}return n.length>0&&s.push({literal:o||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(r){return y4[r]}constructor(r,t){this.opts=t,this.loc=r,this.systemLoc=null}formatWithSystemDefault(r,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(r,{...this.opts,...t}).format()}dtFormatter(r,t={}){return this.loc.dtFormatter(r,{...this.opts,...t})}formatDateTime(r,t){return this.dtFormatter(r,t).format()}formatDateTimeParts(r,t){return this.dtFormatter(r,t).formatToParts()}formatInterval(r,t){return this.dtFormatter(r.start,t).dtf.formatRange(r.start.toJSDate(),r.end.toJSDate())}resolvedOptions(r,t){return this.dtFormatter(r,t).resolvedOptions()}num(r,t=0,n=void 0){if(this.opts.forceSimple)return Ar(r,t);const o={...this.opts};return t>0&&(o.padTo=t),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(r)}formatDateTimeFromString(r,t){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=i((m,p)=>this.loc.extract(r,m,p),"string"),a=i(m=>r.isOffsetFixed&&r.offset===0&&m.allowZ?"Z":r.isValid?r.zone.formatOffset(r.ts,m.format):"","formatOffset"),l=i(()=>n?g4(r):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),"meridiem"),u=i((m,p)=>n?p4(r,m):s(p?{month:m}:{month:m,day:"numeric"},"month"),"month"),d=i((m,p)=>n?m4(r,m):s(p?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),"weekday"),f=i(m=>{const p=vt.macroTokenToFormatOpts(m);return p?this.formatWithSystemDefault(r,p):m},"maybeMacro"),h=i(m=>n?b4(r,m):s({era:m},"era"),"era"),g=i(m=>{switch(m){case"S":return this.num(r.millisecond);case"u":case"SSS":return this.num(r.millisecond,3);case"s":return this.num(r.second);case"ss":return this.num(r.second,2);case"uu":return this.num(Math.floor(r.millisecond/10),2);case"uuu":return this.num(Math.floor(r.millisecond/100));case"m":return this.num(r.minute);case"mm":return this.num(r.minute,2);case"h":return this.num(r.hour%12===0?12:r.hour%12);case"hh":return this.num(r.hour%12===0?12:r.hour%12,2);case"H":return this.num(r.hour);case"HH":return this.num(r.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return r.zone.offsetName(r.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return r.zone.offsetName(r.ts,{format:"long",locale:this.loc.locale});case"z":return r.zoneName;case"a":return l();case"d":return o?s({day:"numeric"},"day"):this.num(r.day);case"dd":return o?s({day:"2-digit"},"day"):this.num(r.day,2);case"c":return this.num(r.weekday);case"ccc":return d("short",!0);case"cccc":return d("long",!0);case"ccccc":return d("narrow",!0);case"E":return this.num(r.weekday);case"EEE":return d("short",!1);case"EEEE":return d("long",!1);case"EEEEE":return d("narrow",!1);case"L":return o?s({month:"numeric",day:"numeric"},"month"):this.num(r.month);case"LL":return o?s({month:"2-digit",day:"numeric"},"month"):this.num(r.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?s({month:"numeric"},"month"):this.num(r.month);case"MM":return o?s({month:"2-digit"},"month"):this.num(r.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?s({year:"numeric"},"year"):this.num(r.year);case"yy":return o?s({year:"2-digit"},"year"):this.num(r.year.toString().slice(-2),2);case"yyyy":return o?s({year:"numeric"},"year"):this.num(r.year,4);case"yyyyyy":return o?s({year:"numeric"},"year"):this.num(r.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(r.weekYear.toString().slice(-2),2);case"kkkk":return this.num(r.weekYear,4);case"W":return this.num(r.weekNumber);case"WW":return this.num(r.weekNumber,2);case"n":return this.num(r.localWeekNumber);case"nn":return this.num(r.localWeekNumber,2);case"ii":return this.num(r.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(r.localWeekYear,4);case"o":return this.num(r.ordinal);case"ooo":return this.num(r.ordinal,3);case"q":return this.num(r.quarter);case"qq":return this.num(r.quarter,2);case"X":return this.num(Math.floor(r.ts/1e3));case"x":return this.num(r.ts);default:return f(m)}},"tokenToString");return fp(vt.parseFormat(t),g)}formatDurationFromString(r,t){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=i(f=>{switch(f[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},"tokenToField"),s=i((f,h)=>g=>{const m=o(g);if(m){const p=h.isNegativeDuration&&m!==h.largestUnit?n:1;let v;return this.opts.signMode==="negativeLargestOnly"&&m!==h.largestUnit?v="never":this.opts.signMode==="all"?v="always":v="auto",this.num(f.get(m)*p,g.length,v)}else return g},"tokenToString"),a=vt.parseFormat(t),l=a.reduce((f,{literal:h,val:g})=>h?f:f.concat(g),[]),u=r.shiftTo(...l.map(o).filter(f=>f)),d={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return fp(a,s(u,d))}}const Ny=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function aa(...e){const r=e.reduce((t,n)=>t+n.source,"");return RegExp(`^${r}$`)}i(aa,"combineRegexes");function la(...e){return r=>e.reduce(([t,n,o],s)=>{const[a,l,u]=s(r,o);return[{...t,...a},l||n,u]},[{},null,1]).slice(0,2)}i(la,"combineExtractors");function ua(e,...r){if(e==null)return[null,null];for(const[t,n]of r){const o=t.exec(e);if(o)return n(o)}return[null,null]}i(ua,"parse$2");function Py(...e){return(r,t)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=jo(r[t+o]);return[n,null,t+o]}}i(Py,"simpleParse");const Iy=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,w4=`(?:${Iy.source}?(?:\\[(${Ny.source})\\])?)?`,jh=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Oy=RegExp(`${jh.source}${w4}`),_h=RegExp(`(?:[Tt]${Oy.source})?`),$4=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,k4=/(\d{4})-?W(\d\d)(?:-?(\d))?/,x4=/(\d{4})-?(\d{3})/,D4=Py("weekYear","weekNumber","weekDay"),C4=Py("year","ordinal"),E4=/(\d{4})-(\d\d)-(\d\d)/,By=RegExp(`${jh.source} ?(?:${Iy.source}|(${Ny.source}))?`),A4=RegExp(`(?: ${By.source})?`);function Ps(e,r,t){const n=e[r];return ae(n)?t:jo(n)}i(Ps,"int");function S4(e,r){return[{year:Ps(e,r),month:Ps(e,r+1,1),day:Ps(e,r+2,1)},null,r+3]}i(S4,"extractISOYmd");function ca(e,r){return[{hours:Ps(e,r,0),minutes:Ps(e,r+1,0),seconds:Ps(e,r+2,0),milliseconds:Rh(e[r+3])},null,r+4]}i(ca,"extractISOTime");function Ll(e,r){const t=!e[r]&&!e[r+1],n=Wc(e[r+1],e[r+2]),o=t?null:xt.instance(n);return[{},o,r+3]}i(Ll,"extractISOOffset");function jl(e,r){const t=e[r]?xo.create(e[r]):null;return[{},t,r+1]}i(jl,"extractIANAZone");const M4=RegExp(`^T?${jh.source}$`),F4=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function T4(e){const[r,t,n,o,s,a,l,u,d]=e,f=r[0]==="-",h=u&&u[0]==="-",g=i((m,p=!1)=>m!==void 0&&(p||m&&f)?-m:m,"maybeNegate");return[{years:g(wi(t)),months:g(wi(n)),weeks:g(wi(o)),days:g(wi(s)),hours:g(wi(a)),minutes:g(wi(l)),seconds:g(wi(u),u==="-0"),milliseconds:g(Rh(d),h)}]}i(T4,"extractISODuration");const N4={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Uh(e,r,t,n,o,s,a){const l={year:r.length===2?R0(jo(r)):jo(r),month:Cy.indexOf(t)+1,day:jo(n),hour:jo(o),minute:jo(s)};return a&&(l.second=jo(a)),e&&(l.weekday=e.length>3?Ay.indexOf(e)+1:Sy.indexOf(e)+1),l}i(Uh,"fromStrings");const P4=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function I4(e){const[,r,t,n,o,s,a,l,u,d,f,h]=e,g=Uh(r,o,n,t,s,a,l);let m;return u?m=N4[u]:d?m=0:m=Wc(f,h),[g,new xt(m)]}i(I4,"extractRFC2822");function O4(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}i(O4,"preprocessRFC2822");const B4=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,R4=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,L4=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function hp(e){const[,r,t,n,o,s,a,l]=e;return[Uh(r,o,n,t,s,a,l),xt.utcInstance]}i(hp,"extractRFC1123Or850");function j4(e){const[,r,t,n,o,s,a,l]=e;return[Uh(r,l,t,n,o,s,a),xt.utcInstance]}i(j4,"extractASCII");const _4=aa($4,_h),U4=aa(k4,_h),z4=aa(x4,_h),V4=aa(Oy),Ry=la(S4,ca,Ll,jl),q4=la(D4,ca,Ll,jl),W4=la(C4,ca,Ll,jl),K4=la(ca,Ll,jl);function G4(e){return ua(e,[_4,Ry],[U4,q4],[z4,W4],[V4,K4])}i(G4,"parseISODate");function H4(e){return ua(O4(e),[P4,I4])}i(H4,"parseRFC2822Date");function Z4(e){return ua(e,[B4,hp],[R4,hp],[L4,j4])}i(Z4,"parseHTTPDate");function J4(e){return ua(e,[F4,T4])}i(J4,"parseISODuration");const Y4=la(ca);function X4(e){return ua(e,[M4,Y4])}i(X4,"parseISOTimeOnly");const Q4=aa(E4,A4),e3=aa(By),r3=la(ca,Ll,jl);function t3(e){return ua(e,[Q4,Ry],[e3,r3])}i(t3,"parseSQL");const gp="Invalid Duration",Ly={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},n3={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Ly},cn=146097/400,gs=146097/4800,o3={years:{quarters:4,months:12,weeks:cn/7,days:cn,hours:cn*24,minutes:cn*24*60,seconds:cn*24*60*60,milliseconds:cn*24*60*60*1e3},quarters:{months:3,weeks:cn/28,days:cn/4,hours:cn*24/4,minutes:cn*24*60/4,seconds:cn*24*60*60/4,milliseconds:cn*24*60*60*1e3/4},months:{weeks:gs/7,days:gs,hours:gs*24,minutes:gs*24*60,seconds:gs*24*60*60,milliseconds:gs*24*60*60*1e3},...Ly},Ti=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],i3=Ti.slice(0).reverse();function io(e,r,t=!1){const n={values:t?r.values:{...e.values,...r.values||{}},loc:e.loc.clone(r.loc),conversionAccuracy:r.conversionAccuracy||e.conversionAccuracy,matrix:r.matrix||e.matrix};return new Ee(n)}i(io,"clone$1");function jy(e,r){let t=r.milliseconds??0;for(const n of i3.slice(1))r[n]&&(t+=r[n]*e[n].milliseconds);return t}i(jy,"durationToMillis");function mp(e,r){const t=jy(e,r)<0?-1:1;Ti.reduceRight((n,o)=>{if(ae(r[o]))return n;if(n){const s=r[n]*t,a=e[o][n],l=Math.floor(s/a);r[o]+=l*t,r[n]-=l*a*t}return o},null),Ti.reduce((n,o)=>{if(ae(r[o]))return n;if(n){const s=r[n]%1;r[n]-=s,r[o]+=s*e[n][o]}return o},null)}i(mp,"normalizeValues");function pp(e){const r={};for(const[t,n]of Object.entries(e))n!==0&&(r[t]=n);return r}i(pp,"removeZeroes");class Ee{static{i(this,"Duration")}constructor(r){const t=r.conversionAccuracy==="longterm"||!1;let n=t?o3:n3;r.matrix&&(n=r.matrix),this.values=r.values,this.loc=r.loc||je.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=r.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(r,t){return Ee.fromObject({milliseconds:r},t)}static fromObject(r,t={}){if(r==null||typeof r!="object")throw new pt(`Duration.fromObject: argument expected to be an object, got ${r===null?"null":typeof r}`);return new Ee({values:ic(r,Ee.normalizeUnit),loc:je.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(r){if(Go(r))return Ee.fromMillis(r);if(Ee.isDuration(r))return r;if(typeof r=="object")return Ee.fromObject(r);throw new pt(`Unknown duration argument ${r} of type ${typeof r}`)}static fromISO(r,t){const[n]=J4(r);return n?Ee.fromObject(n,t):Ee.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static fromISOTime(r,t){const[n]=X4(r);return n?Ee.fromObject(n,t):Ee.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static invalid(r,t=null){if(!r)throw new pt("need to specify a reason the Duration is invalid");const n=r instanceof Fn?r:new Fn(r,t);if(fr.throwOnInvalid)throw new Tx(n);return new Ee({invalid:n})}static normalizeUnit(r){const t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[r&&r.toLowerCase()];if(!t)throw new Gv(r);return t}static isDuration(r){return r&&r.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(r,t={}){const n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?vt.create(this.loc,n).formatDurationFromString(this,r):gp}toHuman(r={}){if(!this.isValid)return gp;const t=r.showZeros!==!1,n=Ti.map(o=>{const s=this.values[o];return ae(s)||s===0&&!t?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...r,unit:o.slice(0,-1)}).format(s)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:r.listStyle||"narrow",...r}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let r="P";return this.years!==0&&(r+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(r+=this.months+this.quarters*3+"M"),this.weeks!==0&&(r+=this.weeks+"W"),this.days!==0&&(r+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(r+="T"),this.hours!==0&&(r+=this.hours+"H"),this.minutes!==0&&(r+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(r+=Lh(this.seconds+this.milliseconds/1e3,3)+"S"),r==="P"&&(r+="T0S"),r}toISOTime(r={}){if(!this.isValid)return null;const t=this.toMillis();return t<0||t>=864e5?null:(r={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...r,includeOffset:!1},le.fromMillis(t,{zone:"UTC"}).toISOTime(r))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?jy(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(r){if(!this.isValid)return this;const t=Ee.fromDurationLike(r),n={};for(const o of Ti)(_s(t.values,o)||_s(this.values,o))&&(n[o]=t.get(o)+this.get(o));return io(this,{values:n},!0)}minus(r){if(!this.isValid)return this;const t=Ee.fromDurationLike(r);return this.plus(t.negate())}mapUnits(r){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=Dy(r(this.values[n],n));return io(this,{values:t},!0)}get(r){return this[Ee.normalizeUnit(r)]}set(r){if(!this.isValid)return this;const t={...this.values,...ic(r,Ee.normalizeUnit)};return io(this,{values:t})}reconfigure({locale:r,numberingSystem:t,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:r,numberingSystem:t}),matrix:o,conversionAccuracy:n};return io(this,a)}as(r){return this.isValid?this.shiftTo(r).get(r):NaN}normalize(){if(!this.isValid)return this;const r=this.toObject();return mp(this.matrix,r),io(this,{values:r},!0)}rescale(){if(!this.isValid)return this;const r=pp(this.normalize().shiftToAll().toObject());return io(this,{values:r},!0)}shiftTo(...r){if(!this.isValid)return this;if(r.length===0)return this;r=r.map(a=>Ee.normalizeUnit(a));const t={},n={},o=this.toObject();let s;for(const a of Ti)if(r.indexOf(a)>=0){s=a;let l=0;for(const d in n)l+=this.matrix[d][a]*n[d],n[d]=0;Go(o[a])&&(l+=o[a]);const u=Math.trunc(l);t[a]=u,n[a]=(l*1e3-u*1e3)/1e3}else Go(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(t[s]+=a===s?n[a]:n[a]/this.matrix[s][a]);return mp(this.matrix,t),io(this,{values:t},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const r={};for(const t of Object.keys(this.values))r[t]=this.values[t]===0?0:-this.values[t];return io(this,{values:r},!0)}removeZeros(){if(!this.isValid)return this;const r=pp(this.values);return io(this,{values:r},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(r){if(!this.isValid||!r.isValid||!this.loc.equals(r.loc))return!1;function t(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}i(t,"eq");for(const n of Ti)if(!t(this.values[n],r.values[n]))return!1;return!0}}const ms="Invalid Interval";function s3(e,r){return!e||!e.isValid?yr.invalid("missing or invalid start"):!r||!r.isValid?yr.invalid("missing or invalid end"):r<e?yr.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${r.toISO()}`):null}i(s3,"validateStartEnd");class yr{static{i(this,"Interval")}constructor(r){this.s=r.start,this.e=r.end,this.invalid=r.invalid||null,this.isLuxonInterval=!0}static invalid(r,t=null){if(!r)throw new pt("need to specify a reason the Interval is invalid");const n=r instanceof Fn?r:new Fn(r,t);if(fr.throwOnInvalid)throw new Fx(n);return new yr({invalid:n})}static fromDateTimes(r,t){const n=Fa(r),o=Fa(t),s=s3(n,o);return s??new yr({start:n,end:o})}static after(r,t){const n=Ee.fromDurationLike(t),o=Fa(r);return yr.fromDateTimes(o,o.plus(n))}static before(r,t){const n=Ee.fromDurationLike(t),o=Fa(r);return yr.fromDateTimes(o.minus(n),o)}static fromISO(r,t){const[n,o]=(r||"").split("/",2);if(n&&o){let s,a;try{s=le.fromISO(n,t),a=s.isValid}catch{a=!1}let l,u;try{l=le.fromISO(o,t),u=l.isValid}catch{u=!1}if(a&&u)return yr.fromDateTimes(s,l);if(a){const d=Ee.fromISO(o,t);if(d.isValid)return yr.after(s,d)}else if(u){const d=Ee.fromISO(n,t);if(d.isValid)return yr.before(l,d)}}return yr.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static isInterval(r){return r&&r.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(r="milliseconds"){return this.isValid?this.toDuration(r).get(r):NaN}count(r="milliseconds",t){if(!this.isValid)return NaN;const n=this.start.startOf(r,t);let o;return t?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(r,t),Math.floor(o.diff(n,r).get(r))+(o.valueOf()!==this.end.valueOf())}hasSame(r){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,r):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(r){return this.isValid?this.s>r:!1}isBefore(r){return this.isValid?this.e<=r:!1}contains(r){return this.isValid?this.s<=r&&this.e>r:!1}set({start:r,end:t}={}){return this.isValid?yr.fromDateTimes(r||this.s,t||this.e):this}splitAt(...r){if(!this.isValid)return[];const t=r.map(Fa).filter(a=>this.contains(a)).sort((a,l)=>a.toMillis()-l.toMillis()),n=[];let{s:o}=this,s=0;for(;o<this.e;){const a=t[s]||this.e,l=+a>+this.e?this.e:a;n.push(yr.fromDateTimes(o,l)),o=l,s+=1}return n}splitBy(r){const t=Ee.fromDurationLike(r);if(!this.isValid||!t.isValid||t.as("milliseconds")===0)return[];let{s:n}=this,o=1,s;const a=[];for(;n<this.e;){const l=this.start.plus(t.mapUnits(u=>u*o));s=+l>+this.e?this.e:l,a.push(yr.fromDateTimes(n,s)),n=s,o+=1}return a}divideEqually(r){return this.isValid?this.splitBy(this.length()/r).slice(0,r):[]}overlaps(r){return this.e>r.s&&this.s<r.e}abutsStart(r){return this.isValid?+this.e==+r.s:!1}abutsEnd(r){return this.isValid?+r.e==+this.s:!1}engulfs(r){return this.isValid?this.s<=r.s&&this.e>=r.e:!1}equals(r){return!this.isValid||!r.isValid?!1:this.s.equals(r.s)&&this.e.equals(r.e)}intersection(r){if(!this.isValid)return this;const t=this.s>r.s?this.s:r.s,n=this.e<r.e?this.e:r.e;return t>=n?null:yr.fromDateTimes(t,n)}union(r){if(!this.isValid)return this;const t=this.s<r.s?this.s:r.s,n=this.e>r.e?this.e:r.e;return yr.fromDateTimes(t,n)}static merge(r){const[t,n]=r.sort((o,s)=>o.s-s.s).reduce(([o,s],a)=>s?s.overlaps(a)||s.abutsStart(a)?[o,s.union(a)]:[o.concat([s]),a]:[o,a],[[],null]);return n&&t.push(n),t}static xor(r){let t=null,n=0;const o=[],s=r.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),a=Array.prototype.concat(...s),l=a.sort((u,d)=>u.time-d.time);for(const u of l)n+=u.type==="s"?1:-1,n===1?t=u.time:(t&&+t!=+u.time&&o.push(yr.fromDateTimes(t,u.time)),t=null);return yr.merge(o)}difference(...r){return yr.xor([this].concat(r)).map(t=>this.intersection(t)).filter(t=>t&&!t.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ms}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(r=tc,t={}){return this.isValid?vt.create(this.s.loc.clone(t),r).formatInterval(this):ms}toISO(r){return this.isValid?`${this.s.toISO(r)}/${this.e.toISO(r)}`:ms}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ms}toISOTime(r){return this.isValid?`${this.s.toISOTime(r)}/${this.e.toISOTime(r)}`:ms}toFormat(r,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(r)}${t}${this.e.toFormat(r)}`:ms}toDuration(r,t){return this.isValid?this.e.diff(this.s,r,t):Ee.invalid(this.invalidReason)}mapEndpoints(r){return yr.fromDateTimes(r(this.s),r(this.e))}}class hu{static{i(this,"Info")}static hasDST(r=fr.defaultZone){const t=le.now().setZone(r).set({month:12});return!r.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(r){return xo.isValidZone(r)}static normalizeZone(r){return zo(r,fr.defaultZone)}static getStartOfWeek({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getWeekendDays().slice()}static months(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:s="gregory"}={}){return(o||je.create(t,n,s)).months(r)}static monthsFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:s="gregory"}={}){return(o||je.create(t,n,s)).months(r,!0)}static weekdays(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||je.create(t,n,null)).weekdays(r)}static weekdaysFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||je.create(t,n,null)).weekdays(r,!0)}static meridiems({locale:r=null}={}){return je.create(r).meridiems()}static eras(r="short",{locale:t=null}={}){return je.create(t,null,"gregory").eras(r)}static features(){return{relative:$y(),localeWeek:ky()}}}function bp(e,r){const t=i(o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),"utcDayStart"),n=t(r)-t(e);return Math.floor(Ee.fromMillis(n).as("days"))}i(bp,"dayDiff");function a3(e,r,t){const n=[["years",(u,d)=>d.year-u.year],["quarters",(u,d)=>d.quarter-u.quarter+(d.year-u.year)*4],["months",(u,d)=>d.month-u.month+(d.year-u.year)*12],["weeks",(u,d)=>{const f=bp(u,d);return(f-f%7)/7}],["days",bp]],o={},s=e;let a,l;for(const[u,d]of n)t.indexOf(u)>=0&&(a=u,o[u]=d(e,r),l=s.plus(o),l>r?(o[u]--,e=s.plus(o),e>r&&(l=e,o[u]--,e=s.plus(o))):e=l);return[e,o,l,a]}i(a3,"highOrderDiffs");function l3(e,r,t,n){let[o,s,a,l]=a3(e,r,t);const u=r-o,d=t.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);d.length===0&&(a<r&&(a=o.plus({[l]:1})),a!==o&&(s[l]=(s[l]||0)+u/(a-o)));const f=Ee.fromObject(s,n);return d.length>0?Ee.fromMillis(u,n).shiftTo(...d).plus(f):f}i(l3,"diff");const u3="missing Intl.DateTimeFormat.formatToParts support";function Oe(e,r=t=>t){return{regex:e,deser:i(([t])=>r(Qx(t)),"deser")}}i(Oe,"intUnit");const c3=" ",_y=`[ ${c3}]`,Uy=new RegExp(_y,"g");function d3(e){return e.replace(/\./g,"\\.?").replace(Uy,_y)}i(d3,"fixListRegex");function vp(e){return e.replace(/\./g,"").replace(Uy," ").toLowerCase()}i(vp,"stripInsensitivities");function An(e,r){return e===null?null:{regex:RegExp(e.map(d3).join("|")),deser:i(([t])=>e.findIndex(n=>vp(t)===vp(n))+r,"deser")}}i(An,"oneOf");function yp(e,r){return{regex:e,deser:i(([,t,n])=>Wc(t,n),"deser"),groups:r}}i(yp,"offset");function gu(e){return{regex:e,deser:i(([r])=>r,"deser")}}i(gu,"simple");function f3(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}i(f3,"escapeToken");function h3(e,r){const t=En(r),n=En(r,"{2}"),o=En(r,"{3}"),s=En(r,"{4}"),a=En(r,"{6}"),l=En(r,"{1,2}"),u=En(r,"{1,3}"),d=En(r,"{1,6}"),f=En(r,"{1,9}"),h=En(r,"{2,4}"),g=En(r,"{4,6}"),m=i(w=>({regex:RegExp(f3(w.val)),deser:i(([k])=>k,"deser"),literal:!0}),"literal"),v=i(w=>{if(e.literal)return m(w);switch(w.val){case"G":return An(r.eras("short"),0);case"GG":return An(r.eras("long"),0);case"y":return Oe(d);case"yy":return Oe(h,R0);case"yyyy":return Oe(s);case"yyyyy":return Oe(g);case"yyyyyy":return Oe(a);case"M":return Oe(l);case"MM":return Oe(n);case"MMM":return An(r.months("short",!0),1);case"MMMM":return An(r.months("long",!0),1);case"L":return Oe(l);case"LL":return Oe(n);case"LLL":return An(r.months("short",!1),1);case"LLLL":return An(r.months("long",!1),1);case"d":return Oe(l);case"dd":return Oe(n);case"o":return Oe(u);case"ooo":return Oe(o);case"HH":return Oe(n);case"H":return Oe(l);case"hh":return Oe(n);case"h":return Oe(l);case"mm":return Oe(n);case"m":return Oe(l);case"q":return Oe(l);case"qq":return Oe(n);case"s":return Oe(l);case"ss":return Oe(n);case"S":return Oe(u);case"SSS":return Oe(o);case"u":return gu(f);case"uu":return gu(l);case"uuu":return Oe(t);case"a":return An(r.meridiems(),0);case"kkkk":return Oe(s);case"kk":return Oe(h,R0);case"W":return Oe(l);case"WW":return Oe(n);case"E":case"c":return Oe(t);case"EEE":return An(r.weekdays("short",!1),1);case"EEEE":return An(r.weekdays("long",!1),1);case"ccc":return An(r.weekdays("short",!0),1);case"cccc":return An(r.weekdays("long",!0),1);case"Z":case"ZZ":return yp(new RegExp(`([+-]${l.source})(?::(${n.source}))?`),2);case"ZZZ":return yp(new RegExp(`([+-]${l.source})(${n.source})?`),2);case"z":return gu(/[a-z_+-/]{1,256}?/i);case" ":return gu(/[^\S\n\r]/);default:return m(w)}},"unitate")(e)||{invalidReason:u3};return v.token=e,v}i(h3,"unitForToken");const g3={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function m3(e,r,t){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const s=r[n];let a=n;n==="hour"&&(r.hour12!=null?a=r.hour12?"hour12":"hour24":r.hourCycle!=null?r.hourCycle==="h11"||r.hourCycle==="h12"?a="hour12":a="hour24":a=t.hour12?"hour12":"hour24");let l=g3[a];if(typeof l=="object"&&(l=l[s]),l)return{literal:!1,val:l}}i(m3,"tokenForPart");function p3(e){return[`^${e.map(t=>t.regex).reduce((t,n)=>`${t}(${n.source})`,"")}$`,e]}i(p3,"buildRegex");function b3(e,r,t){const n=e.match(r);if(n){const o={};let s=1;for(const a in t)if(_s(t,a)){const l=t[a],u=l.groups?l.groups+1:1;!l.literal&&l.token&&(o[l.token.val[0]]=l.deser(n.slice(s,s+u))),s+=u}return[n,o]}else return[n,{}]}i(b3,"match$1");function v3(e){const r=i(s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},"toField");let t=null,n;return ae(e.z)||(t=xo.create(e.z)),ae(e.Z)||(t||(t=new xt(e.Z)),n=e.Z),ae(e.q)||(e.M=(e.q-1)*3+1),ae(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),ae(e.u)||(e.S=Rh(e.u)),[Object.keys(e).reduce((s,a)=>{const l=r(a);return l&&(s[l]=e[a]),s},{}),t,n]}i(v3,"dateTimeFromMatches");let rf=null;function y3(){return rf||(rf=le.fromMillis(1555555555555)),rf}i(y3,"getDummyDateTime");function w3(e,r){if(e.literal)return e;const t=vt.macroTokenToFormatOpts(e.val),n=Wy(t,r);return n==null||n.includes(void 0)?e:n}i(w3,"maybeExpandMacroToken");function zy(e,r){return Array.prototype.concat(...e.map(t=>w3(t,r)))}i(zy,"expandMacroTokens");class Vy{static{i(this,"TokenParser")}constructor(r,t){if(this.locale=r,this.format=t,this.tokens=zy(vt.parseFormat(t),r),this.units=this.tokens.map(n=>h3(n,r)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=p3(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(r){if(this.isValid){const[t,n]=b3(r,this.regex,this.handlers),[o,s,a]=n?v3(n):[null,null,void 0];if(_s(n,"a")&&_s(n,"H"))throw new Es("Can't include meridiem when specifying 24-hour format");return{input:r,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:o,zone:s,specificOffset:a}}else return{input:r,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function qy(e,r,t){return new Vy(e,t).explainFromTokens(r)}i(qy,"explainFromTokens");function $3(e,r,t){const{result:n,zone:o,specificOffset:s,invalidReason:a}=qy(e,r,t);return[n,o,s,a]}i($3,"parseFromTokens");function Wy(e,r){if(!e)return null;const n=vt.create(r,e).dtFormatter(y3()),o=n.formatToParts(),s=n.resolvedOptions();return o.map(a=>m3(a,e,s))}i(Wy,"formatOptsToTokens");const tf="Invalid DateTime",wp=864e13;function qa(e){return new Fn("unsupported zone",`the zone "${e.name}" is not supported`)}i(qa,"unsupportedZone");function nf(e){return e.weekData===null&&(e.weekData=nc(e.c)),e.weekData}i(nf,"possiblyCachedWeekData");function of(e){return e.localWeekData===null&&(e.localWeekData=nc(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}i(of,"possiblyCachedLocalWeekData");function $i(e,r){const t={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new le({...t,...r,old:t})}i($i,"clone$2");function Ky(e,r,t){let n=e-r*60*1e3;const o=t.offset(n);if(r===o)return[n,r];n-=(o-r)*60*1e3;const s=t.offset(n);return o===s?[n,o]:[e-Math.min(o,s)*60*1e3,Math.max(o,s)]}i(Ky,"fixOffset");function mu(e,r){e+=r*60*1e3;const t=new Date(e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds(),millisecond:t.getUTCMilliseconds()}}i(mu,"tsToObj");function _u(e,r,t){return Ky(qc(e),r,t)}i(_u,"objToTS");function $p(e,r){const t=e.o,n=e.c.year+Math.trunc(r.years),o=e.c.month+Math.trunc(r.months)+Math.trunc(r.quarters)*3,s={...e.c,year:n,month:o,day:Math.min(e.c.day,oc(n,o))+Math.trunc(r.days)+Math.trunc(r.weeks)*7},a=Ee.fromObject({years:r.years-Math.trunc(r.years),quarters:r.quarters-Math.trunc(r.quarters),months:r.months-Math.trunc(r.months),weeks:r.weeks-Math.trunc(r.weeks),days:r.days-Math.trunc(r.days),hours:r.hours,minutes:r.minutes,seconds:r.seconds,milliseconds:r.milliseconds}).as("milliseconds"),l=qc(s);let[u,d]=Ky(l,t,e.zone);return a!==0&&(u+=a,d=e.zone.offset(u)),{ts:u,o:d}}i($p,"adjustTime");function ps(e,r,t,n,o,s){const{setZone:a,zone:l}=t;if(e&&Object.keys(e).length!==0||r){const u=r||l,d=le.fromObject(e,{...t,zone:u,specificOffset:s});return a?d:d.setZone(l)}else return le.invalid(new Fn("unparsable",`the input "${o}" can't be parsed as ${n}`))}i(ps,"parseDataToDateTime");function pu(e,r,t=!0){return e.isValid?vt.create(je.create("en-US"),{allowZ:t,forceSimple:!0}).formatDateTimeFromString(e,r):null}i(pu,"toTechFormat");function sf(e,r,t){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=Ar(e.c.year,n?6:4),t==="year")return o;if(r){if(o+="-",o+=Ar(e.c.month),t==="month")return o;o+="-"}else if(o+=Ar(e.c.month),t==="month")return o;return o+=Ar(e.c.day),o}i(sf,"toISODate");function kp(e,r,t,n,o,s,a){let l=!t||e.c.millisecond!==0||e.c.second!==0,u="";switch(a){case"day":case"month":case"year":break;default:if(u+=Ar(e.c.hour),a==="hour")break;if(r){if(u+=":",u+=Ar(e.c.minute),a==="minute")break;l&&(u+=":",u+=Ar(e.c.second))}else{if(u+=Ar(e.c.minute),a==="minute")break;l&&(u+=Ar(e.c.second))}if(a==="second")break;l&&(!n||e.c.millisecond!==0)&&(u+=".",u+=Ar(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!s?u+="Z":e.o<0?(u+="-",u+=Ar(Math.trunc(-e.o/60)),u+=":",u+=Ar(Math.trunc(-e.o%60))):(u+="+",u+=Ar(Math.trunc(e.o/60)),u+=":",u+=Ar(Math.trunc(e.o%60)))),s&&(u+="["+e.zone.ianaName+"]"),u}i(kp,"toISOTime");const Gy={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},k3={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},x3={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Uu=["year","month","day","hour","minute","second","millisecond"],D3=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],C3=["year","ordinal","hour","minute","second","millisecond"];function zu(e){const r={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!r)throw new Gv(e);return r}i(zu,"normalizeUnit");function xp(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return zu(e)}}i(xp,"normalizeUnitWithLocalWeeks");function E3(e){if(Wa===void 0&&(Wa=fr.now()),e.type!=="iana")return e.offset(Wa);const r=e.name;let t=L0.get(r);return t===void 0&&(t=e.offset(Wa),L0.set(r,t)),t}i(E3,"guessOffsetForZone");function Dp(e,r){const t=zo(r.zone,fr.defaultZone);if(!t.isValid)return le.invalid(qa(t));const n=je.fromObject(r);let o,s;if(ae(e.year))o=fr.now();else{for(const u of Uu)ae(e[u])&&(e[u]=Gy[u]);const a=yy(e)||wy(e);if(a)return le.invalid(a);const l=E3(t);[o,s]=_u(e,l,t)}return new le({ts:o,zone:t,loc:n,o:s})}i(Dp,"quickDT");function Cp(e,r,t){const n=ae(t.round)?!0:t.round,o=ae(t.rounding)?"trunc":t.rounding,s=i((l,u)=>(l=Lh(l,n||t.calendary?0:2,t.calendary?"round":o),r.loc.clone(t).relFormatter(t).format(l,u)),"format"),a=i(l=>t.calendary?r.hasSame(e,l)?0:r.startOf(l).diff(e.startOf(l),l).get(l):r.diff(e,l).get(l),"differ");if(t.unit)return s(a(t.unit),t.unit);for(const l of t.units){const u=a(l);if(Math.abs(u)>=1)return s(u,l)}return s(e>r?-0:0,t.units[t.units.length-1])}i(Cp,"diffRelative");function Ep(e){let r={},t;return e.length>0&&typeof e[e.length-1]=="object"?(r=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[r,t]}i(Ep,"lastOpts");let Wa;const L0=new Map;class le{static{i(this,"DateTime")}constructor(r){const t=r.zone||fr.defaultZone;let n=r.invalid||(Number.isNaN(r.ts)?new Fn("invalid input"):null)||(t.isValid?null:qa(t));this.ts=ae(r.ts)?fr.now():r.ts;let o=null,s=null;if(!n)if(r.old&&r.old.ts===this.ts&&r.old.zone.equals(t))[o,s]=[r.old.c,r.old.o];else{const l=Go(r.o)&&!r.old?r.o:t.offset(this.ts);o=mu(this.ts,l),n=Number.isNaN(o.year)?new Fn("invalid input"):null,o=n?null:o,s=n?null:l}this._zone=t,this.loc=r.loc||je.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=s,this.isLuxonDateTime=!0}static now(){return new le({})}static local(){const[r,t]=Ep(arguments),[n,o,s,a,l,u,d]=t;return Dp({year:n,month:o,day:s,hour:a,minute:l,second:u,millisecond:d},r)}static utc(){const[r,t]=Ep(arguments),[n,o,s,a,l,u,d]=t;return r.zone=xt.utcInstance,Dp({year:n,month:o,day:s,hour:a,minute:l,second:u,millisecond:d},r)}static fromJSDate(r,t={}){const n=o4(r)?r.valueOf():NaN;if(Number.isNaN(n))return le.invalid("invalid input");const o=zo(t.zone,fr.defaultZone);return o.isValid?new le({ts:n,zone:o,loc:je.fromObject(t)}):le.invalid(qa(o))}static fromMillis(r,t={}){if(Go(r))return r<-wp||r>wp?le.invalid("Timestamp out of range"):new le({ts:r,zone:zo(t.zone,fr.defaultZone),loc:je.fromObject(t)});throw new pt(`fromMillis requires a numerical input, but received a ${typeof r} with value ${r}`)}static fromSeconds(r,t={}){if(Go(r))return new le({ts:r*1e3,zone:zo(t.zone,fr.defaultZone),loc:je.fromObject(t)});throw new pt("fromSeconds requires a numerical input")}static fromObject(r,t={}){r=r||{};const n=zo(t.zone,fr.defaultZone);if(!n.isValid)return le.invalid(qa(n));const o=je.fromObject(t),s=ic(r,xp),{minDaysInFirstWeek:a,startOfWeek:l}=up(s,o),u=fr.now(),d=ae(t.specificOffset)?n.offset(u):t.specificOffset,f=!ae(s.ordinal),h=!ae(s.year),g=!ae(s.month)||!ae(s.day),m=h||g,p=s.weekYear||s.weekNumber;if((m||f)&&p)throw new Es("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(g&&f)throw new Es("Can't mix ordinal dates with month/day");const v=p||s.weekday&&!m;let w,k,D=mu(u,d);v?(w=D3,k=k3,D=nc(D,a,l)):f?(w=C3,k=x3,D=ef(D)):(w=Uu,k=Gy);let A=!1;for(const pe of w){const we=s[pe];ae(we)?A?s[pe]=k[pe]:s[pe]=D[pe]:A=!0}const I=v?r4(s,a,l):f?t4(s):yy(s),L=I||wy(s);if(L)return le.invalid(L);const Y=v?ap(s,a,l):f?lp(s):s,[re,te]=_u(Y,d,n),X=new le({ts:re,zone:n,o:te,loc:o});return s.weekday&&m&&r.weekday!==X.weekday?le.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${X.toISO()}`):X.isValid?X:le.invalid(X.invalid)}static fromISO(r,t={}){const[n,o]=G4(r);return ps(n,o,t,"ISO 8601",r)}static fromRFC2822(r,t={}){const[n,o]=H4(r);return ps(n,o,t,"RFC 2822",r)}static fromHTTP(r,t={}){const[n,o]=Z4(r);return ps(n,o,t,"HTTP",t)}static fromFormat(r,t,n={}){if(ae(r)||ae(t))throw new pt("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:s=null}=n,a=je.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0}),[l,u,d,f]=$3(a,r,t);return f?le.invalid(f):ps(l,u,n,`format ${t}`,r,d)}static fromString(r,t,n={}){return le.fromFormat(r,t,n)}static fromSQL(r,t={}){const[n,o]=t3(r);return ps(n,o,t,"SQL",r)}static invalid(r,t=null){if(!r)throw new pt("need to specify a reason the DateTime is invalid");const n=r instanceof Fn?r:new Fn(r,t);if(fr.throwOnInvalid)throw new Mx(n);return new le({invalid:n})}static isDateTime(r){return r&&r.isLuxonDateTime||!1}static parseFormatForOpts(r,t={}){const n=Wy(r,je.fromObject(t));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(r,t={}){return zy(vt.parseFormat(r),je.fromObject(t)).map(o=>o.val).join("")}static resetCache(){Wa=void 0,L0.clear()}get(r){return this[r]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?nf(this).weekYear:NaN}get weekNumber(){return this.isValid?nf(this).weekNumber:NaN}get weekday(){return this.isValid?nf(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?of(this).weekday:NaN}get localWeekNumber(){return this.isValid?of(this).weekNumber:NaN}get localWeekYear(){return this.isValid?of(this).weekYear:NaN}get ordinal(){return this.isValid?ef(this.c).ordinal:NaN}get monthShort(){return this.isValid?hu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?hu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?hu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?hu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const r=864e5,t=6e4,n=qc(this.c),o=this.zone.offset(n-r),s=this.zone.offset(n+r),a=this.zone.offset(n-o*t),l=this.zone.offset(n-s*t);if(a===l)return[this];const u=n-a*t,d=n-l*t,f=mu(u,a),h=mu(d,l);return f.hour===h.hour&&f.minute===h.minute&&f.second===h.second&&f.millisecond===h.millisecond?[$i(this,{ts:u}),$i(this,{ts:d})]:[this]}get isInLeapYear(){return Rl(this.year)}get daysInMonth(){return oc(this.year,this.month)}get daysInYear(){return this.isValid?Ns(this.year):NaN}get weeksInWeekYear(){return this.isValid?cl(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?cl(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(r={}){const{locale:t,numberingSystem:n,calendar:o}=vt.create(this.loc.clone(r),r).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:o}}toUTC(r=0,t={}){return this.setZone(xt.instance(r),t)}toLocal(){return this.setZone(fr.defaultZone)}setZone(r,{keepLocalTime:t=!1,keepCalendarTime:n=!1}={}){if(r=zo(r,fr.defaultZone),r.equals(this.zone))return this;if(r.isValid){let o=this.ts;if(t||n){const s=r.offset(this.ts),a=this.toObject();[o]=_u(a,s,r)}return $i(this,{ts:o,zone:r})}else return le.invalid(qa(r))}reconfigure({locale:r,numberingSystem:t,outputCalendar:n}={}){const o=this.loc.clone({locale:r,numberingSystem:t,outputCalendar:n});return $i(this,{loc:o})}setLocale(r){return this.reconfigure({locale:r})}set(r){if(!this.isValid)return this;const t=ic(r,xp),{minDaysInFirstWeek:n,startOfWeek:o}=up(t,this.loc),s=!ae(t.weekYear)||!ae(t.weekNumber)||!ae(t.weekday),a=!ae(t.ordinal),l=!ae(t.year),u=!ae(t.month)||!ae(t.day),d=l||u,f=t.weekYear||t.weekNumber;if((d||a)&&f)throw new Es("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&a)throw new Es("Can't mix ordinal dates with month/day");let h;s?h=ap({...nc(this.c,n,o),...t},n,o):ae(t.ordinal)?(h={...this.toObject(),...t},ae(t.day)&&(h.day=Math.min(oc(h.year,h.month),h.day))):h=lp({...ef(this.c),...t});const[g,m]=_u(h,this.o,this.zone);return $i(this,{ts:g,o:m})}plus(r){if(!this.isValid)return this;const t=Ee.fromDurationLike(r);return $i(this,$p(this,t))}minus(r){if(!this.isValid)return this;const t=Ee.fromDurationLike(r).negate();return $i(this,$p(this,t))}startOf(r,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;const n={},o=Ee.normalizeUnit(r);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(t){const s=this.loc.getStartOfWeek(),{weekday:a}=this;a<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(o==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(r,t){return this.isValid?this.plus({[r]:1}).startOf(r,t).minus(1):this}toFormat(r,t={}){return this.isValid?vt.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,r):tf}toLocaleString(r=tc,t={}){return this.isValid?vt.create(this.loc.clone(t),r).formatDateTime(this):tf}toLocaleParts(r={}){return this.isValid?vt.create(this.loc.clone(r),r).formatDateTimeParts(this):[]}toISO({format:r="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:s=!1,precision:a="milliseconds"}={}){if(!this.isValid)return null;a=zu(a);const l=r==="extended";let u=sf(this,l,a);return Uu.indexOf(a)>=3&&(u+="T"),u+=kp(this,l,t,n,o,s,a),u}toISODate({format:r="extended",precision:t="day"}={}){return this.isValid?sf(this,r==="extended",zu(t)):null}toISOWeekDate(){return pu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:r=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:s=!1,format:a="extended",precision:l="milliseconds"}={}){return this.isValid?(l=zu(l),(o&&Uu.indexOf(l)>=3?"T":"")+kp(this,a==="extended",t,r,n,s,l)):null}toRFC2822(){return pu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return pu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?sf(this,!0):null}toSQLTime({includeOffset:r=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(t||r)&&(n&&(o+=" "),t?o+="z":r&&(o+="ZZ")),pu(this,o,!0)}toSQL(r={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(r)}`:null}toString(){return this.isValid?this.toISO():tf}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(r={}){if(!this.isValid)return{};const t={...this.c};return r.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(r,t="milliseconds",n={}){if(!this.isValid||!r.isValid)return Ee.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=i4(t).map(Ee.normalizeUnit),a=r.valueOf()>this.valueOf(),l=a?this:r,u=a?r:this,d=l3(l,u,s,o);return a?d.negate():d}diffNow(r="milliseconds",t={}){return this.diff(le.now(),r,t)}until(r){return this.isValid?yr.fromDateTimes(this,r):this}hasSame(r,t,n){if(!this.isValid)return!1;const o=r.valueOf(),s=this.setZone(r.zone,{keepLocalTime:!0});return s.startOf(t,n)<=o&&o<=s.endOf(t,n)}equals(r){return this.isValid&&r.isValid&&this.valueOf()===r.valueOf()&&this.zone.equals(r.zone)&&this.loc.equals(r.loc)}toRelative(r={}){if(!this.isValid)return null;const t=r.base||le.fromObject({},{zone:this.zone}),n=r.padding?this<t?-r.padding:r.padding:0;let o=["years","months","days","hours","minutes","seconds"],s=r.unit;return Array.isArray(r.unit)&&(o=r.unit,s=void 0),Cp(t,this.plus(n),{...r,numeric:"always",units:o,unit:s})}toRelativeCalendar(r={}){return this.isValid?Cp(r.base||le.fromObject({},{zone:this.zone}),this,{...r,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...r){if(!r.every(le.isDateTime))throw new pt("min requires all arguments be DateTimes");return cp(r,t=>t.valueOf(),Math.min)}static max(...r){if(!r.every(le.isDateTime))throw new pt("max requires all arguments be DateTimes");return cp(r,t=>t.valueOf(),Math.max)}static fromFormatExplain(r,t,n={}){const{locale:o=null,numberingSystem:s=null}=n,a=je.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0});return qy(a,r,t)}static fromStringExplain(r,t,n={}){return le.fromFormatExplain(r,t,n)}static buildFormatParser(r,t={}){const{locale:n=null,numberingSystem:o=null}=t,s=je.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new Vy(s,r)}static fromFormatParser(r,t,n={}){if(ae(r)||ae(t))throw new pt("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:s=null}=n,a=je.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0});if(!a.equals(t.locale))throw new pt(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${t.locale}`);const{result:l,zone:u,specificOffset:d,invalidReason:f}=t.explainFromTokens(r);return f?le.invalid(f):ps(l,u,n,`format ${t.format}`,r,d)}static get DATE_SHORT(){return tc}static get DATE_MED(){return Hv}static get DATE_MED_WITH_WEEKDAY(){return Nx}static get DATE_FULL(){return Zv}static get DATE_HUGE(){return Jv}static get TIME_SIMPLE(){return Yv}static get TIME_WITH_SECONDS(){return Xv}static get TIME_WITH_SHORT_OFFSET(){return Qv}static get TIME_WITH_LONG_OFFSET(){return ey}static get TIME_24_SIMPLE(){return ry}static get TIME_24_WITH_SECONDS(){return ty}static get TIME_24_WITH_SHORT_OFFSET(){return ny}static get TIME_24_WITH_LONG_OFFSET(){return oy}static get DATETIME_SHORT(){return iy}static get DATETIME_SHORT_WITH_SECONDS(){return sy}static get DATETIME_MED(){return ay}static get DATETIME_MED_WITH_SECONDS(){return ly}static get DATETIME_MED_WITH_WEEKDAY(){return Px}static get DATETIME_FULL(){return uy}static get DATETIME_FULL_WITH_SECONDS(){return cy}static get DATETIME_HUGE(){return dy}static get DATETIME_HUGE_WITH_SECONDS(){return fy}}function Fa(e){if(le.isDateTime(e))return e;if(e&&e.valueOf&&Go(e.valueOf()))return le.fromJSDate(e);if(e&&typeof e=="object")return le.fromObject(e);throw new pt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}i(Fa,"friendlyDateTime");Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const Ap={min:0,max:23},Sp={min:0,max:59},Mp={min:0,max:59},Fp={min:0,max:999};var ue;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(ue||(ue={}));const A3=[ue.Milliseconds,ue.Seconds,ue.Minutes,ue.Hours,ue.Days,ue.Weeks,ue.Months,ue.Years];ue.Milliseconds+"",ue.Seconds+"",ue.Minutes+"",ue.Hours+"",ue.Days+"",ue.Weeks+"",ue.Months+"",ue.Years+"";ue.Years+"",J.Year,ue.Months+"",J.Month,ue.Weeks+"",J.Week,ue.Days+"",J.Day,ue.Hours+"",J.Hour,ue.Minutes+"",J.Minute,ue.Seconds+"",J.Second,ue.Milliseconds+"",J.Millisecond;J.Year+"",ue.Years,J.Month+"",ue.Months,J.Week+"",ue.Weeks,J.Day+"",ue.Days,J.Hour+"",ue.Hours,J.Minute+"",ue.Minutes,J.Second+"",ue.Seconds,J.Millisecond+"",ue.Milliseconds;function S3(e){return A3.filter(r=>e[r])}i(S3,"flattenUnitsSmallestToLargest");function j0(e,{decimalCount:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(j0,"round$1");function M3(e){return j0(Math.max(e-.4,0),{decimalCount:0})}i(M3,"roundNarrow");function Tp(e){return e===0?0:Math.sign(e)}i(Tp,"getSign");function Us(e,r,t={}){const n={},o={decimalCount:t.decimalCount==null?void 0:Math.round(Math.abs(t.decimalCount))},s=Object.values(e).includes(1/0),a=Object.values(e).includes(-1/0),l=S3(r).reverse();if(s||a)return l.forEach(f=>{n[f]=s?1/0:-1/0}),n;let u=Ee.fromObject(e).as(ue.Milliseconds);const d=Tp(u);return l.forEach((f,h)=>{const g=h===l.length-1;if(f===ue.Milliseconds)n.milliseconds=j0(u,o);else{const m=Ee.fromObject({milliseconds:u}).as(f),p=Math.sign(m),v=Math.abs(m),w=g?j0(v,o):Math.floor(o.decimalCount==null?v:M3(v)),k=w===0?0:w*p;n[f]=k,u-=Ee.fromObject({[f]:k}).as(ue.Milliseconds),d!==Tp(u)&&(u=0)}}),n}i(Us,"convertDuration");var bt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(bt||(bt={}));bt.Sunday+"",bt.Monday+"",bt.Tuesday+"",bt.Wednesday+"",bt.Thursday+"",bt.Friday+"",bt.Saturday+"";bt.Sunday,bt.Monday,bt.Tuesday,bt.Wednesday,bt.Thursday,bt.Friday,bt.Saturday;var Pt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Pt||(Pt={}));Pt.January,Pt.February,Pt.March,Pt.April,Pt.May,Pt.June,Pt.July,Pt.August,Pt.September,Pt.October,Pt.November,Pt.December;const Np={min:1,max:12},Pp={min:1,max:31};function Vi(e){const r=new rc,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:Us(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{r.resolve()},n<=0?0:n),r.promise}i(Vi,"wait");function Hy(...e){const r=e.join(""),t=Uc(Array.from(r));return Array.from(t).join("")}i(Hy,"removeDuplicateCharacters");function Zy(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}i(Zy,"escapeStringForRegExp");function Jy(e,r){const t=Hy([typeof e=="string"?"":e.flags,r].join("").toLowerCase());return Yy(e,t)}i(Jy,"addRegExpFlags");function Yy(e,r){const t=Hy(r);return typeof e=="string"?new RegExp(Zy(e),t):new RegExp(e.source,t)}i(Yy,"setRegExpFlags");function Xy(e,{caseSensitive:r}){const n="".replaceAll("i","");return Yy(e,n)}i(Xy,"setRegExpCaseSensitivity");function zh(e,r=1){return e.split(`
`).map(t=>["    ".repeat(Math.round(r)),t].join("")).join(`
`)}i(zh,"indent");function Qy(e,r){return r?typeof r=="string"?!!new RegExp(Zy(r),"i").exec(e):!!Jy(r,"i").exec(e):!1}i(Qy,"match");class $ extends Error{static{i(this,"AssertionError")}name="AssertionError";constructor(r,t){super(Xi(t,r)||"Assertion failed.")}}const Ip={interval:{milliseconds:100},timeout:{seconds:10}},af=Symbol("not set");async function F3(e,r,t){const{callback:n,extraAssertionArgs:o,failureMessage:s,options:a}=T3(r),l=Us(a.timeout,{milliseconds:!0}).milliseconds,u=Us(a.interval,{milliseconds:!0});let d=af,f;async function h(){try{d=t?n():await n(),e(d,...o)}catch(m){d=af,f=kr(m)}}i(h,"checkCondition");const g=Date.now();for(;d===af;)if(await h(),await Vi(u),Date.now()-g>=l){const p=`${s?`${s}: `:""}Timeout of '${l}' milliseconds exceeded waiting for callback value to match expectations`;throw sa(f,p)}return d}i(F3,"executeWaitUntil");function j(e,r=!1){return((...t)=>F3(e,t,r))}i(j,"createWaitUntil");function T3(e){const r={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(t=>{if(r.callback)r.extraAssertionArgs.push(t);else if(typeof t=="function")r.callback=t;else if(typeof t=="string")r.failureMessage=t;else if(typeof t=="object")r.options=t;else{if(t===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(t)}`)}}),!r.callback)throw new TypeError("Missing waitUntil callback.");return{callback:r.callback,options:e2(r.options),extraAssertionArgs:r.extraAssertionArgs.toReversed(),failureMessage:r.failureMessage}}i(T3,"parseWaitUntilArgs");function e2(e){return{interval:e?.interval||Ip.interval,timeout:e?.timeout||Ip.timeout}}i(e2,"parseWaitUntilOptions");const Ta={isFalse(e,r){if(e!==!1)throw new $(`'${x(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new $(`'${x(e)}' is not falsy.`,r)},isTrue(e,r){if(e!==!0)throw new $(`'${x(e)}' is not true.`,r)},isTruthy(e,r){if(!e)throw new $(`'${x(e)}' is not truthy.`,r)}},r2={assert:Ta,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,r){if(e===!1)return e;throw new $(`'${x(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new $(`'${x(e)}' is not falsy.`,r);return e},isTrue(e,r){if(e===!0)return e;throw new $(`'${x(e)}' is not true.`,r)},isTruthy(e,r){if(e)return e;throw new $(`'${x(e)}' is not truthy.`,r)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:j(Ta.isFalse),isFalsy:j(Ta.isFalsy),isTrue:j(Ta.isTrue),isTruthy:j(Ta.isTruthy)}};function N3(e,r,t){if(typeof e=="string"){if(!e.endsWith(r))throw new $(`${x(e)} does not end with ${x(r)}}`,t)}else if(e[e.length-1]!==r)throw new $(`${x(e)} does not end with ${x(r)}}`,t)}i(N3,"endsWith");function P3(e,r,t){if(typeof e=="string"){if(e.endsWith(r))throw new $(`${x(e)} ends with ${x(r)}}`,t)}else if(e[e.length-1]===r)throw new $(`${x(e)} ends with ${x(r)}}`,t)}i(P3,"endsWithout");function I3(e,r,t){if(typeof e=="string"){if(!e.startsWith(r))throw new $(`${x(e)} does not start with ${x(r)}}`,t)}else if(e[0]!==r)throw new $(`${x(e)} does not start with ${x(r)}}`,t)}i(I3,"startsWith");function O3(e,r,t){if(typeof e=="string"){if(e.startsWith(r))throw new $(`${x(e)} starts with ${x(r)}}`,t)}else if(e[0]===r)throw new $(`${x(e)} starts with ${x(r)}}`,t)}i(O3,"startsWithout");const Na={endsWith:N3,endsWithout:P3,startsWith:I3,startsWithout:O3},t2={assert:Na,check:{endsWith:i(((e,r)=>typeof e=="string"?e.endsWith(r):e[e.length-1]===r),"endsWith"),endsWithout:i(((e,r)=>typeof e=="string"?!e.endsWith(r):e[e.length-1]!==r),"endsWithout"),startsWith:i(((e,r)=>typeof e=="string"?e.startsWith(r):e[0]===r),"startsWith"),startsWithout:i(((e,r)=>typeof e=="string"?!e.startsWith(r):e[0]!==r),"startsWithout")},assertWrap:{endsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.endsWith(r))throw new $(`${x(e)} does not end with ${x(r)}}`,t)}else if(e[e.length-1]!==r)throw new $(`${x(e)} does not end with ${x(r)}}`,t);return e}),"endsWith"),endsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.endsWith(r))throw new $(`${x(e)} ends with ${x(r)}}`,t)}else if(e[e.length-1]===r)throw new $(`${x(e)} ends with ${x(r)}}`,t);return e}),"endsWithout"),startsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.startsWith(r))throw new $(`${x(e)} does not start with ${x(r)}}`,t)}else if(e[0]!==r)throw new $(`${x(e)} does not start with ${x(r)}}`,t);return e}),"startsWith"),startsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.startsWith(r))throw new $(`${x(e)} starts with ${x(r)}}`,t)}else if(e[0]===r)throw new $(`${x(e)} starts with ${x(r)}}`,t);return e}),"startsWithout")},checkWrap:{endsWith:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?e:void 0;if(e[e.length-1]===r)return e}),"endsWith"),endsWithout:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?void 0:e;if(e[e.length-1]!==r)return e}),"endsWithout"),startsWith:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?e:void 0;if(e[0]===r)return e}),"startsWith"),startsWithout:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?void 0:e;if(e[0]!==r)return e}),"startsWithout")},waitUntil:{endsWith:j(Na.endsWith),endsWithout:j(Na.endsWithout),startsWith:j(Na.startsWith),startsWithout:j(Na.startsWithout)}};function B3(e,r,t){const n=Kt(r);if(!n.includes(e))throw new $(`${String(e)} is not an enum value in '${n.join(",")}'.`,t)}i(B3,"assertIsEnumValue");function lo(e,r){return Kt(r).includes(e)}i(lo,"isEnumValue");const lf={isEnumValue(e,r,t){B3(e,r,t)},isNotEnumValue(e,r,t){const n=Kt(r);if(n.includes(e))throw new $(`${String(e)} is an enum value in '${n.join(",")}'.`,t)}},n2={assert:lf,check:{isEnumValue:lo,isNotEnumValue(e,r){return!Kt(r).includes(e)}},assertWrap:{isEnumValue(e,r,t){const n=Kt(r);if(!n.includes(e))throw new $(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e},isNotEnumValue(e,r,t){const n=Kt(r);if(n.includes(e))throw new $(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e}},checkWrap:{isEnumValue(e,r){if(Kt(r).includes(e))return e},isNotEnumValue(e,r){if(!Kt(r).includes(e))return e}},waitUntil:{isEnumValue:j(lf.isEnumValue),isNotEnumValue:j(lf.isNotEnumValue)}},uf={entriesEqual(e,r,t){if(!e||typeof e!="object")throw new $(`${x(e)} is not an object.`,t);if(!r||typeof r!="object")throw new $(`${x(r)} is not an object.`,t);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const s=e[o],a=r[o];if(s!==a)throw new $(`Entries are not equal at key '${String(o)}'.`,t)})},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(s=>{const a=e[s],l=r[s];return a!==l}))throw new $("Entries are equal.",t)}},o2={assert:uf,check:{entriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(n=>{const o=e[n],s=r[n];return o===s})},notEntriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(n=>{const o=e[n],s=r[n];return o!==s})}},assertWrap:{entriesEqual(e,r,t){if(!e||typeof e!="object")throw new $(`${x(e)} is not an object.`,t);if(!r||typeof r!="object")throw new $(`${x(r)} is not an object.`,t);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const s=e[o],a=r[o];if(s!==a)throw new $(`Entries are not equal at key '${String(o)}'.`,t)}),e},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(s=>{const a=e[s],l=r[s];return a!==l}))return e;throw new $("Entries are equal.",t)}},checkWrap:{entriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(o=>{const s=e[o],a=r[o];return s===a}))return e},notEntriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(o=>{const s=e[o],a=r[o];return s!==a}))return e}},waitUntil:{entriesEqual:j(uf.entriesEqual),notEntriesEqual:j(uf.notEntriesEqual)}};function sc(e,r){return JSON.stringify(e)===JSON.stringify(r)}i(sc,"baseJsonEquals");function dl(e,r){if(!(e===r||sc(e,r))){if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();if(t.length!==n.length)throw new Error("Values are not JSON equal.");if(!sc(t,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{dl(e[s],r[s])}catch(a){throw new Error(`JSON objects are not equal at key '${s}': ${Qr(a)}`)}})}throw new Error("Values are not JSON equal.")}}i(dl,"recursiveAssertJsonEquals");function Ka(e,r){if(e===r||sc(e,r))return!0;if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();return t.length!==n.length||!sc(t,n)?!1:Object.keys(e).every(s=>Ka(e[s],r[s]))}return!1}i(Ka,"recursiveCheckJsonEquals");const cf={jsonEquals(e,r,t){try{dl(e,r)}catch(n){throw new $(Qr(n),t)}},notJsonEquals(e,r,t){try{dl(e,r)}catch{return}throw new $("Values are JSON equal.",t)}},i2={assert:cf,check:{jsonEquals(e,r){return Ka(e,r)},notJsonEquals(e,r){return!Ka(e,r)}},assertWrap:{jsonEquals(e,r,t){try{return dl(e,r),e}catch(n){throw new $(Qr(n),t)}},notJsonEquals(e,r,t){try{dl(e,r)}catch{return e}throw new $("Values are JSON equal.",t)}},checkWrap:{jsonEquals(e,r){if(Ka(e,r))return e},notJsonEquals(e,r){if(!Ka(e,r))return e}},waitUntil:{jsonEquals:j(cf.jsonEquals),notJsonEquals:j(cf.notJsonEquals)}};function Op(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const r=e[Symbol.toStringTag];return typeof r=="string"?r:Object.prototype.toString.call(e).slice(8,-1)}i(Op,"type$1");function s2(){this._key="chai/deep-eql__"+Math.random()+Date.now()}i(s2,"FakeMap");s2.prototype={get:i(function(r){return r[this._key]},"get"),set:i(function(r,t){Object.isExtensible(r)&&Object.defineProperty(r,this._key,{value:t,configurable:!0})},"set")};var a2=typeof WeakMap=="function"?WeakMap:s2;function Bp(e,r,t){if(!t||zs(e)||zs(r))return null;var n=t.get(e);if(n){var o=n.get(r);if(typeof o=="boolean")return o}return null}i(Bp,"memoizeCompare");function bu(e,r,t,n){if(!(!t||zs(e)||zs(r))){var o=t.get(e);o?o.set(r,n):(o=new a2,o.set(r,n),t.set(e,o))}}i(bu,"memoizeSet");function Mn(e,r,t){if(t&&t.comparator)return Rp(e,r,t);var n=l2(e,r);return n!==null?n:Rp(e,r,t)}i(Mn,"deepEqual");function l2(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r?!0:zs(e)||zs(r)?!1:null}i(l2,"simpleEqual");function Rp(e,r,t){t=t||{},t.memoize=t.memoize===!1?!1:t.memoize||new a2;var n=t&&t.comparator,o=Bp(e,r,t.memoize);if(o!==null)return o;var s=Bp(r,e,t.memoize);if(s!==null)return s;if(n){var a=n(e,r);if(a===!1||a===!0)return bu(e,r,t.memoize,a),a;var l=l2(e,r);if(l!==null)return l}var u=Op(e);if(u!==Op(r))return bu(e,r,t.memoize,!1),!1;bu(e,r,t.memoize,!0);var d=R3(e,r,u,t);return bu(e,r,t.memoize,d),d}i(Rp,"extensiveDeepEqual");function R3(e,r,t,n){switch(t){case"String":case"Number":case"Boolean":case"Date":return Mn(e.valueOf(),r.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===r;case"Error":return u2(e,r,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ii(e,r,n);case"RegExp":return L3(e,r);case"Generator":return j3(e,r,n);case"DataView":return Ii(new Uint8Array(e.buffer),new Uint8Array(r.buffer),n);case"ArrayBuffer":return Ii(new Uint8Array(e),new Uint8Array(r),n);case"Set":return Lp(e,r,n);case"Map":return Lp(e,r,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(r);case"Temporal.Duration":return e.total("nanoseconds")===r.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===r.toString();default:return U3(e,r,n)}}i(R3,"extensiveDeepEqualByType");function L3(e,r){return e.toString()===r.toString()}i(L3,"regexpEqual");function Lp(e,r,t){try{if(e.size!==r.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(i(function(a,l){n.push([a,l])},"gatherEntries")),r.forEach(i(function(a,l){o.push([a,l])},"gatherEntries")),Ii(n.sort(),o.sort(),t)}i(Lp,"entriesEqual");function Ii(e,r,t){var n=e.length;if(n!==r.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(Mn(e[o],r[o],t)===!1)return!1;return!0}i(Ii,"iterableEqual");function j3(e,r,t){return Ii(_0(e),_0(r),t)}i(j3,"generatorEqual");function _3(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}i(_3,"hasIteratorFunction");function jp(e){if(_3(e))try{return _0(e[Symbol.iterator]())}catch{return[]}return[]}i(jp,"getIteratorEntries");function _0(e){for(var r=e.next(),t=[r.value];r.done===!1;)r=e.next(),t.push(r.value);return t}i(_0,"getGeneratorEntries");function _p(e){var r=[];for(var t in e)r.push(t);return r}i(_p,"getEnumerableKeys");function Up(e){for(var r=[],t=Object.getOwnPropertySymbols(e),n=0;n<t.length;n+=1){var o=t[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&r.push(o)}return r}i(Up,"getEnumerableSymbols");function u2(e,r,t,n){var o=t.length;if(o===0)return!0;for(var s=0;s<o;s+=1)if(Mn(e[t[s]],r[t[s]],n)===!1)return!1;return!0}i(u2,"keysEqual");function U3(e,r,t){var n=_p(e),o=_p(r),s=Up(e),a=Up(r);if(n=n.concat(s),o=o.concat(a),n.length&&n.length===o.length)return Ii(zp(n).sort(),zp(o).sort())===!1?!1:u2(e,r,n,t);var l=jp(e),u=jp(r);return l.length&&l.length===u.length?(l.sort(),u.sort(),Ii(l,u,t)):n.length===0&&l.length===0&&o.length===0&&u.length===0}i(U3,"objectEqual");function zs(e){return e===null||typeof e!="object"}i(zs,"isPrimitive");function zp(e){return e.map(i(function(t){return typeof t=="symbol"?t.toString():t},"mapSymbol"))}i(zp,"mapSymbols");class Is extends ${static{i(this,"DiffError")}name="DiffError";constructor(r,t,n,o){const s=Dx(t,n);super([r,zh(s)].join(`
`),o)}}function _o(e,r){return typeof e=="function"&&typeof r=="function"?!0:null}i(_o,"customComparator");const Lo={strictEquals(e,r,t){if(e!==r)throw typeof e=="object"&&e||typeof r=="object"&&r?new $(`Strict reference equality failed for 

${x(r)}

.`,t):new Is("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new $(`Strict reference INequality failed for 

${x(r)}

.`,t):new $(`

${x(e)}

strictly equals

${x(r)}

`,t)},looseEquals(e,r,t){if(e!=r)throw typeof e=="object"&&e||typeof r=="object"&&r?new $(`Loose reference equality failed for 

${x(r)}

.`,t):new Is("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new $(`Loose reference INequality failed for 

${x(r)}

.`,t):new $(`

${x(e)}

loosely equals

${x(r)}

`,t)},deepEquals(e,r,t){if(!Mn(e,r,{comparator:_o}))throw new Is("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Mn(e,r,{comparator:_o}))throw new $(`

${x(e)}

deeply equals

${x(r)}

`,t)}},c2=Lo.deepEquals,d2={assert:Lo,check:{strictEquals(e,r){return e===r},notStrictEquals(e,r){return e!==r},looseEquals(e,r){return e==r},notLooseEquals(e,r){return e!=r},deepEquals(e,r){return Mn(e,r,{comparator:_o})},notDeepEquals(e,r){return!Mn(e,r,{comparator:_o})}},assertWrap:{strictEquals(e,r,t){if(e===r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new $(`Strict reference equality failed for 

${x(r)}

.`,t):new Is("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new $(`Strict reference INequality failed for 

${x(r)}

.`,t):new $(`

${x(e)}

strictly equals

${x(r)}

`,t);return e},looseEquals(e,r,t){if(e==r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new $(`Loose reference equality failed for 

${x(r)}

.`,t):new Is("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new $(`Loose reference INequality failed for 

${x(r)}

.`,t):new $(`

${x(e)}

loosely equals

${x(r)}

`,t);return e},deepEquals(e,r,t){if(Mn(e,r,{comparator:_o}))return e;throw new Is("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Mn(e,r,{comparator:_o}))throw new $(`

${x(e)}

deeply equals

${x(r)}

`,t);return e}},checkWrap:{strictEquals(e,r){if(e===r)return e},notStrictEquals(e,r){if(e!==r)return e},looseEquals(e,r){if(e==r)return e},notLooseEquals(e,r){if(e!==r)return e},deepEquals(e,r){if(Mn(e,r,{comparator:_o}))return e},notDeepEquals(e,r){if(!Mn(e,r,{comparator:_o}))return e}},waitUntil:{strictEquals:j(Lo.strictEquals),notStrictEquals:j(Lo.notStrictEquals),looseEquals:j(Lo.looseEquals),notLooseEquals:j(Lo.notLooseEquals),deepEquals:j(Lo.deepEquals),notDeepEquals:j(Lo.notDeepEquals)}};function Vt(e,r){if(typeof e=="string")return typeof r=="string"&&e.includes(r);let t=!0;try{t=Reflect.ownKeys(e).map(n=>e[n]).includes(r)}catch{return!1}return t}i(Vt,"hasValue");function hn(e,r){return typeof r=="string"?r.includes(e):Vt(r,e)}i(hn,"isIn");const so={hasValue(e,r,t){if(!Vt(e,r))throw new $(`'${x(e)}' does not have value '${x(r)}'.`,t)},lacksValue(e,r,t){if(Vt(e,r))throw new $(`'${x(e)}' has value '${x(r)}'.`,t)},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=r.filter(s=>!o.includes(s))}catch{throw new $(`'${x(e)}' does not have values '${x(r)}'.`,t)}if(n.length)throw new $(`'${x(e)}' does not have values '${x(n)}'.`,t)},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=r.filter(s=>o.includes(s))}catch{}if(n.length)throw new $(`'${x(e)}' has values '${x(n)}'.`,t)},isIn(e,r,t){if(!hn(e,r))throw new $(`'${x(e)}'

is not in

${x(r)}.`,t)},isNotIn(e,r,t){if(hn(e,r))throw new $(`'${x(e)}'

is in

${x(r)}.`,t)},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new $(`'${x(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new $(`'${x(e)}' is not empty.`,r)},isNotEmpty(e,r){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new $(`'${x(e)}' is not empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new $(`'${x(e)}' is not empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new $(`'${x(e)}' is not empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new $(`'${x(e)}' is not empty.`,r)}}},f2={assert:so,check:{hasValue(e,r){return Vt(e,r)},lacksValue(e,r){return!Vt(e,r)},hasValues(e,r){return r.every(t=>Vt(e,t))},lacksValues(e,r){return r.every(t=>!Vt(e,t))},isIn(e,r){return hn(e,r)},isNotIn(e,r){return!hn(e,r)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,r,t){if(!Vt(e,r))throw new $(`'${x(e)}' does not have value '${x(r)}'.`,t);return e},lacksValue(e,r,t){if(Vt(e,r))throw new $(`'${x(e)}' has value '${x(r)}'.`,t);return e},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=r.filter(s=>!o.includes(s))}catch{throw new $(`'${x(e)}' does not have values '${x(r)}'.`,t)}if(n.length)throw new $(`'${x(e)}' does not have values '${x(n)}'.`,t);return e},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=r.filter(s=>o.includes(s))}catch{}if(n.length)throw new $(`'${x(e)}' has values '${x(n)}'.`,t);return e},isIn(e,r,t){if(!hn(e,r))throw new $(`'${x(e)}'

is not in

${x(r)}.`,t);return e},isNotIn(e,r,t){if(hn(e,r))throw new $(`'${x(e)}'

is in

${x(r)}.`,t);return e},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new $(`'${x(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new $(`'${x(e)}' is not empty.`,r)},isNotEmpty(e,r){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new $(`'${x(e)}' is empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new $(`'${x(e)}' is empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new $(`'${x(e)}' is empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new $(`'${x(e)}' is empty.`,r);return e}},checkWrap:{hasValue(e,r){if(Vt(e,r))return e},lacksValue(e,r){if(!Vt(e,r))return e},hasValues(e,r){if(r.every(t=>Vt(e,t)))return e},lacksValues(e,r){if(!r.every(t=>Vt(e,t)))return e},isIn(e,r){if(hn(e,r))return e},isNotIn(e,r){if(!hn(e,r))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:j(so.hasValue),lacksValue:j(so.lacksValue),hasValues:j(so.hasValues),lacksValues:j(so.lacksValues),isIn:j(so.isIn),isNotIn:j(so.isNotIn),isEmpty:j(so.isEmpty),isNotEmpty:j(so.isNotEmpty)}},df={isHttpStatus(e,r){if(!lo(e,N))throw new $(`${x(e)} is not a valid HTTP status.`,r)},isHttpStatusCategory(e,r,t){if(lo(e,N)){if(!hn(e,ju[r]))throw new $(`${x(e)} is not a '${r}' HTTP status.`,t)}else throw new $(`${x(e)} is not a valid HTTP status.`,t)}},h2={assert:df,check:{isHttpStatus(e){return lo(e,N)},isHttpStatusCategory(e,r){return lo(e,N)&&hn(e,ju[r])}},assertWrap:{isHttpStatus(e,r){if(!lo(e,N))throw new $(`${x(e)} is not a valid HTTP status.`,r);return e},isHttpStatusCategory(e,r,t){if(lo(e,N)){if(!hn(e,ju[r]))throw new $(`${x(e)} is not a '${r}' HTTP status.`,t)}else throw new $(`${x(e)} is not a valid HTTP status.`,t);return e}},checkWrap:{isHttpStatus(e){if(lo(e,N))return e},isHttpStatusCategory(e,r){if(lo(e,N)&&hn(e,ju[r]))return e}},waitUntil:{isHttpStatus:j(df.isHttpStatus),isHttpStatusCategory:j(df.isHttpStatusCategory)}},ff={instanceOf(e,r,t){if(!(e instanceof r))throw new $(`'${x(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new $(`'${x(e)}' is an instance of '${r.name}'`,t)}},g2={assert:ff,check:{instanceOf(e,r){return e instanceof r},notInstanceOf(e,r){return!(e instanceof r)}},assertWrap:{instanceOf(e,r,t){if(e instanceof r)return e;throw new $(`'${x(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new $(`'${x(e)}' is an instance of '${r.name}'`,t);return e}},checkWrap:{instanceOf(e,r){if(e instanceof r)return e},notInstanceOf(e,r){if(!(e instanceof r))return e}},waitUntil:{instanceOf:j(ff.instanceOf),notInstanceOf:j(ff.notInstanceOf)}},z3=[(e,r)=>r in e,(e,r)=>r in e.constructor.prototype];function lr(e,r){return z3.some(t=>{try{return t(e,r)}catch{return!1}})}i(lr,"hasKey");const ki={isKeyOf(e,r,t){if(!lr(r,e))throw new $(`'${String(e)}' is not a key of '${x(r)}'.`,t)},isNotKeyOf(e,r,t){if(lr(r,e))throw new $(`'${String(e)}' is a key of '${x(r)}'.`,t)},hasKey(e,r,t){if(!lr(e,r))throw new $(`'${x(e)}' does not have key '${String(r)}'.`,t)},lacksKey(e,r,t){if(lr(e,r))throw new $(`'${x(e)}' has key '${String(r)}'.`,t)},hasKeys(e,r,t){const n=r.filter(o=>!lr(e,o));if(n.length)throw new $(`'${x(e)}' does not have keys '${n.join(",")}'.`,t)},lacksKeys(e,r,t){const n=r.filter(o=>lr(e,o));if(n.length)throw new $(`'${x(e)}' does not lack keys '${n.join(",")}'.`,t)}},m2={assert:ki,check:{isKeyOf(e,r){return lr(r,e)},isNotKeyOf(e,r){return!lr(r,e)},hasKey:lr,lacksKey(e,r){return!lr(e,r)},hasKeys(e,r){return r.every(t=>lr(e,t))},lacksKeys(e,r){return r.every(t=>!lr(e,t))}},assertWrap:{isKeyOf(e,r,t){if(!lr(r,e))throw new $(`'${String(e)}' is not a key of '${x(r)}'.`,t);return e},isNotKeyOf(e,r,t){if(lr(r,e))throw new $(`'${String(e)}' is a key of '${x(r)}'.`,t);return e},hasKey(e,r,t){if(!lr(e,r))throw new $(`'${x(e)}' does not have key '${String(r)}'.`,t);return e},lacksKey(e,r,t){if(lr(e,r))throw new $(`'${x(e)}' has key '${String(r)}'.`,t);return e},hasKeys(e,r,t){const n=r.filter(o=>!lr(e,o));if(n.length)throw new $(`'${x(e)}' does not have keys '${n.join(",")}'.`,t);return e},lacksKeys(e,r,t){const n=r.filter(o=>lr(e,o));if(n.length)throw new $(`'${x(e)}' does not lack keys '${n.join(",")}'.`,t);return e}},checkWrap:{isKeyOf(e,r){if(lr(r,e))return e},isNotKeyOf(e,r){if(!lr(r,e))return e},hasKey(e,r){if(lr(e,r))return e},lacksKey(e,r){if(!lr(e,r))return e},hasKeys(e,r){if(r.every(t=>lr(e,t)))return e},lacksKeys(e,r){if(r.every(t=>!lr(e,t)))return e}},waitUntil:{isKeyOf:j(ki.isKeyOf),isNotKeyOf:j(ki.isNotKeyOf),hasKey:j(ki.hasKey),lacksKey:j(ki.lacksKey),hasKeys:j(ki.hasKeys),lacksKeys:j(ki.lacksKeys)}};function V3(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)<r)throw new $(`Length '${e.length}' is not at least '${r}'.`,t)}i(V3,"isLengthAtLeast");function q3(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)!==r)throw new $(`Length '${e.length}' is not exactly '${r}'.`,t)}i(q3,"isLengthExactly");const hf={isLengthAtLeast:V3,isLengthExactly:q3},p2={assert:hf,check:{isLengthAtLeast:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:We(e).length)>=r),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:We(e).length)===r),"isLengthExactly")},assertWrap:{isLengthAtLeast:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)<r)throw new $(`Length '${e.length}' is not at least '${r}'.`,t);return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)!==r)throw new $(`Length '${e.length}' is not exactly '${r}'.`,t);return e}),"isLengthExactly")},checkWrap:{isLengthAtLeast:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)>=r)return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)===r)return e}),"isLengthExactly")},waitUntil:{isLengthAtLeast:j(hf.isLengthAtLeast),isLengthExactly:j(hf.isLengthExactly)}},W3={never(e){throw new $("This code should not have executed.",e)}},b2={assert:W3,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},gf={isDefined(e,r){if(e==null)throw new $(`'${x(e)}' is not defined.`,r)},isNullish(e,r){if(e!=null)throw new $(`'${x(e)}' is not a nullish.`,r)}},v2={assert:gf,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,r){if(e==null)throw new $(`'${x(e)}' is not defined.`,r);return e},isNullish(e,r){if(e==null)return e;throw new $(`'${x(e)}' is not nullish.`,r)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:j(gf.isDefined),isNullish:j(gf.isNullish)}},Ft={isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new $(`${e} is not within the bounds ${x({min:t,max:r})}`,n)},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new $(`${e} is not outside the bounds ${x({min:r,max:t})}`,n)},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new $(`${e} is not an integer.`,r)},isNotInteger(e,r){if(Number.isInteger(e))throw new $(`${e} is an integer.`,r)},isAbove(e,r,t){if(e<=r)throw new $(`${e} is not above ${r}`,t)},isAtLeast(e,r,t){if(e<r)throw new $(`${e} is not at least ${r}`,t)},isBelow(e,r,t){if(e>=r)throw new $(`${e} is not below ${r}`,t)},isAtMost(e,r,t){if(e>r)throw new $(`${e} is not at most ${r}`,t)},isNaN(e,r){if(!isNaN(e))throw new $(`${e} is not NaN`,r)},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new $(`${e} is not finite`,r)},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new $(`${e} is not infinite`,r)},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new $(`${e} is not within ±${t} of ${r}`,n)},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new $(`${e} is within ±${t} of ${r}`,n)}},y2={assert:Ft,check:{isInBounds(e,{max:r,min:t}){return t<=e&&e<=r},isOutBounds(e,{max:r,min:t}){return e<t||r<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,r){return e>r},isAtLeast(e,r){return e>=r},isBelow(e,r){return e<r},isAtMost(e,r){return e<=r},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,r,t){return r-t<=e&&e<=r+t},isNotApproximately(e,r,t){return e<r-t||e>r+t}},assertWrap:{isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new $(`${e} is not within the bounds ${x({min:t,max:r})}`,n);return e},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new $(`${e} is not outside the bounds ${x({min:r,max:t})}`,n);return e},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new $(`${e} is not an integer.`,r);return e},isNotInteger(e,r){if(Number.isInteger(e))throw new $(`${e} is an integer.`,r);return e},isAbove(e,r,t){if(e<=r)throw new $(`${e} is not above ${r}`,t);return e},isAtLeast(e,r,t){if(e<r)throw new $(`${e} is not at least ${r}`,t);return e},isBelow(e,r,t){if(e>=r)throw new $(`${e} is not below ${r}`,t);return e},isAtMost(e,r,t){if(e>r)throw new $(`${e} is not at most ${r}`,t);return e},isNaN(e,r){if(!isNaN(e))throw new $(`${e} is not NaN`,r);return e},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new $(`${e} is not finite`,r);return e},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new $(`${e} is not infinite`,r);return e},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new $(`${e} is not within ±${t} of ${r}`,n);return e},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new $(`${e} is within ±${t} of ${r}`,n);return e}},checkWrap:{isInBounds(e,{max:r,min:t}){if(t<=e&&e<=r)return e},isOutBounds(e,{max:r,min:t}){if(e<t||r<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,r){if(e>r)return e},isAtLeast(e,r){if(e>=r)return e},isBelow(e,r){if(e<r)return e},isAtMost(e,r){if(e<=r)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,r,t){if(r-t<=e&&e<=r+t)return e},isNotApproximately(e,r,t){if(e<r-t||e>r+t)return e}},waitUntil:{isInBounds:j(Ft.isInBounds),isOutBounds:j(Ft.isOutBounds),isInteger:j(Ft.isInteger),isNotInteger:j(Ft.isNotInteger),isAbove:j(Ft.isAbove),isAtLeast:j(Ft.isAtLeast),isBelow:j(Ft.isBelow),isAtMost:j(Ft.isAtMost),isNaN:j(Ft.isNaN),isFinite:j(Ft.isFinite),isInfinite:j(Ft.isInfinite),isApproximately:j(Ft.isApproximately),isNotApproximately:j(Ft.isNotApproximately)}};function K3(e,r,t,n,o){return _l(...Gc(e,r,t,n,o),!1)}i(K3,"assertOutput");function Gc(e,r,t,n,o){const s=Array.isArray(t);return[s?e:c2,s?r:e,s?t:r,s?n:t,s?o:n]}i(Gc,"extractOutputArgs");function _l(e,r,t,n,o,s){const a=r(...t);if(a instanceof Promise)return new Promise(async(l,u)=>{try{const d=await a;e(d,n),s?l(d):l()}catch(d){u(new $(`Output from '${r.name}' did not produce expected output. ${Qr(d)}`,o))}});try{return e(a,n),s?a:void 0}catch(l){throw new $(`Output from '${r.name}' did not produce expected output. ${Qr(l)}`,o)}}i(_l,"innerAssertOutput");function G3(e,r,t,n,o){try{const s=_l(...Gc(e,r,t,n,o),!1);return s instanceof Promise?new Promise(async a=>{try{await s,a(!0)}catch{a(!1)}}):!0}catch{return!1}}i(G3,"checkOutput");function H3(e,r,t,n,o){return _l(...Gc(e,r,t,n,o),!0)}i(H3,"assertWrapOutput");function Z3(e,r,t,n,o){try{const s=_l(...Gc(e,r,t,n,o),!0);return s instanceof Promise?new Promise(async a=>{try{a(await s)}catch{a(void 0)}}):s}catch{return}}i(Z3,"checkWrapOutput");const mf=Symbol("not set");async function J3(e,r,t,n,o,s){const a=Array.isArray(t),l=a?e:c2,u=a?r:e,d=a?t:r,f=a?n:t,h=e2(a?o:n),g=a?s:o,m=Us(h.timeout,{milliseconds:!0}).milliseconds,p=Us(h.interval,{milliseconds:!0});let v=mf,w;async function k(){try{v=await _l(l,u,d,f,void 0,!0)}catch(A){v=mf,w=kr(A)}}i(k,"checkCondition");const D=Date.now();for(;v===mf;)if(await k(),await Vi(p),Date.now()-D>=m)throw sa(w,Xi(g,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return v}i(J3,"waitUntilOutput");const Y3={output:K3},w2={assert:Y3,check:{output:G3},assertWrap:{output:H3},checkWrap:{output:Z3},waitUntil:{output:J3}},Pa={isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new $(`'${x(e)}' is not a PropertyKey.`,r)},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new $(`'${x(e)}' is a PropertyKey.`,r)},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new $(`'${x(e)}' is not a Primitive.`,r)},isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new $(`'${x(e)}' is not a Primitive.`,r)}},$2={assert:Pa,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new $(`'${x(e)}' is not a Primitive.`,r);return e},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new $(`'${x(e)}' is a PropertyKey.`,r);return e},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new $(`'${x(e)}' is not a Primitive.`,r);return e},isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new $(`'${x(e)}' is not a PropertyKey.`,r);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:j(Pa.isNotPrimitive),isNotPropertyKey:j(Pa.isNotPropertyKey),isPrimitive:j(Pa.isPrimitive),isPropertyKey:j(Pa.isPropertyKey)}},Ia={isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new $(`'${x(e)}' is not a PromiseLike.`,r)},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new $(`'${x(e)}' is a PromiseLike.`,r)},isPromise(e,r){if(!(e instanceof Promise))throw new $(`'${x(e)}' is not a Promise.`,r)},isNotPromise(e,r){if(e instanceof Promise)throw new $(`'${x(e)}' is a Promise.`,r)}},k2={assert:Ia,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new $(`'${x(e)}' is not a PromiseLike.`,r);return e},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new $(`'${x(e)}' is a PromiseLike.`,r);return e},isPromise(e,r){if(!(e instanceof Promise))throw new $(`'${x(e)}' is not a Promise.`,r);return e},isNotPromise(e,r){if(e instanceof Promise)throw new $(`'${x(e)}' is a Promise.`,r);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:j(Ia.isPromiseLike,!0),isNotPromiseLike:j(Ia.isNotPromiseLike,!0),isPromise:j(Ia.isPromise,!0),isNotPromise:j(Ia.isNotPromise,!0)}},pf={matches(e,r,t){if(!r.test(e))throw new $(`'${e}' does not match ${r}`,t)},mismatches(e,r,t){if(r.test(e))throw new $(`'${e}' matches ${r}`,t)}},x2={assert:pf,check:{matches(e,r){return r.test(e)},mismatches(e,r){return!r.test(e)}},assertWrap:{matches(e,r,t){if(!r.test(e))throw new $(`'${e}' does not match ${r}`,t);return e},mismatches(e,r,t){if(r.test(e))throw new $(`'${e}' matches ${r}`,t);return e}},checkWrap:{matches(e,r){if(r.test(e))return e},mismatches(e,r){if(!r.test(e))return e}},waitUntil:{matches:j(pf.matches,!0),mismatches:j(pf.mismatches,!0)}},dr={isArray(e,r){if(!Array.isArray(e))throw new $(`'${x(e)}' is not an array.`,r)},isBigInt(e,r){if(typeof e!="bigint")throw new $(`'${x(e)}' is not a bigint.`,r)},isBoolean(e,r){if(typeof e!="boolean")throw new $(`'${x(e)}' is not a boolean.`,r)},isFunction(e,r){if(typeof e!="function")throw new $(`'${x(e)}' is not a function.`,r)},isNull(e,r){if(e!==null)throw new $(`'${x(e)}' is not nul.`,r)},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new $(`'${x(e)}' is not a number.`,r)},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new $(`'${x(e)}' is not a non-null object.`,r)},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new $(`'${x(e)}' is not a plain object.`,r)},isString(e,r){if(typeof e!="string")throw new $(`'${x(e)}' is not a string.`,r)},isSymbol(e,r){if(typeof e!="symbol")throw new $(`'${x(e)}' is not a symbol.`,r)},isUndefined(e,r){if(typeof e<"u")throw new $(`'${x(e)}' is not a undefined.`,r)},isNotArray(e,r){if(Array.isArray(e))throw new $(`'${x(e)}' is an array.`,r)},isNotBigInt(e,r){if(typeof e=="bigint")throw new $(`'${x(e)}' is a bigint.`,r)},isNotBoolean(e,r){if(typeof e=="boolean")throw new $(`'${x(e)}' is a boolean.`,r)},isNotFunction(e,r){if(typeof e=="function")throw new $(`'${x(e)}' is a function.`,r)},isNotNull(e,r){if(e===null)throw new $(`'${x(e)}' is a null.`,r)},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new $(`'${x(e)}' is a number.`,r)},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new $(`'${x(e)}' is a non-null object.`,r)},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new $(`'${x(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new $(`'${x(e)}' is a string.`,r)},isNotSymbol(e,r){if(typeof e=="symbol")throw new $(`'${x(e)}' is a symbol.`,r)},isNotUndefined(e,r){if(typeof e>"u")throw new $(`'${x(e)}' is a undefined.`,r)}},D2={assert:dr,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const r=Object.getPrototypeOf(e);return(r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const r=Object.getPrototypeOf(e);return!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,r){if(!Array.isArray(e))throw new $(`'${x(e)}' is not an array.`,r);return e},isBigInt(e,r){if(typeof e!="bigint")throw new $(`'${x(e)}' is not a bigint.`,r);return e},isBoolean(e,r){if(typeof e!="boolean")throw new $(`'${x(e)}' is not a boolean.`,r);return e},isFunction(e,r){if(typeof e!="function")throw new $(`'${x(e)}' is not a function.`,r);return e},isNull(e,r){if(e!==null)throw new $(`'${x(e)}' is not nul.`,r);return e},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new $(`'${x(e)}' is not a number.`,r);return e},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new $(`'${x(e)}' is not a non-null object.`,r);return e},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new $(`'${x(e)}' is not a plain object.`,r);return e},isString(e,r){if(typeof e!="string")throw new $(`'${x(e)}' is not a string.`,r);return e},isSymbol(e,r){if(typeof e!="symbol")throw new $(`'${x(e)}' is not a symbol.`,r);return e},isUndefined(e,r){if(typeof e<"u")throw new $(`'${x(e)}' is not a undefined.`,r);return e},isNotArray(e,r){if(Array.isArray(e))throw new $(`'${x(e)}' is an array.`,r);return e},isNotBigInt(e,r){if(typeof e=="bigint")throw new $(`'${x(e)}' is a bigint.`,r);return e},isNotBoolean(e,r){if(typeof e=="boolean")throw new $(`'${x(e)}' is a boolean.`,r);return e},isNotFunction(e,r){if(typeof e=="function")throw new $(`'${x(e)}' is a function.`,r);return e},isNotNull(e,r){if(e===null)throw new $(`'${x(e)}' is a null.`,r);return e},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new $(`'${x(e)}' is a number.`,r);return e},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new $(`'${x(e)}' is a non-null object.`,r);return e},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new $(`'${x(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new $(`'${x(e)}' is a string.`,r);return e},isNotSymbol(e,r){if(typeof e=="symbol")throw new $(`'${x(e)}' is a symbol.`,r);return e},isNotUndefined(e,r){if(typeof e>"u")throw new $(`'${x(e)}' is a undefined.`,r);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const r=Object.getPrototypeOf(e);if((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const r=Object.getPrototypeOf(e);if(!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:j(dr.isArray),isBigInt:j(dr.isBigInt),isBoolean:j(dr.isBoolean),isFunction:j(dr.isFunction),isNull:j(dr.isNull),isNumber:j(dr.isNumber),isObject:j(dr.isObject),isPlainObject:j(dr.isPlainObject),isString:j(dr.isString),isSymbol:j(dr.isSymbol),isUndefined:j(dr.isUndefined),isNotArray:j(dr.isNotArray),isNotBigInt:j(dr.isNotBigInt),isNotBoolean:j(dr.isNotBoolean),isNotFunction:j(dr.isNotFunction),isNotNull:j(dr.isNotNull),isNotNumber:j(dr.isNotNumber),isNotObject:j(dr.isNotObject),isNotPlainObject:j(dr.isNotPlainObject),isNotString:j(dr.isNotString),isNotSymbol:j(dr.isNotSymbol),isNotUndefined:j(dr.isNotUndefined)}};var It;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(It||(It={}));function Vh(e,r,t){qh(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},r,t)}i(Vh,"isError");function Vp(e,r,t){qh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${x(e)}' is not an error instance.`},r,t)}i(Vp,"assertThrownError");function qh(e,r,t,n){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor)){const o=e.constructor.name;throw new $(`Error constructor '${o}' did not match expected constructor '${t.matchConstructor.name}'.`,n)}else if(t?.matchMessage){const o=Qr(e);if(typeof t.matchMessage=="string"){if(!Qy(o,t.matchMessage))throw new $(`Error message

'${o}'

does not contain

'${t.matchMessage}'.`,n)}else if(!o.match(t.matchMessage))throw new $(`Error message

'${o}'

does not match RegExp

'${t.matchMessage}'.`,n)}}else throw new $(r.notInstance,n);else throw new $(r.noError,n)}i(qh,"internalAssertError");function qp(e,r){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor))return!1;if(r?.matchMessage){const t=Qr(e);if(typeof r.matchMessage=="string"){if(!Qy(t,r.matchMessage))return!1}else if(!t.match(r.matchMessage))return!1}}else return!1;else return!1;return!0}i(qp,"internalCheckError");function Hc(e,r,t,n){let o;try{const s=r instanceof Promise?r:r();if(s instanceof Promise)return new Promise(async(a,l)=>{try{await s}catch(u){o=kr(u)}try{Vp(o,t,n),e===It.Assert?a():e===It.Check?a(!0):a(o)}catch(u){e===It.CheckWrap?a(void 0):e===It.Check?a(!1):l(kr(u))}})}catch(s){o=kr(s)}try{return Vp(o,t,n),e===It.Check?!0:e!==It.Assert?o:void 0}catch(s){if(e===It.CheckWrap)return;if(e===It.Check)return!1;throw s}}i(Hc,"internalThrowsCheck");function X3(e,r,t){return Hc(It.Assert,e,r,t)}i(X3,"throws");function Q3(e,r){return Hc(It.Check,e,r)}i(Q3,"throwsCheck");function e6(e,r,t){return Hc(It.AssertWrap,e,r,t)}i(e6,"throwsAssertWrap");function r6(e,r,t){return Hc(It.CheckWrap,e,r,t)}i(r6,"throwsCheckWrap");const t6=j(Vh);function n6(e,r,t,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,s=o?r:e,a=typeof t=="object"?n:t,l=typeof t=="object"?t:r;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${x(s)}'`);return t6(o,async()=>{try{await s();return}catch(u){return kr(u)}},l,a)}i(n6,"throwsWaitUntil");const o6={throws:X3,isError:Vh},C2={assert:o6,check:{throws:Q3,isError(e,r){return qp(e,r)}},assertWrap:{throws:e6,isError(e,r,t){return qh(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},r,t),e}},checkWrap:{throws:r6,isError(e,r){if(qp(e,r))return e}},waitUntil:{throws:n6,isError:j(Vh)}},Uo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,bf={isUuid(e,r){if(!String(e).match(Uo))throw new $(`'${String(e)}' is not a UUID.`,r)},isNotUuid(e,r){if(String(e).match(Uo))throw new $(`'${String(e)}' is a UUID.`,r)}},E2={assert:bf,check:{isUuid(e){return!!String(e).match(Uo)},isNotUuid(e){return!String(e).match(Uo)}},assertWrap:{isUuid(e,r){if(!String(e).match(Uo))throw new $(`'${String(e)}' is not a UUID.`,r);return e},isNotUuid(e,r){if(String(e).match(Uo))throw new $(`'${String(e)}' is a UUID.`,r);return e}},checkWrap:{isUuid(e){if(String(e).match(Uo))return e},isNotUuid(e){if(!String(e).match(Uo))return e}},waitUntil:{isUuid:j(bf.isUuid),isNotUuid:j(bf.isNotUuid)}},i6={...b2.assert,...r2.assert,...t2.assert,...o2.assert,...n2.assert,...h2.assert,...g2.assert,...i2.assert,...m2.assert,...p2.assert,...v2.assert,...y2.assert,...w2.assert,...$2.assert,...k2.assert,...x2.assert,...D2.assert,...d2.assert,...C2.assert,...E2.assert,...f2.assert},Wh=[r2,t2,o2,n2,h2,g2,i2,m2,p2,b2,v2,y2,w2,$2,k2,x2,D2,d2,C2,E2,f2],s6=Object.assign({},...Wh.map(e=>e.check)),F=Object.assign(i(function(r){return!!r},"check"),s6);function a6(e,r,t){return Vu(e,r,t,new Set)}i(a6,"checkCustomDeepQuality");function Vu(e,r,t,n){if(e=Wp(e),r=Wp(r),F.isObject(e)&&F.isObject(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),!Vu(We(e).sort(),We(r).sort(),t,n))return!1;let o=!1;const s=We(e).map(a=>{const l=Vu(e[a],r[a],t,n);return F.isPromise(l)&&(o=!0),l});return Kp(o,s)}else if(F.isArray(e)&&F.isArray(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),e.length!==r.length)return!1;let o=!1;const s=e.map((a,l)=>{const u=Vu(a,r[l],t,n);return F.isPromise(u)&&(o=!0),u});return Kp(o,s)}else return t(e,r)}i(Vu,"recursiveCheckCustomDeepQuality");function Wp(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}i(Wp,"flattenComplexObject");function Kp(e,r){return e?new Promise(async(t,n)=>{try{const o=await Promise.all(r);t(o.every(F.isTrue))}catch(o){n(kr(o))}}):r.every(F.isTrue)}i(Kp,"handleMaybePromise");const l6=Object.assign({},...Wh.map(e=>e.assertWrap)),wr=Object.assign(i(function(r,t){if(!r)throw new $("Assertion failed.",t);return r},"assertWrap"),l6);function u6(e){return{equals:i(()=>{},"equals"),notEquals:i(()=>{},"notEquals"),matches:i(()=>{},"matches"),notMatches:i(()=>{},"notMatches"),slowEquals:i(()=>{},"slowEquals")}}i(u6,"tsType");const c6={tsType:u6},d6={assert:c6},f6={fail:i(e=>{throw new $("Failure triggered.",e)},"fail")},h6={...d6.assert,...i6,...f6},zr=Object.assign(i(function(r,t){if(!r)throw new $("Assertion failed.",t)},"assert"),h6),g6=Object.assign({},...Wh.map(e=>e.checkWrap)),Kh=Object.assign(i(function(r){if(r)return r},"checkWrap"),g6);function m6(e,r){return F.hasKey(e,"entryType")&&e.entryType===r}i(m6,"isBookEntry");function xi(e,r){return e.controlType===r}i(xi,"isControlInitType");var me;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(me||(me={}));const A2=Symbol("any-type"),p6={[me.Checkbox]:!1,[me.Color]:"",[me.Custom]:void 0,[me.Dropdown]:"",[me.Hidden]:A2,[me.Number]:0,[me.Text]:""};function b6(e,r){if(!e)return[];const t=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===me.Custom)return;const s=p6[o.controlType];s!==A2&&(typeof s!=typeof o.initValue&&t.push(new Error(`Control '${n}' in page '${r}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof s} because the control is of type ${o.controlType}.`)),n||t.push(new Error(`'${r}' cannot have an empty control name.`)))}),t}i(b6,"checkControls");function v6(e,r,t){const n=r;if(e.has(n))return e.get(n);{const o=t();return F.isPromise(o)?new Promise(async(s,a)=>{try{const l=await o;e.set(n,l),s(l)}catch(l){a(kr(l))}}):(e.set(n,o),o)}}i(v6,"getOrSetFromMap");function es(e,r,t){if(r in e)return e[r];{const n=t();return F.isPromise(n)?new Promise(async(o,s)=>{try{const a=await n;e[r]=a,o(a)}catch(a){s(kr(a))}}):(e[r]=n,n)}}i(es,"getOrSet");function In(e){return We(e).map(r=>[r,e[r]])}i(In,"getObjectTypedEntries");function fl(e){return Object.fromEntries(e)}i(fl,"typedObjectFromEntries");function wn(e,r,t){return e.reduce((n,o,s,a)=>{const l=r(o,s,a);return t(l,o,s,a)&&n.push(l),n},[])}i(wn,"filterMap");function y6(e,r,t={}){return e.reduce((n,o,s,a)=>{const l=r(o,s,a);return es(n,l,()=>[]).push(o),n},{})}i(y6,"groupArrayBy");function Qo(e,r,t={}){try{let n=!1;const o=e.map((s,a,l)=>{const u=r(s,a,l);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(F.isTruthy);return n?new Promise(async(s,a)=>{try{const l=wn(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},F.isTruthy);s(fl(l))}catch(l){a(kr(l))}}):fl(o)}catch(n){throw kr(n)}}i(Qo,"arrayToObject");function w6(e,r){const t=[];let n=!1;for(let o=0;o<e;o++){const s=r(o);F.isPromise(s)&&(n=!0),t.push(s)}return n?Promise.all(t):t}i(w6,"createArray");function $6(e){return Array.isArray(e)?e:[e]}i($6,"ensureArray");function k6({min:e,max:r}){const{min:t,max:n}=Ph({min:Math.floor(e),max:Math.floor(r)}),o=n-t+1,s=Math.ceil(Math.log2(o)),a=Math.ceil(s/8);if(a>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${t}, max: ${n}})`);const l=Math.floor(256**a/o)*o,u=new Uint8Array(a);let d;do crypto.getRandomValues(u),d=u.reduce((f,h,g)=>f+h*256**g,0);while(d>=l);return t+d%o}i(k6,"randomInteger");const Gp=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function Oi(e=16){let r="";for(let t=0;t<e;t++){const n=k6({min:0,max:Gp.length-1});r+=Gp[n]}return r}i(Oi,"randomString");function S2(e){if(F.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(r=>Qr(r).trim()).join(`
`))}i(S2,"combineErrors");function M2(e,r={}){try{const t=e();return t instanceof Promise?t.catch(n=>r.handleError?r.handleError(n):F.hasKey(r,"fallbackValue")?r.fallbackValue:kr(n)):t}catch(t){return r.handleError?r.handleError(t):F.hasKey(r,"fallbackValue")?r.fallbackValue:kr(t)}}i(M2,"wrapInTry");const{hasOwnProperty:Ul}=Object.prototype,x6=/[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;function Oo(e){return e.length<5e3&&!x6.test(e)?`"${e}"`:JSON.stringify(e)}i(Oo,"strEscape");function vf(e,r){if(e.length>200||r)return e.sort(r);for(let t=1;t<e.length;t++){const n=e[t];let o=t;for(;o!==0&&e[o-1]>n;)e[o]=e[o-1],o--;e[o]=n}return e}i(vf,"sort");const D6=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)),Symbol.toStringTag).get;function yf(e){return D6.call(e)!==void 0&&e.length!==0}i(yf,"isTypedArrayWithEntries");function Hp(e,r,t){e.length<t&&(t=e.length);const n=r===","?"":" ";let o=`"0":${n}${e[0]}`;for(let s=1;s<t;s++)o+=`${r}"${s}":${n}${e[s]}`;return o}i(Hp,"stringifyTypedArray");function C6(e){if(Ul.call(e,"circularValue")){const r=e.circularValue;if(typeof r=="string")return`"${r}"`;if(r==null)return r;if(r===Error||r===TypeError)return{toString(){throw new TypeError("Converting circular structure to JSON")}};throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')}return'"[Circular]"'}i(C6,"getCircularValueOption");function E6(e){let r;if(Ul.call(e,"deterministic")&&(r=e.deterministic,typeof r!="boolean"&&typeof r!="function"))throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');return r===void 0?!0:r}i(E6,"getDeterministicOption");function A6(e,r){let t;if(Ul.call(e,r)&&(t=e[r],typeof t!="boolean"))throw new TypeError(`The "${r}" argument must be of type boolean`);return t===void 0?!0:t}i(A6,"getBooleanOption");function Zp(e,r){let t;if(Ul.call(e,r)){if(t=e[r],typeof t!="number")throw new TypeError(`The "${r}" argument must be of type number`);if(!Number.isInteger(t))throw new TypeError(`The "${r}" argument must be an integer`);if(t<1)throw new RangeError(`The "${r}" argument must be >= 1`)}return t===void 0?1/0:t}i(Zp,"getPositiveIntegerOption");function Di(e){return e===1?"1 item":`${e} items`}i(Di,"getItemCount");function S6(e){const r=new Set;for(const t of e)(typeof t=="string"||typeof t=="number")&&r.add(String(t));return r}i(S6,"getUniqueReplacerSet");function M6(e){if(Ul.call(e,"strict")){const r=e.strict;if(typeof r!="boolean")throw new TypeError('The "strict" argument must be of type boolean');if(r)return t=>{let n=`Object can not safely be stringified. Received type ${typeof t}`;throw typeof t!="function"&&(n+=` (${t.toString()})`),new Error(n)}}}i(M6,"getStrictOption");function F6(e){e={...e};const r=M6(e);r&&(e.bigint===void 0&&(e.bigint=!1),"circularValue"in e||(e.circularValue=Error));const t=C6(e),n=A6(e,"bigint"),o=E6(e),s=typeof o=="function"?o:void 0,a=Zp(e,"maximumDepth"),l=Zp(e,"maximumBreadth");function u(m,p,v,w,k,D){let A=p[m];switch(typeof A=="object"&&A!==null&&typeof A.toJSON=="function"&&(A=A.toJSON(m)),A=w.call(p,m,A),typeof A){case"string":return Oo(A);case"object":{if(A===null)return"null";if(v.includes(A))return t;let I="",L=",";const Y=D;if(Array.isArray(A)){if(A.length===0)return"[]";if(a<v.length+1)return'"[Array]"';v.push(A),k!==""&&(D+=k,I+=`
${D}`,L=`,
${D}`);const Fe=Math.min(A.length,l);let ar=0;for(;ar<Fe-1;ar++){const St=u(String(ar),A,v,w,k,D);I+=St===void 0?"null":St,I+=L}const Ze=u(String(ar),A,v,w,k,D);if(I+=Ze===void 0?"null":Ze,A.length-1>l){const St=A.length-l-1;I+=`${L}"... ${Di(St)} not stringified"`}return k!==""&&(I+=`
${Y}`),v.pop(),`[${I}]`}let re=Object.keys(A);const te=re.length;if(te===0)return"{}";if(a<v.length+1)return'"[Object]"';let X="",pe="";k!==""&&(D+=k,L=`,
${D}`,X=" ");const we=Math.min(te,l);o&&!yf(A)&&(re=vf(re,s)),v.push(A);for(let Fe=0;Fe<we;Fe++){const ar=re[Fe],Ze=u(ar,A,v,w,k,D);Ze!==void 0&&(I+=`${pe}${Oo(ar)}:${X}${Ze}`,pe=L)}if(te>l){const Fe=te-l;I+=`${pe}"...":${X}"${Di(Fe)} not stringified"`,pe=L}return k!==""&&pe.length>1&&(I=`
${D}${I}
${Y}`),v.pop(),`{${I}}`}case"number":return isFinite(A)?String(A):r?r(A):"null";case"boolean":return A?"true":"false";case"undefined":return;case"bigint":if(n)return String(A);default:return r?r(A):void 0}}i(u,"stringifyFnReplacer");function d(m,p,v,w,k,D){switch(typeof p=="object"&&p!==null&&typeof p.toJSON=="function"&&(p=p.toJSON(m)),typeof p){case"string":return Oo(p);case"object":{if(p===null)return"null";if(v.includes(p))return t;const A=D;let I="",L=",";if(Array.isArray(p)){if(p.length===0)return"[]";if(a<v.length+1)return'"[Array]"';v.push(p),k!==""&&(D+=k,I+=`
${D}`,L=`,
${D}`);const te=Math.min(p.length,l);let X=0;for(;X<te-1;X++){const we=d(String(X),p[X],v,w,k,D);I+=we===void 0?"null":we,I+=L}const pe=d(String(X),p[X],v,w,k,D);if(I+=pe===void 0?"null":pe,p.length-1>l){const we=p.length-l-1;I+=`${L}"... ${Di(we)} not stringified"`}return k!==""&&(I+=`
${A}`),v.pop(),`[${I}]`}v.push(p);let Y="";k!==""&&(D+=k,L=`,
${D}`,Y=" ");let re="";for(const te of w){const X=d(te,p[te],v,w,k,D);X!==void 0&&(I+=`${re}${Oo(te)}:${Y}${X}`,re=L)}return k!==""&&re.length>1&&(I=`
${D}${I}
${A}`),v.pop(),`{${I}}`}case"number":return isFinite(p)?String(p):r?r(p):"null";case"boolean":return p?"true":"false";case"undefined":return;case"bigint":if(n)return String(p);default:return r?r(p):void 0}}i(d,"stringifyArrayReplacer");function f(m,p,v,w,k){switch(typeof p){case"string":return Oo(p);case"object":{if(p===null)return"null";if(typeof p.toJSON=="function"){if(p=p.toJSON(m),typeof p!="object")return f(m,p,v,w,k);if(p===null)return"null"}if(v.includes(p))return t;const D=k;if(Array.isArray(p)){if(p.length===0)return"[]";if(a<v.length+1)return'"[Array]"';v.push(p),k+=w;let X=`
${k}`;const pe=`,
${k}`,we=Math.min(p.length,l);let Fe=0;for(;Fe<we-1;Fe++){const Ze=f(String(Fe),p[Fe],v,w,k);X+=Ze===void 0?"null":Ze,X+=pe}const ar=f(String(Fe),p[Fe],v,w,k);if(X+=ar===void 0?"null":ar,p.length-1>l){const Ze=p.length-l-1;X+=`${pe}"... ${Di(Ze)} not stringified"`}return X+=`
${D}`,v.pop(),`[${X}]`}let A=Object.keys(p);const I=A.length;if(I===0)return"{}";if(a<v.length+1)return'"[Object]"';k+=w;const L=`,
${k}`;let Y="",re="",te=Math.min(I,l);yf(p)&&(Y+=Hp(p,L,l),A=A.slice(p.length),te-=p.length,re=L),o&&(A=vf(A,s)),v.push(p);for(let X=0;X<te;X++){const pe=A[X],we=f(pe,p[pe],v,w,k);we!==void 0&&(Y+=`${re}${Oo(pe)}: ${we}`,re=L)}if(I>l){const X=I-l;Y+=`${re}"...": "${Di(X)} not stringified"`,re=L}return re!==""&&(Y=`
${k}${Y}
${D}`),v.pop(),`{${Y}}`}case"number":return isFinite(p)?String(p):r?r(p):"null";case"boolean":return p?"true":"false";case"undefined":return;case"bigint":if(n)return String(p);default:return r?r(p):void 0}}i(f,"stringifyIndent");function h(m,p,v){switch(typeof p){case"string":return Oo(p);case"object":{if(p===null)return"null";if(typeof p.toJSON=="function"){if(p=p.toJSON(m),typeof p!="object")return h(m,p,v);if(p===null)return"null"}if(v.includes(p))return t;let w="";const k=p.length!==void 0;if(k&&Array.isArray(p)){if(p.length===0)return"[]";if(a<v.length+1)return'"[Array]"';v.push(p);const Y=Math.min(p.length,l);let re=0;for(;re<Y-1;re++){const X=h(String(re),p[re],v);w+=X===void 0?"null":X,w+=","}const te=h(String(re),p[re],v);if(w+=te===void 0?"null":te,p.length-1>l){const X=p.length-l-1;w+=`,"... ${Di(X)} not stringified"`}return v.pop(),`[${w}]`}let D=Object.keys(p);const A=D.length;if(A===0)return"{}";if(a<v.length+1)return'"[Object]"';let I="",L=Math.min(A,l);k&&yf(p)&&(w+=Hp(p,",",l),D=D.slice(p.length),L-=p.length,I=","),o&&(D=vf(D,s)),v.push(p);for(let Y=0;Y<L;Y++){const re=D[Y],te=h(re,p[re],v);te!==void 0&&(w+=`${I}${Oo(re)}:${te}`,I=",")}if(A>l){const Y=A-l;w+=`${I}"...":"${Di(Y)} not stringified"`}return v.pop(),`{${w}}`}case"number":return isFinite(p)?String(p):r?r(p):"null";case"boolean":return p?"true":"false";case"undefined":return;case"bigint":if(n)return String(p);default:return r?r(p):void 0}}i(h,"stringifySimple");function g(m,p,v){if(arguments.length>1){let w="";if(typeof v=="number"?w=" ".repeat(Math.min(v,10)):typeof v=="string"&&(w=v.slice(0,10)),p!=null){if(typeof p=="function")return u("",{"":m},[],p,w,"");if(Array.isArray(p))return d("",m,[],S6(p),w,"")}if(w.length!==0)return f("",m,[],w,"")}return h("",m,[])}return i(g,"stringify"),g}i(F6,"configure");const T6=F6({maximumDepth:15,maximumBreadth:50});function N6(...e){return T6(...e)||""}i(N6,"safeJsonStringify");function Sn(e,{enableUnsafeCopyAll:r}={}){try{const t=r?JSON.stringify(e):N6(e);return JSON.parse(t)}catch(t){throw console.error("Failed to JSON copy for",e),t}}i(Sn,"copyThroughJson");const P6="modulepreload",I6=i(function(e){return"/vira/book/"+e},"assetsURL"),Jp={},ac=i(function(r,t,n){let o=Promise.resolve();if(t&&t.length>0){let u=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};i(u,"allSettled"),document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");o=u(t.map(d=>{if(d=I6(d),d in Jp)return;Jp[d]=!0;const f=d.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":P6,f||(g.as="script"),g.crossOrigin="",g.href=d,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((m,p)=>{g.addEventListener("load",m),g.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i(s,"handlePreloadError"),o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return r().catch(s)})},"preload");var _r;(function(e){e.Standard="stdout",e.Error="stderr"})(_r||(_r={}));var ye;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ye||(ye={}));async function O6(){return await Kv({async[Nn.Node](){const e=(await ac(async()=>{const{default:r}=await import("./index-aeZXflCI.js");return{default:r}},[])).default;return{[ye.Bold]:e.bold.open,[ye.Debug]:e.blueBright.open,[ye.Error]:e.red.open,[ye.Faint]:e.gray.open,[ye.Info]:e.cyan.open,[ye.Mutate]:e.magenta.open,[ye.NormalWeight]:"\x1B[22m",[ye.Plain]:"",[ye.Reset]:e.reset.open,[ye.Success]:e.green.open,[ye.Warning]:e.yellow.open}},[Nn.Web](){return Promise.resolve({[ye.Bold]:"font-weight: bold",[ye.Debug]:"color: blue",[ye.Error]:"color: red",[ye.Faint]:"color: grey",[ye.Info]:"color: teal",[ye.Mutate]:"color: magenta",[ye.NormalWeight]:"",[ye.Plain]:"",[ye.Reset]:"",[ye.Success]:"color: green",[ye.Warning]:"color: orange"})}})}i(O6,"determineDefaultLogColors");const zt=await O6(),B6={[ye.Bold]:{colors:[zt.bold],logType:_r.Standard},[ye.Debug]:{colors:[zt.debug],logType:_r.Standard},[ye.Faint]:{colors:[zt.faint],logType:_r.Standard},[ye.Info]:{colors:[zt.info],logType:_r.Standard},[ye.Mutate]:{colors:[zt.mutate,zt.bold],logType:_r.Standard},[ye.NormalWeight]:{colors:[zt.normalWeight],logType:_r.Standard},[ye.Plain]:{colors:[],logType:_r.Standard},[ye.Reset]:{colors:[zt.reset],logType:_r.Standard},[ye.Success]:{colors:[zt.success,zt.bold],logType:_r.Standard},[ye.Error]:{colors:[zt.error,zt.bold],logType:_r.Error},[ye.Warning]:{colors:[zt.warning],logType:_r.Error}};function Ct({value:e,prefix:r}){return String(e).startsWith(r)?String(e):`${r}${String(e)}`}i(Ct,"addPrefix");function Bi({value:e,prefix:r}){return e.startsWith(r)?e.slice(r.length):e}i(Bi,"removePrefix");function F2(e,r){try{let t=!1;const n=In(e).map(([o,s])=>{const a=r(o,s,e);return a instanceof Promise?(t=!0,a):a?[a.key,a.value]:void 0}).filter(F.isTruthy);return t?new Promise(async(o,s)=>{try{const a=wn(await Promise.all(n),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},F.isTruthy);o(fl(a))}catch(a){s(kr(a))}}):fl(n)}catch(t){throw kr(t)}}i(F2,"mapObject");function T2(e,r){return F2(e,(t,n)=>{const o=n,s=r(n,e);return s instanceof Promise?s.then(a=>({key:o,value:a})):{key:o,value:s}})}i(T2,"mapEnumToObject");function N2(e,...r){const t={...e};return r.forEach(n=>{n&&In(n).forEach(([o,s])=>{s!=null&&(t[o]=s)})}),t}i(N2,"mergeDefinedProperties");function R6(e){return e.replace(/,/g,"")}i(R6,"removeCommas");function L6(e){return typeof e=="number"?e:Number(typeof e=="string"?R6(e):e)}i(L6,"toNumber");function j6(e){const r=_6(e);if(r==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return r}i(j6,"toEnsuredNumber");function _6(e){const r=L6(e);if(!isNaN(r))return r}i(_6,"toMaybeNumber");const P2="px";function lc(e){return Gh({value:e,suffix:P2})}i(lc,"addPx");function U6(e){return j6(Hh({value:e,suffix:P2}))}i(U6,"removePx");function Gh({value:e,suffix:r}){return String(e).endsWith(r)?String(e):`${String(e)}${r}`}i(Gh,"addSuffix");function Hh({value:e,suffix:r}){return e.endsWith(r)?e.slice(0,Math.max(0,e.length-r.length)):e}i(Hh,"removeSuffix");async function z6(){return await Kv({async[Nn.Node](){const{inspect:e}=await ac(async()=>{const{inspect:r}=await import("node:util");return{inspect:r}},[]);return({args:r,colorKey:t,options:n})=>{const o=r.map(l=>typeof l=="string"?l:e(l));return{text:[n.omitColors?"":n.colorConfig[t].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[ye.Reset].colors.join("")].join(""),css:void 0}}},[Nn.Web](){return({args:e,colorKey:r,options:t})=>{const n=t.omitColors?void 0:wn(t.colorConfig[r].colors,a=>Hh({value:a,suffix:";"}),F.isTruthy).join("; ");return{text:[e.map(a=>typeof a=="string"?a:a instanceof Error?Qr(a):x(a)).join(`
`),t.omitColors?"":t.colorConfig[ye.Reset].colors.join("")].join(""),css:n}}}})}i(z6,"createToLogString");const V6=await z6(),q6={colorConfig:B6,omitColors:!1},W6=I2({[_r.Error](){},[_r.Standard](){}});function I2(e,r){const t=N2(q6,r);function n(s){e[t.colorConfig[s.colorKey].logType](V6({...s,options:t}))}i(n,"writeLog");const o=T2(ye,s=>(...a)=>n({args:a,colorKey:s}));return{...o,if(s){return s?o:W6}}}i(I2,"createLogger");const K6=Nh(Nn.Node)?{[_r.Error]({text:e}){process.stderr.write(e+`
`)},[_r.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[_r.Error]({text:e,css:r}){console.error(Ct({value:e,prefix:"%c"}),r)},[_r.Standard]({text:e,css:r}){console.log(Ct({value:e,prefix:"%c"}),r)}},O2=I2(K6);function G6(e,{min:r,max:t}){return Math.min(Math.max(e,r),t)}i(G6,"clamp$2");function B2(e,{digits:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(B2,"round");function H6({searchIn:e,searchFor:r,caseSensitive:t,includeLength:n}){const o=Jy(Xy(r,{caseSensitive:t}),"g"),s=[];return e.replace(o,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new TypeError(`Match index "${l}" is not a number. Searching for "${r}" in "${e}".`);const u=a[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);s.push({index:l,length:u.length});const d=a[0];if(typeof d!="string")throw new TypeError(`Original match when searching for "${r}" in "${e}" at index ${l} is not a string.`);return d}),s}i(H6,"findSubstringIndexes");function Z6(e,r,{caseSensitive:t}){const n=H6({searchIn:e,searchFor:r,caseSensitive:t,includeLength:!0}),o=Xy(r,{caseSensitive:t});return e.split(o).reduce((a,l,u)=>{const d=n[u],f=a.concat(l);if(d){const h=e.slice(d.index,d.index+d.length);return f.concat(h)}else return f},[])}i(Z6,"splitIncludeSplit");function J6(e,r){return e.split(r)}i(J6,"safeSplit");function Yp(e,r){const{min:t,max:n}=Ph(r);if(r.takeOverflow){const o=n-t+1,s=(e-t)%o;return s<0?t+o+s:t+s}else return e>n?t:e<t?n:e}i(Yp,"wrapNumber");function cr(e,r){let t=!1;const n=We(e).reduce((o,s)=>{const a=r(s,e[s],e);return a instanceof Promise&&(t=!0),o[s]=a,o},{});return t?new Promise(async(o,s)=>{try{await Promise.all(We(n).map(async a=>{const l=await n[a];n[a]=l})),o(n)}catch(a){s(kr(a))}}):n}i(cr,"mapObjectValues");function Zc(e,r){const t=In(e).filter(([n,o])=>r(n,o,e));return fl(t)}i(Zc,"filterObject");function Y6(e,r){return Zc(e,t=>r.includes(t))}i(Y6,"pickObjectKeys");function Vs(e){return We(e).map(r=>e[r])}i(Vs,"getObjectTypedValues");function R2(e,{keepNewLines:r}={}){return r?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}i(R2,"collapseWhiteSpace");var hl;(function(e){e.Upper="upper",e.Lower="lower"})(hl||(hl={}));const X6={firstLetterCase:hl.Lower};function Q6(e,r){if(!e.length)return"";const t=e[0];return(r===hl.Upper?t.toUpperCase():t.toLowerCase())+e.slice(1)}i(Q6,"setFirstLetterCasing");function eD(e,r={}){const t=e.toLowerCase();if(!t.length)return"";const n=t.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const a=s[1];return a?a.toUpperCase():""}),o=N2(X6,r);return Q6(n,o.firstLetterCase)}i(eD,"kebabCaseToCamelCase");function rD(e,r="and"){if(e.length<2)return e.join("");const t=e.length>2?", ":" ";return`${e.slice(0,-1).join(t)}${t}${r} ${e[e.length-1]}`}i(rD,"joinWithFinalConjunction");function tD({value:e,wrapper:r}){return Ct({value:Gh({value:e,suffix:r}),prefix:r})}i(tD,"wrapString");function Un(){function e(r){return class extends CustomEvent{static{i(this,"TypedEventConstructor")}static type=r;constructor(n){super(r,n)}}}return i(e,"defineEventTypeString"),e}i(Un,"defineTypedCustomEvent");function Zh(e,r){const t=r??Event;return class extends t{static{i(this,"TypedEventConstructor")}static type=e;constructor(o){super(e,o)}}}i(Zh,"defineTypedEvent$1");class nD{static{i(this,"TypedListenTarget")}listeners={};universalListeners=new Map;getListenerCount(){return Vs(this.listeners).map(t=>t.size||0).reduce((t,n)=>t+n,0)+this.universalListeners.size}listenToAll(r,t={}){const n=i(()=>this.universalListeners.delete(r)||!1,"removeListener");function o(s,a){t.once&&n(),r(s,a)}return i(o,"wrappedCallback"),this.universalListeners.set(r,{listener:o,removeListener:n}),n}removeUniversalListener(r){return!!this.universalListeners.get(r)?.removeListener()}listen(r,t,n={}){const o=F.isString(r)?r:r.type,s=i(()=>this.listeners[o]?.delete(t)||!1,"removeListener");function a(l,u){n.once&&s(),t(l,u)}return i(a,"wrappedCallback"),es(this.listeners,o,()=>new Map).set(t,{listener:a,removeListener:s}),s}removeListener(r,t){const n=F.isString(r)?r:r.type,o=this.listeners[n];if(!o)return!1;const s=o.get(t);return s?s.removeListener():!1}dispatch(r){const t=this.listeners[r.type];r.target==null&&Object.defineProperty(r,"target",{writable:!1,value:this});const n=t?.size||0;return t?.forEach(o=>{o.listener(r,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(r,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const t=Vs(this.listeners).reduce((n,o)=>{const s=o.size||0;return o.clear(),n+s},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),t}destroy(){this.removeAllListeners()}}class Jh extends nD{static{i(this,"ListenTarget")}}function vo(e,r,t,n){return e.addEventListener(r,t,n),()=>e.removeEventListener(r,t,n)}i(vo,"listenTo");function U0(e,r,t){return vo(globalThis,e,r,t)}i(U0,"listenToGlobal");function Yh(e,r){return gl(e.title),e.parent?[...Yh(e.parent),gl(e.parent.title)].concat([]):[]}i(Yh,"listUrlBreadcrumbs");function gl(e){return R2(e).toLowerCase().replaceAll(/\s/g,"-")}i(gl,"titleToUrlBreadcrumb");function oD({searchFor:e,searchIn:r}){return e.every((t,n)=>r[n]===t)}i(oD,"doBreadcrumbsStartWith");const iD=/[/?#&=]/;function L2(e){const r=e.match(iD);return e.trim()?gl(e)?r?new Error(`Book page title has invalid character '${r[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}i(L2,"getPageTitleError");const sD={[it.ElementExample]:()=>[],[it.Page]:e=>[L2(e.title),...b6(e.controls,e.title)].filter(F.isTruthy),[it.Root]:()=>[]},uc="_isBookTreeNode",j2=new Map;function aD(e){return j2.get(e)}i(aD,"getTreeFromCache");function lD(e,r){v6(j2,e,()=>r)}i(lD,"addTreeToCache");function Os(e,r){return _2(e)&&e.entry.entryType===r}i(Os,"isBookTreeNode");function _2(e){return!!(F.hasKeys(e,[uc,"entry"])&&e[uc])}i(_2,"isAnyBookTreeNode");function uD(){return{[uc]:!0,entry:{entryType:it.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}i(uD,"createEmptyBookTreeRoot");function cD({entries:e,debug:r}){const t=aD(e);if(t)return t;const n=uD();e.forEach(a=>Xh({tree:n,newEntry:a,debug:r,manuallyAdded:!0}));const o=U2(n),s={tree:n,flattenedNodes:o};return lD(e,s),r&&console.info("element-book tree:",n),s}i(cD,"createBookTreeFromEntries");function dD(e,r,t){if(!r.parent)return e;const n=z0(r,e);if(n)return n;t&&console.info(`parent of ${r.title} not found in tree; adding it now.`),Xh({tree:e,newEntry:r.parent,debug:t,manuallyAdded:!1});const o=z0(r,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Yh(r).join(" > ")}`);return o}i(dD,"getOrAddImmediateParent");function Xh({tree:e,newEntry:r,debug:t,manuallyAdded:n}){const o=sD[r.entryType](r);r.errors.push(...o);const s=dD(e,r,t),a=gl(r.title),l=s.children[a];if(l){if(n){if(l.manuallyAdded){l.entry.errors.push(new Error(`Cannot create duplicate '${a}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}l.manuallyAdded=!0}return}const u={[uc]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,a],entry:r,manuallyAdded:n};s.children[a]=u,m6(r,it.Page)&&Object.values(r.elementExamples).length&&Object.values(r.elementExamples).forEach(d=>Xh({tree:e,newEntry:d,debug:t,manuallyAdded:n}))}i(Xh,"addEntryToTree");function z0(e,r){const t=_2(e)?e.fullUrlBreadcrumbs.slice(0,-1):Yh(e);return t.length?t.reduce((o,s)=>{if(o)return o.children[s]},r):void 0}i(z0,"traverseToImmediateParent");function U2(e){const t=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>U2(o));return[e,...t].flat()}i(U2,"flattenTree");function Qh(e,r){return eg(e,["",...r],void 0)}i(Qh,"traverseControls");function eg(e,r,t){const n=r.slice(1),o=n[0];!o&&t&&(e.controls=t);const s=e.children[o||""],a=s&&eg(s,n,t);return{...e.controls,...a}}i(eg,"traverseAndInsertNewControls");function fD(e,r,t){const n={...e};return eg(n,["",...r],t),n}i(fD,"createNewControls");function z2(e,r){const t=r?.controls||(Os(e,it.Page)?cr(e.entry.controls,(o,s)=>s.initValue):{});return{children:cr(e.children,(o,s)=>z2(s,r?.children?.[s.urlBreadcrumb])),controls:t}}i(z2,"updateTreeControls");function Pe(e){const r={...e,entryType:it.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},t=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:r.useVerticalExamples,entryType:it.ElementExample,parent:r,descriptionParagraphs:n.descriptionParagraphs??[],errors:[t.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),L2(n.title)].filter(F.isTruthy)};t.add(n.title),r.elementExamples[gl(o.title)]=o}}),r}i(Pe,"defineBookPage");var Ot;(function(e){e.Search="search",e.Book="book"})(Ot||(Ot={}));function V2(e){return e[0]===Ot.Book?"":e[1]?decodeURIComponent(e[1]):""}i(V2,"extractSearchQuery");const qs={hash:void 0,paths:[Ot.Book],search:void 0};class cc{static{i(this,"CssPropertyRegistry")}static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const r=cc.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;r&&(globalThis.CSS.registerProperty=t=>(q2.registry.set(t.name,t),r(t)))}canRegisterCssProperty(r){return cc.cssPropertyDefinitionSupported&&!this.registry.has(r)}registerProperty(r){if(!this.canRegisterCssProperty(r.name))return!1;try{return globalThis.CSS.registerProperty(r),!0}catch(t){throw sa(t,`Failed to define CSS var: ${x(r,4)}

`)}}}const q2=new cc;const qu=globalThis,rg=qu.ShadowRoot&&(qu.ShadyCSS===void 0||qu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tg=Symbol(),Xp=new WeakMap;let qo=class{static{i(this,"n")}constructor(r,t,n){if(this._$cssResult$=!0,n!==tg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o;const t=this.t;if(rg&&r===void 0){const n=t!==void 0&&t.length===1;n&&(r=Xp.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),n&&Xp.set(t,r))}return r}toString(){return this.cssText}};const Me=i(e=>new qo(typeof e=="string"?e:e+"",void 0,tg),"r$3"),W2=i((e,...r)=>{const t=e.length===1?e[0]:r.reduce((n,o,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new qo(t,e,tg)},"i$5"),hD=i((e,r)=>{if(rg)e.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of r){const n=document.createElement("style"),o=qu.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,e.appendChild(n)}},"S$1"),Qp=rg?e=>e:e=>e instanceof CSSStyleSheet?(r=>{let t="";for(const n of r.cssRules)t+=n.cssText;return Me(t)})(e):e;const{is:gD,defineProperty:mD,getOwnPropertyDescriptor:pD,getOwnPropertyNames:bD,getOwnPropertySymbols:vD,getPrototypeOf:yD}=Object,Jc=globalThis,eb=Jc.trustedTypes,wD=eb?eb.emptyScript:"",$D=Jc.reactiveElementPolyfillSupport,tl=i((e,r)=>e,"d$2"),dc={toAttribute(e,r){switch(r){case Boolean:e=e?wD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,r){let t=e;switch(r){case Boolean:t=e!==null;break;case Number:t=e===null?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch{t=null}}return t}},ng=i((e,r)=>!gD(e,r),"f$3"),rb={attribute:!0,type:String,converter:dc,reflect:!1,useDefault:!1,hasChanged:ng};Symbol.metadata??=Symbol("metadata"),Jc.litPropertyMetadata??=new WeakMap;let Ds=class extends HTMLElement{static{i(this,"y")}static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,t=rb){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(r,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(r,n,t);o!==void 0&&mD(this.prototype,r,o)}}static getPropertyDescriptor(r,t,n){const{get:o,set:s}=pD(this.prototype,r)??{get(){return this[t]},set(a){this[t]=a}};return{get:o,set(a){const l=o?.call(this);s?.call(this,a),this.requestUpdate(r,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??rb}static _$Ei(){if(this.hasOwnProperty(tl("elementProperties")))return;const r=yD(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(tl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tl("properties"))){const t=this.properties,n=[...bD(t),...vD(t)];for(const o of n)this.createProperty(o,t[o])}const r=this[Symbol.metadata];if(r!==null){const t=litPropertyMetadata.get(r);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const t=[];if(Array.isArray(r)){const n=new Set(r.flat(1/0).reverse());for(const o of n)t.unshift(Qp(o))}else r!==void 0&&t.push(Qp(r));return t}static _$Eu(r,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(r.set(n,this[n]),delete this[n]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hD(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,t,n){this._$AK(r,n)}_$ET(r,t){const n=this.constructor.elementProperties.get(r),o=this.constructor._$Eu(r,n);if(o!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:dc).toAttribute(t,n.type);this._$Em=r,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(r,t){const n=this.constructor,o=n._$Eh.get(r);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:dc;this._$Em=o;const l=a.fromAttribute(t,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(r,t,n,o=!1,s){if(r!==void 0){const a=this.constructor;if(o===!1&&(s=this[r]),n??=a.getPropertyOptions(r),!((n.hasChanged??ng)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(r)&&!this.hasAttribute(a._$Eu(r,n))))return;this.C(r,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,t,{useDefault:n,reflect:o,wrapped:s},a){n&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,a??t??this[r]),s!==!0||a!==void 0)||(this._$AL.has(r)||(this.hasUpdated||n||(t=void 0),this._$AL.set(r,t)),o===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n){const{wrapped:a}=s,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let r=!1;const t=this._$AL;try{r=this.shouldUpdate(t),r?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw r=!1,this._$EM(),n}r&&this._$AE(t)}willUpdate(r){}_$AE(r){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(r){}firstUpdated(r){}};Ds.elementStyles=[],Ds.shadowRootOptions={mode:"open"},Ds[tl("elementProperties")]=new Map,Ds[tl("finalized")]=new Map,$D?.({ReactiveElement:Ds}),(Jc.reactiveElementVersions??=[]).push("2.1.2");const og=globalThis,tb=i(e=>e,"i$3"),fc=og.trustedTypes,nb=fc?fc.createPolicy("lit-html",{createHTML:i(e=>e,"createHTML")}):void 0,K2="$lit$",Vo=`lit$${Math.random().toFixed(9).slice(2)}$`,G2="?"+Vo,kD=`<${G2}>`,qi=document,ml=i(()=>qi.createComment(""),"c$3"),pl=i(e=>e===null||typeof e!="object"&&typeof e!="function","a$1"),ig=Array.isArray,xD=i(e=>ig(e)||typeof e?.[Symbol.iterator]=="function","d$1"),wf=`[ 	
\f\r]`,Oa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ob=/-->/g,ib=/>/g,Ci=RegExp(`>|${wf}(?:([^\\s"'>=/]+)(${wf}*=${wf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sb=/'/g,ab=/"/g,H2=/^(?:script|style|textarea|title)$/i,DD=i(e=>(r,...t)=>({_$litType$:e,strings:r,values:t}),"x"),CD=DD(1),bn=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),lb=new WeakMap,Ni=qi.createTreeWalker(qi,129);function Z2(e,r){if(!ig(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return nb!==void 0?nb.createHTML(r):r}i(Z2,"V");const ED=i((e,r)=>{const t=e.length-1,n=[];let o,s=r===2?"<svg>":r===3?"<math>":"",a=Oa;for(let l=0;l<t;l++){const u=e[l];let d,f,h=-1,g=0;for(;g<u.length&&(a.lastIndex=g,f=a.exec(u),f!==null);)g=a.lastIndex,a===Oa?f[1]==="!--"?a=ob:f[1]!==void 0?a=ib:f[2]!==void 0?(H2.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=Ci):f[3]!==void 0&&(a=Ci):a===Ci?f[0]===">"?(a=o??Oa,h=-1):f[1]===void 0?h=-2:(h=a.lastIndex-f[2].length,d=f[1],a=f[3]===void 0?Ci:f[3]==='"'?ab:sb):a===ab||a===sb?a=Ci:a===ob||a===ib?a=Oa:(a=Ci,o=void 0);const m=a===Ci&&e[l+1].startsWith("/>")?" ":"";s+=a===Oa?u+kD:h>=0?(n.push(d),u.slice(0,h)+K2+u.slice(h)+Vo+m):u+Vo+(h===-2?l:m)}return[Z2(e,s+(e[t]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),n]},"N");class bl{static{i(this,"S")}constructor({strings:r,_$litType$:t},n){let o;this.parts=[];let s=0,a=0;const l=r.length-1,u=this.parts,[d,f]=ED(r,t);if(this.el=bl.createElement(d,n),Ni.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Ni.nextNode())!==null&&u.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(K2)){const g=f[a++],m=o.getAttribute(h).split(Vo),p=/([.?@])?(.*)/.exec(g);u.push({type:1,index:s,name:p[2],strings:m,ctor:p[1]==="."?SD:p[1]==="?"?MD:p[1]==="@"?FD:Xc}),o.removeAttribute(h)}else h.startsWith(Vo)&&(u.push({type:6,index:s}),o.removeAttribute(h));if(H2.test(o.tagName)){const h=o.textContent.split(Vo),g=h.length-1;if(g>0){o.textContent=fc?fc.emptyScript:"";for(let m=0;m<g;m++)o.append(h[m],ml()),Ni.nextNode(),u.push({type:2,index:++s});o.append(h[g],ml())}}}else if(o.nodeType===8)if(o.data===G2)u.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Vo,h+1))!==-1;)u.push({type:7,index:s}),h+=Vo.length-1}s++}}static createElement(r,t){const n=qi.createElement("template");return n.innerHTML=r,n}}function Ws(e,r,t=e,n){if(r===bn)return r;let o=n!==void 0?t._$Co?.[n]:t._$Cl;const s=pl(r)?void 0:r._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(r=Ws(e,o._$AS(e,r.values),o,n)),r}i(Ws,"M$2");class AD{static{i(this,"R")}constructor(r,t){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:t},parts:n}=this._$AD,o=(r?.creationScope??qi).importNode(t,!0);Ni.currentNode=o;let s=Ni.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let d;u.type===2?d=new Yc(s,s.nextSibling,this,r):u.type===1?d=new u.ctor(s,u.name,u.strings,this,r):u.type===6&&(d=new TD(s,this,r)),this._$AV.push(d),u=n[++l]}a!==u?.index&&(s=Ni.nextNode(),a++)}return Ni.currentNode=qi,o}p(r){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(r,n,t),t+=n.strings.length-2):n._$AI(r[t])),t++}}let Yc=class J2{static{i(this,"k")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,t,n,o){this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=r,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&r?.nodeType===11&&(r=t.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,t=this){r=Ws(this,r,t),pl(r)?r===oe||r==null||r===""?(this._$AH!==oe&&this._$AR(),this._$AH=oe):r!==this._$AH&&r!==bn&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):xD(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==oe&&pl(this._$AH)?this._$AA.nextSibling.data=r:this.T(qi.createTextNode(r)),this._$AH=r}$(r){const{values:t,_$litType$:n}=r,o=typeof n=="number"?this._$AC(r):(n.el===void 0&&(n.el=bl.createElement(Z2(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const s=new AD(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(r){let t=lb.get(r.strings);return t===void 0&&lb.set(r.strings,t=new bl(r)),t}k(r){ig(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const s of r)o===t.length?t.push(n=new J2(this.O(ml()),this.O(ml()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(r=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);r!==this._$AB;){const n=tb(r).nextSibling;tb(r).remove(),r=n}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}};class Xc{static{i(this,"H")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,t,n,o,s){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=r,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=oe}_$AI(r,t=this,n,o){const s=this.strings;let a=!1;if(s===void 0)r=Ws(this,r,t,0),a=!pl(r)||r!==this._$AH&&r!==bn,a&&(this._$AH=r);else{const l=r;let u,d;for(r=s[0],u=0;u<s.length-1;u++)d=Ws(this,l[n+u],t,u),d===bn&&(d=this._$AH[u]),a||=!pl(d)||d!==this._$AH[u],d===oe?r=oe:r!==oe&&(r+=(d??"")+s[u+1]),this._$AH[u]=d}a&&!o&&this.j(r)}j(r){r===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class SD extends Xc{static{i(this,"I")}constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===oe?void 0:r}}class MD extends Xc{static{i(this,"L")}constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==oe)}}class FD extends Xc{static{i(this,"z")}constructor(r,t,n,o,s){super(r,t,n,o,s),this.type=5}_$AI(r,t=this){if((r=Ws(this,r,t,0)??oe)===bn)return;const n=this._$AH,o=r===oe&&n!==oe||r.capture!==n.capture||r.once!==n.once||r.passive!==n.passive,s=r!==oe&&(n===oe||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class TD{static{i(this,"Z")}constructor(r,t,n){this.element=r,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(r){Ws(this,r)}}const ND={I:Yc},PD=og.litHtmlPolyfillSupport;PD?.(bl,Yc),(og.litHtmlVersions??=[]).push("3.3.2");const ID=i((e,r,t)=>{const n=t?.renderBefore??r;let o=n._$litPart$;if(o===void 0){const s=t?.renderBefore??null;n._$litPart$=o=new Yc(r.insertBefore(ml(),s),s,void 0,t??{})}return o._$AI(e),o},"D");const sg=globalThis;let nl=class extends Ds{static{i(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=ID(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return bn}};nl._$litElement$=!0,nl.finalized=!0,sg.litElementHydrateSupport?.({LitElement:nl});const OD=sg.litElementPolyfillSupport;OD?.({LitElement:nl});(sg.litElementVersions??=[]).push("4.2.2");function ag({onElement:e,toValue:r,forCssVar:t}){e.style.setProperty(String(t.name),String(r))}i(ag,"setCssVarValue");function BD({onElement:e,forCssVar:r,includeCascade:t}){return(t?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(r.name)).trim()}i(BD,"readCssVarValue");var Ks;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(Ks||(Ks={}));var ub;(function(e){e.Space="+",e.Comma="#"})(ub||(ub={}));function eo(e){return cr(e,(t,n)=>{RD(t);const o=n,s=F.isObject(o)&&!(o instanceof qo),a=F.isString(o)||F.isNumber(o)||o instanceof qo?String(o):String(o.default),l=F.isString(o)||F.isNumber(o)||o instanceof qo?String(o):String("initialValue"in o&&o.initialValue||o.default),u=Me(Ct({value:t.replace(/^-+/,""),prefix:"--"})),d={name:u,value:W2`var(${u}, ${Me(a)})`,syntax:F.isString(o)||F.isNumber(o)||o instanceof qo?Ks.Any:V0("syntax"in o?o.syntax:void 0),default:a},f=String(d.name);if(!l)throw new Error(`Initial value for CSS var ${f} cannot be empty.`);return s&&q2.registerProperty({inherits:!0,name:f,initialValue:l,syntax:d.syntax})&&globalThis.document?.documentElement&&ag({forCssVar:d,onElement:globalThis.document.documentElement,toValue:a}),d})}i(eo,"defineCssVars");function RD(e){try{if(F.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(r){throw new Error(Xi("Invalid CSS var name.",r,`Got '${x(e)}'`))}}i(RD,"assertValidCssVarName");function V0(e){return e?F.isString(e)?e:e.union?e.union.map(r=>V0(r)).join(" | "):e.list?`${V0(e.list.values)}${e.list.separator}`:e.raw:Ks.Any}i(V0,"createSyntaxString");const Be=eo({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),LD={nav:{hover:{background:Be["element-book-nav-hover-background-color"],foreground:Be["element-book-nav-hover-foreground-color"]},active:{background:Be["element-book-nav-active-background-color"],foreground:Be["element-book-nav-active-foreground-color"]},selected:{background:Be["element-book-nav-selected-background-color"],foreground:Be["element-book-nav-selected-foreground-color"]}},accent:{icon:Be["element-book-accent-icon-color"]},page:{background:Be["element-book-page-background-color"],backgroundFaint1:Be["element-book-page-background-faint-level-1-color"],backgroundFaint2:Be["element-book-page-background-faint-level-2-color"],foreground:Be["element-book-page-foreground-color"],foregroundFaint1:Be["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Be["element-book-page-foreground-faint-level-2-color"]}};function jD(e,r){Y2(e,r,LD)}i(jD,"setThemeCssVars");function q0(e){return F.hasKey(e,"_$cssResult$")}i(q0,"isCssResult");function cb(e){return F.hasKeys(e,["name","value","default"])&&F.isString(e.default)&&q0(e.name)&&q0(e.value)}i(cb,"isCssVarDefinition");function Y2(e,r,t){Object.entries(r).forEach(([n,o])=>{const s=t[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(q0(o)){if(!cb(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);ag({forCssVar:s,onElement:e,toValue:String(o)})}else{if(cb(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Y2(e,o,s)}})}i(Y2,"recursiveSetThemeCssVars");function Ga(e,r){let t=e.length,n,o,s=!1,a=!1;Array.isArray(e[0])?n=e:(n=[e],t=n.length,s=!0),Array.isArray(r[0])?o=r:(o=r.length>0?r.map(f=>[f]):[[]],a=!0);let l=o[0].length,u=o[0].map((f,h)=>o.map(g=>g[h])),d=n.map(f=>u.map(h=>{let g=0;if(!Array.isArray(f)){for(let m of h)g+=f*m;return g}for(let m=0;m<f.length;m++)g+=f[m]*(h[m]||0);return g}));return t===1&&s&&(d=d[0]),l===1&&a?t===1&&s?d[0]:d.map(f=>f[0]):d}i(Ga,"multiplyMatrices");function $f(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]}i($f,"dot3");function $r(e,r,t=[0,0,0]){const n=$f(e,r[0]),o=$f(e,r[1]),s=$f(e,r[2]);return t[0]=n,t[1]=o,t[2]=s,t}i($r,"multiply_v3_m3x3");function da(e){return Ho(e)==="string"}i(da,"isString");function Ho(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}i(Ho,"type");function lg(e,{precision:r=16,unit:t}){return Le(e)?"none":(e=+ug(e,r),e+(t??""))}i(lg,"serializeNumber");function Le(e){return e===null}i(Le,"isNone");function Sr(e){return Le(e)?0:e}i(Sr,"skipNone");function ug(e,r){if(e===0)return 0;let t=~~e,n=0;t&&r&&(n=~~Math.log10(Math.abs(t))+1);const o=10**(r-n);return Math.floor(e*o+.5)/o}i(ug,"toPrecision");function vl(e,r,t){return isNaN(e)?r:isNaN(r)?e:e+(r-e)*t}i(vl,"interpolate");function X2(e,r,t){return(t-e)/(r-e)}i(X2,"interpolateInv");function W0(e,r,t){return!e||!r||e===r||e[0]===r[0]&&e[1]===r[1]||isNaN(t)||t===null?t:vl(r[0],r[1],X2(e[0],e[1],t))}i(W0,"mapRange");function Qc(e,r,t){return Math.max(Math.min(t,r),e)}i(Qc,"clamp$1");function ed(e,r){return Math.sign(e)===Math.sign(r)?e:-e}i(ed,"copySign");function Mr(e,r){return ed(Math.abs(e)**r,e)}i(Mr,"spow");function cg(e,r){return r===0?0:e/r}i(cg,"zdiv");function Q2(e,r,t=0,n=e.length){for(;t<n;){const o=t+n>>1;e[o]<r?t=o+1:n=o}return t}i(Q2,"bisectLeft");function Gs(e,r){if(e instanceof r)return!0;const t=r.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===t)return!0;if(!o||o==="Object")return!1;e=n}return!1}i(Gs,"isInstance");var _D=Object.freeze({__proto__:null,bisectLeft:Q2,clamp:Qc,copySign:ed,interpolate:vl,interpolateInv:X2,isInstance:Gs,isNone:Le,isString:da,mapRange:W0,multiplyMatrices:Ga,multiply_v3_m3x3:$r,serializeNumber:lg,skipNone:Sr,spow:Mr,toPrecision:ug,type:Ho,zdiv:cg});class UD{static{i(this,"Hooks")}add(r,t,n){if(typeof arguments[0]!="string"){for(var r in arguments[0])this.add(r,arguments[0][r],arguments[1]);return}(Array.isArray(r)?r:[r]).forEach(function(o){this[o]=this[o]||[],t&&this[o][n?"unshift":"push"](t)},this)}run(r,t){this[r]=this[r]||[],this[r].forEach(function(n){n.call(t&&t.context?t.context:t,t)})}}const ei=new UD;var Yt={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:i(function(r){this.verbose&&globalThis?.console?.warn?.(r)},"warn")};let db=class{static{i(this,"Type")}type;coordMeta;coordRange;range;constructor(r,t){if(typeof r=="object"&&(this.coordMeta=r),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof r=="string"){let n=r.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${r} as a type definition.`);this.type=n.groups.type;let{min:o,max:s}=n.groups;(o||s)&&(this.range=[+o,+s])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(r){if(this.type==="<angle>")return r;let t=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),W0(t,n,r)}serialize(r,t){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return r=W0(this.coordRange,n,r),lg(r,{unit:o,precision:t})}toString(){let r=this.type;if(this.range){let[t="",n=""]=this.range;r+=`[${t},${n}]`}return r}percentageRange(r=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*r,t[1]*r]}static get(r,t){return Gs(r,this)?r:new this(r,t)}};const kf=Symbol("instance");class hc{static{i(this,"Format")}type;name;spaceCoords;coords;id;alpha;constructor(r,t=r.space){r[kf]=this,this.type="function",this.name="color",Object.assign(this,r),this.space=t,this.type!=="custom"&&(this.spaceCoords=Object.values(t.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let s=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(a=>db.get(a,s))}))}serializeCoords(r,t,n){return n=r.map((o,s)=>db.get(n?.[s]??this.coords[s][0],this.spaceCoords[s])),r.map((o,s)=>n[s].serialize(o,t))}coerceCoords(r,t){return Object.entries(this.space.coords).map(([n,o],s)=>{let a=r[s];if(Le(a)||isNaN(a))return a;let l=t[s],u=this.coords[s].find(d=>d.type==l);if(!u){let d=o.name||n;throw new TypeError(`${l??a?.raw??a} not allowed for ${d} in ${this.name}()`)}return a=u.resolve(a),u.range&&(t[s]=u.toString()),a})}canSerialize(){return this.type==="function"||this.serialize}parse(r){return null}static get(r,...t){return!r||Gs(r,this)?r:r[kf]?r[kf]:new hc(r,...t)}}const Dt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function K0(e){return Array.isArray(e)?e:Dt[e]}i(K0,"getWhite");function gc(e,r,t,n={}){if(e=K0(e),r=K0(r),!e||!r)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!r?"/":""}${r?"":"to"}`);if(e===r)return t;let o={W1:e,W2:r,XYZ:t,options:n};if(ei.run("chromatic-adaptation-start",o),o.M||(o.W1===Dt.D65&&o.W2===Dt.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===Dt.D50&&o.W2===Dt.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ei.run("chromatic-adaptation-end",o),o.M)return $r(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}i(gc,"adapt$2");function ew(e,r){let t={str:String(e)?.trim(),options:r};if(ei.run("parse-start",t),t.color)return t.color;t.parsed=VD(t.str);let n,o=t.options?t.options.parseMeta??t.options.meta:null;if(t.parsed){let s=t.parsed.name,a,l,u=t.parsed.args,d=u.map((g,m)=>t.parsed.argMeta[m]?.type);if(s==="color"){let g=u.shift();d.shift();let m=g.startsWith("--")?g.substring(2):`--${g}`,p=[g,m];if(a=Z.findFormat({name:s,id:p,type:"function"}),!a){let v,w=g in Z.registry?g:m;if(w in Z.registry){let k=Z.registry[w].formats?.color?.id;k&&(v=`Did you mean ${e.replace("color("+g,"color("+k)}?`)}throw new TypeError(`Cannot parse ${t.str}. `+(v??"Missing a plugin?"))}l=a.space,a.id.startsWith("--")&&!g.startsWith("--")&&Yt.warn(`${l.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${g}).`),g.startsWith("--")&&!a.id.startsWith("--")&&Yt.warn(`${l.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${g}).`)}else a=Z.findFormat({name:s,type:"function"}),l=a.space;o&&Object.assign(o,{format:a,formatId:a.name,types:d,commas:t.parsed.commas});let f=1;t.parsed.lastAlpha&&(f=t.parsed.args.pop(),o&&(o.alphaType=d.pop()));let h=a.coords.length;if(u.length!==h)throw new TypeError(`Expected ${h} coordinates for ${l.id} in ${t.str}), got ${u.length}`);u=a.coerceCoords(u,d),n={spaceId:l.id,coords:u,alpha:f}}else e:for(let s of Z.all)for(let a in s.formats){let l=s.formats[a];if(l.type!=="custom"||l.test&&!l.test(t.str))continue;let u=s.getFormat(l),d=u.parse(t.str);if(d){o&&Object.assign(o,{format:u,formatId:a}),n=d;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Le(n.alpha)?n.alpha:n.alpha===void 0?1:Qc(0,n.alpha,1),n}i(ew,"parse$1");const rw={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},mc={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(rw).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function zD(e){let r={},t=e.match(mc.unitValue)?.[0],n=r.raw=e;return t?(r.type=t==="%"?"<percentage>":"<angle>",r.unit=t,r.unitless=Number(n.slice(0,-t.length)),n=r.unitless*rw[t]):mc.number.test(n)?(n=Number(n),r.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,r.type="<number>"):r.type="<ident>",{value:n,meta:r}}i(zD,"parseArgument");function VD(e){if(!e)return;e=e.trim();let r=e.match(mc.function);if(r){let t=[],n=[],o=!1,s=r[1].toLowerCase(),a=r[2].replace(mc.singleArgument,(l,u)=>{let{value:d,meta:f}=zD(u);return(l.startsWith("/")||s!=="color"&&t.length===3)&&(o=!0),t.push(d),n.push(f),""});return{name:s,args:t,argMeta:n,lastAlpha:o,commas:a.includes(","),rawName:r[1],rawArgs:r[2]}}}i(VD,"parseFunction");function ce(e,r){if(Array.isArray(e))return e.map(n=>ce(n,r));if(!e)throw new TypeError("Empty color reference");da(e)&&(e=ew(e,r));let t=e.space||e.spaceId;return typeof t=="string"&&(e.space=Z.get(t)),e.alpha===void 0&&(e.alpha=1),e}i(ce,"getColor");const qD=75e-6;class Z{static{i(this,"ColorSpace")}constructor(r){this.id=r.id,this.name=r.name,this.base=r.base?Z.get(r.base):null,this.aliases=r.aliases,this.base&&(this.fromBase=r.fromBase,this.toBase=r.toBase);let t=r.coords??this.base.coords;for(let o in t)"name"in t[o]||(t[o].name=o);this.coords=t;let n=r.white??this.base.white??"D65";this.white=K0(n),this.formats=r.formats??{};for(let o in this.formats){let s=this.formats[o];s.type||="function",s.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:r.cssId||this.id}),r.gamutSpace?this.gamutSpace=r.gamutSpace==="self"?this:Z.get(r.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,s)=>!0),this.referred=r.referred,Object.defineProperty(this,"path",{value:WD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ei.run("colorspace-init-end",this)}inGamut(r,{epsilon:t=qD}={}){if(!this.equals(this.gamutSpace))return r=this.to(this.gamutSpace,r),this.gamutSpace.inGamut(r,{epsilon:t});let n=Object.values(this.coords);return r.every((o,s)=>{let a=n[s];if(a.type!=="angle"&&a.range){if(Le(o))return!0;let[l,u]=a.range;return(l===void 0||o>=l-t)&&(u===void 0||o<=u+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(r=>!("range"in r))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let r in this.coords)if(this.coords[r].type==="angle")return!0;return!1}getFormat(r){if(!r)return null;r==="default"?r=Object.values(this.formats)[0]:typeof r=="string"&&(r=this.formats[r]);let t=hc.get(r,this);return t!==r&&r.name in this.formats&&(this.formats[r.name]=t),t}equals(r){return r?this===r||this.id===r||this.id===r.id:!1}to(r,t){if(arguments.length===1){const l=ce(r);[r,t]=[l.space,l.coords]}if(r=Z.get(r),this.equals(r))return t;t=t.map(l=>Le(l)?0:l);let n=this.path,o=r.path,s,a;for(let l=0;l<n.length&&n[l].equals(o[l]);l++)s=n[l],a=l;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${r}: no connection space was found`);for(let l=n.length-1;l>a;l--)t=n[l].toBase(t);for(let l=a+1;l<o.length;l++)t=o[l].fromBase(t);return t}from(r,t){if(arguments.length===1){const n=ce(r);[r,t]=[n.space,n.coords]}return r=Z.get(r),r.to(this,t)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let r=[];for(let t in this.coords){let n=this.coords[t],o=n.range||n.refRange;r.push(o?.min??0)}return r}static registry={};static get all(){return[...new Set(Object.values(Z.registry))]}static register(r,t){if(arguments.length===1&&(t=arguments[0],r=t.id),t=this.get(t),this.registry[r]&&this.registry[r]!==t)throw new Error(`Duplicate color space registration: '${r}'`);if(this.registry[r]=t,arguments.length===1&&t.aliases)for(let n of t.aliases)this.register(n,t);return t}static get(r,...t){if(!r||Gs(r,this))return r;if(Ho(r)==="string"){let o=Z.registry[r.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${r}"`);return o}if(t.length)return Z.get(...t);throw new TypeError(`${r} is not a valid color space`)}static findFormat(r,t=Z.all){if(!r)return null;typeof r=="string"&&(r={name:r});for(let n of t)for(let[o,s]of Object.entries(n.formats)){s.name??=o,s.type??="function";let a=(!r.name||s.name===r.name)&&(!r.type||s.type===r.type);if(r.id){let l=s.ids||[s.id],u=Array.isArray(r.id)?r.id:[r.id];a&&=u.some(d=>l.includes(d))}if(a){let l=hc.get(s,n);return l!==s&&(n.formats[s.name]=l),l}}return null}static resolveCoord(r,t){let n=Ho(r),o,s;if(n==="string"?r.includes(".")?[o,s]=r.split("."):[o,s]=[,r]:Array.isArray(r)?[o,s]=r:(o=r.space,s=r.coordId),o=Z.get(o),o||(o=t),!o)throw new TypeError(`Cannot resolve coordinate reference ${r}: No color space specified and relative references are not allowed here`);if(n=Ho(s),n==="number"||n==="string"&&s>=0){let u=Object.entries(o.coords)[s];if(u)return{space:o,id:u[0],index:s,...u[1]}}o=Z.get(o);let a=s.toLowerCase(),l=0;for(let u in o.coords){let d=o.coords[u];if(u.toLowerCase()===a||d.name?.toLowerCase()===a)return{space:o,id:u,index:l,...d};l++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function WD(e){let r=[e];for(let t=e;t=t.base;)r.push(t);return r}i(WD,"getPath");var st=new Z({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class wt extends Z{static{i(this,"RGBColorSpace")}constructor(r){r.coords||(r.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),r.base||(r.base=st),r.toXYZ_M&&r.fromXYZ_M&&(r.toBase??=t=>{let n=$r(t,r.toXYZ_M);return this.white!==this.base.white&&(n=gc(this.white,this.base.white,n)),n},r.fromBase??=t=>(t=gc(this.base.white,this.white,t),$r(t,r.fromXYZ_M))),r.referred??="display",super(r)}}function tw(e,r={}){if(Array.isArray(e))return e.map(u=>tw(u,r));let{cssProperty:t="background-color",element:n,...o}=r,s=null;try{return ce(e,o)}catch(u){s=u}let{CSS:a,getComputedStyle:l}=globalThis;if(da(e)&&n&&a&&l&&a.supports(t,e)){let u=n.style[t];e!==u&&(n.style[t]=e);let d=l(n).getPropertyValue(t);if(e!==u&&(n.style[t]=u),d!==e)try{return ce(d,o)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return r.errorMeta&&(r.errorMeta.error=s),null}i(tw,"tryColor");function zl(e,r){e=ce(e);let t=Z.get(r,r?.space),n=r?.precision,o;return!t||e.space.equals(t)?o=e.coords.slice():o=t.from(e),n===void 0?o:o.map(s=>ug(s,n))}i(zl,"getAll");function Gt(e,r){if(e=ce(e),r==="alpha")return e.alpha??1;let{space:t,index:n}=Z.resolveCoord(r,e.space);return zl(e,t)[n]}i(Gt,"get");function dg(e,r,t,n){return e=ce(e),Array.isArray(r)&&([r,t,n]=[e.space,r,t]),r=Z.get(r),e.coords=r===e.space?t.slice():r.to(e.space,t),n!==void 0&&(e.alpha=n),e}i(dg,"setAll");dg.returns="color";function Do(e,r,t){if(e=ce(e),arguments.length===2&&Ho(arguments[1])==="object"){let n=arguments[1];for(let o in n)Do(e,o,n[o])}else if(typeof t=="function"&&(t=t(Gt(e,r))),r==="alpha")e.alpha=t;else{let{space:n,index:o}=Z.resolveCoord(r,e.space),s=zl(e,n);s[o]=t,dg(e,n,s)}return e}i(Do,"set");Do.returns="color";var fg=new Z({id:"xyz-d50",name:"XYZ D50",white:"D50",base:st,fromBase:i(e=>gc(st.white,"D50",e),"fromBase"),toBase:i(e=>gc("D50",st.white,e),"toBase")});const KD=216/24389,fb=24/116,vu=24389/27;let xf=Dt.D50;var Ht=new Z({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xf,base:fg,fromBase(e){let t=e.map((a,l)=>a/xf[l]).map(a=>a>KD?Math.cbrt(a):(vu*a+16)/116),n=116*t[1]-16,o=500*(t[0]-t[1]),s=200*(t[1]-t[2]);return[n,o,s]},toBase(e){let[r,t,n]=e,o=[];return o[1]=(r+16)/116,o[0]=t/500+o[1],o[2]=o[1]-n/200,[o[0]>fb?Math.pow(o[0],3):(116*o[0]-16)/vu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/vu,o[2]>fb?Math.pow(o[2],3):(116*o[2]-16)/vu].map((a,l)=>a*xf[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function vn(e){return typeof e!="number"?e:(e%360+360)%360}i(vn,"constrain");function nw(e,r){let[t,n]=r,o=Le(t),s=Le(n);if(o&&s)return[t,n];if(o?t=n:s&&(n=t),e==="raw")return r;t=vn(t),n=vn(n);let a=n-t;return e==="increasing"?a<0&&(n+=360):e==="decreasing"?a>0&&(t+=360):e==="longer"?-180<a&&a<180&&(a>0?t+=360:n+=360):e==="shorter"&&(a>180?t+=360:a<-180&&(n+=360)),[t,n]}i(nw,"adjust");var Xt=new Z({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ht,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,u=l[1]-l[0];this.ε=u/1e5}let[r,t,n]=e,o=Math.abs(t)<this.ε&&Math.abs(n)<this.ε,s=o?null:vn(Math.atan2(n,t)*180/Math.PI),a=o?0:Math.sqrt(t**2+n**2);return[r,a,s]},toBase(e){let[r,t,n]=e,o=null,s=null;return Le(n)||(t=t<0?0:t,o=t*Math.cos(n*Math.PI/180),s=t*Math.sin(n*Math.PI/180)),[r,o,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const hb=25**7,pc=Math.PI,gb=180/pc,bs=pc/180;function mb(e){const r=e*e;return r*r*r*e}i(mb,"pow7");function ow(e,r,{kL:t=1,kC:n=1,kH:o=1}={}){[e,r]=ce([e,r]);let[s,a,l]=Ht.from(e),u=Xt.from(Ht,[s,a,l])[1],[d,f,h]=Ht.from(r),g=Xt.from(Ht,[d,f,h])[1];u<0&&(u=0),g<0&&(g=0);let m=(u+g)/2,p=mb(m),v=.5*(1-Math.sqrt(p/(p+hb))),w=(1+v)*a,k=(1+v)*f,D=Math.sqrt(w**2+l**2),A=Math.sqrt(k**2+h**2),I=w===0&&l===0?0:Math.atan2(l,w),L=k===0&&h===0?0:Math.atan2(h,k);I<0&&(I+=2*pc),L<0&&(L+=2*pc),I*=gb,L*=gb;let Y=d-s,re=A-D,te=L-I,X=I+L,pe=Math.abs(te),we;D*A===0?we=0:pe<=180?we=te:te>180?we=te-360:te<-180?we=te+360:Yt.warn("the unthinkable has happened");let Fe=2*Math.sqrt(A*D)*Math.sin(we*bs/2),ar=(s+d)/2,Ze=(D+A)/2,St=mb(Ze),Gr;D*A===0?Gr=X:pe<=180?Gr=X/2:X<360?Gr=(X+360)/2:Gr=(X-360)/2;let Wn=(ar-50)**2,no=1+.015*Wn/Math.sqrt(20+Wn),an=1+.045*Ze,tt=1;tt-=.17*Math.cos((Gr-30)*bs),tt+=.24*Math.cos(2*Gr*bs),tt+=.32*Math.cos((3*Gr+6)*bs),tt-=.2*Math.cos((4*Gr-63)*bs);let Ge=1+.015*Ze*tt,Lr=30*Math.exp(-1*((Gr-275)/25)**2),ln=2*Math.sqrt(St/(St+hb)),ht=-1*Math.sin(2*Lr*bs)*ln,un=(Y/(t*no))**2;return un+=(re/(n*an))**2,un+=(Fe/(o*Ge))**2,un+=ht*(re/(n*an))*(Fe/(o*Ge)),Math.sqrt(un)}i(ow,"deltaE2000");const GD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],HD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],ZD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Zo=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var On=new Z({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:st,fromBase(e){let r=$r(e,GD);return r[0]=Math.cbrt(r[0]),r[1]=Math.cbrt(r[1]),r[2]=Math.cbrt(r[2]),$r(r,ZD,r)},toBase(e){let r=$r(e,Zo);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,$r(r,HD,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function G0(e,r){[e,r]=ce([e,r]);let[t,n,o]=On.from(e),[s,a,l]=On.from(r),u=t-s,d=n-a,f=o-l;return Math.sqrt(u**2+d**2+f**2)}i(G0,"deltaEOK");const JD=75e-6;function Ri(e,r,{epsilon:t=JD}={}){e=ce(e),r||(r=e.space),r=Z.get(r);let n=e.coords;return r!==e.space&&(n=r.from(e)),r.inGamut(n,{epsilon:t})}i(Ri,"inGamut$1");function Hs(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}i(Hs,"clone");function iw(e,r,t="lab"){t=Z.get(t);let n=t.from(e),o=t.from(r);return Math.sqrt(n.reduce((s,a,l)=>{let u=o[l];return Le(a)||Le(u)?s:s+(u-a)**2},0))}i(iw,"distance");function YD(e,r){return iw(e,r,"lab")}i(YD,"deltaE76");const XD=Math.PI,pb=XD/180;function QD(e,r,{l:t=2,c:n=1}={}){[e,r]=ce([e,r]);let[o,s,a]=Ht.from(e),[,l,u]=Xt.from(Ht,[o,s,a]),[d,f,h]=Ht.from(r),g=Xt.from(Ht,[d,f,h])[1];l<0&&(l=0),g<0&&(g=0);let m=o-d,p=l-g,v=s-f,w=a-h,k=v**2+w**2-p**2,D=.511;o>=16&&(D=.040975*o/(1+.01765*o));let A=.0638*l/(1+.0131*l)+.638,I;Le(u)&&(u=0),u>=164&&u<=345?I=.56+Math.abs(.2*Math.cos((u+168)*pb)):I=.36+Math.abs(.4*Math.cos((u+35)*pb));let L=Math.pow(l,4),Y=Math.sqrt(L/(L+1900)),re=A*(Y*I+1-Y),te=(m/(t*D))**2;return te+=(p/(n*A))**2,te+=k/re**2,Math.sqrt(te)}i(QD,"deltaECMC");const bb=203;var hg=new Z({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:st,fromBase(e){return e.map(r=>r*bb)},toBase(e){return e.map(r=>r/bb)}});const yu=1.15,wu=.66,vb=2610/2**14,e8=2**14/2610,yb=3424/2**12,wb=2413/2**7,$b=2392/2**7,r8=1.7*2523/2**5,kb=2**5/(1.7*2523),$u=-.56,Df=16295499532821565e-27,t8=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],n8=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],o8=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],i8=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var sw=new Z({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:hg,fromBase(e){let[r,t,n]=e,o=yu*r-(yu-1)*n,s=wu*t-(wu-1)*r,l=$r([o,s,n],t8).map(function(g){let m=yb+wb*Mr(g/1e4,vb),p=1+$b*Mr(g/1e4,vb);return Mr(m/p,r8)}),[u,d,f]=$r(l,o8);return[(1+$u)*u/(1+$u*u)-Df,d,f]},toBase(e){let[r,t,n]=e,o=(r+Df)/(1+$u-$u*(r+Df)),a=$r([o,t,n],i8).map(function(g){let m=yb-Mr(g,kb),p=$b*Mr(g,kb)-wb;return 1e4*Mr(m/p,e8)}),[l,u,d]=$r(a,n8),f=(l+(yu-1)*d)/yu,h=(u+(wu-1)*f)/wu;return[f,h,d]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),H0=new Z({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:sw,fromBase:Xt.fromBase,toBase:Xt.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function s8(e,r){[e,r]=ce([e,r]);let[t,n,o]=H0.from(e),[s,a,l]=H0.from(r),u=t-s,d=n-a;Le(o)&&Le(l)?(o=0,l=0):Le(o)?o=l:Le(l)&&(l=o);let f=o-l,h=2*Math.sqrt(n*a)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(u**2+d**2+h**2)}i(s8,"deltaEJz");const aw=3424/4096,lw=2413/128,uw=2392/128,xb=2610/16384,a8=2523/32,l8=16384/2610,Db=32/2523,u8=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],c8=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],d8=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],f8=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Z0=new Z({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:hg,fromBase(e){let r=$r(e,u8);return h8(r)},toBase(e){let r=g8(e);return $r(r,f8)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function h8(e){let r=e.map(function(t){let n=aw+lw*(t/1e4)**xb,o=1+uw*(t/1e4)**xb;return(n/o)**a8});return $r(r,c8)}i(h8,"LMStoICtCp");function g8(e){return $r(e,d8).map(function(n){let o=Math.max(n**Db-aw,0),s=lw-uw*n**Db;return 1e4*(o/s)**l8})}i(g8,"ICtCptoLMS");function m8(e,r){[e,r]=ce([e,r]);let[t,n,o]=Z0.from(e),[s,a,l]=Z0.from(r);return 720*Math.sqrt((t-s)**2+.25*(n-a)**2+(o-l)**2)}i(m8,"deltaEITP");function p8(e,r){[e,r]=ce([e,r]);let t=2,[n,o,s]=On.from(e),[a,l,u]=On.from(r),d=n-a,f=t*(o-l),h=t*(s-u);return Math.sqrt(d**2+f**2+h**2)}i(p8,"deltaEOK2");const b8=Dt.D65,cw=.42,Cb=1/cw,Cf=2*Math.PI,dw=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],v8=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],y8=[[460,451,288],[460,-891,-261],[460,-220,-6300]],w8={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ai={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},$8=180/Math.PI,Eb=Math.PI/180;function fw(e,r){return e.map(n=>{const o=Mr(r*Math.abs(n)*.01,cw);return 400*ed(o,n)/(o+27.13)})}i(fw,"adapt$1");function k8(e,r){const t=100/r*27.13**Cb;return e.map(n=>{const o=Math.abs(n);return ed(t*Mr(o/(400-o),Cb),n)})}i(k8,"unadapt");function x8(e){let r=vn(e);r<=Ai.h[0]&&(r+=360);const t=Q2(Ai.h,r)-1,[n,o]=Ai.h.slice(t,t+2),[s,a]=Ai.e.slice(t,t+2),l=Ai.H[t],u=(r-n)/s;return l+100*u/(u+(o-r)/a)}i(x8,"hueQuadrature");function D8(e){let r=(e%400+400)%400;const t=Math.floor(.01*r);r=r%100;const[n,o]=Ai.h.slice(t,t+2),[s,a]=Ai.e.slice(t,t+2);return vn((r*(a*n-s*o)-100*n*a)/(r*(a-s)-100*a))}i(D8,"invHueQuadrature");function hw(e,r,t,n,o){const s={};s.discounting=o,s.refWhite=e,s.surround=n;const a=e.map(w=>w*100);s.la=r,s.yb=t;const l=a[1],u=$r(a,dw);let d=w8[s.surround];const f=d[0];s.c=d[1],s.nc=d[2];const g=(1/(5*s.la+1))**4;s.fl=g*s.la+.1*(1-g)*(1-g)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/l,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const m=Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(w=>vl(1,l/w,m)),s.dRgbInv=s.dRgb.map(w=>1/w);const p=u.map((w,k)=>w*s.dRgb[k]),v=fw(p,s.fl);return s.aW=s.nbb*(2*v[0]+v[1]+.05*v[2]),s}i(hw,"environment");const Ab=hw(b8,64/Math.PI*.2,20,"average",!1);function J0(e,r){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let t=0;e.h!==void 0?t=vn(e.h)*Eb:t=D8(e.H)*Eb;const n=Math.cos(t),o=Math.sin(t);let s=0;e.J!==void 0?s=Mr(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*r.c*e.Q/((r.aW+4)*r.flRoot));let a=0;e.C!==void 0?a=e.C/s:e.M!==void 0?a=e.M/r.flRoot/s:e.s!==void 0&&(a=4e-4*e.s**2*(r.aW+4)/r.c);const l=Mr(a*Math.pow(1.64-Math.pow(.29,r.n),-.73),10/9),u=.25*(Math.cos(t+2)+3.8),d=r.aW*Mr(s,2/r.c/r.z),f=5e4/13*r.nc*r.ncb*u,h=d/r.nbb,g=23*(h+.305)*cg(l,23*f+l*(11*n+108*o)),m=g*n,p=g*o,v=k8($r([h,m,p],y8).map(w=>w*1/1403),r.fl);return $r(v.map((w,k)=>w*r.dRgbInv[k]),v8).map(w=>w/100)}i(J0,"fromCam16");function gw(e,r){const t=e.map(A=>A*100),n=fw($r(t,dw).map((A,I)=>A*r.dRgb[I]),r.fl),o=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(s,o)%Cf+Cf)%Cf,l=.25*(Math.cos(a+2)+3.8),u=5e4/13*r.nc*r.ncb*cg(l*Math.sqrt(o**2+s**2),n[0]+n[1]+1.05*n[2]+.305),d=Mr(u,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),f=r.nbb*(2*n[0]+n[1]+.05*n[2]),h=Mr(f/r.aW,.5*r.c*r.z),g=100*Mr(h,2),m=4/r.c*h*(r.aW+4)*r.flRoot,p=d*h,v=p*r.flRoot,w=vn(a*$8),k=x8(w),D=50*Mr(r.c*d/(r.aW+4),1/2);return{J:g,C:p,h:w,s:D,Q:m,M:v,H:k}}i(gw,"toCam16");var C8=new Z({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:st,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const r=gw(e,Ab),t=Math.abs(r.M)<this.ε;return[r.J,t?0:r.M,t?null:r.h]},toBase(e){return J0({J:e[0],M:e[1],h:e[2]},Ab)}});const E8=Dt.D65,A8=216/24389,mw=24389/27;function S8(e){return 116*(e>A8?Math.cbrt(e):(mw*e+16)/116)-16}i(S8,"toLstar");function Y0(e){return e>8?Math.pow((e+16)/116,3):e/mw}i(Y0,"fromLstar");function M8(e,r){let[t,n,o]=e,s=[],a=0;if(o===0)return[0,0,0];let l=Y0(o);o>0?a=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:a=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,d=15;let f=0,h=1/0;for(;f<=d;){s=J0({J:a,C:n,h:t},r);const g=Math.abs(s[1]-l);if(g<h){if(g<=u)return s;h=g}a=a-(s[1]-l)*a/(2*s[1]),f+=1}return J0({J:a,C:n,h:t},r)}i(M8,"fromHct");function F8(e,r){const t=S8(e[1]);if(t===0)return[0,0,0];const n=gw(e,gg);return[vn(n.h),n.C,t]}i(F8,"toHct");const gg=hw(E8,200/Math.PI*Y0(50),Y0(50)*100,"average",!1);var yl=new Z({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:st,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let r=F8(e);return r[1]<this.ε&&(r[1]=0,r[0]=null),r},toBase(e){return M8(e,gg)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const T8=Math.PI/180,Sb=[1,.007,.0228];function Mb(e){e[1]<0&&(e=yl.fromBase(yl.toBase(e)));const r=Math.log(Math.max(1+Sb[2]*e[1]*gg.flRoot,1))/Sb[2],t=e[0]*T8,n=r*Math.cos(t),o=r*Math.sin(t);return[e[2],n,o]}i(Mb,"convertUcsAb");function N8(e,r){[e,r]=ce([e,r]);let[t,n,o]=Mb(yl.from(e)),[s,a,l]=Mb(yl.from(r));return Math.sqrt((t-s)**2+(n-a)**2+(o-l)**2)}i(N8,"deltaEHCT");var Zs={deltaE76:YD,deltaECMC:QD,deltaE2000:ow,deltaEJz:s8,deltaEITP:m8,deltaEOK:G0,deltaEOK2:p8,deltaEHCT:N8};function P8(e){const r=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${r-2}`),1e-6)}i(P8,"calcEpsilon");const Fb={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ri(e,{method:r=Yt.gamut_mapping,space:t=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:s=void 0}={}){if(e=ce(e),da(arguments[1])?t=arguments[1]:t||(t=e.space),t=Z.get(t),Ri(e,t,{epsilon:0}))return e;let a;if(r==="css")a=I8(e,{space:t});else{if(r!=="clip"&&!Ri(e,t)){Object.prototype.hasOwnProperty.call(Fb,r)&&({method:r,jnd:o,deltaEMethod:n,blackWhiteClamp:s}=Fb[r]);let l=ow;if(n!==""){for(let d in Zs)if("deltae"+n.toLowerCase()===d.toLowerCase()){l=Zs[d];break}}o===0&&(o=1e-16);let u=ri(Qe(e,t),{method:"clip",space:t});if(l(e,u)>o){if(s&&Object.keys(s).length===3){let D=Z.resolveCoord(s.channel),A=Gt(Qe(e,D.space),D.id);if(Le(A)&&(A=0),A>=s.max)return Qe({space:"xyz-d65",coords:Dt.D65},e.space);if(A<=s.min)return Qe({space:"xyz-d65",coords:[0,0,0]},e.space)}let d=Z.resolveCoord(r),f=d.space,h=d.id,g=Qe(e,f);g.coords.forEach((D,A)=>{Le(D)&&(g.coords[A]=0)});let p=(d.range||d.refRange)[0],v=P8(o),w=p,k=Gt(g,h);for(;k-w>v;){let D=Hs(g);D=ri(D,{space:t,method:"clip"}),l(g,D)-o<v?w=Gt(g,h):k=Gt(g,h),Do(g,h,(w+k)/2)}a=Qe(g,t)}else a=u}else a=Qe(e,t);if(r==="clip"||!Ri(a,t,{epsilon:0})){let l=Object.values(t.coords).map(u=>u.range||[]);a.coords=a.coords.map((u,d)=>{let[f,h]=l[d];return f!==void 0&&(u=Math.max(f,u)),h!==void 0&&(u=Math.min(u,h)),u})}}return t!==e.space&&(a=Qe(a,e.space)),e.coords=a.coords,e}i(ri,"toGamut");ri.returns="color";const Tb={WHITE:{space:On,coords:[1,0,0],alpha:1},BLACK:{space:On,coords:[0,0,0],alpha:1}};function I8(e,{space:r}={}){e=ce(e),r||(r=e.space),r=Z.get(r);const o=Z.get("oklch");if(r.isUnbounded)return Qe(e,r);const s=Qe(e,o);let a=s.coords[0];if(a>=1){const p=Qe(Tb.WHITE,r);return p.alpha=e.alpha,Qe(p,r)}if(a<=0){const p=Qe(Tb.BLACK,r);return p.alpha=e.alpha,Qe(p,r)}if(Ri(s,r,{epsilon:0}))return Qe(s,r);function l(p){const v=Qe(p,r),w=Object.values(r.coords);return v.coords=v.coords.map((k,D)=>{if("range"in w[D]){const[A,I]=w[D].range;return Qc(A,k,I)}return k}),v}i(l,"clip");let u=0,d=s.coords[1],f=!0,h=Hs(s),g=l(h),m=G0(g,h);if(m<.02)return g;for(;d-u>1e-4;){const p=(u+d)/2;if(h.coords[1]=p,f&&Ri(h,r,{epsilon:0}))u=p;else if(g=l(h),m=G0(g,h),m<.02){if(.02-m<1e-4)break;f=!1,u=p}else d=p}return g}i(I8,"toGamutCSS");function Qe(e,r,{inGamut:t}={}){e=ce(e),r=Z.get(r);let n=r.from(e),o={space:r,coords:n,alpha:e.alpha};return t&&(o=ri(o,t===!0?void 0:t)),o}i(Qe,"to");Qe.returns="color";function ol(e,r={}){let{precision:t=Yt.precision,format:n,inGamut:o=!0,coords:s,alpha:a,commas:l}=r,u,d=ce(e),f=n,h=d.parseMeta;h&&!n&&(h.format.canSerialize()&&(n=h.format,f=h.formatId),s??=h.types,a??=h.alphaType,l??=h.commas),f&&(n=d.space.getFormat(n)??Z.findFormat(f)),n||(n=d.space.getFormat("default")??Z.DEFAULT_FORMAT,f=n.name),n&&n.space&&n.space!==d.space&&(d=Qe(d,n.space));let g=d.coords.slice();if(o||=n.toGamut,o&&!Ri(d)&&(g=ri(Hs(d),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(g,d.alpha,r);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",p=n.serializeCoords(g,t,s);if(m==="color"){let A=n.id||n.ids?.[0]||d.space.cssId||d.space.id;p.unshift(A)}let v=d.alpha;a!==void 0&&typeof a!="object"&&(a=typeof a=="string"?{type:a}:{include:a});let w=a?.type??"<number>",k=a?.include===!0||n.alpha===!0||a?.include!==!1&&n.alpha!==!1&&v<1,D="";if(l??=n.commas,k){if(t!==null){let A;w==="<percentage>"&&(A="%",v*=100),v=lg(v,{precision:t,unit:A})}D=`${l?",":" /"} ${v}`}u=`${m}(${p.join(l?", ":" ")}${D})`}return u}i(ol,"serialize");const O8=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],B8=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var wl=new wt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:O8,fromXYZ_M:B8}),pw=new wt({id:"rec2020",name:"REC.2020",base:wl,toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,2.4)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,1/2.4)})}});const R8=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],L8=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var bw=new wt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:R8,fromXYZ_M:L8});const j8=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Wr=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var vw=new wt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:j8,fromXYZ_M:Wr}),Nb={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Pb=Array(3).fill("<percentage> | <number>[0, 255]"),Ib=Array(3).fill("<number>[0, 255]");var Wi=new wt({id:"srgb",name:"sRGB",base:vw,fromBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*r}),"fromBase"),toBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n<=.04045?r/12.92:t*((n+.055)/1.055)**2.4}),"toBase"),formats:{rgb:{coords:Pb},rgb_number:{name:"rgb",commas:!0,coords:Ib,alpha:!1},color:{},rgba:{coords:Pb,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ib},hex:{type:"custom",toGamut:!0,test:i(e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),"test"),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let r=[];return e.replace(/[a-f0-9]{2}/gi,t=>{r.push(parseInt(t,16)/255)}),{spaceId:"srgb",coords:r.slice(0,3),alpha:r.slice(3)[0]}},serialize:i((e,r,{collapse:t=!0,alpha:n}={})=>{(n!==!1&&r<1||n===!0)&&e.push(r),e=e.map(a=>Math.round(a*255));let o=t&&e.every(a=>a%17===0);return"#"+e.map(a=>o?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")},"serialize")},keyword:{type:"custom",test:i(e=>/^[a-z]+$/i.test(e),"test"),parse(e){e=e.toLowerCase();let r={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(r.coords=Nb.black,r.alpha=0):r.coords=Nb[e],r.coords)return r}}}}),yw=new wt({id:"p3",cssId:"display-p3",name:"P3",base:bw,fromBase:Wi.fromBase,toBase:Wi.toBase});Yt.display_space=Wi;let _8;if(typeof CSS<"u"&&CSS.supports)for(let e of[Ht,pw,yw]){let r=e.getMinCoords(),n=ol({space:e,coords:r,alpha:1});if(CSS.supports("color",n)){Yt.display_space=e;break}}function U8(e,{space:r=Yt.display_space,...t}={}){e=ce(e);let n=ol(e,t);if(typeof CSS>"u"||CSS.supports("color",n)||!Yt.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Le)||Le(e.alpha))&&!(_8??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=Hs(e),o.coords=o.coords.map(Sr),o.alpha=Sr(o.alpha),n=ol(o,t),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=Qe(o,r),n=new String(ol(o,t)),n.color=o}return n}i(U8,"display");function z8(e,r,{space:t,hue:n="shorter"}={}){e=ce(e),t||=e.space,t=Z.get(t);let o=Object.values(t.coords);[e,r]=[e,r].map(d=>Qe(d,t));let[s,a]=[e,r].map(d=>d.coords),l=s.map((d,f)=>{let h=o[f],g=a[f];return h.type==="angle"&&([d,g]=nw(n,[d,g])),Ob(d,g)}),u=Ob(e.alpha,r.alpha);return{space:t,coords:l,alpha:u}}i(z8,"deltas");function Ob(e,r){return Le(e)||Le(r)?e===r?null:0:e-r}i(Ob,"subtractCoords");function V8(e,r){return e=ce(e),r=ce(r),e.space===r.space&&e.alpha===r.alpha&&e.coords.every((t,n)=>t===r.coords[n])}i(V8,"equals");function ti(e){return Gt(e,[st,"y"])}i(ti,"getLuminance");function ww(e,r){Do(e,[st,"y"],r)}i(ww,"setLuminance");function q8(e){Object.defineProperty(e.prototype,"luminance",{get(){return ti(this)},set(r){ww(this,r)}})}i(q8,"register$2");var W8=Object.freeze({__proto__:null,getLuminance:ti,register:q8,setLuminance:ww});function K8(e,r){e=ce(e),r=ce(r);let t=Math.max(ti(e),0),n=Math.max(ti(r),0);return n>t&&([t,n]=[n,t]),(t+.05)/(n+.05)}i(K8,"contrastWCAG21");const G8=.56,H8=.57,Z8=.62,J8=.65,Bb=.022,Y8=1.414,X8=.1,Q8=5e-4,e9=1.14,Rb=.027,r9=1.14;function Lb(e){return e>=Bb?e:e+(Bb-e)**Y8}i(Lb,"fclamp");function vs(e){let r=e<0?-1:1,t=Math.abs(e);return r*Math.pow(t,2.4)}i(vs,"linearize$3");function t9(e,r){r=ce(r),e=ce(e);let t,n,o,s,a,l;r=Qe(r,"srgb"),[s,a,l]=r.coords.map(m=>Le(m)?0:m);let u=vs(s)*.2126729+vs(a)*.7151522+vs(l)*.072175;e=Qe(e,"srgb"),[s,a,l]=e.coords.map(m=>Le(m)?0:m);let d=vs(s)*.2126729+vs(a)*.7151522+vs(l)*.072175,f=Lb(u),h=Lb(d),g=h>f;return Math.abs(h-f)<Q8?n=0:g?(t=h**G8-f**H8,n=t*e9):(t=h**J8-f**Z8,n=t*r9),Math.abs(n)<X8?o=0:n>0?o=n-Rb:o=n+Rb,o*100}i(t9,"contrastAPCA");function n9(e,r){e=ce(e),r=ce(r);let t=Math.max(ti(e),0),n=Math.max(ti(r),0);n>t&&([t,n]=[n,t]);let o=t+n;return o===0?0:(t-n)/o}i(n9,"contrastMichelson");const o9=5e4;function i9(e,r){e=ce(e),r=ce(r);let t=Math.max(ti(e),0),n=Math.max(ti(r),0);return n>t&&([t,n]=[n,t]),n===0?o9:(t-n)/n}i(i9,"contrastWeber");function s9(e,r){e=ce(e),r=ce(r);let t=Gt(e,[Ht,"l"]),n=Gt(r,[Ht,"l"]);return Math.abs(t-n)}i(s9,"contrastLstar");const a9=216/24389,jb=24/116,ku=24389/27;let Ef=Dt.D65;var X0=new Z({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ef,base:st,fromBase(e){let t=e.map((n,o)=>n/Ef[o]).map(n=>n>a9?Math.cbrt(n):(ku*n+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let r=[];return r[1]=(e[0]+16)/116,r[0]=e[1]/500+r[1],r[2]=r[1]-e[2]/200,[r[0]>jb?Math.pow(r[0],3):(116*r[0]-16)/ku,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ku,r[2]>jb?Math.pow(r[2],3):(116*r[2]-16)/ku].map((n,o)=>n*Ef[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Af=Math.pow(5,.5)*.5+.5;function l9(e,r){e=ce(e),r=ce(r);let t=Gt(e,[X0,"l"]),n=Gt(r,[X0,"l"]),o=Math.abs(Math.pow(t,Af)-Math.pow(n,Af)),s=Math.pow(o,1/Af)*Math.SQRT2-40;return s<7.5?0:s}i(l9,"contrastDeltaPhi");var Wu=Object.freeze({__proto__:null,contrastAPCA:t9,contrastDeltaPhi:l9,contrastLstar:s9,contrastMichelson:n9,contrastWCAG21:K8,contrastWeber:i9});function u9(e,r,t){da(t)&&(t={algorithm:t});let{algorithm:n,...o}=t||{};if(!n){let s=Object.keys(Wu).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=ce(e),r=ce(r);for(let s in Wu)if("contrast"+n.toLowerCase()===s.toLowerCase())return Wu[s](e,r,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}i(u9,"contrast");function rd(e){let[r,t,n]=zl(e,st),o=r+15*t+3*n;return[4*r/o,9*t/o]}i(rd,"uv");function $w(e){let[r,t,n]=zl(e,st),o=r+t+n;return[r/o,t/o]}i($w,"xy");function c9(e){Object.defineProperty(e.prototype,"uv",{get(){return rd(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return $w(this)}})}i(c9,"register$1");var d9=Object.freeze({__proto__:null,register:c9,uv:rd,xy:$w});function Ha(e,r,t={}){da(t)&&(t={method:t});let{method:n=Yt.deltaE,...o}=t;for(let s in Zs)if("deltae"+n.toLowerCase()===s.toLowerCase())return Zs[s](e,r,o);throw new TypeError(`Unknown deltaE method: ${n}`)}i(Ha,"deltaE");function kw(e,r=.25){let n=[Z.get("oklch","lch"),"l"];return Do(e,n,o=>o*(1+r))}i(kw,"lighten");function xw(e,r=.25){let n=[Z.get("oklch","lch"),"l"];return Do(e,n,o=>o*(1-r))}i(xw,"darken");kw.returns="color";xw.returns="color";var f9=Object.freeze({__proto__:null,darken:xw,lighten:kw});function Dw(e,r,t,n={}){return[e,r]=[ce(e),ce(r)],Ho(t)==="object"&&([t,n]=[.5,t]),Vl(e,r,n)(t??.5)}i(Dw,"mix");function Cw(e,r,t={}){let n;mg(e)&&([n,t]=[e,r],[e,r]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:a=2,maxSteps:l=1e3,...u}=t;n||([e,r]=[ce(e),ce(r)],n=Vl(e,r,u));let d=Ha(e,r),f=o>0?Math.max(a,Math.ceil(d/o)+1):a,h=[];if(l!==void 0&&(f=Math.min(f,l)),f===1)h=[{p:.5,color:n(.5)}];else{let g=1/(f-1);h=Array.from({length:f},(m,p)=>{let v=p*g;return{p:v,color:n(v)}})}if(o>0){let g=h.reduce((m,p,v)=>{if(v===0)return 0;let w=Ha(p.color,h[v-1].color,s);return Math.max(m,w)},0);for(;g>o;){g=0;for(let m=1;m<h.length&&h.length<l;m++){let p=h[m-1],v=h[m],w=(v.p+p.p)/2,k=n(w);g=Math.max(g,Ha(k,p.color),Ha(k,v.color)),h.splice(m,0,{p:w,color:n(w)}),m++}}}return h=h.map(g=>g.color),h}i(Cw,"steps");function Vl(e,r,t={}){if(mg(e)){let[u,d]=[e,r];return Vl(...u.rangeArgs.colors,{...u.rangeArgs.options,...d})}let{space:n,outputSpace:o,progression:s,premultiplied:a}=t;e=ce(e),r=ce(r),e=Hs(e),r=Hs(r);let l={colors:[e,r],options:t};if(n?n=Z.get(n):n=Z.registry[Yt.interpolationSpace]||e.space,o=o?Z.get(o):n,e=Qe(e,n),r=Qe(r,n),e=ri(e),r=ri(r),n.coords.h&&n.coords.h.type==="angle"){let u=t.hue=t.hue||"shorter",d=[n,"h"],[f,h]=[Gt(e,d),Gt(r,d)];Le(f)&&!Le(h)?f=h:Le(h)&&!Le(f)&&(h=f),[f,h]=nw(u,[f,h]),Do(e,d,f),Do(r,d,h)}return a&&(e.coords=e.coords.map(u=>u*e.alpha),r.coords=r.coords.map(u=>u*r.alpha)),Object.assign(u=>{u=s?s(u):u;let d=e.coords.map((g,m)=>{let p=r.coords[m];return vl(g,p,u)}),f=vl(e.alpha,r.alpha,u),h={space:n,coords:d,alpha:f};return a&&(h.coords=h.coords.map(g=>g/f)),o!==n&&(h=Qe(h,o)),h},{rangeArgs:l})}i(Vl,"range");function mg(e){return Ho(e)==="function"&&!!e.rangeArgs}i(mg,"isRange");Yt.interpolationSpace="lab";function h9(e){e.defineFunction("mix",Dw,{returns:"color"}),e.defineFunction("range",Vl,{returns:"function<color>"}),e.defineFunction("steps",Cw,{returns:"array<color>"})}i(h9,"register");var g9=Object.freeze({__proto__:null,isRange:mg,mix:Dw,range:Vl,register:h9,steps:Cw}),m9=new Z({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Wi,fromBase:i(e=>{let r=Math.max(...e),t=Math.min(...e),[n,o,s]=e,[a,l,u]=[null,0,(t+r)/2],d=r-t;if(d!==0){switch(l=u===0||u===1?0:(r-u)/Math.min(u,1-u),r){case n:a=(o-s)/d+(o<s?6:0);break;case o:a=(s-n)/d+2;break;case s:a=(n-o)/d+4}a=a*60}return l<0&&(a+=180,l=Math.abs(l)),a>=360&&(a-=360),[a,l*100,u*100]},"fromBase"),toBase:i(e=>{let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(s){let a=(s+r/30)%12,l=t*Math.min(n,1-n);return n-l*Math.max(-1,Math.min(a-3,9-a,1))}return i(o,"f"),[o(0),o(8),o(4)]},"toBase"),formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Ew=new Z({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Wi,fromBase(e){let r=Math.max(...e),t=Math.min(...e),[n,o,s]=e,[a,l,u]=[null,0,r],d=r-t;if(d!==0){switch(r){case n:a=(o-s)/d+(o<s?6:0);break;case o:a=(s-n)/d+2;break;case s:a=(n-o)/d+4}a=a*60}return u&&(l=d/u),a>=360&&(a-=360),[a,l*100,u*100]},toBase(e){let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(s){let a=(s+r/60)%6;return n-n*t*Math.max(0,Math.min(a,4-a,1))}return i(o,"f"),[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),p9=new Z({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ew,fromBase(e){let[r,t,n]=e;return[r,n*(100-t)/100,100-n]},toBase(e){let[r,t,n]=e;t/=100,n/=100;let o=t+n;if(o>=1){let l=t/o;return[r,0,l*100]}let s=1-n,a=s===0?0:1-t/s;return[r,a*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const b9=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],v9=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Aw=new wt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:b9,fromXYZ_M:v9}),y9=new wt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Aw,toBase:i(e=>e.map(r=>Math.pow(Math.abs(r),563/256)*Math.sign(r)),"toBase"),fromBase:i(e=>e.map(r=>Math.pow(Math.abs(r),256/563)*Math.sign(r)),"fromBase")});const w9=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],$9=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Sw=new wt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:fg,toXYZ_M:w9,fromXYZ_M:$9});const k9=1/512,x9=16/512;var D9=new wt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Sw,toBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n<x9?r/16:t*n**1.8})},fromBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n>=k9?t*n**(1/1.8):16*r})}});const xu=1.09929682680944,_b=.018053968510807;var C9=new wt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:wl,referred:"scene",toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n<_b*4.5?r/4.5:t*Math.pow((n+xu-1)/xu,1/.45)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n>=_b?t*(xu*Math.pow(n,.45)-(xu-1)):4.5*r})}}),E9=new Z({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:On,fromBase:Xt.fromBase,toBase:Xt.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Js=2*Math.PI,bc=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],vc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Sf=Number.MAX_VALUE,il=.206,pg=.03,Za=(1+il)/(1+pg);function nt(e,r){let t=e.length;if(t!==r.length)throw new Error(`Vectors of size ${t} and ${r.length} are not aligned`);let n=0;return e.forEach((o,s)=>{n+=o*r[s]}),n}i(nt,"vdot");function sl(e){return .5*(Za*e-il+Math.sqrt((Za*e-il)*(Za*e-il)+4*pg*Za*e))}i(sl,"toe$1");function Bs(e){return(e**2+il*e)/(Za*(e+pg))}i(Bs,"toeInv");function bg(e){let[r,t]=e;return[t/r,t/(1-r)]}i(bg,"toSt");function A9(e,r){let t=.11516993+1/(7.4477897+4.1590124*r+e*(-2.19557347+1.75198401*r+e*(-2.13704948-10.02301043*r+e*(-4.24894561+5.38770819*r+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*r+e*(.40370612+.90148123*r+e*(-.27087943+.6122399*r+e*(.00299215-.45399568*r-.14661872*e))));return[t,n]}i(A9,"getStMid");function vg(e,r){let t=$r(e,Zo);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,$r(t,r,t)}i(vg,"oklabToLinearRGB");function td(e,r,t,n){let o=M9(e,r,t,n),s=vg([1,o*e,o*r],t),a=Mr(1/Math.max(...s),1/3),l=a*o;return[a,l]}i(td,"findCusp");function S9(e,r,t,n,o,s,a,l){let u;if(l===void 0&&(l=td(e,r,s,a)),(t-o)*l[1]-(l[0]-o)*n<=0)u=l[1]*o/(n*l[0]+l[1]*(o-t));else{u=l[1]*(o-1)/(n*(l[0]-1)+l[1]*(o-t));let d=t-o,f=n,h=nt(Zo[0].slice(1),[e,r]),g=nt(Zo[1].slice(1),[e,r]),m=nt(Zo[2].slice(1),[e,r]),p=d+f*h,v=d+f*g,w=d+f*m,k=o*(1-u)+u*t,D=u*n,A=k+D*h,I=k+D*g,L=k+D*m,Y=A**3,re=I**3,te=L**3,X=3*p*A**2,pe=3*v*I**2,we=3*w*L**2,Fe=6*p**2*A,ar=6*v**2*I,Ze=6*w**2*L,St=nt(s[0],[Y,re,te])-1,Gr=nt(s[0],[X,pe,we]),Wn=nt(s[0],[Fe,ar,Ze]),no=Gr/(Gr*Gr-.5*St*Wn),an=-St*no,tt=nt(s[1],[Y,re,te])-1,Ge=nt(s[1],[X,pe,we]),Lr=nt(s[1],[Fe,ar,Ze]),ln=Ge/(Ge*Ge-.5*tt*Lr),ht=-tt*ln,un=nt(s[2],[Y,re,te])-1,Dn=nt(s[2],[X,pe,we]),No=nt(s[2],[Fe,ar,Ze]),lu=Dn/(Dn*Dn-.5*un*No),hs=-un*lu;an=no>=0?an:Sf,ht=ln>=0?ht:Sf,hs=lu>=0?hs:Sf,u+=Math.min(an,Math.min(ht,hs))}return u}i(S9,"findGamutIntersection");function Mw(e,r,t){let[n,o,s]=e,a=td(o,s,r,t),l=S9(o,s,n,1,n,r,t,a),u=bg(a),d=l/Math.min(n*u[0],(1-n)*u[1]),f=A9(o,s),h=n*f[0],g=(1-n)*f[1],m=.9*d*Math.sqrt(Math.sqrt(1/(1/h**4+1/g**4)));return h=n*.4,g=(1-n)*.8,[Math.sqrt(1/(1/h**2+1/g**2)),m,l]}i(Mw,"getCs");function M9(e,r,t,n){let o,s,a,l,u,d,f,h;nt(n[0][0],[e,r])>1?([o,s,a,l,u]=n[0][1],[d,f,h]=t[0]):nt(n[1][0],[e,r])>1?([o,s,a,l,u]=n[1][1],[d,f,h]=t[1]):([o,s,a,l,u]=n[2][1],[d,f,h]=t[2]);let g=o+s*e+a*r+l*e**2+u*e*r,m=nt(Zo[0].slice(1),[e,r]),p=nt(Zo[1].slice(1),[e,r]),v=nt(Zo[2].slice(1),[e,r]),w=1+g*m,k=1+g*p,D=1+g*v,A=w**3,I=k**3,L=D**3,Y=3*m*w**2,re=3*p*k**2,te=3*v*D**2,X=6*m**2*w,pe=6*p**2*k,we=6*v**2*D,Fe=d*A+f*I+h*L,ar=d*Y+f*re+h*te,Ze=d*X+f*pe+h*we;return g=g-Fe*ar/(ar**2-.5*Fe*Ze),g}i(M9,"computeMaxSaturation");function F9(e,r,t){let[n,o,s]=e,a=Bs(s),l=null,u=null;if(n=vn(n)/360,a!==0&&a!==1&&o!==0){let d=Math.cos(Js*n),f=Math.sin(Js*n),[h,g,m]=Mw([a,d,f],r,t),p=.8,v=1.25,w,k,D,A;o<p?(w=v*o,k=0,D=p*h,A=1-D/g):(w=5*(o-.8),k=g,D=.2*g**2*1.25**2/h,A=1-D/(m-g));let I=k+w*D/(1-A*w);l=I*d,u=I*f}return[a,l,u]}i(F9,"okhslToOklab");function T9(e,r,t){let n=1e-7,o=1e-4,s=e[0],a=0,l=sl(s),u=Math.sqrt(e[1]**2+e[2]**2),d=.5+Math.atan2(-e[2],-e[1])/Js;if(l!==0&&l!==1&&u!==0){let h=e[1]/u,g=e[2]/u,[m,p,v]=Mw([s,h,g],r,t),w=.8,k=1.25,D,A,I,L;u<p?(A=w*m,I=1-A/p,L=u/(A+I*u),a=L*w):(D=p,A=.2*p**2*k**2/m,I=1-A/(v-p),L=(u-D)/(A+I*(u-D)),a=w+.2*L)}const f=Math.abs(a)<o;return f||l===0||Math.abs(1-l)<n?(d=null,f||(a=0)):d=vn(d*360),[d,a,l]}i(T9,"oklabToOkhsl");var N9=new Z({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:On,gamutSpace:"self",fromBase(e){return T9(e,bc,vc)},toBase(e){return F9(e,bc,vc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Fw=new Z({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:On,fromBase(e){return[sl(e[0]),e[1],e[2]]},toBase(e){return[Bs(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),P9=new Z({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Fw,fromBase:Xt.fromBase,toBase:Xt.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function I9(e,r,t){let[n,o,s]=e;n=vn(n)/360;let a=Bs(s),l=null,u=null;if(a!==0&&o!==0){let d=Math.cos(Js*n),f=Math.sin(Js*n),h=td(d,f,r,t),[g,m]=bg(h),p=.5,v=1-p/g,w=1-o*p/(p+m-m*v*o),k=o*m*p/(p+m-m*v*o);a=s*w;let D=s*k,A=Bs(w),I=k*A/w,L=Bs(a);D=D*L/a,a=L;let[Y,re,te]=vg([A,d*I,f*I],r),X=Mr(1/Math.max(Math.max(Y,re),Math.max(te,0)),1/3);a=a*X,D=D*X,l=D*d,u=D*f}return[a,l,u]}i(I9,"okhsvToOklab");function O9(e,r,t){let n=1e-4,o=e[0],s=0,a=sl(o),l=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/Js;if(o!==0&&o!==1&&l!==0){let d=e[1]/l,f=e[2]/l,h=td(d,f,r,t),[g,m]=bg(h),p=.5,v=1-p/g,w=m/(l+o*m),k=w*o,D=w*l,A=Bs(k),I=D*A/k,[L,Y,re]=vg([A,d*I,f*I],r),te=Mr(1/Math.max(Math.max(L,Y),Math.max(re,0)),1/3);o=o/te,l=l/te,l=l*sl(o)/o,o=sl(o),a=o/k,s=(p+m)*D/(m*p+m*v*D)}return Math.abs(s)<n||a===0?u=null:u=vn(u*360),[u,s,a]}i(O9,"oklabToOkhsv");var B9=new Z({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:On,gamutSpace:"self",fromBase(e){return O9(e,bc,vc)},toBase(e){return I9(e,bc,vc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let Tw=Dt.D65;const R9=216/24389,Ub=24389/27,[zb,Vb]=rd({space:st,coords:Tw});var Nw=new Z({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Tw,base:st,fromBase(e){let r=[Sr(e[0]),Sr(e[1]),Sr(e[2])],t=r[1],[n,o]=rd({space:st,coords:r});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let s=t<=R9?Ub*t:116*Math.cbrt(t)-16;return[s,13*s*(n-zb),13*s*(o-Vb)]},toBase(e){let[r,t,n]=e;if(r===0||Le(r))return[0,0,0];t=Sr(t),n=Sr(n);let o=t/(13*r)+zb,s=n/(13*r)+Vb,a=r<=8?r/Ub:Math.pow((r+16)/116,3);return[a*(9*o/(4*s)),a,a*((12-3*o-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),yg=new Z({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Nw,fromBase:Xt.fromBase,toBase:Xt.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const L9=216/24389,j9=24389/27,qb=Wr[0][0],Wb=Wr[0][1],Mf=Wr[0][2],Kb=Wr[1][0],Gb=Wr[1][1],Ff=Wr[1][2],Hb=Wr[2][0],Zb=Wr[2][1],Tf=Wr[2][2];function ys(e,r,t){const n=r/(Math.sin(t)-e*Math.cos(t));return n<0?1/0:n}i(ys,"distanceFromOriginAngle");function yc(e){const r=Math.pow(e+16,3)/1560896,t=r>L9?r:e/j9,n=t*(284517*qb-94839*Mf),o=t*(838422*Mf+769860*Wb+731718*qb),s=t*(632260*Mf-126452*Wb),a=t*(284517*Kb-94839*Ff),l=t*(838422*Ff+769860*Gb+731718*Kb),u=t*(632260*Ff-126452*Gb),d=t*(284517*Hb-94839*Tf),f=t*(838422*Tf+769860*Zb+731718*Hb),h=t*(632260*Tf-126452*Zb);return{r0s:n/s,r0i:o*e/s,r1s:n/(s+126452),r1i:(o-769860)*e/(s+126452),g0s:a/u,g0i:l*e/u,g1s:a/(u+126452),g1i:(l-769860)*e/(u+126452),b0s:d/h,b0i:f*e/h,b1s:d/(h+126452),b1i:(f-769860)*e/(h+126452)}}i(yc,"calculateBoundingLines");function Jb(e,r){const t=r/360*Math.PI*2,n=ys(e.r0s,e.r0i,t),o=ys(e.r1s,e.r1i,t),s=ys(e.g0s,e.g0i,t),a=ys(e.g1s,e.g1i,t),l=ys(e.b0s,e.b0i,t),u=ys(e.b1s,e.b1i,t);return Math.min(n,o,s,a,l,u)}i(Jb,"calcMaxChromaHsluv");var _9=new Z({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:yg,gamutSpace:Wi,fromBase(e){let[r,t,n]=[Sr(e[0]),Sr(e[1]),Sr(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let s=yc(r),a=Jb(s,n);o=t/a*100}return[n,o,r]},toBase(e){let[r,t,n]=[Sr(e[0]),Sr(e[1]),Sr(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let s=yc(n);o=Jb(s,r)/100*t}return[n,o,r]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Wr[0][0];Wr[0][1];Wr[0][2];Wr[1][0];Wr[1][1];Wr[1][2];Wr[2][0];Wr[2][1];Wr[2][2];function ws(e,r){return Math.abs(r)/Math.sqrt(Math.pow(e,2)+1)}i(ws,"distanceFromOrigin");function Yb(e){let r=ws(e.r0s,e.r0i),t=ws(e.r1s,e.r1i),n=ws(e.g0s,e.g0i),o=ws(e.g1s,e.g1i),s=ws(e.b0s,e.b0i),a=ws(e.b1s,e.b1i);return Math.min(r,t,n,o,s,a)}i(Yb,"calcMaxChromaHpluv");var U9=new Z({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:yg,gamutSpace:"self",fromBase(e){let[r,t,n]=[Sr(e[0]),Sr(e[1]),Sr(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let s=yc(r),a=Yb(s);o=t/a*100}return[n,o,r]},toBase(e){let[r,t,n]=[Sr(e[0]),Sr(e[1]),Sr(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let s=yc(n);o=Yb(s)/100*t}return[n,o,r]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),wg=new wt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:wl.toBase,fromBase:wl.fromBase});const Xb=203,Qb=2610/2**14,z9=2**14/2610,V9=2523/2**5,e1=2**5/2523,r1=3424/2**12,t1=2413/2**7,n1=2392/2**7;var q9=new wt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:wg,toBase(e){return e.map(function(r){return(Math.max(r**e1-r1,0)/(t1-n1*r**e1))**z9*1e4/Xb})},fromBase(e){return e.map(function(r){let t=Math.max(r*Xb/1e4,0),n=r1+t1*t**Qb,o=1+n1*t**Qb;return(n/o)**V9})}});const o1=.17883277,i1=.28466892,s1=.55991073,Nf=3.7743;var W9=new wt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:wg,toBase(e){return e.map(function(r){return r<=.5?r**2/3*Nf:(Math.exp((r-s1)/o1)+i1)/12*Nf})},fromBase(e){return e.map(function(r){return r/=Nf,r<=1/12?Mr(3*r,.5):o1*Math.log(12*r-i1)+s1})}});const Pw={};ei.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Iw(e.W1,e.W2,e.options.method))});ei.add("chromatic-adaptation-end",e=>{e.M||(e.M=Iw(e.W1,e.W2,e.options.method))});function nd({id:e,toCone_M:r,fromCone_M:t}){Pw[e]=arguments[0]}i(nd,"defineCAT");function Iw(e,r,t="Bradford"){let n=Pw[t],[o,s,a]=Ga(n.toCone_M,e),[l,u,d]=Ga(n.toCone_M,r),f=[[l/o,0,0],[0,u/s,0],[0,0,d/a]],h=Ga(f,n.toCone_M);return Ga(n.fromCone_M,h)}i(Iw,"adapt");nd({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});nd({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});nd({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});nd({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Dt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Dt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const K9=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],G9=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ow=new wt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Dt.ACES,toXYZ_M:K9,fromXYZ_M:G9});const Du=2**-16,Pf=-.35828683,Cu=(Math.log2(65504)+9.72)/17.52;var H9=new wt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Pf,Cu],name:"Red"},g:{range:[Pf,Cu],name:"Green"},b:{range:[Pf,Cu],name:"Blue"}},referred:"scene",base:Ow,toBase(e){const r=-.3013698630136986;return e.map(function(t){return t<=r?(2**(t*17.52-9.72)-Du)*2:t<Cu?2**(t*17.52-9.72):65504})},fromBase(e){return e.map(function(r){return r<=0?(Math.log2(Du)+9.72)/17.52:r<Du?(Math.log2(Du+r*.5)+9.72)/17.52:(Math.log2(r)+9.72)/17.52})}}),a1=Object.freeze({__proto__:null,A98RGB:y9,A98RGB_Linear:Aw,ACEScc:H9,ACEScg:Ow,CAM16_JMh:C8,HCT:yl,HPLuv:U9,HSL:m9,HSLuv:_9,HSV:Ew,HWB:p9,ICTCP:Z0,JzCzHz:H0,Jzazbz:sw,LCH:Xt,LCHuv:yg,Lab:Ht,Lab_D65:X0,Luv:Nw,OKLCH:E9,OKLab:On,OKLrCH:P9,OKLrab:Fw,Okhsl:N9,Okhsv:B9,P3:yw,P3_Linear:bw,ProPhoto:D9,ProPhoto_Linear:Sw,REC_2020:pw,REC_2020_Linear:wl,REC_2020_Scene_Referred:C9,REC_2100_HLG:W9,REC_2100_Linear:wg,REC_2100_PQ:q9,XYZ_ABS_D65:hg,XYZ_D50:fg,XYZ_D65:st,sRGB:Wi,sRGB_Linear:vw});let er=class Nt{static{i(this,"Color")}constructor(...r){let t;if(r.length===1){let a={};typeof r[0]=="object"&&Object.getPrototypeOf(r[0]).constructor===Object&&(r[0]={...r[0]}),t=ce(r[0],{parseMeta:a}),a.format&&(this.parseMeta=a)}let n,o,s;t?(n=t.space||t.spaceId,o=t.coords,s=t.alpha):[n,o,s]=r,Object.defineProperty(this,"space",{value:Z.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Le(s)?s:s===void 0?1:Qc(0,s,1);for(let a in this.space.coords)Object.defineProperty(this,a,{get:i(()=>this.get(a),"get"),set:i(l=>this.set(a,l),"set")})}get spaceId(){return this.space.id}clone(){return new Nt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...r){let t=U8(this,...r);return t.color=new Nt(t.color),t}static get(r,...t){return Gs(r,this)?r:new Nt(r,...t)}static try(r,t){if(Gs(r,this))return r;let n=tw(r,t);return n?new Nt(n):null}static defineFunction(r,t,n=t){let{instance:o=!0,returns:s}=n,a=i(function(...l){let u=t(...l);if(s==="color")u=Nt.get(u);else if(s==="function<color>"){let d=u;u=i(function(...f){let h=d(...f);return Nt.get(h)},"ret"),Object.assign(u,d)}else s==="array<color>"&&(u=u.map(d=>Nt.get(d)));return u},"func");r in Nt||(Nt[r]=a),o&&(Nt.prototype[r]=function(...l){return a(this,...l)})}static defineFunctions(r){for(let t in r)Nt.defineFunction(t,r[t],r[t])}static extend(r){if(r.register)r.register(Nt);else for(let t in r)Nt.defineFunction(t,r[t])}};er.defineFunctions({get:Gt,getAll:zl,set:Do,setAll:dg,to:Qe,equals:V8,inGamut:Ri,toGamut:ri,distance:iw,deltas:z8,toString:ol});Object.assign(er,{util:_D,hooks:ei,WHITES:Dt,Space:Z,spaces:Z.registry,parse:ew,defaults:Yt});for(let e of Object.keys(a1))Z.register(a1[e]);for(let e in Z.registry)Q0(e,Z.registry[e]);ei.add("colorspace-init-end",e=>{Q0(e.id,e),e.aliases?.forEach(r=>{Q0(r,e)})});function Q0(e,r){let t=e.replace(/-/g,"_");Object.defineProperty(er.prototype,t,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:i(((s,a)=>{try{return Z.resolveCoord([r,a]),!0}catch{}return Reflect.has(s,a)}),"has"),get:i((s,a,l)=>{if(a&&typeof a!="symbol"&&!(a in s)&&a in o){let{index:u}=Z.resolveCoord([r,a]);if(u>=0)return s[u]}return Reflect.get(s,a,l)},"get"),set:i((s,a,l,u)=>{if(a&&typeof a!="symbol"&&!(a in s)||Number(a)>=0){let{index:d}=Z.resolveCoord([r,a]);if(d>=0)return s[d]=l,this.setAll(e,s),!0}return Reflect.set(s,a,l,u)},"set")});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}i(Q0,"addSpaceAccessors");er.extend(Zs);er.extend({deltaE:Ha});Object.assign(er,{deltaEMethods:Zs});er.extend(f9);er.extend({contrast:u9});er.extend(d9);er.extend(W8);er.extend(g9);er.extend(Wu);const Bw=Symbol("no update");function l1(e){return e!==Bw}i(l1,"isNotNoUpdate");class If extends Un()("observable-value-update"){static{i(this,"ObservableValueUpdateEvent")}}class Z9 extends Un()("observable-value-resolve"){static{i(this,"ObservableValueResolveEvent")}}class J9 extends Un()("observable-value-error"){static{i(this,"ObservableValueErrorEvent")}}class Y9 extends Zh("observable-destroy"){static{i(this,"ObservableDestroyEvent")}}class X9 extends Zh("observable-callback-call"){static{i(this,"ObservableCallbackCallEvent")}}class Q9 extends Un()("observable-params-update"){static{i(this,"ObservableParamsUpdateEvent")}}class Rw{static{i(this,"AnyObservable")}listenTarget=new Jh;value;equalityCheck;listenerMap=new WeakMap;dispatch(...r){return this.listenTarget.dispatch(...r)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...r){const t=r[0];if(t===Bw)return!1;if(!(r.length===2?r[1]:this.equalityCheck)?.(this.value,t)){const o=this.value;return this.value=t,this.listenTarget.dispatch(new If({detail:[t,o]})),!0}return!1}listen(r,t){const n=i(o=>t(...o.detail),"mapped");return this.listenerMap.set(t,n),r&&t(this.value,void 0),this.listenTarget.listen(If,n)}removeListener(r){const t=this.listenerMap.get(r);return!!t&&this.listenTarget.removeListener(If,t)}destroy(){this.listenTarget.dispatch(new Y9),this.listenTarget.destroy()}listenToEvent(r,t,n){return this.listenTarget.listen(r,t,n)}}function $g(e,r){return a6(e,r,(t,n)=>F.isFunction(t)&&F.isFunction(n)?!0:F.strictEquals(t,n))}i($g,"observableEqualityCheck");var al;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(al||(al={}));class eC extends Rw{static{i(this,"AsyncObservable")}equalityCheck;waitingForValueDeferredPromise=new rc;lastSetPromise;lastSetId=Oi();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(r={}){super(),this.equalityCheck="equalityCheck"in r?r.equalityCheck:$g,"defaultValue"in r&&this.setValue(r.defaultValue)}setPromise(r){if(r===this.lastSetPromise)return!1;const t=Oi();return this.lastSetId=t,this.lastSetPromise=r,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new rc,super.setValue(this.waitingForValueDeferredPromise.promise,F.strictEquals)),r.then(n=>{this.lastSetPromise!==r||this.lastSetId!==t||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==r||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=kr(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(r){return l1(r)||(r=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(r,F.strictEquals):super.setValue(r))?(this.lastResolvedValue=r,this.lastSetId=Oi(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(r),this.dispatch(new Z9({detail:r})),!0):!1}rejectValue(r){this.waitingForValueDeferredPromise.reject(r),super.setValue(r,F.strictEquals),this.dispatch(new J9({detail:r}))}setValue(r){try{return r instanceof Promise?this.setPromise(r):r instanceof Error?(this.rejectValue(r),!0):l1(r)?this.resolveValue(r):!1}catch(t){return this.rejectValue(kr(t)),!0}}listen(r,t){return super.listen(r,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?al.Rejected:this.value instanceof Promise?al.Waiting:al.Resolved}}class As extends eC{static{i(this,"CallbackObservable")}static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==As.NotSet)return this.internalParams}internalParams;constructor(r={}){super(r),this.equalityCheck="equalityCheck"in r?r.equalityCheck:$g,this.updateCallback=r.updateCallback,this.internalParams="defaultParams"in r?r.defaultParams:As.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===As.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(r){return this.setValue(kr(r))}finally{this.dispatch(new X9)}}updateLastParams(r){try{return this.internalParams===As.NotSet||!this.equalityCheck?.(r,this.internalParams)?(this.internalParams=r,this.dispatch(new Q9({detail:this.internalParams})),!0):!1}catch(t){return this.setValue(kr(t)),!1}}update(...[r]){return this.updateLastParams(r)?(this.updateFromCallback(),!0):!1}setParams(r){return this.updateLastParams(r)}forceUpdate(...r){return F.isLengthAtLeast(r,1)&&this.updateLastParams(r[0]),this.updateFromCallback()}}function rC(e){return Or(e)&&!Ut(e)&&!Wl(e)&&Symbol.asyncIterator in e}i(rC,"IsAsyncIterator$3");function Ut(e){return Array.isArray(e)}i(Ut,"IsArray$3");function Lw(e){return typeof e=="bigint"}i(Lw,"IsBigInt$3");function ql(e){return typeof e=="boolean"}i(ql,"IsBoolean$3");function kg(e){return e instanceof globalThis.Date}i(kg,"IsDate$3");function tC(e){return typeof e=="function"}i(tC,"IsFunction$3");function nC(e){return Or(e)&&!Ut(e)&&!Wl(e)&&Symbol.iterator in e}i(nC,"IsIterator$3");function oC(e){return e===null}i(oC,"IsNull$3");function ro(e){return typeof e=="number"}i(ro,"IsNumber$3");function Or(e){return typeof e=="object"&&e!==null}i(Or,"IsObject$3");function jw(e){return e instanceof globalThis.RegExp}i(jw,"IsRegExp$2");function Cr(e){return typeof e=="string"}i(Cr,"IsString$3");function iC(e){return typeof e=="symbol"}i(iC,"IsSymbol$3");function Wl(e){return e instanceof globalThis.Uint8Array}i(Wl,"IsUint8Array$3");function Fr(e){return e===void 0}i(Fr,"IsUndefined$3");function sC(e){return e.map(r=>wc(r))}i(sC,"ArrayType$1");function aC(e){return new Date(e.getTime())}i(aC,"DateType$1");function lC(e){return new Uint8Array(e)}i(lC,"Uint8ArrayType$1");function uC(e){return new RegExp(e.source,e.flags)}i(uC,"RegExpType");function cC(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=wc(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=wc(e[t]);return r}i(cC,"ObjectType$1");function wc(e){return Ut(e)?sC(e):kg(e)?aC(e):Wl(e)?lC(e):jw(e)?uC(e):Or(e)?cC(e):e}i(wc,"Visit$8");function Qt(e){return wc(e)}i(Qt,"Clone");function xg(e,r){return Qt(r===void 0?e:{...r,...e})}i(xg,"CloneType");function _w(e){return to(e)&&globalThis.Symbol.asyncIterator in e}i(_w,"IsAsyncIterator$2");function Uw(e){return to(e)&&globalThis.Symbol.iterator in e}i(Uw,"IsIterator$2");function zw(e){return e instanceof globalThis.Promise}i(zw,"IsPromise$2");function Dg(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}i(Dg,"IsDate$2");function Cg(e){return e instanceof globalThis.Uint8Array}i(Cg,"IsUint8Array$2");function Vw(e,r){return r in e}i(Vw,"HasPropertyKey");function to(e){return e!==null&&typeof e=="object"}i(to,"IsObject$2");function en(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}i(en,"IsArray$2");function ci(e){return e===void 0}i(ci,"IsUndefined$2");function od(e){return e===null}i(od,"IsNull$2");function id(e){return typeof e=="boolean"}i(id,"IsBoolean$2");function ve(e){return typeof e=="number"}i(ve,"IsNumber$2");function qw(e){return globalThis.Number.isInteger(e)}i(qw,"IsInteger$2");function go(e){return typeof e=="bigint"}i(go,"IsBigInt$2");function Jt(e){return typeof e=="string"}i(Jt,"IsString$2");function Ww(e){return typeof e=="function"}i(Ww,"IsFunction$2");function sd(e){return typeof e=="symbol"}i(sd,"IsSymbol$2");function Kw(e){return go(e)||id(e)||od(e)||ve(e)||Jt(e)||sd(e)||ci(e)}i(Kw,"IsValueType");var Dr;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function r(a,l){return e.ExactOptionalPropertyTypes?l in a:a[l]!==void 0}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(a){const l=to(a);return e.AllowArrayObject?l:l&&!en(a)}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(a){return t(a)&&!(a instanceof Date)&&!(a instanceof Uint8Array)}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(a){return e.AllowNaN?ve(a):Number.isFinite(a)}i(o,"IsNumberLike"),e.IsNumberLike=o;function s(a){const l=ci(a);return e.AllowNullVoid?l||a===null:l}i(s,"IsVoidLike"),e.IsVoidLike=s})(Dr||(Dr={}));function dC(e){return globalThis.Object.freeze(e).map(r=>$c(r))}i(dC,"ImmutableArray");function fC(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=$c(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=$c(e[t]);return globalThis.Object.freeze(r)}i(fC,"ImmutableObject");function $c(e){return Ut(e)?dC(e):kg(e)?e:Wl(e)?e:jw(e)?e:Or(e)?fC(e):e}i($c,"Immutable");function V(e,r){const t=r!==void 0?{...r,...e}:e;switch(Dr.InstanceMode){case"freeze":return $c(t);case"clone":return Qt(t);default:return t}}i(V,"CreateType");class ct extends Error{static{i(this,"TypeBoxError")}constructor(r){super(r)}}const Bt=Symbol.for("TypeBox.Transform"),Kl=Symbol.for("TypeBox.Readonly"),Eo=Symbol.for("TypeBox.Optional"),ad=Symbol.for("TypeBox.Hint"),U=Symbol.for("TypeBox.Kind");function Eg(e){return Or(e)&&e[Kl]==="Readonly"}i(Eg,"IsReadonly");function di(e){return Or(e)&&e[Eo]==="Optional"}i(di,"IsOptional$1");function Gw(e){return Ae(e,"Any")}i(Gw,"IsAny$1");function Hw(e){return Ae(e,"Argument")}i(Hw,"IsArgument$1");function fa(e){return Ae(e,"Array")}i(fa,"IsArray$1");function ld(e){return Ae(e,"AsyncIterator")}i(ld,"IsAsyncIterator$1");function ud(e){return Ae(e,"BigInt")}i(ud,"IsBigInt$1");function Gl(e){return Ae(e,"Boolean")}i(Gl,"IsBoolean$1");function ha(e){return Ae(e,"Computed")}i(ha,"IsComputed$1");function ga(e){return Ae(e,"Constructor")}i(ga,"IsConstructor$1");function hC(e){return Ae(e,"Date")}i(hC,"IsDate$1");function ma(e){return Ae(e,"Function")}i(ma,"IsFunction$1");function pa(e){return Ae(e,"Integer")}i(pa,"IsInteger$1");function $n(e){return Ae(e,"Intersect")}i($n,"IsIntersect$1");function cd(e){return Ae(e,"Iterator")}i(cd,"IsIterator$1");function Ae(e,r){return Or(e)&&U in e&&e[U]===r}i(Ae,"IsKindOf$1");function Zw(e){return ql(e)||ro(e)||Cr(e)}i(Zw,"IsLiteralValue$1");function rs(e){return Ae(e,"Literal")}i(rs,"IsLiteral$1");function ts(e){return Ae(e,"MappedKey")}i(ts,"IsMappedKey$1");function on(e){return Ae(e,"MappedResult")}i(on,"IsMappedResult$1");function Hl(e){return Ae(e,"Never")}i(Hl,"IsNever$1");function gC(e){return Ae(e,"Not")}i(gC,"IsNot$1");function Ag(e){return Ae(e,"Null")}i(Ag,"IsNull$1");function ba(e){return Ae(e,"Number")}i(ba,"IsNumber$1");function zn(e){return Ae(e,"Object")}i(zn,"IsObject$1");function dd(e){return Ae(e,"Promise")}i(dd,"IsPromise$1");function fd(e){return Ae(e,"Record")}i(fd,"IsRecord$1");function jt(e){return Ae(e,"Ref")}i(jt,"IsRef$1");function Jw(e){return Ae(e,"RegExp")}i(Jw,"IsRegExp$1");function Zl(e){return Ae(e,"String")}i(Zl,"IsString$1");function Sg(e){return Ae(e,"Symbol")}i(Sg,"IsSymbol$1");function ns(e){return Ae(e,"TemplateLiteral")}i(ns,"IsTemplateLiteral$1");function mC(e){return Ae(e,"This")}i(mC,"IsThis$1");function rr(e){return Or(e)&&Bt in e}i(rr,"IsTransform$1");function os(e){return Ae(e,"Tuple")}i(os,"IsTuple$1");function Jl(e){return Ae(e,"Undefined")}i(Jl,"IsUndefined$1");function rt(e){return Ae(e,"Union")}i(rt,"IsUnion$1");function pC(e){return Ae(e,"Uint8Array")}i(pC,"IsUint8Array$1");function bC(e){return Ae(e,"Unknown")}i(bC,"IsUnknown$1");function vC(e){return Ae(e,"Unsafe")}i(vC,"IsUnsafe$1");function yC(e){return Ae(e,"Void")}i(yC,"IsVoid$1");function wC(e){return Or(e)&&U in e&&Cr(e[U])}i(wC,"IsKind$1");function Et(e){return Gw(e)||Hw(e)||fa(e)||Gl(e)||ud(e)||ld(e)||ha(e)||ga(e)||hC(e)||ma(e)||pa(e)||$n(e)||cd(e)||rs(e)||ts(e)||on(e)||Hl(e)||gC(e)||Ag(e)||ba(e)||zn(e)||dd(e)||fd(e)||jt(e)||Jw(e)||Zl(e)||Sg(e)||ns(e)||mC(e)||os(e)||Jl(e)||rt(e)||pC(e)||bC(e)||vC(e)||yC(e)||wC(e)}i(Et,"IsSchema$1");const $C=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Yw(e){try{return new RegExp(e),!0}catch{return!1}}i(Yw,"IsPattern");function Mg(e){if(!Cr(e))return!1;for(let r=0;r<e.length;r++){const t=e.charCodeAt(r);if(t>=7&&t<=13||t===27||t===127)return!1}return!0}i(Mg,"IsControlCharacterFree");function Xw(e){return Fg(e)||gr(e)}i(Xw,"IsAdditionalProperties");function Ba(e){return Fr(e)||Lw(e)}i(Ba,"IsOptionalBigInt");function He(e){return Fr(e)||ro(e)}i(He,"IsOptionalNumber");function Fg(e){return Fr(e)||ql(e)}i(Fg,"IsOptionalBoolean");function qe(e){return Fr(e)||Cr(e)}i(qe,"IsOptionalString");function kC(e){return Fr(e)||Cr(e)&&Mg(e)&&Yw(e)}i(kC,"IsOptionalPattern");function xC(e){return Fr(e)||Cr(e)&&Mg(e)}i(xC,"IsOptionalFormat");function Qw(e){return Fr(e)||gr(e)}i(Qw,"IsOptionalSchema");function kc(e){return Or(e)&&e[Eo]==="Optional"}i(kc,"IsOptional");function Bn(e){return Se(e,"Any")&&qe(e.$id)}i(Bn,"IsAny");function DC(e){return Se(e,"Argument")&&ro(e.index)}i(DC,"IsArgument");function is(e){return Se(e,"Array")&&e.type==="array"&&qe(e.$id)&&gr(e.items)&&He(e.minItems)&&He(e.maxItems)&&Fg(e.uniqueItems)&&Qw(e.contains)&&He(e.minContains)&&He(e.maxContains)}i(is,"IsArray");function Tg(e){return Se(e,"AsyncIterator")&&e.type==="AsyncIterator"&&qe(e.$id)&&gr(e.items)}i(Tg,"IsAsyncIterator");function hd(e){return Se(e,"BigInt")&&e.type==="bigint"&&qe(e.$id)&&Ba(e.exclusiveMaximum)&&Ba(e.exclusiveMinimum)&&Ba(e.maximum)&&Ba(e.minimum)&&Ba(e.multipleOf)}i(hd,"IsBigInt");function ss(e){return Se(e,"Boolean")&&e.type==="boolean"&&qe(e.$id)}i(ss,"IsBoolean");function CC(e){return Se(e,"Computed")&&Cr(e.target)&&Ut(e.parameters)&&e.parameters.every(r=>gr(r))}i(CC,"IsComputed");function gd(e){return Se(e,"Constructor")&&e.type==="Constructor"&&qe(e.$id)&&Ut(e.parameters)&&e.parameters.every(r=>gr(r))&&gr(e.returns)}i(gd,"IsConstructor");function md(e){return Se(e,"Date")&&e.type==="Date"&&qe(e.$id)&&He(e.exclusiveMaximumTimestamp)&&He(e.exclusiveMinimumTimestamp)&&He(e.maximumTimestamp)&&He(e.minimumTimestamp)&&He(e.multipleOfTimestamp)}i(md,"IsDate");function pd(e){return Se(e,"Function")&&e.type==="Function"&&qe(e.$id)&&Ut(e.parameters)&&e.parameters.every(r=>gr(r))&&gr(e.returns)}i(pd,"IsFunction");function Ao(e){return Se(e,"Integer")&&e.type==="integer"&&qe(e.$id)&&He(e.exclusiveMaximum)&&He(e.exclusiveMinimum)&&He(e.maximum)&&He(e.minimum)&&He(e.multipleOf)}i(Ao,"IsInteger");function e5(e){return Or(e)&&Object.entries(e).every(([r,t])=>Mg(r)&&gr(t))}i(e5,"IsProperties");function as(e){return Se(e,"Intersect")&&!(Cr(e.type)&&e.type!=="object")&&Ut(e.allOf)&&e.allOf.every(r=>gr(r)&&!TC(r))&&qe(e.type)&&(Fg(e.unevaluatedProperties)||Qw(e.unevaluatedProperties))&&qe(e.$id)}i(as,"IsIntersect");function Ng(e){return Se(e,"Iterator")&&e.type==="Iterator"&&qe(e.$id)&&gr(e.items)}i(Ng,"IsIterator");function Se(e,r){return Or(e)&&U in e&&e[U]===r}i(Se,"IsKindOf");function r5(e){return fi(e)&&Cr(e.const)}i(r5,"IsLiteralString");function t5(e){return fi(e)&&ro(e.const)}i(t5,"IsLiteralNumber");function n5(e){return fi(e)&&ql(e.const)}i(n5,"IsLiteralBoolean");function fi(e){return Se(e,"Literal")&&qe(e.$id)&&EC(e.const)}i(fi,"IsLiteral");function EC(e){return ql(e)||ro(e)||Cr(e)}i(EC,"IsLiteralValue");function AC(e){return Se(e,"MappedKey")&&Ut(e.keys)&&e.keys.every(r=>ro(r)||Cr(r))}i(AC,"IsMappedKey");function SC(e){return Se(e,"MappedResult")&&e5(e.properties)}i(SC,"IsMappedResult");function hi(e){return Se(e,"Never")&&Or(e.not)&&Object.getOwnPropertyNames(e.not).length===0}i(hi,"IsNever");function Ys(e){return Se(e,"Not")&&gr(e.not)}i(Ys,"IsNot");function Pg(e){return Se(e,"Null")&&e.type==="null"&&qe(e.$id)}i(Pg,"IsNull");function Rt(e){return Se(e,"Number")&&e.type==="number"&&qe(e.$id)&&He(e.exclusiveMaximum)&&He(e.exclusiveMinimum)&&He(e.maximum)&&He(e.minimum)&&He(e.multipleOf)}i(Rt,"IsNumber");function mr(e){return Se(e,"Object")&&e.type==="object"&&qe(e.$id)&&e5(e.properties)&&Xw(e.additionalProperties)&&He(e.minProperties)&&He(e.maxProperties)}i(mr,"IsObject");function Ig(e){return Se(e,"Promise")&&e.type==="Promise"&&qe(e.$id)&&gr(e.item)}i(Ig,"IsPromise");function lt(e){return Se(e,"Record")&&e.type==="object"&&qe(e.$id)&&Xw(e.additionalProperties)&&Or(e.patternProperties)&&(r=>{const t=Object.getOwnPropertyNames(r.patternProperties);return t.length===1&&Yw(t[0])&&Or(r.patternProperties)&&gr(r.patternProperties[t[0]])})(e)}i(lt,"IsRecord");function MC(e){return Se(e,"Ref")&&qe(e.$id)&&Cr(e.$ref)}i(MC,"IsRef");function $l(e){return Se(e,"RegExp")&&qe(e.$id)&&Cr(e.source)&&Cr(e.flags)&&He(e.maxLength)&&He(e.minLength)}i($l,"IsRegExp");function Rn(e){return Se(e,"String")&&e.type==="string"&&qe(e.$id)&&He(e.minLength)&&He(e.maxLength)&&kC(e.pattern)&&xC(e.format)}i(Rn,"IsString");function kl(e){return Se(e,"Symbol")&&e.type==="symbol"&&qe(e.$id)}i(kl,"IsSymbol");function xl(e){return Se(e,"TemplateLiteral")&&e.type==="string"&&Cr(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}i(xl,"IsTemplateLiteral");function FC(e){return Se(e,"This")&&qe(e.$id)&&Cr(e.$ref)}i(FC,"IsThis");function TC(e){return Or(e)&&Bt in e}i(TC,"IsTransform");function bd(e){return Se(e,"Tuple")&&e.type==="array"&&qe(e.$id)&&ro(e.minItems)&&ro(e.maxItems)&&e.minItems===e.maxItems&&(Fr(e.items)&&Fr(e.additionalItems)&&e.minItems===0||Ut(e.items)&&e.items.every(r=>gr(r)))}i(bd,"IsTuple");function Ki(e){return Se(e,"Undefined")&&e.type==="undefined"&&qe(e.$id)}i(Ki,"IsUndefined");function Co(e){return Se(e,"Union")&&qe(e.$id)&&Or(e)&&Ut(e.anyOf)&&e.anyOf.every(r=>gr(r))}i(Co,"IsUnion");function Yl(e){return Se(e,"Uint8Array")&&e.type==="Uint8Array"&&qe(e.$id)&&He(e.minByteLength)&&He(e.maxByteLength)}i(Yl,"IsUint8Array");function Ln(e){return Se(e,"Unknown")&&qe(e.$id)}i(Ln,"IsUnknown");function NC(e){return Se(e,"Unsafe")}i(NC,"IsUnsafe");function vd(e){return Se(e,"Void")&&e.type==="void"&&qe(e.$id)}i(vd,"IsVoid");function PC(e){return Or(e)&&U in e&&Cr(e[U])&&!$C.includes(e[U])}i(PC,"IsKind");function gr(e){return Or(e)&&(Bn(e)||DC(e)||is(e)||ss(e)||hd(e)||Tg(e)||CC(e)||gd(e)||md(e)||pd(e)||Ao(e)||as(e)||Ng(e)||fi(e)||AC(e)||SC(e)||hi(e)||Ys(e)||Pg(e)||Rt(e)||mr(e)||Ig(e)||lt(e)||MC(e)||$l(e)||Rn(e)||kl(e)||xl(e)||FC(e)||bd(e)||Ki(e)||Co(e)||Yl(e)||Ln(e)||NC(e)||vd(e)||PC(e))}i(gr,"IsSchema");const IC="(true|false)",Ku="(0|[1-9][0-9]*)",o5="(.*)",OC="(?!.*)",Xs=`^${Ku}$`,Qs=`^${o5}$`,BC=`^${OC}$`,i5=new Map;function Og(e){return i5.has(e)}i(Og,"Has$1");function Bg(e){return i5.get(e)}i(Bg,"Get$1");const Rg=new Map;function ni(e){return Rg.has(e)}i(ni,"Has");function Lg(e,r){Rg.set(e,r)}i(Lg,"Set$1");function jg(e){return Rg.get(e)}i(jg,"Get");function RC(e,r){return e.includes(r)}i(RC,"SetIncludes");function LC(e){return[...new Set(e)]}i(LC,"SetDistinct");function jC(e,r){return e.filter(t=>r.includes(t))}i(jC,"SetIntersect");function _C(e,r){return e.reduce((t,n)=>jC(t,n),r)}i(_C,"SetIntersectManyResolve");function UC(e){return e.length===1?e[0]:e.length>1?_C(e.slice(1),e[0]):[]}i(UC,"SetIntersectMany");function zC(e){const r=[];for(const t of e)r.push(...t);return r}i(zC,"SetUnionMany");function Dl(e){return V({[U]:"Any"},e)}i(Dl,"Any");function _g(e,r){return V({[U]:"Array",type:"array",items:e},r)}i(_g,"Array$1");function VC(e){return V({[U]:"Argument",index:e})}i(VC,"Argument");function Ug(e,r){return V({[U]:"AsyncIterator",type:"AsyncIterator",items:e},r)}i(Ug,"AsyncIterator");function Vr(e,r,t){return V({[U]:"Computed",target:e,parameters:r},t)}i(Vr,"Computed");function qC(e,r){const{[r]:t,...n}=e;return n}i(qC,"DiscardKey");function rn(e,r){return r.reduce((t,n)=>qC(t,n),e)}i(rn,"Discard");function pr(e){return V({[U]:"Never",not:{}},e)}i(pr,"Never");function dt(e){return V({[U]:"MappedResult",properties:e})}i(dt,"MappedResult");function zg(e,r,t){return V({[U]:"Constructor",type:"Constructor",parameters:e,returns:r},t)}i(zg,"Constructor");function Xl(e,r,t){return V({[U]:"Function",type:"Function",parameters:e,returns:r},t)}i(Xl,"Function");function eh(e,r){return V({[U]:"Union",anyOf:e},r)}i(eh,"UnionCreate");function WC(e){return e.some(r=>di(r))}i(WC,"IsUnionOptional");function u1(e){return e.map(r=>di(r)?KC(r):r)}i(u1,"RemoveOptionalFromRest$1");function KC(e){return rn(e,[Eo])}i(KC,"RemoveOptionalFromType$1");function GC(e,r){return WC(e)?pi(eh(u1(e),r)):eh(u1(e),r)}i(GC,"ResolveUnion");function va(e,r){return e.length===1?V(e[0],r):e.length===0?pr(r):GC(e,r)}i(va,"UnionEvaluated");function ft(e,r){return e.length===0?pr(r):e.length===1?V(e[0],r):eh(e,r)}i(ft,"Union$1");class c1 extends ct{static{i(this,"TemplateLiteralParserError")}}function HC(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}i(HC,"Unescape");function Vg(e,r,t){return e[r]===t&&e.charCodeAt(r-1)!==92}i(Vg,"IsNonEscaped");function yo(e,r){return Vg(e,r,"(")}i(yo,"IsOpenParen");function Cl(e,r){return Vg(e,r,")")}i(Cl,"IsCloseParen");function s5(e,r){return Vg(e,r,"|")}i(s5,"IsSeparator");function ZC(e){if(!(yo(e,0)&&Cl(e,e.length-1)))return!1;let r=0;for(let t=0;t<e.length;t++)if(yo(e,t)&&(r+=1),Cl(e,t)&&(r-=1),r===0&&t!==e.length-1)return!1;return!0}i(ZC,"IsGroup");function JC(e){return e.slice(1,e.length-1)}i(JC,"InGroup");function YC(e){let r=0;for(let t=0;t<e.length;t++)if(yo(e,t)&&(r+=1),Cl(e,t)&&(r-=1),s5(e,t)&&r===0)return!0;return!1}i(YC,"IsPrecedenceOr");function XC(e){for(let r=0;r<e.length;r++)if(yo(e,r))return!0;return!1}i(XC,"IsPrecedenceAnd");function QC(e){let[r,t]=[0,0];const n=[];for(let s=0;s<e.length;s++)if(yo(e,s)&&(r+=1),Cl(e,s)&&(r-=1),s5(e,s)&&r===0){const a=e.slice(t,s);a.length>0&&n.push(ea(a)),t=s+1}const o=e.slice(t);return o.length>0&&n.push(ea(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}i(QC,"Or");function eE(e){function r(o,s){if(!yo(o,s))throw new c1("TemplateLiteralParser: Index must point to open parens");let a=0;for(let l=s;l<o.length;l++)if(yo(o,l)&&(a+=1),Cl(o,l)&&(a-=1),a===0)return[s,l];throw new c1("TemplateLiteralParser: Unclosed group parens in expression")}i(r,"Group");function t(o,s){for(let a=s;a<o.length;a++)if(yo(o,a))return[s,a];return[s,o.length]}i(t,"Range");const n=[];for(let o=0;o<e.length;o++)if(yo(e,o)){const[s,a]=r(e,o),l=e.slice(s,a+1);n.push(ea(l)),o=a}else{const[s,a]=t(e,o),l=e.slice(s,a);l.length>0&&n.push(ea(l)),o=a-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}i(eE,"And");function ea(e){return ZC(e)?ea(JC(e)):YC(e)?QC(e):XC(e)?eE(e):{type:"const",const:HC(e)}}i(ea,"TemplateLiteralParse");function qg(e){return ea(e.slice(1,e.length-1))}i(qg,"TemplateLiteralParseExact");class rE extends ct{static{i(this,"TemplateLiteralFiniteError")}}function tE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}i(tE,"IsNumberExpression");function nE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}i(nE,"IsBooleanExpression");function oE(e){return e.type==="const"&&e.const===".*"}i(oE,"IsStringExpression");function El(e){return tE(e)||oE(e)?!1:nE(e)?!0:e.type==="and"?e.expr.every(r=>El(r)):e.type==="or"?e.expr.every(r=>El(r)):e.type==="const"?!0:(()=>{throw new rE("Unknown expression type")})()}i(El,"IsTemplateLiteralExpressionFinite");function iE(e){const r=qg(e.pattern);return El(r)}i(iE,"IsTemplateLiteralFinite");class sE extends ct{static{i(this,"TemplateLiteralGenerateError")}}function*a5(e){if(e.length===1)return yield*e[0];for(const r of e[0])for(const t of a5(e.slice(1)))yield`${r}${t}`}i(a5,"GenerateReduce");function*aE(e){return yield*a5(e.expr.map(r=>[...yd(r)]))}i(aE,"GenerateAnd");function*lE(e){for(const r of e.expr)yield*yd(r)}i(lE,"GenerateOr");function*uE(e){return yield e.const}i(uE,"GenerateConst");function*yd(e){return e.type==="and"?yield*aE(e):e.type==="or"?yield*lE(e):e.type==="const"?yield*uE(e):(()=>{throw new sE("Unknown expression")})()}i(yd,"TemplateLiteralExpressionGenerate");function l5(e){const r=qg(e.pattern);return El(r)?[...yd(r)]:[]}i(l5,"TemplateLiteralGenerate");function Pr(e,r){return V({[U]:"Literal",const:e,type:typeof e},r)}i(Pr,"Literal");function u5(e){return V({[U]:"Boolean",type:"boolean"},e)}i(u5,"Boolean$1");function Wg(e){return V({[U]:"BigInt",type:"bigint"},e)}i(Wg,"BigInt$1");function ls(e){return V({[U]:"Number",type:"number"},e)}i(ls,"Number$1");function Gi(e){return V({[U]:"String",type:"string"},e)}i(Gi,"String$1");function*cE(e){const r=e.trim().replace(/"|'/g,"");return r==="boolean"?yield u5():r==="number"?yield ls():r==="bigint"?yield Wg():r==="string"?yield Gi():yield(()=>{const t=r.split("|").map(n=>Pr(n.trim()));return t.length===0?pr():t.length===1?t[0]:va(t)})()}i(cE,"FromUnion$e");function*dE(e){if(e[1]!=="{"){const r=Pr("$"),t=rh(e.slice(1));return yield*[r,...t]}for(let r=2;r<e.length;r++)if(e[r]==="}"){const t=cE(e.slice(2,r)),n=rh(e.slice(r+1));return yield*[...t,...n]}yield Pr(e)}i(dE,"FromTerminal");function*rh(e){for(let r=0;r<e.length;r++)if(e[r]==="$"){const t=Pr(e.slice(0,r)),n=dE(e.slice(r));return yield*[t,...n]}yield Pr(e)}i(rh,"FromSyntax");function fE(e){return[...rh(e)]}i(fE,"TemplateLiteralSyntax");class hE extends ct{static{i(this,"TemplateLiteralPatternError")}}function gE(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}i(gE,"Escape");function c5(e,r){return ns(e)?e.pattern.slice(1,e.pattern.length-1):rt(e)?`(${e.anyOf.map(t=>c5(t,r)).join("|")})`:ba(e)?`${r}${Ku}`:pa(e)?`${r}${Ku}`:ud(e)?`${r}${Ku}`:Zl(e)?`${r}${o5}`:rs(e)?`${r}${gE(e.const.toString())}`:Gl(e)?`${r}${IC}`:(()=>{throw new hE(`Unexpected Kind '${e[U]}'`)})()}i(c5,"Visit$7");function d1(e){return`^${e.map(r=>c5(r,"")).join("")}$`}i(d1,"TemplateLiteralPattern");function xc(e){const t=l5(e).map(n=>Pr(n));return va(t)}i(xc,"TemplateLiteralToUnion");function d5(e,r){const t=Cr(e)?d1(fE(e)):d1(e);return V({[U]:"TemplateLiteral",type:"string",pattern:t},r)}i(d5,"TemplateLiteral");function mE(e){return l5(e).map(t=>t.toString())}i(mE,"FromTemplateLiteral$4");function pE(e){const r=[];for(const t of e)r.push(...gi(t));return r}i(pE,"FromUnion$d");function bE(e){return[e.toString()]}i(bE,"FromLiteral$3");function gi(e){return[...new Set(ns(e)?mE(e):rt(e)?pE(e.anyOf):rs(e)?bE(e.const):ba(e)?["[number]"]:pa(e)?["[number]"]:[])]}i(gi,"IndexPropertyKeys");function vE(e,r,t){const n={};for(const o of Object.getOwnPropertyNames(r))n[o]=wd(e,gi(r[o]),t);return n}i(vE,"FromProperties$i");function yE(e,r,t){return vE(e,r.properties,t)}i(yE,"FromMappedResult$b");function wE(e,r,t){const n=yE(e,r,t);return dt(n)}i(wE,"IndexFromMappedResult");function f5(e,r){return e.map(t=>h5(t,r))}i(f5,"FromRest$6");function $E(e){return e.filter(r=>!Hl(r))}i($E,"FromIntersectRest");function kE(e,r){return p5($E(f5(e,r)))}i(kE,"FromIntersect$c");function xE(e){return e.some(r=>Hl(r))?[]:e}i(xE,"FromUnionRest");function DE(e,r){return va(xE(f5(e,r)))}i(DE,"FromUnion$c");function CE(e,r){return r in e?e[r]:r==="[number]"?va(e):pr()}i(CE,"FromTuple$9");function EE(e,r){return r==="[number]"?e:pr()}i(EE,"FromArray$a");function AE(e,r){return r in e?e[r]:pr()}i(AE,"FromProperty$2");function h5(e,r){return $n(e)?kE(e.allOf,r):rt(e)?DE(e.anyOf,r):os(e)?CE(e.items??[],r):fa(e)?EE(e.items,r):zn(e)?AE(e.properties,r):pr()}i(h5,"IndexFromPropertyKey");function Kg(e,r){return r.map(t=>h5(e,t))}i(Kg,"IndexFromPropertyKeys");function f1(e,r){return va(Kg(e,r))}i(f1,"FromSchema");function wd(e,r,t){if(jt(e)||jt(r)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Et(e)||!Et(r))throw new ct(n);return Vr("Index",[e,r])}return on(r)?wE(e,r,t):ts(r)?TE(e,r,t):V(Et(r)?f1(e,gi(r)):f1(e,r),t)}i(wd,"Index");function SE(e,r,t){return{[r]:wd(e,[r],Qt(t))}}i(SE,"MappedIndexPropertyKey");function ME(e,r,t){return r.reduce((n,o)=>({...n,...SE(e,o,t)}),{})}i(ME,"MappedIndexPropertyKeys");function FE(e,r,t){return ME(e,r.keys,t)}i(FE,"MappedIndexProperties");function TE(e,r,t){const n=FE(e,r,t);return dt(n)}i(TE,"IndexFromMappedKey");function Gg(e,r){return V({[U]:"Iterator",type:"Iterator",items:e},r)}i(Gg,"Iterator");function NE(e){return globalThis.Object.keys(e).filter(r=>!di(e[r]))}i(NE,"RequiredArray");function PE(e,r){const t=NE(e),n=t.length>0?{[U]:"Object",type:"object",required:t,properties:e}:{[U]:"Object",type:"object",properties:e};return V(n,r)}i(PE,"_Object");var et=PE;function g5(e,r){return V({[U]:"Promise",type:"Promise",item:e},r)}i(g5,"Promise$1");function IE(e){return V(rn(e,[Kl]))}i(IE,"RemoveReadonly");function OE(e){return V({...e,[Kl]:"Readonly"})}i(OE,"AddReadonly");function BE(e,r){return r===!1?IE(e):OE(e)}i(BE,"ReadonlyWithFlag");function mi(e,r){const t=r??!0;return on(e)?jE(e,t):BE(e,t)}i(mi,"Readonly");function RE(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=mi(e[n],r);return t}i(RE,"FromProperties$h");function LE(e,r){return RE(e.properties,r)}i(LE,"FromMappedResult$a");function jE(e,r){const t=LE(e,r);return dt(t)}i(jE,"ReadonlyFromMappedResult");function ya(e,r){return V(e.length>0?{[U]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[U]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},r)}i(ya,"Tuple");function m5(e,r){return e in r?fn(e,r[e]):dt(r)}i(m5,"FromMappedResult$9");function _E(e){return{[e]:Pr(e)}}i(_E,"MappedKeyToKnownMappedResultProperties");function UE(e){const r={};for(const t of e)r[t]=Pr(t);return r}i(UE,"MappedKeyToUnknownMappedResultProperties");function zE(e,r){return RC(r,e)?_E(e):UE(r)}i(zE,"MappedKeyToMappedResultProperties");function VE(e,r){const t=zE(e,r);return m5(e,t)}i(VE,"FromMappedKey$3");function Ra(e,r){return r.map(t=>fn(e,t))}i(Ra,"FromRest$5");function qE(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(r))t[n]=fn(e,r[n]);return t}i(qE,"FromProperties$g");function fn(e,r){const t={...r};return di(r)?pi(fn(e,rn(r,[Eo]))):Eg(r)?mi(fn(e,rn(r,[Kl]))):on(r)?m5(e,r.properties):ts(r)?VE(e,r.keys):ga(r)?zg(Ra(e,r.parameters),fn(e,r.returns),t):ma(r)?Xl(Ra(e,r.parameters),fn(e,r.returns),t):ld(r)?Ug(fn(e,r.items),t):cd(r)?Gg(fn(e,r.items),t):$n(r)?bi(Ra(e,r.allOf),t):rt(r)?ft(Ra(e,r.anyOf),t):os(r)?ya(Ra(e,r.items??[]),t):zn(r)?et(qE(e,r.properties),t):fa(r)?_g(fn(e,r.items),t):dd(r)?g5(fn(e,r.item),t):r}i(fn,"FromSchemaType");function WE(e,r){const t={};for(const n of e)t[n]=fn(n,r);return t}i(WE,"MappedFunctionReturnType");function KE(e,r,t){const n=Et(e)?gi(e):e,o=r({[U]:"MappedKey",keys:n}),s=WE(n,o);return et(s,t)}i(KE,"Mapped");function GE(e){return V(rn(e,[Eo]))}i(GE,"RemoveOptional");function HE(e){return V({...e,[Eo]:"Optional"})}i(HE,"AddOptional");function ZE(e,r){return r===!1?GE(e):HE(e)}i(ZE,"OptionalWithFlag");function pi(e,r){const t=r??!0;return on(e)?XE(e,t):ZE(e,t)}i(pi,"Optional");function JE(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=pi(e[n],r);return t}i(JE,"FromProperties$f");function YE(e,r){return JE(e.properties,r)}i(YE,"FromMappedResult$8");function XE(e,r){const t=YE(e,r);return dt(t)}i(XE,"OptionalFromMappedResult");function th(e,r={}){const t=e.every(o=>zn(o)),n=Et(r.unevaluatedProperties)?{unevaluatedProperties:r.unevaluatedProperties}:{};return V(r.unevaluatedProperties===!1||Et(r.unevaluatedProperties)||t?{...n,[U]:"Intersect",type:"object",allOf:e}:{...n,[U]:"Intersect",allOf:e},r)}i(th,"IntersectCreate");function QE(e){return e.every(r=>di(r))}i(QE,"IsIntersectOptional");function eA(e){return rn(e,[Eo])}i(eA,"RemoveOptionalFromType");function h1(e){return e.map(r=>di(r)?eA(r):r)}i(h1,"RemoveOptionalFromRest");function rA(e,r){return QE(e)?pi(th(h1(e),r)):th(h1(e),r)}i(rA,"ResolveIntersect");function p5(e,r={}){if(e.length===1)return V(e[0],r);if(e.length===0)return pr(r);if(e.some(t=>rr(t)))throw new Error("Cannot intersect transform types");return rA(e,r)}i(p5,"IntersectEvaluated");function bi(e,r){if(e.length===1)return V(e[0],r);if(e.length===0)return pr(r);if(e.some(t=>rr(t)))throw new Error("Cannot intersect transform types");return th(e,r)}i(bi,"Intersect$1");function wa(...e){const[r,t]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof r!="string")throw new ct("Ref: $ref must be a string");return V({[U]:"Ref",$ref:r},t)}i(wa,"Ref");function tA(e,r){return Vr("Awaited",[Vr(e,r)])}i(tA,"FromComputed$4");function nA(e){return Vr("Awaited",[wa(e)])}i(nA,"FromRef$8");function oA(e){return bi(b5(e))}i(oA,"FromIntersect$b");function iA(e){return ft(b5(e))}i(iA,"FromUnion$b");function sA(e){return $d(e)}i(sA,"FromPromise$5");function b5(e){return e.map(r=>$d(r))}i(b5,"FromRest$4");function $d(e,r){return V(ha(e)?tA(e.target,e.parameters):$n(e)?oA(e.allOf):rt(e)?iA(e.anyOf):dd(e)?sA(e.item):jt(e)?nA(e.$ref):e,r)}i($d,"Awaited");function v5(e){const r=[];for(const t of e)r.push(us(t));return r}i(v5,"FromRest$3");function aA(e){const r=v5(e);return zC(r)}i(aA,"FromIntersect$a");function lA(e){const r=v5(e);return UC(r)}i(lA,"FromUnion$a");function uA(e){return e.map((r,t)=>t.toString())}i(uA,"FromTuple$8");function cA(e){return["[number]"]}i(cA,"FromArray$9");function dA(e){return globalThis.Object.getOwnPropertyNames(e)}i(dA,"FromProperties$e");function fA(e){return nh?globalThis.Object.getOwnPropertyNames(e).map(t=>t[0]==="^"&&t[t.length-1]==="$"?t.slice(1,t.length-1):t):[]}i(fA,"FromPatternProperties");function us(e){return $n(e)?aA(e.allOf):rt(e)?lA(e.anyOf):os(e)?uA(e.items??[]):fa(e)?cA(e.items):zn(e)?dA(e.properties):fd(e)?fA(e.patternProperties):[]}i(us,"KeyOfPropertyKeys");let nh=!1;function ra(e){nh=!0;const r=us(e);return nh=!1,`^(${r.map(n=>`(${n})`).join("|")})$`}i(ra,"KeyOfPattern");function hA(e,r){return Vr("KeyOf",[Vr(e,r)])}i(hA,"FromComputed$3");function gA(e){return Vr("KeyOf",[wa(e)])}i(gA,"FromRef$7");function mA(e,r){const t=us(e),n=pA(t),o=va(n);return V(o,r)}i(mA,"KeyOfFromType");function pA(e){return e.map(r=>r==="[number]"?ls():Pr(r))}i(pA,"KeyOfPropertyKeysToRest");function Hg(e,r){return ha(e)?hA(e.target,e.parameters):jt(e)?gA(e.$ref):on(e)?yA(e,r):mA(e,r)}i(Hg,"KeyOf");function bA(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Hg(e[n],Qt(r));return t}i(bA,"FromProperties$d");function vA(e,r){return bA(e.properties,r)}i(vA,"FromMappedResult$7");function yA(e,r){const t=vA(e,r);return dt(t)}i(yA,"KeyOfFromMappedResult");function y5(e){const r=us(e),t=Kg(e,r);return r.map((n,o)=>[r[o],t[o]])}i(y5,"KeyOfPropertyEntries");function wA(e){const r=[];for(const t of e)r.push(...us(t));return LC(r)}i(wA,"CompositeKeys");function $A(e){return e.filter(r=>!Hl(r))}i($A,"FilterNever");function kA(e,r){const t=[];for(const n of e)t.push(...Kg(n,[r]));return $A(t)}i(kA,"CompositeProperty");function xA(e,r){const t={};for(const n of r)t[n]=p5(kA(e,n));return t}i(xA,"CompositeProperties");function DA(e,r){const t=wA(e),n=xA(e,t);return et(n,r)}i(DA,"Composite");function w5(e){return V({[U]:"Date",type:"Date"},e)}i(w5,"Date$1");function $5(e){return V({[U]:"Null",type:"null"},e)}i($5,"Null");function k5(e){return V({[U]:"Symbol",type:"symbol"},e)}i(k5,"Symbol$1");function x5(e){return V({[U]:"Undefined",type:"undefined"},e)}i(x5,"Undefined");function D5(e){return V({[U]:"Uint8Array",type:"Uint8Array"},e)}i(D5,"Uint8Array$1");function kd(e){return V({[U]:"Unknown"},e)}i(kd,"Unknown");function CA(e){return e.map(r=>Zg(r,!1))}i(CA,"FromArray$8");function EA(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=mi(Zg(e[t],!1));return r}i(EA,"FromProperties$c");function Eu(e,r){return r===!0?e:mi(e)}i(Eu,"ConditionalReadonly");function Zg(e,r){return rC(e)||nC(e)?Eu(Dl(),r):Ut(e)?mi(ya(CA(e))):Wl(e)?D5():kg(e)?w5():Or(e)?Eu(et(EA(e)),r):tC(e)?Eu(Xl([],kd()),r):Fr(e)?x5():oC(e)?$5():iC(e)?k5():Lw(e)?Wg():ro(e)||ql(e)||Cr(e)?Pr(e):et({})}i(Zg,"FromValue");function AA(e,r){return V(Zg(e,!0),r)}i(AA,"Const");function SA(e,r){return ga(e)?ya(e.parameters,r):pr(r)}i(SA,"ConstructorParameters");function MA(e,r){if(Fr(e))throw new Error("Enum undefined or empty");const t=globalThis.Object.getOwnPropertyNames(e).filter(s=>isNaN(s)).map(s=>e[s]),o=[...new Set(t)].map(s=>Pr(s));return ft(o,{...r,[ad]:"Enum"})}i(MA,"Enum");class FA extends ct{static{i(this,"ExtendsResolverError")}}var P;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(P||(P={}));function yn(e){return e===P.False?e:P.True}i(yn,"IntoBooleanResult");function $a(e){throw new FA(e)}i($a,"Throw");function Br(e){return hi(e)||as(e)||Co(e)||Ln(e)||Bn(e)}i(Br,"IsStructuralRight");function Rr(e,r){return hi(r)?A5():as(r)?xd(e,r):Co(r)?Yg(e,r):Ln(r)?T5():Bn(r)?Jg():$a("StructuralRight")}i(Rr,"StructuralRight");function Jg(e,r){return P.True}i(Jg,"FromAnyRight");function TA(e,r){return as(r)?xd(e,r):Co(r)&&r.anyOf.some(t=>Bn(t)||Ln(t))?P.True:Co(r)?P.Union:Ln(r)||Bn(r)?P.True:P.Union}i(TA,"FromAny$2");function NA(e,r){return Ln(e)?P.False:Bn(e)?P.Union:hi(e)?P.True:P.False}i(NA,"FromArrayRight");function PA(e,r){return mr(r)&&Dd(r)?P.True:Br(r)?Rr(e,r):is(r)?yn(Ve(e.items,r.items)):P.False}i(PA,"FromArray$7");function IA(e,r){return Br(r)?Rr(e,r):Tg(r)?yn(Ve(e.items,r.items)):P.False}i(IA,"FromAsyncIterator$5");function OA(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):hd(r)?P.True:P.False}i(OA,"FromBigInt$2");function C5(e,r){return n5(e)||ss(e)?P.True:P.False}i(C5,"FromBooleanRight");function BA(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):ss(r)?P.True:P.False}i(BA,"FromBoolean$2");function RA(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):gd(r)?e.parameters.length>r.parameters.length?P.False:e.parameters.every((t,n)=>yn(Ve(r.parameters[n],t))===P.True)?yn(Ve(e.returns,r.returns)):P.False:P.False}i(RA,"FromConstructor$5");function LA(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):md(r)?P.True:P.False}i(LA,"FromDate$2");function jA(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):pd(r)?e.parameters.length>r.parameters.length?P.False:e.parameters.every((t,n)=>yn(Ve(r.parameters[n],t))===P.True)?yn(Ve(e.returns,r.returns)):P.False:P.False}i(jA,"FromFunction$5");function E5(e,r){return fi(e)&&ro(e.const)||Rt(e)||Ao(e)?P.True:P.False}i(E5,"FromIntegerRight");function _A(e,r){return Ao(r)||Rt(r)?P.True:Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):P.False}i(_A,"FromInteger$2");function xd(e,r){return r.allOf.every(t=>Ve(e,t)===P.True)?P.True:P.False}i(xd,"FromIntersectRight");function UA(e,r){return e.allOf.some(t=>Ve(t,r)===P.True)?P.True:P.False}i(UA,"FromIntersect$9");function zA(e,r){return Br(r)?Rr(e,r):Ng(r)?yn(Ve(e.items,r.items)):P.False}i(zA,"FromIterator$5");function VA(e,r){return fi(r)&&r.const===e.const?P.True:Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):Rn(r)?F5(e):Rt(r)?S5(e):Ao(r)?E5(e):ss(r)?C5(e):P.False}i(VA,"FromLiteral$2");function A5(e,r){return P.False}i(A5,"FromNeverRight");function qA(e,r){return P.True}i(qA,"FromNever$2");function g1(e){let[r,t]=[e,0];for(;Ys(r);)r=r.not,t+=1;return t%2===0?r:kd()}i(g1,"UnwrapTNot");function WA(e,r){return Ys(e)?Ve(g1(e),r):Ys(r)?Ve(e,g1(r)):$a("Invalid fallthrough for Not")}i(WA,"FromNot$5");function KA(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):Pg(r)?P.True:P.False}i(KA,"FromNull$2");function S5(e,r){return t5(e)||Rt(e)||Ao(e)?P.True:P.False}i(S5,"FromNumberRight");function GA(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):Ao(r)||Rt(r)?P.True:P.False}i(GA,"FromNumber$2");function _t(e,r){return Object.getOwnPropertyNames(e.properties).length===r}i(_t,"IsObjectPropertyCount");function m1(e){return Dd(e)}i(m1,"IsObjectStringLike");function p1(e){return _t(e,0)||_t(e,1)&&"description"in e.properties&&Co(e.properties.description)&&e.properties.description.anyOf.length===2&&(Rn(e.properties.description.anyOf[0])&&Ki(e.properties.description.anyOf[1])||Rn(e.properties.description.anyOf[1])&&Ki(e.properties.description.anyOf[0]))}i(p1,"IsObjectSymbolLike");function Of(e){return _t(e,0)}i(Of,"IsObjectNumberLike");function b1(e){return _t(e,0)}i(b1,"IsObjectBooleanLike");function HA(e){return _t(e,0)}i(HA,"IsObjectBigIntLike");function ZA(e){return _t(e,0)}i(ZA,"IsObjectDateLike");function JA(e){return Dd(e)}i(JA,"IsObjectUint8ArrayLike");function YA(e){const r=ls();return _t(e,0)||_t(e,1)&&"length"in e.properties&&yn(Ve(e.properties.length,r))===P.True}i(YA,"IsObjectFunctionLike");function XA(e){return _t(e,0)}i(XA,"IsObjectConstructorLike");function Dd(e){const r=ls();return _t(e,0)||_t(e,1)&&"length"in e.properties&&yn(Ve(e.properties.length,r))===P.True}i(Dd,"IsObjectArrayLike");function QA(e){const r=Xl([Dl()],Dl());return _t(e,0)||_t(e,1)&&"then"in e.properties&&yn(Ve(e.properties.then,r))===P.True}i(QA,"IsObjectPromiseLike");function M5(e,r){return Ve(e,r)===P.False||kc(e)&&!kc(r)?P.False:P.True}i(M5,"Property");function $t(e,r){return Ln(e)?P.False:Bn(e)?P.Union:hi(e)||r5(e)&&m1(r)||t5(e)&&Of(r)||n5(e)&&b1(r)||kl(e)&&p1(r)||hd(e)&&HA(r)||Rn(e)&&m1(r)||kl(e)&&p1(r)||Rt(e)&&Of(r)||Ao(e)&&Of(r)||ss(e)&&b1(r)||Yl(e)&&JA(r)||md(e)&&ZA(r)||gd(e)&&XA(r)||pd(e)&&YA(r)?P.True:lt(e)&&Rn(oh(e))?r[ad]==="Record"?P.True:P.False:lt(e)&&Rt(oh(e))&&_t(r,0)?P.True:P.False}i($t,"FromObjectRight");function e7(e,r){return Br(r)?Rr(e,r):lt(r)?kn(e,r):mr(r)?(()=>{for(const t of Object.getOwnPropertyNames(r.properties)){if(!(t in e.properties)&&!kc(r.properties[t]))return P.False;if(kc(r.properties[t]))return P.True;if(M5(e.properties[t],r.properties[t])===P.False)return P.False}return P.True})():P.False}i(e7,"FromObject$b");function r7(e,r){return Br(r)?Rr(e,r):mr(r)&&QA(r)?P.True:Ig(r)?yn(Ve(e.item,r.item)):P.False}i(r7,"FromPromise$4");function oh(e){return Xs in e.patternProperties?ls():Qs in e.patternProperties?Gi():$a("Unknown record key pattern")}i(oh,"RecordKey$1");function ih(e){return Xs in e.patternProperties?e.patternProperties[Xs]:Qs in e.patternProperties?e.patternProperties[Qs]:$a("Unable to get record value schema")}i(ih,"RecordValue$1");function kn(e,r){const[t,n]=[oh(r),ih(r)];return r5(e)&&Rt(t)&&yn(Ve(e,n))===P.True?P.True:Yl(e)&&Rt(t)||Rn(e)&&Rt(t)||is(e)&&Rt(t)?Ve(e,n):mr(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(M5(n,e.properties[o])===P.False)return P.False;return P.True})():P.False}i(kn,"FromRecordRight");function t7(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?Ve(ih(e),ih(r)):P.False}i(t7,"FromRecord$7");function n7(e,r){const t=$l(e)?Gi():e,n=$l(r)?Gi():r;return Ve(t,n)}i(n7,"FromRegExp$2");function F5(e,r){return fi(e)&&Cr(e.const)||Rn(e)?P.True:P.False}i(F5,"FromStringRight");function o7(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):Rn(r)?P.True:P.False}i(o7,"FromString$2");function i7(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):kl(r)?P.True:P.False}i(i7,"FromSymbol$2");function s7(e,r){return xl(e)?Ve(xc(e),r):xl(r)?Ve(e,xc(r)):$a("Invalid fallthrough for TemplateLiteral")}i(s7,"FromTemplateLiteral$3");function a7(e,r){return is(r)&&e.items!==void 0&&e.items.every(t=>Ve(t,r.items)===P.True)}i(a7,"IsArrayOfTuple");function l7(e,r){return hi(e)?P.True:Ln(e)?P.False:Bn(e)?P.Union:P.False}i(l7,"FromTupleRight");function u7(e,r){return Br(r)?Rr(e,r):mr(r)&&Dd(r)||is(r)&&a7(e,r)?P.True:bd(r)?Fr(e.items)&&!Fr(r.items)||!Fr(e.items)&&Fr(r.items)?P.False:Fr(e.items)&&!Fr(r.items)||e.items.every((t,n)=>Ve(t,r.items[n])===P.True)?P.True:P.False:P.False}i(u7,"FromTuple$7");function c7(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):Yl(r)?P.True:P.False}i(c7,"FromUint8Array$2");function d7(e,r){return Br(r)?Rr(e,r):mr(r)?$t(e,r):lt(r)?kn(e,r):vd(r)?g7(e):Ki(r)?P.True:P.False}i(d7,"FromUndefined$2");function Yg(e,r){return r.anyOf.some(t=>Ve(e,t)===P.True)?P.True:P.False}i(Yg,"FromUnionRight");function f7(e,r){return e.anyOf.every(t=>Ve(t,r)===P.True)?P.True:P.False}i(f7,"FromUnion$9");function T5(e,r){return P.True}i(T5,"FromUnknownRight");function h7(e,r){return hi(r)?A5():as(r)?xd(e,r):Co(r)?Yg(e,r):Bn(r)?Jg():Rn(r)?F5(e):Rt(r)?S5(e):Ao(r)?E5(e):ss(r)?C5(e):is(r)?NA(e):bd(r)?l7(e):mr(r)?$t(e,r):Ln(r)?P.True:P.False}i(h7,"FromUnknown$2");function g7(e,r){return Ki(e)||Ki(e)?P.True:P.False}i(g7,"FromVoidRight");function m7(e,r){return as(r)?xd(e,r):Co(r)?Yg(e,r):Ln(r)?T5():Bn(r)?Jg():mr(r)?$t(e,r):vd(r)?P.True:P.False}i(m7,"FromVoid$2");function Ve(e,r){return xl(e)||xl(r)?s7(e,r):$l(e)||$l(r)?n7(e,r):Ys(e)||Ys(r)?WA(e,r):Bn(e)?TA(e,r):is(e)?PA(e,r):hd(e)?OA(e,r):ss(e)?BA(e,r):Tg(e)?IA(e,r):gd(e)?RA(e,r):md(e)?LA(e,r):pd(e)?jA(e,r):Ao(e)?_A(e,r):as(e)?UA(e,r):Ng(e)?zA(e,r):fi(e)?VA(e,r):hi(e)?qA():Pg(e)?KA(e,r):Rt(e)?GA(e,r):mr(e)?e7(e,r):lt(e)?t7(e,r):Rn(e)?o7(e,r):kl(e)?i7(e,r):bd(e)?u7(e,r):Ig(e)?r7(e,r):Yl(e)?c7(e,r):Ki(e)?d7(e,r):Co(e)?f7(e,r):Ln(e)?h7(e,r):vd(e)?m7(e,r):$a(`Unknown left type operand '${e[U]}'`)}i(Ve,"Visit$6");function Ql(e,r){return Ve(e,r)}i(Ql,"ExtendsCheck");function p7(e,r,t,n,o){const s={};for(const a of globalThis.Object.getOwnPropertyNames(e))s[a]=Xg(e[a],r,t,n,Qt(o));return s}i(p7,"FromProperties$b");function b7(e,r,t,n,o){return p7(e.properties,r,t,n,o)}i(b7,"FromMappedResult$6");function v7(e,r,t,n,o){const s=b7(e,r,t,n,o);return dt(s)}i(v7,"ExtendsFromMappedResult");function y7(e,r,t,n){const o=Ql(e,r);return o===P.Union?ft([t,n]):o===P.True?t:n}i(y7,"ExtendsResolve");function Xg(e,r,t,n,o){return on(e)?v7(e,r,t,n,o):ts(e)?V(x7(e,r,t,n,o)):V(y7(e,r,t,n),o)}i(Xg,"Extends");function w7(e,r,t,n,o){return{[e]:Xg(Pr(e),r,t,n,Qt(o))}}i(w7,"FromPropertyKey$2");function $7(e,r,t,n,o){return e.reduce((s,a)=>({...s,...w7(a,r,t,n,o)}),{})}i($7,"FromPropertyKeys$2");function k7(e,r,t,n,o){return $7(e.keys,r,t,n,o)}i(k7,"FromMappedKey$2");function x7(e,r,t,n,o){const s=k7(e,r,t,n,o);return dt(s)}i(x7,"ExtendsFromMappedKey");function D7(e){return e.allOf.every(r=>ka(r))}i(D7,"Intersect");function C7(e){return e.anyOf.some(r=>ka(r))}i(C7,"Union");function E7(e){return!ka(e.not)}i(E7,"Not$1");function ka(e){return e[U]==="Intersect"?D7(e):e[U]==="Union"?C7(e):e[U]==="Not"?E7(e):e[U]==="Undefined"}i(ka,"ExtendsUndefinedCheck");function A7(e,r){return Qg(xc(e),r)}i(A7,"ExcludeFromTemplateLiteral");function S7(e,r){const t=e.filter(n=>Ql(n,r)===P.False);return t.length===1?t[0]:ft(t)}i(S7,"ExcludeRest");function Qg(e,r,t={}){return ns(e)?V(A7(e,r),t):on(e)?V(T7(e,r),t):V(rt(e)?S7(e.anyOf,r):Ql(e,r)!==P.False?pr():e,t)}i(Qg,"Exclude");function M7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Qg(e[n],r);return t}i(M7,"FromProperties$a");function F7(e,r){return M7(e.properties,r)}i(F7,"FromMappedResult$5");function T7(e,r){const t=F7(e,r);return dt(t)}i(T7,"ExcludeFromMappedResult");function N7(e,r){return em(xc(e),r)}i(N7,"ExtractFromTemplateLiteral");function P7(e,r){const t=e.filter(n=>Ql(n,r)!==P.False);return t.length===1?t[0]:ft(t)}i(P7,"ExtractRest");function em(e,r,t){return ns(e)?V(N7(e,r),t):on(e)?V(B7(e,r),t):V(rt(e)?P7(e.anyOf,r):Ql(e,r)!==P.False?e:pr(),t)}i(em,"Extract");function I7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=em(e[n],r);return t}i(I7,"FromProperties$9");function O7(e,r){return I7(e.properties,r)}i(O7,"FromMappedResult$4");function B7(e,r){const t=O7(e,r);return dt(t)}i(B7,"ExtractFromMappedResult");function R7(e,r){return ga(e)?V(e.returns,r):pr(r)}i(R7,"InstanceType");function N5(e){return mi(pi(e))}i(N5,"ReadonlyOptional");function cs(e,r,t){return V({[U]:"Record",type:"object",patternProperties:{[e]:r}},t)}i(cs,"RecordCreateFromPattern");function rm(e,r,t){const n={};for(const o of e)n[o]=r;return et(n,{...t,[ad]:"Record"})}i(rm,"RecordCreateFromKeys");function L7(e,r,t){return iE(e)?rm(gi(e),r,t):cs(e.pattern,r,t)}i(L7,"FromTemplateLiteralKey");function j7(e,r,t){return rm(gi(ft(e)),r,t)}i(j7,"FromUnionKey");function _7(e,r,t){return rm([e.toString()],r,t)}i(_7,"FromLiteralKey");function U7(e,r,t){return cs(e.source,r,t)}i(U7,"FromRegExpKey");function z7(e,r,t){const n=Fr(e.pattern)?Qs:e.pattern;return cs(n,r,t)}i(z7,"FromStringKey");function V7(e,r,t){return cs(Qs,r,t)}i(V7,"FromAnyKey");function q7(e,r,t){return cs(BC,r,t)}i(q7,"FromNeverKey");function W7(e,r,t){return et({true:r,false:r},t)}i(W7,"FromBooleanKey");function K7(e,r,t){return cs(Xs,r,t)}i(K7,"FromIntegerKey");function G7(e,r,t){return cs(Xs,r,t)}i(G7,"FromNumberKey");function P5(e,r,t={}){return rt(e)?j7(e.anyOf,r,t):ns(e)?L7(e,r,t):rs(e)?_7(e.const,r,t):Gl(e)?W7(e,r,t):pa(e)?K7(e,r,t):ba(e)?G7(e,r,t):Jw(e)?U7(e,r,t):Zl(e)?z7(e,r,t):Gw(e)?V7(e,r,t):Hl(e)?q7(e,r,t):pr(t)}i(P5,"Record");function tm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}i(tm,"RecordPattern");function H7(e){const r=tm(e);return r===Qs?Gi():r===Xs?ls():Gi({pattern:r})}i(H7,"RecordKey");function I5(e){return e.patternProperties[tm(e)]}i(I5,"RecordValue");function Z7(e,r){return r.parameters=eu(e,r.parameters),r.returns=jn(e,r.returns),r}i(Z7,"FromConstructor$4");function J7(e,r){return r.parameters=eu(e,r.parameters),r.returns=jn(e,r.returns),r}i(J7,"FromFunction$4");function Y7(e,r){return r.allOf=eu(e,r.allOf),r}i(Y7,"FromIntersect$8");function X7(e,r){return r.anyOf=eu(e,r.anyOf),r}i(X7,"FromUnion$8");function Q7(e,r){return Fr(r.items)||(r.items=eu(e,r.items)),r}i(Q7,"FromTuple$6");function eS(e,r){return r.items=jn(e,r.items),r}i(eS,"FromArray$6");function rS(e,r){return r.items=jn(e,r.items),r}i(rS,"FromAsyncIterator$4");function tS(e,r){return r.items=jn(e,r.items),r}i(tS,"FromIterator$4");function nS(e,r){return r.item=jn(e,r.item),r}i(nS,"FromPromise$3");function oS(e,r){const t=lS(e,r.properties);return{...r,...et(t)}}i(oS,"FromObject$a");function iS(e,r){const t=jn(e,H7(r)),n=jn(e,I5(r)),o=P5(t,n);return{...r,...o}}i(iS,"FromRecord$6");function sS(e,r){return r.index in e?e[r.index]:kd()}i(sS,"FromArgument$2");function aS(e,r){const t=Eg(r),n=di(r),o=jn(e,r);return t&&n?N5(o):t&&!n?mi(o):!t&&n?pi(o):o}i(aS,"FromProperty$1");function lS(e,r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:aS(e,r[n])}),{})}i(lS,"FromProperties$8");function eu(e,r){return r.map(t=>jn(e,t))}i(eu,"FromTypes$1");function jn(e,r){return ga(r)?Z7(e,r):ma(r)?J7(e,r):$n(r)?Y7(e,r):rt(r)?X7(e,r):os(r)?Q7(e,r):fa(r)?eS(e,r):ld(r)?rS(e,r):cd(r)?tS(e,r):dd(r)?nS(e,r):zn(r)?oS(e,r):fd(r)?iS(e,r):Hw(r)?sS(e,r):r}i(jn,"FromType$1");function uS(e,r){return jn(r,xg(e))}i(uS,"Instantiate");function cS(e){return V({[U]:"Integer",type:"integer"},e)}i(cS,"Integer");function dS(e,r,t){return{[e]:xa(Pr(e),r,Qt(t))}}i(dS,"MappedIntrinsicPropertyKey");function fS(e,r,t){return e.reduce((o,s)=>({...o,...dS(s,r,t)}),{})}i(fS,"MappedIntrinsicPropertyKeys");function hS(e,r,t){return fS(e.keys,r,t)}i(hS,"MappedIntrinsicProperties");function gS(e,r,t){const n=hS(e,r,t);return dt(n)}i(gS,"IntrinsicFromMappedKey");function mS(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toLowerCase(),t].join("")}i(mS,"ApplyUncapitalize");function pS(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toUpperCase(),t].join("")}i(pS,"ApplyCapitalize");function bS(e){return e.toUpperCase()}i(bS,"ApplyUppercase");function vS(e){return e.toLowerCase()}i(vS,"ApplyLowercase");function yS(e,r,t){const n=qg(e.pattern);if(!El(n))return{...e,pattern:O5(e.pattern,r)};const a=[...yd(n)].map(d=>Pr(d)),l=B5(a,r),u=ft(l);return d5([u],t)}i(yS,"FromTemplateLiteral$2");function O5(e,r){return typeof e=="string"?r==="Uncapitalize"?mS(e):r==="Capitalize"?pS(e):r==="Uppercase"?bS(e):r==="Lowercase"?vS(e):e:e.toString()}i(O5,"FromLiteralValue");function B5(e,r){return e.map(t=>xa(t,r))}i(B5,"FromRest$2");function xa(e,r,t={}){return ts(e)?gS(e,r,t):ns(e)?yS(e,r,t):rt(e)?ft(B5(e.anyOf,r),t):rs(e)?Pr(O5(e.const,r),t):V(e,t)}i(xa,"Intrinsic");function wS(e,r={}){return xa(e,"Capitalize",r)}i(wS,"Capitalize");function $S(e,r={}){return xa(e,"Lowercase",r)}i($S,"Lowercase");function kS(e,r={}){return xa(e,"Uncapitalize",r)}i(kS,"Uncapitalize");function xS(e,r={}){return xa(e,"Uppercase",r)}i(xS,"Uppercase");function DS(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=Cd(e[o],r,Qt(t));return n}i(DS,"FromProperties$7");function CS(e,r,t){return DS(e.properties,r,t)}i(CS,"FromMappedResult$3");function ES(e,r,t){const n=CS(e,r,t);return dt(n)}i(ES,"OmitFromMappedResult");function AS(e,r){return e.map(t=>nm(t,r))}i(AS,"FromIntersect$7");function SS(e,r){return e.map(t=>nm(t,r))}i(SS,"FromUnion$7");function MS(e,r){const{[r]:t,...n}=e;return n}i(MS,"FromProperty");function FS(e,r){return r.reduce((t,n)=>MS(t,n),e)}i(FS,"FromProperties$6");function TS(e,r,t){const n=rn(e,[Bt,"$id","required","properties"]),o=FS(t,r);return et(o,n)}i(TS,"FromObject$9");function NS(e){const r=e.reduce((t,n)=>Zw(n)?[...t,Pr(n)]:t,[]);return ft(r)}i(NS,"UnionFromPropertyKeys$1");function nm(e,r){return $n(e)?bi(AS(e.allOf,r)):rt(e)?ft(SS(e.anyOf,r)):zn(e)?TS(e,r,e.properties):et({})}i(nm,"OmitResolve");function Cd(e,r,t){const n=Ut(r)?NS(r):r,o=Et(r)?gi(r):r,s=jt(e),a=jt(r);return on(e)?ES(e,o,t):ts(r)?BS(e,r,t):s&&a?Vr("Omit",[e,n],t):!s&&a?Vr("Omit",[e,n],t):s&&!a?Vr("Omit",[e,n],t):V({...nm(e,o),...t})}i(Cd,"Omit");function PS(e,r,t){return{[r]:Cd(e,[r],Qt(t))}}i(PS,"FromPropertyKey$1");function IS(e,r,t){return r.reduce((n,o)=>({...n,...PS(e,o,t)}),{})}i(IS,"FromPropertyKeys$1");function OS(e,r,t){return IS(e,r.keys,t)}i(OS,"FromMappedKey$1");function BS(e,r,t){const n=OS(e,r,t);return dt(n)}i(BS,"OmitFromMappedKey");function RS(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=Ed(e[o],r,Qt(t));return n}i(RS,"FromProperties$5");function LS(e,r,t){return RS(e.properties,r,t)}i(LS,"FromMappedResult$2");function jS(e,r,t){const n=LS(e,r,t);return dt(n)}i(jS,"PickFromMappedResult");function _S(e,r){return e.map(t=>om(t,r))}i(_S,"FromIntersect$6");function US(e,r){return e.map(t=>om(t,r))}i(US,"FromUnion$6");function zS(e,r){const t={};for(const n of r)n in e&&(t[n]=e[n]);return t}i(zS,"FromProperties$4");function VS(e,r,t){const n=rn(e,[Bt,"$id","required","properties"]),o=zS(t,r);return et(o,n)}i(VS,"FromObject$8");function qS(e){const r=e.reduce((t,n)=>Zw(n)?[...t,Pr(n)]:t,[]);return ft(r)}i(qS,"UnionFromPropertyKeys");function om(e,r){return $n(e)?bi(_S(e.allOf,r)):rt(e)?ft(US(e.anyOf,r)):zn(e)?VS(e,r,e.properties):et({})}i(om,"PickResolve");function Ed(e,r,t){const n=Ut(r)?qS(r):r,o=Et(r)?gi(r):r,s=jt(e),a=jt(r);return on(e)?jS(e,o,t):ts(r)?HS(e,r,t):s&&a?Vr("Pick",[e,n],t):!s&&a?Vr("Pick",[e,n],t):s&&!a?Vr("Pick",[e,n],t):V({...om(e,o),...t})}i(Ed,"Pick");function WS(e,r,t){return{[r]:Ed(e,[r],Qt(t))}}i(WS,"FromPropertyKey");function KS(e,r,t){return r.reduce((n,o)=>({...n,...WS(e,o,t)}),{})}i(KS,"FromPropertyKeys");function GS(e,r,t){return KS(e,r.keys,t)}i(GS,"FromMappedKey");function HS(e,r,t){const n=GS(e,r,t);return dt(n)}i(HS,"PickFromMappedKey");function ZS(e,r){return Vr("Partial",[Vr(e,r)])}i(ZS,"FromComputed$2");function JS(e){return Vr("Partial",[wa(e)])}i(JS,"FromRef$6");function YS(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=pi(e[t]);return r}i(YS,"FromProperties$3");function XS(e,r){const t=rn(e,[Bt,"$id","required","properties"]),n=YS(r);return et(n,t)}i(XS,"FromObject$7");function v1(e){return e.map(r=>R5(r))}i(v1,"FromRest$1");function R5(e){return ha(e)?ZS(e.target,e.parameters):jt(e)?JS(e.$ref):$n(e)?bi(v1(e.allOf)):rt(e)?ft(v1(e.anyOf)):zn(e)?XS(e,e.properties):ud(e)||Gl(e)||pa(e)||rs(e)||Ag(e)||ba(e)||Zl(e)||Sg(e)||Jl(e)?e:et({})}i(R5,"PartialResolve");function im(e,r){return on(e)?rM(e,r):V({...R5(e),...r})}i(im,"Partial");function QS(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=im(e[n],Qt(r));return t}i(QS,"FromProperties$2");function eM(e,r){return QS(e.properties,r)}i(eM,"FromMappedResult$1");function rM(e,r){const t=eM(e,r);return dt(t)}i(rM,"PartialFromMappedResult");function tM(e,r){return Vr("Required",[Vr(e,r)])}i(tM,"FromComputed$1");function nM(e){return Vr("Required",[wa(e)])}i(nM,"FromRef$5");function oM(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=rn(e[t],[Eo]);return r}i(oM,"FromProperties$1");function iM(e,r){const t=rn(e,[Bt,"$id","required","properties"]),n=oM(r);return et(n,t)}i(iM,"FromObject$6");function y1(e){return e.map(r=>L5(r))}i(y1,"FromRest");function L5(e){return ha(e)?tM(e.target,e.parameters):jt(e)?nM(e.$ref):$n(e)?bi(y1(e.allOf)):rt(e)?ft(y1(e.anyOf)):zn(e)?iM(e,e.properties):ud(e)||Gl(e)||pa(e)||rs(e)||Ag(e)||ba(e)||Zl(e)||Sg(e)||Jl(e)?e:et({})}i(L5,"RequiredResolve");function sm(e,r){return on(e)?lM(e,r):V({...L5(e),...r})}i(sm,"Required");function sM(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=sm(e[n],r);return t}i(sM,"FromProperties");function aM(e,r){return sM(e.properties,r)}i(aM,"FromMappedResult");function lM(e,r){const t=aM(e,r);return dt(t)}i(lM,"RequiredFromMappedResult");function uM(e,r){return r.map(t=>jt(t)?am(e,t.$ref):tn(e,t))}i(uM,"DereferenceParameters");function am(e,r){return r in e?jt(e[r])?am(e,e[r].$ref):tn(e,e[r]):pr()}i(am,"Dereference");function cM(e){return $d(e[0])}i(cM,"FromAwaited");function dM(e){return wd(e[0],e[1])}i(dM,"FromIndex");function fM(e){return Hg(e[0])}i(fM,"FromKeyOf");function hM(e){return im(e[0])}i(hM,"FromPartial");function gM(e){return Cd(e[0],e[1])}i(gM,"FromOmit");function mM(e){return Ed(e[0],e[1])}i(mM,"FromPick");function pM(e){return sm(e[0])}i(pM,"FromRequired");function bM(e,r,t){const n=uM(e,t);return r==="Awaited"?cM(n):r==="Index"?dM(n):r==="KeyOf"?fM(n):r==="Partial"?hM(n):r==="Omit"?gM(n):r==="Pick"?mM(n):r==="Required"?pM(n):pr()}i(bM,"FromComputed");function vM(e,r){return _g(tn(e,r))}i(vM,"FromArray$5");function yM(e,r){return Ug(tn(e,r))}i(yM,"FromAsyncIterator$3");function wM(e,r,t){return zg(ru(e,r),tn(e,t))}i(wM,"FromConstructor$3");function $M(e,r,t){return Xl(ru(e,r),tn(e,t))}i($M,"FromFunction$3");function kM(e,r){return bi(ru(e,r))}i(kM,"FromIntersect$5");function xM(e,r){return Gg(tn(e,r))}i(xM,"FromIterator$3");function DM(e,r){return et(globalThis.Object.keys(r).reduce((t,n)=>({...t,[n]:tn(e,r[n])}),{}))}i(DM,"FromObject$5");function CM(e,r){const[t,n]=[tn(e,I5(r)),tm(r)],o=xg(r);return o.patternProperties[n]=t,o}i(CM,"FromRecord$5");function EM(e,r){return jt(r)?{...am(e,r.$ref),[Bt]:r[Bt]}:r}i(EM,"FromTransform");function AM(e,r){return ya(ru(e,r))}i(AM,"FromTuple$5");function SM(e,r){return ft(ru(e,r))}i(SM,"FromUnion$5");function ru(e,r){return r.map(t=>tn(e,t))}i(ru,"FromTypes");function tn(e,r){return di(r)?V(tn(e,rn(r,[Eo])),r):Eg(r)?V(tn(e,rn(r,[Kl])),r):rr(r)?V(EM(e,r),r):fa(r)?V(vM(e,r.items),r):ld(r)?V(yM(e,r.items),r):ha(r)?V(bM(e,r.target,r.parameters)):ga(r)?V(wM(e,r.parameters,r.returns),r):ma(r)?V($M(e,r.parameters,r.returns),r):$n(r)?V(kM(e,r.allOf),r):cd(r)?V(xM(e,r.items),r):zn(r)?V(DM(e,r.properties),r):fd(r)?V(CM(e,r)):os(r)?V(AM(e,r.items||[]),r):rt(r)?V(SM(e,r.anyOf),r):r}i(tn,"FromType");function MM(e,r){return r in e?tn(e,e[r]):pr()}i(MM,"ComputeType");function FM(e){return globalThis.Object.getOwnPropertyNames(e).reduce((r,t)=>({...r,[t]:MM(e,t)}),{})}i(FM,"ComputeModuleProperties");class TM{static{i(this,"TModule")}constructor(r){const t=FM(r),n=this.WithIdentifiers(t);this.$defs=n}Import(r,t){const n={...this.$defs,[r]:V(this.$defs[r],t)};return V({[U]:"Import",$defs:n,$ref:r})}WithIdentifiers(r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:{...r[n],$id:n}}),{})}}function NM(e){return new TM(e)}i(NM,"Module");function PM(e,r){return V({[U]:"Not",not:e},r)}i(PM,"Not");function IM(e,r){return ma(e)?ya(e.parameters,r):pr()}i(IM,"Parameters");let OM=0;function BM(e,r={}){Fr(r.$id)&&(r.$id=`T${OM++}`);const t=xg(e({[U]:"This",$ref:`${r.$id}`}));return t.$id=r.$id,V({[ad]:"Recursive",...t},r)}i(BM,"Recursive");function RM(e,r){const t=Cr(e)?new globalThis.RegExp(e):e;return V({[U]:"RegExp",type:"RegExp",source:t.source,flags:t.flags},r)}i(RM,"RegExp$1");function LM(e){return $n(e)?e.allOf:rt(e)?e.anyOf:os(e)?e.items??[]:[]}i(LM,"RestResolve");function jM(e){return LM(e)}i(jM,"Rest");function _M(e,r){return ma(e)?V(e.returns,r):pr(r)}i(_M,"ReturnType");class UM{static{i(this,"TransformDecodeBuilder")}constructor(r){this.schema=r}Decode(r){return new zM(this.schema,r)}}class zM{static{i(this,"TransformEncodeBuilder")}constructor(r,t){this.schema=r,this.decode=t}EncodeTransform(r,t){const s={Encode:i(a=>t[Bt].Encode(r(a)),"Encode"),Decode:i(a=>this.decode(t[Bt].Decode(a)),"Decode")};return{...t,[Bt]:s}}EncodeSchema(r,t){const n={Decode:this.decode,Encode:r};return{...t,[Bt]:n}}Encode(r){return rr(this.schema)?this.EncodeTransform(r,this.schema):this.EncodeSchema(r,this.schema)}}function VM(e){return new UM(e)}i(VM,"Transform");function qM(e={}){return V({[U]:e[U]??"Unsafe"},e)}i(qM,"Unsafe");function WM(e){return V({[U]:"Void",type:"void"},e)}i(WM,"Void");const KM=Object.freeze(Object.defineProperty({__proto__:null,Any:Dl,Argument:VC,Array:_g,AsyncIterator:Ug,Awaited:$d,BigInt:Wg,Boolean:u5,Capitalize:wS,Composite:DA,Const:AA,Constructor:zg,ConstructorParameters:SA,Date:w5,Enum:MA,Exclude:Qg,Extends:Xg,Extract:em,Function:Xl,Index:wd,InstanceType:R7,Instantiate:uS,Integer:cS,Intersect:bi,Iterator:Gg,KeyOf:Hg,Literal:Pr,Lowercase:$S,Mapped:KE,Module:NM,Never:pr,Not:PM,Null:$5,Number:ls,Object:et,Omit:Cd,Optional:pi,Parameters:IM,Partial:im,Pick:Ed,Promise:g5,Readonly:mi,ReadonlyOptional:N5,Record:P5,Recursive:BM,Ref:wa,RegExp:RM,Required:sm,Rest:jM,ReturnType:_M,String:Gi,Symbol:k5,TemplateLiteral:d5,Transform:VM,Tuple:ya,Uint8Array:D5,Uncapitalize:kS,Undefined:x5,Union:ft,Unknown:kd,Unsafe:qM,Uppercase:xS,Void:WM},Symbol.toStringTag,{value:"Module"})),Ye=KM;function j5(e){switch(e.errorType){case T.ArrayContains:return"Expected array to contain at least one matching value";case T.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case T.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case T.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case T.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case T.ArrayUniqueItems:return"Expected array elements to be unique";case T.Array:return"Expected array";case T.AsyncIterator:return"Expected AsyncIterator";case T.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case T.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case T.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case T.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case T.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case T.BigInt:return"Expected bigint";case T.Boolean:return"Expected boolean";case T.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case T.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case T.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case T.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case T.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case T.Date:return"Expected Date";case T.Function:return"Expected function";case T.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case T.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case T.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case T.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case T.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case T.Integer:return"Expected integer";case T.IntersectUnevaluatedProperties:return"Unexpected property";case T.Intersect:return"Expected all values to match";case T.Iterator:return"Expected Iterator";case T.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case T.Never:return"Never";case T.Not:return"Value should not match";case T.Null:return"Expected null";case T.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case T.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case T.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case T.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case T.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case T.Number:return"Expected number";case T.Object:return"Expected object";case T.ObjectAdditionalProperties:return"Unexpected property";case T.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case T.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case T.ObjectRequiredProperty:return"Expected required property";case T.Promise:return"Expected Promise";case T.RegExp:return"Expected string to match regular expression";case T.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case T.StringFormat:return`Expected string to match '${e.schema.format}' format`;case T.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case T.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case T.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case T.String:return"Expected string";case T.Symbol:return"Expected symbol";case T.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case T.Tuple:return"Expected tuple";case T.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case T.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case T.Uint8Array:return"Expected Uint8Array";case T.Undefined:return"Expected undefined";case T.Union:return"Expected union value";case T.Void:return"Expected void";case T.Kind:return`Expected kind '${e.schema[U]}'`;default:return"Unknown error type"}}i(j5,"DefaultErrorFunction");let _5=j5;function GM(e){_5=e}i(GM,"SetErrorFunction");function HM(){return _5}i(HM,"GetErrorFunction");class ZM extends ct{static{i(this,"TypeDereferenceError")}constructor(r){super(`Unable to dereference schema with $id '${r.$ref}'`),this.schema=r}}function JM(e,r){const t=r.find(n=>n.$id===e.$ref);if(t===void 0)throw new ZM(e);return xn(t,r)}i(JM,"Resolve");function Ad(e,r){return!Jt(e.$id)||r.some(t=>t.$id===e.$id)||r.push(e),r}i(Ad,"Pushref");function xn(e,r){return e[U]==="This"||e[U]==="Ref"?JM(e,r):e}i(xn,"Deref");class YM extends ct{static{i(this,"ValueHashError")}constructor(r){super("Unable to hash value"),this.value=r}}var nn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(nn||(nn={}));let Ss=BigInt("14695981039346656037");const[XM,QM]=[BigInt("1099511628211"),BigInt("18446744073709551616")],eF=Array.from({length:256}).map((e,r)=>BigInt(r)),U5=new Float64Array(1),z5=new DataView(U5.buffer),V5=new Uint8Array(U5.buffer);function*rF(e){const r=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let t=0;t<r;t++)yield e>>8*(r-1-t)&255}i(rF,"NumberToBytes");function tF(e){yt(nn.Array);for(const r of e)ta(r)}i(tF,"ArrayType");function nF(e){yt(nn.Boolean),yt(e?1:0)}i(nF,"BooleanType");function oF(e){yt(nn.BigInt),z5.setBigInt64(0,e);for(const r of V5)yt(r)}i(oF,"BigIntType");function iF(e){yt(nn.Date),ta(e.getTime())}i(iF,"DateType");function sF(e){yt(nn.Null)}i(sF,"NullType");function aF(e){yt(nn.Number),z5.setFloat64(0,e);for(const r of V5)yt(r)}i(aF,"NumberType");function lF(e){yt(nn.Object);for(const r of globalThis.Object.getOwnPropertyNames(e).sort())ta(r),ta(e[r])}i(lF,"ObjectType");function uF(e){yt(nn.String);for(let r=0;r<e.length;r++)for(const t of rF(e.charCodeAt(r)))yt(t)}i(uF,"StringType");function cF(e){yt(nn.Symbol),ta(e.description)}i(cF,"SymbolType");function dF(e){yt(nn.Uint8Array);for(let r=0;r<e.length;r++)yt(e[r])}i(dF,"Uint8ArrayType");function fF(e){return yt(nn.Undefined)}i(fF,"UndefinedType");function ta(e){if(en(e))return tF(e);if(id(e))return nF(e);if(go(e))return oF(e);if(Dg(e))return iF(e);if(od(e))return sF();if(ve(e))return aF(e);if(to(e))return lF(e);if(Jt(e))return uF(e);if(sd(e))return cF(e);if(Cg(e))return dF(e);if(ci(e))return fF();throw new YM(e)}i(ta,"Visit$5");function yt(e){Ss=Ss^eF[e],Ss=Ss*XM%QM}i(yt,"FNV1A64");function lm(e){return Ss=BigInt("14695981039346656037"),ta(e),Ss}i(lm,"Hash");class hF extends ct{static{i(this,"ValueCheckUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function gF(e){return e[U]==="Any"||e[U]==="Unknown"}i(gF,"IsAnyOrUnknown");function xe(e){return e!==void 0}i(xe,"IsDefined$1");function mF(e,r,t){return!0}i(mF,"FromAny$1");function pF(e,r,t){return!0}i(pF,"FromArgument$1");function bF(e,r,t){if(!en(t)||xe(e.minItems)&&!(t.length>=e.minItems)||xe(e.maxItems)&&!(t.length<=e.maxItems))return!1;for(const s of t)if(!Yr(e.items,r,s))return!1;if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of t){const l=lm(a);if(s.has(l))return!1;s.add(l)}return!0})())return!1;if(!(xe(e.contains)||ve(e.minContains)||ve(e.maxContains)))return!0;const n=xe(e.contains)?e.contains:pr(),o=t.reduce((s,a)=>Yr(n,r,a)?s+1:s,0);return!(o===0||ve(e.minContains)&&o<e.minContains||ve(e.maxContains)&&o>e.maxContains)}i(bF,"FromArray$4");function vF(e,r,t){return _w(t)}i(vF,"FromAsyncIterator$2");function yF(e,r,t){return!(!go(t)||xe(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||xe(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||xe(e.maximum)&&!(t<=e.maximum)||xe(e.minimum)&&!(t>=e.minimum)||xe(e.multipleOf)&&t%e.multipleOf!==BigInt(0))}i(yF,"FromBigInt$1");function wF(e,r,t){return id(t)}i(wF,"FromBoolean$1");function $F(e,r,t){return Yr(e.returns,r,t.prototype)}i($F,"FromConstructor$2");function kF(e,r,t){return!(!Dg(t)||xe(e.exclusiveMaximumTimestamp)&&!(t.getTime()<e.exclusiveMaximumTimestamp)||xe(e.exclusiveMinimumTimestamp)&&!(t.getTime()>e.exclusiveMinimumTimestamp)||xe(e.maximumTimestamp)&&!(t.getTime()<=e.maximumTimestamp)||xe(e.minimumTimestamp)&&!(t.getTime()>=e.minimumTimestamp)||xe(e.multipleOfTimestamp)&&t.getTime()%e.multipleOfTimestamp!==0)}i(kF,"FromDate$1");function xF(e,r,t){return Ww(t)}i(xF,"FromFunction$2");function DF(e,r,t){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return Yr(o,[...r,...n],t)}i(DF,"FromImport$4");function CF(e,r,t){return!(!qw(t)||xe(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||xe(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||xe(e.maximum)&&!(t<=e.maximum)||xe(e.minimum)&&!(t>=e.minimum)||xe(e.multipleOf)&&t%e.multipleOf!==0)}i(CF,"FromInteger$1");function EF(e,r,t){const n=e.allOf.every(o=>Yr(o,r,t));if(e.unevaluatedProperties===!1){const o=new RegExp(ra(e)),s=Object.getOwnPropertyNames(t).every(a=>o.test(a));return n&&s}else if(Et(e.unevaluatedProperties)){const o=new RegExp(ra(e)),s=Object.getOwnPropertyNames(t).every(a=>o.test(a)||Yr(e.unevaluatedProperties,r,t[a]));return n&&s}else return n}i(EF,"FromIntersect$4");function AF(e,r,t){return Uw(t)}i(AF,"FromIterator$2");function SF(e,r,t){return t===e.const}i(SF,"FromLiteral$1");function MF(e,r,t){return!1}i(MF,"FromNever$1");function FF(e,r,t){return!Yr(e.not,r,t)}i(FF,"FromNot$4");function TF(e,r,t){return od(t)}i(TF,"FromNull$1");function NF(e,r,t){return!(!Dr.IsNumberLike(t)||xe(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||xe(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||xe(e.minimum)&&!(t>=e.minimum)||xe(e.maximum)&&!(t<=e.maximum)||xe(e.multipleOf)&&t%e.multipleOf!==0)}i(NF,"FromNumber$1");function PF(e,r,t){if(!Dr.IsObjectLike(t)||xe(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||xe(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const s=e.properties[o];if(e.required&&e.required.includes(o)){if(!Yr(s,r,t[o])||(ka(s)||gF(s))&&!(o in t))return!1}else if(Dr.IsExactOptionalProperty(t,o)&&!Yr(s,r,t[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(t);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(s=>n.includes(s))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(t).every(s=>n.includes(s)||Yr(e.additionalProperties,r,t[s])):!0}i(PF,"FromObject$4");function IF(e,r,t){return zw(t)}i(IF,"FromPromise$2");function OF(e,r,t){if(!Dr.IsRecordLike(t)||xe(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||xe(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],s=new RegExp(n),a=Object.entries(t).every(([d,f])=>s.test(d)?Yr(o,r,f):!0),l=typeof e.additionalProperties=="object"?Object.entries(t).every(([d,f])=>s.test(d)?!0:Yr(e.additionalProperties,r,f)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(t).every(d=>s.test(d)):!0;return a&&l&&u}i(OF,"FromRecord$4");function BF(e,r,t){return Yr(xn(e,r),r,t)}i(BF,"FromRef$4");function RF(e,r,t){const n=new RegExp(e.source,e.flags);return xe(e.minLength)&&!(t.length>=e.minLength)||xe(e.maxLength)&&!(t.length<=e.maxLength)?!1:n.test(t)}i(RF,"FromRegExp$1");function LF(e,r,t){return!Jt(t)||xe(e.minLength)&&!(t.length>=e.minLength)||xe(e.maxLength)&&!(t.length<=e.maxLength)||xe(e.pattern)&&!new RegExp(e.pattern).test(t)?!1:xe(e.format)?Og(e.format)?Bg(e.format)(t):!1:!0}i(LF,"FromString$1");function jF(e,r,t){return sd(t)}i(jF,"FromSymbol$1");function _F(e,r,t){return Jt(t)&&new RegExp(e.pattern).test(t)}i(_F,"FromTemplateLiteral$1");function UF(e,r,t){return Yr(xn(e,r),r,t)}i(UF,"FromThis$4");function zF(e,r,t){if(!en(t)||e.items===void 0&&t.length!==0||t.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Yr(e.items[n],r,t[n]))return!1;return!0}i(zF,"FromTuple$4");function VF(e,r,t){return ci(t)}i(VF,"FromUndefined$1");function qF(e,r,t){return e.anyOf.some(n=>Yr(n,r,t))}i(qF,"FromUnion$4");function WF(e,r,t){return!(!Cg(t)||xe(e.maxByteLength)&&!(t.length<=e.maxByteLength)||xe(e.minByteLength)&&!(t.length>=e.minByteLength))}i(WF,"FromUint8Array$1");function KF(e,r,t){return!0}i(KF,"FromUnknown$1");function GF(e,r,t){return Dr.IsVoidLike(t)}i(GF,"FromVoid$1");function HF(e,r,t){return ni(e[U])?jg(e[U])(e,t):!1}i(HF,"FromKind$1");function Yr(e,r,t){const n=xe(e.$id)?Ad(e,r):r,o=e;switch(o[U]){case"Any":return mF();case"Argument":return pF();case"Array":return bF(o,n,t);case"AsyncIterator":return vF(o,n,t);case"BigInt":return yF(o,n,t);case"Boolean":return wF(o,n,t);case"Constructor":return $F(o,n,t);case"Date":return kF(o,n,t);case"Function":return xF(o,n,t);case"Import":return DF(o,n,t);case"Integer":return CF(o,n,t);case"Intersect":return EF(o,n,t);case"Iterator":return AF(o,n,t);case"Literal":return SF(o,n,t);case"Never":return MF();case"Not":return FF(o,n,t);case"Null":return TF(o,n,t);case"Number":return NF(o,n,t);case"Object":return PF(o,n,t);case"Promise":return IF(o,n,t);case"Record":return OF(o,n,t);case"Ref":return BF(o,n,t);case"RegExp":return RF(o,n,t);case"String":return LF(o,n,t);case"Symbol":return jF(o,n,t);case"TemplateLiteral":return _F(o,n,t);case"This":return UF(o,n,t);case"Tuple":return zF(o,n,t);case"Undefined":return VF(o,n,t);case"Union":return qF(o,n,t);case"Uint8Array":return WF(o,n,t);case"Unknown":return KF();case"Void":return GF(o,n,t);default:if(!ni(o[U]))throw new hF(o);return HF(o,n,t)}}i(Yr,"Visit$4");function Dc(...e){return e.length===3?Yr(e[0],e[1],e[2]):Yr(e[0],[],e[1])}i(Dc,"Check");var T;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(T||(T={}));class ZF extends ct{static{i(this,"ValueErrorsUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function uo(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}i(uo,"EscapeKey");function ke(e){return e!==void 0}i(ke,"IsDefined");class q5{static{i(this,"ValueErrorIterator")}constructor(r){this.iterator=r}[Symbol.iterator](){return this.iterator}First(){const r=this.iterator.next();return r.done?void 0:r.value}}function W(e,r,t,n,o=[]){return{type:e,schema:r,path:t,value:n,message:HM()({errorType:e,path:t,schema:r,value:n,errors:o}),errors:o}}i(W,"Create");function*JF(e,r,t,n){}i(JF,"FromAny");function*YF(e,r,t,n){}i(YF,"FromArgument");function*XF(e,r,t,n){if(!en(n))return yield W(T.Array,e,t,n);ke(e.minItems)&&!(n.length>=e.minItems)&&(yield W(T.ArrayMinItems,e,t,n)),ke(e.maxItems)&&!(n.length<=e.maxItems)&&(yield W(T.ArrayMaxItems,e,t,n));for(let a=0;a<n.length;a++)yield*Xr(e.items,r,`${t}/${a}`,n[a]);if(e.uniqueItems===!0&&!(function(){const a=new Set;for(const l of n){const u=lm(l);if(a.has(u))return!1;a.add(u)}return!0})()&&(yield W(T.ArrayUniqueItems,e,t,n)),!(ke(e.contains)||ke(e.minContains)||ke(e.maxContains)))return;const o=ke(e.contains)?e.contains:pr(),s=n.reduce((a,l,u)=>Xr(o,r,`${t}${u}`,l).next().done===!0?a+1:a,0);s===0&&(yield W(T.ArrayContains,e,t,n)),ve(e.minContains)&&s<e.minContains&&(yield W(T.ArrayMinContains,e,t,n)),ve(e.maxContains)&&s>e.maxContains&&(yield W(T.ArrayMaxContains,e,t,n))}i(XF,"FromArray$3");function*QF(e,r,t,n){_w(n)||(yield W(T.AsyncIterator,e,t,n))}i(QF,"FromAsyncIterator$1");function*eT(e,r,t,n){if(!go(n))return yield W(T.BigInt,e,t,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.BigIntExclusiveMaximum,e,t,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.BigIntExclusiveMinimum,e,t,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield W(T.BigIntMaximum,e,t,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield W(T.BigIntMinimum,e,t,n)),ke(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield W(T.BigIntMultipleOf,e,t,n))}i(eT,"FromBigInt");function*rT(e,r,t,n){id(n)||(yield W(T.Boolean,e,t,n))}i(rT,"FromBoolean");function*tT(e,r,t,n){yield*Xr(e.returns,r,t,n.prototype)}i(tT,"FromConstructor$1");function*nT(e,r,t,n){if(!Dg(n))return yield W(T.Date,e,t,n);ke(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield W(T.DateExclusiveMaximumTimestamp,e,t,n)),ke(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield W(T.DateExclusiveMinimumTimestamp,e,t,n)),ke(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield W(T.DateMaximumTimestamp,e,t,n)),ke(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield W(T.DateMinimumTimestamp,e,t,n)),ke(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield W(T.DateMultipleOfTimestamp,e,t,n))}i(nT,"FromDate");function*oT(e,r,t,n){Ww(n)||(yield W(T.Function,e,t,n))}i(oT,"FromFunction$1");function*iT(e,r,t,n){const o=globalThis.Object.values(e.$defs),s=e.$defs[e.$ref];yield*Xr(s,[...r,...o],t,n)}i(iT,"FromImport$3");function*sT(e,r,t,n){if(!qw(n))return yield W(T.Integer,e,t,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.IntegerExclusiveMaximum,e,t,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.IntegerExclusiveMinimum,e,t,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield W(T.IntegerMaximum,e,t,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield W(T.IntegerMinimum,e,t,n)),ke(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(T.IntegerMultipleOf,e,t,n))}i(sT,"FromInteger");function*aT(e,r,t,n){let o=!1;for(const s of e.allOf)for(const a of Xr(s,r,t,n))o=!0,yield a;if(o)return yield W(T.Intersect,e,t,n);if(e.unevaluatedProperties===!1){const s=new RegExp(ra(e));for(const a of Object.getOwnPropertyNames(n))s.test(a)||(yield W(T.IntersectUnevaluatedProperties,e,`${t}/${a}`,n))}if(typeof e.unevaluatedProperties=="object"){const s=new RegExp(ra(e));for(const a of Object.getOwnPropertyNames(n))if(!s.test(a)){const l=Xr(e.unevaluatedProperties,r,`${t}/${a}`,n[a]).next();l.done||(yield l.value)}}}i(aT,"FromIntersect$3");function*lT(e,r,t,n){Uw(n)||(yield W(T.Iterator,e,t,n))}i(lT,"FromIterator$1");function*uT(e,r,t,n){n!==e.const&&(yield W(T.Literal,e,t,n))}i(uT,"FromLiteral");function*cT(e,r,t,n){yield W(T.Never,e,t,n)}i(cT,"FromNever");function*dT(e,r,t,n){Xr(e.not,r,t,n).next().done===!0&&(yield W(T.Not,e,t,n))}i(dT,"FromNot$3");function*fT(e,r,t,n){od(n)||(yield W(T.Null,e,t,n))}i(fT,"FromNull");function*hT(e,r,t,n){if(!Dr.IsNumberLike(n))return yield W(T.Number,e,t,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.NumberExclusiveMaximum,e,t,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.NumberExclusiveMinimum,e,t,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield W(T.NumberMaximum,e,t,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield W(T.NumberMinimum,e,t,n)),ke(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(T.NumberMultipleOf,e,t,n))}i(hT,"FromNumber");function*gT(e,r,t,n){if(!Dr.IsObjectLike(n))return yield W(T.Object,e,t,n);ke(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(T.ObjectMinProperties,e,t,n)),ke(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(T.ObjectMaxProperties,e,t,n));const o=Array.isArray(e.required)?e.required:[],s=Object.getOwnPropertyNames(e.properties),a=Object.getOwnPropertyNames(n);for(const l of o)a.includes(l)||(yield W(T.ObjectRequiredProperty,e.properties[l],`${t}/${uo(l)}`,void 0));if(e.additionalProperties===!1)for(const l of a)s.includes(l)||(yield W(T.ObjectAdditionalProperties,e,`${t}/${uo(l)}`,n[l]));if(typeof e.additionalProperties=="object")for(const l of a)s.includes(l)||(yield*Xr(e.additionalProperties,r,`${t}/${uo(l)}`,n[l]));for(const l of s){const u=e.properties[l];e.required&&e.required.includes(l)?(yield*Xr(u,r,`${t}/${uo(l)}`,n[l]),ka(e)&&!(l in n)&&(yield W(T.ObjectRequiredProperty,u,`${t}/${uo(l)}`,void 0))):Dr.IsExactOptionalProperty(n,l)&&(yield*Xr(u,r,`${t}/${uo(l)}`,n[l]))}}i(gT,"FromObject$3");function*mT(e,r,t,n){zw(n)||(yield W(T.Promise,e,t,n))}i(mT,"FromPromise$1");function*pT(e,r,t,n){if(!Dr.IsRecordLike(n))return yield W(T.Object,e,t,n);ke(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(T.ObjectMinProperties,e,t,n)),ke(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(T.ObjectMaxProperties,e,t,n));const[o,s]=Object.entries(e.patternProperties)[0],a=new RegExp(o);for(const[l,u]of Object.entries(n))a.test(l)&&(yield*Xr(s,r,`${t}/${uo(l)}`,u));if(typeof e.additionalProperties=="object")for(const[l,u]of Object.entries(n))a.test(l)||(yield*Xr(e.additionalProperties,r,`${t}/${uo(l)}`,u));if(e.additionalProperties===!1){for(const[l,u]of Object.entries(n))if(!a.test(l))return yield W(T.ObjectAdditionalProperties,e,`${t}/${uo(l)}`,u)}}i(pT,"FromRecord$3");function*bT(e,r,t,n){yield*Xr(xn(e,r),r,t,n)}i(bT,"FromRef$3");function*vT(e,r,t,n){if(!Jt(n))return yield W(T.String,e,t,n);if(ke(e.minLength)&&!(n.length>=e.minLength)&&(yield W(T.StringMinLength,e,t,n)),ke(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(T.StringMaxLength,e,t,n)),!new RegExp(e.source,e.flags).test(n))return yield W(T.RegExp,e,t,n)}i(vT,"FromRegExp");function*yT(e,r,t,n){if(!Jt(n))return yield W(T.String,e,t,n);ke(e.minLength)&&!(n.length>=e.minLength)&&(yield W(T.StringMinLength,e,t,n)),ke(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(T.StringMaxLength,e,t,n)),Jt(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield W(T.StringPattern,e,t,n))),Jt(e.format)&&(Og(e.format)?Bg(e.format)(n)||(yield W(T.StringFormat,e,t,n)):yield W(T.StringFormatUnknown,e,t,n))}i(yT,"FromString");function*wT(e,r,t,n){sd(n)||(yield W(T.Symbol,e,t,n))}i(wT,"FromSymbol");function*$T(e,r,t,n){if(!Jt(n))return yield W(T.String,e,t,n);new RegExp(e.pattern).test(n)||(yield W(T.StringPattern,e,t,n))}i($T,"FromTemplateLiteral");function*kT(e,r,t,n){yield*Xr(xn(e,r),r,t,n)}i(kT,"FromThis$3");function*xT(e,r,t,n){if(!en(n))return yield W(T.Tuple,e,t,n);if(e.items===void 0&&n.length!==0)return yield W(T.TupleLength,e,t,n);if(n.length!==e.maxItems)return yield W(T.TupleLength,e,t,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*Xr(e.items[o],r,`${t}/${o}`,n[o])}i(xT,"FromTuple$3");function*DT(e,r,t,n){ci(n)||(yield W(T.Undefined,e,t,n))}i(DT,"FromUndefined");function*CT(e,r,t,n){if(Dc(e,r,n))return;const o=e.anyOf.map(s=>new q5(Xr(s,r,t,n)));yield W(T.Union,e,t,n,o)}i(CT,"FromUnion$3");function*ET(e,r,t,n){if(!Cg(n))return yield W(T.Uint8Array,e,t,n);ke(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield W(T.Uint8ArrayMaxByteLength,e,t,n)),ke(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield W(T.Uint8ArrayMinByteLength,e,t,n))}i(ET,"FromUint8Array");function*AT(e,r,t,n){}i(AT,"FromUnknown");function*ST(e,r,t,n){Dr.IsVoidLike(n)||(yield W(T.Void,e,t,n))}i(ST,"FromVoid");function*MT(e,r,t,n){jg(e[U])(e,n)||(yield W(T.Kind,e,t,n))}i(MT,"FromKind");function*Xr(e,r,t,n){const o=ke(e.$id)?[...r,e]:r,s=e;switch(s[U]){case"Any":return yield*JF();case"Argument":return yield*YF();case"Array":return yield*XF(s,o,t,n);case"AsyncIterator":return yield*QF(s,o,t,n);case"BigInt":return yield*eT(s,o,t,n);case"Boolean":return yield*rT(s,o,t,n);case"Constructor":return yield*tT(s,o,t,n);case"Date":return yield*nT(s,o,t,n);case"Function":return yield*oT(s,o,t,n);case"Import":return yield*iT(s,o,t,n);case"Integer":return yield*sT(s,o,t,n);case"Intersect":return yield*aT(s,o,t,n);case"Iterator":return yield*lT(s,o,t,n);case"Literal":return yield*uT(s,o,t,n);case"Never":return yield*cT(s,o,t,n);case"Not":return yield*dT(s,o,t,n);case"Null":return yield*fT(s,o,t,n);case"Number":return yield*hT(s,o,t,n);case"Object":return yield*gT(s,o,t,n);case"Promise":return yield*mT(s,o,t,n);case"Record":return yield*pT(s,o,t,n);case"Ref":return yield*bT(s,o,t,n);case"RegExp":return yield*vT(s,o,t,n);case"String":return yield*yT(s,o,t,n);case"Symbol":return yield*wT(s,o,t,n);case"TemplateLiteral":return yield*$T(s,o,t,n);case"This":return yield*kT(s,o,t,n);case"Tuple":return yield*xT(s,o,t,n);case"Undefined":return yield*DT(s,o,t,n);case"Union":return yield*CT(s,o,t,n);case"Uint8Array":return yield*ET(s,o,t,n);case"Unknown":return yield*AT();case"Void":return yield*ST(s,o,t,n);default:if(!ni(s[U]))throw new ZF(e);return yield*MT(s,o,t,n)}}i(Xr,"Visit$3");function FT(...e){const r=e.length===3?Xr(e[0],e[1],"",e[2]):Xr(e[0],[],"",e[1]);return new q5(r)}i(FT,"Errors");class TT extends ct{static{i(this,"TransformDecodeCheckError")}constructor(r,t,n){super("Unable to decode value as it does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class NT extends ct{static{i(this,"TransformDecodeError")}constructor(r,t,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=r,this.path=t,this.value=n,this.error=o}}function ur(e,r,t){try{return rr(e)?e[Bt].Decode(t):t}catch(n){throw new NT(e,r,t,n)}}i(ur,"Default$1");function PT(e,r,t,n){return en(n)?ur(e,t,n.map((o,s)=>Vn(e.items,r,`${t}/${s}`,o))):ur(e,t,n)}i(PT,"FromArray$2");function IT(e,r,t,n){if(!to(n)||Kw(n))return ur(e,t,n);const o=y5(e),s=o.map(f=>f[0]),a={...n};for(const[f,h]of o)f in a&&(a[f]=Vn(h,r,`${t}/${f}`,a[f]));if(!rr(e.unevaluatedProperties))return ur(e,t,a);const l=Object.getOwnPropertyNames(a),u=e.unevaluatedProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=ur(u,`${t}/${f}`,d[f]));return ur(e,t,d)}i(IT,"FromIntersect$2");function OT(e,r,t,n){const o=globalThis.Object.values(e.$defs),s=e.$defs[e.$ref],a=Vn(s,[...r,...o],t,n);return ur(e,t,a)}i(OT,"FromImport$2");function BT(e,r,t,n){return ur(e,t,Vn(e.not,r,t,n))}i(BT,"FromNot$2");function RT(e,r,t,n){if(!to(n))return ur(e,t,n);const o=us(e),s={...n};for(const d of o)Vw(s,d)&&(ci(s[d])&&(!Jl(e.properties[d])||Dr.IsExactOptionalProperty(s,d))||(s[d]=Vn(e.properties[d],r,`${t}/${d}`,s[d])));if(!Et(e.additionalProperties))return ur(e,t,s);const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(const d of a)o.includes(d)||(u[d]=ur(l,`${t}/${d}`,u[d]));return ur(e,t,u)}i(RT,"FromObject$2");function LT(e,r,t,n){if(!to(n))return ur(e,t,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...n};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=Vn(e.patternProperties[o],r,`${t}/${f}`,a[f]));if(!Et(e.additionalProperties))return ur(e,t,a);const l=Object.getOwnPropertyNames(a),u=e.additionalProperties,d={...a};for(const f of l)s.test(f)||(d[f]=ur(u,`${t}/${f}`,d[f]));return ur(e,t,d)}i(LT,"FromRecord$2");function jT(e,r,t,n){const o=xn(e,r);return ur(e,t,Vn(o,r,t,n))}i(jT,"FromRef$2");function _T(e,r,t,n){const o=xn(e,r);return ur(e,t,Vn(o,r,t,n))}i(_T,"FromThis$2");function UT(e,r,t,n){return en(n)&&en(e.items)?ur(e,t,e.items.map((o,s)=>Vn(o,r,`${t}/${s}`,n[s]))):ur(e,t,n)}i(UT,"FromTuple$2");function zT(e,r,t,n){for(const o of e.anyOf){if(!Dc(o,r,n))continue;const s=Vn(o,r,t,n);return ur(e,t,s)}return ur(e,t,n)}i(zT,"FromUnion$2");function Vn(e,r,t,n){const o=Ad(e,r),s=e;switch(e[U]){case"Array":return PT(s,o,t,n);case"Import":return OT(s,o,t,n);case"Intersect":return IT(s,o,t,n);case"Not":return BT(s,o,t,n);case"Object":return RT(s,o,t,n);case"Record":return LT(s,o,t,n);case"Ref":return jT(s,o,t,n);case"Symbol":return ur(s,t,n);case"This":return _T(s,o,t,n);case"Tuple":return UT(s,o,t,n);case"Union":return zT(s,o,t,n);default:return ur(s,t,n)}}i(Vn,"Visit$2");function VT(e,r,t){return Vn(e,r,"",t)}i(VT,"TransformDecode");class qT extends ct{static{i(this,"TransformEncodeCheckError")}constructor(r,t,n){super("The encoded value does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class WT extends ct{static{i(this,"TransformEncodeError")}constructor(r,t,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=r,this.path=t,this.value=n,this.error=o}}function at(e,r,t){try{return rr(e)?e[Bt].Encode(t):t}catch(n){throw new WT(e,r,t,n)}}i(at,"Default");function KT(e,r,t,n){const o=at(e,t,n);return en(o)?o.map((s,a)=>_n(e.items,r,`${t}/${a}`,s)):o}i(KT,"FromArray$1");function GT(e,r,t,n){const o=globalThis.Object.values(e.$defs),s=e.$defs[e.$ref],a=at(e,t,n);return _n(s,[...r,...o],t,a)}i(GT,"FromImport$1");function HT(e,r,t,n){const o=at(e,t,n);if(!to(n)||Kw(n))return o;const s=y5(e),a=s.map(h=>h[0]),l={...o};for(const[h,g]of s)h in l&&(l[h]=_n(g,r,`${t}/${h}`,l[h]));if(!rr(e.unevaluatedProperties))return l;const u=Object.getOwnPropertyNames(l),d=e.unevaluatedProperties,f={...l};for(const h of u)a.includes(h)||(f[h]=at(d,`${t}/${h}`,f[h]));return f}i(HT,"FromIntersect$1");function ZT(e,r,t,n){return at(e.not,t,at(e,t,n))}i(ZT,"FromNot$1");function JT(e,r,t,n){const o=at(e,t,n);if(!to(o))return o;const s=us(e),a={...o};for(const f of s)Vw(a,f)&&(ci(a[f])&&(!Jl(e.properties[f])||Dr.IsExactOptionalProperty(a,f))||(a[f]=_n(e.properties[f],r,`${t}/${f}`,a[f])));if(!Et(e.additionalProperties))return a;const l=Object.getOwnPropertyNames(a),u=e.additionalProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=at(u,`${t}/${f}`,d[f]));return d}i(JT,"FromObject$1");function YT(e,r,t,n){const o=at(e,t,n);if(!to(n))return o;const s=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(s),l={...o};for(const h of Object.getOwnPropertyNames(n))a.test(h)&&(l[h]=_n(e.patternProperties[s],r,`${t}/${h}`,l[h]));if(!Et(e.additionalProperties))return l;const u=Object.getOwnPropertyNames(l),d=e.additionalProperties,f={...l};for(const h of u)a.test(h)||(f[h]=at(d,`${t}/${h}`,f[h]));return f}i(YT,"FromRecord$1");function XT(e,r,t,n){const o=xn(e,r),s=_n(o,r,t,n);return at(e,t,s)}i(XT,"FromRef$1");function QT(e,r,t,n){const o=xn(e,r),s=_n(o,r,t,n);return at(e,t,s)}i(QT,"FromThis$1");function eN(e,r,t,n){const o=at(e,t,n);return en(e.items)?e.items.map((s,a)=>_n(s,r,`${t}/${a}`,o[a])):[]}i(eN,"FromTuple$1");function rN(e,r,t,n){for(const o of e.anyOf){if(!Dc(o,r,n))continue;const s=_n(o,r,t,n);return at(e,t,s)}for(const o of e.anyOf){const s=_n(o,r,t,n);if(Dc(e,r,s))return at(e,t,s)}return at(e,t,n)}i(rN,"FromUnion$1");function _n(e,r,t,n){const o=Ad(e,r),s=e;switch(e[U]){case"Array":return KT(s,o,t,n);case"Import":return GT(s,o,t,n);case"Intersect":return HT(s,o,t,n);case"Not":return ZT(s,o,t,n);case"Object":return JT(s,o,t,n);case"Record":return YT(s,o,t,n);case"Ref":return XT(s,o,t,n);case"This":return QT(s,o,t,n);case"Tuple":return eN(s,o,t,n);case"Union":return rN(s,o,t,n);default:return at(s,t,n)}}i(_n,"Visit$1");function tN(e,r,t){return _n(e,r,"",t)}i(tN,"TransformEncode");function nN(e,r){return rr(e)||qr(e.items,r)}i(nN,"FromArray");function oN(e,r){return rr(e)||qr(e.items,r)}i(oN,"FromAsyncIterator");function iN(e,r){return rr(e)||qr(e.returns,r)||e.parameters.some(t=>qr(t,r))}i(iN,"FromConstructor");function sN(e,r){return rr(e)||qr(e.returns,r)||e.parameters.some(t=>qr(t,r))}i(sN,"FromFunction");function aN(e,r){return rr(e)||rr(e.unevaluatedProperties)||e.allOf.some(t=>qr(t,r))}i(aN,"FromIntersect");function lN(e,r){const t=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,s)=>[...o,e.$defs[s]],[]),n=e.$defs[e.$ref];return rr(e)||qr(n,[...t,...r])}i(lN,"FromImport");function uN(e,r){return rr(e)||qr(e.items,r)}i(uN,"FromIterator");function cN(e,r){return rr(e)||qr(e.not,r)}i(cN,"FromNot");function dN(e,r){return rr(e)||Object.values(e.properties).some(t=>qr(t,r))||Et(e.additionalProperties)&&qr(e.additionalProperties,r)}i(dN,"FromObject");function fN(e,r){return rr(e)||qr(e.item,r)}i(fN,"FromPromise");function hN(e,r){const t=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[t];return rr(e)||qr(n,r)||Et(e.additionalProperties)&&rr(e.additionalProperties)}i(hN,"FromRecord");function gN(e,r){return rr(e)?!0:qr(xn(e,r),r)}i(gN,"FromRef");function mN(e,r){return rr(e)?!0:qr(xn(e,r),r)}i(mN,"FromThis");function pN(e,r){return rr(e)||!ci(e.items)&&e.items.some(t=>qr(t,r))}i(pN,"FromTuple");function bN(e,r){return rr(e)||e.anyOf.some(t=>qr(t,r))}i(bN,"FromUnion");function qr(e,r){const t=Ad(e,r),n=e;if(e.$id&&sh.has(e.$id))return!1;switch(e.$id&&sh.add(e.$id),e[U]){case"Array":return nN(n,t);case"AsyncIterator":return oN(n,t);case"Constructor":return iN(n,t);case"Function":return sN(n,t);case"Import":return lN(n,t);case"Intersect":return aN(n,t);case"Iterator":return uN(n,t);case"Not":return cN(n,t);case"Object":return dN(n,t);case"Promise":return fN(n,t);case"Record":return hN(n,t);case"Ref":return gN(n,t);case"This":return mN(n,t);case"Tuple":return pN(n,t);case"Union":return bN(n,t);default:return rr(e)}}i(qr,"Visit");const sh=new Set;function vN(e,r){return sh.clear(),qr(e,r)}i(vN,"HasTransform");class yN{static{i(this,"TypeCheck")}constructor(r,t,n,o){this.schema=r,this.references=t,this.checkFunc=n,this.code=o,this.hasTransform=vN(r,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(r){return FT(this.schema,this.references,r)}Check(r){return this.checkFunc(r)}Decode(r){if(!this.checkFunc(r))throw new TT(this.schema,r,this.Errors(r).First());return this.hasTransform?VT(this.schema,this.references,r):r}Encode(r){const t=this.hasTransform?tN(this.schema,this.references,r):r;if(!this.checkFunc(t))throw new qT(this.schema,r,this.Errors(r).First());return t}}var mo;(function(e){function r(s){return s===36}i(r,"DollarSign"),e.DollarSign=r;function t(s){return s===95}i(t,"IsUnderscore"),e.IsUnderscore=t;function n(s){return s>=65&&s<=90||s>=97&&s<=122}i(n,"IsAlpha"),e.IsAlpha=n;function o(s){return s>=48&&s<=57}i(o,"IsNumeric"),e.IsNumeric=o})(mo||(mo={}));var Cc;(function(e){function r(s){return s.length===0?!1:mo.IsNumeric(s.charCodeAt(0))}i(r,"IsFirstCharacterNumeric");function t(s){if(r(s))return!1;for(let a=0;a<s.length;a++){const l=s.charCodeAt(a);if(!(mo.IsAlpha(l)||mo.IsNumeric(l)||mo.DollarSign(l)||mo.IsUnderscore(l)))return!1}return!0}i(t,"IsAccessor");function n(s){return s.replace(/'/g,"\\'")}i(n,"EscapeHyphen");function o(s,a){return t(a)?`${s}.${a}`:`${s}['${n(a)}']`}i(o,"Encode"),e.Encode=o})(Cc||(Cc={}));var ah;(function(e){function r(t){const n=[];for(let o=0;o<t.length;o++){const s=t.charCodeAt(o);mo.IsNumeric(s)||mo.IsAlpha(s)?n.push(t.charAt(o)):n.push(`_${s}_`)}return n.join("").replace(/__/g,"_")}i(r,"Encode"),e.Encode=r})(ah||(ah={}));var lh;(function(e){function r(t){return t.replace(/'/g,"\\'")}i(r,"Escape"),e.Escape=r})(lh||(lh={}));class wN extends ct{static{i(this,"TypeCompilerUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}class w1 extends ct{static{i(this,"TypeCompilerTypeGuardError")}constructor(r){super("Preflight validation check failed to guard for the given schema"),this.schema=r}}var Si;(function(e){function r(a,l,u){return Dr.ExactOptionalPropertyTypes?`('${l}' in ${a} ? ${u} : true)`:`(${Cc.Encode(a,l)} !== undefined ? ${u} : true)`}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(a){return Dr.AllowArrayObject?`(typeof ${a} === 'object' && ${a} !== null)`:`(typeof ${a} === 'object' && ${a} !== null && !Array.isArray(${a}))`}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(a){return Dr.AllowArrayObject?`(typeof ${a} === 'object' && ${a} !== null && !(${a} instanceof Date) && !(${a} instanceof Uint8Array))`:`(typeof ${a} === 'object' && ${a} !== null && !Array.isArray(${a}) && !(${a} instanceof Date) && !(${a} instanceof Uint8Array))`}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(a){return Dr.AllowNaN?`typeof ${a} === 'number'`:`Number.isFinite(${a})`}i(o,"IsNumberLike"),e.IsNumberLike=o;function s(a){return Dr.AllowNullVoid?`(${a} === undefined || ${a} === null)`:`${a} === undefined`}i(s,"IsVoidLike"),e.IsVoidLike=s})(Si||(Si={}));var ll;(function(e){function r(C){return C[U]==="Any"||C[U]==="Unknown"}i(r,"IsAnyOrUnknown");function*t(C,G,S){yield"true"}i(t,"FromAny");function*n(C,G,S){yield"true"}i(n,"FromArgument");function*o(C,G,S){yield`Array.isArray(${S})`;const[se,Q]=[Dn("value","any"),Dn("acc","number")];ve(C.maxItems)&&(yield`${S}.length <= ${C.maxItems}`),ve(C.minItems)&&(yield`${S}.length >= ${C.minItems}`);const ee=Lr(C.items,G,"value");if(yield`((array) => { for(const ${se} of array) if(!(${ee})) { return false }; return true; })(${S})`,gr(C.contains)||ve(C.minContains)||ve(C.maxContains)){const Je=gr(C.contains)?C.contains:pr(),Mt=Lr(Je,G,"value"),oo=ve(C.minContains)?[`(count >= ${C.minContains})`]:[],Cn=ve(C.maxContains)?[`(count <= ${C.maxContains})`]:[],Kn=`const count = value.reduce((${Q}, ${se}) => ${Mt} ? acc + 1 : acc, 0)`,uu=["(count > 0)",...oo,...Cn].join(" && ");yield`((${se}) => { ${Kn}; return ${uu}})(${S})`}C.uniqueItems===!0&&(yield`((${se}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${S})`)}i(o,"FromArray");function*s(C,G,S){yield`(typeof value === 'object' && Symbol.asyncIterator in ${S})`}i(s,"FromAsyncIterator");function*a(C,G,S){yield`(typeof ${S} === 'bigint')`,go(C.exclusiveMaximum)&&(yield`${S} < BigInt(${C.exclusiveMaximum})`),go(C.exclusiveMinimum)&&(yield`${S} > BigInt(${C.exclusiveMinimum})`),go(C.maximum)&&(yield`${S} <= BigInt(${C.maximum})`),go(C.minimum)&&(yield`${S} >= BigInt(${C.minimum})`),go(C.multipleOf)&&(yield`(${S} % BigInt(${C.multipleOf})) === 0`)}i(a,"FromBigInt");function*l(C,G,S){yield`(typeof ${S} === 'boolean')`}i(l,"FromBoolean");function*u(C,G,S){yield*tt(C.returns,G,`${S}.prototype`)}i(u,"FromConstructor");function*d(C,G,S){yield`(${S} instanceof Date) && Number.isFinite(${S}.getTime())`,ve(C.exclusiveMaximumTimestamp)&&(yield`${S}.getTime() < ${C.exclusiveMaximumTimestamp}`),ve(C.exclusiveMinimumTimestamp)&&(yield`${S}.getTime() > ${C.exclusiveMinimumTimestamp}`),ve(C.maximumTimestamp)&&(yield`${S}.getTime() <= ${C.maximumTimestamp}`),ve(C.minimumTimestamp)&&(yield`${S}.getTime() >= ${C.minimumTimestamp}`),ve(C.multipleOfTimestamp)&&(yield`(${S}.getTime() % ${C.multipleOfTimestamp}) === 0`)}i(d,"FromDate");function*f(C,G,S){yield`(typeof ${S} === 'function')`}i(f,"FromFunction");function*h(C,G,S){const se=globalThis.Object.getOwnPropertyNames(C.$defs).reduce((Q,ee)=>[...Q,C.$defs[ee]],[]);yield*tt(wa(C.$ref),[...G,...se],S)}i(h,"FromImport");function*g(C,G,S){yield`Number.isInteger(${S})`,ve(C.exclusiveMaximum)&&(yield`${S} < ${C.exclusiveMaximum}`),ve(C.exclusiveMinimum)&&(yield`${S} > ${C.exclusiveMinimum}`),ve(C.maximum)&&(yield`${S} <= ${C.maximum}`),ve(C.minimum)&&(yield`${S} >= ${C.minimum}`),ve(C.multipleOf)&&(yield`(${S} % ${C.multipleOf}) === 0`)}i(g,"FromInteger");function*m(C,G,S){const se=C.allOf.map(Q=>Lr(Q,G,S)).join(" && ");if(C.unevaluatedProperties===!1){const Q=ht(`${new RegExp(ra(C))};`),ee=`Object.getOwnPropertyNames(${S}).every(key => ${Q}.test(key))`;yield`(${se} && ${ee})`}else if(gr(C.unevaluatedProperties)){const Q=ht(`${new RegExp(ra(C))};`),ee=`Object.getOwnPropertyNames(${S}).every(key => ${Q}.test(key) || ${Lr(C.unevaluatedProperties,G,`${S}[key]`)})`;yield`(${se} && ${ee})`}else yield`(${se})`}i(m,"FromIntersect");function*p(C,G,S){yield`(typeof value === 'object' && Symbol.iterator in ${S})`}i(p,"FromIterator");function*v(C,G,S){typeof C.const=="number"||typeof C.const=="boolean"?yield`(${S} === ${C.const})`:yield`(${S} === '${lh.Escape(C.const)}')`}i(v,"FromLiteral");function*w(C,G,S){yield"false"}i(w,"FromNever");function*k(C,G,S){yield`(!${Lr(C.not,G,S)})`}i(k,"FromNot");function*D(C,G,S){yield`(${S} === null)`}i(D,"FromNull");function*A(C,G,S){yield Si.IsNumberLike(S),ve(C.exclusiveMaximum)&&(yield`${S} < ${C.exclusiveMaximum}`),ve(C.exclusiveMinimum)&&(yield`${S} > ${C.exclusiveMinimum}`),ve(C.maximum)&&(yield`${S} <= ${C.maximum}`),ve(C.minimum)&&(yield`${S} >= ${C.minimum}`),ve(C.multipleOf)&&(yield`(${S} % ${C.multipleOf}) === 0`)}i(A,"FromNumber");function*I(C,G,S){yield Si.IsObjectLike(S),ve(C.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${C.minProperties}`),ve(C.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${C.maxProperties}`);const se=Object.getOwnPropertyNames(C.properties);for(const Q of se){const ee=Cc.Encode(S,Q),Je=C.properties[Q];if(C.required&&C.required.includes(Q))yield*tt(Je,G,ee),(ka(Je)||r(Je))&&(yield`('${Q}' in ${S})`);else{const Mt=Lr(Je,G,ee);yield Si.IsExactOptionalProperty(S,Q,Mt)}}if(C.additionalProperties===!1)if(C.required&&C.required.length===se.length)yield`Object.getOwnPropertyNames(${S}).length === ${se.length}`;else{const Q=`[${se.map(ee=>`'${ee}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${S}).every(key => ${Q}.includes(key))`}if(typeof C.additionalProperties=="object"){const Q=Lr(C.additionalProperties,G,`${S}[key]`),ee=`[${se.map(Je=>`'${Je}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${S}).every(key => ${ee}.includes(key) || ${Q}))`}}i(I,"FromObject");function*L(C,G,S){yield`${S} instanceof Promise`}i(L,"FromPromise");function*Y(C,G,S){yield Si.IsRecordLike(S),ve(C.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${C.minProperties}`),ve(C.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${C.maxProperties}`);const[se,Q]=Object.entries(C.patternProperties)[0],ee=ht(`${new RegExp(se)}`),Je=Lr(Q,G,"value"),Mt=gr(C.additionalProperties)?Lr(C.additionalProperties,G,S):C.additionalProperties===!1?"false":"true",oo=`(${ee}.test(key) ? ${Je} : ${Mt})`;yield`(Object.entries(${S}).every(([key, value]) => ${oo}))`}i(Y,"FromRecord");function*re(C,G,S){const se=xn(C,G);if(Ge.functions.has(C.$ref))return yield`${ln(C.$ref)}(${S})`;yield*tt(se,G,S)}i(re,"FromRef");function*te(C,G,S){const se=ht(`${new RegExp(C.source,C.flags)};`);yield`(typeof ${S} === 'string')`,ve(C.maxLength)&&(yield`${S}.length <= ${C.maxLength}`),ve(C.minLength)&&(yield`${S}.length >= ${C.minLength}`),yield`${se}.test(${S})`}i(te,"FromRegExp");function*X(C,G,S){yield`(typeof ${S} === 'string')`,ve(C.maxLength)&&(yield`${S}.length <= ${C.maxLength}`),ve(C.minLength)&&(yield`${S}.length >= ${C.minLength}`),C.pattern!==void 0&&(yield`${ht(`${new RegExp(C.pattern)};`)}.test(${S})`),C.format!==void 0&&(yield`format('${C.format}', ${S})`)}i(X,"FromString");function*pe(C,G,S){yield`(typeof ${S} === 'symbol')`}i(pe,"FromSymbol");function*we(C,G,S){yield`(typeof ${S} === 'string')`,yield`${ht(`${new RegExp(C.pattern)};`)}.test(${S})`}i(we,"FromTemplateLiteral");function*Fe(C,G,S){yield`${ln(C.$ref)}(${S})`}i(Fe,"FromThis");function*ar(C,G,S){if(yield`Array.isArray(${S})`,C.items===void 0)return yield`${S}.length === 0`;yield`(${S}.length === ${C.maxItems})`;for(let se=0;se<C.items.length;se++)yield`${Lr(C.items[se],G,`${S}[${se}]`)}`}i(ar,"FromTuple");function*Ze(C,G,S){yield`${S} === undefined`}i(Ze,"FromUndefined");function*St(C,G,S){yield`(${C.anyOf.map(Q=>Lr(Q,G,S)).join(" || ")})`}i(St,"FromUnion");function*Gr(C,G,S){yield`${S} instanceof Uint8Array`,ve(C.maxByteLength)&&(yield`(${S}.length <= ${C.maxByteLength})`),ve(C.minByteLength)&&(yield`(${S}.length >= ${C.minByteLength})`)}i(Gr,"FromUint8Array");function*Wn(C,G,S){yield"true"}i(Wn,"FromUnknown");function*no(C,G,S){yield Si.IsVoidLike(S)}i(no,"FromVoid");function*an(C,G,S){const se=Ge.instances.size;Ge.instances.set(se,C),yield`kind('${C[U]}', ${se}, ${S})`}i(an,"FromKind");function*tt(C,G,S,se=!0){const Q=Jt(C.$id)?[...G,C]:G,ee=C;if(se&&Jt(C.$id)){const Je=ln(C.$id);if(Ge.functions.has(Je))return yield`${Je}(${S})`;{Ge.functions.set(Je,"<deferred>");const Mt=un(Je,C,G,"value",!1);return Ge.functions.set(Je,Mt),yield`${Je}(${S})`}}switch(ee[U]){case"Any":return yield*t();case"Argument":return yield*n();case"Array":return yield*o(ee,Q,S);case"AsyncIterator":return yield*s(ee,Q,S);case"BigInt":return yield*a(ee,Q,S);case"Boolean":return yield*l(ee,Q,S);case"Constructor":return yield*u(ee,Q,S);case"Date":return yield*d(ee,Q,S);case"Function":return yield*f(ee,Q,S);case"Import":return yield*h(ee,Q,S);case"Integer":return yield*g(ee,Q,S);case"Intersect":return yield*m(ee,Q,S);case"Iterator":return yield*p(ee,Q,S);case"Literal":return yield*v(ee,Q,S);case"Never":return yield*w();case"Not":return yield*k(ee,Q,S);case"Null":return yield*D(ee,Q,S);case"Number":return yield*A(ee,Q,S);case"Object":return yield*I(ee,Q,S);case"Promise":return yield*L(ee,Q,S);case"Record":return yield*Y(ee,Q,S);case"Ref":return yield*re(ee,Q,S);case"RegExp":return yield*te(ee,Q,S);case"String":return yield*X(ee,Q,S);case"Symbol":return yield*pe(ee,Q,S);case"TemplateLiteral":return yield*we(ee,Q,S);case"This":return yield*Fe(ee,Q,S);case"Tuple":return yield*ar(ee,Q,S);case"Undefined":return yield*Ze(ee,Q,S);case"Union":return yield*St(ee,Q,S);case"Uint8Array":return yield*Gr(ee,Q,S);case"Unknown":return yield*Wn();case"Void":return yield*no(ee,Q,S);default:if(!ni(ee[U]))throw new wN(C);return yield*an(ee,Q,S)}}i(tt,"Visit");const Ge={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Lr(C,G,S,se=!0){return`(${[...tt(C,G,S,se)].join(" && ")})`}i(Lr,"CreateExpression");function ln(C){return`check_${ah.Encode(C)}`}i(ln,"CreateFunctionName");function ht(C){const G=`local_${Ge.variables.size}`;return Ge.variables.set(G,`const ${G} = ${C}`),G}i(ht,"CreateVariable");function un(C,G,S,se,Q=!0){const[ee,Je]=[`
`,Kn=>"".padStart(Kn," ")],Mt=Dn("value","any"),oo=No("boolean"),Cn=[...tt(G,S,se,Q)].map(Kn=>`${Je(4)}${Kn}`).join(` &&${ee}`);return`function ${C}(${Mt})${oo} {${ee}${Je(2)}return (${ee}${Cn}${ee}${Je(2)})
}`}i(un,"CreateFunction");function Dn(C,G){const S=Ge.language==="typescript"?`: ${G}`:"";return`${C}${S}`}i(Dn,"CreateParameter");function No(C){return Ge.language==="typescript"?`: ${C}`:""}i(No,"CreateReturns");function lu(C,G,S){const se=un("check",C,G,"value"),Q=Dn("value","any"),ee=No("boolean"),Je=[...Ge.functions.values()],Mt=[...Ge.variables.values()],oo=Jt(C.$id)?`return function check(${Q})${ee} {
  return ${ln(C.$id)}(value)
}`:`return ${se}`;return[...Mt,...Je,oo].join(`
`)}i(lu,"Build");function hs(...C){const G={language:"javascript"},[S,se,Q]=C.length===2&&en(C[1])?[C[0],C[1],G]:C.length===2&&!en(C[1])?[C[0],[],C[1]]:C.length===3?[C[0],C[1],C[2]]:C.length===1?[C[0],[],G]:[null,[],G];if(Ge.language=Q.language,Ge.variables.clear(),Ge.functions.clear(),Ge.instances.clear(),!gr(S))throw new w1(S);for(const ee of se)if(!gr(ee))throw new w1(ee);return lu(S,se)}i(hs,"Code"),e.Code=hs;function Gk(C,G=[]){const S=hs(C,G,{language:"javascript"}),se=globalThis.Function("kind","format","hash",S),Q=new Map(Ge.instances);function ee(Cn,Kn,uu){if(!ni(Cn)||!Q.has(Kn))return!1;const Hk=jg(Cn),Zk=Q.get(Kn);return Hk(Zk,uu)}i(ee,"typeRegistryFunction");function Je(Cn,Kn){return Og(Cn)?Bg(Cn)(Kn):!1}i(Je,"formatRegistryFunction");function Mt(Cn){return lm(Cn)}i(Mt,"hashFunction");const oo=se(ee,Je,Mt);return new yN(C,G,oo,S)}i(Gk,"Compile"),e.Compile=Gk})(ll||(ll={}));const uh={};function W5(e,r){e in uh||(uh[e]=r)}i(W5,"registerErrorMessage");let $1=!1;function $N(){$1||($1=!0,GM(e=>(uh[e.schema[U]]||j5)(e)))}i($N,"setShapeDefinitionErrorMessage");const ch=Symbol.for("object-shape-tester.shape-identifier");function _e(e){if($N(),um(e))return e;const r=dh(e),t=Mi(r,!1),n=Mi(r,!0),o={$_schema:r,$_schemaNoExtraKeys:t,$_schemaExtraKeys:n,default:r.default,$_compiledSchema:ll.Compile(r),$_compiledSchemaNoExtraKeys:ll.Compile(t),$_compiledSchemaExtraKeys:ll.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[ch]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}i(_e,"defineShape");function um(e){return F.hasKey(e,ch)&&!!e[ch]}i(um,"isShape");function cm(e){return F.hasKey(e,U)}i(cm,"isSchema");function Mi(e,r){const t={...e};if(Array.isArray(e.anyOf)&&(t.anyOf=e.anyOf.map(n=>Mi(n,r))),Array.isArray(e.allOf)&&(t.allOf=e.allOf.map(n=>Mi(n,r))),cm(e.items)?t.items=Mi(e.items,r):Array.isArray(e.items)&&(t.items=e.items.map(n=>Mi(n,r))),F.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,s])=>{n[o]=Mi(s,r)}),t.properties=n}return t.additionalProperties=r,t}i(Mi,"forceAdditionalProperties");function dh(e){if(cm(e))return e;if(um(e))return e.$_schema;if(F.isFunction(e))return Ye.Function([],Ye.Any(),{default:e});if(F.isObject(e)){const r={},t={};return Object.entries(e).forEach(([n,o])=>{const s=dh(o);t[n]=s,r[n]=s.default}),Ye.Object(t,{default:r})}else{if(F.isArray(e))return Ye.Array(Ye.Union(e.map(r=>dh(r))),{default:[]});if(F.isPrimitive(e)){if(F.isString(e))return Ye.String({default:e});if(F.isNumber(e))return Ye.Number({default:e});if(F.isBoolean(e))return Ye.Boolean({default:e});if(F.isSymbol(e))return Ye.Symbol({default:e});if(F.isNull(e))return Ye.Null({default:null});if(F.isUndefined(e))return Ye.Undefined({default:void 0});if(F.isBigInt(e))return Ye.BigInt({default:e});zr.tsType(e).equals(),zr.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${x(e)}`)}}i(dh,"shapeInitToSchema");function kN({checkValue:e,default:r,name:t}){return ni(t)||Lg(t,(n,o)=>e(o)),(n=r)=>_e(Ye.Unsafe({[U]:t,default:n}))}i(kN,"createCustomShape");function Hi(e,r){const t=Kt(e);if(r!=null&&!t.includes(r))throw new TypeError("enumShape default must be a subset of the given enum.");return _e(Ye.Union(t.map(n=>Ye.Literal(n)),{default:r??t[0]}))}i(Hi,"enumShape");function Ce(e){return F.isSymbol(e)?xN(e):_e(Ye.Const(e,{default:e}))}i(Ce,"exactShape");const Au="ExactSymbol";function xN(e){return ni(Au)||Lg(Au,(r,t)=>t===r.symbol),W5(Au,({schema:r})=>`Expected symbol ${r.symbol?.description?tD({value:r.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),_e(Ye.Unsafe({[U]:Au,symbol:e,default:e}))}i(xN,"exactSymbolShape");function DN(...e){const r={},t=e.map(n=>{const o=_e(n);return Object.assign(r,o.default),o.$_schema});return _e(Ye.Composite(t,{default:r}))}i(DN,"intersectShape");function ot(e,r={}){Dr.ExactOptionalPropertyTypes=!0;const t=_e(e).$_schema,n=r.alsoUndefined?Ye.Union([Ye.Undefined(),t]):t;return _e(Ye.Optional(n))}i(ot,"optionalShape");function hr(...e){let r;const t=e.map((n,o)=>{const s=_e(n);return o||(r=s.default),s.$_schema});return _e(Ye.Union(t,{default:r}))}i(hr,"unionShape");class CN extends TypeError{static{i(this,"ShapeMismatchError")}errors;failureMessage;name="ShapeMismatchError";constructor(r,t){const n=r.map(s=>K5(s)).join(`
`),o=Xi(t,`Shape mismatch:
${zh(n,1)}`);super(o),this.errors=r,this.failureMessage=t}}function EN(e){return e.errors.flatMap(r=>Array.from(r))}i(EN,"getSubErrors");function K5(e,r=0){const t=EN(e).map(o=>K5(o,r+1)),n=[e.path,e.message].filter(F.isTruthy).join(": ")+(t.length?":":"");return[zh(n,r),...t].join(`
`)}i(K5,"createErrorMessage");function Wo(e,r,t={}){return G5(r,t).Check(e)}i(Wo,"checkValidShape");function Ec(e,r,t={},n){if(Wo(e,r,t))return;const o=Array.from(G5(r,t).Errors(e));if(o.length)throw new CN(o,n)}i(Ec,"assertValidShape");function G5(e,r){return e=AN(e),r.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}i(G5,"getCompiledSchema");function AN(e){return _e(e)}i(AN,"ensureShape");function Ms({exclusiveMax:e,exclusiveMin:r,...t}){const{min:n,max:o}=Ph(t),s=t.default??(o-n)/2+n,a=_e(Ye.Number({...r?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:s})),l=M2(()=>Ec(s,a));if(l)throw sa(l,"Default range value is not within range.");return a}i(Ms,"rangeShape");const Gu="recordShape";function Sd({keys:e,values:r,partial:t,additionalProperties:n}){SN();const o=H5(e),s=_e(r);return _e(Ye.Unsafe({[U]:Gu,keysShape:o,valuesShape:s,isPartial:!!t,additionalProperties:!!n,default:MN({isPartial:!!t,keysShape:o,valuesShape:s})}))}i(Sd,"recordShape");function SN(){ni(Gu)||Lg(Gu,(e,r)=>{if(typeof r!="object"||!r||Array.isArray(r))return!1;const t=Object.entries(r).every(([o,s])=>{const a=e.additionalProperties?!0:Wo(o,e.keysShape),l=Wo(s,e.valuesShape);return a&&l}),n=e.isPartial?!0:!k1(e.keysShape,r).length;return t&&n}),W5(Gu,e=>{const t=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=wn(Object.entries(n),([u])=>u,(u,[d,f])=>!Wo(d,t.keysShape)||!Wo(f,t.valuesShape)),s=k1(t.keysShape,n),a=o.length?["Failure at keys",o.join(",")].join(": "):"",l=s.length?["Missing keys",s.join(",")].join(": "):"";return[a,l].filter(F.isTruthy).join(`
`)})}i(SN,"setRecordShapeRegistry");function k1(e,r){const t=Ac(e).filter(n=>F.isPropertyKey(n));return t.length?t.filter(n=>!F.hasKey(r,n)):[]}i(k1,"getMissingKeys");function MN({keysShape:e,valuesShape:r,isPartial:t}){if(t)return{};{const n=Ac(e),o=r.default;return Object.fromEntries(n.map(s=>[s,o]))}}i(MN,"createDefaultValue");function H5(e){return um(e)?e:cm(e)?_e(e):F.isObject(e)?Hi(e):F.isArray(e)&&F.isLengthAtLeast(e,1)?hr(...e.map(r=>Ce(r))):F.isPropertyKey(e)?_e(e):_e(Ye.Undefined())}i(H5,"defineKeysShape");function Ac(e){const r=e.$_schema,t=r[U].toLowerCase();return["const","literal"].includes(t)?[r.const]:t==="union"?Uc(r.anyOf.flatMap(n=>Ac(_e(n)))):["undefined","number","string","symbol"].includes(t)?[]:Ac(H5(e.default))}i(Ac,"extractFiniteKeys");function FN(e){return _e(Ye.Unknown({default:e}))}i(FN,"unknownShape");const TN=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],dm=TN.reduce((e,r)=>(e[r]=r,e),{});fr.defaultZone.name;const Z5=dm.UTC,NN=_e({hour:Ms({...Ap,default:Ap.min}),minute:Ms({...Sp,default:Sp.min}),second:Ms({...Mp,default:Mp.min}),millisecond:Ms({...Fp,default:Fp.min}),timezone:Hi(dm,Z5)}),PN=_e({year:2023,month:Ms({...Np,default:Np.min}),day:Ms({...Pp,default:Pp.min}),timezone:Hi(dm,Z5)});_e(DN(PN,NN));ue.Years+"",ue.Months+"",ue.Weeks+"",ue.Days+"",ue.Hours+"",ue.Minutes+"",ue.Seconds+"",ue.Milliseconds+"";_e(hr({get:Ce(J.Month),in:hr(Ce(J.Year))},{get:Ce(J.Week),in:hr(Ce(J.Year),Ce(J.Month))},{get:Ce(J.Day),in:hr(Ce(J.Year),Ce(J.Month),Ce(J.Week))},{get:Ce(J.Hour),in:hr(Ce(J.Year),Ce(J.Month),Ce(J.Week),Ce(J.Day))},{get:Ce(J.Minute),in:hr(Ce(J.Year),Ce(J.Month),Ce(J.Week),Ce(J.Day),Ce(J.Hour))},{get:Ce(J.Second),in:hr(Ce(J.Year),Ce(J.Month),Ce(J.Week),Ce(J.Day),Ce(J.Hour),Ce(J.Minute))},{get:Ce(J.Millisecond),in:hr(Ce(J.Year),Ce(J.Month),Ce(J.Week),Ce(J.Day),Ce(J.Hour),Ce(J.Minute),Ce(J.Second))}));Sd({keys:Hi(ue),values:-1,partial:!0});var x1;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(x1||(x1={}));var fh;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(fh||(fh={}));var D1;(function(e){e.Year="year",e.Month="month",e.Day="day"})(D1||(D1={}));const IN={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Y6(IN,Kt(fh));kN({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return ON(e)}});function ON(e){return le.fromISO(e).toUTC().toISO()===e}i(ON,"isValidIsoString");const BN=_e({listen(e,r){return()=>!1},destroy(){},removeListener(e){return!1},value:FN()});function Bf(e){return Wo(e,BN,{allowExtraKeys:!0})}i(Bf,"isObservableBase");class J5 extends Rw{static{i(this,"Observable")}value;equalityCheck;constructor(r){super(),this.value=r.defaultValue,this.equalityCheck="equalityCheck"in r?r.equalityCheck:$g}setValue(r){return super.setValue(r)}listen(r,t){return super.listen(r,t)}removeListener(r){return super.removeListener(r)}}const{I:RN}=ND,C1=i(e=>e,"i$1"),E1=i(()=>document.createComment(""),"s"),La=i((e,r,t)=>{const n=e._$AA.parentNode,o=r===void 0?e._$AB:r._$AA;if(t===void 0){const s=n.insertBefore(E1(),o),a=n.insertBefore(E1(),o);t=new RN(s,a,e,e.options)}else{const s=t._$AB.nextSibling,a=t._$AM,l=a!==e;if(l){let u;t._$AQ?.(e),t._$AM=e,t._$AP!==void 0&&(u=e._$AU)!==a._$AU&&t._$AP(u)}if(s!==o||l){let u=t._$AA;for(;u!==s;){const d=C1(u).nextSibling;C1(n).insertBefore(u,o),u=d}}}return t},"v"),Ei=i((e,r,t=e)=>(e._$AI(r,t),e),"u$1"),LN={},jN=i((e,r=LN)=>e._$AH=r,"p$2"),_N=i(e=>e._$AH,"M$1"),Rf=i(e=>{e._$AR(),e._$AA.remove()},"h");const fm={ATTRIBUTE:1,CHILD:2,ELEMENT:6},So=i(e=>(...r)=>({_$litDirective$:e,values:r}),"e$3");class Mo{static{i(this,"i")}constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,n){this._$Ct=r,this._$AM=t,this._$Ci=n}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}}const UN={attribute:!0,type:String,converter:dc,reflect:!1,hasChanged:ng},zN=i((e=UN,r,t)=>{const{kind:n,metadata:o}=t;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(t.name,e),n==="accessor"){const{name:a}=t;return{set(l){const u=r.get.call(this);r.set.call(this,l),this.requestUpdate(a,u,e,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,e,l),l}}}if(n==="setter"){const{name:a}=t;return function(l){const u=this[a];r.call(this,l),this.requestUpdate(a,u,e,!0,l)}}throw Error("Unsupported decorator location: "+n)},"r");function VN(e){return(r,t)=>typeof t=="object"?zN(e,r,t):((n,o,s)=>{const a=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),a?Object.getOwnPropertyDescriptor(o,s):void 0})(e,r,t)}i(VN,"n$1");const At=So(class extends Mo{constructor(e){if(super(e),e.type!==fm.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(r=>e[r]).join(" ")+" "}update(e,[r]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in r)r[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(r)}const t=e.element.classList;for(const n of this.st)n in r||(t.remove(n),this.st.delete(n));for(const n in r){const o=!!r[n];o===this.st.has(n)||this.nt?.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return bn}});const Ur=i(e=>e??oe,"o");function qN(e,r,t){return e?r(e):t?.(e)}i(qN,"n");class WN extends nl{static{i(this,"DeclarativeElement")}static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function KN(e,r,t){const n=!r.length&&!t.length,o=e.length?!1:!r.filter(l=>!!l.index).length;if(n||o)return[...e];const s=e.map(l=>[l]);return s.length||(s[0]=[]),t.forEach(l=>{l>=0&&l<e.length&&(s[l]=[])}),r.forEach(l=>{const u=s[l.index];u&&u.splice(0,0,...l.values)}),s.flat()}i(KN,"insertAndRemoveValues");function hh(e){return F.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}i(hh,"isMinimalDefinitionWithInputs");function hm(e){return F.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}i(hm,"hasTagName");function Y5(e){return wn(e,r=>{if(hh(r))return r.definition;if(hm(r))return r.tagInterpolationKey||r},F.isTruthy)}i(Y5,"extractElementKeys");const X5=new WeakMap;function GN(e,r){const t=Y5(r);return Q5(X5,[e,...t]).value?.template}i(GN,"getAlreadyMappedTemplate");function HN(e,r,t){const n=Y5(r);return r$(X5,[e,...n],t)}i(HN,"setMappedTemplate");function Q5(e,r,t=0){const{currentTemplateAndNested:n,reason:o}=e$(e,r,t);return n?t===r.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Q5(n.nested,r,t+1):{value:void 0,reason:`map at key index ${t} did not have nested maps`}:{value:n,reason:o}}i(Q5,"getNestedValues");function e$(e,r,t){const n=r[t];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${t} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${t} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${t} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}i(e$,"getCurrentKeyAndValue");function r$(e,r,t,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:a}=e$(e,r,n);if(!s)return{result:!1,reason:a};const l=o??{nested:void 0,template:void 0};if(o||e.set(s,l),n===r.length-1)return l.template=t,{result:!0,reason:"set value at end of keys array"};const u=l.nested??new WeakMap;return l.nested||(l.nested=u),r$(u,r,t,n+1)}i(r$,"setNestedValues");function t$(e,r,t){const n=GN(e,r),o=n??t();if(!n){const l=HN(e,r,o);if(!l.result)throw new Error(`Failed to set template transform: ${l.reason}`)}const s=o.valuesTransform(r),a=KN(r,s.valueInsertions,s.valueIndexDeletions);return{strings:o.templateStrings,values:a}}i(t$,"getTransformedTemplate");function n$(e,r,t,n){const o=[],s=[],a=[],l=[];return e.forEach((d,f)=>{const h=o.length-1,g=o[h],m=f-1,p=r[m];n&&n(d);let v,w=[];if(typeof g=="string"&&(v=t(g,d,p),v)){o[h]=[g,v.replacement].join(""),a.push(m);const D=v.getExtraValues;w=D?D(p):[],w.length&&D?(o[h]+=" ",w.forEach((A,I)=>{I&&o.push(" ")}),l.push(A=>{const I=A[m],L=D(I);return{index:m,values:L}}),o.push(d)):o[h]+=d}v||o.push(d);const k=e.raw[f];v?(s[h]=[s[h],v.replacement,k].join(""),w.length&&w.forEach(()=>{s.push("")})):s.push(k)}),{templateStrings:Object.assign([],o,{raw:s}),valuesTransform(d){const f=l.flatMap(h=>h(d));return{valueIndexDeletions:a,valueInsertions:f}}}}i(n$,"transformTemplate");function ZN(...[e,r,t]){if(hm(t))return{replacement:t.tagName,getExtraValues:void 0}}i(ZN,"transformCss");function JN(e,r){return n$(e,r,ZN)}i(JN,"transformCssTemplate");function E(e,...r){const t=t$(e,r,()=>JN(e,r));return W2(t.strings,...t.values)}i(E,"css");const YN={allowPolymorphicState:!1,errorHandler:void 0};function o$(e,r){const t=e.instanceState;We(r).forEach(n=>{if(t&&n in t)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=r[n]:e[n]=r[n]}),"instanceInputs"in e&&We(e.instanceInputs).forEach(n=>{n in r||(e.instanceInputs[n]=void 0)})}i(o$,"assignInputs");class XN extends CustomEvent{static{i(this,"TypedEvent")}_type="";get type(){return this._type}constructor(r,t){super(typeof r=="string"?r:r.type,{detail:t,bubbles:!0,composed:!0})}}function gm(){return e=>class extends XN{static type=e;_type=e;constructor(r){super(e,r)}}}i(gm,"defineTypedEvent");function ir(){return gm()}i(ir,"defineElementEvent");function QN(e,r){return r?Object.keys(r).filter(t=>{if(typeof t!="string")throw new TypeError(`Expected event key of type string but got type '${typeof t}' for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const o=gm()([e,n].join("-"));return t[n]=o,t},{}):{}}i(QN,"createEventDescriptorMap");function eP(e){return e?cr(e,r=>r):{}}i(eP,"createHostClassNamesMap");function i$(e,r){r in e||VN()(e,r)}i(i$,"bindReactiveProperty");function rP(e,r,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${t.toLowerCase()}'`);if(!(e in r))throw new Error(`Property '${String(e)}' does not exist on '${t.toLowerCase()}'.`)}i(rP,"assertValidPropertyName");function A1(e,r){const t=e;function n(a){r?rP(a,e,e.tagName):i$(e,a)}i(n,"verifyProperty");function o(a,l){return n(l),t[l]}return i(o,"valueGetter"),new Proxy({},{get:o,set(a,l,u){n(l);const d=t[l];function f(g){a[l]=g,t[l]=g}i(f,"setValueOnElement");const h=e.observablePropertyListenerMap[l];if(d!==u&&Bf(d)&&h&&d.removeListener(h),Bf(u))if(h)u.listen(!1,h);else{let g=function(){e.requestUpdate()};i(g,"newListener"),e.observablePropertyListenerMap[l]=g,u.listen(!1,g)}else Bf(d)&&(e.observablePropertyListenerMap[l]=void 0);return f(u),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,l){if(l in a)return{get value(){return o(a,l)},configurable:!0,enumerable:!0}},has(a,l){return Reflect.has(a,l)}})}i(A1,"createElementPropertyProxy");function S1(e,r){const t=[e,"-"].join("");Object.keys(r).forEach(n=>{if(!n.startsWith(t))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}i(S1,"assertValidStringNames");function M1(e,r,t){return t?Qo(t,o=>({key:o,value:[e,r,o].join("-")}),{}):{}}i(M1,"createStringNameMap");function tP({hostClassNames:e,cssVars:r}){return{hostClasses:cr(e,(t,n)=>({name:Me(n),selector:Me(`:host(.${n})`)})),cssVars:r}}i(tP,"createStylesCallbackInput");function nP({host:e,hostClassesInit:r,hostClassNames:t,state:n,inputs:o}){r&&We(r).forEach(s=>{const a=r[s],l=t[s];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(l):e.classList.remove(l))})}i(nP,"applyHostClasses");function oP({element:e,eventsMap:r,cssVars:t,slotNamesMap:n,testIdsMap:o}){function s(l){We(l).forEach(u=>{const d=l[u];e.instanceState[u]=d})}return i(s,"updateState"),{cssVars:t,slotNames:n,testIds:o,dispatch:i(l=>e.dispatchEvent(l),"dispatch"),events:r,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:s}}i(oP,"createRenderParams");function qn(...e){return zr.isEmpty(e),r=>{const t=r;if(!F.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return iP({...t,options:{...t.options}})}}i(qn,"defineElement");function iP(e){if(!F.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!F.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const r={...YN,...e.options},t=QN(e.tagName,e.events),n=eP(e.hostClasses);e.hostClasses&&S1(e.tagName,e.hostClasses),e.cssVars&&S1(e.tagName,e.cssVars);const o=e.cssVars?eo(e.cssVars):{},s=M1(e.tagName,"slot",e.slotNames),a=M1(e.tagName,"test-id",e.testIds),l=typeof e.styles=="function"?e.styles(tP({hostClassNames:n,cssVars:o})):e.styles||E``,u=e.render;function d(...[h]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:h}}i(d,"typedAssignCallback");const f=class extends WN{static{i(this,"anonymousClass")}static elementOptions=r;static tagName=e.tagName;static styles=l;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return oP({element:this,eventsMap:t,cssVars:o,slotNamesMap:s,testIdsMap:a})}static assign=d;static events=t;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=s;static testIds=a;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const h=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(h);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");We(m).forEach(p=>{i$(this,p),this.instanceState[p]=m[p]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(h)instanceof Promise))throw new TypeError("init cannot be asynchronous");const g=u(h);if(g instanceof Promise)throw new TypeError("render cannot be asynchronous");return nP({host:h.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:h.state,inputs:h.inputs}),this._lastRenderedProps={inputs:{...h.inputs},state:{...h.state}},g}catch(h){const g=sa(h,`Failed to render ${e.tagName}`);return console.error(g),this._lastRenderError=g,r.errorHandler?.(g),Qr(g)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const h=this.createRenderParams();if(e.init(h)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(h=>{F.hasKey(h,"destroy")&&F.isFunction(h.destroy)&&h.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const h=this.createRenderParams();if(e.cleanup(h)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(h){o$(this,h)}observablePropertyListenerMap={};instanceInputs=A1(this,!1);instanceState=A1(this,!r.allowPolymorphicState);constructor(){super(),this.definition=f}};return Object.defineProperties(f,{name:{value:eD(e.tagName,{firstLetterCase:hl.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,f)),f}i(iP,"internalDefineElement");class sP extends As{static{i(this,"InternalAsyncPropClass")}isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function aP(e){return new sP(e)}i(aP,"asyncProp");const F1=i((e,r,t)=>{const n=new Map;for(let o=r;o<=t;o++)n.set(e[o],o);return n},"u"),lP=So(class extends Mo{constructor(e){if(super(e),e.type!==fm.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,r,t){let n;t===void 0?t=r:r!==void 0&&(n=r);const o=[],s=[];let a=0;for(const l of e)o[a]=n?n(l,a):a,s[a]=t(l,a),a++;return{values:s,keys:o}}render(e,r,t){return this.dt(e,r,t).values}update(e,[r,t,n]){const o=_N(e),{values:s,keys:a}=this.dt(r,t,n);if(!Array.isArray(o))return this.ut=a,s;const l=this.ut??=[],u=[];let d,f,h=0,g=o.length-1,m=0,p=s.length-1;for(;h<=g&&m<=p;)if(o[h]===null)h++;else if(o[g]===null)g--;else if(l[h]===a[m])u[m]=Ei(o[h],s[m]),h++,m++;else if(l[g]===a[p])u[p]=Ei(o[g],s[p]),g--,p--;else if(l[h]===a[p])u[p]=Ei(o[h],s[p]),La(e,u[p+1],o[h]),h++,p--;else if(l[g]===a[m])u[m]=Ei(o[g],s[m]),La(e,o[h],o[g]),g--,m++;else if(d===void 0&&(d=F1(a,m,p),f=F1(l,h,g)),d.has(l[h]))if(d.has(l[g])){const v=f.get(a[m]),w=v!==void 0?o[v]:null;if(w===null){const k=La(e,o[h]);Ei(k,s[m]),u[m]=k}else u[m]=Ei(w,s[m]),La(e,o[h],w),o[v]=null;m++}else Rf(o[g]),g--;else Rf(o[h]),h++;for(;m<=p;){const v=La(e,u[p+1]);Ei(v,s[m]),u[m++]=v}for(;h<=g;){const v=o[h++];v!==null&&Rf(v)}return this.ut=a,jN(e,u),bn}}),uP=lP;function Md(e,r){return Zi(e,r),e.element}i(Md,"extractElement");function cP(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}i(cP,"getPartHostTagName");function Zi(e,r){const t=cP(e),n=t?`: in ${t}`:"";if(e.type!==fm.ELEMENT)throw new Error(`${r} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${r} directive found no element${n}.`)}i(Zi,"assertIsElementPartInfo");function dP(e,r){return So(class extends Mo{element;constructor(t){super(t),this.element=wr.instanceOf(Md(t,e),HTMLElement)}render(...t){return r({params:t,directive:this,element:this.element}),bn}})}i(dP,"createMutateDirective");const wo=dP("attributes",({element:e,params:[r],directive:t})=>{if(!r)return;const o=es(t,"allAttributesApplied",()=>new Set);We(r).forEach(s=>{if(s.toLowerCase()!==s)throw new Error(`Cannot assign attribute name with uppercase letters: ${s}`);o.add(s)}),o.forEach(s=>{const a=r[s];a==null||a===!1||a===oe?e.removeAttribute(s):a===""||a===!0?e.setAttribute(s,""):e.setAttribute(s,String(a))})});function fP(e){const r=So(class extends Mo{element;constructor(t){super(t),this.element=Md(t,e)}render(t){return this.element.setAttribute(e,t),bn}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(t){return r(t)},attributeName:e}}i(fP,"createAttributeDirective");function z(e,r){return hP(e,r)}i(z,"listen");const hP=So(class extends Mo{element;lastListenerMetaData;constructor(e){super(e),this.element=Md(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,r){return{eventType:e,callback:r,listener:i(t=>this.lastListenerMetaData?.callback(t),"listener")}}render(e,r){const t=typeof e=="string"?e:e.type;if(typeof t!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(t)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===t?this.lastListenerMetaData.callback=r:this.resetListener(this.createListenerMetaData(t,r)),bn}});function gP(e){return z("keydown",async r=>{const t=r.code.toLowerCase();(t.includes("enter")||t.includes("return")||t==="space")&&(r.stopImmediatePropagation(),r.preventDefault(),await e())})}i(gP,"listenToActivate");const T1="onDomCreated",Ji=So(class extends Mo{element;constructor(e){super(e),Zi(e,T1)}update(e,[r]){Zi(e,T1);const t=e.element;return t!==this.element&&(window.requestAnimationFrame(()=>r(t)),this.element=t),this.render(r)}render(e){}}),N1="onDomRendered",mP=So(class extends Mo{constructor(e){super(e),Zi(e,N1)}update(e,[r]){Zi(e,N1);const t=e.element;return window.requestAnimationFrame(()=>r(t)),this.render(r)}render(e){}}),P1="onResize",s$=So(class extends Mo{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&pP(this.element,this.callback,e)});callback;constructor(e){super(e),Zi(e,P1)}update(e,[r]){Zi(e,P1),this.callback=r;const t=e.element,n=this.element;return t!==n&&(this.element=t,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(t)),this.render(r)}render(e){}});function pP(e,r,t){const n=t[0];if(!n)throw console.error(t),new Error("Resize observation triggered but the first entry was empty.");r({target:n.target,contentRect:n.contentRect},e)}i(pP,"handleOnResizeCallback");function Lt(e,r,t){return qN(e,()=>r,()=>t)}i(Lt,"renderIf");const{attributeDirective:bP}=fP("data-test-id"),Ko=bP;function a$(e){const{assertInputs:r,transformInputs:t}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(r(o),qn(...n)(t(o)))}i(a$,"wrapDefineElement");function vP(e,r){return yP(void 0,e)}i(vP,"assign");const yP=So(class extends Mo{element;constructor(e){super(e),this.element=Md(e,"assign")}render(e,r){return o$(this.element,r),bn}}),wP={};function $P(e,r){return r.map((t,n)=>{const o=e[n],s=e[n+1];if(o&&s){const{shouldHaveTagNameHere:a}=l$(o,s);if(a&&F.isString(t))return{tagName:t,tagInterpolationKey:es(wP,t,()=>({tagName:t}))}}return t})}i($P,"mapHtmlValues");function l$(e,r){const t=e.trim().endsWith("<")&&!!r.match(/^[\s>]/),n=e.trim().endsWith("</")&&r.trim().startsWith(">");return{isOpeningTag:t,shouldHaveTagNameHere:t||n}}i(l$,"classifyValue");function kP(...[e,r,t]){const n=hh(t)?t.definition:t,{isOpeningTag:o,shouldHaveTagNameHere:s}=l$(e,r),a=hm(n);if(a&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!a)throw console.error({lastNewString:e,currentTemplateString:r,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!s||!a?void 0:{replacement:n.tagName,getExtraValues(u){const d=hh(u)?u.inputs:void 0;return[o&&d?vP(d):void 0].filter(F.isTruthy)}}}i(kP,"transformHtml");function xP(e){}i(xP,"stringValidator");function DP(e){return n$(e.strings,e.values,kP,xP)}i(DP,"transformHtmlTemplate");function b(e,...r){const t=$P(e,r),n=CD(e,...t),o=t$(e,t,()=>DP(n));return{...n,strings:o.strings,values:o.values}}i(b,"html");function gh(e){if("templateString"in e)return e.templateString;const{strings:r,values:t}=e;if(!r?.length&&!t?.length)return"";const n=[...t||[],""],s=(r??[""]).map((a,l)=>{const u=CP(a,n[l]);return`${a}${u}`});return R2(s.join(""))}i(gh,"convertTemplateToString");function CP(e,r){return r._$litType$!=null||r._$litDirective$!=null?gh(r):Array.isArray(r)?r.map(n=>gh(n)).join(""):e.endsWith("=")?`"${r}"`:r}i(CP,"extractValue");function u$(e){return cr(e,(r,t)=>t instanceof er?Me(t.toString({format:"hex"})):u$(t))}i(u$,"colorsObjectToCssResult");const EP="dodgerblue";function mh(e){const r=Math.abs(e.contrast("white","APCA")),t=Math.abs(e.contrast("black","APCA"));return r>t?"white":"black"}i(mh,"calculateTextColorString");function Lf({background:e,foreground:r}){return{background:e??new er(mh(r)),foreground:r??new er(mh(e))}}i(Lf,"createColorPair");var Sc;(function(e){e.Dark="dark",e.Light="light"})(Sc||(Sc={}));function AP(e){return e==="black"?"white":"black"}i(AP,"flipBackForeground");const SP={black:{foregroundFaint1:new er("#ccc"),foregroundFaint2:new er("#eee")},white:{foregroundFaint1:new er("#ccc"),foregroundFaint2:new er("#eee")}},MP={black:{backgroundFaint1:new er("#666"),backgroundFaint2:new er("#444")},white:{backgroundFaint1:new er("#ccc"),backgroundFaint2:new er("#fafafa")}};function I1({themeColor:e=EP,themeStyle:r=Sc.Light}={}){const t=new er(e),n=new er(r===Sc.Dark?"black":"white"),o=mh(n),s=new er(o),a={nav:{hover:Lf({background:t.clone().set({"hsl.l":93})}),active:Lf({background:t.clone().set({"hsl.l":90})}),selected:Lf({background:t.clone().set({"hsl.l":85})})},accent:{icon:t.clone().set({"hsl.l":40})},page:{background:n,...MP[AP(o)],foreground:s,...SP[o]}};return u$(a)}i(I1,"createTheme");async function O1(e=1){const r=new rc;function t(){requestAnimationFrame(()=>{e--,e?t():r.resolve()})}return i(t,"requestNextFrame"),t(),r.promise}i(O1,"waitForAnimationFrame");function FP(e,r){return{element:e,children:c$(e)}}i(FP,"getNestedChildrenTree");function c$(e,r,t){return TP(e).map(n=>{const o=c$(n);return{element:n,children:o}})}i(c$,"recursivelyGetNestedChildrenTree");function TP(e){return[...e.children,...e.shadowRoot?.children??[]]}i(TP,"getDirectChildren");function jf(e){return e.matches(":focus")}i(jf,"isElementFocused");function mm(e){if(e instanceof ShadowRoot)return e.host;const r=e.parentNode;if(r)return r instanceof Element?r:mm(r)}i(mm,"getParentElement");function d$(e,r){if(r(e))return e;const t=mm(e);if(t)return d$(t,r)}i(d$,"findMatchingAncestor");function Fd(e,r,t={}){const n=t.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof r)){const o=r.name,s=n?.constructor.name,a=t.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${s}'.`;throw new Error(a)}return n}i(Fd,"extractEventTarget");function NP(e){const r=mm(e);return r&&d$(r,t=>globalThis.getComputedStyle(t).overflowY!=="visible")||document.body}i(NP,"findOverflowAncestor");function PP(e){let r=0,t=document.activeElement||void 0;for(;t;){if(e({depth:r,element:t}))return r;t=t.shadowRoot?.activeElement||void 0,t&&++r}return r}i(PP,"walkActiveElement");function IP({searchQuery:e,searchIn:r}){const t=r.length,n=e.length;if(n>t)return!1;if(n===t)return e===r;const o=r.toLowerCase(),s=e.toLowerCase();e:for(let a=0,l=0;a<n;a++){const u=s.codePointAt(a);for(;l<t;)if(o.codePointAt(l++)===u)continue e;return!1}return!0}i(IP,"fuzzySearch");const OP=Oi(32);function Hu(e){return e.join(OP)}i(Hu,"createBreadcrumbsSearchKey");function f$(e){if(!e.length)return[];const r=Hu(e),t=f$(e.slice(0,-1));return[r,...t]}i(f$,"getFullTreeKeysToInclude");const BP=["error","errors"];function RP(e){return BP.includes(e)}i(RP,"isSearchingForErrors");function LP({flattenedNodes:e,searchQuery:r}){const t={};function n(o){Object.values(o.children).map(a=>(n(a),Hu(a.fullUrlBreadcrumbs))).forEach(a=>t[a]=!0)}return i(n,"addChildren"),e.forEach(o=>{const s=o.entry.errors.length&&RP(r),a=Hu(o.fullUrlBreadcrumbs);if(IP({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>F.isString(u)?u:gh(u))].join(" ").toLowerCase(),searchQuery:r.toLowerCase()})||s||t[a]){const u=f$(o.fullUrlBreadcrumbs);n(o),u.forEach(d=>t[d]=!0)}else t[a]=!1}),e.filter(o=>{const s=Hu(o.fullUrlBreadcrumbs),a=t[s];if(!F.isBoolean(a))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}i(LP,"searchFlattenedNodes");class pm extends Error{static{i(this,"SpaRouterError")}name="SpaRouterError"}class B1 extends pm{static{i(this,"GlobalUrlEventsConsolidationError")}name="GlobalUrlEventsConsolidationError"}class jP extends pm{static{i(this,"SanitizationDepthMaxed")}name="SanitizationDepthMaxed"}_e({paths:[""],search:ot(hr(void 0,Sd({keys:"",values:[""]}))),hash:ot(hr(void 0,""))});const _P=_e({basePath:ot("",{alsoUndefined:!0}),sanitizeRoute:i((e=>e),"sanitizeRoute"),maxListenerCount:ot(1,{alsoUndefined:!0}),disableWarnings:ot(!1,{alsoUndefined:!0}),isPaused:ot(!1,{alsoUndefined:!0})}),_f="://";function bm(...e){const r=e.join("/"),[t,n=""]=r.includes(_f)?r.split(_f):["",r];let o=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((a,l,u,d)=>{if(o)return a;const f=d[u+1];let h=l;const g=f?.startsWith("?"),m=!l.includes("?")&&g,p=f==="?";if(g||m){o=!0;let v=!1;const w=d.slice(u+2).reduce((k,D)=>(D.includes("#")&&(v=!0),v?k.concat(D):[k,D].join("&")),"");h=[l,f,p?Bi({value:w,prefix:"&"}):w].join("")}return a.concat(h)},[]);return[t,t?_f:"",s.join("/")].join("")}i(bm,"joinUrlPaths");var na;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(na||(na={}));var oa;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(oa||(oa={}));const UP=_e({encoding:ot(hr(void 0,Hi(na))),searchParamStrategy:ot(hr(void 0,Hi(oa)))});function Su(e,r){return e.map(t=>{if(t!=null)return Rs(String(t),r)}).filter(t=>t!=null)}i(Su,"codeValues");function Rs(e,r){return r?.encoding===na.Decode?decodeURIComponent(e):r?.encoding===na.Encode?encodeURIComponent(e):e}i(Rs,"codeValue");const zP=_e(Sd({keys:"",values:[""]}));function VP(e,r,t){const n=t?.searchParamStrategy===oa.Clear?{}:cr(e,(a,l)=>$6(l)),o=cr(r,(a,l)=>{if(t?.searchParamStrategy===oa.Append){const u=n[a],d=F.isArray(u)?u:[u];if(l){const f=F.isArray(l)?l:[l];return Su([...d,...f],t)}else return Su(d,t)}else return F.isArray(l)?Su(l,t):l?Su([l],t):void 0});return Zc({...n,...o},(a,l)=>!!l)}i(VP,"combineSearchParams");function h$(e,r){return F.isString(e)&&!e.includes("?")?{}:(F.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[a,...l]=J6(s,"=");return[a,l.length?l.join("="):void 0]}).reduce((s,[a,l])=>{const u=g$({options:r,key:a,value:l}),d=es(s,u.key,()=>[]);return l!=null&&d.push(u.value),s},{})}i(h$,"searchParamsToObject");function qP(e){if(e!=null)return F.isArray(e)?[...e]:e===""?[]:[e]}i(qP,"wrapParamValue");function WP(e,r){const t=wn(Object.entries(e),([n,o])=>{const s=qP(o);return s?.length?s.map(a=>{const l=g$({options:r,key:n,value:a});return[l.key,l.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return t.length?Ct({value:t.join("&"),prefix:"?"}):""}i(WP,"searchParamsToString");function g$({options:e,key:r,value:t}){return{key:Rs(r,e),value:Rs(String(t),e)}}i(g$,"codeParamKeyValue");function m$({hash:e,hostname:r,password:t,pathname:n,port:o,protocol:s,search:a,username:l}){return[s?s+"://":"",l?l+":":"",t?t+"@":"",Td({hostname:r,port:o}),vm({hash:e,pathname:n,search:a})].join("")}i(m$,"createHref");function p$({pathname:e}){const r=Bi({value:e,prefix:"/"});return r?r.split("/"):[]}i(p$,"createPaths");function vm({hash:e,pathname:r,search:t}){return[Ct({value:r,prefix:"/"}),t?Ct({value:t,prefix:"?"}):"",e?Ct({value:e,prefix:"#"}):""].join("")}i(vm,"createFullPath");function Td({hostname:e,port:r}){return[e,r?":"+r:""].join("")}i(Td,"createHost");function b$({hostname:e,port:r,protocol:t}){return[t,Td({hostname:e,port:r})].filter(F.isTruthy).join("://")}i(b$,"createOrigin");function Ls(e,r){const t=F.isString(e)?Bi({value:e,prefix:"."}):e.toString(),n=t.replace(/^[^#]*(?:#|$)/,""),o=n?Ct({value:Rs(n,r),prefix:"#"}):"",s=t.replace(/#[^#]*$/,""),a=s.replace(/^[^?]*(?:\?|$)/,""),l=a?Ct({value:Rs(a,r),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),d=u.includes("://")?u.replace(/:\/\/.*$/,""):"",f=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),h=f.replace(/@.*/,""),g=f.replace(/^[^@]*@/,""),m=h!==g,[p,...v]=m?h.split(":").reverse():[],w=v.toReversed().join("").replace(/[/:]/g,"")||"",k=p?.replace(/[/:]/g,"")||"",D=Z6(g.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),A=D[0]?.endsWith("]")?"":D[1]===":"&&D[0]||"",L=g.replace(new RegExp(`:${A}($|/)`),"$1").replace(/\/.*/,""),Y=g.replace(/^[^/]*(\/|$)/,"$1"),re=Rs(Y.replace(/^[^/]*(?:\/|$)/,"/"),r),te=Td({hostname:L,port:A}),X=b$({hostname:L,port:A,protocol:d}),pe=m$({hash:o,hostname:L,password:k,pathname:re,port:A,protocol:d,search:l,username:w}),we=h$(l),Fe=p$({pathname:re});return{fullPath:vm({hash:o,pathname:re,search:l}),hash:o,host:te,hostname:L,href:pe,origin:X,password:k,pathname:re,paths:Fe,port:A,protocol:d,search:l,searchParams:we,username:w}}i(Ls,"parseUrl");_e({hash:ot(hr(void 0,"")),search:ot(hr(void 0,"",Sd({keys:"",values:hr(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:ot(hr(void 0,"")),pathname:ot(hr(void 0,"")),paths:ot(hr(void 0,[""])),protocol:ot(hr(void 0,"")),username:ot(hr(void 0,"")),password:ot(hr(void 0,"")),port:ot(hr(void 0,"",-1))});function KP(e,r,t){const n=!!t,o=r==null||Wo(r,UP,{allowExtraKeys:!1}),s=o?Ls(""):F.instanceOf(e,URL)||F.isString(e)?Ls(e):e,a=o?e:r,l=F.isString(a)&&a.startsWith("."),u=F.isString(a)||F.instanceOf(a,URL)?Zc(Ls(a),(v,w)=>F.isTruthy(w)):a,d=n?t:o?r:void 0,f=cr(s,(v,w)=>{if(!F.hasKey(u,v))return w;const k=u[v];return F.isNumber(k)?String(k):F.isString(k)?v==="hash"&&k?Ct({value:k,prefix:"#"}):v==="pathname"?Ct({value:k,prefix:"/"}):k:w});F.hasKey(u,"paths")&&u.paths&&(f.pathname=bm(l?s.pathname:"",...u.paths));const h=F.isString(u.search)?h$(Ct({value:u.search,prefix:"?"})):Sn(u.search||{}),g=VP(f.searchParams,h,{...d,encoding:na.None}),m=WP(g,d);return{...f,searchParams:g,search:m,paths:p$(f),fullPath:vm(f),host:Td(f),origin:b$(f),href:m$({...f,search:m})}}i(KP,"buildUrl");const GP=_e({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:zP,hash:"",fullPath:"/",href:"/"});({...GP.default});const HP=0;function v$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==HP)}i(v$,"shouldClickEventTriggerRouteChange");const Nd="locationchange",po=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const R1=po?.pushState;function L1(...e){if(!R1)return;const r=R1.apply(po,e);return globalThis.dispatchEvent(new Event(Nd)),r}i(L1,"newPushState");const j1=po?.replaceState;function _1(...e){if(!j1)return;const r=j1.apply(po,e);return globalThis.dispatchEvent(new Event(Nd)),r}i(_1,"newReplaceState");function ZP(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!po)){{if(po.pushState===L1)throw new B1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(po.replaceState===_1)throw new B1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,po.pushState=L1,po.replaceState=_1,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Nd))})}}i(ZP,"consolidateGlobalUrlEvents");function Mu(e,r){const t=Ls(e),n=Bi({value:Bi({value:t.pathname,prefix:Ct({value:r||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],s=Object.keys(t.searchParams).length?t.searchParams:void 0,a=t.hash?Bi({value:t.hash,prefix:"#"}):void 0;return{paths:o,search:s,hash:a}}i(Mu,"parseUrlIntoRawRoute");class JP{static{i(this,"SpaRouter")}innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(r){Ec(r,_P),this.params={...r};const t=this.readCurrentRoute();this.innerObservable=new J5({defaultValue:t,equalityCheck:i(()=>!1,"equalityCheck")}),ZP(),this.removeGlobalListener=vo(globalThis,Nd,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new jP("Looping route sanitization detected; aborting window URL change listener.");const n=Mu(globalThis.location.href,this.params.basePath),o=r.sanitizeRoute(n);F.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),r.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(r){return!r.paths||!this.params.basePath?!1:bm(...r.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Mu(globalThis.location.href,this.params.basePath))}sanitizeRoute(r){return this.params.sanitizeRoute(r)}createRouteUrl(r){const t={...Mu(globalThis.location.href,this.params.basePath),...r},n=this.sanitizeRoute(t),s=this.routeIncludesBasePath(Mu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return KP(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?Ct({value:s.hash,prefix:"#"}):""},{searchParamStrategy:oa.Clear}).href}setRoute(r,t={}){const n=this.createRouteUrl(r),{fullPath:o}=Ls(n);return this.params.isPaused||!t.force&&F.jsonEquals(Ls(globalThis.location.href).fullPath,o)?!1:t.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(r,t){return v$(t)?(t.preventDefault(),this.setRoute(r)):!1}listen(r,t){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new pm(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(r,t),()=>this.removeListener(t)}removeListener(r){return this.innerObservable.removeListener(r)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function YP(e){return new JP({basePath:e,sanitizeRoute(r){return{paths:XP(r.paths),hash:void 0,search:void 0}}})}i(YP,"createBookRouter");function XP(e){const r=e[0];if(F.isEnumValue(r,Ot)){if(r===Ot.Book)return[Ot.Book,...e.slice(1)];if(r===Ot.Search)return e[1]?[r,e[1]]:[Ot.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return qs.paths}i(XP,"sanitizePaths");const Mc=gm()("element-book-change-route"),y=eo({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function ne({name:e,svgTemplate:r}){return{name:e,svgTemplate:r}}i(ne,"defineIcon");const Pd=ne({name:"Check24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function U1(e){return F.isPrimitive(e)||e instanceof qo?String(e):e.default}i(U1,"noRefColorInitToString");function Gn(e,r,t,n){const o=`${t.prefix}-default-fg`,s=`${t.prefix}-default-bg`;if(F.isPrimitive(r)||r instanceof qo)return r;if("refDefaultBackground"in r)return`var(--${s}, ${U1(t.background)})`;if("refDefaultForeground"in r)return`var(--${o}, ${U1(t.foreground)})`;if("refBackground"in r||"refForeground"in r){const a=F.hasKey(r,"refBackground")?"refBackground":F.hasKey(r,"refForeground")?"refForeground":void 0,l=a&&F.hasKey(r,a)?r[a]:void 0,u=a==="refBackground"?"background":"foreground",d=l&&n[l];if(!d)throw new Error(`Color theme ${a} reference '${l}' does not exist. (Referenced from '${e}'.)`);const f=d[u]||(u==="foreground"?Gn(o,t.foreground,t,n):Gn(s,t.background,t,n));return`var(--${l}-${u==="foreground"?"fg":"bg"}, ${Gn(l,f,t,n)})`}else return r.value}i(Gn,"createColorCssVarDefault");const or="theme-default";function y$(e,r){try{if(or in r)throw new Error(`Cannot define theme color by name '${or}', it is used internally.`);const t=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,s=`${e.prefix}-default-inverse-bg`,a={[t]:Gn(t,e.foreground,e,r),[n]:Gn(n,e.background,e,r),[o]:Gn(o,e.background,e,r),[s]:Gn(s,e.foreground,e,r)},l=eo(a),u=In(r).reduce((p,[v,w])=>{const k=z1(v),D=w.foreground?Gn([v,"foreground"].join(" "),w.foreground,e,r):`var(${l[t].name}, ${l[t].default})`,A=w.background?Gn([v,"background"].join(" "),w.background,e,r):`var(${l[n].name}, ${l[n].default})`;return p[k.foreground]=D,p[k.background]=A,p[k.foregroundInverse]=`var(--${k.background}, ${A})`,p[k.backgroundInverse]=`var(--${k.foreground}, ${D})`,p},{}),d=eo(u),f={},h={};In(r).forEach(([p,v])=>{zr.isString(p);const w=z1(p),k=d[w.foreground],D=d[w.background],A=d[w.foregroundInverse],I=d[w.backgroundInverse];zr.isDefined(k),zr.isDefined(D),zr.isDefined(A),zr.isDefined(I),f[p]={foreground:k,background:D,init:v,name:p},h[p]={foreground:A,background:I,init:v,name:p}});const g={foreground:l[t],background:l[n],init:e,name:or},m={...g,foreground:l[o],background:l[s]};return{colors:{[or]:g,...f},inverse:{[or]:m,...h},init:{colors:r,default:e},prefix:e.prefix}}catch(t){throw globalThis.setTimeout(()=>O2.error(t)),t}}i(y$,"defineColorTheme");function z1(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}i(z1,"createCssVarNames");const c=eo({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-accent-5":"#daf2ff","vira-accent-10":"#bde8ff","vira-accent-20":"#98d8ff","vira-accent-30":"#77c6ff","vira-accent-40":"#4cb2ff","vira-accent-50":"#299cf9","vira-accent-60":"#0086e0","vira-accent-70":"#006ec7","vira-accent-80":"#0054aa","vira-accent-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-0":"#f3f6f6","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"});function Uf({originalTheme:e,layerKey:r,themeColor:t,override:n,overrideValues:o}){const s=n?.[r];s&&(o[String(t[r].name)]=String(Gn(r,s,e.init.default,e.init.colors)))}i(Uf,"applyCssVarOverride");function QP(e,r,{defaultOverride:t,colorOverrides:n}){const o={};t&&We(t).forEach(u=>{Uf({originalTheme:e,layerKey:u,override:t,themeColor:e.colors[or],overrideValues:o})});const s={};n&&In(n).forEach(([u,d])=>{const f=e.colors[u];if(!f)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);Uf({originalTheme:e,layerKey:"foreground",override:d,themeColor:f,overrideValues:s}),Uf({originalTheme:e,layerKey:"background",override:d,themeColor:f,overrideValues:s})});const a=cr(e.init.colors,(u,d)=>{const f=n?.[u];return{...d,...f}}),l=y$({...e.init.default,...t},a);return{name:r,overrides:{...o,...s},originalTheme:e,asTheme:l}}i(QP,"defineColorThemeOverride");const M=y$({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:c["vira-red-90"]},"vira-red-foreground-body":{foreground:c["vira-red-80"]},"vira-red-foreground-non-body":{foreground:c["vira-red-60"]},"vira-red-foreground-header":{foreground:c["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-30"]},"vira-red-foreground-decoration":{foreground:c["vira-red-20"]},"vira-red-foreground-invisible":{foreground:c["vira-red-10"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-90"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-80"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-60"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-red-40"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-red-30"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-red-20"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-red-5"]},"vira-red-behind-fg-small-body":{background:c["vira-red-5"]},"vira-red-behind-fg-body":{background:c["vira-red-20"]},"vira-red-behind-fg-non-body":{background:c["vira-red-30"]},"vira-red-behind-fg-header":{background:c["vira-red-50"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-fg-decoration":{background:c["vira-red-80"]},"vira-red-behind-fg-invisible":{background:c["vira-red-90"]},"vira-red-on-self-body":{foreground:c["vira-red-90"],background:c["vira-red-10"]},"vira-red-on-self-non-body":{foreground:c["vira-red-90"],background:c["vira-red-20"]},"vira-red-on-self-header":{foreground:c["vira-red-90"],background:c["vira-red-40"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-90"],background:c["vira-red-50"]},"vira-red-on-self-decoration":{foreground:c["vira-red-90"],background:c["vira-red-70"]},"vira-red-on-self-invisible":{foreground:c["vira-red-90"],background:c["vira-red-80"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-90"]},"vira-orange-foreground-body":{foreground:c["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-60"]},"vira-orange-foreground-header":{foreground:c["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-10"]},"vira-orange-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-90"]},"vira-orange-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-80"]},"vira-orange-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-60"]},"vira-orange-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-orange-40"]},"vira-orange-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-orange-30"]},"vira-orange-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-orange-20"]},"vira-orange-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-orange-5"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-fg-body":{background:c["vira-orange-20"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-fg-header":{background:c["vira-orange-50"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-90"]},"vira-orange-on-self-body":{foreground:c["vira-orange-90"],background:c["vira-orange-10"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-90"],background:c["vira-orange-20"]},"vira-orange-on-self-header":{foreground:c["vira-orange-90"],background:c["vira-orange-40"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-90"],background:c["vira-orange-50"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-90"],background:c["vira-orange-70"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-90"],background:c["vira-orange-80"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:c["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-5"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-90"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-70"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-60"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-40"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-30"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-20"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-5"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-10"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-20"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-90"],background:c["vira-yellow-40"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-90"],background:c["vira-yellow-50"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-90"],background:c["vira-yellow-70"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-90"],background:c["vira-yellow-80"]},"vira-green-foreground-small-body":{foreground:c["vira-green-90"]},"vira-green-foreground-body":{foreground:c["vira-green-80"]},"vira-green-foreground-non-body":{foreground:c["vira-green-60"]},"vira-green-foreground-header":{foreground:c["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-30"]},"vira-green-foreground-decoration":{foreground:c["vira-green-20"]},"vira-green-foreground-invisible":{foreground:c["vira-green-5"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-90"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-70"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-60"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-green-40"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-green-30"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-green-20"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-green-5"]},"vira-green-behind-fg-small-body":{background:c["vira-green-5"]},"vira-green-behind-fg-body":{background:c["vira-green-20"]},"vira-green-behind-fg-non-body":{background:c["vira-green-30"]},"vira-green-behind-fg-header":{background:c["vira-green-50"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-fg-decoration":{background:c["vira-green-80"]},"vira-green-behind-fg-invisible":{background:c["vira-green-90"]},"vira-green-on-self-body":{foreground:c["vira-green-90"],background:c["vira-green-10"]},"vira-green-on-self-non-body":{foreground:c["vira-green-90"],background:c["vira-green-20"]},"vira-green-on-self-header":{foreground:c["vira-green-90"],background:c["vira-green-40"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-90"],background:c["vira-green-50"]},"vira-green-on-self-decoration":{foreground:c["vira-green-90"],background:c["vira-green-70"]},"vira-green-on-self-invisible":{foreground:c["vira-green-90"],background:c["vira-green-80"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-90"]},"vira-teal-foreground-body":{foreground:c["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-60"]},"vira-teal-foreground-header":{foreground:c["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-5"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-90"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-80"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-60"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-teal-40"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-teal-30"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-teal-20"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-teal-5"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-fg-body":{background:c["vira-teal-20"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-fg-header":{background:c["vira-teal-50"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-90"]},"vira-teal-on-self-body":{foreground:c["vira-teal-90"],background:c["vira-teal-10"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-90"],background:c["vira-teal-20"]},"vira-teal-on-self-header":{foreground:c["vira-teal-90"],background:c["vira-teal-40"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-90"],background:c["vira-teal-50"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-90"],background:c["vira-teal-70"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-90"],background:c["vira-teal-80"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-90"]},"vira-blue-foreground-body":{foreground:c["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-70"]},"vira-blue-foreground-header":{foreground:c["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-10"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-90"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-80"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-60"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-blue-40"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-blue-30"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-blue-20"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-blue-5"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-fg-body":{background:c["vira-blue-20"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-fg-header":{background:c["vira-blue-50"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-90"]},"vira-blue-on-self-body":{foreground:c["vira-blue-90"],background:c["vira-blue-10"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-90"],background:c["vira-blue-20"]},"vira-blue-on-self-header":{foreground:c["vira-blue-90"],background:c["vira-blue-40"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-90"],background:c["vira-blue-50"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-90"],background:c["vira-blue-70"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-90"],background:c["vira-blue-80"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-90"]},"vira-accent-foreground-body":{foreground:c["vira-accent-80"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-70"]},"vira-accent-foreground-header":{foreground:c["vira-accent-50"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-30"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-20"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-10"]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-90"]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-80"]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-60"]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-accent-40"]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-accent-30"]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-accent-20"]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-accent-5"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-5"]},"vira-accent-behind-fg-body":{background:c["vira-accent-20"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-30"]},"vira-accent-behind-fg-header":{background:c["vira-accent-50"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-60"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-80"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-90"]},"vira-accent-on-self-body":{foreground:c["vira-accent-90"],background:c["vira-accent-10"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-90"],background:c["vira-accent-20"]},"vira-accent-on-self-header":{foreground:c["vira-accent-90"],background:c["vira-accent-40"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-90"],background:c["vira-accent-50"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-90"],background:c["vira-accent-70"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-90"],background:c["vira-accent-80"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-90"]},"vira-purple-foreground-body":{foreground:c["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-60"]},"vira-purple-foreground-header":{foreground:c["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-5"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-90"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-80"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-60"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-purple-40"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-purple-30"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-purple-20"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-purple-5"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-fg-body":{background:c["vira-purple-20"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-fg-header":{background:c["vira-purple-50"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-90"]},"vira-purple-on-self-body":{foreground:c["vira-purple-90"],background:c["vira-purple-10"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-90"],background:c["vira-purple-20"]},"vira-purple-on-self-header":{foreground:c["vira-purple-90"],background:c["vira-purple-40"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-90"],background:c["vira-purple-50"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-90"],background:c["vira-purple-70"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-90"],background:c["vira-purple-80"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-90"]},"vira-pink-foreground-body":{foreground:c["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-60"]},"vira-pink-foreground-header":{foreground:c["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-10"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-90"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-80"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-60"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-pink-40"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-pink-30"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-pink-20"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-pink-5"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-fg-body":{background:c["vira-pink-20"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-fg-header":{background:c["vira-pink-50"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-90"]},"vira-pink-on-self-body":{foreground:c["vira-pink-90"],background:c["vira-pink-10"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-90"],background:c["vira-pink-20"]},"vira-pink-on-self-header":{foreground:c["vira-pink-90"],background:c["vira-pink-40"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-90"],background:c["vira-pink-50"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-90"],background:c["vira-pink-70"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-90"],background:c["vira-pink-80"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-90"]},"vira-grey-foreground-body":{foreground:c["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-60"]},"vira-grey-foreground-header":{foreground:c["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-5"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-90"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-80"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-60"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-grey-40"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-grey-30"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-grey-20"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-grey-5"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-fg-body":{background:c["vira-grey-20"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-fg-header":{background:c["vira-grey-50"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-90"]},"vira-grey-on-self-body":{foreground:c["vira-grey-90"],background:c["vira-grey-10"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-90"],background:c["vira-grey-20"]},"vira-grey-on-self-header":{foreground:c["vira-grey-90"],background:c["vira-grey-40"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-90"],background:c["vira-grey-50"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-90"],background:c["vira-grey-70"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-90"],background:c["vira-grey-80"]}}),eI=QP(M,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:c["vira-red-5"]},"vira-red-foreground-body":{foreground:c["vira-red-20"]},"vira-red-foreground-non-body":{foreground:c["vira-red-30"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-60"]},"vira-red-foreground-decoration":{foreground:c["vira-red-80"]},"vira-red-foreground-invisible":{foreground:c["vira-red-90"]},"vira-red-behind-bg-small-body":{background:c["vira-red-5"]},"vira-red-behind-bg-body":{background:c["vira-red-20"]},"vira-red-behind-bg-non-body":{background:c["vira-red-30"]},"vira-red-behind-bg-header":{background:c["vira-red-50"]},"vira-red-behind-bg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-bg-decoration":{background:c["vira-red-80"]},"vira-red-behind-bg-invisible":{background:c["vira-red-90"]},"vira-red-behind-fg-small-body":{background:c["vira-red-90"]},"vira-red-behind-fg-body":{background:c["vira-red-80"]},"vira-red-behind-fg-non-body":{background:c["vira-red-60"]},"vira-red-behind-fg-header":{background:c["vira-red-40"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-30"]},"vira-red-behind-fg-decoration":{background:c["vira-red-20"]},"vira-red-behind-fg-invisible":{background:c["vira-red-5"]},"vira-red-on-self-body":{foreground:c["vira-red-5"],background:c["vira-red-90"]},"vira-red-on-self-non-body":{foreground:c["vira-red-5"],background:c["vira-red-70"]},"vira-red-on-self-header":{foreground:c["vira-red-5"],background:c["vira-red-60"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-5"],background:c["vira-red-40"]},"vira-red-on-self-decoration":{foreground:c["vira-red-5"],background:c["vira-red-30"]},"vira-red-on-self-invisible":{foreground:c["vira-red-5"],background:c["vira-red-10"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-5"]},"vira-orange-foreground-body":{foreground:c["vira-orange-20"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-30"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-60"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-80"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-90"]},"vira-orange-behind-bg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-bg-body":{background:c["vira-orange-20"]},"vira-orange-behind-bg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-bg-header":{background:c["vira-orange-50"]},"vira-orange-behind-bg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-bg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-bg-invisible":{background:c["vira-orange-90"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-90"]},"vira-orange-behind-fg-body":{background:c["vira-orange-80"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-60"]},"vira-orange-behind-fg-header":{background:c["vira-orange-40"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-30"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-20"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-5"]},"vira-orange-on-self-body":{foreground:c["vira-orange-5"],background:c["vira-orange-90"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-5"],background:c["vira-orange-70"]},"vira-orange-on-self-header":{foreground:c["vira-orange-5"],background:c["vira-orange-60"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-5"],background:c["vira-orange-40"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-5"],background:c["vira-orange-30"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-5"],background:c["vira-orange-10"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-5"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-30"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-90"]},"vira-yellow-behind-bg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-bg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-bg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-bg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-bg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-bg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-bg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-70"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-40"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-90"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-70"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-5"],background:c["vira-yellow-60"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-5"],background:c["vira-yellow-40"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-5"],background:c["vira-yellow-30"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-5"],background:c["vira-yellow-10"]},"vira-green-foreground-small-body":{foreground:c["vira-green-5"]},"vira-green-foreground-body":{foreground:c["vira-green-20"]},"vira-green-foreground-non-body":{foreground:c["vira-green-30"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-60"]},"vira-green-foreground-decoration":{foreground:c["vira-green-80"]},"vira-green-foreground-invisible":{foreground:c["vira-green-90"]},"vira-green-behind-bg-small-body":{background:c["vira-green-5"]},"vira-green-behind-bg-body":{background:c["vira-green-20"]},"vira-green-behind-bg-non-body":{background:c["vira-green-30"]},"vira-green-behind-bg-header":{background:c["vira-green-50"]},"vira-green-behind-bg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-bg-decoration":{background:c["vira-green-80"]},"vira-green-behind-bg-invisible":{background:c["vira-green-90"]},"vira-green-behind-fg-small-body":{background:c["vira-green-90"]},"vira-green-behind-fg-body":{background:c["vira-green-70"]},"vira-green-behind-fg-non-body":{background:c["vira-green-60"]},"vira-green-behind-fg-header":{background:c["vira-green-40"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-30"]},"vira-green-behind-fg-decoration":{background:c["vira-green-20"]},"vira-green-behind-fg-invisible":{background:c["vira-green-5"]},"vira-green-on-self-body":{foreground:c["vira-green-5"],background:c["vira-green-90"]},"vira-green-on-self-non-body":{foreground:c["vira-green-5"],background:c["vira-green-70"]},"vira-green-on-self-header":{foreground:c["vira-green-5"],background:c["vira-green-60"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-5"],background:c["vira-green-40"]},"vira-green-on-self-decoration":{foreground:c["vira-green-5"],background:c["vira-green-30"]},"vira-green-on-self-invisible":{foreground:c["vira-green-5"],background:c["vira-green-10"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-5"]},"vira-teal-foreground-body":{foreground:c["vira-teal-20"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-30"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-60"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-80"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-90"]},"vira-teal-behind-bg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-bg-body":{background:c["vira-teal-20"]},"vira-teal-behind-bg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-bg-header":{background:c["vira-teal-50"]},"vira-teal-behind-bg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-bg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-bg-invisible":{background:c["vira-teal-90"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-90"]},"vira-teal-behind-fg-body":{background:c["vira-teal-80"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-60"]},"vira-teal-behind-fg-header":{background:c["vira-teal-40"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-30"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-20"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-5"]},"vira-teal-on-self-body":{foreground:c["vira-teal-5"],background:c["vira-teal-90"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-5"],background:c["vira-teal-70"]},"vira-teal-on-self-header":{foreground:c["vira-teal-5"],background:c["vira-teal-60"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-5"],background:c["vira-teal-40"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-5"],background:c["vira-teal-30"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-5"],background:c["vira-teal-10"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-5"]},"vira-blue-foreground-body":{foreground:c["vira-blue-20"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-30"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-60"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-80"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-90"]},"vira-blue-behind-bg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-bg-body":{background:c["vira-blue-20"]},"vira-blue-behind-bg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-bg-header":{background:c["vira-blue-50"]},"vira-blue-behind-bg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-bg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-bg-invisible":{background:c["vira-blue-90"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-90"]},"vira-blue-behind-fg-body":{background:c["vira-blue-80"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-60"]},"vira-blue-behind-fg-header":{background:c["vira-blue-40"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-30"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-20"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-5"]},"vira-blue-on-self-body":{foreground:c["vira-blue-5"],background:c["vira-blue-90"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-5"],background:c["vira-blue-70"]},"vira-blue-on-self-header":{foreground:c["vira-blue-5"],background:c["vira-blue-60"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-5"],background:c["vira-blue-40"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-5"],background:c["vira-blue-30"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-5"],background:c["vira-blue-10"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-5"]},"vira-accent-foreground-body":{foreground:c["vira-accent-20"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-30"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-60"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-80"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-90"]},"vira-accent-behind-bg-small-body":{background:c["vira-accent-5"]},"vira-accent-behind-bg-body":{background:c["vira-accent-20"]},"vira-accent-behind-bg-non-body":{background:c["vira-accent-30"]},"vira-accent-behind-bg-header":{background:c["vira-accent-50"]},"vira-accent-behind-bg-placeholder":{background:c["vira-accent-60"]},"vira-accent-behind-bg-decoration":{background:c["vira-accent-80"]},"vira-accent-behind-bg-invisible":{background:c["vira-accent-90"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-90"]},"vira-accent-behind-fg-body":{background:c["vira-accent-80"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-60"]},"vira-accent-behind-fg-header":{background:c["vira-accent-40"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-30"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-20"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-5"]},"vira-accent-on-self-body":{foreground:c["vira-accent-5"],background:c["vira-accent-90"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-5"],background:c["vira-accent-70"]},"vira-accent-on-self-header":{foreground:c["vira-accent-5"],background:c["vira-accent-60"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-5"],background:c["vira-accent-40"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-5"],background:c["vira-accent-30"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-5"],background:c["vira-accent-10"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-5"]},"vira-purple-foreground-body":{foreground:c["vira-purple-20"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-30"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-60"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-80"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-90"]},"vira-purple-behind-bg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-bg-body":{background:c["vira-purple-20"]},"vira-purple-behind-bg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-bg-header":{background:c["vira-purple-50"]},"vira-purple-behind-bg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-bg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-bg-invisible":{background:c["vira-purple-90"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-90"]},"vira-purple-behind-fg-body":{background:c["vira-purple-80"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-60"]},"vira-purple-behind-fg-header":{background:c["vira-purple-40"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-30"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-20"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-5"]},"vira-purple-on-self-body":{foreground:c["vira-purple-5"],background:c["vira-purple-90"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-5"],background:c["vira-purple-70"]},"vira-purple-on-self-header":{foreground:c["vira-purple-5"],background:c["vira-purple-60"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-5"],background:c["vira-purple-40"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-5"],background:c["vira-purple-30"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-5"],background:c["vira-purple-10"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-5"]},"vira-pink-foreground-body":{foreground:c["vira-pink-20"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-30"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-60"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-80"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-90"]},"vira-pink-behind-bg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-bg-body":{background:c["vira-pink-20"]},"vira-pink-behind-bg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-bg-header":{background:c["vira-pink-50"]},"vira-pink-behind-bg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-bg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-bg-invisible":{background:c["vira-pink-90"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-90"]},"vira-pink-behind-fg-body":{background:c["vira-pink-80"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-60"]},"vira-pink-behind-fg-header":{background:c["vira-pink-40"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-30"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-20"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-5"]},"vira-pink-on-self-body":{foreground:c["vira-pink-5"],background:c["vira-pink-90"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-5"],background:c["vira-pink-70"]},"vira-pink-on-self-header":{foreground:c["vira-pink-5"],background:c["vira-pink-60"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-5"],background:c["vira-pink-40"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-5"],background:c["vira-pink-30"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-5"],background:c["vira-pink-10"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-5"]},"vira-grey-foreground-body":{foreground:c["vira-grey-20"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-30"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-60"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-80"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-90"]},"vira-grey-behind-bg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-bg-body":{background:c["vira-grey-20"]},"vira-grey-behind-bg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-bg-header":{background:c["vira-grey-50"]},"vira-grey-behind-bg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-bg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-bg-invisible":{background:c["vira-grey-90"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-90"]},"vira-grey-behind-fg-body":{background:c["vira-grey-80"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-60"]},"vira-grey-behind-fg-header":{background:c["vira-grey-40"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-30"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-20"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-5"]},"vira-grey-on-self-body":{foreground:c["vira-grey-5"],background:c["vira-grey-90"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-5"],background:c["vira-grey-70"]},"vira-grey-on-self-header":{foreground:c["vira-grey-5"],background:c["vira-grey-60"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-5"],background:c["vira-grey-40"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-5"],background:c["vira-grey-30"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-5"],background:c["vira-grey-10"]}}}),V1="8px",R=eo({"vira-form-border-color":M.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":M.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":M.colors[or].background.value,"vira-form-foreground-color":M.colors[or].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":M.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":M.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":M.colors["vira-accent-behind-bg-invisible"].background.value,"vira-form-selection-active-color":M.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-error-color":M.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":M.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":M.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":M.colors["vira-orange-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":M.colors["vira-orange-behind-bg-header"].background.value,"vira-form-warning-active-color":M.colors["vira-orange-behind-bg-body"].background.value,"vira-form-positive-color":M.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":M.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":M.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":M.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":V1,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":M.colors["vira-accent-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":E`calc(var(--vira-form-radius, ${Me(V1)}) + 2px)`,"vira-form-plain-color":c["vira-grey-0"].value,"vira-form-plain-hover-color":M.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":M.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":M.colors["vira-accent-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":M.colors["vira-accent-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":M.colors["vira-accent-behind-bg-body"].background.value,"vira-form-danger-color":M.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":M.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":M.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":M.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":M.colors["vira-grey-foreground-decoration"].foreground.value}),Al=E`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Da=eo({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function $s(e){return F.isString(e)?Me(e):e.value}i($s,"cssValueOrRaw");function tu({elementBorderSize:e,outlineGap:r="2px",outlineWidth:t="2px",noNesting:n,outlineColor:o=R["vira-form-focus-outline-color"],borderRadius:s=R["vira-form-focus-outline-border-radius"]}){const a=E`calc(${$s(t)} + ${$s(r)} + ${$s(e)})`,l=E`
        content: '';
        top: calc(${a} * -1);
        left: calc(${a} * -1);
        position: absolute;
        width: calc(100% + calc(${a} * 2));
        height: calc(100% + calc(${a} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${$s(t)} solid ${$s(o)};
        border-radius: ${$s(s)};
        z-index: 100;
    `;return n?l:E`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${l}
        }
    `}i(tu,"createFocusStyles");const ym=eo({"vira-monospace":"monospace"});function q1(e){if(typeof e=="string")return rI(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let r=[0,0,0,0,!1,"unknown"];return r[0]=e.r?e.r:e.red?e.red:!1,r[1]=e.g?e.g:e.green?e.green:!1,r[2]=e.b?e.b:e.blue?e.blue:!1,r[3]=e.a?e.a:e.alpha?e.alpha:1,r[4]=!!(r[0]&&r[1]&&r[2]),r[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",r}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}i(q1,"colorParsley");function rI(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let r=!1,n=[0,0,0,0,r,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let a={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let l in a)if(e==l){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:i(function(f){for(let h=0;h<3;h++)n[h]=parseInt(f[h+1],16);return n[3]=1,!0},"sprig")},d=u.rex.exec(a[l]);return n[4]=r=u.sprig(d),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:i(function(a){let l=0,u=0,d=10,f=100,h=2.55,g="1";a[23]&&(g=a[23],delete a[23]),n[3]=g.match(/%/g)?parseFloat(g)/f:parseFloat(g);for(let m=1;m<a.length;m++)a[m]&&(l=l||m,u=m);switch(u){case 4:d=16,f=15,n[3]=parseInt(a[u],d)/f;case 3:d=16;for(let m=0;m<3;m++)n[m]=parseInt(a[l+m]+a[l+m],d);break;case 5:d=16;case 9:n[0]=n[1]=n[2]=d==10?parseFloat(a[u]):parseInt(a[u],d);break;case 12:n[0]=n[1]=n[2]=parseFloat(a[u])*h;break;case 8:d=16,f=255,n[3]=parseInt(a[8],d)/f;case 7:d=16;case 11:for(let m=0;m<3;m++)n[m]=d==10?parseFloat(a[l+m]):parseInt(a[l+m],d);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(a[l+m])*h;break;case 18:n[5]=a[15];for(let m=0;m<3;m++)l++,n[m]=a[l].match(/%/g)?parseFloat(a[l])*2.55:parseFloat(a[l])*255;break;case 22:n[5]=a[l];for(let m=0;m<3;m++)l++,n[m]=a[l]?a[l].match(/%/g)?parseFloat(a[l])/f:parseFloat(a[l]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let A=function(I){let L=(I+D/30)%12,Y=m*Math.min(p,1-p);return p-Y*Math.max(-1,Math.min(L-3,9-L,1))};i(A,"f");let m,p,v,w,k,D=n[0]%360;if(D<0&&(D+=360),n[5].match(/^hsla?/i))m=n[1],p=n[2],v=0,k=1;else if(n[5].match(/^hwba?/i)){if(v=n[1],w=n[2],v+w>=1){n[0]=n[1]=n[2]=v/(v+w),n[5]="sRGB";break}m=1,p=.5,k=1-v-w}n[0]=Math.round(255*(A(0)*k+v)),n[1]=Math.round(255*(A(8)*k+v)),n[2]=Math.round(255*(A(4)*k+v)),n[5]="sRGB"}break}return!0},"parsley")},s=o.rex.exec(e);return s?(n[4]=r=o.parsley(s),n):(r=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,r,"parsleyError"])}i(rI,"parseString");const Er={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function tI(e,r,t=-1){const n=[0,1.1];if(isNaN(e)||isNaN(r)||Math.min(e,r)<n[0]||Math.max(e,r)>n[1])return 0;let o=0,s=0,a="BoW";return e=e>Er.blkThrs?e:e+Math.pow(Er.blkThrs-e,Er.blkClmp),r=r>Er.blkThrs?r:r+Math.pow(Er.blkThrs-r,Er.blkClmp),Math.abs(r-e)<Er.deltaYmin?0:(r>e?(o=(Math.pow(r,Er.normBG)-Math.pow(e,Er.normTXT))*Er.scaleBoW,s=o<Er.loClip?0:o-Er.loBoWoffset):(a="WoB",o=(Math.pow(r,Er.revBG)-Math.pow(e,Er.revTXT))*Er.scaleWoB,s=o>-.1?0:o+Er.loWoBoffset),t<0?s*100:t==0?Math.round(Math.abs(s)*100)+"<sub>"+a+"</sub>":Number.isInteger(t)?(s*100).toFixed(t):0)}i(tI,"APCAcontrast");function nI(e,r,t=-1,n=!0){let o=q1(r),s=q1(e);return!(s[3]==""||s[3]==1)&&(s=iI(s,o,n)),tI(W1(s),W1(o),t)}i(nI,"calcAPCA");function oI(e,r=2){const t=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],s=[0,100,200,300,400,500,600,700,800,900].length;let a=[e.toFixed(r),0,0,0,0,0,0,0,0,0];a.length;let l=777;e=Math.abs(e);const u=.2,d=e==0?1:e*u|0;let f=0,h=(e-t[d][f])*u;for(f++;f<s;f++)l=t[d][f],l>400?a[f]=l:e<14.5?a[f]=999:e<29.5?a[f]=777:l>24?a[f]=Math.round(l-n[d][f]*h):a[f]=l-(2*n[d][f]*h|0)*.5;return a}i(oI,"fontLookupAPCA");function W1(e=[0,0,0]){function r(t){return Math.pow(t/255,Er.mainTRC)}return i(r,"simpleExp"),Er.sRco*r(e[0])+Er.sGco*r(e[1])+Er.sBco*r(e[2])}i(W1,"sRGBtoY");function iI(e=[0,0,0,1],r=[0,0,0],t=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let s=0;s<3;s++)o[s]=r[s]*n+e[s]*e[3],t&&(o[s]=Math.min(Math.round(o[s]),255));return o}i(iI,"alphaBlend");const w$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};cr(w$,e=>e);Object.fromEntries(Object.entries(w$).map(([e,r])=>[r,e]));const K1=new Map;function sI({background:e,foreground:r}){const t=`${r}|${e}`,n=K1.get(t);if(n)return n;const o=B2(Number(nI(r,e)),{digits:1}),s={contrast:o,fontSizes:aI(o),contrastLevel:lI(o)};return K1.set(t,s),s}i(sI,"calculateContrast");function aI(e){const r=oI(e).slice(1);return Qo(r,(n,o)=>({key:(o+1)*100,value:n}))}i(aI,"calculateFontSizes");function lI(e){return wr.isDefined(Id.find(r=>r.min<=Math.abs(e)))}i(lI,"determineContrastLevel");var fe;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(fe||(fe={}));const uI={[fe.SmallBodyText]:"Small Text",[fe.BodyText]:"Body Text",[fe.NonBodyText]:"Non-body Text",[fe.Header]:"Header",[fe.Placeholder]:"Placeholder",[fe.Decoration]:"Decoration",[fe.Invisible]:"Invisible"};fe.SmallBodyText,fe.BodyText,fe.NonBodyText,fe.Header,fe.Placeholder,fe.Decoration,fe.Invisible;const Id=[{min:90,name:fe.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:fe.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:fe.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:fe.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:fe.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:fe.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:fe.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Qo(Id,e=>({key:e.min,value:e}));Qo(Id,e=>({key:e.name,value:e}));const cI=Kt(fe).sort((e,r)=>Number(r.includes("-"))-Number(e.includes("-"))),dI=Uc(wn(Object.keys(M.colors),e=>e.split("-")[1],e=>e!=="default")).filter(F.isTruthy),Cs=Qo(dI,e=>({key:e,value:e}),{}),fI=We(M.colors),gt=T2(Cs,e=>{const r=Uc(wn(fI,t=>cI.reduce((n,o)=>Hh({value:n,suffix:`-${o}`}),Bi({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`)));return Qo(r,t=>({key:t,value:Qo(Kt(fe),n=>{const o=`vira-${e}-${t}-${n}`;if(F.hasKey(M.colors,o))return{key:n,value:M.colors[o]}})}))});var ze=(e=>(e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none",e))(ze||{});const G1={accent:Cs.blue,neutral:Cs.grey,danger:Cs.red,warning:Cs.orange,positive:Cs.green},Sl=["accent","plain","neutral","danger","warning","positive"];var Hn=(e=>(e.Large="large",e.Medium="medium",e.Small="small",e.None="none",e))(Hn||{});const wm=["small","medium","large"];var Xe=(e=>(e.Standard="standard",e.Subtle="subtle",e.None="none",e))(Xe||{});const $m=["standard","subtle"],Zu={large:40,medium:32,small:24},nu=E`
    padding: 0;
    margin: 0;
`,Tr=E`
    ${nu};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,zf=eo({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Li={menuShadow:E`
        filter: drop-shadow(0px 5px 5px ${zf["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:E`
        filter: drop-shadow(0px -5px 5px ${zf["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:E`
        box-shadow: 0 5px 15px ${zf["modal-shadow-color"].value};
    `},oi=E`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,H1="vira-",sr=a$({assertInputs:i(e=>{if(!e.tagName.startsWith(H1))throw new Error(`Tag name should start with '${H1}' but got '${e.tagName}'`)},"assertInputs")}),B=sr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":i(({inputs:e})=>!!e.fitContainer,"vira-icon-fit-container")},styles:i(({hostClasses:e})=>E`
        :host {
            display: inline-flex;
            justify-content: center;
            align-items: center;
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
    `,"styles"),render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Jo=sr()({tagName:"vira-menu-item",state(){return{cleanup:void 0}},hostClasses:{"vira-menu-item-selected":i(({inputs:e})=>!!e.selected||!!e.iconOverride,"vira-menu-item-selected"),"vira-menu-item-disabled":i(({inputs:e})=>!!e.disabled,"vira-menu-item-disabled"),"vira-menu-item-enabled":i(({inputs:e})=>!e.disabled,"vira-menu-item-enabled"),"vira-menu-item-default-icon":i(({inputs:e})=>!e.iconOverride,"vira-menu-item-default-icon"),"vira-menu-item-default-styles":i(({inputs:e})=>!e.disablePointerStyles,"vira-menu-item-default-styles")},styles:i(({hostClasses:e})=>E`
        :host {
            display: flex;
            ${oi};
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
            & ${B} {
                opacity: 0.3;
                pointer-events: none;
            }
        }

        ${e["vira-menu-item-enabled"].selector}${e["vira-menu-item-default-styles"].selector} {
            cursor: pointer;

            &:host(:focus) {
                background-color: ${R["vira-form-selection-hover-color"].value};
                outline: none;
            }

            &:host(:active) {
                background-color: ${R["vira-form-selection-active-color"].value};
                outline: none;
            }
        }

        ${B} {
            width: 24px;
            aspect-ratio: 1;
            align-items: center;
            justify-content: center;
        }

        ${e["vira-menu-item-default-icon"].selector} {
            ${B} {
                visibility: hidden;
            }
        }

        ${e["vira-menu-item-selected"].selector} ${B} {
            visibility: visible;
        }

        .slot-wrapper {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
        }
    `,"styles"),init({state:e,updateState:r,host:t,inputs:n}){t.setAttribute("role","menuitem"),t.setAttribute("tabindex",n.disabled?"-1":"0"),t.setAttribute("aria-selected",String(!!n.selected)),t.setAttribute("aria-disabled",String(!!n.disabled)),e.cleanup?.();const o={};function s(l){if(o[l.type])return;if(n.disabled){l.preventDefault(),l.stopPropagation();return}wr.instanceOf(t.shadowRoot.querySelector("slot"),HTMLSlotElement).assignedElements({flatten:!0}).forEach(d=>{d instanceof HTMLElement&&!l.composedPath().includes(d)&&(l.preventDefault(),l.stopPropagation(),o[l.type]=!0,d.dispatchEvent(new MouseEvent(l.type,l)),delete o[l.type])})}i(s,"propagateMouseEvent");const a=[vo(t,"click",s),vo(t,"mousedown",s),vo(t,"mouseenter",()=>{n.disabled||t.focus()}),vo(t,"mouseleave",()=>{n.disabled||t.blur()})];r({cleanup:i(()=>{a.forEach(l=>l())},"cleanup")})},cleanup({state:e,updateState:r}){e.cleanup?.(),r({cleanup:void 0})},render({inputs:e}){return b`
            <${B.assign({icon:e.iconOverride||Pd})}></${B}>
            <div class="slot-wrapper">
                <slot>&nbsp;</slot>
            </div>
        `}});var $$=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))($$||{}),Ml=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Ml||{});const ji=sr()({tagName:"vira-menu",hostClasses:{"vira-menu-open-upwards":i(({inputs:e})=>e.direction==="upwards","vira-menu-open-upwards"),"vira-menu-rounded":i(({inputs:e})=>e.cornerStyle==="all-rounded","vira-menu-rounded"),"vira-menu-square":i(({inputs:e})=>e.cornerStyle==="all-square","vira-menu-square")},styles:i(({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            overscroll-behavior: contain;
            border-radius: ${R["vira-form-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${R["vira-form-background-color"].value};
            border: 1px solid ${R["vira-form-border-color"].value};
            color: ${R["vira-form-foreground-color"].value};
            ${Li.menuShadow}
        }

        ${e["vira-menu-open-upwards"].selector} {
            ${Li.menuShadowReversed}
            border-radius: ${R["vira-form-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-menu-rounded"].selector} {
            border-radius: ${R["vira-form-radius"].value};
        }
    `,"styles"),render(){return b`
            <slot>&nbsp;</slot>
        `}});function hI(e,r){return e>r}i(hI,"greaterThan");function gI(e,r){return e<r}i(gI,"lessThan");function Fl(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}i(Fl,"focusElement");var Yn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Yn||(Yn={}));var Re;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Re||(Re={}));function Od(e){const r={x:-1,y:-1};let t;for(;r.y<e.length-1&&!t;){r.y++;const n=e[r.y];for(;n&&r.x<n.length-1&&!t;){r.x++;const o=n[r.x];if(o)if(o.navEntry.navParams.group){const s=Od(o.children);s&&(t=s.node)}else o.navEntry.navParams.disabled||(t=o)}}if(t)return{node:t,coords:r}}i(Od,"findDefaultChild");function Z1(e,r,t,n){if(!r){const u=Od(e.children);return u?(Fl(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:t,navAction:Re.Navigate}):{success:!1,reason:"no default element to focus",direction:t,navAction:Re.Navigate}}const{nextNode:o,requiresWrapping:s,coords:a}=k$(r.position,t),l=n?!0:!s;return o&&l?(Fl(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:s,direction:t,navAction:Re.Navigate,coords:a}):o?l?{success:!1,reason:"no conditions matched",direction:t,navAction:Re.Navigate}:{success:!1,reason:"wrapping blocked",direction:t,navAction:Re.Navigate}:{success:!1,reason:"failed to find node to focus",direction:t,navAction:Re.Navigate}}i(Z1,"navigate");function k$(e,r){let t=!1,n,o=1;const s=Date.now();for(;!t||!n;)if(n=mI(e,r,o),t=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-s>1e3)return O2.warning("Failed to find next non-disabled node."),n;return n}i(k$,"calculateNextNode");function mI(e,r,t){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;zr.isDefined(n,"missing parent");const o=wr.isDefined(n.children[e.nodeCoords.y]),s=n.children.length>1&&(r===Yn.Down||r===Yn.Up),a=r===Yn.Down||r===Yn.Right?t:-1*t,l=a<0?hI:gI,u=s?Yp(e.nodeCoords.y+a,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,d=wr.isDefined(n.children[u]),f=s?e.nodeCoords.x>=d.length?d.length-1:e.nodeCoords.x:Yp(e.nodeCoords.x+a,{min:0,max:o.length-1,takeOverflow:!0}),h=n.children[u]?.[f],g=s?l(u,e.nodeCoords.y):l(f,e.nodeCoords.x);return{nextNode:h,requiresWrapping:g,coords:{x:f,y:u}}}i(mI,"innerCalculateNextNode");function pI(e,r,t){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:r,navAction:Re.Pibling};const{nextNode:o,requiresWrapping:s,coords:a}=k$(n,r),l=o?.navEntry.navParams.group?Od(o.children):{node:o,coords:a},u=t?!0:!s;return!l||!l.node?{success:!1,reason:"no node to navigate to",direction:r,navAction:Re.Pibling}:u?(Fl(l.node.element),{success:!0,defaulted:!1,newElement:l.node.element,wrapped:s,coords:l.coords,direction:r,navAction:Re.Pibling}):{success:!1,reason:"wrapping blocked",direction:r,navAction:Re.Pibling}}i(pI,"navigatePibling");var co;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(co||(co={}));const Vf={name:"data-nav"},x$="navEntry";function bI(e){return x$ in e}i(bI,"hasNavEntry");function vI(e){if(bI(e)){const r=e[x$];return wr.instanceOf(r,wI,"Invalid nav entry")}else return}i(vI,"extractNavEntry");function yI(e){return r=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(r.type==="mousedown"&&!e.navController.options.activateOnMouseUp||r.type==="mouseup"&&e.navController.options.activateOnMouseUp?r.target===e.element&&e.activate(!0):r.type==="mouseup"||r.type==="focus"?r.target===e.element&&e.focus(!0):r.type==="mousemove"?r.target===e.element&&e.navValue!==co.Active&&e.focus(!0):(r.type==="blur"||r.type==="mouseleave")&&r.target===e.element&&(e.activate(!1),e.focus(!1)))}}i(yI,"createEventListener");class wI{static{i(this,"NavEntry")}element;navParams;navTreeNode;navValue;eventListener=yI(this);constructor(r,t,n){this.element=r,this.navParams=n,this.attachListeners(),this.navController=t}set navController(r){this._navController!==r&&(this._navController?.removeNavEntry(this),this._navController=r,r.addNavEntry(this))}get navController(){return zr.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Vf.name,""),jf(this.element)&&this.element.blur())}focus(r,t){const n=this.navValue,o=r===(n===co.Focused);if(!(this.navParams.group||this.navController.locked||o||!r&&this.navController.options.alwaysRequireFocused))return r?(this.setNavValue(co.Focused),jf(this.element)||this.element.focus()):(this.removeNavValue(co.Focused),jf(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:r,previousNavValue:n}),this.navController.triggerNavEntry(this,r,Re.Focus)}activate(r){const t=this.navValue,n=r===(t===co.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(r,!0),r?this.setNavValue(co.Active):this.setNavValue(co.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:r,previousNavValue:t}),this.navController.triggerNavEntry(this,r,Re.Activate)}setNavValue(r){this.navValue=r,this.element.setAttribute(Vf.name,r)}removeNavValue(r){this.navValue===r&&(this.navValue=void 0,this.element.setAttribute(Vf.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function $I(e,r){Object.entries(r).forEach(([t,n])=>{F.isBoolean(n)&&n?e.setAttribute(t,""):F.isBoolean(n)||n==null?e.removeAttribute(t):e.setAttribute(t,String(n))})}i($I,"applyAttributes");function kI(e,r){if(!r)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Re.Enter};if(!r.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Re.Enter};const t=r.position.node.children[0]?.[0];return t?(Fl(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Re.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Re.Enter}}i(kI,"enterInto");function xI(e,r){return D$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,r)}i(xI,"walkNavTree");function D$(e,r,t){for(let n=0;n<r.length;n++){const o=r[n];for(let s=0;s<o.length;s++){const a=o[s],l={ancestorChain:e,nodeCoords:{x:s,y:n},node:a};if(t(l))return l;const u=D$(e.concat(l),a.children,t);if(u)return u}}}i(D$,"walkRecursively");function C$(e,r){const t=xI(e,({node:n})=>!n.root&&n.navEntry===r);if(!t)throw new Error("Failed to find NavEntry in NavTree.");return t}i(C$,"findNavTreeNodeByNavEntry");function DI(e,r){if(!r)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Re.Exit};const t=r.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!t||t.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Re.Exit};const{nodeCoords:n}=C$(e,t.navEntry);return Fl(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Re.Exit,coords:n}}i(DI,"exitOutOf");class CI extends Un()("nav-exit"){static{i(this,"NavExitEvent")}}class E$ extends Un()("nav-activate"){static{i(this,"NavActivateEvent")}}class EI extends Un()("nav-focus"){static{i(this,"NavFocusEvent")}}class AI extends Un()("nav-enter"){static{i(this,"NavEnterEvent")}}class SI extends Un()("nav-navigate"){static{i(this,"NavigateEvent")}}class MI extends Un()("nav-navigate-pibling"){static{i(this,"NavPiblingEvent")}}function FI(e){return{root:!0,children:A$(e)?.children||[]}}i(FI,"mapTree");function A$(e){const r=e.element;if(!(r instanceof HTMLElement))return;const t=vI(r),n=TI(e);if((t?.navParams.group?!!n.length:!1)||n.length||t)return{root:!1,element:r,navEntry:t,children:n}}i(A$,"mapTreeRecursively");function TI(e){const r=[];function t(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(l=>l.forEach(u=>t(u)));return}const o=n.navEntry.navParams.x,s=n.navEntry.navParams.y||0,a=es(r,s,()=>({noX:[],withX:[],y:s}));o==null?a.noX.push(n):a.withX.push({x:o,node:n})}return i(t,"pushNode"),e.children.forEach(n=>{const o=A$(n);o&&t(o)}),r.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,s)=>o.x-s.x),n.withX.forEach(({x:o,node:s})=>{n.noX.splice(o,0,s)}),n.noX)).filter(F.isTruthy)}i(TI,"expandChildren");class NI extends Jh{static{i(this,"NavController")}rootElement;options;constructor(r,t={}){super(),this.rootElement=r,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Od(this.getNavTree().children)?.node.element.focus()}addNavEntry(r){this.navEntries.add(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(r){this.navEntries.delete(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(r,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!r)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=C$(this.getNavTree(),r);t?(this.navEntries.forEach(a=>{a!==r&&a.clearNavValue()}),this.currentNavEntry={entry:r,navAction:n,position:o}):this.currentNavEntry?.entry===r&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const s={success:!0,defaulted:!1,direction:void 0,newElement:r.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return t&&(n===Re.Activate?this.dispatch(new E$({detail:s})):n===Re.Focus&&this.dispatch(new EI({detail:s}))),s}navigate({direction:r,allowWrapping:t}){if(this.locked)return{success:!1,direction:r,navAction:Re.Navigate,reason:"NavController is locked."};const n=Z1(this.getNavTree(),this.currentNavEntry,r,t);return this.dispatch(new SI({detail:n})),n}enterInto({fallbackToActivate:r}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Re.Enter,reason:"NavController is locked."};const t=kI(this.getNavTree(),this.currentNavEntry);return!t.success&&r?this.activate():(this.dispatch(new AI({detail:t})),t)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Re.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Re.Activate,reason:"No focused NavEntry to activate."};const r=this.currentNavEntry.entry.activate(!0);return zr.isDefined(r,"Cannot activate a group."),r}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Re.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Re.Activate&&this.currentNavEntry.entry.focus(!0);const r=DI(this.getNavTree(),this.currentNavEntry);return this.dispatch(new CI({detail:r})),r}navigatePibling({allowWrapping:r,direction:t}){if(this.locked)return{success:!1,direction:t,navAction:Re.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),s={...this.currentNavEntry?pI(this.currentNavEntry,t,r):Z1(n,void 0,t,r),navAction:Re.Pibling};return this.dispatch(new MI({detail:s})),s}buildNavTree(){const r=FP(this.rootElement),t=FI(r);return this.cachedNavTree=t,t}}function J1({open:e,callback:r,popUpManager:t,host:n,options:o}){if(e){const s=t.showPopUp(n,o);r?.(s)}else t.removePopUp(),r?.(void 0)}i(J1,"triggerPopUpState");function S$(e){return wn(e,(r,t)=>b`
                <${Jo.assign({...r})}
                    ${z("click",async n=>{await r.onClick?.({event:n,index:t})})}
                >
                    ${r.content}
                </${Jo}>
            `,(r,t)=>!t.hidden)}i(S$,"renderMenuItemEntries");const Fu=globalThis.document;class PI extends J5{static{i(this,"PageActiveObservable")}constructor(){if(super({defaultValue:!!Fu?.hidden,equalityCheck:F.strictEquals}),!Fu)return;globalThis.addEventListener("visibilitychange",t=>this.updateVisibility(t,Fu));const r=i(t=>this.updateVisibility(t,Fu),"visibilityHandler");globalThis.onpageshow=r,globalThis.onpagehide=r,globalThis.onfocus=r,globalThis.onblur=r}updateVisibility(r,t){const n=OI.includes(r.type),o=II.includes(r.type),s=n?!0:o?!1:t.hasFocus()||!t.hidden;this.setValue(s)}}const II=["blur","focusout","pagehide"],OI=["focus","focusin","pageshow"],BI=new PI;function RI(e,r){return BI.listen(e,r)}i(RI,"listenToPageActivation");function ph(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}i(ph,"isInputLikeElement");const Y1={top:0,left:0,right:0,bottom:0};class M$ extends Zh("hide-pop-up"){static{i(this,"HidePopUpEvent")}}class F$ extends Un()("nav-select"){static{i(this,"NavSelectEvent")}}class LI{static{i(this,"PopUpManager")}constructor(r,t){this.navController=r,this.options={...this.options,...t}}listenTarget=new Jh;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[RI(!1,r=>{r||this.removePopUp()}),this.navController.listen(E$,r=>{const t=r.composedPath()[0];t instanceof Element&&ph(t)||r.detail.success&&(this.listenTarget.dispatch(new F$({detail:r.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),r.stopImmediatePropagation(),r.preventDefault())}),U0("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),U0("keydown",r=>{const t=r.code;if(t==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=r.composedPath()[0];if(n instanceof Element&&ph(n))return;t==="ArrowDown"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Yn.Down,allowWrapping:!1})):t==="ArrowUp"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Yn.Up,allowWrapping:!1})):t==="ArrowLeft"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Yn.Left,allowWrapping:!1})):t==="ArrowRight"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Yn.Right,allowWrapping:!1})):(t==="Enter"||t==="Return"||t==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(r.stopImmediatePropagation(),r.preventDefault())}})]}listen(r,t,n){return this.listenTarget.listen(r,t,n)}removePopUp(){this.cleanupCallbacks.forEach(r=>r()),this.listenTarget.dispatch(new M$)}showPopUp(r,t){this.lastRootElement=r;const n={...this.options,...t},o=NP(r);zr.instanceOf(o,HTMLElement);const s=r.getBoundingClientRect(),a=o.getBoundingClientRect(),l=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,d=o===document.body?{top:0,left:0,right:a.width,bottom:a.height}:{top:a.top,left:a.left,right:a.right-l,bottom:a.bottom-u},f=cr(Y1,p=>s[p]),h=cr(Y1,p=>{const v=d[p],w=f[p];return Math.abs(v-w)}),g=h.top>h.bottom+n.verticalDiffThreshold&&h.bottom<n.minDownSpace,m=h.left>h.right+n.horizontalDiffThreshold&&h.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!g,popRight:!m,positions:{container:d,root:f,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var _i=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(_i||{});const de=sr()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new LI(new NI(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-disabled")},styles:i(({hostClasses:e})=>E`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Tr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${tu({elementBorderSize:"1px"})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${oi};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Al}
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
    `,"styles"),events:{navSelect:ir(),openChange:ir(),init:ir()},cleanup({state:e,updateState:r}){r({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:r,host:t,inputs:n,dispatch:o,events:s}){e.popUpManager.listen(M$,()=>{if(r({showPopUpResult:void 0}),o(new s.openChange(void 0)),!n.isDisabled){const a=t.shadowRoot.querySelector(".dropdown-wrapper");zr.instanceOf(a,HTMLButtonElement,"failed to find dropdown wrapper child"),a.focus()}}),e.popUpManager.listen(F$,a=>{n.keepOpenAfterInteraction||J1({open:!1,callback(l){r({showPopUpResult:l})},host:t,popUpManager:e.popUpManager}),o(new s.navSelect(a.detail))}),o(new s.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:r,state:t,inputs:n,updateState:o,host:s,slotNames:a}){function l({emitEvent:p,open:v},w){if(t.showPopUpResult&&n.keepOpenAfterInteraction&&w){const k=s.shadowRoot.querySelector(".dropdown-trigger");if(k&&!w.composedPath().includes(k))return}J1({open:v,callback(k){o({showPopUpResult:k}),p&&e(new r.openChange(k))},host:s,popUpManager:t.popUpManager})}i(l,"triggerPopUp"),n.isDisabled?l({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&t.showPopUpResult?l({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!t.showPopUpResult&&l({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?t.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,d=u==="right"&&t.showPopUpResult?n.ignoreMaxWidth?E`
                          left: unset;
                      `:E`
                          left: -${t.showPopUpResult.positions.diff.left}px;
                      `:E`
                      left: ${n.popUpOffset?.left||0}px;
                  `,f=t.showPopUpResult&&u==="left"?n.ignoreMaxWidth?E`
                          right: unset;
                      `:E`
                          right: -${t.showPopUpResult.positions.diff.right}px;
                      `:E`
                      right: ${n.popUpOffset?.right||0}px;
                  `,h=E`
            ${d}
            ${f}
        `,g=t.showPopUpResult?t.showPopUpResult.popDown?n.ignoreMaxHeight?E`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:E`
                          bottom: -${t.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:n.ignoreMaxHeight?E`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:E`
                        top: -${t.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:void 0;function m(p){l({emitEvent:!0,open:!t.showPopUpResult},p)}return i(m,"respondToClick"),b`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${At({open:!!t.showPopUpResult,"open-upwards":!t.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!t.showPopUpResult}
                ${z("keydown",p=>{!t.showPopUpResult&&p.code.startsWith("Arrow")&&l({emitEvent:!0,open:!0},p)})}
                ${z("click",p=>{if(p.detail===0){let v=!1;if(PP(({element:w})=>ph(w)?(v=!0,!0):!1),v)return;m(p)}else if(p.button===0&&t.showPopUpResult){const v=s.shadowRoot.querySelector(".dropdown-trigger");v&&!p.composedPath().includes(v)&&l({emitEvent:!0,open:!1},p)}})}
                ${z("mousedown",p=>{if(p.button!==0)return;const v=wr.instanceOf(s.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);p.composedPath().includes(v)&&m(p)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${a.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${At({"right-aligned":u==="right"})}"
                    style=${g}
                >
                    ${Lt(!!t.showPopUpResult,b`
                            <slot name=${a.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),Tu=sr()({tagName:"vira-menu-trigger",slotNames:["trigger"],styles:E`
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
    `,events:{openChange:ir()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:r,updateState:t,dispatch:n,events:o,slotNames:s}){return b`
            <${de.assign({...e})}
                class=${At({open:!!r.showPopUpResult})}
                ${z(de.events.init,a=>{t({navController:a.detail.navController,popUpManager:a.detail.popUpManager})})}
                ${z(de.events.openChange,a=>{!!r.showPopUpResult!=!!a.detail&&n(new o.openChange(a.detail)),t({showPopUpResult:a.detail})})}
            >
                <slot name=${s.trigger} slot=${de.slotNames.trigger}></slot>
                ${r.navController&&r.showPopUpResult?b`
                          <${ji.assign({direction:r.showPopUpResult.popDown?Ml.Downwards:Ml.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${de.slotNames.popUp}
                              class=${At({"full-width-menu":e.horizontalAnchor===_i.Both})}
                          >
                              <slot></slot>
                          </${ji}>
                      `:oe}
            </${de}>
        `}}),vr=sr()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":i(({inputs:e})=>e.bold,"vira-bold-bold")},styles:i(({hostClasses:e,cssVars:r})=>E`
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
            font-weight: ${r["vira-bold-bold-weight"].value};
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
    `,"styles"),render({inputs:e}){return b`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}}),T$=ne({name:"ArrowDown24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),N$=ne({name:"ArrowLeft24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),P$=ne({name:"ArrowRight24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),I$=ne({name:"ArrowUp24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),O$=ne({name:"AutoTheme24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-stroke-color"].value}
                stroke="none"
                style="fill-rule:nonzero"
            />
            <path
                d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 0v16"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),B$=ne({name:"Bell24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),R$=ne({name:"Chat24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),km=ne({name:"Check16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xm=ne({name:"ChevronDown16Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M4 5.5 L8 10 12 5.5"
            />
        </svg>
    `}),L$=ne({name:"ChevronDown24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),ou=ne({name:"ChevronUp16Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M4 10 L8 6 12 10"
            />
        </svg>
    `}),j$=ne({name:"ChevronUp24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Dm=ne({name:"CloseX24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_$=ne({name:"Commit24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Fc=ne({name:"Copy24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),U$=ne({name:"Dash16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 8h8"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="round"
            />
        </svg>
    `}),z$=ne({name:"Document24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),V$=ne({name:"DocumentSearch24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),q$=ne({name:"DoubleChevron24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Cm=ne({name:"Element16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Nr=ne({name:"Element24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),W$=ne({name:"ExternalLink24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Em=ne({name:"EyeClosed24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${y["vira-icon-fill-color"].value}
            stroke=${y["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Am=ne({name:"EyeOpen24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${y["vira-icon-fill-color"].value}
            stroke=${y["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),K$=ne({name:"Filter24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),G$=ne({name:"Globe24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9H3m9 9c-5 0-9-4-9-9m9 9q3.5-3.9 3.6-9 0-5.1-3.6-9m0 18a14 14 0 0 1-3.6-9q0-5.1 3.6-9m-9 9c0-5 4-9 9-9"
                style="fill-rule:nonzero;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),H$=ne({name:"Link24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Sm=ne({name:"Loader24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jI=E`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Da["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,ii=ne({name:"LoaderAnimated24Icon",svgTemplate:b`
        <style>
            ${jI}
        </style>
        ${Sm.svgTemplate}
    `}),Z$=ne({name:"Lock24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),J$=ne({name:"MagnifyingGlass24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Y$=ne({name:"Moon24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${y["vira-icon-stroke-color"].value}
            stroke-width=${y["vira-icon-stroke-width"].value}
            fill=${y["vira-icon-fill-color"].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `}),Bd=ne({name:"Options24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),X$=ne({name:"Pencil24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Q$=ne({name:"Plus24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ek=ne({name:"Printer24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),rk=ne({name:"Shield24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),tk=ne({name:"SortAscending24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),nk=ne({name:"SortDescending24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),ok=ne({name:"Sparkle24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ik=ne({name:"SpeakerLoud24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),sk=ne({name:"SpeakerMedium24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ak=ne({name:"SpeakerMuted24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),lk=ne({name:"SpeakerQuiet24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Tc=ne({name:"Star24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Tl=ne({name:"StatusFailure24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),uk=ne({name:"StatusInProgress24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),Fs=ne({name:"StatusSuccess24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ck=ne({name:"StatusUnknown24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),dk=ne({name:"StatusWarning24Icon",svgTemplate:b`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),fk=ne({name:"Sun24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Nc=ne({name:"Upload16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M3 9v4h10v-4"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 9V2m3 3-3-3-3 3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `}),Pc=ne({name:"Upload24Icon",svgTemplate:b`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Mm=ne({name:"X16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Fm=ne({name:"X24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function qt(e,r){const t=We(r).map(o=>{if(r[o])return`${y[o].name}: ${String(r[o])};`}).filter(F.isTruthy).join(" "),n=E`
        ${Me(t)}
        display: inline-flex;
        vertical-align: middle;
    `;return ne({name:e.name,svgTemplate:b`
            <div style=${n}>${e.svgTemplate}</div>
        `})}i(qt,"createColoredIcon");const X1={ArrowDown24Icon:T$,ArrowLeft24Icon:N$,ArrowRight24Icon:P$,ArrowUp24Icon:I$,AutoTheme24Icon:O$,Bell24Icon:B$,Chat24Icon:R$,Check16Icon:km,Check24Icon:Pd,ChevronDown16Icon:xm,ChevronDown24Icon:L$,ChevronUp16Icon:ou,ChevronUp24Icon:j$,CloseX24Icon:Dm,Commit24Icon:_$,Copy24Icon:Fc,Dash16Icon:U$,Document24Icon:z$,DocumentSearch24Icon:V$,DoubleChevron24Icon:q$,Element16Icon:Cm,Element24Icon:Nr,ExternalLink24Icon:W$,EyeClosed24Icon:Em,EyeOpen24Icon:Am,Filter24Icon:K$,Globe24Icon:G$,Link24Icon:H$,Loader24Icon:Sm,LoaderAnimated24Icon:ii,Lock24Icon:Z$,MagnifyingGlass24Icon:J$,Moon24Icon:Y$,Options24Icon:Bd,Pencil24Icon:X$,Plus24Icon:Q$,Printer24Icon:ek,Shield24Icon:rk,SortAscending24Icon:tk,SortDescending24Icon:nk,Sparkle24Icon:ok,SpeakerLoud24Icon:ik,SpeakerMedium24Icon:sk,SpeakerMuted24Icon:ak,SpeakerQuiet24Icon:lk,Star24Icon:Tc,StatusFailure24Icon:Tl,StatusInProgress24Icon:uk,StatusSuccess24Icon:Fs,StatusUnknown24Icon:ck,StatusWarning24Icon:dk,Sun24Icon:fk,Upload16Icon:Nc,Upload24Icon:Pc,X16Icon:Mm,X24Icon:Fm},_I={ArrowDown24Icon:T$,ArrowLeft24Icon:N$,ArrowRight24Icon:P$,ArrowUp24Icon:I$,AutoTheme24Icon:O$,Bell24Icon:B$,Chat24Icon:R$,Check24Icon:Pd,ChevronDown24Icon:L$,ChevronUp24Icon:j$,CloseX24Icon:Dm,Commit24Icon:_$,Copy24Icon:Fc,Document24Icon:z$,DocumentSearch24Icon:V$,DoubleChevron24Icon:q$,Element24Icon:Nr,ExternalLink24Icon:W$,EyeClosed24Icon:Em,EyeOpen24Icon:Am,Filter24Icon:K$,Globe24Icon:G$,Link24Icon:H$,Loader24Icon:Sm,LoaderAnimated24Icon:ii,Lock24Icon:Z$,MagnifyingGlass24Icon:J$,Moon24Icon:Y$,Options24Icon:Bd,Pencil24Icon:X$,Plus24Icon:Q$,Printer24Icon:ek,Shield24Icon:rk,SortAscending24Icon:tk,SortDescending24Icon:nk,Sparkle24Icon:ok,SpeakerLoud24Icon:ik,SpeakerMedium24Icon:sk,SpeakerMuted24Icon:ak,SpeakerQuiet24Icon:lk,Star24Icon:Tc,StatusFailure24Icon:Tl,StatusInProgress24Icon:uk,StatusSuccess24Icon:Fs,StatusUnknown24Icon:ck,StatusWarning24Icon:dk,Sun24Icon:fk,Upload24Icon:Pc,X24Icon:Fm},UI={Check16Icon:km,ChevronDown16Icon:xm,ChevronUp16Icon:ou,Dash16Icon:U$,Element16Icon:Cm,Upload16Icon:Nc,X16Icon:Mm},dn={value:E`transparent`},zI={[ze.Plain]:{[Xe.Standard]:{idle:{backgroundColor:M.inverse[or].background,textColor:M.inverse[or].foreground,borderColor:M.inverse[or].background},hover:{backgroundColor:M.colors["vira-grey-behind-bg-non-body"].background,textColor:M.colors["vira-grey-behind-bg-non-body"].foreground,borderColor:M.inverse[or].background},active:{backgroundColor:M.colors["vira-grey-behind-bg-body"].background,textColor:M.colors["vira-grey-behind-bg-body"].foreground,borderColor:M.inverse[or].background}},[Xe.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors[or].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-grey-on-self-body"].background,textColor:M.colors["vira-grey-on-self-body"].foreground,borderColor:M.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-grey-on-self-non-body"].background,textColor:M.colors["vira-grey-on-self-non-body"].foreground,borderColor:M.colors["vira-grey-on-self-non-body"].foreground}}},[ze.Accent]:{[Xe.Standard]:{idle:{backgroundColor:M.colors["vira-accent-behind-bg-non-body"].background,textColor:M.colors["vira-accent-behind-bg-non-body"].foreground,borderColor:M.colors["vira-accent-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-accent-behind-bg-header"].background,textColor:M.colors["vira-accent-behind-bg-header"].foreground,borderColor:M.colors["vira-accent-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-accent-behind-bg-body"].background,textColor:M.colors["vira-accent-behind-bg-body"].foreground,borderColor:M.colors["vira-accent-behind-bg-body"].background}},[Xe.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-accent-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-accent-on-self-body"].background,textColor:M.colors["vira-accent-on-self-body"].foreground,borderColor:M.colors["vira-accent-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-accent-on-self-non-body"].background,textColor:M.colors["vira-accent-on-self-non-body"].foreground,borderColor:M.colors["vira-accent-on-self-non-body"].foreground}}},[ze.Neutral]:{[Xe.Standard]:{idle:{backgroundColor:M.colors[or].background,textColor:M.colors[or].foreground,borderColor:M.colors[or].foreground},hover:{backgroundColor:M.colors["vira-grey-behind-fg-small-body"].background,textColor:M.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:M.colors[or].foreground},active:{backgroundColor:M.colors["vira-grey-behind-fg-body"].background,textColor:M.colors["vira-grey-behind-fg-body"].foreground,borderColor:M.colors[or].foreground}},[Xe.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-grey-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-grey-on-self-body"].background,textColor:M.colors["vira-grey-on-self-body"].foreground,borderColor:M.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-grey-on-self-non-body"].background,textColor:M.colors["vira-grey-on-self-non-body"].foreground,borderColor:M.colors["vira-grey-on-self-non-body"].foreground}}},[ze.Danger]:{[Xe.Standard]:{idle:{backgroundColor:M.colors["vira-red-behind-bg-non-body"].background,textColor:M.colors["vira-red-behind-bg-non-body"].foreground,borderColor:M.colors["vira-red-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-red-behind-bg-header"].background,textColor:M.colors["vira-red-behind-bg-header"].foreground,borderColor:M.colors["vira-red-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-red-behind-bg-body"].background,textColor:M.colors["vira-red-behind-bg-body"].foreground,borderColor:M.colors["vira-red-behind-bg-body"].background}},[Xe.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-red-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-red-on-self-body"].background,textColor:M.colors["vira-red-on-self-body"].foreground,borderColor:M.colors["vira-red-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-red-on-self-non-body"].background,textColor:M.colors["vira-red-on-self-non-body"].foreground,borderColor:M.colors["vira-red-on-self-non-body"].foreground}}},[ze.Warning]:{[Xe.Standard]:{idle:{backgroundColor:M.colors["vira-orange-behind-bg-non-body"].background,textColor:M.colors["vira-orange-behind-bg-non-body"].foreground,borderColor:M.colors["vira-orange-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-orange-behind-bg-header"].background,textColor:M.colors["vira-orange-behind-bg-header"].foreground,borderColor:M.colors["vira-orange-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-orange-behind-bg-body"].background,textColor:M.colors["vira-orange-behind-bg-body"].foreground,borderColor:M.colors["vira-orange-behind-bg-body"].background}},[Xe.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-orange-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-orange-on-self-body"].background,textColor:M.colors["vira-orange-on-self-body"].foreground,borderColor:M.colors["vira-orange-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-orange-on-self-non-body"].background,textColor:M.colors["vira-orange-on-self-non-body"].foreground,borderColor:M.colors["vira-orange-on-self-non-body"].foreground}}},[ze.Positive]:{[Xe.Standard]:{idle:{backgroundColor:M.colors["vira-green-behind-bg-non-body"].background,textColor:M.colors["vira-green-behind-bg-non-body"].foreground,borderColor:M.colors["vira-green-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-green-behind-bg-header"].background,textColor:M.colors["vira-green-behind-bg-header"].foreground,borderColor:M.colors["vira-green-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-green-behind-bg-body"].background,textColor:M.colors["vira-green-behind-bg-body"].foreground,borderColor:M.colors["vira-green-behind-bg-body"].background}},[Xe.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-green-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-green-on-self-body"].background,textColor:M.colors["vira-green-on-self-body"].foreground,borderColor:M.colors["vira-green-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-green-on-self-non-body"].background,textColor:M.colors["vira-green-on-self-non-body"].foreground,borderColor:M.colors["vira-green-on-self-non-body"].foreground}}}},Ie=sr()({tagName:"vira-button",hostClasses:{"vira-button-with-menu-caret":i(({inputs:e})=>!!e.showMenuCaret,"vira-button-with-menu-caret"),"vira-button-size-large":i(({inputs:e})=>e.buttonSize===Hn.Large,"vira-button-size-large"),"vira-button-size-medium":i(({inputs:e})=>!e.buttonSize||e.buttonSize===Hn.Medium,"vira-button-size-medium"),"vira-button-size-small":i(({inputs:e})=>e.buttonSize===Hn.Small,"vira-button-size-small"),"vira-button-emphasis-standard":i(({inputs:e})=>!e.buttonEmphasis||e.buttonEmphasis===Xe.Standard,"vira-button-emphasis-standard"),"vira-button-emphasis-subtle":i(({inputs:e})=>e.buttonEmphasis===Xe.Subtle,"vira-button-emphasis-subtle"),"vira-button-color-accent":i(({inputs:e})=>!e.colorVariant||e.colorVariant===ze.Accent,"vira-button-color-accent"),"vira-button-color-plain":i(({inputs:e})=>e.colorVariant===ze.Plain,"vira-button-color-plain"),"vira-button-color-neutral":i(({inputs:e})=>e.colorVariant===ze.Neutral,"vira-button-color-neutral"),"vira-button-color-danger":i(({inputs:e})=>e.colorVariant===ze.Danger,"vira-button-color-danger"),"vira-button-color-warning":i(({inputs:e})=>e.colorVariant===ze.Warning,"vira-button-color-warning"),"vira-button-color-positive":i(({inputs:e})=>e.colorVariant===ze.Positive,"vira-button-color-positive"),"vira-button-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-button-disabled"),"vira-button-icon-only":i(({inputs:e})=>!e.text&&!!e.icon,"vira-button-icon-only")},cssVars:{"vira-button-text-color":"transparent","vira-button-background-color":"transparent","vira-button-border-color":"transparent","vira-button-hover-text-color":"transparent","vira-button-hover-background-color":"transparent","vira-button-hover-border-color":"transparent","vira-button-active-text-color":"transparent","vira-button-active-background-color":"transparent","vira-button-active-border-color":"transparent","vira-button-disabled-text-color":M.colors["vira-grey-behind-bg-invisible"].foreground.value,"vira-button-disabled-background-color":M.colors["vira-grey-behind-bg-invisible"].background.value,"vira-button-disabled-border-color":M.colors["vira-grey-behind-bg-invisible"].background.value,"vira-button-border-width":"1px","vira-button-border-radius":R["vira-form-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>{function t(){const o=$m.flatMap(s=>Sl.map(a=>{const l=zI[a][s],u=e[`vira-button-color-${a}`].selector,d=e[`vira-button-emphasis-${s}`].selector;return E`
                        ${u}${d} {
                            ${r["vira-button-background-color"].name}: ${l.idle.backgroundColor.value};
                            ${r["vira-button-text-color"].name}: ${l.idle.textColor.value};
                            ${r["vira-button-border-color"].name}: ${l.idle.borderColor.value};

                            ${r["vira-button-hover-background-color"].name}: ${l.hover.backgroundColor.value};
                            ${r["vira-button-hover-text-color"].name}: ${l.hover.textColor.value};
                            ${r["vira-button-hover-border-color"].name}: ${l.hover.borderColor.value};

                            ${r["vira-button-active-background-color"].name}: ${l.active.backgroundColor.value};
                            ${r["vira-button-active-text-color"].name}: ${l.active.textColor.value};
                            ${r["vira-button-active-border-color"].name}: ${l.active.borderColor.value};
                        }
                    `}));return Me(o.join(`
`))}i(t,"generateVariantCss");function n(){const o=wm.map(s=>E`
                    ${e[`vira-button-size-${s}`].selector} {
                        height: ${Zu[s]}px;
                        font-size: ${R[`vira-form-${s}-text-size`].value};

                        button {
                            padding: 0
                                ${R[`vira-form-${s}-text-size`].value};
                        }
                    }
                `);return Me(o.join(`
`))}return i(n,"generateSizeVariantCss"),E`
            :host {
                cursor: pointer;
                display: inline-flex;
                position: relative;
                vertical-align: middle;
                align-items: center;
                box-sizing: border-box;
                ${oi};
                ${R["vira-form-focus-outline-color"].name}: ${R["vira-form-accent-primary-hover-color"].value}
            }

            ${n()}
            ${t()}

            button {
                ${Tr};
                flex-shrink: 0;
                position: relative;
                cursor: pointer;

                width: 100%;
                height: 100%;

                border-width: ${r["vira-button-border-width"].value};
                border-style: solid;
                border-color: ${r["vira-button-border-color"].value};

                box-sizing: border-box;
                display: inline-flex;
                justify-content: center;
                align-items: center;

                border-radius: ${r["vira-button-border-radius"].value};

                background-color: ${r["vira-button-background-color"].value};
                color: ${r["vira-button-text-color"].value};

                ${tu({elementBorderSize:r["vira-button-border-width"]})}
            }

            :host(:hover) button,
            & button:hover {
                background-color: ${r["vira-button-hover-background-color"].value};
                color: ${r["vira-button-hover-text-color"].value};
                border-color: ${r["vira-button-hover-border-color"].value};
            }

            :host(:active) button,
            & button:active {
                background-color: ${r["vira-button-active-background-color"].value};
                color: ${r["vira-button-active-text-color"].value};
                border-color: ${r["vira-button-active-border-color"].value};
            }

            .empty-text {
                width: 0;
            }

            button ${B} + .text-template {
                margin-left: 8px;
            }

            ${B} {
                height: 0;
                display: flex;
                align-items: center;
            }

            .caret-icon {
                margin-left: 8px;
            }

            ${e["vira-button-with-menu-caret"].selector} {
                button {
                    padding-right: 6px;
                }
            }

            ${e["vira-button-disabled"].selector} {
                cursor: not-allowed;

                & button {
                    pointer-events: none;
                    color: ${r["vira-button-disabled-text-color"].value};
                    background-color: ${r["vira-button-disabled-background-color"].value};
                    border-color: ${r["vira-button-disabled-border-color"].value};
                }
            }

            ${e["vira-button-icon-only"].selector} {
                button {
                    aspect-ratio: 1;
                }
            }
        `},"styles"),render:i(({inputs:e})=>{const r=e.icon?b`
                  <${B.assign({icon:e.icon})}></${B}>
              `:oe,t=e.text?b`
                  <span class="text-template">${e.text}</span>
              `:b`
                  <span class="empty-text">&nbsp;</span>
              `,n=e.showMenuCaret?b`
                  <${B.assign({icon:xm})}
                      class="caret-icon"
                  ></${B}>
              `:oe;return b`
            <button ?disabled=${e.isDisabled}>
                ${r}${t}${n}
            </button>
        `},"render")});var bh=(e=>(e.Error="error",e.Success="success",e))(bh||{});const qf=sr()({tagName:"vira-card",hostClasses:{"vira-card-error":i(({inputs:e})=>e.cardState==="error","vira-card-error"),"vira-card-success":i(({inputs:e})=>e.cardState==="success","vira-card-success")},cssVars:{"vira-card-border":E`1px solid ${R["vira-form-border-color"].value}`,"vira-card-padding":R["vira-form-wrapper-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>E`
        :host {
            display: block;
            border: ${r["vira-card-border"].value};
            border-radius: ${R["vira-form-wrapper-radius"].value};
            padding: ${r["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${R["vira-form-error-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${R["vira-form-success-color"].value};
        }
    `,"styles"),render(){return b`
            <slot></slot>
        `}}),ge=sr()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":i(({inputs:e})=>!!e.horizontal,"vira-checkbox-horizontal"),"vira-checkbox-filled-checked":i(({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-checked"),"vira-checkbox-filled-unchecked":i(({inputs:e})=>!!e.fillWhenUnchecked,"vira-checkbox-filled-unchecked")},styles:i(({hostClasses:e})=>E`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${B} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${y["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        ${e["vira-checkbox-filled-checked"].selector} {
            & .custom-checkbox.checked {
                color: ${R["vira-form-background-color"].value};
                background-color: ${R["vira-form-accent-primary-color"].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${R["vira-form-accent-primary-hover-color"].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${R["vira-form-accent-primary-active-color"].value};
                }
            }
        }
        ${e["vira-checkbox-filled-unchecked"].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${R["vira-form-background-color"].value};
                background-color: ${R["vira-form-error-color"].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${R["vira-form-error-hover-color"].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${R["vira-form-error-active-color"].value};
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
                font-weight: ${R["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${R["vira-form-selection-hover-color"].value};
            }
            &:active .custom-checkbox {
                background-color: ${R["vira-form-selection-active-color"].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${R["vira-form-border-color"].value};
            color: ${R["vira-form-foreground-color"].value};
            border-radius: ${R["vira-form-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${tu({elementBorderSize:"1px"})}

            &.checked {
                & ${B} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${R["vira-form-error-color"].value};
            }

            &.disabled {
                ${Al};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,"styles"),events:{valueChange:ir()},render({inputs:e,dispatch:r,events:t}){function n(){e.disabled||r(new t.valueChange(!e.value))}i(n,"updateValue");const o=e.label?b`
                  <span
                      class="label-text"
                      ${wo(e.attributePassthrough?.text)}
                      style=${Ur(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:oe;return b`
            <label
                class=${At({disabled:!!e.disabled})}
                ${wo(e.attributePassthrough?.label)}
                style=${Ur(e.stylePassthrough?.label)}
                ${z("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${At({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Ur(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${wo(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Ur(e.stylePassthrough?.["custom-checkbox"])}
                    ${gP(n)}
                >
                    <${B.assign({icon:Pd,fitContainer:!0})}
                        ${wo(e.attributePassthrough?.[B.tagName])}
                        style=${Ur(e.stylePassthrough?.[B.tagName])}
                    ></${B}>
                </span>
            </label>
        `}}),mt=sr()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":i(({inputs:e})=>!!e.expandOnPrint,"vira-collapsible-wrapper-expand-on-print")},slotNames:["header"],styles:i(({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Tr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Da["vira-pretty-animation-duration"].value};
            overflow: hidden;

            &.collapsed {
                ${oi}
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
    `,"styles"),events:{expandChange:ir()},render({state:e,slotNames:r,updateState:t,dispatch:n,events:o,inputs:s}){const a=s.expanded?E`
                  height: ${e.contentHeight}px;
              `:E`
                  height: 0;
              `;return b`
            <button
                class="header-wrapper"
                ${z("click",()=>{n(new o.expandChange(!s.expanded))})}
            >
                <slot name=${r.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${At({collapsed:!s.expanded})}"
                style=${a}
                disabled="disabled"
            >
                <div
                    ${s$(({contentRect:l})=>{t({contentHeight:l.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Hr=sr()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:ir()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":i(({state:e})=>e.isExpanded,"vira-collapsible-card-expanded"),"vira-collapsible-card-expansion-blocked":i(({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-expansion-blocked"),"vira-collapsible-card-card-styles":i(({inputs:e})=>!e.rawCollapsible,"vira-collapsible-card-card-styles")},cssVars:{"vira-collapsible-card-content-gap":"16px"},styles:i(({hostClasses:e,cssVars:r})=>E`
        :host {
            display: inline-flex;
        }

        ${e["vira-collapsible-card-expanded"].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${mt} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e["vira-collapsible-card-card-styles"].selector} {
            & ${mt} {
                border: 1px solid ${R["vira-form-border-color"].value};
                border-radius: ${R["vira-form-wrapper-radius"].value};
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
            gap: ${r["vira-collapsible-card-content-gap"].value};
            overflow-x: auto;
            overflow-y: hidden;
        }

        @media print {
            ${mt} {
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
    `,"styles"),slotNames:["header"],render({inputs:e,slotNames:r,state:t,updateState:n,testIds:o,dispatch:s,events:a}){e.blockExpansion&&n({isExpanded:!0});const l=t.isExpanded||e.expandOnPrint?b`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:oe,u=e.hideHeader?oe:b`
                  <div class="card-header">
                      <slot name=${r.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?oe:b`
                                <${B.assign({icon:ou,fitContainer:!0})}
                                    ${Ko(o.openCaret)}
                                    class="open-caret"
                                ></${B}>
                            `}
                  </div>
              `;return b`
            <${mt.assign({expanded:t.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${z(mt.events.expandChange,d=>{d.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:d.detail}),s(new a.expandToggle(d.detail)))})}
            >
                <div class="header-wrapper" slot=${mt.slotNames.header}>
                    ${u}
                </div>
                ${l}
            </${mt}>
        `}}),Ja=sr()({tagName:"vira-dropdown",testIds:["leadingIcon","prefixText","trigger"],styles:E`
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
            width: 24px;
            aspect-ratio: 1;
            align-self: flex-start;
            will-change: transform;
            transform: rotate(180deg);
            transition: transform
                ${Da["vira-interaction-animation-duration"].value} linear;
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
            ${oi};
            border: 1px solid ${R["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${R["vira-form-radius"].value};
            background-color: ${R["vira-form-background-color"].value};
            color: ${R["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:ir(),openChange:ir()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:r,dispatch:t,events:n,updateState:o,testIds:s}){const a=wn(r.selected,g=>r.options.find(m=>m.value===g),F.isTruthy),l=r.icon?b`
                  <${B.assign({icon:r.icon})}
                      ${Ko(s.leadingIcon)}
                  ></${B}>
              `:oe,u=!a.length,d=r.selectionPrefix&&!u?b`
                      <span class="selected-label-prefix" ${Ko(s.prefixText)}>
                          ${r.selectionPrefix}
                      </span>
                  `:oe,f=u?r.placeholder||"":r.isMultiSelect&&a.length>1?`${a.length} Selected`:a[0]?.label||"",h=b`
            <${ji.assign({direction:e.showPopUpResult?.popDown?Ml.Downwards:Ml.Upwards})}
                slot=${de.slotNames.popUp}
            >
                ${S$(r.options.map(g=>({content:g.label,onClick(){t(new n.selectedChange([g.value]))},disabled:g.disabled,selected:a.includes(g)})))}
            </${ji}>
        `;return b`
            <${de.assign({...r,popUpOffset:{vertical:-1,right:24},horizontalAnchor:r.horizontalAnchor||_i.Both})}
                ${z(de.events.openChange,g=>{!!e.showPopUpResult!=!!g.detail&&t(new n.openChange(g.detail)),o({showPopUpResult:g.detail})})}
            >
                <div
                    class="dropdown-trigger ${At({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    slot=${de.slotNames.trigger}
                    ${Ko(s.trigger)}
                >
                    ${l}
                    <span
                        class="selection-display ${At({"using-placeholder":u})}"
                        title=${Ur(u?void 0:f)}
                    >
                        ${d} ${f}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${B.assign({icon:ou})}
                            class="trigger-icon"
                        ></${B}>
                    </span>
                </div>
                ${e.showPopUpResult?h:oe}
            </${de}>
        `}}),Ui=sr()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:i(({cssVars:e})=>E`
        :host {
            color: ${R["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,"styles"),render(){return b`
            <slot></slot>
        `}});var Te=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(Te||{});function Nu(e,r){if(e)return r?Gh({value:e,suffix:"*"}):e}i(Nu,"applyRequiredLabel");function VI(e){return Vs(e).every(r=>r.isHidden||!r.isRequired?!0:F.isString(r.value)?!!r.value:r.value!=null)}i(VI,"areFormFieldsValid");function vh({input:e,matcher:r}){return!e||!r?!0:e.length>1?e.split("").every(t=>vh({input:t,matcher:r})):r instanceof RegExp?!!e.match(r):r.includes(e)}i(vh,"doesMatch");function qI({value:e,allowed:r,blocked:t}){const n=String(e),o=r?vh({input:n,matcher:r}):!0,s=t?vh({input:n,matcher:t}):!1;return o&&!s}i(qI,"isAllowed");function yh(e){const r=String(e.value);if(!e.value)return{filtered:r,blocked:""};const{filtered:t,blocked:n}=r.split("").reduce((o,s)=>(qI({...e,value:s})?o.filtered.push(s):o.blocked.push(s),o),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}i(yh,"filterTextInputValue");function WI({inputs:e,previousValue:r,event:t,inputBlockedCallback:n,newValueCallback:o}){const s=Fd(t,HTMLInputElement),a=F.hasKey(t,"data")&&Kh.isString(t.data)||"";if(a){const{blocked:u}=yh({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const l=yh({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==l&&(s.value=l),r!==l&&o(l)}i(WI,"textInputListener");var Pi=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(Pi||{});const Ne=sr()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:i(({hostClasses:e,cssVars:r})=>E`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${R["vira-form-foreground-color"].value};
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
                    font-weight: ${R["vira-form-label-font-weight"].value};
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
                ${Tr};
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
                ${oi};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Tr};
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
                border-radius: ${R["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${R["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Tr};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${r["vira-input-padding-horizontal"].value};
                border-radius: ${R["vira-form-radius"].value};
                background-color: ${R["vira-form-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            .left-side-icon {
                margin-right: calc(${r["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Tr};
                cursor: text;
                margin: ${r["vira-input-padding-vertical"].value} 0;
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
                    ${tu({elementBorderSize:"1px",noNesting:!0})}
                }
            }

            ::selection {
                background: ${R["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${R["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${R["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${oi};
            }

            button {
                ${Tr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Da["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${R["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${R["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${R["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${R["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${R["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${R["vira-form-error-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${Al};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,"styles"),events:{valueChange:ir(),inputBlocked:ir()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Oi(32)}},hostClasses:{"vira-input-disabled":i(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":i(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":i(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown"),"vira-input-error":i(({inputs:e})=>!!e.hasError,"vira-input-error")},render:i(({inputs:e,dispatch:r,state:t,updateState:n,events:o,host:s})=>{const{filtered:a}=yh({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),l=e.icon?b`
                  <${B.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${B}>
              `:oe,u=e.fitText?E`
                  width: ${t.forcedInputWidth}px;
              `:oe,d=z("mousedown",g=>{const m=Fd(g,HTMLElement,{useOriginalTarget:!0}),p=wr.instanceOf(s.shadowRoot.querySelector("input"),HTMLInputElement);m!==p&&(g.preventDefault(),p.focus())}),f=e.disableBrowserHelps||e.type==="password",h=b`
            <span class="input-wrapper" ${e.label?oe:d}>
                ${l}
                ${Lt(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${s$(({contentRect:g})=>{n({forcedInputWidth:g.width})})}
                        >
                            <pre>${a||e.placeholder||oe}</pre>
                        </span>
                    `)}

                <input
                    id=${Ur(e.label?t.randomId:void 0)}
                    aria-label=${Ur(e.label||void 0)}
                    autofocus=${!1}
                    type=${KI(e.type,t.showPassword)}
                    style=${u}
                    autocomplete=${Ur(f?"off":void 0)}
                    autocorrect=${Ur(f?"off":void 0)}
                    autocapitalize=${Ur(f?"off":void 0)}
                    spellcheck=${Ur(f?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${z("input",g=>{WI({inputs:e,previousValue:a,event:g,inputBlockedCallback(m){r(new o.inputBlocked(m))},newValueCallback(m){r(new o.valueChange(m))}})})}
                    placeholder=${Ur(e.placeholder||void 0)}
                    ${wo(e.attributePassthrough)}
                />

                ${Lt(!!(e.showClearButton&&e.value),b`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${z("mousedown",g=>{g.stopImmediatePropagation(),g.preventDefault()})}
                            ${z("click",()=>{e.disabled||r(new o.valueChange(""))})}
                        >
                            <${B.assign({icon:Dm})}></${B}>
                        </button>
                    `)}
                ${Lt(e.type==="password",b`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${z("mousedown",g=>{g.stopImmediatePropagation(),g.preventDefault()})}
                            ${z("click",()=>{n({showPassword:!t.showPassword})})}
                        >
                            <${B.assign({icon:t.showPassword?Am:Em})}></${B}>
                        </button>
                    `)}
                ${Lt(!!e.suffix,b`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?b`
                <label for=${t.randomId} ${d}>
                    <span class="input-label">${e.label}</span>
                    ${h}
                </label>
            `:h},"render")});function KI(e,r){return e==="password"&&r?"text":e||"text"}i(KI,"calculateEffectiveInputType");const Ke=sr()({tagName:"vira-select",state(){return{randomId:Oi(32),cleanup:void 0}},events:{valueChange:ir()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":i(({inputs:e})=>!!e.disabled,"vira-select-disabled"),"vira-select-error":i(({inputs:e})=>!!e.hasError,"vira-select-error"),"vira-select-not-raw":i(({inputs:e})=>!e.rawSelect,"vira-select-not-raw")},styles:i(({hostClasses:e,cssVars:r})=>E`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${R["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Tr};
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
                    color: ${R["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${r["vira-select-icon-padding"].value};
                }
            }

            & ${B} {
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

        .trigger-icon {
            width: 24px;
            aspect-ratio: 1;
        }

        ${e["vira-select-not-raw"].selector} {
            .select-wrapper {
                border-radius: ${R["vira-form-radius"].value};
                color: ${R["vira-form-foreground-color"].value};
                background-color: ${R["vira-form-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                cursor: pointer;

                & select {
                    padding: ${r["vira-select-padding-vertical"].value} 31px
                        ${r["vira-select-padding-vertical"].value}
                        ${r["vira-select-padding-horizontal"].value};

                    &:focus:focus-visible:not([aria-disabled='true']) ~ .focus-border {
                        ${tu({elementBorderSize:"1px",noNesting:!0})}
                    }
                }

                & .border-style {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: ${R["vira-form-radius"].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${R["vira-form-border-color"].value};
                    transition: border
                        ${Da["vira-interaction-animation-duration"].value};
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
                font-weight: ${R["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${Al}
            }
            ${B} {
                ${Al}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${R["vira-form-error-color"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanup?.();const n=[vo(t,"mousedown",o=>{const s=wr.instanceOf(t.shadowRoot.querySelector("select"),HTMLSelectElement);o.composedPath().includes(s)||(o.preventDefault(),o.stopPropagation(),s.showPicker&&s.showPicker())})];r({cleanup:i(()=>{n.forEach(o=>o())},"cleanup")})},cleanup({state:e,updateState:r}){e.cleanup?.(),r({cleanup:void 0})},render({inputs:e,state:r,dispatch:t,events:n}){const o=e.value||void 0,s=e.placeholder||o==null?b`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:oe,a=b`
            <span class="select-wrapper">
                <select
                    .value=${Ur(o)}
                    class=${At({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Ur(e.label?r.randomId:void 0)}
                    aria-label=${Ur(e.label||void 0)}
                    aria-disabled=${Ur(e.disabled?"true":void 0)}
                    ${z("input",l=>{const u=Fd(l,HTMLSelectElement),d=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(f=>f.value===o)),t(new n.valueChange(d))})}
                    ${wo(e.attributePassthrough?.select)}
                >
                    ${s}
                    ${e.options.map(l=>b`
                            <option
                                ?selected=${l.value===o}
                                aria-label=${l.label}
                                ?disabled=${l.disabled}
                                value=${l.value}
                            >
                                ${l.label}
                            </option>
                        `)}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${B.assign({icon:e.icon})}
                    class="input-icon"
                ></${B}>
                <${B.assign({icon:ou})}
                    class="trigger-icon"
                ></${B}>
            </span>
        `;return e.label?b`
                <label for=${r.randomId} ${wo(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${a}
                </label>
            `:a}}),Tt=sr()({tagName:"vira-form",events:{valueChange:ir(),validChange:ir()},styles:E`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const s=VI(e.fields);s!==n.lastIsValid&&(o({lastIsValid:s}),r(new t.validChange({allFieldsAreValid:s})));const a=In(e.fields).map(([l,u])=>u.isHidden?oe:u.type===Te.Checkbox?b`
                        <${ge.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:Nu(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Ko(u.testId):oe}
                            ${z(ge.events.valueChange,d=>{r(new t.valueChange({key:l,...u,value:d.detail}))})}
                        ></${ge}>
                    `:u.type===Te.Select?b`
                        <${Ke.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:Nu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Ko(u.testId):oe}
                            ${z(Ke.events.valueChange,d=>{r(new t.valueChange({key:l,...u,value:d.detail}))})}
                        ></${Ke}>
                    `:u.type===Te.Number?b`
                        <${Ne.assign({value:u.value?.toString()||"",disabled:e.isDisabled||u.isDisabled,allowedInputs:/\d/,hasError:u.hasError,icon:u.icon,label:Nu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,type:Pi.Number,attributePassthrough:{...u.min===void 0?{}:{min:String(u.min)},...u.max===void 0?{}:{max:String(u.max)},...u.step===void 0?{}:{step:String(u.step)}}})}
                            ${u.testId?Ko(u.testId):oe}
                            ${z(Ne.events.valueChange,d=>{const f=d.detail===""?void 0:Number(d.detail);r(new t.valueChange({key:l,...u,value:f}))})}
                        ></${Ne}>
                    `:b`
                        <${Ne.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:Nu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===Te.NewPassword?{autocomplete:"new-password"}:u.type===Te.ExistingPassword?{autocomplete:"password"}:u.type===Te.Email?{autocomplete:"email"}:{},type:[Te.NewPassword,Te.ExistingPassword,Te.PlainPassword].includes(u.type)?Pi.Password:u.type===Te.Email?Pi.Email:Pi.Default})}
                            ${u.testId?Ko(u.testId):oe}
                            ${z(Ne.events.valueChange,d=>{r(new t.valueChange({key:l,...u,value:d.detail}))})}
                        ></${Ne}>
                    `);return b`
            <form ${z("submit",l=>l.preventDefault())}>
                ${a}
                <slot></slot>
            </form>
        `}}),Bo=sr()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":i(({inputs:e})=>e.dominantDimension==="height","vira-image-height-constrained")},slotNames:["loading","error"],events:{imageLoad:ir(),imageError:ir()},styles:i(({hostClasses:e})=>E`
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
    `,"styles"),render({inputs:e,state:r,updateState:t,dispatch:n,events:o,slotNames:s}){const a=e.imageUrl,l=r.erroredUrls[a]?b`
                  <slot class="status-wrapper" name=${s.error}>
                      <${B.assign({icon:Tl})}
                          class="error"
                      ></${B}>
                  </slot>
              `:r.loadedUrls[a]?void 0:b`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${B.assign({icon:ii})}></${B}>
                    </slot>
                `;return b`
            ${Lt(!!l,l)}
            <img
                class=${At({hidden:!!l})}
                ${z("load",async()=>{e._debugLoadDelay&&await Vi(e._debugLoadDelay),t({loadedUrls:{...r.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${z("error",async u=>{e._debugLoadDelay&&await Vi(e._debugLoadDelay),t({erroredUrls:{...r.erroredUrls,[a]:!0}}),n(new o.imageError(u.error))})}
                src=${a}
            />
        `}}),Xn=sr()({tagName:"vira-link",state(){return{cleanup:void 0}},hostClasses:{"vira-link-link-styles":i(({inputs:e})=>!e.disableLinkStyles,"vira-link-link-styles")},styles:i(({hostClasses:e})=>E`
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
                color: ${R["vira-form-accent-primary-color"].value};
            }

            &:active a,
            & a:active {
                color: ${R["vira-form-accent-primary-active-color"].value};
            }
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanup?.();let n=!1;const o=[vo(t,"click",s=>{if(n)return;const a=wr.instanceOf(t.shadowRoot.querySelector("a"),HTMLAnchorElement);s.composedPath().includes(a)||(s.preventDefault(),s.stopPropagation(),n=!0,a.dispatchEvent(new MouseEvent(s.type,s)),n=!1)})];r({cleanup:i(()=>{o.forEach(s=>s())},"cleanup")})},cleanup({state:e,updateState:r}){e.cleanup?.(),r({cleanup:void 0})},render({inputs:e}){function r(t){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,t)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(i(r,"clickCallback"),e.link?.newTab)return b`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${wo(e.attributePassthrough?.a)}
                    style=${Ur(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const t=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return b`
                <a
                    href=${t}
                    rel="noopener noreferrer"
                    ${wo(e.attributePassthrough?.a)}
                    style=${Ur(e.stylePassthrough?.a)}
                    ${z("click",r)}
                >
                    <slot></slot>
                </a>
            `}}}),GI=["pagehide","pageshow","popstate"],Ro=sr()({tagName:"vira-modal",events:{modalClose:ir()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":i(({inputs:e})=>!!e.isMobileSize,"vira-modal-phone-size")},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:i(({hostClasses:e,cssVars:r})=>E`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${nu};
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
            ${Li.modal}

            &[open] {
                display: flex;
            }
            &::backdrop {
                background: ${R["vira-form-modal-backdrop-color"].value};
                backdrop-filter: ${r["vira-modal-backdrop-filter"].value};
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
                            color: ${R["vira-form-secondary-body-foreground"].value};
                        }
                    }

                    & button.close {
                        ${Tr};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${R["vira-form-radius"].value};

                        &:hover {
                            background-color: ${R["vira-form-selection-hover-color"].value};
                        }

                        & ${B} {
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
    `,"styles"),render({inputs:e,state:r,updateState:t,events:n,dispatch:o,slotNames:s}){if(r.dialogElement&&e.open!==r.dialogElement.open&&(e.open?r.dialogElement.showModal():r.dialogElement.close()),r.previousOpenValue!==e.open&&(r.cleanup?.(),t({previousOpenValue:e.open}),e.open)){const l=GI.map(u=>U0(u,()=>{o(new n.modalClose)}));t({cleanup:i(()=>{l.forEach(u=>u())},"cleanup")})}function a(){e.open&&(r.cleanup?.(),o(new n.modalClose))}return i(a,"close"),b`
            <dialog
                ${Ji(l=>{t({dialogElement:wr.instanceOf(l,HTMLDialogElement)})})}
                ${z("close",()=>{a()})}
                ${z("mousedown",l=>{r.contentElement&&!l.composedPath().includes(r.contentElement)&&!e.blockLightDismissal&&a()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Ji(l=>{t({contentElement:wr.instanceOf(l,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${s.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?b`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:oe}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${z("click",()=>{r.dialogElement?.close()})}
                        >
                            <${B.assign({icon:Fm})}></${B}>
                        </button>
                    </div>
                    ${e.open?b`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:oe}
                </div>
            </dialog>
        `}}),Qn=sr()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":i(({state:e,inputs:r})=>e.isOverflowing||!!r.useSmall,"vira-overflow-switch-show-small")},styles:i(({hostClasses:e})=>E`
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
    `,"styles"),cleanup({state:e,updateState:r}){e.cleanup?.(),r({cleanup:void 0})},render({slotNames:e,updateState:r,inputs:t,host:n,state:o}){return b`
            <div
                class="large"
                ${Ji(s=>{if(!t.automaticallySwitch)return;const a={elementToTest:s,host:n,updateState:r},l=new ResizeObserver(()=>{Wf(a)});l.observe(n),l.observe(s);const u=vo(s,"slotchange",()=>{Wf(a)});Wf(a),o.cleanup?.(),r({cleanup(){l.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function Wf({elementToTest:e,host:r,updateState:t}){const n=e.scrollWidth>r.clientWidth;t({isOverflowing:n})}i(Wf,"updateOverflowing");const fo=sr()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:i(({cssVars:e})=>E`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${R["vira-form-accent-primary-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${R["vira-form-filled-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,"styles"),render({inputs:e,host:r}){const t=e.min||0,o=(e.max||100)-t,s=e.value-t,a=G6(Math.round(s/o*100),{min:0,max:100});return $I(r,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),b`
            <div
                class="progress-bar"
                style=${a?E`
                          width: ${a}%;
                      `:E`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});var Nl;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(Nl||(Nl={}));const Tm={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:Nl.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},si=cr(Tm,e=>e),$e={...si,name:"name",hexString:"hexString"},Zn=cr(Tm,(e,r)=>{const t=F.isEnumValue(e,Nl)&&F.isEnumValue(e,si)?e:"conversionFormat"in r&&r.conversionFormat&&F.isEnumValue(r.conversionFormat,Nl)&&F.isEnumValue(r.conversionFormat,si)?r.conversionFormat:void 0;return zr.isTruthy(t,`Invalid conversion format for color format '${e}' ${x(r)}.`),{...r,colorFormat:e,conversionFormat:t,rawSyntax:wr.isEnumValue("rawSyntax"in r&&r.rawSyntax?r.rawSyntax:e,$e)}});Qo(Vs(Tm),e=>({key:e.colorSpace,value:e.colorSpace}),{});In(Zn).reduce((e,[r,t])=>(es(e,t.colorSpace,()=>({}))[r]=t,e),{});function HI(e){return e.startsWith("rgb")?$e.rgb:e.startsWith("hsl")?$e.hsl:e.startsWith("hwb")?$e.hwb:e.startsWith("oklab")?$e.oklab:e.startsWith("oklch")?$e.oklch:e.startsWith("lab")?$e.lab:e.startsWith("lch")?$e.lch:e.startsWith("#")?$e.hexString:$e.name}i(HI,"getColorSyntaxFromCssString");const wh={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in wh)Object.freeze(wh[e]);const Pl=Object.freeze(wh),ZI=Object.keys(Pl).reduce((e,r)=>r.length>e.length?r:e),JI=Zc(cr(Pl,(e,r)=>wn(Object.entries(Pl),([n])=>n,(n,[,o])=>n===e?!1:F.deepEquals(o,r))),(e,r)=>!!r.length),Q1=Object.entries(JI).reduce((e,r)=>{const t=[e[0],...e[1]].join(", ");return[r[0],...r[1]].join(", ").length>t.length?r:e}).reduce((e,r)=>F.isArray(r)?[...e,...r]:[...e,r],[]),ev=Math.max(ZI.length,Q1.length+(Q1.length-1)*2),hk=i((e,r)=>{if(typeof e=="number"){if(r===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(r===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(r===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(r===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},"parseNumber"),YI={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},XI=i(e=>hk(YI[e.toLowerCase()],6),"parseNamed"),QI=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,eO=i(e=>{let r;return(r=e.match(QI))?hk(parseInt(r[1],16),r[1].length):void 0},"parseHex"),Yo="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",ul=`${Yo}%`,Nm=`(?:${Yo}%|${Yo})`,rO=`(?:${Yo}(deg|grad|rad|turn)|${Yo})`,ia="\\s*,\\s*",tO=new RegExp(`^rgba?\\(\\s*${Yo}${ia}${Yo}${ia}${Yo}\\s*(?:,\\s*${Nm}\\s*)?\\)$`),nO=new RegExp(`^rgba?\\(\\s*${ul}${ia}${ul}${ia}${ul}\\s*(?:,\\s*${Nm}\\s*)?\\)$`),oO=i(e=>{let r={mode:"rgb"},t;if(t=e.match(tO))t[1]!==void 0&&(r.r=t[1]/255),t[2]!==void 0&&(r.g=t[2]/255),t[3]!==void 0&&(r.b=t[3]/255);else if(t=e.match(nO))t[1]!==void 0&&(r.r=t[1]/100),t[2]!==void 0&&(r.g=t[2]/100),t[3]!==void 0&&(r.b=t[3]/100);else return;return t[4]!==void 0?r.alpha=Math.max(0,Math.min(1,t[4]/100)):t[5]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[5]))),r},"parseRgbLegacy"),$h=i((e,r)=>e===void 0?void 0:typeof e!="object"?Dh(e):e.mode!==void 0?e:r?{...e,mode:r}:void 0,"prepare"),Yi=i((e="rgb")=>r=>(r=$h(r,e))!==void 0?r.mode===e?r:Jn[r.mode][e]?Jn[r.mode][e](r):e==="rgb"?Jn[r.mode].rgb(r):Jn.rgb[e](Jn[r.mode].rgb(r)):void 0,"converter"),Jn={},gk={},Ic=[],mk={},iO=i(e=>e,"identity"),Ue=i(e=>(Jn[e.mode]={...Jn[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(r=>{Jn[r]||(Jn[r]={}),Jn[r][e.mode]=e.fromMode[r]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(r=>{if(e.ranges[r]===void 0&&(e.ranges[r]=[0,1]),!e.interpolate[r])throw new Error(`Missing interpolator for: ${r}`);typeof e.interpolate[r]=="function"&&(e.interpolate[r]={use:e.interpolate[r]}),e.interpolate[r].fixup||(e.interpolate[r].fixup=iO)}),gk[e.mode]=e,(e.parse||[]).forEach(r=>{sO(r,e.mode)}),Yi(e.mode)),"useMode"),Rd=i(e=>gk[e],"getMode"),sO=i((e,r)=>{if(typeof e=="string"){if(!r)throw new Error("'mode' required when 'parser' is a string");mk[e]=r}else typeof e=="function"&&Ic.indexOf(e)<0&&Ic.push(e)},"useParser"),kh=/[^\x00-\x7F]|[a-zA-Z_]/,aO=/[^\x00-\x7F]|[-\w]/,_={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let ie=0;function Pu(e){let r=e[ie],t=e[ie+1];return r==="-"||r==="+"?/\d/.test(t)||t==="."&&/\d/.test(e[ie+2]):r==="."?/\d/.test(t):/\d/.test(r)}i(Pu,"is_num");function xh(e){if(ie>=e.length)return!1;let r=e[ie];if(kh.test(r))return!0;if(r==="-"){if(e.length-ie<2)return!1;let t=e[ie+1];return!!(t==="-"||kh.test(t))}return!1}i(xh,"is_ident");const lO={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function ja(e){let r="";if((e[ie]==="-"||e[ie]==="+")&&(r+=e[ie++]),r+=Iu(e),e[ie]==="."&&/\d/.test(e[ie+1])&&(r+=e[ie++]+Iu(e)),(e[ie]==="e"||e[ie]==="E")&&((e[ie+1]==="-"||e[ie+1]==="+")&&/\d/.test(e[ie+2])?r+=e[ie++]+e[ie++]+Iu(e):/\d/.test(e[ie+1])&&(r+=e[ie++]+Iu(e))),xh(e)){let t=Oc(e);return t==="deg"||t==="rad"||t==="turn"||t==="grad"?{type:_.Hue,value:r*lO[t]}:void 0}return e[ie]==="%"?(ie++,{type:_.Percentage,value:+r}):{type:_.Number,value:+r}}i(ja,"num");function Iu(e){let r="";for(;/\d/.test(e[ie]);)r+=e[ie++];return r}i(Iu,"digits");function Oc(e){let r="";for(;ie<e.length&&aO.test(e[ie]);)r+=e[ie++];return r}i(Oc,"ident");function uO(e){let r=Oc(e);return e[ie]==="("?(ie++,{type:_.Function,value:r}):r==="none"?{type:_.None,value:void 0}:{type:_.Ident,value:r}}i(uO,"identlike");function cO(e=""){let r=e.trim(),t=[],n;for(ie=0;ie<r.length;){if(n=r[ie++],n===`
`||n==="	"||n===" "){for(;ie<r.length&&(r[ie]===`
`||r[ie]==="	"||r[ie]===" ");)ie++;continue}if(n===",")return;if(n===")"){t.push({type:_.ParenClose});continue}if(n==="+"){if(ie--,Pu(r)){t.push(ja(r));continue}return}if(n==="-"){if(ie--,Pu(r)){t.push(ja(r));continue}if(xh(r)){t.push({type:_.Ident,value:Oc(r)});continue}return}if(n==="."){if(ie--,Pu(r)){t.push(ja(r));continue}return}if(n==="/"){for(;ie<r.length&&(r[ie]===`
`||r[ie]==="	"||r[ie]===" ");)ie++;let o;if(Pu(r)&&(o=ja(r),o.type!==_.Hue)){t.push({type:_.Alpha,value:o});continue}if(xh(r)&&Oc(r)==="none"){t.push({type:_.Alpha,value:{type:_.None,value:void 0}});continue}return}if(/\d/.test(n)){ie--,t.push(ja(r));continue}if(kh.test(n)){ie--,t.push(uO(r));continue}return}return t}i(cO,"tokenize");function dO(e){e._i=0;let r=e[e._i++];if(!r||r.type!==_.Function||r.value!=="color"||(r=e[e._i++],r.type!==_.Ident))return;const t=mk[r.value];if(!t)return;const n={mode:t},o=pk(e,!1);if(!o)return;const s=Rd(t).channels;for(let a=0,l,u;a<s.length;a++)l=o[a],u=s[a],l.type!==_.None&&(n[u]=l.type===_.Number?l.value:l.value/100,u==="alpha"&&(n[u]=Math.max(0,Math.min(1,n[u]))));return n}i(dO,"parseColorSyntax");function pk(e,r){const t=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===_.None||n.type===_.Number||n.type===_.Alpha||n.type===_.Percentage||r&&n.type===_.Hue){t.push(n);continue}if(n.type===_.ParenClose){if(e._i<e.length)return;continue}return}if(!(t.length<3||t.length>4)){if(t.length===4){if(t[3].type!==_.Alpha)return;t[3]=t[3].value}return t.length===3&&t.push({type:_.None,value:void 0}),t.every(o=>o.type!==_.Alpha)?t:void 0}}i(pk,"consumeCoords");function fO(e,r){e._i=0;let t=e[e._i++];if(!t||t.type!==_.Function)return;let n=pk(e,r);if(n)return n.unshift(t.value),n}i(fO,"parseModernSyntax");const Dh=i(e=>{if(typeof e!="string")return;const r=cO(e),t=r?fO(r,!0):void 0;let n,o=0,s=Ic.length;for(;o<s;)if((n=Ic[o++](e,t))!==void 0)return n;return r?dO(r):void 0},"parse");function hO(e,r){if(!r||r[0]!=="rgb"&&r[0]!=="rgba")return;const t={mode:"rgb"},[,n,o,s,a]=r;if(!(n.type===_.Hue||o.type===_.Hue||s.type===_.Hue))return n.type!==_.None&&(t.r=n.type===_.Number?n.value/255:n.value/100),o.type!==_.None&&(t.g=o.type===_.Number?o.value/255:o.value/100),s.type!==_.None&&(t.b=s.type===_.Number?s.value/255:s.value/100),a.type!==_.None&&(t.alpha=Math.min(1,Math.max(0,a.type===_.Number?a.value:a.value/100))),t}i(hO,"parseRgb");const gO=i(e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,"parseTransparent"),mO=i((e,r,t)=>e+t*(r-e),"lerp"),pO=i(e=>{let r=[];for(let t=0;t<e.length-1;t++){let n=e[t],o=e[t+1];n===void 0&&o===void 0?r.push(void 0):n!==void 0&&o!==void 0?r.push([n,o]):r.push(n!==void 0?[n,n]:[o,o])}return r},"get_classes"),bO=i(e=>r=>{let t=pO(r);return n=>{let o=n*t.length,s=n>=1?t.length-1:Math.max(Math.floor(o),0),a=t[s];return a===void 0?void 0:e(a[0],a[1],o-s)}},"interpolatorPiecewise"),q=bO(mO),Kr=i(e=>{let r=!1,t=e.map(n=>n!==void 0?(r=!0,n):1);return r?t:e},"fixupAlpha"),Ca={mode:"rgb",channels:["r","g","b","alpha"],parse:[hO,eO,oO,XI,gO,"srgb"],serialize:"srgb",interpolate:{r:q,g:q,b:q,alpha:{use:q,fixup:Kr}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},Kf=i((e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),"linearize$2"),rv=i(e=>{let r=Kf(e.r),t=Kf(e.g),n=Kf(e.b),o={mode:"xyz65",x:.5766690429101305*r+.1855582379065463*t+.1882286462349947*n,y:.297344975250536*r+.6273635662554661*t+.0752914584939979*n,z:.0270313613864123*r+.0706888525358272*t+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertA98ToXyz65"),Gf=i(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),"gamma$2"),tv=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"a98",r:Gf(e*2.0415879038107465-r*.5650069742788597-.3447313507783297*t),g:Gf(e*-.9692436362808798+r*1.8759675015077206+.0415550574071756*t),b:Gf(e*.0134442806320312-r*.1183623922310184+1.0151749943912058*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToA98"),Hf=i((e=0)=>{const r=Math.abs(e);return r<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((r+.055)/1.055,2.4)},"fn$3"),Ea=i(({r:e,g:r,b:t,alpha:n})=>{let o={mode:"lrgb",r:Hf(e),g:Hf(r),b:Hf(t)};return n!==void 0&&(o.alpha=n),o},"convertRgbToLrgb"),ds=i(e=>{let{r,g:t,b:n,alpha:o}=Ea(e),s={mode:"xyz65",x:.4123907992659593*r+.357584339383878*t+.1804807884018343*n,y:.2126390058715102*r+.715168678767756*t+.0721923153607337*n,z:.0193308187155918*r+.119194779794626*t+.9505321522496607*n};return o!==void 0&&(s.alpha=o),s},"convertRgbToXyz65"),Zf=i((e=0)=>{const r=Math.abs(e);return r>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(r,1/2.4)-.055):e*12.92},"fn$2"),Aa=i(({r:e,g:r,b:t,alpha:n},o="rgb")=>{let s={mode:o,r:Zf(e),g:Zf(r),b:Zf(t)};return n!==void 0&&(s.alpha=n),s},"convertLrgbToRgb"),fs=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Aa({r:e*3.2409699419045226-r*1.537383177570094-.4986107602930034*t,g:e*-.9692436362808796+r*1.8759675015077204+.0415550574071756*t,b:e*.0556300796969936-r*.2039769588889765+1.0569715142428784*t});return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRgb"),vO={...Ca,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:i(e=>tv(ds(e)),"rgb"),xyz65:tv},toMode:{rgb:i(e=>fs(rv(e)),"rgb"),xyz65:rv}},ut=i(e=>(e=e%360)<0?e+360:e,"normalizeHue"),yO=i((e,r)=>e.map((t,n,o)=>{if(t===void 0)return t;let s=ut(t);return n===0||e[n-1]===void 0?s:r(s-ut(o[n-1]))}).reduce((t,n)=>!t.length||n===void 0||t[t.length-1]===void 0?(t.push(n),t):(t.push(n+t[t.length-1]),t),[]),"hue"),Fo=i(e=>yO(e,r=>Math.abs(r)<=180?r:r-360*Math.sign(r)),"fixupHueShorter"),Jr=[-.14861,1.78277,-.29227,-.90649,1.97294,0],wO=Math.PI/180,$O=180/Math.PI;let nv=Jr[3]*Jr[4],ov=Jr[1]*Jr[4],iv=Jr[1]*Jr[2]-Jr[0]*Jr[3];const kO=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(iv*t+e*nv-r*ov)/(iv+nv-ov),s=t-o,a=(Jr[4]*(r-o)-Jr[2]*s)/Jr[3],l={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(s*s+a*a)/(Jr[4]*o*(1-o))};return l.s&&(l.h=Math.atan2(a,s)*$O-120),n!==void 0&&(l.alpha=n),l},"convertRgbToCubehelix"),xO=i(({h:e,s:r,l:t,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*wO,t===void 0&&(t=0);let s=r===void 0?0:r*t*(1-t),a=Math.cos(e),l=Math.sin(e);return o.r=t+s*(Jr[0]*a+Jr[1]*l),o.g=t+s*(Jr[2]*a+Jr[3]*l),o.b=t+s*(Jr[4]*a+Jr[5]*l),n!==void 0&&(o.alpha=n),o},"convertCubehelixToRgb"),Ld=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.s||!r.s)return 0;let t=ut(e.h),n=ut(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*r.s)*o},"differenceHueSaturation"),DO=i((e,r)=>{if(e.h===void 0||r.h===void 0)return 0;let t=ut(e.h),n=ut(r.h);return Math.abs(n-t)>180?t-(n-360*Math.sign(n-t)):n-t},"differenceHueNaive"),jd=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.c||!r.c)return 0;let t=ut(e.h),n=ut(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*r.c)*o},"differenceHueChroma"),CO=i((e="rgb",r=[1,1,1,0])=>{let t=Rd(e),n=t.channels,o=t.difference,s=Yi(e);return(a,l)=>{let u=s(a),d=s(l);return Math.sqrt(n.reduce((f,h,g)=>{let m=o[h]?o[h](u,d):u[h]-d[h];return f+(r[g]||0)*Math.pow(isNaN(m)?0:m,2)},0))}},"differenceEuclidean"),To=i(e=>{let r=e.reduce((n,o)=>{if(o!==void 0){let s=o*Math.PI/180;n.sin+=Math.sin(s),n.cos+=Math.cos(s)}return n},{sin:0,cos:0}),t=Math.atan2(r.sin,r.cos)*180/Math.PI;return t<0?360+t:t},"averageAngle"),EO={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:kO},toMode:{rgb:xO},interpolate:{h:{use:q,fixup:Fo},s:q,l:q,alpha:{use:q,fixup:Kr}},difference:{h:Ld},average:{h:To}},ai=i(({l:e,a:r,b:t,alpha:n},o="lch")=>{r===void 0&&(r=0),t===void 0&&(t=0);let s=Math.sqrt(r*r+t*t),a={mode:o,l:e,c:s};return s&&(a.h=ut(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(a.alpha=n),a},"convertLabToLch"),li=i(({l:e,c:r,h:t,alpha:n},o="lab")=>{t===void 0&&(t=0);let s={mode:o,l:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(s.alpha=n),s},"convertLchToLab"),bk=Math.pow(29,3)/Math.pow(3,3),vk=Math.pow(6,3)/Math.pow(29,3),Ir={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},js={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let Jf=i(e=>Math.pow(e,3)>vk?Math.pow(e,3):(116*e-16)/bk,"fn$1");const yk=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,s=r/500+o,a=o-t/200,l={mode:"xyz65",x:Jf(s)*js.X,y:Jf(o)*js.Y,z:Jf(a)*js.Z};return n!==void 0&&(l.alpha=n),l},"convertLab65ToXyz65"),_d=i(e=>fs(yk(e)),"convertLab65ToRgb"),Yf=i(e=>e>vk?Math.cbrt(e):(bk*e+16)/116,"f$1"),wk=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Yf(e/js.X),s=Yf(r/js.Y),a=Yf(t/js.Z),l={mode:"lab65",l:116*s-16,a:500*(o-s),b:200*(s-a)};return n!==void 0&&(l.alpha=n),l},"convertXyz65ToLab65"),Ud=i(e=>{let r=wk(ds(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab65"),Bc=1,$k=1,Il=26/180*Math.PI,Rc=Math.cos(Il),Lc=Math.sin(Il),kk=100/Math.log(139/100),Ch=i(({l:e,c:r,h:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"lab65",l:(Math.exp(e*Bc/kk)-1)/.0039},s=(Math.exp(.0435*r*$k*Bc)-1)/.075,a=s*Math.cos(t/180*Math.PI-Il),l=s*Math.sin(t/180*Math.PI-Il);return o.a=a*Rc-l/.83*Lc,o.b=a*Lc+l/.83*Rc,n!==void 0&&(o.alpha=n),o},"convertDlchToLab65"),Eh=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=r*Rc+t*Lc,s=.83*(t*Rc-r*Lc),a=Math.sqrt(o*o+s*s),l={mode:"dlch",l:kk/Bc*Math.log(1+.0039*e),c:Math.log(1+.075*a)/(.0435*$k*Bc)};return l.c&&(l.h=ut((Math.atan2(s,o)+Il)/Math.PI*180)),n!==void 0&&(l.alpha=n),l},"convertLab65ToDlch"),sv=i(e=>Ch(ai(e,"dlch")),"convertDlabToLab65"),av=i(e=>li(Eh(e),"dlab"),"convertLab65ToDlab"),AO={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:sv,rgb:i(e=>_d(sv(e)),"rgb")},fromMode:{lab65:av,rgb:i(e=>av(Ud(e)),"rgb")},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:q,a:q,b:q,alpha:{use:q,fixup:Kr}}},SO={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:Ch,dlab:i(e=>li(e,"dlab"),"dlab"),rgb:i(e=>_d(Ch(e)),"rgb")},fromMode:{lab65:Eh,dlab:i(e=>ai(e,"dlch"),"dlab"),rgb:i(e=>Eh(Ud(e)),"rgb")},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:q,c:q,h:{use:q,fixup:Fo},alpha:{use:q,fixup:Kr}},difference:{h:jd},average:{h:To}};function MO({h:e,s:r,i:t,alpha:n}){e=ut(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:t*(1+r*(3/(2-o)-1)),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1-r)};break;case 1:s={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1+r*(3/(2-o)-1)),b:t*(1-r)};break;case 2:s={r:t*(1-r),g:t*(1+r*(3/(2-o)-1)),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;case 3:s={r:t*(1-r),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1+r*(3/(2-o)-1))};break;case 4:s={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3/(2-o)-1))};break;case 5:s={r:t*(1+r*(3/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;default:s={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}i(MO,"convertHsiToRgb");function FO({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),s=Math.min(e,r,t),a={mode:"hsi",s:e+r+t===0?0:1-3*s/(e+r+t),i:(e+r+t)/3};return o-s!==0&&(a.h=(o===e?(r-t)/(o-s)+(r<t)*6:o===r?(t-e)/(o-s)+2:(e-r)/(o-s)+4)*60),n!==void 0&&(a.alpha=n),a}i(FO,"convertRgbToHsi");const TO={mode:"hsi",toMode:{rgb:MO},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:FO},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:q,fixup:Fo},s:q,i:q,alpha:{use:q,fixup:Kr}},difference:{h:Ld},average:{h:To}};function NO({h:e,s:r,l:t,alpha:n}){e=ut(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=t+r*(t<.5?t:1-t),s=o-(o-t)*2*Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:o,g:s,b:2*t-o};break;case 1:a={r:s,g:o,b:2*t-o};break;case 2:a={r:2*t-o,g:o,b:s};break;case 3:a={r:2*t-o,g:s,b:o};break;case 4:a={r:s,g:2*t-o,b:o};break;case 5:a={r:o,g:2*t-o,b:s};break;default:a={r:2*t-o,g:2*t-o,b:2*t-o}}return a.mode="rgb",n!==void 0&&(a.alpha=n),a}i(NO,"convertHslToRgb");function PO({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),s=Math.min(e,r,t),a={mode:"hsl",s:o===s?0:(o-s)/(1-Math.abs(o+s-1)),l:.5*(o+s)};return o-s!==0&&(a.h=(o===e?(r-t)/(o-s)+(r<t)*6:o===r?(t-e)/(o-s)+2:(e-r)/(o-s)+4)*60),n!==void 0&&(a.alpha=n),a}i(PO,"convertRgbToHsl");const IO=i((e,r)=>{switch(r){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},"hueToDeg"),OO=new RegExp(`^hsla?\\(\\s*${rO}${ia}${ul}${ia}${ul}\\s*(?:,\\s*${Nm}\\s*)?\\)$`),BO=i(e=>{let r=e.match(OO);if(!r)return;let t={mode:"hsl"};return r[3]!==void 0?t.h=+r[3]:r[1]!==void 0&&r[2]!==void 0&&(t.h=IO(r[1],r[2])),r[4]!==void 0&&(t.s=Math.min(Math.max(0,r[4]/100),1)),r[5]!==void 0&&(t.l=Math.min(Math.max(0,r[5]/100),1)),r[6]!==void 0?t.alpha=Math.max(0,Math.min(1,r[6]/100)):r[7]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[7]))),t},"parseHslLegacy");function RO(e,r){if(!r||r[0]!=="hsl"&&r[0]!=="hsla")return;const t={mode:"hsl"},[,n,o,s,a]=r;if(n.type!==_.None){if(n.type===_.Percentage)return;t.h=n.value}if(o.type!==_.None){if(o.type===_.Hue)return;t.s=o.value/100}if(s.type!==_.None){if(s.type===_.Hue)return;t.l=s.value/100}return a.type!==_.None&&(t.alpha=Math.min(1,Math.max(0,a.type===_.Number?a.value:a.value/100))),t}i(RO,"parseHsl");const xk={mode:"hsl",toMode:{rgb:NO},fromMode:{rgb:PO},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[RO,BO],serialize:i(e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:q,fixup:Fo},s:q,l:q,alpha:{use:q,fixup:Kr}},difference:{h:Ld},average:{h:To}};function Dk({h:e,s:r,v:t,alpha:n}){e=ut(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:t,g:t*(1-r*o),b:t*(1-r)};break;case 1:s={r:t*(1-r*o),g:t,b:t*(1-r)};break;case 2:s={r:t*(1-r),g:t,b:t*(1-r*o)};break;case 3:s={r:t*(1-r),g:t*(1-r*o),b:t};break;case 4:s={r:t*(1-r*o),g:t*(1-r),b:t};break;case 5:s={r:t,g:t*(1-r),b:t*(1-r*o)};break;default:s={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}i(Dk,"convertHsvToRgb");function Ck({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),s=Math.min(e,r,t),a={mode:"hsv",s:o===0?0:1-s/o,v:o};return o-s!==0&&(a.h=(o===e?(r-t)/(o-s)+(r<t)*6:o===r?(t-e)/(o-s)+2:(e-r)/(o-s)+4)*60),n!==void 0&&(a.alpha=n),a}i(Ck,"convertRgbToHsv");const Ek={mode:"hsv",toMode:{rgb:Dk},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:Ck},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:q,fixup:Fo},s:q,v:q,alpha:{use:q,fixup:Kr}},difference:{h:Ld},average:{h:To}};function LO({h:e,w:r,b:t,alpha:n}){if(r===void 0&&(r=0),t===void 0&&(t=0),r+t>1){let o=r+t;r/=o,t/=o}return Dk({h:e,s:t===1?1:1-r/(1-t),v:1-t,alpha:n})}i(LO,"convertHwbToRgb");function jO(e){let r=Ck(e);if(r===void 0)return;let t=r.s!==void 0?r.s:0,n=r.v!==void 0?r.v:0,o={mode:"hwb",w:(1-t)*n,b:1-n};return r.h!==void 0&&(o.h=r.h),r.alpha!==void 0&&(o.alpha=r.alpha),o}i(jO,"convertRgbToHwb");function _O(e,r){if(!r||r[0]!=="hwb")return;const t={mode:"hwb"},[,n,o,s,a]=r;if(n.type!==_.None){if(n.type===_.Percentage)return;t.h=n.value}if(o.type!==_.None){if(o.type===_.Hue)return;t.w=o.value/100}if(s.type!==_.None){if(s.type===_.Hue)return;t.b=s.value/100}return a.type!==_.None&&(t.alpha=Math.min(1,Math.max(0,a.type===_.Number?a.value:a.value/100))),t}i(_O,"ParseHwb");const UO={mode:"hwb",toMode:{rgb:LO},fromMode:{rgb:jO},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[_O],serialize:i(e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:q,fixup:Fo},w:q,b:q,alpha:{use:q,fixup:Kr}},difference:{h:DO},average:{h:To}},Ak=203,zd=.1593017578125,Sk=78.84375,Vd=.8359375,qd=18.8515625,Wd=18.6875;function Xf(e){if(e<0)return 0;const r=Math.pow(e,1/Sk);return 1e4*Math.pow(Math.max(0,r-Vd)/(qd-Wd*r),1/zd)}i(Xf,"transferPqDecode");function Qf(e){if(e<0)return 0;const r=Math.pow(e/1e4,zd);return Math.pow((Vd+qd*r)/(1+Wd*r),Sk)}i(Qf,"transferPqEncode");const e0=i(e=>Math.max(e/Ak,0),"toRel"),lv=i(({i:e,t:r,p:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=Xf(e+.008609037037932761*r+.11102962500302593*t),s=Xf(e-.00860903703793275*r-.11102962500302599*t),a=Xf(e+.5600313357106791*r-.32062717498731885*t),l={mode:"xyz65",x:e0(2.070152218389422*o-1.3263473389671556*s+.2066510476294051*a),y:e0(.3647385209748074*o+.680566024947227*s-.0453045459220346*a),z:e0(-.049747207535812*o-.0492609666966138*s+1.1880659249923042*a)};return n!==void 0&&(l.alpha=n),l},"convertItpToXyz65"),r0=i((e=0)=>Math.max(e*Ak,0),"toAbs"),uv=i(({x:e,y:r,z:t,alpha:n})=>{const o=r0(e),s=r0(r),a=r0(t),l=Qf(.3592832590121217*o+.6976051147779502*s-.0358915932320289*a),u=Qf(-.1920808463704995*o+1.1004767970374323*s+.0753748658519118*a),d=Qf(.0070797844607477*o+.0748396662186366*s+.8433265453898765*a),f=.5*l+.5*u,h=1.61376953125*l-3.323486328125*u+1.709716796875*d,g=4.378173828125*l-4.24560546875*u-.132568359375*d,m={mode:"itp",i:f,t:h,p:g};return n!==void 0&&(m.alpha=n),m},"convertXyz65ToItp"),zO={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:lv,rgb:i(e=>fs(lv(e)),"rgb")},fromMode:{xyz65:uv,rgb:i(e=>uv(ds(e)),"rgb")},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:q,t:q,p:q,alpha:{use:q,fixup:Kr}}},VO=134.03437499999998,qO=16295499532821565e-27,t0=i(e=>{if(e<0)return 0;let r=Math.pow(e/1e4,zd);return Math.pow((Vd+qd*r)/(1+Wd*r),VO)},"jabPqEncode"),n0=i((e=0)=>Math.max(e*203,0),"abs"),Mk=i(({x:e,y:r,z:t,alpha:n})=>{e=n0(e),r=n0(r),t=n0(t);let o=1.15*e-.15*t,s=.66*r+.34*e,a=t0(.41478972*o+.579999*s+.014648*t),l=t0(-.20151*o+1.120649*s+.0531008*t),u=t0(-.0166008*o+.2648*s+.6684799*t),d=(a+l)/2,f={mode:"jab",j:.44*d/(1-.56*d)-qO,a:3.524*a-4.066708*l+.542708*u,b:.199076*a+1.096799*l-1.295875*u};return n!==void 0&&(f.alpha=n),f},"convertXyz65ToJab"),WO=134.03437499999998,cv=16295499532821565e-27,o0=i(e=>{if(e<0)return 0;let r=Math.pow(e,1/WO);return 1e4*Math.pow((Vd-r)/(Wd*r-qd),1/zd)},"jabPqDecode"),i0=i(e=>e/203,"rel"),Fk=i(({j:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+cv)/(.44+.56*(e+cv)),s=o0(o+.13860504*r+.058047316*t),a=o0(o-.13860504*r-.058047316*t),l=o0(o-.096019242*r-.8118919*t),u={mode:"xyz65",x:i0(1.661373024652174*s-.914523081304348*a+.23136208173913045*l),y:i0(-.3250758611844533*s+1.571847026732543*a-.21825383453227928*l),z:i0(-.090982811*s-.31272829*a+1.5227666*l)};return n!==void 0&&(u.alpha=n),u},"convertJabToXyz65"),Tk=i(e=>{let r=Mk(ds(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToJab"),Nk=i(e=>fs(Fk(e)),"convertJabToRgb"),KO={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:Tk,xyz65:Mk},toMode:{rgb:Nk,xyz65:Fk},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:q,a:q,b:q,alpha:{use:q,fixup:Kr}}},dv=i(({j:e,a:r,b:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),s={mode:"jch",j:e,c:o};return o&&(s.h=ut(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},"convertJabToJch"),fv=i(({j:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"jab",j:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertJchToJab"),GO={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:fv,rgb:i(e=>Nk(fv(e)),"rgb")},fromMode:{rgb:i(e=>dv(Tk(e)),"rgb"),jab:dv},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:q,fixup:Fo},c:q,j:q,alpha:{use:q,fixup:Kr}},difference:{h:jd},average:{h:To}},Kd=Math.pow(29,3)/Math.pow(3,3),Pm=Math.pow(6,3)/Math.pow(29,3);let s0=i(e=>Math.pow(e,3)>Pm?Math.pow(e,3):(116*e-16)/Kd,"fn");const Im=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,s=r/500+o,a=o-t/200,l={mode:"xyz50",x:s0(s)*Ir.X,y:s0(o)*Ir.Y,z:s0(a)*Ir.Z};return n!==void 0&&(l.alpha=n),l},"convertLabToXyz50"),iu=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Aa({r:e*3.1341359569958707-r*1.6173863321612538-.4906619460083532*t,g:e*-.978795502912089+r*1.916254567259524+.03344273116131949*t,b:e*.07195537988411677-r*.2289768264158322+1.405386058324125*t});return n!==void 0&&(o.alpha=n),o},"convertXyz50ToRgb"),Pk=i(e=>iu(Im(e)),"convertLabToRgb"),su=i(e=>{let{r,g:t,b:n,alpha:o}=Ea(e),s={mode:"xyz50",x:.436065742824811*r+.3851514688337912*t+.14307845442264197*n,y:.22249319175623702*r+.7168870538238823*t+.06061979053616537*n,z:.013923904500943465*r+.09708128566574634*t+.7140993584005155*n};return o!==void 0&&(s.alpha=o),s},"convertRgbToXyz50"),a0=i(e=>e>Pm?Math.cbrt(e):(Kd*e+16)/116,"f"),Om=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=a0(e/Ir.X),s=a0(r/Ir.Y),a=a0(t/Ir.Z),l={mode:"lab",l:116*s-16,a:500*(o-s),b:200*(s-a)};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLab"),Ik=i(e=>{let r=Om(su(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab");function HO(e,r){if(!r||r[0]!=="lab")return;const t={mode:"lab"},[,n,o,s,a]=r;if(!(n.type===_.Hue||o.type===_.Hue||s.type===_.Hue))return n.type!==_.None&&(t.l=Math.min(Math.max(0,n.value),100)),o.type!==_.None&&(t.a=o.type===_.Number?o.value:o.value*125/100),s.type!==_.None&&(t.b=s.type===_.Number?s.value:s.value*125/100),a.type!==_.None&&(t.alpha=Math.min(1,Math.max(0,a.type===_.Number?a.value:a.value/100))),t}i(HO,"parseLab");const Bm={mode:"lab",toMode:{xyz50:Im,rgb:Pk},fromMode:{xyz50:Om,rgb:Ik},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[HO],serialize:i(e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{l:q,a:q,b:q,alpha:{use:q,fixup:Kr}}},ZO={...Bm,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:yk,rgb:_d},fromMode:{xyz65:wk,rgb:Ud},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function JO(e,r){if(!r||r[0]!=="lch")return;const t={mode:"lch"},[,n,o,s,a]=r;if(n.type!==_.None){if(n.type===_.Hue)return;t.l=Math.min(Math.max(0,n.value),100)}if(o.type!==_.None&&(t.c=Math.max(0,o.type===_.Number?o.value:o.value*150/100)),s.type!==_.None){if(s.type===_.Percentage)return;t.h=s.value}return a.type!==_.None&&(t.alpha=Math.min(1,Math.max(0,a.type===_.Number?a.value:a.value/100))),t}i(JO,"parseLch");const Rm={mode:"lch",toMode:{lab:li,rgb:i(e=>Pk(li(e)),"rgb")},fromMode:{rgb:i(e=>ai(Ik(e)),"rgb"),lab:ai},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[JO],serialize:i(e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:q,fixup:Fo},c:q,l:q,alpha:{use:q,fixup:Kr}},difference:{h:jd},average:{h:To}},YO={...Rm,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:i(e=>li(e,"lab65"),"lab65"),rgb:i(e=>_d(li(e,"lab65")),"rgb")},fromMode:{rgb:i(e=>ai(Ud(e),"lch65"),"rgb"),lab65:i(e=>ai(e,"lch65"),"lab65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},Ok=i(({l:e,u:r,v:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),s={mode:"lchuv",l:e,c:o};return o&&(s.h=ut(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},"convertLuvToLchuv"),Bk=i(({l:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"luv",l:e,u:r?r*Math.cos(t/180*Math.PI):0,v:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertLchuvToLuv"),Rk=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn$1"),Lk=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn$1"),XO=Rk(Ir.X,Ir.Y,Ir.Z),QO=Lk(Ir.X,Ir.Y,Ir.Z),eB=i(e=>e<=Pm?Kd*e:116*Math.cbrt(e)-16,"l_fn"),Ah=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=eB(r/Ir.Y),s=Rk(e,r,t),a=Lk(e,r,t);!isFinite(s)||!isFinite(a)?o=s=a=0:(s=13*o*(s-XO),a=13*o*(a-QO));let l={mode:"luv",l:o,u:s,v:a};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLuv"),rB=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn"),tB=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn"),nB=rB(Ir.X,Ir.Y,Ir.Z),oB=tB(Ir.X,Ir.Y,Ir.Z),Sh=i(({l:e,u:r,v:t,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};r===void 0&&(r=0),t===void 0&&(t=0);let o=r/(13*e)+nB,s=t/(13*e)+oB,a=Ir.Y*(e<=8?e/Kd:Math.pow((e+16)/116,3)),l=a*(9*o)/(4*s),u=a*(12-3*o-20*s)/(4*s),d={mode:"xyz50",x:l,y:a,z:u};return n!==void 0&&(d.alpha=n),d},"convertLuvToXyz50"),iB=i(e=>Ok(Ah(su(e))),"convertRgbToLchuv"),sB=i(e=>iu(Sh(Bk(e))),"convertLchuvToRgb"),aB={mode:"lchuv",toMode:{luv:Bk,rgb:sB},fromMode:{rgb:iB,luv:Ok},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:q,fixup:Fo},c:q,l:q,alpha:{use:q,fixup:Kr}},difference:{h:jd},average:{h:To}},lB={...Ca,mode:"lrgb",toMode:{rgb:Aa},fromMode:{rgb:Ea},parse:["srgb-linear"],serialize:"srgb-linear"},uB={mode:"luv",toMode:{xyz50:Sh,rgb:i(e=>iu(Sh(e)),"rgb")},fromMode:{xyz50:Ah,rgb:i(e=>Ah(su(e)),"rgb")},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:q,u:q,v:q,alpha:{use:q,fixup:Kr}}},jk=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*r+.0514459932675022*t),s=Math.cbrt(.2119034958178252*e+.6806995506452344*r+.1073969535369406*t),a=Math.cbrt(.0883024591900564*e+.2817188391361215*r+.6299787016738222*t),l={mode:"oklab",l:.210454268309314*o+.7936177747023054*s-.0040720430116193*a,a:1.9779985324311684*o-2.42859224204858*s+.450593709617411*a,b:.0259040424655478*o+.7827717124575296*s-.8086757549230774*a};return n!==void 0&&(l.alpha=n),l},"convertLrgbToOklab"),Gd=i(e=>{let r=jk(Ea(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToOklab"),au=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.pow(e+.3963377773761749*r+.2158037573099136*t,3),s=Math.pow(e-.1055613458156586*r-.0638541728258133*t,3),a=Math.pow(e-.0894841775298119*r-1.2914855480194092*t,3),l={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*s+.2309699031821044*a,g:-1.2684379732850317*o+2.6097573492876887*s-.3413193760026573*a,b:-.0041960761386756*o-.7034186179359362*s+1.7076146940746117*a};return n!==void 0&&(l.alpha=n),l},"convertOklabToLrgb"),Hd=i(e=>Aa(au(e)),"convertOklabToRgb");function Mh(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}i(Mh,"toe");function jc(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}i(jc,"toe_inv");function cB(e,r){let t,n,o,s,a,l,u,d;-1.88170328*e-.80936493*r>1?(t=1.19086277,n=1.76576728,o=.59662641,s=.75515197,a=.56771245,l=4.0767416621,u=-3.3077115913,d=.2309699292):1.81444104*e-1.19445276*r>1?(t=.73956515,n=-.45954404,o=.08285427,s=.1254107,a=.14503204,l=-1.2684380046,u=2.6097574011,d=-.3413193965):(t=1.35733652,n=-.00915799,o=-1.1513021,s=-.50559606,a=.00692167,l=-.0041960863,u=-.7034186147,d=1.707614701);let f=t+n*e+o*r+s*e*e+a*e*r,h=.3963377774*e+.2158037573*r,g=-.1055613458*e-.0638541728*r,m=-.0894841775*e-1.291485548*r;{let p=1+f*h,v=1+f*g,w=1+f*m,k=p*p*p,D=v*v*v,A=w*w*w,I=3*h*p*p,L=3*g*v*v,Y=3*m*w*w,re=6*h*h*p,te=6*g*g*v,X=6*m*m*w,pe=l*k+u*D+d*A,we=l*I+u*L+d*Y,Fe=l*re+u*te+d*X;f=f-pe*we/(we*we-.5*pe*Fe)}return f}i(cB,"compute_max_saturation");function Lm(e,r){let t=cB(e,r),n=au({l:1,a:t*e,b:t*r}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),s=o*t;return[o,s]}i(Lm,"find_cusp");function dB(e,r,t,n,o,s=null){s||(s=Lm(e,r));let a;if((t-o)*s[1]-(s[0]-o)*n<=0)a=s[1]*o/(n*s[0]+s[1]*(o-t));else{a=s[1]*(o-1)/(n*(s[0]-1)+s[1]*(o-t));{let l=t-o,u=n,d=.3963377774*e+.2158037573*r,f=-.1055613458*e-.0638541728*r,h=-.0894841775*e-1.291485548*r,g=l+u*d,m=l+u*f,p=l+u*h;{let v=o*(1-a)+a*t,w=a*n,k=v+w*d,D=v+w*f,A=v+w*h,I=k*k*k,L=D*D*D,Y=A*A*A,re=3*g*k*k,te=3*m*D*D,X=3*p*A*A,pe=6*g*g*k,we=6*m*m*D,Fe=6*p*p*A,ar=4.0767416621*I-3.3077115913*L+.2309699292*Y-1,Ze=4.0767416621*re-3.3077115913*te+.2309699292*X,St=4.0767416621*pe-3.3077115913*we+.2309699292*Fe,Gr=Ze/(Ze*Ze-.5*ar*St),Wn=-ar*Gr,no=-1.2684380046*I+2.6097574011*L-.3413193965*Y-1,an=-1.2684380046*re+2.6097574011*te-.3413193965*X,tt=-1.2684380046*pe+2.6097574011*we-.3413193965*Fe,Ge=an/(an*an-.5*no*tt),Lr=-no*Ge,ln=-.0041960863*I-.7034186147*L+1.707614701*Y-1,ht=-.0041960863*re-.7034186147*te+1.707614701*X,un=-.0041960863*pe-.7034186147*we+1.707614701*Fe,Dn=ht/(ht*ht-.5*ln*un),No=-ln*Dn;Wn=Gr>=0?Wn:1e6,Lr=Ge>=0?Lr:1e6,No=Dn>=0?No:1e6,a+=Math.min(Wn,Math.min(Lr,No))}}}return a}i(dB,"find_gamut_intersection");function jm(e,r,t=null){t||(t=Lm(e,r));let n=t[0],o=t[1];return[o/n,o/(1-n)]}i(jm,"get_ST_max");function _k(e,r,t){let n=Lm(r,t),o=dB(r,t,e,1,e,n),s=jm(r,t,n),a=.11516993+1/(7.4477897+4.1590124*t+r*(-2.19557347+1.75198401*t+r*(-2.13704948-10.02301043*t+r*(-4.24894561+5.38770819*t+4.69891013*r)))),l=.11239642+1/(1.6132032-.68124379*t+r*(.40370612+.90148123*t+r*(-.27087943+.6122399*t+r*(.00299215-.45399568*t-.14661872*r)))),u=o/Math.min(e*s[0],(1-e)*s[1]),d=e*a,f=(1-e)*l,h=.9*u*Math.sqrt(Math.sqrt(1/(1/(d*d*d*d)+1/(f*f*f*f))));return d=e*.4,f=(1-e)*.8,[Math.sqrt(1/(1/(d*d)+1/(f*f))),h,o]}i(_k,"get_Cs");function hv(e){const r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:Mh(r)};e.alpha!==void 0&&(o.alpha=e.alpha);let s=Math.sqrt(t*t+n*n);if(!s)return o.s=0,o;let[a,l,u]=_k(r,t/s,n/s),d;if(s<l){let f=0,h=.8*a,g=1-h/l;d=(s-f)/(h+g*(s-f))*.8}else{let f=l,h=.2*l*l*1.25*1.25/a,g=1-h/(u-l);d=.8+.2*((s-f)/(h+g*(s-f)))}return d&&(o.s=d,o.h=ut(Math.atan2(n,t)*180/Math.PI)),o}i(hv,"convertOklabToOkhsl");function gv(e){let r=e.h!==void 0?e.h:0,t=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:jc(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!t||n===1)return o.a=o.b=0,o;let s=Math.cos(r/180*Math.PI),a=Math.sin(r/180*Math.PI),[l,u,d]=_k(o.l,s,a),f,h,g,m;t<.8?(f=1.25*t,h=0,g=.8*l,m=1-g/u):(f=5*(t-.8),h=u,g=.2*u*u*1.25*1.25/l,m=1-g/(d-u));let p=h+f*g/(1-m*f);return o.a=p*s,o.b=p*a,o}i(gv,"convertOkhslToOklab");const fB={...xk,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:hv,rgb:i(e=>hv(Gd(e)),"rgb")},toMode:{oklab:gv,rgb:i(e=>Hd(gv(e)),"rgb")}};function mv(e){let r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(t*t+n*n),s=o?t/o:1,a=o?n/o:1,[l,u]=jm(s,a),d=.5,f=1-d/l,h=u/(o+r*u),g=h*r,m=h*o,p=jc(g),v=m*p/g,w=au({l:p,a:s*v,b:a*v}),k=Math.cbrt(1/Math.max(w.r,w.g,w.b,0));r=r/k,o=o/k*Mh(r)/r,r=Mh(r);const D={mode:"okhsv",s:o?(d+u)*m/(u*d+u*f*m):0,v:r?r/g:0};return D.s&&(D.h=ut(Math.atan2(n,t)*180/Math.PI)),e.alpha!==void 0&&(D.alpha=e.alpha),D}i(mv,"convertOklabToOkhsv");function pv(e){const r={mode:"oklab"};e.alpha!==void 0&&(r.alpha=e.alpha);const t=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,s=Math.cos(t/180*Math.PI),a=Math.sin(t/180*Math.PI),[l,u]=jm(s,a),d=.5,f=1-d/l,h=1-n*d/(d+u-u*f*n),g=n*u*d/(d+u-u*f*n),m=jc(h),p=g*m/h,v=au({l:m,a:s*p,b:a*p}),w=Math.cbrt(1/Math.max(v.r,v.g,v.b,0)),k=jc(o*h),D=g*k/h;return r.l=k*w,r.a=D*s*w,r.b=D*a*w,r}i(pv,"convertOkhsvToOklab");const hB={...Ek,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:mv,rgb:i(e=>mv(Gd(e)),"rgb")},toMode:{oklab:pv,rgb:i(e=>Hd(pv(e)),"rgb")}};function gB(e,r){if(!r||r[0]!=="oklab")return;const t={mode:"oklab"},[,n,o,s,a]=r;if(!(n.type===_.Hue||o.type===_.Hue||s.type===_.Hue))return n.type!==_.None&&(t.l=Math.min(Math.max(0,n.type===_.Number?n.value:n.value/100),1)),o.type!==_.None&&(t.a=o.type===_.Number?o.value:o.value*.4/100),s.type!==_.None&&(t.b=s.type===_.Number?s.value:s.value*.4/100),a.type!==_.None&&(t.alpha=Math.min(1,Math.max(0,a.type===_.Number?a.value:a.value/100))),t}i(gB,"parseOklab");const mB={...Bm,mode:"oklab",toMode:{lrgb:au,rgb:Hd},fromMode:{lrgb:jk,rgb:Gd},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[gB],serialize:i(e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize")};function pB(e,r){if(!r||r[0]!=="oklch")return;const t={mode:"oklch"},[,n,o,s,a]=r;if(n.type!==_.None){if(n.type===_.Hue)return;t.l=Math.min(Math.max(0,n.type===_.Number?n.value:n.value/100),1)}if(o.type!==_.None&&(t.c=Math.max(0,o.type===_.Number?o.value:o.value*.4/100)),s.type!==_.None){if(s.type===_.Percentage)return;t.h=s.value}return a.type!==_.None&&(t.alpha=Math.min(1,Math.max(0,a.type===_.Number?a.value:a.value/100))),t}i(pB,"parseOklch");const bB={...Rm,mode:"oklch",toMode:{oklab:i(e=>li(e,"oklab"),"oklab"),rgb:i(e=>Hd(li(e,"oklab")),"rgb")},fromMode:{rgb:i(e=>ai(Gd(e),"oklch"),"rgb"),oklab:i(e=>ai(e,"oklch"),"oklab")},parse:[pB],serialize:i(e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),ranges:{l:[0,1],c:[0,.4],h:[0,360]}},bv=i(e=>{let{r,g:t,b:n,alpha:o}=Ea(e),s={mode:"xyz65",x:.486570948648216*r+.265667693169093*t+.1982172852343625*n,y:.2289745640697487*r+.6917385218365062*t+.079286914093745*n,z:0*r+.0451133818589026*t+1.043944368900976*n};return o!==void 0&&(s.alpha=o),s},"convertP3ToXyz65"),vv=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Aa({r:e*2.4934969119414263-r*.9313836179191242-.402710784450717*t,g:e*-.8294889695615749+r*1.7626640603183465+.0236246858419436*t,b:e*.0358458302437845-r*.0761723892680418+.9568845240076871*t},"p3");return n!==void 0&&(o.alpha=n),o},"convertXyz65ToP3"),vB={...Ca,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:i(e=>vv(ds(e)),"rgb"),xyz65:vv},toMode:{rgb:i(e=>fs(bv(e)),"rgb"),xyz65:bv}},l0=i(e=>{let r=Math.abs(e);return r>=1/512?Math.sign(e)*Math.pow(r,1/1.8):16*e},"gamma$1"),yv=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"prophoto",r:l0(e*1.3457868816471585-r*.2555720873797946-.0511018649755453*t),g:l0(e*-.5446307051249019+r*1.5082477428451466+.0205274474364214*t),b:l0(e*0+r*0+1.2119675456389452*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz50ToProphoto"),u0=i((e=0)=>{let r=Math.abs(e);return r>=16/512?Math.sign(e)*Math.pow(r,1.8):e/16},"linearize$1"),wv=i(e=>{let r=u0(e.r),t=u0(e.g),n=u0(e.b),o={mode:"xyz50",x:.7977666449006423*r+.1351812974005331*t+.0313477341283922*n,y:.2880748288194013*r+.7118352342418731*t+899369387256e-16*n,z:0*r+0*t+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertProphotoToXyz50"),yB={...Ca,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:yv,rgb:i(e=>yv(su(e)),"rgb")},toMode:{xyz50:wv,rgb:i(e=>iu(wv(e)),"rgb")}},$v=1.09929682680944,wB=.018053968510807,c0=i(e=>{const r=Math.abs(e);return r>wB?(Math.sign(e)||1)*($v*Math.pow(r,.45)-($v-1)):4.5*e},"gamma"),kv=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"rec2020",r:c0(e*1.7166511879712683-r*.3556707837763925-.2533662813736599*t),g:c0(e*-.6666843518324893+r*1.6164812366349395+.0157685458139111*t),b:c0(e*.0176398574453108-r*.0427706132578085+.9421031212354739*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRec2020"),xv=1.09929682680944,$B=.018053968510807,d0=i((e=0)=>{let r=Math.abs(e);return r<$B*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((r+xv-1)/xv,1/.45)},"linearize"),Dv=i(e=>{let r=d0(e.r),t=d0(e.g),n=d0(e.b),o={mode:"xyz65",x:.6369580483012911*r+.1446169035862083*t+.1688809751641721*n,y:.262700212011267*r+.6779980715188708*t+.059301716469862*n,z:0*r+.0280726930490874*t+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertRec2020ToXyz65"),kB={...Ca,mode:"rec2020",fromMode:{xyz65:kv,rgb:i(e=>kv(ds(e)),"rgb")},toMode:{xyz65:Dv,rgb:i(e=>fs(Dv(e)),"rgb")},parse:["rec2020"],serialize:"rec2020"},zi=.0037930732552754493,Uk=Math.cbrt(zi),f0=i(e=>Math.cbrt(e)-Uk,"transfer$1"),xB=i(e=>{const{r,g:t,b:n,alpha:o}=Ea(e),s=f0(.3*r+.622*t+.078*n+zi),a=f0(.23*r+.692*t+.078*n+zi),l=f0(.2434226892454782*r+.2047674442449682*t+.5518098665095535*n+zi),u={mode:"xyb",x:(s-a)/2,y:(s+a)/2,b:l-(s+a)/2};return o!==void 0&&(u.alpha=o),u},"convertRgbToXyb"),h0=i(e=>Math.pow(e+Uk,3),"transfer"),DB=i(({x:e,y:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=h0(e+r)-zi,s=h0(r-e)-zi,a=h0(t+r)-zi,l=Aa({r:11.031566904639861*o-9.866943908131562*s-.16462299650829934*a,g:-3.2541473810744237*o+4.418770377582723*s-.16462299650829934*a,b:-3.6588512867136815*o+2.7129230459360922*s+1.9459282407775895*a});return n!==void 0&&(l.alpha=n),l},"convertXybToRgb"),CB={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:DB},fromMode:{rgb:xB},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:q,y:q,b:q,alpha:{use:q,fixup:Kr}}},EB={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:iu,lab:Om},fromMode:{rgb:su,lab:Im},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:q,y:q,z:q,alpha:{use:q,fixup:Kr}}},AB=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let s={mode:"xyz50",x:1.0479298208405488*r+.0229467933410191*t-.0501922295431356*n,y:.0296278156881593*r+.990434484573249*t-.0170738250293851*n,z:-.0092430581525912*r+.0150551448965779*t+.7518742899580008*n};return o!==void 0&&(s.alpha=o),s},"convertXyz65ToXyz50"),SB=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let s={mode:"xyz65",x:.9554734527042182*r-.0230985368742614*t+.0632593086610217*n,y:-.0283697069632081*r+1.0099954580058226*t+.021041398966943*n,z:.0123140016883199*r-.0205076964334779*t+1.3303659366080753*n};return o!==void 0&&(s.alpha=o),s},"convertXyz50ToXyz65"),MB={mode:"xyz65",toMode:{rgb:fs,xyz50:AB},fromMode:{rgb:ds,xyz50:SB},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:q,y:q,z:q,alpha:{use:q,fixup:Kr}}},FB=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"yiq",y:.29889531*e+.58662247*r+.11448223*t,i:.59597799*e-.2741761*r-.32180189*t,q:.21147017*e-.52261711*r+.31114694*t};return n!==void 0&&(o.alpha=n),o},"convertRgbToYiq"),TB=i(({y:e,i:r,q:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"rgb",r:e+.95608445*r+.6208885*t,g:e-.27137664*r-.6486059*t,b:e-1.10561724*r+1.70250126*t};return n!==void 0&&(o.alpha=n),o},"convertYiqToRgb"),NB={mode:"yiq",toMode:{rgb:TB},fromMode:{rgb:FB},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:q,i:q,q,alpha:{use:q,fixup:Kr}}},PB=i(e=>Math.max(0,Math.min(1,e||0)),"clamp"),g0=i(e=>Math.round(PB(e)*255),"fixup"),IB=Yi("rgb"),OB=i(e=>{if(e===void 0)return;let r=g0(e.r),t=g0(e.g),n=g0(e.b);return"#"+(1<<24|r<<16|t<<8|n).toString(16).slice(1)},"serializeHex"),BB=i(e=>OB(IB(e)),"formatHex"),RB=i(e=>{const r={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(r.alpha=e.alpha),r},"fixup_rgb"),LB=i(e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1),"inrange_rgb");function jB(e="rgb"){const{gamut:r}=Rd(e);if(!r)return n=>!0;const t=Yi(typeof r=="string"?r:e);return n=>LB(t(n))}i(jB,"inGamut");function _B(e="rgb"){const{gamut:r}=Rd(e);if(!r)return s=>$h(s);const t=typeof r=="string"?r:e,n=Yi(t),o=jB(t);return s=>{const a=$h(s);if(!a)return;const l=n(a);if(o(l))return a;const u=RB(l);return a.mode===u.mode?u:Yi(a.mode)(u)}}i(_B,"clampGamut");Ue(vO);Ue(EO);Ue(AO);Ue(SO);Ue(TO);Ue(xk);Ue(Ek);Ue(UO);Ue(zO);Ue(KO);Ue(GO);Ue(Bm);Ue(ZO);Ue(Rm);Ue(YO);Ue(aB);Ue(lB);Ue(uB);Ue(fB);Ue(hB);Ue(mB);Ue(bB);Ue(vB);Ue(yB);Ue(kB);Ue(Ca);Ue(CB);Ue(EB);Ue(MB);Ue(NB);const UB=CO("rgb");class $o{static{i(this,"Color")}constructor(r){this.set(r)}static isValidColorString(r){try{return new $o(r),!0}catch{return!1}}static isColor(r){return r instanceof $o}static deserialize(r){const t=JSON.parse(r),n=new $o("black");return In(t).forEach(([o,s])=>{o==="originalColorSyntax"?n.originalColorSyntax=wr.isEnumValue(s,$e,"Cannot deserialize: invalid color syntax."):n._allColors[o]=s}),n}getRgbDistance(r){return UB(this.#e,r)}getClosestNamedColor(){return We(Pl).reduce((r,t)=>{const n=this.getRgbDistance(t);return n<r.distance?{distance:n,name:t}:r},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=$e.hex;#e=wr.isDefined(Dh("black"));_allColors={names:["black"],[$e.name]:"black",hexString:"#000000",[$e.hex]:{r:0,g:0,b:0},[$e.rgb]:{r:0,g:0,b:0},[$e.hsl]:{h:0,s:0,l:0},[$e.hwb]:{h:0,w:0,b:0},[$e.lab]:{l:0,a:0,b:0},[$e.lch]:{l:0,c:0,h:0},[$e.oklab]:{l:0,a:0,b:0},[$e.oklch]:{l:0,c:0,h:0}};clone(){return $o.deserialize(this.serialize())}setByString(r){const t=Dh(r);if(!t)throw new Error(`Unable to parse invalid color string: '${r}'`);this.originalColorSyntax=HI(r),this.#e=t,this.pullFromInternalColor()}set(r){if(F.isString(r))return this.setByString(r);if(zr.isLengthExactly(Object.keys(r),1,`Cannot set multiple color formats at once: got '${rD(Object.keys(r))}'`),r.hexString||r.name)this.setByString(r.hexString||r.name);else{const[t,n]=wr.isDefined(In(r)[0]),o=Zn[t],s=Object.values(cr(o.coords,a=>{const l=n[a],u=o.coords[wr.isKeyOf(a,o.coords)],d=l!=null&&l>=u.min&&l<=u.max?n[a]:this[t][a];return wr.isDefined(d)}));this.setByString(`${o.conversionFormat}(${s.join(" ")})`)}}pullFromInternalColor(){Kt(si).forEach(r=>{const t=Zn[r],n=t.conversionFormat,o=F.isKeyOf(this.#e.mode,Zn)?Zn[this.#e.mode]:void 0,s=_B(t.colorSpace===o?.colorSpace?n:"rgb")(Yi(n)(this.#e));s||zr.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${r}'.`),We(this[r]).forEach(a=>{const l=s[a],u=t.coords[wr.isKeyOf(a,t.coords)];l!=null&&(this._allColors[r][a]=B2((l||0)*(u.factor||1),{digits:u.digits||0}))})}),this._allColors.hexString=BB(this.#e),this._allColors.names=zB(this.rgb),this._allColors[$e.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return Sn(this._allColors)}toFormattedStrings(){return{...cr(Zn,t=>Object.values(this[t]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(ev," "),[$e.name]:(this.names[0]||"").padEnd(ev," "),[$e.hexString]:this[$e.hexString]}}toCss(){return{...cr(Zn,t=>{const n=Object.values(this[t]);return`${t}(${n.join(" ")})`}),[$e.hexString]:this[$e.hexString],[$e.name]:this.names[0]||""}}get names(){return Sn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[$e.hexString]}get hex(){return Sn(this._allColors[$e.hex])}get rgb(){return Sn(this._allColors[$e.rgb])}get hsl(){return Sn(this._allColors[$e.hsl])}get hwb(){return Sn(this._allColors[$e.hwb])}get lab(){return Sn(this._allColors[$e.lab])}get lch(){return Sn(this._allColors[$e.lch])}get oklab(){return Sn(this._allColors[$e.oklab])}get oklch(){return Sn(this._allColors[$e.oklch])}}function zB(e){return wn(In(Pl),([r])=>r,(r,[,t])=>F.deepEquals(t,[e.r,e.g,e.b]))}i(zB,"findMatchingColorNames");function Wt(e){return E`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}i(Wt,"colorCss");const m0=qn()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:i(({cssVars:e})=>E`
        :host {
            display: flex;
            align-items: center;
            font-family: ${ym["vira-monospace"].value};
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

        ${Ne} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,"styles"),events:{valueChange:ir()},render({inputs:e,events:r,dispatch:t,cssVars:n}){const o=Zn[e.colorFormatName],s=o.coords[e.colorCoordinateName];if(!s)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const a=10,l=w6(a,h=>{const g=s.min+(s.max-s.min)*(h/a);return new $o({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:g}}).toCss()[o.conversionFormat]}),u=E`linear-gradient(to right, ${Me(l.join(","))})`,d=wr.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),f=s.radix?Math.round(d).toString(s.radix).toUpperCase().padStart(s.radixPad||0,"0"):String(d);return b`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${E`
                    ${n["vir-color-slider-gradient"].name}: ${u};
                `}
                step=${Math.pow(10,s.digits?-s.digits:0)}
                ${mP(h=>{zr.instanceOf(h,HTMLInputElement),h.min=String(s.min),h.max=String(s.max),h.value=String(d)})}
                ${z("input",h=>{const g=Fd(h,HTMLInputElement),m=Number(g.value);isNaN(m)||t(new r.valueChange(m))})}
            />
            <${Ne.assign({value:f})}
                ${z(Ne.events.valueChange,h=>{const g=s.radix?parseInt(h.detail,s.radix):Number(h.detail);isNaN(g)||t(new r.valueChange(g))})}
            ></${Ne}>
        `}}),p0=qn()({tagName:"vir-color-format-sliders",styles:E`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${nu};
        }
    `,events:{colorChange:ir()},render({inputs:e,dispatch:r,events:t}){const n=Zn[e.colorFormatName],o=We(n.coords).map(s=>b`
                    <${m0.assign({color:e.color,colorCoordinateName:s,colorFormatName:e.colorFormatName})}
                        ${z(m0.events.valueChange,a=>{const l=e.color.clone();l.set({[e.colorFormatName]:{[s]:a.detail}});const u=l.toCss()[n.conversionFormat];r(new t.colorChange(u))})}
                    ></${m0}>
                `);return b`
            ${e.showFormatName?b`
                      <h3>${e.colorFormatName}</h3>
                  `:oe}
            ${o}
        `}}),b0=qn()({tagName:"vir-color-swatch",styles:E`
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
    `,render({inputs:e}){const r=e.backgroundColor||e.foregroundColor,t=e.foregroundColor||"transparent";return b`
            <div
                style=${E`
                    background-color: ${Me(r)};
                    color: ${Me(t)};
                `}
            >
                <slot></slot>
            </div>
        `}}),v0=qn()({tagName:"vir-contrast-indicator",styles:E`
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

        .${Me(fe.Invisible)} {
            color: red;
        }
        .${Me(fe.Decoration)} {
            color: #ff6600;
        }
        .${Me(fe.Placeholder)} {
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
    `,render({inputs:e}){const r=Id.toReversed().slice(1).map(o=>b`
                    <div
                        class="gauge-level ${At({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),t=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return b`
            <div title=${t} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${r}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${uI[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),Cv=qn()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":i(({inputs:e,state:r})=>!e.showContrast&&!r.forceShowEverything,"vir-color-pair-no-contrast-tips")},styles:i(({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Tr};
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
            font-family: ${ym["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${nu};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${v0} {
            margin-top: 1px;
        }
    `,"styles"),render({state:e,updateState:r,inputs:t}){const n=["foreground","background"].map(l=>{const u=[t.color[l].name,t.showVarValues||e.forceShowEverything?":":""].filter(F.isTruthy).join(""),d=t.showVarValues||e.forceShowEverything?b`
                          <span>${t.color[l].default}</span>
                      `:oe;return b`
                <p>
                    <span>${u}</span>
                    ${d}
                </p>
            `}),o=t.showVarNames||e.forceShowEverything?b`
                      <div class="css-var-names">${n}</div>
                  `:oe,s=e.previewElement?sI({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,a=s&&(t.showContrast||e.forceShowEverything)?b`
                      <${v0.assign({contrast:s,fontWeight:t.fontWeight})}></${v0}>
                  `:oe;return b`
            <button
                ${z("click",()=>{r({forceShowEverything:!e.forceShowEverything})})}
                ${Ji(l=>{r({previewElement:wr.instanceOf(l,HTMLElement)})})}
                class="color-preview"
                style=${E`
                    color: ${Me(t.color.foreground.default)};
                    background: ${Me(t.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${E`
                                visibility: ${Me((s?.fontSizes[400]||1/0)>150?"hidden":"visible")};
                                font-weight: ${t.fontWeight};
                                font-size: ${s?s.fontSizes[400]:14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${a} ${o}
        `}});class VB{static{i(this,"LocalStorageClient")}shapes;options;constructor(r,t={}){this.shapes=r,this.options=t,this.storeName=t.storeName||"local-storage-client",this.get=cr(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.set=cr(this.shapes,n=>o=>{Ec(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const s=this.getAllValues();return s[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(s)),o}),this.delete=cr(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o))})}storeName;getAllValues({throwErrorOnFailure:r=!1}={}){return M2(()=>{const t=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return F2(t,(n,o)=>{const s=this.shapes[n];if(s){if(r)Ec(o,s,{allowExtraKeys:!0});else if(!Wo(o,s,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:i(t=>{if(r)throw sa(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}},"handleError")})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const y0=new VB({lastFormat:Hi(si)}),qB=Vs(si).map(e=>({value:e,label:e.toUpperCase()})),_a=qn()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:Ks.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:Ks.Length}},state(){return{selectedFormatName:y0.get.lastFormat()||si.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":i(({inputs:e})=>!!e.alwaysShowPicker,"vir-color-picker-always-show")},styles:i(({cssVars:e,hostClasses:r})=>E`
        :host {
            display: inline-flex;
        }

        ${r["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${Tr}
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

            & ${b0} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${ym["vira-monospace"].value};
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 2px;
            align-items: center;

            & ${B} {
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
            ${Li.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${R["vira-form-border-color"].name}: #ddd;
            color: #666;

            & ${Ne} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,"styles"),events:{colorChange:ir()},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const s=$o.isColor(e.color)?e.color:new $o(e.color||"black"),a=Zn[n.selectedFormatName],l=n.rawInput??s.toCss()[a.rawSyntax],u=b`
            <div class="raw-input-wrapper">
                <${Ne.assign({value:l})}
                    ${z(Ne.events.valueChange,g=>{const m=g.detail;o({rawInput:m}),$o.isValidColorString(m)&&r(new t.colorChange(m))})}
                ></${Ne}>
                <button
                    class="code-button"
                    ${z("click",async()=>{await globalThis.navigator.clipboard.writeText(l)})}
                >
                    <${B.assign({icon:Fc,fitContainer:!0})}></${B}>
                </button>
            </div>
        `,d=b`
            <button
                class="code-button"
                ${z("click",async()=>{await globalThis.navigator.clipboard.writeText(s.hexString)})}
            >
                <span>${s.hexString}</span>
                <${B.assign({icon:Fc,fitContainer:!0})}></${B}>
            </button>
        `,f=b`
            <div class="swatch-wrapper">
                <${b0.assign({backgroundColor:s})}></${b0}>
                ${e.showHexValue?d:oe}
            </div>
        `,h=b`
            <div class="picker">
                <${Ke.assign({options:qB,value:n.selectedFormatName})}
                    ${z(Ke.events.valueChange,g=>{const m=Kh.isEnumValue(g.detail,si);m&&(o({selectedFormatName:m}),y0.set.lastFormat(m))})}
                ></${Ke}>
                ${u}
                <${p0.assign({color:s,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${z(p0.events.colorChange,g=>{r(new t.colorChange(g.detail)),o({rawInput:void 0})})}
                ></${p0}>
            </div>
        `;return e.alwaysShowPicker?b`
                ${f} ${h}
            `:b`
                <${de.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${de.slotNames.trigger}
                        ${z("mousedown",()=>{const g=y0.get.lastFormat();g&&o({selectedFormatName:g})})}
                    >
                        ${f}
                    </button>
                    <div class="pop-up" slot=${de.slotNames.popUp}>
                        ${h}
                    </div>
                </${de}>
            `}});function WB(e){if(!F.hasKey(G1,e))throw new Error(`No ViraTag color for variant '${e}'`);const r=G1[e];return E`
        :host(
                .vira-tag-color-${Me(e)}.vira-tag-emphasis-${Me(Xe.Standard)}
            )
            button {
            ${Wt(gt[r]["behind-bg"][fe.NonBodyText])}
            border-color: ${gt[r]["behind-bg"][fe.NonBodyText].background.value};

            &:hover {
                ${Wt(gt[r]["behind-bg"][fe.Header])}
                border-color: ${gt[r]["behind-bg"][fe.Header].background.value};
            }
            &:active {
                ${Wt(gt[r]["behind-bg"][fe.NonBodyText])}
                border-color: ${gt[r]["behind-bg"][fe.NonBodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${Me(e)}.vira-tag-emphasis-${Me(Xe.Subtle)}
            )
            button {
            ${Wt(gt[r]["on-self"][fe.BodyText])}
            border-color: ${gt[r]["on-self"][fe.BodyText].background.value};

            &:hover {
                ${Wt(gt[r]["on-self"][fe.NonBodyText])}
                border-color: ${gt[r]["on-self"][fe.NonBodyText].background.value};
            }
            &:active {
                ${Wt(gt[r]["on-self"][fe.BodyText])}
                border-color: ${gt[r]["on-self"][fe.BodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${Me(e)}.vira-tag-not-checked.vira-tag-not-checked.vira-tag-not-checked
            )
            button {
            color: ${gt[r]["on-self"][fe.BodyText].foreground.value};
            background-color: transparent;
            border-color: ${gt[r]["on-self"][fe.BodyText].background.value};

            &:hover {
                background-color: ${gt[r]["behind-bg"][fe.Invisible].background.value};
            }
            &:active {
                background-color: ${gt[r]["behind-bg"][fe.Decoration].background.value};
            }
        }
    `}i(WB,"generateThemeCss");function KB(){return Me([ze.Accent,ze.Danger,ze.Neutral,ze.Positive,ze.Warning].map(e=>WB(e)).join(" "))}i(KB,"generateAutomaticViraTagThemeVariants");const Ua=sr()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"white","vira-tag-background-color":"black","vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:ir(),cancel:ir()},hostClasses:{"vira-tag-selectable":i(({inputs:e})=>F.isBoolean(e.isClickable?.selected),"vira-tag-selectable"),"vira-tag-checked":i(({inputs:e})=>!!e.isClickable?.selected,"vira-tag-checked"),"vira-tag-not-checked":i(({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-not-checked"),"vira-tag-cancellable":i(({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-cancellable"),"vira-tag-not-clickable":i(({inputs:e})=>!e.isClickable,"vira-tag-not-clickable"),"vira-tag-disabled":i(({inputs:e})=>!!e.disabled,"vira-tag-disabled"),"vira-tag-size-large":i(({inputs:e})=>e.size===Hn.Large,"vira-tag-size-large"),"vira-tag-size-medium":i(({inputs:e})=>!e.size||e.size===Hn.Medium,"vira-tag-size-medium"),"vira-tag-size-small":i(({inputs:e})=>e.size===Hn.Small,"vira-tag-size-small"),"vira-tag-emphasis-standard":i(({inputs:e})=>!e.emphasis||e.emphasis===Xe.Standard,"vira-tag-emphasis-standard"),"vira-tag-emphasis-subtle":i(({inputs:e})=>e.emphasis===Xe.Subtle,"vira-tag-emphasis-subtle"),"vira-tag-color-accent":i(({inputs:e})=>!e.color||e.color===ze.Accent,"vira-tag-color-accent"),"vira-tag-color-plain":i(({inputs:e})=>e.color===ze.Plain,"vira-tag-color-plain"),"vira-tag-color-neutral":i(({inputs:e})=>e.color===ze.Neutral,"vira-tag-color-neutral"),"vira-tag-color-danger":i(({inputs:e})=>e.color===ze.Danger,"vira-tag-color-danger"),"vira-tag-color-warning":i(({inputs:e})=>e.color===ze.Warning,"vira-tag-color-warning"),"vira-tag-color-positive":i(({inputs:e})=>e.color===ze.Positive,"vira-tag-color-positive")},styles:i(({cssVars:e,hostClasses:r})=>E`
        :host {
            display: inline-flex;
        }

        button {
            ${Tr}
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

        ${r["vira-tag-selectable"].selector} .selected-check {
            display: flex;
        }
        ${r["vira-tag-checked"].selector} .selected-check {
            visibility: visible;
        }
        ${r["vira-tag-cancellable"].selector} .cancel-x {
            display: flex;
        }
        ${r["vira-tag-size-large"].selector} button {
            height: ${Zu[Hn.Large]}px;
            font-size: ${R["vira-form-large-text-size"].value};
            padding: 0 var(${e["vira-tag-horizontal-padding"].name}, 16px);
        }
        ${r["vira-tag-size-medium"].selector} button {
            height: ${Zu[Hn.Medium]}px;
            font-size: ${R["vira-form-medium-text-size"].value};
        }
        ${r["vira-tag-size-small"].selector} button {
            height: ${Zu[Hn.Small]}px;
            font-size: ${R["vira-form-small-text-size"].value};
        }

        ${KB()}

        :host(.${r["vira-tag-disabled"].name}.${r["vira-tag-disabled"].name}.${r["vira-tag-disabled"].name}.${r["vira-tag-disabled"].name}) {
            cursor: not-allowed;
            ${oi}

            & button {
                ${Wt(M.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${M.colors["vira-grey-behind-bg-decoration"].background.value}
            }

            &.${r["vira-tag-emphasis-subtle"].name} button {
                ${Wt(M.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${M.colors["vira-grey-behind-bg-decoration"].background.value}
            }
        }

        :host(
                .${r["vira-tag-color-plain"].name}.vira-tag-emphasis-${Me(Xe.Standard)}
            )
            button {
            ${Wt(M.inverse[or])};
            border-color: ${M.inverse[or].background.value};

            &:hover {
                ${Wt(M.colors["vira-grey-behind-bg-non-body"])};
                border-color: ${M.colors["vira-grey-behind-bg-non-body"].background.value};
            }
            &:active {
                ${Wt(M.inverse[or])};
                border-color: ${M.inverse[or].background.value};
            }
        }
        :host(
                .${r["vira-tag-color-plain"].name}.vira-tag-emphasis-${Me(Xe.Subtle)}
            )
            button {
            background-color: transparent;
            color: ${M.colors[or].foreground.value};
            border-color: transparent;
        }
        :host(
                .${r["vira-tag-color-plain"].name}.${r["vira-tag-not-checked"].name}.${r["vira-tag-not-checked"].name}.${r["vira-tag-not-checked"].name}
            )
            button {
            color: ${M.colors[or].foreground.value};
            background-color: transparent;
            border-color: transparent;
        }
        :host(
                .${r["vira-tag-color-plain"].name}.vira-tag-emphasis-${Me(Xe.Subtle)}
            )
            button,
        :host(
                .${r["vira-tag-color-plain"].name}.${r["vira-tag-not-checked"].name}.${r["vira-tag-not-checked"].name}.${r["vira-tag-not-checked"].name}
            )
            button {
            &:hover {
                ${Wt(M.colors["vira-grey-behind-fg-small-body"])}
                border-color: ${M.colors["vira-grey-behind-fg-small-body"].background.value};
            }
            &:active {
                ${Wt(M.colors["vira-grey-behind-fg-body"])}
                border-color: ${M.colors["vira-grey-behind-fg-body"].background.value};
            }
        }
    `,"styles"),render({inputs:e,dispatch:r,events:t}){const n=!e.isClickable||!!e.disabled;return b`
            <button
                ?disabled=${n}
                ${z("click",()=>{n||(e.isClickable?.selected!=null?r(new t.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&r(new t.cancel))})}
            >
                <${B.assign({icon:km})}
                    class="selected-check"
                ></${B}>
                <span class="text">${String(e.text)}</span>
                <${B.assign({icon:Mm})}
                    class="cancel-x"
                ></${B}>
            </button>
        `}});function zk(e){return aP({async updateCallback(r,t){if(t&&r in t.cache)return{cache:t.cache,element:t.cache[r],key:r};const n=await e[r]();return{cache:{...t?.cache,[r]:n},element:n,key:r}}})}i(zk,"createDynamicElementLoader");function Vk(e,{ready:r,loading:t,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?t(e.value.then(s=>({[s.key]:s.element}))):r({[e.value.key]:e.value.element})}i(Vk,"renderDynamicElement");const sn=a$(),gn=sn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:i(({cssVars:e})=>E`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,"styles"),render:i(({inputs:e,dispatch:r})=>{const t=e.router?.createRouteUrl({...e.route})??"#";return b`
            <a
                href=${t}
                ${z("click",n=>{(!e.router||v$(n))&&(n.preventDefault(),window.scrollTo(0,0),r(new Mc(e.route)))})}
            >
                <slot></slot>
            </a>
        `},"render")});function GB(e,r){return e.entry.entryType===it.Root?!1:e.entry.entryType===it.Page||F.jsonEquals(r,e.fullUrlBreadcrumbs.slice(0,-1))?!0:F.jsonEquals(r?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}i(GB,"shouldShowTreeNodeInNav");const ks=sn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:i(({cssVars:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Be["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Be["element-book-nav-hover-background-color"].value};
            color: ${Be["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Be["element-book-nav-active-background-color"].value};
            color: ${Be["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${gn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Be["element-book-nav-selected-background-color"].value};
            color: ${Be["element-book-nav-selected-foreground-color"].value};
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

        ${B} {
            display: inline-flex;
            color: ${Be["element-book-accent-icon-color"].value};
        }
    `,"styles"),render({inputs:e}){const r=e.flattenedNodes.map(t=>{if(!GB(t,e.selectedPath))return;const n=E`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `;return b`
                <li style=${n}>
                    <${gn.assign({router:e.router,route:{paths:[Ot.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${At({"title-row":!0,selected:e.selectedPath?F.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Lt(Os(t,it.ElementExample),b`
                                    <${B.assign({icon:Cm})}></${B}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${gn}>
                </li>
            `});return b`
            <${gn.assign({route:qs,router:e.router})}>
                <slot>Book</slot>
            </${gn}>
            <ul>
                ${r}
            </ul>
        `}}),ui=sn()({tagName:"book-error",styles:E`
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
    `,render({inputs:e}){return(F.isArray(e.message)?e.message:[e.message]).map(t=>b`
                <p>${t}</p>
            `)}}),Ol=sn()({tagName:"book-page-controls",events:{controlValueChange:ir()},hostClasses:{"book-page-controls-has-controls":i(({inputs:e})=>!!Object.keys(e.config).length,"book-page-controls-has-controls")},styles:i(({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Be["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Ne}, ${Ke} {
            height: 24px;
            max-width: 128px;
        }

        ${B}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,"styles"),render({inputs:e,dispatch:r,events:t}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],s)=>{if(o.controlType===me.Hidden)return"";const a=HB(e.currentValues[n],o,l=>{const u=F.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);r(new t.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(d=>[d,e.currentValues[d]])),[n]:l}}))});return b`
                    <div class="control-wrapper">
                        ${Lt(s===0,b`
                                <${B.assign({icon:Bd})}
                                    class="options-icon"
                                ></${B}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===me.Custom?b`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function HB(e,r,t){return xi(r,me.Hidden)?"":xi(r,me.Checkbox)?b`
            <${ge.assign({value:!!e})}
                ${z(ge.events.valueChange,n=>{t(n.detail)})}
            ></${ge}>
        `:xi(r,me.Color)?b`
            <${_a.assign({color:e})}
                style=${E`
                    ${_a.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${_a.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${z(_a.events.colorChange,n=>{t(n.detail)})}
            ></${_a}>
        `:xi(r,me.Text)?b`
            <${Ne.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${z(Ne.events.valueChange,n=>{t(n.detail)})}
            ></${Ne}>
        `:xi(r,me.Number)?b`
            <${Ne.assign({value:e,allowedInputs:/[\d.]/})}
                ${z(Ne.events.valueChange,n=>{t(n.detail)})}
            ></${Ne}>
        `:xi(r,me.Dropdown)?b`
            <${Ke.assign({value:e,options:r.options.map(n=>({label:n,value:n}))})}
                ${z(Ke.events.valueChange,n=>{t(n.detail)})}
            ></${Ke}>
        `:xi(r,me.Custom)?r.content:b`
            <p class="error">
                ${r.controlType} controls are not implemented yet.
            </p>
        `}i(HB,"createControlInput");const Ev=sn()({tagName:"book-breadcrumbs",styles:E`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:i(({inputs:e})=>{const r=e.currentRoute.paths.slice(1);return r.length?r.map((t,n,o)=>{const s=n>=o.length-1,a=o.slice(0,n+1),l=s?"":b`
                      <span class="spacer">&gt;</span>
                  `;return b`
                <${gn.assign({route:{hash:void 0,search:void 0,paths:[Ot.Book,...a]},router:e.router})}>
                    ${t}
                </${gn}>
                ${l}
            `}):b`
                &nbsp;
            `},"render")}),w0=sn()({tagName:"book-breadcrumbs-bar",styles:E`
        :host {
            border-bottom: 1px solid
                ${Be["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Be["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:r}){return b`
            ${Lt(!!e.currentSearch,b`
                    &nbsp;
                `,b`
                    <${Ev.assign({currentRoute:e.currentRoute,router:e.router})}></${Ev}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${z("input",async t=>{const n=t.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await Vi({milliseconds:200}),n.value===o&&(n.value?r(new Mc({paths:[Ot.Search,encodeURIComponent(n.value)]})):r(new Mc(qs)))})}
            />
        `}}),Av=sn()({tagName:"book-entry-description",styles:E`
        :host {
            color: ${Be["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Be["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(r=>b`
                <p>${r}</p>
            `)}}),Sv=sn()({tagName:"book-page-wrapper",styles:E`
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

        ${gn} {
            display: inline-block;
        }
    `,render({inputs:e}){const r=e.isTopLevel?b`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:b`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,t=[Ot.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?S2(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?r:b`
                  <${gn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                      ${r}
                  </${gn}>
              `;return b`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?b`
                              <${ui.assign({message:n.message})}></${ui}>
                          `:b`
                              <${Av.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Av}>
                              <${Ol.assign({config:e.pageNode.entry.controls,currentValues:Qh(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Ol}>
                          `}
                </div>
            </div>
        `}}),Ou=sn()({tagName:"book-element-example-title",styles:E`
        :host {
            display: flex;
            color: ${Be["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const r=[Ot.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return b`
            <${gn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${gn}>
        `}}),Mv=Symbol("unset-internal-state"),Fv=sn()({tagName:"book-element-example-viewer",state(){return{isUnset:Mv}},render({state:e,inputs:r,updateState:t}){try{if(r.elementExampleNode.entry.errors.length)throw S2(r.elementExampleNode.entry.errors);if(!r.elementExampleNode.entry.render||typeof r.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${r.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Mv&&t({isUnset:void 0,...r.elementExampleNode.entry.state?.()});const n=r.elementExampleNode.entry.render({state:e,updateState:t,controls:r.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return b`
                ${Lt(!!r.elementExampleNode.entry.styles,b`
                        <style>
                            ${r.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Qr(n)),console.error(n),b`
                <${ui.assign({message:`${r.elementExampleNode.entry.title} failed: ${Qr(n)}`})}></${ui}>
            `}},options:{allowPolymorphicState:!0}}),Tv=sn()({tagName:"book-element-example-wrapper",styles:E`
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
            color: ${Be["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ou} {
            color: ${Be["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return b`
            <div class="individual-example-wrapper">
                <${Ou.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${Ou}>
                <${Fv.assign(e)}></${Fv}>
            </div>
        `}}),ZB={milliseconds:10};let Ya;const _c=new Map,Fi=new Map;function JB(){return Ya||(Ya=new IntersectionObserver(e=>{for(const r of e){const t=r.target,n=_c.get(t);if(n)if(r.isIntersecting){if(!Fi.has(t)){const o=globalThis.setTimeout(()=>{Fi.delete(t),n(),Ya?.unobserve(t),_c.delete(t)},Us(ZB,{milliseconds:!0}).milliseconds);Fi.set(t,o)}}else{const o=Fi.get(t);o&&(clearTimeout(o),Fi.delete(t))}}},{rootMargin:"100px"})),Ya}i(JB,"getSharedObserver");function Nv(e){const r=Fi.get(e);r&&(clearTimeout(r),Fi.delete(e)),_c.delete(e),Ya?.unobserve(e)}i(Nv,"unobserveElement");const Bu=sn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:E`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&Nv(e.placeholderElement)},render({inputs:e,state:r,updateState:t}){return r.hasRendered?e.content:b`
            <div
                class="placeholder"
                ${Ji(n=>{r.placeholderElement&&Nv(r.placeholderElement),t({placeholderElement:n}),_c.set(n,()=>{t({hasRendered:!0})}),JB().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function qk(e,r,t,n){const o=z0(t,n),s=[];if(o){const a=qk(e,r,o,n);a&&s.push(a)}if(Os(t,it.Page)&&!e.includes(t)){const a=Qh(r,t.fullUrlBreadcrumbs);s.push({config:t.entry.controls,current:a,breadcrumbs:cr(a,()=>t.fullUrlBreadcrumbs)})}return s.reduce((a,l)=>({config:{...a.config,...l.config},current:{...a.current,...l.current},breadcrumbs:{...a.breadcrumbs,...l.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}i(qk,"getFlattenedControlsFromHiddenParents");function YB({blockNavigation:e,currentNodes:r,isTopLevel:t,router:n,isSearching:o,controls:s,originalTree:a}){if(!r.length&&o)return[b`
                No results
            `];const l=F.isLengthAtLeast(r,1)?qk(r,s,r[0],a):void 0,u=l&&Object.values(l.config).length&&F.isLengthAtLeast(r,1)?b`
                  <${Ol.assign({config:l.config,currentValues:l.current,fullUrlBreadcrumbs:l.breadcrumbs})}></${Ol}>
              `:oe,d=uP(r,f=>f.fullUrlBreadcrumbs.join(">"),f=>{if(Os(f,it.Page))return b`
                    <${Sv.assign({blockNavigation:e,isTopLevel:t,pageNode:f,controls:s,router:n})}
                        class="block-entry"
                    ></${Sv}>
                `;if(Os(f,it.ElementExample)){const h=Qh(s,f.fullUrlBreadcrumbs.slice(0,-1)),g=b`
                    <${Tv.assign({blockNavigation:e,elementExampleNode:f,currentPageControls:h,router:n})}></${Tv}>
                `;return b`
                    <${Bu.assign({content:g})}
                        class="inline-entry ${At({"block-entry":f.entry.isVertical})}"
                    ></${Bu}>
                `}else{if(Os(f,it.Root))return oe;{const h=b`
                    <${ui.assign({message:`Unknown entry type for rendering: '${f.entry.entryType}'`})}></${ui}>
                `;return b`
                    <${Bu.assign({content:h})}
                        class="block-entry"
                    ></${Bu}>
                `}}});return[u,d]}i(YB,"createNodeTemplates");const xs=sn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:E`
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

        ${w0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Da["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:ir()},render:i(({inputs:e,dispatch:r,events:t,state:n,updateState:o})=>{const s=V2(e.currentRoute.paths),a=YB({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return b`
            <${w0.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${w0}>

            ${Lt(e.showLoading,b`
                    <div
                        ${Ji(()=>{r(new t.loadingRender(!0))})}
                        class="loading"
                    >
                        <${B.assign({icon:ii})}></${B}>
                    </div>
                    ${Lt(!!n.lastElement,b`
                            ${n.lastElement}
                            <slot></slot>
                        `)}
                `,b`
                    <div
                        ${Ji(l=>{o({lastElement:l})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot></slot>
                `)}
        `},"render")});function XB(e,r,t){const n=Pv(e,r);return n.length?n:(t(qs),Pv(e,qs.paths))}i(XB,"getCurrentNodes");function Pv(e,r){return e.filter(t=>oD({searchFor:r.slice(1),searchIn:t.fullUrlBreadcrumbs}))}i(Pv,"filterNodes");const Ru=qn()({tagName:"element-book-app",state(){return{currentRoute:qs,router:void 0,loading:!0,colors:{config:void 0,theme:I1(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:ir()},slotNames:["footer","navHeader"],styles:E`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Be["element-book-page-background-color"].value};
            color: ${Be["element-book-page-foreground-color"].value};
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

        ${xs} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${ks} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:r}){e.router&&(e.router.destroy(),r({router:void 0}))},render:i(({state:e,inputs:r,host:t,updateState:n,dispatch:o,events:s,slotNames:a})=>{r._debug&&console.info("rendering element-book app");function l(h){return{...e.currentRoute,...h}}i(l,"mergeRoutes");function u(h){const g=l(h);return!F.jsonEquals(e.currentRoute,g)}i(u,"areRoutesNew");function d(h){r.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,h].filter(F.isTruthy).join(" - "))}i(d,"updateWindowTitle");function f(h){if(!u(h))return;const g=l(h);e.router?e.router.setRoute(g):n({currentRoute:{...e.currentRoute,...g}}),r.elementBookRoutePaths&&!F.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&o(new s.pathUpdate(g.paths))}i(f,"updateRoutes");try{if(r.elementBookRoutePaths&&!F.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&f({paths:r.elementBookRoutePaths}),r.internalRouterConfig?.useInternalRouter&&!e.router){const D=YP(r.internalRouterConfig.basePath);n({router:D}),D.listen(!0,A=>{n({currentRoute:A})})}else!r.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const h={themeColor:r.themeColor};if(!F.jsonEquals(h,e.colors.config)){const D=I1(h);n({colors:{config:h,theme:D}}),jD(t,D)}const g=r._debug??!1,m=cD({entries:r.pages,debug:g});(!e.treeBasedControls||e.treeBasedControls.pages!==r.pages||e.treeBasedControls.lastGlobalInputs!==r.globalValues)&&(r._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:r.pages,lastGlobalInputs:r.globalValues??{},controls:z2(m.tree,{children:e.treeBasedControls?.controls.children,controls:r.globalValues})}}));const p=V2(e.currentRoute.paths),w=(p?LP({flattenedNodes:m.flattenedNodes,searchQuery:p}):void 0)??XB(m.flattenedNodes,e.currentRoute.paths,f);d(w[0]?.entry.title);const k=e.treeBasedControls?.controls;return k?(r._debug&&console.info({currentControls:k}),b`
                <div
                    class="root"
                    ${z(Mc,D=>{const A=D.detail;if(!u(A))return;if(n({loading:!0}),f(A),!(t.shadowRoot.querySelector(ks.tagName)instanceof ks))throw new TypeError(`Failed to find child '${ks.tagName}'`)})}
                    ${z(Ol.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const A=fD(k,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:A}})})}
                >
                    ${r.blockNavigation?oe:b`
                              <${ks.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${a.navHeader}></slot>
                              </${ks}>
                          `}
                    <${xs.assign({blockNavigation:!!r.blockNavigation,controls:k,currentNodes:w,currentRoute:e.currentRoute,debug:g,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${z(xs.events.loadingRender,async D=>{await O1();const A=t.shadowRoot.querySelector(xs.tagName);A?A.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${xs.tagName}' for scrolling.`),await O1(),n({loading:!D.detail})})}
                    >
                        <slot name=${a.footer}></slot>
                    </${xs}>
                </div>
            `):b`
                    <${ui.assign({message:"Failed to generate page controls."})}></${ui}>
                `}catch(h){return console.error(h),b`
                <p class="error">${Qr(h)}</p>
            `}},"render")}),Lu="None";function QB({parent:e,title:r,theme:t,hideInverseColors:n,overrides:o,useVerticalLayout:s,prefixGroupByCount:a=2,hideCopyCode:l}){const u={"Show Var Names":{controlType:me.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:me.Checkbox,initValue:!0}},d={"Theme Override":{controlType:me.Dropdown,initValue:Lu,options:[Lu,...(o||[]).map(w=>{if(w.name===Lu)throw new Error(`Cannot have theme override named '${Lu}'`);return w.name})]}},f=Pe({parent:e,title:r,controls:u});function h({controls:w,theme:k,themeColorName:D}){const A=F.isKeyOf(D,k.colors)?k.colors[D]:void 0,I=F.isKeyOf(D,k.inverse)?k.inverse[D]:void 0;if(!A||!I)throw new Error(`No theme color found by name '${D}'`);const L=b`
            <${Cv.assign({color:A,showVarValues:!0,showVarNames:w["Show Var Names"],showContrast:w["Show Contrast Tips"],fontWeight:400})}></${Cv}>
        `;return b`
            <div class="with-inverse">${L}${oe}</div>
        `}i(h,"buildThemeColorTemplate");function g(w,k,D){const A=y6(Object.keys(k.colors),I=>a?I.split("-").slice(0,a).join("-"):I);Object.entries(A).forEach(([I,L])=>{L&&w({title:I,styles:E`
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
                    `,render({controls:Y}){const te=("Theme Override"in Y&&Y["Theme Override"]&&D?.find(X=>X.name===Y["Theme Override"])||void 0)?.asTheme||k;return b`
                            <div class="theme-wrapper">
                                ${L.map(X=>h({controls:Y,theme:te,themeColorName:X}))}
                            </div>
                        `}})})}i(g,"createThemePageExamples");const m=["Click a color preview to show CSS var names and values."],p=Pe({parent:f,title:"Default",descriptionParagraphs:m,useVerticalExamples:s,controls:{...d},defineExamples({defineExample:w}){g(w,t,o)}}),v=(o||[]).map(w=>Pe({parent:f,title:w.name,useVerticalExamples:s,descriptionParagraphs:m,defineExamples({defineExample:k}){g(k,w.asTheme,void 0)}}));return[f,p,...v]}i(QB,"createColorThemeBookPages");const br=Pe({title:"Elements",parent:void 0}),_m=Pe({title:"Styles",parent:void 0}),Um=Pe({title:"Util",parent:void 0}),zm=Pe({title:"Icons",controls:{"Stroke Color":{controlType:me.Color,initValue:""},"Fill Color":{controlType:me.Color,initValue:""},"Stroke Width":{controlType:me.Number,initValue:1.5}},parent:void 0}),eR=QB({parent:_m,theme:M,title:"Vira Theme",hideInverseColors:!0,overrides:[eI],hideCopyCode:!0}),rR=Pe({title:qt.name,parent:Um,descriptionParagraphs:["Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){e({title:"stroke color",styles:E`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=qt(Nr,{"vira-icon-stroke-color":"red"});return b`
                    <${B.assign({icon:Nr})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"fill color",styles:E`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=qt(Tc,{"vira-icon-fill-color":"gold","vira-icon-stroke-color":"orange"});return b`
                    <${B.assign({icon:Tc})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"stroke width",styles:E`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=qt(Fs,{"vira-icon-stroke-color":"green","vira-icon-stroke-width":"3px"});return b`
                    <${B.assign({icon:Fs})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"with CSS var values",styles:E`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=qt(Fs,{"vira-icon-stroke-color":`${R["vira-form-error-color"].value}`}),t=qt(Fs,{"vira-icon-stroke-color":`${R["vira-form-success-color"].value}`});return b`
                    <${B.assign({icon:r})}></${B}>
                    <${B.assign({icon:t})}></${B}>
                `}}),e({title:"multiple icons with different colors",styles:E`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,render(){const r=qt(Nr,{"vira-icon-stroke-color":"red"}),t=qt(Nr,{"vira-icon-stroke-color":"dodgerblue"}),n=qt(Nr,{"vira-icon-stroke-color":"green"}),o=qt(Nr,{"vira-icon-stroke-color":"purple"});return b`
                    <${B.assign({icon:r})}></${B}>
                    <${B.assign({icon:t})}></${B}>
                    <${B.assign({icon:n})}></${B}>
                    <${B.assign({icon:o})}></${B}>
                `}})}}),Wk={async element1(){return await Vi({seconds:2}),(await ac(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-CHvxfuNE.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Vi({seconds:2}),(await ac(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-CvP9dzQn.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},Iv=qn()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:zk(Wk)}},render({state:e,inputs:r}){return Vk(e.dynamicElements,{key:r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement",error(t){return b`
                    <${Ui}>
                        ${Xi("Failed to import element",Qr(t))}
                    </${Ui}>
                `},loading(){return b`
                    <${B.assign({icon:ii})}></${B}>
                `},ready(t){if(t.element1)return b`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return b`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;zr.never("The error element will always error")}})}}),Ov=qn()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:zk(Wk)}},render({state:e,inputs:r}){return e.dynamicElements.update(r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement"),Vk(e.dynamicElements,{error(t){return b`
                    <${Ui}>
                        ${Xi("Failed to import element",Qr(t))}
                    </${Ui}>
                `},loading(){return b`
                    <${B.assign({icon:ii})}></${B}>
                `},ready(t){if(t.element1)return b`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return b`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;zr.never("The error element will always error")}})}}),Bv=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],tR=Pe({parent:Um,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return b`
                    <${Ke.assign({value:String(r.value),options:Bv})}
                        ${z(Ke.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${Ke}>
                    <${Iv.assign({numberValue:r.value})}></${Iv}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return b`
                    <${Ke.assign({value:String(r.value),options:Bv})}
                        ${z(Ke.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${Ke}>
                    <${Ov.assign({numberValue:r.value})}></${Ov}>
                `}})}}),nR=[{title:"unselected",content:"my label",inputs:{selected:!1}},{title:"selected",content:"my label",inputs:{selected:!0}},{title:"with custom child",content:"custom child",inputs:{selected:!0},customTemplate:b`
            <b>This is custom</b>
        `},{title:"constrained width",content:"has more text than is possible to fit",customStyle:E`
            :host {
                max-width: 100px;
            }
        `,inputs:{selected:!0}},{title:"stretched width",content:"wide",customStyle:E`
            ${Jo} {
                width: 400px;
            }
        `,inputs:{selected:!0}},{title:"disabled",content:"my label",inputs:{selected:!0,disabled:!0}},{title:"no default pointer styles",content:"my label",inputs:{selected:!0,disablePointerStyles:!0}},{title:"icon override",content:"my label",inputs:{selected:!1,iconOverride:qt(Bd,{"vira-icon-stroke-color":"blue"})}},{title:"with ViraLink content",customStyle:E`
            ${Xn} {
                text-decoration: none;
            }
        `,content:b`
            <${Xn.assign({link:{url:"https://example.com",newTab:!0},disableLinkStyles:!0})}>
                link label
            </${Xn}>
        `,inputs:{selected:!1}}],oR=Pe({title:Jo.tagName,parent:br,defineExamples({defineExample:e}){nR.forEach(r=>{e({title:r.title,styles:r.customStyle,render(){return b`
                        <${Jo.assign(r.inputs)}>${r.content}</${Jo}>
                    `}})})}}),Xa=[{content:"one"},{content:"two"},{content:"three"},{content:"four"},{content:"five"},{content:"six"}],Rv={content:b`
        <div
            style=${E`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `}
        >
            This menu item is much longer than the others
        </div>
    `},iR=[{title:"basic"},{title:"rounded",inputs:{menuCornerStyle:$$.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",menuItems:[...Xa,Rv]},{title:"restricted long item",inputs:{horizontalAnchor:_i.Both},menuItems:[...Xa,Rv]},{title:"ViraLink URL item",menuItems:[...Xa,{content:b`
                    <${Xn.assign({link:{url:"https://www.wikipedia.org",newTab:!0},disableLinkStyles:!0})}>
                        Wikipedia link
                    </${Xn}>
                `}]},{title:"ViraLink route item",menuItems:[...Xa,{content:b`
                    <${Xn.assign({route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(e,r){return console.info(e,r),!1}}},disableLinkStyles:!0})}>
                        Route link
                    </${Xn}>
                `}]}],sR=Pe({parent:br,title:Tu.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){iR.forEach(r=>{e({title:r.title,styles:E`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){const t=r.menuItems||Xa;return b`
                        <${Tu.assign({popUpOffset:{vertical:-1},...r.inputs})}>
                            <div class="trigger" slot=${Tu.slotNames.trigger}>
                                Trigger Menu
                            </div>
                            ${S$(t)}
                        </${Tu}>
                    `}})})}}),aR=[{title:"basic",items:[{content:"one"},{content:"two"},{content:"three"}]},{title:"with selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three"}]},{title:"with multi selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three",selected:!0}]},{title:"with disabled item",items:[{content:"one"},{content:"two",disabled:!0},{content:"three"}]}],lR=Pe({parent:br,title:ji.tagName,defineExamples({defineExample:e}){aR.forEach(r=>{e({title:r.title,render(){return b`
                        <${ji.assign({...r.menuInputs})}>
                            ${r.items.map(t=>b`
                                    <${Jo.assign({selected:t.selected,disabled:t.disabled,disablePointerStyles:t.disablePointerStyles})}>
                                        ${t.content}
                                    </${Jo}>
                                `)}
                        </${ji}>
                    `}})})}}),uR=Pe({parent:br,title:de.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:E`
                ${de} {
                    ${R["vira-form-focus-outline-border-radius"].name}: 0;
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
            `,render(){return b`
                    <${de.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${de.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>Pop up!</div>
                    </${de}>
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
            `,render(){return b`
                    <${de.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
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
            `,render(){return b`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:_i.Right})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
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
            `,render(){return b`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:_i.Left})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
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
            `,render(){return b`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:_i.Right})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>not long</div>
                    </${de}>
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
            `,render(){return b`
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
                `}})}}),cR=[{title:"menu shadow",styles:Li.menuShadow},{title:"menu shadow reversed",styles:Li.menuShadowReversed},{title:"modal",styles:Li.modal}],dR=Pe({parent:_m,title:"Shadows",defineExamples({defineExample:e}){cR.forEach(r=>{e({title:r.title,styles:E`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${r.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return b`
                        <div class="shadow-block"></div>
                    `}})})}}),fR=Pe({parent:br,title:vr.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:me.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return b`
                    <${vr.assign({text:"Text here",bold:!1})}></${vr}>
                `}}),e({title:"Bold",render(){return b`
                    <${vr.assign({text:"Text here",bold:!0})}></${vr}>
                `}}),e({title:"Dynamic",render({controls:r}){return b`
                    <${vr.assign({text:"Text here",bold:r.bolded})}></${vr}>
                `}}),e({title:"Resized",styles:E`
                ${vr} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return b`
                    <${vr.assign({text:"Not Bolded",bold:!1})}></${vr}>
                    <${vr.assign({text:"Bolded",bold:!0})}></${vr}>
                `}}),e({title:"Alignment",styles:E`
                ${vr} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return b`
                    <${vr.assign({text:"Not Bolded",bold:!1})}></${vr}>
                    <${vr.assign({text:"Bolded",bold:!0})}></${vr}>
                `}}),e({title:"Stylized",styles:E`
                ${vr} {
                    text-decoration: underline;
                }
            `,render(){return b`
                    <${vr.assign({text:"Not Bolded",bold:!1})}></${vr}>
                    <${vr.assign({text:"Bolded",bold:!0})}></${vr}>
                `}})}}),hR=[{label:"basic",extraInputs:{}},{label:"with 24px icon",extraInputs:{icon:Pc}},{label:"with 16px icon",extraInputs:{icon:Nc}},{label:"only 24px icon",extraInputs:{icon:Pc,text:""}},{label:"only 16px icon",extraInputs:{icon:Nc,text:""}},{label:"disabled",extraInputs:{isDisabled:!0}},{label:"menu caret",extraInputs:{showMenuCaret:!0}}],gR=E`
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
`,mR=Pe({parent:br,title:Ie.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],defineExamples({defineExample:e}){wm.forEach(r=>{e({title:r,styles:gR,render(){return hR.map(({label:t,extraInputs:n})=>b`
                            <h3>${t}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${Sl.map(o=>b`
                                                <th>${o}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${$m.map(o=>b`
                                            <tr>
                                                <th>${o}</th>
                                                ${Sl.map(s=>b`
                                                        <td>
                                                            <${Ie.assign({text:"Button",...n,buttonSize:r,buttonEmphasis:o,colorVariant:s})}></${Ie}>
                                                        </td>
                                                    `)}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})}),e({title:"customized colors",styles:E`
                :host {
                    ${Ie.cssVars["vira-button-text-color"].name}: purple;
                    ${Ie.cssVars["vira-button-background-color"].name}: pink;
                    ${Ie.cssVars["vira-button-border-color"].name}: magenta;

                    ${Ie.cssVars["vira-button-hover-text-color"].name}: white;
                    ${Ie.cssVars["vira-button-hover-background-color"].name}: orange;
                    ${Ie.cssVars["vira-button-hover-border-color"].name}: red;

                    ${Ie.cssVars["vira-button-active-text-color"].name}: black;
                    ${Ie.cssVars["vira-button-active-background-color"].name}: yellow;
                    ${Ie.cssVars["vira-button-active-border-color"].name}: goldenrod;

                    ${Ie.cssVars["vira-button-disabled-text-color"].name}: gray;
                    ${Ie.cssVars["vira-button-disabled-background-color"].name}: lightgray;
                    ${Ie.cssVars["vira-button-disabled-border-color"].name}: darkgray;
                }
            `,render(){return b`
                    <${Ie.assign({text:"hello",colorVariant:ze.None})}></${Ie}>
                `}})}}),pR=[{title:"basic"},{title:"success",inputs:{cardState:bh.Success}},{title:"error",inputs:{cardState:bh.Error}},{title:"long",content:b`
            <p
                style=${E`
                    ${nu}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],bR=Pe({parent:br,title:qf.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){pR.forEach(r=>{e({title:r.title,render(){return b`
                        <${qf.assign(r.inputs||{})}>
                            ${r.content||"Content"}
                        </${qf}>
                    `}})})}}),vR=Pe({parent:br,title:ge.tagName,controls:{Checked:{controlType:me.Checkbox,initValue:!1},Disabled:{controlType:me.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:r,updateState:t}){return b`
                    <${ge.assign({value:r.checked})}
                        ${z(ge.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return b`
                    <${ge.assign({value:r.checked})}
                        ${z(ge.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:r,updateState:t}){return b`
                    <${ge.assign({value:r.checked,hasError:!0})}
                        ${z(ge.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"disabled unchecked",render(){return b`
                    <${ge.assign({value:!1,disabled:!0})}></${ge}>
                `}}),e({title:"disabled checked",render(){return b`
                    <${ge.assign({value:!0,disabled:!0})}></${ge}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:r}){return b`
                    <${ge.assign({value:r.Checked,disabled:r.Disabled})}></${ge}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return b`
                    <${ge.assign({value:!0})}></${ge}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:r,updateState:t}){return b`
                    <${ge.assign({value:r.checked,label:"label goes here"})}
                        ${z(ge.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:r,updateState:t}){return b`
                    <${ge.assign({value:r.checked,label:"label goes here",horizontal:!0})}
                        ${z(ge.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:E`
                ${ge} {
                    max-width: 400px;
                }
            `,render({state:r,updateState:t}){return b`
                    <${ge.assign({value:r.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${z(ge.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:r,updateState:t}){return b`
                    <${ge.assign({value:r.checked,fillWhenChecked:!0})}
                        ${z(ge.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return b`
                    <${ge.assign({value:r.checked,fillWhenUnchecked:!0})}
                        ${z(ge.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:r,updateState:t}){return b`
                    <${ge.assign({value:r.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${z(ge.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${ge}>
                `}})}}),yR=Pe({title:Hr.tagName,parent:br,descriptionParagraphs:["A collapsible card element with built-in header, caret icon, and card styling. Wraps ViraCollapsibleWrapper with opinionated styles."],defineExamples({defineExample:e}){e({title:"basic",styles:E`
                p {
                    ${Tr}
                }
            `,render(){return b`
                    <${Hr}>
                        <span slot=${Hr.slotNames.header}>Card Header</span>
                        <p>Card content goes here.</p>
                    </${Hr}>
                `}}),e({title:"start expanded",styles:E`
                p {
                    ${Tr}
                }
            `,render(){return b`
                    <${Hr.assign({startExpanded:!0})}>
                        <span slot=${Hr.slotNames.header}>
                            Expanded Card Header
                        </span>
                        <p>This card starts expanded.</p>
                    </${Hr}>
                `}}),e({title:"block expansion",styles:E`
                p {
                    ${Tr}
                }
            `,render(){return b`
                    <${Hr.assign({blockExpansion:!0})}>
                        <span slot=${Hr.slotNames.header}>Always Expanded</span>
                        <p>This card cannot be collapsed.</p>
                    </${Hr}>
                `}}),e({title:"raw collapsible",styles:E`
                p {
                    ${Tr}
                }
            `,render(){return b`
                    <${Hr.assign({rawCollapsible:!0,startExpanded:!0})}>
                        <span slot=${Hr.slotNames.header}>Raw Header</span>
                        <p>No card border or padding styles.</p>
                    </${Hr}>
                `}}),e({title:"hidden header",styles:E`
                p {
                    ${Tr}
                }
            `,render(){return b`
                    <${Hr.assign({hideHeader:!0,startExpanded:!0})}>
                        <p>Content with no header visible.</p>
                    </${Hr}>
                `}}),e({title:"wide",styles:E`
                div {
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                }
                p {
                    ${Tr}
                }
            `,render(){return b`
                    <div>
                        <${Hr}>
                            <span slot=${Hr.slotNames.header}>Wide</span>
                            <p>Content content content content content content content.</p>
                        </${Hr}>
                    </div>
                `}})}}),wR=Pe({title:mt.tagName,parent:br,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:r,state:t}){return new Array(3).fill(0).map((n,o)=>b`
                        <${mt.assign({expanded:!!t.expandedStates[o]})}
                            ${z(mt.events.expandChange,s=>{const a=[...t.expandedStates];a[o]=s.detail,r({expandedStates:a})})}
                        >
                            <div
                                class="section-header"
                                slot=${mt.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${z("click",()=>{const s=[...t.showMoreStates];s[o]=!s[o],r({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Lt(!!t.showMoreStates[o],b`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${mt}>
                    `)}}),e({title:"wider examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:r,state:t}){return new Array(3).fill(0).map((n,o)=>b`
                        <${mt.assign({expanded:!!t.expandedStates[o]})}
                            ${z(mt.events.expandChange,s=>{const a=[...t.expandedStates];a[o]=s.detail,r({expandedStates:a})})}
                        >
                            <div
                                class="section-header"
                                slot=${mt.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${z("click",()=>{const s=[...t.showMoreStates];s[o]=!s[o],r({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Lt(!!t.showMoreStates[o],b`
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
                        </${mt}>
                    `)}})}}),Ju=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Really really super duper long option",value:"4"},{label:"Really really super duper long option",value:"5"},{label:"Really really super duper long option",value:"6"},{label:"Really really super duper long option",value:"7"},{label:"Really really super duper long it just keeps going because it's so long option",value:"8"}],$R=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{value:"1",label:"1"},{value:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with disabled item",inputs:{selected:[],options:[...Ju,{value:"42",label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:E`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:E`
            ${Ja} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Nr}}],kR=Pe({title:Ja.tagName,parent:br,controls:{Selected:{controlType:me.Dropdown,initValue:"",options:["",...Ju.map(e=>e.label)]},Prefix:{controlType:me.Text,initValue:""},"Force State":{controlType:me.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:me.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:me.Dropdown,initValue:"",options:["",...Object.keys(X1)]},Disabled:{controlType:me.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:me.Text,initValue:"Select something"}},defineExamples({defineExample:e}){$R.forEach(r=>{e({title:r.title,state(){return{selected:r.inputs?.selected||[]}},styles:r.customStyle,render({state:t,updateState:n,controls:o}){const s={...r.inputs,placeholder:r.inputs&&"placeholder"in r.inputs?r.inputs.placeholder:o.Placeholder,options:r.inputs?.options||Ju,selected:o.Selected?[Ju.find(a=>a.label===o.Selected)?.value].filter(F.isTruthy):t.selected,selectionPrefix:o.Prefix||r.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":r.inputs?.isDisabled,icon:o.Icon?X1[o.Icon]:r.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":r.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":r.inputs?.z_debug_forceOpenState};return b`
                        <${Ja.assign(s)}
                            ${z(Ja.events.selectedChange,a=>{n({selected:a.detail})})}
                        ></${Ja}>
                    `}})})}}),xR=Pe({parent:br,title:Ui.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return b`
                    <${Ui}>Error Content</${Ui}>
                `}})}}),$0=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],DR=Pe({parent:br,title:Tt.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Te.Text,label:"First Name",value:r.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:Te.Text,label:"Last Name",value:r.lastName,isRequired:!0},subscribe:{type:Te.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Te.Email,label:"Email Address",value:r.email},password:{type:Te.NewPassword,label:"Password",value:r.password},userRole:{type:Te.Select,label:"Role",options:$0,value:r.userRole,placeholder:"placeholder"},quantity:{type:Te.Number,label:"Quantity",value:r.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:Te.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:Te.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return b`
                    <${Tt.assign({fields:n})}
                        ${z(Tt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${Ie.assign({text:"Cancel",buttonEmphasis:Xe.Subtle,colorVariant:ze.Neutral})}></${Ie}>
                            <${Ie.assign({text:"Submit"})}></${Ie}>
                        </div>
                    </${Tt}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Te.Text,label:"First Name",value:r.firstName},lastName:{type:Te.Text,label:"Last Name",value:r.lastName}};return b`
                    <${Tt.assign({fields:n})}
                        ${z(Tt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <${Ne.assign({value:"",label:"More stuff"})}></${Ne}>
                        <div class="buttons">
                            <${Ie.assign({text:"Cancel",buttonEmphasis:Xe.Subtle,colorVariant:ze.Neutral})}></${Ie}>
                            <${Ie.assign({text:"Submit"})}></${Ie}>
                        </div>
                    </${Tt}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Tt} {
                    width: 400px;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Te.Text,label:"First Name",value:r.firstName},lastName:{type:Te.Text,label:"Last Name",value:r.lastName},subscribe:{type:Te.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Te.Email,label:"Email Address",value:r.email},password:{type:Te.NewPassword,label:"Password",value:r.password},userRole:{type:Te.Select,label:"Role",options:$0,value:r.userRole}};return b`
                    <${Tt.assign({fields:n})}
                        ${z(Tt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${Ie.assign({text:"Cancel",buttonEmphasis:Xe.Subtle,colorVariant:ze.Neutral})}></${Ie}>
                            <${Ie.assign({text:"Submit"})}></${Ie}>
                        </div>
                    </${Tt}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Te.Text,label:"First Name",value:r.firstName},lastName:{type:Te.Text,label:"Last Name",value:r.lastName},subscribe:{type:Te.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Te.Email,label:"Email Address",value:r.email},password:{type:Te.NewPassword,label:"Password",value:r.password},userRole:{type:Te.Select,label:"Role",options:$0,value:r.userRole}};return b`
                    <${Tt.assign({fields:n,isDisabled:!0})}
                        ${z(Tt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${Ie.assign({text:"Cancel",buttonEmphasis:Xe.Subtle,colorVariant:ze.Neutral})}></${Ie}>
                            <${Ie.assign({text:"Submit"})}></${Ie}>
                        </div>
                    </${Tt}>
                `}})}}),CR=Pe({title:B.tagName,parent:br,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return b`
                    <${B.assign({icon:Nr})}></${B}>
                `}}),e({title:"using createColoredIcon",render(){return b`
                    <${B.assign({icon:qt(Nr,{"vira-icon-stroke-color":"red"})})}></${B}>
                `}}),e({title:"fit container",styles:E`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return b`
                    <${B.assign({icon:qt(Nr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${B}>
                `}})}}),ER=Pe({title:Bo.tagName,parent:br,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:E`
                    border-radius: 32px;
                `,loadingSlot:b`
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
                        <${B.assign({icon:ii,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:E`
                    border-radius: 32px;
                `,errorSlot:b`
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
                        <${B.assign({icon:Tl,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:E`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:E`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:E`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:b`
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
                        <${B.assign({icon:ii,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `,errorSlot:b`
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
                        <${B.assign({icon:Tl,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `}].forEach(t=>{e({title:t.title,styles:E`
                    ${Bo} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${t.styles||E``}
                    }

                    ${t.allowReload?E`
                              ${Bo} {
                                  cursor: pointer;
                              }

                              ${Bo}:hover {
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
                `,state(){return{imageUrl:t.inputs.imageUrl}},render({state:n,updateState:o}){return b`
                        <${Bo.assign({...t.inputs,imageUrl:n.imageUrl})}
                            ${z("click",()=>{t.allowReload&&o({imageUrl:`${t.inputs.imageUrl}?di=${Oi()}`})})}
                        >
                            ${t.loadingSlot?b`
                                      <div class="slot-wrapper" slot=${Bo.slotNames.loading}>
                                          ${t.loadingSlot}
                                      </div>
                                  `:oe}${t.errorSlot?b`
                                      <div class="slot-wrapper" slot=${Bo.slotNames.error}>
                                          ${t.errorSlot}
                                      </div>
                                  `:oe}
                        </${Bo}>
                    `}})})}}),AR=Pe({title:Ne.tagName,parent:br,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:me.Color,initValue:R["vira-form-foreground-color"].default},"Placeholder color":{controlType:me.Color,initValue:R["vira-form-placeholder-color"].default},"Border color":{controlType:me.Color,initValue:R["vira-form-border-color"].default},"Focus color":{controlType:me.Color,initValue:R["vira-form-focus-outline-color"].default},"Selection color":{controlType:me.Color,initValue:R["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function r({styles:n,title:o,inputs:s}){e({title:o,styles:E`
                    ${n||E``}
                `,state(){return{value:s.value}},render({state:a,updateState:l,controls:u}){const d={[String(R["vira-form-foreground-color"].name)]:u["Text color"],[String(R["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(R["vira-form-border-color"].name)]:u["Border color"],[String(R["vira-form-focus-outline-color"].name)]:u["Focus color"],[String(R["vira-form-text-selection-color"].name)]:u["Selection color"]},f=cr(d,(g,m)=>m||"inherit"),h=Object.entries(f).map(([g,m])=>[g,m].join(": ")+";").join(`
`);return b`
                        <${Ne.assign({...s,value:a.value})}
                            style=${h}
                            ${z(Ne.events.valueChange,g=>{l({value:g.detail}),console.info("changed:",g.detail)})}
                        ></${Ne}>
                    `}})}i(r,"defineInputExample"),[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Nr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:E`
                    ${Ne} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Nr}},{title:"taller height",styles:E`
                    ${Ne} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Nr}},{title:"shorter height",styles:E`
                    ${Ne} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Nr}},{title:"max width",styles:E`
                    ${Ne} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:E`
                    ${Ne} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Pi.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Pi.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:E`
                    ${Ne} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:E`
                    ${Ne} {
                        width: unset;
                    }
                `}].forEach(r)}}),SR=Pe({title:Xn.tagName,parent:br,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:me.Color,initValue:""},"Hover color":{controlType:me.Color,initValue:""},"Active color":{controlType:me.Color,initValue:""}},defineExamples({defineExample:e}){function r({title:t,inputs:n}){e({title:t,render({controls:o}){const s=E`
                        ${R["vira-form-accent-primary-color"].name}: ${Me(o["Hover color"]||"inherit")};
                        ${R["vira-form-accent-primary-active-color"].name}: ${Me(o["Active color"]||"inherit")};
                        color: ${Me(o["CSS Color"]||"inherit")};
                    `;return b`
                        <${Xn.assign(n)} style=${s}>My Link</${Xn}>
                    `}})}i(r,"defineLinkExample"),r({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),r({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(t,n){return console.info(t,n),!1}}}}}),r({title:"disabled link styles",inputs:{disableLinkStyles:!0,link:{newTab:!0,url:"https://www.wikipedia.org"}}})}}),MR=Pe({title:Ro.tagName,parent:br,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:r,updateState:t}){return b`
                    <button
                        ${z("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Ro.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${z(Ro.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Ro}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:E`
                ${Ro} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${R["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:r,updateState:t}){return b`
                    <button
                        ${z("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Ro.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${z(Ro.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Ro}>
                `}})}}),Qa=E`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,k0=b`
    <${Qn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${Qn.slotNames.large}>Large</div>
        <div class="small" slot=${Qn.slotNames.small}>Small</div>
    </${Qn}>
`,Ts={max:120,min:25,default:80},Lv=sr()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":lc(Ts.default)},state(){return{intervalId:void 0,increment:1}},styles:i(({cssVars:e})=>E`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t,cssVars:n}){globalThis.clearInterval(e.intervalId),r({intervalId:globalThis.setInterval(()=>{const o=Kh.isNumber(U6(BD({onElement:t,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Ts.default;(o>=Ts.max||o<=Ts.min)&&r({increment:e.increment*-1}),ag({onElement:t,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:lc(o+e.increment)})},10)})},cleanup({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:void 0})},render(){return b`
            <slot></slot>
        `}}),jv=sr()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":lc(Ts.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:E`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${Qa}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:globalThis.setInterval(()=>{r({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:void 0})},render({state:e}){return b`
            <${Qn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${Qn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${Qn.slotNames.small}>Small</div>
            </${Qn}>
        `}}),FR=Pe({title:Qn.tagName,parent:br,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:E`
                ${Qa}
            `,render(){return k0}}),e({title:"overflowing",styles:E`
                ${Qa}

                ${Qn} {
                    max-width: 50px;
                }
            `,render(){return k0}}),e({title:"dynamic size",styles:E`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Qa}

                .wrapper {
                    width: ${Ts.max+10}px;
                }
            `,render(){return b`
                    <div class="wrapper">
                        <${Lv}>
                            ${k0}
                        </${Lv}>
                    </div>
                `}}),e({title:"dynamic slot",styles:E`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Qa}
            `,render(){return b`
                    <${jv}></${jv}>
                `}})}}),TR=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:E`
            :host {
                ${R["vira-form-filled-background-color"].name}: red;
                ${R["vira-form-accent-primary-color"].name}: black;
                ${fo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${fo} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:E`
            :host {
                ${R["vira-form-filled-background-color"].name}: red;
                ${R["vira-form-accent-primary-color"].name}: yellow;
                ${fo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${fo} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:E`
            :host {
                ${R["vira-form-filled-background-color"].name}: red;
                ${R["vira-form-accent-primary-color"].name}: yellow;
                ${fo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${fo} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],NR=Pe({parent:br,title:fo.tagName,defineExamples({defineExample:e}){TR.forEach(r=>{e({title:r.title,styles:E`
                    ${r.styles||E``}
                `,render(){return b`
                        <${fo.assign({value:50,...r.inputs})}></${fo}>
                    `}})})}}),jr=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],PR=[{title:"basic",inputs:{options:jr}},{title:"with really long option",inputs:{options:[...jr,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:jr,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:jr,disabled:!0}},{title:"error",inputs:{options:jr,hasError:!0}},{title:"with icon",inputs:{options:jr,icon:Nr}},{title:"custom width",inputs:{options:jr},styles:E`
            ${Ke} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:jr,icon:Nr},styles:E`
            ${Ke} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:jr,icon:Nr},styles:E`
            ${Ke} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:jr,label:"Pick an option"}},{title:"with long label",inputs:{options:jr,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:jr,label:"Pick a really really really really long option"},styles:E`
            ${Ke} {
                width: unset;
            }
        `},{title:"raw",inputs:{options:[...jr,{label:"really really really really really really really really long option",value:"something"}],rawSelect:!0,icon:Nr}}],IR=Pe({parent:br,title:Ke.tagName,defineExamples({defineExample:e}){PR.forEach(r=>{e({title:r.title,styles:E`
                    ${r.styles||E``}
                `,state(){return{selected:void 0}},render({state:t,updateState:n}){return b`
                        <${Ke.assign({...r.inputs,value:t.selected??r.inputs.value})}
                            ${z(Ke.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${Ke}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return b`
                    <${Ke.assign({options:jr,value:jr[0]?.value})}></${Ke}>
                `}}),e({title:"force update",render(){return b`
                    <${_v}></${_v}>
                `}})}}),_v=sr()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:r}){e({intervalId:globalThis.setInterval(()=>{const t=jr.findIndex(o=>o.value===r.value),n=wr.isDefined(jr[(t+1)%jr.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return b`
            <${Ke.assign({options:jr,value:e.value})}></${Ke}>
        `}}),OR=[{label:"basic",isClickable:void 0},{label:"selectable",isClickable:{selected:!0}},{label:"cancellable",isClickable:{cancellable:!0}},{label:"disabled",disabled:!0,isClickable:{selected:!0}}],BR=Pe({parent:br,title:Ua.tagName,descriptionParagraphs:["A tag element with selectable, cancellable, size, emphasis, and color variants."],defineExamples({defineExample:e}){wm.forEach(r=>{e({title:r,styles:E`
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
                `,state(){return{clicked:{}}},render({state:t,updateState:n}){return OR.map(({label:o,...s})=>b`
                            <h3>${o}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${Sl.map(a=>b`
                                                <th>${a}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${$m.map(a=>b`
                                            <tr>
                                                <th>${a}</th>
                                                ${Sl.map(l=>{const u=[o,a,l].join("-"),d=F.isBoolean(s.isClickable?.selected)?{selected:!t.clicked[u]}:s.isClickable,f=b`
                                                        <${Ua.assign({text:"Label",...s,size:r,emphasis:a,color:l,isClickable:d})}
                                                            class=${At({cancelled:!!s.isClickable?.cancellable&&!!t.clicked[u]})}
                                                            ${z(Ua.events.cancel,()=>{n({clicked:{...t.clicked,[u]:!0}})})}
                                                            ${z(Ua.events.toggle,h=>{n({clicked:{...t.clicked,[u]:!h.detail}})})}
                                                        ></${Ua}>
                                                    `;return b`
                                                        <td>${f}</td>
                                                    `})}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})})}});function Kk(e,r){Vs(e).forEach(t=>{r({title:t.name,styles:E`
                button {
                    ${Tr}
                    display: flex;
                    padding: 8px;
                    border-radius: ${R["vira-form-radius"].value};
                    cursor: pointer;

                    &:hover {
                        background-color: #f2f2f2;

                        & ${B} {
                            border-color: red;
                        }
                    }

                    &:active {
                        background-color: #999999;

                        & ${B} {
                            border-color: transparent;
                        }
                    }
                }

                ${B} {
                    border: 1px solid transparent;
                }
            `,render({controls:n}){const o=E`
                    ${y["vira-icon-fill-color"].name}: ${Me(n["Fill Color"]||"inherit")};
                    ${y["vira-icon-stroke-color"].name}: ${Me(n["Stroke Color"]||"inherit")};
                    ${y["vira-icon-stroke-width"].name}: ${Me(n["Stroke Width"]?lc(n["Stroke Width"]):"inherit")};
                `;return b`
                    <button>
                        <${B.assign({icon:t})}
                            style=${o}
                        ></${B}>
                    </button>
                `}})})}i(Kk,"defineIconExamples");const RR=Pe({title:"16px Icons",parent:zm,defineExamples({defineExample:e}){Kk(UI,e)}}),LR=Pe({title:"24px Icons",parent:zm,defineExamples({defineExample:e}){Kk(_I,e)}}),jR=[br,zm,_m,Um],_R=[fR,mR,bR,vR,yR,wR,kR,xR,DR,CR,ER,AR,SR,oR,lR,sR,MR,FR,uR,NR,IR,BR].sort((e,r)=>e.title.localeCompare(r.title)),UR=[..._R,rR,tR,RR,LR,dR,...eR],zR=[...jR,...UR];qn()({tagName:"vira-book-app",styles:E`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Ru} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return b`
            <${Ru.assign({internalRouterConfig:{basePath:bm("vira"),useInternalRouter:!0},pages:zR,themeColor:"#33ccff"})}>
                <h1 slot=${Ru.slotNames.navHeader}>Vira</h1>
            </${Ru}>
        `}});export{qn as d,b as h};
