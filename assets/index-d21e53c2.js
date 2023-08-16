var Hi=Object.defineProperty;var Di=(e,t,r)=>t in e?Hi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ur=(e,t,r)=>(Di(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function ji(e,t){return e.includes(t)}function Kt(e){return!!e}function Fi(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ui={capitalizeFirstLetter:!1};function Yi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Wi(e,t){return t.capitalizeFirstLetter?Yi(e):e}function Zi(e,t=Ui){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Wi(n,t)}function Pn(e){return e!==e.toUpperCase()}function qi(e){return e.split("").reduce((r,n,o,a)=>{const i=o>0?a[o-1]:"",s=o<a.length-1?a[o+1]:"",l=Pn(i)||Pn(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Qo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Qt(r).trim()).join(`
`))}function Qt(e){return e?e instanceof Error?e.message:ne(e,"message")?String(e.message):String(e):""}function ea(e){return e instanceof Error?e:new Error(Qt(e))}function fe(e){return!!e&&typeof e=="object"}function Gi(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Xi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ne(e,t){return e?Xi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ta(e,t){return e&&t.every(r=>ne(e,r))}function ee(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ar(e){return Array.isArray(e)?"array":typeof e}function K(e,t){return Ar(e)===t}function Rn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Nn="Failed to compare objects using JSON.stringify";function Ln(e,t,r){return Rn({source:e,errorHandler(n){if(r)return"";throw n}})===Rn({source:t,errorHandler(n){if(r)return"";throw n}})}function Ee(e,t,r={}){try{return e===t?!0:fe(e)&&fe(t)?Ln(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Ee(e[o],t[o])):!1:Ln(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=ea(n);throw o.message.startsWith(Nn)||(o.message=`${Nn}: ${o.message}`),o}}function Ji(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Ki(e){return ee(e).filter(t=>isNaN(Number(t)))}function Qi(e){return Ki(e).map(r=>e[r])}function es(e,t){return Qi(t).includes(e)}function ts(e,t){return ee(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function rs(e,t){return ts(e,r=>!t.includes(r))}function me(e,t){let r=!1;const n=ee(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(ee(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function ns(e){const t=nn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function nn(){let e,t,r=!1;const n=new Promise((o,a)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,a(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${nn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}const os="px";function ra(e){return as(e,os)}function as(e,t){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function In(e,t){try{return na(e,t),!0}catch{return!1}}function na(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function is(e,t){return ne(e,"entryType")&&e.entryType===t}var N;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(N||(N={}));function Ae(e,t){return e.controlType===t}var k;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(k||(k={}));const oa=Symbol("any-type"),ss={[k.Checkbox]:!1,[k.Color]:"",[k.Dropdown]:"",[k.Hidden]:oa,[k.Number]:0,[k.Text]:""};function ls(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=ss[o.controlType];a!==oa&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function on(e,t){const r=Lt(e.title);return e.parent?[...on(e.parent,!1),Lt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Lt(e){return Fi(e).toLowerCase().replaceAll(/\s/g,"-")}function cs({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Me(e){const t={...e,entryType:N.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:N.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Kt)};r.add(n.title),t.elementExamples[Lt(o.title)]=o}}),t}var de;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(de||(de={}));async function Br(e=1){const t=nn();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const us=globalThis.crypto;function ds(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return us.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function hs(e){return fs(e,1)}async function fs(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{na(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function Re(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ft=e=>(...t)=>({_$litDirective$:e,values:t});let De=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr;const It=window,Ve=It.trustedTypes,zn=Ve?Ve.createPolicy("lit-html",{createHTML:e=>e}):void 0,zt="$lit$",ue=`lit$${(Math.random()+"").slice(9)}$`,an="?"+ue,ps=`<${an}>`,_e=document,ot=()=>_e.createComment(""),at=e=>e===null||typeof e!="object"&&typeof e!="function",aa=Array.isArray,ia=e=>aa(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",hr=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,On=/-->/g,Vn=/>/g,ye=RegExp(`>|${hr}(?:([^\\s"'>=/]+)(${hr}*=${hr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hn=/'/g,Dn=/"/g,sa=/^(?:script|style|textarea|title)$/i,ms=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),gs=ms(1),te=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),jn=new WeakMap,Ce=_e.createTreeWalker(_e,129,null,!1);function la(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zn!==void 0?zn.createHTML(t):t}const ca=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",i=qe;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,h=0;for(;h<l.length&&(i.lastIndex=h,u=i.exec(l),u!==null);)h=i.lastIndex,i===qe?u[1]==="!--"?i=On:u[1]!==void 0?i=Vn:u[2]!==void 0?(sa.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=ye):u[3]!==void 0&&(i=ye):i===ye?u[0]===">"?(i=o??qe,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?ye:u[3]==='"'?Dn:Hn):i===Dn||i===Hn?i=ye:i===On||i===Vn?i=qe:(i=ye,o=void 0);const p=i===ye&&e[s+1].startsWith("/>")?" ":"";a+=i===qe?l+ps:d>=0?(n.push(c),l.slice(0,d)+zt+l.slice(d)+ue+p):l+ue+(d===-2?(n.push(void 0),s):p)}return[la(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class it{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,i=0;const s=t.length-1,l=this.parts,[c,u]=ca(t,r);if(this.el=it.createElement(c,n),Ce.currentNode=this.el.content,r===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(o=Ce.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const h of o.getAttributeNames())if(h.endsWith(zt)||h.startsWith(ue)){const p=u[i++];if(d.push(h),p!==void 0){const m=o.getAttribute(p.toLowerCase()+zt).split(ue),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:a,name:b[2],strings:m,ctor:b[1]==="."?da:b[1]==="?"?ha:b[1]==="@"?fa:pt})}else l.push({type:6,index:a})}for(const h of d)o.removeAttribute(h)}if(sa.test(o.tagName)){const d=o.textContent.split(ue),h=d.length-1;if(h>0){o.textContent=Ve?Ve.emptyScript:"";for(let p=0;p<h;p++)o.append(d[p],ot()),Ce.nextNode(),l.push({type:2,index:++a});o.append(d[h],ot())}}}else if(o.nodeType===8)if(o.data===an)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(ue,d+1))!==-1;)l.push({type:7,index:a}),d+=ue.length-1}a++}}static createElement(t,r){const n=_e.createElement("template");return n.innerHTML=t,n}}function Te(e,t,r=e,n){var o,a,i,s;if(t===te)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=at(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(s=r)._$Co)!==null&&i!==void 0?i:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Te(e,l._$AS(e,t.values),l,n)),t}class ua{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:_e).importNode(n,!0);Ce.currentNode=a;let i=Ce.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new je(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new pa(i,this,t)),this._$AV.push(u),c=o[++l]}s!==(c==null?void 0:c.index)&&(i=Ce.nextNode(),s++)}return Ce.currentNode=_e,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class je{constructor(t,r,n,o){var a;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Te(this,t,r),at(t)?t===B||t==null||t===""?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==te&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ia(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&at(this._$AH)?this._$AA.nextSibling.data=t:this.$(_e.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=it.createElement(la(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const i=new ua(a,this),s=i.u(this.options);i.v(n),this.$(s),this._$AH=i}}_$AC(t){let r=jn.get(t.strings);return r===void 0&&jn.set(t.strings,r=new it(t)),r}T(t){aa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new je(this.k(ot()),this.k(ot()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class pt{constructor(t,r,n,o,a){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let i=!1;if(a===void 0)t=Te(this,t,r,0),i=!at(t)||t!==this._$AH&&t!==te,i&&(this._$AH=t);else{const s=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Te(this,s[n+l],r,l),c===te&&(c=this._$AH[l]),i||(i=!at(c)||c!==this._$AH[l]),c===B?t=B:t!==B&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class da extends pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const bs=Ve?Ve.emptyScript:"";class ha extends pt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,bs):this.element.removeAttribute(this.name)}}class fa extends pt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Te(this,t,r,0))!==null&&n!==void 0?n:B)===te)return;const o=this._$AH,a=t===B&&o!==B||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==B&&(o===B||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class pa{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Te(this,t)}}const vs={O:zt,P:ue,A:an,C:1,M:ca,L:ua,R:ia,D:Te,I:je,V:pt,H:ha,N:fa,U:da,F:pa},Fn=It.litHtmlPolyfillSupport;Fn==null||Fn(it,je),((dr=It.litHtmlVersions)!==null&&dr!==void 0?dr:It.litHtmlVersions=[]).push("2.8.0");const $s=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let i=a._$litPart$;if(i===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=i=new je(t.insertBefore(ot(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ws}=vs,Un=()=>document.createComment(""),Ge=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=o.insertBefore(Un(),a),s=o.insertBefore(Un(),a);r=new ws(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(i!==a||l){let c=r._$AA;for(;c!==i;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},xe=(e,t,r=e)=>(e._$AI(t,r),e),ys={},xs=(e,t=ys)=>e._$AH=t,ks=e=>e._$AH,fr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ma=ft(class extends De{constructor(e){var t;if(super(e),e.type!==er.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const i=!!t[a];i===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(i?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return te}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Ss=ft(class extends De{constructor(e){if(super(e),e.type!==er.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let i=0;for(const s of e)o[i]=n?n(s,i):i,a[i]=r(s,i),i++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=ks(e),{values:i,keys:s}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=s,i;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,h=0,p=a.length-1,m=0,b=i.length-1;for(;h<=p&&m<=b;)if(a[h]===null)h++;else if(a[p]===null)p--;else if(l[h]===s[m])c[m]=xe(a[h],i[m]),h++,m++;else if(l[p]===s[b])c[b]=xe(a[p],i[b]),p--,b--;else if(l[h]===s[b])c[b]=xe(a[h],i[b]),Ge(e,c[b+1],a[h]),h++,b--;else if(l[p]===s[m])c[m]=xe(a[p],i[m]),Ge(e,a[h],a[p]),p--,m++;else if(u===void 0&&(u=Yn(s,m,b),d=Yn(l,h,p)),u.has(l[h]))if(u.has(l[p])){const v=d.get(s[m]),C=v!==void 0?a[v]:null;if(C===null){const M=Ge(e,a[h]);xe(M,i[m]),c[m]=M}else c[m]=xe(C,i[m]),Ge(e,a[h],C),a[v]=null;m++}else fr(a[p]),p--;else fr(a[h]),h++;for(;m<=b;){const v=Ge(e,c[b+1]);xe(v,i[m]),c[m++]=v}for(;h<=p;){const v=a[h++];v!==null&&fr(v)}return this.ut=s,xs(e,c),te}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pr=class extends De{constructor(t){if(super(t),this.et=B,t.type!==er.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===B||t==null)return this.ft=void 0,this.et=t;if(t===te)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Pr.directiveName="unsafeHTML",Pr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wn=class extends Pr{};Wn.directiveName="unsafeSVG",Wn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Cs(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=window,sn=Bt.ShadowRoot&&(Bt.ShadyCSS===void 0||Bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ln=Symbol(),Zn=new WeakMap;let ga=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ln)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(sn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Zn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Zn.set(r,t))}return t}toString(){return this.cssText}};const _=e=>new ga(typeof e=="string"?e:e+"",void 0,ln),Qe=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new ga(r,e,ln)},Es=(e,t)=>{sn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Bt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},qn=sn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return _(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pr;const Ot=window,Gn=Ot.trustedTypes,_s=Gn?Gn.emptyScript:"",Xn=Ot.reactiveElementPolyfillSupport,Rr={toAttribute(e,t){switch(t){case Boolean:e=e?_s:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ba=(e,t)=>t!==e&&(t==t||e==e),mr={attribute:!0,type:String,converter:Rr,reflect:!1,hasChanged:ba},Nr="finalized";class Ne extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=mr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||mr}static finalize(){if(this.hasOwnProperty(Nr))return!1;this[Nr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(qn(o))}else t!==void 0&&r.push(qn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Es(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=mr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Rr).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const i=o.getPropertyOptions(a),s=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:Rr;this._$El=a,this[a]=s.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ba)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Ne[Nr]=!0,Ne.elementProperties=new Map,Ne.elementStyles=[],Ne.shadowRootOptions={mode:"open"},Xn==null||Xn({ReactiveElement:Ne}),((pr=Ot.reactiveElementVersions)!==null&&pr!==void 0?pr:Ot.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr,br;class et extends Ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$s(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return te}}et.finalized=!0,et._$litElement$=!0,(gr=globalThis.litElementHydrateSupport)===null||gr===void 0||gr.call(globalThis,{LitElement:et});const Jn=globalThis.litElementPolyfillSupport;Jn==null||Jn({LitElement:et});((br=globalThis.litElementVersions)!==null&&br!==void 0?br:globalThis.litElementVersions=[]).push("3.3.3");var Ts=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function i(C){if(C!==void 0&&typeof C!="function")throw new TypeError("Function expected");return C}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,h=!1,p=r.length-1;p>=0;p--){var m={};for(var b in n)m[b]=b==="access"?{}:n[b];for(var b in n.access)m.access[b]=n.access[b];m.addInitializer=function(C){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i(C||null))};var v=(0,r[p])(s==="accessor"?{get:u.get,set:u.set}:u[l],m);if(s==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(d=i(v.get))&&(u.get=d),(d=i(v.set))&&(u.set=d),(d=i(v.init))&&o.unshift(d)}else(d=i(v))&&(s==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),h=!0},Ms=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},As=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Bs(){function e(t,r){return t}return e}let va=(()=>{let e=[Bs()],t,r=[],n;return n=class extends et{},As(n,"DeclarativeElement"),Ts(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Ms(n,r),n})();function F(e){if(fe(e))return me(e,(r,n)=>{if(!K(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(qi(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,i=r.startsWith("--")?_(r):r.startsWith("-")?Qe`-${_(r)}`:Qe`--${_(r)}`;return{name:i,value:Qe`var(${i}, ${_(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${F.name}' function.`)}function Ps({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rs=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Ns=(e,t,r)=>{t.constructor.createProperty(r,e)};function $a(e){return(t,r)=>r!==void 0?Ns(e,t,r):Rs(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vr;((vr=window.HTMLSlotElement)===null||vr===void 0?void 0:vr.prototype.assignedElements)!=null;const cn=Symbol("key for ignoring inputs not having been set yet"),Ls={[cn]:!0,allowPolymorphicState:!1};function wa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof va?!0:wa(r)}function ya(e,t){const r=e.instanceState;ee(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ee(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Is(e)}function Is(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Kn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class zs extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function un(){return e=>{var t;return t=class extends zs{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function oe(){return un()}function Os(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=un()(r);return t[r]=n,t},{}):{}}const Vs="_elementVirStateSetup";function Hs(e){return fe(e)?Vs in e:!1}function Ds(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Ar(e)===Ar(t)&&r}const xa=Symbol("and"),ka=Symbol("or"),Sa=Symbol("exact"),Ca=Symbol("enum"),dn=Symbol("unknown"),Ea="__vir__shape__definition__key__do__not__use__in__actual__objects";function _a(e){return ne(e,Ea)}const Ta="__vir__shape__specifier__key__do__not__use__in__actual__objects",js=[xa,ka,Sa,Ca,dn];function Fs(){return Us([],dn)}function tr(e){return mt(e,ka)}function hn(e){return mt(e,xa)}function fn(e){return mt(e,Sa)}function pn(e){return mt(e,Ca)}function mn(e){return mt(e,dn)}function mt(e,t){const r=rr(e);return!!r&&r.specifierType===t}function Us(e,t){return{[Ta]:!0,specifierType:t,parts:e}}function Pt(e,t){const r=rr(t);if(r){if(hn(r))return r.parts.every(n=>Pt(e,n));if(tr(r))return r.parts.some(n=>Pt(e,n));if(fn(r))return fe(e)?Pt(e,r.parts[0]):e===r.parts[0];if(pn(r))return Object.values(r.parts[0]).some(n=>n===e);if(mn(r))return!0}return Ds(e,t)}function rr(e){if(fe(e)&&ne(e,Ta)){if(!ne(e,"parts")||!K(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!ne(e,"specifierType")||!ji(js,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Lr(e){return Ir(e)}function Ir(e){const t=rr(e);if(t){if(tr(t)||fn(t))return Ir(t.parts[0]);if(hn(t))return t.parts.reduce((r,n)=>Object.assign(r,Ir(n)),{});if(pn(t))return Object.values(t.parts[0])[0];if(mn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return _a(e)?Lr(e.shape):e instanceof RegExp||K(e,"array")?e:fe(e)?me(e,(r,n)=>Lr(n)):e}function Ys(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Lr(e),[Ea]:!0}}class J extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ws(e,t,r={}){try{return Zs(e,t,r),!0}catch{return!1}}function Zs(e,t,r={}){Se(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Ma(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Se(e,t,r,n){if(mn(t))return!0;if(_a(t))return Se(e,t.shape,r,n);const o=Ma(r);if(rr(e))throw new J(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Pt(e,t))throw new J(`Subject does not match shape definition at key ${o}`);if(K(t,"function"))return K(e,"function");if(fe(e)){const i=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(i).map(c=>[c,!1]));let l=!1;if(tr(t))l=t.parts.some(c=>{try{const u=Se(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof J)return!1;throw u}});else if(hn(t))l=t.parts.every(c=>{try{const u=Se(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof J)return!1;throw u}});else if(fn(t)){const c=Se(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(pn(t))throw new J(`Cannot compare an enum specifier to an object at ${o}`);if(K(t,"array")&&K(i,"array"))l=i.every((c,u)=>{const d=t.some(h=>{try{return Se(c,h,[...r,u],n),!0}catch(p){if(p instanceof J)return!1;throw p}});return s[u]=d,d});else{const c=qs({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new J(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new J(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function qs({keys:e,options:t,shape:r,subject:n}){const o=Ma(e),a={};if(fe(r)){const i=new Set(ee(n)),s=new Set(ee(r));t.ignoreExtraKeys||i.forEach(l=>{if(!s.has(l))throw new J(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var h;const c=r[l],u=tr(c)?c.parts.includes(void 0):!1,d=((h=c==null?void 0:c.includes)==null?void 0:h.call(c,void 0))||c===void 0;if(!i.has(l)&&!u&&!d)throw new J(`Subject missing key '${String(l)}' in ${o}`)}),i.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];Se(c,u,[...e,l],t),a[l]=!0})}else throw new J(`shape definition at ${o} was not an object.`);return a}const Gs=Ys({addListener(){return!1},removeListener(){return!1},value:Fs()});function $r(e){return Ws(e,Gs,{allowExtraKeys:!0})}function Xs(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Qn(e,t){const r=e;function n(i){t?Xs(i,e,e.tagName):$a()(e,i)}function o(i,s){return n(s),r[s]}return new Proxy({},{get:o,set:(i,s,l)=>{const c=Hs(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(m){i[s]=m,r[s]=m}const h=e.observablePropertyListenerMap[s];if(u!==c&&$r(u)&&(h!=null&&h.length)&&u.removeListener(h),$r(c))if(h)c.addListener(h);else{let m=function(){e.requestUpdate()};var p=m;e.observablePropertyListenerMap[s]=m,c.addListener(m)}else $r(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,s){if(s in i)return{get value(){return o(i,s)},configurable:!0,enumerable:!0}},has:(i,s)=>Reflect.has(i,s)})}function Js(e){return e?me(e,t=>t):{}}function Ks({hostClassNames:e,cssVars:t}){return{hostClasses:me(e,(r,n)=>({name:_(n),selector:_(`:host(.${n})`)})),cssVars:t}}function Qs({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ee(t).forEach(a=>{const i=t[a],s=r[a];typeof i=="function"&&(i({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function el(e,t){function r(o){ee(o).forEach(a=>{const i=o[a];e.instanceState[a]=i})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var tl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function nr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Ls,...e.options},n=Os(e.events),o=Js(e.hostClasses);e.hostClasses&&Kn(e.tagName,e.hostClasses),e.cssVars&&Kn(e.tagName,e.cssVars);const a=e.cssVars?F(e.cssVars):{},i=typeof e.styles=="function"?e.styles(Ks({hostClassNames:o,cssVars:a})):e.styles||Qe``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends va{createRenderParams(){return el(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{wa(this)&&!this.haveInputsBeenSet&&!r[cn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${nr.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Qs({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=ea(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){ya(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Qn(this,!1),this.instanceState=Qn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};ee(u).forEach(h=>{$a()(this,h),this.instanceState[h]=u[h]}),this.definition=c}},tl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=i,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Zi(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Aa(){return e=>nr({...e,options:{[cn]:!1,...e.options}})}function Ba(e,t){return zr(e,t),e.element}function rl(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function zr(e,t){const r=rl(e),n=r?`: in ${r}`:"";if(e.type!==er.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Pa(e,t){return t?eo(e,t):eo(void 0,e)}const eo=ft(class extends De{constructor(e){super(e),this.element=Ba(e,"assign")}render(e,t){return ya(this.element,t),te}});function A(e,t){return nl(e,t)}const nl=ft(class extends De{constructor(e){super(e),this.element=Ba(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),te}}),wr="onResize",or=ft(class extends De{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),zr(e,wr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${wr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){zr(e,wr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function ae(e,t,r){return Cs(e,()=>t,()=>r)}function gn(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Aa()(r(n))),defineElementNoInputs:n=>(t(n),nr(r(n)))}}function ol(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const a=e.map(s=>[s]);return a.length||(a[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(a[s]=[])}),t.forEach(s=>{const l=a[s.index];l&&l.splice(0,0,...s.values)}),a.flat()}function Or(e){return ne(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function bn(e){return ne(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ra(e){return e.map(t=>Or(t)?t.definition:t).filter(t=>bn(t))}const Na=new WeakMap;function al(e,t){var o;const r=Ra(t);return(o=La(Na,[e,...r]).value)==null?void 0:o.template}function il(e,t,r){const n=Ra(t);return za(Na,[e,...n],r)}function La(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Ia(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?La(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Ia(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function za(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:i}=Ia(e,t,n);if(!a)return{result:!1,reason:i};const s=o??{nested:void 0,template:void 0};if(o||e.set(a,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),za(l,t,r,n+1)}const sl=new WeakMap;function Oa(e,t,r){const n=al(e,t),o=n??r();if(!n){const s=il(e,t,o);if(s.result)sl.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=o.valuesTransform(t),i=ol(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:i}}function Va(e,t,r,n){const o=[],a=[],i=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,h=o[d],p=u-1,m=t[p];n&&n(c);let b,v=[];if(typeof h=="string"&&(b=r(h,c,m),b)){o[d]=h+b.replacement,i.push(p);const M=b.getExtraValues;v=M?M(m):[],v.length&&M?(o[d]+=" ",v.forEach((R,T)=>{T&&o.push(" ")}),s.push(R=>{const T=R[p],E=M(T);return{index:p,values:E}}),o.push(c)):o[d]+=c}b||o.push(c);const C=e.raw[u];b?(a[d]=a[d]+b.replacement+C,v.length&&v.forEach(()=>{a.push("")})):a.push(C)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:i,valueInsertions:u}}}}function ll(...[e,t,r]){if(bn(r))return{replacement:r.tagName,getExtraValues:void 0}}function cl(e,t){return Va(e,t,ll)}function g(e,...t){const r=Oa(e,t,()=>cl(e,t));return Qe(r.strings,...r.values)}function ul(...[e,t,r]){const n=Or(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=o||a,s=bn(n);if(i&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=Or(c)?c.inputs:void 0;return[o&&u?Pa(u):void 0].filter(Kt)}}}function dl(e){}function hl(e){return Va(e.strings,e.values,ul,dl)}function f(e,...t){const r=gs(e,...t),n=Oa(e,t,()=>hl(r));return{...r,strings:n.strings,values:n.values}}const fl={[N.ElementExample]:()=>[],[N.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...ls(e.controls,e.title)].filter(Kt),[N.Root]:()=>[]},Vt="_isBookTreeNode",Ha=new Map;function pl(e){return Ha.get(e)}function ml(e,t){Ji(Ha,e,()=>t)}function ze(e,t){return!!(Da(e)&&e.entry.entryType===t)}function Da(e){return!!(ta(e,[Vt,"entry"])&&e[Vt])}function gl(){return{[Vt]:!0,entry:{entryType:N.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function bl({entries:e,debug:t}){const r=pl(e);if(r)return r;const n=gl();e.forEach(i=>vn({tree:n,newEntry:i,debug:t,manuallyAdded:!0}));const o=ja(n),a={tree:n,flattenedNodes:o};return ml(e,a),t&&console.info("element-book tree:",n),a}function vl(e,t,r){if(!t.parent)return e;const n=Vr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),vn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Vr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${on(t,!1)}`);return o}function vn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=fl[t.entryType](t);t.errors.push(...o);const a=vl(e,t,r),i=Lt(t.title),s=a.children[i];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${i}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Vt]:!0,children:{},urlBreadcrumb:i,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,i],entry:t,manuallyAdded:n};a.children[i]=l,is(t,N.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>vn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Vr(e,t){const r=Da(e)?e.fullUrlBreadcrumbs.slice(0,-1):on(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function ja(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>ja(o));return[e,...r].flat()}function $n(e,t){return wn(e,["",...t],void 0)}function wn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],i=a&&wn(a,n,r);return{...e.controls,...i}}function $l(e,t,r){const n=Gi(e);return wn(n,["",...t],r),n}function Fa(e,t){const r=(t==null?void 0:t.controls)||(ze(e,N.Page)?me(e.entry.controls,(o,a)=>a.initValue):{});return{children:me(e.children,(o,a)=>{var i;return Fa(a,(i=t==null?void 0:t.children)==null?void 0:i[a.urlBreadcrumb])}),controls:r}}function wl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let i=0,s=0;i<n;i++){const l=a.charCodeAt(i);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const yl=ds(32);function Rt(e){return e.join(yl)}function Ua(e){if(!e.length)return[];const t=Rt(e),r=Ua(e.slice(0,-1));return[t,...r]}const xl=["error","errors"];function kl(e){return xl.includes(e)}function Sl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(i=>(n(i),Rt(i.fullUrlBreadcrumbs))).forEach(i=>r[i]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&kl(t),i=Rt(o.fullUrlBreadcrumbs);if(wl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[i]){const l=Ua(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[i]=!1}),e.filter(o=>{const a=Rt(o.fullUrlBreadcrumbs),i=r[a];if(!K(i,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return i})}var z;(function(e){e.Search="search",e.Book="book"})(z||(z={}));function Hr(e){return e[0]===z.Book?"":e[1]?decodeURIComponent(e[1]):""}const He={hash:void 0,paths:[z.Book],search:void 0},Cl=0;function yn(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Cl)}class ar extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class to extends ar{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const st="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const El=globalThis.history.pushState;function ro(...e){const t=El.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(st)),t}const _l=globalThis.history.replaceState;function no(...e){const t=_l.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(st)),t}function Tl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ro)throw new to("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===no)throw new to("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ro,globalThis.history.replaceState=no,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(st))})}}function Ml(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Al(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Bl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),a=globalThis.location.search?Ml(new URLSearchParams(globalThis.location.search)):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:a,hash:i}}function Ya(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Wa({routeBase:e,windowPath:t}){if(!e)return"";const r=Ya(e);if(Za({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Wa({routeBase:n,windowPath:t}):""}function Za({routeBase:e,windowPath:t}){const r=Ya(e);return r?t.startsWith(`/${r}`):!1}class Pl extends ar{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function qa(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const oo=6;function ao(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>oo)throw new Pl(`Route sanitization depth has exceed the max of ${oo} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(qa(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class yr extends ar{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Rl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new yr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new yr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new yr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Nl(e,t,r=!1){const n=Ga(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ga(e,t){var l;const r=Za({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Al(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",i=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(Kt).join("/")}${o}${i}`}function Ll(e={}){Rl(e),Tl();const t=e.routeBase?Wa({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>ao(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const i={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(i):i},setRoutes(a,i=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!s&&qa(l,u)))return Nl(u,t,i)},createRoutesUrl(a){return Ga(a,t)},getCurrentRawRoutes(){return Bl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,i){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new ar(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(i),r||(globalThis.addEventListener(st,n),r=!0),a&&ao(o,i),i},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const i=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(st,n),r=!1),i},sanitizationDepth:0};return o}function Il(e){return Ll({routeBase:e,routeSanitizer(t){return{paths:zl(t.paths),hash:void 0,search:void 0}}})}function zl(e){const t=e[0];if(es(t,z)){if(t===z.Book)return[z.Book,...e.slice(1)];if(t===z.Search)return e[1]?[t,e[1]]:[z.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return He.paths}const x=F({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Ol={nav:{hover:{background:x["element-book-nav-hover-background-color"],foreground:x["element-book-nav-hover-foreground-color"]},active:{background:x["element-book-nav-active-background-color"],foreground:x["element-book-nav-active-foreground-color"]},selected:{background:x["element-book-nav-selected-background-color"],foreground:x["element-book-nav-selected-foreground-color"]}},accent:{icon:x["element-book-accent-icon-color"]},page:{background:x["element-book-page-background-color"],backgroundFaint1:x["element-book-page-background-faint-level-1-color"],backgroundFaint2:x["element-book-page-background-faint-level-2-color"],foreground:x["element-book-page-foreground-color"],foregroundFaint1:x["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:x["element-book-page-foreground-faint-level-2-color"]}};function Vl(e,t){Xa(e,t,Ol)}function Dr(e){return ne(e,"_$cssResult$")}function io(e){return ta(e,["name","value","default"])&&K(e.default,"string")&&Dr(e.name)&&Dr(e.value)}function Xa(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Dr(o)){if(!io(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ps({forCssVar:a,onElement:e,toValue:String(o)})}else{if(io(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Xa(e,o,a)}})}function P(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let n=t[0].length,o=t[0].map((i,s)=>t.map(l=>l[s])),a=e.map(i=>o.map(s=>{let l=0;if(!Array.isArray(i)){for(let c of s)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(s[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(i=>i[0]):a}function gt(e){return pe(e)==="string"}function pe(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ht(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ja(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),a.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Ka(e){return e[e.length-1]}function Dt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Qa(e,t,r){return(r-e)/(t-e)}function xn(e,t,r){return Dt(t[0],t[1],Qa(e[0],e[1],r))}function ei(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Hl=Object.freeze({__proto__:null,interpolate:Dt,interpolateInv:Qa,isString:gt,last:Ka,mapRange:xn,multiplyMatrices:P,parseCoordGrammar:ei,parseFunction:Ja,toPrecision:Ht,type:pe});class Dl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ge=new Dl;var ie={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Q={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function jr(e){return Array.isArray(e)?e:Q[e]}function jt(e,t,r,n={}){if(e=jr(e),t=jr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ge.run("chromatic-adaptation-start",o),o.M||(o.W1===Q.D65&&o.W2===Q.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Q.D50&&o.W2===Q.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ge.run("chromatic-adaptation-end",o),o.M)return P(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const jl=75e-6,H=class H{constructor(t){var o,a,i;this.id=t.id,this.name=t.name,this.base=t.base?H.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=jr(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Fl(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ge.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=jl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let i=n[a];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[s,l]=i.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=so(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=so(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=H.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,a,i;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)a=n[s],i=s;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>i;s--)r=n[s].toBase(r);for(let s=i+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=H.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(H.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof H)return t;if(pe(t)==="string"){let o=H.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return H.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=pe(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=H.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=pe(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=H.get(o);let i=a.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===i||((l=u.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};ur(H,"registry",{}),ur(H,"DEFAULT_FORMAT",{type:"functions",name:"color"});let $=H;function Fl(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function so(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=ei(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let i=e.coordGrammar[a][0],s=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,i)=>{let{fromRange:s,toRange:l,suffix:c}=r[i];return s&&l&&(a=xn(s,l,a)),a=Ht(a,o),c&&(a+=c),a})}return e}var Z=new $({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class O extends ${constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Z),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=P(t.toXYZ_M,r);return this.white!==this.base.white&&(n=jt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=jt(this.base.white,this.white,r),P(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function ti(e,{meta:t}={}){var n,o,a,i,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(ge.run("parse-start",r),r.color)return r.color;if(r.parsed=Ja(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let h of $.all){let p=h.getFormat("color");if(p&&(c===p.id||(o=p.ids)!=null&&o.includes(c))){const m=Object.keys(h.coords).map((b,v)=>r.parsed.args[v]||0);return t&&(t.formatId="color"),{spaceId:h.id,coords:m,alpha:u}}}let d="";if(c in $.registry){let h=(s=(i=(a=$.registry[c].formats)==null?void 0:a.functions)==null?void 0:i.color)==null?void 0:s.id;h&&(d=`Did you mean color(${h})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of $.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Ka(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let h=r.parsed.args,p;return u.coordGrammar&&(p=Object.entries(c.coords).map(([m,b],v)=>{var I;let C=u.coordGrammar[v],M=(I=h[v])==null?void 0:I.type,R=C.find(se=>se==M);if(!R){let se=b.name||m;throw new TypeError(`${M} not allowed for ${se} in ${l}()`)}let T=R.range;M==="<percentage>"&&(T||(T=[0,1]));let E=b.range||b.refRange;return T&&E&&(h[v]=xn(T,E,h[v])),R})),t&&Object.assign(t,{formatId:u.name,types:p}),{spaceId:c.id,coords:h,alpha:d}}}}else for(let l of $.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function S(e){if(!e)throw new TypeError("Empty color reference");gt(e)&&(e=ti(e));let t=e.space||e.spaceId;return t instanceof $||(e.space=$.get(t)),e.alpha===void 0&&(e.alpha=1),e}function bt(e,t){return t=$.get(t),t.from(e)}function q(e,t){let{space:r,index:n}=$.resolveCoord(t,e.space);return bt(e,r)[n]}function ri(e,t,r){return t=$.get(t),e.coords=t.to(e.space,r),e}function be(e,t,r){if(e=S(e),arguments.length===2&&pe(arguments[1])==="object"){let n=arguments[1];for(let o in n)be(e,o,n[o])}else{typeof r=="function"&&(r=r(q(e,t)));let{space:n,index:o}=$.resolveCoord(t,e.space),a=bt(e,n);a[o]=r,ri(e,n,a)}return e}var kn=new $({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Z,fromBase:e=>jt(Z.white,"D50",e),toBase:e=>jt("D50",Z.white,e),formats:{color:{}}});const Ul=216/24389,lo=24/116,xt=24389/27;let xr=Q.D50;var D=new $({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xr,base:kn,fromBase(e){let r=e.map((n,o)=>n/xr[o]).map(n=>n>Ul?Math.cbrt(n):(xt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>lo?Math.pow(t[0],3):(116*t[0]-16)/xt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/xt,t[2]>lo?Math.pow(t[2],3):(116*t[2]-16)/xt].map((n,o)=>n*xr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ir(e){return(e%360+360)%360}function Yl(e,t){if(e==="raw")return t;let[r,n]=t.map(ir),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var lt=new $({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:D,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ir(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const co=25**7,Ft=Math.PI,uo=180/Ft,Be=Ft/180;function Fr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,i,s]=D.from(e),l=lt.from(D,[a,i,s])[1],[c,u,d]=D.from(t),h=lt.from(D,[c,u,d])[1];l<0&&(l=0),h<0&&(h=0);let m=((l+h)/2)**7,b=.5*(1-Math.sqrt(m/(m+co))),v=(1+b)*i,C=(1+b)*u,M=Math.sqrt(v**2+s**2),R=Math.sqrt(C**2+d**2),T=v===0&&s===0?0:Math.atan2(s,v),E=C===0&&d===0?0:Math.atan2(d,C);T<0&&(T+=2*Ft),E<0&&(E+=2*Ft),T*=uo,E*=uo;let I=c-a,se=R-M,re=E-T,Ye=T+E,En=Math.abs(re),We;M*R===0?We=0:En<=180?We=re:re>180?We=re-360:re<-180?We=re+360:console.log("the unthinkable has happened");let _n=2*Math.sqrt(R*M)*Math.sin(We*Be/2),Li=(a+c)/2,cr=(M+R)/2,Tn=Math.pow(cr,7),le;M*R===0?le=Ye:En<=180?le=Ye/2:Ye<360?le=(Ye+360)/2:le=(Ye-360)/2;let Mn=(Li-50)**2,Ii=1+.015*Mn/Math.sqrt(20+Mn),An=1+.045*cr,Ze=1;Ze-=.17*Math.cos((le-30)*Be),Ze+=.24*Math.cos(2*le*Be),Ze+=.32*Math.cos((3*le+6)*Be),Ze-=.2*Math.cos((4*le-63)*Be);let Bn=1+.015*cr*Ze,zi=30*Math.exp(-1*((le-275)/25)**2),Oi=2*Math.sqrt(Tn/(Tn+co)),Vi=-1*Math.sin(2*zi*Be)*Oi,yt=(I/(r*Ii))**2;return yt+=(se/(n*An))**2,yt+=(_n/(o*Bn))**2,yt+=Vi*(se/(n*An))*(_n/(o*Bn)),Math.sqrt(yt)}const Wl=75e-6;function tt(e,t=e.space,{epsilon:r=Wl}={}){e=S(e),t=$.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ct(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ve(e,{method:t=ie.gamut_mapping,space:r=e.space}={}){if(gt(arguments[1])&&(r=arguments[1]),r=$.get(r),tt(e,r,{epsilon:0}))return S(e);let n=Y(e,r);if(t!=="clip"&&!tt(e,r)){let o=ve(ct(n),{method:"clip",space:r});if(Fr(e,o)>2){let a=$.resolveCoord(t),i=a.space,s=a.id,l=Y(n,i),u=(a.range||a.refRange)[0],d=.01,h=u,p=q(l,s);for(;p-h>d;){let m=ct(l);m=ve(m,{space:r,method:"clip"}),Fr(l,m)-2<d?h=q(l,s):p=q(l,s),be(l,s,(h+p)/2)}n=Y(l,r)}else n=o}if(t==="clip"||!tt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,i)=>{let[s,l]=o[i];return s!==void 0&&(a=Math.max(s,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=Y(n,e.space)),e.coords=n.coords,e}ve.returns="color";function Y(e,t,{inGamut:r}={}){e=S(e),t=$.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ve(o)),o}Y.returns="color";function Ut(e,{precision:t=ie.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=S(e);let i=r;r=e.space.getFormat(r)??e.space.getFormat("default")??$.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!tt(e)&&(s=ve(ct(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(p=>Ht(p,t)));let u=[...s];if(c==="color"){let p=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(p)}let d=e.alpha;t!==null&&(d=Ht(d,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${h})`}return a}const Zl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],ql=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var sr=new O({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Zl,fromXYZ_M:ql,formats:{color:{}}});const kt=1.09929682680944,ho=.018053968510807;var ni=new O({id:"rec2020",name:"REC.2020",base:sr,toBase(e){return e.map(function(t){return t<ho*4.5?t/4.5:Math.pow((t+kt-1)/kt,1/.45)})},fromBase(e){return e.map(function(t){return t>=ho?kt*Math.pow(t,.45)-(kt-1):4.5*t})},formats:{color:{}}});const Gl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Xl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var oi=new O({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Gl,fromXYZ_M:Xl});const Jl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Kl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ai=new O({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Jl,fromXYZ_M:Kl,formats:{color:{}}}),fo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let po=Array(3).fill("<percentage> | <number>[0, 255]"),mo=Array(3).fill("<number>[0, 255]");var ut=new O({id:"srgb",name:"sRGB",base:ai,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:po},rgb_number:{name:"rgb",commas:!0,coords:mo,noAlpha:!0},color:{},rgba:{coords:po,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:mo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=fo.black,t.alpha=0):t.coords=fo[e],t.coords)return t}}}}),ii=new O({id:"p3",name:"P3",base:oi,fromBase:ut.fromBase,toBase:ut.toBase,formats:{color:{id:"display-p3"}}});ie.display_space=ut;if(typeof CSS<"u"&&CSS.supports)for(let e of[D,ni,ii]){let t=e.getMinCoords(),n=Ut({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ie.display_space=e;break}}function Ql(e,{space:t=ie.display_space,...r}={}){let n=Ut(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ie.display_space)n=new String(n),n.color=e;else{let o=Y(e,t);n=new String(Ut(o,r)),n.color=o}return n}function si(e,t,r="lab"){r=$.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,i,s)=>{let l=o[s];return isNaN(i)||isNaN(l)?a:a+(l-i)**2},0))}function ec(e,t){return e=S(e),t=S(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function $e(e){return q(e,[Z,"y"])}function li(e,t){be(e,[Z,"y"],t)}function tc(e){Object.defineProperty(e.prototype,"luminance",{get(){return $e(this)},set(t){li(this,t)}})}var rc=Object.freeze({__proto__:null,getLuminance:$e,register:tc,setLuminance:li});function nc(e,t){e=S(e),t=S(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const oc=.56,ac=.57,ic=.62,sc=.65,go=.022,lc=1.414,cc=.1,uc=5e-4,dc=1.14,bo=.027,hc=1.14;function vo(e){return e>=go?e:e+(go-e)**lc}function Pe(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function fc(e,t){t=S(t),e=S(e);let r,n,o,a,i,s;t=Y(t,"srgb"),[a,i,s]=t.coords;let l=Pe(a)*.2126729+Pe(i)*.7151522+Pe(s)*.072175;e=Y(e,"srgb"),[a,i,s]=e.coords;let c=Pe(a)*.2126729+Pe(i)*.7151522+Pe(s)*.072175,u=vo(l),d=vo(c),h=d>u;return Math.abs(d-u)<uc?n=0:h?(r=d**oc-u**ac,n=r*dc):(r=d**sc-u**ic,n=r*hc),Math.abs(n)<cc?o=0:n>0?o=n-bo:o=n+bo,o*100}function pc(e,t){e=S(e),t=S(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const mc=5e4;function gc(e,t){e=S(e),t=S(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);return n>r&&([r,n]=[n,r]),n===0?mc:(r-n)/n}function bc(e,t){e=S(e),t=S(t);let r=q(e,[D,"l"]),n=q(t,[D,"l"]);return Math.abs(r-n)}const vc=216/24389,$o=24/116,St=24389/27;let kr=Q.D65;var Ur=new $({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:kr,base:Z,fromBase(e){let r=e.map((n,o)=>n/kr[o]).map(n=>n>vc?Math.cbrt(n):(St*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>$o?Math.pow(t[0],3):(116*t[0]-16)/St,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/St,t[2]>$o?Math.pow(t[2],3):(116*t[2]-16)/St].map((n,o)=>n*kr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Sr=Math.pow(5,.5)*.5+.5;function $c(e,t){e=S(e),t=S(t);let r=q(e,[Ur,"l"]),n=q(t,[Ur,"l"]),o=Math.abs(Math.pow(r,Sr)-Math.pow(n,Sr)),a=Math.pow(o,1/Sr)*Math.SQRT2-40;return a<7.5?0:a}var Nt=Object.freeze({__proto__:null,contrastAPCA:fc,contrastDeltaPhi:$c,contrastLstar:bc,contrastMichelson:pc,contrastWCAG21:nc,contrastWeber:gc});function wc(e,t,r={}){gt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Nt).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=S(e),t=S(t);for(let a in Nt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Nt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function ci(e){let[t,r,n]=bt(e,Z),o=t+15*r+3*n;return[4*t/o,9*r/o]}function ui(e){let[t,r,n]=bt(e,Z),o=t+r+n;return[t/o,r/o]}function yc(e){Object.defineProperty(e.prototype,"uv",{get(){return ci(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ui(this)}})}var xc=Object.freeze({__proto__:null,register:yc,uv:ci,xy:ui});function kc(e,t){return si(e,t,"lab")}const Sc=Math.PI,wo=Sc/180;function Cc(e,t,{l:r=2,c:n=1}={}){let[o,a,i]=D.from(e),[,s,l]=lt.from(D,[o,a,i]),[c,u,d]=D.from(t),h=lt.from(D,[c,u,d])[1];s<0&&(s=0),h<0&&(h=0);let p=o-c,m=s-h,b=a-u,v=i-d,C=b**2+v**2-m**2,M=.511;o>=16&&(M=.040975*o/(1+.01765*o));let R=.0638*s/(1+.0131*s)+.638,T;Number.isNaN(l)&&(l=0),l>=164&&l<=345?T=.56+Math.abs(.2*Math.cos((l+168)*wo)):T=.36+Math.abs(.4*Math.cos((l+35)*wo));let E=Math.pow(s,4),I=Math.sqrt(E/(E+1900)),se=R*(I*T+1-I),re=(p/(r*M))**2;return re+=(m/(n*R))**2,re+=C/se**2,Math.sqrt(re)}const yo=203;var Sn=new $({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Z,fromBase(e){return e.map(t=>Math.max(t*yo,0))},toBase(e){return e.map(t=>Math.max(t/yo,0))}});const Ct=1.15,Et=.66,xo=2610/2**14,Ec=2**14/2610,ko=3424/2**12,So=2413/2**7,Co=2392/2**7,_c=1.7*2523/2**5,Eo=2**5/(1.7*2523),_t=-.56,Cr=16295499532821565e-27,Tc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Mc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Ac=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Bc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var di=new $({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Sn,fromBase(e){let[t,r,n]=e,o=Ct*t-(Ct-1)*n,a=Et*r-(Et-1)*t,s=P(Tc,[o,a,n]).map(function(h){let p=ko+So*(h/1e4)**xo,m=1+Co*(h/1e4)**xo;return(p/m)**_c}),[l,c,u]=P(Ac,s);return[(1+_t)*l/(1+_t*l)-Cr,c,u]},toBase(e){let[t,r,n]=e,o=(t+Cr)/(1+_t-_t*(t+Cr)),i=P(Bc,[o,r,n]).map(function(h){let p=ko-h**Eo,m=Co*h**Eo-So;return 1e4*(p/m)**Ec}),[s,l,c]=P(Mc,i),u=(s+(Ct-1)*c)/Ct,d=(l+(Et-1)*u)/Et;return[u,d,c]},formats:{color:{}}}),Yr=new $({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:di,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ir(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Pc(e,t){let[r,n,o]=Yr.from(e),[a,i,s]=Yr.from(t),l=r-a,c=n-i;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*i)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const hi=3424/4096,fi=2413/128,pi=2392/128,_o=2610/16384,Rc=2523/32,Nc=16384/2610,To=32/2523,Lc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Ic=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],zc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Oc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Wr=new $({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Sn,fromBase(e){let t=P(Lc,e);return Vc(t)},toBase(e){let t=Hc(e);return P(Oc,t)},formats:{color:{}}});function Vc(e){let t=e.map(function(r){let n=hi+fi*(r/1e4)**_o,o=1+pi*(r/1e4)**_o;return(n/o)**Rc});return P(Ic,t)}function Hc(e){return P(zc,e).map(function(n){let o=Math.max(n**To-hi,0),a=fi-pi*n**To;return 1e4*(o/a)**Nc})}function Dc(e,t){let[r,n,o]=Wr.from(e),[a,i,s]=Wr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-i)**2+(o-s)**2)}const jc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Fc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Uc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Yc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Yt=new $({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Z,fromBase(e){let r=P(jc,e).map(n=>Math.cbrt(n));return P(Uc,r)},toBase(e){let r=P(Yc,e).map(n=>n**3);return P(Fc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Wc(e,t){let[r,n,o]=Yt.from(e),[a,i,s]=Yt.from(t),l=r-a,c=n-i,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var Wt={deltaE76:kc,deltaECMC:Cc,deltaE2000:Fr,deltaEJz:Pc,deltaEITP:Dc,deltaEOK:Wc};function Ke(e,t,r={}){gt(r)&&(r={method:r});let{method:n=ie.deltaE,...o}=r;e=S(e),t=S(t);for(let a in Wt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Wt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Zc(e,t=.25){let n=[$.get("oklch","lch"),"l"];return be(e,n,o=>o*(1+t))}function qc(e,t=.25){let n=[$.get("oklch","lch"),"l"];return be(e,n,o=>o*(1-t))}var Gc=Object.freeze({__proto__:null,darken:qc,lighten:Zc});function mi(e,t,r=.5,n={}){[e,t]=[S(e),S(t)],pe(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:i}=n;return vt(e,t,{space:o,outputSpace:a,premultiplied:i})(r)}function gi(e,t,r={}){let n;Cn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:i=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[S(e),S(t)],n=vt(e,t,l));let c=Ke(e,t),u=o>0?Math.max(i,Math.ceil(c/o)+1):i,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let h=1/(u-1);d=Array.from({length:u},(p,m)=>{let b=m*h;return{p:b,color:n(b)}})}if(o>0){let h=d.reduce((p,m,b)=>{if(b===0)return 0;let v=Ke(m.color,d[b-1].color,a);return Math.max(p,v)},0);for(;h>o;){h=0;for(let p=1;p<d.length&&d.length<s;p++){let m=d[p-1],b=d[p],v=(b.p+m.p)/2,C=n(v);h=Math.max(h,Ke(C,m.color),Ke(C,b.color)),d.splice(p,0,{p:v,color:n(v)}),p++}}}return d=d.map(h=>h.color),d}function vt(e,t,r={}){if(Cn(e)){let[l,c]=[e,t];return vt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:i}=r;e=S(e),t=S(t),e=ct(e),t=ct(t);let s={colors:[e,t],options:r};if(n?n=$.get(n):n=$.registry[ie.interpolationSpace]||e.space,o=o?$.get(o):n,e=Y(e,n),t=Y(t,n),e=ve(e),t=ve(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[q(e,c),q(t,c)];[u,d]=Yl(l,[u,d]),be(e,c,u),be(t,c,d)}return i&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((h,p)=>{let m=t.coords[p];return Dt(h,m,l)}),u=Dt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return i&&(d.coords=d.coords.map(h=>h/u)),o!==n&&(d=Y(d,o)),d},{rangeArgs:s})}function Cn(e){return pe(e)==="function"&&!!e.rangeArgs}ie.interpolationSpace="lab";function Xc(e){e.defineFunction("mix",mi,{returns:"color"}),e.defineFunction("range",vt,{returns:"function<color>"}),e.defineFunction("steps",gi,{returns:"array<color>"})}var Jc=Object.freeze({__proto__:null,isRange:Cn,mix:mi,range:vt,register:Xc,steps:gi}),bi=new $({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ut,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[i,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:i=(o-a)/c+(o<a?6:0);break;case o:i=(a-n)/c+2;break;case a:i=(n-o)/c+4}i=i*60}return[i,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let i=(a+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),vi=new $({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:bi,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Kc=new $({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:vi,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let a=1-n,i=a===0?0:1-r/a;return[t,i*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Qc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],eu=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var $i=new O({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Qc,fromXYZ_M:eu}),tu=new O({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:$i,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const ru=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],nu=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var wi=new O({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:kn,toXYZ_M:ru,fromXYZ_M:nu});const ou=1/512,au=16/512;var iu=new O({id:"prophoto",name:"ProPhoto",base:wi,toBase(e){return e.map(t=>t<au?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=ou?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),su=new $({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Yt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ir(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Mo=203,Ao=2610/2**14,lu=2**14/2610,cu=2523/2**5,Bo=2**5/2523,Po=3424/2**12,Ro=2413/2**7,No=2392/2**7;var uu=new O({id:"rec2100pq",name:"REC.2100-PQ",base:sr,toBase(e){return e.map(function(t){return(Math.max(t**Bo-Po,0)/(Ro-No*t**Bo))**lu*1e4/Mo})},fromBase(e){return e.map(function(t){let r=Math.max(t*Mo/1e4,0),n=Po+Ro*r**Ao,o=1+No*r**Ao;return(n/o)**cu})},formats:{color:{id:"rec2100-pq"}}});const Lo=.17883277,Io=.28466892,zo=.55991073,Er=3.7743;var du=new O({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:sr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Er:(Math.exp((t-zo)/Lo)+Io)/12*Er})},fromBase(e){return e.map(function(t){return t/=Er,t<=1/12?Math.sqrt(3*t):Lo*Math.log(12*t-Io)+zo})},formats:{color:{id:"rec2100-hlg"}}});const yi={};ge.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=xi(e.W1,e.W2,e.options.method))});ge.add("chromatic-adaptation-end",e=>{e.M||(e.M=xi(e.W1,e.W2,e.options.method))});function lr({id:e,toCone_M:t,fromCone_M:r}){yi[e]=arguments[0]}function xi(e,t,r="Bradford"){let n=yi[r],[o,a,i]=P(n.toCone_M,e),[s,l,c]=P(n.toCone_M,t),u=[[s/o,0,0],[0,l/a,0],[0,0,c/i]],d=P(u,n.toCone_M);return P(n.fromCone_M,d)}lr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});lr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});lr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});lr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Q,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Q.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const hu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ki=new O({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Q.ACES,toXYZ_M:hu,fromXYZ_M:fu,formats:{color:{}}});const Tt=2**-16,_r=-.35828683,Mt=(Math.log2(65504)+9.72)/17.52;var pu=new O({id:"acescc",name:"ACEScc",coords:{r:{range:[_r,Mt],name:"Red"},g:{range:[_r,Mt],name:"Green"},b:{range:[_r,Mt],name:"Blue"}},referred:"scene",base:ki,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Tt)*2:r<Mt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Tt)+9.72)/17.52:t<Tt?(Math.log2(Tt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Oo=Object.freeze({__proto__:null,A98RGB:tu,A98RGB_Linear:$i,ACEScc:pu,ACEScg:ki,HSL:bi,HSV:vi,HWB:Kc,ICTCP:Wr,JzCzHz:Yr,Jzazbz:di,LCH:lt,Lab:D,Lab_D65:Ur,OKLCH:su,OKLab:Yt,P3:ii,P3_Linear:oi,ProPhoto:iu,ProPhoto_Linear:wi,REC_2020:ni,REC_2020_Linear:sr,REC_2100_HLG:du,REC_2100_PQ:uu,XYZ_ABS_D65:Sn,XYZ_D50:kn,XYZ_D65:Z,sRGB:ut,sRGB_Linear:ai});class w{constructor(...t){let r;t.length===1&&(r=S(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:$.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in this.space.coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:s=>this.set(i,s)})}get spaceId(){return this.space.id}clone(){return new w(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Ql(this,...t);return r.color=new w(r.color),r}static get(t,...r){return t instanceof w?t:new w(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,i=function(...s){let l=r(...s);if(a==="color")l=w.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return w.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>w.get(c)));return l};t in w||(w[t]=i),o&&(w.prototype[t]=function(...s){return i(this,...s)})}static defineFunctions(t){for(let r in t)w.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(w);else for(let r in t)w.defineFunction(r,t[r])}}w.defineFunctions({get:q,getAll:bt,set:be,setAll:ri,to:Y,equals:ec,inGamut:tt,toGamut:ve,distance:si,toString:Ut});Object.assign(w,{util:Hl,hooks:ge,WHITES:Q,Space:$,spaces:$.registry,parse:ti,defaults:ie});for(let e of Object.keys(Oo))$.register(Oo[e]);for(let e in $.registry)Zr(e,$.registry[e]);ge.add("colorspace-init-end",e=>{var t;Zr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Zr(r,e)})});function Zr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(w.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return $.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,i)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:s}=$.resolveCoord([t,a]);if(s>=0)return o[s]}return Reflect.get(o,a,i)},set:(o,a,i,s)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=$.resolveCoord([t,a]);if(l>=0)return o[l]=i,this.setAll(e,o),!0}return Reflect.set(o,a,i,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}w.extend(Wt);w.extend({deltaE:Ke});Object.assign(w,{deltaEMethods:Wt});w.extend(Gc);w.extend({contrast:wc});w.extend(xc);w.extend(rc);w.extend(Jc);w.extend(Nt);function Si(e){return me(e,(t,r)=>r instanceof w?_(r.toString({format:"hex"})):Si(r))}const mu="dodgerblue";function qr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Tr({background:e,foreground:t}){return{background:e??new w(qr(t)),foreground:t??new w(qr(e))}}var Zt;(function(e){e.Dark="dark",e.Light="light"})(Zt||(Zt={}));function gu(e){return e==="black"?"white":"black"}const bu={black:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")},white:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")}},vu={black:{backgroundFaint1:new w("#666"),backgroundFaint2:new w("#444")},white:{backgroundFaint1:new w("#ccc"),backgroundFaint2:new w("#fafafa")}};function Vo({themeColor:e=mu,themeStyle:t=Zt.Light}={}){const r=new w(e),n=new w(t===Zt.Dark?"black":"white"),o=qr(n),a=new w(o),i={nav:{hover:Tr({background:r.clone().set({"hsl.l":93})}),active:Tr({background:r.clone().set({"hsl.l":90})}),selected:Tr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...vu[gu(o)],foreground:a,...bu[o]}};return Si(i)}const qt=un()("element-book-change-route"),Ho="vira-",{defineElement:$t,defineElementNoInputs:Ku}=gn({assertInputs:e=>{if(!e.tagName.startsWith(Ho))throw new Error(`Tag name should start with '${Ho}' but got '${e.tagName}'`)}}),Ci=g`
    pointer-events: none;
    opacity: 0.3;
`,rt=F({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function $u(e){return`${e}px`}const Gt=F({"vira-form-input-border-radius":"8px"}),Xt=F({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${Gt["vira-form-input-border-radius"].value} + 4px)`});function Ei({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=_($u(n+r+t));return g`
        ${_(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Xt["vira-focus-outline-color"].value};
            border-radius: ${Xt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Le=g`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,_i=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Gr=F({"vira-icon-color":"currentColor"}),wu=F({"vira-icon-stroke-color":Gr["vira-icon-color"].value,"vira-icon-fill-color":Gr["vira-icon-color"].value}),W={...Gr,...wu},G=$t()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
        :host {
            display: inline-block;
            color: ${W["vira-icon-color"].value};
            fill: ${W["vira-icon-fill-color"].value};
            stroke: ${W["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Xr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Xr||(Xr={}));$t()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Xr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${_i};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Xt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ci};
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
            border-radius: ${Gt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${rt["vira-interaction-animation-duration"].value},
                background-color
                    ${rt["vira-interaction-animation-duration"].value},
                border-color ${rt["vira-interaction-animation-duration"].value};
        }

        ${Ei({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${G} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?f`
                  <${G.assign({icon:e.icon})}></${G}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Jr;(function(e){e.Header="header"})(Jr||(Jr={}));$t()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
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
            transition: height ${rt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:oe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?g`
                  height: ${e.contentHeight}px;
              `:g`
                  height: 0;
              `;return f`
            <button
                class="header-wrapper"
                ${A("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Jr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${or(({contentRect:i})=>{t({contentHeight:i.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Kr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Kr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ti({value:e,allowed:t,blocked:r}){const n=t?Kr({input:e,matcher:t}):!0,o=r?Kr({input:e,matcher:r}):!1;return n&&!o}function Do(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ti({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}$t()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:oe(),inputBlocked:oe()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Xt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ci};
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
                ${_i};
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
                border-radius: ${Gt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${rt["vira-interaction-animation-duration"].value};
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
                border-radius: ${Gt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Ei({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${G} {
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Do({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?f`
                  <${G.assign({icon:e.icon})}></${G}>
              `:"",s=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return f`
            <label>
                ${i}
                ${ae(!!e.fitText,f`
                        <span
                            class="size-span"
                            ${or(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${ma({"have-value":!!a})}
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${A("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let h=c.value??"";if(u)if(u.length===1)Ti({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(h=d,t(new o.inputBlocked(u)));else{const{filtered:p,blocked:m}=Do({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});h=p,t(new o.inputBlocked(m))}c.value!==h&&(c.value=h),d!==h&&t(new o.valueChange(h))})}
                    placeholder=${e.placeholder}
                />
                ${ae(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});$t()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>g`
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
    `,events:{routeChange:oe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(i){e.route&&yn(i)&&(i.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return f`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return f`
                <a href=${i} rel="noopener noreferrer" ${A("click",n)}>
                    <slot></slot>
                </a>
            `}}});function Fe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const yu=Fe({name:"Element16Icon",svgTemplate:f`
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
    `});Fe({name:"Element24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const xu=Fe({name:"Options24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${W["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `});Fe({name:"StatusFailure24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${W["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                stroke="none"
                fill=${W["vira-icon-stroke-color"].value}
                d="m11.33 12-3.7-4.17.74-.66L12 11.25l3.63-4.08.74.66-3.7 4.17 3.7 4.17-.74.66L12 12.75l-3.63 4.08-.74-.66 3.7-4.17Z"
            />
        </svg>
    `});Fe({name:"StatusInProgress24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${W["vira-icon-stroke-color"].value}
                fill="none"
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${W["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${W["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${W["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `});Fe({name:"StatusSuccess24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${W["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                d="m6.64 13.81.7-.7 2.63 2.62 6.65-7.6.74.66-7.35 8.4-3.37-3.38Z"
                fill=${W["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `});const ku=g`
    padding: 0;
    margin: 0;
`;g`
    ${ku}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;const{defineElement:X,defineElementNoInputs:Qu}=gn(),U=X()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>g`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return f`
            <a
                href=${r}
                ${A("click",a=>{(!e.router||yn(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new qt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Su(e,t){return e.entry.entryType===N.Root?!1:!!(e.entry.entryType===N.Page||Ee(t,e.fullUrlBreadcrumbs.slice(0,-1))||Ee(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ce=X()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${x["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${x["element-book-nav-hover-background-color"].value};
            color: ${x["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${x["element-book-nav-active-background-color"].value};
            color: ${x["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${U.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${x["element-book-nav-selected-background-color"].value};
            color: ${x["element-book-nav-selected-foreground-color"].value};
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

        ${G} {
            display: inline-flex;
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Su(r,e.selectedPath))return;const n=g`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return f`
                <li style=${n}>
                    <${U.assign({router:e.router,route:{paths:[z.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ma({"title-row":!0,selected:e.selectedPath?Ee(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ae(ze(r,N.ElementExample),f`
                                    <${G.assign({icon:yu})}></${G}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${U}>
                </li>
            `});return f`
            <${U.assign({route:He,router:e.router})}>
                <slot name=${de.NavHeader}>Book</slot>
            </${U}>
            <ul>
                ${t}
            </ul>
        `}});async function Cu(e){await Br(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await hs(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const he=X()({tagName:"book-error",styles:g`
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
    `,renderCallback({inputs:e}){return(K(e.message,"array")?e.message:[e.message]).map(r=>f`
                    <p>${r}</p>
                `)}}),jo=X()({tagName:"book-breadcrumbs",styles:g`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,i=o.slice(0,n+1),s=a?"":f`
                      <span class="spacer">&gt;</span>
                  `;return f`
                <${U.assign({route:{hash:void 0,search:void 0,paths:[z.Book,...i]},router:e.router})}>
                    ${r}
                </${U}>
                ${s}
            `}):f`
                &nbsp;
            `}}),Fo=X()({tagName:"book-breadcrumbs-bar",styles:g`
        :host {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${x["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${x["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return f`
            ${ae(!!e.currentSearch,f`
                    &nbsp;
                `,f`
                    <${jo.assign({currentRoute:e.currentRoute,router:e.router})}></${jo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${A("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await ns(200),n.value===o&&(n.value?t(new qt({paths:[z.Search,encodeURIComponent(n.value)]})):t(new qt(He)))})}
            />
        `}}),dt=X()({tagName:"book-page-controls",events:{controlValueChange:oe()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
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

        ${G}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===k.Hidden)return"";const i=Eu(e.currentValues[n],o,s=>{const l=K(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return f`
                    <div class="control-wrapper">
                        ${ae(a===0,f`
                                <${G.assign({icon:xu})}
                                    class="options-icon"
                                ></${G}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${i}
                        </label>
                    </div>
                `}):""}});function Eu(e,t,r){return Ae(t,k.Hidden)?"":Ae(t,k.Checkbox)?f`
            <input
                type="checkbox"
                .value=${e}
                ${A("input",n=>{const o=Re(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ae(t,k.Color)?f`
            <input
                type="color"
                .value=${e}
                ${A("input",n=>{const o=Re(n,HTMLInputElement);r(o.value)})}
            />
        `:Ae(t,k.Text)?f`
            <input
                type="text"
                .value=${e}
                ${A("input",n=>{const o=Re(n,HTMLInputElement);r(o.value)})}
            />
        `:Ae(t,k.Number)?f`
            <input
                type="number"
                .value=${e}
                ${A("input",n=>{const o=Re(n,HTMLInputElement);r(o.value)})}
            />
        `:Ae(t,k.Dropdown)?f`
            <select
                .value=${e}
                ${A("input",n=>{const o=Re(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>f`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:f`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Uo=X()({tagName:"book-entry-description",styles:g`
        :host {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${x["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>f`
                <p>${t}</p>
            `)}}),Yo=X()({tagName:"book-page-wrapper",styles:g`
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

        ${U} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?f`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:f`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[z.Book,...e.pageNode.fullUrlBreadcrumbs],n=Qo(e.pageNode.entry.errors);return n&&console.error(n),f`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${U.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${U}>
                    ${n?f`
                              <${he.assign({message:n.message})}></${he}>
                          `:f`
                              <${Uo.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Uo}>
                              <${dt.assign({config:e.pageNode.entry.controls,currentValues:$n(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${dt}>
                          `}
                </div>
            </div>
        `}}),At=X()({tagName:"book-element-example-controls",styles:g`
        :host {
            display: flex;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[z.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return f`
            <${U.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${U}>
        `}}),Wo=Symbol("unset-internal-state"),Zo=X()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Wo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Qo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Wo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return f`
                ${ae(!!t.elementExampleNode.entry.styles,f`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),f`
                <${he.assign({message:`${t.elementExampleNode.entry.title} failed: ${Qt(n)}`})}></${he}>
            `}},options:{allowPolymorphicState:!0}}),qo=X()({tagName:"book-element-example-wrapper",styles:g`
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

        ${At} {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${At} {
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return f`
            <div class="individual-example-wrapper">
                <${At.assign(rs(e,["currentPageControls"]))}></${At}>
                <${Zo.assign(e)}></${Zo}>
            </div>
        `}}),Xe=X()({tagName:"book-entry-display",styles:g`
        :host {
            display: flex;
            flex-direction: column;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }
    `,renderCallback:({inputs:e})=>{const t=Hr(e.currentRoute.paths),r=_u({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,controls:e.controls,originalTree:e.originalTree});return f`
            <${Fo.assign({currentSearch:t,currentRoute:e.currentRoute,router:e.router})}></${Fo}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${de.Footer}></slot>
        `}});function Mi(e,t,r,n){const o=Vr(r,n),a=[];if(o){const i=Mi(e,t,o,n);i&&a.push(i)}if(ze(r,N.Page)&&!e.includes(r)){const i=$n(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:i,breadcrumbs:me(i,()=>r.fullUrlBreadcrumbs)})}return a.reduce((i,s)=>({config:{...i.config,...s.config},current:{...i.current,...s.current},breadcrumbs:{...i.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function _u({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[f`
                No results
            `];const i=In(e,1)?Mi(e,o,e[0],a):void 0,s=i&&Object.values(i.config).length&&In(e,1)?f`
                  <${dt.assign({config:i.config,currentValues:i.current,fullUrlBreadcrumbs:i.breadcrumbs})}></${dt}>
              `:"",l=Ss(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(ze(c,N.Page))return f`
                    <${Yo.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Yo}>
                `;if(ze(c,N.ElementExample)){const d=$n(o,c.fullUrlBreadcrumbs.slice(0,-1));return f`
                    <${qo.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${qo}>
                `}else return ze(c,N.Root)?f``:f`
                    <${he}
                        class="block-entry"
                        ${Pa(he,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${he}>
                `});return[s,l]}function Tu(e,t,r){const n=Go(e,t);if(n.length)return n;r(He);const o=Go(e,He.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Go(e,t){return e.filter(r=>cs({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Mr=Aa()({tagName:"element-book-app",events:{pathUpdate:oe()},stateInitStatic:{currentRoute:He,router:void 0,loading:!1,colors:{config:void 0,theme:Vo(void 0)},treeBasedControls:void 0},styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${x["element-book-page-background-color"].value};
            color: ${x["element-book-page-foreground-color"].value};
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

        ${Xe} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ce} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }

        .loading {
            padding: 64px;
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Xo(e,Hr(t.currentRoute.paths),t.currentRoute)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var s,l,c,u,d,h;t._debug&&console.info("rendering element-book app");try{let p=function(E){e.router?e.router.setRoutes(E):n({currentRoute:{...e.currentRoute,...E}}),t.elementBookRoutePaths&&!Ee(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(E.paths??[]))};var i=p;if(t.elementBookRoutePaths&&!Ee(t.elementBookRoutePaths,e.currentRoute.paths)&&p({paths:t.elementBookRoutePaths}),(s=t.internalRouterConfig)!=null&&s.useInternalRouter&&!e.router){const E=Il(t.internalRouterConfig.basePath);n({router:E}),E.addRouteListener(!0,I=>{n({currentRoute:I})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const m={themeColor:t.themeColor};if(!Ee(m,(c=e.colors)==null?void 0:c.config)){const E=Vo(m);n({colors:{config:m,theme:E}}),Vl(r,E)}const b=t._debug??!1,v=bl({entries:t.entries,debug:b});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Fa(v.tree,{children:(d=(u=e.treeBasedControls)==null?void 0:u.controls)==null?void 0:d.children,controls:t.globalValues})}}));const C=Hr(e.currentRoute.paths),R=(C?Sl({flattenedNodes:v.flattenedNodes,searchQuery:C}):void 0)??Tu(v.flattenedNodes,e.currentRoute.paths,p),T=(h=e.treeBasedControls)==null?void 0:h.controls;return T?(t._debug&&console.info({currentControls:T}),f`
                <div
                    class="root"
                    ${A(qt,async E=>{const I=r.shadowRoot.querySelector(Xe.tagName);for(n({loading:!0});!r.shadowRoot.querySelector(".loading");)await Br();if(await Br(),I?I.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Xe.tagName}' for scrolling.`),p(E.detail),!(r.shadowRoot.querySelector(ce.tagName)instanceof ce))throw new Error(`Failed to find child '${ce.tagName}'`);n({loading:!1}),Xo(r,C,e.currentRoute)})}
                    ${A(dt.events.controlValueChange,E=>{if(!e.treeBasedControls)return;const I=$l(T,E.detail.fullUrlBreadcrumbs,E.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:I}})})}
                >
                    <${ce.assign({flattenedNodes:v.flattenedNodes,router:e.router,selectedPath:C?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${de.NavHeader}
                            slot=${de.NavHeader}
                        ></slot>
                    </${ce}>
                    ${e.loading?f`
                              <div class="loading">Loading...</div>
                          `:f`
                              <${Xe.assign({currentRoute:e.currentRoute,currentNodes:R,router:e.router,debug:b,controls:T,originalTree:v.tree})}>
                                  <slot
                                      name=${de.Footer}
                                      slot=${de.Footer}
                                  ></slot>
                              </${Xe}>
                          `}
                </div>
            `):f`
                    <${he.assign({message:"Failed to generate page controls."})}></${he}>
                `}catch(p){return console.error(p),f`
                <p class="error">${Qt(p)}</p>
            `}}});async function Xo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ce.tagName);if(!(n instanceof ce))throw new Error(`Failed to find child '${ce.tagName}'`);await Cu(n)}const Ue=Me({title:"Elements",parent:void 0}),Ai=g`
    pointer-events: none;
    opacity: 0.3;
`,Oe=F({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),ht=F({"vira-form-input-border-radius":"8px"}),Jt=F({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${ht["vira-form-input-border-radius"].value} + 4px)`});function Bi({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=_(ra(n+r+t));return g`
        ${_(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Jt["vira-focus-outline-color"].value};
            border-radius: ${Jt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Mu=g`
    padding: 0;
    margin: 0;
`,Ie=g`
    ${Mu};
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Qr=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Jo="vira-",{defineElement:wt,defineElementNoInputs:ed}=gn({assertInputs:e=>{if(!e.tagName.startsWith(Jo))throw new Error(`Tag name should start with '${Jo}' but got '${e.tagName}'`)}}),en=F({"vira-icon-color":"currentColor"}),Au=F({"vira-icon-stroke-color":en["vira-icon-color"].value,"vira-icon-fill-color":en["vira-icon-color"].value,"vira-icon-stroke-width":"1px"}),y={...en,...Au},j=wt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
        :host {
            display: inline-block;
            color: ${y["vira-icon-color"].value};
            fill: ${y["vira-icon-fill-color"].value};
            stroke: ${y["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Pi=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Pi||{});const L=wt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Qr};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Jt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ai};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Ie};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${ht["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Oe["vira-interaction-animation-duration"].value},
                background-color
                    ${Oe["vira-interaction-animation-duration"].value},
                border-color ${Oe["vira-interaction-animation-duration"].value};
        }

        ${Bi({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${j} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?f`
                  <${j.assign({icon:e.icon})}></${j}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),Bu=Me({parent:Ue,title:L.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:k.Text,initValue:""},"Secondary color":{controlType:k.Text,initValue:""},"Hover color":{controlType:k.Text,initValue:""},"Active color":{controlType:k.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??g``;e({title:r,styles:a,renderCallback({controls:i}){const s=g`
                        ${L.cssVars["vira-button-primary-color"].name}: ${_(i["Primary color"]||"inherit")};
                        ${L.cssVars["vira-button-secondary-color"].name}: ${_(i["Secondary color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-hover-color"].name}: ${_(i["Hover color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-active-color"].name}: ${_(i["Active color"]||"inherit")};
                    `;return f`
                        <${L.assign({text:"hello",...o})}
                            style=${s}
                        ></${L}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:Pi.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:g`
                ${L} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:g`
                ${L} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:g`
                :host {
                    ${L.cssVars["vira-button-primary-color"].name}: pink;
                    ${L.cssVars["vira-button-secondary-color"].name}: purple;
                    ${L.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${L.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return f`
                    <${L.assign({text:"hello"})}></${L}>
                `}})}});var tn=(e=>(e.Header="header",e))(tn||{});const ke=wt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Ie};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Oe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:oe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?g`
                  height: ${e.contentHeight}px;
              `:g`
                  height: 0;
              `;return f`
            <button
                class="header-wrapper"
                ${A("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${or(({contentRect:i})=>{t({contentHeight:i.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Pu=Me({title:ke.tagName,parent:Ue,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:g`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>f`
                            <${ke.assign({expanded:!!r.expandedStates[o]})}
                                ${A(ke.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${tn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${A("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ae(!!r.showMoreStates[o],f`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${ke}>
                        `)}}),e({title:"wider examples",styles:g`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>f`
                            <${ke.assign({expanded:!!r.expandedStates[o]})}
                                ${A(ke.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${tn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${A("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ae(!!r.showMoreStates[o],f`
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
                            </${ke}>
                        `)}})}});function we({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Ru=we({name:"Element16Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                vector-effect="non-scaling-stroke"
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
            />
        </svg>
    `}),nt=we({name:"Element24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
            />
        </svg>
    `}),Nu=we({name:"Loader24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ko=g`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg.loader-animated-24-icon {
        animation: ${Oe["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Lu=we({name:"LoaderAnimated24Icon",svgTemplate:f`
        <style>
            ${Ko}
        </style>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="loader-animated-24-icon"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            style=${Ko}
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Iu=we({name:"Options24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width=${y["vira-icon-stroke-width"].value}>
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke="${y["vira-icon-stroke-color"].value}"
                fill="none"
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
            />
        </svg>
    `}),zu=we({name:"StatusFailure24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
            />
        </svg>
    `}),Ou=we({name:"StatusInProgress24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                fill="none"
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
                stroke=${y["vira-icon-stroke-color"].value}
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
                stroke=${y["vira-icon-stroke-color"].value}
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
                stroke=${y["vira-icon-stroke-color"].value}
            />
        </svg>
    `}),Vu=we({name:"StatusSuccess24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Hu={Element16Icon:Ru,Element24Icon:nt,Loader24Icon:Nu,LoaderAnimated24Icon:Lu,Options24Icon:Iu,StatusFailure24Icon:zu,StatusInProgress24Icon:Ou,StatusSuccess24Icon:Vu},Du=Me({title:j.tagName,parent:Ue,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return f`
                    <${j.assign({icon:nt})}></${j}>
                `}})}});function rn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>rn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ri({value:e,allowed:t,blocked:r}){const n=t?rn({input:e,matcher:t}):!0,o=r?rn({input:e,matcher:r}):!1;return n&&!o}function Ni(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ri({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function ju({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=Re(r,HTMLInputElement),i=r.data,s=t;let l=a.value??"";if(i)if(i.length===1)Ri({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(i));else{const{filtered:c,blocked:u}=Ni({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),s!==l&&o(l)}const V=wt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:oe(),inputBlocked:oe()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Jt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ai};
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
                ${Ie};
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
                ${Qr};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${Ie};
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
                border-radius: ${ht["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Oe["vira-interaction-animation-duration"].value};
            }

            label {
                ${Ie};
                max-width: 100%;
                flex-grow: 1;
                cursor: text;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${ht["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Bi({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${j} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ie};
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
                ${Qr};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Ni({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?f`
                  <${j.assign({icon:e.icon})}></${j}>
              `:"",s=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return f`
            <label>
                ${i}
                ${ae(!!e.fitText,f`
                        <span
                            class="size-span"
                            ${or(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${A("input",l=>{ju({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${ae(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Fu=Me({title:V.tagName,parent:Ue,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:k.Text,initValue:""},"Placeholder color":{controlType:k.Text,initValue:""},"Border color":{controlType:k.Text,initValue:""},"Focus color":{controlType:k.Text,initValue:""},"Selection color":{controlType:k.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:g`
                    ${r||g``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:i,controls:s}){const l=g`
                        ${V.cssVars["vira-input-text-color"].name}: ${_(s["Text color"]||"inherit")};
                        ${V.cssVars["vira-input-border-color"].name}: ${_(s["Border color"]||"inherit")};
                        ${V.cssVars["vira-input-focus-border-color"].name}: ${_(s["Focus color"]||"inherit")};
                        ${V.cssVars["vira-input-placeholder-color"].name}: ${_(s["Placeholder color"]||"inherit")};
                        ${V.cssVars["vira-input-text-selection-color"].name}: ${_(s["Selection color"]||"inherit")};
                    `;return f`
                        <${V.assign({...o,value:a.value})}
                            style=${l}
                            ${A(V.events.valueChange,c=>{i({value:c.detail})})}
                        ></${V}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:nt}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:g`
                ${V} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:nt}}),t({title:"custom height",styles:g`
                ${V} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"height",icon:nt}}),t({title:"max width",styles:g`
                ${V} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:g`
                ${V} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Je=wt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>g`
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
    `,events:{routeChange:oe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(i){e.route&&yn(i)&&(i.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return f`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return f`
                <a href=${i} rel="noopener noreferrer" ${A("click",n)}>
                    <slot></slot>
                </a>
            `}}}),Uu=Me({title:Je.tagName,parent:Ue,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:k.Color,initValue:""},"Hover color":{controlType:k.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=g`
                        ${Je.cssVars["vira-link-hover-color"].name}: ${_(o["Hover color"]||"inherit")};
                        color: ${_(o["CSS Color"]||"inherit")};
                    `;return f`
                        <${Je.assign(n)}
                            style=${a}
                            ${A(Je.events.routeChange,i=>{console.info(i)})}
                        >
                            My Link
                        </${Je}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),Yu=Me({title:"Icons",parent:void 0,controls:{"Icon Color":{controlType:k.Text,initValue:""},"Stroke Color":{controlType:k.Text,initValue:""},"Fill Color":{controlType:k.Text,initValue:""},"Stroke Width":{controlType:k.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(Hu).forEach(t=>{e({title:t.name,styles:g`
                    :host(:hover) ${j} {
                        background-color: #f2f2f2;
                    }

                    ${j} {
                        padding: 8px;
                        border-radius: ${ht["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=g`
                        ${y["vira-icon-color"].name}: ${_(r["Icon Color"]||"inherit")};
                        ${y["vira-icon-fill-color"].name}: ${_(r["Fill Color"]||"inherit")};
                        ${y["vira-icon-stroke-color"].name}: ${_(r["Stroke Color"]||"inherit")};
                        ${y["vira-icon-stroke-width"].name}: ${_(ra(r["Stroke Width"])||"inherit")};
                    `;return f`
                        <${j.assign({icon:t})} style=${n}></${j}>
                    `}})})}}),Wu=[Ue,Yu,Bu,Pu,Du,Fu,Uu];nr({tagName:"vira-book-app",styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Mr} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,renderCallback(){return f`
            <${Mr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Wu,themeColor:"#33ccff"})}>
                <h1 slot=${de.NavHeader}>Vira</h1>
            </${Mr}>
        `}});
