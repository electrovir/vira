(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ft;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ft||(ft={}));function V0(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}class Qc{diff(t,n,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const o=this.castInput(t,r),s=this.castInput(n,r),u=this.removeEmpty(this.tokenize(o,r)),a=this.removeEmpty(this.tokenize(s,r));return this.diffWithOptionsObj(u,a,r,i)}diffWithOptionsObj(t,n,r,i){var o;const s=I=>{if(I=this.postProcess(I,r),i){setTimeout(function(){i(I)},0);return}else return I},u=n.length,a=t.length;let l=1,c=u+a;r.maxEditLength!=null&&(c=Math.min(c,r.maxEditLength));const f=(o=r.timeout)!==null&&o!==void 0?o:1/0,d=Date.now()+f,g=[{oldPos:-1,lastComponent:void 0}];let C=this.extractCommon(g[0],n,t,0,r);if(g[0].oldPos+1>=a&&C+1>=u)return s(this.buildValues(g[0].lastComponent,n,t));let $=-1/0,S=1/0;const x=()=>{for(let I=Math.max($,-l);I<=Math.min(S,l);I+=2){let j;const W=g[I-1],Z=g[I+1];W&&(g[I-1]=void 0);let Be=!1;if(Z){const Qe=Z.oldPos-I;Be=Z&&0<=Qe&&Qe<u}const bt=W&&W.oldPos+1<a;if(!Be&&!bt){g[I]=void 0;continue}if(!bt||Be&&W.oldPos<Z.oldPos?j=this.addToPath(Z,!0,!1,0,r):j=this.addToPath(W,!1,!0,1,r),C=this.extractCommon(j,n,t,I,r),j.oldPos+1>=a&&C+1>=u)return s(this.buildValues(j.lastComponent,n,t))||!0;g[I]=j,j.oldPos+1>=a&&(S=Math.min(S,I-1)),C+1>=u&&($=Math.max($,I+1))}l++};if(i)(function I(){setTimeout(function(){if(l>c||Date.now()>d)return i(void 0);x()||I()},0)})();else for(;l<=c&&Date.now()<=d;){const I=x();if(I)return I}}addToPath(t,n,r,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===n&&s.removed===r?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:n,removed:r,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:n,removed:r,previousComponent:s}}}extractCommon(t,n,r,i,o){const s=n.length,u=r.length;let a=t.oldPos,l=a-i,c=0;for(;l+1<s&&a+1<u&&this.equals(r[a+1],n[l+1],o);)l++,a++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=a,l}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let u=0,a=0,l=0;for(;u<s;u++){const c=i[u];if(c.removed)c.value=this.join(r.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let f=n.slice(a,a+c.count);f=f.map(function(d,g){const C=r[l+g];return C.length>d.length?C:d}),c.value=this.join(f)}else c.value=this.join(n.slice(a,a+c.count));a+=c.count,c.added||(l+=c.count)}}return i}}function jd(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function Ud(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function rc(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function ic(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function Go(e,t){return rc(e,t,"")}function yu(e,t){return ic(e,t,"")}function _d(e,t){return t.slice(0,_w(e,t))}function _w(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);const i=Array(r);let o=0;i[0]=0;for(let s=1;s<r;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=n;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function Yo(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function Tr(e){const t=e.match(/^\s*/);return t?t[0]:""}const Ju="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Vw=new RegExp(`[${Ju}]+|\\s+|[^${Ju}]`,"ug");class Ww extends Qc{equals(t,n,r){return r.ignoreCase&&(t=t.toLowerCase(),n=n.toLowerCase()),t.trim()===n.trim()}tokenize(t,n={}){let r;if(n.intlSegmenter){const s=n.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(s.segment(t),u=>u.segment)}else r=t.match(Vw)||[];const i=[];let o=null;return r.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((n,r)=>r==0?n:n.replace(/^\s+/,"")).join("")}postProcess(t,n){if(!t||n.oneChangePerToken)return t;let r=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&Vd(r,o,i,s),r=s,i=null,o=null)}),(i||o)&&Vd(r,o,i,null),t}}const qw=new Ww;function zw(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?Gw(e,t,n):qw.diff(e,t,n)}function Vd(e,t,n,r){if(t&&n){const i=Tr(t.value),o=Yo(t.value),s=Tr(n.value),u=Yo(n.value);if(e){const a=jd(i,s);e.value=ic(e.value,s,a),t.value=Go(t.value,a),n.value=Go(n.value,a)}if(r){const a=Ud(o,u);r.value=rc(r.value,u,a),t.value=yu(t.value,a),n.value=yu(n.value,a)}}else if(n){if(e){const i=Tr(n.value);n.value=n.value.substring(i.length)}if(r){const i=Tr(r.value);r.value=r.value.substring(i.length)}}else if(e&&r){const i=Tr(r.value),o=Tr(t.value),s=Yo(t.value),u=jd(i,o);t.value=Go(t.value,u);const a=Ud(Go(i,u),s);t.value=yu(t.value,a),r.value=rc(r.value,i,a),e.value=ic(e.value,i,i.slice(0,i.length-a.length))}else if(r){const i=Tr(r.value),o=Yo(t.value),s=_d(o,i);t.value=yu(t.value,s)}else if(e){const i=Yo(e.value),o=Tr(t.value),s=_d(i,o);t.value=Go(t.value,s)}}class Kw extends Qc{tokenize(t){const n=new RegExp(`(\\r?\\n)|[${Ju}]+|[^\\S\\n\\r]+|[^${Ju}]`,"ug");return t.match(n)||[]}}const Zw=new Kw;function Gw(e,t,n){return Zw.diff(e,t,n)}class Yw extends Qc{constructor(){super(...arguments),this.tokenize=Xw}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const Jw=new Yw;function Hw(e,t,n){return Jw.diff(e,t,n)}function Xw(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let i=0;i<r.length;i++){const o=r[i];i%2&&!t.newlineIsToken?n[n.length-1]+=o:n.push(o)}return n}var Qw=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,e2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,t2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,hl={Space_Separator:Qw,ID_Start:e2,ID_Continue:t2},je={isSpaceSeparator(e){return typeof e=="string"&&hl.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||hl.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||hl.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let oc,Tt,yr,Hu,qr,Un,ot,ef,ds;var n2=function(t,n){oc=String(t),Tt="start",yr=[],Hu=0,qr=1,Un=0,ot=void 0,ef=void 0,ds=void 0;do ot=r2(),s2[Tt]();while(ot.type!=="eof");return typeof n=="function"?sc({"":ds},"",n):ds};function sc(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const o=String(i),s=sc(r,o,n);s===void 0?delete r[o]:Object.defineProperty(r,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const o=sc(r,i,n);o===void 0?delete r[i]:Object.defineProperty(r,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let Q,G,os,mr,ie;function r2(){for(Q="default",G="",os=!1,mr=1;;){ie=Cr();const e=W0[Q]();if(e)return e}}function Cr(){if(oc[Hu])return String.fromCodePoint(oc.codePointAt(Hu))}function A(){const e=Cr();return e===`
`?(qr++,Un=0):e?Un+=e.length:Un++,e&&(Hu+=e.length),e}const W0={default(){switch(ie){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":A();return;case"/":A(),Q="comment";return;case void 0:return A(),$e("eof")}if(je.isSpaceSeparator(ie)){A();return}return W0[Tt]()},comment(){switch(ie){case"*":A(),Q="multiLineComment";return;case"/":A(),Q="singleLineComment";return}throw ve(A())},multiLineComment(){switch(ie){case"*":A(),Q="multiLineCommentAsterisk";return;case void 0:throw ve(A())}A()},multiLineCommentAsterisk(){switch(ie){case"*":A();return;case"/":A(),Q="default";return;case void 0:throw ve(A())}A(),Q="multiLineComment"},singleLineComment(){switch(ie){case`
`:case"\r":case"\u2028":case"\u2029":A(),Q="default";return;case void 0:return A(),$e("eof")}A()},value(){switch(ie){case"{":case"[":return $e("punctuator",A());case"n":return A(),ui("ull"),$e("null",null);case"t":return A(),ui("rue"),$e("boolean",!0);case"f":return A(),ui("alse"),$e("boolean",!1);case"-":case"+":A()==="-"&&(mr=-1),Q="sign";return;case".":G=A(),Q="decimalPointLeading";return;case"0":G=A(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":G=A(),Q="decimalInteger";return;case"I":return A(),ui("nfinity"),$e("numeric",1/0);case"N":return A(),ui("aN"),$e("numeric",NaN);case'"':case"'":os=A()==='"',G="",Q="string";return}throw ve(A())},identifierNameStartEscape(){if(ie!=="u")throw ve(A());A();const e=uc();switch(e){case"$":case"_":break;default:if(!je.isIdStartChar(e))throw Wd();break}G+=e,Q="identifierName"},identifierName(){switch(ie){case"$":case"_":case"‌":case"‍":G+=A();return;case"\\":A(),Q="identifierNameEscape";return}if(je.isIdContinueChar(ie)){G+=A();return}return $e("identifier",G)},identifierNameEscape(){if(ie!=="u")throw ve(A());A();const e=uc();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!je.isIdContinueChar(e))throw Wd();break}G+=e,Q="identifierName"},sign(){switch(ie){case".":G=A(),Q="decimalPointLeading";return;case"0":G=A(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":G=A(),Q="decimalInteger";return;case"I":return A(),ui("nfinity"),$e("numeric",mr*(1/0));case"N":return A(),ui("aN"),$e("numeric",NaN)}throw ve(A())},zero(){switch(ie){case".":G+=A(),Q="decimalPoint";return;case"e":case"E":G+=A(),Q="decimalExponent";return;case"x":case"X":G+=A(),Q="hexadecimal";return}return $e("numeric",mr*0)},decimalInteger(){switch(ie){case".":G+=A(),Q="decimalPoint";return;case"e":case"E":G+=A(),Q="decimalExponent";return}if(je.isDigit(ie)){G+=A();return}return $e("numeric",mr*Number(G))},decimalPointLeading(){if(je.isDigit(ie)){G+=A(),Q="decimalFraction";return}throw ve(A())},decimalPoint(){switch(ie){case"e":case"E":G+=A(),Q="decimalExponent";return}if(je.isDigit(ie)){G+=A(),Q="decimalFraction";return}return $e("numeric",mr*Number(G))},decimalFraction(){switch(ie){case"e":case"E":G+=A(),Q="decimalExponent";return}if(je.isDigit(ie)){G+=A();return}return $e("numeric",mr*Number(G))},decimalExponent(){switch(ie){case"+":case"-":G+=A(),Q="decimalExponentSign";return}if(je.isDigit(ie)){G+=A(),Q="decimalExponentInteger";return}throw ve(A())},decimalExponentSign(){if(je.isDigit(ie)){G+=A(),Q="decimalExponentInteger";return}throw ve(A())},decimalExponentInteger(){if(je.isDigit(ie)){G+=A();return}return $e("numeric",mr*Number(G))},hexadecimal(){if(je.isHexDigit(ie)){G+=A(),Q="hexadecimalInteger";return}throw ve(A())},hexadecimalInteger(){if(je.isHexDigit(ie)){G+=A();return}return $e("numeric",mr*Number(G))},string(){switch(ie){case"\\":A(),G+=i2();return;case'"':if(os)return A(),$e("string",G);G+=A();return;case"'":if(!os)return A(),$e("string",G);G+=A();return;case`
`:case"\r":throw ve(A());case"\u2028":case"\u2029":u2(ie);break;case void 0:throw ve(A())}G+=A()},start(){switch(ie){case"{":case"[":return $e("punctuator",A())}Q="value"},beforePropertyName(){switch(ie){case"$":case"_":G=A(),Q="identifierName";return;case"\\":A(),Q="identifierNameStartEscape";return;case"}":return $e("punctuator",A());case'"':case"'":os=A()==='"',Q="string";return}if(je.isIdStartChar(ie)){G+=A(),Q="identifierName";return}throw ve(A())},afterPropertyName(){if(ie===":")return $e("punctuator",A());throw ve(A())},beforePropertyValue(){Q="value"},afterPropertyValue(){switch(ie){case",":case"}":return $e("punctuator",A())}throw ve(A())},beforeArrayValue(){if(ie==="]")return $e("punctuator",A());Q="value"},afterArrayValue(){switch(ie){case",":case"]":return $e("punctuator",A())}throw ve(A())},end(){throw ve(A())}};function $e(e,t){return{type:e,value:t,line:qr,column:Un}}function ui(e){for(const t of e){if(Cr()!==t)throw ve(A());A()}}function i2(){switch(Cr()){case"b":return A(),"\b";case"f":return A(),"\f";case"n":return A(),`
`;case"r":return A(),"\r";case"t":return A(),"	";case"v":return A(),"\v";case"0":if(A(),je.isDigit(Cr()))throw ve(A());return"\0";case"x":return A(),o2();case"u":return A(),uc();case`
`:case"\u2028":case"\u2029":return A(),"";case"\r":return A(),Cr()===`
`&&A(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw ve(A());case void 0:throw ve(A())}return A()}function o2(){let e="",t=Cr();if(!je.isHexDigit(t)||(e+=A(),t=Cr(),!je.isHexDigit(t)))throw ve(A());return e+=A(),String.fromCodePoint(parseInt(e,16))}function uc(){let e="",t=4;for(;t-- >0;){const n=Cr();if(!je.isHexDigit(n))throw ve(A());e+=A()}return String.fromCodePoint(parseInt(e,16))}const s2={start(){if(ot.type==="eof")throw ai();pl()},beforePropertyName(){switch(ot.type){case"identifier":case"string":ef=ot.value,Tt="afterPropertyName";return;case"punctuator":wu();return;case"eof":throw ai()}},afterPropertyName(){if(ot.type==="eof")throw ai();Tt="beforePropertyValue"},beforePropertyValue(){if(ot.type==="eof")throw ai();pl()},beforeArrayValue(){if(ot.type==="eof")throw ai();if(ot.type==="punctuator"&&ot.value==="]"){wu();return}pl()},afterPropertyValue(){if(ot.type==="eof")throw ai();switch(ot.value){case",":Tt="beforePropertyName";return;case"}":wu()}},afterArrayValue(){if(ot.type==="eof")throw ai();switch(ot.value){case",":Tt="beforeArrayValue";return;case"]":wu()}},end(){}};function pl(){let e;switch(ot.type){case"punctuator":switch(ot.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=ot.value;break}if(ds===void 0)ds=e;else{const t=yr[yr.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,ef,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")yr.push(e),Array.isArray(e)?Tt="beforeArrayValue":Tt="beforePropertyName";else{const t=yr[yr.length-1];t==null?Tt="end":Array.isArray(t)?Tt="afterArrayValue":Tt="afterPropertyValue"}}function wu(){yr.pop();const e=yr[yr.length-1];e==null?Tt="end":Array.isArray(e)?Tt="afterArrayValue":Tt="afterPropertyValue"}function ve(e){return Xu(e===void 0?`JSON5: invalid end of input at ${qr}:${Un}`:`JSON5: invalid character '${q0(e)}' at ${qr}:${Un}`)}function ai(){return Xu(`JSON5: invalid end of input at ${qr}:${Un}`)}function Wd(){return Un-=5,Xu(`JSON5: invalid identifier character at ${qr}:${Un}`)}function u2(e){console.warn(`JSON5: '${q0(e)}' in strings is not valid ECMAScript; consider escaping`)}function q0(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function Xu(e){const t=new SyntaxError(e);return t.lineNumber=qr,t.columnNumber=Un,t}var a2=function(t,n,r){const i=[];let o="",s,u,a="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")u=n;else if(Array.isArray(n)){s=[];for(const $ of n){let S;typeof $=="string"?S=$:(typeof $=="number"||$ instanceof String||$ instanceof Number)&&(S=String($)),S!==void 0&&s.indexOf(S)<0&&s.push(S)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),a="          ".substr(0,r)):typeof r=="string"&&(a=r.substr(0,10)),c("",{"":t});function c($,S){let x=S[$];switch(x!=null&&(typeof x.toJSON5=="function"?x=x.toJSON5($):typeof x.toJSON=="function"&&(x=x.toJSON($))),u&&(x=u.call(S,$,x)),x instanceof Number?x=Number(x):x instanceof String?x=String(x):x instanceof Boolean&&(x=x.valueOf()),x){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof x=="string")return f(x);if(typeof x=="number")return String(x);if(typeof x=="object")return Array.isArray(x)?C(x):d(x)}function f($){const S={"'":.1,'"':.2},x={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let I="";for(let W=0;W<$.length;W++){const Z=$[W];switch(Z){case"'":case'"':S[Z]++,I+=Z;continue;case"\0":if(je.isDigit($[W+1])){I+="\\x00";continue}}if(x[Z]){I+=x[Z];continue}if(Z<" "){let Be=Z.charCodeAt(0).toString(16);I+="\\x"+("00"+Be).substring(Be.length);continue}I+=Z}const j=l||Object.keys(S).reduce((W,Z)=>S[W]<S[Z]?W:Z);return I=I.replace(new RegExp(j,"g"),x[j]),j+I+j}function d($){if(i.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");i.push($);let S=o;o=o+a;let x=s||Object.keys($),I=[];for(const W of x){const Z=c(W,$);if(Z!==void 0){let Be=g(W)+":";a!==""&&(Be+=" "),Be+=Z,I.push(Be)}}let j;if(I.length===0)j="{}";else{let W;if(a==="")W=I.join(","),j="{"+W+"}";else{let Z=`,
`+o;W=I.join(Z),j=`{
`+o+W+`,
`+S+"}"}}return i.pop(),o=S,j}function g($){if($.length===0)return f($);const S=String.fromCodePoint($.codePointAt(0));if(!je.isIdStartChar(S))return f($);for(let x=S.length;x<$.length;x++)if(!je.isIdContinueChar(String.fromCodePoint($.codePointAt(x))))return f($);return $}function C($){if(i.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");i.push($);let S=o;o=o+a;let x=[];for(let j=0;j<$.length;j++){const W=c(String(j),$);x.push(W!==void 0?W:"null")}let I;if(x.length===0)I="[]";else if(a==="")I="["+x.join(",")+"]";else{let j=`,
`+o,W=x.join(j);I=`[
`+o+W+`,
`+S+"]"}return i.pop(),o=S,I}};const l2={parse:n2,stringify:a2};var c2=l2;const z0="__@@augment-vir-undefined-sentinel@@__",f2=new RegExp(`['"]${z0}['"]`);function h(e,t){if(typeof e=="string")return e;try{return c2.stringify(e,(r,i)=>i===void 0?z0:typeof i=="bigint"?Number(i):i,t||void 0).split(f2).join("undefined")}catch{return String(e)}}var d2=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var _n;(function(e){e.Node="node",e.Web="web"})(_n||(_n={}));function m2(){return d2?_n.Node:_n.Web}const K0=m2();function tf(e){return K0===e}function Z0(e){return e[K0]()}function h2(e,t){const n=typeof t=="string"&&typeof e=="string",r=typeof t!="string"||typeof e!="string",i=r?Hw:zw,o=[n?"":`
`,h(t,4),`
`].join(""),s=[n?"":`
`,h(e,4),`
`].join(""),u=p2(r,i(o,s)),a=tf(_n.Node);return[[a?vr.Green:""," +added",a?vr.Red:""," -missing",a?vr.Reset:""].join(""),n?`

`:`
`,u].join("")}var vr;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(vr||(vr={}));var Qu;(function(e){e.Added="+",e.Removed="-"})(Qu||(Qu={}));function p2(e,t){return e?t.flatMap(r=>r.value.split(`
`).map(i=>qd(i,r)).join(`
`)).join(""):t.map(r=>qd(void 0,r)).join("")}function qd(e,t){if(e!=null&&!e)return"";const n=tf(_n.Node),r=t.added?Qu.Added:t.removed?Qu.Removed:e==null?"":" ",i=t.added?vr.Green:t.removed?vr.Red:vr.Reset;return[n?i:"",r,e??t.value,vr.Reset].join("")}function Fe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function g2(e){return Fe(e).filter(t=>isNaN(Number(t)))}function Bn(e){return g2(e).map(n=>e[n])}const y2=[".",":",";",",","?","!"],w2=new RegExp(`[${y2.join("")}]+$`);function zd(e){return e.replace(w2,"")}function Yt(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function Ca(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&zd(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:zd(r)).join(": "):""}function Et(e){return e instanceof Error?e:new Error(Yt(e))}function nf(e,t){const n=Et(e),r=Ca(t,n.message);try{return n.message=r,n}catch{return new Error(r,{cause:e})}}var v;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(v||(v={}));var R;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(R||(R={}));R.ClientError,R.ServerError;v.Continue+"",R.Information,v.SwitchingProtocols+"",R.Information,v.Processing+"",R.Information,v.EarlyHints+"",R.Information,v.Ok+"",R.Success,v.Created+"",R.Success,v.Accepted+"",R.Success,v.NonAuthoritativeInformation+"",R.Success,v.NoContent+"",R.Success,v.ResetContent+"",R.Success,v.PartialContent+"",R.Success,v.MultiStatus+"",R.Success,v.AlreadyReported+"",R.Success,v.ImUsed+"",R.Success,v.MultipleChoices+"",R.Redirect,v.MovedPermanently+"",R.Redirect,v.Found+"",R.Redirect,v.SeeOther+"",R.Redirect,v.NotModified+"",R.Redirect,v.UseProxy+"",R.Redirect,v.Unused+"",R.Redirect,v.TemporaryRedirect+"",R.Redirect,v.PermanentRedirect+"",R.Redirect,v.BadRequest+"",R.ClientError,v.Unauthorized+"",R.ClientError,v.PaymentRequired+"",R.ClientError,v.Forbidden+"",R.ClientError,v.NotFound+"",R.ClientError,v.MethodNotAllowed+"",R.ClientError,v.NotAcceptable+"",R.ClientError,v.ProxyAuthenticationRequired+"",R.ClientError,v.RequestTimeout+"",R.ClientError,v.Conflict+"",R.ClientError,v.Gone+"",R.ClientError,v.LengthRequired+"",R.ClientError,v.PreconditionFailed+"",R.ClientError,v.PayloadTooLarge+"",R.ClientError,v.UriTooLong+"",R.ClientError,v.UnsupportedMediaType+"",R.ClientError,v.RangeNotSatisfiable+"",R.ClientError,v.ExpectationFailed+"",R.ClientError,v.ImATeapot+"",R.ClientError,v.MisdirectedRequest+"",R.ClientError,v.UnprocessableContent+"",R.ClientError,v.Locked+"",R.ClientError,v.FailedDependency+"",R.ClientError,v.TooEarly+"",R.ClientError,v.UpgradeRequired+"",R.ClientError,v.PreconditionRequired+"",R.ClientError,v.TooManyRequests+"",R.ClientError,v.RequestHeaderFieldsTooLarge+"",R.ClientError,v.UnavailableForLegalReasons+"",R.ClientError,v.InternalServerError+"",R.ServerError,v.NotImplemented+"",R.ServerError,v.BadGateway+"",R.ServerError,v.ServiceUnavailable+"",R.ServerError,v.GatewayTimeout+"",R.ServerError,v.HttpVersionNotSupported+"",R.ServerError,v.VariantAlsoNegotiates+"",R.ServerError,v.InsufficientStorage+"",R.ServerError,v.LoopDetected+"",R.ServerError,v.NotExtended+"",R.ServerError,v.NetworkAuthenticationRequired+"",R.ServerError;const ju={[R.Information]:[v.Continue,v.SwitchingProtocols,v.Processing,v.EarlyHints],[R.Success]:[v.Ok,v.Created,v.Accepted,v.NonAuthoritativeInformation,v.NoContent,v.ResetContent,v.PartialContent,v.MultiStatus,v.AlreadyReported,v.ImUsed],[R.Redirect]:[v.MultipleChoices,v.MovedPermanently,v.Found,v.SeeOther,v.NotModified,v.UseProxy,v.Unused,v.TemporaryRedirect,v.PermanentRedirect],[R.ClientError]:[v.BadRequest,v.Unauthorized,v.PaymentRequired,v.Forbidden,v.NotFound,v.MethodNotAllowed,v.NotAcceptable,v.ProxyAuthenticationRequired,v.RequestTimeout,v.Conflict,v.Gone,v.LengthRequired,v.PreconditionFailed,v.PayloadTooLarge,v.UriTooLong,v.UnsupportedMediaType,v.RangeNotSatisfiable,v.ExpectationFailed,v.ImATeapot,v.MisdirectedRequest,v.UnprocessableContent,v.Locked,v.FailedDependency,v.TooEarly,v.UpgradeRequired,v.PreconditionRequired,v.TooManyRequests,v.RequestHeaderFieldsTooLarge,v.UnavailableForLegalReasons],[R.ServerError]:[v.InternalServerError,v.NotImplemented,v.BadGateway,v.ServiceUnavailable,v.GatewayTimeout,v.HttpVersionNotSupported,v.VariantAlsoNegotiates,v.InsufficientStorage,v.LoopDetected,v.NotExtended,v.NetworkAuthenticationRequired]};function G0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Y0{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Et(r))}})}}class ki extends Error{}class b2 extends ki{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class $2 extends ki{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class v2 extends ki{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Xi extends ki{}class J0 extends ki{constructor(t){super(`Invalid unit ${t}`)}}class $t extends ki{}class Mr extends ki{constructor(){super("Zone is an abstract class")}}const O="numeric",Vn="short",sn="long",ea={year:O,month:O,day:O},H0={year:O,month:Vn,day:O},D2={year:O,month:Vn,day:O,weekday:Vn},X0={year:O,month:sn,day:O},Q0={year:O,month:sn,day:O,weekday:sn},ep={hour:O,minute:O},tp={hour:O,minute:O,second:O},np={hour:O,minute:O,second:O,timeZoneName:Vn},rp={hour:O,minute:O,second:O,timeZoneName:sn},ip={hour:O,minute:O,hourCycle:"h23"},op={hour:O,minute:O,second:O,hourCycle:"h23"},sp={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:Vn},up={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:sn},ap={year:O,month:O,day:O,hour:O,minute:O},lp={year:O,month:O,day:O,hour:O,minute:O,second:O},cp={year:O,month:Vn,day:O,hour:O,minute:O},fp={year:O,month:Vn,day:O,hour:O,minute:O,second:O},E2={year:O,month:Vn,day:O,weekday:Vn,hour:O,minute:O},dp={year:O,month:sn,day:O,hour:O,minute:O,timeZoneName:Vn},mp={year:O,month:sn,day:O,hour:O,minute:O,second:O,timeZoneName:Vn},hp={year:O,month:sn,day:O,weekday:sn,hour:O,minute:O,timeZoneName:sn},pp={year:O,month:sn,day:O,weekday:sn,hour:O,minute:O,second:O,timeZoneName:sn};class Ws{get type(){throw new Mr}get name(){throw new Mr}get ianaName(){return this.name}get isUniversal(){throw new Mr}offsetName(t,n){throw new Mr}formatOffset(t,n){throw new Mr}offset(t){throw new Mr}equals(t){throw new Mr}get isValid(){throw new Mr}}let gl=null;class xa extends Ws{static get instance(){return gl===null&&(gl=new xa),gl}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Ap(t,n,r)}formatOffset(t,n){return ms(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const ac=new Map;function C2(e){let t=ac.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),ac.set(e,t)),t}const x2={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function A2(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,o,s,u,a,l,c]=r;return[s,i,o,u,a,l,c]}function F2(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:o,value:s}=n[i],u=x2[o];o==="era"?r[u]=s:z(u)||(r[u]=parseInt(s,10))}return r}const yl=new Map;class Ar extends Ws{static create(t){let n=yl.get(t);return n===void 0&&yl.set(t,n=new Ar(t)),n}static resetCache(){yl.clear(),ac.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Ar.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Ap(t,n,r,this.name)}formatOffset(t,n){return ms(this.offset(t),n)}offset(t){if(!this.valid)return NaN;const n=new Date(t);if(isNaN(n))return NaN;const r=C2(this.name);let[i,o,s,u,a,l,c]=r.formatToParts?F2(r,n):A2(r,n);u==="BC"&&(i=-Math.abs(i)+1);const d=Fa({year:i,month:o,day:s,hour:a===24?0:a,minute:l,second:c,millisecond:0});let g=+n;const C=g%1e3;return g-=C>=0?C:1e3+C,(d-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Kd={};function k2(e,t={}){const n=JSON.stringify([e,t]);let r=Kd[n];return r||(r=new Intl.ListFormat(e,t),Kd[n]=r),r}const lc=new Map;function cc(e,t={}){const n=JSON.stringify([e,t]);let r=lc.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),lc.set(n,r)),r}const fc=new Map;function S2(e,t={}){const n=JSON.stringify([e,t]);let r=fc.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),fc.set(n,r)),r}const dc=new Map;function I2(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let o=dc.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),dc.set(i,o)),o}let ss=null;function N2(){return ss||(ss=new Intl.DateTimeFormat().resolvedOptions().locale,ss)}const mc=new Map;function gp(e){let t=mc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),mc.set(e,t)),t}const hc=new Map;function T2(e){let t=hc.get(e);if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in t||(t={...yp,...t}),hc.set(e,t)}return t}function M2(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=cc(e).resolvedOptions(),i=e}catch{const a=e.substring(0,n);r=cc(a).resolvedOptions(),i=a}const{numberingSystem:o,calendar:s}=r;return[i,o,s]}}function P2(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function O2(e){const t=[];for(let n=1;n<=12;n++){const r=K.utc(2009,n,1);t.push(e(r))}return t}function B2(e){const t=[];for(let n=1;n<=7;n++){const r=K.utc(2016,11,13+n);t.push(e(r))}return t}function bu(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function R2(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||gp(e.locale).numberingSystem==="latn"}class L2{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:o,...s}=r;if(!n||Object.keys(s).length>0){const u={useGrouping:!1,...r};r.padTo>0&&(u.minimumIntegerDigits=r.padTo),this.inf=S2(t,u)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):af(t,3);return qe(n,this.padTo)}}}class j2{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),u=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Ar.create(u).valid?(i=u,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=cc(n,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class U2{constructor(t,n,r){this.opts={style:"long",...r},!n&&Cp()&&(this.rtf=I2(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):ab(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const yp={firstDay:1,minimalDays:4,weekend:[6,7]};class de{static fromOpts(t){return de.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,o=!1){const s=t||Oe.defaultLocale,u=s||(o?"en-US":N2()),a=n||Oe.defaultNumberingSystem,l=r||Oe.defaultOutputCalendar,c=gc(i)||Oe.defaultWeekSettings;return new de(u,a,l,c,s)}static resetCache(){ss=null,lc.clear(),fc.clear(),dc.clear(),mc.clear(),hc.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return de.create(t,n,r,i)}constructor(t,n,r,i,o){const[s,u,a]=M2(t);this.locale=s,this.numberingSystem=n||u||null,this.outputCalendar=r||a||null,this.weekSettings=i,this.intl=P2(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=R2(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:de.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,gc(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return bu(this,t,Sp,()=>{const r=this.intl==="ja"||this.intl.startsWith("ja-");n&=!r;const i=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";if(!this.monthsCache[o][t]){const s=r?u=>this.dtFormatter(u,i).format():u=>this.extract(u,i,"month");this.monthsCache[o][t]=O2(s)}return this.monthsCache[o][t]})}weekdays(t,n=!1){return bu(this,t,Tp,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=B2(o=>this.extract(o,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return bu(this,void 0,()=>Mp,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[K.utc(2016,11,13,9),K.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return bu(this,t,Pp,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[K.utc(-40,1,1),K.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),o=i.formatToParts(),s=o.find(u=>u.type.toLowerCase()===r);return s?s.value:null}numberFormatter(t={}){return new L2(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new j2(t,this.intl,n)}relFormatter(t={}){return new U2(this.intl,this.isEnglish(),t)}listFormatter(t={}){return k2(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||gp(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:xp()?T2(this.locale):yp}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let wl=null;class Mt extends Ws{static get utcInstance(){return wl===null&&(wl=new Mt(0)),wl}static instance(t){return t===0?Mt.utcInstance:new Mt(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Mt(ka(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ms(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ms(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return ms(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class _2 extends Ws{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function jr(e,t){if(z(e)||e===null)return t;if(e instanceof Ws)return e;if(Z2(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?xa.instance:n==="utc"||n==="gmt"?Mt.utcInstance:Mt.parseSpecifier(n)||Ar.create(e)}else return Vr(e)?Mt.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new _2(e)}const rf={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Zd={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},V2=rf.hanidec.replace(/[\[|\]]/g,"").split("");function W2(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(rf.hanidec)!==-1)t+=V2.indexOf(e[n]);else for(const i in Zd){const[o,s]=Zd[i];r>=o&&r<=s&&(t+=r-o)}}return parseInt(t,10)}else return t}const pc=new Map;function q2(){pc.clear()}function Mn({numberingSystem:e},t=""){const n=e||"latn";let r=pc.get(n);r===void 0&&(r=new Map,pc.set(n,r));let i=r.get(t);return i===void 0&&(i=new RegExp(`${rf[n]}${t}`),r.set(t,i)),i}let Gd=()=>Date.now(),Yd="system",Jd=null,Hd=null,Xd=null,Qd=60,em,tm=null;class Oe{static get now(){return Gd}static set now(t){Gd=t}static set defaultZone(t){Yd=t}static get defaultZone(){return jr(Yd,xa.instance)}static get defaultLocale(){return Jd}static set defaultLocale(t){Jd=t}static get defaultNumberingSystem(){return Hd}static set defaultNumberingSystem(t){Hd=t}static get defaultOutputCalendar(){return Xd}static set defaultOutputCalendar(t){Xd=t}static get defaultWeekSettings(){return tm}static set defaultWeekSettings(t){tm=gc(t)}static get twoDigitCutoffYear(){return Qd}static set twoDigitCutoffYear(t){Qd=t%100}static get throwOnInvalid(){return em}static set throwOnInvalid(t){em=t}static resetCaches(){de.resetCache(),Ar.resetCache(),K.resetCache(),q2()}}class Ln{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const wp=[0,31,59,90,120,151,181,212,243,273,304,334],bp=[0,31,60,91,121,152,182,213,244,274,305,335];function En(e,t){return new Ln("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function of(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function $p(e,t,n){return n+(qs(e)?bp:wp)[t-1]}function vp(e,t){const n=qs(e)?bp:wp,r=n.findIndex(o=>o<t),i=t-n[r];return{month:r+1,day:i}}function sf(e,t){return(e-t+7)%7+1}function ta(e,t=4,n=1){const{year:r,month:i,day:o}=e,s=$p(r,i,o),u=sf(of(r,i,o),n);let a=Math.floor((s-u+14-t)/7),l;return a<1?(l=r-1,a=Ds(l,t,n)):a>Ds(r,t,n)?(l=r+1,a=1):l=r,{weekYear:l,weekNumber:a,weekday:u,...Sa(e)}}function nm(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:o}=e,s=sf(of(r,1,t),n),u=no(r);let a=i*7+o-s-7+t,l;a<1?(l=r-1,a+=no(l)):a>u?(l=r+1,a-=no(r)):l=r;const{month:c,day:f}=vp(l,a);return{year:l,month:c,day:f,...Sa(e)}}function bl(e){const{year:t,month:n,day:r}=e,i=$p(t,n,r);return{year:t,ordinal:i,...Sa(e)}}function rm(e){const{year:t,ordinal:n}=e,{month:r,day:i}=vp(t,n);return{year:t,month:r,day:i,...Sa(e)}}function im(e,t){if(!z(e.localWeekday)||!z(e.localWeekNumber)||!z(e.localWeekYear)){if(!z(e.weekday)||!z(e.weekNumber)||!z(e.weekYear))throw new Xi("Cannot mix locale-based week fields with ISO-based week fields");return z(e.localWeekday)||(e.weekday=e.localWeekday),z(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),z(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function z2(e,t=4,n=1){const r=Aa(e.weekYear),i=Cn(e.weekNumber,1,Ds(e.weekYear,t,n)),o=Cn(e.weekday,1,7);return r?i?o?!1:En("weekday",e.weekday):En("week",e.weekNumber):En("weekYear",e.weekYear)}function K2(e){const t=Aa(e.year),n=Cn(e.ordinal,1,no(e.year));return t?n?!1:En("ordinal",e.ordinal):En("year",e.year)}function Dp(e){const t=Aa(e.year),n=Cn(e.month,1,12),r=Cn(e.day,1,na(e.year,e.month));return t?n?r?!1:En("day",e.day):En("month",e.month):En("year",e.year)}function Ep(e){const{hour:t,minute:n,second:r,millisecond:i}=e,o=Cn(t,0,23)||t===24&&n===0&&r===0&&i===0,s=Cn(n,0,59),u=Cn(r,0,59),a=Cn(i,0,999);return o?s?u?a?!1:En("millisecond",i):En("second",r):En("minute",n):En("hour",t)}function z(e){return typeof e>"u"}function Vr(e){return typeof e=="number"}function Aa(e){return typeof e=="number"&&e%1===0}function Z2(e){return typeof e=="string"}function G2(e){return Object.prototype.toString.call(e)==="[object Date]"}function Cp(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function xp(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Y2(e){return Array.isArray(e)?e:[e]}function om(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const o=[t(i),i];return r&&n(r[0],o[0])===r[0]?r:o},null)[1]}function J2(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function co(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function gc(e){if(e==null)return null;if(typeof e!="object")throw new $t("Week settings must be an object");if(!Cn(e.firstDay,1,7)||!Cn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Cn(t,1,7)))throw new $t("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Cn(e,t,n){return Aa(e)&&e>=t&&e<=n}function H2(e,t){return e-t*Math.floor(e/t)}function qe(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function Br(e){if(!(z(e)||e===null||e===""))return parseInt(e,10)}function li(e){if(!(z(e)||e===null||e===""))return parseFloat(e)}function uf(e){if(!(z(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function af(e,t,n="round"){const r=10**t;switch(n){case"expand":return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case"trunc":return Math.trunc(e*r)/r;case"round":return Math.round(e*r)/r;case"floor":return Math.floor(e*r)/r;case"ceil":return Math.ceil(e*r)/r;default:throw new RangeError(`Value rounding ${n} is out of range`)}}function qs(e){return e%4===0&&(e%100!==0||e%400===0)}function no(e){return qs(e)?366:365}function na(e,t){const n=H2(t-1,12)+1,r=e+(t-n)/12;return n===2?qs(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Fa(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function sm(e,t,n){return-sf(of(e,1,t),n)+t-1}function Ds(e,t=4,n=1){const r=sm(e,t,n),i=sm(e+1,t,n);return(no(e)-r+i)/7}function yc(e){return e>99?e:e>Oe.twoDigitCutoffYear?1900+e:2e3+e}function Ap(e,t,n,r=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);const s={timeZoneName:t,...o},u=new Intl.DateTimeFormat(n,s).formatToParts(i).find(a=>a.type.toLowerCase()==="timezonename");return u?u.value:null}function ka(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function Fp(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new $t(`Invalid unit value ${e}`);return t}function ra(e,t){const n={};for(const r in e)if(co(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=Fp(i)}return n}function ms(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${qe(n,2)}:${qe(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${qe(n,2)}${qe(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Sa(e){return J2(e,["hour","minute","second","millisecond"])}const X2=["January","February","March","April","May","June","July","August","September","October","November","December"],kp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Q2=["J","F","M","A","M","J","J","A","S","O","N","D"];function Sp(e){switch(e){case"narrow":return[...Q2];case"short":return[...kp];case"long":return[...X2];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Ip=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Np=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],eb=["M","T","W","T","F","S","S"];function Tp(e){switch(e){case"narrow":return[...eb];case"short":return[...Np];case"long":return[...Ip];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Mp=["AM","PM"],tb=["Before Christ","Anno Domini"],nb=["BC","AD"],rb=["B","A"];function Pp(e){switch(e){case"narrow":return[...rb];case"short":return[...nb];case"long":return[...tb];default:return null}}function ib(e){return Mp[e.hour<12?0:1]}function ob(e,t){return Tp(t)[e.weekday-1]}function sb(e,t){return Sp(t)[e.month-1]}function ub(e,t){return Pp(t)[e.year<0?0:1]}function ab(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,u=Math.abs(t),a=u===1,l=i[e],c=r?a?l[1]:l[2]||l[1]:a?i[e][0]:e;return s?`${u} ${c} ago`:`in ${u} ${c}`}function um(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const lb={D:ea,DD:H0,DDD:X0,DDDD:Q0,t:ep,tt:tp,ttt:np,tttt:rp,T:ip,TT:op,TTT:sp,TTTT:up,f:ap,ff:cp,fff:dp,ffff:hp,F:lp,FF:fp,FFF:mp,FFFF:pp};class Dt{static create(t,n={}){return new Dt(t,n)}static parseFormat(t){let n=null,r="",i=!1;const o=[];for(let s=0;s<t.length;s++){const u=t.charAt(s);u==="'"?((r.length>0||i)&&o.push({literal:i||/^\s+$/.test(r),val:r===""?"'":r}),n=null,r="",i=!i):i||u===n?r+=u:(r.length>0&&o.push({literal:/^\s+$/.test(r),val:r}),r=u,n=u)}return r.length>0&&o.push({literal:i||/^\s+$/.test(r),val:r}),o}static macroTokenToFormatOpts(t){return lb[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0,r=void 0){if(this.opts.forceSimple)return qe(t,n);const i={...this.opts};return n>0&&(i.padTo=n),r&&(i.signDisplay=r),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(g,C)=>this.loc.extract(t,g,C),s=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",u=()=>r?ib(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),a=(g,C)=>r?sb(t,g):o(C?{month:g}:{month:g,day:"numeric"},"month"),l=(g,C)=>r?ob(t,g):o(C?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),c=g=>{const C=Dt.macroTokenToFormatOpts(g);return C?this.formatWithSystemDefault(t,C):g},f=g=>r?ub(t,g):o({era:g},"era"),d=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return u();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return a("short",!0);case"LLLL":return a("long",!0);case"LLLLL":return a("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return a("short",!1);case"MMMM":return a("long",!1);case"MMMMM":return a("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(g)}};return um(Dt.parseFormat(n),d)}formatDurationFromString(t,n){const r=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,f)=>d=>{const g=i(d);if(g){const C=f.isNegativeDuration&&g!==f.largestUnit?r:1;let $;return this.opts.signMode==="negativeLargestOnly"&&g!==f.largestUnit?$="never":this.opts.signMode==="all"?$="always":$="auto",this.num(c.get(g)*C,d.length,$)}else return d},s=Dt.parseFormat(n),u=s.reduce((c,{literal:f,val:d})=>f?c:c.concat(d),[]),a=t.shiftTo(...u.map(i).filter(c=>c)),l={isNegativeDuration:a<0,largestUnit:Object.keys(a.values)[0]};return um(s,o(a,l))}}const Op=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Io(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function No(...e){return t=>e.reduce(([n,r,i],o)=>{const[s,u,a]=o(t,i);return[{...n,...s},u||r,a]},[{},null,1]).slice(0,2)}function To(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function Bp(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=Br(t[n+i]);return[r,null,n+i]}}const Rp=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,cb=`(?:${Rp.source}?(?:\\[(${Op.source})\\])?)?`,lf=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Lp=RegExp(`${lf.source}${cb}`),cf=RegExp(`(?:[Tt]${Lp.source})?`),fb=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,db=/(\d{4})-?W(\d\d)(?:-?(\d))?/,mb=/(\d{4})-?(\d{3})/,hb=Bp("weekYear","weekNumber","weekDay"),pb=Bp("year","ordinal"),gb=/(\d{4})-(\d\d)-(\d\d)/,jp=RegExp(`${lf.source} ?(?:${Rp.source}|(${Op.source}))?`),yb=RegExp(`(?: ${jp.source})?`);function ro(e,t,n){const r=e[t];return z(r)?n:Br(r)}function wb(e,t){return[{year:ro(e,t),month:ro(e,t+1,1),day:ro(e,t+2,1)},null,t+3]}function Mo(e,t){return[{hours:ro(e,t,0),minutes:ro(e,t+1,0),seconds:ro(e,t+2,0),milliseconds:uf(e[t+3])},null,t+4]}function zs(e,t){const n=!e[t]&&!e[t+1],r=ka(e[t+1],e[t+2]),i=n?null:Mt.instance(r);return[{},i,t+3]}function Ks(e,t){const n=e[t]?Ar.create(e[t]):null;return[{},n,t+1]}const bb=RegExp(`^T?${lf.source}$`),$b=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function vb(e){const[t,n,r,i,o,s,u,a,l]=e,c=t[0]==="-",f=a&&a[0]==="-",d=(g,C=!1)=>g!==void 0&&(C||g&&c)?-g:g;return[{years:d(li(n)),months:d(li(r)),weeks:d(li(i)),days:d(li(o)),hours:d(li(s)),minutes:d(li(u)),seconds:d(li(a),a==="-0"),milliseconds:d(uf(l),f)}]}const Db={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ff(e,t,n,r,i,o,s){const u={year:t.length===2?yc(Br(t)):Br(t),month:kp.indexOf(n)+1,day:Br(r),hour:Br(i),minute:Br(o)};return s&&(u.second=Br(s)),e&&(u.weekday=e.length>3?Ip.indexOf(e)+1:Np.indexOf(e)+1),u}const Eb=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Cb(e){const[,t,n,r,i,o,s,u,a,l,c,f]=e,d=ff(t,i,r,n,o,s,u);let g;return a?g=Db[a]:l?g=0:g=ka(c,f),[d,new Mt(g)]}function xb(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Ab=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Fb=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,kb=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function am(e){const[,t,n,r,i,o,s,u]=e;return[ff(t,i,r,n,o,s,u),Mt.utcInstance]}function Sb(e){const[,t,n,r,i,o,s,u]=e;return[ff(t,u,n,r,i,o,s),Mt.utcInstance]}const Ib=Io(fb,cf),Nb=Io(db,cf),Tb=Io(mb,cf),Mb=Io(Lp),Up=No(wb,Mo,zs,Ks),Pb=No(hb,Mo,zs,Ks),Ob=No(pb,Mo,zs,Ks),Bb=No(Mo,zs,Ks);function Rb(e){return To(e,[Ib,Up],[Nb,Pb],[Tb,Ob],[Mb,Bb])}function Lb(e){return To(xb(e),[Eb,Cb])}function jb(e){return To(e,[Ab,am],[Fb,am],[kb,Sb])}function Ub(e){return To(e,[$b,vb])}const _b=No(Mo);function Vb(e){return To(e,[bb,_b])}const Wb=Io(gb,yb),qb=Io(jp),zb=No(Mo,zs,Ks);function Kb(e){return To(e,[Wb,Up],[qb,zb])}const lm="Invalid Duration",_p={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Zb={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},..._p},bn=146097/400,Vi=146097/4800,Gb={years:{quarters:4,months:12,weeks:bn/7,days:bn,hours:bn*24,minutes:bn*24*60,seconds:bn*24*60*60,milliseconds:bn*24*60*60*1e3},quarters:{months:3,weeks:bn/28,days:bn/4,hours:bn*24/4,minutes:bn*24*60/4,seconds:bn*24*60*60/4,milliseconds:bn*24*60*60*1e3/4},months:{weeks:Vi/7,days:Vi,hours:Vi*24,minutes:Vi*24*60,seconds:Vi*24*60*60,milliseconds:Vi*24*60*60*1e3},..._p},yi=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Yb=yi.slice(0).reverse();function cr(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new oe(r)}function Vp(e,t){let n=t.milliseconds??0;for(const r of Yb.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function cm(e,t){const n=Vp(e,t)<0?-1:1;yi.reduceRight((r,i)=>{if(z(t[i]))return r;if(r){const o=t[r]*n,s=e[i][r],u=Math.floor(o/s);t[i]+=u*n,t[r]-=u*s*n}return i},null),yi.reduce((r,i)=>{if(z(t[i]))return r;if(r){const o=t[r]%1;t[r]-=o,t[i]+=o*e[r][i]}return i},null)}function fm(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class oe{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?Gb:Zb;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||de.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return oe.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new $t(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new oe({values:ra(t,oe.normalizeUnit),loc:de.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Vr(t))return oe.fromMillis(t);if(oe.isDuration(t))return t;if(typeof t=="object")return oe.fromObject(t);throw new $t(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=Ub(t);return r?oe.fromObject(r,n):oe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=Vb(t);return r?oe.fromObject(r,n):oe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new $t("need to specify a reason the Duration is invalid");const r=t instanceof Ln?t:new Ln(t,n);if(Oe.throwOnInvalid)throw new v2(r);return new oe({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new J0(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Dt.create(this.loc,r).formatDurationFromString(this,t):lm}toHuman(t={}){if(!this.isValid)return lm;const n=t.showZeros!==!1,r=yi.map(i=>{const o=this.values[i];return z(o)||o===0&&!n?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=af(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},K.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Vp(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=oe.fromDurationLike(t),r={};for(const i of yi)(co(n.values,i)||co(this.values,i))&&(r[i]=n.get(i)+this.get(i));return cr(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=oe.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=Fp(t(this.values[r],r));return cr(this,{values:n},!0)}get(t){return this[oe.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...ra(t,oe.normalizeUnit)};return cr(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return cr(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return cm(this.matrix,t),cr(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=fm(this.normalize().shiftToAll().toObject());return cr(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>oe.normalizeUnit(s));const n={},r={},i=this.toObject();let o;for(const s of yi)if(t.indexOf(s)>=0){o=s;let u=0;for(const l in r)u+=this.matrix[l][s]*r[l],r[l]=0;Vr(i[s])&&(u+=i[s]);const a=Math.trunc(u);n[s]=a,r[s]=(u*1e3-a*1e3)/1e3}else Vr(i[s])&&(r[s]=i[s]);for(const s in r)r[s]!==0&&(n[o]+=s===o?r[s]:r[s]/this.matrix[o][s]);return cm(this.matrix,n),cr(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return cr(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=fm(this.values);return cr(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of yi)if(!n(this.values[r],t.values[r]))return!1;return!0}}const Wi="Invalid Interval";function Jb(e,t){return!e||!e.isValid?Me.invalid("missing or invalid start"):!t||!t.isValid?Me.invalid("missing or invalid end"):t<e?Me.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Me{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new $t("need to specify a reason the Interval is invalid");const r=t instanceof Ln?t:new Ln(t,n);if(Oe.throwOnInvalid)throw new $2(r);return new Me({invalid:r})}static fromDateTimes(t,n){const r=Jo(t),i=Jo(n),o=Jb(r,i);return o??new Me({start:r,end:i})}static after(t,n){const r=oe.fromDurationLike(n),i=Jo(t);return Me.fromDateTimes(i,i.plus(r))}static before(t,n){const r=oe.fromDurationLike(n),i=Jo(t);return Me.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let o,s;try{o=K.fromISO(r,n),s=o.isValid}catch{s=!1}let u,a;try{u=K.fromISO(i,n),a=u.isValid}catch{a=!1}if(s&&a)return Me.fromDateTimes(o,u);if(s){const l=oe.fromISO(i,n);if(l.isValid)return Me.after(o,l)}else if(a){const l=oe.fromISO(r,n);if(l.isValid)return Me.before(u,l)}}return Me.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?Me.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(Jo).filter(s=>this.contains(s)).sort((s,u)=>s.toMillis()-u.toMillis()),r=[];let{s:i}=this,o=0;for(;i<this.e;){const s=n[o]||this.e,u=+s>+this.e?this.e:s;r.push(Me.fromDateTimes(i,u)),i=u,o+=1}return r}splitBy(t){const n=oe.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,o;const s=[];for(;r<this.e;){const u=this.start.plus(n.mapUnits(a=>a*i));o=+u>+this.e?this.e:u,s.push(Me.fromDateTimes(r,o)),r=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:Me.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return Me.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],o=t.map(a=>[{time:a.s,type:"s"},{time:a.e,type:"e"}]),s=Array.prototype.concat(...o),u=s.sort((a,l)=>a.time-l.time);for(const a of u)r+=a.type==="s"?1:-1,r===1?n=a.time:(n&&+n!=+a.time&&i.push(Me.fromDateTimes(n,a.time)),n=null);return Me.merge(i)}difference(...t){return Me.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Wi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=ea,n={}){return this.isValid?Dt.create(this.s.loc.clone(n),t).formatInterval(this):Wi}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Wi}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Wi}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Wi}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:Wi}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):oe.invalid(this.invalidReason)}mapEndpoints(t){return Me.fromDateTimes(t(this.s),t(this.e))}}class $u{static hasDST(t=Oe.defaultZone){const n=K.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Ar.isValidZone(t)}static normalizeZone(t){return jr(t,Oe.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||de.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||de.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||de.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||de.create(n,r,o)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||de.create(n,r,o)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||de.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||de.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return de.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return de.create(n,null,"gregory").eras(t)}static features(){return{relative:Cp(),localeWeek:xp()}}}function dm(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(oe.fromMillis(r).as("days"))}function Hb(e,t,n){const r=[["years",(a,l)=>l.year-a.year],["quarters",(a,l)=>l.quarter-a.quarter+(l.year-a.year)*4],["months",(a,l)=>l.month-a.month+(l.year-a.year)*12],["weeks",(a,l)=>{const c=dm(a,l);return(c-c%7)/7}],["days",dm]],i={},o=e;let s,u;for(const[a,l]of r)n.indexOf(a)>=0&&(s=a,i[a]=l(e,t),u=o.plus(i),u>t?(i[a]--,e=o.plus(i),e>t&&(u=e,i[a]--,e=o.plus(i))):e=u);return[e,i,u,s]}function Xb(e,t,n,r){let[i,o,s,u]=Hb(e,t,n);const a=t-i,l=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(s<t&&(s=i.plus({[u]:1})),s!==i&&(o[u]=(o[u]||0)+a/(s-i)));const c=oe.fromObject(o,r);return l.length>0?oe.fromMillis(a,r).shiftTo(...l).plus(c):c}const Qb="missing Intl.DateTimeFormat.formatToParts support";function le(e,t=n=>n){return{regex:e,deser:([n])=>t(W2(n))}}const e$=" ",Wp=`[ ${e$}]`,qp=new RegExp(Wp,"g");function t$(e){return e.replace(/\./g,"\\.?").replace(qp,Wp)}function mm(e){return e.replace(/\./g,"").replace(qp," ").toLowerCase()}function Pn(e,t){return e===null?null:{regex:RegExp(e.map(t$).join("|")),deser:([n])=>e.findIndex(r=>mm(n)===mm(r))+t}}function hm(e,t){return{regex:e,deser:([,n,r])=>ka(n,r),groups:t}}function vu(e){return{regex:e,deser:([t])=>t}}function n$(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r$(e,t){const n=Mn(t),r=Mn(t,"{2}"),i=Mn(t,"{3}"),o=Mn(t,"{4}"),s=Mn(t,"{6}"),u=Mn(t,"{1,2}"),a=Mn(t,"{1,3}"),l=Mn(t,"{1,6}"),c=Mn(t,"{1,9}"),f=Mn(t,"{2,4}"),d=Mn(t,"{4,6}"),g=S=>({regex:RegExp(n$(S.val)),deser:([x])=>x,literal:!0}),$=(S=>{if(e.literal)return g(S);switch(S.val){case"G":return Pn(t.eras("short"),0);case"GG":return Pn(t.eras("long"),0);case"y":return le(l);case"yy":return le(f,yc);case"yyyy":return le(o);case"yyyyy":return le(d);case"yyyyyy":return le(s);case"M":return le(u);case"MM":return le(r);case"MMM":return Pn(t.months("short",!0),1);case"MMMM":return Pn(t.months("long",!0),1);case"L":return le(u);case"LL":return le(r);case"LLL":return Pn(t.months("short",!1),1);case"LLLL":return Pn(t.months("long",!1),1);case"d":return le(u);case"dd":return le(r);case"o":return le(a);case"ooo":return le(i);case"HH":return le(r);case"H":return le(u);case"hh":return le(r);case"h":return le(u);case"mm":return le(r);case"m":return le(u);case"q":return le(u);case"qq":return le(r);case"s":return le(u);case"ss":return le(r);case"S":return le(a);case"SSS":return le(i);case"u":return vu(c);case"uu":return vu(u);case"uuu":return le(n);case"a":return Pn(t.meridiems(),0);case"kkkk":return le(o);case"kk":return le(f,yc);case"W":return le(u);case"WW":return le(r);case"E":case"c":return le(n);case"EEE":return Pn(t.weekdays("short",!1),1);case"EEEE":return Pn(t.weekdays("long",!1),1);case"ccc":return Pn(t.weekdays("short",!0),1);case"cccc":return Pn(t.weekdays("long",!0),1);case"Z":case"ZZ":return hm(new RegExp(`([+-]${u.source})(?::(${r.source}))?`),2);case"ZZZ":return hm(new RegExp(`([+-]${u.source})(${r.source})?`),2);case"z":return vu(/[a-z_+-/]{1,256}?/i);case" ":return vu(/[^\S\n\r]/);default:return g(S)}})(e)||{invalidReason:Qb};return $.token=e,$}const i$={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function o$(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const a=/^\s+$/.test(i);return{literal:!a,val:a?" ":i}}const o=t[r];let s=r;r==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=n.hour12?"hour12":"hour24");let u=i$[s];if(typeof u=="object"&&(u=u[o]),u)return{literal:!1,val:u}}function s$(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function u$(e,t,n){const r=e.match(t);if(r){const i={};let o=1;for(const s in n)if(co(n,s)){const u=n[s],a=u.groups?u.groups+1:1;!u.literal&&u.token&&(i[u.token.val[0]]=u.deser(r.slice(o,o+a))),o+=a}return[r,i]}else return[r,{}]}function a$(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return z(e.z)||(n=Ar.create(e.z)),z(e.Z)||(n||(n=new Mt(e.Z)),r=e.Z),z(e.q)||(e.M=(e.q-1)*3+1),z(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),z(e.u)||(e.S=uf(e.u)),[Object.keys(e).reduce((o,s)=>{const u=t(s);return u&&(o[u]=e[s]),o},{}),n,r]}let $l=null;function l$(){return $l||($l=K.fromMillis(1555555555555)),$l}function c$(e,t){if(e.literal)return e;const n=Dt.macroTokenToFormatOpts(e.val),r=Gp(n,t);return r==null||r.includes(void 0)?e:r}function zp(e,t){return Array.prototype.concat(...e.map(n=>c$(n,t)))}class Kp{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=zp(Dt.parseFormat(n),t),this.units=this.tokens.map(r=>r$(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=s$(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=u$(t,this.regex,this.handlers),[i,o,s]=r?a$(r):[null,null,void 0];if(co(r,"a")&&co(r,"H"))throw new Xi("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Zp(e,t,n){return new Kp(e,n).explainFromTokens(t)}function f$(e,t,n){const{result:r,zone:i,specificOffset:o,invalidReason:s}=Zp(e,t,n);return[r,i,o,s]}function Gp(e,t){if(!e)return null;const r=Dt.create(t,e).dtFormatter(l$()),i=r.formatToParts(),o=r.resolvedOptions();return i.map(s=>o$(s,e,o))}const vl="Invalid DateTime",pm=864e13;function us(e){return new Ln("unsupported zone",`the zone "${e.name}" is not supported`)}function Dl(e){return e.weekData===null&&(e.weekData=ta(e.c)),e.weekData}function El(e){return e.localWeekData===null&&(e.localWeekData=ta(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function ci(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new K({...n,...t,old:n})}function Yp(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const o=n.offset(r);return i===o?[r,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function Du(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Uu(e,t,n){return Yp(Fa(e),t,n)}function gm(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:r,month:i,day:Math.min(e.c.day,na(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=oe.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),u=Fa(o);let[a,l]=Yp(u,n,e.zone);return s!==0&&(a+=s,l=e.zone.offset(a)),{ts:a,o:l}}function qi(e,t,n,r,i,o){const{setZone:s,zone:u}=n;if(e&&Object.keys(e).length!==0||t){const a=t||u,l=K.fromObject(e,{...n,zone:a,specificOffset:o});return s?l:l.setZone(u)}else return K.invalid(new Ln("unparsable",`the input "${i}" can't be parsed as ${r}`))}function Eu(e,t,n=!0){return e.isValid?Dt.create(de.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Cl(e,t,n){const r=e.c.year>9999||e.c.year<0;let i="";if(r&&e.c.year>=0&&(i+="+"),i+=qe(e.c.year,r?6:4),n==="year")return i;if(t){if(i+="-",i+=qe(e.c.month),n==="month")return i;i+="-"}else if(i+=qe(e.c.month),n==="month")return i;return i+=qe(e.c.day),i}function ym(e,t,n,r,i,o,s){let u=!n||e.c.millisecond!==0||e.c.second!==0,a="";switch(s){case"day":case"month":case"year":break;default:if(a+=qe(e.c.hour),s==="hour")break;if(t){if(a+=":",a+=qe(e.c.minute),s==="minute")break;u&&(a+=":",a+=qe(e.c.second))}else{if(a+=qe(e.c.minute),s==="minute")break;u&&(a+=qe(e.c.second))}if(s==="second")break;u&&(!r||e.c.millisecond!==0)&&(a+=".",a+=qe(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?a+="Z":e.o<0?(a+="-",a+=qe(Math.trunc(-e.o/60)),a+=":",a+=qe(Math.trunc(-e.o%60))):(a+="+",a+=qe(Math.trunc(e.o/60)),a+=":",a+=qe(Math.trunc(e.o%60)))),o&&(a+="["+e.zone.ianaName+"]"),a}const Jp={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},d$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},m$={ordinal:1,hour:0,minute:0,second:0,millisecond:0},_u=["year","month","day","hour","minute","second","millisecond"],h$=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],p$=["year","ordinal","hour","minute","second","millisecond"];function Vu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new J0(e);return t}function wm(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Vu(e)}}function g$(e){if(as===void 0&&(as=Oe.now()),e.type!=="iana")return e.offset(as);const t=e.name;let n=wc.get(t);return n===void 0&&(n=e.offset(as),wc.set(t,n)),n}function bm(e,t){const n=jr(t.zone,Oe.defaultZone);if(!n.isValid)return K.invalid(us(n));const r=de.fromObject(t);let i,o;if(z(e.year))i=Oe.now();else{for(const a of _u)z(e[a])&&(e[a]=Jp[a]);const s=Dp(e)||Ep(e);if(s)return K.invalid(s);const u=g$(n);[i,o]=Uu(e,u,n)}return new K({ts:i,zone:n,loc:r,o})}function $m(e,t,n){const r=z(n.round)?!0:n.round,i=z(n.rounding)?"trunc":n.rounding,o=(u,a)=>(u=af(u,r||n.calendary?0:2,n.calendary?"round":i),t.loc.clone(n).relFormatter(n).format(u,a)),s=u=>n.calendary?t.hasSame(e,u)?0:t.startOf(u).diff(e.startOf(u),u).get(u):t.diff(e,u).get(u);if(n.unit)return o(s(n.unit),n.unit);for(const u of n.units){const a=s(u);if(Math.abs(a)>=1)return o(a,u)}return o(e>t?-0:0,n.units[n.units.length-1])}function vm(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let as;const wc=new Map;class K{constructor(t){const n=t.zone||Oe.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new Ln("invalid input"):null)||(n.isValid?null:us(n));this.ts=z(t.ts)?Oe.now():t.ts;let i=null,o=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,o]=[t.old.c,t.old.o];else{const u=Vr(t.o)&&!t.old?t.o:n.offset(this.ts);i=Du(this.ts,u),r=Number.isNaN(i.year)?new Ln("invalid input"):null,i=r?null:i,o=r?null:u}this._zone=n,this.loc=t.loc||de.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new K({})}static local(){const[t,n]=vm(arguments),[r,i,o,s,u,a,l]=n;return bm({year:r,month:i,day:o,hour:s,minute:u,second:a,millisecond:l},t)}static utc(){const[t,n]=vm(arguments),[r,i,o,s,u,a,l]=n;return t.zone=Mt.utcInstance,bm({year:r,month:i,day:o,hour:s,minute:u,second:a,millisecond:l},t)}static fromJSDate(t,n={}){const r=G2(t)?t.valueOf():NaN;if(Number.isNaN(r))return K.invalid("invalid input");const i=jr(n.zone,Oe.defaultZone);return i.isValid?new K({ts:r,zone:i,loc:de.fromObject(n)}):K.invalid(us(i))}static fromMillis(t,n={}){if(Vr(t))return t<-pm||t>pm?K.invalid("Timestamp out of range"):new K({ts:t,zone:jr(n.zone,Oe.defaultZone),loc:de.fromObject(n)});throw new $t(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Vr(t))return new K({ts:t*1e3,zone:jr(n.zone,Oe.defaultZone),loc:de.fromObject(n)});throw new $t("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=jr(n.zone,Oe.defaultZone);if(!r.isValid)return K.invalid(us(r));const i=de.fromObject(n),o=ra(t,wm),{minDaysInFirstWeek:s,startOfWeek:u}=im(o,i),a=Oe.now(),l=z(n.specificOffset)?r.offset(a):n.specificOffset,c=!z(o.ordinal),f=!z(o.year),d=!z(o.month)||!z(o.day),g=f||d,C=o.weekYear||o.weekNumber;if((g||c)&&C)throw new Xi("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&c)throw new Xi("Can't mix ordinal dates with month/day");const $=C||o.weekday&&!g;let S,x,I=Du(a,l);$?(S=h$,x=d$,I=ta(I,s,u)):c?(S=p$,x=m$,I=bl(I)):(S=_u,x=Jp);let j=!1;for(const yn of S){const In=o[yn];z(In)?j?o[yn]=x[yn]:o[yn]=I[yn]:j=!0}const W=$?z2(o,s,u):c?K2(o):Dp(o),Z=W||Ep(o);if(Z)return K.invalid(Z);const Be=$?nm(o,s,u):c?rm(o):o,[bt,Qe]=Uu(Be,l,r),kt=new K({ts:bt,zone:r,o:Qe,loc:i});return o.weekday&&g&&t.weekday!==kt.weekday?K.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${kt.toISO()}`):kt.isValid?kt:K.invalid(kt.invalid)}static fromISO(t,n={}){const[r,i]=Rb(t);return qi(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=Lb(t);return qi(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=jb(t);return qi(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(z(t)||z(n))throw new $t("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=r,s=de.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[u,a,l,c]=f$(s,t,n);return c?K.invalid(c):qi(u,a,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return K.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=Kb(t);return qi(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new $t("need to specify a reason the DateTime is invalid");const r=t instanceof Ln?t:new Ln(t,n);if(Oe.throwOnInvalid)throw new b2(r);return new K({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=Gp(t,de.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return zp(Dt.parseFormat(t),de.fromObject(n)).map(i=>i.val).join("")}static resetCache(){as=void 0,wc.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Dl(this).weekYear:NaN}get weekNumber(){return this.isValid?Dl(this).weekNumber:NaN}get weekday(){return this.isValid?Dl(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?El(this).weekday:NaN}get localWeekNumber(){return this.isValid?El(this).weekNumber:NaN}get localWeekYear(){return this.isValid?El(this).weekYear:NaN}get ordinal(){return this.isValid?bl(this.c).ordinal:NaN}get monthShort(){return this.isValid?$u.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?$u.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?$u.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?$u.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=Fa(this.c),i=this.zone.offset(r-t),o=this.zone.offset(r+t),s=this.zone.offset(r-i*n),u=this.zone.offset(r-o*n);if(s===u)return[this];const a=r-s*n,l=r-u*n,c=Du(a,s),f=Du(l,u);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[ci(this,{ts:a}),ci(this,{ts:l})]:[this]}get isInLeapYear(){return qs(this.year)}get daysInMonth(){return na(this.year,this.month)}get daysInYear(){return this.isValid?no(this.year):NaN}get weeksInWeekYear(){return this.isValid?Ds(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Ds(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=Dt.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Mt.instance(t),n)}toLocal(){return this.setZone(Oe.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=jr(t,Oe.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const o=t.offset(this.ts),s=this.toObject();[i]=Uu(s,o,t)}return ci(this,{ts:i,zone:t})}else return K.invalid(us(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return ci(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=ra(t,wm),{minDaysInFirstWeek:r,startOfWeek:i}=im(n,this.loc),o=!z(n.weekYear)||!z(n.weekNumber)||!z(n.weekday),s=!z(n.ordinal),u=!z(n.year),a=!z(n.month)||!z(n.day),l=u||a,c=n.weekYear||n.weekNumber;if((l||s)&&c)throw new Xi("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&s)throw new Xi("Can't mix ordinal dates with month/day");let f;o?f=nm({...ta(this.c,r,i),...n},r,i):z(n.ordinal)?(f={...this.toObject(),...n},z(n.day)&&(f.day=Math.min(na(f.year,f.month),f.day))):f=rm({...bl(this.c),...n});const[d,g]=Uu(f,this.o,this.zone);return ci(this,{ts:d,o:g})}plus(t){if(!this.isValid)return this;const n=oe.fromDurationLike(t);return ci(this,gm(this,n))}minus(t){if(!this.isValid)return this;const n=oe.fromDurationLike(t).negate();return ci(this,gm(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=oe.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(r.weekNumber=this.weekNumber-1),r.weekday=o}else r.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?Dt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):vl}toLocaleString(t=ea,n={}){return this.isValid?Dt.create(this.loc.clone(n),t).formatDateTime(this):vl}toLocaleParts(t={}){return this.isValid?Dt.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Vu(s);const u=t==="extended";let a=Cl(this,u,s);return _u.indexOf(s)>=3&&(a+="T"),a+=ym(this,u,n,r,i,o,s),a}toISODate({format:t="extended",precision:n="day"}={}){return this.isValid?Cl(this,t==="extended",Vu(n)):null}toISOWeekDate(){return Eu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:u="milliseconds"}={}){return this.isValid?(u=Vu(u),(i&&_u.indexOf(u)>=3?"T":"")+ym(this,s==="extended",n,t,r,o,u)):null}toRFC2822(){return Eu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Eu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Cl(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),Eu(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():vl}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return oe.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},o=Y2(n).map(oe.normalizeUnit),s=t.valueOf()>this.valueOf(),u=s?this:t,a=s?t:this,l=Xb(u,a,o,i);return s?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(K.now(),t,n)}until(t){return this.isValid?Me.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(n,r)<=i&&i<=o.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||K.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),$m(n,this.plus(r),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?$m(t.base||K.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(K.isDateTime))throw new $t("min requires all arguments be DateTimes");return om(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(K.isDateTime))throw new $t("max requires all arguments be DateTimes");return om(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:o=null}=r,s=de.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return Zp(s,t,n)}static fromStringExplain(t,n,r={}){return K.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,o=de.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new Kp(o,t)}static fromFormatParser(t,n,r={}){if(z(t)||z(n))throw new $t("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=r,s=de.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(n.locale))throw new $t(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`);const{result:u,zone:a,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?K.invalid(c):qi(u,a,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return ea}static get DATE_MED(){return H0}static get DATE_MED_WITH_WEEKDAY(){return D2}static get DATE_FULL(){return X0}static get DATE_HUGE(){return Q0}static get TIME_SIMPLE(){return ep}static get TIME_WITH_SECONDS(){return tp}static get TIME_WITH_SHORT_OFFSET(){return np}static get TIME_WITH_LONG_OFFSET(){return rp}static get TIME_24_SIMPLE(){return ip}static get TIME_24_WITH_SECONDS(){return op}static get TIME_24_WITH_SHORT_OFFSET(){return sp}static get TIME_24_WITH_LONG_OFFSET(){return up}static get DATETIME_SHORT(){return ap}static get DATETIME_SHORT_WITH_SECONDS(){return lp}static get DATETIME_MED(){return cp}static get DATETIME_MED_WITH_SECONDS(){return fp}static get DATETIME_MED_WITH_WEEKDAY(){return E2}static get DATETIME_FULL(){return dp}static get DATETIME_FULL_WITH_SECONDS(){return mp}static get DATETIME_HUGE(){return hp}static get DATETIME_HUGE_WITH_SECONDS(){return pp}}function Jo(e){if(K.isDateTime(e))return e;if(e&&e.valueOf&&Vr(e.valueOf()))return K.fromJSDate(e);if(e&&typeof e=="object")return K.fromObject(e);throw new $t(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Y;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Y||(Y={}));Y.Years+"",Y.Quarters+"",Y.Months+"",Y.Weeks+"",Y.Days+"",Y.Hours+"",Y.Minutes+"",Y.Seconds+"",Y.Milliseconds+"";Y.Years+"",Y.Quarters+"",Y.Months+"",Y.Weeks+"",Y.Days+"",Y.Hours+"",Y.Minutes+"",Y.Seconds+"",Y.Milliseconds+"";const y$=[Y.Milliseconds,Y.Seconds,Y.Minutes,Y.Hours,Y.Days,Y.Weeks,Y.Months,Y.Quarters,Y.Years];Y.Milliseconds+"",Y.Seconds+"",Y.Minutes+"",Y.Hours+"",Y.Days+"",Y.Weeks+"",Y.Months+"",Y.Quarters+"",Y.Years+"";function w$(e){return y$.filter(t=>e[t])}function bc(e,{roundToDigits:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function b$(e){return bc(Math.max(e-.4,0),{roundToDigits:0})}function Dm(e){return e===0?0:Math.sign(e)}function Es(e,t,n={}){const r={},i={roundToDigits:n.roundToDigits==null?void 0:Math.round(Math.abs(n.roundToDigits))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),u=w$(t).reverse();if(o||s)return u.forEach(c=>{r[c]=o?1/0:-1/0}),r;let a=oe.fromObject(e).as(Y.Milliseconds);const l=Dm(a);return u.forEach((c,f)=>{const d=f===u.length-1;if(c===Y.Milliseconds)r.milliseconds=bc(a,i);else{const g=oe.fromObject({milliseconds:a}).as(c),C=Math.sign(g),$=Math.abs(g),S=d?bc($,i):Math.floor(i.roundToDigits==null?$:b$($)),x=S===0?0:S*C;r[c]=x,a-=oe.fromObject({[c]:x}).as(Y.Milliseconds),l!==Dm(a)&&(a=0)}}),r}var ze;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(ze||(ze={}));ze.Year,ze.Hour,ze.Minute,ze.Second,ze.Millisecond;ze.Quarter,ze.Month,ze.Week,ze.Day;ze.Millisecond,ze.Second,ze.Minute,ze.Hour,ze.Day,ze.Week,ze.Month,ze.Quarter,ze.Year;var vt;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(vt||(vt={}));vt.Sunday+"",vt.Monday+"",vt.Tuesday+"",vt.Wednesday+"",vt.Thursday+"",vt.Friday+"",vt.Saturday+"";vt.Sunday,vt.Monday,vt.Tuesday,vt.Wednesday,vt.Thursday,vt.Friday,vt.Saturday;var Ut;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Ut||(Ut={}));Ut.January,Ut.February,Ut.March,Ut.April,Ut.May,Ut.June,Ut.July,Ut.August,Ut.September,Ut.October,Ut.November,Ut.December;function Cs(e){const t=new Y0,r=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:Es(e,{milliseconds:!0}).milliseconds;return r!==1/0&&r!==-1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}function Hp(...e){const t=e.join(""),n=V0(Array.from(t));return Array.from(n).join("")}function Xp(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Qp(e,t){const n=Hp([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return eg(e,n)}function eg(e,t){const n=Hp(t);return typeof e=="string"?new RegExp(Xp(e),n):new RegExp(e.source,n)}function tg(e,{caseSensitive:t}){const r="".replaceAll("i","");return eg(e,r)}function df(e,t=1){return e.split(`
`).map(n=>["    ".repeat(Math.round(t)),n].join("")).join(`
`)}function ng(e,t){return t?typeof t=="string"?!!new RegExp(Xp(t),"i").exec(e):!!Qp(t,"i").exec(e):!1}class m extends Error{name="AssertionError";constructor(t,n){super(Ca(n,t)||"Assertion failed.")}}const Em={interval:{milliseconds:100},timeout:{seconds:10}},xl=Symbol("not set");async function $$(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:o,options:s}=v$(t),u=Es(s.timeout,{milliseconds:!0}).milliseconds,a=Es(s.interval,{milliseconds:!0});let l=xl,c;async function f(){try{l=n?r():await r(),e(l,...i)}catch(g){l=xl,c=Et(g)}}const d=Date.now();for(;l===xl;)if(await f(),await Cs(a),Date.now()-d>=u){const C=`${o?`${o}: `:""}Timeout of '${u}' milliseconds exceeded waiting for callback value to match expectations`;throw nf(c,C)}return l}function N(e,t=!1){return((...n)=>$$(e,n,t))}function v$(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:rg(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function rg(e){return{interval:e?.interval||Em.interval,timeout:e?.timeout||Em.timeout}}const Ho={isFalse(e,t){if(e!==!1)throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new m(`'${h(e)}' is not truthy.`,t)}},ig={assert:Ho,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new m(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:N(Ho.isFalse),isFalsy:N(Ho.isFalsy),isTrue:N(Ho.isTrue),isTruthy:N(Ho.isTruthy)}};function D$(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n)}function E$(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n)}function C$(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n)}function x$(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n)}const Xo={endsWith:D$,endsWithout:E$,startsWith:C$,startsWithout:x$},og={assert:Xo,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:N(Xo.endsWith),endsWithout:N(Xo.endsWithout),startsWith:N(Xo.startsWith),startsWithout:N(Xo.startsWithout)}};function A$(e,t,n){const r=Bn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function hr(e,t){return Bn(t).includes(e)}const Al={isEnumValue(e,t,n){A$(e,t,n)},isNotEnumValue(e,t,n){const r=Bn(t);if(r.includes(e))throw new m(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},sg={assert:Al,check:{isEnumValue:hr,isNotEnumValue(e,t){return!Bn(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=Bn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=Bn(t);if(r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(Bn(t).includes(e))return e},isNotEnumValue(e,t){if(!Bn(t).includes(e))return e}},waitUntil:{isEnumValue:N(Al.isEnumValue),isNotEnumValue:N(Al.isNotEnumValue)}},Fl={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],u=t[o];return s!==u}))throw new m("Entries are equal.",n)}},ug={assert:Fl,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],o=t[r];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],o=t[r];return i!==o})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],u=t[o];return s!==u}))return e;throw new m("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:N(Fl.entriesEqual),notEntriesEqual:N(Fl.notEntriesEqual)}};function ia(e,t){return JSON.stringify(e)===JSON.stringify(t)}function xs(e,t){if(!(e===t||ia(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!ia(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{xs(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${Yt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function ls(e,t){if(e===t||ia(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!ia(n,r)?!1:Object.keys(e).every(o=>ls(e[o],t[o]))}return!1}const kl={jsonEquals(e,t,n){try{xs(e,t)}catch(r){throw new m(Yt(r),n)}},notJsonEquals(e,t,n){try{xs(e,t)}catch{return}throw new m("Values are JSON equal.",n)}},ag={assert:kl,check:{jsonEquals(e,t){return ls(e,t)},notJsonEquals(e,t){return!ls(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return xs(e,t),e}catch(r){throw new m(Yt(r),n)}},notJsonEquals(e,t,n){try{xs(e,t)}catch{return e}throw new m("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(ls(e,t))return e},notJsonEquals(e,t){if(!ls(e,t))return e}},waitUntil:{jsonEquals:N(kl.jsonEquals),notJsonEquals:N(kl.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function Cm(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function lg(){this._key="chai/deep-eql__"+Math.random()+Date.now()}lg.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var cg=typeof WeakMap=="function"?WeakMap:lg;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function xm(e,t,n){if(!n||fo(e)||fo(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Cu(e,t,n,r){if(!(!n||fo(e)||fo(t))){var i=n.get(e);i?i.set(t,r):(i=new cg,i.set(t,r),n.set(e,i))}}function On(e,t,n){if(n&&n.comparator)return Am(e,t,n);var r=fg(e,t);return r!==null?r:Am(e,t,n)}function fg(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:fo(e)||fo(t)?!1:null}/*!
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
*/function Am(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new cg;var r=n&&n.comparator,i=xm(e,t,n.memoize);if(i!==null)return i;var o=xm(t,e,n.memoize);if(o!==null)return o;if(r){var s=r(e,t);if(s===!1||s===!0)return Cu(e,t,n.memoize,s),s;var u=fg(e,t);if(u!==null)return u}var a=Cm(e);if(a!==Cm(t))return Cu(e,t,n.memoize,!1),!1;Cu(e,t,n.memoize,!0);var l=F$(e,t,a,n);return Cu(e,t,n.memoize,l),l}function F$(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return On(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return dg(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return vi(e,t,r);case"RegExp":return k$(e,t);case"Generator":return S$(e,t,r);case"DataView":return vi(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return vi(new Uint8Array(e),new Uint8Array(t),r);case"Set":return Fm(e,t,r);case"Map":return Fm(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return N$(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function k$(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Fm(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(s,u){r.push([s,u])}),t.forEach(function(s,u){i.push([s,u])}),vi(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function vi(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(On(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function S$(e,t,n){return vi($c(e),$c(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function I$(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function km(e){if(I$(e))try{return $c(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function $c(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Sm(e){var t=[];for(var n in e)t.push(n);return t}function Im(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function dg(e,t,n,r){var i=n.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(On(e[n[o]],t[n[o]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function N$(e,t,n){var r=Sm(e),i=Sm(t),o=Im(e),s=Im(t);if(r=r.concat(o),i=i.concat(s),r.length&&r.length===i.length)return vi(Nm(r).sort(),Nm(i).sort())===!1?!1:dg(e,t,r,n);var u=km(e),a=km(t);return u.length&&u.length===a.length?(u.sort(),a.sort(),vi(u,a,n)):r.length===0&&u.length===0&&i.length===0&&a.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function fo(e){return e===null||typeof e!="object"}function Nm(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}class io extends m{name="DiffError";constructor(t,n,r,i){const o=h2(n,r);super([t,df(o)].join(`
`),i)}}function Rr(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Or={strictEquals(e,t,n){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new io("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new io("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n)},deepEquals(e,t,n){if(!On(e,t,{comparator:Rr}))throw new io("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(On(e,t,{comparator:Rr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n)}},mg=Or.deepEquals,hg={assert:Or,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return On(e,t,{comparator:Rr})},notDeepEquals(e,t){return!On(e,t,{comparator:Rr})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new io("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new io("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n);return e},deepEquals(e,t,n){if(On(e,t,{comparator:Rr}))return e;throw new io("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(On(e,t,{comparator:Rr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(On(e,t,{comparator:Rr}))return e},notDeepEquals(e,t){if(!On(e,t,{comparator:Rr}))return e}},waitUntil:{strictEquals:N(Or.strictEquals),notStrictEquals:N(Or.notStrictEquals),looseEquals:N(Or.looseEquals),notLooseEquals:N(Or.notLooseEquals),deepEquals:N(Or.deepEquals),notDeepEquals:N(Or.notDeepEquals)}};function nn(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function vn(e,t){return typeof t=="string"?t.includes(e):nn(t,e)}const fr={hasValue(e,t,n){if(!nn(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n)},lacksValue(e,t,n){if(nn(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n)},isIn(e,t,n){if(!vn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n)},isNotIn(e,t,n){if(vn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is not empty.`,t)}}},pg={assert:fr,check:{hasValue(e,t){return nn(e,t)},lacksValue(e,t){return!nn(e,t)},hasValues(e,t){return t.every(n=>nn(e,n))},lacksValues(e,t){return t.every(n=>!nn(e,n))},isIn(e,t){return vn(e,t)},isNotIn(e,t){return!vn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!nn(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n);return e},lacksValue(e,t,n){if(nn(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n);return e},isIn(e,t,n){if(!vn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n);return e},isNotIn(e,t,n){if(vn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(nn(e,t))return e},lacksValue(e,t){if(!nn(e,t))return e},hasValues(e,t){if(t.every(n=>nn(e,n)))return e},lacksValues(e,t){if(!t.every(n=>nn(e,n)))return e},isIn(e,t){if(vn(e,t))return e},isNotIn(e,t){if(!vn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:N(fr.hasValue),lacksValue:N(fr.lacksValue),hasValues:N(fr.hasValues),lacksValues:N(fr.lacksValues),isIn:N(fr.isIn),isNotIn:N(fr.isNotIn),isEmpty:N(fr.isEmpty),isNotEmpty:N(fr.isNotEmpty)}},Sl={isHttpStatus(e,t){if(!hr(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(hr(e,v)){if(!vn(e,ju[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n)}},gg={assert:Sl,check:{isHttpStatus(e){return hr(e,v)},isHttpStatusCategory(e,t){return hr(e,v)&&vn(e,ju[t])}},assertWrap:{isHttpStatus(e,t){if(!hr(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(hr(e,v)){if(!vn(e,ju[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(hr(e,v))return e},isHttpStatusCategory(e,t){if(hr(e,v)&&vn(e,ju[t]))return e}},waitUntil:{isHttpStatus:N(Sl.isHttpStatus),isHttpStatusCategory:N(Sl.isHttpStatusCategory)}},Il={instanceOf(e,t,n){if(!(e instanceof t))throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n)}},yg={assert:Il,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:N(Il.instanceOf),notInstanceOf:N(Il.notInstanceOf)}},T$=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function De(e,t){return T$.some(n=>{try{return n(e,t)}catch{return!1}})}const fi={isKeyOf(e,t,n){if(!De(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n)},isNotKeyOf(e,t,n){if(De(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n)},hasKey(e,t,n){if(!De(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(De(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!De(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>De(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n)}},wg={assert:fi,check:{isKeyOf(e,t){return De(t,e)},isNotKeyOf(e,t){return!De(t,e)},hasKey:De,lacksKey(e,t){return!De(e,t)},hasKeys(e,t){return t.every(n=>De(e,n))},lacksKeys(e,t){return t.every(n=>!De(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!De(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(De(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n);return e},hasKey(e,t,n){if(!De(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(De(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!De(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>De(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(De(t,e))return e},isNotKeyOf(e,t){if(!De(t,e))return e},hasKey(e,t){if(De(e,t))return e},lacksKey(e,t){if(!De(e,t))return e},hasKeys(e,t){if(t.every(n=>De(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!De(e,n)))return e}},waitUntil:{isKeyOf:N(fi.isKeyOf),isNotKeyOf:N(fi.isNotKeyOf),hasKey:N(fi.hasKey),lacksKey:N(fi.lacksKey),hasKeys:N(fi.hasKeys),lacksKeys:N(fi.lacksKeys)}};function M$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n)}function P$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n)}const Nl={isLengthAtLeast:M$,isLengthExactly:P$},bg={assert:Nl,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Fe(e).length)===t)return e})},waitUntil:{isLengthAtLeast:N(Nl.isLengthAtLeast),isLengthExactly:N(Nl.isLengthExactly)}},O$={never(e){throw new m("This code should not have executed.",e)}},$g={assert:O$,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Tl={isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new m(`'${h(e)}' is not a nullish.`,t)}},vg={assert:Tl,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new m(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:N(Tl.isDefined),isNullish:N(Tl.isNullish)}},Lt={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r)}},Dg={assert:Lt,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:N(Lt.isInBounds),isOutBounds:N(Lt.isOutBounds),isInteger:N(Lt.isInteger),isNotInteger:N(Lt.isNotInteger),isAbove:N(Lt.isAbove),isAtLeast:N(Lt.isAtLeast),isBelow:N(Lt.isBelow),isAtMost:N(Lt.isAtMost),isNaN:N(Lt.isNaN),isFinite:N(Lt.isFinite),isInfinite:N(Lt.isInfinite),isApproximately:N(Lt.isApproximately),isNotApproximately:N(Lt.isNotApproximately)}};function B$(e,t,n,r,i){return Zs(...Ia(e,t,n,r,i),!1)}function Ia(e,t,n,r,i){const o=Array.isArray(n);return[o?e:mg,o?t:e,o?n:t,o?r:n,o?i:r]}function Zs(e,t,n,r,i,o){const s=t(...n);if(s instanceof Promise)return new Promise(async(u,a)=>{try{const l=await s;e(l,r),o?u(l):u()}catch(l){a(new m(`Output from '${t.name}' did not produce expected output. ${Yt(l)}`,i))}});try{return e(s,r),o?s:void 0}catch(u){throw new m(`Output from '${t.name}' did not produce expected output. ${Yt(u)}`,i)}}function R$(e,t,n,r,i){try{const o=Zs(...Ia(e,t,n,r,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function L$(e,t,n,r,i){return Zs(...Ia(e,t,n,r,i),!0)}function j$(e,t,n,r,i){try{const o=Zs(...Ia(e,t,n,r,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Ml=Symbol("not set");async function U$(e,t,n,r,i,o){const s=Array.isArray(n),u=s?e:mg,a=s?t:e,l=s?n:t,c=s?r:n,f=rg(s?i:r),d=s?o:i,g=Es(f.timeout,{milliseconds:!0}).milliseconds,C=Es(f.interval,{milliseconds:!0});let $=Ml,S;async function x(){try{$=await Zs(u,a,l,c,void 0,!0)}catch(j){$=Ml,S=Et(j)}}const I=Date.now();for(;$===Ml;)if(await x(),await Cs(C),Date.now()-I>=g)throw nf(S,Ca(d,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return $}const _$={output:B$},Eg={assert:_$,check:{output:R$},assertWrap:{output:L$},checkWrap:{output:j$},waitUntil:{output:U$}},Qo={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t)}},Cg={assert:Qo,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:N(Qo.isNotPrimitive),isNotPropertyKey:N(Qo.isNotPropertyKey),isPrimitive:N(Qo.isPrimitive),isPropertyKey:N(Qo.isPropertyKey)}},es={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t)}},xg={assert:es,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:N(es.isPromiseLike,!0),isNotPromiseLike:N(es.isNotPromiseLike,!0),isPromise:N(es.isPromise,!0),isNotPromise:N(es.isNotPromise,!0)}},Pl={matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n)}},Ag={assert:Pl,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:N(Pl.matches,!0),mismatches:N(Pl.mismatches,!0)}},Re={isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t)}},Fg={assert:Re,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:N(Re.isArray),isBigInt:N(Re.isBigInt),isBoolean:N(Re.isBoolean),isFunction:N(Re.isFunction),isNull:N(Re.isNull),isNumber:N(Re.isNumber),isObject:N(Re.isObject),isString:N(Re.isString),isSymbol:N(Re.isSymbol),isUndefined:N(Re.isUndefined),isNotArray:N(Re.isNotArray),isNotBigInt:N(Re.isNotBigInt),isNotBoolean:N(Re.isNotBoolean),isNotFunction:N(Re.isNotFunction),isNotNull:N(Re.isNotNull),isNotNumber:N(Re.isNotNumber),isNotObject:N(Re.isNotObject),isNotString:N(Re.isNotString),isNotSymbol:N(Re.isNotSymbol),isNotUndefined:N(Re.isNotUndefined)}};var _t;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(_t||(_t={}));function mf(e,t,n){hf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n)}function Tm(e,t,n){hf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,n)}function hf(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new m(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=Yt(e);if(typeof n.matchMessage=="string"){if(!ng(i,n.matchMessage))throw new m(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new m(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new m(t.notInstance,r);else throw new m(t.noError,r)}function Mm(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=Yt(e);if(typeof t.matchMessage=="string"){if(!ng(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Na(e,t,n,r){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,u)=>{try{await o}catch(a){i=Et(a)}try{Tm(i,n,r),e===_t.Assert?s():e===_t.Check?s(!0):s(i)}catch(a){e===_t.CheckWrap?s(void 0):e===_t.Check?s(!1):u(Et(a))}})}catch(o){i=Et(o)}try{return Tm(i,n,r),e===_t.Check?!0:e!==_t.Assert?i:void 0}catch(o){if(e===_t.CheckWrap)return;if(e===_t.Check)return!1;throw o}}function V$(e,t,n){return Na(_t.Assert,e,t,n)}function W$(e,t){return Na(_t.Check,e,t)}function q$(e,t,n){return Na(_t.AssertWrap,e,t,n)}function z$(e,t,n){return Na(_t.CheckWrap,e,t,n)}const K$=N(mf);function Z$(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof n=="object"?r:n,u=typeof n=="object"?n:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${h(o)}'`);return K$(i,async()=>{try{await o();return}catch(a){return Et(a)}},u,s)}const G$={throws:V$,isError:mf},kg={assert:G$,check:{throws:W$,isError(e,t){return Mm(e,t)}},assertWrap:{throws:q$,isError(e,t,n){return hf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:z$,isError(e,t){if(Mm(e,t))return e}},waitUntil:{throws:Z$,isError:N(mf)}},Lr=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Ol={isUuid(e,t){if(!String(e).match(Lr))throw new m(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Lr))throw new m(`'${String(e)}' is a UUID.`,t)}},Sg={assert:Ol,check:{isUuid(e){return!!String(e).match(Lr)},isNotUuid(e){return!String(e).match(Lr)}},assertWrap:{isUuid(e,t){if(!String(e).match(Lr))throw new m(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Lr))throw new m(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Lr))return e},isNotUuid(e){if(!String(e).match(Lr))return e}},waitUntil:{isUuid:N(Ol.isUuid),isNotUuid:N(Ol.isNotUuid)}},Y$={...$g.assert,...ig.assert,...og.assert,...ug.assert,...sg.assert,...gg.assert,...yg.assert,...ag.assert,...wg.assert,...bg.assert,...vg.assert,...Dg.assert,...Eg.assert,...Cg.assert,...xg.assert,...Ag.assert,...Fg.assert,...hg.assert,...kg.assert,...Sg.assert,...pg.assert},pf=[ig,og,ug,sg,gg,yg,ag,wg,bg,$g,vg,Dg,Eg,Cg,xg,Ag,Fg,hg,kg,Sg,pg],J$=Object.assign({},...pf.map(e=>e.check)),k=Object.assign(function(t){return!!t},J$);function H$(e,t,n){return Wu(e,t,n,new Set)}function Wu(e,t,n,r){if(e=Pm(e),t=Pm(t),k.isObject(e)&&k.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Wu(Fe(e).sort(),Fe(t).sort(),n,r))return!1;let i=!1;const o=Fe(e).map(s=>{const u=Wu(e[s],t[s],n,r);return k.isPromise(u)&&(i=!0),u});return Om(i,o)}else if(k.isArray(e)&&k.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,u)=>{const a=Wu(s,t[u],n,r);return k.isPromise(a)&&(i=!0),a});return Om(i,o)}else return n(e,t)}function Pm(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Om(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(k.isTrue))}catch(i){r(Et(i))}}):t.every(k.isTrue)}const X$=Object.assign({},...pf.map(e=>e.assertWrap)),As=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n);return t},X$);function Q$(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const ev={tsType:Q$},tv={assert:ev},nv={fail:e=>{throw new m("Failure triggered.",e)}},rv={...tv.assert,...Y$,...nv},nr=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n)},rv),iv=Object.assign({},...pf.map(e=>e.checkWrap)),ov=Object.assign(function(t){if(t)return t},iv);function sv(e,t){return k.hasKey(e,"entryType")&&e.entryType===t}function zi(e,t){return e.controlType===t}var J;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(J||(J={}));const Ig=Symbol("any-type"),uv={[J.Checkbox]:!1,[J.Color]:"",[J.Dropdown]:"",[J.Hidden]:Ig,[J.Number]:0,[J.Text]:""};function av(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const o=uv[i.controlType];o!==Ig&&(typeof o!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function lv(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return k.isPromise(i)?new Promise(async(o,s)=>{try{const u=await i;e.set(r,u),o(u)}catch(u){s(Et(u))}}):(e.set(r,i),i)}}function Gs(e,t,n){if(t in e)return e[t];{const r=n();return k.isPromise(r)?new Promise(async(i,o)=>{try{const s=await r;e[t]=s,i(s)}catch(s){o(Et(s))}}):(e[t]=r,r)}}function gf(e){return Fe(e).map(t=>[t,e[t]])}function Fs(e){return Object.fromEntries(e)}function Si(e,t,n){return e.reduce((r,i,o,s)=>{const u=t(i,o,s);return n(u,i,o,s)&&r.push(u),r},[])}function cv(e,t,n={}){try{let r=!1;const i=e.map((o,s,u)=>{const a=t(o,s,u);return a instanceof Promise?(r=!0,a):a?[a.key,a.value]:void 0}).filter(k.isTruthy);return r?new Promise(async(o,s)=>{try{const u=Si(await Promise.all(i),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},k.isTruthy);o(Fs(u))}catch(u){s(Et(u))}}):Fs(i)}catch(r){throw Et(r)}}function fv(e){return Array.isArray(e)?e:[e]}function dv({min:e,max:t}){const{min:n,max:r}=G0({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const u=Math.floor(256**s/i)*i,a=new Uint8Array(s);let l;do crypto.getRandomValues(a),l=a.reduce((c,f,d)=>c+f*256**d,0);while(l>=u);return n+l%i}const Bm=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Ng(e=16){let t="";for(let n=0;n<e;n++){const r=dv({min:0,max:Bm.length-1});t+=Bm[r]}return t}function Tg(e){if(k.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Yt(t).trim()).join(`
`))}function mv(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const hv="modulepreload",pv=function(e){return"/vira/book/"+e},Rm={},Mg=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),u=s?.nonce||s?.getAttribute("nonce");i=a(n.map(l=>{if(l=pv(l),l in Rm)return;Rm[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":hv,c||(d.as="script"),d.crossOrigin="",d.href=l,u&&d.setAttribute("nonce",u),document.head.appendChild(d),c)return new Promise((g,C)=>{d.addEventListener("load",g),d.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s}return i.then(s=>{for(const u of s||[])u.status==="rejected"&&o(u.reason);return t().catch(o)})};var tt;(function(e){e.Standard="stdout",e.Error="stderr"})(tt||(tt={}));var te;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(te||(te={}));async function gv(){return await Z0({async[_n.Node](){const e=(await Mg(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[te.Bold]:e.bold.open,[te.Debug]:e.blueBright.open,[te.Error]:e.red.open,[te.Faint]:e.gray.open,[te.Info]:e.cyan.open,[te.Mutate]:e.magenta.open,[te.NormalWeight]:"\x1B[22m",[te.Plain]:"",[te.Reset]:e.reset.open,[te.Success]:e.green.open,[te.Warning]:e.yellow.open}},[_n.Web](){return Promise.resolve({[te.Bold]:"font-weight: bold",[te.Debug]:"color: blue",[te.Error]:"color: red",[te.Faint]:"color: grey",[te.Info]:"color: teal",[te.Mutate]:"color: magenta",[te.NormalWeight]:"",[te.Plain]:"",[te.Reset]:"",[te.Success]:"color: green",[te.Warning]:"color: orange"})}})}const tn=await gv(),yv={[te.Bold]:{colors:[tn.bold],logType:tt.Standard},[te.Debug]:{colors:[tn.debug],logType:tt.Standard},[te.Faint]:{colors:[tn.faint],logType:tt.Standard},[te.Info]:{colors:[tn.info],logType:tt.Standard},[te.Mutate]:{colors:[tn.mutate,tn.bold],logType:tt.Standard},[te.NormalWeight]:{colors:[tn.normalWeight],logType:tt.Standard},[te.Plain]:{colors:[],logType:tt.Standard},[te.Reset]:{colors:[tn.reset],logType:tt.Standard},[te.Success]:{colors:[tn.success,tn.bold],logType:tt.Standard},[te.Error]:{colors:[tn.error,tn.bold],logType:tt.Error},[te.Warning]:{colors:[tn.warning],logType:tt.Error}};function Gt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function oo({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function wv(e,t){try{let n=!1;const r=gf(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(n=!0,s):s?[s.key,s.value]:void 0}).filter(k.isTruthy);return n?new Promise(async(i,o)=>{try{const s=Si(await Promise.all(r),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},k.isTruthy);i(Fs(s))}catch(s){o(Et(s))}}):Fs(r)}catch(n){throw Et(n)}}function bv(e,t){return wv(e,(n,r)=>{const i=r,o=t(r,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function Pg(e,...t){const n={...e};return t.forEach(r=>{r&&gf(r).forEach(([i,o])=>{o!=null&&(n[i]=o)})}),n}const $v="px";function Og(e){return Bg({value:e,suffix:$v})}function Bg({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function vv({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Dv(){return await Z0({async[_n.Node](){const{inspect:e}=await Mg(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(u=>typeof u=="string"?u:e(u));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[te.Reset].colors.join("")].join(""),css:void 0}}},[_n.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:Si(n.colorConfig[t].colors,s=>vv({value:s,suffix:";"}),k.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Yt(s):h(s)).join(`
`),n.omitColors?"":n.colorConfig[te.Reset].colors.join("")].join(""),css:r}}}})}const Ev=await Dv(),Cv={colorConfig:yv,omitColors:!1},xv=Rg({[tt.Error](){},[tt.Standard](){}});function Rg(e,t){const n=Pg(Cv,t);function r(o){e[n.colorConfig[o.colorKey].logType](Ev({...o,options:n}))}const i=bv(te,o=>(...s)=>r({args:s,colorKey:o}));return{...i,if(o){return o?i:xv}}}const Av=tf(_n.Node)?{[tt.Error]({text:e}){process.stderr.write(e+`
`)},[tt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[tt.Error]({text:e,css:t}){console.error(Gt({value:e,prefix:"%c"}),t)},[tt.Standard]({text:e,css:t}){console.log(Gt({value:e,prefix:"%c"}),t)}},Fv=Rg(Av);function kv(e,{min:t,max:n}){return Math.min(Math.max(e,t),n)}function Sv({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=Qp(tg(t,{caseSensitive:n}),"g"),o=[];return e.replace(i,(...s)=>{const u=s[s.length-2];if(typeof u!="number")throw new TypeError(`Match index "${u}" is not a number. Searching for "${t}" in "${e}".`);const a=s[0];if(typeof a!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof a}!`);o.push({index:u,length:a.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${u} is not a string.`);return l}),o}function Iv(e,t,{caseSensitive:n}){const r=Sv({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=tg(t,{caseSensitive:n});return e.split(i).reduce((s,u,a)=>{const l=r[a],c=s.concat(u);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function Nv(e,t){return e.split(t)}function Lm(e,t){const{min:n,max:r}=G0(t);if(t.takeOverflow){const i=r-n+1,o=(e-n)%i;return o<0?n+i+o:n+o}else return e>r?n:e<n?r:e}function an(e,t){let n=!1;const r=Fe(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(n=!0),i[o]=s,i},{});return n?new Promise(async(i,o)=>{try{await Promise.all(Fe(r).map(async s=>{const u=await r[s];r[s]=u})),i(r)}catch(s){o(Et(s))}}):r}function yf(e,t){const n=gf(e).filter(([r,i])=>t(r,i,e));return Fs(n)}function Tv(e,t){return yf(e,n=>!t.includes(n))}function jm(e){return Fe(e).map(t=>e[t])}function Lg(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function Mv(e,t){return t.capitalizeFirstLetter?Pv(e):e}function Pv(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const Ov={capitalizeFirstLetter:!1};var mo;(function(e){e.Upper="upper",e.Lower="lower"})(mo||(mo={}));function Bv(e){return e.toLowerCase()!==e.toUpperCase()}function Um(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(Bv(r)){if(t===mo.Upper&&r!==r.toUpperCase()||t===mo.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function Rv(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const o=i[1];return o?o.toUpperCase():""});return Mv(r,Pg(Ov,t))}function Lv(e){return e.split("").reduce((n,r,i,o)=>{const s=i>0&&o[i-1]||"",u=i<o.length-1&&o[i+1]||"",a=Um(s,mo.Lower,{rejectNoCaseCharacters:!0})||Um(u,mo.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!a?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function jv(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Uv({value:e,wrapper:t}){return Gt({value:Bg({value:e,suffix:t}),prefix:t})}function Jr(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function jg(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class _v{listeners={};universalListeners=new Map;getListenerCount(){return jm(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)+this.universalListeners.size}listenToAll(t,n={}){const r=()=>this.universalListeners.delete(t)||!1;function i(o,s){n.once&&r(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:r}),r}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,n,r={}){const i=k.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(n)||!1;function s(u,a){r.once&&o(),n(u,a)}return Gs(this.listeners,i,()=>new Map).set(n,{listener:s,removeListener:o}),o}removeListener(t,n){const r=k.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const o=i.get(n);return o?o.removeListener():!1}dispatch(t){const n=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),r+this.universalListeners.size}removeAllListeners(){const n=jm(this.listeners).reduce((r,i)=>{const o=i.size||0;return i.clear(),r+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),n}destroy(){this.removeAllListeners()}}class wf extends _v{}function Ug(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _m(e,t,n){return Ug(globalThis,e,t,n)}function bf(e,t){return oa(e.title),e.parent?[...bf(e.parent),oa(e.parent.title)].concat([]):[]}function oa(e){return Lg(e).toLowerCase().replaceAll(/\s/g,"-")}function Vv({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const Wv={[ft.ElementExample]:()=>[],[ft.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...av(e.controls,e.title)].filter(k.isTruthy),[ft.Root]:()=>[]},sa="_isBookTreeNode",_g=new Map;function qv(e){return _g.get(e)}function zv(e,t){lv(_g,e,()=>t)}function so(e,t){return Vg(e)&&e.entry.entryType===t}function Vg(e){return!!(k.hasKeys(e,[sa,"entry"])&&e[sa])}function Kv(){return{[sa]:!0,entry:{entryType:ft.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Zv({entries:e,debug:t}){const n=qv(e);if(n)return n;const r=Kv();e.forEach(s=>$f({tree:r,newEntry:s,debug:t,manuallyAdded:!0}));const i=Wg(r),o={tree:r,flattenedNodes:i};return zv(e,o),t&&console.info("element-book tree:",r),o}function Gv(e,t,n){if(!t.parent)return e;const r=vc(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),$f({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=vc(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${bf(t).join(" > ")}`);return i}function $f({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=Wv[t.entryType](t);t.errors.push(...i);const o=Gv(e,t,n),s=oa(t.title),u=o.children[s];if(u){if(r){if(u.manuallyAdded){u.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}u.manuallyAdded=!0}return}const a={[sa]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=a,sv(t,ft.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>$f({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function vc(e,t){const n=Vg(e)?e.fullUrlBreadcrumbs.slice(0,-1):bf(e);return n.length?n.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function Wg(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>Wg(i));return[e,...n].flat()}function vf(e,t){return Df(e,["",...t],void 0)}function Df(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const o=e.children[i||""],s=o&&Df(o,r,n);return{...e.controls,...s}}function Yv(e,t,n){const r={...e};return Df(r,["",...t],n),r}function qg(e,t){const n=t?.controls||(so(e,ft.Page)?an(e.entry.controls,(i,o)=>o.initValue):{});return{children:an(e.children,(i,o)=>qg(o,t?.children?.[o.urlBreadcrumb])),controls:n}}function pt(e){const t={...e,entryType:ft.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,isVertical:t.useVerticalExamples,entryType:ft.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(k.isTruthy)};n.add(r.title),t.elementExamples[oa(i.title)]=i}}),t}var Vt;(function(e){e.Search="search",e.Book="book"})(Vt||(Vt={}));function Dc(e){return e[0]===Vt.Book?"":e[1]?decodeURIComponent(e[1]):""}const ho={hash:void 0,paths:[Vt.Book],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qu=globalThis,Ef=qu.ShadowRoot&&(qu.ShadyCSS===void 0||qu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cf=Symbol(),Vm=new WeakMap;let zg=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Cf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ef&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Vm.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Vm.set(n,t))}return t}toString(){return this.cssText}};const Ge=e=>new zg(typeof e=="string"?e:e+"",void 0,Cf),zu=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new zg(n,e,Cf)},Jv=(e,t)=>{if(Ef)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const r=document.createElement("style"),i=qu.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Wm=Ef?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Ge(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Hv,defineProperty:Xv,getOwnPropertyDescriptor:Qv,getOwnPropertyNames:eD,getOwnPropertySymbols:tD,getPrototypeOf:nD}=Object,Ta=globalThis,qm=Ta.trustedTypes,rD=qm?qm.emptyScript:"",iD=Ta.reactiveElementPolyfillSupport,hs=(e,t)=>e,ua={toAttribute(e,t){switch(t){case Boolean:e=e?rD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},xf=(e,t)=>!Hv(e,t),zm={attribute:!0,type:String,converter:ua,reflect:!1,useDefault:!1,hasChanged:xf};Symbol.metadata??=Symbol("metadata"),Ta.litPropertyMetadata??=new WeakMap;let Hi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=zm){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Xv(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=Qv(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){const u=i?.call(this);o?.call(this,s),this.requestUpdate(t,u,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zm}static _$Ei(){if(this.hasOwnProperty(hs("elementProperties")))return;const t=nD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(hs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hs("properties"))){const n=this.properties,r=[...eD(n),...tD(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Wm(i))}else t!==void 0&&n.push(Wm(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jv(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:ua).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ua;this._$Em=i;const u=s.fromAttribute(n,o.type);this[i]=u??this._$Ej?.get(i)??u,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??xf)(o,n)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,u=this[i];s!==!0||this._$AL.has(i)||u===void 0||this.C(i,void 0,o,u)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};Hi.elementStyles=[],Hi.shadowRootOptions={mode:"open"},Hi[hs("elementProperties")]=new Map,Hi[hs("finalized")]=new Map,iD?.({ReactiveElement:Hi}),(Ta.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Af=globalThis,aa=Af.trustedTypes,Km=aa?aa.createPolicy("lit-html",{createHTML:e=>e}):void 0,Kg="$lit$",Ur=`lit$${Math.random().toFixed(9).slice(2)}$`,Zg="?"+Ur,oD=`<${Zg}>`,Ei=document,ks=()=>Ei.createComment(""),Ss=e=>e===null||typeof e!="object"&&typeof e!="function",Ff=Array.isArray,sD=e=>Ff(e)||typeof e?.[Symbol.iterator]=="function",Bl=`[ 	
\f\r]`,ts=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zm=/-->/g,Gm=/>/g,di=RegExp(`>|${Bl}(?:([^\\s"'>=/]+)(${Bl}*=${Bl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ym=/'/g,Jm=/"/g,Gg=/^(?:script|style|textarea|title)$/i,uD=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),aD=uD(1),ln=Symbol.for("lit-noChange"),ae=Symbol.for("lit-nothing"),Hm=new WeakMap,wi=Ei.createTreeWalker(Ei,129);function Yg(e,t){if(!Ff(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Km!==void 0?Km.createHTML(t):t}const lD=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=ts;for(let u=0;u<n;u++){const a=e[u];let l,c,f=-1,d=0;for(;d<a.length&&(s.lastIndex=d,c=s.exec(a),c!==null);)d=s.lastIndex,s===ts?c[1]==="!--"?s=Zm:c[1]!==void 0?s=Gm:c[2]!==void 0?(Gg.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=di):c[3]!==void 0&&(s=di):s===di?c[0]===">"?(s=i??ts,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?di:c[3]==='"'?Jm:Ym):s===Jm||s===Ym?s=di:s===Zm||s===Gm?s=ts:(s=di,i=void 0);const g=s===di&&e[u+1].startsWith("/>")?" ":"";o+=s===ts?a+oD:f>=0?(r.push(l),a.slice(0,f)+Kg+a.slice(f)+Ur+g):a+Ur+(f===-2?u:g)}return[Yg(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Is{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const u=t.length-1,a=this.parts,[l,c]=lD(t,n);if(this.el=Is.createElement(l,r),wi.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=wi.nextNode())!==null&&a.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Kg)){const d=c[s++],g=i.getAttribute(f).split(Ur),C=/([.?@])?(.*)/.exec(d);a.push({type:1,index:o,name:C[2],strings:g,ctor:C[1]==="."?fD:C[1]==="?"?dD:C[1]==="@"?mD:Ma}),i.removeAttribute(f)}else f.startsWith(Ur)&&(a.push({type:6,index:o}),i.removeAttribute(f));if(Gg.test(i.tagName)){const f=i.textContent.split(Ur),d=f.length-1;if(d>0){i.textContent=aa?aa.emptyScript:"";for(let g=0;g<d;g++)i.append(f[g],ks()),wi.nextNode(),a.push({type:2,index:++o});i.append(f[d],ks())}}}else if(i.nodeType===8)if(i.data===Zg)a.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Ur,f+1))!==-1;)a.push({type:7,index:o}),f+=Ur.length-1}o++}}static createElement(t,n){const r=Ei.createElement("template");return r.innerHTML=t,r}}function po(e,t,n=e,r){if(t===ln)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const o=Ss(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=po(e,i._$AS(e,t.values),i,r)),t}let cD=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Ei).importNode(n,!0);wi.currentNode=i;let o=wi.nextNode(),s=0,u=0,a=r[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Po(o,o.nextSibling,this,t):a.type===1?l=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(l=new hD(o,this,t)),this._$AV.push(l),a=r[++u]}s!==a?.index&&(o=wi.nextNode(),s++)}return wi.currentNode=Ei,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class Po{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=po(this,t,n),Ss(t)?t===ae||t==null||t===""?(this._$AH!==ae&&this._$AR(),this._$AH=ae):t!==this._$AH&&t!==ln&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):sD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ae&&Ss(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ei.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Is.createElement(Yg(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new cD(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=Hm.get(t.strings);return n===void 0&&Hm.set(t.strings,n=new Is(t)),n}k(t){Ff(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Po(this.O(ks()),this.O(ks()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ma{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ae}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=po(this,t,n,0),s=!Ss(t)||t!==this._$AH&&t!==ln,s&&(this._$AH=t);else{const u=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=po(this,u[r+a],n,a),l===ln&&(l=this._$AH[a]),s||=!Ss(l)||l!==this._$AH[a],l===ae?t=ae:t!==ae&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}s&&!i&&this.j(t)}j(t){t===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class fD extends Ma{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ae?void 0:t}}class dD extends Ma{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ae)}}class mD extends Ma{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=po(this,t,n,0)??ae)===ln)return;const r=this._$AH,i=t===ae&&r!==ae||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==ae&&(r===ae||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class hD{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){po(this,t)}}const pD={I:Po},gD=Af.litHtmlPolyfillSupport;gD?.(Is,Po),(Af.litHtmlVersions??=[]).push("3.3.1");const yD=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const o=n?.renderBefore??null;r._$litPart$=i=new Po(t.insertBefore(ks(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kf=globalThis;let ps=class extends Hi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yD(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ln}};ps._$litElement$=!0,ps.finalized=!0,kf.litElementHydrateSupport?.({LitElement:ps});const wD=kf.litElementPolyfillSupport;wD?.({LitElement:ps});(kf.litElementVersions??=[]).push("4.2.1");function Hr(e){if(k.isObject(e))return an(e,(n,r)=>{if(!k.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Lv(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const o=r,s=n.startsWith("--")?Ge(n):n.startsWith("-")?zu`-${Ge(n)}`:zu`--${Ge(n)}`;return{name:s,value:zu`var(${s}, ${Ge(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${Hr.name}' function.`)}function bD({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const ce=Hr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),$D={nav:{hover:{background:ce["element-book-nav-hover-background-color"],foreground:ce["element-book-nav-hover-foreground-color"]},active:{background:ce["element-book-nav-active-background-color"],foreground:ce["element-book-nav-active-foreground-color"]},selected:{background:ce["element-book-nav-selected-background-color"],foreground:ce["element-book-nav-selected-foreground-color"]}},accent:{icon:ce["element-book-accent-icon-color"]},page:{background:ce["element-book-page-background-color"],backgroundFaint1:ce["element-book-page-background-faint-level-1-color"],backgroundFaint2:ce["element-book-page-background-faint-level-2-color"],foreground:ce["element-book-page-foreground-color"],foregroundFaint1:ce["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:ce["element-book-page-foreground-faint-level-2-color"]}};function vD(e,t){Jg(e,t,$D)}function Ec(e){return k.hasKey(e,"_$cssResult$")}function Xm(e){return k.hasKeys(e,["name","value","default"])&&k.isString(e.default)&&Ec(e.name)&&Ec(e.value)}function Jg(e,t,n){Object.entries(t).forEach(([r,i])=>{const o=n[r];if(!o)throw new Error(`no nestedCssVar at key '${r}'`);if(Ec(i)){if(!Xm(o))throw new Error(`got a CSS result at '${r}' but no CSS var`);bD({forCssVar:o,onElement:e,toValue:String(i)})}else{if(Xm(o))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);Jg(e,i,o)}})}function Ce(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let r=t[0].length,i=t[0].map((s,u)=>t.map(a=>a[u])),o=e.map(s=>i.map(u=>{let a=0;if(!Array.isArray(s)){for(let l of u)a+=s*l;return a}for(let l=0;l<s.length;l++)a+=s[l]*(u[l]||0);return a}));return n===1&&(o=o[0]),r===1?o.map(s=>s[0]):o}function Ys(e){return Wr(e)==="string"}function Wr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function la(e,{precision:t,unit:n}){return zr(e)?"none":Hg(e,t)+(n??"")}function zr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function Ke(e){return zr(e)?0:e}function Hg(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const DD={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Xg(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(u,a)=>{let l=a.match(r),c=a;if(l){let f=l[0],d=c.slice(0,-f.length);f==="%"?(c=new Number(d/100),c.type="<percentage>"):(c=new Number(d*DD[f]),c.type="<angle>",c.unit=f)}else n.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);u.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=a),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function Qg(e){return e[e.length-1]}function Ns(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function ey(e,t,n){return(n-e)/(t-e)}function Sf(e,t,n){return Ns(t[0],t[1],ey(e[0],e[1],n))}function ty(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function ny(e,t,n){return Math.max(Math.min(n,t),e)}function Pa(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Xn(e,t){return Pa(Math.abs(e)**t,e)}function If(e,t){return t===0?0:e/t}function ry(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var ED=Object.freeze({__proto__:null,bisectLeft:ry,clamp:ny,copySign:Pa,interpolate:Ns,interpolateInv:ey,isNone:zr,isString:Ys,last:Qg,mapRange:Sf,multiplyMatrices:Ce,parseCoordGrammar:ty,parseFunction:Xg,serializeNumber:la,skipNone:Ke,spow:Xn,toPrecision:Hg,type:Wr,zdiv:If});class CD{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const Kr=new CD;var cn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Pt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Cc(e){return Array.isArray(e)?e:Pt[e]}function ca(e,t,n,r={}){if(e=Cc(e),t=Cc(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(Kr.run("chromatic-adaptation-start",i),i.M||(i.W1===Pt.D65&&i.W2===Pt.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Pt.D50&&i.W2===Pt.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Kr.run("chromatic-adaptation-end",i),i.M)return Ce(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const xD=new Set(["<number>","<percentage>","<angle>"]);function Qm(e,t,n,r){return Object.entries(e.coords).map(([o,s],u)=>{let a=t.coordGrammar[u],l=r[u],c=l?.type,f;if(l.none?f=a.find(C=>xD.has(C)):f=a.find(C=>C==c),!f){let C=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${C} in ${n}()`)}let d=f.range;c==="<percentage>"&&(d||=[0,1]);let g=s.range||s.refRange;return d&&g&&(r[u]=Sf(d,g,r[u])),f})}function iy(e,{meta:t}={}){let n={str:String(e)?.trim()};if(Kr.run("parse-start",n),n.color)return n.color;if(n.parsed=Xg(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],u=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let c of L.all){let f=c.getFormat("color");if(f&&(s.includes(f.id)||f.ids?.filter(d=>s.includes(d)).length)){const d=Object.keys(c.coords).map((C,$)=>n.parsed.args[$]||0);let g;return f.coordGrammar&&(g=Qm(c,f,"color",d)),t&&Object.assign(t,{formatId:"color",types:g}),f.id.startsWith("--")&&!i.startsWith("--")&&cn.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&cn.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:d,alpha:u}}}let a="",l=i in L.registry?i:o;if(l in L.registry){let c=L.registry[l].formats?.color?.id;c&&(a=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(a||"Missing a plugin?"))}else for(let i of L.all){let o=i.getFormat(r);if(o&&o.type==="function"){let s=1;(o.lastAlpha||Qg(n.parsed.args).alpha)&&(s=n.parsed.args.pop());let u=n.parsed.args,a;return o.coordGrammar&&(a=Qm(i,o,r,u)),t&&Object.assign(t,{formatId:o.name,types:a}),{spaceId:i.id,coords:u,alpha:s}}}}else for(let r of L.all)for(let i in r.formats){let o=r.formats[i];if(o.type!=="custom"||o.test&&!o.test(n.str))continue;let s=o.parse(n.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function X(e){if(Array.isArray(e))return e.map(X);if(!e)throw new TypeError("Empty color reference");Ys(e)&&(e=iy(e));let t=e.space||e.spaceId;return t instanceof L||(e.space=L.get(t)),e.alpha===void 0&&(e.alpha=1),e}const AD=75e-6;class L{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?L.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=Cc(r),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:L.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:FD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Kr.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=AD}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,o)=>{let s=r[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[u,a]=s.range;return(u===void 0||i>=u-n)&&(a===void 0||i<=a+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=eh(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=eh(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const u=X(t);[t,n]=[u.space,u.coords]}if(t=L.get(t),this.equals(t))return n;n=n.map(u=>Number.isNaN(u)?0:u);let r=this.path,i=t.path,o,s;for(let u=0;u<r.length&&r[u].equals(i[u]);u++)o=r[u],s=u;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let u=r.length-1;u>s;u--)n=r[u].toBase(n);for(let u=s+1;u<i.length;u++)n=i[u].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=X(t);[t,n]=[r.space,r.coords]}return t=L.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(L.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof L)return t;if(Wr(t)==="string"){let i=L.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return L.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=Wr(t),i,o;if(r==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=L.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Wr(o),r==="number"||r==="string"&&o>=0){let a=Object.entries(i.coords)[o];if(a)return{space:i,id:a[0],index:o,...a[1]}}i=L.get(i);let s=o.toLowerCase(),u=0;for(let a in i.coords){let l=i.coords[a];if(a.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:a,index:u,...l};u++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function FD(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function eh(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=ty(e.coords);let n=Object.entries(t).map(([r,i],o)=>{let s=e.coordGrammar[o][0],u=i.range||i.refRange,a=s.range,l="";return s=="<percentage>"?(a=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:u,toRange:a,suffix:l}});e.serializeCoords=(r,i)=>r.map((o,s)=>{let{fromRange:u,toRange:a,suffix:l}=n[s];return u&&a&&(o=Sf(u,a,o)),o=la(o,{precision:i,unit:l}),o})}return e}var dt=new L({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Xt extends L{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=dt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=Ce(t.toXYZ_M,n);return this.white!==this.base.white&&(r=ca(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=ca(this.base.white,this.white,n),Ce(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function Js(e,t){return e=X(e),!t||e.space.equals(t)?e.coords.slice():(t=L.get(t),t.from(e))}function rn(e,t){e=X(e);let{space:n,index:r}=L.resolveCoord(t,e.space);return Js(e,n)[r]}function Nf(e,t,n){return e=X(e),t=L.get(t),e.coords=t.to(e.space,n),e}Nf.returns="color";function Fr(e,t,n){if(e=X(e),arguments.length===2&&Wr(arguments[1])==="object"){let r=arguments[1];for(let i in r)Fr(e,i,r[i])}else{typeof n=="function"&&(n=n(rn(e,t)));let{space:r,index:i}=L.resolveCoord(t,e.space),o=Js(e,r);o[i]=n,Nf(e,r,o)}return e}Fr.returns="color";var Tf=new L({id:"xyz-d50",name:"XYZ D50",white:"D50",base:dt,fromBase:e=>ca(dt.white,"D50",e),toBase:e=>ca("D50",dt.white,e)});const kD=216/24389,th=24/116,xu=24389/27;let Rl=Pt.D50;var on=new L({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Rl,base:Tf,fromBase(e){let n=e.map((r,i)=>r/Rl[i]).map(r=>r>kD?Math.cbrt(r):(xu*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>th?Math.pow(t[0],3):(116*t[0]-16)/xu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/xu,t[2]>th?Math.pow(t[2],3):(116*t[2]-16)/xu].map((r,i)=>r*Rl[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function or(e){return(e%360+360)%360}function SD(e,t){if(e==="raw")return t;let[n,r]=t.map(or),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var Ts=new L({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:on,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),or(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const nh=25**7,fa=Math.PI,rh=180/fa,Ki=fa/180;function ih(e){const t=e*e;return t*t*t*e}function oy(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=X([e,t]);let[o,s,u]=on.from(e),a=Ts.from(on,[o,s,u])[1],[l,c,f]=on.from(t),d=Ts.from(on,[l,c,f])[1];a<0&&(a=0),d<0&&(d=0);let g=(a+d)/2,C=ih(g),$=.5*(1-Math.sqrt(C/(C+nh))),S=(1+$)*s,x=(1+$)*c,I=Math.sqrt(S**2+u**2),j=Math.sqrt(x**2+f**2),W=S===0&&u===0?0:Math.atan2(u,S),Z=x===0&&f===0?0:Math.atan2(f,x);W<0&&(W+=2*fa),Z<0&&(Z+=2*fa),W*=rh,Z*=rh;let Be=l-o,bt=j-I,Qe=Z-W,kt=W+Z,yn=Math.abs(Qe),In;I*j===0?In=0:yn<=180?In=Qe:Qe>180?In=Qe-360:Qe<-180?In=Qe+360:cn.warn("the unthinkable has happened");let Ui=2*Math.sqrt(j*I)*Math.sin(In*Ki/2),dl=(o+l)/2,Zo=(I+j)/2,du=ih(Zo),Nn;I*j===0?Nn=kt:yn<=180?Nn=kt/2:kt<360?Nn=(kt+360)/2:Nn=(kt-360)/2;let mu=(dl-50)**2,ml=1+.015*mu/Math.sqrt(20+mu),hu=1+.045*Zo,wn=1;wn-=.17*Math.cos((Nn-30)*Ki),wn+=.24*Math.cos(2*Nn*Ki),wn+=.32*Math.cos((3*Nn+6)*Ki),wn-=.2*Math.cos((4*Nn-63)*Ki);let We=1+.015*Zo*wn,en=30*Math.exp(-1*((Nn-275)/25)**2),_i=2*Math.sqrt(du/(du+nh)),Nr=-1*Math.sin(2*en*Ki)*_i,si=(Be/(n*ml))**2;return si+=(bt/(r*hu))**2,si+=(Ui/(i*We))**2,si+=Nr*(bt/(r*hu))*(Ui/(i*We)),Math.sqrt(si)}const ID=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],ND=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],TD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],MD=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var go=new L({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:dt,fromBase(e){let n=Ce(ID,e).map(r=>Math.cbrt(r));return Ce(TD,n)},toBase(e){let n=Ce(MD,e).map(r=>r**3);return Ce(ND,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function xc(e,t){[e,t]=X([e,t]);let[n,r,i]=go.from(e),[o,s,u]=go.from(t),a=n-o,l=r-s,c=i-u;return Math.sqrt(a**2+l**2+c**2)}const PD=75e-6;function Di(e,t,{epsilon:n=PD}={}){e=X(e),t||(t=e.space),t=L.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function yo(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function sy(e,t,n="lab"){n=L.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((o,s,u)=>{let a=i[u];return isNaN(s)||isNaN(a)?o:o+(a-s)**2},0))}function OD(e,t){return sy(e,t,"lab")}const BD=Math.PI,oh=BD/180;function RD(e,t,{l:n=2,c:r=1}={}){[e,t]=X([e,t]);let[i,o,s]=on.from(e),[,u,a]=Ts.from(on,[i,o,s]),[l,c,f]=on.from(t),d=Ts.from(on,[l,c,f])[1];u<0&&(u=0),d<0&&(d=0);let g=i-l,C=u-d,$=o-c,S=s-f,x=$**2+S**2-C**2,I=.511;i>=16&&(I=.040975*i/(1+.01765*i));let j=.0638*u/(1+.0131*u)+.638,W;Number.isNaN(a)&&(a=0),a>=164&&a<=345?W=.56+Math.abs(.2*Math.cos((a+168)*oh)):W=.36+Math.abs(.4*Math.cos((a+35)*oh));let Z=Math.pow(u,4),Be=Math.sqrt(Z/(Z+1900)),bt=j*(Be*W+1-Be),Qe=(g/(n*I))**2;return Qe+=(C/(r*j))**2,Qe+=x/bt**2,Math.sqrt(Qe)}const sh=203;var Mf=new L({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:dt,fromBase(e){return e.map(t=>Math.max(t*sh,0))},toBase(e){return e.map(t=>Math.max(t/sh,0))}});const Au=1.15,Fu=.66,uh=2610/2**14,LD=2**14/2610,ah=3424/2**12,lh=2413/2**7,ch=2392/2**7,jD=1.7*2523/2**5,fh=2**5/(1.7*2523),ku=-.56,Ll=16295499532821565e-27,UD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],_D=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],VD=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],WD=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var uy=new L({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Mf,fromBase(e){let[t,n,r]=e,i=Au*t-(Au-1)*r,o=Fu*n-(Fu-1)*t,u=Ce(UD,[i,o,r]).map(function(d){let g=ah+lh*(d/1e4)**uh,C=1+ch*(d/1e4)**uh;return(g/C)**jD}),[a,l,c]=Ce(VD,u);return[(1+ku)*a/(1+ku*a)-Ll,l,c]},toBase(e){let[t,n,r]=e,i=(t+Ll)/(1+ku-ku*(t+Ll)),s=Ce(WD,[i,n,r]).map(function(d){let g=ah-d**fh,C=ch*d**fh-lh;return 1e4*(g/C)**LD}),[u,a,l]=Ce(_D,s),c=(u+(Au-1)*l)/Au,f=(a+(Fu-1)*c)/Fu;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ac=new L({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:uy,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),or(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function qD(e,t){[e,t]=X([e,t]);let[n,r,i]=Ac.from(e),[o,s,u]=Ac.from(t),a=n-o,l=r-s;Number.isNaN(i)&&Number.isNaN(u)?(i=0,u=0):Number.isNaN(i)?i=u:Number.isNaN(u)&&(u=i);let c=i-u,f=2*Math.sqrt(r*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(a**2+l**2+f**2)}const ay=3424/4096,ly=2413/128,cy=2392/128,dh=2610/16384,zD=2523/32,KD=16384/2610,mh=32/2523,ZD=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],GD=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],YD=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],JD=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Fc=new L({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Mf,fromBase(e){let t=Ce(ZD,e);return HD(t)},toBase(e){let t=XD(e);return Ce(JD,t)}});function HD(e){let t=e.map(function(n){let r=ay+ly*(n/1e4)**dh,i=1+cy*(n/1e4)**dh;return(r/i)**zD});return Ce(GD,t)}function XD(e){return Ce(YD,e).map(function(r){let i=Math.max(r**mh-ay,0),o=ly-cy*r**mh;return 1e4*(i/o)**KD})}function QD(e,t){[e,t]=X([e,t]);let[n,r,i]=Fc.from(e),[o,s,u]=Fc.from(t);return 720*Math.sqrt((n-o)**2+.25*(r-s)**2+(i-u)**2)}const e5=Pt.D65,fy=.42,hh=1/fy,jl=2*Math.PI,dy=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],t5=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],n5=[[460,451,288],[460,-891,-261],[460,-220,-6300]],r5={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},hi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},i5=180/Math.PI,ph=Math.PI/180;function my(e,t){return e.map(r=>{const i=Xn(t*Math.abs(r)*.01,fy);return 400*Pa(i,r)/(i+27.13)})}function o5(e,t){const n=100/t*27.13**hh;return e.map(r=>{const i=Math.abs(r);return Pa(n*Xn(i/(400-i),hh),r)})}function s5(e){let t=or(e);t<=hi.h[0]&&(t+=360);const n=ry(hi.h,t)-1,[r,i]=hi.h.slice(n,n+2),[o,s]=hi.e.slice(n,n+2),u=hi.H[n],a=(t-r)/o;return u+100*a/(a+(i-t)/s)}function u5(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=hi.h.slice(n,n+2),[o,s]=hi.e.slice(n,n+2);return or((t*(s*r-o*i)-100*r*s)/(t*(s-o)-100*s))}function hy(e,t,n,r,i){const o={};o.discounting=i,o.refWhite=e,o.surround=r;const s=e.map($=>$*100);o.la=t,o.yb=n;const u=s[1],a=Ce(dy,s);r=r5[o.surround];const l=r[0];o.c=r[1],o.nc=r[2];const f=(1/(5*o.la+1))**4;o.fl=f*o.la+.1*(1-f)*(1-f)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/u,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=a.map($=>Ns(1,u/$,d)),o.dRgbInv=o.dRgb.map($=>1/$);const g=a.map(($,S)=>$*o.dRgb[S]),C=my(g,o.fl);return o.aW=o.nbb*(2*C[0]+C[1]+.05*C[2]),o}const gh=hy(e5,64/Math.PI*.2,20,"average",!1);function kc(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=or(e.h)*ph:n=u5(e.H)*ph;const r=Math.cos(n),i=Math.sin(n);let o=0;e.J!==void 0?o=Xn(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const u=Xn(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),a=.25*(Math.cos(n+2)+3.8),l=t.aW*Xn(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*a,f=l/t.nbb,d=23*(f+.305)*If(u,23*c+u*(11*r+108*i)),g=d*r,C=d*i,$=o5(Ce(n5,[f,g,C]).map(S=>S*1/1403),t.fl);return Ce(t5,$.map((S,x)=>S*t.dRgbInv[x])).map(S=>S/100)}function py(e,t){const n=e.map(j=>j*100),r=my(Ce(dy,n).map((j,W)=>j*t.dRgb[W]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,o=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(o,i)%jl+jl)%jl,u=.25*(Math.cos(s+2)+3.8),a=5e4/13*t.nc*t.ncb*If(u*Math.sqrt(i**2+o**2),r[0]+r[1]+1.05*r[2]+.305),l=Xn(a,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*r[0]+r[1]+.05*r[2]),f=Xn(c/t.aW,.5*t.c*t.z),d=100*Xn(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,C=l*f,$=C*t.flRoot,S=or(s*i5),x=s5(S),I=50*Xn(t.c*l/(t.aW+4),1/2);return{J:d,C,h:S,s:I,Q:g,M:$,H:x}}var a5=new L({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:dt,fromBase(e){const t=py(e,gh);return[t.J,t.M,t.h]},toBase(e){return kc({J:e[0],M:e[1],h:e[2]},gh)}});const l5=Pt.D65,c5=216/24389,gy=24389/27;function f5(e){return 116*(e>c5?Math.cbrt(e):(gy*e+16)/116)-16}function Sc(e){return e>8?Math.pow((e+16)/116,3):e/gy}function d5(e,t){let[n,r,i]=e,o=[],s=0;if(i===0)return[0,0,0];let u=Sc(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const a=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){o=kc({J:s,C:r,h:n},t);const d=Math.abs(o[1]-u);if(d<f){if(d<=a)return o;f=d}s=s-(o[1]-u)*s/(2*o[1]),c+=1}return kc({J:s,C:r,h:n},t)}function m5(e,t){const n=f5(e[1]);if(n===0)return[0,0,0];const r=py(e,Pf);return[or(r.h),r.C,n]}const Pf=hy(l5,200/Math.PI*Sc(50),Sc(50)*100,"average",!1);var Ms=new L({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:dt,fromBase(e){return m5(e)},toBase(e){return d5(e,Pf)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const h5=Math.PI/180,yh=[1,.007,.0228];function wh(e){e[1]<0&&(e=Ms.fromBase(Ms.toBase(e)));const t=Math.log(Math.max(1+yh[2]*e[1]*Pf.flRoot,1))/yh[2],n=e[0]*h5,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function p5(e,t){[e,t]=X([e,t]);let[n,r,i]=wh(Ms.from(e)),[o,s,u]=wh(Ms.from(t));return Math.sqrt((n-o)**2+(r-s)**2+(i-u)**2)}var wo={deltaE76:OD,deltaECMC:RD,deltaE2000:oy,deltaEJz:qD,deltaEITP:QD,deltaEOK:xc,deltaEHCT:p5};function g5(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const bh={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Zr(e,{method:t=cn.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=X(e),Ys(arguments[1])?n=arguments[1]:n||(n=e.space),n=L.get(n),Di(e,n,{epsilon:0}))return e;let s;if(t==="css")s=y5(e,{space:n});else{if(t!=="clip"&&!Di(e,n)){Object.prototype.hasOwnProperty.call(bh,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:o}=bh[t]);let u=oy;if(r!==""){for(let l in wo)if("deltae"+r.toLowerCase()===l.toLowerCase()){u=wo[l];break}}let a=Zr(Ee(e,n),{method:"clip",space:n});if(u(e,a)>i){if(Object.keys(o).length===3){let I=L.resolveCoord(o.channel),j=rn(Ee(e,I.space),I.id);if(zr(j)&&(j=0),j>=o.max)return Ee({space:"xyz-d65",coords:Pt.D65},e.space);if(j<=o.min)return Ee({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=L.resolveCoord(t),c=l.space,f=l.id,d=Ee(e,c);d.coords.forEach((I,j)=>{zr(I)&&(d.coords[j]=0)});let C=(l.range||l.refRange)[0],$=g5(i),S=C,x=rn(d,f);for(;x-S>$;){let I=yo(d);I=Zr(I,{space:n,method:"clip"}),u(d,I)-i<$?S=rn(d,f):x=rn(d,f),Fr(d,f,(S+x)/2)}s=Ee(d,n)}else s=a}else s=Ee(e,n);if(t==="clip"||!Di(s,n,{epsilon:0})){let u=Object.values(n.coords).map(a=>a.range||[]);s.coords=s.coords.map((a,l)=>{let[c,f]=u[l];return c!==void 0&&(a=Math.max(c,a)),f!==void 0&&(a=Math.min(a,f)),a})}}return n!==e.space&&(s=Ee(s,e.space)),e.coords=s.coords,e}Zr.returns="color";const $h={WHITE:{space:go,coords:[1,0,0]},BLACK:{space:go,coords:[0,0,0]}};function y5(e,{space:t}={}){e=X(e),t||(t=e.space),t=L.get(t);const i=L.get("oklch");if(t.isUnbounded)return Ee(e,t);const o=Ee(e,i);let s=o.coords[0];if(s>=1){const C=Ee($h.WHITE,t);return C.alpha=e.alpha,Ee(C,t)}if(s<=0){const C=Ee($h.BLACK,t);return C.alpha=e.alpha,Ee(C,t)}if(Di(o,t,{epsilon:0}))return Ee(o,t);function u(C){const $=Ee(C,t),S=Object.values(t.coords);return $.coords=$.coords.map((x,I)=>{if("range"in S[I]){const[j,W]=S[I].range;return ny(j,x,W)}return x}),$}let a=0,l=o.coords[1],c=!0,f=yo(o),d=u(f),g=xc(d,f);if(g<.02)return d;for(;l-a>1e-4;){const C=(a+l)/2;if(f.coords[1]=C,c&&Di(f,t,{epsilon:0}))a=C;else if(d=u(f),g=xc(d,f),g<.02){if(.02-g<1e-4)break;c=!1,a=C}else l=C}return d}function Ee(e,t,{inGamut:n}={}){e=X(e),t=L.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=Zr(i,n===!0?void 0:n)),i}Ee.returns="color";function gs(e,{precision:t=cn.precision,format:n="default",inGamut:r=!0,...i}={}){let o;e=X(e);let s=n;n=e.space.getFormat(n)??e.space.getFormat("default")??L.DEFAULT_FORMAT;let u=e.coords.slice();if(r||=n.toGamut,r&&!Di(e)&&(u=Zr(yo(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)o=n.serialize(u,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let a=n.name||"color";n.serializeCoords?u=n.serializeCoords(u,t):t!==null&&(u=u.map(d=>la(d,{precision:t})));let l=[...u];if(a==="color"){let d=n.id||n.ids?.[0]||e.space.id;l.unshift(d)}let c=e.alpha;t!==null&&(c=la(c,{precision:t}));let f=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${c}`;o=`${a}(${l.join(n.commas?", ":" ")}${f})`}return o}const w5=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],b5=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Oa=new Xt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:w5,fromXYZ_M:b5});const Su=1.09929682680944,vh=.018053968510807;var yy=new Xt({id:"rec2020",name:"REC.2020",base:Oa,toBase(e){return e.map(function(t){return t<vh*4.5?t/4.5:Math.pow((t+Su-1)/Su,1/.45)})},fromBase(e){return e.map(function(t){return t>=vh?Su*Math.pow(t,.45)-(Su-1):4.5*t})}});const $5=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],v5=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var wy=new Xt({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:$5,fromXYZ_M:v5});const D5=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],it=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var by=new Xt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:D5,fromXYZ_M:it}),Dh={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Eh=Array(3).fill("<percentage> | <number>[0, 255]"),Ch=Array(3).fill("<number>[0, 255]");var bo=new Xt({id:"srgb",name:"sRGB",base:by,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Eh},rgb_number:{name:"rgb",commas:!0,coords:Ch,noAlpha:!0},color:{},rgba:{coords:Eh,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ch},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let r=n&&e.every(o=>o%17===0);return"#"+e.map(o=>r?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Dh.black,t.alpha=0):t.coords=Dh[e],t.coords)return t}}}}),$y=new Xt({id:"p3",cssId:"display-p3",name:"P3",base:wy,fromBase:bo.fromBase,toBase:bo.toBase});cn.display_space=bo;let E5;if(typeof CSS<"u"&&CSS.supports)for(let e of[on,yy,$y]){let t=e.getMinCoords(),r=gs({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){cn.display_space=e;break}}function C5(e,{space:t=cn.display_space,...n}={}){let r=gs(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!cn.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(zr)||zr(e.alpha))&&!(E5??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=yo(e),i.coords=i.coords.map(Ke),i.alpha=Ke(i.alpha),r=gs(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=Ee(i,t),r=new String(gs(i,n)),r.color=i}return r}function x5(e,t){return e=X(e),t=X(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function Gr(e){return rn(e,[dt,"y"])}function vy(e,t){Fr(e,[dt,"y"],t)}function A5(e){Object.defineProperty(e.prototype,"luminance",{get(){return Gr(this)},set(t){vy(this,t)}})}var F5=Object.freeze({__proto__:null,getLuminance:Gr,register:A5,setLuminance:vy});function k5(e,t){e=X(e),t=X(t);let n=Math.max(Gr(e),0),r=Math.max(Gr(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const S5=.56,I5=.57,N5=.62,T5=.65,xh=.022,M5=1.414,P5=.1,O5=5e-4,B5=1.14,Ah=.027,R5=1.14;function Fh(e){return e>=xh?e:e+(xh-e)**M5}function Zi(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function L5(e,t){t=X(t),e=X(e);let n,r,i,o,s,u;t=Ee(t,"srgb"),[o,s,u]=t.coords;let a=Zi(o)*.2126729+Zi(s)*.7151522+Zi(u)*.072175;e=Ee(e,"srgb"),[o,s,u]=e.coords;let l=Zi(o)*.2126729+Zi(s)*.7151522+Zi(u)*.072175,c=Fh(a),f=Fh(l),d=f>c;return Math.abs(f-c)<O5?r=0:d?(n=f**S5-c**I5,r=n*B5):(n=f**T5-c**N5,r=n*R5),Math.abs(r)<P5?i=0:r>0?i=r-Ah:i=r+Ah,i*100}function j5(e,t){e=X(e),t=X(t);let n=Math.max(Gr(e),0),r=Math.max(Gr(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const U5=5e4;function _5(e,t){e=X(e),t=X(t);let n=Math.max(Gr(e),0),r=Math.max(Gr(t),0);return r>n&&([n,r]=[r,n]),r===0?U5:(n-r)/r}function V5(e,t){e=X(e),t=X(t);let n=rn(e,[on,"l"]),r=rn(t,[on,"l"]);return Math.abs(n-r)}const W5=216/24389,kh=24/116,Iu=24389/27;let Ul=Pt.D65;var Ic=new L({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ul,base:dt,fromBase(e){let n=e.map((r,i)=>r/Ul[i]).map(r=>r>W5?Math.cbrt(r):(Iu*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>kh?Math.pow(t[0],3):(116*t[0]-16)/Iu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Iu,t[2]>kh?Math.pow(t[2],3):(116*t[2]-16)/Iu].map((r,i)=>r*Ul[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const _l=Math.pow(5,.5)*.5+.5;function q5(e,t){e=X(e),t=X(t);let n=rn(e,[Ic,"l"]),r=rn(t,[Ic,"l"]),i=Math.abs(Math.pow(n,_l)-Math.pow(r,_l)),o=Math.pow(i,1/_l)*Math.SQRT2-40;return o<7.5?0:o}var Ku=Object.freeze({__proto__:null,contrastAPCA:L5,contrastDeltaPhi:q5,contrastLstar:V5,contrastMichelson:j5,contrastWCAG21:k5,contrastWeber:_5});function z5(e,t,n={}){Ys(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let o=Object.keys(Ku).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=X(e),t=X(t);for(let o in Ku)if("contrast"+r.toLowerCase()===o.toLowerCase())return Ku[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Ba(e){let[t,n,r]=Js(e,dt),i=t+15*n+3*r;return[4*t/i,9*n/i]}function Dy(e){let[t,n,r]=Js(e,dt),i=t+n+r;return[t/i,n/i]}function K5(e){Object.defineProperty(e.prototype,"uv",{get(){return Ba(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Dy(this)}})}var Z5=Object.freeze({__proto__:null,register:K5,uv:Ba,xy:Dy});function cs(e,t,n={}){Ys(n)&&(n={method:n});let{method:r=cn.deltaE,...i}=n;for(let o in wo)if("deltae"+r.toLowerCase()===o.toLowerCase())return wo[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function G5(e,t=.25){let r=[L.get("oklch","lch"),"l"];return Fr(e,r,i=>i*(1+t))}function Y5(e,t=.25){let r=[L.get("oklch","lch"),"l"];return Fr(e,r,i=>i*(1-t))}var J5=Object.freeze({__proto__:null,darken:Y5,lighten:G5});function Ey(e,t,n=.5,r={}){return[e,t]=[X(e),X(t)],Wr(n)==="object"&&([n,r]=[.5,n]),Hs(e,t,r)(n)}function Cy(e,t,n={}){let r;Of(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:u=1e3,...a}=n;r||([e,t]=[X(e),X(t)],r=Hs(e,t,a));let l=cs(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,f=[];if(u!==void 0&&(c=Math.min(c,u)),c===1)f=[{p:.5,color:r(.5)}];else{let d=1/(c-1);f=Array.from({length:c},(g,C)=>{let $=C*d;return{p:$,color:r($)}})}if(i>0){let d=f.reduce((g,C,$)=>{if($===0)return 0;let S=cs(C.color,f[$-1].color,o);return Math.max(g,S)},0);for(;d>i;){d=0;for(let g=1;g<f.length&&f.length<u;g++){let C=f[g-1],$=f[g],S=($.p+C.p)/2,x=r(S);d=Math.max(d,cs(x,C.color),cs(x,$.color)),f.splice(g,0,{p:S,color:r(S)}),g++}}}return f=f.map(d=>d.color),f}function Hs(e,t,n={}){if(Of(e)){let[a,l]=[e,t];return Hs(...a.rangeArgs.colors,{...a.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:o,premultiplied:s}=n;e=X(e),t=X(t),e=yo(e),t=yo(t);let u={colors:[e,t],options:n};if(r?r=L.get(r):r=L.registry[cn.interpolationSpace]||e.space,i=i?L.get(i):r,e=Ee(e,r),t=Ee(t,r),e=Zr(e),t=Zr(t),r.coords.h&&r.coords.h.type==="angle"){let a=n.hue=n.hue||"shorter",l=[r,"h"],[c,f]=[rn(e,l),rn(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=SD(a,[c,f]),Fr(e,l,c),Fr(t,l,f)}return s&&(e.coords=e.coords.map(a=>a*e.alpha),t.coords=t.coords.map(a=>a*t.alpha)),Object.assign(a=>{a=o?o(a):a;let l=e.coords.map((d,g)=>{let C=t.coords[g];return Ns(d,C,a)}),c=Ns(e.alpha,t.alpha,a),f={space:r,coords:l,alpha:c};return s&&(f.coords=f.coords.map(d=>d/c)),i!==r&&(f=Ee(f,i)),f},{rangeArgs:u})}function Of(e){return Wr(e)==="function"&&!!e.rangeArgs}cn.interpolationSpace="lab";function H5(e){e.defineFunction("mix",Ey,{returns:"color"}),e.defineFunction("range",Hs,{returns:"function<color>"}),e.defineFunction("steps",Cy,{returns:"array<color>"})}var X5=Object.freeze({__proto__:null,isRange:Of,mix:Ey,range:Hs,register:H5,steps:Cy}),xy=new L({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:bo,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,o]=e,[s,u,a]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(u=a===0||a===1?0:(t-a)/Math.min(a,1-a),t){case r:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-r)/l+2;break;case o:s=(r-i)/l+4}s=s*60}return u<0&&(s+=180,u=Math.abs(u)),s>=360&&(s-=360),[s,u*100,a*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(o){let s=(o+t/30)%12,u=n*Math.min(r,1-r);return r-u*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ay=new L({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:xy,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Q5=new L({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ay,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let u=n/i;return[t,0,u*100]}let o=1-r,s=o===0?0:1-n/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const eE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],tE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Fy=new Xt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:eE,fromXYZ_M:tE}),nE=new Xt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Fy,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const rE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],iE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var ky=new Xt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Tf,toXYZ_M:rE,fromXYZ_M:iE});const oE=1/512,sE=16/512;var uE=new Xt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:ky,toBase(e){return e.map(t=>t<sE?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=oE?t**(1/1.8):16*t)}}),aE=new L({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:go,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),or(i)]},toBase(e){let[t,n,r]=e,i,o;return isNaN(r)?(i=0,o=0):(i=n*Math.cos(r*Math.PI/180),o=n*Math.sin(r*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Sy=Pt.D65;const lE=216/24389,Sh=24389/27,[Ih,Nh]=Ba({space:dt,coords:Sy});var Iy=new L({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Sy,base:dt,fromBase(e){let t=[Ke(e[0]),Ke(e[1]),Ke(e[2])],n=t[1],[r,i]=Ba({space:dt,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let o=n<=lE?Sh*n:116*Math.cbrt(n)-16;return[o,13*o*(r-Ih),13*o*(i-Nh)]},toBase(e){let[t,n,r]=e;if(t===0||zr(t))return[0,0,0];n=Ke(n),r=Ke(r);let i=n/(13*t)+Ih,o=r/(13*t)+Nh,s=t<=8?t/Sh:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Bf=new L({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Iy,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),or(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const cE=216/24389,fE=24389/27,Th=it[0][0],Mh=it[0][1],Vl=it[0][2],Ph=it[1][0],Oh=it[1][1],Wl=it[1][2],Bh=it[2][0],Rh=it[2][1],ql=it[2][2];function Gi(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function da(e){const t=Math.pow(e+16,3)/1560896,n=t>cE?t:e/fE,r=n*(284517*Th-94839*Vl),i=n*(838422*Vl+769860*Mh+731718*Th),o=n*(632260*Vl-126452*Mh),s=n*(284517*Ph-94839*Wl),u=n*(838422*Wl+769860*Oh+731718*Ph),a=n*(632260*Wl-126452*Oh),l=n*(284517*Bh-94839*ql),c=n*(838422*ql+769860*Rh+731718*Bh),f=n*(632260*ql-126452*Rh);return{r0s:r/o,r0i:i*e/o,r1s:r/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/a,g0i:u*e/a,g1s:s/(a+126452),g1i:(u-769860)*e/(a+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function Lh(e,t){const n=t/360*Math.PI*2,r=Gi(e.r0s,e.r0i,n),i=Gi(e.r1s,e.r1i,n),o=Gi(e.g0s,e.g0i,n),s=Gi(e.g1s,e.g1i,n),u=Gi(e.b0s,e.b0i,n),a=Gi(e.b1s,e.b1i,n);return Math.min(r,i,o,s,u,a)}var dE=new L({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Bf,gamutSpace:bo,fromBase(e){let[t,n,r]=[Ke(e[0]),Ke(e[1]),Ke(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=da(t),s=Lh(o,r);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[Ke(e[0]),Ke(e[1]),Ke(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=da(r);i=Lh(o,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});it[0][0];it[0][1];it[0][2];it[1][0];it[1][1];it[1][2];it[2][0];it[2][1];it[2][2];function Yi(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function jh(e){let t=Yi(e.r0s,e.r0i),n=Yi(e.r1s,e.r1i),r=Yi(e.g0s,e.g0i),i=Yi(e.g1s,e.g1i),o=Yi(e.b0s,e.b0i),s=Yi(e.b1s,e.b1i);return Math.min(t,n,r,i,o,s)}var mE=new L({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Bf,gamutSpace:"self",fromBase(e){let[t,n,r]=[Ke(e[0]),Ke(e[1]),Ke(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=da(t),s=jh(o);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[Ke(e[0]),Ke(e[1]),Ke(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=da(r);i=jh(o)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Uh=203,_h=2610/2**14,hE=2**14/2610,pE=2523/2**5,Vh=2**5/2523,Wh=3424/2**12,qh=2413/2**7,zh=2392/2**7;var gE=new Xt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Oa,toBase(e){return e.map(function(t){return(Math.max(t**Vh-Wh,0)/(qh-zh*t**Vh))**hE*1e4/Uh})},fromBase(e){return e.map(function(t){let n=Math.max(t*Uh/1e4,0),r=Wh+qh*n**_h,i=1+zh*n**_h;return(r/i)**pE})}});const Kh=.17883277,Zh=.28466892,Gh=.55991073,zl=3.7743;var yE=new Xt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Oa,toBase(e){return e.map(function(t){return t<=.5?t**2/3*zl:(Math.exp((t-Gh)/Kh)+Zh)/12*zl})},fromBase(e){return e.map(function(t){return t/=zl,t<=1/12?Math.sqrt(3*t):Kh*Math.log(12*t-Zh)+Gh})}});const Ny={};Kr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Ty(e.W1,e.W2,e.options.method))});Kr.add("chromatic-adaptation-end",e=>{e.M||(e.M=Ty(e.W1,e.W2,e.options.method))});function Ra({id:e,toCone_M:t,fromCone_M:n}){Ny[e]=arguments[0]}function Ty(e,t,n="Bradford"){let r=Ny[n],[i,o,s]=Ce(r.toCone_M,e),[u,a,l]=Ce(r.toCone_M,t),c=[[u/i,0,0],[0,a/o,0],[0,0,l/s]],f=Ce(c,r.toCone_M);return Ce(r.fromCone_M,f)}Ra({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Ra({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Ra({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Ra({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Pt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Pt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const wE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],bE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var My=new Xt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Pt.ACES,toXYZ_M:wE,fromXYZ_M:bE});const Nu=2**-16,Kl=-.35828683,Tu=(Math.log2(65504)+9.72)/17.52;var $E=new Xt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Kl,Tu],name:"Red"},g:{range:[Kl,Tu],name:"Green"},b:{range:[Kl,Tu],name:"Blue"}},referred:"scene",base:My,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Nu)*2:n<Tu?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Nu)+9.72)/17.52:t<Nu?(Math.log2(Nu+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Yh=Object.freeze({__proto__:null,A98RGB:nE,A98RGB_Linear:Fy,ACEScc:$E,ACEScg:My,CAM16_JMh:a5,HCT:Ms,HPLuv:mE,HSL:xy,HSLuv:dE,HSV:Ay,HWB:Q5,ICTCP:Fc,JzCzHz:Ac,Jzazbz:uy,LCH:Ts,LCHuv:Bf,Lab:on,Lab_D65:Ic,Luv:Iy,OKLCH:aE,OKLab:go,P3:$y,P3_Linear:wy,ProPhoto:uE,ProPhoto_Linear:ky,REC_2020:yy,REC_2020_Linear:Oa,REC_2100_HLG:yE,REC_2100_PQ:gE,XYZ_ABS_D65:Mf,XYZ_D50:Tf,XYZ_D65:dt,sRGB:bo,sRGB_Linear:by});let ye=class jt{constructor(...t){let n;t.length===1&&(n=X(t[0]));let r,i,o;n?(r=n.space||n.spaceId,i=n.coords,o=n.alpha):[r,i,o]=t,Object.defineProperty(this,"space",{value:L.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:u=>this.set(s,u)})}get spaceId(){return this.space.id}clone(){return new jt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=C5(this,...t);return n.color=new jt(n.color),n}static get(t,...n){return t instanceof jt?t:new jt(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:o}=r,s=function(...u){let a=n(...u);if(o==="color")a=jt.get(a);else if(o==="function<color>"){let l=a;a=function(...c){let f=l(...c);return jt.get(f)},Object.assign(a,l)}else o==="array<color>"&&(a=a.map(l=>jt.get(l)));return a};t in jt||(jt[t]=s),i&&(jt.prototype[t]=function(...u){return s(this,...u)})}static defineFunctions(t){for(let n in t)jt.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(jt);else for(let n in t)jt.defineFunction(n,t[n])}};ye.defineFunctions({get:rn,getAll:Js,set:Fr,setAll:Nf,to:Ee,equals:x5,inGamut:Di,toGamut:Zr,distance:sy,toString:gs});Object.assign(ye,{util:ED,hooks:Kr,WHITES:Pt,Space:L,spaces:L.registry,parse:iy,defaults:cn});for(let e of Object.keys(Yh))L.register(Yh[e]);for(let e in L.registry)Nc(e,L.registry[e]);Kr.add("colorspace-init-end",e=>{Nc(e.id,e),e.aliases?.forEach(t=>{Nc(t,e)})});function Nc(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(ye.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,o)=>{try{return L.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:u}=L.resolveCoord([t,o]);if(u>=0)return i[u]}return Reflect.get(i,o,s)},set:(i,o,s,u)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:a}=L.resolveCoord([t,o]);if(a>=0)return i[a]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,u)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}ye.extend(wo);ye.extend({deltaE:cs});Object.assign(ye,{deltaEMethods:wo});ye.extend(J5);ye.extend({contrast:z5});ye.extend(Z5);ye.extend(F5);ye.extend(X5);ye.extend(Ku);const vE=Symbol("no update");class Zl extends Jr()("observable-value-update"){}class DE extends jg("observable-destroy"){}class EE{listenTarget=new wf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];if(n===vE)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)){const i=this.value;return this.value=n,this.listenTarget.dispatch(new Zl({detail:[n,i]})),!0}return!1}listen(t,n){const r=i=>n(...i.detail);return this.listenerMap.set(n,r),t&&n(this.value,void 0),this.listenTarget.listen(Zl,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(Zl,n)}destroy(){this.listenTarget.dispatch(new DE),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function CE(e,t){return H$(e,t,(n,r)=>k.isFunction(n)&&k.isFunction(r)?!0:k.strictEquals(n,r))}function xE(e){return Je(e)&&!Qt(e)&&!Qs(e)&&Symbol.asyncIterator in e}function Qt(e){return Array.isArray(e)}function Py(e){return typeof e=="bigint"}function Xs(e){return typeof e=="boolean"}function Rf(e){return e instanceof globalThis.Date}function AE(e){return typeof e=="function"}function FE(e){return Je(e)&&!Qt(e)&&!Qs(e)&&Symbol.iterator in e}function kE(e){return e===null}function rr(e){return typeof e=="number"}function Je(e){return typeof e=="object"&&e!==null}function Oy(e){return e instanceof globalThis.RegExp}function Ve(e){return typeof e=="string"}function SE(e){return typeof e=="symbol"}function Qs(e){return e instanceof globalThis.Uint8Array}function Ze(e){return e===void 0}function IE(e){return e.map(t=>ma(t))}function NE(e){return new Date(e.getTime())}function TE(e){return new Uint8Array(e)}function ME(e){return new RegExp(e.source,e.flags)}function PE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=ma(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=ma(e[n]);return t}function ma(e){return Qt(e)?IE(e):Rf(e)?NE(e):Qs(e)?TE(e):Oy(e)?ME(e):Je(e)?PE(e):e}function fn(e){return ma(e)}function Lf(e,t){return fn(t===void 0?e:{...t,...e})}function By(e){return sr(e)&&globalThis.Symbol.asyncIterator in e}function Ry(e){return sr(e)&&globalThis.Symbol.iterator in e}function Ly(e){return e instanceof globalThis.Promise}function jf(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Uf(e){return e instanceof globalThis.Uint8Array}function jy(e,t){return t in e}function sr(e){return e!==null&&typeof e=="object"}function dn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function Xr(e){return e===void 0}function La(e){return e===null}function ja(e){return typeof e=="boolean"}function ee(e){return typeof e=="number"}function Uy(e){return globalThis.Number.isInteger(e)}function wr(e){return typeof e=="bigint"}function un(e){return typeof e=="string"}function _y(e){return typeof e=="function"}function Ua(e){return typeof e=="symbol"}function Vy(e){return wr(e)||ja(e)||La(e)||ee(e)||un(e)||Ua(e)||Xr(e)}var Ue;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,u){return e.ExactOptionalPropertyTypes?u in s:s[u]!==void 0}e.IsExactOptionalProperty=t;function n(s){const u=sr(s);return e.AllowArrayObject?u:u&&!dn(s)}e.IsObjectLike=n;function r(s){return n(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=r;function i(s){return e.AllowNaN?ee(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const u=Xr(s);return e.AllowNullVoid?u||s===null:u}e.IsVoidLike=o})(Ue||(Ue={}));function OE(e){return globalThis.Object.freeze(e).map(t=>ha(t))}function BE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=ha(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=ha(e[n]);return globalThis.Object.freeze(t)}function ha(e){return Qt(e)?OE(e):Rf(e)?e:Qs(e)?e:Oy(e)?e:Je(e)?BE(e):e}function M(e,t){const n=t!==void 0?{...t,...e}:e;switch(Ue.InstanceMode){case"freeze":return ha(n);case"clone":return fn(n);default:return n}}class gt extends Error{constructor(t){super(t)}}const qt=Symbol.for("TypeBox.Transform"),eu=Symbol.for("TypeBox.Readonly"),Sr=Symbol.for("TypeBox.Optional"),_a=Symbol.for("TypeBox.Hint"),T=Symbol.for("TypeBox.Kind");function _f(e){return Je(e)&&e[eu]==="Readonly"}function Qr(e){return Je(e)&&e[Sr]==="Optional"}function Wy(e){return se(e,"Any")}function qy(e){return se(e,"Argument")}function Oo(e){return se(e,"Array")}function Va(e){return se(e,"AsyncIterator")}function Wa(e){return se(e,"BigInt")}function tu(e){return se(e,"Boolean")}function Bo(e){return se(e,"Computed")}function Ro(e){return se(e,"Constructor")}function RE(e){return se(e,"Date")}function Lo(e){return se(e,"Function")}function jo(e){return se(e,"Integer")}function An(e){return se(e,"Intersect")}function qa(e){return se(e,"Iterator")}function se(e,t){return Je(e)&&T in e&&e[T]===t}function zy(e){return Xs(e)||rr(e)||Ve(e)}function Ii(e){return se(e,"Literal")}function Ni(e){return se(e,"MappedKey")}function gn(e){return se(e,"MappedResult")}function nu(e){return se(e,"Never")}function LE(e){return se(e,"Not")}function Vf(e){return se(e,"Null")}function Uo(e){return se(e,"Number")}function Gn(e){return se(e,"Object")}function za(e){return se(e,"Promise")}function Ka(e){return se(e,"Record")}function Jt(e){return se(e,"Ref")}function Ky(e){return se(e,"RegExp")}function ru(e){return se(e,"String")}function Wf(e){return se(e,"Symbol")}function Ti(e){return se(e,"TemplateLiteral")}function jE(e){return se(e,"This")}function be(e){return Je(e)&&qt in e}function Mi(e){return se(e,"Tuple")}function iu(e){return se(e,"Undefined")}function lt(e){return se(e,"Union")}function UE(e){return se(e,"Uint8Array")}function _E(e){return se(e,"Unknown")}function VE(e){return se(e,"Unsafe")}function WE(e){return se(e,"Void")}function qE(e){return Je(e)&&T in e&&Ve(e[T])}function Ot(e){return Wy(e)||qy(e)||Oo(e)||tu(e)||Wa(e)||Va(e)||Bo(e)||Ro(e)||RE(e)||Lo(e)||jo(e)||An(e)||qa(e)||Ii(e)||Ni(e)||gn(e)||nu(e)||LE(e)||Vf(e)||Uo(e)||Gn(e)||za(e)||Ka(e)||Jt(e)||Ky(e)||ru(e)||Wf(e)||Ti(e)||jE(e)||Mi(e)||iu(e)||lt(e)||UE(e)||_E(e)||VE(e)||WE(e)||qE(e)}const zE=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Zy(e){try{return new RegExp(e),!0}catch{return!1}}function qf(e){if(!Ve(e))return!1;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function Gy(e){return zf(e)||ke(e)}function ns(e){return Ze(e)||Py(e)}function ge(e){return Ze(e)||rr(e)}function zf(e){return Ze(e)||Xs(e)}function pe(e){return Ze(e)||Ve(e)}function KE(e){return Ze(e)||Ve(e)&&qf(e)&&Zy(e)}function ZE(e){return Ze(e)||Ve(e)&&qf(e)}function Yy(e){return Ze(e)||ke(e)}function pa(e){return Je(e)&&e[Sr]==="Optional"}function Wn(e){return ue(e,"Any")&&pe(e.$id)}function GE(e){return ue(e,"Argument")&&rr(e.index)}function Pi(e){return ue(e,"Array")&&e.type==="array"&&pe(e.$id)&&ke(e.items)&&ge(e.minItems)&&ge(e.maxItems)&&zf(e.uniqueItems)&&Yy(e.contains)&&ge(e.minContains)&&ge(e.maxContains)}function Kf(e){return ue(e,"AsyncIterator")&&e.type==="AsyncIterator"&&pe(e.$id)&&ke(e.items)}function Za(e){return ue(e,"BigInt")&&e.type==="bigint"&&pe(e.$id)&&ns(e.exclusiveMaximum)&&ns(e.exclusiveMinimum)&&ns(e.maximum)&&ns(e.minimum)&&ns(e.multipleOf)}function Oi(e){return ue(e,"Boolean")&&e.type==="boolean"&&pe(e.$id)}function YE(e){return ue(e,"Computed")&&Ve(e.target)&&Qt(e.parameters)&&e.parameters.every(t=>ke(t))}function Ga(e){return ue(e,"Constructor")&&e.type==="Constructor"&&pe(e.$id)&&Qt(e.parameters)&&e.parameters.every(t=>ke(t))&&ke(e.returns)}function Ya(e){return ue(e,"Date")&&e.type==="Date"&&pe(e.$id)&&ge(e.exclusiveMaximumTimestamp)&&ge(e.exclusiveMinimumTimestamp)&&ge(e.maximumTimestamp)&&ge(e.minimumTimestamp)&&ge(e.multipleOfTimestamp)}function Ja(e){return ue(e,"Function")&&e.type==="Function"&&pe(e.$id)&&Qt(e.parameters)&&e.parameters.every(t=>ke(t))&&ke(e.returns)}function Ir(e){return ue(e,"Integer")&&e.type==="integer"&&pe(e.$id)&&ge(e.exclusiveMaximum)&&ge(e.exclusiveMinimum)&&ge(e.maximum)&&ge(e.minimum)&&ge(e.multipleOf)}function Jy(e){return Je(e)&&Object.entries(e).every(([t,n])=>qf(t)&&ke(n))}function Bi(e){return ue(e,"Intersect")&&!(Ve(e.type)&&e.type!=="object")&&Qt(e.allOf)&&e.allOf.every(t=>ke(t)&&!tC(t))&&pe(e.type)&&(zf(e.unevaluatedProperties)||Yy(e.unevaluatedProperties))&&pe(e.$id)}function Zf(e){return ue(e,"Iterator")&&e.type==="Iterator"&&pe(e.$id)&&ke(e.items)}function ue(e,t){return Je(e)&&T in e&&e[T]===t}function Hy(e){return ei(e)&&Ve(e.const)}function Xy(e){return ei(e)&&rr(e.const)}function Qy(e){return ei(e)&&Xs(e.const)}function ei(e){return ue(e,"Literal")&&pe(e.$id)&&JE(e.const)}function JE(e){return Xs(e)||rr(e)||Ve(e)}function HE(e){return ue(e,"MappedKey")&&Qt(e.keys)&&e.keys.every(t=>rr(t)||Ve(t))}function XE(e){return ue(e,"MappedResult")&&Jy(e.properties)}function ti(e){return ue(e,"Never")&&Je(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function $o(e){return ue(e,"Not")&&ke(e.not)}function Gf(e){return ue(e,"Null")&&e.type==="null"&&pe(e.$id)}function zt(e){return ue(e,"Number")&&e.type==="number"&&pe(e.$id)&&ge(e.exclusiveMaximum)&&ge(e.exclusiveMinimum)&&ge(e.maximum)&&ge(e.minimum)&&ge(e.multipleOf)}function Se(e){return ue(e,"Object")&&e.type==="object"&&pe(e.$id)&&Jy(e.properties)&&Gy(e.additionalProperties)&&ge(e.minProperties)&&ge(e.maxProperties)}function Yf(e){return ue(e,"Promise")&&e.type==="Promise"&&pe(e.$id)&&ke(e.item)}function ht(e){return ue(e,"Record")&&e.type==="object"&&pe(e.$id)&&Gy(e.additionalProperties)&&Je(e.patternProperties)&&(t=>{const n=Object.getOwnPropertyNames(t.patternProperties);return n.length===1&&Zy(n[0])&&Je(t.patternProperties)&&ke(t.patternProperties[n[0]])})(e)}function QE(e){return ue(e,"Ref")&&pe(e.$id)&&Ve(e.$ref)}function Ps(e){return ue(e,"RegExp")&&pe(e.$id)&&Ve(e.source)&&Ve(e.flags)&&ge(e.maxLength)&&ge(e.minLength)}function qn(e){return ue(e,"String")&&e.type==="string"&&pe(e.$id)&&ge(e.minLength)&&ge(e.maxLength)&&KE(e.pattern)&&ZE(e.format)}function Os(e){return ue(e,"Symbol")&&e.type==="symbol"&&pe(e.$id)}function Bs(e){return ue(e,"TemplateLiteral")&&e.type==="string"&&Ve(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function eC(e){return ue(e,"This")&&pe(e.$id)&&Ve(e.$ref)}function tC(e){return Je(e)&&qt in e}function Ha(e){return ue(e,"Tuple")&&e.type==="array"&&pe(e.$id)&&rr(e.minItems)&&rr(e.maxItems)&&e.minItems===e.maxItems&&(Ze(e.items)&&Ze(e.additionalItems)&&e.minItems===0||Qt(e.items)&&e.items.every(t=>ke(t)))}function Ci(e){return ue(e,"Undefined")&&e.type==="undefined"&&pe(e.$id)}function kr(e){return ue(e,"Union")&&pe(e.$id)&&Je(e)&&Qt(e.anyOf)&&e.anyOf.every(t=>ke(t))}function ou(e){return ue(e,"Uint8Array")&&e.type==="Uint8Array"&&pe(e.$id)&&ge(e.minByteLength)&&ge(e.maxByteLength)}function zn(e){return ue(e,"Unknown")&&pe(e.$id)}function nC(e){return ue(e,"Unsafe")}function Xa(e){return ue(e,"Void")&&e.type==="void"&&pe(e.$id)}function rC(e){return Je(e)&&T in e&&Ve(e[T])&&!zE.includes(e[T])}function ke(e){return Je(e)&&(Wn(e)||GE(e)||Pi(e)||Oi(e)||Za(e)||Kf(e)||YE(e)||Ga(e)||Ya(e)||Ja(e)||Ir(e)||Bi(e)||Zf(e)||ei(e)||HE(e)||XE(e)||ti(e)||$o(e)||Gf(e)||zt(e)||Se(e)||Yf(e)||ht(e)||QE(e)||Ps(e)||qn(e)||Os(e)||Bs(e)||eC(e)||Ha(e)||Ci(e)||kr(e)||ou(e)||zn(e)||nC(e)||Xa(e)||rC(e))}const iC="(true|false)",Zu="(0|[1-9][0-9]*)",e1="(.*)",oC="(?!.*)",vo=`^${Zu}$`,Do=`^${e1}$`,sC=`^${oC}$`,t1=new Map;function Jf(e){return t1.has(e)}function Hf(e){return t1.get(e)}const Xf=new Map;function xi(e){return Xf.has(e)}function n1(e,t){Xf.set(e,t)}function Qf(e){return Xf.get(e)}function uC(e,t){return e.includes(t)}function aC(e){return[...new Set(e)]}function lC(e,t){return e.filter(n=>t.includes(n))}function cC(e,t){return e.reduce((n,r)=>lC(n,r),t)}function fC(e){return e.length===1?e[0]:e.length>1?cC(e.slice(1),e[0]):[]}function dC(e){const t=[];for(const n of e)t.push(...n);return t}function Rs(e){return M({[T]:"Any"},e)}function ed(e,t){return M({[T]:"Array",type:"array",items:e},t)}function mC(e){return M({[T]:"Argument",index:e})}function td(e,t){return M({[T]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function nt(e,t,n){return M({[T]:"Computed",target:e,parameters:t},n)}function hC(e,t){const{[t]:n,...r}=e;return r}function mn(e,t){return t.reduce((n,r)=>hC(n,r),e)}function Ie(e){return M({[T]:"Never",not:{}},e)}function yt(e){return M({[T]:"MappedResult",properties:e})}function nd(e,t,n){return M({[T]:"Constructor",type:"Constructor",parameters:e,returns:t},n)}function su(e,t,n){return M({[T]:"Function",type:"Function",parameters:e,returns:t},n)}function Tc(e,t){return M({[T]:"Union",anyOf:e},t)}function pC(e){return e.some(t=>Qr(t))}function Jh(e){return e.map(t=>Qr(t)?gC(t):t)}function gC(e){return mn(e,[Sr])}function yC(e,t){return pC(e)?ii(Tc(Jh(e),t)):Tc(Jh(e),t)}function _o(e,t){return e.length===1?M(e[0],t):e.length===0?Ie(t):yC(e,t)}function wt(e,t){return e.length===0?Ie(t):e.length===1?M(e[0],t):Tc(e,t)}class Hh extends gt{}function wC(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function rd(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function Dr(e,t){return rd(e,t,"(")}function Ls(e,t){return rd(e,t,")")}function r1(e,t){return rd(e,t,"|")}function bC(e){if(!(Dr(e,0)&&Ls(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(Dr(e,n)&&(t+=1),Ls(e,n)&&(t-=1),t===0&&n!==e.length-1)return!1;return!0}function $C(e){return e.slice(1,e.length-1)}function vC(e){let t=0;for(let n=0;n<e.length;n++)if(Dr(e,n)&&(t+=1),Ls(e,n)&&(t-=1),r1(e,n)&&t===0)return!0;return!1}function DC(e){for(let t=0;t<e.length;t++)if(Dr(e,t))return!0;return!1}function EC(e){let[t,n]=[0,0];const r=[];for(let o=0;o<e.length;o++)if(Dr(e,o)&&(t+=1),Ls(e,o)&&(t-=1),r1(e,o)&&t===0){const s=e.slice(n,o);s.length>0&&r.push(Eo(s)),n=o+1}const i=e.slice(n);return i.length>0&&r.push(Eo(i)),r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"or",expr:r}}function CC(e){function t(i,o){if(!Dr(i,o))throw new Hh("TemplateLiteralParser: Index must point to open parens");let s=0;for(let u=o;u<i.length;u++)if(Dr(i,u)&&(s+=1),Ls(i,u)&&(s-=1),s===0)return[o,u];throw new Hh("TemplateLiteralParser: Unclosed group parens in expression")}function n(i,o){for(let s=o;s<i.length;s++)if(Dr(i,s))return[o,s];return[o,i.length]}const r=[];for(let i=0;i<e.length;i++)if(Dr(e,i)){const[o,s]=t(e,i),u=e.slice(o,s+1);r.push(Eo(u)),i=s}else{const[o,s]=n(e,i),u=e.slice(o,s);u.length>0&&r.push(Eo(u)),i=s-1}return r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"and",expr:r}}function Eo(e){return bC(e)?Eo($C(e)):vC(e)?EC(e):DC(e)?CC(e):{type:"const",const:wC(e)}}function id(e){return Eo(e.slice(1,e.length-1))}class xC extends gt{}function AC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function FC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function kC(e){return e.type==="const"&&e.const===".*"}function js(e){return AC(e)||kC(e)?!1:FC(e)?!0:e.type==="and"?e.expr.every(t=>js(t)):e.type==="or"?e.expr.every(t=>js(t)):e.type==="const"?!0:(()=>{throw new xC("Unknown expression type")})()}function SC(e){const t=id(e.pattern);return js(t)}class IC extends gt{}function*i1(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const n of i1(e.slice(1)))yield`${t}${n}`}function*NC(e){return yield*i1(e.expr.map(t=>[...Qa(t)]))}function*TC(e){for(const t of e.expr)yield*Qa(t)}function*MC(e){return yield e.const}function*Qa(e){return e.type==="and"?yield*NC(e):e.type==="or"?yield*TC(e):e.type==="const"?yield*MC(e):(()=>{throw new IC("Unknown expression")})()}function o1(e){const t=id(e.pattern);return js(t)?[...Qa(t)]:[]}function Ye(e,t){return M({[T]:"Literal",const:e,type:typeof e},t)}function s1(e){return M({[T]:"Boolean",type:"boolean"},e)}function od(e){return M({[T]:"BigInt",type:"bigint"},e)}function Ri(e){return M({[T]:"Number",type:"number"},e)}function Ai(e){return M({[T]:"String",type:"string"},e)}function*PC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield s1():t==="number"?yield Ri():t==="bigint"?yield od():t==="string"?yield Ai():yield(()=>{const n=t.split("|").map(r=>Ye(r.trim()));return n.length===0?Ie():n.length===1?n[0]:_o(n)})()}function*OC(e){if(e[1]!=="{"){const t=Ye("$"),n=Mc(e.slice(1));return yield*[t,...n]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const n=PC(e.slice(2,t)),r=Mc(e.slice(t+1));return yield*[...n,...r]}yield Ye(e)}function*Mc(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const n=Ye(e.slice(0,t)),r=OC(e.slice(t));return yield*[n,...r]}yield Ye(e)}function BC(e){return[...Mc(e)]}class RC extends gt{}function LC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function u1(e,t){return Ti(e)?e.pattern.slice(1,e.pattern.length-1):lt(e)?`(${e.anyOf.map(n=>u1(n,t)).join("|")})`:Uo(e)?`${t}${Zu}`:jo(e)?`${t}${Zu}`:Wa(e)?`${t}${Zu}`:ru(e)?`${t}${e1}`:Ii(e)?`${t}${LC(e.const.toString())}`:tu(e)?`${t}${iC}`:(()=>{throw new RC(`Unexpected Kind '${e[T]}'`)})()}function Xh(e){return`^${e.map(t=>u1(t,"")).join("")}$`}function ga(e){const n=o1(e).map(r=>Ye(r));return _o(n)}function a1(e,t){const n=Ve(e)?Xh(BC(e)):Xh(e);return M({[T]:"TemplateLiteral",type:"string",pattern:n},t)}function jC(e){return o1(e).map(n=>n.toString())}function UC(e){const t=[];for(const n of e)t.push(...ni(n));return t}function _C(e){return[e.toString()]}function ni(e){return[...new Set(Ti(e)?jC(e):lt(e)?UC(e.anyOf):Ii(e)?_C(e.const):Uo(e)?["[number]"]:jo(e)?["[number]"]:[])]}function VC(e,t,n){const r={};for(const i of Object.getOwnPropertyNames(t))r[i]=el(e,ni(t[i]),n);return r}function WC(e,t,n){return VC(e,t.properties,n)}function qC(e,t,n){const r=WC(e,t,n);return yt(r)}function l1(e,t){return e.map(n=>c1(n,t))}function zC(e){return e.filter(t=>!nu(t))}function KC(e,t){return m1(zC(l1(e,t)))}function ZC(e){return e.some(t=>nu(t))?[]:e}function GC(e,t){return _o(ZC(l1(e,t)))}function YC(e,t){return t in e?e[t]:t==="[number]"?_o(e):Ie()}function JC(e,t){return t==="[number]"?e:Ie()}function HC(e,t){return t in e?e[t]:Ie()}function c1(e,t){return An(e)?KC(e.allOf,t):lt(e)?GC(e.anyOf,t):Mi(e)?YC(e.items??[],t):Oo(e)?JC(e.items,t):Gn(e)?HC(e.properties,t):Ie()}function sd(e,t){return t.map(n=>c1(e,n))}function Qh(e,t){return _o(sd(e,t))}function el(e,t,n){if(Jt(e)||Jt(t)){const r="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Ot(e)||!Ot(t))throw new gt(r);return nt("Index",[e,t])}return gn(t)?qC(e,t,n):Ni(t)?tx(e,t,n):M(Ot(t)?Qh(e,ni(t)):Qh(e,t),n)}function XC(e,t,n){return{[t]:el(e,[t],fn(n))}}function QC(e,t,n){return t.reduce((r,i)=>({...r,...XC(e,i,n)}),{})}function ex(e,t,n){return QC(e,t.keys,n)}function tx(e,t,n){const r=ex(e,t,n);return yt(r)}function ud(e,t){return M({[T]:"Iterator",type:"Iterator",items:e},t)}function nx(e){const t=[];for(let n in e)Qr(e[n])||t.push(n);return t}function rx(e,t){const n=nx(e),r=n.length>0?{[T]:"Object",type:"object",properties:e,required:n}:{[T]:"Object",type:"object",properties:e};return M(r,t)}var at=rx;function f1(e,t){return M({[T]:"Promise",type:"Promise",item:e},t)}function ix(e){return M(mn(e,[eu]))}function ox(e){return M({...e,[eu]:"Readonly"})}function sx(e,t){return t===!1?ix(e):ox(e)}function ri(e,t){const n=t??!0;return gn(e)?lx(e,n):sx(e,n)}function ux(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=ri(e[r],t);return n}function ax(e,t){return ux(e.properties,t)}function lx(e,t){const n=ax(e,t);return yt(n)}function Vo(e,t){return M(e.length>0?{[T]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[T]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function d1(e,t){return e in t?$n(e,t[e]):yt(t)}function cx(e){return{[e]:Ye(e)}}function fx(e){const t={};for(const n of e)t[n]=Ye(n);return t}function dx(e,t){return uC(t,e)?cx(e):fx(t)}function mx(e,t){const n=dx(e,t);return d1(e,n)}function rs(e,t){return t.map(n=>$n(e,n))}function hx(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(t))n[r]=$n(e,t[r]);return n}function $n(e,t){const n={...t};return Qr(t)?ii($n(e,mn(t,[Sr]))):_f(t)?ri($n(e,mn(t,[eu]))):gn(t)?d1(e,t.properties):Ni(t)?mx(e,t.keys):Ro(t)?nd(rs(e,t.parameters),$n(e,t.returns),n):Lo(t)?su(rs(e,t.parameters),$n(e,t.returns),n):Va(t)?td($n(e,t.items),n):qa(t)?ud($n(e,t.items),n):An(t)?oi(rs(e,t.allOf),n):lt(t)?wt(rs(e,t.anyOf),n):Mi(t)?Vo(rs(e,t.items??[]),n):Gn(t)?at(hx(e,t.properties),n):Oo(t)?ed($n(e,t.items),n):za(t)?f1($n(e,t.item),n):t}function px(e,t){const n={};for(const r of e)n[r]=$n(r,t);return n}function gx(e,t,n){const r=Ot(e)?ni(e):e,i=t({[T]:"MappedKey",keys:r}),o=px(r,i);return at(o,n)}function yx(e){return M(mn(e,[Sr]))}function wx(e){return M({...e,[Sr]:"Optional"})}function bx(e,t){return t===!1?yx(e):wx(e)}function ii(e,t){const n=t??!0;return gn(e)?Dx(e,n):bx(e,n)}function $x(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=ii(e[r],t);return n}function vx(e,t){return $x(e.properties,t)}function Dx(e,t){const n=vx(e,t);return yt(n)}function Pc(e,t={}){const n=e.every(i=>Gn(i)),r=Ot(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return M(t.unevaluatedProperties===!1||Ot(t.unevaluatedProperties)||n?{...r,[T]:"Intersect",type:"object",allOf:e}:{...r,[T]:"Intersect",allOf:e},t)}function Ex(e){return e.every(t=>Qr(t))}function Cx(e){return mn(e,[Sr])}function e0(e){return e.map(t=>Qr(t)?Cx(t):t)}function xx(e,t){return Ex(e)?ii(Pc(e0(e),t)):Pc(e0(e),t)}function m1(e,t={}){if(e.length===1)return M(e[0],t);if(e.length===0)return Ie(t);if(e.some(n=>be(n)))throw new Error("Cannot intersect transform types");return xx(e,t)}function oi(e,t){if(e.length===1)return M(e[0],t);if(e.length===0)return Ie(t);if(e.some(n=>be(n)))throw new Error("Cannot intersect transform types");return Pc(e,t)}function Wo(...e){const[t,n]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new gt("Ref: $ref must be a string");return M({[T]:"Ref",$ref:t},n)}function Ax(e,t){return nt("Awaited",[nt(e,t)])}function Fx(e){return nt("Awaited",[Wo(e)])}function kx(e){return oi(h1(e))}function Sx(e){return wt(h1(e))}function Ix(e){return tl(e)}function h1(e){return e.map(t=>tl(t))}function tl(e,t){return M(Bo(e)?Ax(e.target,e.parameters):An(e)?kx(e.allOf):lt(e)?Sx(e.anyOf):za(e)?Ix(e.item):Jt(e)?Fx(e.$ref):e,t)}function p1(e){const t=[];for(const n of e)t.push(Li(n));return t}function Nx(e){const t=p1(e);return dC(t)}function Tx(e){const t=p1(e);return fC(t)}function Mx(e){return e.map((t,n)=>n.toString())}function Px(e){return["[number]"]}function Ox(e){return globalThis.Object.getOwnPropertyNames(e)}function Bx(e){return Oc?globalThis.Object.getOwnPropertyNames(e).map(n=>n[0]==="^"&&n[n.length-1]==="$"?n.slice(1,n.length-1):n):[]}function Li(e){return An(e)?Nx(e.allOf):lt(e)?Tx(e.anyOf):Mi(e)?Mx(e.items??[]):Oo(e)?Px(e.items):Gn(e)?Ox(e.properties):Ka(e)?Bx(e.patternProperties):[]}let Oc=!1;function Co(e){Oc=!0;const t=Li(e);return Oc=!1,`^(${t.map(r=>`(${r})`).join("|")})$`}function Rx(e,t){return nt("KeyOf",[nt(e,t)])}function Lx(e){return nt("KeyOf",[Wo(e)])}function jx(e,t){const n=Li(e),r=Ux(n),i=_o(r);return M(i,t)}function Ux(e){return e.map(t=>t==="[number]"?Ri():Ye(t))}function ad(e,t){return Bo(e)?Rx(e.target,e.parameters):Jt(e)?Lx(e.$ref):gn(e)?Wx(e,t):jx(e,t)}function _x(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=ad(e[r],fn(t));return n}function Vx(e,t){return _x(e.properties,t)}function Wx(e,t){const n=Vx(e,t);return yt(n)}function g1(e){const t=Li(e),n=sd(e,t);return t.map((r,i)=>[t[i],n[i]])}function qx(e){const t=[];for(const n of e)t.push(...Li(n));return aC(t)}function zx(e){return e.filter(t=>!nu(t))}function Kx(e,t){const n=[];for(const r of e)n.push(...sd(r,[t]));return zx(n)}function Zx(e,t){const n={};for(const r of t)n[r]=m1(Kx(e,r));return n}function Gx(e,t){const n=qx(e),r=Zx(e,n);return at(r,t)}function y1(e){return M({[T]:"Date",type:"Date"},e)}function w1(e){return M({[T]:"Null",type:"null"},e)}function b1(e){return M({[T]:"Symbol",type:"symbol"},e)}function $1(e){return M({[T]:"Undefined",type:"undefined"},e)}function v1(e){return M({[T]:"Uint8Array",type:"Uint8Array"},e)}function nl(e){return M({[T]:"Unknown"},e)}function Yx(e){return e.map(t=>ld(t,!1))}function Jx(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=ri(ld(e[n],!1));return t}function Mu(e,t){return t===!0?e:ri(e)}function ld(e,t){return xE(e)||FE(e)?Mu(Rs(),t):Qt(e)?ri(Vo(Yx(e))):Qs(e)?v1():Rf(e)?y1():Je(e)?Mu(at(Jx(e)),t):AE(e)?Mu(su([],nl()),t):Ze(e)?$1():kE(e)?w1():SE(e)?b1():Py(e)?od():rr(e)||Xs(e)||Ve(e)?Ye(e):at({})}function Hx(e,t){return M(ld(e,!0),t)}function Xx(e,t){return Ro(e)?Vo(e.parameters,t):Ie(t)}function Qx(e,t){if(Ze(e))throw new Error("Enum undefined or empty");const n=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(n)].map(o=>Ye(o));return wt(i,{...t,[_a]:"Enum"})}class eA extends gt{}var E;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(E||(E={}));function xn(e){return e===E.False?e:E.True}function qo(e){throw new eA(e)}function He(e){return ti(e)||Bi(e)||kr(e)||zn(e)||Wn(e)}function Xe(e,t){return ti(t)?C1():Bi(t)?rl(e,t):kr(t)?fd(e,t):zn(t)?k1():Wn(t)?cd():qo("StructuralRight")}function cd(e,t){return E.True}function tA(e,t){return Bi(t)?rl(e,t):kr(t)&&t.anyOf.some(n=>Wn(n)||zn(n))?E.True:kr(t)?E.Union:zn(t)||Wn(t)?E.True:E.Union}function nA(e,t){return zn(e)?E.False:Wn(e)?E.Union:ti(e)?E.True:E.False}function rA(e,t){return Se(t)&&il(t)?E.True:He(t)?Xe(e,t):Pi(t)?xn(he(e.items,t.items)):E.False}function iA(e,t){return He(t)?Xe(e,t):Kf(t)?xn(he(e.items,t.items)):E.False}function oA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):Za(t)?E.True:E.False}function D1(e,t){return Qy(e)||Oi(e)?E.True:E.False}function sA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):Oi(t)?E.True:E.False}function uA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):Ga(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>xn(he(t.parameters[r],n))===E.True)?xn(he(e.returns,t.returns)):E.False:E.False}function aA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):Ya(t)?E.True:E.False}function lA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):Ja(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>xn(he(t.parameters[r],n))===E.True)?xn(he(e.returns,t.returns)):E.False:E.False}function E1(e,t){return ei(e)&&rr(e.const)||zt(e)||Ir(e)?E.True:E.False}function cA(e,t){return Ir(t)||zt(t)?E.True:He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):E.False}function rl(e,t){return t.allOf.every(n=>he(e,n)===E.True)?E.True:E.False}function fA(e,t){return e.allOf.some(n=>he(n,t)===E.True)?E.True:E.False}function dA(e,t){return He(t)?Xe(e,t):Zf(t)?xn(he(e.items,t.items)):E.False}function mA(e,t){return ei(t)&&t.const===e.const?E.True:He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):qn(t)?F1(e):zt(t)?x1(e):Ir(t)?E1(e):Oi(t)?D1(e):E.False}function C1(e,t){return E.False}function hA(e,t){return E.True}function t0(e){let[t,n]=[e,0];for(;$o(t);)t=t.not,n+=1;return n%2===0?t:nl()}function pA(e,t){return $o(e)?he(t0(e),t):$o(t)?he(e,t0(t)):qo("Invalid fallthrough for Not")}function gA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):Gf(t)?E.True:E.False}function x1(e,t){return Xy(e)||zt(e)||Ir(e)?E.True:E.False}function yA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):Ir(t)||zt(t)?E.True:E.False}function Ht(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function n0(e){return il(e)}function r0(e){return Ht(e,0)||Ht(e,1)&&"description"in e.properties&&kr(e.properties.description)&&e.properties.description.anyOf.length===2&&(qn(e.properties.description.anyOf[0])&&Ci(e.properties.description.anyOf[1])||qn(e.properties.description.anyOf[1])&&Ci(e.properties.description.anyOf[0]))}function Gl(e){return Ht(e,0)}function i0(e){return Ht(e,0)}function wA(e){return Ht(e,0)}function bA(e){return Ht(e,0)}function $A(e){return il(e)}function vA(e){const t=Ri();return Ht(e,0)||Ht(e,1)&&"length"in e.properties&&xn(he(e.properties.length,t))===E.True}function DA(e){return Ht(e,0)}function il(e){const t=Ri();return Ht(e,0)||Ht(e,1)&&"length"in e.properties&&xn(he(e.properties.length,t))===E.True}function EA(e){const t=su([Rs()],Rs());return Ht(e,0)||Ht(e,1)&&"then"in e.properties&&xn(he(e.properties.then,t))===E.True}function A1(e,t){return he(e,t)===E.False||pa(e)&&!pa(t)?E.False:E.True}function At(e,t){return zn(e)?E.False:Wn(e)?E.Union:ti(e)||Hy(e)&&n0(t)||Xy(e)&&Gl(t)||Qy(e)&&i0(t)||Os(e)&&r0(t)||Za(e)&&wA(t)||qn(e)&&n0(t)||Os(e)&&r0(t)||zt(e)&&Gl(t)||Ir(e)&&Gl(t)||Oi(e)&&i0(t)||ou(e)&&$A(t)||Ya(e)&&bA(t)||Ga(e)&&DA(t)||Ja(e)&&vA(t)?E.True:ht(e)&&qn(Bc(e))?t[_a]==="Record"?E.True:E.False:ht(e)&&zt(Bc(e))?Ht(t,0)?E.True:E.False:E.False}function CA(e,t){return He(t)?Xe(e,t):ht(t)?Fn(e,t):Se(t)?(()=>{for(const n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!pa(t.properties[n]))return E.False;if(pa(t.properties[n]))return E.True;if(A1(e.properties[n],t.properties[n])===E.False)return E.False}return E.True})():E.False}function xA(e,t){return He(t)?Xe(e,t):Se(t)&&EA(t)?E.True:Yf(t)?xn(he(e.item,t.item)):E.False}function Bc(e){return vo in e.patternProperties?Ri():Do in e.patternProperties?Ai():qo("Unknown record key pattern")}function Rc(e){return vo in e.patternProperties?e.patternProperties[vo]:Do in e.patternProperties?e.patternProperties[Do]:qo("Unable to get record value schema")}function Fn(e,t){const[n,r]=[Bc(t),Rc(t)];return Hy(e)&&zt(n)&&xn(he(e,r))===E.True?E.True:ou(e)&&zt(n)||qn(e)&&zt(n)||Pi(e)&&zt(n)?he(e,r):Se(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(A1(r,e.properties[i])===E.False)return E.False;return E.True})():E.False}function AA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?he(Rc(e),Rc(t)):E.False}function FA(e,t){const n=Ps(e)?Ai():e,r=Ps(t)?Ai():t;return he(n,r)}function F1(e,t){return ei(e)&&Ve(e.const)||qn(e)?E.True:E.False}function kA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):qn(t)?E.True:E.False}function SA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):Os(t)?E.True:E.False}function IA(e,t){return Bs(e)?he(ga(e),t):Bs(t)?he(e,ga(t)):qo("Invalid fallthrough for TemplateLiteral")}function NA(e,t){return Pi(t)&&e.items!==void 0&&e.items.every(n=>he(n,t.items)===E.True)}function TA(e,t){return ti(e)?E.True:zn(e)?E.False:Wn(e)?E.Union:E.False}function MA(e,t){return He(t)?Xe(e,t):Se(t)&&il(t)||Pi(t)&&NA(e,t)?E.True:Ha(t)?Ze(e.items)&&!Ze(t.items)||!Ze(e.items)&&Ze(t.items)?E.False:Ze(e.items)&&!Ze(t.items)||e.items.every((n,r)=>he(n,t.items[r])===E.True)?E.True:E.False:E.False}function PA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):ou(t)?E.True:E.False}function OA(e,t){return He(t)?Xe(e,t):Se(t)?At(e,t):ht(t)?Fn(e,t):Xa(t)?LA(e):Ci(t)?E.True:E.False}function fd(e,t){return t.anyOf.some(n=>he(e,n)===E.True)?E.True:E.False}function BA(e,t){return e.anyOf.every(n=>he(n,t)===E.True)?E.True:E.False}function k1(e,t){return E.True}function RA(e,t){return ti(t)?C1():Bi(t)?rl(e,t):kr(t)?fd(e,t):Wn(t)?cd():qn(t)?F1(e):zt(t)?x1(e):Ir(t)?E1(e):Oi(t)?D1(e):Pi(t)?nA(e):Ha(t)?TA(e):Se(t)?At(e,t):zn(t)?E.True:E.False}function LA(e,t){return Ci(e)||Ci(e)?E.True:E.False}function jA(e,t){return Bi(t)?rl(e,t):kr(t)?fd(e,t):zn(t)?k1():Wn(t)?cd():Se(t)?At(e,t):Xa(t)?E.True:E.False}function he(e,t){return Bs(e)||Bs(t)?IA(e,t):Ps(e)||Ps(t)?FA(e,t):$o(e)||$o(t)?pA(e,t):Wn(e)?tA(e,t):Pi(e)?rA(e,t):Za(e)?oA(e,t):Oi(e)?sA(e,t):Kf(e)?iA(e,t):Ga(e)?uA(e,t):Ya(e)?aA(e,t):Ja(e)?lA(e,t):Ir(e)?cA(e,t):Bi(e)?fA(e,t):Zf(e)?dA(e,t):ei(e)?mA(e,t):ti(e)?hA():Gf(e)?gA(e,t):zt(e)?yA(e,t):Se(e)?CA(e,t):ht(e)?AA(e,t):qn(e)?kA(e,t):Os(e)?SA(e,t):Ha(e)?MA(e,t):Yf(e)?xA(e,t):ou(e)?PA(e,t):Ci(e)?OA(e,t):kr(e)?BA(e,t):zn(e)?RA(e,t):Xa(e)?jA(e,t):qo(`Unknown left type operand '${e[T]}'`)}function uu(e,t){return he(e,t)}function UA(e,t,n,r,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=dd(e[s],t,n,r,fn(i));return o}function _A(e,t,n,r,i){return UA(e.properties,t,n,r,i)}function VA(e,t,n,r,i){const o=_A(e,t,n,r,i);return yt(o)}function WA(e,t,n,r){const i=uu(e,t);return i===E.Union?wt([n,r]):i===E.True?n:r}function dd(e,t,n,r,i){return gn(e)?VA(e,t,n,r,i):Ni(e)?M(ZA(e,t,n,r,i)):M(WA(e,t,n,r),i)}function qA(e,t,n,r,i){return{[e]:dd(Ye(e),t,n,r,fn(i))}}function zA(e,t,n,r,i){return e.reduce((o,s)=>({...o,...qA(s,t,n,r,i)}),{})}function KA(e,t,n,r,i){return zA(e.keys,t,n,r,i)}function ZA(e,t,n,r,i){const o=KA(e,t,n,r,i);return yt(o)}function GA(e){return e.allOf.every(t=>zo(t))}function YA(e){return e.anyOf.some(t=>zo(t))}function JA(e){return!zo(e.not)}function zo(e){return e[T]==="Intersect"?GA(e):e[T]==="Union"?YA(e):e[T]==="Not"?JA(e):e[T]==="Undefined"}function HA(e,t){return md(ga(e),t)}function XA(e,t){const n=e.filter(r=>uu(r,t)===E.False);return n.length===1?n[0]:wt(n)}function md(e,t,n={}){return Ti(e)?M(HA(e,t),n):gn(e)?M(tF(e,t),n):M(lt(e)?XA(e.anyOf,t):uu(e,t)!==E.False?Ie():e,n)}function QA(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=md(e[r],t);return n}function eF(e,t){return QA(e.properties,t)}function tF(e,t){const n=eF(e,t);return yt(n)}function nF(e,t){return hd(ga(e),t)}function rF(e,t){const n=e.filter(r=>uu(r,t)!==E.False);return n.length===1?n[0]:wt(n)}function hd(e,t,n){return Ti(e)?M(nF(e,t),n):gn(e)?M(sF(e,t),n):M(lt(e)?rF(e.anyOf,t):uu(e,t)!==E.False?e:Ie(),n)}function iF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=hd(e[r],t);return n}function oF(e,t){return iF(e.properties,t)}function sF(e,t){const n=oF(e,t);return yt(n)}function uF(e,t){return Ro(e)?M(e.returns,t):Ie(t)}function S1(e){return ri(ii(e))}function ji(e,t,n){return M({[T]:"Record",type:"object",patternProperties:{[e]:t}},n)}function pd(e,t,n){const r={};for(const i of e)r[i]=t;return at(r,{...n,[_a]:"Record"})}function aF(e,t,n){return SC(e)?pd(ni(e),t,n):ji(e.pattern,t,n)}function lF(e,t,n){return pd(ni(wt(e)),t,n)}function cF(e,t,n){return pd([e.toString()],t,n)}function fF(e,t,n){return ji(e.source,t,n)}function dF(e,t,n){const r=Ze(e.pattern)?Do:e.pattern;return ji(r,t,n)}function mF(e,t,n){return ji(Do,t,n)}function hF(e,t,n){return ji(sC,t,n)}function pF(e,t,n){return at({true:t,false:t},n)}function gF(e,t,n){return ji(vo,t,n)}function yF(e,t,n){return ji(vo,t,n)}function I1(e,t,n={}){return lt(e)?lF(e.anyOf,t,n):Ti(e)?aF(e,t,n):Ii(e)?cF(e.const,t,n):tu(e)?pF(e,t,n):jo(e)?gF(e,t,n):Uo(e)?yF(e,t,n):Ky(e)?fF(e,t,n):ru(e)?dF(e,t,n):Wy(e)?mF(e,t,n):nu(e)?hF(e,t,n):Ie(n)}function gd(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function wF(e){const t=gd(e);return t===Do?Ai():t===vo?Ri():Ai({pattern:t})}function N1(e){return e.patternProperties[gd(e)]}function bF(e,t){return t.parameters=au(e,t.parameters),t.returns=Kn(e,t.returns),t}function $F(e,t){return t.parameters=au(e,t.parameters),t.returns=Kn(e,t.returns),t}function vF(e,t){return t.allOf=au(e,t.allOf),t}function DF(e,t){return t.anyOf=au(e,t.anyOf),t}function EF(e,t){return Ze(t.items)||(t.items=au(e,t.items)),t}function CF(e,t){return t.items=Kn(e,t.items),t}function xF(e,t){return t.items=Kn(e,t.items),t}function AF(e,t){return t.items=Kn(e,t.items),t}function FF(e,t){return t.item=Kn(e,t.item),t}function kF(e,t){const n=TF(e,t.properties);return{...t,...at(n)}}function SF(e,t){const n=Kn(e,wF(t)),r=Kn(e,N1(t)),i=I1(n,r);return{...t,...i}}function IF(e,t){return t.index in e?e[t.index]:nl()}function NF(e,t){const n=_f(t),r=Qr(t),i=Kn(e,t);return n&&r?S1(i):n&&!r?ri(i):!n&&r?ii(i):i}function TF(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:NF(e,t[r])}),{})}function au(e,t){return t.map(n=>Kn(e,n))}function Kn(e,t){return Ro(t)?bF(e,t):Lo(t)?$F(e,t):An(t)?vF(e,t):lt(t)?DF(e,t):Mi(t)?EF(e,t):Oo(t)?CF(e,t):Va(t)?xF(e,t):qa(t)?AF(e,t):za(t)?FF(e,t):Gn(t)?kF(e,t):Ka(t)?SF(e,t):qy(t)?IF(e,t):t}function MF(e,t){return Kn(t,Lf(e))}function PF(e){return M({[T]:"Integer",type:"integer"},e)}function OF(e,t,n){return{[e]:Ko(Ye(e),t,fn(n))}}function BF(e,t,n){return e.reduce((i,o)=>({...i,...OF(o,t,n)}),{})}function RF(e,t,n){return BF(e.keys,t,n)}function LF(e,t,n){const r=RF(e,t,n);return yt(r)}function jF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join("")}function UF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join("")}function _F(e){return e.toUpperCase()}function VF(e){return e.toLowerCase()}function WF(e,t,n){const r=id(e.pattern);if(!js(r))return{...e,pattern:T1(e.pattern,t)};const s=[...Qa(r)].map(l=>Ye(l)),u=M1(s,t),a=wt(u);return a1([a],n)}function T1(e,t){return typeof e=="string"?t==="Uncapitalize"?jF(e):t==="Capitalize"?UF(e):t==="Uppercase"?_F(e):t==="Lowercase"?VF(e):e:e.toString()}function M1(e,t){return e.map(n=>Ko(n,t))}function Ko(e,t,n={}){return Ni(e)?LF(e,t,n):Ti(e)?WF(e,t,n):lt(e)?wt(M1(e.anyOf,t),n):Ii(e)?Ye(T1(e.const,t),n):M(e,n)}function qF(e,t={}){return Ko(e,"Capitalize",t)}function zF(e,t={}){return Ko(e,"Lowercase",t)}function KF(e,t={}){return Ko(e,"Uncapitalize",t)}function ZF(e,t={}){return Ko(e,"Uppercase",t)}function GF(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=ol(e[i],t,fn(n));return r}function YF(e,t,n){return GF(e.properties,t,n)}function JF(e,t,n){const r=YF(e,t,n);return yt(r)}function HF(e,t){return e.map(n=>yd(n,t))}function XF(e,t){return e.map(n=>yd(n,t))}function QF(e,t){const{[t]:n,...r}=e;return r}function e4(e,t){return t.reduce((n,r)=>QF(n,r),e)}function t4(e,t){const n=mn(e,[qt,"$id","required","properties"]),r=e4(e.properties,t);return at(r,n)}function n4(e){const t=e.reduce((n,r)=>zy(r)?[...n,Ye(r)]:n,[]);return wt(t)}function yd(e,t){return An(e)?oi(HF(e.allOf,t)):lt(e)?wt(XF(e.anyOf,t)):Gn(e)?t4(e,t):at({})}function ol(e,t,n){const r=Qt(t)?n4(t):t,i=Ot(t)?ni(t):t,o=Jt(e),s=Jt(t);return gn(e)?JF(e,i,n):Ni(t)?s4(e,t,n):o&&s?nt("Omit",[e,r],n):!o&&s?nt("Omit",[e,r],n):o&&!s?nt("Omit",[e,r],n):M({...yd(e,i),...n})}function r4(e,t,n){return{[t]:ol(e,[t],fn(n))}}function i4(e,t,n){return t.reduce((r,i)=>({...r,...r4(e,i,n)}),{})}function o4(e,t,n){return i4(e,t.keys,n)}function s4(e,t,n){const r=o4(e,t,n);return yt(r)}function u4(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=sl(e[i],t,fn(n));return r}function a4(e,t,n){return u4(e.properties,t,n)}function l4(e,t,n){const r=a4(e,t,n);return yt(r)}function c4(e,t){return e.map(n=>wd(n,t))}function f4(e,t){return e.map(n=>wd(n,t))}function d4(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function m4(e,t){const n=mn(e,[qt,"$id","required","properties"]),r=d4(e.properties,t);return at(r,n)}function h4(e){const t=e.reduce((n,r)=>zy(r)?[...n,Ye(r)]:n,[]);return wt(t)}function wd(e,t){return An(e)?oi(c4(e.allOf,t)):lt(e)?wt(f4(e.anyOf,t)):Gn(e)?m4(e,t):at({})}function sl(e,t,n){const r=Qt(t)?h4(t):t,i=Ot(t)?ni(t):t,o=Jt(e),s=Jt(t);return gn(e)?l4(e,i,n):Ni(t)?w4(e,t,n):o&&s?nt("Pick",[e,r],n):!o&&s?nt("Pick",[e,r],n):o&&!s?nt("Pick",[e,r],n):M({...wd(e,i),...n})}function p4(e,t,n){return{[t]:sl(e,[t],fn(n))}}function g4(e,t,n){return t.reduce((r,i)=>({...r,...p4(e,i,n)}),{})}function y4(e,t,n){return g4(e,t.keys,n)}function w4(e,t,n){const r=y4(e,t,n);return yt(r)}function b4(e,t){return nt("Partial",[nt(e,t)])}function $4(e){return nt("Partial",[Wo(e)])}function v4(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=ii(e[n]);return t}function D4(e){const t=mn(e,[qt,"$id","required","properties"]),n=v4(e.properties);return at(n,t)}function o0(e){return e.map(t=>P1(t))}function P1(e){return Bo(e)?b4(e.target,e.parameters):Jt(e)?$4(e.$ref):An(e)?oi(o0(e.allOf)):lt(e)?wt(o0(e.anyOf)):Gn(e)?D4(e):Wa(e)||tu(e)||jo(e)||Ii(e)||Vf(e)||Uo(e)||ru(e)||Wf(e)||iu(e)?e:at({})}function bd(e,t){return gn(e)?x4(e,t):M({...P1(e),...t})}function E4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=bd(e[r],fn(t));return n}function C4(e,t){return E4(e.properties,t)}function x4(e,t){const n=C4(e,t);return yt(n)}function A4(e,t){return nt("Required",[nt(e,t)])}function F4(e){return nt("Required",[Wo(e)])}function k4(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=mn(e[n],[Sr]);return t}function S4(e){const t=mn(e,[qt,"$id","required","properties"]),n=k4(e.properties);return at(n,t)}function s0(e){return e.map(t=>O1(t))}function O1(e){return Bo(e)?A4(e.target,e.parameters):Jt(e)?F4(e.$ref):An(e)?oi(s0(e.allOf)):lt(e)?wt(s0(e.anyOf)):Gn(e)?S4(e):Wa(e)||tu(e)||jo(e)||Ii(e)||Vf(e)||Uo(e)||ru(e)||Wf(e)||iu(e)?e:at({})}function $d(e,t){return gn(e)?T4(e,t):M({...O1(e),...t})}function I4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=$d(e[r],t);return n}function N4(e,t){return I4(e.properties,t)}function T4(e,t){const n=N4(e,t);return yt(n)}function M4(e,t){return t.map(n=>Jt(n)?vd(e,n.$ref):hn(e,n))}function vd(e,t){return t in e?Jt(e[t])?vd(e,e[t].$ref):hn(e,e[t]):Ie()}function P4(e){return tl(e[0])}function O4(e){return el(e[0],e[1])}function B4(e){return ad(e[0])}function R4(e){return bd(e[0])}function L4(e){return ol(e[0],e[1])}function j4(e){return sl(e[0],e[1])}function U4(e){return $d(e[0])}function _4(e,t,n){const r=M4(e,n);return t==="Awaited"?P4(r):t==="Index"?O4(r):t==="KeyOf"?B4(r):t==="Partial"?R4(r):t==="Omit"?L4(r):t==="Pick"?j4(r):t==="Required"?U4(r):Ie()}function V4(e,t){return ed(hn(e,t))}function W4(e,t){return td(hn(e,t))}function q4(e,t,n){return nd(lu(e,t),hn(e,n))}function z4(e,t,n){return su(lu(e,t),hn(e,n))}function K4(e,t){return oi(lu(e,t))}function Z4(e,t){return ud(hn(e,t))}function G4(e,t){return at(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:hn(e,t[r])}),{}))}function Y4(e,t){const[n,r]=[hn(e,N1(t)),gd(t)],i=Lf(t);return i.patternProperties[r]=n,i}function J4(e,t){return Jt(t)?{...vd(e,t.$ref),[qt]:t[qt]}:t}function H4(e,t){return Vo(lu(e,t))}function X4(e,t){return wt(lu(e,t))}function lu(e,t){return t.map(n=>hn(e,n))}function hn(e,t){return Qr(t)?M(hn(e,mn(t,[Sr])),t):_f(t)?M(hn(e,mn(t,[eu])),t):be(t)?M(J4(e,t),t):Oo(t)?M(V4(e,t.items),t):Va(t)?M(W4(e,t.items),t):Bo(t)?M(_4(e,t.target,t.parameters)):Ro(t)?M(q4(e,t.parameters,t.returns),t):Lo(t)?M(z4(e,t.parameters,t.returns),t):An(t)?M(K4(e,t.allOf),t):qa(t)?M(Z4(e,t.items),t):Gn(t)?M(G4(e,t.properties),t):Ka(t)?M(Y4(e,t)):Mi(t)?M(H4(e,t.items||[]),t):lt(t)?M(X4(e,t.anyOf),t):t}function Q4(e,t){return t in e?hn(e,e[t]):Ie()}function e3(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:Q4(e,n)}),{})}class t3{constructor(t){const n=e3(t),r=this.WithIdentifiers(n);this.$defs=r}Import(t,n){const r={...this.$defs,[t]:M(this.$defs[t],n)};return M({[T]:"Import",$defs:r,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:{...t[r],$id:r}}),{})}}function n3(e){return new t3(e)}function r3(e,t){return M({[T]:"Not",not:e},t)}function i3(e,t){return Lo(e)?Vo(e.parameters,t):Ie()}let o3=0;function s3(e,t={}){Ze(t.$id)&&(t.$id=`T${o3++}`);const n=Lf(e({[T]:"This",$ref:`${t.$id}`}));return n.$id=t.$id,M({[_a]:"Recursive",...n},t)}function u3(e,t){const n=Ve(e)?new globalThis.RegExp(e):e;return M({[T]:"RegExp",type:"RegExp",source:n.source,flags:n.flags},t)}function a3(e){return An(e)?e.allOf:lt(e)?e.anyOf:Mi(e)?e.items??[]:[]}function l3(e){return a3(e)}function c3(e,t){return Lo(e)?M(e.returns,t):Ie(t)}class f3{constructor(t){this.schema=t}Decode(t){return new d3(this.schema,t)}}class d3{constructor(t,n){this.schema=t,this.decode=n}EncodeTransform(t,n){const o={Encode:s=>n[qt].Encode(t(s)),Decode:s=>this.decode(n[qt].Decode(s))};return{...n,[qt]:o}}EncodeSchema(t,n){const r={Decode:this.decode,Encode:t};return{...n,[qt]:r}}Encode(t){return be(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function m3(e){return new f3(e)}function h3(e={}){return M({[T]:e[T]??"Unsafe"},e)}function p3(e){return M({[T]:"Void",type:"void"},e)}const g3=Object.freeze(Object.defineProperty({__proto__:null,Any:Rs,Argument:mC,Array:ed,AsyncIterator:td,Awaited:tl,BigInt:od,Boolean:s1,Capitalize:qF,Composite:Gx,Const:Hx,Constructor:nd,ConstructorParameters:Xx,Date:y1,Enum:Qx,Exclude:md,Extends:dd,Extract:hd,Function:su,Index:el,InstanceType:uF,Instantiate:MF,Integer:PF,Intersect:oi,Iterator:ud,KeyOf:ad,Literal:Ye,Lowercase:zF,Mapped:gx,Module:n3,Never:Ie,Not:r3,Null:w1,Number:Ri,Object:at,Omit:ol,Optional:ii,Parameters:i3,Partial:bd,Pick:sl,Promise:f1,Readonly:ri,ReadonlyOptional:S1,Record:I1,Recursive:s3,Ref:Wo,RegExp:u3,Required:$d,Rest:l3,ReturnType:c3,String:Ai,Symbol:b1,TemplateLiteral:a1,Transform:m3,Tuple:Vo,Uint8Array:v1,Uncapitalize:KF,Undefined:$1,Union:wt,Unknown:nl,Unsafe:h3,Uppercase:ZF,Void:p3},Symbol.toStringTag,{value:"Module"})),Ae=g3;function B1(e){switch(e.errorType){case b.ArrayContains:return"Expected array to contain at least one matching value";case b.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case b.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case b.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case b.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case b.ArrayUniqueItems:return"Expected array elements to be unique";case b.Array:return"Expected array";case b.AsyncIterator:return"Expected AsyncIterator";case b.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case b.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case b.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case b.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case b.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case b.BigInt:return"Expected bigint";case b.Boolean:return"Expected boolean";case b.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case b.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case b.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case b.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case b.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case b.Date:return"Expected Date";case b.Function:return"Expected function";case b.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case b.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case b.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case b.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case b.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case b.Integer:return"Expected integer";case b.IntersectUnevaluatedProperties:return"Unexpected property";case b.Intersect:return"Expected all values to match";case b.Iterator:return"Expected Iterator";case b.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case b.Never:return"Never";case b.Not:return"Value should not match";case b.Null:return"Expected null";case b.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case b.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case b.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case b.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case b.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case b.Number:return"Expected number";case b.Object:return"Expected object";case b.ObjectAdditionalProperties:return"Unexpected property";case b.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case b.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case b.ObjectRequiredProperty:return"Expected required property";case b.Promise:return"Expected Promise";case b.RegExp:return"Expected string to match regular expression";case b.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case b.StringFormat:return`Expected string to match '${e.schema.format}' format`;case b.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case b.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case b.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case b.String:return"Expected string";case b.Symbol:return"Expected symbol";case b.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case b.Tuple:return"Expected tuple";case b.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case b.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case b.Uint8Array:return"Expected Uint8Array";case b.Undefined:return"Expected undefined";case b.Union:return"Expected union value";case b.Void:return"Expected void";case b.Kind:return`Expected kind '${e.schema[T]}'`;default:return"Unknown error type"}}let R1=B1;function y3(e){R1=e}function w3(){return R1}class b3 extends gt{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function $3(e,t){const n=t.find(r=>r.$id===e.$ref);if(n===void 0)throw new b3(e);return kn(n,t)}function ul(e,t){return!un(e.$id)||t.some(n=>n.$id===e.$id)||t.push(e),t}function kn(e,t){return e[T]==="This"||e[T]==="Ref"?$3(e,t):e}class v3 extends gt{constructor(t){super("Unable to hash value"),this.value=t}}var pn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(pn||(pn={}));let Qi=BigInt("14695981039346656037");const[D3,E3]=[BigInt("1099511628211"),BigInt("18446744073709551616")],C3=Array.from({length:256}).map((e,t)=>BigInt(t)),L1=new Float64Array(1),j1=new DataView(L1.buffer),U1=new Uint8Array(L1.buffer);function*x3(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function A3(e){xt(pn.Array);for(const t of e)xo(t)}function F3(e){xt(pn.Boolean),xt(e?1:0)}function k3(e){xt(pn.BigInt),j1.setBigInt64(0,e);for(const t of U1)xt(t)}function S3(e){xt(pn.Date),xo(e.getTime())}function I3(e){xt(pn.Null)}function N3(e){xt(pn.Number),j1.setFloat64(0,e);for(const t of U1)xt(t)}function T3(e){xt(pn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())xo(t),xo(e[t])}function M3(e){xt(pn.String);for(let t=0;t<e.length;t++)for(const n of x3(e.charCodeAt(t)))xt(n)}function P3(e){xt(pn.Symbol),xo(e.description)}function O3(e){xt(pn.Uint8Array);for(let t=0;t<e.length;t++)xt(e[t])}function B3(e){return xt(pn.Undefined)}function xo(e){if(dn(e))return A3(e);if(ja(e))return F3(e);if(wr(e))return k3(e);if(jf(e))return S3(e);if(La(e))return I3();if(ee(e))return N3(e);if(sr(e))return T3(e);if(un(e))return M3(e);if(Ua(e))return P3(e);if(Uf(e))return O3(e);if(Xr(e))return B3();throw new v3(e)}function xt(e){Qi=Qi^C3[e],Qi=Qi*D3%E3}function Dd(e){return Qi=BigInt("14695981039346656037"),xo(e),Qi}class R3 extends gt{constructor(t){super("Unknown type"),this.schema=t}}function L3(e){return e[T]==="Any"||e[T]==="Unknown"}function re(e){return e!==void 0}function j3(e,t,n){return!0}function U3(e,t,n){return!0}function _3(e,t,n){if(!dn(n)||re(e.minItems)&&!(n.length>=e.minItems)||re(e.maxItems)&&!(n.length<=e.maxItems)||!n.every(o=>st(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of n){const u=Dd(s);if(o.has(u))return!1;o.add(u)}return!0})())return!1;if(!(re(e.contains)||ee(e.minContains)||ee(e.maxContains)))return!0;const r=re(e.contains)?e.contains:Ie(),i=n.reduce((o,s)=>st(r,t,s)?o+1:o,0);return!(i===0||ee(e.minContains)&&i<e.minContains||ee(e.maxContains)&&i>e.maxContains)}function V3(e,t,n){return By(n)}function W3(e,t,n){return!(!wr(n)||re(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||re(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||re(e.maximum)&&!(n<=e.maximum)||re(e.minimum)&&!(n>=e.minimum)||re(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function q3(e,t,n){return ja(n)}function z3(e,t,n){return st(e.returns,t,n.prototype)}function K3(e,t,n){return!(!jf(n)||re(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||re(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||re(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||re(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||re(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function Z3(e,t,n){return _y(n)}function G3(e,t,n){const r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return st(i,[...t,...r],n)}function Y3(e,t,n){return!(!Uy(n)||re(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||re(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||re(e.maximum)&&!(n<=e.maximum)||re(e.minimum)&&!(n>=e.minimum)||re(e.multipleOf)&&n%e.multipleOf!==0)}function J3(e,t,n){const r=e.allOf.every(i=>st(i,t,n));if(e.unevaluatedProperties===!1){const i=new RegExp(Co(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s));return r&&o}else if(Ot(e.unevaluatedProperties)){const i=new RegExp(Co(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s)||st(e.unevaluatedProperties,t,n[s]));return r&&o}else return r}function H3(e,t,n){return Ry(n)}function X3(e,t,n){return n===e.const}function Q3(e,t,n){return!1}function ek(e,t,n){return!st(e.not,t,n)}function tk(e,t,n){return La(n)}function nk(e,t,n){return!(!Ue.IsNumberLike(n)||re(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||re(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||re(e.minimum)&&!(n>=e.minimum)||re(e.maximum)&&!(n<=e.maximum)||re(e.multipleOf)&&n%e.multipleOf!==0)}function rk(e,t,n){if(!Ue.IsObjectLike(n)||re(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||re(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const r=Object.getOwnPropertyNames(e.properties);for(const i of r){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!st(o,t,n[i])||(zo(o)||L3(o))&&!(i in n))return!1}else if(Ue.IsExactOptionalProperty(n,i)&&!st(o,t,n[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&i.length===r.length?!0:i.every(o=>r.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(n).every(o=>r.includes(o)||st(e.additionalProperties,t,n[o])):!0}function ik(e,t,n){return Ly(n)}function ok(e,t,n){if(!Ue.IsRecordLike(n)||re(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||re(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const[r,i]=Object.entries(e.patternProperties)[0],o=new RegExp(r),s=Object.entries(n).every(([l,c])=>o.test(l)?st(i,t,c):!0),u=typeof e.additionalProperties=="object"?Object.entries(n).every(([l,c])=>o.test(l)?!0:st(e.additionalProperties,t,c)):!0,a=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(l=>o.test(l)):!0;return s&&u&&a}function sk(e,t,n){return st(kn(e,t),t,n)}function uk(e,t,n){const r=new RegExp(e.source,e.flags);return re(e.minLength)&&!(n.length>=e.minLength)||re(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function ak(e,t,n){return!un(n)||re(e.minLength)&&!(n.length>=e.minLength)||re(e.maxLength)&&!(n.length<=e.maxLength)||re(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:re(e.format)?Jf(e.format)?Hf(e.format)(n):!1:!0}function lk(e,t,n){return Ua(n)}function ck(e,t,n){return un(n)&&new RegExp(e.pattern).test(n)}function fk(e,t,n){return st(kn(e,t),t,n)}function dk(e,t,n){if(!dn(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!st(e.items[r],t,n[r]))return!1;return!0}function mk(e,t,n){return Xr(n)}function hk(e,t,n){return e.anyOf.some(r=>st(r,t,n))}function pk(e,t,n){return!(!Uf(n)||re(e.maxByteLength)&&!(n.length<=e.maxByteLength)||re(e.minByteLength)&&!(n.length>=e.minByteLength))}function gk(e,t,n){return!0}function yk(e,t,n){return Ue.IsVoidLike(n)}function wk(e,t,n){return xi(e[T])?Qf(e[T])(e,n):!1}function st(e,t,n){const r=re(e.$id)?ul(e,t):t,i=e;switch(i[T]){case"Any":return j3();case"Argument":return U3();case"Array":return _3(i,r,n);case"AsyncIterator":return V3(i,r,n);case"BigInt":return W3(i,r,n);case"Boolean":return q3(i,r,n);case"Constructor":return z3(i,r,n);case"Date":return K3(i,r,n);case"Function":return Z3(i,r,n);case"Import":return G3(i,r,n);case"Integer":return Y3(i,r,n);case"Intersect":return J3(i,r,n);case"Iterator":return H3(i,r,n);case"Literal":return X3(i,r,n);case"Never":return Q3();case"Not":return ek(i,r,n);case"Null":return tk(i,r,n);case"Number":return nk(i,r,n);case"Object":return rk(i,r,n);case"Promise":return ik(i,r,n);case"Record":return ok(i,r,n);case"Ref":return sk(i,r,n);case"RegExp":return uk(i,r,n);case"String":return ak(i,r,n);case"Symbol":return lk(i,r,n);case"TemplateLiteral":return ck(i,r,n);case"This":return fk(i,r,n);case"Tuple":return dk(i,r,n);case"Undefined":return mk(i,r,n);case"Union":return hk(i,r,n);case"Uint8Array":return pk(i,r,n);case"Unknown":return gk();case"Void":return yk(i,r,n);default:if(!xi(i[T]))throw new R3(i);return wk(i,r,n)}}function ya(...e){return e.length===3?st(e[0],e[1],e[2]):st(e[0],[],e[1])}var b;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(b||(b={}));class bk extends gt{constructor(t){super("Unknown type"),this.schema=t}}function pr(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function ne(e){return e!==void 0}class _1{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function P(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:w3()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*$k(e,t,n,r){}function*vk(e,t,n,r){}function*Dk(e,t,n,r){if(!dn(r))return yield P(b.Array,e,n,r);ne(e.minItems)&&!(r.length>=e.minItems)&&(yield P(b.ArrayMinItems,e,n,r)),ne(e.maxItems)&&!(r.length<=e.maxItems)&&(yield P(b.ArrayMaxItems,e,n,r));for(let s=0;s<r.length;s++)yield*ut(e.items,t,`${n}/${s}`,r[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const u of r){const a=Dd(u);if(s.has(a))return!1;s.add(a)}return!0})()&&(yield P(b.ArrayUniqueItems,e,n,r)),!(ne(e.contains)||ne(e.minContains)||ne(e.maxContains)))return;const i=ne(e.contains)?e.contains:Ie(),o=r.reduce((s,u,a)=>ut(i,t,`${n}${a}`,u).next().done===!0?s+1:s,0);o===0&&(yield P(b.ArrayContains,e,n,r)),ee(e.minContains)&&o<e.minContains&&(yield P(b.ArrayMinContains,e,n,r)),ee(e.maxContains)&&o>e.maxContains&&(yield P(b.ArrayMaxContains,e,n,r))}function*Ek(e,t,n,r){By(r)||(yield P(b.AsyncIterator,e,n,r))}function*Ck(e,t,n,r){if(!wr(r))return yield P(b.BigInt,e,n,r);ne(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P(b.BigIntExclusiveMaximum,e,n,r)),ne(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P(b.BigIntExclusiveMinimum,e,n,r)),ne(e.maximum)&&!(r<=e.maximum)&&(yield P(b.BigIntMaximum,e,n,r)),ne(e.minimum)&&!(r>=e.minimum)&&(yield P(b.BigIntMinimum,e,n,r)),ne(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield P(b.BigIntMultipleOf,e,n,r))}function*xk(e,t,n,r){ja(r)||(yield P(b.Boolean,e,n,r))}function*Ak(e,t,n,r){yield*ut(e.returns,t,n,r.prototype)}function*Fk(e,t,n,r){if(!jf(r))return yield P(b.Date,e,n,r);ne(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield P(b.DateExclusiveMaximumTimestamp,e,n,r)),ne(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield P(b.DateExclusiveMinimumTimestamp,e,n,r)),ne(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield P(b.DateMaximumTimestamp,e,n,r)),ne(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield P(b.DateMinimumTimestamp,e,n,r)),ne(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield P(b.DateMultipleOfTimestamp,e,n,r))}function*kk(e,t,n,r){_y(r)||(yield P(b.Function,e,n,r))}function*Sk(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*ut(o,[...t,...i],n,r)}function*Ik(e,t,n,r){if(!Uy(r))return yield P(b.Integer,e,n,r);ne(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P(b.IntegerExclusiveMaximum,e,n,r)),ne(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P(b.IntegerExclusiveMinimum,e,n,r)),ne(e.maximum)&&!(r<=e.maximum)&&(yield P(b.IntegerMaximum,e,n,r)),ne(e.minimum)&&!(r>=e.minimum)&&(yield P(b.IntegerMinimum,e,n,r)),ne(e.multipleOf)&&r%e.multipleOf!==0&&(yield P(b.IntegerMultipleOf,e,n,r))}function*Nk(e,t,n,r){let i=!1;for(const o of e.allOf)for(const s of ut(o,t,n,r))i=!0,yield s;if(i)return yield P(b.Intersect,e,n,r);if(e.unevaluatedProperties===!1){const o=new RegExp(Co(e));for(const s of Object.getOwnPropertyNames(r))o.test(s)||(yield P(b.IntersectUnevaluatedProperties,e,`${n}/${s}`,r))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(Co(e));for(const s of Object.getOwnPropertyNames(r))if(!o.test(s)){const u=ut(e.unevaluatedProperties,t,`${n}/${s}`,r[s]).next();u.done||(yield u.value)}}}function*Tk(e,t,n,r){Ry(r)||(yield P(b.Iterator,e,n,r))}function*Mk(e,t,n,r){r!==e.const&&(yield P(b.Literal,e,n,r))}function*Pk(e,t,n,r){yield P(b.Never,e,n,r)}function*Ok(e,t,n,r){ut(e.not,t,n,r).next().done===!0&&(yield P(b.Not,e,n,r))}function*Bk(e,t,n,r){La(r)||(yield P(b.Null,e,n,r))}function*Rk(e,t,n,r){if(!Ue.IsNumberLike(r))return yield P(b.Number,e,n,r);ne(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P(b.NumberExclusiveMaximum,e,n,r)),ne(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P(b.NumberExclusiveMinimum,e,n,r)),ne(e.maximum)&&!(r<=e.maximum)&&(yield P(b.NumberMaximum,e,n,r)),ne(e.minimum)&&!(r>=e.minimum)&&(yield P(b.NumberMinimum,e,n,r)),ne(e.multipleOf)&&r%e.multipleOf!==0&&(yield P(b.NumberMultipleOf,e,n,r))}function*Lk(e,t,n,r){if(!Ue.IsObjectLike(r))return yield P(b.Object,e,n,r);ne(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P(b.ObjectMinProperties,e,n,r)),ne(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P(b.ObjectMaxProperties,e,n,r));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(r);for(const u of i)s.includes(u)||(yield P(b.ObjectRequiredProperty,e.properties[u],`${n}/${pr(u)}`,void 0));if(e.additionalProperties===!1)for(const u of s)o.includes(u)||(yield P(b.ObjectAdditionalProperties,e,`${n}/${pr(u)}`,r[u]));if(typeof e.additionalProperties=="object")for(const u of s)o.includes(u)||(yield*ut(e.additionalProperties,t,`${n}/${pr(u)}`,r[u]));for(const u of o){const a=e.properties[u];e.required&&e.required.includes(u)?(yield*ut(a,t,`${n}/${pr(u)}`,r[u]),zo(e)&&!(u in r)&&(yield P(b.ObjectRequiredProperty,a,`${n}/${pr(u)}`,void 0))):Ue.IsExactOptionalProperty(r,u)&&(yield*ut(a,t,`${n}/${pr(u)}`,r[u]))}}function*jk(e,t,n,r){Ly(r)||(yield P(b.Promise,e,n,r))}function*Uk(e,t,n,r){if(!Ue.IsRecordLike(r))return yield P(b.Object,e,n,r);ne(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P(b.ObjectMinProperties,e,n,r)),ne(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P(b.ObjectMaxProperties,e,n,r));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[u,a]of Object.entries(r))s.test(u)&&(yield*ut(o,t,`${n}/${pr(u)}`,a));if(typeof e.additionalProperties=="object")for(const[u,a]of Object.entries(r))s.test(u)||(yield*ut(e.additionalProperties,t,`${n}/${pr(u)}`,a));if(e.additionalProperties===!1){for(const[u,a]of Object.entries(r))if(!s.test(u))return yield P(b.ObjectAdditionalProperties,e,`${n}/${pr(u)}`,a)}}function*_k(e,t,n,r){yield*ut(kn(e,t),t,n,r)}function*Vk(e,t,n,r){if(!un(r))return yield P(b.String,e,n,r);if(ne(e.minLength)&&!(r.length>=e.minLength)&&(yield P(b.StringMinLength,e,n,r)),ne(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P(b.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield P(b.RegExp,e,n,r)}function*Wk(e,t,n,r){if(!un(r))return yield P(b.String,e,n,r);ne(e.minLength)&&!(r.length>=e.minLength)&&(yield P(b.StringMinLength,e,n,r)),ne(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P(b.StringMaxLength,e,n,r)),un(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield P(b.StringPattern,e,n,r))),un(e.format)&&(Jf(e.format)?Hf(e.format)(r)||(yield P(b.StringFormat,e,n,r)):yield P(b.StringFormatUnknown,e,n,r))}function*qk(e,t,n,r){Ua(r)||(yield P(b.Symbol,e,n,r))}function*zk(e,t,n,r){if(!un(r))return yield P(b.String,e,n,r);new RegExp(e.pattern).test(r)||(yield P(b.StringPattern,e,n,r))}function*Kk(e,t,n,r){yield*ut(kn(e,t),t,n,r)}function*Zk(e,t,n,r){if(!dn(r))return yield P(b.Tuple,e,n,r);if(e.items===void 0&&r.length!==0)return yield P(b.TupleLength,e,n,r);if(r.length!==e.maxItems)return yield P(b.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*ut(e.items[i],t,`${n}/${i}`,r[i])}function*Gk(e,t,n,r){Xr(r)||(yield P(b.Undefined,e,n,r))}function*Yk(e,t,n,r){if(ya(e,t,r))return;const i=e.anyOf.map(o=>new _1(ut(o,t,n,r)));yield P(b.Union,e,n,r,i)}function*Jk(e,t,n,r){if(!Uf(r))return yield P(b.Uint8Array,e,n,r);ne(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield P(b.Uint8ArrayMaxByteLength,e,n,r)),ne(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield P(b.Uint8ArrayMinByteLength,e,n,r))}function*Hk(e,t,n,r){}function*Xk(e,t,n,r){Ue.IsVoidLike(r)||(yield P(b.Void,e,n,r))}function*Qk(e,t,n,r){Qf(e[T])(e,r)||(yield P(b.Kind,e,n,r))}function*ut(e,t,n,r){const i=ne(e.$id)?[...t,e]:t,o=e;switch(o[T]){case"Any":return yield*$k();case"Argument":return yield*vk();case"Array":return yield*Dk(o,i,n,r);case"AsyncIterator":return yield*Ek(o,i,n,r);case"BigInt":return yield*Ck(o,i,n,r);case"Boolean":return yield*xk(o,i,n,r);case"Constructor":return yield*Ak(o,i,n,r);case"Date":return yield*Fk(o,i,n,r);case"Function":return yield*kk(o,i,n,r);case"Import":return yield*Sk(o,i,n,r);case"Integer":return yield*Ik(o,i,n,r);case"Intersect":return yield*Nk(o,i,n,r);case"Iterator":return yield*Tk(o,i,n,r);case"Literal":return yield*Mk(o,i,n,r);case"Never":return yield*Pk(o,i,n,r);case"Not":return yield*Ok(o,i,n,r);case"Null":return yield*Bk(o,i,n,r);case"Number":return yield*Rk(o,i,n,r);case"Object":return yield*Lk(o,i,n,r);case"Promise":return yield*jk(o,i,n,r);case"Record":return yield*Uk(o,i,n,r);case"Ref":return yield*_k(o,i,n,r);case"RegExp":return yield*Vk(o,i,n,r);case"String":return yield*Wk(o,i,n,r);case"Symbol":return yield*qk(o,i,n,r);case"TemplateLiteral":return yield*zk(o,i,n,r);case"This":return yield*Kk(o,i,n,r);case"Tuple":return yield*Zk(o,i,n,r);case"Undefined":return yield*Gk(o,i,n,r);case"Union":return yield*Yk(o,i,n,r);case"Uint8Array":return yield*Jk(o,i,n,r);case"Unknown":return yield*Hk();case"Void":return yield*Xk(o,i,n,r);default:if(!xi(o[T]))throw new bk(e);return yield*Qk(o,i,n,r)}}function e6(...e){const t=e.length===3?ut(e[0],e[1],"",e[2]):ut(e[0],[],"",e[1]);return new _1(t)}class t6 extends gt{constructor(t,n,r){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class n6 extends gt{constructor(t,n,r,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=n,this.value=r,this.error=i}}function xe(e,t,n){try{return be(e)?e[qt].Decode(n):n}catch(r){throw new n6(e,t,n,r)}}function r6(e,t,n,r){return dn(r)?xe(e,n,r.map((i,o)=>Yn(e.items,t,`${n}/${o}`,i))):xe(e,n,r)}function i6(e,t,n,r){if(!sr(r)||Vy(r))return xe(e,n,r);const i=g1(e),o=i.map(c=>c[0]),s={...r};for(const[c,f]of i)c in s&&(s[c]=Yn(f,t,`${n}/${c}`,s[c]));if(!be(e.unevaluatedProperties))return xe(e,n,s);const u=Object.getOwnPropertyNames(s),a=e.unevaluatedProperties,l={...s};for(const c of u)o.includes(c)||(l[c]=xe(a,`${n}/${c}`,l[c]));return xe(e,n,l)}function o6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=Yn(o,[...t,...i],n,r);return xe(e,n,s)}function s6(e,t,n,r){return xe(e,n,Yn(e.not,t,n,r))}function u6(e,t,n,r){if(!sr(r))return xe(e,n,r);const i=Li(e),o={...r};for(const l of i)jy(o,l)&&(Xr(o[l])&&(!iu(e.properties[l])||Ue.IsExactOptionalProperty(o,l))||(o[l]=Yn(e.properties[l],t,`${n}/${l}`,o[l])));if(!Ot(e.additionalProperties))return xe(e,n,o);const s=Object.getOwnPropertyNames(o),u=e.additionalProperties,a={...o};for(const l of s)i.includes(l)||(a[l]=xe(u,`${n}/${l}`,a[l]));return xe(e,n,a)}function a6(e,t,n,r){if(!sr(r))return xe(e,n,r);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...r};for(const c of Object.getOwnPropertyNames(r))o.test(c)&&(s[c]=Yn(e.patternProperties[i],t,`${n}/${c}`,s[c]));if(!Ot(e.additionalProperties))return xe(e,n,s);const u=Object.getOwnPropertyNames(s),a=e.additionalProperties,l={...s};for(const c of u)o.test(c)||(l[c]=xe(a,`${n}/${c}`,l[c]));return xe(e,n,l)}function l6(e,t,n,r){const i=kn(e,t);return xe(e,n,Yn(i,t,n,r))}function c6(e,t,n,r){const i=kn(e,t);return xe(e,n,Yn(i,t,n,r))}function f6(e,t,n,r){return dn(r)&&dn(e.items)?xe(e,n,e.items.map((i,o)=>Yn(i,t,`${n}/${o}`,r[o]))):xe(e,n,r)}function d6(e,t,n,r){for(const i of e.anyOf){if(!ya(i,t,r))continue;const o=Yn(i,t,n,r);return xe(e,n,o)}return xe(e,n,r)}function Yn(e,t,n,r){const i=ul(e,t),o=e;switch(e[T]){case"Array":return r6(o,i,n,r);case"Import":return o6(o,i,n,r);case"Intersect":return i6(o,i,n,r);case"Not":return s6(o,i,n,r);case"Object":return u6(o,i,n,r);case"Record":return a6(o,i,n,r);case"Ref":return l6(o,i,n,r);case"Symbol":return xe(o,n,r);case"This":return c6(o,i,n,r);case"Tuple":return f6(o,i,n,r);case"Union":return d6(o,i,n,r);default:return xe(o,n,r)}}function m6(e,t,n){return Yn(e,t,"",n)}class h6 extends gt{constructor(t,n,r){super("The encoded value does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class p6 extends gt{constructor(t,n,r,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=n,this.value=r,this.error=i}}function mt(e,t,n){try{return be(e)?e[qt].Encode(n):n}catch(r){throw new p6(e,t,n,r)}}function g6(e,t,n,r){const i=mt(e,n,r);return dn(i)?i.map((o,s)=>Zn(e.items,t,`${n}/${s}`,o)):i}function y6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=mt(e,n,r);return Zn(o,[...t,...i],n,s)}function w6(e,t,n,r){const i=mt(e,n,r);if(!sr(r)||Vy(r))return i;const o=g1(e),s=o.map(f=>f[0]),u={...i};for(const[f,d]of o)f in u&&(u[f]=Zn(d,t,`${n}/${f}`,u[f]));if(!be(e.unevaluatedProperties))return u;const a=Object.getOwnPropertyNames(u),l=e.unevaluatedProperties,c={...u};for(const f of a)s.includes(f)||(c[f]=mt(l,`${n}/${f}`,c[f]));return c}function b6(e,t,n,r){return mt(e.not,n,mt(e,n,r))}function $6(e,t,n,r){const i=mt(e,n,r);if(!sr(i))return i;const o=Li(e),s={...i};for(const c of o)jy(s,c)&&(Xr(s[c])&&(!iu(e.properties[c])||Ue.IsExactOptionalProperty(s,c))||(s[c]=Zn(e.properties[c],t,`${n}/${c}`,s[c])));if(!Ot(e.additionalProperties))return s;const u=Object.getOwnPropertyNames(s),a=e.additionalProperties,l={...s};for(const c of u)o.includes(c)||(l[c]=mt(a,`${n}/${c}`,l[c]));return l}function v6(e,t,n,r){const i=mt(e,n,r);if(!sr(r))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),u={...i};for(const f of Object.getOwnPropertyNames(r))s.test(f)&&(u[f]=Zn(e.patternProperties[o],t,`${n}/${f}`,u[f]));if(!Ot(e.additionalProperties))return u;const a=Object.getOwnPropertyNames(u),l=e.additionalProperties,c={...u};for(const f of a)s.test(f)||(c[f]=mt(l,`${n}/${f}`,c[f]));return c}function D6(e,t,n,r){const i=kn(e,t),o=Zn(i,t,n,r);return mt(e,n,o)}function E6(e,t,n,r){const i=kn(e,t),o=Zn(i,t,n,r);return mt(e,n,o)}function C6(e,t,n,r){const i=mt(e,n,r);return dn(e.items)?e.items.map((o,s)=>Zn(o,t,`${n}/${s}`,i[s])):[]}function x6(e,t,n,r){for(const i of e.anyOf){if(!ya(i,t,r))continue;const o=Zn(i,t,n,r);return mt(e,n,o)}for(const i of e.anyOf){const o=Zn(i,t,n,r);if(ya(e,t,o))return mt(e,n,o)}return mt(e,n,r)}function Zn(e,t,n,r){const i=ul(e,t),o=e;switch(e[T]){case"Array":return g6(o,i,n,r);case"Import":return y6(o,i,n,r);case"Intersect":return w6(o,i,n,r);case"Not":return b6(o,i,n,r);case"Object":return $6(o,i,n,r);case"Record":return v6(o,i,n,r);case"Ref":return D6(o,i,n,r);case"This":return E6(o,i,n,r);case"Tuple":return C6(o,i,n,r);case"Union":return x6(o,i,n,r);default:return mt(o,n,r)}}function A6(e,t,n){return Zn(e,t,"",n)}function F6(e,t){return be(e)||rt(e.items,t)}function k6(e,t){return be(e)||rt(e.items,t)}function S6(e,t){return be(e)||rt(e.returns,t)||e.parameters.some(n=>rt(n,t))}function I6(e,t){return be(e)||rt(e.returns,t)||e.parameters.some(n=>rt(n,t))}function N6(e,t){return be(e)||be(e.unevaluatedProperties)||e.allOf.some(n=>rt(n,t))}function T6(e,t){const n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),r=e.$defs[e.$ref];return be(e)||rt(r,[...n,...t])}function M6(e,t){return be(e)||rt(e.items,t)}function P6(e,t){return be(e)||rt(e.not,t)}function O6(e,t){return be(e)||Object.values(e.properties).some(n=>rt(n,t))||Ot(e.additionalProperties)&&rt(e.additionalProperties,t)}function B6(e,t){return be(e)||rt(e.item,t)}function R6(e,t){const n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return be(e)||rt(r,t)||Ot(e.additionalProperties)&&be(e.additionalProperties)}function L6(e,t){return be(e)?!0:rt(kn(e,t),t)}function j6(e,t){return be(e)?!0:rt(kn(e,t),t)}function U6(e,t){return be(e)||!Xr(e.items)&&e.items.some(n=>rt(n,t))}function _6(e,t){return be(e)||e.anyOf.some(n=>rt(n,t))}function rt(e,t){const n=ul(e,t),r=e;if(e.$id&&Lc.has(e.$id))return!1;switch(e.$id&&Lc.add(e.$id),e[T]){case"Array":return F6(r,n);case"AsyncIterator":return k6(r,n);case"Constructor":return S6(r,n);case"Function":return I6(r,n);case"Import":return T6(r,n);case"Intersect":return N6(r,n);case"Iterator":return M6(r,n);case"Not":return P6(r,n);case"Object":return O6(r,n);case"Promise":return B6(r,n);case"Record":return R6(r,n);case"Ref":return L6(r,n);case"This":return j6(r,n);case"Tuple":return U6(r,n);case"Union":return _6(r,n);default:return be(e)}}const Lc=new Set;function V6(e,t){return Lc.clear(),rt(e,t)}class W6{constructor(t,n,r,i){this.schema=t,this.references=n,this.checkFunc=r,this.code=i,this.hasTransform=V6(t,n)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return e6(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new t6(this.schema,t,this.Errors(t).First());return this.hasTransform?m6(this.schema,this.references,t):t}Encode(t){const n=this.hasTransform?A6(this.schema,this.references,t):t;if(!this.checkFunc(n))throw new h6(this.schema,t,this.Errors(t).First());return n}}var br;(function(e){function t(o){return o===36}e.DollarSign=t;function n(o){return o===95}e.IsUnderscore=n;function r(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=r;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(br||(br={}));var wa;(function(e){function t(o){return o.length===0?!1:br.IsNumeric(o.charCodeAt(0))}function n(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const u=o.charCodeAt(s);if(!(br.IsAlpha(u)||br.IsNumeric(u)||br.DollarSign(u)||br.IsUnderscore(u)))return!1}return!0}function r(o){return o.replace(/'/g,"\\'")}function i(o,s){return n(s)?`${o}.${s}`:`${o}['${r(s)}']`}e.Encode=i})(wa||(wa={}));var jc;(function(e){function t(n){const r=[];for(let i=0;i<n.length;i++){const o=n.charCodeAt(i);br.IsNumeric(o)||br.IsAlpha(o)?r.push(n.charAt(i)):r.push(`_${o}_`)}return r.join("").replace(/__/g,"_")}e.Encode=t})(jc||(jc={}));var Uc;(function(e){function t(n){return n.replace(/'/g,"\\'")}e.Escape=t})(Uc||(Uc={}));class q6 extends gt{constructor(t){super("Unknown type"),this.schema=t}}class u0 extends gt{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var pi;(function(e){function t(s,u,a){return Ue.ExactOptionalPropertyTypes?`('${u}' in ${s} ? ${a} : true)`:`(${wa.Encode(s,u)} !== undefined ? ${a} : true)`}e.IsExactOptionalProperty=t;function n(s){return Ue.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=n;function r(s){return Ue.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=r;function i(s){return Ue.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return Ue.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(pi||(pi={}));var ys;(function(e){function t(p){return p[T]==="Any"||p[T]==="Unknown"}function*n(p,B,y){yield"true"}function*r(p,B,y){yield"true"}function*i(p,B,y){yield`Array.isArray(${y})`;const[q,U]=[pu("value","any"),pu("acc","number")];ee(p.maxItems)&&(yield`${y}.length <= ${p.maxItems}`),ee(p.minItems)&&(yield`${y}.length >= ${p.minItems}`);const _=en(p.items,B,"value");if(yield`${y}.every((${q}) => ${_})`,ke(p.contains)||ee(p.minContains)||ee(p.maxContains)){const we=ke(p.contains)?p.contains:Ie(),Rt=en(we,B,"value"),lr=ee(p.minContains)?[`(count >= ${p.minContains})`]:[],Tn=ee(p.maxContains)?[`(count <= ${p.maxContains})`]:[],Jn=`const count = value.reduce((${U}, ${q}) => ${Rt} ? acc + 1 : acc, 0)`,gu=["(count > 0)",...lr,...Tn].join(" && ");yield`((${q}) => { ${Jn}; return ${gu}})(${y})`}p.uniqueItems===!0&&(yield`((${q}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${y})`)}function*o(p,B,y){yield`(typeof value === 'object' && Symbol.asyncIterator in ${y})`}function*s(p,B,y){yield`(typeof ${y} === 'bigint')`,wr(p.exclusiveMaximum)&&(yield`${y} < BigInt(${p.exclusiveMaximum})`),wr(p.exclusiveMinimum)&&(yield`${y} > BigInt(${p.exclusiveMinimum})`),wr(p.maximum)&&(yield`${y} <= BigInt(${p.maximum})`),wr(p.minimum)&&(yield`${y} >= BigInt(${p.minimum})`),wr(p.multipleOf)&&(yield`(${y} % BigInt(${p.multipleOf})) === 0`)}function*u(p,B,y){yield`(typeof ${y} === 'boolean')`}function*a(p,B,y){yield*wn(p.returns,B,`${y}.prototype`)}function*l(p,B,y){yield`(${y} instanceof Date) && Number.isFinite(${y}.getTime())`,ee(p.exclusiveMaximumTimestamp)&&(yield`${y}.getTime() < ${p.exclusiveMaximumTimestamp}`),ee(p.exclusiveMinimumTimestamp)&&(yield`${y}.getTime() > ${p.exclusiveMinimumTimestamp}`),ee(p.maximumTimestamp)&&(yield`${y}.getTime() <= ${p.maximumTimestamp}`),ee(p.minimumTimestamp)&&(yield`${y}.getTime() >= ${p.minimumTimestamp}`),ee(p.multipleOfTimestamp)&&(yield`(${y}.getTime() % ${p.multipleOfTimestamp}) === 0`)}function*c(p,B,y){yield`(typeof ${y} === 'function')`}function*f(p,B,y){const q=globalThis.Object.getOwnPropertyNames(p.$defs).reduce((U,_)=>[...U,p.$defs[_]],[]);yield*wn(Wo(p.$ref),[...B,...q],y)}function*d(p,B,y){yield`Number.isInteger(${y})`,ee(p.exclusiveMaximum)&&(yield`${y} < ${p.exclusiveMaximum}`),ee(p.exclusiveMinimum)&&(yield`${y} > ${p.exclusiveMinimum}`),ee(p.maximum)&&(yield`${y} <= ${p.maximum}`),ee(p.minimum)&&(yield`${y} >= ${p.minimum}`),ee(p.multipleOf)&&(yield`(${y} % ${p.multipleOf}) === 0`)}function*g(p,B,y){const q=p.allOf.map(U=>en(U,B,y)).join(" && ");if(p.unevaluatedProperties===!1){const U=Nr(`${new RegExp(Co(p))};`),_=`Object.getOwnPropertyNames(${y}).every(key => ${U}.test(key))`;yield`(${q} && ${_})`}else if(ke(p.unevaluatedProperties)){const U=Nr(`${new RegExp(Co(p))};`),_=`Object.getOwnPropertyNames(${y}).every(key => ${U}.test(key) || ${en(p.unevaluatedProperties,B,`${y}[key]`)})`;yield`(${q} && ${_})`}else yield`(${q})`}function*C(p,B,y){yield`(typeof value === 'object' && Symbol.iterator in ${y})`}function*$(p,B,y){typeof p.const=="number"||typeof p.const=="boolean"?yield`(${y} === ${p.const})`:yield`(${y} === '${Uc.Escape(p.const)}')`}function*S(p,B,y){yield"false"}function*x(p,B,y){yield`(!${en(p.not,B,y)})`}function*I(p,B,y){yield`(${y} === null)`}function*j(p,B,y){yield pi.IsNumberLike(y),ee(p.exclusiveMaximum)&&(yield`${y} < ${p.exclusiveMaximum}`),ee(p.exclusiveMinimum)&&(yield`${y} > ${p.exclusiveMinimum}`),ee(p.maximum)&&(yield`${y} <= ${p.maximum}`),ee(p.minimum)&&(yield`${y} >= ${p.minimum}`),ee(p.multipleOf)&&(yield`(${y} % ${p.multipleOf}) === 0`)}function*W(p,B,y){yield pi.IsObjectLike(y),ee(p.minProperties)&&(yield`Object.getOwnPropertyNames(${y}).length >= ${p.minProperties}`),ee(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${y}).length <= ${p.maxProperties}`);const q=Object.getOwnPropertyNames(p.properties);for(const U of q){const _=wa.Encode(y,U),we=p.properties[U];if(p.required&&p.required.includes(U))yield*wn(we,B,_),(zo(we)||t(we))&&(yield`('${U}' in ${y})`);else{const Rt=en(we,B,_);yield pi.IsExactOptionalProperty(y,U,Rt)}}if(p.additionalProperties===!1)if(p.required&&p.required.length===q.length)yield`Object.getOwnPropertyNames(${y}).length === ${q.length}`;else{const U=`[${q.map(_=>`'${_}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${y}).every(key => ${U}.includes(key))`}if(typeof p.additionalProperties=="object"){const U=en(p.additionalProperties,B,`${y}[key]`),_=`[${q.map(we=>`'${we}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${y}).every(key => ${_}.includes(key) || ${U}))`}}function*Z(p,B,y){yield`${y} instanceof Promise`}function*Be(p,B,y){yield pi.IsRecordLike(y),ee(p.minProperties)&&(yield`Object.getOwnPropertyNames(${y}).length >= ${p.minProperties}`),ee(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${y}).length <= ${p.maxProperties}`);const[q,U]=Object.entries(p.patternProperties)[0],_=Nr(`${new RegExp(q)}`),we=en(U,B,"value"),Rt=ke(p.additionalProperties)?en(p.additionalProperties,B,y):p.additionalProperties===!1?"false":"true",lr=`(${_}.test(key) ? ${we} : ${Rt})`;yield`(Object.entries(${y}).every(([key, value]) => ${lr}))`}function*bt(p,B,y){const q=kn(p,B);if(We.functions.has(p.$ref))return yield`${_i(p.$ref)}(${y})`;yield*wn(q,B,y)}function*Qe(p,B,y){const q=Nr(`${new RegExp(p.source,p.flags)};`);yield`(typeof ${y} === 'string')`,ee(p.maxLength)&&(yield`${y}.length <= ${p.maxLength}`),ee(p.minLength)&&(yield`${y}.length >= ${p.minLength}`),yield`${q}.test(${y})`}function*kt(p,B,y){yield`(typeof ${y} === 'string')`,ee(p.maxLength)&&(yield`${y}.length <= ${p.maxLength}`),ee(p.minLength)&&(yield`${y}.length >= ${p.minLength}`),p.pattern!==void 0&&(yield`${Nr(`${new RegExp(p.pattern)};`)}.test(${y})`),p.format!==void 0&&(yield`format('${p.format}', ${y})`)}function*yn(p,B,y){yield`(typeof ${y} === 'symbol')`}function*In(p,B,y){yield`(typeof ${y} === 'string')`,yield`${Nr(`${new RegExp(p.pattern)};`)}.test(${y})`}function*Ui(p,B,y){yield`${_i(p.$ref)}(${y})`}function*dl(p,B,y){if(yield`Array.isArray(${y})`,p.items===void 0)return yield`${y}.length === 0`;yield`(${y}.length === ${p.maxItems})`;for(let q=0;q<p.items.length;q++)yield`${en(p.items[q],B,`${y}[${q}]`)}`}function*Zo(p,B,y){yield`${y} === undefined`}function*du(p,B,y){yield`(${p.anyOf.map(U=>en(U,B,y)).join(" || ")})`}function*Nn(p,B,y){yield`${y} instanceof Uint8Array`,ee(p.maxByteLength)&&(yield`(${y}.length <= ${p.maxByteLength})`),ee(p.minByteLength)&&(yield`(${y}.length >= ${p.minByteLength})`)}function*mu(p,B,y){yield"true"}function*ml(p,B,y){yield pi.IsVoidLike(y)}function*hu(p,B,y){const q=We.instances.size;We.instances.set(q,p),yield`kind('${p[T]}', ${q}, ${y})`}function*wn(p,B,y,q=!0){const U=un(p.$id)?[...B,p]:B,_=p;if(q&&un(p.$id)){const we=_i(p.$id);if(We.functions.has(we))return yield`${we}(${y})`;{We.functions.set(we,"<deferred>");const Rt=si(we,p,B,"value",!1);return We.functions.set(we,Rt),yield`${we}(${y})`}}switch(_[T]){case"Any":return yield*n();case"Argument":return yield*r();case"Array":return yield*i(_,U,y);case"AsyncIterator":return yield*o(_,U,y);case"BigInt":return yield*s(_,U,y);case"Boolean":return yield*u(_,U,y);case"Constructor":return yield*a(_,U,y);case"Date":return yield*l(_,U,y);case"Function":return yield*c(_,U,y);case"Import":return yield*f(_,U,y);case"Integer":return yield*d(_,U,y);case"Intersect":return yield*g(_,U,y);case"Iterator":return yield*C(_,U,y);case"Literal":return yield*$(_,U,y);case"Never":return yield*S();case"Not":return yield*x(_,U,y);case"Null":return yield*I(_,U,y);case"Number":return yield*j(_,U,y);case"Object":return yield*W(_,U,y);case"Promise":return yield*Z(_,U,y);case"Record":return yield*Be(_,U,y);case"Ref":return yield*bt(_,U,y);case"RegExp":return yield*Qe(_,U,y);case"String":return yield*kt(_,U,y);case"Symbol":return yield*yn(_,U,y);case"TemplateLiteral":return yield*In(_,U,y);case"This":return yield*Ui(_,U,y);case"Tuple":return yield*dl(_,U,y);case"Undefined":return yield*Zo(_,U,y);case"Union":return yield*du(_,U,y);case"Uint8Array":return yield*Nn(_,U,y);case"Unknown":return yield*mu();case"Void":return yield*ml(_,U,y);default:if(!xi(_[T]))throw new q6(p);return yield*hu(_,U,y)}}const We={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function en(p,B,y,q=!0){return`(${[...wn(p,B,y,q)].join(" && ")})`}function _i(p){return`check_${jc.Encode(p)}`}function Nr(p){const B=`local_${We.variables.size}`;return We.variables.set(B,`const ${B} = ${p}`),B}function si(p,B,y,q,U=!0){const[_,we]=[`
`,Jn=>"".padStart(Jn," ")],Rt=pu("value","any"),lr=Rd("boolean"),Tn=[...wn(B,y,q,U)].map(Jn=>`${we(4)}${Jn}`).join(` &&${_}`);return`function ${p}(${Rt})${lr} {${_}${we(2)}return (${_}${Tn}${_}${we(2)})
}`}function pu(p,B){const y=We.language==="typescript"?`: ${B}`:"";return`${p}${y}`}function Rd(p){return We.language==="typescript"?`: ${p}`:""}function Rw(p,B,y){const q=si("check",p,B,"value"),U=pu("value","any"),_=Rd("boolean"),we=[...We.functions.values()],Rt=[...We.variables.values()],lr=un(p.$id)?`return function check(${U})${_} {
  return ${_i(p.$id)}(value)
}`:`return ${q}`;return[...Rt,...we,lr].join(`
`)}function Ld(...p){const B={language:"javascript"},[y,q,U]=p.length===2&&dn(p[1])?[p[0],p[1],B]:p.length===2&&!dn(p[1])?[p[0],[],p[1]]:p.length===3?[p[0],p[1],p[2]]:p.length===1?[p[0],[],B]:[null,[],B];if(We.language=U.language,We.variables.clear(),We.functions.clear(),We.instances.clear(),!ke(y))throw new u0(y);for(const _ of q)if(!ke(_))throw new u0(_);return Rw(y,q)}e.Code=Ld;function Lw(p,B=[]){const y=Ld(p,B,{language:"javascript"}),q=globalThis.Function("kind","format","hash",y),U=new Map(We.instances);function _(Tn,Jn,gu){if(!xi(Tn)||!U.has(Jn))return!1;const jw=Qf(Tn),Uw=U.get(Jn);return jw(Uw,gu)}function we(Tn,Jn){return Jf(Tn)?Hf(Tn)(Jn):!1}function Rt(Tn){return Dd(Tn)}const lr=q(_,we,Rt);return new W6(p,B,lr,y)}e.Compile=Lw})(ys||(ys={}));const _c={};function V1(e,t){e in _c||(_c[e]=t)}let a0=!1;function z6(){a0||(a0=!0,y3(e=>(_c[e.schema[T]]||B1)(e)))}const Vc=Symbol.for("object-shape-tester.shape-identifier");function _e(e){if(z6(),Ed(e))return e;const t=Wc(e),n=gi(t,!1),r=gi(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:ys.Compile(t),$_compiledSchemaNoExtraKeys:ys.Compile(n),$_compiledSchemaExtraKeys:ys.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[Vc]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Ed(e){return k.hasKey(e,Vc)&&!!e[Vc]}function Cd(e){return k.hasKey(e,T)}function gi(e,t){const n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(r=>gi(r,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(r=>gi(r,t))),Cd(e.items)?n.items=gi(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(r=>gi(r,t))),k.isObject(e.properties)){const r={};Object.entries(e.properties).forEach(([i,o])=>{r[i]=gi(o,t)}),n.properties=r}return n.additionalProperties=t,n}function Wc(e){if(Cd(e))return e;if(Ed(e))return e.$_schema;if(k.isFunction(e))return Ae.Function([],Ae.Any(),{default:e});if(k.isObject(e)){const t={},n={};return Object.entries(e).forEach(([r,i])=>{const o=Wc(i);n[r]=o,t[r]=o.default}),Ae.Object(n,{default:t})}else{if(k.isArray(e))return Ae.Array(Ae.Union(e.map(t=>Wc(t))),{default:[]});if(k.isPrimitive(e)){if(k.isString(e))return Ae.String({default:e});if(k.isNumber(e))return Ae.Number({default:e});if(k.isBoolean(e))return Ae.Boolean({default:e});if(k.isSymbol(e))return Ae.Symbol({default:e});if(k.isNull(e))return Ae.Null({default:null});if(k.isUndefined(e))return Ae.Undefined({default:void 0});if(k.isBigInt(e))return Ae.BigInt({default:e});nr.tsType(e).equals(),nr.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${h(e)}`)}}function qc(e,t){const n=Bn(e);return _e(Ae.Union(n.map(r=>Ae.Literal(r)),{default:n[0]}))}function K6(e){return k.isSymbol(e)?Z6(e):_e(Ae.Const(e,{default:e}))}const Pu="ExactSymbol";function Z6(e){return xi(Pu)||n1(Pu,(t,n)=>n===t.symbol),V1(Pu,({schema:t})=>`Expected symbol ${t.symbol?.description?Uv({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),_e(Ae.Unsafe({[T]:Pu,symbol:e,default:e}))}function ct(e,t={}){Ue.ExactOptionalPropertyTypes=!0;const n=_e(e).$_schema,r=t.alsoUndefined?Ae.Union([Ae.Undefined(),n]):n;return _e(Ae.Optional(r))}function It(...e){let t;const n=e.map((r,i)=>{const o=_e(r);return i||(t=o.default),o.$_schema});return _e(Ae.Union(n,{default:t}))}class G6 extends TypeError{value;errors;failureMessage;name="ShapeMismatchError";constructor(t,n,r){const i=n.map(s=>W1(s)).join(`
`),o=Ca(r,`Shape mismatch:
${df(i,1)}`);super(o),this.value=t,this.errors=n,this.failureMessage=r}}function Y6(e){return e.errors.flatMap(t=>Array.from(t))}function W1(e,t=0){const n=Y6(e).map(i=>W1(i,t+1)),r=[e.path,e.message].filter(k.isTruthy).join(": ")+(n.length?":":"");return[df(r,t),...n].join(`
`)}function bi(e,t,n={}){return q1(t,n).Check(e)}function J6(e,t,n={},r){if(bi(e,t,n))return;const i=Array.from(q1(t,n).Errors(e));if(i.length)throw new G6(e,i,r)}function q1(e,t){return e=H6(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function H6(e){return _e(e)}const Gu="recordShape";function xd({keys:e,values:t,partial:n,additionalProperties:r}){X6();const i=z1(e),o=_e(t);return Ae.Unsafe({[T]:Gu,keysShape:i,valuesShape:o,isPartial:!!n,additionalProperties:!!r,default:Q6({isPartial:!!n,keysShape:i,valuesShape:o})})}function X6(){xi(Gu)||n1(Gu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const n=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:bi(i,e.keysShape),u=bi(o,e.valuesShape);return s&&u}),r=e.isPartial?!0:!l0(e.keysShape,t).length;return n&&r}),V1(Gu,e=>{const n=e.schema,r=e.value;if(typeof r!="object"||!r||Array.isArray(r))return"Expected an object";const i=Si(Object.entries(r),([a])=>a,(a,[l,c])=>!bi(l,n.keysShape)||!bi(c,n.valuesShape)),o=l0(n.keysShape,r),s=i.length?["Failure at keys",i.join(",")].join(": "):"",u=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,u].filter(k.isTruthy).join(`
`)})}function l0(e,t){const n=ba(e).filter(r=>k.isPropertyKey(r));return n.length?n.filter(r=>!k.hasKey(t,r)):[]}function Q6({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{const r=ba(e),i=t.default;return Object.fromEntries(r.map(o=>[o,i]))}}function z1(e){return Ed(e)?e:Cd(e)?_e(e):k.isObject(e)?qc(e):k.isArray(e)&&k.isLengthAtLeast(e,1)?It(...e.map(t=>K6(t))):k.isPropertyKey(e)?_e(e):_e(Ae.Undefined())}function ba(e){const t=e.$_schema,n=t[T].toLowerCase();return["const","literal"].includes(n)?[t.const]:n==="union"?V0(t.anyOf.flatMap(r=>ba(_e(r)))):["undefined","number","string","symbol"].includes(n)?[]:ba(z1(e.default))}function e8(e){return _e(Ae.Unknown({default:e}))}const t8=_e({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:e8()});function Yl(e){return bi(e,t8,{allowExtraKeys:!0})}class K1 extends EE{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||CE}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:n8}=pD,c0=()=>document.createComment(""),is=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=r.insertBefore(c0(),i),s=r.insertBefore(c0(),i);n=new n8(o,s,e,e.options)}else{const o=n._$AB.nextSibling,s=n._$AM,u=s!==e;if(u){let a;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(a=e._$AU)!==s._$AU&&n._$AP(a)}if(o!==i||u){let a=n._$AA;for(;a!==o;){const l=a.nextSibling;r.insertBefore(a,i),a=l}}}return n},mi=(e,t,n=e)=>(e._$AI(t,n),e),r8={},i8=(e,t=r8)=>e._$AH=t,o8=e=>e._$AH,Jl=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ad={ATTRIBUTE:1,CHILD:2,ELEMENT:6},ur=e=>(...t)=>({_$litDirective$:e,values:t});class ar{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s8={attribute:!0,type:String,converter:ua,reflect:!1,hasChanged:xf},u8=(e=s8,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(u){const a=t.get.call(this);t.set.call(this,u),this.requestUpdate(s,a,e)},init(u){return u!==void 0&&this.C(s,void 0,e,u),u}}}if(r==="setter"){const{name:s}=n;return function(u){const a=this[s];t.call(this,u),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+r)};function a8(e){return(t,n)=>typeof n=="object"?u8(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=ur(class extends ar{constructor(e){if(super(e),e.type!==Ad.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return ln}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=e=>e??ae;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function l8(e,t,n){return e?t(e):n?.(e)}class c8 extends ps{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function f8(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(u=>!!u.index).length;if(r||i)return[...e];const o=e.map(u=>[u]);return o.length||(o[0]=[]),n.forEach(u=>{u>=0&&u<e.length&&(o[u]=[])}),t.forEach(u=>{const a=o[u.index];a&&a.splice(0,0,...u.values)}),o.flat()}function zc(e){return k.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Fd(e){return k.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Z1(e){return Si(e,t=>{if(zc(t))return t.definition;if(Fd(t))return t.tagInterpolationKey||t},k.isTruthy)}const G1=new WeakMap;function d8(e,t){const n=Z1(t);return Y1(G1,[e,...n]).value?.template}function m8(e,t,n){const r=Z1(t);return H1(G1,[e,...r],n)}function Y1(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=J1(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Y1(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function J1(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function H1(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=J1(e,t,r);if(!o)return{result:!1,reason:s};const u=i??{nested:void 0,template:void 0};if(i||e.set(o,u),r===t.length-1)return u.template=n,{result:!0,reason:"set value at end of keys array"};const a=u.nested??new WeakMap;return u.nested||(u.nested=a),H1(a,t,n,r+1)}function X1(e,t,n){const r=d8(e,t),i=r??n();if(!r){const u=m8(e,t,i);if(!u.result)throw new Error(`Failed to set template transform: ${u.reason}`)}const o=i.valuesTransform(t),s=f8(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function Q1(e,t,n,r){const i=[],o=[],s=[],u=[];return e.forEach((l,c)=>{const f=i.length-1,d=i[f],g=c-1,C=t[g];r&&r(l);let $,S=[];if(typeof d=="string"&&($=n(d,l,C),$)){i[f]=[d,$.replacement].join(""),s.push(g);const I=$.getExtraValues;S=I?I(C):[],S.length&&I?(i[f]+=" ",S.forEach((j,W)=>{W&&i.push(" ")}),u.push(j=>{const W=j[g],Z=I(W);return{index:g,values:Z}}),i.push(l)):i[f]+=l}$||i.push(l);const x=e.raw[c];$?(o[f]=[o[f],$.replacement,x].join(""),S.length&&S.forEach(()=>{o.push("")})):o.push(x)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=u.flatMap(f=>f(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function h8(...[e,t,n]){if(Fd(n))return{replacement:n.tagName,getExtraValues:void 0}}function p8(e,t){return Q1(e,t,h8)}function F(e,...t){const n=X1(e,t,()=>p8(e,t));return zu(n.strings,...n.values)}const g8={allowPolymorphicState:!1,errorHandler:void 0};function ew(e,t){const n=e.instanceState;Fe(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&Fe(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}class y8 extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function kd(){return e=>class extends y8{static type=e;_type=e;constructor(t){super(e,t)}}}function Ct(){return kd()}function w8(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=kd()([e,r].join("-"));return n[r]=i,n},{}):{}}function b8(e){return e?an(e,t=>t):{}}function tw(e,t){t in e||a8()(e,t)}function $8(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function f0(e,t){const n=e;function r(s){t?$8(s,e,e.tagName):tw(e,s)}function i(s,u){return r(u),n[u]}return new Proxy({},{get:i,set(s,u,a){r(u);const l=n[u];function c(d){s[u]=d,n[u]=d}const f=e.observablePropertyListenerMap[u];if(l!==a&&Yl(l)&&f&&l.removeListener(f),Yl(a))if(f)a.listen(!1,f);else{let d=function(){e.requestUpdate()};e.observablePropertyListenerMap[u]=d,a.listen(!1,d)}else Yl(l)&&(e.observablePropertyListenerMap[u]=void 0);return c(a),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,u){if(u in s)return{get value(){return i(s,u)},configurable:!0,enumerable:!0}},has(s,u){return Reflect.has(s,u)}})}function d0(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid element string name '${r}' in '${e}': element string names must begin with the element's tag name.`)})}function m0(e,t,n){return n?cv(n,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function v8({hostClassNames:e,cssVars:t}){return{hostClasses:an(e,(n,r)=>({name:Ge(r),selector:Ge(`:host(.${r})`)})),cssVars:t}}function D8({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&Fe(t).forEach(o=>{const s=t[o],u=n[o];typeof s=="function"&&(s({state:r,inputs:i})?e.classList.add(u):e.classList.remove(u))})}function E8({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function o(u){Fe(u).forEach(a=>{const l=u[a];e.instanceState[a]=l})}return{cssVars:n,slotNames:r,testIds:i,dispatch:u=>e.dispatchEvent(u),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Sd(...e){return nr.isEmpty(e),t=>{const n=t;if(!k.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return C8({...n,options:{...n.options}})}}function C8(e){if(!k.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!k.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...g8,...e.options},n=w8(e.tagName,e.events),r=b8(e.hostClasses);e.hostClasses&&d0(e.tagName,e.hostClasses),e.cssVars&&d0(e.tagName,e.cssVars);const i=e.cssVars?Hr(e.cssVars):{},o=m0(e.tagName,"slot",e.slotNames),s=m0(e.tagName,"test-id",e.testIds),u=typeof e.styles=="function"?e.styles(v8({hostClassNames:r,cssVars:i})):e.styles||F``,a=e.render;function l(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:f}}const c=class extends c8{static elementOptions=t;static tagName=e.tagName;static styles=u;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return E8({element:this,eventsMap:n,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=n;static render=a;static hostClasses=r;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const g=e.state(f);if(g instanceof Promise)throw new TypeError("init cannot be asynchronous");Fe(g).forEach(C=>{tw(this,C),this.instanceState[C]=g[C]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=a(f);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return D8({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},d}catch(f){const d=nf(f,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,t.errorHandler?.(d),Yt(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{k.hasKey(f,"destroy")&&k.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){ew(this,f)}observablePropertyListenerMap={};instanceInputs=f0(this,!1);instanceState=f0(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:Rv(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h0=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},x8=ur(class extends ar{constructor(e){if(super(e),e.type!==Ad.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const u of e)i[s]=r?r(u,s):s,o[s]=n(u,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=o8(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const u=this.ut??=[],a=[];let l,c,f=0,d=i.length-1,g=0,C=o.length-1;for(;f<=d&&g<=C;)if(i[f]===null)f++;else if(i[d]===null)d--;else if(u[f]===s[g])a[g]=mi(i[f],o[g]),f++,g++;else if(u[d]===s[C])a[C]=mi(i[d],o[C]),d--,C--;else if(u[f]===s[C])a[C]=mi(i[f],o[C]),is(e,a[C+1],i[f]),f++,C--;else if(u[d]===s[g])a[g]=mi(i[d],o[g]),is(e,i[f],i[d]),d--,g++;else if(l===void 0&&(l=h0(s,g,C),c=h0(u,f,d)),l.has(u[f]))if(l.has(u[d])){const $=c.get(s[g]),S=$!==void 0?i[$]:null;if(S===null){const x=is(e,i[f]);mi(x,o[g]),a[g]=x}else a[g]=mi(S,o[g]),is(e,i[f],S),i[$]=null;g++}else Jl(i[d]),d--;else Jl(i[f]),f++;for(;g<=C;){const $=is(e,a[C+1]);mi($,o[g]),a[g++]=$}for(;f<=d;){const $=i[f++];$!==null&&Jl($)}return this.ut=s,i8(e,a),ln}}),A8=x8;function cu(e,t){return Fi(e,t),e.element}function F8(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Fi(e,t){const n=F8(e),r=n?`: in ${n}`:"";if(e.type!==Ad.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function k8(e,t){return ur(class extends ar{element;constructor(n){super(n),this.element=As.instanceOf(cu(n,e),HTMLElement)}render(...n){return t({params:n,directive:this,element:this.element}),ln}})}const $i=k8("attributes",({element:e,params:[t],directive:n})=>{if(!t)return;const i=Gs(n,"allAttributesApplied",()=>new Set);Fe(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===ae?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function S8(e){const t=ur(class extends ar{element;constructor(n){super(n),this.element=cu(n,e)}render(n){return this.element.setAttribute(e,n),ln}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function H(e,t){return I8(e,t)}const I8=ur(class extends ar{element;lastListenerMetaData;constructor(e){super(e),this.element=cu(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),ln}});function N8(e){return H("keydown",async t=>{const n=t.code.toLowerCase();(n.includes("enter")||n.includes("return")||n==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const p0="onDomCreated",g0=ur(class extends ar{element;constructor(e){super(e),Fi(e,p0)}update(e,[t]){Fi(e,p0);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),y0="onDomRendered",T8=ur(class extends ar{constructor(e){super(e),Fi(e,y0)}update(e,[t]){Fi(e,y0);const n=e.element;return window.requestAnimationFrame(()=>t(n)),this.render(t)}render(e){}}),w0="onResize",nw=ur(class extends ar{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&M8(this.element,this.callback,e)});callback;constructor(e){super(e),Fi(e,w0)}update(e,[t]){Fi(e,w0),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function M8(e,t,n){const r=n[0];if(!r)throw console.error(n),new Error("Resize observation triggered but the first entry was empty.");t({target:r.target,contentRect:r.contentRect},e)}function Kt(e,t,n){return l8(e,()=>t,()=>n)}const{attributeDirective:P8}=S8("data-test-id"),uo=P8;function rw(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return(...r)=>i=>(t(i),Sd(...r)(n(i)))}function O8(e,t){return B8(void 0,e)}const B8=ur(class extends ar{element;constructor(e){super(e),this.element=cu(e,"assign")}render(e,t){return ew(this.element,t),ln}}),R8={};function L8(e,t){return t.map((n,r)=>{const i=e[r],o=e[r+1];if(i&&o){const{shouldHaveTagNameHere:s}=iw(i,o);if(s&&k.isString(n))return{tagName:n,tagInterpolationKey:Gs(R8,n,()=>({tagName:n}))}}return n})}function iw(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function j8(...[e,t,n]){const r=zc(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:o}=iw(e,t),s=Fd(r);if(s&&o&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!o||!s?void 0:{replacement:r.tagName,getExtraValues(a){const l=zc(a)?a.inputs:void 0;return[i&&l?O8(l):void 0].filter(k.isTruthy)}}}function U8(e){}function _8(e){return Q1(e.strings,e.values,j8,U8)}function w(e,...t){const n=L8(e,t),r=aD(e,...n),i=X1(e,n,()=>_8(r));return{...r,strings:i.strings,values:i.values}}function Kc(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if(!t?.length&&!n?.length)return"";const r=[...n||[],""],o=(t??[""]).map((s,u)=>{const a=V8(s,r[u]);return`${s}${a}`});return Lg(o.join(""))}function V8(e,t){return t._$litType$!=null||t._$litDirective$!=null?Kc(t):Array.isArray(t)?t.map(r=>Kc(r)).join(""):e.endsWith("=")?`"${t}"`:t}function ow(e){return an(e,(t,n)=>n instanceof ye?Ge(n.toString({format:"hex"})):ow(n))}const W8="dodgerblue";function Zc(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function Hl({background:e,foreground:t}){return{background:e??new ye(Zc(t)),foreground:t??new ye(Zc(e))}}var $a;(function(e){e.Dark="dark",e.Light="light"})($a||($a={}));function q8(e){return e==="black"?"white":"black"}const z8={black:{foregroundFaint1:new ye("#ccc"),foregroundFaint2:new ye("#eee")},white:{foregroundFaint1:new ye("#ccc"),foregroundFaint2:new ye("#eee")}},K8={black:{backgroundFaint1:new ye("#666"),backgroundFaint2:new ye("#444")},white:{backgroundFaint1:new ye("#ccc"),backgroundFaint2:new ye("#fafafa")}};function b0({themeColor:e=W8,themeStyle:t=$a.Light}={}){const n=new ye(e),r=new ye(t===$a.Dark?"black":"white"),i=Zc(r),o=new ye(i),s={nav:{hover:Hl({background:n.clone().set({"hsl.l":93})}),active:Hl({background:n.clone().set({"hsl.l":90})}),selected:Hl({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...K8[q8(i)],foreground:o,...z8[i]}};return ow(s)}var Qn;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Qn||(Qn={}));async function Gc(e=1){const t=new Y0;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function Z8(e,t){return{element:e,children:sw(e)}}function sw(e,t,n){return G8(e).map(r=>{const i=sw(r);return{element:r,children:i}})}function G8(e){return[...e.children,...e.shadowRoot?.children??[]]}function Xl(e){return e.matches(":focus")}async function Y8(e){return J8(e,1)}async function J8(e,t){return new Promise(n=>{new IntersectionObserver((i,o)=>{nr.isLengthAtLeast(i,1),o.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function eo(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,o=r?.constructor.name,s=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return r}function H8({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,u=0;s<r;s++){const a=o.codePointAt(s);for(;u<n;)if(i.codePointAt(u++)===a)continue e;return!1}return!0}const X8=Ng(32);function Yu(e){return e.join(X8)}function uw(e){if(!e.length)return[];const t=Yu(e),n=uw(e.slice(0,-1));return[t,...n]}const Q8=["error","errors"];function eS(e){return Q8.includes(e)}function tS({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(s=>(r(s),Yu(s.fullUrlBreadcrumbs))).forEach(s=>n[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&eS(t),s=Yu(i.fullUrlBreadcrumbs);if(H8({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(a=>k.isString(a)?a:Kc(a))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||n[s]){const a=uw(i.fullUrlBreadcrumbs);r(i),a.forEach(l=>n[l]=!0)}else n[s]=!1}),e.filter(i=>{const o=Yu(i.fullUrlBreadcrumbs),s=n[o];if(!k.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Id extends Error{name="SpaRouterError"}class $0 extends Id{name="GlobalUrlEventsConsolidationError"}class nS extends Id{name="SanitizationDepthMaxed"}_e({paths:[""],search:ct(It(void 0,xd({keys:"",values:[""]}))),hash:ct(It(void 0,""))});const rS=_e({basePath:ct("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:ct(1,{alsoUndefined:!0}),disableWarnings:ct(!1,{alsoUndefined:!0}),isPaused:ct(!1,{alsoUndefined:!0})}),Ql="://";function Nd(...e){const t=e.join("/"),[n,r=""]=t.includes(Ql)?t.split(Ql):["",t];let i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").reduce((s,u,a,l)=>{if(i)return s;const c=l[a+1];let f=u;const d=c?.startsWith("?"),g=!u.includes("?")&&d,C=c==="?";if(d||g){i=!0;let $=!1;const S=l.slice(a+2).reduce((x,I)=>(I.includes("#")&&($=!0),$?x.concat(I):[x,I].join("&")),"");f=[u,c,C?oo({value:S,prefix:"&"}):S].join("")}return s.concat(f)},[]);return[n,n?Ql:"",o.join("/")].join("")}var Ao;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Ao||(Ao={}));var Fo;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Fo||(Fo={}));const iS=_e({encoding:ct(It(void 0,qc(Ao))),searchParamStrategy:ct(It(void 0,qc(Fo)))});function Ou(e,t){return e.map(n=>{if(n!=null)return ao(String(n),t)}).filter(n=>n!=null)}function ao(e,t){return t?.encoding===Ao.Decode?decodeURIComponent(e):t?.encoding===Ao.Encode?encodeURIComponent(e):e}const oS=_e(xd({keys:"",values:[""]}));function sS(e,t,n){const r=n?.searchParamStrategy===Fo.Clear?{}:an(e,(s,u)=>fv(u)),i=an(t,(s,u)=>{if(n?.searchParamStrategy===Fo.Append){const a=r[s],l=k.isArray(a)?a:[a];if(u){const c=k.isArray(u)?u:[u];return Ou([...l,...c],n)}else return Ou(l,n)}else return k.isArray(u)?Ou(u,n):u?Ou([u],n):void 0});return yf({...r,...i},(s,u)=>!!u)}function aw(e,t){return k.isString(e)&&!e.includes("?")?{}:(k.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...u]=Nv(o,"=");return[s,u.length?u.join("="):void 0]}).reduce((o,[s,u])=>{const a=lw({options:t,key:s,value:u}),l=Gs(o,a.key,()=>[]);return u!=null&&l.push(a.value),o},{})}function uS(e){if(e!=null)return k.isArray(e)?[...e]:e===""?[]:[e]}function aS(e,t){const n=Si(Object.entries(e),([r,i])=>{const o=uS(i);return o?.length?o.map(s=>{const u=lw({options:t,key:r,value:s});return[u.key,u.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?Gt({value:n.join("&"),prefix:"?"}):""}function lw({options:e,key:t,value:n}){return{key:ao(t,e),value:ao(String(n),e)}}function cw({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:o,search:s,username:u}){return[o?o+"://":"",u?u+":":"",n?n+"@":"",al({hostname:t,port:i}),Td({hash:e,pathname:r,search:s})].join("")}function fw({pathname:e}){const t=oo({value:e,prefix:"/"});return t?t.split("/"):[]}function Td({hash:e,pathname:t,search:n}){return[Gt({value:t,prefix:"/"}),n?Gt({value:n,prefix:"?"}):"",e?Gt({value:e,prefix:"#"}):""].join("")}function al({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function dw({hostname:e,port:t,protocol:n}){return[n,al({hostname:e,port:t})].filter(k.isTruthy).join("://")}function lo(e,t){const n=k.isString(e)?oo({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?Gt({value:ao(r,t),prefix:"#"}):"",o=n.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),u=s?Gt({value:ao(s,t),prefix:"?"}):"",a=o.replace(/\?[^?]*$/,""),l=a.includes("://")?a.replace(/:\/\/.*$/,""):"",c=a.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),d=c.replace(/^[^@]*@/,""),g=f!==d,[C,...$]=g?f.split(":").reverse():[],S=$.toReversed().join("").replace(/[/:]/g,"")||"",x=C?.replace(/[/:]/g,"")||"",I=Iv(d.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),j=I[0]?.endsWith("]")?"":I[1]===":"&&I[0]||"",Z=d.replace(new RegExp(`:${j}($|/)`),"$1").replace(/\/.*/,""),Be=d.replace(/^[^/]*(\/|$)/,"$1"),bt=ao(Be.replace(/^[^/]*(?:\/|$)/,"/"),t),Qe=al({hostname:Z,port:j}),kt=dw({hostname:Z,port:j,protocol:l}),yn=cw({hash:i,hostname:Z,password:x,pathname:bt,port:j,protocol:l,search:u,username:S}),In=aw(u),Ui=fw({pathname:bt});return{fullPath:Td({hash:i,pathname:bt,search:u}),hash:i,host:Qe,hostname:Z,href:yn,origin:kt,password:x,pathname:bt,paths:Ui,port:j,protocol:l,search:u,searchParams:In,username:S}}_e({hash:ct(It(void 0,"")),search:ct(It(void 0,"",xd({keys:"",values:It(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:ct(It(void 0,"")),pathname:ct(It(void 0,"")),paths:ct(It(void 0,[""])),protocol:ct(It(void 0,"")),username:ct(It(void 0,"")),password:ct(It(void 0,"")),port:ct(It(void 0,"",-1))});function lS(e,t,n){const r=!!n,i=t==null||bi(t,iS,{allowExtraKeys:!1}),o=i?lo(""):k.instanceOf(e,URL)||k.isString(e)?lo(e):e,s=i?e:t,u=k.isString(s)&&s.startsWith("."),a=k.isString(s)||k.instanceOf(s,URL)?yf(lo(s),($,S)=>k.isTruthy(S)):s,l=r?n:i?t:void 0,c=an(o,($,S)=>{if(!k.hasKey(a,$))return S;const x=a[$];return k.isNumber(x)?String(x):k.isString(x)?$==="hash"&&x?Gt({value:x,prefix:"#"}):$==="pathname"?Gt({value:x,prefix:"/"}):x:S});k.hasKey(a,"paths")&&a.paths&&(c.pathname=Nd(u?o.pathname:"",...a.paths));const f=k.isString(a.search)?aw(Gt({value:a.search,prefix:"?"})):mv(a.search||{}),d=sS(c.searchParams,f,{...l,encoding:Ao.None}),g=aS(d,l);return{...c,searchParams:d,search:g,paths:fw(c),fullPath:Td(c),host:al(c),origin:dw(c),href:cw({...c,search:g})}}const cS=_e({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:oS,hash:"",fullPath:"/",href:"/"});({...cS.default});const fS=0;function mw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==fS)}const ll="locationchange",$r=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const v0=$r?.pushState;function D0(...e){if(!v0)return;const t=v0.apply($r,e);return globalThis.dispatchEvent(new Event(ll)),t}const E0=$r?.replaceState;function C0(...e){if(!E0)return;const t=E0.apply($r,e);return globalThis.dispatchEvent(new Event(ll)),t}function dS(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!$r)){{if($r.pushState===D0)throw new $0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if($r.replaceState===C0)throw new $0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,$r.pushState=D0,$r.replaceState=C0,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ll))})}}function Bu(e,t){const n=lo(e),r=oo({value:oo({value:n.pathname,prefix:Gt({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],o=Object.keys(n.searchParams).length?n.searchParams:void 0,s=n.hash?oo({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class Md{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){J6(t,rS),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new K1({defaultValue:n,equalityCheck:()=>!1}),dS(),this.removeGlobalListener=Ug(globalThis,ll,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new nS("Looping route sanitization detected; aborting window URL change listener.");const r=Bu(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);k.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Nd(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Bu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Bu(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),o=this.routeIncludesBasePath(Bu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return lS(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Gt({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Fo.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=lo(r);return this.params.isPaused||!n.force&&k.jsonEquals(lo(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return mw(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new Id(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function mS(e){return new Md({basePath:e,sanitizeRoute(t){return{paths:hS(t.paths),hash:void 0,search:void 0}}})}function hS(e){const t=e[0];if(k.isEnumValue(t,Vt)){if(t===Vt.Book)return[Vt.Book,...e.slice(1)];if(t===Vt.Search)return e[1]?[t,e[1]]:[Vt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return ho.paths}const va=kd()("element-book-change-route"),x0="vira-",Bt=rw({assertInputs:e=>{if(!e.tagName.startsWith(x0))throw new Error(`Tag name should start with '${x0}' but got '${e.tagName}'`)}});function pS(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given: ${jv(n)}`)}function gS(e,t=[],n=!1){return n?t.includes(e.id)?t.filter(r=>r!==e.id):[...t,e.id]:[e.id]}function A0({open:e,callback:t,popoverManager:n,host:r}){if(e){const i=n.showPopover(r);t?.(i)}else n.removePopover(),t?.(void 0)}const D=Hr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"}),yS=ye;function wS(e){try{if(!e)throw new Error("invalid empty color");return new yS(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function me({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function F0(e,t){const n=Fe(t).map(r=>{const i=t[r],o=wS(i);return`${D[r].name}: ${o.toString()};`}).join(" ");return me({name:e.name,svgTemplate:w`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const Pd=me({name:"Check24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),tr=Hr({"vira-form-input-radius":"8px"}),fu=F`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,xr=Hr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),ko=Hr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":F`calc(${tr["vira-form-input-radius"].value} + 4px)`});function cl({elementBorderSize:e,outlineGap:t=2,outlineWidth:n=2,noNesting:r}){const i=Ge(Og(n+t+e)),o=F`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${n}px solid ${ko["vira-focus-outline-color"].value};
        border-radius: ${ko["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return r?o:F`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const Zt=Hr({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#d2eaff","vira-form-selection-active-foreground-color":"black"}),bS=F`
    padding: 0;
    margin: 0;
`,Hn=F`
    ${bS};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,k0=F`#e2e2e2`,S0={menuShadow:F`
        filter: drop-shadow(0px 5px 5px ${k0});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:F`
        filter: drop-shadow(0px -5px 5px ${k0});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},So=F`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,V=Bt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>F`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Rn=Bt()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>F`
        :host {
            display: flex;
            ${So};
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
                <${V.assign({icon:Pd})}></${V}>
                <slot>${e.label}</slot>
            </div>
        `}});function $S(e,t){return e>t}function vS(e,t){return e<t}function Us(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var er;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(er||(er={}));var fe;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(fe||(fe={}));function fl(e){const t={x:-1,y:-1};let n;for(;t.y<e.length-1&&!n;){t.y++;const r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;const i=r[t.x];if(i)if(i.navEntry.navParams.group){const o=fl(i.children);o&&(n=o.node)}else i.navEntry.navParams.disabled||(n=i)}}if(n)return{node:n,coords:t}}function I0(e,t,n,r){if(!t){const a=fl(e.children);return a?(Us(a.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.node.element,coords:a.coords,direction:n,navAction:fe.Navigate}):{success:!1,reason:"no default element to focus",direction:n,navAction:fe.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=hw(t.position,n),u=r?!0:!o;return i&&u?(Us(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:n,navAction:fe.Navigate,coords:s}):i?u?{success:!1,reason:"no conditions matched",direction:n,navAction:fe.Navigate}:{success:!1,reason:"wrapping blocked",direction:n,navAction:fe.Navigate}:{success:!1,reason:"failed to find node to focus",direction:n,navAction:fe.Navigate}}function hw(e,t){let n=!1,r,i=1;const o=Date.now();for(;!n||!r;)if(r=DS(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return Fv.warning("Failed to find next non-disabled node."),r;return r}function DS(e,t,n){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;nr.isDefined(r,"missing parent");const i=As.isDefined(r.children[e.nodeCoords.y]),o=r.children.length>1&&(t===er.Down||t===er.Up),s=t===er.Down||t===er.Right?n:-1*n,u=s<0?$S:vS,a=o?Lm(e.nodeCoords.y+s,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=As.isDefined(r.children[a]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:Lm(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=r.children[a]?.[c],d=o?u(a,e.nodeCoords.y):u(c,e.nodeCoords.x);return{nextNode:f,requiresWrapping:d,coords:{x:c,y:a}}}function ES(e,t,n){const r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:fe.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=hw(r,t),u=i?.navEntry.navParams.group?fl(i.children):{node:i,coords:s},a=n?!0:!o;return!u||!u.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:fe.Pibling}:a?(Us(u.node.element),{success:!0,defaulted:!1,newElement:u.node.element,wrapped:o,coords:u.coords,direction:t,navAction:fe.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:fe.Pibling}}var Nt;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Nt||(Nt={}));const jn={name:"data-nav",js(e){return e?`[${jn.name}*="${e}"]`:`[${jn.name}]`},css({baseSelector:e="",navValue:t}={}){return F`
            ${Ge(e)}${Ge(jn.js(t))}
        `}},Od="navEntry";function pw(e){return Od in e}function gw(e){if(pw(e)){const t=e[Od];return As.instanceOf(t,yw,"Invalid nav entry")}else return}function CS(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Nt.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class yw{element;navParams;navTreeNode;navValue;eventListener=CS(this);constructor(t,n,r){this.element=t,this.navParams=r,this.attachListeners(),this.navController=n}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return nr.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(jn.name,""),Xl(this.element)&&this.element.blur())}focus(t,n){const r=this.navValue,i=t===(r===Nt.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Nt.Focused),Xl(this.element)||this.element.focus()):(this.removeNavValue(Nt.Focused),Xl(this.element)&&this.element.blur()),n||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,fe.Focus)}activate(t){const n=this.navValue,r=t===(n===Nt.Active);if(!(this.navParams.group||this.navController.locked||r))return this.focus(t,!0),t?this.setNavValue(Nt.Active):this.setNavValue(Nt.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,fe.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(jn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(jn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function ww(e,t){Object.entries(t).forEach(([n,r])=>{k.isBoolean(r)&&r?e.setAttribute(n,""):k.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const xS=ur(class extends ar{element;lastKey;constructor(e){super(e),this.element=cu(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),ln}});function AS(e){return"group"in e?Nt.Group:e.disabled?Nt.Disabled:""}function N0(e,t={}){return xS(h(t),n=>{e.needsUpdate=!0;const r=!t.group&&!t.disabled;nr.instanceOf(n,HTMLElement);const i={[jn.name]:AS(t),tabindex:r?0:-1};ww(n,i);const o=gw(n)||new yw(n,e,t);pw(n)?(o.navParams=t,o.navController=e):n[Od]=o,r?n.style.setProperty("cursor","pointer"):n.style.removeProperty("cursor")})}function FS(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:fe.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:fe.Enter};const n=t.position.node.children[0]?.[0];return n?(Us(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:fe.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:fe.Enter}}function kS(e,t){return bw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function bw(e,t,n){for(let r=0;r<t.length;r++){const i=t[r];for(let o=0;o<i.length;o++){const s=i[o],u={ancestorChain:e,nodeCoords:{x:o,y:r},node:s};if(n(u))return u;const a=bw(e.concat(u),s.children,n);if(a)return a}}}function $w(e,t){const n=kS(e,({node:r})=>!r.root&&r.navEntry===t);if(!n)throw new Error("Failed to find NavEntry in NavTree.");return n}function SS(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:fe.Exit};const n=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:fe.Exit};const{nodeCoords:r}=$w(e,n.navEntry);return Us(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:fe.Exit,coords:r}}class IS extends Jr()("nav-exit"){}class vw extends Jr()("nav-activate"){}class NS extends Jr()("nav-focus"){}class TS extends Jr()("nav-enter"){}class MS extends Jr()("nav-navigate"){}class PS extends Jr()("nav-navigate-pibling"){}function OS(e){return{root:!0,children:Dw(e)?.children||[]}}function Dw(e){const t=e.element;if(!(t instanceof HTMLElement))return;const n=gw(t),r=BS(e);if((n?.navParams.group?!!r.length:!1)||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function BS(e){const t=[];function n(r){if(r.navEntry?.navParams.group&&!r.children.length)return;if(!r.navEntry){r.children.forEach(u=>u.forEach(a=>n(a)));return}const i=r.navEntry.navParams.x,o=r.navEntry.navParams.y||0,s=Gs(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(r):s.withX.push({x:i,node:r})}return e.children.forEach(r=>{const i=Dw(r);i&&n(i)}),t.sort((r,i)=>r.y-i.y).map(r=>(r.withX.sort((i,o)=>i.x-o.x),r.withX.forEach(({x:i,node:o})=>{r.noX.splice(i,0,o)}),r.noX)).filter(k.isTruthy)}class Ew extends wf{rootElement;options;constructor(t,n={}){super(),this.rootElement=t,this.options=n}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){fl(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,n,r){if(this.locked)return{success:!1,direction:void 0,navAction:r,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:r,reason:"No nav entry to operate on."};const i=$w(this.getNavTree(),t);n?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:r,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===r&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:r,coords:i.nodeCoords};return n&&(r===fe.Activate?this.dispatch(new vw({detail:o})):r===fe.Focus&&this.dispatch(new NS({detail:o}))),o}navigate({direction:t,allowWrapping:n}){if(this.locked)return{success:!1,direction:t,navAction:fe.Navigate,reason:"NavController is locked."};const r=I0(this.getNavTree(),this.currentNavEntry,t,n);return this.dispatch(new MS({detail:r})),r}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:fe.Enter,reason:"NavController is locked."};const n=FS(this.getNavTree(),this.currentNavEntry);return!n.success&&t?this.activate():(this.dispatch(new TS({detail:n})),n)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:fe.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:fe.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return nr.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:fe.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===fe.Activate&&this.currentNavEntry.entry.focus(!0);const t=SS(this.getNavTree(),this.currentNavEntry);return this.dispatch(new IS({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){if(this.locked)return{success:!1,direction:n,navAction:fe.Pibling,reason:"NavController is locked."};const r=this.getNavTree(),o={...this.currentNavEntry?ES(this.currentNavEntry,n,t):I0(r,void 0,n,t),navAction:fe.Pibling};return this.dispatch(new PS({detail:o})),o}buildNavTree(){const t=Z8(this.rootElement),n=OS(t);return this.cachedNavTree=n,n}}const to=Bt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>F`
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
                    ${$i(e.attributePassthrough?.a)}
                    style=${Wt(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return w`
                <a
                    href=${n}
                    rel="noopener noreferrer"
                    ${$i(e.attributePassthrough?.a)}
                    style=${Wt(e.stylePassthrough?.a)}
                    ${H("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),T0={item:"menu-item"},ws=Bt()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Ew(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>F`
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
            ${Hn};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${jn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Nt.Focused})}, ${jn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Nt.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${Zt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${jn.css({baseSelector:".menu-item:not(.disabled)",navValue:Nt.Focused})},
                ${jn.css({baseSelector:".menu-item:not(.disabled)",navValue:Nt.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${Zt["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${Rn} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${fu};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){pS(e.items);const n=e.items.map(r=>{const i=!!e.selected?.includes(r.id),o=k.isString(r.label)?w`
                      <${Rn.assign({label:r.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${Rn}>
                  `:r.label,s=r.disabled||!e.isMultiSelect&&i;return r.route?w`
                    <${to.assign({route:r.route})}
                        class="menu-item ${ir({disabled:!!r.disabled,selected:i})}"
                        ${uo(T0.item)}
                        title=${Wt(r.titleText||void 0)}
                        role="option"
                        ${N0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${to}>
                `:w`
                    <button
                        class="menu-item ${ir({disabled:!!r.disabled,selected:i})}"
                        ${uo(T0.item)}
                        title=${Wt(r.titleText||void 0)}
                        role="option"
                        ${N0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return w`
            ${n}
        `}});var Bd=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(Bd||{}),Da=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Da||{});const bs=Bt()({tagName:"vira-popover-menu",hostClasses:{"vira-popover-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-popover-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-popover-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>F`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${tr["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Zt["vira-form-background-color"].value};
            border: 1px solid ${Zt["vira-form-border-color"].value};
            color: ${Zt["vira-form-foreground-color"].value};
            ${S0.menuShadow}
        }

        ${e["vira-popover-menu-open-upwards"].selector} {
            ${S0.menuShadowReversed}
            border-radius: ${tr["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-popover-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-popover-menu-rounded"].selector} {
            border-radius: ${tr["vira-form-input-radius"].value};
        }
    `,render(){return w`
            <slot></slot>
        `}}),Ru=globalThis.document;class RS extends K1{constructor(){if(super({defaultValue:!!Ru?.hidden,equalityCheck:k.strictEquals}),!Ru)return;globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n,Ru));const t=n=>this.updateVisibility(n,Ru);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,n){const r=jS.includes(t.type),i=LS.includes(t.type),o=r?!0:i?!1:n.hasFocus()||!n.hidden;this.setValue(o)}}const LS=["blur","focusout","pagehide"],jS=["focus","focusin","pageshow"],US=new RS;function _S(e,t){return US.listen(e,t)}const M0={top:0,left:0,right:0,bottom:0};class Cw extends jg("hide-popover"){}class xw extends Jr()("nav-select"){}class VS{constructor(t,n){this.navController=t,this.options={...this.options,...n}}listenTarget=new wf;options={minDownwardsSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let n=!1;const r=new ResizeObserver(()=>{n?this.removePopover():n=!0});r.observe(t),this.cleanupCallbacks=[()=>{r.disconnect()},_S(!1,i=>{i||this.removePopover()}),this.navController.listen(vw,i=>{i.detail.success&&(this.listenTarget.dispatch(new xw({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),_m("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopover()},{passive:!0}),_m("keydown",i=>{const o=i.code;o==="Escape"?this.removePopover():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:er.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:er.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:er.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:er.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopover(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Cw)}showPopover(t,n){this.lastRootElement=t;const r={...this.options,...n},i=window.document.body,o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),u={top:0,left:0,right:s.width,bottom:s.height},a=an(M0,g=>o[g]),l=an(M0,g=>{const C=u[g],$=a[g];return Math.abs(C-$)}),c={...l,rootLeftToContainerRight:u.right-l.left,rootRightToContainerLeft:u.right-l.right,rootTopToContainerBottom:u.bottom-l.top,rootBottomToContainerTop:u.bottom-l.bottom},f=c.top>c.bottom+r.verticalDiffThreshold&&c.bottom<r.minDownwardsSpace;this.attachGlobalListeners(i);const d=c.rootLeftToContainerRight+100<c.rootRightToContainerLeft;return{popDown:!f,popRight:!d,positions:{container:u,root:a,diff:c}}}destroy(){this.removePopover(),this.listenTarget.destroy()}}const Pe=Bt()({tagName:"vira-popover-trigger",state({host:e}){return{showPopoverResult:void 0,popoverManager:new VS(new Ew(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popover"],hostClasses:{"vira-popover-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>F`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            max-width: 100%;
        }

        .wrapper {
            max-width: 100%;
            box-sizing: border-box;
            position: relative;
            /* Do not use display:flex. Doing so will break positioning for Firefox and Safari. */
            display: block;
        }

        .dropdown-trigger {
            ${Hn};
            ${So};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
            anchor-name: --popover-trigger;

            ${cl({elementBorderSize:1})}
        }

        ${e["vira-popover-trigger-disabled"].selector} {
            ${fu}
            pointer-events: auto;

            & .dropdown-wrapper {
                pointer-events: none;
            }
        }

        [popover] {
            /* More styles are set internally via JS. */

            position: absolute;
            box-sizing: border-box;
            inset: auto;
            display: flex;
            /* Allow menu shadows to overflow. Without this they are hidden. */
            overflow: visible;
            pointer-events: none;

            > * {
                pointer-events: auto;
                max-width: 100%;
            }
        }

        :popover-open {
            ${Hn}
        }
    `,events:{navSelect:Ct(),openChange:Ct(),init:Ct()},cleanup({state:e,updateState:t}){t({showPopoverResult:void 0}),e.popoverManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:o}){e.popoverManager.listen(Cw,()=>{if(t({showPopoverResult:void 0}),i(new o.openChange(void 0)),!r.isDisabled){const s=n.shadowRoot.querySelector(".dropdown-trigger");nr.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popoverManager.listen(xw,s=>{r.keepOpenAfterInteraction||A0({open:!1,callback(u){t({showPopoverResult:u})},host:n,popoverManager:e.popoverManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popoverManager.navController,popoverManager:e.popoverManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:o,slotNames:s}){function u({emitEvent:d,open:g},C){if(n.showPopoverResult&&r.keepOpenAfterInteraction&&C){const $=o.shadowRoot.querySelector(".dropdown-trigger");if($&&!C.composedPath().includes($))return}A0({open:g,callback($){i({showPopoverResult:$}),d&&e(new t.openChange($))},host:o,popoverManager:n.popoverManager})}r.isDisabled?u({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopoverResult?u({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopoverResult&&u({emitEvent:!1,open:!0},void 0));const a=n.showPopoverResult?n.showPopoverResult.popRight?F`
                      width: ${n.showPopoverResult.positions.diff.rootLeftToContainerRight}px;
                      left: anchor(--popover-trigger left);
                      align-items: flex-start;
                  `:F`
                      width: ${n.showPopoverResult.positions.diff.rootRightToContainerLeft}px;
                      right: anchor(--popover-trigger right);
                      /* Fallback for Firefox and Safari that don't yet support anchor() */
                      right: ${n.showPopoverResult.positions.diff.right}px;
                      align-items: flex-end;
                  `:F`
                  display: none;
              `,l=n.showPopoverResult?n.showPopoverResult.popDown?F`
                      top: anchor(--popover-trigger bottom);
                      height: ${n.showPopoverResult.positions.diff.bottom}px;
                      flex-direction: column;
                  `:F`
                      bottom: anchor(--popover-trigger top);
                      height: ${n.showPopoverResult.positions.diff.top}px;
                      flex-direction: column-reverse;
                  `:F`
                  display: none;
              `,c=F`
            ${l}
            ${a}
        `;function f(d){u({emitEvent:!0,open:!n.showPopoverResult},d)}return w`
            <div class="wrapper">
                <button
                    ?disabled=${!!r.isDisabled}
                    class="dropdown-trigger"
                    role="listbox"
                    aria-expanded=${!!n.showPopoverResult}
                    ${H("keydown",d=>{!n.showPopoverResult&&d.code.startsWith("Arrow")&&u({emitEvent:!0,open:!0},d)})}
                    ${H("click",d=>{d.detail===0&&f(d)})}
                    ${H("mousedown",d=>{d.button===0&&f(d)})}
                >
                    <slot name=${s.trigger}></slot>
                </button>
                <div
                    popover="manual"
                    style=${c}
                    ${T8(d=>{nr.instanceOf(d,HTMLElement),n.showPopoverResult?d.showPopover():d.hidePopover()})}
                >
                    ${Kt(!!n.showPopoverResult,w`
                            <slot name=${s.popover}></slot>
                        `)}
                </div>
            </div>
        `}}),WS={menu:"menu-trigger-menu"},_r=Bt()({tagName:"vira-menu-trigger",styles:F`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${Pe} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:Ct(),openChange:Ct()},state(){return{navController:void 0,popoverManager:void 0,showPopoverResult:void 0}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i}){return w`
            <${Pe.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popoverOffset:e.popoverOffset})}
                class=${ir({open:!!t.showPopoverResult})}
                ${H(Pe.events.init,o=>{n({navController:o.detail.navController,popoverManager:o.detail.popoverManager})})}
                ${H(Pe.events.openChange,o=>{!!t.showPopoverResult!=!!o.detail&&r(new i.openChange(o.detail)),n({showPopoverResult:o.detail})})}
                ${H(Pe.events.navSelect,o=>{const s=o.detail.x,u=e.items[s];if(!u)throw new Error(`Found no dropdown option at index '${s}'`);r(new i.itemActivate(gS(u,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popoverManager?.removePopover())})}
            >
                <slot slot=${Pe.slotNames.trigger}></slot>
                ${t.navController&&t.showPopoverResult?w`
                          <${bs.assign({direction:t.showPopoverResult.popDown?Da.Downwards:Da.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${Pe.slotNames.popover}
                          >
                              <${ws.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${uo(WS.menu)}
                              ></${ws}>
                          </${bs}>
                      `:ae}
            </${Pe}>
        `}}),Ne=Bt()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>F`
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
        `}});var Aw=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Aw||{});const et=Bt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>F`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${So};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${ko["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${fu};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Hn};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${tr["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${xr["vira-interaction-animation-duration"].value},
                background-color
                    ${xr["vira-interaction-animation-duration"].value},
                border-color ${xr["vira-interaction-animation-duration"].value};

            ${cl({elementBorderSize:2})}
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
              `:ae,n=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:w`
                  <span class="empty-text">&nbsp;</span>
              `;return w`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}}),qS=me({name:"Bell24Icon",svgTemplate:w`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),zS=me({name:"Chat24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Fw=me({name:"ChevronUp24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${D["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${D["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),kw=me({name:"CloseX24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),KS=me({name:"Commit24Icon",svgTemplate:w`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),ZS=me({name:"Document24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Sw=me({name:"Element16Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Er=me({name:"Element24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),GS=me({name:"ExternalLink24Icon",svgTemplate:w`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Iw=me({name:"EyeClosed24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${D["vira-icon-fill-color"].value}
            stroke=${D["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${D["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Nw=me({name:"EyeOpen24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${D["vira-icon-fill-color"].value}
            stroke=${D["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${D["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),YS=me({name:"Link24Icon",svgTemplate:w`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Tw=me({name:"Loader24Icon",svgTemplate:w`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),JS=F`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${xr["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,_s=me({name:"LoaderAnimated24Icon",svgTemplate:w`
        <style>
            ${JS}
        </style>
        ${Tw.svgTemplate}
    `}),HS=me({name:"Lock24Icon",svgTemplate:w`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),$s=me({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),XS=me({name:"Pencil24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),QS=me({name:"Shield24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),eI=me({name:"SpeakerLoud24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),tI=me({name:"SpeakerMedium24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),nI=me({name:"SpeakerMuted24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),rI=me({name:"SpeakerQuiet24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),iI=me({name:"Star24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Ea=me({name:"StatusFailure24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),oI=me({name:"StatusInProgress24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),sI=me({name:"StatusSuccess24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),uI=me({name:"StatusWarning24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),aI=me({name:"Upload24Icon",svgTemplate:w`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Yc={Bell24Icon:qS,Chat24Icon:zS,Check24Icon:Pd,ChevronUp24Icon:Fw,CloseX24Icon:kw,Commit24Icon:KS,Document24Icon:ZS,Element16Icon:Sw,Element24Icon:Er,ExternalLink24Icon:GS,EyeClosed24Icon:Iw,EyeOpen24Icon:Nw,Link24Icon:YS,Loader24Icon:Tw,LoaderAnimated24Icon:_s,Lock24Icon:HS,Options24Icon:$s,Pencil24Icon:XS,Shield24Icon:QS,SpeakerLoud24Icon:eI,SpeakerMedium24Icon:tI,SpeakerMuted24Icon:nI,SpeakerQuiet24Icon:rI,Star24Icon:iI,StatusFailure24Icon:Ea,StatusInProgress24Icon:oI,StatusSuccess24Icon:sI,StatusWarning24Icon:uI,Upload24Icon:aI},Te=Bt()({tagName:"vira-checkbox",styles:F`
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
            ${D["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${Zt["vira-form-border-color"].value};
            color: ${Zt["vira-form-foreground-color"].value};
            border-radius: ${tr["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${cl({elementBorderSize:1})}

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
                ${fu};
            }
        }
    `,events:{valueChange:Ct()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}const i=e.label?w`
                  <span
                      class="text"
                      ${$i(e.attributePassthrough?.text)}
                      style=${Wt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:ae;return w`
            <label
                class=${ir({disabled:!!e.disabled})}
                ${$i(e.attributePassthrough?.label)}
                style=${Wt(e.stylePassthrough?.label)}
                ${H("click",r)}
            >
                <span
                    class="custom-checkbox ${ir({checked:e.value,disabled:!!e.disabled})}"
                    role="checkbox"
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${$i(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Wt(e.stylePassthrough?.["custom-checkbox"])}
                    ${N8(r)}
                >
                    <${V.assign({icon:Pd,fitContainer:!0})}
                        ${$i(e.attributePassthrough?.[V.tagName])}
                        style=${Wt(e.stylePassthrough?.[V.tagName])}
                    ></${V}>
                </span>
                ${i}
            </label>
        `}}),dr=Bt()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>F`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Hn};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${xr["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ct()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:o}){const s=o.expanded?F`
                  height: ${e.contentHeight}px;
              `:F`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${H("click",()=>{r(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${nw(({contentRect:u})=>{n({contentHeight:u.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),ec={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},fs=Bt()({tagName:"vira-dropdown",styles:F`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${_r} {
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
                ${xr["vira-interaction-animation-duration"].value} linear;
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
            ${So};
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
            border-radius: ${tr["vira-form-input-radius"].value};
            background-color: ${Zt["vira-form-background-color"].value};
            color: ${Zt["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:Ct(),openChange:Ct()},state(){return{showPopoverResult:void 0}},render({state:e,inputs:t,dispatch:n,events:r,updateState:i}){const o=Si(t.selected,c=>t.options.find(f=>f.id===c),k.isTruthy),s=t.icon?w`
                  <${V.assign({icon:t.icon})}
                      ${uo(ec.icon)}
                  ></${V}>
              `:ae,u=!o.length,a=t.selectionPrefix&&!u?w`
                      <span class="selected-label-prefix" ${uo(ec.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:ae,l=u?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return w`
            <${_r.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popoverOffset:{vertical:-1,right:24}})}
                ${H(_r.events.openChange,c=>{i({showPopoverResult:c.detail}),n(new r.openChange(c.detail))})}
                ${H(_r.events.itemActivate,c=>{n(new r.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${ir({open:!!e.showPopoverResult,"open-upwards":!e.showPopoverResult?.popDown})}"
                    ${uo(ec.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${ir({"using-placeholder":u})}"
                        title=${Wt(u?void 0:l)}
                    >
                        ${a} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${V.assign({icon:Fw})}
                            class="trigger-icon"
                        ></${V}>
                    </span>
                </div>
            </${_r}>
        `}}),Pr=Bt()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:Ct(),imageError:Ct()},styles:({hostClasses:e})=>F`
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
                      <${V.assign({icon:Ea})} class="error"></${V}>
                  </slot>
              `:t.loadedUrls[s]?void 0:w`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${V.assign({icon:_s})}></${V}>
                    </slot>
                `;return w`
            ${Kt(!!u,u)}
            <img
                class=${ir({hidden:!!u})}
                ${H("load",async()=>{e._debugLoadDelay&&await Cs(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[s]:!0}}),r(new i.imageLoad)})}
                ${H("error",async a=>{e._debugLoadDelay&&await Cs(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[s]:!0}}),r(new i.imageError(a.error))})}
                src=${s}
            />
        `}});function Jc({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(n=>Jc({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function lI({value:e,allowed:t,blocked:n}){const r=t?Jc({input:e,matcher:t}):!0,i=n?Jc({input:e,matcher:n}):!1;return r&&!i}function Hc(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(lI({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function cI({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){const o=eo(n,HTMLInputElement),s=k.hasKey(n,"data")&&ov.isString(n.data)||"";if(s){const{blocked:a}=Hc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});a.length&&r(a)}const u=Hc({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==u&&(o.value=u),t!==u&&i(u)}var Xc=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Xc||{});const Le=Bt()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>F`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${fu};
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
                ${Hn};
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
                ${So};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Hn};
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
                border-radius: ${tr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${xr["vira-interaction-animation-duration"].value};
            }

            .input-wrapper {
                ${Hn};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${tr["vira-form-input-radius"].value};
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
                ${Hn};
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
                    ${cl({elementBorderSize:0,noNesting:!0})}
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
                ${So};
            }

            button {
                ${Hn};
                cursor: pointer;
                display: flex;
                transition: color
                    ${xr["vira-interaction-animation-duration"].value};
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
        `,events:{valueChange:Ct(),inputBlocked:Ct()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:o})=>{const{filtered:s}=Hc({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),u=e.icon?w`
                  <${V.assign({icon:e.icon})} class="left-side-icon"></${V}>
              `:ae,a=e.fitText?F`
                  width: ${n.forcedInputWidth}px;
              `:ae,l=e.disableBrowserHelps||e.type==="password";return w`
            <span
                class="input-wrapper"
                ${H("mousedown",c=>{const f=eo(c,HTMLElement,{useOriginalTarget:!0}),d=As.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);f!==d&&(c.preventDefault(),d.focus())})}
            >
                ${u}
                ${Kt(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${nw(({contentRect:c})=>{r({forcedInputWidth:c.width})})}
                        >
                            <pre>${s||e.placeholder||ae}</pre>
                        </span>
                    `)}

                <input
                    type=${fI(e.type,n.showPassword)}
                    style=${a}
                    autocomplete=${Wt(l?"off":void 0)}
                    autocorrect=${Wt(l?"off":void 0)}
                    autocapitalize=${Wt(l?"off":void 0)}
                    spellcheck=${Wt(l?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${H("input",c=>{cI({inputs:e,previousValue:s,event:c,inputBlockedCallback(f){t(new i.inputBlocked(f))},newValueCallback(f){t(new i.valueChange(f))}})})}
                    placeholder=${Wt(e.placeholder||void 0)}
                    ${$i(e.attributePassthrough)}
                />

                ${Kt(!!(e.showClearButton&&e.value),w`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${H("mousedown",c=>{c.stopImmediatePropagation(),c.preventDefault()})}
                            ${H("click",()=>{t(new i.valueChange(""))})}
                        >
                            <${V.assign({icon:kw})}></${V}>
                        </button>
                    `)}
                ${Kt(e.type==="password",w`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${H("mousedown",c=>{c.stopImmediatePropagation(),c.preventDefault()})}
                            ${H("click",()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${V.assign({icon:n.showPassword?Nw:Iw})}></${V}>
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
        `}});function fI(e,t){return e==="password"&&t?"text":e||"text"}const St=Bt()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>F`
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
    `,render({inputs:e,host:t}){const n=e.min||0,i=(e.max||100)-n,o=e.value-n,s=kv(Math.round(o/i*100),{min:0,max:100});return ww(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),w`
            <div
                class="progress-bar"
                style=${s?F`
                          width: ${s}%;
                      `:F`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}}),Sn=rw(),Dn=Sn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>F`
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
                ${H("click",r=>{(!e.router||mw(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new va(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function dI(e,t){return e.entry.entryType===ft.Root?!1:e.entry.entryType===ft.Page||k.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:k.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const gr=Sn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>F`
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
            ${Dn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!dI(n,e.selectedPath))return;const r=F`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return w`
                <li style=${r}>
                    <${Dn.assign({router:e.router,route:{paths:[Vt.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${ir({"title-row":!0,selected:e.selectedPath?k.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Kt(so(n,ft.ElementExample),w`
                                    <${V.assign({icon:Sw})}></${V}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${Dn}>
                </li>
            `});return w`
            <${Dn.assign({route:ho,router:e.router})}>
                <slot name=${Qn.NavHeader}>Book</slot>
            </${Dn}>
            <ul>
                ${t}
            </ul>
        `}});async function mI(e){await Gc(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Y8(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Yr=Sn()({tagName:"book-error",styles:F`
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
    `,render({inputs:e}){return(k.isArray(e.message)?e.message:[e.message]).map(n=>w`
                <p>${n}</p>
            `)}}),Vs=Sn()({tagName:"book-page-controls",events:{controlValueChange:Ct()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>F`
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

        ${Le} {
            height: 24px;
            max-width: 128px;
        }

        ${V}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],o)=>{if(i.controlType===J.Hidden)return"";const s=hI(e.currentValues[r],i,u=>{const a=k.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!a)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:a,newValues:{...e.currentValues,[r]:u}}))});return w`
                    <div class="control-wrapper">
                        ${Kt(o===0,w`
                                <${V.assign({icon:$s})}
                                    class="options-icon"
                                ></${V}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function hI(e,t,n){return zi(t,J.Hidden)?"":zi(t,J.Checkbox)?w`
            <input
                type="checkbox"
                ?checked=${e}
                ${H("input",r=>{const i=eo(r,HTMLInputElement);n(i.checked)})}
            />
        `:zi(t,J.Color)?w`
            <input
                type="color"
                .value=${e}
                ${H("input",r=>{const i=eo(r,HTMLInputElement);n(i.value)})}
            />
        `:zi(t,J.Text)?w`
            <${Le.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${H(Le.events.valueChange,r=>{n(r.detail)})}
            ></${Le}>
        `:zi(t,J.Number)?w`
            <input
                type="number"
                .value=${e}
                ${H("input",r=>{const i=eo(r,HTMLInputElement);n(i.value)})}
            />
        `:zi(t,J.Dropdown)?w`
            <select
                .value=${e}
                ${H("input",r=>{const i=eo(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>w`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:w`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const P0=Sn()({tagName:"book-breadcrumbs",styles:F`
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
                <${Dn.assign({route:{hash:void 0,search:void 0,paths:[Vt.Book,...s]},router:e.router})}>
                    ${n}
                </${Dn}>
                ${u}
            `}):w`
                &nbsp;
            `}}),tc=Sn()({tagName:"book-breadcrumbs-bar",styles:F`
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
                    <${P0.assign({currentRoute:e.currentRoute,router:e.router})}></${P0}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${H("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await Cs({milliseconds:200}),r.value===i&&(r.value?t(new va({paths:[Vt.Search,encodeURIComponent(r.value)]})):t(new va(ho)))})}
            />
        `}}),O0=Sn()({tagName:"book-entry-description",styles:F`
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
            `)}}),B0=Sn()({tagName:"book-page-wrapper",styles:F`
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

        ${Dn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?w`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:w`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Vt.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?Tg(e.pageNode.entry.errors):void 0;return r&&console.error(r),w`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Dn.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Dn}>
                    ${r?w`
                              <${Yr.assign({message:r.message})}></${Yr}>
                          `:w`
                              <${O0.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${O0}>
                              <${Vs.assign({config:e.pageNode.entry.controls,currentValues:vf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Vs}>
                          `}
                </div>
            </div>
        `}}),Lu=Sn()({tagName:"book-element-example-controls",styles:F`
        :host {
            display: flex;
            color: ${ce["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Vt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return w`
            <${Dn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Dn}>
        `}}),R0=Symbol("unset-internal-state"),L0=Sn()({tagName:"book-element-example-viewer",state(){return{isUnset:R0}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Tg(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===R0&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return w`
                ${Kt(!!t.elementExampleNode.entry.styles,w`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",Yt(r)),console.error(r),w`
                <${Yr.assign({message:`${t.elementExampleNode.entry.title} failed: ${Yt(r)}`})}></${Yr}>
            `}},options:{allowPolymorphicState:!0}}),j0=Sn()({tagName:"book-element-example-wrapper",styles:F`
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

        ${Lu} {
            color: ${ce["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Lu} {
            color: ${ce["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return w`
            <div class="individual-example-wrapper">
                <${Lu.assign(Tv(e,["currentPageControls"]))}></${Lu}>
                <${L0.assign(e)}></${L0}>
            </div>
        `}});function Mw(e,t,n,r){const i=vc(n,r),o=[];if(i){const s=Mw(e,t,i,r);s&&o.push(s)}if(so(n,ft.Page)&&!e.includes(n)){const s=vf(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:s,breadcrumbs:an(s,()=>n.fullUrlBreadcrumbs)})}return o.reduce((s,u)=>({config:{...s.config,...u.config},current:{...s.current,...u.current},breadcrumbs:{...s.breadcrumbs,...u.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function pI({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:o}){if(!e.length&&r)return[w`
                No results
            `];const s=k.isLengthAtLeast(e,1)?Mw(e,i,e[0],o):void 0,u=s&&Object.values(s.config).length&&k.isLengthAtLeast(e,1)?w`
                  <${Vs.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Vs}>
              `:ae,a=A8(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(so(l,ft.Page))return w`
                    <${B0.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${B0}>
                `;if(so(l,ft.ElementExample)){const c=vf(i,l.fullUrlBreadcrumbs.slice(0,-1));return w`
                    <${j0.assign({elementExampleNode:l,currentPageControls:c,router:n})}
                        class="inline-entry ${ir({"block-entry":l.entry.isVertical})}"
                    ></${j0}>
                `}else return so(l,ft.Root)?ae:w`
                    <${Yr.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${Yr}>
                `});return[u,a]}const Ji=Sn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:F`
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

        ${tc} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${xr["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Ct()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const o=Dc(e.currentRoute.paths),s=pI({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return w`
            <${tc.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${tc}>

            ${Kt(e.showLoading,w`
                    <div
                        ${g0(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${V.assign({icon:_s})}></${V}>
                    </div>
                    ${Kt(!!r.lastElement,w`
                            ${r.lastElement}
                            <slot name=${Qn.Footer}></slot>
                        `)}
                `,w`
                    <div
                        ${g0(u=>{i({lastElement:u})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${Qn.Footer}></slot>
                `)}
        `}});function gI(e,t,n){const r=U0(e,t);return r.length?r:(n(ho),U0(e,ho.paths))}function U0(e,t){return e.filter(n=>Vv({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const nc=Sd()({tagName:"element-book-app",state(){return{currentRoute:ho,router:void 0,loading:!0,colors:{config:void 0,theme:b0(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:Ct()},styles:F`
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

        ${Ji} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${gr} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await _0(e,Dc(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function u(c){const f=s(c);return!k.jsonEquals(e.currentRoute,f)}function a(c){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(k.isTruthy).join(" - "))}function l(c){if(!u(c))return;const f=s(c);e.router?e.router.setRoute(f):r({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!k.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!k.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const x=mS(t.internalRouterConfig.basePath);r({router:x}),x.listen(!0,I=>{r({currentRoute:I})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!k.jsonEquals(c,e.colors.config)){const x=b0(c);r({colors:{config:c,theme:x}}),vD(n,x)}const f=t._debug??!1,d=Zv({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:qg(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const g=Dc(e.currentRoute.paths),$=(g?tS({flattenedNodes:d.flattenedNodes,searchQuery:g}):void 0)??gI(d.flattenedNodes,e.currentRoute.paths,l);a($[0]?.entry.title);const S=e.treeBasedControls?.controls;return S?(t._debug&&console.info({currentControls:S}),w`
                <div
                    class="root"
                    ${H(va,async x=>{const I=x.detail;if(!u(I))return;if(r({loading:!0}),l(I),!(n.shadowRoot.querySelector(gr.tagName)instanceof gr))throw new TypeError(`Failed to find child '${gr.tagName}'`);await _0(n,g,e.currentRoute)})}
                    ${H(Vs.events.controlValueChange,x=>{if(!e.treeBasedControls)return;const I=Yv(S,x.detail.fullUrlBreadcrumbs,x.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:I}})})}
                >
                    <${gr.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:g?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Qn.NavHeader}
                            slot=${Qn.NavHeader}
                        ></slot>
                    </${gr}>
                    <${Ji.assign({controls:S,currentNodes:$,currentRoute:e.currentRoute,debug:f,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${H(Ji.events.loadingRender,async x=>{await Gc();const I=n.shadowRoot.querySelector(Ji.tagName);I?I.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ji.tagName}' for scrolling.`),await Gc(),r({loading:!x.detail})})}
                    >
                        <slot
                            name=${Qn.Footer}
                            slot=${Qn.Footer}
                        ></slot>
                    </${Ji}>
                </div>
            `):w`
                    <${Yr.assign({message:"Failed to generate page controls."})}></${Yr}>
                `}catch(c){return console.error(c),w`
                <p class="error">${Yt(c)}</p>
            `}}});async function _0(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(gr.tagName);if(!(r instanceof gr))throw new TypeError(`Failed to find child '${gr.tagName}'`);await mI(r)}const Ft=pt({title:"Elements",parent:void 0}),yI=pt({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:J.Color,initValue:""},"Fill Color":{controlType:J.Color,initValue:""},"Stroke Width":{controlType:J.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(Yc).forEach(t=>{e({title:t.name,styles:F`
                    :host(:hover) ${V} {
                        background-color: #f2f2f2;
                    }

                    ${V} {
                        padding: 8px;
                        border-radius: ${tr["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=F`
                        ${D["vira-icon-fill-color"].name}: ${Ge(n["Fill Color"]||"inherit")};
                        ${D["vira-icon-stroke-color"].name}: ${Ge(n["Stroke Color"]||"inherit")};
                        ${D["vira-icon-stroke-width"].name}: ${Ge(n["Stroke Width"]?Og(n["Stroke Width"]):"inherit")};
                    `;return w`
                        <${V.assign({icon:t})} style=${r}></${V}>
                    `}})})}}),wI=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:w`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:F`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:F`
            ${Rn} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],bI=pt({title:Rn.tagName,parent:Ft,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:J.Text,initValue:""}},defineExamples({defineExample:e}){wI.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?w`
                            <${Rn.assign(r)}>
                                ${t.customTemplate}
                            </${Rn}>
                        `:w`
                            <${Rn.assign(r)}></${Rn}>
                        `}})})}}),Pw=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new Md({sanitizeRoute(e){return e}})}}],$I=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:Bd.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...Pw,{id:"long",label:w`
                        <${Rn.assign({selected:!1})}>
                            <div
                                style=${F`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${Rn}>
                    `}]}}],vI=pt({parent:Ft,title:_r.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){$I.forEach(t=>{e({title:t.title,styles:F`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return w`
                        <${_r.assign({items:Pw,popoverOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${_r}>
                    `}})})}}),Ow=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],DI=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...Ow,{id:4,label:"link here",route:{route:{paths:["test"]},router:new Md({sanitizeRoute(e){return e}})}}]}}],EI=pt({parent:Ft,title:ws.tagName,defineExamples({defineExample:e}){DI.forEach(t=>{e({title:t.title,render(){return w`
                        <${ws.assign({isMultiSelect:!1,navController:void 0,items:Ow,selected:[],...t.inputs})}></${ws}>
                    `}})})}}),Bw=[];Bn(Da).forEach(e=>{Bn(Bd).forEach(t=>{Bw.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const CI=pt({parent:Ft,title:bs.tagName,defineExamples({defineExample:e}){Bw.forEach(t=>{e({title:t.title,styles:F`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return w`
                        <${bs.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${bs}>
                    `}})})}}),xI=pt({parent:Ft,title:Pe.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:F`
                ${Pe} {
                    ${ko["vira-focus-outline-border-radius"].name}: 0;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .popover {
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                }
            `,render(){return w`
                    <${Pe.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${Pe.slotNames.trigger}>
                            Trigger Popover
                        </div>
                        <div class="popover" slot=${Pe.slotNames.popover}>
                            Popover!
                        </div>
                    </${Pe}>
                `}}),e({title:"long content",styles:F`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .popover {
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
                    <${Pe.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${Pe.slotNames.trigger}>
                            Trigger Long Left Anchored Popover
                        </div>
                        <div class="popover" slot=${Pe.slotNames.popover}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${Pe}>
                `}}),e({title:"short content",styles:F`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .popover {
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
                    <${Pe.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${Pe.slotNames.trigger}>
                            Trigger Long Left Anchored Popover
                        </div>
                        <div class="popover" slot=${Pe.slotNames.popover}>
                            not long
                        </div>
                    </${Pe}>
                `}})}}),AI=pt({parent:Ft,title:Ne.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return w`
                    <${Ne.assign({text:"Text here",bold:!1})}></${Ne}>
                `}}),e({title:"Bold",render(){return w`
                    <${Ne.assign({text:"Text here",bold:!0})}></${Ne}>
                `}}),e({title:"Dynamic",render({controls:t}){return w`
                    <${Ne.assign({text:"Text here",bold:t.bolded})}></${Ne}>
                `}}),e({title:"Resized",styles:F`
                ${Ne} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return w`
                    <${Ne.assign({text:"Not Bolded",bold:!1})}></${Ne}>
                    <${Ne.assign({text:"Bolded",bold:!0})}></${Ne}>
                `}}),e({title:"Alignment",styles:F`
                ${Ne} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return w`
                    <${Ne.assign({text:"Not Bolded",bold:!1})}></${Ne}>
                    <${Ne.assign({text:"Bolded",bold:!0})}></${Ne}>
                `}}),e({title:"Stylized",styles:F`
                ${Ne} {
                    text-decoration: underline;
                }
            `,render(){return w`
                    <${Ne.assign({text:"Not Bolded",bold:!1})}></${Ne}>
                    <${Ne.assign({text:"Bolded",bold:!0})}></${Ne}>
                `}})}}),FI=pt({parent:Ft,title:et.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:J.Color,initValue:et.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:J.Color,initValue:et.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:J.Color,initValue:et.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:J.Color,initValue:et.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const o=r??F``;e({title:n,styles:o,render({controls:s}){const u=F`
                        ${et.cssVars["vira-button-primary-color"].name}: ${Ge(s["Primary color"]||"inherit")};
                        ${et.cssVars["vira-button-secondary-color"].name}: ${Ge(s["Secondary color"]||"inherit")};
                        ${et.cssVars["vira-button-primary-hover-color"].name}: ${Ge(s["Hover color"]||"inherit")};
                        ${et.cssVars["vira-button-primary-active-color"].name}: ${Ge(s["Active color"]||"inherit")};
                    `;return w`
                        <${et.assign({text:"hello",...i})}
                            style=${u}
                        ></${et}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:$s}}),t({title:"with expanding icon",inputs:{icon:$s,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Aw.Outline}}),t({title:"only icon",inputs:{icon:$s,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:F`
                ${et} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:F`
                ${et} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:F`
                :host {
                    ${et.cssVars["vira-button-primary-color"].name}: pink;
                    ${et.cssVars["vira-button-secondary-color"].name}: purple;
                    ${et.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${et.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return w`
                    <${et.assign({text:"hello"})}></${et}>
                `}})}}),kI=pt({parent:Ft,title:Te.tagName,controls:{Checked:{controlType:J.Checkbox,initValue:!1},Disabled:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:n}){return w`
                    <${Te.assign({value:t.checked})}
                        ${H(Te.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Te}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:n}){return w`
                    <${Te.assign({value:t.checked})}
                        ${H(Te.events.valueChange,r=>{n({checked:r.detail})})}
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
                        ${H(Te.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Te}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:F`
                ${Te} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:n}){return w`
                    <${Te.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${H(Te.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Te}>
                `}})}}),SI=pt({title:dr.tagName,parent:Ft,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:F`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>w`
                        <${dr.assign({expanded:!!n.expandedStates[i]})}
                            ${H(dr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${dr.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${H("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Kt(!!n.showMoreStates[i],w`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${dr}>
                    `)}}),e({title:"wider examples",styles:F`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>w`
                        <${dr.assign({expanded:!!n.expandedStates[i]})}
                            ${H(dr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
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
                                ${H("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
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
                        </${dr}>
                    `)}})}}),vs=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],II=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...vs,{id:42,label:w`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...vs,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:F`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:F`
            ${fs} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Er}}],NI=pt({title:fs.tagName,parent:Ft,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["",...vs.map(e=>e.label)]},Prefix:{controlType:J.Text,initValue:""},"Force State":{controlType:J.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:J.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:J.Dropdown,initValue:"",options:["",...Object.keys(Yc)]},Disabled:{controlType:J.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:J.Text,initValue:"Select something"}},defineExamples({defineExample:e}){II.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||vs,selected:i.Selected?[vs.find(s=>s.label===i.Selected)?.id].filter(k.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?Yc[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return w`
                        <${fs.assign(o)}
                            ${H(fs.events.selectedChange,s=>{r({selected:s.detail})})}
                        ></${fs}>
                    `}})})}}),TI=pt({title:V.tagName,parent:Ft,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return w`
                    <${V.assign({icon:Er})}></${V}>
                `}}),e({title:"using createColoredIcon",render(){return w`
                    <${V.assign({icon:F0(Er,{"vira-icon-stroke-color":"red"})})}></${V}>
                `}}),e({title:"fit container",styles:F`
                ${V} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return w`
                    <${V.assign({icon:F0(Er,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${V}>
                `}})}}),MI=pt({title:Pr.tagName,parent:Ft,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:F`
                    border-radius: 32px;
                `,loadingSlot:w`
                    <div
                        style=${F`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${V.assign({icon:_s,fitContainer:!0})}
                            style=${F`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:F`
                    border-radius: 32px;
                `,errorSlot:w`
                    <div
                        style=${F`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${V.assign({icon:Ea,fitContainer:!0})}
                            style=${F`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:F`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:F`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:F`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:w`
                    <div
                        style=${F`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${V.assign({icon:_s,fitContainer:!0})}
                            style=${F`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `,errorSlot:w`
                    <div
                        style=${F`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${V.assign({icon:Ea,fitContainer:!0})}
                            style=${F`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:F`
                    ${Pr} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||F``}
                    }

                    ${n.allowReload?F`
                              ${Pr} {
                                  cursor: pointer;
                              }

                              ${Pr}:hover {
                                  border-color: #0055ff;
                              }
                          `:F``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:n.inputs.imageUrl}},render({state:r,updateState:i}){return w`
                        <${Pr.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${H("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${Ng()}`})})}
                        >
                            ${n.loadingSlot?w`
                                      <div class="slot-wrapper" slot=${Pr.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:ae}${n.errorSlot?w`
                                      <div class="slot-wrapper" slot=${Pr.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:ae}
                        </${Pr}>
                    `}})})}}),PI=pt({title:Le.tagName,parent:Ft,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:J.Color,initValue:Le.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:J.Color,initValue:Le.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:J.Color,initValue:Le.cssVars["vira-input-border-color"].default},"Focus color":{controlType:J.Color,initValue:ko["vira-focus-outline-color"].default},"Selection color":{controlType:J.Color,initValue:Le.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:o}){e({title:i,styles:F`
                    ${r||F``}
                `,state(){return{value:o.value}},render({state:s,updateState:u,controls:a}){const l={[String(Le.cssVars["vira-input-text-color"].name)]:a["Text color"],[String(Le.cssVars["vira-input-placeholder-color"].name)]:a["Placeholder color"],[String(Le.cssVars["vira-input-border-color"].name)]:a["Border color"],[String(ko["vira-focus-outline-color"].name)]:a["Focus color"],[String(Le.cssVars["vira-input-text-selection-color"].name)]:a["Selection color"]},c=an(l,(d,g)=>g||"inherit"),f=Object.entries(c).map(([d,g])=>[d,g].join(": ")+";").join(`
`);return w`
                        <${Le.assign({...o,value:s.value})}
                            style=${f}
                            ${H(Le.events.valueChange,d=>{u({value:d.detail}),console.info("changed:",d.detail)})}
                        ></${Le}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Er}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:F`
                    ${Le} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Er}},{title:"taller height",styles:F`
                    ${Le} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Er}},{title:"shorter height",styles:F`
                    ${Le} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Er}},{title:"max width",styles:F`
                    ${Le} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:F`
                    ${Le} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Xc.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Xc.Email,attributePassthrough:{autocomplete:"username"}}}].forEach(t)}}),OI=pt({title:to.tagName,parent:Ft,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:J.Color,initValue:""},"Hover color":{controlType:J.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const o=F`
                        ${to.cssVars["vira-link-hover-color"].name}: ${Ge(i["Hover color"]||"inherit")};
                        color: ${Ge(i["CSS Color"]||"inherit")};
                    `;return w`
                        <${to.assign(r)} style=${o}>My Link</${to}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),BI=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:F`
            :host {
                ${St.cssVars["vira-progress-background-color"].name}: red;
                ${St.cssVars["vira-progress-foreground-color"].name}: black;
                ${St.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${St} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:F`
            :host {
                ${St.cssVars["vira-progress-background-color"].name}: red;
                ${St.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${St.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${St} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:F`
            :host {
                ${St.cssVars["vira-progress-background-color"].name}: red;
                ${St.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${St.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${St} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],RI=pt({parent:Ft,title:St.tagName,defineExamples({defineExample:e}){BI.forEach(t=>{e({title:t.title,styles:F`
                    ${t.styles||F``}
                `,render(){return w`
                        <${St.assign({value:50,...t.inputs})}></${St}>
                    `}})})}}),LI=[Ft,yI],jI=[AI,FI,kI,SI,NI,TI,MI,PI,OI,bI,EI,vI,CI,xI,RI].sort((e,t)=>e.title.localeCompare(t.title)),UI=[...LI,...jI];Sd()({tagName:"vira-book-app",styles:F`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${nc} {
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
            <${nc.assign({internalRouterConfig:{basePath:Nd("vira"),useInternalRouter:!0},pages:UI,themeColor:"#33ccff"})}>
                <h1 slot=${Qn.NavHeader}>Vira</h1>
            </${nc}>
        `}});
