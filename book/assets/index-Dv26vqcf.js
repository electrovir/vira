(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var gt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(gt||(gt={}));function ep(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}class mf{diff(t,n,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const o=this.castInput(t,r),s=this.castInput(n,r),a=this.removeEmpty(this.tokenize(o,r)),u=this.removeEmpty(this.tokenize(s,r));return this.diffWithOptionsObj(a,u,r,i)}diffWithOptionsObj(t,n,r,i){var o;const s=I=>{if(I=this.postProcess(I,r),i){setTimeout(function(){i(I)},0);return}else return I},a=n.length,u=t.length;let l=1,c=a+u;r.maxEditLength!=null&&(c=Math.min(c,r.maxEditLength));const f=(o=r.timeout)!==null&&o!==void 0?o:1/0,d=Date.now()+f,g=[{oldPos:-1,lastComponent:void 0}];let x=this.extractCommon(g[0],n,t,0,r);if(g[0].oldPos+1>=u&&x+1>=a)return s(this.buildValues(g[0].lastComponent,n,t));let D=-1/0,k=1/0;const A=()=>{for(let I=Math.max(D,-l);I<=Math.min(k,l);I+=2){let j;const q=g[I-1],G=g[I+1];q&&(g[I-1]=void 0);let Re=!1;if(G){const et=G.oldPos-I;Re=G&&0<=et&&et<a}const Et=q&&q.oldPos+1<u;if(!Re&&!Et){g[I]=void 0;continue}if(!Et||Re&&q.oldPos<G.oldPos?j=this.addToPath(G,!0,!1,0,r):j=this.addToPath(q,!1,!0,1,r),x=this.extractCommon(j,n,t,I,r),j.oldPos+1>=u&&x+1>=a)return s(this.buildValues(j.lastComponent,n,t))||!0;g[I]=j,j.oldPos+1>=u&&(k=Math.min(k,I-1)),x+1>=a&&(D=Math.max(D,I+1))}l++};if(i)(function I(){setTimeout(function(){if(l>c||Date.now()>d)return i(void 0);A()||I()},0)})();else for(;l<=c&&Date.now()<=d;){const I=A();if(I)return I}}addToPath(t,n,r,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===n&&s.removed===r?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:n,removed:r,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:n,removed:r,previousComponent:s}}}extractCommon(t,n,r,i,o){const s=n.length,a=r.length;let u=t.oldPos,l=u-i,c=0;for(;l+1<s&&u+1<a&&this.equals(r[u+1],n[l+1],o);)l++,u++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,u=0,l=0;for(;a<s;a++){const c=i[a];if(c.removed)c.value=this.join(r.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let f=n.slice(u,u+c.count);f=f.map(function(d,g){const x=r[l+g];return x.length>d.length?x:d}),c.value=this.join(f)}else c.value=this.join(n.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return i}}function tm(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function nm(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function mc(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function hc(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function es(e,t){return mc(e,t,"")}function Ea(e,t){return hc(e,t,"")}function rm(e,t){return t.slice(0,eb(e,t))}function eb(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);const i=Array(r);let o=0;i[0]=0;for(let s=1;s<r;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=n;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function ts(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function Br(e){const t=e.match(/^\s*/);return t?t[0]:""}const nu="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",tb=new RegExp(`[${nu}]+|\\s+|[^${nu}]`,"ug");class nb extends mf{equals(t,n,r){return r.ignoreCase&&(t=t.toLowerCase(),n=n.toLowerCase()),t.trim()===n.trim()}tokenize(t,n={}){let r;if(n.intlSegmenter){const s=n.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(s.segment(t),a=>a.segment)}else r=t.match(tb)||[];const i=[];let o=null;return r.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((n,r)=>r==0?n:n.replace(/^\s+/,"")).join("")}postProcess(t,n){if(!t||n.oneChangePerToken)return t;let r=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&im(r,o,i,s),r=s,i=null,o=null)}),(i||o)&&im(r,o,i,null),t}}const rb=new nb;function ib(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?ab(e,t,n):rb.diff(e,t,n)}function im(e,t,n,r){if(t&&n){const i=Br(t.value),o=ts(t.value),s=Br(n.value),a=ts(n.value);if(e){const u=tm(i,s);e.value=hc(e.value,s,u),t.value=es(t.value,u),n.value=es(n.value,u)}if(r){const u=nm(o,a);r.value=mc(r.value,a,u),t.value=Ea(t.value,u),n.value=Ea(n.value,u)}}else if(n){if(e){const i=Br(n.value);n.value=n.value.substring(i.length)}if(r){const i=Br(r.value);r.value=r.value.substring(i.length)}}else if(e&&r){const i=Br(r.value),o=Br(t.value),s=ts(t.value),a=tm(i,o);t.value=es(t.value,a);const u=nm(es(i,a),s);t.value=Ea(t.value,u),r.value=mc(r.value,i,u),e.value=hc(e.value,i,i.slice(0,i.length-u.length))}else if(r){const i=Br(r.value),o=ts(t.value),s=rm(o,i);t.value=Ea(t.value,s)}else if(e){const i=ts(e.value),o=Br(t.value),s=rm(i,o);t.value=es(t.value,s)}}class ob extends mf{tokenize(t){const n=new RegExp(`(\\r?\\n)|[${nu}]+|[^\\S\\n\\r]+|[^${nu}]`,"ug");return t.match(n)||[]}}const sb=new ob;function ab(e,t,n){return sb.diff(e,t,n)}class ub extends mf{constructor(){super(...arguments),this.tokenize=fb}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const lb=new ub;function cb(e,t,n){return lb.diff(e,t,n)}function fb(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let i=0;i<r.length;i++){const o=r[i];i%2&&!t.newlineIsToken?n[n.length-1]+=o:n.push(o)}return n}function om(e){return tp(e,new Map)}function tp(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((r,i)=>r[0].localeCompare(i[0])).forEach(([r,i])=>{const o=tp(i,t);n[r]=o}),n}else return e}var db=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,mb=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,hb=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,vl={Space_Separator:db,ID_Start:mb,ID_Continue:hb},Ue={isSpaceSeparator(e){return typeof e=="string"&&vl.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||vl.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||vl.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let pc,Pt,wr,ru,Jr,zn,ut,hf,ws;var pb=function(t,n){pc=String(t),Pt="start",wr=[],ru=0,Jr=1,zn=0,ut=void 0,hf=void 0,ws=void 0;do ut=gb(),bb[Pt]();while(ut.type!=="eof");return typeof n=="function"?gc({"":ws},"",n):ws};function gc(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const o=String(i),s=gc(r,o,n);s===void 0?delete r[o]:Object.defineProperty(r,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const o=gc(r,i,n);o===void 0?delete r[i]:Object.defineProperty(r,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let X,Y,fs,hr,ie;function gb(){for(X="default",Y="",fs=!1,hr=1;;){ie=Cr();const e=np[X]();if(e)return e}}function Cr(){if(pc[ru])return String.fromCodePoint(pc.codePointAt(ru))}function F(){const e=Cr();return e===`
`?(Jr++,zn=0):e?zn+=e.length:zn++,e&&(ru+=e.length),e}const np={default(){switch(ie){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":F();return;case"/":F(),X="comment";return;case void 0:return F(),ve("eof")}if(Ue.isSpaceSeparator(ie)){F();return}return np[Pt]()},comment(){switch(ie){case"*":F(),X="multiLineComment";return;case"/":F(),X="singleLineComment";return}throw De(F())},multiLineComment(){switch(ie){case"*":F(),X="multiLineCommentAsterisk";return;case void 0:throw De(F())}F()},multiLineCommentAsterisk(){switch(ie){case"*":F();return;case"/":F(),X="default";return;case void 0:throw De(F())}F(),X="multiLineComment"},singleLineComment(){switch(ie){case`
`:case"\r":case"\u2028":case"\u2029":F(),X="default";return;case void 0:return F(),ve("eof")}F()},value(){switch(ie){case"{":case"[":return ve("punctuator",F());case"n":return F(),di("ull"),ve("null",null);case"t":return F(),di("rue"),ve("boolean",!0);case"f":return F(),di("alse"),ve("boolean",!1);case"-":case"+":F()==="-"&&(hr=-1),X="sign";return;case".":Y=F(),X="decimalPointLeading";return;case"0":Y=F(),X="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),X="decimalInteger";return;case"I":return F(),di("nfinity"),ve("numeric",1/0);case"N":return F(),di("aN"),ve("numeric",NaN);case'"':case"'":fs=F()==='"',Y="",X="string";return}throw De(F())},identifierNameStartEscape(){if(ie!=="u")throw De(F());F();const e=yc();switch(e){case"$":case"_":break;default:if(!Ue.isIdStartChar(e))throw sm();break}Y+=e,X="identifierName"},identifierName(){switch(ie){case"$":case"_":case"‌":case"‍":Y+=F();return;case"\\":F(),X="identifierNameEscape";return}if(Ue.isIdContinueChar(ie)){Y+=F();return}return ve("identifier",Y)},identifierNameEscape(){if(ie!=="u")throw De(F());F();const e=yc();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Ue.isIdContinueChar(e))throw sm();break}Y+=e,X="identifierName"},sign(){switch(ie){case".":Y=F(),X="decimalPointLeading";return;case"0":Y=F(),X="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),X="decimalInteger";return;case"I":return F(),di("nfinity"),ve("numeric",hr*(1/0));case"N":return F(),di("aN"),ve("numeric",NaN)}throw De(F())},zero(){switch(ie){case".":Y+=F(),X="decimalPoint";return;case"e":case"E":Y+=F(),X="decimalExponent";return;case"x":case"X":Y+=F(),X="hexadecimal";return}return ve("numeric",hr*0)},decimalInteger(){switch(ie){case".":Y+=F(),X="decimalPoint";return;case"e":case"E":Y+=F(),X="decimalExponent";return}if(Ue.isDigit(ie)){Y+=F();return}return ve("numeric",hr*Number(Y))},decimalPointLeading(){if(Ue.isDigit(ie)){Y+=F(),X="decimalFraction";return}throw De(F())},decimalPoint(){switch(ie){case"e":case"E":Y+=F(),X="decimalExponent";return}if(Ue.isDigit(ie)){Y+=F(),X="decimalFraction";return}return ve("numeric",hr*Number(Y))},decimalFraction(){switch(ie){case"e":case"E":Y+=F(),X="decimalExponent";return}if(Ue.isDigit(ie)){Y+=F();return}return ve("numeric",hr*Number(Y))},decimalExponent(){switch(ie){case"+":case"-":Y+=F(),X="decimalExponentSign";return}if(Ue.isDigit(ie)){Y+=F(),X="decimalExponentInteger";return}throw De(F())},decimalExponentSign(){if(Ue.isDigit(ie)){Y+=F(),X="decimalExponentInteger";return}throw De(F())},decimalExponentInteger(){if(Ue.isDigit(ie)){Y+=F();return}return ve("numeric",hr*Number(Y))},hexadecimal(){if(Ue.isHexDigit(ie)){Y+=F(),X="hexadecimalInteger";return}throw De(F())},hexadecimalInteger(){if(Ue.isHexDigit(ie)){Y+=F();return}return ve("numeric",hr*Number(Y))},string(){switch(ie){case"\\":F(),Y+=yb();return;case'"':if(fs)return F(),ve("string",Y);Y+=F();return;case"'":if(!fs)return F(),ve("string",Y);Y+=F();return;case`
`:case"\r":throw De(F());case"\u2028":case"\u2029":$b(ie);break;case void 0:throw De(F())}Y+=F()},start(){switch(ie){case"{":case"[":return ve("punctuator",F())}X="value"},beforePropertyName(){switch(ie){case"$":case"_":Y=F(),X="identifierName";return;case"\\":F(),X="identifierNameStartEscape";return;case"}":return ve("punctuator",F());case'"':case"'":fs=F()==='"',X="string";return}if(Ue.isIdStartChar(ie)){Y+=F(),X="identifierName";return}throw De(F())},afterPropertyName(){if(ie===":")return ve("punctuator",F());throw De(F())},beforePropertyValue(){X="value"},afterPropertyValue(){switch(ie){case",":case"}":return ve("punctuator",F())}throw De(F())},beforeArrayValue(){if(ie==="]")return ve("punctuator",F());X="value"},afterArrayValue(){switch(ie){case",":case"]":return ve("punctuator",F())}throw De(F())},end(){throw De(F())}};function ve(e,t){return{type:e,value:t,line:Jr,column:zn}}function di(e){for(const t of e){if(Cr()!==t)throw De(F());F()}}function yb(){switch(Cr()){case"b":return F(),"\b";case"f":return F(),"\f";case"n":return F(),`
`;case"r":return F(),"\r";case"t":return F(),"	";case"v":return F(),"\v";case"0":if(F(),Ue.isDigit(Cr()))throw De(F());return"\0";case"x":return F(),wb();case"u":return F(),yc();case`
`:case"\u2028":case"\u2029":return F(),"";case"\r":return F(),Cr()===`
`&&F(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw De(F());case void 0:throw De(F())}return F()}function wb(){let e="",t=Cr();if(!Ue.isHexDigit(t)||(e+=F(),t=Cr(),!Ue.isHexDigit(t)))throw De(F());return e+=F(),String.fromCodePoint(parseInt(e,16))}function yc(){let e="",t=4;for(;t-- >0;){const n=Cr();if(!Ue.isHexDigit(n))throw De(F());e+=F()}return String.fromCodePoint(parseInt(e,16))}const bb={start(){if(ut.type==="eof")throw mi();Dl()},beforePropertyName(){switch(ut.type){case"identifier":case"string":hf=ut.value,Pt="afterPropertyName";return;case"punctuator":xa();return;case"eof":throw mi()}},afterPropertyName(){if(ut.type==="eof")throw mi();Pt="beforePropertyValue"},beforePropertyValue(){if(ut.type==="eof")throw mi();Dl()},beforeArrayValue(){if(ut.type==="eof")throw mi();if(ut.type==="punctuator"&&ut.value==="]"){xa();return}Dl()},afterPropertyValue(){if(ut.type==="eof")throw mi();switch(ut.value){case",":Pt="beforePropertyName";return;case"}":xa()}},afterArrayValue(){if(ut.type==="eof")throw mi();switch(ut.value){case",":Pt="beforeArrayValue";return;case"]":xa()}},end(){}};function Dl(){let e;switch(ut.type){case"punctuator":switch(ut.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=ut.value;break}if(ws===void 0)ws=e;else{const t=wr[wr.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,hf,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")wr.push(e),Array.isArray(e)?Pt="beforeArrayValue":Pt="beforePropertyName";else{const t=wr[wr.length-1];t==null?Pt="end":Array.isArray(t)?Pt="afterArrayValue":Pt="afterPropertyValue"}}function xa(){wr.pop();const e=wr[wr.length-1];e==null?Pt="end":Array.isArray(e)?Pt="afterArrayValue":Pt="afterPropertyValue"}function De(e){return iu(e===void 0?`JSON5: invalid end of input at ${Jr}:${zn}`:`JSON5: invalid character '${rp(e)}' at ${Jr}:${zn}`)}function mi(){return iu(`JSON5: invalid end of input at ${Jr}:${zn}`)}function sm(){return zn-=5,iu(`JSON5: invalid identifier character at ${Jr}:${zn}`)}function $b(e){console.warn(`JSON5: '${rp(e)}' in strings is not valid ECMAScript; consider escaping`)}function rp(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function iu(e){const t=new SyntaxError(e);return t.lineNumber=Jr,t.columnNumber=zn,t}var vb=function(t,n,r){const i=[];let o="",s,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){s=[];for(const D of n){let k;typeof D=="string"?k=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&(k=String(D)),k!==void 0&&s.indexOf(k)<0&&s.push(k)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),c("",{"":t});function c(D,k){let A=k[D];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(D):typeof A.toJSON=="function"&&(A=A.toJSON(D))),a&&(A=a.call(k,D,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return f(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?x(A):d(A)}function f(D){const k={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let I="";for(let q=0;q<D.length;q++){const G=D[q];switch(G){case"'":case'"':k[G]++,I+=G;continue;case"\0":if(Ue.isDigit(D[q+1])){I+="\\x00";continue}}if(A[G]){I+=A[G];continue}if(G<" "){let Re=G.charCodeAt(0).toString(16);I+="\\x"+("00"+Re).substring(Re.length);continue}I+=G}const j=l||Object.keys(k).reduce((q,G)=>k[q]<k[G]?q:G);return I=I.replace(new RegExp(j,"g"),A[j]),j+I+j}function d(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let k=o;o=o+u;let A=s||Object.keys(D),I=[];for(const q of A){const G=c(q,D);if(G!==void 0){let Re=g(q)+":";u!==""&&(Re+=" "),Re+=G,I.push(Re)}}let j;if(I.length===0)j="{}";else{let q;if(u==="")q=I.join(","),j="{"+q+"}";else{let G=`,
`+o;q=I.join(G),j=`{
`+o+q+`,
`+k+"}"}}return i.pop(),o=k,j}function g(D){if(D.length===0)return f(D);const k=String.fromCodePoint(D.codePointAt(0));if(!Ue.isIdStartChar(k))return f(D);for(let A=k.length;A<D.length;A++)if(!Ue.isIdContinueChar(String.fromCodePoint(D.codePointAt(A))))return f(D);return D}function x(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let k=o;o=o+u;let A=[];for(let j=0;j<D.length;j++){const q=c(String(j),D);A.push(q!==void 0?q:"null")}let I;if(A.length===0)I="[]";else if(u==="")I="["+A.join(",")+"]";else{let j=`,
`+o,q=A.join(j);I=`[
`+o+q+`,
`+k+"]"}return i.pop(),o=k,I}};const Db={parse:pb,stringify:vb};var Eb=Db;const ip="__@@augment-vir-undefined-sentinel@@__",xb=new RegExp(`['"]${ip}['"]`);function h(e,t){if(typeof e=="string")return e;try{return Eb.stringify(e,(r,i)=>i===void 0?ip:typeof i=="bigint"?Number(i):i,t||void 0).split(xb).join("undefined")}catch{return String(e)}}var Cb=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Kn;(function(e){e.Node="node",e.Web="web"})(Kn||(Kn={}));function Ab(){return Cb?Kn.Node:Kn.Web}const op=Ab();function pf(e){return op===e}function sp(e){return e[op]()}function Fb(e,t){const n=typeof t=="string"&&typeof e=="string",r=typeof t!="string"||typeof e!="string",i=r?cb:ib,o=[n?"":`
`,h(t&&typeof t=="object"&&!Array.isArray(t)?om(t):t,4),`
`].join(""),s=[n?"":`
`,h(e&&typeof e=="object"&&!Array.isArray(e)?om(e):e,4),`
`].join(""),a=kb(r,i(o,s)),u=pf(Kn.Node);return[[u?Dr.Green:""," +added (unexpected, added in actual)",u?Dr.Red:""," -missing (expected, missing from actual)",u?Dr.Reset:""].join(""),n?`

`:`
`,a].join("")}var Dr;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Dr||(Dr={}));var ou;(function(e){e.Added="+",e.Removed="-"})(ou||(ou={}));function kb(e,t){return e?t.flatMap(r=>r.value.split(`
`).map(i=>am(i,r)).join(`
`)).join(""):t.map(r=>am(void 0,r)).join("")}function am(e,t){if(e!=null&&!e)return"";const n=pf(Kn.Node),r=t.added?ou.Added:t.removed?ou.Removed:e==null?"":" ",i=t.added?Dr.Green:t.removed?Dr.Red:Dr.Reset;return[n?i:"",r,e??t.value,Dr.Reset].join("")}function ke(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Sb(e){return ke(e).filter(t=>isNaN(Number(t)))}function _n(e){return Sb(e).map(n=>e[n])}const Ib=[".",":",";",",","?","!"],Nb=new RegExp(`[${Ib.join("")}]+$`);function um(e){return e.replace(Nb,"")}function Yt(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function Nu(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&um(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:um(r)).join(": "):""}function Ft(e){return e instanceof Error?e:new Error(Yt(e))}function gf(e,t){const n=Ft(e),r=Nu(t,n.message);try{return n.message=r,n}catch{return new Error(r,{cause:e})}}var v;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(v||(v={}));var R;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(R||(R={}));R.ClientError,R.ServerError;v.Continue+"",R.Information,v.SwitchingProtocols+"",R.Information,v.Processing+"",R.Information,v.EarlyHints+"",R.Information,v.Ok+"",R.Success,v.Created+"",R.Success,v.Accepted+"",R.Success,v.NonAuthoritativeInformation+"",R.Success,v.NoContent+"",R.Success,v.ResetContent+"",R.Success,v.PartialContent+"",R.Success,v.MultiStatus+"",R.Success,v.AlreadyReported+"",R.Success,v.ImUsed+"",R.Success,v.MultipleChoices+"",R.Redirect,v.MovedPermanently+"",R.Redirect,v.Found+"",R.Redirect,v.SeeOther+"",R.Redirect,v.NotModified+"",R.Redirect,v.UseProxy+"",R.Redirect,v.Unused+"",R.Redirect,v.TemporaryRedirect+"",R.Redirect,v.PermanentRedirect+"",R.Redirect,v.BadRequest+"",R.ClientError,v.Unauthorized+"",R.ClientError,v.PaymentRequired+"",R.ClientError,v.Forbidden+"",R.ClientError,v.NotFound+"",R.ClientError,v.MethodNotAllowed+"",R.ClientError,v.NotAcceptable+"",R.ClientError,v.ProxyAuthenticationRequired+"",R.ClientError,v.RequestTimeout+"",R.ClientError,v.Conflict+"",R.ClientError,v.Gone+"",R.ClientError,v.LengthRequired+"",R.ClientError,v.PreconditionFailed+"",R.ClientError,v.PayloadTooLarge+"",R.ClientError,v.UriTooLong+"",R.ClientError,v.UnsupportedMediaType+"",R.ClientError,v.RangeNotSatisfiable+"",R.ClientError,v.ExpectationFailed+"",R.ClientError,v.ImATeapot+"",R.ClientError,v.MisdirectedRequest+"",R.ClientError,v.UnprocessableContent+"",R.ClientError,v.Locked+"",R.ClientError,v.FailedDependency+"",R.ClientError,v.TooEarly+"",R.ClientError,v.UpgradeRequired+"",R.ClientError,v.PreconditionRequired+"",R.ClientError,v.TooManyRequests+"",R.ClientError,v.RequestHeaderFieldsTooLarge+"",R.ClientError,v.UnavailableForLegalReasons+"",R.ClientError,v.InternalServerError+"",R.ServerError,v.NotImplemented+"",R.ServerError,v.BadGateway+"",R.ServerError,v.ServiceUnavailable+"",R.ServerError,v.GatewayTimeout+"",R.ServerError,v.HttpVersionNotSupported+"",R.ServerError,v.VariantAlsoNegotiates+"",R.ServerError,v.InsufficientStorage+"",R.ServerError,v.LoopDetected+"",R.ServerError,v.NotExtended+"",R.ServerError,v.NetworkAuthenticationRequired+"",R.ServerError;const za={[R.Information]:[v.Continue,v.SwitchingProtocols,v.Processing,v.EarlyHints],[R.Success]:[v.Ok,v.Created,v.Accepted,v.NonAuthoritativeInformation,v.NoContent,v.ResetContent,v.PartialContent,v.MultiStatus,v.AlreadyReported,v.ImUsed],[R.Redirect]:[v.MultipleChoices,v.MovedPermanently,v.Found,v.SeeOther,v.NotModified,v.UseProxy,v.Unused,v.TemporaryRedirect,v.PermanentRedirect],[R.ClientError]:[v.BadRequest,v.Unauthorized,v.PaymentRequired,v.Forbidden,v.NotFound,v.MethodNotAllowed,v.NotAcceptable,v.ProxyAuthenticationRequired,v.RequestTimeout,v.Conflict,v.Gone,v.LengthRequired,v.PreconditionFailed,v.PayloadTooLarge,v.UriTooLong,v.UnsupportedMediaType,v.RangeNotSatisfiable,v.ExpectationFailed,v.ImATeapot,v.MisdirectedRequest,v.UnprocessableContent,v.Locked,v.FailedDependency,v.TooEarly,v.UpgradeRequired,v.PreconditionRequired,v.TooManyRequests,v.RequestHeaderFieldsTooLarge,v.UnavailableForLegalReasons],[R.ServerError]:[v.InternalServerError,v.NotImplemented,v.BadGateway,v.ServiceUnavailable,v.GatewayTimeout,v.HttpVersionNotSupported,v.VariantAlsoNegotiates,v.InsufficientStorage,v.LoopDetected,v.NotExtended,v.NetworkAuthenticationRequired]};function ap({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class up{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Ft(r))}})}}class Mi extends Error{}class Tb extends Mi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Mb extends Mi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Pb extends Mi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class ro extends Mi{}class lp extends Mi{constructor(t){super(`Invalid unit ${t}`)}}class xt extends Mi{}class Rr extends Mi{constructor(){super("Zone is an abstract class")}}const O="numeric",Zn="short",un="long",su={year:O,month:O,day:O},cp={year:O,month:Zn,day:O},Ob={year:O,month:Zn,day:O,weekday:Zn},fp={year:O,month:un,day:O},dp={year:O,month:un,day:O,weekday:un},mp={hour:O,minute:O},hp={hour:O,minute:O,second:O},pp={hour:O,minute:O,second:O,timeZoneName:Zn},gp={hour:O,minute:O,second:O,timeZoneName:un},yp={hour:O,minute:O,hourCycle:"h23"},wp={hour:O,minute:O,second:O,hourCycle:"h23"},bp={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:Zn},$p={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:un},vp={year:O,month:O,day:O,hour:O,minute:O},Dp={year:O,month:O,day:O,hour:O,minute:O,second:O},Ep={year:O,month:Zn,day:O,hour:O,minute:O},xp={year:O,month:Zn,day:O,hour:O,minute:O,second:O},Bb={year:O,month:Zn,day:O,weekday:Zn,hour:O,minute:O},Cp={year:O,month:un,day:O,hour:O,minute:O,timeZoneName:Zn},Ap={year:O,month:un,day:O,hour:O,minute:O,second:O,timeZoneName:Zn},Fp={year:O,month:un,day:O,weekday:un,hour:O,minute:O,timeZoneName:un},kp={year:O,month:un,day:O,weekday:un,hour:O,minute:O,second:O,timeZoneName:un};class Ys{get type(){throw new Rr}get name(){throw new Rr}get ianaName(){return this.name}get isUniversal(){throw new Rr}offsetName(t,n){throw new Rr}formatOffset(t,n){throw new Rr}offset(t){throw new Rr}equals(t){throw new Rr}get isValid(){throw new Rr}}let El=null;class Tu extends Ys{static get instance(){return El===null&&(El=new Tu),El}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Up(t,n,r)}formatOffset(t,n){return bs(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const wc=new Map;function Rb(e){let t=wc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),wc.set(e,t)),t}const Lb={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Ub(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,o,s,a,u,l,c]=r;return[s,i,o,a,u,l,c]}function jb(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:o,value:s}=n[i],a=Lb[o];o==="era"?r[a]=s:K(a)||(r[a]=parseInt(s,10))}return r}const xl=new Map;class Fr extends Ys{static create(t){let n=xl.get(t);return n===void 0&&xl.set(t,n=new Fr(t)),n}static resetCache(){xl.clear(),wc.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Fr.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Up(t,n,r,this.name)}formatOffset(t,n){return bs(this.offset(t),n)}offset(t){if(!this.valid)return NaN;const n=new Date(t);if(isNaN(n))return NaN;const r=Rb(this.name);let[i,o,s,a,u,l,c]=r.formatToParts?jb(r,n):Ub(r,n);a==="BC"&&(i=-Math.abs(i)+1);const d=Pu({year:i,month:o,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let g=+n;const x=g%1e3;return g-=x>=0?x:1e3+x,(d-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let lm={};function _b(e,t={}){const n=JSON.stringify([e,t]);let r=lm[n];return r||(r=new Intl.ListFormat(e,t),lm[n]=r),r}const bc=new Map;function $c(e,t={}){const n=JSON.stringify([e,t]);let r=bc.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),bc.set(n,r)),r}const vc=new Map;function Vb(e,t={}){const n=JSON.stringify([e,t]);let r=vc.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),vc.set(n,r)),r}const Dc=new Map;function Wb(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let o=Dc.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),Dc.set(i,o)),o}let ds=null;function qb(){return ds||(ds=new Intl.DateTimeFormat().resolvedOptions().locale,ds)}const Ec=new Map;function Sp(e){let t=Ec.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Ec.set(e,t)),t}const xc=new Map;function zb(e){let t=xc.get(e);if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in t||(t={...Ip,...t}),xc.set(e,t)}return t}function Kb(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=$c(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=$c(u).resolvedOptions(),i=u}const{numberingSystem:o,calendar:s}=r;return[i,o,s]}}function Zb(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Gb(e){const t=[];for(let n=1;n<=12;n++){const r=Z.utc(2009,n,1);t.push(e(r))}return t}function Yb(e){const t=[];for(let n=1;n<=7;n++){const r=Z.utc(2016,11,13+n);t.push(e(r))}return t}function Ca(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function Jb(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Sp(e.locale).numberingSystem==="latn"}class Hb{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:o,...s}=r;if(!n||Object.keys(s).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=Vb(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):vf(t,3);return ze(n,this.padTo)}}}class Xb{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Fr.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=$c(n,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Qb{constructor(t,n,r){this.opts={style:"long",...r},!n&&Rp()&&(this.rtf=Wb(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):v2(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Ip={firstDay:1,minimalDays:4,weekend:[6,7]};class he{static fromOpts(t){return he.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,o=!1){const s=t||Be.defaultLocale,a=s||(o?"en-US":qb()),u=n||Be.defaultNumberingSystem,l=r||Be.defaultOutputCalendar,c=Ac(i)||Be.defaultWeekSettings;return new he(a,u,l,c,s)}static resetCache(){ds=null,bc.clear(),vc.clear(),Dc.clear(),Ec.clear(),xc.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return he.create(t,n,r,i)}constructor(t,n,r,i,o){const[s,a,u]=Kb(t);this.locale=s,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=Zb(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Jb(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:he.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Ac(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Ca(this,t,Vp,()=>{const r=this.intl==="ja"||this.intl.startsWith("ja-");n&=!r;const i=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";if(!this.monthsCache[o][t]){const s=r?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=Gb(s)}return this.monthsCache[o][t]})}weekdays(t,n=!1){return Ca(this,t,zp,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Yb(o=>this.extract(o,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Ca(this,void 0,()=>Kp,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Z.utc(2016,11,13,9),Z.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ca(this,t,Zp,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[Z.utc(-40,1,1),Z.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===r);return s?s.value:null}numberFormatter(t={}){return new Hb(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Xb(t,this.intl,n)}relFormatter(t={}){return new Qb(this.intl,this.isEnglish(),t)}listFormatter(t={}){return _b(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Sp(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Lp()?zb(this.locale):Ip}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Cl=null;class Ot extends Ys{static get utcInstance(){return Cl===null&&(Cl=new Ot(0)),Cl}static instance(t){return t===0?Ot.utcInstance:new Ot(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ot(Ou(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${bs(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${bs(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return bs(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class e2 extends Ys{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Wr(e,t){if(K(e)||e===null)return t;if(e instanceof Ys)return e;if(s2(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?Tu.instance:n==="utc"||n==="gmt"?Ot.utcInstance:Ot.parseSpecifier(n)||Fr.create(e)}else return Zr(e)?Ot.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new e2(e)}const yf={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},cm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},t2=yf.hanidec.replace(/[\[|\]]/g,"").split("");function n2(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(yf.hanidec)!==-1)t+=t2.indexOf(e[n]);else for(const i in cm){const[o,s]=cm[i];r>=o&&r<=s&&(t+=r-o)}}return parseInt(t,10)}else return t}const Cc=new Map;function r2(){Cc.clear()}function Ln({numberingSystem:e},t=""){const n=e||"latn";let r=Cc.get(n);r===void 0&&(r=new Map,Cc.set(n,r));let i=r.get(t);return i===void 0&&(i=new RegExp(`${yf[n]}${t}`),r.set(t,i)),i}let fm=()=>Date.now(),dm="system",mm=null,hm=null,pm=null,gm=60,ym,wm=null;class Be{static get now(){return fm}static set now(t){fm=t}static set defaultZone(t){dm=t}static get defaultZone(){return Wr(dm,Tu.instance)}static get defaultLocale(){return mm}static set defaultLocale(t){mm=t}static get defaultNumberingSystem(){return hm}static set defaultNumberingSystem(t){hm=t}static get defaultOutputCalendar(){return pm}static set defaultOutputCalendar(t){pm=t}static get defaultWeekSettings(){return wm}static set defaultWeekSettings(t){wm=Ac(t)}static get twoDigitCutoffYear(){return gm}static set twoDigitCutoffYear(t){gm=t%100}static get throwOnInvalid(){return ym}static set throwOnInvalid(t){ym=t}static resetCaches(){he.resetCache(),Fr.resetCache(),Z.resetCache(),r2()}}class Wn{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Np=[0,31,59,90,120,151,181,212,243,273,304,334],Tp=[0,31,60,91,121,152,182,213,244,274,305,335];function An(e,t){return new Wn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function wf(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function Mp(e,t,n){return n+(Js(e)?Tp:Np)[t-1]}function Pp(e,t){const n=Js(e)?Tp:Np,r=n.findIndex(o=>o<t),i=t-n[r];return{month:r+1,day:i}}function bf(e,t){return(e-t+7)%7+1}function au(e,t=4,n=1){const{year:r,month:i,day:o}=e,s=Mp(r,i,o),a=bf(wf(r,i,o),n);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=r-1,u=ks(l,t,n)):u>ks(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...Bu(e)}}function bm(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:o}=e,s=bf(wf(r,1,t),n),a=so(r);let u=i*7+o-s-7+t,l;u<1?(l=r-1,u+=so(l)):u>a?(l=r+1,u-=so(r)):l=r;const{month:c,day:f}=Pp(l,u);return{year:l,month:c,day:f,...Bu(e)}}function Al(e){const{year:t,month:n,day:r}=e,i=Mp(t,n,r);return{year:t,ordinal:i,...Bu(e)}}function $m(e){const{year:t,ordinal:n}=e,{month:r,day:i}=Pp(t,n);return{year:t,month:r,day:i,...Bu(e)}}function vm(e,t){if(!K(e.localWeekday)||!K(e.localWeekNumber)||!K(e.localWeekYear)){if(!K(e.weekday)||!K(e.weekNumber)||!K(e.weekYear))throw new ro("Cannot mix locale-based week fields with ISO-based week fields");return K(e.localWeekday)||(e.weekday=e.localWeekday),K(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),K(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function i2(e,t=4,n=1){const r=Mu(e.weekYear),i=Fn(e.weekNumber,1,ks(e.weekYear,t,n)),o=Fn(e.weekday,1,7);return r?i?o?!1:An("weekday",e.weekday):An("week",e.weekNumber):An("weekYear",e.weekYear)}function o2(e){const t=Mu(e.year),n=Fn(e.ordinal,1,so(e.year));return t?n?!1:An("ordinal",e.ordinal):An("year",e.year)}function Op(e){const t=Mu(e.year),n=Fn(e.month,1,12),r=Fn(e.day,1,uu(e.year,e.month));return t?n?r?!1:An("day",e.day):An("month",e.month):An("year",e.year)}function Bp(e){const{hour:t,minute:n,second:r,millisecond:i}=e,o=Fn(t,0,23)||t===24&&n===0&&r===0&&i===0,s=Fn(n,0,59),a=Fn(r,0,59),u=Fn(i,0,999);return o?s?a?u?!1:An("millisecond",i):An("second",r):An("minute",n):An("hour",t)}function K(e){return typeof e>"u"}function Zr(e){return typeof e=="number"}function Mu(e){return typeof e=="number"&&e%1===0}function s2(e){return typeof e=="string"}function a2(e){return Object.prototype.toString.call(e)==="[object Date]"}function Rp(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Lp(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function u2(e){return Array.isArray(e)?e:[e]}function Dm(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const o=[t(i),i];return r&&n(r[0],o[0])===r[0]?r:o},null)[1]}function l2(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function go(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ac(e){if(e==null)return null;if(typeof e!="object")throw new xt("Week settings must be an object");if(!Fn(e.firstDay,1,7)||!Fn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Fn(t,1,7)))throw new xt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Fn(e,t,n){return Mu(e)&&e>=t&&e<=n}function c2(e,t){return e-t*Math.floor(e/t)}function ze(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function jr(e){if(!(K(e)||e===null||e===""))return parseInt(e,10)}function hi(e){if(!(K(e)||e===null||e===""))return parseFloat(e)}function $f(e){if(!(K(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function vf(e,t,n="round"){const r=10**t;switch(n){case"expand":return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case"trunc":return Math.trunc(e*r)/r;case"round":return Math.round(e*r)/r;case"floor":return Math.floor(e*r)/r;case"ceil":return Math.ceil(e*r)/r;default:throw new RangeError(`Value rounding ${n} is out of range`)}}function Js(e){return e%4===0&&(e%100!==0||e%400===0)}function so(e){return Js(e)?366:365}function uu(e,t){const n=c2(t-1,12)+1,r=e+(t-n)/12;return n===2?Js(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Pu(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Em(e,t,n){return-bf(wf(e,1,t),n)+t-1}function ks(e,t=4,n=1){const r=Em(e,t,n),i=Em(e+1,t,n);return(so(e)-r+i)/7}function Fc(e){return e>99?e:e>Be.twoDigitCutoffYear?1900+e:2e3+e}function Up(e,t,n,r=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(n,s).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Ou(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function jp(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new xt(`Invalid unit value ${e}`);return t}function lu(e,t){const n={};for(const r in e)if(go(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=jp(i)}return n}function bs(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${ze(n,2)}:${ze(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${ze(n,2)}${ze(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Bu(e){return l2(e,["hour","minute","second","millisecond"])}const f2=["January","February","March","April","May","June","July","August","September","October","November","December"],_p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d2=["J","F","M","A","M","J","J","A","S","O","N","D"];function Vp(e){switch(e){case"narrow":return[...d2];case"short":return[..._p];case"long":return[...f2];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Wp=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],qp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],m2=["M","T","W","T","F","S","S"];function zp(e){switch(e){case"narrow":return[...m2];case"short":return[...qp];case"long":return[...Wp];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Kp=["AM","PM"],h2=["Before Christ","Anno Domini"],p2=["BC","AD"],g2=["B","A"];function Zp(e){switch(e){case"narrow":return[...g2];case"short":return[...p2];case"long":return[...h2];default:return null}}function y2(e){return Kp[e.hour<12?0:1]}function w2(e,t){return zp(t)[e.weekday-1]}function b2(e,t){return Vp(t)[e.month-1]}function $2(e,t){return Zp(t)[e.year<0?0:1]}function v2(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function xm(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const D2={D:su,DD:cp,DDD:fp,DDDD:dp,t:mp,tt:hp,ttt:pp,tttt:gp,T:yp,TT:wp,TTT:bp,TTTT:$p,f:vp,ff:Ep,fff:Cp,ffff:Fp,F:Dp,FF:xp,FFF:Ap,FFFF:kp};class At{static create(t,n={}){return new At(t,n)}static parseFormat(t){let n=null,r="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((r.length>0||i)&&o.push({literal:i||/^\s+$/.test(r),val:r===""?"'":r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&o.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&o.push({literal:i||/^\s+$/.test(r),val:r}),o}static macroTokenToFormatOpts(t){return D2[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0,r=void 0){if(this.opts.forceSimple)return ze(t,n);const i={...this.opts};return n>0&&(i.padTo=n),r&&(i.signDisplay=r),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(g,x)=>this.loc.extract(t,g,x),s=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",a=()=>r?y2(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(g,x)=>r?b2(t,g):o(x?{month:g}:{month:g,day:"numeric"},"month"),l=(g,x)=>r?w2(t,g):o(x?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),c=g=>{const x=At.macroTokenToFormatOpts(g);return x?this.formatWithSystemDefault(t,x):g},f=g=>r?$2(t,g):o({era:g},"era"),d=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(g)}};return xm(At.parseFormat(n),d)}formatDurationFromString(t,n){const r=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,f)=>d=>{const g=i(d);if(g){const x=f.isNegativeDuration&&g!==f.largestUnit?r:1;let D;return this.opts.signMode==="negativeLargestOnly"&&g!==f.largestUnit?D="never":this.opts.signMode==="all"?D="always":D="auto",this.num(c.get(g)*x,d.length,D)}else return d},s=At.parseFormat(n),a=s.reduce((c,{literal:f,val:d})=>f?c:c.concat(d),[]),u=t.shiftTo(...a.map(i).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return xm(s,o(u,l))}}const Gp=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Oo(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function Bo(...e){return t=>e.reduce(([n,r,i],o)=>{const[s,a,u]=o(t,i);return[{...n,...s},a||r,u]},[{},null,1]).slice(0,2)}function Ro(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function Yp(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=jr(t[n+i]);return[r,null,n+i]}}const Jp=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,E2=`(?:${Jp.source}?(?:\\[(${Gp.source})\\])?)?`,Df=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Hp=RegExp(`${Df.source}${E2}`),Ef=RegExp(`(?:[Tt]${Hp.source})?`),x2=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,C2=/(\d{4})-?W(\d\d)(?:-?(\d))?/,A2=/(\d{4})-?(\d{3})/,F2=Yp("weekYear","weekNumber","weekDay"),k2=Yp("year","ordinal"),S2=/(\d{4})-(\d\d)-(\d\d)/,Xp=RegExp(`${Df.source} ?(?:${Jp.source}|(${Gp.source}))?`),I2=RegExp(`(?: ${Xp.source})?`);function ao(e,t,n){const r=e[t];return K(r)?n:jr(r)}function N2(e,t){return[{year:ao(e,t),month:ao(e,t+1,1),day:ao(e,t+2,1)},null,t+3]}function Lo(e,t){return[{hours:ao(e,t,0),minutes:ao(e,t+1,0),seconds:ao(e,t+2,0),milliseconds:$f(e[t+3])},null,t+4]}function Hs(e,t){const n=!e[t]&&!e[t+1],r=Ou(e[t+1],e[t+2]),i=n?null:Ot.instance(r);return[{},i,t+3]}function Xs(e,t){const n=e[t]?Fr.create(e[t]):null;return[{},n,t+1]}const T2=RegExp(`^T?${Df.source}$`),M2=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function P2(e){const[t,n,r,i,o,s,a,u,l]=e,c=t[0]==="-",f=u&&u[0]==="-",d=(g,x=!1)=>g!==void 0&&(x||g&&c)?-g:g;return[{years:d(hi(n)),months:d(hi(r)),weeks:d(hi(i)),days:d(hi(o)),hours:d(hi(s)),minutes:d(hi(a)),seconds:d(hi(u),u==="-0"),milliseconds:d($f(l),f)}]}const O2={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function xf(e,t,n,r,i,o,s){const a={year:t.length===2?Fc(jr(t)):jr(t),month:_p.indexOf(n)+1,day:jr(r),hour:jr(i),minute:jr(o)};return s&&(a.second=jr(s)),e&&(a.weekday=e.length>3?Wp.indexOf(e)+1:qp.indexOf(e)+1),a}const B2=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function R2(e){const[,t,n,r,i,o,s,a,u,l,c,f]=e,d=xf(t,i,r,n,o,s,a);let g;return u?g=O2[u]:l?g=0:g=Ou(c,f),[d,new Ot(g)]}function L2(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const U2=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,j2=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,_2=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Cm(e){const[,t,n,r,i,o,s,a]=e;return[xf(t,i,r,n,o,s,a),Ot.utcInstance]}function V2(e){const[,t,n,r,i,o,s,a]=e;return[xf(t,a,n,r,i,o,s),Ot.utcInstance]}const W2=Oo(x2,Ef),q2=Oo(C2,Ef),z2=Oo(A2,Ef),K2=Oo(Hp),Qp=Bo(N2,Lo,Hs,Xs),Z2=Bo(F2,Lo,Hs,Xs),G2=Bo(k2,Lo,Hs,Xs),Y2=Bo(Lo,Hs,Xs);function J2(e){return Ro(e,[W2,Qp],[q2,Z2],[z2,G2],[K2,Y2])}function H2(e){return Ro(L2(e),[B2,R2])}function X2(e){return Ro(e,[U2,Cm],[j2,Cm],[_2,V2])}function Q2(e){return Ro(e,[M2,P2])}const e$=Bo(Lo);function t$(e){return Ro(e,[T2,e$])}const n$=Oo(S2,I2),r$=Oo(Xp),i$=Bo(Lo,Hs,Xs);function o$(e){return Ro(e,[n$,Qp],[r$,i$])}const Am="Invalid Duration",eg={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},s$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...eg},vn=146097/400,Zi=146097/4800,a$={years:{quarters:4,months:12,weeks:vn/7,days:vn,hours:vn*24,minutes:vn*24*60,seconds:vn*24*60*60,milliseconds:vn*24*60*60*1e3},quarters:{months:3,weeks:vn/28,days:vn/4,hours:vn*24/4,minutes:vn*24*60/4,seconds:vn*24*60*60/4,milliseconds:vn*24*60*60*1e3/4},months:{weeks:Zi/7,days:Zi,hours:Zi*24,minutes:Zi*24*60,seconds:Zi*24*60*60,milliseconds:Zi*24*60*60*1e3},...eg},Di=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],u$=Di.slice(0).reverse();function cr(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new oe(r)}function tg(e,t){let n=t.milliseconds??0;for(const r of u$.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Fm(e,t){const n=tg(e,t)<0?-1:1;Di.reduceRight((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]*n,s=e[i][r],a=Math.floor(o/s);t[i]+=a*n,t[r]-=a*s*n}return i},null),Di.reduce((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]%1;t[r]-=o,t[i]+=o*e[r][i]}return i},null)}function km(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class oe{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?a$:s$;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||he.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return oe.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new xt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new oe({values:lu(t,oe.normalizeUnit),loc:he.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Zr(t))return oe.fromMillis(t);if(oe.isDuration(t))return t;if(typeof t=="object")return oe.fromObject(t);throw new xt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=Q2(t);return r?oe.fromObject(r,n):oe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=t$(t);return r?oe.fromObject(r,n):oe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new xt("need to specify a reason the Duration is invalid");const r=t instanceof Wn?t:new Wn(t,n);if(Be.throwOnInvalid)throw new Pb(r);return new oe({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new lp(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?At.create(this.loc,r).formatDurationFromString(this,t):Am}toHuman(t={}){if(!this.isValid)return Am;const n=t.showZeros!==!1,r=Di.map(i=>{const o=this.values[i];return K(o)||o===0&&!n?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=vf(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},Z.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?tg(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=oe.fromDurationLike(t),r={};for(const i of Di)(go(n.values,i)||go(this.values,i))&&(r[i]=n.get(i)+this.get(i));return cr(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=oe.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=jp(t(this.values[r],r));return cr(this,{values:n},!0)}get(t){return this[oe.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...lu(t,oe.normalizeUnit)};return cr(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return cr(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Fm(this.matrix,t),cr(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=km(this.normalize().shiftToAll().toObject());return cr(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>oe.normalizeUnit(s));const n={},r={},i=this.toObject();let o;for(const s of Di)if(t.indexOf(s)>=0){o=s;let a=0;for(const l in r)a+=this.matrix[l][s]*r[l],r[l]=0;Zr(i[s])&&(a+=i[s]);const u=Math.trunc(a);n[s]=u,r[s]=(a*1e3-u*1e3)/1e3}else Zr(i[s])&&(r[s]=i[s]);for(const s in r)r[s]!==0&&(n[o]+=s===o?r[s]:r[s]/this.matrix[o][s]);return Fm(this.matrix,n),cr(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return cr(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=km(this.values);return cr(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of Di)if(!n(this.values[r],t.values[r]))return!1;return!0}}const Gi="Invalid Interval";function l$(e,t){return!e||!e.isValid?Oe.invalid("missing or invalid start"):!t||!t.isValid?Oe.invalid("missing or invalid end"):t<e?Oe.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Oe{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new xt("need to specify a reason the Interval is invalid");const r=t instanceof Wn?t:new Wn(t,n);if(Be.throwOnInvalid)throw new Mb(r);return new Oe({invalid:r})}static fromDateTimes(t,n){const r=ns(t),i=ns(n),o=l$(r,i);return o??new Oe({start:r,end:i})}static after(t,n){const r=oe.fromDurationLike(n),i=ns(t);return Oe.fromDateTimes(i,i.plus(r))}static before(t,n){const r=oe.fromDurationLike(n),i=ns(t);return Oe.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let o,s;try{o=Z.fromISO(r,n),s=o.isValid}catch{s=!1}let a,u;try{a=Z.fromISO(i,n),u=a.isValid}catch{u=!1}if(s&&u)return Oe.fromDateTimes(o,a);if(s){const l=oe.fromISO(i,n);if(l.isValid)return Oe.after(o,l)}else if(u){const l=oe.fromISO(r,n);if(l.isValid)return Oe.before(a,l)}}return Oe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?Oe.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(ns).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),r=[];let{s:i}=this,o=0;for(;i<this.e;){const s=n[o]||this.e,a=+s>+this.e?this.e:s;r.push(Oe.fromDateTimes(i,a)),i=a,o+=1}return r}splitBy(t){const n=oe.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,o;const s=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));o=+a>+this.e?this.e:a,s.push(Oe.fromDateTimes(r,o)),r=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:Oe.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return Oe.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],o=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(Oe.fromDateTimes(n,u.time)),n=null);return Oe.merge(i)}difference(...t){return Oe.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Gi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=su,n={}){return this.isValid?At.create(this.s.loc.clone(n),t).formatInterval(this):Gi}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Gi}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Gi}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Gi}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:Gi}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):oe.invalid(this.invalidReason)}mapEndpoints(t){return Oe.fromDateTimes(t(this.s),t(this.e))}}class Aa{static hasDST(t=Be.defaultZone){const n=Z.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Fr.isValidZone(t)}static normalizeZone(t){return Wr(t,Be.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||he.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||he.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||he.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||he.create(n,r,o)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||he.create(n,r,o)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||he.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||he.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return he.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return he.create(n,null,"gregory").eras(t)}static features(){return{relative:Rp(),localeWeek:Lp()}}}function Sm(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(oe.fromMillis(r).as("days"))}function c$(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Sm(u,l);return(c-c%7)/7}],["days",Sm]],i={},o=e;let s,a;for(const[u,l]of r)n.indexOf(u)>=0&&(s=u,i[u]=l(e,t),a=o.plus(i),a>t?(i[u]--,e=o.plus(i),e>t&&(a=e,i[u]--,e=o.plus(i))):e=a);return[e,i,a,s]}function f$(e,t,n,r){let[i,o,s,a]=c$(e,t,n);const u=t-i,l=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+u/(s-i)));const c=oe.fromObject(o,r);return l.length>0?oe.fromMillis(u,r).shiftTo(...l).plus(c):c}const d$="missing Intl.DateTimeFormat.formatToParts support";function ce(e,t=n=>n){return{regex:e,deser:([n])=>t(n2(n))}}const m$=" ",ng=`[ ${m$}]`,rg=new RegExp(ng,"g");function h$(e){return e.replace(/\./g,"\\.?").replace(rg,ng)}function Im(e){return e.replace(/\./g,"").replace(rg," ").toLowerCase()}function Un(e,t){return e===null?null:{regex:RegExp(e.map(h$).join("|")),deser:([n])=>e.findIndex(r=>Im(n)===Im(r))+t}}function Nm(e,t){return{regex:e,deser:([,n,r])=>Ou(n,r),groups:t}}function Fa(e){return{regex:e,deser:([t])=>t}}function p$(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function g$(e,t){const n=Ln(t),r=Ln(t,"{2}"),i=Ln(t,"{3}"),o=Ln(t,"{4}"),s=Ln(t,"{6}"),a=Ln(t,"{1,2}"),u=Ln(t,"{1,3}"),l=Ln(t,"{1,6}"),c=Ln(t,"{1,9}"),f=Ln(t,"{2,4}"),d=Ln(t,"{4,6}"),g=k=>({regex:RegExp(p$(k.val)),deser:([A])=>A,literal:!0}),D=(k=>{if(e.literal)return g(k);switch(k.val){case"G":return Un(t.eras("short"),0);case"GG":return Un(t.eras("long"),0);case"y":return ce(l);case"yy":return ce(f,Fc);case"yyyy":return ce(o);case"yyyyy":return ce(d);case"yyyyyy":return ce(s);case"M":return ce(a);case"MM":return ce(r);case"MMM":return Un(t.months("short",!0),1);case"MMMM":return Un(t.months("long",!0),1);case"L":return ce(a);case"LL":return ce(r);case"LLL":return Un(t.months("short",!1),1);case"LLLL":return Un(t.months("long",!1),1);case"d":return ce(a);case"dd":return ce(r);case"o":return ce(u);case"ooo":return ce(i);case"HH":return ce(r);case"H":return ce(a);case"hh":return ce(r);case"h":return ce(a);case"mm":return ce(r);case"m":return ce(a);case"q":return ce(a);case"qq":return ce(r);case"s":return ce(a);case"ss":return ce(r);case"S":return ce(u);case"SSS":return ce(i);case"u":return Fa(c);case"uu":return Fa(a);case"uuu":return ce(n);case"a":return Un(t.meridiems(),0);case"kkkk":return ce(o);case"kk":return ce(f,Fc);case"W":return ce(a);case"WW":return ce(r);case"E":case"c":return ce(n);case"EEE":return Un(t.weekdays("short",!1),1);case"EEEE":return Un(t.weekdays("long",!1),1);case"ccc":return Un(t.weekdays("short",!0),1);case"cccc":return Un(t.weekdays("long",!0),1);case"Z":case"ZZ":return Nm(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return Nm(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Fa(/[a-z_+-/]{1,256}?/i);case" ":return Fa(/[^\S\n\r]/);default:return g(k)}})(e)||{invalidReason:d$};return D.token=e,D}const y$={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function w$(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const o=t[r];let s=r;r==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=n.hour12?"hour12":"hour24");let a=y$[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function b$(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function $$(e,t,n){const r=e.match(t);if(r){const i={};let o=1;for(const s in n)if(go(n,s)){const a=n[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(o,o+u))),o+=u}return[r,i]}else return[r,{}]}function v$(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return K(e.z)||(n=Fr.create(e.z)),K(e.Z)||(n||(n=new Ot(e.Z)),r=e.Z),K(e.q)||(e.M=(e.q-1)*3+1),K(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),K(e.u)||(e.S=$f(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),n,r]}let Fl=null;function D$(){return Fl||(Fl=Z.fromMillis(1555555555555)),Fl}function E$(e,t){if(e.literal)return e;const n=At.macroTokenToFormatOpts(e.val),r=ag(n,t);return r==null||r.includes(void 0)?e:r}function ig(e,t){return Array.prototype.concat(...e.map(n=>E$(n,t)))}class og{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=ig(At.parseFormat(n),t),this.units=this.tokens.map(r=>g$(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=b$(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=$$(t,this.regex,this.handlers),[i,o,s]=r?v$(r):[null,null,void 0];if(go(r,"a")&&go(r,"H"))throw new ro("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function sg(e,t,n){return new og(e,n).explainFromTokens(t)}function x$(e,t,n){const{result:r,zone:i,specificOffset:o,invalidReason:s}=sg(e,t,n);return[r,i,o,s]}function ag(e,t){if(!e)return null;const r=At.create(t,e).dtFormatter(D$()),i=r.formatToParts(),o=r.resolvedOptions();return i.map(s=>w$(s,e,o))}const kl="Invalid DateTime",Tm=864e13;function ms(e){return new Wn("unsupported zone",`the zone "${e.name}" is not supported`)}function Sl(e){return e.weekData===null&&(e.weekData=au(e.c)),e.weekData}function Il(e){return e.localWeekData===null&&(e.localWeekData=au(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function pi(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Z({...n,...t,old:n})}function ug(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const o=n.offset(r);return i===o?[r,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function ka(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Ka(e,t,n){return ug(Pu(e),t,n)}function Mm(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:r,month:i,day:Math.min(e.c.day,uu(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=oe.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Pu(o);let[u,l]=ug(a,n,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function Yi(e,t,n,r,i,o){const{setZone:s,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=Z.fromObject(e,{...n,zone:u,specificOffset:o});return s?l:l.setZone(a)}else return Z.invalid(new Wn("unparsable",`the input "${i}" can't be parsed as ${r}`))}function Sa(e,t,n=!0){return e.isValid?At.create(he.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Nl(e,t,n){const r=e.c.year>9999||e.c.year<0;let i="";if(r&&e.c.year>=0&&(i+="+"),i+=ze(e.c.year,r?6:4),n==="year")return i;if(t){if(i+="-",i+=ze(e.c.month),n==="month")return i;i+="-"}else if(i+=ze(e.c.month),n==="month")return i;return i+=ze(e.c.day),i}function Pm(e,t,n,r,i,o,s){let a=!n||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=ze(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=ze(e.c.minute),s==="minute")break;a&&(u+=":",u+=ze(e.c.second))}else{if(u+=ze(e.c.minute),s==="minute")break;a&&(u+=ze(e.c.second))}if(s==="second")break;a&&(!r||e.c.millisecond!==0)&&(u+=".",u+=ze(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?u+="Z":e.o<0?(u+="-",u+=ze(Math.trunc(-e.o/60)),u+=":",u+=ze(Math.trunc(-e.o%60))):(u+="+",u+=ze(Math.trunc(e.o/60)),u+=":",u+=ze(Math.trunc(e.o%60)))),o&&(u+="["+e.zone.ianaName+"]"),u}const lg={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},C$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},A$={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Za=["year","month","day","hour","minute","second","millisecond"],F$=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],k$=["year","ordinal","hour","minute","second","millisecond"];function Ga(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new lp(e);return t}function Om(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Ga(e)}}function S$(e){if(hs===void 0&&(hs=Be.now()),e.type!=="iana")return e.offset(hs);const t=e.name;let n=kc.get(t);return n===void 0&&(n=e.offset(hs),kc.set(t,n)),n}function Bm(e,t){const n=Wr(t.zone,Be.defaultZone);if(!n.isValid)return Z.invalid(ms(n));const r=he.fromObject(t);let i,o;if(K(e.year))i=Be.now();else{for(const u of Za)K(e[u])&&(e[u]=lg[u]);const s=Op(e)||Bp(e);if(s)return Z.invalid(s);const a=S$(n);[i,o]=Ka(e,a,n)}return new Z({ts:i,zone:n,loc:r,o})}function Rm(e,t,n){const r=K(n.round)?!0:n.round,i=K(n.rounding)?"trunc":n.rounding,o=(a,u)=>(a=vf(a,r||n.calendary?0:2,n.calendary?"round":i),t.loc.clone(n).relFormatter(n).format(a,u)),s=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return o(s(n.unit),n.unit);for(const a of n.units){const u=s(a);if(Math.abs(u)>=1)return o(u,a)}return o(e>t?-0:0,n.units[n.units.length-1])}function Lm(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let hs;const kc=new Map;class Z{constructor(t){const n=t.zone||Be.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new Wn("invalid input"):null)||(n.isValid?null:ms(n));this.ts=K(t.ts)?Be.now():t.ts;let i=null,o=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,o]=[t.old.c,t.old.o];else{const a=Zr(t.o)&&!t.old?t.o:n.offset(this.ts);i=ka(this.ts,a),r=Number.isNaN(i.year)?new Wn("invalid input"):null,i=r?null:i,o=r?null:a}this._zone=n,this.loc=t.loc||he.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new Z({})}static local(){const[t,n]=Lm(arguments),[r,i,o,s,a,u,l]=n;return Bm({year:r,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=Lm(arguments),[r,i,o,s,a,u,l]=n;return t.zone=Ot.utcInstance,Bm({year:r,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=a2(t)?t.valueOf():NaN;if(Number.isNaN(r))return Z.invalid("invalid input");const i=Wr(n.zone,Be.defaultZone);return i.isValid?new Z({ts:r,zone:i,loc:he.fromObject(n)}):Z.invalid(ms(i))}static fromMillis(t,n={}){if(Zr(t))return t<-Tm||t>Tm?Z.invalid("Timestamp out of range"):new Z({ts:t,zone:Wr(n.zone,Be.defaultZone),loc:he.fromObject(n)});throw new xt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Zr(t))return new Z({ts:t*1e3,zone:Wr(n.zone,Be.defaultZone),loc:he.fromObject(n)});throw new xt("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=Wr(n.zone,Be.defaultZone);if(!r.isValid)return Z.invalid(ms(r));const i=he.fromObject(n),o=lu(t,Om),{minDaysInFirstWeek:s,startOfWeek:a}=vm(o,i),u=Be.now(),l=K(n.specificOffset)?r.offset(u):n.specificOffset,c=!K(o.ordinal),f=!K(o.year),d=!K(o.month)||!K(o.day),g=f||d,x=o.weekYear||o.weekNumber;if((g||c)&&x)throw new ro("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&c)throw new ro("Can't mix ordinal dates with month/day");const D=x||o.weekday&&!g;let k,A,I=ka(u,l);D?(k=F$,A=C$,I=au(I,s,a)):c?(k=k$,A=A$,I=Al(I)):(k=Za,A=lg);let j=!1;for(const bn of k){const On=o[bn];K(On)?j?o[bn]=A[bn]:o[bn]=I[bn]:j=!0}const q=D?i2(o,s,a):c?o2(o):Op(o),G=q||Bp(o);if(G)return Z.invalid(G);const Re=D?bm(o,s,a):c?$m(o):o,[Et,et]=Ka(Re,l,r),It=new Z({ts:Et,zone:r,o:et,loc:i});return o.weekday&&g&&t.weekday!==It.weekday?Z.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${It.toISO()}`):It.isValid?It:Z.invalid(It.invalid)}static fromISO(t,n={}){const[r,i]=J2(t);return Yi(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=H2(t);return Yi(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=X2(t);return Yi(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(K(t)||K(n))throw new xt("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=r,s=he.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,u,l,c]=x$(s,t,n);return c?Z.invalid(c):Yi(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return Z.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=o$(t);return Yi(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new xt("need to specify a reason the DateTime is invalid");const r=t instanceof Wn?t:new Wn(t,n);if(Be.throwOnInvalid)throw new Tb(r);return new Z({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=ag(t,he.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return ig(At.parseFormat(t),he.fromObject(n)).map(i=>i.val).join("")}static resetCache(){hs=void 0,kc.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Sl(this).weekYear:NaN}get weekNumber(){return this.isValid?Sl(this).weekNumber:NaN}get weekday(){return this.isValid?Sl(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Il(this).weekday:NaN}get localWeekNumber(){return this.isValid?Il(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Il(this).weekYear:NaN}get ordinal(){return this.isValid?Al(this.c).ordinal:NaN}get monthShort(){return this.isValid?Aa.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Aa.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Aa.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Aa.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=Pu(this.c),i=this.zone.offset(r-t),o=this.zone.offset(r+t),s=this.zone.offset(r-i*n),a=this.zone.offset(r-o*n);if(s===a)return[this];const u=r-s*n,l=r-a*n,c=ka(u,s),f=ka(l,a);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[pi(this,{ts:u}),pi(this,{ts:l})]:[this]}get isInLeapYear(){return Js(this.year)}get daysInMonth(){return uu(this.year,this.month)}get daysInYear(){return this.isValid?so(this.year):NaN}get weeksInWeekYear(){return this.isValid?ks(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ks(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=At.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Ot.instance(t),n)}toLocal(){return this.setZone(Be.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Wr(t,Be.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const o=t.offset(this.ts),s=this.toObject();[i]=Ka(s,o,t)}return pi(this,{ts:i,zone:t})}else return Z.invalid(ms(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return pi(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=lu(t,Om),{minDaysInFirstWeek:r,startOfWeek:i}=vm(n,this.loc),o=!K(n.weekYear)||!K(n.weekNumber)||!K(n.weekday),s=!K(n.ordinal),a=!K(n.year),u=!K(n.month)||!K(n.day),l=a||u,c=n.weekYear||n.weekNumber;if((l||s)&&c)throw new ro("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new ro("Can't mix ordinal dates with month/day");let f;o?f=bm({...au(this.c,r,i),...n},r,i):K(n.ordinal)?(f={...this.toObject(),...n},K(n.day)&&(f.day=Math.min(uu(f.year,f.month),f.day))):f=$m({...Al(this.c),...n});const[d,g]=Ka(f,this.o,this.zone);return pi(this,{ts:d,o:g})}plus(t){if(!this.isValid)return this;const n=oe.fromDurationLike(t);return pi(this,Mm(this,n))}minus(t){if(!this.isValid)return this;const n=oe.fromDurationLike(t).negate();return pi(this,Mm(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=oe.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(r.weekNumber=this.weekNumber-1),r.weekday=o}else r.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?At.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):kl}toLocaleString(t=su,n={}){return this.isValid?At.create(this.loc.clone(n),t).formatDateTime(this):kl}toLocaleParts(t={}){return this.isValid?At.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Ga(s);const a=t==="extended";let u=Nl(this,a,s);return Za.indexOf(s)>=3&&(u+="T"),u+=Pm(this,a,n,r,i,o,s),u}toISODate({format:t="extended",precision:n="day"}={}){return this.isValid?Nl(this,t==="extended",Ga(n)):null}toISOWeekDate(){return Sa(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Ga(a),(i&&Za.indexOf(a)>=3?"T":"")+Pm(this,s==="extended",n,t,r,o,a)):null}toRFC2822(){return Sa(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Sa(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Nl(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),Sa(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():kl}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return oe.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},o=u2(n).map(oe.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=f$(a,u,o,i);return s?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(Z.now(),t,n)}until(t){return this.isValid?Oe.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(n,r)<=i&&i<=o.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||Z.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),Rm(n,this.plus(r),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?Rm(t.base||Z.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(Z.isDateTime))throw new xt("min requires all arguments be DateTimes");return Dm(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(Z.isDateTime))throw new xt("max requires all arguments be DateTimes");return Dm(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:o=null}=r,s=he.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return sg(s,t,n)}static fromStringExplain(t,n,r={}){return Z.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,o=he.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new og(o,t)}static fromFormatParser(t,n,r={}){if(K(t)||K(n))throw new xt("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=r,s=he.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(n.locale))throw new xt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?Z.invalid(c):Yi(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return su}static get DATE_MED(){return cp}static get DATE_MED_WITH_WEEKDAY(){return Ob}static get DATE_FULL(){return fp}static get DATE_HUGE(){return dp}static get TIME_SIMPLE(){return mp}static get TIME_WITH_SECONDS(){return hp}static get TIME_WITH_SHORT_OFFSET(){return pp}static get TIME_WITH_LONG_OFFSET(){return gp}static get TIME_24_SIMPLE(){return yp}static get TIME_24_WITH_SECONDS(){return wp}static get TIME_24_WITH_SHORT_OFFSET(){return bp}static get TIME_24_WITH_LONG_OFFSET(){return $p}static get DATETIME_SHORT(){return vp}static get DATETIME_SHORT_WITH_SECONDS(){return Dp}static get DATETIME_MED(){return Ep}static get DATETIME_MED_WITH_SECONDS(){return xp}static get DATETIME_MED_WITH_WEEKDAY(){return Bb}static get DATETIME_FULL(){return Cp}static get DATETIME_FULL_WITH_SECONDS(){return Ap}static get DATETIME_HUGE(){return Fp}static get DATETIME_HUGE_WITH_SECONDS(){return kp}}function ns(e){if(Z.isDateTime(e))return e;if(e&&e.valueOf&&Zr(e.valueOf()))return Z.fromJSDate(e);if(e&&typeof e=="object")return Z.fromObject(e);throw new xt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var je;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(je||(je={}));const I$=[je.Milliseconds,je.Seconds,je.Minutes,je.Hours,je.Days,je.Weeks,je.Months,je.Years];je.Milliseconds+"",je.Seconds+"",je.Minutes+"",je.Hours+"",je.Days+"",je.Weeks+"",je.Months+"",je.Years+"";function N$(e){return I$.filter(t=>e[t])}function Sc(e,{decimalCount:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function T$(e){return Sc(Math.max(e-.4,0),{decimalCount:0})}function Um(e){return e===0?0:Math.sign(e)}function Ss(e,t,n={}){const r={},i={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=N$(t).reverse();if(o||s)return a.forEach(c=>{r[c]=o?1/0:-1/0}),r;let u=oe.fromObject(e).as(je.Milliseconds);const l=Um(u);return a.forEach((c,f)=>{const d=f===a.length-1;if(c===je.Milliseconds)r.milliseconds=Sc(u,i);else{const g=oe.fromObject({milliseconds:u}).as(c),x=Math.sign(g),D=Math.abs(g),k=d?Sc(D,i):Math.floor(i.decimalCount==null?D:T$(D)),A=k===0?0:k*x;r[c]=A,u-=oe.fromObject({[c]:A}).as(je.Milliseconds),l!==Um(u)&&(u=0)}}),r}Intl.DateTimeFormat().resolvedOptions().locale;var lt;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(lt||(lt={}));lt.Year,lt.Hour,lt.Minute,lt.Second,lt.Millisecond;lt.Month,lt.Week,lt.Day;lt.Millisecond,lt.Second,lt.Minute,lt.Hour,lt.Day,lt.Week,lt.Month,lt.Year;var Ct;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(Ct||(Ct={}));Ct.Sunday+"",Ct.Monday+"",Ct.Tuesday+"",Ct.Wednesday+"",Ct.Thursday+"",Ct.Friday+"",Ct.Saturday+"";Ct.Sunday,Ct.Monday,Ct.Tuesday,Ct.Wednesday,Ct.Thursday,Ct.Friday,Ct.Saturday;var _t;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(_t||(_t={}));_t.January,_t.February,_t.March,_t.April,_t.May,_t.June,_t.July,_t.August,_t.September,_t.October,_t.November,_t.December;function Is(e){const t=new up,r=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:Ss(e,{milliseconds:!0}).milliseconds;return r!==1/0&&r!==-1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}function cg(...e){const t=e.join(""),n=ep(Array.from(t));return Array.from(n).join("")}function fg(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function dg(e,t){const n=cg([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return mg(e,n)}function mg(e,t){const n=cg(t);return typeof e=="string"?new RegExp(fg(e),n):new RegExp(e.source,n)}function hg(e,{caseSensitive:t}){const r="".replaceAll("i","");return mg(e,r)}function Cf(e,t=1){return e.split(`
`).map(n=>["    ".repeat(Math.round(t)),n].join("")).join(`
`)}function pg(e,t){return t?typeof t=="string"?!!new RegExp(fg(t),"i").exec(e):!!dg(t,"i").exec(e):!1}class m extends Error{name="AssertionError";constructor(t,n){super(Nu(n,t)||"Assertion failed.")}}const jm={interval:{milliseconds:100},timeout:{seconds:10}},Tl=Symbol("not set");async function M$(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:o,options:s}=P$(t),a=Ss(s.timeout,{milliseconds:!0}).milliseconds,u=Ss(s.interval,{milliseconds:!0});let l=Tl,c;async function f(){try{l=n?r():await r(),e(l,...i)}catch(g){l=Tl,c=Ft(g)}}const d=Date.now();for(;l===Tl;)if(await f(),await Is(u),Date.now()-d>=a){const x=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw gf(c,x)}return l}function N(e,t=!1){return((...n)=>M$(e,n,t))}function P$(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:gg(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function gg(e){return{interval:e?.interval||jm.interval,timeout:e?.timeout||jm.timeout}}const rs={isFalse(e,t){if(e!==!1)throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new m(`'${h(e)}' is not truthy.`,t)}},yg={assert:rs,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new m(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:N(rs.isFalse),isFalsy:N(rs.isFalsy),isTrue:N(rs.isTrue),isTruthy:N(rs.isTruthy)}};function O$(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n)}function B$(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n)}function R$(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n)}function L$(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n)}const is={endsWith:O$,endsWithout:B$,startsWith:R$,startsWithout:L$},wg={assert:is,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:N(is.endsWith),endsWithout:N(is.endsWithout),startsWith:N(is.startsWith),startsWithout:N(is.startsWithout)}};function U$(e,t,n){const r=_n(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function pr(e,t){return _n(t).includes(e)}const Ml={isEnumValue(e,t,n){U$(e,t,n)},isNotEnumValue(e,t,n){const r=_n(t);if(r.includes(e))throw new m(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},bg={assert:Ml,check:{isEnumValue:pr,isNotEnumValue(e,t){return!_n(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=_n(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=_n(t);if(r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(_n(t).includes(e))return e},isNotEnumValue(e,t){if(!_n(t).includes(e))return e}},waitUntil:{isEnumValue:N(Ml.isEnumValue),isNotEnumValue:N(Ml.isNotEnumValue)}},Pl={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new m("Entries are equal.",n)}},$g={assert:Pl,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],o=t[r];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],o=t[r];return i!==o})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new m("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:N(Pl.entriesEqual),notEntriesEqual:N(Pl.notEntriesEqual)}};function cu(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Ns(e,t){if(!(e===t||cu(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!cu(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{Ns(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${Yt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function ps(e,t){if(e===t||cu(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!cu(n,r)?!1:Object.keys(e).every(o=>ps(e[o],t[o]))}return!1}const Ol={jsonEquals(e,t,n){try{Ns(e,t)}catch(r){throw new m(Yt(r),n)}},notJsonEquals(e,t,n){try{Ns(e,t)}catch{return}throw new m("Values are JSON equal.",n)}},vg={assert:Ol,check:{jsonEquals(e,t){return ps(e,t)},notJsonEquals(e,t){return!ps(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Ns(e,t),e}catch(r){throw new m(Yt(r),n)}},notJsonEquals(e,t,n){try{Ns(e,t)}catch{return e}throw new m("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(ps(e,t))return e},notJsonEquals(e,t){if(!ps(e,t))return e}},waitUntil:{jsonEquals:N(Ol.jsonEquals),notJsonEquals:N(Ol.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function _m(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Dg(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Dg.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var Eg=typeof WeakMap=="function"?WeakMap:Dg;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Vm(e,t,n){if(!n||yo(e)||yo(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Ia(e,t,n,r){if(!(!n||yo(e)||yo(t))){var i=n.get(e);i?i.set(t,r):(i=new Eg,i.set(t,r),n.set(e,i))}}function jn(e,t,n){if(n&&n.comparator)return Wm(e,t,n);var r=xg(e,t);return r!==null?r:Wm(e,t,n)}function xg(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:yo(e)||yo(t)?!1:null}/*!
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
*/function Wm(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new Eg;var r=n&&n.comparator,i=Vm(e,t,n.memoize);if(i!==null)return i;var o=Vm(t,e,n.memoize);if(o!==null)return o;if(r){var s=r(e,t);if(s===!1||s===!0)return Ia(e,t,n.memoize,s),s;var a=xg(e,t);if(a!==null)return a}var u=_m(e);if(u!==_m(t))return Ia(e,t,n.memoize,!1),!1;Ia(e,t,n.memoize,!0);var l=j$(e,t,u,n);return Ia(e,t,n.memoize,l),l}function j$(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return jn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Cg(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ai(e,t,r);case"RegExp":return _$(e,t);case"Generator":return V$(e,t,r);case"DataView":return Ai(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return Ai(new Uint8Array(e),new Uint8Array(t),r);case"Set":return qm(e,t,r);case"Map":return qm(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return q$(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function _$(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function qm(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(s,a){r.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),Ai(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ai(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(jn(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function V$(e,t,n){return Ai(Ic(e),Ic(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function W$(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function zm(e){if(W$(e))try{return Ic(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Ic(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Km(e){var t=[];for(var n in e)t.push(n);return t}function Zm(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Cg(e,t,n,r){var i=n.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(jn(e[n[o]],t[n[o]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function q$(e,t,n){var r=Km(e),i=Km(t),o=Zm(e),s=Zm(t);if(r=r.concat(o),i=i.concat(s),r.length&&r.length===i.length)return Ai(Gm(r).sort(),Gm(i).sort())===!1?!1:Cg(e,t,r,n);var a=zm(e),u=zm(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Ai(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function yo(e){return e===null||typeof e!="object"}function Gm(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}class uo extends m{name="DiffError";constructor(t,n,r,i){const o=Fb(n,r);super([t,Cf(o)].join(`
`),i)}}function _r(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Ur={strictEquals(e,t,n){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new uo("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new uo("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n)},deepEquals(e,t,n){if(!jn(e,t,{comparator:_r}))throw new uo("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(jn(e,t,{comparator:_r}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n)}},Ag=Ur.deepEquals,Fg={assert:Ur,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return jn(e,t,{comparator:_r})},notDeepEquals(e,t){return!jn(e,t,{comparator:_r})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new uo("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new uo("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n);return e},deepEquals(e,t,n){if(jn(e,t,{comparator:_r}))return e;throw new uo("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(jn(e,t,{comparator:_r}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(jn(e,t,{comparator:_r}))return e},notDeepEquals(e,t){if(!jn(e,t,{comparator:_r}))return e}},waitUntil:{strictEquals:N(Ur.strictEquals),notStrictEquals:N(Ur.notStrictEquals),looseEquals:N(Ur.looseEquals),notLooseEquals:N(Ur.notLooseEquals),deepEquals:N(Ur.deepEquals),notDeepEquals:N(Ur.notDeepEquals)}};function rn(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function xn(e,t){return typeof t=="string"?t.includes(e):rn(t,e)}const fr={hasValue(e,t,n){if(!rn(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n)},lacksValue(e,t,n){if(rn(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n)},isIn(e,t,n){if(!xn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n)},isNotIn(e,t,n){if(xn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is not empty.`,t)}}},kg={assert:fr,check:{hasValue(e,t){return rn(e,t)},lacksValue(e,t){return!rn(e,t)},hasValues(e,t){return t.every(n=>rn(e,n))},lacksValues(e,t){return t.every(n=>!rn(e,n))},isIn(e,t){return xn(e,t)},isNotIn(e,t){return!xn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!rn(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n);return e},lacksValue(e,t,n){if(rn(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n);return e},isIn(e,t,n){if(!xn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n);return e},isNotIn(e,t,n){if(xn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(rn(e,t))return e},lacksValue(e,t){if(!rn(e,t))return e},hasValues(e,t){if(t.every(n=>rn(e,n)))return e},lacksValues(e,t){if(!t.every(n=>rn(e,n)))return e},isIn(e,t){if(xn(e,t))return e},isNotIn(e,t){if(!xn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:N(fr.hasValue),lacksValue:N(fr.lacksValue),hasValues:N(fr.hasValues),lacksValues:N(fr.lacksValues),isIn:N(fr.isIn),isNotIn:N(fr.isNotIn),isEmpty:N(fr.isEmpty),isNotEmpty:N(fr.isNotEmpty)}},Bl={isHttpStatus(e,t){if(!pr(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(pr(e,v)){if(!xn(e,za[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n)}},Sg={assert:Bl,check:{isHttpStatus(e){return pr(e,v)},isHttpStatusCategory(e,t){return pr(e,v)&&xn(e,za[t])}},assertWrap:{isHttpStatus(e,t){if(!pr(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(pr(e,v)){if(!xn(e,za[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(pr(e,v))return e},isHttpStatusCategory(e,t){if(pr(e,v)&&xn(e,za[t]))return e}},waitUntil:{isHttpStatus:N(Bl.isHttpStatus),isHttpStatusCategory:N(Bl.isHttpStatusCategory)}},Rl={instanceOf(e,t,n){if(!(e instanceof t))throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n)}},Ig={assert:Rl,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:N(Rl.instanceOf),notInstanceOf:N(Rl.notInstanceOf)}},z$=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ee(e,t){return z$.some(n=>{try{return n(e,t)}catch{return!1}})}const gi={isKeyOf(e,t,n){if(!Ee(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n)},isNotKeyOf(e,t,n){if(Ee(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n)},hasKey(e,t,n){if(!Ee(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(Ee(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!Ee(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>Ee(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n)}},Ng={assert:gi,check:{isKeyOf(e,t){return Ee(t,e)},isNotKeyOf(e,t){return!Ee(t,e)},hasKey:Ee,lacksKey(e,t){return!Ee(e,t)},hasKeys(e,t){return t.every(n=>Ee(e,n))},lacksKeys(e,t){return t.every(n=>!Ee(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!Ee(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(Ee(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n);return e},hasKey(e,t,n){if(!Ee(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(Ee(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!Ee(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>Ee(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(Ee(t,e))return e},isNotKeyOf(e,t){if(!Ee(t,e))return e},hasKey(e,t){if(Ee(e,t))return e},lacksKey(e,t){if(!Ee(e,t))return e},hasKeys(e,t){if(t.every(n=>Ee(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!Ee(e,n)))return e}},waitUntil:{isKeyOf:N(gi.isKeyOf),isNotKeyOf:N(gi.isNotKeyOf),hasKey:N(gi.hasKey),lacksKey:N(gi.lacksKey),hasKeys:N(gi.hasKeys),lacksKeys:N(gi.lacksKeys)}};function K$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n)}function Z$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n)}const Ll={isLengthAtLeast:K$,isLengthExactly:Z$},Tg={assert:Ll,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)===t)return e})},waitUntil:{isLengthAtLeast:N(Ll.isLengthAtLeast),isLengthExactly:N(Ll.isLengthExactly)}},G$={never(e){throw new m("This code should not have executed.",e)}},Mg={assert:G$,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Ul={isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new m(`'${h(e)}' is not a nullish.`,t)}},Pg={assert:Ul,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new m(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:N(Ul.isDefined),isNullish:N(Ul.isNullish)}},Ut={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r)}},Og={assert:Ut,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:N(Ut.isInBounds),isOutBounds:N(Ut.isOutBounds),isInteger:N(Ut.isInteger),isNotInteger:N(Ut.isNotInteger),isAbove:N(Ut.isAbove),isAtLeast:N(Ut.isAtLeast),isBelow:N(Ut.isBelow),isAtMost:N(Ut.isAtMost),isNaN:N(Ut.isNaN),isFinite:N(Ut.isFinite),isInfinite:N(Ut.isInfinite),isApproximately:N(Ut.isApproximately),isNotApproximately:N(Ut.isNotApproximately)}};function Y$(e,t,n,r,i){return Qs(...Ru(e,t,n,r,i),!1)}function Ru(e,t,n,r,i){const o=Array.isArray(n);return[o?e:Ag,o?t:e,o?n:t,o?r:n,o?i:r]}function Qs(e,t,n,r,i,o){const s=t(...n);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,r),o?a(l):a()}catch(l){u(new m(`Output from '${t.name}' did not produce expected output. ${Yt(l)}`,i))}});try{return e(s,r),o?s:void 0}catch(a){throw new m(`Output from '${t.name}' did not produce expected output. ${Yt(a)}`,i)}}function J$(e,t,n,r,i){try{const o=Qs(...Ru(e,t,n,r,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function H$(e,t,n,r,i){return Qs(...Ru(e,t,n,r,i),!0)}function X$(e,t,n,r,i){try{const o=Qs(...Ru(e,t,n,r,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const jl=Symbol("not set");async function Q$(e,t,n,r,i,o){const s=Array.isArray(n),a=s?e:Ag,u=s?t:e,l=s?n:t,c=s?r:n,f=gg(s?i:r),d=s?o:i,g=Ss(f.timeout,{milliseconds:!0}).milliseconds,x=Ss(f.interval,{milliseconds:!0});let D=jl,k;async function A(){try{D=await Qs(a,u,l,c,void 0,!0)}catch(j){D=jl,k=Ft(j)}}const I=Date.now();for(;D===jl;)if(await A(),await Is(x),Date.now()-I>=g)throw gf(k,Nu(d,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return D}const ev={output:Y$},Bg={assert:ev,check:{output:J$},assertWrap:{output:H$},checkWrap:{output:X$},waitUntil:{output:Q$}},os={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t)}},Rg={assert:os,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:N(os.isNotPrimitive),isNotPropertyKey:N(os.isNotPropertyKey),isPrimitive:N(os.isPrimitive),isPropertyKey:N(os.isPropertyKey)}},ss={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t)}},Lg={assert:ss,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:N(ss.isPromiseLike,!0),isNotPromiseLike:N(ss.isNotPromiseLike,!0),isPromise:N(ss.isPromise,!0),isNotPromise:N(ss.isNotPromise,!0)}},_l={matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n)}},Ug={assert:_l,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:N(_l.matches,!0),mismatches:N(_l.mismatches,!0)}},Le={isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t)}},jg={assert:Le,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:N(Le.isArray),isBigInt:N(Le.isBigInt),isBoolean:N(Le.isBoolean),isFunction:N(Le.isFunction),isNull:N(Le.isNull),isNumber:N(Le.isNumber),isObject:N(Le.isObject),isString:N(Le.isString),isSymbol:N(Le.isSymbol),isUndefined:N(Le.isUndefined),isNotArray:N(Le.isNotArray),isNotBigInt:N(Le.isNotBigInt),isNotBoolean:N(Le.isNotBoolean),isNotFunction:N(Le.isNotFunction),isNotNull:N(Le.isNotNull),isNotNumber:N(Le.isNotNumber),isNotObject:N(Le.isNotObject),isNotString:N(Le.isNotString),isNotSymbol:N(Le.isNotSymbol),isNotUndefined:N(Le.isNotUndefined)}};var Wt;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Wt||(Wt={}));function Af(e,t,n){Ff(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n)}function Ym(e,t,n){Ff(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,n)}function Ff(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new m(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=Yt(e);if(typeof n.matchMessage=="string"){if(!pg(i,n.matchMessage))throw new m(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new m(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new m(t.notInstance,r);else throw new m(t.noError,r)}function Jm(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=Yt(e);if(typeof t.matchMessage=="string"){if(!pg(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Lu(e,t,n,r){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(u){i=Ft(u)}try{Ym(i,n,r),e===Wt.Assert?s():e===Wt.Check?s(!0):s(i)}catch(u){e===Wt.CheckWrap?s(void 0):e===Wt.Check?s(!1):a(Ft(u))}})}catch(o){i=Ft(o)}try{return Ym(i,n,r),e===Wt.Check?!0:e!==Wt.Assert?i:void 0}catch(o){if(e===Wt.CheckWrap)return;if(e===Wt.Check)return!1;throw o}}function tv(e,t,n){return Lu(Wt.Assert,e,t,n)}function nv(e,t){return Lu(Wt.Check,e,t)}function rv(e,t,n){return Lu(Wt.AssertWrap,e,t,n)}function iv(e,t,n){return Lu(Wt.CheckWrap,e,t,n)}const ov=N(Af);function sv(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${h(o)}'`);return ov(i,async()=>{try{await o();return}catch(u){return Ft(u)}},a,s)}const av={throws:tv,isError:Af},_g={assert:av,check:{throws:nv,isError(e,t){return Jm(e,t)}},assertWrap:{throws:rv,isError(e,t,n){return Ff(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:iv,isError(e,t){if(Jm(e,t))return e}},waitUntil:{throws:sv,isError:N(Af)}},Vr=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Vl={isUuid(e,t){if(!String(e).match(Vr))throw new m(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Vr))throw new m(`'${String(e)}' is a UUID.`,t)}},Vg={assert:Vl,check:{isUuid(e){return!!String(e).match(Vr)},isNotUuid(e){return!String(e).match(Vr)}},assertWrap:{isUuid(e,t){if(!String(e).match(Vr))throw new m(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Vr))throw new m(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Vr))return e},isNotUuid(e){if(!String(e).match(Vr))return e}},waitUntil:{isUuid:N(Vl.isUuid),isNotUuid:N(Vl.isNotUuid)}},uv={...Mg.assert,...yg.assert,...wg.assert,...$g.assert,...bg.assert,...Sg.assert,...Ig.assert,...vg.assert,...Ng.assert,...Tg.assert,...Pg.assert,...Og.assert,...Bg.assert,...Rg.assert,...Lg.assert,...Ug.assert,...jg.assert,...Fg.assert,..._g.assert,...Vg.assert,...kg.assert},kf=[yg,wg,$g,bg,Sg,Ig,vg,Ng,Tg,Mg,Pg,Og,Bg,Rg,Lg,Ug,jg,Fg,_g,Vg,kg],lv=Object.assign({},...kf.map(e=>e.check)),S=Object.assign(function(t){return!!t},lv);function cv(e,t,n){return Ya(e,t,n,new Set)}function Ya(e,t,n,r){if(e=Hm(e),t=Hm(t),S.isObject(e)&&S.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Ya(ke(e).sort(),ke(t).sort(),n,r))return!1;let i=!1;const o=ke(e).map(s=>{const a=Ya(e[s],t[s],n,r);return S.isPromise(a)&&(i=!0),a});return Xm(i,o)}else if(S.isArray(e)&&S.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const u=Ya(s,t[a],n,r);return S.isPromise(u)&&(i=!0),u});return Xm(i,o)}else return n(e,t)}function Hm(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Xm(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(S.isTrue))}catch(i){r(Ft(i))}}):t.every(S.isTrue)}const fv=Object.assign({},...kf.map(e=>e.assertWrap)),ki=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n);return t},fv);function dv(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const mv={tsType:dv},hv={assert:mv},pv={fail:e=>{throw new m("Failure triggered.",e)}},gv={...hv.assert,...uv,...pv},or=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n)},gv),yv=Object.assign({},...kf.map(e=>e.checkWrap)),wv=Object.assign(function(t){if(t)return t},yv);function bv(e,t){return S.hasKey(e,"entryType")&&e.entryType===t}function Ji(e,t){return e.controlType===t}var J;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(J||(J={}));const Wg=Symbol("any-type"),$v={[J.Checkbox]:!1,[J.Color]:"",[J.Dropdown]:"",[J.Hidden]:Wg,[J.Number]:0,[J.Text]:""};function vv(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const o=$v[i.controlType];o!==Wg&&(typeof o!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function Dv(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return S.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(r,a),o(a)}catch(a){s(Ft(a))}}):(e.set(r,i),i)}}function ea(e,t,n){if(t in e)return e[t];{const r=n();return S.isPromise(r)?new Promise(async(i,o)=>{try{const s=await r;e[t]=s,i(s)}catch(s){o(Ft(s))}}):(e[t]=r,r)}}function Sf(e){return ke(e).map(t=>[t,e[t]])}function Ts(e){return Object.fromEntries(e)}function Pi(e,t,n){return e.reduce((r,i,o,s)=>{const a=t(i,o,s);return n(a,i,o,s)&&r.push(a),r},[])}function Ev(e,t,n={}){try{let r=!1;const i=e.map((o,s,a)=>{const u=t(o,s,a);return u instanceof Promise?(r=!0,u):u?[u.key,u.value]:void 0}).filter(S.isTruthy);return r?new Promise(async(o,s)=>{try{const a=Pi(await Promise.all(i),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},S.isTruthy);o(Ts(a))}catch(a){s(Ft(a))}}):Ts(i)}catch(r){throw Ft(r)}}function xv(e){return Array.isArray(e)?e:[e]}function Cv({min:e,max:t}){const{min:n,max:r}=ap({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**s/i)*i,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,f,d)=>c+f*256**d,0);while(l>=a);return n+l%i}const Qm=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Uu(e=16){let t="";for(let n=0;n<e;n++){const r=Cv({min:0,max:Qm.length-1});t+=Qm[r]}return t}function qg(e){if(S.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Yt(t).trim()).join(`
`))}function Av(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Fv="modulepreload",kv=function(e){return"/vira/book/"+e},eh={},zg=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=u(n.map(l=>{if(l=kv(l),l in eh)return;eh[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Fv,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((g,x)=>{d.addEventListener("load",g),d.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var nt;(function(e){e.Standard="stdout",e.Error="stderr"})(nt||(nt={}));var te;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(te||(te={}));async function Sv(){return await sp({async[Kn.Node](){const e=(await zg(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[te.Bold]:e.bold.open,[te.Debug]:e.blueBright.open,[te.Error]:e.red.open,[te.Faint]:e.gray.open,[te.Info]:e.cyan.open,[te.Mutate]:e.magenta.open,[te.NormalWeight]:"\x1B[22m",[te.Plain]:"",[te.Reset]:e.reset.open,[te.Success]:e.green.open,[te.Warning]:e.yellow.open}},[Kn.Web](){return Promise.resolve({[te.Bold]:"font-weight: bold",[te.Debug]:"color: blue",[te.Error]:"color: red",[te.Faint]:"color: grey",[te.Info]:"color: teal",[te.Mutate]:"color: magenta",[te.NormalWeight]:"",[te.Plain]:"",[te.Reset]:"",[te.Success]:"color: green",[te.Warning]:"color: orange"})}})}const nn=await Sv(),Iv={[te.Bold]:{colors:[nn.bold],logType:nt.Standard},[te.Debug]:{colors:[nn.debug],logType:nt.Standard},[te.Faint]:{colors:[nn.faint],logType:nt.Standard},[te.Info]:{colors:[nn.info],logType:nt.Standard},[te.Mutate]:{colors:[nn.mutate,nn.bold],logType:nt.Standard},[te.NormalWeight]:{colors:[nn.normalWeight],logType:nt.Standard},[te.Plain]:{colors:[],logType:nt.Standard},[te.Reset]:{colors:[nn.reset],logType:nt.Standard},[te.Success]:{colors:[nn.success,nn.bold],logType:nt.Standard},[te.Error]:{colors:[nn.error,nn.bold],logType:nt.Error},[te.Warning]:{colors:[nn.warning],logType:nt.Error}};function Gt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function lo({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function Nv(e,t){try{let n=!1;const r=Sf(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(n=!0,s):s?[s.key,s.value]:void 0}).filter(S.isTruthy);return n?new Promise(async(i,o)=>{try{const s=Pi(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},S.isTruthy);i(Ts(s))}catch(s){o(Ft(s))}}):Ts(r)}catch(n){throw Ft(n)}}function Tv(e,t){return Nv(e,(n,r)=>{const i=r,o=t(r,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function Kg(e,...t){const n={...e};return t.forEach(r=>{r&&Sf(r).forEach(([i,o])=>{o!=null&&(n[i]=o)})}),n}const Mv="px";function Zg(e){return Gg({value:e,suffix:Mv})}function Gg({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Pv({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Ov(){return await sp({async[Kn.Node](){const{inspect:e}=await zg(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[te.Reset].colors.join("")].join(""),css:void 0}}},[Kn.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:Pi(n.colorConfig[t].colors,s=>Pv({value:s,suffix:";"}),S.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Yt(s):h(s)).join(`
`),n.omitColors?"":n.colorConfig[te.Reset].colors.join("")].join(""),css:r}}}})}const Bv=await Ov(),Rv={colorConfig:Iv,omitColors:!1},Lv=Yg({[nt.Error](){},[nt.Standard](){}});function Yg(e,t){const n=Kg(Rv,t);function r(o){e[n.colorConfig[o.colorKey].logType](Bv({...o,options:n}))}const i=Tv(te,o=>(...s)=>r({args:s,colorKey:o}));return{...i,if(o){return o?i:Lv}}}const Uv=pf(Kn.Node)?{[nt.Error]({text:e}){process.stderr.write(e+`
`)},[nt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[nt.Error]({text:e,css:t}){console.error(Gt({value:e,prefix:"%c"}),t)},[nt.Standard]({text:e,css:t}){console.log(Gt({value:e,prefix:"%c"}),t)}},jv=Yg(Uv);function _v(e,{min:t,max:n}){return Math.min(Math.max(e,t),n)}function Vv({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=dg(hg(t,{caseSensitive:n}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),o}function Wv(e,t,{caseSensitive:n}){const r=Vv({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=hg(t,{caseSensitive:n});return e.split(i).reduce((s,a,u)=>{const l=r[u],c=s.concat(a);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function qv(e,t){return e.split(t)}function th(e,t){const{min:n,max:r}=ap(t);if(t.takeOverflow){const i=r-n+1,o=(e-n)%i;return o<0?n+i+o:n+o}else return e>r?n:e<n?r:e}function cn(e,t){let n=!1;const r=ke(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(n=!0),i[o]=s,i},{});return n?new Promise(async(i,o)=>{try{await Promise.all(ke(r).map(async s=>{const a=await r[s];r[s]=a})),i(r)}catch(s){o(Ft(s))}}):r}function If(e,t){const n=Sf(e).filter(([r,i])=>t(r,i,e));return Ts(n)}function zv(e,t){return If(e,n=>!t.includes(n))}function nh(e){return ke(e).map(t=>e[t])}function Jg(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function Kv(e,t){return t.capitalizeFirstLetter?Zv(e):e}function Zv(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const Gv={capitalizeFirstLetter:!1};var wo;(function(e){e.Upper="upper",e.Lower="lower"})(wo||(wo={}));function Yv(e){return e.toLowerCase()!==e.toUpperCase()}function rh(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(Yv(r)){if(t===wo.Upper&&r!==r.toUpperCase()||t===wo.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function Jv(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const o=i[1];return o?o.toUpperCase():""});return Kv(r,Kg(Gv,t))}function Hv(e){return e.split("").reduce((n,r,i,o)=>{const s=i>0&&o[i-1]||"",a=i<o.length-1&&o[i+1]||"",u=rh(s,wo.Lower,{rejectNoCaseCharacters:!0})||rh(a,wo.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Xv(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Qv({value:e,wrapper:t}){return Gt({value:Gg({value:e,suffix:t}),prefix:t})}function ni(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function Hg(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class eD{listeners={};universalListeners=new Map;getListenerCount(){return nh(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)+this.universalListeners.size}listenToAll(t,n={}){const r=()=>this.universalListeners.delete(t)||!1;function i(o,s){n.once&&r(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:r}),r}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,n,r={}){const i=S.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(n)||!1;function s(a,u){r.once&&o(),n(a,u)}return ea(this.listeners,i,()=>new Map).set(n,{listener:s,removeListener:o}),o}removeListener(t,n){const r=S.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const o=i.get(n);return o?o.removeListener():!1}dispatch(t){const n=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),r+this.universalListeners.size}removeAllListeners(){const n=nh(this.listeners).reduce((r,i)=>{const o=i.size||0;return i.clear(),r+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),n}destroy(){this.removeAllListeners()}}class Nf extends eD{}function Xg(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Nc(e,t,n){return Xg(globalThis,e,t,n)}function Tf(e,t){return fu(e.title),e.parent?[...Tf(e.parent),fu(e.parent.title)].concat([]):[]}function fu(e){return Jg(e).toLowerCase().replaceAll(/\s/g,"-")}function tD({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const nD={[gt.ElementExample]:()=>[],[gt.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...vv(e.controls,e.title)].filter(S.isTruthy),[gt.Root]:()=>[]},du="_isBookTreeNode",Qg=new Map;function rD(e){return Qg.get(e)}function iD(e,t){Dv(Qg,e,()=>t)}function co(e,t){return ey(e)&&e.entry.entryType===t}function ey(e){return!!(S.hasKeys(e,[du,"entry"])&&e[du])}function oD(){return{[du]:!0,entry:{entryType:gt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function sD({entries:e,debug:t}){const n=rD(e);if(n)return n;const r=oD();e.forEach(s=>Mf({tree:r,newEntry:s,debug:t,manuallyAdded:!0}));const i=ty(r),o={tree:r,flattenedNodes:i};return iD(e,o),t&&console.info("element-book tree:",r),o}function aD(e,t,n){if(!t.parent)return e;const r=Tc(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Mf({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=Tc(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${Tf(t).join(" > ")}`);return i}function Mf({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=nD[t.entryType](t);t.errors.push(...i);const o=aD(e,t,n),s=fu(t.title),a=o.children[s];if(a){if(r){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[du]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=u,bv(t,gt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Mf({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function Tc(e,t){const n=ey(e)?e.fullUrlBreadcrumbs.slice(0,-1):Tf(e);return n.length?n.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function ty(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>ty(i));return[e,...n].flat()}function Pf(e,t){return Of(e,["",...t],void 0)}function Of(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const o=e.children[i||""],s=o&&Of(o,r,n);return{...e.controls,...s}}function uD(e,t,n){const r={...e};return Of(r,["",...t],n),r}function ny(e,t){const n=t?.controls||(co(e,gt.Page)?cn(e.entry.controls,(i,o)=>o.initValue):{});return{children:cn(e.children,(i,o)=>ny(o,t?.children?.[o.urlBreadcrumb])),controls:n}}function Ie(e){const t={...e,entryType:gt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,isVertical:t.useVerticalExamples,entryType:gt.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(S.isTruthy)};n.add(r.title),t.elementExamples[fu(i.title)]=i}}),t}var qt;(function(e){e.Search="search",e.Book="book"})(qt||(qt={}));function Mc(e){return e[0]===qt.Book?"":e[1]?decodeURIComponent(e[1]):""}const bo={hash:void 0,paths:[qt.Book],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ja=globalThis,Bf=Ja.ShadowRoot&&(Ja.ShadyCSS===void 0||Ja.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rf=Symbol(),ih=new WeakMap;let ry=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Rf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Bf&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=ih.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ih.set(n,t))}return t}toString(){return this.cssText}};const Ge=e=>new ry(typeof e=="string"?e:e+"",void 0,Rf),Ha=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new ry(n,e,Rf)},lD=(e,t)=>{if(Bf)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const r=document.createElement("style"),i=Ja.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},oh=Bf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Ge(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:cD,defineProperty:fD,getOwnPropertyDescriptor:dD,getOwnPropertyNames:mD,getOwnPropertySymbols:hD,getPrototypeOf:pD}=Object,ju=globalThis,sh=ju.trustedTypes,gD=sh?sh.emptyScript:"",yD=ju.reactiveElementPolyfillSupport,$s=(e,t)=>e,mu={toAttribute(e,t){switch(t){case Boolean:e=e?gD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Lf=(e,t)=>!cD(e,t),ah={attribute:!0,type:String,converter:mu,reflect:!1,useDefault:!1,hasChanged:Lf};Symbol.metadata??=Symbol("metadata"),ju.litPropertyMetadata??=new WeakMap;let no=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ah){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&fD(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=dD(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ah}static _$Ei(){if(this.hasOwnProperty($s("elementProperties")))return;const t=pD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($s("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($s("properties"))){const n=this.properties,r=[...mD(n),...hD(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(oh(i))}else t!==void 0&&n.push(oh(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:mu).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:mu;this._$Em=i;const a=s.fromAttribute(n,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??Lf)(o,n)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};no.elementStyles=[],no.shadowRootOptions={mode:"open"},no[$s("elementProperties")]=new Map,no[$s("finalized")]=new Map,yD?.({ReactiveElement:no}),(ju.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uf=globalThis,hu=Uf.trustedTypes,uh=hu?hu.createPolicy("lit-html",{createHTML:e=>e}):void 0,iy="$lit$",qr=`lit$${Math.random().toFixed(9).slice(2)}$`,oy="?"+qr,wD=`<${oy}>`,Si=document,Ms=()=>Si.createComment(""),Ps=e=>e===null||typeof e!="object"&&typeof e!="function",jf=Array.isArray,bD=e=>jf(e)||typeof e?.[Symbol.iterator]=="function",Wl=`[ 	
\f\r]`,as=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lh=/-->/g,ch=/>/g,yi=RegExp(`>|${Wl}(?:([^\\s"'>=/]+)(${Wl}*=${Wl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fh=/'/g,dh=/"/g,sy=/^(?:script|style|textarea|title)$/i,$D=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),vD=$D(1),fn=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),mh=new WeakMap,Ei=Si.createTreeWalker(Si,129);function ay(e,t){if(!jf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return uh!==void 0?uh.createHTML(t):t}const DD=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=as;for(let a=0;a<n;a++){const u=e[a];let l,c,f=-1,d=0;for(;d<u.length&&(s.lastIndex=d,c=s.exec(u),c!==null);)d=s.lastIndex,s===as?c[1]==="!--"?s=lh:c[1]!==void 0?s=ch:c[2]!==void 0?(sy.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=yi):c[3]!==void 0&&(s=yi):s===yi?c[0]===">"?(s=i??as,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?yi:c[3]==='"'?dh:fh):s===dh||s===fh?s=yi:s===lh||s===ch?s=as:(s=yi,i=void 0);const g=s===yi&&e[a+1].startsWith("/>")?" ":"";o+=s===as?u+wD:f>=0?(r.push(l),u.slice(0,f)+iy+u.slice(f)+qr+g):u+qr+(f===-2?a:g)}return[ay(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Os{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,u=this.parts,[l,c]=DD(t,n);if(this.el=Os.createElement(l,r),Ei.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Ei.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(iy)){const d=c[s++],g=i.getAttribute(f).split(qr),x=/([.?@])?(.*)/.exec(d);u.push({type:1,index:o,name:x[2],strings:g,ctor:x[1]==="."?xD:x[1]==="?"?CD:x[1]==="@"?AD:_u}),i.removeAttribute(f)}else f.startsWith(qr)&&(u.push({type:6,index:o}),i.removeAttribute(f));if(sy.test(i.tagName)){const f=i.textContent.split(qr),d=f.length-1;if(d>0){i.textContent=hu?hu.emptyScript:"";for(let g=0;g<d;g++)i.append(f[g],Ms()),Ei.nextNode(),u.push({type:2,index:++o});i.append(f[d],Ms())}}}else if(i.nodeType===8)if(i.data===oy)u.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(qr,f+1))!==-1;)u.push({type:7,index:o}),f+=qr.length-1}o++}}static createElement(t,n){const r=Si.createElement("template");return r.innerHTML=t,r}}function $o(e,t,n=e,r){if(t===fn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const o=Ps(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=$o(e,i._$AS(e,t.values),i,r)),t}let ED=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Si).importNode(n,!0);Ei.currentNode=i;let o=Ei.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Uo(o,o.nextSibling,this,t):u.type===1?l=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(l=new FD(o,this,t)),this._$AV.push(l),u=r[++a]}s!==u?.index&&(o=Ei.nextNode(),s++)}return Ei.currentNode=Si,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class Uo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=$o(this,t,n),Ps(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==fn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==se&&Ps(this._$AH)?this._$AA.nextSibling.data=t:this.T(Si.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Os.createElement(ay(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new ED(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=mh.get(t.strings);return n===void 0&&mh.set(t.strings,n=new Os(t)),n}k(t){jf(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Uo(this.O(Ms()),this.O(Ms()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class _u{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=$o(this,t,n,0),s=!Ps(t)||t!==this._$AH&&t!==fn,s&&(this._$AH=t);else{const a=t;let u,l;for(t=o[0],u=0;u<o.length-1;u++)l=$o(this,a[r+u],n,u),l===fn&&(l=this._$AH[u]),s||=!Ps(l)||l!==this._$AH[u],l===se?t=se:t!==se&&(t+=(l??"")+o[u+1]),this._$AH[u]=l}s&&!i&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xD extends _u{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}class CD extends _u{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}class AD extends _u{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=$o(this,t,n,0)??se)===fn)return;const r=this._$AH,i=t===se&&r!==se||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==se&&(r===se||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class FD{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){$o(this,t)}}const kD={I:Uo},SD=Uf.litHtmlPolyfillSupport;SD?.(Os,Uo),(Uf.litHtmlVersions??=[]).push("3.3.1");const ID=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const o=n?.renderBefore??null;r._$litPart$=i=new Uo(t.insertBefore(Ms(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _f=globalThis;let vs=class extends no{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ID(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fn}};vs._$litElement$=!0,vs.finalized=!0,_f.litElementHydrateSupport?.({LitElement:vs});const ND=_f.litElementPolyfillSupport;ND?.({LitElement:vs});(_f.litElementVersions??=[]).push("4.2.1");function Ir(e){if(S.isObject(e))return cn(e,(n,r)=>{if(!S.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Hv(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const o=r,s=n.startsWith("--")?Ge(n):n.startsWith("-")?Ha`-${Ge(n)}`:Ha`--${Ge(n)}`;return{name:s,value:Ha`var(${s}, ${Ge(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${Ir.name}' function.`)}function TD({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const fe=Ir({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),MD={nav:{hover:{background:fe["element-book-nav-hover-background-color"],foreground:fe["element-book-nav-hover-foreground-color"]},active:{background:fe["element-book-nav-active-background-color"],foreground:fe["element-book-nav-active-foreground-color"]},selected:{background:fe["element-book-nav-selected-background-color"],foreground:fe["element-book-nav-selected-foreground-color"]}},accent:{icon:fe["element-book-accent-icon-color"]},page:{background:fe["element-book-page-background-color"],backgroundFaint1:fe["element-book-page-background-faint-level-1-color"],backgroundFaint2:fe["element-book-page-background-faint-level-2-color"],foreground:fe["element-book-page-foreground-color"],foregroundFaint1:fe["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:fe["element-book-page-foreground-faint-level-2-color"]}};function PD(e,t){uy(e,t,MD)}function Pc(e){return S.hasKey(e,"_$cssResult$")}function hh(e){return S.hasKeys(e,["name","value","default"])&&S.isString(e.default)&&Pc(e.name)&&Pc(e.value)}function uy(e,t,n){Object.entries(t).forEach(([r,i])=>{const o=n[r];if(!o)throw new Error(`no nestedCssVar at key '${r}'`);if(Pc(i)){if(!hh(o))throw new Error(`got a CSS result at '${r}' but no CSS var`);TD({forCssVar:o,onElement:e,toValue:String(i)})}else{if(hh(o))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);uy(e,i,o)}})}function Ce(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let r=t[0].length,i=t[0].map((s,a)=>t.map(u=>u[a])),o=e.map(s=>i.map(a=>{let u=0;if(!Array.isArray(s)){for(let l of a)u+=s*l;return u}for(let l=0;l<s.length;l++)u+=s[l]*(a[l]||0);return u}));return n===1&&(o=o[0]),r===1?o.map(s=>s[0]):o}function ta(e){return Gr(e)==="string"}function Gr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function pu(e,{precision:t,unit:n}){return Hr(e)?"none":ly(e,t)+(n??"")}function Hr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function Ke(e){return Hr(e)?0:e}function ly(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const OD={deg:1,grad:.9,rad:180/Math.PI,turn:360};function cy(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(a,u)=>{let l=u.match(r),c=u;if(l){let f=l[0],d=c.slice(0,-f.length);f==="%"?(c=new Number(d/100),c.type="<percentage>"):(c=new Number(d*OD[f]),c.type="<angle>",c.unit=f)}else n.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function fy(e){return e[e.length-1]}function Bs(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function dy(e,t,n){return(n-e)/(t-e)}function Vf(e,t,n){return Bs(t[0],t[1],dy(e[0],e[1],n))}function my(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function hy(e,t,n){return Math.max(Math.min(n,t),e)}function Vu(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function nr(e,t){return Vu(Math.abs(e)**t,e)}function Wf(e,t){return t===0?0:e/t}function py(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var BD=Object.freeze({__proto__:null,bisectLeft:py,clamp:hy,copySign:Vu,interpolate:Bs,interpolateInv:dy,isNone:Hr,isString:ta,last:fy,mapRange:Vf,multiplyMatrices:Ce,parseCoordGrammar:my,parseFunction:cy,serializeNumber:pu,skipNone:Ke,spow:nr,toPrecision:ly,type:Gr,zdiv:Wf});class RD{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const Xr=new RD;var dn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Bt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Oc(e){return Array.isArray(e)?e:Bt[e]}function gu(e,t,n,r={}){if(e=Oc(e),t=Oc(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(Xr.run("chromatic-adaptation-start",i),i.M||(i.W1===Bt.D65&&i.W2===Bt.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Bt.D50&&i.W2===Bt.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Xr.run("chromatic-adaptation-end",i),i.M)return Ce(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const LD=new Set(["<number>","<percentage>","<angle>"]);function ph(e,t,n,r){return Object.entries(e.coords).map(([o,s],a)=>{let u=t.coordGrammar[a],l=r[a],c=l?.type,f;if(l.none?f=u.find(x=>LD.has(x)):f=u.find(x=>x==c),!f){let x=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${x} in ${n}()`)}let d=f.range;c==="<percentage>"&&(d||=[0,1]);let g=s.range||s.refRange;return d&&g&&(r[a]=Vf(d,g,r[a])),f})}function gy(e,{meta:t}={}){let n={str:String(e)?.trim()};if(Xr.run("parse-start",n),n.color)return n.color;if(n.parsed=cy(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let c of L.all){let f=c.getFormat("color");if(f&&(s.includes(f.id)||f.ids?.filter(d=>s.includes(d)).length)){const d=Object.keys(c.coords).map((x,D)=>n.parsed.args[D]||0);let g;return f.coordGrammar&&(g=ph(c,f,"color",d)),t&&Object.assign(t,{formatId:"color",types:g}),f.id.startsWith("--")&&!i.startsWith("--")&&dn.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&dn.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:d,alpha:a}}}let u="",l=i in L.registry?i:o;if(l in L.registry){let c=L.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of L.all){let o=i.getFormat(r);if(o&&o.type==="function"){let s=1;(o.lastAlpha||fy(n.parsed.args).alpha)&&(s=n.parsed.args.pop());let a=n.parsed.args,u;return o.coordGrammar&&(u=ph(i,o,r,a)),t&&Object.assign(t,{formatId:o.name,types:u}),{spaceId:i.id,coords:a,alpha:s}}}}else for(let r of L.all)for(let i in r.formats){let o=r.formats[i];if(o.type!=="custom"||o.test&&!o.test(n.str))continue;let s=o.parse(n.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function H(e){if(Array.isArray(e))return e.map(H);if(!e)throw new TypeError("Empty color reference");ta(e)&&(e=gy(e));let t=e.space||e.spaceId;return t instanceof L||(e.space=L.get(t)),e.alpha===void 0&&(e.alpha=1),e}const UD=75e-6;class L{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?L.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=Oc(r),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:L.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:jD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Xr.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=UD}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,o)=>{let s=r[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-n)&&(u===void 0||i<=u+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=gh(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=gh(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const a=H(t);[t,n]=[a.space,a.coords]}if(t=L.get(t),this.equals(t))return n;n=n.map(a=>Number.isNaN(a)?0:a);let r=this.path,i=t.path,o,s;for(let a=0;a<r.length&&r[a].equals(i[a]);a++)o=r[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=r.length-1;a>s;a--)n=r[a].toBase(n);for(let a=s+1;a<i.length;a++)n=i[a].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=H(t);[t,n]=[r.space,r.coords]}return t=L.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(L.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof L)return t;if(Gr(t)==="string"){let i=L.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return L.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=Gr(t),i,o;if(r==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=L.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Gr(o),r==="number"||r==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=L.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function jD(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function gh(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=my(e.coords);let n=Object.entries(t).map(([r,i],o)=>{let s=e.coordGrammar[o][0],a=i.range||i.refRange,u=s.range,l="";return s=="<percentage>"?(u=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(r,i)=>r.map((o,s)=>{let{fromRange:a,toRange:u,suffix:l}=n[s];return a&&u&&(o=Vf(a,u,o)),o=pu(o,{precision:i,unit:l}),o})}return e}var yt=new L({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Qt extends L{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=yt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=Ce(t.toXYZ_M,n);return this.white!==this.base.white&&(r=gu(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=gu(this.base.white,this.white,n),Ce(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function na(e,t){return e=H(e),!t||e.space.equals(t)?e.coords.slice():(t=L.get(t),t.from(e))}function sn(e,t){e=H(e);let{space:n,index:r}=L.resolveCoord(t,e.space);return na(e,n)[r]}function qf(e,t,n){return e=H(e),t=L.get(t),e.coords=t.to(e.space,n),e}qf.returns="color";function kr(e,t,n){if(e=H(e),arguments.length===2&&Gr(arguments[1])==="object"){let r=arguments[1];for(let i in r)kr(e,i,r[i])}else{typeof n=="function"&&(n=n(sn(e,t)));let{space:r,index:i}=L.resolveCoord(t,e.space),o=na(e,r);o[i]=n,qf(e,r,o)}return e}kr.returns="color";var zf=new L({id:"xyz-d50",name:"XYZ D50",white:"D50",base:yt,fromBase:e=>gu(yt.white,"D50",e),toBase:e=>gu("D50",yt.white,e)});const _D=216/24389,yh=24/116,Na=24389/27;let ql=Bt.D50;var an=new L({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ql,base:zf,fromBase(e){let n=e.map((r,i)=>r/ql[i]).map(r=>r>_D?Math.cbrt(r):(Na*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>yh?Math.pow(t[0],3):(116*t[0]-16)/Na,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Na,t[2]>yh?Math.pow(t[2],3):(116*t[2]-16)/Na].map((r,i)=>r*ql[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ar(e){return(e%360+360)%360}function VD(e,t){if(e==="raw")return t;let[n,r]=t.map(ar),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var Rs=new L({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:an,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),ar(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const wh=25**7,yu=Math.PI,bh=180/yu,Hi=yu/180;function $h(e){const t=e*e;return t*t*t*e}function yy(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=H([e,t]);let[o,s,a]=an.from(e),u=Rs.from(an,[o,s,a])[1],[l,c,f]=an.from(t),d=Rs.from(an,[l,c,f])[1];u<0&&(u=0),d<0&&(d=0);let g=(u+d)/2,x=$h(g),D=.5*(1-Math.sqrt(x/(x+wh))),k=(1+D)*s,A=(1+D)*c,I=Math.sqrt(k**2+a**2),j=Math.sqrt(A**2+f**2),q=k===0&&a===0?0:Math.atan2(a,k),G=A===0&&f===0?0:Math.atan2(f,A);q<0&&(q+=2*yu),G<0&&(G+=2*yu),q*=bh,G*=bh;let Re=l-o,Et=j-I,et=G-q,It=q+G,bn=Math.abs(et),On;I*j===0?On=0:bn<=180?On=et:et>180?On=et-360:et<-180?On=et+360:dn.warn("the unthinkable has happened");let zi=2*Math.sqrt(j*I)*Math.sin(On*Hi/2),bl=(o+l)/2,Qo=(I+j)/2,wa=$h(Qo),Bn;I*j===0?Bn=It:bn<=180?Bn=It/2:It<360?Bn=(It+360)/2:Bn=(It-360)/2;let ba=(bl-50)**2,$l=1+.015*ba/Math.sqrt(20+ba),$a=1+.045*Qo,$n=1;$n-=.17*Math.cos((Bn-30)*Hi),$n+=.24*Math.cos(2*Bn*Hi),$n+=.32*Math.cos((3*Bn+6)*Hi),$n-=.2*Math.cos((4*Bn-63)*Hi);let qe=1+.015*Qo*$n,tn=30*Math.exp(-1*((Bn-275)/25)**2),Ki=2*Math.sqrt(wa/(wa+wh)),Or=-1*Math.sin(2*tn*Hi)*Ki,fi=(Re/(n*$l))**2;return fi+=(Et/(r*$a))**2,fi+=(zi/(i*qe))**2,fi+=Or*(Et/(r*$a))*(zi/(i*qe)),Math.sqrt(fi)}const WD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],qD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],zD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],KD=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var vo=new L({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:yt,fromBase(e){let n=Ce(WD,e).map(r=>Math.cbrt(r));return Ce(zD,n)},toBase(e){let n=Ce(KD,e).map(r=>r**3);return Ce(qD,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Bc(e,t){[e,t]=H([e,t]);let[n,r,i]=vo.from(e),[o,s,a]=vo.from(t),u=n-o,l=r-s,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const ZD=75e-6;function Fi(e,t,{epsilon:n=ZD}={}){e=H(e),t||(t=e.space),t=L.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function Do(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function wy(e,t,n="lab"){n=L.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((o,s,a)=>{let u=i[a];return isNaN(s)||isNaN(u)?o:o+(u-s)**2},0))}function GD(e,t){return wy(e,t,"lab")}const YD=Math.PI,vh=YD/180;function JD(e,t,{l:n=2,c:r=1}={}){[e,t]=H([e,t]);let[i,o,s]=an.from(e),[,a,u]=Rs.from(an,[i,o,s]),[l,c,f]=an.from(t),d=Rs.from(an,[l,c,f])[1];a<0&&(a=0),d<0&&(d=0);let g=i-l,x=a-d,D=o-c,k=s-f,A=D**2+k**2-x**2,I=.511;i>=16&&(I=.040975*i/(1+.01765*i));let j=.0638*a/(1+.0131*a)+.638,q;Number.isNaN(u)&&(u=0),u>=164&&u<=345?q=.56+Math.abs(.2*Math.cos((u+168)*vh)):q=.36+Math.abs(.4*Math.cos((u+35)*vh));let G=Math.pow(a,4),Re=Math.sqrt(G/(G+1900)),Et=j*(Re*q+1-Re),et=(g/(n*I))**2;return et+=(x/(r*j))**2,et+=A/Et**2,Math.sqrt(et)}const Dh=203;var Kf=new L({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:yt,fromBase(e){return e.map(t=>Math.max(t*Dh,0))},toBase(e){return e.map(t=>Math.max(t/Dh,0))}});const Ta=1.15,Ma=.66,Eh=2610/2**14,HD=2**14/2610,xh=3424/2**12,Ch=2413/2**7,Ah=2392/2**7,XD=1.7*2523/2**5,Fh=2**5/(1.7*2523),Pa=-.56,zl=16295499532821565e-27,QD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],e5=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],t5=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],n5=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var by=new L({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Kf,fromBase(e){let[t,n,r]=e,i=Ta*t-(Ta-1)*r,o=Ma*n-(Ma-1)*t,a=Ce(QD,[i,o,r]).map(function(d){let g=xh+Ch*(d/1e4)**Eh,x=1+Ah*(d/1e4)**Eh;return(g/x)**XD}),[u,l,c]=Ce(t5,a);return[(1+Pa)*u/(1+Pa*u)-zl,l,c]},toBase(e){let[t,n,r]=e,i=(t+zl)/(1+Pa-Pa*(t+zl)),s=Ce(n5,[i,n,r]).map(function(d){let g=xh-d**Fh,x=Ah*d**Fh-Ch;return 1e4*(g/x)**HD}),[a,u,l]=Ce(e5,s),c=(a+(Ta-1)*l)/Ta,f=(u+(Ma-1)*c)/Ma;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Rc=new L({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:by,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),ar(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function r5(e,t){[e,t]=H([e,t]);let[n,r,i]=Rc.from(e),[o,s,a]=Rc.from(t),u=n-o,l=r-s;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,f=2*Math.sqrt(r*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+f**2)}const $y=3424/4096,vy=2413/128,Dy=2392/128,kh=2610/16384,i5=2523/32,o5=16384/2610,Sh=32/2523,s5=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],a5=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],u5=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],l5=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Lc=new L({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Kf,fromBase(e){let t=Ce(s5,e);return c5(t)},toBase(e){let t=f5(e);return Ce(l5,t)}});function c5(e){let t=e.map(function(n){let r=$y+vy*(n/1e4)**kh,i=1+Dy*(n/1e4)**kh;return(r/i)**i5});return Ce(a5,t)}function f5(e){return Ce(u5,e).map(function(r){let i=Math.max(r**Sh-$y,0),o=vy-Dy*r**Sh;return 1e4*(i/o)**o5})}function d5(e,t){[e,t]=H([e,t]);let[n,r,i]=Lc.from(e),[o,s,a]=Lc.from(t);return 720*Math.sqrt((n-o)**2+.25*(r-s)**2+(i-a)**2)}const m5=Bt.D65,Ey=.42,Ih=1/Ey,Kl=2*Math.PI,xy=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],h5=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],p5=[[460,451,288],[460,-891,-261],[460,-220,-6300]],g5={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},bi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},y5=180/Math.PI,Nh=Math.PI/180;function Cy(e,t){return e.map(r=>{const i=nr(t*Math.abs(r)*.01,Ey);return 400*Vu(i,r)/(i+27.13)})}function w5(e,t){const n=100/t*27.13**Ih;return e.map(r=>{const i=Math.abs(r);return Vu(n*nr(i/(400-i),Ih),r)})}function b5(e){let t=ar(e);t<=bi.h[0]&&(t+=360);const n=py(bi.h,t)-1,[r,i]=bi.h.slice(n,n+2),[o,s]=bi.e.slice(n,n+2),a=bi.H[n],u=(t-r)/o;return a+100*u/(u+(i-t)/s)}function $5(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=bi.h.slice(n,n+2),[o,s]=bi.e.slice(n,n+2);return ar((t*(s*r-o*i)-100*r*s)/(t*(s-o)-100*s))}function Ay(e,t,n,r,i){const o={};o.discounting=i,o.refWhite=e,o.surround=r;const s=e.map(D=>D*100);o.la=t,o.yb=n;const a=s[1],u=Ce(xy,s);r=g5[o.surround];const l=r[0];o.c=r[1],o.nc=r[2];const f=(1/(5*o.la+1))**4;o.fl=f*o.la+.1*(1-f)*(1-f)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map(D=>Bs(1,a/D,d)),o.dRgbInv=o.dRgb.map(D=>1/D);const g=u.map((D,k)=>D*o.dRgb[k]),x=Cy(g,o.fl);return o.aW=o.nbb*(2*x[0]+x[1]+.05*x[2]),o}const Th=Ay(m5,64/Math.PI*.2,20,"average",!1);function Uc(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=ar(e.h)*Nh:n=$5(e.H)*Nh;const r=Math.cos(n),i=Math.sin(n);let o=0;e.J!==void 0?o=nr(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=nr(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(n+2)+3.8),l=t.aW*nr(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,f=l/t.nbb,d=23*(f+.305)*Wf(a,23*c+a*(11*r+108*i)),g=d*r,x=d*i,D=w5(Ce(p5,[f,g,x]).map(k=>k*1/1403),t.fl);return Ce(h5,D.map((k,A)=>k*t.dRgbInv[A])).map(k=>k/100)}function Fy(e,t){const n=e.map(j=>j*100),r=Cy(Ce(xy,n).map((j,q)=>j*t.dRgb[q]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,o=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(o,i)%Kl+Kl)%Kl,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Wf(a*Math.sqrt(i**2+o**2),r[0]+r[1]+1.05*r[2]+.305),l=nr(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*r[0]+r[1]+.05*r[2]),f=nr(c/t.aW,.5*t.c*t.z),d=100*nr(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,x=l*f,D=x*t.flRoot,k=ar(s*y5),A=b5(k),I=50*nr(t.c*l/(t.aW+4),1/2);return{J:d,C:x,h:k,s:I,Q:g,M:D,H:A}}var v5=new L({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:yt,fromBase(e){const t=Fy(e,Th);return[t.J,t.M,t.h]},toBase(e){return Uc({J:e[0],M:e[1],h:e[2]},Th)}});const D5=Bt.D65,E5=216/24389,ky=24389/27;function x5(e){return 116*(e>E5?Math.cbrt(e):(ky*e+16)/116)-16}function jc(e){return e>8?Math.pow((e+16)/116,3):e/ky}function C5(e,t){let[n,r,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=jc(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){o=Uc({J:s,C:r,h:n},t);const d=Math.abs(o[1]-a);if(d<f){if(d<=u)return o;f=d}s=s-(o[1]-a)*s/(2*o[1]),c+=1}return Uc({J:s,C:r,h:n},t)}function A5(e,t){const n=x5(e[1]);if(n===0)return[0,0,0];const r=Fy(e,Zf);return[ar(r.h),r.C,n]}const Zf=Ay(D5,200/Math.PI*jc(50),jc(50)*100,"average",!1);var Ls=new L({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:yt,fromBase(e){return A5(e)},toBase(e){return C5(e,Zf)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const F5=Math.PI/180,Mh=[1,.007,.0228];function Ph(e){e[1]<0&&(e=Ls.fromBase(Ls.toBase(e)));const t=Math.log(Math.max(1+Mh[2]*e[1]*Zf.flRoot,1))/Mh[2],n=e[0]*F5,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function k5(e,t){[e,t]=H([e,t]);let[n,r,i]=Ph(Ls.from(e)),[o,s,a]=Ph(Ls.from(t));return Math.sqrt((n-o)**2+(r-s)**2+(i-a)**2)}var Eo={deltaE76:GD,deltaECMC:JD,deltaE2000:yy,deltaEJz:r5,deltaEITP:d5,deltaEOK:Bc,deltaEHCT:k5};function S5(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Oh={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Qr(e,{method:t=dn.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=H(e),ta(arguments[1])?n=arguments[1]:n||(n=e.space),n=L.get(n),Fi(e,n,{epsilon:0}))return e;let s;if(t==="css")s=I5(e,{space:n});else{if(t!=="clip"&&!Fi(e,n)){Object.prototype.hasOwnProperty.call(Oh,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:o}=Oh[t]);let a=yy;if(r!==""){for(let l in Eo)if("deltae"+r.toLowerCase()===l.toLowerCase()){a=Eo[l];break}}let u=Qr(xe(e,n),{method:"clip",space:n});if(a(e,u)>i){if(Object.keys(o).length===3){let I=L.resolveCoord(o.channel),j=sn(xe(e,I.space),I.id);if(Hr(j)&&(j=0),j>=o.max)return xe({space:"xyz-d65",coords:Bt.D65},e.space);if(j<=o.min)return xe({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=L.resolveCoord(t),c=l.space,f=l.id,d=xe(e,c);d.coords.forEach((I,j)=>{Hr(I)&&(d.coords[j]=0)});let x=(l.range||l.refRange)[0],D=S5(i),k=x,A=sn(d,f);for(;A-k>D;){let I=Do(d);I=Qr(I,{space:n,method:"clip"}),a(d,I)-i<D?k=sn(d,f):A=sn(d,f),kr(d,f,(k+A)/2)}s=xe(d,n)}else s=u}else s=xe(e,n);if(t==="clip"||!Fi(s,n,{epsilon:0})){let a=Object.values(n.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,f]=a[l];return c!==void 0&&(u=Math.max(c,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return n!==e.space&&(s=xe(s,e.space)),e.coords=s.coords,e}Qr.returns="color";const Bh={WHITE:{space:vo,coords:[1,0,0]},BLACK:{space:vo,coords:[0,0,0]}};function I5(e,{space:t}={}){e=H(e),t||(t=e.space),t=L.get(t);const i=L.get("oklch");if(t.isUnbounded)return xe(e,t);const o=xe(e,i);let s=o.coords[0];if(s>=1){const x=xe(Bh.WHITE,t);return x.alpha=e.alpha,xe(x,t)}if(s<=0){const x=xe(Bh.BLACK,t);return x.alpha=e.alpha,xe(x,t)}if(Fi(o,t,{epsilon:0}))return xe(o,t);function a(x){const D=xe(x,t),k=Object.values(t.coords);return D.coords=D.coords.map((A,I)=>{if("range"in k[I]){const[j,q]=k[I].range;return hy(j,A,q)}return A}),D}let u=0,l=o.coords[1],c=!0,f=Do(o),d=a(f),g=Bc(d,f);if(g<.02)return d;for(;l-u>1e-4;){const x=(u+l)/2;if(f.coords[1]=x,c&&Fi(f,t,{epsilon:0}))u=x;else if(d=a(f),g=Bc(d,f),g<.02){if(.02-g<1e-4)break;c=!1,u=x}else l=x}return d}function xe(e,t,{inGamut:n}={}){e=H(e),t=L.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=Qr(i,n===!0?void 0:n)),i}xe.returns="color";function Ds(e,{precision:t=dn.precision,format:n="default",inGamut:r=!0,...i}={}){let o;e=H(e);let s=n;n=e.space.getFormat(n)??e.space.getFormat("default")??L.DEFAULT_FORMAT;let a=e.coords.slice();if(r||=n.toGamut,r&&!Fi(e)&&(a=Qr(Do(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)o=n.serialize(a,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(d=>pu(d,{precision:t})));let l=[...a];if(u==="color"){let d=n.id||n.ids?.[0]||e.space.id;l.unshift(d)}let c=e.alpha;t!==null&&(c=pu(c,{precision:t}));let f=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${c}`;o=`${u}(${l.join(n.commas?", ":" ")}${f})`}return o}const N5=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],T5=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Wu=new Qt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:N5,fromXYZ_M:T5});const Oa=1.09929682680944,Rh=.018053968510807;var Sy=new Qt({id:"rec2020",name:"REC.2020",base:Wu,toBase(e){return e.map(function(t){return t<Rh*4.5?t/4.5:Math.pow((t+Oa-1)/Oa,1/.45)})},fromBase(e){return e.map(function(t){return t>=Rh?Oa*Math.pow(t,.45)-(Oa-1):4.5*t})}});const M5=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],P5=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Iy=new Qt({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:M5,fromXYZ_M:P5});const O5=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],st=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ny=new Qt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:O5,fromXYZ_M:st}),Lh={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Uh=Array(3).fill("<percentage> | <number>[0, 255]"),jh=Array(3).fill("<number>[0, 255]");var xo=new Qt({id:"srgb",name:"sRGB",base:Ny,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Uh},rgb_number:{name:"rgb",commas:!0,coords:jh,noAlpha:!0},color:{},rgba:{coords:Uh,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:jh},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let r=n&&e.every(o=>o%17===0);return"#"+e.map(o=>r?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Lh.black,t.alpha=0):t.coords=Lh[e],t.coords)return t}}}}),Ty=new Qt({id:"p3",cssId:"display-p3",name:"P3",base:Iy,fromBase:xo.fromBase,toBase:xo.toBase});dn.display_space=xo;let B5;if(typeof CSS<"u"&&CSS.supports)for(let e of[an,Sy,Ty]){let t=e.getMinCoords(),r=Ds({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){dn.display_space=e;break}}function R5(e,{space:t=dn.display_space,...n}={}){let r=Ds(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!dn.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(Hr)||Hr(e.alpha))&&!(B5??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=Do(e),i.coords=i.coords.map(Ke),i.alpha=Ke(i.alpha),r=Ds(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=xe(i,t),r=new String(Ds(i,n)),r.color=i}return r}function L5(e,t){return e=H(e),t=H(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function ei(e){return sn(e,[yt,"y"])}function My(e,t){kr(e,[yt,"y"],t)}function U5(e){Object.defineProperty(e.prototype,"luminance",{get(){return ei(this)},set(t){My(this,t)}})}var j5=Object.freeze({__proto__:null,getLuminance:ei,register:U5,setLuminance:My});function _5(e,t){e=H(e),t=H(t);let n=Math.max(ei(e),0),r=Math.max(ei(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const V5=.56,W5=.57,q5=.62,z5=.65,_h=.022,K5=1.414,Z5=.1,G5=5e-4,Y5=1.14,Vh=.027,J5=1.14;function Wh(e){return e>=_h?e:e+(_h-e)**K5}function Xi(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function H5(e,t){t=H(t),e=H(e);let n,r,i,o,s,a;t=xe(t,"srgb"),[o,s,a]=t.coords;let u=Xi(o)*.2126729+Xi(s)*.7151522+Xi(a)*.072175;e=xe(e,"srgb"),[o,s,a]=e.coords;let l=Xi(o)*.2126729+Xi(s)*.7151522+Xi(a)*.072175,c=Wh(u),f=Wh(l),d=f>c;return Math.abs(f-c)<G5?r=0:d?(n=f**V5-c**W5,r=n*Y5):(n=f**z5-c**q5,r=n*J5),Math.abs(r)<Z5?i=0:r>0?i=r-Vh:i=r+Vh,i*100}function X5(e,t){e=H(e),t=H(t);let n=Math.max(ei(e),0),r=Math.max(ei(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const Q5=5e4;function eE(e,t){e=H(e),t=H(t);let n=Math.max(ei(e),0),r=Math.max(ei(t),0);return r>n&&([n,r]=[r,n]),r===0?Q5:(n-r)/r}function tE(e,t){e=H(e),t=H(t);let n=sn(e,[an,"l"]),r=sn(t,[an,"l"]);return Math.abs(n-r)}const nE=216/24389,qh=24/116,Ba=24389/27;let Zl=Bt.D65;var _c=new L({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Zl,base:yt,fromBase(e){let n=e.map((r,i)=>r/Zl[i]).map(r=>r>nE?Math.cbrt(r):(Ba*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>qh?Math.pow(t[0],3):(116*t[0]-16)/Ba,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ba,t[2]>qh?Math.pow(t[2],3):(116*t[2]-16)/Ba].map((r,i)=>r*Zl[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Gl=Math.pow(5,.5)*.5+.5;function rE(e,t){e=H(e),t=H(t);let n=sn(e,[_c,"l"]),r=sn(t,[_c,"l"]),i=Math.abs(Math.pow(n,Gl)-Math.pow(r,Gl)),o=Math.pow(i,1/Gl)*Math.SQRT2-40;return o<7.5?0:o}var Xa=Object.freeze({__proto__:null,contrastAPCA:H5,contrastDeltaPhi:rE,contrastLstar:tE,contrastMichelson:X5,contrastWCAG21:_5,contrastWeber:eE});function iE(e,t,n={}){ta(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let o=Object.keys(Xa).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=H(e),t=H(t);for(let o in Xa)if("contrast"+r.toLowerCase()===o.toLowerCase())return Xa[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function qu(e){let[t,n,r]=na(e,yt),i=t+15*n+3*r;return[4*t/i,9*n/i]}function Py(e){let[t,n,r]=na(e,yt),i=t+n+r;return[t/i,n/i]}function oE(e){Object.defineProperty(e.prototype,"uv",{get(){return qu(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Py(this)}})}var sE=Object.freeze({__proto__:null,register:oE,uv:qu,xy:Py});function gs(e,t,n={}){ta(n)&&(n={method:n});let{method:r=dn.deltaE,...i}=n;for(let o in Eo)if("deltae"+r.toLowerCase()===o.toLowerCase())return Eo[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function aE(e,t=.25){let r=[L.get("oklch","lch"),"l"];return kr(e,r,i=>i*(1+t))}function uE(e,t=.25){let r=[L.get("oklch","lch"),"l"];return kr(e,r,i=>i*(1-t))}var lE=Object.freeze({__proto__:null,darken:uE,lighten:aE});function Oy(e,t,n=.5,r={}){return[e,t]=[H(e),H(t)],Gr(n)==="object"&&([n,r]=[.5,n]),ra(e,t,r)(n)}function By(e,t,n={}){let r;Gf(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=n;r||([e,t]=[H(e),H(t)],r=ra(e,t,u));let l=gs(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,f=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)f=[{p:.5,color:r(.5)}];else{let d=1/(c-1);f=Array.from({length:c},(g,x)=>{let D=x*d;return{p:D,color:r(D)}})}if(i>0){let d=f.reduce((g,x,D)=>{if(D===0)return 0;let k=gs(x.color,f[D-1].color,o);return Math.max(g,k)},0);for(;d>i;){d=0;for(let g=1;g<f.length&&f.length<a;g++){let x=f[g-1],D=f[g],k=(D.p+x.p)/2,A=r(k);d=Math.max(d,gs(A,x.color),gs(A,D.color)),f.splice(g,0,{p:k,color:r(k)}),g++}}}return f=f.map(d=>d.color),f}function ra(e,t,n={}){if(Gf(e)){let[u,l]=[e,t];return ra(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:o,premultiplied:s}=n;e=H(e),t=H(t),e=Do(e),t=Do(t);let a={colors:[e,t],options:n};if(r?r=L.get(r):r=L.registry[dn.interpolationSpace]||e.space,i=i?L.get(i):r,e=xe(e,r),t=xe(t,r),e=Qr(e),t=Qr(t),r.coords.h&&r.coords.h.type==="angle"){let u=n.hue=n.hue||"shorter",l=[r,"h"],[c,f]=[sn(e,l),sn(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=VD(u,[c,f]),kr(e,l,c),kr(t,l,f)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((d,g)=>{let x=t.coords[g];return Bs(d,x,u)}),c=Bs(e.alpha,t.alpha,u),f={space:r,coords:l,alpha:c};return s&&(f.coords=f.coords.map(d=>d/c)),i!==r&&(f=xe(f,i)),f},{rangeArgs:a})}function Gf(e){return Gr(e)==="function"&&!!e.rangeArgs}dn.interpolationSpace="lab";function cE(e){e.defineFunction("mix",Oy,{returns:"color"}),e.defineFunction("range",ra,{returns:"function<color>"}),e.defineFunction("steps",By,{returns:"array<color>"})}var fE=Object.freeze({__proto__:null,isRange:Gf,mix:Oy,range:ra,register:cE,steps:By}),Ry=new L({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:xo,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,o]=e,[s,a,u]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case r:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-r)/l+2;break;case o:s=(r-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(o){let s=(o+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ly=new L({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ry,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),dE=new L({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ly,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let a=n/i;return[t,0,a*100]}let o=1-r,s=o===0?0:1-n/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const mE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],hE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Uy=new Qt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:mE,fromXYZ_M:hE}),pE=new Qt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Uy,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const gE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],yE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var jy=new Qt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:zf,toXYZ_M:gE,fromXYZ_M:yE});const wE=1/512,bE=16/512;var $E=new Qt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:jy,toBase(e){return e.map(t=>t<bE?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=wE?t**(1/1.8):16*t)}}),vE=new L({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:vo,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),ar(i)]},toBase(e){let[t,n,r]=e,i,o;return isNaN(r)?(i=0,o=0):(i=n*Math.cos(r*Math.PI/180),o=n*Math.sin(r*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let _y=Bt.D65;const DE=216/24389,zh=24389/27,[Kh,Zh]=qu({space:yt,coords:_y});var Vy=new L({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:_y,base:yt,fromBase(e){let t=[Ke(e[0]),Ke(e[1]),Ke(e[2])],n=t[1],[r,i]=qu({space:yt,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let o=n<=DE?zh*n:116*Math.cbrt(n)-16;return[o,13*o*(r-Kh),13*o*(i-Zh)]},toBase(e){let[t,n,r]=e;if(t===0||Hr(t))return[0,0,0];n=Ke(n),r=Ke(r);let i=n/(13*t)+Kh,o=r/(13*t)+Zh,s=t<=8?t/zh:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Yf=new L({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Vy,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),ar(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const EE=216/24389,xE=24389/27,Gh=st[0][0],Yh=st[0][1],Yl=st[0][2],Jh=st[1][0],Hh=st[1][1],Jl=st[1][2],Xh=st[2][0],Qh=st[2][1],Hl=st[2][2];function Qi(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function wu(e){const t=Math.pow(e+16,3)/1560896,n=t>EE?t:e/xE,r=n*(284517*Gh-94839*Yl),i=n*(838422*Yl+769860*Yh+731718*Gh),o=n*(632260*Yl-126452*Yh),s=n*(284517*Jh-94839*Jl),a=n*(838422*Jl+769860*Hh+731718*Jh),u=n*(632260*Jl-126452*Hh),l=n*(284517*Xh-94839*Hl),c=n*(838422*Hl+769860*Qh+731718*Xh),f=n*(632260*Hl-126452*Qh);return{r0s:r/o,r0i:i*e/o,r1s:r/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function e0(e,t){const n=t/360*Math.PI*2,r=Qi(e.r0s,e.r0i,n),i=Qi(e.r1s,e.r1i,n),o=Qi(e.g0s,e.g0i,n),s=Qi(e.g1s,e.g1i,n),a=Qi(e.b0s,e.b0i,n),u=Qi(e.b1s,e.b1i,n);return Math.min(r,i,o,s,a,u)}var CE=new L({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Yf,gamutSpace:xo,fromBase(e){let[t,n,r]=[Ke(e[0]),Ke(e[1]),Ke(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=wu(t),s=e0(o,r);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[Ke(e[0]),Ke(e[1]),Ke(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=wu(r);i=e0(o,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});st[0][0];st[0][1];st[0][2];st[1][0];st[1][1];st[1][2];st[2][0];st[2][1];st[2][2];function eo(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function t0(e){let t=eo(e.r0s,e.r0i),n=eo(e.r1s,e.r1i),r=eo(e.g0s,e.g0i),i=eo(e.g1s,e.g1i),o=eo(e.b0s,e.b0i),s=eo(e.b1s,e.b1i);return Math.min(t,n,r,i,o,s)}var AE=new L({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Yf,gamutSpace:"self",fromBase(e){let[t,n,r]=[Ke(e[0]),Ke(e[1]),Ke(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=wu(t),s=t0(o);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[Ke(e[0]),Ke(e[1]),Ke(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=wu(r);i=t0(o)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const n0=203,r0=2610/2**14,FE=2**14/2610,kE=2523/2**5,i0=2**5/2523,o0=3424/2**12,s0=2413/2**7,a0=2392/2**7;var SE=new Qt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Wu,toBase(e){return e.map(function(t){return(Math.max(t**i0-o0,0)/(s0-a0*t**i0))**FE*1e4/n0})},fromBase(e){return e.map(function(t){let n=Math.max(t*n0/1e4,0),r=o0+s0*n**r0,i=1+a0*n**r0;return(r/i)**kE})}});const u0=.17883277,l0=.28466892,c0=.55991073,Xl=3.7743;var IE=new Qt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Wu,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Xl:(Math.exp((t-c0)/u0)+l0)/12*Xl})},fromBase(e){return e.map(function(t){return t/=Xl,t<=1/12?Math.sqrt(3*t):u0*Math.log(12*t-l0)+c0})}});const Wy={};Xr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=qy(e.W1,e.W2,e.options.method))});Xr.add("chromatic-adaptation-end",e=>{e.M||(e.M=qy(e.W1,e.W2,e.options.method))});function zu({id:e,toCone_M:t,fromCone_M:n}){Wy[e]=arguments[0]}function qy(e,t,n="Bradford"){let r=Wy[n],[i,o,s]=Ce(r.toCone_M,e),[a,u,l]=Ce(r.toCone_M,t),c=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],f=Ce(c,r.toCone_M);return Ce(r.fromCone_M,f)}zu({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});zu({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});zu({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});zu({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Bt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Bt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const NE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],TE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var zy=new Qt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Bt.ACES,toXYZ_M:NE,fromXYZ_M:TE});const Ra=2**-16,Ql=-.35828683,La=(Math.log2(65504)+9.72)/17.52;var ME=new Qt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Ql,La],name:"Red"},g:{range:[Ql,La],name:"Green"},b:{range:[Ql,La],name:"Blue"}},referred:"scene",base:zy,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Ra)*2:n<La?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ra)+9.72)/17.52:t<Ra?(Math.log2(Ra+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),f0=Object.freeze({__proto__:null,A98RGB:pE,A98RGB_Linear:Uy,ACEScc:ME,ACEScg:zy,CAM16_JMh:v5,HCT:Ls,HPLuv:AE,HSL:Ry,HSLuv:CE,HSV:Ly,HWB:dE,ICTCP:Lc,JzCzHz:Rc,Jzazbz:by,LCH:Rs,LCHuv:Yf,Lab:an,Lab_D65:_c,Luv:Vy,OKLCH:vE,OKLab:vo,P3:Ty,P3_Linear:Iy,ProPhoto:$E,ProPhoto_Linear:jy,REC_2020:Sy,REC_2020_Linear:Wu,REC_2100_HLG:IE,REC_2100_PQ:SE,XYZ_ABS_D65:Kf,XYZ_D50:zf,XYZ_D65:yt,sRGB:xo,sRGB_Linear:Ny});let we=class jt{constructor(...t){let n;t.length===1&&(n=H(t[0]));let r,i,o;n?(r=n.space||n.spaceId,i=n.coords,o=n.alpha):[r,i,o]=t,Object.defineProperty(this,"space",{value:L.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new jt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=R5(this,...t);return n.color=new jt(n.color),n}static get(t,...n){return t instanceof jt?t:new jt(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:o}=r,s=function(...a){let u=n(...a);if(o==="color")u=jt.get(u);else if(o==="function<color>"){let l=u;u=function(...c){let f=l(...c);return jt.get(f)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>jt.get(l)));return u};t in jt||(jt[t]=s),i&&(jt.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let n in t)jt.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(jt);else for(let n in t)jt.defineFunction(n,t[n])}};we.defineFunctions({get:sn,getAll:na,set:kr,setAll:qf,to:xe,equals:L5,inGamut:Fi,toGamut:Qr,distance:wy,toString:Ds});Object.assign(we,{util:BD,hooks:Xr,WHITES:Bt,Space:L,spaces:L.registry,parse:gy,defaults:dn});for(let e of Object.keys(f0))L.register(f0[e]);for(let e in L.registry)Vc(e,L.registry[e]);Xr.add("colorspace-init-end",e=>{Vc(e.id,e),e.aliases?.forEach(t=>{Vc(t,e)})});function Vc(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(we.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,o)=>{try{return L.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:a}=L.resolveCoord([t,o]);if(a>=0)return i[a]}return Reflect.get(i,o,s)},set:(i,o,s,a)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:u}=L.resolveCoord([t,o]);if(u>=0)return i[u]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,a)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}we.extend(Eo);we.extend({deltaE:gs});Object.assign(we,{deltaEMethods:Eo});we.extend(lE);we.extend({contrast:iE});we.extend(sE);we.extend(j5);we.extend(fE);we.extend(Xa);const PE=Symbol("no update");class ec extends ni()("observable-value-update"){}class OE extends Hg("observable-destroy"){}class BE{listenTarget=new Nf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];if(n===PE)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)){const i=this.value;return this.value=n,this.listenTarget.dispatch(new ec({detail:[n,i]})),!0}return!1}listen(t,n){const r=i=>n(...i.detail);return this.listenerMap.set(n,r),t&&n(this.value,void 0),this.listenTarget.listen(ec,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(ec,n)}destroy(){this.listenTarget.dispatch(new OE),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function RE(e,t){return cv(e,t,(n,r)=>S.isFunction(n)&&S.isFunction(r)?!0:S.strictEquals(n,r))}function LE(e){return Je(e)&&!en(e)&&!oa(e)&&Symbol.asyncIterator in e}function en(e){return Array.isArray(e)}function Ky(e){return typeof e=="bigint"}function ia(e){return typeof e=="boolean"}function Jf(e){return e instanceof globalThis.Date}function UE(e){return typeof e=="function"}function jE(e){return Je(e)&&!en(e)&&!oa(e)&&Symbol.iterator in e}function _E(e){return e===null}function sr(e){return typeof e=="number"}function Je(e){return typeof e=="object"&&e!==null}function Zy(e){return e instanceof globalThis.RegExp}function We(e){return typeof e=="string"}function VE(e){return typeof e=="symbol"}function oa(e){return e instanceof globalThis.Uint8Array}function Ze(e){return e===void 0}function WE(e){return e.map(t=>bu(t))}function qE(e){return new Date(e.getTime())}function zE(e){return new Uint8Array(e)}function KE(e){return new RegExp(e.source,e.flags)}function ZE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=bu(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=bu(e[n]);return t}function bu(e){return en(e)?WE(e):Jf(e)?qE(e):oa(e)?zE(e):Zy(e)?KE(e):Je(e)?ZE(e):e}function mn(e){return bu(e)}function Hf(e,t){return mn(t===void 0?e:{...t,...e})}function Gy(e){return ur(e)&&globalThis.Symbol.asyncIterator in e}function Yy(e){return ur(e)&&globalThis.Symbol.iterator in e}function Jy(e){return e instanceof globalThis.Promise}function Xf(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Qf(e){return e instanceof globalThis.Uint8Array}function Hy(e,t){return t in e}function ur(e){return e!==null&&typeof e=="object"}function hn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function ri(e){return e===void 0}function Ku(e){return e===null}function Zu(e){return typeof e=="boolean"}function Q(e){return typeof e=="number"}function Xy(e){return globalThis.Number.isInteger(e)}function br(e){return typeof e=="bigint"}function ln(e){return typeof e=="string"}function Qy(e){return typeof e=="function"}function Gu(e){return typeof e=="symbol"}function e1(e){return br(e)||Zu(e)||Ku(e)||Q(e)||ln(e)||Gu(e)||ri(e)}var _e;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function n(s){const a=ur(s);return e.AllowArrayObject?a:a&&!hn(s)}e.IsObjectLike=n;function r(s){return n(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=r;function i(s){return e.AllowNaN?Q(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=ri(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(_e||(_e={}));function GE(e){return globalThis.Object.freeze(e).map(t=>$u(t))}function YE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=$u(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=$u(e[n]);return globalThis.Object.freeze(t)}function $u(e){return en(e)?GE(e):Jf(e)?e:oa(e)?e:Zy(e)?e:Je(e)?YE(e):e}function M(e,t){const n=t!==void 0?{...t,...e}:e;switch(_e.InstanceMode){case"freeze":return $u(n);case"clone":return mn(n);default:return n}}class $t extends Error{constructor(t){super(t)}}const zt=Symbol.for("TypeBox.Transform"),sa=Symbol.for("TypeBox.Readonly"),Nr=Symbol.for("TypeBox.Optional"),Yu=Symbol.for("TypeBox.Hint"),T=Symbol.for("TypeBox.Kind");function ed(e){return Je(e)&&e[sa]==="Readonly"}function ii(e){return Je(e)&&e[Nr]==="Optional"}function t1(e){return ae(e,"Any")}function n1(e){return ae(e,"Argument")}function jo(e){return ae(e,"Array")}function Ju(e){return ae(e,"AsyncIterator")}function Hu(e){return ae(e,"BigInt")}function aa(e){return ae(e,"Boolean")}function _o(e){return ae(e,"Computed")}function Vo(e){return ae(e,"Constructor")}function JE(e){return ae(e,"Date")}function Wo(e){return ae(e,"Function")}function qo(e){return ae(e,"Integer")}function Nn(e){return ae(e,"Intersect")}function Xu(e){return ae(e,"Iterator")}function ae(e,t){return Je(e)&&T in e&&e[T]===t}function r1(e){return ia(e)||sr(e)||We(e)}function Oi(e){return ae(e,"Literal")}function Bi(e){return ae(e,"MappedKey")}function wn(e){return ae(e,"MappedResult")}function ua(e){return ae(e,"Never")}function HE(e){return ae(e,"Not")}function td(e){return ae(e,"Null")}function zo(e){return ae(e,"Number")}function Qn(e){return ae(e,"Object")}function Qu(e){return ae(e,"Promise")}function el(e){return ae(e,"Record")}function Jt(e){return ae(e,"Ref")}function i1(e){return ae(e,"RegExp")}function la(e){return ae(e,"String")}function nd(e){return ae(e,"Symbol")}function Ri(e){return ae(e,"TemplateLiteral")}function XE(e){return ae(e,"This")}function $e(e){return Je(e)&&zt in e}function Li(e){return ae(e,"Tuple")}function ca(e){return ae(e,"Undefined")}function ht(e){return ae(e,"Union")}function QE(e){return ae(e,"Uint8Array")}function ex(e){return ae(e,"Unknown")}function tx(e){return ae(e,"Unsafe")}function nx(e){return ae(e,"Void")}function rx(e){return Je(e)&&T in e&&We(e[T])}function Rt(e){return t1(e)||n1(e)||jo(e)||aa(e)||Hu(e)||Ju(e)||_o(e)||Vo(e)||JE(e)||Wo(e)||qo(e)||Nn(e)||Xu(e)||Oi(e)||Bi(e)||wn(e)||ua(e)||HE(e)||td(e)||zo(e)||Qn(e)||Qu(e)||el(e)||Jt(e)||i1(e)||la(e)||nd(e)||Ri(e)||XE(e)||Li(e)||ca(e)||ht(e)||QE(e)||ex(e)||tx(e)||nx(e)||rx(e)}const ix=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function o1(e){try{return new RegExp(e),!0}catch{return!1}}function rd(e){if(!We(e))return!1;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function s1(e){return id(e)||Se(e)}function us(e){return Ze(e)||Ky(e)}function ye(e){return Ze(e)||sr(e)}function id(e){return Ze(e)||ia(e)}function ge(e){return Ze(e)||We(e)}function ox(e){return Ze(e)||We(e)&&rd(e)&&o1(e)}function sx(e){return Ze(e)||We(e)&&rd(e)}function a1(e){return Ze(e)||Se(e)}function vu(e){return Je(e)&&e[Nr]==="Optional"}function Gn(e){return ue(e,"Any")&&ge(e.$id)}function ax(e){return ue(e,"Argument")&&sr(e.index)}function Ui(e){return ue(e,"Array")&&e.type==="array"&&ge(e.$id)&&Se(e.items)&&ye(e.minItems)&&ye(e.maxItems)&&id(e.uniqueItems)&&a1(e.contains)&&ye(e.minContains)&&ye(e.maxContains)}function od(e){return ue(e,"AsyncIterator")&&e.type==="AsyncIterator"&&ge(e.$id)&&Se(e.items)}function tl(e){return ue(e,"BigInt")&&e.type==="bigint"&&ge(e.$id)&&us(e.exclusiveMaximum)&&us(e.exclusiveMinimum)&&us(e.maximum)&&us(e.minimum)&&us(e.multipleOf)}function ji(e){return ue(e,"Boolean")&&e.type==="boolean"&&ge(e.$id)}function ux(e){return ue(e,"Computed")&&We(e.target)&&en(e.parameters)&&e.parameters.every(t=>Se(t))}function nl(e){return ue(e,"Constructor")&&e.type==="Constructor"&&ge(e.$id)&&en(e.parameters)&&e.parameters.every(t=>Se(t))&&Se(e.returns)}function rl(e){return ue(e,"Date")&&e.type==="Date"&&ge(e.$id)&&ye(e.exclusiveMaximumTimestamp)&&ye(e.exclusiveMinimumTimestamp)&&ye(e.maximumTimestamp)&&ye(e.minimumTimestamp)&&ye(e.multipleOfTimestamp)}function il(e){return ue(e,"Function")&&e.type==="Function"&&ge(e.$id)&&en(e.parameters)&&e.parameters.every(t=>Se(t))&&Se(e.returns)}function Tr(e){return ue(e,"Integer")&&e.type==="integer"&&ge(e.$id)&&ye(e.exclusiveMaximum)&&ye(e.exclusiveMinimum)&&ye(e.maximum)&&ye(e.minimum)&&ye(e.multipleOf)}function u1(e){return Je(e)&&Object.entries(e).every(([t,n])=>rd(t)&&Se(n))}function _i(e){return ue(e,"Intersect")&&!(We(e.type)&&e.type!=="object")&&en(e.allOf)&&e.allOf.every(t=>Se(t)&&!hx(t))&&ge(e.type)&&(id(e.unevaluatedProperties)||a1(e.unevaluatedProperties))&&ge(e.$id)}function sd(e){return ue(e,"Iterator")&&e.type==="Iterator"&&ge(e.$id)&&Se(e.items)}function ue(e,t){return Je(e)&&T in e&&e[T]===t}function l1(e){return oi(e)&&We(e.const)}function c1(e){return oi(e)&&sr(e.const)}function f1(e){return oi(e)&&ia(e.const)}function oi(e){return ue(e,"Literal")&&ge(e.$id)&&lx(e.const)}function lx(e){return ia(e)||sr(e)||We(e)}function cx(e){return ue(e,"MappedKey")&&en(e.keys)&&e.keys.every(t=>sr(t)||We(t))}function fx(e){return ue(e,"MappedResult")&&u1(e.properties)}function si(e){return ue(e,"Never")&&Je(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Co(e){return ue(e,"Not")&&Se(e.not)}function ad(e){return ue(e,"Null")&&e.type==="null"&&ge(e.$id)}function Kt(e){return ue(e,"Number")&&e.type==="number"&&ge(e.$id)&&ye(e.exclusiveMaximum)&&ye(e.exclusiveMinimum)&&ye(e.maximum)&&ye(e.minimum)&&ye(e.multipleOf)}function Ne(e){return ue(e,"Object")&&e.type==="object"&&ge(e.$id)&&u1(e.properties)&&s1(e.additionalProperties)&&ye(e.minProperties)&&ye(e.maxProperties)}function ud(e){return ue(e,"Promise")&&e.type==="Promise"&&ge(e.$id)&&Se(e.item)}function bt(e){return ue(e,"Record")&&e.type==="object"&&ge(e.$id)&&s1(e.additionalProperties)&&Je(e.patternProperties)&&(t=>{const n=Object.getOwnPropertyNames(t.patternProperties);return n.length===1&&o1(n[0])&&Je(t.patternProperties)&&Se(t.patternProperties[n[0]])})(e)}function dx(e){return ue(e,"Ref")&&ge(e.$id)&&We(e.$ref)}function Us(e){return ue(e,"RegExp")&&ge(e.$id)&&We(e.source)&&We(e.flags)&&ye(e.maxLength)&&ye(e.minLength)}function Yn(e){return ue(e,"String")&&e.type==="string"&&ge(e.$id)&&ye(e.minLength)&&ye(e.maxLength)&&ox(e.pattern)&&sx(e.format)}function js(e){return ue(e,"Symbol")&&e.type==="symbol"&&ge(e.$id)}function _s(e){return ue(e,"TemplateLiteral")&&e.type==="string"&&We(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function mx(e){return ue(e,"This")&&ge(e.$id)&&We(e.$ref)}function hx(e){return Je(e)&&zt in e}function ol(e){return ue(e,"Tuple")&&e.type==="array"&&ge(e.$id)&&sr(e.minItems)&&sr(e.maxItems)&&e.minItems===e.maxItems&&(Ze(e.items)&&Ze(e.additionalItems)&&e.minItems===0||en(e.items)&&e.items.every(t=>Se(t)))}function Ii(e){return ue(e,"Undefined")&&e.type==="undefined"&&ge(e.$id)}function Sr(e){return ue(e,"Union")&&ge(e.$id)&&Je(e)&&en(e.anyOf)&&e.anyOf.every(t=>Se(t))}function fa(e){return ue(e,"Uint8Array")&&e.type==="Uint8Array"&&ge(e.$id)&&ye(e.minByteLength)&&ye(e.maxByteLength)}function Jn(e){return ue(e,"Unknown")&&ge(e.$id)}function px(e){return ue(e,"Unsafe")}function sl(e){return ue(e,"Void")&&e.type==="void"&&ge(e.$id)}function gx(e){return Je(e)&&T in e&&We(e[T])&&!ix.includes(e[T])}function Se(e){return Je(e)&&(Gn(e)||ax(e)||Ui(e)||ji(e)||tl(e)||od(e)||ux(e)||nl(e)||rl(e)||il(e)||Tr(e)||_i(e)||sd(e)||oi(e)||cx(e)||fx(e)||si(e)||Co(e)||ad(e)||Kt(e)||Ne(e)||ud(e)||bt(e)||dx(e)||Us(e)||Yn(e)||js(e)||_s(e)||mx(e)||ol(e)||Ii(e)||Sr(e)||fa(e)||Jn(e)||px(e)||sl(e)||gx(e))}const yx="(true|false)",Qa="(0|[1-9][0-9]*)",d1="(.*)",wx="(?!.*)",Ao=`^${Qa}$`,Fo=`^${d1}$`,bx=`^${wx}$`,m1=new Map;function ld(e){return m1.has(e)}function cd(e){return m1.get(e)}const fd=new Map;function Ni(e){return fd.has(e)}function h1(e,t){fd.set(e,t)}function dd(e){return fd.get(e)}function $x(e,t){return e.includes(t)}function vx(e){return[...new Set(e)]}function Dx(e,t){return e.filter(n=>t.includes(n))}function Ex(e,t){return e.reduce((n,r)=>Dx(n,r),t)}function xx(e){return e.length===1?e[0]:e.length>1?Ex(e.slice(1),e[0]):[]}function Cx(e){const t=[];for(const n of e)t.push(...n);return t}function Vs(e){return M({[T]:"Any"},e)}function md(e,t){return M({[T]:"Array",type:"array",items:e},t)}function Ax(e){return M({[T]:"Argument",index:e})}function hd(e,t){return M({[T]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function it(e,t,n){return M({[T]:"Computed",target:e,parameters:t},n)}function Fx(e,t){const{[t]:n,...r}=e;return r}function pn(e,t){return t.reduce((n,r)=>Fx(n,r),e)}function Te(e){return M({[T]:"Never",not:{}},e)}function vt(e){return M({[T]:"MappedResult",properties:e})}function pd(e,t,n){return M({[T]:"Constructor",type:"Constructor",parameters:e,returns:t},n)}function da(e,t,n){return M({[T]:"Function",type:"Function",parameters:e,returns:t},n)}function Wc(e,t){return M({[T]:"Union",anyOf:e},t)}function kx(e){return e.some(t=>ii(t))}function d0(e){return e.map(t=>ii(t)?Sx(t):t)}function Sx(e){return pn(e,[Nr])}function Ix(e,t){return kx(e)?li(Wc(d0(e),t)):Wc(d0(e),t)}function Ko(e,t){return e.length===1?M(e[0],t):e.length===0?Te(t):Ix(e,t)}function Dt(e,t){return e.length===0?Te(t):e.length===1?M(e[0],t):Wc(e,t)}class m0 extends $t{}function Nx(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function gd(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function Er(e,t){return gd(e,t,"(")}function Ws(e,t){return gd(e,t,")")}function p1(e,t){return gd(e,t,"|")}function Tx(e){if(!(Er(e,0)&&Ws(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(Er(e,n)&&(t+=1),Ws(e,n)&&(t-=1),t===0&&n!==e.length-1)return!1;return!0}function Mx(e){return e.slice(1,e.length-1)}function Px(e){let t=0;for(let n=0;n<e.length;n++)if(Er(e,n)&&(t+=1),Ws(e,n)&&(t-=1),p1(e,n)&&t===0)return!0;return!1}function Ox(e){for(let t=0;t<e.length;t++)if(Er(e,t))return!0;return!1}function Bx(e){let[t,n]=[0,0];const r=[];for(let o=0;o<e.length;o++)if(Er(e,o)&&(t+=1),Ws(e,o)&&(t-=1),p1(e,o)&&t===0){const s=e.slice(n,o);s.length>0&&r.push(ko(s)),n=o+1}const i=e.slice(n);return i.length>0&&r.push(ko(i)),r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"or",expr:r}}function Rx(e){function t(i,o){if(!Er(i,o))throw new m0("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(Er(i,a)&&(s+=1),Ws(i,a)&&(s-=1),s===0)return[o,a];throw new m0("TemplateLiteralParser: Unclosed group parens in expression")}function n(i,o){for(let s=o;s<i.length;s++)if(Er(i,s))return[o,s];return[o,i.length]}const r=[];for(let i=0;i<e.length;i++)if(Er(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);r.push(ko(a)),i=s}else{const[o,s]=n(e,i),a=e.slice(o,s);a.length>0&&r.push(ko(a)),i=s-1}return r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"and",expr:r}}function ko(e){return Tx(e)?ko(Mx(e)):Px(e)?Bx(e):Ox(e)?Rx(e):{type:"const",const:Nx(e)}}function yd(e){return ko(e.slice(1,e.length-1))}class Lx extends $t{}function Ux(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function jx(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function _x(e){return e.type==="const"&&e.const===".*"}function qs(e){return Ux(e)||_x(e)?!1:jx(e)?!0:e.type==="and"?e.expr.every(t=>qs(t)):e.type==="or"?e.expr.every(t=>qs(t)):e.type==="const"?!0:(()=>{throw new Lx("Unknown expression type")})()}function Vx(e){const t=yd(e.pattern);return qs(t)}class Wx extends $t{}function*g1(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const n of g1(e.slice(1)))yield`${t}${n}`}function*qx(e){return yield*g1(e.expr.map(t=>[...al(t)]))}function*zx(e){for(const t of e.expr)yield*al(t)}function*Kx(e){return yield e.const}function*al(e){return e.type==="and"?yield*qx(e):e.type==="or"?yield*zx(e):e.type==="const"?yield*Kx(e):(()=>{throw new Wx("Unknown expression")})()}function y1(e){const t=yd(e.pattern);return qs(t)?[...al(t)]:[]}function Ye(e,t){return M({[T]:"Literal",const:e,type:typeof e},t)}function w1(e){return M({[T]:"Boolean",type:"boolean"},e)}function wd(e){return M({[T]:"BigInt",type:"bigint"},e)}function Vi(e){return M({[T]:"Number",type:"number"},e)}function Ti(e){return M({[T]:"String",type:"string"},e)}function*Zx(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield w1():t==="number"?yield Vi():t==="bigint"?yield wd():t==="string"?yield Ti():yield(()=>{const n=t.split("|").map(r=>Ye(r.trim()));return n.length===0?Te():n.length===1?n[0]:Ko(n)})()}function*Gx(e){if(e[1]!=="{"){const t=Ye("$"),n=qc(e.slice(1));return yield*[t,...n]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const n=Zx(e.slice(2,t)),r=qc(e.slice(t+1));return yield*[...n,...r]}yield Ye(e)}function*qc(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const n=Ye(e.slice(0,t)),r=Gx(e.slice(t));return yield*[n,...r]}yield Ye(e)}function Yx(e){return[...qc(e)]}class Jx extends $t{}function Hx(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function b1(e,t){return Ri(e)?e.pattern.slice(1,e.pattern.length-1):ht(e)?`(${e.anyOf.map(n=>b1(n,t)).join("|")})`:zo(e)?`${t}${Qa}`:qo(e)?`${t}${Qa}`:Hu(e)?`${t}${Qa}`:la(e)?`${t}${d1}`:Oi(e)?`${t}${Hx(e.const.toString())}`:aa(e)?`${t}${yx}`:(()=>{throw new Jx(`Unexpected Kind '${e[T]}'`)})()}function h0(e){return`^${e.map(t=>b1(t,"")).join("")}$`}function Du(e){const n=y1(e).map(r=>Ye(r));return Ko(n)}function $1(e,t){const n=We(e)?h0(Yx(e)):h0(e);return M({[T]:"TemplateLiteral",type:"string",pattern:n},t)}function Xx(e){return y1(e).map(n=>n.toString())}function Qx(e){const t=[];for(const n of e)t.push(...ai(n));return t}function eC(e){return[e.toString()]}function ai(e){return[...new Set(Ri(e)?Xx(e):ht(e)?Qx(e.anyOf):Oi(e)?eC(e.const):zo(e)?["[number]"]:qo(e)?["[number]"]:[])]}function tC(e,t,n){const r={};for(const i of Object.getOwnPropertyNames(t))r[i]=ul(e,ai(t[i]),n);return r}function nC(e,t,n){return tC(e,t.properties,n)}function rC(e,t,n){const r=nC(e,t,n);return vt(r)}function v1(e,t){return e.map(n=>D1(n,t))}function iC(e){return e.filter(t=>!ua(t))}function oC(e,t){return C1(iC(v1(e,t)))}function sC(e){return e.some(t=>ua(t))?[]:e}function aC(e,t){return Ko(sC(v1(e,t)))}function uC(e,t){return t in e?e[t]:t==="[number]"?Ko(e):Te()}function lC(e,t){return t==="[number]"?e:Te()}function cC(e,t){return t in e?e[t]:Te()}function D1(e,t){return Nn(e)?oC(e.allOf,t):ht(e)?aC(e.anyOf,t):Li(e)?uC(e.items??[],t):jo(e)?lC(e.items,t):Qn(e)?cC(e.properties,t):Te()}function bd(e,t){return t.map(n=>D1(e,n))}function p0(e,t){return Ko(bd(e,t))}function ul(e,t,n){if(Jt(e)||Jt(t)){const r="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Rt(e)||!Rt(t))throw new $t(r);return it("Index",[e,t])}return wn(t)?rC(e,t,n):Bi(t)?hC(e,t,n):M(Rt(t)?p0(e,ai(t)):p0(e,t),n)}function fC(e,t,n){return{[t]:ul(e,[t],mn(n))}}function dC(e,t,n){return t.reduce((r,i)=>({...r,...fC(e,i,n)}),{})}function mC(e,t,n){return dC(e,t.keys,n)}function hC(e,t,n){const r=mC(e,t,n);return vt(r)}function $d(e,t){return M({[T]:"Iterator",type:"Iterator",items:e},t)}function pC(e){const t=[];for(let n in e)ii(e[n])||t.push(n);return t}function gC(e,t){const n=pC(e),r=n.length>0?{[T]:"Object",type:"object",properties:e,required:n}:{[T]:"Object",type:"object",properties:e};return M(r,t)}var mt=gC;function E1(e,t){return M({[T]:"Promise",type:"Promise",item:e},t)}function yC(e){return M(pn(e,[sa]))}function wC(e){return M({...e,[sa]:"Readonly"})}function bC(e,t){return t===!1?yC(e):wC(e)}function ui(e,t){const n=t??!0;return wn(e)?DC(e,n):bC(e,n)}function $C(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=ui(e[r],t);return n}function vC(e,t){return $C(e.properties,t)}function DC(e,t){const n=vC(e,t);return vt(n)}function Zo(e,t){return M(e.length>0?{[T]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[T]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function x1(e,t){return e in t?En(e,t[e]):vt(t)}function EC(e){return{[e]:Ye(e)}}function xC(e){const t={};for(const n of e)t[n]=Ye(n);return t}function CC(e,t){return $x(t,e)?EC(e):xC(t)}function AC(e,t){const n=CC(e,t);return x1(e,n)}function ls(e,t){return t.map(n=>En(e,n))}function FC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(t))n[r]=En(e,t[r]);return n}function En(e,t){const n={...t};return ii(t)?li(En(e,pn(t,[Nr]))):ed(t)?ui(En(e,pn(t,[sa]))):wn(t)?x1(e,t.properties):Bi(t)?AC(e,t.keys):Vo(t)?pd(ls(e,t.parameters),En(e,t.returns),n):Wo(t)?da(ls(e,t.parameters),En(e,t.returns),n):Ju(t)?hd(En(e,t.items),n):Xu(t)?$d(En(e,t.items),n):Nn(t)?ci(ls(e,t.allOf),n):ht(t)?Dt(ls(e,t.anyOf),n):Li(t)?Zo(ls(e,t.items??[]),n):Qn(t)?mt(FC(e,t.properties),n):jo(t)?md(En(e,t.items),n):Qu(t)?E1(En(e,t.item),n):t}function kC(e,t){const n={};for(const r of e)n[r]=En(r,t);return n}function SC(e,t,n){const r=Rt(e)?ai(e):e,i=t({[T]:"MappedKey",keys:r}),o=kC(r,i);return mt(o,n)}function IC(e){return M(pn(e,[Nr]))}function NC(e){return M({...e,[Nr]:"Optional"})}function TC(e,t){return t===!1?IC(e):NC(e)}function li(e,t){const n=t??!0;return wn(e)?OC(e,n):TC(e,n)}function MC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=li(e[r],t);return n}function PC(e,t){return MC(e.properties,t)}function OC(e,t){const n=PC(e,t);return vt(n)}function zc(e,t={}){const n=e.every(i=>Qn(i)),r=Rt(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return M(t.unevaluatedProperties===!1||Rt(t.unevaluatedProperties)||n?{...r,[T]:"Intersect",type:"object",allOf:e}:{...r,[T]:"Intersect",allOf:e},t)}function BC(e){return e.every(t=>ii(t))}function RC(e){return pn(e,[Nr])}function g0(e){return e.map(t=>ii(t)?RC(t):t)}function LC(e,t){return BC(e)?li(zc(g0(e),t)):zc(g0(e),t)}function C1(e,t={}){if(e.length===1)return M(e[0],t);if(e.length===0)return Te(t);if(e.some(n=>$e(n)))throw new Error("Cannot intersect transform types");return LC(e,t)}function ci(e,t){if(e.length===1)return M(e[0],t);if(e.length===0)return Te(t);if(e.some(n=>$e(n)))throw new Error("Cannot intersect transform types");return zc(e,t)}function Go(...e){const[t,n]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new $t("Ref: $ref must be a string");return M({[T]:"Ref",$ref:t},n)}function UC(e,t){return it("Awaited",[it(e,t)])}function jC(e){return it("Awaited",[Go(e)])}function _C(e){return ci(A1(e))}function VC(e){return Dt(A1(e))}function WC(e){return ll(e)}function A1(e){return e.map(t=>ll(t))}function ll(e,t){return M(_o(e)?UC(e.target,e.parameters):Nn(e)?_C(e.allOf):ht(e)?VC(e.anyOf):Qu(e)?WC(e.item):Jt(e)?jC(e.$ref):e,t)}function F1(e){const t=[];for(const n of e)t.push(Wi(n));return t}function qC(e){const t=F1(e);return Cx(t)}function zC(e){const t=F1(e);return xx(t)}function KC(e){return e.map((t,n)=>n.toString())}function ZC(e){return["[number]"]}function GC(e){return globalThis.Object.getOwnPropertyNames(e)}function YC(e){return Kc?globalThis.Object.getOwnPropertyNames(e).map(n=>n[0]==="^"&&n[n.length-1]==="$"?n.slice(1,n.length-1):n):[]}function Wi(e){return Nn(e)?qC(e.allOf):ht(e)?zC(e.anyOf):Li(e)?KC(e.items??[]):jo(e)?ZC(e.items):Qn(e)?GC(e.properties):el(e)?YC(e.patternProperties):[]}let Kc=!1;function So(e){Kc=!0;const t=Wi(e);return Kc=!1,`^(${t.map(r=>`(${r})`).join("|")})$`}function JC(e,t){return it("KeyOf",[it(e,t)])}function HC(e){return it("KeyOf",[Go(e)])}function XC(e,t){const n=Wi(e),r=QC(n),i=Ko(r);return M(i,t)}function QC(e){return e.map(t=>t==="[number]"?Vi():Ye(t))}function vd(e,t){return _o(e)?JC(e.target,e.parameters):Jt(e)?HC(e.$ref):wn(e)?nA(e,t):XC(e,t)}function eA(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=vd(e[r],mn(t));return n}function tA(e,t){return eA(e.properties,t)}function nA(e,t){const n=tA(e,t);return vt(n)}function k1(e){const t=Wi(e),n=bd(e,t);return t.map((r,i)=>[t[i],n[i]])}function rA(e){const t=[];for(const n of e)t.push(...Wi(n));return vx(t)}function iA(e){return e.filter(t=>!ua(t))}function oA(e,t){const n=[];for(const r of e)n.push(...bd(r,[t]));return iA(n)}function sA(e,t){const n={};for(const r of t)n[r]=C1(oA(e,r));return n}function aA(e,t){const n=rA(e),r=sA(e,n);return mt(r,t)}function S1(e){return M({[T]:"Date",type:"Date"},e)}function I1(e){return M({[T]:"Null",type:"null"},e)}function N1(e){return M({[T]:"Symbol",type:"symbol"},e)}function T1(e){return M({[T]:"Undefined",type:"undefined"},e)}function M1(e){return M({[T]:"Uint8Array",type:"Uint8Array"},e)}function cl(e){return M({[T]:"Unknown"},e)}function uA(e){return e.map(t=>Dd(t,!1))}function lA(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=ui(Dd(e[n],!1));return t}function Ua(e,t){return t===!0?e:ui(e)}function Dd(e,t){return LE(e)||jE(e)?Ua(Vs(),t):en(e)?ui(Zo(uA(e))):oa(e)?M1():Jf(e)?S1():Je(e)?Ua(mt(lA(e)),t):UE(e)?Ua(da([],cl()),t):Ze(e)?T1():_E(e)?I1():VE(e)?N1():Ky(e)?wd():sr(e)||ia(e)||We(e)?Ye(e):mt({})}function cA(e,t){return M(Dd(e,!0),t)}function fA(e,t){return Vo(e)?Zo(e.parameters,t):Te(t)}function dA(e,t){if(Ze(e))throw new Error("Enum undefined or empty");const n=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(n)].map(o=>Ye(o));return Dt(i,{...t,[Yu]:"Enum"})}class mA extends $t{}var E;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(E||(E={}));function In(e){return e===E.False?e:E.True}function Yo(e){throw new mA(e)}function He(e){return si(e)||_i(e)||Sr(e)||Jn(e)||Gn(e)}function Xe(e,t){return si(t)?B1():_i(t)?fl(e,t):Sr(t)?xd(e,t):Jn(t)?j1():Gn(t)?Ed():Yo("StructuralRight")}function Ed(e,t){return E.True}function hA(e,t){return _i(t)?fl(e,t):Sr(t)&&t.anyOf.some(n=>Gn(n)||Jn(n))?E.True:Sr(t)?E.Union:Jn(t)||Gn(t)?E.True:E.Union}function pA(e,t){return Jn(e)?E.False:Gn(e)?E.Union:si(e)?E.True:E.False}function gA(e,t){return Ne(t)&&dl(t)?E.True:He(t)?Xe(e,t):Ui(t)?In(pe(e.items,t.items)):E.False}function yA(e,t){return He(t)?Xe(e,t):od(t)?In(pe(e.items,t.items)):E.False}function wA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):tl(t)?E.True:E.False}function P1(e,t){return f1(e)||ji(e)?E.True:E.False}function bA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):ji(t)?E.True:E.False}function $A(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):nl(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>In(pe(t.parameters[r],n))===E.True)?In(pe(e.returns,t.returns)):E.False:E.False}function vA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):rl(t)?E.True:E.False}function DA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):il(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>In(pe(t.parameters[r],n))===E.True)?In(pe(e.returns,t.returns)):E.False:E.False}function O1(e,t){return oi(e)&&sr(e.const)||Kt(e)||Tr(e)?E.True:E.False}function EA(e,t){return Tr(t)||Kt(t)?E.True:He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):E.False}function fl(e,t){return t.allOf.every(n=>pe(e,n)===E.True)?E.True:E.False}function xA(e,t){return e.allOf.some(n=>pe(n,t)===E.True)?E.True:E.False}function CA(e,t){return He(t)?Xe(e,t):sd(t)?In(pe(e.items,t.items)):E.False}function AA(e,t){return oi(t)&&t.const===e.const?E.True:He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):Yn(t)?U1(e):Kt(t)?R1(e):Tr(t)?O1(e):ji(t)?P1(e):E.False}function B1(e,t){return E.False}function FA(e,t){return E.True}function y0(e){let[t,n]=[e,0];for(;Co(t);)t=t.not,n+=1;return n%2===0?t:cl()}function kA(e,t){return Co(e)?pe(y0(e),t):Co(t)?pe(e,y0(t)):Yo("Invalid fallthrough for Not")}function SA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):ad(t)?E.True:E.False}function R1(e,t){return c1(e)||Kt(e)||Tr(e)?E.True:E.False}function IA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):Tr(t)||Kt(t)?E.True:E.False}function Ht(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function w0(e){return dl(e)}function b0(e){return Ht(e,0)||Ht(e,1)&&"description"in e.properties&&Sr(e.properties.description)&&e.properties.description.anyOf.length===2&&(Yn(e.properties.description.anyOf[0])&&Ii(e.properties.description.anyOf[1])||Yn(e.properties.description.anyOf[1])&&Ii(e.properties.description.anyOf[0]))}function tc(e){return Ht(e,0)}function $0(e){return Ht(e,0)}function NA(e){return Ht(e,0)}function TA(e){return Ht(e,0)}function MA(e){return dl(e)}function PA(e){const t=Vi();return Ht(e,0)||Ht(e,1)&&"length"in e.properties&&In(pe(e.properties.length,t))===E.True}function OA(e){return Ht(e,0)}function dl(e){const t=Vi();return Ht(e,0)||Ht(e,1)&&"length"in e.properties&&In(pe(e.properties.length,t))===E.True}function BA(e){const t=da([Vs()],Vs());return Ht(e,0)||Ht(e,1)&&"then"in e.properties&&In(pe(e.properties.then,t))===E.True}function L1(e,t){return pe(e,t)===E.False||vu(e)&&!vu(t)?E.False:E.True}function St(e,t){return Jn(e)?E.False:Gn(e)?E.Union:si(e)||l1(e)&&w0(t)||c1(e)&&tc(t)||f1(e)&&$0(t)||js(e)&&b0(t)||tl(e)&&NA(t)||Yn(e)&&w0(t)||js(e)&&b0(t)||Kt(e)&&tc(t)||Tr(e)&&tc(t)||ji(e)&&$0(t)||fa(e)&&MA(t)||rl(e)&&TA(t)||nl(e)&&OA(t)||il(e)&&PA(t)?E.True:bt(e)&&Yn(Zc(e))?t[Yu]==="Record"?E.True:E.False:bt(e)&&Kt(Zc(e))?Ht(t,0)?E.True:E.False:E.False}function RA(e,t){return He(t)?Xe(e,t):bt(t)?Tn(e,t):Ne(t)?(()=>{for(const n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!vu(t.properties[n]))return E.False;if(vu(t.properties[n]))return E.True;if(L1(e.properties[n],t.properties[n])===E.False)return E.False}return E.True})():E.False}function LA(e,t){return He(t)?Xe(e,t):Ne(t)&&BA(t)?E.True:ud(t)?In(pe(e.item,t.item)):E.False}function Zc(e){return Ao in e.patternProperties?Vi():Fo in e.patternProperties?Ti():Yo("Unknown record key pattern")}function Gc(e){return Ao in e.patternProperties?e.patternProperties[Ao]:Fo in e.patternProperties?e.patternProperties[Fo]:Yo("Unable to get record value schema")}function Tn(e,t){const[n,r]=[Zc(t),Gc(t)];return l1(e)&&Kt(n)&&In(pe(e,r))===E.True?E.True:fa(e)&&Kt(n)||Yn(e)&&Kt(n)||Ui(e)&&Kt(n)?pe(e,r):Ne(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(L1(r,e.properties[i])===E.False)return E.False;return E.True})():E.False}function UA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?pe(Gc(e),Gc(t)):E.False}function jA(e,t){const n=Us(e)?Ti():e,r=Us(t)?Ti():t;return pe(n,r)}function U1(e,t){return oi(e)&&We(e.const)||Yn(e)?E.True:E.False}function _A(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):Yn(t)?E.True:E.False}function VA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):js(t)?E.True:E.False}function WA(e,t){return _s(e)?pe(Du(e),t):_s(t)?pe(e,Du(t)):Yo("Invalid fallthrough for TemplateLiteral")}function qA(e,t){return Ui(t)&&e.items!==void 0&&e.items.every(n=>pe(n,t.items)===E.True)}function zA(e,t){return si(e)?E.True:Jn(e)?E.False:Gn(e)?E.Union:E.False}function KA(e,t){return He(t)?Xe(e,t):Ne(t)&&dl(t)||Ui(t)&&qA(e,t)?E.True:ol(t)?Ze(e.items)&&!Ze(t.items)||!Ze(e.items)&&Ze(t.items)?E.False:Ze(e.items)&&!Ze(t.items)||e.items.every((n,r)=>pe(n,t.items[r])===E.True)?E.True:E.False:E.False}function ZA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):fa(t)?E.True:E.False}function GA(e,t){return He(t)?Xe(e,t):Ne(t)?St(e,t):bt(t)?Tn(e,t):sl(t)?HA(e):Ii(t)?E.True:E.False}function xd(e,t){return t.anyOf.some(n=>pe(e,n)===E.True)?E.True:E.False}function YA(e,t){return e.anyOf.every(n=>pe(n,t)===E.True)?E.True:E.False}function j1(e,t){return E.True}function JA(e,t){return si(t)?B1():_i(t)?fl(e,t):Sr(t)?xd(e,t):Gn(t)?Ed():Yn(t)?U1(e):Kt(t)?R1(e):Tr(t)?O1(e):ji(t)?P1(e):Ui(t)?pA(e):ol(t)?zA(e):Ne(t)?St(e,t):Jn(t)?E.True:E.False}function HA(e,t){return Ii(e)||Ii(e)?E.True:E.False}function XA(e,t){return _i(t)?fl(e,t):Sr(t)?xd(e,t):Jn(t)?j1():Gn(t)?Ed():Ne(t)?St(e,t):sl(t)?E.True:E.False}function pe(e,t){return _s(e)||_s(t)?WA(e,t):Us(e)||Us(t)?jA(e,t):Co(e)||Co(t)?kA(e,t):Gn(e)?hA(e,t):Ui(e)?gA(e,t):tl(e)?wA(e,t):ji(e)?bA(e,t):od(e)?yA(e,t):nl(e)?$A(e,t):rl(e)?vA(e,t):il(e)?DA(e,t):Tr(e)?EA(e,t):_i(e)?xA(e,t):sd(e)?CA(e,t):oi(e)?AA(e,t):si(e)?FA():ad(e)?SA(e,t):Kt(e)?IA(e,t):Ne(e)?RA(e,t):bt(e)?UA(e,t):Yn(e)?_A(e,t):js(e)?VA(e,t):ol(e)?KA(e,t):ud(e)?LA(e,t):fa(e)?ZA(e,t):Ii(e)?GA(e,t):Sr(e)?YA(e,t):Jn(e)?JA(e,t):sl(e)?XA(e,t):Yo(`Unknown left type operand '${e[T]}'`)}function ma(e,t){return pe(e,t)}function QA(e,t,n,r,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=Cd(e[s],t,n,r,mn(i));return o}function eF(e,t,n,r,i){return QA(e.properties,t,n,r,i)}function tF(e,t,n,r,i){const o=eF(e,t,n,r,i);return vt(o)}function nF(e,t,n,r){const i=ma(e,t);return i===E.Union?Dt([n,r]):i===E.True?n:r}function Cd(e,t,n,r,i){return wn(e)?tF(e,t,n,r,i):Bi(e)?M(sF(e,t,n,r,i)):M(nF(e,t,n,r),i)}function rF(e,t,n,r,i){return{[e]:Cd(Ye(e),t,n,r,mn(i))}}function iF(e,t,n,r,i){return e.reduce((o,s)=>({...o,...rF(s,t,n,r,i)}),{})}function oF(e,t,n,r,i){return iF(e.keys,t,n,r,i)}function sF(e,t,n,r,i){const o=oF(e,t,n,r,i);return vt(o)}function aF(e){return e.allOf.every(t=>Jo(t))}function uF(e){return e.anyOf.some(t=>Jo(t))}function lF(e){return!Jo(e.not)}function Jo(e){return e[T]==="Intersect"?aF(e):e[T]==="Union"?uF(e):e[T]==="Not"?lF(e):e[T]==="Undefined"}function cF(e,t){return Ad(Du(e),t)}function fF(e,t){const n=e.filter(r=>ma(r,t)===E.False);return n.length===1?n[0]:Dt(n)}function Ad(e,t,n={}){return Ri(e)?M(cF(e,t),n):wn(e)?M(hF(e,t),n):M(ht(e)?fF(e.anyOf,t):ma(e,t)!==E.False?Te():e,n)}function dF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Ad(e[r],t);return n}function mF(e,t){return dF(e.properties,t)}function hF(e,t){const n=mF(e,t);return vt(n)}function pF(e,t){return Fd(Du(e),t)}function gF(e,t){const n=e.filter(r=>ma(r,t)!==E.False);return n.length===1?n[0]:Dt(n)}function Fd(e,t,n){return Ri(e)?M(pF(e,t),n):wn(e)?M(bF(e,t),n):M(ht(e)?gF(e.anyOf,t):ma(e,t)!==E.False?e:Te(),n)}function yF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Fd(e[r],t);return n}function wF(e,t){return yF(e.properties,t)}function bF(e,t){const n=wF(e,t);return vt(n)}function $F(e,t){return Vo(e)?M(e.returns,t):Te(t)}function _1(e){return ui(li(e))}function qi(e,t,n){return M({[T]:"Record",type:"object",patternProperties:{[e]:t}},n)}function kd(e,t,n){const r={};for(const i of e)r[i]=t;return mt(r,{...n,[Yu]:"Record"})}function vF(e,t,n){return Vx(e)?kd(ai(e),t,n):qi(e.pattern,t,n)}function DF(e,t,n){return kd(ai(Dt(e)),t,n)}function EF(e,t,n){return kd([e.toString()],t,n)}function xF(e,t,n){return qi(e.source,t,n)}function CF(e,t,n){const r=Ze(e.pattern)?Fo:e.pattern;return qi(r,t,n)}function AF(e,t,n){return qi(Fo,t,n)}function FF(e,t,n){return qi(bx,t,n)}function kF(e,t,n){return mt({true:t,false:t},n)}function SF(e,t,n){return qi(Ao,t,n)}function IF(e,t,n){return qi(Ao,t,n)}function V1(e,t,n={}){return ht(e)?DF(e.anyOf,t,n):Ri(e)?vF(e,t,n):Oi(e)?EF(e.const,t,n):aa(e)?kF(e,t,n):qo(e)?SF(e,t,n):zo(e)?IF(e,t,n):i1(e)?xF(e,t,n):la(e)?CF(e,t,n):t1(e)?AF(e,t,n):ua(e)?FF(e,t,n):Te(n)}function Sd(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function NF(e){const t=Sd(e);return t===Fo?Ti():t===Ao?Vi():Ti({pattern:t})}function W1(e){return e.patternProperties[Sd(e)]}function TF(e,t){return t.parameters=ha(e,t.parameters),t.returns=Hn(e,t.returns),t}function MF(e,t){return t.parameters=ha(e,t.parameters),t.returns=Hn(e,t.returns),t}function PF(e,t){return t.allOf=ha(e,t.allOf),t}function OF(e,t){return t.anyOf=ha(e,t.anyOf),t}function BF(e,t){return Ze(t.items)||(t.items=ha(e,t.items)),t}function RF(e,t){return t.items=Hn(e,t.items),t}function LF(e,t){return t.items=Hn(e,t.items),t}function UF(e,t){return t.items=Hn(e,t.items),t}function jF(e,t){return t.item=Hn(e,t.item),t}function _F(e,t){const n=zF(e,t.properties);return{...t,...mt(n)}}function VF(e,t){const n=Hn(e,NF(t)),r=Hn(e,W1(t)),i=V1(n,r);return{...t,...i}}function WF(e,t){return t.index in e?e[t.index]:cl()}function qF(e,t){const n=ed(t),r=ii(t),i=Hn(e,t);return n&&r?_1(i):n&&!r?ui(i):!n&&r?li(i):i}function zF(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:qF(e,t[r])}),{})}function ha(e,t){return t.map(n=>Hn(e,n))}function Hn(e,t){return Vo(t)?TF(e,t):Wo(t)?MF(e,t):Nn(t)?PF(e,t):ht(t)?OF(e,t):Li(t)?BF(e,t):jo(t)?RF(e,t):Ju(t)?LF(e,t):Xu(t)?UF(e,t):Qu(t)?jF(e,t):Qn(t)?_F(e,t):el(t)?VF(e,t):n1(t)?WF(e,t):t}function KF(e,t){return Hn(t,Hf(e))}function ZF(e){return M({[T]:"Integer",type:"integer"},e)}function GF(e,t,n){return{[e]:Ho(Ye(e),t,mn(n))}}function YF(e,t,n){return e.reduce((i,o)=>({...i,...GF(o,t,n)}),{})}function JF(e,t,n){return YF(e.keys,t,n)}function HF(e,t,n){const r=JF(e,t,n);return vt(r)}function XF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join("")}function QF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join("")}function ek(e){return e.toUpperCase()}function tk(e){return e.toLowerCase()}function nk(e,t,n){const r=yd(e.pattern);if(!qs(r))return{...e,pattern:q1(e.pattern,t)};const s=[...al(r)].map(l=>Ye(l)),a=z1(s,t),u=Dt(a);return $1([u],n)}function q1(e,t){return typeof e=="string"?t==="Uncapitalize"?XF(e):t==="Capitalize"?QF(e):t==="Uppercase"?ek(e):t==="Lowercase"?tk(e):e:e.toString()}function z1(e,t){return e.map(n=>Ho(n,t))}function Ho(e,t,n={}){return Bi(e)?HF(e,t,n):Ri(e)?nk(e,t,n):ht(e)?Dt(z1(e.anyOf,t),n):Oi(e)?Ye(q1(e.const,t),n):M(e,n)}function rk(e,t={}){return Ho(e,"Capitalize",t)}function ik(e,t={}){return Ho(e,"Lowercase",t)}function ok(e,t={}){return Ho(e,"Uncapitalize",t)}function sk(e,t={}){return Ho(e,"Uppercase",t)}function ak(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=ml(e[i],t,mn(n));return r}function uk(e,t,n){return ak(e.properties,t,n)}function lk(e,t,n){const r=uk(e,t,n);return vt(r)}function ck(e,t){return e.map(n=>Id(n,t))}function fk(e,t){return e.map(n=>Id(n,t))}function dk(e,t){const{[t]:n,...r}=e;return r}function mk(e,t){return t.reduce((n,r)=>dk(n,r),e)}function hk(e,t){const n=pn(e,[zt,"$id","required","properties"]),r=mk(e.properties,t);return mt(r,n)}function pk(e){const t=e.reduce((n,r)=>r1(r)?[...n,Ye(r)]:n,[]);return Dt(t)}function Id(e,t){return Nn(e)?ci(ck(e.allOf,t)):ht(e)?Dt(fk(e.anyOf,t)):Qn(e)?hk(e,t):mt({})}function ml(e,t,n){const r=en(t)?pk(t):t,i=Rt(t)?ai(t):t,o=Jt(e),s=Jt(t);return wn(e)?lk(e,i,n):Bi(t)?bk(e,t,n):o&&s?it("Omit",[e,r],n):!o&&s?it("Omit",[e,r],n):o&&!s?it("Omit",[e,r],n):M({...Id(e,i),...n})}function gk(e,t,n){return{[t]:ml(e,[t],mn(n))}}function yk(e,t,n){return t.reduce((r,i)=>({...r,...gk(e,i,n)}),{})}function wk(e,t,n){return yk(e,t.keys,n)}function bk(e,t,n){const r=wk(e,t,n);return vt(r)}function $k(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=hl(e[i],t,mn(n));return r}function vk(e,t,n){return $k(e.properties,t,n)}function Dk(e,t,n){const r=vk(e,t,n);return vt(r)}function Ek(e,t){return e.map(n=>Nd(n,t))}function xk(e,t){return e.map(n=>Nd(n,t))}function Ck(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ak(e,t){const n=pn(e,[zt,"$id","required","properties"]),r=Ck(e.properties,t);return mt(r,n)}function Fk(e){const t=e.reduce((n,r)=>r1(r)?[...n,Ye(r)]:n,[]);return Dt(t)}function Nd(e,t){return Nn(e)?ci(Ek(e.allOf,t)):ht(e)?Dt(xk(e.anyOf,t)):Qn(e)?Ak(e,t):mt({})}function hl(e,t,n){const r=en(t)?Fk(t):t,i=Rt(t)?ai(t):t,o=Jt(e),s=Jt(t);return wn(e)?Dk(e,i,n):Bi(t)?Nk(e,t,n):o&&s?it("Pick",[e,r],n):!o&&s?it("Pick",[e,r],n):o&&!s?it("Pick",[e,r],n):M({...Nd(e,i),...n})}function kk(e,t,n){return{[t]:hl(e,[t],mn(n))}}function Sk(e,t,n){return t.reduce((r,i)=>({...r,...kk(e,i,n)}),{})}function Ik(e,t,n){return Sk(e,t.keys,n)}function Nk(e,t,n){const r=Ik(e,t,n);return vt(r)}function Tk(e,t){return it("Partial",[it(e,t)])}function Mk(e){return it("Partial",[Go(e)])}function Pk(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=li(e[n]);return t}function Ok(e){const t=pn(e,[zt,"$id","required","properties"]),n=Pk(e.properties);return mt(n,t)}function v0(e){return e.map(t=>K1(t))}function K1(e){return _o(e)?Tk(e.target,e.parameters):Jt(e)?Mk(e.$ref):Nn(e)?ci(v0(e.allOf)):ht(e)?Dt(v0(e.anyOf)):Qn(e)?Ok(e):Hu(e)||aa(e)||qo(e)||Oi(e)||td(e)||zo(e)||la(e)||nd(e)||ca(e)?e:mt({})}function Td(e,t){return wn(e)?Lk(e,t):M({...K1(e),...t})}function Bk(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Td(e[r],mn(t));return n}function Rk(e,t){return Bk(e.properties,t)}function Lk(e,t){const n=Rk(e,t);return vt(n)}function Uk(e,t){return it("Required",[it(e,t)])}function jk(e){return it("Required",[Go(e)])}function _k(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=pn(e[n],[Nr]);return t}function Vk(e){const t=pn(e,[zt,"$id","required","properties"]),n=_k(e.properties);return mt(n,t)}function D0(e){return e.map(t=>Z1(t))}function Z1(e){return _o(e)?Uk(e.target,e.parameters):Jt(e)?jk(e.$ref):Nn(e)?ci(D0(e.allOf)):ht(e)?Dt(D0(e.anyOf)):Qn(e)?Vk(e):Hu(e)||aa(e)||qo(e)||Oi(e)||td(e)||zo(e)||la(e)||nd(e)||ca(e)?e:mt({})}function Md(e,t){return wn(e)?zk(e,t):M({...Z1(e),...t})}function Wk(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Md(e[r],t);return n}function qk(e,t){return Wk(e.properties,t)}function zk(e,t){const n=qk(e,t);return vt(n)}function Kk(e,t){return t.map(n=>Jt(n)?Pd(e,n.$ref):gn(e,n))}function Pd(e,t){return t in e?Jt(e[t])?Pd(e,e[t].$ref):gn(e,e[t]):Te()}function Zk(e){return ll(e[0])}function Gk(e){return ul(e[0],e[1])}function Yk(e){return vd(e[0])}function Jk(e){return Td(e[0])}function Hk(e){return ml(e[0],e[1])}function Xk(e){return hl(e[0],e[1])}function Qk(e){return Md(e[0])}function e4(e,t,n){const r=Kk(e,n);return t==="Awaited"?Zk(r):t==="Index"?Gk(r):t==="KeyOf"?Yk(r):t==="Partial"?Jk(r):t==="Omit"?Hk(r):t==="Pick"?Xk(r):t==="Required"?Qk(r):Te()}function t4(e,t){return md(gn(e,t))}function n4(e,t){return hd(gn(e,t))}function r4(e,t,n){return pd(pa(e,t),gn(e,n))}function i4(e,t,n){return da(pa(e,t),gn(e,n))}function o4(e,t){return ci(pa(e,t))}function s4(e,t){return $d(gn(e,t))}function a4(e,t){return mt(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:gn(e,t[r])}),{}))}function u4(e,t){const[n,r]=[gn(e,W1(t)),Sd(t)],i=Hf(t);return i.patternProperties[r]=n,i}function l4(e,t){return Jt(t)?{...Pd(e,t.$ref),[zt]:t[zt]}:t}function c4(e,t){return Zo(pa(e,t))}function f4(e,t){return Dt(pa(e,t))}function pa(e,t){return t.map(n=>gn(e,n))}function gn(e,t){return ii(t)?M(gn(e,pn(t,[Nr])),t):ed(t)?M(gn(e,pn(t,[sa])),t):$e(t)?M(l4(e,t),t):jo(t)?M(t4(e,t.items),t):Ju(t)?M(n4(e,t.items),t):_o(t)?M(e4(e,t.target,t.parameters)):Vo(t)?M(r4(e,t.parameters,t.returns),t):Wo(t)?M(i4(e,t.parameters,t.returns),t):Nn(t)?M(o4(e,t.allOf),t):Xu(t)?M(s4(e,t.items),t):Qn(t)?M(a4(e,t.properties),t):el(t)?M(u4(e,t)):Li(t)?M(c4(e,t.items||[]),t):ht(t)?M(f4(e,t.anyOf),t):t}function d4(e,t){return t in e?gn(e,e[t]):Te()}function m4(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:d4(e,n)}),{})}class h4{constructor(t){const n=m4(t),r=this.WithIdentifiers(n);this.$defs=r}Import(t,n){const r={...this.$defs,[t]:M(this.$defs[t],n)};return M({[T]:"Import",$defs:r,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:{...t[r],$id:r}}),{})}}function p4(e){return new h4(e)}function g4(e,t){return M({[T]:"Not",not:e},t)}function y4(e,t){return Wo(e)?Zo(e.parameters,t):Te()}let w4=0;function b4(e,t={}){Ze(t.$id)&&(t.$id=`T${w4++}`);const n=Hf(e({[T]:"This",$ref:`${t.$id}`}));return n.$id=t.$id,M({[Yu]:"Recursive",...n},t)}function $4(e,t){const n=We(e)?new globalThis.RegExp(e):e;return M({[T]:"RegExp",type:"RegExp",source:n.source,flags:n.flags},t)}function v4(e){return Nn(e)?e.allOf:ht(e)?e.anyOf:Li(e)?e.items??[]:[]}function D4(e){return v4(e)}function E4(e,t){return Wo(e)?M(e.returns,t):Te(t)}class x4{constructor(t){this.schema=t}Decode(t){return new C4(this.schema,t)}}class C4{constructor(t,n){this.schema=t,this.decode=n}EncodeTransform(t,n){const o={Encode:s=>n[zt].Encode(t(s)),Decode:s=>this.decode(n[zt].Decode(s))};return{...n,[zt]:o}}EncodeSchema(t,n){const r={Decode:this.decode,Encode:t};return{...n,[zt]:r}}Encode(t){return $e(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function A4(e){return new x4(e)}function F4(e={}){return M({[T]:e[T]??"Unsafe"},e)}function k4(e){return M({[T]:"Void",type:"void"},e)}const S4=Object.freeze(Object.defineProperty({__proto__:null,Any:Vs,Argument:Ax,Array:md,AsyncIterator:hd,Awaited:ll,BigInt:wd,Boolean:w1,Capitalize:rk,Composite:aA,Const:cA,Constructor:pd,ConstructorParameters:fA,Date:S1,Enum:dA,Exclude:Ad,Extends:Cd,Extract:Fd,Function:da,Index:ul,InstanceType:$F,Instantiate:KF,Integer:ZF,Intersect:ci,Iterator:$d,KeyOf:vd,Literal:Ye,Lowercase:ik,Mapped:SC,Module:p4,Never:Te,Not:g4,Null:I1,Number:Vi,Object:mt,Omit:ml,Optional:li,Parameters:y4,Partial:Td,Pick:hl,Promise:E1,Readonly:ui,ReadonlyOptional:_1,Record:V1,Recursive:b4,Ref:Go,RegExp:$4,Required:Md,Rest:D4,ReturnType:E4,String:Ti,Symbol:N1,TemplateLiteral:$1,Transform:A4,Tuple:Zo,Uint8Array:M1,Uncapitalize:ok,Undefined:T1,Union:Dt,Unknown:cl,Unsafe:F4,Uppercase:sk,Void:k4},Symbol.toStringTag,{value:"Module"})),Fe=S4;function G1(e){switch(e.errorType){case $.ArrayContains:return"Expected array to contain at least one matching value";case $.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case $.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case $.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case $.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case $.ArrayUniqueItems:return"Expected array elements to be unique";case $.Array:return"Expected array";case $.AsyncIterator:return"Expected AsyncIterator";case $.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case $.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case $.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case $.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case $.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case $.BigInt:return"Expected bigint";case $.Boolean:return"Expected boolean";case $.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case $.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case $.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case $.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case $.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case $.Date:return"Expected Date";case $.Function:return"Expected function";case $.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case $.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case $.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case $.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case $.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case $.Integer:return"Expected integer";case $.IntersectUnevaluatedProperties:return"Unexpected property";case $.Intersect:return"Expected all values to match";case $.Iterator:return"Expected Iterator";case $.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case $.Never:return"Never";case $.Not:return"Value should not match";case $.Null:return"Expected null";case $.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case $.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case $.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case $.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case $.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case $.Number:return"Expected number";case $.Object:return"Expected object";case $.ObjectAdditionalProperties:return"Unexpected property";case $.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case $.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case $.ObjectRequiredProperty:return"Expected required property";case $.Promise:return"Expected Promise";case $.RegExp:return"Expected string to match regular expression";case $.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case $.StringFormat:return`Expected string to match '${e.schema.format}' format`;case $.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case $.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case $.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case $.String:return"Expected string";case $.Symbol:return"Expected symbol";case $.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case $.Tuple:return"Expected tuple";case $.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case $.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case $.Uint8Array:return"Expected Uint8Array";case $.Undefined:return"Expected undefined";case $.Union:return"Expected union value";case $.Void:return"Expected void";case $.Kind:return`Expected kind '${e.schema[T]}'`;default:return"Unknown error type"}}let Y1=G1;function I4(e){Y1=e}function N4(){return Y1}class T4 extends $t{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function M4(e,t){const n=t.find(r=>r.$id===e.$ref);if(n===void 0)throw new T4(e);return Mn(n,t)}function pl(e,t){return!ln(e.$id)||t.some(n=>n.$id===e.$id)||t.push(e),t}function Mn(e,t){return e[T]==="This"||e[T]==="Ref"?M4(e,t):e}class P4 extends $t{constructor(t){super("Unable to hash value"),this.value=t}}var yn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(yn||(yn={}));let io=BigInt("14695981039346656037");const[O4,B4]=[BigInt("1099511628211"),BigInt("18446744073709551616")],R4=Array.from({length:256}).map((e,t)=>BigInt(t)),J1=new Float64Array(1),H1=new DataView(J1.buffer),X1=new Uint8Array(J1.buffer);function*L4(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function U4(e){kt(yn.Array);for(const t of e)Io(t)}function j4(e){kt(yn.Boolean),kt(e?1:0)}function _4(e){kt(yn.BigInt),H1.setBigInt64(0,e);for(const t of X1)kt(t)}function V4(e){kt(yn.Date),Io(e.getTime())}function W4(e){kt(yn.Null)}function q4(e){kt(yn.Number),H1.setFloat64(0,e);for(const t of X1)kt(t)}function z4(e){kt(yn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Io(t),Io(e[t])}function K4(e){kt(yn.String);for(let t=0;t<e.length;t++)for(const n of L4(e.charCodeAt(t)))kt(n)}function Z4(e){kt(yn.Symbol),Io(e.description)}function G4(e){kt(yn.Uint8Array);for(let t=0;t<e.length;t++)kt(e[t])}function Y4(e){return kt(yn.Undefined)}function Io(e){if(hn(e))return U4(e);if(Zu(e))return j4(e);if(br(e))return _4(e);if(Xf(e))return V4(e);if(Ku(e))return W4();if(Q(e))return q4(e);if(ur(e))return z4(e);if(ln(e))return K4(e);if(Gu(e))return Z4(e);if(Qf(e))return G4(e);if(ri(e))return Y4();throw new P4(e)}function kt(e){io=io^R4[e],io=io*O4%B4}function Od(e){return io=BigInt("14695981039346656037"),Io(e),io}class J4 extends $t{constructor(t){super("Unknown type"),this.schema=t}}function H4(e){return e[T]==="Any"||e[T]==="Unknown"}function re(e){return e!==void 0}function X4(e,t,n){return!0}function Q4(e,t,n){return!0}function e3(e,t,n){if(!hn(n)||re(e.minItems)&&!(n.length>=e.minItems)||re(e.maxItems)&&!(n.length<=e.maxItems)||!n.every(o=>ct(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of n){const a=Od(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(re(e.contains)||Q(e.minContains)||Q(e.maxContains)))return!0;const r=re(e.contains)?e.contains:Te(),i=n.reduce((o,s)=>ct(r,t,s)?o+1:o,0);return!(i===0||Q(e.minContains)&&i<e.minContains||Q(e.maxContains)&&i>e.maxContains)}function t3(e,t,n){return Gy(n)}function n3(e,t,n){return!(!br(n)||re(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||re(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||re(e.maximum)&&!(n<=e.maximum)||re(e.minimum)&&!(n>=e.minimum)||re(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function r3(e,t,n){return Zu(n)}function i3(e,t,n){return ct(e.returns,t,n.prototype)}function o3(e,t,n){return!(!Xf(n)||re(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||re(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||re(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||re(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||re(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function s3(e,t,n){return Qy(n)}function a3(e,t,n){const r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return ct(i,[...t,...r],n)}function u3(e,t,n){return!(!Xy(n)||re(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||re(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||re(e.maximum)&&!(n<=e.maximum)||re(e.minimum)&&!(n>=e.minimum)||re(e.multipleOf)&&n%e.multipleOf!==0)}function l3(e,t,n){const r=e.allOf.every(i=>ct(i,t,n));if(e.unevaluatedProperties===!1){const i=new RegExp(So(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s));return r&&o}else if(Rt(e.unevaluatedProperties)){const i=new RegExp(So(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s)||ct(e.unevaluatedProperties,t,n[s]));return r&&o}else return r}function c3(e,t,n){return Yy(n)}function f3(e,t,n){return n===e.const}function d3(e,t,n){return!1}function m3(e,t,n){return!ct(e.not,t,n)}function h3(e,t,n){return Ku(n)}function p3(e,t,n){return!(!_e.IsNumberLike(n)||re(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||re(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||re(e.minimum)&&!(n>=e.minimum)||re(e.maximum)&&!(n<=e.maximum)||re(e.multipleOf)&&n%e.multipleOf!==0)}function g3(e,t,n){if(!_e.IsObjectLike(n)||re(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||re(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const r=Object.getOwnPropertyNames(e.properties);for(const i of r){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!ct(o,t,n[i])||(Jo(o)||H4(o))&&!(i in n))return!1}else if(_e.IsExactOptionalProperty(n,i)&&!ct(o,t,n[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&i.length===r.length?!0:i.every(o=>r.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(n).every(o=>r.includes(o)||ct(e.additionalProperties,t,n[o])):!0}function y3(e,t,n){return Jy(n)}function w3(e,t,n){if(!_e.IsRecordLike(n)||re(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||re(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const[r,i]=Object.entries(e.patternProperties)[0],o=new RegExp(r),s=Object.entries(n).every(([l,c])=>o.test(l)?ct(i,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(n).every(([l,c])=>o.test(l)?!0:ct(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(l=>o.test(l)):!0;return s&&a&&u}function b3(e,t,n){return ct(Mn(e,t),t,n)}function $3(e,t,n){const r=new RegExp(e.source,e.flags);return re(e.minLength)&&!(n.length>=e.minLength)||re(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function v3(e,t,n){return!ln(n)||re(e.minLength)&&!(n.length>=e.minLength)||re(e.maxLength)&&!(n.length<=e.maxLength)||re(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:re(e.format)?ld(e.format)?cd(e.format)(n):!1:!0}function D3(e,t,n){return Gu(n)}function E3(e,t,n){return ln(n)&&new RegExp(e.pattern).test(n)}function x3(e,t,n){return ct(Mn(e,t),t,n)}function C3(e,t,n){if(!hn(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!ct(e.items[r],t,n[r]))return!1;return!0}function A3(e,t,n){return ri(n)}function F3(e,t,n){return e.anyOf.some(r=>ct(r,t,n))}function k3(e,t,n){return!(!Qf(n)||re(e.maxByteLength)&&!(n.length<=e.maxByteLength)||re(e.minByteLength)&&!(n.length>=e.minByteLength))}function S3(e,t,n){return!0}function I3(e,t,n){return _e.IsVoidLike(n)}function N3(e,t,n){return Ni(e[T])?dd(e[T])(e,n):!1}function ct(e,t,n){const r=re(e.$id)?pl(e,t):t,i=e;switch(i[T]){case"Any":return X4();case"Argument":return Q4();case"Array":return e3(i,r,n);case"AsyncIterator":return t3(i,r,n);case"BigInt":return n3(i,r,n);case"Boolean":return r3(i,r,n);case"Constructor":return i3(i,r,n);case"Date":return o3(i,r,n);case"Function":return s3(i,r,n);case"Import":return a3(i,r,n);case"Integer":return u3(i,r,n);case"Intersect":return l3(i,r,n);case"Iterator":return c3(i,r,n);case"Literal":return f3(i,r,n);case"Never":return d3();case"Not":return m3(i,r,n);case"Null":return h3(i,r,n);case"Number":return p3(i,r,n);case"Object":return g3(i,r,n);case"Promise":return y3(i,r,n);case"Record":return w3(i,r,n);case"Ref":return b3(i,r,n);case"RegExp":return $3(i,r,n);case"String":return v3(i,r,n);case"Symbol":return D3(i,r,n);case"TemplateLiteral":return E3(i,r,n);case"This":return x3(i,r,n);case"Tuple":return C3(i,r,n);case"Undefined":return A3(i,r,n);case"Union":return F3(i,r,n);case"Uint8Array":return k3(i,r,n);case"Unknown":return S3();case"Void":return I3(i,r,n);default:if(!Ni(i[T]))throw new J4(i);return N3(i,r,n)}}function Eu(...e){return e.length===3?ct(e[0],e[1],e[2]):ct(e[0],[],e[1])}var $;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})($||($={}));class T3 extends $t{constructor(t){super("Unknown type"),this.schema=t}}function gr(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function ne(e){return e!==void 0}class Q1{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function P(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:N4()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*M3(e,t,n,r){}function*P3(e,t,n,r){}function*O3(e,t,n,r){if(!hn(r))return yield P($.Array,e,n,r);ne(e.minItems)&&!(r.length>=e.minItems)&&(yield P($.ArrayMinItems,e,n,r)),ne(e.maxItems)&&!(r.length<=e.maxItems)&&(yield P($.ArrayMaxItems,e,n,r));for(let s=0;s<r.length;s++)yield*ft(e.items,t,`${n}/${s}`,r[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of r){const u=Od(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield P($.ArrayUniqueItems,e,n,r)),!(ne(e.contains)||ne(e.minContains)||ne(e.maxContains)))return;const i=ne(e.contains)?e.contains:Te(),o=r.reduce((s,a,u)=>ft(i,t,`${n}${u}`,a).next().done===!0?s+1:s,0);o===0&&(yield P($.ArrayContains,e,n,r)),Q(e.minContains)&&o<e.minContains&&(yield P($.ArrayMinContains,e,n,r)),Q(e.maxContains)&&o>e.maxContains&&(yield P($.ArrayMaxContains,e,n,r))}function*B3(e,t,n,r){Gy(r)||(yield P($.AsyncIterator,e,n,r))}function*R3(e,t,n,r){if(!br(r))return yield P($.BigInt,e,n,r);ne(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P($.BigIntExclusiveMaximum,e,n,r)),ne(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P($.BigIntExclusiveMinimum,e,n,r)),ne(e.maximum)&&!(r<=e.maximum)&&(yield P($.BigIntMaximum,e,n,r)),ne(e.minimum)&&!(r>=e.minimum)&&(yield P($.BigIntMinimum,e,n,r)),ne(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield P($.BigIntMultipleOf,e,n,r))}function*L3(e,t,n,r){Zu(r)||(yield P($.Boolean,e,n,r))}function*U3(e,t,n,r){yield*ft(e.returns,t,n,r.prototype)}function*j3(e,t,n,r){if(!Xf(r))return yield P($.Date,e,n,r);ne(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield P($.DateExclusiveMaximumTimestamp,e,n,r)),ne(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield P($.DateExclusiveMinimumTimestamp,e,n,r)),ne(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield P($.DateMaximumTimestamp,e,n,r)),ne(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield P($.DateMinimumTimestamp,e,n,r)),ne(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield P($.DateMultipleOfTimestamp,e,n,r))}function*_3(e,t,n,r){Qy(r)||(yield P($.Function,e,n,r))}function*V3(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*ft(o,[...t,...i],n,r)}function*W3(e,t,n,r){if(!Xy(r))return yield P($.Integer,e,n,r);ne(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P($.IntegerExclusiveMaximum,e,n,r)),ne(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P($.IntegerExclusiveMinimum,e,n,r)),ne(e.maximum)&&!(r<=e.maximum)&&(yield P($.IntegerMaximum,e,n,r)),ne(e.minimum)&&!(r>=e.minimum)&&(yield P($.IntegerMinimum,e,n,r)),ne(e.multipleOf)&&r%e.multipleOf!==0&&(yield P($.IntegerMultipleOf,e,n,r))}function*q3(e,t,n,r){let i=!1;for(const o of e.allOf)for(const s of ft(o,t,n,r))i=!0,yield s;if(i)return yield P($.Intersect,e,n,r);if(e.unevaluatedProperties===!1){const o=new RegExp(So(e));for(const s of Object.getOwnPropertyNames(r))o.test(s)||(yield P($.IntersectUnevaluatedProperties,e,`${n}/${s}`,r))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(So(e));for(const s of Object.getOwnPropertyNames(r))if(!o.test(s)){const a=ft(e.unevaluatedProperties,t,`${n}/${s}`,r[s]).next();a.done||(yield a.value)}}}function*z3(e,t,n,r){Yy(r)||(yield P($.Iterator,e,n,r))}function*K3(e,t,n,r){r!==e.const&&(yield P($.Literal,e,n,r))}function*Z3(e,t,n,r){yield P($.Never,e,n,r)}function*G3(e,t,n,r){ft(e.not,t,n,r).next().done===!0&&(yield P($.Not,e,n,r))}function*Y3(e,t,n,r){Ku(r)||(yield P($.Null,e,n,r))}function*J3(e,t,n,r){if(!_e.IsNumberLike(r))return yield P($.Number,e,n,r);ne(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P($.NumberExclusiveMaximum,e,n,r)),ne(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P($.NumberExclusiveMinimum,e,n,r)),ne(e.maximum)&&!(r<=e.maximum)&&(yield P($.NumberMaximum,e,n,r)),ne(e.minimum)&&!(r>=e.minimum)&&(yield P($.NumberMinimum,e,n,r)),ne(e.multipleOf)&&r%e.multipleOf!==0&&(yield P($.NumberMultipleOf,e,n,r))}function*H3(e,t,n,r){if(!_e.IsObjectLike(r))return yield P($.Object,e,n,r);ne(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P($.ObjectMinProperties,e,n,r)),ne(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P($.ObjectMaxProperties,e,n,r));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(r);for(const a of i)s.includes(a)||(yield P($.ObjectRequiredProperty,e.properties[a],`${n}/${gr(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield P($.ObjectAdditionalProperties,e,`${n}/${gr(a)}`,r[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*ft(e.additionalProperties,t,`${n}/${gr(a)}`,r[a]));for(const a of o){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*ft(u,t,`${n}/${gr(a)}`,r[a]),Jo(e)&&!(a in r)&&(yield P($.ObjectRequiredProperty,u,`${n}/${gr(a)}`,void 0))):_e.IsExactOptionalProperty(r,a)&&(yield*ft(u,t,`${n}/${gr(a)}`,r[a]))}}function*X3(e,t,n,r){Jy(r)||(yield P($.Promise,e,n,r))}function*Q3(e,t,n,r){if(!_e.IsRecordLike(r))return yield P($.Object,e,n,r);ne(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P($.ObjectMinProperties,e,n,r)),ne(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P($.ObjectMaxProperties,e,n,r));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,u]of Object.entries(r))s.test(a)&&(yield*ft(o,t,`${n}/${gr(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(r))s.test(a)||(yield*ft(e.additionalProperties,t,`${n}/${gr(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(r))if(!s.test(a))return yield P($.ObjectAdditionalProperties,e,`${n}/${gr(a)}`,u)}}function*e6(e,t,n,r){yield*ft(Mn(e,t),t,n,r)}function*t6(e,t,n,r){if(!ln(r))return yield P($.String,e,n,r);if(ne(e.minLength)&&!(r.length>=e.minLength)&&(yield P($.StringMinLength,e,n,r)),ne(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P($.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield P($.RegExp,e,n,r)}function*n6(e,t,n,r){if(!ln(r))return yield P($.String,e,n,r);ne(e.minLength)&&!(r.length>=e.minLength)&&(yield P($.StringMinLength,e,n,r)),ne(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P($.StringMaxLength,e,n,r)),ln(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield P($.StringPattern,e,n,r))),ln(e.format)&&(ld(e.format)?cd(e.format)(r)||(yield P($.StringFormat,e,n,r)):yield P($.StringFormatUnknown,e,n,r))}function*r6(e,t,n,r){Gu(r)||(yield P($.Symbol,e,n,r))}function*i6(e,t,n,r){if(!ln(r))return yield P($.String,e,n,r);new RegExp(e.pattern).test(r)||(yield P($.StringPattern,e,n,r))}function*o6(e,t,n,r){yield*ft(Mn(e,t),t,n,r)}function*s6(e,t,n,r){if(!hn(r))return yield P($.Tuple,e,n,r);if(e.items===void 0&&r.length!==0)return yield P($.TupleLength,e,n,r);if(r.length!==e.maxItems)return yield P($.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*ft(e.items[i],t,`${n}/${i}`,r[i])}function*a6(e,t,n,r){ri(r)||(yield P($.Undefined,e,n,r))}function*u6(e,t,n,r){if(Eu(e,t,r))return;const i=e.anyOf.map(o=>new Q1(ft(o,t,n,r)));yield P($.Union,e,n,r,i)}function*l6(e,t,n,r){if(!Qf(r))return yield P($.Uint8Array,e,n,r);ne(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield P($.Uint8ArrayMaxByteLength,e,n,r)),ne(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield P($.Uint8ArrayMinByteLength,e,n,r))}function*c6(e,t,n,r){}function*f6(e,t,n,r){_e.IsVoidLike(r)||(yield P($.Void,e,n,r))}function*d6(e,t,n,r){dd(e[T])(e,r)||(yield P($.Kind,e,n,r))}function*ft(e,t,n,r){const i=ne(e.$id)?[...t,e]:t,o=e;switch(o[T]){case"Any":return yield*M3();case"Argument":return yield*P3();case"Array":return yield*O3(o,i,n,r);case"AsyncIterator":return yield*B3(o,i,n,r);case"BigInt":return yield*R3(o,i,n,r);case"Boolean":return yield*L3(o,i,n,r);case"Constructor":return yield*U3(o,i,n,r);case"Date":return yield*j3(o,i,n,r);case"Function":return yield*_3(o,i,n,r);case"Import":return yield*V3(o,i,n,r);case"Integer":return yield*W3(o,i,n,r);case"Intersect":return yield*q3(o,i,n,r);case"Iterator":return yield*z3(o,i,n,r);case"Literal":return yield*K3(o,i,n,r);case"Never":return yield*Z3(o,i,n,r);case"Not":return yield*G3(o,i,n,r);case"Null":return yield*Y3(o,i,n,r);case"Number":return yield*J3(o,i,n,r);case"Object":return yield*H3(o,i,n,r);case"Promise":return yield*X3(o,i,n,r);case"Record":return yield*Q3(o,i,n,r);case"Ref":return yield*e6(o,i,n,r);case"RegExp":return yield*t6(o,i,n,r);case"String":return yield*n6(o,i,n,r);case"Symbol":return yield*r6(o,i,n,r);case"TemplateLiteral":return yield*i6(o,i,n,r);case"This":return yield*o6(o,i,n,r);case"Tuple":return yield*s6(o,i,n,r);case"Undefined":return yield*a6(o,i,n,r);case"Union":return yield*u6(o,i,n,r);case"Uint8Array":return yield*l6(o,i,n,r);case"Unknown":return yield*c6();case"Void":return yield*f6(o,i,n,r);default:if(!Ni(o[T]))throw new T3(e);return yield*d6(o,i,n,r)}}function m6(...e){const t=e.length===3?ft(e[0],e[1],"",e[2]):ft(e[0],[],"",e[1]);return new Q1(t)}class h6 extends $t{constructor(t,n,r){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class p6 extends $t{constructor(t,n,r,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=n,this.value=r,this.error=i}}function Ae(e,t,n){try{return $e(e)?e[zt].Decode(n):n}catch(r){throw new p6(e,t,n,r)}}function g6(e,t,n,r){return hn(r)?Ae(e,n,r.map((i,o)=>er(e.items,t,`${n}/${o}`,i))):Ae(e,n,r)}function y6(e,t,n,r){if(!ur(r)||e1(r))return Ae(e,n,r);const i=k1(e),o=i.map(c=>c[0]),s={...r};for(const[c,f]of i)c in s&&(s[c]=er(f,t,`${n}/${c}`,s[c]));if(!$e(e.unevaluatedProperties))return Ae(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Ae(u,`${n}/${c}`,l[c]));return Ae(e,n,l)}function w6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=er(o,[...t,...i],n,r);return Ae(e,n,s)}function b6(e,t,n,r){return Ae(e,n,er(e.not,t,n,r))}function $6(e,t,n,r){if(!ur(r))return Ae(e,n,r);const i=Wi(e),o={...r};for(const l of i)Hy(o,l)&&(ri(o[l])&&(!ca(e.properties[l])||_e.IsExactOptionalProperty(o,l))||(o[l]=er(e.properties[l],t,`${n}/${l}`,o[l])));if(!Rt(e.additionalProperties))return Ae(e,n,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,u={...o};for(const l of s)i.includes(l)||(u[l]=Ae(a,`${n}/${l}`,u[l]));return Ae(e,n,u)}function v6(e,t,n,r){if(!ur(r))return Ae(e,n,r);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...r};for(const c of Object.getOwnPropertyNames(r))o.test(c)&&(s[c]=er(e.patternProperties[i],t,`${n}/${c}`,s[c]));if(!Rt(e.additionalProperties))return Ae(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.test(c)||(l[c]=Ae(u,`${n}/${c}`,l[c]));return Ae(e,n,l)}function D6(e,t,n,r){const i=Mn(e,t);return Ae(e,n,er(i,t,n,r))}function E6(e,t,n,r){const i=Mn(e,t);return Ae(e,n,er(i,t,n,r))}function x6(e,t,n,r){return hn(r)&&hn(e.items)?Ae(e,n,e.items.map((i,o)=>er(i,t,`${n}/${o}`,r[o]))):Ae(e,n,r)}function C6(e,t,n,r){for(const i of e.anyOf){if(!Eu(i,t,r))continue;const o=er(i,t,n,r);return Ae(e,n,o)}return Ae(e,n,r)}function er(e,t,n,r){const i=pl(e,t),o=e;switch(e[T]){case"Array":return g6(o,i,n,r);case"Import":return w6(o,i,n,r);case"Intersect":return y6(o,i,n,r);case"Not":return b6(o,i,n,r);case"Object":return $6(o,i,n,r);case"Record":return v6(o,i,n,r);case"Ref":return D6(o,i,n,r);case"Symbol":return Ae(o,n,r);case"This":return E6(o,i,n,r);case"Tuple":return x6(o,i,n,r);case"Union":return C6(o,i,n,r);default:return Ae(o,n,r)}}function A6(e,t,n){return er(e,t,"",n)}class F6 extends $t{constructor(t,n,r){super("The encoded value does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class k6 extends $t{constructor(t,n,r,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=n,this.value=r,this.error=i}}function wt(e,t,n){try{return $e(e)?e[zt].Encode(n):n}catch(r){throw new k6(e,t,n,r)}}function S6(e,t,n,r){const i=wt(e,n,r);return hn(i)?i.map((o,s)=>Xn(e.items,t,`${n}/${s}`,o)):i}function I6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=wt(e,n,r);return Xn(o,[...t,...i],n,s)}function N6(e,t,n,r){const i=wt(e,n,r);if(!ur(r)||e1(r))return i;const o=k1(e),s=o.map(f=>f[0]),a={...i};for(const[f,d]of o)f in a&&(a[f]=Xn(d,t,`${n}/${f}`,a[f]));if(!$e(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const f of u)s.includes(f)||(c[f]=wt(l,`${n}/${f}`,c[f]));return c}function T6(e,t,n,r){return wt(e.not,n,wt(e,n,r))}function M6(e,t,n,r){const i=wt(e,n,r);if(!ur(i))return i;const o=Wi(e),s={...i};for(const c of o)Hy(s,c)&&(ri(s[c])&&(!ca(e.properties[c])||_e.IsExactOptionalProperty(s,c))||(s[c]=Xn(e.properties[c],t,`${n}/${c}`,s[c])));if(!Rt(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=wt(u,`${n}/${c}`,l[c]));return l}function P6(e,t,n,r){const i=wt(e,n,r);if(!ur(r))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const f of Object.getOwnPropertyNames(r))s.test(f)&&(a[f]=Xn(e.patternProperties[o],t,`${n}/${f}`,a[f]));if(!Rt(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const f of u)s.test(f)||(c[f]=wt(l,`${n}/${f}`,c[f]));return c}function O6(e,t,n,r){const i=Mn(e,t),o=Xn(i,t,n,r);return wt(e,n,o)}function B6(e,t,n,r){const i=Mn(e,t),o=Xn(i,t,n,r);return wt(e,n,o)}function R6(e,t,n,r){const i=wt(e,n,r);return hn(e.items)?e.items.map((o,s)=>Xn(o,t,`${n}/${s}`,i[s])):[]}function L6(e,t,n,r){for(const i of e.anyOf){if(!Eu(i,t,r))continue;const o=Xn(i,t,n,r);return wt(e,n,o)}for(const i of e.anyOf){const o=Xn(i,t,n,r);if(Eu(e,t,o))return wt(e,n,o)}return wt(e,n,r)}function Xn(e,t,n,r){const i=pl(e,t),o=e;switch(e[T]){case"Array":return S6(o,i,n,r);case"Import":return I6(o,i,n,r);case"Intersect":return N6(o,i,n,r);case"Not":return T6(o,i,n,r);case"Object":return M6(o,i,n,r);case"Record":return P6(o,i,n,r);case"Ref":return O6(o,i,n,r);case"This":return B6(o,i,n,r);case"Tuple":return R6(o,i,n,r);case"Union":return L6(o,i,n,r);default:return wt(o,n,r)}}function U6(e,t,n){return Xn(e,t,"",n)}function j6(e,t){return $e(e)||ot(e.items,t)}function _6(e,t){return $e(e)||ot(e.items,t)}function V6(e,t){return $e(e)||ot(e.returns,t)||e.parameters.some(n=>ot(n,t))}function W6(e,t){return $e(e)||ot(e.returns,t)||e.parameters.some(n=>ot(n,t))}function q6(e,t){return $e(e)||$e(e.unevaluatedProperties)||e.allOf.some(n=>ot(n,t))}function z6(e,t){const n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),r=e.$defs[e.$ref];return $e(e)||ot(r,[...n,...t])}function K6(e,t){return $e(e)||ot(e.items,t)}function Z6(e,t){return $e(e)||ot(e.not,t)}function G6(e,t){return $e(e)||Object.values(e.properties).some(n=>ot(n,t))||Rt(e.additionalProperties)&&ot(e.additionalProperties,t)}function Y6(e,t){return $e(e)||ot(e.item,t)}function J6(e,t){const n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return $e(e)||ot(r,t)||Rt(e.additionalProperties)&&$e(e.additionalProperties)}function H6(e,t){return $e(e)?!0:ot(Mn(e,t),t)}function X6(e,t){return $e(e)?!0:ot(Mn(e,t),t)}function Q6(e,t){return $e(e)||!ri(e.items)&&e.items.some(n=>ot(n,t))}function e8(e,t){return $e(e)||e.anyOf.some(n=>ot(n,t))}function ot(e,t){const n=pl(e,t),r=e;if(e.$id&&Yc.has(e.$id))return!1;switch(e.$id&&Yc.add(e.$id),e[T]){case"Array":return j6(r,n);case"AsyncIterator":return _6(r,n);case"Constructor":return V6(r,n);case"Function":return W6(r,n);case"Import":return z6(r,n);case"Intersect":return q6(r,n);case"Iterator":return K6(r,n);case"Not":return Z6(r,n);case"Object":return G6(r,n);case"Promise":return Y6(r,n);case"Record":return J6(r,n);case"Ref":return H6(r,n);case"This":return X6(r,n);case"Tuple":return Q6(r,n);case"Union":return e8(r,n);default:return $e(e)}}const Yc=new Set;function t8(e,t){return Yc.clear(),ot(e,t)}class n8{constructor(t,n,r,i){this.schema=t,this.references=n,this.checkFunc=r,this.code=i,this.hasTransform=t8(t,n)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return m6(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new h6(this.schema,t,this.Errors(t).First());return this.hasTransform?A6(this.schema,this.references,t):t}Encode(t){const n=this.hasTransform?U6(this.schema,this.references,t):t;if(!this.checkFunc(n))throw new F6(this.schema,t,this.Errors(t).First());return n}}var $r;(function(e){function t(o){return o===36}e.DollarSign=t;function n(o){return o===95}e.IsUnderscore=n;function r(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=r;function i(o){return o>=48&&o<=57}e.IsNumeric=i})($r||($r={}));var xu;(function(e){function t(o){return o.length===0?!1:$r.IsNumeric(o.charCodeAt(0))}function n(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!($r.IsAlpha(a)||$r.IsNumeric(a)||$r.DollarSign(a)||$r.IsUnderscore(a)))return!1}return!0}function r(o){return o.replace(/'/g,"\\'")}function i(o,s){return n(s)?`${o}.${s}`:`${o}['${r(s)}']`}e.Encode=i})(xu||(xu={}));var Jc;(function(e){function t(n){const r=[];for(let i=0;i<n.length;i++){const o=n.charCodeAt(i);$r.IsNumeric(o)||$r.IsAlpha(o)?r.push(n.charAt(i)):r.push(`_${o}_`)}return r.join("").replace(/__/g,"_")}e.Encode=t})(Jc||(Jc={}));var Hc;(function(e){function t(n){return n.replace(/'/g,"\\'")}e.Escape=t})(Hc||(Hc={}));class r8 extends $t{constructor(t){super("Unknown type"),this.schema=t}}class E0 extends $t{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var $i;(function(e){function t(s,a,u){return _e.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${xu.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function n(s){return _e.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=n;function r(s){return _e.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=r;function i(s){return _e.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return _e.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})($i||($i={}));var Es;(function(e){function t(p){return p[T]==="Any"||p[T]==="Unknown"}function*n(p,B,w){yield"true"}function*r(p,B,w){yield"true"}function*i(p,B,w){yield`Array.isArray(${w})`;const[z,_]=[va("value","any"),va("acc","number")];Q(p.maxItems)&&(yield`${w}.length <= ${p.maxItems}`),Q(p.minItems)&&(yield`${w}.length >= ${p.minItems}`);const V=tn(p.items,B,"value");if(yield`${w}.every((${z}) => ${V})`,Se(p.contains)||Q(p.minContains)||Q(p.maxContains)){const be=Se(p.contains)?p.contains:Te(),Lt=tn(be,B,"value"),lr=Q(p.minContains)?[`(count >= ${p.minContains})`]:[],Rn=Q(p.maxContains)?[`(count <= ${p.maxContains})`]:[],tr=`const count = value.reduce((${_}, ${z}) => ${Lt} ? acc + 1 : acc, 0)`,Da=["(count > 0)",...lr,...Rn].join(" && ");yield`((${z}) => { ${tr}; return ${Da}})(${w})`}p.uniqueItems===!0&&(yield`((${z}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${w})`)}function*o(p,B,w){yield`(typeof value === 'object' && Symbol.asyncIterator in ${w})`}function*s(p,B,w){yield`(typeof ${w} === 'bigint')`,br(p.exclusiveMaximum)&&(yield`${w} < BigInt(${p.exclusiveMaximum})`),br(p.exclusiveMinimum)&&(yield`${w} > BigInt(${p.exclusiveMinimum})`),br(p.maximum)&&(yield`${w} <= BigInt(${p.maximum})`),br(p.minimum)&&(yield`${w} >= BigInt(${p.minimum})`),br(p.multipleOf)&&(yield`(${w} % BigInt(${p.multipleOf})) === 0`)}function*a(p,B,w){yield`(typeof ${w} === 'boolean')`}function*u(p,B,w){yield*$n(p.returns,B,`${w}.prototype`)}function*l(p,B,w){yield`(${w} instanceof Date) && Number.isFinite(${w}.getTime())`,Q(p.exclusiveMaximumTimestamp)&&(yield`${w}.getTime() < ${p.exclusiveMaximumTimestamp}`),Q(p.exclusiveMinimumTimestamp)&&(yield`${w}.getTime() > ${p.exclusiveMinimumTimestamp}`),Q(p.maximumTimestamp)&&(yield`${w}.getTime() <= ${p.maximumTimestamp}`),Q(p.minimumTimestamp)&&(yield`${w}.getTime() >= ${p.minimumTimestamp}`),Q(p.multipleOfTimestamp)&&(yield`(${w}.getTime() % ${p.multipleOfTimestamp}) === 0`)}function*c(p,B,w){yield`(typeof ${w} === 'function')`}function*f(p,B,w){const z=globalThis.Object.getOwnPropertyNames(p.$defs).reduce((_,V)=>[..._,p.$defs[V]],[]);yield*$n(Go(p.$ref),[...B,...z],w)}function*d(p,B,w){yield`Number.isInteger(${w})`,Q(p.exclusiveMaximum)&&(yield`${w} < ${p.exclusiveMaximum}`),Q(p.exclusiveMinimum)&&(yield`${w} > ${p.exclusiveMinimum}`),Q(p.maximum)&&(yield`${w} <= ${p.maximum}`),Q(p.minimum)&&(yield`${w} >= ${p.minimum}`),Q(p.multipleOf)&&(yield`(${w} % ${p.multipleOf}) === 0`)}function*g(p,B,w){const z=p.allOf.map(_=>tn(_,B,w)).join(" && ");if(p.unevaluatedProperties===!1){const _=Or(`${new RegExp(So(p))};`),V=`Object.getOwnPropertyNames(${w}).every(key => ${_}.test(key))`;yield`(${z} && ${V})`}else if(Se(p.unevaluatedProperties)){const _=Or(`${new RegExp(So(p))};`),V=`Object.getOwnPropertyNames(${w}).every(key => ${_}.test(key) || ${tn(p.unevaluatedProperties,B,`${w}[key]`)})`;yield`(${z} && ${V})`}else yield`(${z})`}function*x(p,B,w){yield`(typeof value === 'object' && Symbol.iterator in ${w})`}function*D(p,B,w){typeof p.const=="number"||typeof p.const=="boolean"?yield`(${w} === ${p.const})`:yield`(${w} === '${Hc.Escape(p.const)}')`}function*k(p,B,w){yield"false"}function*A(p,B,w){yield`(!${tn(p.not,B,w)})`}function*I(p,B,w){yield`(${w} === null)`}function*j(p,B,w){yield $i.IsNumberLike(w),Q(p.exclusiveMaximum)&&(yield`${w} < ${p.exclusiveMaximum}`),Q(p.exclusiveMinimum)&&(yield`${w} > ${p.exclusiveMinimum}`),Q(p.maximum)&&(yield`${w} <= ${p.maximum}`),Q(p.minimum)&&(yield`${w} >= ${p.minimum}`),Q(p.multipleOf)&&(yield`(${w} % ${p.multipleOf}) === 0`)}function*q(p,B,w){yield $i.IsObjectLike(w),Q(p.minProperties)&&(yield`Object.getOwnPropertyNames(${w}).length >= ${p.minProperties}`),Q(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${w}).length <= ${p.maxProperties}`);const z=Object.getOwnPropertyNames(p.properties);for(const _ of z){const V=xu.Encode(w,_),be=p.properties[_];if(p.required&&p.required.includes(_))yield*$n(be,B,V),(Jo(be)||t(be))&&(yield`('${_}' in ${w})`);else{const Lt=tn(be,B,V);yield $i.IsExactOptionalProperty(w,_,Lt)}}if(p.additionalProperties===!1)if(p.required&&p.required.length===z.length)yield`Object.getOwnPropertyNames(${w}).length === ${z.length}`;else{const _=`[${z.map(V=>`'${V}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${w}).every(key => ${_}.includes(key))`}if(typeof p.additionalProperties=="object"){const _=tn(p.additionalProperties,B,`${w}[key]`),V=`[${z.map(be=>`'${be}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${w}).every(key => ${V}.includes(key) || ${_}))`}}function*G(p,B,w){yield`${w} instanceof Promise`}function*Re(p,B,w){yield $i.IsRecordLike(w),Q(p.minProperties)&&(yield`Object.getOwnPropertyNames(${w}).length >= ${p.minProperties}`),Q(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${w}).length <= ${p.maxProperties}`);const[z,_]=Object.entries(p.patternProperties)[0],V=Or(`${new RegExp(z)}`),be=tn(_,B,"value"),Lt=Se(p.additionalProperties)?tn(p.additionalProperties,B,w):p.additionalProperties===!1?"false":"true",lr=`(${V}.test(key) ? ${be} : ${Lt})`;yield`(Object.entries(${w}).every(([key, value]) => ${lr}))`}function*Et(p,B,w){const z=Mn(p,B);if(qe.functions.has(p.$ref))return yield`${Ki(p.$ref)}(${w})`;yield*$n(z,B,w)}function*et(p,B,w){const z=Or(`${new RegExp(p.source,p.flags)};`);yield`(typeof ${w} === 'string')`,Q(p.maxLength)&&(yield`${w}.length <= ${p.maxLength}`),Q(p.minLength)&&(yield`${w}.length >= ${p.minLength}`),yield`${z}.test(${w})`}function*It(p,B,w){yield`(typeof ${w} === 'string')`,Q(p.maxLength)&&(yield`${w}.length <= ${p.maxLength}`),Q(p.minLength)&&(yield`${w}.length >= ${p.minLength}`),p.pattern!==void 0&&(yield`${Or(`${new RegExp(p.pattern)};`)}.test(${w})`),p.format!==void 0&&(yield`format('${p.format}', ${w})`)}function*bn(p,B,w){yield`(typeof ${w} === 'symbol')`}function*On(p,B,w){yield`(typeof ${w} === 'string')`,yield`${Or(`${new RegExp(p.pattern)};`)}.test(${w})`}function*zi(p,B,w){yield`${Ki(p.$ref)}(${w})`}function*bl(p,B,w){if(yield`Array.isArray(${w})`,p.items===void 0)return yield`${w}.length === 0`;yield`(${w}.length === ${p.maxItems})`;for(let z=0;z<p.items.length;z++)yield`${tn(p.items[z],B,`${w}[${z}]`)}`}function*Qo(p,B,w){yield`${w} === undefined`}function*wa(p,B,w){yield`(${p.anyOf.map(_=>tn(_,B,w)).join(" || ")})`}function*Bn(p,B,w){yield`${w} instanceof Uint8Array`,Q(p.maxByteLength)&&(yield`(${w}.length <= ${p.maxByteLength})`),Q(p.minByteLength)&&(yield`(${w}.length >= ${p.minByteLength})`)}function*ba(p,B,w){yield"true"}function*$l(p,B,w){yield $i.IsVoidLike(w)}function*$a(p,B,w){const z=qe.instances.size;qe.instances.set(z,p),yield`kind('${p[T]}', ${z}, ${w})`}function*$n(p,B,w,z=!0){const _=ln(p.$id)?[...B,p]:B,V=p;if(z&&ln(p.$id)){const be=Ki(p.$id);if(qe.functions.has(be))return yield`${be}(${w})`;{qe.functions.set(be,"<deferred>");const Lt=fi(be,p,B,"value",!1);return qe.functions.set(be,Lt),yield`${be}(${w})`}}switch(V[T]){case"Any":return yield*n();case"Argument":return yield*r();case"Array":return yield*i(V,_,w);case"AsyncIterator":return yield*o(V,_,w);case"BigInt":return yield*s(V,_,w);case"Boolean":return yield*a(V,_,w);case"Constructor":return yield*u(V,_,w);case"Date":return yield*l(V,_,w);case"Function":return yield*c(V,_,w);case"Import":return yield*f(V,_,w);case"Integer":return yield*d(V,_,w);case"Intersect":return yield*g(V,_,w);case"Iterator":return yield*x(V,_,w);case"Literal":return yield*D(V,_,w);case"Never":return yield*k();case"Not":return yield*A(V,_,w);case"Null":return yield*I(V,_,w);case"Number":return yield*j(V,_,w);case"Object":return yield*q(V,_,w);case"Promise":return yield*G(V,_,w);case"Record":return yield*Re(V,_,w);case"Ref":return yield*Et(V,_,w);case"RegExp":return yield*et(V,_,w);case"String":return yield*It(V,_,w);case"Symbol":return yield*bn(V,_,w);case"TemplateLiteral":return yield*On(V,_,w);case"This":return yield*zi(V,_,w);case"Tuple":return yield*bl(V,_,w);case"Undefined":return yield*Qo(V,_,w);case"Union":return yield*wa(V,_,w);case"Uint8Array":return yield*Bn(V,_,w);case"Unknown":return yield*ba();case"Void":return yield*$l(V,_,w);default:if(!Ni(V[T]))throw new r8(p);return yield*$a(V,_,w)}}const qe={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function tn(p,B,w,z=!0){return`(${[...$n(p,B,w,z)].join(" && ")})`}function Ki(p){return`check_${Jc.Encode(p)}`}function Or(p){const B=`local_${qe.variables.size}`;return qe.variables.set(B,`const ${B} = ${p}`),B}function fi(p,B,w,z,_=!0){const[V,be]=[`
`,tr=>"".padStart(tr," ")],Lt=va("value","any"),lr=Qd("boolean"),Rn=[...$n(B,w,z,_)].map(tr=>`${be(4)}${tr}`).join(` &&${V}`);return`function ${p}(${Lt})${lr} {${V}${be(2)}return (${V}${Rn}${V}${be(2)})
}`}function va(p,B){const w=qe.language==="typescript"?`: ${B}`:"";return`${p}${w}`}function Qd(p){return qe.language==="typescript"?`: ${p}`:""}function Jw(p,B,w){const z=fi("check",p,B,"value"),_=va("value","any"),V=Qd("boolean"),be=[...qe.functions.values()],Lt=[...qe.variables.values()],lr=ln(p.$id)?`return function check(${_})${V} {
  return ${Ki(p.$id)}(value)
}`:`return ${z}`;return[...Lt,...be,lr].join(`
`)}function em(...p){const B={language:"javascript"},[w,z,_]=p.length===2&&hn(p[1])?[p[0],p[1],B]:p.length===2&&!hn(p[1])?[p[0],[],p[1]]:p.length===3?[p[0],p[1],p[2]]:p.length===1?[p[0],[],B]:[null,[],B];if(qe.language=_.language,qe.variables.clear(),qe.functions.clear(),qe.instances.clear(),!Se(w))throw new E0(w);for(const V of z)if(!Se(V))throw new E0(V);return Jw(w,z)}e.Code=em;function Hw(p,B=[]){const w=em(p,B,{language:"javascript"}),z=globalThis.Function("kind","format","hash",w),_=new Map(qe.instances);function V(Rn,tr,Da){if(!Ni(Rn)||!_.has(tr))return!1;const Xw=dd(Rn),Qw=_.get(tr);return Xw(Qw,Da)}function be(Rn,tr){return ld(Rn)?cd(Rn)(tr):!1}function Lt(Rn){return Od(Rn)}const lr=z(V,be,Lt);return new n8(p,B,lr,w)}e.Compile=Hw})(Es||(Es={}));const Xc={};function ew(e,t){e in Xc||(Xc[e]=t)}let x0=!1;function i8(){x0||(x0=!0,I4(e=>(Xc[e.schema[T]]||G1)(e)))}const Qc=Symbol.for("object-shape-tester.shape-identifier");function Ve(e){if(i8(),Bd(e))return e;const t=ef(e),n=vi(t,!1),r=vi(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:Es.Compile(t),$_compiledSchemaNoExtraKeys:Es.Compile(n),$_compiledSchemaExtraKeys:Es.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[Qc]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Bd(e){return S.hasKey(e,Qc)&&!!e[Qc]}function Rd(e){return S.hasKey(e,T)}function vi(e,t){const n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(r=>vi(r,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(r=>vi(r,t))),Rd(e.items)?n.items=vi(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(r=>vi(r,t))),S.isObject(e.properties)){const r={};Object.entries(e.properties).forEach(([i,o])=>{r[i]=vi(o,t)}),n.properties=r}return n.additionalProperties=t,n}function ef(e){if(Rd(e))return e;if(Bd(e))return e.$_schema;if(S.isFunction(e))return Fe.Function([],Fe.Any(),{default:e});if(S.isObject(e)){const t={},n={};return Object.entries(e).forEach(([r,i])=>{const o=ef(i);n[r]=o,t[r]=o.default}),Fe.Object(n,{default:t})}else{if(S.isArray(e))return Fe.Array(Fe.Union(e.map(t=>ef(t))),{default:[]});if(S.isPrimitive(e)){if(S.isString(e))return Fe.String({default:e});if(S.isNumber(e))return Fe.Number({default:e});if(S.isBoolean(e))return Fe.Boolean({default:e});if(S.isSymbol(e))return Fe.Symbol({default:e});if(S.isNull(e))return Fe.Null({default:null});if(S.isUndefined(e))return Fe.Undefined({default:void 0});if(S.isBigInt(e))return Fe.BigInt({default:e});or.tsType(e).equals(),or.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${h(e)}`)}}function tf(e,t){const n=_n(e);return Ve(Fe.Union(n.map(r=>Fe.Literal(r)),{default:n[0]}))}function o8(e){return S.isSymbol(e)?s8(e):Ve(Fe.Const(e,{default:e}))}const ja="ExactSymbol";function s8(e){return Ni(ja)||h1(ja,(t,n)=>n===t.symbol),ew(ja,({schema:t})=>`Expected symbol ${t.symbol?.description?Qv({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Ve(Fe.Unsafe({[T]:ja,symbol:e,default:e}))}function pt(e,t={}){_e.ExactOptionalPropertyTypes=!0;const n=Ve(e).$_schema,r=t.alsoUndefined?Fe.Union([Fe.Undefined(),n]):n;return Ve(Fe.Optional(r))}function Tt(...e){let t;const n=e.map((r,i)=>{const o=Ve(r);return i||(t=o.default),o.$_schema});return Ve(Fe.Union(n,{default:t}))}class a8 extends TypeError{value;errors;failureMessage;name="ShapeMismatchError";constructor(t,n,r){const i=n.map(s=>tw(s)).join(`
`),o=Nu(r,`Shape mismatch:
${Cf(i,1)}`);super(o),this.value=t,this.errors=n,this.failureMessage=r}}function u8(e){return e.errors.flatMap(t=>Array.from(t))}function tw(e,t=0){const n=u8(e).map(i=>tw(i,t+1)),r=[e.path,e.message].filter(S.isTruthy).join(": ")+(n.length?":":"");return[Cf(r,t),...n].join(`
`)}function xi(e,t,n={}){return nw(t,n).Check(e)}function l8(e,t,n={},r){if(xi(e,t,n))return;const i=Array.from(nw(t,n).Errors(e));if(i.length)throw new a8(e,i,r)}function nw(e,t){return e=c8(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function c8(e){return Ve(e)}const eu="recordShape";function Ld({keys:e,values:t,partial:n,additionalProperties:r}){f8();const i=rw(e),o=Ve(t);return Fe.Unsafe({[T]:eu,keysShape:i,valuesShape:o,isPartial:!!n,additionalProperties:!!r,default:d8({isPartial:!!n,keysShape:i,valuesShape:o})})}function f8(){Ni(eu)||h1(eu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const n=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:xi(i,e.keysShape),a=xi(o,e.valuesShape);return s&&a}),r=e.isPartial?!0:!C0(e.keysShape,t).length;return n&&r}),ew(eu,e=>{const n=e.schema,r=e.value;if(typeof r!="object"||!r||Array.isArray(r))return"Expected an object";const i=Pi(Object.entries(r),([u])=>u,(u,[l,c])=>!xi(l,n.keysShape)||!xi(c,n.valuesShape)),o=C0(n.keysShape,r),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(S.isTruthy).join(`
`)})}function C0(e,t){const n=Cu(e).filter(r=>S.isPropertyKey(r));return n.length?n.filter(r=>!S.hasKey(t,r)):[]}function d8({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{const r=Cu(e),i=t.default;return Object.fromEntries(r.map(o=>[o,i]))}}function rw(e){return Bd(e)?e:Rd(e)?Ve(e):S.isObject(e)?tf(e):S.isArray(e)&&S.isLengthAtLeast(e,1)?Tt(...e.map(t=>o8(t))):S.isPropertyKey(e)?Ve(e):Ve(Fe.Undefined())}function Cu(e){const t=e.$_schema,n=t[T].toLowerCase();return["const","literal"].includes(n)?[t.const]:n==="union"?ep(t.anyOf.flatMap(r=>Cu(Ve(r)))):["undefined","number","string","symbol"].includes(n)?[]:Cu(rw(e.default))}function m8(e){return Ve(Fe.Unknown({default:e}))}const h8=Ve({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:m8()});function nc(e){return xi(e,h8,{allowExtraKeys:!0})}class iw extends BE{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||RE}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:p8}=kD,A0=()=>document.createComment(""),cs=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=r.insertBefore(A0(),i),s=r.insertBefore(A0(),i);n=new p8(o,s,e,e.options)}else{const o=n._$AB.nextSibling,s=n._$AM,a=s!==e;if(a){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==s._$AU&&n._$AP(u)}if(o!==i||a){let u=n._$AA;for(;u!==o;){const l=u.nextSibling;r.insertBefore(u,i),u=l}}}return n},wi=(e,t,n=e)=>(e._$AI(t,n),e),g8={},y8=(e,t=g8)=>e._$AH=t,w8=e=>e._$AH,rc=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ud={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Mr=e=>(...t)=>({_$litDirective$:e,values:t});class Pr{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b8={attribute:!0,type:String,converter:mu,reflect:!1,hasChanged:Lf},$8=(e=b8,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){const{name:s}=n;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e)}}throw Error("Unsupported decorator location: "+r)};function v8(e){return(t,n)=>typeof n=="object"?$8(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=Mr(class extends Pr{constructor(e){if(super(e),e.type!==Ud.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return fn}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=e=>e??se;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D8(e,t,n){return e?t(e):n?.(e)}class E8 extends vs{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function x8(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const u=o[a.index];u&&u.splice(0,0,...a.values)}),o.flat()}function nf(e){return S.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function jd(e){return S.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function ow(e){return Pi(e,t=>{if(nf(t))return t.definition;if(jd(t))return t.tagInterpolationKey||t},S.isTruthy)}const sw=new WeakMap;function C8(e,t){const n=ow(t);return aw(sw,[e,...n]).value?.template}function A8(e,t,n){const r=ow(t);return lw(sw,[e,...r],n)}function aw(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=uw(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?aw(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function uw(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function lw(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=uw(e,t,r);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),lw(u,t,n,r+1)}function cw(e,t,n){const r=C8(e,t),i=r??n();if(!r){const a=A8(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=x8(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function fw(e,t,n,r){const i=[],o=[],s=[],a=[];return e.forEach((l,c)=>{const f=i.length-1,d=i[f],g=c-1,x=t[g];r&&r(l);let D,k=[];if(typeof d=="string"&&(D=n(d,l,x),D)){i[f]=[d,D.replacement].join(""),s.push(g);const I=D.getExtraValues;k=I?I(x):[],k.length&&I?(i[f]+=" ",k.forEach((j,q)=>{q&&i.push(" ")}),a.push(j=>{const q=j[g],G=I(q);return{index:g,values:G}}),i.push(l)):i[f]+=l}D||i.push(l);const A=e.raw[c];D?(o[f]=[o[f],D.replacement,A].join(""),k.length&&k.forEach(()=>{o.push("")})):o.push(A)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=a.flatMap(f=>f(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function F8(...[e,t,n]){if(jd(n))return{replacement:n.tagName,getExtraValues:void 0}}function k8(e,t){return fw(e,t,F8)}function C(e,...t){const n=cw(e,t,()=>k8(e,t));return Ha(n.strings,...n.values)}const S8={allowPolymorphicState:!1,errorHandler:void 0};function dw(e,t){const n=e.instanceState;ke(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&ke(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}class I8 extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function _d(){return e=>class extends I8{static type=e;_type=e;constructor(t){super(e,t)}}}function dt(){return _d()}function N8(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=_d()([e,r].join("-"));return n[r]=i,n},{}):{}}function T8(e){return e?cn(e,t=>t):{}}function mw(e,t){t in e||v8()(e,t)}function M8(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function F0(e,t){const n=e;function r(s){t?M8(s,e,e.tagName):mw(e,s)}function i(s,a){return r(a),n[a]}return new Proxy({},{get:i,set(s,a,u){r(a);const l=n[a];function c(d){s[a]=d,n[a]=d}const f=e.observablePropertyListenerMap[a];if(l!==u&&nc(l)&&f&&l.removeListener(f),nc(u))if(f)u.listen(!1,f);else{let d=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=d,u.listen(!1,d)}else nc(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function k0(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid element string name '${r}' in '${e}': element string names must begin with the element's tag name.`)})}function S0(e,t,n){return n?Ev(n,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function P8({hostClassNames:e,cssVars:t}){return{hostClasses:cn(e,(n,r)=>({name:Ge(r),selector:Ge(`:host(.${r})`)})),cssVars:t}}function O8({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&ke(t).forEach(o=>{const s=t[o],a=n[o];typeof s=="function"&&(s({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function B8({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function o(a){ke(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:n,slotNames:r,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Vd(...e){return or.isEmpty(e),t=>{const n=t;if(!S.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return R8({...n,options:{...n.options}})}}function R8(e){if(!S.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!S.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...S8,...e.options},n=N8(e.tagName,e.events),r=T8(e.hostClasses);e.hostClasses&&k0(e.tagName,e.hostClasses),e.cssVars&&k0(e.tagName,e.cssVars);const i=e.cssVars?Ir(e.cssVars):{},o=S0(e.tagName,"slot",e.slotNames),s=S0(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(P8({hostClassNames:r,cssVars:i})):e.styles||C``,u=e.render;function l(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:f}}const c=class extends E8{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return B8({element:this,eventsMap:n,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=n;static render=u;static hostClasses=r;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const g=e.state(f);if(g instanceof Promise)throw new TypeError("init cannot be asynchronous");ke(g).forEach(x=>{mw(this,x),this.instanceState[x]=g[x]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=u(f);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return O8({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},d}catch(f){const d=gf(f,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,t.errorHandler?.(d),Yt(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{S.hasKey(f,"destroy")&&S.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){dw(this,f)}observablePropertyListenerMap={};instanceInputs=F0(this,!1);instanceState=F0(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:Jv(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I0=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},L8=Mr(class extends Pr{constructor(e){if(super(e),e.type!==Ud.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const a of e)i[s]=r?r(a,s):s,o[s]=n(a,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=w8(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],u=[];let l,c,f=0,d=i.length-1,g=0,x=o.length-1;for(;f<=d&&g<=x;)if(i[f]===null)f++;else if(i[d]===null)d--;else if(a[f]===s[g])u[g]=wi(i[f],o[g]),f++,g++;else if(a[d]===s[x])u[x]=wi(i[d],o[x]),d--,x--;else if(a[f]===s[x])u[x]=wi(i[f],o[x]),cs(e,u[x+1],i[f]),f++,x--;else if(a[d]===s[g])u[g]=wi(i[d],o[g]),cs(e,i[f],i[d]),d--,g++;else if(l===void 0&&(l=I0(s,g,x),c=I0(a,f,d)),l.has(a[f]))if(l.has(a[d])){const D=c.get(s[g]),k=D!==void 0?i[D]:null;if(k===null){const A=cs(e,i[f]);wi(A,o[g]),u[g]=A}else u[g]=wi(k,o[g]),cs(e,i[f],k),i[D]=null;g++}else rc(i[d]),d--;else rc(i[f]),f++;for(;g<=x;){const D=cs(e,u[x+1]);wi(D,o[g]),u[g++]=D}for(;f<=d;){const D=i[f++];D!==null&&rc(D)}return this.ut=s,y8(e,u),fn}}),U8=L8;function ga(e,t){return zs(e,t),e.element}function j8(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function zs(e,t){const n=j8(e),r=n?`: in ${n}`:"";if(e.type!==Ud.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function _8(e,t){return Mr(class extends Pr{element;constructor(n){super(n),this.element=ki.instanceOf(ga(n,e),HTMLElement)}render(...n){return t({params:n,directive:this,element:this.element}),fn}})}const xr=_8("attributes",({element:e,params:[t],directive:n})=>{if(!t)return;const i=ea(n,"allAttributesApplied",()=>new Set);ke(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===se?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function V8(e){const t=Mr(class extends Pr{element;constructor(n){super(n),this.element=ga(n,e)}render(n){return this.element.setAttribute(e,n),fn}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function W(e,t){return W8(e,t)}const W8=Mr(class extends Pr{element;lastListenerMetaData;constructor(e){super(e),this.element=ga(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),fn}});function q8(e){return W("keydown",async t=>{const n=t.code.toLowerCase();(n.includes("enter")||n.includes("return")||n==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const N0="onDomCreated",Au=Mr(class extends Pr{element;constructor(e){super(e),zs(e,N0)}update(e,[t]){zs(e,N0);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),T0="onResize",hw=Mr(class extends Pr{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&z8(this.element,this.callback,e)});callback;constructor(e){super(e),zs(e,T0)}update(e,[t]){zs(e,T0),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function z8(e,t,n){const r=n[0];if(!r)throw console.error(n),new Error("Resize observation triggered but the first entry was empty.");t({target:r.target,contentRect:r.contentRect},e)}function Zt(e,t,n){return D8(e,()=>t,()=>n)}const{attributeDirective:K8}=V8("data-test-id"),fo=K8;function pw(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return(...r)=>i=>(t(i),Vd(...r)(n(i)))}function Z8(e,t){return G8(void 0,e)}const G8=Mr(class extends Pr{element;constructor(e){super(e),this.element=ga(e,"assign")}render(e,t){return dw(this.element,t),fn}}),Y8={};function J8(e,t){return t.map((n,r)=>{const i=e[r],o=e[r+1];if(i&&o){const{shouldHaveTagNameHere:s}=gw(i,o);if(s&&S.isString(n))return{tagName:n,tagInterpolationKey:ea(Y8,n,()=>({tagName:n}))}}return n})}function gw(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function H8(...[e,t,n]){const r=nf(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:o}=gw(e,t),s=jd(r);if(s&&o&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!o||!s?void 0:{replacement:r.tagName,getExtraValues(u){const l=nf(u)?u.inputs:void 0;return[i&&l?Z8(l):void 0].filter(S.isTruthy)}}}function X8(e){}function Q8(e){return fw(e.strings,e.values,H8,X8)}function y(e,...t){const n=J8(e,t),r=vD(e,...n),i=cw(e,n,()=>Q8(r));return{...r,strings:i.strings,values:i.values}}function rf(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if(!t?.length&&!n?.length)return"";const r=[...n||[],""],o=(t??[""]).map((s,a)=>{const u=eS(s,r[a]);return`${s}${u}`});return Jg(o.join(""))}function eS(e,t){return t._$litType$!=null||t._$litDirective$!=null?rf(t):Array.isArray(t)?t.map(r=>rf(r)).join(""):e.endsWith("=")?`"${t}"`:t}function yw(e){return cn(e,(t,n)=>n instanceof we?Ge(n.toString({format:"hex"})):yw(n))}const tS="dodgerblue";function of(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function ic({background:e,foreground:t}){return{background:e??new we(of(t)),foreground:t??new we(of(e))}}var Fu;(function(e){e.Dark="dark",e.Light="light"})(Fu||(Fu={}));function nS(e){return e==="black"?"white":"black"}const rS={black:{foregroundFaint1:new we("#ccc"),foregroundFaint2:new we("#eee")},white:{foregroundFaint1:new we("#ccc"),foregroundFaint2:new we("#eee")}},iS={black:{backgroundFaint1:new we("#666"),backgroundFaint2:new we("#444")},white:{backgroundFaint1:new we("#ccc"),backgroundFaint2:new we("#fafafa")}};function M0({themeColor:e=tS,themeStyle:t=Fu.Light}={}){const n=new we(e),r=new we(t===Fu.Dark?"black":"white"),i=of(r),o=new we(i),s={nav:{hover:ic({background:n.clone().set({"hsl.l":93})}),active:ic({background:n.clone().set({"hsl.l":90})}),selected:ic({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...iS[nS(i)],foreground:o,...rS[i]}};return yw(s)}var rr;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(rr||(rr={}));async function sf(e=1){const t=new up;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function oS(e,t){return{element:e,children:ww(e)}}function ww(e,t,n){return sS(e).map(r=>{const i=ww(r);return{element:r,children:i}})}function sS(e){return[...e.children,...e.shadowRoot?.children??[]]}function oc(e){return e.matches(":focus")}function Wd(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Wd(t)}function bw(e,t){if(t(e))return e;const n=Wd(e);if(n)return bw(n,t)}async function aS(e){return uS(e,1)}async function uS(e,t){return new Promise(n=>{new IntersectionObserver((i,o)=>{or.isLengthAtLeast(i,1),o.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function Ci(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,o=r?.constructor.name,s=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return r}function lS(e){const t=Wd(e);return t&&bw(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}function cS({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<r;s++){const u=o.codePointAt(s);for(;a<n;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const fS=Uu(32);function tu(e){return e.join(fS)}function $w(e){if(!e.length)return[];const t=tu(e),n=$w(e.slice(0,-1));return[t,...n]}const dS=["error","errors"];function mS(e){return dS.includes(e)}function hS({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(s=>(r(s),tu(s.fullUrlBreadcrumbs))).forEach(s=>n[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&mS(t),s=tu(i.fullUrlBreadcrumbs);if(cS({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>S.isString(u)?u:rf(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||n[s]){const u=$w(i.fullUrlBreadcrumbs);r(i),u.forEach(l=>n[l]=!0)}else n[s]=!1}),e.filter(i=>{const o=tu(i.fullUrlBreadcrumbs),s=n[o];if(!S.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class qd extends Error{name="SpaRouterError"}class P0 extends qd{name="GlobalUrlEventsConsolidationError"}class pS extends qd{name="SanitizationDepthMaxed"}Ve({paths:[""],search:pt(Tt(void 0,Ld({keys:"",values:[""]}))),hash:pt(Tt(void 0,""))});const gS=Ve({basePath:pt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:pt(1,{alsoUndefined:!0}),disableWarnings:pt(!1,{alsoUndefined:!0}),isPaused:pt(!1,{alsoUndefined:!0})}),sc="://";function zd(...e){const t=e.join("/"),[n,r=""]=t.includes(sc)?t.split(sc):["",t];let i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(i)return s;const c=l[u+1];let f=a;const d=c?.startsWith("?"),g=!a.includes("?")&&d,x=c==="?";if(d||g){i=!0;let D=!1;const k=l.slice(u+2).reduce((A,I)=>(I.includes("#")&&(D=!0),D?A.concat(I):[A,I].join("&")),"");f=[a,c,x?lo({value:k,prefix:"&"}):k].join("")}return s.concat(f)},[]);return[n,n?sc:"",o.join("/")].join("")}var No;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(No||(No={}));var To;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(To||(To={}));const yS=Ve({encoding:pt(Tt(void 0,tf(No))),searchParamStrategy:pt(Tt(void 0,tf(To)))});function _a(e,t){return e.map(n=>{if(n!=null)return mo(String(n),t)}).filter(n=>n!=null)}function mo(e,t){return t?.encoding===No.Decode?decodeURIComponent(e):t?.encoding===No.Encode?encodeURIComponent(e):e}const wS=Ve(Ld({keys:"",values:[""]}));function bS(e,t,n){const r=n?.searchParamStrategy===To.Clear?{}:cn(e,(s,a)=>xv(a)),i=cn(t,(s,a)=>{if(n?.searchParamStrategy===To.Append){const u=r[s],l=S.isArray(u)?u:[u];if(a){const c=S.isArray(a)?a:[a];return _a([...l,...c],n)}else return _a(l,n)}else return S.isArray(a)?_a(a,n):a?_a([a],n):void 0});return If({...r,...i},(s,a)=>!!a)}function vw(e,t){return S.isString(e)&&!e.includes("?")?{}:(S.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=qv(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const u=Dw({options:t,key:s,value:a}),l=ea(o,u.key,()=>[]);return a!=null&&l.push(u.value),o},{})}function $S(e){if(e!=null)return S.isArray(e)?[...e]:e===""?[]:[e]}function vS(e,t){const n=Pi(Object.entries(e),([r,i])=>{const o=$S(i);return o?.length?o.map(s=>{const a=Dw({options:t,key:r,value:s});return[a.key,a.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?Gt({value:n.join("&"),prefix:"?"}):""}function Dw({options:e,key:t,value:n}){return{key:mo(t,e),value:mo(String(n),e)}}function Ew({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",n?n+"@":"",gl({hostname:t,port:i}),Kd({hash:e,pathname:r,search:s})].join("")}function xw({pathname:e}){const t=lo({value:e,prefix:"/"});return t?t.split("/"):[]}function Kd({hash:e,pathname:t,search:n}){return[Gt({value:t,prefix:"/"}),n?Gt({value:n,prefix:"?"}):"",e?Gt({value:e,prefix:"#"}):""].join("")}function gl({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Cw({hostname:e,port:t,protocol:n}){return[n,gl({hostname:e,port:t})].filter(S.isTruthy).join("://")}function ho(e,t){const n=S.isString(e)?lo({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?Gt({value:mo(r,t),prefix:"#"}):"",o=n.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?Gt({value:mo(s,t),prefix:"?"}):"",u=o.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),d=c.replace(/^[^@]*@/,""),g=f!==d,[x,...D]=g?f.split(":").reverse():[],k=D.toReversed().join("").replace(/[/:]/g,"")||"",A=x?.replace(/[/:]/g,"")||"",I=Wv(d.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),j=I[0]?.endsWith("]")?"":I[1]===":"&&I[0]||"",G=d.replace(new RegExp(`:${j}($|/)`),"$1").replace(/\/.*/,""),Re=d.replace(/^[^/]*(\/|$)/,"$1"),Et=mo(Re.replace(/^[^/]*(?:\/|$)/,"/"),t),et=gl({hostname:G,port:j}),It=Cw({hostname:G,port:j,protocol:l}),bn=Ew({hash:i,hostname:G,password:A,pathname:Et,port:j,protocol:l,search:a,username:k}),On=vw(a),zi=xw({pathname:Et});return{fullPath:Kd({hash:i,pathname:Et,search:a}),hash:i,host:et,hostname:G,href:bn,origin:It,password:A,pathname:Et,paths:zi,port:j,protocol:l,search:a,searchParams:On,username:k}}Ve({hash:pt(Tt(void 0,"")),search:pt(Tt(void 0,"",Ld({keys:"",values:Tt(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:pt(Tt(void 0,"")),pathname:pt(Tt(void 0,"")),paths:pt(Tt(void 0,[""])),protocol:pt(Tt(void 0,"")),username:pt(Tt(void 0,"")),password:pt(Tt(void 0,"")),port:pt(Tt(void 0,"",-1))});function DS(e,t,n){const r=!!n,i=t==null||xi(t,yS,{allowExtraKeys:!1}),o=i?ho(""):S.instanceOf(e,URL)||S.isString(e)?ho(e):e,s=i?e:t,a=S.isString(s)&&s.startsWith("."),u=S.isString(s)||S.instanceOf(s,URL)?If(ho(s),(D,k)=>S.isTruthy(k)):s,l=r?n:i?t:void 0,c=cn(o,(D,k)=>{if(!S.hasKey(u,D))return k;const A=u[D];return S.isNumber(A)?String(A):S.isString(A)?D==="hash"&&A?Gt({value:A,prefix:"#"}):D==="pathname"?Gt({value:A,prefix:"/"}):A:k});S.hasKey(u,"paths")&&u.paths&&(c.pathname=zd(a?o.pathname:"",...u.paths));const f=S.isString(u.search)?vw(Gt({value:u.search,prefix:"?"})):Av(u.search||{}),d=bS(c.searchParams,f,{...l,encoding:No.None}),g=vS(d,l);return{...c,searchParams:d,search:g,paths:xw(c),fullPath:Kd(c),host:gl(c),origin:Cw(c),href:Ew({...c,search:g})}}const ES=Ve({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:wS,hash:"",fullPath:"/",href:"/"});({...ES.default});const xS=0;function Aw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==xS)}const yl="locationchange",vr=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const O0=vr?.pushState;function B0(...e){if(!O0)return;const t=O0.apply(vr,e);return globalThis.dispatchEvent(new Event(yl)),t}const R0=vr?.replaceState;function L0(...e){if(!R0)return;const t=R0.apply(vr,e);return globalThis.dispatchEvent(new Event(yl)),t}function CS(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!vr)){{if(vr.pushState===B0)throw new P0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(vr.replaceState===L0)throw new P0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,vr.pushState=B0,vr.replaceState=L0,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(yl))})}}function Va(e,t){const n=ho(e),r=lo({value:lo({value:n.pathname,prefix:Gt({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],o=Object.keys(n.searchParams).length?n.searchParams:void 0,s=n.hash?lo({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class Zd{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){l8(t,gS),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new iw({defaultValue:n,equalityCheck:()=>!1}),CS(),this.removeGlobalListener=Xg(globalThis,yl,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new pS("Looping route sanitization detected; aborting window URL change listener.");const r=Va(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);S.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:zd(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Va(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Va(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),o=this.routeIncludesBasePath(Va(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return DS(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Gt({value:o.hash,prefix:"#"}):""},{searchParamStrategy:To.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=ho(r);return this.params.isPaused||!n.force&&S.jsonEquals(ho(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return Aw(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new qd(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function AS(e){return new Zd({basePath:e,sanitizeRoute(t){return{paths:FS(t.paths),hash:void 0,search:void 0}}})}function FS(e){const t=e[0];if(S.isEnumValue(t,qt)){if(t===qt.Book)return[qt.Book,...e.slice(1)];if(t===qt.Search)return e[1]?[t,e[1]]:[qt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return bo.paths}const ku=_d()("element-book-change-route"),U0="vira-",at=pw({assertInputs:e=>{if(!e.tagName.startsWith(U0))throw new Error(`Tag name should start with '${U0}' but got '${e.tagName}'`)}});function kS(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given: ${Xv(n)}`)}function SS(e,t=[],n=!1){return n?t.includes(e.id)?t.filter(r=>r!==e.id):[...t,e.id]:[e.id]}function j0({open:e,callback:t,popUpManager:n,host:r}){if(e){const i=n.showPopUp(r);t?.(i)}else n.removePopUp(),t?.(void 0)}const b=Ir({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"}),IS=we;function NS(e){try{if(!e)throw new Error("invalid empty color");return new IS(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function le({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function _0(e,t){const n=ke(t).map(r=>{const i=t[r],o=NS(i);return`${b[r].name}: ${o.toString()};`}).join(" ");return le({name:e.name,svgTemplate:y`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const Gd=le({name:"Check24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Sn=Ir({"vira-form-input-radius":"8px"}),Xo=C`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Ar=Ir({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Mo=Ir({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":C`calc(${Sn["vira-form-input-radius"].value} + 4px)`});function ya({elementBorderSize:e,outlineGap:t=2,outlineWidth:n=2,noNesting:r}){const i=Ge(Zg(n+t+e)),o=C`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${n}px solid ${Mo["vira-focus-outline-color"].value};
        border-radius: ${Mo["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return r?o:C`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const ee=Ir({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#d2eaff","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),Yd=C`
    padding: 0;
    margin: 0;
`,Vn=C`
    ${Yd};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,ac=Ir({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),po={menuShadow:C`
        filter: drop-shadow(0px 5px 5px ${ac["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:C`
        filter: drop-shadow(0px -5px 5px ${ac["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:C`
        box-shadow: 0 5px 15px ${ac["modal-shadow-color"].value};
    `},Po=C`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,U=at()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>C`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),on=at()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            ${Po};
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

        ${e["vira-menu-item-selected"].selector} ${U} {
            opacity: 1;
            visibility: visible;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${U} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
            visibility: hidden;
        }
    `,render({inputs:e}){return y`
            <div class="item">
                <${U.assign({icon:Gd})}></${U}>
                <slot>${e.label}</slot>
            </div>
        `}});function TS(e,t){return e>t}function MS(e,t){return e<t}function Ks(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var ir;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(ir||(ir={}));var de;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(de||(de={}));function wl(e){const t={x:-1,y:-1};let n;for(;t.y<e.length-1&&!n;){t.y++;const r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;const i=r[t.x];if(i)if(i.navEntry.navParams.group){const o=wl(i.children);o&&(n=o.node)}else i.navEntry.navParams.disabled||(n=i)}}if(n)return{node:n,coords:t}}function V0(e,t,n,r){if(!t){const u=wl(e.children);return u?(Ks(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:n,navAction:de.Navigate}):{success:!1,reason:"no default element to focus",direction:n,navAction:de.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=Fw(t.position,n),a=r?!0:!o;return i&&a?(Ks(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:n,navAction:de.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:n,navAction:de.Navigate}:{success:!1,reason:"wrapping blocked",direction:n,navAction:de.Navigate}:{success:!1,reason:"failed to find node to focus",direction:n,navAction:de.Navigate}}function Fw(e,t){let n=!1,r,i=1;const o=Date.now();for(;!n||!r;)if(r=PS(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return jv.warning("Failed to find next non-disabled node."),r;return r}function PS(e,t,n){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;or.isDefined(r,"missing parent");const i=ki.isDefined(r.children[e.nodeCoords.y]),o=r.children.length>1&&(t===ir.Down||t===ir.Up),s=t===ir.Down||t===ir.Right?n:-1*n,a=s<0?TS:MS,u=o?th(e.nodeCoords.y+s,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=ki.isDefined(r.children[u]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:th(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=r.children[u]?.[c],d=o?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:f,requiresWrapping:d,coords:{x:c,y:u}}}function OS(e,t,n){const r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:de.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=Fw(r,t),a=i?.navEntry.navParams.group?wl(i.children):{node:i,coords:s},u=n?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:de.Pibling}:u?(Ks(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:de.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:de.Pibling}}var Mt;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Mt||(Mt={}));const qn={name:"data-nav",js(e){return e?`[${qn.name}*="${e}"]`:`[${qn.name}]`},css({baseSelector:e="",navValue:t}={}){return C`
            ${Ge(e)}${Ge(qn.js(t))}
        `}},Jd="navEntry";function kw(e){return Jd in e}function Sw(e){if(kw(e)){const t=e[Jd];return ki.instanceOf(t,Iw,"Invalid nav entry")}else return}function BS(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Mt.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Iw{element;navParams;navTreeNode;navValue;eventListener=BS(this);constructor(t,n,r){this.element=t,this.navParams=r,this.attachListeners(),this.navController=n}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return or.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(qn.name,""),oc(this.element)&&this.element.blur())}focus(t,n){const r=this.navValue,i=t===(r===Mt.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Mt.Focused),oc(this.element)||this.element.focus()):(this.removeNavValue(Mt.Focused),oc(this.element)&&this.element.blur()),n||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,de.Focus)}activate(t){const n=this.navValue,r=t===(n===Mt.Active);if(!(this.navParams.group||this.navController.locked||r))return this.focus(t,!0),t?this.setNavValue(Mt.Active):this.setNavValue(Mt.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,de.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(qn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(qn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Nw(e,t){Object.entries(t).forEach(([n,r])=>{S.isBoolean(r)&&r?e.setAttribute(n,""):S.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const RS=Mr(class extends Pr{element;lastKey;constructor(e){super(e),this.element=ga(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),fn}});function LS(e){return"group"in e?Mt.Group:e.disabled?Mt.Disabled:""}function W0(e,t={}){return RS(h(t),n=>{e.needsUpdate=!0;const r=!t.group&&!t.disabled;or.instanceOf(n,HTMLElement);const i={[qn.name]:LS(t),tabindex:r?0:-1};Nw(n,i);const o=Sw(n)||new Iw(n,e,t);kw(n)?(o.navParams=t,o.navController=e):n[Jd]=o,r?n.style.setProperty("cursor","pointer"):n.style.removeProperty("cursor")})}function US(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:de.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:de.Enter};const n=t.position.node.children[0]?.[0];return n?(Ks(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:de.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:de.Enter}}function jS(e,t){return Tw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Tw(e,t,n){for(let r=0;r<t.length;r++){const i=t[r];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:r},node:s};if(n(a))return a;const u=Tw(e.concat(a),s.children,n);if(u)return u}}}function Mw(e,t){const n=jS(e,({node:r})=>!r.root&&r.navEntry===t);if(!n)throw new Error("Failed to find NavEntry in NavTree.");return n}function _S(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:de.Exit};const n=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:de.Exit};const{nodeCoords:r}=Mw(e,n.navEntry);return Ks(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:de.Exit,coords:r}}class VS extends ni()("nav-exit"){}class Pw extends ni()("nav-activate"){}class WS extends ni()("nav-focus"){}class qS extends ni()("nav-enter"){}class zS extends ni()("nav-navigate"){}class KS extends ni()("nav-navigate-pibling"){}function ZS(e){return{root:!0,children:Ow(e)?.children||[]}}function Ow(e){const t=e.element;if(!(t instanceof HTMLElement))return;const n=Sw(t),r=GS(e);if((n?.navParams.group?!!r.length:!1)||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function GS(e){const t=[];function n(r){if(r.navEntry?.navParams.group&&!r.children.length)return;if(!r.navEntry){r.children.forEach(a=>a.forEach(u=>n(u)));return}const i=r.navEntry.navParams.x,o=r.navEntry.navParams.y||0,s=ea(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(r):s.withX.push({x:i,node:r})}return e.children.forEach(r=>{const i=Ow(r);i&&n(i)}),t.sort((r,i)=>r.y-i.y).map(r=>(r.withX.sort((i,o)=>i.x-o.x),r.withX.forEach(({x:i,node:o})=>{r.noX.splice(i,0,o)}),r.noX)).filter(S.isTruthy)}class Bw extends Nf{rootElement;options;constructor(t,n={}){super(),this.rootElement=t,this.options=n}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){wl(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,n,r){if(this.locked)return{success:!1,direction:void 0,navAction:r,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:r,reason:"No nav entry to operate on."};const i=Mw(this.getNavTree(),t);n?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:r,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===r&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:r,coords:i.nodeCoords};return n&&(r===de.Activate?this.dispatch(new Pw({detail:o})):r===de.Focus&&this.dispatch(new WS({detail:o}))),o}navigate({direction:t,allowWrapping:n}){if(this.locked)return{success:!1,direction:t,navAction:de.Navigate,reason:"NavController is locked."};const r=V0(this.getNavTree(),this.currentNavEntry,t,n);return this.dispatch(new zS({detail:r})),r}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:de.Enter,reason:"NavController is locked."};const n=US(this.getNavTree(),this.currentNavEntry);return!n.success&&t?this.activate():(this.dispatch(new qS({detail:n})),n)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:de.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:de.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return or.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:de.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===de.Activate&&this.currentNavEntry.entry.focus(!0);const t=_S(this.getNavTree(),this.currentNavEntry);return this.dispatch(new VS({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){if(this.locked)return{success:!1,direction:n,navAction:de.Pibling,reason:"NavController is locked."};const r=this.getNavTree(),o={...this.currentNavEntry?OS(this.currentNavEntry,n,t):V0(r,void 0,n,t),navAction:de.Pibling};return this.dispatch(new KS({detail:o})),o}buildNavTree(){const t=oS(this.rootElement),n=ZS(t);return this.cachedNavTree=n,n}}const oo=at()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>C`
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
    `,render({inputs:e}){function t(n){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,n)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return y`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${xr(e.attributePassthrough?.a)}
                    style=${rt(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return y`
                <a
                    href=${n}
                    rel="noopener noreferrer"
                    ${xr(e.attributePassthrough?.a)}
                    style=${rt(e.stylePassthrough?.a)}
                    ${W("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),q0={item:"menu-item"},xs=at()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Bw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>C`
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
            background-color: ${ee["vira-form-background-color"].value};
            color: ${ee["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Vn};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${qn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Mt.Focused})}, ${qn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Mt.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${ee["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${qn.css({baseSelector:".menu-item:not(.disabled)",navValue:Mt.Focused})},
                ${qn.css({baseSelector:".menu-item:not(.disabled)",navValue:Mt.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${ee["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${on} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${Xo};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){kS(e.items);const n=e.items.map(r=>{const i=!!e.selected?.includes(r.id),o=S.isString(r.label)?y`
                      <${on.assign({label:r.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${on}>
                  `:r.label,s=r.disabled||!e.isMultiSelect&&i;return r.route?y`
                    <${oo.assign({route:r.route})}
                        class="menu-item ${Xt({disabled:!!r.disabled,selected:i})}"
                        ${fo(q0.item)}
                        title=${rt(r.titleText||void 0)}
                        role="option"
                        ${W0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${oo}>
                `:y`
                    <button
                        class="menu-item ${Xt({disabled:!!r.disabled,selected:i})}"
                        ${fo(q0.item)}
                        title=${rt(r.titleText||void 0)}
                        role="option"
                        ${W0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return y`
            ${n}
        `}});var Hd=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(Hd||{}),Su=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Su||{});const Cs=at()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${Sn["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${ee["vira-form-background-color"].value};
            border: 1px solid ${ee["vira-form-border-color"].value};
            color: ${ee["vira-form-foreground-color"].value};
            ${po.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${po.menuShadowReversed}
            border-radius: ${Sn["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${Sn["vira-form-input-radius"].value};
        }
    `,render(){return y`
            <slot></slot>
        `}}),Wa=globalThis.document;class YS extends iw{constructor(){if(super({defaultValue:!!Wa?.hidden,equalityCheck:S.strictEquals}),!Wa)return;globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n,Wa));const t=n=>this.updateVisibility(n,Wa);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,n){const r=HS.includes(t.type),i=JS.includes(t.type),o=r?!0:i?!1:n.hasFocus()||!n.hidden;this.setValue(o)}}const JS=["blur","focusout","pagehide"],HS=["focus","focusin","pageshow"],XS=new YS;function QS(e,t){return XS.listen(e,t)}const z0={top:0,left:0,right:0,bottom:0};class Rw extends Hg("hide-pop-up"){}class Lw extends ni()("nav-select"){}class eI{constructor(t,n){this.navController=t,this.options={...this.options,...n}}listenTarget=new Nf;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let n=!1;const r=new ResizeObserver(()=>{n?this.removePopUp():n=!0});r.observe(t),this.cleanupCallbacks=[()=>{r.disconnect()},QS(!1,i=>{i||this.removePopUp()}),this.navController.listen(Pw,i=>{i.detail.success&&(this.listenTarget.dispatch(new Lw({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),Nc("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Nc("keydown",i=>{const o=i.code;o==="Escape"?this.removePopUp():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:ir.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:ir.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:ir.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:ir.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Rw)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=lS(t);or.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=cn(z0,g=>o[g]),f=cn(z0,g=>{const x=l[g],D=c[g];return Math.abs(x-D)}),d=f.top>f.bottom+r.verticalDiffThreshold&&f.bottom<r.minDownSpace;return this.attachGlobalListeners(i),{popDown:!d,positions:{container:l,root:c,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Yr=(e=>(e.Left="left",e.Right="right",e.Both="both",e))(Yr||{});const me=at()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new eI(new Bw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>C`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Vn};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${ya({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Po};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Xo}
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
    `,events:{navSelect:dt(),openChange:dt(),init:dt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:o}){e.popUpManager.listen(Rw,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!r.isDisabled){const s=n.shadowRoot.querySelector(".dropdown-wrapper");or.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Lw,s=>{r.keepOpenAfterInteraction||j0({open:!1,callback(a){t({showPopUpResult:a})},host:n,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:o,slotNames:s}){function a({emitEvent:g,open:x},D){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&D){const k=o.shadowRoot.querySelector(".dropdown-trigger");if(k&&!D.composedPath().includes(k))return}j0({open:x,callback(k){i({showPopUpResult:k}),g&&e(new t.openChange(k))},host:o,popUpManager:n.popUpManager})}r.isDisabled?a({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?a({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=r.horizontalAnchor==="right"&&n.showPopUpResult?C`
                      left: -${n.showPopUpResult.positions.diff.left}px;
                  `:C`
                      left: ${r.popUpOffset?.left||0}px;
                  `,l=n.showPopUpResult&&r.horizontalAnchor==="left"?C`
                      right: -${n.showPopUpResult.positions.diff.right}px;
                  `:C`
                      right: ${r.popUpOffset?.right||0}px;
                  `,c=C`
            ${u}
            ${l}
        `,f=n.showPopUpResult?n.showPopUpResult.popDown?C`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:C`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:void 0;function d(g){a({emitEvent:!0,open:!n.showPopUpResult},g)}return y`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${Xt({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${W("keydown",g=>{!n.showPopUpResult&&g.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},g)})}
                ${W("click",g=>{g.detail===0&&d(g)})}
                ${W("mousedown",g=>{g.button===0&&d(g)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${Xt({"right-aligned":r.horizontalAnchor==="right"})}"
                    style=${f}
                >
                    ${Zt(!!n.showPopUpResult,y`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),tI={menu:"menu-trigger-menu"},zr=at()({tagName:"vira-menu-trigger",styles:C`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${me} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:dt(),openChange:dt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i}){return y`
            <${me.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||Yr.Left})}
                class=${Xt({open:!!t.showPopUpResult})}
                ${W(me.events.init,o=>{n({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${W(me.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&r(new i.openChange(o.detail)),n({showPopUpResult:o.detail})})}
                ${W(me.events.navSelect,o=>{const s=o.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);r(new i.itemActivate(SS(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${me.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?y`
                          <${Cs.assign({direction:t.showPopUpResult.popDown?Su.Downwards:Su.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${me.slotNames.popUp}
                              class=${Xt({"full-width-menu":e.horizontalAnchor===Yr.Both})}
                          >
                              <${xs.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${fo(tI.menu)}
                              ></${xs}>
                          </${Cs}>
                      `:se}
            </${me}>
        `}}),Me=at()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>C`
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
    `,render({inputs:e}){return y`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var Uw=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Uw||{});const tt=at()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Po};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Mo["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Xo};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Vn};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Sn["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Ar["vira-interaction-animation-duration"].value},
                background-color
                    ${Ar["vira-interaction-animation-duration"].value},
                border-color ${Ar["vira-interaction-animation-duration"].value};

            ${ya({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${U} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${U} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?y`
                  <${U.assign({icon:e.icon})}></${U}>
              `:se,n=e.text?y`
                  <span class="text-template">${e.text}</span>
              `:y`
                  <span class="empty-text">&nbsp;</span>
              `;return y`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});var af=(e=>(e.Error="error",e.Success="success",e))(af||{});const uc=at()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${ee["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${ee["vira-form-success-foreground-color"].value};
        }
    `,render(){return y`
            <slot></slot>
        `}}),nI=le({name:"Bell24Icon",svgTemplate:y`
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
    `}),rI=le({name:"Chat24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Xd=le({name:"ChevronUp24Icon",svgTemplate:y`
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
    `}),jw=le({name:"CloseX24Icon",svgTemplate:y`
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
    `}),iI=le({name:"Commit24Icon",svgTemplate:y`
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
    `}),oI=le({name:"Document24Icon",svgTemplate:y`
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
    `}),_w=le({name:"Element16Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),kn=le({name:"Element24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),sI=le({name:"ExternalLink24Icon",svgTemplate:y`
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
    `}),Vw=le({name:"EyeClosed24Icon",svgTemplate:y`
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
    `}),Ww=le({name:"EyeOpen24Icon",svgTemplate:y`
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
    `}),aI=le({name:"Link24Icon",svgTemplate:y`
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
    `}),qw=le({name:"Loader24Icon",svgTemplate:y`
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
    `}),uI=C`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Ar["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Zs=le({name:"LoaderAnimated24Icon",svgTemplate:y`
        <style>
            ${uI}
        </style>
        ${qw.svgTemplate}
    `}),lI=le({name:"Lock24Icon",svgTemplate:y`
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
    `}),As=le({name:"Options24Icon",svgTemplate:y`
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
    `}),cI=le({name:"Pencil24Icon",svgTemplate:y`
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
    `}),fI=le({name:"Shield24Icon",svgTemplate:y`
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
    `}),dI=le({name:"SpeakerLoud24Icon",svgTemplate:y`
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
    `}),mI=le({name:"SpeakerMedium24Icon",svgTemplate:y`
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
    `}),hI=le({name:"SpeakerMuted24Icon",svgTemplate:y`
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
    `}),pI=le({name:"SpeakerQuiet24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),gI=le({name:"Star24Icon",svgTemplate:y`
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
    `}),Iu=le({name:"StatusFailure24Icon",svgTemplate:y`
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
    `}),yI=le({name:"StatusInProgress24Icon",svgTemplate:y`
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
    `}),wI=le({name:"StatusSuccess24Icon",svgTemplate:y`
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
    `}),bI=le({name:"StatusUnknown24Icon",svgTemplate:y`
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
    `}),$I=le({name:"StatusWarning24Icon",svgTemplate:y`
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
    `}),vI=le({name:"Upload24Icon",svgTemplate:y`
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
    `}),zw=le({name:"X24Icon",svgTemplate:y`
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
    `}),uf={Bell24Icon:nI,Chat24Icon:rI,Check24Icon:Gd,ChevronUp24Icon:Xd,CloseX24Icon:jw,Commit24Icon:iI,Document24Icon:oI,Element16Icon:_w,Element24Icon:kn,ExternalLink24Icon:sI,EyeClosed24Icon:Vw,EyeOpen24Icon:Ww,Link24Icon:aI,Loader24Icon:qw,LoaderAnimated24Icon:Zs,Lock24Icon:lI,Options24Icon:As,Pencil24Icon:cI,Shield24Icon:fI,SpeakerLoud24Icon:dI,SpeakerMedium24Icon:mI,SpeakerMuted24Icon:hI,SpeakerQuiet24Icon:pI,Star24Icon:gI,StatusFailure24Icon:Iu,StatusInProgress24Icon:yI,StatusSuccess24Icon:wI,StatusUnknown24Icon:bI,StatusWarning24Icon:$I,Upload24Icon:vI,X24Icon:zw},Pe=at()({tagName:"vira-checkbox",styles:C`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${U} {
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

        ${U} {
            ${b["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${ee["vira-form-border-color"].value};
            color: ${ee["vira-form-foreground-color"].value};
            border-radius: ${Sn["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${ya({elementBorderSize:1})}

            &.checked {
                & ${U} {
                    opacity: 1;
                }
            }

            &:hover {
                background-color: ${ee["vira-form-selection-hover-background-color"].value};
            }

            &:active {
                background-color: ${ee["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${Xo};
            }
        }
    `,events:{valueChange:dt()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}const i=e.label?y`
                  <span
                      class="text"
                      ${xr(e.attributePassthrough?.text)}
                      style=${rt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:se;return y`
            <label
                class=${Xt({disabled:!!e.disabled})}
                ${xr(e.attributePassthrough?.label)}
                style=${rt(e.stylePassthrough?.label)}
                ${W("click",r)}
            >
                <span
                    class="custom-checkbox ${Xt({checked:e.value,disabled:!!e.disabled})}"
                    role="checkbox"
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${xr(e.attributePassthrough?.["custom-checkbox"])}
                    style=${rt(e.stylePassthrough?.["custom-checkbox"])}
                    ${q8(r)}
                >
                    <${U.assign({icon:Gd,fitContainer:!0})}
                        ${xr(e.attributePassthrough?.[U.tagName])}
                        style=${rt(e.stylePassthrough?.[U.tagName])}
                    ></${U}>
                </span>
                ${i}
            </label>
        `}}),dr=at()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Vn};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Ar["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:dt()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:o}){const s=o.expanded?C`
                  height: ${e.contentHeight}px;
              `:C`
                  height: 0;
              `;return y`
            <button
                class="header-wrapper"
                ${W("click",()=>{r(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${hw(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),lc={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},ys=at()({tagName:"vira-dropdown",styles:C`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${zr} {
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
                ${Ar["vira-interaction-animation-duration"].value} linear;
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
            ${Po};
            border: 1px solid ${ee["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${Sn["vira-form-input-radius"].value};
            background-color: ${ee["vira-form-background-color"].value};
            color: ${ee["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:dt(),openChange:dt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:n,events:r,updateState:i}){const o=Pi(t.selected,c=>t.options.find(f=>f.id===c),S.isTruthy),s=t.icon?y`
                  <${U.assign({icon:t.icon})}
                      ${fo(lc.icon)}
                  ></${U}>
              `:se,a=!o.length,u=t.selectionPrefix&&!a?y`
                      <span class="selected-label-prefix" ${fo(lc.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:se,l=a?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return y`
            <${zr.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||Yr.Both})}
                ${W(zr.events.openChange,c=>{i({showPopUpResult:c.detail}),n(new r.openChange(c.detail))})}
                ${W(zr.events.itemActivate,c=>{n(new r.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${Xt({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${fo(lc.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${Xt({"using-placeholder":a})}"
                        title=${rt(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${U.assign({icon:Xd})}
                            class="trigger-icon"
                        ></${U}>
                    </span>
                </div>
            </${zr}>
        `}}),cc=at()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>C`
        :host {
            color: ${ee["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return y`
            <slot></slot>
        `}}),Lr=at()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:dt(),imageError:dt()},styles:({hostClasses:e})=>C`
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
    `,render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:o}){const s=e.imageUrl,a=t.erroredUrls[s]?y`
                  <slot class="status-wrapper" name=${o.error}>
                      <${U.assign({icon:Iu})} class="error"></${U}>
                  </slot>
              `:t.loadedUrls[s]?void 0:y`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${U.assign({icon:Zs})}></${U}>
                    </slot>
                `;return y`
            ${Zt(!!a,a)}
            <img
                class=${Xt({hidden:!!a})}
                ${W("load",async()=>{e._debugLoadDelay&&await Is(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[s]:!0}}),r(new i.imageLoad)})}
                ${W("error",async u=>{e._debugLoadDelay&&await Is(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[s]:!0}}),r(new i.imageError(u.error))})}
                src=${s}
            />
        `}});function lf({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(n=>lf({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function DI({value:e,allowed:t,blocked:n}){const r=t?lf({input:e,matcher:t}):!0,i=n?lf({input:e,matcher:n}):!1;return r&&!i}function cf(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(DI({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function EI({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){const o=Ci(n,HTMLInputElement),s=S.hasKey(n,"data")&&wv.isString(n.data)||"";if(s){const{blocked:u}=cf({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=cf({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var ff=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(ff||{});const Vt=at()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>C`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${ee["vira-form-foreground-color"].value};
            }

            label {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 2px;
                width: 100%;
                max-width: 100%;

                & .input-label {
                    font-weight: ${ee["vira-form-label-font-weight"].value};
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
                ${Vn};
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
                ${Po};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Vn};
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
                border-radius: ${Sn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${ee["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Vn};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Sn["vira-form-input-radius"].value};
                background-color: ${ee["vira-form-background-color"].value};
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
                ${Vn};
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
                    ${ya({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${ee["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${ee["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${ee["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Po};
            }

            button {
                ${Vn};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Ar["vira-interaction-animation-duration"].value};
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
                    border-color: ${ee["vira-form-error-foreground-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & label,
                & .input-wrapper {
                    cursor: not-allowed;
                }

                & input,
                & .wrapper-border,
                & input::placeholder {
                    ${Xo};
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:dt(),inputBlocked:dt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Uu(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:o})=>{const{filtered:s}=cf({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?y`
                  <${U.assign({icon:e.icon})} class="left-side-icon"></${U}>
              `:se,u=e.fitText?C`
                  width: ${n.forcedInputWidth}px;
              `:se,l=W("mousedown",d=>{const g=Ci(d,HTMLElement,{useOriginalTarget:!0}),x=ki.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);g!==x&&(d.preventDefault(),x.focus())}),c=e.disableBrowserHelps||e.type==="password",f=y`
            <span class="input-wrapper" ${e.label?se:l}>
                ${a}
                ${Zt(!!e.fitText,y`
                        <span
                            class="size-span"
                            ${hw(({contentRect:d})=>{r({forcedInputWidth:d.width})})}
                        >
                            <pre>${s||e.placeholder||se}</pre>
                        </span>
                    `)}

                <input
                    id=${rt(e.label?n.randomId:void 0)}
                    aria-label=${rt(e.label||void 0)}
                    type=${xI(e.type,n.showPassword)}
                    style=${u}
                    autocomplete=${rt(c?"off":void 0)}
                    autocorrect=${rt(c?"off":void 0)}
                    autocapitalize=${rt(c?"off":void 0)}
                    spellcheck=${rt(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${W("input",d=>{EI({inputs:e,previousValue:s,event:d,inputBlockedCallback(g){t(new i.inputBlocked(g))},newValueCallback(g){t(new i.valueChange(g))}})})}
                    placeholder=${rt(e.placeholder||void 0)}
                    ${xr(e.attributePassthrough)}
                />

                ${Zt(!!(e.showClearButton&&e.value),y`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${W("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${W("click",()=>{t(new i.valueChange(""))})}
                        >
                            <${U.assign({icon:jw})}></${U}>
                        </button>
                    `)}
                ${Zt(e.type==="password",y`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${W("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${W("click",()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${U.assign({icon:n.showPassword?Ww:Vw})}></${U}>
                        </button>
                    `)}
                ${Zt(!!e.suffix,y`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?y`
                <label for=${n.randomId} ${l}>
                    <span class="input-label">${e.label}</span>
                    ${f}
                </label>
            `:f}});function xI(e,t){return e==="password"&&t?"text":e||"text"}const CI=["pagehide","pageshow","popstate"],mr=at()({tagName:"vira-modal",events:{modalClose:dt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${Yd};
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
            ${po.modal}

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
                        ${Vn};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${t["vira-modal-close-button-hover-radius"].value};

                        &:hover {
                            background-color: ${t["vira-modal-close-button-hover-background-color"].value};
                        }

                        & ${U} {
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
    `,render({inputs:e,state:t,updateState:n,events:r,dispatch:i,slotNames:o}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),n({previousOpenValue:e.open}),e.open)){const a=CI.map(u=>Nc(u,()=>{i(new r.modalClose)}));n({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),i(new r.modalClose))}return y`
            <dialog
                ${Au(a=>{n({dialogElement:ki.instanceOf(a,HTMLDialogElement)})})}
                ${W("close",()=>{s()})}
                ${W("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Au(a=>{n({contentElement:ki.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${o.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?y`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:se}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${W("click",()=>{t.dialogElement?.close()})}
                        >
                            <${U.assign({icon:zw})}></${U}>
                        </button>
                    </div>
                    ${e.open?y`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:se}
                </div>
            </dialog>
        `}}),Nt=at()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>C`
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
    `,render({inputs:e,host:t}){const n=e.min||0,i=(e.max||100)-n,o=e.value-n,s=_v(Math.round(o/i*100),{min:0,max:100});return Nw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),y`
            <div
                class="progress-bar"
                style=${s?C`
                          width: ${s}%;
                      `:C`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}}),Kr=at()({tagName:"vira-select",state(){return{randomId:Uu(32)}},events:{valueChange:dt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${ee["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Vn};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${Sn["vira-form-input-radius"].value};
            background-color: ${ee["vira-form-background-color"].value};
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
                    ${ya({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${ee["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${U} {
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
                border-radius: ${Sn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${ee["vira-form-border-color"].value};
                transition: border
                    ${Ar["vira-interaction-animation-duration"].value};
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
                font-weight: ${ee["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & label {
                cursor: not-allowed;
            }

            & select,
            & .wrapper-border {
                ${Xo}
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${ee["vira-form-error-foreground-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:n,events:r}){const i=e.placeholder?y`
                  <option value="" disabled ?selected=${e.value==null}>
                      ${e.placeholder}
                  </option>
              `:se,o=y`
            <span class="select-wrapper">
                <select
                    class=${Xt({placeholder:!e.value&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${rt(e.label?t.randomId:void 0)}
                    aria-label=${rt(e.label||void 0)}
                    aria-disabled=${rt(e.disabled?"true":void 0)}
                    ${W("input",s=>{const a=Ci(s,HTMLSelectElement);n(new r.valueChange(a.value))})}
                    ${xr(e.attributePassthrough?.select)}
                >
                    ${i}
                    ${e.options.map(s=>y`
                            <option
                                ?selected=${s.value===e.value}
                                aria-label=${s.label}
                                ?disabled=${s.disabled}
                            >
                                ${s.label}
                            </option>
                        `)}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${U.assign({icon:e.icon})} class="input-icon"></${U}>
                <${U.assign({icon:Xd})} class="trigger-icon"></${U}>
            </span>
        `;return e.label?y`
                <label for=${t.randomId} ${xr(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${o}
                </label>
            `:o}}),Pn=pw(),Cn=Pn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>C`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return y`
            <a
                href=${n}
                ${W("click",r=>{(!e.router||Aw(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new ku(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function AI(e,t){return e.entry.entryType===gt.Root?!1:e.entry.entryType===gt.Page||S.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:S.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const yr=Pn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>C`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${fe["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${fe["element-book-nav-hover-background-color"].value};
            color: ${fe["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${fe["element-book-nav-active-background-color"].value};
            color: ${fe["element-book-nav-active-foreground-color"].value};
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
            background-color: ${fe["element-book-nav-selected-background-color"].value};
            color: ${fe["element-book-nav-selected-foreground-color"].value};
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

        ${U} {
            display: inline-flex;
            color: ${fe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!AI(n,e.selectedPath))return;const r=C`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return y`
                <li style=${r}>
                    <${Cn.assign({router:e.router,route:{paths:[qt.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${Xt({"title-row":!0,selected:e.selectedPath?S.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Zt(co(n,gt.ElementExample),y`
                                    <${U.assign({icon:_w})}></${U}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${Cn}>
                </li>
            `});return y`
            <${Cn.assign({route:bo,router:e.router})}>
                <slot name=${rr.NavHeader}>Book</slot>
            </${Cn}>
            <ul>
                ${t}
            </ul>
        `}});async function FI(e){await sf(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await aS(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ti=Pn()({tagName:"book-error",styles:C`
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
    `,render({inputs:e}){return(S.isArray(e.message)?e.message:[e.message]).map(n=>y`
                <p>${n}</p>
            `)}}),Gs=Pn()({tagName:"book-page-controls",events:{controlValueChange:dt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Vt} {
            height: 24px;
            max-width: 128px;
        }

        ${U}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],o)=>{if(i.controlType===J.Hidden)return"";const s=kI(e.currentValues[r],i,a=>{const u=S.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[r]:a}}))});return y`
                    <div class="control-wrapper">
                        ${Zt(o===0,y`
                                <${U.assign({icon:As})}
                                    class="options-icon"
                                ></${U}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function kI(e,t,n){return Ji(t,J.Hidden)?"":Ji(t,J.Checkbox)?y`
            <input
                type="checkbox"
                ?checked=${e}
                ${W("input",r=>{const i=Ci(r,HTMLInputElement);n(i.checked)})}
            />
        `:Ji(t,J.Color)?y`
            <input
                type="color"
                .value=${e}
                ${W("input",r=>{const i=Ci(r,HTMLInputElement);n(i.value)})}
            />
        `:Ji(t,J.Text)?y`
            <${Vt.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${W(Vt.events.valueChange,r=>{n(r.detail)})}
            ></${Vt}>
        `:Ji(t,J.Number)?y`
            <input
                type="number"
                .value=${e}
                ${W("input",r=>{const i=Ci(r,HTMLInputElement);n(i.value)})}
            />
        `:Ji(t,J.Dropdown)?y`
            <select
                .value=${e}
                ${W("input",r=>{const i=Ci(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>y`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:y`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const K0=Pn()({tagName:"book-breadcrumbs",styles:C`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const o=r>=i.length-1,s=i.slice(0,r+1),a=o?"":y`
                      <span class="spacer">&gt;</span>
                  `;return y`
                <${Cn.assign({route:{hash:void 0,search:void 0,paths:[qt.Book,...s]},router:e.router})}>
                    ${n}
                </${Cn}>
                ${a}
            `}):y`
                &nbsp;
            `}}),fc=Pn()({tagName:"book-breadcrumbs-bar",styles:C`
        :host {
            border-bottom: 1px solid
                ${fe["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${fe["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return y`
            ${Zt(!!e.currentSearch,y`
                    &nbsp;
                `,y`
                    <${K0.assign({currentRoute:e.currentRoute,router:e.router})}></${K0}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${W("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await Is({milliseconds:200}),r.value===i&&(r.value?t(new ku({paths:[qt.Search,encodeURIComponent(r.value)]})):t(new ku(bo)))})}
            />
        `}}),Z0=Pn()({tagName:"book-entry-description",styles:C`
        :host {
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${fe["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>y`
                <p>${t}</p>
            `)}}),G0=Pn()({tagName:"book-page-wrapper",styles:C`
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
    `,render({inputs:e}){const t=e.isTopLevel?y`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:y`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[qt.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?qg(e.pageNode.entry.errors):void 0;return r&&console.error(r),y`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Cn.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Cn}>
                    ${r?y`
                              <${ti.assign({message:r.message})}></${ti}>
                          `:y`
                              <${Z0.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Z0}>
                              <${Gs.assign({config:e.pageNode.entry.controls,currentValues:Pf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Gs}>
                          `}
                </div>
            </div>
        `}}),qa=Pn()({tagName:"book-element-example-controls",styles:C`
        :host {
            display: flex;
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[qt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return y`
            <${Cn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Cn}>
        `}}),Y0=Symbol("unset-internal-state"),J0=Pn()({tagName:"book-element-example-viewer",state(){return{isUnset:Y0}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw qg(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Y0&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return y`
                ${Zt(!!t.elementExampleNode.entry.styles,y`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",Yt(r)),console.error(r),y`
                <${ti.assign({message:`${t.elementExampleNode.entry.title} failed: ${Yt(r)}`})}></${ti}>
            `}},options:{allowPolymorphicState:!0}}),H0=Pn()({tagName:"book-element-example-wrapper",styles:C`
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

        ${qa} {
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${qa} {
            color: ${fe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return y`
            <div class="individual-example-wrapper">
                <${qa.assign(zv(e,["currentPageControls"]))}></${qa}>
                <${J0.assign(e)}></${J0}>
            </div>
        `}});function Kw(e,t,n,r){const i=Tc(n,r),o=[];if(i){const s=Kw(e,t,i,r);s&&o.push(s)}if(co(n,gt.Page)&&!e.includes(n)){const s=Pf(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:s,breadcrumbs:cn(s,()=>n.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function SI({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:o}){if(!e.length&&r)return[y`
                No results
            `];const s=S.isLengthAtLeast(e,1)?Kw(e,i,e[0],o):void 0,a=s&&Object.values(s.config).length&&S.isLengthAtLeast(e,1)?y`
                  <${Gs.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Gs}>
              `:se,u=U8(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(co(l,gt.Page))return y`
                    <${G0.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${G0}>
                `;if(co(l,gt.ElementExample)){const c=Pf(i,l.fullUrlBreadcrumbs.slice(0,-1));return y`
                    <${H0.assign({elementExampleNode:l,currentPageControls:c,router:n})}
                        class="inline-entry ${Xt({"block-entry":l.entry.isVertical})}"
                    ></${H0}>
                `}else return co(l,gt.Root)?se:y`
                    <${ti.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${ti}>
                `});return[a,u]}const to=Pn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:C`
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

        ${fc} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Ar["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:dt()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const o=Mc(e.currentRoute.paths),s=SI({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return y`
            <${fc.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${fc}>

            ${Zt(e.showLoading,y`
                    <div
                        ${Au(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${U.assign({icon:Zs})}></${U}>
                    </div>
                    ${Zt(!!r.lastElement,y`
                            ${r.lastElement}
                            <slot name=${rr.Footer}></slot>
                        `)}
                `,y`
                    <div
                        ${Au(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${rr.Footer}></slot>
                `)}
        `}});function II(e,t,n){const r=X0(e,t);return r.length?r:(n(bo),X0(e,bo.paths))}function X0(e,t){return e.filter(n=>tD({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const dc=Vd()({tagName:"element-book-app",state(){return{currentRoute:bo,router:void 0,loading:!0,colors:{config:void 0,theme:M0(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:dt()},styles:C`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${fe["element-book-page-background-color"].value};
            color: ${fe["element-book-page-foreground-color"].value};
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

        ${to} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${yr} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await Q0(e,Mc(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const f=s(c);return!S.jsonEquals(e.currentRoute,f)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(S.isTruthy).join(" - "))}function l(c){if(!a(c))return;const f=s(c);e.router?e.router.setRoute(f):r({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=AS(t.internalRouterConfig.basePath);r({router:A}),A.listen(!0,I=>{r({currentRoute:I})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!S.jsonEquals(c,e.colors.config)){const A=M0(c);r({colors:{config:c,theme:A}}),PD(n,A)}const f=t._debug??!1,d=sD({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:ny(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const g=Mc(e.currentRoute.paths),D=(g?hS({flattenedNodes:d.flattenedNodes,searchQuery:g}):void 0)??II(d.flattenedNodes,e.currentRoute.paths,l);u(D[0]?.entry.title);const k=e.treeBasedControls?.controls;return k?(t._debug&&console.info({currentControls:k}),y`
                <div
                    class="root"
                    ${W(ku,async A=>{const I=A.detail;if(!a(I))return;if(r({loading:!0}),l(I),!(n.shadowRoot.querySelector(yr.tagName)instanceof yr))throw new TypeError(`Failed to find child '${yr.tagName}'`);await Q0(n,g,e.currentRoute)})}
                    ${W(Gs.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const I=uD(k,A.detail.fullUrlBreadcrumbs,A.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:I}})})}
                >
                    <${yr.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:g?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${rr.NavHeader}
                            slot=${rr.NavHeader}
                        ></slot>
                    </${yr}>
                    <${to.assign({controls:k,currentNodes:D,currentRoute:e.currentRoute,debug:f,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${W(to.events.loadingRender,async A=>{await sf();const I=n.shadowRoot.querySelector(to.tagName);I?I.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${to.tagName}' for scrolling.`),await sf(),r({loading:!A.detail})})}
                    >
                        <slot
                            name=${rr.Footer}
                            slot=${rr.Footer}
                        ></slot>
                    </${to}>
                </div>
            `):y`
                    <${ti.assign({message:"Failed to generate page controls."})}></${ti}>
                `}catch(c){return console.error(c),y`
                <p class="error">${Yt(c)}</p>
            `}}});async function Q0(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(yr.tagName);if(!(r instanceof yr))throw new TypeError(`Failed to find child '${yr.tagName}'`);await FI(r)}const Qe=Ie({title:"Elements",parent:void 0}),Zw=Ie({title:"Styles",parent:void 0}),NI=Ie({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:J.Color,initValue:""},"Fill Color":{controlType:J.Color,initValue:""},"Stroke Width":{controlType:J.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(uf).forEach(t=>{e({title:t.name,styles:C`
                    :host(:hover) ${U} {
                        background-color: #f2f2f2;
                    }

                    ${U} {
                        padding: 8px;
                        border-radius: ${Sn["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=C`
                        ${b["vira-icon-fill-color"].name}: ${Ge(n["Fill Color"]||"inherit")};
                        ${b["vira-icon-stroke-color"].name}: ${Ge(n["Stroke Color"]||"inherit")};
                        ${b["vira-icon-stroke-width"].name}: ${Ge(n["Stroke Width"]?Zg(n["Stroke Width"]):"inherit")};
                    `;return y`
                        <${U.assign({icon:t})} style=${r}></${U}>
                    `}})})}}),TI=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:y`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:C`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:C`
            ${on} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],MI=Ie({title:on.tagName,parent:Qe,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:J.Text,initValue:""}},defineExamples({defineExample:e}){TI.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?y`
                            <${on.assign(r)}>
                                ${t.customTemplate}
                            </${on}>
                        `:y`
                            <${on.assign(r)}></${on}>
                        `}})})}}),df=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new Zd({sanitizeRoute(e){return e}})}}],PI=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:Hd.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...df,{id:"long",label:y`
                        <${on.assign({selected:!1})}>
                            <div
                                style=${C`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${on}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:Yr.Both,items:[...df,{id:"long",label:y`
                        <${on.assign({selected:!1})}>
                            <div
                                style=${C`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${on}>
                    `}]}}],OI=Ie({parent:Qe,title:zr.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){PI.forEach(t=>{e({title:t.title,styles:C`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return y`
                        <${zr.assign({items:df,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${zr}>
                    `}})})}}),Gw=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],BI=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...Gw,{id:4,label:"link here",route:{route:{paths:["test"]},router:new Zd({sanitizeRoute(e){return e}})}}]}}],RI=Ie({parent:Qe,title:xs.tagName,defineExamples({defineExample:e}){BI.forEach(t=>{e({title:t.title,render(){return y`
                        <${xs.assign({isMultiSelect:!1,navController:void 0,items:Gw,selected:[],...t.inputs})}></${xs}>
                    `}})})}}),Yw=[];_n(Su).forEach(e=>{_n(Hd).forEach(t=>{Yw.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const LI=Ie({parent:Qe,title:Cs.tagName,defineExamples({defineExample:e}){Yw.forEach(t=>{e({title:t.title,styles:C`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return y`
                        <${Cs.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${Cs}>
                    `}})})}}),UI=Ie({parent:Qe,title:me.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:C`
                ${me} {
                    ${Mo["vira-focus-outline-border-radius"].name}: 0;
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
            `,render(){return y`
                    <${me.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${me.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>Pop up!</div>
                    </${me}>
                `}}),e({title:"long clipped content",styles:C`
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
            `,render(){return y`
                    <${me.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${me}>
                `}}),e({title:"long right anchored content",styles:C`
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
            `,render(){return y`
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Yr.Right})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${me}>
                `}}),e({title:"long left anchored content",styles:C`
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
            `,render(){return y`
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Yr.Left})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${me}>
                `}}),e({title:"short right anchored content",styles:C`
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
            `,render(){return y`
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Yr.Right})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>not long</div>
                    </${me}>
                `}})}}),jI=[{title:"menu shadow",styles:po.menuShadow},{title:"menu shadow reversed",styles:po.menuShadowReversed},{title:"modal",styles:po.modal}],_I=Ie({parent:Zw,title:"Shadows",defineExamples({defineExample:e}){jI.forEach(t=>{e({title:t.title,styles:C`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${t.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return y`
                        <div class="shadow-block"></div>
                    `}})})}}),VI=Ie({parent:Qe,title:Me.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return y`
                    <${Me.assign({text:"Text here",bold:!1})}></${Me}>
                `}}),e({title:"Bold",render(){return y`
                    <${Me.assign({text:"Text here",bold:!0})}></${Me}>
                `}}),e({title:"Dynamic",render({controls:t}){return y`
                    <${Me.assign({text:"Text here",bold:t.bolded})}></${Me}>
                `}}),e({title:"Resized",styles:C`
                ${Me} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return y`
                    <${Me.assign({text:"Not Bolded",bold:!1})}></${Me}>
                    <${Me.assign({text:"Bolded",bold:!0})}></${Me}>
                `}}),e({title:"Alignment",styles:C`
                ${Me} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return y`
                    <${Me.assign({text:"Not Bolded",bold:!1})}></${Me}>
                    <${Me.assign({text:"Bolded",bold:!0})}></${Me}>
                `}}),e({title:"Stylized",styles:C`
                ${Me} {
                    text-decoration: underline;
                }
            `,render(){return y`
                    <${Me.assign({text:"Not Bolded",bold:!1})}></${Me}>
                    <${Me.assign({text:"Bolded",bold:!0})}></${Me}>
                `}})}}),WI=Ie({parent:Qe,title:tt.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:J.Color,initValue:tt.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:J.Color,initValue:tt.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:J.Color,initValue:tt.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:J.Color,initValue:tt.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const o=r??C``;e({title:n,styles:o,render({controls:s}){const a=C`
                        ${tt.cssVars["vira-button-primary-color"].name}: ${Ge(s["Primary color"]||"inherit")};
                        ${tt.cssVars["vira-button-secondary-color"].name}: ${Ge(s["Secondary color"]||"inherit")};
                        ${tt.cssVars["vira-button-primary-hover-color"].name}: ${Ge(s["Hover color"]||"inherit")};
                        ${tt.cssVars["vira-button-primary-active-color"].name}: ${Ge(s["Active color"]||"inherit")};
                    `;return y`
                        <${tt.assign({text:"hello",...i})}
                            style=${a}
                        ></${tt}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:As}}),t({title:"with expanding icon",inputs:{icon:As,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Uw.Outline}}),t({title:"only icon",inputs:{icon:As,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:C`
                ${tt} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:C`
                ${tt} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:C`
                :host {
                    ${tt.cssVars["vira-button-primary-color"].name}: pink;
                    ${tt.cssVars["vira-button-secondary-color"].name}: purple;
                    ${tt.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${tt.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return y`
                    <${tt.assign({text:"hello"})}></${tt}>
                `}})}}),qI=[{title:"basic"},{title:"success",inputs:{cardState:af.Success}},{title:"error",inputs:{cardState:af.Error}},{title:"long",content:y`
            <p
                style=${C`
                    ${Yd}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],zI=Ie({parent:Qe,title:uc.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){qI.forEach(t=>{e({title:t.title,render(){return y`
                        <${uc.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${uc}>
                    `}})})}}),KI=Ie({parent:Qe,title:Pe.tagName,controls:{Checked:{controlType:J.Checkbox,initValue:!1},Disabled:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:n}){return y`
                    <${Pe.assign({value:t.checked})}
                        ${W(Pe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Pe}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:n}){return y`
                    <${Pe.assign({value:t.checked})}
                        ${W(Pe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Pe}>
                `}}),e({title:"disabled unchecked",render(){return y`
                    <${Pe.assign({value:!1,disabled:!0})}></${Pe}>
                `}}),e({title:"disabled checked",render(){return y`
                    <${Pe.assign({value:!0,disabled:!0})}></${Pe}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return y`
                    <${Pe.assign({value:t.Checked,disabled:t.Disabled})}></${Pe}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return y`
                    <${Pe.assign({value:!0})}></${Pe}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:n}){return y`
                    <${Pe.assign({value:t.checked,label:"label goes here"})}
                        ${W(Pe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Pe}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:C`
                ${Pe} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:n}){return y`
                    <${Pe.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${W(Pe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Pe}>
                `}})}}),ZI=Ie({title:dr.tagName,parent:Qe,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>y`
                        <${dr.assign({expanded:!!n.expandedStates[i]})}
                            ${W(dr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${dr.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${W("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Zt(!!n.showMoreStates[i],y`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${dr}>
                    `)}}),e({title:"wider examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>y`
                        <${dr.assign({expanded:!!n.expandedStates[i]})}
                            ${W(dr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${dr.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${W("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Zt(!!n.showMoreStates[i],y`
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
                    `)}})}}),Fs=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],GI=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Fs,{id:42,label:y`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Fs,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:C`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:C`
            ${ys} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:kn}}],YI=Ie({title:ys.tagName,parent:Qe,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["",...Fs.map(e=>e.label)]},Prefix:{controlType:J.Text,initValue:""},"Force State":{controlType:J.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:J.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:J.Dropdown,initValue:"",options:["",...Object.keys(uf)]},Disabled:{controlType:J.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:J.Text,initValue:"Select something"}},defineExamples({defineExample:e}){GI.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Fs,selected:i.Selected?[Fs.find(s=>s.label===i.Selected)?.id].filter(S.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?uf[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return y`
                        <${ys.assign(o)}
                            ${W(ys.events.selectedChange,s=>{r({selected:s.detail})})}
                        ></${ys}>
                    `}})})}}),JI=Ie({parent:Qe,title:cc.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${cc}>Error Content</${cc}>
                `}})}}),HI=Ie({title:U.tagName,parent:Qe,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${U.assign({icon:kn})}></${U}>
                `}}),e({title:"using createColoredIcon",render(){return y`
                    <${U.assign({icon:_0(kn,{"vira-icon-stroke-color":"red"})})}></${U}>
                `}}),e({title:"fit container",styles:C`
                ${U} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return y`
                    <${U.assign({icon:_0(kn,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${U}>
                `}})}}),XI=Ie({title:Lr.tagName,parent:Qe,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:C`
                    border-radius: 32px;
                `,loadingSlot:y`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${U.assign({icon:Zs,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${U}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:C`
                    border-radius: 32px;
                `,errorSlot:y`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${U.assign({icon:Iu,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${U}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:C`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:C`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:C`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:y`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${U.assign({icon:Zs,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${U}>
                    </div>
                `,errorSlot:y`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${U.assign({icon:Iu,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${U}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:C`
                    ${Lr} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||C``}
                    }

                    ${n.allowReload?C`
                              ${Lr} {
                                  cursor: pointer;
                              }

                              ${Lr}:hover {
                                  border-color: #0055ff;
                              }
                          `:C``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:n.inputs.imageUrl}},render({state:r,updateState:i}){return y`
                        <${Lr.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${W("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${Uu()}`})})}
                        >
                            ${n.loadingSlot?y`
                                      <div class="slot-wrapper" slot=${Lr.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:se}${n.errorSlot?y`
                                      <div class="slot-wrapper" slot=${Lr.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:se}
                        </${Lr}>
                    `}})})}}),QI=Ie({title:Vt.tagName,parent:Qe,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:J.Color,initValue:ee["vira-form-foreground-color"].default},"Placeholder color":{controlType:J.Color,initValue:ee["vira-form-placeholder-color"].default},"Border color":{controlType:J.Color,initValue:ee["vira-form-border-color"].default},"Focus color":{controlType:J.Color,initValue:Mo["vira-focus-outline-color"].default},"Selection color":{controlType:J.Color,initValue:ee["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:o}){e({title:i,styles:C`
                    ${r||C``}
                `,state(){return{value:o.value}},render({state:s,updateState:a,controls:u}){const l={[String(ee["vira-form-foreground-color"].name)]:u["Text color"],[String(ee["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(ee["vira-form-border-color"].name)]:u["Border color"],[String(Mo["vira-focus-outline-color"].name)]:u["Focus color"],[String(ee["vira-form-text-selection-color"].name)]:u["Selection color"]},c=cn(l,(d,g)=>g||"inherit"),f=Object.entries(c).map(([d,g])=>[d,g].join(": ")+";").join(`
`);return y`
                        <${Vt.assign({...o,value:s.value})}
                            style=${f}
                            ${W(Vt.events.valueChange,d=>{a({value:d.detail}),console.info("changed:",d.detail)})}
                        ></${Vt}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:kn}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:C`
                    ${Vt} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:kn}},{title:"taller height",styles:C`
                    ${Vt} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:kn}},{title:"shorter height",styles:C`
                    ${Vt} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:kn}},{title:"max width",styles:C`
                    ${Vt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:C`
                    ${Vt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:ff.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:ff.Email,attributePassthrough:{autocomplete:"username"}}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:C`
                    ${Vt} {
                        width: unset;
                    }
                `}].forEach(t)}}),eN=Ie({title:oo.tagName,parent:Qe,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:J.Color,initValue:""},"Hover color":{controlType:J.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const o=C`
                        ${oo.cssVars["vira-link-hover-color"].name}: ${Ge(i["Hover color"]||"inherit")};
                        color: ${Ge(i["CSS Color"]||"inherit")};
                    `;return y`
                        <${oo.assign(r)} style=${o}>My Link</${oo}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),tN=Ie({title:mr.tagName,parent:Qe,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:n}){return y`
                    <button
                        ${W("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${mr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(mr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${mr}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:C`
                ${mr} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${mr.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:n}){return y`
                    <button
                        ${W("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${mr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(mr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${mr}>
                `}})}}),nN=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:C`
            :host {
                ${Nt.cssVars["vira-progress-background-color"].name}: red;
                ${Nt.cssVars["vira-progress-foreground-color"].name}: black;
                ${Nt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Nt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:C`
            :host {
                ${Nt.cssVars["vira-progress-background-color"].name}: red;
                ${Nt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Nt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Nt} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:C`
            :host {
                ${Nt.cssVars["vira-progress-background-color"].name}: red;
                ${Nt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Nt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Nt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],rN=Ie({parent:Qe,title:Nt.tagName,defineExamples({defineExample:e}){nN.forEach(t=>{e({title:t.title,styles:C`
                    ${t.styles||C``}
                `,render(){return y`
                        <${Nt.assign({value:50,...t.inputs})}></${Nt}>
                    `}})})}}),Dn=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],iN=[{title:"basic",inputs:{options:Dn}},{title:"with really long option",inputs:{options:[...Dn,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:Dn,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:Dn,disabled:!0}},{title:"error",inputs:{options:Dn,hasError:!0}},{title:"with icon",inputs:{options:Dn,icon:kn}},{title:"custom width",inputs:{options:Dn},styles:C`
            ${Kr} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:Dn,icon:kn},styles:C`
            ${Kr} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:Dn,icon:kn},styles:C`
            ${Kr} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:Dn,label:"Pick an option"}},{title:"with long label",inputs:{options:Dn,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:Dn,label:"Pick a really really really really long option"},styles:C`
            ${Kr} {
                width: unset;
            }
        `}],oN=Ie({parent:Qe,title:Kr.tagName,defineExamples({defineExample:e}){iN.forEach(t=>{e({title:t.title,styles:C`
                    ${t.styles||C``}
                `,state(){return{selected:void 0}},render({state:n,updateState:r}){return y`
                        <${Kr.assign({...t.inputs,value:n.selected??t.inputs.value})}
                            ${W(Kr.events.valueChange,i=>{r({selected:i.detail})})}
                        ></${Kr}>
                    `}})})}}),sN=[Qe,NI,Zw],aN=[VI,WI,zI,KI,ZI,YI,JI,HI,XI,QI,eN,MI,RI,OI,tN,LI,UI,rN,oN,_I].sort((e,t)=>e.title.localeCompare(t.title)),uN=[...sN,...aN];Vd()({tagName:"vira-book-app",styles:C`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${dc} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return y`
            <${dc.assign({internalRouterConfig:{basePath:zd("vira"),useInternalRouter:!0},pages:uN,themeColor:"#33ccff"})}>
                <h1 slot=${rr.NavHeader}>Vira</h1>
            </${dc}>
        `}});
