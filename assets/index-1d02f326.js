var pi=Object.defineProperty;var mi=(e,t,r)=>t in e?pi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var pr=(e,t,r)=>(mi(e,typeof t!="symbol"?t+"":t,r),r),mr=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var _e=(e,t,r)=>(mr(e,t,"read from private field"),r?r.call(e):t.get(e)),Ue=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},gr=(e,t,r,n)=>(mr(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var xt=(e,t,r)=>(mr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Me(e,t){return e.controlType===t}var x;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(x||(x={}));const da=Symbol("any-type"),gi={[x.Checkbox]:!1,[x.Color]:"",[x.Dropdown]:0,[x.Hidden]:da,[x.Number]:0,[x.Text]:""};function bi(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=gi[o.controlType];a!==da&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function vi(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function fa(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>nr(r).trim()).join(`
`))}function nr(e){return e?e instanceof Error?e.message:or(e,"message")?String(e.message):String(e):""}function $i(e){return e instanceof Error?e:new Error(nr(e))}function ha(e){return!!e}function Fn(e){return!!e&&typeof e=="object"}function yi(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const wi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function or(e,t){return e?wi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function pa(e,t){return e&&t.every(r=>or(e,r))}function Fr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ci(e){return Array.isArray(e)?"array":typeof e}function ar(e,t){return Ci(e)===t}function Vn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Un="Failed to compare objects using JSON.stringify";function Wn(e,t,r){return Vn({source:e,errorHandler(n){if(r)return"";throw n}})===Vn({source:t,errorHandler(n){if(r)return"";throw n}})}function Xe(e,t,r={}){try{return e===t?!0:Fn(e)&&Fn(t)?Wn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Xe(e[o],t[o])):!1:Wn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=$i(n);throw o.message.startsWith(Un)||(o.message=`${Un}: ${o.message}`),o}}function xi(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ki(e){return Fr(e).filter(t=>isNaN(Number(t)))}function Ei(e){return ki(e).map(r=>e[r])}function Si(e,t){return Ei(t).includes(e)}function Ot(e,t){let r=!1;const n=Fr(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Fr(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Ti(e){const t=ma();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function ma(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ma.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Yn(e,t){try{return _i(e,t),!0}catch{return!1}}function _i(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}var L;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(L||(L={}));function vn(e,t){const r=Ht(e.title);return e.parent?[...vn(e.parent,!1),Ht(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Ht(e){return vi(e).toLowerCase().replaceAll(/\s/g,"-")}function Mi({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function q(e){const t={...e,entryType:L.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:L.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ha)};r.add(n.title),t.elementExamples[Ht(o.title)]=o}}),t}var ie;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ie||(ie={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},me=e=>(...t)=>({_$litDirective$:e,values:t});let le=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var br;const Dt=window,De=Dt.trustedTypes,Zn=De?De.createPolicy("lit-html",{createHTML:e=>e}):void 0,It="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,$n="?"+se,Ai=`<${$n}>`,ke=document,et=()=>ke.createComment(""),tt=e=>e===null||typeof e!="object"&&typeof e!="function",ga=Array.isArray,ba=e=>ga(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",vr=`[ 	
\f\r]`,We=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gn=/-->/g,Xn=/>/g,ge=RegExp(`>|${vr}(?:([^\\s"'>=/]+)(${vr}*=${vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qn=/'/g,Jn=/"/g,va=/^(?:script|style|textarea|title)$/i,Pi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),$a=Pi(1),U=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Qn=new WeakMap,ve=ke.createTreeWalker(ke,129,null,!1),ya=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=We;for(let l=0;l<r;l++){const c=e[l];let d,u,f=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===We?u[1]==="!--"?s=Gn:u[1]!==void 0?s=Xn:u[2]!==void 0?(va.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=ge):u[3]!==void 0&&(s=ge):s===ge?u[0]===">"?(s=o??We,f=-1):u[1]===void 0?f=-2:(f=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?ge:u[3]==='"'?Jn:qn):s===Jn||s===qn?s=ge:s===Gn||s===Xn?s=We:(s=ge,o=void 0);const h=s===ge&&e[l+1].startsWith("/>")?" ":"";a+=s===We?c+Ai:f>=0?(n.push(d),c.slice(0,f)+It+c.slice(f)+se+h):c+se+(f===-2?(n.push(void 0),l):h)}const i=a+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Zn!==void 0?Zn.createHTML(i):i,n]};class rt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,d]=ya(t,r);if(this.el=rt.createElement(c,n),ve.currentNode=this.el.content,r===2){const u=this.el.content,f=u.firstChild;f.remove(),u.append(...f.childNodes)}for(;(o=ve.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const f of o.getAttributeNames())if(f.endsWith(It)||f.startsWith(se)){const p=d[s++];if(u.push(f),p!==void 0){const h=o.getAttribute(p.toLowerCase()+It).split(se),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:a,name:m[2],strings:h,ctor:m[1]==="."?Ca:m[1]==="?"?xa:m[1]==="@"?ka:ft})}else l.push({type:6,index:a})}for(const f of u)o.removeAttribute(f)}if(va.test(o.tagName)){const u=o.textContent.split(se),f=u.length-1;if(f>0){o.textContent=De?De.emptyScript:"";for(let p=0;p<f;p++)o.append(u[p],et()),ve.nextNode(),l.push({type:2,index:++a});o.append(u[f],et())}}}else if(o.nodeType===8)if(o.data===$n)l.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(se,u+1))!==-1;)l.push({type:7,index:a}),u+=se.length-1}a++}}static createElement(t,r){const n=ke.createElement("template");return n.innerHTML=t,n}}function Ee(e,t,r=e,n){var o,a,s,i;if(t===U)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=tt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Ee(e,l._$AS(e,t.values),l,n)),t}let wa=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:ke).importNode(n,!0);ve.currentNode=a;let s=ve.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new Ie(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new Ea(s,this,t)),this._$AV.push(d),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=ve.nextNode(),i++)}return ve.currentNode=ke,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class Ie{constructor(t,r,n,o){var a;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ee(this,t,r),tt(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ba(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.$(ke.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=rt.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new wa(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=Qn.get(t.strings);return r===void 0&&Qn.set(t.strings,r=new rt(t)),r}T(t){ga(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Ie(this.k(et()),this.k(et()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ft{constructor(t,r,n,o,a){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=Ee(this,t,r,0),s=!tt(t)||t!==this._$AH&&t!==U,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Ee(this,i[n+l],r,l),c===U&&(c=this._$AH[l]),s||(s=!tt(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ca extends ft{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}const Ni=De?De.emptyScript:"";class xa extends ft{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,Ni):this.element.removeAttribute(this.name)}}class ka extends ft{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Ee(this,t,r,0))!==null&&n!==void 0?n:P)===U)return;const o=this._$AH,a=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==P&&(o===P||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Ea{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ee(this,t)}}const Ri={O:It,P:se,A:$n,C:1,M:ya,L:wa,D:ba,R:Ee,I:Ie,V:ft,H:xa,N:ka,U:Ca,F:Ea},Kn=Dt.litHtmlPolyfillSupport;Kn==null||Kn(rt,Ie),((br=Dt.litHtmlVersions)!==null&&br!==void 0?br:Dt.litHtmlVersions=[]).push("2.7.4");const Bi=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Ie(t.insertBefore(et(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Li}=Ri,eo=()=>document.createComment(""),Ye=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(eo(),a),i=o.insertBefore(eo(),a);r=new Li(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const d=c.nextSibling;o.insertBefore(c,a),c=d}}}return r},be=(e,t,r=e)=>(e._$AI(t,r),e),zi={},Oi=(e,t=zi)=>e._$AH=t,Hi=e=>e._$AH,$r=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=me(class extends le{constructor(e){var t;if(super(e),e.type!==dt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return U}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const to=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Di=me(class extends le{constructor(e){if(super(e),e.type!==dt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=Hi(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,f=0,p=a.length-1,h=0,m=s.length-1;for(;f<=p&&h<=m;)if(a[f]===null)f++;else if(a[p]===null)p--;else if(l[f]===i[h])c[h]=be(a[f],s[h]),f++,h++;else if(l[p]===i[m])c[m]=be(a[p],s[m]),p--,m--;else if(l[f]===i[m])c[m]=be(a[f],s[m]),Ye(e,c[m+1],a[f]),f++,m--;else if(l[p]===i[h])c[h]=be(a[p],s[h]),Ye(e,a[f],a[p]),p--,h++;else if(d===void 0&&(d=to(i,h,m),u=to(l,f,p)),d.has(l[f]))if(d.has(l[p])){const g=u.get(i[h]),$=g!==void 0?a[g]:null;if($===null){const R=Ye(e,a[f]);be(R,s[h]),c[h]=R}else c[h]=be($,s[h]),Ye(e,a[f],$),a[g]=null;h++}else $r(a[p]),p--;else $r(a[f]),f++;for(;h<=m;){const g=Ye(e,c[m+1]);be(g,s[h]),c[h++]=g}for(;f<=p;){const g=a[f++];g!==null&&$r(g)}return this.ht=i,Oi(e,c),U}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Vr=class extends le{constructor(t){if(super(t),this.et=P,t.type!==dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.ft=void 0,this.et=t;if(t===U)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Vr.directiveName="unsafeHTML",Vr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ro=class extends Vr{};ro.directiveName="unsafeSVG",ro.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Sa(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=window,wn=Lt.ShadowRoot&&(Lt.ShadyCSS===void 0||Lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cn=Symbol(),no=new WeakMap;let Ta=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Cn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(wn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=no.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&no.set(r,t))}return t}toString(){return this.cssText}};const S=e=>new Ta(typeof e=="string"?e:e+"",void 0,Cn),we=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new Ta(r,e,Cn)},Ii=(e,t)=>{wn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Lt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},oo=wn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return S(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yr;const jt=window,ao=jt.trustedTypes,ji=ao?ao.emptyScript:"",so=jt.reactiveElementPolyfillSupport,Ur={toAttribute(e,t){switch(t){case Boolean:e=e?ji:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},_a=(e,t)=>t!==e&&(t==t||e==e),wr={attribute:!0,type:String,converter:Ur,reflect:!1,hasChanged:_a},Wr="finalized";class Re extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=wr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||wr}static finalize(){if(this.hasOwnProperty(Wr))return!1;this[Wr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(oo(o))}else t!==void 0&&r.push(oo(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ii(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=wr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Ur).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Ur;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||_a)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Re[Wr]=!0,Re.elementProperties=new Map,Re.elementStyles=[],Re.shadowRootOptions={mode:"open"},so==null||so({ReactiveElement:Re}),((yr=jt.reactiveElementVersions)!==null&&yr!==void 0?yr:jt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cr,xr;class ze extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return U}}ze.finalized=!0,ze._$litElement$=!0,(Cr=globalThis.litElementHydrateSupport)===null||Cr===void 0||Cr.call(globalThis,{LitElement:ze});const io=globalThis.litElementPolyfillSupport;io==null||io({LitElement:ze});((xr=globalThis.litElementVersions)!==null&&xr!==void 0?xr:globalThis.litElementVersions=[]).push("3.3.2");var Fi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s($){if($!==void 0&&typeof $!="function")throw new TypeError("Function expected");return $}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,f=!1,p=r.length-1;p>=0;p--){var h={};for(var m in n)h[m]=m==="access"?{}:n[m];for(var m in n.access)h.access[m]=n.access[m];h.addInitializer=function($){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s($||null))};var g=(0,r[p])(i==="accessor"?{get:d.get,set:d.set}:d[l],h);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(u=s(g.get))&&(d.get=u),(u=s(g.set))&&(d.set=u),(u=s(g.init))&&o.push(u)}else(u=s(g))&&(i==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),f=!0},Vi=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Ui=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Wi(){function e(t,r){return t}return e}let Ma=(()=>{let e=[Wi()],t,r=[],n;return n=class extends ze{},Ui(n,"DeclarativeElement"),Fi(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Vi(n,r),n})();const Yi={capitalizeFirstLetter:!1};function Zi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Gi(e,t){return t.capitalizeFirstLetter?Zi(e):e}function Xi(e,t=Yi){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Gi(n,t)}function qi(e){return e?e instanceof Error?e.message:ht(e,"message")?String(e.message):String(e):""}function Ji(e){return e instanceof Error?e:new Error(qi(e))}const Qi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ht(e,t){return e?Qi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ki(e,t){return e&&t.every(r=>ht(e,r))}function Se(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Aa(e,t){let r=!1;const n=Se(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Se(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function lo(e){return e!==e.toUpperCase()}function el(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=lo(s)||lo(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const tl=["january","february","march","april","may","june","july","august","september","october","november","december"];tl.map(e=>e.slice(0,3));function rl(e){return!!e&&typeof e=="object"}function co(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function nl(e){return Array.isArray(e)?"array":typeof e}function ol(e,t){return nl(e)===t}function al(e,t){let r=!1;const n=co(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(co(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function I(e){if(rl(e))return al(e,(r,n)=>{if(!ol(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(el(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?S(r):r.startsWith("-")?we`-${S(r)}`:we`--${S(r)}`;return{name:s,value:we`var(${s}, ${S(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${I.name}' function.`)}function sl({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const il=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},ll=(e,t,r)=>{t.constructor.createProperty(r,e)};function sr(e){return(t,r)=>r!==void 0?ll(e,t,r):il(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kr;((kr=window.HTMLSlotElement)===null||kr===void 0?void 0:kr.prototype.assignedElements)!=null;const Yr=Symbol("this-is-an-element-vir-declarative-element"),xn=Symbol("key for ignoring inputs not having been set yet"),cl={[xn]:!0,allowPolymorphicState:!1};function Pa(e,t){const r=e.instanceState;Se(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Se(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Na(e)}function Na(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Ra(e,t){return Zr(e,t),e.element}function ul(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Zr(e,t){const r=ul(e),n=r?`: found in ${r}`:"";if(e.type!==dt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function _(e,t){return t?uo(e,t):uo(void 0,e)}const uo=me(class extends le{constructor(e){super(e),this.element=Ra(e,"assign")}render(e,t){return dl(e,this.element,t),U}});function dl(e,t,r){Pa(t,r)}function Ba(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Ma?!0:Ba(r)}function fo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}let fl=class extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}};function kn(){return e=>{var t;return t=class extends fl{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function nt(){return kn()}function hl(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=kn()(r);return t[r]=n,t},{}):{}}const ho="_is_element_vir_observable_property_handler_instance",po="_is_element_vir_observable_property_handler_creator";function pl(e){return ht(e,po)&&e[po]===!0}function ml(e){return ht(e,ho)&&e[ho]===!0}function gl(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function mo(e,t){const r=e;function n(s){t?gl(s,e,e.tagName):sr()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function d(u){s[i]=u,r[i]=u}return pl(l)&&(l=l.init()),ml(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):d(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function bl(e){return e?Aa(e,t=>t):{}}function vl({hostClassNames:e,cssVars:t}){return{hostClasses:Aa(e,(r,n)=>({name:S(n),selector:S(`:host(.${n})`)})),cssVars:t}}function $l({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Se(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function yl(e,t){function r(o){Se(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var wl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function En(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...cl,...e.options},n=hl(e.events),o=bl(e.hostClasses);e.hostClasses&&fo(e.tagName,e.hostClasses),e.cssVars&&fo(e.tagName,e.cssVars);const a=e.cssVars?I(e.cssVars):{},s=typeof e.styles=="function"?e.styles(vl({hostClassNames:o,cssVars:a})):e.styles||we``,i=e.renderCallback,l=(t=class extends Ma{createRenderParams(){return yl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Na(this)}render(){try{Ba(this)&&!this.haveInputsBeenSet&&!r[xn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${_.name}" directive on it. If no inputs are intended, use "${En.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(c);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return $l({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=Ji(c);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){Pa(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=mo(this,!1),this.instanceState=mo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const c=e.stateInitStatic||{};Se(c).forEach(u=>{sr()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},wl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[Yr]:{value:!0,writable:!1},name:{value:Xi(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function La(){return e=>En({...e,options:{[xn]:!1,...e.options}})}function K(e,t){return Cl(e,t)}const Cl=me(class extends le{constructor(e){super(e),this.element=Ra(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),U}}),Er="onResize",za=me(class extends le{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Zr(e,Er)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Er} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Zr(e,Er),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function ot(e,t,r){return Sa(e,()=>t,()=>r)}function Oa(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),La()(r(n))),defineElementNoInputs:n=>(t(n),En(r(n)))}}function xl(e,t){return e.filter((r,n)=>!t.includes(n))}function Ha(e){return e.filter(t=>Ki(t,["tagName",Yr])&&!!t.tagName&&!!t[Yr])}const Da=new WeakMap;function kl(e,t){var o;const r=Ha(t);return(o=Ia(Da,[e,...r]).value)==null?void 0:o.template}function El(e,t,r){const n=Ha(t);return Fa(Da,[e,...n],r)}function Ia(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ja(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ia(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ja(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Fa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=ja(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Fa(l,t,r,n+1)}function Va(e,t,r){return{name:e,check:t,transform:r}}const Sl=new WeakMap;function Ua(e,t,r){const n=kl(e,t),o=n??r();if(!n){const s=El(e,t,o);if(s.result)Sl.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=xl(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Wa(e,t,r,n){const o=[],a=[],s=[];return e.forEach((l,c)=>{var g;const d=o.length-1,u=o[d],f=c-1,p=t[f];let h;n&&n(l),typeof u=="string"&&(h=(g=r.find($=>$.check(u,l,p)))==null?void 0:g.transform,h&&(o[d]=u+h(p)+l,s.push(f))),h||o.push(l);const m=e.raw[c];h?a[d]=a[d]+h(p)+m:a.push(m)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:s}}function Ya(e){return ht(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Tl=[Va("tag name css selector interpolation",(e,t,r)=>Ya(r),e=>e.tagName)];function _l(e,t){return Wa(e,t,Tl)}function T(e,...t){const r=Ua(e,t,()=>_l(e,t));return we(r.strings,...r.values)}const Ml=[Va("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=Ya(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Al(e){}function Pl(e){return Wa(e.strings,e.values,Ml,Al)}function b(e,...t){const r=$a(e,...t),n=Ua(e,t,()=>Pl(r));return{...r,strings:n.strings,values:n.values}}function Gr(e,t){return or(e,"entryType")&&e.entryType===t}const Nl={[L.ElementExample]:()=>[],[L.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...bi(e.controls,e.title)].filter(ha),[L.Root]:()=>[]},Ft="_isBookTreeNode",Za=new Map;function Rl(e){return Za.get(e)}function Bl(e,t){xi(Za,e,()=>t)}function Oe(e,t){return!!(Ga(e)&&e.entry.entryType===t)}function Ga(e){return!!(pa(e,[Ft,"entry"])&&e[Ft])}function Ll(e,t){return{[Ft]:!0,entry:{entryType:L.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function zl({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=Rl(e);if(o)return o;const a=Ll(t,r);e.forEach(l=>Sn({tree:a,newEntry:l,debug:n,manuallyAdded:!0}));const s=Xa(a),i={tree:a,flattenedNodes:s};return Bl(e,i),n&&console.info("element-book tree:",a),i}function Ol(e,t,r){if(!t.parent)return e;const n=Xr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Sn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Xr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${vn(t,!1)}`);return o}function Sn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Nl[t.entryType](t);t.errors.push(...o);const a=Ol(e,t,r),s=Ht(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Ft]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,Gr(t,L.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Sn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Xr(e,t){const r=Ga(e)?e.fullUrlBreadcrumbs.slice(0,-1):vn(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Hl(e,t){if(e.entry.entryType!==t.entry.entryType){if(Gr(e.entry,L.ElementExample))return-1;if(Gr(t.entry,L.ElementExample))return 1}return e.entry.title.localeCompare(t.entry.title)}function Xa(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).sort(Hl).map(o=>Xa(o));return[e,...r].flat()}function Dl(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function Tn(e,t){return _n(e,t,void 0)}function _n(e,t,r){const n=t[0];if(!n)return{};const o=Dl(e,n,r);if(!o)return{};const a=t.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,..._n(o.children,a,r)}}function Il(e,t,r){const n=yi(e);return _n(n,t,r),n}function qa(e){return Ot(e.children,(r,n)=>Oe(n,L.Page)?{children:qa(n),controls:Ot(n.entry.controls,(o,a)=>a.initValue)}:{children:{},controls:{}})}const jl=globalThis.crypto;function Fl(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return jl.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Ze(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function Vl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const Ul=Fl(32);function qr(e){return e.join(Ul)}function Ja(e){if(!e.length)return[];const t=qr(e),r=Ja(e.slice(0,-1));return[t,...r]}const Wl=["error","errors"];function Yl(e){return Wl.includes(e)}function Zl({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&Yl(t);if(Vl({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)Ja(n.fullUrlBreadcrumbs).forEach(i=>r[i]=!0);else{const s=qr(n.fullUrlBreadcrumbs);r[s]=!1}}),e.filter(n=>{const o=qr(n.fullUrlBreadcrumbs),a=r[o];if(!ar(a,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var H;(function(e){e.Search="search",e.Book="book"})(H||(H={}));function Qa(e){return e[0]===H.Book?"":e[1]?decodeURIComponent(e[1]):""}const at={hash:void 0,paths:[H.Book],search:void 0},Gl=0;function Xl(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Gl)}class pt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class go extends pt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const st="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const ql=globalThis.history.pushState;function bo(...e){const t=ql.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(st)),t}const Jl=globalThis.history.replaceState;function vo(...e){const t=Jl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(st)),t}function Ql(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===bo)throw new go("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===vo)throw new go("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=bo,globalThis.history.replaceState=vo,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(st))})}}function Kl(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function ec(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function tc(e){const r=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Kl(new URLSearchParams(globalThis.location.search)):void 0,a=globalThis.location.hash||void 0;return{paths:r,search:o,hash:a}}class rc extends pt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Ka(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const $o=6;function yo(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>$o)throw new rc(`Route sanitization depth has exceed the max of ${$o} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Ka(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Sr extends pt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function nc(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Sr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Sr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Sr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function oc(e,t,r,n=!1){const o=es(e,t,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function es(e,t,r=""){var l;if(!r&&t!=null)throw new pt("Route base regexp was defined but routeBase string was not provided.");const n=ac(t)?`/${r}`:"",o=e.search?ec(e.search).toString():"",a=o?`?${o}`:"",s=(l=e.hash)!=null&&l.startsWith("#")?"":"#",i=e.hash?`${s}${e.hash}`:"";return`${n}/${e.paths.join("/")}${a}${i}`}function ac(e){return!!(e&&globalThis.location.pathname.match(e))}function sc(e={}){var s;nc(e),Ql();const t=(s=e.routeBase)==null?void 0:s.replace(/\/+$/,""),r=t?new RegExp(`^\\/${e.routeBase}`):void 0;let n=!1;const o=()=>yo(a),a={listeners:new Set,initParams:e,sanitizeFullRoute:i=>{const l={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(l):l},setRoutes:(i,l=!1,c=!1)=>{const d=a.getCurrentRawRoutes(),u={...d,...i},f=a.sanitizeFullRoute(u);if(!(!c&&Ka(d,f)))return oc(f,r,t,l)},createRoutesUrl:i=>es(i,r,t),getCurrentRawRoutes:()=>tc(r),removeAllRouteListeners(){a.listeners.forEach(i=>a.removeRouteListener(i))},addRouteListener:(i,l)=>{if(e.maxListenerCount&&a.listeners.size>=e.maxListenerCount)throw new pt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return a.listeners.add(l),n||(globalThis.addEventListener(st,o),n=!0),i&&yo(a,l),l},hasRouteListener:i=>a.listeners.has(i),removeRouteListener:i=>{const l=a.listeners.delete(i);return a.listeners.size||(globalThis.removeEventListener(st,o),n=!1),l},sanitizationDepth:0};return a}function ic(e){return sc({routeBase:e,routeSanitizer(t){return{paths:lc(t.paths),hash:void 0,search:void 0}}})}function lc(e){const t=e[0];if(Si(t,H)){if(t===H.Book)return[H.Book,...e.slice(1)];if(t===H.Search)return e[1]?[t,e[1]]:[H.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return at.paths}const y=I({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),cc={nav:{hover:{background:y["element-book-nav-hover-background-color"],foreground:y["element-book-nav-hover-foreground-color"]},active:{background:y["element-book-nav-active-background-color"],foreground:y["element-book-nav-active-foreground-color"]},selected:{background:y["element-book-nav-selected-background-color"],foreground:y["element-book-nav-selected-foreground-color"]}},accent:{icon:y["element-book-accent-icon-color"]},page:{background:y["element-book-page-background-color"],backgroundFaint1:y["element-book-page-background-faint-level-1-color"],backgroundFaint2:y["element-book-page-background-faint-level-2-color"],foreground:y["element-book-page-foreground-color"],foregroundFaint1:y["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:y["element-book-page-foreground-faint-level-2-color"]}};function uc(e,t){ts(e,t,cc)}function Jr(e){return or(e,"_$cssResult$")}function wo(e){return pa(e,["name","value","default"])&&ar(e.default,"string")&&Jr(e.name)&&Jr(e.value)}function ts(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Jr(o)){if(!wo(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);sl({forCssVar:a,onElement:e,toValue:String(o)})}else{if(wo(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ts(e,o,a)}})}function N(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function mt(e){return ue(e)==="string"}function ue(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Vt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function rs(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ns(e){return e[e.length-1]}function Ut(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function os(e,t,r){return(r-e)/(t-e)}function Mn(e,t,r){return Ut(t[0],t[1],os(e[0],e[1],r))}function as(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var dc=Object.freeze({__proto__:null,isString:mt,type:ue,toPrecision:Vt,parseFunction:rs,last:ns,interpolate:Ut,interpolateInv:os,mapRange:Mn,parseCoordGrammar:as,multiplyMatrices:N});class fc{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const de=new fc;var ne={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const ee={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Qr(e){return Array.isArray(e)?e:ee[e]}function Wt(e,t,r,n={}){if(e=Qr(e),t=Qr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(de.run("chromatic-adaptation-start",o),o.M||(o.W1===ee.D65&&o.W2===ee.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===ee.D50&&o.W2===ee.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),de.run("chromatic-adaptation-end",o),o.M)return N(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const hc=75e-6;var ut,Kr,He,rr,ss;const Q=class{constructor(t){Ue(this,ut);Ue(this,rr);Ue(this,He,void 0);var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?Q.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=Qr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,gr(this,He,xt(this,rr,ss).call(this).reverse()),de.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=hc}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=xt(this,ut,Kr).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=xt(this,ut,Kr).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Q.get(t),this===t)return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=_e(this,He),o=_e(t,He),a,s;for(let i=0;i<n.length&&n[i]===o[i];i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Q.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Q.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Q)return t;if(ue(t)==="string"){let o=Q.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Q.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ue(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=Q.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ue(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=Q.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===s||((l=d.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...d};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let v=Q;ut=new WeakSet,Kr=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=as(t.coords);let r=Object.entries(this.coords).map(([n,o],a)=>{let s=t.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=Mn(i,l,a)),a=Vt(a,o),c&&(a+=c),a})}return t},He=new WeakMap,rr=new WeakSet,ss=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},pr(v,"registry",{}),pr(v,"DEFAULT_FORMAT",{type:"functions",name:"color"});var Z=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class j extends v{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Z),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=N(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Wt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Wt(this.base.white,this.white,r),N(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function is(e){var r,n,o,a,s;let t={str:(r=String(e))==null?void 0:r.trim()};if(de.run("parse-start",t),t.color)return t.color;if(t.parsed=rs(t.str),t.parsed){let i=t.parsed.name;if(i==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let u of v.all){let f=u.getFormat("color");if(f&&(l===f.id||(n=f.ids)!=null&&n.includes(l))){let p=Object.keys(u.coords).length,h=Array(p).fill(0);return h.forEach((m,g)=>h[g]=t.parsed.args[g]||0),{spaceId:u.id,coords:h,alpha:c}}}let d="";if(l in v.registry){let u=(s=(a=(o=v.registry[l].formats)==null?void 0:o.functions)==null?void 0:a.color)==null?void 0:s.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of v.all){let c=l.getFormat(i);if(c&&c.type==="function"){let d=1;(c.lastAlpha||ns(t.parsed.args).alpha)&&(d=t.parsed.args.pop());let u=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([f,p],h)=>{var E;let m=c.coordGrammar[h],g=(E=u[h])==null?void 0:E.type;if(m=m.find(A=>A==g),!m){let A=p.name||f;throw new TypeError(`${g} not allowed for ${A} in ${i}()`)}let $=m.range;g==="<percentage>"&&($||($=[0,1]));let R=p.range||p.refRange;$&&R&&(u[h]=Mn($,R,u[h]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let i of v.all)for(let l in i.formats){let c=i.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let d=c.parse(t.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function w(e){if(!e)throw new TypeError("Empty color reference");mt(e)&&(e=is(e));let t=e.space||e.spaceId;return t instanceof v||(e.space=v.get(t)),e.alpha===void 0&&(e.alpha=1),e}function gt(e,t){return t=v.get(t),t.from(e)}function G(e,t){let{space:r,index:n}=v.resolveCoord(t,e.space);return gt(e,r)[n]}function ls(e,t,r){return t=v.get(t),e.coords=t.to(e.space,r),e}function fe(e,t,r){if(e=w(e),arguments.length===2&&ue(arguments[1])==="object"){let n=arguments[1];for(let o in n)fe(e,o,n[o])}else{typeof r=="function"&&(r=r(G(e,t)));let{space:n,index:o}=v.resolveCoord(t,e.space),a=gt(e,n);a[o]=r,ls(e,n,a)}return e}var An=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Z,fromBase:e=>Wt(Z.white,"D50",e),toBase:e=>Wt("D50",Z.white,e),formats:{color:{}}});const pc=216/24389,Co=24/116,kt=24389/27;let Tr=ee.D50;var V=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Tr,base:An,fromBase(e){let r=e.map((n,o)=>n/Tr[o]).map(n=>n>pc?Math.cbrt(n):(kt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Co?Math.pow(t[0],3):(116*t[0]-16)/kt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/kt,t[2]>Co?Math.pow(t[2],3):(116*t[2]-16)/kt].map((n,o)=>n*Tr[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function ir(e){return(e%360+360)%360}function mc(e,t){if(e==="raw")return t;let[r,n]=t.map(ir),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var it=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:V,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ir(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const xo=25**7,Yt=Math.PI,ko=180/Yt,Ae=Yt/180;function en(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=V.from(e),l=it.from(V,[a,s,i])[1],[c,d,u]=V.from(t),f=it.from(V,[c,d,u])[1];l<0&&(l=0),f<0&&(f=0);let h=((l+f)/2)**7,m=.5*(1-Math.sqrt(h/(h+xo))),g=(1+m)*s,$=(1+m)*d,R=Math.sqrt(g**2+i**2),E=Math.sqrt($**2+u**2),A=g===0&&i===0?0:Math.atan2(i,g),ce=$===0&&u===0?0:Math.atan2(u,$);A<0&&(A+=2*Yt),ce<0&&(ce+=2*Yt),A*=ko,ce*=ko;let yt=c-a,wt=E-R,re=ce-A,je=A+ce,zn=Math.abs(re),Fe;R*E===0?Fe=0:zn<=180?Fe=re:re>180?Fe=re-360:re<-180?Fe=re+360:console.log("the unthinkable has happened");let On=2*Math.sqrt(E*R)*Math.sin(Fe*Ae/2),ci=(a+c)/2,hr=(R+E)/2,Hn=Math.pow(hr,7),oe;R*E===0?oe=je:zn<=180?oe=je/2:je<360?oe=(je+360)/2:oe=(je-360)/2;let Dn=(ci-50)**2,ui=1+.015*Dn/Math.sqrt(20+Dn),In=1+.045*hr,Ve=1;Ve-=.17*Math.cos((oe-30)*Ae),Ve+=.24*Math.cos(2*oe*Ae),Ve+=.32*Math.cos((3*oe+6)*Ae),Ve-=.2*Math.cos((4*oe-63)*Ae);let jn=1+.015*hr*Ve,di=30*Math.exp(-1*((oe-275)/25)**2),fi=2*Math.sqrt(Hn/(Hn+xo)),hi=-1*Math.sin(2*di*Ae)*fi,Ct=(yt/(r*ui))**2;return Ct+=(wt/(n*In))**2,Ct+=(On/(o*jn))**2,Ct+=hi*(wt/(n*In))*(On/(o*jn)),Math.sqrt(Ct)}const gc=75e-6;function qe(e,t=e.space,{epsilon:r=gc}={}){e=w(e),t=v.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function lt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function he(e,{method:t=ne.gamut_mapping,space:r=e.space}={}){if(mt(arguments[1])&&(r=arguments[1]),r=v.get(r),qe(e,r,{epsilon:0}))return e;let n=W(e,r);if(t!=="clip"&&!qe(e,r)){let o=he(lt(n),{method:"clip",space:r});if(en(e,o)>2){let a=v.resolveCoord(t),s=a.space,i=a.id,l=W(n,s),d=(a.range||a.refRange)[0],u=.01,f=d,p=G(l,i);for(;p-f>u;){let h=lt(l);h=he(h,{space:r,method:"clip"}),en(l,h)-2<u?f=G(l,i):p=G(l,i),fe(l,i,(f+p)/2)}n=W(l,r)}else n=o}if(t==="clip"||!qe(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=W(n,e.space)),e.coords=n.coords,e}he.returns="color";function W(e,t,{inGamut:r}={}){e=w(e),t=v.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=he(o)),o}W.returns="color";function Zt(e,{precision:t=ne.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=w(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??v.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!qe(e)&&(i=he(lt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(p=>Vt(p,t)));let d=[...i];if(c==="color"){let p=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(p)}let u=e.alpha;t!==null&&(u=Vt(u,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";a=`${c}(${d.join(r.commas?", ":" ")}${f})`}return a}const bc=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],vc=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var lr=new j({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:bc,fromXYZ_M:vc,formats:{color:{}}});const Et=1.09929682680944,Eo=.018053968510807;var cs=new j({id:"rec2020",name:"REC.2020",base:lr,toBase(e){return e.map(function(t){return t<Eo*4.5?t/4.5:Math.pow((t+Et-1)/Et,1/.45)})},fromBase(e){return e.map(function(t){return t>=Eo?Et*Math.pow(t,.45)-(Et-1):4.5*t})},formats:{color:{}}});const $c=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],yc=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var us=new j({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:$c,fromXYZ_M:yc});const wc=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Cc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ds=new j({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:wc,fromXYZ_M:Cc,formats:{color:{}}}),So={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let To=Array(3).fill("<percentage> | <number>[0, 255]"),_o=Array(3).fill("<number>[0, 255]");var ct=new j({id:"srgb",name:"sRGB",base:ds,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:To},rgb_number:{name:"rgb",commas:!0,coords:_o,noAlpha:!0},color:{},rgba:{coords:To,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:_o},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=So.black,t.alpha=0):t.coords=So[e],t.coords)return t}}}}),fs=new j({id:"p3",name:"P3",base:us,fromBase:ct.fromBase,toBase:ct.toBase,formats:{color:{id:"display-p3"}}});ne.display_space=ct;if(typeof CSS<"u"&&CSS.supports)for(let e of[V,cs,fs]){let t=e.getMinCoords(),n=Zt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ne.display_space=e;break}}function xc(e,{space:t=ne.display_space,...r}={}){let n=Zt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ne.display_space)n=new String(n),n.color=e;else{let o=W(e,t);n=new String(Zt(o,r)),n.color=o}return n}function hs(e,t,r="lab"){r=v.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function kc(e,t){return e=w(e),t=w(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function pe(e){return G(e,[Z,"y"])}function ps(e,t){fe(e,[Z,"y"],t)}function Ec(e){Object.defineProperty(e.prototype,"luminance",{get(){return pe(this)},set(t){ps(this,t)}})}var Sc=Object.freeze({__proto__:null,getLuminance:pe,setLuminance:ps,register:Ec});function Tc(e,t){e=w(e),t=w(t);let r=Math.max(pe(e),0),n=Math.max(pe(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const _c=.56,Mc=.57,Ac=.62,Pc=.65,Mo=.022,Nc=1.414,Rc=.1,Bc=5e-4,Lc=1.14,Ao=.027,zc=1.14;function Po(e){return e>=Mo?e:e+(Mo-e)**Nc}function Pe(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Oc(e,t){t=w(t),e=w(e);let r,n,o,a,s,i;t=W(t,"srgb"),[a,s,i]=t.coords;let l=Pe(a)*.2126729+Pe(s)*.7151522+Pe(i)*.072175;e=W(e,"srgb"),[a,s,i]=e.coords;let c=Pe(a)*.2126729+Pe(s)*.7151522+Pe(i)*.072175,d=Po(l),u=Po(c),f=u>d;return Math.abs(u-d)<Bc?n=0:f?(r=u**_c-d**Mc,n=r*Lc):(r=u**Pc-d**Ac,n=r*zc),Math.abs(n)<Rc?o=0:n>0?o=n-Ao:o=n+Ao,o*100}function Hc(e,t){e=w(e),t=w(t);let r=Math.max(pe(e),0),n=Math.max(pe(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Dc=5e4;function Ic(e,t){e=w(e),t=w(t);let r=Math.max(pe(e),0),n=Math.max(pe(t),0);return n>r&&([r,n]=[n,r]),n===0?Dc:(r-n)/n}function jc(e,t){e=w(e),t=w(t);let r=G(e,[V,"l"]),n=G(t,[V,"l"]);return Math.abs(r-n)}const Fc=216/24389,No=24/116,St=24389/27;let _r=ee.D65;var tn=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:_r,base:Z,fromBase(e){let r=e.map((n,o)=>n/_r[o]).map(n=>n>Fc?Math.cbrt(n):(St*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>No?Math.pow(t[0],3):(116*t[0]-16)/St,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/St,t[2]>No?Math.pow(t[2],3):(116*t[2]-16)/St].map((n,o)=>n*_r[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const Mr=Math.pow(5,.5)*.5+.5;function Vc(e,t){e=w(e),t=w(t);let r=G(e,[tn,"l"]),n=G(t,[tn,"l"]),o=Math.abs(Math.pow(r,Mr)-Math.pow(n,Mr)),a=Math.pow(o,1/Mr)*Math.SQRT2-40;return a<7.5?0:a}var zt=Object.freeze({__proto__:null,contrastWCAG21:Tc,contrastAPCA:Oc,contrastMichelson:Hc,contrastWeber:Ic,contrastLstar:jc,contrastDeltaPhi:Vc});function Uc(e,t,r={}){mt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(zt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=w(e),t=w(t);for(let a in zt)if("contrast"+n.toLowerCase()===a.toLowerCase())return zt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function ms(e){let[t,r,n]=gt(e,Z),o=t+15*r+3*n;return[4*t/o,9*r/o]}function gs(e){let[t,r,n]=gt(e,Z),o=t+r+n;return[t/o,r/o]}function Wc(e){Object.defineProperty(e.prototype,"uv",{get(){return ms(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return gs(this)}})}var Yc=Object.freeze({__proto__:null,uv:ms,xy:gs,register:Wc});function Zc(e,t){return hs(e,t,"lab")}const Gc=Math.PI,Ro=Gc/180;function Xc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=V.from(e),[,i,l]=it.from(V,[o,a,s]),[c,d,u]=V.from(t),f=it.from(V,[c,d,u])[1];i<0&&(i=0),f<0&&(f=0);let p=o-c,h=i-f,m=a-d,g=s-u,$=m**2+g**2-h**2,R=.511;o>=16&&(R=.040975*o/(1+.01765*o));let E=.0638*i/(1+.0131*i)+.638,A;Number.isNaN(l)&&(l=0),l>=164&&l<=345?A=.56+Math.abs(.2*Math.cos((l+168)*Ro)):A=.36+Math.abs(.4*Math.cos((l+35)*Ro));let ce=Math.pow(i,4),yt=Math.sqrt(ce/(ce+1900)),wt=E*(yt*A+1-yt),re=(p/(r*R))**2;return re+=(h/(n*E))**2,re+=$/wt**2,Math.sqrt(re)}const Bo=203;var Pn=new v({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Z,fromBase(e){return e.map(t=>Math.max(t*Bo,0))},toBase(e){return e.map(t=>Math.max(t/Bo,0))}});const Tt=1.15,_t=.66,Lo=2610/2**14,qc=2**14/2610,zo=3424/2**12,Oo=2413/2**7,Ho=2392/2**7,Jc=1.7*2523/2**5,Do=2**5/(1.7*2523),Mt=-.56,Ar=16295499532821565e-27,Qc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Kc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],eu=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],tu=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var bs=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Pn,fromBase(e){let[t,r,n]=e,o=Tt*t-(Tt-1)*n,a=_t*r-(_t-1)*t,i=N(Qc,[o,a,n]).map(function(f){let p=zo+Oo*(f/1e4)**Lo,h=1+Ho*(f/1e4)**Lo;return(p/h)**Jc}),[l,c,d]=N(eu,i);return[(1+Mt)*l/(1+Mt*l)-Ar,c,d]},toBase(e){let[t,r,n]=e,o=(t+Ar)/(1+Mt-Mt*(t+Ar)),s=N(tu,[o,r,n]).map(function(f){let p=zo-f**Do,h=Ho*f**Do-Oo;return 1e4*(p/h)**qc}),[i,l,c]=N(Kc,s),d=(i+(Tt-1)*c)/Tt,u=(l+(_t-1)*d)/_t;return[d,u,c]},formats:{color:{}}}),rn=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:bs,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ir(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function ru(e,t){let[r,n,o]=rn.from(e),[a,s,i]=rn.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let d=o-i,u=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const vs=3424/4096,$s=2413/128,ys=2392/128,Io=2610/16384,nu=2523/32,ou=16384/2610,jo=32/2523,au=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],su=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],iu=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],lu=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var nn=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Pn,fromBase(e){let t=N(au,e);return cu(t)},toBase(e){let t=uu(e);return N(lu,t)},formats:{color:{}}});function cu(e){let t=e.map(function(r){let n=vs+$s*(r/1e4)**Io,o=1+ys*(r/1e4)**Io;return(n/o)**nu});return N(su,t)}function uu(e){return N(iu,e).map(function(n){let o=Math.max(n**jo-vs,0),a=$s-ys*n**jo;return 1e4*(o/a)**ou})}function du(e,t){let[r,n,o]=nn.from(e),[a,s,i]=nn.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const fu=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],hu=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],pu=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],mu=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Gt=new v({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Z,fromBase(e){let r=N(fu,e).map(n=>Math.cbrt(n));return N(pu,r)},toBase(e){let r=N(mu,e).map(n=>n**3);return N(hu,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function gu(e,t){let[r,n,o]=Gt.from(e),[a,s,i]=Gt.from(t),l=r-a,c=n-s,d=o-i;return Math.sqrt(l**2+c**2+d**2)}var on=Object.freeze({__proto__:null,deltaE76:Zc,deltaECMC:Xc,deltaE2000:en,deltaEJz:ru,deltaEITP:du,deltaEOK:gu});function Ge(e,t,r={}){mt(r)&&(r={method:r});let{method:n=ne.deltaE,...o}=r;e=w(e),t=w(t);for(let a in on)if("deltae"+n.toLowerCase()===a.toLowerCase())return on[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function bu(e,t=.25){let n=[v.get("oklch","lch"),"l"];return fe(e,n,o=>o*(1+t))}function vu(e,t=.25){let n=[v.get("oklch","lch"),"l"];return fe(e,n,o=>o*(1-t))}var $u=Object.freeze({__proto__:null,lighten:bu,darken:vu});function ws(e,t,r=.5,n={}){[e,t]=[w(e),w(t)],ue(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return bt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function Cs(e,t,r={}){let n;Nn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[w(e),w(t)],n=bt(e,t,l));let c=Ge(e,t),d=o>0?Math.max(s,Math.ceil(c/o)+1):s,u=[];if(i!==void 0&&(d=Math.min(d,i)),d===1)u=[{p:.5,color:n(.5)}];else{let f=1/(d-1);u=Array.from({length:d},(p,h)=>{let m=h*f;return{p:m,color:n(m)}})}if(o>0){let f=u.reduce((p,h,m)=>{if(m===0)return 0;let g=Ge(h.color,u[m-1].color,a);return Math.max(p,g)},0);for(;f>o;){f=0;for(let p=1;p<u.length&&u.length<i;p++){let h=u[p-1],m=u[p],g=(m.p+h.p)/2,$=n(g);f=Math.max(f,Ge($,h.color),Ge($,m.color)),u.splice(p,0,{p:g,color:n(g)}),p++}}}return u=u.map(f=>f.color),u}function bt(e,t,r={}){if(Nn(e)){let[l,c]=[e,t];return bt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=w(e),t=w(t),e=lt(e),t=lt(t);let i={colors:[e,t],options:r};if(n?n=v.get(n):n=v.registry[ne.interpolationSpace]||e.space,o=o?v.get(o):n,e=W(e,n),t=W(t,n),e=he(e),t=he(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[G(e,c),G(t,c)];[d,u]=mc(l,[d,u]),fe(e,c,d),fe(t,c,u)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,p)=>{let h=t.coords[p];return Ut(f,h,l)}),d=Ut(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return s&&(u.coords=u.coords.map(f=>f/d)),o!==n&&(u=W(u,o)),u},{rangeArgs:i})}function Nn(e){return ue(e)==="function"&&!!e.rangeArgs}ne.interpolationSpace="lab";function yu(e){e.defineFunction("mix",ws,{returns:"color"}),e.defineFunction("range",bt,{returns:"function<color>"}),e.defineFunction("steps",Cs,{returns:"array<color>"})}var wu=Object.freeze({__proto__:null,mix:ws,steps:Cs,range:bt,isRange:Nn,register:yu}),xs=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ct,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ks=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:xs,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Cu=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ks,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const xu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],ku=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Es=new j({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:xu,fromXYZ_M:ku}),Eu=new j({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Es,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Su=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Tu=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Ss=new j({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:An,toXYZ_M:Su,fromXYZ_M:Tu});const _u=1/512,Mu=16/512;var Au=new j({id:"prophoto",name:"ProPhoto",base:Ss,toBase(e){return e.map(t=>t<Mu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=_u?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Pu=new v({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Gt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ir(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Fo=203,Vo=2610/2**14,Nu=2**14/2610,Ru=2523/2**5,Uo=2**5/2523,Wo=3424/2**12,Yo=2413/2**7,Zo=2392/2**7;var Bu=new j({id:"rec2100pq",name:"REC.2100-PQ",base:lr,toBase(e){return e.map(function(t){return(Math.max(t**Uo-Wo,0)/(Yo-Zo*t**Uo))**Nu*1e4/Fo})},fromBase(e){return e.map(function(t){let r=Math.max(t*Fo/1e4,0),n=Wo+Yo*r**Vo,o=1+Zo*r**Vo;return(n/o)**Ru})},formats:{color:{id:"rec2100-pq"}}});const Go=.17883277,Xo=.28466892,qo=.55991073,Pr=3.7743;var Lu=new j({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:lr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Pr:Math.exp((t-qo)/Go+Xo)/12*Pr})},fromBase(e){return e.map(function(t){return t/=Pr,t<=1/12?Math.sqrt(3*t):Go*Math.log(12*t-Xo)+qo})},formats:{color:{id:"rec2100-hlg"}}});const Ts={};de.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=_s(e.W1,e.W2,e.options.method))});de.add("chromatic-adaptation-end",e=>{e.M||(e.M=_s(e.W1,e.W2,e.options.method))});function cr({id:e,toCone_M:t,fromCone_M:r}){Ts[e]=arguments[0]}function _s(e,t,r="Bradford"){let n=Ts[r],[o,a,s]=N(n.toCone_M,e),[i,l,c]=N(n.toCone_M,t),d=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],u=N(d,n.toCone_M);return N(n.fromCone_M,u)}cr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});cr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});cr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});cr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(ee,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});ee.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const zu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Ou=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ms=new j({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:ee.ACES,toXYZ_M:zu,fromXYZ_M:Ou,formats:{color:{}}});const At=2**-16,Nr=-.35828683,Pt=(Math.log2(65504)+9.72)/17.52;var Hu=new j({id:"acescc",name:"ACEScc",coords:{r:{range:[Nr,Pt],name:"Red"},g:{range:[Nr,Pt],name:"Green"},b:{range:[Nr,Pt],name:"Blue"}},referred:"scene",base:Ms,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-At)*2:r<Pt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(At)+9.72)/17.52:t<At?(Math.log2(At+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Jo=Object.freeze({__proto__:null,XYZ_D65:Z,XYZ_D50:An,XYZ_ABS_D65:Pn,Lab_D65:tn,Lab:V,LCH:it,sRGB_Linear:ds,sRGB:ct,HSL:xs,HWB:Cu,HSV:ks,P3_Linear:us,P3:fs,A98RGB_Linear:Es,A98RGB:Eu,ProPhoto_Linear:Ss,ProPhoto:Au,REC_2020_Linear:lr,REC_2020:cs,OKLab:Gt,OKLCH:Pu,Jzazbz:bs,JzCzHz:rn,ICTCP:nn,REC_2100_PQ:Bu,REC_2100_HLG:Lu,ACEScg:Ms,ACEScc:Hu}),ye;const z=class{constructor(...t){Ue(this,ye,void 0);let r;t.length===1&&(r=w(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,gr(this,ye,v.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in _e(this,ye).coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get space(){return _e(this,ye)}get spaceId(){return _e(this,ye).id}clone(){return new z(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=xc(this,...t);return r.color=new z(r.color),r}static get(t,...r){return t instanceof z?t:new z(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=z.get(l);else if(a==="function<color>"){let c=l;l=function(...d){let u=c(...d);return z.get(u)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>z.get(c)));return l};t in z||(z[t]=s),o&&(z.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)z.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(z);else for(let r in t)z.defineFunction(r,t[r])}};let k=z;ye=new WeakMap;k.defineFunctions({get:G,getAll:gt,set:fe,setAll:ls,to:W,equals:kc,inGamut:qe,toGamut:he,distance:hs,toString:Zt});Object.assign(k,{util:dc,hooks:de,WHITES:ee,Space:v,spaces:v.registry,parse:is,defaults:ne});for(let e of Object.keys(Jo))v.register(Jo[e]);for(let e in v.registry)an(e,v.registry[e]);de.add("colorspace-init-end",e=>{var t;an(e.id,e),(t=e.aliases)==null||t.forEach(r=>{an(r,e)})});function an(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(k.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return v.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=v.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=v.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}k.extend(on);k.extend({deltaE:Ge});k.extend($u);k.extend({contrast:Uc});k.extend(Yc);k.extend(Sc);k.extend(wu);k.extend(zt);function As(e){return Ot(e,(t,r)=>r instanceof k?S(r.toString({format:"hex"})):As(r))}const Du="dodgerblue";function sn(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Rr({background:e,foreground:t}){return{background:e??new k(sn(t)),foreground:t??new k(sn(e))}}var Xt;(function(e){e.Dark="dark",e.Light="light"})(Xt||(Xt={}));function Iu(e){return e==="black"?"white":"black"}const ju={black:{foregroundFaint1:new k("#ccc"),foregroundFaint2:new k("#eee")},white:{foregroundFaint1:new k("#ccc"),foregroundFaint2:new k("#eee")}},Fu={black:{backgroundFaint1:new k("#666"),backgroundFaint2:new k("#444")},white:{backgroundFaint1:new k("#ccc"),backgroundFaint2:new k("#fafafa")}};function Qo({themeColor:e=Du,themeStyle:t=Xt.Light}={}){const r=new k(e),n=new k(t===Xt.Dark?"black":"white"),o=sn(n),a=new k(o),s={nav:{hover:Rr({background:r.clone().set({"hsl.l":93})}),active:Rr({background:r.clone().set({"hsl.l":90})}),selected:Rr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Fu[Iu(o)],foreground:a,...ju[o]}};return As(s)}const qt=kn()("element-book-change-route"),Ko="vira-",{defineElement:ur,defineElementNoInputs:rf}=Oa({assertInputs:e=>{if(!e.tagName.startsWith(Ko))throw new Error(`Tag name should start with '${Ko}' but got '${e.tagName}'`)}}),Ps=T`
    pointer-events: none;
    opacity: 0.3;
`,Je=I({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Vu(e){return`${e}px`}const Jt=I({"vira-form-input-border-radius":"8px"}),Qt=I({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":T`calc(${Jt["vira-form-input-border-radius"].value} + 4px)`});function Ns({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=S(Vu(n+r+t));return T`
        ${S(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Qt["vira-focus-outline-color"].value};
            border-radius: ${Qt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Be=T`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Rs=T`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,ln=I({"vira-icon-color":"currentColor"}),Uu=I({"vira-icon-stroke-color":ln["vira-icon-color"].value,"vira-icon-fill-color":ln["vira-icon-color"].value}),Br={...ln,...Uu},Y=ur()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>T`
        :host {
            display: inline-block;
            color: ${Br["vira-icon-color"].value};
            fill: ${Br["vira-icon-fill-color"].value};
            stroke: ${Br["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var cn;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(cn||(cn={}));ur()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===cn.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>T`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Rs};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Qt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ps};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Be};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Jt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Je["vira-interaction-animation-duration"].value},
                background-color
                    ${Je["vira-interaction-animation-duration"].value},
                border-color ${Je["vira-interaction-animation-duration"].value};
        }

        ${Ns({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${Y} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?b`
                  <${Y}
                      ${_(Y,{icon:e.icon})}
                  ></${Y}>
              `:"",r=e.text?b`
                  <span class="text-template">${e.text}</span>
              `:"";return b`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var un;(function(e){e.Header="header"})(un||(un={}));ur()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>T`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Be};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Je["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:nt()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?T`
                  height: ${e.contentHeight}px;
              `:T`
                  height: 0;
              `;return b`
            <button
                class="header-wrapper"
                ${K("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${un.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${za(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function dn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>dn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Bs({value:e,allowed:t,blocked:r}){const n=t?dn({input:e,matcher:t}):!0,o=r?dn({input:e,matcher:r}):!1;return n&&!o}function ea(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Bs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}ur()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:nt(),inputBlocked:nt()},styles:({hostClasses:e,cssVars:t})=>T`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Qt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ps};
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
                ${Be};
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
                ${Rs};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${Be};
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
                border-radius: ${Jt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Je["vira-interaction-animation-duration"].value};
            }

            label {
                ${Be};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Jt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Ns({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${Y} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Be};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
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

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=ea({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?b`
                  <${Y} ${_(Y,{icon:e.icon})}></${Y}>
              `:"",i=e.fitText?T`
                  width: ${r.forcedInputWidth}px;
              `:"";return b`
            <label>
                ${s}
                ${ot(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${za(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${yn({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${K("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=a;let f=c.value??"";if(d)if(d.length===1)Bs({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=u,t(new o.inputBlocked(d)));else{const{filtered:p,blocked:h}=ea({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs});f=p,t(new o.inputBlocked(h))}c.value!==f&&(c.value=f),u!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${ot(!!e.suffix,b`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function Ls({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Wu=Ls({name:"Element16Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="1"
                vector-effect="non-scaling-stroke"
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
            />
        </svg>
    `});Ls({name:"Element24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const{defineElement:J,defineElementNoInputs:nf}=Oa(),D=J()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>T`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return b`
            <a
                href=${r}
                ${K("click",a=>{(!e.router||Xl(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new qt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),Nt=J()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>T`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${y["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${y["element-book-nav-hover-background-color"].value};
            color: ${y["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${y["element-book-nav-active-background-color"].value};
            color: ${y["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${D.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${y["element-book-nav-selected-background-color"].value};
            color: ${y["element-book-nav-selected-foreground-color"].value};
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

        ${Y} {
            display: inline-flex;
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=T`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return b`
                <li style=${n}>
                    <${D}
                        ${_(D,{router:e.router,route:{paths:[H.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${yn({"title-row":!0,selected:e.selectedPath?Xe(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ot(Oe(r,L.ElementExample),b`
                                    <${Y}
                                        ${_(Y,{icon:Wu})}
                                    ></${Y}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${D}>
                </li>
            `});return b`
            <slot name=${ie.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}}),X=J()({tagName:"book-error",styles:T`
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
    `,renderCallback({inputs:e}){return(ar(e.message,"array")?e.message:[e.message]).map(r=>b`
                    <p>${r}</p>
                `)}}),Lr=J()({tagName:"book-breadcrumbs",styles:T`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":b`
                      <span class="spacer">&gt;</span>
                  `;return b`
                <${D}
                    ${_(D,{route:{hash:void 0,search:void 0,paths:[H.Book,...s]},router:e.router})}
                >
                    ${r}
                </${D}>
                ${i}
            `}):b`
                &nbsp;
            `}}),zr=J()({tagName:"book-breadcrumbs-bar",styles:T`
        :host {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${y["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${y["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return b`
            ${ot(!!e.currentSearch,b`
                    &nbsp;
                `,b`
                    <${Lr}
                        ${_(Lr,{currentRoute:e.currentRoute,router:e.router})}
                    ></${Lr}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${K("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Ti(200),n.value===o&&(n.value?t(new qt({paths:[H.Search,encodeURIComponent(n.value)]})):t(new qt(at)))})}
            />
        `}}),Ce=J()({tagName:"book-page-controls",events:{controlValueChange:nt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>T`
        :host {
            display: flex;
            flex-wrap: wrap;
            opacity: 0.7;
            gap: 16px;
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o])=>{if(o.controlType===x.Hidden)return"";const a=Yu(e.currentValues[n],o,s=>{const i=ar(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!i)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:i,newValues:{...e.currentValues,[n]:s}}))});return b`
                    <label class="control-wrapper">
                        <span>${n}</span>
                        ${a}
                    </label>
                `}):""}});function Yu(e,t,r){return Me(t,x.Hidden)?"":Me(t,x.Checkbox)?b`
            <input
                type="checkbox"
                .value=${e}
                ${K("input",n=>{const o=Ze(n,HTMLInputElement);r(o.checked)})}
            />
        `:Me(t,x.Color)?b`
            <input
                type="color"
                .value=${e}
                ${K("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Me(t,x.Text)?b`
            <input
                type="text"
                .value=${e}
                ${K("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Me(t,x.Number)?b`
            <input
                type="number"
                .value=${e}
                ${K("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Me(t,x.Dropdown)?b`
            <select
                .value=${e}
                ${K("input",n=>{const o=Ze(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map((n,o)=>b`
                        <option ?selected=${o===e} value=${o}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:b`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Or=J()({tagName:"book-entry-description",styles:T`
        :host {
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${y["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>b`
                <p>${t}</p>
            `)}}),Hr=J()({tagName:"book-page-wrapper",styles:T`
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

        ${D} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?b`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:b`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[H.Book,...e.pageNode.fullUrlBreadcrumbs],n=fa(e.pageNode.entry.errors);return n&&console.error(n),b`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${D}
                        ${_(D,{route:{paths:r,hash:void 0,search:void 0},router:e.router})}
                    >
                        ${t}
                    </${D}>
                    ${n?b`
                              <${X}
                                  ${_(X,{message:n.message})}
                              ></${X}>
                          `:b`
                              <${Or}
                                  ${_(Or,{descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}
                              ></${Or}>
                              <${Ce}
                                  ${_(Ce,{config:e.pageNode.entry.controls,currentValues:Tn(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}
                              ></${Ce}>
                          `}
                </div>
            </div>
        `}}),Rt=J()({tagName:"book-element-example-controls",styles:T`
        :host {
            display: flex;
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[H.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return b`
            <${D}
                ${_(D,{route:{paths:t,hash:void 0,search:void 0},router:e.router})}
            >
                ${e.elementExampleNode.entry.title}
            </${D}>
        `}}),ta=Symbol("unset-internal-state"),Dr=J()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:ta},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw fa(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===ta&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return b`
                ${ot(!!t.elementExampleNode.entry.styles,b`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),b`
                <${X}
                    ${_(X,{message:`${t.elementExampleNode.entry.title} failed: ${nr(n)}`})}
                ></${X}>
            `}},options:{allowPolymorphicState:!0}}),Ir=J()({tagName:"book-element-example-wrapper",styles:T`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
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
        }

        ${Rt} {
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return b`
            <div class="individual-example-wrapper">
                <${Rt}
                    ${_(Rt,e)}
                ></${Rt}>
                <${Dr}
                    ${_(Dr,e)}
                ></${Dr}>
            </div>
        `}}),Ne=J()({tagName:"book-entry-display",styles:T`
        :host {
            display: flex;
            flex-direction: column;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin-top: 32px;
        }

        .inline-entry + .inline-entry {
            margin-left: 16px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }
    `,renderCallback:({inputs:e})=>{const t=Qa(e.currentRoute.paths),r=Zu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return b`
            <${zr}
                ${_(zr,{currentSearch:t,currentRoute:e.currentRoute,router:e.router})}
            ></${zr}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${ie.Footer}></slot>
        `}});function zs(e,t,r,n){const o=Xr(r,n),a=[];if(o){const s=zs(e,t,o,n);s&&a.push(s)}if(Oe(r,L.Page)&&!e.includes(r)){const s=Tn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:Ot(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Zu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:a}){if(!e.length&&n)return[b`
                No results
            `];const s=Yn(e,1)?zs(e,o,e[0],a):void 0,i=s&&Yn(e,1)?b`
                  <${Ce}
                      ${_(Ce,{config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}
                  ></${Ce}>
              `:"",l=Di(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Oe(c,L.Page))return b`
                    <${Hr}
                        class="block-entry"
                        ${_(Hr,{isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                    ></${Hr}>
                `;if(Oe(c,L.ElementExample)){const u=Tn(o,c.fullUrlBreadcrumbs.slice(0,-1));return b`
                    <${Ir}
                        class="inline-entry"
                        ${_(Ir,{elementExampleNode:c,currentPageControls:u,router:r})}
                    ></${Ir}>
                `}else return Oe(c,L.Root)?b`
                    <h1>${c.entry.title}</h1>
                `:b`
                    <${X}
                        class="block-entry"
                        ${_(X,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${X}>
                `});return[i,l]}function Gu(e,t,r){const n=ra(e,t);if(n.length)return n;r(at);const o=ra(e,at.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function ra(e,t){return e.filter(r=>Mi({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Bt=La()({tagName:"element-book-app",events:{pathUpdate:nt()},stateInitStatic:{currentRoute:at,router:void 0,colors:{config:void 0,theme:Qo(void 0)},treeBasedCurrentControls:void 0},styles:T`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${y["element-book-page-background-color"].value};
            color: ${y["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            height: 100%;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Ne} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Nt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,d;try{let u=function(E){e.router?e.router.setRoutes(E):n({currentRoute:{...e.currentRoute,...E}}),t.elementBookRoutePaths&&!Xe(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(E.paths??[]))};var s=u;if(t.elementBookRoutePaths&&!Xe(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const E=ic(t.internalRouterConfig.basePath);n({router:E}),E.addRouteListener(!0,A=>{n({currentRoute:A})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const f={themeColor:t.themeColor};if(!Xe(f,(c=e.colors)==null?void 0:c.config)){const E=Qo(f);n({colors:{config:f,theme:E}}),uc(r,E)}const p=t.debug??!1,h=zl({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:p});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.trigger!==t.entries)&&n({treeBasedCurrentControls:{trigger:t.entries,currentControls:qa(h.tree)}});const m=Qa(e.currentRoute.paths),$=(m?Zl({flattenedNodes:h.flattenedNodes,searchQuery:m}):void 0)??Gu(h.flattenedNodes,e.currentRoute.paths,u),R=(d=e.treeBasedCurrentControls)==null?void 0:d.currentControls;return R?(t.debug&&console.info({currentControls:R}),b`
                <div
                    class="root"
                    ${K(qt,E=>{const A=r.shadowRoot.querySelector(Ne.tagName);A?A.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Ne.tagName}' for scrolling.`),u(E.detail)})}
                    ${K(Ce.events.controlValueChange,E=>{if(!e.treeBasedCurrentControls)return;const A=Il(R,E.detail.fullUrlBreadcrumbs,E.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:A}})})}
                >
                    <${Nt}
                        ${_(Nt,{flattenedNodes:h.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}
                    >
                        <slot
                            name=${ie.NavHeader}
                            slot=${ie.NavHeader}
                        ></slot>
                    </${Nt}>
                    <${Ne}
                        ${_(Ne,{currentRoute:e.currentRoute,currentNodes:$,router:e.router,debug:p,currentControls:R,originalTree:h.tree})}
                    >
                        <slot
                            name=${ie.Footer}
                            slot=${ie.Footer}
                        ></slot>
                    </${Ne}>
                </div>
            `):b`
                    <${X}
                        ${_(X,{message:"Failed to generate page controls."})}
                    ></${X}>
                `}catch(u){return console.error(u),b`
                <p class="error">${nr(u)}</p>
            `}}});var Xu=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s($){if($!==void 0&&typeof $!="function")throw new TypeError("Function expected");return $}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,f=!1,p=r.length-1;p>=0;p--){var h={};for(var m in n)h[m]=m==="access"?{}:n[m];for(var m in n.access)h.access[m]=n.access[m];h.addInitializer=function($){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s($||null))};var g=(0,r[p])(i==="accessor"?{get:d.get,set:d.set}:d[l],h);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(u=s(g.get))&&(d.get=u),(u=s(g.set))&&(d.set=u),(u=s(g.init))&&o.push(u)}else(u=s(g))&&(i==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),f=!0},qu=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Ju=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Qu(){function e(t,r){return t}return e}let Os=(()=>{let e=[Qu()],t,r=[],n;return n=class extends ze{},Ju(n,"DeclarativeElement"),Xu(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,qu(n,r),n})();const Ku={capitalizeFirstLetter:!1};function ed(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function td(e,t){return t.capitalizeFirstLetter?ed(e):e}function rd(e,t=Ku){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return td(n,t)}function nd(e){return e?e instanceof Error?e.message:vt(e,"message")?String(e.message):String(e):""}function od(e){return e instanceof Error?e:new Error(nd(e))}const ad=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function vt(e,t){return e?ad.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function sd(e,t){return e&&t.every(r=>vt(e,r))}function Te(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Hs(e,t){let r=!1;const n=Te(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Te(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}const fn=Symbol("this-is-an-element-vir-declarative-element"),Rn=Symbol("key for ignoring inputs not having been set yet"),id={[Rn]:!0,allowPolymorphicState:!1};function Ds(e,t){const r=e.instanceState;Te(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Te(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Is(e)}function Is(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function js(e,t){return hn(e,t),e.element}function ld(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function hn(e,t){const r=ld(e),n=r?`: found in ${r}`:"";if(e.type!==dt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function te(e,t){return t?na(e,t):na(void 0,e)}const na=me(class extends le{constructor(e){super(e),this.element=js(e,"assign")}render(e,t){return cd(e,this.element,t),U}});function cd(e,t,r){Ds(t,r)}function Fs(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Os?!0:Fs(r)}function oa(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class ud extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Vs(){return e=>{var t;return t=class extends ud{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function pn(){return Vs()}function dd(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Vs()(r);return t[r]=n,t},{}):{}}const aa="_is_element_vir_observable_property_handler_instance",sa="_is_element_vir_observable_property_handler_creator";function fd(e){return vt(e,sa)&&e[sa]===!0}function hd(e){return vt(e,aa)&&e[aa]===!0}function pd(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function ia(e,t){const r=e;function n(s){t?pd(s,e,e.tagName):sr()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function d(u){s[i]=u,r[i]=u}return fd(l)&&(l=l.init()),hd(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):d(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function md(e){return e?Hs(e,t=>t):{}}function gd({hostClassNames:e,cssVars:t}){return{hostClasses:Hs(e,(r,n)=>({name:S(n),selector:S(`:host(.${n})`)})),cssVars:t}}function bd({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Te(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function vd(e,t){function r(o){Te(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var $d=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function dr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...id,...e.options},n=dd(e.events),o=md(e.hostClasses);e.hostClasses&&oa(e.tagName,e.hostClasses),e.cssVars&&oa(e.tagName,e.cssVars);const a=e.cssVars?I(e.cssVars):{},s=typeof e.styles=="function"?e.styles(gd({hostClassNames:o,cssVars:a})):e.styles||we``,i=e.renderCallback,l=(t=class extends Os{createRenderParams(){return vd(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Is(this)}render(){try{Fs(this)&&!this.haveInputsBeenSet&&!r[Rn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${te.name}" directive on it. If no inputs are intended, use "${dr.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(c);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return bd({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=od(c);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){Ds(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=ia(this,!1),this.instanceState=ia(this,!((d=e.options)!=null&&d.allowPolymorphicState));const c=e.stateInitStatic||{};Te(c).forEach(u=>{sr()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},$d(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[fn]:{value:!0,writable:!1},name:{value:rd(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function yd(){return e=>dr({...e,options:{[Rn]:!1,...e.options}})}function $e(e,t){return wd(e,t)}const wd=me(class extends le{constructor(e){super(e),this.element=js(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),U}}),jr="onResize",Us=me(class extends le{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),hn(e,jr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${jr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){hn(e,jr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Kt(e,t,r){return Sa(e,()=>t,()=>r)}function Cd(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),yd()(r(n))),defineElementNoInputs:n=>(t(n),dr(r(n)))}}function xd(e,t){return e.filter((r,n)=>!t.includes(n))}function Ws(e){return e.filter(t=>sd(t,["tagName",fn])&&!!t.tagName&&!!t[fn])}const Ys=new WeakMap;function kd(e,t){var o;const r=Ws(t);return(o=Zs(Ys,[e,...r]).value)==null?void 0:o.template}function Ed(e,t,r){const n=Ws(t);return Xs(Ys,[e,...n],r)}function Zs(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Gs(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Zs(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Gs(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Xs(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Gs(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Xs(l,t,r,n+1)}function qs(e,t,r){return{name:e,check:t,transform:r}}const Sd=new WeakMap;function Js(e,t,r){const n=kd(e,t),o=n??r();if(!n){const s=Ed(e,t,o);if(s.result)Sd.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=xd(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Qs(e,t,r,n){const o=[],a=[],s=[];return e.forEach((l,c)=>{var g;const d=o.length-1,u=o[d],f=c-1,p=t[f];let h;n&&n(l),typeof u=="string"&&(h=(g=r.find($=>$.check(u,l,p)))==null?void 0:g.transform,h&&(o[d]=u+h(p)+l,s.push(f))),h||o.push(l);const m=e.raw[c];h?a[d]=a[d]+h(p)+m:a.push(m)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:s}}function Ks(e){return vt(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Td=[qs("tag name css selector interpolation",(e,t,r)=>Ks(r),e=>e.tagName)];function _d(e,t){return Qs(e,t,Td)}function C(e,...t){const r=Js(e,t,()=>_d(e,t));return we(r.strings,...r.values)}const Md=[qs("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=Ks(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Ad(e){}function Pd(e){return Qs(e.strings,e.values,Md,Ad)}function M(e,...t){const r=$a(e,...t),n=Js(e,t,()=>Pd(r));return{...r,strings:n.strings,values:n.values}}const $t=q({title:"Elements",parent:void 0}),ei=C`
    pointer-events: none;
    opacity: 0.3;
`,Qe=I({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Nd(e){return`${e}px`}const er=I({"vira-form-input-border-radius":"8px"}),tr=I({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":C`calc(${er["vira-form-input-border-radius"].value} + 4px)`});function ti({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=S(Nd(n+r+t));return C`
        ${S(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${tr["vira-focus-outline-color"].value};
            border-radius: ${tr["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Le=C`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,ri=C`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,la="vira-",{defineElement:fr,defineElementNoInputs:of}=Cd({assertInputs:e=>{if(!e.tagName.startsWith(la))throw new Error(`Tag name should start with '${la}' but got '${e.tagName}'`)}}),mn=I({"vira-icon-color":"currentColor"}),Rd=I({"vira-icon-stroke-color":mn["vira-icon-color"].value,"vira-icon-fill-color":mn["vira-icon-color"].value}),xe={...mn,...Rd},O=fr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>C`
        :host {
            display: inline-block;
            color: ${xe["vira-icon-color"].value};
            fill: ${xe["vira-icon-fill-color"].value};
            stroke: ${xe["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ni=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(ni||{});const B=fr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ri};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${tr["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${ei};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Le};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${er["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Qe["vira-interaction-animation-duration"].value},
                background-color
                    ${Qe["vira-interaction-animation-duration"].value},
                border-color ${Qe["vira-interaction-animation-duration"].value};
        }

        ${ti({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${O} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?M`
                  <${O}
                      ${te(O,{icon:e.icon})}
                  ></${O}>
              `:"",r=e.text?M`
                  <span class="text-template">${e.text}</span>
              `:"";return M`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),Bn=q({parent:$t,title:"Button"}),Bd=q({parent:Bn,title:B.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:x.Text,initValue:""},"Secondary color":{controlType:x.Text,initValue:""},"Hover color":{controlType:x.Text,initValue:""},"Active color":{controlType:x.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??C``;e({title:r,styles:a,renderCallback({controls:s}){const i=C`
                        ${B.cssVars["vira-button-primary-color"].name}: ${S(s["Primary color"]||"inherit")};
                        ${B.cssVars["vira-button-secondary-color"].name}: ${S(s["Secondary color"]||"inherit")};
                        ${B.cssVars["vira-button-primary-hover-color"].name}: ${S(s["Hover color"]||"inherit")};
                        ${B.cssVars["vira-button-primary-active-color"].name}: ${S(s["Active color"]||"inherit")};
                    `;return M`
                        <${B}
                            style=${i}
                            ${te(B,{text:"hello",...o})}
                        ></${B}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:ni.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:C`
                ${B} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:C`
                ${B} {
                    height: 75px;
                }
            `})}}),Ld=q({parent:Bn,title:"with custom colors",descriptionParagraphs:["These are not necessarily GOOD color combinations, but they are custom!"],elementExamplesCallback({defineExample:e}){e({title:"custom colors",styles:C`
                :host {
                    ${B.cssVars["vira-button-primary-color"].name}: pink;
                    ${B.cssVars["vira-button-secondary-color"].name}: purple;
                    ${B.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${B.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return M`
                    <${B}
                        ${te(B,{text:"hello"})}
                    ></${B}>
                `}})}}),zd=[Bn,Bd,Ld];var gn=(e=>(e.Header="header",e))(gn||{});const ae=fr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Le};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Qe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:pn()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?C`
                  height: ${e.contentHeight}px;
              `:C`
                  height: 0;
              `;return M`
            <button
                class="header-wrapper"
                ${$e("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Us(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),oi=q({title:"Collapsible",parent:$t}),Od=q({title:ae.tagName,parent:oi,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>M`
                            <${ae}
                                ${te(ae,{expanded:!!r.expandedStates[o]})}
                                ${$e(ae.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${gn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${$e("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Kt(!!r.showMoreStates[o],M`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${ae}>
                        `)}}),e({title:"wider examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>M`
                            <${ae}
                                ${te(ae,{expanded:!!r.expandedStates[o]})}
                                ${$e(ae.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${gn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${$e("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Kt(!!r.showMoreStates[o],M`
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
                            </${ae}>
                        `)}})}}),Hd=[oi,Od];function Ln({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Dd=Ln({name:"Element16Icon",svgTemplate:M`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="1"
                vector-effect="non-scaling-stroke"
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
            />
        </svg>
    `}),Ke=Ln({name:"Element24Icon",svgTemplate:M`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),Id=Ln({name:"Options24Icon",svgTemplate:M`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${xe["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),jd={Element16Icon:Dd,Element24Icon:Ke,Options24Icon:Id},ai=q({title:"Icon",parent:$t}),Fd=q({title:O.tagName,parent:ai,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return M`
                    <${O} ${te(O,{icon:Ke})}></${O}>
                `}})}}),Vd=[ai,Fd];function bn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>bn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function si({value:e,allowed:t,blocked:r}){const n=t?bn({input:e,matcher:t}):!0,o=r?bn({input:e,matcher:r}):!1;return n&&!o}function ca(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(si({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const F=fr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:pn(),inputBlocked:pn()},styles:({hostClasses:e,cssVars:t})=>C`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${tr["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${ei};
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
                ${Le};
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
                ${ri};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${Le};
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
                border-radius: ${er["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Qe["vira-interaction-animation-duration"].value};
            }

            label {
                ${Le};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${er["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${ti({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${O} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Le};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
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

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=ca({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?M`
                  <${O} ${te(O,{icon:e.icon})}></${O}>
              `:"",i=e.fitText?C`
                  width: ${r.forcedInputWidth}px;
              `:"";return M`
            <label>
                ${s}
                ${Kt(!!e.fitText,M`
                        <span
                            class="size-span"
                            ${Us(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${yn({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${$e("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=a;let f=c.value??"";if(d)if(d.length===1)si({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=u,t(new o.inputBlocked(d)));else{const{filtered:p,blocked:h}=ca({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs});f=p,t(new o.inputBlocked(h))}c.value!==f&&(c.value=f),u!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${Kt(!!e.suffix,M`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),ii=q({title:"Input",parent:$t});function ua(e,t,r=[],n){return q({title:e,parent:ii,descriptionParagraphs:r,controls:(()=>{const o={"Text color":{controlType:x.Text,initValue:""},"Placeholder color":{controlType:x.Text,initValue:""},"Border color":{controlType:x.Text,initValue:""},"Focus color":{controlType:x.Text,initValue:""},"Selection color":{controlType:x.Text,initValue:""}};return t?o:{}})(),elementExamplesCallback({defineExample:o}){function a({styles:s,title:i,inputs:l}){o({title:i,styles:C`
                        ${s||C``}
                    `,stateInitStatic:{value:l.value},renderCallback({state:c,updateState:d,controls:u}){const f=t?C`
                                  ${F.cssVars["vira-input-text-color"].name}: ${S(u["Text color"]||"inherit")};
                                  ${F.cssVars["vira-input-border-color"].name}: ${S(u["Border color"]||"inherit")};
                                  ${F.cssVars["vira-input-focus-border-color"].name}: ${S(u["Focus color"]||"inherit")};
                                  ${F.cssVars["vira-input-placeholder-color"].name}: ${S(u["Placeholder color"]||"inherit")};
                                  ${F.cssVars["vira-input-text-selection-color"].name}: ${S(u["Selection color"]||"inherit")};
                              `:C``;return M`
                            <${F}
                                style=${f}
                                ${te(F,{...l,value:c.value,...n})}
                                ${$e(F.events.valueChange,p=>{d({value:p.detail})})}
                            ></${F}>
                        `}})}a({title:"basic",inputs:{value:"default value"}}),a({title:"with icon",inputs:{value:"",icon:Ke}}),a({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),a({title:"with suffix",inputs:{value:"42",suffix:"px"}}),a({title:"disabled",inputs:{value:"disabled",disabled:!0}}),a({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),a({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),a({title:"custom width",styles:C`
                    ${F} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Ke}}),a({title:"custom height",styles:C`
                    ${F} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"height",icon:Ke}}),a({title:"max width",styles:C`
                    ${F} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42"}})}})}const Ud=[ua(F.tagName,!0,["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."]),ua("vira-input fit text",!0,["Set the input 'fitText' to true for automatic sizing to fit the given text."],{fitText:!0})],Wd=[ii,...Ud],li=q({parent:void 0,title:"Icons"}),Yd=q({title:"All Icons",parent:li,controls:{"Icon Color":{controlType:x.Text,initValue:""},"Stroke Color":{controlType:x.Text,initValue:""},"Fill Color":{controlType:x.Text,initValue:""}},elementExamplesCallback({defineExample:e}){Object.values(jd).forEach(t=>{e({title:t.name,renderCallback({controls:r}){const n=C`
                        ${xe["vira-icon-color"].name}: ${S(r["Icon Color"]||"inherit")};
                        ${xe["vira-icon-fill-color"].name}: ${S(r["Fill Color"]||"inherit")};
                        ${xe["vira-icon-stroke-color"].name}: ${S(r["Stroke Color"]||"inherit")};
                    `;return M`
                        <${O} style=${n} ${te(O,{icon:t})}></${O}>
                    `}})})}}),Zd=[li,Yd],Gd=[$t,...Zd,...zd,...Hd,...Vd,...Wd];dr({tagName:"vira-book-app",styles:C`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Bt} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,renderCallback(){return M`
            <${Bt}
                ${te(Bt,{internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Gd,themeColor:"#33ccff"})}
            >
                <h1 slot=${ie.NavHeader}>Vira</h1>
            </${Bt}>
        `}});
