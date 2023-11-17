var Li=Object.defineProperty;var Pi=(e,t,r)=>t in e?Li(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var vr=(e,t,r)=>(Pi(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function or(e){return!!e}function Ai(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ri={capitalizeFirstLetter:!1};function Ni(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Bi(e,t){return t.capitalizeFirstLetter?Ni(e):e}function Hi(e,t=Ri){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Bi(n,t)}var Yn;(function(e){e.Upper="upper",e.Lower="lower"})(Yn||(Yn={}));const Oi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ze(e,t){return e?Oi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ca(e,t){return e&&t.every(r=>Ze(e,r))}function Sa(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>ar(r).trim()).join(`
`))}function ar(e){return e?e instanceof Error?e.message:Ze(e,"message")?String(e.message):String(e):""}function Ta(e){return e instanceof Error?e:new Error(ar(e))}function Vr(e){return!!e&&typeof e=="object"}function ue(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ji(e){return Array.isArray(e)?"array":typeof e}function sr(e,t){return ji(e)===t}function qn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Gn="Failed to compare objects using JSON.stringify";function Xn(e,t,r){return qn({source:e,errorHandler(n){if(r)return"";throw n}})===qn({source:t,errorHandler(n){if(r)return"";throw n}})}function fe(e,t,r={}){try{return e===t?!0:Vr(e)&&Vr(t)?Xn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>fe(e[o],t[o])):!1:Xn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Ta(n);throw o.message.startsWith(Gn)||(o.message=`${Gn}: ${o.message}`),o}}function Di(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Vi(e){return ue(e).filter(t=>isNaN(Number(t)))}function zi(e){return Vi(e).map(r=>e[r])}function Ii(e,t){return zi(t).includes(e)}function Ui(e,t){return ue(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Fi(e,t){return Ui(e,r=>!t.includes(r))}function Fe(e,t){let r=!1;const n=ue(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(ue(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Zn(e,t){try{return Wi(e,t),!0}catch{return!1}}function Wi(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function xa(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${xa.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Yi(e){const t=xa();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const qi=globalThis.crypto;function Gi(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return qi.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Xi(e,t){return Ze(e,"entryType")&&e.entryType===t}var O;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(O||(O={}));function Be(e,t){return e.controlType===t}var x;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(x||(x={}));const Ma=Symbol("any-type"),Zi={[x.Checkbox]:!1,[x.Color]:"",[x.Dropdown]:"",[x.Hidden]:Ma,[x.Number]:0,[x.Text]:""};function Ji(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=Zi[o.controlType];a!==Ma&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function mn(e,t){const r=Vt(e.title);return e.parent?[...mn(e.parent,!1),Vt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Vt(e){return Ai(e).toLowerCase().replaceAll(/\s/g,"-")}function Ki({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function $e(e){const t={...e,entryType:O.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:O.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(or)};r.add(n.title),t.elementExamples[Vt(o.title)]=o}}),t}var oe;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(oe||(oe={}));var Jn;(function(e){e.Upper="upper",e.Lower="lower"})(Jn||(Jn={}));function Qi(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function _a(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${_a.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}async function zr(e=1){const t=_a();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function el(e){return tl(e,1)}async function tl(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{Qi(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=window,pn=Bt.ShadowRoot&&(Bt.ShadyCSS===void 0||Bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gn=Symbol(),Kn=new WeakMap;let La=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==gn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(pn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Kn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Kn.set(r,t))}return t}toString(){return this.cssText}};const R=e=>new La(typeof e=="string"?e:e+"",void 0,gn),st=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new La(r,e,gn)},rl=(e,t)=>{pn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Bt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Qn=pn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return R(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yr;const zt=window,eo=zt.trustedTypes,nl=eo?eo.emptyScript:"",to=zt.reactiveElementPolyfillSupport,Ir={toAttribute(e,t){switch(t){case Boolean:e=e?nl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Pa=(e,t)=>t!==e&&(t==t||e==e),$r={attribute:!0,type:String,converter:Ir,reflect:!1,hasChanged:Pa},Ur="finalized";let Ve=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=$r){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$r}static finalize(){if(this.hasOwnProperty(Ur))return!1;this[Ur]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Qn(o))}else t!==void 0&&r.push(Qn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return rl(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=$r){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Ir).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Ir;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Pa)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ve[Ur]=!0,Ve.elementProperties=new Map,Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},to==null||to({ReactiveElement:Ve}),((yr=zt.reactiveElementVersions)!==null&&yr!==void 0?yr:zt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wr;const It=window,We=It.trustedTypes,ro=We?We.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ut="$lit$",ce=`lit$${(Math.random()+"").slice(9)}$`,bn="?"+ce,ol=`<${bn}>`,Pe=document,lt=()=>Pe.createComment(""),ct=e=>e===null||typeof e!="object"&&typeof e!="function",Aa=Array.isArray,Ra=e=>Aa(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",kr=`[ 	
\f\r]`,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,no=/-->/g,oo=/>/g,Ee=RegExp(`>|${kr}(?:([^\\s"'>=/]+)(${kr}*=${kr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ao=/'/g,so=/"/g,Na=/^(?:script|style|textarea|title)$/i,al=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ba=al(1),G=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),io=new WeakMap,Me=Pe.createTreeWalker(Pe,129,null,!1);function Ha(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ro!==void 0?ro.createHTML(t):t}const Oa=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=tt;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===tt?u[1]==="!--"?s=no:u[1]!==void 0?s=oo:u[2]!==void 0?(Na.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Ee):u[3]!==void 0&&(s=Ee):s===Ee?u[0]===">"?(s=o??tt,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Ee:u[3]==='"'?so:ao):s===so||s===ao?s=Ee:s===no||s===oo?s=tt:(s=Ee,o=void 0);const h=s===Ee&&e[i+1].startsWith("/>")?" ":"";a+=s===tt?l+ol:d>=0?(n.push(c),l.slice(0,d)+Ut+l.slice(d)+ce+h):l+ce+(d===-2?(n.push(void 0),i):h)}return[Ha(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class ut{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=Oa(t,r);if(this.el=ut.createElement(c,n),Me.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=Me.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Ut)||f.startsWith(ce)){const h=u[s++];if(d.push(f),h!==void 0){const m=o.getAttribute(h.toLowerCase()+Ut).split(ce),p=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:p[2],strings:m,ctor:p[1]==="."?Da:p[1]==="?"?Va:p[1]==="@"?za:vt})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(Na.test(o.tagName)){const d=o.textContent.split(ce),f=d.length-1;if(f>0){o.textContent=We?We.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],lt()),Me.nextNode(),l.push({type:2,index:++a});o.append(d[f],lt())}}}else if(o.nodeType===8)if(o.data===bn)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(ce,d+1))!==-1;)l.push({type:7,index:a}),d+=ce.length-1}a++}}static createElement(t,r){const n=Pe.createElement("template");return n.innerHTML=t,n}}function Ae(e,t,r=e,n){var o,a,s,i;if(t===G)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=ct(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Ae(e,l._$AS(e,t.values),l,n)),t}class ja{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Pe).importNode(n,!0);Me.currentNode=a;let s=Me.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new Je(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new Ia(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=Me.nextNode(),i++)}return Me.currentNode=Pe,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Je{constructor(t,r,n,o){var a;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ae(this,t,r),ct(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==G&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ra(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==N&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(Pe.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ut.createElement(Ha(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new ja(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=io.get(t.strings);return r===void 0&&io.set(t.strings,r=new ut(t)),r}T(t){Aa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Je(this.k(lt()),this.k(lt()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class vt{constructor(t,r,n,o,a){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=Ae(this,t,r,0),s=!ct(t)||t!==this._$AH&&t!==G,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Ae(this,i[n+l],r,l),c===G&&(c=this._$AH[l]),s||(s=!ct(c)||c!==this._$AH[l]),c===N?t=N:t!==N&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Da extends vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const sl=We?We.emptyScript:"";class Va extends vt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,sl):this.element.removeAttribute(this.name)}}class za extends vt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Ae(this,t,r,0))!==null&&n!==void 0?n:N)===G)return;const o=this._$AH,a=t===N&&o!==N||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==N&&(o===N||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Ia{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ae(this,t)}}const il={O:Ut,P:ce,A:bn,C:1,M:Oa,L:ja,R:Ra,D:Ae,I:Je,V:vt,H:Va,N:za,U:Da,F:Ia},lo=It.litHtmlPolyfillSupport;lo==null||lo(ut,Je),((wr=It.litHtmlVersions)!==null&&wr!==void 0?wr:It.litHtmlVersions=[]).push("2.8.0");const ll=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Je(t.insertBefore(lt(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Er,Cr;let Le=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ll(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return G}};Le.finalized=!0,Le._$litElement$=!0,(Er=globalThis.litElementHydrateSupport)===null||Er===void 0||Er.call(globalThis,{LitElement:Le});const co=globalThis.litElementPolyfillSupport;co==null||co({LitElement:Le});((Cr=globalThis.litElementVersions)!==null&&Cr!==void 0?Cr:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},we=e=>(...t)=>({_$litDirective$:e,values:t});let de=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:cl}=il,uo=()=>document.createComment(""),rt=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(uo(),a),i=o.insertBefore(uo(),a);r=new cl(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},Ce=(e,t,r=e)=>(e._$AI(t,r),e),ul={},dl=(e,t=ul)=>e._$AH=t,fl=e=>e._$AH,Sr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ua=we(class extends de{constructor(e){var t;if(super(e),e.type!==yt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return G}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fo=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},hl=we(class extends de{constructor(e){if(super(e),e.type!==yt.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=fl(e),{values:s,keys:i}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=i,s;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,h=a.length-1,m=0,p=s.length-1;for(;f<=h&&m<=p;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[m])c[m]=Ce(a[f],s[m]),f++,m++;else if(l[h]===i[p])c[p]=Ce(a[h],s[p]),h--,p--;else if(l[f]===i[p])c[p]=Ce(a[f],s[p]),rt(e,c[p+1],a[f]),f++,p--;else if(l[h]===i[m])c[m]=Ce(a[h],s[m]),rt(e,a[f],a[h]),h--,m++;else if(u===void 0&&(u=fo(i,m,p),d=fo(l,f,h)),u.has(l[f]))if(u.has(l[h])){const g=d.get(i[m]),b=g!==void 0?a[g]:null;if(b===null){const C=rt(e,a[f]);Ce(C,s[m]),c[m]=C}else c[m]=Ce(b,s[m]),rt(e,a[f],b),a[g]=null;m++}else Sr(a[h]),h--;else Sr(a[f]),f++;for(;m<=p;){const g=rt(e,c[p+1]);Ce(g,s[m]),c[m++]=g}for(;f<=h;){const g=a[f++];g!==null&&Sr(g)}return this.ut=i,dl(e,c),G}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Fr=class extends de{constructor(t){if(super(t),this.et=N,t.type!==yt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===N||t==null)return this.ft=void 0,this.et=t;if(t===G)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Fr.directiveName="unsafeHTML",Fr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ho extends Fr{}ho.directiveName="unsafeSVG",ho.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fa(e,t,r){return e?t():r==null?void 0:r()}var ml=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(b){if(b!==void 0&&typeof b!="function")throw new TypeError("Function expected");return b}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var m={};for(var p in n)m[p]=p==="access"?{}:n[p];for(var p in n.access)m.access[p]=n.access[p];m.addInitializer=function(b){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(b||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],m);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=s(g.get))&&(u.get=d),(d=s(g.set))&&(u.set=d),(d=s(g.init))&&o.unshift(d)}else(d=s(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},pl=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},gl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function bl(){function e(t,r){return t}return e}(()=>{let e=[bl()],t,r=[],n,o=Le;return n=class extends o{},gl(n,"DeclarativeElement"),(()=>{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;ml(null,t={value:n},e,{kind:"class",name:n.name,metadata:a},null,r),n=t.value,a&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),pl(n,r)})(),n})();var Ye;(function(e){e.Upper="upper",e.Lower="lower"})(Ye||(Ye={}));function vl(e){return e.toLowerCase()!==e.toUpperCase()}function mo(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!vl(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Ye.Upper&&o!==o.toUpperCase())return!1;if(t===Ye.Lower&&o!==o.toLowerCase())return!1}return!0}function yl(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0&&a[o-1]||"",i=o<a.length-1&&a[o+1]||"",l=mo(s,Ye.Lower,{blockNoCaseCharacters:!0})||mo(i,Ye.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function $l(e){return!!e&&typeof e=="object"}function po(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function wl(e){return Array.isArray(e)?"array":typeof e}function kl(e,t){return wl(e)===t}function El(e,t){let r=!1;const n=po(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(po(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function ke(e){if($l(e))return El(e,(r,n)=>{if(!kl(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(yl(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?R(r):r.startsWith("-")?st`-${R(r)}`:st`--${R(r)}`;return{name:s,value:st`var(${s}, ${R(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${ke.name}' function.`)}function Cl({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sl=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Tl=(e,t,r)=>{t.constructor.createProperty(r,e)};function ir(e){return(t,r)=>r!==void 0?Tl(e,t,r):Sl(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tr;((Tr=window.HTMLSlotElement)===null||Tr===void 0?void 0:Tr.prototype.assignedElements)!=null;function xl(e,t){return e.includes(t)}var go;(function(e){e.Upper="upper",e.Lower="lower"})(go||(go={}));const Ml=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ht(e,t){return e?Ml.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function $t(e){return!!e&&typeof e=="object"}function Ft(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Wr(e){return Array.isArray(e)?"array":typeof e}function ze(e,t){return Wr(e)===t}function _l(e,t){let r=!1;const n=Ft(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Ft(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Ll(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Wr(e)===Wr(t)&&r}const Wa=Symbol("and"),Ya=Symbol("or"),qa=Symbol("exact"),Ga=Symbol("enum"),vn=Symbol("unknown"),Xa="__vir__shape__definition__key__do__not__use__in__actual__objects";function Za(e){return Ht(e,Xa)}const Ja="__vir__shape__specifier__key__do__not__use__in__actual__objects",Pl=[Wa,Ya,qa,Ga,vn];function yn(){return Al([],vn)}function lr(e){return wt(e,Ya)}function $n(e){return wt(e,Wa)}function wn(e){return wt(e,qa)}function kn(e){return wt(e,Ga)}function En(e){return wt(e,vn)}function wt(e,t){const r=cr(e);return!!r&&r.specifierType===t}function Al(e,t){return{[Ja]:!0,specifierType:t,parts:e}}function Ot(e,t){const r=cr(t);if(r){if($n(r))return r.parts.every(n=>Ot(e,n));if(lr(r))return r.parts.some(n=>Ot(e,n));if(wn(r))return $t(e)?Ot(e,r.parts[0]):e===r.parts[0];if(kn(r))return Object.values(r.parts[0]).some(n=>n===e);if(En(r))return!0}return Ll(e,t)}function cr(e){if($t(e)&&Ht(e,Ja)){if(!Ht(e,"parts")||!ze(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Ht(e,"specifierType")||!xl(Pl,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Yr(e,t=!1){return qr(e)}function qr(e){const t=cr(e);if(t){if(lr(t)||wn(t))return qr(t.parts[0]);if($n(t))return t.parts.reduce((r,n)=>Object.assign(r,qr(n)),{});if(kn(t))return Object.values(t.parts[0])[0];if(En(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Za(e)?Yr(e.shape):e instanceof RegExp||ze(e,"array")?e:$t(e)?_l(e,(r,n)=>Yr(n)):e}function Cn(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Yr(e),[Xa]:!0}}class ee extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ka(e,t,r={}){try{return Rl(e,t,r),!0}catch{return!1}}function Rl(e,t,r={}){Te(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Qa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Te(e,t,r,n){if(En(t))return!0;if(Za(t))return Te(e,t.shape,r,n);const o=Qa(r);if(cr(e))throw new ee(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Ot(e,t))throw new ee(`Subject does not match shape definition at key ${o}`);if(ze(t,"function"))return ze(e,"function");if($t(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(lr(t))l=t.parts.some(c=>{try{const u=Te(e,c,r,{...n});return Object.assign(i,u),!0}catch(u){if(u instanceof ee)return!1;throw u}});else if($n(t))l=t.parts.every(c=>{try{const u=Te(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof ee)return!1;throw u}});else if(wn(t)){const c=Te(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(kn(t))throw new ee(`Cannot compare an enum specifier to an object at ${o}`);if(ze(t,"array")&&ze(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return Te(c,f,[...r,u],n),!0}catch(h){if(h instanceof ee)return!1;throw h}});return i[u]=d,d});else{const c=Nl({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(i).filter(d=>!i[d]).join(",")}`;throw new ee(u)}return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new ee(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function Nl({keys:e,options:t,shape:r,subject:n}){const o=Qa(e),a={};if($t(r)){const s=new Set(Ft(n)),i=new Set(Ft(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new ee(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=lr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new ee(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];Te(c,u,[...e,l],t),a[l]=!0})}else throw new ee(`shape definition at ${o} was not an object.`);return a}Cn({addListener(){return!1},removeListener(){return!1},value:yn()});globalThis&&globalThis.__setFunctionName;var bo;(function(e){e.Upper="upper",e.Lower="lower"})(bo||(bo={}));const Bl={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},Hl=Object.keys(Bl),Ol=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Hl,...Ol];function ot(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}var jl=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(b){if(b!==void 0&&typeof b!="function")throw new TypeError("Function expected");return b}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var m={};for(var p in n)m[p]=p==="access"?{}:n[p];for(var p in n.access)m.access[p]=n.access[p];m.addInitializer=function(b){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(b||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],m);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=s(g.get))&&(u.get=d),(d=s(g.set))&&(u.set=d),(d=s(g.init))&&o.unshift(d)}else(d=s(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Dl=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Vl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function zl(){function e(t,r){return t}return e}let es=(()=>{let e=[zl()],t,r=[],n,o=Le;return n=class extends o{},Vl(n,"DeclarativeElement"),(()=>{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;jl(null,t={value:n},e,{kind:"class",name:n.name,metadata:a},null,r),n=t.value,a&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),Dl(n,r)})(),n})();function Il(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Gr(e){return Ze(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function Sn(e){return Ze(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ts(e){return e.map(t=>Gr(t)?t.definition:t).filter(t=>Sn(t))}const rs=new WeakMap;function Ul(e,t){var o;const r=ts(t);return(o=ns(rs,[e,...r]).value)==null?void 0:o.template}function Fl(e,t,r){const n=ts(t);return as(rs,[e,...n],r)}function ns(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=os(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ns(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function os(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function as(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=os(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),as(l,t,r,n+1)}const Wl=new WeakMap;function ss(e,t,r){const n=Ul(e,t),o=n??r();if(!n){const i=Fl(e,t,o);if(i.result)Wl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=Il(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function is(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let p,g=[];if(typeof f=="string"&&(p=r(f,c,m),p)){o[d]=f+p.replacement,s.push(h);const C=p.getExtraValues;g=C?C(m):[],g.length&&C?(o[d]+=" ",g.forEach((L,_)=>{_&&o.push(" ")}),i.push(L=>{const _=L[h],j=C(_);return{index:h,values:j}}),o.push(c)):o[d]+=c}p||o.push(c);const b=e.raw[u];p?(a[d]=a[d]+p.replacement+b,g.length&&g.forEach(()=>{a.push("")})):a.push(b)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function Yl(...[e,t,r]){if(Sn(r))return{replacement:r.tagName,getExtraValues:void 0}}function ql(e,t){return is(e,t,Yl)}function I(e,...t){const r=ss(e,t,()=>ql(e,t));return st(r.strings,...r.values)}const Tn=Symbol("key for ignoring inputs not having been set yet"),Gl={[Tn]:!0,allowPolymorphicState:!1};function ls(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof es?!0:ls(r)}function cs(e,t){const r=e.instanceState;ue(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ue(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Xl(e)}function Xl(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function vo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}let Zl=class extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}};function xn(){return e=>{var t;return t=class extends Zl{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Mn(){return xn()}function Jl(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=xn()(r);return t[r]=n,t},{}):{}}const Kl="_elementVirStateSetup";function Ql(e){return Vr(e)?Kl in e:!1}const ec=Cn({addListener(){return!1},removeListener(){return!1},value:yn()});function xr(e){return Ka(e,ec,{allowExtraKeys:!0})}function tc(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function yo(e,t){const r=e;function n(s){t?tc(s,e,e.tagName):ir()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Ql(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(m){s[i]=m,r[i]=m}const f=e.observablePropertyListenerMap[i];if(u!==c&&xr(u)&&(f!=null&&f.length)&&u.removeListener(f),xr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[i]=m,c.addListener(m)}else xr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function rc(e){return e?Fe(e,t=>t):{}}function nc({hostClassNames:e,cssVars:t}){return{hostClasses:Fe(e,(r,n)=>({name:R(n),selector:R(`:host(.${n})`)})),cssVars:t}}function oc({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ue(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function ac(e,t){function r(o){ue(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var sc=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function _n(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Gl,...e.options},n=Jl(e.events),o=rc(e.hostClasses);e.hostClasses&&vo(e.tagName,e.hostClasses),e.cssVars&&vo(e.tagName,e.cssVars);const a=e.cssVars?ke(e.cssVars):{},s=typeof e.styles=="function"?e.styles(nc({hostClassNames:o,cssVars:a})):e.styles||I``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends es{createRenderParams(){return ac(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{ls(this)&&!this.haveInputsBeenSet&&!r[Tn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${_n.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return oc({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Ta(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){cs(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=yo(this,!1),this.instanceState=yo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};ue(u).forEach(f=>{ir()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},sc(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Hi(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function us(){return e=>_n({...e,options:{[Tn]:!1,...e.options}})}function ds(e,t){return Xr(e,t),e.element}function ic(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Xr(e,t){const r=ic(e),n=r?`: in ${r}`:"";if(e.type!==yt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function lc(e,t){return t?$o(e,t):$o(void 0,e)}const $o=we(class extends de{constructor(e){super(e),this.element=ds(e,"assign")}render(e,t){return cs(this.element,t),G}});function ne(e,t){return cc(e,t)}const cc=we(class extends de{constructor(e){super(e),this.element=ds(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),G}}),wo="onDomCreated",ko=we(class extends de{constructor(e){super(e),Xr(e,wo)}update(e,[t]){Xr(e,wo);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}});function qe(e,t,r){return Fa(e,()=>t,()=>r)}function uc(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),us()(r(n))),defineElementNoInputs:n=>(t(n),_n(r(n)))}}function dc(...[e,t,r]){const n=Gr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=Sn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Gr(c)?c.inputs:void 0;return[o&&u?lc(u):void 0].filter(or)}}}function fc(e){}function hc(e){return is(e.strings,e.values,dc,fc)}function $(e,...t){const r=Ba(e,...t),n=ss(e,t,()=>hc(r));return{...r,strings:n.strings,values:n.values}}const mc={[O.ElementExample]:()=>[],[O.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Ji(e.controls,e.title)].filter(or),[O.Root]:()=>[]},Wt="_isBookTreeNode",fs=new Map;function pc(e){return fs.get(e)}function gc(e,t){Di(fs,e,()=>t)}function Ie(e,t){return!!(hs(e)&&e.entry.entryType===t)}function hs(e){return!!(Ca(e,[Wt,"entry"])&&e[Wt])}function bc(){return{[Wt]:!0,entry:{entryType:O.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function vc({entries:e,debug:t}){const r=pc(e);if(r)return r;const n=bc();e.forEach(s=>Ln({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=ms(n),a={tree:n,flattenedNodes:o};return gc(e,a),t&&console.info("element-book tree:",n),a}function yc(e,t,r){if(!t.parent)return e;const n=Zr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ln({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Zr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${mn(t,!1)}`);return o}function Ln({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=mc[t.entryType](t);t.errors.push(...o);const a=yc(e,t,r),s=Vt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Wt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,Xi(t,O.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Ln({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Zr(e,t){const r=hs(e)?e.fullUrlBreadcrumbs.slice(0,-1):mn(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function ms(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>ms(o));return[e,...r].flat()}function Pn(e,t){return An(e,["",...t],void 0)}function An(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&An(a,n,r);return{...e.controls,...s}}function $c(e,t,r){const n={...e};return An(n,["",...t],r),n}function ps(e,t){const r=(t==null?void 0:t.controls)||(Ie(e,O.Page)?Fe(e.entry.controls,(o,a)=>a.initValue):{});return{children:Fe(e.children,(o,a)=>{var s;return ps(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function wc({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const kc=Gi(32);function jt(e){return e.join(kc)}function gs(e){if(!e.length)return[];const t=jt(e),r=gs(e.slice(0,-1));return[t,...r]}const Ec=["error","errors"];function Cc(e){return Ec.includes(e)}function Sc({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),jt(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&Cc(t),s=jt(o.fullUrlBreadcrumbs);if(wc({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=gs(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=jt(o.fullUrlBreadcrumbs),s=r[a];if(!sr(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var z;(function(e){e.Search="search",e.Book="book"})(z||(z={}));function Jr(e){return e[0]===z.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ge={hash:void 0,paths:[z.Book],search:void 0},Tc=0;function bs(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Tc)}class ur extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Eo extends ur{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const dt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const xc=globalThis.history.pushState;function Co(...e){const t=xc.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(dt)),t}const Mc=globalThis.history.replaceState;function So(...e){const t=Mc.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(dt)),t}function _c(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Co)throw new Eo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===So)throw new Eo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Co,globalThis.history.replaceState=So,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(dt))})}}function dr(e){return!!e}var To;(function(e){e.Upper="upper",e.Lower="lower"})(To||(To={}));function Lc(e,t){return e.split(t)}function Pc(e){return e?e instanceof Error?e.message:Yt(e,"message")?String(e.message):String(e):""}function Ac(e){return!!e&&typeof e=="object"}const Rc=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Yt(e,t){return e?Rc.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function xo(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function vs(e,t,r=!1,n={}){const o=xo(e),a=new Set(xo(t));if(!r){const s=o.filter(i=>!a.has(i));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}a.forEach(s=>{if(!Yt(e,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function i(u){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${u}`)}const l=e[s],c=t[s];n[s]||ys(l,c,i,r,n[s]??{})})}function ys(e,t,r,n,o){var i;const a=typeof e,s=typeof t;a!==s&&r(`type "${a}" did not match expected type "${s}"`);try{Yt(t,"constructor")&&(!Yt(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(i=e==null?void 0:e.constructor)==null?void 0:i.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{ys(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${Pc(f)}`)}}).filter(dr).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):Ac(t)&&vs(e,t,n,o)}function Nc(e){return Array.isArray(e)?"array":typeof e}function Bc(e,t){return Nc(e)===t}function Hc({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Oc(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(dr);return t.length?`?${t.join("&")}`:""}function jc(e){return Hc({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=Lc(n,"="),s=a.join("");if(!(!s&&!o))return[o,s]}).filter(dr)}function Dc(e,t){const r=Bc(e,"string")?new URL(e):e,n=jc(r.search),o=Object.fromEntries(n);return t&&vs(o,t),o}function Vc(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Dc(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function $s(e){return e.replace(/(?:^\/|\/+$)/g,"")}function ws({routeBase:e,windowPath:t}){if(!e)return"";const r=$s(e);if(ks({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?ws({routeBase:n,windowPath:t}):""}function ks({routeBase:e,windowPath:t}){const r=$s(e);return r?t.startsWith(`/${r}`):!1}class zc extends ur{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Es(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Mo=6;function _o(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Mo)throw new zc(`Route sanitization depth has exceed the max of ${Mo} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Es(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Mr extends ur{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Ic(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Mr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Mr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Mr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Uc(e,t,r=!1){const n=Cs(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Cs(e,t){var i;const r=ks({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Oc(e.search):"",o=(i=e.hash)!=null&&i.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(dr).join("/")}${n}${a}`}function Fc(e={}){Ic(e),_c();const t=e.routeBase?ws({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>_o(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Es(l,u)))return Uc(u,t,s)},createRoutesUrl(a){return Cs(a,t)},getCurrentRawRoutes(){return Vc(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new ur(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(dt,n),r=!0),a&&_o(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(dt,n),r=!1),s},sanitizationDepth:0};return o}function Wc(e){return Fc({routeBase:e,routeSanitizer(t){return{paths:Yc(t.paths),hash:void 0,search:void 0}}})}function Yc(e){const t=e[0];if(Ii(t,z)){if(t===z.Book)return[z.Book,...e.slice(1)];if(t===z.Search)return e[1]?[t,e[1]]:[z.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ge.paths}const S=ke({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),qc={nav:{hover:{background:S["element-book-nav-hover-background-color"],foreground:S["element-book-nav-hover-foreground-color"]},active:{background:S["element-book-nav-active-background-color"],foreground:S["element-book-nav-active-foreground-color"]},selected:{background:S["element-book-nav-selected-background-color"],foreground:S["element-book-nav-selected-foreground-color"]}},accent:{icon:S["element-book-accent-icon-color"]},page:{background:S["element-book-page-background-color"],backgroundFaint1:S["element-book-page-background-faint-level-1-color"],backgroundFaint2:S["element-book-page-background-faint-level-2-color"],foreground:S["element-book-page-foreground-color"],foregroundFaint1:S["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:S["element-book-page-foreground-faint-level-2-color"]}};function Gc(e,t){Ss(e,t,qc)}function Kr(e){return Ze(e,"_$cssResult$")}function Lo(e){return Ca(e,["name","value","default"])&&sr(e.default,"string")&&Kr(e.name)&&Kr(e.value)}function Ss(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Kr(o)){if(!Lo(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Cl({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Lo(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ss(e,o,a)}})}function B(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function kt(e){return he(e)==="string"}function he(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function qt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ts(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function xs(e){return e[e.length-1]}function Gt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ms(e,t,r){return(r-e)/(t-e)}function Rn(e,t,r){return Gt(t[0],t[1],Ms(e[0],e[1],r))}function _s(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Xc=Object.freeze({__proto__:null,interpolate:Gt,interpolateInv:Ms,isString:kt,last:xs,mapRange:Rn,multiplyMatrices:B,parseCoordGrammar:_s,parseFunction:Ts,toPrecision:qt,type:he});class Zc{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const pe=new Zc;var ae={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const te={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Qr(e){return Array.isArray(e)?e:te[e]}function Xt(e,t,r,n={}){if(e=Qr(e),t=Qr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(pe.run("chromatic-adaptation-start",o),o.M||(o.W1===te.D65&&o.W2===te.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===te.D50&&o.W2===te.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),pe.run("chromatic-adaptation-end",o),o.M)return B(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Jc=75e-6,W=class W{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?W.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Qr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Kc(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),pe.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Jc}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Po(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Po(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=W.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=W.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(W.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof W)return t;if(he(t)==="string"){let o=W.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return W.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=he(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=W.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=he(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=W.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};vr(W,"registry",{}),vr(W,"DEFAULT_FORMAT",{type:"functions",name:"color"});let y=W;function Kc(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Po(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=_s(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=Rn(i,l,a)),a=qt(a,o),c&&(a+=c),a})}return e}var J=new y({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class U extends y{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=J),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=B(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Xt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Xt(this.base.white,this.white,r),B(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ls(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(pe.run("parse-start",r),r.color)return r.color;if(r.parsed=Ts(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of y.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((p,g)=>r.parsed.args[g]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in y.registry){let f=(i=(s=(a=y.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of y.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||xs(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([m,p],g)=>{var re;let b=u.coordGrammar[g],C=(re=f[g])==null?void 0:re.type,L=b.find(F=>F==C);if(!L){let F=p.name||m;throw new TypeError(`${C} not allowed for ${F} in ${l}()`)}let _=L.range;C==="<percentage>"&&(_||(_=[0,1]));let j=p.range||p.refRange;return _&&j&&(f[g]=Rn(_,j,f[g])),L})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of y.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function T(e){if(!e)throw new TypeError("Empty color reference");kt(e)&&(e=Ls(e));let t=e.space||e.spaceId;return t instanceof y||(e.space=y.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Et(e,t){return t=y.get(t),t.from(e)}function K(e,t){let{space:r,index:n}=y.resolveCoord(t,e.space);return Et(e,r)[n]}function Ps(e,t,r){return t=y.get(t),e.coords=t.to(e.space,r),e}function ge(e,t,r){if(e=T(e),arguments.length===2&&he(arguments[1])==="object"){let n=arguments[1];for(let o in n)ge(e,o,n[o])}else{typeof r=="function"&&(r=r(K(e,t)));let{space:n,index:o}=y.resolveCoord(t,e.space),a=Et(e,n);a[o]=r,Ps(e,n,a)}return e}var Nn=new y({id:"xyz-d50",name:"XYZ D50",white:"D50",base:J,fromBase:e=>Xt(J.white,"D50",e),toBase:e=>Xt("D50",J.white,e),formats:{color:{}}});const Qc=216/24389,Ao=24/116,Tt=24389/27;let _r=te.D50;var Y=new y({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:_r,base:Nn,fromBase(e){let r=e.map((n,o)=>n/_r[o]).map(n=>n>Qc?Math.cbrt(n):(Tt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ao?Math.pow(t[0],3):(116*t[0]-16)/Tt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Tt,t[2]>Ao?Math.pow(t[2],3):(116*t[2]-16)/Tt].map((n,o)=>n*_r[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function fr(e){return(e%360+360)%360}function eu(e,t){if(e==="raw")return t;let[r,n]=t.map(fr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var ft=new y({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Y,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),fr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Ro=25**7,Zt=Math.PI,No=180/Zt,He=Zt/180;function en(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=Y.from(e),l=ft.from(Y,[a,s,i])[1],[c,u,d]=Y.from(t),f=ft.from(Y,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,p=.5*(1-Math.sqrt(m/(m+Ro))),g=(1+p)*s,b=(1+p)*u,C=Math.sqrt(g**2+i**2),L=Math.sqrt(b**2+d**2),_=g===0&&i===0?0:Math.atan2(i,g),j=b===0&&d===0?0:Math.atan2(d,b);_<0&&(_+=2*Zt),j<0&&(j+=2*Zt),_*=No,j*=No;let re=c-a,F=L-C,P=j-_,D=_+j,gr=Math.abs(P),Qe;C*L===0?Qe=0:gr<=180?Qe=P:P>180?Qe=P-360:P<-180?Qe=P+360:console.log("the unthinkable has happened");let zn=2*Math.sqrt(L*C)*Math.sin(Qe*He/2),Si=(a+c)/2,br=(C+L)/2,In=Math.pow(br,7),ie;C*L===0?ie=D:gr<=180?ie=D/2:D<360?ie=(D+360)/2:ie=(D-360)/2;let Un=(Si-50)**2,Ti=1+.015*Un/Math.sqrt(20+Un),Fn=1+.045*br,et=1;et-=.17*Math.cos((ie-30)*He),et+=.24*Math.cos(2*ie*He),et+=.32*Math.cos((3*ie+6)*He),et-=.2*Math.cos((4*ie-63)*He);let Wn=1+.015*br*et,xi=30*Math.exp(-1*((ie-275)/25)**2),Mi=2*Math.sqrt(In/(In+Ro)),_i=-1*Math.sin(2*xi*He)*Mi,St=(re/(r*Ti))**2;return St+=(F/(n*Fn))**2,St+=(zn/(o*Wn))**2,St+=_i*(F/(n*Fn))*(zn/(o*Wn)),Math.sqrt(St)}const tu=75e-6;function it(e,t=e.space,{epsilon:r=tu}={}){e=T(e),t=y.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ht(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function be(e,{method:t=ae.gamut_mapping,space:r=e.space}={}){if(kt(arguments[1])&&(r=arguments[1]),r=y.get(r),it(e,r,{epsilon:0}))return T(e);let n=Z(e,r);if(t!=="clip"&&!it(e,r)){let o=be(ht(n),{method:"clip",space:r});if(en(e,o)>2){let a=y.resolveCoord(t),s=a.space,i=a.id,l=Z(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=K(l,i);for(;h-f>d;){let m=ht(l);m=be(m,{space:r,method:"clip"}),en(l,m)-2<d?f=K(l,i):h=K(l,i),ge(l,i,(f+h)/2)}n=Z(l,r)}else n=o}if(t==="clip"||!it(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=Z(n,e.space)),e.coords=n.coords,e}be.returns="color";function Z(e,t,{inGamut:r}={}){e=T(e),t=y.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=be(o)),o}Z.returns="color";function Jt(e,{precision:t=ae.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=T(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??y.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!it(e)&&(i=be(ht(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>qt(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=qt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const ru=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],nu=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var hr=new U({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:ru,fromXYZ_M:nu,formats:{color:{}}});const xt=1.09929682680944,Bo=.018053968510807;var As=new U({id:"rec2020",name:"REC.2020",base:hr,toBase(e){return e.map(function(t){return t<Bo*4.5?t/4.5:Math.pow((t+xt-1)/xt,1/.45)})},fromBase(e){return e.map(function(t){return t>=Bo?xt*Math.pow(t,.45)-(xt-1):4.5*t})},formats:{color:{}}});const ou=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],au=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Rs=new U({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:ou,fromXYZ_M:au});const su=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],iu=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ns=new U({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:su,fromXYZ_M:iu,formats:{color:{}}}),Ho={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Oo=Array(3).fill("<percentage> | <number>[0, 255]"),jo=Array(3).fill("<number>[0, 255]");var mt=new U({id:"srgb",name:"sRGB",base:Ns,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Oo},rgb_number:{name:"rgb",commas:!0,coords:jo,noAlpha:!0},color:{},rgba:{coords:Oo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:jo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Ho.black,t.alpha=0):t.coords=Ho[e],t.coords)return t}}}}),Bs=new U({id:"p3",name:"P3",base:Rs,fromBase:mt.fromBase,toBase:mt.toBase,formats:{color:{id:"display-p3"}}});ae.display_space=mt;if(typeof CSS<"u"&&CSS.supports)for(let e of[Y,As,Bs]){let t=e.getMinCoords(),n=Jt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ae.display_space=e;break}}function lu(e,{space:t=ae.display_space,...r}={}){let n=Jt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ae.display_space)n=new String(n),n.color=e;else{let o=Z(e,t);n=new String(Jt(o,r)),n.color=o}return n}function Hs(e,t,r="lab"){r=y.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function cu(e,t){return e=T(e),t=T(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ve(e){return K(e,[J,"y"])}function Os(e,t){ge(e,[J,"y"],t)}function uu(e){Object.defineProperty(e.prototype,"luminance",{get(){return ve(this)},set(t){Os(this,t)}})}var du=Object.freeze({__proto__:null,getLuminance:ve,register:uu,setLuminance:Os});function fu(e,t){e=T(e),t=T(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const hu=.56,mu=.57,pu=.62,gu=.65,Do=.022,bu=1.414,vu=.1,yu=5e-4,$u=1.14,Vo=.027,wu=1.14;function zo(e){return e>=Do?e:e+(Do-e)**bu}function Oe(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function ku(e,t){t=T(t),e=T(e);let r,n,o,a,s,i;t=Z(t,"srgb"),[a,s,i]=t.coords;let l=Oe(a)*.2126729+Oe(s)*.7151522+Oe(i)*.072175;e=Z(e,"srgb"),[a,s,i]=e.coords;let c=Oe(a)*.2126729+Oe(s)*.7151522+Oe(i)*.072175,u=zo(l),d=zo(c),f=d>u;return Math.abs(d-u)<yu?n=0:f?(r=d**hu-u**mu,n=r*$u):(r=d**gu-u**pu,n=r*wu),Math.abs(n)<vu?o=0:n>0?o=n-Vo:o=n+Vo,o*100}function Eu(e,t){e=T(e),t=T(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Cu=5e4;function Su(e,t){e=T(e),t=T(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),n===0?Cu:(r-n)/n}function Tu(e,t){e=T(e),t=T(t);let r=K(e,[Y,"l"]),n=K(t,[Y,"l"]);return Math.abs(r-n)}const xu=216/24389,Io=24/116,Mt=24389/27;let Lr=te.D65;var tn=new y({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Lr,base:J,fromBase(e){let r=e.map((n,o)=>n/Lr[o]).map(n=>n>xu?Math.cbrt(n):(Mt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Io?Math.pow(t[0],3):(116*t[0]-16)/Mt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Mt,t[2]>Io?Math.pow(t[2],3):(116*t[2]-16)/Mt].map((n,o)=>n*Lr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Pr=Math.pow(5,.5)*.5+.5;function Mu(e,t){e=T(e),t=T(t);let r=K(e,[tn,"l"]),n=K(t,[tn,"l"]),o=Math.abs(Math.pow(r,Pr)-Math.pow(n,Pr)),a=Math.pow(o,1/Pr)*Math.SQRT2-40;return a<7.5?0:a}var Dt=Object.freeze({__proto__:null,contrastAPCA:ku,contrastDeltaPhi:Mu,contrastLstar:Tu,contrastMichelson:Eu,contrastWCAG21:fu,contrastWeber:Su});function _u(e,t,r={}){kt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Dt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=T(e),t=T(t);for(let a in Dt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Dt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function js(e){let[t,r,n]=Et(e,J),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ds(e){let[t,r,n]=Et(e,J),o=t+r+n;return[t/o,r/o]}function Lu(e){Object.defineProperty(e.prototype,"uv",{get(){return js(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ds(this)}})}var Pu=Object.freeze({__proto__:null,register:Lu,uv:js,xy:Ds});function Au(e,t){return Hs(e,t,"lab")}const Ru=Math.PI,Uo=Ru/180;function Nu(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=Y.from(e),[,i,l]=ft.from(Y,[o,a,s]),[c,u,d]=Y.from(t),f=ft.from(Y,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,m=i-f,p=a-u,g=s-d,b=p**2+g**2-m**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let L=.0638*i/(1+.0131*i)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*Uo)):_=.36+Math.abs(.4*Math.cos((l+35)*Uo));let j=Math.pow(i,4),re=Math.sqrt(j/(j+1900)),F=L*(re*_+1-re),P=(h/(r*C))**2;return P+=(m/(n*L))**2,P+=b/F**2,Math.sqrt(P)}const Fo=203;var Bn=new y({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:J,fromBase(e){return e.map(t=>Math.max(t*Fo,0))},toBase(e){return e.map(t=>Math.max(t/Fo,0))}});const _t=1.15,Lt=.66,Wo=2610/2**14,Bu=2**14/2610,Yo=3424/2**12,qo=2413/2**7,Go=2392/2**7,Hu=1.7*2523/2**5,Xo=2**5/(1.7*2523),Pt=-.56,Ar=16295499532821565e-27,Ou=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ju=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Du=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Vu=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Vs=new y({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Bn,fromBase(e){let[t,r,n]=e,o=_t*t-(_t-1)*n,a=Lt*r-(Lt-1)*t,i=B(Ou,[o,a,n]).map(function(f){let h=Yo+qo*(f/1e4)**Wo,m=1+Go*(f/1e4)**Wo;return(h/m)**Hu}),[l,c,u]=B(Du,i);return[(1+Pt)*l/(1+Pt*l)-Ar,c,u]},toBase(e){let[t,r,n]=e,o=(t+Ar)/(1+Pt-Pt*(t+Ar)),s=B(Vu,[o,r,n]).map(function(f){let h=Yo-f**Xo,m=Go*f**Xo-qo;return 1e4*(h/m)**Bu}),[i,l,c]=B(ju,s),u=(i+(_t-1)*c)/_t,d=(l+(Lt-1)*u)/Lt;return[u,d,c]},formats:{color:{}}}),rn=new y({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Vs,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),fr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function zu(e,t){let[r,n,o]=rn.from(e),[a,s,i]=rn.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const zs=3424/4096,Is=2413/128,Us=2392/128,Zo=2610/16384,Iu=2523/32,Uu=16384/2610,Jo=32/2523,Fu=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Wu=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Yu=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],qu=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var nn=new y({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Bn,fromBase(e){let t=B(Fu,e);return Gu(t)},toBase(e){let t=Xu(e);return B(qu,t)},formats:{color:{}}});function Gu(e){let t=e.map(function(r){let n=zs+Is*(r/1e4)**Zo,o=1+Us*(r/1e4)**Zo;return(n/o)**Iu});return B(Wu,t)}function Xu(e){return B(Yu,e).map(function(n){let o=Math.max(n**Jo-zs,0),a=Is-Us*n**Jo;return 1e4*(o/a)**Uu})}function Zu(e,t){let[r,n,o]=nn.from(e),[a,s,i]=nn.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Ju=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Ku=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Qu=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],ed=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Kt=new y({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:J,fromBase(e){let r=B(Ju,e).map(n=>Math.cbrt(n));return B(Qu,r)},toBase(e){let r=B(ed,e).map(n=>n**3);return B(Ku,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function td(e,t){let[r,n,o]=Kt.from(e),[a,s,i]=Kt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Qt={deltaE76:Au,deltaECMC:Nu,deltaE2000:en,deltaEJz:zu,deltaEITP:Zu,deltaEOK:td};function at(e,t,r={}){kt(r)&&(r={method:r});let{method:n=ae.deltaE,...o}=r;e=T(e),t=T(t);for(let a in Qt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Qt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function rd(e,t=.25){let n=[y.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1+t))}function nd(e,t=.25){let n=[y.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1-t))}var od=Object.freeze({__proto__:null,darken:nd,lighten:rd});function Fs(e,t,r=.5,n={}){[e,t]=[T(e),T(t)],he(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return Ct(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function Ws(e,t,r={}){let n;Hn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[T(e),T(t)],n=Ct(e,t,l));let c=at(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let p=m*f;return{p,color:n(p)}})}if(o>0){let f=d.reduce((h,m,p)=>{if(p===0)return 0;let g=at(m.color,d[p-1].color,a);return Math.max(h,g)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let m=d[h-1],p=d[h],g=(p.p+m.p)/2,b=n(g);f=Math.max(f,at(b,m.color),at(b,p.color)),d.splice(h,0,{p:g,color:n(g)}),h++}}}return d=d.map(f=>f.color),d}function Ct(e,t,r={}){if(Hn(e)){let[l,c]=[e,t];return Ct(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=T(e),t=T(t),e=ht(e),t=ht(t);let i={colors:[e,t],options:r};if(n?n=y.get(n):n=y.registry[ae.interpolationSpace]||e.space,o=o?y.get(o):n,e=Z(e,n),t=Z(t,n),e=be(e),t=be(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[K(e,c),K(t,c)];[u,d]=eu(l,[u,d]),ge(e,c,u),ge(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return Gt(f,m,l)}),u=Gt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=Z(d,o)),d},{rangeArgs:i})}function Hn(e){return he(e)==="function"&&!!e.rangeArgs}ae.interpolationSpace="lab";function ad(e){e.defineFunction("mix",Fs,{returns:"color"}),e.defineFunction("range",Ct,{returns:"function<color>"}),e.defineFunction("steps",Ws,{returns:"array<color>"})}var sd=Object.freeze({__proto__:null,isRange:Hn,mix:Fs,range:Ct,register:ad,steps:Ws}),Ys=new y({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:mt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),qs=new y({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ys,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),id=new y({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:qs,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const ld=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],cd=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Gs=new U({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:ld,fromXYZ_M:cd}),ud=new U({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Gs,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const dd=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],fd=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Xs=new U({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Nn,toXYZ_M:dd,fromXYZ_M:fd});const hd=1/512,md=16/512;var pd=new U({id:"prophoto",name:"ProPhoto",base:Xs,toBase(e){return e.map(t=>t<md?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=hd?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),gd=new y({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Kt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),fr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Ko=203,Qo=2610/2**14,bd=2**14/2610,vd=2523/2**5,ea=2**5/2523,ta=3424/2**12,ra=2413/2**7,na=2392/2**7;var yd=new U({id:"rec2100pq",name:"REC.2100-PQ",base:hr,toBase(e){return e.map(function(t){return(Math.max(t**ea-ta,0)/(ra-na*t**ea))**bd*1e4/Ko})},fromBase(e){return e.map(function(t){let r=Math.max(t*Ko/1e4,0),n=ta+ra*r**Qo,o=1+na*r**Qo;return(n/o)**vd})},formats:{color:{id:"rec2100-pq"}}});const oa=.17883277,aa=.28466892,sa=.55991073,Rr=3.7743;var $d=new U({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:hr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Rr:(Math.exp((t-sa)/oa)+aa)/12*Rr})},fromBase(e){return e.map(function(t){return t/=Rr,t<=1/12?Math.sqrt(3*t):oa*Math.log(12*t-aa)+sa})},formats:{color:{id:"rec2100-hlg"}}});const Zs={};pe.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Js(e.W1,e.W2,e.options.method))});pe.add("chromatic-adaptation-end",e=>{e.M||(e.M=Js(e.W1,e.W2,e.options.method))});function mr({id:e,toCone_M:t,fromCone_M:r}){Zs[e]=arguments[0]}function Js(e,t,r="Bradford"){let n=Zs[r],[o,a,s]=B(n.toCone_M,e),[i,l,c]=B(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=B(u,n.toCone_M);return B(n.fromCone_M,d)}mr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});mr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});mr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});mr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(te,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});te.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const wd=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],kd=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ks=new U({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:te.ACES,toXYZ_M:wd,fromXYZ_M:kd,formats:{color:{}}});const At=2**-16,Nr=-.35828683,Rt=(Math.log2(65504)+9.72)/17.52;var Ed=new U({id:"acescc",name:"ACEScc",coords:{r:{range:[Nr,Rt],name:"Red"},g:{range:[Nr,Rt],name:"Green"},b:{range:[Nr,Rt],name:"Blue"}},referred:"scene",base:Ks,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-At)*2:r<Rt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(At)+9.72)/17.52:t<At?(Math.log2(At+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),ia=Object.freeze({__proto__:null,A98RGB:ud,A98RGB_Linear:Gs,ACEScc:Ed,ACEScg:Ks,HSL:Ys,HSV:qs,HWB:id,ICTCP:nn,JzCzHz:rn,Jzazbz:Vs,LCH:ft,Lab:Y,Lab_D65:tn,OKLCH:gd,OKLab:Kt,P3:Bs,P3_Linear:Rs,ProPhoto:pd,ProPhoto_Linear:Xs,REC_2020:As,REC_2020_Linear:hr,REC_2100_HLG:$d,REC_2100_PQ:yd,XYZ_ABS_D65:Bn,XYZ_D50:Nn,XYZ_D65:J,sRGB:mt,sRGB_Linear:Ns});let M=class V{constructor(...t){let r;t.length===1&&(r=T(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:y.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new V(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=lu(this,...t);return r.color=new V(r.color),r}static get(t,...r){return t instanceof V?t:new V(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=V.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return V.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>V.get(c)));return l};t in V||(V[t]=s),o&&(V.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)V.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(V);else for(let r in t)V.defineFunction(r,t[r])}};M.defineFunctions({get:K,getAll:Et,set:ge,setAll:Ps,to:Z,equals:cu,inGamut:it,toGamut:be,distance:Hs,toString:Jt});Object.assign(M,{util:Xc,hooks:pe,WHITES:te,Space:y,spaces:y.registry,parse:Ls,defaults:ae});for(let e of Object.keys(ia))y.register(ia[e]);for(let e in y.registry)on(e,y.registry[e]);pe.add("colorspace-init-end",e=>{var t;on(e.id,e),(t=e.aliases)==null||t.forEach(r=>{on(r,e)})});function on(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(M.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return y.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=y.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=y.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}M.extend(Qt);M.extend({deltaE:at});Object.assign(M,{deltaEMethods:Qt});M.extend(od);M.extend({contrast:_u});M.extend(Pu);M.extend(du);M.extend(sd);M.extend(Dt);function Qs(e){return Fe(e,(t,r)=>r instanceof M?R(r.toString({format:"hex"})):Qs(r))}const Cd="dodgerblue";function an(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Br({background:e,foreground:t}){return{background:e??new M(an(t)),foreground:t??new M(an(e))}}var er;(function(e){e.Dark="dark",e.Light="light"})(er||(er={}));function Sd(e){return e==="black"?"white":"black"}const Td={black:{foregroundFaint1:new M("#ccc"),foregroundFaint2:new M("#eee")},white:{foregroundFaint1:new M("#ccc"),foregroundFaint2:new M("#eee")}},xd={black:{backgroundFaint1:new M("#666"),backgroundFaint2:new M("#444")},white:{backgroundFaint1:new M("#ccc"),backgroundFaint2:new M("#fafafa")}};function la({themeColor:e=Cd,themeStyle:t=er.Light}={}){const r=new M(e),n=new M(t===er.Dark?"black":"white"),o=an(n),a=new M(o),s={nav:{hover:Br({background:r.clone().set({"hsl.l":93})}),active:Br({background:r.clone().set({"hsl.l":90})}),selected:Br({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...xd[Sd(o)],foreground:a,...Td[o]}};return Qs(s)}const tr=xn()("element-book-change-route");var Md=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(b){if(b!==void 0&&typeof b!="function")throw new TypeError("Function expected");return b}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var m={};for(var p in n)m[p]=p==="access"?{}:n[p];for(var p in n.access)m.access[p]=n.access[p];m.addInitializer=function(b){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(b||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],m);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=s(g.get))&&(u.get=d),(d=s(g.set))&&(u.set=d),(d=s(g.init))&&o.unshift(d)}else(d=s(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},_d=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Ld=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Pd(){function e(t,r){return t}return e}let ei=(()=>{let e=[Pd()],t,r=[],n,o=Le;return n=class extends o{},Ld(n,"DeclarativeElement"),(()=>{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;Md(null,t={value:n},e,{kind:"class",name:n.name,metadata:a},null,r),n=t.value,a&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),_d(n,r)})(),n})();function Ad(e){return!!e}const Rd={capitalizeFirstLetter:!1};function Nd(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Bd(e,t){return t.capitalizeFirstLetter?Nd(e):e}function Hd(e,t=Rd){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Bd(n,t)}var ca;(function(e){e.Upper="upper",e.Lower="lower"})(ca||(ca={}));const Od=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function On(e,t){return e?Od.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function jd(e){return e?e instanceof Error?e.message:On(e,"message")?String(e.message):String(e):""}function Dd(e){return e instanceof Error?e:new Error(jd(e))}function Vd(e){return!!e&&typeof e=="object"}function Re(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ti(e,t){let r=!1;const n=Re(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Re(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function zd(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function sn(e){return On(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function jn(e){return On(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ri(e){return e.map(t=>sn(t)?t.definition:t).filter(t=>jn(t))}const ni=new WeakMap;function Id(e,t){var o;const r=ri(t);return(o=oi(ni,[e,...r]).value)==null?void 0:o.template}function Ud(e,t,r){const n=ri(t);return si(ni,[e,...n],r)}function oi(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ai(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?oi(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ai(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function si(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=ai(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),si(l,t,r,n+1)}const Fd=new WeakMap;function ii(e,t,r){const n=Id(e,t),o=n??r();if(!n){const i=Ud(e,t,o);if(i.result)Fd.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=zd(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function li(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let p,g=[];if(typeof f=="string"&&(p=r(f,c,m),p)){o[d]=f+p.replacement,s.push(h);const C=p.getExtraValues;g=C?C(m):[],g.length&&C?(o[d]+=" ",g.forEach((L,_)=>{_&&o.push(" ")}),i.push(L=>{const _=L[h],j=C(_);return{index:h,values:j}}),o.push(c)):o[d]+=c}p||o.push(c);const b=e.raw[u];p?(a[d]=a[d]+p.replacement+b,g.length&&g.forEach(()=>{a.push("")})):a.push(b)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function Wd(...[e,t,r]){if(jn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Yd(e,t){return li(e,t,Wd)}function v(e,...t){const r=ii(e,t,()=>Yd(e,t));return st(r.strings,...r.values)}const Dn=Symbol("key for ignoring inputs not having been set yet"),qd={[Dn]:!0,allowPolymorphicState:!1};function ci(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ei?!0:ci(r)}function ui(e,t){const r=e.instanceState;Re(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Re(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Gd(e)}function Gd(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function ua(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Xd extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function di(){return e=>{var t;return t=class extends Xd{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Xe(){return di()}function Zd(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=di()([e,n].join("-"));return r[n]=o,r},{}):{}}const Jd="_elementVirStateSetup";function Kd(e){return Vd(e)?Jd in e:!1}const Qd=Cn({addListener(){return!1},removeListener(){return!1},value:yn()});function Hr(e){return Ka(e,Qd,{allowExtraKeys:!0})}function ef(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function da(e,t){const r=e;function n(s){t?ef(s,e,e.tagName):ir()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Kd(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(m){s[i]=m,r[i]=m}const f=e.observablePropertyListenerMap[i];if(u!==c&&Hr(u)&&(f!=null&&f.length)&&u.removeListener(f),Hr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[i]=m,c.addListener(m)}else Hr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function tf(e){return e?ti(e,t=>t):{}}function rf({hostClassNames:e,cssVars:t}){return{hostClasses:ti(e,(r,n)=>({name:R(n),selector:R(`:host(.${n})`)})),cssVars:t}}function nf({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Re(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function of(e,t){function r(o){Re(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var af=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function pr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...qd,...e.options},n=Zd(e.tagName,e.events),o=tf(e.hostClasses);e.hostClasses&&ua(e.tagName,e.hostClasses),e.cssVars&&ua(e.tagName,e.cssVars);const a=e.cssVars?ke(e.cssVars):{},s=typeof e.styles=="function"?e.styles(rf({hostClassNames:o,cssVars:a})):e.styles||v``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends ei{createRenderParams(){return of(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{ci(this)&&!this._haveInputsBeenSet&&!r[Dn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${pr.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return nf({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Dd(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){ui(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=da(this,!1),this.instanceState=da(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};Re(u).forEach(f=>{ir()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},af(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Hd(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function sf(){return e=>pr({...e,options:{[Dn]:!1,...e.options}})}function fi(e,t){return ln(e,t),e.element}function lf(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ln(e,t){const r=lf(e),n=r?`: in ${r}`:"";if(e.type!==yt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function cf(e,t){return t?fa(e,t):fa(void 0,e)}const fa=we(class extends de{constructor(e){super(e),this.element=fi(e,"assign")}render(e,t){return ui(this.element,t),G}});function q(e,t){return uf(e,t)}const uf=we(class extends de{constructor(e){super(e),this.element=fi(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),G}}),Or="onResize",hi=we(class extends de{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),ln(e,Or)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Or} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){ln(e,Or),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Ue(e,t,r){return Fa(e,()=>t,()=>r)}function df(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),sf()(r(n))),defineElementNoInputs:n=>(t(n),pr(r(n)))}}function ff(...[e,t,r]){const n=sn(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=jn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=sn(c)?c.inputs:void 0;return[o&&u?cf(u):void 0].filter(Ad)}}}function hf(e){}function mf(e){return li(e.strings,e.values,ff,hf)}function w(e,...t){const r=Ba(e,...t),n=ii(e,t,()=>mf(r));return{...r,strings:n.strings,values:n.values}}const ha="vira-",{defineElement:Ke,defineElementNoInputs:Zf}=df({assertInputs:e=>{if(!e.tagName.startsWith(ha))throw new Error(`Tag name should start with '${ha}' but got '${e.tagName}'`)}});var ma;(function(e){e.Upper="upper",e.Lower="lower"})(ma||(ma={}));function pf(e){try{const t=e.callback();return t instanceof Promise?t.catch(r=>e.catchCallback?e.catchCallback(r):e.fallbackValue):t}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}function cn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function gf(e,t){let r=!1;const n=cn(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(cn(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function mi(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${mi.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function pa(e){const t=mi();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const bf=globalThis.crypto;function vf(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return bf.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}const yf="px";function pi(e){return $f({value:e,suffix:yf})}function $f({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const wf=M;function kf(e){try{if(!e)throw new Error("invalid empty color");return new wf(e)}catch{const r=String(e),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?pf({callback:()=>JSON.stringify(e),fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const gi=v`
    pointer-events: none;
    opacity: 0.3;
`,me=ke({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),pt=ke({"vira-form-input-border-radius":"8px"}),rr=ke({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${pt["vira-form-input-border-radius"].value} + 4px)`});function bi({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=R(pi(n+r+t));return v`
        ${R(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${rr["vira-focus-outline-color"].value};
            border-radius: ${rr["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Ef=v`
    padding: 0;
    margin: 0;
`,xe=v`
    ${Ef};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,un=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,E=Ke()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var vi=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(vi||{});const H=Ke()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${un};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${rr["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${gi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${xe};
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
            border-radius: ${pt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${me["vira-interaction-animation-duration"].value},
                background-color
                    ${me["vira-interaction-animation-duration"].value},
                border-color ${me["vira-interaction-animation-duration"].value};
        }

        ${bi({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${E} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?w`
                  <${E.assign({icon:e.icon})}></${E}>
              `:"",r=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:"";return w`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var dn=(e=>(e.Header="header",e))(dn||{});const Se=Ke()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${xe};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${me["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Xe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${q("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${hi(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),k=ke({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function se({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Cf(e,t){const r=cn(t).map(n=>{const o=t[n],a=kf(o);return`${k[n].name}: ${a.toString()};`}).join(" ");return se({name:e.name,svgTemplate:w`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const yi=se({name:"CloseX24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$i=se({name:"Element16Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_e=se({name:"Element24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),wi=se({name:"Loader24Icon",svgTemplate:w`
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
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Sf=v`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${me["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,gt=se({name:"LoaderAnimated24Icon",svgTemplate:w`
        <style>
            ${Sf}
        </style>
        ${wi.svgTemplate}
    `}),Vn=se({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${k["vira-icon-stroke-color"].value}"
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),nr=se({name:"StatusFailure24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Tf=se({name:"StatusInProgress24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),xf=se({name:"StatusSuccess24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Mf={CloseX24Icon:yi,Element16Icon:$i,Element24Icon:_e,Loader24Icon:wi,LoaderAnimated24Icon:gt,Options24Icon:Vn,StatusFailure24Icon:nr,StatusInProgress24Icon:Tf,StatusSuccess24Icon:xf};var fn=(e=>(e.Loading="loading",e.Error="error",e))(fn||{});const je=Ke()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:Xe(),imageError:Xe()},styles:({hostClasses:e})=>v`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const a=e.imageUrl,s=t.erroredUrls[a]?w`
                  <slot class="status-wrapper" name=${"error"}>
                      <${E.assign({icon:nr})} class="error"></${E}>
                  </slot>
              `:t.loadedUrls[a]?void 0:w`
                    <slot class="status-wrapper" name=${"loading"}>
                        <${E.assign({icon:gt})}></${E}>
                    </slot>
                `;return w`
            ${Ue(!!s,s)}
            <img
                class=${Ua({hidden:!!s})}
                ${q("load",async()=>{e._debugLoadDelay&&await pa(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${q("error",async i=>{e._debugLoadDelay&&await pa(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new o.imageError(i.error))})}
                src=${a}
            />
        `}});function hn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>hn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function ki({value:e,allowed:t,blocked:r}){const n=t?hn({input:e,matcher:t}):!0,o=r?hn({input:e,matcher:r}):!1;return n&&!o}function Ei(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(ki({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function _f({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=ot(r,HTMLInputElement),s=r.data,i=t;let l=a.value??"";if(s)if(s.length===1)ki({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=i,n(s));else{const{filtered:c,blocked:u}=Ei({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),i!==l&&o(l)}const A=Ke()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Xe(),inputBlocked:Xe()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${rr["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${gi};
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
                ${xe};
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
                ${un};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${xe};
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
                border-radius: ${pt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${me["vira-interaction-animation-duration"].value};
            }

            label {
                ${xe};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${pt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${bi({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${xe};
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
                ${un};
            }

            .close-x-button {
                ${xe};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${me["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Ei({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?w`
                  <${E.assign({icon:e.icon})} class="left-side-icon"></${E}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return w`
            <label>
                ${s}
                ${Ue(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${hi(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${q("input",l=>{_f({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Ue(!!(e.showClearButton&&e.value),w`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${q("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${E.assign({icon:yi})}></${E}>
                        </button>
                    `)}
                ${Ue(!!e.suffix,w`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),nt=Ke()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:Xe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&bs(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return w`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return w`
                <a href=${s} rel="noopener noreferrer" ${q("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:Q,defineElementNoInputs:Jf}=uc(),X=Q()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>I`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return $`
            <a
                href=${r}
                ${ne("click",a=>{(!e.router||bs(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new tr(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Lf(e,t){return e.entry.entryType===O.Root?!1:!!(e.entry.entryType===O.Page||fe(t,e.fullUrlBreadcrumbs.slice(0,-1))||fe(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const le=Q()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>I`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${S["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${S["element-book-nav-hover-background-color"].value};
            color: ${S["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${S["element-book-nav-active-background-color"].value};
            color: ${S["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${X.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${S["element-book-nav-selected-background-color"].value};
            color: ${S["element-book-nav-selected-foreground-color"].value};
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

        ${E} {
            display: inline-flex;
            color: ${S["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Lf(r,e.selectedPath))return;const n=I`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return $`
                <li style=${n}>
                    <${X.assign({router:e.router,route:{paths:[z.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Ua({"title-row":!0,selected:e.selectedPath?fe(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${qe(Ie(r,O.ElementExample),$`
                                    <${E.assign({icon:$i})}></${E}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${X}>
                </li>
            `});return $`
            <${X.assign({route:Ge,router:e.router})}>
                <slot name=${oe.NavHeader}>Book</slot>
            </${X}>
            <ul>
                ${t}
            </ul>
        `}});async function Pf(e){await zr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await el(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ye=Q()({tagName:"book-error",styles:I`
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
    `,renderCallback({inputs:e}){return(sr(e.message,"array")?e.message:[e.message]).map(r=>$`
                <p>${r}</p>
            `)}}),bt=Q()({tagName:"book-page-controls",events:{controlValueChange:Mn()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>I`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
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

        ${A} {
            height: 24px;
            max-width: 128px;
        }

        ${E}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===x.Hidden)return"";const s=Af(e.currentValues[n],o,i=>{const l=sr(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return $`
                    <div class="control-wrapper">
                        ${qe(a===0,$`
                                <${E.assign({icon:Vn})}
                                    class="options-icon"
                                ></${E}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function Af(e,t,r){return Be(t,x.Hidden)?"":Be(t,x.Checkbox)?$`
            <input
                type="checkbox"
                .value=${e}
                ${ne("input",n=>{const o=ot(n,HTMLInputElement);r(o.checked)})}
            />
        `:Be(t,x.Color)?$`
            <input
                type="color"
                .value=${e}
                ${ne("input",n=>{const o=ot(n,HTMLInputElement);r(o.value)})}
            />
        `:Be(t,x.Text)?$`
            <${A.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${ne(A.events.valueChange,n=>{r(n.detail)})}
            ></${A}>
        `:Be(t,x.Number)?$`
            <input
                type="number"
                .value=${e}
                ${ne("input",n=>{const o=ot(n,HTMLInputElement);r(o.value)})}
            />
        `:Be(t,x.Dropdown)?$`
            <select
                .value=${e}
                ${ne("input",n=>{const o=ot(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>$`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:$`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const ga=Q()({tagName:"book-breadcrumbs",styles:I`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":$`
                      <span class="spacer">&gt;</span>
                  `;return $`
                <${X.assign({route:{hash:void 0,search:void 0,paths:[z.Book,...s]},router:e.router})}>
                    ${r}
                </${X}>
                ${i}
            `}):$`
                &nbsp;
            `}}),jr=Q()({tagName:"book-breadcrumbs-bar",styles:I`
        :host {
            border-bottom: 1px solid
                ${S["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${S["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return $`
            ${qe(!!e.currentSearch,$`
                    &nbsp;
                `,$`
                    <${ga.assign({currentRoute:e.currentRoute,router:e.router})}></${ga}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${ne("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Yi(200),n.value===o&&(n.value?t(new tr({paths:[z.Search,encodeURIComponent(n.value)]})):t(new tr(Ge)))})}
            />
        `}}),ba=Q()({tagName:"book-entry-description",styles:I`
        :host {
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${S["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>$`
                <p>${t}</p>
            `)}}),va=Q()({tagName:"book-page-wrapper",styles:I`
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

        ${X} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?$`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:$`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[z.Book,...e.pageNode.fullUrlBreadcrumbs],n=Sa(e.pageNode.entry.errors);return n&&console.error(n),$`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${X.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${X}>
                    ${n?$`
                              <${ye.assign({message:n.message})}></${ye}>
                          `:$`
                              <${ba.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${ba}>
                              <${bt.assign({config:e.pageNode.entry.controls,currentValues:Pn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${bt}>
                          `}
                </div>
            </div>
        `}}),Nt=Q()({tagName:"book-element-example-controls",styles:I`
        :host {
            display: flex;
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[z.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return $`
            <${X.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${X}>
        `}}),ya=Symbol("unset-internal-state"),$a=Q()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:ya},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Sa(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===ya&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return $`
                ${qe(!!t.elementExampleNode.entry.styles,$`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),$`
                <${ye.assign({message:`${t.elementExampleNode.entry.title} failed: ${ar(n)}`})}></${ye}>
            `}},options:{allowPolymorphicState:!0}}),wa=Q()({tagName:"book-element-example-wrapper",styles:I`
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

        ${Nt} {
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Nt} {
            color: ${S["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return $`
            <div class="individual-example-wrapper">
                <${Nt.assign(Fi(e,["currentPageControls"]))}></${Nt}>
                <${$a.assign(e)}></${$a}>
            </div>
        `}});function Ci(e,t,r,n){const o=Zr(r,n),a=[];if(o){const s=Ci(e,t,o,n);s&&a.push(s)}if(Ie(r,O.Page)&&!e.includes(r)){const s=Pn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:Fe(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Rf({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[$`
                No results
            `];const s=Zn(e,1)?Ci(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&Zn(e,1)?$`
                  <${bt.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${bt}>
              `:"",l=hl(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Ie(c,O.Page))return $`
                    <${va.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${va}>
                `;if(Ie(c,O.ElementExample)){const d=Pn(o,c.fullUrlBreadcrumbs.slice(0,-1));return $`
                    <${wa.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${wa}>
                `}else return Ie(c,O.Root)?"":$`
                    <${ye.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ye}>
                `});return[i,l].flat()}const De=Q()({tagName:"book-entry-display",styles:I`
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

        ${jr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${me["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Mn()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Jr(e.currentRoute.paths),s=Rf({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return $`
            <${jr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${jr}>

            ${qe(e.showLoading,$`
                    <div
                        ${ko(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${E.assign({icon:gt})}></${E}>
                    </div>
                    ${qe(!!n.lastElement,$`
                            ${n.lastElement}
                            <slot name=${oe.Footer}></slot>
                        `)}
                `,$`
                    <div
                        ${ko(i=>{o({lastElement:i})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${oe.Footer}></slot>
                `)}
        `}});function Nf(e,t,r){const n=ka(e,t);if(n.length)return n;r(Ge);const o=ka(e,Ge.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function ka(e,t){return e.filter(r=>Ki({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Dr=us()({tagName:"element-book-app",events:{pathUpdate:Mn()},stateInitStatic:{currentRoute:Ge,router:void 0,loading:!0,colors:{config:void 0,theme:la(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:I`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${S["element-book-page-background-color"].value};
            color: ${S["element-book-page-foreground-color"].value};
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

        ${De} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${le} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Ea(e,Jr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,h,m,p,g;t._debug&&console.info("rendering element-book app");function s(b){return{...e.currentRoute,...b}}function i(b){const C=s(b);return!fe(e.currentRoute,C)}function l(b){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,b].filter(or).join(" - "))}function c(b){if(!i(b))return;const C=s(b);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!fe(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!fe(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const P=Wc(t.internalRouterConfig.basePath);n({router:P}),P.addRouteListener(!0,D=>{n({currentRoute:D})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const b={themeColor:t.themeColor};if(!fe(b,(f=e.colors)==null?void 0:f.config)){const P=la(b);n({colors:{config:b,theme:P}}),Gc(r,P)}const C=t._debug??!1,L=vc({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:ps(L.tree,{children:(m=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:t.globalValues})}}));const _=Jr(e.currentRoute.paths),re=(_?Sc({flattenedNodes:L.flattenedNodes,searchQuery:_}):void 0)??Nf(L.flattenedNodes,e.currentRoute.paths,c);l((p=re[0])==null?void 0:p.entry.title);const F=(g=e.treeBasedControls)==null?void 0:g.controls;return F?(t._debug&&console.info({currentControls:F}),$`
                <div
                    class="root"
                    ${ne(tr,async P=>{const D=P.detail;if(!i(D))return;if(n({loading:!0}),c(D),!(r.shadowRoot.querySelector(le.tagName)instanceof le))throw new Error(`Failed to find child '${le.tagName}'`);Ea(r,_,e.currentRoute)})}
                    ${ne(bt.events.controlValueChange,P=>{if(!e.treeBasedControls)return;const D=$c(F,P.detail.fullUrlBreadcrumbs,P.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:D}})})}
                >
                    <${le.assign({flattenedNodes:L.flattenedNodes,router:e.router,selectedPath:_?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${oe.NavHeader}
                            slot=${oe.NavHeader}
                        ></slot>
                    </${le}>
                    <${De.assign({controls:F,currentNodes:re,currentRoute:e.currentRoute,debug:C,originalTree:L.tree,router:e.router,showLoading:e.loading})}
                        ${ne(De.events.loadingRender,async P=>{await zr();const D=r.shadowRoot.querySelector(De.tagName);D?D.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${De.tagName}' for scrolling.`),await zr(),n({loading:!P.detail})})}
                    >
                        <slot
                            name=${oe.Footer}
                            slot=${oe.Footer}
                        ></slot>
                    </${De}>
                </div>
            `):$`
                    <${ye.assign({message:"Failed to generate page controls."})}></${ye}>
                `}catch(b){return console.error(b),$`
                <p class="error">${ar(b)}</p>
            `}}});async function Ea(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(le.tagName);if(!(n instanceof le))throw new Error(`Failed to find child '${le.tagName}'`);await Pf(n)}const Ne=$e({title:"Elements",parent:void 0}),Bf=$e({parent:Ne,title:H.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:x.Color,initValue:H.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:x.Color,initValue:H.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:x.Color,initValue:H.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:x.Color,initValue:H.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??v``;e({title:r,styles:a,renderCallback({controls:s}){const i=v`
                        ${H.cssVars["vira-button-primary-color"].name}: ${R(s["Primary color"]||"inherit")};
                        ${H.cssVars["vira-button-secondary-color"].name}: ${R(s["Secondary color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-hover-color"].name}: ${R(s["Hover color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-active-color"].name}: ${R(s["Active color"]||"inherit")};
                    `;return w`
                        <${H.assign({text:"hello",...o})}
                            style=${i}
                        ></${H}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Vn}}),t({title:"outline",inputs:{buttonStyle:vi.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:v`
                ${H} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:v`
                ${H} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:v`
                :host {
                    ${H.cssVars["vira-button-primary-color"].name}: pink;
                    ${H.cssVars["vira-button-secondary-color"].name}: purple;
                    ${H.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${H.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return w`
                    <${H.assign({text:"hello"})}></${H}>
                `}})}}),Hf=$e({title:Se.tagName,parent:Ne,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>w`
                            <${Se.assign({expanded:!!r.expandedStates[o]})}
                                ${q(Se.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${dn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${q("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Ue(!!r.showMoreStates[o],w`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${Se}>
                        `)}}),e({title:"wider examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>w`
                            <${Se.assign({expanded:!!r.expandedStates[o]})}
                                ${q(Se.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${dn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${q("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Ue(!!r.showMoreStates[o],w`
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
                            </${Se}>
                        `)}})}}),Of=$e({title:E.tagName,parent:Ne,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return w`
                    <${E.assign({icon:_e})}></${E}>
                `}}),e({title:"using createColoredIcon",renderCallback(){return w`
                    <${E.assign({icon:Cf(_e,{"vira-icon-stroke-color":"red"})})}></${E}>
                `}})}}),jf=$e({title:je.tagName,parent:Ne,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:v`
                    border-radius: 32px;
                `,loadingSlot:w`
                    <div
                        style=${v`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${E.assign({icon:gt,fitContainer:!0})}
                            style=${v`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${E}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:v`
                    border-radius: 32px;
                `,errorSlot:w`
                    <div
                        style=${v`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${E.assign({icon:nr,fitContainer:!0})}
                            style=${v`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${E}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/bolt.png"},styles:v`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/bolt.png",dominantDimension:"height"},styles:v`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:v`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:w`
                    <div
                        style=${v`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${E.assign({icon:gt,fitContainer:!0})}
                            style=${v`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${E}>
                    </div>
                `,errorSlot:w`
                    <div
                        style=${v`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${E.assign({icon:nr,fitContainer:!0})}
                            style=${v`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${E}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:v`
                    ${je} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||v``}
                    }

                    ${r.allowReload?v`
                              ${je} {
                                  cursor: pointer;
                              }

                              ${je}:hover {
                                  border-color: #0055ff;
                              }
                          `:v``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:r.inputs.imageUrl},renderCallback({state:n,updateState:o}){return w`
                        <${je.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${q("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${vf()}`})})}
                        >
                            ${r.loadingSlot?w`
                                      <div
                                          class="slot-wrapper"
                                          slot=${fn.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?w`
                                      <div class="slot-wrapper" slot=${fn.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${je}>
                    `}})})}}),Df=$e({title:A.tagName,parent:Ne,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:x.Color,initValue:A.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:x.Color,initValue:A.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:x.Color,initValue:A.cssVars["vira-input-border-color"].default},"Focus color":{controlType:x.Color,initValue:A.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:x.Color,initValue:A.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:v`
                    ${r||v``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:s,controls:i}){const l={[String(A.cssVars["vira-input-text-color"].name)]:i["Text color"],[String(A.cssVars["vira-input-placeholder-color"].name)]:i["Placeholder color"],[String(A.cssVars["vira-input-border-color"].name)]:i["Border color"],[String(A.cssVars["vira-input-focus-border-color"].name)]:i["Focus color"],[String(A.cssVars["vira-input-text-selection-color"].name)]:i["Selection color"]},c=gf(l,(d,f)=>f||"inherit"),u=Object.entries(c).map(([d,f])=>[d,f].join(": ")+";").join(`
`);return w`
                        <${A.assign({...o,value:a.value})}
                            style=${u}
                            ${q(A.events.valueChange,d=>{s({value:d.detail})})}
                        ></${A}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:_e}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:v`
                ${A} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:_e}}),t({title:"taller height",styles:v`
                ${A} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:_e}}),t({title:"shorter height",styles:v`
                ${A} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:_e}}),t({title:"max width",styles:v`
                ${A} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:v`
                ${A} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Vf=$e({title:nt.tagName,parent:Ne,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:x.Color,initValue:""},"Hover color":{controlType:x.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=v`
                        ${nt.cssVars["vira-link-hover-color"].name}: ${R(o["Hover color"]||"inherit")};
                        color: ${R(o["CSS Color"]||"inherit")};
                    `;return w`
                        <${nt.assign(n)}
                            style=${a}
                            ${q(nt.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${nt}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),zf=$e({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:x.Color,initValue:""},"Fill Color":{controlType:x.Color,initValue:""},"Stroke Width":{controlType:x.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(Mf).forEach(t=>{e({title:t.name,styles:v`
                    :host(:hover) ${E} {
                        background-color: #f2f2f2;
                    }

                    ${E} {
                        padding: 8px;
                        border-radius: ${pt["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=v`
                        ${k["vira-icon-fill-color"].name}: ${R(r["Fill Color"]||"inherit")};
                        ${k["vira-icon-stroke-color"].name}: ${R(r["Stroke Color"]||"inherit")};
                        ${k["vira-icon-stroke-width"].name}: ${R(pi(r["Stroke Width"])||"inherit")};
                    `;return w`
                        <${E.assign({icon:t})} style=${n}></${E}>
                    `}})})}}),If=[Ne,zf,Bf,Hf,Of,jf,Df,Vf];pr({tagName:"vira-book-app",styles:v`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Dr} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,renderCallback(){return w`
            <${Dr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:If,themeColor:"#33ccff"})}>
                <h1 slot=${oe.NavHeader}>Vira</h1>
            </${Dr}>
        `}});
