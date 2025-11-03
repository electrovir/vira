(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var dt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(dt||(dt={}));function K0(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}class uf{diff(t,n,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const o=this.castInput(t,r),s=this.castInput(n,r),u=this.removeEmpty(this.tokenize(o,r)),a=this.removeEmpty(this.tokenize(s,r));return this.diffWithOptionsObj(u,a,r,i)}diffWithOptionsObj(t,n,r,i){var o;const s=I=>{if(I=this.postProcess(I,r),i){setTimeout(function(){i(I)},0);return}else return I},u=n.length,a=t.length;let l=1,c=u+a;r.maxEditLength!=null&&(c=Math.min(c,r.maxEditLength));const f=(o=r.timeout)!==null&&o!==void 0?o:1/0,m=Date.now()+f,g=[{oldPos:-1,lastComponent:void 0}];let C=this.extractCommon(g[0],n,t,0,r);if(g[0].oldPos+1>=a&&C+1>=u)return s(this.buildValues(g[0].lastComponent,n,t));let D=-1/0,k=1/0;const A=()=>{for(let I=Math.max(D,-l);I<=Math.min(k,l);I+=2){let U;const W=g[I-1],G=g[I+1];W&&(g[I-1]=void 0);let Oe=!1;if(G){const Qe=G.oldPos-I;Oe=G&&0<=Qe&&Qe<u}const vt=W&&W.oldPos+1<a;if(!Oe&&!vt){g[I]=void 0;continue}if(!vt||Oe&&W.oldPos<G.oldPos?U=this.addToPath(G,!0,!1,0,r):U=this.addToPath(W,!1,!0,1,r),C=this.extractCommon(U,n,t,I,r),U.oldPos+1>=a&&C+1>=u)return s(this.buildValues(U.lastComponent,n,t))||!0;g[I]=U,U.oldPos+1>=a&&(k=Math.min(k,I-1)),C+1>=u&&(D=Math.max(D,I+1))}l++};if(i)(function I(){setTimeout(function(){if(l>c||Date.now()>m)return i(void 0);A()||I()},0)})();else for(;l<=c&&Date.now()<=m;){const I=A();if(I)return I}}addToPath(t,n,r,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===n&&s.removed===r?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:n,removed:r,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:n,removed:r,previousComponent:s}}}extractCommon(t,n,r,i,o){const s=n.length,u=r.length;let a=t.oldPos,l=a-i,c=0;for(;l+1<s&&a+1<u&&this.equals(r[a+1],n[l+1],o);)l++,a++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=a,l}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let u=0,a=0,l=0;for(;u<s;u++){const c=i[u];if(c.removed)c.value=this.join(r.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let f=n.slice(a,a+c.count);f=f.map(function(m,g){const C=r[l+g];return C.length>m.length?C:m}),c.value=this.join(f)}else c.value=this.join(n.slice(a,a+c.count));a+=c.count,c.added||(l+=c.count)}}return i}}function Zd(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function Gd(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function ac(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function lc(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function Ho(e,t){return ac(e,t,"")}function $u(e,t){return lc(e,t,"")}function Yd(e,t){return t.slice(0,Yw(e,t))}function Yw(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);const i=Array(r);let o=0;i[0]=0;for(let s=1;s<r;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=n;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function Xo(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function Pr(e){const t=e.match(/^\s*/);return t?t[0]:""}const Qu="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Jw=new RegExp(`[${Qu}]+|\\s+|[^${Qu}]`,"ug");class Hw extends uf{equals(t,n,r){return r.ignoreCase&&(t=t.toLowerCase(),n=n.toLowerCase()),t.trim()===n.trim()}tokenize(t,n={}){let r;if(n.intlSegmenter){const s=n.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(s.segment(t),u=>u.segment)}else r=t.match(Jw)||[];const i=[];let o=null;return r.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((n,r)=>r==0?n:n.replace(/^\s+/,"")).join("")}postProcess(t,n){if(!t||n.oneChangePerToken)return t;let r=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&Jd(r,o,i,s),r=s,i=null,o=null)}),(i||o)&&Jd(r,o,i,null),t}}const Xw=new Hw;function Qw(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?nb(e,t,n):Xw.diff(e,t,n)}function Jd(e,t,n,r){if(t&&n){const i=Pr(t.value),o=Xo(t.value),s=Pr(n.value),u=Xo(n.value);if(e){const a=Zd(i,s);e.value=lc(e.value,s,a),t.value=Ho(t.value,a),n.value=Ho(n.value,a)}if(r){const a=Gd(o,u);r.value=ac(r.value,u,a),t.value=$u(t.value,a),n.value=$u(n.value,a)}}else if(n){if(e){const i=Pr(n.value);n.value=n.value.substring(i.length)}if(r){const i=Pr(r.value);r.value=r.value.substring(i.length)}}else if(e&&r){const i=Pr(r.value),o=Pr(t.value),s=Xo(t.value),u=Zd(i,o);t.value=Ho(t.value,u);const a=Gd(Ho(i,u),s);t.value=$u(t.value,a),r.value=ac(r.value,i,a),e.value=lc(e.value,i,i.slice(0,i.length-a.length))}else if(r){const i=Pr(r.value),o=Xo(t.value),s=Yd(o,i);t.value=$u(t.value,s)}else if(e){const i=Xo(e.value),o=Pr(t.value),s=Yd(i,o);t.value=Ho(t.value,s)}}class eb extends uf{tokenize(t){const n=new RegExp(`(\\r?\\n)|[${Qu}]+|[^\\S\\n\\r]+|[^${Qu}]`,"ug");return t.match(n)||[]}}const tb=new eb;function nb(e,t,n){return tb.diff(e,t,n)}class rb extends uf{constructor(){super(...arguments),this.tokenize=sb}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const ib=new rb;function ob(e,t,n){return ib.diff(e,t,n)}function sb(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let i=0;i<r.length;i++){const o=r[i];i%2&&!t.newlineIsToken?n[n.length-1]+=o:n.push(o)}return n}function Hd(e){return Z0(e,new Map)}function Z0(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((r,i)=>r[0].localeCompare(i[0])).forEach(([r,i])=>{const o=Z0(i,t);n[r]=o}),n}else return e}var ub=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ab=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,lb=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,wl={Space_Separator:ub,ID_Start:ab,ID_Continue:lb},Le={isSpaceSeparator(e){return typeof e=="string"&&wl.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||wl.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||wl.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let cc,Mt,gr,ea,Zr,_n,ot,af,ps;var cb=function(t,n){cc=String(t),Mt="start",gr=[],ea=0,Zr=1,_n=0,ot=void 0,af=void 0,ps=void 0;do ot=fb(),hb[Mt]();while(ot.type!=="eof");return typeof n=="function"?fc({"":ps},"",n):ps};function fc(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const o=String(i),s=fc(r,o,n);s===void 0?delete r[o]:Object.defineProperty(r,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const o=fc(r,i,n);o===void 0?delete r[i]:Object.defineProperty(r,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let X,Y,as,dr,re;function fb(){for(X="default",Y="",as=!1,dr=1;;){re=Er();const e=G0[X]();if(e)return e}}function Er(){if(cc[ea])return String.fromCodePoint(cc.codePointAt(ea))}function F(){const e=Er();return e===`
`?(Zr++,_n=0):e?_n+=e.length:_n++,e&&(ea+=e.length),e}const G0={default(){switch(re){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":F();return;case"/":F(),X="comment";return;case void 0:return F(),$e("eof")}if(Le.isSpaceSeparator(re)){F();return}return G0[Mt]()},comment(){switch(re){case"*":F(),X="multiLineComment";return;case"/":F(),X="singleLineComment";return}throw ve(F())},multiLineComment(){switch(re){case"*":F(),X="multiLineCommentAsterisk";return;case void 0:throw ve(F())}F()},multiLineCommentAsterisk(){switch(re){case"*":F();return;case"/":F(),X="default";return;case void 0:throw ve(F())}F(),X="multiLineComment"},singleLineComment(){switch(re){case`
`:case"\r":case"\u2028":case"\u2029":F(),X="default";return;case void 0:return F(),$e("eof")}F()},value(){switch(re){case"{":case"[":return $e("punctuator",F());case"n":return F(),li("ull"),$e("null",null);case"t":return F(),li("rue"),$e("boolean",!0);case"f":return F(),li("alse"),$e("boolean",!1);case"-":case"+":F()==="-"&&(dr=-1),X="sign";return;case".":Y=F(),X="decimalPointLeading";return;case"0":Y=F(),X="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),X="decimalInteger";return;case"I":return F(),li("nfinity"),$e("numeric",1/0);case"N":return F(),li("aN"),$e("numeric",NaN);case'"':case"'":as=F()==='"',Y="",X="string";return}throw ve(F())},identifierNameStartEscape(){if(re!=="u")throw ve(F());F();const e=dc();switch(e){case"$":case"_":break;default:if(!Le.isIdStartChar(e))throw Xd();break}Y+=e,X="identifierName"},identifierName(){switch(re){case"$":case"_":case"‌":case"‍":Y+=F();return;case"\\":F(),X="identifierNameEscape";return}if(Le.isIdContinueChar(re)){Y+=F();return}return $e("identifier",Y)},identifierNameEscape(){if(re!=="u")throw ve(F());F();const e=dc();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Le.isIdContinueChar(e))throw Xd();break}Y+=e,X="identifierName"},sign(){switch(re){case".":Y=F(),X="decimalPointLeading";return;case"0":Y=F(),X="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),X="decimalInteger";return;case"I":return F(),li("nfinity"),$e("numeric",dr*(1/0));case"N":return F(),li("aN"),$e("numeric",NaN)}throw ve(F())},zero(){switch(re){case".":Y+=F(),X="decimalPoint";return;case"e":case"E":Y+=F(),X="decimalExponent";return;case"x":case"X":Y+=F(),X="hexadecimal";return}return $e("numeric",dr*0)},decimalInteger(){switch(re){case".":Y+=F(),X="decimalPoint";return;case"e":case"E":Y+=F(),X="decimalExponent";return}if(Le.isDigit(re)){Y+=F();return}return $e("numeric",dr*Number(Y))},decimalPointLeading(){if(Le.isDigit(re)){Y+=F(),X="decimalFraction";return}throw ve(F())},decimalPoint(){switch(re){case"e":case"E":Y+=F(),X="decimalExponent";return}if(Le.isDigit(re)){Y+=F(),X="decimalFraction";return}return $e("numeric",dr*Number(Y))},decimalFraction(){switch(re){case"e":case"E":Y+=F(),X="decimalExponent";return}if(Le.isDigit(re)){Y+=F();return}return $e("numeric",dr*Number(Y))},decimalExponent(){switch(re){case"+":case"-":Y+=F(),X="decimalExponentSign";return}if(Le.isDigit(re)){Y+=F(),X="decimalExponentInteger";return}throw ve(F())},decimalExponentSign(){if(Le.isDigit(re)){Y+=F(),X="decimalExponentInteger";return}throw ve(F())},decimalExponentInteger(){if(Le.isDigit(re)){Y+=F();return}return $e("numeric",dr*Number(Y))},hexadecimal(){if(Le.isHexDigit(re)){Y+=F(),X="hexadecimalInteger";return}throw ve(F())},hexadecimalInteger(){if(Le.isHexDigit(re)){Y+=F();return}return $e("numeric",dr*Number(Y))},string(){switch(re){case"\\":F(),Y+=db();return;case'"':if(as)return F(),$e("string",Y);Y+=F();return;case"'":if(!as)return F(),$e("string",Y);Y+=F();return;case`
`:case"\r":throw ve(F());case"\u2028":case"\u2029":pb(re);break;case void 0:throw ve(F())}Y+=F()},start(){switch(re){case"{":case"[":return $e("punctuator",F())}X="value"},beforePropertyName(){switch(re){case"$":case"_":Y=F(),X="identifierName";return;case"\\":F(),X="identifierNameStartEscape";return;case"}":return $e("punctuator",F());case'"':case"'":as=F()==='"',X="string";return}if(Le.isIdStartChar(re)){Y+=F(),X="identifierName";return}throw ve(F())},afterPropertyName(){if(re===":")return $e("punctuator",F());throw ve(F())},beforePropertyValue(){X="value"},afterPropertyValue(){switch(re){case",":case"}":return $e("punctuator",F())}throw ve(F())},beforeArrayValue(){if(re==="]")return $e("punctuator",F());X="value"},afterArrayValue(){switch(re){case",":case"]":return $e("punctuator",F())}throw ve(F())},end(){throw ve(F())}};function $e(e,t){return{type:e,value:t,line:Zr,column:_n}}function li(e){for(const t of e){if(Er()!==t)throw ve(F());F()}}function db(){switch(Er()){case"b":return F(),"\b";case"f":return F(),"\f";case"n":return F(),`
`;case"r":return F(),"\r";case"t":return F(),"	";case"v":return F(),"\v";case"0":if(F(),Le.isDigit(Er()))throw ve(F());return"\0";case"x":return F(),mb();case"u":return F(),dc();case`
`:case"\u2028":case"\u2029":return F(),"";case"\r":return F(),Er()===`
`&&F(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw ve(F());case void 0:throw ve(F())}return F()}function mb(){let e="",t=Er();if(!Le.isHexDigit(t)||(e+=F(),t=Er(),!Le.isHexDigit(t)))throw ve(F());return e+=F(),String.fromCodePoint(parseInt(e,16))}function dc(){let e="",t=4;for(;t-- >0;){const n=Er();if(!Le.isHexDigit(n))throw ve(F());e+=F()}return String.fromCodePoint(parseInt(e,16))}const hb={start(){if(ot.type==="eof")throw ci();bl()},beforePropertyName(){switch(ot.type){case"identifier":case"string":af=ot.value,Mt="afterPropertyName";return;case"punctuator":vu();return;case"eof":throw ci()}},afterPropertyName(){if(ot.type==="eof")throw ci();Mt="beforePropertyValue"},beforePropertyValue(){if(ot.type==="eof")throw ci();bl()},beforeArrayValue(){if(ot.type==="eof")throw ci();if(ot.type==="punctuator"&&ot.value==="]"){vu();return}bl()},afterPropertyValue(){if(ot.type==="eof")throw ci();switch(ot.value){case",":Mt="beforePropertyName";return;case"}":vu()}},afterArrayValue(){if(ot.type==="eof")throw ci();switch(ot.value){case",":Mt="beforeArrayValue";return;case"]":vu()}},end(){}};function bl(){let e;switch(ot.type){case"punctuator":switch(ot.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=ot.value;break}if(ps===void 0)ps=e;else{const t=gr[gr.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,af,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")gr.push(e),Array.isArray(e)?Mt="beforeArrayValue":Mt="beforePropertyName";else{const t=gr[gr.length-1];t==null?Mt="end":Array.isArray(t)?Mt="afterArrayValue":Mt="afterPropertyValue"}}function vu(){gr.pop();const e=gr[gr.length-1];e==null?Mt="end":Array.isArray(e)?Mt="afterArrayValue":Mt="afterPropertyValue"}function ve(e){return ta(e===void 0?`JSON5: invalid end of input at ${Zr}:${_n}`:`JSON5: invalid character '${Y0(e)}' at ${Zr}:${_n}`)}function ci(){return ta(`JSON5: invalid end of input at ${Zr}:${_n}`)}function Xd(){return _n-=5,ta(`JSON5: invalid identifier character at ${Zr}:${_n}`)}function pb(e){console.warn(`JSON5: '${Y0(e)}' in strings is not valid ECMAScript; consider escaping`)}function Y0(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function ta(e){const t=new SyntaxError(e);return t.lineNumber=Zr,t.columnNumber=_n,t}var gb=function(t,n,r){const i=[];let o="",s,u,a="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")u=n;else if(Array.isArray(n)){s=[];for(const D of n){let k;typeof D=="string"?k=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&(k=String(D)),k!==void 0&&s.indexOf(k)<0&&s.push(k)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),a="          ".substr(0,r)):typeof r=="string"&&(a=r.substr(0,10)),c("",{"":t});function c(D,k){let A=k[D];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(D):typeof A.toJSON=="function"&&(A=A.toJSON(D))),u&&(A=u.call(k,D,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return f(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?C(A):m(A)}function f(D){const k={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let I="";for(let W=0;W<D.length;W++){const G=D[W];switch(G){case"'":case'"':k[G]++,I+=G;continue;case"\0":if(Le.isDigit(D[W+1])){I+="\\x00";continue}}if(A[G]){I+=A[G];continue}if(G<" "){let Oe=G.charCodeAt(0).toString(16);I+="\\x"+("00"+Oe).substring(Oe.length);continue}I+=G}const U=l||Object.keys(k).reduce((W,G)=>k[W]<k[G]?W:G);return I=I.replace(new RegExp(U,"g"),A[U]),U+I+U}function m(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let k=o;o=o+a;let A=s||Object.keys(D),I=[];for(const W of A){const G=c(W,D);if(G!==void 0){let Oe=g(W)+":";a!==""&&(Oe+=" "),Oe+=G,I.push(Oe)}}let U;if(I.length===0)U="{}";else{let W;if(a==="")W=I.join(","),U="{"+W+"}";else{let G=`,
`+o;W=I.join(G),U=`{
`+o+W+`,
`+k+"}"}}return i.pop(),o=k,U}function g(D){if(D.length===0)return f(D);const k=String.fromCodePoint(D.codePointAt(0));if(!Le.isIdStartChar(k))return f(D);for(let A=k.length;A<D.length;A++)if(!Le.isIdContinueChar(String.fromCodePoint(D.codePointAt(A))))return f(D);return D}function C(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let k=o;o=o+a;let A=[];for(let U=0;U<D.length;U++){const W=c(String(U),D);A.push(W!==void 0?W:"null")}let I;if(A.length===0)I="[]";else if(a==="")I="["+A.join(",")+"]";else{let U=`,
`+o,W=A.join(U);I=`[
`+o+W+`,
`+k+"]"}return i.pop(),o=k,I}};const yb={parse:cb,stringify:gb};var wb=yb;const J0="__@@augment-vir-undefined-sentinel@@__",bb=new RegExp(`['"]${J0}['"]`);function h(e,t){if(typeof e=="string")return e;try{return wb.stringify(e,(r,i)=>i===void 0?J0:typeof i=="bigint"?Number(i):i,t||void 0).split(bb).join("undefined")}catch{return String(e)}}var $b=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Vn;(function(e){e.Node="node",e.Web="web"})(Vn||(Vn={}));function vb(){return $b?Vn.Node:Vn.Web}const H0=vb();function lf(e){return H0===e}function X0(e){return e[H0]()}function Db(e,t){const n=typeof t=="string"&&typeof e=="string",r=typeof t!="string"||typeof e!="string",i=r?ob:Qw,o=[n?"":`
`,h(t&&typeof t=="object"&&!Array.isArray(t)?Hd(t):t,4),`
`].join(""),s=[n?"":`
`,h(e&&typeof e=="object"&&!Array.isArray(e)?Hd(e):e,4),`
`].join(""),u=Eb(r,i(o,s)),a=lf(Vn.Node);return[[a?$r.Green:""," +added (unexpected, added in actual)",a?$r.Red:""," -missing (expected, missing from actual)",a?$r.Reset:""].join(""),n?`

`:`
`,u].join("")}var $r;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})($r||($r={}));var na;(function(e){e.Added="+",e.Removed="-"})(na||(na={}));function Eb(e,t){return e?t.flatMap(r=>r.value.split(`
`).map(i=>Qd(i,r)).join(`
`)).join(""):t.map(r=>Qd(void 0,r)).join("")}function Qd(e,t){if(e!=null&&!e)return"";const n=lf(Vn.Node),r=t.added?na.Added:t.removed?na.Removed:e==null?"":" ",i=t.added?$r.Green:t.removed?$r.Red:$r.Reset;return[n?i:"",r,e??t.value,$r.Reset].join("")}function Fe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Cb(e){return Fe(e).filter(t=>isNaN(Number(t)))}function Ln(e){return Cb(e).map(n=>e[n])}const xb=[".",":",";",",","?","!"],Ab=new RegExp(`[${xb.join("")}]+$`);function em(e){return e.replace(Ab,"")}function Yt(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function ka(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&em(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:em(r)).join(": "):""}function xt(e){return e instanceof Error?e:new Error(Yt(e))}function cf(e,t){const n=xt(e),r=ka(t,n.message);try{return n.message=r,n}catch{return new Error(r,{cause:e})}}var v;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(v||(v={}));var R;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(R||(R={}));R.ClientError,R.ServerError;v.Continue+"",R.Information,v.SwitchingProtocols+"",R.Information,v.Processing+"",R.Information,v.EarlyHints+"",R.Information,v.Ok+"",R.Success,v.Created+"",R.Success,v.Accepted+"",R.Success,v.NonAuthoritativeInformation+"",R.Success,v.NoContent+"",R.Success,v.ResetContent+"",R.Success,v.PartialContent+"",R.Success,v.MultiStatus+"",R.Success,v.AlreadyReported+"",R.Success,v.ImUsed+"",R.Success,v.MultipleChoices+"",R.Redirect,v.MovedPermanently+"",R.Redirect,v.Found+"",R.Redirect,v.SeeOther+"",R.Redirect,v.NotModified+"",R.Redirect,v.UseProxy+"",R.Redirect,v.Unused+"",R.Redirect,v.TemporaryRedirect+"",R.Redirect,v.PermanentRedirect+"",R.Redirect,v.BadRequest+"",R.ClientError,v.Unauthorized+"",R.ClientError,v.PaymentRequired+"",R.ClientError,v.Forbidden+"",R.ClientError,v.NotFound+"",R.ClientError,v.MethodNotAllowed+"",R.ClientError,v.NotAcceptable+"",R.ClientError,v.ProxyAuthenticationRequired+"",R.ClientError,v.RequestTimeout+"",R.ClientError,v.Conflict+"",R.ClientError,v.Gone+"",R.ClientError,v.LengthRequired+"",R.ClientError,v.PreconditionFailed+"",R.ClientError,v.PayloadTooLarge+"",R.ClientError,v.UriTooLong+"",R.ClientError,v.UnsupportedMediaType+"",R.ClientError,v.RangeNotSatisfiable+"",R.ClientError,v.ExpectationFailed+"",R.ClientError,v.ImATeapot+"",R.ClientError,v.MisdirectedRequest+"",R.ClientError,v.UnprocessableContent+"",R.ClientError,v.Locked+"",R.ClientError,v.FailedDependency+"",R.ClientError,v.TooEarly+"",R.ClientError,v.UpgradeRequired+"",R.ClientError,v.PreconditionRequired+"",R.ClientError,v.TooManyRequests+"",R.ClientError,v.RequestHeaderFieldsTooLarge+"",R.ClientError,v.UnavailableForLegalReasons+"",R.ClientError,v.InternalServerError+"",R.ServerError,v.NotImplemented+"",R.ServerError,v.BadGateway+"",R.ServerError,v.ServiceUnavailable+"",R.ServerError,v.GatewayTimeout+"",R.ServerError,v.HttpVersionNotSupported+"",R.ServerError,v.VariantAlsoNegotiates+"",R.ServerError,v.InsufficientStorage+"",R.ServerError,v.LoopDetected+"",R.ServerError,v.NotExtended+"",R.ServerError,v.NetworkAuthenticationRequired+"",R.ServerError;const Vu={[R.Information]:[v.Continue,v.SwitchingProtocols,v.Processing,v.EarlyHints],[R.Success]:[v.Ok,v.Created,v.Accepted,v.NonAuthoritativeInformation,v.NoContent,v.ResetContent,v.PartialContent,v.MultiStatus,v.AlreadyReported,v.ImUsed],[R.Redirect]:[v.MultipleChoices,v.MovedPermanently,v.Found,v.SeeOther,v.NotModified,v.UseProxy,v.Unused,v.TemporaryRedirect,v.PermanentRedirect],[R.ClientError]:[v.BadRequest,v.Unauthorized,v.PaymentRequired,v.Forbidden,v.NotFound,v.MethodNotAllowed,v.NotAcceptable,v.ProxyAuthenticationRequired,v.RequestTimeout,v.Conflict,v.Gone,v.LengthRequired,v.PreconditionFailed,v.PayloadTooLarge,v.UriTooLong,v.UnsupportedMediaType,v.RangeNotSatisfiable,v.ExpectationFailed,v.ImATeapot,v.MisdirectedRequest,v.UnprocessableContent,v.Locked,v.FailedDependency,v.TooEarly,v.UpgradeRequired,v.PreconditionRequired,v.TooManyRequests,v.RequestHeaderFieldsTooLarge,v.UnavailableForLegalReasons],[R.ServerError]:[v.InternalServerError,v.NotImplemented,v.BadGateway,v.ServiceUnavailable,v.GatewayTimeout,v.HttpVersionNotSupported,v.VariantAlsoNegotiates,v.InsufficientStorage,v.LoopDetected,v.NotExtended,v.NetworkAuthenticationRequired]};function Q0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class ep{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(xt(r))}})}}class Ii extends Error{}class Fb extends Ii{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class kb extends Ii{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Sb extends Ii{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class eo extends Ii{}class tp extends Ii{constructor(t){super(`Invalid unit ${t}`)}}class Dt extends Ii{}class Or extends Ii{constructor(){super("Zone is an abstract class")}}const O="numeric",Wn="short",un="long",ra={year:O,month:O,day:O},np={year:O,month:Wn,day:O},Ib={year:O,month:Wn,day:O,weekday:Wn},rp={year:O,month:un,day:O},ip={year:O,month:un,day:O,weekday:un},op={hour:O,minute:O},sp={hour:O,minute:O,second:O},up={hour:O,minute:O,second:O,timeZoneName:Wn},ap={hour:O,minute:O,second:O,timeZoneName:un},lp={hour:O,minute:O,hourCycle:"h23"},cp={hour:O,minute:O,second:O,hourCycle:"h23"},fp={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:Wn},dp={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:un},mp={year:O,month:O,day:O,hour:O,minute:O},hp={year:O,month:O,day:O,hour:O,minute:O,second:O},pp={year:O,month:Wn,day:O,hour:O,minute:O},gp={year:O,month:Wn,day:O,hour:O,minute:O,second:O},Nb={year:O,month:Wn,day:O,weekday:Wn,hour:O,minute:O},yp={year:O,month:un,day:O,hour:O,minute:O,timeZoneName:Wn},wp={year:O,month:un,day:O,hour:O,minute:O,second:O,timeZoneName:Wn},bp={year:O,month:un,day:O,weekday:un,hour:O,minute:O,timeZoneName:un},$p={year:O,month:un,day:O,weekday:un,hour:O,minute:O,second:O,timeZoneName:un};class Ks{get type(){throw new Or}get name(){throw new Or}get ianaName(){return this.name}get isUniversal(){throw new Or}offsetName(t,n){throw new Or}formatOffset(t,n){throw new Or}offset(t){throw new Or}equals(t){throw new Or}get isValid(){throw new Or}}let $l=null;class Sa extends Ks{static get instance(){return $l===null&&($l=new Sa),$l}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Np(t,n,r)}formatOffset(t,n){return gs(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const mc=new Map;function Tb(e){let t=mc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),mc.set(e,t)),t}const Mb={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Pb(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,o,s,u,a,l,c]=r;return[s,i,o,u,a,l,c]}function Ob(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:o,value:s}=n[i],u=Mb[o];o==="era"?r[u]=s:K(u)||(r[u]=parseInt(s,10))}return r}const vl=new Map;class xr extends Ks{static create(t){let n=vl.get(t);return n===void 0&&vl.set(t,n=new xr(t)),n}static resetCache(){vl.clear(),mc.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=xr.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Np(t,n,r,this.name)}formatOffset(t,n){return gs(this.offset(t),n)}offset(t){if(!this.valid)return NaN;const n=new Date(t);if(isNaN(n))return NaN;const r=Tb(this.name);let[i,o,s,u,a,l,c]=r.formatToParts?Ob(r,n):Pb(r,n);u==="BC"&&(i=-Math.abs(i)+1);const m=Na({year:i,month:o,day:s,hour:a===24?0:a,minute:l,second:c,millisecond:0});let g=+n;const C=g%1e3;return g-=C>=0?C:1e3+C,(m-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let tm={};function Bb(e,t={}){const n=JSON.stringify([e,t]);let r=tm[n];return r||(r=new Intl.ListFormat(e,t),tm[n]=r),r}const hc=new Map;function pc(e,t={}){const n=JSON.stringify([e,t]);let r=hc.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),hc.set(n,r)),r}const gc=new Map;function Rb(e,t={}){const n=JSON.stringify([e,t]);let r=gc.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),gc.set(n,r)),r}const yc=new Map;function Lb(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let o=yc.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),yc.set(i,o)),o}let ls=null;function Ub(){return ls||(ls=new Intl.DateTimeFormat().resolvedOptions().locale,ls)}const wc=new Map;function vp(e){let t=wc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),wc.set(e,t)),t}const bc=new Map;function jb(e){let t=bc.get(e);if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in t||(t={...Dp,...t}),bc.set(e,t)}return t}function _b(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=pc(e).resolvedOptions(),i=e}catch{const a=e.substring(0,n);r=pc(a).resolvedOptions(),i=a}const{numberingSystem:o,calendar:s}=r;return[i,o,s]}}function Vb(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Wb(e){const t=[];for(let n=1;n<=12;n++){const r=Z.utc(2009,n,1);t.push(e(r))}return t}function qb(e){const t=[];for(let n=1;n<=7;n++){const r=Z.utc(2016,11,13+n);t.push(e(r))}return t}function Du(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function zb(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||vp(e.locale).numberingSystem==="latn"}class Kb{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:o,...s}=r;if(!n||Object.keys(s).length>0){const u={useGrouping:!1,...r};r.padTo>0&&(u.minimumIntegerDigits=r.padTo),this.inf=Rb(t,u)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):pf(t,3);return qe(n,this.padTo)}}}class Zb{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),u=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&xr.create(u).valid?(i=u,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=pc(n,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Gb{constructor(t,n,r){this.opts={style:"long",...r},!n&&Sp()&&(this.rtf=Lb(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):g2(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Dp={firstDay:1,minimalDays:4,weekend:[6,7]};class me{static fromOpts(t){return me.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,o=!1){const s=t||Pe.defaultLocale,u=s||(o?"en-US":Ub()),a=n||Pe.defaultNumberingSystem,l=r||Pe.defaultOutputCalendar,c=vc(i)||Pe.defaultWeekSettings;return new me(u,a,l,c,s)}static resetCache(){ls=null,hc.clear(),gc.clear(),yc.clear(),wc.clear(),bc.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return me.create(t,n,r,i)}constructor(t,n,r,i,o){const[s,u,a]=_b(t);this.locale=s,this.numberingSystem=n||u||null,this.outputCalendar=r||a||null,this.weekSettings=i,this.intl=Vb(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=zb(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:me.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,vc(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Du(this,t,Pp,()=>{const r=this.intl==="ja"||this.intl.startsWith("ja-");n&=!r;const i=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";if(!this.monthsCache[o][t]){const s=r?u=>this.dtFormatter(u,i).format():u=>this.extract(u,i,"month");this.monthsCache[o][t]=Wb(s)}return this.monthsCache[o][t]})}weekdays(t,n=!1){return Du(this,t,Rp,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=qb(o=>this.extract(o,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Du(this,void 0,()=>Lp,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Z.utc(2016,11,13,9),Z.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Du(this,t,Up,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[Z.utc(-40,1,1),Z.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),o=i.formatToParts(),s=o.find(u=>u.type.toLowerCase()===r);return s?s.value:null}numberFormatter(t={}){return new Kb(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Zb(t,this.intl,n)}relFormatter(t={}){return new Gb(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Bb(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||vp(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Ip()?jb(this.locale):Dp}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Dl=null;class Pt extends Ks{static get utcInstance(){return Dl===null&&(Dl=new Pt(0)),Dl}static instance(t){return t===0?Pt.utcInstance:new Pt(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Pt(Ta(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${gs(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${gs(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return gs(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Yb extends Ks{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function _r(e,t){if(K(e)||e===null)return t;if(e instanceof Ks)return e;if(t2(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?Sa.instance:n==="utc"||n==="gmt"?Pt.utcInstance:Pt.parseSpecifier(n)||xr.create(e)}else return qr(e)?Pt.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Yb(e)}const ff={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},nm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Jb=ff.hanidec.replace(/[\[|\]]/g,"").split("");function Hb(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(ff.hanidec)!==-1)t+=Jb.indexOf(e[n]);else for(const i in nm){const[o,s]=nm[i];r>=o&&r<=s&&(t+=r-o)}}return parseInt(t,10)}else return t}const $c=new Map;function Xb(){$c.clear()}function On({numberingSystem:e},t=""){const n=e||"latn";let r=$c.get(n);r===void 0&&(r=new Map,$c.set(n,r));let i=r.get(t);return i===void 0&&(i=new RegExp(`${ff[n]}${t}`),r.set(t,i)),i}let rm=()=>Date.now(),im="system",om=null,sm=null,um=null,am=60,lm,cm=null;class Pe{static get now(){return rm}static set now(t){rm=t}static set defaultZone(t){im=t}static get defaultZone(){return _r(im,Sa.instance)}static get defaultLocale(){return om}static set defaultLocale(t){om=t}static get defaultNumberingSystem(){return sm}static set defaultNumberingSystem(t){sm=t}static get defaultOutputCalendar(){return um}static set defaultOutputCalendar(t){um=t}static get defaultWeekSettings(){return cm}static set defaultWeekSettings(t){cm=vc(t)}static get twoDigitCutoffYear(){return am}static set twoDigitCutoffYear(t){am=t%100}static get throwOnInvalid(){return lm}static set throwOnInvalid(t){lm=t}static resetCaches(){me.resetCache(),xr.resetCache(),Z.resetCache(),Xb()}}class Un{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ep=[0,31,59,90,120,151,181,212,243,273,304,334],Cp=[0,31,60,91,121,152,182,213,244,274,305,335];function xn(e,t){return new Un("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function df(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function xp(e,t,n){return n+(Zs(e)?Cp:Ep)[t-1]}function Ap(e,t){const n=Zs(e)?Cp:Ep,r=n.findIndex(o=>o<t),i=t-n[r];return{month:r+1,day:i}}function mf(e,t){return(e-t+7)%7+1}function ia(e,t=4,n=1){const{year:r,month:i,day:o}=e,s=xp(r,i,o),u=mf(df(r,i,o),n);let a=Math.floor((s-u+14-t)/7),l;return a<1?(l=r-1,a=xs(l,t,n)):a>xs(r,t,n)?(l=r+1,a=1):l=r,{weekYear:l,weekNumber:a,weekday:u,...Ma(e)}}function fm(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:o}=e,s=mf(df(r,1,t),n),u=io(r);let a=i*7+o-s-7+t,l;a<1?(l=r-1,a+=io(l)):a>u?(l=r+1,a-=io(r)):l=r;const{month:c,day:f}=Ap(l,a);return{year:l,month:c,day:f,...Ma(e)}}function El(e){const{year:t,month:n,day:r}=e,i=xp(t,n,r);return{year:t,ordinal:i,...Ma(e)}}function dm(e){const{year:t,ordinal:n}=e,{month:r,day:i}=Ap(t,n);return{year:t,month:r,day:i,...Ma(e)}}function mm(e,t){if(!K(e.localWeekday)||!K(e.localWeekNumber)||!K(e.localWeekYear)){if(!K(e.weekday)||!K(e.weekNumber)||!K(e.weekYear))throw new eo("Cannot mix locale-based week fields with ISO-based week fields");return K(e.localWeekday)||(e.weekday=e.localWeekday),K(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),K(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Qb(e,t=4,n=1){const r=Ia(e.weekYear),i=An(e.weekNumber,1,xs(e.weekYear,t,n)),o=An(e.weekday,1,7);return r?i?o?!1:xn("weekday",e.weekday):xn("week",e.weekNumber):xn("weekYear",e.weekYear)}function e2(e){const t=Ia(e.year),n=An(e.ordinal,1,io(e.year));return t?n?!1:xn("ordinal",e.ordinal):xn("year",e.year)}function Fp(e){const t=Ia(e.year),n=An(e.month,1,12),r=An(e.day,1,oa(e.year,e.month));return t?n?r?!1:xn("day",e.day):xn("month",e.month):xn("year",e.year)}function kp(e){const{hour:t,minute:n,second:r,millisecond:i}=e,o=An(t,0,23)||t===24&&n===0&&r===0&&i===0,s=An(n,0,59),u=An(r,0,59),a=An(i,0,999);return o?s?u?a?!1:xn("millisecond",i):xn("second",r):xn("minute",n):xn("hour",t)}function K(e){return typeof e>"u"}function qr(e){return typeof e=="number"}function Ia(e){return typeof e=="number"&&e%1===0}function t2(e){return typeof e=="string"}function n2(e){return Object.prototype.toString.call(e)==="[object Date]"}function Sp(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Ip(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function r2(e){return Array.isArray(e)?e:[e]}function hm(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const o=[t(i),i];return r&&n(r[0],o[0])===r[0]?r:o},null)[1]}function i2(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function ho(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function vc(e){if(e==null)return null;if(typeof e!="object")throw new Dt("Week settings must be an object");if(!An(e.firstDay,1,7)||!An(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!An(t,1,7)))throw new Dt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function An(e,t,n){return Ia(e)&&e>=t&&e<=n}function o2(e,t){return e-t*Math.floor(e/t)}function qe(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function Lr(e){if(!(K(e)||e===null||e===""))return parseInt(e,10)}function fi(e){if(!(K(e)||e===null||e===""))return parseFloat(e)}function hf(e){if(!(K(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function pf(e,t,n="round"){const r=10**t;switch(n){case"expand":return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case"trunc":return Math.trunc(e*r)/r;case"round":return Math.round(e*r)/r;case"floor":return Math.floor(e*r)/r;case"ceil":return Math.ceil(e*r)/r;default:throw new RangeError(`Value rounding ${n} is out of range`)}}function Zs(e){return e%4===0&&(e%100!==0||e%400===0)}function io(e){return Zs(e)?366:365}function oa(e,t){const n=o2(t-1,12)+1,r=e+(t-n)/12;return n===2?Zs(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Na(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function pm(e,t,n){return-mf(df(e,1,t),n)+t-1}function xs(e,t=4,n=1){const r=pm(e,t,n),i=pm(e+1,t,n);return(io(e)-r+i)/7}function Dc(e){return e>99?e:e>Pe.twoDigitCutoffYear?1900+e:2e3+e}function Np(e,t,n,r=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);const s={timeZoneName:t,...o},u=new Intl.DateTimeFormat(n,s).formatToParts(i).find(a=>a.type.toLowerCase()==="timezonename");return u?u.value:null}function Ta(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function Tp(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new Dt(`Invalid unit value ${e}`);return t}function sa(e,t){const n={};for(const r in e)if(ho(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=Tp(i)}return n}function gs(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${qe(n,2)}:${qe(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${qe(n,2)}${qe(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Ma(e){return i2(e,["hour","minute","second","millisecond"])}const s2=["January","February","March","April","May","June","July","August","September","October","November","December"],Mp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u2=["J","F","M","A","M","J","J","A","S","O","N","D"];function Pp(e){switch(e){case"narrow":return[...u2];case"short":return[...Mp];case"long":return[...s2];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Op=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Bp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],a2=["M","T","W","T","F","S","S"];function Rp(e){switch(e){case"narrow":return[...a2];case"short":return[...Bp];case"long":return[...Op];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Lp=["AM","PM"],l2=["Before Christ","Anno Domini"],c2=["BC","AD"],f2=["B","A"];function Up(e){switch(e){case"narrow":return[...f2];case"short":return[...c2];case"long":return[...l2];default:return null}}function d2(e){return Lp[e.hour<12?0:1]}function m2(e,t){return Rp(t)[e.weekday-1]}function h2(e,t){return Pp(t)[e.month-1]}function p2(e,t){return Up(t)[e.year<0?0:1]}function g2(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,u=Math.abs(t),a=u===1,l=i[e],c=r?a?l[1]:l[2]||l[1]:a?i[e][0]:e;return s?`${u} ${c} ago`:`in ${u} ${c}`}function gm(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const y2={D:ra,DD:np,DDD:rp,DDDD:ip,t:op,tt:sp,ttt:up,tttt:ap,T:lp,TT:cp,TTT:fp,TTTT:dp,f:mp,ff:pp,fff:yp,ffff:bp,F:hp,FF:gp,FFF:wp,FFFF:$p};class Ct{static create(t,n={}){return new Ct(t,n)}static parseFormat(t){let n=null,r="",i=!1;const o=[];for(let s=0;s<t.length;s++){const u=t.charAt(s);u==="'"?((r.length>0||i)&&o.push({literal:i||/^\s+$/.test(r),val:r===""?"'":r}),n=null,r="",i=!i):i||u===n?r+=u:(r.length>0&&o.push({literal:/^\s+$/.test(r),val:r}),r=u,n=u)}return r.length>0&&o.push({literal:i||/^\s+$/.test(r),val:r}),o}static macroTokenToFormatOpts(t){return y2[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0,r=void 0){if(this.opts.forceSimple)return qe(t,n);const i={...this.opts};return n>0&&(i.padTo=n),r&&(i.signDisplay=r),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(g,C)=>this.loc.extract(t,g,C),s=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",u=()=>r?d2(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),a=(g,C)=>r?h2(t,g):o(C?{month:g}:{month:g,day:"numeric"},"month"),l=(g,C)=>r?m2(t,g):o(C?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),c=g=>{const C=Ct.macroTokenToFormatOpts(g);return C?this.formatWithSystemDefault(t,C):g},f=g=>r?p2(t,g):o({era:g},"era"),m=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return u();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return a("short",!0);case"LLLL":return a("long",!0);case"LLLLL":return a("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return a("short",!1);case"MMMM":return a("long",!1);case"MMMMM":return a("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(g)}};return gm(Ct.parseFormat(n),m)}formatDurationFromString(t,n){const r=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,f)=>m=>{const g=i(m);if(g){const C=f.isNegativeDuration&&g!==f.largestUnit?r:1;let D;return this.opts.signMode==="negativeLargestOnly"&&g!==f.largestUnit?D="never":this.opts.signMode==="all"?D="always":D="auto",this.num(c.get(g)*C,m.length,D)}else return m},s=Ct.parseFormat(n),u=s.reduce((c,{literal:f,val:m})=>f?c:c.concat(m),[]),a=t.shiftTo(...u.map(i).filter(c=>c)),l={isNegativeDuration:a<0,largestUnit:Object.keys(a.values)[0]};return gm(s,o(a,l))}}const jp=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Mo(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function Po(...e){return t=>e.reduce(([n,r,i],o)=>{const[s,u,a]=o(t,i);return[{...n,...s},u||r,a]},[{},null,1]).slice(0,2)}function Oo(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function _p(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=Lr(t[n+i]);return[r,null,n+i]}}const Vp=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,w2=`(?:${Vp.source}?(?:\\[(${jp.source})\\])?)?`,gf=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Wp=RegExp(`${gf.source}${w2}`),yf=RegExp(`(?:[Tt]${Wp.source})?`),b2=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,$2=/(\d{4})-?W(\d\d)(?:-?(\d))?/,v2=/(\d{4})-?(\d{3})/,D2=_p("weekYear","weekNumber","weekDay"),E2=_p("year","ordinal"),C2=/(\d{4})-(\d\d)-(\d\d)/,qp=RegExp(`${gf.source} ?(?:${Vp.source}|(${jp.source}))?`),x2=RegExp(`(?: ${qp.source})?`);function oo(e,t,n){const r=e[t];return K(r)?n:Lr(r)}function A2(e,t){return[{year:oo(e,t),month:oo(e,t+1,1),day:oo(e,t+2,1)},null,t+3]}function Bo(e,t){return[{hours:oo(e,t,0),minutes:oo(e,t+1,0),seconds:oo(e,t+2,0),milliseconds:hf(e[t+3])},null,t+4]}function Gs(e,t){const n=!e[t]&&!e[t+1],r=Ta(e[t+1],e[t+2]),i=n?null:Pt.instance(r);return[{},i,t+3]}function Ys(e,t){const n=e[t]?xr.create(e[t]):null;return[{},n,t+1]}const F2=RegExp(`^T?${gf.source}$`),k2=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function S2(e){const[t,n,r,i,o,s,u,a,l]=e,c=t[0]==="-",f=a&&a[0]==="-",m=(g,C=!1)=>g!==void 0&&(C||g&&c)?-g:g;return[{years:m(fi(n)),months:m(fi(r)),weeks:m(fi(i)),days:m(fi(o)),hours:m(fi(s)),minutes:m(fi(u)),seconds:m(fi(a),a==="-0"),milliseconds:m(hf(l),f)}]}const I2={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function wf(e,t,n,r,i,o,s){const u={year:t.length===2?Dc(Lr(t)):Lr(t),month:Mp.indexOf(n)+1,day:Lr(r),hour:Lr(i),minute:Lr(o)};return s&&(u.second=Lr(s)),e&&(u.weekday=e.length>3?Op.indexOf(e)+1:Bp.indexOf(e)+1),u}const N2=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function T2(e){const[,t,n,r,i,o,s,u,a,l,c,f]=e,m=wf(t,i,r,n,o,s,u);let g;return a?g=I2[a]:l?g=0:g=Ta(c,f),[m,new Pt(g)]}function M2(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const P2=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,O2=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,B2=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ym(e){const[,t,n,r,i,o,s,u]=e;return[wf(t,i,r,n,o,s,u),Pt.utcInstance]}function R2(e){const[,t,n,r,i,o,s,u]=e;return[wf(t,u,n,r,i,o,s),Pt.utcInstance]}const L2=Mo(b2,yf),U2=Mo($2,yf),j2=Mo(v2,yf),_2=Mo(Wp),zp=Po(A2,Bo,Gs,Ys),V2=Po(D2,Bo,Gs,Ys),W2=Po(E2,Bo,Gs,Ys),q2=Po(Bo,Gs,Ys);function z2(e){return Oo(e,[L2,zp],[U2,V2],[j2,W2],[_2,q2])}function K2(e){return Oo(M2(e),[N2,T2])}function Z2(e){return Oo(e,[P2,ym],[O2,ym],[B2,R2])}function G2(e){return Oo(e,[k2,S2])}const Y2=Po(Bo);function J2(e){return Oo(e,[F2,Y2])}const H2=Mo(C2,x2),X2=Mo(qp),Q2=Po(Bo,Gs,Ys);function e$(e){return Oo(e,[H2,zp],[X2,Q2])}const wm="Invalid Duration",Kp={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},t$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Kp},vn=146097/400,qi=146097/4800,n$={years:{quarters:4,months:12,weeks:vn/7,days:vn,hours:vn*24,minutes:vn*24*60,seconds:vn*24*60*60,milliseconds:vn*24*60*60*1e3},quarters:{months:3,weeks:vn/28,days:vn/4,hours:vn*24/4,minutes:vn*24*60/4,seconds:vn*24*60*60/4,milliseconds:vn*24*60*60*1e3/4},months:{weeks:qi/7,days:qi,hours:qi*24,minutes:qi*24*60,seconds:qi*24*60*60,milliseconds:qi*24*60*60*1e3},...Kp},bi=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],r$=bi.slice(0).reverse();function ar(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new ie(r)}function Zp(e,t){let n=t.milliseconds??0;for(const r of r$.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function bm(e,t){const n=Zp(e,t)<0?-1:1;bi.reduceRight((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]*n,s=e[i][r],u=Math.floor(o/s);t[i]+=u*n,t[r]-=u*s*n}return i},null),bi.reduce((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]%1;t[r]-=o,t[i]+=o*e[r][i]}return i},null)}function $m(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class ie{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?n$:t$;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||me.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return ie.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new Dt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new ie({values:sa(t,ie.normalizeUnit),loc:me.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(qr(t))return ie.fromMillis(t);if(ie.isDuration(t))return t;if(typeof t=="object")return ie.fromObject(t);throw new Dt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=G2(t);return r?ie.fromObject(r,n):ie.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=J2(t);return r?ie.fromObject(r,n):ie.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Dt("need to specify a reason the Duration is invalid");const r=t instanceof Un?t:new Un(t,n);if(Pe.throwOnInvalid)throw new Sb(r);return new ie({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new tp(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Ct.create(this.loc,r).formatDurationFromString(this,t):wm}toHuman(t={}){if(!this.isValid)return wm;const n=t.showZeros!==!1,r=bi.map(i=>{const o=this.values[i];return K(o)||o===0&&!n?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=pf(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},Z.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Zp(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t),r={};for(const i of bi)(ho(n.values,i)||ho(this.values,i))&&(r[i]=n.get(i)+this.get(i));return ar(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=Tp(t(this.values[r],r));return ar(this,{values:n},!0)}get(t){return this[ie.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...sa(t,ie.normalizeUnit)};return ar(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return ar(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return bm(this.matrix,t),ar(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=$m(this.normalize().shiftToAll().toObject());return ar(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>ie.normalizeUnit(s));const n={},r={},i=this.toObject();let o;for(const s of bi)if(t.indexOf(s)>=0){o=s;let u=0;for(const l in r)u+=this.matrix[l][s]*r[l],r[l]=0;qr(i[s])&&(u+=i[s]);const a=Math.trunc(u);n[s]=a,r[s]=(u*1e3-a*1e3)/1e3}else qr(i[s])&&(r[s]=i[s]);for(const s in r)r[s]!==0&&(n[o]+=s===o?r[s]:r[s]/this.matrix[o][s]);return bm(this.matrix,n),ar(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return ar(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=$m(this.values);return ar(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of bi)if(!n(this.values[r],t.values[r]))return!1;return!0}}const zi="Invalid Interval";function i$(e,t){return!e||!e.isValid?Me.invalid("missing or invalid start"):!t||!t.isValid?Me.invalid("missing or invalid end"):t<e?Me.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Me{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Dt("need to specify a reason the Interval is invalid");const r=t instanceof Un?t:new Un(t,n);if(Pe.throwOnInvalid)throw new kb(r);return new Me({invalid:r})}static fromDateTimes(t,n){const r=Qo(t),i=Qo(n),o=i$(r,i);return o??new Me({start:r,end:i})}static after(t,n){const r=ie.fromDurationLike(n),i=Qo(t);return Me.fromDateTimes(i,i.plus(r))}static before(t,n){const r=ie.fromDurationLike(n),i=Qo(t);return Me.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let o,s;try{o=Z.fromISO(r,n),s=o.isValid}catch{s=!1}let u,a;try{u=Z.fromISO(i,n),a=u.isValid}catch{a=!1}if(s&&a)return Me.fromDateTimes(o,u);if(s){const l=ie.fromISO(i,n);if(l.isValid)return Me.after(o,l)}else if(a){const l=ie.fromISO(r,n);if(l.isValid)return Me.before(u,l)}}return Me.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?Me.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(Qo).filter(s=>this.contains(s)).sort((s,u)=>s.toMillis()-u.toMillis()),r=[];let{s:i}=this,o=0;for(;i<this.e;){const s=n[o]||this.e,u=+s>+this.e?this.e:s;r.push(Me.fromDateTimes(i,u)),i=u,o+=1}return r}splitBy(t){const n=ie.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,o;const s=[];for(;r<this.e;){const u=this.start.plus(n.mapUnits(a=>a*i));o=+u>+this.e?this.e:u,s.push(Me.fromDateTimes(r,o)),r=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:Me.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return Me.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],o=t.map(a=>[{time:a.s,type:"s"},{time:a.e,type:"e"}]),s=Array.prototype.concat(...o),u=s.sort((a,l)=>a.time-l.time);for(const a of u)r+=a.type==="s"?1:-1,r===1?n=a.time:(n&&+n!=+a.time&&i.push(Me.fromDateTimes(n,a.time)),n=null);return Me.merge(i)}difference(...t){return Me.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:zi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=ra,n={}){return this.isValid?Ct.create(this.s.loc.clone(n),t).formatInterval(this):zi}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:zi}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:zi}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:zi}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:zi}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):ie.invalid(this.invalidReason)}mapEndpoints(t){return Me.fromDateTimes(t(this.s),t(this.e))}}class Eu{static hasDST(t=Pe.defaultZone){const n=Z.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return xr.isValidZone(t)}static normalizeZone(t){return _r(t,Pe.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||me.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||me.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||me.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||me.create(n,r,o)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||me.create(n,r,o)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||me.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||me.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return me.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return me.create(n,null,"gregory").eras(t)}static features(){return{relative:Sp(),localeWeek:Ip()}}}function vm(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(ie.fromMillis(r).as("days"))}function o$(e,t,n){const r=[["years",(a,l)=>l.year-a.year],["quarters",(a,l)=>l.quarter-a.quarter+(l.year-a.year)*4],["months",(a,l)=>l.month-a.month+(l.year-a.year)*12],["weeks",(a,l)=>{const c=vm(a,l);return(c-c%7)/7}],["days",vm]],i={},o=e;let s,u;for(const[a,l]of r)n.indexOf(a)>=0&&(s=a,i[a]=l(e,t),u=o.plus(i),u>t?(i[a]--,e=o.plus(i),e>t&&(u=e,i[a]--,e=o.plus(i))):e=u);return[e,i,u,s]}function s$(e,t,n,r){let[i,o,s,u]=o$(e,t,n);const a=t-i,l=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(s<t&&(s=i.plus({[u]:1})),s!==i&&(o[u]=(o[u]||0)+a/(s-i)));const c=ie.fromObject(o,r);return l.length>0?ie.fromMillis(a,r).shiftTo(...l).plus(c):c}const u$="missing Intl.DateTimeFormat.formatToParts support";function le(e,t=n=>n){return{regex:e,deser:([n])=>t(Hb(n))}}const a$=" ",Gp=`[ ${a$}]`,Yp=new RegExp(Gp,"g");function l$(e){return e.replace(/\./g,"\\.?").replace(Yp,Gp)}function Dm(e){return e.replace(/\./g,"").replace(Yp," ").toLowerCase()}function Bn(e,t){return e===null?null:{regex:RegExp(e.map(l$).join("|")),deser:([n])=>e.findIndex(r=>Dm(n)===Dm(r))+t}}function Em(e,t){return{regex:e,deser:([,n,r])=>Ta(n,r),groups:t}}function Cu(e){return{regex:e,deser:([t])=>t}}function c$(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function f$(e,t){const n=On(t),r=On(t,"{2}"),i=On(t,"{3}"),o=On(t,"{4}"),s=On(t,"{6}"),u=On(t,"{1,2}"),a=On(t,"{1,3}"),l=On(t,"{1,6}"),c=On(t,"{1,9}"),f=On(t,"{2,4}"),m=On(t,"{4,6}"),g=k=>({regex:RegExp(c$(k.val)),deser:([A])=>A,literal:!0}),D=(k=>{if(e.literal)return g(k);switch(k.val){case"G":return Bn(t.eras("short"),0);case"GG":return Bn(t.eras("long"),0);case"y":return le(l);case"yy":return le(f,Dc);case"yyyy":return le(o);case"yyyyy":return le(m);case"yyyyyy":return le(s);case"M":return le(u);case"MM":return le(r);case"MMM":return Bn(t.months("short",!0),1);case"MMMM":return Bn(t.months("long",!0),1);case"L":return le(u);case"LL":return le(r);case"LLL":return Bn(t.months("short",!1),1);case"LLLL":return Bn(t.months("long",!1),1);case"d":return le(u);case"dd":return le(r);case"o":return le(a);case"ooo":return le(i);case"HH":return le(r);case"H":return le(u);case"hh":return le(r);case"h":return le(u);case"mm":return le(r);case"m":return le(u);case"q":return le(u);case"qq":return le(r);case"s":return le(u);case"ss":return le(r);case"S":return le(a);case"SSS":return le(i);case"u":return Cu(c);case"uu":return Cu(u);case"uuu":return le(n);case"a":return Bn(t.meridiems(),0);case"kkkk":return le(o);case"kk":return le(f,Dc);case"W":return le(u);case"WW":return le(r);case"E":case"c":return le(n);case"EEE":return Bn(t.weekdays("short",!1),1);case"EEEE":return Bn(t.weekdays("long",!1),1);case"ccc":return Bn(t.weekdays("short",!0),1);case"cccc":return Bn(t.weekdays("long",!0),1);case"Z":case"ZZ":return Em(new RegExp(`([+-]${u.source})(?::(${r.source}))?`),2);case"ZZZ":return Em(new RegExp(`([+-]${u.source})(${r.source})?`),2);case"z":return Cu(/[a-z_+-/]{1,256}?/i);case" ":return Cu(/[^\S\n\r]/);default:return g(k)}})(e)||{invalidReason:u$};return D.token=e,D}const d$={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function m$(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const a=/^\s+$/.test(i);return{literal:!a,val:a?" ":i}}const o=t[r];let s=r;r==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=n.hour12?"hour12":"hour24");let u=d$[s];if(typeof u=="object"&&(u=u[o]),u)return{literal:!1,val:u}}function h$(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function p$(e,t,n){const r=e.match(t);if(r){const i={};let o=1;for(const s in n)if(ho(n,s)){const u=n[s],a=u.groups?u.groups+1:1;!u.literal&&u.token&&(i[u.token.val[0]]=u.deser(r.slice(o,o+a))),o+=a}return[r,i]}else return[r,{}]}function g$(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return K(e.z)||(n=xr.create(e.z)),K(e.Z)||(n||(n=new Pt(e.Z)),r=e.Z),K(e.q)||(e.M=(e.q-1)*3+1),K(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),K(e.u)||(e.S=hf(e.u)),[Object.keys(e).reduce((o,s)=>{const u=t(s);return u&&(o[u]=e[s]),o},{}),n,r]}let Cl=null;function y$(){return Cl||(Cl=Z.fromMillis(1555555555555)),Cl}function w$(e,t){if(e.literal)return e;const n=Ct.macroTokenToFormatOpts(e.val),r=Qp(n,t);return r==null||r.includes(void 0)?e:r}function Jp(e,t){return Array.prototype.concat(...e.map(n=>w$(n,t)))}class Hp{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=Jp(Ct.parseFormat(n),t),this.units=this.tokens.map(r=>f$(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=h$(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=p$(t,this.regex,this.handlers),[i,o,s]=r?g$(r):[null,null,void 0];if(ho(r,"a")&&ho(r,"H"))throw new eo("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Xp(e,t,n){return new Hp(e,n).explainFromTokens(t)}function b$(e,t,n){const{result:r,zone:i,specificOffset:o,invalidReason:s}=Xp(e,t,n);return[r,i,o,s]}function Qp(e,t){if(!e)return null;const r=Ct.create(t,e).dtFormatter(y$()),i=r.formatToParts(),o=r.resolvedOptions();return i.map(s=>m$(s,e,o))}const xl="Invalid DateTime",Cm=864e13;function cs(e){return new Un("unsupported zone",`the zone "${e.name}" is not supported`)}function Al(e){return e.weekData===null&&(e.weekData=ia(e.c)),e.weekData}function Fl(e){return e.localWeekData===null&&(e.localWeekData=ia(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function di(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Z({...n,...t,old:n})}function eg(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const o=n.offset(r);return i===o?[r,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function xu(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Wu(e,t,n){return eg(Na(e),t,n)}function xm(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:r,month:i,day:Math.min(e.c.day,oa(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=ie.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),u=Na(o);let[a,l]=eg(u,n,e.zone);return s!==0&&(a+=s,l=e.zone.offset(a)),{ts:a,o:l}}function Ki(e,t,n,r,i,o){const{setZone:s,zone:u}=n;if(e&&Object.keys(e).length!==0||t){const a=t||u,l=Z.fromObject(e,{...n,zone:a,specificOffset:o});return s?l:l.setZone(u)}else return Z.invalid(new Un("unparsable",`the input "${i}" can't be parsed as ${r}`))}function Au(e,t,n=!0){return e.isValid?Ct.create(me.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function kl(e,t,n){const r=e.c.year>9999||e.c.year<0;let i="";if(r&&e.c.year>=0&&(i+="+"),i+=qe(e.c.year,r?6:4),n==="year")return i;if(t){if(i+="-",i+=qe(e.c.month),n==="month")return i;i+="-"}else if(i+=qe(e.c.month),n==="month")return i;return i+=qe(e.c.day),i}function Am(e,t,n,r,i,o,s){let u=!n||e.c.millisecond!==0||e.c.second!==0,a="";switch(s){case"day":case"month":case"year":break;default:if(a+=qe(e.c.hour),s==="hour")break;if(t){if(a+=":",a+=qe(e.c.minute),s==="minute")break;u&&(a+=":",a+=qe(e.c.second))}else{if(a+=qe(e.c.minute),s==="minute")break;u&&(a+=qe(e.c.second))}if(s==="second")break;u&&(!r||e.c.millisecond!==0)&&(a+=".",a+=qe(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?a+="Z":e.o<0?(a+="-",a+=qe(Math.trunc(-e.o/60)),a+=":",a+=qe(Math.trunc(-e.o%60))):(a+="+",a+=qe(Math.trunc(e.o/60)),a+=":",a+=qe(Math.trunc(e.o%60)))),o&&(a+="["+e.zone.ianaName+"]"),a}const tg={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},$$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},v$={ordinal:1,hour:0,minute:0,second:0,millisecond:0},qu=["year","month","day","hour","minute","second","millisecond"],D$=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],E$=["year","ordinal","hour","minute","second","millisecond"];function zu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new tp(e);return t}function Fm(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return zu(e)}}function C$(e){if(fs===void 0&&(fs=Pe.now()),e.type!=="iana")return e.offset(fs);const t=e.name;let n=Ec.get(t);return n===void 0&&(n=e.offset(fs),Ec.set(t,n)),n}function km(e,t){const n=_r(t.zone,Pe.defaultZone);if(!n.isValid)return Z.invalid(cs(n));const r=me.fromObject(t);let i,o;if(K(e.year))i=Pe.now();else{for(const a of qu)K(e[a])&&(e[a]=tg[a]);const s=Fp(e)||kp(e);if(s)return Z.invalid(s);const u=C$(n);[i,o]=Wu(e,u,n)}return new Z({ts:i,zone:n,loc:r,o})}function Sm(e,t,n){const r=K(n.round)?!0:n.round,i=K(n.rounding)?"trunc":n.rounding,o=(u,a)=>(u=pf(u,r||n.calendary?0:2,n.calendary?"round":i),t.loc.clone(n).relFormatter(n).format(u,a)),s=u=>n.calendary?t.hasSame(e,u)?0:t.startOf(u).diff(e.startOf(u),u).get(u):t.diff(e,u).get(u);if(n.unit)return o(s(n.unit),n.unit);for(const u of n.units){const a=s(u);if(Math.abs(a)>=1)return o(a,u)}return o(e>t?-0:0,n.units[n.units.length-1])}function Im(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let fs;const Ec=new Map;class Z{constructor(t){const n=t.zone||Pe.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new Un("invalid input"):null)||(n.isValid?null:cs(n));this.ts=K(t.ts)?Pe.now():t.ts;let i=null,o=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,o]=[t.old.c,t.old.o];else{const u=qr(t.o)&&!t.old?t.o:n.offset(this.ts);i=xu(this.ts,u),r=Number.isNaN(i.year)?new Un("invalid input"):null,i=r?null:i,o=r?null:u}this._zone=n,this.loc=t.loc||me.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new Z({})}static local(){const[t,n]=Im(arguments),[r,i,o,s,u,a,l]=n;return km({year:r,month:i,day:o,hour:s,minute:u,second:a,millisecond:l},t)}static utc(){const[t,n]=Im(arguments),[r,i,o,s,u,a,l]=n;return t.zone=Pt.utcInstance,km({year:r,month:i,day:o,hour:s,minute:u,second:a,millisecond:l},t)}static fromJSDate(t,n={}){const r=n2(t)?t.valueOf():NaN;if(Number.isNaN(r))return Z.invalid("invalid input");const i=_r(n.zone,Pe.defaultZone);return i.isValid?new Z({ts:r,zone:i,loc:me.fromObject(n)}):Z.invalid(cs(i))}static fromMillis(t,n={}){if(qr(t))return t<-Cm||t>Cm?Z.invalid("Timestamp out of range"):new Z({ts:t,zone:_r(n.zone,Pe.defaultZone),loc:me.fromObject(n)});throw new Dt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(qr(t))return new Z({ts:t*1e3,zone:_r(n.zone,Pe.defaultZone),loc:me.fromObject(n)});throw new Dt("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=_r(n.zone,Pe.defaultZone);if(!r.isValid)return Z.invalid(cs(r));const i=me.fromObject(n),o=sa(t,Fm),{minDaysInFirstWeek:s,startOfWeek:u}=mm(o,i),a=Pe.now(),l=K(n.specificOffset)?r.offset(a):n.specificOffset,c=!K(o.ordinal),f=!K(o.year),m=!K(o.month)||!K(o.day),g=f||m,C=o.weekYear||o.weekNumber;if((g||c)&&C)throw new eo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new eo("Can't mix ordinal dates with month/day");const D=C||o.weekday&&!g;let k,A,I=xu(a,l);D?(k=D$,A=$$,I=ia(I,s,u)):c?(k=E$,A=v$,I=El(I)):(k=qu,A=tg);let U=!1;for(const bn of k){const Tn=o[bn];K(Tn)?U?o[bn]=A[bn]:o[bn]=I[bn]:U=!0}const W=D?Qb(o,s,u):c?e2(o):Fp(o),G=W||kp(o);if(G)return Z.invalid(G);const Oe=D?fm(o,s,u):c?dm(o):o,[vt,Qe]=Wu(Oe,l,r),St=new Z({ts:vt,zone:r,o:Qe,loc:i});return o.weekday&&g&&t.weekday!==St.weekday?Z.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${St.toISO()}`):St.isValid?St:Z.invalid(St.invalid)}static fromISO(t,n={}){const[r,i]=z2(t);return Ki(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=K2(t);return Ki(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=Z2(t);return Ki(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(K(t)||K(n))throw new Dt("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=r,s=me.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[u,a,l,c]=b$(s,t,n);return c?Z.invalid(c):Ki(u,a,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return Z.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=e$(t);return Ki(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new Dt("need to specify a reason the DateTime is invalid");const r=t instanceof Un?t:new Un(t,n);if(Pe.throwOnInvalid)throw new Fb(r);return new Z({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=Qp(t,me.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return Jp(Ct.parseFormat(t),me.fromObject(n)).map(i=>i.val).join("")}static resetCache(){fs=void 0,Ec.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Al(this).weekYear:NaN}get weekNumber(){return this.isValid?Al(this).weekNumber:NaN}get weekday(){return this.isValid?Al(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Fl(this).weekday:NaN}get localWeekNumber(){return this.isValid?Fl(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Fl(this).weekYear:NaN}get ordinal(){return this.isValid?El(this.c).ordinal:NaN}get monthShort(){return this.isValid?Eu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Eu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Eu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Eu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=Na(this.c),i=this.zone.offset(r-t),o=this.zone.offset(r+t),s=this.zone.offset(r-i*n),u=this.zone.offset(r-o*n);if(s===u)return[this];const a=r-s*n,l=r-u*n,c=xu(a,s),f=xu(l,u);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[di(this,{ts:a}),di(this,{ts:l})]:[this]}get isInLeapYear(){return Zs(this.year)}get daysInMonth(){return oa(this.year,this.month)}get daysInYear(){return this.isValid?io(this.year):NaN}get weeksInWeekYear(){return this.isValid?xs(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?xs(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=Ct.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Pt.instance(t),n)}toLocal(){return this.setZone(Pe.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=_r(t,Pe.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const o=t.offset(this.ts),s=this.toObject();[i]=Wu(s,o,t)}return di(this,{ts:i,zone:t})}else return Z.invalid(cs(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return di(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=sa(t,Fm),{minDaysInFirstWeek:r,startOfWeek:i}=mm(n,this.loc),o=!K(n.weekYear)||!K(n.weekNumber)||!K(n.weekday),s=!K(n.ordinal),u=!K(n.year),a=!K(n.month)||!K(n.day),l=u||a,c=n.weekYear||n.weekNumber;if((l||s)&&c)throw new eo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&s)throw new eo("Can't mix ordinal dates with month/day");let f;o?f=fm({...ia(this.c,r,i),...n},r,i):K(n.ordinal)?(f={...this.toObject(),...n},K(n.day)&&(f.day=Math.min(oa(f.year,f.month),f.day))):f=dm({...El(this.c),...n});const[m,g]=Wu(f,this.o,this.zone);return di(this,{ts:m,o:g})}plus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t);return di(this,xm(this,n))}minus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t).negate();return di(this,xm(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=ie.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(r.weekNumber=this.weekNumber-1),r.weekday=o}else r.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?Ct.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):xl}toLocaleString(t=ra,n={}){return this.isValid?Ct.create(this.loc.clone(n),t).formatDateTime(this):xl}toLocaleParts(t={}){return this.isValid?Ct.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=zu(s);const u=t==="extended";let a=kl(this,u,s);return qu.indexOf(s)>=3&&(a+="T"),a+=Am(this,u,n,r,i,o,s),a}toISODate({format:t="extended",precision:n="day"}={}){return this.isValid?kl(this,t==="extended",zu(n)):null}toISOWeekDate(){return Au(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:u="milliseconds"}={}){return this.isValid?(u=zu(u),(i&&qu.indexOf(u)>=3?"T":"")+Am(this,s==="extended",n,t,r,o,u)):null}toRFC2822(){return Au(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Au(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?kl(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),Au(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():xl}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return ie.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},o=r2(n).map(ie.normalizeUnit),s=t.valueOf()>this.valueOf(),u=s?this:t,a=s?t:this,l=s$(u,a,o,i);return s?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(Z.now(),t,n)}until(t){return this.isValid?Me.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(n,r)<=i&&i<=o.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||Z.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),Sm(n,this.plus(r),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?Sm(t.base||Z.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(Z.isDateTime))throw new Dt("min requires all arguments be DateTimes");return hm(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(Z.isDateTime))throw new Dt("max requires all arguments be DateTimes");return hm(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:o=null}=r,s=me.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return Xp(s,t,n)}static fromStringExplain(t,n,r={}){return Z.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,o=me.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new Hp(o,t)}static fromFormatParser(t,n,r={}){if(K(t)||K(n))throw new Dt("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=r,s=me.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(n.locale))throw new Dt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`);const{result:u,zone:a,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?Z.invalid(c):Ki(u,a,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return ra}static get DATE_MED(){return np}static get DATE_MED_WITH_WEEKDAY(){return Ib}static get DATE_FULL(){return rp}static get DATE_HUGE(){return ip}static get TIME_SIMPLE(){return op}static get TIME_WITH_SECONDS(){return sp}static get TIME_WITH_SHORT_OFFSET(){return up}static get TIME_WITH_LONG_OFFSET(){return ap}static get TIME_24_SIMPLE(){return lp}static get TIME_24_WITH_SECONDS(){return cp}static get TIME_24_WITH_SHORT_OFFSET(){return fp}static get TIME_24_WITH_LONG_OFFSET(){return dp}static get DATETIME_SHORT(){return mp}static get DATETIME_SHORT_WITH_SECONDS(){return hp}static get DATETIME_MED(){return pp}static get DATETIME_MED_WITH_SECONDS(){return gp}static get DATETIME_MED_WITH_WEEKDAY(){return Nb}static get DATETIME_FULL(){return yp}static get DATETIME_FULL_WITH_SECONDS(){return wp}static get DATETIME_HUGE(){return bp}static get DATETIME_HUGE_WITH_SECONDS(){return $p}}function Qo(e){if(Z.isDateTime(e))return e;if(e&&e.valueOf&&qr(e.valueOf()))return Z.fromJSDate(e);if(e&&typeof e=="object")return Z.fromObject(e);throw new Dt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Ue;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Ue||(Ue={}));const x$=[Ue.Milliseconds,Ue.Seconds,Ue.Minutes,Ue.Hours,Ue.Days,Ue.Weeks,Ue.Months,Ue.Years];Ue.Milliseconds+"",Ue.Seconds+"",Ue.Minutes+"",Ue.Hours+"",Ue.Days+"",Ue.Weeks+"",Ue.Months+"",Ue.Years+"";function A$(e){return x$.filter(t=>e[t])}function Cc(e,{decimalCount:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function F$(e){return Cc(Math.max(e-.4,0),{decimalCount:0})}function Nm(e){return e===0?0:Math.sign(e)}function As(e,t,n={}){const r={},i={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),u=A$(t).reverse();if(o||s)return u.forEach(c=>{r[c]=o?1/0:-1/0}),r;let a=ie.fromObject(e).as(Ue.Milliseconds);const l=Nm(a);return u.forEach((c,f)=>{const m=f===u.length-1;if(c===Ue.Milliseconds)r.milliseconds=Cc(a,i);else{const g=ie.fromObject({milliseconds:a}).as(c),C=Math.sign(g),D=Math.abs(g),k=m?Cc(D,i):Math.floor(i.decimalCount==null?D:F$(D)),A=k===0?0:k*C;r[c]=A,a-=ie.fromObject({[c]:A}).as(Ue.Milliseconds),l!==Nm(a)&&(a=0)}}),r}Intl.DateTimeFormat().resolvedOptions().locale;var st;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(st||(st={}));st.Year,st.Hour,st.Minute,st.Second,st.Millisecond;st.Month,st.Week,st.Day;st.Millisecond,st.Second,st.Minute,st.Hour,st.Day,st.Week,st.Month,st.Year;var Et;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(Et||(Et={}));Et.Sunday+"",Et.Monday+"",Et.Tuesday+"",Et.Wednesday+"",Et.Thursday+"",Et.Friday+"",Et.Saturday+"";Et.Sunday,Et.Monday,Et.Tuesday,Et.Wednesday,Et.Thursday,Et.Friday,Et.Saturday;var jt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(jt||(jt={}));jt.January,jt.February,jt.March,jt.April,jt.May,jt.June,jt.July,jt.August,jt.September,jt.October,jt.November,jt.December;function Fs(e){const t=new ep,r=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:As(e,{milliseconds:!0}).milliseconds;return r!==1/0&&r!==-1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}function ng(...e){const t=e.join(""),n=K0(Array.from(t));return Array.from(n).join("")}function rg(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function ig(e,t){const n=ng([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return og(e,n)}function og(e,t){const n=ng(t);return typeof e=="string"?new RegExp(rg(e),n):new RegExp(e.source,n)}function sg(e,{caseSensitive:t}){const r="".replaceAll("i","");return og(e,r)}function bf(e,t=1){return e.split(`
`).map(n=>["    ".repeat(Math.round(t)),n].join("")).join(`
`)}function ug(e,t){return t?typeof t=="string"?!!new RegExp(rg(t),"i").exec(e):!!ig(t,"i").exec(e):!1}class d extends Error{name="AssertionError";constructor(t,n){super(ka(n,t)||"Assertion failed.")}}const Tm={interval:{milliseconds:100},timeout:{seconds:10}},Sl=Symbol("not set");async function k$(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:o,options:s}=S$(t),u=As(s.timeout,{milliseconds:!0}).milliseconds,a=As(s.interval,{milliseconds:!0});let l=Sl,c;async function f(){try{l=n?r():await r(),e(l,...i)}catch(g){l=Sl,c=xt(g)}}const m=Date.now();for(;l===Sl;)if(await f(),await Fs(a),Date.now()-m>=u){const C=`${o?`${o}: `:""}Timeout of '${u}' milliseconds exceeded waiting for callback value to match expectations`;throw cf(c,C)}return l}function N(e,t=!1){return((...n)=>k$(e,n,t))}function S$(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:ag(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function ag(e){return{interval:e?.interval||Tm.interval,timeout:e?.timeout||Tm.timeout}}const es={isFalse(e,t){if(e!==!1)throw new d(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new d(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new d(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new d(`'${h(e)}' is not truthy.`,t)}},lg={assert:es,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new d(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new d(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new d(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new d(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:N(es.isFalse),isFalsy:N(es.isFalsy),isTrue:N(es.isTrue),isTruthy:N(es.isTruthy)}};function I$(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new d(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new d(`${h(e)} does not end with ${h(t)}}`,n)}function N$(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new d(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new d(`${h(e)} ends with ${h(t)}}`,n)}function T$(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new d(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new d(`${h(e)} does not start with ${h(t)}}`,n)}function M$(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new d(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new d(`${h(e)} starts with ${h(t)}}`,n)}const ts={endsWith:I$,endsWithout:N$,startsWith:T$,startsWithout:M$},cg={assert:ts,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new d(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new d(`${h(e)} does not end with ${h(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new d(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new d(`${h(e)} ends with ${h(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new d(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new d(`${h(e)} does not start with ${h(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new d(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new d(`${h(e)} starts with ${h(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:N(ts.endsWith),endsWithout:N(ts.endsWithout),startsWith:N(ts.startsWith),startsWithout:N(ts.startsWithout)}};function P$(e,t,n){const r=Ln(t);if(!r.includes(e))throw new d(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function mr(e,t){return Ln(t).includes(e)}const Il={isEnumValue(e,t,n){P$(e,t,n)},isNotEnumValue(e,t,n){const r=Ln(t);if(r.includes(e))throw new d(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},fg={assert:Il,check:{isEnumValue:mr,isNotEnumValue(e,t){return!Ln(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=Ln(t);if(!r.includes(e))throw new d(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=Ln(t);if(r.includes(e))throw new d(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(Ln(t).includes(e))return e},isNotEnumValue(e,t){if(!Ln(t).includes(e))return e}},waitUntil:{isEnumValue:N(Il.isEnumValue),isNotEnumValue:N(Il.isNotEnumValue)}},Nl={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new d(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new d(`${h(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new d(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],u=t[o];return s!==u}))throw new d("Entries are equal.",n)}},dg={assert:Nl,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],o=t[r];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],o=t[r];return i!==o})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new d(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new d(`${h(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new d(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],u=t[o];return s!==u}))return e;throw new d("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:N(Nl.entriesEqual),notEntriesEqual:N(Nl.notEntriesEqual)}};function ua(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ks(e,t){if(!(e===t||ua(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!ua(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{ks(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${Yt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function ds(e,t){if(e===t||ua(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!ua(n,r)?!1:Object.keys(e).every(o=>ds(e[o],t[o]))}return!1}const Tl={jsonEquals(e,t,n){try{ks(e,t)}catch(r){throw new d(Yt(r),n)}},notJsonEquals(e,t,n){try{ks(e,t)}catch{return}throw new d("Values are JSON equal.",n)}},mg={assert:Tl,check:{jsonEquals(e,t){return ds(e,t)},notJsonEquals(e,t){return!ds(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return ks(e,t),e}catch(r){throw new d(Yt(r),n)}},notJsonEquals(e,t,n){try{ks(e,t)}catch{return e}throw new d("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(ds(e,t))return e},notJsonEquals(e,t){if(!ds(e,t))return e}},waitUntil:{jsonEquals:N(Tl.jsonEquals),notJsonEquals:N(Tl.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function Mm(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function hg(){this._key="chai/deep-eql__"+Math.random()+Date.now()}hg.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var pg=typeof WeakMap=="function"?WeakMap:hg;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Pm(e,t,n){if(!n||po(e)||po(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Fu(e,t,n,r){if(!(!n||po(e)||po(t))){var i=n.get(e);i?i.set(t,r):(i=new pg,i.set(t,r),n.set(e,i))}}function Rn(e,t,n){if(n&&n.comparator)return Om(e,t,n);var r=gg(e,t);return r!==null?r:Om(e,t,n)}function gg(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:po(e)||po(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function Om(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new pg;var r=n&&n.comparator,i=Pm(e,t,n.memoize);if(i!==null)return i;var o=Pm(t,e,n.memoize);if(o!==null)return o;if(r){var s=r(e,t);if(s===!1||s===!0)return Fu(e,t,n.memoize,s),s;var u=gg(e,t);if(u!==null)return u}var a=Mm(e);if(a!==Mm(t))return Fu(e,t,n.memoize,!1),!1;Fu(e,t,n.memoize,!0);var l=O$(e,t,a,n);return Fu(e,t,n.memoize,l),l}function O$(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Rn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return yg(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ei(e,t,r);case"RegExp":return B$(e,t);case"Generator":return R$(e,t,r);case"DataView":return Ei(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return Ei(new Uint8Array(e),new Uint8Array(t),r);case"Set":return Bm(e,t,r);case"Map":return Bm(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return U$(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function B$(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Bm(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(s,u){r.push([s,u])}),t.forEach(function(s,u){i.push([s,u])}),Ei(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ei(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Rn(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function R$(e,t,n){return Ei(xc(e),xc(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function L$(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function Rm(e){if(L$(e))try{return xc(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function xc(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Lm(e){var t=[];for(var n in e)t.push(n);return t}function Um(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function yg(e,t,n,r){var i=n.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Rn(e[n[o]],t[n[o]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function U$(e,t,n){var r=Lm(e),i=Lm(t),o=Um(e),s=Um(t);if(r=r.concat(o),i=i.concat(s),r.length&&r.length===i.length)return Ei(jm(r).sort(),jm(i).sort())===!1?!1:yg(e,t,r,n);var u=Rm(e),a=Rm(t);return u.length&&u.length===a.length?(u.sort(),a.sort(),Ei(u,a,n)):r.length===0&&u.length===0&&i.length===0&&a.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function po(e){return e===null||typeof e!="object"}function jm(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}class so extends d{name="DiffError";constructor(t,n,r,i){const o=Db(n,r);super([t,bf(o)].join(`
`),i)}}function Ur(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Rr={strictEquals(e,t,n){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new d(`Strict reference equality failed for 

${h(t)}

.`,n):new so("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new d(`Strict reference INequality failed for 

${h(t)}

.`,n):new d(`

${h(e)}

strictly equals

${h(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new d(`Loose reference equality failed for 

${h(t)}

.`,n):new so("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new d(`Loose reference INequality failed for 

${h(t)}

.`,n):new d(`

${h(e)}

loosely equals

${h(t)}

`,n)},deepEquals(e,t,n){if(!Rn(e,t,{comparator:Ur}))throw new so("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(Rn(e,t,{comparator:Ur}))throw new d(`

${h(e)}

deeply equals

${h(t)}

`,n)}},wg=Rr.deepEquals,bg={assert:Rr,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Rn(e,t,{comparator:Ur})},notDeepEquals(e,t){return!Rn(e,t,{comparator:Ur})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new d(`Strict reference equality failed for 

${h(t)}

.`,n):new so("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new d(`Strict reference INequality failed for 

${h(t)}

.`,n):new d(`

${h(e)}

strictly equals

${h(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new d(`Loose reference equality failed for 

${h(t)}

.`,n):new so("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new d(`Loose reference INequality failed for 

${h(t)}

.`,n):new d(`

${h(e)}

loosely equals

${h(t)}

`,n);return e},deepEquals(e,t,n){if(Rn(e,t,{comparator:Ur}))return e;throw new so("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(Rn(e,t,{comparator:Ur}))throw new d(`

${h(e)}

deeply equals

${h(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Rn(e,t,{comparator:Ur}))return e},notDeepEquals(e,t){if(!Rn(e,t,{comparator:Ur}))return e}},waitUntil:{strictEquals:N(Rr.strictEquals),notStrictEquals:N(Rr.notStrictEquals),looseEquals:N(Rr.looseEquals),notLooseEquals:N(Rr.notLooseEquals),deepEquals:N(Rr.deepEquals),notDeepEquals:N(Rr.notDeepEquals)}};function nn(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function En(e,t){return typeof t=="string"?t.includes(e):nn(t,e)}const lr={hasValue(e,t,n){if(!nn(e,t))throw new d(`'${h(e)}' does not have value '${h(t)}'.`,n)},lacksValue(e,t,n){if(nn(e,t))throw new d(`'${h(e)}' has value '${h(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new d(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new d(`'${h(e)}' does not have values '${h(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new d(`'${h(e)}' has values '${h(r)}'.`,n)},isIn(e,t,n){if(!En(e,t))throw new d(`'${h(e)}'

is not in

${h(t)}.`,n)},isNotIn(e,t,n){if(En(e,t))throw new d(`'${h(e)}'

is in

${h(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new d(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new d(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new d(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new d(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new d(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new d(`'${h(e)}' is not empty.`,t)}}},$g={assert:lr,check:{hasValue(e,t){return nn(e,t)},lacksValue(e,t){return!nn(e,t)},hasValues(e,t){return t.every(n=>nn(e,n))},lacksValues(e,t){return t.every(n=>!nn(e,n))},isIn(e,t){return En(e,t)},isNotIn(e,t){return!En(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!nn(e,t))throw new d(`'${h(e)}' does not have value '${h(t)}'.`,n);return e},lacksValue(e,t,n){if(nn(e,t))throw new d(`'${h(e)}' has value '${h(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new d(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new d(`'${h(e)}' does not have values '${h(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new d(`'${h(e)}' has values '${h(r)}'.`,n);return e},isIn(e,t,n){if(!En(e,t))throw new d(`'${h(e)}'

is not in

${h(t)}.`,n);return e},isNotIn(e,t,n){if(En(e,t))throw new d(`'${h(e)}'

is in

${h(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new d(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new d(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new d(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new d(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new d(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new d(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(nn(e,t))return e},lacksValue(e,t){if(!nn(e,t))return e},hasValues(e,t){if(t.every(n=>nn(e,n)))return e},lacksValues(e,t){if(!t.every(n=>nn(e,n)))return e},isIn(e,t){if(En(e,t))return e},isNotIn(e,t){if(!En(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:N(lr.hasValue),lacksValue:N(lr.lacksValue),hasValues:N(lr.hasValues),lacksValues:N(lr.lacksValues),isIn:N(lr.isIn),isNotIn:N(lr.isNotIn),isEmpty:N(lr.isEmpty),isNotEmpty:N(lr.isNotEmpty)}},Ml={isHttpStatus(e,t){if(!mr(e,v))throw new d(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(mr(e,v)){if(!En(e,Vu[t]))throw new d(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new d(`${h(e)} is not a valid HTTP status.`,n)}},vg={assert:Ml,check:{isHttpStatus(e){return mr(e,v)},isHttpStatusCategory(e,t){return mr(e,v)&&En(e,Vu[t])}},assertWrap:{isHttpStatus(e,t){if(!mr(e,v))throw new d(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(mr(e,v)){if(!En(e,Vu[t]))throw new d(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new d(`${h(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(mr(e,v))return e},isHttpStatusCategory(e,t){if(mr(e,v)&&En(e,Vu[t]))return e}},waitUntil:{isHttpStatus:N(Ml.isHttpStatus),isHttpStatusCategory:N(Ml.isHttpStatusCategory)}},Pl={instanceOf(e,t,n){if(!(e instanceof t))throw new d(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new d(`'${h(e)}' is an instance of '${t.name}'`,n)}},Dg={assert:Pl,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new d(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new d(`'${h(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:N(Pl.instanceOf),notInstanceOf:N(Pl.notInstanceOf)}},j$=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function De(e,t){return j$.some(n=>{try{return n(e,t)}catch{return!1}})}const mi={isKeyOf(e,t,n){if(!De(t,e))throw new d(`'${String(e)}' is not a key of '${h(t)}'.`,n)},isNotKeyOf(e,t,n){if(De(t,e))throw new d(`'${String(e)}' is a key of '${h(t)}'.`,n)},hasKey(e,t,n){if(!De(e,t))throw new d(`'${h(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(De(e,t))throw new d(`'${h(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!De(e,i));if(r.length)throw new d(`'${h(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>De(e,i));if(r.length)throw new d(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n)}},Eg={assert:mi,check:{isKeyOf(e,t){return De(t,e)},isNotKeyOf(e,t){return!De(t,e)},hasKey:De,lacksKey(e,t){return!De(e,t)},hasKeys(e,t){return t.every(n=>De(e,n))},lacksKeys(e,t){return t.every(n=>!De(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!De(t,e))throw new d(`'${String(e)}' is not a key of '${h(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(De(t,e))throw new d(`'${String(e)}' is a key of '${h(t)}'.`,n);return e},hasKey(e,t,n){if(!De(e,t))throw new d(`'${h(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(De(e,t))throw new d(`'${h(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!De(e,i));if(r.length)throw new d(`'${h(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>De(e,i));if(r.length)throw new d(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(De(t,e))return e},isNotKeyOf(e,t){if(!De(t,e))return e},hasKey(e,t){if(De(e,t))return e},lacksKey(e,t){if(!De(e,t))return e},hasKeys(e,t){if(t.every(n=>De(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!De(e,n)))return e}},waitUntil:{isKeyOf:N(mi.isKeyOf),isNotKeyOf:N(mi.isNotKeyOf),hasKey:N(mi.hasKey),lacksKey:N(mi.lacksKey),hasKeys:N(mi.hasKeys),lacksKeys:N(mi.lacksKeys)}};function _$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)<t)throw new d(`Length '${e.length}' is not at least '${t}'.`,n)}function V$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)!==t)throw new d(`Length '${e.length}' is not exactly '${t}'.`,n)}const Ol={isLengthAtLeast:_$,isLengthExactly:V$},Cg={assert:Ol,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)<t)throw new d(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)!==t)throw new d(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)===t)return e})},waitUntil:{isLengthAtLeast:N(Ol.isLengthAtLeast),isLengthExactly:N(Ol.isLengthExactly)}},W$={never(e){throw new d("This code should not have executed.",e)}},xg={assert:W$,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Bl={isDefined(e,t){if(e==null)throw new d(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new d(`'${h(e)}' is not a nullish.`,t)}},Ag={assert:Bl,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new d(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new d(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:N(Bl.isDefined),isNullish:N(Bl.isNullish)}},Lt={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new d(`${e} is not within the bounds ${h({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new d(`${e} is not outside the bounds ${h({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new d(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new d(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new d(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new d(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new d(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new d(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new d(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new d(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new d(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new d(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new d(`${e} is within ±${n} of ${t}`,r)}},Fg={assert:Lt,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new d(`${e} is not within the bounds ${h({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new d(`${e} is not outside the bounds ${h({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new d(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new d(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new d(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new d(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new d(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new d(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new d(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new d(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new d(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new d(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new d(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:N(Lt.isInBounds),isOutBounds:N(Lt.isOutBounds),isInteger:N(Lt.isInteger),isNotInteger:N(Lt.isNotInteger),isAbove:N(Lt.isAbove),isAtLeast:N(Lt.isAtLeast),isBelow:N(Lt.isBelow),isAtMost:N(Lt.isAtMost),isNaN:N(Lt.isNaN),isFinite:N(Lt.isFinite),isInfinite:N(Lt.isInfinite),isApproximately:N(Lt.isApproximately),isNotApproximately:N(Lt.isNotApproximately)}};function q$(e,t,n,r,i){return Js(...Pa(e,t,n,r,i),!1)}function Pa(e,t,n,r,i){const o=Array.isArray(n);return[o?e:wg,o?t:e,o?n:t,o?r:n,o?i:r]}function Js(e,t,n,r,i,o){const s=t(...n);if(s instanceof Promise)return new Promise(async(u,a)=>{try{const l=await s;e(l,r),o?u(l):u()}catch(l){a(new d(`Output from '${t.name}' did not produce expected output. ${Yt(l)}`,i))}});try{return e(s,r),o?s:void 0}catch(u){throw new d(`Output from '${t.name}' did not produce expected output. ${Yt(u)}`,i)}}function z$(e,t,n,r,i){try{const o=Js(...Pa(e,t,n,r,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function K$(e,t,n,r,i){return Js(...Pa(e,t,n,r,i),!0)}function Z$(e,t,n,r,i){try{const o=Js(...Pa(e,t,n,r,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Rl=Symbol("not set");async function G$(e,t,n,r,i,o){const s=Array.isArray(n),u=s?e:wg,a=s?t:e,l=s?n:t,c=s?r:n,f=ag(s?i:r),m=s?o:i,g=As(f.timeout,{milliseconds:!0}).milliseconds,C=As(f.interval,{milliseconds:!0});let D=Rl,k;async function A(){try{D=await Js(u,a,l,c,void 0,!0)}catch(U){D=Rl,k=xt(U)}}const I=Date.now();for(;D===Rl;)if(await A(),await Fs(C),Date.now()-I>=g)throw cf(k,ka(m,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return D}const Y$={output:q$},kg={assert:Y$,check:{output:z$},assertWrap:{output:K$},checkWrap:{output:Z$},waitUntil:{output:G$}},ns={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new d(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new d(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new d(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new d(`'${h(e)}' is not a Primitive.`,t)}},Sg={assert:ns,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new d(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new d(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new d(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new d(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:N(ns.isNotPrimitive),isNotPropertyKey:N(ns.isNotPropertyKey),isPrimitive:N(ns.isPrimitive),isPropertyKey:N(ns.isPropertyKey)}},rs={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new d(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new d(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new d(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new d(`'${h(e)}' is a Promise.`,t)}},Ig={assert:rs,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new d(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new d(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new d(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new d(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:N(rs.isPromiseLike,!0),isNotPromiseLike:N(rs.isNotPromiseLike,!0),isPromise:N(rs.isPromise,!0),isNotPromise:N(rs.isNotPromise,!0)}},Ll={matches(e,t,n){if(!t.test(e))throw new d(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new d(`'${e}' matches ${t}`,n)}},Ng={assert:Ll,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new d(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new d(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:N(Ll.matches,!0),mismatches:N(Ll.mismatches,!0)}},Be={isArray(e,t){if(!Array.isArray(e))throw new d(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new d(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new d(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new d(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new d(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new d(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new d(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new d(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new d(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new d(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new d(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new d(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new d(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new d(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new d(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new d(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new d(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new d(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new d(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new d(`'${h(e)}' is a undefined.`,t)}},Tg={assert:Be,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new d(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new d(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new d(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new d(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new d(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new d(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new d(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new d(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new d(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new d(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new d(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new d(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new d(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new d(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new d(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new d(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new d(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new d(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new d(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new d(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:N(Be.isArray),isBigInt:N(Be.isBigInt),isBoolean:N(Be.isBoolean),isFunction:N(Be.isFunction),isNull:N(Be.isNull),isNumber:N(Be.isNumber),isObject:N(Be.isObject),isString:N(Be.isString),isSymbol:N(Be.isSymbol),isUndefined:N(Be.isUndefined),isNotArray:N(Be.isNotArray),isNotBigInt:N(Be.isNotBigInt),isNotBoolean:N(Be.isNotBoolean),isNotFunction:N(Be.isNotFunction),isNotNull:N(Be.isNotNull),isNotNumber:N(Be.isNotNumber),isNotObject:N(Be.isNotObject),isNotString:N(Be.isNotString),isNotSymbol:N(Be.isNotSymbol),isNotUndefined:N(Be.isNotUndefined)}};var _t;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(_t||(_t={}));function $f(e,t,n){vf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n)}function _m(e,t,n){vf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,n)}function vf(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new d(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=Yt(e);if(typeof n.matchMessage=="string"){if(!ug(i,n.matchMessage))throw new d(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new d(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new d(t.notInstance,r);else throw new d(t.noError,r)}function Vm(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=Yt(e);if(typeof t.matchMessage=="string"){if(!ug(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Oa(e,t,n,r){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,u)=>{try{await o}catch(a){i=xt(a)}try{_m(i,n,r),e===_t.Assert?s():e===_t.Check?s(!0):s(i)}catch(a){e===_t.CheckWrap?s(void 0):e===_t.Check?s(!1):u(xt(a))}})}catch(o){i=xt(o)}try{return _m(i,n,r),e===_t.Check?!0:e!==_t.Assert?i:void 0}catch(o){if(e===_t.CheckWrap)return;if(e===_t.Check)return!1;throw o}}function J$(e,t,n){return Oa(_t.Assert,e,t,n)}function H$(e,t){return Oa(_t.Check,e,t)}function X$(e,t,n){return Oa(_t.AssertWrap,e,t,n)}function Q$(e,t,n){return Oa(_t.CheckWrap,e,t,n)}const ev=N($f);function tv(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof n=="object"?r:n,u=typeof n=="object"?n:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${h(o)}'`);return ev(i,async()=>{try{await o();return}catch(a){return xt(a)}},u,s)}const nv={throws:J$,isError:$f},Mg={assert:nv,check:{throws:H$,isError(e,t){return Vm(e,t)}},assertWrap:{throws:X$,isError(e,t,n){return vf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:Q$,isError(e,t){if(Vm(e,t))return e}},waitUntil:{throws:tv,isError:N($f)}},jr=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Ul={isUuid(e,t){if(!String(e).match(jr))throw new d(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(jr))throw new d(`'${String(e)}' is a UUID.`,t)}},Pg={assert:Ul,check:{isUuid(e){return!!String(e).match(jr)},isNotUuid(e){return!String(e).match(jr)}},assertWrap:{isUuid(e,t){if(!String(e).match(jr))throw new d(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(jr))throw new d(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(jr))return e},isNotUuid(e){if(!String(e).match(jr))return e}},waitUntil:{isUuid:N(Ul.isUuid),isNotUuid:N(Ul.isNotUuid)}},rv={...xg.assert,...lg.assert,...cg.assert,...dg.assert,...fg.assert,...vg.assert,...Dg.assert,...mg.assert,...Eg.assert,...Cg.assert,...Ag.assert,...Fg.assert,...kg.assert,...Sg.assert,...Ig.assert,...Ng.assert,...Tg.assert,...bg.assert,...Mg.assert,...Pg.assert,...$g.assert},Df=[lg,cg,dg,fg,vg,Dg,mg,Eg,Cg,xg,Ag,Fg,kg,Sg,Ig,Ng,Tg,bg,Mg,Pg,$g],iv=Object.assign({},...Df.map(e=>e.check)),S=Object.assign(function(t){return!!t},iv);function ov(e,t,n){return Ku(e,t,n,new Set)}function Ku(e,t,n,r){if(e=Wm(e),t=Wm(t),S.isObject(e)&&S.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Ku(Fe(e).sort(),Fe(t).sort(),n,r))return!1;let i=!1;const o=Fe(e).map(s=>{const u=Ku(e[s],t[s],n,r);return S.isPromise(u)&&(i=!0),u});return qm(i,o)}else if(S.isArray(e)&&S.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,u)=>{const a=Ku(s,t[u],n,r);return S.isPromise(a)&&(i=!0),a});return qm(i,o)}else return n(e,t)}function Wm(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function qm(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(S.isTrue))}catch(i){r(xt(i))}}):t.every(S.isTrue)}const sv=Object.assign({},...Df.map(e=>e.assertWrap)),xi=Object.assign(function(t,n){if(!t)throw new d("Assertion failed.",n);return t},sv);function uv(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const av={tsType:uv},lv={assert:av},cv={fail:e=>{throw new d("Failure triggered.",e)}},fv={...lv.assert,...rv,...cv},rr=Object.assign(function(t,n){if(!t)throw new d("Assertion failed.",n)},fv),dv=Object.assign({},...Df.map(e=>e.checkWrap)),mv=Object.assign(function(t){if(t)return t},dv);function hv(e,t){return S.hasKey(e,"entryType")&&e.entryType===t}function Zi(e,t){return e.controlType===t}var J;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(J||(J={}));const Og=Symbol("any-type"),pv={[J.Checkbox]:!1,[J.Color]:"",[J.Dropdown]:"",[J.Hidden]:Og,[J.Number]:0,[J.Text]:""};function gv(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const o=pv[i.controlType];o!==Og&&(typeof o!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function yv(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return S.isPromise(i)?new Promise(async(o,s)=>{try{const u=await i;e.set(r,u),o(u)}catch(u){s(xt(u))}}):(e.set(r,i),i)}}function Hs(e,t,n){if(t in e)return e[t];{const r=n();return S.isPromise(r)?new Promise(async(i,o)=>{try{const s=await r;e[t]=s,i(s)}catch(s){o(xt(s))}}):(e[t]=r,r)}}function Ef(e){return Fe(e).map(t=>[t,e[t]])}function Ss(e){return Object.fromEntries(e)}function Ni(e,t,n){return e.reduce((r,i,o,s)=>{const u=t(i,o,s);return n(u,i,o,s)&&r.push(u),r},[])}function wv(e,t,n={}){try{let r=!1;const i=e.map((o,s,u)=>{const a=t(o,s,u);return a instanceof Promise?(r=!0,a):a?[a.key,a.value]:void 0}).filter(S.isTruthy);return r?new Promise(async(o,s)=>{try{const u=Ni(await Promise.all(i),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},S.isTruthy);o(Ss(u))}catch(u){s(xt(u))}}):Ss(i)}catch(r){throw xt(r)}}function bv(e){return Array.isArray(e)?e:[e]}function $v({min:e,max:t}){const{min:n,max:r}=Q0({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const u=Math.floor(256**s/i)*i,a=new Uint8Array(s);let l;do crypto.getRandomValues(a),l=a.reduce((c,f,m)=>c+f*256**m,0);while(l>=u);return n+l%i}const zm=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Bg(e=16){let t="";for(let n=0;n<e;n++){const r=$v({min:0,max:zm.length-1});t+=zm[r]}return t}function Rg(e){if(S.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Yt(t).trim()).join(`
`))}function vv(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Dv="modulepreload",Ev=function(e){return"/vira/book/"+e},Km={},Lg=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),u=s?.nonce||s?.getAttribute("nonce");i=a(n.map(l=>{if(l=Ev(l),l in Km)return;Km[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Dv,c||(m.as="script"),m.crossOrigin="",m.href=l,u&&m.setAttribute("nonce",u),document.head.appendChild(m),c)return new Promise((g,C)=>{m.addEventListener("load",g),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s}return i.then(s=>{for(const u of s||[])u.status==="rejected"&&o(u.reason);return t().catch(o)})};var tt;(function(e){e.Standard="stdout",e.Error="stderr"})(tt||(tt={}));var ee;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ee||(ee={}));async function Cv(){return await X0({async[Vn.Node](){const e=(await Lg(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ee.Bold]:e.bold.open,[ee.Debug]:e.blueBright.open,[ee.Error]:e.red.open,[ee.Faint]:e.gray.open,[ee.Info]:e.cyan.open,[ee.Mutate]:e.magenta.open,[ee.NormalWeight]:"\x1B[22m",[ee.Plain]:"",[ee.Reset]:e.reset.open,[ee.Success]:e.green.open,[ee.Warning]:e.yellow.open}},[Vn.Web](){return Promise.resolve({[ee.Bold]:"font-weight: bold",[ee.Debug]:"color: blue",[ee.Error]:"color: red",[ee.Faint]:"color: grey",[ee.Info]:"color: teal",[ee.Mutate]:"color: magenta",[ee.NormalWeight]:"",[ee.Plain]:"",[ee.Reset]:"",[ee.Success]:"color: green",[ee.Warning]:"color: orange"})}})}const tn=await Cv(),xv={[ee.Bold]:{colors:[tn.bold],logType:tt.Standard},[ee.Debug]:{colors:[tn.debug],logType:tt.Standard},[ee.Faint]:{colors:[tn.faint],logType:tt.Standard},[ee.Info]:{colors:[tn.info],logType:tt.Standard},[ee.Mutate]:{colors:[tn.mutate,tn.bold],logType:tt.Standard},[ee.NormalWeight]:{colors:[tn.normalWeight],logType:tt.Standard},[ee.Plain]:{colors:[],logType:tt.Standard},[ee.Reset]:{colors:[tn.reset],logType:tt.Standard},[ee.Success]:{colors:[tn.success,tn.bold],logType:tt.Standard},[ee.Error]:{colors:[tn.error,tn.bold],logType:tt.Error},[ee.Warning]:{colors:[tn.warning],logType:tt.Error}};function Gt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function uo({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function Av(e,t){try{let n=!1;const r=Ef(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(n=!0,s):s?[s.key,s.value]:void 0}).filter(S.isTruthy);return n?new Promise(async(i,o)=>{try{const s=Ni(await Promise.all(r),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},S.isTruthy);i(Ss(s))}catch(s){o(xt(s))}}):Ss(r)}catch(n){throw xt(n)}}function Fv(e,t){return Av(e,(n,r)=>{const i=r,o=t(r,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function Ug(e,...t){const n={...e};return t.forEach(r=>{r&&Ef(r).forEach(([i,o])=>{o!=null&&(n[i]=o)})}),n}const kv="px";function jg(e){return _g({value:e,suffix:kv})}function _g({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Sv({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Iv(){return await X0({async[Vn.Node](){const{inspect:e}=await Lg(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(u=>typeof u=="string"?u:e(u));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[ee.Reset].colors.join("")].join(""),css:void 0}}},[Vn.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:Ni(n.colorConfig[t].colors,s=>Sv({value:s,suffix:";"}),S.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Yt(s):h(s)).join(`
`),n.omitColors?"":n.colorConfig[ee.Reset].colors.join("")].join(""),css:r}}}})}const Nv=await Iv(),Tv={colorConfig:xv,omitColors:!1},Mv=Vg({[tt.Error](){},[tt.Standard](){}});function Vg(e,t){const n=Ug(Tv,t);function r(o){e[n.colorConfig[o.colorKey].logType](Nv({...o,options:n}))}const i=Fv(ee,o=>(...s)=>r({args:s,colorKey:o}));return{...i,if(o){return o?i:Mv}}}const Pv=lf(Vn.Node)?{[tt.Error]({text:e}){process.stderr.write(e+`
`)},[tt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[tt.Error]({text:e,css:t}){console.error(Gt({value:e,prefix:"%c"}),t)},[tt.Standard]({text:e,css:t}){console.log(Gt({value:e,prefix:"%c"}),t)}},Ov=Vg(Pv);function Bv(e,{min:t,max:n}){return Math.min(Math.max(e,t),n)}function Rv({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=ig(sg(t,{caseSensitive:n}),"g"),o=[];return e.replace(i,(...s)=>{const u=s[s.length-2];if(typeof u!="number")throw new TypeError(`Match index "${u}" is not a number. Searching for "${t}" in "${e}".`);const a=s[0];if(typeof a!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof a}!`);o.push({index:u,length:a.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${u} is not a string.`);return l}),o}function Lv(e,t,{caseSensitive:n}){const r=Rv({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=sg(t,{caseSensitive:n});return e.split(i).reduce((s,u,a)=>{const l=r[a],c=s.concat(u);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function Uv(e,t){return e.split(t)}function Zm(e,t){const{min:n,max:r}=Q0(t);if(t.takeOverflow){const i=r-n+1,o=(e-n)%i;return o<0?n+i+o:n+o}else return e>r?n:e<n?r:e}function ln(e,t){let n=!1;const r=Fe(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(n=!0),i[o]=s,i},{});return n?new Promise(async(i,o)=>{try{await Promise.all(Fe(r).map(async s=>{const u=await r[s];r[s]=u})),i(r)}catch(s){o(xt(s))}}):r}function Cf(e,t){const n=Ef(e).filter(([r,i])=>t(r,i,e));return Ss(n)}function jv(e,t){return Cf(e,n=>!t.includes(n))}function Gm(e){return Fe(e).map(t=>e[t])}function Wg(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function _v(e,t){return t.capitalizeFirstLetter?Vv(e):e}function Vv(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const Wv={capitalizeFirstLetter:!1};var go;(function(e){e.Upper="upper",e.Lower="lower"})(go||(go={}));function qv(e){return e.toLowerCase()!==e.toUpperCase()}function Ym(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(qv(r)){if(t===go.Upper&&r!==r.toUpperCase()||t===go.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function zv(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const o=i[1];return o?o.toUpperCase():""});return _v(r,Ug(Wv,t))}function Kv(e){return e.split("").reduce((n,r,i,o)=>{const s=i>0&&o[i-1]||"",u=i<o.length-1&&o[i+1]||"",a=Ym(s,go.Lower,{rejectNoCaseCharacters:!0})||Ym(u,go.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!a?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Zv(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Gv({value:e,wrapper:t}){return Gt({value:_g({value:e,suffix:t}),prefix:t})}function Qr(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function qg(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class Yv{listeners={};universalListeners=new Map;getListenerCount(){return Gm(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)+this.universalListeners.size}listenToAll(t,n={}){const r=()=>this.universalListeners.delete(t)||!1;function i(o,s){n.once&&r(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:r}),r}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,n,r={}){const i=S.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(n)||!1;function s(u,a){r.once&&o(),n(u,a)}return Hs(this.listeners,i,()=>new Map).set(n,{listener:s,removeListener:o}),o}removeListener(t,n){const r=S.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const o=i.get(n);return o?o.removeListener():!1}dispatch(t){const n=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),r+this.universalListeners.size}removeAllListeners(){const n=Gm(this.listeners).reduce((r,i)=>{const o=i.size||0;return i.clear(),r+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),n}destroy(){this.removeAllListeners()}}class xf extends Yv{}function zg(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Ac(e,t,n){return zg(globalThis,e,t,n)}function Af(e,t){return aa(e.title),e.parent?[...Af(e.parent),aa(e.parent.title)].concat([]):[]}function aa(e){return Wg(e).toLowerCase().replaceAll(/\s/g,"-")}function Jv({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const Hv={[dt.ElementExample]:()=>[],[dt.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...gv(e.controls,e.title)].filter(S.isTruthy),[dt.Root]:()=>[]},la="_isBookTreeNode",Kg=new Map;function Xv(e){return Kg.get(e)}function Qv(e,t){yv(Kg,e,()=>t)}function ao(e,t){return Zg(e)&&e.entry.entryType===t}function Zg(e){return!!(S.hasKeys(e,[la,"entry"])&&e[la])}function eD(){return{[la]:!0,entry:{entryType:dt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function tD({entries:e,debug:t}){const n=Xv(e);if(n)return n;const r=eD();e.forEach(s=>Ff({tree:r,newEntry:s,debug:t,manuallyAdded:!0}));const i=Gg(r),o={tree:r,flattenedNodes:i};return Qv(e,o),t&&console.info("element-book tree:",r),o}function nD(e,t,n){if(!t.parent)return e;const r=Fc(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ff({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=Fc(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${Af(t).join(" > ")}`);return i}function Ff({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=Hv[t.entryType](t);t.errors.push(...i);const o=nD(e,t,n),s=aa(t.title),u=o.children[s];if(u){if(r){if(u.manuallyAdded){u.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}u.manuallyAdded=!0}return}const a={[la]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=a,hv(t,dt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Ff({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function Fc(e,t){const n=Zg(e)?e.fullUrlBreadcrumbs.slice(0,-1):Af(e);return n.length?n.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function Gg(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>Gg(i));return[e,...n].flat()}function kf(e,t){return Sf(e,["",...t],void 0)}function Sf(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const o=e.children[i||""],s=o&&Sf(o,r,n);return{...e.controls,...s}}function rD(e,t,n){const r={...e};return Sf(r,["",...t],n),r}function Yg(e,t){const n=t?.controls||(ao(e,dt.Page)?ln(e.entry.controls,(i,o)=>o.initValue):{});return{children:ln(e.children,(i,o)=>Yg(o,t?.children?.[o.urlBreadcrumb])),controls:n}}function Je(e){const t={...e,entryType:dt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,isVertical:t.useVerticalExamples,entryType:dt.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(S.isTruthy)};n.add(r.title),t.elementExamples[aa(i.title)]=i}}),t}var Vt;(function(e){e.Search="search",e.Book="book"})(Vt||(Vt={}));function kc(e){return e[0]===Vt.Book?"":e[1]?decodeURIComponent(e[1]):""}const yo={hash:void 0,paths:[Vt.Book],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zu=globalThis,If=Zu.ShadowRoot&&(Zu.ShadyCSS===void 0||Zu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nf=Symbol(),Jm=new WeakMap;let Jg=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Nf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(If&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Jm.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Jm.set(n,t))}return t}toString(){return this.cssText}};const Ze=e=>new Jg(typeof e=="string"?e:e+"",void 0,Nf),Gu=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new Jg(n,e,Nf)},iD=(e,t)=>{if(If)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const r=document.createElement("style"),i=Zu.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Hm=If?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Ze(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oD,defineProperty:sD,getOwnPropertyDescriptor:uD,getOwnPropertyNames:aD,getOwnPropertySymbols:lD,getPrototypeOf:cD}=Object,Ba=globalThis,Xm=Ba.trustedTypes,fD=Xm?Xm.emptyScript:"",dD=Ba.reactiveElementPolyfillSupport,ys=(e,t)=>e,ca={toAttribute(e,t){switch(t){case Boolean:e=e?fD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Tf=(e,t)=>!oD(e,t),Qm={attribute:!0,type:String,converter:ca,reflect:!1,useDefault:!1,hasChanged:Tf};Symbol.metadata??=Symbol("metadata"),Ba.litPropertyMetadata??=new WeakMap;let Qi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Qm){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&sD(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=uD(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){const u=i?.call(this);o?.call(this,s),this.requestUpdate(t,u,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Qm}static _$Ei(){if(this.hasOwnProperty(ys("elementProperties")))return;const t=cD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ys("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ys("properties"))){const n=this.properties,r=[...aD(n),...lD(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Hm(i))}else t!==void 0&&n.push(Hm(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return iD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:ca).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ca;this._$Em=i;const u=s.fromAttribute(n,o.type);this[i]=u??this._$Ej?.get(i)??u,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??Tf)(o,n)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,u=this[i];s!==!0||this._$AL.has(i)||u===void 0||this.C(i,void 0,o,u)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};Qi.elementStyles=[],Qi.shadowRootOptions={mode:"open"},Qi[ys("elementProperties")]=new Map,Qi[ys("finalized")]=new Map,dD?.({ReactiveElement:Qi}),(Ba.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mf=globalThis,fa=Mf.trustedTypes,eh=fa?fa.createPolicy("lit-html",{createHTML:e=>e}):void 0,Hg="$lit$",Vr=`lit$${Math.random().toFixed(9).slice(2)}$`,Xg="?"+Vr,mD=`<${Xg}>`,Ai=document,Is=()=>Ai.createComment(""),Ns=e=>e===null||typeof e!="object"&&typeof e!="function",Pf=Array.isArray,hD=e=>Pf(e)||typeof e?.[Symbol.iterator]=="function",jl=`[ 	
\f\r]`,is=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,th=/-->/g,nh=/>/g,hi=RegExp(`>|${jl}(?:([^\\s"'>=/]+)(${jl}*=${jl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rh=/'/g,ih=/"/g,Qg=/^(?:script|style|textarea|title)$/i,pD=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),gD=pD(1),cn=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),oh=new WeakMap,$i=Ai.createTreeWalker(Ai,129);function ey(e,t){if(!Pf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return eh!==void 0?eh.createHTML(t):t}const yD=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=is;for(let u=0;u<n;u++){const a=e[u];let l,c,f=-1,m=0;for(;m<a.length&&(s.lastIndex=m,c=s.exec(a),c!==null);)m=s.lastIndex,s===is?c[1]==="!--"?s=th:c[1]!==void 0?s=nh:c[2]!==void 0?(Qg.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=hi):c[3]!==void 0&&(s=hi):s===hi?c[0]===">"?(s=i??is,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?hi:c[3]==='"'?ih:rh):s===ih||s===rh?s=hi:s===th||s===nh?s=is:(s=hi,i=void 0);const g=s===hi&&e[u+1].startsWith("/>")?" ":"";o+=s===is?a+mD:f>=0?(r.push(l),a.slice(0,f)+Hg+a.slice(f)+Vr+g):a+Vr+(f===-2?u:g)}return[ey(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Ts{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const u=t.length-1,a=this.parts,[l,c]=yD(t,n);if(this.el=Ts.createElement(l,r),$i.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=$i.nextNode())!==null&&a.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Hg)){const m=c[s++],g=i.getAttribute(f).split(Vr),C=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:C[2],strings:g,ctor:C[1]==="."?bD:C[1]==="?"?$D:C[1]==="@"?vD:Ra}),i.removeAttribute(f)}else f.startsWith(Vr)&&(a.push({type:6,index:o}),i.removeAttribute(f));if(Qg.test(i.tagName)){const f=i.textContent.split(Vr),m=f.length-1;if(m>0){i.textContent=fa?fa.emptyScript:"";for(let g=0;g<m;g++)i.append(f[g],Is()),$i.nextNode(),a.push({type:2,index:++o});i.append(f[m],Is())}}}else if(i.nodeType===8)if(i.data===Xg)a.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Vr,f+1))!==-1;)a.push({type:7,index:o}),f+=Vr.length-1}o++}}static createElement(t,n){const r=Ai.createElement("template");return r.innerHTML=t,r}}function wo(e,t,n=e,r){if(t===cn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const o=Ns(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=wo(e,i._$AS(e,t.values),i,r)),t}let wD=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Ai).importNode(n,!0);$i.currentNode=i;let o=$i.nextNode(),s=0,u=0,a=r[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Ro(o,o.nextSibling,this,t):a.type===1?l=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(l=new DD(o,this,t)),this._$AV.push(l),a=r[++u]}s!==a?.index&&(o=$i.nextNode(),s++)}return $i.currentNode=Ai,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class Ro{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=wo(this,t,n),Ns(t)?t===ue||t==null||t===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):t!==this._$AH&&t!==cn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):hD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ue&&Ns(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ai.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ts.createElement(ey(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new wD(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=oh.get(t.strings);return n===void 0&&oh.set(t.strings,n=new Ts(t)),n}k(t){Pf(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Ro(this.O(Is()),this.O(Is()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ra{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ue}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=wo(this,t,n,0),s=!Ns(t)||t!==this._$AH&&t!==cn,s&&(this._$AH=t);else{const u=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=wo(this,u[r+a],n,a),l===cn&&(l=this._$AH[a]),s||=!Ns(l)||l!==this._$AH[a],l===ue?t=ue:t!==ue&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}s&&!i&&this.j(t)}j(t){t===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bD extends Ra{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ue?void 0:t}}class $D extends Ra{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ue)}}class vD extends Ra{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=wo(this,t,n,0)??ue)===cn)return;const r=this._$AH,i=t===ue&&r!==ue||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==ue&&(r===ue||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class DD{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){wo(this,t)}}const ED={I:Ro},CD=Mf.litHtmlPolyfillSupport;CD?.(Ts,Ro),(Mf.litHtmlVersions??=[]).push("3.3.1");const xD=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const o=n?.renderBefore??null;r._$litPart$=i=new Ro(t.insertBefore(Is(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Of=globalThis;let ws=class extends Qi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xD(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return cn}};ws._$litElement$=!0,ws.finalized=!0,Of.litElementHydrateSupport?.({LitElement:ws});const AD=Of.litElementPolyfillSupport;AD?.({LitElement:ws});(Of.litElementVersions??=[]).push("4.2.1");function kr(e){if(S.isObject(e))return ln(e,(n,r)=>{if(!S.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Kv(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const o=r,s=n.startsWith("--")?Ze(n):n.startsWith("-")?Gu`-${Ze(n)}`:Gu`--${Ze(n)}`;return{name:s,value:Gu`var(${s}, ${Ze(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${kr.name}' function.`)}function FD({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const ce=kr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),kD={nav:{hover:{background:ce["element-book-nav-hover-background-color"],foreground:ce["element-book-nav-hover-foreground-color"]},active:{background:ce["element-book-nav-active-background-color"],foreground:ce["element-book-nav-active-foreground-color"]},selected:{background:ce["element-book-nav-selected-background-color"],foreground:ce["element-book-nav-selected-foreground-color"]}},accent:{icon:ce["element-book-accent-icon-color"]},page:{background:ce["element-book-page-background-color"],backgroundFaint1:ce["element-book-page-background-faint-level-1-color"],backgroundFaint2:ce["element-book-page-background-faint-level-2-color"],foreground:ce["element-book-page-foreground-color"],foregroundFaint1:ce["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:ce["element-book-page-foreground-faint-level-2-color"]}};function SD(e,t){ty(e,t,kD)}function Sc(e){return S.hasKey(e,"_$cssResult$")}function sh(e){return S.hasKeys(e,["name","value","default"])&&S.isString(e.default)&&Sc(e.name)&&Sc(e.value)}function ty(e,t,n){Object.entries(t).forEach(([r,i])=>{const o=n[r];if(!o)throw new Error(`no nestedCssVar at key '${r}'`);if(Sc(i)){if(!sh(o))throw new Error(`got a CSS result at '${r}' but no CSS var`);FD({forCssVar:o,onElement:e,toValue:String(i)})}else{if(sh(o))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);ty(e,i,o)}})}function Ce(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let r=t[0].length,i=t[0].map((s,u)=>t.map(a=>a[u])),o=e.map(s=>i.map(u=>{let a=0;if(!Array.isArray(s)){for(let l of u)a+=s*l;return a}for(let l=0;l<s.length;l++)a+=s[l]*(u[l]||0);return a}));return n===1&&(o=o[0]),r===1?o.map(s=>s[0]):o}function Xs(e){return zr(e)==="string"}function zr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function da(e,{precision:t,unit:n}){return Gr(e)?"none":ny(e,t)+(n??"")}function Gr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function ze(e){return Gr(e)?0:e}function ny(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const ID={deg:1,grad:.9,rad:180/Math.PI,turn:360};function ry(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(u,a)=>{let l=a.match(r),c=a;if(l){let f=l[0],m=c.slice(0,-f.length);f==="%"?(c=new Number(m/100),c.type="<percentage>"):(c=new Number(m*ID[f]),c.type="<angle>",c.unit=f)}else n.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);u.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=a),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function iy(e){return e[e.length-1]}function Ms(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function oy(e,t,n){return(n-e)/(t-e)}function Bf(e,t,n){return Ms(t[0],t[1],oy(e[0],e[1],n))}function sy(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function uy(e,t,n){return Math.max(Math.min(n,t),e)}function La(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Qn(e,t){return La(Math.abs(e)**t,e)}function Rf(e,t){return t===0?0:e/t}function ay(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var ND=Object.freeze({__proto__:null,bisectLeft:ay,clamp:uy,copySign:La,interpolate:Ms,interpolateInv:oy,isNone:Gr,isString:Xs,last:iy,mapRange:Bf,multiplyMatrices:Ce,parseCoordGrammar:sy,parseFunction:ry,serializeNumber:da,skipNone:ze,spow:Qn,toPrecision:ny,type:zr,zdiv:Rf});class TD{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const Yr=new TD;var fn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Ot={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ic(e){return Array.isArray(e)?e:Ot[e]}function ma(e,t,n,r={}){if(e=Ic(e),t=Ic(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(Yr.run("chromatic-adaptation-start",i),i.M||(i.W1===Ot.D65&&i.W2===Ot.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Ot.D50&&i.W2===Ot.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Yr.run("chromatic-adaptation-end",i),i.M)return Ce(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const MD=new Set(["<number>","<percentage>","<angle>"]);function uh(e,t,n,r){return Object.entries(e.coords).map(([o,s],u)=>{let a=t.coordGrammar[u],l=r[u],c=l?.type,f;if(l.none?f=a.find(C=>MD.has(C)):f=a.find(C=>C==c),!f){let C=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${C} in ${n}()`)}let m=f.range;c==="<percentage>"&&(m||=[0,1]);let g=s.range||s.refRange;return m&&g&&(r[u]=Bf(m,g,r[u])),f})}function ly(e,{meta:t}={}){let n={str:String(e)?.trim()};if(Yr.run("parse-start",n),n.color)return n.color;if(n.parsed=ry(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],u=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let c of L.all){let f=c.getFormat("color");if(f&&(s.includes(f.id)||f.ids?.filter(m=>s.includes(m)).length)){const m=Object.keys(c.coords).map((C,D)=>n.parsed.args[D]||0);let g;return f.coordGrammar&&(g=uh(c,f,"color",m)),t&&Object.assign(t,{formatId:"color",types:g}),f.id.startsWith("--")&&!i.startsWith("--")&&fn.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&fn.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:m,alpha:u}}}let a="",l=i in L.registry?i:o;if(l in L.registry){let c=L.registry[l].formats?.color?.id;c&&(a=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(a||"Missing a plugin?"))}else for(let i of L.all){let o=i.getFormat(r);if(o&&o.type==="function"){let s=1;(o.lastAlpha||iy(n.parsed.args).alpha)&&(s=n.parsed.args.pop());let u=n.parsed.args,a;return o.coordGrammar&&(a=uh(i,o,r,u)),t&&Object.assign(t,{formatId:o.name,types:a}),{spaceId:i.id,coords:u,alpha:s}}}}else for(let r of L.all)for(let i in r.formats){let o=r.formats[i];if(o.type!=="custom"||o.test&&!o.test(n.str))continue;let s=o.parse(n.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function H(e){if(Array.isArray(e))return e.map(H);if(!e)throw new TypeError("Empty color reference");Xs(e)&&(e=ly(e));let t=e.space||e.spaceId;return t instanceof L||(e.space=L.get(t)),e.alpha===void 0&&(e.alpha=1),e}const PD=75e-6;class L{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?L.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=Ic(r),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:L.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:OD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Yr.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=PD}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,o)=>{let s=r[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[u,a]=s.range;return(u===void 0||i>=u-n)&&(a===void 0||i<=a+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=ah(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=ah(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const u=H(t);[t,n]=[u.space,u.coords]}if(t=L.get(t),this.equals(t))return n;n=n.map(u=>Number.isNaN(u)?0:u);let r=this.path,i=t.path,o,s;for(let u=0;u<r.length&&r[u].equals(i[u]);u++)o=r[u],s=u;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let u=r.length-1;u>s;u--)n=r[u].toBase(n);for(let u=s+1;u<i.length;u++)n=i[u].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=H(t);[t,n]=[r.space,r.coords]}return t=L.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(L.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof L)return t;if(zr(t)==="string"){let i=L.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return L.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=zr(t),i,o;if(r==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=L.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=zr(o),r==="number"||r==="string"&&o>=0){let a=Object.entries(i.coords)[o];if(a)return{space:i,id:a[0],index:o,...a[1]}}i=L.get(i);let s=o.toLowerCase(),u=0;for(let a in i.coords){let l=i.coords[a];if(a.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:a,index:u,...l};u++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function OD(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function ah(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=sy(e.coords);let n=Object.entries(t).map(([r,i],o)=>{let s=e.coordGrammar[o][0],u=i.range||i.refRange,a=s.range,l="";return s=="<percentage>"?(a=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:u,toRange:a,suffix:l}});e.serializeCoords=(r,i)=>r.map((o,s)=>{let{fromRange:u,toRange:a,suffix:l}=n[s];return u&&a&&(o=Bf(u,a,o)),o=da(o,{precision:i,unit:l}),o})}return e}var mt=new L({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Xt extends L{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=mt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=Ce(t.toXYZ_M,n);return this.white!==this.base.white&&(r=ma(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=ma(this.base.white,this.white,n),Ce(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function Qs(e,t){return e=H(e),!t||e.space.equals(t)?e.coords.slice():(t=L.get(t),t.from(e))}function on(e,t){e=H(e);let{space:n,index:r}=L.resolveCoord(t,e.space);return Qs(e,n)[r]}function Lf(e,t,n){return e=H(e),t=L.get(t),e.coords=t.to(e.space,n),e}Lf.returns="color";function Ar(e,t,n){if(e=H(e),arguments.length===2&&zr(arguments[1])==="object"){let r=arguments[1];for(let i in r)Ar(e,i,r[i])}else{typeof n=="function"&&(n=n(on(e,t)));let{space:r,index:i}=L.resolveCoord(t,e.space),o=Qs(e,r);o[i]=n,Lf(e,r,o)}return e}Ar.returns="color";var Uf=new L({id:"xyz-d50",name:"XYZ D50",white:"D50",base:mt,fromBase:e=>ma(mt.white,"D50",e),toBase:e=>ma("D50",mt.white,e)});const BD=216/24389,lh=24/116,ku=24389/27;let _l=Ot.D50;var sn=new L({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:_l,base:Uf,fromBase(e){let n=e.map((r,i)=>r/_l[i]).map(r=>r>BD?Math.cbrt(r):(ku*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>lh?Math.pow(t[0],3):(116*t[0]-16)/ku,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ku,t[2]>lh?Math.pow(t[2],3):(116*t[2]-16)/ku].map((r,i)=>r*_l[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function or(e){return(e%360+360)%360}function RD(e,t){if(e==="raw")return t;let[n,r]=t.map(or),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var Ps=new L({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:sn,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),or(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ch=25**7,ha=Math.PI,fh=180/ha,Gi=ha/180;function dh(e){const t=e*e;return t*t*t*e}function cy(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=H([e,t]);let[o,s,u]=sn.from(e),a=Ps.from(sn,[o,s,u])[1],[l,c,f]=sn.from(t),m=Ps.from(sn,[l,c,f])[1];a<0&&(a=0),m<0&&(m=0);let g=(a+m)/2,C=dh(g),D=.5*(1-Math.sqrt(C/(C+ch))),k=(1+D)*s,A=(1+D)*c,I=Math.sqrt(k**2+u**2),U=Math.sqrt(A**2+f**2),W=k===0&&u===0?0:Math.atan2(u,k),G=A===0&&f===0?0:Math.atan2(f,A);W<0&&(W+=2*ha),G<0&&(G+=2*ha),W*=fh,G*=fh;let Oe=l-o,vt=U-I,Qe=G-W,St=W+G,bn=Math.abs(Qe),Tn;I*U===0?Tn=0:bn<=180?Tn=Qe:Qe>180?Tn=Qe-360:Qe<-180?Tn=Qe+360:fn.warn("the unthinkable has happened");let Vi=2*Math.sqrt(U*I)*Math.sin(Tn*Gi/2),gl=(o+l)/2,Jo=(I+U)/2,pu=dh(Jo),Mn;I*U===0?Mn=St:bn<=180?Mn=St/2:St<360?Mn=(St+360)/2:Mn=(St-360)/2;let gu=(gl-50)**2,yl=1+.015*gu/Math.sqrt(20+gu),yu=1+.045*Jo,$n=1;$n-=.17*Math.cos((Mn-30)*Gi),$n+=.24*Math.cos(2*Mn*Gi),$n+=.32*Math.cos((3*Mn+6)*Gi),$n-=.2*Math.cos((4*Mn-63)*Gi);let We=1+.015*Jo*$n,en=30*Math.exp(-1*((Mn-275)/25)**2),Wi=2*Math.sqrt(pu/(pu+ch)),Mr=-1*Math.sin(2*en*Gi)*Wi,ai=(Oe/(n*yl))**2;return ai+=(vt/(r*yu))**2,ai+=(Vi/(i*We))**2,ai+=Mr*(vt/(r*yu))*(Vi/(i*We)),Math.sqrt(ai)}const LD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],UD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],jD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],_D=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var bo=new L({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:mt,fromBase(e){let n=Ce(LD,e).map(r=>Math.cbrt(r));return Ce(jD,n)},toBase(e){let n=Ce(_D,e).map(r=>r**3);return Ce(UD,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Nc(e,t){[e,t]=H([e,t]);let[n,r,i]=bo.from(e),[o,s,u]=bo.from(t),a=n-o,l=r-s,c=i-u;return Math.sqrt(a**2+l**2+c**2)}const VD=75e-6;function Ci(e,t,{epsilon:n=VD}={}){e=H(e),t||(t=e.space),t=L.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function $o(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function fy(e,t,n="lab"){n=L.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((o,s,u)=>{let a=i[u];return isNaN(s)||isNaN(a)?o:o+(a-s)**2},0))}function WD(e,t){return fy(e,t,"lab")}const qD=Math.PI,mh=qD/180;function zD(e,t,{l:n=2,c:r=1}={}){[e,t]=H([e,t]);let[i,o,s]=sn.from(e),[,u,a]=Ps.from(sn,[i,o,s]),[l,c,f]=sn.from(t),m=Ps.from(sn,[l,c,f])[1];u<0&&(u=0),m<0&&(m=0);let g=i-l,C=u-m,D=o-c,k=s-f,A=D**2+k**2-C**2,I=.511;i>=16&&(I=.040975*i/(1+.01765*i));let U=.0638*u/(1+.0131*u)+.638,W;Number.isNaN(a)&&(a=0),a>=164&&a<=345?W=.56+Math.abs(.2*Math.cos((a+168)*mh)):W=.36+Math.abs(.4*Math.cos((a+35)*mh));let G=Math.pow(u,4),Oe=Math.sqrt(G/(G+1900)),vt=U*(Oe*W+1-Oe),Qe=(g/(n*I))**2;return Qe+=(C/(r*U))**2,Qe+=A/vt**2,Math.sqrt(Qe)}const hh=203;var jf=new L({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:mt,fromBase(e){return e.map(t=>Math.max(t*hh,0))},toBase(e){return e.map(t=>Math.max(t/hh,0))}});const Su=1.15,Iu=.66,ph=2610/2**14,KD=2**14/2610,gh=3424/2**12,yh=2413/2**7,wh=2392/2**7,ZD=1.7*2523/2**5,bh=2**5/(1.7*2523),Nu=-.56,Vl=16295499532821565e-27,GD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],YD=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],JD=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],HD=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var dy=new L({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:jf,fromBase(e){let[t,n,r]=e,i=Su*t-(Su-1)*r,o=Iu*n-(Iu-1)*t,u=Ce(GD,[i,o,r]).map(function(m){let g=gh+yh*(m/1e4)**ph,C=1+wh*(m/1e4)**ph;return(g/C)**ZD}),[a,l,c]=Ce(JD,u);return[(1+Nu)*a/(1+Nu*a)-Vl,l,c]},toBase(e){let[t,n,r]=e,i=(t+Vl)/(1+Nu-Nu*(t+Vl)),s=Ce(HD,[i,n,r]).map(function(m){let g=gh-m**bh,C=wh*m**bh-yh;return 1e4*(g/C)**KD}),[u,a,l]=Ce(YD,s),c=(u+(Su-1)*l)/Su,f=(a+(Iu-1)*c)/Iu;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Tc=new L({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:dy,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),or(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function XD(e,t){[e,t]=H([e,t]);let[n,r,i]=Tc.from(e),[o,s,u]=Tc.from(t),a=n-o,l=r-s;Number.isNaN(i)&&Number.isNaN(u)?(i=0,u=0):Number.isNaN(i)?i=u:Number.isNaN(u)&&(u=i);let c=i-u,f=2*Math.sqrt(r*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(a**2+l**2+f**2)}const my=3424/4096,hy=2413/128,py=2392/128,$h=2610/16384,QD=2523/32,e5=16384/2610,vh=32/2523,t5=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],n5=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],r5=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],i5=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Mc=new L({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:jf,fromBase(e){let t=Ce(t5,e);return o5(t)},toBase(e){let t=s5(e);return Ce(i5,t)}});function o5(e){let t=e.map(function(n){let r=my+hy*(n/1e4)**$h,i=1+py*(n/1e4)**$h;return(r/i)**QD});return Ce(n5,t)}function s5(e){return Ce(r5,e).map(function(r){let i=Math.max(r**vh-my,0),o=hy-py*r**vh;return 1e4*(i/o)**e5})}function u5(e,t){[e,t]=H([e,t]);let[n,r,i]=Mc.from(e),[o,s,u]=Mc.from(t);return 720*Math.sqrt((n-o)**2+.25*(r-s)**2+(i-u)**2)}const a5=Ot.D65,gy=.42,Dh=1/gy,Wl=2*Math.PI,yy=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],l5=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],c5=[[460,451,288],[460,-891,-261],[460,-220,-6300]],f5={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},gi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},d5=180/Math.PI,Eh=Math.PI/180;function wy(e,t){return e.map(r=>{const i=Qn(t*Math.abs(r)*.01,gy);return 400*La(i,r)/(i+27.13)})}function m5(e,t){const n=100/t*27.13**Dh;return e.map(r=>{const i=Math.abs(r);return La(n*Qn(i/(400-i),Dh),r)})}function h5(e){let t=or(e);t<=gi.h[0]&&(t+=360);const n=ay(gi.h,t)-1,[r,i]=gi.h.slice(n,n+2),[o,s]=gi.e.slice(n,n+2),u=gi.H[n],a=(t-r)/o;return u+100*a/(a+(i-t)/s)}function p5(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=gi.h.slice(n,n+2),[o,s]=gi.e.slice(n,n+2);return or((t*(s*r-o*i)-100*r*s)/(t*(s-o)-100*s))}function by(e,t,n,r,i){const o={};o.discounting=i,o.refWhite=e,o.surround=r;const s=e.map(D=>D*100);o.la=t,o.yb=n;const u=s[1],a=Ce(yy,s);r=f5[o.surround];const l=r[0];o.c=r[1],o.nc=r[2];const f=(1/(5*o.la+1))**4;o.fl=f*o.la+.1*(1-f)*(1-f)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/u,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const m=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=a.map(D=>Ms(1,u/D,m)),o.dRgbInv=o.dRgb.map(D=>1/D);const g=a.map((D,k)=>D*o.dRgb[k]),C=wy(g,o.fl);return o.aW=o.nbb*(2*C[0]+C[1]+.05*C[2]),o}const Ch=by(a5,64/Math.PI*.2,20,"average",!1);function Pc(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=or(e.h)*Eh:n=p5(e.H)*Eh;const r=Math.cos(n),i=Math.sin(n);let o=0;e.J!==void 0?o=Qn(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const u=Qn(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),a=.25*(Math.cos(n+2)+3.8),l=t.aW*Qn(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*a,f=l/t.nbb,m=23*(f+.305)*Rf(u,23*c+u*(11*r+108*i)),g=m*r,C=m*i,D=m5(Ce(c5,[f,g,C]).map(k=>k*1/1403),t.fl);return Ce(l5,D.map((k,A)=>k*t.dRgbInv[A])).map(k=>k/100)}function $y(e,t){const n=e.map(U=>U*100),r=wy(Ce(yy,n).map((U,W)=>U*t.dRgb[W]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,o=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(o,i)%Wl+Wl)%Wl,u=.25*(Math.cos(s+2)+3.8),a=5e4/13*t.nc*t.ncb*Rf(u*Math.sqrt(i**2+o**2),r[0]+r[1]+1.05*r[2]+.305),l=Qn(a,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*r[0]+r[1]+.05*r[2]),f=Qn(c/t.aW,.5*t.c*t.z),m=100*Qn(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,C=l*f,D=C*t.flRoot,k=or(s*d5),A=h5(k),I=50*Qn(t.c*l/(t.aW+4),1/2);return{J:m,C,h:k,s:I,Q:g,M:D,H:A}}var g5=new L({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:mt,fromBase(e){const t=$y(e,Ch);return[t.J,t.M,t.h]},toBase(e){return Pc({J:e[0],M:e[1],h:e[2]},Ch)}});const y5=Ot.D65,w5=216/24389,vy=24389/27;function b5(e){return 116*(e>w5?Math.cbrt(e):(vy*e+16)/116)-16}function Oc(e){return e>8?Math.pow((e+16)/116,3):e/vy}function $5(e,t){let[n,r,i]=e,o=[],s=0;if(i===0)return[0,0,0];let u=Oc(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const a=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){o=Pc({J:s,C:r,h:n},t);const m=Math.abs(o[1]-u);if(m<f){if(m<=a)return o;f=m}s=s-(o[1]-u)*s/(2*o[1]),c+=1}return Pc({J:s,C:r,h:n},t)}function v5(e,t){const n=b5(e[1]);if(n===0)return[0,0,0];const r=$y(e,_f);return[or(r.h),r.C,n]}const _f=by(y5,200/Math.PI*Oc(50),Oc(50)*100,"average",!1);var Os=new L({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:mt,fromBase(e){return v5(e)},toBase(e){return $5(e,_f)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const D5=Math.PI/180,xh=[1,.007,.0228];function Ah(e){e[1]<0&&(e=Os.fromBase(Os.toBase(e)));const t=Math.log(Math.max(1+xh[2]*e[1]*_f.flRoot,1))/xh[2],n=e[0]*D5,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function E5(e,t){[e,t]=H([e,t]);let[n,r,i]=Ah(Os.from(e)),[o,s,u]=Ah(Os.from(t));return Math.sqrt((n-o)**2+(r-s)**2+(i-u)**2)}var vo={deltaE76:WD,deltaECMC:zD,deltaE2000:cy,deltaEJz:XD,deltaEITP:u5,deltaEOK:Nc,deltaEHCT:E5};function C5(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Fh={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Jr(e,{method:t=fn.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=H(e),Xs(arguments[1])?n=arguments[1]:n||(n=e.space),n=L.get(n),Ci(e,n,{epsilon:0}))return e;let s;if(t==="css")s=x5(e,{space:n});else{if(t!=="clip"&&!Ci(e,n)){Object.prototype.hasOwnProperty.call(Fh,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:o}=Fh[t]);let u=cy;if(r!==""){for(let l in vo)if("deltae"+r.toLowerCase()===l.toLowerCase()){u=vo[l];break}}let a=Jr(Ee(e,n),{method:"clip",space:n});if(u(e,a)>i){if(Object.keys(o).length===3){let I=L.resolveCoord(o.channel),U=on(Ee(e,I.space),I.id);if(Gr(U)&&(U=0),U>=o.max)return Ee({space:"xyz-d65",coords:Ot.D65},e.space);if(U<=o.min)return Ee({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=L.resolveCoord(t),c=l.space,f=l.id,m=Ee(e,c);m.coords.forEach((I,U)=>{Gr(I)&&(m.coords[U]=0)});let C=(l.range||l.refRange)[0],D=C5(i),k=C,A=on(m,f);for(;A-k>D;){let I=$o(m);I=Jr(I,{space:n,method:"clip"}),u(m,I)-i<D?k=on(m,f):A=on(m,f),Ar(m,f,(k+A)/2)}s=Ee(m,n)}else s=a}else s=Ee(e,n);if(t==="clip"||!Ci(s,n,{epsilon:0})){let u=Object.values(n.coords).map(a=>a.range||[]);s.coords=s.coords.map((a,l)=>{let[c,f]=u[l];return c!==void 0&&(a=Math.max(c,a)),f!==void 0&&(a=Math.min(a,f)),a})}}return n!==e.space&&(s=Ee(s,e.space)),e.coords=s.coords,e}Jr.returns="color";const kh={WHITE:{space:bo,coords:[1,0,0]},BLACK:{space:bo,coords:[0,0,0]}};function x5(e,{space:t}={}){e=H(e),t||(t=e.space),t=L.get(t);const i=L.get("oklch");if(t.isUnbounded)return Ee(e,t);const o=Ee(e,i);let s=o.coords[0];if(s>=1){const C=Ee(kh.WHITE,t);return C.alpha=e.alpha,Ee(C,t)}if(s<=0){const C=Ee(kh.BLACK,t);return C.alpha=e.alpha,Ee(C,t)}if(Ci(o,t,{epsilon:0}))return Ee(o,t);function u(C){const D=Ee(C,t),k=Object.values(t.coords);return D.coords=D.coords.map((A,I)=>{if("range"in k[I]){const[U,W]=k[I].range;return uy(U,A,W)}return A}),D}let a=0,l=o.coords[1],c=!0,f=$o(o),m=u(f),g=Nc(m,f);if(g<.02)return m;for(;l-a>1e-4;){const C=(a+l)/2;if(f.coords[1]=C,c&&Ci(f,t,{epsilon:0}))a=C;else if(m=u(f),g=Nc(m,f),g<.02){if(.02-g<1e-4)break;c=!1,a=C}else l=C}return m}function Ee(e,t,{inGamut:n}={}){e=H(e),t=L.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=Jr(i,n===!0?void 0:n)),i}Ee.returns="color";function bs(e,{precision:t=fn.precision,format:n="default",inGamut:r=!0,...i}={}){let o;e=H(e);let s=n;n=e.space.getFormat(n)??e.space.getFormat("default")??L.DEFAULT_FORMAT;let u=e.coords.slice();if(r||=n.toGamut,r&&!Ci(e)&&(u=Jr($o(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)o=n.serialize(u,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let a=n.name||"color";n.serializeCoords?u=n.serializeCoords(u,t):t!==null&&(u=u.map(m=>da(m,{precision:t})));let l=[...u];if(a==="color"){let m=n.id||n.ids?.[0]||e.space.id;l.unshift(m)}let c=e.alpha;t!==null&&(c=da(c,{precision:t}));let f=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${c}`;o=`${a}(${l.join(n.commas?", ":" ")}${f})`}return o}const A5=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],F5=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ua=new Xt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:A5,fromXYZ_M:F5});const Tu=1.09929682680944,Sh=.018053968510807;var Dy=new Xt({id:"rec2020",name:"REC.2020",base:Ua,toBase(e){return e.map(function(t){return t<Sh*4.5?t/4.5:Math.pow((t+Tu-1)/Tu,1/.45)})},fromBase(e){return e.map(function(t){return t>=Sh?Tu*Math.pow(t,.45)-(Tu-1):4.5*t})}});const k5=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],S5=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ey=new Xt({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:k5,fromXYZ_M:S5});const I5=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],it=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Cy=new Xt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:I5,fromXYZ_M:it}),Ih={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Nh=Array(3).fill("<percentage> | <number>[0, 255]"),Th=Array(3).fill("<number>[0, 255]");var Do=new Xt({id:"srgb",name:"sRGB",base:Cy,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Nh},rgb_number:{name:"rgb",commas:!0,coords:Th,noAlpha:!0},color:{},rgba:{coords:Nh,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Th},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let r=n&&e.every(o=>o%17===0);return"#"+e.map(o=>r?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Ih.black,t.alpha=0):t.coords=Ih[e],t.coords)return t}}}}),xy=new Xt({id:"p3",cssId:"display-p3",name:"P3",base:Ey,fromBase:Do.fromBase,toBase:Do.toBase});fn.display_space=Do;let N5;if(typeof CSS<"u"&&CSS.supports)for(let e of[sn,Dy,xy]){let t=e.getMinCoords(),r=bs({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){fn.display_space=e;break}}function T5(e,{space:t=fn.display_space,...n}={}){let r=bs(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!fn.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(Gr)||Gr(e.alpha))&&!(N5??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=$o(e),i.coords=i.coords.map(ze),i.alpha=ze(i.alpha),r=bs(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=Ee(i,t),r=new String(bs(i,n)),r.color=i}return r}function M5(e,t){return e=H(e),t=H(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function Hr(e){return on(e,[mt,"y"])}function Ay(e,t){Ar(e,[mt,"y"],t)}function P5(e){Object.defineProperty(e.prototype,"luminance",{get(){return Hr(this)},set(t){Ay(this,t)}})}var O5=Object.freeze({__proto__:null,getLuminance:Hr,register:P5,setLuminance:Ay});function B5(e,t){e=H(e),t=H(t);let n=Math.max(Hr(e),0),r=Math.max(Hr(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const R5=.56,L5=.57,U5=.62,j5=.65,Mh=.022,_5=1.414,V5=.1,W5=5e-4,q5=1.14,Ph=.027,z5=1.14;function Oh(e){return e>=Mh?e:e+(Mh-e)**_5}function Yi(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function K5(e,t){t=H(t),e=H(e);let n,r,i,o,s,u;t=Ee(t,"srgb"),[o,s,u]=t.coords;let a=Yi(o)*.2126729+Yi(s)*.7151522+Yi(u)*.072175;e=Ee(e,"srgb"),[o,s,u]=e.coords;let l=Yi(o)*.2126729+Yi(s)*.7151522+Yi(u)*.072175,c=Oh(a),f=Oh(l),m=f>c;return Math.abs(f-c)<W5?r=0:m?(n=f**R5-c**L5,r=n*q5):(n=f**j5-c**U5,r=n*z5),Math.abs(r)<V5?i=0:r>0?i=r-Ph:i=r+Ph,i*100}function Z5(e,t){e=H(e),t=H(t);let n=Math.max(Hr(e),0),r=Math.max(Hr(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const G5=5e4;function Y5(e,t){e=H(e),t=H(t);let n=Math.max(Hr(e),0),r=Math.max(Hr(t),0);return r>n&&([n,r]=[r,n]),r===0?G5:(n-r)/r}function J5(e,t){e=H(e),t=H(t);let n=on(e,[sn,"l"]),r=on(t,[sn,"l"]);return Math.abs(n-r)}const H5=216/24389,Bh=24/116,Mu=24389/27;let ql=Ot.D65;var Bc=new L({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ql,base:mt,fromBase(e){let n=e.map((r,i)=>r/ql[i]).map(r=>r>H5?Math.cbrt(r):(Mu*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Bh?Math.pow(t[0],3):(116*t[0]-16)/Mu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Mu,t[2]>Bh?Math.pow(t[2],3):(116*t[2]-16)/Mu].map((r,i)=>r*ql[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const zl=Math.pow(5,.5)*.5+.5;function X5(e,t){e=H(e),t=H(t);let n=on(e,[Bc,"l"]),r=on(t,[Bc,"l"]),i=Math.abs(Math.pow(n,zl)-Math.pow(r,zl)),o=Math.pow(i,1/zl)*Math.SQRT2-40;return o<7.5?0:o}var Yu=Object.freeze({__proto__:null,contrastAPCA:K5,contrastDeltaPhi:X5,contrastLstar:J5,contrastMichelson:Z5,contrastWCAG21:B5,contrastWeber:Y5});function Q5(e,t,n={}){Xs(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let o=Object.keys(Yu).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=H(e),t=H(t);for(let o in Yu)if("contrast"+r.toLowerCase()===o.toLowerCase())return Yu[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function ja(e){let[t,n,r]=Qs(e,mt),i=t+15*n+3*r;return[4*t/i,9*n/i]}function Fy(e){let[t,n,r]=Qs(e,mt),i=t+n+r;return[t/i,n/i]}function eE(e){Object.defineProperty(e.prototype,"uv",{get(){return ja(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Fy(this)}})}var tE=Object.freeze({__proto__:null,register:eE,uv:ja,xy:Fy});function ms(e,t,n={}){Xs(n)&&(n={method:n});let{method:r=fn.deltaE,...i}=n;for(let o in vo)if("deltae"+r.toLowerCase()===o.toLowerCase())return vo[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function nE(e,t=.25){let r=[L.get("oklch","lch"),"l"];return Ar(e,r,i=>i*(1+t))}function rE(e,t=.25){let r=[L.get("oklch","lch"),"l"];return Ar(e,r,i=>i*(1-t))}var iE=Object.freeze({__proto__:null,darken:rE,lighten:nE});function ky(e,t,n=.5,r={}){return[e,t]=[H(e),H(t)],zr(n)==="object"&&([n,r]=[.5,n]),eu(e,t,r)(n)}function Sy(e,t,n={}){let r;Vf(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:u=1e3,...a}=n;r||([e,t]=[H(e),H(t)],r=eu(e,t,a));let l=ms(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,f=[];if(u!==void 0&&(c=Math.min(c,u)),c===1)f=[{p:.5,color:r(.5)}];else{let m=1/(c-1);f=Array.from({length:c},(g,C)=>{let D=C*m;return{p:D,color:r(D)}})}if(i>0){let m=f.reduce((g,C,D)=>{if(D===0)return 0;let k=ms(C.color,f[D-1].color,o);return Math.max(g,k)},0);for(;m>i;){m=0;for(let g=1;g<f.length&&f.length<u;g++){let C=f[g-1],D=f[g],k=(D.p+C.p)/2,A=r(k);m=Math.max(m,ms(A,C.color),ms(A,D.color)),f.splice(g,0,{p:k,color:r(k)}),g++}}}return f=f.map(m=>m.color),f}function eu(e,t,n={}){if(Vf(e)){let[a,l]=[e,t];return eu(...a.rangeArgs.colors,{...a.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:o,premultiplied:s}=n;e=H(e),t=H(t),e=$o(e),t=$o(t);let u={colors:[e,t],options:n};if(r?r=L.get(r):r=L.registry[fn.interpolationSpace]||e.space,i=i?L.get(i):r,e=Ee(e,r),t=Ee(t,r),e=Jr(e),t=Jr(t),r.coords.h&&r.coords.h.type==="angle"){let a=n.hue=n.hue||"shorter",l=[r,"h"],[c,f]=[on(e,l),on(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=RD(a,[c,f]),Ar(e,l,c),Ar(t,l,f)}return s&&(e.coords=e.coords.map(a=>a*e.alpha),t.coords=t.coords.map(a=>a*t.alpha)),Object.assign(a=>{a=o?o(a):a;let l=e.coords.map((m,g)=>{let C=t.coords[g];return Ms(m,C,a)}),c=Ms(e.alpha,t.alpha,a),f={space:r,coords:l,alpha:c};return s&&(f.coords=f.coords.map(m=>m/c)),i!==r&&(f=Ee(f,i)),f},{rangeArgs:u})}function Vf(e){return zr(e)==="function"&&!!e.rangeArgs}fn.interpolationSpace="lab";function oE(e){e.defineFunction("mix",ky,{returns:"color"}),e.defineFunction("range",eu,{returns:"function<color>"}),e.defineFunction("steps",Sy,{returns:"array<color>"})}var sE=Object.freeze({__proto__:null,isRange:Vf,mix:ky,range:eu,register:oE,steps:Sy}),Iy=new L({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Do,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,o]=e,[s,u,a]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(u=a===0||a===1?0:(t-a)/Math.min(a,1-a),t){case r:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-r)/l+2;break;case o:s=(r-i)/l+4}s=s*60}return u<0&&(s+=180,u=Math.abs(u)),s>=360&&(s-=360),[s,u*100,a*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(o){let s=(o+t/30)%12,u=n*Math.min(r,1-r);return r-u*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ny=new L({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Iy,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),uE=new L({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ny,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let u=n/i;return[t,0,u*100]}let o=1-r,s=o===0?0:1-n/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const aE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],lE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Ty=new Xt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:aE,fromXYZ_M:lE}),cE=new Xt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Ty,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const fE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],dE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var My=new Xt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Uf,toXYZ_M:fE,fromXYZ_M:dE});const mE=1/512,hE=16/512;var pE=new Xt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:My,toBase(e){return e.map(t=>t<hE?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=mE?t**(1/1.8):16*t)}}),gE=new L({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:bo,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),or(i)]},toBase(e){let[t,n,r]=e,i,o;return isNaN(r)?(i=0,o=0):(i=n*Math.cos(r*Math.PI/180),o=n*Math.sin(r*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Py=Ot.D65;const yE=216/24389,Rh=24389/27,[Lh,Uh]=ja({space:mt,coords:Py});var Oy=new L({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Py,base:mt,fromBase(e){let t=[ze(e[0]),ze(e[1]),ze(e[2])],n=t[1],[r,i]=ja({space:mt,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let o=n<=yE?Rh*n:116*Math.cbrt(n)-16;return[o,13*o*(r-Lh),13*o*(i-Uh)]},toBase(e){let[t,n,r]=e;if(t===0||Gr(t))return[0,0,0];n=ze(n),r=ze(r);let i=n/(13*t)+Lh,o=r/(13*t)+Uh,s=t<=8?t/Rh:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Wf=new L({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Oy,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),or(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const wE=216/24389,bE=24389/27,jh=it[0][0],_h=it[0][1],Kl=it[0][2],Vh=it[1][0],Wh=it[1][1],Zl=it[1][2],qh=it[2][0],zh=it[2][1],Gl=it[2][2];function Ji(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function pa(e){const t=Math.pow(e+16,3)/1560896,n=t>wE?t:e/bE,r=n*(284517*jh-94839*Kl),i=n*(838422*Kl+769860*_h+731718*jh),o=n*(632260*Kl-126452*_h),s=n*(284517*Vh-94839*Zl),u=n*(838422*Zl+769860*Wh+731718*Vh),a=n*(632260*Zl-126452*Wh),l=n*(284517*qh-94839*Gl),c=n*(838422*Gl+769860*zh+731718*qh),f=n*(632260*Gl-126452*zh);return{r0s:r/o,r0i:i*e/o,r1s:r/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/a,g0i:u*e/a,g1s:s/(a+126452),g1i:(u-769860)*e/(a+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function Kh(e,t){const n=t/360*Math.PI*2,r=Ji(e.r0s,e.r0i,n),i=Ji(e.r1s,e.r1i,n),o=Ji(e.g0s,e.g0i,n),s=Ji(e.g1s,e.g1i,n),u=Ji(e.b0s,e.b0i,n),a=Ji(e.b1s,e.b1i,n);return Math.min(r,i,o,s,u,a)}var $E=new L({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Wf,gamutSpace:Do,fromBase(e){let[t,n,r]=[ze(e[0]),ze(e[1]),ze(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=pa(t),s=Kh(o,r);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[ze(e[0]),ze(e[1]),ze(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=pa(r);i=Kh(o,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});it[0][0];it[0][1];it[0][2];it[1][0];it[1][1];it[1][2];it[2][0];it[2][1];it[2][2];function Hi(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Zh(e){let t=Hi(e.r0s,e.r0i),n=Hi(e.r1s,e.r1i),r=Hi(e.g0s,e.g0i),i=Hi(e.g1s,e.g1i),o=Hi(e.b0s,e.b0i),s=Hi(e.b1s,e.b1i);return Math.min(t,n,r,i,o,s)}var vE=new L({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Wf,gamutSpace:"self",fromBase(e){let[t,n,r]=[ze(e[0]),ze(e[1]),ze(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=pa(t),s=Zh(o);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[ze(e[0]),ze(e[1]),ze(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=pa(r);i=Zh(o)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Gh=203,Yh=2610/2**14,DE=2**14/2610,EE=2523/2**5,Jh=2**5/2523,Hh=3424/2**12,Xh=2413/2**7,Qh=2392/2**7;var CE=new Xt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ua,toBase(e){return e.map(function(t){return(Math.max(t**Jh-Hh,0)/(Xh-Qh*t**Jh))**DE*1e4/Gh})},fromBase(e){return e.map(function(t){let n=Math.max(t*Gh/1e4,0),r=Hh+Xh*n**Yh,i=1+Qh*n**Yh;return(r/i)**EE})}});const e0=.17883277,t0=.28466892,n0=.55991073,Yl=3.7743;var xE=new Xt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ua,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Yl:(Math.exp((t-n0)/e0)+t0)/12*Yl})},fromBase(e){return e.map(function(t){return t/=Yl,t<=1/12?Math.sqrt(3*t):e0*Math.log(12*t-t0)+n0})}});const By={};Yr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Ry(e.W1,e.W2,e.options.method))});Yr.add("chromatic-adaptation-end",e=>{e.M||(e.M=Ry(e.W1,e.W2,e.options.method))});function _a({id:e,toCone_M:t,fromCone_M:n}){By[e]=arguments[0]}function Ry(e,t,n="Bradford"){let r=By[n],[i,o,s]=Ce(r.toCone_M,e),[u,a,l]=Ce(r.toCone_M,t),c=[[u/i,0,0],[0,a/o,0],[0,0,l/s]],f=Ce(c,r.toCone_M);return Ce(r.fromCone_M,f)}_a({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});_a({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});_a({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});_a({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Ot,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ot.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const AE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],FE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ly=new Xt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ot.ACES,toXYZ_M:AE,fromXYZ_M:FE});const Pu=2**-16,Jl=-.35828683,Ou=(Math.log2(65504)+9.72)/17.52;var kE=new Xt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Jl,Ou],name:"Red"},g:{range:[Jl,Ou],name:"Green"},b:{range:[Jl,Ou],name:"Blue"}},referred:"scene",base:Ly,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Pu)*2:n<Ou?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Pu)+9.72)/17.52:t<Pu?(Math.log2(Pu+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),r0=Object.freeze({__proto__:null,A98RGB:cE,A98RGB_Linear:Ty,ACEScc:kE,ACEScg:Ly,CAM16_JMh:g5,HCT:Os,HPLuv:vE,HSL:Iy,HSLuv:$E,HSV:Ny,HWB:uE,ICTCP:Mc,JzCzHz:Tc,Jzazbz:dy,LCH:Ps,LCHuv:Wf,Lab:sn,Lab_D65:Bc,Luv:Oy,OKLCH:gE,OKLab:bo,P3:xy,P3_Linear:Ey,ProPhoto:pE,ProPhoto_Linear:My,REC_2020:Dy,REC_2020_Linear:Ua,REC_2100_HLG:xE,REC_2100_PQ:CE,XYZ_ABS_D65:jf,XYZ_D50:Uf,XYZ_D65:mt,sRGB:Do,sRGB_Linear:Cy});let ye=class Ut{constructor(...t){let n;t.length===1&&(n=H(t[0]));let r,i,o;n?(r=n.space||n.spaceId,i=n.coords,o=n.alpha):[r,i,o]=t,Object.defineProperty(this,"space",{value:L.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:u=>this.set(s,u)})}get spaceId(){return this.space.id}clone(){return new Ut(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=T5(this,...t);return n.color=new Ut(n.color),n}static get(t,...n){return t instanceof Ut?t:new Ut(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:o}=r,s=function(...u){let a=n(...u);if(o==="color")a=Ut.get(a);else if(o==="function<color>"){let l=a;a=function(...c){let f=l(...c);return Ut.get(f)},Object.assign(a,l)}else o==="array<color>"&&(a=a.map(l=>Ut.get(l)));return a};t in Ut||(Ut[t]=s),i&&(Ut.prototype[t]=function(...u){return s(this,...u)})}static defineFunctions(t){for(let n in t)Ut.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(Ut);else for(let n in t)Ut.defineFunction(n,t[n])}};ye.defineFunctions({get:on,getAll:Qs,set:Ar,setAll:Lf,to:Ee,equals:M5,inGamut:Ci,toGamut:Jr,distance:fy,toString:bs});Object.assign(ye,{util:ND,hooks:Yr,WHITES:Ot,Space:L,spaces:L.registry,parse:ly,defaults:fn});for(let e of Object.keys(r0))L.register(r0[e]);for(let e in L.registry)Rc(e,L.registry[e]);Yr.add("colorspace-init-end",e=>{Rc(e.id,e),e.aliases?.forEach(t=>{Rc(t,e)})});function Rc(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(ye.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,o)=>{try{return L.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:u}=L.resolveCoord([t,o]);if(u>=0)return i[u]}return Reflect.get(i,o,s)},set:(i,o,s,u)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:a}=L.resolveCoord([t,o]);if(a>=0)return i[a]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,u)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}ye.extend(vo);ye.extend({deltaE:ms});Object.assign(ye,{deltaEMethods:vo});ye.extend(iE);ye.extend({contrast:Q5});ye.extend(tE);ye.extend(O5);ye.extend(sE);ye.extend(Yu);const SE=Symbol("no update");class Hl extends Qr()("observable-value-update"){}class IE extends qg("observable-destroy"){}class NE{listenTarget=new xf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];if(n===SE)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)){const i=this.value;return this.value=n,this.listenTarget.dispatch(new Hl({detail:[n,i]})),!0}return!1}listen(t,n){const r=i=>n(...i.detail);return this.listenerMap.set(n,r),t&&n(this.value,void 0),this.listenTarget.listen(Hl,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(Hl,n)}destroy(){this.listenTarget.dispatch(new IE),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function TE(e,t){return ov(e,t,(n,r)=>S.isFunction(n)&&S.isFunction(r)?!0:S.strictEquals(n,r))}function ME(e){return Ye(e)&&!Qt(e)&&!nu(e)&&Symbol.asyncIterator in e}function Qt(e){return Array.isArray(e)}function Uy(e){return typeof e=="bigint"}function tu(e){return typeof e=="boolean"}function qf(e){return e instanceof globalThis.Date}function PE(e){return typeof e=="function"}function OE(e){return Ye(e)&&!Qt(e)&&!nu(e)&&Symbol.iterator in e}function BE(e){return e===null}function ir(e){return typeof e=="number"}function Ye(e){return typeof e=="object"&&e!==null}function jy(e){return e instanceof globalThis.RegExp}function Ve(e){return typeof e=="string"}function RE(e){return typeof e=="symbol"}function nu(e){return e instanceof globalThis.Uint8Array}function Ke(e){return e===void 0}function LE(e){return e.map(t=>ga(t))}function UE(e){return new Date(e.getTime())}function jE(e){return new Uint8Array(e)}function _E(e){return new RegExp(e.source,e.flags)}function VE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=ga(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=ga(e[n]);return t}function ga(e){return Qt(e)?LE(e):qf(e)?UE(e):nu(e)?jE(e):jy(e)?_E(e):Ye(e)?VE(e):e}function dn(e){return ga(e)}function zf(e,t){return dn(t===void 0?e:{...t,...e})}function _y(e){return sr(e)&&globalThis.Symbol.asyncIterator in e}function Vy(e){return sr(e)&&globalThis.Symbol.iterator in e}function Wy(e){return e instanceof globalThis.Promise}function Kf(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Zf(e){return e instanceof globalThis.Uint8Array}function qy(e,t){return t in e}function sr(e){return e!==null&&typeof e=="object"}function mn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function ei(e){return e===void 0}function Va(e){return e===null}function Wa(e){return typeof e=="boolean"}function Q(e){return typeof e=="number"}function zy(e){return globalThis.Number.isInteger(e)}function yr(e){return typeof e=="bigint"}function an(e){return typeof e=="string"}function Ky(e){return typeof e=="function"}function qa(e){return typeof e=="symbol"}function Zy(e){return yr(e)||Wa(e)||Va(e)||Q(e)||an(e)||qa(e)||ei(e)}var je;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,u){return e.ExactOptionalPropertyTypes?u in s:s[u]!==void 0}e.IsExactOptionalProperty=t;function n(s){const u=sr(s);return e.AllowArrayObject?u:u&&!mn(s)}e.IsObjectLike=n;function r(s){return n(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=r;function i(s){return e.AllowNaN?Q(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const u=ei(s);return e.AllowNullVoid?u||s===null:u}e.IsVoidLike=o})(je||(je={}));function WE(e){return globalThis.Object.freeze(e).map(t=>ya(t))}function qE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=ya(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=ya(e[n]);return globalThis.Object.freeze(t)}function ya(e){return Qt(e)?WE(e):qf(e)?e:nu(e)?e:jy(e)?e:Ye(e)?qE(e):e}function M(e,t){const n=t!==void 0?{...t,...e}:e;switch(je.InstanceMode){case"freeze":return ya(n);case"clone":return dn(n);default:return n}}class yt extends Error{constructor(t){super(t)}}const qt=Symbol.for("TypeBox.Transform"),ru=Symbol.for("TypeBox.Readonly"),Sr=Symbol.for("TypeBox.Optional"),za=Symbol.for("TypeBox.Hint"),T=Symbol.for("TypeBox.Kind");function Gf(e){return Ye(e)&&e[ru]==="Readonly"}function ti(e){return Ye(e)&&e[Sr]==="Optional"}function Gy(e){return oe(e,"Any")}function Yy(e){return oe(e,"Argument")}function Lo(e){return oe(e,"Array")}function Ka(e){return oe(e,"AsyncIterator")}function Za(e){return oe(e,"BigInt")}function iu(e){return oe(e,"Boolean")}function Uo(e){return oe(e,"Computed")}function jo(e){return oe(e,"Constructor")}function zE(e){return oe(e,"Date")}function _o(e){return oe(e,"Function")}function Vo(e){return oe(e,"Integer")}function kn(e){return oe(e,"Intersect")}function Ga(e){return oe(e,"Iterator")}function oe(e,t){return Ye(e)&&T in e&&e[T]===t}function Jy(e){return tu(e)||ir(e)||Ve(e)}function Ti(e){return oe(e,"Literal")}function Mi(e){return oe(e,"MappedKey")}function wn(e){return oe(e,"MappedResult")}function ou(e){return oe(e,"Never")}function KE(e){return oe(e,"Not")}function Yf(e){return oe(e,"Null")}function Wo(e){return oe(e,"Number")}function Yn(e){return oe(e,"Object")}function Ya(e){return oe(e,"Promise")}function Ja(e){return oe(e,"Record")}function Jt(e){return oe(e,"Ref")}function Hy(e){return oe(e,"RegExp")}function su(e){return oe(e,"String")}function Jf(e){return oe(e,"Symbol")}function Pi(e){return oe(e,"TemplateLiteral")}function ZE(e){return oe(e,"This")}function be(e){return Ye(e)&&qt in e}function Oi(e){return oe(e,"Tuple")}function uu(e){return oe(e,"Undefined")}function ct(e){return oe(e,"Union")}function GE(e){return oe(e,"Uint8Array")}function YE(e){return oe(e,"Unknown")}function JE(e){return oe(e,"Unsafe")}function HE(e){return oe(e,"Void")}function XE(e){return Ye(e)&&T in e&&Ve(e[T])}function Bt(e){return Gy(e)||Yy(e)||Lo(e)||iu(e)||Za(e)||Ka(e)||Uo(e)||jo(e)||zE(e)||_o(e)||Vo(e)||kn(e)||Ga(e)||Ti(e)||Mi(e)||wn(e)||ou(e)||KE(e)||Yf(e)||Wo(e)||Yn(e)||Ya(e)||Ja(e)||Jt(e)||Hy(e)||su(e)||Jf(e)||Pi(e)||ZE(e)||Oi(e)||uu(e)||ct(e)||GE(e)||YE(e)||JE(e)||HE(e)||XE(e)}const QE=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Xy(e){try{return new RegExp(e),!0}catch{return!1}}function Hf(e){if(!Ve(e))return!1;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function Qy(e){return Xf(e)||ke(e)}function os(e){return Ke(e)||Uy(e)}function ge(e){return Ke(e)||ir(e)}function Xf(e){return Ke(e)||tu(e)}function pe(e){return Ke(e)||Ve(e)}function eC(e){return Ke(e)||Ve(e)&&Hf(e)&&Xy(e)}function tC(e){return Ke(e)||Ve(e)&&Hf(e)}function e1(e){return Ke(e)||ke(e)}function wa(e){return Ye(e)&&e[Sr]==="Optional"}function qn(e){return se(e,"Any")&&pe(e.$id)}function nC(e){return se(e,"Argument")&&ir(e.index)}function Bi(e){return se(e,"Array")&&e.type==="array"&&pe(e.$id)&&ke(e.items)&&ge(e.minItems)&&ge(e.maxItems)&&Xf(e.uniqueItems)&&e1(e.contains)&&ge(e.minContains)&&ge(e.maxContains)}function Qf(e){return se(e,"AsyncIterator")&&e.type==="AsyncIterator"&&pe(e.$id)&&ke(e.items)}function Ha(e){return se(e,"BigInt")&&e.type==="bigint"&&pe(e.$id)&&os(e.exclusiveMaximum)&&os(e.exclusiveMinimum)&&os(e.maximum)&&os(e.minimum)&&os(e.multipleOf)}function Ri(e){return se(e,"Boolean")&&e.type==="boolean"&&pe(e.$id)}function rC(e){return se(e,"Computed")&&Ve(e.target)&&Qt(e.parameters)&&e.parameters.every(t=>ke(t))}function Xa(e){return se(e,"Constructor")&&e.type==="Constructor"&&pe(e.$id)&&Qt(e.parameters)&&e.parameters.every(t=>ke(t))&&ke(e.returns)}function Qa(e){return se(e,"Date")&&e.type==="Date"&&pe(e.$id)&&ge(e.exclusiveMaximumTimestamp)&&ge(e.exclusiveMinimumTimestamp)&&ge(e.maximumTimestamp)&&ge(e.minimumTimestamp)&&ge(e.multipleOfTimestamp)}function el(e){return se(e,"Function")&&e.type==="Function"&&pe(e.$id)&&Qt(e.parameters)&&e.parameters.every(t=>ke(t))&&ke(e.returns)}function Ir(e){return se(e,"Integer")&&e.type==="integer"&&pe(e.$id)&&ge(e.exclusiveMaximum)&&ge(e.exclusiveMinimum)&&ge(e.maximum)&&ge(e.minimum)&&ge(e.multipleOf)}function t1(e){return Ye(e)&&Object.entries(e).every(([t,n])=>Hf(t)&&ke(n))}function Li(e){return se(e,"Intersect")&&!(Ve(e.type)&&e.type!=="object")&&Qt(e.allOf)&&e.allOf.every(t=>ke(t)&&!lC(t))&&pe(e.type)&&(Xf(e.unevaluatedProperties)||e1(e.unevaluatedProperties))&&pe(e.$id)}function ed(e){return se(e,"Iterator")&&e.type==="Iterator"&&pe(e.$id)&&ke(e.items)}function se(e,t){return Ye(e)&&T in e&&e[T]===t}function n1(e){return ni(e)&&Ve(e.const)}function r1(e){return ni(e)&&ir(e.const)}function i1(e){return ni(e)&&tu(e.const)}function ni(e){return se(e,"Literal")&&pe(e.$id)&&iC(e.const)}function iC(e){return tu(e)||ir(e)||Ve(e)}function oC(e){return se(e,"MappedKey")&&Qt(e.keys)&&e.keys.every(t=>ir(t)||Ve(t))}function sC(e){return se(e,"MappedResult")&&t1(e.properties)}function ri(e){return se(e,"Never")&&Ye(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Eo(e){return se(e,"Not")&&ke(e.not)}function td(e){return se(e,"Null")&&e.type==="null"&&pe(e.$id)}function zt(e){return se(e,"Number")&&e.type==="number"&&pe(e.$id)&&ge(e.exclusiveMaximum)&&ge(e.exclusiveMinimum)&&ge(e.maximum)&&ge(e.minimum)&&ge(e.multipleOf)}function Se(e){return se(e,"Object")&&e.type==="object"&&pe(e.$id)&&t1(e.properties)&&Qy(e.additionalProperties)&&ge(e.minProperties)&&ge(e.maxProperties)}function nd(e){return se(e,"Promise")&&e.type==="Promise"&&pe(e.$id)&&ke(e.item)}function gt(e){return se(e,"Record")&&e.type==="object"&&pe(e.$id)&&Qy(e.additionalProperties)&&Ye(e.patternProperties)&&(t=>{const n=Object.getOwnPropertyNames(t.patternProperties);return n.length===1&&Xy(n[0])&&Ye(t.patternProperties)&&ke(t.patternProperties[n[0]])})(e)}function uC(e){return se(e,"Ref")&&pe(e.$id)&&Ve(e.$ref)}function Bs(e){return se(e,"RegExp")&&pe(e.$id)&&Ve(e.source)&&Ve(e.flags)&&ge(e.maxLength)&&ge(e.minLength)}function zn(e){return se(e,"String")&&e.type==="string"&&pe(e.$id)&&ge(e.minLength)&&ge(e.maxLength)&&eC(e.pattern)&&tC(e.format)}function Rs(e){return se(e,"Symbol")&&e.type==="symbol"&&pe(e.$id)}function Ls(e){return se(e,"TemplateLiteral")&&e.type==="string"&&Ve(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function aC(e){return se(e,"This")&&pe(e.$id)&&Ve(e.$ref)}function lC(e){return Ye(e)&&qt in e}function tl(e){return se(e,"Tuple")&&e.type==="array"&&pe(e.$id)&&ir(e.minItems)&&ir(e.maxItems)&&e.minItems===e.maxItems&&(Ke(e.items)&&Ke(e.additionalItems)&&e.minItems===0||Qt(e.items)&&e.items.every(t=>ke(t)))}function Fi(e){return se(e,"Undefined")&&e.type==="undefined"&&pe(e.$id)}function Fr(e){return se(e,"Union")&&pe(e.$id)&&Ye(e)&&Qt(e.anyOf)&&e.anyOf.every(t=>ke(t))}function au(e){return se(e,"Uint8Array")&&e.type==="Uint8Array"&&pe(e.$id)&&ge(e.minByteLength)&&ge(e.maxByteLength)}function Kn(e){return se(e,"Unknown")&&pe(e.$id)}function cC(e){return se(e,"Unsafe")}function nl(e){return se(e,"Void")&&e.type==="void"&&pe(e.$id)}function fC(e){return Ye(e)&&T in e&&Ve(e[T])&&!QE.includes(e[T])}function ke(e){return Ye(e)&&(qn(e)||nC(e)||Bi(e)||Ri(e)||Ha(e)||Qf(e)||rC(e)||Xa(e)||Qa(e)||el(e)||Ir(e)||Li(e)||ed(e)||ni(e)||oC(e)||sC(e)||ri(e)||Eo(e)||td(e)||zt(e)||Se(e)||nd(e)||gt(e)||uC(e)||Bs(e)||zn(e)||Rs(e)||Ls(e)||aC(e)||tl(e)||Fi(e)||Fr(e)||au(e)||Kn(e)||cC(e)||nl(e)||fC(e))}const dC="(true|false)",Ju="(0|[1-9][0-9]*)",o1="(.*)",mC="(?!.*)",Co=`^${Ju}$`,xo=`^${o1}$`,hC=`^${mC}$`,s1=new Map;function rd(e){return s1.has(e)}function id(e){return s1.get(e)}const od=new Map;function ki(e){return od.has(e)}function u1(e,t){od.set(e,t)}function sd(e){return od.get(e)}function pC(e,t){return e.includes(t)}function gC(e){return[...new Set(e)]}function yC(e,t){return e.filter(n=>t.includes(n))}function wC(e,t){return e.reduce((n,r)=>yC(n,r),t)}function bC(e){return e.length===1?e[0]:e.length>1?wC(e.slice(1),e[0]):[]}function $C(e){const t=[];for(const n of e)t.push(...n);return t}function Us(e){return M({[T]:"Any"},e)}function ud(e,t){return M({[T]:"Array",type:"array",items:e},t)}function vC(e){return M({[T]:"Argument",index:e})}function ad(e,t){return M({[T]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function nt(e,t,n){return M({[T]:"Computed",target:e,parameters:t},n)}function DC(e,t){const{[t]:n,...r}=e;return r}function hn(e,t){return t.reduce((n,r)=>DC(n,r),e)}function Ie(e){return M({[T]:"Never",not:{}},e)}function wt(e){return M({[T]:"MappedResult",properties:e})}function ld(e,t,n){return M({[T]:"Constructor",type:"Constructor",parameters:e,returns:t},n)}function lu(e,t,n){return M({[T]:"Function",type:"Function",parameters:e,returns:t},n)}function Lc(e,t){return M({[T]:"Union",anyOf:e},t)}function EC(e){return e.some(t=>ti(t))}function i0(e){return e.map(t=>ti(t)?CC(t):t)}function CC(e){return hn(e,[Sr])}function xC(e,t){return EC(e)?si(Lc(i0(e),t)):Lc(i0(e),t)}function qo(e,t){return e.length===1?M(e[0],t):e.length===0?Ie(t):xC(e,t)}function bt(e,t){return e.length===0?Ie(t):e.length===1?M(e[0],t):Lc(e,t)}class o0 extends yt{}function AC(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function cd(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function vr(e,t){return cd(e,t,"(")}function js(e,t){return cd(e,t,")")}function a1(e,t){return cd(e,t,"|")}function FC(e){if(!(vr(e,0)&&js(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(vr(e,n)&&(t+=1),js(e,n)&&(t-=1),t===0&&n!==e.length-1)return!1;return!0}function kC(e){return e.slice(1,e.length-1)}function SC(e){let t=0;for(let n=0;n<e.length;n++)if(vr(e,n)&&(t+=1),js(e,n)&&(t-=1),a1(e,n)&&t===0)return!0;return!1}function IC(e){for(let t=0;t<e.length;t++)if(vr(e,t))return!0;return!1}function NC(e){let[t,n]=[0,0];const r=[];for(let o=0;o<e.length;o++)if(vr(e,o)&&(t+=1),js(e,o)&&(t-=1),a1(e,o)&&t===0){const s=e.slice(n,o);s.length>0&&r.push(Ao(s)),n=o+1}const i=e.slice(n);return i.length>0&&r.push(Ao(i)),r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"or",expr:r}}function TC(e){function t(i,o){if(!vr(i,o))throw new o0("TemplateLiteralParser: Index must point to open parens");let s=0;for(let u=o;u<i.length;u++)if(vr(i,u)&&(s+=1),js(i,u)&&(s-=1),s===0)return[o,u];throw new o0("TemplateLiteralParser: Unclosed group parens in expression")}function n(i,o){for(let s=o;s<i.length;s++)if(vr(i,s))return[o,s];return[o,i.length]}const r=[];for(let i=0;i<e.length;i++)if(vr(e,i)){const[o,s]=t(e,i),u=e.slice(o,s+1);r.push(Ao(u)),i=s}else{const[o,s]=n(e,i),u=e.slice(o,s);u.length>0&&r.push(Ao(u)),i=s-1}return r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"and",expr:r}}function Ao(e){return FC(e)?Ao(kC(e)):SC(e)?NC(e):IC(e)?TC(e):{type:"const",const:AC(e)}}function fd(e){return Ao(e.slice(1,e.length-1))}class MC extends yt{}function PC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function OC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function BC(e){return e.type==="const"&&e.const===".*"}function _s(e){return PC(e)||BC(e)?!1:OC(e)?!0:e.type==="and"?e.expr.every(t=>_s(t)):e.type==="or"?e.expr.every(t=>_s(t)):e.type==="const"?!0:(()=>{throw new MC("Unknown expression type")})()}function RC(e){const t=fd(e.pattern);return _s(t)}class LC extends yt{}function*l1(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const n of l1(e.slice(1)))yield`${t}${n}`}function*UC(e){return yield*l1(e.expr.map(t=>[...rl(t)]))}function*jC(e){for(const t of e.expr)yield*rl(t)}function*_C(e){return yield e.const}function*rl(e){return e.type==="and"?yield*UC(e):e.type==="or"?yield*jC(e):e.type==="const"?yield*_C(e):(()=>{throw new LC("Unknown expression")})()}function c1(e){const t=fd(e.pattern);return _s(t)?[...rl(t)]:[]}function Ge(e,t){return M({[T]:"Literal",const:e,type:typeof e},t)}function f1(e){return M({[T]:"Boolean",type:"boolean"},e)}function dd(e){return M({[T]:"BigInt",type:"bigint"},e)}function Ui(e){return M({[T]:"Number",type:"number"},e)}function Si(e){return M({[T]:"String",type:"string"},e)}function*VC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield f1():t==="number"?yield Ui():t==="bigint"?yield dd():t==="string"?yield Si():yield(()=>{const n=t.split("|").map(r=>Ge(r.trim()));return n.length===0?Ie():n.length===1?n[0]:qo(n)})()}function*WC(e){if(e[1]!=="{"){const t=Ge("$"),n=Uc(e.slice(1));return yield*[t,...n]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const n=VC(e.slice(2,t)),r=Uc(e.slice(t+1));return yield*[...n,...r]}yield Ge(e)}function*Uc(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const n=Ge(e.slice(0,t)),r=WC(e.slice(t));return yield*[n,...r]}yield Ge(e)}function qC(e){return[...Uc(e)]}class zC extends yt{}function KC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function d1(e,t){return Pi(e)?e.pattern.slice(1,e.pattern.length-1):ct(e)?`(${e.anyOf.map(n=>d1(n,t)).join("|")})`:Wo(e)?`${t}${Ju}`:Vo(e)?`${t}${Ju}`:Za(e)?`${t}${Ju}`:su(e)?`${t}${o1}`:Ti(e)?`${t}${KC(e.const.toString())}`:iu(e)?`${t}${dC}`:(()=>{throw new zC(`Unexpected Kind '${e[T]}'`)})()}function s0(e){return`^${e.map(t=>d1(t,"")).join("")}$`}function ba(e){const n=c1(e).map(r=>Ge(r));return qo(n)}function m1(e,t){const n=Ve(e)?s0(qC(e)):s0(e);return M({[T]:"TemplateLiteral",type:"string",pattern:n},t)}function ZC(e){return c1(e).map(n=>n.toString())}function GC(e){const t=[];for(const n of e)t.push(...ii(n));return t}function YC(e){return[e.toString()]}function ii(e){return[...new Set(Pi(e)?ZC(e):ct(e)?GC(e.anyOf):Ti(e)?YC(e.const):Wo(e)?["[number]"]:Vo(e)?["[number]"]:[])]}function JC(e,t,n){const r={};for(const i of Object.getOwnPropertyNames(t))r[i]=il(e,ii(t[i]),n);return r}function HC(e,t,n){return JC(e,t.properties,n)}function XC(e,t,n){const r=HC(e,t,n);return wt(r)}function h1(e,t){return e.map(n=>p1(n,t))}function QC(e){return e.filter(t=>!ou(t))}function ex(e,t){return w1(QC(h1(e,t)))}function tx(e){return e.some(t=>ou(t))?[]:e}function nx(e,t){return qo(tx(h1(e,t)))}function rx(e,t){return t in e?e[t]:t==="[number]"?qo(e):Ie()}function ix(e,t){return t==="[number]"?e:Ie()}function ox(e,t){return t in e?e[t]:Ie()}function p1(e,t){return kn(e)?ex(e.allOf,t):ct(e)?nx(e.anyOf,t):Oi(e)?rx(e.items??[],t):Lo(e)?ix(e.items,t):Yn(e)?ox(e.properties,t):Ie()}function md(e,t){return t.map(n=>p1(e,n))}function u0(e,t){return qo(md(e,t))}function il(e,t,n){if(Jt(e)||Jt(t)){const r="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Bt(e)||!Bt(t))throw new yt(r);return nt("Index",[e,t])}return wn(t)?XC(e,t,n):Mi(t)?lx(e,t,n):M(Bt(t)?u0(e,ii(t)):u0(e,t),n)}function sx(e,t,n){return{[t]:il(e,[t],dn(n))}}function ux(e,t,n){return t.reduce((r,i)=>({...r,...sx(e,i,n)}),{})}function ax(e,t,n){return ux(e,t.keys,n)}function lx(e,t,n){const r=ax(e,t,n);return wt(r)}function hd(e,t){return M({[T]:"Iterator",type:"Iterator",items:e},t)}function cx(e){const t=[];for(let n in e)ti(e[n])||t.push(n);return t}function fx(e,t){const n=cx(e),r=n.length>0?{[T]:"Object",type:"object",properties:e,required:n}:{[T]:"Object",type:"object",properties:e};return M(r,t)}var lt=fx;function g1(e,t){return M({[T]:"Promise",type:"Promise",item:e},t)}function dx(e){return M(hn(e,[ru]))}function mx(e){return M({...e,[ru]:"Readonly"})}function hx(e,t){return t===!1?dx(e):mx(e)}function oi(e,t){const n=t??!0;return wn(e)?yx(e,n):hx(e,n)}function px(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=oi(e[r],t);return n}function gx(e,t){return px(e.properties,t)}function yx(e,t){const n=gx(e,t);return wt(n)}function zo(e,t){return M(e.length>0?{[T]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[T]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function y1(e,t){return e in t?Dn(e,t[e]):wt(t)}function wx(e){return{[e]:Ge(e)}}function bx(e){const t={};for(const n of e)t[n]=Ge(n);return t}function $x(e,t){return pC(t,e)?wx(e):bx(t)}function vx(e,t){const n=$x(e,t);return y1(e,n)}function ss(e,t){return t.map(n=>Dn(e,n))}function Dx(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(t))n[r]=Dn(e,t[r]);return n}function Dn(e,t){const n={...t};return ti(t)?si(Dn(e,hn(t,[Sr]))):Gf(t)?oi(Dn(e,hn(t,[ru]))):wn(t)?y1(e,t.properties):Mi(t)?vx(e,t.keys):jo(t)?ld(ss(e,t.parameters),Dn(e,t.returns),n):_o(t)?lu(ss(e,t.parameters),Dn(e,t.returns),n):Ka(t)?ad(Dn(e,t.items),n):Ga(t)?hd(Dn(e,t.items),n):kn(t)?ui(ss(e,t.allOf),n):ct(t)?bt(ss(e,t.anyOf),n):Oi(t)?zo(ss(e,t.items??[]),n):Yn(t)?lt(Dx(e,t.properties),n):Lo(t)?ud(Dn(e,t.items),n):Ya(t)?g1(Dn(e,t.item),n):t}function Ex(e,t){const n={};for(const r of e)n[r]=Dn(r,t);return n}function Cx(e,t,n){const r=Bt(e)?ii(e):e,i=t({[T]:"MappedKey",keys:r}),o=Ex(r,i);return lt(o,n)}function xx(e){return M(hn(e,[Sr]))}function Ax(e){return M({...e,[Sr]:"Optional"})}function Fx(e,t){return t===!1?xx(e):Ax(e)}function si(e,t){const n=t??!0;return wn(e)?Ix(e,n):Fx(e,n)}function kx(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=si(e[r],t);return n}function Sx(e,t){return kx(e.properties,t)}function Ix(e,t){const n=Sx(e,t);return wt(n)}function jc(e,t={}){const n=e.every(i=>Yn(i)),r=Bt(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return M(t.unevaluatedProperties===!1||Bt(t.unevaluatedProperties)||n?{...r,[T]:"Intersect",type:"object",allOf:e}:{...r,[T]:"Intersect",allOf:e},t)}function Nx(e){return e.every(t=>ti(t))}function Tx(e){return hn(e,[Sr])}function a0(e){return e.map(t=>ti(t)?Tx(t):t)}function Mx(e,t){return Nx(e)?si(jc(a0(e),t)):jc(a0(e),t)}function w1(e,t={}){if(e.length===1)return M(e[0],t);if(e.length===0)return Ie(t);if(e.some(n=>be(n)))throw new Error("Cannot intersect transform types");return Mx(e,t)}function ui(e,t){if(e.length===1)return M(e[0],t);if(e.length===0)return Ie(t);if(e.some(n=>be(n)))throw new Error("Cannot intersect transform types");return jc(e,t)}function Ko(...e){const[t,n]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new yt("Ref: $ref must be a string");return M({[T]:"Ref",$ref:t},n)}function Px(e,t){return nt("Awaited",[nt(e,t)])}function Ox(e){return nt("Awaited",[Ko(e)])}function Bx(e){return ui(b1(e))}function Rx(e){return bt(b1(e))}function Lx(e){return ol(e)}function b1(e){return e.map(t=>ol(t))}function ol(e,t){return M(Uo(e)?Px(e.target,e.parameters):kn(e)?Bx(e.allOf):ct(e)?Rx(e.anyOf):Ya(e)?Lx(e.item):Jt(e)?Ox(e.$ref):e,t)}function $1(e){const t=[];for(const n of e)t.push(ji(n));return t}function Ux(e){const t=$1(e);return $C(t)}function jx(e){const t=$1(e);return bC(t)}function _x(e){return e.map((t,n)=>n.toString())}function Vx(e){return["[number]"]}function Wx(e){return globalThis.Object.getOwnPropertyNames(e)}function qx(e){return _c?globalThis.Object.getOwnPropertyNames(e).map(n=>n[0]==="^"&&n[n.length-1]==="$"?n.slice(1,n.length-1):n):[]}function ji(e){return kn(e)?Ux(e.allOf):ct(e)?jx(e.anyOf):Oi(e)?_x(e.items??[]):Lo(e)?Vx(e.items):Yn(e)?Wx(e.properties):Ja(e)?qx(e.patternProperties):[]}let _c=!1;function Fo(e){_c=!0;const t=ji(e);return _c=!1,`^(${t.map(r=>`(${r})`).join("|")})$`}function zx(e,t){return nt("KeyOf",[nt(e,t)])}function Kx(e){return nt("KeyOf",[Ko(e)])}function Zx(e,t){const n=ji(e),r=Gx(n),i=qo(r);return M(i,t)}function Gx(e){return e.map(t=>t==="[number]"?Ui():Ge(t))}function pd(e,t){return Uo(e)?zx(e.target,e.parameters):Jt(e)?Kx(e.$ref):wn(e)?Hx(e,t):Zx(e,t)}function Yx(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=pd(e[r],dn(t));return n}function Jx(e,t){return Yx(e.properties,t)}function Hx(e,t){const n=Jx(e,t);return wt(n)}function v1(e){const t=ji(e),n=md(e,t);return t.map((r,i)=>[t[i],n[i]])}function Xx(e){const t=[];for(const n of e)t.push(...ji(n));return gC(t)}function Qx(e){return e.filter(t=>!ou(t))}function eA(e,t){const n=[];for(const r of e)n.push(...md(r,[t]));return Qx(n)}function tA(e,t){const n={};for(const r of t)n[r]=w1(eA(e,r));return n}function nA(e,t){const n=Xx(e),r=tA(e,n);return lt(r,t)}function D1(e){return M({[T]:"Date",type:"Date"},e)}function E1(e){return M({[T]:"Null",type:"null"},e)}function C1(e){return M({[T]:"Symbol",type:"symbol"},e)}function x1(e){return M({[T]:"Undefined",type:"undefined"},e)}function A1(e){return M({[T]:"Uint8Array",type:"Uint8Array"},e)}function sl(e){return M({[T]:"Unknown"},e)}function rA(e){return e.map(t=>gd(t,!1))}function iA(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=oi(gd(e[n],!1));return t}function Bu(e,t){return t===!0?e:oi(e)}function gd(e,t){return ME(e)||OE(e)?Bu(Us(),t):Qt(e)?oi(zo(rA(e))):nu(e)?A1():qf(e)?D1():Ye(e)?Bu(lt(iA(e)),t):PE(e)?Bu(lu([],sl()),t):Ke(e)?x1():BE(e)?E1():RE(e)?C1():Uy(e)?dd():ir(e)||tu(e)||Ve(e)?Ge(e):lt({})}function oA(e,t){return M(gd(e,!0),t)}function sA(e,t){return jo(e)?zo(e.parameters,t):Ie(t)}function uA(e,t){if(Ke(e))throw new Error("Enum undefined or empty");const n=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(n)].map(o=>Ge(o));return bt(i,{...t,[za]:"Enum"})}class aA extends yt{}var E;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(E||(E={}));function Fn(e){return e===E.False?e:E.True}function Zo(e){throw new aA(e)}function He(e){return ri(e)||Li(e)||Fr(e)||Kn(e)||qn(e)}function Xe(e,t){return ri(t)?S1():Li(t)?ul(e,t):Fr(t)?wd(e,t):Kn(t)?M1():qn(t)?yd():Zo("StructuralRight")}function yd(e,t){return E.True}function lA(e,t){return Li(t)?ul(e,t):Fr(t)&&t.anyOf.some(n=>qn(n)||Kn(n))?E.True:Fr(t)?E.Union:Kn(t)||qn(t)?E.True:E.Union}function cA(e,t){return Kn(e)?E.False:qn(e)?E.Union:ri(e)?E.True:E.False}function fA(e,t){return Se(t)&&al(t)?E.True:He(t)?Xe(e,t):Bi(t)?Fn(he(e.items,t.items)):E.False}function dA(e,t){return He(t)?Xe(e,t):Qf(t)?Fn(he(e.items,t.items)):E.False}function mA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):Ha(t)?E.True:E.False}function F1(e,t){return i1(e)||Ri(e)?E.True:E.False}function hA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):Ri(t)?E.True:E.False}function pA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):Xa(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>Fn(he(t.parameters[r],n))===E.True)?Fn(he(e.returns,t.returns)):E.False:E.False}function gA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):Qa(t)?E.True:E.False}function yA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):el(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>Fn(he(t.parameters[r],n))===E.True)?Fn(he(e.returns,t.returns)):E.False:E.False}function k1(e,t){return ni(e)&&ir(e.const)||zt(e)||Ir(e)?E.True:E.False}function wA(e,t){return Ir(t)||zt(t)?E.True:He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):E.False}function ul(e,t){return t.allOf.every(n=>he(e,n)===E.True)?E.True:E.False}function bA(e,t){return e.allOf.some(n=>he(n,t)===E.True)?E.True:E.False}function $A(e,t){return He(t)?Xe(e,t):ed(t)?Fn(he(e.items,t.items)):E.False}function vA(e,t){return ni(t)&&t.const===e.const?E.True:He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):zn(t)?T1(e):zt(t)?I1(e):Ir(t)?k1(e):Ri(t)?F1(e):E.False}function S1(e,t){return E.False}function DA(e,t){return E.True}function l0(e){let[t,n]=[e,0];for(;Eo(t);)t=t.not,n+=1;return n%2===0?t:sl()}function EA(e,t){return Eo(e)?he(l0(e),t):Eo(t)?he(e,l0(t)):Zo("Invalid fallthrough for Not")}function CA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):td(t)?E.True:E.False}function I1(e,t){return r1(e)||zt(e)||Ir(e)?E.True:E.False}function xA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):Ir(t)||zt(t)?E.True:E.False}function Ht(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function c0(e){return al(e)}function f0(e){return Ht(e,0)||Ht(e,1)&&"description"in e.properties&&Fr(e.properties.description)&&e.properties.description.anyOf.length===2&&(zn(e.properties.description.anyOf[0])&&Fi(e.properties.description.anyOf[1])||zn(e.properties.description.anyOf[1])&&Fi(e.properties.description.anyOf[0]))}function Xl(e){return Ht(e,0)}function d0(e){return Ht(e,0)}function AA(e){return Ht(e,0)}function FA(e){return Ht(e,0)}function kA(e){return al(e)}function SA(e){const t=Ui();return Ht(e,0)||Ht(e,1)&&"length"in e.properties&&Fn(he(e.properties.length,t))===E.True}function IA(e){return Ht(e,0)}function al(e){const t=Ui();return Ht(e,0)||Ht(e,1)&&"length"in e.properties&&Fn(he(e.properties.length,t))===E.True}function NA(e){const t=lu([Us()],Us());return Ht(e,0)||Ht(e,1)&&"then"in e.properties&&Fn(he(e.properties.then,t))===E.True}function N1(e,t){return he(e,t)===E.False||wa(e)&&!wa(t)?E.False:E.True}function Ft(e,t){return Kn(e)?E.False:qn(e)?E.Union:ri(e)||n1(e)&&c0(t)||r1(e)&&Xl(t)||i1(e)&&d0(t)||Rs(e)&&f0(t)||Ha(e)&&AA(t)||zn(e)&&c0(t)||Rs(e)&&f0(t)||zt(e)&&Xl(t)||Ir(e)&&Xl(t)||Ri(e)&&d0(t)||au(e)&&kA(t)||Qa(e)&&FA(t)||Xa(e)&&IA(t)||el(e)&&SA(t)?E.True:gt(e)&&zn(Vc(e))?t[za]==="Record"?E.True:E.False:gt(e)&&zt(Vc(e))?Ht(t,0)?E.True:E.False:E.False}function TA(e,t){return He(t)?Xe(e,t):gt(t)?Sn(e,t):Se(t)?(()=>{for(const n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!wa(t.properties[n]))return E.False;if(wa(t.properties[n]))return E.True;if(N1(e.properties[n],t.properties[n])===E.False)return E.False}return E.True})():E.False}function MA(e,t){return He(t)?Xe(e,t):Se(t)&&NA(t)?E.True:nd(t)?Fn(he(e.item,t.item)):E.False}function Vc(e){return Co in e.patternProperties?Ui():xo in e.patternProperties?Si():Zo("Unknown record key pattern")}function Wc(e){return Co in e.patternProperties?e.patternProperties[Co]:xo in e.patternProperties?e.patternProperties[xo]:Zo("Unable to get record value schema")}function Sn(e,t){const[n,r]=[Vc(t),Wc(t)];return n1(e)&&zt(n)&&Fn(he(e,r))===E.True?E.True:au(e)&&zt(n)||zn(e)&&zt(n)||Bi(e)&&zt(n)?he(e,r):Se(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(N1(r,e.properties[i])===E.False)return E.False;return E.True})():E.False}function PA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?he(Wc(e),Wc(t)):E.False}function OA(e,t){const n=Bs(e)?Si():e,r=Bs(t)?Si():t;return he(n,r)}function T1(e,t){return ni(e)&&Ve(e.const)||zn(e)?E.True:E.False}function BA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):zn(t)?E.True:E.False}function RA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):Rs(t)?E.True:E.False}function LA(e,t){return Ls(e)?he(ba(e),t):Ls(t)?he(e,ba(t)):Zo("Invalid fallthrough for TemplateLiteral")}function UA(e,t){return Bi(t)&&e.items!==void 0&&e.items.every(n=>he(n,t.items)===E.True)}function jA(e,t){return ri(e)?E.True:Kn(e)?E.False:qn(e)?E.Union:E.False}function _A(e,t){return He(t)?Xe(e,t):Se(t)&&al(t)||Bi(t)&&UA(e,t)?E.True:tl(t)?Ke(e.items)&&!Ke(t.items)||!Ke(e.items)&&Ke(t.items)?E.False:Ke(e.items)&&!Ke(t.items)||e.items.every((n,r)=>he(n,t.items[r])===E.True)?E.True:E.False:E.False}function VA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):au(t)?E.True:E.False}function WA(e,t){return He(t)?Xe(e,t):Se(t)?Ft(e,t):gt(t)?Sn(e,t):nl(t)?KA(e):Fi(t)?E.True:E.False}function wd(e,t){return t.anyOf.some(n=>he(e,n)===E.True)?E.True:E.False}function qA(e,t){return e.anyOf.every(n=>he(n,t)===E.True)?E.True:E.False}function M1(e,t){return E.True}function zA(e,t){return ri(t)?S1():Li(t)?ul(e,t):Fr(t)?wd(e,t):qn(t)?yd():zn(t)?T1(e):zt(t)?I1(e):Ir(t)?k1(e):Ri(t)?F1(e):Bi(t)?cA(e):tl(t)?jA(e):Se(t)?Ft(e,t):Kn(t)?E.True:E.False}function KA(e,t){return Fi(e)||Fi(e)?E.True:E.False}function ZA(e,t){return Li(t)?ul(e,t):Fr(t)?wd(e,t):Kn(t)?M1():qn(t)?yd():Se(t)?Ft(e,t):nl(t)?E.True:E.False}function he(e,t){return Ls(e)||Ls(t)?LA(e,t):Bs(e)||Bs(t)?OA(e,t):Eo(e)||Eo(t)?EA(e,t):qn(e)?lA(e,t):Bi(e)?fA(e,t):Ha(e)?mA(e,t):Ri(e)?hA(e,t):Qf(e)?dA(e,t):Xa(e)?pA(e,t):Qa(e)?gA(e,t):el(e)?yA(e,t):Ir(e)?wA(e,t):Li(e)?bA(e,t):ed(e)?$A(e,t):ni(e)?vA(e,t):ri(e)?DA():td(e)?CA(e,t):zt(e)?xA(e,t):Se(e)?TA(e,t):gt(e)?PA(e,t):zn(e)?BA(e,t):Rs(e)?RA(e,t):tl(e)?_A(e,t):nd(e)?MA(e,t):au(e)?VA(e,t):Fi(e)?WA(e,t):Fr(e)?qA(e,t):Kn(e)?zA(e,t):nl(e)?ZA(e,t):Zo(`Unknown left type operand '${e[T]}'`)}function cu(e,t){return he(e,t)}function GA(e,t,n,r,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=bd(e[s],t,n,r,dn(i));return o}function YA(e,t,n,r,i){return GA(e.properties,t,n,r,i)}function JA(e,t,n,r,i){const o=YA(e,t,n,r,i);return wt(o)}function HA(e,t,n,r){const i=cu(e,t);return i===E.Union?bt([n,r]):i===E.True?n:r}function bd(e,t,n,r,i){return wn(e)?JA(e,t,n,r,i):Mi(e)?M(tF(e,t,n,r,i)):M(HA(e,t,n,r),i)}function XA(e,t,n,r,i){return{[e]:bd(Ge(e),t,n,r,dn(i))}}function QA(e,t,n,r,i){return e.reduce((o,s)=>({...o,...XA(s,t,n,r,i)}),{})}function eF(e,t,n,r,i){return QA(e.keys,t,n,r,i)}function tF(e,t,n,r,i){const o=eF(e,t,n,r,i);return wt(o)}function nF(e){return e.allOf.every(t=>Go(t))}function rF(e){return e.anyOf.some(t=>Go(t))}function iF(e){return!Go(e.not)}function Go(e){return e[T]==="Intersect"?nF(e):e[T]==="Union"?rF(e):e[T]==="Not"?iF(e):e[T]==="Undefined"}function oF(e,t){return $d(ba(e),t)}function sF(e,t){const n=e.filter(r=>cu(r,t)===E.False);return n.length===1?n[0]:bt(n)}function $d(e,t,n={}){return Pi(e)?M(oF(e,t),n):wn(e)?M(lF(e,t),n):M(ct(e)?sF(e.anyOf,t):cu(e,t)!==E.False?Ie():e,n)}function uF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=$d(e[r],t);return n}function aF(e,t){return uF(e.properties,t)}function lF(e,t){const n=aF(e,t);return wt(n)}function cF(e,t){return vd(ba(e),t)}function fF(e,t){const n=e.filter(r=>cu(r,t)!==E.False);return n.length===1?n[0]:bt(n)}function vd(e,t,n){return Pi(e)?M(cF(e,t),n):wn(e)?M(hF(e,t),n):M(ct(e)?fF(e.anyOf,t):cu(e,t)!==E.False?e:Ie(),n)}function dF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=vd(e[r],t);return n}function mF(e,t){return dF(e.properties,t)}function hF(e,t){const n=mF(e,t);return wt(n)}function pF(e,t){return jo(e)?M(e.returns,t):Ie(t)}function P1(e){return oi(si(e))}function _i(e,t,n){return M({[T]:"Record",type:"object",patternProperties:{[e]:t}},n)}function Dd(e,t,n){const r={};for(const i of e)r[i]=t;return lt(r,{...n,[za]:"Record"})}function gF(e,t,n){return RC(e)?Dd(ii(e),t,n):_i(e.pattern,t,n)}function yF(e,t,n){return Dd(ii(bt(e)),t,n)}function wF(e,t,n){return Dd([e.toString()],t,n)}function bF(e,t,n){return _i(e.source,t,n)}function $F(e,t,n){const r=Ke(e.pattern)?xo:e.pattern;return _i(r,t,n)}function vF(e,t,n){return _i(xo,t,n)}function DF(e,t,n){return _i(hC,t,n)}function EF(e,t,n){return lt({true:t,false:t},n)}function CF(e,t,n){return _i(Co,t,n)}function xF(e,t,n){return _i(Co,t,n)}function O1(e,t,n={}){return ct(e)?yF(e.anyOf,t,n):Pi(e)?gF(e,t,n):Ti(e)?wF(e.const,t,n):iu(e)?EF(e,t,n):Vo(e)?CF(e,t,n):Wo(e)?xF(e,t,n):Hy(e)?bF(e,t,n):su(e)?$F(e,t,n):Gy(e)?vF(e,t,n):ou(e)?DF(e,t,n):Ie(n)}function Ed(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function AF(e){const t=Ed(e);return t===xo?Si():t===Co?Ui():Si({pattern:t})}function B1(e){return e.patternProperties[Ed(e)]}function FF(e,t){return t.parameters=fu(e,t.parameters),t.returns=Zn(e,t.returns),t}function kF(e,t){return t.parameters=fu(e,t.parameters),t.returns=Zn(e,t.returns),t}function SF(e,t){return t.allOf=fu(e,t.allOf),t}function IF(e,t){return t.anyOf=fu(e,t.anyOf),t}function NF(e,t){return Ke(t.items)||(t.items=fu(e,t.items)),t}function TF(e,t){return t.items=Zn(e,t.items),t}function MF(e,t){return t.items=Zn(e,t.items),t}function PF(e,t){return t.items=Zn(e,t.items),t}function OF(e,t){return t.item=Zn(e,t.item),t}function BF(e,t){const n=jF(e,t.properties);return{...t,...lt(n)}}function RF(e,t){const n=Zn(e,AF(t)),r=Zn(e,B1(t)),i=O1(n,r);return{...t,...i}}function LF(e,t){return t.index in e?e[t.index]:sl()}function UF(e,t){const n=Gf(t),r=ti(t),i=Zn(e,t);return n&&r?P1(i):n&&!r?oi(i):!n&&r?si(i):i}function jF(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:UF(e,t[r])}),{})}function fu(e,t){return t.map(n=>Zn(e,n))}function Zn(e,t){return jo(t)?FF(e,t):_o(t)?kF(e,t):kn(t)?SF(e,t):ct(t)?IF(e,t):Oi(t)?NF(e,t):Lo(t)?TF(e,t):Ka(t)?MF(e,t):Ga(t)?PF(e,t):Ya(t)?OF(e,t):Yn(t)?BF(e,t):Ja(t)?RF(e,t):Yy(t)?LF(e,t):t}function _F(e,t){return Zn(t,zf(e))}function VF(e){return M({[T]:"Integer",type:"integer"},e)}function WF(e,t,n){return{[e]:Yo(Ge(e),t,dn(n))}}function qF(e,t,n){return e.reduce((i,o)=>({...i,...WF(o,t,n)}),{})}function zF(e,t,n){return qF(e.keys,t,n)}function KF(e,t,n){const r=zF(e,t,n);return wt(r)}function ZF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join("")}function GF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join("")}function YF(e){return e.toUpperCase()}function JF(e){return e.toLowerCase()}function HF(e,t,n){const r=fd(e.pattern);if(!_s(r))return{...e,pattern:R1(e.pattern,t)};const s=[...rl(r)].map(l=>Ge(l)),u=L1(s,t),a=bt(u);return m1([a],n)}function R1(e,t){return typeof e=="string"?t==="Uncapitalize"?ZF(e):t==="Capitalize"?GF(e):t==="Uppercase"?YF(e):t==="Lowercase"?JF(e):e:e.toString()}function L1(e,t){return e.map(n=>Yo(n,t))}function Yo(e,t,n={}){return Mi(e)?KF(e,t,n):Pi(e)?HF(e,t,n):ct(e)?bt(L1(e.anyOf,t),n):Ti(e)?Ge(R1(e.const,t),n):M(e,n)}function XF(e,t={}){return Yo(e,"Capitalize",t)}function QF(e,t={}){return Yo(e,"Lowercase",t)}function e4(e,t={}){return Yo(e,"Uncapitalize",t)}function t4(e,t={}){return Yo(e,"Uppercase",t)}function n4(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=ll(e[i],t,dn(n));return r}function r4(e,t,n){return n4(e.properties,t,n)}function i4(e,t,n){const r=r4(e,t,n);return wt(r)}function o4(e,t){return e.map(n=>Cd(n,t))}function s4(e,t){return e.map(n=>Cd(n,t))}function u4(e,t){const{[t]:n,...r}=e;return r}function a4(e,t){return t.reduce((n,r)=>u4(n,r),e)}function l4(e,t){const n=hn(e,[qt,"$id","required","properties"]),r=a4(e.properties,t);return lt(r,n)}function c4(e){const t=e.reduce((n,r)=>Jy(r)?[...n,Ge(r)]:n,[]);return bt(t)}function Cd(e,t){return kn(e)?ui(o4(e.allOf,t)):ct(e)?bt(s4(e.anyOf,t)):Yn(e)?l4(e,t):lt({})}function ll(e,t,n){const r=Qt(t)?c4(t):t,i=Bt(t)?ii(t):t,o=Jt(e),s=Jt(t);return wn(e)?i4(e,i,n):Mi(t)?h4(e,t,n):o&&s?nt("Omit",[e,r],n):!o&&s?nt("Omit",[e,r],n):o&&!s?nt("Omit",[e,r],n):M({...Cd(e,i),...n})}function f4(e,t,n){return{[t]:ll(e,[t],dn(n))}}function d4(e,t,n){return t.reduce((r,i)=>({...r,...f4(e,i,n)}),{})}function m4(e,t,n){return d4(e,t.keys,n)}function h4(e,t,n){const r=m4(e,t,n);return wt(r)}function p4(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=cl(e[i],t,dn(n));return r}function g4(e,t,n){return p4(e.properties,t,n)}function y4(e,t,n){const r=g4(e,t,n);return wt(r)}function w4(e,t){return e.map(n=>xd(n,t))}function b4(e,t){return e.map(n=>xd(n,t))}function $4(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function v4(e,t){const n=hn(e,[qt,"$id","required","properties"]),r=$4(e.properties,t);return lt(r,n)}function D4(e){const t=e.reduce((n,r)=>Jy(r)?[...n,Ge(r)]:n,[]);return bt(t)}function xd(e,t){return kn(e)?ui(w4(e.allOf,t)):ct(e)?bt(b4(e.anyOf,t)):Yn(e)?v4(e,t):lt({})}function cl(e,t,n){const r=Qt(t)?D4(t):t,i=Bt(t)?ii(t):t,o=Jt(e),s=Jt(t);return wn(e)?y4(e,i,n):Mi(t)?A4(e,t,n):o&&s?nt("Pick",[e,r],n):!o&&s?nt("Pick",[e,r],n):o&&!s?nt("Pick",[e,r],n):M({...xd(e,i),...n})}function E4(e,t,n){return{[t]:cl(e,[t],dn(n))}}function C4(e,t,n){return t.reduce((r,i)=>({...r,...E4(e,i,n)}),{})}function x4(e,t,n){return C4(e,t.keys,n)}function A4(e,t,n){const r=x4(e,t,n);return wt(r)}function F4(e,t){return nt("Partial",[nt(e,t)])}function k4(e){return nt("Partial",[Ko(e)])}function S4(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=si(e[n]);return t}function I4(e){const t=hn(e,[qt,"$id","required","properties"]),n=S4(e.properties);return lt(n,t)}function m0(e){return e.map(t=>U1(t))}function U1(e){return Uo(e)?F4(e.target,e.parameters):Jt(e)?k4(e.$ref):kn(e)?ui(m0(e.allOf)):ct(e)?bt(m0(e.anyOf)):Yn(e)?I4(e):Za(e)||iu(e)||Vo(e)||Ti(e)||Yf(e)||Wo(e)||su(e)||Jf(e)||uu(e)?e:lt({})}function Ad(e,t){return wn(e)?M4(e,t):M({...U1(e),...t})}function N4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Ad(e[r],dn(t));return n}function T4(e,t){return N4(e.properties,t)}function M4(e,t){const n=T4(e,t);return wt(n)}function P4(e,t){return nt("Required",[nt(e,t)])}function O4(e){return nt("Required",[Ko(e)])}function B4(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=hn(e[n],[Sr]);return t}function R4(e){const t=hn(e,[qt,"$id","required","properties"]),n=B4(e.properties);return lt(n,t)}function h0(e){return e.map(t=>j1(t))}function j1(e){return Uo(e)?P4(e.target,e.parameters):Jt(e)?O4(e.$ref):kn(e)?ui(h0(e.allOf)):ct(e)?bt(h0(e.anyOf)):Yn(e)?R4(e):Za(e)||iu(e)||Vo(e)||Ti(e)||Yf(e)||Wo(e)||su(e)||Jf(e)||uu(e)?e:lt({})}function Fd(e,t){return wn(e)?j4(e,t):M({...j1(e),...t})}function L4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Fd(e[r],t);return n}function U4(e,t){return L4(e.properties,t)}function j4(e,t){const n=U4(e,t);return wt(n)}function _4(e,t){return t.map(n=>Jt(n)?kd(e,n.$ref):pn(e,n))}function kd(e,t){return t in e?Jt(e[t])?kd(e,e[t].$ref):pn(e,e[t]):Ie()}function V4(e){return ol(e[0])}function W4(e){return il(e[0],e[1])}function q4(e){return pd(e[0])}function z4(e){return Ad(e[0])}function K4(e){return ll(e[0],e[1])}function Z4(e){return cl(e[0],e[1])}function G4(e){return Fd(e[0])}function Y4(e,t,n){const r=_4(e,n);return t==="Awaited"?V4(r):t==="Index"?W4(r):t==="KeyOf"?q4(r):t==="Partial"?z4(r):t==="Omit"?K4(r):t==="Pick"?Z4(r):t==="Required"?G4(r):Ie()}function J4(e,t){return ud(pn(e,t))}function H4(e,t){return ad(pn(e,t))}function X4(e,t,n){return ld(du(e,t),pn(e,n))}function Q4(e,t,n){return lu(du(e,t),pn(e,n))}function ek(e,t){return ui(du(e,t))}function tk(e,t){return hd(pn(e,t))}function nk(e,t){return lt(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:pn(e,t[r])}),{}))}function rk(e,t){const[n,r]=[pn(e,B1(t)),Ed(t)],i=zf(t);return i.patternProperties[r]=n,i}function ik(e,t){return Jt(t)?{...kd(e,t.$ref),[qt]:t[qt]}:t}function ok(e,t){return zo(du(e,t))}function sk(e,t){return bt(du(e,t))}function du(e,t){return t.map(n=>pn(e,n))}function pn(e,t){return ti(t)?M(pn(e,hn(t,[Sr])),t):Gf(t)?M(pn(e,hn(t,[ru])),t):be(t)?M(ik(e,t),t):Lo(t)?M(J4(e,t.items),t):Ka(t)?M(H4(e,t.items),t):Uo(t)?M(Y4(e,t.target,t.parameters)):jo(t)?M(X4(e,t.parameters,t.returns),t):_o(t)?M(Q4(e,t.parameters,t.returns),t):kn(t)?M(ek(e,t.allOf),t):Ga(t)?M(tk(e,t.items),t):Yn(t)?M(nk(e,t.properties),t):Ja(t)?M(rk(e,t)):Oi(t)?M(ok(e,t.items||[]),t):ct(t)?M(sk(e,t.anyOf),t):t}function uk(e,t){return t in e?pn(e,e[t]):Ie()}function ak(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:uk(e,n)}),{})}class lk{constructor(t){const n=ak(t),r=this.WithIdentifiers(n);this.$defs=r}Import(t,n){const r={...this.$defs,[t]:M(this.$defs[t],n)};return M({[T]:"Import",$defs:r,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:{...t[r],$id:r}}),{})}}function ck(e){return new lk(e)}function fk(e,t){return M({[T]:"Not",not:e},t)}function dk(e,t){return _o(e)?zo(e.parameters,t):Ie()}let mk=0;function hk(e,t={}){Ke(t.$id)&&(t.$id=`T${mk++}`);const n=zf(e({[T]:"This",$ref:`${t.$id}`}));return n.$id=t.$id,M({[za]:"Recursive",...n},t)}function pk(e,t){const n=Ve(e)?new globalThis.RegExp(e):e;return M({[T]:"RegExp",type:"RegExp",source:n.source,flags:n.flags},t)}function gk(e){return kn(e)?e.allOf:ct(e)?e.anyOf:Oi(e)?e.items??[]:[]}function yk(e){return gk(e)}function wk(e,t){return _o(e)?M(e.returns,t):Ie(t)}class bk{constructor(t){this.schema=t}Decode(t){return new $k(this.schema,t)}}class $k{constructor(t,n){this.schema=t,this.decode=n}EncodeTransform(t,n){const o={Encode:s=>n[qt].Encode(t(s)),Decode:s=>this.decode(n[qt].Decode(s))};return{...n,[qt]:o}}EncodeSchema(t,n){const r={Decode:this.decode,Encode:t};return{...n,[qt]:r}}Encode(t){return be(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function vk(e){return new bk(e)}function Dk(e={}){return M({[T]:e[T]??"Unsafe"},e)}function Ek(e){return M({[T]:"Void",type:"void"},e)}const Ck=Object.freeze(Object.defineProperty({__proto__:null,Any:Us,Argument:vC,Array:ud,AsyncIterator:ad,Awaited:ol,BigInt:dd,Boolean:f1,Capitalize:XF,Composite:nA,Const:oA,Constructor:ld,ConstructorParameters:sA,Date:D1,Enum:uA,Exclude:$d,Extends:bd,Extract:vd,Function:lu,Index:il,InstanceType:pF,Instantiate:_F,Integer:VF,Intersect:ui,Iterator:hd,KeyOf:pd,Literal:Ge,Lowercase:QF,Mapped:Cx,Module:ck,Never:Ie,Not:fk,Null:E1,Number:Ui,Object:lt,Omit:ll,Optional:si,Parameters:dk,Partial:Ad,Pick:cl,Promise:g1,Readonly:oi,ReadonlyOptional:P1,Record:O1,Recursive:hk,Ref:Ko,RegExp:pk,Required:Fd,Rest:yk,ReturnType:wk,String:Si,Symbol:C1,TemplateLiteral:m1,Transform:vk,Tuple:zo,Uint8Array:A1,Uncapitalize:e4,Undefined:x1,Union:bt,Unknown:sl,Unsafe:Dk,Uppercase:t4,Void:Ek},Symbol.toStringTag,{value:"Module"})),Ae=Ck;function _1(e){switch(e.errorType){case $.ArrayContains:return"Expected array to contain at least one matching value";case $.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case $.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case $.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case $.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case $.ArrayUniqueItems:return"Expected array elements to be unique";case $.Array:return"Expected array";case $.AsyncIterator:return"Expected AsyncIterator";case $.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case $.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case $.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case $.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case $.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case $.BigInt:return"Expected bigint";case $.Boolean:return"Expected boolean";case $.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case $.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case $.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case $.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case $.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case $.Date:return"Expected Date";case $.Function:return"Expected function";case $.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case $.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case $.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case $.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case $.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case $.Integer:return"Expected integer";case $.IntersectUnevaluatedProperties:return"Unexpected property";case $.Intersect:return"Expected all values to match";case $.Iterator:return"Expected Iterator";case $.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case $.Never:return"Never";case $.Not:return"Value should not match";case $.Null:return"Expected null";case $.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case $.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case $.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case $.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case $.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case $.Number:return"Expected number";case $.Object:return"Expected object";case $.ObjectAdditionalProperties:return"Unexpected property";case $.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case $.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case $.ObjectRequiredProperty:return"Expected required property";case $.Promise:return"Expected Promise";case $.RegExp:return"Expected string to match regular expression";case $.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case $.StringFormat:return`Expected string to match '${e.schema.format}' format`;case $.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case $.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case $.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case $.String:return"Expected string";case $.Symbol:return"Expected symbol";case $.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case $.Tuple:return"Expected tuple";case $.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case $.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case $.Uint8Array:return"Expected Uint8Array";case $.Undefined:return"Expected undefined";case $.Union:return"Expected union value";case $.Void:return"Expected void";case $.Kind:return`Expected kind '${e.schema[T]}'`;default:return"Unknown error type"}}let V1=_1;function xk(e){V1=e}function Ak(){return V1}class Fk extends yt{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function kk(e,t){const n=t.find(r=>r.$id===e.$ref);if(n===void 0)throw new Fk(e);return In(n,t)}function fl(e,t){return!an(e.$id)||t.some(n=>n.$id===e.$id)||t.push(e),t}function In(e,t){return e[T]==="This"||e[T]==="Ref"?kk(e,t):e}class Sk extends yt{constructor(t){super("Unable to hash value"),this.value=t}}var gn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(gn||(gn={}));let to=BigInt("14695981039346656037");const[Ik,Nk]=[BigInt("1099511628211"),BigInt("18446744073709551616")],Tk=Array.from({length:256}).map((e,t)=>BigInt(t)),W1=new Float64Array(1),q1=new DataView(W1.buffer),z1=new Uint8Array(W1.buffer);function*Mk(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function Pk(e){At(gn.Array);for(const t of e)ko(t)}function Ok(e){At(gn.Boolean),At(e?1:0)}function Bk(e){At(gn.BigInt),q1.setBigInt64(0,e);for(const t of z1)At(t)}function Rk(e){At(gn.Date),ko(e.getTime())}function Lk(e){At(gn.Null)}function Uk(e){At(gn.Number),q1.setFloat64(0,e);for(const t of z1)At(t)}function jk(e){At(gn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())ko(t),ko(e[t])}function _k(e){At(gn.String);for(let t=0;t<e.length;t++)for(const n of Mk(e.charCodeAt(t)))At(n)}function Vk(e){At(gn.Symbol),ko(e.description)}function Wk(e){At(gn.Uint8Array);for(let t=0;t<e.length;t++)At(e[t])}function qk(e){return At(gn.Undefined)}function ko(e){if(mn(e))return Pk(e);if(Wa(e))return Ok(e);if(yr(e))return Bk(e);if(Kf(e))return Rk(e);if(Va(e))return Lk();if(Q(e))return Uk(e);if(sr(e))return jk(e);if(an(e))return _k(e);if(qa(e))return Vk(e);if(Zf(e))return Wk(e);if(ei(e))return qk();throw new Sk(e)}function At(e){to=to^Tk[e],to=to*Ik%Nk}function Sd(e){return to=BigInt("14695981039346656037"),ko(e),to}class zk extends yt{constructor(t){super("Unknown type"),this.schema=t}}function Kk(e){return e[T]==="Any"||e[T]==="Unknown"}function ne(e){return e!==void 0}function Zk(e,t,n){return!0}function Gk(e,t,n){return!0}function Yk(e,t,n){if(!mn(n)||ne(e.minItems)&&!(n.length>=e.minItems)||ne(e.maxItems)&&!(n.length<=e.maxItems)||!n.every(o=>ut(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of n){const u=Sd(s);if(o.has(u))return!1;o.add(u)}return!0})())return!1;if(!(ne(e.contains)||Q(e.minContains)||Q(e.maxContains)))return!0;const r=ne(e.contains)?e.contains:Ie(),i=n.reduce((o,s)=>ut(r,t,s)?o+1:o,0);return!(i===0||Q(e.minContains)&&i<e.minContains||Q(e.maxContains)&&i>e.maxContains)}function Jk(e,t,n){return _y(n)}function Hk(e,t,n){return!(!yr(n)||ne(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ne(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ne(e.maximum)&&!(n<=e.maximum)||ne(e.minimum)&&!(n>=e.minimum)||ne(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function Xk(e,t,n){return Wa(n)}function Qk(e,t,n){return ut(e.returns,t,n.prototype)}function e3(e,t,n){return!(!Kf(n)||ne(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||ne(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||ne(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||ne(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||ne(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function t3(e,t,n){return Ky(n)}function n3(e,t,n){const r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return ut(i,[...t,...r],n)}function r3(e,t,n){return!(!zy(n)||ne(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ne(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ne(e.maximum)&&!(n<=e.maximum)||ne(e.minimum)&&!(n>=e.minimum)||ne(e.multipleOf)&&n%e.multipleOf!==0)}function i3(e,t,n){const r=e.allOf.every(i=>ut(i,t,n));if(e.unevaluatedProperties===!1){const i=new RegExp(Fo(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s));return r&&o}else if(Bt(e.unevaluatedProperties)){const i=new RegExp(Fo(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s)||ut(e.unevaluatedProperties,t,n[s]));return r&&o}else return r}function o3(e,t,n){return Vy(n)}function s3(e,t,n){return n===e.const}function u3(e,t,n){return!1}function a3(e,t,n){return!ut(e.not,t,n)}function l3(e,t,n){return Va(n)}function c3(e,t,n){return!(!je.IsNumberLike(n)||ne(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ne(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ne(e.minimum)&&!(n>=e.minimum)||ne(e.maximum)&&!(n<=e.maximum)||ne(e.multipleOf)&&n%e.multipleOf!==0)}function f3(e,t,n){if(!je.IsObjectLike(n)||ne(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||ne(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const r=Object.getOwnPropertyNames(e.properties);for(const i of r){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!ut(o,t,n[i])||(Go(o)||Kk(o))&&!(i in n))return!1}else if(je.IsExactOptionalProperty(n,i)&&!ut(o,t,n[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&i.length===r.length?!0:i.every(o=>r.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(n).every(o=>r.includes(o)||ut(e.additionalProperties,t,n[o])):!0}function d3(e,t,n){return Wy(n)}function m3(e,t,n){if(!je.IsRecordLike(n)||ne(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||ne(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const[r,i]=Object.entries(e.patternProperties)[0],o=new RegExp(r),s=Object.entries(n).every(([l,c])=>o.test(l)?ut(i,t,c):!0),u=typeof e.additionalProperties=="object"?Object.entries(n).every(([l,c])=>o.test(l)?!0:ut(e.additionalProperties,t,c)):!0,a=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(l=>o.test(l)):!0;return s&&u&&a}function h3(e,t,n){return ut(In(e,t),t,n)}function p3(e,t,n){const r=new RegExp(e.source,e.flags);return ne(e.minLength)&&!(n.length>=e.minLength)||ne(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function g3(e,t,n){return!an(n)||ne(e.minLength)&&!(n.length>=e.minLength)||ne(e.maxLength)&&!(n.length<=e.maxLength)||ne(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:ne(e.format)?rd(e.format)?id(e.format)(n):!1:!0}function y3(e,t,n){return qa(n)}function w3(e,t,n){return an(n)&&new RegExp(e.pattern).test(n)}function b3(e,t,n){return ut(In(e,t),t,n)}function $3(e,t,n){if(!mn(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!ut(e.items[r],t,n[r]))return!1;return!0}function v3(e,t,n){return ei(n)}function D3(e,t,n){return e.anyOf.some(r=>ut(r,t,n))}function E3(e,t,n){return!(!Zf(n)||ne(e.maxByteLength)&&!(n.length<=e.maxByteLength)||ne(e.minByteLength)&&!(n.length>=e.minByteLength))}function C3(e,t,n){return!0}function x3(e,t,n){return je.IsVoidLike(n)}function A3(e,t,n){return ki(e[T])?sd(e[T])(e,n):!1}function ut(e,t,n){const r=ne(e.$id)?fl(e,t):t,i=e;switch(i[T]){case"Any":return Zk();case"Argument":return Gk();case"Array":return Yk(i,r,n);case"AsyncIterator":return Jk(i,r,n);case"BigInt":return Hk(i,r,n);case"Boolean":return Xk(i,r,n);case"Constructor":return Qk(i,r,n);case"Date":return e3(i,r,n);case"Function":return t3(i,r,n);case"Import":return n3(i,r,n);case"Integer":return r3(i,r,n);case"Intersect":return i3(i,r,n);case"Iterator":return o3(i,r,n);case"Literal":return s3(i,r,n);case"Never":return u3();case"Not":return a3(i,r,n);case"Null":return l3(i,r,n);case"Number":return c3(i,r,n);case"Object":return f3(i,r,n);case"Promise":return d3(i,r,n);case"Record":return m3(i,r,n);case"Ref":return h3(i,r,n);case"RegExp":return p3(i,r,n);case"String":return g3(i,r,n);case"Symbol":return y3(i,r,n);case"TemplateLiteral":return w3(i,r,n);case"This":return b3(i,r,n);case"Tuple":return $3(i,r,n);case"Undefined":return v3(i,r,n);case"Union":return D3(i,r,n);case"Uint8Array":return E3(i,r,n);case"Unknown":return C3();case"Void":return x3(i,r,n);default:if(!ki(i[T]))throw new zk(i);return A3(i,r,n)}}function $a(...e){return e.length===3?ut(e[0],e[1],e[2]):ut(e[0],[],e[1])}var $;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})($||($={}));class F3 extends yt{constructor(t){super("Unknown type"),this.schema=t}}function hr(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function te(e){return e!==void 0}class K1{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function P(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:Ak()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*k3(e,t,n,r){}function*S3(e,t,n,r){}function*I3(e,t,n,r){if(!mn(r))return yield P($.Array,e,n,r);te(e.minItems)&&!(r.length>=e.minItems)&&(yield P($.ArrayMinItems,e,n,r)),te(e.maxItems)&&!(r.length<=e.maxItems)&&(yield P($.ArrayMaxItems,e,n,r));for(let s=0;s<r.length;s++)yield*at(e.items,t,`${n}/${s}`,r[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const u of r){const a=Sd(u);if(s.has(a))return!1;s.add(a)}return!0})()&&(yield P($.ArrayUniqueItems,e,n,r)),!(te(e.contains)||te(e.minContains)||te(e.maxContains)))return;const i=te(e.contains)?e.contains:Ie(),o=r.reduce((s,u,a)=>at(i,t,`${n}${a}`,u).next().done===!0?s+1:s,0);o===0&&(yield P($.ArrayContains,e,n,r)),Q(e.minContains)&&o<e.minContains&&(yield P($.ArrayMinContains,e,n,r)),Q(e.maxContains)&&o>e.maxContains&&(yield P($.ArrayMaxContains,e,n,r))}function*N3(e,t,n,r){_y(r)||(yield P($.AsyncIterator,e,n,r))}function*T3(e,t,n,r){if(!yr(r))return yield P($.BigInt,e,n,r);te(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P($.BigIntExclusiveMaximum,e,n,r)),te(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P($.BigIntExclusiveMinimum,e,n,r)),te(e.maximum)&&!(r<=e.maximum)&&(yield P($.BigIntMaximum,e,n,r)),te(e.minimum)&&!(r>=e.minimum)&&(yield P($.BigIntMinimum,e,n,r)),te(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield P($.BigIntMultipleOf,e,n,r))}function*M3(e,t,n,r){Wa(r)||(yield P($.Boolean,e,n,r))}function*P3(e,t,n,r){yield*at(e.returns,t,n,r.prototype)}function*O3(e,t,n,r){if(!Kf(r))return yield P($.Date,e,n,r);te(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield P($.DateExclusiveMaximumTimestamp,e,n,r)),te(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield P($.DateExclusiveMinimumTimestamp,e,n,r)),te(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield P($.DateMaximumTimestamp,e,n,r)),te(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield P($.DateMinimumTimestamp,e,n,r)),te(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield P($.DateMultipleOfTimestamp,e,n,r))}function*B3(e,t,n,r){Ky(r)||(yield P($.Function,e,n,r))}function*R3(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*at(o,[...t,...i],n,r)}function*L3(e,t,n,r){if(!zy(r))return yield P($.Integer,e,n,r);te(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P($.IntegerExclusiveMaximum,e,n,r)),te(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P($.IntegerExclusiveMinimum,e,n,r)),te(e.maximum)&&!(r<=e.maximum)&&(yield P($.IntegerMaximum,e,n,r)),te(e.minimum)&&!(r>=e.minimum)&&(yield P($.IntegerMinimum,e,n,r)),te(e.multipleOf)&&r%e.multipleOf!==0&&(yield P($.IntegerMultipleOf,e,n,r))}function*U3(e,t,n,r){let i=!1;for(const o of e.allOf)for(const s of at(o,t,n,r))i=!0,yield s;if(i)return yield P($.Intersect,e,n,r);if(e.unevaluatedProperties===!1){const o=new RegExp(Fo(e));for(const s of Object.getOwnPropertyNames(r))o.test(s)||(yield P($.IntersectUnevaluatedProperties,e,`${n}/${s}`,r))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(Fo(e));for(const s of Object.getOwnPropertyNames(r))if(!o.test(s)){const u=at(e.unevaluatedProperties,t,`${n}/${s}`,r[s]).next();u.done||(yield u.value)}}}function*j3(e,t,n,r){Vy(r)||(yield P($.Iterator,e,n,r))}function*_3(e,t,n,r){r!==e.const&&(yield P($.Literal,e,n,r))}function*V3(e,t,n,r){yield P($.Never,e,n,r)}function*W3(e,t,n,r){at(e.not,t,n,r).next().done===!0&&(yield P($.Not,e,n,r))}function*q3(e,t,n,r){Va(r)||(yield P($.Null,e,n,r))}function*z3(e,t,n,r){if(!je.IsNumberLike(r))return yield P($.Number,e,n,r);te(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P($.NumberExclusiveMaximum,e,n,r)),te(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P($.NumberExclusiveMinimum,e,n,r)),te(e.maximum)&&!(r<=e.maximum)&&(yield P($.NumberMaximum,e,n,r)),te(e.minimum)&&!(r>=e.minimum)&&(yield P($.NumberMinimum,e,n,r)),te(e.multipleOf)&&r%e.multipleOf!==0&&(yield P($.NumberMultipleOf,e,n,r))}function*K3(e,t,n,r){if(!je.IsObjectLike(r))return yield P($.Object,e,n,r);te(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P($.ObjectMinProperties,e,n,r)),te(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P($.ObjectMaxProperties,e,n,r));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(r);for(const u of i)s.includes(u)||(yield P($.ObjectRequiredProperty,e.properties[u],`${n}/${hr(u)}`,void 0));if(e.additionalProperties===!1)for(const u of s)o.includes(u)||(yield P($.ObjectAdditionalProperties,e,`${n}/${hr(u)}`,r[u]));if(typeof e.additionalProperties=="object")for(const u of s)o.includes(u)||(yield*at(e.additionalProperties,t,`${n}/${hr(u)}`,r[u]));for(const u of o){const a=e.properties[u];e.required&&e.required.includes(u)?(yield*at(a,t,`${n}/${hr(u)}`,r[u]),Go(e)&&!(u in r)&&(yield P($.ObjectRequiredProperty,a,`${n}/${hr(u)}`,void 0))):je.IsExactOptionalProperty(r,u)&&(yield*at(a,t,`${n}/${hr(u)}`,r[u]))}}function*Z3(e,t,n,r){Wy(r)||(yield P($.Promise,e,n,r))}function*G3(e,t,n,r){if(!je.IsRecordLike(r))return yield P($.Object,e,n,r);te(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P($.ObjectMinProperties,e,n,r)),te(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P($.ObjectMaxProperties,e,n,r));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[u,a]of Object.entries(r))s.test(u)&&(yield*at(o,t,`${n}/${hr(u)}`,a));if(typeof e.additionalProperties=="object")for(const[u,a]of Object.entries(r))s.test(u)||(yield*at(e.additionalProperties,t,`${n}/${hr(u)}`,a));if(e.additionalProperties===!1){for(const[u,a]of Object.entries(r))if(!s.test(u))return yield P($.ObjectAdditionalProperties,e,`${n}/${hr(u)}`,a)}}function*Y3(e,t,n,r){yield*at(In(e,t),t,n,r)}function*J3(e,t,n,r){if(!an(r))return yield P($.String,e,n,r);if(te(e.minLength)&&!(r.length>=e.minLength)&&(yield P($.StringMinLength,e,n,r)),te(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P($.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield P($.RegExp,e,n,r)}function*H3(e,t,n,r){if(!an(r))return yield P($.String,e,n,r);te(e.minLength)&&!(r.length>=e.minLength)&&(yield P($.StringMinLength,e,n,r)),te(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P($.StringMaxLength,e,n,r)),an(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield P($.StringPattern,e,n,r))),an(e.format)&&(rd(e.format)?id(e.format)(r)||(yield P($.StringFormat,e,n,r)):yield P($.StringFormatUnknown,e,n,r))}function*X3(e,t,n,r){qa(r)||(yield P($.Symbol,e,n,r))}function*Q3(e,t,n,r){if(!an(r))return yield P($.String,e,n,r);new RegExp(e.pattern).test(r)||(yield P($.StringPattern,e,n,r))}function*e6(e,t,n,r){yield*at(In(e,t),t,n,r)}function*t6(e,t,n,r){if(!mn(r))return yield P($.Tuple,e,n,r);if(e.items===void 0&&r.length!==0)return yield P($.TupleLength,e,n,r);if(r.length!==e.maxItems)return yield P($.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*at(e.items[i],t,`${n}/${i}`,r[i])}function*n6(e,t,n,r){ei(r)||(yield P($.Undefined,e,n,r))}function*r6(e,t,n,r){if($a(e,t,r))return;const i=e.anyOf.map(o=>new K1(at(o,t,n,r)));yield P($.Union,e,n,r,i)}function*i6(e,t,n,r){if(!Zf(r))return yield P($.Uint8Array,e,n,r);te(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield P($.Uint8ArrayMaxByteLength,e,n,r)),te(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield P($.Uint8ArrayMinByteLength,e,n,r))}function*o6(e,t,n,r){}function*s6(e,t,n,r){je.IsVoidLike(r)||(yield P($.Void,e,n,r))}function*u6(e,t,n,r){sd(e[T])(e,r)||(yield P($.Kind,e,n,r))}function*at(e,t,n,r){const i=te(e.$id)?[...t,e]:t,o=e;switch(o[T]){case"Any":return yield*k3();case"Argument":return yield*S3();case"Array":return yield*I3(o,i,n,r);case"AsyncIterator":return yield*N3(o,i,n,r);case"BigInt":return yield*T3(o,i,n,r);case"Boolean":return yield*M3(o,i,n,r);case"Constructor":return yield*P3(o,i,n,r);case"Date":return yield*O3(o,i,n,r);case"Function":return yield*B3(o,i,n,r);case"Import":return yield*R3(o,i,n,r);case"Integer":return yield*L3(o,i,n,r);case"Intersect":return yield*U3(o,i,n,r);case"Iterator":return yield*j3(o,i,n,r);case"Literal":return yield*_3(o,i,n,r);case"Never":return yield*V3(o,i,n,r);case"Not":return yield*W3(o,i,n,r);case"Null":return yield*q3(o,i,n,r);case"Number":return yield*z3(o,i,n,r);case"Object":return yield*K3(o,i,n,r);case"Promise":return yield*Z3(o,i,n,r);case"Record":return yield*G3(o,i,n,r);case"Ref":return yield*Y3(o,i,n,r);case"RegExp":return yield*J3(o,i,n,r);case"String":return yield*H3(o,i,n,r);case"Symbol":return yield*X3(o,i,n,r);case"TemplateLiteral":return yield*Q3(o,i,n,r);case"This":return yield*e6(o,i,n,r);case"Tuple":return yield*t6(o,i,n,r);case"Undefined":return yield*n6(o,i,n,r);case"Union":return yield*r6(o,i,n,r);case"Uint8Array":return yield*i6(o,i,n,r);case"Unknown":return yield*o6();case"Void":return yield*s6(o,i,n,r);default:if(!ki(o[T]))throw new F3(e);return yield*u6(o,i,n,r)}}function a6(...e){const t=e.length===3?at(e[0],e[1],"",e[2]):at(e[0],[],"",e[1]);return new K1(t)}class l6 extends yt{constructor(t,n,r){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class c6 extends yt{constructor(t,n,r,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=n,this.value=r,this.error=i}}function xe(e,t,n){try{return be(e)?e[qt].Decode(n):n}catch(r){throw new c6(e,t,n,r)}}function f6(e,t,n,r){return mn(r)?xe(e,n,r.map((i,o)=>Jn(e.items,t,`${n}/${o}`,i))):xe(e,n,r)}function d6(e,t,n,r){if(!sr(r)||Zy(r))return xe(e,n,r);const i=v1(e),o=i.map(c=>c[0]),s={...r};for(const[c,f]of i)c in s&&(s[c]=Jn(f,t,`${n}/${c}`,s[c]));if(!be(e.unevaluatedProperties))return xe(e,n,s);const u=Object.getOwnPropertyNames(s),a=e.unevaluatedProperties,l={...s};for(const c of u)o.includes(c)||(l[c]=xe(a,`${n}/${c}`,l[c]));return xe(e,n,l)}function m6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=Jn(o,[...t,...i],n,r);return xe(e,n,s)}function h6(e,t,n,r){return xe(e,n,Jn(e.not,t,n,r))}function p6(e,t,n,r){if(!sr(r))return xe(e,n,r);const i=ji(e),o={...r};for(const l of i)qy(o,l)&&(ei(o[l])&&(!uu(e.properties[l])||je.IsExactOptionalProperty(o,l))||(o[l]=Jn(e.properties[l],t,`${n}/${l}`,o[l])));if(!Bt(e.additionalProperties))return xe(e,n,o);const s=Object.getOwnPropertyNames(o),u=e.additionalProperties,a={...o};for(const l of s)i.includes(l)||(a[l]=xe(u,`${n}/${l}`,a[l]));return xe(e,n,a)}function g6(e,t,n,r){if(!sr(r))return xe(e,n,r);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...r};for(const c of Object.getOwnPropertyNames(r))o.test(c)&&(s[c]=Jn(e.patternProperties[i],t,`${n}/${c}`,s[c]));if(!Bt(e.additionalProperties))return xe(e,n,s);const u=Object.getOwnPropertyNames(s),a=e.additionalProperties,l={...s};for(const c of u)o.test(c)||(l[c]=xe(a,`${n}/${c}`,l[c]));return xe(e,n,l)}function y6(e,t,n,r){const i=In(e,t);return xe(e,n,Jn(i,t,n,r))}function w6(e,t,n,r){const i=In(e,t);return xe(e,n,Jn(i,t,n,r))}function b6(e,t,n,r){return mn(r)&&mn(e.items)?xe(e,n,e.items.map((i,o)=>Jn(i,t,`${n}/${o}`,r[o]))):xe(e,n,r)}function $6(e,t,n,r){for(const i of e.anyOf){if(!$a(i,t,r))continue;const o=Jn(i,t,n,r);return xe(e,n,o)}return xe(e,n,r)}function Jn(e,t,n,r){const i=fl(e,t),o=e;switch(e[T]){case"Array":return f6(o,i,n,r);case"Import":return m6(o,i,n,r);case"Intersect":return d6(o,i,n,r);case"Not":return h6(o,i,n,r);case"Object":return p6(o,i,n,r);case"Record":return g6(o,i,n,r);case"Ref":return y6(o,i,n,r);case"Symbol":return xe(o,n,r);case"This":return w6(o,i,n,r);case"Tuple":return b6(o,i,n,r);case"Union":return $6(o,i,n,r);default:return xe(o,n,r)}}function v6(e,t,n){return Jn(e,t,"",n)}class D6 extends yt{constructor(t,n,r){super("The encoded value does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class E6 extends yt{constructor(t,n,r,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=n,this.value=r,this.error=i}}function ht(e,t,n){try{return be(e)?e[qt].Encode(n):n}catch(r){throw new E6(e,t,n,r)}}function C6(e,t,n,r){const i=ht(e,n,r);return mn(i)?i.map((o,s)=>Gn(e.items,t,`${n}/${s}`,o)):i}function x6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=ht(e,n,r);return Gn(o,[...t,...i],n,s)}function A6(e,t,n,r){const i=ht(e,n,r);if(!sr(r)||Zy(r))return i;const o=v1(e),s=o.map(f=>f[0]),u={...i};for(const[f,m]of o)f in u&&(u[f]=Gn(m,t,`${n}/${f}`,u[f]));if(!be(e.unevaluatedProperties))return u;const a=Object.getOwnPropertyNames(u),l=e.unevaluatedProperties,c={...u};for(const f of a)s.includes(f)||(c[f]=ht(l,`${n}/${f}`,c[f]));return c}function F6(e,t,n,r){return ht(e.not,n,ht(e,n,r))}function k6(e,t,n,r){const i=ht(e,n,r);if(!sr(i))return i;const o=ji(e),s={...i};for(const c of o)qy(s,c)&&(ei(s[c])&&(!uu(e.properties[c])||je.IsExactOptionalProperty(s,c))||(s[c]=Gn(e.properties[c],t,`${n}/${c}`,s[c])));if(!Bt(e.additionalProperties))return s;const u=Object.getOwnPropertyNames(s),a=e.additionalProperties,l={...s};for(const c of u)o.includes(c)||(l[c]=ht(a,`${n}/${c}`,l[c]));return l}function S6(e,t,n,r){const i=ht(e,n,r);if(!sr(r))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),u={...i};for(const f of Object.getOwnPropertyNames(r))s.test(f)&&(u[f]=Gn(e.patternProperties[o],t,`${n}/${f}`,u[f]));if(!Bt(e.additionalProperties))return u;const a=Object.getOwnPropertyNames(u),l=e.additionalProperties,c={...u};for(const f of a)s.test(f)||(c[f]=ht(l,`${n}/${f}`,c[f]));return c}function I6(e,t,n,r){const i=In(e,t),o=Gn(i,t,n,r);return ht(e,n,o)}function N6(e,t,n,r){const i=In(e,t),o=Gn(i,t,n,r);return ht(e,n,o)}function T6(e,t,n,r){const i=ht(e,n,r);return mn(e.items)?e.items.map((o,s)=>Gn(o,t,`${n}/${s}`,i[s])):[]}function M6(e,t,n,r){for(const i of e.anyOf){if(!$a(i,t,r))continue;const o=Gn(i,t,n,r);return ht(e,n,o)}for(const i of e.anyOf){const o=Gn(i,t,n,r);if($a(e,t,o))return ht(e,n,o)}return ht(e,n,r)}function Gn(e,t,n,r){const i=fl(e,t),o=e;switch(e[T]){case"Array":return C6(o,i,n,r);case"Import":return x6(o,i,n,r);case"Intersect":return A6(o,i,n,r);case"Not":return F6(o,i,n,r);case"Object":return k6(o,i,n,r);case"Record":return S6(o,i,n,r);case"Ref":return I6(o,i,n,r);case"This":return N6(o,i,n,r);case"Tuple":return T6(o,i,n,r);case"Union":return M6(o,i,n,r);default:return ht(o,n,r)}}function P6(e,t,n){return Gn(e,t,"",n)}function O6(e,t){return be(e)||rt(e.items,t)}function B6(e,t){return be(e)||rt(e.items,t)}function R6(e,t){return be(e)||rt(e.returns,t)||e.parameters.some(n=>rt(n,t))}function L6(e,t){return be(e)||rt(e.returns,t)||e.parameters.some(n=>rt(n,t))}function U6(e,t){return be(e)||be(e.unevaluatedProperties)||e.allOf.some(n=>rt(n,t))}function j6(e,t){const n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),r=e.$defs[e.$ref];return be(e)||rt(r,[...n,...t])}function _6(e,t){return be(e)||rt(e.items,t)}function V6(e,t){return be(e)||rt(e.not,t)}function W6(e,t){return be(e)||Object.values(e.properties).some(n=>rt(n,t))||Bt(e.additionalProperties)&&rt(e.additionalProperties,t)}function q6(e,t){return be(e)||rt(e.item,t)}function z6(e,t){const n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return be(e)||rt(r,t)||Bt(e.additionalProperties)&&be(e.additionalProperties)}function K6(e,t){return be(e)?!0:rt(In(e,t),t)}function Z6(e,t){return be(e)?!0:rt(In(e,t),t)}function G6(e,t){return be(e)||!ei(e.items)&&e.items.some(n=>rt(n,t))}function Y6(e,t){return be(e)||e.anyOf.some(n=>rt(n,t))}function rt(e,t){const n=fl(e,t),r=e;if(e.$id&&qc.has(e.$id))return!1;switch(e.$id&&qc.add(e.$id),e[T]){case"Array":return O6(r,n);case"AsyncIterator":return B6(r,n);case"Constructor":return R6(r,n);case"Function":return L6(r,n);case"Import":return j6(r,n);case"Intersect":return U6(r,n);case"Iterator":return _6(r,n);case"Not":return V6(r,n);case"Object":return W6(r,n);case"Promise":return q6(r,n);case"Record":return z6(r,n);case"Ref":return K6(r,n);case"This":return Z6(r,n);case"Tuple":return G6(r,n);case"Union":return Y6(r,n);default:return be(e)}}const qc=new Set;function J6(e,t){return qc.clear(),rt(e,t)}class H6{constructor(t,n,r,i){this.schema=t,this.references=n,this.checkFunc=r,this.code=i,this.hasTransform=J6(t,n)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return a6(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new l6(this.schema,t,this.Errors(t).First());return this.hasTransform?v6(this.schema,this.references,t):t}Encode(t){const n=this.hasTransform?P6(this.schema,this.references,t):t;if(!this.checkFunc(n))throw new D6(this.schema,t,this.Errors(t).First());return n}}var wr;(function(e){function t(o){return o===36}e.DollarSign=t;function n(o){return o===95}e.IsUnderscore=n;function r(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=r;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(wr||(wr={}));var va;(function(e){function t(o){return o.length===0?!1:wr.IsNumeric(o.charCodeAt(0))}function n(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const u=o.charCodeAt(s);if(!(wr.IsAlpha(u)||wr.IsNumeric(u)||wr.DollarSign(u)||wr.IsUnderscore(u)))return!1}return!0}function r(o){return o.replace(/'/g,"\\'")}function i(o,s){return n(s)?`${o}.${s}`:`${o}['${r(s)}']`}e.Encode=i})(va||(va={}));var zc;(function(e){function t(n){const r=[];for(let i=0;i<n.length;i++){const o=n.charCodeAt(i);wr.IsNumeric(o)||wr.IsAlpha(o)?r.push(n.charAt(i)):r.push(`_${o}_`)}return r.join("").replace(/__/g,"_")}e.Encode=t})(zc||(zc={}));var Kc;(function(e){function t(n){return n.replace(/'/g,"\\'")}e.Escape=t})(Kc||(Kc={}));class X6 extends yt{constructor(t){super("Unknown type"),this.schema=t}}class p0 extends yt{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var yi;(function(e){function t(s,u,a){return je.ExactOptionalPropertyTypes?`('${u}' in ${s} ? ${a} : true)`:`(${va.Encode(s,u)} !== undefined ? ${a} : true)`}e.IsExactOptionalProperty=t;function n(s){return je.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=n;function r(s){return je.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=r;function i(s){return je.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return je.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(yi||(yi={}));var $s;(function(e){function t(p){return p[T]==="Any"||p[T]==="Unknown"}function*n(p,B,y){yield"true"}function*r(p,B,y){yield"true"}function*i(p,B,y){yield`Array.isArray(${y})`;const[z,j]=[wu("value","any"),wu("acc","number")];Q(p.maxItems)&&(yield`${y}.length <= ${p.maxItems}`),Q(p.minItems)&&(yield`${y}.length >= ${p.minItems}`);const _=en(p.items,B,"value");if(yield`${y}.every((${z}) => ${_})`,ke(p.contains)||Q(p.minContains)||Q(p.maxContains)){const we=ke(p.contains)?p.contains:Ie(),Rt=en(we,B,"value"),ur=Q(p.minContains)?[`(count >= ${p.minContains})`]:[],Pn=Q(p.maxContains)?[`(count <= ${p.maxContains})`]:[],Hn=`const count = value.reduce((${j}, ${z}) => ${Rt} ? acc + 1 : acc, 0)`,bu=["(count > 0)",...ur,...Pn].join(" && ");yield`((${z}) => { ${Hn}; return ${bu}})(${y})`}p.uniqueItems===!0&&(yield`((${z}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${y})`)}function*o(p,B,y){yield`(typeof value === 'object' && Symbol.asyncIterator in ${y})`}function*s(p,B,y){yield`(typeof ${y} === 'bigint')`,yr(p.exclusiveMaximum)&&(yield`${y} < BigInt(${p.exclusiveMaximum})`),yr(p.exclusiveMinimum)&&(yield`${y} > BigInt(${p.exclusiveMinimum})`),yr(p.maximum)&&(yield`${y} <= BigInt(${p.maximum})`),yr(p.minimum)&&(yield`${y} >= BigInt(${p.minimum})`),yr(p.multipleOf)&&(yield`(${y} % BigInt(${p.multipleOf})) === 0`)}function*u(p,B,y){yield`(typeof ${y} === 'boolean')`}function*a(p,B,y){yield*$n(p.returns,B,`${y}.prototype`)}function*l(p,B,y){yield`(${y} instanceof Date) && Number.isFinite(${y}.getTime())`,Q(p.exclusiveMaximumTimestamp)&&(yield`${y}.getTime() < ${p.exclusiveMaximumTimestamp}`),Q(p.exclusiveMinimumTimestamp)&&(yield`${y}.getTime() > ${p.exclusiveMinimumTimestamp}`),Q(p.maximumTimestamp)&&(yield`${y}.getTime() <= ${p.maximumTimestamp}`),Q(p.minimumTimestamp)&&(yield`${y}.getTime() >= ${p.minimumTimestamp}`),Q(p.multipleOfTimestamp)&&(yield`(${y}.getTime() % ${p.multipleOfTimestamp}) === 0`)}function*c(p,B,y){yield`(typeof ${y} === 'function')`}function*f(p,B,y){const z=globalThis.Object.getOwnPropertyNames(p.$defs).reduce((j,_)=>[...j,p.$defs[_]],[]);yield*$n(Ko(p.$ref),[...B,...z],y)}function*m(p,B,y){yield`Number.isInteger(${y})`,Q(p.exclusiveMaximum)&&(yield`${y} < ${p.exclusiveMaximum}`),Q(p.exclusiveMinimum)&&(yield`${y} > ${p.exclusiveMinimum}`),Q(p.maximum)&&(yield`${y} <= ${p.maximum}`),Q(p.minimum)&&(yield`${y} >= ${p.minimum}`),Q(p.multipleOf)&&(yield`(${y} % ${p.multipleOf}) === 0`)}function*g(p,B,y){const z=p.allOf.map(j=>en(j,B,y)).join(" && ");if(p.unevaluatedProperties===!1){const j=Mr(`${new RegExp(Fo(p))};`),_=`Object.getOwnPropertyNames(${y}).every(key => ${j}.test(key))`;yield`(${z} && ${_})`}else if(ke(p.unevaluatedProperties)){const j=Mr(`${new RegExp(Fo(p))};`),_=`Object.getOwnPropertyNames(${y}).every(key => ${j}.test(key) || ${en(p.unevaluatedProperties,B,`${y}[key]`)})`;yield`(${z} && ${_})`}else yield`(${z})`}function*C(p,B,y){yield`(typeof value === 'object' && Symbol.iterator in ${y})`}function*D(p,B,y){typeof p.const=="number"||typeof p.const=="boolean"?yield`(${y} === ${p.const})`:yield`(${y} === '${Kc.Escape(p.const)}')`}function*k(p,B,y){yield"false"}function*A(p,B,y){yield`(!${en(p.not,B,y)})`}function*I(p,B,y){yield`(${y} === null)`}function*U(p,B,y){yield yi.IsNumberLike(y),Q(p.exclusiveMaximum)&&(yield`${y} < ${p.exclusiveMaximum}`),Q(p.exclusiveMinimum)&&(yield`${y} > ${p.exclusiveMinimum}`),Q(p.maximum)&&(yield`${y} <= ${p.maximum}`),Q(p.minimum)&&(yield`${y} >= ${p.minimum}`),Q(p.multipleOf)&&(yield`(${y} % ${p.multipleOf}) === 0`)}function*W(p,B,y){yield yi.IsObjectLike(y),Q(p.minProperties)&&(yield`Object.getOwnPropertyNames(${y}).length >= ${p.minProperties}`),Q(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${y}).length <= ${p.maxProperties}`);const z=Object.getOwnPropertyNames(p.properties);for(const j of z){const _=va.Encode(y,j),we=p.properties[j];if(p.required&&p.required.includes(j))yield*$n(we,B,_),(Go(we)||t(we))&&(yield`('${j}' in ${y})`);else{const Rt=en(we,B,_);yield yi.IsExactOptionalProperty(y,j,Rt)}}if(p.additionalProperties===!1)if(p.required&&p.required.length===z.length)yield`Object.getOwnPropertyNames(${y}).length === ${z.length}`;else{const j=`[${z.map(_=>`'${_}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${y}).every(key => ${j}.includes(key))`}if(typeof p.additionalProperties=="object"){const j=en(p.additionalProperties,B,`${y}[key]`),_=`[${z.map(we=>`'${we}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${y}).every(key => ${_}.includes(key) || ${j}))`}}function*G(p,B,y){yield`${y} instanceof Promise`}function*Oe(p,B,y){yield yi.IsRecordLike(y),Q(p.minProperties)&&(yield`Object.getOwnPropertyNames(${y}).length >= ${p.minProperties}`),Q(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${y}).length <= ${p.maxProperties}`);const[z,j]=Object.entries(p.patternProperties)[0],_=Mr(`${new RegExp(z)}`),we=en(j,B,"value"),Rt=ke(p.additionalProperties)?en(p.additionalProperties,B,y):p.additionalProperties===!1?"false":"true",ur=`(${_}.test(key) ? ${we} : ${Rt})`;yield`(Object.entries(${y}).every(([key, value]) => ${ur}))`}function*vt(p,B,y){const z=In(p,B);if(We.functions.has(p.$ref))return yield`${Wi(p.$ref)}(${y})`;yield*$n(z,B,y)}function*Qe(p,B,y){const z=Mr(`${new RegExp(p.source,p.flags)};`);yield`(typeof ${y} === 'string')`,Q(p.maxLength)&&(yield`${y}.length <= ${p.maxLength}`),Q(p.minLength)&&(yield`${y}.length >= ${p.minLength}`),yield`${z}.test(${y})`}function*St(p,B,y){yield`(typeof ${y} === 'string')`,Q(p.maxLength)&&(yield`${y}.length <= ${p.maxLength}`),Q(p.minLength)&&(yield`${y}.length >= ${p.minLength}`),p.pattern!==void 0&&(yield`${Mr(`${new RegExp(p.pattern)};`)}.test(${y})`),p.format!==void 0&&(yield`format('${p.format}', ${y})`)}function*bn(p,B,y){yield`(typeof ${y} === 'symbol')`}function*Tn(p,B,y){yield`(typeof ${y} === 'string')`,yield`${Mr(`${new RegExp(p.pattern)};`)}.test(${y})`}function*Vi(p,B,y){yield`${Wi(p.$ref)}(${y})`}function*gl(p,B,y){if(yield`Array.isArray(${y})`,p.items===void 0)return yield`${y}.length === 0`;yield`(${y}.length === ${p.maxItems})`;for(let z=0;z<p.items.length;z++)yield`${en(p.items[z],B,`${y}[${z}]`)}`}function*Jo(p,B,y){yield`${y} === undefined`}function*pu(p,B,y){yield`(${p.anyOf.map(j=>en(j,B,y)).join(" || ")})`}function*Mn(p,B,y){yield`${y} instanceof Uint8Array`,Q(p.maxByteLength)&&(yield`(${y}.length <= ${p.maxByteLength})`),Q(p.minByteLength)&&(yield`(${y}.length >= ${p.minByteLength})`)}function*gu(p,B,y){yield"true"}function*yl(p,B,y){yield yi.IsVoidLike(y)}function*yu(p,B,y){const z=We.instances.size;We.instances.set(z,p),yield`kind('${p[T]}', ${z}, ${y})`}function*$n(p,B,y,z=!0){const j=an(p.$id)?[...B,p]:B,_=p;if(z&&an(p.$id)){const we=Wi(p.$id);if(We.functions.has(we))return yield`${we}(${y})`;{We.functions.set(we,"<deferred>");const Rt=ai(we,p,B,"value",!1);return We.functions.set(we,Rt),yield`${we}(${y})`}}switch(_[T]){case"Any":return yield*n();case"Argument":return yield*r();case"Array":return yield*i(_,j,y);case"AsyncIterator":return yield*o(_,j,y);case"BigInt":return yield*s(_,j,y);case"Boolean":return yield*u(_,j,y);case"Constructor":return yield*a(_,j,y);case"Date":return yield*l(_,j,y);case"Function":return yield*c(_,j,y);case"Import":return yield*f(_,j,y);case"Integer":return yield*m(_,j,y);case"Intersect":return yield*g(_,j,y);case"Iterator":return yield*C(_,j,y);case"Literal":return yield*D(_,j,y);case"Never":return yield*k();case"Not":return yield*A(_,j,y);case"Null":return yield*I(_,j,y);case"Number":return yield*U(_,j,y);case"Object":return yield*W(_,j,y);case"Promise":return yield*G(_,j,y);case"Record":return yield*Oe(_,j,y);case"Ref":return yield*vt(_,j,y);case"RegExp":return yield*Qe(_,j,y);case"String":return yield*St(_,j,y);case"Symbol":return yield*bn(_,j,y);case"TemplateLiteral":return yield*Tn(_,j,y);case"This":return yield*Vi(_,j,y);case"Tuple":return yield*gl(_,j,y);case"Undefined":return yield*Jo(_,j,y);case"Union":return yield*pu(_,j,y);case"Uint8Array":return yield*Mn(_,j,y);case"Unknown":return yield*gu();case"Void":return yield*yl(_,j,y);default:if(!ki(_[T]))throw new X6(p);return yield*yu(_,j,y)}}const We={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function en(p,B,y,z=!0){return`(${[...$n(p,B,y,z)].join(" && ")})`}function Wi(p){return`check_${zc.Encode(p)}`}function Mr(p){const B=`local_${We.variables.size}`;return We.variables.set(B,`const ${B} = ${p}`),B}function ai(p,B,y,z,j=!0){const[_,we]=[`
`,Hn=>"".padStart(Hn," ")],Rt=wu("value","any"),ur=zd("boolean"),Pn=[...$n(B,y,z,j)].map(Hn=>`${we(4)}${Hn}`).join(` &&${_}`);return`function ${p}(${Rt})${ur} {${_}${we(2)}return (${_}${Pn}${_}${we(2)})
}`}function wu(p,B){const y=We.language==="typescript"?`: ${B}`:"";return`${p}${y}`}function zd(p){return We.language==="typescript"?`: ${p}`:""}function zw(p,B,y){const z=ai("check",p,B,"value"),j=wu("value","any"),_=zd("boolean"),we=[...We.functions.values()],Rt=[...We.variables.values()],ur=an(p.$id)?`return function check(${j})${_} {
  return ${Wi(p.$id)}(value)
}`:`return ${z}`;return[...Rt,...we,ur].join(`
`)}function Kd(...p){const B={language:"javascript"},[y,z,j]=p.length===2&&mn(p[1])?[p[0],p[1],B]:p.length===2&&!mn(p[1])?[p[0],[],p[1]]:p.length===3?[p[0],p[1],p[2]]:p.length===1?[p[0],[],B]:[null,[],B];if(We.language=j.language,We.variables.clear(),We.functions.clear(),We.instances.clear(),!ke(y))throw new p0(y);for(const _ of z)if(!ke(_))throw new p0(_);return zw(y,z)}e.Code=Kd;function Kw(p,B=[]){const y=Kd(p,B,{language:"javascript"}),z=globalThis.Function("kind","format","hash",y),j=new Map(We.instances);function _(Pn,Hn,bu){if(!ki(Pn)||!j.has(Hn))return!1;const Zw=sd(Pn),Gw=j.get(Hn);return Zw(Gw,bu)}function we(Pn,Hn){return rd(Pn)?id(Pn)(Hn):!1}function Rt(Pn){return Sd(Pn)}const ur=z(_,we,Rt);return new H6(p,B,ur,y)}e.Compile=Kw})($s||($s={}));const Zc={};function Z1(e,t){e in Zc||(Zc[e]=t)}let g0=!1;function Q6(){g0||(g0=!0,xk(e=>(Zc[e.schema[T]]||_1)(e)))}const Gc=Symbol.for("object-shape-tester.shape-identifier");function _e(e){if(Q6(),Id(e))return e;const t=Yc(e),n=wi(t,!1),r=wi(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:$s.Compile(t),$_compiledSchemaNoExtraKeys:$s.Compile(n),$_compiledSchemaExtraKeys:$s.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[Gc]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Id(e){return S.hasKey(e,Gc)&&!!e[Gc]}function Nd(e){return S.hasKey(e,T)}function wi(e,t){const n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(r=>wi(r,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(r=>wi(r,t))),Nd(e.items)?n.items=wi(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(r=>wi(r,t))),S.isObject(e.properties)){const r={};Object.entries(e.properties).forEach(([i,o])=>{r[i]=wi(o,t)}),n.properties=r}return n.additionalProperties=t,n}function Yc(e){if(Nd(e))return e;if(Id(e))return e.$_schema;if(S.isFunction(e))return Ae.Function([],Ae.Any(),{default:e});if(S.isObject(e)){const t={},n={};return Object.entries(e).forEach(([r,i])=>{const o=Yc(i);n[r]=o,t[r]=o.default}),Ae.Object(n,{default:t})}else{if(S.isArray(e))return Ae.Array(Ae.Union(e.map(t=>Yc(t))),{default:[]});if(S.isPrimitive(e)){if(S.isString(e))return Ae.String({default:e});if(S.isNumber(e))return Ae.Number({default:e});if(S.isBoolean(e))return Ae.Boolean({default:e});if(S.isSymbol(e))return Ae.Symbol({default:e});if(S.isNull(e))return Ae.Null({default:null});if(S.isUndefined(e))return Ae.Undefined({default:void 0});if(S.isBigInt(e))return Ae.BigInt({default:e});rr.tsType(e).equals(),rr.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${h(e)}`)}}function Jc(e,t){const n=Ln(e);return _e(Ae.Union(n.map(r=>Ae.Literal(r)),{default:n[0]}))}function e8(e){return S.isSymbol(e)?t8(e):_e(Ae.Const(e,{default:e}))}const Ru="ExactSymbol";function t8(e){return ki(Ru)||u1(Ru,(t,n)=>n===t.symbol),Z1(Ru,({schema:t})=>`Expected symbol ${t.symbol?.description?Gv({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),_e(Ae.Unsafe({[T]:Ru,symbol:e,default:e}))}function ft(e,t={}){je.ExactOptionalPropertyTypes=!0;const n=_e(e).$_schema,r=t.alsoUndefined?Ae.Union([Ae.Undefined(),n]):n;return _e(Ae.Optional(r))}function Nt(...e){let t;const n=e.map((r,i)=>{const o=_e(r);return i||(t=o.default),o.$_schema});return _e(Ae.Union(n,{default:t}))}class n8 extends TypeError{value;errors;failureMessage;name="ShapeMismatchError";constructor(t,n,r){const i=n.map(s=>G1(s)).join(`
`),o=ka(r,`Shape mismatch:
${bf(i,1)}`);super(o),this.value=t,this.errors=n,this.failureMessage=r}}function r8(e){return e.errors.flatMap(t=>Array.from(t))}function G1(e,t=0){const n=r8(e).map(i=>G1(i,t+1)),r=[e.path,e.message].filter(S.isTruthy).join(": ")+(n.length?":":"");return[bf(r,t),...n].join(`
`)}function vi(e,t,n={}){return Y1(t,n).Check(e)}function i8(e,t,n={},r){if(vi(e,t,n))return;const i=Array.from(Y1(t,n).Errors(e));if(i.length)throw new n8(e,i,r)}function Y1(e,t){return e=o8(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function o8(e){return _e(e)}const Hu="recordShape";function Td({keys:e,values:t,partial:n,additionalProperties:r}){s8();const i=J1(e),o=_e(t);return Ae.Unsafe({[T]:Hu,keysShape:i,valuesShape:o,isPartial:!!n,additionalProperties:!!r,default:u8({isPartial:!!n,keysShape:i,valuesShape:o})})}function s8(){ki(Hu)||u1(Hu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const n=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:vi(i,e.keysShape),u=vi(o,e.valuesShape);return s&&u}),r=e.isPartial?!0:!y0(e.keysShape,t).length;return n&&r}),Z1(Hu,e=>{const n=e.schema,r=e.value;if(typeof r!="object"||!r||Array.isArray(r))return"Expected an object";const i=Ni(Object.entries(r),([a])=>a,(a,[l,c])=>!vi(l,n.keysShape)||!vi(c,n.valuesShape)),o=y0(n.keysShape,r),s=i.length?["Failure at keys",i.join(",")].join(": "):"",u=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,u].filter(S.isTruthy).join(`
`)})}function y0(e,t){const n=Da(e).filter(r=>S.isPropertyKey(r));return n.length?n.filter(r=>!S.hasKey(t,r)):[]}function u8({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{const r=Da(e),i=t.default;return Object.fromEntries(r.map(o=>[o,i]))}}function J1(e){return Id(e)?e:Nd(e)?_e(e):S.isObject(e)?Jc(e):S.isArray(e)&&S.isLengthAtLeast(e,1)?Nt(...e.map(t=>e8(t))):S.isPropertyKey(e)?_e(e):_e(Ae.Undefined())}function Da(e){const t=e.$_schema,n=t[T].toLowerCase();return["const","literal"].includes(n)?[t.const]:n==="union"?K0(t.anyOf.flatMap(r=>Da(_e(r)))):["undefined","number","string","symbol"].includes(n)?[]:Da(J1(e.default))}function a8(e){return _e(Ae.Unknown({default:e}))}const l8=_e({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:a8()});function Ql(e){return vi(e,l8,{allowExtraKeys:!0})}class H1 extends NE{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||TE}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:c8}=ED,w0=()=>document.createComment(""),us=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=r.insertBefore(w0(),i),s=r.insertBefore(w0(),i);n=new c8(o,s,e,e.options)}else{const o=n._$AB.nextSibling,s=n._$AM,u=s!==e;if(u){let a;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(a=e._$AU)!==s._$AU&&n._$AP(a)}if(o!==i||u){let a=n._$AA;for(;a!==o;){const l=a.nextSibling;r.insertBefore(a,i),a=l}}}return n},pi=(e,t,n=e)=>(e._$AI(t,n),e),f8={},d8=(e,t=f8)=>e._$AH=t,m8=e=>e._$AH,ec=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Md={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Nr=e=>(...t)=>({_$litDirective$:e,values:t});class Tr{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h8={attribute:!0,type:String,converter:ca,reflect:!1,hasChanged:Tf},p8=(e=h8,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(u){const a=t.get.call(this);t.set.call(this,u),this.requestUpdate(s,a,e)},init(u){return u!==void 0&&this.C(s,void 0,e,u),u}}}if(r==="setter"){const{name:s}=n;return function(u){const a=this[s];t.call(this,u),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+r)};function g8(e){return(t,n)=>typeof n=="object"?p8(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=Nr(class extends Tr{constructor(e){if(super(e),e.type!==Md.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return cn}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=e=>e??ue;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y8(e,t,n){return e?t(e):n?.(e)}class w8 extends ws{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function b8(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(u=>!!u.index).length;if(r||i)return[...e];const o=e.map(u=>[u]);return o.length||(o[0]=[]),n.forEach(u=>{u>=0&&u<e.length&&(o[u]=[])}),t.forEach(u=>{const a=o[u.index];a&&a.splice(0,0,...u.values)}),o.flat()}function Hc(e){return S.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Pd(e){return S.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function X1(e){return Ni(e,t=>{if(Hc(t))return t.definition;if(Pd(t))return t.tagInterpolationKey||t},S.isTruthy)}const Q1=new WeakMap;function $8(e,t){const n=X1(t);return ew(Q1,[e,...n]).value?.template}function v8(e,t,n){const r=X1(t);return nw(Q1,[e,...r],n)}function ew(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=tw(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?ew(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function tw(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function nw(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=tw(e,t,r);if(!o)return{result:!1,reason:s};const u=i??{nested:void 0,template:void 0};if(i||e.set(o,u),r===t.length-1)return u.template=n,{result:!0,reason:"set value at end of keys array"};const a=u.nested??new WeakMap;return u.nested||(u.nested=a),nw(a,t,n,r+1)}function rw(e,t,n){const r=$8(e,t),i=r??n();if(!r){const u=v8(e,t,i);if(!u.result)throw new Error(`Failed to set template transform: ${u.reason}`)}const o=i.valuesTransform(t),s=b8(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function iw(e,t,n,r){const i=[],o=[],s=[],u=[];return e.forEach((l,c)=>{const f=i.length-1,m=i[f],g=c-1,C=t[g];r&&r(l);let D,k=[];if(typeof m=="string"&&(D=n(m,l,C),D)){i[f]=[m,D.replacement].join(""),s.push(g);const I=D.getExtraValues;k=I?I(C):[],k.length&&I?(i[f]+=" ",k.forEach((U,W)=>{W&&i.push(" ")}),u.push(U=>{const W=U[g],G=I(W);return{index:g,values:G}}),i.push(l)):i[f]+=l}D||i.push(l);const A=e.raw[c];D?(o[f]=[o[f],D.replacement,A].join(""),k.length&&k.forEach(()=>{o.push("")})):o.push(A)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=u.flatMap(f=>f(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function D8(...[e,t,n]){if(Pd(n))return{replacement:n.tagName,getExtraValues:void 0}}function E8(e,t){return iw(e,t,D8)}function x(e,...t){const n=rw(e,t,()=>E8(e,t));return Gu(n.strings,...n.values)}const C8={allowPolymorphicState:!1,errorHandler:void 0};function ow(e,t){const n=e.instanceState;Fe(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&Fe(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}class x8 extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function Od(){return e=>class extends x8{static type=e;_type=e;constructor(t){super(e,t)}}}function pt(){return Od()}function A8(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=Od()([e,r].join("-"));return n[r]=i,n},{}):{}}function F8(e){return e?ln(e,t=>t):{}}function sw(e,t){t in e||g8()(e,t)}function k8(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function b0(e,t){const n=e;function r(s){t?k8(s,e,e.tagName):sw(e,s)}function i(s,u){return r(u),n[u]}return new Proxy({},{get:i,set(s,u,a){r(u);const l=n[u];function c(m){s[u]=m,n[u]=m}const f=e.observablePropertyListenerMap[u];if(l!==a&&Ql(l)&&f&&l.removeListener(f),Ql(a))if(f)a.listen(!1,f);else{let m=function(){e.requestUpdate()};e.observablePropertyListenerMap[u]=m,a.listen(!1,m)}else Ql(l)&&(e.observablePropertyListenerMap[u]=void 0);return c(a),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,u){if(u in s)return{get value(){return i(s,u)},configurable:!0,enumerable:!0}},has(s,u){return Reflect.has(s,u)}})}function $0(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid element string name '${r}' in '${e}': element string names must begin with the element's tag name.`)})}function v0(e,t,n){return n?wv(n,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function S8({hostClassNames:e,cssVars:t}){return{hostClasses:ln(e,(n,r)=>({name:Ze(r),selector:Ze(`:host(.${r})`)})),cssVars:t}}function I8({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&Fe(t).forEach(o=>{const s=t[o],u=n[o];typeof s=="function"&&(s({state:r,inputs:i})?e.classList.add(u):e.classList.remove(u))})}function N8({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function o(u){Fe(u).forEach(a=>{const l=u[a];e.instanceState[a]=l})}return{cssVars:n,slotNames:r,testIds:i,dispatch:u=>e.dispatchEvent(u),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Bd(...e){return rr.isEmpty(e),t=>{const n=t;if(!S.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return T8({...n,options:{...n.options}})}}function T8(e){if(!S.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!S.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...C8,...e.options},n=A8(e.tagName,e.events),r=F8(e.hostClasses);e.hostClasses&&$0(e.tagName,e.hostClasses),e.cssVars&&$0(e.tagName,e.cssVars);const i=e.cssVars?kr(e.cssVars):{},o=v0(e.tagName,"slot",e.slotNames),s=v0(e.tagName,"test-id",e.testIds),u=typeof e.styles=="function"?e.styles(S8({hostClassNames:r,cssVars:i})):e.styles||x``,a=e.render;function l(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:f}}const c=class extends w8{static elementOptions=t;static tagName=e.tagName;static styles=u;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return N8({element:this,eventsMap:n,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=n;static render=a;static hostClasses=r;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const g=e.state(f);if(g instanceof Promise)throw new TypeError("init cannot be asynchronous");Fe(g).forEach(C=>{sw(this,C),this.instanceState[C]=g[C]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const m=a(f);if(m instanceof Promise)throw new TypeError("render cannot be asynchronous");return I8({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},m}catch(f){const m=cf(f,`Failed to render ${e.tagName}`);return console.error(m),this._lastRenderError=m,t.errorHandler?.(m),Yt(m)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{S.hasKey(f,"destroy")&&S.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){ow(this,f)}observablePropertyListenerMap={};instanceInputs=b0(this,!1);instanceState=b0(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:zv(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D0=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},M8=Nr(class extends Tr{constructor(e){if(super(e),e.type!==Md.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const u of e)i[s]=r?r(u,s):s,o[s]=n(u,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=m8(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const u=this.ut??=[],a=[];let l,c,f=0,m=i.length-1,g=0,C=o.length-1;for(;f<=m&&g<=C;)if(i[f]===null)f++;else if(i[m]===null)m--;else if(u[f]===s[g])a[g]=pi(i[f],o[g]),f++,g++;else if(u[m]===s[C])a[C]=pi(i[m],o[C]),m--,C--;else if(u[f]===s[C])a[C]=pi(i[f],o[C]),us(e,a[C+1],i[f]),f++,C--;else if(u[m]===s[g])a[g]=pi(i[m],o[g]),us(e,i[f],i[m]),m--,g++;else if(l===void 0&&(l=D0(s,g,C),c=D0(u,f,m)),l.has(u[f]))if(l.has(u[m])){const D=c.get(s[g]),k=D!==void 0?i[D]:null;if(k===null){const A=us(e,i[f]);pi(A,o[g]),a[g]=A}else a[g]=pi(k,o[g]),us(e,i[f],k),i[D]=null;g++}else ec(i[m]),m--;else ec(i[f]),f++;for(;g<=C;){const D=us(e,a[C+1]);pi(D,o[g]),a[g++]=D}for(;f<=m;){const D=i[f++];D!==null&&ec(D)}return this.ut=s,d8(e,a),cn}}),P8=M8;function mu(e,t){return Vs(e,t),e.element}function O8(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Vs(e,t){const n=O8(e),r=n?`: in ${n}`:"";if(e.type!==Md.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function B8(e,t){return Nr(class extends Tr{element;constructor(n){super(n),this.element=xi.instanceOf(mu(n,e),HTMLElement)}render(...n){return t({params:n,directive:this,element:this.element}),cn}})}const Di=B8("attributes",({element:e,params:[t],directive:n})=>{if(!t)return;const i=Hs(n,"allAttributesApplied",()=>new Set);Fe(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===ue?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function R8(e){const t=Nr(class extends Tr{element;constructor(n){super(n),this.element=mu(n,e)}render(n){return this.element.setAttribute(e,n),cn}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function q(e,t){return L8(e,t)}const L8=Nr(class extends Tr{element;lastListenerMetaData;constructor(e){super(e),this.element=mu(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),cn}});function U8(e){return q("keydown",async t=>{const n=t.code.toLowerCase();(n.includes("enter")||n.includes("return")||n==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const E0="onDomCreated",Ea=Nr(class extends Tr{element;constructor(e){super(e),Vs(e,E0)}update(e,[t]){Vs(e,E0);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),C0="onResize",uw=Nr(class extends Tr{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&j8(this.element,this.callback,e)});callback;constructor(e){super(e),Vs(e,C0)}update(e,[t]){Vs(e,C0),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function j8(e,t,n){const r=n[0];if(!r)throw console.error(n),new Error("Resize observation triggered but the first entry was empty.");t({target:r.target,contentRect:r.contentRect},e)}function Kt(e,t,n){return y8(e,()=>t,()=>n)}const{attributeDirective:_8}=R8("data-test-id"),lo=_8;function aw(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return(...r)=>i=>(t(i),Bd(...r)(n(i)))}function V8(e,t){return W8(void 0,e)}const W8=Nr(class extends Tr{element;constructor(e){super(e),this.element=mu(e,"assign")}render(e,t){return ow(this.element,t),cn}}),q8={};function z8(e,t){return t.map((n,r)=>{const i=e[r],o=e[r+1];if(i&&o){const{shouldHaveTagNameHere:s}=lw(i,o);if(s&&S.isString(n))return{tagName:n,tagInterpolationKey:Hs(q8,n,()=>({tagName:n}))}}return n})}function lw(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function K8(...[e,t,n]){const r=Hc(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:o}=lw(e,t),s=Pd(r);if(s&&o&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!o||!s?void 0:{replacement:r.tagName,getExtraValues(a){const l=Hc(a)?a.inputs:void 0;return[i&&l?V8(l):void 0].filter(S.isTruthy)}}}function Z8(e){}function G8(e){return iw(e.strings,e.values,K8,Z8)}function w(e,...t){const n=z8(e,t),r=gD(e,...n),i=rw(e,n,()=>G8(r));return{...r,strings:i.strings,values:i.values}}function Xc(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if(!t?.length&&!n?.length)return"";const r=[...n||[],""],o=(t??[""]).map((s,u)=>{const a=Y8(s,r[u]);return`${s}${a}`});return Wg(o.join(""))}function Y8(e,t){return t._$litType$!=null||t._$litDirective$!=null?Xc(t):Array.isArray(t)?t.map(r=>Xc(r)).join(""):e.endsWith("=")?`"${t}"`:t}function cw(e){return ln(e,(t,n)=>n instanceof ye?Ze(n.toString({format:"hex"})):cw(n))}const J8="dodgerblue";function Qc(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function tc({background:e,foreground:t}){return{background:e??new ye(Qc(t)),foreground:t??new ye(Qc(e))}}var Ca;(function(e){e.Dark="dark",e.Light="light"})(Ca||(Ca={}));function H8(e){return e==="black"?"white":"black"}const X8={black:{foregroundFaint1:new ye("#ccc"),foregroundFaint2:new ye("#eee")},white:{foregroundFaint1:new ye("#ccc"),foregroundFaint2:new ye("#eee")}},Q8={black:{backgroundFaint1:new ye("#666"),backgroundFaint2:new ye("#444")},white:{backgroundFaint1:new ye("#ccc"),backgroundFaint2:new ye("#fafafa")}};function x0({themeColor:e=J8,themeStyle:t=Ca.Light}={}){const n=new ye(e),r=new ye(t===Ca.Dark?"black":"white"),i=Qc(r),o=new ye(i),s={nav:{hover:tc({background:n.clone().set({"hsl.l":93})}),active:tc({background:n.clone().set({"hsl.l":90})}),selected:tc({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...Q8[H8(i)],foreground:o,...X8[i]}};return cw(s)}var er;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(er||(er={}));async function ef(e=1){const t=new ep;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function eS(e,t){return{element:e,children:fw(e)}}function fw(e,t,n){return tS(e).map(r=>{const i=fw(r);return{element:r,children:i}})}function tS(e){return[...e.children,...e.shadowRoot?.children??[]]}function nc(e){return e.matches(":focus")}function Rd(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Rd(t)}function dw(e,t){if(t(e))return e;const n=Rd(e);if(n)return dw(n,t)}async function nS(e){return rS(e,1)}async function rS(e,t){return new Promise(n=>{new IntersectionObserver((i,o)=>{rr.isLengthAtLeast(i,1),o.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function no(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,o=r?.constructor.name,s=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return r}function iS(e){const t=Rd(e);return t&&dw(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}function oS({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,u=0;s<r;s++){const a=o.codePointAt(s);for(;u<n;)if(i.codePointAt(u++)===a)continue e;return!1}return!0}const sS=Bg(32);function Xu(e){return e.join(sS)}function mw(e){if(!e.length)return[];const t=Xu(e),n=mw(e.slice(0,-1));return[t,...n]}const uS=["error","errors"];function aS(e){return uS.includes(e)}function lS({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(s=>(r(s),Xu(s.fullUrlBreadcrumbs))).forEach(s=>n[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&aS(t),s=Xu(i.fullUrlBreadcrumbs);if(oS({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(a=>S.isString(a)?a:Xc(a))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||n[s]){const a=mw(i.fullUrlBreadcrumbs);r(i),a.forEach(l=>n[l]=!0)}else n[s]=!1}),e.filter(i=>{const o=Xu(i.fullUrlBreadcrumbs),s=n[o];if(!S.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Ld extends Error{name="SpaRouterError"}class A0 extends Ld{name="GlobalUrlEventsConsolidationError"}class cS extends Ld{name="SanitizationDepthMaxed"}_e({paths:[""],search:ft(Nt(void 0,Td({keys:"",values:[""]}))),hash:ft(Nt(void 0,""))});const fS=_e({basePath:ft("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:ft(1,{alsoUndefined:!0}),disableWarnings:ft(!1,{alsoUndefined:!0}),isPaused:ft(!1,{alsoUndefined:!0})}),rc="://";function Ud(...e){const t=e.join("/"),[n,r=""]=t.includes(rc)?t.split(rc):["",t];let i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").reduce((s,u,a,l)=>{if(i)return s;const c=l[a+1];let f=u;const m=c?.startsWith("?"),g=!u.includes("?")&&m,C=c==="?";if(m||g){i=!0;let D=!1;const k=l.slice(a+2).reduce((A,I)=>(I.includes("#")&&(D=!0),D?A.concat(I):[A,I].join("&")),"");f=[u,c,C?uo({value:k,prefix:"&"}):k].join("")}return s.concat(f)},[]);return[n,n?rc:"",o.join("/")].join("")}var So;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(So||(So={}));var Io;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Io||(Io={}));const dS=_e({encoding:ft(Nt(void 0,Jc(So))),searchParamStrategy:ft(Nt(void 0,Jc(Io)))});function Lu(e,t){return e.map(n=>{if(n!=null)return co(String(n),t)}).filter(n=>n!=null)}function co(e,t){return t?.encoding===So.Decode?decodeURIComponent(e):t?.encoding===So.Encode?encodeURIComponent(e):e}const mS=_e(Td({keys:"",values:[""]}));function hS(e,t,n){const r=n?.searchParamStrategy===Io.Clear?{}:ln(e,(s,u)=>bv(u)),i=ln(t,(s,u)=>{if(n?.searchParamStrategy===Io.Append){const a=r[s],l=S.isArray(a)?a:[a];if(u){const c=S.isArray(u)?u:[u];return Lu([...l,...c],n)}else return Lu(l,n)}else return S.isArray(u)?Lu(u,n):u?Lu([u],n):void 0});return Cf({...r,...i},(s,u)=>!!u)}function hw(e,t){return S.isString(e)&&!e.includes("?")?{}:(S.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...u]=Uv(o,"=");return[s,u.length?u.join("="):void 0]}).reduce((o,[s,u])=>{const a=pw({options:t,key:s,value:u}),l=Hs(o,a.key,()=>[]);return u!=null&&l.push(a.value),o},{})}function pS(e){if(e!=null)return S.isArray(e)?[...e]:e===""?[]:[e]}function gS(e,t){const n=Ni(Object.entries(e),([r,i])=>{const o=pS(i);return o?.length?o.map(s=>{const u=pw({options:t,key:r,value:s});return[u.key,u.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?Gt({value:n.join("&"),prefix:"?"}):""}function pw({options:e,key:t,value:n}){return{key:co(t,e),value:co(String(n),e)}}function gw({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:o,search:s,username:u}){return[o?o+"://":"",u?u+":":"",n?n+"@":"",dl({hostname:t,port:i}),jd({hash:e,pathname:r,search:s})].join("")}function yw({pathname:e}){const t=uo({value:e,prefix:"/"});return t?t.split("/"):[]}function jd({hash:e,pathname:t,search:n}){return[Gt({value:t,prefix:"/"}),n?Gt({value:n,prefix:"?"}):"",e?Gt({value:e,prefix:"#"}):""].join("")}function dl({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function ww({hostname:e,port:t,protocol:n}){return[n,dl({hostname:e,port:t})].filter(S.isTruthy).join("://")}function fo(e,t){const n=S.isString(e)?uo({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?Gt({value:co(r,t),prefix:"#"}):"",o=n.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),u=s?Gt({value:co(s,t),prefix:"?"}):"",a=o.replace(/\?[^?]*$/,""),l=a.includes("://")?a.replace(/:\/\/.*$/,""):"",c=a.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),m=c.replace(/^[^@]*@/,""),g=f!==m,[C,...D]=g?f.split(":").reverse():[],k=D.toReversed().join("").replace(/[/:]/g,"")||"",A=C?.replace(/[/:]/g,"")||"",I=Lv(m.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),U=I[0]?.endsWith("]")?"":I[1]===":"&&I[0]||"",G=m.replace(new RegExp(`:${U}($|/)`),"$1").replace(/\/.*/,""),Oe=m.replace(/^[^/]*(\/|$)/,"$1"),vt=co(Oe.replace(/^[^/]*(?:\/|$)/,"/"),t),Qe=dl({hostname:G,port:U}),St=ww({hostname:G,port:U,protocol:l}),bn=gw({hash:i,hostname:G,password:A,pathname:vt,port:U,protocol:l,search:u,username:k}),Tn=hw(u),Vi=yw({pathname:vt});return{fullPath:jd({hash:i,pathname:vt,search:u}),hash:i,host:Qe,hostname:G,href:bn,origin:St,password:A,pathname:vt,paths:Vi,port:U,protocol:l,search:u,searchParams:Tn,username:k}}_e({hash:ft(Nt(void 0,"")),search:ft(Nt(void 0,"",Td({keys:"",values:Nt(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:ft(Nt(void 0,"")),pathname:ft(Nt(void 0,"")),paths:ft(Nt(void 0,[""])),protocol:ft(Nt(void 0,"")),username:ft(Nt(void 0,"")),password:ft(Nt(void 0,"")),port:ft(Nt(void 0,"",-1))});function yS(e,t,n){const r=!!n,i=t==null||vi(t,dS,{allowExtraKeys:!1}),o=i?fo(""):S.instanceOf(e,URL)||S.isString(e)?fo(e):e,s=i?e:t,u=S.isString(s)&&s.startsWith("."),a=S.isString(s)||S.instanceOf(s,URL)?Cf(fo(s),(D,k)=>S.isTruthy(k)):s,l=r?n:i?t:void 0,c=ln(o,(D,k)=>{if(!S.hasKey(a,D))return k;const A=a[D];return S.isNumber(A)?String(A):S.isString(A)?D==="hash"&&A?Gt({value:A,prefix:"#"}):D==="pathname"?Gt({value:A,prefix:"/"}):A:k});S.hasKey(a,"paths")&&a.paths&&(c.pathname=Ud(u?o.pathname:"",...a.paths));const f=S.isString(a.search)?hw(Gt({value:a.search,prefix:"?"})):vv(a.search||{}),m=hS(c.searchParams,f,{...l,encoding:So.None}),g=gS(m,l);return{...c,searchParams:m,search:g,paths:yw(c),fullPath:jd(c),host:dl(c),origin:ww(c),href:gw({...c,search:g})}}const wS=_e({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:mS,hash:"",fullPath:"/",href:"/"});({...wS.default});const bS=0;function bw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==bS)}const ml="locationchange",br=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const F0=br?.pushState;function k0(...e){if(!F0)return;const t=F0.apply(br,e);return globalThis.dispatchEvent(new Event(ml)),t}const S0=br?.replaceState;function I0(...e){if(!S0)return;const t=S0.apply(br,e);return globalThis.dispatchEvent(new Event(ml)),t}function $S(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!br)){{if(br.pushState===k0)throw new A0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(br.replaceState===I0)throw new A0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,br.pushState=k0,br.replaceState=I0,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ml))})}}function Uu(e,t){const n=fo(e),r=uo({value:uo({value:n.pathname,prefix:Gt({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],o=Object.keys(n.searchParams).length?n.searchParams:void 0,s=n.hash?uo({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class _d{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){i8(t,fS),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new H1({defaultValue:n,equalityCheck:()=>!1}),$S(),this.removeGlobalListener=zg(globalThis,ml,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new cS("Looping route sanitization detected; aborting window URL change listener.");const r=Uu(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);S.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Ud(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Uu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Uu(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),o=this.routeIncludesBasePath(Uu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return yS(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Gt({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Io.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=fo(r);return this.params.isPaused||!n.force&&S.jsonEquals(fo(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return bw(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new Ld(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function vS(e){return new _d({basePath:e,sanitizeRoute(t){return{paths:DS(t.paths),hash:void 0,search:void 0}}})}function DS(e){const t=e[0];if(S.isEnumValue(t,Vt)){if(t===Vt.Book)return[Vt.Book,...e.slice(1)];if(t===Vt.Search)return e[1]?[t,e[1]]:[Vt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return yo.paths}const xa=Od()("element-book-change-route"),N0="vira-",kt=aw({assertInputs:e=>{if(!e.tagName.startsWith(N0))throw new Error(`Tag name should start with '${N0}' but got '${e.tagName}'`)}});function ES(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given: ${Zv(n)}`)}function CS(e,t=[],n=!1){return n?t.includes(e.id)?t.filter(r=>r!==e.id):[...t,e.id]:[e.id]}function T0({open:e,callback:t,popUpManager:n,host:r}){if(e){const i=n.showPopUp(r);t?.(i)}else n.removePopUp(),t?.(void 0)}const b=kr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"}),xS=ye;function AS(e){try{if(!e)throw new Error("invalid empty color");return new xS(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function ae({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function M0(e,t){const n=Fe(t).map(r=>{const i=t[r],o=AS(i);return`${b[r].name}: ${o.toString()};`}).join(" ");return ae({name:e.name,svgTemplate:w`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const Vd=ae({name:"Check24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),nr=kr({"vira-form-input-radius":"8px"}),hu=x`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Cr=kr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),No=kr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":x`calc(${nr["vira-form-input-radius"].value} + 4px)`});function hl({elementBorderSize:e,outlineGap:t=2,outlineWidth:n=2,noNesting:r}){const i=Ze(jg(n+t+e)),o=x`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${n}px solid ${No["vira-focus-outline-color"].value};
        border-radius: ${No["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return r?o:x`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const Zt=kr({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#d2eaff","vira-form-selection-active-foreground-color":"black"}),$w=x`
    padding: 0;
    margin: 0;
`,Xn=x`
    ${$w};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,ic=kr({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#bfbfbf"}),mo={menuShadow:x`
        filter: drop-shadow(0px 5px 5px ${ic["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:x`
        filter: drop-shadow(0px -5px 5px ${ic["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:x`
        box-shadow: 0 20px 60px ${ic["modal-shadow-color"].value};
    `},To=x`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,V=kt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>x`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),rn=kt()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            ${To};
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
    `,render({inputs:e}){return w`
            <div class="item">
                <${V.assign({icon:Vd})}></${V}>
                <slot>${e.label}</slot>
            </div>
        `}});function FS(e,t){return e>t}function kS(e,t){return e<t}function Ws(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var tr;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(tr||(tr={}));var fe;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(fe||(fe={}));function pl(e){const t={x:-1,y:-1};let n;for(;t.y<e.length-1&&!n;){t.y++;const r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;const i=r[t.x];if(i)if(i.navEntry.navParams.group){const o=pl(i.children);o&&(n=o.node)}else i.navEntry.navParams.disabled||(n=i)}}if(n)return{node:n,coords:t}}function P0(e,t,n,r){if(!t){const a=pl(e.children);return a?(Ws(a.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.node.element,coords:a.coords,direction:n,navAction:fe.Navigate}):{success:!1,reason:"no default element to focus",direction:n,navAction:fe.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=vw(t.position,n),u=r?!0:!o;return i&&u?(Ws(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:n,navAction:fe.Navigate,coords:s}):i?u?{success:!1,reason:"no conditions matched",direction:n,navAction:fe.Navigate}:{success:!1,reason:"wrapping blocked",direction:n,navAction:fe.Navigate}:{success:!1,reason:"failed to find node to focus",direction:n,navAction:fe.Navigate}}function vw(e,t){let n=!1,r,i=1;const o=Date.now();for(;!n||!r;)if(r=SS(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return Ov.warning("Failed to find next non-disabled node."),r;return r}function SS(e,t,n){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;rr.isDefined(r,"missing parent");const i=xi.isDefined(r.children[e.nodeCoords.y]),o=r.children.length>1&&(t===tr.Down||t===tr.Up),s=t===tr.Down||t===tr.Right?n:-1*n,u=s<0?FS:kS,a=o?Zm(e.nodeCoords.y+s,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=xi.isDefined(r.children[a]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:Zm(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=r.children[a]?.[c],m=o?u(a,e.nodeCoords.y):u(c,e.nodeCoords.x);return{nextNode:f,requiresWrapping:m,coords:{x:c,y:a}}}function IS(e,t,n){const r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:fe.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=vw(r,t),u=i?.navEntry.navParams.group?pl(i.children):{node:i,coords:s},a=n?!0:!o;return!u||!u.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:fe.Pibling}:a?(Ws(u.node.element),{success:!0,defaulted:!1,newElement:u.node.element,wrapped:o,coords:u.coords,direction:t,navAction:fe.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:fe.Pibling}}var Tt;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Tt||(Tt={}));const jn={name:"data-nav",js(e){return e?`[${jn.name}*="${e}"]`:`[${jn.name}]`},css({baseSelector:e="",navValue:t}={}){return x`
            ${Ze(e)}${Ze(jn.js(t))}
        `}},Wd="navEntry";function Dw(e){return Wd in e}function Ew(e){if(Dw(e)){const t=e[Wd];return xi.instanceOf(t,Cw,"Invalid nav entry")}else return}function NS(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Tt.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Cw{element;navParams;navTreeNode;navValue;eventListener=NS(this);constructor(t,n,r){this.element=t,this.navParams=r,this.attachListeners(),this.navController=n}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return rr.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(jn.name,""),nc(this.element)&&this.element.blur())}focus(t,n){const r=this.navValue,i=t===(r===Tt.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Tt.Focused),nc(this.element)||this.element.focus()):(this.removeNavValue(Tt.Focused),nc(this.element)&&this.element.blur()),n||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,fe.Focus)}activate(t){const n=this.navValue,r=t===(n===Tt.Active);if(!(this.navParams.group||this.navController.locked||r))return this.focus(t,!0),t?this.setNavValue(Tt.Active):this.setNavValue(Tt.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,fe.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(jn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(jn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function xw(e,t){Object.entries(t).forEach(([n,r])=>{S.isBoolean(r)&&r?e.setAttribute(n,""):S.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const TS=Nr(class extends Tr{element;lastKey;constructor(e){super(e),this.element=mu(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),cn}});function MS(e){return"group"in e?Tt.Group:e.disabled?Tt.Disabled:""}function O0(e,t={}){return TS(h(t),n=>{e.needsUpdate=!0;const r=!t.group&&!t.disabled;rr.instanceOf(n,HTMLElement);const i={[jn.name]:MS(t),tabindex:r?0:-1};xw(n,i);const o=Ew(n)||new Cw(n,e,t);Dw(n)?(o.navParams=t,o.navController=e):n[Wd]=o,r?n.style.setProperty("cursor","pointer"):n.style.removeProperty("cursor")})}function PS(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:fe.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:fe.Enter};const n=t.position.node.children[0]?.[0];return n?(Ws(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:fe.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:fe.Enter}}function OS(e,t){return Aw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Aw(e,t,n){for(let r=0;r<t.length;r++){const i=t[r];for(let o=0;o<i.length;o++){const s=i[o],u={ancestorChain:e,nodeCoords:{x:o,y:r},node:s};if(n(u))return u;const a=Aw(e.concat(u),s.children,n);if(a)return a}}}function Fw(e,t){const n=OS(e,({node:r})=>!r.root&&r.navEntry===t);if(!n)throw new Error("Failed to find NavEntry in NavTree.");return n}function BS(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:fe.Exit};const n=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:fe.Exit};const{nodeCoords:r}=Fw(e,n.navEntry);return Ws(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:fe.Exit,coords:r}}class RS extends Qr()("nav-exit"){}class kw extends Qr()("nav-activate"){}class LS extends Qr()("nav-focus"){}class US extends Qr()("nav-enter"){}class jS extends Qr()("nav-navigate"){}class _S extends Qr()("nav-navigate-pibling"){}function VS(e){return{root:!0,children:Sw(e)?.children||[]}}function Sw(e){const t=e.element;if(!(t instanceof HTMLElement))return;const n=Ew(t),r=WS(e);if((n?.navParams.group?!!r.length:!1)||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function WS(e){const t=[];function n(r){if(r.navEntry?.navParams.group&&!r.children.length)return;if(!r.navEntry){r.children.forEach(u=>u.forEach(a=>n(a)));return}const i=r.navEntry.navParams.x,o=r.navEntry.navParams.y||0,s=Hs(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(r):s.withX.push({x:i,node:r})}return e.children.forEach(r=>{const i=Sw(r);i&&n(i)}),t.sort((r,i)=>r.y-i.y).map(r=>(r.withX.sort((i,o)=>i.x-o.x),r.withX.forEach(({x:i,node:o})=>{r.noX.splice(i,0,o)}),r.noX)).filter(S.isTruthy)}class Iw extends xf{rootElement;options;constructor(t,n={}){super(),this.rootElement=t,this.options=n}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){pl(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,n,r){if(this.locked)return{success:!1,direction:void 0,navAction:r,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:r,reason:"No nav entry to operate on."};const i=Fw(this.getNavTree(),t);n?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:r,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===r&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:r,coords:i.nodeCoords};return n&&(r===fe.Activate?this.dispatch(new kw({detail:o})):r===fe.Focus&&this.dispatch(new LS({detail:o}))),o}navigate({direction:t,allowWrapping:n}){if(this.locked)return{success:!1,direction:t,navAction:fe.Navigate,reason:"NavController is locked."};const r=P0(this.getNavTree(),this.currentNavEntry,t,n);return this.dispatch(new jS({detail:r})),r}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:fe.Enter,reason:"NavController is locked."};const n=PS(this.getNavTree(),this.currentNavEntry);return!n.success&&t?this.activate():(this.dispatch(new US({detail:n})),n)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:fe.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:fe.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return rr.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:fe.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===fe.Activate&&this.currentNavEntry.entry.focus(!0);const t=BS(this.getNavTree(),this.currentNavEntry);return this.dispatch(new RS({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){if(this.locked)return{success:!1,direction:n,navAction:fe.Pibling,reason:"NavController is locked."};const r=this.getNavTree(),o={...this.currentNavEntry?IS(this.currentNavEntry,n,t):P0(r,void 0,n,t),navAction:fe.Pibling};return this.dispatch(new _S({detail:o})),o}buildNavTree(){const t=eS(this.rootElement),n=VS(t);return this.cachedNavTree=n,n}}const ro=kt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>x`
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
    `,render({inputs:e}){function t(n){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,n)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return w`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${Di(e.attributePassthrough?.a)}
                    style=${Wt(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return w`
                <a
                    href=${n}
                    rel="noopener noreferrer"
                    ${Di(e.attributePassthrough?.a)}
                    style=${Wt(e.stylePassthrough?.a)}
                    ${q("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),B0={item:"menu-item"},vs=kt()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Iw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>x`
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
            background-color: ${Zt["vira-form-background-color"].value};
            color: ${Zt["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Xn};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${jn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Tt.Focused})}, ${jn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Tt.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${Zt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${jn.css({baseSelector:".menu-item:not(.disabled)",navValue:Tt.Focused})},
                ${jn.css({baseSelector:".menu-item:not(.disabled)",navValue:Tt.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${Zt["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${rn} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${hu};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){ES(e.items);const n=e.items.map(r=>{const i=!!e.selected?.includes(r.id),o=S.isString(r.label)?w`
                      <${rn.assign({label:r.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${rn}>
                  `:r.label,s=r.disabled||!e.isMultiSelect&&i;return r.route?w`
                    <${ro.assign({route:r.route})}
                        class="menu-item ${yn({disabled:!!r.disabled,selected:i})}"
                        ${lo(B0.item)}
                        title=${Wt(r.titleText||void 0)}
                        role="option"
                        ${O0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${ro}>
                `:w`
                    <button
                        class="menu-item ${yn({disabled:!!r.disabled,selected:i})}"
                        ${lo(B0.item)}
                        title=${Wt(r.titleText||void 0)}
                        role="option"
                        ${O0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return w`
            ${n}
        `}});var qd=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(qd||{}),Aa=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Aa||{});const Ds=kt()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${nr["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Zt["vira-form-background-color"].value};
            border: 1px solid ${Zt["vira-form-border-color"].value};
            color: ${Zt["vira-form-foreground-color"].value};
            ${mo.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${mo.menuShadowReversed}
            border-radius: ${nr["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${nr["vira-form-input-radius"].value};
        }
    `,render(){return w`
            <slot></slot>
        `}}),ju=globalThis.document;class qS extends H1{constructor(){if(super({defaultValue:!!ju?.hidden,equalityCheck:S.strictEquals}),!ju)return;globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n,ju));const t=n=>this.updateVisibility(n,ju);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,n){const r=KS.includes(t.type),i=zS.includes(t.type),o=r?!0:i?!1:n.hasFocus()||!n.hidden;this.setValue(o)}}const zS=["blur","focusout","pagehide"],KS=["focus","focusin","pageshow"],ZS=new qS;function GS(e,t){return ZS.listen(e,t)}const R0={top:0,left:0,right:0,bottom:0};class Nw extends qg("hide-pop-up"){}class Tw extends Qr()("nav-select"){}class YS{constructor(t,n){this.navController=t,this.options={...this.options,...n}}listenTarget=new xf;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let n=!1;const r=new ResizeObserver(()=>{n?this.removePopUp():n=!0});r.observe(t),this.cleanupCallbacks=[()=>{r.disconnect()},GS(!1,i=>{i||this.removePopUp()}),this.navController.listen(kw,i=>{i.detail.success&&(this.listenTarget.dispatch(new Tw({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),Ac("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ac("keydown",i=>{const o=i.code;o==="Escape"?this.removePopUp():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:tr.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:tr.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:tr.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:tr.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Nw)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=iS(t);rr.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),u=i.offsetWidth-i.clientWidth,a=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-u,bottom:s.bottom-a},c=ln(R0,g=>o[g]),f=ln(R0,g=>{const C=l[g],D=c[g];return Math.abs(C-D)}),m=f.top>f.bottom+r.verticalDiffThreshold&&f.bottom<r.minDownSpace;return this.attachGlobalListeners(i),{popDown:!m,positions:{container:l,root:c,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Kr=(e=>(e.Left="left",e.Right="right",e.Both="both",e))(Kr||{});const de=kt()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new YS(new Iw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>x`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Xn};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${hl({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${To};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${hu}
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
    `,events:{navSelect:pt(),openChange:pt(),init:pt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:o}){e.popUpManager.listen(Nw,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!r.isDisabled){const s=n.shadowRoot.querySelector(".dropdown-wrapper");rr.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Tw,s=>{r.keepOpenAfterInteraction||T0({open:!1,callback(u){t({showPopUpResult:u})},host:n,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:o,slotNames:s}){function u({emitEvent:g,open:C},D){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&D){const k=o.shadowRoot.querySelector(".dropdown-trigger");if(k&&!D.composedPath().includes(k))return}T0({open:C,callback(k){i({showPopUpResult:k}),g&&e(new t.openChange(k))},host:o,popUpManager:n.popUpManager})}r.isDisabled?u({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?u({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&u({emitEvent:!1,open:!0},void 0));const a=r.horizontalAnchor==="right"&&n.showPopUpResult?x`
                      left: -${n.showPopUpResult.positions.diff.left}px;
                  `:x`
                      left: ${r.popUpOffset?.left||0}px;
                  `,l=n.showPopUpResult&&r.horizontalAnchor==="left"?x`
                      right: -${n.showPopUpResult.positions.diff.right}px;
                  `:x`
                      right: ${r.popUpOffset?.right||0}px;
                  `,c=x`
            ${a}
            ${l}
        `,f=n.showPopUpResult?n.showPopUpResult.popDown?x`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:x`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:void 0;function m(g){u({emitEvent:!0,open:!n.showPopUpResult},g)}return w`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${yn({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${q("keydown",g=>{!n.showPopUpResult&&g.code.startsWith("Arrow")&&u({emitEvent:!0,open:!0},g)})}
                ${q("click",g=>{g.detail===0&&m(g)})}
                ${q("mousedown",g=>{g.button===0&&m(g)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${yn({"right-aligned":r.horizontalAnchor==="right"})}"
                    style=${f}
                >
                    ${Kt(!!n.showPopUpResult,w`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),JS={menu:"menu-trigger-menu"},Wr=kt()({tagName:"vira-menu-trigger",styles:x`
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
    `,events:{itemActivate:pt(),openChange:pt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i}){return w`
            <${de.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||Kr.Left})}
                class=${yn({open:!!t.showPopUpResult})}
                ${q(de.events.init,o=>{n({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${q(de.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&r(new i.openChange(o.detail)),n({showPopUpResult:o.detail})})}
                ${q(de.events.navSelect,o=>{const s=o.detail.x,u=e.items[s];if(!u)throw new Error(`Found no dropdown option at index '${s}'`);r(new i.itemActivate(CS(u,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${de.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?w`
                          <${Ds.assign({direction:t.showPopUpResult.popDown?Aa.Downwards:Aa.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${de.slotNames.popUp}
                              class=${yn({"full-width-menu":e.horizontalAnchor===Kr.Both})}
                          >
                              <${vs.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${lo(JS.menu)}
                              ></${vs}>
                          </${Ds}>
                      `:ue}
            </${de}>
        `}}),Ne=kt()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>x`
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
    `,render({inputs:e}){return w`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var Mw=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Mw||{});const et=kt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>x`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${To};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${No["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${hu};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Xn};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${nr["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Cr["vira-interaction-animation-duration"].value},
                background-color
                    ${Cr["vira-interaction-animation-duration"].value},
                border-color ${Cr["vira-interaction-animation-duration"].value};

            ${hl({elementBorderSize:2})}
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
    `,render:({inputs:e})=>{const t=e.icon?w`
                  <${V.assign({icon:e.icon})}></${V}>
              `:ue,n=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:w`
                  <span class="empty-text">&nbsp;</span>
              `;return w`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}}),HS=ae({name:"Bell24Icon",svgTemplate:w`
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
    `}),XS=ae({name:"Chat24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Pw=ae({name:"ChevronUp24Icon",svgTemplate:w`
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
    `}),Ow=ae({name:"CloseX24Icon",svgTemplate:w`
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
    `}),QS=ae({name:"Commit24Icon",svgTemplate:w`
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
    `}),eI=ae({name:"Document24Icon",svgTemplate:w`
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
    `}),Bw=ae({name:"Element16Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Dr=ae({name:"Element24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),tI=ae({name:"ExternalLink24Icon",svgTemplate:w`
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
    `}),Rw=ae({name:"EyeClosed24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Lw=ae({name:"EyeOpen24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),nI=ae({name:"Link24Icon",svgTemplate:w`
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
        </svg>
    `}),Uw=ae({name:"Loader24Icon",svgTemplate:w`
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
    `}),rI=x`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Cr["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,qs=ae({name:"LoaderAnimated24Icon",svgTemplate:w`
        <style>
            ${rI}
        </style>
        ${Uw.svgTemplate}
    `}),iI=ae({name:"Lock24Icon",svgTemplate:w`
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
    `}),Es=ae({name:"Options24Icon",svgTemplate:w`
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
    `}),oI=ae({name:"Pencil24Icon",svgTemplate:w`
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
    `}),sI=ae({name:"Shield24Icon",svgTemplate:w`
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
    `}),uI=ae({name:"SpeakerLoud24Icon",svgTemplate:w`
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
    `}),aI=ae({name:"SpeakerMedium24Icon",svgTemplate:w`
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
    `}),lI=ae({name:"SpeakerMuted24Icon",svgTemplate:w`
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
    `}),cI=ae({name:"SpeakerQuiet24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),fI=ae({name:"Star24Icon",svgTemplate:w`
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
    `}),Fa=ae({name:"StatusFailure24Icon",svgTemplate:w`
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
    `}),dI=ae({name:"StatusInProgress24Icon",svgTemplate:w`
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
    `}),mI=ae({name:"StatusSuccess24Icon",svgTemplate:w`
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
    `}),hI=ae({name:"StatusUnknown24Icon",svgTemplate:w`
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
    `}),pI=ae({name:"StatusWarning24Icon",svgTemplate:w`
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
    `}),gI=ae({name:"Upload24Icon",svgTemplate:w`
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
    `}),jw=ae({name:"X24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            stroke-width=${b["vira-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    `}),tf={Bell24Icon:HS,Chat24Icon:XS,Check24Icon:Vd,ChevronUp24Icon:Pw,CloseX24Icon:Ow,Commit24Icon:QS,Document24Icon:eI,Element16Icon:Bw,Element24Icon:Dr,ExternalLink24Icon:tI,EyeClosed24Icon:Rw,EyeOpen24Icon:Lw,Link24Icon:nI,Loader24Icon:Uw,LoaderAnimated24Icon:qs,Lock24Icon:iI,Options24Icon:Es,Pencil24Icon:oI,Shield24Icon:sI,SpeakerLoud24Icon:uI,SpeakerMedium24Icon:aI,SpeakerMuted24Icon:lI,SpeakerQuiet24Icon:cI,Star24Icon:fI,StatusFailure24Icon:Fa,StatusInProgress24Icon:dI,StatusSuccess24Icon:mI,StatusUnknown24Icon:hI,StatusWarning24Icon:pI,Upload24Icon:gI,X24Icon:jw},Te=kt()({tagName:"vira-checkbox",styles:x`
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
            gap: 8px;

            &.disabled {
                cursor: not-allowed;
            }

            & .text {
                cursor: pointer;
                &::first-line {
                    line-height: 24px;
                }
            }
        }

        ${V} {
            ${b["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${Zt["vira-form-border-color"].value};
            color: ${Zt["vira-form-foreground-color"].value};
            border-radius: ${nr["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${hl({elementBorderSize:1})}

            &.checked {
                & ${V} {
                    opacity: 1;
                }
            }

            &:hover {
                background-color: ${Zt["vira-form-selection-hover-background-color"].value};
            }

            &:active {
                background-color: ${Zt["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${hu};
            }
        }
    `,events:{valueChange:pt()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}const i=e.label?w`
                  <span
                      class="text"
                      ${Di(e.attributePassthrough?.text)}
                      style=${Wt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:ue;return w`
            <label
                class=${yn({disabled:!!e.disabled})}
                ${Di(e.attributePassthrough?.label)}
                style=${Wt(e.stylePassthrough?.label)}
                ${q("click",r)}
            >
                <span
                    class="custom-checkbox ${yn({checked:e.value,disabled:!!e.disabled})}"
                    role="checkbox"
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Di(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Wt(e.stylePassthrough?.["custom-checkbox"])}
                    ${U8(r)}
                >
                    <${V.assign({icon:Vd,fitContainer:!0})}
                        ${Di(e.attributePassthrough?.[V.tagName])}
                        style=${Wt(e.stylePassthrough?.[V.tagName])}
                    ></${V}>
                </span>
                ${i}
            </label>
        `}}),cr=kt()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Xn};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Cr["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:pt()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:o}){const s=o.expanded?x`
                  height: ${e.contentHeight}px;
              `:x`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${q("click",()=>{r(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${uw(({contentRect:u})=>{n({contentHeight:u.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),oc={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},hs=kt()({tagName:"vira-dropdown",styles:x`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${Wr} {
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
                ${Cr["vira-interaction-animation-duration"].value} linear;
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
            ${To};
            border: 1px solid ${Zt["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${nr["vira-form-input-radius"].value};
            background-color: ${Zt["vira-form-background-color"].value};
            color: ${Zt["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:pt(),openChange:pt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:n,events:r,updateState:i}){const o=Ni(t.selected,c=>t.options.find(f=>f.id===c),S.isTruthy),s=t.icon?w`
                  <${V.assign({icon:t.icon})}
                      ${lo(oc.icon)}
                  ></${V}>
              `:ue,u=!o.length,a=t.selectionPrefix&&!u?w`
                      <span class="selected-label-prefix" ${lo(oc.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:ue,l=u?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return w`
            <${Wr.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||Kr.Both})}
                ${q(Wr.events.openChange,c=>{i({showPopUpResult:c.detail}),n(new r.openChange(c.detail))})}
                ${q(Wr.events.itemActivate,c=>{n(new r.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${yn({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${lo(oc.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${yn({"using-placeholder":u})}"
                        title=${Wt(u?void 0:l)}
                    >
                        ${a} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${V.assign({icon:Pw})}
                            class="trigger-icon"
                        ></${V}>
                    </span>
                </div>
            </${Wr}>
        `}}),Br=kt()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:pt(),imageError:pt()},styles:({hostClasses:e})=>x`
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
    `,render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:o}){const s=e.imageUrl,u=t.erroredUrls[s]?w`
                  <slot class="status-wrapper" name=${o.error}>
                      <${V.assign({icon:Fa})} class="error"></${V}>
                  </slot>
              `:t.loadedUrls[s]?void 0:w`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${V.assign({icon:qs})}></${V}>
                    </slot>
                `;return w`
            ${Kt(!!u,u)}
            <img
                class=${yn({hidden:!!u})}
                ${q("load",async()=>{e._debugLoadDelay&&await Fs(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[s]:!0}}),r(new i.imageLoad)})}
                ${q("error",async a=>{e._debugLoadDelay&&await Fs(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[s]:!0}}),r(new i.imageError(a.error))})}
                src=${s}
            />
        `}});function nf({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(n=>nf({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function yI({value:e,allowed:t,blocked:n}){const r=t?nf({input:e,matcher:t}):!0,i=n?nf({input:e,matcher:n}):!1;return r&&!i}function rf(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(yI({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function wI({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){const o=no(n,HTMLInputElement),s=S.hasKey(n,"data")&&mv.isString(n.data)||"";if(s){const{blocked:a}=rf({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});a.length&&r(a)}const u=rf({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==u&&(o.value=u),t!==u&&i(u)}var of=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(of||{});const Re=kt()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>x`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${hu};
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
                ${Xn};
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
                ${To};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Xn};
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
                border-radius: ${nr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Cr["vira-interaction-animation-duration"].value};
            }

            .input-wrapper {
                ${Xn};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${nr["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
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
                ${Xn};
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
                    ${hl({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${To};
            }

            button {
                ${Xn};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Cr["vira-interaction-animation-duration"].value};
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
        `,events:{valueChange:pt(),inputBlocked:pt()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:o})=>{const{filtered:s}=rf({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),u=e.icon?w`
                  <${V.assign({icon:e.icon})} class="left-side-icon"></${V}>
              `:ue,a=e.fitText?x`
                  width: ${n.forcedInputWidth}px;
              `:ue,l=e.disableBrowserHelps||e.type==="password";return w`
            <span
                class="input-wrapper"
                ${q("mousedown",c=>{const f=no(c,HTMLElement,{useOriginalTarget:!0}),m=xi.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);f!==m&&(c.preventDefault(),m.focus())})}
            >
                ${u}
                ${Kt(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${uw(({contentRect:c})=>{r({forcedInputWidth:c.width})})}
                        >
                            <pre>${s||e.placeholder||ue}</pre>
                        </span>
                    `)}

                <input
                    type=${bI(e.type,n.showPassword)}
                    style=${a}
                    autocomplete=${Wt(l?"off":void 0)}
                    autocorrect=${Wt(l?"off":void 0)}
                    autocapitalize=${Wt(l?"off":void 0)}
                    spellcheck=${Wt(l?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${q("input",c=>{wI({inputs:e,previousValue:s,event:c,inputBlockedCallback(f){t(new i.inputBlocked(f))},newValueCallback(f){t(new i.valueChange(f))}})})}
                    placeholder=${Wt(e.placeholder||void 0)}
                    ${Di(e.attributePassthrough)}
                />

                ${Kt(!!(e.showClearButton&&e.value),w`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${q("mousedown",c=>{c.stopImmediatePropagation(),c.preventDefault()})}
                            ${q("click",()=>{t(new i.valueChange(""))})}
                        >
                            <${V.assign({icon:Ow})}></${V}>
                        </button>
                    `)}
                ${Kt(e.type==="password",w`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${q("mousedown",c=>{c.stopImmediatePropagation(),c.preventDefault()})}
                            ${q("click",()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${V.assign({icon:n.showPassword?Lw:Rw})}></${V}>
                        </button>
                    `)}
                ${Kt(!!e.suffix,w`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `}});function bI(e,t){return e==="password"&&t?"text":e||"text"}const $I=["pagehide","pageshow","popstate"],fr=kt()({tagName:"vira-modal",events:{modalClose:pt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>x`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${$w};
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
            ${mo.modal}

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
                        ${Xn};
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
    `,render({inputs:e,state:t,updateState:n,events:r,dispatch:i,slotNames:o}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),n({previousOpenValue:e.open}),e.open)){const u=$I.map(a=>Ac(a,()=>{i(new r.modalClose)}));n({cleanup:()=>{u.forEach(a=>a())}})}function s(){e.open&&(t.cleanup?.(),i(new r.modalClose))}return w`
            <dialog
                ${Ea(u=>{n({dialogElement:xi.instanceOf(u,HTMLDialogElement)})})}
                ${q("close",()=>{s()})}
                ${q("click",u=>{t.contentElement&&!u.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Ea(u=>{n({contentElement:xi.instanceOf(u,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${o.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?w`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:ue}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${q("click",()=>{t.dialogElement?.close()})}
                        >
                            <${V.assign({icon:jw})}></${V}>
                        </button>
                    </div>
                    ${e.open?w`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:ue}
                </div>
            </dialog>
        `}}),It=kt()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>x`
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
    `,render({inputs:e,host:t}){const n=e.min||0,i=(e.max||100)-n,o=e.value-n,s=Bv(Math.round(o/i*100),{min:0,max:100});return xw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),w`
            <div
                class="progress-bar"
                style=${s?x`
                          width: ${s}%;
                      `:x`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}}),Nn=aw(),Cn=Nn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>x`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return w`
            <a
                href=${n}
                ${q("click",r=>{(!e.router||bw(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new xa(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function vI(e,t){return e.entry.entryType===dt.Root?!1:e.entry.entryType===dt.Page||S.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:S.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const pr=Nn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>x`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${ce["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${ce["element-book-nav-hover-background-color"].value};
            color: ${ce["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${ce["element-book-nav-active-background-color"].value};
            color: ${ce["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Cn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${ce["element-book-nav-selected-background-color"].value};
            color: ${ce["element-book-nav-selected-foreground-color"].value};
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
            color: ${ce["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!vI(n,e.selectedPath))return;const r=x`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return w`
                <li style=${r}>
                    <${Cn.assign({router:e.router,route:{paths:[Vt.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${yn({"title-row":!0,selected:e.selectedPath?S.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Kt(ao(n,dt.ElementExample),w`
                                    <${V.assign({icon:Bw})}></${V}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${Cn}>
                </li>
            `});return w`
            <${Cn.assign({route:yo,router:e.router})}>
                <slot name=${er.NavHeader}>Book</slot>
            </${Cn}>
            <ul>
                ${t}
            </ul>
        `}});async function DI(e){await ef(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await nS(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Xr=Nn()({tagName:"book-error",styles:x`
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
    `,render({inputs:e}){return(S.isArray(e.message)?e.message:[e.message]).map(n=>w`
                <p>${n}</p>
            `)}}),zs=Nn()({tagName:"book-page-controls",events:{controlValueChange:pt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${ce["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Re} {
            height: 24px;
            max-width: 128px;
        }

        ${V}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],o)=>{if(i.controlType===J.Hidden)return"";const s=EI(e.currentValues[r],i,u=>{const a=S.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!a)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:a,newValues:{...e.currentValues,[r]:u}}))});return w`
                    <div class="control-wrapper">
                        ${Kt(o===0,w`
                                <${V.assign({icon:Es})}
                                    class="options-icon"
                                ></${V}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function EI(e,t,n){return Zi(t,J.Hidden)?"":Zi(t,J.Checkbox)?w`
            <input
                type="checkbox"
                ?checked=${e}
                ${q("input",r=>{const i=no(r,HTMLInputElement);n(i.checked)})}
            />
        `:Zi(t,J.Color)?w`
            <input
                type="color"
                .value=${e}
                ${q("input",r=>{const i=no(r,HTMLInputElement);n(i.value)})}
            />
        `:Zi(t,J.Text)?w`
            <${Re.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${q(Re.events.valueChange,r=>{n(r.detail)})}
            ></${Re}>
        `:Zi(t,J.Number)?w`
            <input
                type="number"
                .value=${e}
                ${q("input",r=>{const i=no(r,HTMLInputElement);n(i.value)})}
            />
        `:Zi(t,J.Dropdown)?w`
            <select
                .value=${e}
                ${q("input",r=>{const i=no(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>w`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:w`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const L0=Nn()({tagName:"book-breadcrumbs",styles:x`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const o=r>=i.length-1,s=i.slice(0,r+1),u=o?"":w`
                      <span class="spacer">&gt;</span>
                  `;return w`
                <${Cn.assign({route:{hash:void 0,search:void 0,paths:[Vt.Book,...s]},router:e.router})}>
                    ${n}
                </${Cn}>
                ${u}
            `}):w`
                &nbsp;
            `}}),sc=Nn()({tagName:"book-breadcrumbs-bar",styles:x`
        :host {
            border-bottom: 1px solid
                ${ce["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${ce["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return w`
            ${Kt(!!e.currentSearch,w`
                    &nbsp;
                `,w`
                    <${L0.assign({currentRoute:e.currentRoute,router:e.router})}></${L0}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${q("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await Fs({milliseconds:200}),r.value===i&&(r.value?t(new xa({paths:[Vt.Search,encodeURIComponent(r.value)]})):t(new xa(yo)))})}
            />
        `}}),U0=Nn()({tagName:"book-entry-description",styles:x`
        :host {
            color: ${ce["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${ce["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>w`
                <p>${t}</p>
            `)}}),j0=Nn()({tagName:"book-page-wrapper",styles:x`
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

        ${Cn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?w`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:w`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Vt.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?Rg(e.pageNode.entry.errors):void 0;return r&&console.error(r),w`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Cn.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Cn}>
                    ${r?w`
                              <${Xr.assign({message:r.message})}></${Xr}>
                          `:w`
                              <${U0.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${U0}>
                              <${zs.assign({config:e.pageNode.entry.controls,currentValues:kf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${zs}>
                          `}
                </div>
            </div>
        `}}),_u=Nn()({tagName:"book-element-example-controls",styles:x`
        :host {
            display: flex;
            color: ${ce["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Vt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return w`
            <${Cn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Cn}>
        `}}),_0=Symbol("unset-internal-state"),V0=Nn()({tagName:"book-element-example-viewer",state(){return{isUnset:_0}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Rg(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===_0&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return w`
                ${Kt(!!t.elementExampleNode.entry.styles,w`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",Yt(r)),console.error(r),w`
                <${Xr.assign({message:`${t.elementExampleNode.entry.title} failed: ${Yt(r)}`})}></${Xr}>
            `}},options:{allowPolymorphicState:!0}}),W0=Nn()({tagName:"book-element-example-wrapper",styles:x`
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

        ${_u} {
            color: ${ce["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${_u} {
            color: ${ce["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return w`
            <div class="individual-example-wrapper">
                <${_u.assign(jv(e,["currentPageControls"]))}></${_u}>
                <${V0.assign(e)}></${V0}>
            </div>
        `}});function _w(e,t,n,r){const i=Fc(n,r),o=[];if(i){const s=_w(e,t,i,r);s&&o.push(s)}if(ao(n,dt.Page)&&!e.includes(n)){const s=kf(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:s,breadcrumbs:ln(s,()=>n.fullUrlBreadcrumbs)})}return o.reduce((s,u)=>({config:{...s.config,...u.config},current:{...s.current,...u.current},breadcrumbs:{...s.breadcrumbs,...u.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function CI({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:o}){if(!e.length&&r)return[w`
                No results
            `];const s=S.isLengthAtLeast(e,1)?_w(e,i,e[0],o):void 0,u=s&&Object.values(s.config).length&&S.isLengthAtLeast(e,1)?w`
                  <${zs.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${zs}>
              `:ue,a=P8(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(ao(l,dt.Page))return w`
                    <${j0.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${j0}>
                `;if(ao(l,dt.ElementExample)){const c=kf(i,l.fullUrlBreadcrumbs.slice(0,-1));return w`
                    <${W0.assign({elementExampleNode:l,currentPageControls:c,router:n})}
                        class="inline-entry ${yn({"block-entry":l.entry.isVertical})}"
                    ></${W0}>
                `}else return ao(l,dt.Root)?ue:w`
                    <${Xr.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${Xr}>
                `});return[u,a]}const Xi=Nn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:x`
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

        ${sc} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Cr["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:pt()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const o=kc(e.currentRoute.paths),s=CI({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return w`
            <${sc.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${sc}>

            ${Kt(e.showLoading,w`
                    <div
                        ${Ea(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${V.assign({icon:qs})}></${V}>
                    </div>
                    ${Kt(!!r.lastElement,w`
                            ${r.lastElement}
                            <slot name=${er.Footer}></slot>
                        `)}
                `,w`
                    <div
                        ${Ea(u=>{i({lastElement:u})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${er.Footer}></slot>
                `)}
        `}});function xI(e,t,n){const r=q0(e,t);return r.length?r:(n(yo),q0(e,yo.paths))}function q0(e,t){return e.filter(n=>Jv({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const uc=Bd()({tagName:"element-book-app",state(){return{currentRoute:yo,router:void 0,loading:!0,colors:{config:void 0,theme:x0(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:pt()},styles:x`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${ce["element-book-page-background-color"].value};
            color: ${ce["element-book-page-foreground-color"].value};
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

        ${Xi} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${pr} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await z0(e,kc(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function u(c){const f=s(c);return!S.jsonEquals(e.currentRoute,f)}function a(c){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(S.isTruthy).join(" - "))}function l(c){if(!u(c))return;const f=s(c);e.router?e.router.setRoute(f):r({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=vS(t.internalRouterConfig.basePath);r({router:A}),A.listen(!0,I=>{r({currentRoute:I})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!S.jsonEquals(c,e.colors.config)){const A=x0(c);r({colors:{config:c,theme:A}}),SD(n,A)}const f=t._debug??!1,m=tD({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Yg(m.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const g=kc(e.currentRoute.paths),D=(g?lS({flattenedNodes:m.flattenedNodes,searchQuery:g}):void 0)??xI(m.flattenedNodes,e.currentRoute.paths,l);a(D[0]?.entry.title);const k=e.treeBasedControls?.controls;return k?(t._debug&&console.info({currentControls:k}),w`
                <div
                    class="root"
                    ${q(xa,async A=>{const I=A.detail;if(!u(I))return;if(r({loading:!0}),l(I),!(n.shadowRoot.querySelector(pr.tagName)instanceof pr))throw new TypeError(`Failed to find child '${pr.tagName}'`);await z0(n,g,e.currentRoute)})}
                    ${q(zs.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const I=rD(k,A.detail.fullUrlBreadcrumbs,A.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:I}})})}
                >
                    <${pr.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:g?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${er.NavHeader}
                            slot=${er.NavHeader}
                        ></slot>
                    </${pr}>
                    <${Xi.assign({controls:k,currentNodes:D,currentRoute:e.currentRoute,debug:f,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${q(Xi.events.loadingRender,async A=>{await ef();const I=n.shadowRoot.querySelector(Xi.tagName);I?I.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Xi.tagName}' for scrolling.`),await ef(),r({loading:!A.detail})})}
                    >
                        <slot
                            name=${er.Footer}
                            slot=${er.Footer}
                        ></slot>
                    </${Xi}>
                </div>
            `):w`
                    <${Xr.assign({message:"Failed to generate page controls."})}></${Xr}>
                `}catch(c){return console.error(c),w`
                <p class="error">${Yt(c)}</p>
            `}}});async function z0(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(pr.tagName);if(!(r instanceof pr))throw new TypeError(`Failed to find child '${pr.tagName}'`);await DI(r)}const $t=Je({title:"Elements",parent:void 0}),Vw=Je({title:"Styles",parent:void 0}),AI=Je({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:J.Color,initValue:""},"Fill Color":{controlType:J.Color,initValue:""},"Stroke Width":{controlType:J.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(tf).forEach(t=>{e({title:t.name,styles:x`
                    :host(:hover) ${V} {
                        background-color: #f2f2f2;
                    }

                    ${V} {
                        padding: 8px;
                        border-radius: ${nr["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=x`
                        ${b["vira-icon-fill-color"].name}: ${Ze(n["Fill Color"]||"inherit")};
                        ${b["vira-icon-stroke-color"].name}: ${Ze(n["Stroke Color"]||"inherit")};
                        ${b["vira-icon-stroke-width"].name}: ${Ze(n["Stroke Width"]?jg(n["Stroke Width"]):"inherit")};
                    `;return w`
                        <${V.assign({icon:t})} style=${r}></${V}>
                    `}})})}}),FI=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:w`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:x`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:x`
            ${rn} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],kI=Je({title:rn.tagName,parent:$t,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:J.Text,initValue:""}},defineExamples({defineExample:e}){FI.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?w`
                            <${rn.assign(r)}>
                                ${t.customTemplate}
                            </${rn}>
                        `:w`
                            <${rn.assign(r)}></${rn}>
                        `}})})}}),sf=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new _d({sanitizeRoute(e){return e}})}}],SI=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:qd.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...sf,{id:"long",label:w`
                        <${rn.assign({selected:!1})}>
                            <div
                                style=${x`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${rn}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:Kr.Both,items:[...sf,{id:"long",label:w`
                        <${rn.assign({selected:!1})}>
                            <div
                                style=${x`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${rn}>
                    `}]}}],II=Je({parent:$t,title:Wr.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){SI.forEach(t=>{e({title:t.title,styles:x`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return w`
                        <${Wr.assign({items:sf,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${Wr}>
                    `}})})}}),Ww=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],NI=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...Ww,{id:4,label:"link here",route:{route:{paths:["test"]},router:new _d({sanitizeRoute(e){return e}})}}]}}],TI=Je({parent:$t,title:vs.tagName,defineExamples({defineExample:e}){NI.forEach(t=>{e({title:t.title,render(){return w`
                        <${vs.assign({isMultiSelect:!1,navController:void 0,items:Ww,selected:[],...t.inputs})}></${vs}>
                    `}})})}}),qw=[];Ln(Aa).forEach(e=>{Ln(qd).forEach(t=>{qw.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const MI=Je({parent:$t,title:Ds.tagName,defineExamples({defineExample:e}){qw.forEach(t=>{e({title:t.title,styles:x`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return w`
                        <${Ds.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${Ds}>
                    `}})})}}),PI=Je({parent:$t,title:de.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:x`
                ${de} {
                    ${No["vira-focus-outline-border-radius"].name}: 0;
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
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${de.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>Pop up!</div>
                    </${de}>
                `}}),e({title:"long clipped content",styles:x`
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
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
                `}}),e({title:"long right anchored content",styles:x`
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
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Kr.Right})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
                `}}),e({title:"long left anchored content",styles:x`
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
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Kr.Left})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
                `}}),e({title:"short right anchored content",styles:x`
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
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Kr.Right})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>not long</div>
                    </${de}>
                `}})}}),OI=[{title:"menu shadow",styles:mo.menuShadow},{title:"menu shadow reversed",styles:mo.menuShadowReversed},{title:"modal",styles:mo.modal}],BI=Je({parent:Vw,title:"Shadows",defineExamples({defineExample:e}){OI.forEach(t=>{e({title:t.title,styles:x`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${t.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return w`
                        <div class="shadow-block"></div>
                    `}})})}}),RI=Je({parent:$t,title:Ne.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return w`
                    <${Ne.assign({text:"Text here",bold:!1})}></${Ne}>
                `}}),e({title:"Bold",render(){return w`
                    <${Ne.assign({text:"Text here",bold:!0})}></${Ne}>
                `}}),e({title:"Dynamic",render({controls:t}){return w`
                    <${Ne.assign({text:"Text here",bold:t.bolded})}></${Ne}>
                `}}),e({title:"Resized",styles:x`
                ${Ne} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return w`
                    <${Ne.assign({text:"Not Bolded",bold:!1})}></${Ne}>
                    <${Ne.assign({text:"Bolded",bold:!0})}></${Ne}>
                `}}),e({title:"Alignment",styles:x`
                ${Ne} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return w`
                    <${Ne.assign({text:"Not Bolded",bold:!1})}></${Ne}>
                    <${Ne.assign({text:"Bolded",bold:!0})}></${Ne}>
                `}}),e({title:"Stylized",styles:x`
                ${Ne} {
                    text-decoration: underline;
                }
            `,render(){return w`
                    <${Ne.assign({text:"Not Bolded",bold:!1})}></${Ne}>
                    <${Ne.assign({text:"Bolded",bold:!0})}></${Ne}>
                `}})}}),LI=Je({parent:$t,title:et.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:J.Color,initValue:et.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:J.Color,initValue:et.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:J.Color,initValue:et.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:J.Color,initValue:et.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const o=r??x``;e({title:n,styles:o,render({controls:s}){const u=x`
                        ${et.cssVars["vira-button-primary-color"].name}: ${Ze(s["Primary color"]||"inherit")};
                        ${et.cssVars["vira-button-secondary-color"].name}: ${Ze(s["Secondary color"]||"inherit")};
                        ${et.cssVars["vira-button-primary-hover-color"].name}: ${Ze(s["Hover color"]||"inherit")};
                        ${et.cssVars["vira-button-primary-active-color"].name}: ${Ze(s["Active color"]||"inherit")};
                    `;return w`
                        <${et.assign({text:"hello",...i})}
                            style=${u}
                        ></${et}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Es}}),t({title:"with expanding icon",inputs:{icon:Es,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Mw.Outline}}),t({title:"only icon",inputs:{icon:Es,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:x`
                ${et} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:x`
                ${et} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:x`
                :host {
                    ${et.cssVars["vira-button-primary-color"].name}: pink;
                    ${et.cssVars["vira-button-secondary-color"].name}: purple;
                    ${et.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${et.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return w`
                    <${et.assign({text:"hello"})}></${et}>
                `}})}}),UI=Je({parent:$t,title:Te.tagName,controls:{Checked:{controlType:J.Checkbox,initValue:!1},Disabled:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:n}){return w`
                    <${Te.assign({value:t.checked})}
                        ${q(Te.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Te}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:n}){return w`
                    <${Te.assign({value:t.checked})}
                        ${q(Te.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Te}>
                `}}),e({title:"disabled unchecked",render(){return w`
                    <${Te.assign({value:!1,disabled:!0})}></${Te}>
                `}}),e({title:"disabled checked",render(){return w`
                    <${Te.assign({value:!0,disabled:!0})}></${Te}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return w`
                    <${Te.assign({value:t.Checked,disabled:t.Disabled})}></${Te}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return w`
                    <${Te.assign({value:!0})}></${Te}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:n}){return w`
                    <${Te.assign({value:t.checked,label:"label goes here"})}
                        ${q(Te.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Te}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:x`
                ${Te} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:n}){return w`
                    <${Te.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${q(Te.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Te}>
                `}})}}),jI=Je({title:cr.tagName,parent:$t,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:x`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>w`
                        <${cr.assign({expanded:!!n.expandedStates[i]})}
                            ${q(cr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${cr.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${q("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Kt(!!n.showMoreStates[i],w`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${cr}>
                    `)}}),e({title:"wider examples",styles:x`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>w`
                        <${cr.assign({expanded:!!n.expandedStates[i]})}
                            ${q(cr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${cr.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${q("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Kt(!!n.showMoreStates[i],w`
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
                        </${cr}>
                    `)}})}}),Cs=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],_I=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Cs,{id:42,label:w`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Cs,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:x`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:x`
            ${hs} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Dr}}],VI=Je({title:hs.tagName,parent:$t,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["",...Cs.map(e=>e.label)]},Prefix:{controlType:J.Text,initValue:""},"Force State":{controlType:J.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:J.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:J.Dropdown,initValue:"",options:["",...Object.keys(tf)]},Disabled:{controlType:J.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:J.Text,initValue:"Select something"}},defineExamples({defineExample:e}){_I.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Cs,selected:i.Selected?[Cs.find(s=>s.label===i.Selected)?.id].filter(S.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?tf[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return w`
                        <${hs.assign(o)}
                            ${q(hs.events.selectedChange,s=>{r({selected:s.detail})})}
                        ></${hs}>
                    `}})})}}),WI=Je({title:V.tagName,parent:$t,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return w`
                    <${V.assign({icon:Dr})}></${V}>
                `}}),e({title:"using createColoredIcon",render(){return w`
                    <${V.assign({icon:M0(Dr,{"vira-icon-stroke-color":"red"})})}></${V}>
                `}}),e({title:"fit container",styles:x`
                ${V} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return w`
                    <${V.assign({icon:M0(Dr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${V}>
                `}})}}),qI=Je({title:Br.tagName,parent:$t,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:x`
                    border-radius: 32px;
                `,loadingSlot:w`
                    <div
                        style=${x`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${V.assign({icon:qs,fitContainer:!0})}
                            style=${x`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:x`
                    border-radius: 32px;
                `,errorSlot:w`
                    <div
                        style=${x`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${V.assign({icon:Fa,fitContainer:!0})}
                            style=${x`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:x`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:x`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:x`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:w`
                    <div
                        style=${x`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${V.assign({icon:qs,fitContainer:!0})}
                            style=${x`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `,errorSlot:w`
                    <div
                        style=${x`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${V.assign({icon:Fa,fitContainer:!0})}
                            style=${x`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:x`
                    ${Br} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||x``}
                    }

                    ${n.allowReload?x`
                              ${Br} {
                                  cursor: pointer;
                              }

                              ${Br}:hover {
                                  border-color: #0055ff;
                              }
                          `:x``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:n.inputs.imageUrl}},render({state:r,updateState:i}){return w`
                        <${Br.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${q("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${Bg()}`})})}
                        >
                            ${n.loadingSlot?w`
                                      <div class="slot-wrapper" slot=${Br.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:ue}${n.errorSlot?w`
                                      <div class="slot-wrapper" slot=${Br.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:ue}
                        </${Br}>
                    `}})})}}),zI=Je({title:Re.tagName,parent:$t,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:J.Color,initValue:Re.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:J.Color,initValue:Re.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:J.Color,initValue:Re.cssVars["vira-input-border-color"].default},"Focus color":{controlType:J.Color,initValue:No["vira-focus-outline-color"].default},"Selection color":{controlType:J.Color,initValue:Re.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:o}){e({title:i,styles:x`
                    ${r||x``}
                `,state(){return{value:o.value}},render({state:s,updateState:u,controls:a}){const l={[String(Re.cssVars["vira-input-text-color"].name)]:a["Text color"],[String(Re.cssVars["vira-input-placeholder-color"].name)]:a["Placeholder color"],[String(Re.cssVars["vira-input-border-color"].name)]:a["Border color"],[String(No["vira-focus-outline-color"].name)]:a["Focus color"],[String(Re.cssVars["vira-input-text-selection-color"].name)]:a["Selection color"]},c=ln(l,(m,g)=>g||"inherit"),f=Object.entries(c).map(([m,g])=>[m,g].join(": ")+";").join(`
`);return w`
                        <${Re.assign({...o,value:s.value})}
                            style=${f}
                            ${q(Re.events.valueChange,m=>{u({value:m.detail}),console.info("changed:",m.detail)})}
                        ></${Re}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Dr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:x`
                    ${Re} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Dr}},{title:"taller height",styles:x`
                    ${Re} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Dr}},{title:"shorter height",styles:x`
                    ${Re} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Dr}},{title:"max width",styles:x`
                    ${Re} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:x`
                    ${Re} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:of.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:of.Email,attributePassthrough:{autocomplete:"username"}}}].forEach(t)}}),KI=Je({title:ro.tagName,parent:$t,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:J.Color,initValue:""},"Hover color":{controlType:J.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const o=x`
                        ${ro.cssVars["vira-link-hover-color"].name}: ${Ze(i["Hover color"]||"inherit")};
                        color: ${Ze(i["CSS Color"]||"inherit")};
                    `;return w`
                        <${ro.assign(r)} style=${o}>My Link</${ro}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),ZI=Je({title:fr.tagName,parent:$t,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:n}){return w`
                    <button
                        ${q("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${fr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${q(fr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${fr}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:x`
                ${fr} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${fr.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:n}){return w`
                    <button
                        ${q("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${fr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${q(fr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${fr}>
                `}})}}),GI=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:x`
            :host {
                ${It.cssVars["vira-progress-background-color"].name}: red;
                ${It.cssVars["vira-progress-foreground-color"].name}: black;
                ${It.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${It} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:x`
            :host {
                ${It.cssVars["vira-progress-background-color"].name}: red;
                ${It.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${It.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${It} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:x`
            :host {
                ${It.cssVars["vira-progress-background-color"].name}: red;
                ${It.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${It.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${It} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],YI=Je({parent:$t,title:It.tagName,defineExamples({defineExample:e}){GI.forEach(t=>{e({title:t.title,styles:x`
                    ${t.styles||x``}
                `,render(){return w`
                        <${It.assign({value:50,...t.inputs})}></${It}>
                    `}})})}}),JI=[$t,AI,Vw],HI=[RI,LI,UI,jI,VI,WI,qI,zI,KI,kI,TI,II,ZI,MI,PI,YI,BI].sort((e,t)=>e.title.localeCompare(t.title)),XI=[...JI,...HI];Bd()({tagName:"vira-book-app",styles:x`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${uc} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return w`
            <${uc.assign({internalRouterConfig:{basePath:Ud("vira"),useInternalRouter:!0},pages:XI,themeColor:"#33ccff"})}>
                <h1 slot=${er.NavHeader}>Vira</h1>
            </${uc}>
        `}});
