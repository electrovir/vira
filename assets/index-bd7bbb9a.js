var As=Object.defineProperty;var Rs=(e,t,r)=>t in e?As(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var cr=(e,t,r)=>(Rs(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Ps(e,t){return e.includes(t)}function xe(e){return!!e}function Bs(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Hs={capitalizeFirstLetter:!1};function Ns(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Is(e,t){return t.capitalizeFirstLetter?Ns(e):e}function Os(e,t=Hs){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Is(n,t)}var Fe;(function(e){e.Upper="upper",e.Lower="lower"})(Fe||(Fe={}));function zs(e){return e.toLowerCase()!==e.toUpperCase()}function xn(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!zs(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Fe.Upper&&o!==o.toUpperCase())return!1;if(t===Fe.Lower&&o!==o.toLowerCase())return!1}return!0}function Ds(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0&&a[o-1]||"",i=o<a.length-1&&a[o+1]||"",l=xn(s,Fe.Lower,{blockNoCaseCharacters:!0})||xn(i,Fe.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Vs(e,t){return e.split(t)}const js=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function q(e,t){return e?js.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Vo(e,t){return e&&t.every(r=>q(e,r))}function jo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>bt(r).trim()).join(`
`))}function bt(e){return e?e instanceof Error?e.message:q(e,"message")?String(e.message):String(e):""}function Uo(e){return e instanceof Error?e:new Error(bt(e))}function Us(e){try{const t=e.callback();return t instanceof Promise?t.catch(r=>e.catchCallback?e.catchCallback(r):e.fallbackValue):t}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}function Tr(e){return Array.isArray(e)?"array":typeof e}function X(e,t){return Tr(e)===t}function se(e){return!!e&&typeof e=="object"}function j(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Fo(e,t,r=!1,n={}){const o=j(e),a=new Set(j(t));if(!r){const s=o.filter(i=>!a.has(i));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}a.forEach(s=>{if(!q(e,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function i(u){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${u}`)}const l=e[s],c=t[s];n[s]||Wo(l,c,i,r,n[s]??{})})}function Wo(e,t,r,n,o){var i;const a=typeof e,s=typeof t;a!==s&&r(`type "${a}" did not match expected type "${s}"`);try{q(t,"constructor")&&(!q(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(i=e==null?void 0:e.constructor)==null?void 0:i.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Wo(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${bt(f)}`)}}).filter(xe).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):se(t)&&Fo(e,t,n,o)}function En({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Cn="Failed to compare objects using JSON.stringify";function Sn(e,t,r){return En({source:e,errorHandler(n){if(r)return"";throw n}})===En({source:t,errorHandler(n){if(r)return"";throw n}})}function me(e,t,r={}){try{return e===t?!0:se(e)&&se(t)?Sn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>me(e[o],t[o])):!1:Sn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Uo(n);throw o.message.startsWith(Cn)||(o.message=`${Cn}: ${o.message}`),o}}function Fs(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Ws(e){return j(e).filter(t=>isNaN(Number(t)))}function Ys(e){return Ws(e).map(r=>e[r])}function qs(e,t){return Ys(t).includes(e)}function Gs(e,t){return j(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Xs(e,t){return Gs(e,r=>!t.includes(r))}function fe(e,t){let r=!1;const n=j(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(j(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Tn(e,t){try{return Yo(e,t),!0}catch{return!1}}function Yo(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Gr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Gr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Mr(e){const t=Gr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Zs=globalThis.crypto;function qo(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Zs.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Js({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Ks(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(xe);return t.length?`?${t.join("&")}`:""}function Qs(e){return Js({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=Vs(n,"="),s=a.join("");if(!(!s&&!o))return[o,s]}).filter(xe)}function ei(e,t){const r=X(e,"string")?new URL(e):e,n=Qs(r.search),o=Object.fromEntries(n);return t&&Fo(o,t),o}const ti="px";function Go(e){return ri({value:e,suffix:ti})}function ri({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function ni(e,t){return q(e,"entryType")&&e.entryType===t}var I;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(I||(I={}));function Ie(e,t){return e.controlType===t}var C;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(C||(C={}));const Xo=Symbol("any-type"),oi={[C.Checkbox]:!1,[C.Color]:"",[C.Dropdown]:"",[C.Hidden]:Xo,[C.Number]:0,[C.Text]:""};function ai(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=oi[o.controlType];a!==Xo&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Xr(e,t){const r=Ot(e.title);return e.parent?[...Xr(e.parent,!1),Ot(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Ot(e){return Bs(e).toLowerCase().replaceAll(/\s/g,"-")}function si({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Ee(e){const t={...e,entryType:I.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:I.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(xe)};r.add(n.title),t.elementExamples[Ot(o.title)]=o}}),t}var ae;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ae||(ae={}));async function _r(e=1){const t=Gr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function ii(e){return li(e,1)}async function li(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{Yo(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis,Zr=Pt.ShadowRoot&&(Pt.ShadyCSS===void 0||Pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jr=Symbol(),Mn=new WeakMap;let Zo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Jr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Zr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Mn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Mn.set(r,t))}return t}toString(){return this.cssText}};const N=e=>new Zo(typeof e=="string"?e:e+"",void 0,Jr),Bt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new Zo(r,e,Jr)},ci=(e,t)=>{if(Zr)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Pt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},_n=Zr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return N(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ui,defineProperty:di,getOwnPropertyDescriptor:fi,getOwnPropertyNames:hi,getOwnPropertySymbols:mi,getPrototypeOf:pi}=Object,pe=globalThis,Ln=pe.trustedTypes,gi=Ln?Ln.emptyScript:"",ur=pe.reactiveElementPolyfillSupport,rt=(e,t)=>e,zt={toAttribute(e,t){switch(t){case Boolean:e=e?gi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Kr=(e,t)=>!ui(e,t),An={attribute:!0,type:String,converter:zt,reflect:!1,hasChanged:Kr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),pe.litPropertyMetadata??(pe.litPropertyMetadata=new WeakMap);let je=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=An){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&di(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:a}=fi(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const i=o==null?void 0:o.call(this);a.call(this,s),this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??An}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;const t=pi(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){const r=this.properties,n=[...hi(r),...mi(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(_n(o))}else t!==void 0&&r.push(_n(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ci(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var a;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:zt).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var a;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:zt;this._$Em=o,this[o]=i.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n,o=!1,a){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Kr)(o?a:this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,s]of o)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.C(a,this[a],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(r)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(t){}firstUpdated(t){}};je.elementStyles=[],je.shadowRootOptions={mode:"open"},je[rt("elementProperties")]=new Map,je[rt("finalized")]=new Map,ur==null||ur({ReactiveElement:je}),(pe.reactiveElementVersions??(pe.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=globalThis,Dt=nt.trustedTypes,Rn=Dt?Dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Qr="$lit$",de=`lit$${(Math.random()+"").slice(9)}$`,en="?"+de,bi=`<${en}>`,Re=document,st=()=>Re.createComment(""),it=e=>e===null||typeof e!="object"&&typeof e!="function",Jo=Array.isArray,Ko=e=>Jo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",dr=`[ 	
\f\r]`,Je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pn=/-->/g,Bn=/>/g,Ce=RegExp(`>|${dr}(?:([^\\s"'>=/]+)(${dr}*=${dr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hn=/'/g,Nn=/"/g,Qo=/^(?:script|style|textarea|title)$/i,vi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),yi=vi(1),ne=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),In=new WeakMap,Le=Re.createTreeWalker(Re,129);function ea(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rn!==void 0?Rn.createHTML(t):t}const ta=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Je;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Je?u[1]==="!--"?s=Pn:u[1]!==void 0?s=Bn:u[2]!==void 0?(Qo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Ce):u[3]!==void 0&&(s=Ce):s===Ce?u[0]===">"?(s=o??Je,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Ce:u[3]==='"'?Nn:Hn):s===Nn||s===Hn?s=Ce:s===Pn||s===Bn?s=Je:(s=Ce,o=void 0);const m=s===Ce&&e[i+1].startsWith("/>")?" ":"";a+=s===Je?l+bi:d>=0?(n.push(c),l.slice(0,d)+Qr+l.slice(d)+de+m):l+de+(d===-2?i:m)}return[ea(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class lt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=ta(t,r);if(this.el=lt.createElement(c,n),Le.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Le.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Qr)){const f=u[s++],m=o.getAttribute(d).split(de),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:g[2],strings:m,ctor:g[1]==="."?na:g[1]==="?"?oa:g[1]==="@"?aa:vt}),o.removeAttribute(d)}else d.startsWith(de)&&(l.push({type:6,index:a}),o.removeAttribute(d));if(Qo.test(o.tagName)){const d=o.textContent.split(de),f=d.length-1;if(f>0){o.textContent=Dt?Dt.emptyScript:"";for(let m=0;m<f;m++)o.append(d[m],st()),Le.nextNode(),l.push({type:2,index:++a});o.append(d[f],st())}}}else if(o.nodeType===8)if(o.data===en)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(de,d+1))!==-1;)l.push({type:7,index:a}),d+=de.length-1}a++}}static createElement(t,r){const n=Re.createElement("template");return n.innerHTML=t,n}}function Pe(e,t,r=e,n){var s,i;if(t===ne)return t;let o=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const a=it(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((i=o==null?void 0:o._$AO)==null||i.call(o,!1),a===void 0?o=void 0:(o=new a(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Pe(e,o._$AS(e,t.values),o,n)),t}class ra{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Re).importNode(r,!0);Le.currentNode=o;let a=Le.nextNode(),s=0,i=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Ye(a,a.nextSibling,this,t):l.type===1?c=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(c=new sa(a,this,t)),this._$AV.push(c),l=n[++i]}s!==(l==null?void 0:l.index)&&(a=Le.nextNode(),s++)}return Le.currentNode=Re,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Ye{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Pe(this,t,r),it(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==ne&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ko(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&it(this._$AH)?this._$AA.nextSibling.data=t:this.$(Re.createTextNode(t)),this._$AH=t}g(t){var a;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=lt.createElement(ea(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(r);else{const s=new ra(o,this),i=s.u(this.options);s.p(r),this.$(i),this._$AH=s}}_$AC(t){let r=In.get(t.strings);return r===void 0&&In.set(t.strings,r=new lt(t)),r}T(t){Jo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Ye(this.k(st()),this.k(st()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,a){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=Pe(this,t,r,0),s=!it(t)||t!==this._$AH&&t!==ne,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Pe(this,i[n+l],r,l),c===ne&&(c=this._$AH[l]),s||(s=!it(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.O(t)}O(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class na extends vt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===P?void 0:t}}class oa extends vt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}}class aa extends vt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){if((t=Pe(this,t,r,0)??P)===ne)return;const n=this._$AH,o=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,a=t!==P&&(n===P||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class sa{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Pe(this,t)}}const wi={j:Qr,P:de,A:en,C:1,M:ta,L:ra,R:Ko,V:Pe,D:Ye,I:vt,H:oa,N:aa,U:na,B:sa},fr=nt.litHtmlPolyfillSupport;fr==null||fr(lt,Ye),(nt.litHtmlVersions??(nt.litHtmlVersions=[])).push("3.1.0");const $i=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const a=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new Ye(t.insertBefore(st(),a),a,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class extends je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$i(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ne}};var Do;ot._$litElement$=!0,ot.finalized=!0,(Do=globalThis.litElementHydrateSupport)==null||Do.call(globalThis,{LitElement:ot});const hr=globalThis.litElementPolyfillSupport;hr==null||hr({LitElement:ot});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qe=e=>(...t)=>({_$litDirective$:e,values:t});class Be{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:ki}=wi,On=()=>document.createComment(""),Ke=(e,t,r)=>{var a;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=n.insertBefore(On(),o),i=n.insertBefore(On(),o);r=new ki(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(a=r._$AQ)==null||a.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==o||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;n.insertBefore(c,o),c=u}}}return r},Se=(e,t,r=e)=>(e._$AI(t,r),e),xi={},Ei=(e,t=xi)=>e._$AH=t,Ci=e=>e._$AH,mr=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ia=qe(class extends Be{constructor(e){var t;if(super(e),e.type!==Qt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!((n=this.st)!=null&&n.has(a))&&this.it.add(a);return this.render(t)}const r=e.element.classList;for(const a of this.it)a in t||(r.remove(a),this.it.delete(a));for(const a in t){const s=!!t[a];s===this.it.has(a)||(o=this.st)!=null&&o.has(a)||(s?(r.add(a),this.it.add(a)):(r.remove(a),this.it.delete(a)))}return ne}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Si=qe(class extends Be{constructor(e){if(super(e),e.type!==Qt.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,n]){const o=Ci(e),{values:a,keys:s}=this.ht(t,r,n);if(!Array.isArray(o))return this.dt=s,a;const i=this.dt??(this.dt=[]),l=[];let c,u,d=0,f=o.length-1,m=0,g=a.length-1;for(;d<=f&&m<=g;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(i[d]===s[m])l[m]=Se(o[d],a[m]),d++,m++;else if(i[f]===s[g])l[g]=Se(o[f],a[g]),f--,g--;else if(i[d]===s[g])l[g]=Se(o[d],a[g]),Ke(e,l[g+1],o[d]),d++,g--;else if(i[f]===s[m])l[m]=Se(o[f],a[m]),Ke(e,o[d],o[f]),f--,m++;else if(c===void 0&&(c=zn(s,m,g),u=zn(i,d,f)),c.has(i[d]))if(c.has(i[f])){const y=u.get(s[m]),k=y!==void 0?o[y]:null;if(k===null){const $=Ke(e,o[d]);Se($,a[m]),l[m]=$}else l[m]=Se(k,a[m]),Ke(e,o[d],k),o[y]=null;m++}else mr(o[f]),f--;else mr(o[d]),d++;for(;m<=g;){const y=Ke(e,l[g+1]);Se(y,a[m]),l[m++]=y}for(;d<=f;){const y=o[d++];y!==null&&mr(y)}return this.dt=s,Ei(e,l),ne}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Lr extends Be{constructor(t){if(super(t),this.et=P,t.type!==Qt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.vt=void 0,this.et=t;if(t===ne)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Lr.directiveName="unsafeHTML",Lr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Dn extends Lr{}Dn.directiveName="unsafeSVG",Dn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ti(e,t,r){return e?t(e):r==null?void 0:r(e)}class la extends ot{}function He(e){if(se(e))return fe(e,(r,n)=>{if(!X(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Ds(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?N(r):r.startsWith("-")?Bt`-${N(r)}`:Bt`--${N(r)}`;return{name:s,value:Bt`var(${s}, ${N(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${He.name}' function.`)}function Mi({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i={attribute:!0,type:String,converter:zt,reflect:!1,hasChanged:Kr},Li=(e=_i,t,r)=>{const{kind:n,metadata:o}=r;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(i){const l=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,l,e)},init(i){return i!==void 0&&this.C(s,void 0,e),i}}}if(n==="setter"){const{name:s}=r;return function(i){const l=this[s];t.call(this,i),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function ca(e){return(t,r)=>typeof r=="object"?Li(e,t,r):((n,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(o,a):void 0})(e,t,r)}function Ai(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Ar(e){return q(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function tn(e){return q(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ua(e){return e.map(t=>Ar(t)?t.definition:t).filter(t=>tn(t))}const da=new WeakMap;function Ri(e,t){var o;const r=ua(t);return(o=fa(da,[e,...r]).value)==null?void 0:o.template}function Pi(e,t,r){const n=ua(t);return ma(da,[e,...n],r)}function fa(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ha(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?fa(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ha(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function ma(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=ha(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),ma(l,t,r,n+1)}const Bi=new WeakMap;function pa(e,t,r){const n=Ri(e,t),o=n??r();if(!n){const i=Pi(e,t,o);if(i.result)Bi.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=Ai(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function ga(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],m=u-1,g=t[m];n&&n(c);let y,k=[];if(typeof f=="string"&&(y=r(f,c,g),y)){o[d]=f+y.replacement,s.push(m);const T=y.getExtraValues;k=T?T(g):[],k.length&&T?(o[d]+=" ",k.forEach((R,A)=>{A&&o.push(" ")}),i.push(R=>{const A=R[m],z=T(A);return{index:m,values:z}}),o.push(c)):o[d]+=c}y||o.push(c);const $=e.raw[u];y?(a[d]=a[d]+y.replacement+$,k.length&&k.forEach(()=>{a.push("")})):a.push($)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function Hi(...[e,t,r]){if(tn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Ni(e,t){return ga(e,t,Hi)}function p(e,...t){const r=pa(e,t,()=>Ni(e,t));return Bt(r.strings,...r.values)}const rn=Symbol("key for ignoring inputs not having been set yet"),Ii={[rn]:!0,allowPolymorphicState:!1};function ba(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof la?!0:ba(r)}function va(e,t){const r=e.instanceState;j(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&j(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Oi(e)}function Oi(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Vn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class zi extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function nn(){return e=>{var t;return t=class extends zi{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function he(){return nn()}function Di(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=nn()([e,n].join("-"));return r[n]=o,r},{}):{}}const Vi="_elementVirStateSetup";function ji(e){return se(e)?Vi in e:!1}function Ui(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Tr(e)===Tr(t)&&r}const ya=Symbol("and"),wa=Symbol("or"),$a=Symbol("exact"),ka=Symbol("enum"),on=Symbol("unknown"),xa="__vir__shape__definition__key__do__not__use__in__actual__objects";function Ea(e){return q(e,xa)}const Ca="__vir__shape__specifier__key__do__not__use__in__actual__objects",Fi=[ya,wa,$a,ka,on];function Wi(){return Yi([],on)}function er(e){return yt(e,wa)}function an(e){return yt(e,ya)}function sn(e){return yt(e,$a)}function ln(e){return yt(e,ka)}function cn(e){return yt(e,on)}function yt(e,t){const r=tr(e);return!!r&&r.specifierType===t}function Yi(e,t){return{[Ca]:!0,specifierType:t,parts:e}}function Ht(e,t){const r=tr(t);if(r){if(an(r))return r.parts.every(n=>Ht(e,n));if(er(r))return r.parts.some(n=>Ht(e,n));if(sn(r))return se(e)?Ht(e,r.parts[0]):e===r.parts[0];if(ln(r))return Object.values(r.parts[0]).some(n=>n===e);if(cn(r))return!0}return Ui(e,t)}function tr(e){if(se(e)&&q(e,Ca)){if(!q(e,"parts")||!X(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!q(e,"specifierType")||!Ps(Fi,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Rr(e,t=!1){return Pr(e)}function Pr(e){const t=tr(e);if(t){if(er(t)||sn(t))return Pr(t.parts[0]);if(an(t))return t.parts.reduce((r,n)=>Object.assign(r,Pr(n)),{});if(ln(t))return Object.values(t.parts[0])[0];if(cn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Ea(e)?Rr(e.shape):e instanceof RegExp||X(e,"array")?e:se(e)?fe(e,(r,n)=>Rr(n)):e}function qi(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Rr(e),[xa]:!0}}class te extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Gi(e,t,r={}){try{return Xi(e,t,r),!0}catch{return!1}}function Xi(e,t,r={}){Me(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Sa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Me(e,t,r,n){if(cn(t))return!0;if(Ea(t))return Me(e,t.shape,r,n);const o=Sa(r);if(tr(e))throw new te(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Ht(e,t))throw new te(`Subject does not match shape definition at key ${o}`);if(X(t,"function"))return X(e,"function");if(se(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(er(t))l=t.parts.some(c=>{try{const u=Me(e,c,r,{...n});return Object.assign(i,u),!0}catch(u){if(u instanceof te)return!1;throw u}});else if(an(t))l=t.parts.every(c=>{try{const u=Me(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof te)return!1;throw u}});else if(sn(t)){const c=Me(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(ln(t))throw new te(`Cannot compare an enum specifier to an object at ${o}`);if(X(t,"array")&&X(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return Me(c,f,[...r,u],n),!0}catch(m){if(m instanceof te)return!1;throw m}});return i[u]=d,d});else{const c=Zi({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(i).filter(d=>!i[d]).join(",")}`;throw new te(u)}return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new te(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function Zi({keys:e,options:t,shape:r,subject:n}){const o=Sa(e),a={};if(se(r)){const s=new Set(j(n)),i=new Set(j(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new te(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=er(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new te(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];Me(c,u,[...e,l],t),a[l]=!0})}else throw new te(`shape definition at ${o} was not an object.`);return a}const Ji=qi({addListener(){return!1},removeListener(){return!1},value:Wi()});function pr(e){return Gi(e,Ji,{allowExtraKeys:!0})}function Ki(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function jn(e,t){const r=e;function n(s){t?Ki(s,e,e.tagName):ca()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=ji(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(g){s[i]=g,r[i]=g}const f=e.observablePropertyListenerMap[i];if(u!==c&&pr(u)&&(f!=null&&f.length)&&u.removeListener(f),pr(c))if(f)c.addListener(f);else{let g=function(){e.requestUpdate()};var m=g;e.observablePropertyListenerMap[i]=g,c.addListener(g)}else pr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Qi(e){return e?fe(e,t=>t):{}}function el({hostClassNames:e,cssVars:t}){return{hostClasses:fe(e,(r,n)=>({name:N(n),selector:N(`:host(.${n})`)})),cssVars:t}}function tl({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&j(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function rl(e,t){function r(o){j(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var nl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function rr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Ii,...e.options},n=Di(e.tagName,e.events),o=Qi(e.hostClasses);e.hostClasses&&Vn(e.tagName,e.hostClasses),e.cssVars&&Vn(e.tagName,e.cssVars);const a=e.cssVars?He(e.cssVars):{},s=typeof e.styles=="function"?e.styles(el({hostClassNames:o,cssVars:a})):e.styles||p``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends la{createRenderParams(){return rl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{ba(this)&&!this._haveInputsBeenSet&&!r[rn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${rr.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return tl({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Uo(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){va(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=jn(this,!1),this.instanceState=jn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};j(u).forEach(f=>{ca()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},nl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Os(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Ta(){return e=>rr({...e,options:{[rn]:!1,...e.options}})}function Ma(e,t){return ct(e,t),e.element}function ol(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ct(e,t){const r=ol(e),n=r?`: in ${r}`:"";if(e.type!==Qt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function al(e,t){return t?Un(e,t):Un(void 0,e)}const Un=qe(class extends Be{constructor(e){super(e),this.element=Ma(e,"assign")}render(e,t){return va(this.element,t),ne}});function L(e,t){return sl(e,t)}const sl=qe(class extends Be{constructor(e){super(e),this.element=Ma(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ne}}),Fn="onDomCreated",Wn=qe(class extends Be{constructor(e){super(e),ct(e,Fn)}update(e,[t]){ct(e,Fn);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),gr="onResize",_a=qe(class extends Be{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),ct(e,gr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${gr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){ct(e,gr),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function J(e,t,r){return Ti(e,()=>t,()=>r)}function La(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Ta()(r(n))),defineElementNoInputs:n=>(t(n),rr(r(n)))}}function il(...[e,t,r]){const n=Ar(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=tn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Ar(c)?c.inputs:void 0;return[o&&u?al(u):void 0].filter(xe)}}}function ll(e){}function cl(e){return ga(e.strings,e.values,il,ll)}function h(e,...t){const r=yi(e,...t),n=pa(e,t,()=>cl(r));return{...r,strings:n.strings,values:n.values}}const ul={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},dl=Object.keys(ul),fl=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...dl,...fl];function et(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const hl={[I.ElementExample]:()=>[],[I.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...ai(e.controls,e.title)].filter(xe),[I.Root]:()=>[]},Vt="_isBookTreeNode",Aa=new Map;function ml(e){return Aa.get(e)}function pl(e,t){Fs(Aa,e,()=>t)}function Ue(e,t){return!!(Ra(e)&&e.entry.entryType===t)}function Ra(e){return!!(Vo(e,[Vt,"entry"])&&e[Vt])}function gl(){return{[Vt]:!0,entry:{entryType:I.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function bl({entries:e,debug:t}){const r=ml(e);if(r)return r;const n=gl();e.forEach(s=>un({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Pa(n),a={tree:n,flattenedNodes:o};return pl(e,a),t&&console.info("element-book tree:",n),a}function vl(e,t,r){if(!t.parent)return e;const n=Br(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),un({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Br(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Xr(t,!1)}`);return o}function un({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=hl[t.entryType](t);t.errors.push(...o);const a=vl(e,t,r),s=Ot(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Vt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,ni(t,I.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>un({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Br(e,t){const r=Ra(e)?e.fullUrlBreadcrumbs.slice(0,-1):Xr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Pa(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Pa(o));return[e,...r].flat()}function dn(e,t){return fn(e,["",...t],void 0)}function fn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&fn(a,n,r);return{...e.controls,...s}}function yl(e,t,r){const n={...e};return fn(n,["",...t],r),n}function Ba(e,t){const r=(t==null?void 0:t.controls)||(Ue(e,I.Page)?fe(e.entry.controls,(o,a)=>a.initValue):{});return{children:fe(e.children,(o,a)=>{var s;return Ba(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function wl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const $l=qo(32);function Nt(e){return e.join($l)}function Ha(e){if(!e.length)return[];const t=Nt(e),r=Ha(e.slice(0,-1));return[t,...r]}const kl=["error","errors"];function xl(e){return kl.includes(e)}function El({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Nt(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&xl(t),s=Nt(o.fullUrlBreadcrumbs);if(wl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=Ha(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=Nt(o.fullUrlBreadcrumbs),s=r[a];if(!X(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var V;(function(e){e.Search="search",e.Book="book"})(V||(V={}));function Hr(e){return e[0]===V.Book?"":e[1]?decodeURIComponent(e[1]):""}const We={hash:void 0,paths:[V.Book],search:void 0},Cl=0;function Na(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Cl)}class nr extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Yn extends nr{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const ut="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Sl=globalThis.history.pushState;function qn(...e){const t=Sl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ut)),t}const Tl=globalThis.history.replaceState;function Gn(...e){const t=Tl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ut)),t}function Ml(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===qn)throw new Yn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Gn)throw new Yn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=qn,globalThis.history.replaceState=Gn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ut))})}}function _l(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?ei(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function Ia(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Oa({routeBase:e,windowPath:t}){if(!e)return"";const r=Ia(e);if(za({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Oa({routeBase:n,windowPath:t}):""}function za({routeBase:e,windowPath:t}){const r=Ia(e);return r?t.startsWith(`/${r}`):!1}class Ll extends nr{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Da(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Xn=6;function Zn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Xn)throw new Ll(`Route sanitization depth has exceed the max of ${Xn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Da(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class br extends nr{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Al(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new br(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new br(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new br(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Rl(e,t,r=!1){const n=Va(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Va(e,t){var i;const r=za({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Ks(e.search):"",o=(i=e.hash)!=null&&i.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(xe).join("/")}${n}${a}`}function Pl(e={}){Al(e),Ml();const t=e.routeBase?Oa({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Zn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Da(l,u)))return Rl(u,t,s)},createRoutesUrl(a){return Va(a,t)},getCurrentRawRoutes(){return _l(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new nr(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(ut,n),r=!0),a&&Zn(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(ut,n),r=!1),s},sanitizationDepth:0};return o}function Bl(e){return Pl({routeBase:e,routeSanitizer(t){return{paths:Hl(t.paths),hash:void 0,search:void 0}}})}function Hl(e){const t=e[0];if(qs(t,V)){if(t===V.Book)return[V.Book,...e.slice(1)];if(t===V.Search)return e[1]?[t,e[1]]:[V.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return We.paths}const x=He({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Nl={nav:{hover:{background:x["element-book-nav-hover-background-color"],foreground:x["element-book-nav-hover-foreground-color"]},active:{background:x["element-book-nav-active-background-color"],foreground:x["element-book-nav-active-foreground-color"]},selected:{background:x["element-book-nav-selected-background-color"],foreground:x["element-book-nav-selected-foreground-color"]}},accent:{icon:x["element-book-accent-icon-color"]},page:{background:x["element-book-page-background-color"],backgroundFaint1:x["element-book-page-background-faint-level-1-color"],backgroundFaint2:x["element-book-page-background-faint-level-2-color"],foreground:x["element-book-page-foreground-color"],foregroundFaint1:x["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:x["element-book-page-foreground-faint-level-2-color"]}};function Il(e,t){ja(e,t,Nl)}function Nr(e){return q(e,"_$cssResult$")}function Jn(e){return Vo(e,["name","value","default"])&&X(e.default,"string")&&Nr(e.name)&&Nr(e.value)}function ja(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Nr(o)){if(!Jn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Mi({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Jn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ja(e,o,a)}})}function B(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function wt(e){return ge(e)==="string"}function ge(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function jt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ua(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Fa(e){return e[e.length-1]}function Ut(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Wa(e,t,r){return(r-e)/(t-e)}function hn(e,t,r){return Ut(t[0],t[1],Wa(e[0],e[1],r))}function Ya(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Ol=Object.freeze({__proto__:null,interpolate:Ut,interpolateInv:Wa,isString:wt,last:Fa,mapRange:hn,multiplyMatrices:B,parseCoordGrammar:Ya,parseFunction:Ua,toPrecision:jt,type:ge});class zl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ve=new zl;var ie={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const re={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ir(e){return Array.isArray(e)?e:re[e]}function Ft(e,t,r,n={}){if(e=Ir(e),t=Ir(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ve.run("chromatic-adaptation-start",o),o.M||(o.W1===re.D65&&o.W2===re.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===re.D50&&o.W2===re.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ve.run("chromatic-adaptation-end",o),o.M)return B(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Dl=75e-6,W=class W{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?W.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ir(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Vl(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ve.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Dl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Kn(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Kn(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=W.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=W.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(W.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof W)return t;if(ge(t)==="string"){let o=W.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return W.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ge(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=W.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ge(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=W.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};cr(W,"registry",{}),cr(W,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=W;function Vl(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Kn(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ya(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=hn(i,l,a)),a=jt(a,o),c&&(a+=c),a})}return e}var K=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class U extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=K),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=B(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ft(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Ft(this.base.white,this.white,r),B(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function qa(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(ve.run("parse-start",r),r.color)return r.color;if(r.parsed=Ua(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let m=f.getFormat("color");if(m&&(c===m.id||(o=m.ids)!=null&&o.includes(c))){const g=Object.keys(f.coords).map((y,k)=>r.parsed.args[k]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:g,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Fa(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,m;return u.coordGrammar&&(m=Object.entries(c.coords).map(([g,y],k)=>{var oe;let $=u.coordGrammar[k],T=(oe=f[k])==null?void 0:oe.type,R=$.find(F=>F==T);if(!R){let F=y.name||g;throw new TypeError(`${T} not allowed for ${F} in ${l}()`)}let A=R.range;T==="<percentage>"&&(A||(A=[0,1]));let z=y.range||y.refRange;return A&&z&&(f[k]=hn(A,z,f[k])),R})),t&&Object.assign(t,{formatId:u.name,types:m}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function E(e){if(!e)throw new TypeError("Empty color reference");wt(e)&&(e=qa(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function $t(e,t){return t=b.get(t),t.from(e)}function Q(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return $t(e,r)[n]}function Ga(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function ye(e,t,r){if(e=E(e),arguments.length===2&&ge(arguments[1])==="object"){let n=arguments[1];for(let o in n)ye(e,o,n[o])}else{typeof r=="function"&&(r=r(Q(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=$t(e,n);a[o]=r,Ga(e,n,a)}return e}var mn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:K,fromBase:e=>Ft(K.white,"D50",e),toBase:e=>Ft("D50",K.white,e),formats:{color:{}}});const jl=216/24389,Qn=24/116,Et=24389/27;let vr=re.D50;var Y=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:vr,base:mn,fromBase(e){let r=e.map((n,o)=>n/vr[o]).map(n=>n>jl?Math.cbrt(n):(Et*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Qn?Math.pow(t[0],3):(116*t[0]-16)/Et,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Et,t[2]>Qn?Math.pow(t[2],3):(116*t[2]-16)/Et].map((n,o)=>n*vr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function or(e){return(e%360+360)%360}function Ul(e,t){if(e==="raw")return t;let[r,n]=t.map(or),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var dt=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Y,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),or(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const eo=25**7,Wt=Math.PI,to=180/Wt,Oe=Wt/180;function Or(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=Y.from(e),l=dt.from(Y,[a,s,i])[1],[c,u,d]=Y.from(t),f=dt.from(Y,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let g=((l+f)/2)**7,y=.5*(1-Math.sqrt(g/(g+eo))),k=(1+y)*s,$=(1+y)*u,T=Math.sqrt(k**2+i**2),R=Math.sqrt($**2+d**2),A=k===0&&i===0?0:Math.atan2(i,k),z=$===0&&d===0?0:Math.atan2(d,$);A<0&&(A+=2*Wt),z<0&&(z+=2*Wt),A*=to,z*=to;let oe=c-a,F=R-T,M=z-A,O=A+z,ir=Math.abs(M),Xe;T*R===0?Xe=0:ir<=180?Xe=M:M>180?Xe=M-360:M<-180?Xe=M+360:console.log("the unthinkable has happened");let vn=2*Math.sqrt(R*T)*Math.sin(Xe*Oe/2),Ss=(a+c)/2,lr=(T+R)/2,yn=Math.pow(lr,7),ce;T*R===0?ce=O:ir<=180?ce=O/2:O<360?ce=(O+360)/2:ce=(O-360)/2;let wn=(Ss-50)**2,Ts=1+.015*wn/Math.sqrt(20+wn),$n=1+.045*lr,Ze=1;Ze-=.17*Math.cos((ce-30)*Oe),Ze+=.24*Math.cos(2*ce*Oe),Ze+=.32*Math.cos((3*ce+6)*Oe),Ze-=.2*Math.cos((4*ce-63)*Oe);let kn=1+.015*lr*Ze,Ms=30*Math.exp(-1*((ce-275)/25)**2),_s=2*Math.sqrt(yn/(yn+eo)),Ls=-1*Math.sin(2*Ms*Oe)*_s,xt=(oe/(r*Ts))**2;return xt+=(F/(n*$n))**2,xt+=(vn/(o*kn))**2,xt+=Ls*(F/(n*$n))*(vn/(o*kn)),Math.sqrt(xt)}const Fl=75e-6;function at(e,t=e.space,{epsilon:r=Fl}={}){e=E(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ft(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function we(e,{method:t=ie.gamut_mapping,space:r=e.space}={}){if(wt(arguments[1])&&(r=arguments[1]),r=b.get(r),at(e,r,{epsilon:0}))return E(e);let n=Z(e,r);if(t!=="clip"&&!at(e,r)){let o=we(ft(n),{method:"clip",space:r});if(Or(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=Z(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,m=Q(l,i);for(;m-f>d;){let g=ft(l);g=we(g,{space:r,method:"clip"}),Or(l,g)-2<d?f=Q(l,i):m=Q(l,i),ye(l,i,(f+m)/2)}n=Z(l,r)}else n=o}if(t==="clip"||!at(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=Z(n,e.space)),e.coords=n.coords,e}we.returns="color";function Z(e,t,{inGamut:r}={}){e=E(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=we(o)),o}Z.returns="color";function Yt(e,{precision:t=ie.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=E(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!at(e)&&(i=we(ft(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(m=>jt(m,t)));let u=[...i];if(c==="color"){let m=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(m)}let d=e.alpha;t!==null&&(d=jt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Wl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Yl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ar=new U({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Wl,fromXYZ_M:Yl,formats:{color:{}}});const Ct=1.09929682680944,ro=.018053968510807;var Xa=new U({id:"rec2020",name:"REC.2020",base:ar,toBase(e){return e.map(function(t){return t<ro*4.5?t/4.5:Math.pow((t+Ct-1)/Ct,1/.45)})},fromBase(e){return e.map(function(t){return t>=ro?Ct*Math.pow(t,.45)-(Ct-1):4.5*t})},formats:{color:{}}});const ql=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Gl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Za=new U({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:ql,fromXYZ_M:Gl});const Xl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Zl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ja=new U({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Xl,fromXYZ_M:Zl,formats:{color:{}}}),no={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let oo=Array(3).fill("<percentage> | <number>[0, 255]"),ao=Array(3).fill("<number>[0, 255]");var ht=new U({id:"srgb",name:"sRGB",base:Ja,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:oo},rgb_number:{name:"rgb",commas:!0,coords:ao,noAlpha:!0},color:{},rgba:{coords:oo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ao},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=no.black,t.alpha=0):t.coords=no[e],t.coords)return t}}}}),Ka=new U({id:"p3",name:"P3",base:Za,fromBase:ht.fromBase,toBase:ht.toBase,formats:{color:{id:"display-p3"}}});ie.display_space=ht;if(typeof CSS<"u"&&CSS.supports)for(let e of[Y,Xa,Ka]){let t=e.getMinCoords(),n=Yt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ie.display_space=e;break}}function Jl(e,{space:t=ie.display_space,...r}={}){let n=Yt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ie.display_space)n=new String(n),n.color=e;else{let o=Z(e,t);n=new String(Yt(o,r)),n.color=o}return n}function Qa(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Kl(e,t){return e=E(e),t=E(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function $e(e){return Q(e,[K,"y"])}function es(e,t){ye(e,[K,"y"],t)}function Ql(e){Object.defineProperty(e.prototype,"luminance",{get(){return $e(this)},set(t){es(this,t)}})}var ec=Object.freeze({__proto__:null,getLuminance:$e,register:Ql,setLuminance:es});function tc(e,t){e=E(e),t=E(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const rc=.56,nc=.57,oc=.62,ac=.65,so=.022,sc=1.414,ic=.1,lc=5e-4,cc=1.14,io=.027,uc=1.14;function lo(e){return e>=so?e:e+(so-e)**sc}function ze(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function dc(e,t){t=E(t),e=E(e);let r,n,o,a,s,i;t=Z(t,"srgb"),[a,s,i]=t.coords;let l=ze(a)*.2126729+ze(s)*.7151522+ze(i)*.072175;e=Z(e,"srgb"),[a,s,i]=e.coords;let c=ze(a)*.2126729+ze(s)*.7151522+ze(i)*.072175,u=lo(l),d=lo(c),f=d>u;return Math.abs(d-u)<lc?n=0:f?(r=d**rc-u**nc,n=r*cc):(r=d**ac-u**oc,n=r*uc),Math.abs(n)<ic?o=0:n>0?o=n-io:o=n+io,o*100}function fc(e,t){e=E(e),t=E(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const hc=5e4;function mc(e,t){e=E(e),t=E(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);return n>r&&([r,n]=[n,r]),n===0?hc:(r-n)/n}function pc(e,t){e=E(e),t=E(t);let r=Q(e,[Y,"l"]),n=Q(t,[Y,"l"]);return Math.abs(r-n)}const gc=216/24389,co=24/116,St=24389/27;let yr=re.D65;var zr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:yr,base:K,fromBase(e){let r=e.map((n,o)=>n/yr[o]).map(n=>n>gc?Math.cbrt(n):(St*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>co?Math.pow(t[0],3):(116*t[0]-16)/St,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/St,t[2]>co?Math.pow(t[2],3):(116*t[2]-16)/St].map((n,o)=>n*yr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const wr=Math.pow(5,.5)*.5+.5;function bc(e,t){e=E(e),t=E(t);let r=Q(e,[zr,"l"]),n=Q(t,[zr,"l"]),o=Math.abs(Math.pow(r,wr)-Math.pow(n,wr)),a=Math.pow(o,1/wr)*Math.SQRT2-40;return a<7.5?0:a}var It=Object.freeze({__proto__:null,contrastAPCA:dc,contrastDeltaPhi:bc,contrastLstar:pc,contrastMichelson:fc,contrastWCAG21:tc,contrastWeber:mc});function vc(e,t,r={}){wt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(It).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=E(e),t=E(t);for(let a in It)if("contrast"+n.toLowerCase()===a.toLowerCase())return It[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function ts(e){let[t,r,n]=$t(e,K),o=t+15*r+3*n;return[4*t/o,9*r/o]}function rs(e){let[t,r,n]=$t(e,K),o=t+r+n;return[t/o,r/o]}function yc(e){Object.defineProperty(e.prototype,"uv",{get(){return ts(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return rs(this)}})}var wc=Object.freeze({__proto__:null,register:yc,uv:ts,xy:rs});function $c(e,t){return Qa(e,t,"lab")}const kc=Math.PI,uo=kc/180;function xc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=Y.from(e),[,i,l]=dt.from(Y,[o,a,s]),[c,u,d]=Y.from(t),f=dt.from(Y,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let m=o-c,g=i-f,y=a-u,k=s-d,$=y**2+k**2-g**2,T=.511;o>=16&&(T=.040975*o/(1+.01765*o));let R=.0638*i/(1+.0131*i)+.638,A;Number.isNaN(l)&&(l=0),l>=164&&l<=345?A=.56+Math.abs(.2*Math.cos((l+168)*uo)):A=.36+Math.abs(.4*Math.cos((l+35)*uo));let z=Math.pow(i,4),oe=Math.sqrt(z/(z+1900)),F=R*(oe*A+1-oe),M=(m/(r*T))**2;return M+=(g/(n*R))**2,M+=$/F**2,Math.sqrt(M)}const fo=203;var pn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:K,fromBase(e){return e.map(t=>Math.max(t*fo,0))},toBase(e){return e.map(t=>Math.max(t/fo,0))}});const Tt=1.15,Mt=.66,ho=2610/2**14,Ec=2**14/2610,mo=3424/2**12,po=2413/2**7,go=2392/2**7,Cc=1.7*2523/2**5,bo=2**5/(1.7*2523),_t=-.56,$r=16295499532821565e-27,Sc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Tc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Mc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],_c=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ns=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:pn,fromBase(e){let[t,r,n]=e,o=Tt*t-(Tt-1)*n,a=Mt*r-(Mt-1)*t,i=B(Sc,[o,a,n]).map(function(f){let m=mo+po*(f/1e4)**ho,g=1+go*(f/1e4)**ho;return(m/g)**Cc}),[l,c,u]=B(Mc,i);return[(1+_t)*l/(1+_t*l)-$r,c,u]},toBase(e){let[t,r,n]=e,o=(t+$r)/(1+_t-_t*(t+$r)),s=B(_c,[o,r,n]).map(function(f){let m=mo-f**bo,g=go*f**bo-po;return 1e4*(m/g)**Ec}),[i,l,c]=B(Tc,s),u=(i+(Tt-1)*c)/Tt,d=(l+(Mt-1)*u)/Mt;return[u,d,c]},formats:{color:{}}}),Dr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ns,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),or(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Lc(e,t){let[r,n,o]=Dr.from(e),[a,s,i]=Dr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const os=3424/4096,as=2413/128,ss=2392/128,vo=2610/16384,Ac=2523/32,Rc=16384/2610,yo=32/2523,Pc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Bc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Hc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Nc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Vr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:pn,fromBase(e){let t=B(Pc,e);return Ic(t)},toBase(e){let t=Oc(e);return B(Nc,t)},formats:{color:{}}});function Ic(e){let t=e.map(function(r){let n=os+as*(r/1e4)**vo,o=1+ss*(r/1e4)**vo;return(n/o)**Ac});return B(Bc,t)}function Oc(e){return B(Hc,e).map(function(n){let o=Math.max(n**yo-os,0),a=as-ss*n**yo;return 1e4*(o/a)**Rc})}function zc(e,t){let[r,n,o]=Vr.from(e),[a,s,i]=Vr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Dc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Vc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],jc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Uc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var qt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:K,fromBase(e){let r=B(Dc,e).map(n=>Math.cbrt(n));return B(jc,r)},toBase(e){let r=B(Uc,e).map(n=>n**3);return B(Vc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Fc(e,t){let[r,n,o]=qt.from(e),[a,s,i]=qt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Gt={deltaE76:$c,deltaECMC:xc,deltaE2000:Or,deltaEJz:Lc,deltaEITP:zc,deltaEOK:Fc};function tt(e,t,r={}){wt(r)&&(r={method:r});let{method:n=ie.deltaE,...o}=r;e=E(e),t=E(t);for(let a in Gt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Gt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Wc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ye(e,n,o=>o*(1+t))}function Yc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ye(e,n,o=>o*(1-t))}var qc=Object.freeze({__proto__:null,darken:Yc,lighten:Wc});function is(e,t,r=.5,n={}){[e,t]=[E(e),E(t)],ge(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return kt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function ls(e,t,r={}){let n;gn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[E(e),E(t)],n=kt(e,t,l));let c=tt(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(m,g)=>{let y=g*f;return{p:y,color:n(y)}})}if(o>0){let f=d.reduce((m,g,y)=>{if(y===0)return 0;let k=tt(g.color,d[y-1].color,a);return Math.max(m,k)},0);for(;f>o;){f=0;for(let m=1;m<d.length&&d.length<i;m++){let g=d[m-1],y=d[m],k=(y.p+g.p)/2,$=n(k);f=Math.max(f,tt($,g.color),tt($,y.color)),d.splice(m,0,{p:k,color:n(k)}),m++}}}return d=d.map(f=>f.color),d}function kt(e,t,r={}){if(gn(e)){let[l,c]=[e,t];return kt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=E(e),t=E(t),e=ft(e),t=ft(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[ie.interpolationSpace]||e.space,o=o?b.get(o):n,e=Z(e,n),t=Z(t,n),e=we(e),t=we(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Q(e,c),Q(t,c)];[u,d]=Ul(l,[u,d]),ye(e,c,u),ye(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,m)=>{let g=t.coords[m];return Ut(f,g,l)}),u=Ut(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=Z(d,o)),d},{rangeArgs:i})}function gn(e){return ge(e)==="function"&&!!e.rangeArgs}ie.interpolationSpace="lab";function Gc(e){e.defineFunction("mix",is,{returns:"color"}),e.defineFunction("range",kt,{returns:"function<color>"}),e.defineFunction("steps",ls,{returns:"array<color>"})}var Xc=Object.freeze({__proto__:null,isRange:gn,mix:is,range:kt,register:Gc,steps:ls}),cs=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ht,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),us=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:cs,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Zc=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:us,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Jc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Kc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ds=new U({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Jc,fromXYZ_M:Kc}),Qc=new U({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ds,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const eu=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],tu=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var fs=new U({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:mn,toXYZ_M:eu,fromXYZ_M:tu});const ru=1/512,nu=16/512;var ou=new U({id:"prophoto",name:"ProPhoto",base:fs,toBase(e){return e.map(t=>t<nu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=ru?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),au=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:qt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),or(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const wo=203,$o=2610/2**14,su=2**14/2610,iu=2523/2**5,ko=2**5/2523,xo=3424/2**12,Eo=2413/2**7,Co=2392/2**7;var lu=new U({id:"rec2100pq",name:"REC.2100-PQ",base:ar,toBase(e){return e.map(function(t){return(Math.max(t**ko-xo,0)/(Eo-Co*t**ko))**su*1e4/wo})},fromBase(e){return e.map(function(t){let r=Math.max(t*wo/1e4,0),n=xo+Eo*r**$o,o=1+Co*r**$o;return(n/o)**iu})},formats:{color:{id:"rec2100-pq"}}});const So=.17883277,To=.28466892,Mo=.55991073,kr=3.7743;var cu=new U({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ar,toBase(e){return e.map(function(t){return t<=.5?t**2/3*kr:(Math.exp((t-Mo)/So)+To)/12*kr})},fromBase(e){return e.map(function(t){return t/=kr,t<=1/12?Math.sqrt(3*t):So*Math.log(12*t-To)+Mo})},formats:{color:{id:"rec2100-hlg"}}});const hs={};ve.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=ms(e.W1,e.W2,e.options.method))});ve.add("chromatic-adaptation-end",e=>{e.M||(e.M=ms(e.W1,e.W2,e.options.method))});function sr({id:e,toCone_M:t,fromCone_M:r}){hs[e]=arguments[0]}function ms(e,t,r="Bradford"){let n=hs[r],[o,a,s]=B(n.toCone_M,e),[i,l,c]=B(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=B(u,n.toCone_M);return B(n.fromCone_M,d)}sr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});sr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});sr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});sr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(re,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});re.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const uu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],du=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ps=new U({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:re.ACES,toXYZ_M:uu,fromXYZ_M:du,formats:{color:{}}});const Lt=2**-16,xr=-.35828683,At=(Math.log2(65504)+9.72)/17.52;var fu=new U({id:"acescc",name:"ACEScc",coords:{r:{range:[xr,At],name:"Red"},g:{range:[xr,At],name:"Green"},b:{range:[xr,At],name:"Blue"}},referred:"scene",base:ps,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Lt)*2:r<At?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Lt)+9.72)/17.52:t<Lt?(Math.log2(Lt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),_o=Object.freeze({__proto__:null,A98RGB:Qc,A98RGB_Linear:ds,ACEScc:fu,ACEScg:ps,HSL:cs,HSV:us,HWB:Zc,ICTCP:Vr,JzCzHz:Dr,Jzazbz:ns,LCH:dt,Lab:Y,Lab_D65:zr,OKLCH:au,OKLab:qt,P3:Ka,P3_Linear:Za,ProPhoto:ou,ProPhoto_Linear:fs,REC_2020:Xa,REC_2020_Linear:ar,REC_2100_HLG:cu,REC_2100_PQ:lu,XYZ_ABS_D65:pn,XYZ_D50:mn,XYZ_D65:K,sRGB:ht,sRGB_Linear:Ja});let S=class D{constructor(...t){let r;t.length===1&&(r=E(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new D(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Jl(this,...t);return r.color=new D(r.color),r}static get(t,...r){return t instanceof D?t:new D(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=D.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return D.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>D.get(c)));return l};t in D||(D[t]=s),o&&(D.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)D.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(D);else for(let r in t)D.defineFunction(r,t[r])}};S.defineFunctions({get:Q,getAll:$t,set:ye,setAll:Ga,to:Z,equals:Kl,inGamut:at,toGamut:we,distance:Qa,toString:Yt});Object.assign(S,{util:Ol,hooks:ve,WHITES:re,Space:b,spaces:b.registry,parse:qa,defaults:ie});for(let e of Object.keys(_o))b.register(_o[e]);for(let e in b.registry)jr(e,b.registry[e]);ve.add("colorspace-init-end",e=>{var t;jr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{jr(r,e)})});function jr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(S.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}S.extend(Gt);S.extend({deltaE:tt});Object.assign(S,{deltaEMethods:Gt});S.extend(qc);S.extend({contrast:vc});S.extend(wc);S.extend(ec);S.extend(Xc);S.extend(It);function gs(e){return fe(e,(t,r)=>r instanceof S?N(r.toString({format:"hex"})):gs(r))}const hu="dodgerblue";function Ur(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Er({background:e,foreground:t}){return{background:e??new S(Ur(t)),foreground:t??new S(Ur(e))}}var Xt;(function(e){e.Dark="dark",e.Light="light"})(Xt||(Xt={}));function mu(e){return e==="black"?"white":"black"}const pu={black:{foregroundFaint1:new S("#ccc"),foregroundFaint2:new S("#eee")},white:{foregroundFaint1:new S("#ccc"),foregroundFaint2:new S("#eee")}},gu={black:{backgroundFaint1:new S("#666"),backgroundFaint2:new S("#444")},white:{backgroundFaint1:new S("#ccc"),backgroundFaint2:new S("#fafafa")}};function Lo({themeColor:e=hu,themeStyle:t=Xt.Light}={}){const r=new S(e),n=new S(t===Xt.Dark?"black":"white"),o=Ur(n),a=new S(o),s={nav:{hover:Er({background:r.clone().set({"hsl.l":93})}),active:Er({background:r.clone().set({"hsl.l":90})}),selected:Er({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...gu[mu(o)],foreground:a,...pu[o]}};return gs(s)}const Zt=nn()("element-book-change-route"),Ao="vira-",{defineElement:Ge,defineElementNoInputs:Uu}=La({assertInputs:e=>{if(!e.tagName.startsWith(Ao))throw new Error(`Tag name should start with '${Ao}' but got '${e.tagName}'`)}}),bu=S;function vu(e){try{if(!e)throw new Error("invalid empty color");return new bu(e)}catch{const r=String(e),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?Us({callback:()=>JSON.stringify(e),fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const bs=p`
    pointer-events: none;
    opacity: 0.3;
`,be=He({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),mt=He({"vira-form-input-border-radius":"8px"}),Jt=He({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":p`calc(${mt["vira-form-input-border-radius"].value} + 4px)`});function vs({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=N(Go(n+r+t));return p`
        ${N(e)}::after {
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
    `}const yu=p`
    padding: 0;
    margin: 0;
`,_e=p`
    ${yu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Fr=p`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,w=Ge()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>p`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ys=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(ys||{});const H=Ge()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Fr};
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
            ${bs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${_e};
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
            border-radius: ${mt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${be["vira-interaction-animation-duration"].value},
                background-color
                    ${be["vira-interaction-animation-duration"].value},
                border-color ${be["vira-interaction-animation-duration"].value};
        }

        ${vs({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${w} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${w.assign({icon:e.icon})}></${w}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Wr=(e=>(e.Header="header",e))(Wr||{});const Te=Ge()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>p`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${_e};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${be["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:he()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?p`
                  height: ${e.contentHeight}px;
              `:p`
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
                    ${_a(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),v=He({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function le({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function wu(e,t){const r=j(t).map(n=>{const o=t[n],a=vu(o);return`${v[n].name}: ${a.toString()};`}).join(" ");return le({name:e.name,svgTemplate:h`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const ws=le({name:"CloseX24Icon",svgTemplate:h`
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
    `}),$s=le({name:"Element16Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ae=le({name:"Element24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ks=le({name:"Loader24Icon",svgTemplate:h`
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
    `}),$u=p`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${be["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,pt=le({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            ${$u}
        </style>
        ${ks.svgTemplate}
    `}),bn=le({name:"Options24Icon",svgTemplate:h`
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
                stroke="${v["vira-icon-stroke-color"].value}"
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Kt=le({name:"StatusFailure24Icon",svgTemplate:h`
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
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ku=le({name:"StatusInProgress24Icon",svgTemplate:h`
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
    `}),xu=le({name:"StatusSuccess24Icon",svgTemplate:h`
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
    `}),Eu={CloseX24Icon:ws,Element16Icon:$s,Element24Icon:Ae,Loader24Icon:ks,LoaderAnimated24Icon:pt,Options24Icon:bn,StatusFailure24Icon:Kt,StatusInProgress24Icon:ku,StatusSuccess24Icon:xu};var Yr=(e=>(e.Loading="loading",e.Error="error",e))(Yr||{});const De=Ge()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:he(),imageError:he()},styles:({hostClasses:e})=>p`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const a=e.imageUrl,s=t.erroredUrls[a]?h`
                  <slot class="status-wrapper" name=${"error"}>
                      <${w.assign({icon:Kt})} class="error"></${w}>
                  </slot>
              `:t.loadedUrls[a]?void 0:h`
                    <slot class="status-wrapper" name=${"loading"}>
                        <${w.assign({icon:pt})}></${w}>
                    </slot>
                `;return h`
            ${J(!!s,s)}
            <img
                class=${ia({hidden:!!s})}
                ${L("load",async()=>{e._debugLoadDelay&&await Mr(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${L("error",async i=>{e._debugLoadDelay&&await Mr(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new o.imageError(i.error))})}
                src=${a}
            />
        `}});function qr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>qr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function xs({value:e,allowed:t,blocked:r}){const n=t?qr({input:e,matcher:t}):!0,o=r?qr({input:e,matcher:r}):!1;return n&&!o}function Es(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(xs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Cu({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=et(r,HTMLInputElement),s=r.data,i=t;let l=a.value??"";if(s)if(s.length===1)xs({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=i,n(s));else{const{filtered:c,blocked:u}=Es({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),i!==l&&o(l)}const _=Ge()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:he(),inputBlocked:he()},styles:({hostClasses:e,cssVars:t})=>p`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Jt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${bs};
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
                ${_e};
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
                ${Fr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${_e};
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
                border-radius: ${mt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${be["vira-interaction-animation-duration"].value};
            }

            label {
                ${_e};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${mt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${vs({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${_e};
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
                ${Fr};
            }

            .close-x-button {
                ${_e};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${be["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Es({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?h`
                  <${w.assign({icon:e.icon})} class="left-side-icon"></${w}>
              `:"",i=e.fitText?p`
                  width: ${r.forcedInputWidth}px;
              `:"";return h`
            <label>
                ${s}
                ${J(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${_a(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${L("input",l=>{Cu({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${J(!!(e.showClearButton&&e.value),h`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${L("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${w.assign({icon:ws})}></${w}>
                        </button>
                    `)}
                ${J(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Qe=Ge()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>p`
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
    `,events:{routeChange:he()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&Na(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return h`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return h`
                <a href=${s} rel="noopener noreferrer" ${L("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:ee,defineElementNoInputs:Fu}=La(),G=ee()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>p`
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
                ${L("click",a=>{(!e.router||Na(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Zt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Su(e,t){return e.entry.entryType===I.Root?!1:!!(e.entry.entryType===I.Page||me(t,e.fullUrlBreadcrumbs.slice(0,-1))||me(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ue=ee()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>p`
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
            ${G.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${w} {
            display: inline-flex;
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Su(r,e.selectedPath))return;const n=p`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return h`
                <li style=${n}>
                    <${G.assign({router:e.router,route:{paths:[V.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ia({"title-row":!0,selected:e.selectedPath?me(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${J(Ue(r,I.ElementExample),h`
                                    <${w.assign({icon:$s})}></${w}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${G}>
                </li>
            `});return h`
            <${G.assign({route:We,router:e.router})}>
                <slot name=${ae.NavHeader}>Book</slot>
            </${G}>
            <ul>
                ${t}
            </ul>
        `}});async function Tu(e){await _r(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await ii(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ke=ee()({tagName:"book-error",styles:p`
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
    `,renderCallback({inputs:e}){return(X(e.message,"array")?e.message:[e.message]).map(r=>h`
                <p>${r}</p>
            `)}}),gt=ee()({tagName:"book-page-controls",events:{controlValueChange:he()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>p`
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

        ${_} {
            height: 24px;
            max-width: 128px;
        }

        ${w}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===C.Hidden)return"";const s=Mu(e.currentValues[n],o,i=>{const l=X(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return h`
                    <div class="control-wrapper">
                        ${J(a===0,h`
                                <${w.assign({icon:bn})}
                                    class="options-icon"
                                ></${w}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function Mu(e,t,r){return Ie(t,C.Hidden)?"":Ie(t,C.Checkbox)?h`
            <input
                type="checkbox"
                .value=${e}
                ${L("input",n=>{const o=et(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ie(t,C.Color)?h`
            <input
                type="color"
                .value=${e}
                ${L("input",n=>{const o=et(n,HTMLInputElement);r(o.value)})}
            />
        `:Ie(t,C.Text)?h`
            <${_.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${L(_.events.valueChange,n=>{r(n.detail)})}
            ></${_}>
        `:Ie(t,C.Number)?h`
            <input
                type="number"
                .value=${e}
                ${L("input",n=>{const o=et(n,HTMLInputElement);r(o.value)})}
            />
        `:Ie(t,C.Dropdown)?h`
            <select
                .value=${e}
                ${L("input",n=>{const o=et(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>h`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:h`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Ro=ee()({tagName:"book-breadcrumbs",styles:p`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":h`
                      <span class="spacer">&gt;</span>
                  `;return h`
                <${G.assign({route:{hash:void 0,search:void 0,paths:[V.Book,...s]},router:e.router})}>
                    ${r}
                </${G}>
                ${i}
            `}):h`
                &nbsp;
            `}}),Cr=ee()({tagName:"book-breadcrumbs-bar",styles:p`
        :host {
            border-bottom: 1px solid
                ${x["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${x["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return h`
            ${J(!!e.currentSearch,h`
                    &nbsp;
                `,h`
                    <${Ro.assign({currentRoute:e.currentRoute,router:e.router})}></${Ro}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${L("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Mr(200),n.value===o&&(n.value?t(new Zt({paths:[V.Search,encodeURIComponent(n.value)]})):t(new Zt(We)))})}
            />
        `}}),Po=ee()({tagName:"book-entry-description",styles:p`
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
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>h`
                <p>${t}</p>
            `)}}),Bo=ee()({tagName:"book-page-wrapper",styles:p`
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

        ${G} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?h`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:h`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[V.Book,...e.pageNode.fullUrlBreadcrumbs],n=jo(e.pageNode.entry.errors);return n&&console.error(n),h`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${G.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${G}>
                    ${n?h`
                              <${ke.assign({message:n.message})}></${ke}>
                          `:h`
                              <${Po.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Po}>
                              <${gt.assign({config:e.pageNode.entry.controls,currentValues:dn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${gt}>
                          `}
                </div>
            </div>
        `}}),Rt=ee()({tagName:"book-element-example-controls",styles:p`
        :host {
            display: flex;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[V.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return h`
            <${G.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${G}>
        `}}),Ho=Symbol("unset-internal-state"),No=ee()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Ho},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw jo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Ho&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return h`
                ${J(!!t.elementExampleNode.entry.styles,h`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),h`
                <${ke.assign({message:`${t.elementExampleNode.entry.title} failed: ${bt(n)}`})}></${ke}>
            `}},options:{allowPolymorphicState:!0}}),Io=ee()({tagName:"book-element-example-wrapper",styles:p`
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

        ${Rt} {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Rt} {
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return h`
            <div class="individual-example-wrapper">
                <${Rt.assign(Xs(e,["currentPageControls"]))}></${Rt}>
                <${No.assign(e)}></${No}>
            </div>
        `}});function Cs(e,t,r,n){const o=Br(r,n),a=[];if(o){const s=Cs(e,t,o,n);s&&a.push(s)}if(Ue(r,I.Page)&&!e.includes(r)){const s=dn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:fe(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function _u({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[h`
                No results
            `];const s=Tn(e,1)?Cs(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&Tn(e,1)?h`
                  <${gt.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${gt}>
              `:"",l=Si(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Ue(c,I.Page))return h`
                    <${Bo.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Bo}>
                `;if(Ue(c,I.ElementExample)){const d=dn(o,c.fullUrlBreadcrumbs.slice(0,-1));return h`
                    <${Io.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Io}>
                `}else return Ue(c,I.Root)?"":h`
                    <${ke.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ke}>
                `});return[i,l].flat()}const Ve=ee()({tagName:"book-entry-display",styles:p`
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

        ${Cr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${be["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:he()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Hr(e.currentRoute.paths),s=_u({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return h`
            <${Cr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${Cr}>

            ${J(e.showLoading,h`
                    <div
                        ${Wn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${w.assign({icon:pt})}></${w}>
                    </div>
                    ${J(!!n.lastElement,h`
                            ${n.lastElement}
                            <slot name=${ae.Footer}></slot>
                        `)}
                `,h`
                    <div
                        ${Wn(i=>{o({lastElement:i})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${ae.Footer}></slot>
                `)}
        `}});function Lu(e,t,r){const n=Oo(e,t);if(n.length)return n;r(We);const o=Oo(e,We.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Oo(e,t){return e.filter(r=>si({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Sr=Ta()({tagName:"element-book-app",events:{pathUpdate:he()},stateInitStatic:{currentRoute:We,router:void 0,loading:!0,colors:{config:void 0,theme:Lo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:p`
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

        ${Ve} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ue} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{zo(e,Hr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,m,g,y,k;t._debug&&console.info("rendering element-book app");function s($){return{...e.currentRoute,...$}}function i($){const T=s($);return!me(e.currentRoute,T)}function l($){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,$].filter(xe).join(" - "))}function c($){if(!i($))return;const T=s($);e.router?e.router.setRoutes(T):n({currentRoute:{...e.currentRoute,...T}}),t.elementBookRoutePaths&&!me(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(T.paths??[]))}try{if(t.elementBookRoutePaths&&!me(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const M=Bl(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,O=>{n({currentRoute:O})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const $={themeColor:t.themeColor};if(!me($,(f=e.colors)==null?void 0:f.config)){const M=Lo($);n({colors:{config:$,theme:M}}),Il(r,M)}const T=t._debug??!1,R=bl({entries:t.entries,debug:T});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Ba(R.tree,{children:(g=(m=e.treeBasedControls)==null?void 0:m.controls)==null?void 0:g.children,controls:t.globalValues})}}));const A=Hr(e.currentRoute.paths),oe=(A?El({flattenedNodes:R.flattenedNodes,searchQuery:A}):void 0)??Lu(R.flattenedNodes,e.currentRoute.paths,c);l((y=oe[0])==null?void 0:y.entry.title);const F=(k=e.treeBasedControls)==null?void 0:k.controls;return F?(t._debug&&console.info({currentControls:F}),h`
                <div
                    class="root"
                    ${L(Zt,async M=>{const O=M.detail;if(!i(O))return;if(n({loading:!0}),c(O),!(r.shadowRoot.querySelector(ue.tagName)instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);zo(r,A,e.currentRoute)})}
                    ${L(gt.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const O=yl(F,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:O}})})}
                >
                    <${ue.assign({flattenedNodes:R.flattenedNodes,router:e.router,selectedPath:A?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ae.NavHeader}
                            slot=${ae.NavHeader}
                        ></slot>
                    </${ue}>
                    <${Ve.assign({controls:F,currentNodes:oe,currentRoute:e.currentRoute,debug:T,originalTree:R.tree,router:e.router,showLoading:e.loading})}
                        ${L(Ve.events.loadingRender,async M=>{await _r();const O=r.shadowRoot.querySelector(Ve.tagName);O?O.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ve.tagName}' for scrolling.`),await _r(),n({loading:!M.detail})})}
                    >
                        <slot
                            name=${ae.Footer}
                            slot=${ae.Footer}
                        ></slot>
                    </${Ve}>
                </div>
            `):h`
                    <${ke.assign({message:"Failed to generate page controls."})}></${ke}>
                `}catch($){return console.error($),h`
                <p class="error">${bt($)}</p>
            `}}});async function zo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ue.tagName);if(!(n instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);await Tu(n)}const Ne=Ee({title:"Elements",parent:void 0}),Au=Ee({parent:Ne,title:H.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:C.Color,initValue:H.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:C.Color,initValue:H.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:C.Color,initValue:H.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:C.Color,initValue:H.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??p``;e({title:r,styles:a,renderCallback({controls:s}){const i=p`
                        ${H.cssVars["vira-button-primary-color"].name}: ${N(s["Primary color"]||"inherit")};
                        ${H.cssVars["vira-button-secondary-color"].name}: ${N(s["Secondary color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-hover-color"].name}: ${N(s["Hover color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-active-color"].name}: ${N(s["Active color"]||"inherit")};
                    `;return h`
                        <${H.assign({text:"hello",...o})}
                            style=${i}
                        ></${H}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:bn}}),t({title:"outline",inputs:{buttonStyle:ys.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:p`
                ${H} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:p`
                ${H} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:p`
                :host {
                    ${H.cssVars["vira-button-primary-color"].name}: pink;
                    ${H.cssVars["vira-button-secondary-color"].name}: purple;
                    ${H.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${H.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return h`
                    <${H.assign({text:"hello"})}></${H}>
                `}})}}),Ru=Ee({title:Te.tagName,parent:Ne,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:p`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>h`
                            <${Te.assign({expanded:!!r.expandedStates[o]})}
                                ${L(Te.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Wr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${L("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${J(!!r.showMoreStates[o],h`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${Te}>
                        `)}}),e({title:"wider examples",styles:p`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>h`
                            <${Te.assign({expanded:!!r.expandedStates[o]})}
                                ${L(Te.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Wr.Header}
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
                                ${J(!!r.showMoreStates[o],h`
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
                            </${Te}>
                        `)}})}}),Pu=Ee({title:w.tagName,parent:Ne,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return h`
                    <${w.assign({icon:Ae})}></${w}>
                `}}),e({title:"using createColoredIcon",renderCallback(){return h`
                    <${w.assign({icon:wu(Ae,{"vira-icon-stroke-color":"red"})})}></${w}>
                `}})}}),Bu=Ee({title:De.tagName,parent:Ne,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:p`
                    border-radius: 32px;
                `,loadingSlot:h`
                    <div
                        style=${p`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${w.assign({icon:pt,fitContainer:!0})}
                            style=${p`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${w}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:p`
                    border-radius: 32px;
                `,errorSlot:h`
                    <div
                        style=${p`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${w.assign({icon:Kt,fitContainer:!0})}
                            style=${p`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${w}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/bolt.png"},styles:p`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/bolt.png",dominantDimension:"height"},styles:p`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:p`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:h`
                    <div
                        style=${p`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${w.assign({icon:pt,fitContainer:!0})}
                            style=${p`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${w}>
                    </div>
                `,errorSlot:h`
                    <div
                        style=${p`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${w.assign({icon:Kt,fitContainer:!0})}
                            style=${p`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${w}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:p`
                    ${De} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||p``}
                    }

                    ${r.allowReload?p`
                              ${De} {
                                  cursor: pointer;
                              }

                              ${De}:hover {
                                  border-color: #0055ff;
                              }
                          `:p``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:r.inputs.imageUrl},renderCallback({state:n,updateState:o}){return h`
                        <${De.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${L("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${qo()}`})})}
                        >
                            ${r.loadingSlot?h`
                                      <div
                                          class="slot-wrapper"
                                          slot=${Yr.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?h`
                                      <div class="slot-wrapper" slot=${Yr.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${De}>
                    `}})})}}),Hu=Ee({title:_.tagName,parent:Ne,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:C.Color,initValue:_.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:C.Color,initValue:_.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:C.Color,initValue:_.cssVars["vira-input-border-color"].default},"Focus color":{controlType:C.Color,initValue:_.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:C.Color,initValue:_.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:p`
                    ${r||p``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:s,controls:i}){const l={[String(_.cssVars["vira-input-text-color"].name)]:i["Text color"],[String(_.cssVars["vira-input-placeholder-color"].name)]:i["Placeholder color"],[String(_.cssVars["vira-input-border-color"].name)]:i["Border color"],[String(_.cssVars["vira-input-focus-border-color"].name)]:i["Focus color"],[String(_.cssVars["vira-input-text-selection-color"].name)]:i["Selection color"]},c=fe(l,(d,f)=>f||"inherit"),u=Object.entries(c).map(([d,f])=>[d,f].join(": ")+";").join(`
`);return h`
                        <${_.assign({...o,value:a.value})}
                            style=${u}
                            ${L(_.events.valueChange,d=>{s({value:d.detail})})}
                        ></${_}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:Ae}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:p`
                ${_} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:Ae}}),t({title:"taller height",styles:p`
                ${_} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:Ae}}),t({title:"shorter height",styles:p`
                ${_} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ae}}),t({title:"max width",styles:p`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:p`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Nu=Ee({title:Qe.tagName,parent:Ne,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:C.Color,initValue:""},"Hover color":{controlType:C.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=p`
                        ${Qe.cssVars["vira-link-hover-color"].name}: ${N(o["Hover color"]||"inherit")};
                        color: ${N(o["CSS Color"]||"inherit")};
                    `;return h`
                        <${Qe.assign(n)}
                            style=${a}
                            ${L(Qe.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${Qe}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),Iu=Ee({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:C.Color,initValue:""},"Fill Color":{controlType:C.Color,initValue:""},"Stroke Width":{controlType:C.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(Eu).forEach(t=>{e({title:t.name,styles:p`
                    :host(:hover) ${w} {
                        background-color: #f2f2f2;
                    }

                    ${w} {
                        padding: 8px;
                        border-radius: ${mt["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=p`
                        ${v["vira-icon-fill-color"].name}: ${N(r["Fill Color"]||"inherit")};
                        ${v["vira-icon-stroke-color"].name}: ${N(r["Stroke Color"]||"inherit")};
                        ${v["vira-icon-stroke-width"].name}: ${N(Go(r["Stroke Width"])||"inherit")};
                    `;return h`
                        <${w.assign({icon:t})} style=${n}></${w}>
                    `}})})}}),Ou=[Ne,Iu,Au,Ru,Pu,Bu,Hu,Nu];rr({tagName:"vira-book-app",styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Sr} {
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
            <${Sr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Ou,themeColor:"#33ccff"})}>
                <h1 slot=${ae.NavHeader}>Vira</h1>
            </${Sr}>
        `}});
