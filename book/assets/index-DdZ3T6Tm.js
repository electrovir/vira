var ak=Object.defineProperty;var i=(e,t)=>ak(e,"name",{value:t,configurable:!0});i(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}i(r,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}i(n,"processPreload")},"polyfill")();var rr;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(rr||(rr={}));function Ic(e,t=r=>r){const r=new Map;return e.filter(n=>{const o=t(n);return r.get(o)?!1:(r.set(o,n),!0)})}i(Ic,"removeDuplicates");class Eh{static{i(this,"Diff")}diff(t,r,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const s=this.castInput(t,n),a=this.castInput(r,n),l=this.removeEmpty(this.tokenize(s,n)),u=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(l,u,n,o)}diffWithOptionsObj(t,r,n,o){var s;const a=i(D=>{if(D=this.postProcess(D,n),o){setTimeout(function(){o(D)},0);return}else return D},"done"),l=r.length,u=t.length;let d=1,f=l+u;n.maxEditLength!=null&&(f=Math.min(f,n.maxEditLength));const h=(s=n.timeout)!==null&&s!==void 0?s:1/0,m=Date.now()+h,g=[{oldPos:-1,lastComponent:void 0}];let p=this.extractCommon(g[0],r,t,0,n);if(g[0].oldPos+1>=u&&p+1>=l)return a(this.buildValues(g[0].lastComponent,r,t));let y=-1/0,w=1/0;const k=i(()=>{for(let D=Math.max(y,-d);D<=Math.min(w,d);D+=2){let C;const P=g[D-1],R=g[D+1];P&&(g[D-1]=void 0);let J=!1;if(R){const te=R.oldPos-D;J=R&&0<=te&&te<l}const ee=P&&P.oldPos+1<u;if(!J&&!ee){g[D]=void 0;continue}if(!ee||J&&P.oldPos<R.oldPos?C=this.addToPath(R,!0,!1,0,n):C=this.addToPath(P,!1,!0,1,n),p=this.extractCommon(C,r,t,D,n),C.oldPos+1>=u&&p+1>=l)return a(this.buildValues(C.lastComponent,r,t))||!0;g[D]=C,C.oldPos+1>=u&&(w=Math.min(w,D-1)),p+1>=l&&(y=Math.max(y,D+1))}d++},"execEditLength");if(o)i(function D(){setTimeout(function(){if(d>f||Date.now()>m)return o(void 0);k()||D()},0)},"exec")();else for(;d<=f&&Date.now()<=m;){const D=k();if(D)return D}}addToPath(t,r,n,o,s){const a=t.lastComponent;return a&&!s.oneChangePerToken&&a.added===r&&a.removed===n?{oldPos:t.oldPos+o,lastComponent:{count:a.count+1,added:r,removed:n,previousComponent:a.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:r,removed:n,previousComponent:a}}}extractCommon(t,r,n,o,s){const a=r.length,l=n.length;let u=t.oldPos,d=u-o,f=0;for(;d+1<a&&u+1<l&&this.equals(n[u+1],r[d+1],s);)d++,u++,f++,s.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return f&&!s.oneChangePerToken&&(t.lastComponent={count:f,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,d}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const o=[];let s;for(;t;)o.push(t),s=t.previousComponent,delete t.previousComponent,t=s;o.reverse();const a=o.length;let l=0,u=0,d=0;for(;l<a;l++){const f=o[l];if(f.removed)f.value=this.join(n.slice(d,d+f.count)),d+=f.count;else{if(!f.added&&this.useLongestToken){let h=r.slice(u,u+f.count);h=h.map(function(m,g){const p=n[d+g];return p.length>m.length?p:m}),f.value=this.join(h)}else f.value=this.join(r.slice(u,u+f.count));u+=f.count,f.added||(d+=f.count)}}return o}}function Sg(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}i(Sg,"longestCommonPrefix");function Mg(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}i(Mg,"longestCommonSuffix");function p0(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}i(p0,"replacePrefix");function b0(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}i(b0,"replaceSuffix");function Ca(e,t){return p0(e,t,"")}i(Ca,"removePrefix$1");function lu(e,t){return b0(e,t,"")}i(lu,"removeSuffix$1");function Fg(e,t){return t.slice(0,lk(e,t))}i(Fg,"maximumOverlap");function lk(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const o=Array(n);let s=0;o[0]=0;for(let a=1;a<n;a++){for(t[a]==t[s]?o[a]=o[s]:o[a]=s;s>0&&t[a]!=t[s];)s=o[s];t[a]==t[s]&&s++}s=0;for(let a=r;a<e.length;a++){for(;s>0&&e[a]!=t[s];)s=o[s];e[a]==t[s]&&s++}return s}i(lk,"overlapCount");function Sa(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}i(Sa,"trailingWs");function No(e){const t=e.match(/^\s*/);return t?t[0]:""}i(No,"leadingWs");const Hu="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",uk=new RegExp(`[${Hu}]+|\\s+|[^${Hu}]`,"ug");class ck extends Eh{static{i(this,"WordDiff")}equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const a=r.intlSegmenter;if(a.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const l of Array.from(a.segment(t))){const u=l.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=t.match(uk)||[];const o=[];let s=null;return n.forEach(a=>{/\s/.test(a)?s==null?o.push(a):o.push(o.pop()+a):s!=null&&/\s/.test(s)?o[o.length-1]==s?o.push(o.pop()+a):o.push(s+a):o.push(a),s=a}),o}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,o=null,s=null;return t.forEach(a=>{a.added?o=a:a.removed?s=a:((o||s)&&Tg(n,s,o,a),n=a,o=null,s=null)}),(o||s)&&Tg(n,s,o,null),t}}const dk=new ck;function fk(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?gk(e,t,r):dk.diff(e,t,r)}i(fk,"diffWords");function Tg(e,t,r,n){if(t&&r){const o=No(t.value),s=Sa(t.value),a=No(r.value),l=Sa(r.value);if(e){const u=Sg(o,a);e.value=b0(e.value,a,u),t.value=Ca(t.value,u),r.value=Ca(r.value,u)}if(n){const u=Mg(s,l);n.value=p0(n.value,l,u),t.value=lu(t.value,u),r.value=lu(r.value,u)}}else if(r){if(e){const o=No(r.value);r.value=r.value.substring(o.length)}if(n){const o=No(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=No(n.value),s=No(t.value),a=Sa(t.value),l=Sg(o,s);t.value=Ca(t.value,l);const u=Mg(Ca(o,l),a);t.value=lu(t.value,u),n.value=p0(n.value,o,u),e.value=b0(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=No(n.value),s=Sa(t.value),a=Fg(s,o);t.value=lu(t.value,a)}else if(e){const o=Sa(e.value),s=No(t.value),a=Fg(o,s);t.value=Ca(t.value,a)}}i(Tg,"dedupeWhitespaceInChangeObjects");class hk extends Eh{static{i(this,"WordsWithSpaceDiff")}tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Hu}]+|[^\\S\\n\\r]+|[^${Hu}]`,"ug");return t.match(r)||[]}}const mk=new hk;function gk(e,t,r){return mk.diff(e,t,r)}i(gk,"diffWordsWithSpace");class pk extends Eh{static{i(this,"LineDiff")}constructor(){super(...arguments),this.tokenize=vk}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const bk=new pk;function yk(e,t,r){return bk.diff(e,t,r)}i(yk,"diffLines");function vk(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const s=n[o];o%2&&!t.newlineIsToken?r[r.length-1]+=s:r.push(s)}return r}i(vk,"tokenize$1");function Ng(e,t){return Ey(e,new Map)}i(Ng,"sortObject");function Ey(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((o,s)=>o[0].localeCompare(s[0])).forEach(([o,s])=>{const a=Ey(s,t);n[o]=a}),n}else return e}i(Ey,"recursivelySortObject");var wk=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,$k=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,kk=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Ud={Space_Separator:wk,ID_Start:$k,ID_Continue:kk},wt={isSpaceSeparator(e){return typeof e=="string"&&Ud.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Ud.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Ud.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let y0,vr,co,Zu,Xo,Mn,Kt,Ch,el;var xk=i(function(t,r){y0=String(t),vr="start",co=[],Zu=0,Xo=1,Mn=0,Kt=void 0,Ch=void 0,el=void 0;do Kt=Dk(),Ck[vr]();while(Kt.type!=="eof");return typeof r=="function"?v0({"":el},"",r):el},"parse");function v0(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const s=String(o),a=v0(n,s,r);a===void 0?delete n[s]:Object.defineProperty(n,s,{value:a,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const s=v0(n,o,r);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}i(v0,"internalize");let be,me,Ua,io,Ae;function Dk(){for(be="default",me="",Ua=!1,io=1;;){Ae=wo();const e=Cy[be]();if(e)return e}}i(Dk,"lex");function wo(){if(y0[Zu])return String.fromCodePoint(y0.codePointAt(Zu))}i(wo,"peek");function O(){const e=wo();return e===`
`?(Xo++,Mn=0):e?Mn+=e.length:Mn++,e&&(Zu+=e.length),e}i(O,"read");const Cy={default(){switch(Ae){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":O();return;case"/":O(),be="comment";return;case void 0:return O(),Qe("eof")}if(wt.isSpaceSeparator(Ae)){O();return}return Cy[vr]()},comment(){switch(Ae){case"*":O(),be="multiLineComment";return;case"/":O(),be="singleLineComment";return}throw et(O())},multiLineComment(){switch(Ae){case"*":O(),be="multiLineCommentAsterisk";return;case void 0:throw et(O())}O()},multiLineCommentAsterisk(){switch(Ae){case"*":O();return;case"/":O(),be="default";return;case void 0:throw et(O())}O(),be="multiLineComment"},singleLineComment(){switch(Ae){case`
`:case"\r":case"\u2028":case"\u2029":O(),be="default";return;case void 0:return O(),Qe("eof")}O()},value(){switch(Ae){case"{":case"[":return Qe("punctuator",O());case"n":return O(),bi("ull"),Qe("null",null);case"t":return O(),bi("rue"),Qe("boolean",!0);case"f":return O(),bi("alse"),Qe("boolean",!1);case"-":case"+":O()==="-"&&(io=-1),be="sign";return;case".":me=O(),be="decimalPointLeading";return;case"0":me=O(),be="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":me=O(),be="decimalInteger";return;case"I":return O(),bi("nfinity"),Qe("numeric",1/0);case"N":return O(),bi("aN"),Qe("numeric",NaN);case'"':case"'":Ua=O()==='"',me="",be="string";return}throw et(O())},identifierNameStartEscape(){if(Ae!=="u")throw et(O());O();const e=w0();switch(e){case"$":case"_":break;default:if(!wt.isIdStartChar(e))throw Pg();break}me+=e,be="identifierName"},identifierName(){switch(Ae){case"$":case"_":case"‌":case"‍":me+=O();return;case"\\":O(),be="identifierNameEscape";return}if(wt.isIdContinueChar(Ae)){me+=O();return}return Qe("identifier",me)},identifierNameEscape(){if(Ae!=="u")throw et(O());O();const e=w0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!wt.isIdContinueChar(e))throw Pg();break}me+=e,be="identifierName"},sign(){switch(Ae){case".":me=O(),be="decimalPointLeading";return;case"0":me=O(),be="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":me=O(),be="decimalInteger";return;case"I":return O(),bi("nfinity"),Qe("numeric",io*(1/0));case"N":return O(),bi("aN"),Qe("numeric",NaN)}throw et(O())},zero(){switch(Ae){case".":me+=O(),be="decimalPoint";return;case"e":case"E":me+=O(),be="decimalExponent";return;case"x":case"X":me+=O(),be="hexadecimal";return}return Qe("numeric",io*0)},decimalInteger(){switch(Ae){case".":me+=O(),be="decimalPoint";return;case"e":case"E":me+=O(),be="decimalExponent";return}if(wt.isDigit(Ae)){me+=O();return}return Qe("numeric",io*Number(me))},decimalPointLeading(){if(wt.isDigit(Ae)){me+=O(),be="decimalFraction";return}throw et(O())},decimalPoint(){switch(Ae){case"e":case"E":me+=O(),be="decimalExponent";return}if(wt.isDigit(Ae)){me+=O(),be="decimalFraction";return}return Qe("numeric",io*Number(me))},decimalFraction(){switch(Ae){case"e":case"E":me+=O(),be="decimalExponent";return}if(wt.isDigit(Ae)){me+=O();return}return Qe("numeric",io*Number(me))},decimalExponent(){switch(Ae){case"+":case"-":me+=O(),be="decimalExponentSign";return}if(wt.isDigit(Ae)){me+=O(),be="decimalExponentInteger";return}throw et(O())},decimalExponentSign(){if(wt.isDigit(Ae)){me+=O(),be="decimalExponentInteger";return}throw et(O())},decimalExponentInteger(){if(wt.isDigit(Ae)){me+=O();return}return Qe("numeric",io*Number(me))},hexadecimal(){if(wt.isHexDigit(Ae)){me+=O(),be="hexadecimalInteger";return}throw et(O())},hexadecimalInteger(){if(wt.isHexDigit(Ae)){me+=O();return}return Qe("numeric",io*Number(me))},string(){switch(Ae){case"\\":O(),me+=Ak();return;case'"':if(Ua)return O(),Qe("string",me);me+=O();return;case"'":if(!Ua)return O(),Qe("string",me);me+=O();return;case`
`:case"\r":throw et(O());case"\u2028":case"\u2029":Sk(Ae);break;case void 0:throw et(O())}me+=O()},start(){switch(Ae){case"{":case"[":return Qe("punctuator",O())}be="value"},beforePropertyName(){switch(Ae){case"$":case"_":me=O(),be="identifierName";return;case"\\":O(),be="identifierNameStartEscape";return;case"}":return Qe("punctuator",O());case'"':case"'":Ua=O()==='"',be="string";return}if(wt.isIdStartChar(Ae)){me+=O(),be="identifierName";return}throw et(O())},afterPropertyName(){if(Ae===":")return Qe("punctuator",O());throw et(O())},beforePropertyValue(){be="value"},afterPropertyValue(){switch(Ae){case",":case"}":return Qe("punctuator",O())}throw et(O())},beforeArrayValue(){if(Ae==="]")return Qe("punctuator",O());be="value"},afterArrayValue(){switch(Ae){case",":case"]":return Qe("punctuator",O())}throw et(O())},end(){throw et(O())}};function Qe(e,t){return{type:e,value:t,line:Xo,column:Mn}}i(Qe,"newToken");function bi(e){for(const t of e){if(wo()!==t)throw et(O());O()}}i(bi,"literal");function Ak(){switch(wo()){case"b":return O(),"\b";case"f":return O(),"\f";case"n":return O(),`
`;case"r":return O(),"\r";case"t":return O(),"	";case"v":return O(),"\v";case"0":if(O(),wt.isDigit(wo()))throw et(O());return"\0";case"x":return O(),Ek();case"u":return O(),w0();case`
`:case"\u2028":case"\u2029":return O(),"";case"\r":return O(),wo()===`
`&&O(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw et(O());case void 0:throw et(O())}return O()}i(Ak,"escape");function Ek(){let e="",t=wo();if(!wt.isHexDigit(t)||(e+=O(),t=wo(),!wt.isHexDigit(t)))throw et(O());return e+=O(),String.fromCodePoint(parseInt(e,16))}i(Ek,"hexEscape");function w0(){let e="",t=4;for(;t-- >0;){const r=wo();if(!wt.isHexDigit(r))throw et(O());e+=O()}return String.fromCodePoint(parseInt(e,16))}i(w0,"unicodeEscape");const Ck={start(){if(Kt.type==="eof")throw yi();zd()},beforePropertyName(){switch(Kt.type){case"identifier":case"string":Ch=Kt.value,vr="afterPropertyName";return;case"punctuator":uu();return;case"eof":throw yi()}},afterPropertyName(){if(Kt.type==="eof")throw yi();vr="beforePropertyValue"},beforePropertyValue(){if(Kt.type==="eof")throw yi();zd()},beforeArrayValue(){if(Kt.type==="eof")throw yi();if(Kt.type==="punctuator"&&Kt.value==="]"){uu();return}zd()},afterPropertyValue(){if(Kt.type==="eof")throw yi();switch(Kt.value){case",":vr="beforePropertyName";return;case"}":uu()}},afterArrayValue(){if(Kt.type==="eof")throw yi();switch(Kt.value){case",":vr="beforeArrayValue";return;case"]":uu()}},end(){}};function zd(){let e;switch(Kt.type){case"punctuator":switch(Kt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Kt.value;break}if(el===void 0)el=e;else{const t=co[co.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Ch,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")co.push(e),Array.isArray(e)?vr="beforeArrayValue":vr="beforePropertyName";else{const t=co[co.length-1];t==null?vr="end":Array.isArray(t)?vr="afterArrayValue":vr="afterPropertyValue"}}i(zd,"push");function uu(){co.pop();const e=co[co.length-1];e==null?vr="end":Array.isArray(e)?vr="afterArrayValue":vr="afterPropertyValue"}i(uu,"pop");function et(e){return Ju(e===void 0?`JSON5: invalid end of input at ${Xo}:${Mn}`:`JSON5: invalid character '${Sy(e)}' at ${Xo}:${Mn}`)}i(et,"invalidChar");function yi(){return Ju(`JSON5: invalid end of input at ${Xo}:${Mn}`)}i(yi,"invalidEOF");function Pg(){return Mn-=5,Ju(`JSON5: invalid identifier character at ${Xo}:${Mn}`)}i(Pg,"invalidIdentifier");function Sk(e){console.warn(`JSON5: '${Sy(e)}' in strings is not valid ECMAScript; consider escaping`)}i(Sk,"separatorChar");function Sy(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}i(Sy,"formatChar");function Ju(e){const t=new SyntaxError(e);return t.lineNumber=Xo,t.columnNumber=Mn,t}i(Ju,"syntaxError");var Mk=i(function(t,r,n){const o=[];let s="",a,l,u="",d;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,d=r.quote,r=r.replacer),typeof r=="function")l=r;else if(Array.isArray(r)){a=[];for(const y of r){let w;typeof y=="string"?w=y:(typeof y=="number"||y instanceof String||y instanceof Number)&&(w=String(y)),w!==void 0&&a.indexOf(w)<0&&a.push(w)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),f("",{"":t});function f(y,w){let k=w[y];switch(k!=null&&(typeof k.toJSON5=="function"?k=k.toJSON5(y):typeof k.toJSON=="function"&&(k=k.toJSON(y))),l&&(k=l.call(w,y,k)),k instanceof Number?k=Number(k):k instanceof String?k=String(k):k instanceof Boolean&&(k=k.valueOf()),k){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof k=="string")return h(k);if(typeof k=="number")return String(k);if(typeof k=="object")return Array.isArray(k)?p(k):m(k)}i(f,"serializeProperty");function h(y){const w={"'":.1,'"':.2},k={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let D="";for(let P=0;P<y.length;P++){const R=y[P];switch(R){case"'":case'"':w[R]++,D+=R;continue;case"\0":if(wt.isDigit(y[P+1])){D+="\\x00";continue}}if(k[R]){D+=k[R];continue}if(R<" "){let J=R.charCodeAt(0).toString(16);D+="\\x"+("00"+J).substring(J.length);continue}D+=R}const C=d||Object.keys(w).reduce((P,R)=>w[P]<w[R]?P:R);return D=D.replace(new RegExp(C,"g"),k[C]),C+D+C}i(h,"quoteString");function m(y){if(o.indexOf(y)>=0)throw TypeError("Converting circular structure to JSON5");o.push(y);let w=s;s=s+u;let k=a||Object.keys(y),D=[];for(const P of k){const R=f(P,y);if(R!==void 0){let J=g(P)+":";u!==""&&(J+=" "),J+=R,D.push(J)}}let C;if(D.length===0)C="{}";else{let P;if(u==="")P=D.join(","),C="{"+P+"}";else{let R=`,
`+s;P=D.join(R),C=`{
`+s+P+`,
`+w+"}"}}return o.pop(),s=w,C}i(m,"serializeObject");function g(y){if(y.length===0)return h(y);const w=String.fromCodePoint(y.codePointAt(0));if(!wt.isIdStartChar(w))return h(y);for(let k=w.length;k<y.length;k++)if(!wt.isIdContinueChar(String.fromCodePoint(y.codePointAt(k))))return h(y);return y}i(g,"serializeKey");function p(y){if(o.indexOf(y)>=0)throw TypeError("Converting circular structure to JSON5");o.push(y);let w=s;s=s+u;let k=[];for(let C=0;C<y.length;C++){const P=f(String(C),y);k.push(P!==void 0?P:"null")}let D;if(k.length===0)D="[]";else if(u==="")D="["+k.join(",")+"]";else{let C=`,
`+s,P=k.join(C);D=`[
`+s+P+`,
`+w+"]"}return o.pop(),s=w,D}i(p,"serializeArray")},"stringify");const Fk={parse:xk,stringify:Mk};var Tk=Fk;const My="__@@augment-vir-undefined-sentinel@@__",Nk=new RegExp(`['"]${My}['"]`);function x(e,t){if(typeof e=="string")return e;try{return Tk.stringify(e,(n,o)=>o===void 0?My:typeof o=="bigint"?Number(o):o,t||void 0).split(Nk).join("undefined")}catch{return String(e)}}i(x,"stringify");var Pk=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Fn;(function(e){e.Node="node",e.Web="web"})(Fn||(Fn={}));function Ik(){return Pk?Fn.Node:Fn.Web}i(Ik,"determineRuntimeEnv");const Fy=Ik();function Sh(e){return Fy===e}i(Sh,"isRuntimeEnv");function Ty(e){return e[Fy]()}i(Ty,"perEnv");function Ok(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",o=n?yk:fk,s=[r?"":`
`,x(t&&typeof t=="object"&&!Array.isArray(t)?Ng(t):t,4),`
`].join(""),a=[r?"":`
`,x(e&&typeof e=="object"&&!Array.isArray(e)?Ng(e):e,4),`
`].join(""),l=Bk(n,o(s,a)),u=Sh(Fn.Node);return[[u?go.Green:""," +added (unexpected, added in actual)",u?go.Red:""," -missing (expected, missing from actual)",u?go.Reset:""].join(""),r?`

`:`
`,l].join("")}i(Ok,"prettyDiff");var go;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(go||(go={}));var Yu;(function(e){e.Added="+",e.Removed="-"})(Yu||(Yu={}));function Bk(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(o=>Ig(o,n)).join(`
`)).join(""):t.map(n=>Ig(void 0,n)).join("")}i(Bk,"addDiffColors");function Ig(e,t){if(e!=null&&!e)return"";const r=Sh(Fn.Node),n=t.added?Yu.Added:t.removed?Yu.Removed:e==null?"":" ",o=t.added?go.Green:t.removed?go.Red:go.Reset;return[r?o:"",n,e??t.value,go.Reset].join("")}i(Ig,"addColorToChange");function Ve(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}i(Ve,"getObjectTypedKeys");function Rk(e){return Ve(e).filter(t=>isNaN(Number(t)))}i(Rk,"getEnumKeys");function qr(e){return Rk(e).map(r=>e[r])}i(qr,"getEnumValues");const Lk=[".",":",";",",","?","!"],jk=new RegExp(`[${Lk.join("")}]+$`);function Og(e){return e.replace(jk,"")}i(Og,"removeEndingPunctuation");function Jt(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):x(e)}i(Jt,"extractErrorMessage");function Qi(...e){const t=e.map(s=>Jt(s)).filter(s=>!!Og(s)),r=t[t.length-1]?.endsWith("."),n=t.map(s=>Og(Jt(s)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}i(Qi,"combineErrorMessages");function vt(e){return e instanceof Error?e:new Error(Jt(e))}i(vt,"ensureError");function sa(e,t){const r=vt(e),n=Qi(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}i(sa,"ensureErrorAndPrependMessage");var T;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(T||(T={}));var G;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(G||(G={}));G.ClientError,G.ServerError;T.Continue+"",G.Information,T.SwitchingProtocols+"",G.Information,T.Processing+"",G.Information,T.EarlyHints+"",G.Information,T.Ok+"",G.Success,T.Created+"",G.Success,T.Accepted+"",G.Success,T.NonAuthoritativeInformation+"",G.Success,T.NoContent+"",G.Success,T.ResetContent+"",G.Success,T.PartialContent+"",G.Success,T.MultiStatus+"",G.Success,T.AlreadyReported+"",G.Success,T.ImUsed+"",G.Success,T.MultipleChoices+"",G.Redirect,T.MovedPermanently+"",G.Redirect,T.Found+"",G.Redirect,T.SeeOther+"",G.Redirect,T.NotModified+"",G.Redirect,T.UseProxy+"",G.Redirect,T.Unused+"",G.Redirect,T.TemporaryRedirect+"",G.Redirect,T.PermanentRedirect+"",G.Redirect,T.BadRequest+"",G.ClientError,T.Unauthorized+"",G.ClientError,T.PaymentRequired+"",G.ClientError,T.Forbidden+"",G.ClientError,T.NotFound+"",G.ClientError,T.MethodNotAllowed+"",G.ClientError,T.NotAcceptable+"",G.ClientError,T.ProxyAuthenticationRequired+"",G.ClientError,T.RequestTimeout+"",G.ClientError,T.Conflict+"",G.ClientError,T.Gone+"",G.ClientError,T.LengthRequired+"",G.ClientError,T.PreconditionFailed+"",G.ClientError,T.PayloadTooLarge+"",G.ClientError,T.UriTooLong+"",G.ClientError,T.UnsupportedMediaType+"",G.ClientError,T.RangeNotSatisfiable+"",G.ClientError,T.ExpectationFailed+"",G.ClientError,T.ImATeapot+"",G.ClientError,T.MisdirectedRequest+"",G.ClientError,T.UnprocessableContent+"",G.ClientError,T.Locked+"",G.ClientError,T.FailedDependency+"",G.ClientError,T.TooEarly+"",G.ClientError,T.UpgradeRequired+"",G.ClientError,T.PreconditionRequired+"",G.ClientError,T.TooManyRequests+"",G.ClientError,T.RequestHeaderFieldsTooLarge+"",G.ClientError,T.UnavailableForLegalReasons+"",G.ClientError,T.InternalServerError+"",G.ServerError,T.NotImplemented+"",G.ServerError,T.BadGateway+"",G.ServerError,T.ServiceUnavailable+"",G.ServerError,T.GatewayTimeout+"",G.ServerError,T.HttpVersionNotSupported+"",G.ServerError,T.VariantAlsoNegotiates+"",G.ServerError,T.InsufficientStorage+"",G.ServerError,T.LoopDetected+"",G.ServerError,T.NotExtended+"",G.ServerError,T.NetworkAuthenticationRequired+"",G.ServerError;const Ru={[G.Information]:[T.Continue,T.SwitchingProtocols,T.Processing,T.EarlyHints],[G.Success]:[T.Ok,T.Created,T.Accepted,T.NonAuthoritativeInformation,T.NoContent,T.ResetContent,T.PartialContent,T.MultiStatus,T.AlreadyReported,T.ImUsed],[G.Redirect]:[T.MultipleChoices,T.MovedPermanently,T.Found,T.SeeOther,T.NotModified,T.UseProxy,T.Unused,T.TemporaryRedirect,T.PermanentRedirect],[G.ClientError]:[T.BadRequest,T.Unauthorized,T.PaymentRequired,T.Forbidden,T.NotFound,T.MethodNotAllowed,T.NotAcceptable,T.ProxyAuthenticationRequired,T.RequestTimeout,T.Conflict,T.Gone,T.LengthRequired,T.PreconditionFailed,T.PayloadTooLarge,T.UriTooLong,T.UnsupportedMediaType,T.RangeNotSatisfiable,T.ExpectationFailed,T.ImATeapot,T.MisdirectedRequest,T.UnprocessableContent,T.Locked,T.FailedDependency,T.TooEarly,T.UpgradeRequired,T.PreconditionRequired,T.TooManyRequests,T.RequestHeaderFieldsTooLarge,T.UnavailableForLegalReasons],[G.ServerError]:[T.InternalServerError,T.NotImplemented,T.BadGateway,T.ServiceUnavailable,T.GatewayTimeout,T.HttpVersionNotSupported,T.VariantAlsoNegotiates,T.InsufficientStorage,T.LoopDetected,T.NotExtended,T.NetworkAuthenticationRequired]};function Mh({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}i(Mh,"ensureMinMax");class Xu{static{i(this,"DeferredPromise")}promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(vt(n))}})}}class es extends Error{static{i(this,"LuxonError")}}class _k extends es{static{i(this,"InvalidDateTimeError")}constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Uk extends es{static{i(this,"InvalidIntervalError")}constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class zk extends es{static{i(this,"InvalidDurationError")}constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Es extends es{static{i(this,"ConflictingSpecificationError")}}class Ny extends es{static{i(this,"InvalidUnitError")}constructor(t){super(`Invalid unit ${t}`)}}class hr extends es{static{i(this,"InvalidArgumentError")}}class Po extends es{static{i(this,"ZoneIsAbstractError")}constructor(){super("Zone is an abstract class")}}const W="numeric",Tn="short",Gr="long",Qu={year:W,month:W,day:W},Py={year:W,month:Tn,day:W},Vk={year:W,month:Tn,day:W,weekday:Tn},Iy={year:W,month:Gr,day:W},Oy={year:W,month:Gr,day:W,weekday:Gr},By={hour:W,minute:W},Ry={hour:W,minute:W,second:W},Ly={hour:W,minute:W,second:W,timeZoneName:Tn},jy={hour:W,minute:W,second:W,timeZoneName:Gr},_y={hour:W,minute:W,hourCycle:"h23"},Uy={hour:W,minute:W,second:W,hourCycle:"h23"},zy={hour:W,minute:W,second:W,hourCycle:"h23",timeZoneName:Tn},Vy={hour:W,minute:W,second:W,hourCycle:"h23",timeZoneName:Gr},qy={year:W,month:W,day:W,hour:W,minute:W},Wy={year:W,month:W,day:W,hour:W,minute:W,second:W},Ky={year:W,month:Tn,day:W,hour:W,minute:W},Gy={year:W,month:Tn,day:W,hour:W,minute:W,second:W},qk={year:W,month:Tn,day:W,weekday:Tn,hour:W,minute:W},Hy={year:W,month:Gr,day:W,hour:W,minute:W,timeZoneName:Tn},Zy={year:W,month:Gr,day:W,hour:W,minute:W,second:W,timeZoneName:Tn},Jy={year:W,month:Gr,day:W,weekday:Gr,hour:W,minute:W,timeZoneName:Gr},Yy={year:W,month:Gr,day:W,weekday:Gr,hour:W,minute:W,second:W,timeZoneName:Gr};class Ol{static{i(this,"Zone")}get type(){throw new Po}get name(){throw new Po}get ianaName(){return this.name}get isUniversal(){throw new Po}offsetName(t,r){throw new Po}formatOffset(t,r){throw new Po}offset(t){throw new Po}equals(t){throw new Po}get isValid(){throw new Po}}let Vd=null;class Oc extends Ol{static{i(this,"SystemZone")}static get instance(){return Vd===null&&(Vd=new Oc),Vd}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return lv(t,r,n)}formatOffset(t,r){return tl(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const $0=new Map;function Wk(e){let t=$0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),$0.set(e,t)),t}i(Wk,"makeDTF");const Kk={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Gk(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,s,a,l,u,d,f]=n;return[a,o,s,l,u,d,f]}i(Gk,"hackyOffset");function Hk(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:s,value:a}=r[o],l=Kk[s];s==="era"?n[l]=a:ae(l)||(n[l]=parseInt(a,10))}return n}i(Hk,"partsOffset");const qd=new Map;class ko extends Ol{static{i(this,"IANAZone")}static create(t){let r=qd.get(t);return r===void 0&&qd.set(t,r=new ko(t)),r}static resetCache(){qd.clear(),$0.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=ko.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return lv(t,r,n,this.name)}formatOffset(t,r){return tl(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=Wk(this.name);let[o,s,a,l,u,d,f]=n.formatToParts?Hk(n,r):Gk(n,r);l==="BC"&&(o=-Math.abs(o)+1);const m=Rc({year:o,month:s,day:a,hour:u===24?0:u,minute:d,second:f,millisecond:0});let g=+r;const p=g%1e3;return g-=p>=0?p:1e3+p,(m-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Bg={};function Zk(e,t={}){const r=JSON.stringify([e,t]);let n=Bg[r];return n||(n=new Intl.ListFormat(e,t),Bg[r]=n),n}i(Zk,"getCachedLF");const k0=new Map;function x0(e,t={}){const r=JSON.stringify([e,t]);let n=k0.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),k0.set(r,n)),n}i(x0,"getCachedDTF");const D0=new Map;function Jk(e,t={}){const r=JSON.stringify([e,t]);let n=D0.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),D0.set(r,n)),n}i(Jk,"getCachedINF");const A0=new Map;function Yk(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let s=A0.get(o);return s===void 0&&(s=new Intl.RelativeTimeFormat(e,t),A0.set(o,s)),s}i(Yk,"getCachedRTF");let za=null;function Xk(){return za||(za=new Intl.DateTimeFormat().resolvedOptions().locale,za)}i(Xk,"systemLocale");const E0=new Map;function Xy(e){let t=E0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),E0.set(e,t)),t}i(Xy,"getCachedIntResolvedOptions");const C0=new Map;function Qk(e){let t=C0.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...Qy,...t}),C0.set(e,t)}return t}i(Qk,"getCachedWeekInfo");function ex(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=x0(e).resolvedOptions(),o=e}catch{const u=e.substring(0,r);n=x0(u).resolvedOptions(),o=u}const{numberingSystem:s,calendar:a}=n;return[o,s,a]}}i(ex,"parseLocaleString");function tx(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}i(tx,"intlConfigString");function rx(e){const t=[];for(let r=1;r<=12;r++){const n=ue.utc(2009,r,1);t.push(e(n))}return t}i(rx,"mapMonths");function nx(e){const t=[];for(let r=1;r<=7;r++){const n=ue.utc(2016,11,13+r);t.push(e(n))}return t}i(nx,"mapWeekdays");function cu(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}i(cu,"listStuff");function ox(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Xy(e.locale).numberingSystem==="latn"}i(ox,"supportsFastNumbers");class ix{static{i(this,"PolyNumberFormatter")}constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:s,...a}=n;if(!r||Object.keys(a).length>0){const l={useGrouping:!1,...n};n.padTo>0&&(l.minimumIntegerDigits=n.padTo),this.inf=Jk(t,l)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Ih(t,3);return Dt(r,this.padTo)}}}class sx{static{i(this,"PolyDateFormatter")}constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),l=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&ko.create(l).valid?(o=l,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||o,this.dtf=x0(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class ax{static{i(this,"PolyRelFormatter")}constructor(t,r,n){this.opts={style:"long",...n},!r&&sv()&&(this.rtf=Yk(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Mx(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Qy={firstDay:1,minimalDays:4,weekend:[6,7]};class Le{static{i(this,"Locale")}static fromOpts(t){return Le.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,s=!1){const a=t||ut.defaultLocale,l=a||(s?"en-US":Xk()),u=r||ut.defaultNumberingSystem,d=n||ut.defaultOutputCalendar,f=M0(o)||ut.defaultWeekSettings;return new Le(l,u,d,f,a)}static resetCache(){za=null,k0.clear(),D0.clear(),A0.clear(),E0.clear(),C0.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return Le.create(t,r,n,o)}constructor(t,r,n,o,s){const[a,l,u]=ex(t);this.locale=a,this.numberingSystem=r||l||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=tx(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=ox(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Le.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,M0(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return cu(this,t,dv,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const o=r?{month:t,day:"numeric"}:{month:t},s=r?"format":"standalone";if(!this.monthsCache[s][t]){const a=n?l=>this.dtFormatter(l,o).format():l=>this.extract(l,o,"month");this.monthsCache[s][t]=rx(a)}return this.monthsCache[s][t]})}weekdays(t,r=!1){return cu(this,t,mv,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=nx(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return cu(this,void 0,()=>gv,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[ue.utc(2016,11,13,9),ue.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return cu(this,t,pv,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[ue.utc(-40,1,1),ue.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),s=o.formatToParts(),a=s.find(l=>l.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new ix(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new sx(t,this.intl,r)}relFormatter(t={}){return new ax(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Zk(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Xy(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:av()?Qk(this.locale):Qy}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Wd=null;class wr extends Ol{static{i(this,"FixedOffsetZone")}static get utcInstance(){return Wd===null&&(Wd=new wr(0)),Wd}static instance(t){return t===0?wr.utcInstance:new wr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new wr(Lc(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${tl(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${tl(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return tl(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class lx extends Ol{static{i(this,"InvalidZone")}constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Uo(e,t){if(ae(e)||e===null)return t;if(e instanceof Ol)return e;if(mx(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Oc.instance:r==="utc"||r==="gmt"?wr.utcInstance:wr.parseSpecifier(r)||ko.create(e)}else return Go(e)?wr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new lx(e)}i(Uo,"normalizeZone");const Fh={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Rg={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},ux=Fh.hanidec.replace(/[\[|\]]/g,"").split("");function cx(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Fh.hanidec)!==-1)t+=ux.indexOf(e[r]);else for(const o in Rg){const[s,a]=Rg[o];n>=s&&n<=a&&(t+=n-s)}}return parseInt(t,10)}else return t}i(cx,"parseDigits");const S0=new Map;function dx(){S0.clear()}i(dx,"resetDigitRegexCache");function Dn({numberingSystem:e},t=""){const r=e||"latn";let n=S0.get(r);n===void 0&&(n=new Map,S0.set(r,n));let o=n.get(t);return o===void 0&&(o=new RegExp(`${Fh[r]}${t}`),n.set(t,o)),o}i(Dn,"digitRegex");let Lg=i(()=>Date.now(),"now"),jg="system",_g=null,Ug=null,zg=null,Vg=60,qg,Wg=null;class ut{static{i(this,"Settings")}static get now(){return Lg}static set now(t){Lg=t}static set defaultZone(t){jg=t}static get defaultZone(){return Uo(jg,Oc.instance)}static get defaultLocale(){return _g}static set defaultLocale(t){_g=t}static get defaultNumberingSystem(){return Ug}static set defaultNumberingSystem(t){Ug=t}static get defaultOutputCalendar(){return zg}static set defaultOutputCalendar(t){zg=t}static get defaultWeekSettings(){return Wg}static set defaultWeekSettings(t){Wg=M0(t)}static get twoDigitCutoffYear(){return Vg}static set twoDigitCutoffYear(t){Vg=t%100}static get throwOnInvalid(){return qg}static set throwOnInvalid(t){qg=t}static resetCaches(){Le.resetCache(),ko.resetCache(),ue.resetCache(),dx()}}class Sn{static{i(this,"Invalid")}constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const ev=[0,31,59,90,120,151,181,212,243,273,304,334],tv=[0,31,60,91,121,152,182,213,244,274,305,335];function hn(e,t){return new Sn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}i(hn,"unitOutOfRange");function Th(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}i(Th,"dayOfWeek");function rv(e,t,r){return r+(Bl(e)?tv:ev)[t-1]}i(rv,"computeOrdinal");function nv(e,t){const r=Bl(e)?tv:ev,n=r.findIndex(s=>s<t),o=t-r[n];return{month:n+1,day:o}}i(nv,"uncomputeOrdinal");function Nh(e,t){return(e-t+7)%7+1}i(Nh,"isoWeekdayToLocal");function ec(e,t=4,r=1){const{year:n,month:o,day:s}=e,a=rv(n,o,s),l=Nh(Th(n,o,s),r);let u=Math.floor((a-l+14-t)/7),d;return u<1?(d=n-1,u=cl(d,t,r)):u>cl(n,t,r)?(d=n+1,u=1):d=n,{weekYear:d,weekNumber:u,weekday:l,...jc(e)}}i(ec,"gregorianToWeek");function Kg(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:s}=e,a=Nh(Th(n,1,t),r),l=Ts(n);let u=o*7+s-a-7+t,d;u<1?(d=n-1,u+=Ts(d)):u>l?(d=n+1,u-=Ts(n)):d=n;const{month:f,day:h}=nv(d,u);return{year:d,month:f,day:h,...jc(e)}}i(Kg,"weekToGregorian");function Kd(e){const{year:t,month:r,day:n}=e,o=rv(t,r,n);return{year:t,ordinal:o,...jc(e)}}i(Kd,"gregorianToOrdinal");function Gg(e){const{year:t,ordinal:r}=e,{month:n,day:o}=nv(t,r);return{year:t,month:n,day:o,...jc(e)}}i(Gg,"ordinalToGregorian");function Hg(e,t){if(!ae(e.localWeekday)||!ae(e.localWeekNumber)||!ae(e.localWeekYear)){if(!ae(e.weekday)||!ae(e.weekNumber)||!ae(e.weekYear))throw new Es("Cannot mix locale-based week fields with ISO-based week fields");return ae(e.localWeekday)||(e.weekday=e.localWeekday),ae(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),ae(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}i(Hg,"usesLocalWeekValues");function fx(e,t=4,r=1){const n=Bc(e.weekYear),o=mn(e.weekNumber,1,cl(e.weekYear,t,r)),s=mn(e.weekday,1,7);return n?o?s?!1:hn("weekday",e.weekday):hn("week",e.weekNumber):hn("weekYear",e.weekYear)}i(fx,"hasInvalidWeekData");function hx(e){const t=Bc(e.year),r=mn(e.ordinal,1,Ts(e.year));return t?r?!1:hn("ordinal",e.ordinal):hn("year",e.year)}i(hx,"hasInvalidOrdinalData");function ov(e){const t=Bc(e.year),r=mn(e.month,1,12),n=mn(e.day,1,tc(e.year,e.month));return t?r?n?!1:hn("day",e.day):hn("month",e.month):hn("year",e.year)}i(ov,"hasInvalidGregorianData");function iv(e){const{hour:t,minute:r,second:n,millisecond:o}=e,s=mn(t,0,23)||t===24&&r===0&&n===0&&o===0,a=mn(r,0,59),l=mn(n,0,59),u=mn(o,0,999);return s?a?l?u?!1:hn("millisecond",o):hn("second",n):hn("minute",r):hn("hour",t)}i(iv,"hasInvalidTimeData");function ae(e){return typeof e>"u"}i(ae,"isUndefined");function Go(e){return typeof e=="number"}i(Go,"isNumber");function Bc(e){return typeof e=="number"&&e%1===0}i(Bc,"isInteger");function mx(e){return typeof e=="string"}i(mx,"isString$1");function gx(e){return Object.prototype.toString.call(e)==="[object Date]"}i(gx,"isDate");function sv(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}i(sv,"hasRelative");function av(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}i(av,"hasLocaleWeekInfo");function px(e){return Array.isArray(e)?e:[e]}i(px,"maybeArray");function Zg(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const s=[t(o),o];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}i(Zg,"bestBy");function bx(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}i(bx,"pick");function _s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}i(_s,"hasOwnProperty$1");function M0(e){if(e==null)return null;if(typeof e!="object")throw new hr("Week settings must be an object");if(!mn(e.firstDay,1,7)||!mn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!mn(t,1,7)))throw new hr("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}i(M0,"validateWeekSettings");function mn(e,t,r){return Bc(e)&&e>=t&&e<=r}i(mn,"integerBetween");function yx(e,t){return e-t*Math.floor(e/t)}i(yx,"floorMod");function Dt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}i(Dt,"padStart");function Lo(e){if(!(ae(e)||e===null||e===""))return parseInt(e,10)}i(Lo,"parseInteger");function vi(e){if(!(ae(e)||e===null||e===""))return parseFloat(e)}i(vi,"parseFloating");function Ph(e){if(!(ae(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}i(Ph,"parseMillis");function Ih(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}i(Ih,"roundTo");function Bl(e){return e%4===0&&(e%100!==0||e%400===0)}i(Bl,"isLeapYear");function Ts(e){return Bl(e)?366:365}i(Ts,"daysInYear");function tc(e,t){const r=yx(t-1,12)+1,n=e+(t-r)/12;return r===2?Bl(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}i(tc,"daysInMonth");function Rc(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}i(Rc,"objToLocalTS");function Jg(e,t,r){return-Nh(Th(e,1,t),r)+t-1}i(Jg,"firstWeekOffset");function cl(e,t=4,r=1){const n=Jg(e,t,r),o=Jg(e+1,t,r);return(Ts(e)-n+o)/7}i(cl,"weeksInWeekYear");function F0(e){return e>99?e:e>ut.twoDigitCutoffYear?1900+e:2e3+e}i(F0,"untruncateYear");function lv(e,t,r,n=null){const o=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const a={timeZoneName:t,...s},l=new Intl.DateTimeFormat(r,a).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return l?l.value:null}i(lv,"parseZoneInfo");function Lc(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}i(Lc,"signedOffset");function uv(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new hr(`Invalid unit value ${e}`);return t}i(uv,"asNumber");function rc(e,t){const r={};for(const n in e)if(_s(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=uv(o)}return r}i(rc,"normalizeObject");function tl(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${Dt(r,2)}:${Dt(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${Dt(r,2)}${Dt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}i(tl,"formatOffset");function jc(e){return bx(e,["hour","minute","second","millisecond"])}i(jc,"timeObject");const vx=["January","February","March","April","May","June","July","August","September","October","November","December"],cv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wx=["J","F","M","A","M","J","J","A","S","O","N","D"];function dv(e){switch(e){case"narrow":return[...wx];case"short":return[...cv];case"long":return[...vx];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}i(dv,"months");const fv=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],hv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],$x=["M","T","W","T","F","S","S"];function mv(e){switch(e){case"narrow":return[...$x];case"short":return[...hv];case"long":return[...fv];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}i(mv,"weekdays");const gv=["AM","PM"],kx=["Before Christ","Anno Domini"],xx=["BC","AD"],Dx=["B","A"];function pv(e){switch(e){case"narrow":return[...Dx];case"short":return[...xx];case"long":return[...kx];default:return null}}i(pv,"eras");function Ax(e){return gv[e.hour<12?0:1]}i(Ax,"meridiemForDateTime");function Ex(e,t){return mv(t)[e.weekday-1]}i(Ex,"weekdayForDateTime");function Cx(e,t){return dv(t)[e.month-1]}i(Cx,"monthForDateTime");function Sx(e,t){return pv(t)[e.year<0?0:1]}i(Sx,"eraForDateTime");function Mx(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&s){const h=e==="days";switch(t){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,l=Math.abs(t),u=l===1,d=o[e],f=n?u?d[1]:d[2]||d[1]:u?o[e][0]:e;return a?`${l} ${f} ago`:`in ${l} ${f}`}i(Mx,"formatRelativeTime");function Yg(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}i(Yg,"stringifyTokens");const Fx={D:Qu,DD:Py,DDD:Iy,DDDD:Oy,t:By,tt:Ry,ttt:Ly,tttt:jy,T:_y,TT:Uy,TTT:zy,TTTT:Vy,f:qy,ff:Ky,fff:Hy,ffff:Jy,F:Wy,FF:Gy,FFF:Zy,FFFF:Yy};class gr{static{i(this,"Formatter")}static create(t,r={}){return new gr(t,r)}static parseFormat(t){let r=null,n="",o=!1;const s=[];for(let a=0;a<t.length;a++){const l=t.charAt(a);l==="'"?((n.length>0||o)&&s.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",o=!o):o||l===r?n+=l:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=l,r=l)}return n.length>0&&s.push({literal:o||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(t){return Fx[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return Dt(t,r);const o={...this.opts};return r>0&&(o.padTo=r),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=i((g,p)=>this.loc.extract(t,g,p),"string"),a=i(g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"","formatOffset"),l=i(()=>n?Ax(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),"meridiem"),u=i((g,p)=>n?Cx(t,g):s(p?{month:g}:{month:g,day:"numeric"},"month"),"month"),d=i((g,p)=>n?Ex(t,g):s(p?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),"weekday"),f=i(g=>{const p=gr.macroTokenToFormatOpts(g);return p?this.formatWithSystemDefault(t,p):g},"maybeMacro"),h=i(g=>n?Sx(t,g):s({era:g},"era"),"era"),m=i(g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return l();case"d":return o?s({day:"numeric"},"day"):this.num(t.day);case"dd":return o?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return d("short",!0);case"cccc":return d("long",!0);case"ccccc":return d("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return d("short",!1);case"EEEE":return d("long",!1);case"EEEEE":return d("narrow",!1);case"L":return o?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?s({month:"numeric"},"month"):this.num(t.month);case"MM":return o?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?s({year:"numeric"},"year"):this.num(t.year);case"yy":return o?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return f(g)}},"tokenToString");return Yg(gr.parseFormat(r),m)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=i(f=>{switch(f[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},"tokenToField"),s=i((f,h)=>m=>{const g=o(m);if(g){const p=h.isNegativeDuration&&g!==h.largestUnit?n:1;let y;return this.opts.signMode==="negativeLargestOnly"&&g!==h.largestUnit?y="never":this.opts.signMode==="all"?y="always":y="auto",this.num(f.get(g)*p,m.length,y)}else return m},"tokenToString"),a=gr.parseFormat(r),l=a.reduce((f,{literal:h,val:m})=>h?f:f.concat(m),[]),u=t.shiftTo(...l.map(o).filter(f=>f)),d={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Yg(a,s(u,d))}}const bv=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function aa(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}i(aa,"combineRegexes");function la(...e){return t=>e.reduce(([r,n,o],s)=>{const[a,l,u]=s(t,o);return[{...r,...a},l||n,u]},[{},null,1]).slice(0,2)}i(la,"combineExtractors");function ua(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}i(ua,"parse$2");function yv(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=Lo(t[r+o]);return[n,null,r+o]}}i(yv,"simpleParse");const vv=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,Tx=`(?:${vv.source}?(?:\\[(${bv.source})\\])?)?`,Oh=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,wv=RegExp(`${Oh.source}${Tx}`),Bh=RegExp(`(?:[Tt]${wv.source})?`),Nx=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Px=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ix=/(\d{4})-?(\d{3})/,Ox=yv("weekYear","weekNumber","weekDay"),Bx=yv("year","ordinal"),Rx=/(\d{4})-(\d\d)-(\d\d)/,$v=RegExp(`${Oh.source} ?(?:${vv.source}|(${bv.source}))?`),Lx=RegExp(`(?: ${$v.source})?`);function Ns(e,t,r){const n=e[t];return ae(n)?r:Lo(n)}i(Ns,"int");function jx(e,t){return[{year:Ns(e,t),month:Ns(e,t+1,1),day:Ns(e,t+2,1)},null,t+3]}i(jx,"extractISOYmd");function ca(e,t){return[{hours:Ns(e,t,0),minutes:Ns(e,t+1,0),seconds:Ns(e,t+2,0),milliseconds:Ph(e[t+3])},null,t+4]}i(ca,"extractISOTime");function Rl(e,t){const r=!e[t]&&!e[t+1],n=Lc(e[t+1],e[t+2]),o=r?null:wr.instance(n);return[{},o,t+3]}i(Rl,"extractISOOffset");function Ll(e,t){const r=e[t]?ko.create(e[t]):null;return[{},r,t+1]}i(Ll,"extractIANAZone");const _x=RegExp(`^T?${Oh.source}$`),Ux=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function zx(e){const[t,r,n,o,s,a,l,u,d]=e,f=t[0]==="-",h=u&&u[0]==="-",m=i((g,p=!1)=>g!==void 0&&(p||g&&f)?-g:g,"maybeNegate");return[{years:m(vi(r)),months:m(vi(n)),weeks:m(vi(o)),days:m(vi(s)),hours:m(vi(a)),minutes:m(vi(l)),seconds:m(vi(u),u==="-0"),milliseconds:m(Ph(d),h)}]}i(zx,"extractISODuration");const Vx={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Rh(e,t,r,n,o,s,a){const l={year:t.length===2?F0(Lo(t)):Lo(t),month:cv.indexOf(r)+1,day:Lo(n),hour:Lo(o),minute:Lo(s)};return a&&(l.second=Lo(a)),e&&(l.weekday=e.length>3?fv.indexOf(e)+1:hv.indexOf(e)+1),l}i(Rh,"fromStrings");const qx=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Wx(e){const[,t,r,n,o,s,a,l,u,d,f,h]=e,m=Rh(t,o,n,r,s,a,l);let g;return u?g=Vx[u]:d?g=0:g=Lc(f,h),[m,new wr(g)]}i(Wx,"extractRFC2822");function Kx(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}i(Kx,"preprocessRFC2822");const Gx=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Hx=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Zx=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Xg(e){const[,t,r,n,o,s,a,l]=e;return[Rh(t,o,n,r,s,a,l),wr.utcInstance]}i(Xg,"extractRFC1123Or850");function Jx(e){const[,t,r,n,o,s,a,l]=e;return[Rh(t,l,r,n,o,s,a),wr.utcInstance]}i(Jx,"extractASCII");const Yx=aa(Nx,Bh),Xx=aa(Px,Bh),Qx=aa(Ix,Bh),e4=aa(wv),kv=la(jx,ca,Rl,Ll),t4=la(Ox,ca,Rl,Ll),r4=la(Bx,ca,Rl,Ll),n4=la(ca,Rl,Ll);function o4(e){return ua(e,[Yx,kv],[Xx,t4],[Qx,r4],[e4,n4])}i(o4,"parseISODate");function i4(e){return ua(Kx(e),[qx,Wx])}i(i4,"parseRFC2822Date");function s4(e){return ua(e,[Gx,Xg],[Hx,Xg],[Zx,Jx])}i(s4,"parseHTTPDate");function a4(e){return ua(e,[Ux,zx])}i(a4,"parseISODuration");const l4=la(ca);function u4(e){return ua(e,[_x,l4])}i(u4,"parseISOTimeOnly");const c4=aa(Rx,Lx),d4=aa($v),f4=la(ca,Rl,Ll);function h4(e){return ua(e,[c4,kv],[d4,f4])}i(h4,"parseSQL");const Qg="Invalid Duration",xv={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},m4={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...xv},ln=146097/400,gs=146097/4800,g4={years:{quarters:4,months:12,weeks:ln/7,days:ln,hours:ln*24,minutes:ln*24*60,seconds:ln*24*60*60,milliseconds:ln*24*60*60*1e3},quarters:{months:3,weeks:ln/28,days:ln/4,hours:ln*24/4,minutes:ln*24*60/4,seconds:ln*24*60*60/4,milliseconds:ln*24*60*60*1e3/4},months:{weeks:gs/7,days:gs,hours:gs*24,minutes:gs*24*60,seconds:gs*24*60*60,milliseconds:gs*24*60*60*1e3},...xv},Ti=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],p4=Ti.slice(0).reverse();function no(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new Ce(n)}i(no,"clone$1");function Dv(e,t){let r=t.milliseconds??0;for(const n of p4.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}i(Dv,"durationToMillis");function ep(e,t){const r=Dv(e,t)<0?-1:1;Ti.reduceRight((n,o)=>{if(ae(t[o]))return n;if(n){const s=t[n]*r,a=e[o][n],l=Math.floor(s/a);t[o]+=l*r,t[n]-=l*a*r}return o},null),Ti.reduce((n,o)=>{if(ae(t[o]))return n;if(n){const s=t[n]%1;t[n]-=s,t[o]+=s*e[n][o]}return o},null)}i(ep,"normalizeValues");function tp(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}i(tp,"removeZeroes");class Ce{static{i(this,"Duration")}constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?g4:m4;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Le.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return Ce.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new hr(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new Ce({values:rc(t,Ce.normalizeUnit),loc:Le.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Go(t))return Ce.fromMillis(t);if(Ce.isDuration(t))return t;if(typeof t=="object")return Ce.fromObject(t);throw new hr(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=a4(t);return n?Ce.fromObject(n,r):Ce.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=u4(t);return n?Ce.fromObject(n,r):Ce.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new hr("need to specify a reason the Duration is invalid");const n=t instanceof Sn?t:new Sn(t,r);if(ut.throwOnInvalid)throw new zk(n);return new Ce({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Ny(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?gr.create(this.loc,n).formatDurationFromString(this,t):Qg}toHuman(t={}){if(!this.isValid)return Qg;const r=t.showZeros!==!1,n=Ti.map(o=>{const s=this.values[o];return ae(s)||s===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:o.slice(0,-1)}).format(s)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Ih(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},ue.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Dv(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=Ce.fromDurationLike(t),n={};for(const o of Ti)(_s(r.values,o)||_s(this.values,o))&&(n[o]=r.get(o)+this.get(o));return no(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=Ce.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=uv(t(this.values[n],n));return no(this,{values:r},!0)}get(t){return this[Ce.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...rc(t,Ce.normalizeUnit)};return no(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return no(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return ep(this.matrix,t),no(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=tp(this.normalize().shiftToAll().toObject());return no(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>Ce.normalizeUnit(a));const r={},n={},o=this.toObject();let s;for(const a of Ti)if(t.indexOf(a)>=0){s=a;let l=0;for(const d in n)l+=this.matrix[d][a]*n[d],n[d]=0;Go(o[a])&&(l+=o[a]);const u=Math.trunc(l);r[a]=u,n[a]=(l*1e3-u*1e3)/1e3}else Go(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[s]+=a===s?n[a]:n[a]/this.matrix[s][a]);return ep(this.matrix,r),no(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return no(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=tp(this.values);return no(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}i(r,"eq");for(const n of Ti)if(!r(this.values[n],t.values[n]))return!1;return!0}}const ps="Invalid Interval";function b4(e,t){return!e||!e.isValid?pt.invalid("missing or invalid start"):!t||!t.isValid?pt.invalid("missing or invalid end"):t<e?pt.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}i(b4,"validateStartEnd");class pt{static{i(this,"Interval")}constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new hr("need to specify a reason the Interval is invalid");const n=t instanceof Sn?t:new Sn(t,r);if(ut.throwOnInvalid)throw new Uk(n);return new pt({invalid:n})}static fromDateTimes(t,r){const n=Ma(t),o=Ma(r),s=b4(n,o);return s??new pt({start:n,end:o})}static after(t,r){const n=Ce.fromDurationLike(r),o=Ma(t);return pt.fromDateTimes(o,o.plus(n))}static before(t,r){const n=Ce.fromDurationLike(r),o=Ma(t);return pt.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let s,a;try{s=ue.fromISO(n,r),a=s.isValid}catch{a=!1}let l,u;try{l=ue.fromISO(o,r),u=l.isValid}catch{u=!1}if(a&&u)return pt.fromDateTimes(s,l);if(a){const d=Ce.fromISO(o,r);if(d.isValid)return pt.after(s,d)}else if(u){const d=Ce.fromISO(n,r);if(d.isValid)return pt.before(l,d)}}return pt.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?pt.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Ma).filter(a=>this.contains(a)).sort((a,l)=>a.toMillis()-l.toMillis()),n=[];let{s:o}=this,s=0;for(;o<this.e;){const a=r[s]||this.e,l=+a>+this.e?this.e:a;n.push(pt.fromDateTimes(o,l)),o=l,s+=1}return n}splitBy(t){const r=Ce.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,s;const a=[];for(;n<this.e;){const l=this.start.plus(r.mapUnits(u=>u*o));s=+l>+this.e?this.e:l,a.push(pt.fromDateTimes(n,s)),n=s,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:pt.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return pt.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,s)=>o.s-s.s).reduce(([o,s],a)=>s?s.overlaps(a)||s.abutsStart(a)?[o,s.union(a)]:[o.concat([s]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),a=Array.prototype.concat(...s),l=a.sort((u,d)=>u.time-d.time);for(const u of l)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&o.push(pt.fromDateTimes(r,u.time)),r=null);return pt.merge(o)}difference(...t){return pt.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ps}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Qu,r={}){return this.isValid?gr.create(this.s.loc.clone(r),t).formatInterval(this):ps}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:ps}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ps}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:ps}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:ps}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):Ce.invalid(this.invalidReason)}mapEndpoints(t){return pt.fromDateTimes(t(this.s),t(this.e))}}class du{static{i(this,"Info")}static hasDST(t=ut.defaultZone){const r=ue.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return ko.isValidZone(t)}static normalizeZone(t){return Uo(t,ut.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Le.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Le.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Le.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:s="gregory"}={}){return(o||Le.create(r,n,s)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:s="gregory"}={}){return(o||Le.create(r,n,s)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Le.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Le.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Le.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Le.create(r,null,"gregory").eras(t)}static features(){return{relative:sv(),localeWeek:av()}}}function rp(e,t){const r=i(o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),"utcDayStart"),n=r(t)-r(e);return Math.floor(Ce.fromMillis(n).as("days"))}i(rp,"dayDiff");function y4(e,t,r){const n=[["years",(u,d)=>d.year-u.year],["quarters",(u,d)=>d.quarter-u.quarter+(d.year-u.year)*4],["months",(u,d)=>d.month-u.month+(d.year-u.year)*12],["weeks",(u,d)=>{const f=rp(u,d);return(f-f%7)/7}],["days",rp]],o={},s=e;let a,l;for(const[u,d]of n)r.indexOf(u)>=0&&(a=u,o[u]=d(e,t),l=s.plus(o),l>t?(o[u]--,e=s.plus(o),e>t&&(l=e,o[u]--,e=s.plus(o))):e=l);return[e,o,l,a]}i(y4,"highOrderDiffs");function v4(e,t,r,n){let[o,s,a,l]=y4(e,t,r);const u=t-o,d=r.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);d.length===0&&(a<t&&(a=o.plus({[l]:1})),a!==o&&(s[l]=(s[l]||0)+u/(a-o)));const f=Ce.fromObject(s,n);return d.length>0?Ce.fromMillis(u,n).shiftTo(...d).plus(f):f}i(v4,"diff");const w4="missing Intl.DateTimeFormat.formatToParts support";function Ie(e,t=r=>r){return{regex:e,deser:i(([r])=>t(cx(r)),"deser")}}i(Ie,"intUnit");const $4=" ",Av=`[ ${$4}]`,Ev=new RegExp(Av,"g");function k4(e){return e.replace(/\./g,"\\.?").replace(Ev,Av)}i(k4,"fixListRegex");function np(e){return e.replace(/\./g,"").replace(Ev," ").toLowerCase()}i(np,"stripInsensitivities");function An(e,t){return e===null?null:{regex:RegExp(e.map(k4).join("|")),deser:i(([r])=>e.findIndex(n=>np(r)===np(n))+t,"deser")}}i(An,"oneOf");function op(e,t){return{regex:e,deser:i(([,r,n])=>Lc(r,n),"deser"),groups:t}}i(op,"offset");function fu(e){return{regex:e,deser:i(([t])=>t,"deser")}}i(fu,"simple");function x4(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}i(x4,"escapeToken");function D4(e,t){const r=Dn(t),n=Dn(t,"{2}"),o=Dn(t,"{3}"),s=Dn(t,"{4}"),a=Dn(t,"{6}"),l=Dn(t,"{1,2}"),u=Dn(t,"{1,3}"),d=Dn(t,"{1,6}"),f=Dn(t,"{1,9}"),h=Dn(t,"{2,4}"),m=Dn(t,"{4,6}"),g=i(w=>({regex:RegExp(x4(w.val)),deser:i(([k])=>k,"deser"),literal:!0}),"literal"),y=i(w=>{if(e.literal)return g(w);switch(w.val){case"G":return An(t.eras("short"),0);case"GG":return An(t.eras("long"),0);case"y":return Ie(d);case"yy":return Ie(h,F0);case"yyyy":return Ie(s);case"yyyyy":return Ie(m);case"yyyyyy":return Ie(a);case"M":return Ie(l);case"MM":return Ie(n);case"MMM":return An(t.months("short",!0),1);case"MMMM":return An(t.months("long",!0),1);case"L":return Ie(l);case"LL":return Ie(n);case"LLL":return An(t.months("short",!1),1);case"LLLL":return An(t.months("long",!1),1);case"d":return Ie(l);case"dd":return Ie(n);case"o":return Ie(u);case"ooo":return Ie(o);case"HH":return Ie(n);case"H":return Ie(l);case"hh":return Ie(n);case"h":return Ie(l);case"mm":return Ie(n);case"m":return Ie(l);case"q":return Ie(l);case"qq":return Ie(n);case"s":return Ie(l);case"ss":return Ie(n);case"S":return Ie(u);case"SSS":return Ie(o);case"u":return fu(f);case"uu":return fu(l);case"uuu":return Ie(r);case"a":return An(t.meridiems(),0);case"kkkk":return Ie(s);case"kk":return Ie(h,F0);case"W":return Ie(l);case"WW":return Ie(n);case"E":case"c":return Ie(r);case"EEE":return An(t.weekdays("short",!1),1);case"EEEE":return An(t.weekdays("long",!1),1);case"ccc":return An(t.weekdays("short",!0),1);case"cccc":return An(t.weekdays("long",!0),1);case"Z":case"ZZ":return op(new RegExp(`([+-]${l.source})(?::(${n.source}))?`),2);case"ZZZ":return op(new RegExp(`([+-]${l.source})(${n.source})?`),2);case"z":return fu(/[a-z_+-/]{1,256}?/i);case" ":return fu(/[^\S\n\r]/);default:return g(w)}},"unitate")(e)||{invalidReason:w4};return y.token=e,y}i(D4,"unitForToken");const A4={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function E4(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const s=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let l=A4[a];if(typeof l=="object"&&(l=l[s]),l)return{literal:!1,val:l}}i(E4,"tokenForPart");function C4(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}i(C4,"buildRegex");function S4(e,t,r){const n=e.match(t);if(n){const o={};let s=1;for(const a in r)if(_s(r,a)){const l=r[a],u=l.groups?l.groups+1:1;!l.literal&&l.token&&(o[l.token.val[0]]=l.deser(n.slice(s,s+u))),s+=u}return[n,o]}else return[n,{}]}i(S4,"match$1");function M4(e){const t=i(s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},"toField");let r=null,n;return ae(e.z)||(r=ko.create(e.z)),ae(e.Z)||(r||(r=new wr(e.Z)),n=e.Z),ae(e.q)||(e.M=(e.q-1)*3+1),ae(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),ae(e.u)||(e.S=Ph(e.u)),[Object.keys(e).reduce((s,a)=>{const l=t(a);return l&&(s[l]=e[a]),s},{}),r,n]}i(M4,"dateTimeFromMatches");let Gd=null;function F4(){return Gd||(Gd=ue.fromMillis(1555555555555)),Gd}i(F4,"getDummyDateTime");function T4(e,t){if(e.literal)return e;const r=gr.macroTokenToFormatOpts(e.val),n=Fv(r,t);return n==null||n.includes(void 0)?e:n}i(T4,"maybeExpandMacroToken");function Cv(e,t){return Array.prototype.concat(...e.map(r=>T4(r,t)))}i(Cv,"expandMacroTokens");class Sv{static{i(this,"TokenParser")}constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Cv(gr.parseFormat(r),t),this.units=this.tokens.map(n=>D4(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=C4(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(t){if(this.isValid){const[r,n]=S4(t,this.regex,this.handlers),[o,s,a]=n?M4(n):[null,null,void 0];if(_s(n,"a")&&_s(n,"H"))throw new Es("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:o,zone:s,specificOffset:a}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Mv(e,t,r){return new Sv(e,r).explainFromTokens(t)}i(Mv,"explainFromTokens");function N4(e,t,r){const{result:n,zone:o,specificOffset:s,invalidReason:a}=Mv(e,t,r);return[n,o,s,a]}i(N4,"parseFromTokens");function Fv(e,t){if(!e)return null;const n=gr.create(t,e).dtFormatter(F4()),o=n.formatToParts(),s=n.resolvedOptions();return o.map(a=>E4(a,e,s))}i(Fv,"formatOptsToTokens");const Hd="Invalid DateTime",ip=864e13;function Va(e){return new Sn("unsupported zone",`the zone "${e.name}" is not supported`)}i(Va,"unsupportedZone");function Zd(e){return e.weekData===null&&(e.weekData=ec(e.c)),e.weekData}i(Zd,"possiblyCachedWeekData");function Jd(e){return e.localWeekData===null&&(e.localWeekData=ec(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}i(Jd,"possiblyCachedLocalWeekData");function wi(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ue({...r,...t,old:r})}i(wi,"clone$2");function Tv(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const s=r.offset(n);return o===s?[n,o]:[e-Math.min(o,s)*60*1e3,Math.max(o,s)]}i(Tv,"fixOffset");function hu(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}i(hu,"tsToObj");function Lu(e,t,r){return Tv(Rc(e),t,r)}i(Lu,"objToTS");function sp(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:n,month:o,day:Math.min(e.c.day,tc(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=Ce.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),l=Rc(s);let[u,d]=Tv(l,r,e.zone);return a!==0&&(u+=a,d=e.zone.offset(u)),{ts:u,o:d}}i(sp,"adjustTime");function bs(e,t,r,n,o,s){const{setZone:a,zone:l}=r;if(e&&Object.keys(e).length!==0||t){const u=t||l,d=ue.fromObject(e,{...r,zone:u,specificOffset:s});return a?d:d.setZone(l)}else return ue.invalid(new Sn("unparsable",`the input "${o}" can't be parsed as ${n}`))}i(bs,"parseDataToDateTime");function mu(e,t,r=!0){return e.isValid?gr.create(Le.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}i(mu,"toTechFormat");function Yd(e,t,r){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=Dt(e.c.year,n?6:4),r==="year")return o;if(t){if(o+="-",o+=Dt(e.c.month),r==="month")return o;o+="-"}else if(o+=Dt(e.c.month),r==="month")return o;return o+=Dt(e.c.day),o}i(Yd,"toISODate");function ap(e,t,r,n,o,s,a){let l=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(a){case"day":case"month":case"year":break;default:if(u+=Dt(e.c.hour),a==="hour")break;if(t){if(u+=":",u+=Dt(e.c.minute),a==="minute")break;l&&(u+=":",u+=Dt(e.c.second))}else{if(u+=Dt(e.c.minute),a==="minute")break;l&&(u+=Dt(e.c.second))}if(a==="second")break;l&&(!n||e.c.millisecond!==0)&&(u+=".",u+=Dt(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!s?u+="Z":e.o<0?(u+="-",u+=Dt(Math.trunc(-e.o/60)),u+=":",u+=Dt(Math.trunc(-e.o%60))):(u+="+",u+=Dt(Math.trunc(e.o/60)),u+=":",u+=Dt(Math.trunc(e.o%60)))),s&&(u+="["+e.zone.ianaName+"]"),u}i(ap,"toISOTime");const Nv={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},P4={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},I4={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ju=["year","month","day","hour","minute","second","millisecond"],O4=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],B4=["year","ordinal","hour","minute","second","millisecond"];function _u(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Ny(e);return t}i(_u,"normalizeUnit");function lp(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return _u(e)}}i(lp,"normalizeUnitWithLocalWeeks");function R4(e){if(qa===void 0&&(qa=ut.now()),e.type!=="iana")return e.offset(qa);const t=e.name;let r=T0.get(t);return r===void 0&&(r=e.offset(qa),T0.set(t,r)),r}i(R4,"guessOffsetForZone");function up(e,t){const r=Uo(t.zone,ut.defaultZone);if(!r.isValid)return ue.invalid(Va(r));const n=Le.fromObject(t);let o,s;if(ae(e.year))o=ut.now();else{for(const u of ju)ae(e[u])&&(e[u]=Nv[u]);const a=ov(e)||iv(e);if(a)return ue.invalid(a);const l=R4(r);[o,s]=Lu(e,l,r)}return new ue({ts:o,zone:r,loc:n,o:s})}i(up,"quickDT");function cp(e,t,r){const n=ae(r.round)?!0:r.round,o=ae(r.rounding)?"trunc":r.rounding,s=i((l,u)=>(l=Ih(l,n||r.calendary?0:2,r.calendary?"round":o),t.loc.clone(r).relFormatter(r).format(l,u)),"format"),a=i(l=>r.calendary?t.hasSame(e,l)?0:t.startOf(l).diff(e.startOf(l),l).get(l):t.diff(e,l).get(l),"differ");if(r.unit)return s(a(r.unit),r.unit);for(const l of r.units){const u=a(l);if(Math.abs(u)>=1)return s(u,l)}return s(e>t?-0:0,r.units[r.units.length-1])}i(cp,"diffRelative");function dp(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}i(dp,"lastOpts");let qa;const T0=new Map;class ue{static{i(this,"DateTime")}constructor(t){const r=t.zone||ut.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Sn("invalid input"):null)||(r.isValid?null:Va(r));this.ts=ae(t.ts)?ut.now():t.ts;let o=null,s=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,s]=[t.old.c,t.old.o];else{const l=Go(t.o)&&!t.old?t.o:r.offset(this.ts);o=hu(this.ts,l),n=Number.isNaN(o.year)?new Sn("invalid input"):null,o=n?null:o,s=n?null:l}this._zone=r,this.loc=t.loc||Le.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=s,this.isLuxonDateTime=!0}static now(){return new ue({})}static local(){const[t,r]=dp(arguments),[n,o,s,a,l,u,d]=r;return up({year:n,month:o,day:s,hour:a,minute:l,second:u,millisecond:d},t)}static utc(){const[t,r]=dp(arguments),[n,o,s,a,l,u,d]=r;return t.zone=wr.utcInstance,up({year:n,month:o,day:s,hour:a,minute:l,second:u,millisecond:d},t)}static fromJSDate(t,r={}){const n=gx(t)?t.valueOf():NaN;if(Number.isNaN(n))return ue.invalid("invalid input");const o=Uo(r.zone,ut.defaultZone);return o.isValid?new ue({ts:n,zone:o,loc:Le.fromObject(r)}):ue.invalid(Va(o))}static fromMillis(t,r={}){if(Go(t))return t<-ip||t>ip?ue.invalid("Timestamp out of range"):new ue({ts:t,zone:Uo(r.zone,ut.defaultZone),loc:Le.fromObject(r)});throw new hr(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Go(t))return new ue({ts:t*1e3,zone:Uo(r.zone,ut.defaultZone),loc:Le.fromObject(r)});throw new hr("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=Uo(r.zone,ut.defaultZone);if(!n.isValid)return ue.invalid(Va(n));const o=Le.fromObject(r),s=rc(t,lp),{minDaysInFirstWeek:a,startOfWeek:l}=Hg(s,o),u=ut.now(),d=ae(r.specificOffset)?n.offset(u):r.specificOffset,f=!ae(s.ordinal),h=!ae(s.year),m=!ae(s.month)||!ae(s.day),g=h||m,p=s.weekYear||s.weekNumber;if((g||f)&&p)throw new Es("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&f)throw new Es("Can't mix ordinal dates with month/day");const y=p||s.weekday&&!g;let w,k,D=hu(u,d);y?(w=O4,k=P4,D=ec(D,a,l)):f?(w=B4,k=I4,D=Kd(D)):(w=ju,k=Nv);let C=!1;for(const pe of w){const we=s[pe];ae(we)?C?s[pe]=k[pe]:s[pe]=D[pe]:C=!0}const P=y?fx(s,a,l):f?hx(s):ov(s),R=P||iv(s);if(R)return ue.invalid(R);const J=y?Kg(s,a,l):f?Gg(s):s,[ee,te]=Lu(J,d,n),Y=new ue({ts:ee,zone:n,o:te,loc:o});return s.weekday&&g&&t.weekday!==Y.weekday?ue.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Y.toISO()}`):Y.isValid?Y:ue.invalid(Y.invalid)}static fromISO(t,r={}){const[n,o]=o4(t);return bs(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=i4(t);return bs(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=s4(t);return bs(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(ae(t)||ae(r))throw new hr("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:s=null}=n,a=Le.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0}),[l,u,d,f]=N4(a,t,r);return f?ue.invalid(f):bs(l,u,n,`format ${r}`,t,d)}static fromString(t,r,n={}){return ue.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=h4(t);return bs(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new hr("need to specify a reason the DateTime is invalid");const n=t instanceof Sn?t:new Sn(t,r);if(ut.throwOnInvalid)throw new _k(n);return new ue({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Fv(t,Le.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return Cv(gr.parseFormat(t),Le.fromObject(r)).map(o=>o.val).join("")}static resetCache(){qa=void 0,T0.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Zd(this).weekYear:NaN}get weekNumber(){return this.isValid?Zd(this).weekNumber:NaN}get weekday(){return this.isValid?Zd(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Jd(this).weekday:NaN}get localWeekNumber(){return this.isValid?Jd(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Jd(this).weekYear:NaN}get ordinal(){return this.isValid?Kd(this.c).ordinal:NaN}get monthShort(){return this.isValid?du.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?du.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?du.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?du.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Rc(this.c),o=this.zone.offset(n-t),s=this.zone.offset(n+t),a=this.zone.offset(n-o*r),l=this.zone.offset(n-s*r);if(a===l)return[this];const u=n-a*r,d=n-l*r,f=hu(u,a),h=hu(d,l);return f.hour===h.hour&&f.minute===h.minute&&f.second===h.second&&f.millisecond===h.millisecond?[wi(this,{ts:u}),wi(this,{ts:d})]:[this]}get isInLeapYear(){return Bl(this.year)}get daysInMonth(){return tc(this.year,this.month)}get daysInYear(){return this.isValid?Ts(this.year):NaN}get weeksInWeekYear(){return this.isValid?cl(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?cl(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=gr.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(wr.instance(t),r)}toLocal(){return this.setZone(ut.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=Uo(t,ut.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const s=t.offset(this.ts),a=this.toObject();[o]=Lu(a,s,t)}return wi(this,{ts:o,zone:t})}else return ue.invalid(Va(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return wi(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=rc(t,lp),{minDaysInFirstWeek:n,startOfWeek:o}=Hg(r,this.loc),s=!ae(r.weekYear)||!ae(r.weekNumber)||!ae(r.weekday),a=!ae(r.ordinal),l=!ae(r.year),u=!ae(r.month)||!ae(r.day),d=l||u,f=r.weekYear||r.weekNumber;if((d||a)&&f)throw new Es("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&a)throw new Es("Can't mix ordinal dates with month/day");let h;s?h=Kg({...ec(this.c,n,o),...r},n,o):ae(r.ordinal)?(h={...this.toObject(),...r},ae(r.day)&&(h.day=Math.min(tc(h.year,h.month),h.day))):h=Gg({...Kd(this.c),...r});const[m,g]=Lu(h,this.o,this.zone);return wi(this,{ts:m,o:g})}plus(t){if(!this.isValid)return this;const r=Ce.fromDurationLike(t);return wi(this,sp(this,r))}minus(t){if(!this.isValid)return this;const r=Ce.fromDurationLike(t).negate();return wi(this,sp(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=Ce.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:a}=this;a<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(o==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?gr.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Hd}toLocaleString(t=Qu,r={}){return this.isValid?gr.create(this.loc.clone(r),t).formatDateTime(this):Hd}toLocaleParts(t={}){return this.isValid?gr.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:s=!1,precision:a="milliseconds"}={}){if(!this.isValid)return null;a=_u(a);const l=t==="extended";let u=Yd(this,l,a);return ju.indexOf(a)>=3&&(u+="T"),u+=ap(this,l,r,n,o,s,a),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?Yd(this,t==="extended",_u(r)):null}toISOWeekDate(){return mu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:s=!1,format:a="extended",precision:l="milliseconds"}={}){return this.isValid?(l=_u(l),(o&&ju.indexOf(l)>=3?"T":"")+ap(this,a==="extended",r,t,n,s,l)):null}toRFC2822(){return mu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return mu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Yd(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),mu(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Hd}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return Ce.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=px(r).map(Ce.normalizeUnit),a=t.valueOf()>this.valueOf(),l=a?this:t,u=a?t:this,d=v4(l,u,s,o);return a?d.negate():d}diffNow(t="milliseconds",r={}){return this.diff(ue.now(),t,r)}until(t){return this.isValid?pt.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(r,n)<=o&&o<=s.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||ue.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(o=t.unit,s=void 0),cp(r,this.plus(n),{...t,numeric:"always",units:o,unit:s})}toRelativeCalendar(t={}){return this.isValid?cp(t.base||ue.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(ue.isDateTime))throw new hr("min requires all arguments be DateTimes");return Zg(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(ue.isDateTime))throw new hr("max requires all arguments be DateTimes");return Zg(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:s=null}=n,a=Le.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0});return Mv(a,t,r)}static fromStringExplain(t,r,n={}){return ue.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:o=null}=r,s=Le.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new Sv(s,t)}static fromFormatParser(t,r,n={}){if(ae(t)||ae(r))throw new hr("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:s=null}=n,a=Le.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0});if(!a.equals(r.locale))throw new hr(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${r.locale}`);const{result:l,zone:u,specificOffset:d,invalidReason:f}=r.explainFromTokens(t);return f?ue.invalid(f):bs(l,u,n,`format ${r.format}`,t,d)}static get DATE_SHORT(){return Qu}static get DATE_MED(){return Py}static get DATE_MED_WITH_WEEKDAY(){return Vk}static get DATE_FULL(){return Iy}static get DATE_HUGE(){return Oy}static get TIME_SIMPLE(){return By}static get TIME_WITH_SECONDS(){return Ry}static get TIME_WITH_SHORT_OFFSET(){return Ly}static get TIME_WITH_LONG_OFFSET(){return jy}static get TIME_24_SIMPLE(){return _y}static get TIME_24_WITH_SECONDS(){return Uy}static get TIME_24_WITH_SHORT_OFFSET(){return zy}static get TIME_24_WITH_LONG_OFFSET(){return Vy}static get DATETIME_SHORT(){return qy}static get DATETIME_SHORT_WITH_SECONDS(){return Wy}static get DATETIME_MED(){return Ky}static get DATETIME_MED_WITH_SECONDS(){return Gy}static get DATETIME_MED_WITH_WEEKDAY(){return qk}static get DATETIME_FULL(){return Hy}static get DATETIME_FULL_WITH_SECONDS(){return Zy}static get DATETIME_HUGE(){return Jy}static get DATETIME_HUGE_WITH_SECONDS(){return Yy}}function Ma(e){if(ue.isDateTime(e))return e;if(e&&e.valueOf&&Go(e.valueOf()))return ue.fromJSDate(e);if(e&&typeof e=="object")return ue.fromObject(e);throw new hr(`Unknown datetime argument: ${e}, of type ${typeof e}`)}i(Ma,"friendlyDateTime");Intl.DateTimeFormat().resolvedOptions().locale;var Z;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Z||(Z={}));Z.Year,Z.Hour,Z.Minute,Z.Second,Z.Millisecond;Z.Month,Z.Week,Z.Day;Z.Millisecond,Z.Second,Z.Minute,Z.Hour,Z.Day,Z.Week,Z.Month,Z.Year;const fp={min:0,max:23},hp={min:0,max:59},mp={min:0,max:59},gp={min:0,max:999};var ce;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(ce||(ce={}));const L4=[ce.Milliseconds,ce.Seconds,ce.Minutes,ce.Hours,ce.Days,ce.Weeks,ce.Months,ce.Years];ce.Milliseconds+"",ce.Seconds+"",ce.Minutes+"",ce.Hours+"",ce.Days+"",ce.Weeks+"",ce.Months+"",ce.Years+"";ce.Years+"",Z.Year,ce.Months+"",Z.Month,ce.Weeks+"",Z.Week,ce.Days+"",Z.Day,ce.Hours+"",Z.Hour,ce.Minutes+"",Z.Minute,ce.Seconds+"",Z.Second,ce.Milliseconds+"",Z.Millisecond;Z.Year+"",ce.Years,Z.Month+"",ce.Months,Z.Week+"",ce.Weeks,Z.Day+"",ce.Days,Z.Hour+"",ce.Hours,Z.Minute+"",ce.Minutes,Z.Second+"",ce.Seconds,Z.Millisecond+"",ce.Milliseconds;function j4(e){return L4.filter(t=>e[t])}i(j4,"flattenUnitsSmallestToLargest");function N0(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}i(N0,"round$1");function _4(e){return N0(Math.max(e-.4,0),{decimalCount:0})}i(_4,"roundNarrow");function pp(e){return e===0?0:Math.sign(e)}i(pp,"getSign");function Us(e,t,r={}){const n={},o={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},s=Object.values(e).includes(1/0),a=Object.values(e).includes(-1/0),l=j4(t).reverse();if(s||a)return l.forEach(f=>{n[f]=s?1/0:-1/0}),n;let u=Ce.fromObject(e).as(ce.Milliseconds);const d=pp(u);return l.forEach((f,h)=>{const m=h===l.length-1;if(f===ce.Milliseconds)n.milliseconds=N0(u,o);else{const g=Ce.fromObject({milliseconds:u}).as(f),p=Math.sign(g),y=Math.abs(g),w=m?N0(y,o):Math.floor(o.decimalCount==null?y:_4(y)),k=w===0?0:w*p;n[f]=k,u-=Ce.fromObject({[f]:k}).as(ce.Milliseconds),d!==pp(u)&&(u=0)}}),n}i(Us,"convertDuration");var mr;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(mr||(mr={}));mr.Sunday+"",mr.Monday+"",mr.Tuesday+"",mr.Wednesday+"",mr.Thursday+"",mr.Friday+"",mr.Saturday+"";mr.Sunday,mr.Monday,mr.Tuesday,mr.Wednesday,mr.Thursday,mr.Friday,mr.Saturday;var Fr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Fr||(Fr={}));Fr.January,Fr.February,Fr.March,Fr.April,Fr.May,Fr.June,Fr.July,Fr.August,Fr.September,Fr.October,Fr.November,Fr.December;const bp={min:1,max:12},yp={min:1,max:31};function Vi(e){const t=new Xu,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:Us(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}i(Vi,"wait");function Pv(...e){const t=e.join(""),r=Ic(Array.from(t));return Array.from(r).join("")}i(Pv,"removeDuplicateCharacters");function Iv(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}i(Iv,"escapeStringForRegExp");function Ov(e,t){const r=Pv([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Bv(e,r)}i(Ov,"addRegExpFlags");function Bv(e,t){const r=Pv(t);return typeof e=="string"?new RegExp(Iv(e),r):new RegExp(e.source,r)}i(Bv,"setRegExpFlags");function Rv(e,{caseSensitive:t}){const n="".replaceAll("i","");return Bv(e,n)}i(Rv,"setRegExpCaseSensitivity");function Lh(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}i(Lh,"indent");function Lv(e,t){return t?typeof t=="string"?!!new RegExp(Iv(t),"i").exec(e):!!Ov(t,"i").exec(e):!1}i(Lv,"match");class $ extends Error{static{i(this,"AssertionError")}name="AssertionError";constructor(t,r){super(Qi(r,t)||"Assertion failed.")}}const vp={interval:{milliseconds:100},timeout:{seconds:10}},Xd=Symbol("not set");async function U4(e,t,r){const{callback:n,extraAssertionArgs:o,failureMessage:s,options:a}=z4(t),l=Us(a.timeout,{milliseconds:!0}).milliseconds,u=Us(a.interval,{milliseconds:!0});let d=Xd,f;async function h(){try{d=r?n():await n(),e(d,...o)}catch(g){d=Xd,f=vt(g)}}i(h,"checkCondition");const m=Date.now();for(;d===Xd;)if(await h(),await Vi(u),Date.now()-m>=l){const p=`${s?`${s}: `:""}Timeout of '${l}' milliseconds exceeded waiting for callback value to match expectations`;throw sa(f,p)}return d}i(U4,"executeWaitUntil");function L(e,t=!1){return((...r)=>U4(e,r,t))}i(L,"createWaitUntil");function z4(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:jv(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}i(z4,"parseWaitUntilArgs");function jv(e){return{interval:e?.interval||vp.interval,timeout:e?.timeout||vp.timeout}}i(jv,"parseWaitUntilOptions");const Fa={isFalse(e,t){if(e!==!1)throw new $(`'${x(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new $(`'${x(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new $(`'${x(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new $(`'${x(e)}' is not truthy.`,t)}},_v={assert:Fa,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new $(`'${x(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new $(`'${x(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new $(`'${x(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new $(`'${x(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:L(Fa.isFalse),isFalsy:L(Fa.isFalsy),isTrue:L(Fa.isTrue),isTruthy:L(Fa.isTruthy)}};function V4(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new $(`${x(e)} does not end with ${x(t)}}`,r)}else if(e[e.length-1]!==t)throw new $(`${x(e)} does not end with ${x(t)}}`,r)}i(V4,"endsWith");function q4(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new $(`${x(e)} ends with ${x(t)}}`,r)}else if(e[e.length-1]===t)throw new $(`${x(e)} ends with ${x(t)}}`,r)}i(q4,"endsWithout");function W4(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new $(`${x(e)} does not start with ${x(t)}}`,r)}else if(e[0]!==t)throw new $(`${x(e)} does not start with ${x(t)}}`,r)}i(W4,"startsWith");function K4(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new $(`${x(e)} starts with ${x(t)}}`,r)}else if(e[0]===t)throw new $(`${x(e)} starts with ${x(t)}}`,r)}i(K4,"startsWithout");const Ta={endsWith:V4,endsWithout:q4,startsWith:W4,startsWithout:K4},Uv={assert:Ta,check:{endsWith:i(((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),"endsWith"),endsWithout:i(((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),"endsWithout"),startsWith:i(((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),"startsWith"),startsWithout:i(((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t),"startsWithout")},assertWrap:{endsWith:i(((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new $(`${x(e)} does not end with ${x(t)}}`,r)}else if(e[e.length-1]!==t)throw new $(`${x(e)} does not end with ${x(t)}}`,r);return e}),"endsWith"),endsWithout:i(((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new $(`${x(e)} ends with ${x(t)}}`,r)}else if(e[e.length-1]===t)throw new $(`${x(e)} ends with ${x(t)}}`,r);return e}),"endsWithout"),startsWith:i(((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new $(`${x(e)} does not start with ${x(t)}}`,r)}else if(e[0]!==t)throw new $(`${x(e)} does not start with ${x(t)}}`,r);return e}),"startsWith"),startsWithout:i(((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new $(`${x(e)} starts with ${x(t)}}`,r)}else if(e[0]===t)throw new $(`${x(e)} starts with ${x(t)}}`,r);return e}),"startsWithout")},checkWrap:{endsWith:i(((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),"endsWith"),endsWithout:i(((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),"endsWithout"),startsWith:i(((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),"startsWith"),startsWithout:i(((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}),"startsWithout")},waitUntil:{endsWith:L(Ta.endsWith),endsWithout:L(Ta.endsWithout),startsWith:L(Ta.startsWith),startsWithout:L(Ta.startsWithout)}};function G4(e,t,r){const n=qr(t);if(!n.includes(e))throw new $(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}i(G4,"assertIsEnumValue");function so(e,t){return qr(t).includes(e)}i(so,"isEnumValue");const Qd={isEnumValue(e,t,r){G4(e,t,r)},isNotEnumValue(e,t,r){const n=qr(t);if(n.includes(e))throw new $(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},zv={assert:Qd,check:{isEnumValue:so,isNotEnumValue(e,t){return!qr(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=qr(t);if(!n.includes(e))throw new $(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=qr(t);if(n.includes(e))throw new $(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(qr(t).includes(e))return e},isNotEnumValue(e,t){if(!qr(t).includes(e))return e}},waitUntil:{isEnumValue:L(Qd.isEnumValue),isNotEnumValue:L(Qd.isNotEnumValue)}},ef={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new $(`${x(e)} is not an object.`,r);if(!t||typeof t!="object")throw new $(`${x(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const s=e[o],a=t[o];if(s!==a)throw new $(`Entries are not equal at key '${String(o)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const a=e[s],l=t[s];return a!==l}))throw new $("Entries are equal.",r)}},Vv={assert:ef,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const o=e[n],s=t[n];return o===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const o=e[n],s=t[n];return o!==s})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new $(`${x(e)} is not an object.`,r);if(!t||typeof t!="object")throw new $(`${x(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const s=e[o],a=t[o];if(s!==a)throw new $(`Entries are not equal at key '${String(o)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const a=e[s],l=t[s];return a!==l}))return e;throw new $("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(o=>{const s=e[o],a=t[o];return s===a}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e}},waitUntil:{entriesEqual:L(ef.entriesEqual),notEntriesEqual:L(ef.notEntriesEqual)}};function nc(e,t){return JSON.stringify(e)===JSON.stringify(t)}i(nc,"baseJsonEquals");function dl(e,t){if(!(e===t||nc(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!nc(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{dl(e[s],t[s])}catch(a){throw new Error(`JSON objects are not equal at key '${s}': ${Jt(a)}`)}})}throw new Error("Values are not JSON equal.")}}i(dl,"recursiveAssertJsonEquals");function Wa(e,t){if(e===t||nc(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!nc(r,n)?!1:Object.keys(e).every(s=>Wa(e[s],t[s]))}return!1}i(Wa,"recursiveCheckJsonEquals");const tf={jsonEquals(e,t,r){try{dl(e,t)}catch(n){throw new $(Jt(n),r)}},notJsonEquals(e,t,r){try{dl(e,t)}catch{return}throw new $("Values are JSON equal.",r)}},qv={assert:tf,check:{jsonEquals(e,t){return Wa(e,t)},notJsonEquals(e,t){return!Wa(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return dl(e,t),e}catch(n){throw new $(Jt(n),r)}},notJsonEquals(e,t,r){try{dl(e,t)}catch{return e}throw new $("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Wa(e,t))return e},notJsonEquals(e,t){if(!Wa(e,t))return e}},waitUntil:{jsonEquals:L(tf.jsonEquals),notJsonEquals:L(tf.notJsonEquals)}};function wp(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}i(wp,"type$1");function Wv(){this._key="chai/deep-eql__"+Math.random()+Date.now()}i(Wv,"FakeMap");Wv.prototype={get:i(function(t){return t[this._key]},"get"),set:i(function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})},"set")};var Kv=typeof WeakMap=="function"?WeakMap:Wv;function $p(e,t,r){if(!r||zs(e)||zs(t))return null;var n=r.get(e);if(n){var o=n.get(t);if(typeof o=="boolean")return o}return null}i($p,"memoizeCompare");function gu(e,t,r,n){if(!(!r||zs(e)||zs(t))){var o=r.get(e);o?o.set(t,n):(o=new Kv,o.set(t,n),r.set(e,o))}}i(gu,"memoizeSet");function Cn(e,t,r){if(r&&r.comparator)return kp(e,t,r);var n=Gv(e,t);return n!==null?n:kp(e,t,r)}i(Cn,"deepEqual");function Gv(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:zs(e)||zs(t)?!1:null}i(Gv,"simpleEqual");function kp(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Kv;var n=r&&r.comparator,o=$p(e,t,r.memoize);if(o!==null)return o;var s=$p(t,e,r.memoize);if(s!==null)return s;if(n){var a=n(e,t);if(a===!1||a===!0)return gu(e,t,r.memoize,a),a;var l=Gv(e,t);if(l!==null)return l}var u=wp(e);if(u!==wp(t))return gu(e,t,r.memoize,!1),!1;gu(e,t,r.memoize,!0);var d=H4(e,t,u,r);return gu(e,t,r.memoize,d),d}i(kp,"extensiveDeepEqual");function H4(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return Cn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Hv(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ii(e,t,n);case"RegExp":return Z4(e,t);case"Generator":return J4(e,t,n);case"DataView":return Ii(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Ii(new Uint8Array(e),new Uint8Array(t),n);case"Set":return xp(e,t,n);case"Map":return xp(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return X4(e,t,n)}}i(H4,"extensiveDeepEqualByType");function Z4(e,t){return e.toString()===t.toString()}i(Z4,"regexpEqual");function xp(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(i(function(a,l){n.push([a,l])},"gatherEntries")),t.forEach(i(function(a,l){o.push([a,l])},"gatherEntries")),Ii(n.sort(),o.sort(),r)}i(xp,"entriesEqual");function Ii(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(Cn(e[o],t[o],r)===!1)return!1;return!0}i(Ii,"iterableEqual");function J4(e,t,r){return Ii(P0(e),P0(t),r)}i(J4,"generatorEqual");function Y4(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}i(Y4,"hasIteratorFunction");function Dp(e){if(Y4(e))try{return P0(e[Symbol.iterator]())}catch{return[]}return[]}i(Dp,"getIteratorEntries");function P0(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}i(P0,"getGeneratorEntries");function Ap(e){var t=[];for(var r in e)t.push(r);return t}i(Ap,"getEnumerableKeys");function Ep(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var o=r[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&t.push(o)}return t}i(Ep,"getEnumerableSymbols");function Hv(e,t,r,n){var o=r.length;if(o===0)return!0;for(var s=0;s<o;s+=1)if(Cn(e[r[s]],t[r[s]],n)===!1)return!1;return!0}i(Hv,"keysEqual");function X4(e,t,r){var n=Ap(e),o=Ap(t),s=Ep(e),a=Ep(t);if(n=n.concat(s),o=o.concat(a),n.length&&n.length===o.length)return Ii(Cp(n).sort(),Cp(o).sort())===!1?!1:Hv(e,t,n,r);var l=Dp(e),u=Dp(t);return l.length&&l.length===u.length?(l.sort(),u.sort(),Ii(l,u,r)):n.length===0&&l.length===0&&o.length===0&&u.length===0}i(X4,"objectEqual");function zs(e){return e===null||typeof e!="object"}i(zs,"isPrimitive");function Cp(e){return e.map(i(function(r){return typeof r=="symbol"?r.toString():r},"mapSymbol"))}i(Cp,"mapSymbols");class Ps extends ${static{i(this,"DiffError")}name="DiffError";constructor(t,r,n,o){const s=Ok(r,n);super([t,Lh(s)].join(`
`),o)}}function jo(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}i(jo,"customComparator");const Ro={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new $(`Strict reference equality failed for 

${x(t)}

.`,r):new Ps("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new $(`Strict reference INequality failed for 

${x(t)}

.`,r):new $(`

${x(e)}

strictly equals

${x(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new $(`Loose reference equality failed for 

${x(t)}

.`,r):new Ps("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new $(`Loose reference INequality failed for 

${x(t)}

.`,r):new $(`

${x(e)}

loosely equals

${x(t)}

`,r)},deepEquals(e,t,r){if(!Cn(e,t,{comparator:jo}))throw new Ps("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Cn(e,t,{comparator:jo}))throw new $(`

${x(e)}

deeply equals

${x(t)}

`,r)}},Zv=Ro.deepEquals,Jv={assert:Ro,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Cn(e,t,{comparator:jo})},notDeepEquals(e,t){return!Cn(e,t,{comparator:jo})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new $(`Strict reference equality failed for 

${x(t)}

.`,r):new Ps("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new $(`Strict reference INequality failed for 

${x(t)}

.`,r):new $(`

${x(e)}

strictly equals

${x(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new $(`Loose reference equality failed for 

${x(t)}

.`,r):new Ps("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new $(`Loose reference INequality failed for 

${x(t)}

.`,r):new $(`

${x(e)}

loosely equals

${x(t)}

`,r);return e},deepEquals(e,t,r){if(Cn(e,t,{comparator:jo}))return e;throw new Ps("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Cn(e,t,{comparator:jo}))throw new $(`

${x(e)}

deeply equals

${x(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Cn(e,t,{comparator:jo}))return e},notDeepEquals(e,t){if(!Cn(e,t,{comparator:jo}))return e}},waitUntil:{strictEquals:L(Ro.strictEquals),notStrictEquals:L(Ro.notStrictEquals),looseEquals:L(Ro.looseEquals),notLooseEquals:L(Ro.notLooseEquals),deepEquals:L(Ro.deepEquals),notDeepEquals:L(Ro.notDeepEquals)}};function Ur(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}i(Ur,"hasValue");function cn(e,t){return typeof t=="string"?t.includes(e):Ur(t,e)}i(cn,"isIn");const oo={hasValue(e,t,r){if(!Ur(e,t))throw new $(`'${x(e)}' does not have value '${x(t)}'.`,r)},lacksValue(e,t,r){if(Ur(e,t))throw new $(`'${x(e)}' has value '${x(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!o.includes(s))}catch{throw new $(`'${x(e)}' does not have values '${x(t)}'.`,r)}if(n.length)throw new $(`'${x(e)}' does not have values '${x(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>o.includes(s))}catch{}if(n.length)throw new $(`'${x(e)}' has values '${x(n)}'.`,r)},isIn(e,t,r){if(!cn(e,t))throw new $(`'${x(e)}'

is not in

${x(t)}.`,r)},isNotIn(e,t,r){if(cn(e,t))throw new $(`'${x(e)}'

is in

${x(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new $(`'${x(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new $(`'${x(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new $(`'${x(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new $(`'${x(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new $(`'${x(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new $(`'${x(e)}' is not empty.`,t)}}},Yv={assert:oo,check:{hasValue(e,t){return Ur(e,t)},lacksValue(e,t){return!Ur(e,t)},hasValues(e,t){return t.every(r=>Ur(e,r))},lacksValues(e,t){return t.every(r=>!Ur(e,r))},isIn(e,t){return cn(e,t)},isNotIn(e,t){return!cn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!Ur(e,t))throw new $(`'${x(e)}' does not have value '${x(t)}'.`,r);return e},lacksValue(e,t,r){if(Ur(e,t))throw new $(`'${x(e)}' has value '${x(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!o.includes(s))}catch{throw new $(`'${x(e)}' does not have values '${x(t)}'.`,r)}if(n.length)throw new $(`'${x(e)}' does not have values '${x(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>o.includes(s))}catch{}if(n.length)throw new $(`'${x(e)}' has values '${x(n)}'.`,r);return e},isIn(e,t,r){if(!cn(e,t))throw new $(`'${x(e)}'

is not in

${x(t)}.`,r);return e},isNotIn(e,t,r){if(cn(e,t))throw new $(`'${x(e)}'

is in

${x(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new $(`'${x(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new $(`'${x(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new $(`'${x(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new $(`'${x(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new $(`'${x(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new $(`'${x(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Ur(e,t))return e},lacksValue(e,t){if(!Ur(e,t))return e},hasValues(e,t){if(t.every(r=>Ur(e,r)))return e},lacksValues(e,t){if(!t.every(r=>Ur(e,r)))return e},isIn(e,t){if(cn(e,t))return e},isNotIn(e,t){if(!cn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:L(oo.hasValue),lacksValue:L(oo.lacksValue),hasValues:L(oo.hasValues),lacksValues:L(oo.lacksValues),isIn:L(oo.isIn),isNotIn:L(oo.isNotIn),isEmpty:L(oo.isEmpty),isNotEmpty:L(oo.isNotEmpty)}},rf={isHttpStatus(e,t){if(!so(e,T))throw new $(`${x(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(so(e,T)){if(!cn(e,Ru[t]))throw new $(`${x(e)} is not a '${t}' HTTP status.`,r)}else throw new $(`${x(e)} is not a valid HTTP status.`,r)}},Xv={assert:rf,check:{isHttpStatus(e){return so(e,T)},isHttpStatusCategory(e,t){return so(e,T)&&cn(e,Ru[t])}},assertWrap:{isHttpStatus(e,t){if(!so(e,T))throw new $(`${x(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(so(e,T)){if(!cn(e,Ru[t]))throw new $(`${x(e)} is not a '${t}' HTTP status.`,r)}else throw new $(`${x(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(so(e,T))return e},isHttpStatusCategory(e,t){if(so(e,T)&&cn(e,Ru[t]))return e}},waitUntil:{isHttpStatus:L(rf.isHttpStatus),isHttpStatusCategory:L(rf.isHttpStatusCategory)}},nf={instanceOf(e,t,r){if(!(e instanceof t))throw new $(`'${x(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new $(`'${x(e)}' is an instance of '${t.name}'`,r)}},Qv={assert:nf,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new $(`'${x(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new $(`'${x(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:L(nf.instanceOf),notInstanceOf:L(nf.notInstanceOf)}},Q4=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ot(e,t){return Q4.some(r=>{try{return r(e,t)}catch{return!1}})}i(ot,"hasKey");const $i={isKeyOf(e,t,r){if(!ot(t,e))throw new $(`'${String(e)}' is not a key of '${x(t)}'.`,r)},isNotKeyOf(e,t,r){if(ot(t,e))throw new $(`'${String(e)}' is a key of '${x(t)}'.`,r)},hasKey(e,t,r){if(!ot(e,t))throw new $(`'${x(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(ot(e,t))throw new $(`'${x(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(o=>!ot(e,o));if(n.length)throw new $(`'${x(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(o=>ot(e,o));if(n.length)throw new $(`'${x(e)}' does not lack keys '${n.join(",")}'.`,r)}},e2={assert:$i,check:{isKeyOf(e,t){return ot(t,e)},isNotKeyOf(e,t){return!ot(t,e)},hasKey:ot,lacksKey(e,t){return!ot(e,t)},hasKeys(e,t){return t.every(r=>ot(e,r))},lacksKeys(e,t){return t.every(r=>!ot(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!ot(t,e))throw new $(`'${String(e)}' is not a key of '${x(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(ot(t,e))throw new $(`'${String(e)}' is a key of '${x(t)}'.`,r);return e},hasKey(e,t,r){if(!ot(e,t))throw new $(`'${x(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(ot(e,t))throw new $(`'${x(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(o=>!ot(e,o));if(n.length)throw new $(`'${x(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(o=>ot(e,o));if(n.length)throw new $(`'${x(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(ot(t,e))return e},isNotKeyOf(e,t){if(!ot(t,e))return e},hasKey(e,t){if(ot(e,t))return e},lacksKey(e,t){if(!ot(e,t))return e},hasKeys(e,t){if(t.every(r=>ot(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!ot(e,r)))return e}},waitUntil:{isKeyOf:L($i.isKeyOf),isNotKeyOf:L($i.isNotKeyOf),hasKey:L($i.hasKey),lacksKey:L($i.lacksKey),hasKeys:L($i.hasKeys),lacksKeys:L($i.lacksKeys)}};function e3(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)<t)throw new $(`Length '${e.length}' is not at least '${t}'.`,r)}i(e3,"isLengthAtLeast");function t3(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)!==t)throw new $(`Length '${e.length}' is not exactly '${t}'.`,r)}i(t3,"isLengthExactly");const of={isLengthAtLeast:e3,isLengthExactly:t3},t2={assert:of,check:{isLengthAtLeast:i(((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)>=t),"isLengthAtLeast"),isLengthExactly:i(((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)===t),"isLengthExactly")},assertWrap:{isLengthAtLeast:i(((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)<t)throw new $(`Length '${e.length}' is not at least '${t}'.`,r);return e}),"isLengthAtLeast"),isLengthExactly:i(((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)!==t)throw new $(`Length '${e.length}' is not exactly '${t}'.`,r);return e}),"isLengthExactly")},checkWrap:{isLengthAtLeast:i(((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)>=t)return e}),"isLengthAtLeast"),isLengthExactly:i(((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)===t)return e}),"isLengthExactly")},waitUntil:{isLengthAtLeast:L(of.isLengthAtLeast),isLengthExactly:L(of.isLengthExactly)}},r3={never(e){throw new $("This code should not have executed.",e)}},r2={assert:r3,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},sf={isDefined(e,t){if(e==null)throw new $(`'${x(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new $(`'${x(e)}' is not a nullish.`,t)}},n2={assert:sf,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new $(`'${x(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new $(`'${x(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:L(sf.isDefined),isNullish:L(sf.isNullish)}},Cr={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new $(`${e} is not within the bounds ${x({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new $(`${e} is not outside the bounds ${x({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new $(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new $(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new $(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new $(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new $(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new $(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new $(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new $(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new $(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new $(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new $(`${e} is within ±${r} of ${t}`,n)}},o2={assert:Cr,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new $(`${e} is not within the bounds ${x({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new $(`${e} is not outside the bounds ${x({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new $(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new $(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new $(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new $(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new $(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new $(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new $(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new $(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new $(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new $(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new $(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:L(Cr.isInBounds),isOutBounds:L(Cr.isOutBounds),isInteger:L(Cr.isInteger),isNotInteger:L(Cr.isNotInteger),isAbove:L(Cr.isAbove),isAtLeast:L(Cr.isAtLeast),isBelow:L(Cr.isBelow),isAtMost:L(Cr.isAtMost),isNaN:L(Cr.isNaN),isFinite:L(Cr.isFinite),isInfinite:L(Cr.isInfinite),isApproximately:L(Cr.isApproximately),isNotApproximately:L(Cr.isNotApproximately)}};function n3(e,t,r,n,o){return jl(..._c(e,t,r,n,o),!1)}i(n3,"assertOutput");function _c(e,t,r,n,o){const s=Array.isArray(r);return[s?e:Zv,s?t:e,s?r:t,s?n:r,s?o:n]}i(_c,"extractOutputArgs");function jl(e,t,r,n,o,s){const a=t(...r);if(a instanceof Promise)return new Promise(async(l,u)=>{try{const d=await a;e(d,n),s?l(d):l()}catch(d){u(new $(`Output from '${t.name}' did not produce expected output. ${Jt(d)}`,o))}});try{return e(a,n),s?a:void 0}catch(l){throw new $(`Output from '${t.name}' did not produce expected output. ${Jt(l)}`,o)}}i(jl,"innerAssertOutput");function o3(e,t,r,n,o){try{const s=jl(..._c(e,t,r,n,o),!1);return s instanceof Promise?new Promise(async a=>{try{await s,a(!0)}catch{a(!1)}}):!0}catch{return!1}}i(o3,"checkOutput");function i3(e,t,r,n,o){return jl(..._c(e,t,r,n,o),!0)}i(i3,"assertWrapOutput");function s3(e,t,r,n,o){try{const s=jl(..._c(e,t,r,n,o),!0);return s instanceof Promise?new Promise(async a=>{try{a(await s)}catch{a(void 0)}}):s}catch{return}}i(s3,"checkWrapOutput");const af=Symbol("not set");async function a3(e,t,r,n,o,s){const a=Array.isArray(r),l=a?e:Zv,u=a?t:e,d=a?r:t,f=a?n:r,h=jv(a?o:n),m=a?s:o,g=Us(h.timeout,{milliseconds:!0}).milliseconds,p=Us(h.interval,{milliseconds:!0});let y=af,w;async function k(){try{y=await jl(l,u,d,f,void 0,!0)}catch(C){y=af,w=vt(C)}}i(k,"checkCondition");const D=Date.now();for(;y===af;)if(await k(),await Vi(p),Date.now()-D>=g)throw sa(w,Qi(m,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return y}i(a3,"waitUntilOutput");const l3={output:n3},i2={assert:l3,check:{output:o3},assertWrap:{output:i3},checkWrap:{output:s3},waitUntil:{output:a3}},Na={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new $(`'${x(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new $(`'${x(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new $(`'${x(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new $(`'${x(e)}' is not a Primitive.`,t)}},s2={assert:Na,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new $(`'${x(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new $(`'${x(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new $(`'${x(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new $(`'${x(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:L(Na.isNotPrimitive),isNotPropertyKey:L(Na.isNotPropertyKey),isPrimitive:L(Na.isPrimitive),isPropertyKey:L(Na.isPropertyKey)}},Pa={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new $(`'${x(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new $(`'${x(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new $(`'${x(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new $(`'${x(e)}' is a Promise.`,t)}},a2={assert:Pa,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new $(`'${x(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new $(`'${x(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new $(`'${x(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new $(`'${x(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:L(Pa.isPromiseLike,!0),isNotPromiseLike:L(Pa.isNotPromiseLike,!0),isPromise:L(Pa.isPromise,!0),isNotPromise:L(Pa.isNotPromise,!0)}},lf={matches(e,t,r){if(!t.test(e))throw new $(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new $(`'${e}' matches ${t}`,r)}},l2={assert:lf,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new $(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new $(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:L(lf.matches,!0),mismatches:L(lf.mismatches,!0)}},at={isArray(e,t){if(!Array.isArray(e))throw new $(`'${x(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new $(`'${x(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new $(`'${x(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new $(`'${x(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new $(`'${x(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new $(`'${x(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new $(`'${x(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new $(`'${x(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new $(`'${x(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new $(`'${x(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new $(`'${x(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new $(`'${x(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new $(`'${x(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new $(`'${x(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new $(`'${x(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new $(`'${x(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new $(`'${x(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new $(`'${x(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new $(`'${x(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new $(`'${x(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new $(`'${x(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new $(`'${x(e)}' is a undefined.`,t)}},u2={assert:at,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new $(`'${x(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new $(`'${x(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new $(`'${x(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new $(`'${x(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new $(`'${x(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new $(`'${x(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new $(`'${x(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new $(`'${x(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new $(`'${x(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new $(`'${x(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new $(`'${x(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new $(`'${x(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new $(`'${x(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new $(`'${x(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new $(`'${x(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new $(`'${x(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new $(`'${x(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new $(`'${x(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new $(`'${x(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new $(`'${x(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new $(`'${x(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new $(`'${x(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:L(at.isArray),isBigInt:L(at.isBigInt),isBoolean:L(at.isBoolean),isFunction:L(at.isFunction),isNull:L(at.isNull),isNumber:L(at.isNumber),isObject:L(at.isObject),isPlainObject:L(at.isPlainObject),isString:L(at.isString),isSymbol:L(at.isSymbol),isUndefined:L(at.isUndefined),isNotArray:L(at.isNotArray),isNotBigInt:L(at.isNotBigInt),isNotBoolean:L(at.isNotBoolean),isNotFunction:L(at.isNotFunction),isNotNull:L(at.isNotNull),isNotNumber:L(at.isNotNumber),isNotObject:L(at.isNotObject),isNotPlainObject:L(at.isNotPlainObject),isNotString:L(at.isNotString),isNotSymbol:L(at.isNotSymbol),isNotUndefined:L(at.isNotUndefined)}};var Tr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Tr||(Tr={}));function jh(e,t,r){_h(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},t,r)}i(jh,"isError");function Sp(e,t,r){_h(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${x(e)}' is not an error instance.`},t,r)}i(Sp,"assertThrownError");function _h(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const o=e.constructor.name;throw new $(`Error constructor '${o}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const o=Jt(e);if(typeof r.matchMessage=="string"){if(!Lv(o,r.matchMessage))throw new $(`Error message

'${o}'

does not contain

'${r.matchMessage}'.`,n)}else if(!o.match(r.matchMessage))throw new $(`Error message

'${o}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new $(t.notInstance,n);else throw new $(t.noError,n)}i(_h,"internalAssertError");function Mp(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Jt(e);if(typeof t.matchMessage=="string"){if(!Lv(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}i(Mp,"internalCheckError");function Uc(e,t,r,n){let o;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(a,l)=>{try{await s}catch(u){o=vt(u)}try{Sp(o,r,n),e===Tr.Assert?a():e===Tr.Check?a(!0):a(o)}catch(u){e===Tr.CheckWrap?a(void 0):e===Tr.Check?a(!1):l(vt(u))}})}catch(s){o=vt(s)}try{return Sp(o,r,n),e===Tr.Check?!0:e!==Tr.Assert?o:void 0}catch(s){if(e===Tr.CheckWrap)return;if(e===Tr.Check)return!1;throw s}}i(Uc,"internalThrowsCheck");function u3(e,t,r){return Uc(Tr.Assert,e,t,r)}i(u3,"throws");function c3(e,t){return Uc(Tr.Check,e,t)}i(c3,"throwsCheck");function d3(e,t,r){return Uc(Tr.AssertWrap,e,t,r)}i(d3,"throwsAssertWrap");function f3(e,t,r){return Uc(Tr.CheckWrap,e,t,r)}i(f3,"throwsCheckWrap");const h3=L(jh);function m3(e,t,r,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,s=o?t:e,a=typeof r=="object"?n:r,l=typeof r=="object"?r:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${x(s)}'`);return h3(o,async()=>{try{await s();return}catch(u){return vt(u)}},l,a)}i(m3,"throwsWaitUntil");const g3={throws:u3,isError:jh},c2={assert:g3,check:{throws:c3,isError(e,t){return Mp(e,t)}},assertWrap:{throws:d3,isError(e,t,r){return _h(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:f3,isError(e,t){if(Mp(e,t))return e}},waitUntil:{throws:m3,isError:L(jh)}},_o=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,uf={isUuid(e,t){if(!String(e).match(_o))throw new $(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(_o))throw new $(`'${String(e)}' is a UUID.`,t)}},d2={assert:uf,check:{isUuid(e){return!!String(e).match(_o)},isNotUuid(e){return!String(e).match(_o)}},assertWrap:{isUuid(e,t){if(!String(e).match(_o))throw new $(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(_o))throw new $(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(_o))return e},isNotUuid(e){if(!String(e).match(_o))return e}},waitUntil:{isUuid:L(uf.isUuid),isNotUuid:L(uf.isNotUuid)}},p3={...r2.assert,..._v.assert,...Uv.assert,...Vv.assert,...zv.assert,...Xv.assert,...Qv.assert,...qv.assert,...e2.assert,...t2.assert,...n2.assert,...o2.assert,...i2.assert,...s2.assert,...a2.assert,...l2.assert,...u2.assert,...Jv.assert,...c2.assert,...d2.assert,...Yv.assert},Uh=[_v,Uv,Vv,zv,Xv,Qv,qv,e2,t2,r2,n2,o2,i2,s2,a2,l2,u2,Jv,c2,d2,Yv],b3=Object.assign({},...Uh.map(e=>e.check)),M=Object.assign(i(function(t){return!!t},"check"),b3);function y3(e,t,r){return Uu(e,t,r,new Set)}i(y3,"checkCustomDeepQuality");function Uu(e,t,r,n){if(e=Fp(e),t=Fp(t),M.isObject(e)&&M.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Uu(Ve(e).sort(),Ve(t).sort(),r,n))return!1;let o=!1;const s=Ve(e).map(a=>{const l=Uu(e[a],t[a],r,n);return M.isPromise(l)&&(o=!0),l});return Tp(o,s)}else if(M.isArray(e)&&M.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let o=!1;const s=e.map((a,l)=>{const u=Uu(a,t[l],r,n);return M.isPromise(u)&&(o=!0),u});return Tp(o,s)}else return r(e,t)}i(Uu,"recursiveCheckCustomDeepQuality");function Fp(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}i(Fp,"flattenComplexObject");function Tp(e,t){return e?new Promise(async(r,n)=>{try{const o=await Promise.all(t);r(o.every(M.isTrue))}catch(o){n(vt(o))}}):t.every(M.isTrue)}i(Tp,"handleMaybePromise");const v3=Object.assign({},...Uh.map(e=>e.assertWrap)),bt=Object.assign(i(function(t,r){if(!t)throw new $("Assertion failed.",r);return t},"assertWrap"),v3);function w3(e){return{equals:i(()=>{},"equals"),notEquals:i(()=>{},"notEquals"),matches:i(()=>{},"matches"),notMatches:i(()=>{},"notMatches"),slowEquals:i(()=>{},"slowEquals")}}i(w3,"tsType");const $3={tsType:w3},k3={assert:$3},x3={fail:i(e=>{throw new $("Failure triggered.",e)},"fail")},D3={...k3.assert,...p3,...x3},jt=Object.assign(i(function(t,r){if(!t)throw new $("Assertion failed.",r)},"assert"),D3),A3=Object.assign({},...Uh.map(e=>e.checkWrap)),zh=Object.assign(i(function(t){if(t)return t},"checkWrap"),A3);function E3(e,t){return M.hasKey(e,"entryType")&&e.entryType===t}i(E3,"isBookEntry");function ki(e,t){return e.controlType===t}i(ki,"isControlInitType");var le;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(le||(le={}));const f2=Symbol("any-type"),C3={[le.Checkbox]:!1,[le.Color]:"",[le.Custom]:void 0,[le.Dropdown]:"",[le.Hidden]:f2,[le.Number]:0,[le.Text]:""};function S3(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===le.Custom)return;const s=C3[o.controlType];s!==f2&&(typeof s!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof s} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}i(S3,"checkControls");function M3(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return M.isPromise(o)?new Promise(async(s,a)=>{try{const l=await o;e.set(n,l),s(l)}catch(l){a(vt(l))}}):(e.set(n,o),o)}}i(M3,"getOrSetFromMap");function ts(e,t,r){if(t in e)return e[t];{const n=r();return M.isPromise(n)?new Promise(async(o,s)=>{try{const a=await n;e[t]=a,o(a)}catch(a){s(vt(a))}}):(e[t]=n,n)}}i(ts,"getOrSet");function Nn(e){return Ve(e).map(t=>[t,e[t]])}i(Nn,"getObjectTypedEntries");function fl(e){return Object.fromEntries(e)}i(fl,"typedObjectFromEntries");function yn(e,t,r){return e.reduce((n,o,s,a)=>{const l=t(o,s,a);return r(l,o,s,a)&&n.push(l),n},[])}i(yn,"filterMap");function F3(e,t,r={}){return e.reduce((n,o,s,a)=>{const l=t(o,s,a);return ts(n,l,()=>[]).push(o),n},{})}i(F3,"groupArrayBy");function Qo(e,t,r={}){try{let n=!1;const o=e.map((s,a,l)=>{const u=t(s,a,l);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(M.isTruthy);return n?new Promise(async(s,a)=>{try{const l=yn(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},M.isTruthy);s(fl(l))}catch(l){a(vt(l))}}):fl(o)}catch(n){throw vt(n)}}i(Qo,"arrayToObject");function T3(e,t){const r=[];let n=!1;for(let o=0;o<e;o++){const s=t(o);M.isPromise(s)&&(n=!0),r.push(s)}return n?Promise.all(r):r}i(T3,"createArray");function N3(e){return Array.isArray(e)?e:[e]}i(N3,"ensureArray");function P3({min:e,max:t}){const{min:r,max:n}=Mh({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,s=Math.ceil(Math.log2(o)),a=Math.ceil(s/8);if(a>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const l=Math.floor(256**a/o)*o,u=new Uint8Array(a);let d;do crypto.getRandomValues(u),d=u.reduce((f,h,m)=>f+h*256**m,0);while(d>=l);return r+d%o}i(P3,"randomInteger");const Np=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function Oi(e=16){let t="";for(let r=0;r<e;r++){const n=P3({min:0,max:Np.length-1});t+=Np[n]}return t}i(Oi,"randomString");function h2(e){if(M.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Jt(t).trim()).join(`
`))}i(h2,"combineErrors");function m2(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):M.hasKey(t,"fallbackValue")?t.fallbackValue:vt(n)):r}catch(r){return t.handleError?t.handleError(r):M.hasKey(t,"fallbackValue")?t.fallbackValue:vt(r)}}i(m2,"wrapInTry");const{hasOwnProperty:_l}=Object.prototype,I3=/[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;function Io(e){return e.length<5e3&&!I3.test(e)?`"${e}"`:JSON.stringify(e)}i(Io,"strEscape");function cf(e,t){if(e.length>200||t)return e.sort(t);for(let r=1;r<e.length;r++){const n=e[r];let o=r;for(;o!==0&&e[o-1]>n;)e[o]=e[o-1],o--;e[o]=n}return e}i(cf,"sort");const O3=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)),Symbol.toStringTag).get;function df(e){return O3.call(e)!==void 0&&e.length!==0}i(df,"isTypedArrayWithEntries");function Pp(e,t,r){e.length<r&&(r=e.length);const n=t===","?"":" ";let o=`"0":${n}${e[0]}`;for(let s=1;s<r;s++)o+=`${t}"${s}":${n}${e[s]}`;return o}i(Pp,"stringifyTypedArray");function B3(e){if(_l.call(e,"circularValue")){const t=e.circularValue;if(typeof t=="string")return`"${t}"`;if(t==null)return t;if(t===Error||t===TypeError)return{toString(){throw new TypeError("Converting circular structure to JSON")}};throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')}return'"[Circular]"'}i(B3,"getCircularValueOption");function R3(e){let t;if(_l.call(e,"deterministic")&&(t=e.deterministic,typeof t!="boolean"&&typeof t!="function"))throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');return t===void 0?!0:t}i(R3,"getDeterministicOption");function L3(e,t){let r;if(_l.call(e,t)&&(r=e[t],typeof r!="boolean"))throw new TypeError(`The "${t}" argument must be of type boolean`);return r===void 0?!0:r}i(L3,"getBooleanOption");function Ip(e,t){let r;if(_l.call(e,t)){if(r=e[t],typeof r!="number")throw new TypeError(`The "${t}" argument must be of type number`);if(!Number.isInteger(r))throw new TypeError(`The "${t}" argument must be an integer`);if(r<1)throw new RangeError(`The "${t}" argument must be >= 1`)}return r===void 0?1/0:r}i(Ip,"getPositiveIntegerOption");function xi(e){return e===1?"1 item":`${e} items`}i(xi,"getItemCount");function j3(e){const t=new Set;for(const r of e)(typeof r=="string"||typeof r=="number")&&t.add(String(r));return t}i(j3,"getUniqueReplacerSet");function _3(e){if(_l.call(e,"strict")){const t=e.strict;if(typeof t!="boolean")throw new TypeError('The "strict" argument must be of type boolean');if(t)return r=>{let n=`Object can not safely be stringified. Received type ${typeof r}`;throw typeof r!="function"&&(n+=` (${r.toString()})`),new Error(n)}}}i(_3,"getStrictOption");function U3(e){e={...e};const t=_3(e);t&&(e.bigint===void 0&&(e.bigint=!1),"circularValue"in e||(e.circularValue=Error));const r=B3(e),n=L3(e,"bigint"),o=R3(e),s=typeof o=="function"?o:void 0,a=Ip(e,"maximumDepth"),l=Ip(e,"maximumBreadth");function u(g,p,y,w,k,D){let C=p[g];switch(typeof C=="object"&&C!==null&&typeof C.toJSON=="function"&&(C=C.toJSON(g)),C=w.call(p,g,C),typeof C){case"string":return Io(C);case"object":{if(C===null)return"null";if(y.includes(C))return r;let P="",R=",";const J=D;if(Array.isArray(C)){if(C.length===0)return"[]";if(a<y.length+1)return'"[Array]"';y.push(C),k!==""&&(D+=k,P+=`
${D}`,R=`,
${D}`);const Fe=Math.min(C.length,l);let nt=0;for(;nt<Fe-1;nt++){const Ar=u(String(nt),C,y,w,k,D);P+=Ar===void 0?"null":Ar,P+=R}const Ge=u(String(nt),C,y,w,k,D);if(P+=Ge===void 0?"null":Ge,C.length-1>l){const Ar=C.length-l-1;P+=`${R}"... ${xi(Ar)} not stringified"`}return k!==""&&(P+=`
${J}`),y.pop(),`[${P}]`}let ee=Object.keys(C);const te=ee.length;if(te===0)return"{}";if(a<y.length+1)return'"[Object]"';let Y="",pe="";k!==""&&(D+=k,R=`,
${D}`,Y=" ");const we=Math.min(te,l);o&&!df(C)&&(ee=cf(ee,s)),y.push(C);for(let Fe=0;Fe<we;Fe++){const nt=ee[Fe],Ge=u(nt,C,y,w,k,D);Ge!==void 0&&(P+=`${pe}${Io(nt)}:${Y}${Ge}`,pe=R)}if(te>l){const Fe=te-l;P+=`${pe}"...":${Y}"${xi(Fe)} not stringified"`,pe=R}return k!==""&&pe.length>1&&(P=`
${D}${P}
${J}`),y.pop(),`{${P}}`}case"number":return isFinite(C)?String(C):t?t(C):"null";case"boolean":return C?"true":"false";case"undefined":return;case"bigint":if(n)return String(C);default:return t?t(C):void 0}}i(u,"stringifyFnReplacer");function d(g,p,y,w,k,D){switch(typeof p=="object"&&p!==null&&typeof p.toJSON=="function"&&(p=p.toJSON(g)),typeof p){case"string":return Io(p);case"object":{if(p===null)return"null";if(y.includes(p))return r;const C=D;let P="",R=",";if(Array.isArray(p)){if(p.length===0)return"[]";if(a<y.length+1)return'"[Array]"';y.push(p),k!==""&&(D+=k,P+=`
${D}`,R=`,
${D}`);const te=Math.min(p.length,l);let Y=0;for(;Y<te-1;Y++){const we=d(String(Y),p[Y],y,w,k,D);P+=we===void 0?"null":we,P+=R}const pe=d(String(Y),p[Y],y,w,k,D);if(P+=pe===void 0?"null":pe,p.length-1>l){const we=p.length-l-1;P+=`${R}"... ${xi(we)} not stringified"`}return k!==""&&(P+=`
${C}`),y.pop(),`[${P}]`}y.push(p);let J="";k!==""&&(D+=k,R=`,
${D}`,J=" ");let ee="";for(const te of w){const Y=d(te,p[te],y,w,k,D);Y!==void 0&&(P+=`${ee}${Io(te)}:${J}${Y}`,ee=R)}return k!==""&&ee.length>1&&(P=`
${D}${P}
${C}`),y.pop(),`{${P}}`}case"number":return isFinite(p)?String(p):t?t(p):"null";case"boolean":return p?"true":"false";case"undefined":return;case"bigint":if(n)return String(p);default:return t?t(p):void 0}}i(d,"stringifyArrayReplacer");function f(g,p,y,w,k){switch(typeof p){case"string":return Io(p);case"object":{if(p===null)return"null";if(typeof p.toJSON=="function"){if(p=p.toJSON(g),typeof p!="object")return f(g,p,y,w,k);if(p===null)return"null"}if(y.includes(p))return r;const D=k;if(Array.isArray(p)){if(p.length===0)return"[]";if(a<y.length+1)return'"[Array]"';y.push(p),k+=w;let Y=`
${k}`;const pe=`,
${k}`,we=Math.min(p.length,l);let Fe=0;for(;Fe<we-1;Fe++){const Ge=f(String(Fe),p[Fe],y,w,k);Y+=Ge===void 0?"null":Ge,Y+=pe}const nt=f(String(Fe),p[Fe],y,w,k);if(Y+=nt===void 0?"null":nt,p.length-1>l){const Ge=p.length-l-1;Y+=`${pe}"... ${xi(Ge)} not stringified"`}return Y+=`
${D}`,y.pop(),`[${Y}]`}let C=Object.keys(p);const P=C.length;if(P===0)return"{}";if(a<y.length+1)return'"[Object]"';k+=w;const R=`,
${k}`;let J="",ee="",te=Math.min(P,l);df(p)&&(J+=Pp(p,R,l),C=C.slice(p.length),te-=p.length,ee=R),o&&(C=cf(C,s)),y.push(p);for(let Y=0;Y<te;Y++){const pe=C[Y],we=f(pe,p[pe],y,w,k);we!==void 0&&(J+=`${ee}${Io(pe)}: ${we}`,ee=R)}if(P>l){const Y=P-l;J+=`${ee}"...": "${xi(Y)} not stringified"`,ee=R}return ee!==""&&(J=`
${k}${J}
${D}`),y.pop(),`{${J}}`}case"number":return isFinite(p)?String(p):t?t(p):"null";case"boolean":return p?"true":"false";case"undefined":return;case"bigint":if(n)return String(p);default:return t?t(p):void 0}}i(f,"stringifyIndent");function h(g,p,y){switch(typeof p){case"string":return Io(p);case"object":{if(p===null)return"null";if(typeof p.toJSON=="function"){if(p=p.toJSON(g),typeof p!="object")return h(g,p,y);if(p===null)return"null"}if(y.includes(p))return r;let w="";const k=p.length!==void 0;if(k&&Array.isArray(p)){if(p.length===0)return"[]";if(a<y.length+1)return'"[Array]"';y.push(p);const J=Math.min(p.length,l);let ee=0;for(;ee<J-1;ee++){const Y=h(String(ee),p[ee],y);w+=Y===void 0?"null":Y,w+=","}const te=h(String(ee),p[ee],y);if(w+=te===void 0?"null":te,p.length-1>l){const Y=p.length-l-1;w+=`,"... ${xi(Y)} not stringified"`}return y.pop(),`[${w}]`}let D=Object.keys(p);const C=D.length;if(C===0)return"{}";if(a<y.length+1)return'"[Object]"';let P="",R=Math.min(C,l);k&&df(p)&&(w+=Pp(p,",",l),D=D.slice(p.length),R-=p.length,P=","),o&&(D=cf(D,s)),y.push(p);for(let J=0;J<R;J++){const ee=D[J],te=h(ee,p[ee],y);te!==void 0&&(w+=`${P}${Io(ee)}:${te}`,P=",")}if(C>l){const J=C-l;w+=`${P}"...":"${xi(J)} not stringified"`}return y.pop(),`{${w}}`}case"number":return isFinite(p)?String(p):t?t(p):"null";case"boolean":return p?"true":"false";case"undefined":return;case"bigint":if(n)return String(p);default:return t?t(p):void 0}}i(h,"stringifySimple");function m(g,p,y){if(arguments.length>1){let w="";if(typeof y=="number"?w=" ".repeat(Math.min(y,10)):typeof y=="string"&&(w=y.slice(0,10)),p!=null){if(typeof p=="function")return u("",{"":g},[],p,w,"");if(Array.isArray(p))return d("",g,[],j3(p),w,"")}if(w.length!==0)return f("",g,[],w,"")}return h("",g,[])}return i(m,"stringify"),m}i(U3,"configure");const z3=U3({maximumDepth:15,maximumBreadth:50});function V3(...e){return z3(...e)||""}i(V3,"safeJsonStringify");function En(e,{enableUnsafeCopyAll:t}={}){try{const r=t?JSON.stringify(e):V3(e);return JSON.parse(r)}catch(r){throw console.error("Failed to JSON copy for",e),r}}i(En,"copyThroughJson");const q3="modulepreload",W3=i(function(e){return"/vira/book/"+e},"assetsURL"),Op={},oc=i(function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let u=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};i(u,"allSettled"),document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");o=u(r.map(d=>{if(d=W3(d),d in Op)return;Op[d]=!0;const f=d.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":q3,f||(m.as="script"),m.crossOrigin="",m.href=d,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((g,p)=>{m.addEventListener("load",g),m.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i(s,"handlePreloadError"),o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},"preload");var Ot;(function(e){e.Standard="stdout",e.Error="stderr"})(Ot||(Ot={}));var ve;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ve||(ve={}));async function K3(){return await Ty({async[Fn.Node](){const e=(await oc(async()=>{const{default:t}=await import("./index-aeZXflCI.js");return{default:t}},[])).default;return{[ve.Bold]:e.bold.open,[ve.Debug]:e.blueBright.open,[ve.Error]:e.red.open,[ve.Faint]:e.gray.open,[ve.Info]:e.cyan.open,[ve.Mutate]:e.magenta.open,[ve.NormalWeight]:"\x1B[22m",[ve.Plain]:"",[ve.Reset]:e.reset.open,[ve.Success]:e.green.open,[ve.Warning]:e.yellow.open}},[Fn.Web](){return Promise.resolve({[ve.Bold]:"font-weight: bold",[ve.Debug]:"color: blue",[ve.Error]:"color: red",[ve.Faint]:"color: grey",[ve.Info]:"color: teal",[ve.Mutate]:"color: magenta",[ve.NormalWeight]:"",[ve.Plain]:"",[ve.Reset]:"",[ve.Success]:"color: green",[ve.Warning]:"color: orange"})}})}i(K3,"determineDefaultLogColors");const _r=await K3(),G3={[ve.Bold]:{colors:[_r.bold],logType:Ot.Standard},[ve.Debug]:{colors:[_r.debug],logType:Ot.Standard},[ve.Faint]:{colors:[_r.faint],logType:Ot.Standard},[ve.Info]:{colors:[_r.info],logType:Ot.Standard},[ve.Mutate]:{colors:[_r.mutate,_r.bold],logType:Ot.Standard},[ve.NormalWeight]:{colors:[_r.normalWeight],logType:Ot.Standard},[ve.Plain]:{colors:[],logType:Ot.Standard},[ve.Reset]:{colors:[_r.reset],logType:Ot.Standard},[ve.Success]:{colors:[_r.success,_r.bold],logType:Ot.Standard},[ve.Error]:{colors:[_r.error,_r.bold],logType:Ot.Error},[ve.Warning]:{colors:[_r.warning],logType:Ot.Error}};function kr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}i(kr,"addPrefix");function Bi({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}i(Bi,"removePrefix");function g2(e,t){try{let r=!1;const n=Nn(e).map(([o,s])=>{const a=t(o,s,e);return a instanceof Promise?(r=!0,a):a?[a.key,a.value]:void 0}).filter(M.isTruthy);return r?new Promise(async(o,s)=>{try{const a=yn(await Promise.all(n),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},M.isTruthy);o(fl(a))}catch(a){s(vt(a))}}):fl(n)}catch(r){throw vt(r)}}i(g2,"mapObject");function p2(e,t){return g2(e,(r,n)=>{const o=n,s=t(n,e);return s instanceof Promise?s.then(a=>({key:o,value:a})):{key:o,value:s}})}i(p2,"mapEnumToObject");function b2(e,...t){const r={...e};return t.forEach(n=>{n&&Nn(n).forEach(([o,s])=>{s!=null&&(r[o]=s)})}),r}i(b2,"mergeDefinedProperties");function H3(e){return e.replace(/,/g,"")}i(H3,"removeCommas");function Z3(e){return typeof e=="number"?e:Number(typeof e=="string"?H3(e):e)}i(Z3,"toNumber");function J3(e){const t=Y3(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}i(J3,"toEnsuredNumber");function Y3(e){const t=Z3(e);if(!isNaN(t))return t}i(Y3,"toMaybeNumber");const y2="px";function hl(e){return Vh({value:e,suffix:y2})}i(hl,"addPx");function X3(e){return J3(qh({value:e,suffix:y2}))}i(X3,"removePx");function Vh({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}i(Vh,"addSuffix");function qh({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}i(qh,"removeSuffix");async function Q3(){return await Ty({async[Fn.Node](){const{inspect:e}=await oc(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const o=t.map(l=>typeof l=="string"?l:e(l));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[ve.Reset].colors.join("")].join(""),css:void 0}}},[Fn.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:yn(r.colorConfig[t].colors,a=>qh({value:a,suffix:";"}),M.isTruthy).join("; ");return{text:[e.map(a=>typeof a=="string"?a:a instanceof Error?Jt(a):x(a)).join(`
`),r.omitColors?"":r.colorConfig[ve.Reset].colors.join("")].join(""),css:n}}}})}i(Q3,"createToLogString");const e6=await Q3(),t6={colorConfig:G3,omitColors:!1},r6=v2({[Ot.Error](){},[Ot.Standard](){}});function v2(e,t){const r=b2(t6,t);function n(s){e[r.colorConfig[s.colorKey].logType](e6({...s,options:r}))}i(n,"writeLog");const o=p2(ve,s=>(...a)=>n({args:a,colorKey:s}));return{...o,if(s){return s?o:r6}}}i(v2,"createLogger");const n6=Sh(Fn.Node)?{[Ot.Error]({text:e}){process.stderr.write(e+`
`)},[Ot.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[Ot.Error]({text:e,css:t}){console.error(kr({value:e,prefix:"%c"}),t)},[Ot.Standard]({text:e,css:t}){console.log(kr({value:e,prefix:"%c"}),t)}},w2=v2(n6);function o6(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}i(o6,"clamp$2");function $2(e,{digits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}i($2,"round");function i6({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const o=Ov(Rv(t,{caseSensitive:r}),"g"),s=[];return e.replace(o,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new TypeError(`Match index "${l}" is not a number. Searching for "${t}" in "${e}".`);const u=a[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);s.push({index:l,length:u.length});const d=a[0];if(typeof d!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${l} is not a string.`);return d}),s}i(i6,"findSubstringIndexes");function s6(e,t,{caseSensitive:r}){const n=i6({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),o=Rv(t,{caseSensitive:r});return e.split(o).reduce((a,l,u)=>{const d=n[u],f=a.concat(l);if(d){const h=e.slice(d.index,d.index+d.length);return f.concat(h)}else return f},[])}i(s6,"splitIncludeSplit");function a6(e,t){return e.split(t)}i(a6,"safeSplit");function Bp(e,t){const{min:r,max:n}=Mh(t);if(t.takeOverflow){const o=n-r+1,s=(e-r)%o;return s<0?r+o+s:r+s}else return e>n?r:e<r?n:e}i(Bp,"wrapNumber");function st(e,t){let r=!1;const n=Ve(e).reduce((o,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),o[s]=a,o},{});return r?new Promise(async(o,s)=>{try{await Promise.all(Ve(n).map(async a=>{const l=await n[a];n[a]=l})),o(n)}catch(a){s(vt(a))}}):n}i(st,"mapObjectValues");function zc(e,t){const r=Nn(e).filter(([n,o])=>t(n,o,e));return fl(r)}i(zc,"filterObject");function l6(e,t){return zc(e,r=>t.includes(r))}i(l6,"pickObjectKeys");function ml(e){return Ve(e).map(t=>e[t])}i(ml,"getObjectTypedValues");function k2(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}i(k2,"collapseWhiteSpace");var gl;(function(e){e.Upper="upper",e.Lower="lower"})(gl||(gl={}));const u6={firstLetterCase:gl.Lower};function c6(e,t){if(!e.length)return"";const r=e[0];return(t===gl.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}i(c6,"setFirstLetterCasing");function d6(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const a=s[1];return a?a.toUpperCase():""}),o=b2(u6,t);return c6(n,o.firstLetterCase)}i(d6,"kebabCaseToCamelCase");function f6(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}i(f6,"joinWithFinalConjunction");function h6({value:e,wrapper:t}){return kr({value:Vh({value:e,suffix:t}),prefix:t})}i(h6,"wrapString");function jn(){function e(t){return class extends CustomEvent{static{i(this,"TypedEventConstructor")}static type=t;constructor(n){super(t,n)}}}return i(e,"defineEventTypeString"),e}i(jn,"defineTypedCustomEvent");function Wh(e){return class extends Event{static{i(this,"TypedEventConstructor")}static type=e;constructor(r){super(e,r)}}}i(Wh,"defineTypedEvent$1");class m6{static{i(this,"TypedListenTarget")}listeners={};universalListeners=new Map;getListenerCount(){return ml(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=i(()=>this.universalListeners.delete(t)||!1,"removeListener");function o(s,a){r.once&&n(),t(s,a)}return i(o,"wrappedCallback"),this.universalListeners.set(t,{listener:o,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const o=M.isString(t)?t:t.type,s=i(()=>this.listeners[o]?.delete(r)||!1,"removeListener");function a(l,u){n.once&&s(),r(l,u)}return i(a,"wrappedCallback"),ts(this.listeners,o,()=>new Map).set(r,{listener:a,removeListener:s}),s}removeListener(t,r){const n=M.isString(t)?t:t.type,o=this.listeners[n];if(!o)return!1;const s=o.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(o=>{o.listener(t,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(t,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=ml(this.listeners).reduce((n,o)=>{const s=o.size||0;return o.clear(),n+s},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class Kh extends m6{static{i(this,"ListenTarget")}}function po(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}i(po,"listenTo");function I0(e,t,r){return po(globalThis,e,t,r)}i(I0,"listenToGlobal");function Gh(e,t){return pl(e.title),e.parent?[...Gh(e.parent),pl(e.parent.title)].concat([]):[]}i(Gh,"listUrlBreadcrumbs");function pl(e){return k2(e).toLowerCase().replaceAll(/\s/g,"-")}i(pl,"titleToUrlBreadcrumb");function g6({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}i(g6,"doBreadcrumbsStartWith");const p6=/[/?#&=]/;function x2(e){const t=e.match(p6);return e.trim()?pl(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}i(x2,"getPageTitleError");const b6={[rr.ElementExample]:()=>[],[rr.Page]:e=>[x2(e.title),...S3(e.controls,e.title)].filter(M.isTruthy),[rr.Root]:()=>[]},ic="_isBookTreeNode",D2=new Map;function y6(e){return D2.get(e)}i(y6,"getTreeFromCache");function v6(e,t){M3(D2,e,()=>t)}i(v6,"addTreeToCache");function Is(e,t){return A2(e)&&e.entry.entryType===t}i(Is,"isBookTreeNode");function A2(e){return!!(M.hasKeys(e,[ic,"entry"])&&e[ic])}i(A2,"isAnyBookTreeNode");function w6(){return{[ic]:!0,entry:{entryType:rr.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}i(w6,"createEmptyBookTreeRoot");function $6({entries:e,debug:t}){const r=y6(e);if(r)return r;const n=w6();e.forEach(a=>Hh({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=E2(n),s={tree:n,flattenedNodes:o};return v6(e,s),t&&console.info("element-book tree:",n),s}i($6,"createBookTreeFromEntries");function k6(e,t,r){if(!t.parent)return e;const n=O0(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Hh({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=O0(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Gh(t).join(" > ")}`);return o}i(k6,"getOrAddImmediateParent");function Hh({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=b6[t.entryType](t);t.errors.push(...o);const s=k6(e,t,r),a=pl(t.title),l=s.children[a];if(l){if(n){if(l.manuallyAdded){l.entry.errors.push(new Error(`Cannot create duplicate '${a}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}l.manuallyAdded=!0}return}const u={[ic]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};s.children[a]=u,E3(t,rr.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(d=>Hh({tree:e,newEntry:d,debug:r,manuallyAdded:n}))}i(Hh,"addEntryToTree");function O0(e,t){const r=A2(e)?e.fullUrlBreadcrumbs.slice(0,-1):Gh(e);return r.length?r.reduce((o,s)=>{if(o)return o.children[s]},t):void 0}i(O0,"traverseToImmediateParent");function E2(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>E2(o));return[e,...r].flat()}i(E2,"flattenTree");function Zh(e,t){return Jh(e,["",...t],void 0)}i(Zh,"traverseControls");function Jh(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const s=e.children[o||""],a=s&&Jh(s,n,r);return{...e.controls,...a}}i(Jh,"traverseAndInsertNewControls");function x6(e,t,r){const n={...e};return Jh(n,["",...t],r),n}i(x6,"createNewControls");function C2(e,t){const r=t?.controls||(Is(e,rr.Page)?st(e.entry.controls,(o,s)=>s.initValue):{});return{children:st(e.children,(o,s)=>C2(s,t?.children?.[s.urlBreadcrumb])),controls:r}}i(C2,"updateTreeControls");function Pe(e){const t={...e,entryType:rr.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:t.useVerticalExamples,entryType:rr.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),x2(n.title)].filter(M.isTruthy)};r.add(n.title),t.elementExamples[pl(o.title)]=o}}),t}i(Pe,"defineBookPage");var Pr;(function(e){e.Search="search",e.Book="book"})(Pr||(Pr={}));function S2(e){return e[0]===Pr.Book?"":e[1]?decodeURIComponent(e[1]):""}i(S2,"extractSearchQuery");const Vs={hash:void 0,paths:[Pr.Book],search:void 0};class sc{static{i(this,"CssPropertyRegistry")}static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=sc.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(M2.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return sc.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw sa(r,`Failed to define CSS var: ${x(t,4)}

`)}}}const M2=new sc;const zu=globalThis,Yh=zu.ShadowRoot&&(zu.ShadyCSS===void 0||zu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xh=Symbol(),Rp=new WeakMap;let qo=class{static{i(this,"n")}constructor(t,r,n){if(this._$cssResult$=!0,n!==Xh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Yh&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Rp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Rp.set(r,t))}return t}toString(){return this.cssText}};const xe=i(e=>new qo(typeof e=="string"?e:e+"",void 0,Xh),"r$3"),F2=i((e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new qo(r,e,Xh)},"i$5"),D6=i((e,t)=>{if(Yh)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=zu.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},"S$1"),Lp=Yh?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return xe(r)})(e):e;const{is:A6,defineProperty:E6,getOwnPropertyDescriptor:C6,getOwnPropertyNames:S6,getOwnPropertySymbols:M6,getPrototypeOf:F6}=Object,Vc=globalThis,jp=Vc.trustedTypes,T6=jp?jp.emptyScript:"",N6=Vc.reactiveElementPolyfillSupport,rl=i((e,t)=>e,"d$2"),ac={toAttribute(e,t){switch(t){case Boolean:e=e?T6:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Qh=i((e,t)=>!A6(e,t),"f$3"),_p={attribute:!0,type:String,converter:ac,reflect:!1,useDefault:!1,hasChanged:Qh};Symbol.metadata??=Symbol("metadata"),Vc.litPropertyMetadata??=new WeakMap;let Ds=class extends HTMLElement{static{i(this,"y")}static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=_p){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&E6(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:s}=C6(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get:o,set(a){const l=o?.call(this);s?.call(this,a),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_p}static _$Ei(){if(this.hasOwnProperty(rl("elementProperties")))return;const t=F6(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rl("properties"))){const r=this.properties,n=[...S6(r),...M6(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Lp(o))}else t!==void 0&&r.push(Lp(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return D6(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:ac).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ac;this._$Em=o;const l=a.fromAttribute(r,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,r,n,o=!1,s){if(t!==void 0){const a=this.constructor;if(o===!1&&(s=this[t]),n??=a.getPropertyOptions(t),!((n.hasChanged??Qh)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:s},a){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??r??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n){const{wrapped:a}=s,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Ds.elementStyles=[],Ds.shadowRootOptions={mode:"open"},Ds[rl("elementProperties")]=new Map,Ds[rl("finalized")]=new Map,N6?.({ReactiveElement:Ds}),(Vc.reactiveElementVersions??=[]).push("2.1.2");const em=globalThis,Up=i(e=>e,"i$3"),lc=em.trustedTypes,zp=lc?lc.createPolicy("lit-html",{createHTML:i(e=>e,"createHTML")}):void 0,T2="$lit$",zo=`lit$${Math.random().toFixed(9).slice(2)}$`,N2="?"+zo,P6=`<${N2}>`,qi=document,bl=i(()=>qi.createComment(""),"c$3"),yl=i(e=>e===null||typeof e!="object"&&typeof e!="function","a$1"),tm=Array.isArray,I6=i(e=>tm(e)||typeof e?.[Symbol.iterator]=="function","d$1"),ff=`[ 	
\f\r]`,Ia=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vp=/-->/g,qp=/>/g,Di=RegExp(`>|${ff}(?:([^\\s"'>=/]+)(${ff}*=${ff}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wp=/'/g,Kp=/"/g,P2=/^(?:script|style|textarea|title)$/i,O6=i(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),"x"),B6=O6(1),gn=Symbol.for("lit-noChange"),re=Symbol.for("lit-nothing"),Gp=new WeakMap,Ni=qi.createTreeWalker(qi,129);function I2(e,t){if(!tm(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zp!==void 0?zp.createHTML(t):t}i(I2,"V");const R6=i((e,t)=>{const r=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",a=Ia;for(let l=0;l<r;l++){const u=e[l];let d,f,h=-1,m=0;for(;m<u.length&&(a.lastIndex=m,f=a.exec(u),f!==null);)m=a.lastIndex,a===Ia?f[1]==="!--"?a=Vp:f[1]!==void 0?a=qp:f[2]!==void 0?(P2.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=Di):f[3]!==void 0&&(a=Di):a===Di?f[0]===">"?(a=o??Ia,h=-1):f[1]===void 0?h=-2:(h=a.lastIndex-f[2].length,d=f[1],a=f[3]===void 0?Di:f[3]==='"'?Kp:Wp):a===Kp||a===Wp?a=Di:a===Vp||a===qp?a=Ia:(a=Di,o=void 0);const g=a===Di&&e[l+1].startsWith("/>")?" ":"";s+=a===Ia?u+P6:h>=0?(n.push(d),u.slice(0,h)+T2+u.slice(h)+zo+g):u+zo+(h===-2?l:g)}return[I2(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},"N");class vl{static{i(this,"S")}constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let s=0,a=0;const l=t.length-1,u=this.parts,[d,f]=R6(t,r);if(this.el=vl.createElement(d,n),Ni.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Ni.nextNode())!==null&&u.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(T2)){const m=f[a++],g=o.getAttribute(h).split(zo),p=/([.?@])?(.*)/.exec(m);u.push({type:1,index:s,name:p[2],strings:g,ctor:p[1]==="."?j6:p[1]==="?"?_6:p[1]==="@"?U6:Wc}),o.removeAttribute(h)}else h.startsWith(zo)&&(u.push({type:6,index:s}),o.removeAttribute(h));if(P2.test(o.tagName)){const h=o.textContent.split(zo),m=h.length-1;if(m>0){o.textContent=lc?lc.emptyScript:"";for(let g=0;g<m;g++)o.append(h[g],bl()),Ni.nextNode(),u.push({type:2,index:++s});o.append(h[m],bl())}}}else if(o.nodeType===8)if(o.data===N2)u.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(zo,h+1))!==-1;)u.push({type:7,index:s}),h+=zo.length-1}s++}}static createElement(t,r){const n=qi.createElement("template");return n.innerHTML=t,n}}function qs(e,t,r=e,n){if(t===gn)return t;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const s=yl(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(t=qs(e,o._$AS(e,t.values),o,n)),t}i(qs,"M$2");class L6{static{i(this,"R")}constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=(t?.creationScope??qi).importNode(r,!0);Ni.currentNode=o;let s=Ni.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let d;u.type===2?d=new qc(s,s.nextSibling,this,t):u.type===1?d=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(d=new z6(s,this,t)),this._$AV.push(d),u=n[++l]}a!==u?.index&&(s=Ni.nextNode(),a++)}return Ni.currentNode=qi,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}let qc=class O2{static{i(this,"k")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=re,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=qs(this,t,r),yl(t)?t===re||t==null||t===""?(this._$AH!==re&&this._$AR(),this._$AH=re):t!==this._$AH&&t!==gn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):I6(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==re&&yl(this._$AH)?this._$AA.nextSibling.data=t:this.T(qi.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=vl.createElement(I2(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const s=new L6(o,this),a=s.u(this.options);s.p(r),this.T(a),this._$AH=s}}_$AC(t){let r=Gp.get(t.strings);return r===void 0&&Gp.set(t.strings,r=new vl(t)),r}k(t){tm(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of t)o===r.length?r.push(n=new O2(this.O(bl()),this.O(bl()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=Up(t).nextSibling;Up(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Wc{static{i(this,"H")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,s){this.type=1,this._$AH=re,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=re}_$AI(t,r=this,n,o){const s=this.strings;let a=!1;if(s===void 0)t=qs(this,t,r,0),a=!yl(t)||t!==this._$AH&&t!==gn,a&&(this._$AH=t);else{const l=t;let u,d;for(t=s[0],u=0;u<s.length-1;u++)d=qs(this,l[n+u],r,u),d===gn&&(d=this._$AH[u]),a||=!yl(d)||d!==this._$AH[u],d===re?t=re:t!==re&&(t+=(d??"")+s[u+1]),this._$AH[u]=d}a&&!o&&this.j(t)}j(t){t===re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class j6 extends Wc{static{i(this,"I")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===re?void 0:t}}class _6 extends Wc{static{i(this,"L")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==re)}}class U6 extends Wc{static{i(this,"z")}constructor(t,r,n,o,s){super(t,r,n,o,s),this.type=5}_$AI(t,r=this){if((t=qs(this,t,r,0)??re)===gn)return;const n=this._$AH,o=t===re&&n!==re||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==re&&(n===re||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z6{static{i(this,"Z")}constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){qs(this,t)}}const V6={I:qc},q6=em.litHtmlPolyfillSupport;q6?.(vl,qc),(em.litHtmlVersions??=[]).push("3.3.2");const W6=i((e,t,r)=>{const n=r?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const s=r?.renderBefore??null;n._$litPart$=o=new qc(t.insertBefore(bl(),s),s,void 0,r??{})}return o._$AI(e),o},"D");const rm=globalThis;let nl=class extends Ds{static{i(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=W6(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gn}};nl._$litElement$=!0,nl.finalized=!0,rm.litElementHydrateSupport?.({LitElement:nl});const K6=rm.litElementPolyfillSupport;K6?.({LitElement:nl});(rm.litElementVersions??=[]).push("4.2.2");function nm({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}i(nm,"setCssVarValue");function G6({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}i(G6,"readCssVarValue");var Ws;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(Ws||(Ws={}));var Hp;(function(e){e.Space="+",e.Comma="#"})(Hp||(Hp={}));function Xn(e,t={}){return st(e,(n,o)=>{H6(n);const s=o,a=M.isObject(s)&&!(s instanceof qo),l=M.isString(s)||M.isNumber(s)||s instanceof qo?String(s):String(s.default),u=M.isString(s)||M.isNumber(s)||s instanceof qo?String(s):String(s.initialValue||s.default),d=xe(kr({value:n.replace(/^-+/,""),prefix:"--"})),f={name:d,value:F2`var(${d}, ${xe(l)})`,syntax:M.isString(s)||M.isNumber(s)||s instanceof qo?Ws.Any:B0(s.syntax),default:l},h=String(f.name);if(!u)throw new Error(`Initial value for CSS var ${h} cannot be empty.`);return a&&!t.skipRegistration&&M2.registerProperty({inherits:!0,name:h,initialValue:u,syntax:f.syntax})&&globalThis.document?.documentElement&&nm({forCssVar:f,onElement:globalThis.document.documentElement,toValue:l}),f})}i(Xn,"defineCssVars");function H6(e){try{if(M.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(Qi("Invalid CSS var name.",t,`Got '${x(e)}'`))}}i(H6,"assertValidCssVarName");function B0(e){return e?M.isString(e)?e:e.union?e.union.map(t=>B0(t)).join(" | "):e.list?`${B0(e.list.values)}${e.list.separator}`:e.raw:Ws.Any}i(B0,"createSyntaxString");const Oe=Xn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Z6={nav:{hover:{background:Oe["element-book-nav-hover-background-color"],foreground:Oe["element-book-nav-hover-foreground-color"]},active:{background:Oe["element-book-nav-active-background-color"],foreground:Oe["element-book-nav-active-foreground-color"]},selected:{background:Oe["element-book-nav-selected-background-color"],foreground:Oe["element-book-nav-selected-foreground-color"]}},accent:{icon:Oe["element-book-accent-icon-color"]},page:{background:Oe["element-book-page-background-color"],backgroundFaint1:Oe["element-book-page-background-faint-level-1-color"],backgroundFaint2:Oe["element-book-page-background-faint-level-2-color"],foreground:Oe["element-book-page-foreground-color"],foregroundFaint1:Oe["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Oe["element-book-page-foreground-faint-level-2-color"]}};function J6(e,t){B2(e,t,Z6)}i(J6,"setThemeCssVars");function R0(e){return M.hasKey(e,"_$cssResult$")}i(R0,"isCssResult");function Zp(e){return M.hasKeys(e,["name","value","default"])&&M.isString(e.default)&&R0(e.name)&&R0(e.value)}i(Zp,"isCssVarDefinition");function B2(e,t,r){Object.entries(t).forEach(([n,o])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(R0(o)){if(!Zp(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);nm({forCssVar:s,onElement:e,toValue:String(o)})}else{if(Zp(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);B2(e,o,s)}})}i(B2,"recursiveSetThemeCssVars");function Ka(e,t){let r=e.length,n,o,s=!1,a=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,s=!0),Array.isArray(t[0])?o=t:(o=t.length>0?t.map(f=>[f]):[[]],a=!0);let l=o[0].length,u=o[0].map((f,h)=>o.map(m=>m[h])),d=n.map(f=>u.map(h=>{let m=0;if(!Array.isArray(f)){for(let g of h)m+=f*g;return m}for(let g=0;g<f.length;g++)m+=f[g]*(h[g]||0);return m}));return r===1&&s&&(d=d[0]),l===1&&a?r===1&&s?d[0]:d.map(f=>f[0]):d}i(Ka,"multiplyMatrices");function hf(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}i(hf,"dot3");function yt(e,t,r=[0,0,0]){const n=hf(e,t[0]),o=hf(e,t[1]),s=hf(e,t[2]);return r[0]=n,r[1]=o,r[2]=s,r}i(yt,"multiply_v3_m3x3");function da(e){return Ho(e)==="string"}i(da,"isString");function Ho(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}i(Ho,"type");function om(e,{precision:t=16,unit:r}){return Re(e)?"none":(e=+im(e,t),e+(r??""))}i(om,"serializeNumber");function Re(e){return e===null}i(Re,"isNone");function At(e){return Re(e)?0:e}i(At,"skipNone");function im(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const o=10**(t-n);return Math.floor(e*o+.5)/o}i(im,"toPrecision");function wl(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}i(wl,"interpolate");function R2(e,t,r){return(r-e)/(t-e)}i(R2,"interpolateInv");function L0(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:wl(t[0],t[1],R2(e[0],e[1],r))}i(L0,"mapRange");function Kc(e,t,r){return Math.max(Math.min(r,t),e)}i(Kc,"clamp$1");function Gc(e,t){return Math.sign(e)===Math.sign(t)?e:-e}i(Gc,"copySign");function Et(e,t){return Gc(Math.abs(e)**t,e)}i(Et,"spow");function sm(e,t){return t===0?0:e/t}i(sm,"zdiv");function L2(e,t,r=0,n=e.length){for(;r<n;){const o=r+n>>1;e[o]<t?r=o+1:n=o}return r}i(L2,"bisectLeft");function Ks(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===r)return!0;if(!o||o==="Object")return!1;e=n}return!1}i(Ks,"isInstance");var Y6=Object.freeze({__proto__:null,bisectLeft:L2,clamp:Kc,copySign:Gc,interpolate:wl,interpolateInv:R2,isInstance:Ks,isNone:Re,isString:da,mapRange:L0,multiplyMatrices:Ka,multiply_v3_m3x3:yt,serializeNumber:om,skipNone:At,spow:Et,toPrecision:im,type:Ho,zdiv:sm});class X6{static{i(this,"Hooks")}add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ei=new X6;var Zr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:i(function(t){this.verbose&&globalThis?.console?.warn?.(t)},"warn")};let Jp=class{static{i(this,"Type")}type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:o,max:s}=n.groups;(o||s)&&(this.range=[+o,+s])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),L0(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return t=L0(this.coordRange,n,t),om(t,{unit:o,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return Ks(t,this)?t:new this(t,r)}};const mf=Symbol("instance");class uc{static{i(this,"Format")}type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[mf]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let s=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(a=>Jp.get(a,s))}))}serializeCoords(t,r,n){return n=t.map((o,s)=>Jp.get(n?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((o,s)=>n[s].serialize(o,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,o],s)=>{let a=t[s];if(Re(a)||isNaN(a))return a;let l=r[s],u=this.coords[s].find(d=>d.type==l);if(!u){let d=o.name||n;throw new TypeError(`${l??a?.raw??a} not allowed for ${d} in ${this.name}()`)}return a=u.resolve(a),u.range&&(r[s]=u.toString()),a})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||Ks(t,this)?t:t[mf]?t[mf]:new uc(t,...r)}}const $r={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function j0(e){return Array.isArray(e)?e:$r[e]}i(j0,"getWhite");function cc(e,t,r,n={}){if(e=j0(e),t=j0(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ei.run("chromatic-adaptation-start",o),o.M||(o.W1===$r.D65&&o.W2===$r.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===$r.D50&&o.W2===$r.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ei.run("chromatic-adaptation-end",o),o.M)return yt(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}i(cc,"adapt$2");function j2(e,t){let r={str:String(e)?.trim(),options:t};if(ei.run("parse-start",r),r.color)return r.color;r.parsed=eD(r.str);let n,o=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,a,l,u=r.parsed.args,d=u.map((m,g)=>r.parsed.argMeta[g]?.type);if(s==="color"){let m=u.shift();d.shift();let g=m.startsWith("--")?m.substring(2):`--${m}`,p=[m,g];if(a=H.findFormat({name:s,id:p,type:"function"}),!a){let y,w=m in H.registry?m:g;if(w in H.registry){let k=H.registry[w].formats?.color?.id;k&&(y=`Did you mean ${e.replace("color("+m,"color("+k)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(y??"Missing a plugin?"))}l=a.space,a.id.startsWith("--")&&!m.startsWith("--")&&Zr.warn(`${l.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${m}).`),m.startsWith("--")&&!a.id.startsWith("--")&&Zr.warn(`${l.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${m}).`)}else a=H.findFormat({name:s,type:"function"}),l=a.space;o&&Object.assign(o,{format:a,formatId:a.name,types:d,commas:r.parsed.commas});let f=1;r.parsed.lastAlpha&&(f=r.parsed.args.pop(),o&&(o.alphaType=d.pop()));let h=a.coords.length;if(u.length!==h)throw new TypeError(`Expected ${h} coordinates for ${l.id} in ${r.str}), got ${u.length}`);u=a.coerceCoords(u,d),n={spaceId:l.id,coords:u,alpha:f}}else e:for(let s of H.all)for(let a in s.formats){let l=s.formats[a];if(l.type!=="custom"||l.test&&!l.test(r.str))continue;let u=s.getFormat(l),d=u.parse(r.str);if(d){o&&Object.assign(o,{format:u,formatId:a}),n=d;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Re(n.alpha)?n.alpha:n.alpha===void 0?1:Kc(0,n.alpha,1),n}i(j2,"parse$1");const _2={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},dc={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(_2).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Q6(e){let t={},r=e.match(dc.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*_2[r]):dc.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}i(Q6,"parseArgument");function eD(e){if(!e)return;e=e.trim();let t=e.match(dc.function);if(t){let r=[],n=[],o=!1,s=t[1].toLowerCase(),a=t[2].replace(dc.singleArgument,(l,u)=>{let{value:d,meta:f}=Q6(u);return(l.startsWith("/")||s!=="color"&&r.length===3)&&(o=!0),r.push(d),n.push(f),""});return{name:s,args:r,argMeta:n,lastAlpha:o,commas:a.includes(","),rawName:t[1],rawArgs:t[2]}}}i(eD,"parseFunction");function de(e,t){if(Array.isArray(e))return e.map(n=>de(n,t));if(!e)throw new TypeError("Empty color reference");da(e)&&(e=j2(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=H.get(r)),e.alpha===void 0&&(e.alpha=1),e}i(de,"getColor");const tD=75e-6;class H{static{i(this,"ColorSpace")}constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?H.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r;let n=t.white??this.base.white??"D65";this.white=j0(n),this.formats=t.formats??{};for(let o in this.formats){let s=this.formats[o];s.type||="function",s.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:H.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:rD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ei.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=tD}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,s)=>{let a=n[s];if(a.type!=="angle"&&a.range){if(Re(o))return!0;let[l,u]=a.range;return(l===void 0||o>=l-r)&&(u===void 0||o<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=uc.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const l=de(t);[t,r]=[l.space,l.coords]}if(t=H.get(t),this.equals(t))return r;r=r.map(l=>Re(l)?0:l);let n=this.path,o=t.path,s,a;for(let l=0;l<n.length&&n[l].equals(o[l]);l++)s=n[l],a=l;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let l=n.length-1;l>a;l--)r=n[l].toBase(r);for(let l=a+1;l<o.length;l++)r=o[l].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=de(t);[t,r]=[n.space,n.coords]}return t=H.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push(o?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(H.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||Ks(t,this))return t;if(Ho(t)==="string"){let o=H.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return H.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=H.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[o,s]of Object.entries(n.formats)){s.name??=o,s.type??="function";let a=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let l=s.ids||[s.id],u=Array.isArray(t.id)?t.id:[t.id];a&&=u.some(d=>l.includes(d))}if(a){let l=uc.get(s,n);return l!==s&&(n.formats[s.name]=l),l}}return null}static resolveCoord(t,r){let n=Ho(t),o,s;if(n==="string"?t.includes(".")?[o,s]=t.split("."):[o,s]=[,t]:Array.isArray(t)?[o,s]=t:(o=t.space,s=t.coordId),o=H.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Ho(s),n==="number"||n==="string"&&s>=0){let u=Object.entries(o.coords)[s];if(u)return{space:o,id:u[0],index:s,...u[1]}}o=H.get(o);let a=s.toLowerCase(),l=0;for(let u in o.coords){let d=o.coords[u];if(u.toLowerCase()===a||d.name?.toLowerCase()===a)return{space:o,id:u,index:l,...d};l++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function rD(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}i(rD,"getPath");var nr=new H({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class br extends H{static{i(this,"RGBColorSpace")}constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=nr),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=yt(r,t.toXYZ_M);return this.white!==this.base.white&&(n=cc(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=cc(this.base.white,this.white,r),yt(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function U2(e,t={}){if(Array.isArray(e))return e.map(u=>U2(u,t));let{cssProperty:r="background-color",element:n,...o}=t,s=null;try{return de(e,o)}catch(u){s=u}let{CSS:a,getComputedStyle:l}=globalThis;if(da(e)&&n&&a&&l&&a.supports(r,e)){let u=n.style[r];e!==u&&(n.style[r]=e);let d=l(n).getPropertyValue(r);if(e!==u&&(n.style[r]=u),d!==e)try{return de(d,o)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}i(U2,"tryColor");function Ul(e,t){e=de(e);let r=H.get(t,t?.space),n=t?.precision,o;return!r||e.space.equals(r)?o=e.coords.slice():o=r.from(e),n===void 0?o:o.map(s=>im(s,n))}i(Ul,"getAll");function Wr(e,t){if(e=de(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=H.resolveCoord(t,e.space);return Ul(e,r)[n]}i(Wr,"get");function am(e,t,r,n){return e=de(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=H.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}i(am,"setAll");am.returns="color";function xo(e,t,r){if(e=de(e),arguments.length===2&&Ho(arguments[1])==="object"){let n=arguments[1];for(let o in n)xo(e,o,n[o])}else if(typeof r=="function"&&(r=r(Wr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:o}=H.resolveCoord(t,e.space),s=Ul(e,n);s[o]=r,am(e,n,s)}return e}i(xo,"set");xo.returns="color";var lm=new H({id:"xyz-d50",name:"XYZ D50",white:"D50",base:nr,fromBase:i(e=>cc(nr.white,"D50",e),"fromBase"),toBase:i(e=>cc("D50",nr.white,e),"toBase")});const nD=216/24389,Yp=24/116,pu=24389/27;let gf=$r.D50;var Kr=new H({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:gf,base:lm,fromBase(e){let r=e.map((a,l)=>a/gf[l]).map(a=>a>nD?Math.cbrt(a):(pu*a+16)/116),n=116*r[1]-16,o=500*(r[0]-r[1]),s=200*(r[1]-r[2]);return[n,o,s]},toBase(e){let[t,r,n]=e,o=[];return o[1]=(t+16)/116,o[0]=r/500+o[1],o[2]=o[1]-n/200,[o[0]>Yp?Math.pow(o[0],3):(116*o[0]-16)/pu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/pu,o[2]>Yp?Math.pow(o[2],3):(116*o[2]-16)/pu].map((a,l)=>a*gf[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function pn(e){return typeof e!="number"?e:(e%360+360)%360}i(pn,"constrain");function z2(e,t){let[r,n]=t,o=Re(r),s=Re(n);if(o&&s)return[r,n];if(o?r=n:s&&(n=r),e==="raw")return t;r=pn(r),n=pn(n);let a=n-r;return e==="increasing"?a<0&&(n+=360):e==="decreasing"?a>0&&(r+=360):e==="longer"?-180<a&&a<180&&(a>0?r+=360:n+=360):e==="shorter"&&(a>180?r+=360:a<-180&&(n+=360)),[r,n]}i(z2,"adjust");var Jr=new H({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Kr,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,u=l[1]-l[0];this.ε=u/1e5}let[t,r,n]=e,o=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,s=o?null:pn(Math.atan2(n,r)*180/Math.PI),a=o?0:Math.sqrt(r**2+n**2);return[t,a,s]},toBase(e){let[t,r,n]=e,o=null,s=null;return Re(n)||(r=r<0?0:r,o=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,o,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Xp=25**7,fc=Math.PI,Qp=180/fc,ys=fc/180;function eb(e){const t=e*e;return t*t*t*e}i(eb,"pow7");function V2(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){[e,t]=de([e,t]);let[s,a,l]=Kr.from(e),u=Jr.from(Kr,[s,a,l])[1],[d,f,h]=Kr.from(t),m=Jr.from(Kr,[d,f,h])[1];u<0&&(u=0),m<0&&(m=0);let g=(u+m)/2,p=eb(g),y=.5*(1-Math.sqrt(p/(p+Xp))),w=(1+y)*a,k=(1+y)*f,D=Math.sqrt(w**2+l**2),C=Math.sqrt(k**2+h**2),P=w===0&&l===0?0:Math.atan2(l,w),R=k===0&&h===0?0:Math.atan2(h,k);P<0&&(P+=2*fc),R<0&&(R+=2*fc),P*=Qp,R*=Qp;let J=d-s,ee=C-D,te=R-P,Y=P+R,pe=Math.abs(te),we;D*C===0?we=0:pe<=180?we=te:te>180?we=te-360:te<-180?we=te+360:Zr.warn("the unthinkable has happened");let Fe=2*Math.sqrt(C*D)*Math.sin(we*ys/2),nt=(s+d)/2,Ge=(D+C)/2,Ar=eb(Ge),qt;D*C===0?qt=Y:pe<=180?qt=Y/2:Y<360?qt=(Y+360)/2:qt=(Y-360)/2;let Vn=(nt-50)**2,to=1+.015*Vn/Math.sqrt(20+Vn),on=1+.045*Ge,Qt=1;Qt-=.17*Math.cos((qt-30)*ys),Qt+=.24*Math.cos(2*qt*ys),Qt+=.32*Math.cos((3*qt+6)*ys),Qt-=.2*Math.cos((4*qt-63)*ys);let We=1+.015*Ge*Qt,Pt=30*Math.exp(-1*((qt-275)/25)**2),sn=2*Math.sqrt(Ar/(Ar+Xp)),cr=-1*Math.sin(2*Pt*ys)*sn,an=(J/(r*to))**2;return an+=(ee/(n*on))**2,an+=(Fe/(o*We))**2,an+=cr*(ee/(n*on))*(Fe/(o*We)),Math.sqrt(an)}i(V2,"deltaE2000");const oD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],iD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],sD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Zo=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Pn=new H({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:nr,fromBase(e){let t=yt(e,oD);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),yt(t,sD,t)},toBase(e){let t=yt(e,Zo);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,yt(t,iD,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function _0(e,t){[e,t]=de([e,t]);let[r,n,o]=Pn.from(e),[s,a,l]=Pn.from(t),u=r-s,d=n-a,f=o-l;return Math.sqrt(u**2+d**2+f**2)}i(_0,"deltaEOK");const aD=75e-6;function Ri(e,t,{epsilon:r=aD}={}){e=de(e),t||(t=e.space),t=H.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}i(Ri,"inGamut$1");function Gs(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}i(Gs,"clone");function q2(e,t,r="lab"){r=H.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((s,a,l)=>{let u=o[l];return Re(a)||Re(u)?s:s+(u-a)**2},0))}i(q2,"distance");function lD(e,t){return q2(e,t,"lab")}i(lD,"deltaE76");const uD=Math.PI,tb=uD/180;function cD(e,t,{l:r=2,c:n=1}={}){[e,t]=de([e,t]);let[o,s,a]=Kr.from(e),[,l,u]=Jr.from(Kr,[o,s,a]),[d,f,h]=Kr.from(t),m=Jr.from(Kr,[d,f,h])[1];l<0&&(l=0),m<0&&(m=0);let g=o-d,p=l-m,y=s-f,w=a-h,k=y**2+w**2-p**2,D=.511;o>=16&&(D=.040975*o/(1+.01765*o));let C=.0638*l/(1+.0131*l)+.638,P;Re(u)&&(u=0),u>=164&&u<=345?P=.56+Math.abs(.2*Math.cos((u+168)*tb)):P=.36+Math.abs(.4*Math.cos((u+35)*tb));let R=Math.pow(l,4),J=Math.sqrt(R/(R+1900)),ee=C*(J*P+1-J),te=(g/(r*D))**2;return te+=(p/(n*C))**2,te+=k/ee**2,Math.sqrt(te)}i(cD,"deltaECMC");const rb=203;var um=new H({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:nr,fromBase(e){return e.map(t=>t*rb)},toBase(e){return e.map(t=>t/rb)}});const bu=1.15,yu=.66,nb=2610/2**14,dD=2**14/2610,ob=3424/2**12,ib=2413/2**7,sb=2392/2**7,fD=1.7*2523/2**5,ab=2**5/(1.7*2523),vu=-.56,pf=16295499532821565e-27,hD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],mD=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],gD=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],pD=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var W2=new H({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:um,fromBase(e){let[t,r,n]=e,o=bu*t-(bu-1)*n,s=yu*r-(yu-1)*t,l=yt([o,s,n],hD).map(function(m){let g=ob+ib*Et(m/1e4,nb),p=1+sb*Et(m/1e4,nb);return Et(g/p,fD)}),[u,d,f]=yt(l,gD);return[(1+vu)*u/(1+vu*u)-pf,d,f]},toBase(e){let[t,r,n]=e,o=(t+pf)/(1+vu-vu*(t+pf)),a=yt([o,r,n],pD).map(function(m){let g=ob-Et(m,ab),p=sb*Et(m,ab)-ib;return 1e4*Et(g/p,dD)}),[l,u,d]=yt(a,mD),f=(l+(bu-1)*d)/bu,h=(u+(yu-1)*f)/yu;return[f,h,d]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),U0=new H({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:W2,fromBase:Jr.fromBase,toBase:Jr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function bD(e,t){[e,t]=de([e,t]);let[r,n,o]=U0.from(e),[s,a,l]=U0.from(t),u=r-s,d=n-a;Re(o)&&Re(l)?(o=0,l=0):Re(o)?o=l:Re(l)&&(l=o);let f=o-l,h=2*Math.sqrt(n*a)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(u**2+d**2+h**2)}i(bD,"deltaEJz");const K2=3424/4096,G2=2413/128,H2=2392/128,lb=2610/16384,yD=2523/32,vD=16384/2610,ub=32/2523,wD=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],$D=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],kD=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],xD=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var z0=new H({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:um,fromBase(e){let t=yt(e,wD);return DD(t)},toBase(e){let t=AD(e);return yt(t,xD)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function DD(e){let t=e.map(function(r){let n=K2+G2*(r/1e4)**lb,o=1+H2*(r/1e4)**lb;return(n/o)**yD});return yt(t,$D)}i(DD,"LMStoICtCp");function AD(e){return yt(e,kD).map(function(n){let o=Math.max(n**ub-K2,0),s=G2-H2*n**ub;return 1e4*(o/s)**vD})}i(AD,"ICtCptoLMS");function ED(e,t){[e,t]=de([e,t]);let[r,n,o]=z0.from(e),[s,a,l]=z0.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-a)**2+(o-l)**2)}i(ED,"deltaEITP");function CD(e,t){[e,t]=de([e,t]);let r=2,[n,o,s]=Pn.from(e),[a,l,u]=Pn.from(t),d=n-a,f=r*(o-l),h=r*(s-u);return Math.sqrt(d**2+f**2+h**2)}i(CD,"deltaEOK2");const SD=$r.D65,Z2=.42,cb=1/Z2,bf=2*Math.PI,J2=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],MD=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],FD=[[460,451,288],[460,-891,-261],[460,-220,-6300]],TD={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ci={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},ND=180/Math.PI,db=Math.PI/180;function Y2(e,t){return e.map(n=>{const o=Et(t*Math.abs(n)*.01,Z2);return 400*Gc(o,n)/(o+27.13)})}i(Y2,"adapt$1");function PD(e,t){const r=100/t*27.13**cb;return e.map(n=>{const o=Math.abs(n);return Gc(r*Et(o/(400-o),cb),n)})}i(PD,"unadapt");function ID(e){let t=pn(e);t<=Ci.h[0]&&(t+=360);const r=L2(Ci.h,t)-1,[n,o]=Ci.h.slice(r,r+2),[s,a]=Ci.e.slice(r,r+2),l=Ci.H[r],u=(t-n)/s;return l+100*u/(u+(o-t)/a)}i(ID,"hueQuadrature");function OD(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,o]=Ci.h.slice(r,r+2),[s,a]=Ci.e.slice(r,r+2);return pn((t*(a*n-s*o)-100*n*a)/(t*(a-s)-100*a))}i(OD,"invHueQuadrature");function X2(e,t,r,n,o){const s={};s.discounting=o,s.refWhite=e,s.surround=n;const a=e.map(w=>w*100);s.la=t,s.yb=r;const l=a[1],u=yt(a,J2);let d=TD[s.surround];const f=d[0];s.c=d[1],s.nc=d[2];const m=(1/(5*s.la+1))**4;s.fl=m*s.la+.1*(1-m)*(1-m)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/l,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const g=Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(w=>wl(1,l/w,g)),s.dRgbInv=s.dRgb.map(w=>1/w);const p=u.map((w,k)=>w*s.dRgb[k]),y=Y2(p,s.fl);return s.aW=s.nbb*(2*y[0]+y[1]+.05*y[2]),s}i(X2,"environment");const fb=X2(SD,64/Math.PI*.2,20,"average",!1);function V0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=pn(e.h)*db:r=OD(e.H)*db;const n=Math.cos(r),o=Math.sin(r);let s=0;e.J!==void 0?s=Et(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let a=0;e.C!==void 0?a=e.C/s:e.M!==void 0?a=e.M/t.flRoot/s:e.s!==void 0&&(a=4e-4*e.s**2*(t.aW+4)/t.c);const l=Et(a*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),d=t.aW*Et(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*u,h=d/t.nbb,m=23*(h+.305)*sm(l,23*f+l*(11*n+108*o)),g=m*n,p=m*o,y=PD(yt([h,g,p],FD).map(w=>w*1/1403),t.fl);return yt(y.map((w,k)=>w*t.dRgbInv[k]),MD).map(w=>w/100)}i(V0,"fromCam16");function Q2(e,t){const r=e.map(C=>C*100),n=Y2(yt(r,J2).map((C,P)=>C*t.dRgb[P]),t.fl),o=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(s,o)%bf+bf)%bf,l=.25*(Math.cos(a+2)+3.8),u=5e4/13*t.nc*t.ncb*sm(l*Math.sqrt(o**2+s**2),n[0]+n[1]+1.05*n[2]+.305),d=Et(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),f=t.nbb*(2*n[0]+n[1]+.05*n[2]),h=Et(f/t.aW,.5*t.c*t.z),m=100*Et(h,2),g=4/t.c*h*(t.aW+4)*t.flRoot,p=d*h,y=p*t.flRoot,w=pn(a*ND),k=ID(w),D=50*Et(t.c*d/(t.aW+4),1/2);return{J:m,C:p,h:w,s:D,Q:g,M:y,H:k}}i(Q2,"toCam16");var BD=new H({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:nr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=Q2(e,fb),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return V0({J:e[0],M:e[1],h:e[2]},fb)}});const RD=$r.D65,LD=216/24389,ew=24389/27;function jD(e){return 116*(e>LD?Math.cbrt(e):(ew*e+16)/116)-16}i(jD,"toLstar");function q0(e){return e>8?Math.pow((e+16)/116,3):e/ew}i(q0,"fromLstar");function _D(e,t){let[r,n,o]=e,s=[],a=0;if(o===0)return[0,0,0];let l=q0(o);o>0?a=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:a=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,d=15;let f=0,h=1/0;for(;f<=d;){s=V0({J:a,C:n,h:r},t);const m=Math.abs(s[1]-l);if(m<h){if(m<=u)return s;h=m}a=a-(s[1]-l)*a/(2*s[1]),f+=1}return V0({J:a,C:n,h:r},t)}i(_D,"fromHct");function UD(e,t){const r=jD(e[1]);if(r===0)return[0,0,0];const n=Q2(e,cm);return[pn(n.h),n.C,r]}i(UD,"toHct");const cm=X2(RD,200/Math.PI*q0(50),q0(50)*100,"average",!1);var $l=new H({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:nr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=UD(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return _D(e,cm)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const zD=Math.PI/180,hb=[1,.007,.0228];function mb(e){e[1]<0&&(e=$l.fromBase($l.toBase(e)));const t=Math.log(Math.max(1+hb[2]*e[1]*cm.flRoot,1))/hb[2],r=e[0]*zD,n=t*Math.cos(r),o=t*Math.sin(r);return[e[2],n,o]}i(mb,"convertUcsAb");function VD(e,t){[e,t]=de([e,t]);let[r,n,o]=mb($l.from(e)),[s,a,l]=mb($l.from(t));return Math.sqrt((r-s)**2+(n-a)**2+(o-l)**2)}i(VD,"deltaEHCT");var Hs={deltaE76:lD,deltaECMC:cD,deltaE2000:V2,deltaEJz:bD,deltaEITP:ED,deltaEOK:_0,deltaEOK2:CD,deltaEHCT:VD};function qD(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}i(qD,"calcEpsilon");const gb={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ti(e,{method:t=Zr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:s=void 0}={}){if(e=de(e),da(arguments[1])?r=arguments[1]:r||(r=e.space),r=H.get(r),Ri(e,r,{epsilon:0}))return e;let a;if(t==="css")a=WD(e,{space:r});else{if(t!=="clip"&&!Ri(e,r)){Object.prototype.hasOwnProperty.call(gb,t)&&({method:t,jnd:o,deltaEMethod:n,blackWhiteClamp:s}=gb[t]);let l=V2;if(n!==""){for(let d in Hs)if("deltae"+n.toLowerCase()===d.toLowerCase()){l=Hs[d];break}}o===0&&(o=1e-16);let u=ti(Je(e,r),{method:"clip",space:r});if(l(e,u)>o){if(s&&Object.keys(s).length===3){let D=H.resolveCoord(s.channel),C=Wr(Je(e,D.space),D.id);if(Re(C)&&(C=0),C>=s.max)return Je({space:"xyz-d65",coords:$r.D65},e.space);if(C<=s.min)return Je({space:"xyz-d65",coords:[0,0,0]},e.space)}let d=H.resolveCoord(t),f=d.space,h=d.id,m=Je(e,f);m.coords.forEach((D,C)=>{Re(D)&&(m.coords[C]=0)});let p=(d.range||d.refRange)[0],y=qD(o),w=p,k=Wr(m,h);for(;k-w>y;){let D=Gs(m);D=ti(D,{space:r,method:"clip"}),l(m,D)-o<y?w=Wr(m,h):k=Wr(m,h),xo(m,h,(w+k)/2)}a=Je(m,r)}else a=u}else a=Je(e,r);if(t==="clip"||!Ri(a,r,{epsilon:0})){let l=Object.values(r.coords).map(u=>u.range||[]);a.coords=a.coords.map((u,d)=>{let[f,h]=l[d];return f!==void 0&&(u=Math.max(f,u)),h!==void 0&&(u=Math.min(u,h)),u})}}return r!==e.space&&(a=Je(a,e.space)),e.coords=a.coords,e}i(ti,"toGamut");ti.returns="color";const pb={WHITE:{space:Pn,coords:[1,0,0],alpha:1},BLACK:{space:Pn,coords:[0,0,0],alpha:1}};function WD(e,{space:t}={}){e=de(e),t||(t=e.space),t=H.get(t);const o=H.get("oklch");if(t.isUnbounded)return Je(e,t);const s=Je(e,o);let a=s.coords[0];if(a>=1){const p=Je(pb.WHITE,t);return p.alpha=e.alpha,Je(p,t)}if(a<=0){const p=Je(pb.BLACK,t);return p.alpha=e.alpha,Je(p,t)}if(Ri(s,t,{epsilon:0}))return Je(s,t);function l(p){const y=Je(p,t),w=Object.values(t.coords);return y.coords=y.coords.map((k,D)=>{if("range"in w[D]){const[C,P]=w[D].range;return Kc(C,k,P)}return k}),y}i(l,"clip");let u=0,d=s.coords[1],f=!0,h=Gs(s),m=l(h),g=_0(m,h);if(g<.02)return m;for(;d-u>1e-4;){const p=(u+d)/2;if(h.coords[1]=p,f&&Ri(h,t,{epsilon:0}))u=p;else if(m=l(h),g=_0(m,h),g<.02){if(.02-g<1e-4)break;f=!1,u=p}else d=p}return m}i(WD,"toGamutCSS");function Je(e,t,{inGamut:r}={}){e=de(e),t=H.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ti(o,r===!0?void 0:r)),o}i(Je,"to");Je.returns="color";function ol(e,t={}){let{precision:r=Zr.precision,format:n,inGamut:o=!0,coords:s,alpha:a,commas:l}=t,u,d=de(e),f=n,h=d.parseMeta;h&&!n&&(h.format.canSerialize()&&(n=h.format,f=h.formatId),s??=h.types,a??=h.alphaType,l??=h.commas),f&&(n=d.space.getFormat(n)??H.findFormat(f)),n||(n=d.space.getFormat("default")??H.DEFAULT_FORMAT,f=n.name),n&&n.space&&n.space!==d.space&&(d=Je(d,n.space));let m=d.coords.slice();if(o||=n.toGamut,o&&!Ri(d)&&(m=ti(Gs(d),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(m,d.alpha,t);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let g=n.name||"color",p=n.serializeCoords(m,r,s);if(g==="color"){let C=n.id||n.ids?.[0]||d.space.cssId||d.space.id;p.unshift(C)}let y=d.alpha;a!==void 0&&typeof a!="object"&&(a=typeof a=="string"?{type:a}:{include:a});let w=a?.type??"<number>",k=a?.include===!0||n.alpha===!0||a?.include!==!1&&n.alpha!==!1&&y<1,D="";if(l??=n.commas,k){if(r!==null){let C;w==="<percentage>"&&(C="%",y*=100),y=om(y,{precision:r,unit:C})}D=`${l?",":" /"} ${y}`}u=`${g}(${p.join(l?", ":" ")}${D})`}return u}i(ol,"serialize");const KD=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],GD=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var kl=new br({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:KD,fromXYZ_M:GD}),tw=new br({id:"rec2020",name:"REC.2020",base:kl,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const HD=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],ZD=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var rw=new br({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:HD,fromXYZ_M:ZD});const JD=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],zt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var nw=new br({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:JD,fromXYZ_M:zt}),bb={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let yb=Array(3).fill("<percentage> | <number>[0, 255]"),vb=Array(3).fill("<number>[0, 255]");var Wi=new br({id:"srgb",name:"sRGB",base:nw,fromBase:i(e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),"fromBase"),toBase:i(e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),"toBase"),formats:{rgb:{coords:yb},rgb_number:{name:"rgb",commas:!0,coords:vb,alpha:!1},color:{},rgba:{coords:yb,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:vb},hex:{type:"custom",toGamut:!0,test:i(e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),"test"),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:i((e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(a=>Math.round(a*255));let o=r&&e.every(a=>a%17===0);return"#"+e.map(a=>o?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")},"serialize")},keyword:{type:"custom",test:i(e=>/^[a-z]+$/i.test(e),"test"),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=bb.black,t.alpha=0):t.coords=bb[e],t.coords)return t}}}}),ow=new br({id:"p3",cssId:"display-p3",name:"P3",base:rw,fromBase:Wi.fromBase,toBase:Wi.toBase});Zr.display_space=Wi;let YD;if(typeof CSS<"u"&&CSS.supports)for(let e of[Kr,tw,ow]){let t=e.getMinCoords(),n=ol({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Zr.display_space=e;break}}function XD(e,{space:t=Zr.display_space,...r}={}){e=de(e);let n=ol(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Zr.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Re)||Re(e.alpha))&&!(YD??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=Gs(e),o.coords=o.coords.map(At),o.alpha=At(o.alpha),n=ol(o,r),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=Je(o,t),n=new String(ol(o,r)),n.color=o}return n}i(XD,"display");function QD(e,t,{space:r,hue:n="shorter"}={}){e=de(e),r||=e.space,r=H.get(r);let o=Object.values(r.coords);[e,t]=[e,t].map(d=>Je(d,r));let[s,a]=[e,t].map(d=>d.coords),l=s.map((d,f)=>{let h=o[f],m=a[f];return h.type==="angle"&&([d,m]=z2(n,[d,m])),wb(d,m)}),u=wb(e.alpha,t.alpha);return{space:r,coords:l,alpha:u}}i(QD,"deltas");function wb(e,t){return Re(e)||Re(t)?e===t?null:0:e-t}i(wb,"subtractCoords");function e8(e,t){return e=de(e),t=de(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}i(e8,"equals");function ri(e){return Wr(e,[nr,"y"])}i(ri,"getLuminance");function iw(e,t){xo(e,[nr,"y"],t)}i(iw,"setLuminance");function t8(e){Object.defineProperty(e.prototype,"luminance",{get(){return ri(this)},set(t){iw(this,t)}})}i(t8,"register$2");var r8=Object.freeze({__proto__:null,getLuminance:ri,register:t8,setLuminance:iw});function n8(e,t){e=de(e),t=de(t);let r=Math.max(ri(e),0),n=Math.max(ri(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}i(n8,"contrastWCAG21");const o8=.56,i8=.57,s8=.62,a8=.65,$b=.022,l8=1.414,u8=.1,c8=5e-4,d8=1.14,kb=.027,f8=1.14;function xb(e){return e>=$b?e:e+($b-e)**l8}i(xb,"fclamp");function vs(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}i(vs,"linearize$3");function h8(e,t){t=de(t),e=de(e);let r,n,o,s,a,l;t=Je(t,"srgb"),[s,a,l]=t.coords.map(g=>Re(g)?0:g);let u=vs(s)*.2126729+vs(a)*.7151522+vs(l)*.072175;e=Je(e,"srgb"),[s,a,l]=e.coords.map(g=>Re(g)?0:g);let d=vs(s)*.2126729+vs(a)*.7151522+vs(l)*.072175,f=xb(u),h=xb(d),m=h>f;return Math.abs(h-f)<c8?n=0:m?(r=h**o8-f**i8,n=r*d8):(r=h**a8-f**s8,n=r*f8),Math.abs(n)<u8?o=0:n>0?o=n-kb:o=n+kb,o*100}i(h8,"contrastAPCA");function m8(e,t){e=de(e),t=de(t);let r=Math.max(ri(e),0),n=Math.max(ri(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}i(m8,"contrastMichelson");const g8=5e4;function p8(e,t){e=de(e),t=de(t);let r=Math.max(ri(e),0),n=Math.max(ri(t),0);return n>r&&([r,n]=[n,r]),n===0?g8:(r-n)/n}i(p8,"contrastWeber");function b8(e,t){e=de(e),t=de(t);let r=Wr(e,[Kr,"l"]),n=Wr(t,[Kr,"l"]);return Math.abs(r-n)}i(b8,"contrastLstar");const y8=216/24389,Db=24/116,wu=24389/27;let yf=$r.D65;var W0=new H({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:yf,base:nr,fromBase(e){let r=e.map((n,o)=>n/yf[o]).map(n=>n>y8?Math.cbrt(n):(wu*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Db?Math.pow(t[0],3):(116*t[0]-16)/wu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wu,t[2]>Db?Math.pow(t[2],3):(116*t[2]-16)/wu].map((n,o)=>n*yf[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const vf=Math.pow(5,.5)*.5+.5;function v8(e,t){e=de(e),t=de(t);let r=Wr(e,[W0,"l"]),n=Wr(t,[W0,"l"]),o=Math.abs(Math.pow(r,vf)-Math.pow(n,vf)),s=Math.pow(o,1/vf)*Math.SQRT2-40;return s<7.5?0:s}i(v8,"contrastDeltaPhi");var Vu=Object.freeze({__proto__:null,contrastAPCA:h8,contrastDeltaPhi:v8,contrastLstar:b8,contrastMichelson:m8,contrastWCAG21:n8,contrastWeber:p8});function w8(e,t,r){da(r)&&(r={algorithm:r});let{algorithm:n,...o}=r||{};if(!n){let s=Object.keys(Vu).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=de(e),t=de(t);for(let s in Vu)if("contrast"+n.toLowerCase()===s.toLowerCase())return Vu[s](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}i(w8,"contrast");function Hc(e){let[t,r,n]=Ul(e,nr),o=t+15*r+3*n;return[4*t/o,9*r/o]}i(Hc,"uv");function sw(e){let[t,r,n]=Ul(e,nr),o=t+r+n;return[t/o,r/o]}i(sw,"xy");function $8(e){Object.defineProperty(e.prototype,"uv",{get(){return Hc(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return sw(this)}})}i($8,"register$1");var k8=Object.freeze({__proto__:null,register:$8,uv:Hc,xy:sw});function Ga(e,t,r={}){da(r)&&(r={method:r});let{method:n=Zr.deltaE,...o}=r;for(let s in Hs)if("deltae"+n.toLowerCase()===s.toLowerCase())return Hs[s](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}i(Ga,"deltaE");function aw(e,t=.25){let n=[H.get("oklch","lch"),"l"];return xo(e,n,o=>o*(1+t))}i(aw,"lighten");function lw(e,t=.25){let n=[H.get("oklch","lch"),"l"];return xo(e,n,o=>o*(1-t))}i(lw,"darken");aw.returns="color";lw.returns="color";var x8=Object.freeze({__proto__:null,darken:lw,lighten:aw});function uw(e,t,r,n={}){return[e,t]=[de(e),de(t)],Ho(r)==="object"&&([r,n]=[.5,r]),zl(e,t,n)(r??.5)}i(uw,"mix");function cw(e,t,r={}){let n;dm(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:a=2,maxSteps:l=1e3,...u}=r;n||([e,t]=[de(e),de(t)],n=zl(e,t,u));let d=Ga(e,t),f=o>0?Math.max(a,Math.ceil(d/o)+1):a,h=[];if(l!==void 0&&(f=Math.min(f,l)),f===1)h=[{p:.5,color:n(.5)}];else{let m=1/(f-1);h=Array.from({length:f},(g,p)=>{let y=p*m;return{p:y,color:n(y)}})}if(o>0){let m=h.reduce((g,p,y)=>{if(y===0)return 0;let w=Ga(p.color,h[y-1].color,s);return Math.max(g,w)},0);for(;m>o;){m=0;for(let g=1;g<h.length&&h.length<l;g++){let p=h[g-1],y=h[g],w=(y.p+p.p)/2,k=n(w);m=Math.max(m,Ga(k,p.color),Ga(k,y.color)),h.splice(g,0,{p:w,color:n(w)}),g++}}}return h=h.map(m=>m.color),h}i(cw,"steps");function zl(e,t,r={}){if(dm(e)){let[u,d]=[e,t];return zl(...u.rangeArgs.colors,{...u.rangeArgs.options,...d})}let{space:n,outputSpace:o,progression:s,premultiplied:a}=r;e=de(e),t=de(t),e=Gs(e),t=Gs(t);let l={colors:[e,t],options:r};if(n?n=H.get(n):n=H.registry[Zr.interpolationSpace]||e.space,o=o?H.get(o):n,e=Je(e,n),t=Je(t,n),e=ti(e),t=ti(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",d=[n,"h"],[f,h]=[Wr(e,d),Wr(t,d)];Re(f)&&!Re(h)?f=h:Re(h)&&!Re(f)&&(h=f),[f,h]=z2(u,[f,h]),xo(e,d,f),xo(t,d,h)}return a&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let d=e.coords.map((m,g)=>{let p=t.coords[g];return wl(m,p,u)}),f=wl(e.alpha,t.alpha,u),h={space:n,coords:d,alpha:f};return a&&(h.coords=h.coords.map(m=>m/f)),o!==n&&(h=Je(h,o)),h},{rangeArgs:l})}i(zl,"range");function dm(e){return Ho(e)==="function"&&!!e.rangeArgs}i(dm,"isRange");Zr.interpolationSpace="lab";function D8(e){e.defineFunction("mix",uw,{returns:"color"}),e.defineFunction("range",zl,{returns:"function<color>"}),e.defineFunction("steps",cw,{returns:"array<color>"})}i(D8,"register");var A8=Object.freeze({__proto__:null,isRange:dm,mix:uw,range:zl,register:D8,steps:cw}),E8=new H({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Wi,fromBase:i(e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,s]=e,[a,l,u]=[null,0,(r+t)/2],d=t-r;if(d!==0){switch(l=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:a=(o-s)/d+(o<s?6:0);break;case o:a=(s-n)/d+2;break;case s:a=(n-o)/d+4}a=a*60}return l<0&&(a+=180,l=Math.abs(l)),a>=360&&(a-=360),[a,l*100,u*100]},"fromBase"),toBase:i(e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(s){let a=(s+t/30)%12,l=r*Math.min(n,1-n);return n-l*Math.max(-1,Math.min(a-3,9-a,1))}return i(o,"f"),[o(0),o(8),o(4)]},"toBase"),formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),dw=new H({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Wi,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,o,s]=e,[a,l,u]=[null,0,t],d=t-r;if(d!==0){switch(t){case n:a=(o-s)/d+(o<s?6:0);break;case o:a=(s-n)/d+2;break;case s:a=(n-o)/d+4}a=a*60}return u&&(l=d/u),a>=360&&(a-=360),[a,l*100,u*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(s){let a=(s+t/60)%6;return n-n*r*Math.max(0,Math.min(a,4-a,1))}return i(o,"f"),[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),C8=new H({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:dw,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let l=r/o;return[t,0,l*100]}let s=1-n,a=s===0?0:1-r/s;return[t,a*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const S8=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],M8=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var fw=new br({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:S8,fromXYZ_M:M8}),F8=new br({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:fw,toBase:i(e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),"toBase"),fromBase:i(e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),"fromBase")});const T8=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],N8=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var hw=new br({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:lm,toXYZ_M:T8,fromXYZ_M:N8});const P8=1/512,I8=16/512;var O8=new br({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:hw,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<I8?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=P8?r*n**(1/1.8):16*t})}});const $u=1.09929682680944,Ab=.018053968510807;var B8=new br({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:kl,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<Ab*4.5?t/4.5:r*Math.pow((n+$u-1)/$u,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=Ab?r*($u*Math.pow(n,.45)-($u-1)):4.5*t})}}),R8=new H({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Pn,fromBase:Jr.fromBase,toBase:Jr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Zs=2*Math.PI,hc=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],mc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],wf=Number.MAX_VALUE,il=.206,fm=.03,Ha=(1+il)/(1+fm);function er(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((o,s)=>{n+=o*t[s]}),n}i(er,"vdot");function sl(e){return .5*(Ha*e-il+Math.sqrt((Ha*e-il)*(Ha*e-il)+4*fm*Ha*e))}i(sl,"toe$1");function Os(e){return(e**2+il*e)/(Ha*(e+fm))}i(Os,"toeInv");function hm(e){let[t,r]=e;return[r/t,r/(1-t)]}i(hm,"toSt");function L8(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}i(L8,"getStMid");function mm(e,t){let r=yt(e,Zo);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,yt(r,t,r)}i(mm,"oklabToLinearRGB");function Zc(e,t,r,n){let o=_8(e,t,r,n),s=mm([1,o*e,o*t],r),a=Et(1/Math.max(...s),1/3),l=a*o;return[a,l]}i(Zc,"findCusp");function j8(e,t,r,n,o,s,a,l){let u;if(l===void 0&&(l=Zc(e,t,s,a)),(r-o)*l[1]-(l[0]-o)*n<=0)u=l[1]*o/(n*l[0]+l[1]*(o-r));else{u=l[1]*(o-1)/(n*(l[0]-1)+l[1]*(o-r));let d=r-o,f=n,h=er(Zo[0].slice(1),[e,t]),m=er(Zo[1].slice(1),[e,t]),g=er(Zo[2].slice(1),[e,t]),p=d+f*h,y=d+f*m,w=d+f*g,k=o*(1-u)+u*r,D=u*n,C=k+D*h,P=k+D*m,R=k+D*g,J=C**3,ee=P**3,te=R**3,Y=3*p*C**2,pe=3*y*P**2,we=3*w*R**2,Fe=6*p**2*C,nt=6*y**2*P,Ge=6*w**2*R,Ar=er(s[0],[J,ee,te])-1,qt=er(s[0],[Y,pe,we]),Vn=er(s[0],[Fe,nt,Ge]),to=qt/(qt*qt-.5*Ar*Vn),on=-Ar*to,Qt=er(s[1],[J,ee,te])-1,We=er(s[1],[Y,pe,we]),Pt=er(s[1],[Fe,nt,Ge]),sn=We/(We*We-.5*Qt*Pt),cr=-Qt*sn,an=er(s[2],[J,ee,te])-1,kn=er(s[2],[Y,pe,we]),To=er(s[2],[Fe,nt,Ge]),su=kn/(kn*kn-.5*an*To),ms=-an*su;on=to>=0?on:wf,cr=sn>=0?cr:wf,ms=su>=0?ms:wf,u+=Math.min(on,Math.min(cr,ms))}return u}i(j8,"findGamutIntersection");function mw(e,t,r){let[n,o,s]=e,a=Zc(o,s,t,r),l=j8(o,s,n,1,n,t,r,a),u=hm(a),d=l/Math.min(n*u[0],(1-n)*u[1]),f=L8(o,s),h=n*f[0],m=(1-n)*f[1],g=.9*d*Math.sqrt(Math.sqrt(1/(1/h**4+1/m**4)));return h=n*.4,m=(1-n)*.8,[Math.sqrt(1/(1/h**2+1/m**2)),g,l]}i(mw,"getCs");function _8(e,t,r,n){let o,s,a,l,u,d,f,h;er(n[0][0],[e,t])>1?([o,s,a,l,u]=n[0][1],[d,f,h]=r[0]):er(n[1][0],[e,t])>1?([o,s,a,l,u]=n[1][1],[d,f,h]=r[1]):([o,s,a,l,u]=n[2][1],[d,f,h]=r[2]);let m=o+s*e+a*t+l*e**2+u*e*t,g=er(Zo[0].slice(1),[e,t]),p=er(Zo[1].slice(1),[e,t]),y=er(Zo[2].slice(1),[e,t]),w=1+m*g,k=1+m*p,D=1+m*y,C=w**3,P=k**3,R=D**3,J=3*g*w**2,ee=3*p*k**2,te=3*y*D**2,Y=6*g**2*w,pe=6*p**2*k,we=6*y**2*D,Fe=d*C+f*P+h*R,nt=d*J+f*ee+h*te,Ge=d*Y+f*pe+h*we;return m=m-Fe*nt/(nt**2-.5*Fe*Ge),m}i(_8,"computeMaxSaturation");function U8(e,t,r){let[n,o,s]=e,a=Os(s),l=null,u=null;if(n=pn(n)/360,a!==0&&a!==1&&o!==0){let d=Math.cos(Zs*n),f=Math.sin(Zs*n),[h,m,g]=mw([a,d,f],t,r),p=.8,y=1.25,w,k,D,C;o<p?(w=y*o,k=0,D=p*h,C=1-D/m):(w=5*(o-.8),k=m,D=.2*m**2*1.25**2/h,C=1-D/(g-m));let P=k+w*D/(1-C*w);l=P*d,u=P*f}return[a,l,u]}i(U8,"okhslToOklab");function z8(e,t,r){let n=1e-7,o=1e-4,s=e[0],a=0,l=sl(s),u=Math.sqrt(e[1]**2+e[2]**2),d=.5+Math.atan2(-e[2],-e[1])/Zs;if(l!==0&&l!==1&&u!==0){let h=e[1]/u,m=e[2]/u,[g,p,y]=mw([s,h,m],t,r),w=.8,k=1.25,D,C,P,R;u<p?(C=w*g,P=1-C/p,R=u/(C+P*u),a=R*w):(D=p,C=.2*p**2*k**2/g,P=1-C/(y-p),R=(u-D)/(C+P*(u-D)),a=w+.2*R)}const f=Math.abs(a)<o;return f||l===0||Math.abs(1-l)<n?(d=null,f||(a=0)):d=pn(d*360),[d,a,l]}i(z8,"oklabToOkhsl");var V8=new H({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Pn,gamutSpace:"self",fromBase(e){return z8(e,hc,mc)},toBase(e){return U8(e,hc,mc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),gw=new H({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Pn,fromBase(e){return[sl(e[0]),e[1],e[2]]},toBase(e){return[Os(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),q8=new H({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:gw,fromBase:Jr.fromBase,toBase:Jr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function W8(e,t,r){let[n,o,s]=e;n=pn(n)/360;let a=Os(s),l=null,u=null;if(a!==0&&o!==0){let d=Math.cos(Zs*n),f=Math.sin(Zs*n),h=Zc(d,f,t,r),[m,g]=hm(h),p=.5,y=1-p/m,w=1-o*p/(p+g-g*y*o),k=o*g*p/(p+g-g*y*o);a=s*w;let D=s*k,C=Os(w),P=k*C/w,R=Os(a);D=D*R/a,a=R;let[J,ee,te]=mm([C,d*P,f*P],t),Y=Et(1/Math.max(Math.max(J,ee),Math.max(te,0)),1/3);a=a*Y,D=D*Y,l=D*d,u=D*f}return[a,l,u]}i(W8,"okhsvToOklab");function K8(e,t,r){let n=1e-4,o=e[0],s=0,a=sl(o),l=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/Zs;if(o!==0&&o!==1&&l!==0){let d=e[1]/l,f=e[2]/l,h=Zc(d,f,t,r),[m,g]=hm(h),p=.5,y=1-p/m,w=g/(l+o*g),k=w*o,D=w*l,C=Os(k),P=D*C/k,[R,J,ee]=mm([C,d*P,f*P],t),te=Et(1/Math.max(Math.max(R,J),Math.max(ee,0)),1/3);o=o/te,l=l/te,l=l*sl(o)/o,o=sl(o),a=o/k,s=(p+g)*D/(g*p+g*y*D)}return Math.abs(s)<n||a===0?u=null:u=pn(u*360),[u,s,a]}i(K8,"oklabToOkhsv");var G8=new H({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Pn,gamutSpace:"self",fromBase(e){return K8(e,hc,mc)},toBase(e){return W8(e,hc,mc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let pw=$r.D65;const H8=216/24389,Eb=24389/27,[Cb,Sb]=Hc({space:nr,coords:pw});var bw=new H({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:pw,base:nr,fromBase(e){let t=[At(e[0]),At(e[1]),At(e[2])],r=t[1],[n,o]=Hc({space:nr,coords:t});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let s=r<=H8?Eb*r:116*Math.cbrt(r)-16;return[s,13*s*(n-Cb),13*s*(o-Sb)]},toBase(e){let[t,r,n]=e;if(t===0||Re(t))return[0,0,0];r=At(r),n=At(n);let o=r/(13*t)+Cb,s=n/(13*t)+Sb,a=t<=8?t/Eb:Math.pow((t+16)/116,3);return[a*(9*o/(4*s)),a,a*((12-3*o-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),gm=new H({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:bw,fromBase:Jr.fromBase,toBase:Jr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Z8=216/24389,J8=24389/27,Mb=zt[0][0],Fb=zt[0][1],$f=zt[0][2],Tb=zt[1][0],Nb=zt[1][1],kf=zt[1][2],Pb=zt[2][0],Ib=zt[2][1],xf=zt[2][2];function ws(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}i(ws,"distanceFromOriginAngle");function gc(e){const t=Math.pow(e+16,3)/1560896,r=t>Z8?t:e/J8,n=r*(284517*Mb-94839*$f),o=r*(838422*$f+769860*Fb+731718*Mb),s=r*(632260*$f-126452*Fb),a=r*(284517*Tb-94839*kf),l=r*(838422*kf+769860*Nb+731718*Tb),u=r*(632260*kf-126452*Nb),d=r*(284517*Pb-94839*xf),f=r*(838422*xf+769860*Ib+731718*Pb),h=r*(632260*xf-126452*Ib);return{r0s:n/s,r0i:o*e/s,r1s:n/(s+126452),r1i:(o-769860)*e/(s+126452),g0s:a/u,g0i:l*e/u,g1s:a/(u+126452),g1i:(l-769860)*e/(u+126452),b0s:d/h,b0i:f*e/h,b1s:d/(h+126452),b1i:(f-769860)*e/(h+126452)}}i(gc,"calculateBoundingLines");function Ob(e,t){const r=t/360*Math.PI*2,n=ws(e.r0s,e.r0i,r),o=ws(e.r1s,e.r1i,r),s=ws(e.g0s,e.g0i,r),a=ws(e.g1s,e.g1i,r),l=ws(e.b0s,e.b0i,r),u=ws(e.b1s,e.b1i,r);return Math.min(n,o,s,a,l,u)}i(Ob,"calcMaxChromaHsluv");var Y8=new H({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gm,gamutSpace:Wi,fromBase(e){let[t,r,n]=[At(e[0]),At(e[1]),At(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let s=gc(t),a=Ob(s,n);o=r/a*100}return[n,o,t]},toBase(e){let[t,r,n]=[At(e[0]),At(e[1]),At(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let s=gc(n);o=Ob(s,t)/100*r}return[n,o,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});zt[0][0];zt[0][1];zt[0][2];zt[1][0];zt[1][1];zt[1][2];zt[2][0];zt[2][1];zt[2][2];function $s(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}i($s,"distanceFromOrigin");function Bb(e){let t=$s(e.r0s,e.r0i),r=$s(e.r1s,e.r1i),n=$s(e.g0s,e.g0i),o=$s(e.g1s,e.g1i),s=$s(e.b0s,e.b0i),a=$s(e.b1s,e.b1i);return Math.min(t,r,n,o,s,a)}i(Bb,"calcMaxChromaHpluv");var X8=new H({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gm,gamutSpace:"self",fromBase(e){let[t,r,n]=[At(e[0]),At(e[1]),At(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let s=gc(t),a=Bb(s);o=r/a*100}return[n,o,t]},toBase(e){let[t,r,n]=[At(e[0]),At(e[1]),At(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let s=gc(n);o=Bb(s)/100*r}return[n,o,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),pm=new br({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:kl.toBase,fromBase:kl.fromBase});const Rb=203,Lb=2610/2**14,Q8=2**14/2610,e9=2523/2**5,jb=2**5/2523,_b=3424/2**12,Ub=2413/2**7,zb=2392/2**7;var t9=new br({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:pm,toBase(e){return e.map(function(t){return(Math.max(t**jb-_b,0)/(Ub-zb*t**jb))**Q8*1e4/Rb})},fromBase(e){return e.map(function(t){let r=Math.max(t*Rb/1e4,0),n=_b+Ub*r**Lb,o=1+zb*r**Lb;return(n/o)**e9})}});const Vb=.17883277,qb=.28466892,Wb=.55991073,Df=3.7743;var r9=new br({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:pm,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Df:(Math.exp((t-Wb)/Vb)+qb)/12*Df})},fromBase(e){return e.map(function(t){return t/=Df,t<=1/12?Et(3*t,.5):Vb*Math.log(12*t-qb)+Wb})}});const yw={};ei.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=vw(e.W1,e.W2,e.options.method))});ei.add("chromatic-adaptation-end",e=>{e.M||(e.M=vw(e.W1,e.W2,e.options.method))});function Jc({id:e,toCone_M:t,fromCone_M:r}){yw[e]=arguments[0]}i(Jc,"defineCAT");function vw(e,t,r="Bradford"){let n=yw[r],[o,s,a]=Ka(n.toCone_M,e),[l,u,d]=Ka(n.toCone_M,t),f=[[l/o,0,0],[0,u/s,0],[0,0,d/a]],h=Ka(f,n.toCone_M);return Ka(n.fromCone_M,h)}i(vw,"adapt");Jc({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Jc({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Jc({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Jc({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign($r,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});$r.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const n9=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],o9=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ww=new br({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:$r.ACES,toXYZ_M:n9,fromXYZ_M:o9});const ku=2**-16,Af=-.35828683,xu=(Math.log2(65504)+9.72)/17.52;var i9=new br({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Af,xu],name:"Red"},g:{range:[Af,xu],name:"Green"},b:{range:[Af,xu],name:"Blue"}},referred:"scene",base:ww,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-ku)*2:r<xu?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ku)+9.72)/17.52:t<ku?(Math.log2(ku+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Kb=Object.freeze({__proto__:null,A98RGB:F8,A98RGB_Linear:fw,ACEScc:i9,ACEScg:ww,CAM16_JMh:BD,HCT:$l,HPLuv:X8,HSL:E8,HSLuv:Y8,HSV:dw,HWB:C8,ICTCP:z0,JzCzHz:U0,Jzazbz:W2,LCH:Jr,LCHuv:gm,Lab:Kr,Lab_D65:W0,Luv:bw,OKLCH:R8,OKLab:Pn,OKLrCH:q8,OKLrab:gw,Okhsl:V8,Okhsv:G8,P3:ow,P3_Linear:rw,ProPhoto:O8,ProPhoto_Linear:hw,REC_2020:tw,REC_2020_Linear:kl,REC_2020_Scene_Referred:B8,REC_2100_HLG:r9,REC_2100_Linear:pm,REC_2100_PQ:t9,XYZ_ABS_D65:um,XYZ_D50:lm,XYZ_D65:nr,sRGB:Wi,sRGB_Linear:nw});let Ye=class Mr{static{i(this,"Color")}constructor(...t){let r;if(t.length===1){let a={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=de(t[0],{parseMeta:a}),a.format&&(this.parseMeta=a)}let n,o,s;r?(n=r.space||r.spaceId,o=r.coords,s=r.alpha):[n,o,s]=t,Object.defineProperty(this,"space",{value:H.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Re(s)?s:s===void 0?1:Kc(0,s,1);for(let a in this.space.coords)Object.defineProperty(this,a,{get:i(()=>this.get(a),"get"),set:i(l=>this.set(a,l),"set")})}get spaceId(){return this.space.id}clone(){return new Mr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=XD(this,...t);return r.color=new Mr(r.color),r}static get(t,...r){return Ks(t,this)?t:new Mr(t,...r)}static try(t,r){if(Ks(t,this))return t;let n=U2(t,r);return n?new Mr(n):null}static defineFunction(t,r,n=r){let{instance:o=!0,returns:s}=n,a=i(function(...l){let u=r(...l);if(s==="color")u=Mr.get(u);else if(s==="function<color>"){let d=u;u=i(function(...f){let h=d(...f);return Mr.get(h)},"ret"),Object.assign(u,d)}else s==="array<color>"&&(u=u.map(d=>Mr.get(d)));return u},"func");t in Mr||(Mr[t]=a),o&&(Mr.prototype[t]=function(...l){return a(this,...l)})}static defineFunctions(t){for(let r in t)Mr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Mr);else for(let r in t)Mr.defineFunction(r,t[r])}};Ye.defineFunctions({get:Wr,getAll:Ul,set:xo,setAll:am,to:Je,equals:e8,inGamut:Ri,toGamut:ti,distance:q2,deltas:QD,toString:ol});Object.assign(Ye,{util:Y6,hooks:ei,WHITES:$r,Space:H,spaces:H.registry,parse:j2,defaults:Zr});for(let e of Object.keys(Kb))H.register(Kb[e]);for(let e in H.registry)K0(e,H.registry[e]);ei.add("colorspace-init-end",e=>{K0(e.id,e),e.aliases?.forEach(t=>{K0(t,e)})});function K0(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(Ye.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:i(((s,a)=>{try{return H.resolveCoord([t,a]),!0}catch{}return Reflect.has(s,a)}),"has"),get:i((s,a,l)=>{if(a&&typeof a!="symbol"&&!(a in s)&&a in o){let{index:u}=H.resolveCoord([t,a]);if(u>=0)return s[u]}return Reflect.get(s,a,l)},"get"),set:i((s,a,l,u)=>{if(a&&typeof a!="symbol"&&!(a in s)||Number(a)>=0){let{index:d}=H.resolveCoord([t,a]);if(d>=0)return s[d]=l,this.setAll(e,s),!0}return Reflect.set(s,a,l,u)},"set")});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}i(K0,"addSpaceAccessors");Ye.extend(Hs);Ye.extend({deltaE:Ga});Object.assign(Ye,{deltaEMethods:Hs});Ye.extend(x8);Ye.extend({contrast:w8});Ye.extend(k8);Ye.extend(r8);Ye.extend(A8);Ye.extend(Vu);const $w=Symbol("no update");function Gb(e){return e!==$w}i(Gb,"isNotNoUpdate");class Ef extends jn()("observable-value-update"){static{i(this,"ObservableValueUpdateEvent")}}class s9 extends jn()("observable-value-resolve"){static{i(this,"ObservableValueResolveEvent")}}class a9 extends jn()("observable-value-error"){static{i(this,"ObservableValueErrorEvent")}}class l9 extends Wh("observable-destroy"){static{i(this,"ObservableDestroyEvent")}}class u9 extends Wh("observable-callback-call"){static{i(this,"ObservableCallbackCallEvent")}}class c9 extends jn()("observable-params-update"){static{i(this,"ObservableParamsUpdateEvent")}}class kw{static{i(this,"AnyObservable")}listenTarget=new Kh;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===$w)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const o=this.value;return this.value=r,this.listenTarget.dispatch(new Ef({detail:[r,o]})),!0}return!1}listen(t,r){const n=i(o=>r(...o.detail),"mapped");return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(Ef,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Ef,r)}destroy(){this.listenTarget.dispatch(new l9),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function bm(e,t){return y3(e,t,(r,n)=>M.isFunction(r)&&M.isFunction(n)?!0:M.strictEquals(r,n))}i(bm,"observableEqualityCheck");var al;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(al||(al={}));class d9 extends kw{static{i(this,"AsyncObservable")}equalityCheck;waitingForValueDeferredPromise=new Xu;lastSetPromise;lastSetId=Oi();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck="equalityCheck"in t?t.equalityCheck:bm,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Oi();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Xu,super.setValue(this.waitingForValueDeferredPromise.promise,M.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=vt(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(t){return Gb(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,M.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Oi(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new s9({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,M.strictEquals),this.dispatch(new a9({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Gb(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(vt(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?al.Rejected:this.value instanceof Promise?al.Waiting:al.Resolved}}class Cs extends d9{static{i(this,"CallbackObservable")}static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Cs.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck="equalityCheck"in t?t.equalityCheck:bm,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Cs.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Cs.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(vt(t))}finally{this.dispatch(new u9)}}updateLastParams(t){try{return this.internalParams===Cs.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new c9({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(vt(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return M.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function f9(e){return Ft(e)&&!jr(e)&&!ql(e)&&Symbol.asyncIterator in e}i(f9,"IsAsyncIterator$3");function jr(e){return Array.isArray(e)}i(jr,"IsArray$3");function xw(e){return typeof e=="bigint"}i(xw,"IsBigInt$3");function Vl(e){return typeof e=="boolean"}i(Vl,"IsBoolean$3");function ym(e){return e instanceof globalThis.Date}i(ym,"IsDate$3");function h9(e){return typeof e=="function"}i(h9,"IsFunction$3");function m9(e){return Ft(e)&&!jr(e)&&!ql(e)&&Symbol.iterator in e}i(m9,"IsIterator$3");function g9(e){return e===null}i(g9,"IsNull$3");function Qn(e){return typeof e=="number"}i(Qn,"IsNumber$3");function Ft(e){return typeof e=="object"&&e!==null}i(Ft,"IsObject$3");function Dw(e){return e instanceof globalThis.RegExp}i(Dw,"IsRegExp$2");function kt(e){return typeof e=="string"}i(kt,"IsString$3");function p9(e){return typeof e=="symbol"}i(p9,"IsSymbol$3");function ql(e){return e instanceof globalThis.Uint8Array}i(ql,"IsUint8Array$3");function Ct(e){return e===void 0}i(Ct,"IsUndefined$3");function b9(e){return e.map(t=>pc(t))}i(b9,"ArrayType$1");function y9(e){return new Date(e.getTime())}i(y9,"DateType$1");function v9(e){return new Uint8Array(e)}i(v9,"Uint8ArrayType$1");function w9(e){return new RegExp(e.source,e.flags)}i(w9,"RegExpType");function $9(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=pc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=pc(e[r]);return t}i($9,"ObjectType$1");function pc(e){return jr(e)?b9(e):ym(e)?y9(e):ql(e)?v9(e):Dw(e)?w9(e):Ft(e)?$9(e):e}i(pc,"Visit$8");function Yr(e){return pc(e)}i(Yr,"Clone");function vm(e,t){return Yr(t===void 0?e:{...t,...e})}i(vm,"CloneType");function Aw(e){return eo(e)&&globalThis.Symbol.asyncIterator in e}i(Aw,"IsAsyncIterator$2");function Ew(e){return eo(e)&&globalThis.Symbol.iterator in e}i(Ew,"IsIterator$2");function Cw(e){return e instanceof globalThis.Promise}i(Cw,"IsPromise$2");function wm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}i(wm,"IsDate$2");function $m(e){return e instanceof globalThis.Uint8Array}i($m,"IsUint8Array$2");function Sw(e,t){return t in e}i(Sw,"HasPropertyKey");function eo(e){return e!==null&&typeof e=="object"}i(eo,"IsObject$2");function Xr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}i(Xr,"IsArray$2");function ui(e){return e===void 0}i(ui,"IsUndefined$2");function Yc(e){return e===null}i(Yc,"IsNull$2");function Xc(e){return typeof e=="boolean"}i(Xc,"IsBoolean$2");function ye(e){return typeof e=="number"}i(ye,"IsNumber$2");function Mw(e){return globalThis.Number.isInteger(e)}i(Mw,"IsInteger$2");function fo(e){return typeof e=="bigint"}i(fo,"IsBigInt$2");function Hr(e){return typeof e=="string"}i(Hr,"IsString$2");function Fw(e){return typeof e=="function"}i(Fw,"IsFunction$2");function Qc(e){return typeof e=="symbol"}i(Qc,"IsSymbol$2");function Tw(e){return fo(e)||Xc(e)||Yc(e)||ye(e)||Hr(e)||Qc(e)||ui(e)}i(Tw,"IsValueType");var $t;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(a,l){return e.ExactOptionalPropertyTypes?l in a:a[l]!==void 0}i(t,"IsExactOptionalProperty"),e.IsExactOptionalProperty=t;function r(a){const l=eo(a);return e.AllowArrayObject?l:l&&!Xr(a)}i(r,"IsObjectLike"),e.IsObjectLike=r;function n(a){return r(a)&&!(a instanceof Date)&&!(a instanceof Uint8Array)}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(a){return e.AllowNaN?ye(a):Number.isFinite(a)}i(o,"IsNumberLike"),e.IsNumberLike=o;function s(a){const l=ui(a);return e.AllowNullVoid?l||a===null:l}i(s,"IsVoidLike"),e.IsVoidLike=s})($t||($t={}));function k9(e){return globalThis.Object.freeze(e).map(t=>bc(t))}i(k9,"ImmutableArray");function x9(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=bc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=bc(e[r]);return globalThis.Object.freeze(t)}i(x9,"ImmutableObject");function bc(e){return jr(e)?k9(e):ym(e)?e:ql(e)?e:Dw(e)?e:Ft(e)?x9(e):e}i(bc,"Immutable");function z(e,t){const r=t!==void 0?{...t,...e}:e;switch($t.InstanceMode){case"freeze":return bc(r);case"clone":return Yr(r);default:return r}}i(z,"CreateType");class ar extends Error{static{i(this,"TypeBoxError")}constructor(t){super(t)}}const Ir=Symbol.for("TypeBox.Transform"),Wl=Symbol.for("TypeBox.Readonly"),Ao=Symbol.for("TypeBox.Optional"),ed=Symbol.for("TypeBox.Hint"),_=Symbol.for("TypeBox.Kind");function km(e){return Ft(e)&&e[Wl]==="Readonly"}i(km,"IsReadonly");function ci(e){return Ft(e)&&e[Ao]==="Optional"}i(ci,"IsOptional$1");function Nw(e){return Se(e,"Any")}i(Nw,"IsAny$1");function Pw(e){return Se(e,"Argument")}i(Pw,"IsArgument$1");function fa(e){return Se(e,"Array")}i(fa,"IsArray$1");function td(e){return Se(e,"AsyncIterator")}i(td,"IsAsyncIterator$1");function rd(e){return Se(e,"BigInt")}i(rd,"IsBigInt$1");function Kl(e){return Se(e,"Boolean")}i(Kl,"IsBoolean$1");function ha(e){return Se(e,"Computed")}i(ha,"IsComputed$1");function ma(e){return Se(e,"Constructor")}i(ma,"IsConstructor$1");function D9(e){return Se(e,"Date")}i(D9,"IsDate$1");function ga(e){return Se(e,"Function")}i(ga,"IsFunction$1");function pa(e){return Se(e,"Integer")}i(pa,"IsInteger$1");function vn(e){return Se(e,"Intersect")}i(vn,"IsIntersect$1");function nd(e){return Se(e,"Iterator")}i(nd,"IsIterator$1");function Se(e,t){return Ft(e)&&_ in e&&e[_]===t}i(Se,"IsKindOf$1");function Iw(e){return Vl(e)||Qn(e)||kt(e)}i(Iw,"IsLiteralValue$1");function rs(e){return Se(e,"Literal")}i(rs,"IsLiteral$1");function ns(e){return Se(e,"MappedKey")}i(ns,"IsMappedKey$1");function rn(e){return Se(e,"MappedResult")}i(rn,"IsMappedResult$1");function Gl(e){return Se(e,"Never")}i(Gl,"IsNever$1");function A9(e){return Se(e,"Not")}i(A9,"IsNot$1");function xm(e){return Se(e,"Null")}i(xm,"IsNull$1");function ba(e){return Se(e,"Number")}i(ba,"IsNumber$1");function _n(e){return Se(e,"Object")}i(_n,"IsObject$1");function od(e){return Se(e,"Promise")}i(od,"IsPromise$1");function id(e){return Se(e,"Record")}i(id,"IsRecord$1");function Rr(e){return Se(e,"Ref")}i(Rr,"IsRef$1");function Ow(e){return Se(e,"RegExp")}i(Ow,"IsRegExp$1");function Hl(e){return Se(e,"String")}i(Hl,"IsString$1");function Dm(e){return Se(e,"Symbol")}i(Dm,"IsSymbol$1");function os(e){return Se(e,"TemplateLiteral")}i(os,"IsTemplateLiteral$1");function E9(e){return Se(e,"This")}i(E9,"IsThis$1");function Xe(e){return Ft(e)&&Ir in e}i(Xe,"IsTransform$1");function is(e){return Se(e,"Tuple")}i(is,"IsTuple$1");function Zl(e){return Se(e,"Undefined")}i(Zl,"IsUndefined$1");function Xt(e){return Se(e,"Union")}i(Xt,"IsUnion$1");function C9(e){return Se(e,"Uint8Array")}i(C9,"IsUint8Array$1");function S9(e){return Se(e,"Unknown")}i(S9,"IsUnknown$1");function M9(e){return Se(e,"Unsafe")}i(M9,"IsUnsafe$1");function F9(e){return Se(e,"Void")}i(F9,"IsVoid$1");function T9(e){return Ft(e)&&_ in e&&kt(e[_])}i(T9,"IsKind$1");function xr(e){return Nw(e)||Pw(e)||fa(e)||Kl(e)||rd(e)||td(e)||ha(e)||ma(e)||D9(e)||ga(e)||pa(e)||vn(e)||nd(e)||rs(e)||ns(e)||rn(e)||Gl(e)||A9(e)||xm(e)||ba(e)||_n(e)||od(e)||id(e)||Rr(e)||Ow(e)||Hl(e)||Dm(e)||os(e)||E9(e)||is(e)||Zl(e)||Xt(e)||C9(e)||S9(e)||M9(e)||F9(e)||T9(e)}i(xr,"IsSchema$1");const N9=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Bw(e){try{return new RegExp(e),!0}catch{return!1}}i(Bw,"IsPattern");function Am(e){if(!kt(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}i(Am,"IsControlCharacterFree");function Rw(e){return Em(e)||dt(e)}i(Rw,"IsAdditionalProperties");function Oa(e){return Ct(e)||xw(e)}i(Oa,"IsOptionalBigInt");function Ke(e){return Ct(e)||Qn(e)}i(Ke,"IsOptionalNumber");function Em(e){return Ct(e)||Vl(e)}i(Em,"IsOptionalBoolean");function ze(e){return Ct(e)||kt(e)}i(ze,"IsOptionalString");function P9(e){return Ct(e)||kt(e)&&Am(e)&&Bw(e)}i(P9,"IsOptionalPattern");function I9(e){return Ct(e)||kt(e)&&Am(e)}i(I9,"IsOptionalFormat");function Lw(e){return Ct(e)||dt(e)}i(Lw,"IsOptionalSchema");function yc(e){return Ft(e)&&e[Ao]==="Optional"}i(yc,"IsOptional");function In(e){return Me(e,"Any")&&ze(e.$id)}i(In,"IsAny");function O9(e){return Me(e,"Argument")&&Qn(e.index)}i(O9,"IsArgument");function ss(e){return Me(e,"Array")&&e.type==="array"&&ze(e.$id)&&dt(e.items)&&Ke(e.minItems)&&Ke(e.maxItems)&&Em(e.uniqueItems)&&Lw(e.contains)&&Ke(e.minContains)&&Ke(e.maxContains)}i(ss,"IsArray");function Cm(e){return Me(e,"AsyncIterator")&&e.type==="AsyncIterator"&&ze(e.$id)&&dt(e.items)}i(Cm,"IsAsyncIterator");function sd(e){return Me(e,"BigInt")&&e.type==="bigint"&&ze(e.$id)&&Oa(e.exclusiveMaximum)&&Oa(e.exclusiveMinimum)&&Oa(e.maximum)&&Oa(e.minimum)&&Oa(e.multipleOf)}i(sd,"IsBigInt");function as(e){return Me(e,"Boolean")&&e.type==="boolean"&&ze(e.$id)}i(as,"IsBoolean");function B9(e){return Me(e,"Computed")&&kt(e.target)&&jr(e.parameters)&&e.parameters.every(t=>dt(t))}i(B9,"IsComputed");function ad(e){return Me(e,"Constructor")&&e.type==="Constructor"&&ze(e.$id)&&jr(e.parameters)&&e.parameters.every(t=>dt(t))&&dt(e.returns)}i(ad,"IsConstructor");function ld(e){return Me(e,"Date")&&e.type==="Date"&&ze(e.$id)&&Ke(e.exclusiveMaximumTimestamp)&&Ke(e.exclusiveMinimumTimestamp)&&Ke(e.maximumTimestamp)&&Ke(e.minimumTimestamp)&&Ke(e.multipleOfTimestamp)}i(ld,"IsDate");function ud(e){return Me(e,"Function")&&e.type==="Function"&&ze(e.$id)&&jr(e.parameters)&&e.parameters.every(t=>dt(t))&&dt(e.returns)}i(ud,"IsFunction");function Eo(e){return Me(e,"Integer")&&e.type==="integer"&&ze(e.$id)&&Ke(e.exclusiveMaximum)&&Ke(e.exclusiveMinimum)&&Ke(e.maximum)&&Ke(e.minimum)&&Ke(e.multipleOf)}i(Eo,"IsInteger");function jw(e){return Ft(e)&&Object.entries(e).every(([t,r])=>Am(t)&&dt(r))}i(jw,"IsProperties");function ls(e){return Me(e,"Intersect")&&!(kt(e.type)&&e.type!=="object")&&jr(e.allOf)&&e.allOf.every(t=>dt(t)&&!z9(t))&&ze(e.type)&&(Em(e.unevaluatedProperties)||Lw(e.unevaluatedProperties))&&ze(e.$id)}i(ls,"IsIntersect");function Sm(e){return Me(e,"Iterator")&&e.type==="Iterator"&&ze(e.$id)&&dt(e.items)}i(Sm,"IsIterator");function Me(e,t){return Ft(e)&&_ in e&&e[_]===t}i(Me,"IsKindOf");function _w(e){return di(e)&&kt(e.const)}i(_w,"IsLiteralString");function Uw(e){return di(e)&&Qn(e.const)}i(Uw,"IsLiteralNumber");function zw(e){return di(e)&&Vl(e.const)}i(zw,"IsLiteralBoolean");function di(e){return Me(e,"Literal")&&ze(e.$id)&&R9(e.const)}i(di,"IsLiteral");function R9(e){return Vl(e)||Qn(e)||kt(e)}i(R9,"IsLiteralValue");function L9(e){return Me(e,"MappedKey")&&jr(e.keys)&&e.keys.every(t=>Qn(t)||kt(t))}i(L9,"IsMappedKey");function j9(e){return Me(e,"MappedResult")&&jw(e.properties)}i(j9,"IsMappedResult");function fi(e){return Me(e,"Never")&&Ft(e.not)&&Object.getOwnPropertyNames(e.not).length===0}i(fi,"IsNever");function Js(e){return Me(e,"Not")&&dt(e.not)}i(Js,"IsNot");function Mm(e){return Me(e,"Null")&&e.type==="null"&&ze(e.$id)}i(Mm,"IsNull");function Or(e){return Me(e,"Number")&&e.type==="number"&&ze(e.$id)&&Ke(e.exclusiveMaximum)&&Ke(e.exclusiveMinimum)&&Ke(e.maximum)&&Ke(e.minimum)&&Ke(e.multipleOf)}i(Or,"IsNumber");function ft(e){return Me(e,"Object")&&e.type==="object"&&ze(e.$id)&&jw(e.properties)&&Rw(e.additionalProperties)&&Ke(e.minProperties)&&Ke(e.maxProperties)}i(ft,"IsObject");function Fm(e){return Me(e,"Promise")&&e.type==="Promise"&&ze(e.$id)&&dt(e.item)}i(Fm,"IsPromise");function ir(e){return Me(e,"Record")&&e.type==="object"&&ze(e.$id)&&Rw(e.additionalProperties)&&Ft(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&Bw(r[0])&&Ft(t.patternProperties)&&dt(t.patternProperties[r[0]])})(e)}i(ir,"IsRecord");function _9(e){return Me(e,"Ref")&&ze(e.$id)&&kt(e.$ref)}i(_9,"IsRef");function xl(e){return Me(e,"RegExp")&&ze(e.$id)&&kt(e.source)&&kt(e.flags)&&Ke(e.maxLength)&&Ke(e.minLength)}i(xl,"IsRegExp");function On(e){return Me(e,"String")&&e.type==="string"&&ze(e.$id)&&Ke(e.minLength)&&Ke(e.maxLength)&&P9(e.pattern)&&I9(e.format)}i(On,"IsString");function Dl(e){return Me(e,"Symbol")&&e.type==="symbol"&&ze(e.$id)}i(Dl,"IsSymbol");function Al(e){return Me(e,"TemplateLiteral")&&e.type==="string"&&kt(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}i(Al,"IsTemplateLiteral");function U9(e){return Me(e,"This")&&ze(e.$id)&&kt(e.$ref)}i(U9,"IsThis");function z9(e){return Ft(e)&&Ir in e}i(z9,"IsTransform");function cd(e){return Me(e,"Tuple")&&e.type==="array"&&ze(e.$id)&&Qn(e.minItems)&&Qn(e.maxItems)&&e.minItems===e.maxItems&&(Ct(e.items)&&Ct(e.additionalItems)&&e.minItems===0||jr(e.items)&&e.items.every(t=>dt(t)))}i(cd,"IsTuple");function Ki(e){return Me(e,"Undefined")&&e.type==="undefined"&&ze(e.$id)}i(Ki,"IsUndefined");function Do(e){return Me(e,"Union")&&ze(e.$id)&&Ft(e)&&jr(e.anyOf)&&e.anyOf.every(t=>dt(t))}i(Do,"IsUnion");function Jl(e){return Me(e,"Uint8Array")&&e.type==="Uint8Array"&&ze(e.$id)&&Ke(e.minByteLength)&&Ke(e.maxByteLength)}i(Jl,"IsUint8Array");function Bn(e){return Me(e,"Unknown")&&ze(e.$id)}i(Bn,"IsUnknown");function V9(e){return Me(e,"Unsafe")}i(V9,"IsUnsafe");function dd(e){return Me(e,"Void")&&e.type==="void"&&ze(e.$id)}i(dd,"IsVoid");function q9(e){return Ft(e)&&_ in e&&kt(e[_])&&!N9.includes(e[_])}i(q9,"IsKind");function dt(e){return Ft(e)&&(In(e)||O9(e)||ss(e)||as(e)||sd(e)||Cm(e)||B9(e)||ad(e)||ld(e)||ud(e)||Eo(e)||ls(e)||Sm(e)||di(e)||L9(e)||j9(e)||fi(e)||Js(e)||Mm(e)||Or(e)||ft(e)||Fm(e)||ir(e)||_9(e)||xl(e)||On(e)||Dl(e)||Al(e)||U9(e)||cd(e)||Ki(e)||Do(e)||Jl(e)||Bn(e)||V9(e)||dd(e)||q9(e))}i(dt,"IsSchema");const W9="(true|false)",qu="(0|[1-9][0-9]*)",Vw="(.*)",K9="(?!.*)",Ys=`^${qu}$`,Xs=`^${Vw}$`,G9=`^${K9}$`,qw=new Map;function Tm(e){return qw.has(e)}i(Tm,"Has$1");function Nm(e){return qw.get(e)}i(Nm,"Get$1");const Pm=new Map;function ni(e){return Pm.has(e)}i(ni,"Has");function Im(e,t){Pm.set(e,t)}i(Im,"Set$1");function Om(e){return Pm.get(e)}i(Om,"Get");function H9(e,t){return e.includes(t)}i(H9,"SetIncludes");function Z9(e){return[...new Set(e)]}i(Z9,"SetDistinct");function J9(e,t){return e.filter(r=>t.includes(r))}i(J9,"SetIntersect");function Y9(e,t){return e.reduce((r,n)=>J9(r,n),t)}i(Y9,"SetIntersectManyResolve");function X9(e){return e.length===1?e[0]:e.length>1?Y9(e.slice(1),e[0]):[]}i(X9,"SetIntersectMany");function Q9(e){const t=[];for(const r of e)t.push(...r);return t}i(Q9,"SetUnionMany");function El(e){return z({[_]:"Any"},e)}i(El,"Any");function Bm(e,t){return z({[_]:"Array",type:"array",items:e},t)}i(Bm,"Array$1");function eA(e){return z({[_]:"Argument",index:e})}i(eA,"Argument");function Rm(e,t){return z({[_]:"AsyncIterator",type:"AsyncIterator",items:e},t)}i(Rm,"AsyncIterator");function _t(e,t,r){return z({[_]:"Computed",target:e,parameters:t},r)}i(_t,"Computed");function tA(e,t){const{[t]:r,...n}=e;return n}i(tA,"DiscardKey");function Qr(e,t){return t.reduce((r,n)=>tA(r,n),e)}i(Qr,"Discard");function ht(e){return z({[_]:"Never",not:{}},e)}i(ht,"Never");function lr(e){return z({[_]:"MappedResult",properties:e})}i(lr,"MappedResult");function Lm(e,t,r){return z({[_]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}i(Lm,"Constructor");function Yl(e,t,r){return z({[_]:"Function",type:"Function",parameters:e,returns:t},r)}i(Yl,"Function");function G0(e,t){return z({[_]:"Union",anyOf:e},t)}i(G0,"UnionCreate");function rA(e){return e.some(t=>ci(t))}i(rA,"IsUnionOptional");function Hb(e){return e.map(t=>ci(t)?nA(t):t)}i(Hb,"RemoveOptionalFromRest$1");function nA(e){return Qr(e,[Ao])}i(nA,"RemoveOptionalFromType$1");function oA(e,t){return rA(e)?gi(G0(Hb(e),t)):G0(Hb(e),t)}i(oA,"ResolveUnion");function ya(e,t){return e.length===1?z(e[0],t):e.length===0?ht(t):oA(e,t)}i(ya,"UnionEvaluated");function ur(e,t){return e.length===0?ht(t):e.length===1?z(e[0],t):G0(e,t)}i(ur,"Union$1");class Zb extends ar{static{i(this,"TemplateLiteralParserError")}}function iA(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}i(iA,"Unescape");function jm(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}i(jm,"IsNonEscaped");function bo(e,t){return jm(e,t,"(")}i(bo,"IsOpenParen");function Cl(e,t){return jm(e,t,")")}i(Cl,"IsCloseParen");function Ww(e,t){return jm(e,t,"|")}i(Ww,"IsSeparator");function sA(e){if(!(bo(e,0)&&Cl(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(bo(e,r)&&(t+=1),Cl(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}i(sA,"IsGroup");function aA(e){return e.slice(1,e.length-1)}i(aA,"InGroup");function lA(e){let t=0;for(let r=0;r<e.length;r++)if(bo(e,r)&&(t+=1),Cl(e,r)&&(t-=1),Ww(e,r)&&t===0)return!0;return!1}i(lA,"IsPrecedenceOr");function uA(e){for(let t=0;t<e.length;t++)if(bo(e,t))return!0;return!1}i(uA,"IsPrecedenceAnd");function cA(e){let[t,r]=[0,0];const n=[];for(let s=0;s<e.length;s++)if(bo(e,s)&&(t+=1),Cl(e,s)&&(t-=1),Ww(e,s)&&t===0){const a=e.slice(r,s);a.length>0&&n.push(Qs(a)),r=s+1}const o=e.slice(r);return o.length>0&&n.push(Qs(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}i(cA,"Or");function dA(e){function t(o,s){if(!bo(o,s))throw new Zb("TemplateLiteralParser: Index must point to open parens");let a=0;for(let l=s;l<o.length;l++)if(bo(o,l)&&(a+=1),Cl(o,l)&&(a-=1),a===0)return[s,l];throw new Zb("TemplateLiteralParser: Unclosed group parens in expression")}i(t,"Group");function r(o,s){for(let a=s;a<o.length;a++)if(bo(o,a))return[s,a];return[s,o.length]}i(r,"Range");const n=[];for(let o=0;o<e.length;o++)if(bo(e,o)){const[s,a]=t(e,o),l=e.slice(s,a+1);n.push(Qs(l)),o=a}else{const[s,a]=r(e,o),l=e.slice(s,a);l.length>0&&n.push(Qs(l)),o=a-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}i(dA,"And");function Qs(e){return sA(e)?Qs(aA(e)):lA(e)?cA(e):uA(e)?dA(e):{type:"const",const:iA(e)}}i(Qs,"TemplateLiteralParse");function _m(e){return Qs(e.slice(1,e.length-1))}i(_m,"TemplateLiteralParseExact");class fA extends ar{static{i(this,"TemplateLiteralFiniteError")}}function hA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}i(hA,"IsNumberExpression");function mA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}i(mA,"IsBooleanExpression");function gA(e){return e.type==="const"&&e.const===".*"}i(gA,"IsStringExpression");function Sl(e){return hA(e)||gA(e)?!1:mA(e)?!0:e.type==="and"?e.expr.every(t=>Sl(t)):e.type==="or"?e.expr.every(t=>Sl(t)):e.type==="const"?!0:(()=>{throw new fA("Unknown expression type")})()}i(Sl,"IsTemplateLiteralExpressionFinite");function pA(e){const t=_m(e.pattern);return Sl(t)}i(pA,"IsTemplateLiteralFinite");class bA extends ar{static{i(this,"TemplateLiteralGenerateError")}}function*Kw(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Kw(e.slice(1)))yield`${t}${r}`}i(Kw,"GenerateReduce");function*yA(e){return yield*Kw(e.expr.map(t=>[...fd(t)]))}i(yA,"GenerateAnd");function*vA(e){for(const t of e.expr)yield*fd(t)}i(vA,"GenerateOr");function*wA(e){return yield e.const}i(wA,"GenerateConst");function*fd(e){return e.type==="and"?yield*yA(e):e.type==="or"?yield*vA(e):e.type==="const"?yield*wA(e):(()=>{throw new bA("Unknown expression")})()}i(fd,"TemplateLiteralExpressionGenerate");function Gw(e){const t=_m(e.pattern);return Sl(t)?[...fd(t)]:[]}i(Gw,"TemplateLiteralGenerate");function St(e,t){return z({[_]:"Literal",const:e,type:typeof e},t)}i(St,"Literal");function Hw(e){return z({[_]:"Boolean",type:"boolean"},e)}i(Hw,"Boolean$1");function Um(e){return z({[_]:"BigInt",type:"bigint"},e)}i(Um,"BigInt$1");function us(e){return z({[_]:"Number",type:"number"},e)}i(us,"Number$1");function Gi(e){return z({[_]:"String",type:"string"},e)}i(Gi,"String$1");function*$A(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Hw():t==="number"?yield us():t==="bigint"?yield Um():t==="string"?yield Gi():yield(()=>{const r=t.split("|").map(n=>St(n.trim()));return r.length===0?ht():r.length===1?r[0]:ya(r)})()}i($A,"FromUnion$e");function*kA(e){if(e[1]!=="{"){const t=St("$"),r=H0(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=$A(e.slice(2,t)),n=H0(e.slice(t+1));return yield*[...r,...n]}yield St(e)}i(kA,"FromTerminal");function*H0(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=St(e.slice(0,t)),n=kA(e.slice(t));return yield*[r,...n]}yield St(e)}i(H0,"FromSyntax");function xA(e){return[...H0(e)]}i(xA,"TemplateLiteralSyntax");class DA extends ar{static{i(this,"TemplateLiteralPatternError")}}function AA(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}i(AA,"Escape");function Zw(e,t){return os(e)?e.pattern.slice(1,e.pattern.length-1):Xt(e)?`(${e.anyOf.map(r=>Zw(r,t)).join("|")})`:ba(e)?`${t}${qu}`:pa(e)?`${t}${qu}`:rd(e)?`${t}${qu}`:Hl(e)?`${t}${Vw}`:rs(e)?`${t}${AA(e.const.toString())}`:Kl(e)?`${t}${W9}`:(()=>{throw new DA(`Unexpected Kind '${e[_]}'`)})()}i(Zw,"Visit$7");function Jb(e){return`^${e.map(t=>Zw(t,"")).join("")}$`}i(Jb,"TemplateLiteralPattern");function vc(e){const r=Gw(e).map(n=>St(n));return ya(r)}i(vc,"TemplateLiteralToUnion");function Jw(e,t){const r=kt(e)?Jb(xA(e)):Jb(e);return z({[_]:"TemplateLiteral",type:"string",pattern:r},t)}i(Jw,"TemplateLiteral");function EA(e){return Gw(e).map(r=>r.toString())}i(EA,"FromTemplateLiteral$4");function CA(e){const t=[];for(const r of e)t.push(...hi(r));return t}i(CA,"FromUnion$d");function SA(e){return[e.toString()]}i(SA,"FromLiteral$3");function hi(e){return[...new Set(os(e)?EA(e):Xt(e)?CA(e.anyOf):rs(e)?SA(e.const):ba(e)?["[number]"]:pa(e)?["[number]"]:[])]}i(hi,"IndexPropertyKeys");function MA(e,t,r){const n={};for(const o of Object.getOwnPropertyNames(t))n[o]=hd(e,hi(t[o]),r);return n}i(MA,"FromProperties$i");function FA(e,t,r){return MA(e,t.properties,r)}i(FA,"FromMappedResult$b");function TA(e,t,r){const n=FA(e,t,r);return lr(n)}i(TA,"IndexFromMappedResult");function Yw(e,t){return e.map(r=>Xw(r,t))}i(Yw,"FromRest$6");function NA(e){return e.filter(t=>!Gl(t))}i(NA,"FromIntersectRest");function PA(e,t){return t5(NA(Yw(e,t)))}i(PA,"FromIntersect$c");function IA(e){return e.some(t=>Gl(t))?[]:e}i(IA,"FromUnionRest");function OA(e,t){return ya(IA(Yw(e,t)))}i(OA,"FromUnion$c");function BA(e,t){return t in e?e[t]:t==="[number]"?ya(e):ht()}i(BA,"FromTuple$9");function RA(e,t){return t==="[number]"?e:ht()}i(RA,"FromArray$a");function LA(e,t){return t in e?e[t]:ht()}i(LA,"FromProperty$2");function Xw(e,t){return vn(e)?PA(e.allOf,t):Xt(e)?OA(e.anyOf,t):is(e)?BA(e.items??[],t):fa(e)?RA(e.items,t):_n(e)?LA(e.properties,t):ht()}i(Xw,"IndexFromPropertyKey");function zm(e,t){return t.map(r=>Xw(e,r))}i(zm,"IndexFromPropertyKeys");function Yb(e,t){return ya(zm(e,t))}i(Yb,"FromSchema");function hd(e,t,r){if(Rr(e)||Rr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!xr(e)||!xr(t))throw new ar(n);return _t("Index",[e,t])}return rn(t)?TA(e,t,r):ns(t)?zA(e,t,r):z(xr(t)?Yb(e,hi(t)):Yb(e,t),r)}i(hd,"Index");function jA(e,t,r){return{[t]:hd(e,[t],Yr(r))}}i(jA,"MappedIndexPropertyKey");function _A(e,t,r){return t.reduce((n,o)=>({...n,...jA(e,o,r)}),{})}i(_A,"MappedIndexPropertyKeys");function UA(e,t,r){return _A(e,t.keys,r)}i(UA,"MappedIndexProperties");function zA(e,t,r){const n=UA(e,t,r);return lr(n)}i(zA,"IndexFromMappedKey");function Vm(e,t){return z({[_]:"Iterator",type:"Iterator",items:e},t)}i(Vm,"Iterator");function VA(e){return globalThis.Object.keys(e).filter(t=>!ci(e[t]))}i(VA,"RequiredArray");function qA(e,t){const r=VA(e),n=r.length>0?{[_]:"Object",type:"object",required:r,properties:e}:{[_]:"Object",type:"object",properties:e};return z(n,t)}i(qA,"_Object");var Yt=qA;function Qw(e,t){return z({[_]:"Promise",type:"Promise",item:e},t)}i(Qw,"Promise$1");function WA(e){return z(Qr(e,[Wl]))}i(WA,"RemoveReadonly");function KA(e){return z({...e,[Wl]:"Readonly"})}i(KA,"AddReadonly");function GA(e,t){return t===!1?WA(e):KA(e)}i(GA,"ReadonlyWithFlag");function mi(e,t){const r=t??!0;return rn(e)?JA(e,r):GA(e,r)}i(mi,"Readonly");function HA(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=mi(e[n],t);return r}i(HA,"FromProperties$h");function ZA(e,t){return HA(e.properties,t)}i(ZA,"FromMappedResult$a");function JA(e,t){const r=ZA(e,t);return lr(r)}i(JA,"ReadonlyFromMappedResult");function va(e,t){return z(e.length>0?{[_]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[_]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}i(va,"Tuple");function e5(e,t){return e in t?un(e,t[e]):lr(t)}i(e5,"FromMappedResult$9");function YA(e){return{[e]:St(e)}}i(YA,"MappedKeyToKnownMappedResultProperties");function XA(e){const t={};for(const r of e)t[r]=St(r);return t}i(XA,"MappedKeyToUnknownMappedResultProperties");function QA(e,t){return H9(t,e)?YA(e):XA(t)}i(QA,"MappedKeyToMappedResultProperties");function eE(e,t){const r=QA(e,t);return e5(e,r)}i(eE,"FromMappedKey$3");function Ba(e,t){return t.map(r=>un(e,r))}i(Ba,"FromRest$5");function tE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=un(e,t[n]);return r}i(tE,"FromProperties$g");function un(e,t){const r={...t};return ci(t)?gi(un(e,Qr(t,[Ao]))):km(t)?mi(un(e,Qr(t,[Wl]))):rn(t)?e5(e,t.properties):ns(t)?eE(e,t.keys):ma(t)?Lm(Ba(e,t.parameters),un(e,t.returns),r):ga(t)?Yl(Ba(e,t.parameters),un(e,t.returns),r):td(t)?Rm(un(e,t.items),r):nd(t)?Vm(un(e,t.items),r):vn(t)?pi(Ba(e,t.allOf),r):Xt(t)?ur(Ba(e,t.anyOf),r):is(t)?va(Ba(e,t.items??[]),r):_n(t)?Yt(tE(e,t.properties),r):fa(t)?Bm(un(e,t.items),r):od(t)?Qw(un(e,t.item),r):t}i(un,"FromSchemaType");function rE(e,t){const r={};for(const n of e)r[n]=un(n,t);return r}i(rE,"MappedFunctionReturnType");function nE(e,t,r){const n=xr(e)?hi(e):e,o=t({[_]:"MappedKey",keys:n}),s=rE(n,o);return Yt(s,r)}i(nE,"Mapped");function oE(e){return z(Qr(e,[Ao]))}i(oE,"RemoveOptional");function iE(e){return z({...e,[Ao]:"Optional"})}i(iE,"AddOptional");function sE(e,t){return t===!1?oE(e):iE(e)}i(sE,"OptionalWithFlag");function gi(e,t){const r=t??!0;return rn(e)?uE(e,r):sE(e,r)}i(gi,"Optional");function aE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=gi(e[n],t);return r}i(aE,"FromProperties$f");function lE(e,t){return aE(e.properties,t)}i(lE,"FromMappedResult$8");function uE(e,t){const r=lE(e,t);return lr(r)}i(uE,"OptionalFromMappedResult");function Z0(e,t={}){const r=e.every(o=>_n(o)),n=xr(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return z(t.unevaluatedProperties===!1||xr(t.unevaluatedProperties)||r?{...n,[_]:"Intersect",type:"object",allOf:e}:{...n,[_]:"Intersect",allOf:e},t)}i(Z0,"IntersectCreate");function cE(e){return e.every(t=>ci(t))}i(cE,"IsIntersectOptional");function dE(e){return Qr(e,[Ao])}i(dE,"RemoveOptionalFromType");function Xb(e){return e.map(t=>ci(t)?dE(t):t)}i(Xb,"RemoveOptionalFromRest");function fE(e,t){return cE(e)?gi(Z0(Xb(e),t)):Z0(Xb(e),t)}i(fE,"ResolveIntersect");function t5(e,t={}){if(e.length===1)return z(e[0],t);if(e.length===0)return ht(t);if(e.some(r=>Xe(r)))throw new Error("Cannot intersect transform types");return fE(e,t)}i(t5,"IntersectEvaluated");function pi(e,t){if(e.length===1)return z(e[0],t);if(e.length===0)return ht(t);if(e.some(r=>Xe(r)))throw new Error("Cannot intersect transform types");return Z0(e,t)}i(pi,"Intersect$1");function wa(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new ar("Ref: $ref must be a string");return z({[_]:"Ref",$ref:t},r)}i(wa,"Ref");function hE(e,t){return _t("Awaited",[_t(e,t)])}i(hE,"FromComputed$4");function mE(e){return _t("Awaited",[wa(e)])}i(mE,"FromRef$8");function gE(e){return pi(r5(e))}i(gE,"FromIntersect$b");function pE(e){return ur(r5(e))}i(pE,"FromUnion$b");function bE(e){return md(e)}i(bE,"FromPromise$5");function r5(e){return e.map(t=>md(t))}i(r5,"FromRest$4");function md(e,t){return z(ha(e)?hE(e.target,e.parameters):vn(e)?gE(e.allOf):Xt(e)?pE(e.anyOf):od(e)?bE(e.item):Rr(e)?mE(e.$ref):e,t)}i(md,"Awaited");function n5(e){const t=[];for(const r of e)t.push(cs(r));return t}i(n5,"FromRest$3");function yE(e){const t=n5(e);return Q9(t)}i(yE,"FromIntersect$a");function vE(e){const t=n5(e);return X9(t)}i(vE,"FromUnion$a");function wE(e){return e.map((t,r)=>r.toString())}i(wE,"FromTuple$8");function $E(e){return["[number]"]}i($E,"FromArray$9");function kE(e){return globalThis.Object.getOwnPropertyNames(e)}i(kE,"FromProperties$e");function xE(e){return J0?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}i(xE,"FromPatternProperties");function cs(e){return vn(e)?yE(e.allOf):Xt(e)?vE(e.anyOf):is(e)?wE(e.items??[]):fa(e)?$E(e.items):_n(e)?kE(e.properties):id(e)?xE(e.patternProperties):[]}i(cs,"KeyOfPropertyKeys");let J0=!1;function ea(e){J0=!0;const t=cs(e);return J0=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}i(ea,"KeyOfPattern");function DE(e,t){return _t("KeyOf",[_t(e,t)])}i(DE,"FromComputed$3");function AE(e){return _t("KeyOf",[wa(e)])}i(AE,"FromRef$7");function EE(e,t){const r=cs(e),n=CE(r),o=ya(n);return z(o,t)}i(EE,"KeyOfFromType");function CE(e){return e.map(t=>t==="[number]"?us():St(t))}i(CE,"KeyOfPropertyKeysToRest");function qm(e,t){return ha(e)?DE(e.target,e.parameters):Rr(e)?AE(e.$ref):rn(e)?FE(e,t):EE(e,t)}i(qm,"KeyOf");function SE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=qm(e[n],Yr(t));return r}i(SE,"FromProperties$d");function ME(e,t){return SE(e.properties,t)}i(ME,"FromMappedResult$7");function FE(e,t){const r=ME(e,t);return lr(r)}i(FE,"KeyOfFromMappedResult");function o5(e){const t=cs(e),r=zm(e,t);return t.map((n,o)=>[t[o],r[o]])}i(o5,"KeyOfPropertyEntries");function TE(e){const t=[];for(const r of e)t.push(...cs(r));return Z9(t)}i(TE,"CompositeKeys");function NE(e){return e.filter(t=>!Gl(t))}i(NE,"FilterNever");function PE(e,t){const r=[];for(const n of e)r.push(...zm(n,[t]));return NE(r)}i(PE,"CompositeProperty");function IE(e,t){const r={};for(const n of t)r[n]=t5(PE(e,n));return r}i(IE,"CompositeProperties");function OE(e,t){const r=TE(e),n=IE(e,r);return Yt(n,t)}i(OE,"Composite");function i5(e){return z({[_]:"Date",type:"Date"},e)}i(i5,"Date$1");function s5(e){return z({[_]:"Null",type:"null"},e)}i(s5,"Null");function a5(e){return z({[_]:"Symbol",type:"symbol"},e)}i(a5,"Symbol$1");function l5(e){return z({[_]:"Undefined",type:"undefined"},e)}i(l5,"Undefined");function u5(e){return z({[_]:"Uint8Array",type:"Uint8Array"},e)}i(u5,"Uint8Array$1");function gd(e){return z({[_]:"Unknown"},e)}i(gd,"Unknown");function BE(e){return e.map(t=>Wm(t,!1))}i(BE,"FromArray$8");function RE(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=mi(Wm(e[r],!1));return t}i(RE,"FromProperties$c");function Du(e,t){return t===!0?e:mi(e)}i(Du,"ConditionalReadonly");function Wm(e,t){return f9(e)||m9(e)?Du(El(),t):jr(e)?mi(va(BE(e))):ql(e)?u5():ym(e)?i5():Ft(e)?Du(Yt(RE(e)),t):h9(e)?Du(Yl([],gd()),t):Ct(e)?l5():g9(e)?s5():p9(e)?a5():xw(e)?Um():Qn(e)||Vl(e)||kt(e)?St(e):Yt({})}i(Wm,"FromValue");function LE(e,t){return z(Wm(e,!0),t)}i(LE,"Const");function jE(e,t){return ma(e)?va(e.parameters,t):ht(t)}i(jE,"ConstructorParameters");function _E(e,t){if(Ct(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(s=>isNaN(s)).map(s=>e[s]),o=[...new Set(r)].map(s=>St(s));return ur(o,{...t,[ed]:"Enum"})}i(_E,"Enum");class UE extends ar{static{i(this,"ExtendsResolverError")}}var N;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(N||(N={}));function bn(e){return e===N.False?e:N.True}i(bn,"IntoBooleanResult");function $a(e){throw new UE(e)}i($a,"Throw");function Tt(e){return fi(e)||ls(e)||Do(e)||Bn(e)||In(e)}i(Tt,"IsStructuralRight");function Nt(e,t){return fi(t)?f5():ls(t)?pd(e,t):Do(t)?Gm(e,t):Bn(t)?p5():In(t)?Km():$a("StructuralRight")}i(Nt,"StructuralRight");function Km(e,t){return N.True}i(Km,"FromAnyRight");function zE(e,t){return ls(t)?pd(e,t):Do(t)&&t.anyOf.some(r=>In(r)||Bn(r))?N.True:Do(t)?N.Union:Bn(t)||In(t)?N.True:N.Union}i(zE,"FromAny$2");function VE(e,t){return Bn(e)?N.False:In(e)?N.Union:fi(e)?N.True:N.False}i(VE,"FromArrayRight");function qE(e,t){return ft(t)&&bd(t)?N.True:Tt(t)?Nt(e,t):ss(t)?bn(Ue(e.items,t.items)):N.False}i(qE,"FromArray$7");function WE(e,t){return Tt(t)?Nt(e,t):Cm(t)?bn(Ue(e.items,t.items)):N.False}i(WE,"FromAsyncIterator$5");function KE(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):sd(t)?N.True:N.False}i(KE,"FromBigInt$2");function c5(e,t){return zw(e)||as(e)?N.True:N.False}i(c5,"FromBooleanRight");function GE(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):as(t)?N.True:N.False}i(GE,"FromBoolean$2");function HE(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ad(t)?e.parameters.length>t.parameters.length?N.False:e.parameters.every((r,n)=>bn(Ue(t.parameters[n],r))===N.True)?bn(Ue(e.returns,t.returns)):N.False:N.False}i(HE,"FromConstructor$5");function ZE(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):ld(t)?N.True:N.False}i(ZE,"FromDate$2");function JE(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ud(t)?e.parameters.length>t.parameters.length?N.False:e.parameters.every((r,n)=>bn(Ue(t.parameters[n],r))===N.True)?bn(Ue(e.returns,t.returns)):N.False:N.False}i(JE,"FromFunction$5");function d5(e,t){return di(e)&&Qn(e.const)||Or(e)||Eo(e)?N.True:N.False}i(d5,"FromIntegerRight");function YE(e,t){return Eo(t)||Or(t)?N.True:Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):N.False}i(YE,"FromInteger$2");function pd(e,t){return t.allOf.every(r=>Ue(e,r)===N.True)?N.True:N.False}i(pd,"FromIntersectRight");function XE(e,t){return e.allOf.some(r=>Ue(r,t)===N.True)?N.True:N.False}i(XE,"FromIntersect$9");function QE(e,t){return Tt(t)?Nt(e,t):Sm(t)?bn(Ue(e.items,t.items)):N.False}i(QE,"FromIterator$5");function eC(e,t){return di(t)&&t.const===e.const?N.True:Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):On(t)?g5(e):Or(t)?h5(e):Eo(t)?d5(e):as(t)?c5(e):N.False}i(eC,"FromLiteral$2");function f5(e,t){return N.False}i(f5,"FromNeverRight");function tC(e,t){return N.True}i(tC,"FromNever$2");function Qb(e){let[t,r]=[e,0];for(;Js(t);)t=t.not,r+=1;return r%2===0?t:gd()}i(Qb,"UnwrapTNot");function rC(e,t){return Js(e)?Ue(Qb(e),t):Js(t)?Ue(e,Qb(t)):$a("Invalid fallthrough for Not")}i(rC,"FromNot$5");function nC(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):Mm(t)?N.True:N.False}i(nC,"FromNull$2");function h5(e,t){return Uw(e)||Or(e)||Eo(e)?N.True:N.False}i(h5,"FromNumberRight");function oC(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):Eo(t)||Or(t)?N.True:N.False}i(oC,"FromNumber$2");function Lr(e,t){return Object.getOwnPropertyNames(e.properties).length===t}i(Lr,"IsObjectPropertyCount");function e1(e){return bd(e)}i(e1,"IsObjectStringLike");function t1(e){return Lr(e,0)||Lr(e,1)&&"description"in e.properties&&Do(e.properties.description)&&e.properties.description.anyOf.length===2&&(On(e.properties.description.anyOf[0])&&Ki(e.properties.description.anyOf[1])||On(e.properties.description.anyOf[1])&&Ki(e.properties.description.anyOf[0]))}i(t1,"IsObjectSymbolLike");function Cf(e){return Lr(e,0)}i(Cf,"IsObjectNumberLike");function r1(e){return Lr(e,0)}i(r1,"IsObjectBooleanLike");function iC(e){return Lr(e,0)}i(iC,"IsObjectBigIntLike");function sC(e){return Lr(e,0)}i(sC,"IsObjectDateLike");function aC(e){return bd(e)}i(aC,"IsObjectUint8ArrayLike");function lC(e){const t=us();return Lr(e,0)||Lr(e,1)&&"length"in e.properties&&bn(Ue(e.properties.length,t))===N.True}i(lC,"IsObjectFunctionLike");function uC(e){return Lr(e,0)}i(uC,"IsObjectConstructorLike");function bd(e){const t=us();return Lr(e,0)||Lr(e,1)&&"length"in e.properties&&bn(Ue(e.properties.length,t))===N.True}i(bd,"IsObjectArrayLike");function cC(e){const t=Yl([El()],El());return Lr(e,0)||Lr(e,1)&&"then"in e.properties&&bn(Ue(e.properties.then,t))===N.True}i(cC,"IsObjectPromiseLike");function m5(e,t){return Ue(e,t)===N.False||yc(e)&&!yc(t)?N.False:N.True}i(m5,"Property");function yr(e,t){return Bn(e)?N.False:In(e)?N.Union:fi(e)||_w(e)&&e1(t)||Uw(e)&&Cf(t)||zw(e)&&r1(t)||Dl(e)&&t1(t)||sd(e)&&iC(t)||On(e)&&e1(t)||Dl(e)&&t1(t)||Or(e)&&Cf(t)||Eo(e)&&Cf(t)||as(e)&&r1(t)||Jl(e)&&aC(t)||ld(e)&&sC(t)||ad(e)&&uC(t)||ud(e)&&lC(t)?N.True:ir(e)&&On(Y0(e))?t[ed]==="Record"?N.True:N.False:ir(e)&&Or(Y0(e))&&Lr(t,0)?N.True:N.False}i(yr,"FromObjectRight");function dC(e,t){return Tt(t)?Nt(e,t):ir(t)?wn(e,t):ft(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!yc(t.properties[r]))return N.False;if(yc(t.properties[r]))return N.True;if(m5(e.properties[r],t.properties[r])===N.False)return N.False}return N.True})():N.False}i(dC,"FromObject$b");function fC(e,t){return Tt(t)?Nt(e,t):ft(t)&&cC(t)?N.True:Fm(t)?bn(Ue(e.item,t.item)):N.False}i(fC,"FromPromise$4");function Y0(e){return Ys in e.patternProperties?us():Xs in e.patternProperties?Gi():$a("Unknown record key pattern")}i(Y0,"RecordKey$1");function X0(e){return Ys in e.patternProperties?e.patternProperties[Ys]:Xs in e.patternProperties?e.patternProperties[Xs]:$a("Unable to get record value schema")}i(X0,"RecordValue$1");function wn(e,t){const[r,n]=[Y0(t),X0(t)];return _w(e)&&Or(r)&&bn(Ue(e,n))===N.True?N.True:Jl(e)&&Or(r)||On(e)&&Or(r)||ss(e)&&Or(r)?Ue(e,n):ft(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(m5(n,e.properties[o])===N.False)return N.False;return N.True})():N.False}i(wn,"FromRecordRight");function hC(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?Ue(X0(e),X0(t)):N.False}i(hC,"FromRecord$7");function mC(e,t){const r=xl(e)?Gi():e,n=xl(t)?Gi():t;return Ue(r,n)}i(mC,"FromRegExp$2");function g5(e,t){return di(e)&&kt(e.const)||On(e)?N.True:N.False}i(g5,"FromStringRight");function gC(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):On(t)?N.True:N.False}i(gC,"FromString$2");function pC(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):Dl(t)?N.True:N.False}i(pC,"FromSymbol$2");function bC(e,t){return Al(e)?Ue(vc(e),t):Al(t)?Ue(e,vc(t)):$a("Invalid fallthrough for TemplateLiteral")}i(bC,"FromTemplateLiteral$3");function yC(e,t){return ss(t)&&e.items!==void 0&&e.items.every(r=>Ue(r,t.items)===N.True)}i(yC,"IsArrayOfTuple");function vC(e,t){return fi(e)?N.True:Bn(e)?N.False:In(e)?N.Union:N.False}i(vC,"FromTupleRight");function wC(e,t){return Tt(t)?Nt(e,t):ft(t)&&bd(t)||ss(t)&&yC(e,t)?N.True:cd(t)?Ct(e.items)&&!Ct(t.items)||!Ct(e.items)&&Ct(t.items)?N.False:Ct(e.items)&&!Ct(t.items)||e.items.every((r,n)=>Ue(r,t.items[n])===N.True)?N.True:N.False:N.False}i(wC,"FromTuple$7");function $C(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):Jl(t)?N.True:N.False}i($C,"FromUint8Array$2");function kC(e,t){return Tt(t)?Nt(e,t):ft(t)?yr(e,t):ir(t)?wn(e,t):dd(t)?AC(e):Ki(t)?N.True:N.False}i(kC,"FromUndefined$2");function Gm(e,t){return t.anyOf.some(r=>Ue(e,r)===N.True)?N.True:N.False}i(Gm,"FromUnionRight");function xC(e,t){return e.anyOf.every(r=>Ue(r,t)===N.True)?N.True:N.False}i(xC,"FromUnion$9");function p5(e,t){return N.True}i(p5,"FromUnknownRight");function DC(e,t){return fi(t)?f5():ls(t)?pd(e,t):Do(t)?Gm(e,t):In(t)?Km():On(t)?g5(e):Or(t)?h5(e):Eo(t)?d5(e):as(t)?c5(e):ss(t)?VE(e):cd(t)?vC(e):ft(t)?yr(e,t):Bn(t)?N.True:N.False}i(DC,"FromUnknown$2");function AC(e,t){return Ki(e)||Ki(e)?N.True:N.False}i(AC,"FromVoidRight");function EC(e,t){return ls(t)?pd(e,t):Do(t)?Gm(e,t):Bn(t)?p5():In(t)?Km():ft(t)?yr(e,t):dd(t)?N.True:N.False}i(EC,"FromVoid$2");function Ue(e,t){return Al(e)||Al(t)?bC(e,t):xl(e)||xl(t)?mC(e,t):Js(e)||Js(t)?rC(e,t):In(e)?zE(e,t):ss(e)?qE(e,t):sd(e)?KE(e,t):as(e)?GE(e,t):Cm(e)?WE(e,t):ad(e)?HE(e,t):ld(e)?ZE(e,t):ud(e)?JE(e,t):Eo(e)?YE(e,t):ls(e)?XE(e,t):Sm(e)?QE(e,t):di(e)?eC(e,t):fi(e)?tC():Mm(e)?nC(e,t):Or(e)?oC(e,t):ft(e)?dC(e,t):ir(e)?hC(e,t):On(e)?gC(e,t):Dl(e)?pC(e,t):cd(e)?wC(e,t):Fm(e)?fC(e,t):Jl(e)?$C(e,t):Ki(e)?kC(e,t):Do(e)?xC(e,t):Bn(e)?DC(e,t):dd(e)?EC(e,t):$a(`Unknown left type operand '${e[_]}'`)}i(Ue,"Visit$6");function Xl(e,t){return Ue(e,t)}i(Xl,"ExtendsCheck");function CC(e,t,r,n,o){const s={};for(const a of globalThis.Object.getOwnPropertyNames(e))s[a]=Hm(e[a],t,r,n,Yr(o));return s}i(CC,"FromProperties$b");function SC(e,t,r,n,o){return CC(e.properties,t,r,n,o)}i(SC,"FromMappedResult$6");function MC(e,t,r,n,o){const s=SC(e,t,r,n,o);return lr(s)}i(MC,"ExtendsFromMappedResult");function FC(e,t,r,n){const o=Xl(e,t);return o===N.Union?ur([r,n]):o===N.True?r:n}i(FC,"ExtendsResolve");function Hm(e,t,r,n,o){return rn(e)?MC(e,t,r,n,o):ns(e)?z(IC(e,t,r,n,o)):z(FC(e,t,r,n),o)}i(Hm,"Extends");function TC(e,t,r,n,o){return{[e]:Hm(St(e),t,r,n,Yr(o))}}i(TC,"FromPropertyKey$2");function NC(e,t,r,n,o){return e.reduce((s,a)=>({...s,...TC(a,t,r,n,o)}),{})}i(NC,"FromPropertyKeys$2");function PC(e,t,r,n,o){return NC(e.keys,t,r,n,o)}i(PC,"FromMappedKey$2");function IC(e,t,r,n,o){const s=PC(e,t,r,n,o);return lr(s)}i(IC,"ExtendsFromMappedKey");function OC(e){return e.allOf.every(t=>ka(t))}i(OC,"Intersect");function BC(e){return e.anyOf.some(t=>ka(t))}i(BC,"Union");function RC(e){return!ka(e.not)}i(RC,"Not$1");function ka(e){return e[_]==="Intersect"?OC(e):e[_]==="Union"?BC(e):e[_]==="Not"?RC(e):e[_]==="Undefined"}i(ka,"ExtendsUndefinedCheck");function LC(e,t){return Zm(vc(e),t)}i(LC,"ExcludeFromTemplateLiteral");function jC(e,t){const r=e.filter(n=>Xl(n,t)===N.False);return r.length===1?r[0]:ur(r)}i(jC,"ExcludeRest");function Zm(e,t,r={}){return os(e)?z(LC(e,t),r):rn(e)?z(zC(e,t),r):z(Xt(e)?jC(e.anyOf,t):Xl(e,t)!==N.False?ht():e,r)}i(Zm,"Exclude");function _C(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Zm(e[n],t);return r}i(_C,"FromProperties$a");function UC(e,t){return _C(e.properties,t)}i(UC,"FromMappedResult$5");function zC(e,t){const r=UC(e,t);return lr(r)}i(zC,"ExcludeFromMappedResult");function VC(e,t){return Jm(vc(e),t)}i(VC,"ExtractFromTemplateLiteral");function qC(e,t){const r=e.filter(n=>Xl(n,t)!==N.False);return r.length===1?r[0]:ur(r)}i(qC,"ExtractRest");function Jm(e,t,r){return os(e)?z(VC(e,t),r):rn(e)?z(GC(e,t),r):z(Xt(e)?qC(e.anyOf,t):Xl(e,t)!==N.False?e:ht(),r)}i(Jm,"Extract");function WC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Jm(e[n],t);return r}i(WC,"FromProperties$9");function KC(e,t){return WC(e.properties,t)}i(KC,"FromMappedResult$4");function GC(e,t){const r=KC(e,t);return lr(r)}i(GC,"ExtractFromMappedResult");function HC(e,t){return ma(e)?z(e.returns,t):ht(t)}i(HC,"InstanceType");function b5(e){return mi(gi(e))}i(b5,"ReadonlyOptional");function ds(e,t,r){return z({[_]:"Record",type:"object",patternProperties:{[e]:t}},r)}i(ds,"RecordCreateFromPattern");function Ym(e,t,r){const n={};for(const o of e)n[o]=t;return Yt(n,{...r,[ed]:"Record"})}i(Ym,"RecordCreateFromKeys");function ZC(e,t,r){return pA(e)?Ym(hi(e),t,r):ds(e.pattern,t,r)}i(ZC,"FromTemplateLiteralKey");function JC(e,t,r){return Ym(hi(ur(e)),t,r)}i(JC,"FromUnionKey");function YC(e,t,r){return Ym([e.toString()],t,r)}i(YC,"FromLiteralKey");function XC(e,t,r){return ds(e.source,t,r)}i(XC,"FromRegExpKey");function QC(e,t,r){const n=Ct(e.pattern)?Xs:e.pattern;return ds(n,t,r)}i(QC,"FromStringKey");function e7(e,t,r){return ds(Xs,t,r)}i(e7,"FromAnyKey");function t7(e,t,r){return ds(G9,t,r)}i(t7,"FromNeverKey");function r7(e,t,r){return Yt({true:t,false:t},r)}i(r7,"FromBooleanKey");function n7(e,t,r){return ds(Ys,t,r)}i(n7,"FromIntegerKey");function o7(e,t,r){return ds(Ys,t,r)}i(o7,"FromNumberKey");function y5(e,t,r={}){return Xt(e)?JC(e.anyOf,t,r):os(e)?ZC(e,t,r):rs(e)?YC(e.const,t,r):Kl(e)?r7(e,t,r):pa(e)?n7(e,t,r):ba(e)?o7(e,t,r):Ow(e)?XC(e,t,r):Hl(e)?QC(e,t,r):Nw(e)?e7(e,t,r):Gl(e)?t7(e,t,r):ht(r)}i(y5,"Record");function Xm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}i(Xm,"RecordPattern");function i7(e){const t=Xm(e);return t===Xs?Gi():t===Ys?us():Gi({pattern:t})}i(i7,"RecordKey");function v5(e){return e.patternProperties[Xm(e)]}i(v5,"RecordValue");function s7(e,t){return t.parameters=Ql(e,t.parameters),t.returns=Rn(e,t.returns),t}i(s7,"FromConstructor$4");function a7(e,t){return t.parameters=Ql(e,t.parameters),t.returns=Rn(e,t.returns),t}i(a7,"FromFunction$4");function l7(e,t){return t.allOf=Ql(e,t.allOf),t}i(l7,"FromIntersect$8");function u7(e,t){return t.anyOf=Ql(e,t.anyOf),t}i(u7,"FromUnion$8");function c7(e,t){return Ct(t.items)||(t.items=Ql(e,t.items)),t}i(c7,"FromTuple$6");function d7(e,t){return t.items=Rn(e,t.items),t}i(d7,"FromArray$6");function f7(e,t){return t.items=Rn(e,t.items),t}i(f7,"FromAsyncIterator$4");function h7(e,t){return t.items=Rn(e,t.items),t}i(h7,"FromIterator$4");function m7(e,t){return t.item=Rn(e,t.item),t}i(m7,"FromPromise$3");function g7(e,t){const r=v7(e,t.properties);return{...t,...Yt(r)}}i(g7,"FromObject$a");function p7(e,t){const r=Rn(e,i7(t)),n=Rn(e,v5(t)),o=y5(r,n);return{...t,...o}}i(p7,"FromRecord$6");function b7(e,t){return t.index in e?e[t.index]:gd()}i(b7,"FromArgument$2");function y7(e,t){const r=km(t),n=ci(t),o=Rn(e,t);return r&&n?b5(o):r&&!n?mi(o):!r&&n?gi(o):o}i(y7,"FromProperty$1");function v7(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:y7(e,t[n])}),{})}i(v7,"FromProperties$8");function Ql(e,t){return t.map(r=>Rn(e,r))}i(Ql,"FromTypes$1");function Rn(e,t){return ma(t)?s7(e,t):ga(t)?a7(e,t):vn(t)?l7(e,t):Xt(t)?u7(e,t):is(t)?c7(e,t):fa(t)?d7(e,t):td(t)?f7(e,t):nd(t)?h7(e,t):od(t)?m7(e,t):_n(t)?g7(e,t):id(t)?p7(e,t):Pw(t)?b7(e,t):t}i(Rn,"FromType$1");function w7(e,t){return Rn(t,vm(e))}i(w7,"Instantiate");function $7(e){return z({[_]:"Integer",type:"integer"},e)}i($7,"Integer");function k7(e,t,r){return{[e]:xa(St(e),t,Yr(r))}}i(k7,"MappedIntrinsicPropertyKey");function x7(e,t,r){return e.reduce((o,s)=>({...o,...k7(s,t,r)}),{})}i(x7,"MappedIntrinsicPropertyKeys");function D7(e,t,r){return x7(e.keys,t,r)}i(D7,"MappedIntrinsicProperties");function A7(e,t,r){const n=D7(e,t,r);return lr(n)}i(A7,"IntrinsicFromMappedKey");function E7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}i(E7,"ApplyUncapitalize");function C7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}i(C7,"ApplyCapitalize");function S7(e){return e.toUpperCase()}i(S7,"ApplyUppercase");function M7(e){return e.toLowerCase()}i(M7,"ApplyLowercase");function F7(e,t,r){const n=_m(e.pattern);if(!Sl(n))return{...e,pattern:w5(e.pattern,t)};const a=[...fd(n)].map(d=>St(d)),l=$5(a,t),u=ur(l);return Jw([u],r)}i(F7,"FromTemplateLiteral$2");function w5(e,t){return typeof e=="string"?t==="Uncapitalize"?E7(e):t==="Capitalize"?C7(e):t==="Uppercase"?S7(e):t==="Lowercase"?M7(e):e:e.toString()}i(w5,"FromLiteralValue");function $5(e,t){return e.map(r=>xa(r,t))}i($5,"FromRest$2");function xa(e,t,r={}){return ns(e)?A7(e,t,r):os(e)?F7(e,t,r):Xt(e)?ur($5(e.anyOf,t),r):rs(e)?St(w5(e.const,t),r):z(e,r)}i(xa,"Intrinsic");function T7(e,t={}){return xa(e,"Capitalize",t)}i(T7,"Capitalize");function N7(e,t={}){return xa(e,"Lowercase",t)}i(N7,"Lowercase");function P7(e,t={}){return xa(e,"Uncapitalize",t)}i(P7,"Uncapitalize");function I7(e,t={}){return xa(e,"Uppercase",t)}i(I7,"Uppercase");function O7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=yd(e[o],t,Yr(r));return n}i(O7,"FromProperties$7");function B7(e,t,r){return O7(e.properties,t,r)}i(B7,"FromMappedResult$3");function R7(e,t,r){const n=B7(e,t,r);return lr(n)}i(R7,"OmitFromMappedResult");function L7(e,t){return e.map(r=>Qm(r,t))}i(L7,"FromIntersect$7");function j7(e,t){return e.map(r=>Qm(r,t))}i(j7,"FromUnion$7");function _7(e,t){const{[t]:r,...n}=e;return n}i(_7,"FromProperty");function U7(e,t){return t.reduce((r,n)=>_7(r,n),e)}i(U7,"FromProperties$6");function z7(e,t,r){const n=Qr(e,[Ir,"$id","required","properties"]),o=U7(r,t);return Yt(o,n)}i(z7,"FromObject$9");function V7(e){const t=e.reduce((r,n)=>Iw(n)?[...r,St(n)]:r,[]);return ur(t)}i(V7,"UnionFromPropertyKeys$1");function Qm(e,t){return vn(e)?pi(L7(e.allOf,t)):Xt(e)?ur(j7(e.anyOf,t)):_n(e)?z7(e,t,e.properties):Yt({})}i(Qm,"OmitResolve");function yd(e,t,r){const n=jr(t)?V7(t):t,o=xr(t)?hi(t):t,s=Rr(e),a=Rr(t);return rn(e)?R7(e,o,r):ns(t)?G7(e,t,r):s&&a?_t("Omit",[e,n],r):!s&&a?_t("Omit",[e,n],r):s&&!a?_t("Omit",[e,n],r):z({...Qm(e,o),...r})}i(yd,"Omit");function q7(e,t,r){return{[t]:yd(e,[t],Yr(r))}}i(q7,"FromPropertyKey$1");function W7(e,t,r){return t.reduce((n,o)=>({...n,...q7(e,o,r)}),{})}i(W7,"FromPropertyKeys$1");function K7(e,t,r){return W7(e,t.keys,r)}i(K7,"FromMappedKey$1");function G7(e,t,r){const n=K7(e,t,r);return lr(n)}i(G7,"OmitFromMappedKey");function H7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=vd(e[o],t,Yr(r));return n}i(H7,"FromProperties$5");function Z7(e,t,r){return H7(e.properties,t,r)}i(Z7,"FromMappedResult$2");function J7(e,t,r){const n=Z7(e,t,r);return lr(n)}i(J7,"PickFromMappedResult");function Y7(e,t){return e.map(r=>eg(r,t))}i(Y7,"FromIntersect$6");function X7(e,t){return e.map(r=>eg(r,t))}i(X7,"FromUnion$6");function Q7(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}i(Q7,"FromProperties$4");function eS(e,t,r){const n=Qr(e,[Ir,"$id","required","properties"]),o=Q7(r,t);return Yt(o,n)}i(eS,"FromObject$8");function tS(e){const t=e.reduce((r,n)=>Iw(n)?[...r,St(n)]:r,[]);return ur(t)}i(tS,"UnionFromPropertyKeys");function eg(e,t){return vn(e)?pi(Y7(e.allOf,t)):Xt(e)?ur(X7(e.anyOf,t)):_n(e)?eS(e,t,e.properties):Yt({})}i(eg,"PickResolve");function vd(e,t,r){const n=jr(t)?tS(t):t,o=xr(t)?hi(t):t,s=Rr(e),a=Rr(t);return rn(e)?J7(e,o,r):ns(t)?iS(e,t,r):s&&a?_t("Pick",[e,n],r):!s&&a?_t("Pick",[e,n],r):s&&!a?_t("Pick",[e,n],r):z({...eg(e,o),...r})}i(vd,"Pick");function rS(e,t,r){return{[t]:vd(e,[t],Yr(r))}}i(rS,"FromPropertyKey");function nS(e,t,r){return t.reduce((n,o)=>({...n,...rS(e,o,r)}),{})}i(nS,"FromPropertyKeys");function oS(e,t,r){return nS(e,t.keys,r)}i(oS,"FromMappedKey");function iS(e,t,r){const n=oS(e,t,r);return lr(n)}i(iS,"PickFromMappedKey");function sS(e,t){return _t("Partial",[_t(e,t)])}i(sS,"FromComputed$2");function aS(e){return _t("Partial",[wa(e)])}i(aS,"FromRef$6");function lS(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=gi(e[r]);return t}i(lS,"FromProperties$3");function uS(e,t){const r=Qr(e,[Ir,"$id","required","properties"]),n=lS(t);return Yt(n,r)}i(uS,"FromObject$7");function n1(e){return e.map(t=>k5(t))}i(n1,"FromRest$1");function k5(e){return ha(e)?sS(e.target,e.parameters):Rr(e)?aS(e.$ref):vn(e)?pi(n1(e.allOf)):Xt(e)?ur(n1(e.anyOf)):_n(e)?uS(e,e.properties):rd(e)||Kl(e)||pa(e)||rs(e)||xm(e)||ba(e)||Hl(e)||Dm(e)||Zl(e)?e:Yt({})}i(k5,"PartialResolve");function tg(e,t){return rn(e)?fS(e,t):z({...k5(e),...t})}i(tg,"Partial");function cS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=tg(e[n],Yr(t));return r}i(cS,"FromProperties$2");function dS(e,t){return cS(e.properties,t)}i(dS,"FromMappedResult$1");function fS(e,t){const r=dS(e,t);return lr(r)}i(fS,"PartialFromMappedResult");function hS(e,t){return _t("Required",[_t(e,t)])}i(hS,"FromComputed$1");function mS(e){return _t("Required",[wa(e)])}i(mS,"FromRef$5");function gS(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Qr(e[r],[Ao]);return t}i(gS,"FromProperties$1");function pS(e,t){const r=Qr(e,[Ir,"$id","required","properties"]),n=gS(t);return Yt(n,r)}i(pS,"FromObject$6");function o1(e){return e.map(t=>x5(t))}i(o1,"FromRest");function x5(e){return ha(e)?hS(e.target,e.parameters):Rr(e)?mS(e.$ref):vn(e)?pi(o1(e.allOf)):Xt(e)?ur(o1(e.anyOf)):_n(e)?pS(e,e.properties):rd(e)||Kl(e)||pa(e)||rs(e)||xm(e)||ba(e)||Hl(e)||Dm(e)||Zl(e)?e:Yt({})}i(x5,"RequiredResolve");function rg(e,t){return rn(e)?vS(e,t):z({...x5(e),...t})}i(rg,"Required");function bS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=rg(e[n],t);return r}i(bS,"FromProperties");function yS(e,t){return bS(e.properties,t)}i(yS,"FromMappedResult");function vS(e,t){const r=yS(e,t);return lr(r)}i(vS,"RequiredFromMappedResult");function wS(e,t){return t.map(r=>Rr(r)?ng(e,r.$ref):en(e,r))}i(wS,"DereferenceParameters");function ng(e,t){return t in e?Rr(e[t])?ng(e,e[t].$ref):en(e,e[t]):ht()}i(ng,"Dereference");function $S(e){return md(e[0])}i($S,"FromAwaited");function kS(e){return hd(e[0],e[1])}i(kS,"FromIndex");function xS(e){return qm(e[0])}i(xS,"FromKeyOf");function DS(e){return tg(e[0])}i(DS,"FromPartial");function AS(e){return yd(e[0],e[1])}i(AS,"FromOmit");function ES(e){return vd(e[0],e[1])}i(ES,"FromPick");function CS(e){return rg(e[0])}i(CS,"FromRequired");function SS(e,t,r){const n=wS(e,r);return t==="Awaited"?$S(n):t==="Index"?kS(n):t==="KeyOf"?xS(n):t==="Partial"?DS(n):t==="Omit"?AS(n):t==="Pick"?ES(n):t==="Required"?CS(n):ht()}i(SS,"FromComputed");function MS(e,t){return Bm(en(e,t))}i(MS,"FromArray$5");function FS(e,t){return Rm(en(e,t))}i(FS,"FromAsyncIterator$3");function TS(e,t,r){return Lm(eu(e,t),en(e,r))}i(TS,"FromConstructor$3");function NS(e,t,r){return Yl(eu(e,t),en(e,r))}i(NS,"FromFunction$3");function PS(e,t){return pi(eu(e,t))}i(PS,"FromIntersect$5");function IS(e,t){return Vm(en(e,t))}i(IS,"FromIterator$3");function OS(e,t){return Yt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:en(e,t[n])}),{}))}i(OS,"FromObject$5");function BS(e,t){const[r,n]=[en(e,v5(t)),Xm(t)],o=vm(t);return o.patternProperties[n]=r,o}i(BS,"FromRecord$5");function RS(e,t){return Rr(t)?{...ng(e,t.$ref),[Ir]:t[Ir]}:t}i(RS,"FromTransform");function LS(e,t){return va(eu(e,t))}i(LS,"FromTuple$5");function jS(e,t){return ur(eu(e,t))}i(jS,"FromUnion$5");function eu(e,t){return t.map(r=>en(e,r))}i(eu,"FromTypes");function en(e,t){return ci(t)?z(en(e,Qr(t,[Ao])),t):km(t)?z(en(e,Qr(t,[Wl])),t):Xe(t)?z(RS(e,t),t):fa(t)?z(MS(e,t.items),t):td(t)?z(FS(e,t.items),t):ha(t)?z(SS(e,t.target,t.parameters)):ma(t)?z(TS(e,t.parameters,t.returns),t):ga(t)?z(NS(e,t.parameters,t.returns),t):vn(t)?z(PS(e,t.allOf),t):nd(t)?z(IS(e,t.items),t):_n(t)?z(OS(e,t.properties),t):id(t)?z(BS(e,t)):is(t)?z(LS(e,t.items||[]),t):Xt(t)?z(jS(e,t.anyOf),t):t}i(en,"FromType");function _S(e,t){return t in e?en(e,e[t]):ht()}i(_S,"ComputeType");function US(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:_S(e,r)}),{})}i(US,"ComputeModuleProperties");class zS{static{i(this,"TModule")}constructor(t){const r=US(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:z(this.$defs[t],r)};return z({[_]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function VS(e){return new zS(e)}i(VS,"Module");function qS(e,t){return z({[_]:"Not",not:e},t)}i(qS,"Not");function WS(e,t){return ga(e)?va(e.parameters,t):ht()}i(WS,"Parameters");let KS=0;function GS(e,t={}){Ct(t.$id)&&(t.$id=`T${KS++}`);const r=vm(e({[_]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,z({[ed]:"Recursive",...r},t)}i(GS,"Recursive");function HS(e,t){const r=kt(e)?new globalThis.RegExp(e):e;return z({[_]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}i(HS,"RegExp$1");function ZS(e){return vn(e)?e.allOf:Xt(e)?e.anyOf:is(e)?e.items??[]:[]}i(ZS,"RestResolve");function JS(e){return ZS(e)}i(JS,"Rest");function YS(e,t){return ga(e)?z(e.returns,t):ht(t)}i(YS,"ReturnType");class XS{static{i(this,"TransformDecodeBuilder")}constructor(t){this.schema=t}Decode(t){return new QS(this.schema,t)}}class QS{static{i(this,"TransformEncodeBuilder")}constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const s={Encode:i(a=>r[Ir].Encode(t(a)),"Encode"),Decode:i(a=>this.decode(r[Ir].Decode(a)),"Decode")};return{...r,[Ir]:s}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Ir]:n}}Encode(t){return Xe(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function eM(e){return new XS(e)}i(eM,"Transform");function tM(e={}){return z({[_]:e[_]??"Unsafe"},e)}i(tM,"Unsafe");function rM(e){return z({[_]:"Void",type:"void"},e)}i(rM,"Void");const nM=Object.freeze(Object.defineProperty({__proto__:null,Any:El,Argument:eA,Array:Bm,AsyncIterator:Rm,Awaited:md,BigInt:Um,Boolean:Hw,Capitalize:T7,Composite:OE,Const:LE,Constructor:Lm,ConstructorParameters:jE,Date:i5,Enum:_E,Exclude:Zm,Extends:Hm,Extract:Jm,Function:Yl,Index:hd,InstanceType:HC,Instantiate:w7,Integer:$7,Intersect:pi,Iterator:Vm,KeyOf:qm,Literal:St,Lowercase:N7,Mapped:nE,Module:VS,Never:ht,Not:qS,Null:s5,Number:us,Object:Yt,Omit:yd,Optional:gi,Parameters:WS,Partial:tg,Pick:vd,Promise:Qw,Readonly:mi,ReadonlyOptional:b5,Record:y5,Recursive:GS,Ref:wa,RegExp:HS,Required:rg,Rest:JS,ReturnType:YS,String:Gi,Symbol:a5,TemplateLiteral:Jw,Transform:eM,Tuple:va,Uint8Array:u5,Uncapitalize:P7,Undefined:l5,Union:ur,Unknown:gd,Unsafe:tM,Uppercase:I7,Void:rM},Symbol.toStringTag,{value:"Module"})),Ze=nM;function D5(e){switch(e.errorType){case F.ArrayContains:return"Expected array to contain at least one matching value";case F.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case F.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case F.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case F.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case F.ArrayUniqueItems:return"Expected array elements to be unique";case F.Array:return"Expected array";case F.AsyncIterator:return"Expected AsyncIterator";case F.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case F.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case F.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case F.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case F.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case F.BigInt:return"Expected bigint";case F.Boolean:return"Expected boolean";case F.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case F.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case F.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case F.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case F.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case F.Date:return"Expected Date";case F.Function:return"Expected function";case F.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case F.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case F.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case F.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case F.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case F.Integer:return"Expected integer";case F.IntersectUnevaluatedProperties:return"Unexpected property";case F.Intersect:return"Expected all values to match";case F.Iterator:return"Expected Iterator";case F.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case F.Never:return"Never";case F.Not:return"Value should not match";case F.Null:return"Expected null";case F.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case F.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case F.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case F.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case F.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case F.Number:return"Expected number";case F.Object:return"Expected object";case F.ObjectAdditionalProperties:return"Unexpected property";case F.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case F.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case F.ObjectRequiredProperty:return"Expected required property";case F.Promise:return"Expected Promise";case F.RegExp:return"Expected string to match regular expression";case F.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case F.StringFormat:return`Expected string to match '${e.schema.format}' format`;case F.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case F.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case F.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case F.String:return"Expected string";case F.Symbol:return"Expected symbol";case F.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case F.Tuple:return"Expected tuple";case F.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case F.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case F.Uint8Array:return"Expected Uint8Array";case F.Undefined:return"Expected undefined";case F.Union:return"Expected union value";case F.Void:return"Expected void";case F.Kind:return`Expected kind '${e.schema[_]}'`;default:return"Unknown error type"}}i(D5,"DefaultErrorFunction");let A5=D5;function oM(e){A5=e}i(oM,"SetErrorFunction");function iM(){return A5}i(iM,"GetErrorFunction");class sM extends ar{static{i(this,"TypeDereferenceError")}constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function aM(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new sM(e);return $n(r,t)}i(aM,"Resolve");function wd(e,t){return!Hr(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}i(wd,"Pushref");function $n(e,t){return e[_]==="This"||e[_]==="Ref"?aM(e,t):e}i($n,"Deref");class lM extends ar{static{i(this,"ValueHashError")}constructor(t){super("Unable to hash value"),this.value=t}}var tn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(tn||(tn={}));let Ss=BigInt("14695981039346656037");const[uM,cM]=[BigInt("1099511628211"),BigInt("18446744073709551616")],dM=Array.from({length:256}).map((e,t)=>BigInt(t)),E5=new Float64Array(1),C5=new DataView(E5.buffer),S5=new Uint8Array(E5.buffer);function*fM(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}i(fM,"NumberToBytes");function hM(e){pr(tn.Array);for(const t of e)ta(t)}i(hM,"ArrayType");function mM(e){pr(tn.Boolean),pr(e?1:0)}i(mM,"BooleanType");function gM(e){pr(tn.BigInt),C5.setBigInt64(0,e);for(const t of S5)pr(t)}i(gM,"BigIntType");function pM(e){pr(tn.Date),ta(e.getTime())}i(pM,"DateType");function bM(e){pr(tn.Null)}i(bM,"NullType");function yM(e){pr(tn.Number),C5.setFloat64(0,e);for(const t of S5)pr(t)}i(yM,"NumberType");function vM(e){pr(tn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())ta(t),ta(e[t])}i(vM,"ObjectType");function wM(e){pr(tn.String);for(let t=0;t<e.length;t++)for(const r of fM(e.charCodeAt(t)))pr(r)}i(wM,"StringType");function $M(e){pr(tn.Symbol),ta(e.description)}i($M,"SymbolType");function kM(e){pr(tn.Uint8Array);for(let t=0;t<e.length;t++)pr(e[t])}i(kM,"Uint8ArrayType");function xM(e){return pr(tn.Undefined)}i(xM,"UndefinedType");function ta(e){if(Xr(e))return hM(e);if(Xc(e))return mM(e);if(fo(e))return gM(e);if(wm(e))return pM(e);if(Yc(e))return bM();if(ye(e))return yM(e);if(eo(e))return vM(e);if(Hr(e))return wM(e);if(Qc(e))return $M(e);if($m(e))return kM(e);if(ui(e))return xM();throw new lM(e)}i(ta,"Visit$5");function pr(e){Ss=Ss^dM[e],Ss=Ss*uM%cM}i(pr,"FNV1A64");function og(e){return Ss=BigInt("14695981039346656037"),ta(e),Ss}i(og,"Hash");class DM extends ar{static{i(this,"ValueCheckUnknownTypeError")}constructor(t){super("Unknown type"),this.schema=t}}function AM(e){return e[_]==="Any"||e[_]==="Unknown"}i(AM,"IsAnyOrUnknown");function De(e){return e!==void 0}i(De,"IsDefined$1");function EM(e,t,r){return!0}i(EM,"FromAny$1");function CM(e,t,r){return!0}i(CM,"FromArgument$1");function SM(e,t,r){if(!Xr(r)||De(e.minItems)&&!(r.length>=e.minItems)||De(e.maxItems)&&!(r.length<=e.maxItems))return!1;for(const s of r)if(!Ht(e.items,t,s))return!1;if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of r){const l=og(a);if(s.has(l))return!1;s.add(l)}return!0})())return!1;if(!(De(e.contains)||ye(e.minContains)||ye(e.maxContains)))return!0;const n=De(e.contains)?e.contains:ht(),o=r.reduce((s,a)=>Ht(n,t,a)?s+1:s,0);return!(o===0||ye(e.minContains)&&o<e.minContains||ye(e.maxContains)&&o>e.maxContains)}i(SM,"FromArray$4");function MM(e,t,r){return Aw(r)}i(MM,"FromAsyncIterator$2");function FM(e,t,r){return!(!fo(r)||De(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||De(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||De(e.maximum)&&!(r<=e.maximum)||De(e.minimum)&&!(r>=e.minimum)||De(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}i(FM,"FromBigInt$1");function TM(e,t,r){return Xc(r)}i(TM,"FromBoolean$1");function NM(e,t,r){return Ht(e.returns,t,r.prototype)}i(NM,"FromConstructor$2");function PM(e,t,r){return!(!wm(r)||De(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||De(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||De(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||De(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||De(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}i(PM,"FromDate$1");function IM(e,t,r){return Fw(r)}i(IM,"FromFunction$2");function OM(e,t,r){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return Ht(o,[...t,...n],r)}i(OM,"FromImport$4");function BM(e,t,r){return!(!Mw(r)||De(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||De(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||De(e.maximum)&&!(r<=e.maximum)||De(e.minimum)&&!(r>=e.minimum)||De(e.multipleOf)&&r%e.multipleOf!==0)}i(BM,"FromInteger$1");function RM(e,t,r){const n=e.allOf.every(o=>Ht(o,t,r));if(e.unevaluatedProperties===!1){const o=new RegExp(ea(e)),s=Object.getOwnPropertyNames(r).every(a=>o.test(a));return n&&s}else if(xr(e.unevaluatedProperties)){const o=new RegExp(ea(e)),s=Object.getOwnPropertyNames(r).every(a=>o.test(a)||Ht(e.unevaluatedProperties,t,r[a]));return n&&s}else return n}i(RM,"FromIntersect$4");function LM(e,t,r){return Ew(r)}i(LM,"FromIterator$2");function jM(e,t,r){return r===e.const}i(jM,"FromLiteral$1");function _M(e,t,r){return!1}i(_M,"FromNever$1");function UM(e,t,r){return!Ht(e.not,t,r)}i(UM,"FromNot$4");function zM(e,t,r){return Yc(r)}i(zM,"FromNull$1");function VM(e,t,r){return!(!$t.IsNumberLike(r)||De(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||De(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||De(e.minimum)&&!(r>=e.minimum)||De(e.maximum)&&!(r<=e.maximum)||De(e.multipleOf)&&r%e.multipleOf!==0)}i(VM,"FromNumber$1");function qM(e,t,r){if(!$t.IsObjectLike(r)||De(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||De(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const s=e.properties[o];if(e.required&&e.required.includes(o)){if(!Ht(s,t,r[o])||(ka(s)||AM(s))&&!(o in r))return!1}else if($t.IsExactOptionalProperty(r,o)&&!Ht(s,t,r[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(s=>n.includes(s))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(s=>n.includes(s)||Ht(e.additionalProperties,t,r[s])):!0}i(qM,"FromObject$4");function WM(e,t,r){return Cw(r)}i(WM,"FromPromise$2");function KM(e,t,r){if(!$t.IsRecordLike(r)||De(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||De(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],s=new RegExp(n),a=Object.entries(r).every(([d,f])=>s.test(d)?Ht(o,t,f):!0),l=typeof e.additionalProperties=="object"?Object.entries(r).every(([d,f])=>s.test(d)?!0:Ht(e.additionalProperties,t,f)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(d=>s.test(d)):!0;return a&&l&&u}i(KM,"FromRecord$4");function GM(e,t,r){return Ht($n(e,t),t,r)}i(GM,"FromRef$4");function HM(e,t,r){const n=new RegExp(e.source,e.flags);return De(e.minLength)&&!(r.length>=e.minLength)||De(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}i(HM,"FromRegExp$1");function ZM(e,t,r){return!Hr(r)||De(e.minLength)&&!(r.length>=e.minLength)||De(e.maxLength)&&!(r.length<=e.maxLength)||De(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:De(e.format)?Tm(e.format)?Nm(e.format)(r):!1:!0}i(ZM,"FromString$1");function JM(e,t,r){return Qc(r)}i(JM,"FromSymbol$1");function YM(e,t,r){return Hr(r)&&new RegExp(e.pattern).test(r)}i(YM,"FromTemplateLiteral$1");function XM(e,t,r){return Ht($n(e,t),t,r)}i(XM,"FromThis$4");function QM(e,t,r){if(!Xr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Ht(e.items[n],t,r[n]))return!1;return!0}i(QM,"FromTuple$4");function eF(e,t,r){return ui(r)}i(eF,"FromUndefined$1");function tF(e,t,r){return e.anyOf.some(n=>Ht(n,t,r))}i(tF,"FromUnion$4");function rF(e,t,r){return!(!$m(r)||De(e.maxByteLength)&&!(r.length<=e.maxByteLength)||De(e.minByteLength)&&!(r.length>=e.minByteLength))}i(rF,"FromUint8Array$1");function nF(e,t,r){return!0}i(nF,"FromUnknown$1");function oF(e,t,r){return $t.IsVoidLike(r)}i(oF,"FromVoid$1");function iF(e,t,r){return ni(e[_])?Om(e[_])(e,r):!1}i(iF,"FromKind$1");function Ht(e,t,r){const n=De(e.$id)?wd(e,t):t,o=e;switch(o[_]){case"Any":return EM();case"Argument":return CM();case"Array":return SM(o,n,r);case"AsyncIterator":return MM(o,n,r);case"BigInt":return FM(o,n,r);case"Boolean":return TM(o,n,r);case"Constructor":return NM(o,n,r);case"Date":return PM(o,n,r);case"Function":return IM(o,n,r);case"Import":return OM(o,n,r);case"Integer":return BM(o,n,r);case"Intersect":return RM(o,n,r);case"Iterator":return LM(o,n,r);case"Literal":return jM(o,n,r);case"Never":return _M();case"Not":return UM(o,n,r);case"Null":return zM(o,n,r);case"Number":return VM(o,n,r);case"Object":return qM(o,n,r);case"Promise":return WM(o,n,r);case"Record":return KM(o,n,r);case"Ref":return GM(o,n,r);case"RegExp":return HM(o,n,r);case"String":return ZM(o,n,r);case"Symbol":return JM(o,n,r);case"TemplateLiteral":return YM(o,n,r);case"This":return XM(o,n,r);case"Tuple":return QM(o,n,r);case"Undefined":return eF(o,n,r);case"Union":return tF(o,n,r);case"Uint8Array":return rF(o,n,r);case"Unknown":return nF();case"Void":return oF(o,n,r);default:if(!ni(o[_]))throw new DM(o);return iF(o,n,r)}}i(Ht,"Visit$4");function wc(...e){return e.length===3?Ht(e[0],e[1],e[2]):Ht(e[0],[],e[1])}i(wc,"Check");var F;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(F||(F={}));class sF extends ar{static{i(this,"ValueErrorsUnknownTypeError")}constructor(t){super("Unknown type"),this.schema=t}}function ao(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}i(ao,"EscapeKey");function ke(e){return e!==void 0}i(ke,"IsDefined");class M5{static{i(this,"ValueErrorIterator")}constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function q(e,t,r,n,o=[]){return{type:e,schema:t,path:r,value:n,message:iM()({errorType:e,path:r,schema:t,value:n,errors:o}),errors:o}}i(q,"Create");function*aF(e,t,r,n){}i(aF,"FromAny");function*lF(e,t,r,n){}i(lF,"FromArgument");function*uF(e,t,r,n){if(!Xr(n))return yield q(F.Array,e,r,n);ke(e.minItems)&&!(n.length>=e.minItems)&&(yield q(F.ArrayMinItems,e,r,n)),ke(e.maxItems)&&!(n.length<=e.maxItems)&&(yield q(F.ArrayMaxItems,e,r,n));for(let a=0;a<n.length;a++)yield*Zt(e.items,t,`${r}/${a}`,n[a]);if(e.uniqueItems===!0&&!(function(){const a=new Set;for(const l of n){const u=og(l);if(a.has(u))return!1;a.add(u)}return!0})()&&(yield q(F.ArrayUniqueItems,e,r,n)),!(ke(e.contains)||ke(e.minContains)||ke(e.maxContains)))return;const o=ke(e.contains)?e.contains:ht(),s=n.reduce((a,l,u)=>Zt(o,t,`${r}${u}`,l).next().done===!0?a+1:a,0);s===0&&(yield q(F.ArrayContains,e,r,n)),ye(e.minContains)&&s<e.minContains&&(yield q(F.ArrayMinContains,e,r,n)),ye(e.maxContains)&&s>e.maxContains&&(yield q(F.ArrayMaxContains,e,r,n))}i(uF,"FromArray$3");function*cF(e,t,r,n){Aw(n)||(yield q(F.AsyncIterator,e,r,n))}i(cF,"FromAsyncIterator$1");function*dF(e,t,r,n){if(!fo(n))return yield q(F.BigInt,e,r,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield q(F.BigIntExclusiveMaximum,e,r,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield q(F.BigIntExclusiveMinimum,e,r,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield q(F.BigIntMaximum,e,r,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield q(F.BigIntMinimum,e,r,n)),ke(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield q(F.BigIntMultipleOf,e,r,n))}i(dF,"FromBigInt");function*fF(e,t,r,n){Xc(n)||(yield q(F.Boolean,e,r,n))}i(fF,"FromBoolean");function*hF(e,t,r,n){yield*Zt(e.returns,t,r,n.prototype)}i(hF,"FromConstructor$1");function*mF(e,t,r,n){if(!wm(n))return yield q(F.Date,e,r,n);ke(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield q(F.DateExclusiveMaximumTimestamp,e,r,n)),ke(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield q(F.DateExclusiveMinimumTimestamp,e,r,n)),ke(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield q(F.DateMaximumTimestamp,e,r,n)),ke(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield q(F.DateMinimumTimestamp,e,r,n)),ke(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield q(F.DateMultipleOfTimestamp,e,r,n))}i(mF,"FromDate");function*gF(e,t,r,n){Fw(n)||(yield q(F.Function,e,r,n))}i(gF,"FromFunction$1");function*pF(e,t,r,n){const o=globalThis.Object.values(e.$defs),s=e.$defs[e.$ref];yield*Zt(s,[...t,...o],r,n)}i(pF,"FromImport$3");function*bF(e,t,r,n){if(!Mw(n))return yield q(F.Integer,e,r,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield q(F.IntegerExclusiveMaximum,e,r,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield q(F.IntegerExclusiveMinimum,e,r,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield q(F.IntegerMaximum,e,r,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield q(F.IntegerMinimum,e,r,n)),ke(e.multipleOf)&&n%e.multipleOf!==0&&(yield q(F.IntegerMultipleOf,e,r,n))}i(bF,"FromInteger");function*yF(e,t,r,n){let o=!1;for(const s of e.allOf)for(const a of Zt(s,t,r,n))o=!0,yield a;if(o)return yield q(F.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const s=new RegExp(ea(e));for(const a of Object.getOwnPropertyNames(n))s.test(a)||(yield q(F.IntersectUnevaluatedProperties,e,`${r}/${a}`,n))}if(typeof e.unevaluatedProperties=="object"){const s=new RegExp(ea(e));for(const a of Object.getOwnPropertyNames(n))if(!s.test(a)){const l=Zt(e.unevaluatedProperties,t,`${r}/${a}`,n[a]).next();l.done||(yield l.value)}}}i(yF,"FromIntersect$3");function*vF(e,t,r,n){Ew(n)||(yield q(F.Iterator,e,r,n))}i(vF,"FromIterator$1");function*wF(e,t,r,n){n!==e.const&&(yield q(F.Literal,e,r,n))}i(wF,"FromLiteral");function*$F(e,t,r,n){yield q(F.Never,e,r,n)}i($F,"FromNever");function*kF(e,t,r,n){Zt(e.not,t,r,n).next().done===!0&&(yield q(F.Not,e,r,n))}i(kF,"FromNot$3");function*xF(e,t,r,n){Yc(n)||(yield q(F.Null,e,r,n))}i(xF,"FromNull");function*DF(e,t,r,n){if(!$t.IsNumberLike(n))return yield q(F.Number,e,r,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield q(F.NumberExclusiveMaximum,e,r,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield q(F.NumberExclusiveMinimum,e,r,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield q(F.NumberMaximum,e,r,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield q(F.NumberMinimum,e,r,n)),ke(e.multipleOf)&&n%e.multipleOf!==0&&(yield q(F.NumberMultipleOf,e,r,n))}i(DF,"FromNumber");function*AF(e,t,r,n){if(!$t.IsObjectLike(n))return yield q(F.Object,e,r,n);ke(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield q(F.ObjectMinProperties,e,r,n)),ke(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield q(F.ObjectMaxProperties,e,r,n));const o=Array.isArray(e.required)?e.required:[],s=Object.getOwnPropertyNames(e.properties),a=Object.getOwnPropertyNames(n);for(const l of o)a.includes(l)||(yield q(F.ObjectRequiredProperty,e.properties[l],`${r}/${ao(l)}`,void 0));if(e.additionalProperties===!1)for(const l of a)s.includes(l)||(yield q(F.ObjectAdditionalProperties,e,`${r}/${ao(l)}`,n[l]));if(typeof e.additionalProperties=="object")for(const l of a)s.includes(l)||(yield*Zt(e.additionalProperties,t,`${r}/${ao(l)}`,n[l]));for(const l of s){const u=e.properties[l];e.required&&e.required.includes(l)?(yield*Zt(u,t,`${r}/${ao(l)}`,n[l]),ka(e)&&!(l in n)&&(yield q(F.ObjectRequiredProperty,u,`${r}/${ao(l)}`,void 0))):$t.IsExactOptionalProperty(n,l)&&(yield*Zt(u,t,`${r}/${ao(l)}`,n[l]))}}i(AF,"FromObject$3");function*EF(e,t,r,n){Cw(n)||(yield q(F.Promise,e,r,n))}i(EF,"FromPromise$1");function*CF(e,t,r,n){if(!$t.IsRecordLike(n))return yield q(F.Object,e,r,n);ke(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield q(F.ObjectMinProperties,e,r,n)),ke(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield q(F.ObjectMaxProperties,e,r,n));const[o,s]=Object.entries(e.patternProperties)[0],a=new RegExp(o);for(const[l,u]of Object.entries(n))a.test(l)&&(yield*Zt(s,t,`${r}/${ao(l)}`,u));if(typeof e.additionalProperties=="object")for(const[l,u]of Object.entries(n))a.test(l)||(yield*Zt(e.additionalProperties,t,`${r}/${ao(l)}`,u));if(e.additionalProperties===!1){for(const[l,u]of Object.entries(n))if(!a.test(l))return yield q(F.ObjectAdditionalProperties,e,`${r}/${ao(l)}`,u)}}i(CF,"FromRecord$3");function*SF(e,t,r,n){yield*Zt($n(e,t),t,r,n)}i(SF,"FromRef$3");function*MF(e,t,r,n){if(!Hr(n))return yield q(F.String,e,r,n);if(ke(e.minLength)&&!(n.length>=e.minLength)&&(yield q(F.StringMinLength,e,r,n)),ke(e.maxLength)&&!(n.length<=e.maxLength)&&(yield q(F.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield q(F.RegExp,e,r,n)}i(MF,"FromRegExp");function*FF(e,t,r,n){if(!Hr(n))return yield q(F.String,e,r,n);ke(e.minLength)&&!(n.length>=e.minLength)&&(yield q(F.StringMinLength,e,r,n)),ke(e.maxLength)&&!(n.length<=e.maxLength)&&(yield q(F.StringMaxLength,e,r,n)),Hr(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield q(F.StringPattern,e,r,n))),Hr(e.format)&&(Tm(e.format)?Nm(e.format)(n)||(yield q(F.StringFormat,e,r,n)):yield q(F.StringFormatUnknown,e,r,n))}i(FF,"FromString");function*TF(e,t,r,n){Qc(n)||(yield q(F.Symbol,e,r,n))}i(TF,"FromSymbol");function*NF(e,t,r,n){if(!Hr(n))return yield q(F.String,e,r,n);new RegExp(e.pattern).test(n)||(yield q(F.StringPattern,e,r,n))}i(NF,"FromTemplateLiteral");function*PF(e,t,r,n){yield*Zt($n(e,t),t,r,n)}i(PF,"FromThis$3");function*IF(e,t,r,n){if(!Xr(n))return yield q(F.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield q(F.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield q(F.TupleLength,e,r,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*Zt(e.items[o],t,`${r}/${o}`,n[o])}i(IF,"FromTuple$3");function*OF(e,t,r,n){ui(n)||(yield q(F.Undefined,e,r,n))}i(OF,"FromUndefined");function*BF(e,t,r,n){if(wc(e,t,n))return;const o=e.anyOf.map(s=>new M5(Zt(s,t,r,n)));yield q(F.Union,e,r,n,o)}i(BF,"FromUnion$3");function*RF(e,t,r,n){if(!$m(n))return yield q(F.Uint8Array,e,r,n);ke(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield q(F.Uint8ArrayMaxByteLength,e,r,n)),ke(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield q(F.Uint8ArrayMinByteLength,e,r,n))}i(RF,"FromUint8Array");function*LF(e,t,r,n){}i(LF,"FromUnknown");function*jF(e,t,r,n){$t.IsVoidLike(n)||(yield q(F.Void,e,r,n))}i(jF,"FromVoid");function*_F(e,t,r,n){Om(e[_])(e,n)||(yield q(F.Kind,e,r,n))}i(_F,"FromKind");function*Zt(e,t,r,n){const o=ke(e.$id)?[...t,e]:t,s=e;switch(s[_]){case"Any":return yield*aF();case"Argument":return yield*lF();case"Array":return yield*uF(s,o,r,n);case"AsyncIterator":return yield*cF(s,o,r,n);case"BigInt":return yield*dF(s,o,r,n);case"Boolean":return yield*fF(s,o,r,n);case"Constructor":return yield*hF(s,o,r,n);case"Date":return yield*mF(s,o,r,n);case"Function":return yield*gF(s,o,r,n);case"Import":return yield*pF(s,o,r,n);case"Integer":return yield*bF(s,o,r,n);case"Intersect":return yield*yF(s,o,r,n);case"Iterator":return yield*vF(s,o,r,n);case"Literal":return yield*wF(s,o,r,n);case"Never":return yield*$F(s,o,r,n);case"Not":return yield*kF(s,o,r,n);case"Null":return yield*xF(s,o,r,n);case"Number":return yield*DF(s,o,r,n);case"Object":return yield*AF(s,o,r,n);case"Promise":return yield*EF(s,o,r,n);case"Record":return yield*CF(s,o,r,n);case"Ref":return yield*SF(s,o,r,n);case"RegExp":return yield*MF(s,o,r,n);case"String":return yield*FF(s,o,r,n);case"Symbol":return yield*TF(s,o,r,n);case"TemplateLiteral":return yield*NF(s,o,r,n);case"This":return yield*PF(s,o,r,n);case"Tuple":return yield*IF(s,o,r,n);case"Undefined":return yield*OF(s,o,r,n);case"Union":return yield*BF(s,o,r,n);case"Uint8Array":return yield*RF(s,o,r,n);case"Unknown":return yield*LF();case"Void":return yield*jF(s,o,r,n);default:if(!ni(s[_]))throw new sF(e);return yield*_F(s,o,r,n)}}i(Zt,"Visit$3");function UF(...e){const t=e.length===3?Zt(e[0],e[1],"",e[2]):Zt(e[0],[],"",e[1]);return new M5(t)}i(UF,"Errors");class zF extends ar{static{i(this,"TransformDecodeCheckError")}constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class VF extends ar{static{i(this,"TransformDecodeError")}constructor(t,r,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=o}}function it(e,t,r){try{return Xe(e)?e[Ir].Decode(r):r}catch(n){throw new VF(e,t,r,n)}}i(it,"Default$1");function qF(e,t,r,n){return Xr(n)?it(e,r,n.map((o,s)=>Un(e.items,t,`${r}/${s}`,o))):it(e,r,n)}i(qF,"FromArray$2");function WF(e,t,r,n){if(!eo(n)||Tw(n))return it(e,r,n);const o=o5(e),s=o.map(f=>f[0]),a={...n};for(const[f,h]of o)f in a&&(a[f]=Un(h,t,`${r}/${f}`,a[f]));if(!Xe(e.unevaluatedProperties))return it(e,r,a);const l=Object.getOwnPropertyNames(a),u=e.unevaluatedProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=it(u,`${r}/${f}`,d[f]));return it(e,r,d)}i(WF,"FromIntersect$2");function KF(e,t,r,n){const o=globalThis.Object.values(e.$defs),s=e.$defs[e.$ref],a=Un(s,[...t,...o],r,n);return it(e,r,a)}i(KF,"FromImport$2");function GF(e,t,r,n){return it(e,r,Un(e.not,t,r,n))}i(GF,"FromNot$2");function HF(e,t,r,n){if(!eo(n))return it(e,r,n);const o=cs(e),s={...n};for(const d of o)Sw(s,d)&&(ui(s[d])&&(!Zl(e.properties[d])||$t.IsExactOptionalProperty(s,d))||(s[d]=Un(e.properties[d],t,`${r}/${d}`,s[d])));if(!xr(e.additionalProperties))return it(e,r,s);const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(const d of a)o.includes(d)||(u[d]=it(l,`${r}/${d}`,u[d]));return it(e,r,u)}i(HF,"FromObject$2");function ZF(e,t,r,n){if(!eo(n))return it(e,r,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...n};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=Un(e.patternProperties[o],t,`${r}/${f}`,a[f]));if(!xr(e.additionalProperties))return it(e,r,a);const l=Object.getOwnPropertyNames(a),u=e.additionalProperties,d={...a};for(const f of l)s.test(f)||(d[f]=it(u,`${r}/${f}`,d[f]));return it(e,r,d)}i(ZF,"FromRecord$2");function JF(e,t,r,n){const o=$n(e,t);return it(e,r,Un(o,t,r,n))}i(JF,"FromRef$2");function YF(e,t,r,n){const o=$n(e,t);return it(e,r,Un(o,t,r,n))}i(YF,"FromThis$2");function XF(e,t,r,n){return Xr(n)&&Xr(e.items)?it(e,r,e.items.map((o,s)=>Un(o,t,`${r}/${s}`,n[s]))):it(e,r,n)}i(XF,"FromTuple$2");function QF(e,t,r,n){for(const o of e.anyOf){if(!wc(o,t,n))continue;const s=Un(o,t,r,n);return it(e,r,s)}return it(e,r,n)}i(QF,"FromUnion$2");function Un(e,t,r,n){const o=wd(e,t),s=e;switch(e[_]){case"Array":return qF(s,o,r,n);case"Import":return KF(s,o,r,n);case"Intersect":return WF(s,o,r,n);case"Not":return GF(s,o,r,n);case"Object":return HF(s,o,r,n);case"Record":return ZF(s,o,r,n);case"Ref":return JF(s,o,r,n);case"Symbol":return it(s,r,n);case"This":return YF(s,o,r,n);case"Tuple":return XF(s,o,r,n);case"Union":return QF(s,o,r,n);default:return it(s,r,n)}}i(Un,"Visit$2");function eT(e,t,r){return Un(e,t,"",r)}i(eT,"TransformDecode");class tT extends ar{static{i(this,"TransformEncodeCheckError")}constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class rT extends ar{static{i(this,"TransformEncodeError")}constructor(t,r,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=o}}function or(e,t,r){try{return Xe(e)?e[Ir].Encode(r):r}catch(n){throw new rT(e,t,r,n)}}i(or,"Default");function nT(e,t,r,n){const o=or(e,r,n);return Xr(o)?o.map((s,a)=>Ln(e.items,t,`${r}/${a}`,s)):o}i(nT,"FromArray$1");function oT(e,t,r,n){const o=globalThis.Object.values(e.$defs),s=e.$defs[e.$ref],a=or(e,r,n);return Ln(s,[...t,...o],r,a)}i(oT,"FromImport$1");function iT(e,t,r,n){const o=or(e,r,n);if(!eo(n)||Tw(n))return o;const s=o5(e),a=s.map(h=>h[0]),l={...o};for(const[h,m]of s)h in l&&(l[h]=Ln(m,t,`${r}/${h}`,l[h]));if(!Xe(e.unevaluatedProperties))return l;const u=Object.getOwnPropertyNames(l),d=e.unevaluatedProperties,f={...l};for(const h of u)a.includes(h)||(f[h]=or(d,`${r}/${h}`,f[h]));return f}i(iT,"FromIntersect$1");function sT(e,t,r,n){return or(e.not,r,or(e,r,n))}i(sT,"FromNot$1");function aT(e,t,r,n){const o=or(e,r,n);if(!eo(o))return o;const s=cs(e),a={...o};for(const f of s)Sw(a,f)&&(ui(a[f])&&(!Zl(e.properties[f])||$t.IsExactOptionalProperty(a,f))||(a[f]=Ln(e.properties[f],t,`${r}/${f}`,a[f])));if(!xr(e.additionalProperties))return a;const l=Object.getOwnPropertyNames(a),u=e.additionalProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=or(u,`${r}/${f}`,d[f]));return d}i(aT,"FromObject$1");function lT(e,t,r,n){const o=or(e,r,n);if(!eo(n))return o;const s=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(s),l={...o};for(const h of Object.getOwnPropertyNames(n))a.test(h)&&(l[h]=Ln(e.patternProperties[s],t,`${r}/${h}`,l[h]));if(!xr(e.additionalProperties))return l;const u=Object.getOwnPropertyNames(l),d=e.additionalProperties,f={...l};for(const h of u)a.test(h)||(f[h]=or(d,`${r}/${h}`,f[h]));return f}i(lT,"FromRecord$1");function uT(e,t,r,n){const o=$n(e,t),s=Ln(o,t,r,n);return or(e,r,s)}i(uT,"FromRef$1");function cT(e,t,r,n){const o=$n(e,t),s=Ln(o,t,r,n);return or(e,r,s)}i(cT,"FromThis$1");function dT(e,t,r,n){const o=or(e,r,n);return Xr(e.items)?e.items.map((s,a)=>Ln(s,t,`${r}/${a}`,o[a])):[]}i(dT,"FromTuple$1");function fT(e,t,r,n){for(const o of e.anyOf){if(!wc(o,t,n))continue;const s=Ln(o,t,r,n);return or(e,r,s)}for(const o of e.anyOf){const s=Ln(o,t,r,n);if(wc(e,t,s))return or(e,r,s)}return or(e,r,n)}i(fT,"FromUnion$1");function Ln(e,t,r,n){const o=wd(e,t),s=e;switch(e[_]){case"Array":return nT(s,o,r,n);case"Import":return oT(s,o,r,n);case"Intersect":return iT(s,o,r,n);case"Not":return sT(s,o,r,n);case"Object":return aT(s,o,r,n);case"Record":return lT(s,o,r,n);case"Ref":return uT(s,o,r,n);case"This":return cT(s,o,r,n);case"Tuple":return dT(s,o,r,n);case"Union":return fT(s,o,r,n);default:return or(s,r,n)}}i(Ln,"Visit$1");function hT(e,t,r){return Ln(e,t,"",r)}i(hT,"TransformEncode");function mT(e,t){return Xe(e)||Ut(e.items,t)}i(mT,"FromArray");function gT(e,t){return Xe(e)||Ut(e.items,t)}i(gT,"FromAsyncIterator");function pT(e,t){return Xe(e)||Ut(e.returns,t)||e.parameters.some(r=>Ut(r,t))}i(pT,"FromConstructor");function bT(e,t){return Xe(e)||Ut(e.returns,t)||e.parameters.some(r=>Ut(r,t))}i(bT,"FromFunction");function yT(e,t){return Xe(e)||Xe(e.unevaluatedProperties)||e.allOf.some(r=>Ut(r,t))}i(yT,"FromIntersect");function vT(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,s)=>[...o,e.$defs[s]],[]),n=e.$defs[e.$ref];return Xe(e)||Ut(n,[...r,...t])}i(vT,"FromImport");function wT(e,t){return Xe(e)||Ut(e.items,t)}i(wT,"FromIterator");function $T(e,t){return Xe(e)||Ut(e.not,t)}i($T,"FromNot");function kT(e,t){return Xe(e)||Object.values(e.properties).some(r=>Ut(r,t))||xr(e.additionalProperties)&&Ut(e.additionalProperties,t)}i(kT,"FromObject");function xT(e,t){return Xe(e)||Ut(e.item,t)}i(xT,"FromPromise");function DT(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Xe(e)||Ut(n,t)||xr(e.additionalProperties)&&Xe(e.additionalProperties)}i(DT,"FromRecord");function AT(e,t){return Xe(e)?!0:Ut($n(e,t),t)}i(AT,"FromRef");function ET(e,t){return Xe(e)?!0:Ut($n(e,t),t)}i(ET,"FromThis");function CT(e,t){return Xe(e)||!ui(e.items)&&e.items.some(r=>Ut(r,t))}i(CT,"FromTuple");function ST(e,t){return Xe(e)||e.anyOf.some(r=>Ut(r,t))}i(ST,"FromUnion");function Ut(e,t){const r=wd(e,t),n=e;if(e.$id&&Q0.has(e.$id))return!1;switch(e.$id&&Q0.add(e.$id),e[_]){case"Array":return mT(n,r);case"AsyncIterator":return gT(n,r);case"Constructor":return pT(n,r);case"Function":return bT(n,r);case"Import":return vT(n,r);case"Intersect":return yT(n,r);case"Iterator":return wT(n,r);case"Not":return $T(n,r);case"Object":return kT(n,r);case"Promise":return xT(n,r);case"Record":return DT(n,r);case"Ref":return AT(n,r);case"This":return ET(n,r);case"Tuple":return CT(n,r);case"Union":return ST(n,r);default:return Xe(e)}}i(Ut,"Visit");const Q0=new Set;function MT(e,t){return Q0.clear(),Ut(e,t)}i(MT,"HasTransform");class FT{static{i(this,"TypeCheck")}constructor(t,r,n,o){this.schema=t,this.references=r,this.checkFunc=n,this.code=o,this.hasTransform=MT(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return UF(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new zF(this.schema,t,this.Errors(t).First());return this.hasTransform?eT(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?hT(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new tT(this.schema,t,this.Errors(t).First());return r}}var ho;(function(e){function t(s){return s===36}i(t,"DollarSign"),e.DollarSign=t;function r(s){return s===95}i(r,"IsUnderscore"),e.IsUnderscore=r;function n(s){return s>=65&&s<=90||s>=97&&s<=122}i(n,"IsAlpha"),e.IsAlpha=n;function o(s){return s>=48&&s<=57}i(o,"IsNumeric"),e.IsNumeric=o})(ho||(ho={}));var $c;(function(e){function t(s){return s.length===0?!1:ho.IsNumeric(s.charCodeAt(0))}i(t,"IsFirstCharacterNumeric");function r(s){if(t(s))return!1;for(let a=0;a<s.length;a++){const l=s.charCodeAt(a);if(!(ho.IsAlpha(l)||ho.IsNumeric(l)||ho.DollarSign(l)||ho.IsUnderscore(l)))return!1}return!0}i(r,"IsAccessor");function n(s){return s.replace(/'/g,"\\'")}i(n,"EscapeHyphen");function o(s,a){return r(a)?`${s}.${a}`:`${s}['${n(a)}']`}i(o,"Encode"),e.Encode=o})($c||($c={}));var eh;(function(e){function t(r){const n=[];for(let o=0;o<r.length;o++){const s=r.charCodeAt(o);ho.IsNumeric(s)||ho.IsAlpha(s)?n.push(r.charAt(o)):n.push(`_${s}_`)}return n.join("").replace(/__/g,"_")}i(t,"Encode"),e.Encode=t})(eh||(eh={}));var th;(function(e){function t(r){return r.replace(/'/g,"\\'")}i(t,"Escape"),e.Escape=t})(th||(th={}));class TT extends ar{static{i(this,"TypeCompilerUnknownTypeError")}constructor(t){super("Unknown type"),this.schema=t}}class i1 extends ar{static{i(this,"TypeCompilerTypeGuardError")}constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Si;(function(e){function t(a,l,u){return $t.ExactOptionalPropertyTypes?`('${l}' in ${a} ? ${u} : true)`:`(${$c.Encode(a,l)} !== undefined ? ${u} : true)`}i(t,"IsExactOptionalProperty"),e.IsExactOptionalProperty=t;function r(a){return $t.AllowArrayObject?`(typeof ${a} === 'object' && ${a} !== null)`:`(typeof ${a} === 'object' && ${a} !== null && !Array.isArray(${a}))`}i(r,"IsObjectLike"),e.IsObjectLike=r;function n(a){return $t.AllowArrayObject?`(typeof ${a} === 'object' && ${a} !== null && !(${a} instanceof Date) && !(${a} instanceof Uint8Array))`:`(typeof ${a} === 'object' && ${a} !== null && !Array.isArray(${a}) && !(${a} instanceof Date) && !(${a} instanceof Uint8Array))`}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(a){return $t.AllowNaN?`typeof ${a} === 'number'`:`Number.isFinite(${a})`}i(o,"IsNumberLike"),e.IsNumberLike=o;function s(a){return $t.AllowNullVoid?`(${a} === undefined || ${a} === null)`:`${a} === undefined`}i(s,"IsVoidLike"),e.IsVoidLike=s})(Si||(Si={}));var ll;(function(e){function t(A){return A[_]==="Any"||A[_]==="Unknown"}i(t,"IsAnyOrUnknown");function*r(A,K,S){yield"true"}i(r,"FromAny");function*n(A,K,S){yield"true"}i(n,"FromArgument");function*o(A,K,S){yield`Array.isArray(${S})`;const[se,X]=[kn("value","any"),kn("acc","number")];ye(A.maxItems)&&(yield`${S}.length <= ${A.maxItems}`),ye(A.minItems)&&(yield`${S}.length >= ${A.minItems}`);const Q=Pt(A.items,K,"value");if(yield`((array) => { for(const ${se} of array) if(!(${Q})) { return false }; return true; })(${S})`,dt(A.contains)||ye(A.minContains)||ye(A.maxContains)){const He=dt(A.contains)?A.contains:ht(),Er=Pt(He,K,"value"),ro=ye(A.minContains)?[`(count >= ${A.minContains})`]:[],xn=ye(A.maxContains)?[`(count <= ${A.maxContains})`]:[],qn=`const count = value.reduce((${X}, ${se}) => ${Er} ? acc + 1 : acc, 0)`,au=["(count > 0)",...ro,...xn].join(" && ");yield`((${se}) => { ${qn}; return ${au}})(${S})`}A.uniqueItems===!0&&(yield`((${se}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${S})`)}i(o,"FromArray");function*s(A,K,S){yield`(typeof value === 'object' && Symbol.asyncIterator in ${S})`}i(s,"FromAsyncIterator");function*a(A,K,S){yield`(typeof ${S} === 'bigint')`,fo(A.exclusiveMaximum)&&(yield`${S} < BigInt(${A.exclusiveMaximum})`),fo(A.exclusiveMinimum)&&(yield`${S} > BigInt(${A.exclusiveMinimum})`),fo(A.maximum)&&(yield`${S} <= BigInt(${A.maximum})`),fo(A.minimum)&&(yield`${S} >= BigInt(${A.minimum})`),fo(A.multipleOf)&&(yield`(${S} % BigInt(${A.multipleOf})) === 0`)}i(a,"FromBigInt");function*l(A,K,S){yield`(typeof ${S} === 'boolean')`}i(l,"FromBoolean");function*u(A,K,S){yield*Qt(A.returns,K,`${S}.prototype`)}i(u,"FromConstructor");function*d(A,K,S){yield`(${S} instanceof Date) && Number.isFinite(${S}.getTime())`,ye(A.exclusiveMaximumTimestamp)&&(yield`${S}.getTime() < ${A.exclusiveMaximumTimestamp}`),ye(A.exclusiveMinimumTimestamp)&&(yield`${S}.getTime() > ${A.exclusiveMinimumTimestamp}`),ye(A.maximumTimestamp)&&(yield`${S}.getTime() <= ${A.maximumTimestamp}`),ye(A.minimumTimestamp)&&(yield`${S}.getTime() >= ${A.minimumTimestamp}`),ye(A.multipleOfTimestamp)&&(yield`(${S}.getTime() % ${A.multipleOfTimestamp}) === 0`)}i(d,"FromDate");function*f(A,K,S){yield`(typeof ${S} === 'function')`}i(f,"FromFunction");function*h(A,K,S){const se=globalThis.Object.getOwnPropertyNames(A.$defs).reduce((X,Q)=>[...X,A.$defs[Q]],[]);yield*Qt(wa(A.$ref),[...K,...se],S)}i(h,"FromImport");function*m(A,K,S){yield`Number.isInteger(${S})`,ye(A.exclusiveMaximum)&&(yield`${S} < ${A.exclusiveMaximum}`),ye(A.exclusiveMinimum)&&(yield`${S} > ${A.exclusiveMinimum}`),ye(A.maximum)&&(yield`${S} <= ${A.maximum}`),ye(A.minimum)&&(yield`${S} >= ${A.minimum}`),ye(A.multipleOf)&&(yield`(${S} % ${A.multipleOf}) === 0`)}i(m,"FromInteger");function*g(A,K,S){const se=A.allOf.map(X=>Pt(X,K,S)).join(" && ");if(A.unevaluatedProperties===!1){const X=cr(`${new RegExp(ea(A))};`),Q=`Object.getOwnPropertyNames(${S}).every(key => ${X}.test(key))`;yield`(${se} && ${Q})`}else if(dt(A.unevaluatedProperties)){const X=cr(`${new RegExp(ea(A))};`),Q=`Object.getOwnPropertyNames(${S}).every(key => ${X}.test(key) || ${Pt(A.unevaluatedProperties,K,`${S}[key]`)})`;yield`(${se} && ${Q})`}else yield`(${se})`}i(g,"FromIntersect");function*p(A,K,S){yield`(typeof value === 'object' && Symbol.iterator in ${S})`}i(p,"FromIterator");function*y(A,K,S){typeof A.const=="number"||typeof A.const=="boolean"?yield`(${S} === ${A.const})`:yield`(${S} === '${th.Escape(A.const)}')`}i(y,"FromLiteral");function*w(A,K,S){yield"false"}i(w,"FromNever");function*k(A,K,S){yield`(!${Pt(A.not,K,S)})`}i(k,"FromNot");function*D(A,K,S){yield`(${S} === null)`}i(D,"FromNull");function*C(A,K,S){yield Si.IsNumberLike(S),ye(A.exclusiveMaximum)&&(yield`${S} < ${A.exclusiveMaximum}`),ye(A.exclusiveMinimum)&&(yield`${S} > ${A.exclusiveMinimum}`),ye(A.maximum)&&(yield`${S} <= ${A.maximum}`),ye(A.minimum)&&(yield`${S} >= ${A.minimum}`),ye(A.multipleOf)&&(yield`(${S} % ${A.multipleOf}) === 0`)}i(C,"FromNumber");function*P(A,K,S){yield Si.IsObjectLike(S),ye(A.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${A.minProperties}`),ye(A.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${A.maxProperties}`);const se=Object.getOwnPropertyNames(A.properties);for(const X of se){const Q=$c.Encode(S,X),He=A.properties[X];if(A.required&&A.required.includes(X))yield*Qt(He,K,Q),(ka(He)||t(He))&&(yield`('${X}' in ${S})`);else{const Er=Pt(He,K,Q);yield Si.IsExactOptionalProperty(S,X,Er)}}if(A.additionalProperties===!1)if(A.required&&A.required.length===se.length)yield`Object.getOwnPropertyNames(${S}).length === ${se.length}`;else{const X=`[${se.map(Q=>`'${Q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${S}).every(key => ${X}.includes(key))`}if(typeof A.additionalProperties=="object"){const X=Pt(A.additionalProperties,K,`${S}[key]`),Q=`[${se.map(He=>`'${He}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${S}).every(key => ${Q}.includes(key) || ${X}))`}}i(P,"FromObject");function*R(A,K,S){yield`${S} instanceof Promise`}i(R,"FromPromise");function*J(A,K,S){yield Si.IsRecordLike(S),ye(A.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${A.minProperties}`),ye(A.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${A.maxProperties}`);const[se,X]=Object.entries(A.patternProperties)[0],Q=cr(`${new RegExp(se)}`),He=Pt(X,K,"value"),Er=dt(A.additionalProperties)?Pt(A.additionalProperties,K,S):A.additionalProperties===!1?"false":"true",ro=`(${Q}.test(key) ? ${He} : ${Er})`;yield`(Object.entries(${S}).every(([key, value]) => ${ro}))`}i(J,"FromRecord");function*ee(A,K,S){const se=$n(A,K);if(We.functions.has(A.$ref))return yield`${sn(A.$ref)}(${S})`;yield*Qt(se,K,S)}i(ee,"FromRef");function*te(A,K,S){const se=cr(`${new RegExp(A.source,A.flags)};`);yield`(typeof ${S} === 'string')`,ye(A.maxLength)&&(yield`${S}.length <= ${A.maxLength}`),ye(A.minLength)&&(yield`${S}.length >= ${A.minLength}`),yield`${se}.test(${S})`}i(te,"FromRegExp");function*Y(A,K,S){yield`(typeof ${S} === 'string')`,ye(A.maxLength)&&(yield`${S}.length <= ${A.maxLength}`),ye(A.minLength)&&(yield`${S}.length >= ${A.minLength}`),A.pattern!==void 0&&(yield`${cr(`${new RegExp(A.pattern)};`)}.test(${S})`),A.format!==void 0&&(yield`format('${A.format}', ${S})`)}i(Y,"FromString");function*pe(A,K,S){yield`(typeof ${S} === 'symbol')`}i(pe,"FromSymbol");function*we(A,K,S){yield`(typeof ${S} === 'string')`,yield`${cr(`${new RegExp(A.pattern)};`)}.test(${S})`}i(we,"FromTemplateLiteral");function*Fe(A,K,S){yield`${sn(A.$ref)}(${S})`}i(Fe,"FromThis");function*nt(A,K,S){if(yield`Array.isArray(${S})`,A.items===void 0)return yield`${S}.length === 0`;yield`(${S}.length === ${A.maxItems})`;for(let se=0;se<A.items.length;se++)yield`${Pt(A.items[se],K,`${S}[${se}]`)}`}i(nt,"FromTuple");function*Ge(A,K,S){yield`${S} === undefined`}i(Ge,"FromUndefined");function*Ar(A,K,S){yield`(${A.anyOf.map(X=>Pt(X,K,S)).join(" || ")})`}i(Ar,"FromUnion");function*qt(A,K,S){yield`${S} instanceof Uint8Array`,ye(A.maxByteLength)&&(yield`(${S}.length <= ${A.maxByteLength})`),ye(A.minByteLength)&&(yield`(${S}.length >= ${A.minByteLength})`)}i(qt,"FromUint8Array");function*Vn(A,K,S){yield"true"}i(Vn,"FromUnknown");function*to(A,K,S){yield Si.IsVoidLike(S)}i(to,"FromVoid");function*on(A,K,S){const se=We.instances.size;We.instances.set(se,A),yield`kind('${A[_]}', ${se}, ${S})`}i(on,"FromKind");function*Qt(A,K,S,se=!0){const X=Hr(A.$id)?[...K,A]:K,Q=A;if(se&&Hr(A.$id)){const He=sn(A.$id);if(We.functions.has(He))return yield`${He}(${S})`;{We.functions.set(He,"<deferred>");const Er=an(He,A,K,"value",!1);return We.functions.set(He,Er),yield`${He}(${S})`}}switch(Q[_]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*o(Q,X,S);case"AsyncIterator":return yield*s(Q,X,S);case"BigInt":return yield*a(Q,X,S);case"Boolean":return yield*l(Q,X,S);case"Constructor":return yield*u(Q,X,S);case"Date":return yield*d(Q,X,S);case"Function":return yield*f(Q,X,S);case"Import":return yield*h(Q,X,S);case"Integer":return yield*m(Q,X,S);case"Intersect":return yield*g(Q,X,S);case"Iterator":return yield*p(Q,X,S);case"Literal":return yield*y(Q,X,S);case"Never":return yield*w();case"Not":return yield*k(Q,X,S);case"Null":return yield*D(Q,X,S);case"Number":return yield*C(Q,X,S);case"Object":return yield*P(Q,X,S);case"Promise":return yield*R(Q,X,S);case"Record":return yield*J(Q,X,S);case"Ref":return yield*ee(Q,X,S);case"RegExp":return yield*te(Q,X,S);case"String":return yield*Y(Q,X,S);case"Symbol":return yield*pe(Q,X,S);case"TemplateLiteral":return yield*we(Q,X,S);case"This":return yield*Fe(Q,X,S);case"Tuple":return yield*nt(Q,X,S);case"Undefined":return yield*Ge(Q,X,S);case"Union":return yield*Ar(Q,X,S);case"Uint8Array":return yield*qt(Q,X,S);case"Unknown":return yield*Vn();case"Void":return yield*to(Q,X,S);default:if(!ni(Q[_]))throw new TT(A);return yield*on(Q,X,S)}}i(Qt,"Visit");const We={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Pt(A,K,S,se=!0){return`(${[...Qt(A,K,S,se)].join(" && ")})`}i(Pt,"CreateExpression");function sn(A){return`check_${eh.Encode(A)}`}i(sn,"CreateFunctionName");function cr(A){const K=`local_${We.variables.size}`;return We.variables.set(K,`const ${K} = ${A}`),K}i(cr,"CreateVariable");function an(A,K,S,se,X=!0){const[Q,He]=[`
`,qn=>"".padStart(qn," ")],Er=kn("value","any"),ro=To("boolean"),xn=[...Qt(K,S,se,X)].map(qn=>`${He(4)}${qn}`).join(` &&${Q}`);return`function ${A}(${Er})${ro} {${Q}${He(2)}return (${Q}${xn}${Q}${He(2)})
}`}i(an,"CreateFunction");function kn(A,K){const S=We.language==="typescript"?`: ${K}`:"";return`${A}${S}`}i(kn,"CreateParameter");function To(A){return We.language==="typescript"?`: ${A}`:""}i(To,"CreateReturns");function su(A,K,S){const se=an("check",A,K,"value"),X=kn("value","any"),Q=To("boolean"),He=[...We.functions.values()],Er=[...We.variables.values()],ro=Hr(A.$id)?`return function check(${X})${Q} {
  return ${sn(A.$id)}(value)
}`:`return ${se}`;return[...Er,...He,ro].join(`
`)}i(su,"Build");function ms(...A){const K={language:"javascript"},[S,se,X]=A.length===2&&Xr(A[1])?[A[0],A[1],K]:A.length===2&&!Xr(A[1])?[A[0],[],A[1]]:A.length===3?[A[0],A[1],A[2]]:A.length===1?[A[0],[],K]:[null,[],K];if(We.language=X.language,We.variables.clear(),We.functions.clear(),We.instances.clear(),!dt(S))throw new i1(S);for(const Q of se)if(!dt(Q))throw new i1(Q);return su(S,se)}i(ms,"Code"),e.Code=ms;function ok(A,K=[]){const S=ms(A,K,{language:"javascript"}),se=globalThis.Function("kind","format","hash",S),X=new Map(We.instances);function Q(xn,qn,au){if(!ni(xn)||!X.has(qn))return!1;const ik=Om(xn),sk=X.get(qn);return ik(sk,au)}i(Q,"typeRegistryFunction");function He(xn,qn){return Tm(xn)?Nm(xn)(qn):!1}i(He,"formatRegistryFunction");function Er(xn){return og(xn)}i(Er,"hashFunction");const ro=se(Q,He,Er);return new FT(A,K,ro,S)}i(ok,"Compile"),e.Compile=ok})(ll||(ll={}));const rh={};function F5(e,t){e in rh||(rh[e]=t)}i(F5,"registerErrorMessage");let s1=!1;function NT(){s1||(s1=!0,oM(e=>(rh[e.schema[_]]||D5)(e)))}i(NT,"setShapeDefinitionErrorMessage");const nh=Symbol.for("object-shape-tester.shape-identifier");function je(e){if(NT(),ig(e))return e;const t=oh(e),r=Mi(t,!1),n=Mi(t,!0),o={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:ll.Compile(t),$_compiledSchemaNoExtraKeys:ll.Compile(r),$_compiledSchemaExtraKeys:ll.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[nh]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}i(je,"defineShape");function ig(e){return M.hasKey(e,nh)&&!!e[nh]}i(ig,"isShape");function sg(e){return M.hasKey(e,_)}i(sg,"isSchema");function Mi(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Mi(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Mi(n,t))),sg(e.items)?r.items=Mi(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Mi(n,t))),M.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,s])=>{n[o]=Mi(s,t)}),r.properties=n}return r.additionalProperties=t,r}i(Mi,"forceAdditionalProperties");function oh(e){if(sg(e))return e;if(ig(e))return e.$_schema;if(M.isFunction(e))return Ze.Function([],Ze.Any(),{default:e});if(M.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,o])=>{const s=oh(o);r[n]=s,t[n]=s.default}),Ze.Object(r,{default:t})}else{if(M.isArray(e))return Ze.Array(Ze.Union(e.map(t=>oh(t))),{default:[]});if(M.isPrimitive(e)){if(M.isString(e))return Ze.String({default:e});if(M.isNumber(e))return Ze.Number({default:e});if(M.isBoolean(e))return Ze.Boolean({default:e});if(M.isSymbol(e))return Ze.Symbol({default:e});if(M.isNull(e))return Ze.Null({default:null});if(M.isUndefined(e))return Ze.Undefined({default:void 0});if(M.isBigInt(e))return Ze.BigInt({default:e});jt.tsType(e).equals(),jt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${x(e)}`)}}i(oh,"shapeInitToSchema");function PT({checkValue:e,default:t,name:r}){return ni(r)||Im(r,(n,o)=>e(o)),(n=t)=>je(Ze.Unsafe({[_]:r,default:n}))}i(PT,"createCustomShape");function Hi(e,t){const r=qr(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return je(Ze.Union(r.map(n=>Ze.Literal(n)),{default:t??r[0]}))}i(Hi,"enumShape");function Ee(e){return M.isSymbol(e)?IT(e):je(Ze.Const(e,{default:e}))}i(Ee,"exactShape");const Au="ExactSymbol";function IT(e){return ni(Au)||Im(Au,(t,r)=>r===t.symbol),F5(Au,({schema:t})=>`Expected symbol ${t.symbol?.description?h6({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),je(Ze.Unsafe({[_]:Au,symbol:e,default:e}))}i(IT,"exactSymbolShape");function OT(...e){const t={},r=e.map(n=>{const o=je(n);return Object.assign(t,o.default),o.$_schema});return je(Ze.Composite(r,{default:t}))}i(OT,"intersectShape");function tr(e,t={}){$t.ExactOptionalPropertyTypes=!0;const r=je(e).$_schema,n=t.alsoUndefined?Ze.Union([Ze.Undefined(),r]):r;return je(Ze.Optional(n))}i(tr,"optionalShape");function ct(...e){let t;const r=e.map((n,o)=>{const s=je(n);return o||(t=s.default),s.$_schema});return je(Ze.Union(r,{default:t}))}i(ct,"unionShape");class BT extends TypeError{static{i(this,"ShapeMismatchError")}errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(s=>T5(s)).join(`
`),o=Qi(r,`Shape mismatch:
${Lh(n,1)}`);super(o),this.errors=t,this.failureMessage=r}}function RT(e){return e.errors.flatMap(t=>Array.from(t))}i(RT,"getSubErrors");function T5(e,t=0){const r=RT(e).map(o=>T5(o,t+1)),n=[e.path,e.message].filter(M.isTruthy).join(": ")+(r.length?":":"");return[Lh(n,t),...r].join(`
`)}i(T5,"createErrorMessage");function Wo(e,t,r={}){return N5(t,r).Check(e)}i(Wo,"checkValidShape");function kc(e,t,r={},n){if(Wo(e,t,r))return;const o=Array.from(N5(t,r).Errors(e));if(o.length)throw new BT(o,n)}i(kc,"assertValidShape");function N5(e,t){return e=LT(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}i(N5,"getCompiledSchema");function LT(e){return je(e)}i(LT,"ensureShape");function Ms({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:o}=Mh(r),s=r.default??(o-n)/2+n,a=je(Ze.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:s})),l=m2(()=>kc(s,a));if(l)throw sa(l,"Default range value is not within range.");return a}i(Ms,"rangeShape");const Wu="recordShape";function $d({keys:e,values:t,partial:r,additionalProperties:n}){jT();const o=P5(e),s=je(t);return je(Ze.Unsafe({[_]:Wu,keysShape:o,valuesShape:s,isPartial:!!r,additionalProperties:!!n,default:_T({isPartial:!!r,keysShape:o,valuesShape:s})}))}i($d,"recordShape");function jT(){ni(Wu)||Im(Wu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([o,s])=>{const a=e.additionalProperties?!0:Wo(o,e.keysShape),l=Wo(s,e.valuesShape);return a&&l}),n=e.isPartial?!0:!a1(e.keysShape,t).length;return r&&n}),F5(Wu,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=yn(Object.entries(n),([u])=>u,(u,[d,f])=>!Wo(d,r.keysShape)||!Wo(f,r.valuesShape)),s=a1(r.keysShape,n),a=o.length?["Failure at keys",o.join(",")].join(": "):"",l=s.length?["Missing keys",s.join(",")].join(": "):"";return[a,l].filter(M.isTruthy).join(`
`)})}i(jT,"setRecordShapeRegistry");function a1(e,t){const r=xc(e).filter(n=>M.isPropertyKey(n));return r.length?r.filter(n=>!M.hasKey(t,n)):[]}i(a1,"getMissingKeys");function _T({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=xc(e),o=t.default;return Object.fromEntries(n.map(s=>[s,o]))}}i(_T,"createDefaultValue");function P5(e){return ig(e)?e:sg(e)?je(e):M.isObject(e)?Hi(e):M.isArray(e)&&M.isLengthAtLeast(e,1)?ct(...e.map(t=>Ee(t))):M.isPropertyKey(e)?je(e):je(Ze.Undefined())}i(P5,"defineKeysShape");function xc(e){const t=e.$_schema,r=t[_].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Ic(t.anyOf.flatMap(n=>xc(je(n)))):["undefined","number","string","symbol"].includes(r)?[]:xc(P5(e.default))}i(xc,"extractFiniteKeys");function UT(e){return je(Ze.Unknown({default:e}))}i(UT,"unknownShape");const zT=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],ag=zT.reduce((e,t)=>(e[t]=t,e),{});ut.defaultZone.name;const I5=ag.UTC,VT=je({hour:Ms({...fp,default:fp.min}),minute:Ms({...hp,default:hp.min}),second:Ms({...mp,default:mp.min}),millisecond:Ms({...gp,default:gp.min}),timezone:Hi(ag,I5)}),qT=je({year:2023,month:Ms({...bp,default:bp.min}),day:Ms({...yp,default:yp.min}),timezone:Hi(ag,I5)});je(OT(qT,VT));ce.Years+"",ce.Months+"",ce.Weeks+"",ce.Days+"",ce.Hours+"",ce.Minutes+"",ce.Seconds+"",ce.Milliseconds+"";je(ct({get:Ee(Z.Month),in:ct(Ee(Z.Year))},{get:Ee(Z.Week),in:ct(Ee(Z.Year),Ee(Z.Month))},{get:Ee(Z.Day),in:ct(Ee(Z.Year),Ee(Z.Month),Ee(Z.Week))},{get:Ee(Z.Hour),in:ct(Ee(Z.Year),Ee(Z.Month),Ee(Z.Week),Ee(Z.Day))},{get:Ee(Z.Minute),in:ct(Ee(Z.Year),Ee(Z.Month),Ee(Z.Week),Ee(Z.Day),Ee(Z.Hour))},{get:Ee(Z.Second),in:ct(Ee(Z.Year),Ee(Z.Month),Ee(Z.Week),Ee(Z.Day),Ee(Z.Hour),Ee(Z.Minute))},{get:Ee(Z.Millisecond),in:ct(Ee(Z.Year),Ee(Z.Month),Ee(Z.Week),Ee(Z.Day),Ee(Z.Hour),Ee(Z.Minute),Ee(Z.Second))}));$d({keys:Hi(ce),values:-1,partial:!0});var l1;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(l1||(l1={}));var ih;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(ih||(ih={}));var u1;(function(e){e.Year="year",e.Month="month",e.Day="day"})(u1||(u1={}));const WT={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};l6(WT,qr(ih));PT({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return KT(e)}});function KT(e){return ue.fromISO(e).toUTC().toISO()===e}i(KT,"isValidIsoString");const GT=je({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:UT()});function Sf(e){return Wo(e,GT,{allowExtraKeys:!0})}i(Sf,"isObservableBase");class O5 extends kw{static{i(this,"Observable")}value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck="equalityCheck"in t?t.equalityCheck:bm}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:HT}=V6,c1=i(e=>e,"i$1"),d1=i(()=>document.createComment(""),"s"),Ra=i((e,t,r)=>{const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=n.insertBefore(d1(),o),a=n.insertBefore(d1(),o);r=new HT(s,a,e,e.options)}else{const s=r._$AB.nextSibling,a=r._$AM,l=a!==e;if(l){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==a._$AU&&r._$AP(u)}if(s!==o||l){let u=r._$AA;for(;u!==s;){const d=c1(u).nextSibling;c1(n).insertBefore(u,o),u=d}}}return r},"v"),Ai=i((e,t,r=e)=>(e._$AI(t,r),e),"u$1"),ZT={},JT=i((e,t=ZT)=>e._$AH=t,"p$2"),YT=i(e=>e._$AH,"M$1"),Mf=i(e=>{e._$AR(),e._$AA.remove()},"h");const lg={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Co=i(e=>(...t)=>({_$litDirective$:e,values:t}),"e$3");class So{static{i(this,"i")}constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const XT={attribute:!0,type:String,converter:ac,reflect:!1,hasChanged:Qh},QT=i((e=XT,t,r)=>{const{kind:n,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(l){const u=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,u,e,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,e,l),l}}}if(n==="setter"){const{name:a}=r;return function(l){const u=this[a];t.call(this,l),this.requestUpdate(a,u,e,!0,l)}}throw Error("Unsupported decorator location: "+n)},"r");function eN(e){return(t,r)=>typeof r=="object"?QT(e,t,r):((n,o,s)=>{const a=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),a?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,r)}i(eN,"n$1");const Dr=Co(class extends So{constructor(e){if(super(e),e.type!==lg.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return gn}});const Bt=i(e=>e??re,"o");function tN(e,t,r){return e?t(e):r?.(e)}i(tN,"n");class rN extends nl{static{i(this,"DeclarativeElement")}static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function nN(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(l=>!!l.index).length;if(n||o)return[...e];const s=e.map(l=>[l]);return s.length||(s[0]=[]),r.forEach(l=>{l>=0&&l<e.length&&(s[l]=[])}),t.forEach(l=>{const u=s[l.index];u&&u.splice(0,0,...l.values)}),s.flat()}i(nN,"insertAndRemoveValues");function sh(e){return M.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}i(sh,"isMinimalDefinitionWithInputs");function ug(e){return M.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}i(ug,"hasTagName");function B5(e){return yn(e,t=>{if(sh(t))return t.definition;if(ug(t))return t.tagInterpolationKey||t},M.isTruthy)}i(B5,"extractElementKeys");const R5=new WeakMap;function oN(e,t){const r=B5(t);return L5(R5,[e,...r]).value?.template}i(oN,"getAlreadyMappedTemplate");function iN(e,t,r){const n=B5(t);return _5(R5,[e,...n],r)}i(iN,"setMappedTemplate");function L5(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=j5(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?L5(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}i(L5,"getNestedValues");function j5(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}i(j5,"getCurrentKeyAndValue");function _5(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:a}=j5(e,t,n);if(!s)return{result:!1,reason:a};const l=o??{nested:void 0,template:void 0};if(o||e.set(s,l),n===t.length-1)return l.template=r,{result:!0,reason:"set value at end of keys array"};const u=l.nested??new WeakMap;return l.nested||(l.nested=u),_5(u,t,r,n+1)}i(_5,"setNestedValues");function U5(e,t,r){const n=oN(e,t),o=n??r();if(!n){const l=iN(e,t,o);if(!l.result)throw new Error(`Failed to set template transform: ${l.reason}`)}const s=o.valuesTransform(t),a=nN(t,s.valueInsertions,s.valueIndexDeletions);return{strings:o.templateStrings,values:a}}i(U5,"getTransformedTemplate");function z5(e,t,r,n){const o=[],s=[],a=[],l=[];return e.forEach((d,f)=>{const h=o.length-1,m=o[h],g=f-1,p=t[g];n&&n(d);let y,w=[];if(typeof m=="string"&&(y=r(m,d,p),y)){o[h]=[m,y.replacement].join(""),a.push(g);const D=y.getExtraValues;w=D?D(p):[],w.length&&D?(o[h]+=" ",w.forEach((C,P)=>{P&&o.push(" ")}),l.push(C=>{const P=C[g],R=D(P);return{index:g,values:R}}),o.push(d)):o[h]+=d}y||o.push(d);const k=e.raw[f];y?(s[h]=[s[h],y.replacement,k].join(""),w.length&&w.forEach(()=>{s.push("")})):s.push(k)}),{templateStrings:Object.assign([],o,{raw:s}),valuesTransform(d){const f=l.flatMap(h=>h(d));return{valueIndexDeletions:a,valueInsertions:f}}}}i(z5,"transformTemplate");function sN(...[e,t,r]){if(ug(r))return{replacement:r.tagName,getExtraValues:void 0}}i(sN,"transformCss");function aN(e,t){return z5(e,t,sN)}i(aN,"transformCssTemplate");function E(e,...t){const r=U5(e,t,()=>aN(e,t));return F2(r.strings,...r.values)}i(E,"css");const lN={allowPolymorphicState:!1,errorHandler:void 0};function V5(e,t){const r=e.instanceState;Ve(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Ve(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}i(V5,"assignInputs");class uN extends CustomEvent{static{i(this,"TypedEvent")}_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function cg(){return e=>class extends uN{static type=e;_type=e;constructor(t){super(e,t)}}}i(cg,"defineTypedEvent");function tt(){return cg()}i(tt,"defineElementEvent");function cN(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=cg()([e,n].join("-"));return r[n]=o,r},{}):{}}i(cN,"createEventDescriptorMap");function dN(e){return e?st(e,t=>t):{}}i(dN,"createHostClassNamesMap");function q5(e,t){t in e||eN()(e,t)}i(q5,"bindReactiveProperty");function fN(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}i(fN,"assertValidPropertyName");function f1(e,t){const r=e;function n(a){t?fN(a,e,e.tagName):q5(e,a)}i(n,"verifyProperty");function o(a,l){return n(l),r[l]}return i(o,"valueGetter"),new Proxy({},{get:o,set(a,l,u){n(l);const d=r[l];function f(m){a[l]=m,r[l]=m}i(f,"setValueOnElement");const h=e.observablePropertyListenerMap[l];if(d!==u&&Sf(d)&&h&&d.removeListener(h),Sf(u))if(h)u.listen(!1,h);else{let m=function(){e.requestUpdate()};i(m,"newListener"),e.observablePropertyListenerMap[l]=m,u.listen(!1,m)}else Sf(d)&&(e.observablePropertyListenerMap[l]=void 0);return f(u),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,l){if(l in a)return{get value(){return o(a,l)},configurable:!0,enumerable:!0}},has(a,l){return Reflect.has(a,l)}})}i(f1,"createElementPropertyProxy");function h1(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}i(h1,"assertValidStringNames");function m1(e,t,r){return r?Qo(r,o=>({key:o,value:[e,t,o].join("-")}),{}):{}}i(m1,"createStringNameMap");function hN({hostClassNames:e,cssVars:t}){return{hostClasses:st(e,(r,n)=>({name:xe(n),selector:xe(`:host(.${n})`)})),cssVars:t}}i(hN,"createStylesCallbackInput");function mN({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Ve(t).forEach(s=>{const a=t[s],l=r[s];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(l):e.classList.remove(l))})}i(mN,"applyHostClasses");function gN({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:o}){function s(l){Ve(l).forEach(u=>{const d=l[u];e.instanceState[u]=d})}return i(s,"updateState"),{cssVars:r,slotNames:n,testIds:o,dispatch:i(l=>e.dispatchEvent(l),"dispatch"),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:s}}i(gN,"createRenderParams");function zn(...e){return jt.isEmpty(e),t=>{const r=t;if(!M.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return pN({...r,options:{...r.options}})}}i(zn,"defineElement");function pN(e){if(!M.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!M.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...lN,...e.options},r=cN(e.tagName,e.events),n=dN(e.hostClasses);e.hostClasses&&h1(e.tagName,e.hostClasses),e.cssVars&&h1(e.tagName,e.cssVars);const o=e.cssVars?Xn(e.cssVars):{},s=m1(e.tagName,"slot",e.slotNames),a=m1(e.tagName,"test-id",e.testIds),l=typeof e.styles=="function"?e.styles(hN({hostClassNames:n,cssVars:o})):e.styles||E``,u=e.render;function d(...[h]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:h}}i(d,"typedAssignCallback");const f=class extends rN{static{i(this,"anonymousClass")}static elementOptions=t;static tagName=e.tagName;static styles=l;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return gN({element:this,eventsMap:r,cssVars:o,slotNamesMap:s,testIdsMap:a})}static assign=d;static events=r;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=s;static testIds=a;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const h=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const g=e.state(h);if(g instanceof Promise)throw new TypeError("init cannot be asynchronous");Ve(g).forEach(p=>{q5(this,p),this.instanceState[p]=g[p]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(h)instanceof Promise))throw new TypeError("init cannot be asynchronous");const m=u(h);if(m instanceof Promise)throw new TypeError("render cannot be asynchronous");return mN({host:h.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:h.state,inputs:h.inputs}),this._lastRenderedProps={inputs:{...h.inputs},state:{...h.state}},m}catch(h){const m=sa(h,`Failed to render ${e.tagName}`);return console.error(m),this._lastRenderError=m,t.errorHandler?.(m),Jt(m)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const h=this.createRenderParams();if(e.init(h)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(h=>{M.hasKey(h,"destroy")&&M.isFunction(h.destroy)&&h.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const h=this.createRenderParams();if(e.cleanup(h)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(h){V5(this,h)}observablePropertyListenerMap={};instanceInputs=f1(this,!1);instanceState=f1(this,!t.allowPolymorphicState);constructor(){super(),this.definition=f}};return Object.defineProperties(f,{name:{value:d6(e.tagName,{firstLetterCase:gl.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,f)),f}i(pN,"internalDefineElement");class bN extends Cs{static{i(this,"InternalAsyncPropClass")}isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function yN(e){return new bN(e)}i(yN,"asyncProp");const g1=i((e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},"u"),vN=Co(class extends So{constructor(e){if(super(e),e.type!==lg.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],s=[];let a=0;for(const l of e)o[a]=n?n(l,a):a,s[a]=r(l,a),a++;return{values:s,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=YT(e),{values:s,keys:a}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=a,s;const l=this.ut??=[],u=[];let d,f,h=0,m=o.length-1,g=0,p=s.length-1;for(;h<=m&&g<=p;)if(o[h]===null)h++;else if(o[m]===null)m--;else if(l[h]===a[g])u[g]=Ai(o[h],s[g]),h++,g++;else if(l[m]===a[p])u[p]=Ai(o[m],s[p]),m--,p--;else if(l[h]===a[p])u[p]=Ai(o[h],s[p]),Ra(e,u[p+1],o[h]),h++,p--;else if(l[m]===a[g])u[g]=Ai(o[m],s[g]),Ra(e,o[h],o[m]),m--,g++;else if(d===void 0&&(d=g1(a,g,p),f=g1(l,h,m)),d.has(l[h]))if(d.has(l[m])){const y=f.get(a[g]),w=y!==void 0?o[y]:null;if(w===null){const k=Ra(e,o[h]);Ai(k,s[g]),u[g]=k}else u[g]=Ai(w,s[g]),Ra(e,o[h],w),o[y]=null;g++}else Mf(o[m]),m--;else Mf(o[h]),h++;for(;g<=p;){const y=Ra(e,u[p+1]);Ai(y,s[g]),u[g++]=y}for(;h<=m;){const y=o[h++];y!==null&&Mf(y)}return this.ut=a,JT(e,u),gn}}),wN=vN;function kd(e,t){return Zi(e,t),e.element}i(kd,"extractElement");function $N(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}i($N,"getPartHostTagName");function Zi(e,t){const r=$N(e),n=r?`: in ${r}`:"";if(e.type!==lg.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}i(Zi,"assertIsElementPartInfo");function kN(e,t){return Co(class extends So{element;constructor(r){super(r),this.element=bt.instanceOf(kd(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),gn}})}i(kN,"createMutateDirective");const yo=kN("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const o=ts(r,"allAttributesApplied",()=>new Set);Ve(t).forEach(s=>{if(s.toLowerCase()!==s)throw new Error(`Cannot assign attribute name with uppercase letters: ${s}`);o.add(s)}),o.forEach(s=>{const a=t[s];a==null||a===!1||a===re?e.removeAttribute(s):a===""||a===!0?e.setAttribute(s,""):e.setAttribute(s,String(a))})});function xN(e){const t=Co(class extends So{element;constructor(r){super(r),this.element=kd(r,e)}render(r){return this.element.setAttribute(e,r),gn}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}i(xN,"createAttributeDirective");function U(e,t){return DN(e,t)}i(U,"listen");const DN=Co(class extends So{element;lastListenerMetaData;constructor(e){super(e),this.element=kd(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:i(r=>this.lastListenerMetaData?.callback(r),"listener")}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),gn}});function AN(e){return U("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}i(AN,"listenToActivate");const p1="onDomCreated",Ji=Co(class extends So{element;constructor(e){super(e),Zi(e,p1)}update(e,[t]){Zi(e,p1);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),b1="onDomRendered",EN=Co(class extends So{constructor(e){super(e),Zi(e,b1)}update(e,[t]){Zi(e,b1);const r=e.element;return window.requestAnimationFrame(()=>t(r)),this.render(t)}render(e){}}),y1="onResize",W5=Co(class extends So{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&CN(this.element,this.callback,e)});callback;constructor(e){super(e),Zi(e,y1)}update(e,[t]){Zi(e,y1),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function CN(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}i(CN,"handleOnResizeCallback");function Br(e,t,r){return tN(e,()=>t,()=>r)}i(Br,"renderIf");const{attributeDirective:SN}=xN("data-test-id"),Ko=SN;function K5(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(t(o),zn(...n)(r(o)))}i(K5,"wrapDefineElement");function MN(e,t){return FN(void 0,e)}i(MN,"assign");const FN=Co(class extends So{element;constructor(e){super(e),this.element=kd(e,"assign")}render(e,t){return V5(this.element,t),gn}}),TN={};function NN(e,t){return t.map((r,n)=>{const o=e[n],s=e[n+1];if(o&&s){const{shouldHaveTagNameHere:a}=G5(o,s);if(a&&M.isString(r))return{tagName:r,tagInterpolationKey:ts(TN,r,()=>({tagName:r}))}}return r})}i(NN,"mapHtmlValues");function G5(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}i(G5,"classifyValue");function PN(...[e,t,r]){const n=sh(r)?r.definition:r,{isOpeningTag:o,shouldHaveTagNameHere:s}=G5(e,t),a=ug(n);if(a&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!a)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!s||!a?void 0:{replacement:n.tagName,getExtraValues(u){const d=sh(u)?u.inputs:void 0;return[o&&d?MN(d):void 0].filter(M.isTruthy)}}}i(PN,"transformHtml");function IN(e){}i(IN,"stringValidator");function ON(e){return z5(e.strings,e.values,PN,IN)}i(ON,"transformHtmlTemplate");function b(e,...t){const r=NN(e,t),n=B6(e,...r),o=U5(e,r,()=>ON(n));return{...n,strings:o.strings,values:o.values}}i(b,"html");function ah(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],s=(t??[""]).map((a,l)=>{const u=BN(a,n[l]);return`${a}${u}`});return k2(s.join(""))}i(ah,"convertTemplateToString");function BN(e,t){return t._$litType$!=null||t._$litDirective$!=null?ah(t):Array.isArray(t)?t.map(n=>ah(n)).join(""):e.endsWith("=")?`"${t}"`:t}i(BN,"extractValue");function H5(e){return st(e,(t,r)=>r instanceof Ye?xe(r.toString({format:"hex"})):H5(r))}i(H5,"colorsObjectToCssResult");const RN="dodgerblue";function lh(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}i(lh,"calculateTextColorString");function Ff({background:e,foreground:t}){return{background:e??new Ye(lh(t)),foreground:t??new Ye(lh(e))}}i(Ff,"createColorPair");var Dc;(function(e){e.Dark="dark",e.Light="light"})(Dc||(Dc={}));function LN(e){return e==="black"?"white":"black"}i(LN,"flipBackForeground");const jN={black:{foregroundFaint1:new Ye("#ccc"),foregroundFaint2:new Ye("#eee")},white:{foregroundFaint1:new Ye("#ccc"),foregroundFaint2:new Ye("#eee")}},_N={black:{backgroundFaint1:new Ye("#666"),backgroundFaint2:new Ye("#444")},white:{backgroundFaint1:new Ye("#ccc"),backgroundFaint2:new Ye("#fafafa")}};function v1({themeColor:e=RN,themeStyle:t=Dc.Light}={}){const r=new Ye(e),n=new Ye(t===Dc.Dark?"black":"white"),o=lh(n),s=new Ye(o),a={nav:{hover:Ff({background:r.clone().set({"hsl.l":93})}),active:Ff({background:r.clone().set({"hsl.l":90})}),selected:Ff({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,..._N[LN(o)],foreground:s,...jN[o]}};return H5(a)}i(v1,"createTheme");async function w1(e=1){const t=new Xu;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return i(r,"requestNextFrame"),r(),t.promise}i(w1,"waitForAnimationFrame");function UN(e,t){return{element:e,children:Z5(e)}}i(UN,"getNestedChildrenTree");function Z5(e,t,r){return zN(e).map(n=>{const o=Z5(n);return{element:n,children:o}})}i(Z5,"recursivelyGetNestedChildrenTree");function zN(e){return[...e.children,...e.shadowRoot?.children??[]]}i(zN,"getDirectChildren");function Tf(e){return e.matches(":focus")}i(Tf,"isElementFocused");function dg(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:dg(t)}i(dg,"getParentElement");function J5(e,t){if(t(e))return e;const r=dg(e);if(r)return J5(r,t)}i(J5,"findMatchingAncestor");function xd(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const o=t.name,s=n?.constructor.name,a=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${s}'.`;throw new Error(a)}return n}i(xd,"extractEventTarget");function VN(e){const t=dg(e);return t&&J5(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}i(VN,"findOverflowAncestor");function qN(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}i(qN,"walkActiveElement");function WN({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),s=e.toLowerCase();e:for(let a=0,l=0;a<n;a++){const u=s.codePointAt(a);for(;l<r;)if(o.codePointAt(l++)===u)continue e;return!1}return!0}i(WN,"fuzzySearch");const KN=Oi(32);function Ku(e){return e.join(KN)}i(Ku,"createBreadcrumbsSearchKey");function Y5(e){if(!e.length)return[];const t=Ku(e),r=Y5(e.slice(0,-1));return[t,...r]}i(Y5,"getFullTreeKeysToInclude");const GN=["error","errors"];function HN(e){return GN.includes(e)}i(HN,"isSearchingForErrors");function ZN({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),Ku(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return i(n,"addChildren"),e.forEach(o=>{const s=o.entry.errors.length&&HN(t),a=Ku(o.fullUrlBreadcrumbs);if(WN({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>M.isString(u)?u:ah(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||r[a]){const u=Y5(o.fullUrlBreadcrumbs);n(o),u.forEach(d=>r[d]=!0)}else r[a]=!1}),e.filter(o=>{const s=Ku(o.fullUrlBreadcrumbs),a=r[s];if(!M.isBoolean(a))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}i(ZN,"searchFlattenedNodes");class fg extends Error{static{i(this,"SpaRouterError")}name="SpaRouterError"}class $1 extends fg{static{i(this,"GlobalUrlEventsConsolidationError")}name="GlobalUrlEventsConsolidationError"}class JN extends fg{static{i(this,"SanitizationDepthMaxed")}name="SanitizationDepthMaxed"}je({paths:[""],search:tr(ct(void 0,$d({keys:"",values:[""]}))),hash:tr(ct(void 0,""))});const YN=je({basePath:tr("",{alsoUndefined:!0}),sanitizeRoute:i((e=>e),"sanitizeRoute"),maxListenerCount:tr(1,{alsoUndefined:!0}),disableWarnings:tr(!1,{alsoUndefined:!0}),isPaused:tr(!1,{alsoUndefined:!0})}),Nf="://";function hg(...e){const t=e.join("/"),[r,n=""]=t.includes(Nf)?t.split(Nf):["",t];let o=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((a,l,u,d)=>{if(o)return a;const f=d[u+1];let h=l;const m=f?.startsWith("?"),g=!l.includes("?")&&m,p=f==="?";if(m||g){o=!0;let y=!1;const w=d.slice(u+2).reduce((k,D)=>(D.includes("#")&&(y=!0),y?k.concat(D):[k,D].join("&")),"");h=[l,f,p?Bi({value:w,prefix:"&"}):w].join("")}return a.concat(h)},[]);return[r,r?Nf:"",s.join("/")].join("")}i(hg,"joinUrlPaths");var ra;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(ra||(ra={}));var na;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(na||(na={}));const XN=je({encoding:tr(ct(void 0,Hi(ra))),searchParamStrategy:tr(ct(void 0,Hi(na)))});function Eu(e,t){return e.map(r=>{if(r!=null)return Bs(String(r),t)}).filter(r=>r!=null)}i(Eu,"codeValues");function Bs(e,t){return t?.encoding===ra.Decode?decodeURIComponent(e):t?.encoding===ra.Encode?encodeURIComponent(e):e}i(Bs,"codeValue");const QN=je($d({keys:"",values:[""]}));function eP(e,t,r){const n=r?.searchParamStrategy===na.Clear?{}:st(e,(a,l)=>N3(l)),o=st(t,(a,l)=>{if(r?.searchParamStrategy===na.Append){const u=n[a],d=M.isArray(u)?u:[u];if(l){const f=M.isArray(l)?l:[l];return Eu([...d,...f],r)}else return Eu(d,r)}else return M.isArray(l)?Eu(l,r):l?Eu([l],r):void 0});return zc({...n,...o},(a,l)=>!!l)}i(eP,"combineSearchParams");function X5(e,t){return M.isString(e)&&!e.includes("?")?{}:(M.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[a,...l]=a6(s,"=");return[a,l.length?l.join("="):void 0]}).reduce((s,[a,l])=>{const u=Q5({options:t,key:a,value:l}),d=ts(s,u.key,()=>[]);return l!=null&&d.push(u.value),s},{})}i(X5,"searchParamsToObject");function tP(e){if(e!=null)return M.isArray(e)?[...e]:e===""?[]:[e]}i(tP,"wrapParamValue");function rP(e,t){const r=yn(Object.entries(e),([n,o])=>{const s=tP(o);return s?.length?s.map(a=>{const l=Q5({options:t,key:n,value:a});return[l.key,l.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return r.length?kr({value:r.join("&"),prefix:"?"}):""}i(rP,"searchParamsToString");function Q5({options:e,key:t,value:r}){return{key:Bs(t,e),value:Bs(String(r),e)}}i(Q5,"codeParamKeyValue");function e$({hash:e,hostname:t,password:r,pathname:n,port:o,protocol:s,search:a,username:l}){return[s?s+"://":"",l?l+":":"",r?r+"@":"",Dd({hostname:t,port:o}),mg({hash:e,pathname:n,search:a})].join("")}i(e$,"createHref");function t$({pathname:e}){const t=Bi({value:e,prefix:"/"});return t?t.split("/"):[]}i(t$,"createPaths");function mg({hash:e,pathname:t,search:r}){return[kr({value:t,prefix:"/"}),r?kr({value:r,prefix:"?"}):"",e?kr({value:e,prefix:"#"}):""].join("")}i(mg,"createFullPath");function Dd({hostname:e,port:t}){return[e,t?":"+t:""].join("")}i(Dd,"createHost");function r$({hostname:e,port:t,protocol:r}){return[r,Dd({hostname:e,port:t})].filter(M.isTruthy).join("://")}i(r$,"createOrigin");function Rs(e,t){const r=M.isString(e)?Bi({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),o=n?kr({value:Bs(n,t),prefix:"#"}):"",s=r.replace(/#[^#]*$/,""),a=s.replace(/^[^?]*(?:\?|$)/,""),l=a?kr({value:Bs(a,t),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),d=u.includes("://")?u.replace(/:\/\/.*$/,""):"",f=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),h=f.replace(/@.*/,""),m=f.replace(/^[^@]*@/,""),g=h!==m,[p,...y]=g?h.split(":").reverse():[],w=y.toReversed().join("").replace(/[/:]/g,"")||"",k=p?.replace(/[/:]/g,"")||"",D=s6(m.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),C=D[0]?.endsWith("]")?"":D[1]===":"&&D[0]||"",R=m.replace(new RegExp(`:${C}($|/)`),"$1").replace(/\/.*/,""),J=m.replace(/^[^/]*(\/|$)/,"$1"),ee=Bs(J.replace(/^[^/]*(?:\/|$)/,"/"),t),te=Dd({hostname:R,port:C}),Y=r$({hostname:R,port:C,protocol:d}),pe=e$({hash:o,hostname:R,password:k,pathname:ee,port:C,protocol:d,search:l,username:w}),we=X5(l),Fe=t$({pathname:ee});return{fullPath:mg({hash:o,pathname:ee,search:l}),hash:o,host:te,hostname:R,href:pe,origin:Y,password:k,pathname:ee,paths:Fe,port:C,protocol:d,search:l,searchParams:we,username:w}}i(Rs,"parseUrl");je({hash:tr(ct(void 0,"")),search:tr(ct(void 0,"",$d({keys:"",values:ct(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:tr(ct(void 0,"")),pathname:tr(ct(void 0,"")),paths:tr(ct(void 0,[""])),protocol:tr(ct(void 0,"")),username:tr(ct(void 0,"")),password:tr(ct(void 0,"")),port:tr(ct(void 0,"",-1))});function nP(e,t,r){const n=!!r,o=t==null||Wo(t,XN,{allowExtraKeys:!1}),s=o?Rs(""):M.instanceOf(e,URL)||M.isString(e)?Rs(e):e,a=o?e:t,l=M.isString(a)&&a.startsWith("."),u=M.isString(a)||M.instanceOf(a,URL)?zc(Rs(a),(y,w)=>M.isTruthy(w)):a,d=n?r:o?t:void 0,f=st(s,(y,w)=>{if(!M.hasKey(u,y))return w;const k=u[y];return M.isNumber(k)?String(k):M.isString(k)?y==="hash"&&k?kr({value:k,prefix:"#"}):y==="pathname"?kr({value:k,prefix:"/"}):k:w});M.hasKey(u,"paths")&&u.paths&&(f.pathname=hg(l?s.pathname:"",...u.paths));const h=M.isString(u.search)?X5(kr({value:u.search,prefix:"?"})):En(u.search||{}),m=eP(f.searchParams,h,{...d,encoding:ra.None}),g=rP(m,d);return{...f,searchParams:m,search:g,paths:t$(f),fullPath:mg(f),host:Dd(f),origin:r$(f),href:e$({...f,search:g})}}i(nP,"buildUrl");const oP=je({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:QN,hash:"",fullPath:"/",href:"/"});({...oP.default});const iP=0;function n$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==iP)}i(n$,"shouldClickEventTriggerRouteChange");const Ad="locationchange",mo=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const k1=mo?.pushState;function x1(...e){if(!k1)return;const t=k1.apply(mo,e);return globalThis.dispatchEvent(new Event(Ad)),t}i(x1,"newPushState");const D1=mo?.replaceState;function A1(...e){if(!D1)return;const t=D1.apply(mo,e);return globalThis.dispatchEvent(new Event(Ad)),t}i(A1,"newReplaceState");function sP(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!mo)){{if(mo.pushState===x1)throw new $1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(mo.replaceState===A1)throw new $1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,mo.pushState=x1,mo.replaceState=A1,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ad))})}}i(sP,"consolidateGlobalUrlEvents");function Cu(e,t){const r=Rs(e),n=Bi({value:Bi({value:r.pathname,prefix:kr({value:t||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,a=r.hash?Bi({value:r.hash,prefix:"#"}):void 0;return{paths:o,search:s,hash:a}}i(Cu,"parseUrlIntoRawRoute");class aP{static{i(this,"SpaRouter")}innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){kc(t,YN),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new O5({defaultValue:r,equalityCheck:i(()=>!1,"equalityCheck")}),sP(),this.removeGlobalListener=po(globalThis,Ad,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new JN("Looping route sanitization detected; aborting window URL change listener.");const n=Cu(globalThis.location.href,this.params.basePath),o=t.sanitizeRoute(n);M.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:hg(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Cu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Cu(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),s=this.routeIncludesBasePath(Cu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return nP(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?kr({value:s.hash,prefix:"#"}):""},{searchParamStrategy:na.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:o}=Rs(n);return this.params.isPaused||!r.force&&M.jsonEquals(Rs(globalThis.location.href).fullPath,o)?!1:r.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(t,r){return n$(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new fg(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function lP(e){return new aP({basePath:e,sanitizeRoute(t){return{paths:uP(t.paths),hash:void 0,search:void 0}}})}i(lP,"createBookRouter");function uP(e){const t=e[0];if(M.isEnumValue(t,Pr)){if(t===Pr.Book)return[Pr.Book,...e.slice(1)];if(t===Pr.Search)return e[1]?[t,e[1]]:[Pr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Vs.paths}i(uP,"sanitizePaths");const Ac=cg()("element-book-change-route"),v=Xn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function ne({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}i(ne,"defineIcon");const gg=ne({name:"Check24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function E1(e){return M.isPrimitive(e)||e instanceof qo?String(e):e.default}i(E1,"noRefColorInitToString");function Wn(e,t,r,n){const o=`${r.prefix}-default-fg`,s=`${r.prefix}-default-bg`;if(M.isPrimitive(t)||t instanceof qo)return t;if("refDefaultBackground"in t)return`var(--${s}, ${E1(r.background)})`;if("refDefaultForeground"in t)return`var(--${o}, ${E1(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const a=M.hasKey(t,"refBackground")?"refBackground":M.hasKey(t,"refForeground")?"refForeground":void 0,l=a&&M.hasKey(t,a)?t[a]:void 0,u=a==="refBackground"?"background":"foreground",d=l&&n[l];if(!d)throw new Error(`Color theme ${a} reference '${l}' does not exist. (Referenced from '${e}'.)`);const f=d[u]||(u==="foreground"?Wn(o,r.foreground,r,n):Wn(s,r.background,r,n));return`var(--${l}-${u==="foreground"?"fg":"bg"}, ${Wn(l,f,r,n)})`}else return t.value}i(Wn,"createColorCssVarDefault");const Nr="theme-default";function o$(e,t){try{if(Nr in t)throw new Error(`Cannot define theme color by name '${Nr}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,s=`${e.prefix}-default-inverse-bg`,a={[r]:Wn(r,e.foreground,e,t),[n]:Wn(n,e.background,e,t),[o]:Wn(o,e.background,e,t),[s]:Wn(s,e.foreground,e,t)},l=Xn(a),u=Nn(t).reduce((p,[y,w])=>{const k=C1(y),D=w.foreground?Wn([y,"foreground"].join(" "),w.foreground,e,t):`var(${l[r].name}, ${l[r].default})`,C=w.background?Wn([y,"background"].join(" "),w.background,e,t):`var(${l[n].name}, ${l[n].default})`;return p[k.foreground]=D,p[k.background]=C,p[k.foregroundInverse]=`var(--${k.background}, ${C})`,p[k.backgroundInverse]=`var(--${k.foreground}, ${D})`,p},{}),d=Xn(u),f={},h={};Nn(t).forEach(([p,y])=>{jt.isString(p);const w=C1(p),k=d[w.foreground],D=d[w.background],C=d[w.foregroundInverse],P=d[w.backgroundInverse];jt.isDefined(k),jt.isDefined(D),jt.isDefined(C),jt.isDefined(P),f[p]={foreground:k,background:D,init:y,name:p},h[p]={foreground:C,background:P,init:y,name:p}});const m={foreground:l[r],background:l[n],init:e,name:Nr},g={...m,foreground:l[o],background:l[s]};return{colors:{[Nr]:m,...f},inverse:{[Nr]:g,...h},init:{colors:t,default:e},prefix:e.prefix}}catch(r){throw globalThis.setTimeout(()=>w2.error(r)),r}}i(o$,"defineColorTheme");function C1(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}i(C1,"createCssVarNames");const c=Xn({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-0":"#f3f6f6","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"});function Pf({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:o}){const s=n?.[t];s&&(o[String(r[t].name)]=String(Wn(t,s,e.init.default,e.init.colors)))}i(Pf,"applyCssVarOverride");function cP(e,t,{defaultOverride:r,colorOverrides:n}){const o={};r&&Ve(r).forEach(u=>{Pf({originalTheme:e,layerKey:u,override:r,themeColor:e.colors[Nr],overrideValues:o})});const s={};n&&Nn(n).forEach(([u,d])=>{const f=e.colors[u];if(!f)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);Pf({originalTheme:e,layerKey:"foreground",override:d,themeColor:f,overrideValues:s}),Pf({originalTheme:e,layerKey:"background",override:d,themeColor:f,overrideValues:s})});const a=st(e.init.colors,(u,d)=>{const f=n?.[u];return{...d,...f}}),l=o$({...e.init.default,...r},a);return{name:t,overrides:{...o,...s},originalTheme:e,asTheme:l}}i(cP,"defineColorThemeOverride");const oe=o$({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:c["vira-red-90"]},"vira-red-foreground-body":{foreground:c["vira-red-80"]},"vira-red-foreground-non-body":{foreground:c["vira-red-60"]},"vira-red-foreground-header":{foreground:c["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-30"]},"vira-red-foreground-decoration":{foreground:c["vira-red-20"]},"vira-red-foreground-invisible":{foreground:c["vira-red-10"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-90"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-80"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-60"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-red-40"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-red-30"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-red-20"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-red-5"]},"vira-red-behind-fg-small-body":{background:c["vira-red-5"]},"vira-red-behind-fg-body":{background:c["vira-red-20"]},"vira-red-behind-fg-non-body":{background:c["vira-red-30"]},"vira-red-behind-fg-header":{background:c["vira-red-50"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-fg-decoration":{background:c["vira-red-80"]},"vira-red-behind-fg-invisible":{background:c["vira-red-90"]},"vira-red-on-self-body":{foreground:c["vira-red-90"],background:c["vira-red-10"]},"vira-red-on-self-non-body":{foreground:c["vira-red-90"],background:c["vira-red-20"]},"vira-red-on-self-header":{foreground:c["vira-red-90"],background:c["vira-red-40"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-90"],background:c["vira-red-50"]},"vira-red-on-self-decoration":{foreground:c["vira-red-90"],background:c["vira-red-70"]},"vira-red-on-self-invisible":{foreground:c["vira-red-90"],background:c["vira-red-80"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-90"]},"vira-orange-foreground-body":{foreground:c["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-60"]},"vira-orange-foreground-header":{foreground:c["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-10"]},"vira-orange-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-90"]},"vira-orange-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-80"]},"vira-orange-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-60"]},"vira-orange-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-orange-40"]},"vira-orange-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-orange-30"]},"vira-orange-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-orange-20"]},"vira-orange-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-orange-5"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-fg-body":{background:c["vira-orange-20"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-fg-header":{background:c["vira-orange-50"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-90"]},"vira-orange-on-self-body":{foreground:c["vira-orange-90"],background:c["vira-orange-10"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-90"],background:c["vira-orange-20"]},"vira-orange-on-self-header":{foreground:c["vira-orange-90"],background:c["vira-orange-40"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-90"],background:c["vira-orange-50"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-90"],background:c["vira-orange-70"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-90"],background:c["vira-orange-80"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:c["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-5"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-90"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-70"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-60"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-40"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-30"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-20"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-5"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-10"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-20"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-90"],background:c["vira-yellow-40"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-90"],background:c["vira-yellow-50"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-90"],background:c["vira-yellow-70"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-90"],background:c["vira-yellow-80"]},"vira-green-foreground-small-body":{foreground:c["vira-green-90"]},"vira-green-foreground-body":{foreground:c["vira-green-80"]},"vira-green-foreground-non-body":{foreground:c["vira-green-60"]},"vira-green-foreground-header":{foreground:c["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-30"]},"vira-green-foreground-decoration":{foreground:c["vira-green-20"]},"vira-green-foreground-invisible":{foreground:c["vira-green-5"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-90"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-70"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-60"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-green-40"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-green-30"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-green-20"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-green-5"]},"vira-green-behind-fg-small-body":{background:c["vira-green-5"]},"vira-green-behind-fg-body":{background:c["vira-green-20"]},"vira-green-behind-fg-non-body":{background:c["vira-green-30"]},"vira-green-behind-fg-header":{background:c["vira-green-50"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-fg-decoration":{background:c["vira-green-80"]},"vira-green-behind-fg-invisible":{background:c["vira-green-90"]},"vira-green-on-self-body":{foreground:c["vira-green-90"],background:c["vira-green-10"]},"vira-green-on-self-non-body":{foreground:c["vira-green-90"],background:c["vira-green-20"]},"vira-green-on-self-header":{foreground:c["vira-green-90"],background:c["vira-green-40"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-90"],background:c["vira-green-50"]},"vira-green-on-self-decoration":{foreground:c["vira-green-90"],background:c["vira-green-70"]},"vira-green-on-self-invisible":{foreground:c["vira-green-90"],background:c["vira-green-80"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-90"]},"vira-teal-foreground-body":{foreground:c["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-60"]},"vira-teal-foreground-header":{foreground:c["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-5"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-90"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-80"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-60"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-teal-40"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-teal-30"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-teal-20"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-teal-5"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-fg-body":{background:c["vira-teal-20"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-fg-header":{background:c["vira-teal-50"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-90"]},"vira-teal-on-self-body":{foreground:c["vira-teal-90"],background:c["vira-teal-10"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-90"],background:c["vira-teal-20"]},"vira-teal-on-self-header":{foreground:c["vira-teal-90"],background:c["vira-teal-40"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-90"],background:c["vira-teal-50"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-90"],background:c["vira-teal-70"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-90"],background:c["vira-teal-80"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-90"]},"vira-blue-foreground-body":{foreground:c["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-70"]},"vira-blue-foreground-header":{foreground:c["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-10"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-90"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-80"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-60"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-blue-40"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-blue-30"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-blue-20"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-blue-5"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-fg-body":{background:c["vira-blue-20"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-fg-header":{background:c["vira-blue-50"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-90"]},"vira-blue-on-self-body":{foreground:c["vira-blue-90"],background:c["vira-blue-10"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-90"],background:c["vira-blue-20"]},"vira-blue-on-self-header":{foreground:c["vira-blue-90"],background:c["vira-blue-40"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-90"],background:c["vira-blue-50"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-90"],background:c["vira-blue-70"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-90"],background:c["vira-blue-80"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-90"]},"vira-purple-foreground-body":{foreground:c["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-60"]},"vira-purple-foreground-header":{foreground:c["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-5"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-90"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-80"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-60"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-purple-40"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-purple-30"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-purple-20"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-purple-5"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-fg-body":{background:c["vira-purple-20"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-fg-header":{background:c["vira-purple-50"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-90"]},"vira-purple-on-self-body":{foreground:c["vira-purple-90"],background:c["vira-purple-10"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-90"],background:c["vira-purple-20"]},"vira-purple-on-self-header":{foreground:c["vira-purple-90"],background:c["vira-purple-40"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-90"],background:c["vira-purple-50"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-90"],background:c["vira-purple-70"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-90"],background:c["vira-purple-80"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-90"]},"vira-pink-foreground-body":{foreground:c["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-60"]},"vira-pink-foreground-header":{foreground:c["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-10"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-90"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-80"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-60"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-pink-40"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-pink-30"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-pink-20"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-pink-5"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-fg-body":{background:c["vira-pink-20"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-fg-header":{background:c["vira-pink-50"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-90"]},"vira-pink-on-self-body":{foreground:c["vira-pink-90"],background:c["vira-pink-10"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-90"],background:c["vira-pink-20"]},"vira-pink-on-self-header":{foreground:c["vira-pink-90"],background:c["vira-pink-40"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-90"],background:c["vira-pink-50"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-90"],background:c["vira-pink-70"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-90"],background:c["vira-pink-80"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-90"]},"vira-grey-foreground-body":{foreground:c["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-60"]},"vira-grey-foreground-header":{foreground:c["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-5"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-90"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-80"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-60"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-grey-40"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-grey-30"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-grey-20"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-grey-5"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-fg-body":{background:c["vira-grey-20"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-fg-header":{background:c["vira-grey-50"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-90"]},"vira-grey-on-self-body":{foreground:c["vira-grey-90"],background:c["vira-grey-10"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-90"],background:c["vira-grey-20"]},"vira-grey-on-self-header":{foreground:c["vira-grey-90"],background:c["vira-grey-40"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-90"],background:c["vira-grey-50"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-90"],background:c["vira-grey-70"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-90"],background:c["vira-grey-80"]}}),dP=cP(oe,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:c["vira-red-5"]},"vira-red-foreground-body":{foreground:c["vira-red-20"]},"vira-red-foreground-non-body":{foreground:c["vira-red-30"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-60"]},"vira-red-foreground-decoration":{foreground:c["vira-red-80"]},"vira-red-foreground-invisible":{foreground:c["vira-red-90"]},"vira-red-behind-bg-small-body":{background:c["vira-red-5"]},"vira-red-behind-bg-body":{background:c["vira-red-20"]},"vira-red-behind-bg-non-body":{background:c["vira-red-30"]},"vira-red-behind-bg-header":{background:c["vira-red-50"]},"vira-red-behind-bg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-bg-decoration":{background:c["vira-red-80"]},"vira-red-behind-bg-invisible":{background:c["vira-red-90"]},"vira-red-behind-fg-small-body":{background:c["vira-red-90"]},"vira-red-behind-fg-body":{background:c["vira-red-80"]},"vira-red-behind-fg-non-body":{background:c["vira-red-60"]},"vira-red-behind-fg-header":{background:c["vira-red-40"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-30"]},"vira-red-behind-fg-decoration":{background:c["vira-red-20"]},"vira-red-behind-fg-invisible":{background:c["vira-red-5"]},"vira-red-on-self-body":{foreground:c["vira-red-5"],background:c["vira-red-90"]},"vira-red-on-self-non-body":{foreground:c["vira-red-5"],background:c["vira-red-70"]},"vira-red-on-self-header":{foreground:c["vira-red-5"],background:c["vira-red-60"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-5"],background:c["vira-red-40"]},"vira-red-on-self-decoration":{foreground:c["vira-red-5"],background:c["vira-red-30"]},"vira-red-on-self-invisible":{foreground:c["vira-red-5"],background:c["vira-red-10"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-5"]},"vira-orange-foreground-body":{foreground:c["vira-orange-20"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-30"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-60"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-80"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-90"]},"vira-orange-behind-bg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-bg-body":{background:c["vira-orange-20"]},"vira-orange-behind-bg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-bg-header":{background:c["vira-orange-50"]},"vira-orange-behind-bg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-bg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-bg-invisible":{background:c["vira-orange-90"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-90"]},"vira-orange-behind-fg-body":{background:c["vira-orange-80"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-60"]},"vira-orange-behind-fg-header":{background:c["vira-orange-40"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-30"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-20"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-5"]},"vira-orange-on-self-body":{foreground:c["vira-orange-5"],background:c["vira-orange-90"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-5"],background:c["vira-orange-70"]},"vira-orange-on-self-header":{foreground:c["vira-orange-5"],background:c["vira-orange-60"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-5"],background:c["vira-orange-40"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-5"],background:c["vira-orange-30"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-5"],background:c["vira-orange-10"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-5"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-30"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-90"]},"vira-yellow-behind-bg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-bg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-bg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-bg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-bg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-bg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-bg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-70"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-40"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-90"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-70"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-5"],background:c["vira-yellow-60"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-5"],background:c["vira-yellow-40"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-5"],background:c["vira-yellow-30"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-5"],background:c["vira-yellow-10"]},"vira-green-foreground-small-body":{foreground:c["vira-green-5"]},"vira-green-foreground-body":{foreground:c["vira-green-20"]},"vira-green-foreground-non-body":{foreground:c["vira-green-30"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-60"]},"vira-green-foreground-decoration":{foreground:c["vira-green-80"]},"vira-green-foreground-invisible":{foreground:c["vira-green-90"]},"vira-green-behind-bg-small-body":{background:c["vira-green-5"]},"vira-green-behind-bg-body":{background:c["vira-green-20"]},"vira-green-behind-bg-non-body":{background:c["vira-green-30"]},"vira-green-behind-bg-header":{background:c["vira-green-50"]},"vira-green-behind-bg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-bg-decoration":{background:c["vira-green-80"]},"vira-green-behind-bg-invisible":{background:c["vira-green-90"]},"vira-green-behind-fg-small-body":{background:c["vira-green-90"]},"vira-green-behind-fg-body":{background:c["vira-green-70"]},"vira-green-behind-fg-non-body":{background:c["vira-green-60"]},"vira-green-behind-fg-header":{background:c["vira-green-40"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-30"]},"vira-green-behind-fg-decoration":{background:c["vira-green-20"]},"vira-green-behind-fg-invisible":{background:c["vira-green-5"]},"vira-green-on-self-body":{foreground:c["vira-green-5"],background:c["vira-green-90"]},"vira-green-on-self-non-body":{foreground:c["vira-green-5"],background:c["vira-green-70"]},"vira-green-on-self-header":{foreground:c["vira-green-5"],background:c["vira-green-60"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-5"],background:c["vira-green-40"]},"vira-green-on-self-decoration":{foreground:c["vira-green-5"],background:c["vira-green-30"]},"vira-green-on-self-invisible":{foreground:c["vira-green-5"],background:c["vira-green-10"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-5"]},"vira-teal-foreground-body":{foreground:c["vira-teal-20"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-30"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-60"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-80"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-90"]},"vira-teal-behind-bg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-bg-body":{background:c["vira-teal-20"]},"vira-teal-behind-bg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-bg-header":{background:c["vira-teal-50"]},"vira-teal-behind-bg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-bg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-bg-invisible":{background:c["vira-teal-90"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-90"]},"vira-teal-behind-fg-body":{background:c["vira-teal-80"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-60"]},"vira-teal-behind-fg-header":{background:c["vira-teal-40"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-30"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-20"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-5"]},"vira-teal-on-self-body":{foreground:c["vira-teal-5"],background:c["vira-teal-90"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-5"],background:c["vira-teal-70"]},"vira-teal-on-self-header":{foreground:c["vira-teal-5"],background:c["vira-teal-60"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-5"],background:c["vira-teal-40"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-5"],background:c["vira-teal-30"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-5"],background:c["vira-teal-10"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-5"]},"vira-blue-foreground-body":{foreground:c["vira-blue-20"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-30"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-60"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-80"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-90"]},"vira-blue-behind-bg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-bg-body":{background:c["vira-blue-20"]},"vira-blue-behind-bg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-bg-header":{background:c["vira-blue-50"]},"vira-blue-behind-bg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-bg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-bg-invisible":{background:c["vira-blue-90"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-90"]},"vira-blue-behind-fg-body":{background:c["vira-blue-80"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-60"]},"vira-blue-behind-fg-header":{background:c["vira-blue-40"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-30"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-20"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-5"]},"vira-blue-on-self-body":{foreground:c["vira-blue-5"],background:c["vira-blue-90"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-5"],background:c["vira-blue-70"]},"vira-blue-on-self-header":{foreground:c["vira-blue-5"],background:c["vira-blue-60"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-5"],background:c["vira-blue-40"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-5"],background:c["vira-blue-30"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-5"],background:c["vira-blue-10"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-5"]},"vira-purple-foreground-body":{foreground:c["vira-purple-20"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-30"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-60"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-80"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-90"]},"vira-purple-behind-bg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-bg-body":{background:c["vira-purple-20"]},"vira-purple-behind-bg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-bg-header":{background:c["vira-purple-50"]},"vira-purple-behind-bg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-bg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-bg-invisible":{background:c["vira-purple-90"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-90"]},"vira-purple-behind-fg-body":{background:c["vira-purple-80"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-60"]},"vira-purple-behind-fg-header":{background:c["vira-purple-40"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-30"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-20"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-5"]},"vira-purple-on-self-body":{foreground:c["vira-purple-5"],background:c["vira-purple-90"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-5"],background:c["vira-purple-70"]},"vira-purple-on-self-header":{foreground:c["vira-purple-5"],background:c["vira-purple-60"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-5"],background:c["vira-purple-40"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-5"],background:c["vira-purple-30"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-5"],background:c["vira-purple-10"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-5"]},"vira-pink-foreground-body":{foreground:c["vira-pink-20"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-30"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-60"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-80"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-90"]},"vira-pink-behind-bg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-bg-body":{background:c["vira-pink-20"]},"vira-pink-behind-bg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-bg-header":{background:c["vira-pink-50"]},"vira-pink-behind-bg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-bg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-bg-invisible":{background:c["vira-pink-90"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-90"]},"vira-pink-behind-fg-body":{background:c["vira-pink-80"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-60"]},"vira-pink-behind-fg-header":{background:c["vira-pink-40"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-30"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-20"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-5"]},"vira-pink-on-self-body":{foreground:c["vira-pink-5"],background:c["vira-pink-90"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-5"],background:c["vira-pink-70"]},"vira-pink-on-self-header":{foreground:c["vira-pink-5"],background:c["vira-pink-60"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-5"],background:c["vira-pink-40"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-5"],background:c["vira-pink-30"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-5"],background:c["vira-pink-10"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-5"]},"vira-grey-foreground-body":{foreground:c["vira-grey-20"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-30"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-60"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-80"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-90"]},"vira-grey-behind-bg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-bg-body":{background:c["vira-grey-20"]},"vira-grey-behind-bg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-bg-header":{background:c["vira-grey-50"]},"vira-grey-behind-bg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-bg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-bg-invisible":{background:c["vira-grey-90"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-90"]},"vira-grey-behind-fg-body":{background:c["vira-grey-80"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-60"]},"vira-grey-behind-fg-header":{background:c["vira-grey-40"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-30"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-20"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-5"]},"vira-grey-on-self-body":{foreground:c["vira-grey-5"],background:c["vira-grey-90"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-5"],background:c["vira-grey-70"]},"vira-grey-on-self-header":{foreground:c["vira-grey-5"],background:c["vira-grey-60"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-5"],background:c["vira-grey-40"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-5"],background:c["vira-grey-30"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-5"],background:c["vira-grey-10"]}}}),S1="8px",I=Xn({"vira-form-border-color":oe.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":oe.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":oe.colors[Nr].background.value,"vira-form-foreground-color":oe.colors[Nr].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":oe.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":oe.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":oe.colors["vira-blue-behind-bg-invisible"].background.value,"vira-form-selection-active-color":oe.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-error-color":oe.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":oe.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":oe.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":oe.colors["vira-orange-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":oe.colors["vira-orange-behind-bg-header"].background.value,"vira-form-warning-active-color":oe.colors["vira-orange-behind-bg-body"].background.value,"vira-form-positive-color":oe.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":oe.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":oe.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":oe.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":S1,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":oe.colors["vira-blue-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":E`calc(var(--vira-form-radius, ${xe(S1)}) + 2px)`,"vira-form-plain-color":c["vira-grey-0"].value,"vira-form-plain-hover-color":oe.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":oe.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":oe.colors["vira-blue-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":oe.colors["vira-blue-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":oe.colors["vira-blue-behind-bg-body"].background.value,"vira-form-danger-color":oe.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":oe.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":oe.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":oe.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":oe.colors["vira-grey-foreground-decoration"].foreground.value}),oa=E`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,$o=Xn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function tu({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const o=xe(hl(r+t+e)),s=E`
        content: '';
        top: calc(${o} * -1);
        left: calc(${o} * -1);
        position: absolute;
        width: calc(100% + calc(${o} * 2));
        height: calc(100% + calc(${o} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${I["vira-form-focus-outline-color"].value};
        border-radius: ${I["vira-form-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?s:E`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${s}
        }
    `}i(tu,"createFocusStyles");const pg=Xn({"vira-monospace":"monospace"});function M1(e){if(typeof e=="string")return fP(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}i(M1,"colorParsley");function fP(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let a={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let l in a)if(e==l){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:i(function(f){for(let h=0;h<3;h++)n[h]=parseInt(f[h+1],16);return n[3]=1,!0},"sprig")},d=u.rex.exec(a[l]);return n[4]=t=u.sprig(d),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:i(function(a){let l=0,u=0,d=10,f=100,h=2.55,m="1";a[23]&&(m=a[23],delete a[23]),n[3]=m.match(/%/g)?parseFloat(m)/f:parseFloat(m);for(let g=1;g<a.length;g++)a[g]&&(l=l||g,u=g);switch(u){case 4:d=16,f=15,n[3]=parseInt(a[u],d)/f;case 3:d=16;for(let g=0;g<3;g++)n[g]=parseInt(a[l+g]+a[l+g],d);break;case 5:d=16;case 9:n[0]=n[1]=n[2]=d==10?parseFloat(a[u]):parseInt(a[u],d);break;case 12:n[0]=n[1]=n[2]=parseFloat(a[u])*h;break;case 8:d=16,f=255,n[3]=parseInt(a[8],d)/f;case 7:d=16;case 11:for(let g=0;g<3;g++)n[g]=d==10?parseFloat(a[l+g]):parseInt(a[l+g],d);break;case 14:for(let g=0;g<3;g++)n[g]=parseFloat(a[l+g])*h;break;case 18:n[5]=a[15];for(let g=0;g<3;g++)l++,n[g]=a[l].match(/%/g)?parseFloat(a[l])*2.55:parseFloat(a[l])*255;break;case 22:n[5]=a[l];for(let g=0;g<3;g++)l++,n[g]=a[l]?a[l].match(/%/g)?parseFloat(a[l])/f:parseFloat(a[l]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let C=function(P){let R=(P+D/30)%12,J=g*Math.min(p,1-p);return p-J*Math.max(-1,Math.min(R-3,9-R,1))};i(C,"f");let g,p,y,w,k,D=n[0]%360;if(D<0&&(D+=360),n[5].match(/^hsla?/i))g=n[1],p=n[2],y=0,k=1;else if(n[5].match(/^hwba?/i)){if(y=n[1],w=n[2],y+w>=1){n[0]=n[1]=n[2]=y/(y+w),n[5]="sRGB";break}g=1,p=.5,k=1-y-w}n[0]=Math.round(255*(C(0)*k+y)),n[1]=Math.round(255*(C(8)*k+y)),n[2]=Math.round(255*(C(4)*k+y)),n[5]="sRGB"}break}return!0},"parsley")},s=o.rex.exec(e);return s?(n[4]=t=o.parsley(s),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}i(fP,"parseString");const xt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function hP(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let o=0,s=0,a="BoW";return e=e>xt.blkThrs?e:e+Math.pow(xt.blkThrs-e,xt.blkClmp),t=t>xt.blkThrs?t:t+Math.pow(xt.blkThrs-t,xt.blkClmp),Math.abs(t-e)<xt.deltaYmin?0:(t>e?(o=(Math.pow(t,xt.normBG)-Math.pow(e,xt.normTXT))*xt.scaleBoW,s=o<xt.loClip?0:o-xt.loBoWoffset):(a="WoB",o=(Math.pow(t,xt.revBG)-Math.pow(e,xt.revTXT))*xt.scaleWoB,s=o>-.1?0:o+xt.loWoBoffset),r<0?s*100:r==0?Math.round(Math.abs(s)*100)+"<sub>"+a+"</sub>":Number.isInteger(r)?(s*100).toFixed(r):0)}i(hP,"APCAcontrast");function mP(e,t,r=-1,n=!0){let o=M1(t),s=M1(e);return!(s[3]==""||s[3]==1)&&(s=pP(s,o,n)),hP(F1(s),F1(o),r)}i(mP,"calcAPCA");function gP(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],s=[0,100,200,300,400,500,600,700,800,900].length;let a=[e.toFixed(t),0,0,0,0,0,0,0,0,0];a.length;let l=777;e=Math.abs(e);const u=.2,d=e==0?1:e*u|0;let f=0,h=(e-r[d][f])*u;for(f++;f<s;f++)l=r[d][f],l>400?a[f]=l:e<14.5?a[f]=999:e<29.5?a[f]=777:l>24?a[f]=Math.round(l-n[d][f]*h):a[f]=l-(2*n[d][f]*h|0)*.5;return a}i(gP,"fontLookupAPCA");function F1(e=[0,0,0]){function t(r){return Math.pow(r/255,xt.mainTRC)}return i(t,"simpleExp"),xt.sRco*t(e[0])+xt.sGco*t(e[1])+xt.sBco*t(e[2])}i(F1,"sRGBtoY");function pP(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let s=0;s<3;s++)o[s]=t[s]*n+e[s]*e[3],r&&(o[s]=Math.min(Math.round(o[s]),255));return o}i(pP,"alphaBlend");const i$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};st(i$,e=>e);Object.fromEntries(Object.entries(i$).map(([e,t])=>[t,e]));const T1=new Map;function bP({background:e,foreground:t}){const r=`${t}|${e}`,n=T1.get(r);if(n)return n;const o=$2(Number(mP(t,e)),{digits:1}),s={contrast:o,fontSizes:yP(o),contrastLevel:vP(o)};return T1.set(r,s),s}i(bP,"calculateContrast");function yP(e){const t=gP(e).slice(1);return Qo(t,(n,o)=>({key:(o+1)*100,value:n}))}i(yP,"calculateFontSizes");function vP(e){return bt.isDefined(Ed.find(t=>t.min<=Math.abs(e)))}i(vP,"determineContrastLevel");var he;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(he||(he={}));const wP={[he.SmallBodyText]:"Small Text",[he.BodyText]:"Body Text",[he.NonBodyText]:"Non-body Text",[he.Header]:"Header",[he.Placeholder]:"Placeholder",[he.Decoration]:"Decoration",[he.Invisible]:"Invisible"};he.SmallBodyText,he.BodyText,he.NonBodyText,he.Header,he.Placeholder,he.Decoration,he.Invisible;const Ed=[{min:90,name:he.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:he.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:he.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:he.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:he.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:he.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:he.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Qo(Ed,e=>({key:e.min,value:e}));Qo(Ed,e=>({key:e.name,value:e}));const $P=qr(he).sort((e,t)=>Number(t.includes("-"))-Number(e.includes("-"))),kP=Ic(yn(Object.keys(oe.colors),e=>e.split("-")[1],e=>e!=="default")).filter(M.isTruthy),As=Qo(kP,e=>({key:e,value:e}),{}),xP=Ve(oe.colors),dr=p2(As,e=>{const t=Ic(yn(xP,r=>$P.reduce((n,o)=>qh({value:n,suffix:`-${o}`}),Bi({value:r,prefix:`vira-${e}-`})),(r,n)=>n.startsWith(`vira-${e}-`)));return Qo(t,r=>({key:r,value:Qo(qr(he),n=>{const o=`vira-${e}-${r}-${n}`;if(M.hasKey(oe.colors,o))return{key:n,value:oe.colors[o]}})}))});var dn=(e=>(e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none",e))(dn||{});const N1={accent:As.blue,neutral:As.grey,danger:As.red,warning:As.orange,positive:As.green},P1=["accent","plain","neutral","danger","warning","positive"];var Ei=(e=>(e.Large="large",e.Medium="medium",e.Small="small",e.None="none",e))(Ei||{});const DP=["small","medium","large"];var Vo=(e=>(e.Standard="standard",e.Subtle="subtle",e.None="none",e))(Vo||{});const AP=["standard","subtle"],If={large:40,medium:32,small:24},ru=E`
    padding: 0;
    margin: 0;
`,Rt=E`
    ${ru};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Of=Xn({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Li={menuShadow:E`
        filter: drop-shadow(0px 5px 5px ${Of["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:E`
        filter: drop-shadow(0px -5px 5px ${Of["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:E`
        box-shadow: 0 5px 15px ${Of["modal-shadow-color"].value};
    `},oi=E`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,I1="vira-",rt=K5({assertInputs:i(e=>{if(!e.tagName.startsWith(I1))throw new Error(`Tag name should start with '${I1}' but got '${e.tagName}'`)},"assertInputs")}),B=rt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":i(({inputs:e})=>!!e.fitContainer,"vira-icon-fit-container")},styles:i(({hostClasses:e})=>E`
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
    `,"styles"),render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Jo=rt()({tagName:"vira-menu-item",state(){return{cleanup:void 0}},hostClasses:{"vira-menu-item-selected":i(({inputs:e})=>!!e.selected||!!e.iconOverride,"vira-menu-item-selected"),"vira-menu-item-disabled":i(({inputs:e})=>!!e.disabled,"vira-menu-item-disabled"),"vira-menu-item-enabled":i(({inputs:e})=>!e.disabled,"vira-menu-item-enabled"),"vira-menu-item-default-icon":i(({inputs:e})=>!e.iconOverride,"vira-menu-item-default-icon"),"vira-menu-item-default-styles":i(({inputs:e})=>!e.disablePointerStyles,"vira-menu-item-default-styles")},styles:i(({hostClasses:e})=>E`
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
                background-color: ${I["vira-form-selection-hover-color"].value};
                outline: none;
            }

            &:host(:active) {
                background-color: ${I["vira-form-selection-active-color"].value};
                outline: none;
            }
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
    `,"styles"),init({state:e,updateState:t,host:r,inputs:n}){r.setAttribute("role","menuitem"),r.setAttribute("tabindex",n.disabled?"-1":"0"),r.setAttribute("aria-selected",String(!!n.selected)),r.setAttribute("aria-disabled",String(!!n.disabled)),e.cleanup?.();const o={};function s(l){if(o[l.type])return;if(n.disabled){l.preventDefault(),l.stopPropagation();return}bt.instanceOf(r.shadowRoot.querySelector("slot"),HTMLSlotElement).assignedElements({flatten:!0}).forEach(d=>{d instanceof HTMLElement&&!l.composedPath().includes(d)&&(l.preventDefault(),l.stopPropagation(),o[l.type]=!0,d.dispatchEvent(new MouseEvent(l.type,l)),delete o[l.type])})}i(s,"propagateMouseEvent");const a=[po(r,"click",s),po(r,"mousedown",s),po(r,"mouseenter",()=>{n.disabled||r.focus()}),po(r,"mouseleave",()=>{n.disabled||r.blur()})];t({cleanup:i(()=>{a.forEach(l=>l())},"cleanup")})},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({inputs:e}){return b`
            <${B.assign({icon:e.iconOverride||gg})}></${B}>
            <div class="slot-wrapper">
                <slot>&nbsp;</slot>
            </div>
        `}});var s$=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(s$||{}),Ml=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Ml||{});const ji=rt()({tagName:"vira-menu",hostClasses:{"vira-menu-open-upwards":i(({inputs:e})=>e.direction==="upwards","vira-menu-open-upwards"),"vira-menu-rounded":i(({inputs:e})=>e.cornerStyle==="all-rounded","vira-menu-rounded"),"vira-menu-square":i(({inputs:e})=>e.cornerStyle==="all-square","vira-menu-square")},styles:i(({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            overscroll-behavior: contain;
            border-radius: ${I["vira-form-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${I["vira-form-background-color"].value};
            border: 1px solid ${I["vira-form-border-color"].value};
            color: ${I["vira-form-foreground-color"].value};
            ${Li.menuShadow}
        }

        ${e["vira-menu-open-upwards"].selector} {
            ${Li.menuShadowReversed}
            border-radius: ${I["vira-form-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-menu-rounded"].selector} {
            border-radius: ${I["vira-form-radius"].value};
        }
    `,"styles"),render(){return b`
            <slot>&nbsp;</slot>
        `}});function EP(e,t){return e>t}i(EP,"greaterThan");function CP(e,t){return e<t}i(CP,"lessThan");function Fl(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}i(Fl,"focusElement");var Zn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Zn||(Zn={}));var Be;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Be||(Be={}));function Cd(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const o=n[t.x];if(o)if(o.navEntry.navParams.group){const s=Cd(o.children);s&&(r=s.node)}else o.navEntry.navParams.disabled||(r=o)}}if(r)return{node:r,coords:t}}i(Cd,"findDefaultChild");function O1(e,t,r,n){if(!t){const u=Cd(e.children);return u?(Fl(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:Be.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Be.Navigate}}const{nextNode:o,requiresWrapping:s,coords:a}=a$(t.position,r),l=n?!0:!s;return o&&l?(Fl(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:s,direction:r,navAction:Be.Navigate,coords:a}):o?l?{success:!1,reason:"no conditions matched",direction:r,navAction:Be.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Be.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Be.Navigate}}i(O1,"navigate");function a$(e,t){let r=!1,n,o=1;const s=Date.now();for(;!r||!n;)if(n=SP(e,t,o),r=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-s>1e3)return w2.warning("Failed to find next non-disabled node."),n;return n}i(a$,"calculateNextNode");function SP(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;jt.isDefined(n,"missing parent");const o=bt.isDefined(n.children[e.nodeCoords.y]),s=n.children.length>1&&(t===Zn.Down||t===Zn.Up),a=t===Zn.Down||t===Zn.Right?r:-1*r,l=a<0?EP:CP,u=s?Bp(e.nodeCoords.y+a,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,d=bt.isDefined(n.children[u]),f=s?e.nodeCoords.x>=d.length?d.length-1:e.nodeCoords.x:Bp(e.nodeCoords.x+a,{min:0,max:o.length-1,takeOverflow:!0}),h=n.children[u]?.[f],m=s?l(u,e.nodeCoords.y):l(f,e.nodeCoords.x);return{nextNode:h,requiresWrapping:m,coords:{x:f,y:u}}}i(SP,"innerCalculateNextNode");function MP(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Be.Pibling};const{nextNode:o,requiresWrapping:s,coords:a}=a$(n,t),l=o?.navEntry.navParams.group?Cd(o.children):{node:o,coords:a},u=r?!0:!s;return!l||!l.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Be.Pibling}:u?(Fl(l.node.element),{success:!0,defaulted:!1,newElement:l.node.element,wrapped:s,coords:l.coords,direction:t,navAction:Be.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Be.Pibling}}i(MP,"navigatePibling");var lo;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(lo||(lo={}));const Bf={name:"data-nav"},l$="navEntry";function FP(e){return l$ in e}i(FP,"hasNavEntry");function TP(e){if(FP(e)){const t=e[l$];return bt.instanceOf(t,PP,"Invalid nav entry")}else return}i(TP,"extractNavEntry");function NP(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==lo.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}i(NP,"createEventListener");class PP{static{i(this,"NavEntry")}element;navParams;navTreeNode;navValue;eventListener=NP(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return jt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Bf.name,""),Tf(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,o=t===(n===lo.Focused);if(!(this.navParams.group||this.navController.locked||o||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(lo.Focused),Tf(this.element)||this.element.focus()):(this.removeNavValue(lo.Focused),Tf(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Be.Focus)}activate(t){const r=this.navValue,n=t===(r===lo.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(lo.Active):this.setNavValue(lo.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Be.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Bf.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Bf.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function IP(e,t){Object.entries(t).forEach(([r,n])=>{M.isBoolean(n)&&n?e.setAttribute(r,""):M.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}i(IP,"applyAttributes");function OP(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Be.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Be.Enter};const r=t.position.node.children[0]?.[0];return r?(Fl(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Be.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Be.Enter}}i(OP,"enterInto");function BP(e,t){return u$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}i(BP,"walkNavTree");function u$(e,t,r){for(let n=0;n<t.length;n++){const o=t[n];for(let s=0;s<o.length;s++){const a=o[s],l={ancestorChain:e,nodeCoords:{x:s,y:n},node:a};if(r(l))return l;const u=u$(e.concat(l),a.children,r);if(u)return u}}}i(u$,"walkRecursively");function c$(e,t){const r=BP(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}i(c$,"findNavTreeNodeByNavEntry");function RP(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Be.Exit};const r=t.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Be.Exit};const{nodeCoords:n}=c$(e,r.navEntry);return Fl(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Be.Exit,coords:n}}i(RP,"exitOutOf");class LP extends jn()("nav-exit"){static{i(this,"NavExitEvent")}}class d$ extends jn()("nav-activate"){static{i(this,"NavActivateEvent")}}class jP extends jn()("nav-focus"){static{i(this,"NavFocusEvent")}}class _P extends jn()("nav-enter"){static{i(this,"NavEnterEvent")}}class UP extends jn()("nav-navigate"){static{i(this,"NavigateEvent")}}class zP extends jn()("nav-navigate-pibling"){static{i(this,"NavPiblingEvent")}}function VP(e){return{root:!0,children:f$(e)?.children||[]}}i(VP,"mapTree");function f$(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=TP(t),n=qP(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}i(f$,"mapTreeRecursively");function qP(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(l=>l.forEach(u=>r(u)));return}const o=n.navEntry.navParams.x,s=n.navEntry.navParams.y||0,a=ts(t,s,()=>({noX:[],withX:[],y:s}));o==null?a.noX.push(n):a.withX.push({x:o,node:n})}return i(r,"pushNode"),e.children.forEach(n=>{const o=f$(n);o&&r(o)}),t.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,s)=>o.x-s.x),n.withX.forEach(({x:o,node:s})=>{n.noX.splice(o,0,s)}),n.noX)).filter(M.isTruthy)}i(qP,"expandChildren");class WP extends Kh{static{i(this,"NavController")}rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Cd(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=c$(this.getNavTree(),t);r?(this.navEntries.forEach(a=>{a!==t&&a.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:o}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const s={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return r&&(n===Be.Activate?this.dispatch(new d$({detail:s})):n===Be.Focus&&this.dispatch(new jP({detail:s}))),s}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Be.Navigate,reason:"NavController is locked."};const n=O1(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new UP({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Be.Enter,reason:"NavController is locked."};const r=OP(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new _P({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Be.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Be.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return jt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Be.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Be.Activate&&this.currentNavEntry.entry.focus(!0);const t=RP(this.getNavTree(),this.currentNavEntry);return this.dispatch(new LP({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Be.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),s={...this.currentNavEntry?MP(this.currentNavEntry,r,t):O1(n,void 0,r,t),navAction:Be.Pibling};return this.dispatch(new zP({detail:s})),s}buildNavTree(){const t=UN(this.rootElement),r=VP(t);return this.cachedNavTree=r,r}}function B1({open:e,callback:t,popUpManager:r,host:n,options:o}){if(e){const s=r.showPopUp(n,o);t?.(s)}else r.removePopUp(),t?.(void 0)}i(B1,"triggerPopUpState");function h$(e){return yn(e,(t,r)=>b`
                <${Jo.assign({...t})}
                    ${U("click",async n=>{await t.onClick?.({event:n,index:r})})}
                >
                    ${t.content}
                </${Jo}>
            `,(t,r)=>!r.hidden)}i(h$,"renderMenuItemEntries");const Su=globalThis.document;class KP extends O5{static{i(this,"PageActiveObservable")}constructor(){if(super({defaultValue:!!Su?.hidden,equalityCheck:M.strictEquals}),!Su)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,Su));const t=i(r=>this.updateVisibility(r,Su),"visibilityHandler");globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=HP.includes(t.type),o=GP.includes(t.type),s=n?!0:o?!1:r.hasFocus()||!r.hidden;this.setValue(s)}}const GP=["blur","focusout","pagehide"],HP=["focus","focusin","pageshow"],ZP=new KP;function JP(e,t){return ZP.listen(e,t)}i(JP,"listenToPageActivation");function uh(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}i(uh,"isInputLikeElement");const R1={top:0,left:0,right:0,bottom:0};class m$ extends Wh("hide-pop-up"){static{i(this,"HidePopUpEvent")}}class g$ extends jn()("nav-select"){static{i(this,"NavSelectEvent")}}class YP{static{i(this,"PopUpManager")}constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new Kh;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[JP(!1,t=>{t||this.removePopUp()}),this.navController.listen(d$,t=>{const r=t.composedPath()[0];r instanceof Element&&uh(r)||t.detail.success&&(this.listenTarget.dispatch(new g$({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),I0("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),I0("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&uh(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Zn.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Zn.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Zn.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Zn.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new m$)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},o=VN(t);jt.instanceOf(o,HTMLElement);const s=t.getBoundingClientRect(),a=o.getBoundingClientRect(),l=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,d=o===document.body?{top:0,left:0,right:a.width,bottom:a.height}:{top:a.top,left:a.left,right:a.right-l,bottom:a.bottom-u},f=st(R1,p=>s[p]),h=st(R1,p=>{const y=d[p],w=f[p];return Math.abs(y-w)}),m=h.top>h.bottom+n.verticalDiffThreshold&&h.bottom<n.minDownSpace,g=h.left>h.right+n.horizontalDiffThreshold&&h.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!m,popRight:!g,positions:{container:d,root:f,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var _i=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(_i||{});const fe=rt()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new YP(new WP(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-disabled")},styles:i(({hostClasses:e})=>E`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Rt};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${tu({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${oi};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${oa}
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
    `,"styles"),events:{navSelect:tt(),openChange:tt(),init:tt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:o,events:s}){e.popUpManager.listen(m$,()=>{if(t({showPopUpResult:void 0}),o(new s.openChange(void 0)),!n.isDisabled){const a=r.shadowRoot.querySelector(".dropdown-wrapper");jt.instanceOf(a,HTMLButtonElement,"failed to find dropdown wrapper child"),a.focus()}}),e.popUpManager.listen(g$,a=>{n.keepOpenAfterInteraction||B1({open:!1,callback(l){t({showPopUpResult:l})},host:r,popUpManager:e.popUpManager}),o(new s.navSelect(a.detail))}),o(new s.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:o,host:s,slotNames:a}){function l({emitEvent:p,open:y},w){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&w){const k=s.shadowRoot.querySelector(".dropdown-trigger");if(k&&!w.composedPath().includes(k))return}B1({open:y,callback(k){o({showPopUpResult:k}),p&&e(new t.openChange(k))},host:s,popUpManager:r.popUpManager})}i(l,"triggerPopUp"),n.isDisabled?l({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?l({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&l({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,d=u==="right"&&r.showPopUpResult?n.ignoreMaxWidth?E`
                          left: unset;
                      `:E`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:E`
                      left: ${n.popUpOffset?.left||0}px;
                  `,f=r.showPopUpResult&&u==="left"?n.ignoreMaxWidth?E`
                          right: unset;
                      `:E`
                          right: -${r.showPopUpResult.positions.diff.right}px;
                      `:E`
                      right: ${n.popUpOffset?.right||0}px;
                  `,h=E`
            ${d}
            ${f}
        `,m=r.showPopUpResult?r.showPopUpResult.popDown?n.ignoreMaxHeight?E`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:E`
                          bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:n.ignoreMaxHeight?E`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:E`
                        top: -${r.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:void 0;function g(p){l({emitEvent:!0,open:!r.showPopUpResult},p)}return i(g,"respondToClick"),b`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Dr({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${U("keydown",p=>{!r.showPopUpResult&&p.code.startsWith("Arrow")&&l({emitEvent:!0,open:!0},p)})}
                ${U("click",p=>{if(p.detail===0){let y=!1;if(qN(({element:w})=>uh(w)?(y=!0,!0):!1),y)return;g(p)}else if(p.button===0&&r.showPopUpResult){const y=s.shadowRoot.querySelector(".dropdown-trigger");y&&!p.composedPath().includes(y)&&l({emitEvent:!0,open:!1},p)}})}
                ${U("mousedown",p=>{if(p.button!==0)return;const y=bt.instanceOf(s.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);p.composedPath().includes(y)&&g(p)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${a.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${Dr({"right-aligned":u==="right"})}"
                    style=${m}
                >
                    ${Br(!!r.showPopUpResult,b`
                            <slot name=${a.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),Mu=rt()({tagName:"vira-menu-trigger",slotNames:["trigger"],styles:E`
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
    `,events:{openChange:tt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:o,slotNames:s}){return b`
            <${fe.assign({...e})}
                class=${Dr({open:!!t.showPopUpResult})}
                ${U(fe.events.init,a=>{r({navController:a.detail.navController,popUpManager:a.detail.popUpManager})})}
                ${U(fe.events.openChange,a=>{!!t.showPopUpResult!=!!a.detail&&n(new o.openChange(a.detail)),r({showPopUpResult:a.detail})})}
            >
                <slot name=${s.trigger} slot=${fe.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?b`
                          <${ji.assign({direction:t.showPopUpResult.popDown?Ml.Downwards:Ml.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${fe.slotNames.popUp}
                              class=${Dr({"full-width-menu":e.horizontalAnchor===_i.Both})}
                          >
                              <slot></slot>
                          </${ji}>
                      `:re}
            </${fe}>
        `}}),gt=rt()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":i(({inputs:e})=>e.bold,"vira-bold-bold")},styles:i(({hostClasses:e,cssVars:t})=>E`
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
    `,"styles"),render({inputs:e}){return b`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}}),XP=ne({name:"ArrowDown24Icon",svgTemplate:b`
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
    `}),QP=ne({name:"ArrowLeft24Icon",svgTemplate:b`
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
    `}),eI=ne({name:"ArrowRight24Icon",svgTemplate:b`
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
    `}),tI=ne({name:"ArrowUp24Icon",svgTemplate:b`
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
    `}),rI=ne({name:"AutoTheme24Icon",svgTemplate:b`
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
    `}),nI=ne({name:"Bell24Icon",svgTemplate:b`
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
    `}),oI=ne({name:"Chat24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),p$=ne({name:"Check16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),b$=ne({name:"ChevronDown24Icon",svgTemplate:b`
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
    `}),Sd=ne({name:"ChevronUp24Icon",svgTemplate:b`
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
    `}),y$=ne({name:"CloseX24Icon",svgTemplate:b`
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
    `}),iI=ne({name:"Commit24Icon",svgTemplate:b`
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
    `}),ch=ne({name:"Copy24Icon",svgTemplate:b`
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
    `}),sI=ne({name:"Dash16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M3 8h10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                stroke-linecap="round"
            />
        </svg>
    `}),aI=ne({name:"Document24Icon",svgTemplate:b`
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
    `}),lI=ne({name:"DocumentSearch24Icon",svgTemplate:b`
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
    `}),uI=ne({name:"DoubleChevron24Icon",svgTemplate:b`
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
    `}),v$=ne({name:"Element16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Lt=ne({name:"Element24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),cI=ne({name:"ExternalLink24Icon",svgTemplate:b`
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
    `}),w$=ne({name:"EyeClosed24Icon",svgTemplate:b`
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
    `}),$$=ne({name:"EyeOpen24Icon",svgTemplate:b`
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
    `}),dI=ne({name:"Filter24Icon",svgTemplate:b`
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
    `}),fI=ne({name:"Globe24Icon",svgTemplate:b`
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
    `}),hI=ne({name:"Link24Icon",svgTemplate:b`
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
    `}),k$=ne({name:"Loader24Icon",svgTemplate:b`
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
    `}),mI=E`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${$o["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Yi=ne({name:"LoaderAnimated24Icon",svgTemplate:b`
        <style>
            ${mI}
        </style>
        ${k$.svgTemplate}
    `}),gI=ne({name:"Lock24Icon",svgTemplate:b`
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
    `}),pI=ne({name:"MagnifyingGlass24Icon",svgTemplate:b`
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
    `}),bI=ne({name:"Moon24Icon",svgTemplate:b`
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
    `}),Ls=ne({name:"Options24Icon",svgTemplate:b`
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
    `}),yI=ne({name:"Pencil24Icon",svgTemplate:b`
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
    `}),vI=ne({name:"Printer24Icon",svgTemplate:b`
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
    `}),wI=ne({name:"Shield24Icon",svgTemplate:b`
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
    `}),$I=ne({name:"SortAscending24Icon",svgTemplate:b`
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
    `}),kI=ne({name:"SortDescending24Icon",svgTemplate:b`
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
    `}),xI=ne({name:"Sparkle24Icon",svgTemplate:b`
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
    `}),DI=ne({name:"SpeakerLoud24Icon",svgTemplate:b`
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
    `}),AI=ne({name:"SpeakerMedium24Icon",svgTemplate:b`
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
    `}),EI=ne({name:"SpeakerMuted24Icon",svgTemplate:b`
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
    `}),CI=ne({name:"SpeakerQuiet24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),dh=ne({name:"Star24Icon",svgTemplate:b`
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
    `}),Ec=ne({name:"StatusFailure24Icon",svgTemplate:b`
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
    `}),SI=ne({name:"StatusInProgress24Icon",svgTemplate:b`
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
    `}),Za=ne({name:"StatusSuccess24Icon",svgTemplate:b`
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
    `}),MI=ne({name:"StatusUnknown24Icon",svgTemplate:b`
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
    `}),FI=ne({name:"StatusWarning24Icon",svgTemplate:b`
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
    `}),TI=ne({name:"Sun24Icon",svgTemplate:b`
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
    `}),NI=ne({name:"Upload24Icon",svgTemplate:b`
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
    `}),x$=ne({name:"X16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),D$=ne({name:"X24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function zr(e,t){const r=Ve(t).map(o=>{if(t[o])return`${v[o].name}: ${String(t[o])};`}).filter(M.isTruthy).join(" "),n=E`
        ${xe(r)}
        display: inline-flex;
        vertical-align: middle;
    `;return ne({name:e.name,svgTemplate:b`
            <div style=${n}>${e.svgTemplate}</div>
        `})}i(zr,"createColoredIcon");const fh={ArrowDown24Icon:XP,ArrowLeft24Icon:QP,ArrowRight24Icon:eI,ArrowUp24Icon:tI,AutoTheme24Icon:rI,Bell24Icon:nI,Chat24Icon:oI,Check16Icon:p$,Check24Icon:gg,ChevronDown24Icon:b$,ChevronUp24Icon:Sd,CloseX24Icon:y$,Commit24Icon:iI,Copy24Icon:ch,Dash16Icon:sI,Document24Icon:aI,DocumentSearch24Icon:lI,DoubleChevron24Icon:uI,Element16Icon:v$,Element24Icon:Lt,ExternalLink24Icon:cI,EyeClosed24Icon:w$,EyeOpen24Icon:$$,Filter24Icon:dI,Globe24Icon:fI,Link24Icon:hI,Loader24Icon:k$,LoaderAnimated24Icon:Yi,Lock24Icon:gI,MagnifyingGlass24Icon:pI,Moon24Icon:bI,Options24Icon:Ls,Pencil24Icon:yI,Printer24Icon:vI,Shield24Icon:wI,SortAscending24Icon:$I,SortDescending24Icon:kI,Sparkle24Icon:xI,SpeakerLoud24Icon:DI,SpeakerMedium24Icon:AI,SpeakerMuted24Icon:EI,SpeakerQuiet24Icon:CI,Star24Icon:dh,StatusFailure24Icon:Ec,StatusInProgress24Icon:SI,StatusSuccess24Icon:Za,StatusUnknown24Icon:MI,StatusWarning24Icon:FI,Sun24Icon:TI,Upload24Icon:NI,X16Icon:x$,X24Icon:D$};var Gn=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e.Danger="vira-button-danger",e.DangerOutline="vira-button-danger-outline",e.Ghost="vira-button-ghost",e.Plain="vira-button-plain",e))(Gn||{});const lt=rt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":i(({inputs:e})=>e.buttonStyle==="vira-button-outline"||e.buttonStyle==="vira-button-danger-outline","vira-button-outline-style"),"vira-button-danger-style":i(({inputs:e})=>e.buttonStyle==="vira-button-danger"||e.buttonStyle==="vira-button-danger-outline","vira-button-danger-style"),"vira-button-ghost-style":i(({inputs:e})=>e.buttonStyle==="vira-button-ghost","vira-button-ghost-style"),"vira-button-disabled":i(({inputs:e})=>!!e.disabled,"vira-button-disabled"),"vira-button-expand-to-fit-icon":i(({inputs:e})=>!!e.expandToFitIcon,"vira-button-expand-to-fit-icon"),"vira-button-icon-only":i(({inputs:e})=>!!e.icon&&!e.text,"vira-button-icon-only"),"vira-button-plain-style":i(({inputs:e})=>e.buttonStyle==="vira-button-plain","vira-button-plain-style"),"vira-button-default-style":i(({inputs:e})=>!e.buttonStyle||e.buttonStyle==="vira-button-default","vira-button-default-style"),"vira-button-with-menu-caret":i(({inputs:e})=>!!e.showMenuCaret,"vira-button-with-menu-caret")},cssVars:{"vira-button-padding":"5px 10px","vira-button-internal-foreground-color":I["vira-form-background-color"].value,"vira-button-internal-background-color":I["vira-form-accent-primary-color"].value,"vira-button-border-color":"transparent"},styles:i(({hostClasses:e,cssVars:t})=>E`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${oi};
            ${I["vira-form-focus-outline-color"].name}: ${I["vira-form-accent-primary-hover-color"].value}
        }

        ${e["vira-button-icon-only"].selector} {
            ${t["vira-button-padding"].name}: 5px;
        }

        ${e["vira-button-disabled"].selector} {
            ${oa};
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${I["vira-form-accent-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${I["vira-form-accent-primary-active-color"].value};
        }

        ${e["vira-button-danger-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${I["vira-form-error-color"].value};
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${I["vira-form-error-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${I["vira-form-error-active-color"].value};
            }
        }

        ${e["vira-button-ghost-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: transparent;
                ${t["vira-button-internal-foreground-color"].name}: currentColor;
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${I["vira-form-filled-background-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${I["vira-form-filled-active-background-color"].value};
            }
        }

        ${e["vira-button-plain-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${I["vira-form-plain-color"].value};
                color: currentColor;
                ${t["vira-button-border-color"].name}: ${I["vira-form-plain-active-color"].value};
                border-width: 1px;
            }
            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${I["vira-form-plain-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${I["vira-form-plain-active-color"].value};
            }
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: ${t["vira-button-internal-foreground-color"].value};
            ${t["vira-button-border-color"].name}: currentColor;
        }

        button {
            ${Rt};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid ${t["vira-button-border-color"].value};
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${I["vira-form-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${$o["vira-interaction-animation-duration"].value},
                background-color
                    ${$o["vira-interaction-animation-duration"].value},
                border-color ${$o["vira-interaction-animation-duration"].value};

            ${tu({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${B} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${B} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }

        .caret-icon {
            padding-left: 4px;
        }

        ${e["vira-button-with-menu-caret"].selector} {
            button {
                padding-right: 4px;
            }
        }
    `,"styles"),render:i(({inputs:e})=>{const t=e.icon?b`
                  <${B.assign({icon:e.icon})}></${B}>
              `:re,r=e.text?b`
                  <span class="text-template">${e.text}</span>
              `:b`
                  <span class="empty-text">&nbsp;</span>
              `,n=e.showMenuCaret?b`
                  <${B.assign({icon:b$})}
                      class="caret-icon"
                  ></${B}>
              `:re;return b`
            <button ?disabled=${e.disabled}>
                ${t}${r}${n}
            </button>
        `},"render")});var hh=(e=>(e.Error="error",e.Success="success",e))(hh||{});const Rf=rt()({tagName:"vira-card",hostClasses:{"vira-card-error":i(({inputs:e})=>e.cardState==="error","vira-card-error"),"vira-card-success":i(({inputs:e})=>e.cardState==="success","vira-card-success")},cssVars:{"vira-card-border":E`1px solid ${I["vira-form-border-color"].value}`,"vira-card-padding":I["vira-form-wrapper-radius"].value},styles:i(({hostClasses:e,cssVars:t})=>E`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${I["vira-form-wrapper-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${I["vira-form-error-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${I["vira-form-success-color"].value};
        }
    `,"styles"),render(){return b`
            <slot></slot>
        `}}),ge=rt()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":i(({inputs:e})=>!!e.horizontal,"vira-checkbox-horizontal"),"vira-checkbox-filled-checked":i(({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-checked"),"vira-checkbox-filled-unchecked":i(({inputs:e})=>!!e.fillWhenUnchecked,"vira-checkbox-filled-unchecked")},styles:i(({hostClasses:e})=>E`
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
            ${v["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        ${e["vira-checkbox-filled-checked"].selector} {
            & .custom-checkbox.checked {
                color: ${I["vira-form-background-color"].value};
                background-color: ${I["vira-form-accent-primary-color"].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${I["vira-form-accent-primary-hover-color"].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${I["vira-form-accent-primary-active-color"].value};
                }
            }
        }
        ${e["vira-checkbox-filled-unchecked"].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${I["vira-form-background-color"].value};
                background-color: ${I["vira-form-error-color"].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${I["vira-form-error-hover-color"].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${I["vira-form-error-active-color"].value};
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
                font-weight: ${I["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${I["vira-form-selection-hover-color"].value};
            }
            &:active .custom-checkbox {
                background-color: ${I["vira-form-selection-active-color"].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${I["vira-form-border-color"].value};
            color: ${I["vira-form-foreground-color"].value};
            border-radius: ${I["vira-form-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${tu({elementBorderSize:1})}

            &.checked {
                & ${B} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${I["vira-form-error-color"].value};
            }

            &.disabled {
                ${oa};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,"styles"),events:{valueChange:tt()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}i(n,"updateValue");const o=e.label?b`
                  <span
                      class="label-text"
                      ${yo(e.attributePassthrough?.text)}
                      style=${Bt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:re;return b`
            <label
                class=${Dr({disabled:!!e.disabled})}
                ${yo(e.attributePassthrough?.label)}
                style=${Bt(e.stylePassthrough?.label)}
                ${U("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${Dr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Bt(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${yo(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Bt(e.stylePassthrough?.["custom-checkbox"])}
                    ${AN(n)}
                >
                    <${B.assign({icon:gg,fitContainer:!0})}
                        ${yo(e.attributePassthrough?.[B.tagName])}
                        style=${Bt(e.stylePassthrough?.[B.tagName])}
                    ></${B}>
                </span>
            </label>
        `}}),fr=rt()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":i(({inputs:e})=>!!e.expandOnPrint,"vira-collapsible-wrapper-expand-on-print")},slotNames:["header"],styles:i(({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Rt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${$o["vira-pretty-animation-duration"].value};
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
    `,"styles"),events:{expandChange:tt()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:o,inputs:s}){const a=s.expanded?E`
                  height: ${e.contentHeight}px;
              `:E`
                  height: 0;
              `;return b`
            <button
                class="header-wrapper"
                ${U("click",()=>{n(new o.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${Dr({collapsed:!s.expanded})}"
                style=${a}
                disabled="disabled"
            >
                <div
                    ${W5(({contentRect:l})=>{r({contentHeight:l.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Wt=rt()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:tt()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":i(({state:e})=>e.isExpanded,"vira-collapsible-card-expanded"),"vira-collapsible-card-expansion-blocked":i(({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-expansion-blocked"),"vira-collapsible-card-card-styles":i(({inputs:e})=>!e.rawCollapsible,"vira-collapsible-card-card-styles")},cssVars:{"vira-collapsible-card-content-gap":"16px"},styles:i(({hostClasses:e,cssVars:t})=>E`
        :host {
            display: inline-flex;
        }

        ${e["vira-collapsible-card-expanded"].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${fr} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e["vira-collapsible-card-card-styles"].selector} {
            & ${fr} {
                border: 1px solid ${I["vira-form-border-color"].value};
                border-radius: ${I["vira-form-wrapper-radius"].value};
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
            gap: ${t["vira-collapsible-card-content-gap"].value};
            overflow-x: auto;
            overflow-y: hidden;
        }

        @media print {
            ${fr} {
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
    `,"styles"),slotNames:["header"],render({inputs:e,slotNames:t,state:r,updateState:n,testIds:o,dispatch:s,events:a}){e.blockExpansion&&n({isExpanded:!0});const l=r.isExpanded||e.expandOnPrint?b`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:re,u=e.hideHeader?re:b`
                  <div class="card-header">
                      <slot name=${t.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?re:b`
                                <${B.assign({icon:Sd,fitContainer:!0})}
                                    ${Ko(o.openCaret)}
                                    class="open-caret"
                                ></${B}>
                            `}
                  </div>
              `;return b`
            <${fr.assign({expanded:r.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${U(fr.events.expandChange,d=>{d.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:d.detail}),s(new a.expandToggle(d.detail)))})}
            >
                <div class="header-wrapper" slot=${fr.slotNames.header}>
                    ${u}
                </div>
                ${l}
            </${fr}>
        `}}),Ja=rt()({tagName:"vira-dropdown",testIds:["leadingIcon","prefixText","trigger"],styles:E`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${fe} {
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
                ${$o["vira-interaction-animation-duration"].value} linear;
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
            border: 1px solid ${I["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${I["vira-form-radius"].value};
            background-color: ${I["vira-form-background-color"].value};
            color: ${I["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:tt(),openChange:tt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:o,testIds:s}){const a=yn(t.selected,m=>t.options.find(g=>g.value===m),M.isTruthy),l=t.icon?b`
                  <${B.assign({icon:t.icon})}
                      ${Ko(s.leadingIcon)}
                  ></${B}>
              `:re,u=!a.length,d=t.selectionPrefix&&!u?b`
                      <span class="selected-label-prefix" ${Ko(s.prefixText)}>
                          ${t.selectionPrefix}
                      </span>
                  `:re,f=u?t.placeholder||"":t.isMultiSelect&&a.length>1?`${a.length} Selected`:a[0]?.label||"",h=b`
            <${ji.assign({direction:e.showPopUpResult?.popDown?Ml.Downwards:Ml.Upwards})}
                slot=${fe.slotNames.popUp}
            >
                ${h$(t.options.map(m=>({content:m.label,onClick(){r(new n.selectedChange([m.value]))},disabled:m.disabled,selected:a.includes(m)})))}
            </${ji}>
        `;return b`
            <${fe.assign({...t,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||_i.Both})}
                ${U(fe.events.openChange,m=>{!!e.showPopUpResult!=!!m.detail&&r(new n.openChange(m.detail)),o({showPopUpResult:m.detail})})}
            >
                <div
                    class="dropdown-trigger ${Dr({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    slot=${fe.slotNames.trigger}
                    ${Ko(s.trigger)}
                >
                    ${l}
                    <span
                        class="selection-display ${Dr({"using-placeholder":u})}"
                        title=${Bt(u?void 0:f)}
                    >
                        ${d} ${f}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${B.assign({icon:Sd})}
                            class="trigger-icon"
                        ></${B}>
                    </span>
                </div>
                ${e.showPopUpResult?h:re}
            </${fe}>
        `}}),Ui=rt()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:i(({cssVars:e})=>E`
        :host {
            color: ${I["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,"styles"),render(){return b`
            <slot></slot>
        `}});var Te=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(Te||{});function Fu(e,t){if(e)return t?Vh({value:e,suffix:"*"}):e}i(Fu,"applyRequiredLabel");function PI(e){return ml(e).every(t=>t.isHidden||!t.isRequired?!0:M.isString(t.value)?!!t.value:t.value!=null)}i(PI,"areFormFieldsValid");function mh({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>mh({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}i(mh,"doesMatch");function II({value:e,allowed:t,blocked:r}){const n=String(e),o=t?mh({input:n,matcher:t}):!0,s=r?mh({input:n,matcher:r}):!1;return o&&!s}i(II,"isAllowed");function gh(e){const t=String(e.value);if(!e.value)return{filtered:t,blocked:""};const{filtered:r,blocked:n}=t.split("").reduce((o,s)=>(II({...e,value:s})?o.filtered.push(s):o.blocked.push(s),o),{filtered:[],blocked:[]});return{filtered:r.join(""),blocked:n.join("")}}i(gh,"filterTextInputValue");function OI({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){const s=xd(r,HTMLInputElement),a=M.hasKey(r,"data")&&zh.isString(r.data)||"";if(a){const{blocked:u}=gh({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const l=gh({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==l&&(s.value=l),t!==l&&o(l)}i(OI,"textInputListener");var Pi=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(Pi||{});const Ne=rt()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:i(({hostClasses:e,cssVars:t})=>E`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${I["vira-form-foreground-color"].value};
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
                    font-weight: ${I["vira-form-label-font-weight"].value};
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
                ${Rt};
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
                ${Rt};
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
                border-radius: ${I["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${I["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Rt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${I["vira-form-radius"].value};
                background-color: ${I["vira-form-background-color"].value};
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
                ${Rt};
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
                    ${tu({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${I["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${I["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${I["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${oi};
            }

            button {
                ${Rt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${$o["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${I["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${I["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${I["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${I["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${I["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${I["vira-form-error-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${oa};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,"styles"),events:{valueChange:tt(),inputBlocked:tt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Oi(32)}},hostClasses:{"vira-input-disabled":i(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":i(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":i(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown"),"vira-input-error":i(({inputs:e})=>!!e.hasError,"vira-input-error")},render:i(({inputs:e,dispatch:t,state:r,updateState:n,events:o,host:s})=>{const{filtered:a}=gh({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),l=e.icon?b`
                  <${B.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${B}>
              `:re,u=e.fitText?E`
                  width: ${r.forcedInputWidth}px;
              `:re,d=U("mousedown",m=>{const g=xd(m,HTMLElement,{useOriginalTarget:!0}),p=bt.instanceOf(s.shadowRoot.querySelector("input"),HTMLInputElement);g!==p&&(m.preventDefault(),p.focus())}),f=e.disableBrowserHelps||e.type==="password",h=b`
            <span class="input-wrapper" ${e.label?re:d}>
                ${l}
                ${Br(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${W5(({contentRect:m})=>{n({forcedInputWidth:m.width})})}
                        >
                            <pre>${a||e.placeholder||re}</pre>
                        </span>
                    `)}

                <input
                    id=${Bt(e.label?r.randomId:void 0)}
                    aria-label=${Bt(e.label||void 0)}
                    autofocus=${!1}
                    type=${BI(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${Bt(f?"off":void 0)}
                    autocorrect=${Bt(f?"off":void 0)}
                    autocapitalize=${Bt(f?"off":void 0)}
                    spellcheck=${Bt(f?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${U("input",m=>{OI({inputs:e,previousValue:a,event:m,inputBlockedCallback(g){t(new o.inputBlocked(g))},newValueCallback(g){t(new o.valueChange(g))}})})}
                    placeholder=${Bt(e.placeholder||void 0)}
                    ${yo(e.attributePassthrough)}
                />

                ${Br(!!(e.showClearButton&&e.value),b`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${U("mousedown",m=>{m.stopImmediatePropagation(),m.preventDefault()})}
                            ${U("click",()=>{e.disabled||t(new o.valueChange(""))})}
                        >
                            <${B.assign({icon:y$})}></${B}>
                        </button>
                    `)}
                ${Br(e.type==="password",b`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${U("mousedown",m=>{m.stopImmediatePropagation(),m.preventDefault()})}
                            ${U("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${B.assign({icon:r.showPassword?$$:w$})}></${B}>
                        </button>
                    `)}
                ${Br(!!e.suffix,b`
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
                <label for=${r.randomId} ${d}>
                    <span class="input-label">${e.label}</span>
                    ${h}
                </label>
            `:h},"render")});function BI(e,t){return e==="password"&&t?"text":e||"text"}i(BI,"calculateEffectiveInputType");const qe=rt()({tagName:"vira-select",state(){return{randomId:Oi(32),cleanup:void 0}},events:{valueChange:tt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":i(({inputs:e})=>!!e.disabled,"vira-select-disabled"),"vira-select-error":i(({inputs:e})=>!!e.hasError,"vira-select-error"),"vira-select-not-raw":i(({inputs:e})=>!e.rawSelect,"vira-select-not-raw")},styles:i(({hostClasses:e,cssVars:t})=>E`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${I["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Rt};
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
                    color: ${I["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
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

        ${e["vira-select-not-raw"].selector} {
            .select-wrapper {
                border-radius: ${I["vira-form-radius"].value};
                color: ${I["vira-form-foreground-color"].value};
                background-color: ${I["vira-form-background-color"].value};
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
                        ${tu({elementBorderSize:0,noNesting:!0})}
                    }
                }

                & .border-style {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: ${I["vira-form-radius"].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${I["vira-form-border-color"].value};
                    transition: border
                        ${$o["vira-interaction-animation-duration"].value};
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
                font-weight: ${I["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${oa}
            }
            ${B} {
                ${oa}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${I["vira-form-error-color"].value};
        }
    `,"styles"),init({state:e,updateState:t,host:r}){e.cleanup?.();const n=[po(r,"mousedown",o=>{const s=bt.instanceOf(r.shadowRoot.querySelector("select"),HTMLSelectElement);o.composedPath().includes(s)||(o.preventDefault(),o.stopPropagation(),s.showPicker&&s.showPicker())})];t({cleanup:i(()=>{n.forEach(o=>o())},"cleanup")})},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({inputs:e,state:t,dispatch:r,events:n}){const o=e.value||void 0,s=e.placeholder||o==null?b`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:re,a=b`
            <span class="select-wrapper">
                <select
                    .value=${Bt(o)}
                    class=${Dr({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Bt(e.label?t.randomId:void 0)}
                    aria-label=${Bt(e.label||void 0)}
                    aria-disabled=${Bt(e.disabled?"true":void 0)}
                    ${U("input",l=>{const u=xd(l,HTMLSelectElement),d=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(f=>f.value===o)),r(new n.valueChange(d))})}
                    ${yo(e.attributePassthrough?.select)}
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
                <${B.assign({icon:Sd})}
                    class="trigger-icon"
                ></${B}>
            </span>
        `;return e.label?b`
                <label for=${t.randomId} ${yo(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${a}
                </label>
            `:a}}),Sr=rt()({tagName:"vira-form",events:{valueChange:tt(),validChange:tt()},styles:E`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const s=PI(e.fields);s!==n.lastIsValid&&(o({lastIsValid:s}),t(new r.validChange({allFieldsAreValid:s})));const a=Nn(e.fields).map(([l,u])=>u.isHidden?re:u.type===Te.Checkbox?b`
                        <${ge.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:Fu(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Ko(u.testId):re}
                            ${U(ge.events.valueChange,d=>{t(new r.valueChange({key:l,...u,value:d.detail}))})}
                        ></${ge}>
                    `:u.type===Te.Select?b`
                        <${qe.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:Fu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Ko(u.testId):re}
                            ${U(qe.events.valueChange,d=>{t(new r.valueChange({key:l,...u,value:d.detail}))})}
                        ></${qe}>
                    `:u.type===Te.Number?b`
                        <${Ne.assign({value:u.value?.toString()||"",disabled:e.isDisabled||u.isDisabled,allowedInputs:/\d/,hasError:u.hasError,icon:u.icon,label:Fu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,type:Pi.Number,attributePassthrough:{...u.min===void 0?{}:{min:String(u.min)},...u.max===void 0?{}:{max:String(u.max)},...u.step===void 0?{}:{step:String(u.step)}}})}
                            ${u.testId?Ko(u.testId):re}
                            ${U(Ne.events.valueChange,d=>{const f=d.detail===""?void 0:Number(d.detail);t(new r.valueChange({key:l,...u,value:f}))})}
                        ></${Ne}>
                    `:b`
                        <${Ne.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:Fu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===Te.NewPassword?{autocomplete:"new-password"}:u.type===Te.ExistingPassword?{autocomplete:"password"}:u.type===Te.Email?{autocomplete:"email"}:{},type:[Te.NewPassword,Te.ExistingPassword,Te.PlainPassword].includes(u.type)?Pi.Password:u.type===Te.Email?Pi.Email:Pi.Default})}
                            ${u.testId?Ko(u.testId):re}
                            ${U(Ne.events.valueChange,d=>{t(new r.valueChange({key:l,...u,value:d.detail}))})}
                        ></${Ne}>
                    `);return b`
            <form ${U("submit",l=>l.preventDefault())}>
                ${a}
                <slot></slot>
            </form>
        `}}),Oo=rt()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":i(({inputs:e})=>e.dominantDimension==="height","vira-image-height-constrained")},slotNames:["loading","error"],events:{imageLoad:tt(),imageError:tt()},styles:i(({hostClasses:e})=>E`
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
    `,"styles"),render({inputs:e,state:t,updateState:r,dispatch:n,events:o,slotNames:s}){const a=e.imageUrl,l=t.erroredUrls[a]?b`
                  <slot class="status-wrapper" name=${s.error}>
                      <${B.assign({icon:Ec})}
                          class="error"
                      ></${B}>
                  </slot>
              `:t.loadedUrls[a]?void 0:b`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${B.assign({icon:Yi})}></${B}>
                    </slot>
                `;return b`
            ${Br(!!l,l)}
            <img
                class=${Dr({hidden:!!l})}
                ${U("load",async()=>{e._debugLoadDelay&&await Vi(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${U("error",async u=>{e._debugLoadDelay&&await Vi(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new o.imageError(u.error))})}
                src=${a}
            />
        `}}),Jn=rt()({tagName:"vira-link",state(){return{cleanup:void 0}},hostClasses:{"vira-link-link-styles":i(({inputs:e})=>!e.disableLinkStyles,"vira-link-link-styles")},styles:i(({hostClasses:e})=>E`
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
                color: ${I["vira-form-accent-primary-color"].value};
            }

            &:active a,
            & a:active {
                color: ${I["vira-form-accent-primary-active-color"].value};
            }
        }
    `,"styles"),init({state:e,updateState:t,host:r}){e.cleanup?.();let n=!1;const o=[po(r,"click",s=>{if(n)return;const a=bt.instanceOf(r.shadowRoot.querySelector("a"),HTMLAnchorElement);s.composedPath().includes(a)||(s.preventDefault(),s.stopPropagation(),n=!0,a.dispatchEvent(new MouseEvent(s.type,s)),n=!1)})];t({cleanup:i(()=>{o.forEach(s=>s())},"cleanup")})},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({inputs:e}){function t(r){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,r)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(i(t,"clickCallback"),e.link?.newTab)return b`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${yo(e.attributePassthrough?.a)}
                    style=${Bt(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return b`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${yo(e.attributePassthrough?.a)}
                    style=${Bt(e.stylePassthrough?.a)}
                    ${U("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),RI=["pagehide","pageshow","popstate"],Bo=rt()({tagName:"vira-modal",events:{modalClose:tt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":i(({inputs:e})=>!!e.isMobileSize,"vira-modal-phone-size")},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:i(({hostClasses:e,cssVars:t})=>E`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${ru};
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
                background: ${I["vira-form-modal-backdrop-color"].value};
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
                            color: ${I["vira-form-secondary-body-foreground"].value};
                        }
                    }

                    & button.close {
                        ${Rt};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${I["vira-form-radius"].value};

                        &:hover {
                            background-color: ${I["vira-form-selection-hover-color"].value};
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
    `,"styles"),render({inputs:e,state:t,updateState:r,events:n,dispatch:o,slotNames:s}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const l=RI.map(u=>I0(u,()=>{o(new n.modalClose)}));r({cleanup:i(()=>{l.forEach(u=>u())},"cleanup")})}function a(){e.open&&(t.cleanup?.(),o(new n.modalClose))}return i(a,"close"),b`
            <dialog
                ${Ji(l=>{r({dialogElement:bt.instanceOf(l,HTMLDialogElement)})})}
                ${U("close",()=>{a()})}
                ${U("mousedown",l=>{t.contentElement&&!l.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&a()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Ji(l=>{r({contentElement:bt.instanceOf(l,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${s.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?b`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:re}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${U("click",()=>{t.dialogElement?.close()})}
                        >
                            <${B.assign({icon:D$})}></${B}>
                        </button>
                    </div>
                    ${e.open?b`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:re}
                </div>
            </dialog>
        `}}),Yn=rt()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":i(({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall,"vira-overflow-switch-show-small")},styles:i(({hostClasses:e})=>E`
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
    `,"styles"),cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({slotNames:e,updateState:t,inputs:r,host:n,state:o}){return b`
            <div
                class="large"
                ${Ji(s=>{if(!r.automaticallySwitch)return;const a={elementToTest:s,host:n,updateState:t},l=new ResizeObserver(()=>{Lf(a)});l.observe(n),l.observe(s);const u=po(s,"slotchange",()=>{Lf(a)});Lf(a),o.cleanup?.(),t({cleanup(){l.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function Lf({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}i(Lf,"updateOverflowing");const uo=rt()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:i(({cssVars:e})=>E`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${I["vira-form-accent-primary-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${I["vira-form-filled-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,"styles"),render({inputs:e,host:t}){const r=e.min||0,o=(e.max||100)-r,s=e.value-r,a=o6(Math.round(s/o*100),{min:0,max:100});return IP(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),b`
            <div
                class="progress-bar"
                style=${a?E`
                          width: ${a}%;
                      `:E`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});var Tl;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(Tl||(Tl={}));const bg={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:Tl.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},ii=st(bg,e=>e),$e={...ii,name:"name",hexString:"hexString"},Kn=st(bg,(e,t)=>{const r=M.isEnumValue(e,Tl)&&M.isEnumValue(e,ii)?e:"conversionFormat"in t&&t.conversionFormat&&M.isEnumValue(t.conversionFormat,Tl)&&M.isEnumValue(t.conversionFormat,ii)?t.conversionFormat:void 0;return jt.isTruthy(r,`Invalid conversion format for color format '${e}' ${x(t)}.`),{...t,colorFormat:e,conversionFormat:r,rawSyntax:bt.isEnumValue("rawSyntax"in t&&t.rawSyntax?t.rawSyntax:e,$e)}});Qo(ml(bg),e=>({key:e.colorSpace,value:e.colorSpace}),{});Nn(Kn).reduce((e,[t,r])=>(ts(e,r.colorSpace,()=>({}))[t]=r,e),{});function LI(e){return e.startsWith("rgb")?$e.rgb:e.startsWith("hsl")?$e.hsl:e.startsWith("hwb")?$e.hwb:e.startsWith("oklab")?$e.oklab:e.startsWith("oklch")?$e.oklch:e.startsWith("lab")?$e.lab:e.startsWith("lch")?$e.lch:e.startsWith("#")?$e.hexString:$e.name}i(LI,"getColorSyntaxFromCssString");const ph={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in ph)Object.freeze(ph[e]);const Nl=Object.freeze(ph),jI=Object.keys(Nl).reduce((e,t)=>t.length>e.length?t:e),_I=zc(st(Nl,(e,t)=>yn(Object.entries(Nl),([n])=>n,(n,[,o])=>n===e?!1:M.deepEquals(o,t))),(e,t)=>!!t.length),L1=Object.entries(_I).reduce((e,t)=>{const r=[e[0],...e[1]].join(", ");return[t[0],...t[1]].join(", ").length>r.length?t:e}).reduce((e,t)=>M.isArray(t)?[...e,...t]:[...e,t],[]),j1=Math.max(jI.length,L1.length+(L1.length-1)*2),A$=i((e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},"parseNumber"),UI={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zI=i(e=>A$(UI[e.toLowerCase()],6),"parseNamed"),VI=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,qI=i(e=>{let t;return(t=e.match(VI))?A$(parseInt(t[1],16),t[1].length):void 0},"parseHex"),Yo="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",ul=`${Yo}%`,yg=`(?:${Yo}%|${Yo})`,WI=`(?:${Yo}(deg|grad|rad|turn)|${Yo})`,ia="\\s*,\\s*",KI=new RegExp(`^rgba?\\(\\s*${Yo}${ia}${Yo}${ia}${Yo}\\s*(?:,\\s*${yg}\\s*)?\\)$`),GI=new RegExp(`^rgba?\\(\\s*${ul}${ia}${ul}${ia}${ul}\\s*(?:,\\s*${yg}\\s*)?\\)$`),HI=i(e=>{let t={mode:"rgb"},r;if(r=e.match(KI))r[1]!==void 0&&(t.r=r[1]/255),r[2]!==void 0&&(t.g=r[2]/255),r[3]!==void 0&&(t.b=r[3]/255);else if(r=e.match(GI))r[1]!==void 0&&(t.r=r[1]/100),r[2]!==void 0&&(t.g=r[2]/100),r[3]!==void 0&&(t.b=r[3]/100);else return;return r[4]!==void 0?t.alpha=Math.max(0,Math.min(1,r[4]/100)):r[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[5]))),t},"parseRgbLegacy"),bh=i((e,t)=>e===void 0?void 0:typeof e!="object"?wh(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,"prepare"),Xi=i((e="rgb")=>t=>(t=bh(t,e))!==void 0?t.mode===e?t:Hn[t.mode][e]?Hn[t.mode][e](t):e==="rgb"?Hn[t.mode].rgb(t):Hn.rgb[e](Hn[t.mode].rgb(t)):void 0,"converter"),Hn={},E$={},Cc=[],C$={},ZI=i(e=>e,"identity"),_e=i(e=>(Hn[e.mode]={...Hn[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{Hn[t]||(Hn[t]={}),Hn[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=ZI)}),E$[e.mode]=e,(e.parse||[]).forEach(t=>{JI(t,e.mode)}),Xi(e.mode)),"useMode"),Md=i(e=>E$[e],"getMode"),JI=i((e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");C$[e]=t}else typeof e=="function"&&Cc.indexOf(e)<0&&Cc.push(e)},"useParser"),yh=/[^\x00-\x7F]|[a-zA-Z_]/,YI=/[^\x00-\x7F]|[-\w]/,j={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let ie=0;function Tu(e){let t=e[ie],r=e[ie+1];return t==="-"||t==="+"?/\d/.test(r)||r==="."&&/\d/.test(e[ie+2]):t==="."?/\d/.test(r):/\d/.test(t)}i(Tu,"is_num");function vh(e){if(ie>=e.length)return!1;let t=e[ie];if(yh.test(t))return!0;if(t==="-"){if(e.length-ie<2)return!1;let r=e[ie+1];return!!(r==="-"||yh.test(r))}return!1}i(vh,"is_ident");const XI={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function La(e){let t="";if((e[ie]==="-"||e[ie]==="+")&&(t+=e[ie++]),t+=Nu(e),e[ie]==="."&&/\d/.test(e[ie+1])&&(t+=e[ie++]+Nu(e)),(e[ie]==="e"||e[ie]==="E")&&((e[ie+1]==="-"||e[ie+1]==="+")&&/\d/.test(e[ie+2])?t+=e[ie++]+e[ie++]+Nu(e):/\d/.test(e[ie+1])&&(t+=e[ie++]+Nu(e))),vh(e)){let r=Sc(e);return r==="deg"||r==="rad"||r==="turn"||r==="grad"?{type:j.Hue,value:t*XI[r]}:void 0}return e[ie]==="%"?(ie++,{type:j.Percentage,value:+t}):{type:j.Number,value:+t}}i(La,"num");function Nu(e){let t="";for(;/\d/.test(e[ie]);)t+=e[ie++];return t}i(Nu,"digits");function Sc(e){let t="";for(;ie<e.length&&YI.test(e[ie]);)t+=e[ie++];return t}i(Sc,"ident");function QI(e){let t=Sc(e);return e[ie]==="("?(ie++,{type:j.Function,value:t}):t==="none"?{type:j.None,value:void 0}:{type:j.Ident,value:t}}i(QI,"identlike");function eO(e=""){let t=e.trim(),r=[],n;for(ie=0;ie<t.length;){if(n=t[ie++],n===`
`||n==="	"||n===" "){for(;ie<t.length&&(t[ie]===`
`||t[ie]==="	"||t[ie]===" ");)ie++;continue}if(n===",")return;if(n===")"){r.push({type:j.ParenClose});continue}if(n==="+"){if(ie--,Tu(t)){r.push(La(t));continue}return}if(n==="-"){if(ie--,Tu(t)){r.push(La(t));continue}if(vh(t)){r.push({type:j.Ident,value:Sc(t)});continue}return}if(n==="."){if(ie--,Tu(t)){r.push(La(t));continue}return}if(n==="/"){for(;ie<t.length&&(t[ie]===`
`||t[ie]==="	"||t[ie]===" ");)ie++;let o;if(Tu(t)&&(o=La(t),o.type!==j.Hue)){r.push({type:j.Alpha,value:o});continue}if(vh(t)&&Sc(t)==="none"){r.push({type:j.Alpha,value:{type:j.None,value:void 0}});continue}return}if(/\d/.test(n)){ie--,r.push(La(t));continue}if(yh.test(n)){ie--,r.push(QI(t));continue}return}return r}i(eO,"tokenize");function tO(e){e._i=0;let t=e[e._i++];if(!t||t.type!==j.Function||t.value!=="color"||(t=e[e._i++],t.type!==j.Ident))return;const r=C$[t.value];if(!r)return;const n={mode:r},o=S$(e,!1);if(!o)return;const s=Md(r).channels;for(let a=0,l,u;a<s.length;a++)l=o[a],u=s[a],l.type!==j.None&&(n[u]=l.type===j.Number?l.value:l.value/100,u==="alpha"&&(n[u]=Math.max(0,Math.min(1,n[u]))));return n}i(tO,"parseColorSyntax");function S$(e,t){const r=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===j.None||n.type===j.Number||n.type===j.Alpha||n.type===j.Percentage||t&&n.type===j.Hue){r.push(n);continue}if(n.type===j.ParenClose){if(e._i<e.length)return;continue}return}if(!(r.length<3||r.length>4)){if(r.length===4){if(r[3].type!==j.Alpha)return;r[3]=r[3].value}return r.length===3&&r.push({type:j.None,value:void 0}),r.every(o=>o.type!==j.Alpha)?r:void 0}}i(S$,"consumeCoords");function rO(e,t){e._i=0;let r=e[e._i++];if(!r||r.type!==j.Function)return;let n=S$(e,t);if(n)return n.unshift(r.value),n}i(rO,"parseModernSyntax");const wh=i(e=>{if(typeof e!="string")return;const t=eO(e),r=t?rO(t,!0):void 0;let n,o=0,s=Cc.length;for(;o<s;)if((n=Cc[o++](e,r))!==void 0)return n;return t?tO(t):void 0},"parse");function nO(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const r={mode:"rgb"},[,n,o,s,a]=t;if(!(n.type===j.Hue||o.type===j.Hue||s.type===j.Hue))return n.type!==j.None&&(r.r=n.type===j.Number?n.value/255:n.value/100),o.type!==j.None&&(r.g=o.type===j.Number?o.value/255:o.value/100),s.type!==j.None&&(r.b=s.type===j.Number?s.value/255:s.value/100),a.type!==j.None&&(r.alpha=Math.min(1,Math.max(0,a.type===j.Number?a.value:a.value/100))),r}i(nO,"parseRgb");const oO=i(e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,"parseTransparent"),iO=i((e,t,r)=>e+r*(t-e),"lerp"),sO=i(e=>{let t=[];for(let r=0;r<e.length-1;r++){let n=e[r],o=e[r+1];n===void 0&&o===void 0?t.push(void 0):n!==void 0&&o!==void 0?t.push([n,o]):t.push(n!==void 0?[n,n]:[o,o])}return t},"get_classes"),aO=i(e=>t=>{let r=sO(t);return n=>{let o=n*r.length,s=n>=1?r.length-1:Math.max(Math.floor(o),0),a=r[s];return a===void 0?void 0:e(a[0],a[1],o-s)}},"interpolatorPiecewise"),V=aO(iO),Vt=i(e=>{let t=!1,r=e.map(n=>n!==void 0?(t=!0,n):1);return t?r:e},"fixupAlpha"),Da={mode:"rgb",channels:["r","g","b","alpha"],parse:[nO,qI,HI,zI,oO,"srgb"],serialize:"srgb",interpolate:{r:V,g:V,b:V,alpha:{use:V,fixup:Vt}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},jf=i((e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),"linearize$2"),_1=i(e=>{let t=jf(e.r),r=jf(e.g),n=jf(e.b),o={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*r+.1882286462349947*n,y:.297344975250536*t+.6273635662554661*r+.0752914584939979*n,z:.0270313613864123*t+.0706888525358272*r+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertA98ToXyz65"),_f=i(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),"gamma$2"),U1=i(({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"a98",r:_f(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*r),g:_f(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*r),b:_f(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*r)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToA98"),Uf=i((e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},"fn$3"),Aa=i(({r:e,g:t,b:r,alpha:n})=>{let o={mode:"lrgb",r:Uf(e),g:Uf(t),b:Uf(r)};return n!==void 0&&(o.alpha=n),o},"convertRgbToLrgb"),fs=i(e=>{let{r:t,g:r,b:n,alpha:o}=Aa(e),s={mode:"xyz65",x:.4123907992659593*t+.357584339383878*r+.1804807884018343*n,y:.2126390058715102*t+.715168678767756*r+.0721923153607337*n,z:.0193308187155918*t+.119194779794626*r+.9505321522496607*n};return o!==void 0&&(s.alpha=o),s},"convertRgbToXyz65"),zf=i((e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},"fn$2"),Ea=i(({r:e,g:t,b:r,alpha:n},o="rgb")=>{let s={mode:o,r:zf(e),g:zf(t),b:zf(r)};return n!==void 0&&(s.alpha=n),s},"convertLrgbToRgb"),hs=i(({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Ea({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*r,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*r,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*r});return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRgb"),lO={...Da,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:i(e=>U1(fs(e)),"rgb"),xyz65:U1},toMode:{rgb:i(e=>hs(_1(e)),"rgb"),xyz65:_1}},sr=i(e=>(e=e%360)<0?e+360:e,"normalizeHue"),uO=i((e,t)=>e.map((r,n,o)=>{if(r===void 0)return r;let s=sr(r);return n===0||e[n-1]===void 0?s:t(s-sr(o[n-1]))}).reduce((r,n)=>!r.length||n===void 0||r[r.length-1]===void 0?(r.push(n),r):(r.push(n+r[r.length-1]),r),[]),"hue"),Mo=i(e=>uO(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),"fixupHueShorter"),Gt=[-.14861,1.78277,-.29227,-.90649,1.97294,0],cO=Math.PI/180,dO=180/Math.PI;let z1=Gt[3]*Gt[4],V1=Gt[1]*Gt[4],q1=Gt[1]*Gt[2]-Gt[0]*Gt[3];const fO=i(({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(q1*r+e*z1-t*V1)/(q1+z1-V1),s=r-o,a=(Gt[4]*(t-o)-Gt[2]*s)/Gt[3],l={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(s*s+a*a)/(Gt[4]*o*(1-o))};return l.s&&(l.h=Math.atan2(a,s)*dO-120),n!==void 0&&(l.alpha=n),l},"convertRgbToCubehelix"),hO=i(({h:e,s:t,l:r,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*cO,r===void 0&&(r=0);let s=t===void 0?0:t*r*(1-r),a=Math.cos(e),l=Math.sin(e);return o.r=r+s*(Gt[0]*a+Gt[1]*l),o.g=r+s*(Gt[2]*a+Gt[3]*l),o.b=r+s*(Gt[4]*a+Gt[5]*l),n!==void 0&&(o.alpha=n),o},"convertCubehelixToRgb"),Fd=i((e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let r=sr(e.h),n=sr(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*o},"differenceHueSaturation"),mO=i((e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let r=sr(e.h),n=sr(t.h);return Math.abs(n-r)>180?r-(n-360*Math.sign(n-r)):n-r},"differenceHueNaive"),Td=i((e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let r=sr(e.h),n=sr(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*o},"differenceHueChroma"),gO=i((e="rgb",t=[1,1,1,0])=>{let r=Md(e),n=r.channels,o=r.difference,s=Xi(e);return(a,l)=>{let u=s(a),d=s(l);return Math.sqrt(n.reduce((f,h,m)=>{let g=o[h]?o[h](u,d):u[h]-d[h];return f+(t[m]||0)*Math.pow(isNaN(g)?0:g,2)},0))}},"differenceEuclidean"),Fo=i(e=>{let t=e.reduce((n,o)=>{if(o!==void 0){let s=o*Math.PI/180;n.sin+=Math.sin(s),n.cos+=Math.cos(s)}return n},{sin:0,cos:0}),r=Math.atan2(t.sin,t.cos)*180/Math.PI;return r<0?360+r:r},"averageAngle"),pO={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:fO},toMode:{rgb:hO},interpolate:{h:{use:V,fixup:Mo},s:V,l:V,alpha:{use:V,fixup:Vt}},difference:{h:Fd},average:{h:Fo}},si=i(({l:e,a:t,b:r,alpha:n},o="lch")=>{t===void 0&&(t=0),r===void 0&&(r=0);let s=Math.sqrt(t*t+r*r),a={mode:o,l:e,c:s};return s&&(a.h=sr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(a.alpha=n),a},"convertLabToLch"),ai=i(({l:e,c:t,h:r,alpha:n},o="lab")=>{r===void 0&&(r=0);let s={mode:o,l:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(s.alpha=n),s},"convertLchToLab"),M$=Math.pow(29,3)/Math.pow(3,3),F$=Math.pow(6,3)/Math.pow(29,3),Mt={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},js={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let Vf=i(e=>Math.pow(e,3)>F$?Math.pow(e,3):(116*e-16)/M$,"fn$1");const T$=i(({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,s=t/500+o,a=o-r/200,l={mode:"xyz65",x:Vf(s)*js.X,y:Vf(o)*js.Y,z:Vf(a)*js.Z};return n!==void 0&&(l.alpha=n),l},"convertLab65ToXyz65"),Nd=i(e=>hs(T$(e)),"convertLab65ToRgb"),qf=i(e=>e>F$?Math.cbrt(e):(M$*e+16)/116,"f$1"),N$=i(({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=qf(e/js.X),s=qf(t/js.Y),a=qf(r/js.Z),l={mode:"lab65",l:116*s-16,a:500*(o-s),b:200*(s-a)};return n!==void 0&&(l.alpha=n),l},"convertXyz65ToLab65"),Pd=i(e=>{let t=N$(fs(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},"convertRgbToLab65"),Mc=1,P$=1,Pl=26/180*Math.PI,Fc=Math.cos(Pl),Tc=Math.sin(Pl),I$=100/Math.log(139/100),$h=i(({l:e,c:t,h:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"lab65",l:(Math.exp(e*Mc/I$)-1)/.0039},s=(Math.exp(.0435*t*P$*Mc)-1)/.075,a=s*Math.cos(r/180*Math.PI-Pl),l=s*Math.sin(r/180*Math.PI-Pl);return o.a=a*Fc-l/.83*Tc,o.b=a*Tc+l/.83*Fc,n!==void 0&&(o.alpha=n),o},"convertDlchToLab65"),kh=i(({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=t*Fc+r*Tc,s=.83*(r*Fc-t*Tc),a=Math.sqrt(o*o+s*s),l={mode:"dlch",l:I$/Mc*Math.log(1+.0039*e),c:Math.log(1+.075*a)/(.0435*P$*Mc)};return l.c&&(l.h=sr((Math.atan2(s,o)+Pl)/Math.PI*180)),n!==void 0&&(l.alpha=n),l},"convertLab65ToDlch"),W1=i(e=>$h(si(e,"dlch")),"convertDlabToLab65"),K1=i(e=>ai(kh(e),"dlab"),"convertLab65ToDlab"),bO={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:W1,rgb:i(e=>Nd(W1(e)),"rgb")},fromMode:{lab65:K1,rgb:i(e=>K1(Pd(e)),"rgb")},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:Vt}}},yO={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:$h,dlab:i(e=>ai(e,"dlab"),"dlab"),rgb:i(e=>Nd($h(e)),"rgb")},fromMode:{lab65:kh,dlab:i(e=>si(e,"dlch"),"dlab"),rgb:i(e=>kh(Pd(e)),"rgb")},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:V,c:V,h:{use:V,fixup:Mo},alpha:{use:V,fixup:Vt}},difference:{h:Td},average:{h:Fo}};function vO({h:e,s:t,i:r,alpha:n}){e=sr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:r*(1+t*(3/(2-o)-1)),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1-t)};break;case 1:s={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1+t*(3/(2-o)-1)),b:r*(1-t)};break;case 2:s={r:r*(1-t),g:r*(1+t*(3/(2-o)-1)),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;case 3:s={r:r*(1-t),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1+t*(3/(2-o)-1))};break;case 4:s={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3/(2-o)-1))};break;case 5:s={r:r*(1+t*(3/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;default:s={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}i(vO,"convertHsiToRgb");function wO({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),s=Math.min(e,t,r),a={mode:"hsi",s:e+t+r===0?0:1-3*s/(e+t+r),i:(e+t+r)/3};return o-s!==0&&(a.h=(o===e?(t-r)/(o-s)+(t<r)*6:o===t?(r-e)/(o-s)+2:(e-t)/(o-s)+4)*60),n!==void 0&&(a.alpha=n),a}i(wO,"convertRgbToHsi");const $O={mode:"hsi",toMode:{rgb:vO},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:wO},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:Mo},s:V,i:V,alpha:{use:V,fixup:Vt}},difference:{h:Fd},average:{h:Fo}};function kO({h:e,s:t,l:r,alpha:n}){e=sr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=r+t*(r<.5?r:1-r),s=o-(o-r)*2*Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:o,g:s,b:2*r-o};break;case 1:a={r:s,g:o,b:2*r-o};break;case 2:a={r:2*r-o,g:o,b:s};break;case 3:a={r:2*r-o,g:s,b:o};break;case 4:a={r:s,g:2*r-o,b:o};break;case 5:a={r:o,g:2*r-o,b:s};break;default:a={r:2*r-o,g:2*r-o,b:2*r-o}}return a.mode="rgb",n!==void 0&&(a.alpha=n),a}i(kO,"convertHslToRgb");function xO({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),s=Math.min(e,t,r),a={mode:"hsl",s:o===s?0:(o-s)/(1-Math.abs(o+s-1)),l:.5*(o+s)};return o-s!==0&&(a.h=(o===e?(t-r)/(o-s)+(t<r)*6:o===t?(r-e)/(o-s)+2:(e-t)/(o-s)+4)*60),n!==void 0&&(a.alpha=n),a}i(xO,"convertRgbToHsl");const DO=i((e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},"hueToDeg"),AO=new RegExp(`^hsla?\\(\\s*${WI}${ia}${ul}${ia}${ul}\\s*(?:,\\s*${yg}\\s*)?\\)$`),EO=i(e=>{let t=e.match(AO);if(!t)return;let r={mode:"hsl"};return t[3]!==void 0?r.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(r.h=DO(t[1],t[2])),t[4]!==void 0&&(r.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(r.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?r.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[7]))),r},"parseHslLegacy");function CO(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const r={mode:"hsl"},[,n,o,s,a]=t;if(n.type!==j.None){if(n.type===j.Percentage)return;r.h=n.value}if(o.type!==j.None){if(o.type===j.Hue)return;r.s=o.value/100}if(s.type!==j.None){if(s.type===j.Hue)return;r.l=s.value/100}return a.type!==j.None&&(r.alpha=Math.min(1,Math.max(0,a.type===j.Number?a.value:a.value/100))),r}i(CO,"parseHsl");const O$={mode:"hsl",toMode:{rgb:kO},fromMode:{rgb:xO},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[CO,EO],serialize:i(e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:Mo},s:V,l:V,alpha:{use:V,fixup:Vt}},difference:{h:Fd},average:{h:Fo}};function B$({h:e,s:t,v:r,alpha:n}){e=sr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r,g:r*(1-t*o),b:r*(1-t)};break;case 1:s={r:r*(1-t*o),g:r,b:r*(1-t)};break;case 2:s={r:r*(1-t),g:r,b:r*(1-t*o)};break;case 3:s={r:r*(1-t),g:r*(1-t*o),b:r};break;case 4:s={r:r*(1-t*o),g:r*(1-t),b:r};break;case 5:s={r,g:r*(1-t),b:r*(1-t*o)};break;default:s={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}i(B$,"convertHsvToRgb");function R$({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),s=Math.min(e,t,r),a={mode:"hsv",s:o===0?0:1-s/o,v:o};return o-s!==0&&(a.h=(o===e?(t-r)/(o-s)+(t<r)*6:o===t?(r-e)/(o-s)+2:(e-t)/(o-s)+4)*60),n!==void 0&&(a.alpha=n),a}i(R$,"convertRgbToHsv");const L$={mode:"hsv",toMode:{rgb:B$},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:R$},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:Mo},s:V,v:V,alpha:{use:V,fixup:Vt}},difference:{h:Fd},average:{h:Fo}};function SO({h:e,w:t,b:r,alpha:n}){if(t===void 0&&(t=0),r===void 0&&(r=0),t+r>1){let o=t+r;t/=o,r/=o}return B$({h:e,s:r===1?1:1-t/(1-r),v:1-r,alpha:n})}i(SO,"convertHwbToRgb");function MO(e){let t=R$(e);if(t===void 0)return;let r=t.s!==void 0?t.s:0,n=t.v!==void 0?t.v:0,o={mode:"hwb",w:(1-r)*n,b:1-n};return t.h!==void 0&&(o.h=t.h),t.alpha!==void 0&&(o.alpha=t.alpha),o}i(MO,"convertRgbToHwb");function FO(e,t){if(!t||t[0]!=="hwb")return;const r={mode:"hwb"},[,n,o,s,a]=t;if(n.type!==j.None){if(n.type===j.Percentage)return;r.h=n.value}if(o.type!==j.None){if(o.type===j.Hue)return;r.w=o.value/100}if(s.type!==j.None){if(s.type===j.Hue)return;r.b=s.value/100}return a.type!==j.None&&(r.alpha=Math.min(1,Math.max(0,a.type===j.Number?a.value:a.value/100))),r}i(FO,"ParseHwb");const TO={mode:"hwb",toMode:{rgb:SO},fromMode:{rgb:MO},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[FO],serialize:i(e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:Mo},w:V,b:V,alpha:{use:V,fixup:Vt}},difference:{h:mO},average:{h:Fo}},j$=203,Id=.1593017578125,_$=78.84375,Od=.8359375,Bd=18.8515625,Rd=18.6875;function Wf(e){if(e<0)return 0;const t=Math.pow(e,1/_$);return 1e4*Math.pow(Math.max(0,t-Od)/(Bd-Rd*t),1/Id)}i(Wf,"transferPqDecode");function Kf(e){if(e<0)return 0;const t=Math.pow(e/1e4,Id);return Math.pow((Od+Bd*t)/(1+Rd*t),_$)}i(Kf,"transferPqEncode");const Gf=i(e=>Math.max(e/j$,0),"toRel"),G1=i(({i:e,t,p:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=Wf(e+.008609037037932761*t+.11102962500302593*r),s=Wf(e-.00860903703793275*t-.11102962500302599*r),a=Wf(e+.5600313357106791*t-.32062717498731885*r),l={mode:"xyz65",x:Gf(2.070152218389422*o-1.3263473389671556*s+.2066510476294051*a),y:Gf(.3647385209748074*o+.680566024947227*s-.0453045459220346*a),z:Gf(-.049747207535812*o-.0492609666966138*s+1.1880659249923042*a)};return n!==void 0&&(l.alpha=n),l},"convertItpToXyz65"),Hf=i((e=0)=>Math.max(e*j$,0),"toAbs"),H1=i(({x:e,y:t,z:r,alpha:n})=>{const o=Hf(e),s=Hf(t),a=Hf(r),l=Kf(.3592832590121217*o+.6976051147779502*s-.0358915932320289*a),u=Kf(-.1920808463704995*o+1.1004767970374323*s+.0753748658519118*a),d=Kf(.0070797844607477*o+.0748396662186366*s+.8433265453898765*a),f=.5*l+.5*u,h=1.61376953125*l-3.323486328125*u+1.709716796875*d,m=4.378173828125*l-4.24560546875*u-.132568359375*d,g={mode:"itp",i:f,t:h,p:m};return n!==void 0&&(g.alpha=n),g},"convertXyz65ToItp"),NO={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:G1,rgb:i(e=>hs(G1(e)),"rgb")},fromMode:{xyz65:H1,rgb:i(e=>H1(fs(e)),"rgb")},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:V,t:V,p:V,alpha:{use:V,fixup:Vt}}},PO=134.03437499999998,IO=16295499532821565e-27,Zf=i(e=>{if(e<0)return 0;let t=Math.pow(e/1e4,Id);return Math.pow((Od+Bd*t)/(1+Rd*t),PO)},"jabPqEncode"),Jf=i((e=0)=>Math.max(e*203,0),"abs"),U$=i(({x:e,y:t,z:r,alpha:n})=>{e=Jf(e),t=Jf(t),r=Jf(r);let o=1.15*e-.15*r,s=.66*t+.34*e,a=Zf(.41478972*o+.579999*s+.014648*r),l=Zf(-.20151*o+1.120649*s+.0531008*r),u=Zf(-.0166008*o+.2648*s+.6684799*r),d=(a+l)/2,f={mode:"jab",j:.44*d/(1-.56*d)-IO,a:3.524*a-4.066708*l+.542708*u,b:.199076*a+1.096799*l-1.295875*u};return n!==void 0&&(f.alpha=n),f},"convertXyz65ToJab"),OO=134.03437499999998,Z1=16295499532821565e-27,Yf=i(e=>{if(e<0)return 0;let t=Math.pow(e,1/OO);return 1e4*Math.pow((Od-t)/(Rd*t-Bd),1/Id)},"jabPqDecode"),Xf=i(e=>e/203,"rel"),z$=i(({j:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+Z1)/(.44+.56*(e+Z1)),s=Yf(o+.13860504*t+.058047316*r),a=Yf(o-.13860504*t-.058047316*r),l=Yf(o-.096019242*t-.8118919*r),u={mode:"xyz65",x:Xf(1.661373024652174*s-.914523081304348*a+.23136208173913045*l),y:Xf(-.3250758611844533*s+1.571847026732543*a-.21825383453227928*l),z:Xf(-.090982811*s-.31272829*a+1.5227666*l)};return n!==void 0&&(u.alpha=n),u},"convertJabToXyz65"),V$=i(e=>{let t=U$(fs(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},"convertRgbToJab"),q$=i(e=>hs(z$(e)),"convertJabToRgb"),BO={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:V$,xyz65:U$},toMode:{rgb:q$,xyz65:z$},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:V,a:V,b:V,alpha:{use:V,fixup:Vt}}},J1=i(({j:e,a:t,b:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),s={mode:"jch",j:e,c:o};return o&&(s.h=sr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},"convertJabToJch"),Y1=i(({j:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"jab",j:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertJchToJab"),RO={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:Y1,rgb:i(e=>q$(Y1(e)),"rgb")},fromMode:{rgb:i(e=>J1(V$(e)),"rgb"),jab:J1},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:V,fixup:Mo},c:V,j:V,alpha:{use:V,fixup:Vt}},difference:{h:Td},average:{h:Fo}},Ld=Math.pow(29,3)/Math.pow(3,3),vg=Math.pow(6,3)/Math.pow(29,3);let Qf=i(e=>Math.pow(e,3)>vg?Math.pow(e,3):(116*e-16)/Ld,"fn");const wg=i(({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,s=t/500+o,a=o-r/200,l={mode:"xyz50",x:Qf(s)*Mt.X,y:Qf(o)*Mt.Y,z:Qf(a)*Mt.Z};return n!==void 0&&(l.alpha=n),l},"convertLabToXyz50"),nu=i(({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Ea({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*r,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*r,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*r});return n!==void 0&&(o.alpha=n),o},"convertXyz50ToRgb"),W$=i(e=>nu(wg(e)),"convertLabToRgb"),ou=i(e=>{let{r:t,g:r,b:n,alpha:o}=Aa(e),s={mode:"xyz50",x:.436065742824811*t+.3851514688337912*r+.14307845442264197*n,y:.22249319175623702*t+.7168870538238823*r+.06061979053616537*n,z:.013923904500943465*t+.09708128566574634*r+.7140993584005155*n};return o!==void 0&&(s.alpha=o),s},"convertRgbToXyz50"),e0=i(e=>e>vg?Math.cbrt(e):(Ld*e+16)/116,"f"),$g=i(({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=e0(e/Mt.X),s=e0(t/Mt.Y),a=e0(r/Mt.Z),l={mode:"lab",l:116*s-16,a:500*(o-s),b:200*(s-a)};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLab"),K$=i(e=>{let t=$g(ou(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},"convertRgbToLab");function LO(e,t){if(!t||t[0]!=="lab")return;const r={mode:"lab"},[,n,o,s,a]=t;if(!(n.type===j.Hue||o.type===j.Hue||s.type===j.Hue))return n.type!==j.None&&(r.l=Math.min(Math.max(0,n.value),100)),o.type!==j.None&&(r.a=o.type===j.Number?o.value:o.value*125/100),s.type!==j.None&&(r.b=s.type===j.Number?s.value:s.value*125/100),a.type!==j.None&&(r.alpha=Math.min(1,Math.max(0,a.type===j.Number?a.value:a.value/100))),r}i(LO,"parseLab");const kg={mode:"lab",toMode:{xyz50:wg,rgb:W$},fromMode:{xyz50:$g,rgb:K$},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[LO],serialize:i(e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:Vt}}},jO={...kg,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:T$,rgb:Nd},fromMode:{xyz65:N$,rgb:Pd},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function _O(e,t){if(!t||t[0]!=="lch")return;const r={mode:"lch"},[,n,o,s,a]=t;if(n.type!==j.None){if(n.type===j.Hue)return;r.l=Math.min(Math.max(0,n.value),100)}if(o.type!==j.None&&(r.c=Math.max(0,o.type===j.Number?o.value:o.value*150/100)),s.type!==j.None){if(s.type===j.Percentage)return;r.h=s.value}return a.type!==j.None&&(r.alpha=Math.min(1,Math.max(0,a.type===j.Number?a.value:a.value/100))),r}i(_O,"parseLch");const xg={mode:"lch",toMode:{lab:ai,rgb:i(e=>W$(ai(e)),"rgb")},fromMode:{rgb:i(e=>si(K$(e)),"rgb"),lab:si},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[_O],serialize:i(e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:Mo},c:V,l:V,alpha:{use:V,fixup:Vt}},difference:{h:Td},average:{h:Fo}},UO={...xg,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:i(e=>ai(e,"lab65"),"lab65"),rgb:i(e=>Nd(ai(e,"lab65")),"rgb")},fromMode:{rgb:i(e=>si(Pd(e),"lch65"),"rgb"),lab65:i(e=>si(e,"lch65"),"lab65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},G$=i(({l:e,u:t,v:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),s={mode:"lchuv",l:e,c:o};return o&&(s.h=sr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},"convertLuvToLchuv"),H$=i(({l:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"luv",l:e,u:t?t*Math.cos(r/180*Math.PI):0,v:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertLchuvToLuv"),Z$=i((e,t,r)=>4*e/(e+15*t+3*r),"u_fn$1"),J$=i((e,t,r)=>9*t/(e+15*t+3*r),"v_fn$1"),zO=Z$(Mt.X,Mt.Y,Mt.Z),VO=J$(Mt.X,Mt.Y,Mt.Z),qO=i(e=>e<=vg?Ld*e:116*Math.cbrt(e)-16,"l_fn"),xh=i(({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=qO(t/Mt.Y),s=Z$(e,t,r),a=J$(e,t,r);!isFinite(s)||!isFinite(a)?o=s=a=0:(s=13*o*(s-zO),a=13*o*(a-VO));let l={mode:"luv",l:o,u:s,v:a};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLuv"),WO=i((e,t,r)=>4*e/(e+15*t+3*r),"u_fn"),KO=i((e,t,r)=>9*t/(e+15*t+3*r),"v_fn"),GO=WO(Mt.X,Mt.Y,Mt.Z),HO=KO(Mt.X,Mt.Y,Mt.Z),Dh=i(({l:e,u:t,v:r,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),r===void 0&&(r=0);let o=t/(13*e)+GO,s=r/(13*e)+HO,a=Mt.Y*(e<=8?e/Ld:Math.pow((e+16)/116,3)),l=a*(9*o)/(4*s),u=a*(12-3*o-20*s)/(4*s),d={mode:"xyz50",x:l,y:a,z:u};return n!==void 0&&(d.alpha=n),d},"convertLuvToXyz50"),ZO=i(e=>G$(xh(ou(e))),"convertRgbToLchuv"),JO=i(e=>nu(Dh(H$(e))),"convertLchuvToRgb"),YO={mode:"lchuv",toMode:{luv:H$,rgb:JO},fromMode:{rgb:ZO,luv:G$},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:V,fixup:Mo},c:V,l:V,alpha:{use:V,fixup:Vt}},difference:{h:Td},average:{h:Fo}},XO={...Da,mode:"lrgb",toMode:{rgb:Ea},fromMode:{rgb:Aa},parse:["srgb-linear"],serialize:"srgb-linear"},QO={mode:"luv",toMode:{xyz50:Dh,rgb:i(e=>nu(Dh(e)),"rgb")},fromMode:{xyz50:xh,rgb:i(e=>xh(ou(e)),"rgb")},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:V,u:V,v:V,alpha:{use:V,fixup:Vt}}},Y$=i(({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*r),s=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*r),a=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*r),l={mode:"oklab",l:.210454268309314*o+.7936177747023054*s-.0040720430116193*a,a:1.9779985324311684*o-2.42859224204858*s+.450593709617411*a,b:.0259040424655478*o+.7827717124575296*s-.8086757549230774*a};return n!==void 0&&(l.alpha=n),l},"convertLrgbToOklab"),jd=i(e=>{let t=Y$(Aa(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},"convertRgbToOklab"),iu=i(({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.pow(e+.3963377773761749*t+.2158037573099136*r,3),s=Math.pow(e-.1055613458156586*t-.0638541728258133*r,3),a=Math.pow(e-.0894841775298119*t-1.2914855480194092*r,3),l={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*s+.2309699031821044*a,g:-1.2684379732850317*o+2.6097573492876887*s-.3413193760026573*a,b:-.0041960761386756*o-.7034186179359362*s+1.7076146940746117*a};return n!==void 0&&(l.alpha=n),l},"convertOklabToLrgb"),_d=i(e=>Ea(iu(e)),"convertOklabToRgb");function Ah(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}i(Ah,"toe");function Nc(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}i(Nc,"toe_inv");function eB(e,t){let r,n,o,s,a,l,u,d;-1.88170328*e-.80936493*t>1?(r=1.19086277,n=1.76576728,o=.59662641,s=.75515197,a=.56771245,l=4.0767416621,u=-3.3077115913,d=.2309699292):1.81444104*e-1.19445276*t>1?(r=.73956515,n=-.45954404,o=.08285427,s=.1254107,a=.14503204,l=-1.2684380046,u=2.6097574011,d=-.3413193965):(r=1.35733652,n=-.00915799,o=-1.1513021,s=-.50559606,a=.00692167,l=-.0041960863,u=-.7034186147,d=1.707614701);let f=r+n*e+o*t+s*e*e+a*e*t,h=.3963377774*e+.2158037573*t,m=-.1055613458*e-.0638541728*t,g=-.0894841775*e-1.291485548*t;{let p=1+f*h,y=1+f*m,w=1+f*g,k=p*p*p,D=y*y*y,C=w*w*w,P=3*h*p*p,R=3*m*y*y,J=3*g*w*w,ee=6*h*h*p,te=6*m*m*y,Y=6*g*g*w,pe=l*k+u*D+d*C,we=l*P+u*R+d*J,Fe=l*ee+u*te+d*Y;f=f-pe*we/(we*we-.5*pe*Fe)}return f}i(eB,"compute_max_saturation");function Dg(e,t){let r=eB(e,t),n=iu({l:1,a:r*e,b:r*t}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),s=o*r;return[o,s]}i(Dg,"find_cusp");function tB(e,t,r,n,o,s=null){s||(s=Dg(e,t));let a;if((r-o)*s[1]-(s[0]-o)*n<=0)a=s[1]*o/(n*s[0]+s[1]*(o-r));else{a=s[1]*(o-1)/(n*(s[0]-1)+s[1]*(o-r));{let l=r-o,u=n,d=.3963377774*e+.2158037573*t,f=-.1055613458*e-.0638541728*t,h=-.0894841775*e-1.291485548*t,m=l+u*d,g=l+u*f,p=l+u*h;{let y=o*(1-a)+a*r,w=a*n,k=y+w*d,D=y+w*f,C=y+w*h,P=k*k*k,R=D*D*D,J=C*C*C,ee=3*m*k*k,te=3*g*D*D,Y=3*p*C*C,pe=6*m*m*k,we=6*g*g*D,Fe=6*p*p*C,nt=4.0767416621*P-3.3077115913*R+.2309699292*J-1,Ge=4.0767416621*ee-3.3077115913*te+.2309699292*Y,Ar=4.0767416621*pe-3.3077115913*we+.2309699292*Fe,qt=Ge/(Ge*Ge-.5*nt*Ar),Vn=-nt*qt,to=-1.2684380046*P+2.6097574011*R-.3413193965*J-1,on=-1.2684380046*ee+2.6097574011*te-.3413193965*Y,Qt=-1.2684380046*pe+2.6097574011*we-.3413193965*Fe,We=on/(on*on-.5*to*Qt),Pt=-to*We,sn=-.0041960863*P-.7034186147*R+1.707614701*J-1,cr=-.0041960863*ee-.7034186147*te+1.707614701*Y,an=-.0041960863*pe-.7034186147*we+1.707614701*Fe,kn=cr/(cr*cr-.5*sn*an),To=-sn*kn;Vn=qt>=0?Vn:1e6,Pt=We>=0?Pt:1e6,To=kn>=0?To:1e6,a+=Math.min(Vn,Math.min(Pt,To))}}}return a}i(tB,"find_gamut_intersection");function Ag(e,t,r=null){r||(r=Dg(e,t));let n=r[0],o=r[1];return[o/n,o/(1-n)]}i(Ag,"get_ST_max");function X$(e,t,r){let n=Dg(t,r),o=tB(t,r,e,1,e,n),s=Ag(t,r,n),a=.11516993+1/(7.4477897+4.1590124*r+t*(-2.19557347+1.75198401*r+t*(-2.13704948-10.02301043*r+t*(-4.24894561+5.38770819*r+4.69891013*t)))),l=.11239642+1/(1.6132032-.68124379*r+t*(.40370612+.90148123*r+t*(-.27087943+.6122399*r+t*(.00299215-.45399568*r-.14661872*t)))),u=o/Math.min(e*s[0],(1-e)*s[1]),d=e*a,f=(1-e)*l,h=.9*u*Math.sqrt(Math.sqrt(1/(1/(d*d*d*d)+1/(f*f*f*f))));return d=e*.4,f=(1-e)*.8,[Math.sqrt(1/(1/(d*d)+1/(f*f))),h,o]}i(X$,"get_Cs");function X1(e){const t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:Ah(t)};e.alpha!==void 0&&(o.alpha=e.alpha);let s=Math.sqrt(r*r+n*n);if(!s)return o.s=0,o;let[a,l,u]=X$(t,r/s,n/s),d;if(s<l){let f=0,h=.8*a,m=1-h/l;d=(s-f)/(h+m*(s-f))*.8}else{let f=l,h=.2*l*l*1.25*1.25/a,m=1-h/(u-l);d=.8+.2*((s-f)/(h+m*(s-f)))}return d&&(o.s=d,o.h=sr(Math.atan2(n,r)*180/Math.PI)),o}i(X1,"convertOklabToOkhsl");function Q1(e){let t=e.h!==void 0?e.h:0,r=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:Nc(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!r||n===1)return o.a=o.b=0,o;let s=Math.cos(t/180*Math.PI),a=Math.sin(t/180*Math.PI),[l,u,d]=X$(o.l,s,a),f,h,m,g;r<.8?(f=1.25*r,h=0,m=.8*l,g=1-m/u):(f=5*(r-.8),h=u,m=.2*u*u*1.25*1.25/l,g=1-m/(d-u));let p=h+f*m/(1-g*f);return o.a=p*s,o.b=p*a,o}i(Q1,"convertOkhslToOklab");const rB={...O$,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:X1,rgb:i(e=>X1(jd(e)),"rgb")},toMode:{oklab:Q1,rgb:i(e=>_d(Q1(e)),"rgb")}};function ey(e){let t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(r*r+n*n),s=o?r/o:1,a=o?n/o:1,[l,u]=Ag(s,a),d=.5,f=1-d/l,h=u/(o+t*u),m=h*t,g=h*o,p=Nc(m),y=g*p/m,w=iu({l:p,a:s*y,b:a*y}),k=Math.cbrt(1/Math.max(w.r,w.g,w.b,0));t=t/k,o=o/k*Ah(t)/t,t=Ah(t);const D={mode:"okhsv",s:o?(d+u)*g/(u*d+u*f*g):0,v:t?t/m:0};return D.s&&(D.h=sr(Math.atan2(n,r)*180/Math.PI)),e.alpha!==void 0&&(D.alpha=e.alpha),D}i(ey,"convertOklabToOkhsv");function ty(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const r=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,s=Math.cos(r/180*Math.PI),a=Math.sin(r/180*Math.PI),[l,u]=Ag(s,a),d=.5,f=1-d/l,h=1-n*d/(d+u-u*f*n),m=n*u*d/(d+u-u*f*n),g=Nc(h),p=m*g/h,y=iu({l:g,a:s*p,b:a*p}),w=Math.cbrt(1/Math.max(y.r,y.g,y.b,0)),k=Nc(o*h),D=m*k/h;return t.l=k*w,t.a=D*s*w,t.b=D*a*w,t}i(ty,"convertOkhsvToOklab");const nB={...L$,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:ey,rgb:i(e=>ey(jd(e)),"rgb")},toMode:{oklab:ty,rgb:i(e=>_d(ty(e)),"rgb")}};function oB(e,t){if(!t||t[0]!=="oklab")return;const r={mode:"oklab"},[,n,o,s,a]=t;if(!(n.type===j.Hue||o.type===j.Hue||s.type===j.Hue))return n.type!==j.None&&(r.l=Math.min(Math.max(0,n.type===j.Number?n.value:n.value/100),1)),o.type!==j.None&&(r.a=o.type===j.Number?o.value:o.value*.4/100),s.type!==j.None&&(r.b=s.type===j.Number?s.value:s.value*.4/100),a.type!==j.None&&(r.alpha=Math.min(1,Math.max(0,a.type===j.Number?a.value:a.value/100))),r}i(oB,"parseOklab");const iB={...kg,mode:"oklab",toMode:{lrgb:iu,rgb:_d},fromMode:{lrgb:Y$,rgb:jd},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[oB],serialize:i(e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize")};function sB(e,t){if(!t||t[0]!=="oklch")return;const r={mode:"oklch"},[,n,o,s,a]=t;if(n.type!==j.None){if(n.type===j.Hue)return;r.l=Math.min(Math.max(0,n.type===j.Number?n.value:n.value/100),1)}if(o.type!==j.None&&(r.c=Math.max(0,o.type===j.Number?o.value:o.value*.4/100)),s.type!==j.None){if(s.type===j.Percentage)return;r.h=s.value}return a.type!==j.None&&(r.alpha=Math.min(1,Math.max(0,a.type===j.Number?a.value:a.value/100))),r}i(sB,"parseOklch");const aB={...xg,mode:"oklch",toMode:{oklab:i(e=>ai(e,"oklab"),"oklab"),rgb:i(e=>_d(ai(e,"oklab")),"rgb")},fromMode:{rgb:i(e=>si(jd(e),"oklch"),"rgb"),oklab:i(e=>si(e,"oklch"),"oklab")},parse:[sB],serialize:i(e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),ranges:{l:[0,1],c:[0,.4],h:[0,360]}},ry=i(e=>{let{r:t,g:r,b:n,alpha:o}=Aa(e),s={mode:"xyz65",x:.486570948648216*t+.265667693169093*r+.1982172852343625*n,y:.2289745640697487*t+.6917385218365062*r+.079286914093745*n,z:0*t+.0451133818589026*r+1.043944368900976*n};return o!==void 0&&(s.alpha=o),s},"convertP3ToXyz65"),ny=i(({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Ea({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*r,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*r,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*r},"p3");return n!==void 0&&(o.alpha=n),o},"convertXyz65ToP3"),lB={...Da,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:i(e=>ny(fs(e)),"rgb"),xyz65:ny},toMode:{rgb:i(e=>hs(ry(e)),"rgb"),xyz65:ry}},t0=i(e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},"gamma$1"),oy=i(({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"prophoto",r:t0(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*r),g:t0(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*r),b:t0(e*0+t*0+1.2119675456389452*r)};return n!==void 0&&(o.alpha=n),o},"convertXyz50ToProphoto"),r0=i((e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},"linearize$1"),iy=i(e=>{let t=r0(e.r),r=r0(e.g),n=r0(e.b),o={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*r+.0313477341283922*n,y:.2880748288194013*t+.7118352342418731*r+899369387256e-16*n,z:0*t+0*r+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertProphotoToXyz50"),uB={...Da,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:oy,rgb:i(e=>oy(ou(e)),"rgb")},toMode:{xyz50:iy,rgb:i(e=>nu(iy(e)),"rgb")}},sy=1.09929682680944,cB=.018053968510807,n0=i(e=>{const t=Math.abs(e);return t>cB?(Math.sign(e)||1)*(sy*Math.pow(t,.45)-(sy-1)):4.5*e},"gamma"),ay=i(({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"rec2020",r:n0(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*r),g:n0(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*r),b:n0(e*.0176398574453108-t*.0427706132578085+.9421031212354739*r)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRec2020"),ly=1.09929682680944,dB=.018053968510807,o0=i((e=0)=>{let t=Math.abs(e);return t<dB*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+ly-1)/ly,1/.45)},"linearize"),uy=i(e=>{let t=o0(e.r),r=o0(e.g),n=o0(e.b),o={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*r+.1688809751641721*n,y:.262700212011267*t+.6779980715188708*r+.059301716469862*n,z:0*t+.0280726930490874*r+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertRec2020ToXyz65"),fB={...Da,mode:"rec2020",fromMode:{xyz65:ay,rgb:i(e=>ay(fs(e)),"rgb")},toMode:{xyz65:uy,rgb:i(e=>hs(uy(e)),"rgb")},parse:["rec2020"],serialize:"rec2020"},zi=.0037930732552754493,Q$=Math.cbrt(zi),i0=i(e=>Math.cbrt(e)-Q$,"transfer$1"),hB=i(e=>{const{r:t,g:r,b:n,alpha:o}=Aa(e),s=i0(.3*t+.622*r+.078*n+zi),a=i0(.23*t+.692*r+.078*n+zi),l=i0(.2434226892454782*t+.2047674442449682*r+.5518098665095535*n+zi),u={mode:"xyb",x:(s-a)/2,y:(s+a)/2,b:l-(s+a)/2};return o!==void 0&&(u.alpha=o),u},"convertRgbToXyb"),s0=i(e=>Math.pow(e+Q$,3),"transfer"),mB=i(({x:e,y:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=s0(e+t)-zi,s=s0(t-e)-zi,a=s0(r+t)-zi,l=Ea({r:11.031566904639861*o-9.866943908131562*s-.16462299650829934*a,g:-3.2541473810744237*o+4.418770377582723*s-.16462299650829934*a,b:-3.6588512867136815*o+2.7129230459360922*s+1.9459282407775895*a});return n!==void 0&&(l.alpha=n),l},"convertXybToRgb"),gB={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:mB},fromMode:{rgb:hB},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:V,y:V,b:V,alpha:{use:V,fixup:Vt}}},pB={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:nu,lab:$g},fromMode:{rgb:ou,lab:wg},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:Vt}}},bB=i(e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let s={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*r-.0501922295431356*n,y:.0296278156881593*t+.990434484573249*r-.0170738250293851*n,z:-.0092430581525912*t+.0150551448965779*r+.7518742899580008*n};return o!==void 0&&(s.alpha=o),s},"convertXyz65ToXyz50"),yB=i(e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let s={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*r+.0632593086610217*n,y:-.0283697069632081*t+1.0099954580058226*r+.021041398966943*n,z:.0123140016883199*t-.0205076964334779*r+1.3303659366080753*n};return o!==void 0&&(s.alpha=o),s},"convertXyz50ToXyz65"),vB={mode:"xyz65",toMode:{rgb:hs,xyz50:bB},fromMode:{rgb:fs,xyz50:yB},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:Vt}}},wB=i(({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*r,i:.59597799*e-.2741761*t-.32180189*r,q:.21147017*e-.52261711*t+.31114694*r};return n!==void 0&&(o.alpha=n),o},"convertRgbToYiq"),$B=i(({y:e,i:t,q:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"rgb",r:e+.95608445*t+.6208885*r,g:e-.27137664*t-.6486059*r,b:e-1.10561724*t+1.70250126*r};return n!==void 0&&(o.alpha=n),o},"convertYiqToRgb"),kB={mode:"yiq",toMode:{rgb:$B},fromMode:{rgb:wB},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:V,i:V,q:V,alpha:{use:V,fixup:Vt}}},xB=i(e=>Math.max(0,Math.min(1,e||0)),"clamp"),a0=i(e=>Math.round(xB(e)*255),"fixup"),DB=Xi("rgb"),AB=i(e=>{if(e===void 0)return;let t=a0(e.r),r=a0(e.g),n=a0(e.b);return"#"+(1<<24|t<<16|r<<8|n).toString(16).slice(1)},"serializeHex"),EB=i(e=>AB(DB(e)),"formatHex"),CB=i(e=>{const t={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},"fixup_rgb"),SB=i(e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1),"inrange_rgb");function MB(e="rgb"){const{gamut:t}=Md(e);if(!t)return n=>!0;const r=Xi(typeof t=="string"?t:e);return n=>SB(r(n))}i(MB,"inGamut");function FB(e="rgb"){const{gamut:t}=Md(e);if(!t)return s=>bh(s);const r=typeof t=="string"?t:e,n=Xi(r),o=MB(r);return s=>{const a=bh(s);if(!a)return;const l=n(a);if(o(l))return a;const u=CB(l);return a.mode===u.mode?u:Xi(a.mode)(u)}}i(FB,"clampGamut");_e(lO);_e(pO);_e(bO);_e(yO);_e($O);_e(O$);_e(L$);_e(TO);_e(NO);_e(BO);_e(RO);_e(kg);_e(jO);_e(xg);_e(UO);_e(YO);_e(XO);_e(QO);_e(rB);_e(nB);_e(iB);_e(aB);_e(lB);_e(uB);_e(fB);_e(Da);_e(gB);_e(pB);_e(vB);_e(kB);const TB=gO("rgb");class vo{static{i(this,"Color")}constructor(t){this.set(t)}static isValidColorString(t){try{return new vo(t),!0}catch{return!1}}static isColor(t){return t instanceof vo}static deserialize(t){const r=JSON.parse(t),n=new vo("black");return Nn(r).forEach(([o,s])=>{o==="originalColorSyntax"?n.originalColorSyntax=bt.isEnumValue(s,$e,"Cannot deserialize: invalid color syntax."):n._allColors[o]=s}),n}getRgbDistance(t){return TB(this.#e,t)}getClosestNamedColor(){return Ve(Nl).reduce((t,r)=>{const n=this.getRgbDistance(r);return n<t.distance?{distance:n,name:r}:t},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=$e.hex;#e=bt.isDefined(wh("black"));_allColors={names:["black"],[$e.name]:"black",hexString:"#000000",[$e.hex]:{r:0,g:0,b:0},[$e.rgb]:{r:0,g:0,b:0},[$e.hsl]:{h:0,s:0,l:0},[$e.hwb]:{h:0,w:0,b:0},[$e.lab]:{l:0,a:0,b:0},[$e.lch]:{l:0,c:0,h:0},[$e.oklab]:{l:0,a:0,b:0},[$e.oklch]:{l:0,c:0,h:0}};clone(){return vo.deserialize(this.serialize())}setByString(t){const r=wh(t);if(!r)throw new Error(`Unable to parse invalid color string: '${t}'`);this.originalColorSyntax=LI(t),this.#e=r,this.pullFromInternalColor()}set(t){if(M.isString(t))return this.setByString(t);if(jt.isLengthExactly(Object.keys(t),1,`Cannot set multiple color formats at once: got '${f6(Object.keys(t))}'`),t.hexString||t.name)this.setByString(t.hexString||t.name);else{const[r,n]=bt.isDefined(Nn(t)[0]),o=Kn[r],s=Object.values(st(o.coords,a=>{const l=n[a],u=o.coords[bt.isKeyOf(a,o.coords)],d=l!=null&&l>=u.min&&l<=u.max?n[a]:this[r][a];return bt.isDefined(d)}));this.setByString(`${o.conversionFormat}(${s.join(" ")})`)}}pullFromInternalColor(){qr(ii).forEach(t=>{const r=Kn[t],n=r.conversionFormat,o=M.isKeyOf(this.#e.mode,Kn)?Kn[this.#e.mode]:void 0,s=FB(r.colorSpace===o?.colorSpace?n:"rgb")(Xi(n)(this.#e));s||jt.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${t}'.`),Ve(this[t]).forEach(a=>{const l=s[a],u=r.coords[bt.isKeyOf(a,r.coords)];l!=null&&(this._allColors[t][a]=$2((l||0)*(u.factor||1),{digits:u.digits||0}))})}),this._allColors.hexString=EB(this.#e),this._allColors.names=NB(this.rgb),this._allColors[$e.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return En(this._allColors)}toFormattedStrings(){return{...st(Kn,r=>Object.values(this[r]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(j1," "),[$e.name]:(this.names[0]||"").padEnd(j1," "),[$e.hexString]:this[$e.hexString]}}toCss(){return{...st(Kn,r=>{const n=Object.values(this[r]);return`${r}(${n.join(" ")})`}),[$e.hexString]:this[$e.hexString],[$e.name]:this.names[0]||""}}get names(){return En(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[$e.hexString]}get hex(){return En(this._allColors[$e.hex])}get rgb(){return En(this._allColors[$e.rgb])}get hsl(){return En(this._allColors[$e.hsl])}get hwb(){return En(this._allColors[$e.hwb])}get lab(){return En(this._allColors[$e.lab])}get lch(){return En(this._allColors[$e.lch])}get oklab(){return En(this._allColors[$e.oklab])}get oklch(){return En(this._allColors[$e.oklch])}}function NB(e){return yn(Nn(Nl),([t])=>t,(t,[,r])=>M.deepEquals(r,[e.r,e.g,e.b]))}i(NB,"findMatchingColorNames");function Vr(e){return E`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}i(Vr,"colorCss");const l0=zn()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:i(({cssVars:e})=>E`
        :host {
            display: flex;
            align-items: center;
            font-family: ${pg["vira-monospace"].value};
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
    `,"styles"),events:{valueChange:tt()},render({inputs:e,events:t,dispatch:r,cssVars:n}){const o=Kn[e.colorFormatName],s=o.coords[e.colorCoordinateName];if(!s)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const a=10,l=T3(a,h=>{const m=s.min+(s.max-s.min)*(h/a);return new vo({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:m}}).toCss()[o.conversionFormat]}),u=E`linear-gradient(to right, ${xe(l.join(","))})`,d=bt.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),f=s.radix?Math.round(d).toString(s.radix).toUpperCase().padStart(s.radixPad||0,"0"):String(d);return b`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${E`
                    ${n["vir-color-slider-gradient"].name}: ${u};
                `}
                step=${Math.pow(10,s.digits?-s.digits:0)}
                ${EN(h=>{jt.instanceOf(h,HTMLInputElement),h.min=String(s.min),h.max=String(s.max),h.value=String(d)})}
                ${U("input",h=>{const m=xd(h,HTMLInputElement),g=Number(m.value);isNaN(g)||r(new t.valueChange(g))})}
            />
            <${Ne.assign({value:f})}
                ${U(Ne.events.valueChange,h=>{const m=s.radix?parseInt(h.detail,s.radix):Number(h.detail);isNaN(m)||r(new t.valueChange(m))})}
            ></${Ne}>
        `}}),u0=zn()({tagName:"vir-color-format-sliders",styles:E`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${ru};
        }
    `,events:{colorChange:tt()},render({inputs:e,dispatch:t,events:r}){const n=Kn[e.colorFormatName],o=Ve(n.coords).map(s=>b`
                    <${l0.assign({color:e.color,colorCoordinateName:s,colorFormatName:e.colorFormatName})}
                        ${U(l0.events.valueChange,a=>{const l=e.color.clone();l.set({[e.colorFormatName]:{[s]:a.detail}});const u=l.toCss()[n.conversionFormat];t(new r.colorChange(u))})}
                    ></${l0}>
                `);return b`
            ${e.showFormatName?b`
                      <h3>${e.colorFormatName}</h3>
                  `:re}
            ${o}
        `}}),c0=zn()({tagName:"vir-color-swatch",styles:E`
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
    `,render({inputs:e}){const t=e.backgroundColor||e.foregroundColor,r=e.foregroundColor||"transparent";return b`
            <div
                style=${E`
                    background-color: ${xe(t)};
                    color: ${xe(r)};
                `}
            >
                <slot></slot>
            </div>
        `}}),d0=zn()({tagName:"vir-contrast-indicator",styles:E`
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

        .${xe(he.Invisible)} {
            color: red;
        }
        .${xe(he.Decoration)} {
            color: #ff6600;
        }
        .${xe(he.Placeholder)} {
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
    `,render({inputs:e}){const t=Ed.toReversed().slice(1).map(o=>b`
                    <div
                        class="gauge-level ${Dr({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return b`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${wP[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),cy=zn()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":i(({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything,"vir-color-pair-no-contrast-tips")},styles:i(({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Rt};
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
            font-family: ${pg["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${ru};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${d0} {
            margin-top: 1px;
        }
    `,"styles"),render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(l=>{const u=[r.color[l].name,r.showVarValues||e.forceShowEverything?":":""].filter(M.isTruthy).join(""),d=r.showVarValues||e.forceShowEverything?b`
                          <span>${r.color[l].default}</span>
                      `:re;return b`
                <p>
                    <span>${u}</span>
                    ${d}
                </p>
            `}),o=r.showVarNames||e.forceShowEverything?b`
                      <div class="css-var-names">${n}</div>
                  `:re,s=e.previewElement?bP({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,a=s&&(r.showContrast||e.forceShowEverything)?b`
                      <${d0.assign({contrast:s,fontWeight:r.fontWeight})}></${d0}>
                  `:re;return b`
            <button
                ${U("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${Ji(l=>{t({previewElement:bt.instanceOf(l,HTMLElement)})})}
                class="color-preview"
                style=${E`
                    color: ${xe(r.color.foreground.default)};
                    background: ${xe(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${E`
                                visibility: ${xe((s?.fontSizes[400]||1/0)>150?"hidden":"visible")};
                                font-weight: ${r.fontWeight};
                                font-size: ${s?s.fontSizes[400]:14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${a} ${o}
        `}});class PB{static{i(this,"LocalStorageClient")}shapes;options;constructor(t,r={}){this.shapes=t,this.options=r,this.storeName=r.storeName||"local-storage-client",this.get=st(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.set=st(this.shapes,n=>o=>{kc(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const s=this.getAllValues();return s[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(s)),o}),this.delete=st(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o))})}storeName;getAllValues({throwErrorOnFailure:t=!1}={}){return m2(()=>{const r=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return g2(r,(n,o)=>{const s=this.shapes[n];if(s){if(t)kc(o,s,{allowExtraKeys:!0});else if(!Wo(o,s,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:i(r=>{if(t)throw sa(r,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}},"handleError")})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const f0=new PB({lastFormat:Hi(ii)}),IB=ml(ii).map(e=>({value:e,label:e.toUpperCase()})),ja=zn()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:Ws.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:Ws.Length}},state(){return{selectedFormatName:f0.get.lastFormat()||ii.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":i(({inputs:e})=>!!e.alwaysShowPicker,"vir-color-picker-always-show")},styles:i(({cssVars:e,hostClasses:t})=>E`
        :host {
            display: inline-flex;
        }

        ${t["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${Rt}
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

            & ${c0} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${pg["vira-monospace"].value};
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
            ${I["vira-form-border-color"].name}: #ddd;
            color: #666;

            & ${Ne} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,"styles"),events:{colorChange:tt()},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const s=vo.isColor(e.color)?e.color:new vo(e.color||"black"),a=Kn[n.selectedFormatName],l=n.rawInput??s.toCss()[a.rawSyntax],u=b`
            <div class="raw-input-wrapper">
                <${Ne.assign({value:l})}
                    ${U(Ne.events.valueChange,m=>{const g=m.detail;o({rawInput:g}),vo.isValidColorString(g)&&t(new r.colorChange(g))})}
                ></${Ne}>
                <button
                    class="code-button"
                    ${U("click",async()=>{await globalThis.navigator.clipboard.writeText(l)})}
                >
                    <${B.assign({icon:ch,fitContainer:!0})}></${B}>
                </button>
            </div>
        `,d=b`
            <button
                class="code-button"
                ${U("click",async()=>{await globalThis.navigator.clipboard.writeText(s.hexString)})}
            >
                <span>${s.hexString}</span>
                <${B.assign({icon:ch,fitContainer:!0})}></${B}>
            </button>
        `,f=b`
            <div class="swatch-wrapper">
                <${c0.assign({backgroundColor:s})}></${c0}>
                ${e.showHexValue?d:re}
            </div>
        `,h=b`
            <div class="picker">
                <${qe.assign({options:IB,value:n.selectedFormatName})}
                    ${U(qe.events.valueChange,m=>{const g=zh.isEnumValue(m.detail,ii);g&&(o({selectedFormatName:g}),f0.set.lastFormat(g))})}
                ></${qe}>
                ${u}
                <${u0.assign({color:s,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${U(u0.events.colorChange,m=>{t(new r.colorChange(m.detail)),o({rawInput:void 0})})}
                ></${u0}>
            </div>
        `;return e.alwaysShowPicker?b`
                ${f} ${h}
            `:b`
                <${fe.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${fe.slotNames.trigger}
                        ${U("mousedown",()=>{const m=f0.get.lastFormat();m&&o({selectedFormatName:m})})}
                    >
                        ${f}
                    </button>
                    <div class="pop-up" slot=${fe.slotNames.popUp}>
                        ${h}
                    </div>
                </${fe}>
            `}}),Pu="None";function OB({parent:e,title:t,theme:r,hideInverseColors:n,overrides:o,useVerticalLayout:s,prefixGroupByCount:a=2,hideCopyCode:l}){const u={"Show Var Names":{controlType:le.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:le.Checkbox,initValue:!0}},d={"Theme Override":{controlType:le.Dropdown,initValue:Pu,options:[Pu,...(o||[]).map(w=>{if(w.name===Pu)throw new Error(`Cannot have theme override named '${Pu}'`);return w.name})]}},f=Pe({parent:e,title:t,controls:u});function h({controls:w,theme:k,themeColorName:D}){const C=M.isKeyOf(D,k.colors)?k.colors[D]:void 0,P=M.isKeyOf(D,k.inverse)?k.inverse[D]:void 0;if(!C||!P)throw new Error(`No theme color found by name '${D}'`);const R=b`
            <${cy.assign({color:C,showVarValues:!0,showVarNames:w["Show Var Names"],showContrast:w["Show Contrast Tips"],fontWeight:400})}></${cy}>
        `;return b`
            <div class="with-inverse">${R}${re}</div>
        `}i(h,"buildThemeColorTemplate");function m(w,k,D){const C=F3(Object.keys(k.colors),P=>a?P.split("-").slice(0,a).join("-"):P);Object.entries(C).forEach(([P,R])=>{R&&w({title:P,styles:E`
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
                    `,render({controls:J}){const te=("Theme Override"in J&&J["Theme Override"]&&D?.find(Y=>Y.name===J["Theme Override"])||void 0)?.asTheme||k;return b`
                            <div class="theme-wrapper">
                                ${R.map(Y=>h({controls:J,theme:te,themeColorName:Y}))}
                            </div>
                        `}})})}i(m,"createThemePageExamples");const g=["Click a color preview to show CSS var names and values."],p=Pe({parent:f,title:"Default",descriptionParagraphs:g,useVerticalExamples:s,controls:{...d},defineExamples({defineExample:w}){m(w,r,o)}}),y=(o||[]).map(w=>Pe({parent:f,title:w.name,useVerticalExamples:s,descriptionParagraphs:g,defineExamples({defineExample:k}){m(k,w.asTheme,void 0)}}));return[f,p,...y]}i(OB,"createColorThemeBookPages");function BB(e){if(!M.hasKey(N1,e))throw new Error(`No ViraTag color for variant '${e}'`);const t=N1[e];return E`
        :host(
                .vira-tag-color-${xe(e)}.vira-tag-emphasis-${xe(Vo.Standard)}
            )
            button {
            ${Vr(dr[t]["behind-bg"][he.NonBodyText])}
            border-color: ${dr[t]["behind-bg"][he.NonBodyText].background.value};

            &:hover {
                ${Vr(dr[t]["behind-bg"][he.Header])}
                border-color: ${dr[t]["behind-bg"][he.Header].background.value};
            }
            &:active {
                ${Vr(dr[t]["behind-bg"][he.NonBodyText])}
                border-color: ${dr[t]["behind-bg"][he.NonBodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${xe(e)}.vira-tag-emphasis-${xe(Vo.Subtle)}
            )
            button {
            ${Vr(dr[t]["on-self"][he.BodyText])}
            border-color: ${dr[t]["on-self"][he.BodyText].background.value};

            &:hover {
                ${Vr(dr[t]["on-self"][he.NonBodyText])}
                border-color: ${dr[t]["on-self"][he.NonBodyText].background.value};
            }
            &:active {
                ${Vr(dr[t]["on-self"][he.BodyText])}
                border-color: ${dr[t]["on-self"][he.BodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${xe(e)}.vira-tag-not-checked.vira-tag-not-checked.vira-tag-not-checked
            )
            button {
            color: ${dr[t]["on-self"][he.BodyText].foreground.value};
            background-color: transparent;
            border-color: ${dr[t]["on-self"][he.BodyText].background.value};

            &:hover {
                background-color: ${dr[t]["behind-bg"][he.Invisible].background.value};
            }
            &:active {
                background-color: ${dr[t]["behind-bg"][he.Decoration].background.value};
            }
        }
    `}i(BB,"generateThemeCss");function RB(){return xe([dn.Accent,dn.Danger,dn.Neutral,dn.Positive,dn.Warning].map(e=>BB(e)).join(" "))}i(RB,"generateAutomaticViraTagThemeVariants");const _a=rt()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"white","vira-tag-background-color":"black","vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:tt(),cancel:tt()},hostClasses:{"vira-tag-selectable":i(({inputs:e})=>M.isBoolean(e.isClickable?.selected),"vira-tag-selectable"),"vira-tag-checked":i(({inputs:e})=>!!e.isClickable?.selected,"vira-tag-checked"),"vira-tag-not-checked":i(({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-not-checked"),"vira-tag-cancellable":i(({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-cancellable"),"vira-tag-not-clickable":i(({inputs:e})=>!e.isClickable,"vira-tag-not-clickable"),"vira-tag-disabled":i(({inputs:e})=>!!e.disabled,"vira-tag-disabled"),"vira-tag-size-large":i(({inputs:e})=>e.size===Ei.Large,"vira-tag-size-large"),"vira-tag-size-medium":i(({inputs:e})=>!e.size||e.size===Ei.Medium,"vira-tag-size-medium"),"vira-tag-size-small":i(({inputs:e})=>e.size===Ei.Small,"vira-tag-size-small"),"vira-tag-emphasis-standard":i(({inputs:e})=>!e.emphasis||e.emphasis===Vo.Standard,"vira-tag-emphasis-standard"),"vira-tag-emphasis-subtle":i(({inputs:e})=>e.emphasis===Vo.Subtle,"vira-tag-emphasis-subtle"),"vira-tag-color-accent":i(({inputs:e})=>!e.color||e.color===dn.Accent,"vira-tag-color-accent"),"vira-tag-color-plain":i(({inputs:e})=>e.color===dn.Plain,"vira-tag-color-plain"),"vira-tag-color-neutral":i(({inputs:e})=>e.color===dn.Neutral,"vira-tag-color-neutral"),"vira-tag-color-danger":i(({inputs:e})=>e.color===dn.Danger,"vira-tag-color-danger"),"vira-tag-color-warning":i(({inputs:e})=>e.color===dn.Warning,"vira-tag-color-warning"),"vira-tag-color-positive":i(({inputs:e})=>e.color===dn.Positive,"vira-tag-color-positive")},styles:i(({cssVars:e,hostClasses:t})=>E`
        :host {
            display: inline-flex;
        }

        button {
            ${Rt}
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
            height: ${If[Ei.Large]}px;
            font-size: ${I["vira-form-large-text-size"].value};
            padding: 0 var(${e["vira-tag-horizontal-padding"].name}, 16px);
        }
        ${t["vira-tag-size-medium"].selector} button {
            height: ${If[Ei.Medium]}px;
            font-size: ${I["vira-form-medium-text-size"].value};
        }
        ${t["vira-tag-size-small"].selector} button {
            height: ${If[Ei.Small]}px;
            font-size: ${I["vira-form-small-text-size"].value};
        }

        ${RB()}

        :host(.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}) {
            cursor: not-allowed;
            ${oi}

            & button {
                ${Vr(oe.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${oe.colors["vira-grey-behind-bg-decoration"].background.value}
            }

            &.${t["vira-tag-emphasis-subtle"].name} button {
                ${Vr(oe.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${oe.colors["vira-grey-behind-bg-decoration"].background.value}
            }
        }

        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${xe(Vo.Standard)}
            )
            button {
            ${Vr(oe.inverse[Nr])};
            border-color: ${oe.inverse[Nr].background.value};

            &:hover {
                ${Vr(oe.colors["vira-grey-behind-bg-non-body"])};
                border-color: ${oe.colors["vira-grey-behind-bg-non-body"].background.value};
            }
            &:active {
                ${Vr(oe.inverse[Nr])};
                border-color: ${oe.inverse[Nr].background.value};
            }
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${xe(Vo.Subtle)}
            )
            button {
            background-color: transparent;
            color: ${oe.colors[Nr].foreground.value};
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            color: ${oe.colors[Nr].foreground.value};
            background-color: transparent;
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${xe(Vo.Subtle)}
            )
            button,
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            &:hover {
                ${Vr(oe.colors["vira-grey-behind-fg-small-body"])}
                border-color: ${oe.colors["vira-grey-behind-fg-small-body"].background.value};
            }
            &:active {
                ${Vr(oe.colors["vira-grey-behind-fg-body"])}
                border-color: ${oe.colors["vira-grey-behind-fg-body"].background.value};
            }
        }
    `,"styles"),render({inputs:e,dispatch:t,events:r}){const n=!e.isClickable||!!e.disabled;return b`
            <button
                ?disabled=${n}
                ${U("click",()=>{n||(e.isClickable?.selected!=null?t(new r.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&t(new r.cancel))})}
            >
                <${B.assign({icon:p$})}
                    class="selected-check"
                ></${B}>
                <span class="text">${String(e.text)}</span>
                <${B.assign({icon:x$})}
                    class="cancel-x"
                ></${B}>
            </button>
        `}});function ek(e){return yN({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}i(ek,"createDynamicElementLoader");function tk(e,{ready:t,loading:r,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(s=>({[s.key]:s.element}))):t({[e.value.key]:e.value.element})}i(tk,"renderDynamicElement");const nn=K5(),fn=nn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:i(({cssVars:e})=>E`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,"styles"),render:i(({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return b`
            <a
                href=${r}
                ${U("click",n=>{(!e.router||n$(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new Ac(e.route)))})}
            >
                <slot></slot>
            </a>
        `},"render")});function LB(e,t){return e.entry.entryType===rr.Root?!1:e.entry.entryType===rr.Page||M.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:M.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}i(LB,"shouldShowTreeNodeInNav");const ks=nn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:i(({cssVars:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Oe["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Oe["element-book-nav-hover-background-color"].value};
            color: ${Oe["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Oe["element-book-nav-active-background-color"].value};
            color: ${Oe["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${fn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Oe["element-book-nav-selected-background-color"].value};
            color: ${Oe["element-book-nav-selected-foreground-color"].value};
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
            color: ${Oe["element-book-accent-icon-color"].value};
        }
    `,"styles"),render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!LB(r,e.selectedPath))return;const n=E`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return b`
                <li style=${n}>
                    <${fn.assign({router:e.router,route:{paths:[Pr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Dr({"title-row":!0,selected:e.selectedPath?M.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Br(Is(r,rr.ElementExample),b`
                                    <${B.assign({icon:v$})}></${B}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${fn}>
                </li>
            `});return b`
            <${fn.assign({route:Vs,router:e.router})}>
                <slot>Book</slot>
            </${fn}>
            <ul>
                ${t}
            </ul>
        `}}),li=nn()({tagName:"book-error",styles:E`
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
    `,render({inputs:e}){return(M.isArray(e.message)?e.message:[e.message]).map(r=>b`
                <p>${r}</p>
            `)}}),Il=nn()({tagName:"book-page-controls",events:{controlValueChange:tt()},hostClasses:{"book-page-controls-has-controls":i(({inputs:e})=>!!Object.keys(e.config).length,"book-page-controls-has-controls")},styles:i(({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Oe["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Ne}, ${qe} {
            height: 24px;
            max-width: 128px;
        }

        ${B}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,"styles"),render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],s)=>{if(o.controlType===le.Hidden)return"";const a=jB(e.currentValues[n],o,l=>{const u=M.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(d=>[d,e.currentValues[d]])),[n]:l}}))});return b`
                    <div class="control-wrapper">
                        ${Br(s===0,b`
                                <${B.assign({icon:Ls})}
                                    class="options-icon"
                                ></${B}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===le.Custom?b`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function jB(e,t,r){return ki(t,le.Hidden)?"":ki(t,le.Checkbox)?b`
            <${ge.assign({value:!!e})}
                ${U(ge.events.valueChange,n=>{r(n.detail)})}
            ></${ge}>
        `:ki(t,le.Color)?b`
            <${ja.assign({color:e})}
                style=${E`
                    ${ja.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${ja.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${U(ja.events.colorChange,n=>{r(n.detail)})}
            ></${ja}>
        `:ki(t,le.Text)?b`
            <${Ne.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${U(Ne.events.valueChange,n=>{r(n.detail)})}
            ></${Ne}>
        `:ki(t,le.Number)?b`
            <${Ne.assign({value:e,allowedInputs:/[\d.]/})}
                ${U(Ne.events.valueChange,n=>{r(n.detail)})}
            ></${Ne}>
        `:ki(t,le.Dropdown)?b`
            <${qe.assign({value:e,options:t.options.map(n=>({label:n,value:n}))})}
                ${U(qe.events.valueChange,n=>{r(n.detail)})}
            ></${qe}>
        `:ki(t,le.Custom)?t.content:b`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}i(jB,"createControlInput");const dy=nn()({tagName:"book-breadcrumbs",styles:E`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:i(({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const s=n>=o.length-1,a=o.slice(0,n+1),l=s?"":b`
                      <span class="spacer">&gt;</span>
                  `;return b`
                <${fn.assign({route:{hash:void 0,search:void 0,paths:[Pr.Book,...a]},router:e.router})}>
                    ${r}
                </${fn}>
                ${l}
            `}):b`
                &nbsp;
            `},"render")}),h0=nn()({tagName:"book-breadcrumbs-bar",styles:E`
        :host {
            border-bottom: 1px solid
                ${Oe["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Oe["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return b`
            ${Br(!!e.currentSearch,b`
                    &nbsp;
                `,b`
                    <${dy.assign({currentRoute:e.currentRoute,router:e.router})}></${dy}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${U("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await Vi({milliseconds:200}),n.value===o&&(n.value?t(new Ac({paths:[Pr.Search,encodeURIComponent(n.value)]})):t(new Ac(Vs)))})}
            />
        `}}),fy=nn()({tagName:"book-entry-description",styles:E`
        :host {
            color: ${Oe["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Oe["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>b`
                <p>${t}</p>
            `)}}),hy=nn()({tagName:"book-page-wrapper",styles:E`
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

        ${fn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?b`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:b`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Pr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?h2(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?t:b`
                  <${fn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${fn}>
              `;return b`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?b`
                              <${li.assign({message:n.message})}></${li}>
                          `:b`
                              <${fy.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${fy}>
                              <${Il.assign({config:e.pageNode.entry.controls,currentValues:Zh(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Il}>
                          `}
                </div>
            </div>
        `}}),Iu=nn()({tagName:"book-element-example-title",styles:E`
        :host {
            display: flex;
            color: ${Oe["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[Pr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return b`
            <${fn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${fn}>
        `}}),my=Symbol("unset-internal-state"),gy=nn()({tagName:"book-element-example-viewer",state(){return{isUnset:my}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw h2(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===my&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return b`
                ${Br(!!t.elementExampleNode.entry.styles,b`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Jt(n)),console.error(n),b`
                <${li.assign({message:`${t.elementExampleNode.entry.title} failed: ${Jt(n)}`})}></${li}>
            `}},options:{allowPolymorphicState:!0}}),py=nn()({tagName:"book-element-example-wrapper",styles:E`
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
            color: ${Oe["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Iu} {
            color: ${Oe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return b`
            <div class="individual-example-wrapper">
                <${Iu.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${Iu}>
                <${gy.assign(e)}></${gy}>
            </div>
        `}}),_B={milliseconds:10};let Ya;const Pc=new Map,Fi=new Map;function UB(){return Ya||(Ya=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Pc.get(r);if(n)if(t.isIntersecting){if(!Fi.has(r)){const o=globalThis.setTimeout(()=>{Fi.delete(r),n(),Ya?.unobserve(r),Pc.delete(r)},Us(_B,{milliseconds:!0}).milliseconds);Fi.set(r,o)}}else{const o=Fi.get(r);o&&(clearTimeout(o),Fi.delete(r))}}},{rootMargin:"100px"})),Ya}i(UB,"getSharedObserver");function by(e){const t=Fi.get(e);t&&(clearTimeout(t),Fi.delete(e)),Pc.delete(e),Ya?.unobserve(e)}i(by,"unobserveElement");const Ou=nn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:E`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&by(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:b`
            <div
                class="placeholder"
                ${Ji(n=>{t.placeholderElement&&by(t.placeholderElement),r({placeholderElement:n}),Pc.set(n,()=>{r({hasRendered:!0})}),UB().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function rk(e,t,r,n){const o=O0(r,n),s=[];if(o){const a=rk(e,t,o,n);a&&s.push(a)}if(Is(r,rr.Page)&&!e.includes(r)){const a=Zh(t,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:a,breadcrumbs:st(a,()=>r.fullUrlBreadcrumbs)})}return s.reduce((a,l)=>({config:{...a.config,...l.config},current:{...a.current,...l.current},breadcrumbs:{...a.breadcrumbs,...l.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}i(rk,"getFlattenedControlsFromHiddenParents");function zB({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:o,controls:s,originalTree:a}){if(!t.length&&o)return[b`
                No results
            `];const l=M.isLengthAtLeast(t,1)?rk(t,s,t[0],a):void 0,u=l&&Object.values(l.config).length&&M.isLengthAtLeast(t,1)?b`
                  <${Il.assign({config:l.config,currentValues:l.current,fullUrlBreadcrumbs:l.breadcrumbs})}></${Il}>
              `:re,d=wN(t,f=>f.fullUrlBreadcrumbs.join(">"),f=>{if(Is(f,rr.Page))return b`
                    <${hy.assign({blockNavigation:e,isTopLevel:r,pageNode:f,controls:s,router:n})}
                        class="block-entry"
                    ></${hy}>
                `;if(Is(f,rr.ElementExample)){const h=Zh(s,f.fullUrlBreadcrumbs.slice(0,-1)),m=b`
                    <${py.assign({blockNavigation:e,elementExampleNode:f,currentPageControls:h,router:n})}></${py}>
                `;return b`
                    <${Ou.assign({content:m})}
                        class="inline-entry ${Dr({"block-entry":f.entry.isVertical})}"
                    ></${Ou}>
                `}else{if(Is(f,rr.Root))return re;{const h=b`
                    <${li.assign({message:`Unknown entry type for rendering: '${f.entry.entryType}'`})}></${li}>
                `;return b`
                    <${Ou.assign({content:h})}
                        class="block-entry"
                    ></${Ou}>
                `}}});return[u,d]}i(zB,"createNodeTemplates");const xs=nn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:E`
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

        ${h0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${$o["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:tt()},render:i(({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const s=S2(e.currentRoute.paths),a=zB({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return b`
            <${h0.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${h0}>

            ${Br(e.showLoading,b`
                    <div
                        ${Ji(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${B.assign({icon:Yi})}></${B}>
                    </div>
                    ${Br(!!n.lastElement,b`
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
        `},"render")});function VB(e,t,r){const n=yy(e,t);return n.length?n:(r(Vs),yy(e,Vs.paths))}i(VB,"getCurrentNodes");function yy(e,t){return e.filter(r=>g6({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}i(yy,"filterNodes");const Bu=zn()({tagName:"element-book-app",state(){return{currentRoute:Vs,router:void 0,loading:!0,colors:{config:void 0,theme:v1(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:tt()},slotNames:["footer","navHeader"],styles:E`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Oe["element-book-page-background-color"].value};
            color: ${Oe["element-book-page-foreground-color"].value};
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
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:i(({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:s,slotNames:a})=>{t._debug&&console.info("rendering element-book app");function l(h){return{...e.currentRoute,...h}}i(l,"mergeRoutes");function u(h){const m=l(h);return!M.jsonEquals(e.currentRoute,m)}i(u,"areRoutesNew");function d(h){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,h].filter(M.isTruthy).join(" - "))}i(d,"updateWindowTitle");function f(h){if(!u(h))return;const m=l(h);e.router?e.router.setRoute(m):n({currentRoute:{...e.currentRoute,...m}}),t.elementBookRoutePaths&&!M.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new s.pathUpdate(m.paths))}i(f,"updateRoutes");try{if(t.elementBookRoutePaths&&!M.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&f({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=lP(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,C=>{n({currentRoute:C})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const h={themeColor:t.themeColor};if(!M.jsonEquals(h,e.colors.config)){const D=v1(h);n({colors:{config:h,theme:D}}),J6(r,D)}const m=t._debug??!1,g=$6({entries:t.pages,debug:m});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:C2(g.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=S2(e.currentRoute.paths),w=(p?ZN({flattenedNodes:g.flattenedNodes,searchQuery:p}):void 0)??VB(g.flattenedNodes,e.currentRoute.paths,f);d(w[0]?.entry.title);const k=e.treeBasedControls?.controls;return k?(t._debug&&console.info({currentControls:k}),b`
                <div
                    class="root"
                    ${U(Ac,D=>{const C=D.detail;if(!u(C))return;if(n({loading:!0}),f(C),!(r.shadowRoot.querySelector(ks.tagName)instanceof ks))throw new TypeError(`Failed to find child '${ks.tagName}'`)})}
                    ${U(Il.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const C=x6(k,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:C}})})}
                >
                    ${t.blockNavigation?re:b`
                              <${ks.assign({flattenedNodes:g.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${a.navHeader}></slot>
                              </${ks}>
                          `}
                    <${xs.assign({blockNavigation:!!t.blockNavigation,controls:k,currentNodes:w,currentRoute:e.currentRoute,debug:m,originalTree:g.tree,router:e.router,showLoading:e.loading})}
                        ${U(xs.events.loadingRender,async D=>{await w1();const C=r.shadowRoot.querySelector(xs.tagName);C?C.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${xs.tagName}' for scrolling.`),await w1(),n({loading:!D.detail})})}
                    >
                        <slot name=${a.footer}></slot>
                    </${xs}>
                </div>
            `):b`
                    <${li.assign({message:"Failed to generate page controls."})}></${li}>
                `}catch(h){return console.error(h),b`
                <p class="error">${Jt(h)}</p>
            `}},"render")}),mt=Pe({title:"Elements",parent:void 0}),Eg=Pe({title:"Styles",parent:void 0}),Cg=Pe({title:"Util",parent:void 0}),qB=Pe({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:le.Color,initValue:""},"Fill Color":{controlType:le.Color,initValue:""},"Stroke Width":{controlType:le.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(fh).forEach(t=>{e({title:t.name,styles:E`
                    :host(:hover) ${B} {
                        background-color: #f2f2f2;
                    }

                    ${B} {
                        padding: 8px;
                        border-radius: ${I["vira-form-radius"].value};
                    }
                `,render({controls:r}){const n=E`
                        ${v["vira-icon-fill-color"].name}: ${xe(r["Fill Color"]||"inherit")};
                        ${v["vira-icon-stroke-color"].name}: ${xe(r["Stroke Color"]||"inherit")};
                        ${v["vira-icon-stroke-width"].name}: ${xe(r["Stroke Width"]?hl(r["Stroke Width"]):"inherit")};
                    `;return b`
                        <${B.assign({icon:t})}
                            style=${n}
                        ></${B}>
                    `}})})}}),WB=OB({parent:Eg,theme:oe,title:"Vira Theme",hideInverseColors:!0,overrides:[dP],hideCopyCode:!0}),KB=Pe({title:zr.name,parent:Cg,descriptionParagraphs:["Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){e({title:"stroke color",styles:E`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=zr(Lt,{"vira-icon-stroke-color":"red"});return b`
                    <${B.assign({icon:Lt})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:t})}></${B}>
                `}}),e({title:"fill color",styles:E`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=zr(dh,{"vira-icon-fill-color":"gold","vira-icon-stroke-color":"orange"});return b`
                    <${B.assign({icon:dh})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:t})}></${B}>
                `}}),e({title:"stroke width",styles:E`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=zr(Za,{"vira-icon-stroke-color":"green","vira-icon-stroke-width":"3px"});return b`
                    <${B.assign({icon:Za})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:t})}></${B}>
                `}}),e({title:"with CSS var values",styles:E`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=zr(Za,{"vira-icon-stroke-color":`${I["vira-form-error-color"].value}`}),r=zr(Za,{"vira-icon-stroke-color":`${I["vira-form-success-color"].value}`});return b`
                    <${B.assign({icon:t})}></${B}>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"multiple icons with different colors",styles:E`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,render(){const t=zr(Lt,{"vira-icon-stroke-color":"red"}),r=zr(Lt,{"vira-icon-stroke-color":"dodgerblue"}),n=zr(Lt,{"vira-icon-stroke-color":"green"}),o=zr(Lt,{"vira-icon-stroke-color":"purple"});return b`
                    <${B.assign({icon:t})}></${B}>
                    <${B.assign({icon:r})}></${B}>
                    <${B.assign({icon:n})}></${B}>
                    <${B.assign({icon:o})}></${B}>
                `}})}}),nk={async element1(){return await Vi({seconds:2}),(await oc(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-Bx-Lz3UC.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Vi({seconds:2}),(await oc(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-ELkfYfX5.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},vy=zn()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:ek(nk)}},render({state:e,inputs:t}){return tk(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return b`
                    <${Ui}>
                        ${Qi("Failed to import element",Jt(r))}
                    </${Ui}>
                `},loading(){return b`
                    <${B.assign({icon:Yi})}></${B}>
                `},ready(r){if(r.element1)return b`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return b`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;jt.never("The error element will always error")}})}}),wy=zn()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:ek(nk)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),tk(e.dynamicElements,{error(r){return b`
                    <${Ui}>
                        ${Qi("Failed to import element",Jt(r))}
                    </${Ui}>
                `},loading(){return b`
                    <${B.assign({icon:Yi})}></${B}>
                `},ready(r){if(r.element1)return b`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return b`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;jt.never("The error element will always error")}})}}),$y=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],GB=Pe({parent:Cg,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return b`
                    <${qe.assign({value:String(t.value),options:$y})}
                        ${U(qe.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${qe}>
                    <${vy.assign({numberValue:t.value})}></${vy}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return b`
                    <${qe.assign({value:String(t.value),options:$y})}
                        ${U(qe.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${qe}>
                    <${wy.assign({numberValue:t.value})}></${wy}>
                `}})}}),HB=[{title:"unselected",content:"my label",inputs:{selected:!1}},{title:"selected",content:"my label",inputs:{selected:!0}},{title:"with custom child",content:"custom child",inputs:{selected:!0},customTemplate:b`
            <b>This is custom</b>
        `},{title:"constrained width",content:"has more text than is possible to fit",customStyle:E`
            :host {
                max-width: 100px;
            }
        `,inputs:{selected:!0}},{title:"stretched width",content:"wide",customStyle:E`
            ${Jo} {
                width: 400px;
            }
        `,inputs:{selected:!0}},{title:"disabled",content:"my label",inputs:{selected:!0,disabled:!0}},{title:"no default pointer styles",content:"my label",inputs:{selected:!0,disablePointerStyles:!0}},{title:"icon override",content:"my label",inputs:{selected:!1,iconOverride:zr(Ls,{"vira-icon-stroke-color":"blue"})}},{title:"with ViraLink content",customStyle:E`
            ${Jn} {
                text-decoration: none;
            }
        `,content:b`
            <${Jn.assign({link:{url:"https://example.com",newTab:!0},disableLinkStyles:!0})}>
                link label
            </${Jn}>
        `,inputs:{selected:!1}}],ZB=Pe({title:Jo.tagName,parent:mt,defineExamples({defineExample:e}){HB.forEach(t=>{e({title:t.title,styles:t.customStyle,render(){return b`
                        <${Jo.assign(t.inputs)}>${t.content}</${Jo}>
                    `}})})}}),Xa=[{content:"one"},{content:"two"},{content:"three"},{content:"four"},{content:"five"},{content:"six"}],ky={content:b`
        <div
            style=${E`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `}
        >
            This menu item is much longer than the others
        </div>
    `},JB=[{title:"basic"},{title:"rounded",inputs:{menuCornerStyle:s$.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",menuItems:[...Xa,ky]},{title:"restricted long item",inputs:{horizontalAnchor:_i.Both},menuItems:[...Xa,ky]},{title:"ViraLink URL item",menuItems:[...Xa,{content:b`
                    <${Jn.assign({link:{url:"https://www.wikipedia.org",newTab:!0},disableLinkStyles:!0})}>
                        Wikipedia link
                    </${Jn}>
                `}]},{title:"ViraLink route item",menuItems:[...Xa,{content:b`
                    <${Jn.assign({route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(e,t){return console.info(e,t),!1}}},disableLinkStyles:!0})}>
                        Route link
                    </${Jn}>
                `}]}],YB=Pe({parent:mt,title:Mu.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){JB.forEach(t=>{e({title:t.title,styles:E`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){const r=t.menuItems||Xa;return b`
                        <${Mu.assign({popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger" slot=${Mu.slotNames.trigger}>
                                Trigger Menu
                            </div>
                            ${h$(r)}
                        </${Mu}>
                    `}})})}}),XB=[{title:"basic",items:[{content:"one"},{content:"two"},{content:"three"}]},{title:"with selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three"}]},{title:"with multi selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three",selected:!0}]},{title:"with disabled item",items:[{content:"one"},{content:"two",disabled:!0},{content:"three"}]}],QB=Pe({parent:mt,title:ji.tagName,defineExamples({defineExample:e}){XB.forEach(t=>{e({title:t.title,render(){return b`
                        <${ji.assign({...t.menuInputs})}>
                            ${t.items.map(r=>b`
                                    <${Jo.assign({selected:r.selected,disabled:r.disabled,disablePointerStyles:r.disablePointerStyles})}>
                                        ${r.content}
                                    </${Jo}>
                                `)}
                        </${ji}>
                    `}})})}}),eR=Pe({parent:mt,title:fe.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:E`
                ${fe} {
                    ${I["vira-form-focus-outline-border-radius"].name}: 0;
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
                    <${fe.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${fe.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>Pop up!</div>
                    </${fe}>
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
                    <${fe.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${fe.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${fe}>
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
                    <${fe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:_i.Right})}>
                        <div slot=${fe.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${fe}>
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
                    <${fe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:_i.Left})}>
                        <div slot=${fe.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${fe}>
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
                    <${fe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:_i.Right})}>
                        <div slot=${fe.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${fe.slotNames.popUp}>not long</div>
                    </${fe}>
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
                `}})}}),tR=[{title:"menu shadow",styles:Li.menuShadow},{title:"menu shadow reversed",styles:Li.menuShadowReversed},{title:"modal",styles:Li.modal}],rR=Pe({parent:Eg,title:"Shadows",defineExamples({defineExample:e}){tR.forEach(t=>{e({title:t.title,styles:E`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${t.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return b`
                        <div class="shadow-block"></div>
                    `}})})}}),nR=Pe({parent:mt,title:gt.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:le.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return b`
                    <${gt.assign({text:"Text here",bold:!1})}></${gt}>
                `}}),e({title:"Bold",render(){return b`
                    <${gt.assign({text:"Text here",bold:!0})}></${gt}>
                `}}),e({title:"Dynamic",render({controls:t}){return b`
                    <${gt.assign({text:"Text here",bold:t.bolded})}></${gt}>
                `}}),e({title:"Resized",styles:E`
                ${gt} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return b`
                    <${gt.assign({text:"Not Bolded",bold:!1})}></${gt}>
                    <${gt.assign({text:"Bolded",bold:!0})}></${gt}>
                `}}),e({title:"Alignment",styles:E`
                ${gt} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return b`
                    <${gt.assign({text:"Not Bolded",bold:!1})}></${gt}>
                    <${gt.assign({text:"Bolded",bold:!0})}></${gt}>
                `}}),e({title:"Stylized",styles:E`
                ${gt} {
                    text-decoration: underline;
                }
            `,render(){return b`
                    <${gt.assign({text:"Not Bolded",bold:!1})}></${gt}>
                    <${gt.assign({text:"Bolded",bold:!0})}></${gt}>
                `}})}}),oR=Pe({parent:mt,title:lt.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:le.Color,initValue:""},"Secondary color":{controlType:le.Color,initValue:""},"Hover color":{controlType:le.Color,initValue:""},"Active color":{controlType:le.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:o}){const s=n??E``;e({title:r,styles:s,render({controls:a}){const l=E`
                        ${I["vira-form-accent-primary-color"].name}: ${xe(a["Primary color"]||"inherit")};
                        ${I["vira-form-background-color"].name}: ${xe(a["Secondary color"]||"inherit")};
                        ${I["vira-form-accent-primary-hover-color"].name}: ${xe(a["Hover color"]||"inherit")};
                        ${I["vira-form-accent-primary-active-color"].name}: ${xe(a["Active color"]||"inherit")};
                    `;return b`
                        <${lt.assign({text:"hello",...o})}
                            style=${l}
                        ></${lt}>
                    `}})}i(t,"defineViraButtonExample"),t({title:"basic"}),t({title:"with icon",inputs:{icon:Ls}}),t({title:"with expanding icon",inputs:{icon:Ls,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Gn.Outline}}),t({title:"ghost",inputs:{buttonStyle:Gn.Ghost}}),t({title:"plain",inputs:{buttonStyle:Gn.Plain}}),t({title:"danger",inputs:{buttonStyle:Gn.Danger}}),t({title:"danger outline",inputs:{buttonStyle:Gn.DangerOutline}}),t({title:"only icon",inputs:{icon:Ls,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"menu caret",inputs:{showMenuCaret:!0}}),t({title:"custom width",styles:E`
                ${lt} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:E`
                ${lt} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:E`
                :host {
                    ${I["vira-form-accent-primary-color"].name}: pink;
                    ${I["vira-form-background-color"].name}: purple;
                    ${I["vira-form-accent-primary-hover-color"].name}: orange;
                    ${I["vira-form-accent-primary-active-color"].name}: yellow;
                }
            `,render(){return b`
                    <${lt.assign({text:"hello"})}></${lt}>
                `}})}}),iR=[{title:"basic"},{title:"success",inputs:{cardState:hh.Success}},{title:"error",inputs:{cardState:hh.Error}},{title:"long",content:b`
            <p
                style=${E`
                    ${ru}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],sR=Pe({parent:mt,title:Rf.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){iR.forEach(t=>{e({title:t.title,render(){return b`
                        <${Rf.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${Rf}>
                    `}})})}}),aR=Pe({parent:mt,title:ge.tagName,controls:{Checked:{controlType:le.Checkbox,initValue:!1},Disabled:{controlType:le.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return b`
                    <${ge.assign({value:t.checked})}
                        ${U(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return b`
                    <${ge.assign({value:t.checked})}
                        ${U(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return b`
                    <${ge.assign({value:t.checked,hasError:!0})}
                        ${U(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"disabled unchecked",render(){return b`
                    <${ge.assign({value:!1,disabled:!0})}></${ge}>
                `}}),e({title:"disabled checked",render(){return b`
                    <${ge.assign({value:!0,disabled:!0})}></${ge}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return b`
                    <${ge.assign({value:t.Checked,disabled:t.Disabled})}></${ge}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return b`
                    <${ge.assign({value:!0})}></${ge}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return b`
                    <${ge.assign({value:t.checked,label:"label goes here"})}
                        ${U(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return b`
                    <${ge.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${U(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:E`
                ${ge} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return b`
                    <${ge.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${U(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:t,updateState:r}){return b`
                    <${ge.assign({value:t.checked,fillWhenChecked:!0})}
                        ${U(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return b`
                    <${ge.assign({value:t.checked,fillWhenUnchecked:!0})}
                        ${U(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:t,updateState:r}){return b`
                    <${ge.assign({value:t.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${U(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}})}}),lR=Pe({title:Wt.tagName,parent:mt,descriptionParagraphs:["A collapsible card element with built-in header, caret icon, and card styling. Wraps ViraCollapsibleWrapper with opinionated styles."],defineExamples({defineExample:e}){e({title:"basic",styles:E`
                p {
                    ${Rt}
                }
            `,render(){return b`
                    <${Wt}>
                        <span slot=${Wt.slotNames.header}>Card Header</span>
                        <p>Card content goes here.</p>
                    </${Wt}>
                `}}),e({title:"start expanded",styles:E`
                p {
                    ${Rt}
                }
            `,render(){return b`
                    <${Wt.assign({startExpanded:!0})}>
                        <span slot=${Wt.slotNames.header}>
                            Expanded Card Header
                        </span>
                        <p>This card starts expanded.</p>
                    </${Wt}>
                `}}),e({title:"block expansion",styles:E`
                p {
                    ${Rt}
                }
            `,render(){return b`
                    <${Wt.assign({blockExpansion:!0})}>
                        <span slot=${Wt.slotNames.header}>Always Expanded</span>
                        <p>This card cannot be collapsed.</p>
                    </${Wt}>
                `}}),e({title:"raw collapsible",styles:E`
                p {
                    ${Rt}
                }
            `,render(){return b`
                    <${Wt.assign({rawCollapsible:!0,startExpanded:!0})}>
                        <span slot=${Wt.slotNames.header}>Raw Header</span>
                        <p>No card border or padding styles.</p>
                    </${Wt}>
                `}}),e({title:"hidden header",styles:E`
                p {
                    ${Rt}
                }
            `,render(){return b`
                    <${Wt.assign({hideHeader:!0,startExpanded:!0})}>
                        <p>Content with no header visible.</p>
                    </${Wt}>
                `}}),e({title:"wide",styles:E`
                div {
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                }
                p {
                    ${Rt}
                }
            `,render(){return b`
                    <div>
                        <${Wt}>
                            <span slot=${Wt.slotNames.header}>Wide</span>
                            <p>Content content content content content content content.</p>
                        </${Wt}>
                    </div>
                `}})}}),uR=Pe({title:fr.tagName,parent:mt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>b`
                        <${fr.assign({expanded:!!r.expandedStates[o]})}
                            ${U(fr.events.expandChange,s=>{const a=[...r.expandedStates];a[o]=s.detail,t({expandedStates:a})})}
                        >
                            <div
                                class="section-header"
                                slot=${fr.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${U("click",()=>{const s=[...r.showMoreStates];s[o]=!s[o],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Br(!!r.showMoreStates[o],b`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${fr}>
                    `)}}),e({title:"wider examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>b`
                        <${fr.assign({expanded:!!r.expandedStates[o]})}
                            ${U(fr.events.expandChange,s=>{const a=[...r.expandedStates];a[o]=s.detail,t({expandedStates:a})})}
                        >
                            <div
                                class="section-header"
                                slot=${fr.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${U("click",()=>{const s=[...r.showMoreStates];s[o]=!s[o],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Br(!!r.showMoreStates[o],b`
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
                        </${fr}>
                    `)}})}}),Gu=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Really really super duper long option",value:"4"},{label:"Really really super duper long option",value:"5"},{label:"Really really super duper long option",value:"6"},{label:"Really really super duper long option",value:"7"},{label:"Really really super duper long it just keeps going because it's so long option",value:"8"}],cR=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{value:"1",label:"1"},{value:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with disabled item",inputs:{selected:[],options:[...Gu,{value:"42",label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:E`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:E`
            ${Ja} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Lt}}],dR=Pe({title:Ja.tagName,parent:mt,controls:{Selected:{controlType:le.Dropdown,initValue:"",options:["",...Gu.map(e=>e.label)]},Prefix:{controlType:le.Text,initValue:""},"Force State":{controlType:le.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:le.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:le.Dropdown,initValue:"",options:["",...Object.keys(fh)]},Disabled:{controlType:le.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:le.Text,initValue:"Select something"}},defineExamples({defineExample:e}){cR.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:o}){const s={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:o.Placeholder,options:t.inputs?.options||Gu,selected:o.Selected?[Gu.find(a=>a.label===o.Selected)?.value].filter(M.isTruthy):r.selected,selectionPrefix:o.Prefix||t.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":t.inputs?.isDisabled,icon:o.Icon?fh[o.Icon]:t.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return b`
                        <${Ja.assign(s)}
                            ${U(Ja.events.selectedChange,a=>{n({selected:a.detail})})}
                        ></${Ja}>
                    `}})})}}),fR=Pe({parent:mt,title:Ui.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return b`
                    <${Ui}>Error Content</${Ui}>
                `}})}}),m0=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],hR=Pe({parent:mt,title:Sr.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Te.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:Te.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:Te.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Te.Email,label:"Email Address",value:t.email},password:{type:Te.NewPassword,label:"Password",value:t.password},userRole:{type:Te.Select,label:"Role",options:m0,value:t.userRole,placeholder:"placeholder"},quantity:{type:Te.Number,label:"Quantity",value:t.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:Te.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:Te.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return b`
                    <${Sr.assign({fields:n})}
                        ${U(Sr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${lt.assign({text:"Cancel",buttonStyle:Gn.Outline})}></${lt}>
                            <${lt.assign({text:"Submit"})}></${lt}>
                        </div>
                    </${Sr}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Te.Text,label:"First Name",value:t.firstName},lastName:{type:Te.Text,label:"Last Name",value:t.lastName}};return b`
                    <${Sr.assign({fields:n})}
                        ${U(Sr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <${Ne.assign({value:"",label:"More stuff"})}></${Ne}>
                        <div class="buttons">
                            <${lt.assign({text:"Cancel",buttonStyle:Gn.Outline})}></${lt}>
                            <${lt.assign({text:"Submit"})}></${lt}>
                        </div>
                    </${Sr}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Sr} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Te.Text,label:"First Name",value:t.firstName},lastName:{type:Te.Text,label:"Last Name",value:t.lastName},subscribe:{type:Te.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Te.Email,label:"Email Address",value:t.email},password:{type:Te.NewPassword,label:"Password",value:t.password},userRole:{type:Te.Select,label:"Role",options:m0,value:t.userRole}};return b`
                    <${Sr.assign({fields:n})}
                        ${U(Sr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${lt.assign({text:"Cancel",buttonStyle:Gn.Outline})}></${lt}>
                            <${lt.assign({text:"Submit"})}></${lt}>
                        </div>
                    </${Sr}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:Te.Text,label:"First Name",value:t.firstName},lastName:{type:Te.Text,label:"Last Name",value:t.lastName},subscribe:{type:Te.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Te.Email,label:"Email Address",value:t.email},password:{type:Te.NewPassword,label:"Password",value:t.password},userRole:{type:Te.Select,label:"Role",options:m0,value:t.userRole}};return b`
                    <${Sr.assign({fields:n,isDisabled:!0})}
                        ${U(Sr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${lt.assign({text:"Cancel",buttonStyle:Gn.Outline})}></${lt}>
                            <${lt.assign({text:"Submit"})}></${lt}>
                        </div>
                    </${Sr}>
                `}})}}),mR=Pe({title:B.tagName,parent:mt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return b`
                    <${B.assign({icon:Lt})}></${B}>
                `}}),e({title:"using createColoredIcon",render(){return b`
                    <${B.assign({icon:zr(Lt,{"vira-icon-stroke-color":"red"})})}></${B}>
                `}}),e({title:"fit container",styles:E`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return b`
                    <${B.assign({icon:zr(Lt,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${B}>
                `}})}}),gR=Pe({title:Oo.tagName,parent:mt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:E`
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
                        <${B.assign({icon:Yi,fitContainer:!0})}
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
                        <${B.assign({icon:Ec,fitContainer:!0})}
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
                        <${B.assign({icon:Yi,fitContainer:!0})}
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
                        <${B.assign({icon:Ec,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:E`
                    ${Oo} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||E``}
                    }

                    ${r.allowReload?E`
                              ${Oo} {
                                  cursor: pointer;
                              }

                              ${Oo}:hover {
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
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:o}){return b`
                        <${Oo.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${U("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${Oi()}`})})}
                        >
                            ${r.loadingSlot?b`
                                      <div class="slot-wrapper" slot=${Oo.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:re}${r.errorSlot?b`
                                      <div class="slot-wrapper" slot=${Oo.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:re}
                        </${Oo}>
                    `}})})}}),pR=Pe({title:Ne.tagName,parent:mt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:le.Color,initValue:I["vira-form-foreground-color"].default},"Placeholder color":{controlType:le.Color,initValue:I["vira-form-placeholder-color"].default},"Border color":{controlType:le.Color,initValue:I["vira-form-border-color"].default},"Focus color":{controlType:le.Color,initValue:I["vira-form-focus-outline-color"].default},"Selection color":{controlType:le.Color,initValue:I["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:o,inputs:s}){e({title:o,styles:E`
                    ${n||E``}
                `,state(){return{value:s.value}},render({state:a,updateState:l,controls:u}){const d={[String(I["vira-form-foreground-color"].name)]:u["Text color"],[String(I["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(I["vira-form-border-color"].name)]:u["Border color"],[String(I["vira-form-focus-outline-color"].name)]:u["Focus color"],[String(I["vira-form-text-selection-color"].name)]:u["Selection color"]},f=st(d,(m,g)=>g||"inherit"),h=Object.entries(f).map(([m,g])=>[m,g].join(": ")+";").join(`
`);return b`
                        <${Ne.assign({...s,value:a.value})}
                            style=${h}
                            ${U(Ne.events.valueChange,m=>{l({value:m.detail}),console.info("changed:",m.detail)})}
                        ></${Ne}>
                    `}})}i(t,"defineInputExample"),[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Lt}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:E`
                    ${Ne} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Lt}},{title:"taller height",styles:E`
                    ${Ne} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Lt}},{title:"shorter height",styles:E`
                    ${Ne} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Lt}},{title:"max width",styles:E`
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
                `}].forEach(t)}}),bR=Pe({title:Jn.tagName,parent:mt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:le.Color,initValue:""},"Hover color":{controlType:le.Color,initValue:""},"Active color":{controlType:le.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:o}){const s=E`
                        ${I["vira-form-accent-primary-color"].name}: ${xe(o["Hover color"]||"inherit")};
                        ${I["vira-form-accent-primary-active-color"].name}: ${xe(o["Active color"]||"inherit")};
                        color: ${xe(o["CSS Color"]||"inherit")};
                    `;return b`
                        <${Jn.assign(n)} style=${s}>My Link</${Jn}>
                    `}})}i(t,"defineLinkExample"),t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}}),t({title:"disabled link styles",inputs:{disableLinkStyles:!0,link:{newTab:!0,url:"https://www.wikipedia.org"}}})}}),yR=Pe({title:Bo.tagName,parent:mt,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return b`
                    <button
                        ${U("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Bo.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${U(Bo.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Bo}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:E`
                ${Bo} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${I["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return b`
                    <button
                        ${U("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Bo.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${U(Bo.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Bo}>
                `}})}}),Qa=E`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,g0=b`
    <${Yn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${Yn.slotNames.large}>Large</div>
        <div class="small" slot=${Yn.slotNames.small}>Small</div>
    </${Yn}>
`,Fs={max:120,min:25,default:80},xy=rt()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":hl(Fs.default)},state(){return{intervalId:void 0,increment:1}},styles:i(({cssVars:e})=>E`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,"styles"),init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const o=zh.isNumber(X3(G6({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Fs.default;(o>=Fs.max||o<=Fs.min)&&t({increment:e.increment*-1}),nm({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:hl(o+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return b`
            <slot></slot>
        `}}),Dy=rt()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":hl(Fs.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:E`
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
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return b`
            <${Yn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${Yn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${Yn.slotNames.small}>Small</div>
            </${Yn}>
        `}}),vR=Pe({title:Yn.tagName,parent:mt,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:E`
                ${Qa}
            `,render(){return g0}}),e({title:"overflowing",styles:E`
                ${Qa}

                ${Yn} {
                    max-width: 50px;
                }
            `,render(){return g0}}),e({title:"dynamic size",styles:E`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Qa}

                .wrapper {
                    width: ${Fs.max+10}px;
                }
            `,render(){return b`
                    <div class="wrapper">
                        <${xy}>
                            ${g0}
                        </${xy}>
                    </div>
                `}}),e({title:"dynamic slot",styles:E`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Qa}
            `,render(){return b`
                    <${Dy}></${Dy}>
                `}})}}),wR=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:E`
            :host {
                ${I["vira-form-filled-background-color"].name}: red;
                ${I["vira-form-accent-primary-color"].name}: black;
                ${uo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${uo} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:E`
            :host {
                ${I["vira-form-filled-background-color"].name}: red;
                ${I["vira-form-accent-primary-color"].name}: yellow;
                ${uo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${uo} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:E`
            :host {
                ${I["vira-form-filled-background-color"].name}: red;
                ${I["vira-form-accent-primary-color"].name}: yellow;
                ${uo.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${uo} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],$R=Pe({parent:mt,title:uo.tagName,defineExamples({defineExample:e}){wR.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,render(){return b`
                        <${uo.assign({value:50,...t.inputs})}></${uo}>
                    `}})})}}),It=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],kR=[{title:"basic",inputs:{options:It}},{title:"with really long option",inputs:{options:[...It,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:It,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:It,disabled:!0}},{title:"error",inputs:{options:It,hasError:!0}},{title:"with icon",inputs:{options:It,icon:Lt}},{title:"custom width",inputs:{options:It},styles:E`
            ${qe} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:It,icon:Lt},styles:E`
            ${qe} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:It,icon:Lt},styles:E`
            ${qe} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:It,label:"Pick an option"}},{title:"with long label",inputs:{options:It,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:It,label:"Pick a really really really really long option"},styles:E`
            ${qe} {
                width: unset;
            }
        `},{title:"raw",inputs:{options:[...It,{label:"really really really really really really really really long option",value:"something"}],rawSelect:!0,icon:Lt}}],xR=Pe({parent:mt,title:qe.tagName,defineExamples({defineExample:e}){kR.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return b`
                        <${qe.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${U(qe.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${qe}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return b`
                    <${qe.assign({options:It,value:It[0]?.value})}></${qe}>
                `}}),e({title:"force update",render(){return b`
                    <${Ay}></${Ay}>
                `}})}}),Ay=rt()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=It.findIndex(o=>o.value===t.value),n=bt.isDefined(It[(r+1)%It.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return b`
            <${qe.assign({options:It,value:e.value})}></${qe}>
        `}}),DR=[{label:"basic",isClickable:void 0},{label:"selectable",isClickable:{selected:!0}},{label:"cancellable",isClickable:{cancellable:!0}},{label:"disabled",disabled:!0,isClickable:{selected:!0}}],AR=Pe({parent:mt,title:_a.tagName,descriptionParagraphs:["A tag element with selectable, cancellable, size, emphasis, and color variants."],defineExamples({defineExample:e}){DP.forEach(t=>{e({title:t,styles:E`
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
                `,state(){return{clicked:{}}},render({state:r,updateState:n}){return DR.map(({label:o,...s})=>b`
                            <h3>${o}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${P1.map(a=>b`
                                                <th>${a}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${AP.map(a=>b`
                                            <tr>
                                                <th>${a}</th>
                                                ${P1.map(l=>{const u=[o,a,l].join("-"),d=M.isBoolean(s.isClickable?.selected)?{selected:!r.clicked[u]}:s.isClickable,f=b`
                                                        <${_a.assign({text:"Label",...s,size:t,emphasis:a,color:l,isClickable:d})}
                                                            class=${Dr({cancelled:!!s.isClickable?.cancellable&&!!r.clicked[u]})}
                                                            ${U(_a.events.cancel,()=>{n({clicked:{...r.clicked,[u]:!0}})})}
                                                            ${U(_a.events.toggle,h=>{n({clicked:{...r.clicked,[u]:!h.detail}})})}
                                                        ></${_a}>
                                                    `;return b`
                                                        <td>${f}</td>
                                                    `})}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})})}}),ER=[mt,qB,Eg,Cg],CR=[nR,oR,sR,aR,lR,uR,dR,fR,hR,mR,gR,pR,bR,ZB,QB,YB,yR,vR,eR,$R,xR,AR].sort((e,t)=>e.title.localeCompare(t.title)),SR=[...CR,KB,GB,rR,...WB],MR=[...ER,...SR];zn()({tagName:"vira-book-app",styles:E`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Bu} {
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
            <${Bu.assign({internalRouterConfig:{basePath:hg("vira"),useInternalRouter:!0},pages:MR,themeColor:"#33ccff"})}>
                <h1 slot=${Bu.slotNames.navHeader}>Vira</h1>
            </${Bu}>
        `}});export{zn as d,b as h};
