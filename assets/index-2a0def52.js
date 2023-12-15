var pi=Object.defineProperty;var gi=(e,t,r)=>t in e?pi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var dr=(e,t,r)=>(gi(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function bi(e,t){return e.includes(t)}function pe(e){return!!e}function wi(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const vi={capitalizeFirstLetter:!1};function yi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function $i(e,t){return t.capitalizeFirstLetter?yi(e):e}function sa(e,t=vi){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return $i(n,t)}var qe;(function(e){e.Upper="upper",e.Lower="lower"})(qe||(qe={}));function ki(e){return e.toLowerCase()!==e.toUpperCase()}function Dn(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!ki(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===qe.Upper&&o!==o.toUpperCase())return!1;if(t===qe.Lower&&o!==o.toLowerCase())return!1}return!0}function Ei(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0&&a[o-1]||"",i=o<a.length-1&&a[o+1]||"",l=Dn(s,qe.Lower,{blockNoCaseCharacters:!0})||Dn(i,qe.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Ci(e,t){return e.split(t)}var On;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(On||(On={}));const xi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function j(e,t){return e?xi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ia(e,t){return e&&t.every(r=>j(e,r))}function la(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>vt(r).trim()).join(`
`))}function vt(e){return e?e instanceof Error?e.message:j(e,"message")?String(e.message):String(e):""}function an(e){return e instanceof Error?e:new Error(vt(e))}function Si(e){try{const t=e.callback();return t instanceof Promise?t.catch(r=>e.catchCallback?e.catchCallback(r):e.fallbackValue):t}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}function Pr(e){return Array.isArray(e)?"array":typeof e}function Q(e,t){return Pr(e)===t}function ae(e){return!!e&&typeof e=="object"}function D(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ca(e,t,r=!1,n={}){const o=D(e),a=new Set(D(t));if(!r){const s=o.filter(i=>!a.has(i));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}a.forEach(s=>{if(!j(e,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function i(u){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${u}`)}const l=e[s],c=t[s];n[s]||ua(l,c,i,r,n[s]??{})})}function ua(e,t,r,n,o){var i;const a=typeof e,s=typeof t;a!==s&&r(`type "${a}" did not match expected type "${s}"`);try{j(t,"constructor")&&(!j(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(i=e==null?void 0:e.constructor)==null?void 0:i.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{ua(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${vt(f)}`)}}).filter(pe).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):ae(t)&&ca(e,t,n,o)}function Vn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const zn="Failed to compare objects using JSON.stringify";function jn(e,t,r){return Vn({source:e,errorHandler(n){if(r)return"";throw n}})===Vn({source:t,errorHandler(n){if(r)return"";throw n}})}function be(e,t,r={}){try{return e===t?!0:ae(e)&&ae(t)?jn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>be(e[o],t[o])):!1:jn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=an(n);throw o.message.startsWith(zn)||(o.message=`${zn}: ${o.message}`),o}}function Ti(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Mi(e){return D(e).filter(t=>isNaN(Number(t)))}function _i(e){return Mi(e).map(r=>e[r])}function Li(e,t){return _i(t).includes(e)}function Ai(e,t){return D(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Ri(e,t){return Ai(e,r=>!t.includes(r))}function se(e,t){let r=!1;const n=D(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(D(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function In(e,t){try{return da(e,t),!0}catch{return!1}}function da(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function sn(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${sn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Nr(e){const t=sn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Pi=globalThis.crypto;function fa(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Pi.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Ni({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Bi(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(pe);return t.length?`?${t.join("&")}`:""}function Hi(e){return Ni({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=Ci(n,"="),s=a.join("");if(!(!s&&!o))return[o,s]}).filter(pe)}function Di(e,t){const r=Q(e,"string")?new URL(e):e,n=Hi(r.search),o=Object.fromEntries(n);return t&&ca(o,t),o}const Oi="px";function ha(e){return Vi({value:e,suffix:Oi})}function Vi({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function zi(e,t){return j(e,"entryType")&&e.entryType===t}var O;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(O||(O={}));function Oe(e,t){return e.controlType===t}var T;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(T||(T={}));const ma=Symbol("any-type"),ji={[T.Checkbox]:!1,[T.Color]:"",[T.Dropdown]:"",[T.Hidden]:ma,[T.Number]:0,[T.Text]:""};function Ii(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=ji[o.controlType];a!==ma&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function ln(e,t){const r=zt(e.title);return e.parent?[...ln(e.parent,!1),zt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function zt(e){return wi(e).toLowerCase().replaceAll(/\s/g,"-")}function Ui({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function xe(e){const t={...e,entryType:O.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:O.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(pe)};r.add(n.title),t.elementExamples[zt(o.title)]=o}}),t}var ce;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ce||(ce={}));async function Br(e=1){const t=sn();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function Fi(e){return Wi(e,1)}async function Wi(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{da(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=window,cn=Ht.ShadowRoot&&(Ht.ShadyCSS===void 0||Ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,un=Symbol(),Un=new WeakMap;let pa=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==un)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(cn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Un.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Un.set(r,t))}return t}toString(){return this.cssText}};const P=e=>new pa(typeof e=="string"?e:e+"",void 0,un),it=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new pa(r,e,un)},Yi=(e,t)=>{cn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Ht.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Fn=cn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return P(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fr;const jt=window,Wn=jt.trustedTypes,qi=Wn?Wn.emptyScript:"",Yn=jt.reactiveElementPolyfillSupport,Hr={toAttribute(e,t){switch(t){case Boolean:e=e?qi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ga=(e,t)=>t!==e&&(t==t||e==e),hr={attribute:!0,type:String,converter:Hr,reflect:!1,hasChanged:ga},Dr="finalized";let Ue=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=hr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||hr}static finalize(){if(this.hasOwnProperty(Dr))return!1;this[Dr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Fn(o))}else t!==void 0&&r.push(Fn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Yi(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=hr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Hr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Hr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ga)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ue[Dr]=!0,Ue.elementProperties=new Map,Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},Yn==null||Yn({ReactiveElement:Ue}),((fr=jt.reactiveElementVersions)!==null&&fr!==void 0?fr:jt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mr;const It=window,Ge=It.trustedTypes,qn=Ge?Ge.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ut="$lit$",me=`lit$${(Math.random()+"").slice(9)}$`,dn="?"+me,Gi=`<${dn}>`,Be=document,ct=()=>Be.createComment(""),ut=e=>e===null||typeof e!="object"&&typeof e!="function",ba=Array.isArray,wa=e=>ba(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",pr=`[ 	
\f\r]`,rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gn=/-->/g,Xn=/>/g,Me=RegExp(`>|${pr}(?:([^\\s"'>=/]+)(${pr}*=${pr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zn=/'/g,Jn=/"/g,va=/^(?:script|style|textarea|title)$/i,Xi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ya=Xi(1),Z=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Qn=new WeakMap,Pe=Be.createTreeWalker(Be,129,null,!1);function $a(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return qn!==void 0?qn.createHTML(t):t}const ka=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=rt;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===rt?u[1]==="!--"?s=Gn:u[1]!==void 0?s=Xn:u[2]!==void 0?(va.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Me):u[3]!==void 0&&(s=Me):s===Me?u[0]===">"?(s=o??rt,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Me:u[3]==='"'?Jn:Zn):s===Jn||s===Zn?s=Me:s===Gn||s===Xn?s=rt:(s=Me,o=void 0);const h=s===Me&&e[i+1].startsWith("/>")?" ":"";a+=s===rt?l+Gi:d>=0?(n.push(c),l.slice(0,d)+Ut+l.slice(d)+me+h):l+me+(d===-2?(n.push(void 0),i):h)}return[$a(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class dt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=ka(t,r);if(this.el=dt.createElement(c,n),Pe.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=Pe.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Ut)||f.startsWith(me)){const h=u[s++];if(d.push(f),h!==void 0){const m=o.getAttribute(h.toLowerCase()+Ut).split(me),p=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:p[2],strings:m,ctor:p[1]==="."?Ca:p[1]==="?"?xa:p[1]==="@"?Sa:yt})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(va.test(o.tagName)){const d=o.textContent.split(me),f=d.length-1;if(f>0){o.textContent=Ge?Ge.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],ct()),Pe.nextNode(),l.push({type:2,index:++a});o.append(d[f],ct())}}}else if(o.nodeType===8)if(o.data===dn)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(me,d+1))!==-1;)l.push({type:7,index:a}),d+=me.length-1}a++}}static createElement(t,r){const n=Be.createElement("template");return n.innerHTML=t,n}}function He(e,t,r=e,n){var o,a,s,i;if(t===Z)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=ut(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=He(e,l._$AS(e,t.values),l,n)),t}class Ea{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Be).importNode(n,!0);Pe.currentNode=a;let s=Pe.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new Qe(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new Ta(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=Pe.nextNode(),i++)}return Pe.currentNode=Be,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Qe{constructor(t,r,n,o){var a;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=He(this,t,r),ut(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==Z&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):wa(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==N&&ut(this._$AH)?this._$AA.nextSibling.data=t:this.$(Be.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=dt.createElement($a(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new Ea(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=Qn.get(t.strings);return r===void 0&&Qn.set(t.strings,r=new dt(t)),r}T(t){ba(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Qe(this.k(ct()),this.k(ct()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class yt{constructor(t,r,n,o,a){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=He(this,t,r,0),s=!ut(t)||t!==this._$AH&&t!==Z,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=He(this,i[n+l],r,l),c===Z&&(c=this._$AH[l]),s||(s=!ut(c)||c!==this._$AH[l]),c===N?t=N:t!==N&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ca extends yt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const Zi=Ge?Ge.emptyScript:"";class xa extends yt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,Zi):this.element.removeAttribute(this.name)}}class Sa extends yt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=He(this,t,r,0))!==null&&n!==void 0?n:N)===Z)return;const o=this._$AH,a=t===N&&o!==N||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==N&&(o===N||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Ta{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){He(this,t)}}const Ji={O:Ut,P:me,A:dn,C:1,M:ka,L:Ea,R:wa,D:He,I:Qe,V:yt,H:xa,N:Sa,U:Ca,F:Ta},Kn=It.litHtmlPolyfillSupport;Kn==null||Kn(dt,Qe),((mr=It.litHtmlVersions)!==null&&mr!==void 0?mr:It.litHtmlVersions=[]).push("2.8.0");const Qi=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Qe(t.insertBefore(ct(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr,br;let Fe=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Z}};Fe.finalized=!0,Fe._$litElement$=!0,(gr=globalThis.litElementHydrateSupport)===null||gr===void 0||gr.call(globalThis,{LitElement:Fe});const eo=globalThis.litElementPolyfillSupport;eo==null||eo({LitElement:Fe});((br=globalThis.litElementVersions)!==null&&br!==void 0?br:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Se=e=>(...t)=>({_$litDirective$:e,values:t});let ge=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ki}=Ji,to=()=>document.createComment(""),nt=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(to(),a),i=o.insertBefore(to(),a);r=new Ki(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},_e=(e,t,r=e)=>(e._$AI(t,r),e),el={},tl=(e,t=el)=>e._$AH=t,rl=e=>e._$AH,wr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ma=Se(class extends ge{constructor(e){var t;if(super(e),e.type!==$t.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return Z}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},nl=Se(class extends ge{constructor(e){if(super(e),e.type!==$t.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=rl(e),{values:s,keys:i}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=i,s;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,h=a.length-1,m=0,p=s.length-1;for(;f<=h&&m<=p;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[m])c[m]=_e(a[f],s[m]),f++,m++;else if(l[h]===i[p])c[p]=_e(a[h],s[p]),h--,p--;else if(l[f]===i[p])c[p]=_e(a[f],s[p]),nt(e,c[p+1],a[f]),f++,p--;else if(l[h]===i[m])c[m]=_e(a[h],s[m]),nt(e,a[f],a[h]),h--,m++;else if(u===void 0&&(u=ro(i,m,p),d=ro(l,f,h)),u.has(l[f]))if(u.has(l[h])){const w=d.get(i[m]),k=w!==void 0?a[w]:null;if(k===null){const C=nt(e,a[f]);_e(C,s[m]),c[m]=C}else c[m]=_e(k,s[m]),nt(e,a[f],k),a[w]=null;m++}else wr(a[h]),h--;else wr(a[f]),f++;for(;m<=p;){const w=nt(e,c[p+1]);_e(w,s[m]),c[m++]=w}for(;f<=h;){const w=a[f++];w!==null&&wr(w)}return this.ut=i,tl(e,c),Z}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Or=class extends ge{constructor(t){if(super(t),this.et=N,t.type!==$t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===N||t==null)return this.ft=void 0,this.et=t;if(t===Z)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Or.directiveName="unsafeHTML",Or.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class no extends Or{}no.directiveName="unsafeSVG",no.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _a(e,t,r){return e?t():r==null?void 0:r()}let La=class extends Fe{};function Te(e){if(ae(e))return se(e,(r,n)=>{if(!Q(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Ei(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?P(r):r.startsWith("-")?it`-${P(r)}`:it`--${P(r)}`;return{name:s,value:it`var(${s}, ${P(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${Te.name}' function.`)}function ol({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function al(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Vr(e){return j(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function fn(e){return j(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Aa(e){return e.map(t=>Vr(t)?t.definition:t).filter(t=>fn(t))}const Ra=new WeakMap;function sl(e,t){var o;const r=Aa(t);return(o=Pa(Ra,[e,...r]).value)==null?void 0:o.template}function il(e,t,r){const n=Aa(t);return Ba(Ra,[e,...n],r)}function Pa(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Na(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Pa(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Na(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ba(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Na(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Ba(l,t,r,n+1)}const ll=new WeakMap;function Ha(e,t,r){const n=sl(e,t),o=n??r();if(!n){const i=il(e,t,o);if(i.result)ll.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=al(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Da(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let p,w=[];if(typeof f=="string"&&(p=r(f,c,m),p)){o[d]=f+p.replacement,s.push(h);const C=p.getExtraValues;w=C?C(m):[],w.length&&C?(o[d]+=" ",w.forEach((L,_)=>{_&&o.push(" ")}),i.push(L=>{const _=L[h],V=C(_);return{index:h,values:V}}),o.push(c)):o[d]+=c}p||o.push(c);const k=e.raw[u];p?(a[d]=a[d]+p.replacement+k,w.length&&w.forEach(()=>{a.push("")})):a.push(k)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function cl(...[e,t,r]){if(fn(r))return{replacement:r.tagName,getExtraValues:void 0}}function ul(e,t){return Da(e,t,cl)}function g(e,...t){const r=Ha(e,t,()=>ul(e,t));return it(r.strings,...r.values)}const hn=Symbol("key for ignoring inputs not having been set yet"),dl={[hn]:!0,allowPolymorphicState:!1};function Oa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof La?!0:Oa(r)}function Va(e,t){const r=e.instanceState;D(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&D(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),fl(e)}function fl(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function oo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}let hl=class extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}};function za(){return e=>{var t;return t=class extends hl{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Xe(){return za()}function ml(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=za()([e,n].join("_"));return r[n]=o,r},{}):{}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pl=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},gl=(e,t,r)=>{t.constructor.createProperty(r,e)};function ja(e){return(t,r)=>r!==void 0?gl(e,t,r):pl(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vr;((vr=window.HTMLSlotElement)===null||vr===void 0?void 0:vr.prototype.assignedElements)!=null;const bl="_elementVirStateSetup";function wl(e){return ae(e)?bl in e:!1}function vl(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Pr(e)===Pr(t)&&r}const Ia=Symbol("and"),Ua=Symbol("or"),Fa=Symbol("exact"),Wa=Symbol("enum"),mn=Symbol("unknown"),Ya="__vir__shape__definition__key__do__not__use__in__actual__objects";function qa(e){return j(e,Ya)}const Ga="__vir__shape__specifier__key__do__not__use__in__actual__objects",yl=[Ia,Ua,Fa,Wa,mn];function Xa(){return $l([],mn)}function rr(e){return kt(e,Ua)}function pn(e){return kt(e,Ia)}function gn(e){return kt(e,Fa)}function bn(e){return kt(e,Wa)}function wn(e){return kt(e,mn)}function kt(e,t){const r=nr(e);return!!r&&r.specifierType===t}function $l(e,t){return{[Ga]:!0,specifierType:t,parts:e}}function Dt(e,t){const r=nr(t);if(r){if(pn(r))return r.parts.every(n=>Dt(e,n));if(rr(r))return r.parts.some(n=>Dt(e,n));if(gn(r))return ae(e)?Dt(e,r.parts[0]):e===r.parts[0];if(bn(r))return Object.values(r.parts[0]).some(n=>n===e);if(wn(r))return!0}return vl(e,t)}function nr(e){if(ae(e)&&j(e,Ga)){if(!j(e,"parts")||!Q(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!j(e,"specifierType")||!bi(yl,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function zr(e,t=!1){return jr(e)}function jr(e){const t=nr(e);if(t){if(rr(t)||gn(t))return jr(t.parts[0]);if(pn(t))return t.parts.reduce((r,n)=>Object.assign(r,jr(n)),{});if(bn(t))return Object.values(t.parts[0])[0];if(wn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return qa(e)?zr(e.shape):e instanceof RegExp||Q(e,"array")?e:ae(e)?se(e,(r,n)=>zr(n)):e}function Za(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:zr(e),[Ya]:!0}}class ne extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ja(e,t,r={}){try{return kl(e,t,r),!0}catch{return!1}}function kl(e,t,r={}){Ae(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Qa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Ae(e,t,r,n){if(wn(t))return!0;if(qa(t))return Ae(e,t.shape,r,n);const o=Qa(r);if(nr(e))throw new ne(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Dt(e,t))throw new ne(`Subject does not match shape definition at key ${o}`);if(Q(t,"function"))return Q(e,"function");if(ae(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(rr(t))l=t.parts.some(c=>{try{const u=Ae(e,c,r,{...n});return Object.assign(i,u),!0}catch(u){if(u instanceof ne)return!1;throw u}});else if(pn(t))l=t.parts.every(c=>{try{const u=Ae(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof ne)return!1;throw u}});else if(gn(t)){const c=Ae(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(bn(t))throw new ne(`Cannot compare an enum specifier to an object at ${o}`);if(Q(t,"array")&&Q(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return Ae(c,f,[...r,u],n),!0}catch(h){if(h instanceof ne)return!1;throw h}});return i[u]=d,d});else{const c=El({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(i).filter(d=>!i[d]).join(",")}`;throw new ne(u)}return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new ne(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function El({keys:e,options:t,shape:r,subject:n}){const o=Qa(e),a={};if(ae(r)){const s=new Set(D(n)),i=new Set(D(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new ne(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=rr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new ne(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];Ae(c,u,[...e,l],t),a[l]=!0})}else throw new ne(`shape definition at ${o} was not an object.`);return a}const Cl=Za({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:Xa()});function yr(e){return Ja(e,Cl,{allowExtraKeys:!0})}function Ka(e,t){t in e||ja()(e,t)}function xl(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function ao(e,t){const r=e;function n(s){t?xl(s,e,e.tagName):Ka(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set(s,i,l){const c=wl(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(m){s[i]=m,r[i]=m}const f=e.observablePropertyListenerMap[i];if(u!==c&&yr(u)&&(f!=null&&f.length)&&u.removeListener(f),yr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[i]=m,c.addListener(m)}else yr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has(s,i){return Reflect.has(s,i)}})}function Sl(e){return e?se(e,t=>t):{}}function Tl({hostClassNames:e,cssVars:t}){return{hostClasses:se(e,(r,n)=>({name:P(n),selector:P(`:host(.${n})`)})),cssVars:t}}function Ml({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&D(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function _l(e,t){function r(o){D(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Ll=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function or(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...dl,...e.options},n=ml(e.tagName,e.events),o=Sl(e.hostClasses);e.hostClasses&&oo(e.tagName,e.hostClasses),e.cssVars&&oo(e.tagName,e.cssVars);const a=e.cssVars?Te(e.cssVars):{},s=typeof e.styles=="function"?e.styles(Tl({hostClassNames:o,cssVars:a})):e.styles||g``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends La{createRenderParams(){return _l(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Oa(this)&&!this._haveInputsBeenSet&&!r[hn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${or.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Ml({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=an(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){Va(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=ao(this,!1),this.instanceState=ao(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};D(u).forEach(f=>{Ka(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Ll(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:sa(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Al(){return e=>or({...e,options:{[hn]:!1,...e.options}})}function es(e,t){return Ir(e,t),e.element}function Rl(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ir(e,t){const r=Rl(e),n=r?`: in ${r}`:"";if(e.type!==$t.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Pl(e,t){return t?so(e,t):so(void 0,e)}const so=Se(class extends ge{constructor(e){super(e),this.element=es(e,"assign")}render(e,t){return Va(this.element,t),Z}});function G(e,t){return Nl(e,t)}const Nl=Se(class extends ge{constructor(e){super(e),this.element=es(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Z}}),$r="onResize",ts=Se(class extends ge{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Ir(e,$r)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${$r} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Ir(e,$r),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function We(e,t,r){return _a(e,()=>t,()=>r)}function Bl(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Al()(r(n))),defineElementNoInputs:n=>(t(n),or(r(n)))}}function Hl(...[e,t,r]){const n=Vr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=fn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Vr(c)?c.inputs:void 0;return[o&&u?Pl(u):void 0].filter(pe)}}}function Dl(e){}function Ol(e){return Da(e.strings,e.values,Hl,Dl)}function v(e,...t){const r=ya(e,...t),n=Ha(e,t,()=>Ol(r));return{...r,strings:n.strings,values:n.values}}const Vl={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},zl=Object.keys(Vl),jl=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...zl,...jl];function at(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}class rs extends Fe{}function Il(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Ur(e){return j(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function vn(e){return j(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ns(e){return e.map(t=>Ur(t)?t.definition:t).filter(t=>vn(t))}const os=new WeakMap;function Ul(e,t){var o;const r=ns(t);return(o=as(os,[e,...r]).value)==null?void 0:o.template}function Fl(e,t,r){const n=ns(t);return is(os,[e,...n],r)}function as(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ss(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?as(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ss(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function is(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=ss(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),is(l,t,r,n+1)}const Wl=new WeakMap;function ls(e,t,r){const n=Ul(e,t),o=n??r();if(!n){const i=Fl(e,t,o);if(i.result)Wl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=Il(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function cs(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let p,w=[];if(typeof f=="string"&&(p=r(f,c,m),p)){o[d]=f+p.replacement,s.push(h);const C=p.getExtraValues;w=C?C(m):[],w.length&&C?(o[d]+=" ",w.forEach((L,_)=>{_&&o.push(" ")}),i.push(L=>{const _=L[h],V=C(_);return{index:h,values:V}}),o.push(c)):o[d]+=c}p||o.push(c);const k=e.raw[u];p?(a[d]=a[d]+p.replacement+k,w.length&&w.forEach(()=>{a.push("")})):a.push(k)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function Yl(...[e,t,r]){if(vn(r))return{replacement:r.tagName,getExtraValues:void 0}}function ql(e,t){return cs(e,t,Yl)}function F(e,...t){const r=ls(e,t,()=>ql(e,t));return it(r.strings,...r.values)}const yn=Symbol("key for ignoring inputs not having been set yet"),Gl={[yn]:!0,allowPolymorphicState:!1};function us(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof rs?!0:us(r)}function ds(e,t){const r=e.instanceState;D(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&D(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Xl(e)}function Xl(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function io(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Zl extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function $n(){return e=>{var t;return t=class extends Zl{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function kn(){return $n()}function Jl(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=$n()([e,n].join("-"));return r[n]=o,r},{}):{}}const Ql="_elementVirStateSetup";function Kl(e){return ae(e)?Ql in e:!1}const ec=Za({addListener(){return!1},removeListener(){return!1},value:Xa()});function kr(e){return Ja(e,ec,{allowExtraKeys:!0})}function fs(e,t){t in e||ja()(e,t)}function tc(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function lo(e,t){const r=e;function n(s){t?tc(s,e,e.tagName):fs(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set(s,i,l){const c=Kl(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(m){s[i]=m,r[i]=m}const f=e.observablePropertyListenerMap[i];if(u!==c&&kr(u)&&(f!=null&&f.length)&&u.removeListener(f),kr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[i]=m,c.addListener(m)}else kr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has(s,i){return Reflect.has(s,i)}})}function rc(e){return e?se(e,t=>t):{}}function nc({hostClassNames:e,cssVars:t}){return{hostClasses:se(e,(r,n)=>({name:P(n),selector:P(`:host(.${n})`)})),cssVars:t}}function oc({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&D(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function ac(e,t){function r(o){D(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var sc=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function En(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Gl,...e.options},n=Jl(e.tagName,e.events),o=rc(e.hostClasses);e.hostClasses&&io(e.tagName,e.hostClasses),e.cssVars&&io(e.tagName,e.cssVars);const a=e.cssVars?Te(e.cssVars):{},s=typeof e.styles=="function"?e.styles(nc({hostClassNames:o,cssVars:a})):e.styles||F``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends rs{createRenderParams(){return ac(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{us(this)&&!this._haveInputsBeenSet&&!r[yn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${En.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return oc({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=an(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){ds(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=lo(this,!1),this.instanceState=lo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};D(u).forEach(f=>{fs(this,f),this.instanceState[f]=u[f]}),this.definition=c}},sc(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:sa(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function hs(){return e=>En({...e,options:{[yn]:!1,...e.options}})}function ms(e,t){return Fr(e,t),e.element}function ic(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Fr(e,t){const r=ic(e),n=r?`: in ${r}`:"";if(e.type!==$t.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function lc(e,t){return t?co(e,t):co(void 0,e)}const co=Se(class extends ge{constructor(e){super(e),this.element=ms(e,"assign")}render(e,t){return ds(this.element,t),Z}});function le(e,t){return cc(e,t)}const cc=Se(class extends ge{constructor(e){super(e),this.element=ms(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Z}}),uo="onDomCreated",fo=Se(class extends ge{constructor(e){super(e),Fr(e,uo)}update(e,[t]){Fr(e,uo);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}});function Ze(e,t,r){return _a(e,()=>t,()=>r)}function uc(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),hs()(r(n))),defineElementNoInputs:n=>(t(n),En(r(n)))}}function dc(...[e,t,r]){const n=Ur(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=vn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Ur(c)?c.inputs:void 0;return[o&&u?lc(u):void 0].filter(pe)}}}function fc(e){}function hc(e){return cs(e.strings,e.values,dc,fc)}function y(e,...t){const r=ya(e,...t),n=ls(e,t,()=>hc(r));return{...r,strings:n.strings,values:n.values}}const mc={[O.ElementExample]:()=>[],[O.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Ii(e.controls,e.title)].filter(pe),[O.Root]:()=>[]},Ft="_isBookTreeNode",ps=new Map;function pc(e){return ps.get(e)}function gc(e,t){Ti(ps,e,()=>t)}function Ye(e,t){return!!(gs(e)&&e.entry.entryType===t)}function gs(e){return!!(ia(e,[Ft,"entry"])&&e[Ft])}function bc(){return{[Ft]:!0,entry:{entryType:O.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function wc({entries:e,debug:t}){const r=pc(e);if(r)return r;const n=bc();e.forEach(s=>Cn({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=bs(n),a={tree:n,flattenedNodes:o};return gc(e,a),t&&console.info("element-book tree:",n),a}function vc(e,t,r){if(!t.parent)return e;const n=Wr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Cn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Wr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${ln(t,!1)}`);return o}function Cn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=mc[t.entryType](t);t.errors.push(...o);const a=vc(e,t,r),s=zt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Ft]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,zi(t,O.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Cn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Wr(e,t){const r=gs(e)?e.fullUrlBreadcrumbs.slice(0,-1):ln(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function bs(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>bs(o));return[e,...r].flat()}function xn(e,t){return Sn(e,["",...t],void 0)}function Sn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&Sn(a,n,r);return{...e.controls,...s}}function yc(e,t,r){const n={...e};return Sn(n,["",...t],r),n}function ws(e,t){const r=(t==null?void 0:t.controls)||(Ye(e,O.Page)?se(e.entry.controls,(o,a)=>a.initValue):{});return{children:se(e.children,(o,a)=>{var s;return ws(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function $c({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const kc=fa(32);function Ot(e){return e.join(kc)}function vs(e){if(!e.length)return[];const t=Ot(e),r=vs(e.slice(0,-1));return[t,...r]}const Ec=["error","errors"];function Cc(e){return Ec.includes(e)}function xc({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Ot(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&Cc(t),s=Ot(o.fullUrlBreadcrumbs);if($c({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=vs(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=Ot(o.fullUrlBreadcrumbs),s=r[a];if(!Q(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var U;(function(e){e.Search="search",e.Book="book"})(U||(U={}));function Yr(e){return e[0]===U.Book?"":e[1]?decodeURIComponent(e[1]):""}const Je={hash:void 0,paths:[U.Book],search:void 0},Sc=0;function ys(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Sc)}class ar extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class ho extends ar{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const ft="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Tc=globalThis.history.pushState;function mo(...e){const t=Tc.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ft)),t}const Mc=globalThis.history.replaceState;function po(...e){const t=Mc.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ft)),t}function _c(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===mo)throw new ho("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===po)throw new ho("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=mo,globalThis.history.replaceState=po,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ft))})}}function Lc(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Di(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function $s(e){return e.replace(/(?:^\/|\/+$)/g,"")}function ks({routeBase:e,windowPath:t}){if(!e)return"";const r=$s(e);if(Es({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?ks({routeBase:n,windowPath:t}):""}function Es({routeBase:e,windowPath:t}){const r=$s(e);return r?t.startsWith(`/${r}`):!1}class Ac extends ar{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Cs(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const go=6;function bo(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>go)throw new Ac(`Route sanitization depth has exceed the max of ${go} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Cs(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Er extends ar{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Rc(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Er(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Er(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Er(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Pc(e,t,r=!1){const n=xs(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function xs(e,t){var i;const r=Es({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Bi(e.search):"",o=(i=e.hash)!=null&&i.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(pe).join("/")}${n}${a}`}function Nc(e={}){Rc(e),_c();const t=e.routeBase?ks({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>bo(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Cs(l,u)))return Pc(u,t,s)},createRoutesUrl(a){return xs(a,t)},getCurrentRawRoutes(){return Lc(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new ar(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(ft,n),r=!0),a&&bo(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(ft,n),r=!1),s},sanitizationDepth:0};return o}function Bc(e){return Nc({routeBase:e,routeSanitizer(t){return{paths:Hc(t.paths),hash:void 0,search:void 0}}})}function Hc(e){const t=e[0];if(Li(t,U)){if(t===U.Book)return[U.Book,...e.slice(1)];if(t===U.Search)return e[1]?[t,e[1]]:[U.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Je.paths}const x=Te({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Dc={nav:{hover:{background:x["element-book-nav-hover-background-color"],foreground:x["element-book-nav-hover-foreground-color"]},active:{background:x["element-book-nav-active-background-color"],foreground:x["element-book-nav-active-foreground-color"]},selected:{background:x["element-book-nav-selected-background-color"],foreground:x["element-book-nav-selected-foreground-color"]}},accent:{icon:x["element-book-accent-icon-color"]},page:{background:x["element-book-page-background-color"],backgroundFaint1:x["element-book-page-background-faint-level-1-color"],backgroundFaint2:x["element-book-page-background-faint-level-2-color"],foreground:x["element-book-page-foreground-color"],foregroundFaint1:x["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:x["element-book-page-foreground-faint-level-2-color"]}};function Oc(e,t){Ss(e,t,Dc)}function qr(e){return j(e,"_$cssResult$")}function wo(e){return ia(e,["name","value","default"])&&Q(e.default,"string")&&qr(e.name)&&qr(e.value)}function Ss(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(qr(o)){if(!wo(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);ol({forCssVar:a,onElement:e,toValue:String(o)})}else{if(wo(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ss(e,o,a)}})}function B(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function Et(e){return we(e)==="string"}function we(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Wt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ts(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Ms(e){return e[e.length-1]}function Yt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function _s(e,t,r){return(r-e)/(t-e)}function Tn(e,t,r){return Yt(t[0],t[1],_s(e[0],e[1],r))}function Ls(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Vc=Object.freeze({__proto__:null,interpolate:Yt,interpolateInv:_s,isString:Et,last:Ms,mapRange:Tn,multiplyMatrices:B,parseCoordGrammar:Ls,parseFunction:Ts,toPrecision:Wt,type:we});class zc{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ye=new zc;var ue={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const oe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Gr(e){return Array.isArray(e)?e:oe[e]}function qt(e,t,r,n={}){if(e=Gr(e),t=Gr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ye.run("chromatic-adaptation-start",o),o.M||(o.W1===oe.D65&&o.W2===oe.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===oe.D50&&o.W2===oe.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ye.run("chromatic-adaptation-end",o),o.M)return B(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const jc=75e-6,q=class q{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?q.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Gr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Ic(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ye.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=jc}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=vo(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=vo(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=q.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=q.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(q.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof q)return t;if(we(t)==="string"){let o=q.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return q.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=we(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=q.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=we(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=q.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};dr(q,"registry",{}),dr(q,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=q;function Ic(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function vo(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ls(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=Tn(i,l,a)),a=Wt(a,o),c&&(a+=c),a})}return e}var ee=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class W extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=ee),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=B(t.toXYZ_M,r);return this.white!==this.base.white&&(n=qt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=qt(this.base.white,this.white,r),B(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function As(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(ye.run("parse-start",r),r.color)return r.color;if(r.parsed=Ts(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((p,w)=>r.parsed.args[w]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Ms(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([m,p],w)=>{var ie;let k=u.coordGrammar[w],C=(ie=f[w])==null?void 0:ie.type,L=k.find(Y=>Y==C);if(!L){let Y=p.name||m;throw new TypeError(`${C} not allowed for ${Y} in ${l}()`)}let _=L.range;C==="<percentage>"&&(_||(_=[0,1]));let V=p.range||p.refRange;return _&&V&&(f[w]=Tn(_,V,f[w])),L})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function S(e){if(!e)throw new TypeError("Empty color reference");Et(e)&&(e=As(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Ct(e,t){return t=b.get(t),t.from(e)}function te(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return Ct(e,r)[n]}function Rs(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function $e(e,t,r){if(e=S(e),arguments.length===2&&we(arguments[1])==="object"){let n=arguments[1];for(let o in n)$e(e,o,n[o])}else{typeof r=="function"&&(r=r(te(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=Ct(e,n);a[o]=r,Rs(e,n,a)}return e}var Mn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:ee,fromBase:e=>qt(ee.white,"D50",e),toBase:e=>qt("D50",ee.white,e),formats:{color:{}}});const Uc=216/24389,yo=24/116,Tt=24389/27;let Cr=oe.D50;var X=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Cr,base:Mn,fromBase(e){let r=e.map((n,o)=>n/Cr[o]).map(n=>n>Uc?Math.cbrt(n):(Tt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>yo?Math.pow(t[0],3):(116*t[0]-16)/Tt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Tt,t[2]>yo?Math.pow(t[2],3):(116*t[2]-16)/Tt].map((n,o)=>n*Cr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function sr(e){return(e%360+360)%360}function Fc(e,t){if(e==="raw")return t;let[r,n]=t.map(sr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var ht=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:X,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),sr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const $o=25**7,Gt=Math.PI,ko=180/Gt,Ve=Gt/180;function Xr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=X.from(e),l=ht.from(X,[a,s,i])[1],[c,u,d]=X.from(t),f=ht.from(X,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,p=.5*(1-Math.sqrt(m/(m+$o))),w=(1+p)*s,k=(1+p)*u,C=Math.sqrt(w**2+i**2),L=Math.sqrt(k**2+d**2),_=w===0&&i===0?0:Math.atan2(i,w),V=k===0&&d===0?0:Math.atan2(d,k);_<0&&(_+=2*Gt),V<0&&(V+=2*Gt),_*=ko,V*=ko;let ie=c-a,Y=L-C,A=V-_,z=_+V,cr=Math.abs(A),et;C*L===0?et=0:cr<=180?et=A:A>180?et=A-360:A<-180?et=A+360:console.log("the unthinkable has happened");let Rn=2*Math.sqrt(L*C)*Math.sin(et*Ve/2),ui=(a+c)/2,ur=(C+L)/2,Pn=Math.pow(ur,7),fe;C*L===0?fe=z:cr<=180?fe=z/2:z<360?fe=(z+360)/2:fe=(z-360)/2;let Nn=(ui-50)**2,di=1+.015*Nn/Math.sqrt(20+Nn),Bn=1+.045*ur,tt=1;tt-=.17*Math.cos((fe-30)*Ve),tt+=.24*Math.cos(2*fe*Ve),tt+=.32*Math.cos((3*fe+6)*Ve),tt-=.2*Math.cos((4*fe-63)*Ve);let Hn=1+.015*ur*tt,fi=30*Math.exp(-1*((fe-275)/25)**2),hi=2*Math.sqrt(Pn/(Pn+$o)),mi=-1*Math.sin(2*fi*Ve)*hi,St=(ie/(r*di))**2;return St+=(Y/(n*Bn))**2,St+=(Rn/(o*Hn))**2,St+=mi*(Y/(n*Bn))*(Rn/(o*Hn)),Math.sqrt(St)}const Wc=75e-6;function lt(e,t=e.space,{epsilon:r=Wc}={}){e=S(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function mt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ke(e,{method:t=ue.gamut_mapping,space:r=e.space}={}){if(Et(arguments[1])&&(r=arguments[1]),r=b.get(r),lt(e,r,{epsilon:0}))return S(e);let n=K(e,r);if(t!=="clip"&&!lt(e,r)){let o=ke(mt(n),{method:"clip",space:r});if(Xr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=K(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=te(l,i);for(;h-f>d;){let m=mt(l);m=ke(m,{space:r,method:"clip"}),Xr(l,m)-2<d?f=te(l,i):h=te(l,i),$e(l,i,(f+h)/2)}n=K(l,r)}else n=o}if(t==="clip"||!lt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=K(n,e.space)),e.coords=n.coords,e}ke.returns="color";function K(e,t,{inGamut:r}={}){e=S(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ke(o)),o}K.returns="color";function Xt(e,{precision:t=ue.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=S(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!lt(e)&&(i=ke(mt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>Wt(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Wt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Yc=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],qc=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ir=new W({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Yc,fromXYZ_M:qc,formats:{color:{}}});const Mt=1.09929682680944,Eo=.018053968510807;var Ps=new W({id:"rec2020",name:"REC.2020",base:ir,toBase(e){return e.map(function(t){return t<Eo*4.5?t/4.5:Math.pow((t+Mt-1)/Mt,1/.45)})},fromBase(e){return e.map(function(t){return t>=Eo?Mt*Math.pow(t,.45)-(Mt-1):4.5*t})},formats:{color:{}}});const Gc=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Xc=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ns=new W({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Gc,fromXYZ_M:Xc});const Zc=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Jc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Bs=new W({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Zc,fromXYZ_M:Jc,formats:{color:{}}}),Co={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let xo=Array(3).fill("<percentage> | <number>[0, 255]"),So=Array(3).fill("<number>[0, 255]");var pt=new W({id:"srgb",name:"sRGB",base:Bs,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:xo},rgb_number:{name:"rgb",commas:!0,coords:So,noAlpha:!0},color:{},rgba:{coords:xo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:So},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Co.black,t.alpha=0):t.coords=Co[e],t.coords)return t}}}}),Hs=new W({id:"p3",name:"P3",base:Ns,fromBase:pt.fromBase,toBase:pt.toBase,formats:{color:{id:"display-p3"}}});ue.display_space=pt;if(typeof CSS<"u"&&CSS.supports)for(let e of[X,Ps,Hs]){let t=e.getMinCoords(),n=Xt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ue.display_space=e;break}}function Qc(e,{space:t=ue.display_space,...r}={}){let n=Xt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ue.display_space)n=new String(n),n.color=e;else{let o=K(e,t);n=new String(Xt(o,r)),n.color=o}return n}function Ds(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Kc(e,t){return e=S(e),t=S(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Ee(e){return te(e,[ee,"y"])}function Os(e,t){$e(e,[ee,"y"],t)}function eu(e){Object.defineProperty(e.prototype,"luminance",{get(){return Ee(this)},set(t){Os(this,t)}})}var tu=Object.freeze({__proto__:null,getLuminance:Ee,register:eu,setLuminance:Os});function ru(e,t){e=S(e),t=S(t);let r=Math.max(Ee(e),0),n=Math.max(Ee(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const nu=.56,ou=.57,au=.62,su=.65,To=.022,iu=1.414,lu=.1,cu=5e-4,uu=1.14,Mo=.027,du=1.14;function _o(e){return e>=To?e:e+(To-e)**iu}function ze(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function fu(e,t){t=S(t),e=S(e);let r,n,o,a,s,i;t=K(t,"srgb"),[a,s,i]=t.coords;let l=ze(a)*.2126729+ze(s)*.7151522+ze(i)*.072175;e=K(e,"srgb"),[a,s,i]=e.coords;let c=ze(a)*.2126729+ze(s)*.7151522+ze(i)*.072175,u=_o(l),d=_o(c),f=d>u;return Math.abs(d-u)<cu?n=0:f?(r=d**nu-u**ou,n=r*uu):(r=d**su-u**au,n=r*du),Math.abs(n)<lu?o=0:n>0?o=n-Mo:o=n+Mo,o*100}function hu(e,t){e=S(e),t=S(t);let r=Math.max(Ee(e),0),n=Math.max(Ee(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const mu=5e4;function pu(e,t){e=S(e),t=S(t);let r=Math.max(Ee(e),0),n=Math.max(Ee(t),0);return n>r&&([r,n]=[n,r]),n===0?mu:(r-n)/n}function gu(e,t){e=S(e),t=S(t);let r=te(e,[X,"l"]),n=te(t,[X,"l"]);return Math.abs(r-n)}const bu=216/24389,Lo=24/116,_t=24389/27;let xr=oe.D65;var Zr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xr,base:ee,fromBase(e){let r=e.map((n,o)=>n/xr[o]).map(n=>n>bu?Math.cbrt(n):(_t*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Lo?Math.pow(t[0],3):(116*t[0]-16)/_t,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/_t,t[2]>Lo?Math.pow(t[2],3):(116*t[2]-16)/_t].map((n,o)=>n*xr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Sr=Math.pow(5,.5)*.5+.5;function wu(e,t){e=S(e),t=S(t);let r=te(e,[Zr,"l"]),n=te(t,[Zr,"l"]),o=Math.abs(Math.pow(r,Sr)-Math.pow(n,Sr)),a=Math.pow(o,1/Sr)*Math.SQRT2-40;return a<7.5?0:a}var Vt=Object.freeze({__proto__:null,contrastAPCA:fu,contrastDeltaPhi:wu,contrastLstar:gu,contrastMichelson:hu,contrastWCAG21:ru,contrastWeber:pu});function vu(e,t,r={}){Et(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Vt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=S(e),t=S(t);for(let a in Vt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Vt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Vs(e){let[t,r,n]=Ct(e,ee),o=t+15*r+3*n;return[4*t/o,9*r/o]}function zs(e){let[t,r,n]=Ct(e,ee),o=t+r+n;return[t/o,r/o]}function yu(e){Object.defineProperty(e.prototype,"uv",{get(){return Vs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return zs(this)}})}var $u=Object.freeze({__proto__:null,register:yu,uv:Vs,xy:zs});function ku(e,t){return Ds(e,t,"lab")}const Eu=Math.PI,Ao=Eu/180;function Cu(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=X.from(e),[,i,l]=ht.from(X,[o,a,s]),[c,u,d]=X.from(t),f=ht.from(X,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,m=i-f,p=a-u,w=s-d,k=p**2+w**2-m**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let L=.0638*i/(1+.0131*i)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*Ao)):_=.36+Math.abs(.4*Math.cos((l+35)*Ao));let V=Math.pow(i,4),ie=Math.sqrt(V/(V+1900)),Y=L*(ie*_+1-ie),A=(h/(r*C))**2;return A+=(m/(n*L))**2,A+=k/Y**2,Math.sqrt(A)}const Ro=203;var _n=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:ee,fromBase(e){return e.map(t=>Math.max(t*Ro,0))},toBase(e){return e.map(t=>Math.max(t/Ro,0))}});const Lt=1.15,At=.66,Po=2610/2**14,xu=2**14/2610,No=3424/2**12,Bo=2413/2**7,Ho=2392/2**7,Su=1.7*2523/2**5,Do=2**5/(1.7*2523),Rt=-.56,Tr=16295499532821565e-27,Tu=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Mu=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],_u=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Lu=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var js=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:_n,fromBase(e){let[t,r,n]=e,o=Lt*t-(Lt-1)*n,a=At*r-(At-1)*t,i=B(Tu,[o,a,n]).map(function(f){let h=No+Bo*(f/1e4)**Po,m=1+Ho*(f/1e4)**Po;return(h/m)**Su}),[l,c,u]=B(_u,i);return[(1+Rt)*l/(1+Rt*l)-Tr,c,u]},toBase(e){let[t,r,n]=e,o=(t+Tr)/(1+Rt-Rt*(t+Tr)),s=B(Lu,[o,r,n]).map(function(f){let h=No-f**Do,m=Ho*f**Do-Bo;return 1e4*(h/m)**xu}),[i,l,c]=B(Mu,s),u=(i+(Lt-1)*c)/Lt,d=(l+(At-1)*u)/At;return[u,d,c]},formats:{color:{}}}),Jr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:js,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),sr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Au(e,t){let[r,n,o]=Jr.from(e),[a,s,i]=Jr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Is=3424/4096,Us=2413/128,Fs=2392/128,Oo=2610/16384,Ru=2523/32,Pu=16384/2610,Vo=32/2523,Nu=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Bu=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Hu=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Du=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Qr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:_n,fromBase(e){let t=B(Nu,e);return Ou(t)},toBase(e){let t=Vu(e);return B(Du,t)},formats:{color:{}}});function Ou(e){let t=e.map(function(r){let n=Is+Us*(r/1e4)**Oo,o=1+Fs*(r/1e4)**Oo;return(n/o)**Ru});return B(Bu,t)}function Vu(e){return B(Hu,e).map(function(n){let o=Math.max(n**Vo-Is,0),a=Us-Fs*n**Vo;return 1e4*(o/a)**Pu})}function zu(e,t){let[r,n,o]=Qr.from(e),[a,s,i]=Qr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const ju=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Iu=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Uu=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Fu=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Zt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ee,fromBase(e){let r=B(ju,e).map(n=>Math.cbrt(n));return B(Uu,r)},toBase(e){let r=B(Fu,e).map(n=>n**3);return B(Iu,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Wu(e,t){let[r,n,o]=Zt.from(e),[a,s,i]=Zt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Jt={deltaE76:ku,deltaECMC:Cu,deltaE2000:Xr,deltaEJz:Au,deltaEITP:zu,deltaEOK:Wu};function st(e,t,r={}){Et(r)&&(r={method:r});let{method:n=ue.deltaE,...o}=r;e=S(e),t=S(t);for(let a in Jt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Jt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Yu(e,t=.25){let n=[b.get("oklch","lch"),"l"];return $e(e,n,o=>o*(1+t))}function qu(e,t=.25){let n=[b.get("oklch","lch"),"l"];return $e(e,n,o=>o*(1-t))}var Gu=Object.freeze({__proto__:null,darken:qu,lighten:Yu});function Ws(e,t,r=.5,n={}){[e,t]=[S(e),S(t)],we(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return xt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function Ys(e,t,r={}){let n;Ln(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[S(e),S(t)],n=xt(e,t,l));let c=st(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let p=m*f;return{p,color:n(p)}})}if(o>0){let f=d.reduce((h,m,p)=>{if(p===0)return 0;let w=st(m.color,d[p-1].color,a);return Math.max(h,w)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let m=d[h-1],p=d[h],w=(p.p+m.p)/2,k=n(w);f=Math.max(f,st(k,m.color),st(k,p.color)),d.splice(h,0,{p:w,color:n(w)}),h++}}}return d=d.map(f=>f.color),d}function xt(e,t,r={}){if(Ln(e)){let[l,c]=[e,t];return xt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=S(e),t=S(t),e=mt(e),t=mt(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[ue.interpolationSpace]||e.space,o=o?b.get(o):n,e=K(e,n),t=K(t,n),e=ke(e),t=ke(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[te(e,c),te(t,c)];[u,d]=Fc(l,[u,d]),$e(e,c,u),$e(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return Yt(f,m,l)}),u=Yt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=K(d,o)),d},{rangeArgs:i})}function Ln(e){return we(e)==="function"&&!!e.rangeArgs}ue.interpolationSpace="lab";function Xu(e){e.defineFunction("mix",Ws,{returns:"color"}),e.defineFunction("range",xt,{returns:"function<color>"}),e.defineFunction("steps",Ys,{returns:"array<color>"})}var Zu=Object.freeze({__proto__:null,isRange:Ln,mix:Ws,range:xt,register:Xu,steps:Ys}),qs=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:pt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Gs=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:qs,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Ju=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Gs,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Qu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Ku=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Xs=new W({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Qu,fromXYZ_M:Ku}),ed=new W({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Xs,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const td=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],rd=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Zs=new W({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Mn,toXYZ_M:td,fromXYZ_M:rd});const nd=1/512,od=16/512;var ad=new W({id:"prophoto",name:"ProPhoto",base:Zs,toBase(e){return e.map(t=>t<od?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=nd?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),sd=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Zt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),sr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const zo=203,jo=2610/2**14,id=2**14/2610,ld=2523/2**5,Io=2**5/2523,Uo=3424/2**12,Fo=2413/2**7,Wo=2392/2**7;var cd=new W({id:"rec2100pq",name:"REC.2100-PQ",base:ir,toBase(e){return e.map(function(t){return(Math.max(t**Io-Uo,0)/(Fo-Wo*t**Io))**id*1e4/zo})},fromBase(e){return e.map(function(t){let r=Math.max(t*zo/1e4,0),n=Uo+Fo*r**jo,o=1+Wo*r**jo;return(n/o)**ld})},formats:{color:{id:"rec2100-pq"}}});const Yo=.17883277,qo=.28466892,Go=.55991073,Mr=3.7743;var ud=new W({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ir,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Mr:(Math.exp((t-Go)/Yo)+qo)/12*Mr})},fromBase(e){return e.map(function(t){return t/=Mr,t<=1/12?Math.sqrt(3*t):Yo*Math.log(12*t-qo)+Go})},formats:{color:{id:"rec2100-hlg"}}});const Js={};ye.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Qs(e.W1,e.W2,e.options.method))});ye.add("chromatic-adaptation-end",e=>{e.M||(e.M=Qs(e.W1,e.W2,e.options.method))});function lr({id:e,toCone_M:t,fromCone_M:r}){Js[e]=arguments[0]}function Qs(e,t,r="Bradford"){let n=Js[r],[o,a,s]=B(n.toCone_M,e),[i,l,c]=B(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=B(u,n.toCone_M);return B(n.fromCone_M,d)}lr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});lr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});lr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});lr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(oe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});oe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const dd=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fd=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ks=new W({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:oe.ACES,toXYZ_M:dd,fromXYZ_M:fd,formats:{color:{}}});const Pt=2**-16,_r=-.35828683,Nt=(Math.log2(65504)+9.72)/17.52;var hd=new W({id:"acescc",name:"ACEScc",coords:{r:{range:[_r,Nt],name:"Red"},g:{range:[_r,Nt],name:"Green"},b:{range:[_r,Nt],name:"Blue"}},referred:"scene",base:Ks,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Pt)*2:r<Nt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Pt)+9.72)/17.52:t<Pt?(Math.log2(Pt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Xo=Object.freeze({__proto__:null,A98RGB:ed,A98RGB_Linear:Xs,ACEScc:hd,ACEScg:Ks,HSL:qs,HSV:Gs,HWB:Ju,ICTCP:Qr,JzCzHz:Jr,Jzazbz:js,LCH:ht,Lab:X,Lab_D65:Zr,OKLCH:sd,OKLab:Zt,P3:Hs,P3_Linear:Ns,ProPhoto:ad,ProPhoto_Linear:Zs,REC_2020:Ps,REC_2020_Linear:ir,REC_2100_HLG:ud,REC_2100_PQ:cd,XYZ_ABS_D65:_n,XYZ_D50:Mn,XYZ_D65:ee,sRGB:pt,sRGB_Linear:Bs});let M=class I{constructor(...t){let r;t.length===1&&(r=S(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new I(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Qc(this,...t);return r.color=new I(r.color),r}static get(t,...r){return t instanceof I?t:new I(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=I.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return I.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>I.get(c)));return l};t in I||(I[t]=s),o&&(I.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)I.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(I);else for(let r in t)I.defineFunction(r,t[r])}};M.defineFunctions({get:te,getAll:Ct,set:$e,setAll:Rs,to:K,equals:Kc,inGamut:lt,toGamut:ke,distance:Ds,toString:Xt});Object.assign(M,{util:Vc,hooks:ye,WHITES:oe,Space:b,spaces:b.registry,parse:As,defaults:ue});for(let e of Object.keys(Xo))b.register(Xo[e]);for(let e in b.registry)Kr(e,b.registry[e]);ye.add("colorspace-init-end",e=>{var t;Kr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Kr(r,e)})});function Kr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(M.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}M.extend(Jt);M.extend({deltaE:st});Object.assign(M,{deltaEMethods:Jt});M.extend(Gu);M.extend({contrast:vu});M.extend($u);M.extend(tu);M.extend(Zu);M.extend(Vt);function ei(e){return se(e,(t,r)=>r instanceof M?P(r.toString({format:"hex"})):ei(r))}const md="dodgerblue";function en(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Lr({background:e,foreground:t}){return{background:e??new M(en(t)),foreground:t??new M(en(e))}}var Qt;(function(e){e.Dark="dark",e.Light="light"})(Qt||(Qt={}));function pd(e){return e==="black"?"white":"black"}const gd={black:{foregroundFaint1:new M("#ccc"),foregroundFaint2:new M("#eee")},white:{foregroundFaint1:new M("#ccc"),foregroundFaint2:new M("#eee")}},bd={black:{backgroundFaint1:new M("#666"),backgroundFaint2:new M("#444")},white:{backgroundFaint1:new M("#ccc"),backgroundFaint2:new M("#fafafa")}};function Zo({themeColor:e=md,themeStyle:t=Qt.Light}={}){const r=new M(e),n=new M(t===Qt.Dark?"black":"white"),o=en(n),a=new M(o),s={nav:{hover:Lr({background:r.clone().set({"hsl.l":93})}),active:Lr({background:r.clone().set({"hsl.l":90})}),selected:Lr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...bd[pd(o)],foreground:a,...gd[o]}};return ei(s)}const Kt=$n()("element-book-change-route"),Jo="vira-",{defineElement:Ke,defineElementNoInputs:Gd}=Bl({assertInputs:e=>{if(!e.tagName.startsWith(Jo))throw new Error(`Tag name should start with '${Jo}' but got '${e.tagName}'`)}}),wd=M;function vd(e){try{if(!e)throw new Error("invalid empty color");return new wd(e)}catch{const r=String(e),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?Si({callback:()=>JSON.stringify(e),fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const ti=g`
    pointer-events: none;
    opacity: 0.3;
`,ve=Te({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),gt=Te({"vira-form-input-border-radius":"8px"}),er=Te({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${gt["vira-form-input-border-radius"].value} + 4px)`});function ri({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=P(ha(n+r+t));return g`
        ${P(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${er["vira-focus-outline-color"].value};
            border-radius: ${er["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const yd=g`
    padding: 0;
    margin: 0;
`,Re=g`
    ${yd};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,tn=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,E=Ke()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ni=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(ni||{});const H=Ke()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${tn};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${er["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${ti};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Re};
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
            border-radius: ${gt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ve["vira-interaction-animation-duration"].value},
                background-color
                    ${ve["vira-interaction-animation-duration"].value},
                border-color ${ve["vira-interaction-animation-duration"].value};
        }

        ${ri({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${E} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?v`
                  <${E.assign({icon:e.icon})}></${E}>
              `:"",r=e.text?v`
                  <span class="text-template">${e.text}</span>
              `:"";return v`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var rn=(e=>(e.Header="header",e))(rn||{});const Le=Ke()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Re};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ve["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Xe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?g`
                  height: ${e.contentHeight}px;
              `:g`
                  height: 0;
              `;return v`
            <button
                class="header-wrapper"
                ${G("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${ts(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),$=Te({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function de({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function $d(e,t){const r=D(t).map(n=>{const o=t[n],a=vd(o);return`${$[n].name}: ${a.toString()};`}).join(" ");return de({name:e.name,svgTemplate:v`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const oi=de({name:"CloseX24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ai=de({name:"Element16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ne=de({name:"Element24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),si=de({name:"Loader24Icon",svgTemplate:v`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),kd=g`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ve["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,bt=de({name:"LoaderAnimated24Icon",svgTemplate:v`
        <style>
            ${kd}
        </style>
        ${si.svgTemplate}
    `}),An=de({name:"Options24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${$["vira-icon-stroke-color"].value}"
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),tr=de({name:"StatusFailure24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ed=de({name:"StatusInProgress24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),Cd=de({name:"StatusSuccess24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xd={CloseX24Icon:oi,Element16Icon:ai,Element24Icon:Ne,Loader24Icon:si,LoaderAnimated24Icon:bt,Options24Icon:An,StatusFailure24Icon:tr,StatusInProgress24Icon:Ed,StatusSuccess24Icon:Cd};var nn=(e=>(e.Loading="loading",e.Error="error",e))(nn||{});const je=Ke()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:Xe(),imageError:Xe()},styles:({hostClasses:e})=>g`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const a=e.imageUrl,s=t.erroredUrls[a]?v`
                  <slot class="status-wrapper" name=${"error"}>
                      <${E.assign({icon:tr})} class="error"></${E}>
                  </slot>
              `:t.loadedUrls[a]?void 0:v`
                    <slot class="status-wrapper" name=${"loading"}>
                        <${E.assign({icon:bt})}></${E}>
                    </slot>
                `;return v`
            ${We(!!s,s)}
            <img
                class=${Ma({hidden:!!s})}
                ${G("load",async()=>{e._debugLoadDelay&&await Nr(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${G("error",async i=>{e._debugLoadDelay&&await Nr(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new o.imageError(i.error))})}
                src=${a}
            />
        `}});function on({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>on({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function ii({value:e,allowed:t,blocked:r}){const n=t?on({input:e,matcher:t}):!0,o=r?on({input:e,matcher:r}):!1;return n&&!o}function li(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(ii({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Sd({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=at(r,HTMLInputElement),s=r.data,i=t;let l=a.value??"";if(s)if(s.length===1)ii({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=i,n(s));else{const{filtered:c,blocked:u}=li({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),i!==l&&o(l)}const R=Ke()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Xe(),inputBlocked:Xe()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${er["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${ti};
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
                ${Re};
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
                ${tn};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Re};
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
                border-radius: ${gt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ve["vira-interaction-animation-duration"].value};
            }

            label {
                ${Re};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${gt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${ri({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Re};
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
                ${tn};
            }

            .close-x-button {
                ${Re};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${ve["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=li({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?v`
                  <${E.assign({icon:e.icon})} class="left-side-icon"></${E}>
              `:"",i=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return v`
            <label>
                ${s}
                ${We(!!e.fitText,v`
                        <span
                            class="size-span"
                            ${ts(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${G("input",l=>{Sd({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${We(!!(e.showClearButton&&e.value),v`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${G("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${E.assign({icon:oi})}></${E}>
                        </button>
                    `)}
                ${We(!!e.suffix,v`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),ot=Ke()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>g`
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
    `,events:{routeChange:Xe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&ys(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return v`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return v`
                <a href=${s} rel="noopener noreferrer" ${G("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:re,defineElementNoInputs:Xd}=uc(),J=re()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>F`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return y`
            <a
                href=${r}
                ${le("click",a=>{(!e.router||ys(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Kt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Td(e,t){return e.entry.entryType===O.Root?!1:!!(e.entry.entryType===O.Page||be(t,e.fullUrlBreadcrumbs.slice(0,-1))||be(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const he=re()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>F`
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
            ${J.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${E} {
            display: inline-flex;
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Td(r,e.selectedPath))return;const n=F`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return y`
                <li style=${n}>
                    <${J.assign({router:e.router,route:{paths:[U.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Ma({"title-row":!0,selected:e.selectedPath?be(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Ze(Ye(r,O.ElementExample),y`
                                    <${E.assign({icon:ai})}></${E}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${J}>
                </li>
            `});return y`
            <${J.assign({route:Je,router:e.router})}>
                <slot name=${ce.NavHeader}>Book</slot>
            </${J}>
            <ul>
                ${t}
            </ul>
        `}});async function Md(e){await Br(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Fi(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Ce=re()({tagName:"book-error",styles:F`
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
    `,renderCallback({inputs:e}){return(Q(e.message,"array")?e.message:[e.message]).map(r=>y`
                <p>${r}</p>
            `)}}),wt=re()({tagName:"book-page-controls",events:{controlValueChange:kn()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>F`
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

        ${R} {
            height: 24px;
            max-width: 128px;
        }

        ${E}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===T.Hidden)return"";const s=_d(e.currentValues[n],o,i=>{const l=Q(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return y`
                    <div class="control-wrapper">
                        ${Ze(a===0,y`
                                <${E.assign({icon:An})}
                                    class="options-icon"
                                ></${E}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function _d(e,t,r){return Oe(t,T.Hidden)?"":Oe(t,T.Checkbox)?y`
            <input
                type="checkbox"
                .value=${e}
                ${le("input",n=>{const o=at(n,HTMLInputElement);r(o.checked)})}
            />
        `:Oe(t,T.Color)?y`
            <input
                type="color"
                .value=${e}
                ${le("input",n=>{const o=at(n,HTMLInputElement);r(o.value)})}
            />
        `:Oe(t,T.Text)?y`
            <${R.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${le(R.events.valueChange,n=>{r(n.detail)})}
            ></${R}>
        `:Oe(t,T.Number)?y`
            <input
                type="number"
                .value=${e}
                ${le("input",n=>{const o=at(n,HTMLInputElement);r(o.value)})}
            />
        `:Oe(t,T.Dropdown)?y`
            <select
                .value=${e}
                ${le("input",n=>{const o=at(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>y`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:y`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Qo=re()({tagName:"book-breadcrumbs",styles:F`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":y`
                      <span class="spacer">&gt;</span>
                  `;return y`
                <${J.assign({route:{hash:void 0,search:void 0,paths:[U.Book,...s]},router:e.router})}>
                    ${r}
                </${J}>
                ${i}
            `}):y`
                &nbsp;
            `}}),Ar=re()({tagName:"book-breadcrumbs-bar",styles:F`
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
    `,renderCallback({inputs:e,dispatch:t}){return y`
            ${Ze(!!e.currentSearch,y`
                    &nbsp;
                `,y`
                    <${Qo.assign({currentRoute:e.currentRoute,router:e.router})}></${Qo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${le("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Nr(200),n.value===o&&(n.value?t(new Kt({paths:[U.Search,encodeURIComponent(n.value)]})):t(new Kt(Je)))})}
            />
        `}}),Ko=re()({tagName:"book-entry-description",styles:F`
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
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>y`
                <p>${t}</p>
            `)}}),ea=re()({tagName:"book-page-wrapper",styles:F`
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

        ${J} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?y`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:y`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[U.Book,...e.pageNode.fullUrlBreadcrumbs],n=la(e.pageNode.entry.errors);return n&&console.error(n),y`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${J.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${J}>
                    ${n?y`
                              <${Ce.assign({message:n.message})}></${Ce}>
                          `:y`
                              <${Ko.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Ko}>
                              <${wt.assign({config:e.pageNode.entry.controls,currentValues:xn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${wt}>
                          `}
                </div>
            </div>
        `}}),Bt=re()({tagName:"book-element-example-controls",styles:F`
        :host {
            display: flex;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[U.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return y`
            <${J.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${J}>
        `}}),ta=Symbol("unset-internal-state"),ra=re()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:ta},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw la(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===ta&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return y`
                ${Ze(!!t.elementExampleNode.entry.styles,y`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),y`
                <${Ce.assign({message:`${t.elementExampleNode.entry.title} failed: ${vt(n)}`})}></${Ce}>
            `}},options:{allowPolymorphicState:!0}}),na=re()({tagName:"book-element-example-wrapper",styles:F`
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

        ${Bt} {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Bt} {
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return y`
            <div class="individual-example-wrapper">
                <${Bt.assign(Ri(e,["currentPageControls"]))}></${Bt}>
                <${ra.assign(e)}></${ra}>
            </div>
        `}});function ci(e,t,r,n){const o=Wr(r,n),a=[];if(o){const s=ci(e,t,o,n);s&&a.push(s)}if(Ye(r,O.Page)&&!e.includes(r)){const s=xn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:se(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Ld({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[y`
                No results
            `];const s=In(e,1)?ci(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&In(e,1)?y`
                  <${wt.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${wt}>
              `:"",l=nl(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Ye(c,O.Page))return y`
                    <${ea.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${ea}>
                `;if(Ye(c,O.ElementExample)){const d=xn(o,c.fullUrlBreadcrumbs.slice(0,-1));return y`
                    <${na.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${na}>
                `}else return Ye(c,O.Root)?"":y`
                    <${Ce.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Ce}>
                `});return[i,l].flat()}const Ie=re()({tagName:"book-entry-display",styles:F`
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

        ${Ar} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${ve["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:kn()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Yr(e.currentRoute.paths),s=Ld({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return y`
            <${Ar.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${Ar}>

            ${Ze(e.showLoading,y`
                    <div
                        ${fo(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${E.assign({icon:bt})}></${E}>
                    </div>
                    ${Ze(!!n.lastElement,y`
                            ${n.lastElement}
                            <slot name=${ce.Footer}></slot>
                        `)}
                `,y`
                    <div
                        ${fo(i=>{o({lastElement:i})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${ce.Footer}></slot>
                `)}
        `}});function Ad(e,t,r){const n=oa(e,t);if(n.length)return n;r(Je);const o=oa(e,Je.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function oa(e,t){return e.filter(r=>Ui({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Rr=hs()({tagName:"element-book-app",events:{pathUpdate:kn()},stateInitStatic:{currentRoute:Je,router:void 0,loading:!0,colors:{config:void 0,theme:Zo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:F`
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

        ${Ie} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${he} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{aa(e,Yr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,h,m,p,w;t._debug&&console.info("rendering element-book app");function s(k){return{...e.currentRoute,...k}}function i(k){const C=s(k);return!be(e.currentRoute,C)}function l(k){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,k].filter(pe).join(" - "))}function c(k){if(!i(k))return;const C=s(k);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!be(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!be(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const A=Bc(t.internalRouterConfig.basePath);n({router:A}),A.addRouteListener(!0,z=>{n({currentRoute:z})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const k={themeColor:t.themeColor};if(!be(k,(f=e.colors)==null?void 0:f.config)){const A=Zo(k);n({colors:{config:k,theme:A}}),Oc(r,A)}const C=t._debug??!1,L=wc({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:ws(L.tree,{children:(m=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:t.globalValues})}}));const _=Yr(e.currentRoute.paths),ie=(_?xc({flattenedNodes:L.flattenedNodes,searchQuery:_}):void 0)??Ad(L.flattenedNodes,e.currentRoute.paths,c);l((p=ie[0])==null?void 0:p.entry.title);const Y=(w=e.treeBasedControls)==null?void 0:w.controls;return Y?(t._debug&&console.info({currentControls:Y}),y`
                <div
                    class="root"
                    ${le(Kt,async A=>{const z=A.detail;if(!i(z))return;if(n({loading:!0}),c(z),!(r.shadowRoot.querySelector(he.tagName)instanceof he))throw new Error(`Failed to find child '${he.tagName}'`);aa(r,_,e.currentRoute)})}
                    ${le(wt.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const z=yc(Y,A.detail.fullUrlBreadcrumbs,A.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:z}})})}
                >
                    <${he.assign({flattenedNodes:L.flattenedNodes,router:e.router,selectedPath:_?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ce.NavHeader}
                            slot=${ce.NavHeader}
                        ></slot>
                    </${he}>
                    <${Ie.assign({controls:Y,currentNodes:ie,currentRoute:e.currentRoute,debug:C,originalTree:L.tree,router:e.router,showLoading:e.loading})}
                        ${le(Ie.events.loadingRender,async A=>{await Br();const z=r.shadowRoot.querySelector(Ie.tagName);z?z.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ie.tagName}' for scrolling.`),await Br(),n({loading:!A.detail})})}
                    >
                        <slot
                            name=${ce.Footer}
                            slot=${ce.Footer}
                        ></slot>
                    </${Ie}>
                </div>
            `):y`
                    <${Ce.assign({message:"Failed to generate page controls."})}></${Ce}>
                `}catch(k){return console.error(k),y`
                <p class="error">${vt(k)}</p>
            `}}});async function aa(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(he.tagName);if(!(n instanceof he))throw new Error(`Failed to find child '${he.tagName}'`);await Md(n)}const De=xe({title:"Elements",parent:void 0}),Rd=xe({parent:De,title:H.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:T.Color,initValue:H.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:T.Color,initValue:H.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:T.Color,initValue:H.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:T.Color,initValue:H.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??g``;e({title:r,styles:a,renderCallback({controls:s}){const i=g`
                        ${H.cssVars["vira-button-primary-color"].name}: ${P(s["Primary color"]||"inherit")};
                        ${H.cssVars["vira-button-secondary-color"].name}: ${P(s["Secondary color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-hover-color"].name}: ${P(s["Hover color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-active-color"].name}: ${P(s["Active color"]||"inherit")};
                    `;return v`
                        <${H.assign({text:"hello",...o})}
                            style=${i}
                        ></${H}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:An}}),t({title:"outline",inputs:{buttonStyle:ni.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:g`
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
            `,renderCallback(){return v`
                    <${H.assign({text:"hello"})}></${H}>
                `}})}}),Pd=xe({title:Le.tagName,parent:De,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:g`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>v`
                            <${Le.assign({expanded:!!r.expandedStates[o]})}
                                ${G(Le.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${rn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${G("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${We(!!r.showMoreStates[o],v`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${Le}>
                        `)}}),e({title:"wider examples",styles:g`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>v`
                            <${Le.assign({expanded:!!r.expandedStates[o]})}
                                ${G(Le.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${rn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${G("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${We(!!r.showMoreStates[o],v`
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
                            </${Le}>
                        `)}})}}),Nd=xe({title:E.tagName,parent:De,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return v`
                    <${E.assign({icon:Ne})}></${E}>
                `}}),e({title:"using createColoredIcon",renderCallback(){return v`
                    <${E.assign({icon:$d(Ne,{"vira-icon-stroke-color":"red"})})}></${E}>
                `}})}}),Bd=xe({title:je.tagName,parent:De,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:g`
                    border-radius: 32px;
                `,loadingSlot:v`
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
                        <${E.assign({icon:bt,fitContainer:!0})}
                            style=${g`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${E}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:g`
                    border-radius: 32px;
                `,errorSlot:v`
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
                        <${E.assign({icon:tr,fitContainer:!0})}
                            style=${g`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${E}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/bolt.png"},styles:g`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/bolt.png",dominantDimension:"height"},styles:g`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:g`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:v`
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
                        <${E.assign({icon:bt,fitContainer:!0})}
                            style=${g`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${E}>
                    </div>
                `,errorSlot:v`
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
                        <${E.assign({icon:tr,fitContainer:!0})}
                            style=${g`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${E}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:g`
                    ${je} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||g``}
                    }

                    ${r.allowReload?g`
                              ${je} {
                                  cursor: pointer;
                              }

                              ${je}:hover {
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
                `,stateInitStatic:{imageUrl:r.inputs.imageUrl},renderCallback({state:n,updateState:o}){return v`
                        <${je.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${G("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${fa()}`})})}
                        >
                            ${r.loadingSlot?v`
                                      <div
                                          class="slot-wrapper"
                                          slot=${nn.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?v`
                                      <div class="slot-wrapper" slot=${nn.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${je}>
                    `}})})}}),Hd=xe({title:R.tagName,parent:De,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:T.Color,initValue:R.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:T.Color,initValue:R.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:T.Color,initValue:R.cssVars["vira-input-border-color"].default},"Focus color":{controlType:T.Color,initValue:R.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:T.Color,initValue:R.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:g`
                    ${r||g``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:s,controls:i}){const l={[String(R.cssVars["vira-input-text-color"].name)]:i["Text color"],[String(R.cssVars["vira-input-placeholder-color"].name)]:i["Placeholder color"],[String(R.cssVars["vira-input-border-color"].name)]:i["Border color"],[String(R.cssVars["vira-input-focus-border-color"].name)]:i["Focus color"],[String(R.cssVars["vira-input-text-selection-color"].name)]:i["Selection color"]},c=se(l,(d,f)=>f||"inherit"),u=Object.entries(c).map(([d,f])=>[d,f].join(": ")+";").join(`
`);return v`
                        <${R.assign({...o,value:a.value})}
                            style=${u}
                            ${G(R.events.valueChange,d=>{s({value:d.detail})})}
                        ></${R}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:Ne}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:g`
                ${R} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:Ne}}),t({title:"taller height",styles:g`
                ${R} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:Ne}}),t({title:"shorter height",styles:g`
                ${R} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ne}}),t({title:"max width",styles:g`
                ${R} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:g`
                ${R} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Dd=xe({title:ot.tagName,parent:De,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:T.Color,initValue:""},"Hover color":{controlType:T.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=g`
                        ${ot.cssVars["vira-link-hover-color"].name}: ${P(o["Hover color"]||"inherit")};
                        color: ${P(o["CSS Color"]||"inherit")};
                    `;return v`
                        <${ot.assign(n)}
                            style=${a}
                            ${G(ot.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${ot}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),Od=xe({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:T.Color,initValue:""},"Fill Color":{controlType:T.Color,initValue:""},"Stroke Width":{controlType:T.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(xd).forEach(t=>{e({title:t.name,styles:g`
                    :host(:hover) ${E} {
                        background-color: #f2f2f2;
                    }

                    ${E} {
                        padding: 8px;
                        border-radius: ${gt["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=g`
                        ${$["vira-icon-fill-color"].name}: ${P(r["Fill Color"]||"inherit")};
                        ${$["vira-icon-stroke-color"].name}: ${P(r["Stroke Color"]||"inherit")};
                        ${$["vira-icon-stroke-width"].name}: ${P(ha(r["Stroke Width"])||"inherit")};
                    `;return v`
                        <${E.assign({icon:t})} style=${n}></${E}>
                    `}})})}}),Vd=[De,Od,Rd,Pd,Nd,Bd,Hd,Dd];or({tagName:"vira-book-app",styles:g`
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
    `,renderCallback(){return v`
            <${Rr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Vd,themeColor:"#33ccff"})}>
                <h1 slot=${ce.NavHeader}>Vira</h1>
            </${Rr}>
        `}});
