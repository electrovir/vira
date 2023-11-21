var Hi=Object.defineProperty;var Ni=(e,t,r)=>t in e?Hi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var lr=(e,t,r)=>(Ni(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Ii(e,t){return e.includes(t)}function ke(e){return!!e}function zi(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Oi={capitalizeFirstLetter:!1};function Vi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Di(e,t){return t.capitalizeFirstLetter?Vi(e):e}function ji(e,t=Oi){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Di(n,t)}var Ue;(function(e){e.Upper="upper",e.Lower="lower"})(Ue||(Ue={}));function Ui(e){return e.toLowerCase()!==e.toUpperCase()}function Cn(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Ui(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Ue.Upper&&o!==o.toUpperCase())return!1;if(t===Ue.Lower&&o!==o.toLowerCase())return!1}return!0}function Fi(e){return e.split("").reduce((r,n,o,a)=>{const i=o>0&&a[o-1]||"",s=o<a.length-1&&a[o+1]||"",l=Cn(i,Ue.Lower,{blockNoCaseCharacters:!0})||Cn(s,Ue.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Yi(e,t){return e.split(t)}const Wi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function q(e,t){return e?Wi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Fo(e,t){return e&&t.every(r=>q(e,r))}function Yo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>pt(r).trim()).join(`
`))}function pt(e){return e?e instanceof Error?e.message:q(e,"message")?String(e.message):String(e):""}function Wo(e){return e instanceof Error?e:new Error(pt(e))}function qi(e){try{const t=e.callback();return t instanceof Promise?t.catch(r=>e.catchCallback?e.catchCallback(r):e.fallbackValue):t}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}function _r(e){return Array.isArray(e)?"array":typeof e}function X(e,t){return _r(e)===t}function ie(e){return!!e&&typeof e=="object"}function j(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function qo(e,t,r=!1,n={}){const o=j(e),a=new Set(j(t));if(!r){const i=o.filter(s=>!a.has(s));if(i.length)throw new Error(`Test object has extra keys: ${i.join(", ")}`)}a.forEach(i=>{if(!q(e,i))throw new Error(`test object does not have key "${String(i)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(i)}" did not match expected shape: ${u}`)}const l=e[i],c=t[i];n[i]||Go(l,c,s,r,n[i]??{})})}function Go(e,t,r,n,o){var s;const a=typeof e,i=typeof t;a!==i&&r(`type "${a}" did not match expected type "${i}"`);try{q(t,"constructor")&&(!q(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Go(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${pt(f)}`)}}).filter(ke).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):ie(t)&&qo(e,t,n,o)}function Sn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Mn="Failed to compare objects using JSON.stringify";function Tn(e,t,r){return Sn({source:e,errorHandler(n){if(r)return"";throw n}})===Sn({source:t,errorHandler(n){if(r)return"";throw n}})}function me(e,t,r={}){try{return e===t?!0:ie(e)&&ie(t)?Tn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>me(e[o],t[o])):!1:Tn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Wo(n);throw o.message.startsWith(Mn)||(o.message=`${Mn}: ${o.message}`),o}}function Gi(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Xi(e){return j(e).filter(t=>isNaN(Number(t)))}function Zi(e){return Xi(e).map(r=>e[r])}function Ji(e,t){return Zi(t).includes(e)}function Ki(e,t){return j(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Qi(e,t){return Ki(e,r=>!t.includes(r))}function fe(e,t){let r=!1;const n=j(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(j(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function _n(e,t){try{return Xo(e,t),!0}catch{return!1}}function Xo(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Kr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,a(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Kr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Lr(e){const t=Kr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const es=globalThis.crypto;function Zo(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return es.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function ts({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function rs(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(ke);return t.length?`?${t.join("&")}`:""}function ns(e){return ts({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=Yi(n,"="),i=a.join("");if(!(!i&&!o))return[o,i]}).filter(ke)}function os(e,t){const r=X(e,"string")?new URL(e):e,n=ns(r.search),o=Object.fromEntries(n);return t&&qo(o,t),o}const as="px";function Jo(e){return is({value:e,suffix:as})}function is({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function ss(e,t){return q(e,"entryType")&&e.entryType===t}var I;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(I||(I={}));function Ne(e,t){return e.controlType===t}var S;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(S||(S={}));const Ko=Symbol("any-type"),ls={[S.Checkbox]:!1,[S.Color]:"",[S.Dropdown]:"",[S.Hidden]:Ko,[S.Number]:0,[S.Text]:""};function cs(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=ls[o.controlType];a!==Ko&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Qr(e,t){const r=Nt(e.title);return e.parent?[...Qr(e.parent,!1),Nt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Nt(e){return zi(e).toLowerCase().replaceAll(/\s/g,"-")}function us({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function xe(e){const t={...e,entryType:I.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:I.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ke)};r.add(n.title),t.elementExamples[Nt(o.title)]=o}}),t}var ae;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ae||(ae={}));async function Ar(e=1){const t=Kr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function ds(e){return fs(e,1)}async function fs(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{Xo(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=window,en=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tn=Symbol(),Ln=new WeakMap;let Qo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==tn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(en&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ln.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ln.set(r,t))}return t}toString(){return this.cssText}};const N=e=>new Qo(typeof e=="string"?e:e+"",void 0,tn),Rt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new Qo(r,e,tn)},hs=(e,t)=>{en?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=At.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},An=en?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return N(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cr;const It=window,Rn=It.trustedTypes,ms=Rn?Rn.emptyScript:"",Pn=It.reactiveElementPolyfillSupport,Rr={toAttribute(e,t){switch(t){case Boolean:e=e?ms:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ea=(e,t)=>t!==e&&(t==t||e==e),ur={attribute:!0,type:String,converter:Rr,reflect:!1,hasChanged:ea},Pr="finalized";let De=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=ur){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ur}static finalize(){if(this.hasOwnProperty(Pr))return!1;this[Pr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(An(o))}else t!==void 0&&r.push(An(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return hs(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=ur){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Rr).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const i=o.getPropertyOptions(a),s=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:Rr;this._$El=a,this[a]=s.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ea)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};De[Pr]=!0,De.elementProperties=new Map,De.elementStyles=[],De.shadowRootOptions={mode:"open"},Pn==null||Pn({ReactiveElement:De}),((cr=It.reactiveElementVersions)!==null&&cr!==void 0?cr:It.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr;const zt=window,Fe=zt.trustedTypes,Bn=Fe?Fe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ot="$lit$",de=`lit$${(Math.random()+"").slice(9)}$`,rn="?"+de,ps=`<${rn}>`,Ae=document,ot=()=>Ae.createComment(""),at=e=>e===null||typeof e!="object"&&typeof e!="function",ta=Array.isArray,ra=e=>ta(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",fr=`[ 	
\f\r]`,Je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hn=/-->/g,Nn=/>/g,Ee=RegExp(`>|${fr}(?:([^\\s"'>=/]+)(${fr}*=${fr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),In=/'/g,zn=/"/g,na=/^(?:script|style|textarea|title)$/i,gs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),bs=gs(1),ne=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),On=new WeakMap,_e=Ae.createTreeWalker(Ae,129,null,!1);function oa(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bn!==void 0?Bn.createHTML(t):t}const aa=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",i=Je;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,f=0;for(;f<l.length&&(i.lastIndex=f,u=i.exec(l),u!==null);)f=i.lastIndex,i===Je?u[1]==="!--"?i=Hn:u[1]!==void 0?i=Nn:u[2]!==void 0?(na.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=Ee):u[3]!==void 0&&(i=Ee):i===Ee?u[0]===">"?(i=o??Je,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?Ee:u[3]==='"'?zn:In):i===zn||i===In?i=Ee:i===Hn||i===Nn?i=Je:(i=Ee,o=void 0);const m=i===Ee&&e[s+1].startsWith("/>")?" ":"";a+=i===Je?l+ps:d>=0?(n.push(c),l.slice(0,d)+Ot+l.slice(d)+de+m):l+de+(d===-2?(n.push(void 0),s):m)}return[oa(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class it{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,i=0;const s=t.length-1,l=this.parts,[c,u]=aa(t,r);if(this.el=it.createElement(c,n),_e.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=_e.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Ot)||f.startsWith(de)){const m=u[i++];if(d.push(f),m!==void 0){const g=o.getAttribute(m.toLowerCase()+Ot).split(de),b=/([.?@])?(.*)/.exec(m);l.push({type:1,index:a,name:b[2],strings:g,ctor:b[1]==="."?sa:b[1]==="?"?la:b[1]==="@"?ca:gt})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(na.test(o.tagName)){const d=o.textContent.split(de),f=d.length-1;if(f>0){o.textContent=Fe?Fe.emptyScript:"";for(let m=0;m<f;m++)o.append(d[m],ot()),_e.nextNode(),l.push({type:2,index:++a});o.append(d[f],ot())}}}else if(o.nodeType===8)if(o.data===rn)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(de,d+1))!==-1;)l.push({type:7,index:a}),d+=de.length-1}a++}}static createElement(t,r){const n=Ae.createElement("template");return n.innerHTML=t,n}}function Re(e,t,r=e,n){var o,a,i,s;if(t===ne)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=at(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(s=r)._$Co)!==null&&i!==void 0?i:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Re(e,l._$AS(e,t.values),l,n)),t}class ia{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Ae).importNode(n,!0);_e.currentNode=a;let i=_e.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new We(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new ua(i,this,t)),this._$AV.push(u),c=o[++l]}s!==(c==null?void 0:c.index)&&(i=_e.nextNode(),s++)}return _e.currentNode=Ae,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class We{constructor(t,r,n,o){var a;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Re(this,t,r),at(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==ne&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ra(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&at(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ae.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=it.createElement(oa(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const i=new ia(a,this),s=i.u(this.options);i.v(n),this.$(s),this._$AH=i}}_$AC(t){let r=On.get(t.strings);return r===void 0&&On.set(t.strings,r=new it(t)),r}T(t){ta(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new We(this.k(ot()),this.k(ot()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class gt{constructor(t,r,n,o,a){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let i=!1;if(a===void 0)t=Re(this,t,r,0),i=!at(t)||t!==this._$AH&&t!==ne,i&&(this._$AH=t);else{const s=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Re(this,s[n+l],r,l),c===ne&&(c=this._$AH[l]),i||(i=!at(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sa extends gt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}const vs=Fe?Fe.emptyScript:"";class la extends gt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,vs):this.element.removeAttribute(this.name)}}class ca extends gt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Re(this,t,r,0))!==null&&n!==void 0?n:P)===ne)return;const o=this._$AH,a=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==P&&(o===P||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ua{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Re(this,t)}}const ys={O:Ot,P:de,A:rn,C:1,M:aa,L:ia,R:ra,D:Re,I:We,V:gt,H:la,N:ca,U:sa,F:ua},Vn=zt.litHtmlPolyfillSupport;Vn==null||Vn(it,We),((dr=zt.litHtmlVersions)!==null&&dr!==void 0?dr:zt.litHtmlVersions=[]).push("2.8.0");const $s=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let i=a._$litPart$;if(i===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=i=new We(t.insertBefore(ot(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hr,mr;let rt=class extends De{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$s(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ne}};rt.finalized=!0,rt._$litElement$=!0,(hr=globalThis.litElementHydrateSupport)===null||hr===void 0||hr.call(globalThis,{LitElement:rt});const Dn=globalThis.litElementPolyfillSupport;Dn==null||Dn({LitElement:rt});((mr=globalThis.litElementVersions)!==null&&mr!==void 0?mr:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qe=e=>(...t)=>({_$litDirective$:e,values:t});let Pe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ws}=ys,jn=()=>document.createComment(""),Ke=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=o.insertBefore(jn(),a),s=o.insertBefore(jn(),a);r=new ws(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(i!==a||l){let c=r._$AA;for(;c!==i;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},Ce=(e,t,r=e)=>(e._$AI(t,r),e),ks={},xs=(e,t=ks)=>e._$AH=t,Es=e=>e._$AH,pr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const da=qe(class extends Pe{constructor(e){var t;if(super(e),e.type!==Kt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const i=!!t[a];i===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(i?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return ne}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Cs=qe(class extends Pe{constructor(e){if(super(e),e.type!==Kt.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let i=0;for(const s of e)o[i]=n?n(s,i):i,a[i]=r(s,i),i++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=Es(e),{values:i,keys:s}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=s,i;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,m=a.length-1,g=0,b=i.length-1;for(;f<=m&&g<=b;)if(a[f]===null)f++;else if(a[m]===null)m--;else if(l[f]===s[g])c[g]=Ce(a[f],i[g]),f++,g++;else if(l[m]===s[b])c[b]=Ce(a[m],i[b]),m--,b--;else if(l[f]===s[b])c[b]=Ce(a[f],i[b]),Ke(e,c[b+1],a[f]),f++,b--;else if(l[m]===s[g])c[g]=Ce(a[m],i[g]),Ke(e,a[f],a[m]),m--,g++;else if(u===void 0&&(u=Un(s,g,b),d=Un(l,f,m)),u.has(l[f]))if(u.has(l[m])){const $=d.get(s[g]),k=$!==void 0?a[$]:null;if(k===null){const C=Ke(e,a[f]);Ce(C,i[g]),c[g]=C}else c[g]=Ce(k,i[g]),Ke(e,a[f],k),a[$]=null;g++}else pr(a[m]),m--;else pr(a[f]),f++;for(;g<=b;){const $=Ke(e,c[b+1]);Ce($,i[g]),c[g++]=$}for(;f<=m;){const $=a[f++];$!==null&&pr($)}return this.ut=s,xs(e,c),ne}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Br=class extends Pe{constructor(t){if(super(t),this.et=P,t.type!==Kt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.ft=void 0,this.et=t;if(t===ne)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Br.directiveName="unsafeHTML",Br.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fn extends Br{}Fn.directiveName="unsafeSVG",Fn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ss(e,t,r){return e?t():r==null?void 0:r()}class fa extends rt{}function Be(e){if(ie(e))return fe(e,(r,n)=>{if(!X(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Fi(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,i=r.startsWith("--")?N(r):r.startsWith("-")?Rt`-${N(r)}`:Rt`--${N(r)}`;return{name:i,value:Rt`var(${i}, ${N(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${Be.name}' function.`)}function Ms({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ts=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},_s=(e,t,r)=>{t.constructor.createProperty(r,e)};function ha(e){return(t,r)=>r!==void 0?_s(e,t,r):Ts(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr;((gr=window.HTMLSlotElement)===null||gr===void 0?void 0:gr.prototype.assignedElements)!=null;function Ls(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const a=e.map(s=>[s]);return a.length||(a[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(a[s]=[])}),t.forEach(s=>{const l=a[s.index];l&&l.splice(0,0,...s.values)}),a.flat()}function Hr(e){return q(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function nn(e){return q(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ma(e){return e.map(t=>Hr(t)?t.definition:t).filter(t=>nn(t))}const pa=new WeakMap;function As(e,t){var o;const r=ma(t);return(o=ga(pa,[e,...r]).value)==null?void 0:o.template}function Rs(e,t,r){const n=ma(t);return va(pa,[e,...n],r)}function ga(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ba(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ga(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ba(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function va(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:i}=ba(e,t,n);if(!a)return{result:!1,reason:i};const s=o??{nested:void 0,template:void 0};if(o||e.set(a,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),va(l,t,r,n+1)}const Ps=new WeakMap;function ya(e,t,r){const n=As(e,t),o=n??r();if(!n){const s=Rs(e,t,o);if(s.result)Ps.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=o.valuesTransform(t),i=Ls(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:i}}function $a(e,t,r,n){const o=[],a=[],i=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],m=u-1,g=t[m];n&&n(c);let b,$=[];if(typeof f=="string"&&(b=r(f,c,g),b)){o[d]=f+b.replacement,i.push(m);const C=b.getExtraValues;$=C?C(g):[],$.length&&C?(o[d]+=" ",$.forEach((R,A)=>{A&&o.push(" ")}),s.push(R=>{const A=R[m],O=C(A);return{index:m,values:O}}),o.push(c)):o[d]+=c}b||o.push(c);const k=e.raw[u];b?(a[d]=a[d]+b.replacement+k,$.length&&$.forEach(()=>{a.push("")})):a.push(k)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:i,valueInsertions:u}}}}function Bs(...[e,t,r]){if(nn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Hs(e,t){return $a(e,t,Bs)}function p(e,...t){const r=ya(e,t,()=>Hs(e,t));return Rt(r.strings,...r.values)}const on=Symbol("key for ignoring inputs not having been set yet"),Ns={[on]:!0,allowPolymorphicState:!1};function wa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof fa?!0:wa(r)}function ka(e,t){const r=e.instanceState;j(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&j(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Is(e)}function Is(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Yn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class zs extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function an(){return e=>{var t;return t=class extends zs{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function he(){return an()}function Os(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=an()([e,n].join("-"));return r[n]=o,r},{}):{}}const Vs="_elementVirStateSetup";function Ds(e){return ie(e)?Vs in e:!1}function js(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return _r(e)===_r(t)&&r}const xa=Symbol("and"),Ea=Symbol("or"),Ca=Symbol("exact"),Sa=Symbol("enum"),sn=Symbol("unknown"),Ma="__vir__shape__definition__key__do__not__use__in__actual__objects";function Ta(e){return q(e,Ma)}const _a="__vir__shape__specifier__key__do__not__use__in__actual__objects",Us=[xa,Ea,Ca,Sa,sn];function Fs(){return Ys([],sn)}function Qt(e){return bt(e,Ea)}function ln(e){return bt(e,xa)}function cn(e){return bt(e,Ca)}function un(e){return bt(e,Sa)}function dn(e){return bt(e,sn)}function bt(e,t){const r=er(e);return!!r&&r.specifierType===t}function Ys(e,t){return{[_a]:!0,specifierType:t,parts:e}}function Pt(e,t){const r=er(t);if(r){if(ln(r))return r.parts.every(n=>Pt(e,n));if(Qt(r))return r.parts.some(n=>Pt(e,n));if(cn(r))return ie(e)?Pt(e,r.parts[0]):e===r.parts[0];if(un(r))return Object.values(r.parts[0]).some(n=>n===e);if(dn(r))return!0}return js(e,t)}function er(e){if(ie(e)&&q(e,_a)){if(!q(e,"parts")||!X(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!q(e,"specifierType")||!Ii(Us,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Nr(e,t=!1){return Ir(e)}function Ir(e){const t=er(e);if(t){if(Qt(t)||cn(t))return Ir(t.parts[0]);if(ln(t))return t.parts.reduce((r,n)=>Object.assign(r,Ir(n)),{});if(un(t))return Object.values(t.parts[0])[0];if(dn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Ta(e)?Nr(e.shape):e instanceof RegExp||X(e,"array")?e:ie(e)?fe(e,(r,n)=>Nr(n)):e}function Ws(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Nr(e),[Ma]:!0}}class te extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function qs(e,t,r={}){try{return Gs(e,t,r),!0}catch{return!1}}function Gs(e,t,r={}){Me(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function La(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Me(e,t,r,n){if(dn(t))return!0;if(Ta(t))return Me(e,t.shape,r,n);const o=La(r);if(er(e))throw new te(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Pt(e,t))throw new te(`Subject does not match shape definition at key ${o}`);if(X(t,"function"))return X(e,"function");if(ie(e)){const i=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(i).map(c=>[c,!1]));let l=!1;if(Qt(t))l=t.parts.some(c=>{try{const u=Me(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof te)return!1;throw u}});else if(ln(t))l=t.parts.every(c=>{try{const u=Me(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof te)return!1;throw u}});else if(cn(t)){const c=Me(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(un(t))throw new te(`Cannot compare an enum specifier to an object at ${o}`);if(X(t,"array")&&X(i,"array"))l=i.every((c,u)=>{const d=t.some(f=>{try{return Me(c,f,[...r,u],n),!0}catch(m){if(m instanceof te)return!1;throw m}});return s[u]=d,d});else{const c=Xs({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new te(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new te(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Xs({keys:e,options:t,shape:r,subject:n}){const o=La(e),a={};if(ie(r)){const i=new Set(j(n)),s=new Set(j(r));t.ignoreExtraKeys||i.forEach(l=>{if(!s.has(l))throw new te(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var f;const c=r[l],u=Qt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!i.has(l)&&!u&&!d)throw new te(`Subject missing key '${String(l)}' in ${o}`)}),i.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];Me(c,u,[...e,l],t),a[l]=!0})}else throw new te(`shape definition at ${o} was not an object.`);return a}const Zs=Ws({addListener(){return!1},removeListener(){return!1},value:Fs()});function br(e){return qs(e,Zs,{allowExtraKeys:!0})}function Js(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Wn(e,t){const r=e;function n(i){t?Js(i,e,e.tagName):ha()(e,i)}function o(i,s){return n(s),r[s]}return new Proxy({},{get:o,set:(i,s,l)=>{const c=Ds(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(g){i[s]=g,r[s]=g}const f=e.observablePropertyListenerMap[s];if(u!==c&&br(u)&&(f!=null&&f.length)&&u.removeListener(f),br(c))if(f)c.addListener(f);else{let g=function(){e.requestUpdate()};var m=g;e.observablePropertyListenerMap[s]=g,c.addListener(g)}else br(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,s){if(s in i)return{get value(){return o(i,s)},configurable:!0,enumerable:!0}},has:(i,s)=>Reflect.has(i,s)})}function Ks(e){return e?fe(e,t=>t):{}}function Qs({hostClassNames:e,cssVars:t}){return{hostClasses:fe(e,(r,n)=>({name:N(n),selector:N(`:host(.${n})`)})),cssVars:t}}function el({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&j(t).forEach(a=>{const i=t[a],s=r[a];typeof i=="function"&&(i({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function tl(e,t){function r(o){j(o).forEach(a=>{const i=o[a];e.instanceState[a]=i})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var rl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function tr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Ns,...e.options},n=Os(e.tagName,e.events),o=Ks(e.hostClasses);e.hostClasses&&Yn(e.tagName,e.hostClasses),e.cssVars&&Yn(e.tagName,e.cssVars);const a=e.cssVars?Be(e.cssVars):{},i=typeof e.styles=="function"?e.styles(Qs({hostClassNames:o,cssVars:a})):e.styles||p``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends fa{createRenderParams(){return tl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{wa(this)&&!this._haveInputsBeenSet&&!r[on]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${tr.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return el({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Wo(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){ka(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Wn(this,!1),this.instanceState=Wn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};j(u).forEach(f=>{ha()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},rl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=i,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:ji(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Aa(){return e=>tr({...e,options:{[on]:!1,...e.options}})}function Ra(e,t){return st(e,t),e.element}function nl(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function st(e,t){const r=nl(e),n=r?`: in ${r}`:"";if(e.type!==Kt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function ol(e,t){return t?qn(e,t):qn(void 0,e)}const qn=qe(class extends Pe{constructor(e){super(e),this.element=Ra(e,"assign")}render(e,t){return ka(this.element,t),ne}});function L(e,t){return al(e,t)}const al=qe(class extends Pe{constructor(e){super(e),this.element=Ra(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ne}}),Gn="onDomCreated",Xn=qe(class extends Pe{constructor(e){super(e),st(e,Gn)}update(e,[t]){st(e,Gn);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),vr="onResize",Pa=qe(class extends Pe{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),st(e,vr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${vr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){st(e,vr),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function J(e,t,r){return Ss(e,()=>t,()=>r)}function Ba(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Aa()(r(n))),defineElementNoInputs:n=>(t(n),tr(r(n)))}}function il(...[e,t,r]){const n=Hr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=o||a,s=nn(n);if(i&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=Hr(c)?c.inputs:void 0;return[o&&u?ol(u):void 0].filter(ke)}}}function sl(e){}function ll(e){return $a(e.strings,e.values,il,sl)}function h(e,...t){const r=bs(e,...t),n=ya(e,t,()=>ll(r));return{...r,strings:n.strings,values:n.values}}const cl={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},ul=Object.keys(cl),dl=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...ul,...dl];function et(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const fl={[I.ElementExample]:()=>[],[I.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...cs(e.controls,e.title)].filter(ke),[I.Root]:()=>[]},Vt="_isBookTreeNode",Ha=new Map;function hl(e){return Ha.get(e)}function ml(e,t){Gi(Ha,e,()=>t)}function je(e,t){return!!(Na(e)&&e.entry.entryType===t)}function Na(e){return!!(Fo(e,[Vt,"entry"])&&e[Vt])}function pl(){return{[Vt]:!0,entry:{entryType:I.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function gl({entries:e,debug:t}){const r=hl(e);if(r)return r;const n=pl();e.forEach(i=>fn({tree:n,newEntry:i,debug:t,manuallyAdded:!0}));const o=Ia(n),a={tree:n,flattenedNodes:o};return ml(e,a),t&&console.info("element-book tree:",n),a}function bl(e,t,r){if(!t.parent)return e;const n=zr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),fn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=zr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Qr(t,!1)}`);return o}function fn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=fl[t.entryType](t);t.errors.push(...o);const a=bl(e,t,r),i=Nt(t.title),s=a.children[i];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${i}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Vt]:!0,children:{},urlBreadcrumb:i,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,i],entry:t,manuallyAdded:n};a.children[i]=l,ss(t,I.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>fn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function zr(e,t){const r=Na(e)?e.fullUrlBreadcrumbs.slice(0,-1):Qr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ia(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ia(o));return[e,...r].flat()}function hn(e,t){return mn(e,["",...t],void 0)}function mn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],i=a&&mn(a,n,r);return{...e.controls,...i}}function vl(e,t,r){const n={...e};return mn(n,["",...t],r),n}function za(e,t){const r=(t==null?void 0:t.controls)||(je(e,I.Page)?fe(e.entry.controls,(o,a)=>a.initValue):{});return{children:fe(e.children,(o,a)=>{var i;return za(a,(i=t==null?void 0:t.children)==null?void 0:i[a.urlBreadcrumb])}),controls:r}}function yl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let i=0,s=0;i<n;i++){const l=a.charCodeAt(i);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const $l=Zo(32);function Bt(e){return e.join($l)}function Oa(e){if(!e.length)return[];const t=Bt(e),r=Oa(e.slice(0,-1));return[t,...r]}const wl=["error","errors"];function kl(e){return wl.includes(e)}function xl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(i=>(n(i),Bt(i.fullUrlBreadcrumbs))).forEach(i=>r[i]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&kl(t),i=Bt(o.fullUrlBreadcrumbs);if(yl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[i]){const l=Oa(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[i]=!1}),e.filter(o=>{const a=Bt(o.fullUrlBreadcrumbs),i=r[a];if(!X(i,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return i})}var D;(function(e){e.Search="search",e.Book="book"})(D||(D={}));function Or(e){return e[0]===D.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ye={hash:void 0,paths:[D.Book],search:void 0},El=0;function Va(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==El)}class rr extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Zn extends rr{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const lt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Cl=globalThis.history.pushState;function Jn(...e){const t=Cl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(lt)),t}const Sl=globalThis.history.replaceState;function Kn(...e){const t=Sl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(lt)),t}function Ml(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Jn)throw new Zn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Kn)throw new Zn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Jn,globalThis.history.replaceState=Kn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(lt))})}}function Tl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),o=globalThis.location.search?os(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function Da(e){return e.replace(/(?:^\/|\/+$)/g,"")}function ja({routeBase:e,windowPath:t}){if(!e)return"";const r=Da(e);if(Ua({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?ja({routeBase:n,windowPath:t}):""}function Ua({routeBase:e,windowPath:t}){const r=Da(e);return r?t.startsWith(`/${r}`):!1}class _l extends rr{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Fa(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Qn=6;function eo(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Qn)throw new _l(`Route sanitization depth has exceed the max of ${Qn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Fa(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class yr extends rr{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Ll(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new yr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new yr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new yr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Al(e,t,r=!1){const n=Ya(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ya(e,t){var s;const r=Ua({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?rs(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(ke).join("/")}${n}${a}`}function Rl(e={}){Ll(e),Ml();const t=e.routeBase?ja({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>eo(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const i={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(i):i},setRoutes(a,i=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!s&&Fa(l,u)))return Al(u,t,i)},createRoutesUrl(a){return Ya(a,t)},getCurrentRawRoutes(){return Tl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,i){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new rr(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(i),r||(globalThis.addEventListener(lt,n),r=!0),a&&eo(o,i),i},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const i=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(lt,n),r=!1),i},sanitizationDepth:0};return o}function Pl(e){return Rl({routeBase:e,routeSanitizer(t){return{paths:Bl(t.paths),hash:void 0,search:void 0}}})}function Bl(e){const t=e[0];if(Ji(t,D)){if(t===D.Book)return[D.Book,...e.slice(1)];if(t===D.Search)return e[1]?[t,e[1]]:[D.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ye.paths}const x=Be({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Hl={nav:{hover:{background:x["element-book-nav-hover-background-color"],foreground:x["element-book-nav-hover-foreground-color"]},active:{background:x["element-book-nav-active-background-color"],foreground:x["element-book-nav-active-foreground-color"]},selected:{background:x["element-book-nav-selected-background-color"],foreground:x["element-book-nav-selected-foreground-color"]}},accent:{icon:x["element-book-accent-icon-color"]},page:{background:x["element-book-page-background-color"],backgroundFaint1:x["element-book-page-background-faint-level-1-color"],backgroundFaint2:x["element-book-page-background-faint-level-2-color"],foreground:x["element-book-page-foreground-color"],foregroundFaint1:x["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:x["element-book-page-foreground-faint-level-2-color"]}};function Nl(e,t){Wa(e,t,Hl)}function Vr(e){return q(e,"_$cssResult$")}function to(e){return Fo(e,["name","value","default"])&&X(e.default,"string")&&Vr(e.name)&&Vr(e.value)}function Wa(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Vr(o)){if(!to(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ms({forCssVar:a,onElement:e,toValue:String(o)})}else{if(to(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Wa(e,o,a)}})}function B(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let n=t[0].length,o=t[0].map((i,s)=>t.map(l=>l[s])),a=e.map(i=>o.map(s=>{let l=0;if(!Array.isArray(i)){for(let c of s)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(s[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(i=>i[0]):a}function vt(e){return pe(e)==="string"}function pe(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Dt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function qa(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),a.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Ga(e){return e[e.length-1]}function jt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Xa(e,t,r){return(r-e)/(t-e)}function pn(e,t,r){return jt(t[0],t[1],Xa(e[0],e[1],r))}function Za(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Il=Object.freeze({__proto__:null,interpolate:jt,interpolateInv:Xa,isString:vt,last:Ga,mapRange:pn,multiplyMatrices:B,parseCoordGrammar:Za,parseFunction:qa,toPrecision:Dt,type:pe});class zl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const be=new zl;var se={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const re={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Dr(e){return Array.isArray(e)?e:re[e]}function Ut(e,t,r,n={}){if(e=Dr(e),t=Dr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(be.run("chromatic-adaptation-start",o),o.M||(o.W1===re.D65&&o.W2===re.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===re.D50&&o.W2===re.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),be.run("chromatic-adaptation-end",o),o.M)return B(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ol=75e-6,Y=class Y{constructor(t){var o,a,i;this.id=t.id,this.name=t.name,this.base=t.base?Y.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Dr(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Vl(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),be.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Ol}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let i=n[a];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[s,l]=i.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=ro(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=ro(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,a,i;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)a=n[s],i=s;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>i;s--)r=n[s].toBase(r);for(let s=i+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Y.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Y)return t;if(pe(t)==="string"){let o=Y.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Y.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=pe(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=Y.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=pe(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=Y.get(o);let i=a.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===i||((l=u.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};lr(Y,"registry",{}),lr(Y,"DEFAULT_FORMAT",{type:"functions",name:"color"});let v=Y;function Vl(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function ro(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Za(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let i=e.coordGrammar[a][0],s=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,i)=>{let{fromRange:s,toRange:l,suffix:c}=r[i];return s&&l&&(a=pn(s,l,a)),a=Dt(a,o),c&&(a+=c),a})}return e}var K=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class U extends v{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=K),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=B(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ut(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Ut(this.base.white,this.white,r),B(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ja(e,{meta:t}={}){var n,o,a,i,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(be.run("parse-start",r),r.color)return r.color;if(r.parsed=qa(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of v.all){let m=f.getFormat("color");if(m&&(c===m.id||(o=m.ids)!=null&&o.includes(c))){const g=Object.keys(f.coords).map((b,$)=>r.parsed.args[$]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:g,alpha:u}}}let d="";if(c in v.registry){let f=(s=(i=(a=v.registry[c].formats)==null?void 0:a.functions)==null?void 0:i.color)==null?void 0:s.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of v.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Ga(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,m;return u.coordGrammar&&(m=Object.entries(c.coords).map(([g,b],$)=>{var oe;let k=u.coordGrammar[$],C=(oe=f[$])==null?void 0:oe.type,R=k.find(F=>F==C);if(!R){let F=b.name||g;throw new TypeError(`${C} not allowed for ${F} in ${l}()`)}let A=R.range;C==="<percentage>"&&(A||(A=[0,1]));let O=b.range||b.refRange;return A&&O&&(f[$]=pn(A,O,f[$])),R})),t&&Object.assign(t,{formatId:u.name,types:m}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of v.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function E(e){if(!e)throw new TypeError("Empty color reference");vt(e)&&(e=Ja(e));let t=e.space||e.spaceId;return t instanceof v||(e.space=v.get(t)),e.alpha===void 0&&(e.alpha=1),e}function yt(e,t){return t=v.get(t),t.from(e)}function Q(e,t){let{space:r,index:n}=v.resolveCoord(t,e.space);return yt(e,r)[n]}function Ka(e,t,r){return t=v.get(t),e.coords=t.to(e.space,r),e}function ve(e,t,r){if(e=E(e),arguments.length===2&&pe(arguments[1])==="object"){let n=arguments[1];for(let o in n)ve(e,o,n[o])}else{typeof r=="function"&&(r=r(Q(e,t)));let{space:n,index:o}=v.resolveCoord(t,e.space),a=yt(e,n);a[o]=r,Ka(e,n,a)}return e}var gn=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:K,fromBase:e=>Ut(K.white,"D50",e),toBase:e=>Ut("D50",K.white,e),formats:{color:{}}});const Dl=216/24389,no=24/116,kt=24389/27;let $r=re.D50;var W=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:$r,base:gn,fromBase(e){let r=e.map((n,o)=>n/$r[o]).map(n=>n>Dl?Math.cbrt(n):(kt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>no?Math.pow(t[0],3):(116*t[0]-16)/kt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/kt,t[2]>no?Math.pow(t[2],3):(116*t[2]-16)/kt].map((n,o)=>n*$r[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function nr(e){return(e%360+360)%360}function jl(e,t){if(e==="raw")return t;let[r,n]=t.map(nr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var ct=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:W,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),nr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const oo=25**7,Ft=Math.PI,ao=180/Ft,Ie=Ft/180;function jr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,i,s]=W.from(e),l=ct.from(W,[a,i,s])[1],[c,u,d]=W.from(t),f=ct.from(W,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let g=((l+f)/2)**7,b=.5*(1-Math.sqrt(g/(g+oo))),$=(1+b)*i,k=(1+b)*u,C=Math.sqrt($**2+s**2),R=Math.sqrt(k**2+d**2),A=$===0&&s===0?0:Math.atan2(s,$),O=k===0&&d===0?0:Math.atan2(d,k);A<0&&(A+=2*Ft),O<0&&(O+=2*Ft),A*=ao,O*=ao;let oe=c-a,F=R-C,T=O-A,z=A+O,ir=Math.abs(T),Xe;C*R===0?Xe=0:ir<=180?Xe=T:T>180?Xe=T-360:T<-180?Xe=T+360:console.log("the unthinkable has happened");let $n=2*Math.sqrt(R*C)*Math.sin(Xe*Ie/2),Li=(a+c)/2,sr=(C+R)/2,wn=Math.pow(sr,7),ce;C*R===0?ce=z:ir<=180?ce=z/2:z<360?ce=(z+360)/2:ce=(z-360)/2;let kn=(Li-50)**2,Ai=1+.015*kn/Math.sqrt(20+kn),xn=1+.045*sr,Ze=1;Ze-=.17*Math.cos((ce-30)*Ie),Ze+=.24*Math.cos(2*ce*Ie),Ze+=.32*Math.cos((3*ce+6)*Ie),Ze-=.2*Math.cos((4*ce-63)*Ie);let En=1+.015*sr*Ze,Ri=30*Math.exp(-1*((ce-275)/25)**2),Pi=2*Math.sqrt(wn/(wn+oo)),Bi=-1*Math.sin(2*Ri*Ie)*Pi,wt=(oe/(r*Ai))**2;return wt+=(F/(n*xn))**2,wt+=($n/(o*En))**2,wt+=Bi*(F/(n*xn))*($n/(o*En)),Math.sqrt(wt)}const Ul=75e-6;function nt(e,t=e.space,{epsilon:r=Ul}={}){e=E(e),t=v.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ut(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ye(e,{method:t=se.gamut_mapping,space:r=e.space}={}){if(vt(arguments[1])&&(r=arguments[1]),r=v.get(r),nt(e,r,{epsilon:0}))return E(e);let n=Z(e,r);if(t!=="clip"&&!nt(e,r)){let o=ye(ut(n),{method:"clip",space:r});if(jr(e,o)>2){let a=v.resolveCoord(t),i=a.space,s=a.id,l=Z(n,i),u=(a.range||a.refRange)[0],d=.01,f=u,m=Q(l,s);for(;m-f>d;){let g=ut(l);g=ye(g,{space:r,method:"clip"}),jr(l,g)-2<d?f=Q(l,s):m=Q(l,s),ve(l,s,(f+m)/2)}n=Z(l,r)}else n=o}if(t==="clip"||!nt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,i)=>{let[s,l]=o[i];return s!==void 0&&(a=Math.max(s,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=Z(n,e.space)),e.coords=n.coords,e}ye.returns="color";function Z(e,t,{inGamut:r}={}){e=E(e),t=v.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ye(o)),o}Z.returns="color";function Yt(e,{precision:t=se.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=E(e);let i=r;r=e.space.getFormat(r)??e.space.getFormat("default")??v.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!nt(e)&&(s=ye(ut(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(m=>Dt(m,t)));let u=[...s];if(c==="color"){let m=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(m)}let d=e.alpha;t!==null&&(d=Dt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Fl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Yl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var or=new U({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Fl,fromXYZ_M:Yl,formats:{color:{}}});const xt=1.09929682680944,io=.018053968510807;var Qa=new U({id:"rec2020",name:"REC.2020",base:or,toBase(e){return e.map(function(t){return t<io*4.5?t/4.5:Math.pow((t+xt-1)/xt,1/.45)})},fromBase(e){return e.map(function(t){return t>=io?xt*Math.pow(t,.45)-(xt-1):4.5*t})},formats:{color:{}}});const Wl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],ql=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ei=new U({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Wl,fromXYZ_M:ql});const Gl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Xl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ti=new U({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Gl,fromXYZ_M:Xl,formats:{color:{}}}),so={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let lo=Array(3).fill("<percentage> | <number>[0, 255]"),co=Array(3).fill("<number>[0, 255]");var dt=new U({id:"srgb",name:"sRGB",base:ti,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:lo},rgb_number:{name:"rgb",commas:!0,coords:co,noAlpha:!0},color:{},rgba:{coords:lo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:co},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=so.black,t.alpha=0):t.coords=so[e],t.coords)return t}}}}),ri=new U({id:"p3",name:"P3",base:ei,fromBase:dt.fromBase,toBase:dt.toBase,formats:{color:{id:"display-p3"}}});se.display_space=dt;if(typeof CSS<"u"&&CSS.supports)for(let e of[W,Qa,ri]){let t=e.getMinCoords(),n=Yt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){se.display_space=e;break}}function Zl(e,{space:t=se.display_space,...r}={}){let n=Yt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!se.display_space)n=new String(n),n.color=e;else{let o=Z(e,t);n=new String(Yt(o,r)),n.color=o}return n}function ni(e,t,r="lab"){r=v.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,i,s)=>{let l=o[s];return isNaN(i)||isNaN(l)?a:a+(l-i)**2},0))}function Jl(e,t){return e=E(e),t=E(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function $e(e){return Q(e,[K,"y"])}function oi(e,t){ve(e,[K,"y"],t)}function Kl(e){Object.defineProperty(e.prototype,"luminance",{get(){return $e(this)},set(t){oi(this,t)}})}var Ql=Object.freeze({__proto__:null,getLuminance:$e,register:Kl,setLuminance:oi});function ec(e,t){e=E(e),t=E(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const tc=.56,rc=.57,nc=.62,oc=.65,uo=.022,ac=1.414,ic=.1,sc=5e-4,lc=1.14,fo=.027,cc=1.14;function ho(e){return e>=uo?e:e+(uo-e)**ac}function ze(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function uc(e,t){t=E(t),e=E(e);let r,n,o,a,i,s;t=Z(t,"srgb"),[a,i,s]=t.coords;let l=ze(a)*.2126729+ze(i)*.7151522+ze(s)*.072175;e=Z(e,"srgb"),[a,i,s]=e.coords;let c=ze(a)*.2126729+ze(i)*.7151522+ze(s)*.072175,u=ho(l),d=ho(c),f=d>u;return Math.abs(d-u)<sc?n=0:f?(r=d**tc-u**rc,n=r*lc):(r=d**oc-u**nc,n=r*cc),Math.abs(n)<ic?o=0:n>0?o=n-fo:o=n+fo,o*100}function dc(e,t){e=E(e),t=E(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const fc=5e4;function hc(e,t){e=E(e),t=E(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);return n>r&&([r,n]=[n,r]),n===0?fc:(r-n)/n}function mc(e,t){e=E(e),t=E(t);let r=Q(e,[W,"l"]),n=Q(t,[W,"l"]);return Math.abs(r-n)}const pc=216/24389,mo=24/116,Et=24389/27;let wr=re.D65;var Ur=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:wr,base:K,fromBase(e){let r=e.map((n,o)=>n/wr[o]).map(n=>n>pc?Math.cbrt(n):(Et*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>mo?Math.pow(t[0],3):(116*t[0]-16)/Et,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Et,t[2]>mo?Math.pow(t[2],3):(116*t[2]-16)/Et].map((n,o)=>n*wr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const kr=Math.pow(5,.5)*.5+.5;function gc(e,t){e=E(e),t=E(t);let r=Q(e,[Ur,"l"]),n=Q(t,[Ur,"l"]),o=Math.abs(Math.pow(r,kr)-Math.pow(n,kr)),a=Math.pow(o,1/kr)*Math.SQRT2-40;return a<7.5?0:a}var Ht=Object.freeze({__proto__:null,contrastAPCA:uc,contrastDeltaPhi:gc,contrastLstar:mc,contrastMichelson:dc,contrastWCAG21:ec,contrastWeber:hc});function bc(e,t,r={}){vt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Ht).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=E(e),t=E(t);for(let a in Ht)if("contrast"+n.toLowerCase()===a.toLowerCase())return Ht[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function ai(e){let[t,r,n]=yt(e,K),o=t+15*r+3*n;return[4*t/o,9*r/o]}function ii(e){let[t,r,n]=yt(e,K),o=t+r+n;return[t/o,r/o]}function vc(e){Object.defineProperty(e.prototype,"uv",{get(){return ai(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ii(this)}})}var yc=Object.freeze({__proto__:null,register:vc,uv:ai,xy:ii});function $c(e,t){return ni(e,t,"lab")}const wc=Math.PI,po=wc/180;function kc(e,t,{l:r=2,c:n=1}={}){let[o,a,i]=W.from(e),[,s,l]=ct.from(W,[o,a,i]),[c,u,d]=W.from(t),f=ct.from(W,[c,u,d])[1];s<0&&(s=0),f<0&&(f=0);let m=o-c,g=s-f,b=a-u,$=i-d,k=b**2+$**2-g**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let R=.0638*s/(1+.0131*s)+.638,A;Number.isNaN(l)&&(l=0),l>=164&&l<=345?A=.56+Math.abs(.2*Math.cos((l+168)*po)):A=.36+Math.abs(.4*Math.cos((l+35)*po));let O=Math.pow(s,4),oe=Math.sqrt(O/(O+1900)),F=R*(oe*A+1-oe),T=(m/(r*C))**2;return T+=(g/(n*R))**2,T+=k/F**2,Math.sqrt(T)}const go=203;var bn=new v({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:K,fromBase(e){return e.map(t=>Math.max(t*go,0))},toBase(e){return e.map(t=>Math.max(t/go,0))}});const Ct=1.15,St=.66,bo=2610/2**14,xc=2**14/2610,vo=3424/2**12,yo=2413/2**7,$o=2392/2**7,Ec=1.7*2523/2**5,wo=2**5/(1.7*2523),Mt=-.56,xr=16295499532821565e-27,Cc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Sc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Mc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Tc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var si=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:bn,fromBase(e){let[t,r,n]=e,o=Ct*t-(Ct-1)*n,a=St*r-(St-1)*t,s=B(Cc,[o,a,n]).map(function(f){let m=vo+yo*(f/1e4)**bo,g=1+$o*(f/1e4)**bo;return(m/g)**Ec}),[l,c,u]=B(Mc,s);return[(1+Mt)*l/(1+Mt*l)-xr,c,u]},toBase(e){let[t,r,n]=e,o=(t+xr)/(1+Mt-Mt*(t+xr)),i=B(Tc,[o,r,n]).map(function(f){let m=vo-f**wo,g=$o*f**wo-yo;return 1e4*(m/g)**xc}),[s,l,c]=B(Sc,i),u=(s+(Ct-1)*c)/Ct,d=(l+(St-1)*u)/St;return[u,d,c]},formats:{color:{}}}),Fr=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:si,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),nr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function _c(e,t){let[r,n,o]=Fr.from(e),[a,i,s]=Fr.from(t),l=r-a,c=n-i;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*i)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const li=3424/4096,ci=2413/128,ui=2392/128,ko=2610/16384,Lc=2523/32,Ac=16384/2610,xo=32/2523,Rc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Pc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Bc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Hc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Yr=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:bn,fromBase(e){let t=B(Rc,e);return Nc(t)},toBase(e){let t=Ic(e);return B(Hc,t)},formats:{color:{}}});function Nc(e){let t=e.map(function(r){let n=li+ci*(r/1e4)**ko,o=1+ui*(r/1e4)**ko;return(n/o)**Lc});return B(Pc,t)}function Ic(e){return B(Bc,e).map(function(n){let o=Math.max(n**xo-li,0),a=ci-ui*n**xo;return 1e4*(o/a)**Ac})}function zc(e,t){let[r,n,o]=Yr.from(e),[a,i,s]=Yr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-i)**2+(o-s)**2)}const Oc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Vc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Dc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],jc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Wt=new v({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:K,fromBase(e){let r=B(Oc,e).map(n=>Math.cbrt(n));return B(Dc,r)},toBase(e){let r=B(jc,e).map(n=>n**3);return B(Vc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Uc(e,t){let[r,n,o]=Wt.from(e),[a,i,s]=Wt.from(t),l=r-a,c=n-i,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var qt={deltaE76:$c,deltaECMC:kc,deltaE2000:jr,deltaEJz:_c,deltaEITP:zc,deltaEOK:Uc};function tt(e,t,r={}){vt(r)&&(r={method:r});let{method:n=se.deltaE,...o}=r;e=E(e),t=E(t);for(let a in qt)if("deltae"+n.toLowerCase()===a.toLowerCase())return qt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Fc(e,t=.25){let n=[v.get("oklch","lch"),"l"];return ve(e,n,o=>o*(1+t))}function Yc(e,t=.25){let n=[v.get("oklch","lch"),"l"];return ve(e,n,o=>o*(1-t))}var Wc=Object.freeze({__proto__:null,darken:Yc,lighten:Fc});function di(e,t,r=.5,n={}){[e,t]=[E(e),E(t)],pe(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:i}=n;return $t(e,t,{space:o,outputSpace:a,premultiplied:i})(r)}function fi(e,t,r={}){let n;vn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:i=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[E(e),E(t)],n=$t(e,t,l));let c=tt(e,t),u=o>0?Math.max(i,Math.ceil(c/o)+1):i,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(m,g)=>{let b=g*f;return{p:b,color:n(b)}})}if(o>0){let f=d.reduce((m,g,b)=>{if(b===0)return 0;let $=tt(g.color,d[b-1].color,a);return Math.max(m,$)},0);for(;f>o;){f=0;for(let m=1;m<d.length&&d.length<s;m++){let g=d[m-1],b=d[m],$=(b.p+g.p)/2,k=n($);f=Math.max(f,tt(k,g.color),tt(k,b.color)),d.splice(m,0,{p:$,color:n($)}),m++}}}return d=d.map(f=>f.color),d}function $t(e,t,r={}){if(vn(e)){let[l,c]=[e,t];return $t(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:i}=r;e=E(e),t=E(t),e=ut(e),t=ut(t);let s={colors:[e,t],options:r};if(n?n=v.get(n):n=v.registry[se.interpolationSpace]||e.space,o=o?v.get(o):n,e=Z(e,n),t=Z(t,n),e=ye(e),t=ye(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Q(e,c),Q(t,c)];[u,d]=jl(l,[u,d]),ve(e,c,u),ve(t,c,d)}return i&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,m)=>{let g=t.coords[m];return jt(f,g,l)}),u=jt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return i&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=Z(d,o)),d},{rangeArgs:s})}function vn(e){return pe(e)==="function"&&!!e.rangeArgs}se.interpolationSpace="lab";function qc(e){e.defineFunction("mix",di,{returns:"color"}),e.defineFunction("range",$t,{returns:"function<color>"}),e.defineFunction("steps",fi,{returns:"array<color>"})}var Gc=Object.freeze({__proto__:null,isRange:vn,mix:di,range:$t,register:qc,steps:fi}),hi=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[i,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:i=(o-a)/c+(o<a?6:0);break;case o:i=(a-n)/c+2;break;case a:i=(n-o)/c+4}i=i*60}return[i,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let i=(a+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),mi=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:hi,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Xc=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:mi,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let a=1-n,i=a===0?0:1-r/a;return[t,i*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Zc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Jc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var pi=new U({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Zc,fromXYZ_M:Jc}),Kc=new U({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:pi,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Qc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],eu=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var gi=new U({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:gn,toXYZ_M:Qc,fromXYZ_M:eu});const tu=1/512,ru=16/512;var nu=new U({id:"prophoto",name:"ProPhoto",base:gi,toBase(e){return e.map(t=>t<ru?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=tu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),ou=new v({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Wt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),nr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Eo=203,Co=2610/2**14,au=2**14/2610,iu=2523/2**5,So=2**5/2523,Mo=3424/2**12,To=2413/2**7,_o=2392/2**7;var su=new U({id:"rec2100pq",name:"REC.2100-PQ",base:or,toBase(e){return e.map(function(t){return(Math.max(t**So-Mo,0)/(To-_o*t**So))**au*1e4/Eo})},fromBase(e){return e.map(function(t){let r=Math.max(t*Eo/1e4,0),n=Mo+To*r**Co,o=1+_o*r**Co;return(n/o)**iu})},formats:{color:{id:"rec2100-pq"}}});const Lo=.17883277,Ao=.28466892,Ro=.55991073,Er=3.7743;var lu=new U({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:or,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Er:(Math.exp((t-Ro)/Lo)+Ao)/12*Er})},fromBase(e){return e.map(function(t){return t/=Er,t<=1/12?Math.sqrt(3*t):Lo*Math.log(12*t-Ao)+Ro})},formats:{color:{id:"rec2100-hlg"}}});const bi={};be.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=vi(e.W1,e.W2,e.options.method))});be.add("chromatic-adaptation-end",e=>{e.M||(e.M=vi(e.W1,e.W2,e.options.method))});function ar({id:e,toCone_M:t,fromCone_M:r}){bi[e]=arguments[0]}function vi(e,t,r="Bradford"){let n=bi[r],[o,a,i]=B(n.toCone_M,e),[s,l,c]=B(n.toCone_M,t),u=[[s/o,0,0],[0,l/a,0],[0,0,c/i]],d=B(u,n.toCone_M);return B(n.fromCone_M,d)}ar({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});ar({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});ar({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});ar({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(re,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});re.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const cu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],uu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var yi=new U({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:re.ACES,toXYZ_M:cu,fromXYZ_M:uu,formats:{color:{}}});const Tt=2**-16,Cr=-.35828683,_t=(Math.log2(65504)+9.72)/17.52;var du=new U({id:"acescc",name:"ACEScc",coords:{r:{range:[Cr,_t],name:"Red"},g:{range:[Cr,_t],name:"Green"},b:{range:[Cr,_t],name:"Blue"}},referred:"scene",base:yi,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Tt)*2:r<_t?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Tt)+9.72)/17.52:t<Tt?(Math.log2(Tt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Po=Object.freeze({__proto__:null,A98RGB:Kc,A98RGB_Linear:pi,ACEScc:du,ACEScg:yi,HSL:hi,HSV:mi,HWB:Xc,ICTCP:Yr,JzCzHz:Fr,Jzazbz:si,LCH:ct,Lab:W,Lab_D65:Ur,OKLCH:ou,OKLab:Wt,P3:ri,P3_Linear:ei,ProPhoto:nu,ProPhoto_Linear:gi,REC_2020:Qa,REC_2020_Linear:or,REC_2100_HLG:lu,REC_2100_PQ:su,XYZ_ABS_D65:bn,XYZ_D50:gn,XYZ_D65:K,sRGB:dt,sRGB_Linear:ti});let M=class V{constructor(...t){let r;t.length===1&&(r=E(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:v.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in this.space.coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:s=>this.set(i,s)})}get spaceId(){return this.space.id}clone(){return new V(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Zl(this,...t);return r.color=new V(r.color),r}static get(t,...r){return t instanceof V?t:new V(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,i=function(...s){let l=r(...s);if(a==="color")l=V.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return V.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>V.get(c)));return l};t in V||(V[t]=i),o&&(V.prototype[t]=function(...s){return i(this,...s)})}static defineFunctions(t){for(let r in t)V.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(V);else for(let r in t)V.defineFunction(r,t[r])}};M.defineFunctions({get:Q,getAll:yt,set:ve,setAll:Ka,to:Z,equals:Jl,inGamut:nt,toGamut:ye,distance:ni,toString:Yt});Object.assign(M,{util:Il,hooks:be,WHITES:re,Space:v,spaces:v.registry,parse:Ja,defaults:se});for(let e of Object.keys(Po))v.register(Po[e]);for(let e in v.registry)Wr(e,v.registry[e]);be.add("colorspace-init-end",e=>{var t;Wr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Wr(r,e)})});function Wr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(M.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return v.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,i)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:s}=v.resolveCoord([t,a]);if(s>=0)return o[s]}return Reflect.get(o,a,i)},set:(o,a,i,s)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=v.resolveCoord([t,a]);if(l>=0)return o[l]=i,this.setAll(e,o),!0}return Reflect.set(o,a,i,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}M.extend(qt);M.extend({deltaE:tt});Object.assign(M,{deltaEMethods:qt});M.extend(Wc);M.extend({contrast:bc});M.extend(yc);M.extend(Ql);M.extend(Gc);M.extend(Ht);function $i(e){return fe(e,(t,r)=>r instanceof M?N(r.toString({format:"hex"})):$i(r))}const fu="dodgerblue";function qr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Sr({background:e,foreground:t}){return{background:e??new M(qr(t)),foreground:t??new M(qr(e))}}var Gt;(function(e){e.Dark="dark",e.Light="light"})(Gt||(Gt={}));function hu(e){return e==="black"?"white":"black"}const mu={black:{foregroundFaint1:new M("#ccc"),foregroundFaint2:new M("#eee")},white:{foregroundFaint1:new M("#ccc"),foregroundFaint2:new M("#eee")}},pu={black:{backgroundFaint1:new M("#666"),backgroundFaint2:new M("#444")},white:{backgroundFaint1:new M("#ccc"),backgroundFaint2:new M("#fafafa")}};function Bo({themeColor:e=fu,themeStyle:t=Gt.Light}={}){const r=new M(e),n=new M(t===Gt.Dark?"black":"white"),o=qr(n),a=new M(o),i={nav:{hover:Sr({background:r.clone().set({"hsl.l":93})}),active:Sr({background:r.clone().set({"hsl.l":90})}),selected:Sr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...pu[hu(o)],foreground:a,...mu[o]}};return $i(i)}const Xt=an()("element-book-change-route"),Ho="vira-",{defineElement:Ge,defineElementNoInputs:Fu}=Ba({assertInputs:e=>{if(!e.tagName.startsWith(Ho))throw new Error(`Tag name should start with '${Ho}' but got '${e.tagName}'`)}}),gu=M;function bu(e){try{if(!e)throw new Error("invalid empty color");return new gu(e)}catch{const r=String(e),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?qi({callback:()=>JSON.stringify(e),fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const wi=p`
    pointer-events: none;
    opacity: 0.3;
`,ge=Be({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),ft=Be({"vira-form-input-border-radius":"8px"}),Zt=Be({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":p`calc(${ft["vira-form-input-border-radius"].value} + 4px)`});function ki({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=N(Jo(n+r+t));return p`
        ${N(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Zt["vira-focus-outline-color"].value};
            border-radius: ${Zt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const vu=p`
    padding: 0;
    margin: 0;
`,Te=p`
    ${vu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Gr=p`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var xi=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(xi||{});const H=Ge()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Gr};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Zt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${wi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Te};
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
            border-radius: ${ft["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ge["vira-interaction-animation-duration"].value},
                background-color
                    ${ge["vira-interaction-animation-duration"].value},
                border-color ${ge["vira-interaction-animation-duration"].value};
        }

        ${ki({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${w} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${w.assign({icon:e.icon})}></${w}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Xr=(e=>(e.Header="header",e))(Xr||{});const Se=Ge()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>p`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Te};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ge["vira-pretty-animation-duration"].value};
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
                    ${Pa(({contentRect:i})=>{t({contentHeight:i.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),y=Be({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function le({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function yu(e,t){const r=j(t).map(n=>{const o=t[n],a=bu(o);return`${y[n].name}: ${a.toString()};`}).join(" ");return le({name:e.name,svgTemplate:h`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const Ei=le({name:"CloseX24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ci=le({name:"Element16Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Le=le({name:"Element24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Si=le({name:"Loader24Icon",svgTemplate:h`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
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
        animation: ${ge["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,ht=le({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            ${$u}
        </style>
        ${Si.svgTemplate}
    `}),yn=le({name:"Options24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${y["vira-icon-stroke-color"].value}"
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Jt=le({name:"StatusFailure24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),wu=le({name:"StatusInProgress24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),ku=le({name:"StatusSuccess24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xu={CloseX24Icon:Ei,Element16Icon:Ci,Element24Icon:Le,Loader24Icon:Si,LoaderAnimated24Icon:ht,Options24Icon:yn,StatusFailure24Icon:Jt,StatusInProgress24Icon:wu,StatusSuccess24Icon:ku};var Zr=(e=>(e.Loading="loading",e.Error="error",e))(Zr||{});const Oe=Ge()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:he(),imageError:he()},styles:({hostClasses:e})=>p`
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
                      <${w.assign({icon:Jt})} class="error"></${w}>
                  </slot>
              `:t.loadedUrls[a]?void 0:h`
                    <slot class="status-wrapper" name=${"loading"}>
                        <${w.assign({icon:ht})}></${w}>
                    </slot>
                `;return h`
            ${J(!!i,i)}
            <img
                class=${da({hidden:!!i})}
                ${L("load",async()=>{e._debugLoadDelay&&await Lr(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${L("error",async s=>{e._debugLoadDelay&&await Lr(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new o.imageError(s.error))})}
                src=${a}
            />
        `}});function Jr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Jr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Mi({value:e,allowed:t,blocked:r}){const n=t?Jr({input:e,matcher:t}):!0,o=r?Jr({input:e,matcher:r}):!1;return n&&!o}function Ti(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Mi({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Eu({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=et(r,HTMLInputElement),i=r.data,s=t;let l=a.value??"";if(i)if(i.length===1)Mi({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(i));else{const{filtered:c,blocked:u}=Ti({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),s!==l&&o(l)}const _=Ge()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:he(),inputBlocked:he()},styles:({hostClasses:e,cssVars:t})=>p`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Zt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${wi};
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
                ${Te};
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
                ${Gr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Te};
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
                border-radius: ${ft["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ge["vira-interaction-animation-duration"].value};
            }

            label {
                ${Te};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${ft["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${ki({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Te};
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
                ${Gr};
            }

            .close-x-button {
                ${Te};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${ge["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Ti({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?h`
                  <${w.assign({icon:e.icon})} class="left-side-icon"></${w}>
              `:"",s=e.fitText?p`
                  width: ${r.forcedInputWidth}px;
              `:"";return h`
            <label>
                ${i}
                ${J(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${Pa(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${L("input",l=>{Eu({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${J(!!(e.showClearButton&&e.value),h`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${L("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${w.assign({icon:Ei})}></${w}>
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
    `,events:{routeChange:he()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(i){e.route&&Va(i)&&(i.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return h`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return h`
                <a href=${i} rel="noopener noreferrer" ${L("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:ee,defineElementNoInputs:Yu}=Ba(),G=ee()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>p`
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
                ${L("click",a=>{(!e.router||Va(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Xt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Cu(e,t){return e.entry.entryType===I.Root?!1:!!(e.entry.entryType===I.Page||me(t,e.fullUrlBreadcrumbs.slice(0,-1))||me(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ue=ee()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>p`
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
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Cu(r,e.selectedPath))return;const n=p`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return h`
                <li style=${n}>
                    <${G.assign({router:e.router,route:{paths:[D.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${da({"title-row":!0,selected:e.selectedPath?me(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${J(je(r,I.ElementExample),h`
                                    <${w.assign({icon:Ci})}></${w}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${G}>
                </li>
            `});return h`
            <${G.assign({route:Ye,router:e.router})}>
                <slot name=${ae.NavHeader}>Book</slot>
            </${G}>
            <ul>
                ${t}
            </ul>
        `}});async function Su(e){await Ar(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await ds(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const we=ee()({tagName:"book-error",styles:p`
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
            `)}}),mt=ee()({tagName:"book-page-controls",events:{controlValueChange:he()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===S.Hidden)return"";const i=Mu(e.currentValues[n],o,s=>{const l=X(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return h`
                    <div class="control-wrapper">
                        ${J(a===0,h`
                                <${w.assign({icon:yn})}
                                    class="options-icon"
                                ></${w}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${i}
                        </label>
                    </div>
                `}):""}});function Mu(e,t,r){return Ne(t,S.Hidden)?"":Ne(t,S.Checkbox)?h`
            <input
                type="checkbox"
                .value=${e}
                ${L("input",n=>{const o=et(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ne(t,S.Color)?h`
            <input
                type="color"
                .value=${e}
                ${L("input",n=>{const o=et(n,HTMLInputElement);r(o.value)})}
            />
        `:Ne(t,S.Text)?h`
            <${_.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${L(_.events.valueChange,n=>{r(n.detail)})}
            ></${_}>
        `:Ne(t,S.Number)?h`
            <input
                type="number"
                .value=${e}
                ${L("input",n=>{const o=et(n,HTMLInputElement);r(o.value)})}
            />
        `:Ne(t,S.Dropdown)?h`
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
        `}const No=ee()({tagName:"book-breadcrumbs",styles:p`
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
                <${G.assign({route:{hash:void 0,search:void 0,paths:[D.Book,...i]},router:e.router})}>
                    ${r}
                </${G}>
                ${s}
            `}):h`
                &nbsp;
            `}}),Mr=ee()({tagName:"book-breadcrumbs-bar",styles:p`
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
                    <${No.assign({currentRoute:e.currentRoute,router:e.router})}></${No}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${L("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Lr(200),n.value===o&&(n.value?t(new Xt({paths:[D.Search,encodeURIComponent(n.value)]})):t(new Xt(Ye)))})}
            />
        `}}),Io=ee()({tagName:"book-entry-description",styles:p`
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
            `)}}),zo=ee()({tagName:"book-page-wrapper",styles:p`
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
              `,r=[D.Book,...e.pageNode.fullUrlBreadcrumbs],n=Yo(e.pageNode.entry.errors);return n&&console.error(n),h`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${G.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${G}>
                    ${n?h`
                              <${we.assign({message:n.message})}></${we}>
                          `:h`
                              <${Io.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Io}>
                              <${mt.assign({config:e.pageNode.entry.controls,currentValues:hn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${mt}>
                          `}
                </div>
            </div>
        `}}),Lt=ee()({tagName:"book-element-example-controls",styles:p`
        :host {
            display: flex;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[D.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return h`
            <${G.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${G}>
        `}}),Oo=Symbol("unset-internal-state"),Vo=ee()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Oo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Yo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Oo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return h`
                ${J(!!t.elementExampleNode.entry.styles,h`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),h`
                <${we.assign({message:`${t.elementExampleNode.entry.title} failed: ${pt(n)}`})}></${we}>
            `}},options:{allowPolymorphicState:!0}}),Do=ee()({tagName:"book-element-example-wrapper",styles:p`
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

        ${Lt} {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Lt} {
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return h`
            <div class="individual-example-wrapper">
                <${Lt.assign(Qi(e,["currentPageControls"]))}></${Lt}>
                <${Vo.assign(e)}></${Vo}>
            </div>
        `}});function _i(e,t,r,n){const o=zr(r,n),a=[];if(o){const i=_i(e,t,o,n);i&&a.push(i)}if(je(r,I.Page)&&!e.includes(r)){const i=hn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:i,breadcrumbs:fe(i,()=>r.fullUrlBreadcrumbs)})}return a.reduce((i,s)=>({config:{...i.config,...s.config},current:{...i.current,...s.current},breadcrumbs:{...i.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Tu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[h`
                No results
            `];const i=_n(e,1)?_i(e,o,e[0],a):void 0,s=i&&Object.values(i.config).length&&_n(e,1)?h`
                  <${mt.assign({config:i.config,currentValues:i.current,fullUrlBreadcrumbs:i.breadcrumbs})}></${mt}>
              `:"",l=Cs(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(je(c,I.Page))return h`
                    <${zo.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${zo}>
                `;if(je(c,I.ElementExample)){const d=hn(o,c.fullUrlBreadcrumbs.slice(0,-1));return h`
                    <${Do.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Do}>
                `}else return je(c,I.Root)?"":h`
                    <${we.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${we}>
                `});return[s,l].flat()}const Ve=ee()({tagName:"book-entry-display",styles:p`
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

        ${Mr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${ge["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:he()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Or(e.currentRoute.paths),i=Tu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return h`
            <${Mr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${Mr}>

            ${J(e.showLoading,h`
                    <div
                        ${Xn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${w.assign({icon:ht})}></${w}>
                    </div>
                    ${J(!!n.lastElement,h`
                            ${n.lastElement}
                            <slot name=${ae.Footer}></slot>
                        `)}
                `,h`
                    <div
                        ${Xn(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${i}
                    </div>
                    <slot name=${ae.Footer}></slot>
                `)}
        `}});function _u(e,t,r){const n=jo(e,t);if(n.length)return n;r(Ye);const o=jo(e,Ye.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function jo(e,t){return e.filter(r=>us({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Tr=Aa()({tagName:"element-book-app",events:{pathUpdate:he()},stateInitStatic:{currentRoute:Ye,router:void 0,loading:!0,colors:{config:void 0,theme:Bo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:p`
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
    `,initCallback({host:e,state:t}){setTimeout(()=>{Uo(e,Or(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,m,g,b,$;t._debug&&console.info("rendering element-book app");function i(k){return{...e.currentRoute,...k}}function s(k){const C=i(k);return!me(e.currentRoute,C)}function l(k){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,k].filter(ke).join(" - "))}function c(k){if(!s(k))return;const C=i(k);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!me(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!me(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const T=Pl(t.internalRouterConfig.basePath);n({router:T}),T.addRouteListener(!0,z=>{n({currentRoute:z})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const k={themeColor:t.themeColor};if(!me(k,(f=e.colors)==null?void 0:f.config)){const T=Bo(k);n({colors:{config:k,theme:T}}),Nl(r,T)}const C=t._debug??!1,R=gl({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:za(R.tree,{children:(g=(m=e.treeBasedControls)==null?void 0:m.controls)==null?void 0:g.children,controls:t.globalValues})}}));const A=Or(e.currentRoute.paths),oe=(A?xl({flattenedNodes:R.flattenedNodes,searchQuery:A}):void 0)??_u(R.flattenedNodes,e.currentRoute.paths,c);l((b=oe[0])==null?void 0:b.entry.title);const F=($=e.treeBasedControls)==null?void 0:$.controls;return F?(t._debug&&console.info({currentControls:F}),h`
                <div
                    class="root"
                    ${L(Xt,async T=>{const z=T.detail;if(!s(z))return;if(n({loading:!0}),c(z),!(r.shadowRoot.querySelector(ue.tagName)instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);Uo(r,A,e.currentRoute)})}
                    ${L(mt.events.controlValueChange,T=>{if(!e.treeBasedControls)return;const z=vl(F,T.detail.fullUrlBreadcrumbs,T.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:z}})})}
                >
                    <${ue.assign({flattenedNodes:R.flattenedNodes,router:e.router,selectedPath:A?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ae.NavHeader}
                            slot=${ae.NavHeader}
                        ></slot>
                    </${ue}>
                    <${Ve.assign({controls:F,currentNodes:oe,currentRoute:e.currentRoute,debug:C,originalTree:R.tree,router:e.router,showLoading:e.loading})}
                        ${L(Ve.events.loadingRender,async T=>{await Ar();const z=r.shadowRoot.querySelector(Ve.tagName);z?z.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ve.tagName}' for scrolling.`),await Ar(),n({loading:!T.detail})})}
                    >
                        <slot
                            name=${ae.Footer}
                            slot=${ae.Footer}
                        ></slot>
                    </${Ve}>
                </div>
            `):h`
                    <${we.assign({message:"Failed to generate page controls."})}></${we}>
                `}catch(k){return console.error(k),h`
                <p class="error">${pt(k)}</p>
            `}}});async function Uo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ue.tagName);if(!(n instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);await Su(n)}const He=xe({title:"Elements",parent:void 0}),Lu=xe({parent:He,title:H.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:S.Color,initValue:H.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:S.Color,initValue:H.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:S.Color,initValue:H.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:S.Color,initValue:H.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??p``;e({title:r,styles:a,renderCallback({controls:i}){const s=p`
                        ${H.cssVars["vira-button-primary-color"].name}: ${N(i["Primary color"]||"inherit")};
                        ${H.cssVars["vira-button-secondary-color"].name}: ${N(i["Secondary color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-hover-color"].name}: ${N(i["Hover color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-active-color"].name}: ${N(i["Active color"]||"inherit")};
                    `;return h`
                        <${H.assign({text:"hello",...o})}
                            style=${s}
                        ></${H}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:yn}}),t({title:"outline",inputs:{buttonStyle:xi.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:p`
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
                `}})}}),Au=xe({title:Se.tagName,parent:He,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:p`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>h`
                            <${Se.assign({expanded:!!r.expandedStates[o]})}
                                ${L(Se.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Xr.Header}
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
                            </${Se}>
                        `)}}),e({title:"wider examples",styles:p`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>h`
                            <${Se.assign({expanded:!!r.expandedStates[o]})}
                                ${L(Se.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Xr.Header}
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
                            </${Se}>
                        `)}})}}),Ru=xe({title:w.tagName,parent:He,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return h`
                    <${w.assign({icon:Le})}></${w}>
                `}}),e({title:"using createColoredIcon",renderCallback(){return h`
                    <${w.assign({icon:yu(Le,{"vira-icon-stroke-color":"red"})})}></${w}>
                `}})}}),Pu=xe({title:Oe.tagName,parent:He,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:p`
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
                        <${w.assign({icon:ht,fitContainer:!0})}
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
                        <${w.assign({icon:Jt,fitContainer:!0})}
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
                        <${w.assign({icon:ht,fitContainer:!0})}
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
                        <${w.assign({icon:Jt,fitContainer:!0})}
                            style=${p`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${w}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:p`
                    ${Oe} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||p``}
                    }

                    ${r.allowReload?p`
                              ${Oe} {
                                  cursor: pointer;
                              }

                              ${Oe}:hover {
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
                        <${Oe.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${L("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${Zo()}`})})}
                        >
                            ${r.loadingSlot?h`
                                      <div
                                          class="slot-wrapper"
                                          slot=${Zr.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?h`
                                      <div class="slot-wrapper" slot=${Zr.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${Oe}>
                    `}})})}}),Bu=xe({title:_.tagName,parent:He,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:S.Color,initValue:_.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:S.Color,initValue:_.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:S.Color,initValue:_.cssVars["vira-input-border-color"].default},"Focus color":{controlType:S.Color,initValue:_.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:S.Color,initValue:_.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:p`
                    ${r||p``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:i,controls:s}){const l={[String(_.cssVars["vira-input-text-color"].name)]:s["Text color"],[String(_.cssVars["vira-input-placeholder-color"].name)]:s["Placeholder color"],[String(_.cssVars["vira-input-border-color"].name)]:s["Border color"],[String(_.cssVars["vira-input-focus-border-color"].name)]:s["Focus color"],[String(_.cssVars["vira-input-text-selection-color"].name)]:s["Selection color"]},c=fe(l,(d,f)=>f||"inherit"),u=Object.entries(c).map(([d,f])=>[d,f].join(": ")+";").join(`
`);return h`
                        <${_.assign({...o,value:a.value})}
                            style=${u}
                            ${L(_.events.valueChange,d=>{i({value:d.detail})})}
                        ></${_}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:Le}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:p`
                ${_} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:Le}}),t({title:"taller height",styles:p`
                ${_} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:Le}}),t({title:"shorter height",styles:p`
                ${_} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Le}}),t({title:"max width",styles:p`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:p`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Hu=xe({title:Qe.tagName,parent:He,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:S.Color,initValue:""},"Hover color":{controlType:S.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=p`
                        ${Qe.cssVars["vira-link-hover-color"].name}: ${N(o["Hover color"]||"inherit")};
                        color: ${N(o["CSS Color"]||"inherit")};
                    `;return h`
                        <${Qe.assign(n)}
                            style=${a}
                            ${L(Qe.events.routeChange,i=>{console.info(i)})}
                        >
                            My Link
                        </${Qe}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),Nu=xe({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:S.Color,initValue:""},"Fill Color":{controlType:S.Color,initValue:""},"Stroke Width":{controlType:S.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(xu).forEach(t=>{e({title:t.name,styles:p`
                    :host(:hover) ${w} {
                        background-color: #f2f2f2;
                    }

                    ${w} {
                        padding: 8px;
                        border-radius: ${ft["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=p`
                        ${y["vira-icon-fill-color"].name}: ${N(r["Fill Color"]||"inherit")};
                        ${y["vira-icon-stroke-color"].name}: ${N(r["Stroke Color"]||"inherit")};
                        ${y["vira-icon-stroke-width"].name}: ${N(Jo(r["Stroke Width"])||"inherit")};
                    `;return h`
                        <${w.assign({icon:t})} style=${n}></${w}>
                    `}})})}}),Iu=[He,Nu,Lu,Au,Ru,Pu,Bu,Hu];tr({tagName:"vira-book-app",styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Tr} {
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
            <${Tr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Iu,themeColor:"#33ccff"})}>
                <h1 slot=${ae.NavHeader}>Vira</h1>
            </${Tr}>
        `}});
