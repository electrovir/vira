var Yk=Object.defineProperty;var i=(e,r)=>Yk(e,"name",{value:r,configurable:!0});i(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}i(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}i(n,"processPreload")},"polyfill")();var nt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(nt||(nt={}));function _c(e,r=t=>t){const t=new Map;return e.filter(n=>{const o=r(n);return t.get(o)?!1:(t.set(o,n),!0)})}i(_c,"removeDuplicates");class Th{static{i(this,"Diff")}diff(r,t,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const s=this.castInput(r,n),a=this.castInput(t,n),l=this.removeEmpty(this.tokenize(s,n)),u=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(l,u,n,o)}diffWithOptionsObj(r,t,n,o){var s;const a=i(E=>{if(E=this.postProcess(E,n),o){setTimeout(function(){o(E)},0);return}else return E},"done"),l=t.length,u=r.length;let d=1,f=l+u;n.maxEditLength!=null&&(f=Math.min(f,n.maxEditLength));const h=(s=n.timeout)!==null&&s!==void 0?s:1/0,g=Date.now()+h,m=[{oldPos:-1,lastComponent:void 0}];let y=this.extractCommon(m[0],t,r,0,n);if(m[0].oldPos+1>=u&&y+1>=l)return a(this.buildValues(m[0].lastComponent,t,r));let k=-1/0,x=1/0;const C=i(()=>{for(let E=Math.max(k,-d);E<=Math.min(x,d);E+=2){let I;const j=m[E-1],K=m[E+1];j&&(m[E-1]=void 0);let ae=!1;if(K){const me=K.oldPos-E;ae=K&&0<=me&&me<l}const Te=j&&j.oldPos+1<u;if(!ae&&!Te){m[E]=void 0;continue}if(!Te||ae&&j.oldPos<K.oldPos?I=this.addToPath(K,!0,!1,0,n):I=this.addToPath(j,!1,!0,1,n),y=this.extractCommon(I,t,r,E,n),I.oldPos+1>=u&&y+1>=l)return a(this.buildValues(I.lastComponent,t,r))||!0;m[E]=I,I.oldPos+1>=u&&(x=Math.min(x,E-1)),y+1>=l&&(k=Math.max(k,E+1))}d++},"execEditLength");if(o)i(function E(){setTimeout(function(){if(d>f||Date.now()>g)return o(void 0);C()||E()},0)},"exec")();else for(;d<=f&&Date.now()<=g;){const E=C();if(E)return E}}addToPath(r,t,n,o,s){const a=r.lastComponent;return a&&!s.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:r.oldPos+o,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:r.oldPos+o,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(r,t,n,o,s){const a=t.length,l=n.length;let u=r.oldPos,d=u-o,f=0;for(;d+1<a&&u+1<l&&this.equals(n[u+1],t[d+1],s);)d++,u++,f++,s.oneChangePerToken&&(r.lastComponent={count:1,previousComponent:r.lastComponent,added:!1,removed:!1});return f&&!s.oneChangePerToken&&(r.lastComponent={count:f,previousComponent:r.lastComponent,added:!1,removed:!1}),r.oldPos=u,d}equals(r,t,n){return n.comparator?n.comparator(r,t):r===t||!!n.ignoreCase&&r.toLowerCase()===t.toLowerCase()}removeEmpty(r){const t=[];for(let n=0;n<r.length;n++)r[n]&&t.push(r[n]);return t}castInput(r,t){return r}tokenize(r,t){return Array.from(r)}join(r){return r.join("")}postProcess(r,t){return r}get useLongestToken(){return!1}buildValues(r,t,n){const o=[];let s;for(;r;)o.push(r),s=r.previousComponent,delete r.previousComponent,r=s;o.reverse();const a=o.length;let l=0,u=0,d=0;for(;l<a;l++){const f=o[l];if(f.removed)f.value=this.join(n.slice(d,d+f.count)),d+=f.count;else{if(!f.added&&this.useLongestToken){let h=t.slice(u,u+f.count);h=h.map(function(g,m){const y=n[d+m];return y.length>g.length?y:g}),f.value=this.join(h)}else f.value=this.join(t.slice(u,u+f.count));u+=f.count,f.added||(d+=f.count)}}return o}}function zm(e,r){let t;for(t=0;t<e.length&&t<r.length;t++)if(e[t]!=r[t])return e.slice(0,t);return e.slice(0,t)}i(zm,"longestCommonPrefix");function Vm(e,r){let t;if(!e||!r||e[e.length-1]!=r[r.length-1])return"";for(t=0;t<e.length&&t<r.length;t++)if(e[e.length-(t+1)]!=r[r.length-(t+1)])return e.slice(-t);return e.slice(-t)}i(Vm,"longestCommonSuffix");function k0(e,r,t){if(e.slice(0,r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(r)}; this is a bug`);return t+e.slice(r.length)}i(k0,"replacePrefix");function x0(e,r,t){if(!r)return e+t;if(e.slice(-r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(r)}; this is a bug`);return e.slice(0,-r.length)+t}i(x0,"replaceSuffix");function Aa(e,r){return k0(e,r,"")}i(Aa,"removePrefix$1");function fu(e,r){return x0(e,r,"")}i(fu,"removeSuffix$1");function qm(e,r){return r.slice(0,Jk(e,r))}i(qm,"maximumOverlap");function Jk(e,r){let t=0;e.length>r.length&&(t=e.length-r.length);let n=r.length;e.length<r.length&&(n=e.length);const o=Array(n);let s=0;o[0]=0;for(let a=1;a<n;a++){for(r[a]==r[s]?o[a]=o[s]:o[a]=s;s>0&&r[a]!=r[s];)s=o[s];r[a]==r[s]&&s++}s=0;for(let a=t;a<e.length;a++){for(;s>0&&e[a]!=r[s];)s=o[s];e[a]==r[s]&&s++}return s}i(Jk,"overlapCount");function Ma(e){let r;for(r=e.length-1;r>=0&&e[r].match(/\s/);r--);return e.substring(r+1)}i(Ma,"trailingWs");function Io(e){const r=e.match(/^\s*/);return r?r[0]:""}i(Io,"leadingWs");const Qu="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Xk=new RegExp(`[${Qu}]+|\\s+|[^${Qu}]`,"ug");class Qk extends Th{static{i(this,"WordDiff")}equals(r,t,n){return n.ignoreCase&&(r=r.toLowerCase(),t=t.toLowerCase()),r.trim()===t.trim()}tokenize(r,t={}){let n;if(t.intlSegmenter){const a=t.intlSegmenter;if(a.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const l of Array.from(a.segment(r))){const u=l.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=r.match(Xk)||[];const o=[];let s=null;return n.forEach(a=>{/\s/.test(a)?s==null?o.push(a):o.push(o.pop()+a):s!=null&&/\s/.test(s)?o[o.length-1]==s?o.push(o.pop()+a):o.push(s+a):o.push(a),s=a}),o}join(r){return r.map((t,n)=>n==0?t:t.replace(/^\s+/,"")).join("")}postProcess(r,t){if(!r||t.oneChangePerToken)return r;let n=null,o=null,s=null;return r.forEach(a=>{a.added?o=a:a.removed?s=a:((o||s)&&Wm(n,s,o,a),n=a,o=null,s=null)}),(o||s)&&Wm(n,s,o,null),r}}const ex=new Qk;function rx(e,r,t){return t?.ignoreWhitespace!=null&&!t.ignoreWhitespace?ox(e,r,t):ex.diff(e,r,t)}i(rx,"diffWords");function Wm(e,r,t,n){if(r&&t){const o=Io(r.value),s=Ma(r.value),a=Io(t.value),l=Ma(t.value);if(e){const u=zm(o,a);e.value=x0(e.value,a,u),r.value=Aa(r.value,u),t.value=Aa(t.value,u)}if(n){const u=Vm(s,l);n.value=k0(n.value,l,u),r.value=fu(r.value,u),t.value=fu(t.value,u)}}else if(t){if(e){const o=Io(t.value);t.value=t.value.substring(o.length)}if(n){const o=Io(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=Io(n.value),s=Io(r.value),a=Ma(r.value),l=zm(o,s);r.value=Aa(r.value,l);const u=Vm(Aa(o,l),a);r.value=fu(r.value,u),n.value=k0(n.value,o,u),e.value=x0(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=Io(n.value),s=Ma(r.value),a=qm(s,o);r.value=fu(r.value,a)}else if(e){const o=Ma(e.value),s=Io(r.value),a=qm(o,s);r.value=Aa(r.value,a)}}i(Wm,"dedupeWhitespaceInChangeObjects");class tx extends Th{static{i(this,"WordsWithSpaceDiff")}tokenize(r){const t=new RegExp(`(\\r?\\n)|[${Qu}]+|[^\\S\\n\\r]+|[^${Qu}]`,"ug");return r.match(t)||[]}}const nx=new tx;function ox(e,r,t){return nx.diff(e,r,t)}i(ox,"diffWordsWithSpace");class ix extends Th{static{i(this,"LineDiff")}constructor(){super(...arguments),this.tokenize=lx}equals(r,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(r.endsWith(`
`)&&(r=r.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(r,t,n)}}const sx=new ix;function ax(e,r,t){return sx.diff(e,r,t)}i(ax,"diffLines");function lx(e,r){r.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const t=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const s=n[o];o%2&&!r.newlineIsToken?t[t.length-1]+=s:t.push(s)}return t}i(lx,"tokenize$1");function Km(e,r){return zv(e,new Map)}i(Km,"sortObject");function zv(e,r,t){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(r.has(e))return r.get(e);const n={};return r.set(e,n),Object.entries(e).sort((o,s)=>o[0].localeCompare(s[0])).forEach(([o,s])=>{const a=zv(s,r);n[o]=a}),n}else return e}i(zv,"recursivelySortObject");var ux=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,cx=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,dx=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Jd={Space_Separator:ux,ID_Start:cx,ID_Continue:dx},$r={isSpaceSeparator(e){return typeof e=="string"&&Jd.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Jd.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Jd.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let D0,$t,po,ec,Xo,Sn,Gr,Nh,rl;var fx=i(function(r,t){D0=String(r),$t="start",po=[],ec=0,Xo=1,Sn=0,Gr=void 0,Nh=void 0,rl=void 0;do Gr=hx(),px[$t]();while(Gr.type!=="eof");return typeof t=="function"?C0({"":rl},"",t):rl},"parse");function C0(e,r,t){const n=e[r];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const s=String(o),a=C0(n,s,t);a===void 0?delete n[s]:Object.defineProperty(n,s,{value:a,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const s=C0(n,o,t);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}return t.call(e,r,n)}i(C0,"internalize");let he,ce,Ua,co,we;function hx(){for(he="default",ce="",Ua=!1,co=1;;){we=Co();const e=Vv[he]();if(e)return e}}i(hx,"lex");function Co(){if(D0[ec])return String.fromCodePoint(D0.codePointAt(ec))}i(Co,"peek");function O(){const e=Co();return e===`
`?(Xo++,Sn=0):e?Sn+=e.length:Sn++,e&&(ec+=e.length),e}i(O,"read");const Vv={default(){switch(we){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":O();return;case"/":O(),he="comment";return;case void 0:return O(),er("eof")}if($r.isSpaceSeparator(we)){O();return}return Vv[$t]()},comment(){switch(we){case"*":O(),he="multiLineComment";return;case"/":O(),he="singleLineComment";return}throw rr(O())},multiLineComment(){switch(we){case"*":O(),he="multiLineCommentAsterisk";return;case void 0:throw rr(O())}O()},multiLineCommentAsterisk(){switch(we){case"*":O();return;case"/":O(),he="default";return;case void 0:throw rr(O())}O(),he="multiLineComment"},singleLineComment(){switch(we){case`
`:case"\r":case"\u2028":case"\u2029":O(),he="default";return;case void 0:return O(),er("eof")}O()},value(){switch(we){case"{":case"[":return er("punctuator",O());case"n":return O(),vi("ull"),er("null",null);case"t":return O(),vi("rue"),er("boolean",!0);case"f":return O(),vi("alse"),er("boolean",!1);case"-":case"+":O()==="-"&&(co=-1),he="sign";return;case".":ce=O(),he="decimalPointLeading";return;case"0":ce=O(),he="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ce=O(),he="decimalInteger";return;case"I":return O(),vi("nfinity"),er("numeric",1/0);case"N":return O(),vi("aN"),er("numeric",NaN);case'"':case"'":Ua=O()==='"',ce="",he="string";return}throw rr(O())},identifierNameStartEscape(){if(we!=="u")throw rr(O());O();const e=E0();switch(e){case"$":case"_":break;default:if(!$r.isIdStartChar(e))throw Gm();break}ce+=e,he="identifierName"},identifierName(){switch(we){case"$":case"_":case"‌":case"‍":ce+=O();return;case"\\":O(),he="identifierNameEscape";return}if($r.isIdContinueChar(we)){ce+=O();return}return er("identifier",ce)},identifierNameEscape(){if(we!=="u")throw rr(O());O();const e=E0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!$r.isIdContinueChar(e))throw Gm();break}ce+=e,he="identifierName"},sign(){switch(we){case".":ce=O(),he="decimalPointLeading";return;case"0":ce=O(),he="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ce=O(),he="decimalInteger";return;case"I":return O(),vi("nfinity"),er("numeric",co*(1/0));case"N":return O(),vi("aN"),er("numeric",NaN)}throw rr(O())},zero(){switch(we){case".":ce+=O(),he="decimalPoint";return;case"e":case"E":ce+=O(),he="decimalExponent";return;case"x":case"X":ce+=O(),he="hexadecimal";return}return er("numeric",co*0)},decimalInteger(){switch(we){case".":ce+=O(),he="decimalPoint";return;case"e":case"E":ce+=O(),he="decimalExponent";return}if($r.isDigit(we)){ce+=O();return}return er("numeric",co*Number(ce))},decimalPointLeading(){if($r.isDigit(we)){ce+=O(),he="decimalFraction";return}throw rr(O())},decimalPoint(){switch(we){case"e":case"E":ce+=O(),he="decimalExponent";return}if($r.isDigit(we)){ce+=O(),he="decimalFraction";return}return er("numeric",co*Number(ce))},decimalFraction(){switch(we){case"e":case"E":ce+=O(),he="decimalExponent";return}if($r.isDigit(we)){ce+=O();return}return er("numeric",co*Number(ce))},decimalExponent(){switch(we){case"+":case"-":ce+=O(),he="decimalExponentSign";return}if($r.isDigit(we)){ce+=O(),he="decimalExponentInteger";return}throw rr(O())},decimalExponentSign(){if($r.isDigit(we)){ce+=O(),he="decimalExponentInteger";return}throw rr(O())},decimalExponentInteger(){if($r.isDigit(we)){ce+=O();return}return er("numeric",co*Number(ce))},hexadecimal(){if($r.isHexDigit(we)){ce+=O(),he="hexadecimalInteger";return}throw rr(O())},hexadecimalInteger(){if($r.isHexDigit(we)){ce+=O();return}return er("numeric",co*Number(ce))},string(){switch(we){case"\\":O(),ce+=gx();return;case'"':if(Ua)return O(),er("string",ce);ce+=O();return;case"'":if(!Ua)return O(),er("string",ce);ce+=O();return;case`
`:case"\r":throw rr(O());case"\u2028":case"\u2029":bx(we);break;case void 0:throw rr(O())}ce+=O()},start(){switch(we){case"{":case"[":return er("punctuator",O())}he="value"},beforePropertyName(){switch(we){case"$":case"_":ce=O(),he="identifierName";return;case"\\":O(),he="identifierNameStartEscape";return;case"}":return er("punctuator",O());case'"':case"'":Ua=O()==='"',he="string";return}if($r.isIdStartChar(we)){ce+=O(),he="identifierName";return}throw rr(O())},afterPropertyName(){if(we===":")return er("punctuator",O());throw rr(O())},beforePropertyValue(){he="value"},afterPropertyValue(){switch(we){case",":case"}":return er("punctuator",O())}throw rr(O())},beforeArrayValue(){if(we==="]")return er("punctuator",O());he="value"},afterArrayValue(){switch(we){case",":case"]":return er("punctuator",O())}throw rr(O())},end(){throw rr(O())}};function er(e,r){return{type:e,value:r,line:Xo,column:Sn}}i(er,"newToken");function vi(e){for(const r of e){if(Co()!==r)throw rr(O());O()}}i(vi,"literal");function gx(){switch(Co()){case"b":return O(),"\b";case"f":return O(),"\f";case"n":return O(),`
`;case"r":return O(),"\r";case"t":return O(),"	";case"v":return O(),"\v";case"0":if(O(),$r.isDigit(Co()))throw rr(O());return"\0";case"x":return O(),mx();case"u":return O(),E0();case`
`:case"\u2028":case"\u2029":return O(),"";case"\r":return O(),Co()===`
`&&O(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw rr(O());case void 0:throw rr(O())}return O()}i(gx,"escape");function mx(){let e="",r=Co();if(!$r.isHexDigit(r)||(e+=O(),r=Co(),!$r.isHexDigit(r)))throw rr(O());return e+=O(),String.fromCodePoint(parseInt(e,16))}i(mx,"hexEscape");function E0(){let e="",r=4;for(;r-- >0;){const t=Co();if(!$r.isHexDigit(t))throw rr(O());e+=O()}return String.fromCodePoint(parseInt(e,16))}i(E0,"unicodeEscape");const px={start(){if(Gr.type==="eof")throw yi();Xd()},beforePropertyName(){switch(Gr.type){case"identifier":case"string":Nh=Gr.value,$t="afterPropertyName";return;case"punctuator":hu();return;case"eof":throw yi()}},afterPropertyName(){if(Gr.type==="eof")throw yi();$t="beforePropertyValue"},beforePropertyValue(){if(Gr.type==="eof")throw yi();Xd()},beforeArrayValue(){if(Gr.type==="eof")throw yi();if(Gr.type==="punctuator"&&Gr.value==="]"){hu();return}Xd()},afterPropertyValue(){if(Gr.type==="eof")throw yi();switch(Gr.value){case",":$t="beforePropertyName";return;case"}":hu()}},afterArrayValue(){if(Gr.type==="eof")throw yi();switch(Gr.value){case",":$t="beforeArrayValue";return;case"]":hu()}},end(){}};function Xd(){let e;switch(Gr.type){case"punctuator":switch(Gr.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Gr.value;break}if(rl===void 0)rl=e;else{const r=po[po.length-1];Array.isArray(r)?r.push(e):Object.defineProperty(r,Nh,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")po.push(e),Array.isArray(e)?$t="beforeArrayValue":$t="beforePropertyName";else{const r=po[po.length-1];r==null?$t="end":Array.isArray(r)?$t="afterArrayValue":$t="afterPropertyValue"}}i(Xd,"push");function hu(){po.pop();const e=po[po.length-1];e==null?$t="end":Array.isArray(e)?$t="afterArrayValue":$t="afterPropertyValue"}i(hu,"pop");function rr(e){return rc(e===void 0?`JSON5: invalid end of input at ${Xo}:${Sn}`:`JSON5: invalid character '${qv(e)}' at ${Xo}:${Sn}`)}i(rr,"invalidChar");function yi(){return rc(`JSON5: invalid end of input at ${Xo}:${Sn}`)}i(yi,"invalidEOF");function Gm(){return Sn-=5,rc(`JSON5: invalid identifier character at ${Xo}:${Sn}`)}i(Gm,"invalidIdentifier");function bx(e){console.warn(`JSON5: '${qv(e)}' in strings is not valid ECMAScript; consider escaping`)}i(bx,"separatorChar");function qv(e){const r={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(r[e])return r[e];if(e<" "){const t=e.charCodeAt(0).toString(16);return"\\x"+("00"+t).substring(t.length)}return e}i(qv,"formatChar");function rc(e){const r=new SyntaxError(e);return r.lineNumber=Xo,r.columnNumber=Sn,r}i(rc,"syntaxError");var vx=i(function(r,t,n){const o=[];let s="",a,l,u="",d;if(t!=null&&typeof t=="object"&&!Array.isArray(t)&&(n=t.space,d=t.quote,t=t.replacer),typeof t=="function")l=t;else if(Array.isArray(t)){a=[];for(const k of t){let x;typeof k=="string"?x=k:(typeof k=="number"||k instanceof String||k instanceof Number)&&(x=String(k)),x!==void 0&&a.indexOf(x)<0&&a.push(x)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),f("",{"":r});function f(k,x){let C=x[k];switch(C!=null&&(typeof C.toJSON5=="function"?C=C.toJSON5(k):typeof C.toJSON=="function"&&(C=C.toJSON(k))),l&&(C=l.call(x,k,C)),C instanceof Number?C=Number(C):C instanceof String?C=String(C):C instanceof Boolean&&(C=C.valueOf()),C){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof C=="string")return h(C);if(typeof C=="number")return String(C);if(typeof C=="object")return Array.isArray(C)?y(C):g(C)}i(f,"serializeProperty");function h(k){const x={"'":.1,'"':.2},C={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let E="";for(let j=0;j<k.length;j++){const K=k[j];switch(K){case"'":case'"':x[K]++,E+=K;continue;case"\0":if($r.isDigit(k[j+1])){E+="\\x00";continue}}if(C[K]){E+=C[K];continue}if(K<" "){let ae=K.charCodeAt(0).toString(16);E+="\\x"+("00"+ae).substring(ae.length);continue}E+=K}const I=d||Object.keys(x).reduce((j,K)=>x[j]<x[K]?j:K);return E=E.replace(new RegExp(I,"g"),C[I]),I+E+I}i(h,"quoteString");function g(k){if(o.indexOf(k)>=0)throw TypeError("Converting circular structure to JSON5");o.push(k);let x=s;s=s+u;let C=a||Object.keys(k),E=[];for(const j of C){const K=f(j,k);if(K!==void 0){let ae=m(j)+":";u!==""&&(ae+=" "),ae+=K,E.push(ae)}}let I;if(E.length===0)I="{}";else{let j;if(u==="")j=E.join(","),I="{"+j+"}";else{let K=`,
`+s;j=E.join(K),I=`{
`+s+j+`,
`+x+"}"}}return o.pop(),s=x,I}i(g,"serializeObject");function m(k){if(k.length===0)return h(k);const x=String.fromCodePoint(k.codePointAt(0));if(!$r.isIdStartChar(x))return h(k);for(let C=x.length;C<k.length;C++)if(!$r.isIdContinueChar(String.fromCodePoint(k.codePointAt(C))))return h(k);return k}i(m,"serializeKey");function y(k){if(o.indexOf(k)>=0)throw TypeError("Converting circular structure to JSON5");o.push(k);let x=s;s=s+u;let C=[];for(let I=0;I<k.length;I++){const j=f(String(I),k);C.push(j!==void 0?j:"null")}let E;if(C.length===0)E="[]";else if(u==="")E="["+C.join(",")+"]";else{let I=`,
`+s,j=C.join(I);E=`[
`+s+j+`,
`+x+"]"}return o.pop(),s=x,E}i(y,"serializeArray")},"stringify");const yx={parse:fx,stringify:vx};var wx=yx;const Wv="__@@augment-vir-undefined-sentinel@@__",$x=new RegExp(`['"]${Wv}['"]`);function w(e,r){if(typeof e=="string")return e;try{return wx.stringify(e,(n,o)=>o===void 0?Wv:typeof o=="bigint"?Number(o):o,r||void 0).split($x).join("undefined")}catch{return String(e)}}i(w,"stringify");var kx=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Tn;(function(e){e.Node="node",e.Web="web"})(Tn||(Tn={}));function xx(){return kx?Tn.Node:Tn.Web}i(xx,"determineRuntimeEnv");const Kv=xx();function Ph(e){return Kv===e}i(Ph,"isRuntimeEnv");function Gv(e){return e[Kv]()}i(Gv,"perEnv");function Dx(e,r){const t=typeof r=="string"&&typeof e=="string",n=typeof r!="string"||typeof e!="string",o=n?ax:rx,s=[t?"":`
`,w(r&&typeof r=="object"&&!Array.isArray(r)?Km(r):r,4),`
`].join(""),a=[t?"":`
`,w(e&&typeof e=="object"&&!Array.isArray(e)?Km(e):e,4),`
`].join(""),l=Cx(n,o(s,a)),u=Ph(Tn.Node);return[[u?wo.Green:""," +added (unexpected, added in actual)",u?wo.Red:""," -missing (expected, missing from actual)",u?wo.Reset:""].join(""),t?`

`:`
`,l].join("")}i(Dx,"prettyDiff");var wo;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(wo||(wo={}));var tc;(function(e){e.Added="+",e.Removed="-"})(tc||(tc={}));function Cx(e,r){return e?r.flatMap(n=>n.value.split(`
`).map(o=>Hm(o,n)).join(`
`)).join(""):r.map(n=>Hm(void 0,n)).join("")}i(Cx,"addDiffColors");function Hm(e,r){if(e!=null&&!e)return"";const t=Ph(Tn.Node),n=r.added?tc.Added:r.removed?tc.Removed:e==null?"":" ",o=r.added?wo.Green:r.removed?wo.Red:wo.Reset;return[t?o:"",n,e??r.value,wo.Reset].join("")}i(Hm,"addColorToChange");function ze(e){let r;try{r=Reflect.ownKeys(e)}catch{}return r??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}i(ze,"getObjectTypedKeys");function Ex(e){return ze(e).filter(r=>isNaN(Number(r)))}i(Ex,"getEnumKeys");function Wt(e){return Ex(e).map(t=>e[t])}i(Wt,"getEnumValues");const Ax=[".",":",";",",","?","!"],Mx=new RegExp(`[${Ax.join("")}]+$`);function Zm(e){return e.replace(Mx,"")}i(Zm,"removeEndingPunctuation");function Jr(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):w(e)}i(Jr,"extractErrorMessage");function Yi(...e){const r=e.map(s=>Jr(s)).filter(s=>!!Zm(s)),t=r[r.length-1]?.endsWith("."),n=r.map(s=>Zm(Jr(s)));return(n.length<2?n[0]||"":n.join(": "))+(t?".":"")}i(Yi,"combineErrorMessages");function wr(e){return e instanceof Error?e:new Error(Jr(e))}i(wr,"ensureError");function Ji(e,r){const t=wr(e),n=Yi(r,t.message);try{return t.message=n,t}catch{return new Error(n,{cause:e})}}i(Ji,"ensureErrorAndPrependMessage");var T;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(T||(T={}));var H;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(H||(H={}));H.ClientError,H.ServerError;T.Continue+"",H.Information,T.SwitchingProtocols+"",H.Information,T.Processing+"",H.Information,T.EarlyHints+"",H.Information,T.Ok+"",H.Success,T.Created+"",H.Success,T.Accepted+"",H.Success,T.NonAuthoritativeInformation+"",H.Success,T.NoContent+"",H.Success,T.ResetContent+"",H.Success,T.PartialContent+"",H.Success,T.MultiStatus+"",H.Success,T.AlreadyReported+"",H.Success,T.ImUsed+"",H.Success,T.MultipleChoices+"",H.Redirect,T.MovedPermanently+"",H.Redirect,T.Found+"",H.Redirect,T.SeeOther+"",H.Redirect,T.NotModified+"",H.Redirect,T.UseProxy+"",H.Redirect,T.Unused+"",H.Redirect,T.TemporaryRedirect+"",H.Redirect,T.PermanentRedirect+"",H.Redirect,T.BadRequest+"",H.ClientError,T.Unauthorized+"",H.ClientError,T.PaymentRequired+"",H.ClientError,T.Forbidden+"",H.ClientError,T.NotFound+"",H.ClientError,T.MethodNotAllowed+"",H.ClientError,T.NotAcceptable+"",H.ClientError,T.ProxyAuthenticationRequired+"",H.ClientError,T.RequestTimeout+"",H.ClientError,T.Conflict+"",H.ClientError,T.Gone+"",H.ClientError,T.LengthRequired+"",H.ClientError,T.PreconditionFailed+"",H.ClientError,T.PayloadTooLarge+"",H.ClientError,T.UriTooLong+"",H.ClientError,T.UnsupportedMediaType+"",H.ClientError,T.RangeNotSatisfiable+"",H.ClientError,T.ExpectationFailed+"",H.ClientError,T.ImATeapot+"",H.ClientError,T.MisdirectedRequest+"",H.ClientError,T.UnprocessableContent+"",H.ClientError,T.Locked+"",H.ClientError,T.FailedDependency+"",H.ClientError,T.TooEarly+"",H.ClientError,T.UpgradeRequired+"",H.ClientError,T.PreconditionRequired+"",H.ClientError,T.TooManyRequests+"",H.ClientError,T.RequestHeaderFieldsTooLarge+"",H.ClientError,T.UnavailableForLegalReasons+"",H.ClientError,T.InternalServerError+"",H.ServerError,T.NotImplemented+"",H.ServerError,T.BadGateway+"",H.ServerError,T.ServiceUnavailable+"",H.ServerError,T.GatewayTimeout+"",H.ServerError,T.HttpVersionNotSupported+"",H.ServerError,T.VariantAlsoNegotiates+"",H.ServerError,T.InsufficientStorage+"",H.ServerError,T.LoopDetected+"",H.ServerError,T.NotExtended+"",H.ServerError,T.NetworkAuthenticationRequired+"",H.ServerError;const Uu={[H.Information]:[T.Continue,T.SwitchingProtocols,T.Processing,T.EarlyHints],[H.Success]:[T.Ok,T.Created,T.Accepted,T.NonAuthoritativeInformation,T.NoContent,T.ResetContent,T.PartialContent,T.MultiStatus,T.AlreadyReported,T.ImUsed],[H.Redirect]:[T.MultipleChoices,T.MovedPermanently,T.Found,T.SeeOther,T.NotModified,T.UseProxy,T.Unused,T.TemporaryRedirect,T.PermanentRedirect],[H.ClientError]:[T.BadRequest,T.Unauthorized,T.PaymentRequired,T.Forbidden,T.NotFound,T.MethodNotAllowed,T.NotAcceptable,T.ProxyAuthenticationRequired,T.RequestTimeout,T.Conflict,T.Gone,T.LengthRequired,T.PreconditionFailed,T.PayloadTooLarge,T.UriTooLong,T.UnsupportedMediaType,T.RangeNotSatisfiable,T.ExpectationFailed,T.ImATeapot,T.MisdirectedRequest,T.UnprocessableContent,T.Locked,T.FailedDependency,T.TooEarly,T.UpgradeRequired,T.PreconditionRequired,T.TooManyRequests,T.RequestHeaderFieldsTooLarge,T.UnavailableForLegalReasons],[H.ServerError]:[T.InternalServerError,T.NotImplemented,T.BadGateway,T.ServiceUnavailable,T.GatewayTimeout,T.HttpVersionNotSupported,T.VariantAlsoNegotiates,T.InsufficientStorage,T.LoopDetected,T.NotExtended,T.NetworkAuthenticationRequired]};function Ih({min:e,max:r}){return e>r?{min:r,max:e}:{min:e,max:r}}i(Ih,"ensureMinMax");class nc{static{i(this,"DeferredPromise")}promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((r,t)=>{this.resolve=n=>(this.isSettled=!0,r(n)),this.reject=n=>{this.isSettled=!0,t(wr(n))}})}}class Xi extends Error{static{i(this,"LuxonError")}}class Fx extends Xi{static{i(this,"InvalidDateTimeError")}constructor(r){super(`Invalid DateTime: ${r.toMessage()}`)}}class Sx extends Xi{static{i(this,"InvalidIntervalError")}constructor(r){super(`Invalid Interval: ${r.toMessage()}`)}}class Tx extends Xi{static{i(this,"InvalidDurationError")}constructor(r){super(`Invalid Duration: ${r.toMessage()}`)}}class Ds extends Xi{static{i(this,"ConflictingSpecificationError")}}class Hv extends Xi{static{i(this,"InvalidUnitError")}constructor(r){super(`Invalid unit ${r}`)}}class gt extends Xi{static{i(this,"InvalidArgumentError")}}class Oo extends Xi{static{i(this,"ZoneIsAbstractError")}constructor(){super("Zone is an abstract class")}}const W="numeric",Nn="short",Ht="long",oc={year:W,month:W,day:W},Zv={year:W,month:Nn,day:W},Nx={year:W,month:Nn,day:W,weekday:Nn},Yv={year:W,month:Ht,day:W},Jv={year:W,month:Ht,day:W,weekday:Ht},Xv={hour:W,minute:W},Qv={hour:W,minute:W,second:W},ey={hour:W,minute:W,second:W,timeZoneName:Nn},ry={hour:W,minute:W,second:W,timeZoneName:Ht},ty={hour:W,minute:W,hourCycle:"h23"},ny={hour:W,minute:W,second:W,hourCycle:"h23"},oy={hour:W,minute:W,second:W,hourCycle:"h23",timeZoneName:Nn},iy={hour:W,minute:W,second:W,hourCycle:"h23",timeZoneName:Ht},sy={year:W,month:W,day:W,hour:W,minute:W},ay={year:W,month:W,day:W,hour:W,minute:W,second:W},ly={year:W,month:Nn,day:W,hour:W,minute:W},uy={year:W,month:Nn,day:W,hour:W,minute:W,second:W},Px={year:W,month:Nn,day:W,weekday:Nn,hour:W,minute:W},cy={year:W,month:Ht,day:W,hour:W,minute:W,timeZoneName:Nn},dy={year:W,month:Ht,day:W,hour:W,minute:W,second:W,timeZoneName:Nn},fy={year:W,month:Ht,day:W,weekday:Ht,hour:W,minute:W,timeZoneName:Ht},hy={year:W,month:Ht,day:W,weekday:Ht,hour:W,minute:W,second:W,timeZoneName:Ht};class _l{static{i(this,"Zone")}get type(){throw new Oo}get name(){throw new Oo}get ianaName(){return this.name}get isUniversal(){throw new Oo}offsetName(r,t){throw new Oo}formatOffset(r,t){throw new Oo}offset(r){throw new Oo}equals(r){throw new Oo}get isValid(){throw new Oo}}let Qd=null;class Uc extends _l{static{i(this,"SystemZone")}static get instance(){return Qd===null&&(Qd=new Uc),Qd}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return Dy(r,t,n)}formatOffset(r,t){return tl(this.offset(r),t)}offset(r){return-new Date(r).getTimezoneOffset()}equals(r){return r.type==="system"}get isValid(){return!0}}const A0=new Map;function Ix(e){let r=A0.get(e);return r===void 0&&(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),A0.set(e,r)),r}i(Ix,"makeDTF");const Ox={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Bx(e,r){const t=e.format(r).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t),[,o,s,a,l,u,d,f]=n;return[a,o,s,l,u,d,f]}i(Bx,"hackyOffset");function Rx(e,r){const t=e.formatToParts(r),n=[];for(let o=0;o<t.length;o++){const{type:s,value:a}=t[o],l=Ox[s];s==="era"?n[l]=a:ne(l)||(n[l]=parseInt(a,10))}return n}i(Rx,"partsOffset");const ef=new Map;class Eo extends _l{static{i(this,"IANAZone")}static create(r){let t=ef.get(r);return t===void 0&&ef.set(r,t=new Eo(r)),t}static resetCache(){ef.clear(),A0.clear()}static isValidSpecifier(r){return this.isValidZone(r)}static isValidZone(r){if(!r)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:r}).format(),!0}catch{return!1}}constructor(r){super(),this.zoneName=r,this.valid=Eo.isValidZone(r)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return Dy(r,t,n,this.name)}formatOffset(r,t){return tl(this.offset(r),t)}offset(r){if(!this.valid)return NaN;const t=new Date(r);if(isNaN(t))return NaN;const n=Ix(this.name);let[o,s,a,l,u,d,f]=n.formatToParts?Rx(n,t):Bx(n,t);l==="BC"&&(o=-Math.abs(o)+1);const g=Vc({year:o,month:s,day:a,hour:u===24?0:u,minute:d,second:f,millisecond:0});let m=+t;const y=m%1e3;return m-=y>=0?y:1e3+y,(g-m)/(60*1e3)}equals(r){return r.type==="iana"&&r.name===this.name}get isValid(){return this.valid}}let Ym={};function Lx(e,r={}){const t=JSON.stringify([e,r]);let n=Ym[t];return n||(n=new Intl.ListFormat(e,r),Ym[t]=n),n}i(Lx,"getCachedLF");const M0=new Map;function F0(e,r={}){const t=JSON.stringify([e,r]);let n=M0.get(t);return n===void 0&&(n=new Intl.DateTimeFormat(e,r),M0.set(t,n)),n}i(F0,"getCachedDTF");const S0=new Map;function jx(e,r={}){const t=JSON.stringify([e,r]);let n=S0.get(t);return n===void 0&&(n=new Intl.NumberFormat(e,r),S0.set(t,n)),n}i(jx,"getCachedINF");const T0=new Map;function _x(e,r={}){const{base:t,...n}=r,o=JSON.stringify([e,n]);let s=T0.get(o);return s===void 0&&(s=new Intl.RelativeTimeFormat(e,r),T0.set(o,s)),s}i(_x,"getCachedRTF");let za=null;function Ux(){return za||(za=new Intl.DateTimeFormat().resolvedOptions().locale,za)}i(Ux,"systemLocale");const N0=new Map;function gy(e){let r=N0.get(e);return r===void 0&&(r=new Intl.DateTimeFormat(e).resolvedOptions(),N0.set(e,r)),r}i(gy,"getCachedIntResolvedOptions");const P0=new Map;function zx(e){let r=P0.get(e);if(!r){const t=new Intl.Locale(e);r="getWeekInfo"in t?t.getWeekInfo():t.weekInfo,"minimalDays"in r||(r={...my,...r}),P0.set(e,r)}return r}i(zx,"getCachedWeekInfo");function Vx(e){const r=e.indexOf("-x-");r!==-1&&(e=e.substring(0,r));const t=e.indexOf("-u-");if(t===-1)return[e];{let n,o;try{n=F0(e).resolvedOptions(),o=e}catch{const u=e.substring(0,t);n=F0(u).resolvedOptions(),o=u}const{numberingSystem:s,calendar:a}=n;return[o,s,a]}}i(Vx,"parseLocaleString");function qx(e,r,t){return(t||r)&&(e.includes("-u-")||(e+="-u"),t&&(e+=`-ca-${t}`),r&&(e+=`-nu-${r}`)),e}i(qx,"intlConfigString");function Wx(e){const r=[];for(let t=1;t<=12;t++){const n=oe.utc(2009,t,1);r.push(e(n))}return r}i(Wx,"mapMonths");function Kx(e){const r=[];for(let t=1;t<=7;t++){const n=oe.utc(2016,11,13+t);r.push(e(n))}return r}i(Kx,"mapWeekdays");function gu(e,r,t,n){const o=e.listingMode();return o==="error"?null:o==="en"?t(r):n(r)}i(gu,"listStuff");function Gx(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||gy(e.locale).numberingSystem==="latn"}i(Gx,"supportsFastNumbers");class Hx{static{i(this,"PolyNumberFormatter")}constructor(r,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:s,...a}=n;if(!t||Object.keys(a).length>0){const l={useGrouping:!1,...n};n.padTo>0&&(l.minimumIntegerDigits=n.padTo),this.inf=jx(r,l)}}format(r){if(this.inf){const t=this.floor?Math.floor(r):r;return this.inf.format(t)}else{const t=this.floor?Math.floor(r):jh(r,3);return Cr(t,this.padTo)}}}class Zx{static{i(this,"PolyDateFormatter")}constructor(r,t,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=r;else if(r.zone.type==="fixed"){const a=-1*(r.offset/60),l=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;r.offset!==0&&Eo.create(l).valid?(o=l,this.dt=r):(o="UTC",this.dt=r.offset===0?r:r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone)}else r.zone.type==="system"?this.dt=r:r.zone.type==="iana"?(this.dt=r,o=r.zone.name):(o="UTC",this.dt=r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone);const s={...this.opts};s.timeZone=s.timeZone||o,this.dtf=F0(t,s)}format(){return this.originalZone?this.formatToParts().map(({value:r})=>r).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const r=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?r.map(t=>{if(t.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...t,value:n}}else return t}):r}resolvedOptions(){return this.dtf.resolvedOptions()}}class Yx{static{i(this,"PolyRelFormatter")}constructor(r,t,n){this.opts={style:"long",...n},!t&&ky()&&(this.rtf=_x(r,n))}format(r,t){return this.rtf?this.rtf.format(r,t):v4(t,r,this.opts.numeric,this.opts.style!=="long")}formatToParts(r,t){return this.rtf?this.rtf.formatToParts(r,t):[]}}const my={firstDay:1,minimalDays:4,weekend:[6,7]};class Be{static{i(this,"Locale")}static fromOpts(r){return Be.create(r.locale,r.numberingSystem,r.outputCalendar,r.weekSettings,r.defaultToEN)}static create(r,t,n,o,s=!1){const a=r||ur.defaultLocale,l=a||(s?"en-US":Ux()),u=t||ur.defaultNumberingSystem,d=n||ur.defaultOutputCalendar,f=O0(o)||ur.defaultWeekSettings;return new Be(l,u,d,f,a)}static resetCache(){za=null,M0.clear(),S0.clear(),T0.clear(),N0.clear(),P0.clear()}static fromObject({locale:r,numberingSystem:t,outputCalendar:n,weekSettings:o}={}){return Be.create(r,t,n,o)}constructor(r,t,n,o,s){const[a,l,u]=Vx(r);this.locale=a,this.numberingSystem=t||l||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=qx(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Gx(this)),this.fastNumbersCached}listingMode(){const r=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return r&&t?"en":"intl"}clone(r){return!r||Object.getOwnPropertyNames(r).length===0?this:Be.create(r.locale||this.specifiedLocale,r.numberingSystem||this.numberingSystem,r.outputCalendar||this.outputCalendar,O0(r.weekSettings)||this.weekSettings,r.defaultToEN||!1)}redefaultToEN(r={}){return this.clone({...r,defaultToEN:!0})}redefaultToSystem(r={}){return this.clone({...r,defaultToEN:!1})}months(r,t=!1){return gu(this,r,Ay,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");t&=!n;const o=t?{month:r,day:"numeric"}:{month:r},s=t?"format":"standalone";if(!this.monthsCache[s][r]){const a=n?l=>this.dtFormatter(l,o).format():l=>this.extract(l,o,"month");this.monthsCache[s][r]=Wx(a)}return this.monthsCache[s][r]})}weekdays(r,t=!1){return gu(this,r,Sy,()=>{const n=t?{weekday:r,year:"numeric",month:"long",day:"numeric"}:{weekday:r},o=t?"format":"standalone";return this.weekdaysCache[o][r]||(this.weekdaysCache[o][r]=Kx(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[o][r]})}meridiems(){return gu(this,void 0,()=>Ty,()=>{if(!this.meridiemCache){const r={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[oe.utc(2016,11,13,9),oe.utc(2016,11,13,19)].map(t=>this.extract(t,r,"dayperiod"))}return this.meridiemCache})}eras(r){return gu(this,r,Ny,()=>{const t={era:r};return this.eraCache[r]||(this.eraCache[r]=[oe.utc(-40,1,1),oe.utc(2017,1,1)].map(n=>this.extract(n,t,"era"))),this.eraCache[r]})}extract(r,t,n){const o=this.dtFormatter(r,t),s=o.formatToParts(),a=s.find(l=>l.type.toLowerCase()===n);return a?a.value:null}numberFormatter(r={}){return new Hx(this.intl,r.forceSimple||this.fastNumbers,r)}dtFormatter(r,t={}){return new Zx(r,this.intl,t)}relFormatter(r={}){return new Yx(this.intl,this.isEnglish(),r)}listFormatter(r={}){return Lx(this.intl,r)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||gy(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:xy()?zx(this.locale):my}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(r){return this.locale===r.locale&&this.numberingSystem===r.numberingSystem&&this.outputCalendar===r.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let rf=null;class kt extends _l{static{i(this,"FixedOffsetZone")}static get utcInstance(){return rf===null&&(rf=new kt(0)),rf}static instance(r){return r===0?kt.utcInstance:new kt(r)}static parseSpecifier(r){if(r){const t=r.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new kt(qc(t[1],t[2]))}return null}constructor(r){super(),this.fixed=r}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${tl(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${tl(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(r,t){return tl(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(r){return r.type==="fixed"&&r.fixed===this.fixed}get isValid(){return!0}}class Jx extends _l{static{i(this,"InvalidZone")}constructor(r){super(),this.zoneName=r}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function zo(e,r){if(ne(e)||e===null)return r;if(e instanceof _l)return e;if(n4(e)){const t=e.toLowerCase();return t==="default"?r:t==="local"||t==="system"?Uc.instance:t==="utc"||t==="gmt"?kt.utcInstance:kt.parseSpecifier(t)||Eo.create(e)}else return Go(e)?kt.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Jx(e)}i(zo,"normalizeZone");const Oh={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Jm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Xx=Oh.hanidec.replace(/[\[|\]]/g,"").split("");function Qx(e){let r=parseInt(e,10);if(isNaN(r)){r="";for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(e[t].search(Oh.hanidec)!==-1)r+=Xx.indexOf(e[t]);else for(const o in Jm){const[s,a]=Jm[o];n>=s&&n<=a&&(r+=n-s)}}return parseInt(r,10)}else return r}i(Qx,"parseDigits");const I0=new Map;function e4(){I0.clear()}i(e4,"resetDigitRegexCache");function Cn({numberingSystem:e},r=""){const t=e||"latn";let n=I0.get(t);n===void 0&&(n=new Map,I0.set(t,n));let o=n.get(r);return o===void 0&&(o=new RegExp(`${Oh[t]}${r}`),n.set(r,o)),o}i(Cn,"digitRegex");let Xm=i(()=>Date.now(),"now"),Qm="system",ep=null,rp=null,tp=null,np=60,op,ip=null;class ur{static{i(this,"Settings")}static get now(){return Xm}static set now(r){Xm=r}static set defaultZone(r){Qm=r}static get defaultZone(){return zo(Qm,Uc.instance)}static get defaultLocale(){return ep}static set defaultLocale(r){ep=r}static get defaultNumberingSystem(){return rp}static set defaultNumberingSystem(r){rp=r}static get defaultOutputCalendar(){return tp}static set defaultOutputCalendar(r){tp=r}static get defaultWeekSettings(){return ip}static set defaultWeekSettings(r){ip=O0(r)}static get twoDigitCutoffYear(){return np}static set twoDigitCutoffYear(r){np=r%100}static get throwOnInvalid(){return op}static set throwOnInvalid(r){op=r}static resetCaches(){Be.resetCache(),Eo.resetCache(),oe.resetCache(),e4()}}class Fn{static{i(this,"Invalid")}constructor(r,t){this.reason=r,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const py=[0,31,59,90,120,151,181,212,243,273,304,334],by=[0,31,60,91,121,152,182,213,244,274,305,335];function mn(e,r){return new Fn("unit out of range",`you specified ${r} (of type ${typeof r}) as a ${e}, which is invalid`)}i(mn,"unitOutOfRange");function Bh(e,r,t){const n=new Date(Date.UTC(e,r-1,t));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}i(Bh,"dayOfWeek");function vy(e,r,t){return t+(Ul(e)?by:py)[r-1]}i(vy,"computeOrdinal");function yy(e,r){const t=Ul(e)?by:py,n=t.findIndex(s=>s<r),o=r-t[n];return{month:n+1,day:o}}i(yy,"uncomputeOrdinal");function Rh(e,r){return(e-r+7)%7+1}i(Rh,"isoWeekdayToLocal");function ic(e,r=4,t=1){const{year:n,month:o,day:s}=e,a=vy(n,o,s),l=Rh(Bh(n,o,s),t);let u=Math.floor((a-l+14-r)/7),d;return u<1?(d=n-1,u=dl(d,r,t)):u>dl(n,r,t)?(d=n+1,u=1):d=n,{weekYear:d,weekNumber:u,weekday:l,...Wc(e)}}i(ic,"gregorianToWeek");function sp(e,r=4,t=1){const{weekYear:n,weekNumber:o,weekday:s}=e,a=Rh(Bh(n,1,r),t),l=Ss(n);let u=o*7+s-a-7+r,d;u<1?(d=n-1,u+=Ss(d)):u>l?(d=n+1,u-=Ss(n)):d=n;const{month:f,day:h}=yy(d,u);return{year:d,month:f,day:h,...Wc(e)}}i(sp,"weekToGregorian");function tf(e){const{year:r,month:t,day:n}=e,o=vy(r,t,n);return{year:r,ordinal:o,...Wc(e)}}i(tf,"gregorianToOrdinal");function ap(e){const{year:r,ordinal:t}=e,{month:n,day:o}=yy(r,t);return{year:r,month:n,day:o,...Wc(e)}}i(ap,"ordinalToGregorian");function lp(e,r){if(!ne(e.localWeekday)||!ne(e.localWeekNumber)||!ne(e.localWeekYear)){if(!ne(e.weekday)||!ne(e.weekNumber)||!ne(e.weekYear))throw new Ds("Cannot mix locale-based week fields with ISO-based week fields");return ne(e.localWeekday)||(e.weekday=e.localWeekday),ne(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),ne(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:r.getMinDaysInFirstWeek(),startOfWeek:r.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}i(lp,"usesLocalWeekValues");function r4(e,r=4,t=1){const n=zc(e.weekYear),o=pn(e.weekNumber,1,dl(e.weekYear,r,t)),s=pn(e.weekday,1,7);return n?o?s?!1:mn("weekday",e.weekday):mn("week",e.weekNumber):mn("weekYear",e.weekYear)}i(r4,"hasInvalidWeekData");function t4(e){const r=zc(e.year),t=pn(e.ordinal,1,Ss(e.year));return r?t?!1:mn("ordinal",e.ordinal):mn("year",e.year)}i(t4,"hasInvalidOrdinalData");function wy(e){const r=zc(e.year),t=pn(e.month,1,12),n=pn(e.day,1,sc(e.year,e.month));return r?t?n?!1:mn("day",e.day):mn("month",e.month):mn("year",e.year)}i(wy,"hasInvalidGregorianData");function $y(e){const{hour:r,minute:t,second:n,millisecond:o}=e,s=pn(r,0,23)||r===24&&t===0&&n===0&&o===0,a=pn(t,0,59),l=pn(n,0,59),u=pn(o,0,999);return s?a?l?u?!1:mn("millisecond",o):mn("second",n):mn("minute",t):mn("hour",r)}i($y,"hasInvalidTimeData");function ne(e){return typeof e>"u"}i(ne,"isUndefined");function Go(e){return typeof e=="number"}i(Go,"isNumber");function zc(e){return typeof e=="number"&&e%1===0}i(zc,"isInteger");function n4(e){return typeof e=="string"}i(n4,"isString$1");function o4(e){return Object.prototype.toString.call(e)==="[object Date]"}i(o4,"isDate");function ky(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}i(ky,"hasRelative");function xy(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}i(xy,"hasLocaleWeekInfo");function i4(e){return Array.isArray(e)?e:[e]}i(i4,"maybeArray");function up(e,r,t){if(e.length!==0)return e.reduce((n,o)=>{const s=[r(o),o];return n&&t(n[0],s[0])===n[0]?n:s},null)[1]}i(up,"bestBy");function s4(e,r){return r.reduce((t,n)=>(t[n]=e[n],t),{})}i(s4,"pick");function Ls(e,r){return Object.prototype.hasOwnProperty.call(e,r)}i(Ls,"hasOwnProperty");function O0(e){if(e==null)return null;if(typeof e!="object")throw new gt("Week settings must be an object");if(!pn(e.firstDay,1,7)||!pn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(r=>!pn(r,1,7)))throw new gt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}i(O0,"validateWeekSettings");function pn(e,r,t){return zc(e)&&e>=r&&e<=t}i(pn,"integerBetween");function a4(e,r){return e-r*Math.floor(e/r)}i(a4,"floorMod");function Cr(e,r=2){const t=e<0;let n;return t?n="-"+(""+-e).padStart(r,"0"):n=(""+e).padStart(r,"0"),n}i(Cr,"padStart");function jo(e){if(!(ne(e)||e===null||e===""))return parseInt(e,10)}i(jo,"parseInteger");function wi(e){if(!(ne(e)||e===null||e===""))return parseFloat(e)}i(wi,"parseFloating");function Lh(e){if(!(ne(e)||e===null||e==="")){const r=parseFloat("0."+e)*1e3;return Math.floor(r)}}i(Lh,"parseMillis");function jh(e,r,t="round"){const n=10**r;switch(t){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${t} is out of range`)}}i(jh,"roundTo");function Ul(e){return e%4===0&&(e%100!==0||e%400===0)}i(Ul,"isLeapYear");function Ss(e){return Ul(e)?366:365}i(Ss,"daysInYear");function sc(e,r){const t=a4(r-1,12)+1,n=e+(r-t)/12;return t===2?Ul(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][t-1]}i(sc,"daysInMonth");function Vc(e){let r=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(r=new Date(r),r.setUTCFullYear(e.year,e.month-1,e.day)),+r}i(Vc,"objToLocalTS");function cp(e,r,t){return-Rh(Bh(e,1,r),t)+r-1}i(cp,"firstWeekOffset");function dl(e,r=4,t=1){const n=cp(e,r,t),o=cp(e+1,r,t);return(Ss(e)-n+o)/7}i(dl,"weeksInWeekYear");function B0(e){return e>99?e:e>ur.twoDigitCutoffYear?1900+e:2e3+e}i(B0,"untruncateYear");function Dy(e,r,t,n=null){const o=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const a={timeZoneName:r,...s},l=new Intl.DateTimeFormat(t,a).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return l?l.value:null}i(Dy,"parseZoneInfo");function qc(e,r){let t=parseInt(e,10);Number.isNaN(t)&&(t=0);const n=parseInt(r,10)||0,o=t<0||Object.is(t,-0)?-n:n;return t*60+o}i(qc,"signedOffset");function Cy(e){const r=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(r))throw new gt(`Invalid unit value ${e}`);return r}i(Cy,"asNumber");function ac(e,r){const t={};for(const n in e)if(Ls(e,n)){const o=e[n];if(o==null)continue;t[r(n)]=Cy(o)}return t}i(ac,"normalizeObject");function tl(e,r){const t=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(r){case"short":return`${o}${Cr(t,2)}:${Cr(n,2)}`;case"narrow":return`${o}${t}${n>0?`:${n}`:""}`;case"techie":return`${o}${Cr(t,2)}${Cr(n,2)}`;default:throw new RangeError(`Value format ${r} is out of range for property format`)}}i(tl,"formatOffset");function Wc(e){return s4(e,["hour","minute","second","millisecond"])}i(Wc,"timeObject");const l4=["January","February","March","April","May","June","July","August","September","October","November","December"],Ey=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u4=["J","F","M","A","M","J","J","A","S","O","N","D"];function Ay(e){switch(e){case"narrow":return[...u4];case"short":return[...Ey];case"long":return[...l4];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}i(Ay,"months");const My=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Fy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],c4=["M","T","W","T","F","S","S"];function Sy(e){switch(e){case"narrow":return[...c4];case"short":return[...Fy];case"long":return[...My];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}i(Sy,"weekdays");const Ty=["AM","PM"],d4=["Before Christ","Anno Domini"],f4=["BC","AD"],h4=["B","A"];function Ny(e){switch(e){case"narrow":return[...h4];case"short":return[...f4];case"long":return[...d4];default:return null}}i(Ny,"eras");function g4(e){return Ty[e.hour<12?0:1]}i(g4,"meridiemForDateTime");function m4(e,r){return Sy(r)[e.weekday-1]}i(m4,"weekdayForDateTime");function p4(e,r){return Ay(r)[e.month-1]}i(p4,"monthForDateTime");function b4(e,r){return Ny(r)[e.year<0?0:1]}i(b4,"eraForDateTime");function v4(e,r,t="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(t==="auto"&&s){const h=e==="days";switch(r){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const a=Object.is(r,-0)||r<0,l=Math.abs(r),u=l===1,d=o[e],f=n?u?d[1]:d[2]||d[1]:u?o[e][0]:e;return a?`${l} ${f} ago`:`in ${l} ${f}`}i(v4,"formatRelativeTime");function dp(e,r){let t="";for(const n of e)n.literal?t+=n.val:t+=r(n.val);return t}i(dp,"stringifyTokens");const y4={D:oc,DD:Zv,DDD:Yv,DDDD:Jv,t:Xv,tt:Qv,ttt:ey,tttt:ry,T:ty,TT:ny,TTT:oy,TTTT:iy,f:sy,ff:ly,fff:cy,ffff:fy,F:ay,FF:uy,FFF:dy,FFFF:hy};class pt{static{i(this,"Formatter")}static create(r,t={}){return new pt(r,t)}static parseFormat(r){let t=null,n="",o=!1;const s=[];for(let a=0;a<r.length;a++){const l=r.charAt(a);l==="'"?((n.length>0||o)&&s.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),t=null,n="",o=!o):o||l===t?n+=l:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=l,t=l)}return n.length>0&&s.push({literal:o||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(r){return y4[r]}constructor(r,t){this.opts=t,this.loc=r,this.systemLoc=null}formatWithSystemDefault(r,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(r,{...this.opts,...t}).format()}dtFormatter(r,t={}){return this.loc.dtFormatter(r,{...this.opts,...t})}formatDateTime(r,t){return this.dtFormatter(r,t).format()}formatDateTimeParts(r,t){return this.dtFormatter(r,t).formatToParts()}formatInterval(r,t){return this.dtFormatter(r.start,t).dtf.formatRange(r.start.toJSDate(),r.end.toJSDate())}resolvedOptions(r,t){return this.dtFormatter(r,t).resolvedOptions()}num(r,t=0,n=void 0){if(this.opts.forceSimple)return Cr(r,t);const o={...this.opts};return t>0&&(o.padTo=t),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(r)}formatDateTimeFromString(r,t){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=i((m,y)=>this.loc.extract(r,m,y),"string"),a=i(m=>r.isOffsetFixed&&r.offset===0&&m.allowZ?"Z":r.isValid?r.zone.formatOffset(r.ts,m.format):"","formatOffset"),l=i(()=>n?g4(r):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),"meridiem"),u=i((m,y)=>n?p4(r,m):s(y?{month:m}:{month:m,day:"numeric"},"month"),"month"),d=i((m,y)=>n?m4(r,m):s(y?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),"weekday"),f=i(m=>{const y=pt.macroTokenToFormatOpts(m);return y?this.formatWithSystemDefault(r,y):m},"maybeMacro"),h=i(m=>n?b4(r,m):s({era:m},"era"),"era"),g=i(m=>{switch(m){case"S":return this.num(r.millisecond);case"u":case"SSS":return this.num(r.millisecond,3);case"s":return this.num(r.second);case"ss":return this.num(r.second,2);case"uu":return this.num(Math.floor(r.millisecond/10),2);case"uuu":return this.num(Math.floor(r.millisecond/100));case"m":return this.num(r.minute);case"mm":return this.num(r.minute,2);case"h":return this.num(r.hour%12===0?12:r.hour%12);case"hh":return this.num(r.hour%12===0?12:r.hour%12,2);case"H":return this.num(r.hour);case"HH":return this.num(r.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return r.zone.offsetName(r.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return r.zone.offsetName(r.ts,{format:"long",locale:this.loc.locale});case"z":return r.zoneName;case"a":return l();case"d":return o?s({day:"numeric"},"day"):this.num(r.day);case"dd":return o?s({day:"2-digit"},"day"):this.num(r.day,2);case"c":return this.num(r.weekday);case"ccc":return d("short",!0);case"cccc":return d("long",!0);case"ccccc":return d("narrow",!0);case"E":return this.num(r.weekday);case"EEE":return d("short",!1);case"EEEE":return d("long",!1);case"EEEEE":return d("narrow",!1);case"L":return o?s({month:"numeric",day:"numeric"},"month"):this.num(r.month);case"LL":return o?s({month:"2-digit",day:"numeric"},"month"):this.num(r.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?s({month:"numeric"},"month"):this.num(r.month);case"MM":return o?s({month:"2-digit"},"month"):this.num(r.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?s({year:"numeric"},"year"):this.num(r.year);case"yy":return o?s({year:"2-digit"},"year"):this.num(r.year.toString().slice(-2),2);case"yyyy":return o?s({year:"numeric"},"year"):this.num(r.year,4);case"yyyyyy":return o?s({year:"numeric"},"year"):this.num(r.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(r.weekYear.toString().slice(-2),2);case"kkkk":return this.num(r.weekYear,4);case"W":return this.num(r.weekNumber);case"WW":return this.num(r.weekNumber,2);case"n":return this.num(r.localWeekNumber);case"nn":return this.num(r.localWeekNumber,2);case"ii":return this.num(r.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(r.localWeekYear,4);case"o":return this.num(r.ordinal);case"ooo":return this.num(r.ordinal,3);case"q":return this.num(r.quarter);case"qq":return this.num(r.quarter,2);case"X":return this.num(Math.floor(r.ts/1e3));case"x":return this.num(r.ts);default:return f(m)}},"tokenToString");return dp(pt.parseFormat(t),g)}formatDurationFromString(r,t){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=i(f=>{switch(f[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},"tokenToField"),s=i((f,h)=>g=>{const m=o(g);if(m){const y=h.isNegativeDuration&&m!==h.largestUnit?n:1;let k;return this.opts.signMode==="negativeLargestOnly"&&m!==h.largestUnit?k="never":this.opts.signMode==="all"?k="always":k="auto",this.num(f.get(m)*y,g.length,k)}else return g},"tokenToString"),a=pt.parseFormat(t),l=a.reduce((f,{literal:h,val:g})=>h?f:f.concat(g),[]),u=r.shiftTo(...l.map(o).filter(f=>f)),d={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return dp(a,s(u,d))}}const Py=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function sa(...e){const r=e.reduce((t,n)=>t+n.source,"");return RegExp(`^${r}$`)}i(sa,"combineRegexes");function aa(...e){return r=>e.reduce(([t,n,o],s)=>{const[a,l,u]=s(r,o);return[{...t,...a},l||n,u]},[{},null,1]).slice(0,2)}i(aa,"combineExtractors");function la(e,...r){if(e==null)return[null,null];for(const[t,n]of r){const o=t.exec(e);if(o)return n(o)}return[null,null]}i(la,"parse$2");function Iy(...e){return(r,t)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=jo(r[t+o]);return[n,null,t+o]}}i(Iy,"simpleParse");const Oy=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,w4=`(?:${Oy.source}?(?:\\[(${Py.source})\\])?)?`,_h=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,By=RegExp(`${_h.source}${w4}`),Uh=RegExp(`(?:[Tt]${By.source})?`),$4=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,k4=/(\d{4})-?W(\d\d)(?:-?(\d))?/,x4=/(\d{4})-?(\d{3})/,D4=Iy("weekYear","weekNumber","weekDay"),C4=Iy("year","ordinal"),E4=/(\d{4})-(\d\d)-(\d\d)/,Ry=RegExp(`${_h.source} ?(?:${Oy.source}|(${Py.source}))?`),A4=RegExp(`(?: ${Ry.source})?`);function Ts(e,r,t){const n=e[r];return ne(n)?t:jo(n)}i(Ts,"int");function M4(e,r){return[{year:Ts(e,r),month:Ts(e,r+1,1),day:Ts(e,r+2,1)},null,r+3]}i(M4,"extractISOYmd");function ua(e,r){return[{hours:Ts(e,r,0),minutes:Ts(e,r+1,0),seconds:Ts(e,r+2,0),milliseconds:Lh(e[r+3])},null,r+4]}i(ua,"extractISOTime");function zl(e,r){const t=!e[r]&&!e[r+1],n=qc(e[r+1],e[r+2]),o=t?null:kt.instance(n);return[{},o,r+3]}i(zl,"extractISOOffset");function Vl(e,r){const t=e[r]?Eo.create(e[r]):null;return[{},t,r+1]}i(Vl,"extractIANAZone");const F4=RegExp(`^T?${_h.source}$`),S4=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function T4(e){const[r,t,n,o,s,a,l,u,d]=e,f=r[0]==="-",h=u&&u[0]==="-",g=i((m,y=!1)=>m!==void 0&&(y||m&&f)?-m:m,"maybeNegate");return[{years:g(wi(t)),months:g(wi(n)),weeks:g(wi(o)),days:g(wi(s)),hours:g(wi(a)),minutes:g(wi(l)),seconds:g(wi(u),u==="-0"),milliseconds:g(Lh(d),h)}]}i(T4,"extractISODuration");const N4={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function zh(e,r,t,n,o,s,a){const l={year:r.length===2?B0(jo(r)):jo(r),month:Ey.indexOf(t)+1,day:jo(n),hour:jo(o),minute:jo(s)};return a&&(l.second=jo(a)),e&&(l.weekday=e.length>3?My.indexOf(e)+1:Fy.indexOf(e)+1),l}i(zh,"fromStrings");const P4=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function I4(e){const[,r,t,n,o,s,a,l,u,d,f,h]=e,g=zh(r,o,n,t,s,a,l);let m;return u?m=N4[u]:d?m=0:m=qc(f,h),[g,new kt(m)]}i(I4,"extractRFC2822");function O4(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}i(O4,"preprocessRFC2822");const B4=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,R4=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,L4=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function fp(e){const[,r,t,n,o,s,a,l]=e;return[zh(r,o,n,t,s,a,l),kt.utcInstance]}i(fp,"extractRFC1123Or850");function j4(e){const[,r,t,n,o,s,a,l]=e;return[zh(r,l,t,n,o,s,a),kt.utcInstance]}i(j4,"extractASCII");const _4=sa($4,Uh),U4=sa(k4,Uh),z4=sa(x4,Uh),V4=sa(By),Ly=aa(M4,ua,zl,Vl),q4=aa(D4,ua,zl,Vl),W4=aa(C4,ua,zl,Vl),K4=aa(ua,zl,Vl);function G4(e){return la(e,[_4,Ly],[U4,q4],[z4,W4],[V4,K4])}i(G4,"parseISODate");function H4(e){return la(O4(e),[P4,I4])}i(H4,"parseRFC2822Date");function Z4(e){return la(e,[B4,fp],[R4,fp],[L4,j4])}i(Z4,"parseHTTPDate");function Y4(e){return la(e,[S4,T4])}i(Y4,"parseISODuration");const J4=aa(ua);function X4(e){return la(e,[F4,J4])}i(X4,"parseISOTimeOnly");const Q4=sa(E4,A4),e3=sa(Ry),r3=aa(ua,zl,Vl);function t3(e){return la(e,[Q4,Ly],[e3,r3])}i(t3,"parseSQL");const hp="Invalid Duration",jy={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},n3={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...jy},cn=146097/400,hs=146097/4800,o3={years:{quarters:4,months:12,weeks:cn/7,days:cn,hours:cn*24,minutes:cn*24*60,seconds:cn*24*60*60,milliseconds:cn*24*60*60*1e3},quarters:{months:3,weeks:cn/28,days:cn/4,hours:cn*24/4,minutes:cn*24*60/4,seconds:cn*24*60*60/4,milliseconds:cn*24*60*60*1e3/4},months:{weeks:hs/7,days:hs,hours:hs*24,minutes:hs*24*60,seconds:hs*24*60*60,milliseconds:hs*24*60*60*1e3},...jy},Si=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],i3=Si.slice(0).reverse();function lo(e,r,t=!1){const n={values:t?r.values:{...e.values,...r.values||{}},loc:e.loc.clone(r.loc),conversionAccuracy:r.conversionAccuracy||e.conversionAccuracy,matrix:r.matrix||e.matrix};return new xe(n)}i(lo,"clone$1");function _y(e,r){let t=r.milliseconds??0;for(const n of i3.slice(1))r[n]&&(t+=r[n]*e[n].milliseconds);return t}i(_y,"durationToMillis");function gp(e,r){const t=_y(e,r)<0?-1:1;Si.reduceRight((n,o)=>{if(ne(r[o]))return n;if(n){const s=r[n]*t,a=e[o][n],l=Math.floor(s/a);r[o]+=l*t,r[n]-=l*a*t}return o},null),Si.reduce((n,o)=>{if(ne(r[o]))return n;if(n){const s=r[n]%1;r[n]-=s,r[o]+=s*e[n][o]}return o},null)}i(gp,"normalizeValues");function mp(e){const r={};for(const[t,n]of Object.entries(e))n!==0&&(r[t]=n);return r}i(mp,"removeZeroes");class xe{static{i(this,"Duration")}constructor(r){const t=r.conversionAccuracy==="longterm"||!1;let n=t?o3:n3;r.matrix&&(n=r.matrix),this.values=r.values,this.loc=r.loc||Be.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=r.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(r,t){return xe.fromObject({milliseconds:r},t)}static fromObject(r,t={}){if(r==null||typeof r!="object")throw new gt(`Duration.fromObject: argument expected to be an object, got ${r===null?"null":typeof r}`);return new xe({values:ac(r,xe.normalizeUnit),loc:Be.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(r){if(Go(r))return xe.fromMillis(r);if(xe.isDuration(r))return r;if(typeof r=="object")return xe.fromObject(r);throw new gt(`Unknown duration argument ${r} of type ${typeof r}`)}static fromISO(r,t){const[n]=Y4(r);return n?xe.fromObject(n,t):xe.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static fromISOTime(r,t){const[n]=X4(r);return n?xe.fromObject(n,t):xe.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static invalid(r,t=null){if(!r)throw new gt("need to specify a reason the Duration is invalid");const n=r instanceof Fn?r:new Fn(r,t);if(ur.throwOnInvalid)throw new Tx(n);return new xe({invalid:n})}static normalizeUnit(r){const t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[r&&r.toLowerCase()];if(!t)throw new Hv(r);return t}static isDuration(r){return r&&r.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(r,t={}){const n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?pt.create(this.loc,n).formatDurationFromString(this,r):hp}toHuman(r={}){if(!this.isValid)return hp;const t=r.showZeros!==!1,n=Si.map(o=>{const s=this.values[o];return ne(s)||s===0&&!t?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...r,unit:o.slice(0,-1)}).format(s)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:r.listStyle||"narrow",...r}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let r="P";return this.years!==0&&(r+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(r+=this.months+this.quarters*3+"M"),this.weeks!==0&&(r+=this.weeks+"W"),this.days!==0&&(r+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(r+="T"),this.hours!==0&&(r+=this.hours+"H"),this.minutes!==0&&(r+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(r+=jh(this.seconds+this.milliseconds/1e3,3)+"S"),r==="P"&&(r+="T0S"),r}toISOTime(r={}){if(!this.isValid)return null;const t=this.toMillis();return t<0||t>=864e5?null:(r={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...r,includeOffset:!1},oe.fromMillis(t,{zone:"UTC"}).toISOTime(r))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?_y(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(r){if(!this.isValid)return this;const t=xe.fromDurationLike(r),n={};for(const o of Si)(Ls(t.values,o)||Ls(this.values,o))&&(n[o]=t.get(o)+this.get(o));return lo(this,{values:n},!0)}minus(r){if(!this.isValid)return this;const t=xe.fromDurationLike(r);return this.plus(t.negate())}mapUnits(r){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=Cy(r(this.values[n],n));return lo(this,{values:t},!0)}get(r){return this[xe.normalizeUnit(r)]}set(r){if(!this.isValid)return this;const t={...this.values,...ac(r,xe.normalizeUnit)};return lo(this,{values:t})}reconfigure({locale:r,numberingSystem:t,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:r,numberingSystem:t}),matrix:o,conversionAccuracy:n};return lo(this,a)}as(r){return this.isValid?this.shiftTo(r).get(r):NaN}normalize(){if(!this.isValid)return this;const r=this.toObject();return gp(this.matrix,r),lo(this,{values:r},!0)}rescale(){if(!this.isValid)return this;const r=mp(this.normalize().shiftToAll().toObject());return lo(this,{values:r},!0)}shiftTo(...r){if(!this.isValid)return this;if(r.length===0)return this;r=r.map(a=>xe.normalizeUnit(a));const t={},n={},o=this.toObject();let s;for(const a of Si)if(r.indexOf(a)>=0){s=a;let l=0;for(const d in n)l+=this.matrix[d][a]*n[d],n[d]=0;Go(o[a])&&(l+=o[a]);const u=Math.trunc(l);t[a]=u,n[a]=(l*1e3-u*1e3)/1e3}else Go(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(t[s]+=a===s?n[a]:n[a]/this.matrix[s][a]);return gp(this.matrix,t),lo(this,{values:t},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const r={};for(const t of Object.keys(this.values))r[t]=this.values[t]===0?0:-this.values[t];return lo(this,{values:r},!0)}removeZeros(){if(!this.isValid)return this;const r=mp(this.values);return lo(this,{values:r},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(r){if(!this.isValid||!r.isValid||!this.loc.equals(r.loc))return!1;function t(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}i(t,"eq");for(const n of Si)if(!t(this.values[n],r.values[n]))return!1;return!0}}const gs="Invalid Interval";function s3(e,r){return!e||!e.isValid?br.invalid("missing or invalid start"):!r||!r.isValid?br.invalid("missing or invalid end"):r<e?br.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${r.toISO()}`):null}i(s3,"validateStartEnd");class br{static{i(this,"Interval")}constructor(r){this.s=r.start,this.e=r.end,this.invalid=r.invalid||null,this.isLuxonInterval=!0}static invalid(r,t=null){if(!r)throw new gt("need to specify a reason the Interval is invalid");const n=r instanceof Fn?r:new Fn(r,t);if(ur.throwOnInvalid)throw new Sx(n);return new br({invalid:n})}static fromDateTimes(r,t){const n=Fa(r),o=Fa(t),s=s3(n,o);return s??new br({start:n,end:o})}static after(r,t){const n=xe.fromDurationLike(t),o=Fa(r);return br.fromDateTimes(o,o.plus(n))}static before(r,t){const n=xe.fromDurationLike(t),o=Fa(r);return br.fromDateTimes(o.minus(n),o)}static fromISO(r,t){const[n,o]=(r||"").split("/",2);if(n&&o){let s,a;try{s=oe.fromISO(n,t),a=s.isValid}catch{a=!1}let l,u;try{l=oe.fromISO(o,t),u=l.isValid}catch{u=!1}if(a&&u)return br.fromDateTimes(s,l);if(a){const d=xe.fromISO(o,t);if(d.isValid)return br.after(s,d)}else if(u){const d=xe.fromISO(n,t);if(d.isValid)return br.before(l,d)}}return br.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static isInterval(r){return r&&r.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(r="milliseconds"){return this.isValid?this.toDuration(r).get(r):NaN}count(r="milliseconds",t){if(!this.isValid)return NaN;const n=this.start.startOf(r,t);let o;return t?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(r,t),Math.floor(o.diff(n,r).get(r))+(o.valueOf()!==this.end.valueOf())}hasSame(r){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,r):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(r){return this.isValid?this.s>r:!1}isBefore(r){return this.isValid?this.e<=r:!1}contains(r){return this.isValid?this.s<=r&&this.e>r:!1}set({start:r,end:t}={}){return this.isValid?br.fromDateTimes(r||this.s,t||this.e):this}splitAt(...r){if(!this.isValid)return[];const t=r.map(Fa).filter(a=>this.contains(a)).sort((a,l)=>a.toMillis()-l.toMillis()),n=[];let{s:o}=this,s=0;for(;o<this.e;){const a=t[s]||this.e,l=+a>+this.e?this.e:a;n.push(br.fromDateTimes(o,l)),o=l,s+=1}return n}splitBy(r){const t=xe.fromDurationLike(r);if(!this.isValid||!t.isValid||t.as("milliseconds")===0)return[];let{s:n}=this,o=1,s;const a=[];for(;n<this.e;){const l=this.start.plus(t.mapUnits(u=>u*o));s=+l>+this.e?this.e:l,a.push(br.fromDateTimes(n,s)),n=s,o+=1}return a}divideEqually(r){return this.isValid?this.splitBy(this.length()/r).slice(0,r):[]}overlaps(r){return this.e>r.s&&this.s<r.e}abutsStart(r){return this.isValid?+this.e==+r.s:!1}abutsEnd(r){return this.isValid?+r.e==+this.s:!1}engulfs(r){return this.isValid?this.s<=r.s&&this.e>=r.e:!1}equals(r){return!this.isValid||!r.isValid?!1:this.s.equals(r.s)&&this.e.equals(r.e)}intersection(r){if(!this.isValid)return this;const t=this.s>r.s?this.s:r.s,n=this.e<r.e?this.e:r.e;return t>=n?null:br.fromDateTimes(t,n)}union(r){if(!this.isValid)return this;const t=this.s<r.s?this.s:r.s,n=this.e>r.e?this.e:r.e;return br.fromDateTimes(t,n)}static merge(r){const[t,n]=r.sort((o,s)=>o.s-s.s).reduce(([o,s],a)=>s?s.overlaps(a)||s.abutsStart(a)?[o,s.union(a)]:[o.concat([s]),a]:[o,a],[[],null]);return n&&t.push(n),t}static xor(r){let t=null,n=0;const o=[],s=r.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),a=Array.prototype.concat(...s),l=a.sort((u,d)=>u.time-d.time);for(const u of l)n+=u.type==="s"?1:-1,n===1?t=u.time:(t&&+t!=+u.time&&o.push(br.fromDateTimes(t,u.time)),t=null);return br.merge(o)}difference(...r){return br.xor([this].concat(r)).map(t=>this.intersection(t)).filter(t=>t&&!t.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:gs}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(r=oc,t={}){return this.isValid?pt.create(this.s.loc.clone(t),r).formatInterval(this):gs}toISO(r){return this.isValid?`${this.s.toISO(r)}/${this.e.toISO(r)}`:gs}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:gs}toISOTime(r){return this.isValid?`${this.s.toISOTime(r)}/${this.e.toISOTime(r)}`:gs}toFormat(r,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(r)}${t}${this.e.toFormat(r)}`:gs}toDuration(r,t){return this.isValid?this.e.diff(this.s,r,t):xe.invalid(this.invalidReason)}mapEndpoints(r){return br.fromDateTimes(r(this.s),r(this.e))}}class mu{static{i(this,"Info")}static hasDST(r=ur.defaultZone){const t=oe.now().setZone(r).set({month:12});return!r.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(r){return Eo.isValidZone(r)}static normalizeZone(r){return zo(r,ur.defaultZone)}static getStartOfWeek({locale:r=null,locObj:t=null}={}){return(t||Be.create(r)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:r=null,locObj:t=null}={}){return(t||Be.create(r)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:r=null,locObj:t=null}={}){return(t||Be.create(r)).getWeekendDays().slice()}static months(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:s="gregory"}={}){return(o||Be.create(t,n,s)).months(r)}static monthsFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:s="gregory"}={}){return(o||Be.create(t,n,s)).months(r,!0)}static weekdays(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Be.create(t,n,null)).weekdays(r)}static weekdaysFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Be.create(t,n,null)).weekdays(r,!0)}static meridiems({locale:r=null}={}){return Be.create(r).meridiems()}static eras(r="short",{locale:t=null}={}){return Be.create(t,null,"gregory").eras(r)}static features(){return{relative:ky(),localeWeek:xy()}}}function pp(e,r){const t=i(o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),"utcDayStart"),n=t(r)-t(e);return Math.floor(xe.fromMillis(n).as("days"))}i(pp,"dayDiff");function a3(e,r,t){const n=[["years",(u,d)=>d.year-u.year],["quarters",(u,d)=>d.quarter-u.quarter+(d.year-u.year)*4],["months",(u,d)=>d.month-u.month+(d.year-u.year)*12],["weeks",(u,d)=>{const f=pp(u,d);return(f-f%7)/7}],["days",pp]],o={},s=e;let a,l;for(const[u,d]of n)t.indexOf(u)>=0&&(a=u,o[u]=d(e,r),l=s.plus(o),l>r?(o[u]--,e=s.plus(o),e>r&&(l=e,o[u]--,e=s.plus(o))):e=l);return[e,o,l,a]}i(a3,"highOrderDiffs");function l3(e,r,t,n){let[o,s,a,l]=a3(e,r,t);const u=r-o,d=t.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);d.length===0&&(a<r&&(a=o.plus({[l]:1})),a!==o&&(s[l]=(s[l]||0)+u/(a-o)));const f=xe.fromObject(s,n);return d.length>0?xe.fromMillis(u,n).shiftTo(...d).plus(f):f}i(l3,"diff");const u3="missing Intl.DateTimeFormat.formatToParts support";function Ne(e,r=t=>t){return{regex:e,deser:i(([t])=>r(Qx(t)),"deser")}}i(Ne,"intUnit");const c3=" ",Uy=`[ ${c3}]`,zy=new RegExp(Uy,"g");function d3(e){return e.replace(/\./g,"\\.?").replace(zy,Uy)}i(d3,"fixListRegex");function bp(e){return e.replace(/\./g,"").replace(zy," ").toLowerCase()}i(bp,"stripInsensitivities");function En(e,r){return e===null?null:{regex:RegExp(e.map(d3).join("|")),deser:i(([t])=>e.findIndex(n=>bp(t)===bp(n))+r,"deser")}}i(En,"oneOf");function vp(e,r){return{regex:e,deser:i(([,t,n])=>qc(t,n),"deser"),groups:r}}i(vp,"offset");function pu(e){return{regex:e,deser:i(([r])=>r,"deser")}}i(pu,"simple");function f3(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}i(f3,"escapeToken");function h3(e,r){const t=Cn(r),n=Cn(r,"{2}"),o=Cn(r,"{3}"),s=Cn(r,"{4}"),a=Cn(r,"{6}"),l=Cn(r,"{1,2}"),u=Cn(r,"{1,3}"),d=Cn(r,"{1,6}"),f=Cn(r,"{1,9}"),h=Cn(r,"{2,4}"),g=Cn(r,"{4,6}"),m=i(x=>({regex:RegExp(f3(x.val)),deser:i(([C])=>C,"deser"),literal:!0}),"literal"),k=i(x=>{if(e.literal)return m(x);switch(x.val){case"G":return En(r.eras("short"),0);case"GG":return En(r.eras("long"),0);case"y":return Ne(d);case"yy":return Ne(h,B0);case"yyyy":return Ne(s);case"yyyyy":return Ne(g);case"yyyyyy":return Ne(a);case"M":return Ne(l);case"MM":return Ne(n);case"MMM":return En(r.months("short",!0),1);case"MMMM":return En(r.months("long",!0),1);case"L":return Ne(l);case"LL":return Ne(n);case"LLL":return En(r.months("short",!1),1);case"LLLL":return En(r.months("long",!1),1);case"d":return Ne(l);case"dd":return Ne(n);case"o":return Ne(u);case"ooo":return Ne(o);case"HH":return Ne(n);case"H":return Ne(l);case"hh":return Ne(n);case"h":return Ne(l);case"mm":return Ne(n);case"m":return Ne(l);case"q":return Ne(l);case"qq":return Ne(n);case"s":return Ne(l);case"ss":return Ne(n);case"S":return Ne(u);case"SSS":return Ne(o);case"u":return pu(f);case"uu":return pu(l);case"uuu":return Ne(t);case"a":return En(r.meridiems(),0);case"kkkk":return Ne(s);case"kk":return Ne(h,B0);case"W":return Ne(l);case"WW":return Ne(n);case"E":case"c":return Ne(t);case"EEE":return En(r.weekdays("short",!1),1);case"EEEE":return En(r.weekdays("long",!1),1);case"ccc":return En(r.weekdays("short",!0),1);case"cccc":return En(r.weekdays("long",!0),1);case"Z":case"ZZ":return vp(new RegExp(`([+-]${l.source})(?::(${n.source}))?`),2);case"ZZZ":return vp(new RegExp(`([+-]${l.source})(${n.source})?`),2);case"z":return pu(/[a-z_+-/]{1,256}?/i);case" ":return pu(/[^\S\n\r]/);default:return m(x)}},"unitate")(e)||{invalidReason:u3};return k.token=e,k}i(h3,"unitForToken");const g3={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function m3(e,r,t){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const s=r[n];let a=n;n==="hour"&&(r.hour12!=null?a=r.hour12?"hour12":"hour24":r.hourCycle!=null?r.hourCycle==="h11"||r.hourCycle==="h12"?a="hour12":a="hour24":a=t.hour12?"hour12":"hour24");let l=g3[a];if(typeof l=="object"&&(l=l[s]),l)return{literal:!1,val:l}}i(m3,"tokenForPart");function p3(e){return[`^${e.map(t=>t.regex).reduce((t,n)=>`${t}(${n.source})`,"")}$`,e]}i(p3,"buildRegex");function b3(e,r,t){const n=e.match(r);if(n){const o={};let s=1;for(const a in t)if(Ls(t,a)){const l=t[a],u=l.groups?l.groups+1:1;!l.literal&&l.token&&(o[l.token.val[0]]=l.deser(n.slice(s,s+u))),s+=u}return[n,o]}else return[n,{}]}i(b3,"match$1");function v3(e){const r=i(s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},"toField");let t=null,n;return ne(e.z)||(t=Eo.create(e.z)),ne(e.Z)||(t||(t=new kt(e.Z)),n=e.Z),ne(e.q)||(e.M=(e.q-1)*3+1),ne(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),ne(e.u)||(e.S=Lh(e.u)),[Object.keys(e).reduce((s,a)=>{const l=r(a);return l&&(s[l]=e[a]),s},{}),t,n]}i(v3,"dateTimeFromMatches");let nf=null;function y3(){return nf||(nf=oe.fromMillis(1555555555555)),nf}i(y3,"getDummyDateTime");function w3(e,r){if(e.literal)return e;const t=pt.macroTokenToFormatOpts(e.val),n=Ky(t,r);return n==null||n.includes(void 0)?e:n}i(w3,"maybeExpandMacroToken");function Vy(e,r){return Array.prototype.concat(...e.map(t=>w3(t,r)))}i(Vy,"expandMacroTokens");class qy{static{i(this,"TokenParser")}constructor(r,t){if(this.locale=r,this.format=t,this.tokens=Vy(pt.parseFormat(t),r),this.units=this.tokens.map(n=>h3(n,r)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=p3(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(r){if(this.isValid){const[t,n]=b3(r,this.regex,this.handlers),[o,s,a]=n?v3(n):[null,null,void 0];if(Ls(n,"a")&&Ls(n,"H"))throw new Ds("Can't include meridiem when specifying 24-hour format");return{input:r,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:o,zone:s,specificOffset:a}}else return{input:r,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Wy(e,r,t){return new qy(e,t).explainFromTokens(r)}i(Wy,"explainFromTokens");function $3(e,r,t){const{result:n,zone:o,specificOffset:s,invalidReason:a}=Wy(e,r,t);return[n,o,s,a]}i($3,"parseFromTokens");function Ky(e,r){if(!e)return null;const n=pt.create(r,e).dtFormatter(y3()),o=n.formatToParts(),s=n.resolvedOptions();return o.map(a=>m3(a,e,s))}i(Ky,"formatOptsToTokens");const of="Invalid DateTime",yp=864e13;function Va(e){return new Fn("unsupported zone",`the zone "${e.name}" is not supported`)}i(Va,"unsupportedZone");function sf(e){return e.weekData===null&&(e.weekData=ic(e.c)),e.weekData}i(sf,"possiblyCachedWeekData");function af(e){return e.localWeekData===null&&(e.localWeekData=ic(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}i(af,"possiblyCachedLocalWeekData");function $i(e,r){const t={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new oe({...t,...r,old:t})}i($i,"clone$2");function Gy(e,r,t){let n=e-r*60*1e3;const o=t.offset(n);if(r===o)return[n,r];n-=(o-r)*60*1e3;const s=t.offset(n);return o===s?[n,o]:[e-Math.min(o,s)*60*1e3,Math.max(o,s)]}i(Gy,"fixOffset");function bu(e,r){e+=r*60*1e3;const t=new Date(e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds(),millisecond:t.getUTCMilliseconds()}}i(bu,"tsToObj");function zu(e,r,t){return Gy(Vc(e),r,t)}i(zu,"objToTS");function wp(e,r){const t=e.o,n=e.c.year+Math.trunc(r.years),o=e.c.month+Math.trunc(r.months)+Math.trunc(r.quarters)*3,s={...e.c,year:n,month:o,day:Math.min(e.c.day,sc(n,o))+Math.trunc(r.days)+Math.trunc(r.weeks)*7},a=xe.fromObject({years:r.years-Math.trunc(r.years),quarters:r.quarters-Math.trunc(r.quarters),months:r.months-Math.trunc(r.months),weeks:r.weeks-Math.trunc(r.weeks),days:r.days-Math.trunc(r.days),hours:r.hours,minutes:r.minutes,seconds:r.seconds,milliseconds:r.milliseconds}).as("milliseconds"),l=Vc(s);let[u,d]=Gy(l,t,e.zone);return a!==0&&(u+=a,d=e.zone.offset(u)),{ts:u,o:d}}i(wp,"adjustTime");function ms(e,r,t,n,o,s){const{setZone:a,zone:l}=t;if(e&&Object.keys(e).length!==0||r){const u=r||l,d=oe.fromObject(e,{...t,zone:u,specificOffset:s});return a?d:d.setZone(l)}else return oe.invalid(new Fn("unparsable",`the input "${o}" can't be parsed as ${n}`))}i(ms,"parseDataToDateTime");function vu(e,r,t=!0){return e.isValid?pt.create(Be.create("en-US"),{allowZ:t,forceSimple:!0}).formatDateTimeFromString(e,r):null}i(vu,"toTechFormat");function lf(e,r,t){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=Cr(e.c.year,n?6:4),t==="year")return o;if(r){if(o+="-",o+=Cr(e.c.month),t==="month")return o;o+="-"}else if(o+=Cr(e.c.month),t==="month")return o;return o+=Cr(e.c.day),o}i(lf,"toISODate");function $p(e,r,t,n,o,s,a){let l=!t||e.c.millisecond!==0||e.c.second!==0,u="";switch(a){case"day":case"month":case"year":break;default:if(u+=Cr(e.c.hour),a==="hour")break;if(r){if(u+=":",u+=Cr(e.c.minute),a==="minute")break;l&&(u+=":",u+=Cr(e.c.second))}else{if(u+=Cr(e.c.minute),a==="minute")break;l&&(u+=Cr(e.c.second))}if(a==="second")break;l&&(!n||e.c.millisecond!==0)&&(u+=".",u+=Cr(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!s?u+="Z":e.o<0?(u+="-",u+=Cr(Math.trunc(-e.o/60)),u+=":",u+=Cr(Math.trunc(-e.o%60))):(u+="+",u+=Cr(Math.trunc(e.o/60)),u+=":",u+=Cr(Math.trunc(e.o%60)))),s&&(u+="["+e.zone.ianaName+"]"),u}i($p,"toISOTime");const Hy={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},k3={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},x3={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Vu=["year","month","day","hour","minute","second","millisecond"],D3=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],C3=["year","ordinal","hour","minute","second","millisecond"];function qu(e){const r={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!r)throw new Hv(e);return r}i(qu,"normalizeUnit");function kp(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return qu(e)}}i(kp,"normalizeUnitWithLocalWeeks");function E3(e){if(qa===void 0&&(qa=ur.now()),e.type!=="iana")return e.offset(qa);const r=e.name;let t=R0.get(r);return t===void 0&&(t=e.offset(qa),R0.set(r,t)),t}i(E3,"guessOffsetForZone");function xp(e,r){const t=zo(r.zone,ur.defaultZone);if(!t.isValid)return oe.invalid(Va(t));const n=Be.fromObject(r);let o,s;if(ne(e.year))o=ur.now();else{for(const u of Vu)ne(e[u])&&(e[u]=Hy[u]);const a=wy(e)||$y(e);if(a)return oe.invalid(a);const l=E3(t);[o,s]=zu(e,l,t)}return new oe({ts:o,zone:t,loc:n,o:s})}i(xp,"quickDT");function Dp(e,r,t){const n=ne(t.round)?!0:t.round,o=ne(t.rounding)?"trunc":t.rounding,s=i((l,u)=>(l=jh(l,n||t.calendary?0:2,t.calendary?"round":o),r.loc.clone(t).relFormatter(t).format(l,u)),"format"),a=i(l=>t.calendary?r.hasSame(e,l)?0:r.startOf(l).diff(e.startOf(l),l).get(l):r.diff(e,l).get(l),"differ");if(t.unit)return s(a(t.unit),t.unit);for(const l of t.units){const u=a(l);if(Math.abs(u)>=1)return s(u,l)}return s(e>r?-0:0,t.units[t.units.length-1])}i(Dp,"diffRelative");function Cp(e){let r={},t;return e.length>0&&typeof e[e.length-1]=="object"?(r=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[r,t]}i(Cp,"lastOpts");let qa;const R0=new Map;class oe{static{i(this,"DateTime")}constructor(r){const t=r.zone||ur.defaultZone;let n=r.invalid||(Number.isNaN(r.ts)?new Fn("invalid input"):null)||(t.isValid?null:Va(t));this.ts=ne(r.ts)?ur.now():r.ts;let o=null,s=null;if(!n)if(r.old&&r.old.ts===this.ts&&r.old.zone.equals(t))[o,s]=[r.old.c,r.old.o];else{const l=Go(r.o)&&!r.old?r.o:t.offset(this.ts);o=bu(this.ts,l),n=Number.isNaN(o.year)?new Fn("invalid input"):null,o=n?null:o,s=n?null:l}this._zone=t,this.loc=r.loc||Be.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=s,this.isLuxonDateTime=!0}static now(){return new oe({})}static local(){const[r,t]=Cp(arguments),[n,o,s,a,l,u,d]=t;return xp({year:n,month:o,day:s,hour:a,minute:l,second:u,millisecond:d},r)}static utc(){const[r,t]=Cp(arguments),[n,o,s,a,l,u,d]=t;return r.zone=kt.utcInstance,xp({year:n,month:o,day:s,hour:a,minute:l,second:u,millisecond:d},r)}static fromJSDate(r,t={}){const n=o4(r)?r.valueOf():NaN;if(Number.isNaN(n))return oe.invalid("invalid input");const o=zo(t.zone,ur.defaultZone);return o.isValid?new oe({ts:n,zone:o,loc:Be.fromObject(t)}):oe.invalid(Va(o))}static fromMillis(r,t={}){if(Go(r))return r<-yp||r>yp?oe.invalid("Timestamp out of range"):new oe({ts:r,zone:zo(t.zone,ur.defaultZone),loc:Be.fromObject(t)});throw new gt(`fromMillis requires a numerical input, but received a ${typeof r} with value ${r}`)}static fromSeconds(r,t={}){if(Go(r))return new oe({ts:r*1e3,zone:zo(t.zone,ur.defaultZone),loc:Be.fromObject(t)});throw new gt("fromSeconds requires a numerical input")}static fromObject(r,t={}){r=r||{};const n=zo(t.zone,ur.defaultZone);if(!n.isValid)return oe.invalid(Va(n));const o=Be.fromObject(t),s=ac(r,kp),{minDaysInFirstWeek:a,startOfWeek:l}=lp(s,o),u=ur.now(),d=ne(t.specificOffset)?n.offset(u):t.specificOffset,f=!ne(s.ordinal),h=!ne(s.year),g=!ne(s.month)||!ne(s.day),m=h||g,y=s.weekYear||s.weekNumber;if((m||f)&&y)throw new Ds("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(g&&f)throw new Ds("Can't mix ordinal dates with month/day");const k=y||s.weekday&&!m;let x,C,E=bu(u,d);k?(x=D3,C=k3,E=ic(E,a,l)):f?(x=C3,C=x3,E=tf(E)):(x=Vu,C=Hy);let I=!1;for(const Xe of x){const Qe=s[Xe];ne(Qe)?I?s[Xe]=C[Xe]:s[Xe]=E[Xe]:I=!0}const j=k?r4(s,a,l):f?t4(s):wy(s),K=j||$y(s);if(K)return oe.invalid(K);const ae=k?sp(s,a,l):f?ap(s):s,[Te,me]=zu(ae,d,n),Me=new oe({ts:Te,zone:n,o:me,loc:o});return s.weekday&&m&&r.weekday!==Me.weekday?oe.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Me.toISO()}`):Me.isValid?Me:oe.invalid(Me.invalid)}static fromISO(r,t={}){const[n,o]=G4(r);return ms(n,o,t,"ISO 8601",r)}static fromRFC2822(r,t={}){const[n,o]=H4(r);return ms(n,o,t,"RFC 2822",r)}static fromHTTP(r,t={}){const[n,o]=Z4(r);return ms(n,o,t,"HTTP",t)}static fromFormat(r,t,n={}){if(ne(r)||ne(t))throw new gt("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:s=null}=n,a=Be.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0}),[l,u,d,f]=$3(a,r,t);return f?oe.invalid(f):ms(l,u,n,`format ${t}`,r,d)}static fromString(r,t,n={}){return oe.fromFormat(r,t,n)}static fromSQL(r,t={}){const[n,o]=t3(r);return ms(n,o,t,"SQL",r)}static invalid(r,t=null){if(!r)throw new gt("need to specify a reason the DateTime is invalid");const n=r instanceof Fn?r:new Fn(r,t);if(ur.throwOnInvalid)throw new Fx(n);return new oe({invalid:n})}static isDateTime(r){return r&&r.isLuxonDateTime||!1}static parseFormatForOpts(r,t={}){const n=Ky(r,Be.fromObject(t));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(r,t={}){return Vy(pt.parseFormat(r),Be.fromObject(t)).map(o=>o.val).join("")}static resetCache(){qa=void 0,R0.clear()}get(r){return this[r]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?sf(this).weekYear:NaN}get weekNumber(){return this.isValid?sf(this).weekNumber:NaN}get weekday(){return this.isValid?sf(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?af(this).weekday:NaN}get localWeekNumber(){return this.isValid?af(this).weekNumber:NaN}get localWeekYear(){return this.isValid?af(this).weekYear:NaN}get ordinal(){return this.isValid?tf(this.c).ordinal:NaN}get monthShort(){return this.isValid?mu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?mu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?mu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?mu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const r=864e5,t=6e4,n=Vc(this.c),o=this.zone.offset(n-r),s=this.zone.offset(n+r),a=this.zone.offset(n-o*t),l=this.zone.offset(n-s*t);if(a===l)return[this];const u=n-a*t,d=n-l*t,f=bu(u,a),h=bu(d,l);return f.hour===h.hour&&f.minute===h.minute&&f.second===h.second&&f.millisecond===h.millisecond?[$i(this,{ts:u}),$i(this,{ts:d})]:[this]}get isInLeapYear(){return Ul(this.year)}get daysInMonth(){return sc(this.year,this.month)}get daysInYear(){return this.isValid?Ss(this.year):NaN}get weeksInWeekYear(){return this.isValid?dl(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?dl(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(r={}){const{locale:t,numberingSystem:n,calendar:o}=pt.create(this.loc.clone(r),r).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:o}}toUTC(r=0,t={}){return this.setZone(kt.instance(r),t)}toLocal(){return this.setZone(ur.defaultZone)}setZone(r,{keepLocalTime:t=!1,keepCalendarTime:n=!1}={}){if(r=zo(r,ur.defaultZone),r.equals(this.zone))return this;if(r.isValid){let o=this.ts;if(t||n){const s=r.offset(this.ts),a=this.toObject();[o]=zu(a,s,r)}return $i(this,{ts:o,zone:r})}else return oe.invalid(Va(r))}reconfigure({locale:r,numberingSystem:t,outputCalendar:n}={}){const o=this.loc.clone({locale:r,numberingSystem:t,outputCalendar:n});return $i(this,{loc:o})}setLocale(r){return this.reconfigure({locale:r})}set(r){if(!this.isValid)return this;const t=ac(r,kp),{minDaysInFirstWeek:n,startOfWeek:o}=lp(t,this.loc),s=!ne(t.weekYear)||!ne(t.weekNumber)||!ne(t.weekday),a=!ne(t.ordinal),l=!ne(t.year),u=!ne(t.month)||!ne(t.day),d=l||u,f=t.weekYear||t.weekNumber;if((d||a)&&f)throw new Ds("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&a)throw new Ds("Can't mix ordinal dates with month/day");let h;s?h=sp({...ic(this.c,n,o),...t},n,o):ne(t.ordinal)?(h={...this.toObject(),...t},ne(t.day)&&(h.day=Math.min(sc(h.year,h.month),h.day))):h=ap({...tf(this.c),...t});const[g,m]=zu(h,this.o,this.zone);return $i(this,{ts:g,o:m})}plus(r){if(!this.isValid)return this;const t=xe.fromDurationLike(r);return $i(this,wp(this,t))}minus(r){if(!this.isValid)return this;const t=xe.fromDurationLike(r).negate();return $i(this,wp(this,t))}startOf(r,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;const n={},o=xe.normalizeUnit(r);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(t){const s=this.loc.getStartOfWeek(),{weekday:a}=this;a<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(o==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(r,t){return this.isValid?this.plus({[r]:1}).startOf(r,t).minus(1):this}toFormat(r,t={}){return this.isValid?pt.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,r):of}toLocaleString(r=oc,t={}){return this.isValid?pt.create(this.loc.clone(t),r).formatDateTime(this):of}toLocaleParts(r={}){return this.isValid?pt.create(this.loc.clone(r),r).formatDateTimeParts(this):[]}toISO({format:r="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:s=!1,precision:a="milliseconds"}={}){if(!this.isValid)return null;a=qu(a);const l=r==="extended";let u=lf(this,l,a);return Vu.indexOf(a)>=3&&(u+="T"),u+=$p(this,l,t,n,o,s,a),u}toISODate({format:r="extended",precision:t="day"}={}){return this.isValid?lf(this,r==="extended",qu(t)):null}toISOWeekDate(){return vu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:r=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:s=!1,format:a="extended",precision:l="milliseconds"}={}){return this.isValid?(l=qu(l),(o&&Vu.indexOf(l)>=3?"T":"")+$p(this,a==="extended",t,r,n,s,l)):null}toRFC2822(){return vu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return vu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?lf(this,!0):null}toSQLTime({includeOffset:r=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(t||r)&&(n&&(o+=" "),t?o+="z":r&&(o+="ZZ")),vu(this,o,!0)}toSQL(r={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(r)}`:null}toString(){return this.isValid?this.toISO():of}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(r={}){if(!this.isValid)return{};const t={...this.c};return r.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(r,t="milliseconds",n={}){if(!this.isValid||!r.isValid)return xe.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=i4(t).map(xe.normalizeUnit),a=r.valueOf()>this.valueOf(),l=a?this:r,u=a?r:this,d=l3(l,u,s,o);return a?d.negate():d}diffNow(r="milliseconds",t={}){return this.diff(oe.now(),r,t)}until(r){return this.isValid?br.fromDateTimes(this,r):this}hasSame(r,t,n){if(!this.isValid)return!1;const o=r.valueOf(),s=this.setZone(r.zone,{keepLocalTime:!0});return s.startOf(t,n)<=o&&o<=s.endOf(t,n)}equals(r){return this.isValid&&r.isValid&&this.valueOf()===r.valueOf()&&this.zone.equals(r.zone)&&this.loc.equals(r.loc)}toRelative(r={}){if(!this.isValid)return null;const t=r.base||oe.fromObject({},{zone:this.zone}),n=r.padding?this<t?-r.padding:r.padding:0;let o=["years","months","days","hours","minutes","seconds"],s=r.unit;return Array.isArray(r.unit)&&(o=r.unit,s=void 0),Dp(t,this.plus(n),{...r,numeric:"always",units:o,unit:s})}toRelativeCalendar(r={}){return this.isValid?Dp(r.base||oe.fromObject({},{zone:this.zone}),this,{...r,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...r){if(!r.every(oe.isDateTime))throw new gt("min requires all arguments be DateTimes");return up(r,t=>t.valueOf(),Math.min)}static max(...r){if(!r.every(oe.isDateTime))throw new gt("max requires all arguments be DateTimes");return up(r,t=>t.valueOf(),Math.max)}static fromFormatExplain(r,t,n={}){const{locale:o=null,numberingSystem:s=null}=n,a=Be.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0});return Wy(a,r,t)}static fromStringExplain(r,t,n={}){return oe.fromFormatExplain(r,t,n)}static buildFormatParser(r,t={}){const{locale:n=null,numberingSystem:o=null}=t,s=Be.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new qy(s,r)}static fromFormatParser(r,t,n={}){if(ne(r)||ne(t))throw new gt("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:s=null}=n,a=Be.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0});if(!a.equals(t.locale))throw new gt(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${t.locale}`);const{result:l,zone:u,specificOffset:d,invalidReason:f}=t.explainFromTokens(r);return f?oe.invalid(f):ms(l,u,n,`format ${t.format}`,r,d)}static get DATE_SHORT(){return oc}static get DATE_MED(){return Zv}static get DATE_MED_WITH_WEEKDAY(){return Nx}static get DATE_FULL(){return Yv}static get DATE_HUGE(){return Jv}static get TIME_SIMPLE(){return Xv}static get TIME_WITH_SECONDS(){return Qv}static get TIME_WITH_SHORT_OFFSET(){return ey}static get TIME_WITH_LONG_OFFSET(){return ry}static get TIME_24_SIMPLE(){return ty}static get TIME_24_WITH_SECONDS(){return ny}static get TIME_24_WITH_SHORT_OFFSET(){return oy}static get TIME_24_WITH_LONG_OFFSET(){return iy}static get DATETIME_SHORT(){return sy}static get DATETIME_SHORT_WITH_SECONDS(){return ay}static get DATETIME_MED(){return ly}static get DATETIME_MED_WITH_SECONDS(){return uy}static get DATETIME_MED_WITH_WEEKDAY(){return Px}static get DATETIME_FULL(){return cy}static get DATETIME_FULL_WITH_SECONDS(){return dy}static get DATETIME_HUGE(){return fy}static get DATETIME_HUGE_WITH_SECONDS(){return hy}}function Fa(e){if(oe.isDateTime(e))return e;if(e&&e.valueOf&&Go(e.valueOf()))return oe.fromJSDate(e);if(e&&typeof e=="object")return oe.fromObject(e);throw new gt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}i(Fa,"friendlyDateTime");Intl.DateTimeFormat().resolvedOptions().locale;var Y;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Y||(Y={}));Y.Year,Y.Hour,Y.Minute,Y.Second,Y.Millisecond;Y.Month,Y.Week,Y.Day;Y.Millisecond,Y.Second,Y.Minute,Y.Hour,Y.Day,Y.Week,Y.Month,Y.Year;const Ep={min:0,max:23},Ap={min:0,max:59},Mp={min:0,max:59},Fp={min:0,max:999};var ie;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(ie||(ie={}));const A3=[ie.Milliseconds,ie.Seconds,ie.Minutes,ie.Hours,ie.Days,ie.Weeks,ie.Months,ie.Years];ie.Milliseconds+"",ie.Seconds+"",ie.Minutes+"",ie.Hours+"",ie.Days+"",ie.Weeks+"",ie.Months+"",ie.Years+"";ie.Years+"",Y.Year,ie.Months+"",Y.Month,ie.Weeks+"",Y.Week,ie.Days+"",Y.Day,ie.Hours+"",Y.Hour,ie.Minutes+"",Y.Minute,ie.Seconds+"",Y.Second,ie.Milliseconds+"",Y.Millisecond;Y.Year+"",ie.Years,Y.Month+"",ie.Months,Y.Week+"",ie.Weeks,Y.Day+"",ie.Days,Y.Hour+"",ie.Hours,Y.Minute+"",ie.Minutes,Y.Second+"",ie.Seconds,Y.Millisecond+"",ie.Milliseconds;function M3(e){return A3.filter(r=>e[r])}i(M3,"flattenUnitsSmallestToLargest");function L0(e,{decimalCount:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(L0,"round$1");function F3(e){return L0(Math.max(e-.4,0),{decimalCount:0})}i(F3,"roundNarrow");function Sp(e){return e===0?0:Math.sign(e)}i(Sp,"getSign");function js(e,r,t={}){const n={},o={decimalCount:t.decimalCount==null?void 0:Math.round(Math.abs(t.decimalCount))},s=Object.values(e).includes(1/0),a=Object.values(e).includes(-1/0),l=M3(r).reverse();if(s||a)return l.forEach(f=>{n[f]=s?1/0:-1/0}),n;let u=xe.fromObject(e).as(ie.Milliseconds);const d=Sp(u);return l.forEach((f,h)=>{const g=h===l.length-1;if(f===ie.Milliseconds)n.milliseconds=L0(u,o);else{const m=xe.fromObject({milliseconds:u}).as(f),y=Math.sign(m),k=Math.abs(m),x=g?L0(k,o):Math.floor(o.decimalCount==null?k:F3(k)),C=x===0?0:x*y;n[f]=C,u-=xe.fromObject({[f]:C}).as(ie.Milliseconds),d!==Sp(u)&&(u=0)}}),n}i(js,"convertDuration");var mt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(mt||(mt={}));mt.Sunday+"",mt.Monday+"",mt.Tuesday+"",mt.Wednesday+"",mt.Thursday+"",mt.Friday+"",mt.Saturday+"";mt.Sunday,mt.Monday,mt.Tuesday,mt.Wednesday,mt.Thursday,mt.Friday,mt.Saturday;var Tt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Tt||(Tt={}));Tt.January,Tt.February,Tt.March,Tt.April,Tt.May,Tt.June,Tt.July,Tt.August,Tt.September,Tt.October,Tt.November,Tt.December;const Tp={min:1,max:12},Np={min:1,max:31};function Ui(e){const r=new nc,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:js(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{r.resolve()},n<=0?0:n),r.promise}i(Ui,"wait");function Zy(...e){const r=e.join(""),t=_c(Array.from(r));return Array.from(t).join("")}i(Zy,"removeDuplicateCharacters");function Yy(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}i(Yy,"escapeStringForRegExp");function Jy(e,r){const t=Zy([typeof e=="string"?"":e.flags,r].join("").toLowerCase());return Xy(e,t)}i(Jy,"addRegExpFlags");function Xy(e,r){const t=Zy(r);return typeof e=="string"?new RegExp(Yy(e),t):new RegExp(e.source,t)}i(Xy,"setRegExpFlags");function Qy(e,{caseSensitive:r}){const n="".replaceAll("i","");return Xy(e,n)}i(Qy,"setRegExpCaseSensitivity");function Vh(e,r=1){return e.split(`
`).map(t=>["    ".repeat(Math.round(r)),t].join("")).join(`
`)}i(Vh,"indent");function e2(e,r){return r?typeof r=="string"?!!new RegExp(Yy(r),"i").exec(e):!!Jy(r,"i").exec(e):!1}i(e2,"match");class v extends Error{static{i(this,"AssertionError")}name="AssertionError";constructor(r,t){super(Yi(t,r)||"Assertion failed.")}}const Pp={interval:{milliseconds:100},timeout:{seconds:10}},uf=Symbol("not set");async function S3(e,r,t){const{callback:n,extraAssertionArgs:o,failureMessage:s,options:a}=T3(r),l=js(a.timeout,{milliseconds:!0}).milliseconds,u=js(a.interval,{milliseconds:!0});let d=uf,f;async function h(){try{d=t?n():await n(),e(d,...o)}catch(m){d=uf,f=wr(m)}}i(h,"checkCondition");const g=Date.now();for(;d===uf;)if(await h(),await Ui(u),Date.now()-g>=l){const y=`${s?`${s}: `:""}Timeout of '${l}' milliseconds exceeded waiting for callback value to match expectations`;throw Ji(f,y)}return d}i(S3,"executeWaitUntil");function R(e,r=!1){return((...t)=>S3(e,t,r))}i(R,"createWaitUntil");function T3(e){const r={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(t=>{if(r.callback)r.extraAssertionArgs.push(t);else if(typeof t=="function")r.callback=t;else if(typeof t=="string")r.failureMessage=t;else if(typeof t=="object")r.options=t;else{if(t===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(t)}`)}}),!r.callback)throw new TypeError("Missing waitUntil callback.");return{callback:r.callback,options:r2(r.options),extraAssertionArgs:r.extraAssertionArgs.toReversed(),failureMessage:r.failureMessage}}i(T3,"parseWaitUntilArgs");function r2(e){return{interval:e?.interval||Pp.interval,timeout:e?.timeout||Pp.timeout}}i(r2,"parseWaitUntilOptions");const Sa={isFalse(e,r){if(e!==!1)throw new v(`'${w(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new v(`'${w(e)}' is not falsy.`,r)},isTrue(e,r){if(e!==!0)throw new v(`'${w(e)}' is not true.`,r)},isTruthy(e,r){if(!e)throw new v(`'${w(e)}' is not truthy.`,r)}},t2={assert:Sa,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,r){if(e===!1)return e;throw new v(`'${w(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new v(`'${w(e)}' is not falsy.`,r);return e},isTrue(e,r){if(e===!0)return e;throw new v(`'${w(e)}' is not true.`,r)},isTruthy(e,r){if(e)return e;throw new v(`'${w(e)}' is not truthy.`,r)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:R(Sa.isFalse),isFalsy:R(Sa.isFalsy),isTrue:R(Sa.isTrue),isTruthy:R(Sa.isTruthy)}};function N3(e,r,t){if(typeof e=="string"){if(!e.endsWith(r))throw new v(`${w(e)} does not end with ${w(r)}}`,t)}else if(e[e.length-1]!==r)throw new v(`${w(e)} does not end with ${w(r)}}`,t)}i(N3,"endsWith");function P3(e,r,t){if(typeof e=="string"){if(e.endsWith(r))throw new v(`${w(e)} ends with ${w(r)}}`,t)}else if(e[e.length-1]===r)throw new v(`${w(e)} ends with ${w(r)}}`,t)}i(P3,"endsWithout");function I3(e,r,t){if(typeof e=="string"){if(!e.startsWith(r))throw new v(`${w(e)} does not start with ${w(r)}}`,t)}else if(e[0]!==r)throw new v(`${w(e)} does not start with ${w(r)}}`,t)}i(I3,"startsWith");function O3(e,r,t){if(typeof e=="string"){if(e.startsWith(r))throw new v(`${w(e)} starts with ${w(r)}}`,t)}else if(e[0]===r)throw new v(`${w(e)} starts with ${w(r)}}`,t)}i(O3,"startsWithout");const Ta={endsWith:N3,endsWithout:P3,startsWith:I3,startsWithout:O3},n2={assert:Ta,check:{endsWith:i(((e,r)=>typeof e=="string"?e.endsWith(r):e[e.length-1]===r),"endsWith"),endsWithout:i(((e,r)=>typeof e=="string"?!e.endsWith(r):e[e.length-1]!==r),"endsWithout"),startsWith:i(((e,r)=>typeof e=="string"?e.startsWith(r):e[0]===r),"startsWith"),startsWithout:i(((e,r)=>typeof e=="string"?!e.startsWith(r):e[0]!==r),"startsWithout")},assertWrap:{endsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.endsWith(r))throw new v(`${w(e)} does not end with ${w(r)}}`,t)}else if(e[e.length-1]!==r)throw new v(`${w(e)} does not end with ${w(r)}}`,t);return e}),"endsWith"),endsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.endsWith(r))throw new v(`${w(e)} ends with ${w(r)}}`,t)}else if(e[e.length-1]===r)throw new v(`${w(e)} ends with ${w(r)}}`,t);return e}),"endsWithout"),startsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.startsWith(r))throw new v(`${w(e)} does not start with ${w(r)}}`,t)}else if(e[0]!==r)throw new v(`${w(e)} does not start with ${w(r)}}`,t);return e}),"startsWith"),startsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.startsWith(r))throw new v(`${w(e)} starts with ${w(r)}}`,t)}else if(e[0]===r)throw new v(`${w(e)} starts with ${w(r)}}`,t);return e}),"startsWithout")},checkWrap:{endsWith:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?e:void 0;if(e[e.length-1]===r)return e}),"endsWith"),endsWithout:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?void 0:e;if(e[e.length-1]!==r)return e}),"endsWithout"),startsWith:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?e:void 0;if(e[0]===r)return e}),"startsWith"),startsWithout:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?void 0:e;if(e[0]!==r)return e}),"startsWithout")},waitUntil:{endsWith:R(Ta.endsWith),endsWithout:R(Ta.endsWithout),startsWith:R(Ta.startsWith),startsWithout:R(Ta.startsWithout)}};function B3(e,r,t){const n=Wt(r);if(!n.includes(e))throw new v(`${String(e)} is not an enum value in '${n.join(",")}'.`,t)}i(B3,"assertIsEnumValue");function fo(e,r){return Wt(r).includes(e)}i(fo,"isEnumValue");const cf={isEnumValue(e,r,t){B3(e,r,t)},isNotEnumValue(e,r,t){const n=Wt(r);if(n.includes(e))throw new v(`${String(e)} is an enum value in '${n.join(",")}'.`,t)}},o2={assert:cf,check:{isEnumValue:fo,isNotEnumValue(e,r){return!Wt(r).includes(e)}},assertWrap:{isEnumValue(e,r,t){const n=Wt(r);if(!n.includes(e))throw new v(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e},isNotEnumValue(e,r,t){const n=Wt(r);if(n.includes(e))throw new v(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e}},checkWrap:{isEnumValue(e,r){if(Wt(r).includes(e))return e},isNotEnumValue(e,r){if(!Wt(r).includes(e))return e}},waitUntil:{isEnumValue:R(cf.isEnumValue),isNotEnumValue:R(cf.isNotEnumValue)}},df={entriesEqual(e,r,t){if(!e||typeof e!="object")throw new v(`${w(e)} is not an object.`,t);if(!r||typeof r!="object")throw new v(`${w(r)} is not an object.`,t);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const s=e[o],a=r[o];if(s!==a)throw new v(`Entries are not equal at key '${String(o)}'.`,t)})},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(s=>{const a=e[s],l=r[s];return a!==l}))throw new v("Entries are equal.",t)}},i2={assert:df,check:{entriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(n=>{const o=e[n],s=r[n];return o===s})},notEntriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(n=>{const o=e[n],s=r[n];return o!==s})}},assertWrap:{entriesEqual(e,r,t){if(!e||typeof e!="object")throw new v(`${w(e)} is not an object.`,t);if(!r||typeof r!="object")throw new v(`${w(r)} is not an object.`,t);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const s=e[o],a=r[o];if(s!==a)throw new v(`Entries are not equal at key '${String(o)}'.`,t)}),e},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(s=>{const a=e[s],l=r[s];return a!==l}))return e;throw new v("Entries are equal.",t)}},checkWrap:{entriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(o=>{const s=e[o],a=r[o];return s===a}))return e},notEntriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(o=>{const s=e[o],a=r[o];return s!==a}))return e}},waitUntil:{entriesEqual:R(df.entriesEqual),notEntriesEqual:R(df.notEntriesEqual)}};function lc(e,r){return JSON.stringify(e)===JSON.stringify(r)}i(lc,"baseJsonEquals");function fl(e,r){if(!(e===r||lc(e,r))){if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();if(t.length!==n.length)throw new Error("Values are not JSON equal.");if(!lc(t,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{fl(e[s],r[s])}catch(a){throw new Error(`JSON objects are not equal at key '${s}': ${Jr(a)}`)}})}throw new Error("Values are not JSON equal.")}}i(fl,"recursiveAssertJsonEquals");function Wa(e,r){if(e===r||lc(e,r))return!0;if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();return t.length!==n.length||!lc(t,n)?!1:Object.keys(e).every(s=>Wa(e[s],r[s]))}return!1}i(Wa,"recursiveCheckJsonEquals");const ff={jsonEquals(e,r,t){try{fl(e,r)}catch(n){throw new v(Jr(n),t)}},notJsonEquals(e,r,t){try{fl(e,r)}catch{return}throw new v("Values are JSON equal.",t)}},s2={assert:ff,check:{jsonEquals(e,r){return Wa(e,r)},notJsonEquals(e,r){return!Wa(e,r)}},assertWrap:{jsonEquals(e,r,t){try{return fl(e,r),e}catch(n){throw new v(Jr(n),t)}},notJsonEquals(e,r,t){try{fl(e,r)}catch{return e}throw new v("Values are JSON equal.",t)}},checkWrap:{jsonEquals(e,r){if(Wa(e,r))return e},notJsonEquals(e,r){if(!Wa(e,r))return e}},waitUntil:{jsonEquals:R(ff.jsonEquals),notJsonEquals:R(ff.notJsonEquals)}};function Ip(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const r=e[Symbol.toStringTag];return typeof r=="string"?r:Object.prototype.toString.call(e).slice(8,-1)}i(Ip,"type$1");function a2(){this._key="chai/deep-eql__"+Math.random()+Date.now()}i(a2,"FakeMap");a2.prototype={get:i(function(r){return r[this._key]},"get"),set:i(function(r,t){Object.isExtensible(r)&&Object.defineProperty(r,this._key,{value:t,configurable:!0})},"set")};var l2=typeof WeakMap=="function"?WeakMap:a2;function Op(e,r,t){if(!t||_s(e)||_s(r))return null;var n=t.get(e);if(n){var o=n.get(r);if(typeof o=="boolean")return o}return null}i(Op,"memoizeCompare");function yu(e,r,t,n){if(!(!t||_s(e)||_s(r))){var o=t.get(e);o?o.set(r,n):(o=new l2,o.set(r,n),t.set(e,o))}}i(yu,"memoizeSet");function Mn(e,r,t){if(t&&t.comparator)return Bp(e,r,t);var n=u2(e,r);return n!==null?n:Bp(e,r,t)}i(Mn,"deepEqual");function u2(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r?!0:_s(e)||_s(r)?!1:null}i(u2,"simpleEqual");function Bp(e,r,t){t=t||{},t.memoize=t.memoize===!1?!1:t.memoize||new l2;var n=t&&t.comparator,o=Op(e,r,t.memoize);if(o!==null)return o;var s=Op(r,e,t.memoize);if(s!==null)return s;if(n){var a=n(e,r);if(a===!1||a===!0)return yu(e,r,t.memoize,a),a;var l=u2(e,r);if(l!==null)return l}var u=Ip(e);if(u!==Ip(r))return yu(e,r,t.memoize,!1),!1;yu(e,r,t.memoize,!0);var d=R3(e,r,u,t);return yu(e,r,t.memoize,d),d}i(Bp,"extensiveDeepEqual");function R3(e,r,t,n){switch(t){case"String":case"Number":case"Boolean":case"Date":return Mn(e.valueOf(),r.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===r;case"Error":return c2(e,r,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Pi(e,r,n);case"RegExp":return L3(e,r);case"Generator":return j3(e,r,n);case"DataView":return Pi(new Uint8Array(e.buffer),new Uint8Array(r.buffer),n);case"ArrayBuffer":return Pi(new Uint8Array(e),new Uint8Array(r),n);case"Set":return Rp(e,r,n);case"Map":return Rp(e,r,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(r);case"Temporal.Duration":return e.total("nanoseconds")===r.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===r.toString();default:return U3(e,r,n)}}i(R3,"extensiveDeepEqualByType");function L3(e,r){return e.toString()===r.toString()}i(L3,"regexpEqual");function Rp(e,r,t){try{if(e.size!==r.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(i(function(a,l){n.push([a,l])},"gatherEntries")),r.forEach(i(function(a,l){o.push([a,l])},"gatherEntries")),Pi(n.sort(),o.sort(),t)}i(Rp,"entriesEqual");function Pi(e,r,t){var n=e.length;if(n!==r.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(Mn(e[o],r[o],t)===!1)return!1;return!0}i(Pi,"iterableEqual");function j3(e,r,t){return Pi(j0(e),j0(r),t)}i(j3,"generatorEqual");function _3(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}i(_3,"hasIteratorFunction");function Lp(e){if(_3(e))try{return j0(e[Symbol.iterator]())}catch{return[]}return[]}i(Lp,"getIteratorEntries");function j0(e){for(var r=e.next(),t=[r.value];r.done===!1;)r=e.next(),t.push(r.value);return t}i(j0,"getGeneratorEntries");function jp(e){var r=[];for(var t in e)r.push(t);return r}i(jp,"getEnumerableKeys");function _p(e){for(var r=[],t=Object.getOwnPropertySymbols(e),n=0;n<t.length;n+=1){var o=t[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&r.push(o)}return r}i(_p,"getEnumerableSymbols");function c2(e,r,t,n){var o=t.length;if(o===0)return!0;for(var s=0;s<o;s+=1)if(Mn(e[t[s]],r[t[s]],n)===!1)return!1;return!0}i(c2,"keysEqual");function U3(e,r,t){var n=jp(e),o=jp(r),s=_p(e),a=_p(r);if(n=n.concat(s),o=o.concat(a),n.length&&n.length===o.length)return Pi(Up(n).sort(),Up(o).sort())===!1?!1:c2(e,r,n,t);var l=Lp(e),u=Lp(r);return l.length&&l.length===u.length?(l.sort(),u.sort(),Pi(l,u,t)):n.length===0&&l.length===0&&o.length===0&&u.length===0}i(U3,"objectEqual");function _s(e){return e===null||typeof e!="object"}i(_s,"isPrimitive");function Up(e){return e.map(i(function(t){return typeof t=="symbol"?t.toString():t},"mapSymbol"))}i(Up,"mapSymbols");class Ns extends v{static{i(this,"DiffError")}name="DiffError";constructor(r,t,n,o){const s=Dx(t,n);super([r,Vh(s)].join(`
`),o)}}function _o(e,r){return typeof e=="function"&&typeof r=="function"?!0:null}i(_o,"customComparator");const Lo={strictEquals(e,r,t){if(e!==r)throw typeof e=="object"&&e||typeof r=="object"&&r?new v(`Strict reference equality failed for 

${w(r)}

.`,t):new Ns("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new v(`Strict reference INequality failed for 

${w(r)}

.`,t):new v(`

${w(e)}

strictly equals

${w(r)}

`,t)},looseEquals(e,r,t){if(e!=r)throw typeof e=="object"&&e||typeof r=="object"&&r?new v(`Loose reference equality failed for 

${w(r)}

.`,t):new Ns("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new v(`Loose reference INequality failed for 

${w(r)}

.`,t):new v(`

${w(e)}

loosely equals

${w(r)}

`,t)},deepEquals(e,r,t){if(!Mn(e,r,{comparator:_o}))throw new Ns("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Mn(e,r,{comparator:_o}))throw new v(`

${w(e)}

deeply equals

${w(r)}

`,t)}},d2=Lo.deepEquals,f2={assert:Lo,check:{strictEquals(e,r){return e===r},notStrictEquals(e,r){return e!==r},looseEquals(e,r){return e==r},notLooseEquals(e,r){return e!=r},deepEquals(e,r){return Mn(e,r,{comparator:_o})},notDeepEquals(e,r){return!Mn(e,r,{comparator:_o})}},assertWrap:{strictEquals(e,r,t){if(e===r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new v(`Strict reference equality failed for 

${w(r)}

.`,t):new Ns("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new v(`Strict reference INequality failed for 

${w(r)}

.`,t):new v(`

${w(e)}

strictly equals

${w(r)}

`,t);return e},looseEquals(e,r,t){if(e==r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new v(`Loose reference equality failed for 

${w(r)}

.`,t):new Ns("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new v(`Loose reference INequality failed for 

${w(r)}

.`,t):new v(`

${w(e)}

loosely equals

${w(r)}

`,t);return e},deepEquals(e,r,t){if(Mn(e,r,{comparator:_o}))return e;throw new Ns("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Mn(e,r,{comparator:_o}))throw new v(`

${w(e)}

deeply equals

${w(r)}

`,t);return e}},checkWrap:{strictEquals(e,r){if(e===r)return e},notStrictEquals(e,r){if(e!==r)return e},looseEquals(e,r){if(e==r)return e},notLooseEquals(e,r){if(e!==r)return e},deepEquals(e,r){if(Mn(e,r,{comparator:_o}))return e},notDeepEquals(e,r){if(!Mn(e,r,{comparator:_o}))return e}},waitUntil:{strictEquals:R(Lo.strictEquals),notStrictEquals:R(Lo.notStrictEquals),looseEquals:R(Lo.looseEquals),notLooseEquals:R(Lo.notLooseEquals),deepEquals:R(Lo.deepEquals),notDeepEquals:R(Lo.notDeepEquals)}};function zt(e,r){if(typeof e=="string")return typeof r=="string"&&e.includes(r);let t=!0;try{t=Reflect.ownKeys(e).map(n=>e[n]).includes(r)}catch{return!1}return t}i(zt,"hasValue");function hn(e,r){return typeof r=="string"?r.includes(e):zt(r,e)}i(hn,"isIn");const uo={hasValue(e,r,t){if(!zt(e,r))throw new v(`'${w(e)}' does not have value '${w(r)}'.`,t)},lacksValue(e,r,t){if(zt(e,r))throw new v(`'${w(e)}' has value '${w(r)}'.`,t)},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=r.filter(s=>!o.includes(s))}catch{throw new v(`'${w(e)}' does not have values '${w(r)}'.`,t)}if(n.length)throw new v(`'${w(e)}' does not have values '${w(n)}'.`,t)},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=r.filter(s=>o.includes(s))}catch{}if(n.length)throw new v(`'${w(e)}' has values '${w(n)}'.`,t)},isIn(e,r,t){if(!hn(e,r))throw new v(`'${w(e)}'

is not in

${w(r)}.`,t)},isNotIn(e,r,t){if(hn(e,r))throw new v(`'${w(e)}'

is in

${w(r)}.`,t)},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new v(`'${w(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new v(`'${w(e)}' is not empty.`,r)},isNotEmpty(e,r){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new v(`'${w(e)}' is not empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new v(`'${w(e)}' is not empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new v(`'${w(e)}' is not empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new v(`'${w(e)}' is not empty.`,r)}}},h2={assert:uo,check:{hasValue(e,r){return zt(e,r)},lacksValue(e,r){return!zt(e,r)},hasValues(e,r){return r.every(t=>zt(e,t))},lacksValues(e,r){return r.every(t=>!zt(e,t))},isIn(e,r){return hn(e,r)},isNotIn(e,r){return!hn(e,r)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,r,t){if(!zt(e,r))throw new v(`'${w(e)}' does not have value '${w(r)}'.`,t);return e},lacksValue(e,r,t){if(zt(e,r))throw new v(`'${w(e)}' has value '${w(r)}'.`,t);return e},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=r.filter(s=>!o.includes(s))}catch{throw new v(`'${w(e)}' does not have values '${w(r)}'.`,t)}if(n.length)throw new v(`'${w(e)}' does not have values '${w(n)}'.`,t);return e},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=r.filter(s=>o.includes(s))}catch{}if(n.length)throw new v(`'${w(e)}' has values '${w(n)}'.`,t);return e},isIn(e,r,t){if(!hn(e,r))throw new v(`'${w(e)}'

is not in

${w(r)}.`,t);return e},isNotIn(e,r,t){if(hn(e,r))throw new v(`'${w(e)}'

is in

${w(r)}.`,t);return e},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new v(`'${w(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new v(`'${w(e)}' is not empty.`,r)},isNotEmpty(e,r){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new v(`'${w(e)}' is empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new v(`'${w(e)}' is empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new v(`'${w(e)}' is empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new v(`'${w(e)}' is empty.`,r);return e}},checkWrap:{hasValue(e,r){if(zt(e,r))return e},lacksValue(e,r){if(!zt(e,r))return e},hasValues(e,r){if(r.every(t=>zt(e,t)))return e},lacksValues(e,r){if(!r.every(t=>zt(e,t)))return e},isIn(e,r){if(hn(e,r))return e},isNotIn(e,r){if(!hn(e,r))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:R(uo.hasValue),lacksValue:R(uo.lacksValue),hasValues:R(uo.hasValues),lacksValues:R(uo.lacksValues),isIn:R(uo.isIn),isNotIn:R(uo.isNotIn),isEmpty:R(uo.isEmpty),isNotEmpty:R(uo.isNotEmpty)}},hf={isHttpStatus(e,r){if(!fo(e,T))throw new v(`${w(e)} is not a valid HTTP status.`,r)},isHttpStatusCategory(e,r,t){if(fo(e,T)){if(!hn(e,Uu[r]))throw new v(`${w(e)} is not a '${r}' HTTP status.`,t)}else throw new v(`${w(e)} is not a valid HTTP status.`,t)}},g2={assert:hf,check:{isHttpStatus(e){return fo(e,T)},isHttpStatusCategory(e,r){return fo(e,T)&&hn(e,Uu[r])}},assertWrap:{isHttpStatus(e,r){if(!fo(e,T))throw new v(`${w(e)} is not a valid HTTP status.`,r);return e},isHttpStatusCategory(e,r,t){if(fo(e,T)){if(!hn(e,Uu[r]))throw new v(`${w(e)} is not a '${r}' HTTP status.`,t)}else throw new v(`${w(e)} is not a valid HTTP status.`,t);return e}},checkWrap:{isHttpStatus(e){if(fo(e,T))return e},isHttpStatusCategory(e,r){if(fo(e,T)&&hn(e,Uu[r]))return e}},waitUntil:{isHttpStatus:R(hf.isHttpStatus),isHttpStatusCategory:R(hf.isHttpStatusCategory)}},gf={instanceOf(e,r,t){if(!(e instanceof r))throw new v(`'${w(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new v(`'${w(e)}' is an instance of '${r.name}'`,t)}},m2={assert:gf,check:{instanceOf(e,r){return e instanceof r},notInstanceOf(e,r){return!(e instanceof r)}},assertWrap:{instanceOf(e,r,t){if(e instanceof r)return e;throw new v(`'${w(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new v(`'${w(e)}' is an instance of '${r.name}'`,t);return e}},checkWrap:{instanceOf(e,r){if(e instanceof r)return e},notInstanceOf(e,r){if(!(e instanceof r))return e}},waitUntil:{instanceOf:R(gf.instanceOf),notInstanceOf:R(gf.notInstanceOf)}},z3=[(e,r)=>r in e,(e,r)=>r in e.constructor.prototype];function ir(e,r){return z3.some(t=>{try{return t(e,r)}catch{return!1}})}i(ir,"hasKey");const ki={isKeyOf(e,r,t){if(!ir(r,e))throw new v(`'${String(e)}' is not a key of '${w(r)}'.`,t)},isNotKeyOf(e,r,t){if(ir(r,e))throw new v(`'${String(e)}' is a key of '${w(r)}'.`,t)},hasKey(e,r,t){if(!ir(e,r))throw new v(`'${w(e)}' does not have key '${String(r)}'.`,t)},lacksKey(e,r,t){if(ir(e,r))throw new v(`'${w(e)}' has key '${String(r)}'.`,t)},hasKeys(e,r,t){const n=r.filter(o=>!ir(e,o));if(n.length)throw new v(`'${w(e)}' does not have keys '${n.join(",")}'.`,t)},lacksKeys(e,r,t){const n=r.filter(o=>ir(e,o));if(n.length)throw new v(`'${w(e)}' does not lack keys '${n.join(",")}'.`,t)}},p2={assert:ki,check:{isKeyOf(e,r){return ir(r,e)},isNotKeyOf(e,r){return!ir(r,e)},hasKey:ir,lacksKey(e,r){return!ir(e,r)},hasKeys(e,r){return r.every(t=>ir(e,t))},lacksKeys(e,r){return r.every(t=>!ir(e,t))}},assertWrap:{isKeyOf(e,r,t){if(!ir(r,e))throw new v(`'${String(e)}' is not a key of '${w(r)}'.`,t);return e},isNotKeyOf(e,r,t){if(ir(r,e))throw new v(`'${String(e)}' is a key of '${w(r)}'.`,t);return e},hasKey(e,r,t){if(!ir(e,r))throw new v(`'${w(e)}' does not have key '${String(r)}'.`,t);return e},lacksKey(e,r,t){if(ir(e,r))throw new v(`'${w(e)}' has key '${String(r)}'.`,t);return e},hasKeys(e,r,t){const n=r.filter(o=>!ir(e,o));if(n.length)throw new v(`'${w(e)}' does not have keys '${n.join(",")}'.`,t);return e},lacksKeys(e,r,t){const n=r.filter(o=>ir(e,o));if(n.length)throw new v(`'${w(e)}' does not lack keys '${n.join(",")}'.`,t);return e}},checkWrap:{isKeyOf(e,r){if(ir(r,e))return e},isNotKeyOf(e,r){if(!ir(r,e))return e},hasKey(e,r){if(ir(e,r))return e},lacksKey(e,r){if(!ir(e,r))return e},hasKeys(e,r){if(r.every(t=>ir(e,t)))return e},lacksKeys(e,r){if(r.every(t=>!ir(e,t)))return e}},waitUntil:{isKeyOf:R(ki.isKeyOf),isNotKeyOf:R(ki.isNotKeyOf),hasKey:R(ki.hasKey),lacksKey:R(ki.lacksKey),hasKeys:R(ki.hasKeys),lacksKeys:R(ki.lacksKeys)}};function V3(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)<r)throw new v(`Length '${e.length}' is not at least '${r}'.`,t)}i(V3,"isLengthAtLeast");function q3(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)!==r)throw new v(`Length '${e.length}' is not exactly '${r}'.`,t)}i(q3,"isLengthExactly");const mf={isLengthAtLeast:V3,isLengthExactly:q3},b2={assert:mf,check:{isLengthAtLeast:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)>=r),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)===r),"isLengthExactly")},assertWrap:{isLengthAtLeast:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)<r)throw new v(`Length '${e.length}' is not at least '${r}'.`,t);return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)!==r)throw new v(`Length '${e.length}' is not exactly '${r}'.`,t);return e}),"isLengthExactly")},checkWrap:{isLengthAtLeast:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)>=r)return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)===r)return e}),"isLengthExactly")},waitUntil:{isLengthAtLeast:R(mf.isLengthAtLeast),isLengthExactly:R(mf.isLengthExactly)}},W3={never(e){throw new v("This code should not have executed.",e)}},v2={assert:W3,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},pf={isDefined(e,r){if(e==null)throw new v(`'${w(e)}' is not defined.`,r)},isNullish(e,r){if(e!=null)throw new v(`'${w(e)}' is not a nullish.`,r)}},y2={assert:pf,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,r){if(e==null)throw new v(`'${w(e)}' is not defined.`,r);return e},isNullish(e,r){if(e==null)return e;throw new v(`'${w(e)}' is not nullish.`,r)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:R(pf.isDefined),isNullish:R(pf.isNullish)}},Mt={isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new v(`${e} is not within the bounds ${w({min:t,max:r})}`,n)},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new v(`${e} is not outside the bounds ${w({min:r,max:t})}`,n)},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new v(`${e} is not an integer.`,r)},isNotInteger(e,r){if(Number.isInteger(e))throw new v(`${e} is an integer.`,r)},isAbove(e,r,t){if(e<=r)throw new v(`${e} is not above ${r}`,t)},isAtLeast(e,r,t){if(e<r)throw new v(`${e} is not at least ${r}`,t)},isBelow(e,r,t){if(e>=r)throw new v(`${e} is not below ${r}`,t)},isAtMost(e,r,t){if(e>r)throw new v(`${e} is not at most ${r}`,t)},isNaN(e,r){if(!isNaN(e))throw new v(`${e} is not NaN`,r)},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new v(`${e} is not finite`,r)},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new v(`${e} is not infinite`,r)},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new v(`${e} is not within ±${t} of ${r}`,n)},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new v(`${e} is within ±${t} of ${r}`,n)}},w2={assert:Mt,check:{isInBounds(e,{max:r,min:t}){return t<=e&&e<=r},isOutBounds(e,{max:r,min:t}){return e<t||r<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,r){return e>r},isAtLeast(e,r){return e>=r},isBelow(e,r){return e<r},isAtMost(e,r){return e<=r},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,r,t){return r-t<=e&&e<=r+t},isNotApproximately(e,r,t){return e<r-t||e>r+t}},assertWrap:{isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new v(`${e} is not within the bounds ${w({min:t,max:r})}`,n);return e},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new v(`${e} is not outside the bounds ${w({min:r,max:t})}`,n);return e},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new v(`${e} is not an integer.`,r);return e},isNotInteger(e,r){if(Number.isInteger(e))throw new v(`${e} is an integer.`,r);return e},isAbove(e,r,t){if(e<=r)throw new v(`${e} is not above ${r}`,t);return e},isAtLeast(e,r,t){if(e<r)throw new v(`${e} is not at least ${r}`,t);return e},isBelow(e,r,t){if(e>=r)throw new v(`${e} is not below ${r}`,t);return e},isAtMost(e,r,t){if(e>r)throw new v(`${e} is not at most ${r}`,t);return e},isNaN(e,r){if(!isNaN(e))throw new v(`${e} is not NaN`,r);return e},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new v(`${e} is not finite`,r);return e},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new v(`${e} is not infinite`,r);return e},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new v(`${e} is not within ±${t} of ${r}`,n);return e},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new v(`${e} is within ±${t} of ${r}`,n);return e}},checkWrap:{isInBounds(e,{max:r,min:t}){if(t<=e&&e<=r)return e},isOutBounds(e,{max:r,min:t}){if(e<t||r<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,r){if(e>r)return e},isAtLeast(e,r){if(e>=r)return e},isBelow(e,r){if(e<r)return e},isAtMost(e,r){if(e<=r)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,r,t){if(r-t<=e&&e<=r+t)return e},isNotApproximately(e,r,t){if(e<r-t||e>r+t)return e}},waitUntil:{isInBounds:R(Mt.isInBounds),isOutBounds:R(Mt.isOutBounds),isInteger:R(Mt.isInteger),isNotInteger:R(Mt.isNotInteger),isAbove:R(Mt.isAbove),isAtLeast:R(Mt.isAtLeast),isBelow:R(Mt.isBelow),isAtMost:R(Mt.isAtMost),isNaN:R(Mt.isNaN),isFinite:R(Mt.isFinite),isInfinite:R(Mt.isInfinite),isApproximately:R(Mt.isApproximately),isNotApproximately:R(Mt.isNotApproximately)}};function K3(e,r,t,n,o){return ql(...Kc(e,r,t,n,o),!1)}i(K3,"assertOutput");function Kc(e,r,t,n,o){const s=Array.isArray(t);return[s?e:d2,s?r:e,s?t:r,s?n:t,s?o:n]}i(Kc,"extractOutputArgs");function ql(e,r,t,n,o,s){const a=r(...t);if(a instanceof Promise)return new Promise(async(l,u)=>{try{const d=await a;e(d,n),s?l(d):l()}catch(d){u(new v(`Output from '${r.name}' did not produce expected output. ${Jr(d)}`,o))}});try{return e(a,n),s?a:void 0}catch(l){throw new v(`Output from '${r.name}' did not produce expected output. ${Jr(l)}`,o)}}i(ql,"innerAssertOutput");function G3(e,r,t,n,o){try{const s=ql(...Kc(e,r,t,n,o),!1);return s instanceof Promise?new Promise(async a=>{try{await s,a(!0)}catch{a(!1)}}):!0}catch{return!1}}i(G3,"checkOutput");function H3(e,r,t,n,o){return ql(...Kc(e,r,t,n,o),!0)}i(H3,"assertWrapOutput");function Z3(e,r,t,n,o){try{const s=ql(...Kc(e,r,t,n,o),!0);return s instanceof Promise?new Promise(async a=>{try{a(await s)}catch{a(void 0)}}):s}catch{return}}i(Z3,"checkWrapOutput");const bf=Symbol("not set");async function Y3(e,r,t,n,o,s){const a=Array.isArray(t),l=a?e:d2,u=a?r:e,d=a?t:r,f=a?n:t,h=r2(a?o:n),g=a?s:o,m=js(h.timeout,{milliseconds:!0}).milliseconds,y=js(h.interval,{milliseconds:!0});let k=bf,x;async function C(){try{k=await ql(l,u,d,f,void 0,!0)}catch(I){k=bf,x=wr(I)}}i(C,"checkCondition");const E=Date.now();for(;k===bf;)if(await C(),await Ui(y),Date.now()-E>=m)throw Ji(x,Yi(g,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return k}i(Y3,"waitUntilOutput");const J3={output:K3},$2={assert:J3,check:{output:G3},assertWrap:{output:H3},checkWrap:{output:Z3},waitUntil:{output:Y3}},Na={isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new v(`'${w(e)}' is not a PropertyKey.`,r)},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new v(`'${w(e)}' is a PropertyKey.`,r)},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new v(`'${w(e)}' is not a Primitive.`,r)},isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new v(`'${w(e)}' is not a Primitive.`,r)}},k2={assert:Na,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new v(`'${w(e)}' is not a Primitive.`,r);return e},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new v(`'${w(e)}' is a PropertyKey.`,r);return e},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new v(`'${w(e)}' is not a Primitive.`,r);return e},isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new v(`'${w(e)}' is not a PropertyKey.`,r);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:R(Na.isNotPrimitive),isNotPropertyKey:R(Na.isNotPropertyKey),isPrimitive:R(Na.isPrimitive),isPropertyKey:R(Na.isPropertyKey)}},Pa={isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new v(`'${w(e)}' is not a PromiseLike.`,r)},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new v(`'${w(e)}' is a PromiseLike.`,r)},isPromise(e,r){if(!(e instanceof Promise))throw new v(`'${w(e)}' is not a Promise.`,r)},isNotPromise(e,r){if(e instanceof Promise)throw new v(`'${w(e)}' is a Promise.`,r)}},x2={assert:Pa,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new v(`'${w(e)}' is not a PromiseLike.`,r);return e},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new v(`'${w(e)}' is a PromiseLike.`,r);return e},isPromise(e,r){if(!(e instanceof Promise))throw new v(`'${w(e)}' is not a Promise.`,r);return e},isNotPromise(e,r){if(e instanceof Promise)throw new v(`'${w(e)}' is a Promise.`,r);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:R(Pa.isPromiseLike,!0),isNotPromiseLike:R(Pa.isNotPromiseLike,!0),isPromise:R(Pa.isPromise,!0),isNotPromise:R(Pa.isNotPromise,!0)}},vf={matches(e,r,t){if(!r.test(e))throw new v(`'${e}' does not match ${r}`,t)},mismatches(e,r,t){if(r.test(e))throw new v(`'${e}' matches ${r}`,t)}},D2={assert:vf,check:{matches(e,r){return r.test(e)},mismatches(e,r){return!r.test(e)}},assertWrap:{matches(e,r,t){if(!r.test(e))throw new v(`'${e}' does not match ${r}`,t);return e},mismatches(e,r,t){if(r.test(e))throw new v(`'${e}' matches ${r}`,t);return e}},checkWrap:{matches(e,r){if(r.test(e))return e},mismatches(e,r){if(!r.test(e))return e}},waitUntil:{matches:R(vf.matches,!0),mismatches:R(vf.mismatches,!0)}},lr={isArray(e,r){if(!Array.isArray(e))throw new v(`'${w(e)}' is not an array.`,r)},isBigInt(e,r){if(typeof e!="bigint")throw new v(`'${w(e)}' is not a bigint.`,r)},isBoolean(e,r){if(typeof e!="boolean")throw new v(`'${w(e)}' is not a boolean.`,r)},isFunction(e,r){if(typeof e!="function")throw new v(`'${w(e)}' is not a function.`,r)},isNull(e,r){if(e!==null)throw new v(`'${w(e)}' is not nul.`,r)},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new v(`'${w(e)}' is not a number.`,r)},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new v(`'${w(e)}' is not a non-null object.`,r)},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new v(`'${w(e)}' is not a plain object.`,r)},isString(e,r){if(typeof e!="string")throw new v(`'${w(e)}' is not a string.`,r)},isSymbol(e,r){if(typeof e!="symbol")throw new v(`'${w(e)}' is not a symbol.`,r)},isUndefined(e,r){if(typeof e<"u")throw new v(`'${w(e)}' is not a undefined.`,r)},isNotArray(e,r){if(Array.isArray(e))throw new v(`'${w(e)}' is an array.`,r)},isNotBigInt(e,r){if(typeof e=="bigint")throw new v(`'${w(e)}' is a bigint.`,r)},isNotBoolean(e,r){if(typeof e=="boolean")throw new v(`'${w(e)}' is a boolean.`,r)},isNotFunction(e,r){if(typeof e=="function")throw new v(`'${w(e)}' is a function.`,r)},isNotNull(e,r){if(e===null)throw new v(`'${w(e)}' is a null.`,r)},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new v(`'${w(e)}' is a number.`,r)},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new v(`'${w(e)}' is a non-null object.`,r)},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new v(`'${w(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new v(`'${w(e)}' is a string.`,r)},isNotSymbol(e,r){if(typeof e=="symbol")throw new v(`'${w(e)}' is a symbol.`,r)},isNotUndefined(e,r){if(typeof e>"u")throw new v(`'${w(e)}' is a undefined.`,r)}},C2={assert:lr,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const r=Object.getPrototypeOf(e);return(r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const r=Object.getPrototypeOf(e);return!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,r){if(!Array.isArray(e))throw new v(`'${w(e)}' is not an array.`,r);return e},isBigInt(e,r){if(typeof e!="bigint")throw new v(`'${w(e)}' is not a bigint.`,r);return e},isBoolean(e,r){if(typeof e!="boolean")throw new v(`'${w(e)}' is not a boolean.`,r);return e},isFunction(e,r){if(typeof e!="function")throw new v(`'${w(e)}' is not a function.`,r);return e},isNull(e,r){if(e!==null)throw new v(`'${w(e)}' is not nul.`,r);return e},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new v(`'${w(e)}' is not a number.`,r);return e},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new v(`'${w(e)}' is not a non-null object.`,r);return e},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new v(`'${w(e)}' is not a plain object.`,r);return e},isString(e,r){if(typeof e!="string")throw new v(`'${w(e)}' is not a string.`,r);return e},isSymbol(e,r){if(typeof e!="symbol")throw new v(`'${w(e)}' is not a symbol.`,r);return e},isUndefined(e,r){if(typeof e<"u")throw new v(`'${w(e)}' is not a undefined.`,r);return e},isNotArray(e,r){if(Array.isArray(e))throw new v(`'${w(e)}' is an array.`,r);return e},isNotBigInt(e,r){if(typeof e=="bigint")throw new v(`'${w(e)}' is a bigint.`,r);return e},isNotBoolean(e,r){if(typeof e=="boolean")throw new v(`'${w(e)}' is a boolean.`,r);return e},isNotFunction(e,r){if(typeof e=="function")throw new v(`'${w(e)}' is a function.`,r);return e},isNotNull(e,r){if(e===null)throw new v(`'${w(e)}' is a null.`,r);return e},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new v(`'${w(e)}' is a number.`,r);return e},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new v(`'${w(e)}' is a non-null object.`,r);return e},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new v(`'${w(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new v(`'${w(e)}' is a string.`,r);return e},isNotSymbol(e,r){if(typeof e=="symbol")throw new v(`'${w(e)}' is a symbol.`,r);return e},isNotUndefined(e,r){if(typeof e>"u")throw new v(`'${w(e)}' is a undefined.`,r);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const r=Object.getPrototypeOf(e);if((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const r=Object.getPrototypeOf(e);if(!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:R(lr.isArray),isBigInt:R(lr.isBigInt),isBoolean:R(lr.isBoolean),isFunction:R(lr.isFunction),isNull:R(lr.isNull),isNumber:R(lr.isNumber),isObject:R(lr.isObject),isPlainObject:R(lr.isPlainObject),isString:R(lr.isString),isSymbol:R(lr.isSymbol),isUndefined:R(lr.isUndefined),isNotArray:R(lr.isNotArray),isNotBigInt:R(lr.isNotBigInt),isNotBoolean:R(lr.isNotBoolean),isNotFunction:R(lr.isNotFunction),isNotNull:R(lr.isNotNull),isNotNumber:R(lr.isNotNumber),isNotObject:R(lr.isNotObject),isNotPlainObject:R(lr.isNotPlainObject),isNotString:R(lr.isNotString),isNotSymbol:R(lr.isNotSymbol),isNotUndefined:R(lr.isNotUndefined)}};var Nt;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Nt||(Nt={}));function qh(e,r,t){Wh(e,{noError:"No error.",notInstance:`'${w(e)}' is not an error instance.`},r,t)}i(qh,"isError");function zp(e,r,t){Wh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${w(e)}' is not an error instance.`},r,t)}i(zp,"assertThrownError");function Wh(e,r,t,n){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor)){const o=e.constructor.name;throw new v(`Error constructor '${o}' did not match expected constructor '${t.matchConstructor.name}'.`,n)}else if(t?.matchMessage){const o=Jr(e);if(typeof t.matchMessage=="string"){if(!e2(o,t.matchMessage))throw new v(`Error message

'${o}'

does not contain

'${t.matchMessage}'.`,n)}else if(!o.match(t.matchMessage))throw new v(`Error message

'${o}'

does not match RegExp

'${t.matchMessage}'.`,n)}}else throw new v(r.notInstance,n);else throw new v(r.noError,n)}i(Wh,"internalAssertError");function Vp(e,r){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor))return!1;if(r?.matchMessage){const t=Jr(e);if(typeof r.matchMessage=="string"){if(!e2(t,r.matchMessage))return!1}else if(!t.match(r.matchMessage))return!1}}else return!1;else return!1;return!0}i(Vp,"internalCheckError");function Gc(e,r,t,n){let o;try{const s=r instanceof Promise?r:r();if(s instanceof Promise)return new Promise(async(a,l)=>{try{await s}catch(u){o=wr(u)}try{zp(o,t,n),e===Nt.Assert?a():e===Nt.Check?a(!0):a(o)}catch(u){e===Nt.CheckWrap?a(void 0):e===Nt.Check?a(!1):l(wr(u))}})}catch(s){o=wr(s)}try{return zp(o,t,n),e===Nt.Check?!0:e!==Nt.Assert?o:void 0}catch(s){if(e===Nt.CheckWrap)return;if(e===Nt.Check)return!1;throw s}}i(Gc,"internalThrowsCheck");function X3(e,r,t){return Gc(Nt.Assert,e,r,t)}i(X3,"throws");function Q3(e,r){return Gc(Nt.Check,e,r)}i(Q3,"throwsCheck");function e6(e,r,t){return Gc(Nt.AssertWrap,e,r,t)}i(e6,"throwsAssertWrap");function r6(e,r,t){return Gc(Nt.CheckWrap,e,r,t)}i(r6,"throwsCheckWrap");const t6=R(qh);function n6(e,r,t,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,s=o?r:e,a=typeof t=="object"?n:t,l=typeof t=="object"?t:r;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${w(s)}'`);return t6(o,async()=>{try{await s();return}catch(u){return wr(u)}},l,a)}i(n6,"throwsWaitUntil");const o6={throws:X3,isError:qh},E2={assert:o6,check:{throws:Q3,isError(e,r){return Vp(e,r)}},assertWrap:{throws:e6,isError(e,r,t){return Wh(e,{noError:"No error.",notInstance:`'${w(e)}' is not an error instance.`},r,t),e}},checkWrap:{throws:r6,isError(e,r){if(Vp(e,r))return e}},waitUntil:{throws:n6,isError:R(qh)}},Uo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,yf={isUuid(e,r){if(!String(e).match(Uo))throw new v(`'${String(e)}' is not a UUID.`,r)},isNotUuid(e,r){if(String(e).match(Uo))throw new v(`'${String(e)}' is a UUID.`,r)}},A2={assert:yf,check:{isUuid(e){return!!String(e).match(Uo)},isNotUuid(e){return!String(e).match(Uo)}},assertWrap:{isUuid(e,r){if(!String(e).match(Uo))throw new v(`'${String(e)}' is not a UUID.`,r);return e},isNotUuid(e,r){if(String(e).match(Uo))throw new v(`'${String(e)}' is a UUID.`,r);return e}},checkWrap:{isUuid(e){if(String(e).match(Uo))return e},isNotUuid(e){if(!String(e).match(Uo))return e}},waitUntil:{isUuid:R(yf.isUuid),isNotUuid:R(yf.isNotUuid)}},i6={...v2.assert,...t2.assert,...n2.assert,...i2.assert,...o2.assert,...g2.assert,...m2.assert,...s2.assert,...p2.assert,...b2.assert,...y2.assert,...w2.assert,...$2.assert,...k2.assert,...x2.assert,...D2.assert,...C2.assert,...f2.assert,...E2.assert,...A2.assert,...h2.assert},Kh=[t2,n2,i2,o2,g2,m2,s2,p2,b2,v2,y2,w2,$2,k2,x2,D2,C2,f2,E2,A2,h2],s6=Object.assign({},...Kh.map(e=>e.check)),F=Object.assign(i(function(r){return!!r},"check"),s6);function a6(e,r,t){return Wu(e,r,t,new Set)}i(a6,"checkCustomDeepQuality");function Wu(e,r,t,n){if(e=qp(e),r=qp(r),F.isObject(e)&&F.isObject(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),!Wu(ze(e).sort(),ze(r).sort(),t,n))return!1;let o=!1;const s=ze(e).map(a=>{const l=Wu(e[a],r[a],t,n);return F.isPromise(l)&&(o=!0),l});return Wp(o,s)}else if(F.isArray(e)&&F.isArray(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),e.length!==r.length)return!1;let o=!1;const s=e.map((a,l)=>{const u=Wu(a,r[l],t,n);return F.isPromise(u)&&(o=!0),u});return Wp(o,s)}else return t(e,r)}i(Wu,"recursiveCheckCustomDeepQuality");function qp(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}i(qp,"flattenComplexObject");function Wp(e,r){return e?new Promise(async(t,n)=>{try{const o=await Promise.all(r);t(o.every(F.isTrue))}catch(o){n(wr(o))}}):r.every(F.isTrue)}i(Wp,"handleMaybePromise");const l6=Object.assign({},...Kh.map(e=>e.assertWrap)),vr=Object.assign(i(function(r,t){if(!r)throw new v("Assertion failed.",t);return r},"assertWrap"),l6);function u6(e){return{equals:i(()=>{},"equals"),notEquals:i(()=>{},"notEquals"),matches:i(()=>{},"matches"),notMatches:i(()=>{},"notMatches"),slowEquals:i(()=>{},"slowEquals")}}i(u6,"tsType");const c6={tsType:u6},d6={assert:c6},f6={fail:i(e=>{throw new v("Failure triggered.",e)},"fail")},h6={...d6.assert,...i6,...f6},_r=Object.assign(i(function(r,t){if(!r)throw new v("Assertion failed.",t)},"assert"),h6),g6=Object.assign({},...Kh.map(e=>e.checkWrap)),Gh=Object.assign(i(function(r){if(r)return r},"checkWrap"),g6);function m6(e,r){return F.hasKey(e,"entryType")&&e.entryType===r}i(m6,"isBookEntry");function xi(e,r){return e.controlType===r}i(xi,"isControlInitType");var fe;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(fe||(fe={}));const M2=Symbol("any-type"),p6={[fe.Checkbox]:!1,[fe.Color]:"",[fe.Custom]:void 0,[fe.Dropdown]:"",[fe.Hidden]:M2,[fe.Number]:0,[fe.Text]:""};function b6(e,r){if(!e)return[];const t=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===fe.Custom)return;const s=p6[o.controlType];s!==M2&&(typeof s!=typeof o.initValue&&t.push(new Error(`Control '${n}' in page '${r}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof s} because the control is of type ${o.controlType}.`)),n||t.push(new Error(`'${r}' cannot have an empty control name.`)))}),t}i(b6,"checkControls");function v6(e,r,t){const n=r;if(e.has(n))return e.get(n);{const o=t();return F.isPromise(o)?new Promise(async(s,a)=>{try{const l=await o;e.set(n,l),s(l)}catch(l){a(wr(l))}}):(e.set(n,o),o)}}i(v6,"getOrSetFromMap");function Qi(e,r,t){if(r in e)return e[r];{const n=t();return F.isPromise(n)?new Promise(async(o,s)=>{try{const a=await n;e[r]=a,o(a)}catch(a){s(wr(a))}}):(e[r]=n,n)}}i(Qi,"getOrSet");function Pn(e){return ze(e).map(r=>[r,e[r]])}i(Pn,"getObjectTypedEntries");function hl(e){return Object.fromEntries(e)}i(hl,"typedObjectFromEntries");function yn(e,r,t){return e.reduce((n,o,s,a)=>{const l=r(o,s,a);return t(l,o,s,a)&&n.push(l),n},[])}i(yn,"filterMap");function y6(e,r,t={}){return e.reduce((n,o,s,a)=>{const l=r(o,s,a);return Qi(n,l,()=>[]).push(o),n},{})}i(y6,"groupArrayBy");function Qo(e,r,t={}){try{let n=!1;const o=e.map((s,a,l)=>{const u=r(s,a,l);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(F.isTruthy);return n?new Promise(async(s,a)=>{try{const l=yn(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},F.isTruthy);s(hl(l))}catch(l){a(wr(l))}}):hl(o)}catch(n){throw wr(n)}}i(Qo,"arrayToObject");function w6(e,r){const t=[];let n=!1;for(let o=0;o<e;o++){const s=r(o);F.isPromise(s)&&(n=!0),t.push(s)}return n?Promise.all(t):t}i(w6,"createArray");function $6(e){return Array.isArray(e)?e:[e]}i($6,"ensureArray");function k6({min:e,max:r}){const{min:t,max:n}=Ih({min:Math.floor(e),max:Math.floor(r)}),o=n-t+1,s=Math.ceil(Math.log2(o)),a=Math.ceil(s/8);if(a>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${t}, max: ${n}})`);const l=Math.floor(256**a/o)*o,u=new Uint8Array(a);let d;do crypto.getRandomValues(u),d=u.reduce((f,h,g)=>f+h*256**g,0);while(d>=l);return t+d%o}i(k6,"randomInteger");const Kp=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function Ii(e=16){let r="";for(let t=0;t<e;t++){const n=k6({min:0,max:Kp.length-1});r+=Kp[n]}return r}i(Ii,"randomString");function F2(e){if(F.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(r=>Jr(r).trim()).join(`
`))}i(F2,"combineErrors");function S2(e,r={}){try{const t=e();return t instanceof Promise?t.catch(n=>r.handleError?r.handleError(n):F.hasKey(r,"fallbackValue")?r.fallbackValue:wr(n)):t}catch(t){return r.handleError?r.handleError(t):F.hasKey(r,"fallbackValue")?r.fallbackValue:wr(t)}}i(S2,"wrapInTry");function An(e){try{return JSON.parse(JSON.stringify(e))}catch(r){throw console.error("Failed to JSON copy for:",e),Ji(r,"Failed JSON copy")}}i(An,"copyThroughJson");const x6="modulepreload",D6=i(function(e){return"/vira/book/"+e},"assetsURL"),Gp={},gl=i(function(r,t,n){let o=Promise.resolve();if(t&&t.length>0){let u=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};i(u,"allSettled"),document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");o=u(t.map(d=>{if(d=D6(d),d in Gp)return;Gp[d]=!0;const f=d.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":x6,f||(g.as="script"),g.crossOrigin="",g.href=d,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((m,y)=>{g.addEventListener("load",m),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i(s,"handlePreloadError"),o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return r().catch(s)})},"preload");var Lr;(function(e){e.Standard="stdout",e.Error="stderr"})(Lr||(Lr={}));var pe;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(pe||(pe={}));async function C6(){return await Gv({async[Tn.Node](){const e=(await gl(async()=>{const{default:r}=await import("./index-aeZXflCI.js");return{default:r}},[])).default;return{[pe.Bold]:e.bold.open,[pe.Debug]:e.blueBright.open,[pe.Error]:e.red.open,[pe.Faint]:e.gray.open,[pe.Info]:e.cyan.open,[pe.Mutate]:e.magenta.open,[pe.NormalWeight]:"\x1B[22m",[pe.Plain]:"",[pe.Reset]:e.reset.open,[pe.Success]:e.green.open,[pe.Warning]:e.yellow.open}},[Tn.Web](){return Promise.resolve({[pe.Bold]:"font-weight: bold",[pe.Debug]:"color: blue",[pe.Error]:"color: red",[pe.Faint]:"color: grey",[pe.Info]:"color: teal",[pe.Mutate]:"color: magenta",[pe.NormalWeight]:"",[pe.Plain]:"",[pe.Reset]:"",[pe.Success]:"color: green",[pe.Warning]:"color: orange"})}})}i(C6,"determineDefaultLogColors");const Ut=await C6(),E6={[pe.Bold]:{colors:[Ut.bold],logType:Lr.Standard},[pe.Debug]:{colors:[Ut.debug],logType:Lr.Standard},[pe.Faint]:{colors:[Ut.faint],logType:Lr.Standard},[pe.Info]:{colors:[Ut.info],logType:Lr.Standard},[pe.Mutate]:{colors:[Ut.mutate,Ut.bold],logType:Lr.Standard},[pe.NormalWeight]:{colors:[Ut.normalWeight],logType:Lr.Standard},[pe.Plain]:{colors:[],logType:Lr.Standard},[pe.Reset]:{colors:[Ut.reset],logType:Lr.Standard},[pe.Success]:{colors:[Ut.success,Ut.bold],logType:Lr.Standard},[pe.Error]:{colors:[Ut.error,Ut.bold],logType:Lr.Error},[pe.Warning]:{colors:[Ut.warning],logType:Lr.Error}};function Dt({value:e,prefix:r}){return String(e).startsWith(r)?String(e):`${r}${String(e)}`}i(Dt,"addPrefix");function Oi({value:e,prefix:r}){return e.startsWith(r)?e.slice(r.length):e}i(Oi,"removePrefix");function T2(e,r){try{let t=!1;const n=Pn(e).map(([o,s])=>{const a=r(o,s,e);return a instanceof Promise?(t=!0,a):a?[a.key,a.value]:void 0}).filter(F.isTruthy);return t?new Promise(async(o,s)=>{try{const a=yn(await Promise.all(n),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},F.isTruthy);o(hl(a))}catch(a){s(wr(a))}}):hl(n)}catch(t){throw wr(t)}}i(T2,"mapObject");function N2(e,r){return T2(e,(t,n)=>{const o=n,s=r(n,e);return s instanceof Promise?s.then(a=>({key:o,value:a})):{key:o,value:s}})}i(N2,"mapEnumToObject");function P2(e,...r){const t={...e};return r.forEach(n=>{n&&Pn(n).forEach(([o,s])=>{s!=null&&(t[o]=s)})}),t}i(P2,"mergeDefinedProperties");function A6(e){return e.replace(/,/g,"")}i(A6,"removeCommas");function M6(e){return typeof e=="number"?e:Number(typeof e=="string"?A6(e):e)}i(M6,"toNumber");function F6(e){const r=S6(e);if(r==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return r}i(F6,"toEnsuredNumber");function S6(e){const r=M6(e);if(!isNaN(r))return r}i(S6,"toMaybeNumber");const I2="px";function Us(e){return Hh({value:e,suffix:I2})}i(Us,"addPx");function T6(e){return F6(Zh({value:e,suffix:I2}))}i(T6,"removePx");function Hh({value:e,suffix:r}){return String(e).endsWith(r)?String(e):`${String(e)}${r}`}i(Hh,"addSuffix");function Zh({value:e,suffix:r}){return e.endsWith(r)?e.slice(0,Math.max(0,e.length-r.length)):e}i(Zh,"removeSuffix");async function N6(){return await Gv({async[Tn.Node](){const{inspect:e}=await gl(async()=>{const{inspect:r}=await import("node:util");return{inspect:r}},[]);return({args:r,colorKey:t,options:n})=>{const o=r.map(l=>typeof l=="string"?l:e(l));return{text:[n.omitColors?"":n.colorConfig[t].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[pe.Reset].colors.join("")].join(""),css:void 0}}},[Tn.Web](){return({args:e,colorKey:r,options:t})=>{const n=t.omitColors?void 0:yn(t.colorConfig[r].colors,a=>Zh({value:a,suffix:";"}),F.isTruthy).join("; ");return{text:[e.map(a=>typeof a=="string"?a:a instanceof Error?Jr(a):w(a)).join(`
`),t.omitColors?"":t.colorConfig[pe.Reset].colors.join("")].join(""),css:n}}}})}i(N6,"createToLogString");const P6=await N6(),I6={colorConfig:E6,omitColors:!1},O6=O2({[Lr.Error](){},[Lr.Standard](){}});function O2(e,r){const t=P2(I6,r);function n(s){e[t.colorConfig[s.colorKey].logType](P6({...s,options:t}))}i(n,"writeLog");const o=N2(pe,s=>(...a)=>n({args:a,colorKey:s}));return{...o,if(s){return s?o:O6}}}i(O2,"createLogger");const B6=Ph(Tn.Node)?{[Lr.Error]({text:e}){process.stderr.write(e+`
`)},[Lr.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[Lr.Error]({text:e,css:r}){console.error(Dt({value:e,prefix:"%c"}),r)},[Lr.Standard]({text:e,css:r}){console.log(Dt({value:e,prefix:"%c"}),r)}},B2=O2(B6);function R6(e,{min:r,max:t}){return Math.min(Math.max(e,r),t)}i(R6,"clamp$2");function R2(e,{digits:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(R2,"round");function L6({searchIn:e,searchFor:r,caseSensitive:t,includeLength:n}){const o=Jy(Qy(r,{caseSensitive:t}),"g"),s=[];return e.replace(o,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new TypeError(`Match index "${l}" is not a number. Searching for "${r}" in "${e}".`);const u=a[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);s.push({index:l,length:u.length});const d=a[0];if(typeof d!="string")throw new TypeError(`Original match when searching for "${r}" in "${e}" at index ${l} is not a string.`);return d}),s}i(L6,"findSubstringIndexes");function j6(e,r,{caseSensitive:t}){const n=L6({searchIn:e,searchFor:r,caseSensitive:t,includeLength:!0}),o=Qy(r,{caseSensitive:t});return e.split(o).reduce((a,l,u)=>{const d=n[u],f=a.concat(l);if(d){const h=e.slice(d.index,d.index+d.length);return f.concat(h)}else return f},[])}i(j6,"splitIncludeSplit");function _6(e,r){return e.split(r)}i(_6,"safeSplit");function Hp(e,r){const{min:t,max:n}=Ih(r);if(r.takeOverflow){const o=n-t+1,s=(e-t)%o;return s<0?t+o+s:t+s}else return e>n?t:e<t?n:e}i(Hp,"wrapNumber");function ar(e,r){let t=!1;const n=ze(e).reduce((o,s)=>{const a=r(s,e[s],e);return a instanceof Promise&&(t=!0),o[s]=a,o},{});return t?new Promise(async(o,s)=>{try{await Promise.all(ze(n).map(async a=>{const l=await n[a];n[a]=l})),o(n)}catch(a){s(wr(a))}}):n}i(ar,"mapObjectValues");function Hc(e,r){const t=Pn(e).filter(([n,o])=>r(n,o,e));return hl(t)}i(Hc,"filterObject");function U6(e,r){return Hc(e,t=>r.includes(t))}i(U6,"pickObjectKeys");function zs(e){return ze(e).map(r=>e[r])}i(zs,"getObjectTypedValues");function L2(e,{keepNewLines:r}={}){return r?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}i(L2,"collapseWhiteSpace");var ml;(function(e){e.Upper="upper",e.Lower="lower"})(ml||(ml={}));const z6={firstLetterCase:ml.Lower};function V6(e,r){if(!e.length)return"";const t=e[0];return(r===ml.Upper?t.toUpperCase():t.toLowerCase())+e.slice(1)}i(V6,"setFirstLetterCasing");function q6(e,r={}){const t=e.toLowerCase();if(!t.length)return"";const n=t.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const a=s[1];return a?a.toUpperCase():""}),o=P2(z6,r);return V6(n,o.firstLetterCase)}i(q6,"kebabCaseToCamelCase");function W6(e,r="and"){if(e.length<2)return e.join("");const t=e.length>2?", ":" ";return`${e.slice(0,-1).join(t)}${t}${r} ${e[e.length-1]}`}i(W6,"joinWithFinalConjunction");function K6({value:e,wrapper:r}){return Dt({value:Hh({value:e,suffix:r}),prefix:r})}i(K6,"wrapString");function _n(){function e(r){return class extends CustomEvent{static{i(this,"TypedEventConstructor")}static type=r;constructor(n){super(r,n)}}}return i(e,"defineEventTypeString"),e}i(_n,"defineTypedCustomEvent");function Yh(e,r){const t=r??Event;return class extends t{static{i(this,"TypedEventConstructor")}static type=e;constructor(o){super(e,o)}}}i(Yh,"defineTypedEvent$1");class G6{static{i(this,"TypedListenTarget")}listeners={};universalListeners=new Map;getListenerCount(){return zs(this.listeners).map(t=>t.size||0).reduce((t,n)=>t+n,0)+this.universalListeners.size}listenToAll(r,t={}){const n=i(()=>this.universalListeners.delete(r)||!1,"removeListener");function o(s,a){t.once&&n(),r(s,a)}return i(o,"wrappedCallback"),this.universalListeners.set(r,{listener:o,removeListener:n}),n}removeUniversalListener(r){return!!this.universalListeners.get(r)?.removeListener()}listen(r,t,n={}){const o=F.isString(r)?r:r.type,s=i(()=>this.listeners[o]?.delete(t)||!1,"removeListener");function a(l,u){n.once&&s(),t(l,u)}return i(a,"wrappedCallback"),Qi(this.listeners,o,()=>new Map).set(t,{listener:a,removeListener:s}),s}removeListener(r,t){const n=F.isString(r)?r:r.type,o=this.listeners[n];if(!o)return!1;const s=o.get(t);return s?s.removeListener():!1}dispatch(r){const t=this.listeners[r.type];r.target==null&&Object.defineProperty(r,"target",{writable:!1,value:this});const n=t?.size||0;return t?.forEach(o=>{o.listener(r,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(r,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const t=zs(this.listeners).reduce((n,o)=>{const s=o.size||0;return o.clear(),n+s},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),t}destroy(){this.removeAllListeners()}}class Jh extends G6{static{i(this,"ListenTarget")}}function $o(e,r,t,n){return e.addEventListener(r,t,n),()=>e.removeEventListener(r,t,n)}i($o,"listenTo");function _0(e,r,t){return $o(globalThis,e,r,t)}i(_0,"listenToGlobal");function Xh(e,r){return pl(e.title),e.parent?[...Xh(e.parent),pl(e.parent.title)].concat([]):[]}i(Xh,"listUrlBreadcrumbs");function pl(e){return L2(e).toLowerCase().replaceAll(/\s/g,"-")}i(pl,"titleToUrlBreadcrumb");function H6({searchFor:e,searchIn:r}){return e.every((t,n)=>r[n]===t)}i(H6,"doBreadcrumbsStartWith");const Z6=/[/?#&=]/;function j2(e){const r=e.match(Z6);return e.trim()?pl(e)?r?new Error(`Book page title has invalid character '${r[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}i(j2,"getPageTitleError");const Y6={[nt.ElementExample]:()=>[],[nt.Page]:e=>[j2(e.title),...b6(e.controls,e.title)].filter(F.isTruthy),[nt.Root]:()=>[]},uc="_isBookTreeNode",_2=new Map;function J6(e){return _2.get(e)}i(J6,"getTreeFromCache");function X6(e,r){v6(_2,e,()=>r)}i(X6,"addTreeToCache");function Ps(e,r){return U2(e)&&e.entry.entryType===r}i(Ps,"isBookTreeNode");function U2(e){return!!(F.hasKeys(e,[uc,"entry"])&&e[uc])}i(U2,"isAnyBookTreeNode");function Q6(){return{[uc]:!0,entry:{entryType:nt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}i(Q6,"createEmptyBookTreeRoot");function eD({entries:e,debug:r}){const t=J6(e);if(t)return t;const n=Q6();e.forEach(a=>Qh({tree:n,newEntry:a,debug:r,manuallyAdded:!0}));const o=z2(n),s={tree:n,flattenedNodes:o};return X6(e,s),r&&console.info("element-book tree:",n),s}i(eD,"createBookTreeFromEntries");function rD(e,r,t){if(!r.parent)return e;const n=U0(r,e);if(n)return n;t&&console.info(`parent of ${r.title} not found in tree; adding it now.`),Qh({tree:e,newEntry:r.parent,debug:t,manuallyAdded:!1});const o=U0(r,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Xh(r).join(" > ")}`);return o}i(rD,"getOrAddImmediateParent");function Qh({tree:e,newEntry:r,debug:t,manuallyAdded:n}){const o=Y6[r.entryType](r);r.errors.push(...o);const s=rD(e,r,t),a=pl(r.title),l=s.children[a];if(l){if(n){if(l.manuallyAdded){l.entry.errors.push(new Error(`Cannot create duplicate '${a}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}l.manuallyAdded=!0}return}const u={[uc]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,a],entry:r,manuallyAdded:n};s.children[a]=u,m6(r,nt.Page)&&Object.values(r.elementExamples).length&&Object.values(r.elementExamples).forEach(d=>Qh({tree:e,newEntry:d,debug:t,manuallyAdded:n}))}i(Qh,"addEntryToTree");function U0(e,r){const t=U2(e)?e.fullUrlBreadcrumbs.slice(0,-1):Xh(e);return t.length?t.reduce((o,s)=>{if(o)return o.children[s]},r):void 0}i(U0,"traverseToImmediateParent");function z2(e){const t=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>z2(o));return[e,...t].flat()}i(z2,"flattenTree");function eg(e,r){return rg(e,["",...r],void 0)}i(eg,"traverseControls");function rg(e,r,t){const n=r.slice(1),o=n[0];!o&&t&&(e.controls=t);const s=e.children[o||""],a=s&&rg(s,n,t);return{...e.controls,...a}}i(rg,"traverseAndInsertNewControls");function tD(e,r,t){const n={...e};return rg(n,["",...r],t),n}i(tD,"createNewControls");function V2(e,r){const t=r?.controls||(Ps(e,nt.Page)?ar(e.entry.controls,(o,s)=>s.initValue):{});return{children:ar(e.children,(o,s)=>V2(s,r?.children?.[s.urlBreadcrumb])),controls:t}}i(V2,"updateTreeControls");function De(e){const r={...e,entryType:nt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},t=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:r.useVerticalExamples,entryType:nt.ElementExample,parent:r,descriptionParagraphs:n.descriptionParagraphs??[],errors:[t.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),j2(n.title)].filter(F.isTruthy)};t.add(n.title),r.elementExamples[pl(o.title)]=o}}),r}i(De,"defineBookPage");var Pt;(function(e){e.Search="search",e.Book="book"})(Pt||(Pt={}));function q2(e){return e[0]===Pt.Book?"":e[1]?decodeURIComponent(e[1]):""}i(q2,"extractSearchQuery");const Vs={hash:void 0,paths:[Pt.Book],search:void 0};class cc{static{i(this,"CssPropertyRegistry")}static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const r=cc.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;r&&(globalThis.CSS.registerProperty=t=>(W2.registry.set(t.name,t),r(t)))}canRegisterCssProperty(r){return cc.cssPropertyDefinitionSupported&&!this.registry.has(r)}registerProperty(r){if(!this.canRegisterCssProperty(r.name))return!1;try{return globalThis.CSS.registerProperty(r),!0}catch(t){throw Ji(t,`Failed to define CSS var: ${w(r,4)}

`)}}}const W2=new cc;const Ku=globalThis,tg=Ku.ShadowRoot&&(Ku.ShadyCSS===void 0||Ku.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ng=Symbol(),Zp=new WeakMap;let qo=class{static{i(this,"n")}constructor(r,t,n){if(this._$cssResult$=!0,n!==ng)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o;const t=this.t;if(tg&&r===void 0){const n=t!==void 0&&t.length===1;n&&(r=Zp.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),n&&Zp.set(t,r))}return r}toString(){return this.cssText}};const Ae=i(e=>new qo(typeof e=="string"?e:e+"",void 0,ng),"r$3"),K2=i((e,...r)=>{const t=e.length===1?e[0]:r.reduce((n,o,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new qo(t,e,ng)},"i$5"),nD=i((e,r)=>{if(tg)e.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of r){const n=document.createElement("style"),o=Ku.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,e.appendChild(n)}},"S$1"),Yp=tg?e=>e:e=>e instanceof CSSStyleSheet?(r=>{let t="";for(const n of r.cssRules)t+=n.cssText;return Ae(t)})(e):e;const{is:oD,defineProperty:iD,getOwnPropertyDescriptor:sD,getOwnPropertyNames:aD,getOwnPropertySymbols:lD,getPrototypeOf:uD}=Object,Zc=globalThis,Jp=Zc.trustedTypes,cD=Jp?Jp.emptyScript:"",dD=Zc.reactiveElementPolyfillSupport,nl=i((e,r)=>e,"d$2"),dc={toAttribute(e,r){switch(r){case Boolean:e=e?cD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,r){let t=e;switch(r){case Boolean:t=e!==null;break;case Number:t=e===null?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch{t=null}}return t}},og=i((e,r)=>!oD(e,r),"f$3"),Xp={attribute:!0,type:String,converter:dc,reflect:!1,useDefault:!1,hasChanged:og};Symbol.metadata??=Symbol("metadata"),Zc.litPropertyMetadata??=new WeakMap;let ks=class extends HTMLElement{static{i(this,"y")}static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,t=Xp){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(r,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(r,n,t);o!==void 0&&iD(this.prototype,r,o)}}static getPropertyDescriptor(r,t,n){const{get:o,set:s}=sD(this.prototype,r)??{get(){return this[t]},set(a){this[t]=a}};return{get:o,set(a){const l=o?.call(this);s?.call(this,a),this.requestUpdate(r,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Xp}static _$Ei(){if(this.hasOwnProperty(nl("elementProperties")))return;const r=uD(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(nl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(nl("properties"))){const t=this.properties,n=[...aD(t),...lD(t)];for(const o of n)this.createProperty(o,t[o])}const r=this[Symbol.metadata];if(r!==null){const t=litPropertyMetadata.get(r);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const t=[];if(Array.isArray(r)){const n=new Set(r.flat(1/0).reverse());for(const o of n)t.unshift(Yp(o))}else r!==void 0&&t.push(Yp(r));return t}static _$Eu(r,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(r.set(n,this[n]),delete this[n]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nD(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,t,n){this._$AK(r,n)}_$ET(r,t){const n=this.constructor.elementProperties.get(r),o=this.constructor._$Eu(r,n);if(o!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:dc).toAttribute(t,n.type);this._$Em=r,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(r,t){const n=this.constructor,o=n._$Eh.get(r);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:dc;this._$Em=o;const l=a.fromAttribute(t,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(r,t,n,o=!1,s){if(r!==void 0){const a=this.constructor;if(o===!1&&(s=this[r]),n??=a.getPropertyOptions(r),!((n.hasChanged??og)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(r)&&!this.hasAttribute(a._$Eu(r,n))))return;this.C(r,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,t,{useDefault:n,reflect:o,wrapped:s},a){n&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,a??t??this[r]),s!==!0||a!==void 0)||(this._$AL.has(r)||(this.hasUpdated||n||(t=void 0),this._$AL.set(r,t)),o===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n){const{wrapped:a}=s,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let r=!1;const t=this._$AL;try{r=this.shouldUpdate(t),r?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw r=!1,this._$EM(),n}r&&this._$AE(t)}willUpdate(r){}_$AE(r){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(r){}firstUpdated(r){}};ks.elementStyles=[],ks.shadowRootOptions={mode:"open"},ks[nl("elementProperties")]=new Map,ks[nl("finalized")]=new Map,dD?.({ReactiveElement:ks}),(Zc.reactiveElementVersions??=[]).push("2.1.2");const ig=globalThis,Qp=i(e=>e,"i$3"),fc=ig.trustedTypes,eb=fc?fc.createPolicy("lit-html",{createHTML:i(e=>e,"createHTML")}):void 0,G2="$lit$",Vo=`lit$${Math.random().toFixed(9).slice(2)}$`,H2="?"+Vo,fD=`<${H2}>`,zi=document,bl=i(()=>zi.createComment(""),"c$3"),vl=i(e=>e===null||typeof e!="object"&&typeof e!="function","a$1"),sg=Array.isArray,hD=i(e=>sg(e)||typeof e?.[Symbol.iterator]=="function","d$1"),wf=`[ 	
\f\r]`,Ia=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rb=/-->/g,tb=/>/g,Di=RegExp(`>|${wf}(?:([^\\s"'>=/]+)(${wf}*=${wf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nb=/'/g,ob=/"/g,Z2=/^(?:script|style|textarea|title)$/i,gD=i(e=>(r,...t)=>({_$litType$:e,strings:r,values:t}),"x"),mD=gD(1),Yt=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),ib=new WeakMap,Ti=zi.createTreeWalker(zi,129);function Y2(e,r){if(!sg(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return eb!==void 0?eb.createHTML(r):r}i(Y2,"V");const pD=i((e,r)=>{const t=e.length-1,n=[];let o,s=r===2?"<svg>":r===3?"<math>":"",a=Ia;for(let l=0;l<t;l++){const u=e[l];let d,f,h=-1,g=0;for(;g<u.length&&(a.lastIndex=g,f=a.exec(u),f!==null);)g=a.lastIndex,a===Ia?f[1]==="!--"?a=rb:f[1]!==void 0?a=tb:f[2]!==void 0?(Z2.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=Di):f[3]!==void 0&&(a=Di):a===Di?f[0]===">"?(a=o??Ia,h=-1):f[1]===void 0?h=-2:(h=a.lastIndex-f[2].length,d=f[1],a=f[3]===void 0?Di:f[3]==='"'?ob:nb):a===ob||a===nb?a=Di:a===rb||a===tb?a=Ia:(a=Di,o=void 0);const m=a===Di&&e[l+1].startsWith("/>")?" ":"";s+=a===Ia?u+fD:h>=0?(n.push(d),u.slice(0,h)+G2+u.slice(h)+Vo+m):u+Vo+(h===-2?l:m)}return[Y2(e,s+(e[t]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),n]},"N");class yl{static{i(this,"S")}constructor({strings:r,_$litType$:t},n){let o;this.parts=[];let s=0,a=0;const l=r.length-1,u=this.parts,[d,f]=pD(r,t);if(this.el=yl.createElement(d,n),Ti.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Ti.nextNode())!==null&&u.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(G2)){const g=f[a++],m=o.getAttribute(h).split(Vo),y=/([.?@])?(.*)/.exec(g);u.push({type:1,index:s,name:y[2],strings:m,ctor:y[1]==="."?vD:y[1]==="?"?yD:y[1]==="@"?wD:Jc}),o.removeAttribute(h)}else h.startsWith(Vo)&&(u.push({type:6,index:s}),o.removeAttribute(h));if(Z2.test(o.tagName)){const h=o.textContent.split(Vo),g=h.length-1;if(g>0){o.textContent=fc?fc.emptyScript:"";for(let m=0;m<g;m++)o.append(h[m],bl()),Ti.nextNode(),u.push({type:2,index:++s});o.append(h[g],bl())}}}else if(o.nodeType===8)if(o.data===H2)u.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Vo,h+1))!==-1;)u.push({type:7,index:s}),h+=Vo.length-1}s++}}static createElement(r,t){const n=zi.createElement("template");return n.innerHTML=r,n}}function qs(e,r,t=e,n){if(r===Yt)return r;let o=n!==void 0?t._$Co?.[n]:t._$Cl;const s=vl(r)?void 0:r._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(r=qs(e,o._$AS(e,r.values),o,n)),r}i(qs,"M$2");class bD{static{i(this,"R")}constructor(r,t){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:t},parts:n}=this._$AD,o=(r?.creationScope??zi).importNode(t,!0);Ti.currentNode=o;let s=Ti.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let d;u.type===2?d=new Yc(s,s.nextSibling,this,r):u.type===1?d=new u.ctor(s,u.name,u.strings,this,r):u.type===6&&(d=new $D(s,this,r)),this._$AV.push(d),u=n[++l]}a!==u?.index&&(s=Ti.nextNode(),a++)}return Ti.currentNode=zi,o}p(r){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(r,n,t),t+=n.strings.length-2):n._$AI(r[t])),t++}}let Yc=class J2{static{i(this,"k")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,t,n,o){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=r,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&r?.nodeType===11&&(r=t.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,t=this){r=qs(this,r,t),vl(r)?r===ee||r==null||r===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):r!==this._$AH&&r!==Yt&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):hD(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==ee&&vl(this._$AH)?this._$AA.nextSibling.data=r:this.T(zi.createTextNode(r)),this._$AH=r}$(r){const{values:t,_$litType$:n}=r,o=typeof n=="number"?this._$AC(r):(n.el===void 0&&(n.el=yl.createElement(Y2(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const s=new bD(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(r){let t=ib.get(r.strings);return t===void 0&&ib.set(r.strings,t=new yl(r)),t}k(r){sg(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const s of r)o===t.length?t.push(n=new J2(this.O(bl()),this.O(bl()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(r=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);r!==this._$AB;){const n=Qp(r).nextSibling;Qp(r).remove(),r=n}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}};class Jc{static{i(this,"H")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,t,n,o,s){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=r,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ee}_$AI(r,t=this,n,o){const s=this.strings;let a=!1;if(s===void 0)r=qs(this,r,t,0),a=!vl(r)||r!==this._$AH&&r!==Yt,a&&(this._$AH=r);else{const l=r;let u,d;for(r=s[0],u=0;u<s.length-1;u++)d=qs(this,l[n+u],t,u),d===Yt&&(d=this._$AH[u]),a||=!vl(d)||d!==this._$AH[u],d===ee?r=ee:r!==ee&&(r+=(d??"")+s[u+1]),this._$AH[u]=d}a&&!o&&this.j(r)}j(r){r===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class vD extends Jc{static{i(this,"I")}constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===ee?void 0:r}}class yD extends Jc{static{i(this,"L")}constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==ee)}}class wD extends Jc{static{i(this,"z")}constructor(r,t,n,o,s){super(r,t,n,o,s),this.type=5}_$AI(r,t=this){if((r=qs(this,r,t,0)??ee)===Yt)return;const n=this._$AH,o=r===ee&&n!==ee||r.capture!==n.capture||r.once!==n.once||r.passive!==n.passive,s=r!==ee&&(n===ee||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class $D{static{i(this,"Z")}constructor(r,t,n){this.element=r,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(r){qs(this,r)}}const kD={I:Yc},xD=ig.litHtmlPolyfillSupport;xD?.(yl,Yc),(ig.litHtmlVersions??=[]).push("3.3.2");const DD=i((e,r,t)=>{const n=t?.renderBefore??r;let o=n._$litPart$;if(o===void 0){const s=t?.renderBefore??null;n._$litPart$=o=new Yc(r.insertBefore(bl(),s),s,void 0,t??{})}return o._$AI(e),o},"D");const ag=globalThis;let ol=class extends ks{static{i(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=DD(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Yt}};ol._$litElement$=!0,ol.finalized=!0,ag.litElementHydrateSupport?.({LitElement:ol});const CD=ag.litElementPolyfillSupport;CD?.({LitElement:ol});(ag.litElementVersions??=[]).push("4.2.2");function lg({onElement:e,toValue:r,forCssVar:t}){e.style.setProperty(String(t.name),String(r))}i(lg,"setCssVarValue");function ED({onElement:e,forCssVar:r,includeCascade:t}){return(t?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(r.name)).trim()}i(ED,"readCssVarValue");var Ws;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(Ws||(Ws={}));var sb;(function(e){e.Space="+",e.Comma="#"})(sb||(sb={}));function eo(e){return ar(e,(t,n)=>{AD(t);const o=n,s=F.isObject(o)&&!(o instanceof qo)&&F.lacksKey(o,"name"),a=F.isString(o)||F.isNumber(o)||o instanceof qo?String(o):String(o.default),l=F.isString(o)||F.isNumber(o)||o instanceof qo?String(o):String("initialValue"in o&&o.initialValue||o.default),u=Ae(Dt({value:t.replace(/^-+/,""),prefix:"--"})),d={name:u,value:K2`var(${u}, ${Ae(a)})`,syntax:F.isString(o)||F.isNumber(o)||o instanceof qo?Ws.Any:z0("syntax"in o?o.syntax:void 0),default:a},f=String(d.name);if(!l)throw new Error(`Initial value for CSS var ${f} cannot be empty.`);return s&&W2.registerProperty({inherits:!0,name:f,initialValue:l,syntax:d.syntax})&&globalThis.document?.documentElement&&lg({forCssVar:d,onElement:globalThis.document.documentElement,toValue:a}),d})}i(eo,"defineCssVars");function AD(e){try{if(F.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(r){throw new Error(Yi("Invalid CSS var name.",r,`Got '${w(e)}'`))}}i(AD,"assertValidCssVarName");function z0(e){return e?F.isString(e)?e:e.union?e.union.map(r=>z0(r)).join(" | "):e.list?`${z0(e.list.values)}${e.list.separator}`:e.raw:Ws.Any}i(z0,"createSyntaxString");const Pe=eo({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),MD={nav:{hover:{background:Pe["element-book-nav-hover-background-color"],foreground:Pe["element-book-nav-hover-foreground-color"]},active:{background:Pe["element-book-nav-active-background-color"],foreground:Pe["element-book-nav-active-foreground-color"]},selected:{background:Pe["element-book-nav-selected-background-color"],foreground:Pe["element-book-nav-selected-foreground-color"]}},accent:{icon:Pe["element-book-accent-icon-color"]},page:{background:Pe["element-book-page-background-color"],backgroundFaint1:Pe["element-book-page-background-faint-level-1-color"],backgroundFaint2:Pe["element-book-page-background-faint-level-2-color"],foreground:Pe["element-book-page-foreground-color"],foregroundFaint1:Pe["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Pe["element-book-page-foreground-faint-level-2-color"]}};function FD(e,r){X2(e,r,MD)}i(FD,"setThemeCssVars");function V0(e){return F.hasKey(e,"_$cssResult$")}i(V0,"isCssResult");function ab(e){return F.hasKeys(e,["name","value","default"])&&F.isString(e.default)&&V0(e.name)&&V0(e.value)}i(ab,"isCssVarDefinition");function X2(e,r,t){Object.entries(r).forEach(([n,o])=>{const s=t[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(V0(o)){if(!ab(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);lg({forCssVar:s,onElement:e,toValue:String(o)})}else{if(ab(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);X2(e,o,s)}})}i(X2,"recursiveSetThemeCssVars");function Ka(e,r){let t=e.length,n,o,s=!1,a=!1;Array.isArray(e[0])?n=e:(n=[e],t=n.length,s=!0),Array.isArray(r[0])?o=r:(o=r.length>0?r.map(f=>[f]):[[]],a=!0);let l=o[0].length,u=o[0].map((f,h)=>o.map(g=>g[h])),d=n.map(f=>u.map(h=>{let g=0;if(!Array.isArray(f)){for(let m of h)g+=f*m;return g}for(let m=0;m<f.length;m++)g+=f[m]*(h[m]||0);return g}));return t===1&&s&&(d=d[0]),l===1&&a?t===1&&s?d[0]:d.map(f=>f[0]):d}i(Ka,"multiplyMatrices");function $f(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]}i($f,"dot3");function yr(e,r,t=[0,0,0]){const n=$f(e,r[0]),o=$f(e,r[1]),s=$f(e,r[2]);return t[0]=n,t[1]=o,t[2]=s,t}i(yr,"multiply_v3_m3x3");function ca(e){return Ho(e)==="string"}i(ca,"isString");function Ho(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}i(Ho,"type");function ug(e,{precision:r=16,unit:t}){return Oe(e)?"none":(e=+cg(e,r),e+(t??""))}i(ug,"serializeNumber");function Oe(e){return e===null}i(Oe,"isNone");function Er(e){return Oe(e)?0:e}i(Er,"skipNone");function cg(e,r){if(e===0)return 0;let t=~~e,n=0;t&&r&&(n=~~Math.log10(Math.abs(t))+1);const o=10**(r-n);return Math.floor(e*o+.5)/o}i(cg,"toPrecision");function wl(e,r,t){return isNaN(e)?r:isNaN(r)?e:e+(r-e)*t}i(wl,"interpolate");function Q2(e,r,t){return(t-e)/(r-e)}i(Q2,"interpolateInv");function q0(e,r,t){return!e||!r||e===r||e[0]===r[0]&&e[1]===r[1]||isNaN(t)||t===null?t:wl(r[0],r[1],Q2(e[0],e[1],t))}i(q0,"mapRange");function Xc(e,r,t){return Math.max(Math.min(t,r),e)}i(Xc,"clamp$1");function Qc(e,r){return Math.sign(e)===Math.sign(r)?e:-e}i(Qc,"copySign");function Ar(e,r){return Qc(Math.abs(e)**r,e)}i(Ar,"spow");function dg(e,r){return r===0?0:e/r}i(dg,"zdiv");function ew(e,r,t=0,n=e.length){for(;t<n;){const o=t+n>>1;e[o]<r?t=o+1:n=o}return t}i(ew,"bisectLeft");function Ks(e,r){if(e instanceof r)return!0;const t=r.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===t)return!0;if(!o||o==="Object")return!1;e=n}return!1}i(Ks,"isInstance");var SD=Object.freeze({__proto__:null,bisectLeft:ew,clamp:Xc,copySign:Qc,interpolate:wl,interpolateInv:Q2,isInstance:Ks,isNone:Oe,isString:ca,mapRange:q0,multiplyMatrices:Ka,multiply_v3_m3x3:yr,serializeNumber:ug,skipNone:Er,spow:Ar,toPrecision:cg,type:Ho,zdiv:dg});class TD{static{i(this,"Hooks")}add(r,t,n){if(typeof arguments[0]!="string"){for(var r in arguments[0])this.add(r,arguments[0][r],arguments[1]);return}(Array.isArray(r)?r:[r]).forEach(function(o){this[o]=this[o]||[],t&&this[o][n?"unshift":"push"](t)},this)}run(r,t){this[r]=this[r]||[],this[r].forEach(function(n){n.call(t&&t.context?t.context:t,t)})}}const ei=new TD;var Jt={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:i(function(r){this.verbose&&globalThis?.console?.warn?.(r)},"warn")};let lb=class{static{i(this,"Type")}type;coordMeta;coordRange;range;constructor(r,t){if(typeof r=="object"&&(this.coordMeta=r),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof r=="string"){let n=r.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${r} as a type definition.`);this.type=n.groups.type;let{min:o,max:s}=n.groups;(o||s)&&(this.range=[+o,+s])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(r){if(this.type==="<angle>")return r;let t=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),q0(t,n,r)}serialize(r,t){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return r=q0(this.coordRange,n,r),ug(r,{unit:o,precision:t})}toString(){let r=this.type;if(this.range){let[t="",n=""]=this.range;r+=`[${t},${n}]`}return r}percentageRange(r=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*r,t[1]*r]}static get(r,t){return Ks(r,this)?r:new this(r,t)}};const kf=Symbol("instance");class hc{static{i(this,"Format")}type;name;spaceCoords;coords;id;alpha;constructor(r,t=r.space){r[kf]=this,this.type="function",this.name="color",Object.assign(this,r),this.space=t,this.type!=="custom"&&(this.spaceCoords=Object.values(t.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let s=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(a=>lb.get(a,s))}))}serializeCoords(r,t,n){return n=r.map((o,s)=>lb.get(n?.[s]??this.coords[s][0],this.spaceCoords[s])),r.map((o,s)=>n[s].serialize(o,t))}coerceCoords(r,t){return Object.entries(this.space.coords).map(([n,o],s)=>{let a=r[s];if(Oe(a)||isNaN(a))return a;let l=t[s],u=this.coords[s].find(d=>d.type==l);if(!u){let d=o.name||n;throw new TypeError(`${l??a?.raw??a} not allowed for ${d} in ${this.name}()`)}return a=u.resolve(a),u.range&&(t[s]=u.toString()),a})}canSerialize(){return this.type==="function"||this.serialize}parse(r){return null}static get(r,...t){return!r||Ks(r,this)?r:r[kf]?r[kf]:new hc(r,...t)}}const xt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function W0(e){return Array.isArray(e)?e:xt[e]}i(W0,"getWhite");function gc(e,r,t,n={}){if(e=W0(e),r=W0(r),!e||!r)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!r?"/":""}${r?"":"to"}`);if(e===r)return t;let o={W1:e,W2:r,XYZ:t,options:n};if(ei.run("chromatic-adaptation-start",o),o.M||(o.W1===xt.D65&&o.W2===xt.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===xt.D50&&o.W2===xt.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ei.run("chromatic-adaptation-end",o),o.M)return yr(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}i(gc,"adapt$2");function rw(e,r){let t={str:String(e)?.trim(),options:r};if(ei.run("parse-start",t),t.color)return t.color;t.parsed=PD(t.str);let n,o=t.options?t.options.parseMeta??t.options.meta:null;if(t.parsed){let s=t.parsed.name,a,l,u=t.parsed.args,d=u.map((g,m)=>t.parsed.argMeta[m]?.type);if(s==="color"){let g=u.shift();d.shift();let m=g.startsWith("--")?g.substring(2):`--${g}`,y=[g,m];if(a=Z.findFormat({name:s,id:y,type:"function"}),!a){let k,x=g in Z.registry?g:m;if(x in Z.registry){let C=Z.registry[x].formats?.color?.id;C&&(k=`Did you mean ${e.replace("color("+g,"color("+C)}?`)}throw new TypeError(`Cannot parse ${t.str}. `+(k??"Missing a plugin?"))}l=a.space,a.id.startsWith("--")&&!g.startsWith("--")&&Jt.warn(`${l.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${g}).`),g.startsWith("--")&&!a.id.startsWith("--")&&Jt.warn(`${l.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${g}).`)}else a=Z.findFormat({name:s,type:"function"}),l=a.space;o&&Object.assign(o,{format:a,formatId:a.name,types:d,commas:t.parsed.commas});let f=1;t.parsed.lastAlpha&&(f=t.parsed.args.pop(),o&&(o.alphaType=d.pop()));let h=a.coords.length;if(u.length!==h)throw new TypeError(`Expected ${h} coordinates for ${l.id} in ${t.str}), got ${u.length}`);u=a.coerceCoords(u,d),n={spaceId:l.id,coords:u,alpha:f}}else e:for(let s of Z.all)for(let a in s.formats){let l=s.formats[a];if(l.type!=="custom"||l.test&&!l.test(t.str))continue;let u=s.getFormat(l),d=u.parse(t.str);if(d){o&&Object.assign(o,{format:u,formatId:a}),n=d;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Oe(n.alpha)?n.alpha:n.alpha===void 0?1:Xc(0,n.alpha,1),n}i(rw,"parse$1");const tw={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},mc={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(tw).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function ND(e){let r={},t=e.match(mc.unitValue)?.[0],n=r.raw=e;return t?(r.type=t==="%"?"<percentage>":"<angle>",r.unit=t,r.unitless=Number(n.slice(0,-t.length)),n=r.unitless*tw[t]):mc.number.test(n)?(n=Number(n),r.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,r.type="<number>"):r.type="<ident>",{value:n,meta:r}}i(ND,"parseArgument");function PD(e){if(!e)return;e=e.trim();let r=e.match(mc.function);if(r){let t=[],n=[],o=!1,s=r[1].toLowerCase(),a=r[2].replace(mc.singleArgument,(l,u)=>{let{value:d,meta:f}=ND(u);return(l.startsWith("/")||s!=="color"&&t.length===3)&&(o=!0),t.push(d),n.push(f),""});return{name:s,args:t,argMeta:n,lastAlpha:o,commas:a.includes(","),rawName:r[1],rawArgs:r[2]}}}i(PD,"parseFunction");function se(e,r){if(Array.isArray(e))return e.map(n=>se(n,r));if(!e)throw new TypeError("Empty color reference");ca(e)&&(e=rw(e,r));let t=e.space||e.spaceId;return typeof t=="string"&&(e.space=Z.get(t)),e.alpha===void 0&&(e.alpha=1),e}i(se,"getColor");const ID=75e-6;class Z{static{i(this,"ColorSpace")}constructor(r){this.id=r.id,this.name=r.name,this.base=r.base?Z.get(r.base):null,this.aliases=r.aliases,this.base&&(this.fromBase=r.fromBase,this.toBase=r.toBase);let t=r.coords??this.base.coords;for(let o in t)"name"in t[o]||(t[o].name=o);this.coords=t;let n=r.white??this.base.white??"D65";this.white=W0(n),this.formats=r.formats??{};for(let o in this.formats){let s=this.formats[o];s.type||="function",s.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:r.cssId||this.id}),r.gamutSpace?this.gamutSpace=r.gamutSpace==="self"?this:Z.get(r.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,s)=>!0),this.referred=r.referred,Object.defineProperty(this,"path",{value:OD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ei.run("colorspace-init-end",this)}inGamut(r,{epsilon:t=ID}={}){if(!this.equals(this.gamutSpace))return r=this.to(this.gamutSpace,r),this.gamutSpace.inGamut(r,{epsilon:t});let n=Object.values(this.coords);return r.every((o,s)=>{let a=n[s];if(a.type!=="angle"&&a.range){if(Oe(o))return!0;let[l,u]=a.range;return(l===void 0||o>=l-t)&&(u===void 0||o<=u+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(r=>!("range"in r))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let r in this.coords)if(this.coords[r].type==="angle")return!0;return!1}getFormat(r){if(!r)return null;r==="default"?r=Object.values(this.formats)[0]:typeof r=="string"&&(r=this.formats[r]);let t=hc.get(r,this);return t!==r&&r.name in this.formats&&(this.formats[r.name]=t),t}equals(r){return r?this===r||this.id===r||this.id===r.id:!1}to(r,t){if(arguments.length===1){const l=se(r);[r,t]=[l.space,l.coords]}if(r=Z.get(r),this.equals(r))return t;t=t.map(l=>Oe(l)?0:l);let n=this.path,o=r.path,s,a;for(let l=0;l<n.length&&n[l].equals(o[l]);l++)s=n[l],a=l;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${r}: no connection space was found`);for(let l=n.length-1;l>a;l--)t=n[l].toBase(t);for(let l=a+1;l<o.length;l++)t=o[l].fromBase(t);return t}from(r,t){if(arguments.length===1){const n=se(r);[r,t]=[n.space,n.coords]}return r=Z.get(r),r.to(this,t)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let r=[];for(let t in this.coords){let n=this.coords[t],o=n.range||n.refRange;r.push(o?.min??0)}return r}static registry={};static get all(){return[...new Set(Object.values(Z.registry))]}static register(r,t){if(arguments.length===1&&(t=arguments[0],r=t.id),t=this.get(t),this.registry[r]&&this.registry[r]!==t)throw new Error(`Duplicate color space registration: '${r}'`);if(this.registry[r]=t,arguments.length===1&&t.aliases)for(let n of t.aliases)this.register(n,t);return t}static get(r,...t){if(!r||Ks(r,this))return r;if(Ho(r)==="string"){let o=Z.registry[r.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${r}"`);return o}if(t.length)return Z.get(...t);throw new TypeError(`${r} is not a valid color space`)}static findFormat(r,t=Z.all){if(!r)return null;typeof r=="string"&&(r={name:r});for(let n of t)for(let[o,s]of Object.entries(n.formats)){s.name??=o,s.type??="function";let a=(!r.name||s.name===r.name)&&(!r.type||s.type===r.type);if(r.id){let l=s.ids||[s.id],u=Array.isArray(r.id)?r.id:[r.id];a&&=u.some(d=>l.includes(d))}if(a){let l=hc.get(s,n);return l!==s&&(n.formats[s.name]=l),l}}return null}static resolveCoord(r,t){let n=Ho(r),o,s;if(n==="string"?r.includes(".")?[o,s]=r.split("."):[o,s]=[,r]:Array.isArray(r)?[o,s]=r:(o=r.space,s=r.coordId),o=Z.get(o),o||(o=t),!o)throw new TypeError(`Cannot resolve coordinate reference ${r}: No color space specified and relative references are not allowed here`);if(n=Ho(s),n==="number"||n==="string"&&s>=0){let u=Object.entries(o.coords)[s];if(u)return{space:o,id:u[0],index:s,...u[1]}}o=Z.get(o);let a=s.toLowerCase(),l=0;for(let u in o.coords){let d=o.coords[u];if(u.toLowerCase()===a||d.name?.toLowerCase()===a)return{space:o,id:u,index:l,...d};l++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function OD(e){let r=[e];for(let t=e;t=t.base;)r.push(t);return r}i(OD,"getPath");var ot=new Z({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class vt extends Z{static{i(this,"RGBColorSpace")}constructor(r){r.coords||(r.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),r.base||(r.base=ot),r.toXYZ_M&&r.fromXYZ_M&&(r.toBase??=t=>{let n=yr(t,r.toXYZ_M);return this.white!==this.base.white&&(n=gc(this.white,this.base.white,n)),n},r.fromBase??=t=>(t=gc(this.base.white,this.white,t),yr(t,r.fromXYZ_M))),r.referred??="display",super(r)}}function nw(e,r={}){if(Array.isArray(e))return e.map(u=>nw(u,r));let{cssProperty:t="background-color",element:n,...o}=r,s=null;try{return se(e,o)}catch(u){s=u}let{CSS:a,getComputedStyle:l}=globalThis;if(ca(e)&&n&&a&&l&&a.supports(t,e)){let u=n.style[t];e!==u&&(n.style[t]=e);let d=l(n).getPropertyValue(t);if(e!==u&&(n.style[t]=u),d!==e)try{return se(d,o)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return r.errorMeta&&(r.errorMeta.error=s),null}i(nw,"tryColor");function Wl(e,r){e=se(e);let t=Z.get(r,r?.space),n=r?.precision,o;return!t||e.space.equals(t)?o=e.coords.slice():o=t.from(e),n===void 0?o:o.map(s=>cg(s,n))}i(Wl,"getAll");function Kt(e,r){if(e=se(e),r==="alpha")return e.alpha??1;let{space:t,index:n}=Z.resolveCoord(r,e.space);return Wl(e,t)[n]}i(Kt,"get");function fg(e,r,t,n){return e=se(e),Array.isArray(r)&&([r,t,n]=[e.space,r,t]),r=Z.get(r),e.coords=r===e.space?t.slice():r.to(e.space,t),n!==void 0&&(e.alpha=n),e}i(fg,"setAll");fg.returns="color";function Ao(e,r,t){if(e=se(e),arguments.length===2&&Ho(arguments[1])==="object"){let n=arguments[1];for(let o in n)Ao(e,o,n[o])}else if(typeof t=="function"&&(t=t(Kt(e,r))),r==="alpha")e.alpha=t;else{let{space:n,index:o}=Z.resolveCoord(r,e.space),s=Wl(e,n);s[o]=t,fg(e,n,s)}return e}i(Ao,"set");Ao.returns="color";var hg=new Z({id:"xyz-d50",name:"XYZ D50",white:"D50",base:ot,fromBase:i(e=>gc(ot.white,"D50",e),"fromBase"),toBase:i(e=>gc("D50",ot.white,e),"toBase")});const BD=216/24389,ub=24/116,wu=24389/27;let xf=xt.D50;var Gt=new Z({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xf,base:hg,fromBase(e){let t=e.map((a,l)=>a/xf[l]).map(a=>a>BD?Math.cbrt(a):(wu*a+16)/116),n=116*t[1]-16,o=500*(t[0]-t[1]),s=200*(t[1]-t[2]);return[n,o,s]},toBase(e){let[r,t,n]=e,o=[];return o[1]=(r+16)/116,o[0]=t/500+o[1],o[2]=o[1]-n/200,[o[0]>ub?Math.pow(o[0],3):(116*o[0]-16)/wu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wu,o[2]>ub?Math.pow(o[2],3):(116*o[2]-16)/wu].map((a,l)=>a*xf[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function bn(e){return typeof e!="number"?e:(e%360+360)%360}i(bn,"constrain");function ow(e,r){let[t,n]=r,o=Oe(t),s=Oe(n);if(o&&s)return[t,n];if(o?t=n:s&&(n=t),e==="raw")return r;t=bn(t),n=bn(n);let a=n-t;return e==="increasing"?a<0&&(n+=360):e==="decreasing"?a>0&&(t+=360):e==="longer"?-180<a&&a<180&&(a>0?t+=360:n+=360):e==="shorter"&&(a>180?t+=360:a<-180&&(n+=360)),[t,n]}i(ow,"adjust");var Xt=new Z({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Gt,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,u=l[1]-l[0];this.ε=u/1e5}let[r,t,n]=e,o=Math.abs(t)<this.ε&&Math.abs(n)<this.ε,s=o?null:bn(Math.atan2(n,t)*180/Math.PI),a=o?0:Math.sqrt(t**2+n**2);return[r,a,s]},toBase(e){let[r,t,n]=e,o=null,s=null;return Oe(n)||(t=t<0?0:t,o=t*Math.cos(n*Math.PI/180),s=t*Math.sin(n*Math.PI/180)),[r,o,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const cb=25**7,pc=Math.PI,db=180/pc,ps=pc/180;function fb(e){const r=e*e;return r*r*r*e}i(fb,"pow7");function iw(e,r,{kL:t=1,kC:n=1,kH:o=1}={}){[e,r]=se([e,r]);let[s,a,l]=Gt.from(e),u=Xt.from(Gt,[s,a,l])[1],[d,f,h]=Gt.from(r),g=Xt.from(Gt,[d,f,h])[1];u<0&&(u=0),g<0&&(g=0);let m=(u+g)/2,y=fb(m),k=.5*(1-Math.sqrt(y/(y+cb))),x=(1+k)*a,C=(1+k)*f,E=Math.sqrt(x**2+l**2),I=Math.sqrt(C**2+h**2),j=x===0&&l===0?0:Math.atan2(l,x),K=C===0&&h===0?0:Math.atan2(h,C);j<0&&(j+=2*pc),K<0&&(K+=2*pc),j*=db,K*=db;let ae=d-s,Te=I-E,me=K-j,Me=j+K,Xe=Math.abs(me),Qe;E*I===0?Qe=0:Xe<=180?Qe=me:me>180?Qe=me-360:me<-180?Qe=me+360:Jt.warn("the unthinkable has happened");let Or=2*Math.sqrt(I*E)*Math.sin(Qe*ps/2),_t=(s+d)/2,wt=(E+I)/2,io=fb(wt),Wr;E*I===0?Wr=Me:Xe<=180?Wr=Me/2:Me<360?Wr=(Me+360)/2:Wr=(Me-360)/2;let qn=(_t-50)**2,so=1+.015*qn/Math.sqrt(20+qn),an=1+.045*wt,et=1;et-=.17*Math.cos((Wr-30)*ps),et+=.24*Math.cos(2*Wr*ps),et+=.32*Math.cos((3*Wr+6)*ps),et-=.2*Math.cos((4*Wr-63)*ps);let qe=1+.015*wt*et,Br=30*Math.exp(-1*((Wr-275)/25)**2),ln=2*Math.sqrt(io/(io+cb)),dt=-1*Math.sin(2*Br*ps)*ln,un=(ae/(t*so))**2;return un+=(Te/(n*an))**2,un+=(Or/(o*qe))**2,un+=dt*(Te/(n*an))*(Or/(o*qe)),Math.sqrt(un)}i(iw,"deltaE2000");const RD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],jD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Zo=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var In=new Z({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ot,fromBase(e){let r=yr(e,RD);return r[0]=Math.cbrt(r[0]),r[1]=Math.cbrt(r[1]),r[2]=Math.cbrt(r[2]),yr(r,jD,r)},toBase(e){let r=yr(e,Zo);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,yr(r,LD,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function K0(e,r){[e,r]=se([e,r]);let[t,n,o]=In.from(e),[s,a,l]=In.from(r),u=t-s,d=n-a,f=o-l;return Math.sqrt(u**2+d**2+f**2)}i(K0,"deltaEOK");const _D=75e-6;function Bi(e,r,{epsilon:t=_D}={}){e=se(e),r||(r=e.space),r=Z.get(r);let n=e.coords;return r!==e.space&&(n=r.from(e)),r.inGamut(n,{epsilon:t})}i(Bi,"inGamut$1");function Gs(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}i(Gs,"clone");function sw(e,r,t="lab"){t=Z.get(t);let n=t.from(e),o=t.from(r);return Math.sqrt(n.reduce((s,a,l)=>{let u=o[l];return Oe(a)||Oe(u)?s:s+(u-a)**2},0))}i(sw,"distance");function UD(e,r){return sw(e,r,"lab")}i(UD,"deltaE76");const zD=Math.PI,hb=zD/180;function VD(e,r,{l:t=2,c:n=1}={}){[e,r]=se([e,r]);let[o,s,a]=Gt.from(e),[,l,u]=Xt.from(Gt,[o,s,a]),[d,f,h]=Gt.from(r),g=Xt.from(Gt,[d,f,h])[1];l<0&&(l=0),g<0&&(g=0);let m=o-d,y=l-g,k=s-f,x=a-h,C=k**2+x**2-y**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let I=.0638*l/(1+.0131*l)+.638,j;Oe(u)&&(u=0),u>=164&&u<=345?j=.56+Math.abs(.2*Math.cos((u+168)*hb)):j=.36+Math.abs(.4*Math.cos((u+35)*hb));let K=Math.pow(l,4),ae=Math.sqrt(K/(K+1900)),Te=I*(ae*j+1-ae),me=(m/(t*E))**2;return me+=(y/(n*I))**2,me+=C/Te**2,Math.sqrt(me)}i(VD,"deltaECMC");const gb=203;var gg=new Z({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:ot,fromBase(e){return e.map(r=>r*gb)},toBase(e){return e.map(r=>r/gb)}});const $u=1.15,ku=.66,mb=2610/2**14,qD=2**14/2610,pb=3424/2**12,bb=2413/2**7,vb=2392/2**7,WD=1.7*2523/2**5,yb=2**5/(1.7*2523),xu=-.56,Df=16295499532821565e-27,KD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],GD=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],HD=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],ZD=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var aw=new Z({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:gg,fromBase(e){let[r,t,n]=e,o=$u*r-($u-1)*n,s=ku*t-(ku-1)*r,l=yr([o,s,n],KD).map(function(g){let m=pb+bb*Ar(g/1e4,mb),y=1+vb*Ar(g/1e4,mb);return Ar(m/y,WD)}),[u,d,f]=yr(l,HD);return[(1+xu)*u/(1+xu*u)-Df,d,f]},toBase(e){let[r,t,n]=e,o=(r+Df)/(1+xu-xu*(r+Df)),a=yr([o,t,n],ZD).map(function(g){let m=pb-Ar(g,yb),y=vb*Ar(g,yb)-bb;return 1e4*Ar(m/y,qD)}),[l,u,d]=yr(a,GD),f=(l+($u-1)*d)/$u,h=(u+(ku-1)*f)/ku;return[f,h,d]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),G0=new Z({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:aw,fromBase:Xt.fromBase,toBase:Xt.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function YD(e,r){[e,r]=se([e,r]);let[t,n,o]=G0.from(e),[s,a,l]=G0.from(r),u=t-s,d=n-a;Oe(o)&&Oe(l)?(o=0,l=0):Oe(o)?o=l:Oe(l)&&(l=o);let f=o-l,h=2*Math.sqrt(n*a)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(u**2+d**2+h**2)}i(YD,"deltaEJz");const lw=3424/4096,uw=2413/128,cw=2392/128,wb=2610/16384,JD=2523/32,XD=16384/2610,$b=32/2523,QD=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],e8=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],r8=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],t8=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var H0=new Z({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:gg,fromBase(e){let r=yr(e,QD);return n8(r)},toBase(e){let r=o8(e);return yr(r,t8)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function n8(e){let r=e.map(function(t){let n=lw+uw*(t/1e4)**wb,o=1+cw*(t/1e4)**wb;return(n/o)**JD});return yr(r,e8)}i(n8,"LMStoICtCp");function o8(e){return yr(e,r8).map(function(n){let o=Math.max(n**$b-lw,0),s=uw-cw*n**$b;return 1e4*(o/s)**XD})}i(o8,"ICtCptoLMS");function i8(e,r){[e,r]=se([e,r]);let[t,n,o]=H0.from(e),[s,a,l]=H0.from(r);return 720*Math.sqrt((t-s)**2+.25*(n-a)**2+(o-l)**2)}i(i8,"deltaEITP");function s8(e,r){[e,r]=se([e,r]);let t=2,[n,o,s]=In.from(e),[a,l,u]=In.from(r),d=n-a,f=t*(o-l),h=t*(s-u);return Math.sqrt(d**2+f**2+h**2)}i(s8,"deltaEOK2");const a8=xt.D65,dw=.42,kb=1/dw,Cf=2*Math.PI,fw=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],l8=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],u8=[[460,451,288],[460,-891,-261],[460,-220,-6300]],c8={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ei={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},d8=180/Math.PI,xb=Math.PI/180;function hw(e,r){return e.map(n=>{const o=Ar(r*Math.abs(n)*.01,dw);return 400*Qc(o,n)/(o+27.13)})}i(hw,"adapt$1");function f8(e,r){const t=100/r*27.13**kb;return e.map(n=>{const o=Math.abs(n);return Qc(t*Ar(o/(400-o),kb),n)})}i(f8,"unadapt");function h8(e){let r=bn(e);r<=Ei.h[0]&&(r+=360);const t=ew(Ei.h,r)-1,[n,o]=Ei.h.slice(t,t+2),[s,a]=Ei.e.slice(t,t+2),l=Ei.H[t],u=(r-n)/s;return l+100*u/(u+(o-r)/a)}i(h8,"hueQuadrature");function g8(e){let r=(e%400+400)%400;const t=Math.floor(.01*r);r=r%100;const[n,o]=Ei.h.slice(t,t+2),[s,a]=Ei.e.slice(t,t+2);return bn((r*(a*n-s*o)-100*n*a)/(r*(a-s)-100*a))}i(g8,"invHueQuadrature");function gw(e,r,t,n,o){const s={};s.discounting=o,s.refWhite=e,s.surround=n;const a=e.map(x=>x*100);s.la=r,s.yb=t;const l=a[1],u=yr(a,fw);let d=c8[s.surround];const f=d[0];s.c=d[1],s.nc=d[2];const g=(1/(5*s.la+1))**4;s.fl=g*s.la+.1*(1-g)*(1-g)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/l,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const m=Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(x=>wl(1,l/x,m)),s.dRgbInv=s.dRgb.map(x=>1/x);const y=u.map((x,C)=>x*s.dRgb[C]),k=hw(y,s.fl);return s.aW=s.nbb*(2*k[0]+k[1]+.05*k[2]),s}i(gw,"environment");const Db=gw(a8,64/Math.PI*.2,20,"average",!1);function Z0(e,r){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let t=0;e.h!==void 0?t=bn(e.h)*xb:t=g8(e.H)*xb;const n=Math.cos(t),o=Math.sin(t);let s=0;e.J!==void 0?s=Ar(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*r.c*e.Q/((r.aW+4)*r.flRoot));let a=0;e.C!==void 0?a=e.C/s:e.M!==void 0?a=e.M/r.flRoot/s:e.s!==void 0&&(a=4e-4*e.s**2*(r.aW+4)/r.c);const l=Ar(a*Math.pow(1.64-Math.pow(.29,r.n),-.73),10/9),u=.25*(Math.cos(t+2)+3.8),d=r.aW*Ar(s,2/r.c/r.z),f=5e4/13*r.nc*r.ncb*u,h=d/r.nbb,g=23*(h+.305)*dg(l,23*f+l*(11*n+108*o)),m=g*n,y=g*o,k=f8(yr([h,m,y],u8).map(x=>x*1/1403),r.fl);return yr(k.map((x,C)=>x*r.dRgbInv[C]),l8).map(x=>x/100)}i(Z0,"fromCam16");function mw(e,r){const t=e.map(I=>I*100),n=hw(yr(t,fw).map((I,j)=>I*r.dRgb[j]),r.fl),o=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(s,o)%Cf+Cf)%Cf,l=.25*(Math.cos(a+2)+3.8),u=5e4/13*r.nc*r.ncb*dg(l*Math.sqrt(o**2+s**2),n[0]+n[1]+1.05*n[2]+.305),d=Ar(u,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),f=r.nbb*(2*n[0]+n[1]+.05*n[2]),h=Ar(f/r.aW,.5*r.c*r.z),g=100*Ar(h,2),m=4/r.c*h*(r.aW+4)*r.flRoot,y=d*h,k=y*r.flRoot,x=bn(a*d8),C=h8(x),E=50*Ar(r.c*d/(r.aW+4),1/2);return{J:g,C:y,h:x,s:E,Q:m,M:k,H:C}}i(mw,"toCam16");var m8=new Z({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ot,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const r=mw(e,Db),t=Math.abs(r.M)<this.ε;return[r.J,t?0:r.M,t?null:r.h]},toBase(e){return Z0({J:e[0],M:e[1],h:e[2]},Db)}});const p8=xt.D65,b8=216/24389,pw=24389/27;function v8(e){return 116*(e>b8?Math.cbrt(e):(pw*e+16)/116)-16}i(v8,"toLstar");function Y0(e){return e>8?Math.pow((e+16)/116,3):e/pw}i(Y0,"fromLstar");function y8(e,r){let[t,n,o]=e,s=[],a=0;if(o===0)return[0,0,0];let l=Y0(o);o>0?a=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:a=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,d=15;let f=0,h=1/0;for(;f<=d;){s=Z0({J:a,C:n,h:t},r);const g=Math.abs(s[1]-l);if(g<h){if(g<=u)return s;h=g}a=a-(s[1]-l)*a/(2*s[1]),f+=1}return Z0({J:a,C:n,h:t},r)}i(y8,"fromHct");function w8(e,r){const t=v8(e[1]);if(t===0)return[0,0,0];const n=mw(e,mg);return[bn(n.h),n.C,t]}i(w8,"toHct");const mg=gw(p8,200/Math.PI*Y0(50),Y0(50)*100,"average",!1);var $l=new Z({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:ot,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let r=w8(e);return r[1]<this.ε&&(r[1]=0,r[0]=null),r},toBase(e){return y8(e,mg)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const $8=Math.PI/180,Cb=[1,.007,.0228];function Eb(e){e[1]<0&&(e=$l.fromBase($l.toBase(e)));const r=Math.log(Math.max(1+Cb[2]*e[1]*mg.flRoot,1))/Cb[2],t=e[0]*$8,n=r*Math.cos(t),o=r*Math.sin(t);return[e[2],n,o]}i(Eb,"convertUcsAb");function k8(e,r){[e,r]=se([e,r]);let[t,n,o]=Eb($l.from(e)),[s,a,l]=Eb($l.from(r));return Math.sqrt((t-s)**2+(n-a)**2+(o-l)**2)}i(k8,"deltaEHCT");var Hs={deltaE76:UD,deltaECMC:VD,deltaE2000:iw,deltaEJz:YD,deltaEITP:i8,deltaEOK:K0,deltaEOK2:s8,deltaEHCT:k8};function x8(e){const r=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${r-2}`),1e-6)}i(x8,"calcEpsilon");const Ab={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ri(e,{method:r=Jt.gamut_mapping,space:t=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:s=void 0}={}){if(e=se(e),ca(arguments[1])?t=arguments[1]:t||(t=e.space),t=Z.get(t),Bi(e,t,{epsilon:0}))return e;let a;if(r==="css")a=D8(e,{space:t});else{if(r!=="clip"&&!Bi(e,t)){Object.prototype.hasOwnProperty.call(Ab,r)&&({method:r,jnd:o,deltaEMethod:n,blackWhiteClamp:s}=Ab[r]);let l=iw;if(n!==""){for(let d in Hs)if("deltae"+n.toLowerCase()===d.toLowerCase()){l=Hs[d];break}}o===0&&(o=1e-16);let u=ri(Ze(e,t),{method:"clip",space:t});if(l(e,u)>o){if(s&&Object.keys(s).length===3){let E=Z.resolveCoord(s.channel),I=Kt(Ze(e,E.space),E.id);if(Oe(I)&&(I=0),I>=s.max)return Ze({space:"xyz-d65",coords:xt.D65},e.space);if(I<=s.min)return Ze({space:"xyz-d65",coords:[0,0,0]},e.space)}let d=Z.resolveCoord(r),f=d.space,h=d.id,g=Ze(e,f);g.coords.forEach((E,I)=>{Oe(E)&&(g.coords[I]=0)});let y=(d.range||d.refRange)[0],k=x8(o),x=y,C=Kt(g,h);for(;C-x>k;){let E=Gs(g);E=ri(E,{space:t,method:"clip"}),l(g,E)-o<k?x=Kt(g,h):C=Kt(g,h),Ao(g,h,(x+C)/2)}a=Ze(g,t)}else a=u}else a=Ze(e,t);if(r==="clip"||!Bi(a,t,{epsilon:0})){let l=Object.values(t.coords).map(u=>u.range||[]);a.coords=a.coords.map((u,d)=>{let[f,h]=l[d];return f!==void 0&&(u=Math.max(f,u)),h!==void 0&&(u=Math.min(u,h)),u})}}return t!==e.space&&(a=Ze(a,e.space)),e.coords=a.coords,e}i(ri,"toGamut");ri.returns="color";const Mb={WHITE:{space:In,coords:[1,0,0],alpha:1},BLACK:{space:In,coords:[0,0,0],alpha:1}};function D8(e,{space:r}={}){e=se(e),r||(r=e.space),r=Z.get(r);const o=Z.get("oklch");if(r.isUnbounded)return Ze(e,r);const s=Ze(e,o);let a=s.coords[0];if(a>=1){const y=Ze(Mb.WHITE,r);return y.alpha=e.alpha,Ze(y,r)}if(a<=0){const y=Ze(Mb.BLACK,r);return y.alpha=e.alpha,Ze(y,r)}if(Bi(s,r,{epsilon:0}))return Ze(s,r);function l(y){const k=Ze(y,r),x=Object.values(r.coords);return k.coords=k.coords.map((C,E)=>{if("range"in x[E]){const[I,j]=x[E].range;return Xc(I,C,j)}return C}),k}i(l,"clip");let u=0,d=s.coords[1],f=!0,h=Gs(s),g=l(h),m=K0(g,h);if(m<.02)return g;for(;d-u>1e-4;){const y=(u+d)/2;if(h.coords[1]=y,f&&Bi(h,r,{epsilon:0}))u=y;else if(g=l(h),m=K0(g,h),m<.02){if(.02-m<1e-4)break;f=!1,u=y}else d=y}return g}i(D8,"toGamutCSS");function Ze(e,r,{inGamut:t}={}){e=se(e),r=Z.get(r);let n=r.from(e),o={space:r,coords:n,alpha:e.alpha};return t&&(o=ri(o,t===!0?void 0:t)),o}i(Ze,"to");Ze.returns="color";function il(e,r={}){let{precision:t=Jt.precision,format:n,inGamut:o=!0,coords:s,alpha:a,commas:l}=r,u,d=se(e),f=n,h=d.parseMeta;h&&!n&&(h.format.canSerialize()&&(n=h.format,f=h.formatId),s??=h.types,a??=h.alphaType,l??=h.commas),f&&(n=d.space.getFormat(n)??Z.findFormat(f)),n||(n=d.space.getFormat("default")??Z.DEFAULT_FORMAT,f=n.name),n&&n.space&&n.space!==d.space&&(d=Ze(d,n.space));let g=d.coords.slice();if(o||=n.toGamut,o&&!Bi(d)&&(g=ri(Gs(d),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(g,d.alpha,r);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",y=n.serializeCoords(g,t,s);if(m==="color"){let I=n.id||n.ids?.[0]||d.space.cssId||d.space.id;y.unshift(I)}let k=d.alpha;a!==void 0&&typeof a!="object"&&(a=typeof a=="string"?{type:a}:{include:a});let x=a?.type??"<number>",C=a?.include===!0||n.alpha===!0||a?.include!==!1&&n.alpha!==!1&&k<1,E="";if(l??=n.commas,C){if(t!==null){let I;x==="<percentage>"&&(I="%",k*=100),k=ug(k,{precision:t,unit:I})}E=`${l?",":" /"} ${k}`}u=`${m}(${y.join(l?", ":" ")}${E})`}return u}i(il,"serialize");const C8=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],E8=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var kl=new vt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:C8,fromXYZ_M:E8}),bw=new vt({id:"rec2020",name:"REC.2020",base:kl,toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,2.4)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,1/2.4)})}});const A8=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],M8=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var vw=new vt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:A8,fromXYZ_M:M8});const F8=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Vr=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var yw=new vt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:F8,fromXYZ_M:Vr}),Fb={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Sb=Array(3).fill("<percentage> | <number>[0, 255]"),Tb=Array(3).fill("<number>[0, 255]");var Vi=new vt({id:"srgb",name:"sRGB",base:yw,fromBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*r}),"fromBase"),toBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n<=.04045?r/12.92:t*((n+.055)/1.055)**2.4}),"toBase"),formats:{rgb:{coords:Sb},rgb_number:{name:"rgb",commas:!0,coords:Tb,alpha:!1},color:{},rgba:{coords:Sb,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Tb},hex:{type:"custom",toGamut:!0,test:i(e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),"test"),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let r=[];return e.replace(/[a-f0-9]{2}/gi,t=>{r.push(parseInt(t,16)/255)}),{spaceId:"srgb",coords:r.slice(0,3),alpha:r.slice(3)[0]}},serialize:i((e,r,{collapse:t=!0,alpha:n}={})=>{(n!==!1&&r<1||n===!0)&&e.push(r),e=e.map(a=>Math.round(a*255));let o=t&&e.every(a=>a%17===0);return"#"+e.map(a=>o?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")},"serialize")},keyword:{type:"custom",test:i(e=>/^[a-z]+$/i.test(e),"test"),parse(e){e=e.toLowerCase();let r={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(r.coords=Fb.black,r.alpha=0):r.coords=Fb[e],r.coords)return r}}}}),ww=new vt({id:"p3",cssId:"display-p3",name:"P3",base:vw,fromBase:Vi.fromBase,toBase:Vi.toBase});Jt.display_space=Vi;let S8;if(typeof CSS<"u"&&CSS.supports)for(let e of[Gt,bw,ww]){let r=e.getMinCoords(),n=il({space:e,coords:r,alpha:1});if(CSS.supports("color",n)){Jt.display_space=e;break}}function T8(e,{space:r=Jt.display_space,...t}={}){e=se(e);let n=il(e,t);if(typeof CSS>"u"||CSS.supports("color",n)||!Jt.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Oe)||Oe(e.alpha))&&!(S8??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=Gs(e),o.coords=o.coords.map(Er),o.alpha=Er(o.alpha),n=il(o,t),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=Ze(o,r),n=new String(il(o,t)),n.color=o}return n}i(T8,"display");function N8(e,r,{space:t,hue:n="shorter"}={}){e=se(e),t||=e.space,t=Z.get(t);let o=Object.values(t.coords);[e,r]=[e,r].map(d=>Ze(d,t));let[s,a]=[e,r].map(d=>d.coords),l=s.map((d,f)=>{let h=o[f],g=a[f];return h.type==="angle"&&([d,g]=ow(n,[d,g])),Nb(d,g)}),u=Nb(e.alpha,r.alpha);return{space:t,coords:l,alpha:u}}i(N8,"deltas");function Nb(e,r){return Oe(e)||Oe(r)?e===r?null:0:e-r}i(Nb,"subtractCoords");function P8(e,r){return e=se(e),r=se(r),e.space===r.space&&e.alpha===r.alpha&&e.coords.every((t,n)=>t===r.coords[n])}i(P8,"equals");function ti(e){return Kt(e,[ot,"y"])}i(ti,"getLuminance");function $w(e,r){Ao(e,[ot,"y"],r)}i($w,"setLuminance");function I8(e){Object.defineProperty(e.prototype,"luminance",{get(){return ti(this)},set(r){$w(this,r)}})}i(I8,"register$2");var O8=Object.freeze({__proto__:null,getLuminance:ti,register:I8,setLuminance:$w});function B8(e,r){e=se(e),r=se(r);let t=Math.max(ti(e),0),n=Math.max(ti(r),0);return n>t&&([t,n]=[n,t]),(t+.05)/(n+.05)}i(B8,"contrastWCAG21");const R8=.56,L8=.57,j8=.62,_8=.65,Pb=.022,U8=1.414,z8=.1,V8=5e-4,q8=1.14,Ib=.027,W8=1.14;function Ob(e){return e>=Pb?e:e+(Pb-e)**U8}i(Ob,"fclamp");function bs(e){let r=e<0?-1:1,t=Math.abs(e);return r*Math.pow(t,2.4)}i(bs,"linearize$3");function K8(e,r){r=se(r),e=se(e);let t,n,o,s,a,l;r=Ze(r,"srgb"),[s,a,l]=r.coords.map(m=>Oe(m)?0:m);let u=bs(s)*.2126729+bs(a)*.7151522+bs(l)*.072175;e=Ze(e,"srgb"),[s,a,l]=e.coords.map(m=>Oe(m)?0:m);let d=bs(s)*.2126729+bs(a)*.7151522+bs(l)*.072175,f=Ob(u),h=Ob(d),g=h>f;return Math.abs(h-f)<V8?n=0:g?(t=h**R8-f**L8,n=t*q8):(t=h**_8-f**j8,n=t*W8),Math.abs(n)<z8?o=0:n>0?o=n-Ib:o=n+Ib,o*100}i(K8,"contrastAPCA");function G8(e,r){e=se(e),r=se(r);let t=Math.max(ti(e),0),n=Math.max(ti(r),0);n>t&&([t,n]=[n,t]);let o=t+n;return o===0?0:(t-n)/o}i(G8,"contrastMichelson");const H8=5e4;function Z8(e,r){e=se(e),r=se(r);let t=Math.max(ti(e),0),n=Math.max(ti(r),0);return n>t&&([t,n]=[n,t]),n===0?H8:(t-n)/n}i(Z8,"contrastWeber");function Y8(e,r){e=se(e),r=se(r);let t=Kt(e,[Gt,"l"]),n=Kt(r,[Gt,"l"]);return Math.abs(t-n)}i(Y8,"contrastLstar");const J8=216/24389,Bb=24/116,Du=24389/27;let Ef=xt.D65;var J0=new Z({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ef,base:ot,fromBase(e){let t=e.map((n,o)=>n/Ef[o]).map(n=>n>J8?Math.cbrt(n):(Du*n+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let r=[];return r[1]=(e[0]+16)/116,r[0]=e[1]/500+r[1],r[2]=r[1]-e[2]/200,[r[0]>Bb?Math.pow(r[0],3):(116*r[0]-16)/Du,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Du,r[2]>Bb?Math.pow(r[2],3):(116*r[2]-16)/Du].map((n,o)=>n*Ef[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Af=Math.pow(5,.5)*.5+.5;function X8(e,r){e=se(e),r=se(r);let t=Kt(e,[J0,"l"]),n=Kt(r,[J0,"l"]),o=Math.abs(Math.pow(t,Af)-Math.pow(n,Af)),s=Math.pow(o,1/Af)*Math.SQRT2-40;return s<7.5?0:s}i(X8,"contrastDeltaPhi");var Gu=Object.freeze({__proto__:null,contrastAPCA:K8,contrastDeltaPhi:X8,contrastLstar:Y8,contrastMichelson:G8,contrastWCAG21:B8,contrastWeber:Z8});function Q8(e,r,t){ca(t)&&(t={algorithm:t});let{algorithm:n,...o}=t||{};if(!n){let s=Object.keys(Gu).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=se(e),r=se(r);for(let s in Gu)if("contrast"+n.toLowerCase()===s.toLowerCase())return Gu[s](e,r,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}i(Q8,"contrast");function ed(e){let[r,t,n]=Wl(e,ot),o=r+15*t+3*n;return[4*r/o,9*t/o]}i(ed,"uv");function kw(e){let[r,t,n]=Wl(e,ot),o=r+t+n;return[r/o,t/o]}i(kw,"xy");function e9(e){Object.defineProperty(e.prototype,"uv",{get(){return ed(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return kw(this)}})}i(e9,"register$1");var r9=Object.freeze({__proto__:null,register:e9,uv:ed,xy:kw});function Ga(e,r,t={}){ca(t)&&(t={method:t});let{method:n=Jt.deltaE,...o}=t;for(let s in Hs)if("deltae"+n.toLowerCase()===s.toLowerCase())return Hs[s](e,r,o);throw new TypeError(`Unknown deltaE method: ${n}`)}i(Ga,"deltaE");function xw(e,r=.25){let n=[Z.get("oklch","lch"),"l"];return Ao(e,n,o=>o*(1+r))}i(xw,"lighten");function Dw(e,r=.25){let n=[Z.get("oklch","lch"),"l"];return Ao(e,n,o=>o*(1-r))}i(Dw,"darken");xw.returns="color";Dw.returns="color";var t9=Object.freeze({__proto__:null,darken:Dw,lighten:xw});function Cw(e,r,t,n={}){return[e,r]=[se(e),se(r)],Ho(t)==="object"&&([t,n]=[.5,t]),Kl(e,r,n)(t??.5)}i(Cw,"mix");function Ew(e,r,t={}){let n;pg(e)&&([n,t]=[e,r],[e,r]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:a=2,maxSteps:l=1e3,...u}=t;n||([e,r]=[se(e),se(r)],n=Kl(e,r,u));let d=Ga(e,r),f=o>0?Math.max(a,Math.ceil(d/o)+1):a,h=[];if(l!==void 0&&(f=Math.min(f,l)),f===1)h=[{p:.5,color:n(.5)}];else{let g=1/(f-1);h=Array.from({length:f},(m,y)=>{let k=y*g;return{p:k,color:n(k)}})}if(o>0){let g=h.reduce((m,y,k)=>{if(k===0)return 0;let x=Ga(y.color,h[k-1].color,s);return Math.max(m,x)},0);for(;g>o;){g=0;for(let m=1;m<h.length&&h.length<l;m++){let y=h[m-1],k=h[m],x=(k.p+y.p)/2,C=n(x);g=Math.max(g,Ga(C,y.color),Ga(C,k.color)),h.splice(m,0,{p:x,color:n(x)}),m++}}}return h=h.map(g=>g.color),h}i(Ew,"steps");function Kl(e,r,t={}){if(pg(e)){let[u,d]=[e,r];return Kl(...u.rangeArgs.colors,{...u.rangeArgs.options,...d})}let{space:n,outputSpace:o,progression:s,premultiplied:a}=t;e=se(e),r=se(r),e=Gs(e),r=Gs(r);let l={colors:[e,r],options:t};if(n?n=Z.get(n):n=Z.registry[Jt.interpolationSpace]||e.space,o=o?Z.get(o):n,e=Ze(e,n),r=Ze(r,n),e=ri(e),r=ri(r),n.coords.h&&n.coords.h.type==="angle"){let u=t.hue=t.hue||"shorter",d=[n,"h"],[f,h]=[Kt(e,d),Kt(r,d)];Oe(f)&&!Oe(h)?f=h:Oe(h)&&!Oe(f)&&(h=f),[f,h]=ow(u,[f,h]),Ao(e,d,f),Ao(r,d,h)}return a&&(e.coords=e.coords.map(u=>u*e.alpha),r.coords=r.coords.map(u=>u*r.alpha)),Object.assign(u=>{u=s?s(u):u;let d=e.coords.map((g,m)=>{let y=r.coords[m];return wl(g,y,u)}),f=wl(e.alpha,r.alpha,u),h={space:n,coords:d,alpha:f};return a&&(h.coords=h.coords.map(g=>g/f)),o!==n&&(h=Ze(h,o)),h},{rangeArgs:l})}i(Kl,"range");function pg(e){return Ho(e)==="function"&&!!e.rangeArgs}i(pg,"isRange");Jt.interpolationSpace="lab";function n9(e){e.defineFunction("mix",Cw,{returns:"color"}),e.defineFunction("range",Kl,{returns:"function<color>"}),e.defineFunction("steps",Ew,{returns:"array<color>"})}i(n9,"register");var o9=Object.freeze({__proto__:null,isRange:pg,mix:Cw,range:Kl,register:n9,steps:Ew}),i9=new Z({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Vi,fromBase:i(e=>{let r=Math.max(...e),t=Math.min(...e),[n,o,s]=e,[a,l,u]=[null,0,(t+r)/2],d=r-t;if(d!==0){switch(l=u===0||u===1?0:(r-u)/Math.min(u,1-u),r){case n:a=(o-s)/d+(o<s?6:0);break;case o:a=(s-n)/d+2;break;case s:a=(n-o)/d+4}a=a*60}return l<0&&(a+=180,l=Math.abs(l)),a>=360&&(a-=360),[a,l*100,u*100]},"fromBase"),toBase:i(e=>{let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(s){let a=(s+r/30)%12,l=t*Math.min(n,1-n);return n-l*Math.max(-1,Math.min(a-3,9-a,1))}return i(o,"f"),[o(0),o(8),o(4)]},"toBase"),formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Aw=new Z({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Vi,fromBase(e){let r=Math.max(...e),t=Math.min(...e),[n,o,s]=e,[a,l,u]=[null,0,r],d=r-t;if(d!==0){switch(r){case n:a=(o-s)/d+(o<s?6:0);break;case o:a=(s-n)/d+2;break;case s:a=(n-o)/d+4}a=a*60}return u&&(l=d/u),a>=360&&(a-=360),[a,l*100,u*100]},toBase(e){let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(s){let a=(s+r/60)%6;return n-n*t*Math.max(0,Math.min(a,4-a,1))}return i(o,"f"),[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),s9=new Z({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Aw,fromBase(e){let[r,t,n]=e;return[r,n*(100-t)/100,100-n]},toBase(e){let[r,t,n]=e;t/=100,n/=100;let o=t+n;if(o>=1){let l=t/o;return[r,0,l*100]}let s=1-n,a=s===0?0:1-t/s;return[r,a*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const a9=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],l9=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Mw=new vt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:a9,fromXYZ_M:l9}),u9=new vt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Mw,toBase:i(e=>e.map(r=>Math.pow(Math.abs(r),563/256)*Math.sign(r)),"toBase"),fromBase:i(e=>e.map(r=>Math.pow(Math.abs(r),256/563)*Math.sign(r)),"fromBase")});const c9=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],d9=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Fw=new vt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:hg,toXYZ_M:c9,fromXYZ_M:d9});const f9=1/512,h9=16/512;var g9=new vt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Fw,toBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n<h9?r/16:t*n**1.8})},fromBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n>=f9?t*n**(1/1.8):16*r})}});const Cu=1.09929682680944,Rb=.018053968510807;var m9=new vt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:kl,referred:"scene",toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n<Rb*4.5?r/4.5:t*Math.pow((n+Cu-1)/Cu,1/.45)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n>=Rb?t*(Cu*Math.pow(n,.45)-(Cu-1)):4.5*r})}}),p9=new Z({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:In,fromBase:Xt.fromBase,toBase:Xt.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Zs=2*Math.PI,bc=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],vc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Mf=Number.MAX_VALUE,sl=.206,bg=.03,Ha=(1+sl)/(1+bg);function rt(e,r){let t=e.length;if(t!==r.length)throw new Error(`Vectors of size ${t} and ${r.length} are not aligned`);let n=0;return e.forEach((o,s)=>{n+=o*r[s]}),n}i(rt,"vdot");function al(e){return .5*(Ha*e-sl+Math.sqrt((Ha*e-sl)*(Ha*e-sl)+4*bg*Ha*e))}i(al,"toe$1");function Is(e){return(e**2+sl*e)/(Ha*(e+bg))}i(Is,"toeInv");function vg(e){let[r,t]=e;return[t/r,t/(1-r)]}i(vg,"toSt");function b9(e,r){let t=.11516993+1/(7.4477897+4.1590124*r+e*(-2.19557347+1.75198401*r+e*(-2.13704948-10.02301043*r+e*(-4.24894561+5.38770819*r+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*r+e*(.40370612+.90148123*r+e*(-.27087943+.6122399*r+e*(.00299215-.45399568*r-.14661872*e))));return[t,n]}i(b9,"getStMid");function yg(e,r){let t=yr(e,Zo);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,yr(t,r,t)}i(yg,"oklabToLinearRGB");function rd(e,r,t,n){let o=y9(e,r,t,n),s=yg([1,o*e,o*r],t),a=Ar(1/Math.max(...s),1/3),l=a*o;return[a,l]}i(rd,"findCusp");function v9(e,r,t,n,o,s,a,l){let u;if(l===void 0&&(l=rd(e,r,s,a)),(t-o)*l[1]-(l[0]-o)*n<=0)u=l[1]*o/(n*l[0]+l[1]*(o-t));else{u=l[1]*(o-1)/(n*(l[0]-1)+l[1]*(o-t));let d=t-o,f=n,h=rt(Zo[0].slice(1),[e,r]),g=rt(Zo[1].slice(1),[e,r]),m=rt(Zo[2].slice(1),[e,r]),y=d+f*h,k=d+f*g,x=d+f*m,C=o*(1-u)+u*t,E=u*n,I=C+E*h,j=C+E*g,K=C+E*m,ae=I**3,Te=j**3,me=K**3,Me=3*y*I**2,Xe=3*k*j**2,Qe=3*x*K**2,Or=6*y**2*I,_t=6*k**2*j,wt=6*x**2*K,io=rt(s[0],[ae,Te,me])-1,Wr=rt(s[0],[Me,Xe,Qe]),qn=rt(s[0],[Or,_t,wt]),so=Wr/(Wr*Wr-.5*io*qn),an=-io*so,et=rt(s[1],[ae,Te,me])-1,qe=rt(s[1],[Me,Xe,Qe]),Br=rt(s[1],[Or,_t,wt]),ln=qe/(qe*qe-.5*et*Br),dt=-et*ln,un=rt(s[2],[ae,Te,me])-1,xn=rt(s[2],[Me,Xe,Qe]),Po=rt(s[2],[Or,_t,wt]),cu=xn/(xn*xn-.5*un*Po),fs=-un*cu;an=so>=0?an:Mf,dt=ln>=0?dt:Mf,fs=cu>=0?fs:Mf,u+=Math.min(an,Math.min(dt,fs))}return u}i(v9,"findGamutIntersection");function Sw(e,r,t){let[n,o,s]=e,a=rd(o,s,r,t),l=v9(o,s,n,1,n,r,t,a),u=vg(a),d=l/Math.min(n*u[0],(1-n)*u[1]),f=b9(o,s),h=n*f[0],g=(1-n)*f[1],m=.9*d*Math.sqrt(Math.sqrt(1/(1/h**4+1/g**4)));return h=n*.4,g=(1-n)*.8,[Math.sqrt(1/(1/h**2+1/g**2)),m,l]}i(Sw,"getCs");function y9(e,r,t,n){let o,s,a,l,u,d,f,h;rt(n[0][0],[e,r])>1?([o,s,a,l,u]=n[0][1],[d,f,h]=t[0]):rt(n[1][0],[e,r])>1?([o,s,a,l,u]=n[1][1],[d,f,h]=t[1]):([o,s,a,l,u]=n[2][1],[d,f,h]=t[2]);let g=o+s*e+a*r+l*e**2+u*e*r,m=rt(Zo[0].slice(1),[e,r]),y=rt(Zo[1].slice(1),[e,r]),k=rt(Zo[2].slice(1),[e,r]),x=1+g*m,C=1+g*y,E=1+g*k,I=x**3,j=C**3,K=E**3,ae=3*m*x**2,Te=3*y*C**2,me=3*k*E**2,Me=6*m**2*x,Xe=6*y**2*C,Qe=6*k**2*E,Or=d*I+f*j+h*K,_t=d*ae+f*Te+h*me,wt=d*Me+f*Xe+h*Qe;return g=g-Or*_t/(_t**2-.5*Or*wt),g}i(y9,"computeMaxSaturation");function w9(e,r,t){let[n,o,s]=e,a=Is(s),l=null,u=null;if(n=bn(n)/360,a!==0&&a!==1&&o!==0){let d=Math.cos(Zs*n),f=Math.sin(Zs*n),[h,g,m]=Sw([a,d,f],r,t),y=.8,k=1.25,x,C,E,I;o<y?(x=k*o,C=0,E=y*h,I=1-E/g):(x=5*(o-.8),C=g,E=.2*g**2*1.25**2/h,I=1-E/(m-g));let j=C+x*E/(1-I*x);l=j*d,u=j*f}return[a,l,u]}i(w9,"okhslToOklab");function $9(e,r,t){let n=1e-7,o=1e-4,s=e[0],a=0,l=al(s),u=Math.sqrt(e[1]**2+e[2]**2),d=.5+Math.atan2(-e[2],-e[1])/Zs;if(l!==0&&l!==1&&u!==0){let h=e[1]/u,g=e[2]/u,[m,y,k]=Sw([s,h,g],r,t),x=.8,C=1.25,E,I,j,K;u<y?(I=x*m,j=1-I/y,K=u/(I+j*u),a=K*x):(E=y,I=.2*y**2*C**2/m,j=1-I/(k-y),K=(u-E)/(I+j*(u-E)),a=x+.2*K)}const f=Math.abs(a)<o;return f||l===0||Math.abs(1-l)<n?(d=null,f||(a=0)):d=bn(d*360),[d,a,l]}i($9,"oklabToOkhsl");var k9=new Z({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:In,gamutSpace:"self",fromBase(e){return $9(e,bc,vc)},toBase(e){return w9(e,bc,vc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Tw=new Z({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:In,fromBase(e){return[al(e[0]),e[1],e[2]]},toBase(e){return[Is(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),x9=new Z({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Tw,fromBase:Xt.fromBase,toBase:Xt.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function D9(e,r,t){let[n,o,s]=e;n=bn(n)/360;let a=Is(s),l=null,u=null;if(a!==0&&o!==0){let d=Math.cos(Zs*n),f=Math.sin(Zs*n),h=rd(d,f,r,t),[g,m]=vg(h),y=.5,k=1-y/g,x=1-o*y/(y+m-m*k*o),C=o*m*y/(y+m-m*k*o);a=s*x;let E=s*C,I=Is(x),j=C*I/x,K=Is(a);E=E*K/a,a=K;let[ae,Te,me]=yg([I,d*j,f*j],r),Me=Ar(1/Math.max(Math.max(ae,Te),Math.max(me,0)),1/3);a=a*Me,E=E*Me,l=E*d,u=E*f}return[a,l,u]}i(D9,"okhsvToOklab");function C9(e,r,t){let n=1e-4,o=e[0],s=0,a=al(o),l=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/Zs;if(o!==0&&o!==1&&l!==0){let d=e[1]/l,f=e[2]/l,h=rd(d,f,r,t),[g,m]=vg(h),y=.5,k=1-y/g,x=m/(l+o*m),C=x*o,E=x*l,I=Is(C),j=E*I/C,[K,ae,Te]=yg([I,d*j,f*j],r),me=Ar(1/Math.max(Math.max(K,ae),Math.max(Te,0)),1/3);o=o/me,l=l/me,l=l*al(o)/o,o=al(o),a=o/C,s=(y+m)*E/(m*y+m*k*E)}return Math.abs(s)<n||a===0?u=null:u=bn(u*360),[u,s,a]}i(C9,"oklabToOkhsv");var E9=new Z({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:In,gamutSpace:"self",fromBase(e){return C9(e,bc,vc)},toBase(e){return D9(e,bc,vc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let Nw=xt.D65;const A9=216/24389,Lb=24389/27,[jb,_b]=ed({space:ot,coords:Nw});var Pw=new Z({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Nw,base:ot,fromBase(e){let r=[Er(e[0]),Er(e[1]),Er(e[2])],t=r[1],[n,o]=ed({space:ot,coords:r});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let s=t<=A9?Lb*t:116*Math.cbrt(t)-16;return[s,13*s*(n-jb),13*s*(o-_b)]},toBase(e){let[r,t,n]=e;if(r===0||Oe(r))return[0,0,0];t=Er(t),n=Er(n);let o=t/(13*r)+jb,s=n/(13*r)+_b,a=r<=8?r/Lb:Math.pow((r+16)/116,3);return[a*(9*o/(4*s)),a,a*((12-3*o-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),wg=new Z({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Pw,fromBase:Xt.fromBase,toBase:Xt.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const M9=216/24389,F9=24389/27,Ub=Vr[0][0],zb=Vr[0][1],Ff=Vr[0][2],Vb=Vr[1][0],qb=Vr[1][1],Sf=Vr[1][2],Wb=Vr[2][0],Kb=Vr[2][1],Tf=Vr[2][2];function vs(e,r,t){const n=r/(Math.sin(t)-e*Math.cos(t));return n<0?1/0:n}i(vs,"distanceFromOriginAngle");function yc(e){const r=Math.pow(e+16,3)/1560896,t=r>M9?r:e/F9,n=t*(284517*Ub-94839*Ff),o=t*(838422*Ff+769860*zb+731718*Ub),s=t*(632260*Ff-126452*zb),a=t*(284517*Vb-94839*Sf),l=t*(838422*Sf+769860*qb+731718*Vb),u=t*(632260*Sf-126452*qb),d=t*(284517*Wb-94839*Tf),f=t*(838422*Tf+769860*Kb+731718*Wb),h=t*(632260*Tf-126452*Kb);return{r0s:n/s,r0i:o*e/s,r1s:n/(s+126452),r1i:(o-769860)*e/(s+126452),g0s:a/u,g0i:l*e/u,g1s:a/(u+126452),g1i:(l-769860)*e/(u+126452),b0s:d/h,b0i:f*e/h,b1s:d/(h+126452),b1i:(f-769860)*e/(h+126452)}}i(yc,"calculateBoundingLines");function Gb(e,r){const t=r/360*Math.PI*2,n=vs(e.r0s,e.r0i,t),o=vs(e.r1s,e.r1i,t),s=vs(e.g0s,e.g0i,t),a=vs(e.g1s,e.g1i,t),l=vs(e.b0s,e.b0i,t),u=vs(e.b1s,e.b1i,t);return Math.min(n,o,s,a,l,u)}i(Gb,"calcMaxChromaHsluv");var S9=new Z({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:wg,gamutSpace:Vi,fromBase(e){let[r,t,n]=[Er(e[0]),Er(e[1]),Er(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let s=yc(r),a=Gb(s,n);o=t/a*100}return[n,o,r]},toBase(e){let[r,t,n]=[Er(e[0]),Er(e[1]),Er(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let s=yc(n);o=Gb(s,r)/100*t}return[n,o,r]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Vr[0][0];Vr[0][1];Vr[0][2];Vr[1][0];Vr[1][1];Vr[1][2];Vr[2][0];Vr[2][1];Vr[2][2];function ys(e,r){return Math.abs(r)/Math.sqrt(Math.pow(e,2)+1)}i(ys,"distanceFromOrigin");function Hb(e){let r=ys(e.r0s,e.r0i),t=ys(e.r1s,e.r1i),n=ys(e.g0s,e.g0i),o=ys(e.g1s,e.g1i),s=ys(e.b0s,e.b0i),a=ys(e.b1s,e.b1i);return Math.min(r,t,n,o,s,a)}i(Hb,"calcMaxChromaHpluv");var T9=new Z({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:wg,gamutSpace:"self",fromBase(e){let[r,t,n]=[Er(e[0]),Er(e[1]),Er(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let s=yc(r),a=Hb(s);o=t/a*100}return[n,o,r]},toBase(e){let[r,t,n]=[Er(e[0]),Er(e[1]),Er(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let s=yc(n);o=Hb(s)/100*t}return[n,o,r]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),$g=new vt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:kl.toBase,fromBase:kl.fromBase});const Zb=203,Yb=2610/2**14,N9=2**14/2610,P9=2523/2**5,Jb=2**5/2523,Xb=3424/2**12,Qb=2413/2**7,e1=2392/2**7;var I9=new vt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:$g,toBase(e){return e.map(function(r){return(Math.max(r**Jb-Xb,0)/(Qb-e1*r**Jb))**N9*1e4/Zb})},fromBase(e){return e.map(function(r){let t=Math.max(r*Zb/1e4,0),n=Xb+Qb*t**Yb,o=1+e1*t**Yb;return(n/o)**P9})}});const r1=.17883277,t1=.28466892,n1=.55991073,Nf=3.7743;var O9=new vt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:$g,toBase(e){return e.map(function(r){return r<=.5?r**2/3*Nf:(Math.exp((r-n1)/r1)+t1)/12*Nf})},fromBase(e){return e.map(function(r){return r/=Nf,r<=1/12?Ar(3*r,.5):r1*Math.log(12*r-t1)+n1})}});const Iw={};ei.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Ow(e.W1,e.W2,e.options.method))});ei.add("chromatic-adaptation-end",e=>{e.M||(e.M=Ow(e.W1,e.W2,e.options.method))});function td({id:e,toCone_M:r,fromCone_M:t}){Iw[e]=arguments[0]}i(td,"defineCAT");function Ow(e,r,t="Bradford"){let n=Iw[t],[o,s,a]=Ka(n.toCone_M,e),[l,u,d]=Ka(n.toCone_M,r),f=[[l/o,0,0],[0,u/s,0],[0,0,d/a]],h=Ka(f,n.toCone_M);return Ka(n.fromCone_M,h)}i(Ow,"adapt");td({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});td({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});td({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});td({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(xt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});xt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const B9=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],R9=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Bw=new vt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:xt.ACES,toXYZ_M:B9,fromXYZ_M:R9});const Eu=2**-16,Pf=-.35828683,Au=(Math.log2(65504)+9.72)/17.52;var L9=new vt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Pf,Au],name:"Red"},g:{range:[Pf,Au],name:"Green"},b:{range:[Pf,Au],name:"Blue"}},referred:"scene",base:Bw,toBase(e){const r=-.3013698630136986;return e.map(function(t){return t<=r?(2**(t*17.52-9.72)-Eu)*2:t<Au?2**(t*17.52-9.72):65504})},fromBase(e){return e.map(function(r){return r<=0?(Math.log2(Eu)+9.72)/17.52:r<Eu?(Math.log2(Eu+r*.5)+9.72)/17.52:(Math.log2(r)+9.72)/17.52})}}),o1=Object.freeze({__proto__:null,A98RGB:u9,A98RGB_Linear:Mw,ACEScc:L9,ACEScg:Bw,CAM16_JMh:m8,HCT:$l,HPLuv:T9,HSL:i9,HSLuv:S9,HSV:Aw,HWB:s9,ICTCP:H0,JzCzHz:G0,Jzazbz:aw,LCH:Xt,LCHuv:wg,Lab:Gt,Lab_D65:J0,Luv:Pw,OKLCH:p9,OKLab:In,OKLrCH:x9,OKLrab:Tw,Okhsl:k9,Okhsv:E9,P3:ww,P3_Linear:vw,ProPhoto:g9,ProPhoto_Linear:Fw,REC_2020:bw,REC_2020_Linear:kl,REC_2020_Scene_Referred:m9,REC_2100_HLG:O9,REC_2100_Linear:$g,REC_2100_PQ:I9,XYZ_ABS_D65:gg,XYZ_D50:hg,XYZ_D65:ot,sRGB:Vi,sRGB_Linear:yw});let Ye=class St{static{i(this,"Color")}constructor(...r){let t;if(r.length===1){let a={};typeof r[0]=="object"&&Object.getPrototypeOf(r[0]).constructor===Object&&(r[0]={...r[0]}),t=se(r[0],{parseMeta:a}),a.format&&(this.parseMeta=a)}let n,o,s;t?(n=t.space||t.spaceId,o=t.coords,s=t.alpha):[n,o,s]=r,Object.defineProperty(this,"space",{value:Z.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Oe(s)?s:s===void 0?1:Xc(0,s,1);for(let a in this.space.coords)Object.defineProperty(this,a,{get:i(()=>this.get(a),"get"),set:i(l=>this.set(a,l),"set")})}get spaceId(){return this.space.id}clone(){return new St(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...r){let t=T8(this,...r);return t.color=new St(t.color),t}static get(r,...t){return Ks(r,this)?r:new St(r,...t)}static try(r,t){if(Ks(r,this))return r;let n=nw(r,t);return n?new St(n):null}static defineFunction(r,t,n=t){let{instance:o=!0,returns:s}=n,a=i(function(...l){let u=t(...l);if(s==="color")u=St.get(u);else if(s==="function<color>"){let d=u;u=i(function(...f){let h=d(...f);return St.get(h)},"ret"),Object.assign(u,d)}else s==="array<color>"&&(u=u.map(d=>St.get(d)));return u},"func");r in St||(St[r]=a),o&&(St.prototype[r]=function(...l){return a(this,...l)})}static defineFunctions(r){for(let t in r)St.defineFunction(t,r[t],r[t])}static extend(r){if(r.register)r.register(St);else for(let t in r)St.defineFunction(t,r[t])}};Ye.defineFunctions({get:Kt,getAll:Wl,set:Ao,setAll:fg,to:Ze,equals:P8,inGamut:Bi,toGamut:ri,distance:sw,deltas:N8,toString:il});Object.assign(Ye,{util:SD,hooks:ei,WHITES:xt,Space:Z,spaces:Z.registry,parse:rw,defaults:Jt});for(let e of Object.keys(o1))Z.register(o1[e]);for(let e in Z.registry)X0(e,Z.registry[e]);ei.add("colorspace-init-end",e=>{X0(e.id,e),e.aliases?.forEach(r=>{X0(r,e)})});function X0(e,r){let t=e.replace(/-/g,"_");Object.defineProperty(Ye.prototype,t,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:i(((s,a)=>{try{return Z.resolveCoord([r,a]),!0}catch{}return Reflect.has(s,a)}),"has"),get:i((s,a,l)=>{if(a&&typeof a!="symbol"&&!(a in s)&&a in o){let{index:u}=Z.resolveCoord([r,a]);if(u>=0)return s[u]}return Reflect.get(s,a,l)},"get"),set:i((s,a,l,u)=>{if(a&&typeof a!="symbol"&&!(a in s)||Number(a)>=0){let{index:d}=Z.resolveCoord([r,a]);if(d>=0)return s[d]=l,this.setAll(e,s),!0}return Reflect.set(s,a,l,u)},"set")});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}i(X0,"addSpaceAccessors");Ye.extend(Hs);Ye.extend({deltaE:Ga});Object.assign(Ye,{deltaEMethods:Hs});Ye.extend(t9);Ye.extend({contrast:Q8});Ye.extend(r9);Ye.extend(O8);Ye.extend(o9);Ye.extend(Gu);const Rw=Symbol("no update");function i1(e){return e!==Rw}i(i1,"isNotNoUpdate");class If extends _n()("observable-value-update"){static{i(this,"ObservableValueUpdateEvent")}}class j9 extends _n()("observable-value-resolve"){static{i(this,"ObservableValueResolveEvent")}}class _9 extends _n()("observable-value-error"){static{i(this,"ObservableValueErrorEvent")}}class U9 extends Yh("observable-destroy"){static{i(this,"ObservableDestroyEvent")}}class z9 extends Yh("observable-callback-call"){static{i(this,"ObservableCallbackCallEvent")}}class V9 extends _n()("observable-params-update"){static{i(this,"ObservableParamsUpdateEvent")}}class Lw{static{i(this,"AnyObservable")}listenTarget=new Jh;value;equalityCheck;listenerMap=new WeakMap;dispatch(...r){return this.listenTarget.dispatch(...r)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...r){const t=r[0];if(t===Rw)return!1;if(!(r.length===2?r[1]:this.equalityCheck)?.(this.value,t)){const o=this.value;return this.value=t,this.listenTarget.dispatch(new If({detail:[t,o]})),!0}return!1}listen(r,t){const n=i(o=>t(...o.detail),"mapped");return this.listenerMap.set(t,n),r&&t(this.value,void 0),this.listenTarget.listen(If,n)}removeListener(r){const t=this.listenerMap.get(r);return!!t&&this.listenTarget.removeListener(If,t)}destroy(){this.listenTarget.dispatch(new U9),this.listenTarget.destroy()}listenToEvent(r,t,n){return this.listenTarget.listen(r,t,n)}}function kg(e,r){return a6(e,r,(t,n)=>F.isFunction(t)&&F.isFunction(n)?!0:F.strictEquals(t,n))}i(kg,"observableEqualityCheck");var ll;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(ll||(ll={}));class q9 extends Lw{static{i(this,"AsyncObservable")}equalityCheck;waitingForValueDeferredPromise=new nc;lastSetPromise;lastSetId=Ii();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(r={}){super(),this.equalityCheck="equalityCheck"in r?r.equalityCheck:kg,"defaultValue"in r&&this.setValue(r.defaultValue)}setPromise(r){if(r===this.lastSetPromise)return!1;const t=Ii();return this.lastSetId=t,this.lastSetPromise=r,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new nc,super.setValue(this.waitingForValueDeferredPromise.promise,F.strictEquals)),r.then(n=>{this.lastSetPromise!==r||this.lastSetId!==t||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==r||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=wr(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(r){return i1(r)||(r=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(r,F.strictEquals):super.setValue(r))?(this.lastResolvedValue=r,this.lastSetId=Ii(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(r),this.dispatch(new j9({detail:r})),!0):!1}rejectValue(r){this.waitingForValueDeferredPromise.reject(r),super.setValue(r,F.strictEquals),this.dispatch(new _9({detail:r}))}setValue(r){try{return r instanceof Promise?this.setPromise(r):r instanceof Error?(this.rejectValue(r),!0):i1(r)?this.resolveValue(r):!1}catch(t){return this.rejectValue(wr(t)),!0}}listen(r,t){return super.listen(r,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?ll.Rejected:this.value instanceof Promise?ll.Waiting:ll.Resolved}}class Cs extends q9{static{i(this,"CallbackObservable")}static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Cs.NotSet)return this.internalParams}internalParams;constructor(r={}){super(r),this.equalityCheck="equalityCheck"in r?r.equalityCheck:kg,this.updateCallback=r.updateCallback,this.internalParams="defaultParams"in r?r.defaultParams:Cs.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Cs.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(r){return this.setValue(wr(r))}finally{this.dispatch(new z9)}}updateLastParams(r){try{return this.internalParams===Cs.NotSet||!this.equalityCheck?.(r,this.internalParams)?(this.internalParams=r,this.dispatch(new V9({detail:this.internalParams})),!0):!1}catch(t){return this.setValue(wr(t)),!1}}update(...[r]){return this.updateLastParams(r)?(this.updateFromCallback(),!0):!1}setParams(r){return this.updateLastParams(r)}forceUpdate(...r){return F.isLengthAtLeast(r,1)&&this.updateLastParams(r[0]),this.updateFromCallback()}}function W9(e){return Nr(e)&&!jt(e)&&!Hl(e)&&Symbol.asyncIterator in e}i(W9,"IsAsyncIterator$3");function jt(e){return Array.isArray(e)}i(jt,"IsArray$3");function jw(e){return typeof e=="bigint"}i(jw,"IsBigInt$3");function Gl(e){return typeof e=="boolean"}i(Gl,"IsBoolean$3");function xg(e){return e instanceof globalThis.Date}i(xg,"IsDate$3");function K9(e){return typeof e=="function"}i(K9,"IsFunction$3");function G9(e){return Nr(e)&&!jt(e)&&!Hl(e)&&Symbol.iterator in e}i(G9,"IsIterator$3");function H9(e){return e===null}i(H9,"IsNull$3");function ro(e){return typeof e=="number"}i(ro,"IsNumber$3");function Nr(e){return typeof e=="object"&&e!==null}i(Nr,"IsObject$3");function _w(e){return e instanceof globalThis.RegExp}i(_w,"IsRegExp$2");function xr(e){return typeof e=="string"}i(xr,"IsString$3");function Z9(e){return typeof e=="symbol"}i(Z9,"IsSymbol$3");function Hl(e){return e instanceof globalThis.Uint8Array}i(Hl,"IsUint8Array$3");function Mr(e){return e===void 0}i(Mr,"IsUndefined$3");function Y9(e){return e.map(r=>wc(r))}i(Y9,"ArrayType$1");function J9(e){return new Date(e.getTime())}i(J9,"DateType$1");function X9(e){return new Uint8Array(e)}i(X9,"Uint8ArrayType$1");function Q9(e){return new RegExp(e.source,e.flags)}i(Q9,"RegExpType");function eC(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=wc(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=wc(e[t]);return r}i(eC,"ObjectType$1");function wc(e){return jt(e)?Y9(e):xg(e)?J9(e):Hl(e)?X9(e):_w(e)?Q9(e):Nr(e)?eC(e):e}i(wc,"Visit$8");function Qt(e){return wc(e)}i(Qt,"Clone");function Dg(e,r){return Qt(r===void 0?e:{...r,...e})}i(Dg,"CloneType");function Uw(e){return to(e)&&globalThis.Symbol.asyncIterator in e}i(Uw,"IsAsyncIterator$2");function zw(e){return to(e)&&globalThis.Symbol.iterator in e}i(zw,"IsIterator$2");function Vw(e){return e instanceof globalThis.Promise}i(Vw,"IsPromise$2");function Cg(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}i(Cg,"IsDate$2");function Eg(e){return e instanceof globalThis.Uint8Array}i(Eg,"IsUint8Array$2");function qw(e,r){return r in e}i(qw,"HasPropertyKey");function to(e){return e!==null&&typeof e=="object"}i(to,"IsObject$2");function en(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}i(en,"IsArray$2");function ci(e){return e===void 0}i(ci,"IsUndefined$2");function nd(e){return e===null}i(nd,"IsNull$2");function od(e){return typeof e=="boolean"}i(od,"IsBoolean$2");function ge(e){return typeof e=="number"}i(ge,"IsNumber$2");function Ww(e){return globalThis.Number.isInteger(e)}i(Ww,"IsInteger$2");function bo(e){return typeof e=="bigint"}i(bo,"IsBigInt$2");function Zt(e){return typeof e=="string"}i(Zt,"IsString$2");function Kw(e){return typeof e=="function"}i(Kw,"IsFunction$2");function id(e){return typeof e=="symbol"}i(id,"IsSymbol$2");function Gw(e){return bo(e)||od(e)||nd(e)||ge(e)||Zt(e)||id(e)||ci(e)}i(Gw,"IsValueType");var kr;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function r(a,l){return e.ExactOptionalPropertyTypes?l in a:a[l]!==void 0}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(a){const l=to(a);return e.AllowArrayObject?l:l&&!en(a)}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(a){return t(a)&&!(a instanceof Date)&&!(a instanceof Uint8Array)}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(a){return e.AllowNaN?ge(a):Number.isFinite(a)}i(o,"IsNumberLike"),e.IsNumberLike=o;function s(a){const l=ci(a);return e.AllowNullVoid?l||a===null:l}i(s,"IsVoidLike"),e.IsVoidLike=s})(kr||(kr={}));function rC(e){return globalThis.Object.freeze(e).map(r=>$c(r))}i(rC,"ImmutableArray");function tC(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=$c(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=$c(e[t]);return globalThis.Object.freeze(r)}i(tC,"ImmutableObject");function $c(e){return jt(e)?rC(e):xg(e)?e:Hl(e)?e:_w(e)?e:Nr(e)?tC(e):e}i($c,"Immutable");function z(e,r){const t=r!==void 0?{...r,...e}:e;switch(kr.InstanceMode){case"freeze":return $c(t);case"clone":return Qt(t);default:return t}}i(z,"CreateType");class lt extends Error{static{i(this,"TypeBoxError")}constructor(r){super(r)}}const It=Symbol.for("TypeBox.Transform"),Zl=Symbol.for("TypeBox.Readonly"),Fo=Symbol.for("TypeBox.Optional"),sd=Symbol.for("TypeBox.Hint"),_=Symbol.for("TypeBox.Kind");function Ag(e){return Nr(e)&&e[Zl]==="Readonly"}i(Ag,"IsReadonly");function di(e){return Nr(e)&&e[Fo]==="Optional"}i(di,"IsOptional$1");function Hw(e){return Ce(e,"Any")}i(Hw,"IsAny$1");function Zw(e){return Ce(e,"Argument")}i(Zw,"IsArgument$1");function da(e){return Ce(e,"Array")}i(da,"IsArray$1");function ad(e){return Ce(e,"AsyncIterator")}i(ad,"IsAsyncIterator$1");function ld(e){return Ce(e,"BigInt")}i(ld,"IsBigInt$1");function Yl(e){return Ce(e,"Boolean")}i(Yl,"IsBoolean$1");function fa(e){return Ce(e,"Computed")}i(fa,"IsComputed$1");function ha(e){return Ce(e,"Constructor")}i(ha,"IsConstructor$1");function nC(e){return Ce(e,"Date")}i(nC,"IsDate$1");function ga(e){return Ce(e,"Function")}i(ga,"IsFunction$1");function ma(e){return Ce(e,"Integer")}i(ma,"IsInteger$1");function wn(e){return Ce(e,"Intersect")}i(wn,"IsIntersect$1");function ud(e){return Ce(e,"Iterator")}i(ud,"IsIterator$1");function Ce(e,r){return Nr(e)&&_ in e&&e[_]===r}i(Ce,"IsKindOf$1");function Yw(e){return Gl(e)||ro(e)||xr(e)}i(Yw,"IsLiteralValue$1");function es(e){return Ce(e,"Literal")}i(es,"IsLiteral$1");function rs(e){return Ce(e,"MappedKey")}i(rs,"IsMappedKey$1");function on(e){return Ce(e,"MappedResult")}i(on,"IsMappedResult$1");function Jl(e){return Ce(e,"Never")}i(Jl,"IsNever$1");function oC(e){return Ce(e,"Not")}i(oC,"IsNot$1");function Mg(e){return Ce(e,"Null")}i(Mg,"IsNull$1");function pa(e){return Ce(e,"Number")}i(pa,"IsNumber$1");function Un(e){return Ce(e,"Object")}i(Un,"IsObject$1");function cd(e){return Ce(e,"Promise")}i(cd,"IsPromise$1");function dd(e){return Ce(e,"Record")}i(dd,"IsRecord$1");function Rt(e){return Ce(e,"Ref")}i(Rt,"IsRef$1");function Jw(e){return Ce(e,"RegExp")}i(Jw,"IsRegExp$1");function Xl(e){return Ce(e,"String")}i(Xl,"IsString$1");function Fg(e){return Ce(e,"Symbol")}i(Fg,"IsSymbol$1");function ts(e){return Ce(e,"TemplateLiteral")}i(ts,"IsTemplateLiteral$1");function iC(e){return Ce(e,"This")}i(iC,"IsThis$1");function Je(e){return Nr(e)&&It in e}i(Je,"IsTransform$1");function ns(e){return Ce(e,"Tuple")}i(ns,"IsTuple$1");function Ql(e){return Ce(e,"Undefined")}i(Ql,"IsUndefined$1");function Qr(e){return Ce(e,"Union")}i(Qr,"IsUnion$1");function sC(e){return Ce(e,"Uint8Array")}i(sC,"IsUint8Array$1");function aC(e){return Ce(e,"Unknown")}i(aC,"IsUnknown$1");function lC(e){return Ce(e,"Unsafe")}i(lC,"IsUnsafe$1");function uC(e){return Ce(e,"Void")}i(uC,"IsVoid$1");function cC(e){return Nr(e)&&_ in e&&xr(e[_])}i(cC,"IsKind$1");function Ct(e){return Hw(e)||Zw(e)||da(e)||Yl(e)||ld(e)||ad(e)||fa(e)||ha(e)||nC(e)||ga(e)||ma(e)||wn(e)||ud(e)||es(e)||rs(e)||on(e)||Jl(e)||oC(e)||Mg(e)||pa(e)||Un(e)||cd(e)||dd(e)||Rt(e)||Jw(e)||Xl(e)||Fg(e)||ts(e)||iC(e)||ns(e)||Ql(e)||Qr(e)||sC(e)||aC(e)||lC(e)||uC(e)||cC(e)}i(Ct,"IsSchema$1");const dC=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Xw(e){try{return new RegExp(e),!0}catch{return!1}}i(Xw,"IsPattern");function Sg(e){if(!xr(e))return!1;for(let r=0;r<e.length;r++){const t=e.charCodeAt(r);if(t>=7&&t<=13||t===27||t===127)return!1}return!0}i(Sg,"IsControlCharacterFree");function Qw(e){return Tg(e)||dr(e)}i(Qw,"IsAdditionalProperties");function Oa(e){return Mr(e)||jw(e)}i(Oa,"IsOptionalBigInt");function We(e){return Mr(e)||ro(e)}i(We,"IsOptionalNumber");function Tg(e){return Mr(e)||Gl(e)}i(Tg,"IsOptionalBoolean");function Ue(e){return Mr(e)||xr(e)}i(Ue,"IsOptionalString");function fC(e){return Mr(e)||xr(e)&&Sg(e)&&Xw(e)}i(fC,"IsOptionalPattern");function hC(e){return Mr(e)||xr(e)&&Sg(e)}i(hC,"IsOptionalFormat");function e5(e){return Mr(e)||dr(e)}i(e5,"IsOptionalSchema");function kc(e){return Nr(e)&&e[Fo]==="Optional"}i(kc,"IsOptional");function On(e){return Ee(e,"Any")&&Ue(e.$id)}i(On,"IsAny");function gC(e){return Ee(e,"Argument")&&ro(e.index)}i(gC,"IsArgument");function os(e){return Ee(e,"Array")&&e.type==="array"&&Ue(e.$id)&&dr(e.items)&&We(e.minItems)&&We(e.maxItems)&&Tg(e.uniqueItems)&&e5(e.contains)&&We(e.minContains)&&We(e.maxContains)}i(os,"IsArray");function Ng(e){return Ee(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Ue(e.$id)&&dr(e.items)}i(Ng,"IsAsyncIterator");function fd(e){return Ee(e,"BigInt")&&e.type==="bigint"&&Ue(e.$id)&&Oa(e.exclusiveMaximum)&&Oa(e.exclusiveMinimum)&&Oa(e.maximum)&&Oa(e.minimum)&&Oa(e.multipleOf)}i(fd,"IsBigInt");function is(e){return Ee(e,"Boolean")&&e.type==="boolean"&&Ue(e.$id)}i(is,"IsBoolean");function mC(e){return Ee(e,"Computed")&&xr(e.target)&&jt(e.parameters)&&e.parameters.every(r=>dr(r))}i(mC,"IsComputed");function hd(e){return Ee(e,"Constructor")&&e.type==="Constructor"&&Ue(e.$id)&&jt(e.parameters)&&e.parameters.every(r=>dr(r))&&dr(e.returns)}i(hd,"IsConstructor");function gd(e){return Ee(e,"Date")&&e.type==="Date"&&Ue(e.$id)&&We(e.exclusiveMaximumTimestamp)&&We(e.exclusiveMinimumTimestamp)&&We(e.maximumTimestamp)&&We(e.minimumTimestamp)&&We(e.multipleOfTimestamp)}i(gd,"IsDate");function md(e){return Ee(e,"Function")&&e.type==="Function"&&Ue(e.$id)&&jt(e.parameters)&&e.parameters.every(r=>dr(r))&&dr(e.returns)}i(md,"IsFunction");function So(e){return Ee(e,"Integer")&&e.type==="integer"&&Ue(e.$id)&&We(e.exclusiveMaximum)&&We(e.exclusiveMinimum)&&We(e.maximum)&&We(e.minimum)&&We(e.multipleOf)}i(So,"IsInteger");function r5(e){return Nr(e)&&Object.entries(e).every(([r,t])=>Sg(r)&&dr(t))}i(r5,"IsProperties");function ss(e){return Ee(e,"Intersect")&&!(xr(e.type)&&e.type!=="object")&&jt(e.allOf)&&e.allOf.every(r=>dr(r)&&!$C(r))&&Ue(e.type)&&(Tg(e.unevaluatedProperties)||e5(e.unevaluatedProperties))&&Ue(e.$id)}i(ss,"IsIntersect");function Pg(e){return Ee(e,"Iterator")&&e.type==="Iterator"&&Ue(e.$id)&&dr(e.items)}i(Pg,"IsIterator");function Ee(e,r){return Nr(e)&&_ in e&&e[_]===r}i(Ee,"IsKindOf");function t5(e){return fi(e)&&xr(e.const)}i(t5,"IsLiteralString");function n5(e){return fi(e)&&ro(e.const)}i(n5,"IsLiteralNumber");function o5(e){return fi(e)&&Gl(e.const)}i(o5,"IsLiteralBoolean");function fi(e){return Ee(e,"Literal")&&Ue(e.$id)&&pC(e.const)}i(fi,"IsLiteral");function pC(e){return Gl(e)||ro(e)||xr(e)}i(pC,"IsLiteralValue");function bC(e){return Ee(e,"MappedKey")&&jt(e.keys)&&e.keys.every(r=>ro(r)||xr(r))}i(bC,"IsMappedKey");function vC(e){return Ee(e,"MappedResult")&&r5(e.properties)}i(vC,"IsMappedResult");function hi(e){return Ee(e,"Never")&&Nr(e.not)&&Object.getOwnPropertyNames(e.not).length===0}i(hi,"IsNever");function Ys(e){return Ee(e,"Not")&&dr(e.not)}i(Ys,"IsNot");function Ig(e){return Ee(e,"Null")&&e.type==="null"&&Ue(e.$id)}i(Ig,"IsNull");function Ot(e){return Ee(e,"Number")&&e.type==="number"&&Ue(e.$id)&&We(e.exclusiveMaximum)&&We(e.exclusiveMinimum)&&We(e.maximum)&&We(e.minimum)&&We(e.multipleOf)}i(Ot,"IsNumber");function hr(e){return Ee(e,"Object")&&e.type==="object"&&Ue(e.$id)&&r5(e.properties)&&Qw(e.additionalProperties)&&We(e.minProperties)&&We(e.maxProperties)}i(hr,"IsObject");function Og(e){return Ee(e,"Promise")&&e.type==="Promise"&&Ue(e.$id)&&dr(e.item)}i(Og,"IsPromise");function st(e){return Ee(e,"Record")&&e.type==="object"&&Ue(e.$id)&&Qw(e.additionalProperties)&&Nr(e.patternProperties)&&(r=>{const t=Object.getOwnPropertyNames(r.patternProperties);return t.length===1&&Xw(t[0])&&Nr(r.patternProperties)&&dr(r.patternProperties[t[0]])})(e)}i(st,"IsRecord");function yC(e){return Ee(e,"Ref")&&Ue(e.$id)&&xr(e.$ref)}i(yC,"IsRef");function xl(e){return Ee(e,"RegExp")&&Ue(e.$id)&&xr(e.source)&&xr(e.flags)&&We(e.maxLength)&&We(e.minLength)}i(xl,"IsRegExp");function Bn(e){return Ee(e,"String")&&e.type==="string"&&Ue(e.$id)&&We(e.minLength)&&We(e.maxLength)&&fC(e.pattern)&&hC(e.format)}i(Bn,"IsString");function Dl(e){return Ee(e,"Symbol")&&e.type==="symbol"&&Ue(e.$id)}i(Dl,"IsSymbol");function Cl(e){return Ee(e,"TemplateLiteral")&&e.type==="string"&&xr(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}i(Cl,"IsTemplateLiteral");function wC(e){return Ee(e,"This")&&Ue(e.$id)&&xr(e.$ref)}i(wC,"IsThis");function $C(e){return Nr(e)&&It in e}i($C,"IsTransform");function pd(e){return Ee(e,"Tuple")&&e.type==="array"&&Ue(e.$id)&&ro(e.minItems)&&ro(e.maxItems)&&e.minItems===e.maxItems&&(Mr(e.items)&&Mr(e.additionalItems)&&e.minItems===0||jt(e.items)&&e.items.every(r=>dr(r)))}i(pd,"IsTuple");function qi(e){return Ee(e,"Undefined")&&e.type==="undefined"&&Ue(e.$id)}i(qi,"IsUndefined");function Mo(e){return Ee(e,"Union")&&Ue(e.$id)&&Nr(e)&&jt(e.anyOf)&&e.anyOf.every(r=>dr(r))}i(Mo,"IsUnion");function eu(e){return Ee(e,"Uint8Array")&&e.type==="Uint8Array"&&Ue(e.$id)&&We(e.minByteLength)&&We(e.maxByteLength)}i(eu,"IsUint8Array");function Rn(e){return Ee(e,"Unknown")&&Ue(e.$id)}i(Rn,"IsUnknown");function kC(e){return Ee(e,"Unsafe")}i(kC,"IsUnsafe");function bd(e){return Ee(e,"Void")&&e.type==="void"&&Ue(e.$id)}i(bd,"IsVoid");function xC(e){return Nr(e)&&_ in e&&xr(e[_])&&!dC.includes(e[_])}i(xC,"IsKind");function dr(e){return Nr(e)&&(On(e)||gC(e)||os(e)||is(e)||fd(e)||Ng(e)||mC(e)||hd(e)||gd(e)||md(e)||So(e)||ss(e)||Pg(e)||fi(e)||bC(e)||vC(e)||hi(e)||Ys(e)||Ig(e)||Ot(e)||hr(e)||Og(e)||st(e)||yC(e)||xl(e)||Bn(e)||Dl(e)||Cl(e)||wC(e)||pd(e)||qi(e)||Mo(e)||eu(e)||Rn(e)||kC(e)||bd(e)||xC(e))}i(dr,"IsSchema");const DC="(true|false)",Hu="(0|[1-9][0-9]*)",i5="(.*)",CC="(?!.*)",Js=`^${Hu}$`,Xs=`^${i5}$`,EC=`^${CC}$`,s5=new Map;function Bg(e){return s5.has(e)}i(Bg,"Has$1");function Rg(e){return s5.get(e)}i(Rg,"Get$1");const Lg=new Map;function ni(e){return Lg.has(e)}i(ni,"Has");function jg(e,r){Lg.set(e,r)}i(jg,"Set$1");function _g(e){return Lg.get(e)}i(_g,"Get");function AC(e,r){return e.includes(r)}i(AC,"SetIncludes");function MC(e){return[...new Set(e)]}i(MC,"SetDistinct");function FC(e,r){return e.filter(t=>r.includes(t))}i(FC,"SetIntersect");function SC(e,r){return e.reduce((t,n)=>FC(t,n),r)}i(SC,"SetIntersectManyResolve");function TC(e){return e.length===1?e[0]:e.length>1?SC(e.slice(1),e[0]):[]}i(TC,"SetIntersectMany");function NC(e){const r=[];for(const t of e)r.push(...t);return r}i(NC,"SetUnionMany");function El(e){return z({[_]:"Any"},e)}i(El,"Any");function Ug(e,r){return z({[_]:"Array",type:"array",items:e},r)}i(Ug,"Array$1");function PC(e){return z({[_]:"Argument",index:e})}i(PC,"Argument");function zg(e,r){return z({[_]:"AsyncIterator",type:"AsyncIterator",items:e},r)}i(zg,"AsyncIterator");function Ur(e,r,t){return z({[_]:"Computed",target:e,parameters:r},t)}i(Ur,"Computed");function IC(e,r){const{[r]:t,...n}=e;return n}i(IC,"DiscardKey");function rn(e,r){return r.reduce((t,n)=>IC(t,n),e)}i(rn,"Discard");function gr(e){return z({[_]:"Never",not:{}},e)}i(gr,"Never");function ut(e){return z({[_]:"MappedResult",properties:e})}i(ut,"MappedResult");function Vg(e,r,t){return z({[_]:"Constructor",type:"Constructor",parameters:e,returns:r},t)}i(Vg,"Constructor");function ru(e,r,t){return z({[_]:"Function",type:"Function",parameters:e,returns:r},t)}i(ru,"Function");function Q0(e,r){return z({[_]:"Union",anyOf:e},r)}i(Q0,"UnionCreate");function OC(e){return e.some(r=>di(r))}i(OC,"IsUnionOptional");function s1(e){return e.map(r=>di(r)?BC(r):r)}i(s1,"RemoveOptionalFromRest$1");function BC(e){return rn(e,[Fo])}i(BC,"RemoveOptionalFromType$1");function RC(e,r){return OC(e)?pi(Q0(s1(e),r)):Q0(s1(e),r)}i(RC,"ResolveUnion");function ba(e,r){return e.length===1?z(e[0],r):e.length===0?gr(r):RC(e,r)}i(ba,"UnionEvaluated");function ct(e,r){return e.length===0?gr(r):e.length===1?z(e[0],r):Q0(e,r)}i(ct,"Union$1");class a1 extends lt{static{i(this,"TemplateLiteralParserError")}}function LC(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}i(LC,"Unescape");function qg(e,r,t){return e[r]===t&&e.charCodeAt(r-1)!==92}i(qg,"IsNonEscaped");function ko(e,r){return qg(e,r,"(")}i(ko,"IsOpenParen");function Al(e,r){return qg(e,r,")")}i(Al,"IsCloseParen");function a5(e,r){return qg(e,r,"|")}i(a5,"IsSeparator");function jC(e){if(!(ko(e,0)&&Al(e,e.length-1)))return!1;let r=0;for(let t=0;t<e.length;t++)if(ko(e,t)&&(r+=1),Al(e,t)&&(r-=1),r===0&&t!==e.length-1)return!1;return!0}i(jC,"IsGroup");function _C(e){return e.slice(1,e.length-1)}i(_C,"InGroup");function UC(e){let r=0;for(let t=0;t<e.length;t++)if(ko(e,t)&&(r+=1),Al(e,t)&&(r-=1),a5(e,t)&&r===0)return!0;return!1}i(UC,"IsPrecedenceOr");function zC(e){for(let r=0;r<e.length;r++)if(ko(e,r))return!0;return!1}i(zC,"IsPrecedenceAnd");function VC(e){let[r,t]=[0,0];const n=[];for(let s=0;s<e.length;s++)if(ko(e,s)&&(r+=1),Al(e,s)&&(r-=1),a5(e,s)&&r===0){const a=e.slice(t,s);a.length>0&&n.push(Qs(a)),t=s+1}const o=e.slice(t);return o.length>0&&n.push(Qs(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}i(VC,"Or");function qC(e){function r(o,s){if(!ko(o,s))throw new a1("TemplateLiteralParser: Index must point to open parens");let a=0;for(let l=s;l<o.length;l++)if(ko(o,l)&&(a+=1),Al(o,l)&&(a-=1),a===0)return[s,l];throw new a1("TemplateLiteralParser: Unclosed group parens in expression")}i(r,"Group");function t(o,s){for(let a=s;a<o.length;a++)if(ko(o,a))return[s,a];return[s,o.length]}i(t,"Range");const n=[];for(let o=0;o<e.length;o++)if(ko(e,o)){const[s,a]=r(e,o),l=e.slice(s,a+1);n.push(Qs(l)),o=a}else{const[s,a]=t(e,o),l=e.slice(s,a);l.length>0&&n.push(Qs(l)),o=a-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}i(qC,"And");function Qs(e){return jC(e)?Qs(_C(e)):UC(e)?VC(e):zC(e)?qC(e):{type:"const",const:LC(e)}}i(Qs,"TemplateLiteralParse");function Wg(e){return Qs(e.slice(1,e.length-1))}i(Wg,"TemplateLiteralParseExact");class WC extends lt{static{i(this,"TemplateLiteralFiniteError")}}function KC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}i(KC,"IsNumberExpression");function GC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}i(GC,"IsBooleanExpression");function HC(e){return e.type==="const"&&e.const===".*"}i(HC,"IsStringExpression");function Ml(e){return KC(e)||HC(e)?!1:GC(e)?!0:e.type==="and"?e.expr.every(r=>Ml(r)):e.type==="or"?e.expr.every(r=>Ml(r)):e.type==="const"?!0:(()=>{throw new WC("Unknown expression type")})()}i(Ml,"IsTemplateLiteralExpressionFinite");function ZC(e){const r=Wg(e.pattern);return Ml(r)}i(ZC,"IsTemplateLiteralFinite");class YC extends lt{static{i(this,"TemplateLiteralGenerateError")}}function*l5(e){if(e.length===1)return yield*e[0];for(const r of e[0])for(const t of l5(e.slice(1)))yield`${r}${t}`}i(l5,"GenerateReduce");function*JC(e){return yield*l5(e.expr.map(r=>[...vd(r)]))}i(JC,"GenerateAnd");function*XC(e){for(const r of e.expr)yield*vd(r)}i(XC,"GenerateOr");function*QC(e){return yield e.const}i(QC,"GenerateConst");function*vd(e){return e.type==="and"?yield*JC(e):e.type==="or"?yield*XC(e):e.type==="const"?yield*QC(e):(()=>{throw new YC("Unknown expression")})()}i(vd,"TemplateLiteralExpressionGenerate");function u5(e){const r=Wg(e.pattern);return Ml(r)?[...vd(r)]:[]}i(u5,"TemplateLiteralGenerate");function Sr(e,r){return z({[_]:"Literal",const:e,type:typeof e},r)}i(Sr,"Literal");function c5(e){return z({[_]:"Boolean",type:"boolean"},e)}i(c5,"Boolean$1");function Kg(e){return z({[_]:"BigInt",type:"bigint"},e)}i(Kg,"BigInt$1");function as(e){return z({[_]:"Number",type:"number"},e)}i(as,"Number$1");function Wi(e){return z({[_]:"String",type:"string"},e)}i(Wi,"String$1");function*eE(e){const r=e.trim().replace(/"|'/g,"");return r==="boolean"?yield c5():r==="number"?yield as():r==="bigint"?yield Kg():r==="string"?yield Wi():yield(()=>{const t=r.split("|").map(n=>Sr(n.trim()));return t.length===0?gr():t.length===1?t[0]:ba(t)})()}i(eE,"FromUnion$e");function*rE(e){if(e[1]!=="{"){const r=Sr("$"),t=eh(e.slice(1));return yield*[r,...t]}for(let r=2;r<e.length;r++)if(e[r]==="}"){const t=eE(e.slice(2,r)),n=eh(e.slice(r+1));return yield*[...t,...n]}yield Sr(e)}i(rE,"FromTerminal");function*eh(e){for(let r=0;r<e.length;r++)if(e[r]==="$"){const t=Sr(e.slice(0,r)),n=rE(e.slice(r));return yield*[t,...n]}yield Sr(e)}i(eh,"FromSyntax");function tE(e){return[...eh(e)]}i(tE,"TemplateLiteralSyntax");class nE extends lt{static{i(this,"TemplateLiteralPatternError")}}function oE(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}i(oE,"Escape");function d5(e,r){return ts(e)?e.pattern.slice(1,e.pattern.length-1):Qr(e)?`(${e.anyOf.map(t=>d5(t,r)).join("|")})`:pa(e)?`${r}${Hu}`:ma(e)?`${r}${Hu}`:ld(e)?`${r}${Hu}`:Xl(e)?`${r}${i5}`:es(e)?`${r}${oE(e.const.toString())}`:Yl(e)?`${r}${DC}`:(()=>{throw new nE(`Unexpected Kind '${e[_]}'`)})()}i(d5,"Visit$7");function l1(e){return`^${e.map(r=>d5(r,"")).join("")}$`}i(l1,"TemplateLiteralPattern");function xc(e){const t=u5(e).map(n=>Sr(n));return ba(t)}i(xc,"TemplateLiteralToUnion");function f5(e,r){const t=xr(e)?l1(tE(e)):l1(e);return z({[_]:"TemplateLiteral",type:"string",pattern:t},r)}i(f5,"TemplateLiteral");function iE(e){return u5(e).map(t=>t.toString())}i(iE,"FromTemplateLiteral$4");function sE(e){const r=[];for(const t of e)r.push(...gi(t));return r}i(sE,"FromUnion$d");function aE(e){return[e.toString()]}i(aE,"FromLiteral$3");function gi(e){return[...new Set(ts(e)?iE(e):Qr(e)?sE(e.anyOf):es(e)?aE(e.const):pa(e)?["[number]"]:ma(e)?["[number]"]:[])]}i(gi,"IndexPropertyKeys");function lE(e,r,t){const n={};for(const o of Object.getOwnPropertyNames(r))n[o]=yd(e,gi(r[o]),t);return n}i(lE,"FromProperties$i");function uE(e,r,t){return lE(e,r.properties,t)}i(uE,"FromMappedResult$b");function cE(e,r,t){const n=uE(e,r,t);return ut(n)}i(cE,"IndexFromMappedResult");function h5(e,r){return e.map(t=>g5(t,r))}i(h5,"FromRest$6");function dE(e){return e.filter(r=>!Jl(r))}i(dE,"FromIntersectRest");function fE(e,r){return b5(dE(h5(e,r)))}i(fE,"FromIntersect$c");function hE(e){return e.some(r=>Jl(r))?[]:e}i(hE,"FromUnionRest");function gE(e,r){return ba(hE(h5(e,r)))}i(gE,"FromUnion$c");function mE(e,r){return r in e?e[r]:r==="[number]"?ba(e):gr()}i(mE,"FromTuple$9");function pE(e,r){return r==="[number]"?e:gr()}i(pE,"FromArray$a");function bE(e,r){return r in e?e[r]:gr()}i(bE,"FromProperty$2");function g5(e,r){return wn(e)?fE(e.allOf,r):Qr(e)?gE(e.anyOf,r):ns(e)?mE(e.items??[],r):da(e)?pE(e.items,r):Un(e)?bE(e.properties,r):gr()}i(g5,"IndexFromPropertyKey");function Gg(e,r){return r.map(t=>g5(e,t))}i(Gg,"IndexFromPropertyKeys");function u1(e,r){return ba(Gg(e,r))}i(u1,"FromSchema");function yd(e,r,t){if(Rt(e)||Rt(r)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Ct(e)||!Ct(r))throw new lt(n);return Ur("Index",[e,r])}return on(r)?cE(e,r,t):rs(r)?$E(e,r,t):z(Ct(r)?u1(e,gi(r)):u1(e,r),t)}i(yd,"Index");function vE(e,r,t){return{[r]:yd(e,[r],Qt(t))}}i(vE,"MappedIndexPropertyKey");function yE(e,r,t){return r.reduce((n,o)=>({...n,...vE(e,o,t)}),{})}i(yE,"MappedIndexPropertyKeys");function wE(e,r,t){return yE(e,r.keys,t)}i(wE,"MappedIndexProperties");function $E(e,r,t){const n=wE(e,r,t);return ut(n)}i($E,"IndexFromMappedKey");function Hg(e,r){return z({[_]:"Iterator",type:"Iterator",items:e},r)}i(Hg,"Iterator");function kE(e){return globalThis.Object.keys(e).filter(r=>!di(e[r]))}i(kE,"RequiredArray");function xE(e,r){const t=kE(e),n=t.length>0?{[_]:"Object",type:"object",required:t,properties:e}:{[_]:"Object",type:"object",properties:e};return z(n,r)}i(xE,"_Object");var Xr=xE;function m5(e,r){return z({[_]:"Promise",type:"Promise",item:e},r)}i(m5,"Promise$1");function DE(e){return z(rn(e,[Zl]))}i(DE,"RemoveReadonly");function CE(e){return z({...e,[Zl]:"Readonly"})}i(CE,"AddReadonly");function EE(e,r){return r===!1?DE(e):CE(e)}i(EE,"ReadonlyWithFlag");function mi(e,r){const t=r??!0;return on(e)?FE(e,t):EE(e,t)}i(mi,"Readonly");function AE(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=mi(e[n],r);return t}i(AE,"FromProperties$h");function ME(e,r){return AE(e.properties,r)}i(ME,"FromMappedResult$a");function FE(e,r){const t=ME(e,r);return ut(t)}i(FE,"ReadonlyFromMappedResult");function va(e,r){return z(e.length>0?{[_]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[_]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},r)}i(va,"Tuple");function p5(e,r){return e in r?fn(e,r[e]):ut(r)}i(p5,"FromMappedResult$9");function SE(e){return{[e]:Sr(e)}}i(SE,"MappedKeyToKnownMappedResultProperties");function TE(e){const r={};for(const t of e)r[t]=Sr(t);return r}i(TE,"MappedKeyToUnknownMappedResultProperties");function NE(e,r){return AC(r,e)?SE(e):TE(r)}i(NE,"MappedKeyToMappedResultProperties");function PE(e,r){const t=NE(e,r);return p5(e,t)}i(PE,"FromMappedKey$3");function Ba(e,r){return r.map(t=>fn(e,t))}i(Ba,"FromRest$5");function IE(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(r))t[n]=fn(e,r[n]);return t}i(IE,"FromProperties$g");function fn(e,r){const t={...r};return di(r)?pi(fn(e,rn(r,[Fo]))):Ag(r)?mi(fn(e,rn(r,[Zl]))):on(r)?p5(e,r.properties):rs(r)?PE(e,r.keys):ha(r)?Vg(Ba(e,r.parameters),fn(e,r.returns),t):ga(r)?ru(Ba(e,r.parameters),fn(e,r.returns),t):ad(r)?zg(fn(e,r.items),t):ud(r)?Hg(fn(e,r.items),t):wn(r)?bi(Ba(e,r.allOf),t):Qr(r)?ct(Ba(e,r.anyOf),t):ns(r)?va(Ba(e,r.items??[]),t):Un(r)?Xr(IE(e,r.properties),t):da(r)?Ug(fn(e,r.items),t):cd(r)?m5(fn(e,r.item),t):r}i(fn,"FromSchemaType");function OE(e,r){const t={};for(const n of e)t[n]=fn(n,r);return t}i(OE,"MappedFunctionReturnType");function BE(e,r,t){const n=Ct(e)?gi(e):e,o=r({[_]:"MappedKey",keys:n}),s=OE(n,o);return Xr(s,t)}i(BE,"Mapped");function RE(e){return z(rn(e,[Fo]))}i(RE,"RemoveOptional");function LE(e){return z({...e,[Fo]:"Optional"})}i(LE,"AddOptional");function jE(e,r){return r===!1?RE(e):LE(e)}i(jE,"OptionalWithFlag");function pi(e,r){const t=r??!0;return on(e)?zE(e,t):jE(e,t)}i(pi,"Optional");function _E(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=pi(e[n],r);return t}i(_E,"FromProperties$f");function UE(e,r){return _E(e.properties,r)}i(UE,"FromMappedResult$8");function zE(e,r){const t=UE(e,r);return ut(t)}i(zE,"OptionalFromMappedResult");function rh(e,r={}){const t=e.every(o=>Un(o)),n=Ct(r.unevaluatedProperties)?{unevaluatedProperties:r.unevaluatedProperties}:{};return z(r.unevaluatedProperties===!1||Ct(r.unevaluatedProperties)||t?{...n,[_]:"Intersect",type:"object",allOf:e}:{...n,[_]:"Intersect",allOf:e},r)}i(rh,"IntersectCreate");function VE(e){return e.every(r=>di(r))}i(VE,"IsIntersectOptional");function qE(e){return rn(e,[Fo])}i(qE,"RemoveOptionalFromType");function c1(e){return e.map(r=>di(r)?qE(r):r)}i(c1,"RemoveOptionalFromRest");function WE(e,r){return VE(e)?pi(rh(c1(e),r)):rh(c1(e),r)}i(WE,"ResolveIntersect");function b5(e,r={}){if(e.length===1)return z(e[0],r);if(e.length===0)return gr(r);if(e.some(t=>Je(t)))throw new Error("Cannot intersect transform types");return WE(e,r)}i(b5,"IntersectEvaluated");function bi(e,r){if(e.length===1)return z(e[0],r);if(e.length===0)return gr(r);if(e.some(t=>Je(t)))throw new Error("Cannot intersect transform types");return rh(e,r)}i(bi,"Intersect$1");function ya(...e){const[r,t]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof r!="string")throw new lt("Ref: $ref must be a string");return z({[_]:"Ref",$ref:r},t)}i(ya,"Ref");function KE(e,r){return Ur("Awaited",[Ur(e,r)])}i(KE,"FromComputed$4");function GE(e){return Ur("Awaited",[ya(e)])}i(GE,"FromRef$8");function HE(e){return bi(v5(e))}i(HE,"FromIntersect$b");function ZE(e){return ct(v5(e))}i(ZE,"FromUnion$b");function YE(e){return wd(e)}i(YE,"FromPromise$5");function v5(e){return e.map(r=>wd(r))}i(v5,"FromRest$4");function wd(e,r){return z(fa(e)?KE(e.target,e.parameters):wn(e)?HE(e.allOf):Qr(e)?ZE(e.anyOf):cd(e)?YE(e.item):Rt(e)?GE(e.$ref):e,r)}i(wd,"Awaited");function y5(e){const r=[];for(const t of e)r.push(ls(t));return r}i(y5,"FromRest$3");function JE(e){const r=y5(e);return NC(r)}i(JE,"FromIntersect$a");function XE(e){const r=y5(e);return TC(r)}i(XE,"FromUnion$a");function QE(e){return e.map((r,t)=>t.toString())}i(QE,"FromTuple$8");function eA(e){return["[number]"]}i(eA,"FromArray$9");function rA(e){return globalThis.Object.getOwnPropertyNames(e)}i(rA,"FromProperties$e");function tA(e){return th?globalThis.Object.getOwnPropertyNames(e).map(t=>t[0]==="^"&&t[t.length-1]==="$"?t.slice(1,t.length-1):t):[]}i(tA,"FromPatternProperties");function ls(e){return wn(e)?JE(e.allOf):Qr(e)?XE(e.anyOf):ns(e)?QE(e.items??[]):da(e)?eA(e.items):Un(e)?rA(e.properties):dd(e)?tA(e.patternProperties):[]}i(ls,"KeyOfPropertyKeys");let th=!1;function ea(e){th=!0;const r=ls(e);return th=!1,`^(${r.map(n=>`(${n})`).join("|")})$`}i(ea,"KeyOfPattern");function nA(e,r){return Ur("KeyOf",[Ur(e,r)])}i(nA,"FromComputed$3");function oA(e){return Ur("KeyOf",[ya(e)])}i(oA,"FromRef$7");function iA(e,r){const t=ls(e),n=sA(t),o=ba(n);return z(o,r)}i(iA,"KeyOfFromType");function sA(e){return e.map(r=>r==="[number]"?as():Sr(r))}i(sA,"KeyOfPropertyKeysToRest");function Zg(e,r){return fa(e)?nA(e.target,e.parameters):Rt(e)?oA(e.$ref):on(e)?uA(e,r):iA(e,r)}i(Zg,"KeyOf");function aA(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Zg(e[n],Qt(r));return t}i(aA,"FromProperties$d");function lA(e,r){return aA(e.properties,r)}i(lA,"FromMappedResult$7");function uA(e,r){const t=lA(e,r);return ut(t)}i(uA,"KeyOfFromMappedResult");function w5(e){const r=ls(e),t=Gg(e,r);return r.map((n,o)=>[r[o],t[o]])}i(w5,"KeyOfPropertyEntries");function cA(e){const r=[];for(const t of e)r.push(...ls(t));return MC(r)}i(cA,"CompositeKeys");function dA(e){return e.filter(r=>!Jl(r))}i(dA,"FilterNever");function fA(e,r){const t=[];for(const n of e)t.push(...Gg(n,[r]));return dA(t)}i(fA,"CompositeProperty");function hA(e,r){const t={};for(const n of r)t[n]=b5(fA(e,n));return t}i(hA,"CompositeProperties");function gA(e,r){const t=cA(e),n=hA(e,t);return Xr(n,r)}i(gA,"Composite");function $5(e){return z({[_]:"Date",type:"Date"},e)}i($5,"Date$1");function k5(e){return z({[_]:"Null",type:"null"},e)}i(k5,"Null");function x5(e){return z({[_]:"Symbol",type:"symbol"},e)}i(x5,"Symbol$1");function D5(e){return z({[_]:"Undefined",type:"undefined"},e)}i(D5,"Undefined");function C5(e){return z({[_]:"Uint8Array",type:"Uint8Array"},e)}i(C5,"Uint8Array$1");function $d(e){return z({[_]:"Unknown"},e)}i($d,"Unknown");function mA(e){return e.map(r=>Yg(r,!1))}i(mA,"FromArray$8");function pA(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=mi(Yg(e[t],!1));return r}i(pA,"FromProperties$c");function Mu(e,r){return r===!0?e:mi(e)}i(Mu,"ConditionalReadonly");function Yg(e,r){return W9(e)||G9(e)?Mu(El(),r):jt(e)?mi(va(mA(e))):Hl(e)?C5():xg(e)?$5():Nr(e)?Mu(Xr(pA(e)),r):K9(e)?Mu(ru([],$d()),r):Mr(e)?D5():H9(e)?k5():Z9(e)?x5():jw(e)?Kg():ro(e)||Gl(e)||xr(e)?Sr(e):Xr({})}i(Yg,"FromValue");function bA(e,r){return z(Yg(e,!0),r)}i(bA,"Const");function vA(e,r){return ha(e)?va(e.parameters,r):gr(r)}i(vA,"ConstructorParameters");function yA(e,r){if(Mr(e))throw new Error("Enum undefined or empty");const t=globalThis.Object.getOwnPropertyNames(e).filter(s=>isNaN(s)).map(s=>e[s]),o=[...new Set(t)].map(s=>Sr(s));return ct(o,{...r,[sd]:"Enum"})}i(yA,"Enum");class wA extends lt{static{i(this,"ExtendsResolverError")}}var N;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(N||(N={}));function vn(e){return e===N.False?e:N.True}i(vn,"IntoBooleanResult");function wa(e){throw new wA(e)}i(wa,"Throw");function Pr(e){return hi(e)||ss(e)||Mo(e)||Rn(e)||On(e)}i(Pr,"IsStructuralRight");function Ir(e,r){return hi(r)?M5():ss(r)?kd(e,r):Mo(r)?Xg(e,r):Rn(r)?N5():On(r)?Jg():wa("StructuralRight")}i(Ir,"StructuralRight");function Jg(e,r){return N.True}i(Jg,"FromAnyRight");function $A(e,r){return ss(r)?kd(e,r):Mo(r)&&r.anyOf.some(t=>On(t)||Rn(t))?N.True:Mo(r)?N.Union:Rn(r)||On(r)?N.True:N.Union}i($A,"FromAny$2");function kA(e,r){return Rn(e)?N.False:On(e)?N.Union:hi(e)?N.True:N.False}i(kA,"FromArrayRight");function xA(e,r){return hr(r)&&xd(r)?N.True:Pr(r)?Ir(e,r):os(r)?vn(_e(e.items,r.items)):N.False}i(xA,"FromArray$7");function DA(e,r){return Pr(r)?Ir(e,r):Ng(r)?vn(_e(e.items,r.items)):N.False}i(DA,"FromAsyncIterator$5");function CA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):fd(r)?N.True:N.False}i(CA,"FromBigInt$2");function E5(e,r){return o5(e)||is(e)?N.True:N.False}i(E5,"FromBooleanRight");function EA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):is(r)?N.True:N.False}i(EA,"FromBoolean$2");function AA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):hd(r)?e.parameters.length>r.parameters.length?N.False:e.parameters.every((t,n)=>vn(_e(r.parameters[n],t))===N.True)?vn(_e(e.returns,r.returns)):N.False:N.False}i(AA,"FromConstructor$5");function MA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):gd(r)?N.True:N.False}i(MA,"FromDate$2");function FA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):md(r)?e.parameters.length>r.parameters.length?N.False:e.parameters.every((t,n)=>vn(_e(r.parameters[n],t))===N.True)?vn(_e(e.returns,r.returns)):N.False:N.False}i(FA,"FromFunction$5");function A5(e,r){return fi(e)&&ro(e.const)||Ot(e)||So(e)?N.True:N.False}i(A5,"FromIntegerRight");function SA(e,r){return So(r)||Ot(r)?N.True:Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):N.False}i(SA,"FromInteger$2");function kd(e,r){return r.allOf.every(t=>_e(e,t)===N.True)?N.True:N.False}i(kd,"FromIntersectRight");function TA(e,r){return e.allOf.some(t=>_e(t,r)===N.True)?N.True:N.False}i(TA,"FromIntersect$9");function NA(e,r){return Pr(r)?Ir(e,r):Pg(r)?vn(_e(e.items,r.items)):N.False}i(NA,"FromIterator$5");function PA(e,r){return fi(r)&&r.const===e.const?N.True:Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):Bn(r)?T5(e):Ot(r)?F5(e):So(r)?A5(e):is(r)?E5(e):N.False}i(PA,"FromLiteral$2");function M5(e,r){return N.False}i(M5,"FromNeverRight");function IA(e,r){return N.True}i(IA,"FromNever$2");function d1(e){let[r,t]=[e,0];for(;Ys(r);)r=r.not,t+=1;return t%2===0?r:$d()}i(d1,"UnwrapTNot");function OA(e,r){return Ys(e)?_e(d1(e),r):Ys(r)?_e(e,d1(r)):wa("Invalid fallthrough for Not")}i(OA,"FromNot$5");function BA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):Ig(r)?N.True:N.False}i(BA,"FromNull$2");function F5(e,r){return n5(e)||Ot(e)||So(e)?N.True:N.False}i(F5,"FromNumberRight");function RA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):So(r)||Ot(r)?N.True:N.False}i(RA,"FromNumber$2");function Lt(e,r){return Object.getOwnPropertyNames(e.properties).length===r}i(Lt,"IsObjectPropertyCount");function f1(e){return xd(e)}i(f1,"IsObjectStringLike");function h1(e){return Lt(e,0)||Lt(e,1)&&"description"in e.properties&&Mo(e.properties.description)&&e.properties.description.anyOf.length===2&&(Bn(e.properties.description.anyOf[0])&&qi(e.properties.description.anyOf[1])||Bn(e.properties.description.anyOf[1])&&qi(e.properties.description.anyOf[0]))}i(h1,"IsObjectSymbolLike");function Of(e){return Lt(e,0)}i(Of,"IsObjectNumberLike");function g1(e){return Lt(e,0)}i(g1,"IsObjectBooleanLike");function LA(e){return Lt(e,0)}i(LA,"IsObjectBigIntLike");function jA(e){return Lt(e,0)}i(jA,"IsObjectDateLike");function _A(e){return xd(e)}i(_A,"IsObjectUint8ArrayLike");function UA(e){const r=as();return Lt(e,0)||Lt(e,1)&&"length"in e.properties&&vn(_e(e.properties.length,r))===N.True}i(UA,"IsObjectFunctionLike");function zA(e){return Lt(e,0)}i(zA,"IsObjectConstructorLike");function xd(e){const r=as();return Lt(e,0)||Lt(e,1)&&"length"in e.properties&&vn(_e(e.properties.length,r))===N.True}i(xd,"IsObjectArrayLike");function VA(e){const r=ru([El()],El());return Lt(e,0)||Lt(e,1)&&"then"in e.properties&&vn(_e(e.properties.then,r))===N.True}i(VA,"IsObjectPromiseLike");function S5(e,r){return _e(e,r)===N.False||kc(e)&&!kc(r)?N.False:N.True}i(S5,"Property");function yt(e,r){return Rn(e)?N.False:On(e)?N.Union:hi(e)||t5(e)&&f1(r)||n5(e)&&Of(r)||o5(e)&&g1(r)||Dl(e)&&h1(r)||fd(e)&&LA(r)||Bn(e)&&f1(r)||Dl(e)&&h1(r)||Ot(e)&&Of(r)||So(e)&&Of(r)||is(e)&&g1(r)||eu(e)&&_A(r)||gd(e)&&jA(r)||hd(e)&&zA(r)||md(e)&&UA(r)?N.True:st(e)&&Bn(nh(e))?r[sd]==="Record"?N.True:N.False:st(e)&&Ot(nh(e))&&Lt(r,0)?N.True:N.False}i(yt,"FromObjectRight");function qA(e,r){return Pr(r)?Ir(e,r):st(r)?$n(e,r):hr(r)?(()=>{for(const t of Object.getOwnPropertyNames(r.properties)){if(!(t in e.properties)&&!kc(r.properties[t]))return N.False;if(kc(r.properties[t]))return N.True;if(S5(e.properties[t],r.properties[t])===N.False)return N.False}return N.True})():N.False}i(qA,"FromObject$b");function WA(e,r){return Pr(r)?Ir(e,r):hr(r)&&VA(r)?N.True:Og(r)?vn(_e(e.item,r.item)):N.False}i(WA,"FromPromise$4");function nh(e){return Js in e.patternProperties?as():Xs in e.patternProperties?Wi():wa("Unknown record key pattern")}i(nh,"RecordKey$1");function oh(e){return Js in e.patternProperties?e.patternProperties[Js]:Xs in e.patternProperties?e.patternProperties[Xs]:wa("Unable to get record value schema")}i(oh,"RecordValue$1");function $n(e,r){const[t,n]=[nh(r),oh(r)];return t5(e)&&Ot(t)&&vn(_e(e,n))===N.True?N.True:eu(e)&&Ot(t)||Bn(e)&&Ot(t)||os(e)&&Ot(t)?_e(e,n):hr(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(S5(n,e.properties[o])===N.False)return N.False;return N.True})():N.False}i($n,"FromRecordRight");function KA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?_e(oh(e),oh(r)):N.False}i(KA,"FromRecord$7");function GA(e,r){const t=xl(e)?Wi():e,n=xl(r)?Wi():r;return _e(t,n)}i(GA,"FromRegExp$2");function T5(e,r){return fi(e)&&xr(e.const)||Bn(e)?N.True:N.False}i(T5,"FromStringRight");function HA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):Bn(r)?N.True:N.False}i(HA,"FromString$2");function ZA(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):Dl(r)?N.True:N.False}i(ZA,"FromSymbol$2");function YA(e,r){return Cl(e)?_e(xc(e),r):Cl(r)?_e(e,xc(r)):wa("Invalid fallthrough for TemplateLiteral")}i(YA,"FromTemplateLiteral$3");function JA(e,r){return os(r)&&e.items!==void 0&&e.items.every(t=>_e(t,r.items)===N.True)}i(JA,"IsArrayOfTuple");function XA(e,r){return hi(e)?N.True:Rn(e)?N.False:On(e)?N.Union:N.False}i(XA,"FromTupleRight");function QA(e,r){return Pr(r)?Ir(e,r):hr(r)&&xd(r)||os(r)&&JA(e,r)?N.True:pd(r)?Mr(e.items)&&!Mr(r.items)||!Mr(e.items)&&Mr(r.items)?N.False:Mr(e.items)&&!Mr(r.items)||e.items.every((t,n)=>_e(t,r.items[n])===N.True)?N.True:N.False:N.False}i(QA,"FromTuple$7");function e7(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):eu(r)?N.True:N.False}i(e7,"FromUint8Array$2");function r7(e,r){return Pr(r)?Ir(e,r):hr(r)?yt(e,r):st(r)?$n(e,r):bd(r)?o7(e):qi(r)?N.True:N.False}i(r7,"FromUndefined$2");function Xg(e,r){return r.anyOf.some(t=>_e(e,t)===N.True)?N.True:N.False}i(Xg,"FromUnionRight");function t7(e,r){return e.anyOf.every(t=>_e(t,r)===N.True)?N.True:N.False}i(t7,"FromUnion$9");function N5(e,r){return N.True}i(N5,"FromUnknownRight");function n7(e,r){return hi(r)?M5():ss(r)?kd(e,r):Mo(r)?Xg(e,r):On(r)?Jg():Bn(r)?T5(e):Ot(r)?F5(e):So(r)?A5(e):is(r)?E5(e):os(r)?kA(e):pd(r)?XA(e):hr(r)?yt(e,r):Rn(r)?N.True:N.False}i(n7,"FromUnknown$2");function o7(e,r){return qi(e)||qi(e)?N.True:N.False}i(o7,"FromVoidRight");function i7(e,r){return ss(r)?kd(e,r):Mo(r)?Xg(e,r):Rn(r)?N5():On(r)?Jg():hr(r)?yt(e,r):bd(r)?N.True:N.False}i(i7,"FromVoid$2");function _e(e,r){return Cl(e)||Cl(r)?YA(e,r):xl(e)||xl(r)?GA(e,r):Ys(e)||Ys(r)?OA(e,r):On(e)?$A(e,r):os(e)?xA(e,r):fd(e)?CA(e,r):is(e)?EA(e,r):Ng(e)?DA(e,r):hd(e)?AA(e,r):gd(e)?MA(e,r):md(e)?FA(e,r):So(e)?SA(e,r):ss(e)?TA(e,r):Pg(e)?NA(e,r):fi(e)?PA(e,r):hi(e)?IA():Ig(e)?BA(e,r):Ot(e)?RA(e,r):hr(e)?qA(e,r):st(e)?KA(e,r):Bn(e)?HA(e,r):Dl(e)?ZA(e,r):pd(e)?QA(e,r):Og(e)?WA(e,r):eu(e)?e7(e,r):qi(e)?r7(e,r):Mo(e)?t7(e,r):Rn(e)?n7(e,r):bd(e)?i7(e,r):wa(`Unknown left type operand '${e[_]}'`)}i(_e,"Visit$6");function tu(e,r){return _e(e,r)}i(tu,"ExtendsCheck");function s7(e,r,t,n,o){const s={};for(const a of globalThis.Object.getOwnPropertyNames(e))s[a]=Qg(e[a],r,t,n,Qt(o));return s}i(s7,"FromProperties$b");function a7(e,r,t,n,o){return s7(e.properties,r,t,n,o)}i(a7,"FromMappedResult$6");function l7(e,r,t,n,o){const s=a7(e,r,t,n,o);return ut(s)}i(l7,"ExtendsFromMappedResult");function u7(e,r,t,n){const o=tu(e,r);return o===N.Union?ct([t,n]):o===N.True?t:n}i(u7,"ExtendsResolve");function Qg(e,r,t,n,o){return on(e)?l7(e,r,t,n,o):rs(e)?z(h7(e,r,t,n,o)):z(u7(e,r,t,n),o)}i(Qg,"Extends");function c7(e,r,t,n,o){return{[e]:Qg(Sr(e),r,t,n,Qt(o))}}i(c7,"FromPropertyKey$2");function d7(e,r,t,n,o){return e.reduce((s,a)=>({...s,...c7(a,r,t,n,o)}),{})}i(d7,"FromPropertyKeys$2");function f7(e,r,t,n,o){return d7(e.keys,r,t,n,o)}i(f7,"FromMappedKey$2");function h7(e,r,t,n,o){const s=f7(e,r,t,n,o);return ut(s)}i(h7,"ExtendsFromMappedKey");function g7(e){return e.allOf.every(r=>$a(r))}i(g7,"Intersect");function m7(e){return e.anyOf.some(r=>$a(r))}i(m7,"Union");function p7(e){return!$a(e.not)}i(p7,"Not$1");function $a(e){return e[_]==="Intersect"?g7(e):e[_]==="Union"?m7(e):e[_]==="Not"?p7(e):e[_]==="Undefined"}i($a,"ExtendsUndefinedCheck");function b7(e,r){return em(xc(e),r)}i(b7,"ExcludeFromTemplateLiteral");function v7(e,r){const t=e.filter(n=>tu(n,r)===N.False);return t.length===1?t[0]:ct(t)}i(v7,"ExcludeRest");function em(e,r,t={}){return ts(e)?z(b7(e,r),t):on(e)?z($7(e,r),t):z(Qr(e)?v7(e.anyOf,r):tu(e,r)!==N.False?gr():e,t)}i(em,"Exclude");function y7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=em(e[n],r);return t}i(y7,"FromProperties$a");function w7(e,r){return y7(e.properties,r)}i(w7,"FromMappedResult$5");function $7(e,r){const t=w7(e,r);return ut(t)}i($7,"ExcludeFromMappedResult");function k7(e,r){return rm(xc(e),r)}i(k7,"ExtractFromTemplateLiteral");function x7(e,r){const t=e.filter(n=>tu(n,r)!==N.False);return t.length===1?t[0]:ct(t)}i(x7,"ExtractRest");function rm(e,r,t){return ts(e)?z(k7(e,r),t):on(e)?z(E7(e,r),t):z(Qr(e)?x7(e.anyOf,r):tu(e,r)!==N.False?e:gr(),t)}i(rm,"Extract");function D7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=rm(e[n],r);return t}i(D7,"FromProperties$9");function C7(e,r){return D7(e.properties,r)}i(C7,"FromMappedResult$4");function E7(e,r){const t=C7(e,r);return ut(t)}i(E7,"ExtractFromMappedResult");function A7(e,r){return ha(e)?z(e.returns,r):gr(r)}i(A7,"InstanceType");function P5(e){return mi(pi(e))}i(P5,"ReadonlyOptional");function us(e,r,t){return z({[_]:"Record",type:"object",patternProperties:{[e]:r}},t)}i(us,"RecordCreateFromPattern");function tm(e,r,t){const n={};for(const o of e)n[o]=r;return Xr(n,{...t,[sd]:"Record"})}i(tm,"RecordCreateFromKeys");function M7(e,r,t){return ZC(e)?tm(gi(e),r,t):us(e.pattern,r,t)}i(M7,"FromTemplateLiteralKey");function F7(e,r,t){return tm(gi(ct(e)),r,t)}i(F7,"FromUnionKey");function S7(e,r,t){return tm([e.toString()],r,t)}i(S7,"FromLiteralKey");function T7(e,r,t){return us(e.source,r,t)}i(T7,"FromRegExpKey");function N7(e,r,t){const n=Mr(e.pattern)?Xs:e.pattern;return us(n,r,t)}i(N7,"FromStringKey");function P7(e,r,t){return us(Xs,r,t)}i(P7,"FromAnyKey");function I7(e,r,t){return us(EC,r,t)}i(I7,"FromNeverKey");function O7(e,r,t){return Xr({true:r,false:r},t)}i(O7,"FromBooleanKey");function B7(e,r,t){return us(Js,r,t)}i(B7,"FromIntegerKey");function R7(e,r,t){return us(Js,r,t)}i(R7,"FromNumberKey");function I5(e,r,t={}){return Qr(e)?F7(e.anyOf,r,t):ts(e)?M7(e,r,t):es(e)?S7(e.const,r,t):Yl(e)?O7(e,r,t):ma(e)?B7(e,r,t):pa(e)?R7(e,r,t):Jw(e)?T7(e,r,t):Xl(e)?N7(e,r,t):Hw(e)?P7(e,r,t):Jl(e)?I7(e,r,t):gr(t)}i(I5,"Record");function nm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}i(nm,"RecordPattern");function L7(e){const r=nm(e);return r===Xs?Wi():r===Js?as():Wi({pattern:r})}i(L7,"RecordKey");function O5(e){return e.patternProperties[nm(e)]}i(O5,"RecordValue");function j7(e,r){return r.parameters=nu(e,r.parameters),r.returns=Ln(e,r.returns),r}i(j7,"FromConstructor$4");function _7(e,r){return r.parameters=nu(e,r.parameters),r.returns=Ln(e,r.returns),r}i(_7,"FromFunction$4");function U7(e,r){return r.allOf=nu(e,r.allOf),r}i(U7,"FromIntersect$8");function z7(e,r){return r.anyOf=nu(e,r.anyOf),r}i(z7,"FromUnion$8");function V7(e,r){return Mr(r.items)||(r.items=nu(e,r.items)),r}i(V7,"FromTuple$6");function q7(e,r){return r.items=Ln(e,r.items),r}i(q7,"FromArray$6");function W7(e,r){return r.items=Ln(e,r.items),r}i(W7,"FromAsyncIterator$4");function K7(e,r){return r.items=Ln(e,r.items),r}i(K7,"FromIterator$4");function G7(e,r){return r.item=Ln(e,r.item),r}i(G7,"FromPromise$3");function H7(e,r){const t=X7(e,r.properties);return{...r,...Xr(t)}}i(H7,"FromObject$a");function Z7(e,r){const t=Ln(e,L7(r)),n=Ln(e,O5(r)),o=I5(t,n);return{...r,...o}}i(Z7,"FromRecord$6");function Y7(e,r){return r.index in e?e[r.index]:$d()}i(Y7,"FromArgument$2");function J7(e,r){const t=Ag(r),n=di(r),o=Ln(e,r);return t&&n?P5(o):t&&!n?mi(o):!t&&n?pi(o):o}i(J7,"FromProperty$1");function X7(e,r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:J7(e,r[n])}),{})}i(X7,"FromProperties$8");function nu(e,r){return r.map(t=>Ln(e,t))}i(nu,"FromTypes$1");function Ln(e,r){return ha(r)?j7(e,r):ga(r)?_7(e,r):wn(r)?U7(e,r):Qr(r)?z7(e,r):ns(r)?V7(e,r):da(r)?q7(e,r):ad(r)?W7(e,r):ud(r)?K7(e,r):cd(r)?G7(e,r):Un(r)?H7(e,r):dd(r)?Z7(e,r):Zw(r)?Y7(e,r):r}i(Ln,"FromType$1");function Q7(e,r){return Ln(r,Dg(e))}i(Q7,"Instantiate");function eM(e){return z({[_]:"Integer",type:"integer"},e)}i(eM,"Integer");function rM(e,r,t){return{[e]:ka(Sr(e),r,Qt(t))}}i(rM,"MappedIntrinsicPropertyKey");function tM(e,r,t){return e.reduce((o,s)=>({...o,...rM(s,r,t)}),{})}i(tM,"MappedIntrinsicPropertyKeys");function nM(e,r,t){return tM(e.keys,r,t)}i(nM,"MappedIntrinsicProperties");function oM(e,r,t){const n=nM(e,r,t);return ut(n)}i(oM,"IntrinsicFromMappedKey");function iM(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toLowerCase(),t].join("")}i(iM,"ApplyUncapitalize");function sM(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toUpperCase(),t].join("")}i(sM,"ApplyCapitalize");function aM(e){return e.toUpperCase()}i(aM,"ApplyUppercase");function lM(e){return e.toLowerCase()}i(lM,"ApplyLowercase");function uM(e,r,t){const n=Wg(e.pattern);if(!Ml(n))return{...e,pattern:B5(e.pattern,r)};const a=[...vd(n)].map(d=>Sr(d)),l=R5(a,r),u=ct(l);return f5([u],t)}i(uM,"FromTemplateLiteral$2");function B5(e,r){return typeof e=="string"?r==="Uncapitalize"?iM(e):r==="Capitalize"?sM(e):r==="Uppercase"?aM(e):r==="Lowercase"?lM(e):e:e.toString()}i(B5,"FromLiteralValue");function R5(e,r){return e.map(t=>ka(t,r))}i(R5,"FromRest$2");function ka(e,r,t={}){return rs(e)?oM(e,r,t):ts(e)?uM(e,r,t):Qr(e)?ct(R5(e.anyOf,r),t):es(e)?Sr(B5(e.const,r),t):z(e,t)}i(ka,"Intrinsic");function cM(e,r={}){return ka(e,"Capitalize",r)}i(cM,"Capitalize");function dM(e,r={}){return ka(e,"Lowercase",r)}i(dM,"Lowercase");function fM(e,r={}){return ka(e,"Uncapitalize",r)}i(fM,"Uncapitalize");function hM(e,r={}){return ka(e,"Uppercase",r)}i(hM,"Uppercase");function gM(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=Dd(e[o],r,Qt(t));return n}i(gM,"FromProperties$7");function mM(e,r,t){return gM(e.properties,r,t)}i(mM,"FromMappedResult$3");function pM(e,r,t){const n=mM(e,r,t);return ut(n)}i(pM,"OmitFromMappedResult");function bM(e,r){return e.map(t=>om(t,r))}i(bM,"FromIntersect$7");function vM(e,r){return e.map(t=>om(t,r))}i(vM,"FromUnion$7");function yM(e,r){const{[r]:t,...n}=e;return n}i(yM,"FromProperty");function wM(e,r){return r.reduce((t,n)=>yM(t,n),e)}i(wM,"FromProperties$6");function $M(e,r,t){const n=rn(e,[It,"$id","required","properties"]),o=wM(t,r);return Xr(o,n)}i($M,"FromObject$9");function kM(e){const r=e.reduce((t,n)=>Yw(n)?[...t,Sr(n)]:t,[]);return ct(r)}i(kM,"UnionFromPropertyKeys$1");function om(e,r){return wn(e)?bi(bM(e.allOf,r)):Qr(e)?ct(vM(e.anyOf,r)):Un(e)?$M(e,r,e.properties):Xr({})}i(om,"OmitResolve");function Dd(e,r,t){const n=jt(r)?kM(r):r,o=Ct(r)?gi(r):r,s=Rt(e),a=Rt(r);return on(e)?pM(e,o,t):rs(r)?EM(e,r,t):s&&a?Ur("Omit",[e,n],t):!s&&a?Ur("Omit",[e,n],t):s&&!a?Ur("Omit",[e,n],t):z({...om(e,o),...t})}i(Dd,"Omit");function xM(e,r,t){return{[r]:Dd(e,[r],Qt(t))}}i(xM,"FromPropertyKey$1");function DM(e,r,t){return r.reduce((n,o)=>({...n,...xM(e,o,t)}),{})}i(DM,"FromPropertyKeys$1");function CM(e,r,t){return DM(e,r.keys,t)}i(CM,"FromMappedKey$1");function EM(e,r,t){const n=CM(e,r,t);return ut(n)}i(EM,"OmitFromMappedKey");function AM(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=Cd(e[o],r,Qt(t));return n}i(AM,"FromProperties$5");function MM(e,r,t){return AM(e.properties,r,t)}i(MM,"FromMappedResult$2");function FM(e,r,t){const n=MM(e,r,t);return ut(n)}i(FM,"PickFromMappedResult");function SM(e,r){return e.map(t=>im(t,r))}i(SM,"FromIntersect$6");function TM(e,r){return e.map(t=>im(t,r))}i(TM,"FromUnion$6");function NM(e,r){const t={};for(const n of r)n in e&&(t[n]=e[n]);return t}i(NM,"FromProperties$4");function PM(e,r,t){const n=rn(e,[It,"$id","required","properties"]),o=NM(t,r);return Xr(o,n)}i(PM,"FromObject$8");function IM(e){const r=e.reduce((t,n)=>Yw(n)?[...t,Sr(n)]:t,[]);return ct(r)}i(IM,"UnionFromPropertyKeys");function im(e,r){return wn(e)?bi(SM(e.allOf,r)):Qr(e)?ct(TM(e.anyOf,r)):Un(e)?PM(e,r,e.properties):Xr({})}i(im,"PickResolve");function Cd(e,r,t){const n=jt(r)?IM(r):r,o=Ct(r)?gi(r):r,s=Rt(e),a=Rt(r);return on(e)?FM(e,o,t):rs(r)?LM(e,r,t):s&&a?Ur("Pick",[e,n],t):!s&&a?Ur("Pick",[e,n],t):s&&!a?Ur("Pick",[e,n],t):z({...im(e,o),...t})}i(Cd,"Pick");function OM(e,r,t){return{[r]:Cd(e,[r],Qt(t))}}i(OM,"FromPropertyKey");function BM(e,r,t){return r.reduce((n,o)=>({...n,...OM(e,o,t)}),{})}i(BM,"FromPropertyKeys");function RM(e,r,t){return BM(e,r.keys,t)}i(RM,"FromMappedKey");function LM(e,r,t){const n=RM(e,r,t);return ut(n)}i(LM,"PickFromMappedKey");function jM(e,r){return Ur("Partial",[Ur(e,r)])}i(jM,"FromComputed$2");function _M(e){return Ur("Partial",[ya(e)])}i(_M,"FromRef$6");function UM(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=pi(e[t]);return r}i(UM,"FromProperties$3");function zM(e,r){const t=rn(e,[It,"$id","required","properties"]),n=UM(r);return Xr(n,t)}i(zM,"FromObject$7");function m1(e){return e.map(r=>L5(r))}i(m1,"FromRest$1");function L5(e){return fa(e)?jM(e.target,e.parameters):Rt(e)?_M(e.$ref):wn(e)?bi(m1(e.allOf)):Qr(e)?ct(m1(e.anyOf)):Un(e)?zM(e,e.properties):ld(e)||Yl(e)||ma(e)||es(e)||Mg(e)||pa(e)||Xl(e)||Fg(e)||Ql(e)?e:Xr({})}i(L5,"PartialResolve");function sm(e,r){return on(e)?WM(e,r):z({...L5(e),...r})}i(sm,"Partial");function VM(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=sm(e[n],Qt(r));return t}i(VM,"FromProperties$2");function qM(e,r){return VM(e.properties,r)}i(qM,"FromMappedResult$1");function WM(e,r){const t=qM(e,r);return ut(t)}i(WM,"PartialFromMappedResult");function KM(e,r){return Ur("Required",[Ur(e,r)])}i(KM,"FromComputed$1");function GM(e){return Ur("Required",[ya(e)])}i(GM,"FromRef$5");function HM(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=rn(e[t],[Fo]);return r}i(HM,"FromProperties$1");function ZM(e,r){const t=rn(e,[It,"$id","required","properties"]),n=HM(r);return Xr(n,t)}i(ZM,"FromObject$6");function p1(e){return e.map(r=>j5(r))}i(p1,"FromRest");function j5(e){return fa(e)?KM(e.target,e.parameters):Rt(e)?GM(e.$ref):wn(e)?bi(p1(e.allOf)):Qr(e)?ct(p1(e.anyOf)):Un(e)?ZM(e,e.properties):ld(e)||Yl(e)||ma(e)||es(e)||Mg(e)||pa(e)||Xl(e)||Fg(e)||Ql(e)?e:Xr({})}i(j5,"RequiredResolve");function am(e,r){return on(e)?XM(e,r):z({...j5(e),...r})}i(am,"Required");function YM(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=am(e[n],r);return t}i(YM,"FromProperties");function JM(e,r){return YM(e.properties,r)}i(JM,"FromMappedResult");function XM(e,r){const t=JM(e,r);return ut(t)}i(XM,"RequiredFromMappedResult");function QM(e,r){return r.map(t=>Rt(t)?lm(e,t.$ref):tn(e,t))}i(QM,"DereferenceParameters");function lm(e,r){return r in e?Rt(e[r])?lm(e,e[r].$ref):tn(e,e[r]):gr()}i(lm,"Dereference");function eF(e){return wd(e[0])}i(eF,"FromAwaited");function rF(e){return yd(e[0],e[1])}i(rF,"FromIndex");function tF(e){return Zg(e[0])}i(tF,"FromKeyOf");function nF(e){return sm(e[0])}i(nF,"FromPartial");function oF(e){return Dd(e[0],e[1])}i(oF,"FromOmit");function iF(e){return Cd(e[0],e[1])}i(iF,"FromPick");function sF(e){return am(e[0])}i(sF,"FromRequired");function aF(e,r,t){const n=QM(e,t);return r==="Awaited"?eF(n):r==="Index"?rF(n):r==="KeyOf"?tF(n):r==="Partial"?nF(n):r==="Omit"?oF(n):r==="Pick"?iF(n):r==="Required"?sF(n):gr()}i(aF,"FromComputed");function lF(e,r){return Ug(tn(e,r))}i(lF,"FromArray$5");function uF(e,r){return zg(tn(e,r))}i(uF,"FromAsyncIterator$3");function cF(e,r,t){return Vg(ou(e,r),tn(e,t))}i(cF,"FromConstructor$3");function dF(e,r,t){return ru(ou(e,r),tn(e,t))}i(dF,"FromFunction$3");function fF(e,r){return bi(ou(e,r))}i(fF,"FromIntersect$5");function hF(e,r){return Hg(tn(e,r))}i(hF,"FromIterator$3");function gF(e,r){return Xr(globalThis.Object.keys(r).reduce((t,n)=>({...t,[n]:tn(e,r[n])}),{}))}i(gF,"FromObject$5");function mF(e,r){const[t,n]=[tn(e,O5(r)),nm(r)],o=Dg(r);return o.patternProperties[n]=t,o}i(mF,"FromRecord$5");function pF(e,r){return Rt(r)?{...lm(e,r.$ref),[It]:r[It]}:r}i(pF,"FromTransform");function bF(e,r){return va(ou(e,r))}i(bF,"FromTuple$5");function vF(e,r){return ct(ou(e,r))}i(vF,"FromUnion$5");function ou(e,r){return r.map(t=>tn(e,t))}i(ou,"FromTypes");function tn(e,r){return di(r)?z(tn(e,rn(r,[Fo])),r):Ag(r)?z(tn(e,rn(r,[Zl])),r):Je(r)?z(pF(e,r),r):da(r)?z(lF(e,r.items),r):ad(r)?z(uF(e,r.items),r):fa(r)?z(aF(e,r.target,r.parameters)):ha(r)?z(cF(e,r.parameters,r.returns),r):ga(r)?z(dF(e,r.parameters,r.returns),r):wn(r)?z(fF(e,r.allOf),r):ud(r)?z(hF(e,r.items),r):Un(r)?z(gF(e,r.properties),r):dd(r)?z(mF(e,r)):ns(r)?z(bF(e,r.items||[]),r):Qr(r)?z(vF(e,r.anyOf),r):r}i(tn,"FromType");function yF(e,r){return r in e?tn(e,e[r]):gr()}i(yF,"ComputeType");function wF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((r,t)=>({...r,[t]:yF(e,t)}),{})}i(wF,"ComputeModuleProperties");class $F{static{i(this,"TModule")}constructor(r){const t=wF(r),n=this.WithIdentifiers(t);this.$defs=n}Import(r,t){const n={...this.$defs,[r]:z(this.$defs[r],t)};return z({[_]:"Import",$defs:n,$ref:r})}WithIdentifiers(r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:{...r[n],$id:n}}),{})}}function kF(e){return new $F(e)}i(kF,"Module");function xF(e,r){return z({[_]:"Not",not:e},r)}i(xF,"Not");function DF(e,r){return ga(e)?va(e.parameters,r):gr()}i(DF,"Parameters");let CF=0;function EF(e,r={}){Mr(r.$id)&&(r.$id=`T${CF++}`);const t=Dg(e({[_]:"This",$ref:`${r.$id}`}));return t.$id=r.$id,z({[sd]:"Recursive",...t},r)}i(EF,"Recursive");function AF(e,r){const t=xr(e)?new globalThis.RegExp(e):e;return z({[_]:"RegExp",type:"RegExp",source:t.source,flags:t.flags},r)}i(AF,"RegExp$1");function MF(e){return wn(e)?e.allOf:Qr(e)?e.anyOf:ns(e)?e.items??[]:[]}i(MF,"RestResolve");function FF(e){return MF(e)}i(FF,"Rest");function SF(e,r){return ga(e)?z(e.returns,r):gr(r)}i(SF,"ReturnType");class TF{static{i(this,"TransformDecodeBuilder")}constructor(r){this.schema=r}Decode(r){return new NF(this.schema,r)}}class NF{static{i(this,"TransformEncodeBuilder")}constructor(r,t){this.schema=r,this.decode=t}EncodeTransform(r,t){const s={Encode:i(a=>t[It].Encode(r(a)),"Encode"),Decode:i(a=>this.decode(t[It].Decode(a)),"Decode")};return{...t,[It]:s}}EncodeSchema(r,t){const n={Decode:this.decode,Encode:r};return{...t,[It]:n}}Encode(r){return Je(this.schema)?this.EncodeTransform(r,this.schema):this.EncodeSchema(r,this.schema)}}function PF(e){return new TF(e)}i(PF,"Transform");function IF(e={}){return z({[_]:e[_]??"Unsafe"},e)}i(IF,"Unsafe");function OF(e){return z({[_]:"Void",type:"void"},e)}i(OF,"Void");const BF=Object.freeze(Object.defineProperty({__proto__:null,Any:El,Argument:PC,Array:Ug,AsyncIterator:zg,Awaited:wd,BigInt:Kg,Boolean:c5,Capitalize:cM,Composite:gA,Const:bA,Constructor:Vg,ConstructorParameters:vA,Date:$5,Enum:yA,Exclude:em,Extends:Qg,Extract:rm,Function:ru,Index:yd,InstanceType:A7,Instantiate:Q7,Integer:eM,Intersect:bi,Iterator:Hg,KeyOf:Zg,Literal:Sr,Lowercase:dM,Mapped:BE,Module:kF,Never:gr,Not:xF,Null:k5,Number:as,Object:Xr,Omit:Dd,Optional:pi,Parameters:DF,Partial:sm,Pick:Cd,Promise:m5,Readonly:mi,ReadonlyOptional:P5,Record:I5,Recursive:EF,Ref:ya,RegExp:AF,Required:am,Rest:FF,ReturnType:SF,String:Wi,Symbol:x5,TemplateLiteral:f5,Transform:PF,Tuple:va,Uint8Array:C5,Uncapitalize:fM,Undefined:D5,Union:ct,Unknown:$d,Unsafe:IF,Uppercase:hM,Void:OF},Symbol.toStringTag,{value:"Module"})),Ge=BF;function _5(e){switch(e.errorType){case S.ArrayContains:return"Expected array to contain at least one matching value";case S.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case S.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case S.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case S.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case S.ArrayUniqueItems:return"Expected array elements to be unique";case S.Array:return"Expected array";case S.AsyncIterator:return"Expected AsyncIterator";case S.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case S.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case S.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case S.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case S.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case S.BigInt:return"Expected bigint";case S.Boolean:return"Expected boolean";case S.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case S.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case S.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case S.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case S.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case S.Date:return"Expected Date";case S.Function:return"Expected function";case S.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case S.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case S.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case S.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case S.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case S.Integer:return"Expected integer";case S.IntersectUnevaluatedProperties:return"Unexpected property";case S.Intersect:return"Expected all values to match";case S.Iterator:return"Expected Iterator";case S.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case S.Never:return"Never";case S.Not:return"Value should not match";case S.Null:return"Expected null";case S.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case S.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case S.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case S.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case S.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case S.Number:return"Expected number";case S.Object:return"Expected object";case S.ObjectAdditionalProperties:return"Unexpected property";case S.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case S.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case S.ObjectRequiredProperty:return"Expected required property";case S.Promise:return"Expected Promise";case S.RegExp:return"Expected string to match regular expression";case S.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case S.StringFormat:return`Expected string to match '${e.schema.format}' format`;case S.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case S.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case S.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case S.String:return"Expected string";case S.Symbol:return"Expected symbol";case S.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case S.Tuple:return"Expected tuple";case S.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case S.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case S.Uint8Array:return"Expected Uint8Array";case S.Undefined:return"Expected undefined";case S.Union:return"Expected union value";case S.Void:return"Expected void";case S.Kind:return`Expected kind '${e.schema[_]}'`;default:return"Unknown error type"}}i(_5,"DefaultErrorFunction");let U5=_5;function RF(e){U5=e}i(RF,"SetErrorFunction");function LF(){return U5}i(LF,"GetErrorFunction");class jF extends lt{static{i(this,"TypeDereferenceError")}constructor(r){super(`Unable to dereference schema with $id '${r.$ref}'`),this.schema=r}}function _F(e,r){const t=r.find(n=>n.$id===e.$ref);if(t===void 0)throw new jF(e);return kn(t,r)}i(_F,"Resolve");function Ed(e,r){return!Zt(e.$id)||r.some(t=>t.$id===e.$id)||r.push(e),r}i(Ed,"Pushref");function kn(e,r){return e[_]==="This"||e[_]==="Ref"?_F(e,r):e}i(kn,"Deref");class UF extends lt{static{i(this,"ValueHashError")}constructor(r){super("Unable to hash value"),this.value=r}}var nn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(nn||(nn={}));let Es=BigInt("14695981039346656037");const[zF,VF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],qF=Array.from({length:256}).map((e,r)=>BigInt(r)),z5=new Float64Array(1),V5=new DataView(z5.buffer),q5=new Uint8Array(z5.buffer);function*WF(e){const r=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let t=0;t<r;t++)yield e>>8*(r-1-t)&255}i(WF,"NumberToBytes");function KF(e){bt(nn.Array);for(const r of e)ra(r)}i(KF,"ArrayType");function GF(e){bt(nn.Boolean),bt(e?1:0)}i(GF,"BooleanType");function HF(e){bt(nn.BigInt),V5.setBigInt64(0,e);for(const r of q5)bt(r)}i(HF,"BigIntType");function ZF(e){bt(nn.Date),ra(e.getTime())}i(ZF,"DateType");function YF(e){bt(nn.Null)}i(YF,"NullType");function JF(e){bt(nn.Number),V5.setFloat64(0,e);for(const r of q5)bt(r)}i(JF,"NumberType");function XF(e){bt(nn.Object);for(const r of globalThis.Object.getOwnPropertyNames(e).sort())ra(r),ra(e[r])}i(XF,"ObjectType");function QF(e){bt(nn.String);for(let r=0;r<e.length;r++)for(const t of WF(e.charCodeAt(r)))bt(t)}i(QF,"StringType");function eS(e){bt(nn.Symbol),ra(e.description)}i(eS,"SymbolType");function rS(e){bt(nn.Uint8Array);for(let r=0;r<e.length;r++)bt(e[r])}i(rS,"Uint8ArrayType");function tS(e){return bt(nn.Undefined)}i(tS,"UndefinedType");function ra(e){if(en(e))return KF(e);if(od(e))return GF(e);if(bo(e))return HF(e);if(Cg(e))return ZF(e);if(nd(e))return YF();if(ge(e))return JF(e);if(to(e))return XF(e);if(Zt(e))return QF(e);if(id(e))return eS(e);if(Eg(e))return rS(e);if(ci(e))return tS();throw new UF(e)}i(ra,"Visit$5");function bt(e){Es=Es^qF[e],Es=Es*zF%VF}i(bt,"FNV1A64");function um(e){return Es=BigInt("14695981039346656037"),ra(e),Es}i(um,"Hash");class nS extends lt{static{i(this,"ValueCheckUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function oS(e){return e[_]==="Any"||e[_]==="Unknown"}i(oS,"IsAnyOrUnknown");function ye(e){return e!==void 0}i(ye,"IsDefined$1");function iS(e,r,t){return!0}i(iS,"FromAny$1");function sS(e,r,t){return!0}i(sS,"FromArgument$1");function aS(e,r,t){if(!en(t)||ye(e.minItems)&&!(t.length>=e.minItems)||ye(e.maxItems)&&!(t.length<=e.maxItems))return!1;for(const s of t)if(!Zr(e.items,r,s))return!1;if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of t){const l=um(a);if(s.has(l))return!1;s.add(l)}return!0})())return!1;if(!(ye(e.contains)||ge(e.minContains)||ge(e.maxContains)))return!0;const n=ye(e.contains)?e.contains:gr(),o=t.reduce((s,a)=>Zr(n,r,a)?s+1:s,0);return!(o===0||ge(e.minContains)&&o<e.minContains||ge(e.maxContains)&&o>e.maxContains)}i(aS,"FromArray$4");function lS(e,r,t){return Uw(t)}i(lS,"FromAsyncIterator$2");function uS(e,r,t){return!(!bo(t)||ye(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||ye(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||ye(e.maximum)&&!(t<=e.maximum)||ye(e.minimum)&&!(t>=e.minimum)||ye(e.multipleOf)&&t%e.multipleOf!==BigInt(0))}i(uS,"FromBigInt$1");function cS(e,r,t){return od(t)}i(cS,"FromBoolean$1");function dS(e,r,t){return Zr(e.returns,r,t.prototype)}i(dS,"FromConstructor$2");function fS(e,r,t){return!(!Cg(t)||ye(e.exclusiveMaximumTimestamp)&&!(t.getTime()<e.exclusiveMaximumTimestamp)||ye(e.exclusiveMinimumTimestamp)&&!(t.getTime()>e.exclusiveMinimumTimestamp)||ye(e.maximumTimestamp)&&!(t.getTime()<=e.maximumTimestamp)||ye(e.minimumTimestamp)&&!(t.getTime()>=e.minimumTimestamp)||ye(e.multipleOfTimestamp)&&t.getTime()%e.multipleOfTimestamp!==0)}i(fS,"FromDate$1");function hS(e,r,t){return Kw(t)}i(hS,"FromFunction$2");function gS(e,r,t){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return Zr(o,[...r,...n],t)}i(gS,"FromImport$4");function mS(e,r,t){return!(!Ww(t)||ye(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||ye(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||ye(e.maximum)&&!(t<=e.maximum)||ye(e.minimum)&&!(t>=e.minimum)||ye(e.multipleOf)&&t%e.multipleOf!==0)}i(mS,"FromInteger$1");function pS(e,r,t){const n=e.allOf.every(o=>Zr(o,r,t));if(e.unevaluatedProperties===!1){const o=new RegExp(ea(e)),s=Object.getOwnPropertyNames(t).every(a=>o.test(a));return n&&s}else if(Ct(e.unevaluatedProperties)){const o=new RegExp(ea(e)),s=Object.getOwnPropertyNames(t).every(a=>o.test(a)||Zr(e.unevaluatedProperties,r,t[a]));return n&&s}else return n}i(pS,"FromIntersect$4");function bS(e,r,t){return zw(t)}i(bS,"FromIterator$2");function vS(e,r,t){return t===e.const}i(vS,"FromLiteral$1");function yS(e,r,t){return!1}i(yS,"FromNever$1");function wS(e,r,t){return!Zr(e.not,r,t)}i(wS,"FromNot$4");function $S(e,r,t){return nd(t)}i($S,"FromNull$1");function kS(e,r,t){return!(!kr.IsNumberLike(t)||ye(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||ye(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||ye(e.minimum)&&!(t>=e.minimum)||ye(e.maximum)&&!(t<=e.maximum)||ye(e.multipleOf)&&t%e.multipleOf!==0)}i(kS,"FromNumber$1");function xS(e,r,t){if(!kr.IsObjectLike(t)||ye(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||ye(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const s=e.properties[o];if(e.required&&e.required.includes(o)){if(!Zr(s,r,t[o])||($a(s)||oS(s))&&!(o in t))return!1}else if(kr.IsExactOptionalProperty(t,o)&&!Zr(s,r,t[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(t);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(s=>n.includes(s))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(t).every(s=>n.includes(s)||Zr(e.additionalProperties,r,t[s])):!0}i(xS,"FromObject$4");function DS(e,r,t){return Vw(t)}i(DS,"FromPromise$2");function CS(e,r,t){if(!kr.IsRecordLike(t)||ye(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||ye(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],s=new RegExp(n),a=Object.entries(t).every(([d,f])=>s.test(d)?Zr(o,r,f):!0),l=typeof e.additionalProperties=="object"?Object.entries(t).every(([d,f])=>s.test(d)?!0:Zr(e.additionalProperties,r,f)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(t).every(d=>s.test(d)):!0;return a&&l&&u}i(CS,"FromRecord$4");function ES(e,r,t){return Zr(kn(e,r),r,t)}i(ES,"FromRef$4");function AS(e,r,t){const n=new RegExp(e.source,e.flags);return ye(e.minLength)&&!(t.length>=e.minLength)||ye(e.maxLength)&&!(t.length<=e.maxLength)?!1:n.test(t)}i(AS,"FromRegExp$1");function MS(e,r,t){return!Zt(t)||ye(e.minLength)&&!(t.length>=e.minLength)||ye(e.maxLength)&&!(t.length<=e.maxLength)||ye(e.pattern)&&!new RegExp(e.pattern).test(t)?!1:ye(e.format)?Bg(e.format)?Rg(e.format)(t):!1:!0}i(MS,"FromString$1");function FS(e,r,t){return id(t)}i(FS,"FromSymbol$1");function SS(e,r,t){return Zt(t)&&new RegExp(e.pattern).test(t)}i(SS,"FromTemplateLiteral$1");function TS(e,r,t){return Zr(kn(e,r),r,t)}i(TS,"FromThis$4");function NS(e,r,t){if(!en(t)||e.items===void 0&&t.length!==0||t.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Zr(e.items[n],r,t[n]))return!1;return!0}i(NS,"FromTuple$4");function PS(e,r,t){return ci(t)}i(PS,"FromUndefined$1");function IS(e,r,t){return e.anyOf.some(n=>Zr(n,r,t))}i(IS,"FromUnion$4");function OS(e,r,t){return!(!Eg(t)||ye(e.maxByteLength)&&!(t.length<=e.maxByteLength)||ye(e.minByteLength)&&!(t.length>=e.minByteLength))}i(OS,"FromUint8Array$1");function BS(e,r,t){return!0}i(BS,"FromUnknown$1");function RS(e,r,t){return kr.IsVoidLike(t)}i(RS,"FromVoid$1");function LS(e,r,t){return ni(e[_])?_g(e[_])(e,t):!1}i(LS,"FromKind$1");function Zr(e,r,t){const n=ye(e.$id)?Ed(e,r):r,o=e;switch(o[_]){case"Any":return iS();case"Argument":return sS();case"Array":return aS(o,n,t);case"AsyncIterator":return lS(o,n,t);case"BigInt":return uS(o,n,t);case"Boolean":return cS(o,n,t);case"Constructor":return dS(o,n,t);case"Date":return fS(o,n,t);case"Function":return hS(o,n,t);case"Import":return gS(o,n,t);case"Integer":return mS(o,n,t);case"Intersect":return pS(o,n,t);case"Iterator":return bS(o,n,t);case"Literal":return vS(o,n,t);case"Never":return yS();case"Not":return wS(o,n,t);case"Null":return $S(o,n,t);case"Number":return kS(o,n,t);case"Object":return xS(o,n,t);case"Promise":return DS(o,n,t);case"Record":return CS(o,n,t);case"Ref":return ES(o,n,t);case"RegExp":return AS(o,n,t);case"String":return MS(o,n,t);case"Symbol":return FS(o,n,t);case"TemplateLiteral":return SS(o,n,t);case"This":return TS(o,n,t);case"Tuple":return NS(o,n,t);case"Undefined":return PS(o,n,t);case"Union":return IS(o,n,t);case"Uint8Array":return OS(o,n,t);case"Unknown":return BS();case"Void":return RS(o,n,t);default:if(!ni(o[_]))throw new nS(o);return LS(o,n,t)}}i(Zr,"Visit$4");function Dc(...e){return e.length===3?Zr(e[0],e[1],e[2]):Zr(e[0],[],e[1])}i(Dc,"Check");var S;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(S||(S={}));class jS extends lt{static{i(this,"ValueErrorsUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function ho(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}i(ho,"EscapeKey");function ve(e){return e!==void 0}i(ve,"IsDefined");class W5{static{i(this,"ValueErrorIterator")}constructor(r){this.iterator=r}[Symbol.iterator](){return this.iterator}First(){const r=this.iterator.next();return r.done?void 0:r.value}}function q(e,r,t,n,o=[]){return{type:e,schema:r,path:t,value:n,message:LF()({errorType:e,path:t,schema:r,value:n,errors:o}),errors:o}}i(q,"Create");function*_S(e,r,t,n){}i(_S,"FromAny");function*US(e,r,t,n){}i(US,"FromArgument");function*zS(e,r,t,n){if(!en(n))return yield q(S.Array,e,t,n);ve(e.minItems)&&!(n.length>=e.minItems)&&(yield q(S.ArrayMinItems,e,t,n)),ve(e.maxItems)&&!(n.length<=e.maxItems)&&(yield q(S.ArrayMaxItems,e,t,n));for(let a=0;a<n.length;a++)yield*Yr(e.items,r,`${t}/${a}`,n[a]);if(e.uniqueItems===!0&&!(function(){const a=new Set;for(const l of n){const u=um(l);if(a.has(u))return!1;a.add(u)}return!0})()&&(yield q(S.ArrayUniqueItems,e,t,n)),!(ve(e.contains)||ve(e.minContains)||ve(e.maxContains)))return;const o=ve(e.contains)?e.contains:gr(),s=n.reduce((a,l,u)=>Yr(o,r,`${t}${u}`,l).next().done===!0?a+1:a,0);s===0&&(yield q(S.ArrayContains,e,t,n)),ge(e.minContains)&&s<e.minContains&&(yield q(S.ArrayMinContains,e,t,n)),ge(e.maxContains)&&s>e.maxContains&&(yield q(S.ArrayMaxContains,e,t,n))}i(zS,"FromArray$3");function*VS(e,r,t,n){Uw(n)||(yield q(S.AsyncIterator,e,t,n))}i(VS,"FromAsyncIterator$1");function*qS(e,r,t,n){if(!bo(n))return yield q(S.BigInt,e,t,n);ve(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield q(S.BigIntExclusiveMaximum,e,t,n)),ve(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield q(S.BigIntExclusiveMinimum,e,t,n)),ve(e.maximum)&&!(n<=e.maximum)&&(yield q(S.BigIntMaximum,e,t,n)),ve(e.minimum)&&!(n>=e.minimum)&&(yield q(S.BigIntMinimum,e,t,n)),ve(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield q(S.BigIntMultipleOf,e,t,n))}i(qS,"FromBigInt");function*WS(e,r,t,n){od(n)||(yield q(S.Boolean,e,t,n))}i(WS,"FromBoolean");function*KS(e,r,t,n){yield*Yr(e.returns,r,t,n.prototype)}i(KS,"FromConstructor$1");function*GS(e,r,t,n){if(!Cg(n))return yield q(S.Date,e,t,n);ve(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield q(S.DateExclusiveMaximumTimestamp,e,t,n)),ve(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield q(S.DateExclusiveMinimumTimestamp,e,t,n)),ve(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield q(S.DateMaximumTimestamp,e,t,n)),ve(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield q(S.DateMinimumTimestamp,e,t,n)),ve(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield q(S.DateMultipleOfTimestamp,e,t,n))}i(GS,"FromDate");function*HS(e,r,t,n){Kw(n)||(yield q(S.Function,e,t,n))}i(HS,"FromFunction$1");function*ZS(e,r,t,n){const o=globalThis.Object.values(e.$defs),s=e.$defs[e.$ref];yield*Yr(s,[...r,...o],t,n)}i(ZS,"FromImport$3");function*YS(e,r,t,n){if(!Ww(n))return yield q(S.Integer,e,t,n);ve(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield q(S.IntegerExclusiveMaximum,e,t,n)),ve(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield q(S.IntegerExclusiveMinimum,e,t,n)),ve(e.maximum)&&!(n<=e.maximum)&&(yield q(S.IntegerMaximum,e,t,n)),ve(e.minimum)&&!(n>=e.minimum)&&(yield q(S.IntegerMinimum,e,t,n)),ve(e.multipleOf)&&n%e.multipleOf!==0&&(yield q(S.IntegerMultipleOf,e,t,n))}i(YS,"FromInteger");function*JS(e,r,t,n){let o=!1;for(const s of e.allOf)for(const a of Yr(s,r,t,n))o=!0,yield a;if(o)return yield q(S.Intersect,e,t,n);if(e.unevaluatedProperties===!1){const s=new RegExp(ea(e));for(const a of Object.getOwnPropertyNames(n))s.test(a)||(yield q(S.IntersectUnevaluatedProperties,e,`${t}/${a}`,n))}if(typeof e.unevaluatedProperties=="object"){const s=new RegExp(ea(e));for(const a of Object.getOwnPropertyNames(n))if(!s.test(a)){const l=Yr(e.unevaluatedProperties,r,`${t}/${a}`,n[a]).next();l.done||(yield l.value)}}}i(JS,"FromIntersect$3");function*XS(e,r,t,n){zw(n)||(yield q(S.Iterator,e,t,n))}i(XS,"FromIterator$1");function*QS(e,r,t,n){n!==e.const&&(yield q(S.Literal,e,t,n))}i(QS,"FromLiteral");function*eT(e,r,t,n){yield q(S.Never,e,t,n)}i(eT,"FromNever");function*rT(e,r,t,n){Yr(e.not,r,t,n).next().done===!0&&(yield q(S.Not,e,t,n))}i(rT,"FromNot$3");function*tT(e,r,t,n){nd(n)||(yield q(S.Null,e,t,n))}i(tT,"FromNull");function*nT(e,r,t,n){if(!kr.IsNumberLike(n))return yield q(S.Number,e,t,n);ve(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield q(S.NumberExclusiveMaximum,e,t,n)),ve(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield q(S.NumberExclusiveMinimum,e,t,n)),ve(e.maximum)&&!(n<=e.maximum)&&(yield q(S.NumberMaximum,e,t,n)),ve(e.minimum)&&!(n>=e.minimum)&&(yield q(S.NumberMinimum,e,t,n)),ve(e.multipleOf)&&n%e.multipleOf!==0&&(yield q(S.NumberMultipleOf,e,t,n))}i(nT,"FromNumber");function*oT(e,r,t,n){if(!kr.IsObjectLike(n))return yield q(S.Object,e,t,n);ve(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield q(S.ObjectMinProperties,e,t,n)),ve(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield q(S.ObjectMaxProperties,e,t,n));const o=Array.isArray(e.required)?e.required:[],s=Object.getOwnPropertyNames(e.properties),a=Object.getOwnPropertyNames(n);for(const l of o)a.includes(l)||(yield q(S.ObjectRequiredProperty,e.properties[l],`${t}/${ho(l)}`,void 0));if(e.additionalProperties===!1)for(const l of a)s.includes(l)||(yield q(S.ObjectAdditionalProperties,e,`${t}/${ho(l)}`,n[l]));if(typeof e.additionalProperties=="object")for(const l of a)s.includes(l)||(yield*Yr(e.additionalProperties,r,`${t}/${ho(l)}`,n[l]));for(const l of s){const u=e.properties[l];e.required&&e.required.includes(l)?(yield*Yr(u,r,`${t}/${ho(l)}`,n[l]),$a(e)&&!(l in n)&&(yield q(S.ObjectRequiredProperty,u,`${t}/${ho(l)}`,void 0))):kr.IsExactOptionalProperty(n,l)&&(yield*Yr(u,r,`${t}/${ho(l)}`,n[l]))}}i(oT,"FromObject$3");function*iT(e,r,t,n){Vw(n)||(yield q(S.Promise,e,t,n))}i(iT,"FromPromise$1");function*sT(e,r,t,n){if(!kr.IsRecordLike(n))return yield q(S.Object,e,t,n);ve(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield q(S.ObjectMinProperties,e,t,n)),ve(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield q(S.ObjectMaxProperties,e,t,n));const[o,s]=Object.entries(e.patternProperties)[0],a=new RegExp(o);for(const[l,u]of Object.entries(n))a.test(l)&&(yield*Yr(s,r,`${t}/${ho(l)}`,u));if(typeof e.additionalProperties=="object")for(const[l,u]of Object.entries(n))a.test(l)||(yield*Yr(e.additionalProperties,r,`${t}/${ho(l)}`,u));if(e.additionalProperties===!1){for(const[l,u]of Object.entries(n))if(!a.test(l))return yield q(S.ObjectAdditionalProperties,e,`${t}/${ho(l)}`,u)}}i(sT,"FromRecord$3");function*aT(e,r,t,n){yield*Yr(kn(e,r),r,t,n)}i(aT,"FromRef$3");function*lT(e,r,t,n){if(!Zt(n))return yield q(S.String,e,t,n);if(ve(e.minLength)&&!(n.length>=e.minLength)&&(yield q(S.StringMinLength,e,t,n)),ve(e.maxLength)&&!(n.length<=e.maxLength)&&(yield q(S.StringMaxLength,e,t,n)),!new RegExp(e.source,e.flags).test(n))return yield q(S.RegExp,e,t,n)}i(lT,"FromRegExp");function*uT(e,r,t,n){if(!Zt(n))return yield q(S.String,e,t,n);ve(e.minLength)&&!(n.length>=e.minLength)&&(yield q(S.StringMinLength,e,t,n)),ve(e.maxLength)&&!(n.length<=e.maxLength)&&(yield q(S.StringMaxLength,e,t,n)),Zt(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield q(S.StringPattern,e,t,n))),Zt(e.format)&&(Bg(e.format)?Rg(e.format)(n)||(yield q(S.StringFormat,e,t,n)):yield q(S.StringFormatUnknown,e,t,n))}i(uT,"FromString");function*cT(e,r,t,n){id(n)||(yield q(S.Symbol,e,t,n))}i(cT,"FromSymbol");function*dT(e,r,t,n){if(!Zt(n))return yield q(S.String,e,t,n);new RegExp(e.pattern).test(n)||(yield q(S.StringPattern,e,t,n))}i(dT,"FromTemplateLiteral");function*fT(e,r,t,n){yield*Yr(kn(e,r),r,t,n)}i(fT,"FromThis$3");function*hT(e,r,t,n){if(!en(n))return yield q(S.Tuple,e,t,n);if(e.items===void 0&&n.length!==0)return yield q(S.TupleLength,e,t,n);if(n.length!==e.maxItems)return yield q(S.TupleLength,e,t,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*Yr(e.items[o],r,`${t}/${o}`,n[o])}i(hT,"FromTuple$3");function*gT(e,r,t,n){ci(n)||(yield q(S.Undefined,e,t,n))}i(gT,"FromUndefined");function*mT(e,r,t,n){if(Dc(e,r,n))return;const o=e.anyOf.map(s=>new W5(Yr(s,r,t,n)));yield q(S.Union,e,t,n,o)}i(mT,"FromUnion$3");function*pT(e,r,t,n){if(!Eg(n))return yield q(S.Uint8Array,e,t,n);ve(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield q(S.Uint8ArrayMaxByteLength,e,t,n)),ve(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield q(S.Uint8ArrayMinByteLength,e,t,n))}i(pT,"FromUint8Array");function*bT(e,r,t,n){}i(bT,"FromUnknown");function*vT(e,r,t,n){kr.IsVoidLike(n)||(yield q(S.Void,e,t,n))}i(vT,"FromVoid");function*yT(e,r,t,n){_g(e[_])(e,n)||(yield q(S.Kind,e,t,n))}i(yT,"FromKind");function*Yr(e,r,t,n){const o=ve(e.$id)?[...r,e]:r,s=e;switch(s[_]){case"Any":return yield*_S();case"Argument":return yield*US();case"Array":return yield*zS(s,o,t,n);case"AsyncIterator":return yield*VS(s,o,t,n);case"BigInt":return yield*qS(s,o,t,n);case"Boolean":return yield*WS(s,o,t,n);case"Constructor":return yield*KS(s,o,t,n);case"Date":return yield*GS(s,o,t,n);case"Function":return yield*HS(s,o,t,n);case"Import":return yield*ZS(s,o,t,n);case"Integer":return yield*YS(s,o,t,n);case"Intersect":return yield*JS(s,o,t,n);case"Iterator":return yield*XS(s,o,t,n);case"Literal":return yield*QS(s,o,t,n);case"Never":return yield*eT(s,o,t,n);case"Not":return yield*rT(s,o,t,n);case"Null":return yield*tT(s,o,t,n);case"Number":return yield*nT(s,o,t,n);case"Object":return yield*oT(s,o,t,n);case"Promise":return yield*iT(s,o,t,n);case"Record":return yield*sT(s,o,t,n);case"Ref":return yield*aT(s,o,t,n);case"RegExp":return yield*lT(s,o,t,n);case"String":return yield*uT(s,o,t,n);case"Symbol":return yield*cT(s,o,t,n);case"TemplateLiteral":return yield*dT(s,o,t,n);case"This":return yield*fT(s,o,t,n);case"Tuple":return yield*hT(s,o,t,n);case"Undefined":return yield*gT(s,o,t,n);case"Union":return yield*mT(s,o,t,n);case"Uint8Array":return yield*pT(s,o,t,n);case"Unknown":return yield*bT();case"Void":return yield*vT(s,o,t,n);default:if(!ni(s[_]))throw new jS(e);return yield*yT(s,o,t,n)}}i(Yr,"Visit$3");function wT(...e){const r=e.length===3?Yr(e[0],e[1],"",e[2]):Yr(e[0],[],"",e[1]);return new W5(r)}i(wT,"Errors");class $T extends lt{static{i(this,"TransformDecodeCheckError")}constructor(r,t,n){super("Unable to decode value as it does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class kT extends lt{static{i(this,"TransformDecodeError")}constructor(r,t,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=r,this.path=t,this.value=n,this.error=o}}function sr(e,r,t){try{return Je(e)?e[It].Decode(t):t}catch(n){throw new kT(e,r,t,n)}}i(sr,"Default$1");function xT(e,r,t,n){return en(n)?sr(e,t,n.map((o,s)=>zn(e.items,r,`${t}/${s}`,o))):sr(e,t,n)}i(xT,"FromArray$2");function DT(e,r,t,n){if(!to(n)||Gw(n))return sr(e,t,n);const o=w5(e),s=o.map(f=>f[0]),a={...n};for(const[f,h]of o)f in a&&(a[f]=zn(h,r,`${t}/${f}`,a[f]));if(!Je(e.unevaluatedProperties))return sr(e,t,a);const l=Object.getOwnPropertyNames(a),u=e.unevaluatedProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=sr(u,`${t}/${f}`,d[f]));return sr(e,t,d)}i(DT,"FromIntersect$2");function CT(e,r,t,n){const o=globalThis.Object.values(e.$defs),s=e.$defs[e.$ref],a=zn(s,[...r,...o],t,n);return sr(e,t,a)}i(CT,"FromImport$2");function ET(e,r,t,n){return sr(e,t,zn(e.not,r,t,n))}i(ET,"FromNot$2");function AT(e,r,t,n){if(!to(n))return sr(e,t,n);const o=ls(e),s={...n};for(const d of o)qw(s,d)&&(ci(s[d])&&(!Ql(e.properties[d])||kr.IsExactOptionalProperty(s,d))||(s[d]=zn(e.properties[d],r,`${t}/${d}`,s[d])));if(!Ct(e.additionalProperties))return sr(e,t,s);const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(const d of a)o.includes(d)||(u[d]=sr(l,`${t}/${d}`,u[d]));return sr(e,t,u)}i(AT,"FromObject$2");function MT(e,r,t,n){if(!to(n))return sr(e,t,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...n};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=zn(e.patternProperties[o],r,`${t}/${f}`,a[f]));if(!Ct(e.additionalProperties))return sr(e,t,a);const l=Object.getOwnPropertyNames(a),u=e.additionalProperties,d={...a};for(const f of l)s.test(f)||(d[f]=sr(u,`${t}/${f}`,d[f]));return sr(e,t,d)}i(MT,"FromRecord$2");function FT(e,r,t,n){const o=kn(e,r);return sr(e,t,zn(o,r,t,n))}i(FT,"FromRef$2");function ST(e,r,t,n){const o=kn(e,r);return sr(e,t,zn(o,r,t,n))}i(ST,"FromThis$2");function TT(e,r,t,n){return en(n)&&en(e.items)?sr(e,t,e.items.map((o,s)=>zn(o,r,`${t}/${s}`,n[s]))):sr(e,t,n)}i(TT,"FromTuple$2");function NT(e,r,t,n){for(const o of e.anyOf){if(!Dc(o,r,n))continue;const s=zn(o,r,t,n);return sr(e,t,s)}return sr(e,t,n)}i(NT,"FromUnion$2");function zn(e,r,t,n){const o=Ed(e,r),s=e;switch(e[_]){case"Array":return xT(s,o,t,n);case"Import":return CT(s,o,t,n);case"Intersect":return DT(s,o,t,n);case"Not":return ET(s,o,t,n);case"Object":return AT(s,o,t,n);case"Record":return MT(s,o,t,n);case"Ref":return FT(s,o,t,n);case"Symbol":return sr(s,t,n);case"This":return ST(s,o,t,n);case"Tuple":return TT(s,o,t,n);case"Union":return NT(s,o,t,n);default:return sr(s,t,n)}}i(zn,"Visit$2");function PT(e,r,t){return zn(e,r,"",t)}i(PT,"TransformDecode");class IT extends lt{static{i(this,"TransformEncodeCheckError")}constructor(r,t,n){super("The encoded value does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class OT extends lt{static{i(this,"TransformEncodeError")}constructor(r,t,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=r,this.path=t,this.value=n,this.error=o}}function it(e,r,t){try{return Je(e)?e[It].Encode(t):t}catch(n){throw new OT(e,r,t,n)}}i(it,"Default");function BT(e,r,t,n){const o=it(e,t,n);return en(o)?o.map((s,a)=>jn(e.items,r,`${t}/${a}`,s)):o}i(BT,"FromArray$1");function RT(e,r,t,n){const o=globalThis.Object.values(e.$defs),s=e.$defs[e.$ref],a=it(e,t,n);return jn(s,[...r,...o],t,a)}i(RT,"FromImport$1");function LT(e,r,t,n){const o=it(e,t,n);if(!to(n)||Gw(n))return o;const s=w5(e),a=s.map(h=>h[0]),l={...o};for(const[h,g]of s)h in l&&(l[h]=jn(g,r,`${t}/${h}`,l[h]));if(!Je(e.unevaluatedProperties))return l;const u=Object.getOwnPropertyNames(l),d=e.unevaluatedProperties,f={...l};for(const h of u)a.includes(h)||(f[h]=it(d,`${t}/${h}`,f[h]));return f}i(LT,"FromIntersect$1");function jT(e,r,t,n){return it(e.not,t,it(e,t,n))}i(jT,"FromNot$1");function _T(e,r,t,n){const o=it(e,t,n);if(!to(o))return o;const s=ls(e),a={...o};for(const f of s)qw(a,f)&&(ci(a[f])&&(!Ql(e.properties[f])||kr.IsExactOptionalProperty(a,f))||(a[f]=jn(e.properties[f],r,`${t}/${f}`,a[f])));if(!Ct(e.additionalProperties))return a;const l=Object.getOwnPropertyNames(a),u=e.additionalProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=it(u,`${t}/${f}`,d[f]));return d}i(_T,"FromObject$1");function UT(e,r,t,n){const o=it(e,t,n);if(!to(n))return o;const s=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(s),l={...o};for(const h of Object.getOwnPropertyNames(n))a.test(h)&&(l[h]=jn(e.patternProperties[s],r,`${t}/${h}`,l[h]));if(!Ct(e.additionalProperties))return l;const u=Object.getOwnPropertyNames(l),d=e.additionalProperties,f={...l};for(const h of u)a.test(h)||(f[h]=it(d,`${t}/${h}`,f[h]));return f}i(UT,"FromRecord$1");function zT(e,r,t,n){const o=kn(e,r),s=jn(o,r,t,n);return it(e,t,s)}i(zT,"FromRef$1");function VT(e,r,t,n){const o=kn(e,r),s=jn(o,r,t,n);return it(e,t,s)}i(VT,"FromThis$1");function qT(e,r,t,n){const o=it(e,t,n);return en(e.items)?e.items.map((s,a)=>jn(s,r,`${t}/${a}`,o[a])):[]}i(qT,"FromTuple$1");function WT(e,r,t,n){for(const o of e.anyOf){if(!Dc(o,r,n))continue;const s=jn(o,r,t,n);return it(e,t,s)}for(const o of e.anyOf){const s=jn(o,r,t,n);if(Dc(e,r,s))return it(e,t,s)}return it(e,t,n)}i(WT,"FromUnion$1");function jn(e,r,t,n){const o=Ed(e,r),s=e;switch(e[_]){case"Array":return BT(s,o,t,n);case"Import":return RT(s,o,t,n);case"Intersect":return LT(s,o,t,n);case"Not":return jT(s,o,t,n);case"Object":return _T(s,o,t,n);case"Record":return UT(s,o,t,n);case"Ref":return zT(s,o,t,n);case"This":return VT(s,o,t,n);case"Tuple":return qT(s,o,t,n);case"Union":return WT(s,o,t,n);default:return it(s,t,n)}}i(jn,"Visit$1");function KT(e,r,t){return jn(e,r,"",t)}i(KT,"TransformEncode");function GT(e,r){return Je(e)||zr(e.items,r)}i(GT,"FromArray");function HT(e,r){return Je(e)||zr(e.items,r)}i(HT,"FromAsyncIterator");function ZT(e,r){return Je(e)||zr(e.returns,r)||e.parameters.some(t=>zr(t,r))}i(ZT,"FromConstructor");function YT(e,r){return Je(e)||zr(e.returns,r)||e.parameters.some(t=>zr(t,r))}i(YT,"FromFunction");function JT(e,r){return Je(e)||Je(e.unevaluatedProperties)||e.allOf.some(t=>zr(t,r))}i(JT,"FromIntersect");function XT(e,r){const t=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,s)=>[...o,e.$defs[s]],[]),n=e.$defs[e.$ref];return Je(e)||zr(n,[...t,...r])}i(XT,"FromImport");function QT(e,r){return Je(e)||zr(e.items,r)}i(QT,"FromIterator");function eN(e,r){return Je(e)||zr(e.not,r)}i(eN,"FromNot");function rN(e,r){return Je(e)||Object.values(e.properties).some(t=>zr(t,r))||Ct(e.additionalProperties)&&zr(e.additionalProperties,r)}i(rN,"FromObject");function tN(e,r){return Je(e)||zr(e.item,r)}i(tN,"FromPromise");function nN(e,r){const t=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[t];return Je(e)||zr(n,r)||Ct(e.additionalProperties)&&Je(e.additionalProperties)}i(nN,"FromRecord");function oN(e,r){return Je(e)?!0:zr(kn(e,r),r)}i(oN,"FromRef");function iN(e,r){return Je(e)?!0:zr(kn(e,r),r)}i(iN,"FromThis");function sN(e,r){return Je(e)||!ci(e.items)&&e.items.some(t=>zr(t,r))}i(sN,"FromTuple");function aN(e,r){return Je(e)||e.anyOf.some(t=>zr(t,r))}i(aN,"FromUnion");function zr(e,r){const t=Ed(e,r),n=e;if(e.$id&&ih.has(e.$id))return!1;switch(e.$id&&ih.add(e.$id),e[_]){case"Array":return GT(n,t);case"AsyncIterator":return HT(n,t);case"Constructor":return ZT(n,t);case"Function":return YT(n,t);case"Import":return XT(n,t);case"Intersect":return JT(n,t);case"Iterator":return QT(n,t);case"Not":return eN(n,t);case"Object":return rN(n,t);case"Promise":return tN(n,t);case"Record":return nN(n,t);case"Ref":return oN(n,t);case"This":return iN(n,t);case"Tuple":return sN(n,t);case"Union":return aN(n,t);default:return Je(e)}}i(zr,"Visit");const ih=new Set;function lN(e,r){return ih.clear(),zr(e,r)}i(lN,"HasTransform");class uN{static{i(this,"TypeCheck")}constructor(r,t,n,o){this.schema=r,this.references=t,this.checkFunc=n,this.code=o,this.hasTransform=lN(r,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(r){return wT(this.schema,this.references,r)}Check(r){return this.checkFunc(r)}Decode(r){if(!this.checkFunc(r))throw new $T(this.schema,r,this.Errors(r).First());return this.hasTransform?PT(this.schema,this.references,r):r}Encode(r){const t=this.hasTransform?KT(this.schema,this.references,r):r;if(!this.checkFunc(t))throw new IT(this.schema,r,this.Errors(r).First());return t}}var vo;(function(e){function r(s){return s===36}i(r,"DollarSign"),e.DollarSign=r;function t(s){return s===95}i(t,"IsUnderscore"),e.IsUnderscore=t;function n(s){return s>=65&&s<=90||s>=97&&s<=122}i(n,"IsAlpha"),e.IsAlpha=n;function o(s){return s>=48&&s<=57}i(o,"IsNumeric"),e.IsNumeric=o})(vo||(vo={}));var Cc;(function(e){function r(s){return s.length===0?!1:vo.IsNumeric(s.charCodeAt(0))}i(r,"IsFirstCharacterNumeric");function t(s){if(r(s))return!1;for(let a=0;a<s.length;a++){const l=s.charCodeAt(a);if(!(vo.IsAlpha(l)||vo.IsNumeric(l)||vo.DollarSign(l)||vo.IsUnderscore(l)))return!1}return!0}i(t,"IsAccessor");function n(s){return s.replace(/'/g,"\\'")}i(n,"EscapeHyphen");function o(s,a){return t(a)?`${s}.${a}`:`${s}['${n(a)}']`}i(o,"Encode"),e.Encode=o})(Cc||(Cc={}));var sh;(function(e){function r(t){const n=[];for(let o=0;o<t.length;o++){const s=t.charCodeAt(o);vo.IsNumeric(s)||vo.IsAlpha(s)?n.push(t.charAt(o)):n.push(`_${s}_`)}return n.join("").replace(/__/g,"_")}i(r,"Encode"),e.Encode=r})(sh||(sh={}));var ah;(function(e){function r(t){return t.replace(/'/g,"\\'")}i(r,"Escape"),e.Escape=r})(ah||(ah={}));class cN extends lt{static{i(this,"TypeCompilerUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}class b1 extends lt{static{i(this,"TypeCompilerTypeGuardError")}constructor(r){super("Preflight validation check failed to guard for the given schema"),this.schema=r}}var Ai;(function(e){function r(a,l,u){return kr.ExactOptionalPropertyTypes?`('${l}' in ${a} ? ${u} : true)`:`(${Cc.Encode(a,l)} !== undefined ? ${u} : true)`}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(a){return kr.AllowArrayObject?`(typeof ${a} === 'object' && ${a} !== null)`:`(typeof ${a} === 'object' && ${a} !== null && !Array.isArray(${a}))`}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(a){return kr.AllowArrayObject?`(typeof ${a} === 'object' && ${a} !== null && !(${a} instanceof Date) && !(${a} instanceof Uint8Array))`:`(typeof ${a} === 'object' && ${a} !== null && !Array.isArray(${a}) && !(${a} instanceof Date) && !(${a} instanceof Uint8Array))`}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(a){return kr.AllowNaN?`typeof ${a} === 'number'`:`Number.isFinite(${a})`}i(o,"IsNumberLike"),e.IsNumberLike=o;function s(a){return kr.AllowNullVoid?`(${a} === undefined || ${a} === null)`:`${a} === undefined`}i(s,"IsVoidLike"),e.IsVoidLike=s})(Ai||(Ai={}));var ul;(function(e){function r($){return $[_]==="Any"||$[_]==="Unknown"}i(r,"IsAnyOrUnknown");function*t($,G,A){yield"true"}i(t,"FromAny");function*n($,G,A){yield"true"}i(n,"FromArgument");function*o($,G,A){yield`Array.isArray(${A})`;const[te,J]=[xn("value","any"),xn("acc","number")];ge($.maxItems)&&(yield`${A}.length <= ${$.maxItems}`),ge($.minItems)&&(yield`${A}.length >= ${$.minItems}`);const X=Br($.items,G,"value");if(yield`((array) => { for(const ${te} of array) if(!(${X})) { return false }; return true; })(${A})`,dr($.contains)||ge($.minContains)||ge($.maxContains)){const Ke=dr($.contains)?$.contains:gr(),At=Br(Ke,G,"value"),ao=ge($.minContains)?[`(count >= ${$.minContains})`]:[],Dn=ge($.maxContains)?[`(count <= ${$.maxContains})`]:[],Wn=`const count = value.reduce((${J}, ${te}) => ${At} ? acc + 1 : acc, 0)`,du=["(count > 0)",...ao,...Dn].join(" && ");yield`((${te}) => { ${Wn}; return ${du}})(${A})`}$.uniqueItems===!0&&(yield`((${te}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${A})`)}i(o,"FromArray");function*s($,G,A){yield`(typeof value === 'object' && Symbol.asyncIterator in ${A})`}i(s,"FromAsyncIterator");function*a($,G,A){yield`(typeof ${A} === 'bigint')`,bo($.exclusiveMaximum)&&(yield`${A} < BigInt(${$.exclusiveMaximum})`),bo($.exclusiveMinimum)&&(yield`${A} > BigInt(${$.exclusiveMinimum})`),bo($.maximum)&&(yield`${A} <= BigInt(${$.maximum})`),bo($.minimum)&&(yield`${A} >= BigInt(${$.minimum})`),bo($.multipleOf)&&(yield`(${A} % BigInt(${$.multipleOf})) === 0`)}i(a,"FromBigInt");function*l($,G,A){yield`(typeof ${A} === 'boolean')`}i(l,"FromBoolean");function*u($,G,A){yield*et($.returns,G,`${A}.prototype`)}i(u,"FromConstructor");function*d($,G,A){yield`(${A} instanceof Date) && Number.isFinite(${A}.getTime())`,ge($.exclusiveMaximumTimestamp)&&(yield`${A}.getTime() < ${$.exclusiveMaximumTimestamp}`),ge($.exclusiveMinimumTimestamp)&&(yield`${A}.getTime() > ${$.exclusiveMinimumTimestamp}`),ge($.maximumTimestamp)&&(yield`${A}.getTime() <= ${$.maximumTimestamp}`),ge($.minimumTimestamp)&&(yield`${A}.getTime() >= ${$.minimumTimestamp}`),ge($.multipleOfTimestamp)&&(yield`(${A}.getTime() % ${$.multipleOfTimestamp}) === 0`)}i(d,"FromDate");function*f($,G,A){yield`(typeof ${A} === 'function')`}i(f,"FromFunction");function*h($,G,A){const te=globalThis.Object.getOwnPropertyNames($.$defs).reduce((J,X)=>[...J,$.$defs[X]],[]);yield*et(ya($.$ref),[...G,...te],A)}i(h,"FromImport");function*g($,G,A){yield`Number.isInteger(${A})`,ge($.exclusiveMaximum)&&(yield`${A} < ${$.exclusiveMaximum}`),ge($.exclusiveMinimum)&&(yield`${A} > ${$.exclusiveMinimum}`),ge($.maximum)&&(yield`${A} <= ${$.maximum}`),ge($.minimum)&&(yield`${A} >= ${$.minimum}`),ge($.multipleOf)&&(yield`(${A} % ${$.multipleOf}) === 0`)}i(g,"FromInteger");function*m($,G,A){const te=$.allOf.map(J=>Br(J,G,A)).join(" && ");if($.unevaluatedProperties===!1){const J=dt(`${new RegExp(ea($))};`),X=`Object.getOwnPropertyNames(${A}).every(key => ${J}.test(key))`;yield`(${te} && ${X})`}else if(dr($.unevaluatedProperties)){const J=dt(`${new RegExp(ea($))};`),X=`Object.getOwnPropertyNames(${A}).every(key => ${J}.test(key) || ${Br($.unevaluatedProperties,G,`${A}[key]`)})`;yield`(${te} && ${X})`}else yield`(${te})`}i(m,"FromIntersect");function*y($,G,A){yield`(typeof value === 'object' && Symbol.iterator in ${A})`}i(y,"FromIterator");function*k($,G,A){typeof $.const=="number"||typeof $.const=="boolean"?yield`(${A} === ${$.const})`:yield`(${A} === '${ah.Escape($.const)}')`}i(k,"FromLiteral");function*x($,G,A){yield"false"}i(x,"FromNever");function*C($,G,A){yield`(!${Br($.not,G,A)})`}i(C,"FromNot");function*E($,G,A){yield`(${A} === null)`}i(E,"FromNull");function*I($,G,A){yield Ai.IsNumberLike(A),ge($.exclusiveMaximum)&&(yield`${A} < ${$.exclusiveMaximum}`),ge($.exclusiveMinimum)&&(yield`${A} > ${$.exclusiveMinimum}`),ge($.maximum)&&(yield`${A} <= ${$.maximum}`),ge($.minimum)&&(yield`${A} >= ${$.minimum}`),ge($.multipleOf)&&(yield`(${A} % ${$.multipleOf}) === 0`)}i(I,"FromNumber");function*j($,G,A){yield Ai.IsObjectLike(A),ge($.minProperties)&&(yield`Object.getOwnPropertyNames(${A}).length >= ${$.minProperties}`),ge($.maxProperties)&&(yield`Object.getOwnPropertyNames(${A}).length <= ${$.maxProperties}`);const te=Object.getOwnPropertyNames($.properties);for(const J of te){const X=Cc.Encode(A,J),Ke=$.properties[J];if($.required&&$.required.includes(J))yield*et(Ke,G,X),($a(Ke)||r(Ke))&&(yield`('${J}' in ${A})`);else{const At=Br(Ke,G,X);yield Ai.IsExactOptionalProperty(A,J,At)}}if($.additionalProperties===!1)if($.required&&$.required.length===te.length)yield`Object.getOwnPropertyNames(${A}).length === ${te.length}`;else{const J=`[${te.map(X=>`'${X}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${A}).every(key => ${J}.includes(key))`}if(typeof $.additionalProperties=="object"){const J=Br($.additionalProperties,G,`${A}[key]`),X=`[${te.map(Ke=>`'${Ke}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${A}).every(key => ${X}.includes(key) || ${J}))`}}i(j,"FromObject");function*K($,G,A){yield`${A} instanceof Promise`}i(K,"FromPromise");function*ae($,G,A){yield Ai.IsRecordLike(A),ge($.minProperties)&&(yield`Object.getOwnPropertyNames(${A}).length >= ${$.minProperties}`),ge($.maxProperties)&&(yield`Object.getOwnPropertyNames(${A}).length <= ${$.maxProperties}`);const[te,J]=Object.entries($.patternProperties)[0],X=dt(`${new RegExp(te)}`),Ke=Br(J,G,"value"),At=dr($.additionalProperties)?Br($.additionalProperties,G,A):$.additionalProperties===!1?"false":"true",ao=`(${X}.test(key) ? ${Ke} : ${At})`;yield`(Object.entries(${A}).every(([key, value]) => ${ao}))`}i(ae,"FromRecord");function*Te($,G,A){const te=kn($,G);if(qe.functions.has($.$ref))return yield`${ln($.$ref)}(${A})`;yield*et(te,G,A)}i(Te,"FromRef");function*me($,G,A){const te=dt(`${new RegExp($.source,$.flags)};`);yield`(typeof ${A} === 'string')`,ge($.maxLength)&&(yield`${A}.length <= ${$.maxLength}`),ge($.minLength)&&(yield`${A}.length >= ${$.minLength}`),yield`${te}.test(${A})`}i(me,"FromRegExp");function*Me($,G,A){yield`(typeof ${A} === 'string')`,ge($.maxLength)&&(yield`${A}.length <= ${$.maxLength}`),ge($.minLength)&&(yield`${A}.length >= ${$.minLength}`),$.pattern!==void 0&&(yield`${dt(`${new RegExp($.pattern)};`)}.test(${A})`),$.format!==void 0&&(yield`format('${$.format}', ${A})`)}i(Me,"FromString");function*Xe($,G,A){yield`(typeof ${A} === 'symbol')`}i(Xe,"FromSymbol");function*Qe($,G,A){yield`(typeof ${A} === 'string')`,yield`${dt(`${new RegExp($.pattern)};`)}.test(${A})`}i(Qe,"FromTemplateLiteral");function*Or($,G,A){yield`${ln($.$ref)}(${A})`}i(Or,"FromThis");function*_t($,G,A){if(yield`Array.isArray(${A})`,$.items===void 0)return yield`${A}.length === 0`;yield`(${A}.length === ${$.maxItems})`;for(let te=0;te<$.items.length;te++)yield`${Br($.items[te],G,`${A}[${te}]`)}`}i(_t,"FromTuple");function*wt($,G,A){yield`${A} === undefined`}i(wt,"FromUndefined");function*io($,G,A){yield`(${$.anyOf.map(J=>Br(J,G,A)).join(" || ")})`}i(io,"FromUnion");function*Wr($,G,A){yield`${A} instanceof Uint8Array`,ge($.maxByteLength)&&(yield`(${A}.length <= ${$.maxByteLength})`),ge($.minByteLength)&&(yield`(${A}.length >= ${$.minByteLength})`)}i(Wr,"FromUint8Array");function*qn($,G,A){yield"true"}i(qn,"FromUnknown");function*so($,G,A){yield Ai.IsVoidLike(A)}i(so,"FromVoid");function*an($,G,A){const te=qe.instances.size;qe.instances.set(te,$),yield`kind('${$[_]}', ${te}, ${A})`}i(an,"FromKind");function*et($,G,A,te=!0){const J=Zt($.$id)?[...G,$]:G,X=$;if(te&&Zt($.$id)){const Ke=ln($.$id);if(qe.functions.has(Ke))return yield`${Ke}(${A})`;{qe.functions.set(Ke,"<deferred>");const At=un(Ke,$,G,"value",!1);return qe.functions.set(Ke,At),yield`${Ke}(${A})`}}switch(X[_]){case"Any":return yield*t();case"Argument":return yield*n();case"Array":return yield*o(X,J,A);case"AsyncIterator":return yield*s(X,J,A);case"BigInt":return yield*a(X,J,A);case"Boolean":return yield*l(X,J,A);case"Constructor":return yield*u(X,J,A);case"Date":return yield*d(X,J,A);case"Function":return yield*f(X,J,A);case"Import":return yield*h(X,J,A);case"Integer":return yield*g(X,J,A);case"Intersect":return yield*m(X,J,A);case"Iterator":return yield*y(X,J,A);case"Literal":return yield*k(X,J,A);case"Never":return yield*x();case"Not":return yield*C(X,J,A);case"Null":return yield*E(X,J,A);case"Number":return yield*I(X,J,A);case"Object":return yield*j(X,J,A);case"Promise":return yield*K(X,J,A);case"Record":return yield*ae(X,J,A);case"Ref":return yield*Te(X,J,A);case"RegExp":return yield*me(X,J,A);case"String":return yield*Me(X,J,A);case"Symbol":return yield*Xe(X,J,A);case"TemplateLiteral":return yield*Qe(X,J,A);case"This":return yield*Or(X,J,A);case"Tuple":return yield*_t(X,J,A);case"Undefined":return yield*wt(X,J,A);case"Union":return yield*io(X,J,A);case"Uint8Array":return yield*Wr(X,J,A);case"Unknown":return yield*qn();case"Void":return yield*so(X,J,A);default:if(!ni(X[_]))throw new cN($);return yield*an(X,J,A)}}i(et,"Visit");const qe={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Br($,G,A,te=!0){return`(${[...et($,G,A,te)].join(" && ")})`}i(Br,"CreateExpression");function ln($){return`check_${sh.Encode($)}`}i(ln,"CreateFunctionName");function dt($){const G=`local_${qe.variables.size}`;return qe.variables.set(G,`const ${G} = ${$}`),G}i(dt,"CreateVariable");function un($,G,A,te,J=!0){const[X,Ke]=[`
`,Wn=>"".padStart(Wn," ")],At=xn("value","any"),ao=Po("boolean"),Dn=[...et(G,A,te,J)].map(Wn=>`${Ke(4)}${Wn}`).join(` &&${X}`);return`function ${$}(${At})${ao} {${X}${Ke(2)}return (${X}${Dn}${X}${Ke(2)})
}`}i(un,"CreateFunction");function xn($,G){const A=qe.language==="typescript"?`: ${G}`:"";return`${$}${A}`}i(xn,"CreateParameter");function Po($){return qe.language==="typescript"?`: ${$}`:""}i(Po,"CreateReturns");function cu($,G,A){const te=un("check",$,G,"value"),J=xn("value","any"),X=Po("boolean"),Ke=[...qe.functions.values()],At=[...qe.variables.values()],ao=Zt($.$id)?`return function check(${J})${X} {
  return ${ln($.$id)}(value)
}`:`return ${te}`;return[...At,...Ke,ao].join(`
`)}i(cu,"Build");function fs(...$){const G={language:"javascript"},[A,te,J]=$.length===2&&en($[1])?[$[0],$[1],G]:$.length===2&&!en($[1])?[$[0],[],$[1]]:$.length===3?[$[0],$[1],$[2]]:$.length===1?[$[0],[],G]:[null,[],G];if(qe.language=J.language,qe.variables.clear(),qe.functions.clear(),qe.instances.clear(),!dr(A))throw new b1(A);for(const X of te)if(!dr(X))throw new b1(X);return cu(A,te)}i(fs,"Code"),e.Code=fs;function Gk($,G=[]){const A=fs($,G,{language:"javascript"}),te=globalThis.Function("kind","format","hash",A),J=new Map(qe.instances);function X(Dn,Wn,du){if(!ni(Dn)||!J.has(Wn))return!1;const Hk=_g(Dn),Zk=J.get(Wn);return Hk(Zk,du)}i(X,"typeRegistryFunction");function Ke(Dn,Wn){return Bg(Dn)?Rg(Dn)(Wn):!1}i(Ke,"formatRegistryFunction");function At(Dn){return um(Dn)}i(At,"hashFunction");const ao=te(X,Ke,At);return new uN($,G,ao,A)}i(Gk,"Compile"),e.Compile=Gk})(ul||(ul={}));const lh={};function K5(e,r){e in lh||(lh[e]=r)}i(K5,"registerErrorMessage");let v1=!1;function dN(){v1||(v1=!0,RF(e=>(lh[e.schema[_]]||_5)(e)))}i(dN,"setShapeDefinitionErrorMessage");const uh=Symbol.for("object-shape-tester.shape-identifier");function Re(e){if(dN(),cm(e))return e;const r=ch(e),t=Mi(r,!1),n=Mi(r,!0),o={$_schema:r,$_schemaNoExtraKeys:t,$_schemaExtraKeys:n,default:r.default,$_compiledSchema:ul.Compile(r),$_compiledSchemaNoExtraKeys:ul.Compile(t),$_compiledSchemaExtraKeys:ul.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[uh]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}i(Re,"defineShape");function cm(e){return F.hasKey(e,uh)&&!!e[uh]}i(cm,"isShape");function dm(e){return F.hasKey(e,_)}i(dm,"isSchema");function Mi(e,r){const t={...e};if(Array.isArray(e.anyOf)&&(t.anyOf=e.anyOf.map(n=>Mi(n,r))),Array.isArray(e.allOf)&&(t.allOf=e.allOf.map(n=>Mi(n,r))),dm(e.items)?t.items=Mi(e.items,r):Array.isArray(e.items)&&(t.items=e.items.map(n=>Mi(n,r))),F.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,s])=>{n[o]=Mi(s,r)}),t.properties=n}return t.additionalProperties=r,t}i(Mi,"forceAdditionalProperties");function ch(e){if(dm(e))return e;if(cm(e))return e.$_schema;if(F.isFunction(e))return Ge.Function([],Ge.Any(),{default:e});if(F.isObject(e)){const r={},t={};return Object.entries(e).forEach(([n,o])=>{const s=ch(o);t[n]=s,r[n]=s.default}),Ge.Object(t,{default:r})}else{if(F.isArray(e))return Ge.Array(Ge.Union(e.map(r=>ch(r))),{default:[]});if(F.isPrimitive(e)){if(F.isString(e))return Ge.String({default:e});if(F.isNumber(e))return Ge.Number({default:e});if(F.isBoolean(e))return Ge.Boolean({default:e});if(F.isSymbol(e))return Ge.Symbol({default:e});if(F.isNull(e))return Ge.Null({default:null});if(F.isUndefined(e))return Ge.Undefined({default:void 0});if(F.isBigInt(e))return Ge.BigInt({default:e});_r.tsType(e).equals(),_r.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${w(e)}`)}}i(ch,"shapeInitToSchema");function fN({checkValue:e,default:r,name:t}){return ni(t)||jg(t,(n,o)=>e(o)),(n=r)=>Re(Ge.Unsafe({[_]:t,default:n}))}i(fN,"createCustomShape");function Ki(e,r){const t=Wt(e);if(r!=null&&!t.includes(r))throw new TypeError("enumShape default must be a subset of the given enum.");return Re(Ge.Union(t.map(n=>Ge.Literal(n)),{default:r??t[0]}))}i(Ki,"enumShape");function $e(e){return F.isSymbol(e)?hN(e):Re(Ge.Const(e,{default:e}))}i($e,"exactShape");const Fu="ExactSymbol";function hN(e){return ni(Fu)||jg(Fu,(r,t)=>t===r.symbol),K5(Fu,({schema:r})=>`Expected symbol ${r.symbol?.description?K6({value:r.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Re(Ge.Unsafe({[_]:Fu,symbol:e,default:e}))}i(hN,"exactSymbolShape");function gN(...e){const r={},t=e.map(n=>{const o=Re(n);return Object.assign(r,o.default),o.$_schema});return Re(Ge.Composite(t,{default:r}))}i(gN,"intersectShape");function tt(e,r={}){kr.ExactOptionalPropertyTypes=!0;const t=Re(e).$_schema,n=r.alsoUndefined?Ge.Union([Ge.Undefined(),t]):t;return Re(Ge.Optional(n))}i(tt,"optionalShape");function cr(...e){let r;const t=e.map((n,o)=>{const s=Re(n);return o||(r=s.default),s.$_schema});return Re(Ge.Union(t,{default:r}))}i(cr,"unionShape");class mN extends TypeError{static{i(this,"ShapeMismatchError")}errors;failureMessage;name="ShapeMismatchError";constructor(r,t){const n=r.map(s=>G5(s)).join(`
`),o=Yi(t,`Shape mismatch:
${Vh(n,1)}`);super(o),this.errors=r,this.failureMessage=t}}function pN(e){return e.errors.flatMap(r=>Array.from(r))}i(pN,"getSubErrors");function G5(e,r=0){const t=pN(e).map(o=>G5(o,r+1)),n=[e.path,e.message].filter(F.isTruthy).join(": ")+(t.length?":":"");return[Vh(n,r),...t].join(`
`)}i(G5,"createErrorMessage");function Wo(e,r,t={}){return H5(r,t).Check(e)}i(Wo,"checkValidShape");function Ec(e,r,t={},n){if(Wo(e,r,t))return;const o=Array.from(H5(r,t).Errors(e));if(o.length)throw new mN(o,n)}i(Ec,"assertValidShape");function H5(e,r){return e=bN(e),r.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}i(H5,"getCompiledSchema");function bN(e){return Re(e)}i(bN,"ensureShape");function As({exclusiveMax:e,exclusiveMin:r,...t}){const{min:n,max:o}=Ih(t),s=t.default??(o-n)/2+n,a=Re(Ge.Number({...r?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:s})),l=S2(()=>Ec(s,a));if(l)throw Ji(l,"Default range value is not within range.");return a}i(As,"rangeShape");const Zu="recordShape";function Ad({keys:e,values:r,partial:t,additionalProperties:n}){vN();const o=Z5(e),s=Re(r);return Re(Ge.Unsafe({[_]:Zu,keysShape:o,valuesShape:s,isPartial:!!t,additionalProperties:!!n,default:yN({isPartial:!!t,keysShape:o,valuesShape:s})}))}i(Ad,"recordShape");function vN(){ni(Zu)||jg(Zu,(e,r)=>{if(typeof r!="object"||!r||Array.isArray(r))return!1;const t=Object.entries(r).every(([o,s])=>{const a=e.additionalProperties?!0:Wo(o,e.keysShape),l=Wo(s,e.valuesShape);return a&&l}),n=e.isPartial?!0:!y1(e.keysShape,r).length;return t&&n}),K5(Zu,e=>{const t=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=yn(Object.entries(n),([u])=>u,(u,[d,f])=>!Wo(d,t.keysShape)||!Wo(f,t.valuesShape)),s=y1(t.keysShape,n),a=o.length?["Failure at keys",o.join(",")].join(": "):"",l=s.length?["Missing keys",s.join(",")].join(": "):"";return[a,l].filter(F.isTruthy).join(`
`)})}i(vN,"setRecordShapeRegistry");function y1(e,r){const t=Ac(e).filter(n=>F.isPropertyKey(n));return t.length?t.filter(n=>!F.hasKey(r,n)):[]}i(y1,"getMissingKeys");function yN({keysShape:e,valuesShape:r,isPartial:t}){if(t)return{};{const n=Ac(e),o=r.default;return Object.fromEntries(n.map(s=>[s,o]))}}i(yN,"createDefaultValue");function Z5(e){return cm(e)?e:dm(e)?Re(e):F.isObject(e)?Ki(e):F.isArray(e)&&F.isLengthAtLeast(e,1)?cr(...e.map(r=>$e(r))):F.isPropertyKey(e)?Re(e):Re(Ge.Undefined())}i(Z5,"defineKeysShape");function Ac(e){const r=e.$_schema,t=r[_].toLowerCase();return["const","literal"].includes(t)?[r.const]:t==="union"?_c(r.anyOf.flatMap(n=>Ac(Re(n)))):["undefined","number","string","symbol"].includes(t)?[]:Ac(Z5(e.default))}i(Ac,"extractFiniteKeys");function wN(e){return Re(Ge.Unknown({default:e}))}i(wN,"unknownShape");const $N=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],fm=$N.reduce((e,r)=>(e[r]=r,e),{});ur.defaultZone.name;const Y5=fm.UTC,kN=Re({hour:As({...Ep,default:Ep.min}),minute:As({...Ap,default:Ap.min}),second:As({...Mp,default:Mp.min}),millisecond:As({...Fp,default:Fp.min}),timezone:Ki(fm,Y5)}),xN=Re({year:2023,month:As({...Tp,default:Tp.min}),day:As({...Np,default:Np.min}),timezone:Ki(fm,Y5)});Re(gN(xN,kN));ie.Years+"",ie.Months+"",ie.Weeks+"",ie.Days+"",ie.Hours+"",ie.Minutes+"",ie.Seconds+"",ie.Milliseconds+"";Re(cr({get:$e(Y.Month),in:cr($e(Y.Year))},{get:$e(Y.Week),in:cr($e(Y.Year),$e(Y.Month))},{get:$e(Y.Day),in:cr($e(Y.Year),$e(Y.Month),$e(Y.Week))},{get:$e(Y.Hour),in:cr($e(Y.Year),$e(Y.Month),$e(Y.Week),$e(Y.Day))},{get:$e(Y.Minute),in:cr($e(Y.Year),$e(Y.Month),$e(Y.Week),$e(Y.Day),$e(Y.Hour))},{get:$e(Y.Second),in:cr($e(Y.Year),$e(Y.Month),$e(Y.Week),$e(Y.Day),$e(Y.Hour),$e(Y.Minute))},{get:$e(Y.Millisecond),in:cr($e(Y.Year),$e(Y.Month),$e(Y.Week),$e(Y.Day),$e(Y.Hour),$e(Y.Minute),$e(Y.Second))}));Ad({keys:Ki(ie),values:-1,partial:!0});var w1;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(w1||(w1={}));var dh;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(dh||(dh={}));var $1;(function(e){e.Year="year",e.Month="month",e.Day="day"})($1||($1={}));const DN={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};U6(DN,Wt(dh));fN({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return CN(e)}});function CN(e){return oe.fromISO(e).toUTC().toISO()===e}i(CN,"isValidIsoString");const EN=Re({listen(e,r){return()=>!1},destroy(){},removeListener(e){return!1},value:wN()});function Bf(e){return Wo(e,EN,{allowExtraKeys:!0})}i(Bf,"isObservableBase");class J5 extends Lw{static{i(this,"Observable")}value;equalityCheck;constructor(r){super(),this.value=r.defaultValue,this.equalityCheck="equalityCheck"in r?r.equalityCheck:kg}setValue(r){return super.setValue(r)}listen(r,t){return super.listen(r,t)}removeListener(r){return super.removeListener(r)}}const{I:AN}=kD,k1=i(e=>e,"i$1"),x1=i(()=>document.createComment(""),"s"),Ra=i((e,r,t)=>{const n=e._$AA.parentNode,o=r===void 0?e._$AB:r._$AA;if(t===void 0){const s=n.insertBefore(x1(),o),a=n.insertBefore(x1(),o);t=new AN(s,a,e,e.options)}else{const s=t._$AB.nextSibling,a=t._$AM,l=a!==e;if(l){let u;t._$AQ?.(e),t._$AM=e,t._$AP!==void 0&&(u=e._$AU)!==a._$AU&&t._$AP(u)}if(s!==o||l){let u=t._$AA;for(;u!==s;){const d=k1(u).nextSibling;k1(n).insertBefore(u,o),u=d}}}return t},"v"),Ci=i((e,r,t=e)=>(e._$AI(r,t),e),"u$1"),MN={},FN=i((e,r=MN)=>e._$AH=r,"p$2"),SN=i(e=>e._$AH,"M$1"),Rf=i(e=>{e._$AR(),e._$AA.remove()},"h");const Md={ATTRIBUTE:1,CHILD:2,ELEMENT:6},no=i(e=>(...r)=>({_$litDirective$:e,values:r}),"e$4");class oo{static{i(this,"i")}constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,n){this._$Ct=r,this._$AM=t,this._$Ci=n}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}}const TN={attribute:!0,type:String,converter:dc,reflect:!1,hasChanged:og},NN=i((e=TN,r,t)=>{const{kind:n,metadata:o}=t;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(t.name,e),n==="accessor"){const{name:a}=t;return{set(l){const u=r.get.call(this);r.set.call(this,l),this.requestUpdate(a,u,e,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,e,l),l}}}if(n==="setter"){const{name:a}=t;return function(l){const u=this[a];r.call(this,l),this.requestUpdate(a,u,e,!0,l)}}throw Error("Unsupported decorator location: "+n)},"r");function PN(e){return(r,t)=>typeof t=="object"?NN(e,r,t):((n,o,s)=>{const a=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),a?Object.getOwnPropertyDescriptor(o,s):void 0})(e,r,t)}i(PN,"n$1");const Et=no(class extends oo{constructor(e){if(super(e),e.type!==Md.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(r=>e[r]).join(" ")+" "}update(e,[r]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in r)r[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(r)}const t=e.element.classList;for(const n of this.st)n in r||(t.remove(n),this.st.delete(n));for(const n in r){const o=!!r[n];o===this.st.has(n)||this.nt?.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Yt}});const jr=i(e=>e??ee,"o$1");let fh=class extends oo{static{i(this,"e")}constructor(r){if(super(r),this.it=ee,r.type!==Md.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===ee||r==null)return this._t=void 0,this.it=r;if(r===Yt)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const t=[r];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};fh.directiveName="unsafeHTML",fh.resultType=1;const D1=no(fh);function IN(e,r,t){return e?r(e):t?.(e)}i(IN,"n");class ON extends ol{static{i(this,"DeclarativeElement")}static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function BN(e,r,t){const n=!r.length&&!t.length,o=e.length?!1:!r.filter(l=>!!l.index).length;if(n||o)return[...e];const s=e.map(l=>[l]);return s.length||(s[0]=[]),t.forEach(l=>{l>=0&&l<e.length&&(s[l]=[])}),r.forEach(l=>{const u=s[l.index];u&&u.splice(0,0,...l.values)}),s.flat()}i(BN,"insertAndRemoveValues");function hh(e){return F.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}i(hh,"isMinimalDefinitionWithInputs");function hm(e){return F.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}i(hm,"hasTagName");function X5(e){return yn(e,r=>{if(hh(r))return r.definition;if(hm(r))return r.tagInterpolationKey||r},F.isTruthy)}i(X5,"extractElementKeys");const Q5=new WeakMap;function RN(e,r){const t=X5(r);return e$(Q5,[e,...t]).value?.template}i(RN,"getAlreadyMappedTemplate");function LN(e,r,t){const n=X5(r);return t$(Q5,[e,...n],t)}i(LN,"setMappedTemplate");function e$(e,r,t=0){const{currentTemplateAndNested:n,reason:o}=r$(e,r,t);return n?t===r.length-1?{value:n,reason:"reached end of keys array"}:n.nested?e$(n.nested,r,t+1):{value:void 0,reason:`map at key index ${t} did not have nested maps`}:{value:n,reason:o}}i(e$,"getNestedValues");function r$(e,r,t){const n=r[t];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${t} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${t} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${t} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}i(r$,"getCurrentKeyAndValue");function t$(e,r,t,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:a}=r$(e,r,n);if(!s)return{result:!1,reason:a};const l=o??{nested:void 0,template:void 0};if(o||e.set(s,l),n===r.length-1)return l.template=t,{result:!0,reason:"set value at end of keys array"};const u=l.nested??new WeakMap;return l.nested||(l.nested=u),t$(u,r,t,n+1)}i(t$,"setNestedValues");function n$(e,r,t){const n=RN(e,r),o=n??t();if(!n){const l=LN(e,r,o);if(!l.result)throw new Error(`Failed to set template transform: ${l.reason}`)}const s=o.valuesTransform(r),a=BN(r,s.valueInsertions,s.valueIndexDeletions);return{strings:o.templateStrings,values:a}}i(n$,"getTransformedTemplate");function o$(e,r,t,n){const o=[],s=[],a=[],l=[];return e.forEach((d,f)=>{const h=o.length-1,g=o[h],m=f-1,y=r[m];n&&n(d);let k,x=[];if(typeof g=="string"&&(k=t(g,d,y),k)){o[h]=[g,k.replacement].join(""),a.push(m);const E=k.getExtraValues;x=E?E(y):[],x.length&&E?(o[h]+=" ",x.forEach((I,j)=>{j&&o.push(" ")}),l.push(I=>{const j=I[m],K=E(j);return{index:m,values:K}}),o.push(d)):o[h]+=d}k||o.push(d);const C=e.raw[f];k?(s[h]=[s[h],k.replacement,C].join(""),x.length&&x.forEach(()=>{s.push("")})):s.push(C)}),{templateStrings:Object.assign([],o,{raw:s}),valuesTransform(d){const f=l.flatMap(h=>h(d));return{valueIndexDeletions:a,valueInsertions:f}}}}i(o$,"transformTemplate");function jN(...[e,r,t]){if(hm(t))return{replacement:t.tagName,getExtraValues:void 0}}i(jN,"transformCss");function _N(e,r){return o$(e,r,jN)}i(_N,"transformCssTemplate");function D(e,...r){const t=n$(e,r,()=>_N(e,r));return K2(t.strings,...t.values)}i(D,"css");const UN={allowPolymorphicState:!1,errorHandler:void 0};function i$(e,r){const t=e.instanceState;ze(r).forEach(n=>{if(t&&n in t)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=r[n]:e[n]=r[n]}),"instanceInputs"in e&&ze(e.instanceInputs).forEach(n=>{n in r||(e.instanceInputs[n]=void 0)})}i(i$,"assignInputs");class zN extends CustomEvent{static{i(this,"TypedEvent")}_type="";get type(){return this._type}constructor(r,t){super(typeof r=="string"?r:r.type,{detail:t,bubbles:!0,composed:!0})}}function gm(){return e=>class extends zN{static type=e;_type=e;constructor(r){super(e,r)}}}i(gm,"defineTypedEvent");function nr(){return gm()}i(nr,"defineElementEvent");function VN(e,r){return r?Object.keys(r).filter(t=>{if(typeof t!="string")throw new TypeError(`Expected event key of type string but got type '${typeof t}' for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const o=gm()([e,n].join("-"));return t[n]=o,t},{}):{}}i(VN,"createEventDescriptorMap");function qN(e){return e?ar(e,r=>r):{}}i(qN,"createHostClassNamesMap");function s$(e,r){r in e||PN()(e,r)}i(s$,"bindReactiveProperty");function WN(e,r,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${t.toLowerCase()}'`);if(!(e in r))throw new Error(`Property '${String(e)}' does not exist on '${t.toLowerCase()}'.`)}i(WN,"assertValidPropertyName");function C1(e,r){const t=e;function n(a){r?WN(a,e,e.tagName):s$(e,a)}i(n,"verifyProperty");function o(a,l){return n(l),t[l]}return i(o,"valueGetter"),new Proxy({},{get:o,set(a,l,u){n(l);const d=t[l];function f(g){a[l]=g,t[l]=g}i(f,"setValueOnElement");const h=e.observablePropertyListenerMap[l];if(d!==u&&Bf(d)&&h&&d.removeListener(h),Bf(u))if(h)u.listen(!1,h);else{let g=function(){e.requestUpdate()};i(g,"newListener"),e.observablePropertyListenerMap[l]=g,u.listen(!1,g)}else Bf(d)&&(e.observablePropertyListenerMap[l]=void 0);return f(u),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,l){if(l in a)return{get value(){return o(a,l)},configurable:!0,enumerable:!0}},has(a,l){return Reflect.has(a,l)}})}i(C1,"createElementPropertyProxy");function E1(e,r){const t=[e,"-"].join("");Object.keys(r).forEach(n=>{if(!n.startsWith(t))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}i(E1,"assertValidStringNames");function A1(e,r,t){return t?Qo(t,o=>({key:o,value:[e,r,o].join("-")}),{}):{}}i(A1,"createStringNameMap");function KN({hostClassNames:e,cssVars:r}){return{hostClasses:ar(e,(t,n)=>({name:Ae(n),selector:Ae(`:host(.${n})`)})),cssVars:r}}i(KN,"createStylesCallbackInput");function GN({host:e,hostClassesInit:r,hostClassNames:t,state:n,inputs:o}){r&&ze(r).forEach(s=>{const a=r[s],l=t[s];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(l):e.classList.remove(l))})}i(GN,"applyHostClasses");function HN({element:e,eventsMap:r,cssVars:t,slotNamesMap:n,testIdsMap:o}){function s(l){ze(l).forEach(u=>{const d=l[u];e.instanceState[u]=d})}return i(s,"updateState"),{cssVars:t,slotNames:n,testIds:o,dispatch:i(l=>e.dispatchEvent(l),"dispatch"),events:r,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:s}}i(HN,"createRenderParams");function Vn(...e){return _r.isEmpty(e),r=>{const t=r;if(!F.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return ZN({...t,options:{...t.options}})}}i(Vn,"defineElement");function ZN(e){if(!F.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!F.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const r={...UN,...e.options},t=VN(e.tagName,e.events),n=qN(e.hostClasses);e.hostClasses&&E1(e.tagName,e.hostClasses),e.cssVars&&E1(e.tagName,e.cssVars);const o=e.cssVars?eo(e.cssVars):{},s=A1(e.tagName,"slot",e.slotNames),a=A1(e.tagName,"test-id",e.testIds),l=typeof e.styles=="function"?e.styles(KN({hostClassNames:n,cssVars:o})):e.styles||D``,u=e.render;function d(...[h]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:h}}i(d,"typedAssignCallback");const f=class extends ON{static{i(this,"anonymousClass")}static elementOptions=r;static tagName=e.tagName;static styles=l;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return HN({element:this,eventsMap:t,cssVars:o,slotNamesMap:s,testIdsMap:a})}static assign=d;static events=t;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=s;static testIds=a;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const h=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(h);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");ze(m).forEach(y=>{s$(this,y),this.instanceState[y]=m[y]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(h)instanceof Promise))throw new TypeError("init cannot be asynchronous");const g=u(h);if(g instanceof Promise)throw new TypeError("render cannot be asynchronous");return GN({host:h.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:h.state,inputs:h.inputs}),this._lastRenderedProps={inputs:{...h.inputs},state:{...h.state}},g}catch(h){const g=Ji(h,`Failed to render ${e.tagName}`);return console.error(g),this._lastRenderError=g,r.errorHandler?.(g),Jr(g)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const h=this.createRenderParams();if(e.init(h)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(h=>{F.hasKey(h,"destroy")&&F.isFunction(h.destroy)&&h.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup&&this._stateCalled){const h=this.createRenderParams();if(e.cleanup(h)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(h){i$(this,h)}observablePropertyListenerMap={};instanceInputs=C1(this,!1);instanceState=C1(this,!r.allowPolymorphicState);constructor(){super(),this.definition=f}};return Object.defineProperties(f,{name:{value:q6(e.tagName,{firstLetterCase:ml.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,f)),f}i(ZN,"internalDefineElement");class YN extends Cs{static{i(this,"InternalAsyncPropClass")}isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function JN(e){return new YN(e)}i(JN,"asyncProp");const M1=i((e,r,t)=>{const n=new Map;for(let o=r;o<=t;o++)n.set(e[o],o);return n},"u"),XN=no(class extends oo{constructor(e){if(super(e),e.type!==Md.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,r,t){let n;t===void 0?t=r:r!==void 0&&(n=r);const o=[],s=[];let a=0;for(const l of e)o[a]=n?n(l,a):a,s[a]=t(l,a),a++;return{values:s,keys:o}}render(e,r,t){return this.dt(e,r,t).values}update(e,[r,t,n]){const o=SN(e),{values:s,keys:a}=this.dt(r,t,n);if(!Array.isArray(o))return this.ut=a,s;const l=this.ut??=[],u=[];let d,f,h=0,g=o.length-1,m=0,y=s.length-1;for(;h<=g&&m<=y;)if(o[h]===null)h++;else if(o[g]===null)g--;else if(l[h]===a[m])u[m]=Ci(o[h],s[m]),h++,m++;else if(l[g]===a[y])u[y]=Ci(o[g],s[y]),g--,y--;else if(l[h]===a[y])u[y]=Ci(o[h],s[y]),Ra(e,u[y+1],o[h]),h++,y--;else if(l[g]===a[m])u[m]=Ci(o[g],s[m]),Ra(e,o[h],o[g]),g--,m++;else if(d===void 0&&(d=M1(a,m,y),f=M1(l,h,g)),d.has(l[h]))if(d.has(l[g])){const k=f.get(a[m]),x=k!==void 0?o[k]:null;if(x===null){const C=Ra(e,o[h]);Ci(C,s[m]),u[m]=C}else u[m]=Ci(x,s[m]),Ra(e,o[h],x),o[k]=null;m++}else Rf(o[g]),g--;else Rf(o[h]),h++;for(;m<=y;){const k=Ra(e,u[y+1]);Ci(k,s[m]),u[m++]=k}for(;h<=g;){const k=o[h++];k!==null&&Rf(k)}return this.ut=a,FN(e,u),Yt}}),QN=XN;function Fd(e,r){return Gi(e,r),e.element}i(Fd,"extractElement");function eP(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}i(eP,"getPartHostTagName");function Gi(e,r){const t=eP(e),n=t?`: in ${t}`:"";if(e.type!==Md.ELEMENT)throw new Error(`${r} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${r} directive found no element${n}.`)}i(Gi,"assertIsElementPartInfo");function rP(e,r){return no(class extends oo{element;constructor(t){super(t),this.element=vr.instanceOf(Fd(t,e),HTMLElement)}render(...t){return r({params:t,directive:this,element:this.element}),Yt}})}i(rP,"createMutateDirective");const xo=rP("attributes",({element:e,params:[r],directive:t})=>{if(!r)return;const o=Qi(t,"allAttributesApplied",()=>new Set);ze(r).forEach(s=>{if(s.toLowerCase()!==s)throw new Error(`Cannot assign attribute name with uppercase letters: ${s}`);o.add(s)}),o.forEach(s=>{const a=r[s];a==null||a===!1||a===ee?e.removeAttribute(s):a===""||a===!0?e.setAttribute(s,""):e.setAttribute(s,String(a))})});function tP(e){const r=no(class extends oo{element;constructor(t){super(t),this.element=Fd(t,e)}render(t){return this.element.setAttribute(e,t),Yt}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(t){return r(t)},attributeName:e}}i(tP,"createAttributeDirective");function U(e,r){return nP(e,r)}i(U,"listen");const nP=no(class extends oo{element;lastListenerMetaData;constructor(e){super(e),this.element=Fd(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,r){return{eventType:e,callback:r,listener:i(t=>this.lastListenerMetaData?.callback(t),"listener")}}render(e,r){const t=typeof e=="string"?e:e.type;if(typeof t!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(t)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===t?this.lastListenerMetaData.callback=r:this.resetListener(this.createListenerMetaData(t,r)),Yt}});function oP(e){return U("keydown",async r=>{const t=r.code.toLowerCase();(t.includes("enter")||t.includes("return")||t==="space")&&(r.stopImmediatePropagation(),r.preventDefault(),await e())})}i(oP,"listenToActivate");const F1="onDomCreated",Hi=no(class extends oo{element;constructor(e){super(e),Gi(e,F1)}update(e,[r]){Gi(e,F1);const t=e.element;return t!==this.element&&(window.requestAnimationFrame(()=>r(t)),this.element=t),this.render(r)}render(e){}}),S1="onDomRendered",iP=no(class extends oo{constructor(e){super(e),Gi(e,S1)}update(e,[r]){Gi(e,S1);const t=e.element;return window.requestAnimationFrame(()=>r(t)),this.render(r)}render(e){}}),T1="onResize",a$=no(class extends oo{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&sP(this.element,this.callback,e)});callback;constructor(e){super(e),Gi(e,T1)}update(e,[r]){Gi(e,T1),this.callback=r;const t=e.element,n=this.element;return t!==n&&(this.element=t,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(t)),this.render(r)}render(e){}});function sP(e,r,t){const n=t[0];if(!n)throw console.error(t),new Error("Resize observation triggered but the first entry was empty.");r({target:n.target,contentRect:n.contentRect},e)}i(sP,"handleOnResizeCallback");function Bt(e,r,t){return IN(e,()=>r,()=>t)}i(Bt,"renderIf");const{attributeDirective:aP}=tP("data-test-id"),Ko=aP;function l$(e){const{assertInputs:r,transformInputs:t}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(r(o),Vn(...n)(t(o)))}i(l$,"wrapDefineElement");function lP(e,r){return uP(void 0,e)}i(lP,"assign");const uP=no(class extends oo{element;constructor(e){super(e),this.element=Fd(e,"assign")}render(e,r){return i$(this.element,r),Yt}}),cP={};function dP(e,r){return r.map((t,n)=>{const o=e[n],s=e[n+1];if(o&&s){const{shouldHaveTagNameHere:a}=u$(o,s);if(a&&F.isString(t))return{tagName:t,tagInterpolationKey:Qi(cP,t,()=>({tagName:t}))}}return t})}i(dP,"mapHtmlValues");function u$(e,r){const t=e.trim().endsWith("<")&&!!r.match(/^[\s>]/),n=e.trim().endsWith("</")&&r.trim().startsWith(">");return{isOpeningTag:t,shouldHaveTagNameHere:t||n}}i(u$,"classifyValue");function fP(...[e,r,t]){const n=hh(t)?t.definition:t,{isOpeningTag:o,shouldHaveTagNameHere:s}=u$(e,r),a=hm(n);if(a&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!a)throw console.error({lastNewString:e,currentTemplateString:r,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!s||!a?void 0:{replacement:n.tagName,getExtraValues(u){const d=hh(u)?u.inputs:void 0;return[o&&d?lP(d):void 0].filter(F.isTruthy)}}}i(fP,"transformHtml");function hP(e){}i(hP,"stringValidator");function gP(e){return o$(e.strings,e.values,fP,hP)}i(gP,"transformHtmlTemplate");function p(e,...r){const t=dP(e,r),n=mD(e,...t),o=n$(e,t,()=>gP(n));return{...n,strings:o.strings,values:o.values}}i(p,"html");function gh(e){if("templateString"in e)return e.templateString;const{strings:r,values:t}=e;if(!r?.length&&!t?.length)return"";const n=[...t||[],""],s=(r??[""]).map((a,l)=>{const u=mP(a,n[l]);return`${a}${u}`});return L2(s.join(""))}i(gh,"convertTemplateToString");function mP(e,r){return r._$litType$!=null||r._$litDirective$!=null?gh(r):Array.isArray(r)?r.map(n=>gh(n)).join(""):e.endsWith("=")?`"${r}"`:r}i(mP,"extractValue");function c$(e){return ar(e,(r,t)=>t instanceof Ye?Ae(t.toString({format:"hex"})):c$(t))}i(c$,"colorsObjectToCssResult");const pP="dodgerblue";function mh(e){const r=Math.abs(e.contrast("white","APCA")),t=Math.abs(e.contrast("black","APCA"));return r>t?"white":"black"}i(mh,"calculateTextColorString");function Lf({background:e,foreground:r}){return{background:e??new Ye(mh(r)),foreground:r??new Ye(mh(e))}}i(Lf,"createColorPair");var Mc;(function(e){e.Dark="dark",e.Light="light"})(Mc||(Mc={}));function bP(e){return e==="black"?"white":"black"}i(bP,"flipBackForeground");const vP={black:{foregroundFaint1:new Ye("#ccc"),foregroundFaint2:new Ye("#eee")},white:{foregroundFaint1:new Ye("#ccc"),foregroundFaint2:new Ye("#eee")}},yP={black:{backgroundFaint1:new Ye("#666"),backgroundFaint2:new Ye("#444")},white:{backgroundFaint1:new Ye("#ccc"),backgroundFaint2:new Ye("#fafafa")}};function N1({themeColor:e=pP,themeStyle:r=Mc.Light}={}){const t=new Ye(e),n=new Ye(r===Mc.Dark?"black":"white"),o=mh(n),s=new Ye(o),a={nav:{hover:Lf({background:t.clone().set({"hsl.l":93})}),active:Lf({background:t.clone().set({"hsl.l":90})}),selected:Lf({background:t.clone().set({"hsl.l":85})})},accent:{icon:t.clone().set({"hsl.l":40})},page:{background:n,...yP[bP(o)],foreground:s,...vP[o]}};return c$(a)}i(N1,"createTheme");async function P1(e=1){const r=new nc;function t(){requestAnimationFrame(()=>{e--,e?t():r.resolve()})}return i(t,"requestNextFrame"),t(),r.promise}i(P1,"waitForAnimationFrame");function wP(e,r){return{element:e,children:d$(e)}}i(wP,"getNestedChildrenTree");function d$(e,r,t){return $P(e).map(n=>{const o=d$(n);return{element:n,children:o}})}i(d$,"recursivelyGetNestedChildrenTree");function $P(e){return[...e.children,...e.shadowRoot?.children??[]]}i($P,"getDirectChildren");function jf(e){return e.matches(":focus")}i(jf,"isElementFocused");function mm(e){if(e instanceof ShadowRoot)return e.host;const r=e.parentNode;if(r)return r instanceof Element?r:mm(r)}i(mm,"getParentElement");function f$(e,r){if(r(e))return e;const t=mm(e);if(t)return f$(t,r)}i(f$,"findMatchingAncestor");function Sd(e,r,t={}){const n=t.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof r)){const o=r.name,s=n?.constructor.name,a=t.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${s}'.`;throw new Error(a)}return n}i(Sd,"extractEventTarget");function kP(e){const r=mm(e);return r&&f$(r,t=>globalThis.getComputedStyle(t).overflowY!=="visible")||document.body}i(kP,"findOverflowAncestor");function xP(e){let r=0,t=document.activeElement||void 0;for(;t;){if(e({depth:r,element:t}))return r;t=t.shadowRoot?.activeElement||void 0,t&&++r}return r}i(xP,"walkActiveElement");function DP({searchQuery:e,searchIn:r}){const t=r.length,n=e.length;if(n>t)return!1;if(n===t)return e===r;const o=r.toLowerCase(),s=e.toLowerCase();e:for(let a=0,l=0;a<n;a++){const u=s.codePointAt(a);for(;l<t;)if(o.codePointAt(l++)===u)continue e;return!1}return!0}i(DP,"fuzzySearch");const CP=Ii(32);function Yu(e){return e.join(CP)}i(Yu,"createBreadcrumbsSearchKey");function h$(e){if(!e.length)return[];const r=Yu(e),t=h$(e.slice(0,-1));return[r,...t]}i(h$,"getFullTreeKeysToInclude");const EP=["error","errors"];function AP(e){return EP.includes(e)}i(AP,"isSearchingForErrors");function MP({flattenedNodes:e,searchQuery:r}){const t={};function n(o){Object.values(o.children).map(a=>(n(a),Yu(a.fullUrlBreadcrumbs))).forEach(a=>t[a]=!0)}return i(n,"addChildren"),e.forEach(o=>{const s=o.entry.errors.length&&AP(r),a=Yu(o.fullUrlBreadcrumbs);if(DP({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>F.isString(u)?u:gh(u))].join(" ").toLowerCase(),searchQuery:r.toLowerCase()})||s||t[a]){const u=h$(o.fullUrlBreadcrumbs);n(o),u.forEach(d=>t[d]=!0)}else t[a]=!1}),e.filter(o=>{const s=Yu(o.fullUrlBreadcrumbs),a=t[s];if(!F.isBoolean(a))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}i(MP,"searchFlattenedNodes");class pm extends Error{static{i(this,"SpaRouterError")}name="SpaRouterError"}class I1 extends pm{static{i(this,"GlobalUrlEventsConsolidationError")}name="GlobalUrlEventsConsolidationError"}class FP extends pm{static{i(this,"SanitizationDepthMaxed")}name="SanitizationDepthMaxed"}Re({paths:[""],search:tt(cr(void 0,Ad({keys:"",values:[""]}))),hash:tt(cr(void 0,""))});const SP=Re({basePath:tt("",{alsoUndefined:!0}),sanitizeRoute:i((e=>e),"sanitizeRoute"),maxListenerCount:tt(1,{alsoUndefined:!0}),disableWarnings:tt(!1,{alsoUndefined:!0}),isPaused:tt(!1,{alsoUndefined:!0})}),_f="://";function bm(...e){const r=e.join("/"),[t,n=""]=r.includes(_f)?r.split(_f):["",r];let o=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((a,l,u,d)=>{if(o)return a;const f=d[u+1];let h=l;const g=f?.startsWith("?"),m=!l.includes("?")&&g,y=f==="?";if(g||m){o=!0;let k=!1;const x=d.slice(u+2).reduce((C,E)=>(E.includes("#")&&(k=!0),k?C.concat(E):[C,E].join("&")),"");h=[l,f,y?Oi({value:x,prefix:"&"}):x].join("")}return a.concat(h)},[]);return[t,t?_f:"",s.join("/")].join("")}i(bm,"joinUrlPaths");var ta;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(ta||(ta={}));var na;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(na||(na={}));const TP=Re({encoding:tt(cr(void 0,Ki(ta))),searchParamStrategy:tt(cr(void 0,Ki(na)))});function Su(e,r){return e.map(t=>{if(t!=null)return Os(String(t),r)}).filter(t=>t!=null)}i(Su,"codeValues");function Os(e,r){return r?.encoding===ta.Decode?decodeURIComponent(e):r?.encoding===ta.Encode?encodeURIComponent(e):e}i(Os,"codeValue");const NP=Re(Ad({keys:"",values:[""]}));function PP(e,r,t){const n=t?.searchParamStrategy===na.Clear?{}:ar(e,(a,l)=>$6(l)),o=ar(r,(a,l)=>{if(t?.searchParamStrategy===na.Append){const u=n[a],d=F.isArray(u)?u:[u];if(l){const f=F.isArray(l)?l:[l];return Su([...d,...f],t)}else return Su(d,t)}else return F.isArray(l)?Su(l,t):l?Su([l],t):void 0});return Hc({...n,...o},(a,l)=>!!l)}i(PP,"combineSearchParams");function g$(e,r){return F.isString(e)&&!e.includes("?")?{}:(F.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[a,...l]=_6(s,"=");return[a,l.length?l.join("="):void 0]}).reduce((s,[a,l])=>{const u=m$({options:r,key:a,value:l}),d=Qi(s,u.key,()=>[]);return l!=null&&d.push(u.value),s},{})}i(g$,"searchParamsToObject");function IP(e){if(e!=null)return F.isArray(e)?[...e]:e===""?[]:[e]}i(IP,"wrapParamValue");function OP(e,r){const t=yn(Object.entries(e),([n,o])=>{const s=IP(o);return s?.length?s.map(a=>{const l=m$({options:r,key:n,value:a});return[l.key,l.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return t.length?Dt({value:t.join("&"),prefix:"?"}):""}i(OP,"searchParamsToString");function m$({options:e,key:r,value:t}){return{key:Os(r,e),value:Os(String(t),e)}}i(m$,"codeParamKeyValue");function p$({hash:e,hostname:r,password:t,pathname:n,port:o,protocol:s,search:a,username:l}){return[s?s+"://":"",l?l+":":"",t?t+"@":"",Td({hostname:r,port:o}),vm({hash:e,pathname:n,search:a})].join("")}i(p$,"createHref");function b$({pathname:e}){const r=Oi({value:e,prefix:"/"});return r?r.split("/"):[]}i(b$,"createPaths");function vm({hash:e,pathname:r,search:t}){return[Dt({value:r,prefix:"/"}),t?Dt({value:t,prefix:"?"}):"",e?Dt({value:e,prefix:"#"}):""].join("")}i(vm,"createFullPath");function Td({hostname:e,port:r}){return[e,r?":"+r:""].join("")}i(Td,"createHost");function v$({hostname:e,port:r,protocol:t}){return[t,Td({hostname:e,port:r})].filter(F.isTruthy).join("://")}i(v$,"createOrigin");function Bs(e,r){const t=F.isString(e)?Oi({value:e,prefix:"."}):e.toString(),n=t.replace(/^[^#]*(?:#|$)/,""),o=n?Dt({value:Os(n,r),prefix:"#"}):"",s=t.replace(/#[^#]*$/,""),a=s.replace(/^[^?]*(?:\?|$)/,""),l=a?Dt({value:Os(a,r),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),d=u.includes("://")?u.replace(/:\/\/.*$/,""):"",f=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),h=f.replace(/@.*/,""),g=f.replace(/^[^@]*@/,""),m=h!==g,[y,...k]=m?h.split(":").reverse():[],x=k.toReversed().join("").replace(/[/:]/g,"")||"",C=y?.replace(/[/:]/g,"")||"",E=j6(g.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),I=E[0]?.endsWith("]")?"":E[1]===":"&&E[0]||"",K=g.replace(new RegExp(`:${I}($|/)`),"$1").replace(/\/.*/,""),ae=g.replace(/^[^/]*(\/|$)/,"$1"),Te=Os(ae.replace(/^[^/]*(?:\/|$)/,"/"),r),me=Td({hostname:K,port:I}),Me=v$({hostname:K,port:I,protocol:d}),Xe=p$({hash:o,hostname:K,password:C,pathname:Te,port:I,protocol:d,search:l,username:x}),Qe=g$(l),Or=b$({pathname:Te});return{fullPath:vm({hash:o,pathname:Te,search:l}),hash:o,host:me,hostname:K,href:Xe,origin:Me,password:C,pathname:Te,paths:Or,port:I,protocol:d,search:l,searchParams:Qe,username:x}}i(Bs,"parseUrl");Re({hash:tt(cr(void 0,"")),search:tt(cr(void 0,"",Ad({keys:"",values:cr(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:tt(cr(void 0,"")),pathname:tt(cr(void 0,"")),paths:tt(cr(void 0,[""])),protocol:tt(cr(void 0,"")),username:tt(cr(void 0,"")),password:tt(cr(void 0,"")),port:tt(cr(void 0,"",-1))});function BP(e,r,t){const n=!!t,o=r==null||Wo(r,TP,{allowExtraKeys:!1}),s=o?Bs(""):F.instanceOf(e,URL)||F.isString(e)?Bs(e):e,a=o?e:r,l=F.isString(a)&&a.startsWith("."),u=F.isString(a)||F.instanceOf(a,URL)?Hc(Bs(a),(k,x)=>F.isTruthy(x)):a,d=n?t:o?r:void 0,f=ar(s,(k,x)=>{if(!F.hasKey(u,k))return x;const C=u[k];return F.isNumber(C)?String(C):F.isString(C)?k==="hash"&&C?Dt({value:C,prefix:"#"}):k==="pathname"?Dt({value:C,prefix:"/"}):C:x});F.hasKey(u,"paths")&&u.paths&&(f.pathname=bm(l?s.pathname:"",...u.paths));const h=F.isString(u.search)?g$(Dt({value:u.search,prefix:"?"})):An(u.search||{}),g=PP(f.searchParams,h,{...d,encoding:ta.None}),m=OP(g,d);return{...f,searchParams:g,search:m,paths:b$(f),fullPath:vm(f),host:Td(f),origin:v$(f),href:p$({...f,search:m})}}i(BP,"buildUrl");const RP=Re({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:NP,hash:"",fullPath:"/",href:"/"});({...RP.default});const LP=0;function y$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==LP)}i(y$,"shouldClickEventTriggerRouteChange");const Nd="locationchange",yo=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const O1=yo?.pushState;function B1(...e){if(!O1)return;const r=O1.apply(yo,e);return globalThis.dispatchEvent(new Event(Nd)),r}i(B1,"newPushState");const R1=yo?.replaceState;function L1(...e){if(!R1)return;const r=R1.apply(yo,e);return globalThis.dispatchEvent(new Event(Nd)),r}i(L1,"newReplaceState");function jP(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!yo)){{if(yo.pushState===B1)throw new I1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(yo.replaceState===L1)throw new I1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,yo.pushState=B1,yo.replaceState=L1,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Nd))})}}i(jP,"consolidateGlobalUrlEvents");function Tu(e,r){const t=Bs(e),n=Oi({value:Oi({value:t.pathname,prefix:Dt({value:r||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],s=Object.keys(t.searchParams).length?t.searchParams:void 0,a=t.hash?Oi({value:t.hash,prefix:"#"}):void 0;return{paths:o,search:s,hash:a}}i(Tu,"parseUrlIntoRawRoute");class _P{static{i(this,"SpaRouter")}innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(r){Ec(r,SP),this.params={...r};const t=this.readCurrentRoute();this.innerObservable=new J5({defaultValue:t,equalityCheck:i(()=>!1,"equalityCheck")}),jP(),this.removeGlobalListener=$o(globalThis,Nd,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new FP("Looping route sanitization detected; aborting window URL change listener.");const n=Tu(globalThis.location.href,this.params.basePath),o=r.sanitizeRoute(n);F.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),r.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(r){return!r.paths||!this.params.basePath?!1:bm(...r.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Tu(globalThis.location.href,this.params.basePath))}sanitizeRoute(r){return this.params.sanitizeRoute(r)}createRouteUrl(r){const t={...Tu(globalThis.location.href,this.params.basePath),...r},n=this.sanitizeRoute(t),s=this.routeIncludesBasePath(Tu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return BP(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?Dt({value:s.hash,prefix:"#"}):""},{searchParamStrategy:na.Clear}).href}setRoute(r,t={}){const n=this.createRouteUrl(r),{fullPath:o}=Bs(n);return this.params.isPaused||!t.force&&F.jsonEquals(Bs(globalThis.location.href).fullPath,o)?!1:t.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(r,t){return y$(t)?(t.preventDefault(),this.setRoute(r)):!1}listen(r,t){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new pm(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(r,t),()=>this.removeListener(t)}removeListener(r){return this.innerObservable.removeListener(r)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function UP(e){return new _P({basePath:e,sanitizeRoute(r){return{paths:zP(r.paths),hash:void 0,search:void 0}}})}i(UP,"createBookRouter");function zP(e){const r=e[0];if(F.isEnumValue(r,Pt)){if(r===Pt.Book)return[Pt.Book,...e.slice(1)];if(r===Pt.Search)return e[1]?[r,e[1]]:[Pt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Vs.paths}i(zP,"sanitizePaths");const Fc=gm()("element-book-change-route"),b=eo({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function Q({name:e,svgTemplate:r}){return{name:e,svgTemplate:r}}i(Q,"defineIcon");const Pd=Q({name:"Check24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function j1(e){return F.isPrimitive(e)||e instanceof qo?String(e):e.default}i(j1,"noRefColorInitToString");function Gn(e,r,t,n){const o=`${t.prefix}-default-fg`,s=`${t.prefix}-default-bg`;if(F.isPrimitive(r)||r instanceof qo)return r;if("refDefaultBackground"in r)return`var(--${s}, ${j1(t.background)})`;if("refDefaultForeground"in r)return`var(--${o}, ${j1(t.foreground)})`;if("refBackground"in r||"refForeground"in r){const a=F.hasKey(r,"refBackground")?"refBackground":F.hasKey(r,"refForeground")?"refForeground":void 0,l=a&&F.hasKey(r,a)?r[a]:void 0,u=a==="refBackground"?"background":"foreground",d=l&&n[l];if(!d)throw new Error(`Color theme ${a} reference '${l}' does not exist. (Referenced from '${e}'.)`);const f=d[u]||(u==="foreground"?Gn(o,t.foreground,t,n):Gn(s,t.background,t,n));return`var(--${l}-${u==="foreground"?"fg":"bg"}, ${Gn(l,f,t,n)})`}else return r.value}i(Gn,"createColorCssVarDefault");const tr="theme-default";function w$(e,r){try{if(tr in r)throw new Error(`Cannot define theme color by name '${tr}', it is used internally.`);const t=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,s=`${e.prefix}-default-inverse-bg`,a={[t]:Gn(t,e.foreground,e,r),[n]:Gn(n,e.background,e,r),[o]:Gn(o,e.background,e,r),[s]:Gn(s,e.foreground,e,r)},l=eo(a),u=Pn(r).reduce((y,[k,x])=>{const C=_1(k),E=x.foreground?Gn([k,"foreground"].join(" "),x.foreground,e,r):`var(${l[t].name}, ${l[t].default})`,I=x.background?Gn([k,"background"].join(" "),x.background,e,r):`var(${l[n].name}, ${l[n].default})`;return y[C.foreground]=E,y[C.background]=I,y[C.foregroundInverse]=`var(--${C.background}, ${I})`,y[C.backgroundInverse]=`var(--${C.foreground}, ${E})`,y},{}),d=eo(u),f={},h={};Pn(r).forEach(([y,k])=>{_r.isString(y);const x=_1(y),C=d[x.foreground],E=d[x.background],I=d[x.foregroundInverse],j=d[x.backgroundInverse];_r.isDefined(C),_r.isDefined(E),_r.isDefined(I),_r.isDefined(j),f[y]={foreground:C,background:E,init:k,name:y},h[y]={foreground:I,background:j,init:k,name:y}});const g={foreground:l[t],background:l[n],init:e,name:tr},m={...g,foreground:l[o],background:l[s]};return{colors:{[tr]:g,...f},inverse:{[tr]:m,...h},init:{colors:r,default:e},prefix:e.prefix}}catch(t){throw globalThis.setTimeout(()=>B2.error(t)),t}}i(w$,"defineColorTheme");function _1(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}i(_1,"createCssVarNames");const c=eo({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-accent-5":"#daf2ff","vira-accent-10":"#bde8ff","vira-accent-20":"#98d8ff","vira-accent-30":"#77c6ff","vira-accent-40":"#4cb2ff","vira-accent-50":"#299cf9","vira-accent-60":"#0086e0","vira-accent-70":"#006ec7","vira-accent-80":"#0054aa","vira-accent-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-0":"#f3f6f6","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"});function Uf({originalTheme:e,layerKey:r,themeColor:t,override:n,overrideValues:o}){const s=n?.[r];s&&(o[String(t[r].name)]=String(Gn(r,s,e.init.default,e.init.colors)))}i(Uf,"applyCssVarOverride");function VP(e,r,{defaultOverride:t,colorOverrides:n}){const o={};t&&ze(t).forEach(u=>{Uf({originalTheme:e,layerKey:u,override:t,themeColor:e.colors[tr],overrideValues:o})});const s={};n&&Pn(n).forEach(([u,d])=>{const f=e.colors[u];if(!f)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);Uf({originalTheme:e,layerKey:"foreground",override:d,themeColor:f,overrideValues:s}),Uf({originalTheme:e,layerKey:"background",override:d,themeColor:f,overrideValues:s})});const a=ar(e.init.colors,(u,d)=>{const f=n?.[u];return{...d,...f}}),l=w$({...e.init.default,...t},a);return{name:r,overrides:{...o,...s},originalTheme:e,asTheme:l}}i(VP,"defineColorThemeOverride");const M=w$({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:c["vira-red-90"]},"vira-red-foreground-body":{foreground:c["vira-red-80"]},"vira-red-foreground-non-body":{foreground:c["vira-red-60"]},"vira-red-foreground-header":{foreground:c["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-30"]},"vira-red-foreground-decoration":{foreground:c["vira-red-20"]},"vira-red-foreground-invisible":{foreground:c["vira-red-10"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-90"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-80"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-60"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-red-40"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-red-30"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-red-20"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-red-5"]},"vira-red-behind-fg-small-body":{background:c["vira-red-5"]},"vira-red-behind-fg-body":{background:c["vira-red-20"]},"vira-red-behind-fg-non-body":{background:c["vira-red-30"]},"vira-red-behind-fg-header":{background:c["vira-red-50"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-fg-decoration":{background:c["vira-red-80"]},"vira-red-behind-fg-invisible":{background:c["vira-red-90"]},"vira-red-on-self-body":{foreground:c["vira-red-90"],background:c["vira-red-10"]},"vira-red-on-self-non-body":{foreground:c["vira-red-90"],background:c["vira-red-20"]},"vira-red-on-self-header":{foreground:c["vira-red-90"],background:c["vira-red-40"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-90"],background:c["vira-red-50"]},"vira-red-on-self-decoration":{foreground:c["vira-red-90"],background:c["vira-red-70"]},"vira-red-on-self-invisible":{foreground:c["vira-red-90"],background:c["vira-red-80"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-90"]},"vira-orange-foreground-body":{foreground:c["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-60"]},"vira-orange-foreground-header":{foreground:c["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-10"]},"vira-orange-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-90"]},"vira-orange-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-80"]},"vira-orange-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-60"]},"vira-orange-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-orange-40"]},"vira-orange-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-orange-30"]},"vira-orange-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-orange-20"]},"vira-orange-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-orange-5"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-fg-body":{background:c["vira-orange-20"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-fg-header":{background:c["vira-orange-50"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-90"]},"vira-orange-on-self-body":{foreground:c["vira-orange-90"],background:c["vira-orange-10"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-90"],background:c["vira-orange-20"]},"vira-orange-on-self-header":{foreground:c["vira-orange-90"],background:c["vira-orange-40"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-90"],background:c["vira-orange-50"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-90"],background:c["vira-orange-70"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-90"],background:c["vira-orange-80"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:c["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-5"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-90"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-70"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-60"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-40"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-30"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-20"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-5"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-10"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-20"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-90"],background:c["vira-yellow-40"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-90"],background:c["vira-yellow-50"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-90"],background:c["vira-yellow-70"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-90"],background:c["vira-yellow-80"]},"vira-green-foreground-small-body":{foreground:c["vira-green-90"]},"vira-green-foreground-body":{foreground:c["vira-green-80"]},"vira-green-foreground-non-body":{foreground:c["vira-green-60"]},"vira-green-foreground-header":{foreground:c["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-30"]},"vira-green-foreground-decoration":{foreground:c["vira-green-20"]},"vira-green-foreground-invisible":{foreground:c["vira-green-5"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-90"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-70"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-60"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-green-40"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-green-30"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-green-20"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-green-5"]},"vira-green-behind-fg-small-body":{background:c["vira-green-5"]},"vira-green-behind-fg-body":{background:c["vira-green-20"]},"vira-green-behind-fg-non-body":{background:c["vira-green-30"]},"vira-green-behind-fg-header":{background:c["vira-green-50"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-fg-decoration":{background:c["vira-green-80"]},"vira-green-behind-fg-invisible":{background:c["vira-green-90"]},"vira-green-on-self-body":{foreground:c["vira-green-90"],background:c["vira-green-10"]},"vira-green-on-self-non-body":{foreground:c["vira-green-90"],background:c["vira-green-20"]},"vira-green-on-self-header":{foreground:c["vira-green-90"],background:c["vira-green-40"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-90"],background:c["vira-green-50"]},"vira-green-on-self-decoration":{foreground:c["vira-green-90"],background:c["vira-green-70"]},"vira-green-on-self-invisible":{foreground:c["vira-green-90"],background:c["vira-green-80"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-90"]},"vira-teal-foreground-body":{foreground:c["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-60"]},"vira-teal-foreground-header":{foreground:c["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-5"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-90"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-80"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-60"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-teal-40"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-teal-30"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-teal-20"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-teal-5"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-fg-body":{background:c["vira-teal-20"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-fg-header":{background:c["vira-teal-50"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-90"]},"vira-teal-on-self-body":{foreground:c["vira-teal-90"],background:c["vira-teal-10"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-90"],background:c["vira-teal-20"]},"vira-teal-on-self-header":{foreground:c["vira-teal-90"],background:c["vira-teal-40"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-90"],background:c["vira-teal-50"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-90"],background:c["vira-teal-70"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-90"],background:c["vira-teal-80"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-90"]},"vira-blue-foreground-body":{foreground:c["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-70"]},"vira-blue-foreground-header":{foreground:c["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-10"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-90"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-80"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-60"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-blue-40"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-blue-30"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-blue-20"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-blue-5"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-fg-body":{background:c["vira-blue-20"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-fg-header":{background:c["vira-blue-50"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-90"]},"vira-blue-on-self-body":{foreground:c["vira-blue-90"],background:c["vira-blue-10"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-90"],background:c["vira-blue-20"]},"vira-blue-on-self-header":{foreground:c["vira-blue-90"],background:c["vira-blue-40"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-90"],background:c["vira-blue-50"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-90"],background:c["vira-blue-70"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-90"],background:c["vira-blue-80"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-90"]},"vira-accent-foreground-body":{foreground:c["vira-accent-80"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-70"]},"vira-accent-foreground-header":{foreground:c["vira-accent-50"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-30"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-20"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-10"]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-90"]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-80"]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-60"]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-accent-40"]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-accent-30"]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-accent-20"]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-accent-5"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-5"]},"vira-accent-behind-fg-body":{background:c["vira-accent-20"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-30"]},"vira-accent-behind-fg-header":{background:c["vira-accent-50"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-60"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-80"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-90"]},"vira-accent-on-self-body":{foreground:c["vira-accent-90"],background:c["vira-accent-10"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-90"],background:c["vira-accent-20"]},"vira-accent-on-self-header":{foreground:c["vira-accent-90"],background:c["vira-accent-40"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-90"],background:c["vira-accent-50"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-90"],background:c["vira-accent-70"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-90"],background:c["vira-accent-80"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-90"]},"vira-purple-foreground-body":{foreground:c["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-60"]},"vira-purple-foreground-header":{foreground:c["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-5"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-90"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-80"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-60"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-purple-40"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-purple-30"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-purple-20"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-purple-5"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-fg-body":{background:c["vira-purple-20"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-fg-header":{background:c["vira-purple-50"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-90"]},"vira-purple-on-self-body":{foreground:c["vira-purple-90"],background:c["vira-purple-10"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-90"],background:c["vira-purple-20"]},"vira-purple-on-self-header":{foreground:c["vira-purple-90"],background:c["vira-purple-40"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-90"],background:c["vira-purple-50"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-90"],background:c["vira-purple-70"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-90"],background:c["vira-purple-80"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-90"]},"vira-pink-foreground-body":{foreground:c["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-60"]},"vira-pink-foreground-header":{foreground:c["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-10"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-90"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-80"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-60"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-pink-40"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-pink-30"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-pink-20"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-pink-5"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-fg-body":{background:c["vira-pink-20"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-fg-header":{background:c["vira-pink-50"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-90"]},"vira-pink-on-self-body":{foreground:c["vira-pink-90"],background:c["vira-pink-10"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-90"],background:c["vira-pink-20"]},"vira-pink-on-self-header":{foreground:c["vira-pink-90"],background:c["vira-pink-40"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-90"],background:c["vira-pink-50"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-90"],background:c["vira-pink-70"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-90"],background:c["vira-pink-80"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-90"]},"vira-grey-foreground-body":{foreground:c["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-60"]},"vira-grey-foreground-header":{foreground:c["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-5"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-90"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-80"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-60"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-grey-40"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-grey-30"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-grey-20"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-grey-5"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-fg-body":{background:c["vira-grey-20"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-fg-header":{background:c["vira-grey-50"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-90"]},"vira-grey-on-self-body":{foreground:c["vira-grey-90"],background:c["vira-grey-10"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-90"],background:c["vira-grey-20"]},"vira-grey-on-self-header":{foreground:c["vira-grey-90"],background:c["vira-grey-40"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-90"],background:c["vira-grey-50"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-90"],background:c["vira-grey-70"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-90"],background:c["vira-grey-80"]}}),qP=VP(M,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:c["vira-red-5"]},"vira-red-foreground-body":{foreground:c["vira-red-20"]},"vira-red-foreground-non-body":{foreground:c["vira-red-30"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-60"]},"vira-red-foreground-decoration":{foreground:c["vira-red-80"]},"vira-red-foreground-invisible":{foreground:c["vira-red-90"]},"vira-red-behind-bg-small-body":{background:c["vira-red-5"]},"vira-red-behind-bg-body":{background:c["vira-red-20"]},"vira-red-behind-bg-non-body":{background:c["vira-red-30"]},"vira-red-behind-bg-header":{background:c["vira-red-50"]},"vira-red-behind-bg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-bg-decoration":{background:c["vira-red-80"]},"vira-red-behind-bg-invisible":{background:c["vira-red-90"]},"vira-red-behind-fg-small-body":{background:c["vira-red-90"]},"vira-red-behind-fg-body":{background:c["vira-red-80"]},"vira-red-behind-fg-non-body":{background:c["vira-red-60"]},"vira-red-behind-fg-header":{background:c["vira-red-40"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-30"]},"vira-red-behind-fg-decoration":{background:c["vira-red-20"]},"vira-red-behind-fg-invisible":{background:c["vira-red-5"]},"vira-red-on-self-body":{foreground:c["vira-red-5"],background:c["vira-red-90"]},"vira-red-on-self-non-body":{foreground:c["vira-red-5"],background:c["vira-red-70"]},"vira-red-on-self-header":{foreground:c["vira-red-5"],background:c["vira-red-60"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-5"],background:c["vira-red-40"]},"vira-red-on-self-decoration":{foreground:c["vira-red-5"],background:c["vira-red-30"]},"vira-red-on-self-invisible":{foreground:c["vira-red-5"],background:c["vira-red-10"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-5"]},"vira-orange-foreground-body":{foreground:c["vira-orange-20"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-30"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-60"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-80"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-90"]},"vira-orange-behind-bg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-bg-body":{background:c["vira-orange-20"]},"vira-orange-behind-bg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-bg-header":{background:c["vira-orange-50"]},"vira-orange-behind-bg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-bg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-bg-invisible":{background:c["vira-orange-90"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-90"]},"vira-orange-behind-fg-body":{background:c["vira-orange-80"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-60"]},"vira-orange-behind-fg-header":{background:c["vira-orange-40"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-30"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-20"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-5"]},"vira-orange-on-self-body":{foreground:c["vira-orange-5"],background:c["vira-orange-90"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-5"],background:c["vira-orange-70"]},"vira-orange-on-self-header":{foreground:c["vira-orange-5"],background:c["vira-orange-60"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-5"],background:c["vira-orange-40"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-5"],background:c["vira-orange-30"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-5"],background:c["vira-orange-10"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-5"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-30"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-90"]},"vira-yellow-behind-bg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-bg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-bg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-bg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-bg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-bg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-bg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-70"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-40"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-90"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-70"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-5"],background:c["vira-yellow-60"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-5"],background:c["vira-yellow-40"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-5"],background:c["vira-yellow-30"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-5"],background:c["vira-yellow-10"]},"vira-green-foreground-small-body":{foreground:c["vira-green-5"]},"vira-green-foreground-body":{foreground:c["vira-green-20"]},"vira-green-foreground-non-body":{foreground:c["vira-green-30"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-60"]},"vira-green-foreground-decoration":{foreground:c["vira-green-80"]},"vira-green-foreground-invisible":{foreground:c["vira-green-90"]},"vira-green-behind-bg-small-body":{background:c["vira-green-5"]},"vira-green-behind-bg-body":{background:c["vira-green-20"]},"vira-green-behind-bg-non-body":{background:c["vira-green-30"]},"vira-green-behind-bg-header":{background:c["vira-green-50"]},"vira-green-behind-bg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-bg-decoration":{background:c["vira-green-80"]},"vira-green-behind-bg-invisible":{background:c["vira-green-90"]},"vira-green-behind-fg-small-body":{background:c["vira-green-90"]},"vira-green-behind-fg-body":{background:c["vira-green-70"]},"vira-green-behind-fg-non-body":{background:c["vira-green-60"]},"vira-green-behind-fg-header":{background:c["vira-green-40"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-30"]},"vira-green-behind-fg-decoration":{background:c["vira-green-20"]},"vira-green-behind-fg-invisible":{background:c["vira-green-5"]},"vira-green-on-self-body":{foreground:c["vira-green-5"],background:c["vira-green-90"]},"vira-green-on-self-non-body":{foreground:c["vira-green-5"],background:c["vira-green-70"]},"vira-green-on-self-header":{foreground:c["vira-green-5"],background:c["vira-green-60"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-5"],background:c["vira-green-40"]},"vira-green-on-self-decoration":{foreground:c["vira-green-5"],background:c["vira-green-30"]},"vira-green-on-self-invisible":{foreground:c["vira-green-5"],background:c["vira-green-10"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-5"]},"vira-teal-foreground-body":{foreground:c["vira-teal-20"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-30"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-60"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-80"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-90"]},"vira-teal-behind-bg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-bg-body":{background:c["vira-teal-20"]},"vira-teal-behind-bg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-bg-header":{background:c["vira-teal-50"]},"vira-teal-behind-bg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-bg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-bg-invisible":{background:c["vira-teal-90"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-90"]},"vira-teal-behind-fg-body":{background:c["vira-teal-80"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-60"]},"vira-teal-behind-fg-header":{background:c["vira-teal-40"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-30"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-20"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-5"]},"vira-teal-on-self-body":{foreground:c["vira-teal-5"],background:c["vira-teal-90"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-5"],background:c["vira-teal-70"]},"vira-teal-on-self-header":{foreground:c["vira-teal-5"],background:c["vira-teal-60"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-5"],background:c["vira-teal-40"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-5"],background:c["vira-teal-30"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-5"],background:c["vira-teal-10"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-5"]},"vira-blue-foreground-body":{foreground:c["vira-blue-20"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-30"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-60"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-80"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-90"]},"vira-blue-behind-bg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-bg-body":{background:c["vira-blue-20"]},"vira-blue-behind-bg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-bg-header":{background:c["vira-blue-50"]},"vira-blue-behind-bg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-bg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-bg-invisible":{background:c["vira-blue-90"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-90"]},"vira-blue-behind-fg-body":{background:c["vira-blue-80"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-60"]},"vira-blue-behind-fg-header":{background:c["vira-blue-40"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-30"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-20"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-5"]},"vira-blue-on-self-body":{foreground:c["vira-blue-5"],background:c["vira-blue-90"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-5"],background:c["vira-blue-70"]},"vira-blue-on-self-header":{foreground:c["vira-blue-5"],background:c["vira-blue-60"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-5"],background:c["vira-blue-40"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-5"],background:c["vira-blue-30"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-5"],background:c["vira-blue-10"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-5"]},"vira-accent-foreground-body":{foreground:c["vira-accent-20"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-30"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-60"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-80"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-90"]},"vira-accent-behind-bg-small-body":{background:c["vira-accent-5"]},"vira-accent-behind-bg-body":{background:c["vira-accent-20"]},"vira-accent-behind-bg-non-body":{background:c["vira-accent-30"]},"vira-accent-behind-bg-header":{background:c["vira-accent-50"]},"vira-accent-behind-bg-placeholder":{background:c["vira-accent-60"]},"vira-accent-behind-bg-decoration":{background:c["vira-accent-80"]},"vira-accent-behind-bg-invisible":{background:c["vira-accent-90"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-90"]},"vira-accent-behind-fg-body":{background:c["vira-accent-80"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-60"]},"vira-accent-behind-fg-header":{background:c["vira-accent-40"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-30"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-20"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-5"]},"vira-accent-on-self-body":{foreground:c["vira-accent-5"],background:c["vira-accent-90"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-5"],background:c["vira-accent-70"]},"vira-accent-on-self-header":{foreground:c["vira-accent-5"],background:c["vira-accent-60"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-5"],background:c["vira-accent-40"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-5"],background:c["vira-accent-30"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-5"],background:c["vira-accent-10"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-5"]},"vira-purple-foreground-body":{foreground:c["vira-purple-20"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-30"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-60"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-80"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-90"]},"vira-purple-behind-bg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-bg-body":{background:c["vira-purple-20"]},"vira-purple-behind-bg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-bg-header":{background:c["vira-purple-50"]},"vira-purple-behind-bg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-bg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-bg-invisible":{background:c["vira-purple-90"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-90"]},"vira-purple-behind-fg-body":{background:c["vira-purple-80"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-60"]},"vira-purple-behind-fg-header":{background:c["vira-purple-40"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-30"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-20"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-5"]},"vira-purple-on-self-body":{foreground:c["vira-purple-5"],background:c["vira-purple-90"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-5"],background:c["vira-purple-70"]},"vira-purple-on-self-header":{foreground:c["vira-purple-5"],background:c["vira-purple-60"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-5"],background:c["vira-purple-40"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-5"],background:c["vira-purple-30"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-5"],background:c["vira-purple-10"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-5"]},"vira-pink-foreground-body":{foreground:c["vira-pink-20"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-30"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-60"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-80"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-90"]},"vira-pink-behind-bg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-bg-body":{background:c["vira-pink-20"]},"vira-pink-behind-bg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-bg-header":{background:c["vira-pink-50"]},"vira-pink-behind-bg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-bg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-bg-invisible":{background:c["vira-pink-90"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-90"]},"vira-pink-behind-fg-body":{background:c["vira-pink-80"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-60"]},"vira-pink-behind-fg-header":{background:c["vira-pink-40"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-30"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-20"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-5"]},"vira-pink-on-self-body":{foreground:c["vira-pink-5"],background:c["vira-pink-90"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-5"],background:c["vira-pink-70"]},"vira-pink-on-self-header":{foreground:c["vira-pink-5"],background:c["vira-pink-60"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-5"],background:c["vira-pink-40"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-5"],background:c["vira-pink-30"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-5"],background:c["vira-pink-10"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-5"]},"vira-grey-foreground-body":{foreground:c["vira-grey-20"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-30"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-60"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-80"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-90"]},"vira-grey-behind-bg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-bg-body":{background:c["vira-grey-20"]},"vira-grey-behind-bg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-bg-header":{background:c["vira-grey-50"]},"vira-grey-behind-bg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-bg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-bg-invisible":{background:c["vira-grey-90"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-90"]},"vira-grey-behind-fg-body":{background:c["vira-grey-80"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-60"]},"vira-grey-behind-fg-header":{background:c["vira-grey-40"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-30"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-20"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-5"]},"vira-grey-on-self-body":{foreground:c["vira-grey-5"],background:c["vira-grey-90"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-5"],background:c["vira-grey-70"]},"vira-grey-on-self-header":{foreground:c["vira-grey-5"],background:c["vira-grey-60"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-5"],background:c["vira-grey-40"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-5"],background:c["vira-grey-30"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-5"],background:c["vira-grey-10"]}}}),U1="8px",B=eo({"vira-form-border-color":M.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":M.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":M.colors[tr].background.value,"vira-form-foreground-color":M.colors[tr].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":M.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":M.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":M.colors["vira-accent-behind-bg-invisible"].background.value,"vira-form-selection-active-color":M.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-error-color":M.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":M.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":M.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":M.colors["vira-orange-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":M.colors["vira-orange-behind-bg-header"].background.value,"vira-form-warning-active-color":M.colors["vira-orange-behind-bg-body"].background.value,"vira-form-positive-color":M.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":M.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":M.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":M.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":U1,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":M.colors["vira-accent-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":D`calc(var(--vira-form-radius, ${Ae(U1)}) + 2px)`,"vira-form-plain-color":c["vira-grey-0"].value,"vira-form-plain-hover-color":M.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":M.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":M.colors["vira-accent-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":M.colors["vira-accent-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":M.colors["vira-accent-behind-bg-body"].background.value,"vira-form-danger-color":M.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":M.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":M.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":M.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":M.colors["vira-grey-foreground-decoration"].foreground.value}),Fl=D`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,xa=eo({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Kn(e){return F.isString(e)?Ae(e):e.value}i(Kn,"cssValueOrRaw");function oa({elementBorderSize:e="1px",outlineGap:r="2px",outlineWidth:t="2px",noNesting:n,outlineColor:o=B["vira-form-focus-outline-color"],borderRadius:s=B["vira-form-focus-outline-border-radius"],renderInside:a}={}){const l=D`calc(${Kn(r)})`,u=D`calc(${Kn(t)} + ${Kn(r)} + ${Kn(e)})`,d=a?D`
              content: '';
              top: ${l};
              left: ${l};
              position: absolute;
              width: calc(100% - calc(${l} * 2));
              height: calc(100% - calc(${l} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${Kn(t)} solid ${Kn(o)};
              border-radius: ${Kn(s)};
              z-index: 100;
          `:D`
              content: '';
              top: calc(${u} * -1);
              left: calc(${u} * -1);
              position: absolute;
              width: calc(100% + calc(${u} * 2));
              height: calc(100% + calc(${u} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${Kn(t)} solid ${Kn(o)};
              border-radius: ${Kn(s)};
              z-index: 100;
          `;return n?d:D`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${d}
        }
    `}i(oa,"createFocusStyles");const ym=eo({"vira-monospace":"monospace"});function z1(e){if(typeof e=="string")return WP(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let r=[0,0,0,0,!1,"unknown"];return r[0]=e.r?e.r:e.red?e.red:!1,r[1]=e.g?e.g:e.green?e.green:!1,r[2]=e.b?e.b:e.blue?e.blue:!1,r[3]=e.a?e.a:e.alpha?e.alpha:1,r[4]=!!(r[0]&&r[1]&&r[2]),r[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",r}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}i(z1,"colorParsley");function WP(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let r=!1,n=[0,0,0,0,r,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let a={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let l in a)if(e==l){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:i(function(f){for(let h=0;h<3;h++)n[h]=parseInt(f[h+1],16);return n[3]=1,!0},"sprig")},d=u.rex.exec(a[l]);return n[4]=r=u.sprig(d),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:i(function(a){let l=0,u=0,d=10,f=100,h=2.55,g="1";a[23]&&(g=a[23],delete a[23]),n[3]=g.match(/%/g)?parseFloat(g)/f:parseFloat(g);for(let m=1;m<a.length;m++)a[m]&&(l=l||m,u=m);switch(u){case 4:d=16,f=15,n[3]=parseInt(a[u],d)/f;case 3:d=16;for(let m=0;m<3;m++)n[m]=parseInt(a[l+m]+a[l+m],d);break;case 5:d=16;case 9:n[0]=n[1]=n[2]=d==10?parseFloat(a[u]):parseInt(a[u],d);break;case 12:n[0]=n[1]=n[2]=parseFloat(a[u])*h;break;case 8:d=16,f=255,n[3]=parseInt(a[8],d)/f;case 7:d=16;case 11:for(let m=0;m<3;m++)n[m]=d==10?parseFloat(a[l+m]):parseInt(a[l+m],d);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(a[l+m])*h;break;case 18:n[5]=a[15];for(let m=0;m<3;m++)l++,n[m]=a[l].match(/%/g)?parseFloat(a[l])*2.55:parseFloat(a[l])*255;break;case 22:n[5]=a[l];for(let m=0;m<3;m++)l++,n[m]=a[l]?a[l].match(/%/g)?parseFloat(a[l])/f:parseFloat(a[l]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let I=function(j){let K=(j+E/30)%12,ae=m*Math.min(y,1-y);return y-ae*Math.max(-1,Math.min(K-3,9-K,1))};i(I,"f");let m,y,k,x,C,E=n[0]%360;if(E<0&&(E+=360),n[5].match(/^hsla?/i))m=n[1],y=n[2],k=0,C=1;else if(n[5].match(/^hwba?/i)){if(k=n[1],x=n[2],k+x>=1){n[0]=n[1]=n[2]=k/(k+x),n[5]="sRGB";break}m=1,y=.5,C=1-k-x}n[0]=Math.round(255*(I(0)*C+k)),n[1]=Math.round(255*(I(8)*C+k)),n[2]=Math.round(255*(I(4)*C+k)),n[5]="sRGB"}break}return!0},"parsley")},s=o.rex.exec(e);return s?(n[4]=r=o.parsley(s),n):(r=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,r,"parsleyError"])}i(WP,"parseString");const Dr={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function KP(e,r,t=-1){const n=[0,1.1];if(isNaN(e)||isNaN(r)||Math.min(e,r)<n[0]||Math.max(e,r)>n[1])return 0;let o=0,s=0,a="BoW";return e=e>Dr.blkThrs?e:e+Math.pow(Dr.blkThrs-e,Dr.blkClmp),r=r>Dr.blkThrs?r:r+Math.pow(Dr.blkThrs-r,Dr.blkClmp),Math.abs(r-e)<Dr.deltaYmin?0:(r>e?(o=(Math.pow(r,Dr.normBG)-Math.pow(e,Dr.normTXT))*Dr.scaleBoW,s=o<Dr.loClip?0:o-Dr.loBoWoffset):(a="WoB",o=(Math.pow(r,Dr.revBG)-Math.pow(e,Dr.revTXT))*Dr.scaleWoB,s=o>-.1?0:o+Dr.loWoBoffset),t<0?s*100:t==0?Math.round(Math.abs(s)*100)+"<sub>"+a+"</sub>":Number.isInteger(t)?(s*100).toFixed(t):0)}i(KP,"APCAcontrast");function GP(e,r,t=-1,n=!0){let o=z1(r),s=z1(e);return!(s[3]==""||s[3]==1)&&(s=ZP(s,o,n)),KP(V1(s),V1(o),t)}i(GP,"calcAPCA");function HP(e,r=2){const t=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],s=[0,100,200,300,400,500,600,700,800,900].length;let a=[e.toFixed(r),0,0,0,0,0,0,0,0,0];a.length;let l=777;e=Math.abs(e);const u=.2,d=e==0?1:e*u|0;let f=0,h=(e-t[d][f])*u;for(f++;f<s;f++)l=t[d][f],l>400?a[f]=l:e<14.5?a[f]=999:e<29.5?a[f]=777:l>24?a[f]=Math.round(l-n[d][f]*h):a[f]=l-(2*n[d][f]*h|0)*.5;return a}i(HP,"fontLookupAPCA");function V1(e=[0,0,0]){function r(t){return Math.pow(t/255,Dr.mainTRC)}return i(r,"simpleExp"),Dr.sRco*r(e[0])+Dr.sGco*r(e[1])+Dr.sBco*r(e[2])}i(V1,"sRGBtoY");function ZP(e=[0,0,0,1],r=[0,0,0],t=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let s=0;s<3;s++)o[s]=r[s]*n+e[s]*e[3],t&&(o[s]=Math.min(Math.round(o[s]),255));return o}i(ZP,"alphaBlend");const $$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};ar($$,e=>e);Object.fromEntries(Object.entries($$).map(([e,r])=>[r,e]));const q1=new Map;function YP({background:e,foreground:r}){const t=`${r}|${e}`,n=q1.get(t);if(n)return n;const o=R2(Number(GP(r,e)),{digits:1}),s={contrast:o,fontSizes:JP(o),contrastLevel:XP(o)};return q1.set(t,s),s}i(YP,"calculateContrast");function JP(e){const r=HP(e).slice(1);return Qo(r,(n,o)=>({key:(o+1)*100,value:n}))}i(JP,"calculateFontSizes");function XP(e){return vr.isDefined(Id.find(r=>r.min<=Math.abs(e)))}i(XP,"determineContrastLevel");var ue;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(ue||(ue={}));const QP={[ue.SmallBodyText]:"Small Text",[ue.BodyText]:"Body Text",[ue.NonBodyText]:"Non-body Text",[ue.Header]:"Header",[ue.Placeholder]:"Placeholder",[ue.Decoration]:"Decoration",[ue.Invisible]:"Invisible"};ue.SmallBodyText,ue.BodyText,ue.NonBodyText,ue.Header,ue.Placeholder,ue.Decoration,ue.Invisible;const Id=[{min:90,name:ue.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:ue.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:ue.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:ue.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:ue.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:ue.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:ue.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Qo(Id,e=>({key:e.min,value:e}));Qo(Id,e=>({key:e.name,value:e}));const eI=Wt(ue).sort((e,r)=>Number(r.includes("-"))-Number(e.includes("-"))),rI=_c(yn(Object.keys(M.colors),e=>e.split("-")[1],e=>e!=="default")).filter(F.isTruthy),xs=Qo(rI,e=>({key:e,value:e}),{}),tI=ze(M.colors),ft=N2(xs,e=>{const r=_c(yn(tI,t=>eI.reduce((n,o)=>Zh({value:n,suffix:`-${o}`}),Oi({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`)));return Qo(r,t=>({key:t,value:Qo(Wt(ue),n=>{const o=`vira-${e}-${t}-${n}`;if(F.hasKey(M.colors,o))return{key:n,value:M.colors[o]}})}))});var je=(e=>(e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none",e))(je||{});const W1={accent:xs.blue,neutral:xs.grey,danger:xs.red,warning:xs.orange,positive:xs.green},Sl=["accent","plain","neutral","danger","warning","positive"];var Hn=(e=>(e.Large="large",e.Medium="medium",e.Small="small",e.None="none",e))(Hn||{});const wm=["small","medium","large"];var He=(e=>(e.Standard="standard",e.Subtle="subtle",e.None="none",e))(He||{});const $m=["standard","subtle"],Ju={large:40,medium:32,small:24},iu=D`
    padding: 0;
    margin: 0;
`,Fr=D`
    ${iu};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,K1=eo({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Tl={menuShadow:D`
        filter: drop-shadow(0px 5px 5px ${K1["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:D`
        box-shadow: 0 5px 15px ${K1["modal-shadow-color"].value};
    `},oi=D`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,G1="vira-",or=l$({assertInputs:i(e=>{if(!e.tagName.startsWith(G1))throw new Error(`Tag name should start with '${G1}' but got '${e.tagName}'`)},"assertInputs")}),P=or()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":i(({inputs:e})=>!!e.fitContainer||!!e.icon?.size,"vira-icon-fit-container")},styles:i(({hostClasses:e})=>D`
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

        svg * {
            vector-effect: non-scaling-stroke;
        }

        ${e["vira-icon-fit-container"].selector} {
            > *,
            svg {
                height: 100%;
                width: 100%;
            }
        }
    `,"styles"),render({inputs:e,host:r}){if(e.icon)e.icon.size&&(r.style.width=Us(e.icon.size),r.style.height=Us(e.icon.size));else return"";return e.icon.svgTemplate}}),Yo=or()({tagName:"vira-menu-item",state(){return{cleanupListeners:void 0}},hostClasses:{"vira-menu-item-selected":i(({inputs:e})=>!!e.selected||!!e.iconOverride,"vira-menu-item-selected"),"vira-menu-item-disabled":i(({inputs:e})=>!!e.disabled,"vira-menu-item-disabled"),"vira-menu-item-enabled":i(({inputs:e})=>!e.disabled,"vira-menu-item-enabled"),"vira-menu-item-default-icon":i(({inputs:e})=>!e.iconOverride,"vira-menu-item-default-icon"),"vira-menu-item-default-styles":i(({inputs:e})=>!e.disablePointerStyles,"vira-menu-item-default-styles")},styles:i(({hostClasses:e})=>D`
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
            & ${P} {
                opacity: 0.3;
                pointer-events: none;
            }
        }

        ${e["vira-menu-item-enabled"].selector}${e["vira-menu-item-default-styles"].selector} {
            cursor: pointer;

            &:host(:focus) {
                background-color: ${B["vira-form-selection-hover-color"].value};
                outline: none;
            }

            &:host(:active) {
                background-color: ${B["vira-form-selection-active-color"].value};
                outline: none;
            }
        }

        ${P} {
            width: 24px;
            aspect-ratio: 1;
            align-items: center;
            justify-content: center;
        }

        ${e["vira-menu-item-default-icon"].selector} {
            ${P} {
                visibility: hidden;
            }
        }

        ${e["vira-menu-item-selected"].selector} ${P} {
            visibility: visible;
        }

        .slot-wrapper {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
        }
    `,"styles"),init({state:e,updateState:r,host:t,inputs:n}){t.setAttribute("role","menuitem"),t.setAttribute("tabindex",n.disabled?"-1":"0"),t.setAttribute("aria-selected",String(!!n.selected)),t.setAttribute("aria-disabled",String(!!n.disabled)),e.cleanupListeners?.();const o={};function s(l){if(o[l.type])return;if(n.disabled){l.preventDefault(),l.stopPropagation();return}vr.instanceOf(t.shadowRoot.querySelector("slot"),HTMLSlotElement).assignedElements({flatten:!0}).forEach(d=>{d instanceof HTMLElement&&!l.composedPath().includes(d)&&(l.preventDefault(),l.stopPropagation(),o[l.type]=!0,d.dispatchEvent(new MouseEvent(l.type,l)),delete o[l.type])})}i(s,"propagateMouseEvent");const a=[$o(t,"click",s),$o(t,"mousedown",s),$o(t,"mouseenter",()=>{n.disabled||t.focus()}),$o(t,"mouseleave",()=>{n.disabled||t.blur()})];r({cleanupListeners:i(()=>{a.forEach(l=>l())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e}){return p`
            <${P.assign({icon:e.iconOverride||Pd})}></${P}>
            <div class="slot-wrapper">
                <slot>&nbsp;</slot>
            </div>
        `}});var k$=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(k$||{}),Nl=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Nl||{});const Ri=or()({tagName:"vira-menu",hostClasses:{"vira-menu-open-upwards":i(({inputs:e})=>e.direction==="upwards","vira-menu-open-upwards"),"vira-menu-rounded":i(({inputs:e})=>e.cornerStyle==="all-rounded","vira-menu-rounded"),"vira-menu-square":i(({inputs:e})=>e.cornerStyle==="all-square","vira-menu-square")},styles:i(({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            overscroll-behavior: contain;
            border-radius: ${B["vira-form-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${B["vira-form-background-color"].value};
            border: 1px solid ${B["vira-form-border-color"].value};
            color: ${B["vira-form-foreground-color"].value};
            ${Tl.menuShadow}
        }

        ${e["vira-menu-open-upwards"].selector} {
            border-radius: ${B["vira-form-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-menu-rounded"].selector} {
            border-radius: ${B["vira-form-radius"].value};
        }
    `,"styles"),render(){return p`
            <slot>&nbsp;</slot>
        `}});function nI(e,r){return e>r}i(nI,"greaterThan");function oI(e,r){return e<r}i(oI,"lessThan");function Pl(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}i(Pl,"focusElement");var Jn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Jn||(Jn={}));var Ie;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ie||(Ie={}));function Od(e){const r={x:-1,y:-1};let t;for(;r.y<e.length-1&&!t;){r.y++;const n=e[r.y];for(;n&&r.x<n.length-1&&!t;){r.x++;const o=n[r.x];if(o)if(o.navEntry.navParams.group){const s=Od(o.children);s&&(t=s.node)}else o.navEntry.navParams.disabled||(t=o)}}if(t)return{node:t,coords:r}}i(Od,"findDefaultChild");function H1(e,r,t,n){if(!r){const u=Od(e.children);return u?(Pl(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:t,navAction:Ie.Navigate}):{success:!1,reason:"no default element to focus",direction:t,navAction:Ie.Navigate}}const{nextNode:o,requiresWrapping:s,coords:a}=x$(r.position,t),l=n?!0:!s;return o&&l?(Pl(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:s,direction:t,navAction:Ie.Navigate,coords:a}):o?l?{success:!1,reason:"no conditions matched",direction:t,navAction:Ie.Navigate}:{success:!1,reason:"wrapping blocked",direction:t,navAction:Ie.Navigate}:{success:!1,reason:"failed to find node to focus",direction:t,navAction:Ie.Navigate}}i(H1,"navigate");function x$(e,r){let t=!1,n,o=1;const s=Date.now();for(;!t||!n;)if(n=iI(e,r,o),t=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-s>1e3)return B2.warning("Failed to find next non-disabled node."),n;return n}i(x$,"calculateNextNode");function iI(e,r,t){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;_r.isDefined(n,"missing parent");const o=vr.isDefined(n.children[e.nodeCoords.y]),s=n.children.length>1&&(r===Jn.Down||r===Jn.Up),a=r===Jn.Down||r===Jn.Right?t:-1*t,l=a<0?nI:oI,u=s?Hp(e.nodeCoords.y+a,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,d=vr.isDefined(n.children[u]),f=s?e.nodeCoords.x>=d.length?d.length-1:e.nodeCoords.x:Hp(e.nodeCoords.x+a,{min:0,max:o.length-1,takeOverflow:!0}),h=n.children[u]?.[f],g=s?l(u,e.nodeCoords.y):l(f,e.nodeCoords.x);return{nextNode:h,requiresWrapping:g,coords:{x:f,y:u}}}i(iI,"innerCalculateNextNode");function sI(e,r,t){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:r,navAction:Ie.Pibling};const{nextNode:o,requiresWrapping:s,coords:a}=x$(n,r),l=o?.navEntry.navParams.group?Od(o.children):{node:o,coords:a},u=t?!0:!s;return!l||!l.node?{success:!1,reason:"no node to navigate to",direction:r,navAction:Ie.Pibling}:u?(Pl(l.node.element),{success:!0,defaulted:!1,newElement:l.node.element,wrapped:s,coords:l.coords,direction:r,navAction:Ie.Pibling}):{success:!1,reason:"wrapping blocked",direction:r,navAction:Ie.Pibling}}i(sI,"navigatePibling");var go;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(go||(go={}));const zf={name:"data-nav"},D$="navEntry";function aI(e){return D$ in e}i(aI,"hasNavEntry");function lI(e){if(aI(e)){const r=e[D$];return vr.instanceOf(r,cI,"Invalid nav entry")}else return}i(lI,"extractNavEntry");function uI(e){return r=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(r.type==="mousedown"&&!e.navController.options.activateOnMouseUp||r.type==="mouseup"&&e.navController.options.activateOnMouseUp?r.target===e.element&&e.activate(!0):r.type==="mouseup"||r.type==="focus"?r.target===e.element&&e.focus(!0):r.type==="mousemove"?r.target===e.element&&e.navValue!==go.Active&&e.focus(!0):(r.type==="blur"||r.type==="mouseleave")&&r.target===e.element&&(e.activate(!1),e.focus(!1)))}}i(uI,"createEventListener");class cI{static{i(this,"NavEntry")}element;navParams;navTreeNode;navValue;eventListener=uI(this);constructor(r,t,n){this.element=r,this.navParams=n,this.attachListeners(),this.navController=t}set navController(r){this._navController!==r&&(this._navController?.removeNavEntry(this),this._navController=r,r.addNavEntry(this))}get navController(){return _r.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(zf.name,""),jf(this.element)&&this.element.blur())}focus(r,t){const n=this.navValue,o=r===(n===go.Focused);if(!(this.navParams.group||this.navController.locked||o||!r&&this.navController.options.alwaysRequireFocused))return r?(this.setNavValue(go.Focused),jf(this.element)||this.element.focus()):(this.removeNavValue(go.Focused),jf(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:r,previousNavValue:n}),this.navController.triggerNavEntry(this,r,Ie.Focus)}activate(r){const t=this.navValue,n=r===(t===go.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(r,!0),r?this.setNavValue(go.Active):this.setNavValue(go.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:r,previousNavValue:t}),this.navController.triggerNavEntry(this,r,Ie.Activate)}setNavValue(r){this.navValue=r,this.element.setAttribute(zf.name,r)}removeNavValue(r){this.navValue===r&&(this.navValue=void 0,this.element.setAttribute(zf.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function dI(e,r){Object.entries(r).forEach(([t,n])=>{F.isBoolean(n)&&n?e.setAttribute(t,""):F.isBoolean(n)||n==null?e.removeAttribute(t):e.setAttribute(t,String(n))})}i(dI,"applyAttributes");function fI(e,r){if(!r)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ie.Enter};if(!r.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ie.Enter};const t=r.position.node.children[0]?.[0];return t?(Pl(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Ie.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ie.Enter}}i(fI,"enterInto");function hI(e,r){return C$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,r)}i(hI,"walkNavTree");function C$(e,r,t){for(let n=0;n<r.length;n++){const o=r[n];for(let s=0;s<o.length;s++){const a=o[s],l={ancestorChain:e,nodeCoords:{x:s,y:n},node:a};if(t(l))return l;const u=C$(e.concat(l),a.children,t);if(u)return u}}}i(C$,"walkRecursively");function E$(e,r){const t=hI(e,({node:n})=>!n.root&&n.navEntry===r);if(!t)throw new Error("Failed to find NavEntry in NavTree.");return t}i(E$,"findNavTreeNodeByNavEntry");function gI(e,r){if(!r)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ie.Exit};const t=r.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!t||t.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ie.Exit};const{nodeCoords:n}=E$(e,t.navEntry);return Pl(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Ie.Exit,coords:n}}i(gI,"exitOutOf");class mI extends _n()("nav-exit"){static{i(this,"NavExitEvent")}}class A$ extends _n()("nav-activate"){static{i(this,"NavActivateEvent")}}class pI extends _n()("nav-focus"){static{i(this,"NavFocusEvent")}}class bI extends _n()("nav-enter"){static{i(this,"NavEnterEvent")}}class vI extends _n()("nav-navigate"){static{i(this,"NavigateEvent")}}class yI extends _n()("nav-navigate-pibling"){static{i(this,"NavPiblingEvent")}}function wI(e){return{root:!0,children:M$(e)?.children||[]}}i(wI,"mapTree");function M$(e){const r=e.element;if(!(r instanceof HTMLElement))return;const t=lI(r),n=$I(e);if((t?.navParams.group?!!n.length:!1)||n.length||t)return{root:!1,element:r,navEntry:t,children:n}}i(M$,"mapTreeRecursively");function $I(e){const r=[];function t(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(l=>l.forEach(u=>t(u)));return}const o=n.navEntry.navParams.x,s=n.navEntry.navParams.y||0,a=Qi(r,s,()=>({noX:[],withX:[],y:s}));o==null?a.noX.push(n):a.withX.push({x:o,node:n})}return i(t,"pushNode"),e.children.forEach(n=>{const o=M$(n);o&&t(o)}),r.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,s)=>o.x-s.x),n.withX.forEach(({x:o,node:s})=>{n.noX.splice(o,0,s)}),n.noX)).filter(F.isTruthy)}i($I,"expandChildren");class kI extends Jh{static{i(this,"NavController")}rootElement;options;constructor(r,t={}){super(),this.rootElement=r,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Od(this.getNavTree().children)?.node.element.focus()}addNavEntry(r){this.navEntries.add(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(r){this.navEntries.delete(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(r,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!r)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=E$(this.getNavTree(),r);t?(this.navEntries.forEach(a=>{a!==r&&a.clearNavValue()}),this.currentNavEntry={entry:r,navAction:n,position:o}):this.currentNavEntry?.entry===r&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const s={success:!0,defaulted:!1,direction:void 0,newElement:r.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return t&&(n===Ie.Activate?this.dispatch(new A$({detail:s})):n===Ie.Focus&&this.dispatch(new pI({detail:s}))),s}navigate({direction:r,allowWrapping:t}){if(this.locked)return{success:!1,direction:r,navAction:Ie.Navigate,reason:"NavController is locked."};const n=H1(this.getNavTree(),this.currentNavEntry,r,t);return this.dispatch(new vI({detail:n})),n}enterInto({fallbackToActivate:r}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ie.Enter,reason:"NavController is locked."};const t=fI(this.getNavTree(),this.currentNavEntry);return!t.success&&r?this.activate():(this.dispatch(new bI({detail:t})),t)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ie.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ie.Activate,reason:"No focused NavEntry to activate."};const r=this.currentNavEntry.entry.activate(!0);return _r.isDefined(r,"Cannot activate a group."),r}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ie.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ie.Activate&&this.currentNavEntry.entry.focus(!0);const r=gI(this.getNavTree(),this.currentNavEntry);return this.dispatch(new mI({detail:r})),r}navigatePibling({allowWrapping:r,direction:t}){if(this.locked)return{success:!1,direction:t,navAction:Ie.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),s={...this.currentNavEntry?sI(this.currentNavEntry,t,r):H1(n,void 0,t,r),navAction:Ie.Pibling};return this.dispatch(new yI({detail:s})),s}buildNavTree(){const r=wP(this.rootElement),t=wI(r);return this.cachedNavTree=t,t}}function Z1({open:e,callback:r,popUpManager:t,host:n,options:o}){if(e){const s=t.showPopUp(n,o);r?.(s)}else t.removePopUp(),r?.(void 0)}i(Z1,"triggerPopUpState");function F$(e){return yn(e,(r,t)=>p`
                <${Yo.assign({...r})}
                    ${U("click",async n=>{await r.onClick?.({event:n,index:t})})}
                >
                    ${r.content}
                </${Yo}>
            `,(r,t)=>!t.hidden)}i(F$,"renderMenuItemEntries");const Nu=globalThis.document;class xI extends J5{static{i(this,"PageActiveObservable")}constructor(){if(super({defaultValue:!!Nu?.hidden,equalityCheck:F.strictEquals}),!Nu)return;globalThis.addEventListener("visibilitychange",t=>this.updateVisibility(t,Nu));const r=i(t=>this.updateVisibility(t,Nu),"visibilityHandler");globalThis.onpageshow=r,globalThis.onpagehide=r,globalThis.onfocus=r,globalThis.onblur=r}updateVisibility(r,t){const n=CI.includes(r.type),o=DI.includes(r.type),s=n?!0:o?!1:t.hasFocus()||!t.hidden;this.setValue(s)}}const DI=["blur","focusout","pagehide"],CI=["focus","focusin","pageshow"],EI=new xI;function AI(e,r){return EI.listen(e,r)}i(AI,"listenToPageActivation");function ph(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}i(ph,"isInputLikeElement");const Y1={top:0,left:0,right:0,bottom:0};class S$ extends Yh("hide-pop-up"){static{i(this,"HidePopUpEvent")}}class T$ extends _n()("nav-select"){static{i(this,"NavSelectEvent")}}class MI{static{i(this,"PopUpManager")}constructor(r,t){this.navController=r,this.options={...this.options,...t}}listenTarget=new Jh;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[AI(!1,r=>{r||this.removePopUp()}),this.navController.listen(A$,r=>{const t=r.composedPath()[0];t instanceof Element&&ph(t)||r.detail.success&&(this.listenTarget.dispatch(new T$({detail:r.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),r.stopImmediatePropagation(),r.preventDefault())}),_0("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),_0("keydown",r=>{const t=r.code;if(t==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=r.composedPath()[0];if(n instanceof Element&&ph(n))return;t==="ArrowDown"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Jn.Down,allowWrapping:!1})):t==="ArrowUp"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Jn.Up,allowWrapping:!1})):t==="ArrowLeft"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Jn.Left,allowWrapping:!1})):t==="ArrowRight"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Jn.Right,allowWrapping:!1})):(t==="Enter"||t==="Return"||t==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(r.stopImmediatePropagation(),r.preventDefault())}})]}listen(r,t,n){return this.listenTarget.listen(r,t,n)}removePopUp(){this.cleanupCallbacks.forEach(r=>r()),this.listenTarget.dispatch(new S$)}showPopUp(r,t){this.lastRootElement=r;const n={...this.options,...t},o=kP(r);_r.instanceOf(o,HTMLElement);const s=r.getBoundingClientRect(),a=o.getBoundingClientRect(),l=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,d=o===document.body?{top:0,left:0,right:a.width,bottom:a.height}:{top:a.top,left:a.left,right:a.right-l,bottom:a.bottom-u},f=ar(Y1,y=>s[y]),h=ar(Y1,y=>{const k=d[y],x=f[y];return Math.abs(k-x)}),g=h.top>h.bottom+n.verticalDiffThreshold&&h.bottom<n.minDownSpace,m=h.left>h.right+n.horizontalDiffThreshold&&h.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!g,popRight:!m,positions:{container:d,root:f,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Li=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(Li||{});const le=or()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new MI(new kI(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-disabled"),"vira-pop-up-trigger-inside-focus":i(({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-inside-focus"),"vira-pop-up-trigger-outside-focus":i(({inputs:e})=>!e.useInsideFocus,"vira-pop-up-trigger-outside-focus")},styles:i(({hostClasses:e})=>D`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Fr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${e["vira-pop-up-trigger-inside-focus"].selector} .dropdown-wrapper {
            ${oa({renderInside:!0})}
        }
        ${e["vira-pop-up-trigger-outside-focus"].selector} .dropdown-wrapper {
            ${oa()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${oi};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Fl}
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
    `,"styles"),events:{navSelect:nr(),openChange:nr(),init:nr()},cleanup({state:e,updateState:r}){r({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:r,host:t,inputs:n,dispatch:o,events:s}){e.popUpManager.listen(S$,()=>{if(r({showPopUpResult:void 0}),o(new s.openChange(void 0)),n.focusOnClose&&!n.isDisabled){const a=t.shadowRoot.querySelector(".dropdown-wrapper");_r.instanceOf(a,HTMLButtonElement,"failed to find dropdown wrapper child"),a.focus()}}),e.popUpManager.listen(T$,a=>{n.keepOpenAfterInteraction||Z1({open:!1,callback(l){r({showPopUpResult:l})},host:t,popUpManager:e.popUpManager}),o(new s.navSelect(a.detail))}),o(new s.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:r,state:t,inputs:n,updateState:o,host:s,slotNames:a}){function l({emitEvent:y,open:k},x){if(t.showPopUpResult&&n.keepOpenAfterInteraction&&x){const C=s.shadowRoot.querySelector(".dropdown-trigger");if(C&&!x.composedPath().includes(C))return}Z1({open:k,callback(C){o({showPopUpResult:C}),y&&e(new r.openChange(C))},host:s,popUpManager:t.popUpManager})}i(l,"triggerPopUp"),n.isDisabled?l({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&t.showPopUpResult?l({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!t.showPopUpResult&&l({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?t.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,d=u==="right"&&t.showPopUpResult?n.ignoreMaxWidth?D`
                          left: unset;
                      `:D`
                          left: -${t.showPopUpResult.positions.diff.left}px;
                      `:D`
                      left: ${n.popUpOffset?.left||0}px;
                  `,f=t.showPopUpResult&&u==="left"?n.ignoreMaxWidth?D`
                          right: unset;
                      `:D`
                          right: -${t.showPopUpResult.positions.diff.right}px;
                      `:D`
                      right: ${n.popUpOffset?.right||0}px;
                  `,h=D`
            ${d}
            ${f}
        `,g=t.showPopUpResult?t.showPopUpResult.popDown?n.ignoreMaxHeight?D`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:D`
                          bottom: -${t.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:n.ignoreMaxHeight?D`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:D`
                        top: -${t.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:void 0;function m(y){l({emitEvent:!0,open:!t.showPopUpResult},y)}return i(m,"respondToClick"),p`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Et({open:!!t.showPopUpResult,"open-upwards":!t.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!t.showPopUpResult}
                ${U("keydown",y=>{!t.showPopUpResult&&y.code.startsWith("Arrow")&&l({emitEvent:!0,open:!0},y)})}
                ${U("click",y=>{if(y.detail===0){let k=!1;if(xP(({element:x})=>ph(x)?(k=!0,!0):!1),k)return;m(y)}else if(y.button===0&&t.showPopUpResult){const k=s.shadowRoot.querySelector(".dropdown-trigger");k&&!y.composedPath().includes(k)&&l({emitEvent:!0,open:!1},y)}})}
                ${U("mousedown",y=>{if(y.button!==0)return;const k=vr.instanceOf(s.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);y.composedPath().includes(k)&&m(y)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${a.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${Et({"right-aligned":u==="right"})}"
                    style=${g}
                >
                    ${Bt(!!t.showPopUpResult,p`
                            <slot name=${a.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),Pu=or()({tagName:"vira-menu-trigger",slotNames:["trigger"],styles:D`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${le} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{openChange:nr()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:r,updateState:t,dispatch:n,events:o,slotNames:s}){return p`
            <${le.assign({...e})}
                class=${Et({open:!!r.showPopUpResult})}
                ${U(le.events.init,a=>{t({navController:a.detail.navController,popUpManager:a.detail.popUpManager})})}
                ${U(le.events.openChange,a=>{!!r.showPopUpResult!=!!a.detail&&n(new o.openChange(a.detail)),t({showPopUpResult:a.detail})})}
            >
                <slot name=${s.trigger} slot=${le.slotNames.trigger}></slot>
                ${r.navController&&r.showPopUpResult?p`
                          <${Ri.assign({direction:r.showPopUpResult.popDown?Nl.Downwards:Nl.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${le.slotNames.popUp}
                              class=${Et({"full-width-menu":e.horizontalAnchor===Li.Both})}
                          >
                              <slot></slot>
                          </${Ri}>
                      `:ee}
            </${le}>
        `}}),pr=or()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":i(({inputs:e})=>e.bold,"vira-bold-bold")},styles:i(({hostClasses:e,cssVars:r})=>D`
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
    `,"styles"),render({inputs:e}){return p`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}}),km=Q({name:"Check16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xm=Q({name:"ChevronDown16Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${b["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M4 5.5 L8 10 12 5.5"
            />
        </svg>
    `}),su=Q({name:"ChevronUp16Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${b["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M4 10 L8 6 12 10"
            />
        </svg>
    `}),N$=Q({name:"Dash16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 8h8"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                stroke-linecap="round"
            />
        </svg>
    `}),Dm=Q({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Sc=Q({name:"Upload16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M3 9v4h10v-4"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 9V2m3 3-3-3-3 3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `}),Cm=Q({name:"X16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),P$=Q({name:"ArrowDown24Icon",svgTemplate:p`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),I$=Q({name:"ArrowLeft24Icon",svgTemplate:p`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),O$=Q({name:"ArrowRight24Icon",svgTemplate:p`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),B$=Q({name:"ArrowUp24Icon",svgTemplate:p`
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
    `}),R$=Q({name:"AutoTheme24Icon",svgTemplate:p`
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
    `}),L$=Q({name:"Bell24Icon",svgTemplate:p`
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
    `}),j$=Q({name:"Chat24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),_$=Q({name:"ChevronDown24Icon",svgTemplate:p`
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
    `}),U$=Q({name:"ChevronUp24Icon",svgTemplate:p`
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
    `}),Em=Q({name:"CloseX24Icon",svgTemplate:p`
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
    `}),z$=Q({name:"Commit24Icon",svgTemplate:p`
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
    `}),Tc=Q({name:"Copy24Icon",svgTemplate:p`
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
    `}),V$=Q({name:"Document24Icon",svgTemplate:p`
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
    `}),q$=Q({name:"DocumentSearch24Icon",svgTemplate:p`
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
    `}),W$=Q({name:"DoubleChevron24Icon",svgTemplate:p`
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
    `}),fr=Q({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),K$=Q({name:"ExternalLink24Icon",svgTemplate:p`
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
    `}),Am=Q({name:"EyeClosed24Icon",svgTemplate:p`
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
    `}),Mm=Q({name:"EyeOpen24Icon",svgTemplate:p`
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
    `}),G$=Q({name:"Filter24Icon",svgTemplate:p`
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
    `}),H$=Q({name:"Globe24Icon",svgTemplate:p`
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
    `}),Z$=Q({name:"Link24Icon",svgTemplate:p`
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
    `}),Fm=Q({name:"Loader24Icon",svgTemplate:p`
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
    `}),FI=D`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${xa["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,ii=Q({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${FI}
        </style>
        ${Fm.svgTemplate}
    `}),Y$=Q({name:"Lock24Icon",svgTemplate:p`
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
    `}),J$=Q({name:"MagnifyingGlass24Icon",svgTemplate:p`
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
    `}),X$=Q({name:"Moon24Icon",svgTemplate:p`
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
    `}),Bd=Q({name:"Options24Icon",svgTemplate:p`
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
    `}),Q$=Q({name:"Pencil24Icon",svgTemplate:p`
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
    `}),ek=Q({name:"Plus24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),rk=Q({name:"Printer24Icon",svgTemplate:p`
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
    `}),tk=Q({name:"Shield24Icon",svgTemplate:p`
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
    `}),nk=Q({name:"SortAscending24Icon",svgTemplate:p`
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
    `}),ok=Q({name:"SortDescending24Icon",svgTemplate:p`
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
    `}),ik=Q({name:"Sparkle24Icon",svgTemplate:p`
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
    `}),sk=Q({name:"SpeakerLoud24Icon",svgTemplate:p`
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
    `}),ak=Q({name:"SpeakerMedium24Icon",svgTemplate:p`
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
    `}),lk=Q({name:"SpeakerMuted24Icon",svgTemplate:p`
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
    `}),uk=Q({name:"SpeakerQuiet24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Il=Q({name:"Star24Icon",svgTemplate:p`
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
    `}),Ol=Q({name:"StatusFailure24Icon",svgTemplate:p`
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
    `}),ck=Q({name:"StatusInProgress24Icon",svgTemplate:p`
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
    `}),Ms=Q({name:"StatusSuccess24Icon",svgTemplate:p`
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
    `}),dk=Q({name:"StatusUnknown24Icon",svgTemplate:p`
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
    `}),fk=Q({name:"StatusWarning24Icon",svgTemplate:p`
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
    `}),hk=Q({name:"Sun24Icon",svgTemplate:p`
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
    `}),Nc=Q({name:"Upload24Icon",svgTemplate:p`
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
    `}),Sm=Q({name:"X24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Vt(e,r){const t=ze(r).map(o=>{if(r[o])return`${b[o].name}: ${String(r[o])};`}).filter(F.isTruthy).join(" "),n=D`
        ${Ae(t)}
        display: inline-flex;
        vertical-align: middle;
    `;return Q({name:e.name,svgTemplate:p`
            <div style=${n}>${e.svgTemplate}</div>
        `})}i(Vt,"createColoredIcon");async function SI(){const e=await gl(()=>import("./feather-xHQv1Yf1.js").then(t=>t.f),[]);function r(t){if(F.isObject(t)){if(F.hasKey(t,"default"))return r(t.default);if(F.hasKey(t,"icons"))return t}}return i(r,"recurseImport"),r(e)||globalThis.feather}i(SI,"importFeatherIcons");const Za=await SI(),J1={fill:String(b["vira-icon-fill-color"].value),stroke:String(b["vira-icon-stroke-color"].value),"stroke-width":String(b["vira-icon-stroke-width"].value)};function TI(e){const r=Za.icons[e],t=i(n=>({name:r.name,svgTemplate:p`
                ${D1(r.toSvg({...J1,...n}))}
            `}),"configureIconCallback");return Object.defineProperty(t,"name",{value:r.name,writable:!1,configurable:!0}),Object.assign(t,{svgTemplate:p`
            ${D1(r.toSvg(J1))}
        `})}i(TI,"createFeatherIconEntry");const X1=new Map,Ya=new Proxy({},{get(e,r){const t=r;if(!(t in Za.icons))return;const n=X1.get(t);if(n)return n;const o=TI(t);return X1.set(t,o),o},has(e,r){return r in Za.icons},ownKeys(){return Object.keys(Za.icons)},getOwnPropertyDescriptor(e,r){if(r in Za.icons)return{configurable:!0,enumerable:!0,writable:!1}}});function bh(e,r){return{...e,size:r}}i(bh,"createSizedIcon");const Q1={ArrowDown24Icon:P$,ArrowLeft24Icon:I$,ArrowRight24Icon:O$,ArrowUp24Icon:B$,AutoTheme24Icon:R$,Bell24Icon:L$,Chat24Icon:j$,Check16Icon:km,Check24Icon:Pd,ChevronDown16Icon:xm,ChevronDown24Icon:_$,ChevronUp16Icon:su,ChevronUp24Icon:U$,CloseX24Icon:Em,Commit24Icon:z$,Copy24Icon:Tc,Dash16Icon:N$,Document24Icon:V$,DocumentSearch24Icon:q$,DoubleChevron24Icon:W$,Element16Icon:Dm,Element24Icon:fr,ExternalLink24Icon:K$,EyeClosed24Icon:Am,EyeOpen24Icon:Mm,Filter24Icon:G$,Globe24Icon:H$,Link24Icon:Z$,Loader24Icon:Fm,LoaderAnimated24Icon:ii,Lock24Icon:Y$,MagnifyingGlass24Icon:J$,Moon24Icon:X$,Options24Icon:Bd,Pencil24Icon:Q$,Plus24Icon:ek,Printer24Icon:rk,Shield24Icon:tk,SortAscending24Icon:nk,SortDescending24Icon:ok,Sparkle24Icon:ik,SpeakerLoud24Icon:sk,SpeakerMedium24Icon:ak,SpeakerMuted24Icon:lk,SpeakerQuiet24Icon:uk,Star24Icon:Il,StatusFailure24Icon:Ol,StatusInProgress24Icon:ck,StatusSuccess24Icon:Ms,StatusUnknown24Icon:dk,StatusWarning24Icon:fk,Sun24Icon:hk,Upload16Icon:Sc,Upload24Icon:Nc,X16Icon:Cm,X24Icon:Sm},NI={ArrowDown24Icon:P$,ArrowLeft24Icon:I$,ArrowRight24Icon:O$,ArrowUp24Icon:B$,AutoTheme24Icon:R$,Bell24Icon:L$,Chat24Icon:j$,Check24Icon:Pd,ChevronDown24Icon:_$,ChevronUp24Icon:U$,CloseX24Icon:Em,Commit24Icon:z$,Copy24Icon:Tc,Document24Icon:V$,DocumentSearch24Icon:q$,DoubleChevron24Icon:W$,Element24Icon:fr,ExternalLink24Icon:K$,EyeClosed24Icon:Am,EyeOpen24Icon:Mm,Filter24Icon:G$,Globe24Icon:H$,Link24Icon:Z$,Loader24Icon:Fm,LoaderAnimated24Icon:ii,Lock24Icon:Y$,MagnifyingGlass24Icon:J$,Moon24Icon:X$,Options24Icon:Bd,Pencil24Icon:Q$,Plus24Icon:ek,Printer24Icon:rk,Shield24Icon:tk,SortAscending24Icon:nk,SortDescending24Icon:ok,Sparkle24Icon:ik,SpeakerLoud24Icon:sk,SpeakerMedium24Icon:ak,SpeakerMuted24Icon:lk,SpeakerQuiet24Icon:uk,Star24Icon:Il,StatusFailure24Icon:Ol,StatusInProgress24Icon:ck,StatusSuccess24Icon:Ms,StatusUnknown24Icon:dk,StatusWarning24Icon:fk,Sun24Icon:hk,Upload24Icon:Nc,X24Icon:Sm},PI={Check16Icon:km,ChevronDown16Icon:xm,ChevronUp16Icon:su,Dash16Icon:N$,Element16Icon:Dm,Upload16Icon:Sc,X16Icon:Cm},dn={value:D`transparent`},II={[je.Plain]:{[He.Standard]:{idle:{backgroundColor:M.inverse[tr].background,textColor:M.inverse[tr].foreground,borderColor:M.inverse[tr].background},hover:{backgroundColor:M.colors["vira-grey-behind-bg-non-body"].background,textColor:M.colors["vira-grey-behind-bg-non-body"].foreground,borderColor:M.inverse[tr].background},active:{backgroundColor:M.colors["vira-grey-behind-bg-body"].background,textColor:M.colors["vira-grey-behind-bg-body"].foreground,borderColor:M.inverse[tr].background}},[He.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors[tr].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-grey-on-self-body"].background,textColor:M.colors["vira-grey-on-self-body"].foreground,borderColor:M.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-grey-on-self-non-body"].background,textColor:M.colors["vira-grey-on-self-non-body"].foreground,borderColor:M.colors["vira-grey-on-self-non-body"].foreground}}},[je.Accent]:{[He.Standard]:{idle:{backgroundColor:M.colors["vira-accent-behind-bg-non-body"].background,textColor:M.colors["vira-accent-behind-bg-non-body"].foreground,borderColor:M.colors["vira-accent-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-accent-behind-bg-header"].background,textColor:M.colors["vira-accent-behind-bg-header"].foreground,borderColor:M.colors["vira-accent-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-accent-behind-bg-body"].background,textColor:M.colors["vira-accent-behind-bg-body"].foreground,borderColor:M.colors["vira-accent-behind-bg-body"].background}},[He.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-accent-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-accent-on-self-body"].background,textColor:M.colors["vira-accent-on-self-body"].foreground,borderColor:M.colors["vira-accent-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-accent-on-self-non-body"].background,textColor:M.colors["vira-accent-on-self-non-body"].foreground,borderColor:M.colors["vira-accent-on-self-non-body"].foreground}}},[je.Neutral]:{[He.Standard]:{idle:{backgroundColor:M.colors[tr].background,textColor:M.colors[tr].foreground,borderColor:M.colors[tr].foreground},hover:{backgroundColor:M.colors["vira-grey-behind-fg-small-body"].background,textColor:M.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:M.colors[tr].foreground},active:{backgroundColor:M.colors["vira-grey-behind-fg-body"].background,textColor:M.colors["vira-grey-behind-fg-body"].foreground,borderColor:M.colors[tr].foreground}},[He.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-grey-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-grey-on-self-body"].background,textColor:M.colors["vira-grey-on-self-body"].foreground,borderColor:M.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-grey-on-self-non-body"].background,textColor:M.colors["vira-grey-on-self-non-body"].foreground,borderColor:M.colors["vira-grey-on-self-non-body"].foreground}}},[je.Danger]:{[He.Standard]:{idle:{backgroundColor:M.colors["vira-red-behind-bg-non-body"].background,textColor:M.colors["vira-red-behind-bg-non-body"].foreground,borderColor:M.colors["vira-red-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-red-behind-bg-header"].background,textColor:M.colors["vira-red-behind-bg-header"].foreground,borderColor:M.colors["vira-red-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-red-behind-bg-body"].background,textColor:M.colors["vira-red-behind-bg-body"].foreground,borderColor:M.colors["vira-red-behind-bg-body"].background}},[He.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-red-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-red-on-self-body"].background,textColor:M.colors["vira-red-on-self-body"].foreground,borderColor:M.colors["vira-red-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-red-on-self-non-body"].background,textColor:M.colors["vira-red-on-self-non-body"].foreground,borderColor:M.colors["vira-red-on-self-non-body"].foreground}}},[je.Warning]:{[He.Standard]:{idle:{backgroundColor:M.colors["vira-orange-behind-bg-non-body"].background,textColor:M.colors["vira-orange-behind-bg-non-body"].foreground,borderColor:M.colors["vira-orange-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-orange-behind-bg-header"].background,textColor:M.colors["vira-orange-behind-bg-header"].foreground,borderColor:M.colors["vira-orange-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-orange-behind-bg-body"].background,textColor:M.colors["vira-orange-behind-bg-body"].foreground,borderColor:M.colors["vira-orange-behind-bg-body"].background}},[He.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-orange-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-orange-on-self-body"].background,textColor:M.colors["vira-orange-on-self-body"].foreground,borderColor:M.colors["vira-orange-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-orange-on-self-non-body"].background,textColor:M.colors["vira-orange-on-self-non-body"].foreground,borderColor:M.colors["vira-orange-on-self-non-body"].foreground}}},[je.Positive]:{[He.Standard]:{idle:{backgroundColor:M.colors["vira-green-behind-bg-non-body"].background,textColor:M.colors["vira-green-behind-bg-non-body"].foreground,borderColor:M.colors["vira-green-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-green-behind-bg-header"].background,textColor:M.colors["vira-green-behind-bg-header"].foreground,borderColor:M.colors["vira-green-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-green-behind-bg-body"].background,textColor:M.colors["vira-green-behind-bg-body"].foreground,borderColor:M.colors["vira-green-behind-bg-body"].background}},[He.Subtle]:{idle:{backgroundColor:dn,textColor:M.colors["vira-green-foreground-non-body"].foreground,borderColor:dn},hover:{backgroundColor:M.colors["vira-green-on-self-body"].background,textColor:M.colors["vira-green-on-self-body"].foreground,borderColor:M.colors["vira-green-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-green-on-self-non-body"].background,textColor:M.colors["vira-green-on-self-non-body"].foreground,borderColor:M.colors["vira-green-on-self-non-body"].foreground}}}},ke=or()({tagName:"vira-button",hostClasses:{"vira-button-with-menu-caret":i(({inputs:e})=>!!e.showMenuCaret,"vira-button-with-menu-caret"),"vira-button-size-large":i(({inputs:e})=>e.buttonSize===Hn.Large,"vira-button-size-large"),"vira-button-size-medium":i(({inputs:e})=>!e.buttonSize||e.buttonSize===Hn.Medium,"vira-button-size-medium"),"vira-button-size-small":i(({inputs:e})=>e.buttonSize===Hn.Small,"vira-button-size-small"),"vira-button-emphasis-standard":i(({inputs:e})=>!e.buttonEmphasis||e.buttonEmphasis===He.Standard,"vira-button-emphasis-standard"),"vira-button-emphasis-subtle":i(({inputs:e})=>e.buttonEmphasis===He.Subtle,"vira-button-emphasis-subtle"),"vira-button-color-accent":i(({inputs:e})=>!e.colorVariant||e.colorVariant===je.Accent,"vira-button-color-accent"),"vira-button-color-plain":i(({inputs:e})=>e.colorVariant===je.Plain,"vira-button-color-plain"),"vira-button-color-neutral":i(({inputs:e})=>e.colorVariant===je.Neutral,"vira-button-color-neutral"),"vira-button-color-danger":i(({inputs:e})=>e.colorVariant===je.Danger,"vira-button-color-danger"),"vira-button-color-warning":i(({inputs:e})=>e.colorVariant===je.Warning,"vira-button-color-warning"),"vira-button-color-positive":i(({inputs:e})=>e.colorVariant===je.Positive,"vira-button-color-positive"),"vira-button-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-button-disabled"),"vira-button-icon-only":i(({inputs:e})=>!e.text&&!!e.icon,"vira-button-icon-only")},cssVars:{"vira-button-text-color":"transparent","vira-button-background-color":"transparent","vira-button-border-color":"transparent","vira-button-hover-text-color":"transparent","vira-button-hover-background-color":"transparent","vira-button-hover-border-color":"transparent","vira-button-active-text-color":"transparent","vira-button-active-background-color":"transparent","vira-button-active-border-color":"transparent","vira-button-disabled-text-color":M.colors["vira-grey-behind-bg-invisible"].foreground.value,"vira-button-disabled-background-color":M.colors["vira-grey-behind-bg-invisible"].background.value,"vira-button-disabled-border-color":M.colors["vira-grey-behind-bg-invisible"].background.value,"vira-button-border-width":"1px","vira-button-border-radius":B["vira-form-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>{function t(){const o=$m.flatMap(s=>Sl.map(a=>{const l=II[a][s],u=e[`vira-button-color-${a}`].selector,d=e[`vira-button-emphasis-${s}`].selector;return D`
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
                    `}));return Ae(o.join(`
`))}i(t,"generateVariantCss");function n(){const o=wm.map(s=>D`
                    ${e[`vira-button-size-${s}`].selector} {
                        font-size: ${B[`vira-form-${s}-text-size`].value};

                        button {
                            min-height: ${Ju[s]}px;
                            padding: 2px
                                ${B[`vira-form-${s}-text-size`].value};
                        }
                    }
                `);return Ae(o.join(`
`))}return i(n,"generateSizeVariantCss"),D`
            :host {
                cursor: pointer;
                display: inline-flex;
                position: relative;
                vertical-align: middle;
                align-items: center;
                box-sizing: border-box;
                ${oi};
                ${B["vira-form-focus-outline-color"].name}: ${B["vira-form-accent-primary-hover-color"].value}
            }

            ${n()}
            ${t()}

            button {
                ${Fr};
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

                ${oa({elementBorderSize:r["vira-button-border-width"]})}
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

            button ${P} + .text-template {
                margin-left: 8px;
            }

            ${P} {
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
                aspect-ratio: 1;

                button {
                    padding: 0;
                }
            }
        `},"styles"),render:i(({inputs:e})=>{const r=e.icon?p`
                  <${P.assign({icon:e.icon})}></${P}>
              `:ee,t=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:p`
                  <span class="empty-text">&nbsp;</span>
              `,n=e.showMenuCaret?p`
                  <${P.assign({icon:xm})}
                      class="caret-icon"
                  ></${P}>
              `:ee;return p`
            <button ?disabled=${e.isDisabled}>
                ${r}${t}${n}
            </button>
        `},"render")});var vh=(e=>(e.Error="error",e.Success="success",e))(vh||{});const Vf=or()({tagName:"vira-card",hostClasses:{"vira-card-error":i(({inputs:e})=>e.cardState==="error","vira-card-error"),"vira-card-success":i(({inputs:e})=>e.cardState==="success","vira-card-success")},cssVars:{"vira-card-border":D`1px solid ${B["vira-form-border-color"].value}`,"vira-card-padding":B["vira-form-wrapper-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>D`
        :host {
            display: block;
            border: ${r["vira-card-border"].value};
            border-radius: ${B["vira-form-wrapper-radius"].value};
            padding: ${r["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${B["vira-form-error-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${B["vira-form-success-color"].value};
        }
    `,"styles"),render(){return p`
            <slot></slot>
        `}}),de=or()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":i(({inputs:e})=>!!e.horizontal,"vira-checkbox-horizontal"),"vira-checkbox-filled-checked":i(({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-checked"),"vira-checkbox-filled-unchecked":i(({inputs:e})=>!!e.fillWhenUnchecked,"vira-checkbox-filled-unchecked")},styles:i(({hostClasses:e})=>D`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${P} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${b["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        ${e["vira-checkbox-filled-checked"].selector} {
            & .custom-checkbox.checked {
                color: ${B["vira-form-background-color"].value};
                background-color: ${B["vira-form-accent-primary-color"].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${B["vira-form-accent-primary-hover-color"].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${B["vira-form-accent-primary-active-color"].value};
                }
            }
        }
        ${e["vira-checkbox-filled-unchecked"].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${B["vira-form-background-color"].value};
                background-color: ${B["vira-form-error-color"].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${B["vira-form-error-hover-color"].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${B["vira-form-error-active-color"].value};
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
                font-weight: ${B["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${B["vira-form-selection-hover-color"].value};
            }
            &:active .custom-checkbox {
                background-color: ${B["vira-form-selection-active-color"].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${B["vira-form-border-color"].value};
            color: ${B["vira-form-foreground-color"].value};
            border-radius: ${B["vira-form-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${oa({elementBorderSize:"1px"})}

            &.checked {
                & ${P} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${B["vira-form-error-color"].value};
            }

            &.disabled {
                ${Fl};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,"styles"),events:{valueChange:nr()},render({inputs:e,dispatch:r,events:t}){function n(){e.disabled||r(new t.valueChange(!e.value))}i(n,"updateValue");const o=e.label?p`
                  <span
                      class="label-text"
                      ${xo(e.attributePassthrough?.text)}
                      style=${jr(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:ee;return p`
            <label
                class=${Et({disabled:!!e.disabled})}
                ${xo(e.attributePassthrough?.label)}
                style=${jr(e.stylePassthrough?.label)}
                ${U("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${Et({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${jr(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${xo(e.attributePassthrough?.["custom-checkbox"])}
                    style=${jr(e.stylePassthrough?.["custom-checkbox"])}
                    ${oP(n)}
                >
                    <${P.assign({icon:Pd,fitContainer:!0})}
                        ${xo(e.attributePassthrough?.[P.tagName])}
                        style=${jr(e.stylePassthrough?.[P.tagName])}
                    ></${P}>
                </span>
            </label>
        `}}),ht=or()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":i(({inputs:e})=>!!e.expandOnPrint,"vira-collapsible-wrapper-expand-on-print")},slotNames:["header"],styles:i(({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Fr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${xa["vira-pretty-animation-duration"].value};
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
    `,"styles"),events:{expandChange:nr()},render({state:e,slotNames:r,updateState:t,dispatch:n,events:o,inputs:s}){const a=s.expanded?D`
                  height: ${e.contentHeight}px;
              `:D`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${U("click",()=>{n(new o.expandChange(!s.expanded))})}
            >
                <slot name=${r.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${Et({collapsed:!s.expanded})}"
                style=${a}
                disabled="disabled"
            >
                <div
                    ${a$(({contentRect:l})=>{t({contentHeight:l.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Kr=or()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:nr()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":i(({state:e})=>e.isExpanded,"vira-collapsible-card-expanded"),"vira-collapsible-card-expansion-blocked":i(({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-expansion-blocked"),"vira-collapsible-card-card-styles":i(({inputs:e})=>!e.rawCollapsible,"vira-collapsible-card-card-styles")},cssVars:{"vira-collapsible-card-content-gap":"16px"},styles:i(({hostClasses:e,cssVars:r})=>D`
        :host {
            display: inline-flex;
        }

        ${e["vira-collapsible-card-expanded"].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${ht} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e["vira-collapsible-card-card-styles"].selector} {
            & ${ht} {
                border: 1px solid ${B["vira-form-border-color"].value};
                border-radius: ${B["vira-form-wrapper-radius"].value};
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
            ${ht} {
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
    `,"styles"),slotNames:["header"],render({inputs:e,slotNames:r,state:t,updateState:n,testIds:o,dispatch:s,events:a}){e.blockExpansion&&n({isExpanded:!0});const l=t.isExpanded||e.expandOnPrint?p`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:ee,u=e.hideHeader?ee:p`
                  <div class="card-header">
                      <slot name=${r.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?ee:p`
                                <${P.assign({icon:su,fitContainer:!0})}
                                    ${Ko(o.openCaret)}
                                    class="open-caret"
                                ></${P}>
                            `}
                  </div>
              `;return p`
            <${ht.assign({expanded:t.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${U(ht.events.expandChange,d=>{d.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:d.detail}),s(new a.expandToggle(d.detail)))})}
            >
                <div class="header-wrapper" slot=${ht.slotNames.header}>
                    ${u}
                </div>
                ${l}
            </${ht}>
        `}}),Ja=or()({tagName:"vira-dropdown",testIds:["leadingIcon","prefixText","trigger"],styles:D`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${le} {
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
                ${xa["vira-interaction-animation-duration"].value} linear;
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
            border: 1px solid ${B["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${B["vira-form-radius"].value};
            background-color: ${B["vira-form-background-color"].value};
            color: ${B["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:nr(),openChange:nr()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:r,dispatch:t,events:n,updateState:o,testIds:s}){const a=yn(r.selected,g=>r.options.find(m=>m.value===g),F.isTruthy),l=r.icon?p`
                  <${P.assign({icon:r.icon})}
                      ${Ko(s.leadingIcon)}
                  ></${P}>
              `:ee,u=!a.length,d=r.selectionPrefix&&!u?p`
                      <span class="selected-label-prefix" ${Ko(s.prefixText)}>
                          ${r.selectionPrefix}
                      </span>
                  `:ee,f=u?r.placeholder||"":r.isMultiSelect&&a.length>1?`${a.length} Selected`:a[0]?.label||"",h=p`
            <${Ri.assign({direction:e.showPopUpResult?.popDown?Nl.Downwards:Nl.Upwards})}
                slot=${le.slotNames.popUp}
            >
                ${F$(r.options.map(g=>({content:g.label,onClick(){t(new n.selectedChange([g.value]))},disabled:g.disabled,selected:a.includes(g)})))}
            </${Ri}>
        `;return p`
            <${le.assign({...r,focusOnClose:!0,popUpOffset:{vertical:-1,right:24},horizontalAnchor:r.horizontalAnchor||Li.Both})}
                ${U(le.events.openChange,g=>{!!e.showPopUpResult!=!!g.detail&&t(new n.openChange(g.detail)),o({showPopUpResult:g.detail})})}
            >
                <div
                    class="dropdown-trigger ${Et({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    slot=${le.slotNames.trigger}
                    ${Ko(s.trigger)}
                >
                    ${l}
                    <span
                        class="selection-display ${Et({"using-placeholder":u})}"
                        title=${jr(u?void 0:f)}
                    >
                        ${d} ${f}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${P.assign({icon:su})}
                            class="trigger-icon"
                        ></${P}>
                    </span>
                </div>
                ${e.showPopUpResult?h:ee}
            </${le}>
        `}}),ji=or()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:i(({cssVars:e})=>D`
        :host {
            color: ${B["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,"styles"),render(){return p`
            <slot></slot>
        `}});var Fe=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(Fe||{});function Iu(e,r){if(e)return r?Hh({value:e,suffix:"*"}):e}i(Iu,"applyRequiredLabel");function OI(e){return zs(e).every(r=>r.isHidden||!r.isRequired?!0:F.isString(r.value)?!!r.value:r.value!=null)}i(OI,"areFormFieldsValid");function yh({input:e,matcher:r}){return!e||!r?!0:e.length>1?e.split("").every(t=>yh({input:t,matcher:r})):r instanceof RegExp?!!e.match(r):r.includes(e)}i(yh,"doesMatch");function BI({value:e,allowed:r,blocked:t}){const n=String(e),o=r?yh({input:n,matcher:r}):!0,s=t?yh({input:n,matcher:t}):!1;return o&&!s}i(BI,"isAllowed");function wh(e){const r=String(e.value);if(!e.value)return{filtered:r,blocked:""};const{filtered:t,blocked:n}=r.split("").reduce((o,s)=>(BI({...e,value:s})?o.filtered.push(s):o.blocked.push(s),o),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}i(wh,"filterTextInputValue");function RI({inputs:e,previousValue:r,event:t,inputBlockedCallback:n,newValueCallback:o}){const s=Sd(t,HTMLInputElement),a=F.hasKey(t,"data")&&Gh.isString(t.data)||"";if(a){const{blocked:u}=wh({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const l=wh({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==l&&(s.value=l),r!==l&&o(l)}i(RI,"textInputListener");var Ni=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(Ni||{});const Se=or()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:i(({hostClasses:e,cssVars:r})=>D`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${B["vira-form-foreground-color"].value};
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
                    font-weight: ${B["vira-form-label-font-weight"].value};
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
                ${Fr};
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
                ${Fr};
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
                border-radius: ${B["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${B["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Fr};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${r["vira-input-padding-horizontal"].value};
                border-radius: ${B["vira-form-radius"].value};
                background-color: ${B["vira-form-background-color"].value};
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
                ${Fr};
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
                    ${oa({elementBorderSize:"1px",noNesting:!0})}
                }
            }

            ::selection {
                background: ${B["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${B["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${B["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${oi};
            }

            button {
                ${Fr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${xa["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${B["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${B["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${B["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${B["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${B["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${B["vira-form-error-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${Fl};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,"styles"),events:{valueChange:nr(),inputBlocked:nr()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Ii(32)}},hostClasses:{"vira-input-disabled":i(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":i(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":i(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown"),"vira-input-error":i(({inputs:e})=>!!e.hasError,"vira-input-error")},render:i(({inputs:e,dispatch:r,state:t,updateState:n,events:o,host:s})=>{const{filtered:a}=wh({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),l=e.icon?p`
                  <${P.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${P}>
              `:ee,u=e.fitText?D`
                  width: ${t.forcedInputWidth}px;
              `:ee,d=U("mousedown",g=>{const m=Sd(g,HTMLElement,{useOriginalTarget:!0}),y=vr.instanceOf(s.shadowRoot.querySelector("input"),HTMLInputElement);m!==y&&(g.preventDefault(),y.focus())}),f=e.disableBrowserHelps||e.type==="password",h=p`
            <span class="input-wrapper" ${e.label?ee:d}>
                ${l}
                ${Bt(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${a$(({contentRect:g})=>{n({forcedInputWidth:g.width})})}
                        >
                            <pre>${a||e.placeholder||ee}</pre>
                        </span>
                    `)}

                <input
                    id=${jr(e.label?t.randomId:void 0)}
                    aria-label=${jr(e.label||void 0)}
                    autofocus=${!1}
                    type=${LI(e.type,t.showPassword)}
                    style=${u}
                    autocomplete=${jr(f?"off":void 0)}
                    autocorrect=${jr(f?"off":void 0)}
                    autocapitalize=${jr(f?"off":void 0)}
                    spellcheck=${jr(f?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${U("input",g=>{RI({inputs:e,previousValue:a,event:g,inputBlockedCallback(m){r(new o.inputBlocked(m))},newValueCallback(m){r(new o.valueChange(m))}})})}
                    placeholder=${jr(e.placeholder||void 0)}
                    ${xo(e.attributePassthrough)}
                />

                ${Bt(!!(e.showClearButton&&e.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${U("mousedown",g=>{g.stopImmediatePropagation(),g.preventDefault()})}
                            ${U("click",()=>{e.disabled||r(new o.valueChange(""))})}
                        >
                            <${P.assign({icon:Em})}></${P}>
                        </button>
                    `)}
                ${Bt(e.type==="password",p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${U("mousedown",g=>{g.stopImmediatePropagation(),g.preventDefault()})}
                            ${U("click",()=>{n({showPassword:!t.showPassword})})}
                        >
                            <${P.assign({icon:t.showPassword?Mm:Am})}></${P}>
                        </button>
                    `)}
                ${Bt(!!e.suffix,p`
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
                <label for=${t.randomId} ${d}>
                    <span class="input-label">${e.label}</span>
                    ${h}
                </label>
            `:h},"render")});function LI(e,r){return e==="password"&&r?"text":e||"text"}i(LI,"calculateEffectiveInputType");const Ve=or()({tagName:"vira-select",state(){return{randomId:Ii(32),cleanupListeners:void 0}},events:{valueChange:nr()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":i(({inputs:e})=>!!e.disabled,"vira-select-disabled"),"vira-select-error":i(({inputs:e})=>!!e.hasError,"vira-select-error"),"vira-select-not-raw":i(({inputs:e})=>!e.rawSelect,"vira-select-not-raw")},styles:i(({hostClasses:e,cssVars:r})=>D`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${B["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Fr};
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
                    color: ${B["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${r["vira-select-icon-padding"].value};
                }
            }

            & ${P} {
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
                border-radius: ${B["vira-form-radius"].value};
                color: ${B["vira-form-foreground-color"].value};
                background-color: ${B["vira-form-background-color"].value};
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
                        ${oa({elementBorderSize:"1px",noNesting:!0})}
                    }
                }

                & .border-style {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: ${B["vira-form-radius"].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${B["vira-form-border-color"].value};
                    transition: border
                        ${xa["vira-interaction-animation-duration"].value};
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
                font-weight: ${B["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${Fl}
            }
            ${P} {
                ${Fl}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${B["vira-form-error-color"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();const n=[$o(t,"mousedown",o=>{const s=vr.instanceOf(t.shadowRoot.querySelector("select"),HTMLSelectElement);o.composedPath().includes(s)||(o.preventDefault(),o.stopPropagation(),s.showPicker&&s.showPicker())})];r({cleanupListeners:i(()=>{n.forEach(o=>o())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e,state:r,dispatch:t,events:n}){const o=e.value||void 0,s=e.placeholder||o==null?p`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:ee,a=p`
            <span class="select-wrapper">
                <select
                    .value=${jr(o)}
                    class=${Et({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${jr(e.label?r.randomId:void 0)}
                    aria-label=${jr(e.label||void 0)}
                    aria-disabled=${jr(e.disabled?"true":void 0)}
                    ${U("input",l=>{const u=Sd(l,HTMLSelectElement),d=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(f=>f.value===o)),t(new n.valueChange(d))})}
                    ${xo(e.attributePassthrough?.select)}
                >
                    ${s}
                    ${e.options.map(l=>p`
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

                <${P.assign({icon:e.icon})}
                    class="input-icon"
                ></${P}>
                <${P.assign({icon:su})}
                    class="trigger-icon"
                ></${P}>
            </span>
        `;return e.label?p`
                <label for=${r.randomId} ${xo(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${a}
                </label>
            `:a}}),Ft=or()({tagName:"vira-form",events:{valueChange:nr(),validChange:nr()},styles:D`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const s=OI(e.fields);s!==n.lastIsValid&&(o({lastIsValid:s}),r(new t.validChange({allFieldsAreValid:s})));const a=Pn(e.fields).map(([l,u])=>u.isHidden?ee:u.type===Fe.Checkbox?p`
                        <${de.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:Iu(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Ko(u.testId):ee}
                            ${U(de.events.valueChange,d=>{r(new t.valueChange({key:l,...u,value:d.detail}))})}
                        ></${de}>
                    `:u.type===Fe.Select?p`
                        <${Ve.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:Iu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Ko(u.testId):ee}
                            ${U(Ve.events.valueChange,d=>{r(new t.valueChange({key:l,...u,value:d.detail}))})}
                        ></${Ve}>
                    `:u.type===Fe.Number?p`
                        <${Se.assign({value:u.value?.toString()||"",disabled:e.isDisabled||u.isDisabled,allowedInputs:/\d/,hasError:u.hasError,icon:u.icon,label:Iu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,type:Ni.Number,attributePassthrough:{...u.min===void 0?{}:{min:String(u.min)},...u.max===void 0?{}:{max:String(u.max)},...u.step===void 0?{}:{step:String(u.step)}}})}
                            ${u.testId?Ko(u.testId):ee}
                            ${U(Se.events.valueChange,d=>{const f=d.detail===""?void 0:Number(d.detail);r(new t.valueChange({key:l,...u,value:f}))})}
                        ></${Se}>
                    `:p`
                        <${Se.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:Iu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===Fe.NewPassword?{autocomplete:"new-password"}:u.type===Fe.ExistingPassword?{autocomplete:"password"}:u.type===Fe.Email?{autocomplete:"email"}:{},type:[Fe.NewPassword,Fe.ExistingPassword,Fe.PlainPassword].includes(u.type)?Ni.Password:u.type===Fe.Email?Ni.Email:Ni.Default})}
                            ${u.testId?Ko(u.testId):ee}
                            ${U(Se.events.valueChange,d=>{r(new t.valueChange({key:l,...u,value:d.detail}))})}
                        ></${Se}>
                    `);return p`
            <form ${U("submit",l=>l.preventDefault())}>
                ${a}
                <slot></slot>
            </form>
        `}}),Bo=or()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":i(({inputs:e})=>e.dominantDimension==="height","vira-image-height-constrained")},slotNames:["loading","error"],events:{imageLoad:nr(),imageError:nr()},styles:i(({hostClasses:e})=>D`
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
    `,"styles"),render({inputs:e,state:r,updateState:t,dispatch:n,events:o,slotNames:s}){const a=e.imageUrl,l=r.erroredUrls[a]?p`
                  <slot class="status-wrapper" name=${s.error}>
                      <${P.assign({icon:Ol})}
                          class="error"
                      ></${P}>
                  </slot>
              `:r.loadedUrls[a]?void 0:p`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${P.assign({icon:ii})}></${P}>
                    </slot>
                `;return p`
            ${Bt(!!l,l)}
            <img
                class=${Et({hidden:!!l})}
                ${U("load",async()=>{e._debugLoadDelay&&await Ui(e._debugLoadDelay),t({loadedUrls:{...r.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${U("error",async u=>{e._debugLoadDelay&&await Ui(e._debugLoadDelay),t({erroredUrls:{...r.erroredUrls,[a]:!0}}),n(new o.imageError(u.error))})}
                src=${a}
            />
        `}}),Xn=or()({tagName:"vira-link",state(){return{cleanupListeners:void 0}},hostClasses:{"vira-link-link-styles":i(({inputs:e})=>!e.disableLinkStyles,"vira-link-link-styles")},styles:i(({hostClasses:e})=>D`
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
                color: ${B["vira-form-accent-primary-color"].value};
            }

            &:active a,
            & a:active {
                color: ${B["vira-form-accent-primary-active-color"].value};
            }
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();let n=!1;const o=[$o(t,"click",s=>{if(n)return;const a=vr.instanceOf(t.shadowRoot.querySelector("a"),HTMLAnchorElement);s.composedPath().includes(a)||(s.preventDefault(),s.stopPropagation(),n=!0,a.dispatchEvent(new MouseEvent(s.type,s)),n=!1)})];r({cleanupListeners:i(()=>{o.forEach(s=>s())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e}){function r(t){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,t)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(i(r,"clickCallback"),e.link?.newTab)return p`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${xo(e.attributePassthrough?.a)}
                    style=${jr(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const t=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return p`
                <a
                    href=${t}
                    rel="noopener noreferrer"
                    ${xo(e.attributePassthrough?.a)}
                    style=${jr(e.stylePassthrough?.a)}
                    ${U("click",r)}
                >
                    <slot></slot>
                </a>
            `}}}),jI=["pagehide","pageshow","popstate"],Ro=or()({tagName:"vira-modal",events:{modalClose:nr()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanupListeners:void 0}},cleanup({state:e}){e.cleanupListeners?.()},hostClasses:{"vira-modal-phone-size":i(({inputs:e})=>!!e.isMobileSize,"vira-modal-phone-size")},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:i(({hostClasses:e,cssVars:r})=>D`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${iu};
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
            ${Tl.modal}

            &[open] {
                display: flex;
            }
            &::backdrop {
                background: ${B["vira-form-modal-backdrop-color"].value};
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
                            color: ${B["vira-form-secondary-body-foreground"].value};
                        }
                    }

                    & button.close {
                        ${Fr};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${B["vira-form-radius"].value};

                        &:hover {
                            background-color: ${B["vira-form-selection-hover-color"].value};
                        }

                        & ${P} {
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
    `,"styles"),render({inputs:e,state:r,updateState:t,events:n,dispatch:o,slotNames:s}){if(r.dialogElement&&e.open!==r.dialogElement.open&&(e.open?r.dialogElement.showModal():r.dialogElement.close()),r.previousOpenValue!==e.open&&(r.cleanupListeners?.(),t({previousOpenValue:e.open}),e.open)){const l=jI.map(u=>_0(u,()=>{o(new n.modalClose)}));t({cleanupListeners:i(()=>{l.forEach(u=>u())},"cleanupListeners")})}function a(){e.open&&(r.cleanupListeners?.(),o(new n.modalClose))}return i(a,"close"),p`
            <dialog
                ${Hi(l=>{t({dialogElement:vr.instanceOf(l,HTMLDialogElement)})})}
                ${U("close",()=>{a()})}
                ${U("mousedown",l=>{r.contentElement&&!l.composedPath().includes(r.contentElement)&&!e.blockLightDismissal&&a()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Hi(l=>{t({contentElement:vr.instanceOf(l,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${s.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?p`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:ee}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${U("click",()=>{r.dialogElement?.close()})}
                        >
                            <${P.assign({icon:Sm})}></${P}>
                        </button>
                    </div>
                    ${e.open?p`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:ee}
                </div>
            </dialog>
        `}}),Qn=or()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanupListeners:void 0}},hostClasses:{"vira-overflow-switch-show-small":i(({state:e,inputs:r})=>e.isOverflowing||!!r.useSmall,"vira-overflow-switch-show-small")},styles:i(({hostClasses:e})=>D`
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
    `,"styles"),cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({slotNames:e,updateState:r,inputs:t,host:n,state:o}){return p`
            <div
                class="large"
                ${Hi(s=>{if(!t.automaticallySwitch)return;const a={elementToTest:s,host:n,updateState:r},l=new ResizeObserver(()=>{qf(a)});l.observe(n),l.observe(s);const u=$o(s,"slotchange",()=>{qf(a)});qf(a),o.cleanupListeners?.(),r({cleanupListeners(){l.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function qf({elementToTest:e,host:r,updateState:t}){const n=e.scrollWidth>r.clientWidth;t({isOverflowing:n})}i(qf,"updateOverflowing");const mo=or()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:i(({cssVars:e})=>D`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${B["vira-form-accent-primary-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${B["vira-form-filled-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,"styles"),render({inputs:e,host:r}){const t=e.min||0,o=(e.max||100)-t,s=e.value-t,a=R6(Math.round(s/o*100),{min:0,max:100});return dI(r,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),p`
            <div
                class="progress-bar"
                style=${a?D`
                          width: ${a}%;
                      `:D`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});var Bl;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(Bl||(Bl={}));const Tm={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:Bl.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},si=ar(Tm,e=>e),be={...si,name:"name",hexString:"hexString"},Zn=ar(Tm,(e,r)=>{const t=F.isEnumValue(e,Bl)&&F.isEnumValue(e,si)?e:"conversionFormat"in r&&r.conversionFormat&&F.isEnumValue(r.conversionFormat,Bl)&&F.isEnumValue(r.conversionFormat,si)?r.conversionFormat:void 0;return _r.isTruthy(t,`Invalid conversion format for color format '${e}' ${w(r)}.`),{...r,colorFormat:e,conversionFormat:t,rawSyntax:vr.isEnumValue("rawSyntax"in r&&r.rawSyntax?r.rawSyntax:e,be)}});Qo(zs(Tm),e=>({key:e.colorSpace,value:e.colorSpace}),{});Pn(Zn).reduce((e,[r,t])=>(Qi(e,t.colorSpace,()=>({}))[r]=t,e),{});function _I(e){return e.startsWith("rgb")?be.rgb:e.startsWith("hsl")?be.hsl:e.startsWith("hwb")?be.hwb:e.startsWith("oklab")?be.oklab:e.startsWith("oklch")?be.oklch:e.startsWith("lab")?be.lab:e.startsWith("lch")?be.lch:e.startsWith("#")?be.hexString:be.name}i(_I,"getColorSyntaxFromCssString");const $h={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in $h)Object.freeze($h[e]);const Rl=Object.freeze($h),UI=Object.keys(Rl).reduce((e,r)=>r.length>e.length?r:e),zI=Hc(ar(Rl,(e,r)=>yn(Object.entries(Rl),([n])=>n,(n,[,o])=>n===e?!1:F.deepEquals(o,r))),(e,r)=>!!r.length),ev=Object.entries(zI).reduce((e,r)=>{const t=[e[0],...e[1]].join(", ");return[r[0],...r[1]].join(", ").length>t.length?r:e}).reduce((e,r)=>F.isArray(r)?[...e,...r]:[...e,r],[]),rv=Math.max(UI.length,ev.length+(ev.length-1)*2),gk=i((e,r)=>{if(typeof e=="number"){if(r===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(r===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(r===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(r===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},"parseNumber"),VI={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qI=i(e=>gk(VI[e.toLowerCase()],6),"parseNamed"),WI=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,KI=i(e=>{let r;return(r=e.match(WI))?gk(parseInt(r[1],16),r[1].length):void 0},"parseHex"),Jo="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",cl=`${Jo}%`,Nm=`(?:${Jo}%|${Jo})`,GI=`(?:${Jo}(deg|grad|rad|turn)|${Jo})`,ia="\\s*,\\s*",HI=new RegExp(`^rgba?\\(\\s*${Jo}${ia}${Jo}${ia}${Jo}\\s*(?:,\\s*${Nm}\\s*)?\\)$`),ZI=new RegExp(`^rgba?\\(\\s*${cl}${ia}${cl}${ia}${cl}\\s*(?:,\\s*${Nm}\\s*)?\\)$`),YI=i(e=>{let r={mode:"rgb"},t;if(t=e.match(HI))t[1]!==void 0&&(r.r=t[1]/255),t[2]!==void 0&&(r.g=t[2]/255),t[3]!==void 0&&(r.b=t[3]/255);else if(t=e.match(ZI))t[1]!==void 0&&(r.r=t[1]/100),t[2]!==void 0&&(r.g=t[2]/100),t[3]!==void 0&&(r.b=t[3]/100);else return;return t[4]!==void 0?r.alpha=Math.max(0,Math.min(1,t[4]/100)):t[5]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[5]))),r},"parseRgbLegacy"),kh=i((e,r)=>e===void 0?void 0:typeof e!="object"?Ch(e):e.mode!==void 0?e:r?{...e,mode:r}:void 0,"prepare"),Zi=i((e="rgb")=>r=>(r=kh(r,e))!==void 0?r.mode===e?r:Yn[r.mode][e]?Yn[r.mode][e](r):e==="rgb"?Yn[r.mode].rgb(r):Yn.rgb[e](Yn[r.mode].rgb(r)):void 0,"converter"),Yn={},mk={},Pc=[],pk={},JI=i(e=>e,"identity"),Le=i(e=>(Yn[e.mode]={...Yn[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(r=>{Yn[r]||(Yn[r]={}),Yn[r][e.mode]=e.fromMode[r]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(r=>{if(e.ranges[r]===void 0&&(e.ranges[r]=[0,1]),!e.interpolate[r])throw new Error(`Missing interpolator for: ${r}`);typeof e.interpolate[r]=="function"&&(e.interpolate[r]={use:e.interpolate[r]}),e.interpolate[r].fixup||(e.interpolate[r].fixup=JI)}),mk[e.mode]=e,(e.parse||[]).forEach(r=>{XI(r,e.mode)}),Zi(e.mode)),"useMode"),Rd=i(e=>mk[e],"getMode"),XI=i((e,r)=>{if(typeof e=="string"){if(!r)throw new Error("'mode' required when 'parser' is a string");pk[e]=r}else typeof e=="function"&&Pc.indexOf(e)<0&&Pc.push(e)},"useParser"),xh=/[^\x00-\x7F]|[a-zA-Z_]/,QI=/[^\x00-\x7F]|[-\w]/,L={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let re=0;function Ou(e){let r=e[re],t=e[re+1];return r==="-"||r==="+"?/\d/.test(t)||t==="."&&/\d/.test(e[re+2]):r==="."?/\d/.test(t):/\d/.test(r)}i(Ou,"is_num");function Dh(e){if(re>=e.length)return!1;let r=e[re];if(xh.test(r))return!0;if(r==="-"){if(e.length-re<2)return!1;let t=e[re+1];return!!(t==="-"||xh.test(t))}return!1}i(Dh,"is_ident");const eO={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function La(e){let r="";if((e[re]==="-"||e[re]==="+")&&(r+=e[re++]),r+=Bu(e),e[re]==="."&&/\d/.test(e[re+1])&&(r+=e[re++]+Bu(e)),(e[re]==="e"||e[re]==="E")&&((e[re+1]==="-"||e[re+1]==="+")&&/\d/.test(e[re+2])?r+=e[re++]+e[re++]+Bu(e):/\d/.test(e[re+1])&&(r+=e[re++]+Bu(e))),Dh(e)){let t=Ic(e);return t==="deg"||t==="rad"||t==="turn"||t==="grad"?{type:L.Hue,value:r*eO[t]}:void 0}return e[re]==="%"?(re++,{type:L.Percentage,value:+r}):{type:L.Number,value:+r}}i(La,"num");function Bu(e){let r="";for(;/\d/.test(e[re]);)r+=e[re++];return r}i(Bu,"digits");function Ic(e){let r="";for(;re<e.length&&QI.test(e[re]);)r+=e[re++];return r}i(Ic,"ident");function rO(e){let r=Ic(e);return e[re]==="("?(re++,{type:L.Function,value:r}):r==="none"?{type:L.None,value:void 0}:{type:L.Ident,value:r}}i(rO,"identlike");function tO(e=""){let r=e.trim(),t=[],n;for(re=0;re<r.length;){if(n=r[re++],n===`
`||n==="	"||n===" "){for(;re<r.length&&(r[re]===`
`||r[re]==="	"||r[re]===" ");)re++;continue}if(n===",")return;if(n===")"){t.push({type:L.ParenClose});continue}if(n==="+"){if(re--,Ou(r)){t.push(La(r));continue}return}if(n==="-"){if(re--,Ou(r)){t.push(La(r));continue}if(Dh(r)){t.push({type:L.Ident,value:Ic(r)});continue}return}if(n==="."){if(re--,Ou(r)){t.push(La(r));continue}return}if(n==="/"){for(;re<r.length&&(r[re]===`
`||r[re]==="	"||r[re]===" ");)re++;let o;if(Ou(r)&&(o=La(r),o.type!==L.Hue)){t.push({type:L.Alpha,value:o});continue}if(Dh(r)&&Ic(r)==="none"){t.push({type:L.Alpha,value:{type:L.None,value:void 0}});continue}return}if(/\d/.test(n)){re--,t.push(La(r));continue}if(xh.test(n)){re--,t.push(rO(r));continue}return}return t}i(tO,"tokenize");function nO(e){e._i=0;let r=e[e._i++];if(!r||r.type!==L.Function||r.value!=="color"||(r=e[e._i++],r.type!==L.Ident))return;const t=pk[r.value];if(!t)return;const n={mode:t},o=bk(e,!1);if(!o)return;const s=Rd(t).channels;for(let a=0,l,u;a<s.length;a++)l=o[a],u=s[a],l.type!==L.None&&(n[u]=l.type===L.Number?l.value:l.value/100,u==="alpha"&&(n[u]=Math.max(0,Math.min(1,n[u]))));return n}i(nO,"parseColorSyntax");function bk(e,r){const t=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===L.None||n.type===L.Number||n.type===L.Alpha||n.type===L.Percentage||r&&n.type===L.Hue){t.push(n);continue}if(n.type===L.ParenClose){if(e._i<e.length)return;continue}return}if(!(t.length<3||t.length>4)){if(t.length===4){if(t[3].type!==L.Alpha)return;t[3]=t[3].value}return t.length===3&&t.push({type:L.None,value:void 0}),t.every(o=>o.type!==L.Alpha)?t:void 0}}i(bk,"consumeCoords");function oO(e,r){e._i=0;let t=e[e._i++];if(!t||t.type!==L.Function)return;let n=bk(e,r);if(n)return n.unshift(t.value),n}i(oO,"parseModernSyntax");const Ch=i(e=>{if(typeof e!="string")return;const r=tO(e),t=r?oO(r,!0):void 0;let n,o=0,s=Pc.length;for(;o<s;)if((n=Pc[o++](e,t))!==void 0)return n;return r?nO(r):void 0},"parse");function iO(e,r){if(!r||r[0]!=="rgb"&&r[0]!=="rgba")return;const t={mode:"rgb"},[,n,o,s,a]=r;if(!(n.type===L.Hue||o.type===L.Hue||s.type===L.Hue))return n.type!==L.None&&(t.r=n.type===L.Number?n.value/255:n.value/100),o.type!==L.None&&(t.g=o.type===L.Number?o.value/255:o.value/100),s.type!==L.None&&(t.b=s.type===L.Number?s.value/255:s.value/100),a.type!==L.None&&(t.alpha=Math.min(1,Math.max(0,a.type===L.Number?a.value:a.value/100))),t}i(iO,"parseRgb");const sO=i(e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,"parseTransparent"),aO=i((e,r,t)=>e+t*(r-e),"lerp"),lO=i(e=>{let r=[];for(let t=0;t<e.length-1;t++){let n=e[t],o=e[t+1];n===void 0&&o===void 0?r.push(void 0):n!==void 0&&o!==void 0?r.push([n,o]):r.push(n!==void 0?[n,n]:[o,o])}return r},"get_classes"),uO=i(e=>r=>{let t=lO(r);return n=>{let o=n*t.length,s=n>=1?t.length-1:Math.max(Math.floor(o),0),a=t[s];return a===void 0?void 0:e(a[0],a[1],o-s)}},"interpolatorPiecewise"),V=uO(aO),qr=i(e=>{let r=!1,t=e.map(n=>n!==void 0?(r=!0,n):1);return r?t:e},"fixupAlpha"),Da={mode:"rgb",channels:["r","g","b","alpha"],parse:[iO,KI,YI,qI,sO,"srgb"],serialize:"srgb",interpolate:{r:V,g:V,b:V,alpha:{use:V,fixup:qr}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},Wf=i((e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),"linearize$2"),tv=i(e=>{let r=Wf(e.r),t=Wf(e.g),n=Wf(e.b),o={mode:"xyz65",x:.5766690429101305*r+.1855582379065463*t+.1882286462349947*n,y:.297344975250536*r+.6273635662554661*t+.0752914584939979*n,z:.0270313613864123*r+.0706888525358272*t+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertA98ToXyz65"),Kf=i(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),"gamma$2"),nv=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"a98",r:Kf(e*2.0415879038107465-r*.5650069742788597-.3447313507783297*t),g:Kf(e*-.9692436362808798+r*1.8759675015077206+.0415550574071756*t),b:Kf(e*.0134442806320312-r*.1183623922310184+1.0151749943912058*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToA98"),Gf=i((e=0)=>{const r=Math.abs(e);return r<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((r+.055)/1.055,2.4)},"fn$3"),Ca=i(({r:e,g:r,b:t,alpha:n})=>{let o={mode:"lrgb",r:Gf(e),g:Gf(r),b:Gf(t)};return n!==void 0&&(o.alpha=n),o},"convertRgbToLrgb"),cs=i(e=>{let{r,g:t,b:n,alpha:o}=Ca(e),s={mode:"xyz65",x:.4123907992659593*r+.357584339383878*t+.1804807884018343*n,y:.2126390058715102*r+.715168678767756*t+.0721923153607337*n,z:.0193308187155918*r+.119194779794626*t+.9505321522496607*n};return o!==void 0&&(s.alpha=o),s},"convertRgbToXyz65"),Hf=i((e=0)=>{const r=Math.abs(e);return r>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(r,1/2.4)-.055):e*12.92},"fn$2"),Ea=i(({r:e,g:r,b:t,alpha:n},o="rgb")=>{let s={mode:o,r:Hf(e),g:Hf(r),b:Hf(t)};return n!==void 0&&(s.alpha=n),s},"convertLrgbToRgb"),ds=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Ea({r:e*3.2409699419045226-r*1.537383177570094-.4986107602930034*t,g:e*-.9692436362808796+r*1.8759675015077204+.0415550574071756*t,b:e*.0556300796969936-r*.2039769588889765+1.0569715142428784*t});return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRgb"),cO={...Da,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:i(e=>nv(cs(e)),"rgb"),xyz65:nv},toMode:{rgb:i(e=>ds(tv(e)),"rgb"),xyz65:tv}},at=i(e=>(e=e%360)<0?e+360:e,"normalizeHue"),dO=i((e,r)=>e.map((t,n,o)=>{if(t===void 0)return t;let s=at(t);return n===0||e[n-1]===void 0?s:r(s-at(o[n-1]))}).reduce((t,n)=>!t.length||n===void 0||t[t.length-1]===void 0?(t.push(n),t):(t.push(n+t[t.length-1]),t),[]),"hue"),To=i(e=>dO(e,r=>Math.abs(r)<=180?r:r-360*Math.sign(r)),"fixupHueShorter"),Hr=[-.14861,1.78277,-.29227,-.90649,1.97294,0],fO=Math.PI/180,hO=180/Math.PI;let ov=Hr[3]*Hr[4],iv=Hr[1]*Hr[4],sv=Hr[1]*Hr[2]-Hr[0]*Hr[3];const gO=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(sv*t+e*ov-r*iv)/(sv+ov-iv),s=t-o,a=(Hr[4]*(r-o)-Hr[2]*s)/Hr[3],l={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(s*s+a*a)/(Hr[4]*o*(1-o))};return l.s&&(l.h=Math.atan2(a,s)*hO-120),n!==void 0&&(l.alpha=n),l},"convertRgbToCubehelix"),mO=i(({h:e,s:r,l:t,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*fO,t===void 0&&(t=0);let s=r===void 0?0:r*t*(1-t),a=Math.cos(e),l=Math.sin(e);return o.r=t+s*(Hr[0]*a+Hr[1]*l),o.g=t+s*(Hr[2]*a+Hr[3]*l),o.b=t+s*(Hr[4]*a+Hr[5]*l),n!==void 0&&(o.alpha=n),o},"convertCubehelixToRgb"),Ld=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.s||!r.s)return 0;let t=at(e.h),n=at(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*r.s)*o},"differenceHueSaturation"),pO=i((e,r)=>{if(e.h===void 0||r.h===void 0)return 0;let t=at(e.h),n=at(r.h);return Math.abs(n-t)>180?t-(n-360*Math.sign(n-t)):n-t},"differenceHueNaive"),jd=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.c||!r.c)return 0;let t=at(e.h),n=at(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*r.c)*o},"differenceHueChroma"),bO=i((e="rgb",r=[1,1,1,0])=>{let t=Rd(e),n=t.channels,o=t.difference,s=Zi(e);return(a,l)=>{let u=s(a),d=s(l);return Math.sqrt(n.reduce((f,h,g)=>{let m=o[h]?o[h](u,d):u[h]-d[h];return f+(r[g]||0)*Math.pow(isNaN(m)?0:m,2)},0))}},"differenceEuclidean"),No=i(e=>{let r=e.reduce((n,o)=>{if(o!==void 0){let s=o*Math.PI/180;n.sin+=Math.sin(s),n.cos+=Math.cos(s)}return n},{sin:0,cos:0}),t=Math.atan2(r.sin,r.cos)*180/Math.PI;return t<0?360+t:t},"averageAngle"),vO={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:gO},toMode:{rgb:mO},interpolate:{h:{use:V,fixup:To},s:V,l:V,alpha:{use:V,fixup:qr}},difference:{h:Ld},average:{h:No}},ai=i(({l:e,a:r,b:t,alpha:n},o="lch")=>{r===void 0&&(r=0),t===void 0&&(t=0);let s=Math.sqrt(r*r+t*t),a={mode:o,l:e,c:s};return s&&(a.h=at(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(a.alpha=n),a},"convertLabToLch"),li=i(({l:e,c:r,h:t,alpha:n},o="lab")=>{t===void 0&&(t=0);let s={mode:o,l:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(s.alpha=n),s},"convertLchToLab"),vk=Math.pow(29,3)/Math.pow(3,3),yk=Math.pow(6,3)/Math.pow(29,3),Tr={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},Rs={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let Zf=i(e=>Math.pow(e,3)>yk?Math.pow(e,3):(116*e-16)/vk,"fn$1");const wk=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,s=r/500+o,a=o-t/200,l={mode:"xyz65",x:Zf(s)*Rs.X,y:Zf(o)*Rs.Y,z:Zf(a)*Rs.Z};return n!==void 0&&(l.alpha=n),l},"convertLab65ToXyz65"),_d=i(e=>ds(wk(e)),"convertLab65ToRgb"),Yf=i(e=>e>yk?Math.cbrt(e):(vk*e+16)/116,"f$1"),$k=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Yf(e/Rs.X),s=Yf(r/Rs.Y),a=Yf(t/Rs.Z),l={mode:"lab65",l:116*s-16,a:500*(o-s),b:200*(s-a)};return n!==void 0&&(l.alpha=n),l},"convertXyz65ToLab65"),Ud=i(e=>{let r=$k(cs(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab65"),Oc=1,kk=1,Ll=26/180*Math.PI,Bc=Math.cos(Ll),Rc=Math.sin(Ll),xk=100/Math.log(139/100),Eh=i(({l:e,c:r,h:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"lab65",l:(Math.exp(e*Oc/xk)-1)/.0039},s=(Math.exp(.0435*r*kk*Oc)-1)/.075,a=s*Math.cos(t/180*Math.PI-Ll),l=s*Math.sin(t/180*Math.PI-Ll);return o.a=a*Bc-l/.83*Rc,o.b=a*Rc+l/.83*Bc,n!==void 0&&(o.alpha=n),o},"convertDlchToLab65"),Ah=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=r*Bc+t*Rc,s=.83*(t*Bc-r*Rc),a=Math.sqrt(o*o+s*s),l={mode:"dlch",l:xk/Oc*Math.log(1+.0039*e),c:Math.log(1+.075*a)/(.0435*kk*Oc)};return l.c&&(l.h=at((Math.atan2(s,o)+Ll)/Math.PI*180)),n!==void 0&&(l.alpha=n),l},"convertLab65ToDlch"),av=i(e=>Eh(ai(e,"dlch")),"convertDlabToLab65"),lv=i(e=>li(Ah(e),"dlab"),"convertLab65ToDlab"),yO={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:av,rgb:i(e=>_d(av(e)),"rgb")},fromMode:{lab65:lv,rgb:i(e=>lv(Ud(e)),"rgb")},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:qr}}},wO={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:Eh,dlab:i(e=>li(e,"dlab"),"dlab"),rgb:i(e=>_d(Eh(e)),"rgb")},fromMode:{lab65:Ah,dlab:i(e=>ai(e,"dlch"),"dlab"),rgb:i(e=>Ah(Ud(e)),"rgb")},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:V,c:V,h:{use:V,fixup:To},alpha:{use:V,fixup:qr}},difference:{h:jd},average:{h:No}};function $O({h:e,s:r,i:t,alpha:n}){e=at(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:t*(1+r*(3/(2-o)-1)),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1-r)};break;case 1:s={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1+r*(3/(2-o)-1)),b:t*(1-r)};break;case 2:s={r:t*(1-r),g:t*(1+r*(3/(2-o)-1)),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;case 3:s={r:t*(1-r),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1+r*(3/(2-o)-1))};break;case 4:s={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3/(2-o)-1))};break;case 5:s={r:t*(1+r*(3/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;default:s={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}i($O,"convertHsiToRgb");function kO({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),s=Math.min(e,r,t),a={mode:"hsi",s:e+r+t===0?0:1-3*s/(e+r+t),i:(e+r+t)/3};return o-s!==0&&(a.h=(o===e?(r-t)/(o-s)+(r<t)*6:o===r?(t-e)/(o-s)+2:(e-r)/(o-s)+4)*60),n!==void 0&&(a.alpha=n),a}i(kO,"convertRgbToHsi");const xO={mode:"hsi",toMode:{rgb:$O},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:kO},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:To},s:V,i:V,alpha:{use:V,fixup:qr}},difference:{h:Ld},average:{h:No}};function DO({h:e,s:r,l:t,alpha:n}){e=at(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=t+r*(t<.5?t:1-t),s=o-(o-t)*2*Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:o,g:s,b:2*t-o};break;case 1:a={r:s,g:o,b:2*t-o};break;case 2:a={r:2*t-o,g:o,b:s};break;case 3:a={r:2*t-o,g:s,b:o};break;case 4:a={r:s,g:2*t-o,b:o};break;case 5:a={r:o,g:2*t-o,b:s};break;default:a={r:2*t-o,g:2*t-o,b:2*t-o}}return a.mode="rgb",n!==void 0&&(a.alpha=n),a}i(DO,"convertHslToRgb");function CO({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),s=Math.min(e,r,t),a={mode:"hsl",s:o===s?0:(o-s)/(1-Math.abs(o+s-1)),l:.5*(o+s)};return o-s!==0&&(a.h=(o===e?(r-t)/(o-s)+(r<t)*6:o===r?(t-e)/(o-s)+2:(e-r)/(o-s)+4)*60),n!==void 0&&(a.alpha=n),a}i(CO,"convertRgbToHsl");const EO=i((e,r)=>{switch(r){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},"hueToDeg"),AO=new RegExp(`^hsla?\\(\\s*${GI}${ia}${cl}${ia}${cl}\\s*(?:,\\s*${Nm}\\s*)?\\)$`),MO=i(e=>{let r=e.match(AO);if(!r)return;let t={mode:"hsl"};return r[3]!==void 0?t.h=+r[3]:r[1]!==void 0&&r[2]!==void 0&&(t.h=EO(r[1],r[2])),r[4]!==void 0&&(t.s=Math.min(Math.max(0,r[4]/100),1)),r[5]!==void 0&&(t.l=Math.min(Math.max(0,r[5]/100),1)),r[6]!==void 0?t.alpha=Math.max(0,Math.min(1,r[6]/100)):r[7]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[7]))),t},"parseHslLegacy");function FO(e,r){if(!r||r[0]!=="hsl"&&r[0]!=="hsla")return;const t={mode:"hsl"},[,n,o,s,a]=r;if(n.type!==L.None){if(n.type===L.Percentage)return;t.h=n.value}if(o.type!==L.None){if(o.type===L.Hue)return;t.s=o.value/100}if(s.type!==L.None){if(s.type===L.Hue)return;t.l=s.value/100}return a.type!==L.None&&(t.alpha=Math.min(1,Math.max(0,a.type===L.Number?a.value:a.value/100))),t}i(FO,"parseHsl");const Dk={mode:"hsl",toMode:{rgb:DO},fromMode:{rgb:CO},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[FO,MO],serialize:i(e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:To},s:V,l:V,alpha:{use:V,fixup:qr}},difference:{h:Ld},average:{h:No}};function Ck({h:e,s:r,v:t,alpha:n}){e=at(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:t,g:t*(1-r*o),b:t*(1-r)};break;case 1:s={r:t*(1-r*o),g:t,b:t*(1-r)};break;case 2:s={r:t*(1-r),g:t,b:t*(1-r*o)};break;case 3:s={r:t*(1-r),g:t*(1-r*o),b:t};break;case 4:s={r:t*(1-r*o),g:t*(1-r),b:t};break;case 5:s={r:t,g:t*(1-r),b:t*(1-r*o)};break;default:s={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}i(Ck,"convertHsvToRgb");function Ek({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),s=Math.min(e,r,t),a={mode:"hsv",s:o===0?0:1-s/o,v:o};return o-s!==0&&(a.h=(o===e?(r-t)/(o-s)+(r<t)*6:o===r?(t-e)/(o-s)+2:(e-r)/(o-s)+4)*60),n!==void 0&&(a.alpha=n),a}i(Ek,"convertRgbToHsv");const Ak={mode:"hsv",toMode:{rgb:Ck},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:Ek},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:To},s:V,v:V,alpha:{use:V,fixup:qr}},difference:{h:Ld},average:{h:No}};function SO({h:e,w:r,b:t,alpha:n}){if(r===void 0&&(r=0),t===void 0&&(t=0),r+t>1){let o=r+t;r/=o,t/=o}return Ck({h:e,s:t===1?1:1-r/(1-t),v:1-t,alpha:n})}i(SO,"convertHwbToRgb");function TO(e){let r=Ek(e);if(r===void 0)return;let t=r.s!==void 0?r.s:0,n=r.v!==void 0?r.v:0,o={mode:"hwb",w:(1-t)*n,b:1-n};return r.h!==void 0&&(o.h=r.h),r.alpha!==void 0&&(o.alpha=r.alpha),o}i(TO,"convertRgbToHwb");function NO(e,r){if(!r||r[0]!=="hwb")return;const t={mode:"hwb"},[,n,o,s,a]=r;if(n.type!==L.None){if(n.type===L.Percentage)return;t.h=n.value}if(o.type!==L.None){if(o.type===L.Hue)return;t.w=o.value/100}if(s.type!==L.None){if(s.type===L.Hue)return;t.b=s.value/100}return a.type!==L.None&&(t.alpha=Math.min(1,Math.max(0,a.type===L.Number?a.value:a.value/100))),t}i(NO,"ParseHwb");const PO={mode:"hwb",toMode:{rgb:SO},fromMode:{rgb:TO},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[NO],serialize:i(e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:To},w:V,b:V,alpha:{use:V,fixup:qr}},difference:{h:pO},average:{h:No}},Mk=203,zd=.1593017578125,Fk=78.84375,Vd=.8359375,qd=18.8515625,Wd=18.6875;function Jf(e){if(e<0)return 0;const r=Math.pow(e,1/Fk);return 1e4*Math.pow(Math.max(0,r-Vd)/(qd-Wd*r),1/zd)}i(Jf,"transferPqDecode");function Xf(e){if(e<0)return 0;const r=Math.pow(e/1e4,zd);return Math.pow((Vd+qd*r)/(1+Wd*r),Fk)}i(Xf,"transferPqEncode");const Qf=i(e=>Math.max(e/Mk,0),"toRel"),uv=i(({i:e,t:r,p:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=Jf(e+.008609037037932761*r+.11102962500302593*t),s=Jf(e-.00860903703793275*r-.11102962500302599*t),a=Jf(e+.5600313357106791*r-.32062717498731885*t),l={mode:"xyz65",x:Qf(2.070152218389422*o-1.3263473389671556*s+.2066510476294051*a),y:Qf(.3647385209748074*o+.680566024947227*s-.0453045459220346*a),z:Qf(-.049747207535812*o-.0492609666966138*s+1.1880659249923042*a)};return n!==void 0&&(l.alpha=n),l},"convertItpToXyz65"),e0=i((e=0)=>Math.max(e*Mk,0),"toAbs"),cv=i(({x:e,y:r,z:t,alpha:n})=>{const o=e0(e),s=e0(r),a=e0(t),l=Xf(.3592832590121217*o+.6976051147779502*s-.0358915932320289*a),u=Xf(-.1920808463704995*o+1.1004767970374323*s+.0753748658519118*a),d=Xf(.0070797844607477*o+.0748396662186366*s+.8433265453898765*a),f=.5*l+.5*u,h=1.61376953125*l-3.323486328125*u+1.709716796875*d,g=4.378173828125*l-4.24560546875*u-.132568359375*d,m={mode:"itp",i:f,t:h,p:g};return n!==void 0&&(m.alpha=n),m},"convertXyz65ToItp"),IO={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:uv,rgb:i(e=>ds(uv(e)),"rgb")},fromMode:{xyz65:cv,rgb:i(e=>cv(cs(e)),"rgb")},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:V,t:V,p:V,alpha:{use:V,fixup:qr}}},OO=134.03437499999998,BO=16295499532821565e-27,r0=i(e=>{if(e<0)return 0;let r=Math.pow(e/1e4,zd);return Math.pow((Vd+qd*r)/(1+Wd*r),OO)},"jabPqEncode"),t0=i((e=0)=>Math.max(e*203,0),"abs"),Sk=i(({x:e,y:r,z:t,alpha:n})=>{e=t0(e),r=t0(r),t=t0(t);let o=1.15*e-.15*t,s=.66*r+.34*e,a=r0(.41478972*o+.579999*s+.014648*t),l=r0(-.20151*o+1.120649*s+.0531008*t),u=r0(-.0166008*o+.2648*s+.6684799*t),d=(a+l)/2,f={mode:"jab",j:.44*d/(1-.56*d)-BO,a:3.524*a-4.066708*l+.542708*u,b:.199076*a+1.096799*l-1.295875*u};return n!==void 0&&(f.alpha=n),f},"convertXyz65ToJab"),RO=134.03437499999998,dv=16295499532821565e-27,n0=i(e=>{if(e<0)return 0;let r=Math.pow(e,1/RO);return 1e4*Math.pow((Vd-r)/(Wd*r-qd),1/zd)},"jabPqDecode"),o0=i(e=>e/203,"rel"),Tk=i(({j:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+dv)/(.44+.56*(e+dv)),s=n0(o+.13860504*r+.058047316*t),a=n0(o-.13860504*r-.058047316*t),l=n0(o-.096019242*r-.8118919*t),u={mode:"xyz65",x:o0(1.661373024652174*s-.914523081304348*a+.23136208173913045*l),y:o0(-.3250758611844533*s+1.571847026732543*a-.21825383453227928*l),z:o0(-.090982811*s-.31272829*a+1.5227666*l)};return n!==void 0&&(u.alpha=n),u},"convertJabToXyz65"),Nk=i(e=>{let r=Sk(cs(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToJab"),Pk=i(e=>ds(Tk(e)),"convertJabToRgb"),LO={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:Nk,xyz65:Sk},toMode:{rgb:Pk,xyz65:Tk},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:V,a:V,b:V,alpha:{use:V,fixup:qr}}},fv=i(({j:e,a:r,b:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),s={mode:"jch",j:e,c:o};return o&&(s.h=at(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},"convertJabToJch"),hv=i(({j:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"jab",j:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertJchToJab"),jO={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:hv,rgb:i(e=>Pk(hv(e)),"rgb")},fromMode:{rgb:i(e=>fv(Nk(e)),"rgb"),jab:fv},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:V,fixup:To},c:V,j:V,alpha:{use:V,fixup:qr}},difference:{h:jd},average:{h:No}},Kd=Math.pow(29,3)/Math.pow(3,3),Pm=Math.pow(6,3)/Math.pow(29,3);let i0=i(e=>Math.pow(e,3)>Pm?Math.pow(e,3):(116*e-16)/Kd,"fn");const Im=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,s=r/500+o,a=o-t/200,l={mode:"xyz50",x:i0(s)*Tr.X,y:i0(o)*Tr.Y,z:i0(a)*Tr.Z};return n!==void 0&&(l.alpha=n),l},"convertLabToXyz50"),au=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Ea({r:e*3.1341359569958707-r*1.6173863321612538-.4906619460083532*t,g:e*-.978795502912089+r*1.916254567259524+.03344273116131949*t,b:e*.07195537988411677-r*.2289768264158322+1.405386058324125*t});return n!==void 0&&(o.alpha=n),o},"convertXyz50ToRgb"),Ik=i(e=>au(Im(e)),"convertLabToRgb"),lu=i(e=>{let{r,g:t,b:n,alpha:o}=Ca(e),s={mode:"xyz50",x:.436065742824811*r+.3851514688337912*t+.14307845442264197*n,y:.22249319175623702*r+.7168870538238823*t+.06061979053616537*n,z:.013923904500943465*r+.09708128566574634*t+.7140993584005155*n};return o!==void 0&&(s.alpha=o),s},"convertRgbToXyz50"),s0=i(e=>e>Pm?Math.cbrt(e):(Kd*e+16)/116,"f"),Om=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=s0(e/Tr.X),s=s0(r/Tr.Y),a=s0(t/Tr.Z),l={mode:"lab",l:116*s-16,a:500*(o-s),b:200*(s-a)};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLab"),Ok=i(e=>{let r=Om(lu(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab");function _O(e,r){if(!r||r[0]!=="lab")return;const t={mode:"lab"},[,n,o,s,a]=r;if(!(n.type===L.Hue||o.type===L.Hue||s.type===L.Hue))return n.type!==L.None&&(t.l=Math.min(Math.max(0,n.value),100)),o.type!==L.None&&(t.a=o.type===L.Number?o.value:o.value*125/100),s.type!==L.None&&(t.b=s.type===L.Number?s.value:s.value*125/100),a.type!==L.None&&(t.alpha=Math.min(1,Math.max(0,a.type===L.Number?a.value:a.value/100))),t}i(_O,"parseLab");const Bm={mode:"lab",toMode:{xyz50:Im,rgb:Ik},fromMode:{xyz50:Om,rgb:Ok},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[_O],serialize:i(e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:qr}}},UO={...Bm,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:wk,rgb:_d},fromMode:{xyz65:$k,rgb:Ud},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function zO(e,r){if(!r||r[0]!=="lch")return;const t={mode:"lch"},[,n,o,s,a]=r;if(n.type!==L.None){if(n.type===L.Hue)return;t.l=Math.min(Math.max(0,n.value),100)}if(o.type!==L.None&&(t.c=Math.max(0,o.type===L.Number?o.value:o.value*150/100)),s.type!==L.None){if(s.type===L.Percentage)return;t.h=s.value}return a.type!==L.None&&(t.alpha=Math.min(1,Math.max(0,a.type===L.Number?a.value:a.value/100))),t}i(zO,"parseLch");const Rm={mode:"lch",toMode:{lab:li,rgb:i(e=>Ik(li(e)),"rgb")},fromMode:{rgb:i(e=>ai(Ok(e)),"rgb"),lab:ai},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[zO],serialize:i(e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:To},c:V,l:V,alpha:{use:V,fixup:qr}},difference:{h:jd},average:{h:No}},VO={...Rm,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:i(e=>li(e,"lab65"),"lab65"),rgb:i(e=>_d(li(e,"lab65")),"rgb")},fromMode:{rgb:i(e=>ai(Ud(e),"lch65"),"rgb"),lab65:i(e=>ai(e,"lch65"),"lab65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},Bk=i(({l:e,u:r,v:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),s={mode:"lchuv",l:e,c:o};return o&&(s.h=at(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},"convertLuvToLchuv"),Rk=i(({l:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"luv",l:e,u:r?r*Math.cos(t/180*Math.PI):0,v:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertLchuvToLuv"),Lk=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn$1"),jk=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn$1"),qO=Lk(Tr.X,Tr.Y,Tr.Z),WO=jk(Tr.X,Tr.Y,Tr.Z),KO=i(e=>e<=Pm?Kd*e:116*Math.cbrt(e)-16,"l_fn"),Mh=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=KO(r/Tr.Y),s=Lk(e,r,t),a=jk(e,r,t);!isFinite(s)||!isFinite(a)?o=s=a=0:(s=13*o*(s-qO),a=13*o*(a-WO));let l={mode:"luv",l:o,u:s,v:a};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLuv"),GO=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn"),HO=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn"),ZO=GO(Tr.X,Tr.Y,Tr.Z),YO=HO(Tr.X,Tr.Y,Tr.Z),Fh=i(({l:e,u:r,v:t,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};r===void 0&&(r=0),t===void 0&&(t=0);let o=r/(13*e)+ZO,s=t/(13*e)+YO,a=Tr.Y*(e<=8?e/Kd:Math.pow((e+16)/116,3)),l=a*(9*o)/(4*s),u=a*(12-3*o-20*s)/(4*s),d={mode:"xyz50",x:l,y:a,z:u};return n!==void 0&&(d.alpha=n),d},"convertLuvToXyz50"),JO=i(e=>Bk(Mh(lu(e))),"convertRgbToLchuv"),XO=i(e=>au(Fh(Rk(e))),"convertLchuvToRgb"),QO={mode:"lchuv",toMode:{luv:Rk,rgb:XO},fromMode:{rgb:JO,luv:Bk},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:V,fixup:To},c:V,l:V,alpha:{use:V,fixup:qr}},difference:{h:jd},average:{h:No}},eB={...Da,mode:"lrgb",toMode:{rgb:Ea},fromMode:{rgb:Ca},parse:["srgb-linear"],serialize:"srgb-linear"},rB={mode:"luv",toMode:{xyz50:Fh,rgb:i(e=>au(Fh(e)),"rgb")},fromMode:{xyz50:Mh,rgb:i(e=>Mh(lu(e)),"rgb")},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:V,u:V,v:V,alpha:{use:V,fixup:qr}}},_k=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*r+.0514459932675022*t),s=Math.cbrt(.2119034958178252*e+.6806995506452344*r+.1073969535369406*t),a=Math.cbrt(.0883024591900564*e+.2817188391361215*r+.6299787016738222*t),l={mode:"oklab",l:.210454268309314*o+.7936177747023054*s-.0040720430116193*a,a:1.9779985324311684*o-2.42859224204858*s+.450593709617411*a,b:.0259040424655478*o+.7827717124575296*s-.8086757549230774*a};return n!==void 0&&(l.alpha=n),l},"convertLrgbToOklab"),Gd=i(e=>{let r=_k(Ca(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToOklab"),uu=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.pow(e+.3963377773761749*r+.2158037573099136*t,3),s=Math.pow(e-.1055613458156586*r-.0638541728258133*t,3),a=Math.pow(e-.0894841775298119*r-1.2914855480194092*t,3),l={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*s+.2309699031821044*a,g:-1.2684379732850317*o+2.6097573492876887*s-.3413193760026573*a,b:-.0041960761386756*o-.7034186179359362*s+1.7076146940746117*a};return n!==void 0&&(l.alpha=n),l},"convertOklabToLrgb"),Hd=i(e=>Ea(uu(e)),"convertOklabToRgb");function Sh(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}i(Sh,"toe");function Lc(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}i(Lc,"toe_inv");function tB(e,r){let t,n,o,s,a,l,u,d;-1.88170328*e-.80936493*r>1?(t=1.19086277,n=1.76576728,o=.59662641,s=.75515197,a=.56771245,l=4.0767416621,u=-3.3077115913,d=.2309699292):1.81444104*e-1.19445276*r>1?(t=.73956515,n=-.45954404,o=.08285427,s=.1254107,a=.14503204,l=-1.2684380046,u=2.6097574011,d=-.3413193965):(t=1.35733652,n=-.00915799,o=-1.1513021,s=-.50559606,a=.00692167,l=-.0041960863,u=-.7034186147,d=1.707614701);let f=t+n*e+o*r+s*e*e+a*e*r,h=.3963377774*e+.2158037573*r,g=-.1055613458*e-.0638541728*r,m=-.0894841775*e-1.291485548*r;{let y=1+f*h,k=1+f*g,x=1+f*m,C=y*y*y,E=k*k*k,I=x*x*x,j=3*h*y*y,K=3*g*k*k,ae=3*m*x*x,Te=6*h*h*y,me=6*g*g*k,Me=6*m*m*x,Xe=l*C+u*E+d*I,Qe=l*j+u*K+d*ae,Or=l*Te+u*me+d*Me;f=f-Xe*Qe/(Qe*Qe-.5*Xe*Or)}return f}i(tB,"compute_max_saturation");function Lm(e,r){let t=tB(e,r),n=uu({l:1,a:t*e,b:t*r}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),s=o*t;return[o,s]}i(Lm,"find_cusp");function nB(e,r,t,n,o,s=null){s||(s=Lm(e,r));let a;if((t-o)*s[1]-(s[0]-o)*n<=0)a=s[1]*o/(n*s[0]+s[1]*(o-t));else{a=s[1]*(o-1)/(n*(s[0]-1)+s[1]*(o-t));{let l=t-o,u=n,d=.3963377774*e+.2158037573*r,f=-.1055613458*e-.0638541728*r,h=-.0894841775*e-1.291485548*r,g=l+u*d,m=l+u*f,y=l+u*h;{let k=o*(1-a)+a*t,x=a*n,C=k+x*d,E=k+x*f,I=k+x*h,j=C*C*C,K=E*E*E,ae=I*I*I,Te=3*g*C*C,me=3*m*E*E,Me=3*y*I*I,Xe=6*g*g*C,Qe=6*m*m*E,Or=6*y*y*I,_t=4.0767416621*j-3.3077115913*K+.2309699292*ae-1,wt=4.0767416621*Te-3.3077115913*me+.2309699292*Me,io=4.0767416621*Xe-3.3077115913*Qe+.2309699292*Or,Wr=wt/(wt*wt-.5*_t*io),qn=-_t*Wr,so=-1.2684380046*j+2.6097574011*K-.3413193965*ae-1,an=-1.2684380046*Te+2.6097574011*me-.3413193965*Me,et=-1.2684380046*Xe+2.6097574011*Qe-.3413193965*Or,qe=an/(an*an-.5*so*et),Br=-so*qe,ln=-.0041960863*j-.7034186147*K+1.707614701*ae-1,dt=-.0041960863*Te-.7034186147*me+1.707614701*Me,un=-.0041960863*Xe-.7034186147*Qe+1.707614701*Or,xn=dt/(dt*dt-.5*ln*un),Po=-ln*xn;qn=Wr>=0?qn:1e6,Br=qe>=0?Br:1e6,Po=xn>=0?Po:1e6,a+=Math.min(qn,Math.min(Br,Po))}}}return a}i(nB,"find_gamut_intersection");function jm(e,r,t=null){t||(t=Lm(e,r));let n=t[0],o=t[1];return[o/n,o/(1-n)]}i(jm,"get_ST_max");function Uk(e,r,t){let n=Lm(r,t),o=nB(r,t,e,1,e,n),s=jm(r,t,n),a=.11516993+1/(7.4477897+4.1590124*t+r*(-2.19557347+1.75198401*t+r*(-2.13704948-10.02301043*t+r*(-4.24894561+5.38770819*t+4.69891013*r)))),l=.11239642+1/(1.6132032-.68124379*t+r*(.40370612+.90148123*t+r*(-.27087943+.6122399*t+r*(.00299215-.45399568*t-.14661872*r)))),u=o/Math.min(e*s[0],(1-e)*s[1]),d=e*a,f=(1-e)*l,h=.9*u*Math.sqrt(Math.sqrt(1/(1/(d*d*d*d)+1/(f*f*f*f))));return d=e*.4,f=(1-e)*.8,[Math.sqrt(1/(1/(d*d)+1/(f*f))),h,o]}i(Uk,"get_Cs");function gv(e){const r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:Sh(r)};e.alpha!==void 0&&(o.alpha=e.alpha);let s=Math.sqrt(t*t+n*n);if(!s)return o.s=0,o;let[a,l,u]=Uk(r,t/s,n/s),d;if(s<l){let f=0,h=.8*a,g=1-h/l;d=(s-f)/(h+g*(s-f))*.8}else{let f=l,h=.2*l*l*1.25*1.25/a,g=1-h/(u-l);d=.8+.2*((s-f)/(h+g*(s-f)))}return d&&(o.s=d,o.h=at(Math.atan2(n,t)*180/Math.PI)),o}i(gv,"convertOklabToOkhsl");function mv(e){let r=e.h!==void 0?e.h:0,t=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:Lc(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!t||n===1)return o.a=o.b=0,o;let s=Math.cos(r/180*Math.PI),a=Math.sin(r/180*Math.PI),[l,u,d]=Uk(o.l,s,a),f,h,g,m;t<.8?(f=1.25*t,h=0,g=.8*l,m=1-g/u):(f=5*(t-.8),h=u,g=.2*u*u*1.25*1.25/l,m=1-g/(d-u));let y=h+f*g/(1-m*f);return o.a=y*s,o.b=y*a,o}i(mv,"convertOkhslToOklab");const oB={...Dk,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:gv,rgb:i(e=>gv(Gd(e)),"rgb")},toMode:{oklab:mv,rgb:i(e=>Hd(mv(e)),"rgb")}};function pv(e){let r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(t*t+n*n),s=o?t/o:1,a=o?n/o:1,[l,u]=jm(s,a),d=.5,f=1-d/l,h=u/(o+r*u),g=h*r,m=h*o,y=Lc(g),k=m*y/g,x=uu({l:y,a:s*k,b:a*k}),C=Math.cbrt(1/Math.max(x.r,x.g,x.b,0));r=r/C,o=o/C*Sh(r)/r,r=Sh(r);const E={mode:"okhsv",s:o?(d+u)*m/(u*d+u*f*m):0,v:r?r/g:0};return E.s&&(E.h=at(Math.atan2(n,t)*180/Math.PI)),e.alpha!==void 0&&(E.alpha=e.alpha),E}i(pv,"convertOklabToOkhsv");function bv(e){const r={mode:"oklab"};e.alpha!==void 0&&(r.alpha=e.alpha);const t=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,s=Math.cos(t/180*Math.PI),a=Math.sin(t/180*Math.PI),[l,u]=jm(s,a),d=.5,f=1-d/l,h=1-n*d/(d+u-u*f*n),g=n*u*d/(d+u-u*f*n),m=Lc(h),y=g*m/h,k=uu({l:m,a:s*y,b:a*y}),x=Math.cbrt(1/Math.max(k.r,k.g,k.b,0)),C=Lc(o*h),E=g*C/h;return r.l=C*x,r.a=E*s*x,r.b=E*a*x,r}i(bv,"convertOkhsvToOklab");const iB={...Ak,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:pv,rgb:i(e=>pv(Gd(e)),"rgb")},toMode:{oklab:bv,rgb:i(e=>Hd(bv(e)),"rgb")}};function sB(e,r){if(!r||r[0]!=="oklab")return;const t={mode:"oklab"},[,n,o,s,a]=r;if(!(n.type===L.Hue||o.type===L.Hue||s.type===L.Hue))return n.type!==L.None&&(t.l=Math.min(Math.max(0,n.type===L.Number?n.value:n.value/100),1)),o.type!==L.None&&(t.a=o.type===L.Number?o.value:o.value*.4/100),s.type!==L.None&&(t.b=s.type===L.Number?s.value:s.value*.4/100),a.type!==L.None&&(t.alpha=Math.min(1,Math.max(0,a.type===L.Number?a.value:a.value/100))),t}i(sB,"parseOklab");const aB={...Bm,mode:"oklab",toMode:{lrgb:uu,rgb:Hd},fromMode:{lrgb:_k,rgb:Gd},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[sB],serialize:i(e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize")};function lB(e,r){if(!r||r[0]!=="oklch")return;const t={mode:"oklch"},[,n,o,s,a]=r;if(n.type!==L.None){if(n.type===L.Hue)return;t.l=Math.min(Math.max(0,n.type===L.Number?n.value:n.value/100),1)}if(o.type!==L.None&&(t.c=Math.max(0,o.type===L.Number?o.value:o.value*.4/100)),s.type!==L.None){if(s.type===L.Percentage)return;t.h=s.value}return a.type!==L.None&&(t.alpha=Math.min(1,Math.max(0,a.type===L.Number?a.value:a.value/100))),t}i(lB,"parseOklch");const uB={...Rm,mode:"oklch",toMode:{oklab:i(e=>li(e,"oklab"),"oklab"),rgb:i(e=>Hd(li(e,"oklab")),"rgb")},fromMode:{rgb:i(e=>ai(Gd(e),"oklch"),"rgb"),oklab:i(e=>ai(e,"oklch"),"oklab")},parse:[lB],serialize:i(e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),ranges:{l:[0,1],c:[0,.4],h:[0,360]}},vv=i(e=>{let{r,g:t,b:n,alpha:o}=Ca(e),s={mode:"xyz65",x:.486570948648216*r+.265667693169093*t+.1982172852343625*n,y:.2289745640697487*r+.6917385218365062*t+.079286914093745*n,z:0*r+.0451133818589026*t+1.043944368900976*n};return o!==void 0&&(s.alpha=o),s},"convertP3ToXyz65"),yv=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Ea({r:e*2.4934969119414263-r*.9313836179191242-.402710784450717*t,g:e*-.8294889695615749+r*1.7626640603183465+.0236246858419436*t,b:e*.0358458302437845-r*.0761723892680418+.9568845240076871*t},"p3");return n!==void 0&&(o.alpha=n),o},"convertXyz65ToP3"),cB={...Da,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:i(e=>yv(cs(e)),"rgb"),xyz65:yv},toMode:{rgb:i(e=>ds(vv(e)),"rgb"),xyz65:vv}},a0=i(e=>{let r=Math.abs(e);return r>=1/512?Math.sign(e)*Math.pow(r,1/1.8):16*e},"gamma$1"),wv=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"prophoto",r:a0(e*1.3457868816471585-r*.2555720873797946-.0511018649755453*t),g:a0(e*-.5446307051249019+r*1.5082477428451466+.0205274474364214*t),b:a0(e*0+r*0+1.2119675456389452*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz50ToProphoto"),l0=i((e=0)=>{let r=Math.abs(e);return r>=16/512?Math.sign(e)*Math.pow(r,1.8):e/16},"linearize$1"),$v=i(e=>{let r=l0(e.r),t=l0(e.g),n=l0(e.b),o={mode:"xyz50",x:.7977666449006423*r+.1351812974005331*t+.0313477341283922*n,y:.2880748288194013*r+.7118352342418731*t+899369387256e-16*n,z:0*r+0*t+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertProphotoToXyz50"),dB={...Da,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:wv,rgb:i(e=>wv(lu(e)),"rgb")},toMode:{xyz50:$v,rgb:i(e=>au($v(e)),"rgb")}},kv=1.09929682680944,fB=.018053968510807,u0=i(e=>{const r=Math.abs(e);return r>fB?(Math.sign(e)||1)*(kv*Math.pow(r,.45)-(kv-1)):4.5*e},"gamma"),xv=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"rec2020",r:u0(e*1.7166511879712683-r*.3556707837763925-.2533662813736599*t),g:u0(e*-.6666843518324893+r*1.6164812366349395+.0157685458139111*t),b:u0(e*.0176398574453108-r*.0427706132578085+.9421031212354739*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRec2020"),Dv=1.09929682680944,hB=.018053968510807,c0=i((e=0)=>{let r=Math.abs(e);return r<hB*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((r+Dv-1)/Dv,1/.45)},"linearize"),Cv=i(e=>{let r=c0(e.r),t=c0(e.g),n=c0(e.b),o={mode:"xyz65",x:.6369580483012911*r+.1446169035862083*t+.1688809751641721*n,y:.262700212011267*r+.6779980715188708*t+.059301716469862*n,z:0*r+.0280726930490874*t+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertRec2020ToXyz65"),gB={...Da,mode:"rec2020",fromMode:{xyz65:xv,rgb:i(e=>xv(cs(e)),"rgb")},toMode:{xyz65:Cv,rgb:i(e=>ds(Cv(e)),"rgb")},parse:["rec2020"],serialize:"rec2020"},_i=.0037930732552754493,zk=Math.cbrt(_i),d0=i(e=>Math.cbrt(e)-zk,"transfer$1"),mB=i(e=>{const{r,g:t,b:n,alpha:o}=Ca(e),s=d0(.3*r+.622*t+.078*n+_i),a=d0(.23*r+.692*t+.078*n+_i),l=d0(.2434226892454782*r+.2047674442449682*t+.5518098665095535*n+_i),u={mode:"xyb",x:(s-a)/2,y:(s+a)/2,b:l-(s+a)/2};return o!==void 0&&(u.alpha=o),u},"convertRgbToXyb"),f0=i(e=>Math.pow(e+zk,3),"transfer"),pB=i(({x:e,y:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=f0(e+r)-_i,s=f0(r-e)-_i,a=f0(t+r)-_i,l=Ea({r:11.031566904639861*o-9.866943908131562*s-.16462299650829934*a,g:-3.2541473810744237*o+4.418770377582723*s-.16462299650829934*a,b:-3.6588512867136815*o+2.7129230459360922*s+1.9459282407775895*a});return n!==void 0&&(l.alpha=n),l},"convertXybToRgb"),bB={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:pB},fromMode:{rgb:mB},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:V,y:V,b:V,alpha:{use:V,fixup:qr}}},vB={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:au,lab:Om},fromMode:{rgb:lu,lab:Im},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:qr}}},yB=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let s={mode:"xyz50",x:1.0479298208405488*r+.0229467933410191*t-.0501922295431356*n,y:.0296278156881593*r+.990434484573249*t-.0170738250293851*n,z:-.0092430581525912*r+.0150551448965779*t+.7518742899580008*n};return o!==void 0&&(s.alpha=o),s},"convertXyz65ToXyz50"),wB=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let s={mode:"xyz65",x:.9554734527042182*r-.0230985368742614*t+.0632593086610217*n,y:-.0283697069632081*r+1.0099954580058226*t+.021041398966943*n,z:.0123140016883199*r-.0205076964334779*t+1.3303659366080753*n};return o!==void 0&&(s.alpha=o),s},"convertXyz50ToXyz65"),$B={mode:"xyz65",toMode:{rgb:ds,xyz50:yB},fromMode:{rgb:cs,xyz50:wB},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:qr}}},kB=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"yiq",y:.29889531*e+.58662247*r+.11448223*t,i:.59597799*e-.2741761*r-.32180189*t,q:.21147017*e-.52261711*r+.31114694*t};return n!==void 0&&(o.alpha=n),o},"convertRgbToYiq"),xB=i(({y:e,i:r,q:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"rgb",r:e+.95608445*r+.6208885*t,g:e-.27137664*r-.6486059*t,b:e-1.10561724*r+1.70250126*t};return n!==void 0&&(o.alpha=n),o},"convertYiqToRgb"),DB={mode:"yiq",toMode:{rgb:xB},fromMode:{rgb:kB},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:V,i:V,q:V,alpha:{use:V,fixup:qr}}},CB=i(e=>Math.max(0,Math.min(1,e||0)),"clamp"),h0=i(e=>Math.round(CB(e)*255),"fixup"),EB=Zi("rgb"),AB=i(e=>{if(e===void 0)return;let r=h0(e.r),t=h0(e.g),n=h0(e.b);return"#"+(1<<24|r<<16|t<<8|n).toString(16).slice(1)},"serializeHex"),MB=i(e=>AB(EB(e)),"formatHex"),FB=i(e=>{const r={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(r.alpha=e.alpha),r},"fixup_rgb"),SB=i(e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1),"inrange_rgb");function TB(e="rgb"){const{gamut:r}=Rd(e);if(!r)return n=>!0;const t=Zi(typeof r=="string"?r:e);return n=>SB(t(n))}i(TB,"inGamut");function NB(e="rgb"){const{gamut:r}=Rd(e);if(!r)return s=>kh(s);const t=typeof r=="string"?r:e,n=Zi(t),o=TB(t);return s=>{const a=kh(s);if(!a)return;const l=n(a);if(o(l))return a;const u=FB(l);return a.mode===u.mode?u:Zi(a.mode)(u)}}i(NB,"clampGamut");Le(cO);Le(vO);Le(yO);Le(wO);Le(xO);Le(Dk);Le(Ak);Le(PO);Le(IO);Le(LO);Le(jO);Le(Bm);Le(UO);Le(Rm);Le(VO);Le(QO);Le(eB);Le(rB);Le(oB);Le(iB);Le(aB);Le(uB);Le(cB);Le(dB);Le(gB);Le(Da);Le(bB);Le(vB);Le($B);Le(DB);const PB=bO("rgb");class Do{static{i(this,"Color")}constructor(r){this.set(r)}static isValidColorString(r){try{return new Do(r),!0}catch{return!1}}static isColor(r){return r instanceof Do}static deserialize(r){const t=JSON.parse(r),n=new Do("black");return Pn(t).forEach(([o,s])=>{o==="originalColorSyntax"?n.originalColorSyntax=vr.isEnumValue(s,be,"Cannot deserialize: invalid color syntax."):n._allColors[o]=s}),n}getRgbDistance(r){return PB(this.#e,r)}getClosestNamedColor(){return ze(Rl).reduce((r,t)=>{const n=this.getRgbDistance(t);return n<r.distance?{distance:n,name:t}:r},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=be.hex;#e=vr.isDefined(Ch("black"));_allColors={names:["black"],[be.name]:"black",hexString:"#000000",[be.hex]:{r:0,g:0,b:0},[be.rgb]:{r:0,g:0,b:0},[be.hsl]:{h:0,s:0,l:0},[be.hwb]:{h:0,w:0,b:0},[be.lab]:{l:0,a:0,b:0},[be.lch]:{l:0,c:0,h:0},[be.oklab]:{l:0,a:0,b:0},[be.oklch]:{l:0,c:0,h:0}};clone(){return Do.deserialize(this.serialize())}setByString(r){const t=Ch(r);if(!t)throw new Error(`Unable to parse invalid color string: '${r}'`);this.originalColorSyntax=_I(r),this.#e=t,this.pullFromInternalColor()}set(r){if(F.isString(r))return this.setByString(r);if(_r.isLengthExactly(Object.keys(r),1,`Cannot set multiple color formats at once: got '${W6(Object.keys(r))}'`),r.hexString||r.name)this.setByString(r.hexString||r.name);else{const[t,n]=vr.isDefined(Pn(r)[0]),o=Zn[t],s=Object.values(ar(o.coords,a=>{const l=n[a],u=o.coords[vr.isKeyOf(a,o.coords)],d=l!=null&&l>=u.min&&l<=u.max?n[a]:this[t][a];return vr.isDefined(d)}));this.setByString(`${o.conversionFormat}(${s.join(" ")})`)}}pullFromInternalColor(){Wt(si).forEach(r=>{const t=Zn[r],n=t.conversionFormat,o=F.isKeyOf(this.#e.mode,Zn)?Zn[this.#e.mode]:void 0,s=NB(t.colorSpace===o?.colorSpace?n:"rgb")(Zi(n)(this.#e));s||_r.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${r}'.`),ze(this[r]).forEach(a=>{const l=s[a],u=t.coords[vr.isKeyOf(a,t.coords)];l!=null&&(this._allColors[r][a]=R2((l||0)*(u.factor||1),{digits:u.digits||0}))})}),this._allColors.hexString=MB(this.#e),this._allColors.names=IB(this.rgb),this._allColors[be.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return An(this._allColors)}toFormattedStrings(){return{...ar(Zn,t=>Object.values(this[t]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(rv," "),[be.name]:(this.names[0]||"").padEnd(rv," "),[be.hexString]:this[be.hexString]}}toCss(){return{...ar(Zn,t=>{const n=Object.values(this[t]);return`${t}(${n.join(" ")})`}),[be.hexString]:this[be.hexString],[be.name]:this.names[0]||""}}get names(){return An(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[be.hexString]}get hex(){return An(this._allColors[be.hex])}get rgb(){return An(this._allColors[be.rgb])}get hsl(){return An(this._allColors[be.hsl])}get hwb(){return An(this._allColors[be.hwb])}get lab(){return An(this._allColors[be.lab])}get lch(){return An(this._allColors[be.lch])}get oklab(){return An(this._allColors[be.oklab])}get oklch(){return An(this._allColors[be.oklch])}}function IB(e){return yn(Pn(Rl),([r])=>r,(r,[,t])=>F.deepEquals(t,[e.r,e.g,e.b]))}i(IB,"findMatchingColorNames");function qt(e){return D`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}i(qt,"colorCss");const g0=Vn()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:i(({cssVars:e})=>D`
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

        ${Se} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,"styles"),events:{valueChange:nr()},render({inputs:e,events:r,dispatch:t,cssVars:n}){const o=Zn[e.colorFormatName],s=o.coords[e.colorCoordinateName];if(!s)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const a=10,l=w6(a,h=>{const g=s.min+(s.max-s.min)*(h/a);return new Do({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:g}}).toCss()[o.conversionFormat]}),u=D`linear-gradient(to right, ${Ae(l.join(","))})`,d=vr.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),f=s.radix?Math.round(d).toString(s.radix).toUpperCase().padStart(s.radixPad||0,"0"):String(d);return p`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${D`
                    ${n["vir-color-slider-gradient"].name}: ${u};
                `}
                step=${Math.pow(10,s.digits?-s.digits:0)}
                ${iP(h=>{_r.instanceOf(h,HTMLInputElement),h.min=String(s.min),h.max=String(s.max),h.value=String(d)})}
                ${U("input",h=>{const g=Sd(h,HTMLInputElement),m=Number(g.value);isNaN(m)||t(new r.valueChange(m))})}
            />
            <${Se.assign({value:f})}
                ${U(Se.events.valueChange,h=>{const g=s.radix?parseInt(h.detail,s.radix):Number(h.detail);isNaN(g)||t(new r.valueChange(g))})}
            ></${Se}>
        `}}),m0=Vn()({tagName:"vir-color-format-sliders",styles:D`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${iu};
        }
    `,events:{colorChange:nr()},render({inputs:e,dispatch:r,events:t}){const n=Zn[e.colorFormatName],o=ze(n.coords).map(s=>p`
                    <${g0.assign({color:e.color,colorCoordinateName:s,colorFormatName:e.colorFormatName})}
                        ${U(g0.events.valueChange,a=>{const l=e.color.clone();l.set({[e.colorFormatName]:{[s]:a.detail}});const u=l.toCss()[n.conversionFormat];r(new t.colorChange(u))})}
                    ></${g0}>
                `);return p`
            ${e.showFormatName?p`
                      <h3>${e.colorFormatName}</h3>
                  `:ee}
            ${o}
        `}}),p0=Vn()({tagName:"vir-color-swatch",styles:D`
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
    `,render({inputs:e}){const r=e.backgroundColor||e.foregroundColor,t=e.foregroundColor||"transparent";return p`
            <div
                style=${D`
                    background-color: ${Ae(r)};
                    color: ${Ae(t)};
                `}
            >
                <slot></slot>
            </div>
        `}}),b0=Vn()({tagName:"vir-contrast-indicator",styles:D`
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

        .${Ae(ue.Invisible)} {
            color: red;
        }
        .${Ae(ue.Decoration)} {
            color: #ff6600;
        }
        .${Ae(ue.Placeholder)} {
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
    `,render({inputs:e}){const r=Id.toReversed().slice(1).map(o=>p`
                    <div
                        class="gauge-level ${Et({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),t=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return p`
            <div title=${t} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${r}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${QP[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),Ev=Vn()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":i(({inputs:e,state:r})=>!e.showContrast&&!r.forceShowEverything,"vir-color-pair-no-contrast-tips")},styles:i(({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Fr};
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
            ${iu};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${b0} {
            margin-top: 1px;
        }
    `,"styles"),render({state:e,updateState:r,inputs:t}){const n=["foreground","background"].map(l=>{const u=[t.color[l].name,t.showVarValues||e.forceShowEverything?":":""].filter(F.isTruthy).join(""),d=t.showVarValues||e.forceShowEverything?p`
                          <span>${t.color[l].default}</span>
                      `:ee;return p`
                <p>
                    <span>${u}</span>
                    ${d}
                </p>
            `}),o=t.showVarNames||e.forceShowEverything?p`
                      <div class="css-var-names">${n}</div>
                  `:ee,s=e.previewElement?YP({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,a=s&&(t.showContrast||e.forceShowEverything)?p`
                      <${b0.assign({contrast:s,fontWeight:t.fontWeight})}></${b0}>
                  `:ee;return p`
            <button
                ${U("click",()=>{r({forceShowEverything:!e.forceShowEverything})})}
                ${Hi(l=>{r({previewElement:vr.instanceOf(l,HTMLElement)})})}
                class="color-preview"
                style=${D`
                    color: ${Ae(t.color.foreground.default)};
                    background: ${Ae(t.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${D`
                                visibility: ${Ae((s?.fontSizes[400]||1/0)>150?"hidden":"visible")};
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
        `}});class OB{static{i(this,"LocalStorageClient")}shapes;options;constructor(r,t={}){this.shapes=r,this.options=t,this.storeName=t.storeName||"local-storage-client",this.get=ar(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.set=ar(this.shapes,n=>o=>{Ec(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const s=this.getAllValues();return s[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(s)),o}),this.delete=ar(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o))})}storeName;getAllValues({throwErrorOnFailure:r=!1}={}){return S2(()=>{const t=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return T2(t,(n,o)=>{const s=this.shapes[n];if(s){if(r)Ec(o,s,{allowExtraKeys:!0});else if(!Wo(o,s,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:i(t=>{if(r)throw Ji(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}},"handleError")})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const v0=new OB({lastFormat:Ki(si)}),BB=zs(si).map(e=>({value:e,label:e.toUpperCase()})),ja=Vn()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:Ws.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:Ws.Length}},state(){return{selectedFormatName:v0.get.lastFormat()||si.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":i(({inputs:e})=>!!e.alwaysShowPicker,"vir-color-picker-always-show")},styles:i(({cssVars:e,hostClasses:r})=>D`
        :host {
            display: inline-flex;
        }

        ${r["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${Fr}
            cursor: pointer;
            display: flex;
        }

        ${le} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${p0} {
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

            & ${P} {
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
            ${Tl.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${B["vira-form-border-color"].name}: #ddd;
            color: #666;

            & ${Se} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,"styles"),events:{colorChange:nr()},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const s=Do.isColor(e.color)?e.color:new Do(e.color||"black"),a=Zn[n.selectedFormatName],l=n.rawInput??s.toCss()[a.rawSyntax],u=p`
            <div class="raw-input-wrapper">
                <${Se.assign({value:l})}
                    ${U(Se.events.valueChange,g=>{const m=g.detail;o({rawInput:m}),Do.isValidColorString(m)&&r(new t.colorChange(m))})}
                ></${Se}>
                <button
                    class="code-button"
                    ${U("click",async()=>{await globalThis.navigator.clipboard.writeText(l)})}
                >
                    <${P.assign({icon:Tc,fitContainer:!0})}></${P}>
                </button>
            </div>
        `,d=p`
            <button
                class="code-button"
                ${U("click",async()=>{await globalThis.navigator.clipboard.writeText(s.hexString)})}
            >
                <span>${s.hexString}</span>
                <${P.assign({icon:Tc,fitContainer:!0})}></${P}>
            </button>
        `,f=p`
            <div class="swatch-wrapper">
                <${p0.assign({backgroundColor:s})}></${p0}>
                ${e.showHexValue?d:ee}
            </div>
        `,h=p`
            <div class="picker">
                <${Ve.assign({options:BB,value:n.selectedFormatName})}
                    ${U(Ve.events.valueChange,g=>{const m=Gh.isEnumValue(g.detail,si);m&&(o({selectedFormatName:m}),v0.set.lastFormat(m))})}
                ></${Ve}>
                ${u}
                <${m0.assign({color:s,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${U(m0.events.colorChange,g=>{r(new t.colorChange(g.detail)),o({rawInput:void 0})})}
                ></${m0}>
            </div>
        `;return e.alwaysShowPicker?p`
                ${f} ${h}
            `:p`
                <${le.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${le.slotNames.trigger}
                        ${U("mousedown",()=>{const g=v0.get.lastFormat();g&&o({selectedFormatName:g})})}
                    >
                        ${f}
                    </button>
                    <div class="pop-up" slot=${le.slotNames.popUp}>
                        ${h}
                    </div>
                </${le}>
            `}});function RB(e){if(!F.hasKey(W1,e))throw new Error(`No ViraTag color for variant '${e}'`);const r=W1[e];return D`
        :host(
                .vira-tag-color-${Ae(e)}.vira-tag-emphasis-${Ae(He.Standard)}
            )
            button {
            ${qt(ft[r]["behind-bg"][ue.NonBodyText])}
            border-color: ${ft[r]["behind-bg"][ue.NonBodyText].background.value};

            &:hover {
                ${qt(ft[r]["behind-bg"][ue.Header])}
                border-color: ${ft[r]["behind-bg"][ue.Header].background.value};
            }
            &:active {
                ${qt(ft[r]["behind-bg"][ue.NonBodyText])}
                border-color: ${ft[r]["behind-bg"][ue.NonBodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${Ae(e)}.vira-tag-emphasis-${Ae(He.Subtle)}
            )
            button {
            ${qt(ft[r]["on-self"][ue.BodyText])}
            border-color: ${ft[r]["on-self"][ue.BodyText].background.value};

            &:hover {
                ${qt(ft[r]["on-self"][ue.NonBodyText])}
                border-color: ${ft[r]["on-self"][ue.NonBodyText].background.value};
            }
            &:active {
                ${qt(ft[r]["on-self"][ue.BodyText])}
                border-color: ${ft[r]["on-self"][ue.BodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${Ae(e)}.vira-tag-not-checked.vira-tag-not-checked.vira-tag-not-checked
            )
            button {
            color: ${ft[r]["on-self"][ue.BodyText].foreground.value};
            background-color: transparent;
            border-color: ${ft[r]["on-self"][ue.BodyText].background.value};

            &:hover {
                background-color: ${ft[r]["behind-bg"][ue.Invisible].background.value};
            }
            &:active {
                background-color: ${ft[r]["behind-bg"][ue.Decoration].background.value};
            }
        }
    `}i(RB,"generateThemeCss");function LB(){return Ae([je.Accent,je.Danger,je.Neutral,je.Positive,je.Warning].map(e=>RB(e)).join(" "))}i(LB,"generateAutomaticViraTagThemeVariants");const _a=or()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"white","vira-tag-background-color":"black","vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:nr(),cancel:nr()},hostClasses:{"vira-tag-selectable":i(({inputs:e})=>F.isBoolean(e.isClickable?.selected),"vira-tag-selectable"),"vira-tag-checked":i(({inputs:e})=>!!e.isClickable?.selected,"vira-tag-checked"),"vira-tag-not-checked":i(({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-not-checked"),"vira-tag-cancellable":i(({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-cancellable"),"vira-tag-not-clickable":i(({inputs:e})=>!e.isClickable,"vira-tag-not-clickable"),"vira-tag-disabled":i(({inputs:e})=>!!e.disabled,"vira-tag-disabled"),"vira-tag-size-large":i(({inputs:e})=>e.size===Hn.Large,"vira-tag-size-large"),"vira-tag-size-medium":i(({inputs:e})=>!e.size||e.size===Hn.Medium,"vira-tag-size-medium"),"vira-tag-size-small":i(({inputs:e})=>e.size===Hn.Small,"vira-tag-size-small"),"vira-tag-emphasis-standard":i(({inputs:e})=>!e.emphasis||e.emphasis===He.Standard,"vira-tag-emphasis-standard"),"vira-tag-emphasis-subtle":i(({inputs:e})=>e.emphasis===He.Subtle,"vira-tag-emphasis-subtle"),"vira-tag-color-accent":i(({inputs:e})=>!e.color||e.color===je.Accent,"vira-tag-color-accent"),"vira-tag-color-plain":i(({inputs:e})=>e.color===je.Plain,"vira-tag-color-plain"),"vira-tag-color-neutral":i(({inputs:e})=>e.color===je.Neutral,"vira-tag-color-neutral"),"vira-tag-color-danger":i(({inputs:e})=>e.color===je.Danger,"vira-tag-color-danger"),"vira-tag-color-warning":i(({inputs:e})=>e.color===je.Warning,"vira-tag-color-warning"),"vira-tag-color-positive":i(({inputs:e})=>e.color===je.Positive,"vira-tag-color-positive")},styles:i(({cssVars:e,hostClasses:r})=>D`
        :host {
            display: inline-flex;
        }

        button {
            ${Fr}
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
            height: ${Ju[Hn.Large]}px;
            font-size: ${B["vira-form-large-text-size"].value};
            padding: 0 var(${e["vira-tag-horizontal-padding"].name}, 16px);
        }
        ${r["vira-tag-size-medium"].selector} button {
            height: ${Ju[Hn.Medium]}px;
            font-size: ${B["vira-form-medium-text-size"].value};
        }
        ${r["vira-tag-size-small"].selector} button {
            height: ${Ju[Hn.Small]}px;
            font-size: ${B["vira-form-small-text-size"].value};
        }

        ${LB()}

        :host(.${r["vira-tag-disabled"].name}.${r["vira-tag-disabled"].name}.${r["vira-tag-disabled"].name}.${r["vira-tag-disabled"].name}) {
            cursor: not-allowed;
            ${oi}

            & button {
                ${qt(M.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${M.colors["vira-grey-behind-bg-decoration"].background.value}
            }

            &.${r["vira-tag-emphasis-subtle"].name} button {
                ${qt(M.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${M.colors["vira-grey-behind-bg-decoration"].background.value}
            }
        }

        :host(
                .${r["vira-tag-color-plain"].name}.vira-tag-emphasis-${Ae(He.Standard)}
            )
            button {
            ${qt(M.inverse[tr])};
            border-color: ${M.inverse[tr].background.value};

            &:hover {
                ${qt(M.colors["vira-grey-behind-bg-non-body"])};
                border-color: ${M.colors["vira-grey-behind-bg-non-body"].background.value};
            }
            &:active {
                ${qt(M.inverse[tr])};
                border-color: ${M.inverse[tr].background.value};
            }
        }
        :host(
                .${r["vira-tag-color-plain"].name}.vira-tag-emphasis-${Ae(He.Subtle)}
            )
            button {
            background-color: transparent;
            color: ${M.colors[tr].foreground.value};
            border-color: transparent;
        }
        :host(
                .${r["vira-tag-color-plain"].name}.${r["vira-tag-not-checked"].name}.${r["vira-tag-not-checked"].name}.${r["vira-tag-not-checked"].name}
            )
            button {
            color: ${M.colors[tr].foreground.value};
            background-color: transparent;
            border-color: transparent;
        }
        :host(
                .${r["vira-tag-color-plain"].name}.vira-tag-emphasis-${Ae(He.Subtle)}
            )
            button,
        :host(
                .${r["vira-tag-color-plain"].name}.${r["vira-tag-not-checked"].name}.${r["vira-tag-not-checked"].name}.${r["vira-tag-not-checked"].name}
            )
            button {
            &:hover {
                ${qt(M.colors["vira-grey-behind-fg-small-body"])}
                border-color: ${M.colors["vira-grey-behind-fg-small-body"].background.value};
            }
            &:active {
                ${qt(M.colors["vira-grey-behind-fg-body"])}
                border-color: ${M.colors["vira-grey-behind-fg-body"].background.value};
            }
        }
    `,"styles"),render({inputs:e,dispatch:r,events:t}){const n=!e.isClickable||!!e.disabled;return p`
            <button
                ?disabled=${n}
                ${U("click",()=>{n||(e.isClickable?.selected!=null?r(new t.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&r(new t.cancel))})}
            >
                <${P.assign({icon:km})}
                    class="selected-check"
                ></${P}>
                <span class="text">${String(e.text)}</span>
                <${P.assign({icon:Cm})}
                    class="cancel-x"
                ></${P}>
            </button>
        `}});function Vk(e){return JN({async updateCallback(r,t){if(t&&r in t.cache)return{cache:t.cache,element:t.cache[r],key:r};const n=await e[r]();return{cache:{...t?.cache,[r]:n},element:n,key:r}}})}i(Vk,"createDynamicElementLoader");function qk(e,{ready:r,loading:t,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?t(e.value.then(s=>({[s.key]:s.element}))):r({[e.value.key]:e.value.element})}i(qk,"renderDynamicElement");const sn=l$(),gn=sn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:i(({cssVars:e})=>D`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,"styles"),render:i(({inputs:e,dispatch:r})=>{const t=e.router?.createRouteUrl({...e.route})??"#";return p`
            <a
                href=${t}
                ${U("click",n=>{(!e.router||y$(n))&&(n.preventDefault(),window.scrollTo(0,0),r(new Fc(e.route)))})}
            >
                <slot></slot>
            </a>
        `},"render")});function jB(e,r){return e.entry.entryType===nt.Root?!1:e.entry.entryType===nt.Page||F.jsonEquals(r,e.fullUrlBreadcrumbs.slice(0,-1))?!0:F.jsonEquals(r?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}i(jB,"shouldShowTreeNodeInNav");const ws=sn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:i(({cssVars:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Pe["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Pe["element-book-nav-hover-background-color"].value};
            color: ${Pe["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Pe["element-book-nav-active-background-color"].value};
            color: ${Pe["element-book-nav-active-foreground-color"].value};
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
            background-color: ${Pe["element-book-nav-selected-background-color"].value};
            color: ${Pe["element-book-nav-selected-foreground-color"].value};
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

        ${P} {
            display: inline-flex;
            color: ${Pe["element-book-accent-icon-color"].value};
        }
    `,"styles"),render({inputs:e}){const r=e.flattenedNodes.map(t=>{if(!jB(t,e.selectedPath))return;const n=D`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${gn.assign({router:e.router,route:{paths:[Pt.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${Et({"title-row":!0,selected:e.selectedPath?F.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Bt(Ps(t,nt.ElementExample),p`
                                    <${P.assign({icon:Dm})}></${P}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${gn}>
                </li>
            `});return p`
            <${gn.assign({route:Vs,router:e.router})}>
                <slot>Book</slot>
            </${gn}>
            <ul>
                ${r}
            </ul>
        `}}),ui=sn()({tagName:"book-error",styles:D`
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
    `,render({inputs:e}){return(F.isArray(e.message)?e.message:[e.message]).map(t=>p`
                <p>${t}</p>
            `)}}),jl=sn()({tagName:"book-page-controls",events:{controlValueChange:nr()},hostClasses:{"book-page-controls-has-controls":i(({inputs:e})=>!!Object.keys(e.config).length,"book-page-controls-has-controls")},styles:i(({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Pe["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Se}, ${Ve} {
            height: 24px;
            max-width: 128px;
        }

        ${P}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,"styles"),render({inputs:e,dispatch:r,events:t}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],s)=>{if(o.controlType===fe.Hidden)return"";const a=_B(e.currentValues[n],o,l=>{const u=F.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);r(new t.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(d=>[d,e.currentValues[d]])),[n]:l}}))});return p`
                    <div class="control-wrapper">
                        ${Bt(s===0,p`
                                <${P.assign({icon:Bd})}
                                    class="options-icon"
                                ></${P}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===fe.Custom?p`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function _B(e,r,t){return xi(r,fe.Hidden)?"":xi(r,fe.Checkbox)?p`
            <${de.assign({value:!!e})}
                ${U(de.events.valueChange,n=>{t(n.detail)})}
            ></${de}>
        `:xi(r,fe.Color)?p`
            <${ja.assign({color:e})}
                style=${D`
                    ${ja.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${ja.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${U(ja.events.colorChange,n=>{t(n.detail)})}
            ></${ja}>
        `:xi(r,fe.Text)?p`
            <${Se.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${U(Se.events.valueChange,n=>{t(n.detail)})}
            ></${Se}>
        `:xi(r,fe.Number)?p`
            <${Se.assign({value:e,allowedInputs:/[\d.]/})}
                ${U(Se.events.valueChange,n=>{t(n.detail)})}
            ></${Se}>
        `:xi(r,fe.Dropdown)?p`
            <${Ve.assign({value:e,options:r.options.map(n=>({label:n,value:n}))})}
                ${U(Ve.events.valueChange,n=>{t(n.detail)})}
            ></${Ve}>
        `:xi(r,fe.Custom)?r.content:p`
            <p class="error">
                ${r.controlType} controls are not implemented yet.
            </p>
        `}i(_B,"createControlInput");const Av=sn()({tagName:"book-breadcrumbs",styles:D`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:i(({inputs:e})=>{const r=e.currentRoute.paths.slice(1);return r.length?r.map((t,n,o)=>{const s=n>=o.length-1,a=o.slice(0,n+1),l=s?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${gn.assign({route:{hash:void 0,search:void 0,paths:[Pt.Book,...a]},router:e.router})}>
                    ${t}
                </${gn}>
                ${l}
            `}):p`
                &nbsp;
            `},"render")}),y0=sn()({tagName:"book-breadcrumbs-bar",styles:D`
        :host {
            border-bottom: 1px solid
                ${Pe["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Pe["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:r}){return p`
            ${Bt(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Av.assign({currentRoute:e.currentRoute,router:e.router})}></${Av}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${U("input",async t=>{const n=t.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await Ui({milliseconds:200}),n.value===o&&(n.value?r(new Fc({paths:[Pt.Search,encodeURIComponent(n.value)]})):r(new Fc(Vs)))})}
            />
        `}}),Mv=sn()({tagName:"book-entry-description",styles:D`
        :host {
            color: ${Pe["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Pe["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(r=>p`
                <p>${r}</p>
            `)}}),Fv=sn()({tagName:"book-page-wrapper",styles:D`
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
    `,render({inputs:e}){const r=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,t=[Pt.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?F2(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?r:p`
                  <${gn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                      ${r}
                  </${gn}>
              `;return p`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?p`
                              <${ui.assign({message:n.message})}></${ui}>
                          `:p`
                              <${Mv.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Mv}>
                              <${jl.assign({config:e.pageNode.entry.controls,currentValues:eg(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${jl}>
                          `}
                </div>
            </div>
        `}}),Ru=sn()({tagName:"book-element-example-title",styles:D`
        :host {
            display: flex;
            color: ${Pe["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const r=[Pt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${gn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${gn}>
        `}}),Sv=Symbol("unset-internal-state"),Tv=sn()({tagName:"book-element-example-viewer",state(){return{isUnset:Sv}},render({state:e,inputs:r,updateState:t}){try{if(r.elementExampleNode.entry.errors.length)throw F2(r.elementExampleNode.entry.errors);if(!r.elementExampleNode.entry.render||typeof r.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${r.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Sv&&t({isUnset:void 0,...r.elementExampleNode.entry.state?.()});const n=r.elementExampleNode.entry.render({state:e,updateState:t,controls:r.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return p`
                ${Bt(!!r.elementExampleNode.entry.styles,p`
                        <style>
                            ${r.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Jr(n)),console.error(n),p`
                <${ui.assign({message:`${r.elementExampleNode.entry.title} failed: ${Jr(n)}`})}></${ui}>
            `}},options:{allowPolymorphicState:!0}}),Nv=sn()({tagName:"book-element-example-wrapper",styles:D`
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
            color: ${Pe["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ru} {
            color: ${Pe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${Ru.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${Ru}>
                <${Tv.assign(e)}></${Tv}>
            </div>
        `}}),UB={milliseconds:10};let Xa;const jc=new Map,Fi=new Map;function zB(){return Xa||(Xa=new IntersectionObserver(e=>{for(const r of e){const t=r.target,n=jc.get(t);if(n)if(r.isIntersecting){if(!Fi.has(t)){const o=globalThis.setTimeout(()=>{Fi.delete(t),n(),Xa?.unobserve(t),jc.delete(t)},js(UB,{milliseconds:!0}).milliseconds);Fi.set(t,o)}}else{const o=Fi.get(t);o&&(clearTimeout(o),Fi.delete(t))}}},{rootMargin:"100px"})),Xa}i(zB,"getSharedObserver");function Pv(e){const r=Fi.get(e);r&&(clearTimeout(r),Fi.delete(e)),jc.delete(e),Xa?.unobserve(e)}i(Pv,"unobserveElement");const Lu=sn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:D`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&Pv(e.placeholderElement)},render({inputs:e,state:r,updateState:t}){return r.hasRendered?e.content:p`
            <div
                class="placeholder"
                ${Hi(n=>{r.placeholderElement&&Pv(r.placeholderElement),t({placeholderElement:n}),jc.set(n,()=>{t({hasRendered:!0})}),zB().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function Wk(e,r,t,n){const o=U0(t,n),s=[];if(o){const a=Wk(e,r,o,n);a&&s.push(a)}if(Ps(t,nt.Page)&&!e.includes(t)){const a=eg(r,t.fullUrlBreadcrumbs);s.push({config:t.entry.controls,current:a,breadcrumbs:ar(a,()=>t.fullUrlBreadcrumbs)})}return s.reduce((a,l)=>({config:{...a.config,...l.config},current:{...a.current,...l.current},breadcrumbs:{...a.breadcrumbs,...l.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}i(Wk,"getFlattenedControlsFromHiddenParents");function VB({blockNavigation:e,currentNodes:r,isTopLevel:t,router:n,isSearching:o,controls:s,originalTree:a}){if(!r.length&&o)return[p`
                No results
            `];const l=F.isLengthAtLeast(r,1)?Wk(r,s,r[0],a):void 0,u=l&&Object.values(l.config).length&&F.isLengthAtLeast(r,1)?p`
                  <${jl.assign({config:l.config,currentValues:l.current,fullUrlBreadcrumbs:l.breadcrumbs})}></${jl}>
              `:ee,d=QN(r,f=>f.fullUrlBreadcrumbs.join(">"),f=>{if(Ps(f,nt.Page))return p`
                    <${Fv.assign({blockNavigation:e,isTopLevel:t,pageNode:f,controls:s,router:n})}
                        class="block-entry"
                    ></${Fv}>
                `;if(Ps(f,nt.ElementExample)){const h=eg(s,f.fullUrlBreadcrumbs.slice(0,-1)),g=p`
                    <${Nv.assign({blockNavigation:e,elementExampleNode:f,currentPageControls:h,router:n})}></${Nv}>
                `;return p`
                    <${Lu.assign({content:g})}
                        class="inline-entry ${Et({"block-entry":f.entry.isVertical})}"
                    ></${Lu}>
                `}else{if(Ps(f,nt.Root))return ee;{const h=p`
                    <${ui.assign({message:`Unknown entry type for rendering: '${f.entry.entryType}'`})}></${ui}>
                `;return p`
                    <${Lu.assign({content:h})}
                        class="block-entry"
                    ></${Lu}>
                `}}});return[u,d]}i(VB,"createNodeTemplates");const $s=sn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:D`
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

        ${y0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${xa["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:nr()},render:i(({inputs:e,dispatch:r,events:t,state:n,updateState:o})=>{const s=q2(e.currentRoute.paths),a=VB({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return p`
            <${y0.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${y0}>

            ${Bt(e.showLoading,p`
                    <div
                        ${Hi(()=>{r(new t.loadingRender(!0))})}
                        class="loading"
                    >
                        <${P.assign({icon:ii})}></${P}>
                    </div>
                    ${Bt(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot></slot>
                        `)}
                `,p`
                    <div
                        ${Hi(l=>{o({lastElement:l})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot></slot>
                `)}
        `},"render")});function qB(e,r,t){const n=Iv(e,r);return n.length?n:(t(Vs),Iv(e,Vs.paths))}i(qB,"getCurrentNodes");function Iv(e,r){return e.filter(t=>H6({searchFor:r.slice(1),searchIn:t.fullUrlBreadcrumbs}))}i(Iv,"filterNodes");const ju=Vn()({tagName:"element-book-app",state(){return{currentRoute:Vs,router:void 0,loading:!0,colors:{config:void 0,theme:N1(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:nr()},slotNames:["footer","navHeader"],styles:D`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Pe["element-book-page-background-color"].value};
            color: ${Pe["element-book-page-foreground-color"].value};
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

        ${$s} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${ws} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:r}){e.router&&(e.router.destroy(),r({router:void 0}))},render:i(({state:e,inputs:r,host:t,updateState:n,dispatch:o,events:s,slotNames:a})=>{r._debug&&console.info("rendering element-book app");function l(h){return{...e.currentRoute,...h}}i(l,"mergeRoutes");function u(h){const g=l(h);return!F.jsonEquals(e.currentRoute,g)}i(u,"areRoutesNew");function d(h){r.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,h].filter(F.isTruthy).join(" - "))}i(d,"updateWindowTitle");function f(h){if(!u(h))return;const g=l(h);e.router?e.router.setRoute(g):n({currentRoute:{...e.currentRoute,...g}}),r.elementBookRoutePaths&&!F.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&o(new s.pathUpdate(g.paths))}i(f,"updateRoutes");try{if(r.elementBookRoutePaths&&!F.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&f({paths:r.elementBookRoutePaths}),r.internalRouterConfig?.useInternalRouter&&!e.router){const E=UP(r.internalRouterConfig.basePath);n({router:E}),E.listen(!0,I=>{n({currentRoute:I})})}else!r.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const h={themeColor:r.themeColor};if(!F.jsonEquals(h,e.colors.config)){const E=N1(h);n({colors:{config:h,theme:E}}),FD(t,E)}const g=r._debug??!1,m=eD({entries:r.pages,debug:g});(!e.treeBasedControls||e.treeBasedControls.pages!==r.pages||e.treeBasedControls.lastGlobalInputs!==r.globalValues)&&(r._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:r.pages,lastGlobalInputs:r.globalValues??{},controls:V2(m.tree,{children:e.treeBasedControls?.controls.children,controls:r.globalValues})}}));const y=q2(e.currentRoute.paths),x=(y?MP({flattenedNodes:m.flattenedNodes,searchQuery:y}):void 0)??qB(m.flattenedNodes,e.currentRoute.paths,f);d(x[0]?.entry.title);const C=e.treeBasedControls?.controls;return C?(r._debug&&console.info({currentControls:C}),p`
                <div
                    class="root"
                    ${U(Fc,E=>{const I=E.detail;if(!u(I))return;if(n({loading:!0}),f(I),!(t.shadowRoot.querySelector(ws.tagName)instanceof ws))throw new TypeError(`Failed to find child '${ws.tagName}'`)})}
                    ${U(jl.events.controlValueChange,E=>{if(!e.treeBasedControls)return;const I=tD(C,E.detail.fullUrlBreadcrumbs,E.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:I}})})}
                >
                    ${r.blockNavigation?ee:p`
                              <${ws.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:y?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${a.navHeader}></slot>
                              </${ws}>
                          `}
                    <${$s.assign({blockNavigation:!!r.blockNavigation,controls:C,currentNodes:x,currentRoute:e.currentRoute,debug:g,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${U($s.events.loadingRender,async E=>{await P1();const I=t.shadowRoot.querySelector($s.tagName);I?I.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${$s.tagName}' for scrolling.`),await P1(),n({loading:!E.detail})})}
                    >
                        <slot name=${a.footer}></slot>
                    </${$s}>
                </div>
            `):p`
                    <${ui.assign({message:"Failed to generate page controls."})}></${ui}>
                `}catch(h){return console.error(h),p`
                <p class="error">${Jr(h)}</p>
            `}},"render")}),_u="None";function WB({parent:e,title:r,theme:t,hideInverseColors:n,overrides:o,useVerticalLayout:s,prefixGroupByCount:a=2,hideCopyCode:l}){const u={"Show Var Names":{controlType:fe.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:fe.Checkbox,initValue:!0}},d={"Theme Override":{controlType:fe.Dropdown,initValue:_u,options:[_u,...(o||[]).map(x=>{if(x.name===_u)throw new Error(`Cannot have theme override named '${_u}'`);return x.name})]}},f=De({parent:e,title:r,controls:u});function h({controls:x,theme:C,themeColorName:E}){const I=F.isKeyOf(E,C.colors)?C.colors[E]:void 0,j=F.isKeyOf(E,C.inverse)?C.inverse[E]:void 0;if(!I||!j)throw new Error(`No theme color found by name '${E}'`);const K=p`
            <${Ev.assign({color:I,showVarValues:!0,showVarNames:x["Show Var Names"],showContrast:x["Show Contrast Tips"],fontWeight:400})}></${Ev}>
        `;return p`
            <div class="with-inverse">${K}${ee}</div>
        `}i(h,"buildThemeColorTemplate");function g(x,C,E){const I=y6(Object.keys(C.colors),j=>a?j.split("-").slice(0,a).join("-"):j);Object.entries(I).forEach(([j,K])=>{K&&x({title:j,styles:D`
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
                    `,render({controls:ae}){const me=("Theme Override"in ae&&ae["Theme Override"]&&E?.find(Me=>Me.name===ae["Theme Override"])||void 0)?.asTheme||C;return p`
                            <div class="theme-wrapper">
                                ${K.map(Me=>h({controls:ae,theme:me,themeColorName:Me}))}
                            </div>
                        `}})})}i(g,"createThemePageExamples");const m=["Click a color preview to show CSS var names and values."],y=De({parent:f,title:"Default",descriptionParagraphs:m,useVerticalExamples:s,controls:{...d},defineExamples({defineExample:x}){g(x,t,o)}}),k=(o||[]).map(x=>De({parent:f,title:x.name,useVerticalExamples:s,descriptionParagraphs:m,defineExamples({defineExample:C}){g(C,x.asTheme,void 0)}}));return[f,y,...k]}i(WB,"createColorThemeBookPages");const mr=De({title:"Elements",parent:void 0}),_m=De({title:"Styles",parent:void 0}),Zd=De({title:"Util",parent:void 0}),Yd=De({title:"Icons",controls:{"Stroke Color":{controlType:fe.Color,initValue:""},"Fill Color":{controlType:fe.Color,initValue:""},"Stroke Width":{controlType:fe.Number,initValue:1.5}},parent:void 0}),KB=WB({parent:_m,theme:M,title:"Vira Theme",hideInverseColors:!0,overrides:[qP],hideCopyCode:!0}),GB=De({title:Vt.name,parent:Zd,descriptionParagraphs:["Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){e({title:"stroke color",styles:D`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Vt(fr,{"vira-icon-stroke-color":"red"});return p`
                    <${P.assign({icon:fr})}></${P}>
                    <span>→</span>
                    <${P.assign({icon:r})}></${P}>
                `}}),e({title:"fill color",styles:D`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Vt(Il,{"vira-icon-fill-color":"gold","vira-icon-stroke-color":"orange"});return p`
                    <${P.assign({icon:Il})}></${P}>
                    <span>→</span>
                    <${P.assign({icon:r})}></${P}>
                `}}),e({title:"stroke width",styles:D`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Vt(Ms,{"vira-icon-stroke-color":"green","vira-icon-stroke-width":"3px"});return p`
                    <${P.assign({icon:Ms})}></${P}>
                    <span>→</span>
                    <${P.assign({icon:r})}></${P}>
                `}}),e({title:"with CSS var values",styles:D`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Vt(Ms,{"vira-icon-stroke-color":`${B["vira-form-error-color"].value}`}),t=Vt(Ms,{"vira-icon-stroke-color":`${B["vira-form-success-color"].value}`});return p`
                    <${P.assign({icon:r})}></${P}>
                    <${P.assign({icon:t})}></${P}>
                `}}),e({title:"multiple icons with different colors",styles:D`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,render(){const r=Vt(fr,{"vira-icon-stroke-color":"red"}),t=Vt(fr,{"vira-icon-stroke-color":"dodgerblue"}),n=Vt(fr,{"vira-icon-stroke-color":"green"}),o=Vt(fr,{"vira-icon-stroke-color":"purple"});return p`
                    <${P.assign({icon:r})}></${P}>
                    <${P.assign({icon:t})}></${P}>
                    <${P.assign({icon:n})}></${P}>
                    <${P.assign({icon:o})}></${P}>
                `}})}}),HB=[{title:"smaller",size:16,icon:fr},{title:"larger",size:48,icon:Il}],ZB=De({title:bh.name,parent:Zd,descriptionParagraphs:["Wraps an existing icon with explicit dimensions to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){HB.forEach(r=>{e({title:r.title,styles:D`
                    :host {
                        display: flex;
                        gap: 16px;
                        align-items: center;
                    }
                `,render(){const t=bh(r.icon,r.size);return p`
                        <${P.assign({icon:r.icon})}></${P}>
                        <span>→</span>
                        <${P.assign({icon:t})}></${P}>
                    `}})})}}),Kk={async element1(){return await Ui({seconds:2}),(await gl(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-DQnj5VTg.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Ui({seconds:2}),(await gl(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-CpHnZkk6.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},Ov=Vn()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:Vk(Kk)}},render({state:e,inputs:r}){return qk(e.dynamicElements,{key:r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement",error(t){return p`
                    <${ji}>
                        ${Yi("Failed to import element",Jr(t))}
                    </${ji}>
                `},loading(){return p`
                    <${P.assign({icon:ii})}></${P}>
                `},ready(t){if(t.element1)return p`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return p`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;_r.never("The error element will always error")}})}}),Bv=Vn()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:Vk(Kk)}},render({state:e,inputs:r}){return e.dynamicElements.update(r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement"),qk(e.dynamicElements,{error(t){return p`
                    <${ji}>
                        ${Yi("Failed to import element",Jr(t))}
                    </${ji}>
                `},loading(){return p`
                    <${P.assign({icon:ii})}></${P}>
                `},ready(t){if(t.element1)return p`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return p`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;_r.never("The error element will always error")}})}}),Rv=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],YB=De({parent:Zd,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:D`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return p`
                    <${Ve.assign({value:String(r.value),options:Rv})}
                        ${U(Ve.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${Ve}>
                    <${Ov.assign({numberValue:r.value})}></${Ov}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:D`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return p`
                    <${Ve.assign({value:String(r.value),options:Rv})}
                        ${U(Ve.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${Ve}>
                    <${Bv.assign({numberValue:r.value})}></${Bv}>
                `}})}}),JB=[{title:"unselected",content:"my label",inputs:{selected:!1}},{title:"selected",content:"my label",inputs:{selected:!0}},{title:"with custom child",content:"custom child",inputs:{selected:!0},customTemplate:p`
            <b>This is custom</b>
        `},{title:"constrained width",content:"has more text than is possible to fit",customStyle:D`
            :host {
                max-width: 100px;
            }
        `,inputs:{selected:!0}},{title:"stretched width",content:"wide",customStyle:D`
            ${Yo} {
                width: 400px;
            }
        `,inputs:{selected:!0}},{title:"disabled",content:"my label",inputs:{selected:!0,disabled:!0}},{title:"no default pointer styles",content:"my label",inputs:{selected:!0,disablePointerStyles:!0}},{title:"icon override",content:"my label",inputs:{selected:!1,iconOverride:Vt(Bd,{"vira-icon-stroke-color":"blue"})}},{title:"with ViraLink content",customStyle:D`
            ${Xn} {
                text-decoration: none;
            }
        `,content:p`
            <${Xn.assign({link:{url:"https://example.com",newTab:!0},disableLinkStyles:!0})}>
                link label
            </${Xn}>
        `,inputs:{selected:!1}}],XB=De({title:Yo.tagName,parent:mr,defineExamples({defineExample:e}){JB.forEach(r=>{e({title:r.title,styles:r.customStyle,render(){return p`
                        <${Yo.assign(r.inputs)}>${r.content}</${Yo}>
                    `}})})}}),Qa=[{content:"one"},{content:"two"},{content:"three"},{content:"four"},{content:"five"},{content:"six"}],Lv={content:p`
        <div
            style=${D`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `}
        >
            This menu item is much longer than the others
        </div>
    `},QB=[{title:"basic"},{title:"rounded",inputs:{menuCornerStyle:k$.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"inside focus",inputs:{useInsideFocus:!0}},{title:"long item",menuItems:[...Qa,Lv]},{title:"restricted long item",inputs:{horizontalAnchor:Li.Both},menuItems:[...Qa,Lv]},{title:"ViraLink URL item",menuItems:[...Qa,{content:p`
                    <${Xn.assign({link:{url:"https://www.wikipedia.org",newTab:!0},disableLinkStyles:!0})}>
                        Wikipedia link
                    </${Xn}>
                `}]},{title:"ViraLink route item",menuItems:[...Qa,{content:p`
                    <${Xn.assign({route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(e,r){return console.info(e,r),!1}}},disableLinkStyles:!0})}>
                        Route link
                    </${Xn}>
                `}]}],eR=De({parent:mr,title:Pu.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){QB.forEach(r=>{e({title:r.title,styles:D`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){const t=r.menuItems||Qa;return p`
                        <${Pu.assign({popUpOffset:{vertical:-1},...r.inputs})}>
                            <div class="trigger" slot=${Pu.slotNames.trigger}>
                                Trigger Menu
                            </div>
                            ${F$(t)}
                        </${Pu}>
                    `}})})}}),rR=[{title:"basic",items:[{content:"one"},{content:"two"},{content:"three"}]},{title:"with selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three"}]},{title:"with multi selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three",selected:!0}]},{title:"with disabled item",items:[{content:"one"},{content:"two",disabled:!0},{content:"three"}]}],tR=De({parent:mr,title:Ri.tagName,defineExamples({defineExample:e}){rR.forEach(r=>{e({title:r.title,render(){return p`
                        <${Ri.assign({...r.menuInputs})}>
                            ${r.items.map(t=>p`
                                    <${Yo.assign({selected:t.selected,disabled:t.disabled,disablePointerStyles:t.disablePointerStyles})}>
                                        ${t.content}
                                    </${Yo}>
                                `)}
                        </${Ri}>
                    `}})})}}),nR=De({parent:mr,title:le.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:D`
                ${le} {
                    ${B["vira-form-focus-outline-border-radius"].name}: 0;
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
                    <${le.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${le.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>Pop up!</div>
                    </${le}>
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
            `,render(){return p`
                    <${le.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${le.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${le}>
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
            `,render(){return p`
                    <${le.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Li.Right})}>
                        <div slot=${le.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${le}>
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
            `,render(){return p`
                    <${le.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Li.Left})}>
                        <div slot=${le.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${le}>
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
            `,render(){return p`
                    <${le.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Li.Right})}>
                        <div slot=${le.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>not long</div>
                    </${le}>
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
            `,render(){return p`
                    <div class="container">
                        <${le.assign({keepOpenAfterInteraction:!0})}>
                            <div class="trigger" slot=${le.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${le.slotNames.popUp}>
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
                        </${le}>
                    </div>
                `}})}}),oR=[{title:"menu shadow",styles:Tl.menuShadow},{title:"modal",styles:Tl.modal}],iR=De({parent:_m,title:"Shadows",defineExamples({defineExample:e}){oR.forEach(r=>{e({title:r.title,styles:D`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${r.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return p`
                        <div class="shadow-block"></div>
                    `}})})}}),sR=De({parent:mr,title:pr.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:fe.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return p`
                    <${pr.assign({text:"Text here",bold:!1})}></${pr}>
                `}}),e({title:"Bold",render(){return p`
                    <${pr.assign({text:"Text here",bold:!0})}></${pr}>
                `}}),e({title:"Dynamic",render({controls:r}){return p`
                    <${pr.assign({text:"Text here",bold:r.bolded})}></${pr}>
                `}}),e({title:"Resized",styles:D`
                ${pr} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return p`
                    <${pr.assign({text:"Not Bolded",bold:!1})}></${pr}>
                    <${pr.assign({text:"Bolded",bold:!0})}></${pr}>
                `}}),e({title:"Alignment",styles:D`
                ${pr} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return p`
                    <${pr.assign({text:"Not Bolded",bold:!1})}></${pr}>
                    <${pr.assign({text:"Bolded",bold:!0})}></${pr}>
                `}}),e({title:"Stylized",styles:D`
                ${pr} {
                    text-decoration: underline;
                }
            `,render(){return p`
                    <${pr.assign({text:"Not Bolded",bold:!1})}></${pr}>
                    <${pr.assign({text:"Bolded",bold:!0})}></${pr}>
                `}})}}),aR=[{label:"basic",extraInputs:{}},{label:"with 24px icon",extraInputs:{icon:Nc}},{label:"with 16px icon",extraInputs:{icon:Sc}},{label:"only 24px icon",extraInputs:{icon:Nc,text:""}},{label:"only 16px icon",extraInputs:{icon:Sc,text:""}},{label:"disabled",extraInputs:{isDisabled:!0}},{label:"menu caret",extraInputs:{showMenuCaret:!0}}],lR=D`
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
`,uR=De({parent:mr,title:ke.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],defineExamples({defineExample:e}){wm.forEach(r=>{e({title:r,styles:lR,render(){return aR.map(({label:t,extraInputs:n})=>p`
                            <h3>${t}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${Sl.map(o=>p`
                                                <th>${o}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${$m.map(o=>p`
                                            <tr>
                                                <th>${o}</th>
                                                ${Sl.map(s=>p`
                                                        <td>
                                                            <${ke.assign({text:"Button",...n,buttonSize:r,buttonEmphasis:o,colorVariant:s})}></${ke}>
                                                        </td>
                                                    `)}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})}),e({title:"customized colors",styles:D`
                :host {
                    ${ke.cssVars["vira-button-text-color"].name}: purple;
                    ${ke.cssVars["vira-button-background-color"].name}: pink;
                    ${ke.cssVars["vira-button-border-color"].name}: magenta;

                    ${ke.cssVars["vira-button-hover-text-color"].name}: white;
                    ${ke.cssVars["vira-button-hover-background-color"].name}: orange;
                    ${ke.cssVars["vira-button-hover-border-color"].name}: red;

                    ${ke.cssVars["vira-button-active-text-color"].name}: black;
                    ${ke.cssVars["vira-button-active-background-color"].name}: yellow;
                    ${ke.cssVars["vira-button-active-border-color"].name}: goldenrod;

                    ${ke.cssVars["vira-button-disabled-text-color"].name}: gray;
                    ${ke.cssVars["vira-button-disabled-background-color"].name}: lightgray;
                    ${ke.cssVars["vira-button-disabled-border-color"].name}: darkgray;
                }
            `,render(){return p`
                    <${ke.assign({text:"hello",colorVariant:je.None})}></${ke}>
                `}}),e({title:"text wrapping",styles:D`
                ${ke} {
                    max-width: 120px;
                }
            `,render(){return p`
                    <${ke.assign({text:"This is a long button label that wraps"})}></${ke}>
                `}})}}),cR=[{title:"basic"},{title:"success",inputs:{cardState:vh.Success}},{title:"error",inputs:{cardState:vh.Error}},{title:"long",content:p`
            <p
                style=${D`
                    ${iu}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],dR=De({parent:mr,title:Vf.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){cR.forEach(r=>{e({title:r.title,render(){return p`
                        <${Vf.assign(r.inputs||{})}>
                            ${r.content||"Content"}
                        </${Vf}>
                    `}})})}}),fR=De({parent:mr,title:de.tagName,controls:{Checked:{controlType:fe.Checkbox,initValue:!1},Disabled:{controlType:fe.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:r,updateState:t}){return p`
                    <${de.assign({value:r.checked})}
                        ${U(de.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${de}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return p`
                    <${de.assign({value:r.checked})}
                        ${U(de.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${de}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:r,updateState:t}){return p`
                    <${de.assign({value:r.checked,hasError:!0})}
                        ${U(de.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${de}>
                `}}),e({title:"disabled unchecked",render(){return p`
                    <${de.assign({value:!1,disabled:!0})}></${de}>
                `}}),e({title:"disabled checked",render(){return p`
                    <${de.assign({value:!0,disabled:!0})}></${de}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:r}){return p`
                    <${de.assign({value:r.Checked,disabled:r.Disabled})}></${de}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return p`
                    <${de.assign({value:!0})}></${de}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:r,updateState:t}){return p`
                    <${de.assign({value:r.checked,label:"label goes here"})}
                        ${U(de.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${de}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:r,updateState:t}){return p`
                    <${de.assign({value:r.checked,label:"label goes here",horizontal:!0})}
                        ${U(de.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${de}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:D`
                ${de} {
                    max-width: 400px;
                }
            `,render({state:r,updateState:t}){return p`
                    <${de.assign({value:r.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${U(de.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${de}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:r,updateState:t}){return p`
                    <${de.assign({value:r.checked,fillWhenChecked:!0})}
                        ${U(de.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${de}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return p`
                    <${de.assign({value:r.checked,fillWhenUnchecked:!0})}
                        ${U(de.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${de}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:r,updateState:t}){return p`
                    <${de.assign({value:r.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${U(de.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${de}>
                `}})}}),hR=De({title:Kr.tagName,parent:mr,descriptionParagraphs:["A collapsible card element with built-in header, caret icon, and card styling. Wraps ViraCollapsibleWrapper with opinionated styles."],defineExamples({defineExample:e}){e({title:"basic",styles:D`
                p {
                    ${Fr}
                }
            `,render(){return p`
                    <${Kr}>
                        <span slot=${Kr.slotNames.header}>Card Header</span>
                        <p>Card content goes here.</p>
                    </${Kr}>
                `}}),e({title:"start expanded",styles:D`
                p {
                    ${Fr}
                }
            `,render(){return p`
                    <${Kr.assign({startExpanded:!0})}>
                        <span slot=${Kr.slotNames.header}>
                            Expanded Card Header
                        </span>
                        <p>This card starts expanded.</p>
                    </${Kr}>
                `}}),e({title:"block expansion",styles:D`
                p {
                    ${Fr}
                }
            `,render(){return p`
                    <${Kr.assign({blockExpansion:!0})}>
                        <span slot=${Kr.slotNames.header}>Always Expanded</span>
                        <p>This card cannot be collapsed.</p>
                    </${Kr}>
                `}}),e({title:"raw collapsible",styles:D`
                p {
                    ${Fr}
                }
            `,render(){return p`
                    <${Kr.assign({rawCollapsible:!0,startExpanded:!0})}>
                        <span slot=${Kr.slotNames.header}>Raw Header</span>
                        <p>No card border or padding styles.</p>
                    </${Kr}>
                `}}),e({title:"hidden header",styles:D`
                p {
                    ${Fr}
                }
            `,render(){return p`
                    <${Kr.assign({hideHeader:!0,startExpanded:!0})}>
                        <p>Content with no header visible.</p>
                    </${Kr}>
                `}}),e({title:"wide",styles:D`
                div {
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                }
                p {
                    ${Fr}
                }
            `,render(){return p`
                    <div>
                        <${Kr}>
                            <span slot=${Kr.slotNames.header}>Wide</span>
                            <p>Content content content content content content content.</p>
                        </${Kr}>
                    </div>
                `}})}}),gR=De({title:ht.tagName,parent:mr,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:D`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:r,state:t}){return new Array(3).fill(0).map((n,o)=>p`
                        <${ht.assign({expanded:!!t.expandedStates[o]})}
                            ${U(ht.events.expandChange,s=>{const a=[...t.expandedStates];a[o]=s.detail,r({expandedStates:a})})}
                        >
                            <div
                                class="section-header"
                                slot=${ht.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${U("click",()=>{const s=[...t.showMoreStates];s[o]=!s[o],r({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Bt(!!t.showMoreStates[o],p`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${ht}>
                    `)}}),e({title:"wider examples",styles:D`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:r,state:t}){return new Array(3).fill(0).map((n,o)=>p`
                        <${ht.assign({expanded:!!t.expandedStates[o]})}
                            ${U(ht.events.expandChange,s=>{const a=[...t.expandedStates];a[o]=s.detail,r({expandedStates:a})})}
                        >
                            <div
                                class="section-header"
                                slot=${ht.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${U("click",()=>{const s=[...t.showMoreStates];s[o]=!s[o],r({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Bt(!!t.showMoreStates[o],p`
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
                        </${ht}>
                    `)}})}}),Xu=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Really really super duper long option",value:"4"},{label:"Really really super duper long option",value:"5"},{label:"Really really super duper long option",value:"6"},{label:"Really really super duper long option",value:"7"},{label:"Really really super duper long it just keeps going because it's so long option",value:"8"}],mR=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{value:"1",label:"1"},{value:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with disabled item",inputs:{selected:[],options:[...Xu,{value:"42",label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:D`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:D`
            ${Ja} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:fr}}],pR=De({title:Ja.tagName,parent:mr,controls:{Selected:{controlType:fe.Dropdown,initValue:"",options:["",...Xu.map(e=>e.label)]},Prefix:{controlType:fe.Text,initValue:""},"Force State":{controlType:fe.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:fe.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:fe.Dropdown,initValue:"",options:["",...Object.keys(Q1)]},Disabled:{controlType:fe.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:fe.Text,initValue:"Select something"}},defineExamples({defineExample:e}){mR.forEach(r=>{e({title:r.title,state(){return{selected:r.inputs?.selected||[]}},styles:r.customStyle,render({state:t,updateState:n,controls:o}){const s={...r.inputs,placeholder:r.inputs&&"placeholder"in r.inputs?r.inputs.placeholder:o.Placeholder,options:r.inputs?.options||Xu,selected:o.Selected?[Xu.find(a=>a.label===o.Selected)?.value].filter(F.isTruthy):t.selected,selectionPrefix:o.Prefix||r.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":r.inputs?.isDisabled,icon:o.Icon?Q1[o.Icon]:r.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":r.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":r.inputs?.z_debug_forceOpenState};return p`
                        <${Ja.assign(s)}
                            ${U(Ja.events.selectedChange,a=>{n({selected:a.detail})})}
                        ></${Ja}>
                    `}})})}}),bR=De({parent:mr,title:ji.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return p`
                    <${ji}>Error Content</${ji}>
                `}})}}),w0=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],vR=De({parent:mr,title:Ft.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Fe.Text,label:"First Name",value:r.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:Fe.Text,label:"Last Name",value:r.lastName,isRequired:!0},subscribe:{type:Fe.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Fe.Email,label:"Email Address",value:r.email},password:{type:Fe.NewPassword,label:"Password",value:r.password},userRole:{type:Fe.Select,label:"Role",options:w0,value:r.userRole,placeholder:"placeholder"},quantity:{type:Fe.Number,label:"Quantity",value:r.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:Fe.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:Fe.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return p`
                    <${Ft.assign({fields:n})}
                        ${U(Ft.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ke.assign({text:"Cancel",buttonEmphasis:He.Subtle,colorVariant:je.Neutral})}></${ke}>
                            <${ke.assign({text:"Submit"})}></${ke}>
                        </div>
                    </${Ft}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Fe.Text,label:"First Name",value:r.firstName},lastName:{type:Fe.Text,label:"Last Name",value:r.lastName}};return p`
                    <${Ft.assign({fields:n})}
                        ${U(Ft.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <${Se.assign({value:"",label:"More stuff"})}></${Se}>
                        <div class="buttons">
                            <${ke.assign({text:"Cancel",buttonEmphasis:He.Subtle,colorVariant:je.Neutral})}></${ke}>
                            <${ke.assign({text:"Submit"})}></${ke}>
                        </div>
                    </${Ft}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Ft} {
                    width: 400px;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Fe.Text,label:"First Name",value:r.firstName},lastName:{type:Fe.Text,label:"Last Name",value:r.lastName},subscribe:{type:Fe.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Fe.Email,label:"Email Address",value:r.email},password:{type:Fe.NewPassword,label:"Password",value:r.password},userRole:{type:Fe.Select,label:"Role",options:w0,value:r.userRole}};return p`
                    <${Ft.assign({fields:n})}
                        ${U(Ft.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ke.assign({text:"Cancel",buttonEmphasis:He.Subtle,colorVariant:je.Neutral})}></${ke}>
                            <${ke.assign({text:"Submit"})}></${ke}>
                        </div>
                    </${Ft}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Fe.Text,label:"First Name",value:r.firstName},lastName:{type:Fe.Text,label:"Last Name",value:r.lastName},subscribe:{type:Fe.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Fe.Email,label:"Email Address",value:r.email},password:{type:Fe.NewPassword,label:"Password",value:r.password},userRole:{type:Fe.Select,label:"Role",options:w0,value:r.userRole}};return p`
                    <${Ft.assign({fields:n,isDisabled:!0})}
                        ${U(Ft.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ke.assign({text:"Cancel",buttonEmphasis:He.Subtle,colorVariant:je.Neutral})}></${ke}>
                            <${ke.assign({text:"Submit"})}></${ke}>
                        </div>
                    </${Ft}>
                `}})}}),yR=De({title:P.tagName,parent:mr,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return p`
                    <${P.assign({icon:fr})}></${P}>
                `}}),e({title:"using createColoredIcon",render(){return p`
                    <${P.assign({icon:Vt(fr,{"vira-icon-stroke-color":"red"})})}></${P}>
                `}}),e({title:"using createSizedIcon",render(){return p`
                    <${P.assign({icon:bh(fr,32)})}></${P}>
                `}}),e({title:"using feather icon",render(){return p`
                    <${P.assign({icon:Ya.anchor})}></${P}>
                `}}),e({title:"using customized feather icon",render(){return p`
                    <${P.assign({icon:Ya.anchor({height:64,width:64})})}></${P}>
                `}}),e({title:"fit container",styles:D`
                ${P} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return p`
                    <${P.assign({icon:fr,fitContainer:!0})}></${P}>
                `}}),e({title:"colored fit container",styles:D`
                ${P} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return p`
                    <${P.assign({icon:Vt(fr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${P}>
                `}}),e({title:"feather fit container",styles:D`
                ${P} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return p`
                    <${P.assign({icon:Ya.anchor,fitContainer:!0})}></${P}>
                `}}),e({title:"customized feather fit container",styles:D`
                ${P} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return p`
                    <${P.assign({icon:Ya.anchor({"stroke-width":4}),fitContainer:!0})}></${P}>
                `}})}}),wR=De({title:Bo.tagName,parent:mr,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:D`
                    border-radius: 32px;
                `,loadingSlot:p`
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
                        <${P.assign({icon:ii,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:D`
                    border-radius: 32px;
                `,errorSlot:p`
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
                        <${P.assign({icon:Ol,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:D`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:D`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:D`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:p`
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
                        <${P.assign({icon:ii,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `,errorSlot:p`
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
                        <${P.assign({icon:Ol,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `}].forEach(t=>{e({title:t.title,styles:D`
                    ${Bo} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${t.styles||D``}
                    }

                    ${t.allowReload?D`
                              ${Bo} {
                                  cursor: pointer;
                              }

                              ${Bo}:hover {
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
                `,state(){return{imageUrl:t.inputs.imageUrl}},render({state:n,updateState:o}){return p`
                        <${Bo.assign({...t.inputs,imageUrl:n.imageUrl})}
                            ${U("click",()=>{t.allowReload&&o({imageUrl:`${t.inputs.imageUrl}?di=${Ii()}`})})}
                        >
                            ${t.loadingSlot?p`
                                      <div class="slot-wrapper" slot=${Bo.slotNames.loading}>
                                          ${t.loadingSlot}
                                      </div>
                                  `:ee}${t.errorSlot?p`
                                      <div class="slot-wrapper" slot=${Bo.slotNames.error}>
                                          ${t.errorSlot}
                                      </div>
                                  `:ee}
                        </${Bo}>
                    `}})})}}),$R=De({title:Se.tagName,parent:mr,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:fe.Color,initValue:B["vira-form-foreground-color"].default},"Placeholder color":{controlType:fe.Color,initValue:B["vira-form-placeholder-color"].default},"Border color":{controlType:fe.Color,initValue:B["vira-form-border-color"].default},"Focus color":{controlType:fe.Color,initValue:B["vira-form-focus-outline-color"].default},"Selection color":{controlType:fe.Color,initValue:B["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function r({styles:n,title:o,inputs:s}){e({title:o,styles:D`
                    ${n||D``}
                `,state(){return{value:s.value}},render({state:a,updateState:l,controls:u}){const d={[String(B["vira-form-foreground-color"].name)]:u["Text color"],[String(B["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(B["vira-form-border-color"].name)]:u["Border color"],[String(B["vira-form-focus-outline-color"].name)]:u["Focus color"],[String(B["vira-form-text-selection-color"].name)]:u["Selection color"]},f=ar(d,(g,m)=>m||"inherit"),h=Object.entries(f).map(([g,m])=>[g,m].join(": ")+";").join(`
`);return p`
                        <${Se.assign({...s,value:a.value})}
                            style=${h}
                            ${U(Se.events.valueChange,g=>{l({value:g.detail}),console.info("changed:",g.detail)})}
                        ></${Se}>
                    `}})}i(r,"defineInputExample"),[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:fr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:D`
                    ${Se} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:fr}},{title:"taller height",styles:D`
                    ${Se} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:fr}},{title:"shorter height",styles:D`
                    ${Se} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:fr}},{title:"max width",styles:D`
                    ${Se} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:D`
                    ${Se} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Ni.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Ni.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:D`
                    ${Se} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:D`
                    ${Se} {
                        width: unset;
                    }
                `}].forEach(r)}}),kR=De({title:Xn.tagName,parent:mr,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:fe.Color,initValue:""},"Hover color":{controlType:fe.Color,initValue:""},"Active color":{controlType:fe.Color,initValue:""}},defineExamples({defineExample:e}){function r({title:t,inputs:n}){e({title:t,render({controls:o}){const s=D`
                        ${B["vira-form-accent-primary-color"].name}: ${Ae(o["Hover color"]||"inherit")};
                        ${B["vira-form-accent-primary-active-color"].name}: ${Ae(o["Active color"]||"inherit")};
                        color: ${Ae(o["CSS Color"]||"inherit")};
                    `;return p`
                        <${Xn.assign(n)} style=${s}>My Link</${Xn}>
                    `}})}i(r,"defineLinkExample"),r({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),r({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(t,n){return console.info(t,n),!1}}}}}),r({title:"disabled link styles",inputs:{disableLinkStyles:!0,link:{newTab:!0,url:"https://www.wikipedia.org"}}})}}),xR=De({title:Ro.tagName,parent:mr,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:r,updateState:t}){return p`
                    <button
                        ${U("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Ro.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${U(Ro.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Ro}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:D`
                ${Ro} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${B["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:r,updateState:t}){return p`
                    <button
                        ${U("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Ro.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${U(Ro.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Ro}>
                `}})}}),el=D`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,$0=p`
    <${Qn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${Qn.slotNames.large}>Large</div>
        <div class="small" slot=${Qn.slotNames.small}>Small</div>
    </${Qn}>
`,Fs={max:120,min:25,default:80},jv=or()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":Us(Fs.default)},state(){return{intervalId:void 0,increment:1}},styles:i(({cssVars:e})=>D`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t,cssVars:n}){globalThis.clearInterval(e.intervalId),r({intervalId:globalThis.setInterval(()=>{const o=Gh.isNumber(T6(ED({onElement:t,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Fs.default;(o>=Fs.max||o<=Fs.min)&&r({increment:e.increment*-1}),lg({onElement:t,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:Us(o+e.increment)})},10)})},cleanup({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:void 0})},render(){return p`
            <slot></slot>
        `}}),_v=or()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":Us(Fs.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:D`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${el}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:globalThis.setInterval(()=>{r({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:void 0})},render({state:e}){return p`
            <${Qn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${Qn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${Qn.slotNames.small}>Small</div>
            </${Qn}>
        `}}),DR=De({title:Qn.tagName,parent:mr,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:D`
                ${el}
            `,render(){return $0}}),e({title:"overflowing",styles:D`
                ${el}

                ${Qn} {
                    max-width: 50px;
                }
            `,render(){return $0}}),e({title:"dynamic size",styles:D`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${el}

                .wrapper {
                    width: ${Fs.max+10}px;
                }
            `,render(){return p`
                    <div class="wrapper">
                        <${jv}>
                            ${$0}
                        </${jv}>
                    </div>
                `}}),e({title:"dynamic slot",styles:D`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${el}
            `,render(){return p`
                    <${_v}></${_v}>
                `}})}}),CR=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:D`
            :host {
                ${B["vira-form-filled-background-color"].name}: red;
                ${B["vira-form-accent-primary-color"].name}: black;
                ${mo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${mo} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:D`
            :host {
                ${B["vira-form-filled-background-color"].name}: red;
                ${B["vira-form-accent-primary-color"].name}: yellow;
                ${mo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${mo} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:D`
            :host {
                ${B["vira-form-filled-background-color"].name}: red;
                ${B["vira-form-accent-primary-color"].name}: yellow;
                ${mo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${mo} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],ER=De({parent:mr,title:mo.tagName,defineExamples({defineExample:e}){CR.forEach(r=>{e({title:r.title,styles:D`
                    ${r.styles||D``}
                `,render(){return p`
                        <${mo.assign({value:50,...r.inputs})}></${mo}>
                    `}})})}}),Rr=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],AR=[{title:"basic",inputs:{options:Rr}},{title:"with really long option",inputs:{options:[...Rr,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:Rr,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:Rr,disabled:!0}},{title:"error",inputs:{options:Rr,hasError:!0}},{title:"with icon",inputs:{options:Rr,icon:fr}},{title:"custom width",inputs:{options:Rr},styles:D`
            ${Ve} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:Rr,icon:fr},styles:D`
            ${Ve} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:Rr,icon:fr},styles:D`
            ${Ve} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:Rr,label:"Pick an option"}},{title:"with long label",inputs:{options:Rr,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:Rr,label:"Pick a really really really really long option"},styles:D`
            ${Ve} {
                width: unset;
            }
        `},{title:"raw",inputs:{options:[...Rr,{label:"really really really really really really really really long option",value:"something"}],rawSelect:!0,icon:fr}}],MR=De({parent:mr,title:Ve.tagName,defineExamples({defineExample:e}){AR.forEach(r=>{e({title:r.title,styles:D`
                    ${r.styles||D``}
                `,state(){return{selected:void 0}},render({state:t,updateState:n}){return p`
                        <${Ve.assign({...r.inputs,value:t.selected??r.inputs.value})}
                            ${U(Ve.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${Ve}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return p`
                    <${Ve.assign({options:Rr,value:Rr[0]?.value})}></${Ve}>
                `}}),e({title:"force update",render(){return p`
                    <${Uv}></${Uv}>
                `}})}}),Uv=or()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:r}){e({intervalId:globalThis.setInterval(()=>{const t=Rr.findIndex(o=>o.value===r.value),n=vr.isDefined(Rr[(t+1)%Rr.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return p`
            <${Ve.assign({options:Rr,value:e.value})}></${Ve}>
        `}}),FR=[{label:"basic",isClickable:void 0},{label:"selectable",isClickable:{selected:!0}},{label:"cancellable",isClickable:{cancellable:!0}},{label:"disabled",disabled:!0,isClickable:{selected:!0}}],SR=De({parent:mr,title:_a.tagName,descriptionParagraphs:["A tag element with selectable, cancellable, size, emphasis, and color variants."],defineExamples({defineExample:e}){wm.forEach(r=>{e({title:r,styles:D`
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
                `,state(){return{clicked:{}}},render({state:t,updateState:n}){return FR.map(({label:o,...s})=>p`
                            <h3>${o}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${Sl.map(a=>p`
                                                <th>${a}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${$m.map(a=>p`
                                            <tr>
                                                <th>${a}</th>
                                                ${Sl.map(l=>{const u=[o,a,l].join("-"),d=F.isBoolean(s.isClickable?.selected)?{selected:!t.clicked[u]}:s.isClickable,f=p`
                                                        <${_a.assign({text:"Label",...s,size:r,emphasis:a,color:l,isClickable:d})}
                                                            class=${Et({cancelled:!!s.isClickable?.cancellable&&!!t.clicked[u]})}
                                                            ${U(_a.events.cancel,()=>{n({clicked:{...t.clicked,[u]:!0}})})}
                                                            ${U(_a.events.toggle,h=>{n({clicked:{...t.clicked,[u]:!h.detail}})})}
                                                        ></${_a}>
                                                    `;return p`
                                                        <td>${f}</td>
                                                    `})}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})})}});function Um(e,r){zs(e).forEach(t=>{r({title:t.name,styles:D`
                button {
                    ${Fr}
                    display: flex;
                    padding: 8px;
                    border-radius: ${B["vira-form-radius"].value};
                    cursor: pointer;

                    &:hover {
                        background-color: #f2f2f2;

                        & ${P} {
                            border-color: red;
                        }
                    }

                    &:active {
                        background-color: #999999;

                        & ${P} {
                            border-color: transparent;
                        }
                    }
                }

                ${P} {
                    border: 1px solid transparent;
                }
            `,render({controls:n}){const o=D`
                    ${b["vira-icon-fill-color"].name}: ${Ae(n["Fill Color"]||"inherit")};
                    ${b["vira-icon-stroke-color"].name}: ${Ae(n["Stroke Color"]||"inherit")};
                    ${b["vira-icon-stroke-width"].name}: ${Ae(n["Stroke Width"]?Us(n["Stroke Width"]):"inherit")};
                `;return p`
                    <button>
                        <${P.assign({icon:t})}
                            style=${o}
                        ></${P}>
                    </button>
                `}})})}i(Um,"defineIconExamples");const TR=De({title:"16px Icons",parent:Yd,defineExamples({defineExample:e}){Um(PI,e)}}),NR=De({title:"24px Icons",parent:Yd,defineExamples({defineExample:e}){Um(NI,e)}}),PR=De({title:"Feather Icons",parent:Yd,defineExamples({defineExample:e}){Um(Ya,e)}}),IR=[mr,Yd,_m,Zd],OR=[sR,uR,dR,fR,hR,gR,pR,bR,vR,yR,wR,$R,kR,XB,tR,eR,xR,DR,nR,ER,MR,SR].sort((e,r)=>e.title.localeCompare(r.title)),BR=[...OR,GB,ZB,YB,PR,TR,NR,iR,...KB],RR=[...IR,...BR];Vn()({tagName:"vira-book-app",styles:D`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ju} {
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
            <${ju.assign({internalRouterConfig:{basePath:bm("vira"),useInternalRouter:!0},pages:RR,themeColor:"#33ccff"})}>
                <h1 slot=${ju.slotNames.navHeader}>Vira</h1>
            </${ju}>
        `}});export{Vn as d,p as h};
