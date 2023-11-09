var Ki=Object.defineProperty;var Ji=(e,t,r)=>t in e?Ki(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var hr=(e,t,r)=>(Ji(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function nn(e){return!!e}function Qi(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var An;(function(e){e.Upper="upper",e.Lower="lower"})(An||(An={}));const es=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Qt(e,t){return e?es.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function aa(e,t){return e&&t.every(r=>Qt(e,r))}function ia(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>er(r).trim()).join(`
`))}function er(e){return e?e instanceof Error?e.message:Qt(e,"message")?String(e.message):String(e):""}function ts(e){return e instanceof Error?e:new Error(er(e))}function rs(e){try{const t=e.callback();return t instanceof Promise?t.catch(r=>e.catchCallback?e.catchCallback(r):e.fallbackValue):t}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}function Pn(e){return!!e&&typeof e=="object"}function et(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ns(e){return Array.isArray(e)?"array":typeof e}function tr(e,t){return ns(e)===t}function Rn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Bn="Failed to compare objects using JSON.stringify";function Hn(e,t,r){return Rn({source:e,errorHandler(n){if(r)return"";throw n}})===Rn({source:t,errorHandler(n){if(r)return"";throw n}})}function ce(e,t,r={}){try{return e===t?!0:Pn(e)&&Pn(t)?Hn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ce(e[o],t[o])):!1:Hn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=ts(n);throw o.message.startsWith(Bn)||(o.message=`${Bn}: ${o.message}`),o}}function os(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function as(e){return et(e).filter(t=>isNaN(Number(t)))}function is(e){return as(e).map(r=>e[r])}function ss(e,t){return is(t).includes(e)}function ls(e,t){return et(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function cs(e,t){return ls(e,r=>!t.includes(r))}function tt(e,t){let r=!1;const n=et(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(et(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function Nn(e,t){try{return us(e,t),!0}catch{return!1}}function us(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function sa(){let e,t,r=!1;const n=new Promise((o,a)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,a(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${sa.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Br(e){const t=sa();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const ds=globalThis.crypto;function la(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return ds.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}const fs="px";function ca(e){return hs({value:e,suffix:fs})}function hs({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function ps(e,t){return Qt(e,"entryType")&&e.entryType===t}var O;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(O||(O={}));function Ae(e,t){return e.controlType===t}var C;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(C||(C={}));const ua=Symbol("any-type"),ms={[C.Checkbox]:!1,[C.Color]:"",[C.Dropdown]:"",[C.Hidden]:ua,[C.Number]:0,[C.Text]:""};function gs(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=ms[o.controlType];a!==ua&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function on(e,t){const r=Ht(e.title);return e.parent?[...on(e.parent,!1),Ht(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Ht(e){return Qi(e).toLowerCase().replaceAll(/\s/g,"-")}function bs({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function be(e){const t={...e,entryType:O.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:O.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(nn)};r.add(n.title),t.elementExamples[Ht(o.title)]=o}}),t}var re;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(re||(re={}));var On;(function(e){e.Upper="upper",e.Lower="lower"})(On||(On={}));function vs(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function da(){let e,t,r=!1;const n=new Promise((o,a)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,a(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${da.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}async function Hr(e=1){const t=da();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function ys(e){return ws(e,1)}async function ws(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{vs(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=window,an=_t.ShadowRoot&&(_t.ShadyCSS===void 0||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sn=Symbol(),jn=new WeakMap;let fa=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==sn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(an&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=jn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&jn.set(r,t))}return t}toString(){return this.cssText}};const N=e=>new fa(typeof e=="string"?e:e+"",void 0,sn),Lt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new fa(r,e,sn)},$s=(e,t)=>{an?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=_t.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},In=an?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return N(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pr;const Nt=window,zn=Nt.trustedTypes,ks=zn?zn.emptyScript:"",Vn=Nt.reactiveElementPolyfillSupport,Nr={toAttribute(e,t){switch(t){case Boolean:e=e?ks:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ha=(e,t)=>t!==e&&(t==t||e==e),mr={attribute:!0,type:String,converter:Nr,reflect:!1,hasChanged:ha},Or="finalized";let Ne=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=mr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||mr}static finalize(){if(this.hasOwnProperty(Or))return!1;this[Or]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(In(o))}else t!==void 0&&r.push(In(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $s(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=mr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Nr).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const i=o.getPropertyOptions(a),s=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:Nr;this._$El=a,this[a]=s.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ha)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ne[Or]=!0,Ne.elementProperties=new Map,Ne.elementStyles=[],Ne.shadowRootOptions={mode:"open"},Vn==null||Vn({ReactiveElement:Ne}),((pr=Nt.reactiveElementVersions)!==null&&pr!==void 0?pr:Nt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr;const Ot=window,Ie=Ot.trustedTypes,Dn=Ie?Ie.createPolicy("lit-html",{createHTML:e=>e}):void 0,jt="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,ln="?"+se,Es=`<${ln}>`,Se=document,rt=()=>Se.createComment(""),nt=e=>e===null||typeof e!="object"&&typeof e!="function",pa=Array.isArray,ma=e=>pa(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",br=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Un=/-->/g,Fn=/>/g,ve=RegExp(`>|${br}(?:([^\\s"'>=/]+)(${br}*=${br}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wn=/'/g,Yn=/"/g,ga=/^(?:script|style|textarea|title)$/i,xs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ss=xs(1),ee=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),qn=new WeakMap,Ee=Se.createTreeWalker(Se,129,null,!1);function ba(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dn!==void 0?Dn.createHTML(t):t}const va=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",i=qe;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,f=0;for(;f<l.length&&(i.lastIndex=f,u=i.exec(l),u!==null);)f=i.lastIndex,i===qe?u[1]==="!--"?i=Un:u[1]!==void 0?i=Fn:u[2]!==void 0?(ga.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=ve):u[3]!==void 0&&(i=ve):i===ve?u[0]===">"?(i=o??qe,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?ve:u[3]==='"'?Yn:Wn):i===Yn||i===Wn?i=ve:i===Un||i===Fn?i=qe:(i=ve,o=void 0);const p=i===ve&&e[s+1].startsWith("/>")?" ":"";a+=i===qe?l+Es:d>=0?(n.push(c),l.slice(0,d)+jt+l.slice(d)+se+p):l+se+(d===-2?(n.push(void 0),s):p)}return[ba(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class ot{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,i=0;const s=t.length-1,l=this.parts,[c,u]=va(t,r);if(this.el=ot.createElement(c,n),Ee.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=Ee.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(jt)||f.startsWith(se)){const p=u[i++];if(d.push(f),p!==void 0){const m=o.getAttribute(p.toLowerCase()+jt).split(se),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:a,name:b[2],strings:m,ctor:b[1]==="."?wa:b[1]==="?"?$a:b[1]==="@"?ka:ht})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(ga.test(o.tagName)){const d=o.textContent.split(se),f=d.length-1;if(f>0){o.textContent=Ie?Ie.emptyScript:"";for(let p=0;p<f;p++)o.append(d[p],rt()),Ee.nextNode(),l.push({type:2,index:++a});o.append(d[f],rt())}}}else if(o.nodeType===8)if(o.data===ln)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(se,d+1))!==-1;)l.push({type:7,index:a}),d+=se.length-1}a++}}static createElement(t,r){const n=Se.createElement("template");return n.innerHTML=t,n}}function Ce(e,t,r=e,n){var o,a,i,s;if(t===ee)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=nt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(s=r)._$Co)!==null&&i!==void 0?i:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Ce(e,l._$AS(e,t.values),l,n)),t}class ya{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Se).importNode(n,!0);Ee.currentNode=a;let i=Ee.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new De(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new Ea(i,this,t)),this._$AV.push(u),c=o[++l]}s!==(c==null?void 0:c.index)&&(i=Ee.nextNode(),s++)}return Ee.currentNode=Se,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class De{constructor(t,r,n,o){var a;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ce(this,t,r),nt(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==ee&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ma(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.$(Se.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ot.createElement(ba(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const i=new ya(a,this),s=i.u(this.options);i.v(n),this.$(s),this._$AH=i}}_$AC(t){let r=qn.get(t.strings);return r===void 0&&qn.set(t.strings,r=new ot(t)),r}T(t){pa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new De(this.k(rt()),this.k(rt()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ht{constructor(t,r,n,o,a){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let i=!1;if(a===void 0)t=Ce(this,t,r,0),i=!nt(t)||t!==this._$AH&&t!==ee,i&&(this._$AH=t);else{const s=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Ce(this,s[n+l],r,l),c===ee&&(c=this._$AH[l]),i||(i=!nt(c)||c!==this._$AH[l]),c===R?t=R:t!==R&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wa extends ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const Cs=Ie?Ie.emptyScript:"";class $a extends ht{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,Cs):this.element.removeAttribute(this.name)}}class ka extends ht{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Ce(this,t,r,0))!==null&&n!==void 0?n:R)===ee)return;const o=this._$AH,a=t===R&&o!==R||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==R&&(o===R||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Ea{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ce(this,t)}}const Ts={O:jt,P:se,A:ln,C:1,M:va,L:ya,R:ma,D:Ce,I:De,V:ht,H:$a,N:ka,U:wa,F:Ea},Gn=Ot.litHtmlPolyfillSupport;Gn==null||Gn(ot,De),((gr=Ot.litHtmlVersions)!==null&&gr!==void 0?gr:Ot.litHtmlVersions=[]).push("2.8.0");const Ms=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let i=a._$litPart$;if(i===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=i=new De(t.insertBefore(rt(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vr,yr;let Je=class extends Ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ms(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ee}};Je.finalized=!0,Je._$litElement$=!0,(vr=globalThis.litElementHydrateSupport)===null||vr===void 0||vr.call(globalThis,{LitElement:Je});const Xn=globalThis.litElementPolyfillSupport;Xn==null||Xn({LitElement:Je});((yr=globalThis.litElementVersions)!==null&&yr!==void 0?yr:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=e=>(...t)=>({_$litDirective$:e,values:t});let Me=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:_s}=Ts,Zn=()=>document.createComment(""),Ge=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=o.insertBefore(Zn(),a),s=o.insertBefore(Zn(),a);r=new _s(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(i!==a||l){let c=r._$AA;for(;c!==i;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},ye=(e,t,r=e)=>(e._$AI(t,r),e),Ls={},As=(e,t=Ls)=>e._$AH=t,Ps=e=>e._$AH,wr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xa=Ue(class extends Me{constructor(e){var t;if(super(e),e.type!==rr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const i=!!t[a];i===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(i?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return ee}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Rs=Ue(class extends Me{constructor(e){if(super(e),e.type!==rr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let i=0;for(const s of e)o[i]=n?n(s,i):i,a[i]=r(s,i),i++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=Ps(e),{values:i,keys:s}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=s,i;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,p=a.length-1,m=0,b=i.length-1;for(;f<=p&&m<=b;)if(a[f]===null)f++;else if(a[p]===null)p--;else if(l[f]===s[m])c[m]=ye(a[f],i[m]),f++,m++;else if(l[p]===s[b])c[b]=ye(a[p],i[b]),p--,b--;else if(l[f]===s[b])c[b]=ye(a[f],i[b]),Ge(e,c[b+1],a[f]),f++,b--;else if(l[p]===s[m])c[m]=ye(a[p],i[m]),Ge(e,a[f],a[p]),p--,m++;else if(u===void 0&&(u=Kn(s,m,b),d=Kn(l,f,p)),u.has(l[f]))if(u.has(l[p])){const y=d.get(s[m]),$=y!==void 0?a[y]:null;if($===null){const S=Ge(e,a[f]);ye(S,i[m]),c[m]=S}else c[m]=ye($,i[m]),Ge(e,a[f],$),a[y]=null;m++}else wr(a[p]),p--;else wr(a[f]),f++;for(;m<=b;){const y=Ge(e,c[b+1]);ye(y,i[m]),c[m++]=y}for(;f<=p;){const y=a[f++];y!==null&&wr(y)}return this.ut=s,As(e,c),ee}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let jr=class extends Me{constructor(t){if(super(t),this.et=R,t.type!==rr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||t==null)return this.ft=void 0,this.et=t;if(t===ee)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};jr.directiveName="unsafeHTML",jr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Jn extends jr{}Jn.directiveName="unsafeSVG",Jn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bs(e,t,r){return e?t():r==null?void 0:r()}var Hs=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function i($){if($!==void 0&&typeof $!="function")throw new TypeError("Function expected");return $}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,p=r.length-1;p>=0;p--){var m={};for(var b in n)m[b]=b==="access"?{}:n[b];for(var b in n.access)m.access[b]=n.access[b];m.addInitializer=function($){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i($||null))};var y=(0,r[p])(s==="accessor"?{get:u.get,set:u.set}:u[l],m);if(s==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=i(y.get))&&(u.get=d),(d=i(y.set))&&(u.set=d),(d=i(y.init))&&o.unshift(d)}else(d=i(y))&&(s==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Ns=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Os=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function js(){function e(t,r){return t}return e}let Sa=(()=>{let e=[js()],t,r=[],n,o=Je;return n=class extends o{},Os(n,"DeclarativeElement"),(()=>{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;Hs(null,t={value:n},e,{kind:"class",name:n.name,metadata:a},null,r),n=t.value,a&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),Ns(n,r)})(),n})();function Is(e){return!!e}const zs={capitalizeFirstLetter:!1};function Vs(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Ds(e,t){return t.capitalizeFirstLetter?Vs(e):e}function Us(e,t=zs){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Ds(n,t)}var Qn;(function(e){e.Upper="upper",e.Lower="lower"})(Qn||(Qn={}));const Fs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function cn(e,t){return e?Fs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ws(e){return e?e instanceof Error?e.message:cn(e,"message")?String(e.message):String(e):""}function Ys(e){return e instanceof Error?e:new Error(Ws(e))}function qs(e){return!!e&&typeof e=="object"}function Te(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ca(e,t){let r=!1;const n=Te(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Te(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}var ze;(function(e){e.Upper="upper",e.Lower="lower"})(ze||(ze={}));function Gs(e){return e.toLowerCase()!==e.toUpperCase()}function eo(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Gs(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===ze.Upper&&o!==o.toUpperCase())return!1;if(t===ze.Lower&&o!==o.toLowerCase())return!1}return!0}function Xs(e){return e.split("").reduce((r,n,o,a)=>{const i=o>0&&a[o-1]||"",s=o<a.length-1&&a[o+1]||"",l=eo(i,ze.Lower,{blockNoCaseCharacters:!0})||eo(s,ze.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Zs(e){return!!e&&typeof e=="object"}function to(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ks(e){return Array.isArray(e)?"array":typeof e}function Js(e,t){return Ks(e)===t}function Qs(e,t){let r=!1;const n=to(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(to(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function _e(e){if(Zs(e))return Qs(e,(r,n)=>{if(!Js(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Xs(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,i=r.startsWith("--")?N(r):r.startsWith("-")?Lt`-${N(r)}`:Lt`--${N(r)}`;return{name:i,value:Lt`var(${i}, ${N(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${_e.name}' function.`)}function el({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tl=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},rl=(e,t,r)=>{t.constructor.createProperty(r,e)};function Ta(e){return(t,r)=>r!==void 0?rl(e,t,r):tl(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $r;(($r=window.HTMLSlotElement)===null||$r===void 0?void 0:$r.prototype.assignedElements)!=null;function nl(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const a=e.map(s=>[s]);return a.length||(a[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(a[s]=[])}),t.forEach(s=>{const l=a[s.index];l&&l.splice(0,0,...s.values)}),a.flat()}function Ir(e){return cn(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function un(e){return cn(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ma(e){return e.map(t=>Ir(t)?t.definition:t).filter(t=>un(t))}const _a=new WeakMap;function ol(e,t){var o;const r=Ma(t);return(o=La(_a,[e,...r]).value)==null?void 0:o.template}function al(e,t,r){const n=Ma(t);return Pa(_a,[e,...n],r)}function La(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Aa(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?La(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Aa(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Pa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:i}=Aa(e,t,n);if(!a)return{result:!1,reason:i};const s=o??{nested:void 0,template:void 0};if(o||e.set(a,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Pa(l,t,r,n+1)}const il=new WeakMap;function Ra(e,t,r){const n=ol(e,t),o=n??r();if(!n){const s=al(e,t,o);if(s.result)il.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=o.valuesTransform(t),i=nl(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:i}}function Ba(e,t,r,n){const o=[],a=[],i=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],p=u-1,m=t[p];n&&n(c);let b,y=[];if(typeof f=="string"&&(b=r(f,c,m),b)){o[d]=f+b.replacement,i.push(p);const S=b.getExtraValues;y=S?S(m):[],y.length&&S?(o[d]+=" ",y.forEach((P,A)=>{A&&o.push(" ")}),s.push(P=>{const A=P[p],I=S(A);return{index:p,values:I}}),o.push(c)):o[d]+=c}b||o.push(c);const $=e.raw[u];b?(a[d]=a[d]+b.replacement+$,y.length&&y.forEach(()=>{a.push("")})):a.push($)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:i,valueInsertions:u}}}}function sl(...[e,t,r]){if(un(r))return{replacement:r.tagName,getExtraValues:void 0}}function ll(e,t){return Ba(e,t,sl)}function g(e,...t){const r=Ra(e,t,()=>ll(e,t));return Lt(r.strings,...r.values)}const dn=Symbol("key for ignoring inputs not having been set yet"),cl={[dn]:!0,allowPolymorphicState:!1};function Ha(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Sa?!0:Ha(r)}function Na(e,t){const r=e.instanceState;Te(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Te(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),ul(e)}function ul(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function ro(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class dl extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function fn(){return e=>{var t;return t=class extends dl{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function le(){return fn()}function fl(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=fn()(r);return t[r]=n,t},{}):{}}const hl="_elementVirStateSetup";function pl(e){return qs(e)?hl in e:!1}function ml(e,t){return e.includes(t)}var no;(function(e){e.Upper="upper",e.Lower="lower"})(no||(no={}));const gl=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function At(e,t){return e?gl.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function pt(e){return!!e&&typeof e=="object"}function It(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function zr(e){return Array.isArray(e)?"array":typeof e}function Oe(e,t){return zr(e)===t}function bl(e,t){let r=!1;const n=It(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(It(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function vl(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return zr(e)===zr(t)&&r}const Oa=Symbol("and"),ja=Symbol("or"),Ia=Symbol("exact"),za=Symbol("enum"),hn=Symbol("unknown"),Va="__vir__shape__definition__key__do__not__use__in__actual__objects";function Da(e){return At(e,Va)}const Ua="__vir__shape__specifier__key__do__not__use__in__actual__objects",yl=[Oa,ja,Ia,za,hn];function wl(){return $l([],hn)}function nr(e){return mt(e,ja)}function pn(e){return mt(e,Oa)}function mn(e){return mt(e,Ia)}function gn(e){return mt(e,za)}function bn(e){return mt(e,hn)}function mt(e,t){const r=or(e);return!!r&&r.specifierType===t}function $l(e,t){return{[Ua]:!0,specifierType:t,parts:e}}function Pt(e,t){const r=or(t);if(r){if(pn(r))return r.parts.every(n=>Pt(e,n));if(nr(r))return r.parts.some(n=>Pt(e,n));if(mn(r))return pt(e)?Pt(e,r.parts[0]):e===r.parts[0];if(gn(r))return Object.values(r.parts[0]).some(n=>n===e);if(bn(r))return!0}return vl(e,t)}function or(e){if(pt(e)&&At(e,Ua)){if(!At(e,"parts")||!Oe(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!At(e,"specifierType")||!ml(yl,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Vr(e,t=!1){return Dr(e)}function Dr(e){const t=or(e);if(t){if(nr(t)||mn(t))return Dr(t.parts[0]);if(pn(t))return t.parts.reduce((r,n)=>Object.assign(r,Dr(n)),{});if(gn(t))return Object.values(t.parts[0])[0];if(bn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Da(e)?Vr(e.shape):e instanceof RegExp||Oe(e,"array")?e:pt(e)?bl(e,(r,n)=>Vr(n)):e}function kl(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Vr(e),[Va]:!0}}class J extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function El(e,t,r={}){try{return xl(e,t,r),!0}catch{return!1}}function xl(e,t,r={}){$e(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Fa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function $e(e,t,r,n){if(bn(t))return!0;if(Da(t))return $e(e,t.shape,r,n);const o=Fa(r);if(or(e))throw new J(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Pt(e,t))throw new J(`Subject does not match shape definition at key ${o}`);if(Oe(t,"function"))return Oe(e,"function");if(pt(e)){const i=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(i).map(c=>[c,!1]));let l=!1;if(nr(t))l=t.parts.some(c=>{try{const u=$e(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof J)return!1;throw u}});else if(pn(t))l=t.parts.every(c=>{try{const u=$e(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof J)return!1;throw u}});else if(mn(t)){const c=$e(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(gn(t))throw new J(`Cannot compare an enum specifier to an object at ${o}`);if(Oe(t,"array")&&Oe(i,"array"))l=i.every((c,u)=>{const d=t.some(f=>{try{return $e(c,f,[...r,u],n),!0}catch(p){if(p instanceof J)return!1;throw p}});return s[u]=d,d});else{const c=Sl({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new J(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new J(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Sl({keys:e,options:t,shape:r,subject:n}){const o=Fa(e),a={};if(pt(r)){const i=new Set(It(n)),s=new Set(It(r));t.ignoreExtraKeys||i.forEach(l=>{if(!s.has(l))throw new J(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var f;const c=r[l],u=nr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!i.has(l)&&!u&&!d)throw new J(`Subject missing key '${String(l)}' in ${o}`)}),i.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];$e(c,u,[...e,l],t),a[l]=!0})}else throw new J(`shape definition at ${o} was not an object.`);return a}const Cl=kl({addListener(){return!1},removeListener(){return!1},value:wl()});function kr(e){return El(e,Cl,{allowExtraKeys:!0})}function Tl(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function oo(e,t){const r=e;function n(i){t?Tl(i,e,e.tagName):Ta()(e,i)}function o(i,s){return n(s),r[s]}return new Proxy({},{get:o,set:(i,s,l)=>{const c=pl(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(m){i[s]=m,r[s]=m}const f=e.observablePropertyListenerMap[s];if(u!==c&&kr(u)&&(f!=null&&f.length)&&u.removeListener(f),kr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var p=m;e.observablePropertyListenerMap[s]=m,c.addListener(m)}else kr(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,s){if(s in i)return{get value(){return o(i,s)},configurable:!0,enumerable:!0}},has:(i,s)=>Reflect.has(i,s)})}function Ml(e){return e?Ca(e,t=>t):{}}function _l({hostClassNames:e,cssVars:t}){return{hostClasses:Ca(e,(r,n)=>({name:N(n),selector:N(`:host(.${n})`)})),cssVars:t}}function Ll({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Te(t).forEach(a=>{const i=t[a],s=r[a];typeof i=="function"&&(i({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Al(e,t){function r(o){Te(o).forEach(a=>{const i=o[a];e.instanceState[a]=i})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Pl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function ar(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...cl,...e.options},n=fl(e.events),o=Ml(e.hostClasses);e.hostClasses&&ro(e.tagName,e.hostClasses),e.cssVars&&ro(e.tagName,e.cssVars);const a=e.cssVars?_e(e.cssVars):{},i=typeof e.styles=="function"?e.styles(_l({hostClassNames:o,cssVars:a})):e.styles||g``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends Sa{createRenderParams(){return Al(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{Ha(this)&&!this.haveInputsBeenSet&&!r[dn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${ar.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Ll({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Ys(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){Na(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=oo(this,!1),this.instanceState=oo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};Te(u).forEach(f=>{Ta()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Pl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=i,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Us(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Wa(){return e=>ar({...e,options:{[dn]:!1,...e.options}})}function Ya(e,t){return at(e,t),e.element}function Rl(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function at(e,t){const r=Rl(e),n=r?`: in ${r}`:"";if(e.type!==rr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Bl(e,t){return t?ao(e,t):ao(void 0,e)}const ao=Ue(class extends Me{constructor(e){super(e),this.element=Ya(e,"assign")}render(e,t){return Na(this.element,t),ee}});function L(e,t){return Hl(e,t)}const Hl=Ue(class extends Me{constructor(e){super(e),this.element=Ya(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ee}}),io="onDomCreated",so=Ue(class extends Me{constructor(e){super(e),at(e,io)}update(e,[t]){at(e,io);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Er="onResize",qa=Ue(class extends Me{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),at(e,Er)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Er} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){at(e,Er),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function G(e,t,r){return Bs(e,()=>t,()=>r)}function Ga(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Wa()(r(n))),defineElementNoInputs:n=>(t(n),ar(r(n)))}}function Nl(...[e,t,r]){const n=Ir(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=o||a,s=un(n);if(i&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=Ir(c)?c.inputs:void 0;return[o&&u?Bl(u):void 0].filter(Is)}}}function Ol(e){}function jl(e){return Ba(e.strings,e.values,Nl,Ol)}function h(e,...t){const r=Ss(e,...t),n=Ra(e,t,()=>jl(r));return{...r,strings:n.strings,values:n.values}}var lo;(function(e){e.Upper="upper",e.Lower="lower"})(lo||(lo={}));const Il={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},zl=Object.keys(Il),Vl=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...zl,...Vl];function Ze(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const Dl={[O.ElementExample]:()=>[],[O.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...gs(e.controls,e.title)].filter(nn),[O.Root]:()=>[]},zt="_isBookTreeNode",Xa=new Map;function Ul(e){return Xa.get(e)}function Fl(e,t){os(Xa,e,()=>t)}function je(e,t){return!!(Za(e)&&e.entry.entryType===t)}function Za(e){return!!(aa(e,[zt,"entry"])&&e[zt])}function Wl(){return{[zt]:!0,entry:{entryType:O.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Yl({entries:e,debug:t}){const r=Ul(e);if(r)return r;const n=Wl();e.forEach(i=>vn({tree:n,newEntry:i,debug:t,manuallyAdded:!0}));const o=Ka(n),a={tree:n,flattenedNodes:o};return Fl(e,a),t&&console.info("element-book tree:",n),a}function ql(e,t,r){if(!t.parent)return e;const n=Ur(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),vn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Ur(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${on(t,!1)}`);return o}function vn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Dl[t.entryType](t);t.errors.push(...o);const a=ql(e,t,r),i=Ht(t.title),s=a.children[i];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${i}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[zt]:!0,children:{},urlBreadcrumb:i,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,i],entry:t,manuallyAdded:n};a.children[i]=l,ps(t,O.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>vn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Ur(e,t){const r=Za(e)?e.fullUrlBreadcrumbs.slice(0,-1):on(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ka(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ka(o));return[e,...r].flat()}function yn(e,t){return wn(e,["",...t],void 0)}function wn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],i=a&&wn(a,n,r);return{...e.controls,...i}}function Gl(e,t,r){const n={...e};return wn(n,["",...t],r),n}function Ja(e,t){const r=(t==null?void 0:t.controls)||(je(e,O.Page)?tt(e.entry.controls,(o,a)=>a.initValue):{});return{children:tt(e.children,(o,a)=>{var i;return Ja(a,(i=t==null?void 0:t.children)==null?void 0:i[a.urlBreadcrumb])}),controls:r}}function Xl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let i=0,s=0;i<n;i++){const l=a.charCodeAt(i);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const Zl=la(32);function Rt(e){return e.join(Zl)}function Qa(e){if(!e.length)return[];const t=Rt(e),r=Qa(e.slice(0,-1));return[t,...r]}const Kl=["error","errors"];function Jl(e){return Kl.includes(e)}function Ql({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(i=>(n(i),Rt(i.fullUrlBreadcrumbs))).forEach(i=>r[i]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&Jl(t),i=Rt(o.fullUrlBreadcrumbs);if(Xl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[i]){const l=Qa(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[i]=!1}),e.filter(o=>{const a=Rt(o.fullUrlBreadcrumbs),i=r[a];if(!tr(i,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return i})}var V;(function(e){e.Search="search",e.Book="book"})(V||(V={}));function Fr(e){return e[0]===V.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ve={hash:void 0,paths:[V.Book],search:void 0},ec=0;function ei(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==ec)}class ir extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class co extends ir{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const it="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const tc=globalThis.history.pushState;function uo(...e){const t=tc.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(it)),t}const rc=globalThis.history.replaceState;function fo(...e){const t=rc.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(it)),t}function nc(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===uo)throw new co("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===fo)throw new co("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=uo,globalThis.history.replaceState=fo,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(it))})}}function sr(e){return!!e}var ho;(function(e){e.Upper="upper",e.Lower="lower"})(ho||(ho={}));function oc(e,t){return e.split(t)}function ac(e){return e?e instanceof Error?e.message:Vt(e,"message")?String(e.message):String(e):""}function ic(e){return!!e&&typeof e=="object"}const sc=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Vt(e,t){return e?sc.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function po(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ti(e,t,r=!1,n={}){const o=po(e),a=new Set(po(t));if(!r){const i=o.filter(s=>!a.has(s));if(i.length)throw new Error(`Test object has extra keys: ${i.join(", ")}`)}a.forEach(i=>{if(!Vt(e,i))throw new Error(`test object does not have key "${String(i)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(i)}" did not match expected shape: ${u}`)}const l=e[i],c=t[i];n[i]||ri(l,c,s,r,n[i]??{})})}function ri(e,t,r,n,o){var s;const a=typeof e,i=typeof t;a!==i&&r(`type "${a}" did not match expected type "${i}"`);try{Vt(t,"constructor")&&(!Vt(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{ri(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${ac(f)}`)}}).filter(sr).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):ic(t)&&ti(e,t,n,o)}function lc(e){return Array.isArray(e)?"array":typeof e}function cc(e,t){return lc(e)===t}function uc({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function dc(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(sr);return t.length?`?${t.join("&")}`:""}function fc(e){return uc({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=oc(n,"="),i=a.join("");if(!(!i&&!o))return[o,i]}).filter(sr)}function hc(e,t){const r=cc(e,"string")?new URL(e):e,n=fc(r.search),o=Object.fromEntries(n);return t&&ti(o,t),o}function pc(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),o=globalThis.location.search?hc(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function ni(e){return e.replace(/(?:^\/|\/+$)/g,"")}function oi({routeBase:e,windowPath:t}){if(!e)return"";const r=ni(e);if(ai({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?oi({routeBase:n,windowPath:t}):""}function ai({routeBase:e,windowPath:t}){const r=ni(e);return r?t.startsWith(`/${r}`):!1}class mc extends ir{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function ii(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const mo=6;function go(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>mo)throw new mc(`Route sanitization depth has exceed the max of ${mo} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(ii(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class xr extends ir{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function gc(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new xr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new xr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new xr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function bc(e,t,r=!1){const n=si(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function si(e,t){var s;const r=ai({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?dc(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(sr).join("/")}${n}${a}`}function vc(e={}){gc(e),nc();const t=e.routeBase?oi({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>go(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const i={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(i):i},setRoutes(a,i=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!s&&ii(l,u)))return bc(u,t,i)},createRoutesUrl(a){return si(a,t)},getCurrentRawRoutes(){return pc(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,i){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new ir(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(i),r||(globalThis.addEventListener(it,n),r=!0),a&&go(o,i),i},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const i=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(it,n),r=!1),i},sanitizationDepth:0};return o}function yc(e){return vc({routeBase:e,routeSanitizer(t){return{paths:wc(t.paths),hash:void 0,search:void 0}}})}function wc(e){const t=e[0];if(ss(t,V)){if(t===V.Book)return[V.Book,...e.slice(1)];if(t===V.Search)return e[1]?[t,e[1]]:[V.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ve.paths}const E=_e({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),$c={nav:{hover:{background:E["element-book-nav-hover-background-color"],foreground:E["element-book-nav-hover-foreground-color"]},active:{background:E["element-book-nav-active-background-color"],foreground:E["element-book-nav-active-foreground-color"]},selected:{background:E["element-book-nav-selected-background-color"],foreground:E["element-book-nav-selected-foreground-color"]}},accent:{icon:E["element-book-accent-icon-color"]},page:{background:E["element-book-page-background-color"],backgroundFaint1:E["element-book-page-background-faint-level-1-color"],backgroundFaint2:E["element-book-page-background-faint-level-2-color"],foreground:E["element-book-page-foreground-color"],foregroundFaint1:E["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:E["element-book-page-foreground-faint-level-2-color"]}};function kc(e,t){li(e,t,$c)}function Wr(e){return Qt(e,"_$cssResult$")}function bo(e){return aa(e,["name","value","default"])&&tr(e.default,"string")&&Wr(e.name)&&Wr(e.value)}function li(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Wr(o)){if(!bo(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);el({forCssVar:a,onElement:e,toValue:String(o)})}else{if(bo(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);li(e,o,a)}})}function B(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let n=t[0].length,o=t[0].map((i,s)=>t.map(l=>l[s])),a=e.map(i=>o.map(s=>{let l=0;if(!Array.isArray(i)){for(let c of s)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(s[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(i=>i[0]):a}function gt(e){return ue(e)==="string"}function ue(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Dt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function ci(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),a.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ui(e){return e[e.length-1]}function Ut(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function di(e,t,r){return(r-e)/(t-e)}function $n(e,t,r){return Ut(t[0],t[1],di(e[0],e[1],r))}function fi(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Ec=Object.freeze({__proto__:null,interpolate:Ut,interpolateInv:di,isString:gt,last:ui,mapRange:$n,multiplyMatrices:B,parseCoordGrammar:fi,parseFunction:ci,toPrecision:Dt,type:ue});class xc{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const fe=new xc;var ne={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Q={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Yr(e){return Array.isArray(e)?e:Q[e]}function Ft(e,t,r,n={}){if(e=Yr(e),t=Yr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(fe.run("chromatic-adaptation-start",o),o.M||(o.W1===Q.D65&&o.W2===Q.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Q.D50&&o.W2===Q.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),fe.run("chromatic-adaptation-end",o),o.M)return B(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Sc=75e-6,F=class F{constructor(t){var o,a,i;this.id=t.id,this.name=t.name,this.base=t.base?F.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Yr(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Cc(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),fe.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Sc}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let i=n[a];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[s,l]=i.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=vo(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=vo(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=F.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,a,i;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)a=n[s],i=s;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>i;s--)r=n[s].toBase(r);for(let s=i+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=F.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(F.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof F)return t;if(ue(t)==="string"){let o=F.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return F.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ue(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=F.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ue(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=F.get(o);let i=a.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===i||((l=u.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};hr(F,"registry",{}),hr(F,"DEFAULT_FORMAT",{type:"functions",name:"color"});let v=F;function Cc(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function vo(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=fi(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let i=e.coordGrammar[a][0],s=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,i)=>{let{fromRange:s,toRange:l,suffix:c}=r[i];return s&&l&&(a=$n(s,l,a)),a=Dt(a,o),c&&(a+=c),a})}return e}var X=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class D extends v{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=X),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=B(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ft(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Ft(this.base.white,this.white,r),B(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function hi(e,{meta:t}={}){var n,o,a,i,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(fe.run("parse-start",r),r.color)return r.color;if(r.parsed=ci(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of v.all){let p=f.getFormat("color");if(p&&(c===p.id||(o=p.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((b,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in v.registry){let f=(s=(i=(a=v.registry[c].formats)==null?void 0:a.functions)==null?void 0:i.color)==null?void 0:s.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of v.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||ui(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,p;return u.coordGrammar&&(p=Object.entries(c.coords).map(([m,b],y)=>{var te;let $=u.coordGrammar[y],S=(te=f[y])==null?void 0:te.type,P=$.find(U=>U==S);if(!P){let U=b.name||m;throw new TypeError(`${S} not allowed for ${U} in ${l}()`)}let A=P.range;S==="<percentage>"&&(A||(A=[0,1]));let I=b.range||b.refRange;return A&&I&&(f[y]=$n(A,I,f[y])),P})),t&&Object.assign(t,{formatId:u.name,types:p}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of v.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function x(e){if(!e)throw new TypeError("Empty color reference");gt(e)&&(e=hi(e));let t=e.space||e.spaceId;return t instanceof v||(e.space=v.get(t)),e.alpha===void 0&&(e.alpha=1),e}function bt(e,t){return t=v.get(t),t.from(e)}function Z(e,t){let{space:r,index:n}=v.resolveCoord(t,e.space);return bt(e,r)[n]}function pi(e,t,r){return t=v.get(t),e.coords=t.to(e.space,r),e}function he(e,t,r){if(e=x(e),arguments.length===2&&ue(arguments[1])==="object"){let n=arguments[1];for(let o in n)he(e,o,n[o])}else{typeof r=="function"&&(r=r(Z(e,t)));let{space:n,index:o}=v.resolveCoord(t,e.space),a=bt(e,n);a[o]=r,pi(e,n,a)}return e}var kn=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:X,fromBase:e=>Ft(X.white,"D50",e),toBase:e=>Ft("D50",X.white,e),formats:{color:{}}});const Tc=216/24389,yo=24/116,wt=24389/27;let Sr=Q.D50;var W=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Sr,base:kn,fromBase(e){let r=e.map((n,o)=>n/Sr[o]).map(n=>n>Tc?Math.cbrt(n):(wt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>yo?Math.pow(t[0],3):(116*t[0]-16)/wt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wt,t[2]>yo?Math.pow(t[2],3):(116*t[2]-16)/wt].map((n,o)=>n*Sr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function lr(e){return(e%360+360)%360}function Mc(e,t){if(e==="raw")return t;let[r,n]=t.map(lr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var st=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:W,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),lr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const wo=25**7,Wt=Math.PI,$o=180/Wt,Pe=Wt/180;function qr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,i,s]=W.from(e),l=st.from(W,[a,i,s])[1],[c,u,d]=W.from(t),f=st.from(W,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,b=.5*(1-Math.sqrt(m/(m+wo))),y=(1+b)*i,$=(1+b)*u,S=Math.sqrt(y**2+s**2),P=Math.sqrt($**2+d**2),A=y===0&&s===0?0:Math.atan2(s,y),I=$===0&&d===0?0:Math.atan2(d,$);A<0&&(A+=2*Wt),I<0&&(I+=2*Wt),A*=$o,I*=$o;let te=c-a,U=P-S,M=I-A,j=A+I,dr=Math.abs(M),We;S*P===0?We=0:dr<=180?We=M:M>180?We=M-360:M<-180?We=M+360:console.log("the unthinkable has happened");let Cn=2*Math.sqrt(P*S)*Math.sin(We*Pe/2),Yi=(a+c)/2,fr=(S+P)/2,Tn=Math.pow(fr,7),ae;S*P===0?ae=j:dr<=180?ae=j/2:j<360?ae=(j+360)/2:ae=(j-360)/2;let Mn=(Yi-50)**2,qi=1+.015*Mn/Math.sqrt(20+Mn),_n=1+.045*fr,Ye=1;Ye-=.17*Math.cos((ae-30)*Pe),Ye+=.24*Math.cos(2*ae*Pe),Ye+=.32*Math.cos((3*ae+6)*Pe),Ye-=.2*Math.cos((4*ae-63)*Pe);let Ln=1+.015*fr*Ye,Gi=30*Math.exp(-1*((ae-275)/25)**2),Xi=2*Math.sqrt(Tn/(Tn+wo)),Zi=-1*Math.sin(2*Gi*Pe)*Xi,yt=(te/(r*qi))**2;return yt+=(U/(n*_n))**2,yt+=(Cn/(o*Ln))**2,yt+=Zi*(U/(n*_n))*(Cn/(o*Ln)),Math.sqrt(yt)}const _c=75e-6;function Qe(e,t=e.space,{epsilon:r=_c}={}){e=x(e),t=v.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function lt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function pe(e,{method:t=ne.gamut_mapping,space:r=e.space}={}){if(gt(arguments[1])&&(r=arguments[1]),r=v.get(r),Qe(e,r,{epsilon:0}))return x(e);let n=q(e,r);if(t!=="clip"&&!Qe(e,r)){let o=pe(lt(n),{method:"clip",space:r});if(qr(e,o)>2){let a=v.resolveCoord(t),i=a.space,s=a.id,l=q(n,i),u=(a.range||a.refRange)[0],d=.01,f=u,p=Z(l,s);for(;p-f>d;){let m=lt(l);m=pe(m,{space:r,method:"clip"}),qr(l,m)-2<d?f=Z(l,s):p=Z(l,s),he(l,s,(f+p)/2)}n=q(l,r)}else n=o}if(t==="clip"||!Qe(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,i)=>{let[s,l]=o[i];return s!==void 0&&(a=Math.max(s,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=q(n,e.space)),e.coords=n.coords,e}pe.returns="color";function q(e,t,{inGamut:r}={}){e=x(e),t=v.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=pe(o)),o}q.returns="color";function Yt(e,{precision:t=ne.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=x(e);let i=r;r=e.space.getFormat(r)??e.space.getFormat("default")??v.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Qe(e)&&(s=pe(lt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(p=>Dt(p,t)));let u=[...s];if(c==="color"){let p=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(p)}let d=e.alpha;t!==null&&(d=Dt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Lc=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Ac=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var cr=new D({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Lc,fromXYZ_M:Ac,formats:{color:{}}});const $t=1.09929682680944,ko=.018053968510807;var mi=new D({id:"rec2020",name:"REC.2020",base:cr,toBase(e){return e.map(function(t){return t<ko*4.5?t/4.5:Math.pow((t+$t-1)/$t,1/.45)})},fromBase(e){return e.map(function(t){return t>=ko?$t*Math.pow(t,.45)-($t-1):4.5*t})},formats:{color:{}}});const Pc=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Rc=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var gi=new D({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Pc,fromXYZ_M:Rc});const Bc=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Hc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var bi=new D({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Bc,fromXYZ_M:Hc,formats:{color:{}}}),Eo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let xo=Array(3).fill("<percentage> | <number>[0, 255]"),So=Array(3).fill("<number>[0, 255]");var ct=new D({id:"srgb",name:"sRGB",base:bi,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:xo},rgb_number:{name:"rgb",commas:!0,coords:So,noAlpha:!0},color:{},rgba:{coords:xo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:So},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Eo.black,t.alpha=0):t.coords=Eo[e],t.coords)return t}}}}),vi=new D({id:"p3",name:"P3",base:gi,fromBase:ct.fromBase,toBase:ct.toBase,formats:{color:{id:"display-p3"}}});ne.display_space=ct;if(typeof CSS<"u"&&CSS.supports)for(let e of[W,mi,vi]){let t=e.getMinCoords(),n=Yt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ne.display_space=e;break}}function Nc(e,{space:t=ne.display_space,...r}={}){let n=Yt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ne.display_space)n=new String(n),n.color=e;else{let o=q(e,t);n=new String(Yt(o,r)),n.color=o}return n}function yi(e,t,r="lab"){r=v.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,i,s)=>{let l=o[s];return isNaN(i)||isNaN(l)?a:a+(l-i)**2},0))}function Oc(e,t){return e=x(e),t=x(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function me(e){return Z(e,[X,"y"])}function wi(e,t){he(e,[X,"y"],t)}function jc(e){Object.defineProperty(e.prototype,"luminance",{get(){return me(this)},set(t){wi(this,t)}})}var Ic=Object.freeze({__proto__:null,getLuminance:me,register:jc,setLuminance:wi});function zc(e,t){e=x(e),t=x(t);let r=Math.max(me(e),0),n=Math.max(me(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Vc=.56,Dc=.57,Uc=.62,Fc=.65,Co=.022,Wc=1.414,Yc=.1,qc=5e-4,Gc=1.14,To=.027,Xc=1.14;function Mo(e){return e>=Co?e:e+(Co-e)**Wc}function Re(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Zc(e,t){t=x(t),e=x(e);let r,n,o,a,i,s;t=q(t,"srgb"),[a,i,s]=t.coords;let l=Re(a)*.2126729+Re(i)*.7151522+Re(s)*.072175;e=q(e,"srgb"),[a,i,s]=e.coords;let c=Re(a)*.2126729+Re(i)*.7151522+Re(s)*.072175,u=Mo(l),d=Mo(c),f=d>u;return Math.abs(d-u)<qc?n=0:f?(r=d**Vc-u**Dc,n=r*Gc):(r=d**Fc-u**Uc,n=r*Xc),Math.abs(n)<Yc?o=0:n>0?o=n-To:o=n+To,o*100}function Kc(e,t){e=x(e),t=x(t);let r=Math.max(me(e),0),n=Math.max(me(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Jc=5e4;function Qc(e,t){e=x(e),t=x(t);let r=Math.max(me(e),0),n=Math.max(me(t),0);return n>r&&([r,n]=[n,r]),n===0?Jc:(r-n)/n}function eu(e,t){e=x(e),t=x(t);let r=Z(e,[W,"l"]),n=Z(t,[W,"l"]);return Math.abs(r-n)}const tu=216/24389,_o=24/116,kt=24389/27;let Cr=Q.D65;var Gr=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Cr,base:X,fromBase(e){let r=e.map((n,o)=>n/Cr[o]).map(n=>n>tu?Math.cbrt(n):(kt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>_o?Math.pow(t[0],3):(116*t[0]-16)/kt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/kt,t[2]>_o?Math.pow(t[2],3):(116*t[2]-16)/kt].map((n,o)=>n*Cr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Tr=Math.pow(5,.5)*.5+.5;function ru(e,t){e=x(e),t=x(t);let r=Z(e,[Gr,"l"]),n=Z(t,[Gr,"l"]),o=Math.abs(Math.pow(r,Tr)-Math.pow(n,Tr)),a=Math.pow(o,1/Tr)*Math.SQRT2-40;return a<7.5?0:a}var Bt=Object.freeze({__proto__:null,contrastAPCA:Zc,contrastDeltaPhi:ru,contrastLstar:eu,contrastMichelson:Kc,contrastWCAG21:zc,contrastWeber:Qc});function nu(e,t,r={}){gt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Bt).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=x(e),t=x(t);for(let a in Bt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Bt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function $i(e){let[t,r,n]=bt(e,X),o=t+15*r+3*n;return[4*t/o,9*r/o]}function ki(e){let[t,r,n]=bt(e,X),o=t+r+n;return[t/o,r/o]}function ou(e){Object.defineProperty(e.prototype,"uv",{get(){return $i(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ki(this)}})}var au=Object.freeze({__proto__:null,register:ou,uv:$i,xy:ki});function iu(e,t){return yi(e,t,"lab")}const su=Math.PI,Lo=su/180;function lu(e,t,{l:r=2,c:n=1}={}){let[o,a,i]=W.from(e),[,s,l]=st.from(W,[o,a,i]),[c,u,d]=W.from(t),f=st.from(W,[c,u,d])[1];s<0&&(s=0),f<0&&(f=0);let p=o-c,m=s-f,b=a-u,y=i-d,$=b**2+y**2-m**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let P=.0638*s/(1+.0131*s)+.638,A;Number.isNaN(l)&&(l=0),l>=164&&l<=345?A=.56+Math.abs(.2*Math.cos((l+168)*Lo)):A=.36+Math.abs(.4*Math.cos((l+35)*Lo));let I=Math.pow(s,4),te=Math.sqrt(I/(I+1900)),U=P*(te*A+1-te),M=(p/(r*S))**2;return M+=(m/(n*P))**2,M+=$/U**2,Math.sqrt(M)}const Ao=203;var En=new v({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:X,fromBase(e){return e.map(t=>Math.max(t*Ao,0))},toBase(e){return e.map(t=>Math.max(t/Ao,0))}});const Et=1.15,xt=.66,Po=2610/2**14,cu=2**14/2610,Ro=3424/2**12,Bo=2413/2**7,Ho=2392/2**7,uu=1.7*2523/2**5,No=2**5/(1.7*2523),St=-.56,Mr=16295499532821565e-27,du=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],fu=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],hu=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],pu=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ei=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:En,fromBase(e){let[t,r,n]=e,o=Et*t-(Et-1)*n,a=xt*r-(xt-1)*t,s=B(du,[o,a,n]).map(function(f){let p=Ro+Bo*(f/1e4)**Po,m=1+Ho*(f/1e4)**Po;return(p/m)**uu}),[l,c,u]=B(hu,s);return[(1+St)*l/(1+St*l)-Mr,c,u]},toBase(e){let[t,r,n]=e,o=(t+Mr)/(1+St-St*(t+Mr)),i=B(pu,[o,r,n]).map(function(f){let p=Ro-f**No,m=Ho*f**No-Bo;return 1e4*(p/m)**cu}),[s,l,c]=B(fu,i),u=(s+(Et-1)*c)/Et,d=(l+(xt-1)*u)/xt;return[u,d,c]},formats:{color:{}}}),Xr=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ei,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),lr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function mu(e,t){let[r,n,o]=Xr.from(e),[a,i,s]=Xr.from(t),l=r-a,c=n-i;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*i)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const xi=3424/4096,Si=2413/128,Ci=2392/128,Oo=2610/16384,gu=2523/32,bu=16384/2610,jo=32/2523,vu=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],yu=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],wu=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],$u=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Zr=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:En,fromBase(e){let t=B(vu,e);return ku(t)},toBase(e){let t=Eu(e);return B($u,t)},formats:{color:{}}});function ku(e){let t=e.map(function(r){let n=xi+Si*(r/1e4)**Oo,o=1+Ci*(r/1e4)**Oo;return(n/o)**gu});return B(yu,t)}function Eu(e){return B(wu,e).map(function(n){let o=Math.max(n**jo-xi,0),a=Si-Ci*n**jo;return 1e4*(o/a)**bu})}function xu(e,t){let[r,n,o]=Zr.from(e),[a,i,s]=Zr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-i)**2+(o-s)**2)}const Su=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Cu=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Tu=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Mu=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var qt=new v({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:X,fromBase(e){let r=B(Su,e).map(n=>Math.cbrt(n));return B(Tu,r)},toBase(e){let r=B(Mu,e).map(n=>n**3);return B(Cu,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function _u(e,t){let[r,n,o]=qt.from(e),[a,i,s]=qt.from(t),l=r-a,c=n-i,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var Gt={deltaE76:iu,deltaECMC:lu,deltaE2000:qr,deltaEJz:mu,deltaEITP:xu,deltaEOK:_u};function Ke(e,t,r={}){gt(r)&&(r={method:r});let{method:n=ne.deltaE,...o}=r;e=x(e),t=x(t);for(let a in Gt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Gt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Lu(e,t=.25){let n=[v.get("oklch","lch"),"l"];return he(e,n,o=>o*(1+t))}function Au(e,t=.25){let n=[v.get("oklch","lch"),"l"];return he(e,n,o=>o*(1-t))}var Pu=Object.freeze({__proto__:null,darken:Au,lighten:Lu});function Ti(e,t,r=.5,n={}){[e,t]=[x(e),x(t)],ue(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:i}=n;return vt(e,t,{space:o,outputSpace:a,premultiplied:i})(r)}function Mi(e,t,r={}){let n;xn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:i=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[x(e),x(t)],n=vt(e,t,l));let c=Ke(e,t),u=o>0?Math.max(i,Math.ceil(c/o)+1):i,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(p,m)=>{let b=m*f;return{p:b,color:n(b)}})}if(o>0){let f=d.reduce((p,m,b)=>{if(b===0)return 0;let y=Ke(m.color,d[b-1].color,a);return Math.max(p,y)},0);for(;f>o;){f=0;for(let p=1;p<d.length&&d.length<s;p++){let m=d[p-1],b=d[p],y=(b.p+m.p)/2,$=n(y);f=Math.max(f,Ke($,m.color),Ke($,b.color)),d.splice(p,0,{p:y,color:n(y)}),p++}}}return d=d.map(f=>f.color),d}function vt(e,t,r={}){if(xn(e)){let[l,c]=[e,t];return vt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:i}=r;e=x(e),t=x(t),e=lt(e),t=lt(t);let s={colors:[e,t],options:r};if(n?n=v.get(n):n=v.registry[ne.interpolationSpace]||e.space,o=o?v.get(o):n,e=q(e,n),t=q(t,n),e=pe(e),t=pe(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Z(e,c),Z(t,c)];[u,d]=Mc(l,[u,d]),he(e,c,u),he(t,c,d)}return i&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,p)=>{let m=t.coords[p];return Ut(f,m,l)}),u=Ut(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return i&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=q(d,o)),d},{rangeArgs:s})}function xn(e){return ue(e)==="function"&&!!e.rangeArgs}ne.interpolationSpace="lab";function Ru(e){e.defineFunction("mix",Ti,{returns:"color"}),e.defineFunction("range",vt,{returns:"function<color>"}),e.defineFunction("steps",Mi,{returns:"array<color>"})}var Bu=Object.freeze({__proto__:null,isRange:xn,mix:Ti,range:vt,register:Ru,steps:Mi}),_i=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ct,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[i,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:i=(o-a)/c+(o<a?6:0);break;case o:i=(a-n)/c+2;break;case a:i=(n-o)/c+4}i=i*60}return[i,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let i=(a+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Li=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:_i,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Hu=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Li,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let a=1-n,i=a===0?0:1-r/a;return[t,i*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Nu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Ou=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Ai=new D({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Nu,fromXYZ_M:Ou}),ju=new D({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Ai,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Iu=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],zu=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Pi=new D({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:kn,toXYZ_M:Iu,fromXYZ_M:zu});const Vu=1/512,Du=16/512;var Uu=new D({id:"prophoto",name:"ProPhoto",base:Pi,toBase(e){return e.map(t=>t<Du?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Vu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Fu=new v({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:qt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),lr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Io=203,zo=2610/2**14,Wu=2**14/2610,Yu=2523/2**5,Vo=2**5/2523,Do=3424/2**12,Uo=2413/2**7,Fo=2392/2**7;var qu=new D({id:"rec2100pq",name:"REC.2100-PQ",base:cr,toBase(e){return e.map(function(t){return(Math.max(t**Vo-Do,0)/(Uo-Fo*t**Vo))**Wu*1e4/Io})},fromBase(e){return e.map(function(t){let r=Math.max(t*Io/1e4,0),n=Do+Uo*r**zo,o=1+Fo*r**zo;return(n/o)**Yu})},formats:{color:{id:"rec2100-pq"}}});const Wo=.17883277,Yo=.28466892,qo=.55991073,_r=3.7743;var Gu=new D({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:cr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*_r:(Math.exp((t-qo)/Wo)+Yo)/12*_r})},fromBase(e){return e.map(function(t){return t/=_r,t<=1/12?Math.sqrt(3*t):Wo*Math.log(12*t-Yo)+qo})},formats:{color:{id:"rec2100-hlg"}}});const Ri={};fe.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Bi(e.W1,e.W2,e.options.method))});fe.add("chromatic-adaptation-end",e=>{e.M||(e.M=Bi(e.W1,e.W2,e.options.method))});function ur({id:e,toCone_M:t,fromCone_M:r}){Ri[e]=arguments[0]}function Bi(e,t,r="Bradford"){let n=Ri[r],[o,a,i]=B(n.toCone_M,e),[s,l,c]=B(n.toCone_M,t),u=[[s/o,0,0],[0,l/a,0],[0,0,c/i]],d=B(u,n.toCone_M);return B(n.fromCone_M,d)}ur({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});ur({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});ur({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});ur({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Q,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Q.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Xu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Zu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Hi=new D({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Q.ACES,toXYZ_M:Xu,fromXYZ_M:Zu,formats:{color:{}}});const Ct=2**-16,Lr=-.35828683,Tt=(Math.log2(65504)+9.72)/17.52;var Ku=new D({id:"acescc",name:"ACEScc",coords:{r:{range:[Lr,Tt],name:"Red"},g:{range:[Lr,Tt],name:"Green"},b:{range:[Lr,Tt],name:"Blue"}},referred:"scene",base:Hi,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Ct)*2:r<Tt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ct)+9.72)/17.52:t<Ct?(Math.log2(Ct+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Go=Object.freeze({__proto__:null,A98RGB:ju,A98RGB_Linear:Ai,ACEScc:Ku,ACEScg:Hi,HSL:_i,HSV:Li,HWB:Hu,ICTCP:Zr,JzCzHz:Xr,Jzazbz:Ei,LCH:st,Lab:W,Lab_D65:Gr,OKLCH:Fu,OKLab:qt,P3:vi,P3_Linear:gi,ProPhoto:Uu,ProPhoto_Linear:Pi,REC_2020:mi,REC_2020_Linear:cr,REC_2100_HLG:Gu,REC_2100_PQ:qu,XYZ_ABS_D65:En,XYZ_D50:kn,XYZ_D65:X,sRGB:ct,sRGB_Linear:bi});let T=class z{constructor(...t){let r;t.length===1&&(r=x(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:v.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in this.space.coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:s=>this.set(i,s)})}get spaceId(){return this.space.id}clone(){return new z(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Nc(this,...t);return r.color=new z(r.color),r}static get(t,...r){return t instanceof z?t:new z(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,i=function(...s){let l=r(...s);if(a==="color")l=z.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return z.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>z.get(c)));return l};t in z||(z[t]=i),o&&(z.prototype[t]=function(...s){return i(this,...s)})}static defineFunctions(t){for(let r in t)z.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(z);else for(let r in t)z.defineFunction(r,t[r])}};T.defineFunctions({get:Z,getAll:bt,set:he,setAll:pi,to:q,equals:Oc,inGamut:Qe,toGamut:pe,distance:yi,toString:Yt});Object.assign(T,{util:Ec,hooks:fe,WHITES:Q,Space:v,spaces:v.registry,parse:hi,defaults:ne});for(let e of Object.keys(Go))v.register(Go[e]);for(let e in v.registry)Kr(e,v.registry[e]);fe.add("colorspace-init-end",e=>{var t;Kr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Kr(r,e)})});function Kr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(T.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return v.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,i)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:s}=v.resolveCoord([t,a]);if(s>=0)return o[s]}return Reflect.get(o,a,i)},set:(o,a,i,s)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=v.resolveCoord([t,a]);if(l>=0)return o[l]=i,this.setAll(e,o),!0}return Reflect.set(o,a,i,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}T.extend(Gt);T.extend({deltaE:Ke});Object.assign(T,{deltaEMethods:Gt});T.extend(Pu);T.extend({contrast:nu});T.extend(au);T.extend(Ic);T.extend(Bu);T.extend(Bt);function Ni(e){return tt(e,(t,r)=>r instanceof T?N(r.toString({format:"hex"})):Ni(r))}const Ju="dodgerblue";function Jr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Ar({background:e,foreground:t}){return{background:e??new T(Jr(t)),foreground:t??new T(Jr(e))}}var Xt;(function(e){e.Dark="dark",e.Light="light"})(Xt||(Xt={}));function Qu(e){return e==="black"?"white":"black"}const ed={black:{foregroundFaint1:new T("#ccc"),foregroundFaint2:new T("#eee")},white:{foregroundFaint1:new T("#ccc"),foregroundFaint2:new T("#eee")}},td={black:{backgroundFaint1:new T("#666"),backgroundFaint2:new T("#444")},white:{backgroundFaint1:new T("#ccc"),backgroundFaint2:new T("#fafafa")}};function Xo({themeColor:e=Ju,themeStyle:t=Xt.Light}={}){const r=new T(e),n=new T(t===Xt.Dark?"black":"white"),o=Jr(n),a=new T(o),i={nav:{hover:Ar({background:r.clone().set({"hsl.l":93})}),active:Ar({background:r.clone().set({"hsl.l":90})}),selected:Ar({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...td[Qu(o)],foreground:a,...ed[o]}};return Ni(i)}const Zt=fn()("element-book-change-route"),Zo="vira-",{defineElement:Fe,defineElementNoInputs:Ld}=Ga({assertInputs:e=>{if(!e.tagName.startsWith(Zo))throw new Error(`Tag name should start with '${Zo}' but got '${e.tagName}'`)}}),rd=T;function nd(e){try{if(!e)throw new Error("invalid empty color");return new rd(e)}catch{const r=String(e),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?rs({callback:()=>JSON.stringify(e),fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const Oi=g`
    pointer-events: none;
    opacity: 0.3;
`,de=_e({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),ut=_e({"vira-form-input-border-radius":"8px"}),Kt=_e({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${ut["vira-form-input-border-radius"].value} + 4px)`});function ji({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=N(ca(n+r+t));return g`
        ${N(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Kt["vira-focus-outline-color"].value};
            border-radius: ${Kt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const od=g`
    padding: 0;
    margin: 0;
`,ke=g`
    ${od};
    cursor: unset;
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
`,k=Fe()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Ii=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Ii||{});const H=Fe()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>g`
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
            ${Kt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Oi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${ke};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${ut["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${de["vira-interaction-animation-duration"].value},
                background-color
                    ${de["vira-interaction-animation-duration"].value},
                border-color ${de["vira-interaction-animation-duration"].value};
        }

        ${ji({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${k} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${k.assign({icon:e.icon})}></${k}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var en=(e=>(e.Header="header",e))(en||{});const we=Fe()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ke};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${de["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:le()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?g`
                  height: ${e.contentHeight}px;
              `:g`
                  height: 0;
              `;return h`
            <button
                class="header-wrapper"
                ${L("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${qa(({contentRect:i})=>{t({contentHeight:i.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),w=_e({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function oe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function ad(e,t){const r=et(t).map(n=>{const o=t[n],a=nd(o);return`${w[n].name}: ${a.toString()};`}).join(" ");return oe({name:e.name,svgTemplate:h`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const zi=oe({name:"CloseX24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Vi=oe({name:"Element16Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xe=oe({name:"Element24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Di=oe({name:"Loader24Icon",svgTemplate:h`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),id=g`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${de["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,dt=oe({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            ${id}
        </style>
        ${Di.svgTemplate}
    `}),Sn=oe({name:"Options24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${w["vira-icon-stroke-color"].value}"
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Jt=oe({name:"StatusFailure24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),sd=oe({name:"StatusInProgress24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),ld=oe({name:"StatusSuccess24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),cd={CloseX24Icon:zi,Element16Icon:Vi,Element24Icon:xe,Loader24Icon:Di,LoaderAnimated24Icon:dt,Options24Icon:Sn,StatusFailure24Icon:Jt,StatusInProgress24Icon:sd,StatusSuccess24Icon:ld};var tn=(e=>(e.Loading="loading",e.Error="error",e))(tn||{});const Be=Fe()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:le(),imageError:le()},styles:({hostClasses:e})=>g`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const a=e.imageUrl,i=t.erroredUrls[a]?h`
                  <slot class="status-wrapper" name=${"error"}>
                      <${k.assign({icon:Jt})} class="error"></${k}>
                  </slot>
              `:t.loadedUrls[a]?void 0:h`
                  <slot class="status-wrapper" name=${"loading"}>
                      <${k.assign({icon:dt})}></${k}>
                  </slot>
              `;return h`
            ${G(!!i,i)}
            <img
                class=${xa({hidden:!!i})}
                ${L("load",async()=>{e._debugLoadDelay&&await Br(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${L("error",async s=>{e._debugLoadDelay&&await Br(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new o.imageError(s.error))})}
                src=${a}
            />
        `}});function rn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>rn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ui({value:e,allowed:t,blocked:r}){const n=t?rn({input:e,matcher:t}):!0,o=r?rn({input:e,matcher:r}):!1;return n&&!o}function Fi(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ui({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function ud({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=Ze(r,HTMLInputElement),i=r.data,s=t;let l=a.value??"";if(i)if(i.length===1)Ui({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(i));else{const{filtered:c,blocked:u}=Fi({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),s!==l&&o(l)}const _=Fe()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:le(),inputBlocked:le()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Kt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Oi};
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
                ${ke};
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

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${ke};
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
                border-radius: ${ut["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${de["vira-interaction-animation-duration"].value};
            }

            label {
                ${ke};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${ut["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${ji({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ke};
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

            .close-x-button {
                ${ke};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${de["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Fi({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?h`
                  <${k.assign({icon:e.icon})} class="left-side-icon"></${k}>
              `:"",s=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return h`
            <label>
                ${i}
                ${G(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${qa(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${L("input",l=>{ud({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${G(!!(e.showClearButton&&e.value),h`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${L("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${k.assign({icon:zi})}></${k}>
                        </button>
                    `)}
                ${G(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Xe=Fe()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>g`
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
    `,events:{routeChange:le()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(i){e.route&&ei(i)&&(i.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return h`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return h`
                <a href=${i} rel="noopener noreferrer" ${L("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:K,defineElementNoInputs:Ad}=Ga(),Y=K()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>g`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return h`
            <a
                href=${r}
                ${L("click",a=>{(!e.router||ei(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Zt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function dd(e,t){return e.entry.entryType===O.Root?!1:!!(e.entry.entryType===O.Page||ce(t,e.fullUrlBreadcrumbs.slice(0,-1))||ce(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ie=K()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${E["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${E["element-book-nav-hover-background-color"].value};
            color: ${E["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${E["element-book-nav-active-background-color"].value};
            color: ${E["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Y.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${E["element-book-nav-selected-background-color"].value};
            color: ${E["element-book-nav-selected-foreground-color"].value};
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

        ${k} {
            display: inline-flex;
            color: ${E["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!dd(r,e.selectedPath))return;const n=g`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return h`
                <li style=${n}>
                    <${Y.assign({router:e.router,route:{paths:[V.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${xa({"title-row":!0,selected:e.selectedPath?ce(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${G(je(r,O.ElementExample),h`
                                    <${k.assign({icon:Vi})}></${k}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Y}>
                </li>
            `});return h`
            <${Y.assign({route:Ve,router:e.router})}>
                <slot name=${re.NavHeader}>Book</slot>
            </${Y}>
            <ul>
                ${t}
            </ul>
        `}});async function fd(e){await Hr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await ys(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ge=K()({tagName:"book-error",styles:g`
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
    `,renderCallback({inputs:e}){return(tr(e.message,"array")?e.message:[e.message]).map(r=>h`
                <p>${r}</p>
            `)}}),ft=K()({tagName:"book-page-controls",events:{controlValueChange:le()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${E["element-book-page-foreground-faint-level-1-color"].value};
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

        ${_} {
            height: 24px;
            max-width: 128px;
        }

        ${k}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===C.Hidden)return"";const i=hd(e.currentValues[n],o,s=>{const l=tr(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return h`
                    <div class="control-wrapper">
                        ${G(a===0,h`
                                <${k.assign({icon:Sn})}
                                    class="options-icon"
                                ></${k}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${i}
                        </label>
                    </div>
                `}):""}});function hd(e,t,r){return Ae(t,C.Hidden)?"":Ae(t,C.Checkbox)?h`
            <input
                type="checkbox"
                .value=${e}
                ${L("input",n=>{const o=Ze(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ae(t,C.Color)?h`
            <input
                type="color"
                .value=${e}
                ${L("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Ae(t,C.Text)?h`
            <${_.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${L(_.events.valueChange,n=>{r(n.detail)})}
            ></${_}>
        `:Ae(t,C.Number)?h`
            <input
                type="number"
                .value=${e}
                ${L("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Ae(t,C.Dropdown)?h`
            <select
                .value=${e}
                ${L("input",n=>{const o=Ze(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>h`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:h`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Ko=K()({tagName:"book-breadcrumbs",styles:g`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,i=o.slice(0,n+1),s=a?"":h`
                      <span class="spacer">&gt;</span>
                  `;return h`
                <${Y.assign({route:{hash:void 0,search:void 0,paths:[V.Book,...i]},router:e.router})}>
                    ${r}
                </${Y}>
                ${s}
            `}):h`
                &nbsp;
            `}}),Pr=K()({tagName:"book-breadcrumbs-bar",styles:g`
        :host {
            border-bottom: 1px solid
                ${E["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${E["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return h`
            ${G(!!e.currentSearch,h`
                    &nbsp;
                `,h`
                    <${Ko.assign({currentRoute:e.currentRoute,router:e.router})}></${Ko}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${L("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Br(200),n.value===o&&(n.value?t(new Zt({paths:[V.Search,encodeURIComponent(n.value)]})):t(new Zt(Ve)))})}
            />
        `}}),Jo=K()({tagName:"book-entry-description",styles:g`
        :host {
            color: ${E["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${E["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>h`
                <p>${t}</p>
            `)}}),Qo=K()({tagName:"book-page-wrapper",styles:g`
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

        ${Y} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?h`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:h`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[V.Book,...e.pageNode.fullUrlBreadcrumbs],n=ia(e.pageNode.entry.errors);return n&&console.error(n),h`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Y.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Y}>
                    ${n?h`
                              <${ge.assign({message:n.message})}></${ge}>
                          `:h`
                              <${Jo.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Jo}>
                              <${ft.assign({config:e.pageNode.entry.controls,currentValues:yn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ft}>
                          `}
                </div>
            </div>
        `}}),Mt=K()({tagName:"book-element-example-controls",styles:g`
        :host {
            display: flex;
            color: ${E["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[V.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return h`
            <${Y.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Y}>
        `}}),ea=Symbol("unset-internal-state"),ta=K()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:ea},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw ia(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===ea&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return h`
                ${G(!!t.elementExampleNode.entry.styles,h`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),h`
                <${ge.assign({message:`${t.elementExampleNode.entry.title} failed: ${er(n)}`})}></${ge}>
            `}},options:{allowPolymorphicState:!0}}),ra=K()({tagName:"book-element-example-wrapper",styles:g`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
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
        }

        ${Mt} {
            color: ${E["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Mt} {
            color: ${E["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return h`
            <div class="individual-example-wrapper">
                <${Mt.assign(cs(e,["currentPageControls"]))}></${Mt}>
                <${ta.assign(e)}></${ta}>
            </div>
        `}});function Wi(e,t,r,n){const o=Ur(r,n),a=[];if(o){const i=Wi(e,t,o,n);i&&a.push(i)}if(je(r,O.Page)&&!e.includes(r)){const i=yn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:i,breadcrumbs:tt(i,()=>r.fullUrlBreadcrumbs)})}return a.reduce((i,s)=>({config:{...i.config,...s.config},current:{...i.current,...s.current},breadcrumbs:{...i.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function pd({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[h`
                No results
            `];const i=Nn(e,1)?Wi(e,o,e[0],a):void 0,s=i&&Object.values(i.config).length&&Nn(e,1)?h`
                  <${ft.assign({config:i.config,currentValues:i.current,fullUrlBreadcrumbs:i.breadcrumbs})}></${ft}>
              `:"",l=Rs(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(je(c,O.Page))return h`
                    <${Qo.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Qo}>
                `;if(je(c,O.ElementExample)){const d=yn(o,c.fullUrlBreadcrumbs.slice(0,-1));return h`
                    <${ra.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${ra}>
                `}else return je(c,O.Root)?"":h`
                    <${ge.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ge}>
                `});return[s,l].flat()}const He=K()({tagName:"book-entry-display",styles:g`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
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

        ${Pr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${de["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:le()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Fr(e.currentRoute.paths),i=pd({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return h`
            <${Pr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${Pr}>

            ${G(e.showLoading,h`
                    <div
                        ${so(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${k.assign({icon:dt})}></${k}>
                    </div>
                    ${G(!!n.lastElement,h`
                            ${n.lastElement}
                            <slot name=${re.Footer}></slot>
                        `)}
                `,h`
                    <div
                        ${so(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${i}
                    </div>
                    <slot name=${re.Footer}></slot>
                `)}
        `}});function md(e,t,r){const n=na(e,t);if(n.length)return n;r(Ve);const o=na(e,Ve.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function na(e,t){return e.filter(r=>bs({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Rr=Wa()({tagName:"element-book-app",events:{pathUpdate:le()},stateInitStatic:{currentRoute:Ve,router:void 0,loading:!0,colors:{config:void 0,theme:Xo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${E["element-book-page-background-color"].value};
            color: ${E["element-book-page-foreground-color"].value};
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

        ${He} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ie} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{oa(e,Fr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,p,m,b,y;t._debug&&console.info("rendering element-book app");function i($){return{...e.currentRoute,...$}}function s($){const S=i($);return!ce(e.currentRoute,S)}function l($){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,$].filter(nn).join(" - "))}function c($){if(!s($))return;const S=i($);e.router?e.router.setRoutes(S):n({currentRoute:{...e.currentRoute,...S}}),t.elementBookRoutePaths&&!ce(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(S.paths??[]))}try{if(t.elementBookRoutePaths&&!ce(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const M=yc(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,j=>{n({currentRoute:j})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const $={themeColor:t.themeColor};if(!ce($,(f=e.colors)==null?void 0:f.config)){const M=Xo($);n({colors:{config:$,theme:M}}),kc(r,M)}const S=t._debug??!1,P=Yl({entries:t.entries,debug:S});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Ja(P.tree,{children:(m=(p=e.treeBasedControls)==null?void 0:p.controls)==null?void 0:m.children,controls:t.globalValues})}}));const A=Fr(e.currentRoute.paths),te=(A?Ql({flattenedNodes:P.flattenedNodes,searchQuery:A}):void 0)??md(P.flattenedNodes,e.currentRoute.paths,c);l((b=te[0])==null?void 0:b.entry.title);const U=(y=e.treeBasedControls)==null?void 0:y.controls;return U?(t._debug&&console.info({currentControls:U}),h`
                <div
                    class="root"
                    ${L(Zt,async M=>{const j=M.detail;if(!s(j))return;if(n({loading:!0}),c(j),!(r.shadowRoot.querySelector(ie.tagName)instanceof ie))throw new Error(`Failed to find child '${ie.tagName}'`);oa(r,A,e.currentRoute)})}
                    ${L(ft.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const j=Gl(U,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:j}})})}
                >
                    <${ie.assign({flattenedNodes:P.flattenedNodes,router:e.router,selectedPath:A?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${re.NavHeader}
                            slot=${re.NavHeader}
                        ></slot>
                    </${ie}>
                    <${He.assign({controls:U,currentNodes:te,currentRoute:e.currentRoute,debug:S,originalTree:P.tree,router:e.router,showLoading:e.loading})}
                        ${L(He.events.loadingRender,async M=>{await Hr();const j=r.shadowRoot.querySelector(He.tagName);j?j.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${He.tagName}' for scrolling.`),await Hr(),n({loading:!M.detail})})}
                    >
                        <slot
                            name=${re.Footer}
                            slot=${re.Footer}
                        ></slot>
                    </${He}>
                </div>
            `):h`
                    <${ge.assign({message:"Failed to generate page controls."})}></${ge}>
                `}catch($){return console.error($),h`
                <p class="error">${er($)}</p>
            `}}});async function oa(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ie.tagName);if(!(n instanceof ie))throw new Error(`Failed to find child '${ie.tagName}'`);await fd(n)}const Le=be({title:"Elements",parent:void 0}),gd=be({parent:Le,title:H.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:C.Color,initValue:H.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:C.Color,initValue:H.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:C.Color,initValue:H.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:C.Color,initValue:H.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??g``;e({title:r,styles:a,renderCallback({controls:i}){const s=g`
                        ${H.cssVars["vira-button-primary-color"].name}: ${N(i["Primary color"]||"inherit")};
                        ${H.cssVars["vira-button-secondary-color"].name}: ${N(i["Secondary color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-hover-color"].name}: ${N(i["Hover color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-active-color"].name}: ${N(i["Active color"]||"inherit")};
                    `;return h`
                        <${H.assign({text:"hello",...o})}
                            style=${s}
                        ></${H}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Sn}}),t({title:"outline",inputs:{buttonStyle:Ii.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:g`
                ${H} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:g`
                ${H} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:g`
                :host {
                    ${H.cssVars["vira-button-primary-color"].name}: pink;
                    ${H.cssVars["vira-button-secondary-color"].name}: purple;
                    ${H.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${H.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return h`
                    <${H.assign({text:"hello"})}></${H}>
                `}})}}),bd=be({title:we.tagName,parent:Le,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:g`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>h`
                            <${we.assign({expanded:!!r.expandedStates[o]})}
                                ${L(we.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${en.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${L("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${G(!!r.showMoreStates[o],h`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${we}>
                        `)}}),e({title:"wider examples",styles:g`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>h`
                            <${we.assign({expanded:!!r.expandedStates[o]})}
                                ${L(we.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${en.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${L("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${G(!!r.showMoreStates[o],h`
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
                            </${we}>
                        `)}})}}),vd=be({title:k.tagName,parent:Le,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return h`
                    <${k.assign({icon:xe})}></${k}>
                `}}),e({title:"using createColoredIcon",renderCallback(){return h`
                    <${k.assign({icon:ad(xe,{"vira-icon-stroke-color":"red"})})}></${k}>
                `}})}}),yd=be({title:Be.tagName,parent:Le,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:g`
                    border-radius: 32px;
                `,loadingSlot:h`
                    <div
                        style=${g`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${k.assign({icon:dt,fitContainer:!0})}
                            style=${g`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${k}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:g`
                    border-radius: 32px;
                `,errorSlot:h`
                    <div
                        style=${g`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${k.assign({icon:Jt,fitContainer:!0})}
                            style=${g`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${k}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/bolt.png"},styles:g`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/bolt.png",dominantDimension:"height"},styles:g`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:g`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:h`
                    <div
                        style=${g`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${k.assign({icon:dt,fitContainer:!0})}
                            style=${g`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${k}>
                    </div>
                `,errorSlot:h`
                    <div
                        style=${g`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${k.assign({icon:Jt,fitContainer:!0})}
                            style=${g`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${k}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:g`
                    ${Be} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||g``}
                    }

                    ${r.allowReload?g`
                              ${Be} {
                                  cursor: pointer;
                              }

                              ${Be}:hover {
                                  border-color: #0055ff;
                              }
                          `:g``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:r.inputs.imageUrl},renderCallback({state:n,updateState:o}){return h`
                        <${Be.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${L("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${la()}`})})}
                        >
                            ${r.loadingSlot?h`
                                      <div
                                          class="slot-wrapper"
                                          slot=${tn.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?h`
                                      <div class="slot-wrapper" slot=${tn.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${Be}>
                    `}})})}}),wd=be({title:_.tagName,parent:Le,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:C.Color,initValue:_.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:C.Color,initValue:_.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:C.Color,initValue:_.cssVars["vira-input-border-color"].default},"Focus color":{controlType:C.Color,initValue:_.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:C.Color,initValue:_.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:g`
                    ${r||g``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:i,controls:s}){const l={[String(_.cssVars["vira-input-text-color"].name)]:s["Text color"],[String(_.cssVars["vira-input-placeholder-color"].name)]:s["Placeholder color"],[String(_.cssVars["vira-input-border-color"].name)]:s["Border color"],[String(_.cssVars["vira-input-focus-border-color"].name)]:s["Focus color"],[String(_.cssVars["vira-input-text-selection-color"].name)]:s["Selection color"]},c=tt(l,(d,f)=>f||"inherit"),u=Object.entries(c).map(([d,f])=>[d,f].join(": ")+";").join(`
`);return h`
                        <${_.assign({...o,value:a.value})}
                            style=${u}
                            ${L(_.events.valueChange,d=>{i({value:d.detail})})}
                        ></${_}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:xe}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:g`
                ${_} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:xe}}),t({title:"taller height",styles:g`
                ${_} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:xe}}),t({title:"shorter height",styles:g`
                ${_} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:xe}}),t({title:"max width",styles:g`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:g`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),$d=be({title:Xe.tagName,parent:Le,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:C.Color,initValue:""},"Hover color":{controlType:C.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=g`
                        ${Xe.cssVars["vira-link-hover-color"].name}: ${N(o["Hover color"]||"inherit")};
                        color: ${N(o["CSS Color"]||"inherit")};
                    `;return h`
                        <${Xe.assign(n)}
                            style=${a}
                            ${L(Xe.events.routeChange,i=>{console.info(i)})}
                        >
                            My Link
                        </${Xe}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),kd=be({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:C.Color,initValue:""},"Fill Color":{controlType:C.Color,initValue:""},"Stroke Width":{controlType:C.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(cd).forEach(t=>{e({title:t.name,styles:g`
                    :host(:hover) ${k} {
                        background-color: #f2f2f2;
                    }

                    ${k} {
                        padding: 8px;
                        border-radius: ${ut["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=g`
                        ${w["vira-icon-fill-color"].name}: ${N(r["Fill Color"]||"inherit")};
                        ${w["vira-icon-stroke-color"].name}: ${N(r["Stroke Color"]||"inherit")};
                        ${w["vira-icon-stroke-width"].name}: ${N(ca(r["Stroke Width"])||"inherit")};
                    `;return h`
                        <${k.assign({icon:t})} style=${n}></${k}>
                    `}})})}}),Ed=[Le,kd,gd,bd,vd,yd,wd,$d];ar({tagName:"vira-book-app",styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Rr} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,renderCallback(){return h`
            <${Rr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Ed,themeColor:"#33ccff"})}>
                <h1 slot=${re.NavHeader}>Vira</h1>
            </${Rr}>
        `}});
