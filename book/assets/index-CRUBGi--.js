(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var wt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(wt||(wt={}));function op(e,t=n=>n){const n=new Map;return e.filter(r=>{const o=t(r);return n.get(o)?!1:(n.set(o,r),!0)})}class gf{diff(t,n,r={}){let o;typeof r=="function"?(o=r,r={}):"callback"in r&&(o=r.callback);const i=this.castInput(t,r),s=this.castInput(n,r),a=this.removeEmpty(this.tokenize(i,r)),u=this.removeEmpty(this.tokenize(s,r));return this.diffWithOptionsObj(a,u,r,o)}diffWithOptionsObj(t,n,r,o){var i;const s=N=>{if(N=this.postProcess(N,r),o){setTimeout(function(){o(N)},0);return}else return N},a=n.length,u=t.length;let l=1,c=a+u;r.maxEditLength!=null&&(c=Math.min(c,r.maxEditLength));const f=(i=r.timeout)!==null&&i!==void 0?i:1/0,d=Date.now()+f,g=[{oldPos:-1,lastComponent:void 0}];let x=this.extractCommon(g[0],n,t,0,r);if(g[0].oldPos+1>=u&&x+1>=a)return s(this.buildValues(g[0].lastComponent,n,t));let D=-1/0,k=1/0;const A=()=>{for(let N=Math.max(D,-l);N<=Math.min(k,l);N+=2){let j;const q=g[N-1],G=g[N+1];q&&(g[N-1]=void 0);let Le=!1;if(G){const rt=G.oldPos-N;Le=G&&0<=rt&&rt<a}const Ct=q&&q.oldPos+1<u;if(!Le&&!Ct){g[N]=void 0;continue}if(!Ct||Le&&q.oldPos<G.oldPos?j=this.addToPath(G,!0,!1,0,r):j=this.addToPath(q,!1,!0,1,r),x=this.extractCommon(j,n,t,N,r),j.oldPos+1>=u&&x+1>=a)return s(this.buildValues(j.lastComponent,n,t))||!0;g[N]=j,j.oldPos+1>=u&&(k=Math.min(k,N-1)),x+1>=a&&(D=Math.max(D,N+1))}l++};if(o)(function N(){setTimeout(function(){if(l>c||Date.now()>d)return o(void 0);A()||N()},0)})();else for(;l<=c&&Date.now()<=d;){const N=A();if(N)return N}}addToPath(t,n,r,o,i){const s=t.lastComponent;return s&&!i.oneChangePerToken&&s.added===n&&s.removed===r?{oldPos:t.oldPos+o,lastComponent:{count:s.count+1,added:n,removed:r,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:n,removed:r,previousComponent:s}}}extractCommon(t,n,r,o,i){const s=n.length,a=r.length;let u=t.oldPos,l=u-o,c=0;for(;l+1<s&&u+1<a&&this.equals(r[u+1],n[l+1],i);)l++,u++,c++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!i.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const s=o.length;let a=0,u=0,l=0;for(;a<s;a++){const c=o[a];if(c.removed)c.value=this.join(r.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let f=n.slice(u,u+c.count);f=f.map(function(d,g){const x=r[l+g];return x.length>d.length?x:d}),c.value=this.join(f)}else c.value=this.join(n.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return o}}function om(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function im(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function yc(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function wc(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function ns(e,t){return yc(e,t,"")}function Aa(e,t){return wc(e,t,"")}function sm(e,t){return t.slice(0,rb(e,t))}function rb(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);const o=Array(r);let i=0;o[0]=0;for(let s=1;s<r;s++){for(t[s]==t[i]?o[s]=o[i]:o[s]=i;i>0&&t[s]!=t[i];)i=o[i];t[s]==t[i]&&i++}i=0;for(let s=n;s<e.length;s++){for(;i>0&&e[s]!=t[i];)i=o[i];e[s]==t[i]&&i++}return i}function rs(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function Rr(e){const t=e.match(/^\s*/);return t?t[0]:""}const iu="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",ob=new RegExp(`[${iu}]+|\\s+|[^${iu}]`,"ug");class ib extends gf{equals(t,n,r){return r.ignoreCase&&(t=t.toLowerCase(),n=n.toLowerCase()),t.trim()===n.trim()}tokenize(t,n={}){let r;if(n.intlSegmenter){const s=n.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(s.segment(t),a=>a.segment)}else r=t.match(ob)||[];const o=[];let i=null;return r.forEach(s=>{/\s/.test(s)?i==null?o.push(s):o.push(o.pop()+s):i!=null&&/\s/.test(i)?o[o.length-1]==i?o.push(o.pop()+s):o.push(i+s):o.push(s),i=s}),o}join(t){return t.map((n,r)=>r==0?n:n.replace(/^\s+/,"")).join("")}postProcess(t,n){if(!t||n.oneChangePerToken)return t;let r=null,o=null,i=null;return t.forEach(s=>{s.added?o=s:s.removed?i=s:((o||i)&&am(r,i,o,s),r=s,o=null,i=null)}),(o||i)&&am(r,i,o,null),t}}const sb=new ib;function ab(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?cb(e,t,n):sb.diff(e,t,n)}function am(e,t,n,r){if(t&&n){const o=Rr(t.value),i=rs(t.value),s=Rr(n.value),a=rs(n.value);if(e){const u=om(o,s);e.value=wc(e.value,s,u),t.value=ns(t.value,u),n.value=ns(n.value,u)}if(r){const u=im(i,a);r.value=yc(r.value,a,u),t.value=Aa(t.value,u),n.value=Aa(n.value,u)}}else if(n){if(e){const o=Rr(n.value);n.value=n.value.substring(o.length)}if(r){const o=Rr(r.value);r.value=r.value.substring(o.length)}}else if(e&&r){const o=Rr(r.value),i=Rr(t.value),s=rs(t.value),a=om(o,i);t.value=ns(t.value,a);const u=im(ns(o,a),s);t.value=Aa(t.value,u),r.value=yc(r.value,o,u),e.value=wc(e.value,o,o.slice(0,o.length-u.length))}else if(r){const o=Rr(r.value),i=rs(t.value),s=sm(i,o);t.value=Aa(t.value,s)}else if(e){const o=rs(e.value),i=Rr(t.value),s=sm(o,i);t.value=ns(t.value,s)}}class ub extends gf{tokenize(t){const n=new RegExp(`(\\r?\\n)|[${iu}]+|[^\\S\\n\\r]+|[^${iu}]`,"ug");return t.match(n)||[]}}const lb=new ub;function cb(e,t,n){return lb.diff(e,t,n)}class fb extends gf{constructor(){super(...arguments),this.tokenize=hb}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const db=new fb;function mb(e,t,n){return db.diff(e,t,n)}function hb(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let o=0;o<r.length;o++){const i=r[o];o%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function um(e){return ip(e,new Map)}function ip(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((r,o)=>r[0].localeCompare(o[0])).forEach(([r,o])=>{const i=ip(o,t);n[r]=i}),n}else return e}var pb=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,gb=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,yb=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Cl={Space_Separator:pb,ID_Start:gb,ID_Continue:yb},je={isSpaceSeparator(e){return typeof e=="string"&&Cl.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Cl.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Cl.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let bc,Rt,br,su,Jr,Kn,lt,yf,vs;var wb=function(t,n){bc=String(t),Rt="start",br=[],su=0,Jr=1,Kn=0,lt=void 0,yf=void 0,vs=void 0;do lt=bb(),Db[Rt]();while(lt.type!=="eof");return typeof n=="function"?$c({"":vs},"",n):vs};function $c(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=String(o),s=$c(r,i,n);s===void 0?delete r[i]:Object.defineProperty(r,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in r){const i=$c(r,o,n);i===void 0?delete r[o]:Object.defineProperty(r,o,{value:i,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let Q,Y,hs,pr,oe;function bb(){for(Q="default",Y="",hs=!1,pr=1;;){oe=Ar();const e=sp[Q]();if(e)return e}}function Ar(){if(bc[su])return String.fromCodePoint(bc.codePointAt(su))}function F(){const e=Ar();return e===`
`?(Jr++,Kn=0):e?Kn+=e.length:Kn++,e&&(su+=e.length),e}const sp={default(){switch(oe){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":F();return;case"/":F(),Q="comment";return;case void 0:return F(),De("eof")}if(je.isSpaceSeparator(oe)){F();return}return sp[Rt]()},comment(){switch(oe){case"*":F(),Q="multiLineComment";return;case"/":F(),Q="singleLineComment";return}throw Ee(F())},multiLineComment(){switch(oe){case"*":F(),Q="multiLineCommentAsterisk";return;case void 0:throw Ee(F())}F()},multiLineCommentAsterisk(){switch(oe){case"*":F();return;case"/":F(),Q="default";return;case void 0:throw Ee(F())}F(),Q="multiLineComment"},singleLineComment(){switch(oe){case`
`:case"\r":case"\u2028":case"\u2029":F(),Q="default";return;case void 0:return F(),De("eof")}F()},value(){switch(oe){case"{":case"[":return De("punctuator",F());case"n":return F(),ho("ull"),De("null",null);case"t":return F(),ho("rue"),De("boolean",!0);case"f":return F(),ho("alse"),De("boolean",!1);case"-":case"+":F()==="-"&&(pr=-1),Q="sign";return;case".":Y=F(),Q="decimalPointLeading";return;case"0":Y=F(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),Q="decimalInteger";return;case"I":return F(),ho("nfinity"),De("numeric",1/0);case"N":return F(),ho("aN"),De("numeric",NaN);case'"':case"'":hs=F()==='"',Y="",Q="string";return}throw Ee(F())},identifierNameStartEscape(){if(oe!=="u")throw Ee(F());F();const e=vc();switch(e){case"$":case"_":break;default:if(!je.isIdStartChar(e))throw lm();break}Y+=e,Q="identifierName"},identifierName(){switch(oe){case"$":case"_":case"‌":case"‍":Y+=F();return;case"\\":F(),Q="identifierNameEscape";return}if(je.isIdContinueChar(oe)){Y+=F();return}return De("identifier",Y)},identifierNameEscape(){if(oe!=="u")throw Ee(F());F();const e=vc();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!je.isIdContinueChar(e))throw lm();break}Y+=e,Q="identifierName"},sign(){switch(oe){case".":Y=F(),Q="decimalPointLeading";return;case"0":Y=F(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),Q="decimalInteger";return;case"I":return F(),ho("nfinity"),De("numeric",pr*(1/0));case"N":return F(),ho("aN"),De("numeric",NaN)}throw Ee(F())},zero(){switch(oe){case".":Y+=F(),Q="decimalPoint";return;case"e":case"E":Y+=F(),Q="decimalExponent";return;case"x":case"X":Y+=F(),Q="hexadecimal";return}return De("numeric",pr*0)},decimalInteger(){switch(oe){case".":Y+=F(),Q="decimalPoint";return;case"e":case"E":Y+=F(),Q="decimalExponent";return}if(je.isDigit(oe)){Y+=F();return}return De("numeric",pr*Number(Y))},decimalPointLeading(){if(je.isDigit(oe)){Y+=F(),Q="decimalFraction";return}throw Ee(F())},decimalPoint(){switch(oe){case"e":case"E":Y+=F(),Q="decimalExponent";return}if(je.isDigit(oe)){Y+=F(),Q="decimalFraction";return}return De("numeric",pr*Number(Y))},decimalFraction(){switch(oe){case"e":case"E":Y+=F(),Q="decimalExponent";return}if(je.isDigit(oe)){Y+=F();return}return De("numeric",pr*Number(Y))},decimalExponent(){switch(oe){case"+":case"-":Y+=F(),Q="decimalExponentSign";return}if(je.isDigit(oe)){Y+=F(),Q="decimalExponentInteger";return}throw Ee(F())},decimalExponentSign(){if(je.isDigit(oe)){Y+=F(),Q="decimalExponentInteger";return}throw Ee(F())},decimalExponentInteger(){if(je.isDigit(oe)){Y+=F();return}return De("numeric",pr*Number(Y))},hexadecimal(){if(je.isHexDigit(oe)){Y+=F(),Q="hexadecimalInteger";return}throw Ee(F())},hexadecimalInteger(){if(je.isHexDigit(oe)){Y+=F();return}return De("numeric",pr*Number(Y))},string(){switch(oe){case"\\":F(),Y+=$b();return;case'"':if(hs)return F(),De("string",Y);Y+=F();return;case"'":if(!hs)return F(),De("string",Y);Y+=F();return;case`
`:case"\r":throw Ee(F());case"\u2028":case"\u2029":Eb(oe);break;case void 0:throw Ee(F())}Y+=F()},start(){switch(oe){case"{":case"[":return De("punctuator",F())}Q="value"},beforePropertyName(){switch(oe){case"$":case"_":Y=F(),Q="identifierName";return;case"\\":F(),Q="identifierNameStartEscape";return;case"}":return De("punctuator",F());case'"':case"'":hs=F()==='"',Q="string";return}if(je.isIdStartChar(oe)){Y+=F(),Q="identifierName";return}throw Ee(F())},afterPropertyName(){if(oe===":")return De("punctuator",F());throw Ee(F())},beforePropertyValue(){Q="value"},afterPropertyValue(){switch(oe){case",":case"}":return De("punctuator",F())}throw Ee(F())},beforeArrayValue(){if(oe==="]")return De("punctuator",F());Q="value"},afterArrayValue(){switch(oe){case",":case"]":return De("punctuator",F())}throw Ee(F())},end(){throw Ee(F())}};function De(e,t){return{type:e,value:t,line:Jr,column:Kn}}function ho(e){for(const t of e){if(Ar()!==t)throw Ee(F());F()}}function $b(){switch(Ar()){case"b":return F(),"\b";case"f":return F(),"\f";case"n":return F(),`
`;case"r":return F(),"\r";case"t":return F(),"	";case"v":return F(),"\v";case"0":if(F(),je.isDigit(Ar()))throw Ee(F());return"\0";case"x":return F(),vb();case"u":return F(),vc();case`
`:case"\u2028":case"\u2029":return F(),"";case"\r":return F(),Ar()===`
`&&F(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Ee(F());case void 0:throw Ee(F())}return F()}function vb(){let e="",t=Ar();if(!je.isHexDigit(t)||(e+=F(),t=Ar(),!je.isHexDigit(t)))throw Ee(F());return e+=F(),String.fromCodePoint(parseInt(e,16))}function vc(){let e="",t=4;for(;t-- >0;){const n=Ar();if(!je.isHexDigit(n))throw Ee(F());e+=F()}return String.fromCodePoint(parseInt(e,16))}const Db={start(){if(lt.type==="eof")throw po();Al()},beforePropertyName(){switch(lt.type){case"identifier":case"string":yf=lt.value,Rt="afterPropertyName";return;case"punctuator":Fa();return;case"eof":throw po()}},afterPropertyName(){if(lt.type==="eof")throw po();Rt="beforePropertyValue"},beforePropertyValue(){if(lt.type==="eof")throw po();Al()},beforeArrayValue(){if(lt.type==="eof")throw po();if(lt.type==="punctuator"&&lt.value==="]"){Fa();return}Al()},afterPropertyValue(){if(lt.type==="eof")throw po();switch(lt.value){case",":Rt="beforePropertyName";return;case"}":Fa()}},afterArrayValue(){if(lt.type==="eof")throw po();switch(lt.value){case",":Rt="beforeArrayValue";return;case"]":Fa()}},end(){}};function Al(){let e;switch(lt.type){case"punctuator":switch(lt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=lt.value;break}if(vs===void 0)vs=e;else{const t=br[br.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,yf,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")br.push(e),Array.isArray(e)?Rt="beforeArrayValue":Rt="beforePropertyName";else{const t=br[br.length-1];t==null?Rt="end":Array.isArray(t)?Rt="afterArrayValue":Rt="afterPropertyValue"}}function Fa(){br.pop();const e=br[br.length-1];e==null?Rt="end":Array.isArray(e)?Rt="afterArrayValue":Rt="afterPropertyValue"}function Ee(e){return au(e===void 0?`JSON5: invalid end of input at ${Jr}:${Kn}`:`JSON5: invalid character '${ap(e)}' at ${Jr}:${Kn}`)}function po(){return au(`JSON5: invalid end of input at ${Jr}:${Kn}`)}function lm(){return Kn-=5,au(`JSON5: invalid identifier character at ${Jr}:${Kn}`)}function Eb(e){console.warn(`JSON5: '${ap(e)}' in strings is not valid ECMAScript; consider escaping`)}function ap(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function au(e){const t=new SyntaxError(e);return t.lineNumber=Jr,t.columnNumber=Kn,t}var xb=function(t,n,r){const o=[];let i="",s,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){s=[];for(const D of n){let k;typeof D=="string"?k=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&(k=String(D)),k!==void 0&&s.indexOf(k)<0&&s.push(k)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),c("",{"":t});function c(D,k){let A=k[D];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(D):typeof A.toJSON=="function"&&(A=A.toJSON(D))),a&&(A=a.call(k,D,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return f(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?x(A):d(A)}function f(D){const k={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let N="";for(let q=0;q<D.length;q++){const G=D[q];switch(G){case"'":case'"':k[G]++,N+=G;continue;case"\0":if(je.isDigit(D[q+1])){N+="\\x00";continue}}if(A[G]){N+=A[G];continue}if(G<" "){let Le=G.charCodeAt(0).toString(16);N+="\\x"+("00"+Le).substring(Le.length);continue}N+=G}const j=l||Object.keys(k).reduce((q,G)=>k[q]<k[G]?q:G);return N=N.replace(new RegExp(j,"g"),A[j]),j+N+j}function d(D){if(o.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");o.push(D);let k=i;i=i+u;let A=s||Object.keys(D),N=[];for(const q of A){const G=c(q,D);if(G!==void 0){let Le=g(q)+":";u!==""&&(Le+=" "),Le+=G,N.push(Le)}}let j;if(N.length===0)j="{}";else{let q;if(u==="")q=N.join(","),j="{"+q+"}";else{let G=`,
`+i;q=N.join(G),j=`{
`+i+q+`,
`+k+"}"}}return o.pop(),i=k,j}function g(D){if(D.length===0)return f(D);const k=String.fromCodePoint(D.codePointAt(0));if(!je.isIdStartChar(k))return f(D);for(let A=k.length;A<D.length;A++)if(!je.isIdContinueChar(String.fromCodePoint(D.codePointAt(A))))return f(D);return D}function x(D){if(o.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");o.push(D);let k=i;i=i+u;let A=[];for(let j=0;j<D.length;j++){const q=c(String(j),D);A.push(q!==void 0?q:"null")}let N;if(A.length===0)N="[]";else if(u==="")N="["+A.join(",")+"]";else{let j=`,
`+i,q=A.join(j);N=`[
`+i+q+`,
`+k+"]"}return o.pop(),i=k,N}};const Cb={parse:wb,stringify:xb};var Ab=Cb;const up="__@@augment-vir-undefined-sentinel@@__",Fb=new RegExp(`['"]${up}['"]`);function h(e,t){if(typeof e=="string")return e;try{return Ab.stringify(e,(r,o)=>o===void 0?up:typeof o=="bigint"?Number(o):o,t||void 0).split(Fb).join("undefined")}catch{return String(e)}}var kb=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Zn;(function(e){e.Node="node",e.Web="web"})(Zn||(Zn={}));function Sb(){return kb?Zn.Node:Zn.Web}const lp=Sb();function wf(e){return lp===e}function cp(e){return e[lp]()}function Nb(e,t){const n=typeof t=="string"&&typeof e=="string",r=typeof t!="string"||typeof e!="string",o=r?mb:ab,i=[n?"":`
`,h(t&&typeof t=="object"&&!Array.isArray(t)?um(t):t,4),`
`].join(""),s=[n?"":`
`,h(e&&typeof e=="object"&&!Array.isArray(e)?um(e):e,4),`
`].join(""),a=Ib(r,o(i,s)),u=wf(Zn.Node);return[[u?Er.Green:""," +added (unexpected, added in actual)",u?Er.Red:""," -missing (expected, missing from actual)",u?Er.Reset:""].join(""),n?`

`:`
`,a].join("")}var Er;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Er||(Er={}));var uu;(function(e){e.Added="+",e.Removed="-"})(uu||(uu={}));function Ib(e,t){return e?t.flatMap(r=>r.value.split(`
`).map(o=>cm(o,r)).join(`
`)).join(""):t.map(r=>cm(void 0,r)).join("")}function cm(e,t){if(e!=null&&!e)return"";const n=wf(Zn.Node),r=t.added?uu.Added:t.removed?uu.Removed:e==null?"":" ",o=t.added?Er.Green:t.removed?Er.Red:Er.Reset;return[n?o:"",r,e??t.value,Er.Reset].join("")}function Ie(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Tb(e){return Ie(e).filter(t=>isNaN(Number(t)))}function Vn(e){return Tb(e).map(n=>e[n])}const Mb=[".",":",";",",","?","!"],Pb=new RegExp(`[${Mb.join("")}]+$`);function fm(e){return e.replace(Pb,"")}function Ht(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function Pu(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&fm(r));return t.length===1?t[0]:t.length?t.map((r,o)=>o===t.length-1?r:fm(r)).join(": "):""}function St(e){return e instanceof Error?e:new Error(Ht(e))}function bf(e,t){const n=St(e),r=Pu(t,n.message);try{return n.message=r,n}catch{return new Error(r,{cause:e})}}var v;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(v||(v={}));var R;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(R||(R={}));R.ClientError,R.ServerError;v.Continue+"",R.Information,v.SwitchingProtocols+"",R.Information,v.Processing+"",R.Information,v.EarlyHints+"",R.Information,v.Ok+"",R.Success,v.Created+"",R.Success,v.Accepted+"",R.Success,v.NonAuthoritativeInformation+"",R.Success,v.NoContent+"",R.Success,v.ResetContent+"",R.Success,v.PartialContent+"",R.Success,v.MultiStatus+"",R.Success,v.AlreadyReported+"",R.Success,v.ImUsed+"",R.Success,v.MultipleChoices+"",R.Redirect,v.MovedPermanently+"",R.Redirect,v.Found+"",R.Redirect,v.SeeOther+"",R.Redirect,v.NotModified+"",R.Redirect,v.UseProxy+"",R.Redirect,v.Unused+"",R.Redirect,v.TemporaryRedirect+"",R.Redirect,v.PermanentRedirect+"",R.Redirect,v.BadRequest+"",R.ClientError,v.Unauthorized+"",R.ClientError,v.PaymentRequired+"",R.ClientError,v.Forbidden+"",R.ClientError,v.NotFound+"",R.ClientError,v.MethodNotAllowed+"",R.ClientError,v.NotAcceptable+"",R.ClientError,v.ProxyAuthenticationRequired+"",R.ClientError,v.RequestTimeout+"",R.ClientError,v.Conflict+"",R.ClientError,v.Gone+"",R.ClientError,v.LengthRequired+"",R.ClientError,v.PreconditionFailed+"",R.ClientError,v.PayloadTooLarge+"",R.ClientError,v.UriTooLong+"",R.ClientError,v.UnsupportedMediaType+"",R.ClientError,v.RangeNotSatisfiable+"",R.ClientError,v.ExpectationFailed+"",R.ClientError,v.ImATeapot+"",R.ClientError,v.MisdirectedRequest+"",R.ClientError,v.UnprocessableContent+"",R.ClientError,v.Locked+"",R.ClientError,v.FailedDependency+"",R.ClientError,v.TooEarly+"",R.ClientError,v.UpgradeRequired+"",R.ClientError,v.PreconditionRequired+"",R.ClientError,v.TooManyRequests+"",R.ClientError,v.RequestHeaderFieldsTooLarge+"",R.ClientError,v.UnavailableForLegalReasons+"",R.ClientError,v.InternalServerError+"",R.ServerError,v.NotImplemented+"",R.ServerError,v.BadGateway+"",R.ServerError,v.ServiceUnavailable+"",R.ServerError,v.GatewayTimeout+"",R.ServerError,v.HttpVersionNotSupported+"",R.ServerError,v.VariantAlsoNegotiates+"",R.ServerError,v.InsufficientStorage+"",R.ServerError,v.LoopDetected+"",R.ServerError,v.NotExtended+"",R.ServerError,v.NetworkAuthenticationRequired+"",R.ServerError;const Ga={[R.Information]:[v.Continue,v.SwitchingProtocols,v.Processing,v.EarlyHints],[R.Success]:[v.Ok,v.Created,v.Accepted,v.NonAuthoritativeInformation,v.NoContent,v.ResetContent,v.PartialContent,v.MultiStatus,v.AlreadyReported,v.ImUsed],[R.Redirect]:[v.MultipleChoices,v.MovedPermanently,v.Found,v.SeeOther,v.NotModified,v.UseProxy,v.Unused,v.TemporaryRedirect,v.PermanentRedirect],[R.ClientError]:[v.BadRequest,v.Unauthorized,v.PaymentRequired,v.Forbidden,v.NotFound,v.MethodNotAllowed,v.NotAcceptable,v.ProxyAuthenticationRequired,v.RequestTimeout,v.Conflict,v.Gone,v.LengthRequired,v.PreconditionFailed,v.PayloadTooLarge,v.UriTooLong,v.UnsupportedMediaType,v.RangeNotSatisfiable,v.ExpectationFailed,v.ImATeapot,v.MisdirectedRequest,v.UnprocessableContent,v.Locked,v.FailedDependency,v.TooEarly,v.UpgradeRequired,v.PreconditionRequired,v.TooManyRequests,v.RequestHeaderFieldsTooLarge,v.UnavailableForLegalReasons],[R.ServerError]:[v.InternalServerError,v.NotImplemented,v.BadGateway,v.ServiceUnavailable,v.GatewayTimeout,v.HttpVersionNotSupported,v.VariantAlsoNegotiates,v.InsufficientStorage,v.LoopDetected,v.NotExtended,v.NetworkAuthenticationRequired]};function fp({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class dp{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(St(r))}})}}class Oo extends Error{}class Ob extends Oo{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Bb extends Oo{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Rb extends Oo{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class ii extends Oo{}class mp extends Oo{constructor(t){super(`Invalid unit ${t}`)}}class At extends Oo{}class Lr extends Oo{constructor(){super("Zone is an abstract class")}}const O="numeric",Gn="short",cn="long",lu={year:O,month:O,day:O},hp={year:O,month:Gn,day:O},Lb={year:O,month:Gn,day:O,weekday:Gn},pp={year:O,month:cn,day:O},gp={year:O,month:cn,day:O,weekday:cn},yp={hour:O,minute:O},wp={hour:O,minute:O,second:O},bp={hour:O,minute:O,second:O,timeZoneName:Gn},$p={hour:O,minute:O,second:O,timeZoneName:cn},vp={hour:O,minute:O,hourCycle:"h23"},Dp={hour:O,minute:O,second:O,hourCycle:"h23"},Ep={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:Gn},xp={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:cn},Cp={year:O,month:O,day:O,hour:O,minute:O},Ap={year:O,month:O,day:O,hour:O,minute:O,second:O},Fp={year:O,month:Gn,day:O,hour:O,minute:O},kp={year:O,month:Gn,day:O,hour:O,minute:O,second:O},Ub={year:O,month:Gn,day:O,weekday:Gn,hour:O,minute:O},Sp={year:O,month:cn,day:O,hour:O,minute:O,timeZoneName:Gn},Np={year:O,month:cn,day:O,hour:O,minute:O,second:O,timeZoneName:Gn},Ip={year:O,month:cn,day:O,weekday:cn,hour:O,minute:O,timeZoneName:cn},Tp={year:O,month:cn,day:O,weekday:cn,hour:O,minute:O,second:O,timeZoneName:cn};class Xs{get type(){throw new Lr}get name(){throw new Lr}get ianaName(){return this.name}get isUniversal(){throw new Lr}offsetName(t,n){throw new Lr}formatOffset(t,n){throw new Lr}offset(t){throw new Lr}equals(t){throw new Lr}get isValid(){throw new Lr}}let Fl=null;class Ou extends Xs{static get instance(){return Fl===null&&(Fl=new Ou),Fl}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Wp(t,n,r)}formatOffset(t,n){return Ds(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Dc=new Map;function jb(e){let t=Dc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Dc.set(e,t)),t}const _b={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Vb(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,o,i,s,a,u,l,c]=r;return[s,o,i,a,u,l,c]}function Wb(e,t){const n=e.formatToParts(t),r=[];for(let o=0;o<n.length;o++){const{type:i,value:s}=n[o],a=_b[i];i==="era"?r[a]=s:K(a)||(r[a]=parseInt(s,10))}return r}const kl=new Map;class kr extends Xs{static create(t){let n=kl.get(t);return n===void 0&&kl.set(t,n=new kr(t)),n}static resetCache(){kl.clear(),Dc.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=kr.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Wp(t,n,r,this.name)}formatOffset(t,n){return Ds(this.offset(t),n)}offset(t){if(!this.valid)return NaN;const n=new Date(t);if(isNaN(n))return NaN;const r=jb(this.name);let[o,i,s,a,u,l,c]=r.formatToParts?Wb(r,n):Vb(r,n);a==="BC"&&(o=-Math.abs(o)+1);const d=Ru({year:o,month:i,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let g=+n;const x=g%1e3;return g-=x>=0?x:1e3+x,(d-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let dm={};function qb(e,t={}){const n=JSON.stringify([e,t]);let r=dm[n];return r||(r=new Intl.ListFormat(e,t),dm[n]=r),r}const Ec=new Map;function xc(e,t={}){const n=JSON.stringify([e,t]);let r=Ec.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Ec.set(n,r)),r}const Cc=new Map;function zb(e,t={}){const n=JSON.stringify([e,t]);let r=Cc.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Cc.set(n,r)),r}const Ac=new Map;function Kb(e,t={}){const{base:n,...r}=t,o=JSON.stringify([e,r]);let i=Ac.get(o);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),Ac.set(o,i)),i}let ps=null;function Zb(){return ps||(ps=new Intl.DateTimeFormat().resolvedOptions().locale,ps)}const Fc=new Map;function Mp(e){let t=Fc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Fc.set(e,t)),t}const kc=new Map;function Gb(e){let t=kc.get(e);if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in t||(t={...Pp,...t}),kc.set(e,t)}return t}function Yb(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,o;try{r=xc(e).resolvedOptions(),o=e}catch{const u=e.substring(0,n);r=xc(u).resolvedOptions(),o=u}const{numberingSystem:i,calendar:s}=r;return[o,i,s]}}function Jb(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Hb(e){const t=[];for(let n=1;n<=12;n++){const r=Z.utc(2009,n,1);t.push(e(r))}return t}function Xb(e){const t=[];for(let n=1;n<=7;n++){const r=Z.utc(2016,11,13+n);t.push(e(r))}return t}function ka(e,t,n,r){const o=e.listingMode();return o==="error"?null:o==="en"?n(t):r(t)}function Qb(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Mp(e.locale).numberingSystem==="latn"}class e2{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:o,floor:i,...s}=r;if(!n||Object.keys(s).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=zb(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):xf(t,3);return Ge(n,this.padTo)}}}class t2{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&kr.create(a).valid?(o=a,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=xc(n,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class n2{constructor(t,n,r){this.opts={style:"long",...r},!n&&_p()&&(this.rtf=Kb(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):x2(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Pp={firstDay:1,minimalDays:4,weekend:[6,7]};class he{static fromOpts(t){return he.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,o,i=!1){const s=t||Re.defaultLocale,a=s||(i?"en-US":Zb()),u=n||Re.defaultNumberingSystem,l=r||Re.defaultOutputCalendar,c=Nc(o)||Re.defaultWeekSettings;return new he(a,u,l,c,s)}static resetCache(){ps=null,Ec.clear(),Cc.clear(),Ac.clear(),Fc.clear(),kc.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:o}={}){return he.create(t,n,r,o)}constructor(t,n,r,o,i){const[s,a,u]=Yb(t);this.locale=s,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=o,this.intl=Jb(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Qb(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:he.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Nc(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return ka(this,t,Kp,()=>{const r=this.intl==="ja"||this.intl.startsWith("ja-");n&=!r;const o=n?{month:t,day:"numeric"}:{month:t},i=n?"format":"standalone";if(!this.monthsCache[i][t]){const s=r?a=>this.dtFormatter(a,o).format():a=>this.extract(a,o,"month");this.monthsCache[i][t]=Hb(s)}return this.monthsCache[i][t]})}weekdays(t,n=!1){return ka(this,t,Yp,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=n?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=Xb(i=>this.extract(i,r,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return ka(this,void 0,()=>Jp,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Z.utc(2016,11,13,9),Z.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return ka(this,t,Hp,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[Z.utc(-40,1,1),Z.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const o=this.dtFormatter(t,n),i=o.formatToParts(),s=i.find(a=>a.type.toLowerCase()===r);return s?s.value:null}numberFormatter(t={}){return new e2(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new t2(t,this.intl,n)}relFormatter(t={}){return new n2(this.intl,this.isEnglish(),t)}listFormatter(t={}){return qb(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Mp(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Vp()?Gb(this.locale):Pp}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Sl=null;class Lt extends Xs{static get utcInstance(){return Sl===null&&(Sl=new Lt(0)),Sl}static instance(t){return t===0?Lt.utcInstance:new Lt(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Lt(Lu(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Ds(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Ds(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return Ds(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class r2 extends Xs{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function qr(e,t){if(K(e)||e===null)return t;if(e instanceof Xs)return e;if(l2(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?Ou.instance:n==="utc"||n==="gmt"?Lt.utcInstance:Lt.parseSpecifier(n)||kr.create(e)}else return Zr(e)?Lt.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new r2(e)}const $f={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},mm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},o2=$f.hanidec.replace(/[\[|\]]/g,"").split("");function i2(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search($f.hanidec)!==-1)t+=o2.indexOf(e[n]);else for(const o in mm){const[i,s]=mm[o];r>=i&&r<=s&&(t+=r-i)}}return parseInt(t,10)}else return t}const Sc=new Map;function s2(){Sc.clear()}function Un({numberingSystem:e},t=""){const n=e||"latn";let r=Sc.get(n);r===void 0&&(r=new Map,Sc.set(n,r));let o=r.get(t);return o===void 0&&(o=new RegExp(`${$f[n]}${t}`),r.set(t,o)),o}let hm=()=>Date.now(),pm="system",gm=null,ym=null,wm=null,bm=60,$m,vm=null;class Re{static get now(){return hm}static set now(t){hm=t}static set defaultZone(t){pm=t}static get defaultZone(){return qr(pm,Ou.instance)}static get defaultLocale(){return gm}static set defaultLocale(t){gm=t}static get defaultNumberingSystem(){return ym}static set defaultNumberingSystem(t){ym=t}static get defaultOutputCalendar(){return wm}static set defaultOutputCalendar(t){wm=t}static get defaultWeekSettings(){return vm}static set defaultWeekSettings(t){vm=Nc(t)}static get twoDigitCutoffYear(){return bm}static set twoDigitCutoffYear(t){bm=t%100}static get throwOnInvalid(){return $m}static set throwOnInvalid(t){$m=t}static resetCaches(){he.resetCache(),kr.resetCache(),Z.resetCache(),s2()}}class qn{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Op=[0,31,59,90,120,151,181,212,243,273,304,334],Bp=[0,31,60,91,121,152,182,213,244,274,305,335];function Fn(e,t){return new qn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function vf(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const o=r.getUTCDay();return o===0?7:o}function Rp(e,t,n){return n+(Qs(e)?Bp:Op)[t-1]}function Lp(e,t){const n=Qs(e)?Bp:Op,r=n.findIndex(i=>i<t),o=t-n[r];return{month:r+1,day:o}}function Df(e,t){return(e-t+7)%7+1}function cu(e,t=4,n=1){const{year:r,month:o,day:i}=e,s=Rp(r,o,i),a=Df(vf(r,o,i),n);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=r-1,u=Is(l,t,n)):u>Is(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...Uu(e)}}function Dm(e,t=4,n=1){const{weekYear:r,weekNumber:o,weekday:i}=e,s=Df(vf(r,1,t),n),a=ui(r);let u=o*7+i-s-7+t,l;u<1?(l=r-1,u+=ui(l)):u>a?(l=r+1,u-=ui(r)):l=r;const{month:c,day:f}=Lp(l,u);return{year:l,month:c,day:f,...Uu(e)}}function Nl(e){const{year:t,month:n,day:r}=e,o=Rp(t,n,r);return{year:t,ordinal:o,...Uu(e)}}function Em(e){const{year:t,ordinal:n}=e,{month:r,day:o}=Lp(t,n);return{year:t,month:r,day:o,...Uu(e)}}function xm(e,t){if(!K(e.localWeekday)||!K(e.localWeekNumber)||!K(e.localWeekYear)){if(!K(e.weekday)||!K(e.weekNumber)||!K(e.weekYear))throw new ii("Cannot mix locale-based week fields with ISO-based week fields");return K(e.localWeekday)||(e.weekday=e.localWeekday),K(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),K(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function a2(e,t=4,n=1){const r=Bu(e.weekYear),o=kn(e.weekNumber,1,Is(e.weekYear,t,n)),i=kn(e.weekday,1,7);return r?o?i?!1:Fn("weekday",e.weekday):Fn("week",e.weekNumber):Fn("weekYear",e.weekYear)}function u2(e){const t=Bu(e.year),n=kn(e.ordinal,1,ui(e.year));return t?n?!1:Fn("ordinal",e.ordinal):Fn("year",e.year)}function Up(e){const t=Bu(e.year),n=kn(e.month,1,12),r=kn(e.day,1,fu(e.year,e.month));return t?n?r?!1:Fn("day",e.day):Fn("month",e.month):Fn("year",e.year)}function jp(e){const{hour:t,minute:n,second:r,millisecond:o}=e,i=kn(t,0,23)||t===24&&n===0&&r===0&&o===0,s=kn(n,0,59),a=kn(r,0,59),u=kn(o,0,999);return i?s?a?u?!1:Fn("millisecond",o):Fn("second",r):Fn("minute",n):Fn("hour",t)}function K(e){return typeof e>"u"}function Zr(e){return typeof e=="number"}function Bu(e){return typeof e=="number"&&e%1===0}function l2(e){return typeof e=="string"}function c2(e){return Object.prototype.toString.call(e)==="[object Date]"}function _p(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Vp(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function f2(e){return Array.isArray(e)?e:[e]}function Cm(e,t,n){if(e.length!==0)return e.reduce((r,o)=>{const i=[t(o),o];return r&&n(r[0],i[0])===r[0]?r:i},null)[1]}function d2(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function wi(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Nc(e){if(e==null)return null;if(typeof e!="object")throw new At("Week settings must be an object");if(!kn(e.firstDay,1,7)||!kn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!kn(t,1,7)))throw new At("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function kn(e,t,n){return Bu(e)&&e>=t&&e<=n}function m2(e,t){return e-t*Math.floor(e/t)}function Ge(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function _r(e){if(!(K(e)||e===null||e===""))return parseInt(e,10)}function go(e){if(!(K(e)||e===null||e===""))return parseFloat(e)}function Ef(e){if(!(K(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function xf(e,t,n="round"){const r=10**t;switch(n){case"expand":return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case"trunc":return Math.trunc(e*r)/r;case"round":return Math.round(e*r)/r;case"floor":return Math.floor(e*r)/r;case"ceil":return Math.ceil(e*r)/r;default:throw new RangeError(`Value rounding ${n} is out of range`)}}function Qs(e){return e%4===0&&(e%100!==0||e%400===0)}function ui(e){return Qs(e)?366:365}function fu(e,t){const n=m2(t-1,12)+1,r=e+(t-n)/12;return n===2?Qs(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Ru(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Am(e,t,n){return-Df(vf(e,1,t),n)+t-1}function Is(e,t=4,n=1){const r=Am(e,t,n),o=Am(e+1,t,n);return(ui(e)-r+o)/7}function Ic(e){return e>99?e:e>Re.twoDigitCutoffYear?1900+e:2e3+e}function Wp(e,t,n,r=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(i.timeZone=r);const s={timeZoneName:t,...i},a=new Intl.DateTimeFormat(n,s).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Lu(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,o=n<0||Object.is(n,-0)?-r:r;return n*60+o}function qp(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new At(`Invalid unit value ${e}`);return t}function du(e,t){const n={};for(const r in e)if(wi(e,r)){const o=e[r];if(o==null)continue;n[t(r)]=qp(o)}return n}function Ds(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${Ge(n,2)}:${Ge(r,2)}`;case"narrow":return`${o}${n}${r>0?`:${r}`:""}`;case"techie":return`${o}${Ge(n,2)}${Ge(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Uu(e){return d2(e,["hour","minute","second","millisecond"])}const h2=["January","February","March","April","May","June","July","August","September","October","November","December"],zp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p2=["J","F","M","A","M","J","J","A","S","O","N","D"];function Kp(e){switch(e){case"narrow":return[...p2];case"short":return[...zp];case"long":return[...h2];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Zp=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Gp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],g2=["M","T","W","T","F","S","S"];function Yp(e){switch(e){case"narrow":return[...g2];case"short":return[...Gp];case"long":return[...Zp];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Jp=["AM","PM"],y2=["Before Christ","Anno Domini"],w2=["BC","AD"],b2=["B","A"];function Hp(e){switch(e){case"narrow":return[...b2];case"short":return[...w2];case"long":return[...y2];default:return null}}function $2(e){return Jp[e.hour<12?0:1]}function v2(e,t){return Yp(t)[e.weekday-1]}function D2(e,t){return Kp(t)[e.month-1]}function E2(e,t){return Hp(t)[e.year<0?0:1]}function x2(e,t,n="always",r=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=o[e],c=r?u?l[1]:l[2]||l[1]:u?o[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function Fm(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const C2={D:lu,DD:hp,DDD:pp,DDDD:gp,t:yp,tt:wp,ttt:bp,tttt:$p,T:vp,TT:Dp,TTT:Ep,TTTT:xp,f:Cp,ff:Fp,fff:Sp,ffff:Ip,F:Ap,FF:kp,FFF:Np,FFFF:Tp};class kt{static create(t,n={}){return new kt(t,n)}static parseFormat(t){let n=null,r="",o=!1;const i=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((r.length>0||o)&&i.push({literal:o||/^\s+$/.test(r),val:r===""?"'":r}),n=null,r="",o=!o):o||a===n?r+=a:(r.length>0&&i.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&i.push({literal:o||/^\s+$/.test(r),val:r}),i}static macroTokenToFormatOpts(t){return C2[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0,r=void 0){if(this.opts.forceSimple)return Ge(t,n);const o={...this.opts};return n>0&&(o.padTo=n),r&&(o.signDisplay=r),this.loc.numberFormatter(o).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,x)=>this.loc.extract(t,g,x),s=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",a=()=>r?$2(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(g,x)=>r?D2(t,g):i(x?{month:g}:{month:g,day:"numeric"},"month"),l=(g,x)=>r?v2(t,g):i(x?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),c=g=>{const x=kt.macroTokenToFormatOpts(g);return x?this.formatWithSystemDefault(t,x):g},f=g=>r?E2(t,g):i({era:g},"era"),d=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(g)}};return Fm(kt.parseFormat(n),d)}formatDurationFromString(t,n){const r=this.opts.signMode==="negativeLargestOnly"?-1:1,o=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},i=(c,f)=>d=>{const g=o(d);if(g){const x=f.isNegativeDuration&&g!==f.largestUnit?r:1;let D;return this.opts.signMode==="negativeLargestOnly"&&g!==f.largestUnit?D="never":this.opts.signMode==="all"?D="always":D="auto",this.num(c.get(g)*x,d.length,D)}else return d},s=kt.parseFormat(n),a=s.reduce((c,{literal:f,val:d})=>f?c:c.concat(d),[]),u=t.shiftTo(...a.map(o).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Fm(s,i(u,l))}}const Xp=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ri(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function Li(...e){return t=>e.reduce(([n,r,o],i)=>{const[s,a,u]=i(t,o);return[{...n,...s},a||r,u]},[{},null,1]).slice(0,2)}function Ui(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const o=n.exec(e);if(o)return r(o)}return[null,null]}function Qp(...e){return(t,n)=>{const r={};let o;for(o=0;o<e.length;o++)r[e[o]]=_r(t[n+o]);return[r,null,n+o]}}const eg=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,A2=`(?:${eg.source}?(?:\\[(${Xp.source})\\])?)?`,Cf=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,tg=RegExp(`${Cf.source}${A2}`),Af=RegExp(`(?:[Tt]${tg.source})?`),F2=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,k2=/(\d{4})-?W(\d\d)(?:-?(\d))?/,S2=/(\d{4})-?(\d{3})/,N2=Qp("weekYear","weekNumber","weekDay"),I2=Qp("year","ordinal"),T2=/(\d{4})-(\d\d)-(\d\d)/,ng=RegExp(`${Cf.source} ?(?:${eg.source}|(${Xp.source}))?`),M2=RegExp(`(?: ${ng.source})?`);function li(e,t,n){const r=e[t];return K(r)?n:_r(r)}function P2(e,t){return[{year:li(e,t),month:li(e,t+1,1),day:li(e,t+2,1)},null,t+3]}function ji(e,t){return[{hours:li(e,t,0),minutes:li(e,t+1,0),seconds:li(e,t+2,0),milliseconds:Ef(e[t+3])},null,t+4]}function ea(e,t){const n=!e[t]&&!e[t+1],r=Lu(e[t+1],e[t+2]),o=n?null:Lt.instance(r);return[{},o,t+3]}function ta(e,t){const n=e[t]?kr.create(e[t]):null;return[{},n,t+1]}const O2=RegExp(`^T?${Cf.source}$`),B2=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function R2(e){const[t,n,r,o,i,s,a,u,l]=e,c=t[0]==="-",f=u&&u[0]==="-",d=(g,x=!1)=>g!==void 0&&(x||g&&c)?-g:g;return[{years:d(go(n)),months:d(go(r)),weeks:d(go(o)),days:d(go(i)),hours:d(go(s)),minutes:d(go(a)),seconds:d(go(u),u==="-0"),milliseconds:d(Ef(l),f)}]}const L2={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Ff(e,t,n,r,o,i,s){const a={year:t.length===2?Ic(_r(t)):_r(t),month:zp.indexOf(n)+1,day:_r(r),hour:_r(o),minute:_r(i)};return s&&(a.second=_r(s)),e&&(a.weekday=e.length>3?Zp.indexOf(e)+1:Gp.indexOf(e)+1),a}const U2=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function j2(e){const[,t,n,r,o,i,s,a,u,l,c,f]=e,d=Ff(t,o,r,n,i,s,a);let g;return u?g=L2[u]:l?g=0:g=Lu(c,f),[d,new Lt(g)]}function _2(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const V2=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,W2=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,q2=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function km(e){const[,t,n,r,o,i,s,a]=e;return[Ff(t,o,r,n,i,s,a),Lt.utcInstance]}function z2(e){const[,t,n,r,o,i,s,a]=e;return[Ff(t,a,n,r,o,i,s),Lt.utcInstance]}const K2=Ri(F2,Af),Z2=Ri(k2,Af),G2=Ri(S2,Af),Y2=Ri(tg),rg=Li(P2,ji,ea,ta),J2=Li(N2,ji,ea,ta),H2=Li(I2,ji,ea,ta),X2=Li(ji,ea,ta);function Q2(e){return Ui(e,[K2,rg],[Z2,J2],[G2,H2],[Y2,X2])}function e$(e){return Ui(_2(e),[U2,j2])}function t$(e){return Ui(e,[V2,km],[W2,km],[q2,z2])}function n$(e){return Ui(e,[B2,R2])}const r$=Li(ji);function o$(e){return Ui(e,[O2,r$])}const i$=Ri(T2,M2),s$=Ri(ng),a$=Li(ji,ea,ta);function u$(e){return Ui(e,[i$,rg],[s$,a$])}const Sm="Invalid Duration",og={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},l$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...og},En=146097/400,Yo=146097/4800,c$={years:{quarters:4,months:12,weeks:En/7,days:En,hours:En*24,minutes:En*24*60,seconds:En*24*60*60,milliseconds:En*24*60*60*1e3},quarters:{months:3,weeks:En/28,days:En/4,hours:En*24/4,minutes:En*24*60/4,seconds:En*24*60*60/4,milliseconds:En*24*60*60*1e3/4},months:{weeks:Yo/7,days:Yo,hours:Yo*24,minutes:Yo*24*60,seconds:Yo*24*60*60,milliseconds:Yo*24*60*60*1e3},...og},Co=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],f$=Co.slice(0).reverse();function fr(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new ie(r)}function ig(e,t){let n=t.milliseconds??0;for(const r of f$.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Nm(e,t){const n=ig(e,t)<0?-1:1;Co.reduceRight((r,o)=>{if(K(t[o]))return r;if(r){const i=t[r]*n,s=e[o][r],a=Math.floor(i/s);t[o]+=a*n,t[r]-=a*s*n}return o},null),Co.reduce((r,o)=>{if(K(t[o]))return r;if(r){const i=t[r]%1;t[r]-=i,t[o]+=i*e[r][o]}return o},null)}function Im(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class ie{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?c$:l$;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||he.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return ie.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new At(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new ie({values:du(t,ie.normalizeUnit),loc:he.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Zr(t))return ie.fromMillis(t);if(ie.isDuration(t))return t;if(typeof t=="object")return ie.fromObject(t);throw new At(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=n$(t);return r?ie.fromObject(r,n):ie.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=o$(t);return r?ie.fromObject(r,n):ie.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new At("need to specify a reason the Duration is invalid");const r=t instanceof qn?t:new qn(t,n);if(Re.throwOnInvalid)throw new Rb(r);return new ie({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new mp(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?kt.create(this.loc,r).formatDurationFromString(this,t):Sm}toHuman(t={}){if(!this.isValid)return Sm;const n=t.showZeros!==!1,r=Co.map(o=>{const i=this.values[o];return K(i)||i===0&&!n?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:o.slice(0,-1)}).format(i)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=xf(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},Z.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?ig(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t),r={};for(const o of Co)(wi(n.values,o)||wi(this.values,o))&&(r[o]=n.get(o)+this.get(o));return fr(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=qp(t(this.values[r],r));return fr(this,{values:n},!0)}get(t){return this[ie.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...du(t,ie.normalizeUnit)};return fr(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:o}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:o,conversionAccuracy:r};return fr(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Nm(this.matrix,t),fr(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Im(this.normalize().shiftToAll().toObject());return fr(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>ie.normalizeUnit(s));const n={},r={},o=this.toObject();let i;for(const s of Co)if(t.indexOf(s)>=0){i=s;let a=0;for(const l in r)a+=this.matrix[l][s]*r[l],r[l]=0;Zr(o[s])&&(a+=o[s]);const u=Math.trunc(a);n[s]=u,r[s]=(a*1e3-u*1e3)/1e3}else Zr(o[s])&&(r[s]=o[s]);for(const s in r)r[s]!==0&&(n[i]+=s===i?r[s]:r[s]/this.matrix[i][s]);return Nm(this.matrix,n),fr(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return fr(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Im(this.values);return fr(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,o){return r===void 0||r===0?o===void 0||o===0:r===o}for(const r of Co)if(!n(this.values[r],t.values[r]))return!1;return!0}}const Jo="Invalid Interval";function d$(e,t){return!e||!e.isValid?Be.invalid("missing or invalid start"):!t||!t.isValid?Be.invalid("missing or invalid end"):t<e?Be.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Be{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new At("need to specify a reason the Interval is invalid");const r=t instanceof qn?t:new qn(t,n);if(Re.throwOnInvalid)throw new Bb(r);return new Be({invalid:r})}static fromDateTimes(t,n){const r=os(t),o=os(n),i=d$(r,o);return i??new Be({start:r,end:o})}static after(t,n){const r=ie.fromDurationLike(n),o=os(t);return Be.fromDateTimes(o,o.plus(r))}static before(t,n){const r=ie.fromDurationLike(n),o=os(t);return Be.fromDateTimes(o.minus(r),o)}static fromISO(t,n){const[r,o]=(t||"").split("/",2);if(r&&o){let i,s;try{i=Z.fromISO(r,n),s=i.isValid}catch{s=!1}let a,u;try{a=Z.fromISO(o,n),u=a.isValid}catch{u=!1}if(s&&u)return Be.fromDateTimes(i,a);if(s){const l=ie.fromISO(o,n);if(l.isValid)return Be.after(i,l)}else if(u){const l=ie.fromISO(r,n);if(l.isValid)return Be.before(a,l)}}return Be.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let o;return n?.useLocaleWeeks?o=this.end.reconfigure({locale:r.locale}):o=this.end,o=o.startOf(t,n),Math.floor(o.diff(r,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?Be.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(os).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),r=[];let{s:o}=this,i=0;for(;o<this.e;){const s=n[i]||this.e,a=+s>+this.e?this.e:s;r.push(Be.fromDateTimes(o,a)),o=a,i+=1}return r}splitBy(t){const n=ie.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,o=1,i;const s=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*o));i=+a>+this.e?this.e:a,s.push(Be.fromDateTimes(r,i)),r=i,o+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:Be.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return Be.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],s)=>i?i.overlaps(s)||i.abutsStart(s)?[o,i.union(s)]:[o.concat([i]),s]:[o,s],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const o=[],i=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...i),a=s.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&o.push(Be.fromDateTimes(n,u.time)),n=null);return Be.merge(o)}difference(...t){return Be.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Jo}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=lu,n={}){return this.isValid?kt.create(this.s.loc.clone(n),t).formatInterval(this):Jo}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Jo}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Jo}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Jo}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:Jo}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):ie.invalid(this.invalidReason)}mapEndpoints(t){return Be.fromDateTimes(t(this.s),t(this.e))}}class Sa{static hasDST(t=Re.defaultZone){const n=Z.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return kr.isValidZone(t)}static normalizeZone(t){return qr(t,Re.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||he.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||he.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||he.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||he.create(n,r,i)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||he.create(n,r,i)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||he.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||he.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return he.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return he.create(n,null,"gregory").eras(t)}static features(){return{relative:_p(),localeWeek:Vp()}}}function Tm(e,t){const n=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(ie.fromMillis(r).as("days"))}function m$(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Tm(u,l);return(c-c%7)/7}],["days",Tm]],o={},i=e;let s,a;for(const[u,l]of r)n.indexOf(u)>=0&&(s=u,o[u]=l(e,t),a=i.plus(o),a>t?(o[u]--,e=i.plus(o),e>t&&(a=e,o[u]--,e=i.plus(o))):e=a);return[e,o,a,s]}function h$(e,t,n,r){let[o,i,s,a]=m$(e,t,n);const u=t-o,l=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(s<t&&(s=o.plus({[a]:1})),s!==o&&(i[a]=(i[a]||0)+u/(s-o)));const c=ie.fromObject(i,r);return l.length>0?ie.fromMillis(u,r).shiftTo(...l).plus(c):c}const p$="missing Intl.DateTimeFormat.formatToParts support";function ce(e,t=n=>n){return{regex:e,deser:([n])=>t(i2(n))}}const g$=" ",sg=`[ ${g$}]`,ag=new RegExp(sg,"g");function y$(e){return e.replace(/\./g,"\\.?").replace(ag,sg)}function Mm(e){return e.replace(/\./g,"").replace(ag," ").toLowerCase()}function jn(e,t){return e===null?null:{regex:RegExp(e.map(y$).join("|")),deser:([n])=>e.findIndex(r=>Mm(n)===Mm(r))+t}}function Pm(e,t){return{regex:e,deser:([,n,r])=>Lu(n,r),groups:t}}function Na(e){return{regex:e,deser:([t])=>t}}function w$(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function b$(e,t){const n=Un(t),r=Un(t,"{2}"),o=Un(t,"{3}"),i=Un(t,"{4}"),s=Un(t,"{6}"),a=Un(t,"{1,2}"),u=Un(t,"{1,3}"),l=Un(t,"{1,6}"),c=Un(t,"{1,9}"),f=Un(t,"{2,4}"),d=Un(t,"{4,6}"),g=k=>({regex:RegExp(w$(k.val)),deser:([A])=>A,literal:!0}),D=(k=>{if(e.literal)return g(k);switch(k.val){case"G":return jn(t.eras("short"),0);case"GG":return jn(t.eras("long"),0);case"y":return ce(l);case"yy":return ce(f,Ic);case"yyyy":return ce(i);case"yyyyy":return ce(d);case"yyyyyy":return ce(s);case"M":return ce(a);case"MM":return ce(r);case"MMM":return jn(t.months("short",!0),1);case"MMMM":return jn(t.months("long",!0),1);case"L":return ce(a);case"LL":return ce(r);case"LLL":return jn(t.months("short",!1),1);case"LLLL":return jn(t.months("long",!1),1);case"d":return ce(a);case"dd":return ce(r);case"o":return ce(u);case"ooo":return ce(o);case"HH":return ce(r);case"H":return ce(a);case"hh":return ce(r);case"h":return ce(a);case"mm":return ce(r);case"m":return ce(a);case"q":return ce(a);case"qq":return ce(r);case"s":return ce(a);case"ss":return ce(r);case"S":return ce(u);case"SSS":return ce(o);case"u":return Na(c);case"uu":return Na(a);case"uuu":return ce(n);case"a":return jn(t.meridiems(),0);case"kkkk":return ce(i);case"kk":return ce(f,Ic);case"W":return ce(a);case"WW":return ce(r);case"E":case"c":return ce(n);case"EEE":return jn(t.weekdays("short",!1),1);case"EEEE":return jn(t.weekdays("long",!1),1);case"ccc":return jn(t.weekdays("short",!0),1);case"cccc":return jn(t.weekdays("long",!0),1);case"Z":case"ZZ":return Pm(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return Pm(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Na(/[a-z_+-/]{1,256}?/i);case" ":return Na(/[^\S\n\r]/);default:return g(k)}})(e)||{invalidReason:p$};return D.token=e,D}const $$={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function v$(e,t,n){const{type:r,value:o}=e;if(r==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const i=t[r];let s=r;r==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=n.hour12?"hour12":"hour24");let a=$$[s];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function D$(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function E$(e,t,n){const r=e.match(t);if(r){const o={};let i=1;for(const s in n)if(wi(n,s)){const a=n[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(o[a.token.val[0]]=a.deser(r.slice(i,i+u))),i+=u}return[r,o]}else return[r,{}]}function x$(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return K(e.z)||(n=kr.create(e.z)),K(e.Z)||(n||(n=new Lt(e.Z)),r=e.Z),K(e.q)||(e.M=(e.q-1)*3+1),K(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),K(e.u)||(e.S=Ef(e.u)),[Object.keys(e).reduce((i,s)=>{const a=t(s);return a&&(i[a]=e[s]),i},{}),n,r]}let Il=null;function C$(){return Il||(Il=Z.fromMillis(1555555555555)),Il}function A$(e,t){if(e.literal)return e;const n=kt.macroTokenToFormatOpts(e.val),r=fg(n,t);return r==null||r.includes(void 0)?e:r}function ug(e,t){return Array.prototype.concat(...e.map(n=>A$(n,t)))}class lg{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=ug(kt.parseFormat(n),t),this.units=this.tokens.map(r=>b$(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,o]=D$(this.units);this.regex=RegExp(r,"i"),this.handlers=o}}explainFromTokens(t){if(this.isValid){const[n,r]=E$(t,this.regex,this.handlers),[o,i,s]=r?x$(r):[null,null,void 0];if(wi(r,"a")&&wi(r,"H"))throw new ii("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:o,zone:i,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function cg(e,t,n){return new lg(e,n).explainFromTokens(t)}function F$(e,t,n){const{result:r,zone:o,specificOffset:i,invalidReason:s}=cg(e,t,n);return[r,o,i,s]}function fg(e,t){if(!e)return null;const r=kt.create(t,e).dtFormatter(C$()),o=r.formatToParts(),i=r.resolvedOptions();return o.map(s=>v$(s,e,i))}const Tl="Invalid DateTime",Om=864e13;function gs(e){return new qn("unsupported zone",`the zone "${e.name}" is not supported`)}function Ml(e){return e.weekData===null&&(e.weekData=cu(e.c)),e.weekData}function Pl(e){return e.localWeekData===null&&(e.localWeekData=cu(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function yo(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Z({...n,...t,old:n})}function dg(e,t,n){let r=e-t*60*1e3;const o=n.offset(r);if(t===o)return[r,t];r-=(o-t)*60*1e3;const i=n.offset(r);return o===i?[r,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Ia(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Ya(e,t,n){return dg(Ru(e),t,n)}function Bm(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:r,month:o,day:Math.min(e.c.day,fu(r,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=ie.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Ru(i);let[u,l]=dg(a,n,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function Ho(e,t,n,r,o,i){const{setZone:s,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=Z.fromObject(e,{...n,zone:u,specificOffset:i});return s?l:l.setZone(a)}else return Z.invalid(new qn("unparsable",`the input "${o}" can't be parsed as ${r}`))}function Ta(e,t,n=!0){return e.isValid?kt.create(he.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Ol(e,t,n){const r=e.c.year>9999||e.c.year<0;let o="";if(r&&e.c.year>=0&&(o+="+"),o+=Ge(e.c.year,r?6:4),n==="year")return o;if(t){if(o+="-",o+=Ge(e.c.month),n==="month")return o;o+="-"}else if(o+=Ge(e.c.month),n==="month")return o;return o+=Ge(e.c.day),o}function Rm(e,t,n,r,o,i,s){let a=!n||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=Ge(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=Ge(e.c.minute),s==="minute")break;a&&(u+=":",u+=Ge(e.c.second))}else{if(u+=Ge(e.c.minute),s==="minute")break;a&&(u+=Ge(e.c.second))}if(s==="second")break;a&&(!r||e.c.millisecond!==0)&&(u+=".",u+=Ge(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!i?u+="Z":e.o<0?(u+="-",u+=Ge(Math.trunc(-e.o/60)),u+=":",u+=Ge(Math.trunc(-e.o%60))):(u+="+",u+=Ge(Math.trunc(e.o/60)),u+=":",u+=Ge(Math.trunc(e.o%60)))),i&&(u+="["+e.zone.ianaName+"]"),u}const mg={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},k$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},S$={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ja=["year","month","day","hour","minute","second","millisecond"],N$=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],I$=["year","ordinal","hour","minute","second","millisecond"];function Ha(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new mp(e);return t}function Lm(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Ha(e)}}function T$(e){if(ys===void 0&&(ys=Re.now()),e.type!=="iana")return e.offset(ys);const t=e.name;let n=Tc.get(t);return n===void 0&&(n=e.offset(ys),Tc.set(t,n)),n}function Um(e,t){const n=qr(t.zone,Re.defaultZone);if(!n.isValid)return Z.invalid(gs(n));const r=he.fromObject(t);let o,i;if(K(e.year))o=Re.now();else{for(const u of Ja)K(e[u])&&(e[u]=mg[u]);const s=Up(e)||jp(e);if(s)return Z.invalid(s);const a=T$(n);[o,i]=Ya(e,a,n)}return new Z({ts:o,zone:n,loc:r,o:i})}function jm(e,t,n){const r=K(n.round)?!0:n.round,o=K(n.rounding)?"trunc":n.rounding,i=(a,u)=>(a=xf(a,r||n.calendary?0:2,n.calendary?"round":o),t.loc.clone(n).relFormatter(n).format(a,u)),s=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return i(s(n.unit),n.unit);for(const a of n.units){const u=s(a);if(Math.abs(u)>=1)return i(u,a)}return i(e>t?-0:0,n.units[n.units.length-1])}function _m(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let ys;const Tc=new Map;class Z{constructor(t){const n=t.zone||Re.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new qn("invalid input"):null)||(n.isValid?null:gs(n));this.ts=K(t.ts)?Re.now():t.ts;let o=null,i=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[o,i]=[t.old.c,t.old.o];else{const a=Zr(t.o)&&!t.old?t.o:n.offset(this.ts);o=Ia(this.ts,a),r=Number.isNaN(o.year)?new qn("invalid input"):null,o=r?null:o,i=r?null:a}this._zone=n,this.loc=t.loc||he.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new Z({})}static local(){const[t,n]=_m(arguments),[r,o,i,s,a,u,l]=n;return Um({year:r,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=_m(arguments),[r,o,i,s,a,u,l]=n;return t.zone=Lt.utcInstance,Um({year:r,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=c2(t)?t.valueOf():NaN;if(Number.isNaN(r))return Z.invalid("invalid input");const o=qr(n.zone,Re.defaultZone);return o.isValid?new Z({ts:r,zone:o,loc:he.fromObject(n)}):Z.invalid(gs(o))}static fromMillis(t,n={}){if(Zr(t))return t<-Om||t>Om?Z.invalid("Timestamp out of range"):new Z({ts:t,zone:qr(n.zone,Re.defaultZone),loc:he.fromObject(n)});throw new At(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Zr(t))return new Z({ts:t*1e3,zone:qr(n.zone,Re.defaultZone),loc:he.fromObject(n)});throw new At("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=qr(n.zone,Re.defaultZone);if(!r.isValid)return Z.invalid(gs(r));const o=he.fromObject(n),i=du(t,Lm),{minDaysInFirstWeek:s,startOfWeek:a}=xm(i,o),u=Re.now(),l=K(n.specificOffset)?r.offset(u):n.specificOffset,c=!K(i.ordinal),f=!K(i.year),d=!K(i.month)||!K(i.day),g=f||d,x=i.weekYear||i.weekNumber;if((g||c)&&x)throw new ii("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&c)throw new ii("Can't mix ordinal dates with month/day");const D=x||i.weekday&&!g;let k,A,N=Ia(u,l);D?(k=N$,A=k$,N=cu(N,s,a)):c?(k=I$,A=S$,N=Nl(N)):(k=Ja,A=mg);let j=!1;for(const vn of k){const Bn=i[vn];K(Bn)?j?i[vn]=A[vn]:i[vn]=N[vn]:j=!0}const q=D?a2(i,s,a):c?u2(i):Up(i),G=q||jp(i);if(G)return Z.invalid(G);const Le=D?Dm(i,s,a):c?Em(i):i,[Ct,rt]=Ya(Le,l,r),Tt=new Z({ts:Ct,zone:r,o:rt,loc:o});return i.weekday&&g&&t.weekday!==Tt.weekday?Z.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${Tt.toISO()}`):Tt.isValid?Tt:Z.invalid(Tt.invalid)}static fromISO(t,n={}){const[r,o]=Q2(t);return Ho(r,o,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,o]=e$(t);return Ho(r,o,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,o]=t$(t);return Ho(r,o,n,"HTTP",n)}static fromFormat(t,n,r={}){if(K(t)||K(n))throw new At("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=r,s=he.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[a,u,l,c]=F$(s,t,n);return c?Z.invalid(c):Ho(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return Z.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,o]=u$(t);return Ho(r,o,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new At("need to specify a reason the DateTime is invalid");const r=t instanceof qn?t:new qn(t,n);if(Re.throwOnInvalid)throw new Ob(r);return new Z({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=fg(t,he.fromObject(n));return r?r.map(o=>o?o.val:null).join(""):null}static expandFormat(t,n={}){return ug(kt.parseFormat(t),he.fromObject(n)).map(o=>o.val).join("")}static resetCache(){ys=void 0,Tc.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ml(this).weekYear:NaN}get weekNumber(){return this.isValid?Ml(this).weekNumber:NaN}get weekday(){return this.isValid?Ml(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Pl(this).weekday:NaN}get localWeekNumber(){return this.isValid?Pl(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Pl(this).weekYear:NaN}get ordinal(){return this.isValid?Nl(this.c).ordinal:NaN}get monthShort(){return this.isValid?Sa.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Sa.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Sa.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Sa.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=Ru(this.c),o=this.zone.offset(r-t),i=this.zone.offset(r+t),s=this.zone.offset(r-o*n),a=this.zone.offset(r-i*n);if(s===a)return[this];const u=r-s*n,l=r-a*n,c=Ia(u,s),f=Ia(l,a);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[yo(this,{ts:u}),yo(this,{ts:l})]:[this]}get isInLeapYear(){return Qs(this.year)}get daysInMonth(){return fu(this.year,this.month)}get daysInYear(){return this.isValid?ui(this.year):NaN}get weeksInWeekYear(){return this.isValid?Is(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Is(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:o}=kt.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:o}}toUTC(t=0,n={}){return this.setZone(Lt.instance(t),n)}toLocal(){return this.setZone(Re.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=qr(t,Re.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(n||r){const i=t.offset(this.ts),s=this.toObject();[o]=Ya(s,i,t)}return yo(this,{ts:o,zone:t})}else return Z.invalid(gs(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const o=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return yo(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=du(t,Lm),{minDaysInFirstWeek:r,startOfWeek:o}=xm(n,this.loc),i=!K(n.weekYear)||!K(n.weekNumber)||!K(n.weekday),s=!K(n.ordinal),a=!K(n.year),u=!K(n.month)||!K(n.day),l=a||u,c=n.weekYear||n.weekNumber;if((l||s)&&c)throw new ii("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new ii("Can't mix ordinal dates with month/day");let f;i?f=Dm({...cu(this.c,r,o),...n},r,o):K(n.ordinal)?(f={...this.toObject(),...n},K(n.day)&&(f.day=Math.min(fu(f.year,f.month),f.day))):f=Em({...Nl(this.c),...n});const[d,g]=Ya(f,this.o,this.zone);return yo(this,{ts:d,o:g})}plus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t);return yo(this,Bm(this,n))}minus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t).negate();return yo(this,Bm(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},o=ie.normalizeUnit(t);switch(o){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(o==="weeks")if(n){const i=this.loc.getStartOfWeek(),{weekday:s}=this;s<i&&(r.weekNumber=this.weekNumber-1),r.weekday=i}else r.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);r.month=(i-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?kt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):Tl}toLocaleString(t=lu,n={}){return this.isValid?kt.create(this.loc.clone(n),t).formatDateTime(this):Tl}toLocaleParts(t={}){return this.isValid?kt.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:o=!0,extendedZone:i=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Ha(s);const a=t==="extended";let u=Ol(this,a,s);return Ja.indexOf(s)>=3&&(u+="T"),u+=Rm(this,a,n,r,o,i,s),u}toISODate({format:t="extended",precision:n="day"}={}){return this.isValid?Ol(this,t==="extended",Ha(n)):null}toISOWeekDate(){return Ta(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:o=!1,extendedZone:i=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Ha(a),(o&&Ja.indexOf(a)>=3?"T":"")+Rm(this,s==="extended",n,t,r,i,a)):null}toRFC2822(){return Ta(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Ta(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ol(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let o="HH:mm:ss.SSS";return(n||t)&&(r&&(o+=" "),n?o+="z":t&&(o+="ZZ")),Ta(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Tl}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return ie.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...r},i=f2(n).map(ie.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=h$(a,u,i,o);return s?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(Z.now(),t,n)}until(t){return this.isValid?Be.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(n,r)<=o&&o<=i.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||Z.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),jm(n,this.plus(r),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?jm(t.base||Z.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(Z.isDateTime))throw new At("min requires all arguments be DateTimes");return Cm(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(Z.isDateTime))throw new At("max requires all arguments be DateTimes");return Cm(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:o=null,numberingSystem:i=null}=r,s=he.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return cg(s,t,n)}static fromStringExplain(t,n,r={}){return Z.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:o=null}=n,i=he.fromOpts({locale:r,numberingSystem:o,defaultToEN:!0});return new lg(i,t)}static fromFormatParser(t,n,r={}){if(K(t)||K(n))throw new At("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:i=null}=r,s=he.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});if(!s.equals(n.locale))throw new At(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?Z.invalid(c):Ho(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return lu}static get DATE_MED(){return hp}static get DATE_MED_WITH_WEEKDAY(){return Lb}static get DATE_FULL(){return pp}static get DATE_HUGE(){return gp}static get TIME_SIMPLE(){return yp}static get TIME_WITH_SECONDS(){return wp}static get TIME_WITH_SHORT_OFFSET(){return bp}static get TIME_WITH_LONG_OFFSET(){return $p}static get TIME_24_SIMPLE(){return vp}static get TIME_24_WITH_SECONDS(){return Dp}static get TIME_24_WITH_SHORT_OFFSET(){return Ep}static get TIME_24_WITH_LONG_OFFSET(){return xp}static get DATETIME_SHORT(){return Cp}static get DATETIME_SHORT_WITH_SECONDS(){return Ap}static get DATETIME_MED(){return Fp}static get DATETIME_MED_WITH_SECONDS(){return kp}static get DATETIME_MED_WITH_WEEKDAY(){return Ub}static get DATETIME_FULL(){return Sp}static get DATETIME_FULL_WITH_SECONDS(){return Np}static get DATETIME_HUGE(){return Ip}static get DATETIME_HUGE_WITH_SECONDS(){return Tp}}function os(e){if(Z.isDateTime(e))return e;if(e&&e.valueOf&&Zr(e.valueOf()))return Z.fromJSDate(e);if(e&&typeof e=="object")return Z.fromObject(e);throw new At(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var _e;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(_e||(_e={}));const M$=[_e.Milliseconds,_e.Seconds,_e.Minutes,_e.Hours,_e.Days,_e.Weeks,_e.Months,_e.Years];_e.Milliseconds+"",_e.Seconds+"",_e.Minutes+"",_e.Hours+"",_e.Days+"",_e.Weeks+"",_e.Months+"",_e.Years+"";function P$(e){return M$.filter(t=>e[t])}function Mc(e,{decimalCount:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function O$(e){return Mc(Math.max(e-.4,0),{decimalCount:0})}function Vm(e){return e===0?0:Math.sign(e)}function Ts(e,t,n={}){const r={},o={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},i=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=P$(t).reverse();if(i||s)return a.forEach(c=>{r[c]=i?1/0:-1/0}),r;let u=ie.fromObject(e).as(_e.Milliseconds);const l=Vm(u);return a.forEach((c,f)=>{const d=f===a.length-1;if(c===_e.Milliseconds)r.milliseconds=Mc(u,o);else{const g=ie.fromObject({milliseconds:u}).as(c),x=Math.sign(g),D=Math.abs(g),k=d?Mc(D,o):Math.floor(o.decimalCount==null?D:O$(D)),A=k===0?0:k*x;r[c]=A,u-=ie.fromObject({[c]:A}).as(_e.Milliseconds),l!==Vm(u)&&(u=0)}}),r}Intl.DateTimeFormat().resolvedOptions().locale;var ft;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(ft||(ft={}));ft.Year,ft.Hour,ft.Minute,ft.Second,ft.Millisecond;ft.Month,ft.Week,ft.Day;ft.Millisecond,ft.Second,ft.Minute,ft.Hour,ft.Day,ft.Week,ft.Month,ft.Year;var Ft;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(Ft||(Ft={}));Ft.Sunday+"",Ft.Monday+"",Ft.Tuesday+"",Ft.Wednesday+"",Ft.Thursday+"",Ft.Friday+"",Ft.Saturday+"";Ft.Sunday,Ft.Monday,Ft.Tuesday,Ft.Wednesday,Ft.Thursday,Ft.Friday,Ft.Saturday;var qt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(qt||(qt={}));qt.January,qt.February,qt.March,qt.April,qt.May,qt.June,qt.July,qt.August,qt.September,qt.October,qt.November,qt.December;function Ms(e){const t=new dp,r=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:Ts(e,{milliseconds:!0}).milliseconds;return r!==1/0&&r!==-1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}function hg(...e){const t=e.join(""),n=op(Array.from(t));return Array.from(n).join("")}function pg(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function gg(e,t){const n=hg([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return yg(e,n)}function yg(e,t){const n=hg(t);return typeof e=="string"?new RegExp(pg(e),n):new RegExp(e.source,n)}function wg(e,{caseSensitive:t}){const r="".replaceAll("i","");return yg(e,r)}function kf(e,t=1){return e.split(`
`).map(n=>["    ".repeat(Math.round(t)),n].join("")).join(`
`)}function bg(e,t){return t?typeof t=="string"?!!new RegExp(pg(t),"i").exec(e):!!gg(t,"i").exec(e):!1}class m extends Error{name="AssertionError";constructor(t,n){super(Pu(n,t)||"Assertion failed.")}}const Wm={interval:{milliseconds:100},timeout:{seconds:10}},Bl=Symbol("not set");async function B$(e,t,n){const{callback:r,extraAssertionArgs:o,failureMessage:i,options:s}=R$(t),a=Ts(s.timeout,{milliseconds:!0}).milliseconds,u=Ts(s.interval,{milliseconds:!0});let l=Bl,c;async function f(){try{l=n?r():await r(),e(l,...o)}catch(g){l=Bl,c=St(g)}}const d=Date.now();for(;l===Bl;)if(await f(),await Ms(u),Date.now()-d>=a){const x=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw bf(c,x)}return l}function I(e,t=!1){return((...n)=>B$(e,n,t))}function R$(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:$g(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function $g(e){return{interval:e?.interval||Wm.interval,timeout:e?.timeout||Wm.timeout}}const is={isFalse(e,t){if(e!==!1)throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new m(`'${h(e)}' is not truthy.`,t)}},vg={assert:is,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new m(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:I(is.isFalse),isFalsy:I(is.isFalsy),isTrue:I(is.isTrue),isTruthy:I(is.isTruthy)}};function L$(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n)}function U$(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n)}function j$(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n)}function _$(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n)}const ss={endsWith:L$,endsWithout:U$,startsWith:j$,startsWithout:_$},Dg={assert:ss,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:I(ss.endsWith),endsWithout:I(ss.endsWithout),startsWith:I(ss.startsWith),startsWithout:I(ss.startsWithout)}};function V$(e,t,n){const r=Vn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function gr(e,t){return Vn(t).includes(e)}const Rl={isEnumValue(e,t,n){V$(e,t,n)},isNotEnumValue(e,t,n){const r=Vn(t);if(r.includes(e))throw new m(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},Eg={assert:Rl,check:{isEnumValue:gr,isNotEnumValue(e,t){return!Vn(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=Vn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=Vn(t);if(r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(Vn(t).includes(e))return e},isNotEnumValue(e,t){if(!Vn(t).includes(e))return e}},waitUntil:{isEnumValue:I(Rl.isEnumValue),isNotEnumValue:I(Rl.isNotEnumValue)}},Ll={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new m(`Entries are not equal at key '${String(o)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))throw new m("Entries are equal.",n)}},xg={assert:Ll,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const o=e[r],i=t[r];return o===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const o=e[r],i=t[r];return o!==i})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new m(`Entries are not equal at key '${String(o)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e;throw new m("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(o=>{const i=e[o],s=t[o];return i===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const i=e[o],s=t[o];return i!==s}))return e}},waitUntil:{entriesEqual:I(Ll.entriesEqual),notEntriesEqual:I(Ll.notEntriesEqual)}};function mu(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Ps(e,t){if(!(e===t||mu(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!mu(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{Ps(e[i],t[i])}catch(s){throw new Error(`JSON objects are not equal at key '${i}': ${Ht(s)}`)}})}throw new Error("Values are not JSON equal.")}}function ws(e,t){if(e===t||mu(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!mu(n,r)?!1:Object.keys(e).every(i=>ws(e[i],t[i]))}return!1}const Ul={jsonEquals(e,t,n){try{Ps(e,t)}catch(r){throw new m(Ht(r),n)}},notJsonEquals(e,t,n){try{Ps(e,t)}catch{return}throw new m("Values are JSON equal.",n)}},Cg={assert:Ul,check:{jsonEquals(e,t){return ws(e,t)},notJsonEquals(e,t){return!ws(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Ps(e,t),e}catch(r){throw new m(Ht(r),n)}},notJsonEquals(e,t,n){try{Ps(e,t)}catch{return e}throw new m("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(ws(e,t))return e},notJsonEquals(e,t){if(!ws(e,t))return e}},waitUntil:{jsonEquals:I(Ul.jsonEquals),notJsonEquals:I(Ul.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function qm(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Ag(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Ag.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var Fg=typeof WeakMap=="function"?WeakMap:Ag;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function zm(e,t,n){if(!n||bi(e)||bi(t))return null;var r=n.get(e);if(r){var o=r.get(t);if(typeof o=="boolean")return o}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Ma(e,t,n,r){if(!(!n||bi(e)||bi(t))){var o=n.get(e);o?o.set(t,r):(o=new Fg,o.set(t,r),n.set(e,o))}}function _n(e,t,n){if(n&&n.comparator)return Km(e,t,n);var r=kg(e,t);return r!==null?r:Km(e,t,n)}function kg(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:bi(e)||bi(t)?!1:null}/*!
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
*/function Km(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new Fg;var r=n&&n.comparator,o=zm(e,t,n.memoize);if(o!==null)return o;var i=zm(t,e,n.memoize);if(i!==null)return i;if(r){var s=r(e,t);if(s===!1||s===!0)return Ma(e,t,n.memoize,s),s;var a=kg(e,t);if(a!==null)return a}var u=qm(e);if(u!==qm(t))return Ma(e,t,n.memoize,!1),!1;Ma(e,t,n.memoize,!0);var l=W$(e,t,u,n);return Ma(e,t,n.memoize,l),l}function W$(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return _n(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Sg(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return So(e,t,r);case"RegExp":return q$(e,t);case"Generator":return z$(e,t,r);case"DataView":return So(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return So(new Uint8Array(e),new Uint8Array(t),r);case"Set":return Zm(e,t,r);case"Map":return Zm(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Z$(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function q$(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Zm(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],o=[];return e.forEach(function(s,a){r.push([s,a])}),t.forEach(function(s,a){o.push([s,a])}),So(r.sort(),o.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function So(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var o=-1;++o<r;)if(_n(e[o],t[o],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function z$(e,t,n){return So(Pc(e),Pc(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function K$(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function Gm(e){if(K$(e))try{return Pc(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Pc(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Ym(e){var t=[];for(var n in e)t.push(n);return t}function Jm(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var o=n[r];Object.getOwnPropertyDescriptor(e,o).enumerable&&t.push(o)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Sg(e,t,n,r){var o=n.length;if(o===0)return!0;for(var i=0;i<o;i+=1)if(_n(e[n[i]],t[n[i]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Z$(e,t,n){var r=Ym(e),o=Ym(t),i=Jm(e),s=Jm(t);if(r=r.concat(i),o=o.concat(s),r.length&&r.length===o.length)return So(Hm(r).sort(),Hm(o).sort())===!1?!1:Sg(e,t,r,n);var a=Gm(e),u=Gm(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),So(a,u,n)):r.length===0&&a.length===0&&o.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function bi(e){return e===null||typeof e!="object"}function Hm(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}class ci extends m{name="DiffError";constructor(t,n,r,o){const i=Nb(n,r);super([t,kf(i)].join(`
`),o)}}function Vr(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const jr={strictEquals(e,t,n){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new ci("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new ci("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n)},deepEquals(e,t,n){if(!_n(e,t,{comparator:Vr}))throw new ci("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(_n(e,t,{comparator:Vr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n)}},Ng=jr.deepEquals,Ig={assert:jr,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return _n(e,t,{comparator:Vr})},notDeepEquals(e,t){return!_n(e,t,{comparator:Vr})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new ci("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new ci("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n);return e},deepEquals(e,t,n){if(_n(e,t,{comparator:Vr}))return e;throw new ci("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(_n(e,t,{comparator:Vr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(_n(e,t,{comparator:Vr}))return e},notDeepEquals(e,t){if(!_n(e,t,{comparator:Vr}))return e}},waitUntil:{strictEquals:I(jr.strictEquals),notStrictEquals:I(jr.notStrictEquals),looseEquals:I(jr.looseEquals),notLooseEquals:I(jr.notLooseEquals),deepEquals:I(jr.deepEquals),notDeepEquals:I(jr.notDeepEquals)}};function sn(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function Cn(e,t){return typeof t=="string"?t.includes(e):sn(t,e)}const dr={hasValue(e,t,n){if(!sn(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n)},lacksValue(e,t,n){if(sn(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);r=t.filter(i=>!o.includes(i))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);r=t.filter(i=>o.includes(i))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n)},isIn(e,t,n){if(!Cn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n)},isNotIn(e,t,n){if(Cn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is not empty.`,t)}}},Tg={assert:dr,check:{hasValue(e,t){return sn(e,t)},lacksValue(e,t){return!sn(e,t)},hasValues(e,t){return t.every(n=>sn(e,n))},lacksValues(e,t){return t.every(n=>!sn(e,n))},isIn(e,t){return Cn(e,t)},isNotIn(e,t){return!Cn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!sn(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n);return e},lacksValue(e,t,n){if(sn(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);r=t.filter(i=>!o.includes(i))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);r=t.filter(i=>o.includes(i))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n);return e},isIn(e,t,n){if(!Cn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n);return e},isNotIn(e,t,n){if(Cn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(sn(e,t))return e},lacksValue(e,t){if(!sn(e,t))return e},hasValues(e,t){if(t.every(n=>sn(e,n)))return e},lacksValues(e,t){if(!t.every(n=>sn(e,n)))return e},isIn(e,t){if(Cn(e,t))return e},isNotIn(e,t){if(!Cn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:I(dr.hasValue),lacksValue:I(dr.lacksValue),hasValues:I(dr.hasValues),lacksValues:I(dr.lacksValues),isIn:I(dr.isIn),isNotIn:I(dr.isNotIn),isEmpty:I(dr.isEmpty),isNotEmpty:I(dr.isNotEmpty)}},jl={isHttpStatus(e,t){if(!gr(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(gr(e,v)){if(!Cn(e,Ga[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n)}},Mg={assert:jl,check:{isHttpStatus(e){return gr(e,v)},isHttpStatusCategory(e,t){return gr(e,v)&&Cn(e,Ga[t])}},assertWrap:{isHttpStatus(e,t){if(!gr(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(gr(e,v)){if(!Cn(e,Ga[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(gr(e,v))return e},isHttpStatusCategory(e,t){if(gr(e,v)&&Cn(e,Ga[t]))return e}},waitUntil:{isHttpStatus:I(jl.isHttpStatus),isHttpStatusCategory:I(jl.isHttpStatusCategory)}},_l={instanceOf(e,t,n){if(!(e instanceof t))throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n)}},Pg={assert:_l,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:I(_l.instanceOf),notInstanceOf:I(_l.notInstanceOf)}},G$=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function xe(e,t){return G$.some(n=>{try{return n(e,t)}catch{return!1}})}const wo={isKeyOf(e,t,n){if(!xe(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n)},isNotKeyOf(e,t,n){if(xe(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n)},hasKey(e,t,n){if(!xe(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(xe(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(o=>!xe(e,o));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(o=>xe(e,o));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n)}},Og={assert:wo,check:{isKeyOf(e,t){return xe(t,e)},isNotKeyOf(e,t){return!xe(t,e)},hasKey:xe,lacksKey(e,t){return!xe(e,t)},hasKeys(e,t){return t.every(n=>xe(e,n))},lacksKeys(e,t){return t.every(n=>!xe(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!xe(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(xe(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n);return e},hasKey(e,t,n){if(!xe(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(xe(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(o=>!xe(e,o));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(o=>xe(e,o));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(xe(t,e))return e},isNotKeyOf(e,t){if(!xe(t,e))return e},hasKey(e,t){if(xe(e,t))return e},lacksKey(e,t){if(!xe(e,t))return e},hasKeys(e,t){if(t.every(n=>xe(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!xe(e,n)))return e}},waitUntil:{isKeyOf:I(wo.isKeyOf),isNotKeyOf:I(wo.isNotKeyOf),hasKey:I(wo.hasKey),lacksKey:I(wo.lacksKey),hasKeys:I(wo.hasKeys),lacksKeys:I(wo.lacksKeys)}};function Y$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n)}function J$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n)}const Vl={isLengthAtLeast:Y$,isLengthExactly:J$},Bg={assert:Vl,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)===t)return e})},waitUntil:{isLengthAtLeast:I(Vl.isLengthAtLeast),isLengthExactly:I(Vl.isLengthExactly)}},H$={never(e){throw new m("This code should not have executed.",e)}},Rg={assert:H$,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Wl={isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new m(`'${h(e)}' is not a nullish.`,t)}},Lg={assert:Wl,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new m(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:I(Wl.isDefined),isNullish:I(Wl.isNullish)}},Vt={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r)}},Ug={assert:Vt,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:I(Vt.isInBounds),isOutBounds:I(Vt.isOutBounds),isInteger:I(Vt.isInteger),isNotInteger:I(Vt.isNotInteger),isAbove:I(Vt.isAbove),isAtLeast:I(Vt.isAtLeast),isBelow:I(Vt.isBelow),isAtMost:I(Vt.isAtMost),isNaN:I(Vt.isNaN),isFinite:I(Vt.isFinite),isInfinite:I(Vt.isInfinite),isApproximately:I(Vt.isApproximately),isNotApproximately:I(Vt.isNotApproximately)}};function X$(e,t,n,r,o){return na(...ju(e,t,n,r,o),!1)}function ju(e,t,n,r,o){const i=Array.isArray(n);return[i?e:Ng,i?t:e,i?n:t,i?r:n,i?o:r]}function na(e,t,n,r,o,i){const s=t(...n);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,r),i?a(l):a()}catch(l){u(new m(`Output from '${t.name}' did not produce expected output. ${Ht(l)}`,o))}});try{return e(s,r),i?s:void 0}catch(a){throw new m(`Output from '${t.name}' did not produce expected output. ${Ht(a)}`,o)}}function Q$(e,t,n,r,o){try{const i=na(...ju(e,t,n,r,o),!1);return i instanceof Promise?new Promise(async s=>{try{await i,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function ev(e,t,n,r,o){return na(...ju(e,t,n,r,o),!0)}function tv(e,t,n,r,o){try{const i=na(...ju(e,t,n,r,o),!0);return i instanceof Promise?new Promise(async s=>{try{s(await i)}catch{s(void 0)}}):i}catch{return}}const ql=Symbol("not set");async function nv(e,t,n,r,o,i){const s=Array.isArray(n),a=s?e:Ng,u=s?t:e,l=s?n:t,c=s?r:n,f=$g(s?o:r),d=s?i:o,g=Ts(f.timeout,{milliseconds:!0}).milliseconds,x=Ts(f.interval,{milliseconds:!0});let D=ql,k;async function A(){try{D=await na(a,u,l,c,void 0,!0)}catch(j){D=ql,k=St(j)}}const N=Date.now();for(;D===ql;)if(await A(),await Ms(x),Date.now()-N>=g)throw bf(k,Pu(d,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return D}const rv={output:X$},jg={assert:rv,check:{output:Q$},assertWrap:{output:ev},checkWrap:{output:tv},waitUntil:{output:nv}},as={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t)}},_g={assert:as,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:I(as.isNotPrimitive),isNotPropertyKey:I(as.isNotPropertyKey),isPrimitive:I(as.isPrimitive),isPropertyKey:I(as.isPropertyKey)}},us={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t)}},Vg={assert:us,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:I(us.isPromiseLike,!0),isNotPromiseLike:I(us.isNotPromiseLike,!0),isPromise:I(us.isPromise,!0),isNotPromise:I(us.isNotPromise,!0)}},zl={matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n)}},Wg={assert:zl,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:I(zl.matches,!0),mismatches:I(zl.mismatches,!0)}},Ue={isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t)}},qg={assert:Ue,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:I(Ue.isArray),isBigInt:I(Ue.isBigInt),isBoolean:I(Ue.isBoolean),isFunction:I(Ue.isFunction),isNull:I(Ue.isNull),isNumber:I(Ue.isNumber),isObject:I(Ue.isObject),isString:I(Ue.isString),isSymbol:I(Ue.isSymbol),isUndefined:I(Ue.isUndefined),isNotArray:I(Ue.isNotArray),isNotBigInt:I(Ue.isNotBigInt),isNotBoolean:I(Ue.isNotBoolean),isNotFunction:I(Ue.isNotFunction),isNotNull:I(Ue.isNotNull),isNotNumber:I(Ue.isNotNumber),isNotObject:I(Ue.isNotObject),isNotString:I(Ue.isNotString),isNotSymbol:I(Ue.isNotSymbol),isNotUndefined:I(Ue.isNotUndefined)}};var zt;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(zt||(zt={}));function Sf(e,t,n){Nf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n)}function Xm(e,t,n){Nf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,n)}function Nf(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const o=e.constructor.name;throw new m(`Error constructor '${o}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const o=Ht(e);if(typeof n.matchMessage=="string"){if(!bg(o,n.matchMessage))throw new m(`Error message

'${o}'

does not contain

'${n.matchMessage}'.`,r)}else if(!o.match(n.matchMessage))throw new m(`Error message

'${o}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new m(t.notInstance,r);else throw new m(t.noError,r)}function Qm(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=Ht(e);if(typeof t.matchMessage=="string"){if(!bg(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function _u(e,t,n,r){let o;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(s,a)=>{try{await i}catch(u){o=St(u)}try{Xm(o,n,r),e===zt.Assert?s():e===zt.Check?s(!0):s(o)}catch(u){e===zt.CheckWrap?s(void 0):e===zt.Check?s(!1):a(St(u))}})}catch(i){o=St(i)}try{return Xm(o,n,r),e===zt.Check?!0:e!==zt.Assert?o:void 0}catch(i){if(e===zt.CheckWrap)return;if(e===zt.Check)return!1;throw i}}function ov(e,t,n){return _u(zt.Assert,e,t,n)}function iv(e,t){return _u(zt.Check,e,t)}function sv(e,t,n){return _u(zt.AssertWrap,e,t,n)}function av(e,t,n){return _u(zt.CheckWrap,e,t,n)}const uv=I(Sf);function lv(e,t,n,r){const o=typeof e=="function"||e instanceof Promise?void 0:e,i=o?t:e,s=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${h(i)}'`);return uv(o,async()=>{try{await i();return}catch(u){return St(u)}},a,s)}const cv={throws:ov,isError:Sf},zg={assert:cv,check:{throws:iv,isError(e,t){return Qm(e,t)}},assertWrap:{throws:sv,isError(e,t,n){return Nf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:av,isError(e,t){if(Qm(e,t))return e}},waitUntil:{throws:lv,isError:I(Sf)}},Wr=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Kl={isUuid(e,t){if(!String(e).match(Wr))throw new m(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Wr))throw new m(`'${String(e)}' is a UUID.`,t)}},Kg={assert:Kl,check:{isUuid(e){return!!String(e).match(Wr)},isNotUuid(e){return!String(e).match(Wr)}},assertWrap:{isUuid(e,t){if(!String(e).match(Wr))throw new m(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Wr))throw new m(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Wr))return e},isNotUuid(e){if(!String(e).match(Wr))return e}},waitUntil:{isUuid:I(Kl.isUuid),isNotUuid:I(Kl.isNotUuid)}},fv={...Rg.assert,...vg.assert,...Dg.assert,...xg.assert,...Eg.assert,...Mg.assert,...Pg.assert,...Cg.assert,...Og.assert,...Bg.assert,...Lg.assert,...Ug.assert,...jg.assert,..._g.assert,...Vg.assert,...Wg.assert,...qg.assert,...Ig.assert,...zg.assert,...Kg.assert,...Tg.assert},If=[vg,Dg,xg,Eg,Mg,Pg,Cg,Og,Bg,Rg,Lg,Ug,jg,_g,Vg,Wg,qg,Ig,zg,Kg,Tg],dv=Object.assign({},...If.map(e=>e.check)),S=Object.assign(function(t){return!!t},dv);function mv(e,t,n){return Xa(e,t,n,new Set)}function Xa(e,t,n,r){if(e=eh(e),t=eh(t),S.isObject(e)&&S.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Xa(Ie(e).sort(),Ie(t).sort(),n,r))return!1;let o=!1;const i=Ie(e).map(s=>{const a=Xa(e[s],t[s],n,r);return S.isPromise(a)&&(o=!0),a});return th(o,i)}else if(S.isArray(e)&&S.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let o=!1;const i=e.map((s,a)=>{const u=Xa(s,t[a],n,r);return S.isPromise(u)&&(o=!0),u});return th(o,i)}else return n(e,t)}function eh(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function th(e,t){return e?new Promise(async(n,r)=>{try{const o=await Promise.all(t);n(o.every(S.isTrue))}catch(o){r(St(o))}}):t.every(S.isTrue)}const hv=Object.assign({},...If.map(e=>e.assertWrap)),Hr=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n);return t},hv);function pv(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const gv={tsType:pv},yv={assert:gv},wv={fail:e=>{throw new m("Failure triggered.",e)}},bv={...yv.assert,...fv,...wv},sr=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n)},bv),$v=Object.assign({},...If.map(e=>e.checkWrap)),vv=Object.assign(function(t){if(t)return t},$v);function Dv(e,t){return S.hasKey(e,"entryType")&&e.entryType===t}function Xo(e,t){return e.controlType===t}var H;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(H||(H={}));const Zg=Symbol("any-type"),Ev={[H.Checkbox]:!1,[H.Color]:"",[H.Dropdown]:"",[H.Hidden]:Zg,[H.Number]:0,[H.Text]:""};function xv(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,o])=>{const i=Ev[o.controlType];i!==Zg&&(typeof i!=typeof o.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function Cv(e,t,n){const r=t;if(e.has(r))return e.get(r);{const o=n();return S.isPromise(o)?new Promise(async(i,s)=>{try{const a=await o;e.set(r,a),i(a)}catch(a){s(St(a))}}):(e.set(r,o),o)}}function ra(e,t,n){if(t in e)return e[t];{const r=n();return S.isPromise(r)?new Promise(async(o,i)=>{try{const s=await r;e[t]=s,o(s)}catch(s){i(St(s))}}):(e[t]=r,r)}}function Vu(e){return Ie(e).map(t=>[t,e[t]])}function Os(e){return Object.fromEntries(e)}function Bo(e,t,n){return e.reduce((r,o,i,s)=>{const a=t(o,i,s);return n(a,o,i,s)&&r.push(a),r},[])}function Av(e,t,n={}){try{let r=!1;const o=e.map((i,s,a)=>{const u=t(i,s,a);return u instanceof Promise?(r=!0,u):u?[u.key,u.value]:void 0}).filter(S.isTruthy);return r?new Promise(async(i,s)=>{try{const a=Bo(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},S.isTruthy);i(Os(a))}catch(a){s(St(a))}}):Os(o)}catch(r){throw St(r)}}function Fv(e){return Array.isArray(e)?e:[e]}function kv({min:e,max:t}){const{min:n,max:r}=fp({min:Math.floor(e),max:Math.floor(t)}),o=r-n+1,i=Math.ceil(Math.log2(o)),s=Math.ceil(i/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**s/o)*o,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,f,d)=>c+f*256**d,0);while(l>=a);return n+l%o}const nh=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Wu(e=16){let t="";for(let n=0;n<e;n++){const r=kv({min:0,max:nh.length-1});t+=nh[r]}return t}function Gg(e){if(S.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Ht(t).trim()).join(`
`))}function Sv(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Nv="modulepreload",Iv=function(e){return"/vira/book/"+e},rh={},Yg=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=u(n.map(l=>{if(l=Iv(l),l in rh)return;rh[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Nv,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((g,x)=>{d.addEventListener("load",g),d.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var ot;(function(e){e.Standard="stdout",e.Error="stderr"})(ot||(ot={}));var te;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(te||(te={}));async function Tv(){return await cp({async[Zn.Node](){const e=(await Yg(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[te.Bold]:e.bold.open,[te.Debug]:e.blueBright.open,[te.Error]:e.red.open,[te.Faint]:e.gray.open,[te.Info]:e.cyan.open,[te.Mutate]:e.magenta.open,[te.NormalWeight]:"\x1B[22m",[te.Plain]:"",[te.Reset]:e.reset.open,[te.Success]:e.green.open,[te.Warning]:e.yellow.open}},[Zn.Web](){return Promise.resolve({[te.Bold]:"font-weight: bold",[te.Debug]:"color: blue",[te.Error]:"color: red",[te.Faint]:"color: grey",[te.Info]:"color: teal",[te.Mutate]:"color: magenta",[te.NormalWeight]:"",[te.Plain]:"",[te.Reset]:"",[te.Success]:"color: green",[te.Warning]:"color: orange"})}})}const on=await Tv(),Mv={[te.Bold]:{colors:[on.bold],logType:ot.Standard},[te.Debug]:{colors:[on.debug],logType:ot.Standard},[te.Faint]:{colors:[on.faint],logType:ot.Standard},[te.Info]:{colors:[on.info],logType:ot.Standard},[te.Mutate]:{colors:[on.mutate,on.bold],logType:ot.Standard},[te.NormalWeight]:{colors:[on.normalWeight],logType:ot.Standard},[te.Plain]:{colors:[],logType:ot.Standard},[te.Reset]:{colors:[on.reset],logType:ot.Standard},[te.Success]:{colors:[on.success,on.bold],logType:ot.Standard},[te.Error]:{colors:[on.error,on.bold],logType:ot.Error},[te.Warning]:{colors:[on.warning],logType:ot.Error}};function Jt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function fi({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function Pv(e,t){try{let n=!1;const r=Vu(e).map(([o,i])=>{const s=t(o,i,e);return s instanceof Promise?(n=!0,s):s?[s.key,s.value]:void 0}).filter(S.isTruthy);return n?new Promise(async(o,i)=>{try{const s=Bo(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},S.isTruthy);o(Os(s))}catch(s){i(St(s))}}):Os(r)}catch(n){throw St(n)}}function Ov(e,t){return Pv(e,(n,r)=>{const o=r,i=t(r,e);return i instanceof Promise?i.then(s=>({key:o,value:s})):{key:o,value:i}})}function Jg(e,...t){const n={...e};return t.forEach(r=>{r&&Vu(r).forEach(([o,i])=>{i!=null&&(n[o]=i)})}),n}const Bv="px";function Hg(e){return Xg({value:e,suffix:Bv})}function Xg({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Rv({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Lv(){return await cp({async[Zn.Node](){const{inspect:e}=await Yg(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const o=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),o.join(`
`),r.omitColors?"":r.colorConfig[te.Reset].colors.join("")].join(""),css:void 0}}},[Zn.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:Bo(n.colorConfig[t].colors,s=>Rv({value:s,suffix:";"}),S.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Ht(s):h(s)).join(`
`),n.omitColors?"":n.colorConfig[te.Reset].colors.join("")].join(""),css:r}}}})}const Uv=await Lv(),jv={colorConfig:Mv,omitColors:!1},_v=Qg({[ot.Error](){},[ot.Standard](){}});function Qg(e,t){const n=Jg(jv,t);function r(i){e[n.colorConfig[i.colorKey].logType](Uv({...i,options:n}))}const o=Ov(te,i=>(...s)=>r({args:s,colorKey:i}));return{...o,if(i){return i?o:_v}}}const Vv=wf(Zn.Node)?{[ot.Error]({text:e}){process.stderr.write(e+`
`)},[ot.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[ot.Error]({text:e,css:t}){console.error(Jt({value:e,prefix:"%c"}),t)},[ot.Standard]({text:e,css:t}){console.log(Jt({value:e,prefix:"%c"}),t)}},Wv=Qg(Vv);function qv(e,{min:t,max:n}){return Math.min(Math.max(e,t),n)}function zv({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const o=gg(wg(t,{caseSensitive:n}),"g"),i=[];return e.replace(o,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);i.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),i}function Kv(e,t,{caseSensitive:n}){const r=zv({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),o=wg(t,{caseSensitive:n});return e.split(o).reduce((s,a,u)=>{const l=r[u],c=s.concat(a);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function Zv(e,t){return e.split(t)}function oh(e,t){const{min:n,max:r}=fp(t);if(t.takeOverflow){const o=r-n+1,i=(e-n)%o;return i<0?n+o+i:n+i}else return e>r?n:e<n?r:e}function dn(e,t){let n=!1;const r=Ie(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(n=!0),o[i]=s,o},{});return n?new Promise(async(o,i)=>{try{await Promise.all(Ie(r).map(async s=>{const a=await r[s];r[s]=a})),o(r)}catch(s){i(St(s))}}):r}function Tf(e,t){const n=Vu(e).filter(([r,o])=>t(r,o,e));return Os(n)}function Gv(e,t){return Tf(e,n=>!t.includes(n))}function ih(e){return Ie(e).map(t=>e[t])}function ey(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function Yv(e,t){return t.capitalizeFirstLetter?Jv(e):e}function Jv(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const Hv={capitalizeFirstLetter:!1};var $i;(function(e){e.Upper="upper",e.Lower="lower"})($i||($i={}));function Xv(e){return e.toLowerCase()!==e.toUpperCase()}function sh(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(Xv(r)){if(t===$i.Upper&&r!==r.toUpperCase()||t===$i.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function Qv(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Yv(r,Jg(Hv,t))}function eD(e){return e.split("").reduce((n,r,o,i)=>{const s=o>0&&i[o-1]||"",a=o<i.length-1&&i[o+1]||"",u=sh(s,$i.Lower,{rejectNoCaseCharacters:!0})||sh(a,$i.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||o===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function tD(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function nD({value:e,wrapper:t}){return Jt({value:Xg({value:e,suffix:t}),prefix:t})}function ro(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function ty(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class rD{listeners={};universalListeners=new Map;getListenerCount(){return ih(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)+this.universalListeners.size}listenToAll(t,n={}){const r=()=>this.universalListeners.delete(t)||!1;function o(i,s){n.once&&r(),t(i,s)}return this.universalListeners.set(t,{listener:o,removeListener:r}),r}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,n,r={}){const o=S.isString(t)?t:t.type,i=()=>this.listeners[o]?.delete(n)||!1;function s(a,u){r.once&&i(),n(a,u)}return ra(this.listeners,o,()=>new Map).set(n,{listener:s,removeListener:i}),i}removeListener(t,n){const r=S.isString(t)?t:t.type,o=this.listeners[r];if(!o)return!1;const i=o.get(n);return i?i.removeListener():!1}dispatch(t){const n=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const r=n?.size||0;return n?.forEach(o=>{o.listener(t,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(t,o.removeListener)}),r+this.universalListeners.size}removeAllListeners(){const n=ih(this.listeners).reduce((r,o)=>{const i=o.size||0;return o.clear(),r+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),n}destroy(){this.removeAllListeners()}}class Mf extends rD{}function ny(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Oc(e,t,n){return ny(globalThis,e,t,n)}function Pf(e,t){return hu(e.title),e.parent?[...Pf(e.parent),hu(e.parent.title)].concat([]):[]}function hu(e){return ey(e).toLowerCase().replaceAll(/\s/g,"-")}function oD({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const iD={[wt.ElementExample]:()=>[],[wt.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...xv(e.controls,e.title)].filter(S.isTruthy),[wt.Root]:()=>[]},pu="_isBookTreeNode",ry=new Map;function sD(e){return ry.get(e)}function aD(e,t){Cv(ry,e,()=>t)}function di(e,t){return oy(e)&&e.entry.entryType===t}function oy(e){return!!(S.hasKeys(e,[pu,"entry"])&&e[pu])}function uD(){return{[pu]:!0,entry:{entryType:wt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function lD({entries:e,debug:t}){const n=sD(e);if(n)return n;const r=uD();e.forEach(s=>Of({tree:r,newEntry:s,debug:t,manuallyAdded:!0}));const o=iy(r),i={tree:r,flattenedNodes:o};return aD(e,i),t&&console.info("element-book tree:",r),i}function cD(e,t,n){if(!t.parent)return e;const r=Bc(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Of({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const o=Bc(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Pf(t).join(" > ")}`);return o}function Of({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const o=iD[t.entryType](t);t.errors.push(...o);const i=cD(e,t,n),s=hu(t.title),a=i.children[s];if(a){if(r){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[pu]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};i.children[s]=u,Dv(t,wt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Of({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function Bc(e,t){const n=oy(e)?e.fullUrlBreadcrumbs.slice(0,-1):Pf(e);return n.length?n.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function iy(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>iy(o));return[e,...n].flat()}function Bf(e,t){return Rf(e,["",...t],void 0)}function Rf(e,t,n){const r=t.slice(1),o=r[0];!o&&n&&(e.controls=n);const i=e.children[o||""],s=i&&Rf(i,r,n);return{...e.controls,...s}}function fD(e,t,n){const r={...e};return Rf(r,["",...t],n),r}function sy(e,t){const n=t?.controls||(di(e,wt.Page)?dn(e.entry.controls,(o,i)=>i.initValue):{});return{children:dn(e.children,(o,i)=>sy(i,t?.children?.[i.urlBreadcrumb])),controls:n}}function ke(e){const t={...e,entryType:wt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const o={...r,isVertical:t.useVerticalExamples,entryType:wt.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(S.isTruthy)};n.add(r.title),t.elementExamples[hu(o.title)]=o}}),t}var Kt;(function(e){e.Search="search",e.Book="book"})(Kt||(Kt={}));function Rc(e){return e[0]===Kt.Book?"":e[1]?decodeURIComponent(e[1]):""}const vi={hash:void 0,paths:[Kt.Book],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qa=globalThis,Lf=Qa.ShadowRoot&&(Qa.ShadyCSS===void 0||Qa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Uf=Symbol(),ah=new WeakMap;let ay=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Uf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Lf&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=ah.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ah.set(n,t))}return t}toString(){return this.cssText}};const Xe=e=>new ay(typeof e=="string"?e:e+"",void 0,Uf),eu=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new ay(n,e,Uf)},dD=(e,t)=>{if(Lf)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const r=document.createElement("style"),o=Qa.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},uh=Lf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Xe(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mD,defineProperty:hD,getOwnPropertyDescriptor:pD,getOwnPropertyNames:gD,getOwnPropertySymbols:yD,getPrototypeOf:wD}=Object,qu=globalThis,lh=qu.trustedTypes,bD=lh?lh.emptyScript:"",$D=qu.reactiveElementPolyfillSupport,Es=(e,t)=>e,gu={toAttribute(e,t){switch(t){case Boolean:e=e?bD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},jf=(e,t)=>!mD(e,t),ch={attribute:!0,type:String,converter:gu,reflect:!1,useDefault:!1,hasChanged:jf};Symbol.metadata??=Symbol("metadata"),qu.litPropertyMetadata??=new WeakMap;let oi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ch){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&hD(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=pD(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ch}static _$Ei(){if(this.hasOwnProperty(Es("elementProperties")))return;const t=wD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Es("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Es("properties"))){const n=this.properties,r=[...gD(n),...yD(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(uh(o))}else t!==void 0&&n.push(uh(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:gu).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:gu;this._$Em=o;const a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const o=this.constructor,i=this[t];if(r??=o.getPropertyOptions(t),!((r.hasChanged??jf)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,i]of r){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};oi.elementStyles=[],oi.shadowRootOptions={mode:"open"},oi[Es("elementProperties")]=new Map,oi[Es("finalized")]=new Map,$D?.({ReactiveElement:oi}),(qu.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _f=globalThis,yu=_f.trustedTypes,fh=yu?yu.createPolicy("lit-html",{createHTML:e=>e}):void 0,uy="$lit$",zr=`lit$${Math.random().toFixed(9).slice(2)}$`,ly="?"+zr,vD=`<${ly}>`,Io=document,Bs=()=>Io.createComment(""),Rs=e=>e===null||typeof e!="object"&&typeof e!="function",Vf=Array.isArray,DD=e=>Vf(e)||typeof e?.[Symbol.iterator]=="function",Zl=`[ 	
\f\r]`,ls=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dh=/-->/g,mh=/>/g,bo=RegExp(`>|${Zl}(?:([^\\s"'>=/]+)(${Zl}*=${Zl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hh=/'/g,ph=/"/g,cy=/^(?:script|style|textarea|title)$/i,ED=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),xD=ED(1),mn=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),gh=new WeakMap,Ao=Io.createTreeWalker(Io,129);function fy(e,t){if(!Vf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return fh!==void 0?fh.createHTML(t):t}const CD=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=ls;for(let a=0;a<n;a++){const u=e[a];let l,c,f=-1,d=0;for(;d<u.length&&(s.lastIndex=d,c=s.exec(u),c!==null);)d=s.lastIndex,s===ls?c[1]==="!--"?s=dh:c[1]!==void 0?s=mh:c[2]!==void 0?(cy.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=bo):c[3]!==void 0&&(s=bo):s===bo?c[0]===">"?(s=o??ls,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?bo:c[3]==='"'?ph:hh):s===ph||s===hh?s=bo:s===dh||s===mh?s=ls:(s=bo,o=void 0);const g=s===bo&&e[a+1].startsWith("/>")?" ":"";i+=s===ls?u+vD:f>=0?(r.push(l),u.slice(0,f)+uy+u.slice(f)+zr+g):u+zr+(f===-2?a:g)}return[fy(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Ls{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=t.length-1,u=this.parts,[l,c]=CD(t,n);if(this.el=Ls.createElement(l,r),Ao.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Ao.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(uy)){const d=c[s++],g=o.getAttribute(f).split(zr),x=/([.?@])?(.*)/.exec(d);u.push({type:1,index:i,name:x[2],strings:g,ctor:x[1]==="."?FD:x[1]==="?"?kD:x[1]==="@"?SD:zu}),o.removeAttribute(f)}else f.startsWith(zr)&&(u.push({type:6,index:i}),o.removeAttribute(f));if(cy.test(o.tagName)){const f=o.textContent.split(zr),d=f.length-1;if(d>0){o.textContent=yu?yu.emptyScript:"";for(let g=0;g<d;g++)o.append(f[g],Bs()),Ao.nextNode(),u.push({type:2,index:++i});o.append(f[d],Bs())}}}else if(o.nodeType===8)if(o.data===ly)u.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(zr,f+1))!==-1;)u.push({type:7,index:i}),f+=zr.length-1}i++}}static createElement(t,n){const r=Io.createElement("template");return r.innerHTML=t,r}}function Di(e,t,n=e,r){if(t===mn)return t;let o=r!==void 0?n._$Co?.[r]:n._$Cl;const i=Rs(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(t=Di(e,o._$AS(e,t.values),o,r)),t}let AD=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=(t?.creationScope??Io).importNode(n,!0);Ao.currentNode=o;let i=Ao.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new _i(i,i.nextSibling,this,t):u.type===1?l=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(l=new ND(i,this,t)),this._$AV.push(l),u=r[++a]}s!==u?.index&&(i=Ao.nextNode(),s++)}return Ao.currentNode=Io,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class _i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Di(this,t,n),Rs(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==mn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):DD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==se&&Rs(this._$AH)?this._$AA.nextSibling.data=t:this.T(Io.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ls.createElement(fy(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{const i=new AD(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(t){let n=gh.get(t.strings);return n===void 0&&gh.set(t.strings,n=new Ls(t)),n}k(t){Vf(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new _i(this.O(Bs()),this.O(Bs()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class zu{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}_$AI(t,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)t=Di(this,t,n,0),s=!Rs(t)||t!==this._$AH&&t!==mn,s&&(this._$AH=t);else{const a=t;let u,l;for(t=i[0],u=0;u<i.length-1;u++)l=Di(this,a[r+u],n,u),l===mn&&(l=this._$AH[u]),s||=!Rs(l)||l!==this._$AH[u],l===se?t=se:t!==se&&(t+=(l??"")+i[u+1]),this._$AH[u]=l}s&&!o&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class FD extends zu{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}class kD extends zu{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}class SD extends zu{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Di(this,t,n,0)??se)===mn)return;const r=this._$AH,o=t===se&&r!==se||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==se&&(r===se||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ND{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Di(this,t)}}const ID={I:_i},TD=_f.litHtmlPolyfillSupport;TD?.(Ls,_i),(_f.litHtmlVersions??=[]).push("3.3.1");const MD=(e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const i=n?.renderBefore??null;r._$litPart$=o=new _i(t.insertBefore(Bs(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wf=globalThis;let xs=class extends oi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=MD(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mn}};xs._$litElement$=!0,xs.finalized=!0,Wf.litElementHydrateSupport?.({LitElement:xs});const PD=Wf.litElementPolyfillSupport;PD?.({LitElement:xs});(Wf.litElementVersions??=[]).push("4.2.1");function Ir(e){if(S.isObject(e))return dn(e,(n,r)=>{if(!S.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(eD(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const i=r,s=n.startsWith("--")?Xe(n):n.startsWith("-")?eu`-${Xe(n)}`:eu`--${Xe(n)}`;return{name:s,value:eu`var(${s}, ${Xe(i)})`,default:String(i)}});throw new TypeError(`Invalid setup input for '${Ir.name}' function.`)}function OD({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const fe=Ir({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),BD={nav:{hover:{background:fe["element-book-nav-hover-background-color"],foreground:fe["element-book-nav-hover-foreground-color"]},active:{background:fe["element-book-nav-active-background-color"],foreground:fe["element-book-nav-active-foreground-color"]},selected:{background:fe["element-book-nav-selected-background-color"],foreground:fe["element-book-nav-selected-foreground-color"]}},accent:{icon:fe["element-book-accent-icon-color"]},page:{background:fe["element-book-page-background-color"],backgroundFaint1:fe["element-book-page-background-faint-level-1-color"],backgroundFaint2:fe["element-book-page-background-faint-level-2-color"],foreground:fe["element-book-page-foreground-color"],foregroundFaint1:fe["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:fe["element-book-page-foreground-faint-level-2-color"]}};function RD(e,t){dy(e,t,BD)}function Lc(e){return S.hasKey(e,"_$cssResult$")}function yh(e){return S.hasKeys(e,["name","value","default"])&&S.isString(e.default)&&Lc(e.name)&&Lc(e.value)}function dy(e,t,n){Object.entries(t).forEach(([r,o])=>{const i=n[r];if(!i)throw new Error(`no nestedCssVar at key '${r}'`);if(Lc(o)){if(!yh(i))throw new Error(`got a CSS result at '${r}' but no CSS var`);OD({forCssVar:i,onElement:e,toValue:String(o)})}else{if(yh(i))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);dy(e,o,i)}})}function Ae(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let r=t[0].length,o=t[0].map((s,a)=>t.map(u=>u[a])),i=e.map(s=>o.map(a=>{let u=0;if(!Array.isArray(s)){for(let l of a)u+=s*l;return u}for(let l=0;l<s.length;l++)u+=s[l]*(a[l]||0);return u}));return n===1&&(i=i[0]),r===1?i.map(s=>s[0]):i}function oa(e){return Gr(e)==="string"}function Gr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function wu(e,{precision:t,unit:n}){return Xr(e)?"none":my(e,t)+(n??"")}function Xr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function Je(e){return Xr(e)?0:e}function my(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const o=10**(t-r);return Math.floor(e*o+.5)/o}const LD={deg:1,grad:.9,rad:180/Math.PI,turn:360};function hy(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,o=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let i=e.match(t);if(i){let s=[];return i[2].replace(o,(a,u)=>{let l=u.match(r),c=u;if(l){let f=l[0],d=c.slice(0,-f.length);f==="%"?(c=new Number(d/100),c.type="<percentage>"):(c=new Number(d*LD[f]),c.type="<angle>",c.unit=f)}else n.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),s.push(c)}),{name:i[1].toLowerCase(),rawName:i[1],rawArgs:i[2],args:s}}}function py(e){return e[e.length-1]}function Us(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function gy(e,t,n){return(n-e)/(t-e)}function qf(e,t,n){return Us(t[0],t[1],gy(e[0],e[1],n))}function yy(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let o=new String(r[1]);return o.range=[+r[2],+r[3]],o}return n}))}function wy(e,t,n){return Math.max(Math.min(n,t),e)}function Ku(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function rr(e,t){return Ku(Math.abs(e)**t,e)}function zf(e,t){return t===0?0:e/t}function by(e,t,n=0,r=e.length){for(;n<r;){const o=n+r>>1;e[o]<t?n=o+1:r=o}return n}var UD=Object.freeze({__proto__:null,bisectLeft:by,clamp:wy,copySign:Ku,interpolate:Us,interpolateInv:gy,isNone:Xr,isString:oa,last:py,mapRange:qf,multiplyMatrices:Ae,parseCoordGrammar:yy,parseFunction:hy,serializeNumber:wu,skipNone:Je,spow:rr,toPrecision:my,type:Gr,zdiv:zf});class jD{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],n&&this[o][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const Qr=new jD;var hn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Ut={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Uc(e){return Array.isArray(e)?e:Ut[e]}function bu(e,t,n,r={}){if(e=Uc(e),t=Uc(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let o={W1:e,W2:t,XYZ:n,options:r};if(Qr.run("chromatic-adaptation-start",o),o.M||(o.W1===Ut.D65&&o.W2===Ut.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===Ut.D50&&o.W2===Ut.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Qr.run("chromatic-adaptation-end",o),o.M)return Ae(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const _D=new Set(["<number>","<percentage>","<angle>"]);function wh(e,t,n,r){return Object.entries(e.coords).map(([i,s],a)=>{let u=t.coordGrammar[a],l=r[a],c=l?.type,f;if(l.none?f=u.find(x=>_D.has(x)):f=u.find(x=>x==c),!f){let x=s.name||i;throw new TypeError(`${c??l.raw} not allowed for ${x} in ${n}()`)}let d=f.range;c==="<percentage>"&&(d||=[0,1]);let g=s.range||s.refRange;return d&&g&&(r[a]=qf(d,g,r[a])),f})}function $y(e,{meta:t}={}){let n={str:String(e)?.trim()};if(Qr.run("parse-start",n),n.color)return n.color;if(n.parsed=hy(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let o=n.parsed.args.shift(),i=o.startsWith("--")?o.substring(2):`--${o}`,s=[o,i],a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let c of L.all){let f=c.getFormat("color");if(f&&(s.includes(f.id)||f.ids?.filter(d=>s.includes(d)).length)){const d=Object.keys(c.coords).map((x,D)=>n.parsed.args[D]||0);let g;return f.coordGrammar&&(g=wh(c,f,"color",d)),t&&Object.assign(t,{formatId:"color",types:g}),f.id.startsWith("--")&&!o.startsWith("--")&&hn.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${o}).`),o.startsWith("--")&&!f.id.startsWith("--")&&hn.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${o}).`),{spaceId:c.id,coords:d,alpha:a}}}let u="",l=o in L.registry?o:i;if(l in L.registry){let c=L.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${o}). `+(u||"Missing a plugin?"))}else for(let o of L.all){let i=o.getFormat(r);if(i&&i.type==="function"){let s=1;(i.lastAlpha||py(n.parsed.args).alpha)&&(s=n.parsed.args.pop());let a=n.parsed.args,u;return i.coordGrammar&&(u=wh(o,i,r,a)),t&&Object.assign(t,{formatId:i.name,types:u}),{spaceId:o.id,coords:a,alpha:s}}}}else for(let r of L.all)for(let o in r.formats){let i=r.formats[o];if(i.type!=="custom"||i.test&&!i.test(n.str))continue;let s=i.parse(n.str);if(s)return s.alpha??=1,t&&(t.formatId=o),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function X(e){if(Array.isArray(e))return e.map(X);if(!e)throw new TypeError("Empty color reference");oa(e)&&(e=$y(e));let t=e.space||e.spaceId;return t instanceof L||(e.space=L.get(t)),e.alpha===void 0&&(e.alpha=1),e}const VD=75e-6;class L{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?L.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let o in n)"name"in n[o]||(n[o].name=o);this.coords=n;let r=t.white??this.base.white??"D65";this.white=Uc(r),this.formats=t.formats??{};for(let o in this.formats){let i=this.formats[o];i.type||="function",i.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:L.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:WD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Qr.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=VD}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((o,i)=>{let s=r[i];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[a,u]=s.range;return(a===void 0||o>=a-n)&&(u===void 0||o<=u+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=bh(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=bh(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const a=X(t);[t,n]=[a.space,a.coords]}if(t=L.get(t),this.equals(t))return n;n=n.map(a=>Number.isNaN(a)?0:a);let r=this.path,o=t.path,i,s;for(let a=0;a<r.length&&r[a].equals(o[a]);a++)i=r[a],s=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=r.length-1;a>s;a--)n=r[a].toBase(n);for(let a=s+1;a<o.length;a++)n=o[a].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=X(t);[t,n]=[r.space,r.coords]}return t=L.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],o=r.range||r.refRange;t.push(o?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(L.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof L)return t;if(Gr(t)==="string"){let o=L.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(n.length)return L.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=Gr(t),o,i;if(r==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=L.get(o),o||(o=n),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Gr(i),r==="number"||r==="string"&&i>=0){let u=Object.entries(o.coords)[i];if(u)return{space:o,id:u[0],index:i,...u[1]}}o=L.get(o);let s=i.toLowerCase(),a=0;for(let u in o.coords){let l=o.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:o,id:u,index:a,...l};a++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function WD(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function bh(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=yy(e.coords);let n=Object.entries(t).map(([r,o],i)=>{let s=e.coordGrammar[i][0],a=o.range||o.refRange,u=s.range,l="";return s=="<percentage>"?(u=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(r,o)=>r.map((i,s)=>{let{fromRange:a,toRange:u,suffix:l}=n[s];return a&&u&&(i=qf(a,u,i)),i=wu(i,{precision:o,unit:l}),i})}return e}var bt=new L({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class tn extends L{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=bt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=Ae(t.toXYZ_M,n);return this.white!==this.base.white&&(r=bu(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=bu(this.base.white,this.white,n),Ae(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function ia(e,t){return e=X(e),!t||e.space.equals(t)?e.coords.slice():(t=L.get(t),t.from(e))}function un(e,t){e=X(e);let{space:n,index:r}=L.resolveCoord(t,e.space);return ia(e,n)[r]}function Kf(e,t,n){return e=X(e),t=L.get(t),e.coords=t.to(e.space,n),e}Kf.returns="color";function Sr(e,t,n){if(e=X(e),arguments.length===2&&Gr(arguments[1])==="object"){let r=arguments[1];for(let o in r)Sr(e,o,r[o])}else{typeof n=="function"&&(n=n(un(e,t)));let{space:r,index:o}=L.resolveCoord(t,e.space),i=ia(e,r);i[o]=n,Kf(e,r,i)}return e}Sr.returns="color";var Zf=new L({id:"xyz-d50",name:"XYZ D50",white:"D50",base:bt,fromBase:e=>bu(bt.white,"D50",e),toBase:e=>bu("D50",bt.white,e)});const qD=216/24389,$h=24/116,Pa=24389/27;let Gl=Ut.D50;var ln=new L({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Gl,base:Zf,fromBase(e){let n=e.map((r,o)=>r/Gl[o]).map(r=>r>qD?Math.cbrt(r):(Pa*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>$h?Math.pow(t[0],3):(116*t[0]-16)/Pa,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Pa,t[2]>$h?Math.pow(t[2],3):(116*t[2]-16)/Pa].map((r,o)=>r*Gl[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ur(e){return(e%360+360)%360}function zD(e,t){if(e==="raw")return t;let[n,r]=t.map(ur),o=r-n;return e==="increasing"?o<0&&(r+=360):e==="decreasing"?o>0&&(n+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?n+=360:o<-180&&(r+=360)),[n,r]}var js=new L({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ln,fromBase(e){let[t,n,r]=e,o;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),ur(o)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const vh=25**7,$u=Math.PI,Dh=180/$u,Qo=$u/180;function Eh(e){const t=e*e;return t*t*t*e}function vy(e,t,{kL:n=1,kC:r=1,kH:o=1}={}){[e,t]=X([e,t]);let[i,s,a]=ln.from(e),u=js.from(ln,[i,s,a])[1],[l,c,f]=ln.from(t),d=js.from(ln,[l,c,f])[1];u<0&&(u=0),d<0&&(d=0);let g=(u+d)/2,x=Eh(g),D=.5*(1-Math.sqrt(x/(x+vh))),k=(1+D)*s,A=(1+D)*c,N=Math.sqrt(k**2+a**2),j=Math.sqrt(A**2+f**2),q=k===0&&a===0?0:Math.atan2(a,k),G=A===0&&f===0?0:Math.atan2(f,A);q<0&&(q+=2*$u),G<0&&(G+=2*$u),q*=Dh,G*=Dh;let Le=l-i,Ct=j-N,rt=G-q,Tt=q+G,vn=Math.abs(rt),Bn;N*j===0?Bn=0:vn<=180?Bn=rt:rt>180?Bn=rt-360:rt<-180?Bn=rt+360:hn.warn("the unthinkable has happened");let Zo=2*Math.sqrt(j*N)*Math.sin(Bn*Qo/2),El=(i+l)/2,ts=(N+j)/2,va=Eh(ts),Rn;N*j===0?Rn=Tt:vn<=180?Rn=Tt/2:Tt<360?Rn=(Tt+360)/2:Rn=(Tt-360)/2;let Da=(El-50)**2,xl=1+.015*Da/Math.sqrt(20+Da),Ea=1+.045*ts,Dn=1;Dn-=.17*Math.cos((Rn-30)*Qo),Dn+=.24*Math.cos(2*Rn*Qo),Dn+=.32*Math.cos((3*Rn+6)*Qo),Dn-=.2*Math.cos((4*Rn-63)*Qo);let Ze=1+.015*ts*Dn,rn=30*Math.exp(-1*((Rn-275)/25)**2),Go=2*Math.sqrt(va/(va+vh)),Br=-1*Math.sin(2*rn*Qo)*Go,mo=(Le/(n*xl))**2;return mo+=(Ct/(r*Ea))**2,mo+=(Zo/(o*Ze))**2,mo+=Br*(Ct/(r*Ea))*(Zo/(o*Ze)),Math.sqrt(mo)}const KD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],ZD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],GD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],YD=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Ei=new L({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:bt,fromBase(e){let n=Ae(KD,e).map(r=>Math.cbrt(r));return Ae(GD,n)},toBase(e){let n=Ae(YD,e).map(r=>r**3);return Ae(ZD,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function jc(e,t){[e,t]=X([e,t]);let[n,r,o]=Ei.from(e),[i,s,a]=Ei.from(t),u=n-i,l=r-s,c=o-a;return Math.sqrt(u**2+l**2+c**2)}const JD=75e-6;function No(e,t,{epsilon:n=JD}={}){e=X(e),t||(t=e.space),t=L.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function xi(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Dy(e,t,n="lab"){n=L.get(n);let r=n.from(e),o=n.from(t);return Math.sqrt(r.reduce((i,s,a)=>{let u=o[a];return isNaN(s)||isNaN(u)?i:i+(u-s)**2},0))}function HD(e,t){return Dy(e,t,"lab")}const XD=Math.PI,xh=XD/180;function QD(e,t,{l:n=2,c:r=1}={}){[e,t]=X([e,t]);let[o,i,s]=ln.from(e),[,a,u]=js.from(ln,[o,i,s]),[l,c,f]=ln.from(t),d=js.from(ln,[l,c,f])[1];a<0&&(a=0),d<0&&(d=0);let g=o-l,x=a-d,D=i-c,k=s-f,A=D**2+k**2-x**2,N=.511;o>=16&&(N=.040975*o/(1+.01765*o));let j=.0638*a/(1+.0131*a)+.638,q;Number.isNaN(u)&&(u=0),u>=164&&u<=345?q=.56+Math.abs(.2*Math.cos((u+168)*xh)):q=.36+Math.abs(.4*Math.cos((u+35)*xh));let G=Math.pow(a,4),Le=Math.sqrt(G/(G+1900)),Ct=j*(Le*q+1-Le),rt=(g/(n*N))**2;return rt+=(x/(r*j))**2,rt+=A/Ct**2,Math.sqrt(rt)}const Ch=203;var Gf=new L({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:bt,fromBase(e){return e.map(t=>Math.max(t*Ch,0))},toBase(e){return e.map(t=>Math.max(t/Ch,0))}});const Oa=1.15,Ba=.66,Ah=2610/2**14,e5=2**14/2610,Fh=3424/2**12,kh=2413/2**7,Sh=2392/2**7,t5=1.7*2523/2**5,Nh=2**5/(1.7*2523),Ra=-.56,Yl=16295499532821565e-27,n5=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],r5=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],o5=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],i5=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ey=new L({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Gf,fromBase(e){let[t,n,r]=e,o=Oa*t-(Oa-1)*r,i=Ba*n-(Ba-1)*t,a=Ae(n5,[o,i,r]).map(function(d){let g=Fh+kh*(d/1e4)**Ah,x=1+Sh*(d/1e4)**Ah;return(g/x)**t5}),[u,l,c]=Ae(o5,a);return[(1+Ra)*u/(1+Ra*u)-Yl,l,c]},toBase(e){let[t,n,r]=e,o=(t+Yl)/(1+Ra-Ra*(t+Yl)),s=Ae(i5,[o,n,r]).map(function(d){let g=Fh-d**Nh,x=Sh*d**Nh-kh;return 1e4*(g/x)**e5}),[a,u,l]=Ae(r5,s),c=(a+(Oa-1)*l)/Oa,f=(u+(Ba-1)*c)/Ba;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),_c=new L({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ey,fromBase(e){let[t,n,r]=e,o;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),ur(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function s5(e,t){[e,t]=X([e,t]);let[n,r,o]=_c.from(e),[i,s,a]=_c.from(t),u=n-i,l=r-s;Number.isNaN(o)&&Number.isNaN(a)?(o=0,a=0):Number.isNaN(o)?o=a:Number.isNaN(a)&&(a=o);let c=o-a,f=2*Math.sqrt(r*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+f**2)}const xy=3424/4096,Cy=2413/128,Ay=2392/128,Ih=2610/16384,a5=2523/32,u5=16384/2610,Th=32/2523,l5=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],c5=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],f5=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],d5=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Vc=new L({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Gf,fromBase(e){let t=Ae(l5,e);return m5(t)},toBase(e){let t=h5(e);return Ae(d5,t)}});function m5(e){let t=e.map(function(n){let r=xy+Cy*(n/1e4)**Ih,o=1+Ay*(n/1e4)**Ih;return(r/o)**a5});return Ae(c5,t)}function h5(e){return Ae(f5,e).map(function(r){let o=Math.max(r**Th-xy,0),i=Cy-Ay*r**Th;return 1e4*(o/i)**u5})}function p5(e,t){[e,t]=X([e,t]);let[n,r,o]=Vc.from(e),[i,s,a]=Vc.from(t);return 720*Math.sqrt((n-i)**2+.25*(r-s)**2+(o-a)**2)}const g5=Ut.D65,Fy=.42,Mh=1/Fy,Jl=2*Math.PI,ky=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],y5=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],w5=[[460,451,288],[460,-891,-261],[460,-220,-6300]],b5={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Do={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},$5=180/Math.PI,Ph=Math.PI/180;function Sy(e,t){return e.map(r=>{const o=rr(t*Math.abs(r)*.01,Fy);return 400*Ku(o,r)/(o+27.13)})}function v5(e,t){const n=100/t*27.13**Mh;return e.map(r=>{const o=Math.abs(r);return Ku(n*rr(o/(400-o),Mh),r)})}function D5(e){let t=ur(e);t<=Do.h[0]&&(t+=360);const n=by(Do.h,t)-1,[r,o]=Do.h.slice(n,n+2),[i,s]=Do.e.slice(n,n+2),a=Do.H[n],u=(t-r)/i;return a+100*u/(u+(o-t)/s)}function E5(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,o]=Do.h.slice(n,n+2),[i,s]=Do.e.slice(n,n+2);return ur((t*(s*r-i*o)-100*r*s)/(t*(s-i)-100*s))}function Ny(e,t,n,r,o){const i={};i.discounting=o,i.refWhite=e,i.surround=r;const s=e.map(D=>D*100);i.la=t,i.yb=n;const a=s[1],u=Ae(ky,s);r=b5[i.surround];const l=r[0];i.c=r[1],i.nc=r[2];const f=(1/(5*i.la+1))**4;i.fl=f*i.la+.1*(1-f)*(1-f)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=u.map(D=>Us(1,a/D,d)),i.dRgbInv=i.dRgb.map(D=>1/D);const g=u.map((D,k)=>D*i.dRgb[k]),x=Sy(g,i.fl);return i.aW=i.nbb*(2*x[0]+x[1]+.05*x[2]),i}const Oh=Ny(g5,64/Math.PI*.2,20,"average",!1);function Wc(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=ur(e.h)*Ph:n=E5(e.H)*Ph;const r=Math.cos(n),o=Math.sin(n);let i=0;e.J!==void 0?i=rr(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/i:e.M!==void 0?s=e.M/t.flRoot/i:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=rr(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(n+2)+3.8),l=t.aW*rr(i,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,f=l/t.nbb,d=23*(f+.305)*zf(a,23*c+a*(11*r+108*o)),g=d*r,x=d*o,D=v5(Ae(w5,[f,g,x]).map(k=>k*1/1403),t.fl);return Ae(y5,D.map((k,A)=>k*t.dRgbInv[A])).map(k=>k/100)}function Iy(e,t){const n=e.map(j=>j*100),r=Sy(Ae(ky,n).map((j,q)=>j*t.dRgb[q]),t.fl),o=r[0]+(-12*r[1]+r[2])/11,i=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(i,o)%Jl+Jl)%Jl,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*zf(a*Math.sqrt(o**2+i**2),r[0]+r[1]+1.05*r[2]+.305),l=rr(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*r[0]+r[1]+.05*r[2]),f=rr(c/t.aW,.5*t.c*t.z),d=100*rr(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,x=l*f,D=x*t.flRoot,k=ur(s*$5),A=D5(k),N=50*rr(t.c*l/(t.aW+4),1/2);return{J:d,C:x,h:k,s:N,Q:g,M:D,H:A}}var x5=new L({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:bt,fromBase(e){const t=Iy(e,Oh);return[t.J,t.M,t.h]},toBase(e){return Wc({J:e[0],M:e[1],h:e[2]},Oh)}});const C5=Ut.D65,A5=216/24389,Ty=24389/27;function F5(e){return 116*(e>A5?Math.cbrt(e):(Ty*e+16)/116)-16}function qc(e){return e>8?Math.pow((e+16)/116,3):e/Ty}function k5(e,t){let[n,r,o]=e,i=[],s=0;if(o===0)return[0,0,0];let a=qc(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){i=Wc({J:s,C:r,h:n},t);const d=Math.abs(i[1]-a);if(d<f){if(d<=u)return i;f=d}s=s-(i[1]-a)*s/(2*i[1]),c+=1}return Wc({J:s,C:r,h:n},t)}function S5(e,t){const n=F5(e[1]);if(n===0)return[0,0,0];const r=Iy(e,Yf);return[ur(r.h),r.C,n]}const Yf=Ny(C5,200/Math.PI*qc(50),qc(50)*100,"average",!1);var _s=new L({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:bt,fromBase(e){return S5(e)},toBase(e){return k5(e,Yf)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const N5=Math.PI/180,Bh=[1,.007,.0228];function Rh(e){e[1]<0&&(e=_s.fromBase(_s.toBase(e)));const t=Math.log(Math.max(1+Bh[2]*e[1]*Yf.flRoot,1))/Bh[2],n=e[0]*N5,r=t*Math.cos(n),o=t*Math.sin(n);return[e[2],r,o]}function I5(e,t){[e,t]=X([e,t]);let[n,r,o]=Rh(_s.from(e)),[i,s,a]=Rh(_s.from(t));return Math.sqrt((n-i)**2+(r-s)**2+(o-a)**2)}var Ci={deltaE76:HD,deltaECMC:QD,deltaE2000:vy,deltaEJz:s5,deltaEITP:p5,deltaEOK:jc,deltaEHCT:I5};function T5(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Lh={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function eo(e,{method:t=hn.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:o=2,blackWhiteClamp:i={}}={}){if(e=X(e),oa(arguments[1])?n=arguments[1]:n||(n=e.space),n=L.get(n),No(e,n,{epsilon:0}))return e;let s;if(t==="css")s=M5(e,{space:n});else{if(t!=="clip"&&!No(e,n)){Object.prototype.hasOwnProperty.call(Lh,t)&&({method:t,jnd:o,deltaEMethod:r,blackWhiteClamp:i}=Lh[t]);let a=vy;if(r!==""){for(let l in Ci)if("deltae"+r.toLowerCase()===l.toLowerCase()){a=Ci[l];break}}let u=eo(Ce(e,n),{method:"clip",space:n});if(a(e,u)>o){if(Object.keys(i).length===3){let N=L.resolveCoord(i.channel),j=un(Ce(e,N.space),N.id);if(Xr(j)&&(j=0),j>=i.max)return Ce({space:"xyz-d65",coords:Ut.D65},e.space);if(j<=i.min)return Ce({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=L.resolveCoord(t),c=l.space,f=l.id,d=Ce(e,c);d.coords.forEach((N,j)=>{Xr(N)&&(d.coords[j]=0)});let x=(l.range||l.refRange)[0],D=T5(o),k=x,A=un(d,f);for(;A-k>D;){let N=xi(d);N=eo(N,{space:n,method:"clip"}),a(d,N)-o<D?k=un(d,f):A=un(d,f),Sr(d,f,(k+A)/2)}s=Ce(d,n)}else s=u}else s=Ce(e,n);if(t==="clip"||!No(s,n,{epsilon:0})){let a=Object.values(n.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,f]=a[l];return c!==void 0&&(u=Math.max(c,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return n!==e.space&&(s=Ce(s,e.space)),e.coords=s.coords,e}eo.returns="color";const Uh={WHITE:{space:Ei,coords:[1,0,0]},BLACK:{space:Ei,coords:[0,0,0]}};function M5(e,{space:t}={}){e=X(e),t||(t=e.space),t=L.get(t);const o=L.get("oklch");if(t.isUnbounded)return Ce(e,t);const i=Ce(e,o);let s=i.coords[0];if(s>=1){const x=Ce(Uh.WHITE,t);return x.alpha=e.alpha,Ce(x,t)}if(s<=0){const x=Ce(Uh.BLACK,t);return x.alpha=e.alpha,Ce(x,t)}if(No(i,t,{epsilon:0}))return Ce(i,t);function a(x){const D=Ce(x,t),k=Object.values(t.coords);return D.coords=D.coords.map((A,N)=>{if("range"in k[N]){const[j,q]=k[N].range;return wy(j,A,q)}return A}),D}let u=0,l=i.coords[1],c=!0,f=xi(i),d=a(f),g=jc(d,f);if(g<.02)return d;for(;l-u>1e-4;){const x=(u+l)/2;if(f.coords[1]=x,c&&No(f,t,{epsilon:0}))u=x;else if(d=a(f),g=jc(d,f),g<.02){if(.02-g<1e-4)break;c=!1,u=x}else l=x}return d}function Ce(e,t,{inGamut:n}={}){e=X(e),t=L.get(t);let r=t.from(e),o={space:t,coords:r,alpha:e.alpha};return n&&(o=eo(o,n===!0?void 0:n)),o}Ce.returns="color";function Cs(e,{precision:t=hn.precision,format:n="default",inGamut:r=!0,...o}={}){let i;e=X(e);let s=n;n=e.space.getFormat(n)??e.space.getFormat("default")??L.DEFAULT_FORMAT;let a=e.coords.slice();if(r||=n.toGamut,r&&!No(e)&&(a=eo(xi(e),r===!0?void 0:r).coords),n.type==="custom")if(o.precision=t,n.serialize)i=n.serialize(a,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(d=>wu(d,{precision:t})));let l=[...a];if(u==="color"){let d=n.id||n.ids?.[0]||e.space.id;l.unshift(d)}let c=e.alpha;t!==null&&(c=wu(c,{precision:t}));let f=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${c}`;i=`${u}(${l.join(n.commas?", ":" ")}${f})`}return i}const P5=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],O5=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Zu=new tn({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:P5,fromXYZ_M:O5});const La=1.09929682680944,jh=.018053968510807;var My=new tn({id:"rec2020",name:"REC.2020",base:Zu,toBase(e){return e.map(function(t){return t<jh*4.5?t/4.5:Math.pow((t+La-1)/La,1/.45)})},fromBase(e){return e.map(function(t){return t>=jh?La*Math.pow(t,.45)-(La-1):4.5*t})}});const B5=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],R5=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Py=new tn({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:B5,fromXYZ_M:R5});const L5=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],ut=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Oy=new tn({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:L5,fromXYZ_M:ut}),_h={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Vh=Array(3).fill("<percentage> | <number>[0, 255]"),Wh=Array(3).fill("<number>[0, 255]");var Ai=new tn({id:"srgb",name:"sRGB",base:Oy,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Vh},rgb_number:{name:"rgb",commas:!0,coords:Wh,noAlpha:!0},color:{},rgba:{coords:Vh,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Wh},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let r=n&&e.every(i=>i%17===0);return"#"+e.map(i=>r?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=_h.black,t.alpha=0):t.coords=_h[e],t.coords)return t}}}}),By=new tn({id:"p3",cssId:"display-p3",name:"P3",base:Py,fromBase:Ai.fromBase,toBase:Ai.toBase});hn.display_space=Ai;let U5;if(typeof CSS<"u"&&CSS.supports)for(let e of[ln,My,By]){let t=e.getMinCoords(),r=Cs({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){hn.display_space=e;break}}function j5(e,{space:t=hn.display_space,...n}={}){let r=Cs(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!hn.display_space)r=new String(r),r.color=e;else{let o=e;if((e.coords.some(Xr)||Xr(e.alpha))&&!(U5??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=xi(e),o.coords=o.coords.map(Je),o.alpha=Je(o.alpha),r=Cs(o,n),CSS.supports("color",r)))return r=new String(r),r.color=o,r;o=Ce(o,t),r=new String(Cs(o,n)),r.color=o}return r}function _5(e,t){return e=X(e),t=X(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function to(e){return un(e,[bt,"y"])}function Ry(e,t){Sr(e,[bt,"y"],t)}function V5(e){Object.defineProperty(e.prototype,"luminance",{get(){return to(this)},set(t){Ry(this,t)}})}var W5=Object.freeze({__proto__:null,getLuminance:to,register:V5,setLuminance:Ry});function q5(e,t){e=X(e),t=X(t);let n=Math.max(to(e),0),r=Math.max(to(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const z5=.56,K5=.57,Z5=.62,G5=.65,qh=.022,Y5=1.414,J5=.1,H5=5e-4,X5=1.14,zh=.027,Q5=1.14;function Kh(e){return e>=qh?e:e+(qh-e)**Y5}function ei(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function eE(e,t){t=X(t),e=X(e);let n,r,o,i,s,a;t=Ce(t,"srgb"),[i,s,a]=t.coords;let u=ei(i)*.2126729+ei(s)*.7151522+ei(a)*.072175;e=Ce(e,"srgb"),[i,s,a]=e.coords;let l=ei(i)*.2126729+ei(s)*.7151522+ei(a)*.072175,c=Kh(u),f=Kh(l),d=f>c;return Math.abs(f-c)<H5?r=0:d?(n=f**z5-c**K5,r=n*X5):(n=f**G5-c**Z5,r=n*Q5),Math.abs(r)<J5?o=0:r>0?o=r-zh:o=r+zh,o*100}function tE(e,t){e=X(e),t=X(t);let n=Math.max(to(e),0),r=Math.max(to(t),0);r>n&&([n,r]=[r,n]);let o=n+r;return o===0?0:(n-r)/o}const nE=5e4;function rE(e,t){e=X(e),t=X(t);let n=Math.max(to(e),0),r=Math.max(to(t),0);return r>n&&([n,r]=[r,n]),r===0?nE:(n-r)/r}function oE(e,t){e=X(e),t=X(t);let n=un(e,[ln,"l"]),r=un(t,[ln,"l"]);return Math.abs(n-r)}const iE=216/24389,Zh=24/116,Ua=24389/27;let Hl=Ut.D65;var zc=new L({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Hl,base:bt,fromBase(e){let n=e.map((r,o)=>r/Hl[o]).map(r=>r>iE?Math.cbrt(r):(Ua*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Zh?Math.pow(t[0],3):(116*t[0]-16)/Ua,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ua,t[2]>Zh?Math.pow(t[2],3):(116*t[2]-16)/Ua].map((r,o)=>r*Hl[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Xl=Math.pow(5,.5)*.5+.5;function sE(e,t){e=X(e),t=X(t);let n=un(e,[zc,"l"]),r=un(t,[zc,"l"]),o=Math.abs(Math.pow(n,Xl)-Math.pow(r,Xl)),i=Math.pow(o,1/Xl)*Math.SQRT2-40;return i<7.5?0:i}var tu=Object.freeze({__proto__:null,contrastAPCA:eE,contrastDeltaPhi:sE,contrastLstar:oE,contrastMichelson:tE,contrastWCAG21:q5,contrastWeber:rE});function aE(e,t,n={}){oa(n)&&(n={algorithm:n});let{algorithm:r,...o}=n;if(!r){let i=Object.keys(tu).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=X(e),t=X(t);for(let i in tu)if("contrast"+r.toLowerCase()===i.toLowerCase())return tu[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Gu(e){let[t,n,r]=ia(e,bt),o=t+15*n+3*r;return[4*t/o,9*n/o]}function Ly(e){let[t,n,r]=ia(e,bt),o=t+n+r;return[t/o,n/o]}function uE(e){Object.defineProperty(e.prototype,"uv",{get(){return Gu(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ly(this)}})}var lE=Object.freeze({__proto__:null,register:uE,uv:Gu,xy:Ly});function bs(e,t,n={}){oa(n)&&(n={method:n});let{method:r=hn.deltaE,...o}=n;for(let i in Ci)if("deltae"+r.toLowerCase()===i.toLowerCase())return Ci[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${r}`)}function cE(e,t=.25){let r=[L.get("oklch","lch"),"l"];return Sr(e,r,o=>o*(1+t))}function fE(e,t=.25){let r=[L.get("oklch","lch"),"l"];return Sr(e,r,o=>o*(1-t))}var dE=Object.freeze({__proto__:null,darken:fE,lighten:cE});function Uy(e,t,n=.5,r={}){return[e,t]=[X(e),X(t)],Gr(n)==="object"&&([n,r]=[.5,n]),sa(e,t,r)(n)}function jy(e,t,n={}){let r;Jf(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:s=2,maxSteps:a=1e3,...u}=n;r||([e,t]=[X(e),X(t)],r=sa(e,t,u));let l=bs(e,t),c=o>0?Math.max(s,Math.ceil(l/o)+1):s,f=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)f=[{p:.5,color:r(.5)}];else{let d=1/(c-1);f=Array.from({length:c},(g,x)=>{let D=x*d;return{p:D,color:r(D)}})}if(o>0){let d=f.reduce((g,x,D)=>{if(D===0)return 0;let k=bs(x.color,f[D-1].color,i);return Math.max(g,k)},0);for(;d>o;){d=0;for(let g=1;g<f.length&&f.length<a;g++){let x=f[g-1],D=f[g],k=(D.p+x.p)/2,A=r(k);d=Math.max(d,bs(A,x.color),bs(A,D.color)),f.splice(g,0,{p:k,color:r(k)}),g++}}}return f=f.map(d=>d.color),f}function sa(e,t,n={}){if(Jf(e)){let[u,l]=[e,t];return sa(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:r,outputSpace:o,progression:i,premultiplied:s}=n;e=X(e),t=X(t),e=xi(e),t=xi(t);let a={colors:[e,t],options:n};if(r?r=L.get(r):r=L.registry[hn.interpolationSpace]||e.space,o=o?L.get(o):r,e=Ce(e,r),t=Ce(t,r),e=eo(e),t=eo(t),r.coords.h&&r.coords.h.type==="angle"){let u=n.hue=n.hue||"shorter",l=[r,"h"],[c,f]=[un(e,l),un(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=zD(u,[c,f]),Sr(e,l,c),Sr(t,l,f)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=i?i(u):u;let l=e.coords.map((d,g)=>{let x=t.coords[g];return Us(d,x,u)}),c=Us(e.alpha,t.alpha,u),f={space:r,coords:l,alpha:c};return s&&(f.coords=f.coords.map(d=>d/c)),o!==r&&(f=Ce(f,o)),f},{rangeArgs:a})}function Jf(e){return Gr(e)==="function"&&!!e.rangeArgs}hn.interpolationSpace="lab";function mE(e){e.defineFunction("mix",Uy,{returns:"color"}),e.defineFunction("range",sa,{returns:"function<color>"}),e.defineFunction("steps",jy,{returns:"array<color>"})}var hE=Object.freeze({__proto__:null,isRange:Jf,mix:Uy,range:sa,register:mE,steps:jy}),_y=new L({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ai,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,o,i]=e,[s,a,u]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case r:s=(o-i)/l+(o<i?6:0);break;case o:s=(i-r)/l+2;break;case i:s=(r-o)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function o(i){let s=(i+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Vy=new L({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:_y,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let o=r+n*Math.min(r,1-r);return[t,o===0?0:200*(1-r/o),100*o]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let o=r*(1-n/2);return[t,o===0||o===1?0:(r-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),pE=new L({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Vy,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let o=n+r;if(o>=1){let a=n/o;return[t,0,a*100]}let i=1-r,s=i===0?0:1-n/i;return[t,s*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const gE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],yE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Wy=new tn({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:gE,fromXYZ_M:yE}),wE=new tn({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Wy,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const bE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],$E=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var qy=new tn({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Zf,toXYZ_M:bE,fromXYZ_M:$E});const vE=1/512,DE=16/512;var EE=new tn({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:qy,toBase(e){return e.map(t=>t<DE?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=vE?t**(1/1.8):16*t)}}),xE=new L({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Ei,fromBase(e){let[t,n,r]=e,o;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),ur(o)]},toBase(e){let[t,n,r]=e,o,i;return isNaN(r)?(o=0,i=0):(o=n*Math.cos(r*Math.PI/180),i=n*Math.sin(r*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let zy=Ut.D65;const CE=216/24389,Gh=24389/27,[Yh,Jh]=Gu({space:bt,coords:zy});var Ky=new L({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:zy,base:bt,fromBase(e){let t=[Je(e[0]),Je(e[1]),Je(e[2])],n=t[1],[r,o]=Gu({space:bt,coords:t});if(!Number.isFinite(r)||!Number.isFinite(o))return[0,0,0];let i=n<=CE?Gh*n:116*Math.cbrt(n)-16;return[i,13*i*(r-Yh),13*i*(o-Jh)]},toBase(e){let[t,n,r]=e;if(t===0||Xr(t))return[0,0,0];n=Je(n),r=Je(r);let o=n/(13*t)+Yh,i=r/(13*t)+Jh,s=t<=8?t/Gh:Math.pow((t+16)/116,3);return[s*(9*o/(4*i)),s,s*((12-3*o-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Hf=new L({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ky,fromBase(e){let[t,n,r]=e,o;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),ur(o)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const AE=216/24389,FE=24389/27,Hh=ut[0][0],Xh=ut[0][1],Ql=ut[0][2],Qh=ut[1][0],e0=ut[1][1],ec=ut[1][2],t0=ut[2][0],n0=ut[2][1],tc=ut[2][2];function ti(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function vu(e){const t=Math.pow(e+16,3)/1560896,n=t>AE?t:e/FE,r=n*(284517*Hh-94839*Ql),o=n*(838422*Ql+769860*Xh+731718*Hh),i=n*(632260*Ql-126452*Xh),s=n*(284517*Qh-94839*ec),a=n*(838422*ec+769860*e0+731718*Qh),u=n*(632260*ec-126452*e0),l=n*(284517*t0-94839*tc),c=n*(838422*tc+769860*n0+731718*t0),f=n*(632260*tc-126452*n0);return{r0s:r/i,r0i:o*e/i,r1s:r/(i+126452),r1i:(o-769860)*e/(i+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function r0(e,t){const n=t/360*Math.PI*2,r=ti(e.r0s,e.r0i,n),o=ti(e.r1s,e.r1i,n),i=ti(e.g0s,e.g0i,n),s=ti(e.g1s,e.g1i,n),a=ti(e.b0s,e.b0i,n),u=ti(e.b1s,e.b1i,n);return Math.min(r,o,i,s,a,u)}var kE=new L({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Hf,gamutSpace:Ai,fromBase(e){let[t,n,r]=[Je(e[0]),Je(e[1]),Je(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=vu(t),s=r0(i,r);o=n/s*100}return[r,o,t]},toBase(e){let[t,n,r]=[Je(e[0]),Je(e[1]),Je(e[2])],o;if(r>99.9999999)r=100,o=0;else if(r<1e-8)r=0,o=0;else{let i=vu(r);o=r0(i,t)/100*n}return[r,o,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});ut[0][0];ut[0][1];ut[0][2];ut[1][0];ut[1][1];ut[1][2];ut[2][0];ut[2][1];ut[2][2];function ni(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function o0(e){let t=ni(e.r0s,e.r0i),n=ni(e.r1s,e.r1i),r=ni(e.g0s,e.g0i),o=ni(e.g1s,e.g1i),i=ni(e.b0s,e.b0i),s=ni(e.b1s,e.b1i);return Math.min(t,n,r,o,i,s)}var SE=new L({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Hf,gamutSpace:"self",fromBase(e){let[t,n,r]=[Je(e[0]),Je(e[1]),Je(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=vu(t),s=o0(i);o=n/s*100}return[r,o,t]},toBase(e){let[t,n,r]=[Je(e[0]),Je(e[1]),Je(e[2])],o;if(r>99.9999999)r=100,o=0;else if(r<1e-8)r=0,o=0;else{let i=vu(r);o=o0(i)/100*n}return[r,o,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const i0=203,s0=2610/2**14,NE=2**14/2610,IE=2523/2**5,a0=2**5/2523,u0=3424/2**12,l0=2413/2**7,c0=2392/2**7;var TE=new tn({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Zu,toBase(e){return e.map(function(t){return(Math.max(t**a0-u0,0)/(l0-c0*t**a0))**NE*1e4/i0})},fromBase(e){return e.map(function(t){let n=Math.max(t*i0/1e4,0),r=u0+l0*n**s0,o=1+c0*n**s0;return(r/o)**IE})}});const f0=.17883277,d0=.28466892,m0=.55991073,nc=3.7743;var ME=new tn({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Zu,toBase(e){return e.map(function(t){return t<=.5?t**2/3*nc:(Math.exp((t-m0)/f0)+d0)/12*nc})},fromBase(e){return e.map(function(t){return t/=nc,t<=1/12?Math.sqrt(3*t):f0*Math.log(12*t-d0)+m0})}});const Zy={};Qr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Gy(e.W1,e.W2,e.options.method))});Qr.add("chromatic-adaptation-end",e=>{e.M||(e.M=Gy(e.W1,e.W2,e.options.method))});function Yu({id:e,toCone_M:t,fromCone_M:n}){Zy[e]=arguments[0]}function Gy(e,t,n="Bradford"){let r=Zy[n],[o,i,s]=Ae(r.toCone_M,e),[a,u,l]=Ae(r.toCone_M,t),c=[[a/o,0,0],[0,u/i,0],[0,0,l/s]],f=Ae(c,r.toCone_M);return Ae(r.fromCone_M,f)}Yu({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Yu({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Yu({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Yu({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Ut,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ut.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const PE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],OE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Yy=new tn({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ut.ACES,toXYZ_M:PE,fromXYZ_M:OE});const ja=2**-16,rc=-.35828683,_a=(Math.log2(65504)+9.72)/17.52;var BE=new tn({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[rc,_a],name:"Red"},g:{range:[rc,_a],name:"Green"},b:{range:[rc,_a],name:"Blue"}},referred:"scene",base:Yy,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-ja)*2:n<_a?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ja)+9.72)/17.52:t<ja?(Math.log2(ja+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),h0=Object.freeze({__proto__:null,A98RGB:wE,A98RGB_Linear:Wy,ACEScc:BE,ACEScg:Yy,CAM16_JMh:x5,HCT:_s,HPLuv:SE,HSL:_y,HSLuv:kE,HSV:Vy,HWB:pE,ICTCP:Vc,JzCzHz:_c,Jzazbz:Ey,LCH:js,LCHuv:Hf,Lab:ln,Lab_D65:zc,Luv:Ky,OKLCH:xE,OKLab:Ei,P3:By,P3_Linear:Py,ProPhoto:EE,ProPhoto_Linear:qy,REC_2020:My,REC_2020_Linear:Zu,REC_2100_HLG:ME,REC_2100_PQ:TE,XYZ_ABS_D65:Gf,XYZ_D50:Zf,XYZ_D65:bt,sRGB:Ai,sRGB_Linear:Oy});let be=class Wt{constructor(...t){let n;t.length===1&&(n=X(t[0]));let r,o,i;n?(r=n.space||n.spaceId,o=n.coords,i=n.alpha):[r,o,i]=t,Object.defineProperty(this,"space",{value:L.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i>1||i===void 0?1:i<0?0:i;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Wt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=j5(this,...t);return n.color=new Wt(n.color),n}static get(t,...n){return t instanceof Wt?t:new Wt(t,...n)}static defineFunction(t,n,r=n){let{instance:o=!0,returns:i}=r,s=function(...a){let u=n(...a);if(i==="color")u=Wt.get(u);else if(i==="function<color>"){let l=u;u=function(...c){let f=l(...c);return Wt.get(f)},Object.assign(u,l)}else i==="array<color>"&&(u=u.map(l=>Wt.get(l)));return u};t in Wt||(Wt[t]=s),o&&(Wt.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let n in t)Wt.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(Wt);else for(let n in t)Wt.defineFunction(n,t[n])}};be.defineFunctions({get:un,getAll:ia,set:Sr,setAll:Kf,to:Ce,equals:_5,inGamut:No,toGamut:eo,distance:Dy,toString:Cs});Object.assign(be,{util:UD,hooks:Qr,WHITES:Ut,Space:L,spaces:L.registry,parse:$y,defaults:hn});for(let e of Object.keys(h0))L.register(h0[e]);for(let e in L.registry)Kc(e,L.registry[e]);Qr.add("colorspace-init-end",e=>{Kc(e.id,e),e.aliases?.forEach(t=>{Kc(t,e)})});function Kc(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(be.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(o,i)=>{try{return L.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,s)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:a}=L.resolveCoord([t,i]);if(a>=0)return o[a]}return Reflect.get(o,i,s)},set:(o,i,s,a)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:u}=L.resolveCoord([t,i]);if(u>=0)return o[u]=s,this.setAll(e,o),!0}return Reflect.set(o,i,s,a)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}be.extend(Ci);be.extend({deltaE:bs});Object.assign(be,{deltaEMethods:Ci});be.extend(dE);be.extend({contrast:aE});be.extend(lE);be.extend(W5);be.extend(hE);be.extend(tu);const RE=Symbol("no update");class oc extends ro()("observable-value-update"){}class LE extends ty("observable-destroy"){}class UE{listenTarget=new Mf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];if(n===RE)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)){const o=this.value;return this.value=n,this.listenTarget.dispatch(new oc({detail:[n,o]})),!0}return!1}listen(t,n){const r=o=>n(...o.detail);return this.listenerMap.set(n,r),t&&n(this.value,void 0),this.listenTarget.listen(oc,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(oc,n)}destroy(){this.listenTarget.dispatch(new LE),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function jE(e,t){return mv(e,t,(n,r)=>S.isFunction(n)&&S.isFunction(r)?!0:S.strictEquals(n,r))}function _E(e){return et(e)&&!nn(e)&&!ua(e)&&Symbol.asyncIterator in e}function nn(e){return Array.isArray(e)}function Jy(e){return typeof e=="bigint"}function aa(e){return typeof e=="boolean"}function Xf(e){return e instanceof globalThis.Date}function VE(e){return typeof e=="function"}function WE(e){return et(e)&&!nn(e)&&!ua(e)&&Symbol.iterator in e}function qE(e){return e===null}function ar(e){return typeof e=="number"}function et(e){return typeof e=="object"&&e!==null}function Hy(e){return e instanceof globalThis.RegExp}function qe(e){return typeof e=="string"}function zE(e){return typeof e=="symbol"}function ua(e){return e instanceof globalThis.Uint8Array}function He(e){return e===void 0}function KE(e){return e.map(t=>Du(t))}function ZE(e){return new Date(e.getTime())}function GE(e){return new Uint8Array(e)}function YE(e){return new RegExp(e.source,e.flags)}function JE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=Du(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=Du(e[n]);return t}function Du(e){return nn(e)?KE(e):Xf(e)?ZE(e):ua(e)?GE(e):Hy(e)?YE(e):et(e)?JE(e):e}function pn(e){return Du(e)}function Qf(e,t){return pn(t===void 0?e:{...t,...e})}function Xy(e){return lr(e)&&globalThis.Symbol.asyncIterator in e}function Qy(e){return lr(e)&&globalThis.Symbol.iterator in e}function e1(e){return e instanceof globalThis.Promise}function ed(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function td(e){return e instanceof globalThis.Uint8Array}function t1(e,t){return t in e}function lr(e){return e!==null&&typeof e=="object"}function gn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function oo(e){return e===void 0}function Ju(e){return e===null}function Hu(e){return typeof e=="boolean"}function ee(e){return typeof e=="number"}function n1(e){return globalThis.Number.isInteger(e)}function $r(e){return typeof e=="bigint"}function fn(e){return typeof e=="string"}function r1(e){return typeof e=="function"}function Xu(e){return typeof e=="symbol"}function o1(e){return $r(e)||Hu(e)||Ju(e)||ee(e)||fn(e)||Xu(e)||oo(e)}var Ve;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function n(s){const a=lr(s);return e.AllowArrayObject?a:a&&!gn(s)}e.IsObjectLike=n;function r(s){return n(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=r;function o(s){return e.AllowNaN?ee(s):Number.isFinite(s)}e.IsNumberLike=o;function i(s){const a=oo(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=i})(Ve||(Ve={}));function HE(e){return globalThis.Object.freeze(e).map(t=>Eu(t))}function XE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=Eu(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=Eu(e[n]);return globalThis.Object.freeze(t)}function Eu(e){return nn(e)?HE(e):Xf(e)?e:ua(e)?e:Hy(e)?e:et(e)?XE(e):e}function M(e,t){const n=t!==void 0?{...t,...e}:e;switch(Ve.InstanceMode){case"freeze":return Eu(n);case"clone":return pn(n);default:return n}}class Dt extends Error{constructor(t){super(t)}}const Zt=Symbol.for("TypeBox.Transform"),la=Symbol.for("TypeBox.Readonly"),Tr=Symbol.for("TypeBox.Optional"),Qu=Symbol.for("TypeBox.Hint"),T=Symbol.for("TypeBox.Kind");function nd(e){return et(e)&&e[la]==="Readonly"}function io(e){return et(e)&&e[Tr]==="Optional"}function i1(e){return ae(e,"Any")}function s1(e){return ae(e,"Argument")}function Vi(e){return ae(e,"Array")}function el(e){return ae(e,"AsyncIterator")}function tl(e){return ae(e,"BigInt")}function ca(e){return ae(e,"Boolean")}function Wi(e){return ae(e,"Computed")}function qi(e){return ae(e,"Constructor")}function QE(e){return ae(e,"Date")}function zi(e){return ae(e,"Function")}function Ki(e){return ae(e,"Integer")}function Tn(e){return ae(e,"Intersect")}function nl(e){return ae(e,"Iterator")}function ae(e,t){return et(e)&&T in e&&e[T]===t}function a1(e){return aa(e)||ar(e)||qe(e)}function Ro(e){return ae(e,"Literal")}function Lo(e){return ae(e,"MappedKey")}function $n(e){return ae(e,"MappedResult")}function fa(e){return ae(e,"Never")}function ex(e){return ae(e,"Not")}function rd(e){return ae(e,"Null")}function Zi(e){return ae(e,"Number")}function er(e){return ae(e,"Object")}function rl(e){return ae(e,"Promise")}function ol(e){return ae(e,"Record")}function Xt(e){return ae(e,"Ref")}function u1(e){return ae(e,"RegExp")}function da(e){return ae(e,"String")}function od(e){return ae(e,"Symbol")}function Uo(e){return ae(e,"TemplateLiteral")}function tx(e){return ae(e,"This")}function ve(e){return et(e)&&Zt in e}function jo(e){return ae(e,"Tuple")}function ma(e){return ae(e,"Undefined")}function pt(e){return ae(e,"Union")}function nx(e){return ae(e,"Uint8Array")}function rx(e){return ae(e,"Unknown")}function ox(e){return ae(e,"Unsafe")}function ix(e){return ae(e,"Void")}function sx(e){return et(e)&&T in e&&qe(e[T])}function jt(e){return i1(e)||s1(e)||Vi(e)||ca(e)||tl(e)||el(e)||Wi(e)||qi(e)||QE(e)||zi(e)||Ki(e)||Tn(e)||nl(e)||Ro(e)||Lo(e)||$n(e)||fa(e)||ex(e)||rd(e)||Zi(e)||er(e)||rl(e)||ol(e)||Xt(e)||u1(e)||da(e)||od(e)||Uo(e)||tx(e)||jo(e)||ma(e)||pt(e)||nx(e)||rx(e)||ox(e)||ix(e)||sx(e)}const ax=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function l1(e){try{return new RegExp(e),!0}catch{return!1}}function id(e){if(!qe(e))return!1;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function c1(e){return sd(e)||Te(e)}function cs(e){return He(e)||Jy(e)}function we(e){return He(e)||ar(e)}function sd(e){return He(e)||aa(e)}function ge(e){return He(e)||qe(e)}function ux(e){return He(e)||qe(e)&&id(e)&&l1(e)}function lx(e){return He(e)||qe(e)&&id(e)}function f1(e){return He(e)||Te(e)}function xu(e){return et(e)&&e[Tr]==="Optional"}function Yn(e){return ue(e,"Any")&&ge(e.$id)}function cx(e){return ue(e,"Argument")&&ar(e.index)}function _o(e){return ue(e,"Array")&&e.type==="array"&&ge(e.$id)&&Te(e.items)&&we(e.minItems)&&we(e.maxItems)&&sd(e.uniqueItems)&&f1(e.contains)&&we(e.minContains)&&we(e.maxContains)}function ad(e){return ue(e,"AsyncIterator")&&e.type==="AsyncIterator"&&ge(e.$id)&&Te(e.items)}function il(e){return ue(e,"BigInt")&&e.type==="bigint"&&ge(e.$id)&&cs(e.exclusiveMaximum)&&cs(e.exclusiveMinimum)&&cs(e.maximum)&&cs(e.minimum)&&cs(e.multipleOf)}function Vo(e){return ue(e,"Boolean")&&e.type==="boolean"&&ge(e.$id)}function fx(e){return ue(e,"Computed")&&qe(e.target)&&nn(e.parameters)&&e.parameters.every(t=>Te(t))}function sl(e){return ue(e,"Constructor")&&e.type==="Constructor"&&ge(e.$id)&&nn(e.parameters)&&e.parameters.every(t=>Te(t))&&Te(e.returns)}function al(e){return ue(e,"Date")&&e.type==="Date"&&ge(e.$id)&&we(e.exclusiveMaximumTimestamp)&&we(e.exclusiveMinimumTimestamp)&&we(e.maximumTimestamp)&&we(e.minimumTimestamp)&&we(e.multipleOfTimestamp)}function ul(e){return ue(e,"Function")&&e.type==="Function"&&ge(e.$id)&&nn(e.parameters)&&e.parameters.every(t=>Te(t))&&Te(e.returns)}function Mr(e){return ue(e,"Integer")&&e.type==="integer"&&ge(e.$id)&&we(e.exclusiveMaximum)&&we(e.exclusiveMinimum)&&we(e.maximum)&&we(e.minimum)&&we(e.multipleOf)}function d1(e){return et(e)&&Object.entries(e).every(([t,n])=>id(t)&&Te(n))}function Wo(e){return ue(e,"Intersect")&&!(qe(e.type)&&e.type!=="object")&&nn(e.allOf)&&e.allOf.every(t=>Te(t)&&!yx(t))&&ge(e.type)&&(sd(e.unevaluatedProperties)||f1(e.unevaluatedProperties))&&ge(e.$id)}function ud(e){return ue(e,"Iterator")&&e.type==="Iterator"&&ge(e.$id)&&Te(e.items)}function ue(e,t){return et(e)&&T in e&&e[T]===t}function m1(e){return so(e)&&qe(e.const)}function h1(e){return so(e)&&ar(e.const)}function p1(e){return so(e)&&aa(e.const)}function so(e){return ue(e,"Literal")&&ge(e.$id)&&dx(e.const)}function dx(e){return aa(e)||ar(e)||qe(e)}function mx(e){return ue(e,"MappedKey")&&nn(e.keys)&&e.keys.every(t=>ar(t)||qe(t))}function hx(e){return ue(e,"MappedResult")&&d1(e.properties)}function ao(e){return ue(e,"Never")&&et(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Fi(e){return ue(e,"Not")&&Te(e.not)}function ld(e){return ue(e,"Null")&&e.type==="null"&&ge(e.$id)}function Gt(e){return ue(e,"Number")&&e.type==="number"&&ge(e.$id)&&we(e.exclusiveMaximum)&&we(e.exclusiveMinimum)&&we(e.maximum)&&we(e.minimum)&&we(e.multipleOf)}function Me(e){return ue(e,"Object")&&e.type==="object"&&ge(e.$id)&&d1(e.properties)&&c1(e.additionalProperties)&&we(e.minProperties)&&we(e.maxProperties)}function cd(e){return ue(e,"Promise")&&e.type==="Promise"&&ge(e.$id)&&Te(e.item)}function vt(e){return ue(e,"Record")&&e.type==="object"&&ge(e.$id)&&c1(e.additionalProperties)&&et(e.patternProperties)&&(t=>{const n=Object.getOwnPropertyNames(t.patternProperties);return n.length===1&&l1(n[0])&&et(t.patternProperties)&&Te(t.patternProperties[n[0]])})(e)}function px(e){return ue(e,"Ref")&&ge(e.$id)&&qe(e.$ref)}function Vs(e){return ue(e,"RegExp")&&ge(e.$id)&&qe(e.source)&&qe(e.flags)&&we(e.maxLength)&&we(e.minLength)}function Jn(e){return ue(e,"String")&&e.type==="string"&&ge(e.$id)&&we(e.minLength)&&we(e.maxLength)&&ux(e.pattern)&&lx(e.format)}function Ws(e){return ue(e,"Symbol")&&e.type==="symbol"&&ge(e.$id)}function qs(e){return ue(e,"TemplateLiteral")&&e.type==="string"&&qe(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function gx(e){return ue(e,"This")&&ge(e.$id)&&qe(e.$ref)}function yx(e){return et(e)&&Zt in e}function ll(e){return ue(e,"Tuple")&&e.type==="array"&&ge(e.$id)&&ar(e.minItems)&&ar(e.maxItems)&&e.minItems===e.maxItems&&(He(e.items)&&He(e.additionalItems)&&e.minItems===0||nn(e.items)&&e.items.every(t=>Te(t)))}function To(e){return ue(e,"Undefined")&&e.type==="undefined"&&ge(e.$id)}function Nr(e){return ue(e,"Union")&&ge(e.$id)&&et(e)&&nn(e.anyOf)&&e.anyOf.every(t=>Te(t))}function ha(e){return ue(e,"Uint8Array")&&e.type==="Uint8Array"&&ge(e.$id)&&we(e.minByteLength)&&we(e.maxByteLength)}function Hn(e){return ue(e,"Unknown")&&ge(e.$id)}function wx(e){return ue(e,"Unsafe")}function cl(e){return ue(e,"Void")&&e.type==="void"&&ge(e.$id)}function bx(e){return et(e)&&T in e&&qe(e[T])&&!ax.includes(e[T])}function Te(e){return et(e)&&(Yn(e)||cx(e)||_o(e)||Vo(e)||il(e)||ad(e)||fx(e)||sl(e)||al(e)||ul(e)||Mr(e)||Wo(e)||ud(e)||so(e)||mx(e)||hx(e)||ao(e)||Fi(e)||ld(e)||Gt(e)||Me(e)||cd(e)||vt(e)||px(e)||Vs(e)||Jn(e)||Ws(e)||qs(e)||gx(e)||ll(e)||To(e)||Nr(e)||ha(e)||Hn(e)||wx(e)||cl(e)||bx(e))}const $x="(true|false)",nu="(0|[1-9][0-9]*)",g1="(.*)",vx="(?!.*)",ki=`^${nu}$`,Si=`^${g1}$`,Dx=`^${vx}$`,y1=new Map;function fd(e){return y1.has(e)}function dd(e){return y1.get(e)}const md=new Map;function Mo(e){return md.has(e)}function w1(e,t){md.set(e,t)}function hd(e){return md.get(e)}function Ex(e,t){return e.includes(t)}function xx(e){return[...new Set(e)]}function Cx(e,t){return e.filter(n=>t.includes(n))}function Ax(e,t){return e.reduce((n,r)=>Cx(n,r),t)}function Fx(e){return e.length===1?e[0]:e.length>1?Ax(e.slice(1),e[0]):[]}function kx(e){const t=[];for(const n of e)t.push(...n);return t}function zs(e){return M({[T]:"Any"},e)}function pd(e,t){return M({[T]:"Array",type:"array",items:e},t)}function Sx(e){return M({[T]:"Argument",index:e})}function gd(e,t){return M({[T]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function it(e,t,n){return M({[T]:"Computed",target:e,parameters:t},n)}function Nx(e,t){const{[t]:n,...r}=e;return r}function yn(e,t){return t.reduce((n,r)=>Nx(n,r),e)}function Pe(e){return M({[T]:"Never",not:{}},e)}function Et(e){return M({[T]:"MappedResult",properties:e})}function yd(e,t,n){return M({[T]:"Constructor",type:"Constructor",parameters:e,returns:t},n)}function pa(e,t,n){return M({[T]:"Function",type:"Function",parameters:e,returns:t},n)}function Zc(e,t){return M({[T]:"Union",anyOf:e},t)}function Ix(e){return e.some(t=>io(t))}function p0(e){return e.map(t=>io(t)?Tx(t):t)}function Tx(e){return yn(e,[Tr])}function Mx(e,t){return Ix(e)?co(Zc(p0(e),t)):Zc(p0(e),t)}function Gi(e,t){return e.length===1?M(e[0],t):e.length===0?Pe(t):Mx(e,t)}function xt(e,t){return e.length===0?Pe(t):e.length===1?M(e[0],t):Zc(e,t)}class g0 extends Dt{}function Px(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function wd(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function xr(e,t){return wd(e,t,"(")}function Ks(e,t){return wd(e,t,")")}function b1(e,t){return wd(e,t,"|")}function Ox(e){if(!(xr(e,0)&&Ks(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(xr(e,n)&&(t+=1),Ks(e,n)&&(t-=1),t===0&&n!==e.length-1)return!1;return!0}function Bx(e){return e.slice(1,e.length-1)}function Rx(e){let t=0;for(let n=0;n<e.length;n++)if(xr(e,n)&&(t+=1),Ks(e,n)&&(t-=1),b1(e,n)&&t===0)return!0;return!1}function Lx(e){for(let t=0;t<e.length;t++)if(xr(e,t))return!0;return!1}function Ux(e){let[t,n]=[0,0];const r=[];for(let i=0;i<e.length;i++)if(xr(e,i)&&(t+=1),Ks(e,i)&&(t-=1),b1(e,i)&&t===0){const s=e.slice(n,i);s.length>0&&r.push(Ni(s)),n=i+1}const o=e.slice(n);return o.length>0&&r.push(Ni(o)),r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"or",expr:r}}function jx(e){function t(o,i){if(!xr(o,i))throw new g0("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=i;a<o.length;a++)if(xr(o,a)&&(s+=1),Ks(o,a)&&(s-=1),s===0)return[i,a];throw new g0("TemplateLiteralParser: Unclosed group parens in expression")}function n(o,i){for(let s=i;s<o.length;s++)if(xr(o,s))return[i,s];return[i,o.length]}const r=[];for(let o=0;o<e.length;o++)if(xr(e,o)){const[i,s]=t(e,o),a=e.slice(i,s+1);r.push(Ni(a)),o=s}else{const[i,s]=n(e,o),a=e.slice(i,s);a.length>0&&r.push(Ni(a)),o=s-1}return r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"and",expr:r}}function Ni(e){return Ox(e)?Ni(Bx(e)):Rx(e)?Ux(e):Lx(e)?jx(e):{type:"const",const:Px(e)}}function bd(e){return Ni(e.slice(1,e.length-1))}class _x extends Dt{}function Vx(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function Wx(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function qx(e){return e.type==="const"&&e.const===".*"}function Zs(e){return Vx(e)||qx(e)?!1:Wx(e)?!0:e.type==="and"?e.expr.every(t=>Zs(t)):e.type==="or"?e.expr.every(t=>Zs(t)):e.type==="const"?!0:(()=>{throw new _x("Unknown expression type")})()}function zx(e){const t=bd(e.pattern);return Zs(t)}class Kx extends Dt{}function*$1(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const n of $1(e.slice(1)))yield`${t}${n}`}function*Zx(e){return yield*$1(e.expr.map(t=>[...fl(t)]))}function*Gx(e){for(const t of e.expr)yield*fl(t)}function*Yx(e){return yield e.const}function*fl(e){return e.type==="and"?yield*Zx(e):e.type==="or"?yield*Gx(e):e.type==="const"?yield*Yx(e):(()=>{throw new Kx("Unknown expression")})()}function v1(e){const t=bd(e.pattern);return Zs(t)?[...fl(t)]:[]}function Qe(e,t){return M({[T]:"Literal",const:e,type:typeof e},t)}function D1(e){return M({[T]:"Boolean",type:"boolean"},e)}function $d(e){return M({[T]:"BigInt",type:"bigint"},e)}function qo(e){return M({[T]:"Number",type:"number"},e)}function Po(e){return M({[T]:"String",type:"string"},e)}function*Jx(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield D1():t==="number"?yield qo():t==="bigint"?yield $d():t==="string"?yield Po():yield(()=>{const n=t.split("|").map(r=>Qe(r.trim()));return n.length===0?Pe():n.length===1?n[0]:Gi(n)})()}function*Hx(e){if(e[1]!=="{"){const t=Qe("$"),n=Gc(e.slice(1));return yield*[t,...n]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const n=Jx(e.slice(2,t)),r=Gc(e.slice(t+1));return yield*[...n,...r]}yield Qe(e)}function*Gc(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const n=Qe(e.slice(0,t)),r=Hx(e.slice(t));return yield*[n,...r]}yield Qe(e)}function Xx(e){return[...Gc(e)]}class Qx extends Dt{}function eC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E1(e,t){return Uo(e)?e.pattern.slice(1,e.pattern.length-1):pt(e)?`(${e.anyOf.map(n=>E1(n,t)).join("|")})`:Zi(e)?`${t}${nu}`:Ki(e)?`${t}${nu}`:tl(e)?`${t}${nu}`:da(e)?`${t}${g1}`:Ro(e)?`${t}${eC(e.const.toString())}`:ca(e)?`${t}${$x}`:(()=>{throw new Qx(`Unexpected Kind '${e[T]}'`)})()}function y0(e){return`^${e.map(t=>E1(t,"")).join("")}$`}function Cu(e){const n=v1(e).map(r=>Qe(r));return Gi(n)}function x1(e,t){const n=qe(e)?y0(Xx(e)):y0(e);return M({[T]:"TemplateLiteral",type:"string",pattern:n},t)}function tC(e){return v1(e).map(n=>n.toString())}function nC(e){const t=[];for(const n of e)t.push(...uo(n));return t}function rC(e){return[e.toString()]}function uo(e){return[...new Set(Uo(e)?tC(e):pt(e)?nC(e.anyOf):Ro(e)?rC(e.const):Zi(e)?["[number]"]:Ki(e)?["[number]"]:[])]}function oC(e,t,n){const r={};for(const o of Object.getOwnPropertyNames(t))r[o]=dl(e,uo(t[o]),n);return r}function iC(e,t,n){return oC(e,t.properties,n)}function sC(e,t,n){const r=iC(e,t,n);return Et(r)}function C1(e,t){return e.map(n=>A1(n,t))}function aC(e){return e.filter(t=>!fa(t))}function uC(e,t){return S1(aC(C1(e,t)))}function lC(e){return e.some(t=>fa(t))?[]:e}function cC(e,t){return Gi(lC(C1(e,t)))}function fC(e,t){return t in e?e[t]:t==="[number]"?Gi(e):Pe()}function dC(e,t){return t==="[number]"?e:Pe()}function mC(e,t){return t in e?e[t]:Pe()}function A1(e,t){return Tn(e)?uC(e.allOf,t):pt(e)?cC(e.anyOf,t):jo(e)?fC(e.items??[],t):Vi(e)?dC(e.items,t):er(e)?mC(e.properties,t):Pe()}function vd(e,t){return t.map(n=>A1(e,n))}function w0(e,t){return Gi(vd(e,t))}function dl(e,t,n){if(Xt(e)||Xt(t)){const r="Index types using Ref parameters require both Type and Key to be of TSchema";if(!jt(e)||!jt(t))throw new Dt(r);return it("Index",[e,t])}return $n(t)?sC(e,t,n):Lo(t)?yC(e,t,n):M(jt(t)?w0(e,uo(t)):w0(e,t),n)}function hC(e,t,n){return{[t]:dl(e,[t],pn(n))}}function pC(e,t,n){return t.reduce((r,o)=>({...r,...hC(e,o,n)}),{})}function gC(e,t,n){return pC(e,t.keys,n)}function yC(e,t,n){const r=gC(e,t,n);return Et(r)}function Dd(e,t){return M({[T]:"Iterator",type:"Iterator",items:e},t)}function wC(e){const t=[];for(let n in e)io(e[n])||t.push(n);return t}function bC(e,t){const n=wC(e),r=n.length>0?{[T]:"Object",type:"object",properties:e,required:n}:{[T]:"Object",type:"object",properties:e};return M(r,t)}var ht=bC;function F1(e,t){return M({[T]:"Promise",type:"Promise",item:e},t)}function $C(e){return M(yn(e,[la]))}function vC(e){return M({...e,[la]:"Readonly"})}function DC(e,t){return t===!1?$C(e):vC(e)}function lo(e,t){const n=t??!0;return $n(e)?CC(e,n):DC(e,n)}function EC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=lo(e[r],t);return n}function xC(e,t){return EC(e.properties,t)}function CC(e,t){const n=xC(e,t);return Et(n)}function Yi(e,t){return M(e.length>0?{[T]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[T]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function k1(e,t){return e in t?xn(e,t[e]):Et(t)}function AC(e){return{[e]:Qe(e)}}function FC(e){const t={};for(const n of e)t[n]=Qe(n);return t}function kC(e,t){return Ex(t,e)?AC(e):FC(t)}function SC(e,t){const n=kC(e,t);return k1(e,n)}function fs(e,t){return t.map(n=>xn(e,n))}function NC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(t))n[r]=xn(e,t[r]);return n}function xn(e,t){const n={...t};return io(t)?co(xn(e,yn(t,[Tr]))):nd(t)?lo(xn(e,yn(t,[la]))):$n(t)?k1(e,t.properties):Lo(t)?SC(e,t.keys):qi(t)?yd(fs(e,t.parameters),xn(e,t.returns),n):zi(t)?pa(fs(e,t.parameters),xn(e,t.returns),n):el(t)?gd(xn(e,t.items),n):nl(t)?Dd(xn(e,t.items),n):Tn(t)?fo(fs(e,t.allOf),n):pt(t)?xt(fs(e,t.anyOf),n):jo(t)?Yi(fs(e,t.items??[]),n):er(t)?ht(NC(e,t.properties),n):Vi(t)?pd(xn(e,t.items),n):rl(t)?F1(xn(e,t.item),n):t}function IC(e,t){const n={};for(const r of e)n[r]=xn(r,t);return n}function TC(e,t,n){const r=jt(e)?uo(e):e,o=t({[T]:"MappedKey",keys:r}),i=IC(r,o);return ht(i,n)}function MC(e){return M(yn(e,[Tr]))}function PC(e){return M({...e,[Tr]:"Optional"})}function OC(e,t){return t===!1?MC(e):PC(e)}function co(e,t){const n=t??!0;return $n(e)?LC(e,n):OC(e,n)}function BC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=co(e[r],t);return n}function RC(e,t){return BC(e.properties,t)}function LC(e,t){const n=RC(e,t);return Et(n)}function Yc(e,t={}){const n=e.every(o=>er(o)),r=jt(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return M(t.unevaluatedProperties===!1||jt(t.unevaluatedProperties)||n?{...r,[T]:"Intersect",type:"object",allOf:e}:{...r,[T]:"Intersect",allOf:e},t)}function UC(e){return e.every(t=>io(t))}function jC(e){return yn(e,[Tr])}function b0(e){return e.map(t=>io(t)?jC(t):t)}function _C(e,t){return UC(e)?co(Yc(b0(e),t)):Yc(b0(e),t)}function S1(e,t={}){if(e.length===1)return M(e[0],t);if(e.length===0)return Pe(t);if(e.some(n=>ve(n)))throw new Error("Cannot intersect transform types");return _C(e,t)}function fo(e,t){if(e.length===1)return M(e[0],t);if(e.length===0)return Pe(t);if(e.some(n=>ve(n)))throw new Error("Cannot intersect transform types");return Yc(e,t)}function Ji(...e){const[t,n]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new Dt("Ref: $ref must be a string");return M({[T]:"Ref",$ref:t},n)}function VC(e,t){return it("Awaited",[it(e,t)])}function WC(e){return it("Awaited",[Ji(e)])}function qC(e){return fo(N1(e))}function zC(e){return xt(N1(e))}function KC(e){return ml(e)}function N1(e){return e.map(t=>ml(t))}function ml(e,t){return M(Wi(e)?VC(e.target,e.parameters):Tn(e)?qC(e.allOf):pt(e)?zC(e.anyOf):rl(e)?KC(e.item):Xt(e)?WC(e.$ref):e,t)}function I1(e){const t=[];for(const n of e)t.push(zo(n));return t}function ZC(e){const t=I1(e);return kx(t)}function GC(e){const t=I1(e);return Fx(t)}function YC(e){return e.map((t,n)=>n.toString())}function JC(e){return["[number]"]}function HC(e){return globalThis.Object.getOwnPropertyNames(e)}function XC(e){return Jc?globalThis.Object.getOwnPropertyNames(e).map(n=>n[0]==="^"&&n[n.length-1]==="$"?n.slice(1,n.length-1):n):[]}function zo(e){return Tn(e)?ZC(e.allOf):pt(e)?GC(e.anyOf):jo(e)?YC(e.items??[]):Vi(e)?JC(e.items):er(e)?HC(e.properties):ol(e)?XC(e.patternProperties):[]}let Jc=!1;function Ii(e){Jc=!0;const t=zo(e);return Jc=!1,`^(${t.map(r=>`(${r})`).join("|")})$`}function QC(e,t){return it("KeyOf",[it(e,t)])}function eA(e){return it("KeyOf",[Ji(e)])}function tA(e,t){const n=zo(e),r=nA(n),o=Gi(r);return M(o,t)}function nA(e){return e.map(t=>t==="[number]"?qo():Qe(t))}function Ed(e,t){return Wi(e)?QC(e.target,e.parameters):Xt(e)?eA(e.$ref):$n(e)?iA(e,t):tA(e,t)}function rA(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Ed(e[r],pn(t));return n}function oA(e,t){return rA(e.properties,t)}function iA(e,t){const n=oA(e,t);return Et(n)}function T1(e){const t=zo(e),n=vd(e,t);return t.map((r,o)=>[t[o],n[o]])}function sA(e){const t=[];for(const n of e)t.push(...zo(n));return xx(t)}function aA(e){return e.filter(t=>!fa(t))}function uA(e,t){const n=[];for(const r of e)n.push(...vd(r,[t]));return aA(n)}function lA(e,t){const n={};for(const r of t)n[r]=S1(uA(e,r));return n}function cA(e,t){const n=sA(e),r=lA(e,n);return ht(r,t)}function M1(e){return M({[T]:"Date",type:"Date"},e)}function P1(e){return M({[T]:"Null",type:"null"},e)}function O1(e){return M({[T]:"Symbol",type:"symbol"},e)}function B1(e){return M({[T]:"Undefined",type:"undefined"},e)}function R1(e){return M({[T]:"Uint8Array",type:"Uint8Array"},e)}function hl(e){return M({[T]:"Unknown"},e)}function fA(e){return e.map(t=>xd(t,!1))}function dA(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=lo(xd(e[n],!1));return t}function Va(e,t){return t===!0?e:lo(e)}function xd(e,t){return _E(e)||WE(e)?Va(zs(),t):nn(e)?lo(Yi(fA(e))):ua(e)?R1():Xf(e)?M1():et(e)?Va(ht(dA(e)),t):VE(e)?Va(pa([],hl()),t):He(e)?B1():qE(e)?P1():zE(e)?O1():Jy(e)?$d():ar(e)||aa(e)||qe(e)?Qe(e):ht({})}function mA(e,t){return M(xd(e,!0),t)}function hA(e,t){return qi(e)?Yi(e.parameters,t):Pe(t)}function pA(e,t){if(He(e))throw new Error("Enum undefined or empty");const n=globalThis.Object.getOwnPropertyNames(e).filter(i=>isNaN(i)).map(i=>e[i]),o=[...new Set(n)].map(i=>Qe(i));return xt(o,{...t,[Qu]:"Enum"})}class gA extends Dt{}var E;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(E||(E={}));function In(e){return e===E.False?e:E.True}function Hi(e){throw new gA(e)}function tt(e){return ao(e)||Wo(e)||Nr(e)||Hn(e)||Yn(e)}function nt(e,t){return ao(t)?j1():Wo(t)?pl(e,t):Nr(t)?Ad(e,t):Hn(t)?q1():Yn(t)?Cd():Hi("StructuralRight")}function Cd(e,t){return E.True}function yA(e,t){return Wo(t)?pl(e,t):Nr(t)&&t.anyOf.some(n=>Yn(n)||Hn(n))?E.True:Nr(t)?E.Union:Hn(t)||Yn(t)?E.True:E.Union}function wA(e,t){return Hn(e)?E.False:Yn(e)?E.Union:ao(e)?E.True:E.False}function bA(e,t){return Me(t)&&gl(t)?E.True:tt(t)?nt(e,t):_o(t)?In(pe(e.items,t.items)):E.False}function $A(e,t){return tt(t)?nt(e,t):ad(t)?In(pe(e.items,t.items)):E.False}function vA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):il(t)?E.True:E.False}function L1(e,t){return p1(e)||Vo(e)?E.True:E.False}function DA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):Vo(t)?E.True:E.False}function EA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):sl(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>In(pe(t.parameters[r],n))===E.True)?In(pe(e.returns,t.returns)):E.False:E.False}function xA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):al(t)?E.True:E.False}function CA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):ul(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>In(pe(t.parameters[r],n))===E.True)?In(pe(e.returns,t.returns)):E.False:E.False}function U1(e,t){return so(e)&&ar(e.const)||Gt(e)||Mr(e)?E.True:E.False}function AA(e,t){return Mr(t)||Gt(t)?E.True:tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):E.False}function pl(e,t){return t.allOf.every(n=>pe(e,n)===E.True)?E.True:E.False}function FA(e,t){return e.allOf.some(n=>pe(n,t)===E.True)?E.True:E.False}function kA(e,t){return tt(t)?nt(e,t):ud(t)?In(pe(e.items,t.items)):E.False}function SA(e,t){return so(t)&&t.const===e.const?E.True:tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):Jn(t)?W1(e):Gt(t)?_1(e):Mr(t)?U1(e):Vo(t)?L1(e):E.False}function j1(e,t){return E.False}function NA(e,t){return E.True}function $0(e){let[t,n]=[e,0];for(;Fi(t);)t=t.not,n+=1;return n%2===0?t:hl()}function IA(e,t){return Fi(e)?pe($0(e),t):Fi(t)?pe(e,$0(t)):Hi("Invalid fallthrough for Not")}function TA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):ld(t)?E.True:E.False}function _1(e,t){return h1(e)||Gt(e)||Mr(e)?E.True:E.False}function MA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):Mr(t)||Gt(t)?E.True:E.False}function Qt(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function v0(e){return gl(e)}function D0(e){return Qt(e,0)||Qt(e,1)&&"description"in e.properties&&Nr(e.properties.description)&&e.properties.description.anyOf.length===2&&(Jn(e.properties.description.anyOf[0])&&To(e.properties.description.anyOf[1])||Jn(e.properties.description.anyOf[1])&&To(e.properties.description.anyOf[0]))}function ic(e){return Qt(e,0)}function E0(e){return Qt(e,0)}function PA(e){return Qt(e,0)}function OA(e){return Qt(e,0)}function BA(e){return gl(e)}function RA(e){const t=qo();return Qt(e,0)||Qt(e,1)&&"length"in e.properties&&In(pe(e.properties.length,t))===E.True}function LA(e){return Qt(e,0)}function gl(e){const t=qo();return Qt(e,0)||Qt(e,1)&&"length"in e.properties&&In(pe(e.properties.length,t))===E.True}function UA(e){const t=pa([zs()],zs());return Qt(e,0)||Qt(e,1)&&"then"in e.properties&&In(pe(e.properties.then,t))===E.True}function V1(e,t){return pe(e,t)===E.False||xu(e)&&!xu(t)?E.False:E.True}function It(e,t){return Hn(e)?E.False:Yn(e)?E.Union:ao(e)||m1(e)&&v0(t)||h1(e)&&ic(t)||p1(e)&&E0(t)||Ws(e)&&D0(t)||il(e)&&PA(t)||Jn(e)&&v0(t)||Ws(e)&&D0(t)||Gt(e)&&ic(t)||Mr(e)&&ic(t)||Vo(e)&&E0(t)||ha(e)&&BA(t)||al(e)&&OA(t)||sl(e)&&LA(t)||ul(e)&&RA(t)?E.True:vt(e)&&Jn(Hc(e))?t[Qu]==="Record"?E.True:E.False:vt(e)&&Gt(Hc(e))?Qt(t,0)?E.True:E.False:E.False}function jA(e,t){return tt(t)?nt(e,t):vt(t)?Mn(e,t):Me(t)?(()=>{for(const n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!xu(t.properties[n]))return E.False;if(xu(t.properties[n]))return E.True;if(V1(e.properties[n],t.properties[n])===E.False)return E.False}return E.True})():E.False}function _A(e,t){return tt(t)?nt(e,t):Me(t)&&UA(t)?E.True:cd(t)?In(pe(e.item,t.item)):E.False}function Hc(e){return ki in e.patternProperties?qo():Si in e.patternProperties?Po():Hi("Unknown record key pattern")}function Xc(e){return ki in e.patternProperties?e.patternProperties[ki]:Si in e.patternProperties?e.patternProperties[Si]:Hi("Unable to get record value schema")}function Mn(e,t){const[n,r]=[Hc(t),Xc(t)];return m1(e)&&Gt(n)&&In(pe(e,r))===E.True?E.True:ha(e)&&Gt(n)||Jn(e)&&Gt(n)||_o(e)&&Gt(n)?pe(e,r):Me(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(V1(r,e.properties[o])===E.False)return E.False;return E.True})():E.False}function VA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?pe(Xc(e),Xc(t)):E.False}function WA(e,t){const n=Vs(e)?Po():e,r=Vs(t)?Po():t;return pe(n,r)}function W1(e,t){return so(e)&&qe(e.const)||Jn(e)?E.True:E.False}function qA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):Jn(t)?E.True:E.False}function zA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):Ws(t)?E.True:E.False}function KA(e,t){return qs(e)?pe(Cu(e),t):qs(t)?pe(e,Cu(t)):Hi("Invalid fallthrough for TemplateLiteral")}function ZA(e,t){return _o(t)&&e.items!==void 0&&e.items.every(n=>pe(n,t.items)===E.True)}function GA(e,t){return ao(e)?E.True:Hn(e)?E.False:Yn(e)?E.Union:E.False}function YA(e,t){return tt(t)?nt(e,t):Me(t)&&gl(t)||_o(t)&&ZA(e,t)?E.True:ll(t)?He(e.items)&&!He(t.items)||!He(e.items)&&He(t.items)?E.False:He(e.items)&&!He(t.items)||e.items.every((n,r)=>pe(n,t.items[r])===E.True)?E.True:E.False:E.False}function JA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):ha(t)?E.True:E.False}function HA(e,t){return tt(t)?nt(e,t):Me(t)?It(e,t):vt(t)?Mn(e,t):cl(t)?eF(e):To(t)?E.True:E.False}function Ad(e,t){return t.anyOf.some(n=>pe(e,n)===E.True)?E.True:E.False}function XA(e,t){return e.anyOf.every(n=>pe(n,t)===E.True)?E.True:E.False}function q1(e,t){return E.True}function QA(e,t){return ao(t)?j1():Wo(t)?pl(e,t):Nr(t)?Ad(e,t):Yn(t)?Cd():Jn(t)?W1(e):Gt(t)?_1(e):Mr(t)?U1(e):Vo(t)?L1(e):_o(t)?wA(e):ll(t)?GA(e):Me(t)?It(e,t):Hn(t)?E.True:E.False}function eF(e,t){return To(e)||To(e)?E.True:E.False}function tF(e,t){return Wo(t)?pl(e,t):Nr(t)?Ad(e,t):Hn(t)?q1():Yn(t)?Cd():Me(t)?It(e,t):cl(t)?E.True:E.False}function pe(e,t){return qs(e)||qs(t)?KA(e,t):Vs(e)||Vs(t)?WA(e,t):Fi(e)||Fi(t)?IA(e,t):Yn(e)?yA(e,t):_o(e)?bA(e,t):il(e)?vA(e,t):Vo(e)?DA(e,t):ad(e)?$A(e,t):sl(e)?EA(e,t):al(e)?xA(e,t):ul(e)?CA(e,t):Mr(e)?AA(e,t):Wo(e)?FA(e,t):ud(e)?kA(e,t):so(e)?SA(e,t):ao(e)?NA():ld(e)?TA(e,t):Gt(e)?MA(e,t):Me(e)?jA(e,t):vt(e)?VA(e,t):Jn(e)?qA(e,t):Ws(e)?zA(e,t):ll(e)?YA(e,t):cd(e)?_A(e,t):ha(e)?JA(e,t):To(e)?HA(e,t):Nr(e)?XA(e,t):Hn(e)?QA(e,t):cl(e)?tF(e,t):Hi(`Unknown left type operand '${e[T]}'`)}function ga(e,t){return pe(e,t)}function nF(e,t,n,r,o){const i={};for(const s of globalThis.Object.getOwnPropertyNames(e))i[s]=Fd(e[s],t,n,r,pn(o));return i}function rF(e,t,n,r,o){return nF(e.properties,t,n,r,o)}function oF(e,t,n,r,o){const i=rF(e,t,n,r,o);return Et(i)}function iF(e,t,n,r){const o=ga(e,t);return o===E.Union?xt([n,r]):o===E.True?n:r}function Fd(e,t,n,r,o){return $n(e)?oF(e,t,n,r,o):Lo(e)?M(lF(e,t,n,r,o)):M(iF(e,t,n,r),o)}function sF(e,t,n,r,o){return{[e]:Fd(Qe(e),t,n,r,pn(o))}}function aF(e,t,n,r,o){return e.reduce((i,s)=>({...i,...sF(s,t,n,r,o)}),{})}function uF(e,t,n,r,o){return aF(e.keys,t,n,r,o)}function lF(e,t,n,r,o){const i=uF(e,t,n,r,o);return Et(i)}function cF(e){return e.allOf.every(t=>Xi(t))}function fF(e){return e.anyOf.some(t=>Xi(t))}function dF(e){return!Xi(e.not)}function Xi(e){return e[T]==="Intersect"?cF(e):e[T]==="Union"?fF(e):e[T]==="Not"?dF(e):e[T]==="Undefined"}function mF(e,t){return kd(Cu(e),t)}function hF(e,t){const n=e.filter(r=>ga(r,t)===E.False);return n.length===1?n[0]:xt(n)}function kd(e,t,n={}){return Uo(e)?M(mF(e,t),n):$n(e)?M(yF(e,t),n):M(pt(e)?hF(e.anyOf,t):ga(e,t)!==E.False?Pe():e,n)}function pF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=kd(e[r],t);return n}function gF(e,t){return pF(e.properties,t)}function yF(e,t){const n=gF(e,t);return Et(n)}function wF(e,t){return Sd(Cu(e),t)}function bF(e,t){const n=e.filter(r=>ga(r,t)!==E.False);return n.length===1?n[0]:xt(n)}function Sd(e,t,n){return Uo(e)?M(wF(e,t),n):$n(e)?M(DF(e,t),n):M(pt(e)?bF(e.anyOf,t):ga(e,t)!==E.False?e:Pe(),n)}function $F(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Sd(e[r],t);return n}function vF(e,t){return $F(e.properties,t)}function DF(e,t){const n=vF(e,t);return Et(n)}function EF(e,t){return qi(e)?M(e.returns,t):Pe(t)}function z1(e){return lo(co(e))}function Ko(e,t,n){return M({[T]:"Record",type:"object",patternProperties:{[e]:t}},n)}function Nd(e,t,n){const r={};for(const o of e)r[o]=t;return ht(r,{...n,[Qu]:"Record"})}function xF(e,t,n){return zx(e)?Nd(uo(e),t,n):Ko(e.pattern,t,n)}function CF(e,t,n){return Nd(uo(xt(e)),t,n)}function AF(e,t,n){return Nd([e.toString()],t,n)}function FF(e,t,n){return Ko(e.source,t,n)}function kF(e,t,n){const r=He(e.pattern)?Si:e.pattern;return Ko(r,t,n)}function SF(e,t,n){return Ko(Si,t,n)}function NF(e,t,n){return Ko(Dx,t,n)}function IF(e,t,n){return ht({true:t,false:t},n)}function TF(e,t,n){return Ko(ki,t,n)}function MF(e,t,n){return Ko(ki,t,n)}function K1(e,t,n={}){return pt(e)?CF(e.anyOf,t,n):Uo(e)?xF(e,t,n):Ro(e)?AF(e.const,t,n):ca(e)?IF(e,t,n):Ki(e)?TF(e,t,n):Zi(e)?MF(e,t,n):u1(e)?FF(e,t,n):da(e)?kF(e,t,n):i1(e)?SF(e,t,n):fa(e)?NF(e,t,n):Pe(n)}function Id(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function PF(e){const t=Id(e);return t===Si?Po():t===ki?qo():Po({pattern:t})}function Z1(e){return e.patternProperties[Id(e)]}function OF(e,t){return t.parameters=ya(e,t.parameters),t.returns=Xn(e,t.returns),t}function BF(e,t){return t.parameters=ya(e,t.parameters),t.returns=Xn(e,t.returns),t}function RF(e,t){return t.allOf=ya(e,t.allOf),t}function LF(e,t){return t.anyOf=ya(e,t.anyOf),t}function UF(e,t){return He(t.items)||(t.items=ya(e,t.items)),t}function jF(e,t){return t.items=Xn(e,t.items),t}function _F(e,t){return t.items=Xn(e,t.items),t}function VF(e,t){return t.items=Xn(e,t.items),t}function WF(e,t){return t.item=Xn(e,t.item),t}function qF(e,t){const n=GF(e,t.properties);return{...t,...ht(n)}}function zF(e,t){const n=Xn(e,PF(t)),r=Xn(e,Z1(t)),o=K1(n,r);return{...t,...o}}function KF(e,t){return t.index in e?e[t.index]:hl()}function ZF(e,t){const n=nd(t),r=io(t),o=Xn(e,t);return n&&r?z1(o):n&&!r?lo(o):!n&&r?co(o):o}function GF(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:ZF(e,t[r])}),{})}function ya(e,t){return t.map(n=>Xn(e,n))}function Xn(e,t){return qi(t)?OF(e,t):zi(t)?BF(e,t):Tn(t)?RF(e,t):pt(t)?LF(e,t):jo(t)?UF(e,t):Vi(t)?jF(e,t):el(t)?_F(e,t):nl(t)?VF(e,t):rl(t)?WF(e,t):er(t)?qF(e,t):ol(t)?zF(e,t):s1(t)?KF(e,t):t}function YF(e,t){return Xn(t,Qf(e))}function JF(e){return M({[T]:"Integer",type:"integer"},e)}function HF(e,t,n){return{[e]:Qi(Qe(e),t,pn(n))}}function XF(e,t,n){return e.reduce((o,i)=>({...o,...HF(i,t,n)}),{})}function QF(e,t,n){return XF(e.keys,t,n)}function ek(e,t,n){const r=QF(e,t,n);return Et(r)}function tk(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join("")}function nk(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join("")}function rk(e){return e.toUpperCase()}function ok(e){return e.toLowerCase()}function ik(e,t,n){const r=bd(e.pattern);if(!Zs(r))return{...e,pattern:G1(e.pattern,t)};const s=[...fl(r)].map(l=>Qe(l)),a=Y1(s,t),u=xt(a);return x1([u],n)}function G1(e,t){return typeof e=="string"?t==="Uncapitalize"?tk(e):t==="Capitalize"?nk(e):t==="Uppercase"?rk(e):t==="Lowercase"?ok(e):e:e.toString()}function Y1(e,t){return e.map(n=>Qi(n,t))}function Qi(e,t,n={}){return Lo(e)?ek(e,t,n):Uo(e)?ik(e,t,n):pt(e)?xt(Y1(e.anyOf,t),n):Ro(e)?Qe(G1(e.const,t),n):M(e,n)}function sk(e,t={}){return Qi(e,"Capitalize",t)}function ak(e,t={}){return Qi(e,"Lowercase",t)}function uk(e,t={}){return Qi(e,"Uncapitalize",t)}function lk(e,t={}){return Qi(e,"Uppercase",t)}function ck(e,t,n){const r={};for(const o of globalThis.Object.getOwnPropertyNames(e))r[o]=yl(e[o],t,pn(n));return r}function fk(e,t,n){return ck(e.properties,t,n)}function dk(e,t,n){const r=fk(e,t,n);return Et(r)}function mk(e,t){return e.map(n=>Td(n,t))}function hk(e,t){return e.map(n=>Td(n,t))}function pk(e,t){const{[t]:n,...r}=e;return r}function gk(e,t){return t.reduce((n,r)=>pk(n,r),e)}function yk(e,t){const n=yn(e,[Zt,"$id","required","properties"]),r=gk(e.properties,t);return ht(r,n)}function wk(e){const t=e.reduce((n,r)=>a1(r)?[...n,Qe(r)]:n,[]);return xt(t)}function Td(e,t){return Tn(e)?fo(mk(e.allOf,t)):pt(e)?xt(hk(e.anyOf,t)):er(e)?yk(e,t):ht({})}function yl(e,t,n){const r=nn(t)?wk(t):t,o=jt(t)?uo(t):t,i=Xt(e),s=Xt(t);return $n(e)?dk(e,o,n):Lo(t)?Dk(e,t,n):i&&s?it("Omit",[e,r],n):!i&&s?it("Omit",[e,r],n):i&&!s?it("Omit",[e,r],n):M({...Td(e,o),...n})}function bk(e,t,n){return{[t]:yl(e,[t],pn(n))}}function $k(e,t,n){return t.reduce((r,o)=>({...r,...bk(e,o,n)}),{})}function vk(e,t,n){return $k(e,t.keys,n)}function Dk(e,t,n){const r=vk(e,t,n);return Et(r)}function Ek(e,t,n){const r={};for(const o of globalThis.Object.getOwnPropertyNames(e))r[o]=wl(e[o],t,pn(n));return r}function xk(e,t,n){return Ek(e.properties,t,n)}function Ck(e,t,n){const r=xk(e,t,n);return Et(r)}function Ak(e,t){return e.map(n=>Md(n,t))}function Fk(e,t){return e.map(n=>Md(n,t))}function kk(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Sk(e,t){const n=yn(e,[Zt,"$id","required","properties"]),r=kk(e.properties,t);return ht(r,n)}function Nk(e){const t=e.reduce((n,r)=>a1(r)?[...n,Qe(r)]:n,[]);return xt(t)}function Md(e,t){return Tn(e)?fo(Ak(e.allOf,t)):pt(e)?xt(Fk(e.anyOf,t)):er(e)?Sk(e,t):ht({})}function wl(e,t,n){const r=nn(t)?Nk(t):t,o=jt(t)?uo(t):t,i=Xt(e),s=Xt(t);return $n(e)?Ck(e,o,n):Lo(t)?Pk(e,t,n):i&&s?it("Pick",[e,r],n):!i&&s?it("Pick",[e,r],n):i&&!s?it("Pick",[e,r],n):M({...Md(e,o),...n})}function Ik(e,t,n){return{[t]:wl(e,[t],pn(n))}}function Tk(e,t,n){return t.reduce((r,o)=>({...r,...Ik(e,o,n)}),{})}function Mk(e,t,n){return Tk(e,t.keys,n)}function Pk(e,t,n){const r=Mk(e,t,n);return Et(r)}function Ok(e,t){return it("Partial",[it(e,t)])}function Bk(e){return it("Partial",[Ji(e)])}function Rk(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=co(e[n]);return t}function Lk(e){const t=yn(e,[Zt,"$id","required","properties"]),n=Rk(e.properties);return ht(n,t)}function x0(e){return e.map(t=>J1(t))}function J1(e){return Wi(e)?Ok(e.target,e.parameters):Xt(e)?Bk(e.$ref):Tn(e)?fo(x0(e.allOf)):pt(e)?xt(x0(e.anyOf)):er(e)?Lk(e):tl(e)||ca(e)||Ki(e)||Ro(e)||rd(e)||Zi(e)||da(e)||od(e)||ma(e)?e:ht({})}function Pd(e,t){return $n(e)?_k(e,t):M({...J1(e),...t})}function Uk(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Pd(e[r],pn(t));return n}function jk(e,t){return Uk(e.properties,t)}function _k(e,t){const n=jk(e,t);return Et(n)}function Vk(e,t){return it("Required",[it(e,t)])}function Wk(e){return it("Required",[Ji(e)])}function qk(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=yn(e[n],[Tr]);return t}function zk(e){const t=yn(e,[Zt,"$id","required","properties"]),n=qk(e.properties);return ht(n,t)}function C0(e){return e.map(t=>H1(t))}function H1(e){return Wi(e)?Vk(e.target,e.parameters):Xt(e)?Wk(e.$ref):Tn(e)?fo(C0(e.allOf)):pt(e)?xt(C0(e.anyOf)):er(e)?zk(e):tl(e)||ca(e)||Ki(e)||Ro(e)||rd(e)||Zi(e)||da(e)||od(e)||ma(e)?e:ht({})}function Od(e,t){return $n(e)?Gk(e,t):M({...H1(e),...t})}function Kk(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Od(e[r],t);return n}function Zk(e,t){return Kk(e.properties,t)}function Gk(e,t){const n=Zk(e,t);return Et(n)}function Yk(e,t){return t.map(n=>Xt(n)?Bd(e,n.$ref):wn(e,n))}function Bd(e,t){return t in e?Xt(e[t])?Bd(e,e[t].$ref):wn(e,e[t]):Pe()}function Jk(e){return ml(e[0])}function Hk(e){return dl(e[0],e[1])}function Xk(e){return Ed(e[0])}function Qk(e){return Pd(e[0])}function e4(e){return yl(e[0],e[1])}function t4(e){return wl(e[0],e[1])}function n4(e){return Od(e[0])}function r4(e,t,n){const r=Yk(e,n);return t==="Awaited"?Jk(r):t==="Index"?Hk(r):t==="KeyOf"?Xk(r):t==="Partial"?Qk(r):t==="Omit"?e4(r):t==="Pick"?t4(r):t==="Required"?n4(r):Pe()}function o4(e,t){return pd(wn(e,t))}function i4(e,t){return gd(wn(e,t))}function s4(e,t,n){return yd(wa(e,t),wn(e,n))}function a4(e,t,n){return pa(wa(e,t),wn(e,n))}function u4(e,t){return fo(wa(e,t))}function l4(e,t){return Dd(wn(e,t))}function c4(e,t){return ht(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:wn(e,t[r])}),{}))}function f4(e,t){const[n,r]=[wn(e,Z1(t)),Id(t)],o=Qf(t);return o.patternProperties[r]=n,o}function d4(e,t){return Xt(t)?{...Bd(e,t.$ref),[Zt]:t[Zt]}:t}function m4(e,t){return Yi(wa(e,t))}function h4(e,t){return xt(wa(e,t))}function wa(e,t){return t.map(n=>wn(e,n))}function wn(e,t){return io(t)?M(wn(e,yn(t,[Tr])),t):nd(t)?M(wn(e,yn(t,[la])),t):ve(t)?M(d4(e,t),t):Vi(t)?M(o4(e,t.items),t):el(t)?M(i4(e,t.items),t):Wi(t)?M(r4(e,t.target,t.parameters)):qi(t)?M(s4(e,t.parameters,t.returns),t):zi(t)?M(a4(e,t.parameters,t.returns),t):Tn(t)?M(u4(e,t.allOf),t):nl(t)?M(l4(e,t.items),t):er(t)?M(c4(e,t.properties),t):ol(t)?M(f4(e,t)):jo(t)?M(m4(e,t.items||[]),t):pt(t)?M(h4(e,t.anyOf),t):t}function p4(e,t){return t in e?wn(e,e[t]):Pe()}function g4(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:p4(e,n)}),{})}class y4{constructor(t){const n=g4(t),r=this.WithIdentifiers(n);this.$defs=r}Import(t,n){const r={...this.$defs,[t]:M(this.$defs[t],n)};return M({[T]:"Import",$defs:r,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:{...t[r],$id:r}}),{})}}function w4(e){return new y4(e)}function b4(e,t){return M({[T]:"Not",not:e},t)}function $4(e,t){return zi(e)?Yi(e.parameters,t):Pe()}let v4=0;function D4(e,t={}){He(t.$id)&&(t.$id=`T${v4++}`);const n=Qf(e({[T]:"This",$ref:`${t.$id}`}));return n.$id=t.$id,M({[Qu]:"Recursive",...n},t)}function E4(e,t){const n=qe(e)?new globalThis.RegExp(e):e;return M({[T]:"RegExp",type:"RegExp",source:n.source,flags:n.flags},t)}function x4(e){return Tn(e)?e.allOf:pt(e)?e.anyOf:jo(e)?e.items??[]:[]}function C4(e){return x4(e)}function A4(e,t){return zi(e)?M(e.returns,t):Pe(t)}class F4{constructor(t){this.schema=t}Decode(t){return new k4(this.schema,t)}}class k4{constructor(t,n){this.schema=t,this.decode=n}EncodeTransform(t,n){const i={Encode:s=>n[Zt].Encode(t(s)),Decode:s=>this.decode(n[Zt].Decode(s))};return{...n,[Zt]:i}}EncodeSchema(t,n){const r={Decode:this.decode,Encode:t};return{...n,[Zt]:r}}Encode(t){return ve(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function S4(e){return new F4(e)}function N4(e={}){return M({[T]:e[T]??"Unsafe"},e)}function I4(e){return M({[T]:"Void",type:"void"},e)}const T4=Object.freeze(Object.defineProperty({__proto__:null,Any:zs,Argument:Sx,Array:pd,AsyncIterator:gd,Awaited:ml,BigInt:$d,Boolean:D1,Capitalize:sk,Composite:cA,Const:mA,Constructor:yd,ConstructorParameters:hA,Date:M1,Enum:pA,Exclude:kd,Extends:Fd,Extract:Sd,Function:pa,Index:dl,InstanceType:EF,Instantiate:YF,Integer:JF,Intersect:fo,Iterator:Dd,KeyOf:Ed,Literal:Qe,Lowercase:ak,Mapped:TC,Module:w4,Never:Pe,Not:b4,Null:P1,Number:qo,Object:ht,Omit:yl,Optional:co,Parameters:$4,Partial:Pd,Pick:wl,Promise:F1,Readonly:lo,ReadonlyOptional:z1,Record:K1,Recursive:D4,Ref:Ji,RegExp:E4,Required:Od,Rest:C4,ReturnType:A4,String:Po,Symbol:O1,TemplateLiteral:x1,Transform:S4,Tuple:Yi,Uint8Array:R1,Uncapitalize:uk,Undefined:B1,Union:xt,Unknown:hl,Unsafe:N4,Uppercase:lk,Void:I4},Symbol.toStringTag,{value:"Module"})),Ne=T4;function X1(e){switch(e.errorType){case $.ArrayContains:return"Expected array to contain at least one matching value";case $.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case $.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case $.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case $.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case $.ArrayUniqueItems:return"Expected array elements to be unique";case $.Array:return"Expected array";case $.AsyncIterator:return"Expected AsyncIterator";case $.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case $.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case $.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case $.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case $.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case $.BigInt:return"Expected bigint";case $.Boolean:return"Expected boolean";case $.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case $.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case $.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case $.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case $.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case $.Date:return"Expected Date";case $.Function:return"Expected function";case $.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case $.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case $.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case $.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case $.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case $.Integer:return"Expected integer";case $.IntersectUnevaluatedProperties:return"Unexpected property";case $.Intersect:return"Expected all values to match";case $.Iterator:return"Expected Iterator";case $.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case $.Never:return"Never";case $.Not:return"Value should not match";case $.Null:return"Expected null";case $.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case $.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case $.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case $.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case $.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case $.Number:return"Expected number";case $.Object:return"Expected object";case $.ObjectAdditionalProperties:return"Unexpected property";case $.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case $.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case $.ObjectRequiredProperty:return"Expected required property";case $.Promise:return"Expected Promise";case $.RegExp:return"Expected string to match regular expression";case $.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case $.StringFormat:return`Expected string to match '${e.schema.format}' format`;case $.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case $.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case $.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case $.String:return"Expected string";case $.Symbol:return"Expected symbol";case $.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case $.Tuple:return"Expected tuple";case $.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case $.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case $.Uint8Array:return"Expected Uint8Array";case $.Undefined:return"Expected undefined";case $.Union:return"Expected union value";case $.Void:return"Expected void";case $.Kind:return`Expected kind '${e.schema[T]}'`;default:return"Unknown error type"}}let Q1=X1;function M4(e){Q1=e}function P4(){return Q1}class O4 extends Dt{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function B4(e,t){const n=t.find(r=>r.$id===e.$ref);if(n===void 0)throw new O4(e);return Pn(n,t)}function bl(e,t){return!fn(e.$id)||t.some(n=>n.$id===e.$id)||t.push(e),t}function Pn(e,t){return e[T]==="This"||e[T]==="Ref"?B4(e,t):e}class R4 extends Dt{constructor(t){super("Unable to hash value"),this.value=t}}var bn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(bn||(bn={}));let si=BigInt("14695981039346656037");const[L4,U4]=[BigInt("1099511628211"),BigInt("18446744073709551616")],j4=Array.from({length:256}).map((e,t)=>BigInt(t)),ew=new Float64Array(1),tw=new DataView(ew.buffer),nw=new Uint8Array(ew.buffer);function*_4(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function V4(e){Nt(bn.Array);for(const t of e)Ti(t)}function W4(e){Nt(bn.Boolean),Nt(e?1:0)}function q4(e){Nt(bn.BigInt),tw.setBigInt64(0,e);for(const t of nw)Nt(t)}function z4(e){Nt(bn.Date),Ti(e.getTime())}function K4(e){Nt(bn.Null)}function Z4(e){Nt(bn.Number),tw.setFloat64(0,e);for(const t of nw)Nt(t)}function G4(e){Nt(bn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Ti(t),Ti(e[t])}function Y4(e){Nt(bn.String);for(let t=0;t<e.length;t++)for(const n of _4(e.charCodeAt(t)))Nt(n)}function J4(e){Nt(bn.Symbol),Ti(e.description)}function H4(e){Nt(bn.Uint8Array);for(let t=0;t<e.length;t++)Nt(e[t])}function X4(e){return Nt(bn.Undefined)}function Ti(e){if(gn(e))return V4(e);if(Hu(e))return W4(e);if($r(e))return q4(e);if(ed(e))return z4(e);if(Ju(e))return K4();if(ee(e))return Z4(e);if(lr(e))return G4(e);if(fn(e))return Y4(e);if(Xu(e))return J4(e);if(td(e))return H4(e);if(oo(e))return X4();throw new R4(e)}function Nt(e){si=si^j4[e],si=si*L4%U4}function Rd(e){return si=BigInt("14695981039346656037"),Ti(e),si}class Q4 extends Dt{constructor(t){super("Unknown type"),this.schema=t}}function e3(e){return e[T]==="Any"||e[T]==="Unknown"}function re(e){return e!==void 0}function t3(e,t,n){return!0}function n3(e,t,n){return!0}function r3(e,t,n){if(!gn(n)||re(e.minItems)&&!(n.length>=e.minItems)||re(e.maxItems)&&!(n.length<=e.maxItems)||!n.every(i=>dt(e.items,t,i))||e.uniqueItems===!0&&!(function(){const i=new Set;for(const s of n){const a=Rd(s);if(i.has(a))return!1;i.add(a)}return!0})())return!1;if(!(re(e.contains)||ee(e.minContains)||ee(e.maxContains)))return!0;const r=re(e.contains)?e.contains:Pe(),o=n.reduce((i,s)=>dt(r,t,s)?i+1:i,0);return!(o===0||ee(e.minContains)&&o<e.minContains||ee(e.maxContains)&&o>e.maxContains)}function o3(e,t,n){return Xy(n)}function i3(e,t,n){return!(!$r(n)||re(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||re(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||re(e.maximum)&&!(n<=e.maximum)||re(e.minimum)&&!(n>=e.minimum)||re(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function s3(e,t,n){return Hu(n)}function a3(e,t,n){return dt(e.returns,t,n.prototype)}function u3(e,t,n){return!(!ed(n)||re(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||re(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||re(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||re(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||re(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function l3(e,t,n){return r1(n)}function c3(e,t,n){const r=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return dt(o,[...t,...r],n)}function f3(e,t,n){return!(!n1(n)||re(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||re(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||re(e.maximum)&&!(n<=e.maximum)||re(e.minimum)&&!(n>=e.minimum)||re(e.multipleOf)&&n%e.multipleOf!==0)}function d3(e,t,n){const r=e.allOf.every(o=>dt(o,t,n));if(e.unevaluatedProperties===!1){const o=new RegExp(Ii(e)),i=Object.getOwnPropertyNames(n).every(s=>o.test(s));return r&&i}else if(jt(e.unevaluatedProperties)){const o=new RegExp(Ii(e)),i=Object.getOwnPropertyNames(n).every(s=>o.test(s)||dt(e.unevaluatedProperties,t,n[s]));return r&&i}else return r}function m3(e,t,n){return Qy(n)}function h3(e,t,n){return n===e.const}function p3(e,t,n){return!1}function g3(e,t,n){return!dt(e.not,t,n)}function y3(e,t,n){return Ju(n)}function w3(e,t,n){return!(!Ve.IsNumberLike(n)||re(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||re(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||re(e.minimum)&&!(n>=e.minimum)||re(e.maximum)&&!(n<=e.maximum)||re(e.multipleOf)&&n%e.multipleOf!==0)}function b3(e,t,n){if(!Ve.IsObjectLike(n)||re(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||re(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const r=Object.getOwnPropertyNames(e.properties);for(const o of r){const i=e.properties[o];if(e.required&&e.required.includes(o)){if(!dt(i,t,n[o])||(Xi(i)||e3(i))&&!(o in n))return!1}else if(Ve.IsExactOptionalProperty(n,o)&&!dt(i,t,n[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&o.length===r.length?!0:o.every(i=>r.includes(i))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(n).every(i=>r.includes(i)||dt(e.additionalProperties,t,n[i])):!0}function $3(e,t,n){return e1(n)}function v3(e,t,n){if(!Ve.IsRecordLike(n)||re(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||re(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const[r,o]=Object.entries(e.patternProperties)[0],i=new RegExp(r),s=Object.entries(n).every(([l,c])=>i.test(l)?dt(o,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(n).every(([l,c])=>i.test(l)?!0:dt(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(l=>i.test(l)):!0;return s&&a&&u}function D3(e,t,n){return dt(Pn(e,t),t,n)}function E3(e,t,n){const r=new RegExp(e.source,e.flags);return re(e.minLength)&&!(n.length>=e.minLength)||re(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function x3(e,t,n){return!fn(n)||re(e.minLength)&&!(n.length>=e.minLength)||re(e.maxLength)&&!(n.length<=e.maxLength)||re(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:re(e.format)?fd(e.format)?dd(e.format)(n):!1:!0}function C3(e,t,n){return Xu(n)}function A3(e,t,n){return fn(n)&&new RegExp(e.pattern).test(n)}function F3(e,t,n){return dt(Pn(e,t),t,n)}function k3(e,t,n){if(!gn(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!dt(e.items[r],t,n[r]))return!1;return!0}function S3(e,t,n){return oo(n)}function N3(e,t,n){return e.anyOf.some(r=>dt(r,t,n))}function I3(e,t,n){return!(!td(n)||re(e.maxByteLength)&&!(n.length<=e.maxByteLength)||re(e.minByteLength)&&!(n.length>=e.minByteLength))}function T3(e,t,n){return!0}function M3(e,t,n){return Ve.IsVoidLike(n)}function P3(e,t,n){return Mo(e[T])?hd(e[T])(e,n):!1}function dt(e,t,n){const r=re(e.$id)?bl(e,t):t,o=e;switch(o[T]){case"Any":return t3();case"Argument":return n3();case"Array":return r3(o,r,n);case"AsyncIterator":return o3(o,r,n);case"BigInt":return i3(o,r,n);case"Boolean":return s3(o,r,n);case"Constructor":return a3(o,r,n);case"Date":return u3(o,r,n);case"Function":return l3(o,r,n);case"Import":return c3(o,r,n);case"Integer":return f3(o,r,n);case"Intersect":return d3(o,r,n);case"Iterator":return m3(o,r,n);case"Literal":return h3(o,r,n);case"Never":return p3();case"Not":return g3(o,r,n);case"Null":return y3(o,r,n);case"Number":return w3(o,r,n);case"Object":return b3(o,r,n);case"Promise":return $3(o,r,n);case"Record":return v3(o,r,n);case"Ref":return D3(o,r,n);case"RegExp":return E3(o,r,n);case"String":return x3(o,r,n);case"Symbol":return C3(o,r,n);case"TemplateLiteral":return A3(o,r,n);case"This":return F3(o,r,n);case"Tuple":return k3(o,r,n);case"Undefined":return S3(o,r,n);case"Union":return N3(o,r,n);case"Uint8Array":return I3(o,r,n);case"Unknown":return T3();case"Void":return M3(o,r,n);default:if(!Mo(o[T]))throw new Q4(o);return P3(o,r,n)}}function Au(...e){return e.length===3?dt(e[0],e[1],e[2]):dt(e[0],[],e[1])}var $;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})($||($={}));class O3 extends Dt{constructor(t){super("Unknown type"),this.schema=t}}function yr(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function ne(e){return e!==void 0}class rw{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function P(e,t,n,r,o=[]){return{type:e,schema:t,path:n,value:r,message:P4()({errorType:e,path:n,schema:t,value:r,errors:o}),errors:o}}function*B3(e,t,n,r){}function*R3(e,t,n,r){}function*L3(e,t,n,r){if(!gn(r))return yield P($.Array,e,n,r);ne(e.minItems)&&!(r.length>=e.minItems)&&(yield P($.ArrayMinItems,e,n,r)),ne(e.maxItems)&&!(r.length<=e.maxItems)&&(yield P($.ArrayMaxItems,e,n,r));for(let s=0;s<r.length;s++)yield*mt(e.items,t,`${n}/${s}`,r[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of r){const u=Rd(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield P($.ArrayUniqueItems,e,n,r)),!(ne(e.contains)||ne(e.minContains)||ne(e.maxContains)))return;const o=ne(e.contains)?e.contains:Pe(),i=r.reduce((s,a,u)=>mt(o,t,`${n}${u}`,a).next().done===!0?s+1:s,0);i===0&&(yield P($.ArrayContains,e,n,r)),ee(e.minContains)&&i<e.minContains&&(yield P($.ArrayMinContains,e,n,r)),ee(e.maxContains)&&i>e.maxContains&&(yield P($.ArrayMaxContains,e,n,r))}function*U3(e,t,n,r){Xy(r)||(yield P($.AsyncIterator,e,n,r))}function*j3(e,t,n,r){if(!$r(r))return yield P($.BigInt,e,n,r);ne(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P($.BigIntExclusiveMaximum,e,n,r)),ne(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P($.BigIntExclusiveMinimum,e,n,r)),ne(e.maximum)&&!(r<=e.maximum)&&(yield P($.BigIntMaximum,e,n,r)),ne(e.minimum)&&!(r>=e.minimum)&&(yield P($.BigIntMinimum,e,n,r)),ne(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield P($.BigIntMultipleOf,e,n,r))}function*_3(e,t,n,r){Hu(r)||(yield P($.Boolean,e,n,r))}function*V3(e,t,n,r){yield*mt(e.returns,t,n,r.prototype)}function*W3(e,t,n,r){if(!ed(r))return yield P($.Date,e,n,r);ne(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield P($.DateExclusiveMaximumTimestamp,e,n,r)),ne(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield P($.DateExclusiveMinimumTimestamp,e,n,r)),ne(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield P($.DateMaximumTimestamp,e,n,r)),ne(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield P($.DateMinimumTimestamp,e,n,r)),ne(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield P($.DateMultipleOfTimestamp,e,n,r))}function*q3(e,t,n,r){r1(r)||(yield P($.Function,e,n,r))}function*z3(e,t,n,r){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];yield*mt(i,[...t,...o],n,r)}function*K3(e,t,n,r){if(!n1(r))return yield P($.Integer,e,n,r);ne(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P($.IntegerExclusiveMaximum,e,n,r)),ne(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P($.IntegerExclusiveMinimum,e,n,r)),ne(e.maximum)&&!(r<=e.maximum)&&(yield P($.IntegerMaximum,e,n,r)),ne(e.minimum)&&!(r>=e.minimum)&&(yield P($.IntegerMinimum,e,n,r)),ne(e.multipleOf)&&r%e.multipleOf!==0&&(yield P($.IntegerMultipleOf,e,n,r))}function*Z3(e,t,n,r){let o=!1;for(const i of e.allOf)for(const s of mt(i,t,n,r))o=!0,yield s;if(o)return yield P($.Intersect,e,n,r);if(e.unevaluatedProperties===!1){const i=new RegExp(Ii(e));for(const s of Object.getOwnPropertyNames(r))i.test(s)||(yield P($.IntersectUnevaluatedProperties,e,`${n}/${s}`,r))}if(typeof e.unevaluatedProperties=="object"){const i=new RegExp(Ii(e));for(const s of Object.getOwnPropertyNames(r))if(!i.test(s)){const a=mt(e.unevaluatedProperties,t,`${n}/${s}`,r[s]).next();a.done||(yield a.value)}}}function*G3(e,t,n,r){Qy(r)||(yield P($.Iterator,e,n,r))}function*Y3(e,t,n,r){r!==e.const&&(yield P($.Literal,e,n,r))}function*J3(e,t,n,r){yield P($.Never,e,n,r)}function*H3(e,t,n,r){mt(e.not,t,n,r).next().done===!0&&(yield P($.Not,e,n,r))}function*X3(e,t,n,r){Ju(r)||(yield P($.Null,e,n,r))}function*Q3(e,t,n,r){if(!Ve.IsNumberLike(r))return yield P($.Number,e,n,r);ne(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P($.NumberExclusiveMaximum,e,n,r)),ne(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P($.NumberExclusiveMinimum,e,n,r)),ne(e.maximum)&&!(r<=e.maximum)&&(yield P($.NumberMaximum,e,n,r)),ne(e.minimum)&&!(r>=e.minimum)&&(yield P($.NumberMinimum,e,n,r)),ne(e.multipleOf)&&r%e.multipleOf!==0&&(yield P($.NumberMultipleOf,e,n,r))}function*e6(e,t,n,r){if(!Ve.IsObjectLike(r))return yield P($.Object,e,n,r);ne(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P($.ObjectMinProperties,e,n,r)),ne(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P($.ObjectMaxProperties,e,n,r));const o=Array.isArray(e.required)?e.required:[],i=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(r);for(const a of o)s.includes(a)||(yield P($.ObjectRequiredProperty,e.properties[a],`${n}/${yr(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)i.includes(a)||(yield P($.ObjectAdditionalProperties,e,`${n}/${yr(a)}`,r[a]));if(typeof e.additionalProperties=="object")for(const a of s)i.includes(a)||(yield*mt(e.additionalProperties,t,`${n}/${yr(a)}`,r[a]));for(const a of i){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*mt(u,t,`${n}/${yr(a)}`,r[a]),Xi(e)&&!(a in r)&&(yield P($.ObjectRequiredProperty,u,`${n}/${yr(a)}`,void 0))):Ve.IsExactOptionalProperty(r,a)&&(yield*mt(u,t,`${n}/${yr(a)}`,r[a]))}}function*t6(e,t,n,r){e1(r)||(yield P($.Promise,e,n,r))}function*n6(e,t,n,r){if(!Ve.IsRecordLike(r))return yield P($.Object,e,n,r);ne(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P($.ObjectMinProperties,e,n,r)),ne(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P($.ObjectMaxProperties,e,n,r));const[o,i]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[a,u]of Object.entries(r))s.test(a)&&(yield*mt(i,t,`${n}/${yr(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(r))s.test(a)||(yield*mt(e.additionalProperties,t,`${n}/${yr(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(r))if(!s.test(a))return yield P($.ObjectAdditionalProperties,e,`${n}/${yr(a)}`,u)}}function*r6(e,t,n,r){yield*mt(Pn(e,t),t,n,r)}function*o6(e,t,n,r){if(!fn(r))return yield P($.String,e,n,r);if(ne(e.minLength)&&!(r.length>=e.minLength)&&(yield P($.StringMinLength,e,n,r)),ne(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P($.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield P($.RegExp,e,n,r)}function*i6(e,t,n,r){if(!fn(r))return yield P($.String,e,n,r);ne(e.minLength)&&!(r.length>=e.minLength)&&(yield P($.StringMinLength,e,n,r)),ne(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P($.StringMaxLength,e,n,r)),fn(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield P($.StringPattern,e,n,r))),fn(e.format)&&(fd(e.format)?dd(e.format)(r)||(yield P($.StringFormat,e,n,r)):yield P($.StringFormatUnknown,e,n,r))}function*s6(e,t,n,r){Xu(r)||(yield P($.Symbol,e,n,r))}function*a6(e,t,n,r){if(!fn(r))return yield P($.String,e,n,r);new RegExp(e.pattern).test(r)||(yield P($.StringPattern,e,n,r))}function*u6(e,t,n,r){yield*mt(Pn(e,t),t,n,r)}function*l6(e,t,n,r){if(!gn(r))return yield P($.Tuple,e,n,r);if(e.items===void 0&&r.length!==0)return yield P($.TupleLength,e,n,r);if(r.length!==e.maxItems)return yield P($.TupleLength,e,n,r);if(e.items)for(let o=0;o<e.items.length;o++)yield*mt(e.items[o],t,`${n}/${o}`,r[o])}function*c6(e,t,n,r){oo(r)||(yield P($.Undefined,e,n,r))}function*f6(e,t,n,r){if(Au(e,t,r))return;const o=e.anyOf.map(i=>new rw(mt(i,t,n,r)));yield P($.Union,e,n,r,o)}function*d6(e,t,n,r){if(!td(r))return yield P($.Uint8Array,e,n,r);ne(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield P($.Uint8ArrayMaxByteLength,e,n,r)),ne(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield P($.Uint8ArrayMinByteLength,e,n,r))}function*m6(e,t,n,r){}function*h6(e,t,n,r){Ve.IsVoidLike(r)||(yield P($.Void,e,n,r))}function*p6(e,t,n,r){hd(e[T])(e,r)||(yield P($.Kind,e,n,r))}function*mt(e,t,n,r){const o=ne(e.$id)?[...t,e]:t,i=e;switch(i[T]){case"Any":return yield*B3();case"Argument":return yield*R3();case"Array":return yield*L3(i,o,n,r);case"AsyncIterator":return yield*U3(i,o,n,r);case"BigInt":return yield*j3(i,o,n,r);case"Boolean":return yield*_3(i,o,n,r);case"Constructor":return yield*V3(i,o,n,r);case"Date":return yield*W3(i,o,n,r);case"Function":return yield*q3(i,o,n,r);case"Import":return yield*z3(i,o,n,r);case"Integer":return yield*K3(i,o,n,r);case"Intersect":return yield*Z3(i,o,n,r);case"Iterator":return yield*G3(i,o,n,r);case"Literal":return yield*Y3(i,o,n,r);case"Never":return yield*J3(i,o,n,r);case"Not":return yield*H3(i,o,n,r);case"Null":return yield*X3(i,o,n,r);case"Number":return yield*Q3(i,o,n,r);case"Object":return yield*e6(i,o,n,r);case"Promise":return yield*t6(i,o,n,r);case"Record":return yield*n6(i,o,n,r);case"Ref":return yield*r6(i,o,n,r);case"RegExp":return yield*o6(i,o,n,r);case"String":return yield*i6(i,o,n,r);case"Symbol":return yield*s6(i,o,n,r);case"TemplateLiteral":return yield*a6(i,o,n,r);case"This":return yield*u6(i,o,n,r);case"Tuple":return yield*l6(i,o,n,r);case"Undefined":return yield*c6(i,o,n,r);case"Union":return yield*f6(i,o,n,r);case"Uint8Array":return yield*d6(i,o,n,r);case"Unknown":return yield*m6();case"Void":return yield*h6(i,o,n,r);default:if(!Mo(i[T]))throw new O3(e);return yield*p6(i,o,n,r)}}function g6(...e){const t=e.length===3?mt(e[0],e[1],"",e[2]):mt(e[0],[],"",e[1]);return new rw(t)}class y6 extends Dt{constructor(t,n,r){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class w6 extends Dt{constructor(t,n,r,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=t,this.path=n,this.value=r,this.error=o}}function Fe(e,t,n){try{return ve(e)?e[Zt].Decode(n):n}catch(r){throw new w6(e,t,n,r)}}function b6(e,t,n,r){return gn(r)?Fe(e,n,r.map((o,i)=>tr(e.items,t,`${n}/${i}`,o))):Fe(e,n,r)}function $6(e,t,n,r){if(!lr(r)||o1(r))return Fe(e,n,r);const o=T1(e),i=o.map(c=>c[0]),s={...r};for(const[c,f]of o)c in s&&(s[c]=tr(f,t,`${n}/${c}`,s[c]));if(!ve(e.unevaluatedProperties))return Fe(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=Fe(u,`${n}/${c}`,l[c]));return Fe(e,n,l)}function v6(e,t,n,r){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=tr(i,[...t,...o],n,r);return Fe(e,n,s)}function D6(e,t,n,r){return Fe(e,n,tr(e.not,t,n,r))}function E6(e,t,n,r){if(!lr(r))return Fe(e,n,r);const o=zo(e),i={...r};for(const l of o)t1(i,l)&&(oo(i[l])&&(!ma(e.properties[l])||Ve.IsExactOptionalProperty(i,l))||(i[l]=tr(e.properties[l],t,`${n}/${l}`,i[l])));if(!jt(e.additionalProperties))return Fe(e,n,i);const s=Object.getOwnPropertyNames(i),a=e.additionalProperties,u={...i};for(const l of s)o.includes(l)||(u[l]=Fe(a,`${n}/${l}`,u[l]));return Fe(e,n,u)}function x6(e,t,n,r){if(!lr(r))return Fe(e,n,r);const o=Object.getOwnPropertyNames(e.patternProperties)[0],i=new RegExp(o),s={...r};for(const c of Object.getOwnPropertyNames(r))i.test(c)&&(s[c]=tr(e.patternProperties[o],t,`${n}/${c}`,s[c]));if(!jt(e.additionalProperties))return Fe(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.test(c)||(l[c]=Fe(u,`${n}/${c}`,l[c]));return Fe(e,n,l)}function C6(e,t,n,r){const o=Pn(e,t);return Fe(e,n,tr(o,t,n,r))}function A6(e,t,n,r){const o=Pn(e,t);return Fe(e,n,tr(o,t,n,r))}function F6(e,t,n,r){return gn(r)&&gn(e.items)?Fe(e,n,e.items.map((o,i)=>tr(o,t,`${n}/${i}`,r[i]))):Fe(e,n,r)}function k6(e,t,n,r){for(const o of e.anyOf){if(!Au(o,t,r))continue;const i=tr(o,t,n,r);return Fe(e,n,i)}return Fe(e,n,r)}function tr(e,t,n,r){const o=bl(e,t),i=e;switch(e[T]){case"Array":return b6(i,o,n,r);case"Import":return v6(i,o,n,r);case"Intersect":return $6(i,o,n,r);case"Not":return D6(i,o,n,r);case"Object":return E6(i,o,n,r);case"Record":return x6(i,o,n,r);case"Ref":return C6(i,o,n,r);case"Symbol":return Fe(i,n,r);case"This":return A6(i,o,n,r);case"Tuple":return F6(i,o,n,r);case"Union":return k6(i,o,n,r);default:return Fe(i,n,r)}}function S6(e,t,n){return tr(e,t,"",n)}class N6 extends Dt{constructor(t,n,r){super("The encoded value does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class I6 extends Dt{constructor(t,n,r,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=t,this.path=n,this.value=r,this.error=o}}function $t(e,t,n){try{return ve(e)?e[Zt].Encode(n):n}catch(r){throw new I6(e,t,n,r)}}function T6(e,t,n,r){const o=$t(e,n,r);return gn(o)?o.map((i,s)=>Qn(e.items,t,`${n}/${s}`,i)):o}function M6(e,t,n,r){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=$t(e,n,r);return Qn(i,[...t,...o],n,s)}function P6(e,t,n,r){const o=$t(e,n,r);if(!lr(r)||o1(r))return o;const i=T1(e),s=i.map(f=>f[0]),a={...o};for(const[f,d]of i)f in a&&(a[f]=Qn(d,t,`${n}/${f}`,a[f]));if(!ve(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const f of u)s.includes(f)||(c[f]=$t(l,`${n}/${f}`,c[f]));return c}function O6(e,t,n,r){return $t(e.not,n,$t(e,n,r))}function B6(e,t,n,r){const o=$t(e,n,r);if(!lr(o))return o;const i=zo(e),s={...o};for(const c of i)t1(s,c)&&(oo(s[c])&&(!ma(e.properties[c])||Ve.IsExactOptionalProperty(s,c))||(s[c]=Qn(e.properties[c],t,`${n}/${c}`,s[c])));if(!jt(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=$t(u,`${n}/${c}`,l[c]));return l}function R6(e,t,n,r){const o=$t(e,n,r);if(!lr(r))return o;const i=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(i),a={...o};for(const f of Object.getOwnPropertyNames(r))s.test(f)&&(a[f]=Qn(e.patternProperties[i],t,`${n}/${f}`,a[f]));if(!jt(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const f of u)s.test(f)||(c[f]=$t(l,`${n}/${f}`,c[f]));return c}function L6(e,t,n,r){const o=Pn(e,t),i=Qn(o,t,n,r);return $t(e,n,i)}function U6(e,t,n,r){const o=Pn(e,t),i=Qn(o,t,n,r);return $t(e,n,i)}function j6(e,t,n,r){const o=$t(e,n,r);return gn(e.items)?e.items.map((i,s)=>Qn(i,t,`${n}/${s}`,o[s])):[]}function _6(e,t,n,r){for(const o of e.anyOf){if(!Au(o,t,r))continue;const i=Qn(o,t,n,r);return $t(e,n,i)}for(const o of e.anyOf){const i=Qn(o,t,n,r);if(Au(e,t,i))return $t(e,n,i)}return $t(e,n,r)}function Qn(e,t,n,r){const o=bl(e,t),i=e;switch(e[T]){case"Array":return T6(i,o,n,r);case"Import":return M6(i,o,n,r);case"Intersect":return P6(i,o,n,r);case"Not":return O6(i,o,n,r);case"Object":return B6(i,o,n,r);case"Record":return R6(i,o,n,r);case"Ref":return L6(i,o,n,r);case"This":return U6(i,o,n,r);case"Tuple":return j6(i,o,n,r);case"Union":return _6(i,o,n,r);default:return $t(i,n,r)}}function V6(e,t,n){return Qn(e,t,"",n)}function W6(e,t){return ve(e)||at(e.items,t)}function q6(e,t){return ve(e)||at(e.items,t)}function z6(e,t){return ve(e)||at(e.returns,t)||e.parameters.some(n=>at(n,t))}function K6(e,t){return ve(e)||at(e.returns,t)||e.parameters.some(n=>at(n,t))}function Z6(e,t){return ve(e)||ve(e.unevaluatedProperties)||e.allOf.some(n=>at(n,t))}function G6(e,t){const n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,i)=>[...o,e.$defs[i]],[]),r=e.$defs[e.$ref];return ve(e)||at(r,[...n,...t])}function Y6(e,t){return ve(e)||at(e.items,t)}function J6(e,t){return ve(e)||at(e.not,t)}function H6(e,t){return ve(e)||Object.values(e.properties).some(n=>at(n,t))||jt(e.additionalProperties)&&at(e.additionalProperties,t)}function X6(e,t){return ve(e)||at(e.item,t)}function Q6(e,t){const n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return ve(e)||at(r,t)||jt(e.additionalProperties)&&ve(e.additionalProperties)}function e8(e,t){return ve(e)?!0:at(Pn(e,t),t)}function t8(e,t){return ve(e)?!0:at(Pn(e,t),t)}function n8(e,t){return ve(e)||!oo(e.items)&&e.items.some(n=>at(n,t))}function r8(e,t){return ve(e)||e.anyOf.some(n=>at(n,t))}function at(e,t){const n=bl(e,t),r=e;if(e.$id&&Qc.has(e.$id))return!1;switch(e.$id&&Qc.add(e.$id),e[T]){case"Array":return W6(r,n);case"AsyncIterator":return q6(r,n);case"Constructor":return z6(r,n);case"Function":return K6(r,n);case"Import":return G6(r,n);case"Intersect":return Z6(r,n);case"Iterator":return Y6(r,n);case"Not":return J6(r,n);case"Object":return H6(r,n);case"Promise":return X6(r,n);case"Record":return Q6(r,n);case"Ref":return e8(r,n);case"This":return t8(r,n);case"Tuple":return n8(r,n);case"Union":return r8(r,n);default:return ve(e)}}const Qc=new Set;function o8(e,t){return Qc.clear(),at(e,t)}class i8{constructor(t,n,r,o){this.schema=t,this.references=n,this.checkFunc=r,this.code=o,this.hasTransform=o8(t,n)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return g6(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new y6(this.schema,t,this.Errors(t).First());return this.hasTransform?S6(this.schema,this.references,t):t}Encode(t){const n=this.hasTransform?V6(this.schema,this.references,t):t;if(!this.checkFunc(n))throw new N6(this.schema,t,this.Errors(t).First());return n}}var vr;(function(e){function t(i){return i===36}e.DollarSign=t;function n(i){return i===95}e.IsUnderscore=n;function r(i){return i>=65&&i<=90||i>=97&&i<=122}e.IsAlpha=r;function o(i){return i>=48&&i<=57}e.IsNumeric=o})(vr||(vr={}));var Fu;(function(e){function t(i){return i.length===0?!1:vr.IsNumeric(i.charCodeAt(0))}function n(i){if(t(i))return!1;for(let s=0;s<i.length;s++){const a=i.charCodeAt(s);if(!(vr.IsAlpha(a)||vr.IsNumeric(a)||vr.DollarSign(a)||vr.IsUnderscore(a)))return!1}return!0}function r(i){return i.replace(/'/g,"\\'")}function o(i,s){return n(s)?`${i}.${s}`:`${i}['${r(s)}']`}e.Encode=o})(Fu||(Fu={}));var ef;(function(e){function t(n){const r=[];for(let o=0;o<n.length;o++){const i=n.charCodeAt(o);vr.IsNumeric(i)||vr.IsAlpha(i)?r.push(n.charAt(o)):r.push(`_${i}_`)}return r.join("").replace(/__/g,"_")}e.Encode=t})(ef||(ef={}));var tf;(function(e){function t(n){return n.replace(/'/g,"\\'")}e.Escape=t})(tf||(tf={}));class s8 extends Dt{constructor(t){super("Unknown type"),this.schema=t}}class A0 extends Dt{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Eo;(function(e){function t(s,a,u){return Ve.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${Fu.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function n(s){return Ve.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=n;function r(s){return Ve.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=r;function o(s){return Ve.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=o;function i(s){return Ve.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=i})(Eo||(Eo={}));var As;(function(e){function t(p){return p[T]==="Any"||p[T]==="Unknown"}function*n(p,B,w){yield"true"}function*r(p,B,w){yield"true"}function*o(p,B,w){yield`Array.isArray(${w})`;const[z,_]=[xa("value","any"),xa("acc","number")];ee(p.maxItems)&&(yield`${w}.length <= ${p.maxItems}`),ee(p.minItems)&&(yield`${w}.length >= ${p.minItems}`);const V=rn(p.items,B,"value");if(yield`${w}.every((${z}) => ${V})`,Te(p.contains)||ee(p.minContains)||ee(p.maxContains)){const $e=Te(p.contains)?p.contains:Pe(),_t=rn($e,B,"value"),cr=ee(p.minContains)?[`(count >= ${p.minContains})`]:[],Ln=ee(p.maxContains)?[`(count <= ${p.maxContains})`]:[],nr=`const count = value.reduce((${_}, ${z}) => ${_t} ? acc + 1 : acc, 0)`,Ca=["(count > 0)",...cr,...Ln].join(" && ");yield`((${z}) => { ${nr}; return ${Ca}})(${w})`}p.uniqueItems===!0&&(yield`((${z}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${w})`)}function*i(p,B,w){yield`(typeof value === 'object' && Symbol.asyncIterator in ${w})`}function*s(p,B,w){yield`(typeof ${w} === 'bigint')`,$r(p.exclusiveMaximum)&&(yield`${w} < BigInt(${p.exclusiveMaximum})`),$r(p.exclusiveMinimum)&&(yield`${w} > BigInt(${p.exclusiveMinimum})`),$r(p.maximum)&&(yield`${w} <= BigInt(${p.maximum})`),$r(p.minimum)&&(yield`${w} >= BigInt(${p.minimum})`),$r(p.multipleOf)&&(yield`(${w} % BigInt(${p.multipleOf})) === 0`)}function*a(p,B,w){yield`(typeof ${w} === 'boolean')`}function*u(p,B,w){yield*Dn(p.returns,B,`${w}.prototype`)}function*l(p,B,w){yield`(${w} instanceof Date) && Number.isFinite(${w}.getTime())`,ee(p.exclusiveMaximumTimestamp)&&(yield`${w}.getTime() < ${p.exclusiveMaximumTimestamp}`),ee(p.exclusiveMinimumTimestamp)&&(yield`${w}.getTime() > ${p.exclusiveMinimumTimestamp}`),ee(p.maximumTimestamp)&&(yield`${w}.getTime() <= ${p.maximumTimestamp}`),ee(p.minimumTimestamp)&&(yield`${w}.getTime() >= ${p.minimumTimestamp}`),ee(p.multipleOfTimestamp)&&(yield`(${w}.getTime() % ${p.multipleOfTimestamp}) === 0`)}function*c(p,B,w){yield`(typeof ${w} === 'function')`}function*f(p,B,w){const z=globalThis.Object.getOwnPropertyNames(p.$defs).reduce((_,V)=>[..._,p.$defs[V]],[]);yield*Dn(Ji(p.$ref),[...B,...z],w)}function*d(p,B,w){yield`Number.isInteger(${w})`,ee(p.exclusiveMaximum)&&(yield`${w} < ${p.exclusiveMaximum}`),ee(p.exclusiveMinimum)&&(yield`${w} > ${p.exclusiveMinimum}`),ee(p.maximum)&&(yield`${w} <= ${p.maximum}`),ee(p.minimum)&&(yield`${w} >= ${p.minimum}`),ee(p.multipleOf)&&(yield`(${w} % ${p.multipleOf}) === 0`)}function*g(p,B,w){const z=p.allOf.map(_=>rn(_,B,w)).join(" && ");if(p.unevaluatedProperties===!1){const _=Br(`${new RegExp(Ii(p))};`),V=`Object.getOwnPropertyNames(${w}).every(key => ${_}.test(key))`;yield`(${z} && ${V})`}else if(Te(p.unevaluatedProperties)){const _=Br(`${new RegExp(Ii(p))};`),V=`Object.getOwnPropertyNames(${w}).every(key => ${_}.test(key) || ${rn(p.unevaluatedProperties,B,`${w}[key]`)})`;yield`(${z} && ${V})`}else yield`(${z})`}function*x(p,B,w){yield`(typeof value === 'object' && Symbol.iterator in ${w})`}function*D(p,B,w){typeof p.const=="number"||typeof p.const=="boolean"?yield`(${w} === ${p.const})`:yield`(${w} === '${tf.Escape(p.const)}')`}function*k(p,B,w){yield"false"}function*A(p,B,w){yield`(!${rn(p.not,B,w)})`}function*N(p,B,w){yield`(${w} === null)`}function*j(p,B,w){yield Eo.IsNumberLike(w),ee(p.exclusiveMaximum)&&(yield`${w} < ${p.exclusiveMaximum}`),ee(p.exclusiveMinimum)&&(yield`${w} > ${p.exclusiveMinimum}`),ee(p.maximum)&&(yield`${w} <= ${p.maximum}`),ee(p.minimum)&&(yield`${w} >= ${p.minimum}`),ee(p.multipleOf)&&(yield`(${w} % ${p.multipleOf}) === 0`)}function*q(p,B,w){yield Eo.IsObjectLike(w),ee(p.minProperties)&&(yield`Object.getOwnPropertyNames(${w}).length >= ${p.minProperties}`),ee(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${w}).length <= ${p.maxProperties}`);const z=Object.getOwnPropertyNames(p.properties);for(const _ of z){const V=Fu.Encode(w,_),$e=p.properties[_];if(p.required&&p.required.includes(_))yield*Dn($e,B,V),(Xi($e)||t($e))&&(yield`('${_}' in ${w})`);else{const _t=rn($e,B,V);yield Eo.IsExactOptionalProperty(w,_,_t)}}if(p.additionalProperties===!1)if(p.required&&p.required.length===z.length)yield`Object.getOwnPropertyNames(${w}).length === ${z.length}`;else{const _=`[${z.map(V=>`'${V}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${w}).every(key => ${_}.includes(key))`}if(typeof p.additionalProperties=="object"){const _=rn(p.additionalProperties,B,`${w}[key]`),V=`[${z.map($e=>`'${$e}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${w}).every(key => ${V}.includes(key) || ${_}))`}}function*G(p,B,w){yield`${w} instanceof Promise`}function*Le(p,B,w){yield Eo.IsRecordLike(w),ee(p.minProperties)&&(yield`Object.getOwnPropertyNames(${w}).length >= ${p.minProperties}`),ee(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${w}).length <= ${p.maxProperties}`);const[z,_]=Object.entries(p.patternProperties)[0],V=Br(`${new RegExp(z)}`),$e=rn(_,B,"value"),_t=Te(p.additionalProperties)?rn(p.additionalProperties,B,w):p.additionalProperties===!1?"false":"true",cr=`(${V}.test(key) ? ${$e} : ${_t})`;yield`(Object.entries(${w}).every(([key, value]) => ${cr}))`}function*Ct(p,B,w){const z=Pn(p,B);if(Ze.functions.has(p.$ref))return yield`${Go(p.$ref)}(${w})`;yield*Dn(z,B,w)}function*rt(p,B,w){const z=Br(`${new RegExp(p.source,p.flags)};`);yield`(typeof ${w} === 'string')`,ee(p.maxLength)&&(yield`${w}.length <= ${p.maxLength}`),ee(p.minLength)&&(yield`${w}.length >= ${p.minLength}`),yield`${z}.test(${w})`}function*Tt(p,B,w){yield`(typeof ${w} === 'string')`,ee(p.maxLength)&&(yield`${w}.length <= ${p.maxLength}`),ee(p.minLength)&&(yield`${w}.length >= ${p.minLength}`),p.pattern!==void 0&&(yield`${Br(`${new RegExp(p.pattern)};`)}.test(${w})`),p.format!==void 0&&(yield`format('${p.format}', ${w})`)}function*vn(p,B,w){yield`(typeof ${w} === 'symbol')`}function*Bn(p,B,w){yield`(typeof ${w} === 'string')`,yield`${Br(`${new RegExp(p.pattern)};`)}.test(${w})`}function*Zo(p,B,w){yield`${Go(p.$ref)}(${w})`}function*El(p,B,w){if(yield`Array.isArray(${w})`,p.items===void 0)return yield`${w}.length === 0`;yield`(${w}.length === ${p.maxItems})`;for(let z=0;z<p.items.length;z++)yield`${rn(p.items[z],B,`${w}[${z}]`)}`}function*ts(p,B,w){yield`${w} === undefined`}function*va(p,B,w){yield`(${p.anyOf.map(_=>rn(_,B,w)).join(" || ")})`}function*Rn(p,B,w){yield`${w} instanceof Uint8Array`,ee(p.maxByteLength)&&(yield`(${w}.length <= ${p.maxByteLength})`),ee(p.minByteLength)&&(yield`(${w}.length >= ${p.minByteLength})`)}function*Da(p,B,w){yield"true"}function*xl(p,B,w){yield Eo.IsVoidLike(w)}function*Ea(p,B,w){const z=Ze.instances.size;Ze.instances.set(z,p),yield`kind('${p[T]}', ${z}, ${w})`}function*Dn(p,B,w,z=!0){const _=fn(p.$id)?[...B,p]:B,V=p;if(z&&fn(p.$id)){const $e=Go(p.$id);if(Ze.functions.has($e))return yield`${$e}(${w})`;{Ze.functions.set($e,"<deferred>");const _t=mo($e,p,B,"value",!1);return Ze.functions.set($e,_t),yield`${$e}(${w})`}}switch(V[T]){case"Any":return yield*n();case"Argument":return yield*r();case"Array":return yield*o(V,_,w);case"AsyncIterator":return yield*i(V,_,w);case"BigInt":return yield*s(V,_,w);case"Boolean":return yield*a(V,_,w);case"Constructor":return yield*u(V,_,w);case"Date":return yield*l(V,_,w);case"Function":return yield*c(V,_,w);case"Import":return yield*f(V,_,w);case"Integer":return yield*d(V,_,w);case"Intersect":return yield*g(V,_,w);case"Iterator":return yield*x(V,_,w);case"Literal":return yield*D(V,_,w);case"Never":return yield*k();case"Not":return yield*A(V,_,w);case"Null":return yield*N(V,_,w);case"Number":return yield*j(V,_,w);case"Object":return yield*q(V,_,w);case"Promise":return yield*G(V,_,w);case"Record":return yield*Le(V,_,w);case"Ref":return yield*Ct(V,_,w);case"RegExp":return yield*rt(V,_,w);case"String":return yield*Tt(V,_,w);case"Symbol":return yield*vn(V,_,w);case"TemplateLiteral":return yield*Bn(V,_,w);case"This":return yield*Zo(V,_,w);case"Tuple":return yield*El(V,_,w);case"Undefined":return yield*ts(V,_,w);case"Union":return yield*va(V,_,w);case"Uint8Array":return yield*Rn(V,_,w);case"Unknown":return yield*Da();case"Void":return yield*xl(V,_,w);default:if(!Mo(V[T]))throw new s8(p);return yield*Ea(V,_,w)}}const Ze={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function rn(p,B,w,z=!0){return`(${[...Dn(p,B,w,z)].join(" && ")})`}function Go(p){return`check_${ef.Encode(p)}`}function Br(p){const B=`local_${Ze.variables.size}`;return Ze.variables.set(B,`const ${B} = ${p}`),B}function mo(p,B,w,z,_=!0){const[V,$e]=[`
`,nr=>"".padStart(nr," ")],_t=xa("value","any"),cr=nm("boolean"),Ln=[...Dn(B,w,z,_)].map(nr=>`${$e(4)}${nr}`).join(` &&${V}`);return`function ${p}(${_t})${cr} {${V}${$e(2)}return (${V}${Ln}${V}${$e(2)})
}`}function xa(p,B){const w=Ze.language==="typescript"?`: ${B}`:"";return`${p}${w}`}function nm(p){return Ze.language==="typescript"?`: ${p}`:""}function Qw(p,B,w){const z=mo("check",p,B,"value"),_=xa("value","any"),V=nm("boolean"),$e=[...Ze.functions.values()],_t=[...Ze.variables.values()],cr=fn(p.$id)?`return function check(${_})${V} {
  return ${Go(p.$id)}(value)
}`:`return ${z}`;return[..._t,...$e,cr].join(`
`)}function rm(...p){const B={language:"javascript"},[w,z,_]=p.length===2&&gn(p[1])?[p[0],p[1],B]:p.length===2&&!gn(p[1])?[p[0],[],p[1]]:p.length===3?[p[0],p[1],p[2]]:p.length===1?[p[0],[],B]:[null,[],B];if(Ze.language=_.language,Ze.variables.clear(),Ze.functions.clear(),Ze.instances.clear(),!Te(w))throw new A0(w);for(const V of z)if(!Te(V))throw new A0(V);return Qw(w,z)}e.Code=rm;function eb(p,B=[]){const w=rm(p,B,{language:"javascript"}),z=globalThis.Function("kind","format","hash",w),_=new Map(Ze.instances);function V(Ln,nr,Ca){if(!Mo(Ln)||!_.has(nr))return!1;const tb=hd(Ln),nb=_.get(nr);return tb(nb,Ca)}function $e(Ln,nr){return fd(Ln)?dd(Ln)(nr):!1}function _t(Ln){return Rd(Ln)}const cr=z(V,$e,_t);return new i8(p,B,cr,w)}e.Compile=eb})(As||(As={}));const nf={};function ow(e,t){e in nf||(nf[e]=t)}let F0=!1;function a8(){F0||(F0=!0,M4(e=>(nf[e.schema[T]]||X1)(e)))}const rf=Symbol.for("object-shape-tester.shape-identifier");function We(e){if(a8(),Ld(e))return e;const t=of(e),n=xo(t,!1),r=xo(t,!0),o={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:As.Compile(t),$_compiledSchemaNoExtraKeys:As.Compile(n),$_compiledSchemaExtraKeys:As.Compile(r)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[rf]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}function Ld(e){return S.hasKey(e,rf)&&!!e[rf]}function Ud(e){return S.hasKey(e,T)}function xo(e,t){const n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(r=>xo(r,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(r=>xo(r,t))),Ud(e.items)?n.items=xo(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(r=>xo(r,t))),S.isObject(e.properties)){const r={};Object.entries(e.properties).forEach(([o,i])=>{r[o]=xo(i,t)}),n.properties=r}return n.additionalProperties=t,n}function of(e){if(Ud(e))return e;if(Ld(e))return e.$_schema;if(S.isFunction(e))return Ne.Function([],Ne.Any(),{default:e});if(S.isObject(e)){const t={},n={};return Object.entries(e).forEach(([r,o])=>{const i=of(o);n[r]=i,t[r]=i.default}),Ne.Object(n,{default:t})}else{if(S.isArray(e))return Ne.Array(Ne.Union(e.map(t=>of(t))),{default:[]});if(S.isPrimitive(e)){if(S.isString(e))return Ne.String({default:e});if(S.isNumber(e))return Ne.Number({default:e});if(S.isBoolean(e))return Ne.Boolean({default:e});if(S.isSymbol(e))return Ne.Symbol({default:e});if(S.isNull(e))return Ne.Null({default:null});if(S.isUndefined(e))return Ne.Undefined({default:void 0});if(S.isBigInt(e))return Ne.BigInt({default:e});sr.tsType(e).equals(),sr.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${h(e)}`)}}function sf(e,t){const n=Vn(e);return We(Ne.Union(n.map(r=>Ne.Literal(r)),{default:n[0]}))}function u8(e){return S.isSymbol(e)?l8(e):We(Ne.Const(e,{default:e}))}const Wa="ExactSymbol";function l8(e){return Mo(Wa)||w1(Wa,(t,n)=>n===t.symbol),ow(Wa,({schema:t})=>`Expected symbol ${t.symbol?.description?nD({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),We(Ne.Unsafe({[T]:Wa,symbol:e,default:e}))}function yt(e,t={}){Ve.ExactOptionalPropertyTypes=!0;const n=We(e).$_schema,r=t.alsoUndefined?Ne.Union([Ne.Undefined(),n]):n;return We(Ne.Optional(r))}function Pt(...e){let t;const n=e.map((r,o)=>{const i=We(r);return o||(t=i.default),i.$_schema});return We(Ne.Union(n,{default:t}))}class c8 extends TypeError{value;errors;failureMessage;name="ShapeMismatchError";constructor(t,n,r){const o=n.map(s=>iw(s)).join(`
`),i=Pu(r,`Shape mismatch:
${kf(o,1)}`);super(i),this.value=t,this.errors=n,this.failureMessage=r}}function f8(e){return e.errors.flatMap(t=>Array.from(t))}function iw(e,t=0){const n=f8(e).map(o=>iw(o,t+1)),r=[e.path,e.message].filter(S.isTruthy).join(": ")+(n.length?":":"");return[kf(r,t),...n].join(`
`)}function Fo(e,t,n={}){return sw(t,n).Check(e)}function d8(e,t,n={},r){if(Fo(e,t,n))return;const o=Array.from(sw(t,n).Errors(e));if(o.length)throw new c8(e,o,r)}function sw(e,t){return e=m8(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function m8(e){return We(e)}const ru="recordShape";function jd({keys:e,values:t,partial:n,additionalProperties:r}){h8();const o=aw(e),i=We(t);return Ne.Unsafe({[T]:ru,keysShape:o,valuesShape:i,isPartial:!!n,additionalProperties:!!r,default:p8({isPartial:!!n,keysShape:o,valuesShape:i})})}function h8(){Mo(ru)||w1(ru,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const n=Object.entries(t).every(([o,i])=>{const s=e.additionalProperties?!0:Fo(o,e.keysShape),a=Fo(i,e.valuesShape);return s&&a}),r=e.isPartial?!0:!k0(e.keysShape,t).length;return n&&r}),ow(ru,e=>{const n=e.schema,r=e.value;if(typeof r!="object"||!r||Array.isArray(r))return"Expected an object";const o=Bo(Object.entries(r),([u])=>u,(u,[l,c])=>!Fo(l,n.keysShape)||!Fo(c,n.valuesShape)),i=k0(n.keysShape,r),s=o.length?["Failure at keys",o.join(",")].join(": "):"",a=i.length?["Missing keys",i.join(",")].join(": "):"";return[s,a].filter(S.isTruthy).join(`
`)})}function k0(e,t){const n=ku(e).filter(r=>S.isPropertyKey(r));return n.length?n.filter(r=>!S.hasKey(t,r)):[]}function p8({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{const r=ku(e),o=t.default;return Object.fromEntries(r.map(i=>[i,o]))}}function aw(e){return Ld(e)?e:Ud(e)?We(e):S.isObject(e)?sf(e):S.isArray(e)&&S.isLengthAtLeast(e,1)?Pt(...e.map(t=>u8(t))):S.isPropertyKey(e)?We(e):We(Ne.Undefined())}function ku(e){const t=e.$_schema,n=t[T].toLowerCase();return["const","literal"].includes(n)?[t.const]:n==="union"?op(t.anyOf.flatMap(r=>ku(We(r)))):["undefined","number","string","symbol"].includes(n)?[]:ku(aw(e.default))}function g8(e){return We(Ne.Unknown({default:e}))}const y8=We({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:g8()});function sc(e){return Fo(e,y8,{allowExtraKeys:!0})}class uw extends UE{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||jE}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:w8}=ID,S0=()=>document.createComment(""),ds=(e,t,n)=>{const r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(n===void 0){const i=r.insertBefore(S0(),o),s=r.insertBefore(S0(),o);n=new w8(i,s,e,e.options)}else{const i=n._$AB.nextSibling,s=n._$AM,a=s!==e;if(a){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==s._$AU&&n._$AP(u)}if(i!==o||a){let u=n._$AA;for(;u!==i;){const l=u.nextSibling;r.insertBefore(u,o),u=l}}}return n},$o=(e,t,n=e)=>(e._$AI(t,n),e),b8={},$8=(e,t=b8)=>e._$AH=t,v8=e=>e._$AH,ac=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _d={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Pr=e=>(...t)=>({_$litDirective$:e,values:t});class Or{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D8={attribute:!0,type:String,converter:gu,reflect:!1,hasChanged:jf},E8=(e=D8,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){const{name:s}=n;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e)}}throw Error("Unsupported decorator location: "+r)};function x8(e){return(t,n)=>typeof n=="object"?E8(e,t,n):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en=Pr(class extends Or{constructor(e){if(super(e),e.type!==_d.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return mn}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=e=>e??se;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C8(e,t,n){return e?t(e):n?.(e)}class A8 extends xs{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function F8(e,t,n){const r=!t.length&&!n.length,o=e.length?!1:!t.filter(a=>!!a.index).length;if(r||o)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const u=i[a.index];u&&u.splice(0,0,...a.values)}),i.flat()}function af(e){return S.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Vd(e){return S.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function lw(e){return Bo(e,t=>{if(af(t))return t.definition;if(Vd(t))return t.tagInterpolationKey||t},S.isTruthy)}const cw=new WeakMap;function k8(e,t){const n=lw(t);return fw(cw,[e,...n]).value?.template}function S8(e,t,n){const r=lw(t);return mw(cw,[e,...r],n)}function fw(e,t,n=0){const{currentTemplateAndNested:r,reason:o}=dw(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?fw(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:o}}function dw(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const o=e.get(r);return o==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:o,reason:"key and value exists"}}function mw(e,t,n,r=0){const{currentTemplateAndNested:o,currentKey:i,reason:s}=dw(e,t,r);if(!i)return{result:!1,reason:s};const a=o??{nested:void 0,template:void 0};if(o||e.set(i,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),mw(u,t,n,r+1)}function hw(e,t,n){const r=k8(e,t),o=r??n();if(!r){const a=S8(e,t,o);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=o.valuesTransform(t),s=F8(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function pw(e,t,n,r){const o=[],i=[],s=[],a=[];return e.forEach((l,c)=>{const f=o.length-1,d=o[f],g=c-1,x=t[g];r&&r(l);let D,k=[];if(typeof d=="string"&&(D=n(d,l,x),D)){o[f]=[d,D.replacement].join(""),s.push(g);const N=D.getExtraValues;k=N?N(x):[],k.length&&N?(o[f]+=" ",k.forEach((j,q)=>{q&&o.push(" ")}),a.push(j=>{const q=j[g],G=N(q);return{index:g,values:G}}),o.push(l)):o[f]+=l}D||o.push(l);const A=e.raw[c];D?(i[f]=[i[f],D.replacement,A].join(""),k.length&&k.forEach(()=>{i.push("")})):i.push(A)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(l){const c=a.flatMap(f=>f(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function N8(...[e,t,n]){if(Vd(n))return{replacement:n.tagName,getExtraValues:void 0}}function I8(e,t){return pw(e,t,N8)}function C(e,...t){const n=hw(e,t,()=>I8(e,t));return eu(n.strings,...n.values)}const T8={allowPolymorphicState:!1,errorHandler:void 0};function gw(e,t){const n=e.instanceState;Ie(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&Ie(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}class M8 extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function Wd(){return e=>class extends M8{static type=e;_type=e;constructor(t){super(e,t)}}}function st(){return Wd()}function P8(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const o=Wd()([e,r].join("-"));return n[r]=o,n},{}):{}}function O8(e){return e?dn(e,t=>t):{}}function yw(e,t){t in e||x8()(e,t)}function B8(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function N0(e,t){const n=e;function r(s){t?B8(s,e,e.tagName):yw(e,s)}function o(s,a){return r(a),n[a]}return new Proxy({},{get:o,set(s,a,u){r(a);const l=n[a];function c(d){s[a]=d,n[a]=d}const f=e.observablePropertyListenerMap[a];if(l!==u&&sc(l)&&f&&l.removeListener(f),sc(u))if(f)u.listen(!1,f);else{let d=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=d,u.listen(!1,d)}else sc(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return o(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function I0(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid element string name '${r}' in '${e}': element string names must begin with the element's tag name.`)})}function T0(e,t,n){return n?Av(n,o=>({key:o,value:[e,t,o].join("-")}),{}):{}}function R8({hostClassNames:e,cssVars:t}){return{hostClasses:dn(e,(n,r)=>({name:Xe(r),selector:Xe(`:host(.${r})`)})),cssVars:t}}function L8({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:o}){t&&Ie(t).forEach(i=>{const s=t[i],a=n[i];typeof s=="function"&&(s({state:r,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function U8({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:o}){function i(a){Ie(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:n,slotNames:r,testIds:o,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function qd(...e){return sr.isEmpty(e),t=>{const n=t;if(!S.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return j8({...n,options:{...n.options}})}}function j8(e){if(!S.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!S.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...T8,...e.options},n=P8(e.tagName,e.events),r=O8(e.hostClasses);e.hostClasses&&I0(e.tagName,e.hostClasses),e.cssVars&&I0(e.tagName,e.cssVars);const o=e.cssVars?Ir(e.cssVars):{},i=T0(e.tagName,"slot",e.slotNames),s=T0(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(R8({hostClassNames:r,cssVars:o})):e.styles||C``,u=e.render;function l(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:f}}const c=class extends A8{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return U8({element:this,eventsMap:n,cssVars:o,slotNamesMap:i,testIdsMap:s})}static assign=l;static events=n;static render=u;static hostClasses=r;static cssVars=o;static init=e;static slotNames=i;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const g=e.state(f);if(g instanceof Promise)throw new TypeError("init cannot be asynchronous");Ie(g).forEach(x=>{yw(this,x),this.instanceState[x]=g[x]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=u(f);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return L8({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},d}catch(f){const d=bf(f,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,t.errorHandler?.(d),Ht(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{S.hasKey(f,"destroy")&&S.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){gw(this,f)}observablePropertyListenerMap={};instanceInputs=N0(this,!1);instanceState=N0(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:Qv(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M0=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},_8=Pr(class extends Or{constructor(e){if(super(e),e.type!==_d.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const o=[],i=[];let s=0;for(const a of e)o[s]=r?r(a,s):s,i[s]=n(a,s),s++;return{values:i,keys:o}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const o=v8(e),{values:i,keys:s}=this.dt(t,n,r);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??=[],u=[];let l,c,f=0,d=o.length-1,g=0,x=i.length-1;for(;f<=d&&g<=x;)if(o[f]===null)f++;else if(o[d]===null)d--;else if(a[f]===s[g])u[g]=$o(o[f],i[g]),f++,g++;else if(a[d]===s[x])u[x]=$o(o[d],i[x]),d--,x--;else if(a[f]===s[x])u[x]=$o(o[f],i[x]),ds(e,u[x+1],o[f]),f++,x--;else if(a[d]===s[g])u[g]=$o(o[d],i[g]),ds(e,o[f],o[d]),d--,g++;else if(l===void 0&&(l=M0(s,g,x),c=M0(a,f,d)),l.has(a[f]))if(l.has(a[d])){const D=c.get(s[g]),k=D!==void 0?o[D]:null;if(k===null){const A=ds(e,o[f]);$o(A,i[g]),u[g]=A}else u[g]=$o(k,i[g]),ds(e,o[f],k),o[D]=null;g++}else ac(o[d]),d--;else ac(o[f]),f++;for(;g<=x;){const D=ds(e,u[x+1]);$o(D,i[g]),u[g++]=D}for(;f<=d;){const D=o[f++];D!==null&&ac(D)}return this.ut=s,$8(e,u),mn}}),V8=_8;function ba(e,t){return Gs(e,t),e.element}function W8(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Gs(e,t){const n=W8(e),r=n?`: in ${n}`:"";if(e.type!==_d.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function q8(e,t){return Pr(class extends Or{element;constructor(n){super(n),this.element=Hr.instanceOf(ba(n,e),HTMLElement)}render(...n){return t({params:n,directive:this,element:this.element}),mn}})}const Cr=q8("attributes",({element:e,params:[t],directive:n})=>{if(!t)return;const o=ra(n,"allAttributesApplied",()=>new Set);Ie(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);o.add(i)}),o.forEach(i=>{const s=t[i];s==null||s===!1||s===se?e.removeAttribute(i):s===""||s===!0?e.setAttribute(i,""):e.setAttribute(i,String(s))})});function z8(e){const t=Pr(class extends Or{element;constructor(n){super(n),this.element=ba(n,e)}render(n){return this.element.setAttribute(e,n),mn}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function W(e,t){return K8(e,t)}const K8=Pr(class extends Or{element;lastListenerMetaData;constructor(e){super(e),this.element=ba(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),mn}});function Z8(e){return W("keydown",async t=>{const n=t.code.toLowerCase();(n.includes("enter")||n.includes("return")||n==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const P0="onDomCreated",Su=Pr(class extends Or{element;constructor(e){super(e),Gs(e,P0)}update(e,[t]){Gs(e,P0);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),O0="onResize",ww=Pr(class extends Or{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&G8(this.element,this.callback,e)});callback;constructor(e){super(e),Gs(e,O0)}update(e,[t]){Gs(e,O0),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function G8(e,t,n){const r=n[0];if(!r)throw console.error(n),new Error("Resize observation triggered but the first entry was empty.");t({target:r.target,contentRect:r.contentRect},e)}function Yt(e,t,n){return C8(e,()=>t,()=>n)}const{attributeDirective:Y8}=z8("data-test-id"),mi=Y8;function bw(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return(...r)=>o=>(t(o),qd(...r)(n(o)))}function J8(e,t){return H8(void 0,e)}const H8=Pr(class extends Or{element;constructor(e){super(e),this.element=ba(e,"assign")}render(e,t){return gw(this.element,t),mn}}),X8={};function Q8(e,t){return t.map((n,r)=>{const o=e[r],i=e[r+1];if(o&&i){const{shouldHaveTagNameHere:s}=$w(o,i);if(s&&S.isString(n))return{tagName:n,tagInterpolationKey:ra(X8,n,()=>({tagName:n}))}}return n})}function $w(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function eS(...[e,t,n]){const r=af(n)?n.definition:n,{isOpeningTag:o,shouldHaveTagNameHere:i}=$w(e,t),s=Vd(r);if(s&&i&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(i&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!i||!s?void 0:{replacement:r.tagName,getExtraValues(u){const l=af(u)?u.inputs:void 0;return[o&&l?J8(l):void 0].filter(S.isTruthy)}}}function tS(e){}function nS(e){return pw(e.strings,e.values,eS,tS)}function y(e,...t){const n=Q8(e,t),r=xD(e,...n),o=hw(e,n,()=>nS(r));return{...r,strings:o.strings,values:o.values}}function uf(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if(!t?.length&&!n?.length)return"";const r=[...n||[],""],i=(t??[""]).map((s,a)=>{const u=rS(s,r[a]);return`${s}${u}`});return ey(i.join(""))}function rS(e,t){return t._$litType$!=null||t._$litDirective$!=null?uf(t):Array.isArray(t)?t.map(r=>uf(r)).join(""):e.endsWith("=")?`"${t}"`:t}function vw(e){return dn(e,(t,n)=>n instanceof be?Xe(n.toString({format:"hex"})):vw(n))}const oS="dodgerblue";function lf(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function uc({background:e,foreground:t}){return{background:e??new be(lf(t)),foreground:t??new be(lf(e))}}var Nu;(function(e){e.Dark="dark",e.Light="light"})(Nu||(Nu={}));function iS(e){return e==="black"?"white":"black"}const sS={black:{foregroundFaint1:new be("#ccc"),foregroundFaint2:new be("#eee")},white:{foregroundFaint1:new be("#ccc"),foregroundFaint2:new be("#eee")}},aS={black:{backgroundFaint1:new be("#666"),backgroundFaint2:new be("#444")},white:{backgroundFaint1:new be("#ccc"),backgroundFaint2:new be("#fafafa")}};function B0({themeColor:e=oS,themeStyle:t=Nu.Light}={}){const n=new be(e),r=new be(t===Nu.Dark?"black":"white"),o=lf(r),i=new be(o),s={nav:{hover:uc({background:n.clone().set({"hsl.l":93})}),active:uc({background:n.clone().set({"hsl.l":90})}),selected:uc({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...aS[iS(o)],foreground:i,...sS[o]}};return vw(s)}var or;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(or||(or={}));async function cf(e=1){const t=new dp;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function uS(e,t){return{element:e,children:Dw(e)}}function Dw(e,t,n){return lS(e).map(r=>{const o=Dw(r);return{element:r,children:o}})}function lS(e){return[...e.children,...e.shadowRoot?.children??[]]}function lc(e){return e.matches(":focus")}function zd(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:zd(t)}function Ew(e,t){if(t(e))return e;const n=zd(e);if(n)return Ew(n,t)}async function cS(e){return fS(e,1)}async function fS(e,t){return new Promise(n=>{new IntersectionObserver((o,i)=>{sr.isLengthAtLeast(o,1),i.disconnect(),n(o[0].intersectionRatio>=t)}).observe(e)})}function ko(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const o=t.name,i=r?.constructor.name,s=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${i}'.`;throw new Error(s)}return r}function dS(e){const t=zd(e);return t&&Ew(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}function mS({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let s=0,a=0;s<r;s++){const u=i.codePointAt(s);for(;a<n;)if(o.codePointAt(a++)===u)continue e;return!1}return!0}const hS=Wu(32);function ou(e){return e.join(hS)}function xw(e){if(!e.length)return[];const t=ou(e),n=xw(e.slice(0,-1));return[t,...n]}const pS=["error","errors"];function gS(e){return pS.includes(e)}function yS({flattenedNodes:e,searchQuery:t}){const n={};function r(o){Object.values(o.children).map(s=>(r(s),ou(s.fullUrlBreadcrumbs))).forEach(s=>n[s]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&gS(t),s=ou(o.fullUrlBreadcrumbs);if(mS({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>S.isString(u)?u:uf(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||n[s]){const u=xw(o.fullUrlBreadcrumbs);r(o),u.forEach(l=>n[l]=!0)}else n[s]=!1}),e.filter(o=>{const i=ou(o.fullUrlBreadcrumbs),s=n[i];if(!S.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Kd extends Error{name="SpaRouterError"}class R0 extends Kd{name="GlobalUrlEventsConsolidationError"}class wS extends Kd{name="SanitizationDepthMaxed"}We({paths:[""],search:yt(Pt(void 0,jd({keys:"",values:[""]}))),hash:yt(Pt(void 0,""))});const bS=We({basePath:yt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:yt(1,{alsoUndefined:!0}),disableWarnings:yt(!1,{alsoUndefined:!0}),isPaused:yt(!1,{alsoUndefined:!0})}),cc="://";function Zd(...e){const t=e.join("/"),[n,r=""]=t.includes(cc)?t.split(cc):["",t];let o=!1;const i=r.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(o)return s;const c=l[u+1];let f=a;const d=c?.startsWith("?"),g=!a.includes("?")&&d,x=c==="?";if(d||g){o=!0;let D=!1;const k=l.slice(u+2).reduce((A,N)=>(N.includes("#")&&(D=!0),D?A.concat(N):[A,N].join("&")),"");f=[a,c,x?fi({value:k,prefix:"&"}):k].join("")}return s.concat(f)},[]);return[n,n?cc:"",i.join("/")].join("")}var Mi;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Mi||(Mi={}));var Pi;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Pi||(Pi={}));const $S=We({encoding:yt(Pt(void 0,sf(Mi))),searchParamStrategy:yt(Pt(void 0,sf(Pi)))});function qa(e,t){return e.map(n=>{if(n!=null)return hi(String(n),t)}).filter(n=>n!=null)}function hi(e,t){return t?.encoding===Mi.Decode?decodeURIComponent(e):t?.encoding===Mi.Encode?encodeURIComponent(e):e}const vS=We(jd({keys:"",values:[""]}));function DS(e,t,n){const r=n?.searchParamStrategy===Pi.Clear?{}:dn(e,(s,a)=>Fv(a)),o=dn(t,(s,a)=>{if(n?.searchParamStrategy===Pi.Append){const u=r[s],l=S.isArray(u)?u:[u];if(a){const c=S.isArray(a)?a:[a];return qa([...l,...c],n)}else return qa(l,n)}else return S.isArray(a)?qa(a,n):a?qa([a],n):void 0});return Tf({...r,...o},(s,a)=>!!a)}function Cw(e,t){return S.isString(e)&&!e.includes("?")?{}:(S.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[s,...a]=Zv(i,"=");return[s,a.length?a.join("="):void 0]}).reduce((i,[s,a])=>{const u=Aw({options:t,key:s,value:a}),l=ra(i,u.key,()=>[]);return a!=null&&l.push(u.value),i},{})}function ES(e){if(e!=null)return S.isArray(e)?[...e]:e===""?[]:[e]}function xS(e,t){const n=Bo(Object.entries(e),([r,o])=>{const i=ES(o);return i?.length?i.map(s=>{const a=Aw({options:t,key:r,value:s});return[a.key,a.value].join("=")}):[r]},(r,[,o])=>o!=null).flat();return n.length?Jt({value:n.join("&"),prefix:"?"}):""}function Aw({options:e,key:t,value:n}){return{key:hi(t,e),value:hi(String(n),e)}}function Fw({hash:e,hostname:t,password:n,pathname:r,port:o,protocol:i,search:s,username:a}){return[i?i+"://":"",a?a+":":"",n?n+"@":"",$l({hostname:t,port:o}),Gd({hash:e,pathname:r,search:s})].join("")}function kw({pathname:e}){const t=fi({value:e,prefix:"/"});return t?t.split("/"):[]}function Gd({hash:e,pathname:t,search:n}){return[Jt({value:t,prefix:"/"}),n?Jt({value:n,prefix:"?"}):"",e?Jt({value:e,prefix:"#"}):""].join("")}function $l({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Sw({hostname:e,port:t,protocol:n}){return[n,$l({hostname:e,port:t})].filter(S.isTruthy).join("://")}function pi(e,t){const n=S.isString(e)?fi({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),o=r?Jt({value:hi(r,t),prefix:"#"}):"",i=n.replace(/#[^#]*$/,""),s=i.replace(/^[^?]*(?:\?|$)/,""),a=s?Jt({value:hi(s,t),prefix:"?"}):"",u=i.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),d=c.replace(/^[^@]*@/,""),g=f!==d,[x,...D]=g?f.split(":").reverse():[],k=D.toReversed().join("").replace(/[/:]/g,"")||"",A=x?.replace(/[/:]/g,"")||"",N=Kv(d.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),j=N[0]?.endsWith("]")?"":N[1]===":"&&N[0]||"",G=d.replace(new RegExp(`:${j}($|/)`),"$1").replace(/\/.*/,""),Le=d.replace(/^[^/]*(\/|$)/,"$1"),Ct=hi(Le.replace(/^[^/]*(?:\/|$)/,"/"),t),rt=$l({hostname:G,port:j}),Tt=Sw({hostname:G,port:j,protocol:l}),vn=Fw({hash:o,hostname:G,password:A,pathname:Ct,port:j,protocol:l,search:a,username:k}),Bn=Cw(a),Zo=kw({pathname:Ct});return{fullPath:Gd({hash:o,pathname:Ct,search:a}),hash:o,host:rt,hostname:G,href:vn,origin:Tt,password:A,pathname:Ct,paths:Zo,port:j,protocol:l,search:a,searchParams:Bn,username:k}}We({hash:yt(Pt(void 0,"")),search:yt(Pt(void 0,"",jd({keys:"",values:Pt(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:yt(Pt(void 0,"")),pathname:yt(Pt(void 0,"")),paths:yt(Pt(void 0,[""])),protocol:yt(Pt(void 0,"")),username:yt(Pt(void 0,"")),password:yt(Pt(void 0,"")),port:yt(Pt(void 0,"",-1))});function CS(e,t,n){const r=!!n,o=t==null||Fo(t,$S,{allowExtraKeys:!1}),i=o?pi(""):S.instanceOf(e,URL)||S.isString(e)?pi(e):e,s=o?e:t,a=S.isString(s)&&s.startsWith("."),u=S.isString(s)||S.instanceOf(s,URL)?Tf(pi(s),(D,k)=>S.isTruthy(k)):s,l=r?n:o?t:void 0,c=dn(i,(D,k)=>{if(!S.hasKey(u,D))return k;const A=u[D];return S.isNumber(A)?String(A):S.isString(A)?D==="hash"&&A?Jt({value:A,prefix:"#"}):D==="pathname"?Jt({value:A,prefix:"/"}):A:k});S.hasKey(u,"paths")&&u.paths&&(c.pathname=Zd(a?i.pathname:"",...u.paths));const f=S.isString(u.search)?Cw(Jt({value:u.search,prefix:"?"})):Sv(u.search||{}),d=DS(c.searchParams,f,{...l,encoding:Mi.None}),g=xS(d,l);return{...c,searchParams:d,search:g,paths:kw(c),fullPath:Gd(c),host:$l(c),origin:Sw(c),href:Fw({...c,search:g})}}const AS=We({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:vS,hash:"",fullPath:"/",href:"/"});({...AS.default});const FS=0;function Nw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==FS)}const vl="locationchange",Dr=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const L0=Dr?.pushState;function U0(...e){if(!L0)return;const t=L0.apply(Dr,e);return globalThis.dispatchEvent(new Event(vl)),t}const j0=Dr?.replaceState;function _0(...e){if(!j0)return;const t=j0.apply(Dr,e);return globalThis.dispatchEvent(new Event(vl)),t}function kS(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Dr)){{if(Dr.pushState===U0)throw new R0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Dr.replaceState===_0)throw new R0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Dr.pushState=U0,Dr.replaceState=_0,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(vl))})}}function za(e,t){const n=pi(e),r=fi({value:fi({value:n.pathname,prefix:Jt({value:t||"",prefix:"/"})}),prefix:"/"}),o=r?r.split("/"):[],i=Object.keys(n.searchParams).length?n.searchParams:void 0,s=n.hash?fi({value:n.hash,prefix:"#"}):void 0;return{paths:o,search:i,hash:s}}class Yd{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){d8(t,bS),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new uw({defaultValue:n,equalityCheck:()=>!1}),kS(),this.removeGlobalListener=ny(globalThis,vl,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new wS("Looping route sanitization detected; aborting window URL change listener.");const r=za(globalThis.location.href,this.params.basePath),o=t.sanitizeRoute(r);S.jsonEquals(r,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:o}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Zd(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(za(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...za(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),i=this.routeIncludesBasePath(za(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return CS(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?Jt({value:i.hash,prefix:"#"}):""},{searchParamStrategy:Pi.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:o}=pi(r);return this.params.isPaused||!n.force&&S.jsonEquals(pi(globalThis.location.href).fullPath,o)?!1:n.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(t,n){return Nw(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new Kd(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function SS(e){return new Yd({basePath:e,sanitizeRoute(t){return{paths:NS(t.paths),hash:void 0,search:void 0}}})}function NS(e){const t=e[0];if(S.isEnumValue(t,Kt)){if(t===Kt.Book)return[Kt.Book,...e.slice(1)];if(t===Kt.Search)return e[1]?[t,e[1]]:[Kt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return vi.paths}const Iu=Wd()("element-book-change-route"),V0="vira-",ze=bw({assertInputs:e=>{if(!e.tagName.startsWith(V0))throw new Error(`Tag name should start with '${V0}' but got '${e.tagName}'`)}});function IS(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given: ${tD(n)}`)}function TS(e,t=[],n=!1){return n?t.includes(e.id)?t.filter(r=>r!==e.id):[...t,e.id]:[e.id]}function W0({open:e,callback:t,popUpManager:n,host:r}){if(e){const o=n.showPopUp(r);t?.(o)}else n.removePopUp(),t?.(void 0)}const b=Ir({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"}),MS=be;function PS(e){try{if(!e)throw new Error("invalid empty color");return new MS(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function le({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function q0(e,t){const n=Ie(t).map(r=>{const o=t[r],i=PS(o);return`${b[r].name}: ${i.toString()};`}).join(" ");return le({name:e.name,svgTemplate:y`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const Jd=le({name:"Check24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Nn=Ir({"vira-form-input-radius":"8px"}),es=C`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Fr=Ir({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Oi=Ir({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":C`calc(${Nn["vira-form-input-radius"].value} + 2px)`});function $a({elementBorderSize:e,outlineGap:t=2,outlineWidth:n=2,noNesting:r}){const o=Xe(Hg(n+t+e)),i=C`
        content: '';
        top: calc(${o} * -1);
        left: calc(${o} * -1);
        position: absolute;
        width: calc(100% + calc(${o} * 2));
        height: calc(100% + calc(${o} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${n}px solid ${Oi["vira-focus-outline-color"].value};
        border-radius: ${Oi["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return r?i:C`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${i}
        }
    `}const J=Ir({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),Hd=C`
    padding: 0;
    margin: 0;
`,Wn=C`
    ${Hd};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,fc=Ir({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),gi={menuShadow:C`
        filter: drop-shadow(0px 5px 5px ${fc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:C`
        filter: drop-shadow(0px -5px 5px ${fc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:C`
        box-shadow: 0 5px 15px ${fc["modal-shadow-color"].value};
    `},Bi=C`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,U=ze()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>C`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),an=ze()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            ${Bi};
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
                <${U.assign({icon:Jd})}></${U}>
                <slot>${e.label}</slot>
            </div>
        `}});function OS(e,t){return e>t}function BS(e,t){return e<t}function Ys(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var ir;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(ir||(ir={}));var de;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(de||(de={}));function Dl(e){const t={x:-1,y:-1};let n;for(;t.y<e.length-1&&!n;){t.y++;const r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;const o=r[t.x];if(o)if(o.navEntry.navParams.group){const i=Dl(o.children);i&&(n=i.node)}else o.navEntry.navParams.disabled||(n=o)}}if(n)return{node:n,coords:t}}function z0(e,t,n,r){if(!t){const u=Dl(e.children);return u?(Ys(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:n,navAction:de.Navigate}):{success:!1,reason:"no default element to focus",direction:n,navAction:de.Navigate}}const{nextNode:o,requiresWrapping:i,coords:s}=Iw(t.position,n),a=r?!0:!i;return o&&a?(Ys(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:i,direction:n,navAction:de.Navigate,coords:s}):o?a?{success:!1,reason:"no conditions matched",direction:n,navAction:de.Navigate}:{success:!1,reason:"wrapping blocked",direction:n,navAction:de.Navigate}:{success:!1,reason:"failed to find node to focus",direction:n,navAction:de.Navigate}}function Iw(e,t){let n=!1,r,o=1;const i=Date.now();for(;!n||!r;)if(r=RS(e,t,o),n=!r.nextNode?.navEntry.navParams.disabled,o++,Date.now()-i>1e3)return Wv.warning("Failed to find next non-disabled node."),r;return r}function RS(e,t,n){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;sr.isDefined(r,"missing parent");const o=Hr.isDefined(r.children[e.nodeCoords.y]),i=r.children.length>1&&(t===ir.Down||t===ir.Up),s=t===ir.Down||t===ir.Right?n:-1*n,a=s<0?OS:BS,u=i?oh(e.nodeCoords.y+s,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=Hr.isDefined(r.children[u]),c=i?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:oh(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),f=r.children[u]?.[c],d=i?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:f,requiresWrapping:d,coords:{x:c,y:u}}}function LS(e,t,n){const r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:de.Pibling};const{nextNode:o,requiresWrapping:i,coords:s}=Iw(r,t),a=o?.navEntry.navParams.group?Dl(o.children):{node:o,coords:s},u=n?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:de.Pibling}:u?(Ys(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:de.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:de.Pibling}}var Ot;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Ot||(Ot={}));const zn={name:"data-nav",js(e){return e?`[${zn.name}*="${e}"]`:`[${zn.name}]`},css({baseSelector:e="",navValue:t}={}){return C`
            ${Xe(e)}${Xe(zn.js(t))}
        `}},Xd="navEntry";function Tw(e){return Xd in e}function Mw(e){if(Tw(e)){const t=e[Xd];return Hr.instanceOf(t,Pw,"Invalid nav entry")}else return}function US(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Ot.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Pw{element;navParams;navTreeNode;navValue;eventListener=US(this);constructor(t,n,r){this.element=t,this.navParams=r,this.attachListeners(),this.navController=n}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return sr.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(zn.name,""),lc(this.element)&&this.element.blur())}focus(t,n){const r=this.navValue,o=t===(r===Ot.Focused);if(!(this.navParams.group||this.navController.locked||o||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Ot.Focused),lc(this.element)||this.element.focus()):(this.removeNavValue(Ot.Focused),lc(this.element)&&this.element.blur()),n||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,de.Focus)}activate(t){const n=this.navValue,r=t===(n===Ot.Active);if(!(this.navParams.group||this.navController.locked||r))return this.focus(t,!0),t?this.setNavValue(Ot.Active):this.setNavValue(Ot.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,de.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(zn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(zn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Ow(e,t){Object.entries(t).forEach(([n,r])=>{S.isBoolean(r)&&r?e.setAttribute(n,""):S.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const jS=Pr(class extends Or{element;lastKey;constructor(e){super(e),this.element=ba(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),mn}});function _S(e){return"group"in e?Ot.Group:e.disabled?Ot.Disabled:""}function K0(e,t={}){return jS(h(t),n=>{e.needsUpdate=!0;const r=!t.group&&!t.disabled;sr.instanceOf(n,HTMLElement);const o={[zn.name]:_S(t),tabindex:r?0:-1};Ow(n,o);const i=Mw(n)||new Pw(n,e,t);Tw(n)?(i.navParams=t,i.navController=e):n[Xd]=i,r?n.style.setProperty("cursor","pointer"):n.style.removeProperty("cursor")})}function VS(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:de.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:de.Enter};const n=t.position.node.children[0]?.[0];return n?(Ys(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:de.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:de.Enter}}function WS(e,t){return Bw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Bw(e,t,n){for(let r=0;r<t.length;r++){const o=t[r];for(let i=0;i<o.length;i++){const s=o[i],a={ancestorChain:e,nodeCoords:{x:i,y:r},node:s};if(n(a))return a;const u=Bw(e.concat(a),s.children,n);if(u)return u}}}function Rw(e,t){const n=WS(e,({node:r})=>!r.root&&r.navEntry===t);if(!n)throw new Error("Failed to find NavEntry in NavTree.");return n}function qS(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:de.Exit};const n=t.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:de.Exit};const{nodeCoords:r}=Rw(e,n.navEntry);return Ys(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:de.Exit,coords:r}}class zS extends ro()("nav-exit"){}class Lw extends ro()("nav-activate"){}class KS extends ro()("nav-focus"){}class ZS extends ro()("nav-enter"){}class GS extends ro()("nav-navigate"){}class YS extends ro()("nav-navigate-pibling"){}function JS(e){return{root:!0,children:Uw(e)?.children||[]}}function Uw(e){const t=e.element;if(!(t instanceof HTMLElement))return;const n=Mw(t),r=HS(e);if((n?.navParams.group?!!r.length:!1)||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function HS(e){const t=[];function n(r){if(r.navEntry?.navParams.group&&!r.children.length)return;if(!r.navEntry){r.children.forEach(a=>a.forEach(u=>n(u)));return}const o=r.navEntry.navParams.x,i=r.navEntry.navParams.y||0,s=ra(t,i,()=>({noX:[],withX:[],y:i}));o==null?s.noX.push(r):s.withX.push({x:o,node:r})}return e.children.forEach(r=>{const o=Uw(r);o&&n(o)}),t.sort((r,o)=>r.y-o.y).map(r=>(r.withX.sort((o,i)=>o.x-i.x),r.withX.forEach(({x:o,node:i})=>{r.noX.splice(o,0,i)}),r.noX)).filter(S.isTruthy)}class jw extends Mf{rootElement;options;constructor(t,n={}){super(),this.rootElement=t,this.options=n}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Dl(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,n,r){if(this.locked)return{success:!1,direction:void 0,navAction:r,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:r,reason:"No nav entry to operate on."};const o=Rw(this.getNavTree(),t);n?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:r,position:o}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===r&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const i={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:r,coords:o.nodeCoords};return n&&(r===de.Activate?this.dispatch(new Lw({detail:i})):r===de.Focus&&this.dispatch(new KS({detail:i}))),i}navigate({direction:t,allowWrapping:n}){if(this.locked)return{success:!1,direction:t,navAction:de.Navigate,reason:"NavController is locked."};const r=z0(this.getNavTree(),this.currentNavEntry,t,n);return this.dispatch(new GS({detail:r})),r}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:de.Enter,reason:"NavController is locked."};const n=VS(this.getNavTree(),this.currentNavEntry);return!n.success&&t?this.activate():(this.dispatch(new ZS({detail:n})),n)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:de.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:de.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return sr.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:de.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===de.Activate&&this.currentNavEntry.entry.focus(!0);const t=qS(this.getNavTree(),this.currentNavEntry);return this.dispatch(new zS({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){if(this.locked)return{success:!1,direction:n,navAction:de.Pibling,reason:"NavController is locked."};const r=this.getNavTree(),i={...this.currentNavEntry?LS(this.currentNavEntry,n,t):z0(r,void 0,n,t),navAction:de.Pibling};return this.dispatch(new YS({detail:i})),i}buildNavTree(){const t=uS(this.rootElement),n=JS(t);return this.cachedNavTree=n,n}}const ai=ze()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>C`
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
                    ${Cr(e.attributePassthrough?.a)}
                    style=${Ye(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return y`
                <a
                    href=${n}
                    rel="noopener noreferrer"
                    ${Cr(e.attributePassthrough?.a)}
                    style=${Ye(e.stylePassthrough?.a)}
                    ${W("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),Z0={item:"menu-item"},Fs=ze()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new jw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>C`
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
            background-color: ${J["vira-form-background-color"].value};
            color: ${J["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Wn};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${zn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Ot.Focused})}, ${zn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Ot.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${J["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${zn.css({baseSelector:".menu-item:not(.disabled)",navValue:Ot.Focused})},
                ${zn.css({baseSelector:".menu-item:not(.disabled)",navValue:Ot.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${J["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${an} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${es};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){IS(e.items);const n=e.items.map(r=>{const o=!!e.selected?.includes(r.id),i=S.isString(r.label)?y`
                      <${an.assign({label:r.label,selected:o,hideCheckIcon:e.hideCheckIcons})}></${an}>
                  `:r.label,s=r.disabled||!e.isMultiSelect&&o;return r.route?y`
                    <${ai.assign({route:r.route})}
                        class="menu-item ${en({disabled:!!r.disabled,selected:o})}"
                        ${mi(Z0.item)}
                        title=${Ye(r.titleText||void 0)}
                        role="option"
                        ${K0(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </${ai}>
                `:y`
                    <button
                        class="menu-item ${en({disabled:!!r.disabled,selected:o})}"
                        ${mi(Z0.item)}
                        title=${Ye(r.titleText||void 0)}
                        role="option"
                        ${K0(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </button>
                `});return y`
            ${n}
        `}});var Qd=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(Qd||{}),Tu=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Tu||{});const ks=ze()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${Nn["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${J["vira-form-background-color"].value};
            border: 1px solid ${J["vira-form-border-color"].value};
            color: ${J["vira-form-foreground-color"].value};
            ${gi.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${gi.menuShadowReversed}
            border-radius: ${Nn["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${Nn["vira-form-input-radius"].value};
        }
    `,render(){return y`
            <slot></slot>
        `}}),Ka=globalThis.document;class XS extends uw{constructor(){if(super({defaultValue:!!Ka?.hidden,equalityCheck:S.strictEquals}),!Ka)return;globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n,Ka));const t=n=>this.updateVisibility(n,Ka);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,n){const r=eN.includes(t.type),o=QS.includes(t.type),i=r?!0:o?!1:n.hasFocus()||!n.hidden;this.setValue(i)}}const QS=["blur","focusout","pagehide"],eN=["focus","focusin","pageshow"],tN=new XS;function nN(e,t){return tN.listen(e,t)}const G0={top:0,left:0,right:0,bottom:0};class _w extends ty("hide-pop-up"){}class Vw extends ro()("nav-select"){}class rN{constructor(t,n){this.navController=t,this.options={...this.options,...n}}listenTarget=new Mf;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let n=!1;const r=new ResizeObserver(()=>{n?this.removePopUp():n=!0});r.observe(t),this.cleanupCallbacks=[()=>{r.disconnect()},nN(!1,o=>{o||this.removePopUp()}),this.navController.listen(Lw,o=>{o.detail.success&&(this.listenTarget.dispatch(new Vw({detail:o.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),o.stopImmediatePropagation(),o.preventDefault())}),Oc("mousedown",o=>{this.lastRootElement&&o.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Oc("keydown",o=>{const i=o.code;i==="Escape"?this.removePopUp():this.options.supportNavigation&&(i==="ArrowDown"?(o.stopImmediatePropagation(),o.preventDefault(),this.navController.navigate({direction:ir.Down,allowWrapping:!1})):i==="ArrowUp"?(o.stopImmediatePropagation(),o.preventDefault(),this.navController.navigate({direction:ir.Up,allowWrapping:!1})):i==="ArrowLeft"?(o.stopImmediatePropagation(),o.preventDefault(),this.navController.navigate({direction:ir.Left,allowWrapping:!1})):i==="ArrowRight"?(o.stopImmediatePropagation(),o.preventDefault(),this.navController.navigate({direction:ir.Right,allowWrapping:!1})):(i==="Enter"||i==="Return"||i==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(o.stopImmediatePropagation(),o.preventDefault()))})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new _w)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},o=dS(t);sr.instanceOf(o,HTMLElement);const i=t.getBoundingClientRect(),s=o.getBoundingClientRect(),a=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,l=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=dn(G0,g=>i[g]),f=dn(G0,g=>{const x=l[g],D=c[g];return Math.abs(x-D)}),d=f.top>f.bottom+r.verticalDiffThreshold&&f.bottom<r.minDownSpace;return this.attachGlobalListeners(o),{popDown:!d,positions:{container:l,root:c,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Yr=(e=>(e.Left="left",e.Right="right",e.Both="both",e))(Yr||{});const me=ze()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new rN(new jw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>C`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Wn};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${$a({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Bi};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${es}
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
    `,events:{navSelect:st(),openChange:st(),init:st()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:o,events:i}){e.popUpManager.listen(_w,()=>{if(t({showPopUpResult:void 0}),o(new i.openChange(void 0)),!r.isDisabled){const s=n.shadowRoot.querySelector(".dropdown-wrapper");sr.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Vw,s=>{r.keepOpenAfterInteraction||W0({open:!1,callback(a){t({showPopUpResult:a})},host:n,popUpManager:e.popUpManager}),o(new i.navSelect(s.detail))}),o(new i.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:o,host:i,slotNames:s}){function a({emitEvent:g,open:x},D){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&D){const k=i.shadowRoot.querySelector(".dropdown-trigger");if(k&&!D.composedPath().includes(k))return}W0({open:x,callback(k){o({showPopUpResult:k}),g&&e(new t.openChange(k))},host:i,popUpManager:n.popUpManager})}r.isDisabled?a({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?a({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=r.horizontalAnchor==="right"&&n.showPopUpResult?C`
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
                class="dropdown-wrapper ${en({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
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
                    class="pop-up-positioner ${en({"right-aligned":r.horizontalAnchor==="right"})}"
                    style=${f}
                >
                    ${Yt(!!n.showPopUpResult,y`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),oN={menu:"menu-trigger-menu"},Kr=ze()({tagName:"vira-menu-trigger",styles:C`
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
    `,events:{itemActivate:st(),openChange:st()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:n,dispatch:r,events:o}){return y`
            <${me.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||Yr.Left})}
                class=${en({open:!!t.showPopUpResult})}
                ${W(me.events.init,i=>{n({navController:i.detail.navController,popUpManager:i.detail.popUpManager})})}
                ${W(me.events.openChange,i=>{!!t.showPopUpResult!=!!i.detail&&r(new o.openChange(i.detail)),n({showPopUpResult:i.detail})})}
                ${W(me.events.navSelect,i=>{const s=i.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);r(new o.itemActivate(TS(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${me.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?y`
                          <${ks.assign({direction:t.showPopUpResult.popDown?Tu.Downwards:Tu.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${me.slotNames.popUp}
                              class=${en({"full-width-menu":e.horizontalAnchor===Yr.Both})}
                          >
                              <${Fs.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${mi(oN.menu)}
                              ></${Fs}>
                          </${ks}>
                      `:se}
            </${me}>
        `}}),Oe=ze()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>C`
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
        `}});var em=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(em||{});const Se=ze()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Bi};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Oi["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${es};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Wn};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Nn["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Fr["vira-interaction-animation-duration"].value},
                background-color
                    ${Fr["vira-interaction-animation-duration"].value},
                border-color ${Fr["vira-interaction-animation-duration"].value};

            ${$a({elementBorderSize:2})}
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
        `}});var ff=(e=>(e.Error="error",e.Success="success",e))(ff||{});const dc=ze()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${J["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${J["vira-form-success-foreground-color"].value};
        }
    `,render(){return y`
            <slot></slot>
        `}}),iN=le({name:"Bell24Icon",svgTemplate:y`
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
    `}),sN=le({name:"Chat24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),tm=le({name:"ChevronUp24Icon",svgTemplate:y`
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
    `}),Ww=le({name:"CloseX24Icon",svgTemplate:y`
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
    `}),aN=le({name:"Commit24Icon",svgTemplate:y`
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
    `}),uN=le({name:"Document24Icon",svgTemplate:y`
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
    `}),qw=le({name:"Element16Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Sn=le({name:"Element24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),lN=le({name:"ExternalLink24Icon",svgTemplate:y`
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
    `}),zw=le({name:"EyeClosed24Icon",svgTemplate:y`
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
    `}),Kw=le({name:"EyeOpen24Icon",svgTemplate:y`
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
    `}),cN=le({name:"Link24Icon",svgTemplate:y`
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
    `}),Zw=le({name:"Loader24Icon",svgTemplate:y`
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
    `}),fN=C`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Fr["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Js=le({name:"LoaderAnimated24Icon",svgTemplate:y`
        <style>
            ${fN}
        </style>
        ${Zw.svgTemplate}
    `}),dN=le({name:"Lock24Icon",svgTemplate:y`
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
    `}),Ss=le({name:"Options24Icon",svgTemplate:y`
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
    `}),mN=le({name:"Pencil24Icon",svgTemplate:y`
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
    `}),hN=le({name:"Shield24Icon",svgTemplate:y`
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
    `}),pN=le({name:"SpeakerLoud24Icon",svgTemplate:y`
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
    `}),gN=le({name:"SpeakerMedium24Icon",svgTemplate:y`
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
    `}),yN=le({name:"SpeakerMuted24Icon",svgTemplate:y`
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
    `}),wN=le({name:"SpeakerQuiet24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),bN=le({name:"Star24Icon",svgTemplate:y`
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
    `}),Mu=le({name:"StatusFailure24Icon",svgTemplate:y`
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
    `}),$N=le({name:"StatusInProgress24Icon",svgTemplate:y`
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
    `}),vN=le({name:"StatusSuccess24Icon",svgTemplate:y`
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
    `}),DN=le({name:"StatusUnknown24Icon",svgTemplate:y`
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
    `}),EN=le({name:"StatusWarning24Icon",svgTemplate:y`
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
    `}),xN=le({name:"Upload24Icon",svgTemplate:y`
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
    `}),Gw=le({name:"X24Icon",svgTemplate:y`
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
    `}),df={Bell24Icon:iN,Chat24Icon:sN,Check24Icon:Jd,ChevronUp24Icon:tm,CloseX24Icon:Ww,Commit24Icon:aN,Document24Icon:uN,Element16Icon:qw,Element24Icon:Sn,ExternalLink24Icon:lN,EyeClosed24Icon:zw,EyeOpen24Icon:Kw,Link24Icon:cN,Loader24Icon:Zw,LoaderAnimated24Icon:Js,Lock24Icon:dN,Options24Icon:Ss,Pencil24Icon:mN,Shield24Icon:hN,SpeakerLoud24Icon:pN,SpeakerMedium24Icon:gN,SpeakerMuted24Icon:yN,SpeakerQuiet24Icon:wN,Star24Icon:bN,StatusFailure24Icon:Mu,StatusInProgress24Icon:$N,StatusSuccess24Icon:vN,StatusUnknown24Icon:DN,StatusWarning24Icon:EN,Upload24Icon:xN,X24Icon:Gw},ye=ze()({tagName:"vira-checkbox",styles:C`
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
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;

            &.disabled {
                cursor: not-allowed;
            }

            & .label-text {
                cursor: pointer;
                font-weight: ${J["vira-form-label-font-weight"].value};
            }
        }

        ${U} {
            ${b["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${J["vira-form-border-color"].value};
            color: ${J["vira-form-foreground-color"].value};
            border-radius: ${Nn["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${$a({elementBorderSize:1})}

            &.checked {
                & ${U} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${J["vira-form-error-foreground-color"].value};
            }

            &:hover {
                background-color: ${J["vira-form-selection-hover-background-color"].value};
            }

            &:active {
                background-color: ${J["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${es};
            }
        }
    `,events:{valueChange:st()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}const o=e.label?y`
                  <span
                      class="label-text"
                      ${Cr(e.attributePassthrough?.text)}
                      style=${Ye(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:se;return y`
            <label
                class=${en({disabled:!!e.disabled})}
                ${Cr(e.attributePassthrough?.label)}
                style=${Ye(e.stylePassthrough?.label)}
                ${W("mousedown",r)}
            >
                ${o}
                <span
                    class="custom-checkbox ${en({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Cr(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Ye(e.stylePassthrough?.["custom-checkbox"])}
                    ${Z8(r)}
                >
                    <${U.assign({icon:Jd,fitContainer:!0})}
                        ${Cr(e.attributePassthrough?.[U.tagName])}
                        style=${Ye(e.stylePassthrough?.[U.tagName])}
                    ></${U}>
                </span>
            </label>
        `}}),mr=ze()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Wn};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Fr["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:st()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:o,inputs:i}){const s=i.expanded?C`
                  height: ${e.contentHeight}px;
              `:C`
                  height: 0;
              `;return y`
            <button
                class="header-wrapper"
                ${W("click",()=>{r(new o.expandChange(!i.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${ww(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),mc={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},$s=ze()({tagName:"vira-dropdown",styles:C`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${Kr} {
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
                ${Fr["vira-interaction-animation-duration"].value} linear;
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
            ${Bi};
            border: 1px solid ${J["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${Nn["vira-form-input-radius"].value};
            background-color: ${J["vira-form-background-color"].value};
            color: ${J["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:st(),openChange:st()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:n,events:r,updateState:o}){const i=Bo(t.selected,c=>t.options.find(f=>f.id===c),S.isTruthy),s=t.icon?y`
                  <${U.assign({icon:t.icon})}
                      ${mi(mc.icon)}
                  ></${U}>
              `:se,a=!i.length,u=t.selectionPrefix&&!a?y`
                      <span class="selected-label-prefix" ${mi(mc.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:se,l=a?t.placeholder||"":t.isMultiSelect&&i.length>1?`${i.length} Selected`:i[0]?.label||"";return y`
            <${Kr.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||Yr.Both})}
                ${W(Kr.events.openChange,c=>{o({showPopUpResult:c.detail}),n(new r.openChange(c.detail))})}
                ${W(Kr.events.itemActivate,c=>{n(new r.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${en({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${mi(mc.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${en({"using-placeholder":a})}"
                        title=${Ye(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${U.assign({icon:tm})}
                            class="trigger-icon"
                        ></${U}>
                    </span>
                </div>
            </${Kr}>
        `}}),hc=ze()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>C`
        :host {
            color: ${J["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return y`
            <slot></slot>
        `}});function mf({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(n=>mf({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function CN({value:e,allowed:t,blocked:n}){const r=t?mf({input:e,matcher:t}):!0,o=n?mf({input:e,matcher:n}):!1;return r&&!o}function hf(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(CN({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function AN({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:o}){const i=ko(n,HTMLInputElement),s=S.hasKey(n,"data")&&vv.isString(n.data)||"";if(s){const{blocked:u}=hf({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=hf({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&o(a)}var yi=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(yi||{});const gt=ze()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>C`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${J["vira-form-foreground-color"].value};
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
                    font-weight: ${J["vira-form-label-font-weight"].value};
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
                ${Wn};
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
                ${Bi};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Wn};
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
                border-radius: ${Nn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${J["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Wn};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Nn["vira-form-input-radius"].value};
                background-color: ${J["vira-form-background-color"].value};
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
                ${Wn};
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
                    ${$a({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${J["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${J["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${J["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Bi};
            }

            button {
                ${Wn};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Fr["vira-interaction-animation-duration"].value};
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
                    border-color: ${J["vira-form-error-foreground-color"].value};
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
                    ${es};
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:st(),inputBlocked:st()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Wu(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:n,updateState:r,events:o,host:i})=>{const{filtered:s}=hf({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?y`
                  <${U.assign({icon:e.icon})} class="left-side-icon"></${U}>
              `:se,u=e.fitText?C`
                  width: ${n.forcedInputWidth}px;
              `:se,l=W("mousedown",d=>{const g=ko(d,HTMLElement,{useOriginalTarget:!0}),x=Hr.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement);g!==x&&(d.preventDefault(),x.focus())}),c=e.disableBrowserHelps||e.type==="password",f=y`
            <span class="input-wrapper" ${e.label?se:l}>
                ${a}
                ${Yt(!!e.fitText,y`
                        <span
                            class="size-span"
                            ${ww(({contentRect:d})=>{r({forcedInputWidth:d.width})})}
                        >
                            <pre>${s||e.placeholder||se}</pre>
                        </span>
                    `)}

                <input
                    id=${Ye(e.label?n.randomId:void 0)}
                    aria-label=${Ye(e.label||void 0)}
                    autofocus=${!1}
                    type=${FN(e.type,n.showPassword)}
                    style=${u}
                    autocomplete=${Ye(c?"off":void 0)}
                    autocorrect=${Ye(c?"off":void 0)}
                    autocapitalize=${Ye(c?"off":void 0)}
                    spellcheck=${Ye(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${W("input",d=>{AN({inputs:e,previousValue:s,event:d,inputBlockedCallback(g){t(new o.inputBlocked(g))},newValueCallback(g){t(new o.valueChange(g))}})})}
                    placeholder=${Ye(e.placeholder||void 0)}
                    ${Cr(e.attributePassthrough)}
                />

                ${Yt(!!(e.showClearButton&&e.value),y`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${W("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${W("click",()=>{t(new o.valueChange(""))})}
                        >
                            <${U.assign({icon:Ww})}></${U}>
                        </button>
                    `)}
                ${Yt(e.type==="password",y`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${W("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${W("click",()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${U.assign({icon:n.showPassword?Kw:zw})}></${U}>
                        </button>
                    `)}
                ${Yt(!!e.suffix,y`
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
            `:f}});function FN(e,t){return e==="password"&&t?"text":e||"text"}const Bt=ze()({tagName:"vira-select",state(){return{randomId:Wu(32)}},events:{valueChange:st()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${J["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Wn};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${Nn["vira-form-input-radius"].value};
            background-color: ${J["vira-form-background-color"].value};
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
                    ${$a({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${J["vira-form-placeholder-color"].value};
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
                border-radius: ${Nn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${J["vira-form-border-color"].value};
                transition: border
                    ${Fr["vira-interaction-animation-duration"].value};
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
                font-weight: ${J["vira-form-label-font-weight"].value};
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
                ${es}
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${J["vira-form-error-foreground-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:n,events:r}){const o=e.value||void 0,i=e.placeholder||o==null?y`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:se,s=y`
            <span class="select-wrapper">
                <select
                    .value=${Ye(o)}
                    class=${en({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Ye(e.label?t.randomId:void 0)}
                    aria-label=${Ye(e.label||void 0)}
                    aria-disabled=${Ye(e.disabled?"true":void 0)}
                    ${W("input",a=>{const u=ko(a,HTMLSelectElement),l=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(c=>c.value===o)),n(new r.valueChange(l))})}
                    ${Cr(e.attributePassthrough?.select)}
                >
                    ${i}
                    ${e.options.map(a=>y`
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

                <${U.assign({icon:e.icon})} class="input-icon"></${U}>
                <${U.assign({icon:tm})} class="trigger-icon"></${U}>
            </span>
        `;return e.label?y`
                <label for=${t.randomId} ${Cr(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}});var vo=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))(vo||{});const ms=ze()({tagName:"vira-form",slotNames:["actionButtons"],events:{valueChange:st()},styles:C`
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    `,render({inputs:e,slotNames:t,dispatch:n,events:r}){const o=Vu(e.fields).map(([i,s])=>s.type==="checkbox"?y`
                        <${ye.assign({value:s.value,disabled:s.disabled,hasError:s.hasError,label:s.label})}
                            ${W(ye.events.valueChange,a=>{n(new r.valueChange({key:i,...s,value:a.detail}))})}
                        ></${ye}>
                    `:s.type==="select"?y`
                        <${Bt.assign({options:s.options,value:s.value,placeholder:s.placeholder,disabled:s.disabled,label:s.label,hasError:s.hasError,icon:s.icon})}
                            ${W(Bt.events.valueChange,a=>{n(new r.valueChange({key:i,...s,value:a.detail}))})}
                        ></${Bt}>
                    `:y`
                        <${gt.assign({value:s.value,disabled:s.disabled,hasError:s.hasError,icon:s.icon,label:s.label,placeholder:s.placeholder,showClearButton:e.showClearButtons,attributePassthrough:s.isUsername?{autocomplete:"username"}:s.type==="new-password"?{autocomplete:"new-password"}:s.type==="existing-password"?{autocomplete:"password"}:s.type==="email"?{autocomplete:"email"}:{},type:["new-password","existing-password"].includes(s.type)?yi.Password:s.type==="email"?yi.Email:yi.Default})}
                            ${W(gt.events.valueChange,a=>{n(new r.valueChange({key:i,...s,value:a.detail}))})}
                        ></${gt}>
                    `);return y`
            <form ${W("submit",i=>i.preventDefault())}>
                ${o}
                <slot name=${t.actionButtons}></slot>
            </form>
        `}}),Ur=ze()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:st(),imageError:st()},styles:({hostClasses:e})=>C`
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
    `,render({inputs:e,state:t,updateState:n,dispatch:r,events:o,slotNames:i}){const s=e.imageUrl,a=t.erroredUrls[s]?y`
                  <slot class="status-wrapper" name=${i.error}>
                      <${U.assign({icon:Mu})} class="error"></${U}>
                  </slot>
              `:t.loadedUrls[s]?void 0:y`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${U.assign({icon:Js})}></${U}>
                    </slot>
                `;return y`
            ${Yt(!!a,a)}
            <img
                class=${en({hidden:!!a})}
                ${W("load",async()=>{e._debugLoadDelay&&await Ms(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[s]:!0}}),r(new o.imageLoad)})}
                ${W("error",async u=>{e._debugLoadDelay&&await Ms(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[s]:!0}}),r(new o.imageError(u.error))})}
                src=${s}
            />
        `}}),kN=["pagehide","pageshow","popstate"],hr=ze()({tagName:"vira-modal",events:{modalClose:st()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${Hd};
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
            ${gi.modal}

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
                        ${Wn};
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
    `,render({inputs:e,state:t,updateState:n,events:r,dispatch:o,slotNames:i}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),n({previousOpenValue:e.open}),e.open)){const a=kN.map(u=>Oc(u,()=>{o(new r.modalClose)}));n({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),o(new r.modalClose))}return y`
            <dialog
                ${Su(a=>{n({dialogElement:Hr.instanceOf(a,HTMLDialogElement)})})}
                ${W("close",()=>{s()})}
                ${W("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Su(a=>{n({contentElement:Hr.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${i.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?y`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:se}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${W("click",()=>{t.dialogElement?.close()})}
                        >
                            <${U.assign({icon:Gw})}></${U}>
                        </button>
                    </div>
                    ${e.open?y`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:se}
                </div>
            </dialog>
        `}}),Mt=ze()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>C`
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
    `,render({inputs:e,host:t}){const n=e.min||0,o=(e.max||100)-n,i=e.value-n,s=qv(Math.round(i/o*100),{min:0,max:100});return Ow(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),y`
            <div
                class="progress-bar"
                style=${s?C`
                          width: ${s}%;
                      `:C`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}}),On=bw(),An=On()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>C`
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
                ${W("click",r=>{(!e.router||Nw(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new Iu(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function SN(e,t){return e.entry.entryType===wt.Root?!1:e.entry.entryType===wt.Page||S.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:S.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const wr=On()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>C`
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
            ${An.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!SN(n,e.selectedPath))return;const r=C`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return y`
                <li style=${r}>
                    <${An.assign({router:e.router,route:{paths:[Kt.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${en({"title-row":!0,selected:e.selectedPath?S.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Yt(di(n,wt.ElementExample),y`
                                    <${U.assign({icon:qw})}></${U}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${An}>
                </li>
            `});return y`
            <${An.assign({route:vi,router:e.router})}>
                <slot name=${or.NavHeader}>Book</slot>
            </${An}>
            <ul>
                ${t}
            </ul>
        `}});async function NN(e){await cf(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await cS(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const no=On()({tagName:"book-error",styles:C`
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
            `)}}),Hs=On()({tagName:"book-page-controls",events:{controlValueChange:st()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>C`
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

        ${gt} {
            height: 24px;
            max-width: 128px;
        }

        ${U}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,o],i)=>{if(o.controlType===H.Hidden)return"";const s=IN(e.currentValues[r],o,a=>{const u=S.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[r]:a}}))});return y`
                    <div class="control-wrapper">
                        ${Yt(i===0,y`
                                <${U.assign({icon:Ss})}
                                    class="options-icon"
                                ></${U}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function IN(e,t,n){return Xo(t,H.Hidden)?"":Xo(t,H.Checkbox)?y`
            <input
                type="checkbox"
                ?checked=${e}
                ${W("input",r=>{const o=ko(r,HTMLInputElement);n(o.checked)})}
            />
        `:Xo(t,H.Color)?y`
            <input
                type="color"
                .value=${e}
                ${W("input",r=>{const o=ko(r,HTMLInputElement);n(o.value)})}
            />
        `:Xo(t,H.Text)?y`
            <${gt.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${W(gt.events.valueChange,r=>{n(r.detail)})}
            ></${gt}>
        `:Xo(t,H.Number)?y`
            <input
                type="number"
                .value=${e}
                ${W("input",r=>{const o=ko(r,HTMLInputElement);n(o.value)})}
            />
        `:Xo(t,H.Dropdown)?y`
            <select
                .value=${e}
                ${W("input",r=>{const o=ko(r,HTMLSelectElement);n(o.value)})}
            >
                ${t.options.map(r=>y`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:y`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Y0=On()({tagName:"book-breadcrumbs",styles:C`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,o)=>{const i=r>=o.length-1,s=o.slice(0,r+1),a=i?"":y`
                      <span class="spacer">&gt;</span>
                  `;return y`
                <${An.assign({route:{hash:void 0,search:void 0,paths:[Kt.Book,...s]},router:e.router})}>
                    ${n}
                </${An}>
                ${a}
            `}):y`
                &nbsp;
            `}}),pc=On()({tagName:"book-breadcrumbs-bar",styles:C`
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
            ${Yt(!!e.currentSearch,y`
                    &nbsp;
                `,y`
                    <${Y0.assign({currentRoute:e.currentRoute,router:e.router})}></${Y0}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${W("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=r.value;await Ms({milliseconds:200}),r.value===o&&(r.value?t(new Iu({paths:[Kt.Search,encodeURIComponent(r.value)]})):t(new Iu(vi)))})}
            />
        `}}),J0=On()({tagName:"book-entry-description",styles:C`
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
            `)}}),H0=On()({tagName:"book-page-wrapper",styles:C`
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

        ${An} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?y`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:y`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Kt.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?Gg(e.pageNode.entry.errors):void 0;return r&&console.error(r),y`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${An.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${An}>
                    ${r?y`
                              <${no.assign({message:r.message})}></${no}>
                          `:y`
                              <${J0.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${J0}>
                              <${Hs.assign({config:e.pageNode.entry.controls,currentValues:Bf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Hs}>
                          `}
                </div>
            </div>
        `}}),Za=On()({tagName:"book-element-example-controls",styles:C`
        :host {
            display: flex;
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Kt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return y`
            <${An.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${An}>
        `}}),X0=Symbol("unset-internal-state"),Q0=On()({tagName:"book-element-example-viewer",state(){return{isUnset:X0}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Gg(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===X0&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return y`
                ${Yt(!!t.elementExampleNode.entry.styles,y`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",Ht(r)),console.error(r),y`
                <${no.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ht(r)}`})}></${no}>
            `}},options:{allowPolymorphicState:!0}}),ep=On()({tagName:"book-element-example-wrapper",styles:C`
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

        ${Za} {
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Za} {
            color: ${fe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return y`
            <div class="individual-example-wrapper">
                <${Za.assign(Gv(e,["currentPageControls"]))}></${Za}>
                <${Q0.assign(e)}></${Q0}>
            </div>
        `}});function Yw(e,t,n,r){const o=Bc(n,r),i=[];if(o){const s=Yw(e,t,o,r);s&&i.push(s)}if(di(n,wt.Page)&&!e.includes(n)){const s=Bf(t,n.fullUrlBreadcrumbs);i.push({config:n.entry.controls,current:s,breadcrumbs:dn(s,()=>n.fullUrlBreadcrumbs)})}return i.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function TN({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:o,originalTree:i}){if(!e.length&&r)return[y`
                No results
            `];const s=S.isLengthAtLeast(e,1)?Yw(e,o,e[0],i):void 0,a=s&&Object.values(s.config).length&&S.isLengthAtLeast(e,1)?y`
                  <${Hs.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Hs}>
              `:se,u=V8(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(di(l,wt.Page))return y`
                    <${H0.assign({isTopLevel:t,pageNode:l,controls:o,router:n})}
                        class="block-entry"
                    ></${H0}>
                `;if(di(l,wt.ElementExample)){const c=Bf(o,l.fullUrlBreadcrumbs.slice(0,-1));return y`
                    <${ep.assign({elementExampleNode:l,currentPageControls:c,router:n})}
                        class="inline-entry ${en({"block-entry":l.entry.isVertical})}"
                    ></${ep}>
                `}else return di(l,wt.Root)?se:y`
                    <${no.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${no}>
                `});return[a,u]}const ri=On()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:C`
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

        ${pc} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Fr["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:st()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:o})=>{const i=Rc(e.currentRoute.paths),s=TN({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return y`
            <${pc.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${pc}>

            ${Yt(e.showLoading,y`
                    <div
                        ${Su(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${U.assign({icon:Js})}></${U}>
                    </div>
                    ${Yt(!!r.lastElement,y`
                            ${r.lastElement}
                            <slot name=${or.Footer}></slot>
                        `)}
                `,y`
                    <div
                        ${Su(a=>{o({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${or.Footer}></slot>
                `)}
        `}});function MN(e,t,n){const r=tp(e,t);return r.length?r:(n(vi),tp(e,vi.paths))}function tp(e,t){return e.filter(n=>oD({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const gc=qd()({tagName:"element-book-app",state(){return{currentRoute:vi,router:void 0,loading:!0,colors:{config:void 0,theme:B0(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:st()},styles:C`
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

        ${ri} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${wr} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await np(e,Rc(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:o,events:i})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const f=s(c);return!S.jsonEquals(e.currentRoute,f)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(S.isTruthy).join(" - "))}function l(c){if(!a(c))return;const f=s(c);e.router?e.router.setRoute(f):r({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=SS(t.internalRouterConfig.basePath);r({router:A}),A.listen(!0,N=>{r({currentRoute:N})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!S.jsonEquals(c,e.colors.config)){const A=B0(c);r({colors:{config:c,theme:A}}),RD(n,A)}const f=t._debug??!1,d=lD({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:sy(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const g=Rc(e.currentRoute.paths),D=(g?yS({flattenedNodes:d.flattenedNodes,searchQuery:g}):void 0)??MN(d.flattenedNodes,e.currentRoute.paths,l);u(D[0]?.entry.title);const k=e.treeBasedControls?.controls;return k?(t._debug&&console.info({currentControls:k}),y`
                <div
                    class="root"
                    ${W(Iu,async A=>{const N=A.detail;if(!a(N))return;if(r({loading:!0}),l(N),!(n.shadowRoot.querySelector(wr.tagName)instanceof wr))throw new TypeError(`Failed to find child '${wr.tagName}'`);await np(n,g,e.currentRoute)})}
                    ${W(Hs.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const N=fD(k,A.detail.fullUrlBreadcrumbs,A.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:N}})})}
                >
                    <${wr.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:g?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${or.NavHeader}
                            slot=${or.NavHeader}
                        ></slot>
                    </${wr}>
                    <${ri.assign({controls:k,currentNodes:D,currentRoute:e.currentRoute,debug:f,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${W(ri.events.loadingRender,async A=>{await cf();const N=n.shadowRoot.querySelector(ri.tagName);N?N.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${ri.tagName}' for scrolling.`),await cf(),r({loading:!A.detail})})}
                    >
                        <slot
                            name=${or.Footer}
                            slot=${or.Footer}
                        ></slot>
                    </${ri}>
                </div>
            `):y`
                    <${no.assign({message:"Failed to generate page controls."})}></${no}>
                `}catch(c){return console.error(c),y`
                <p class="error">${Ht(c)}</p>
            `}}});async function np(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(wr.tagName);if(!(r instanceof wr))throw new TypeError(`Failed to find child '${wr.tagName}'`);await NN(r)}const Ke=ke({title:"Elements",parent:void 0}),Jw=ke({title:"Styles",parent:void 0}),PN=ke({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:H.Color,initValue:""},"Fill Color":{controlType:H.Color,initValue:""},"Stroke Width":{controlType:H.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(df).forEach(t=>{e({title:t.name,styles:C`
                    :host(:hover) ${U} {
                        background-color: #f2f2f2;
                    }

                    ${U} {
                        padding: 8px;
                        border-radius: ${Nn["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=C`
                        ${b["vira-icon-fill-color"].name}: ${Xe(n["Fill Color"]||"inherit")};
                        ${b["vira-icon-stroke-color"].name}: ${Xe(n["Stroke Color"]||"inherit")};
                        ${b["vira-icon-stroke-width"].name}: ${Xe(n["Stroke Width"]?Hg(n["Stroke Width"]):"inherit")};
                    `;return y`
                        <${U.assign({icon:t})} style=${r}></${U}>
                    `}})})}}),ON=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:y`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:C`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:C`
            ${an} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],BN=ke({title:an.tagName,parent:Ke,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:H.Text,initValue:""}},defineExamples({defineExample:e}){ON.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?y`
                            <${an.assign(r)}>
                                ${t.customTemplate}
                            </${an}>
                        `:y`
                            <${an.assign(r)}></${an}>
                        `}})})}}),pf=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new Yd({sanitizeRoute(e){return e}})}}],RN=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:Qd.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...pf,{id:"long",label:y`
                        <${an.assign({selected:!1})}>
                            <div
                                style=${C`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${an}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:Yr.Both,items:[...pf,{id:"long",label:y`
                        <${an.assign({selected:!1})}>
                            <div
                                style=${C`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${an}>
                    `}]}}],LN=ke({parent:Ke,title:Kr.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){RN.forEach(t=>{e({title:t.title,styles:C`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return y`
                        <${Kr.assign({items:pf,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${Kr}>
                    `}})})}}),Hw=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],UN=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...Hw,{id:4,label:"link here",route:{route:{paths:["test"]},router:new Yd({sanitizeRoute(e){return e}})}}]}}],jN=ke({parent:Ke,title:Fs.tagName,defineExamples({defineExample:e}){UN.forEach(t=>{e({title:t.title,render(){return y`
                        <${Fs.assign({isMultiSelect:!1,navController:void 0,items:Hw,selected:[],...t.inputs})}></${Fs}>
                    `}})})}}),Xw=[];Vn(Tu).forEach(e=>{Vn(Qd).forEach(t=>{Xw.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const _N=ke({parent:Ke,title:ks.tagName,defineExamples({defineExample:e}){Xw.forEach(t=>{e({title:t.title,styles:C`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return y`
                        <${ks.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${ks}>
                    `}})})}}),VN=ke({parent:Ke,title:me.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:C`
                ${me} {
                    ${Oi["vira-focus-outline-border-radius"].name}: 0;
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
                `}})}}),WN=[{title:"menu shadow",styles:gi.menuShadow},{title:"menu shadow reversed",styles:gi.menuShadowReversed},{title:"modal",styles:gi.modal}],qN=ke({parent:Jw,title:"Shadows",defineExamples({defineExample:e}){WN.forEach(t=>{e({title:t.title,styles:C`
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
                    `}})})}}),zN=ke({parent:Ke,title:Oe.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:H.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return y`
                    <${Oe.assign({text:"Text here",bold:!1})}></${Oe}>
                `}}),e({title:"Bold",render(){return y`
                    <${Oe.assign({text:"Text here",bold:!0})}></${Oe}>
                `}}),e({title:"Dynamic",render({controls:t}){return y`
                    <${Oe.assign({text:"Text here",bold:t.bolded})}></${Oe}>
                `}}),e({title:"Resized",styles:C`
                ${Oe} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return y`
                    <${Oe.assign({text:"Not Bolded",bold:!1})}></${Oe}>
                    <${Oe.assign({text:"Bolded",bold:!0})}></${Oe}>
                `}}),e({title:"Alignment",styles:C`
                ${Oe} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return y`
                    <${Oe.assign({text:"Not Bolded",bold:!1})}></${Oe}>
                    <${Oe.assign({text:"Bolded",bold:!0})}></${Oe}>
                `}}),e({title:"Stylized",styles:C`
                ${Oe} {
                    text-decoration: underline;
                }
            `,render(){return y`
                    <${Oe.assign({text:"Not Bolded",bold:!1})}></${Oe}>
                    <${Oe.assign({text:"Bolded",bold:!0})}></${Oe}>
                `}})}}),KN=ke({parent:Ke,title:Se.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:H.Color,initValue:Se.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:H.Color,initValue:Se.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:H.Color,initValue:Se.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:H.Color,initValue:Se.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:o}){const i=r??C``;e({title:n,styles:i,render({controls:s}){const a=C`
                        ${Se.cssVars["vira-button-primary-color"].name}: ${Xe(s["Primary color"]||"inherit")};
                        ${Se.cssVars["vira-button-secondary-color"].name}: ${Xe(s["Secondary color"]||"inherit")};
                        ${Se.cssVars["vira-button-primary-hover-color"].name}: ${Xe(s["Hover color"]||"inherit")};
                        ${Se.cssVars["vira-button-primary-active-color"].name}: ${Xe(s["Active color"]||"inherit")};
                    `;return y`
                        <${Se.assign({text:"hello",...o})}
                            style=${a}
                        ></${Se}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Ss}}),t({title:"with expanding icon",inputs:{icon:Ss,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:em.Outline}}),t({title:"only icon",inputs:{icon:Ss,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:C`
                ${Se} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:C`
                ${Se} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:C`
                :host {
                    ${Se.cssVars["vira-button-primary-color"].name}: pink;
                    ${Se.cssVars["vira-button-secondary-color"].name}: purple;
                    ${Se.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${Se.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return y`
                    <${Se.assign({text:"hello"})}></${Se}>
                `}})}}),ZN=[{title:"basic"},{title:"success",inputs:{cardState:ff.Success}},{title:"error",inputs:{cardState:ff.Error}},{title:"long",content:y`
            <p
                style=${C`
                    ${Hd}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],GN=ke({parent:Ke,title:dc.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){ZN.forEach(t=>{e({title:t.title,render(){return y`
                        <${dc.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${dc}>
                    `}})})}}),YN=ke({parent:Ke,title:ye.tagName,controls:{Checked:{controlType:H.Checkbox,initValue:!1},Disabled:{controlType:H.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:n}){return y`
                    <${ye.assign({value:t.checked})}
                        ${W(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:n}){return y`
                    <${ye.assign({value:t.checked})}
                        ${W(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:n}){return y`
                    <${ye.assign({value:t.checked,hasError:!0})}
                        ${W(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}}),e({title:"disabled unchecked",render(){return y`
                    <${ye.assign({value:!1,disabled:!0})}></${ye}>
                `}}),e({title:"disabled checked",render(){return y`
                    <${ye.assign({value:!0,disabled:!0})}></${ye}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return y`
                    <${ye.assign({value:t.Checked,disabled:t.Disabled})}></${ye}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return y`
                    <${ye.assign({value:!0})}></${ye}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:n}){return y`
                    <${ye.assign({value:t.checked,label:"label goes here"})}
                        ${W(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:C`
                ${ye} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:n}){return y`
                    <${ye.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${W(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}})}}),JN=ke({title:mr.tagName,parent:Ke,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,o)=>y`
                        <${mr.assign({expanded:!!n.expandedStates[o]})}
                            ${W(mr.events.expandChange,i=>{const s=[...n.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${mr.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${W("click",()=>{const i=[...n.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Yt(!!n.showMoreStates[o],y`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${mr}>
                    `)}}),e({title:"wider examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,o)=>y`
                        <${mr.assign({expanded:!!n.expandedStates[o]})}
                            ${W(mr.events.expandChange,i=>{const s=[...n.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${mr.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${W("click",()=>{const i=[...n.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Yt(!!n.showMoreStates[o],y`
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
                        </${mr}>
                    `)}})}}),Ns=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],HN=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Ns,{id:42,label:y`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Ns,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:C`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:C`
            ${$s} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Sn}}],XN=ke({title:$s.tagName,parent:Ke,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["",...Ns.map(e=>e.label)]},Prefix:{controlType:H.Text,initValue:""},"Force State":{controlType:H.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:H.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:H.Dropdown,initValue:"",options:["",...Object.keys(df)]},Disabled:{controlType:H.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:H.Text,initValue:"Select something"}},defineExamples({defineExample:e}){HN.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:n,updateState:r,controls:o}){const i={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:o.Placeholder,options:t.inputs?.options||Ns,selected:o.Selected?[Ns.find(s=>s.label===o.Selected)?.id].filter(S.isTruthy):n.selected,selectionPrefix:o.Prefix||t.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":t.inputs?.isDisabled,icon:o.Icon?df[o.Icon]:t.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return y`
                        <${$s.assign(i)}
                            ${W($s.events.selectedChange,s=>{r({selected:s.detail})})}
                        ></${$s}>
                    `}})})}}),QN=ke({parent:Ke,title:hc.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${hc}>Error Content</${hc}>
                `}})}}),eI=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],tI=ke({parent:Ke,title:ms.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:C`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:vo.Text,label:"First Name",value:t.firstName},lastName:{type:vo.Text,label:"Last Name",value:t.lastName},subscribe:{type:vo.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:vo.Email,label:"Email Address",value:t.email},password:{type:vo.NewPassword,label:"Password",value:t.password},userRole:{type:vo.Select,label:"Role",options:eI,value:t.userRole}};return y`
                    <${ms.assign({fields:r})}
                        ${W(ms.events.valueChange,o=>{n({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons" slot=${ms.slotNames.actionButtons}>
                            <${Se.assign({text:"Cancel",buttonStyle:em.Outline})}></${Se}>
                            <${Se.assign({text:"Submit"})}></${Se}>
                        </div>
                    </${ms}>
                `}})}}),nI=ke({title:U.tagName,parent:Ke,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${U.assign({icon:Sn})}></${U}>
                `}}),e({title:"using createColoredIcon",render(){return y`
                    <${U.assign({icon:q0(Sn,{"vira-icon-stroke-color":"red"})})}></${U}>
                `}}),e({title:"fit container",styles:C`
                ${U} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return y`
                    <${U.assign({icon:q0(Sn,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${U}>
                `}})}}),rI=ke({title:Ur.tagName,parent:Ke,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:C`
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
                        <${U.assign({icon:Js,fitContainer:!0})}
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
                        <${U.assign({icon:Mu,fitContainer:!0})}
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
                        <${U.assign({icon:Js,fitContainer:!0})}
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
                        <${U.assign({icon:Mu,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${U}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:C`
                    ${Ur} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||C``}
                    }

                    ${n.allowReload?C`
                              ${Ur} {
                                  cursor: pointer;
                              }

                              ${Ur}:hover {
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
                `,state(){return{imageUrl:n.inputs.imageUrl}},render({state:r,updateState:o}){return y`
                        <${Ur.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${W("click",()=>{n.allowReload&&o({imageUrl:`${n.inputs.imageUrl}?di=${Wu()}`})})}
                        >
                            ${n.loadingSlot?y`
                                      <div class="slot-wrapper" slot=${Ur.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:se}${n.errorSlot?y`
                                      <div class="slot-wrapper" slot=${Ur.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:se}
                        </${Ur}>
                    `}})})}}),oI=ke({title:gt.tagName,parent:Ke,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:H.Color,initValue:J["vira-form-foreground-color"].default},"Placeholder color":{controlType:H.Color,initValue:J["vira-form-placeholder-color"].default},"Border color":{controlType:H.Color,initValue:J["vira-form-border-color"].default},"Focus color":{controlType:H.Color,initValue:Oi["vira-focus-outline-color"].default},"Selection color":{controlType:H.Color,initValue:J["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:o,inputs:i}){e({title:o,styles:C`
                    ${r||C``}
                `,state(){return{value:i.value}},render({state:s,updateState:a,controls:u}){const l={[String(J["vira-form-foreground-color"].name)]:u["Text color"],[String(J["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(J["vira-form-border-color"].name)]:u["Border color"],[String(Oi["vira-focus-outline-color"].name)]:u["Focus color"],[String(J["vira-form-text-selection-color"].name)]:u["Selection color"]},c=dn(l,(d,g)=>g||"inherit"),f=Object.entries(c).map(([d,g])=>[d,g].join(": ")+";").join(`
`);return y`
                        <${gt.assign({...i,value:s.value})}
                            style=${f}
                            ${W(gt.events.valueChange,d=>{a({value:d.detail}),console.info("changed:",d.detail)})}
                        ></${gt}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Sn}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:C`
                    ${gt} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Sn}},{title:"taller height",styles:C`
                    ${gt} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Sn}},{title:"shorter height",styles:C`
                    ${gt} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Sn}},{title:"max width",styles:C`
                    ${gt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:C`
                    ${gt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:yi.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:yi.Email,attributePassthrough:{autocomplete:"username"}}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:C`
                    ${gt} {
                        width: unset;
                    }
                `}].forEach(t)}}),iI=ke({title:ai.tagName,parent:Ke,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:H.Color,initValue:""},"Hover color":{controlType:H.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:o}){const i=C`
                        ${ai.cssVars["vira-link-hover-color"].name}: ${Xe(o["Hover color"]||"inherit")};
                        color: ${Xe(o["CSS Color"]||"inherit")};
                    `;return y`
                        <${ai.assign(r)} style=${i}>My Link</${ai}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),sI=ke({title:hr.tagName,parent:Ke,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:n}){return y`
                    <button
                        ${W("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${hr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(hr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${hr}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:C`
                ${hr} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${hr.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:n}){return y`
                    <button
                        ${W("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${hr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(hr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${hr}>
                `}})}}),aI=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:C`
            :host {
                ${Mt.cssVars["vira-progress-background-color"].name}: red;
                ${Mt.cssVars["vira-progress-foreground-color"].name}: black;
                ${Mt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Mt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:C`
            :host {
                ${Mt.cssVars["vira-progress-background-color"].name}: red;
                ${Mt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Mt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Mt} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:C`
            :host {
                ${Mt.cssVars["vira-progress-background-color"].name}: red;
                ${Mt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Mt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Mt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],uI=ke({parent:Ke,title:Mt.tagName,defineExamples({defineExample:e}){aI.forEach(t=>{e({title:t.title,styles:C`
                    ${t.styles||C``}
                `,render(){return y`
                        <${Mt.assign({value:50,...t.inputs})}></${Mt}>
                    `}})})}}),ct=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],lI=[{title:"basic",inputs:{options:ct}},{title:"with really long option",inputs:{options:[...ct,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:ct,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:ct,disabled:!0}},{title:"error",inputs:{options:ct,hasError:!0}},{title:"with icon",inputs:{options:ct,icon:Sn}},{title:"custom width",inputs:{options:ct},styles:C`
            ${Bt} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:ct,icon:Sn},styles:C`
            ${Bt} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:ct,icon:Sn},styles:C`
            ${Bt} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:ct,label:"Pick an option"}},{title:"with long label",inputs:{options:ct,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:ct,label:"Pick a really really really really long option"},styles:C`
            ${Bt} {
                width: unset;
            }
        `}],cI=ke({parent:Ke,title:Bt.tagName,defineExamples({defineExample:e}){lI.forEach(t=>{e({title:t.title,styles:C`
                    ${t.styles||C``}
                `,state(){return{selected:void 0}},render({state:n,updateState:r}){return y`
                        <${Bt.assign({...t.inputs,value:n.selected??t.inputs.value})}
                            ${W(Bt.events.valueChange,o=>{r({selected:o.detail})})}
                        ></${Bt}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return y`
                    <${Bt.assign({options:ct,value:ct[0]?.value})}></${Bt}>
                `}}),e({title:"force update",render(){return y`
                    <${rp}></${rp}>
                `}})}}),rp=ze()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const n=ct.findIndex(o=>o.value===t.value),r=Hr.isDefined(ct[(n+1)%ct.length]).value;e({value:r}),console.info(`Forcing select to ${r}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return y`
            <${Bt.assign({options:ct,value:e.value})}></${Bt}>
        `}}),fI=[Ke,PN,Jw],dI=[zN,KN,GN,YN,JN,XN,QN,tI,nI,rI,oI,iI,BN,jN,LN,sI,_N,VN,uI,cI,qN].sort((e,t)=>e.title.localeCompare(t.title)),mI=[...fI,...dI];qd()({tagName:"vira-book-app",styles:C`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${gc} {
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
            <${gc.assign({internalRouterConfig:{basePath:Zd("vira"),useInternalRouter:!0},pages:mI,themeColor:"#33ccff"})}>
                <h1 slot=${or.NavHeader}>Vira</h1>
            </${gc}>
        `}});
