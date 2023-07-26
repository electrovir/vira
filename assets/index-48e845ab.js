var Vi=Object.defineProperty;var Hi=(e,t,r)=>t in e?Vi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ur=(e,t,r)=>(Hi(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Di(e,t){return e.includes(t)}function Kt(e){return!!e}function ji(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Fi={capitalizeFirstLetter:!1};function Ui(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Yi(e,t){return t.capitalizeFirstLetter?Ui(e):e}function Zi(e,t=Fi){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Yi(n,t)}function ea(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Qt(r).trim()).join(`
`))}function Qt(e){return e?e instanceof Error?e.message:ne(e,"message")?String(e.message):String(e):""}function ta(e){return e instanceof Error?e:new Error(Qt(e))}function pe(e){return!!e&&typeof e=="object"}function Wi(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const qi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ne(e,t){return e?qi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ra(e,t){return e&&t.every(r=>ne(e,r))}function Q(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ar(e){return Array.isArray(e)?"array":typeof e}function re(e,t){return Ar(e)===t}function Pn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Rn="Failed to compare objects using JSON.stringify";function Nn(e,t,r){return Pn({source:e,errorHandler(n){if(r)return"";throw n}})===Pn({source:t,errorHandler(n){if(r)return"";throw n}})}function Se(e,t,r={}){try{return e===t?!0:pe(e)&&pe(t)?Nn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Se(e[o],t[o])):!1:Nn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=ta(n);throw o.message.startsWith(Rn)||(o.message=`${Rn}: ${o.message}`),o}}function Gi(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Xi(e){return Q(e).filter(t=>isNaN(Number(t)))}function Ji(e){return Xi(e).map(r=>e[r])}function Ki(e,t){return Ji(t).includes(e)}function Qi(e,t){return Q(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function es(e,t){return Qi(e,r=>!t.includes(r))}function Ce(e,t){let r=!1;const n=Q(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Q(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function ts(e){const t=rn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function rn(){let e,t,r=!1;const n=new Promise((o,a)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,a(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${rn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ln(e,t){try{return na(e,t),!0}catch{return!1}}function na(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function rs(e,t){return ne(e,"entryType")&&e.entryType===t}var R;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(R||(R={}));function Me(e,t){return e.controlType===t}var k;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(k||(k={}));const oa=Symbol("any-type"),ns={[k.Checkbox]:!1,[k.Color]:"",[k.Dropdown]:"",[k.Hidden]:oa,[k.Number]:0,[k.Text]:""};function os(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=ns[o.controlType];a!==oa&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function nn(e,t){const r=Nt(e.title);return e.parent?[...nn(e.parent,!1),Nt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Nt(e){return ji(e).toLowerCase().replaceAll(/\s/g,"-")}function as({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Te(e){const t={...e,entryType:R.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:R.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Kt)};r.add(n.title),t.elementExamples[Nt(o.title)]=o}}),t}var de;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(de||(de={}));async function Br(e=1){const t=rn();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const is=globalThis.crypto;function ss(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return is.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function ls(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{na(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Ze(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ft=e=>(...t)=>({_$litDirective$:e,values:t});let Ie=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr;const Lt=window,ze=Lt.trustedTypes,zn=ze?ze.createPolicy("lit-html",{createHTML:e=>e}):void 0,zt="$lit$",ue=`lit$${(Math.random()+"").slice(9)}$`,on="?"+ue,cs=`<${on}>`,Ee=document,ot=()=>Ee.createComment(""),at=e=>e===null||typeof e!="object"&&typeof e!="function",aa=Array.isArray,ia=e=>aa(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",fr=`[ 	
\f\r]`,We=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,On=/-->/g,In=/>/g,ye=RegExp(`>|${fr}(?:([^\\s"'>=/]+)(${fr}*=${fr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vn=/'/g,Hn=/"/g,sa=/^(?:script|style|textarea|title)$/i,us=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ds=us(1),ee=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Dn=new WeakMap,ke=Ee.createTreeWalker(Ee,129,null,!1);function la(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zn!==void 0?zn.createHTML(t):t}const ca=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",i=We;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,f=0;for(;f<l.length&&(i.lastIndex=f,u=i.exec(l),u!==null);)f=i.lastIndex,i===We?u[1]==="!--"?i=On:u[1]!==void 0?i=In:u[2]!==void 0?(sa.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=ye):u[3]!==void 0&&(i=ye):i===ye?u[0]===">"?(i=o??We,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?ye:u[3]==='"'?Hn:Vn):i===Hn||i===Vn?i=ye:i===On||i===In?i=We:(i=ye,o=void 0);const p=i===ye&&e[s+1].startsWith("/>")?" ":"";a+=i===We?l+cs:d>=0?(n.push(c),l.slice(0,d)+zt+l.slice(d)+ue+p):l+ue+(d===-2?(n.push(void 0),s):p)}return[la(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class it{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,i=0;const s=t.length-1,l=this.parts,[c,u]=ca(t,r);if(this.el=it.createElement(c,n),ke.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=ke.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(zt)||f.startsWith(ue)){const p=u[i++];if(d.push(f),p!==void 0){const m=o.getAttribute(p.toLowerCase()+zt).split(ue),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:a,name:b[2],strings:m,ctor:b[1]==="."?da:b[1]==="?"?fa:b[1]==="@"?ha:ht})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(sa.test(o.tagName)){const d=o.textContent.split(ue),f=d.length-1;if(f>0){o.textContent=ze?ze.emptyScript:"";for(let p=0;p<f;p++)o.append(d[p],ot()),ke.nextNode(),l.push({type:2,index:++a});o.append(d[f],ot())}}}else if(o.nodeType===8)if(o.data===on)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(ue,d+1))!==-1;)l.push({type:7,index:a}),d+=ue.length-1}a++}}static createElement(t,r){const n=Ee.createElement("template");return n.innerHTML=t,n}}function _e(e,t,r=e,n){var o,a,i,s;if(t===ee)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=at(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(s=r)._$Co)!==null&&i!==void 0?i:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=_e(e,l._$AS(e,t.values),l,n)),t}class ua{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Ee).importNode(n,!0);ke.currentNode=a;let i=ke.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new Ve(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new pa(i,this,t)),this._$AV.push(u),c=o[++l]}s!==(c==null?void 0:c.index)&&(i=ke.nextNode(),s++)}return ke.currentNode=Ee,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Ve{constructor(t,r,n,o){var a;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=_e(this,t,r),at(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==ee&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ia(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&at(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ee.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=it.createElement(la(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const i=new ua(a,this),s=i.u(this.options);i.v(n),this.$(s),this._$AH=i}}_$AC(t){let r=Dn.get(t.strings);return r===void 0&&Dn.set(t.strings,r=new it(t)),r}T(t){aa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Ve(this.k(ot()),this.k(ot()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ht{constructor(t,r,n,o,a){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let i=!1;if(a===void 0)t=_e(this,t,r,0),i=!at(t)||t!==this._$AH&&t!==ee,i&&(this._$AH=t);else{const s=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=_e(this,s[n+l],r,l),c===ee&&(c=this._$AH[l]),i||(i=!at(c)||c!==this._$AH[l]),c===A?t=A:t!==A&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class da extends ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const fs=ze?ze.emptyScript:"";class fa extends ht{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,fs):this.element.removeAttribute(this.name)}}class ha extends ht{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=_e(this,t,r,0))!==null&&n!==void 0?n:A)===ee)return;const o=this._$AH,a=t===A&&o!==A||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==A&&(o===A||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class pa{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){_e(this,t)}}const hs={O:zt,P:ue,A:on,C:1,M:ca,L:ua,D:ia,R:_e,I:Ve,V:ht,H:fa,N:ha,U:da,F:pa},jn=Lt.litHtmlPolyfillSupport;jn==null||jn(it,Ve),((dr=Lt.litHtmlVersions)!==null&&dr!==void 0?dr:Lt.litHtmlVersions=[]).push("2.7.5");const ps=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let i=a._$litPart$;if(i===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=i=new Ve(t.insertBefore(ot(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ms}=hs,Fn=()=>document.createComment(""),qe=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=o.insertBefore(Fn(),a),s=o.insertBefore(Fn(),a);r=new ms(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(i!==a||l){let c=r._$AA;for(;c!==i;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},$e=(e,t,r=e)=>(e._$AI(t,r),e),gs={},bs=(e,t=gs)=>e._$AH=t,vs=e=>e._$AH,hr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const an=ft(class extends Ie{constructor(e){var t;if(super(e),e.type!==er.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const i=!!t[a];i===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(i?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return ee}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},ys=ft(class extends Ie{constructor(e){if(super(e),e.type!==er.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let i=0;for(const s of e)o[i]=n?n(s,i):i,a[i]=r(s,i),i++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=vs(e),{values:i,keys:s}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=s,i;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,f=0,p=a.length-1,m=0,b=i.length-1;for(;f<=p&&m<=b;)if(a[f]===null)f++;else if(a[p]===null)p--;else if(l[f]===s[m])c[m]=$e(a[f],i[m]),f++,m++;else if(l[p]===s[b])c[b]=$e(a[p],i[b]),p--,b--;else if(l[f]===s[b])c[b]=$e(a[f],i[b]),qe(e,c[b+1],a[f]),f++,b--;else if(l[p]===s[m])c[m]=$e(a[p],i[m]),qe(e,a[f],a[p]),p--,m++;else if(u===void 0&&(u=Un(s,m,b),d=Un(l,f,p)),u.has(l[f]))if(u.has(l[p])){const v=d.get(s[m]),S=v!==void 0?a[v]:null;if(S===null){const T=qe(e,a[f]);$e(T,i[m]),c[m]=T}else c[m]=$e(S,i[m]),qe(e,a[f],S),a[v]=null;m++}else hr(a[p]),p--;else hr(a[f]),f++;for(;m<=b;){const v=qe(e,c[b+1]);$e(v,i[m]),c[m++]=v}for(;f<=p;){const v=a[f++];v!==null&&hr(v)}return this.ht=s,bs(e,c),ee}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pr=class extends Ie{constructor(t){if(super(t),this.et=A,t.type!==er.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this.ft=void 0,this.et=t;if(t===ee)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Pr.directiveName="unsafeHTML",Pr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yn=class extends Pr{};Yn.directiveName="unsafeSVG",Yn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $s(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=window,sn=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ln=Symbol(),Zn=new WeakMap;let ma=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ln)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(sn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Zn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Zn.set(r,t))}return t}toString(){return this.cssText}};const E=e=>new ma(typeof e=="string"?e:e+"",void 0,ln),Ke=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new ma(r,e,ln)},ws=(e,t)=>{sn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=At.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Wn=sn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return E(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pr;const Ot=window,qn=Ot.trustedTypes,xs=qn?qn.emptyScript:"",Gn=Ot.reactiveElementPolyfillSupport,Rr={toAttribute(e,t){switch(t){case Boolean:e=e?xs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ga=(e,t)=>t!==e&&(t==t||e==e),mr={attribute:!0,type:String,converter:Rr,reflect:!1,hasChanged:ga},Nr="finalized";class Pe extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=mr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||mr}static finalize(){if(this.hasOwnProperty(Nr))return!1;this[Nr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Wn(o))}else t!==void 0&&r.push(Wn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ws(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=mr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Rr).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const i=o.getPropertyOptions(a),s=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:Rr;this._$El=a,this[a]=s.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ga)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Pe[Nr]=!0,Pe.elementProperties=new Map,Pe.elementStyles=[],Pe.shadowRootOptions={mode:"open"},Gn==null||Gn({ReactiveElement:Pe}),((pr=Ot.reactiveElementVersions)!==null&&pr!==void 0?pr:Ot.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr,br;class Qe extends Pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ps(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ee}}Qe.finalized=!0,Qe._$litElement$=!0,(gr=globalThis.litElementHydrateSupport)===null||gr===void 0||gr.call(globalThis,{LitElement:Qe});const Xn=globalThis.litElementPolyfillSupport;Xn==null||Xn({LitElement:Qe});((br=globalThis.litElementVersions)!==null&&br!==void 0?br:globalThis.litElementVersions=[]).push("3.3.2");var ks=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function i(S){if(S!==void 0&&typeof S!="function")throw new TypeError("Function expected");return S}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,p=r.length-1;p>=0;p--){var m={};for(var b in n)m[b]=b==="access"?{}:n[b];for(var b in n.access)m.access[b]=n.access[b];m.addInitializer=function(S){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i(S||null))};var v=(0,r[p])(s==="accessor"?{get:u.get,set:u.set}:u[l],m);if(s==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(d=i(v.get))&&(u.get=d),(d=i(v.set))&&(u.set=d),(d=i(v.init))&&o.unshift(d)}else(d=i(v))&&(s==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Ss=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Cs=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Es(){function e(t,r){return t}return e}let ba=(()=>{let e=[Es()],t,r=[],n;return n=class extends Qe{},Cs(n,"DeclarativeElement"),ks(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Ss(n,r),n})();function Jn(e){return e!==e.toUpperCase()}function _s(e){return e.split("").reduce((r,n,o,a)=>{const i=o>0?a[o-1]:"",s=o<a.length-1?a[o+1]:"",l=Jn(i)||Jn(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Ts=["january","february","march","april","may","june","july","august","september","october","november","december"];Ts.map(e=>e.slice(0,3));function Ms(e){return!!e&&typeof e=="object"}function Kn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function As(e){return Array.isArray(e)?"array":typeof e}function Bs(e,t){return As(e)===t}function Ps(e,t){let r=!1;const n=Kn(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Kn(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function j(e){if(Ms(e))return Ps(e,(r,n)=>{if(!Bs(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(_s(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,i=r.startsWith("--")?E(r):r.startsWith("-")?Ke`-${E(r)}`:Ke`--${E(r)}`;return{name:i,value:Ke`var(${i}, ${E(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${j.name}' function.`)}function Rs({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Ls=(e,t,r)=>{t.constructor.createProperty(r,e)};function va(e){return(t,r)=>r!==void 0?Ls(e,t,r):Ns(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vr;((vr=window.HTMLSlotElement)===null||vr===void 0?void 0:vr.prototype.assignedElements)!=null;const cn=Symbol("key for ignoring inputs not having been set yet"),zs={[cn]:!0,allowPolymorphicState:!1};function ya(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ba?!0:ya(r)}function $a(e,t){const r=e.instanceState;Q(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Q(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Os(e)}function Os(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Qn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Is extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function un(){return e=>{var t;return t=class extends Is{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function oe(){return un()}function Vs(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=un()(r);return t[r]=n,t},{}):{}}const Hs="_elementVirStateSetup";function Ds(e){return pe(e)?Hs in e:!1}function js(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Ar(e)===Ar(t)&&r}const wa=Symbol("and"),xa=Symbol("or"),ka=Symbol("exact"),Sa=Symbol("enum"),dn=Symbol("unknown"),Ca="__vir__shape__definition__key__do__not__use__in__actual__objects";function Ea(e){return ne(e,Ca)}const _a="__vir__shape__specifier__key__do__not__use__in__actual__objects",Fs=[wa,xa,ka,Sa,dn];function Us(){return Ys([],dn)}function tr(e){return pt(e,xa)}function fn(e){return pt(e,wa)}function hn(e){return pt(e,ka)}function pn(e){return pt(e,Sa)}function mn(e){return pt(e,dn)}function pt(e,t){const r=rr(e);return!!r&&r.specifierType===t}function Ys(e,t){return{[_a]:!0,specifierType:t,parts:e}}function Bt(e,t){const r=rr(t);if(r){if(fn(r))return r.parts.every(n=>Bt(e,n));if(tr(r))return r.parts.some(n=>Bt(e,n));if(hn(r))return pe(e)?Bt(e,r.parts[0]):e===r.parts[0];if(pn(r))return Object.values(r.parts[0]).some(n=>n===e);if(mn(r))return!0}return js(e,t)}function rr(e){if(pe(e)&&ne(e,_a)){if(!ne(e,"parts")||!re(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!ne(e,"specifierType")||!Di(Fs,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Lr(e){return zr(e)}function zr(e){const t=rr(e);if(t){if(tr(t)||hn(t))return zr(t.parts[0]);if(fn(t))return t.parts.reduce((r,n)=>Object.assign(r,zr(n)),{});if(pn(t))return Object.values(t.parts[0])[0];if(mn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Ea(e)?Lr(e.shape):e instanceof RegExp||re(e,"array")?e:pe(e)?Ce(e,(r,n)=>Lr(n)):e}function Zs(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Lr(e),[Ca]:!0}}class X extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ws(e,t,r={}){try{return qs(e,t,r),!0}catch{return!1}}function qs(e,t,r={}){xe(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Ta(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function xe(e,t,r,n){if(mn(t))return!0;if(Ea(t))return xe(e,t.shape,r,n);const o=Ta(r);if(rr(e))throw new X(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Bt(e,t))throw new X(`Subject does not match shape definition at key ${o}`);if(re(t,"function"))return re(e,"function");if(pe(e)){const i=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(i).map(c=>[c,!1]));let l=!1;if(tr(t))l=t.parts.some(c=>{try{const u=xe(e,c,r,{...n,ignoreExtraKeys:!1});return Object.assign(s,u),!0}catch(u){if(u instanceof X)return!1;throw u}});else if(fn(t))l=t.parts.every(c=>{try{const u=xe(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof X)return!1;throw u}});else if(hn(t)){const c=xe(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(pn(t))throw new X(`Cannot compare an enum specifier to an object at ${o}`);if(re(t,"array")&&re(i,"array"))l=i.every((c,u)=>{const d=t.some(f=>{try{return xe(c,f,[...r,u],n),!0}catch(p){if(p instanceof X)return!1;throw p}});return s[u]=d,d});else{const c=Gs({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l)throw new X("no error message");return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new X(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Gs({keys:e,options:t,shape:r,subject:n}){const o=Ta(e),a={};if(pe(r)){const i=new Set(Q(n)),s=new Set(Q(r));t.ignoreExtraKeys||i.forEach(l=>{if(!s.has(l))throw new X(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var f;const c=r[l],u=tr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!i.has(l)&&!u&&!d)throw new X(`Subject missing key '${String(l)}' in ${o}`)}),i.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];xe(c,u,[...e,l],t),a[l]=!0})}else throw new X(`shape definition at ${o} was not an object.`);return a}const Xs=Zs({addListener(){return!1},removeListener(){return!1},value:Us()});function yr(e){return Ws(e,Xs,{allowExtraKeys:!0})}function Js(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function eo(e,t){const r=e;function n(i){t?Js(i,e,e.tagName):va()(e,i)}function o(i,s){return n(s),r[s]}return new Proxy({},{get:o,set:(i,s,l)=>{const c=Ds(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(m){i[s]=m,r[s]=m}const f=e.observablePropertyListenerMap[s];if(u!==c&&yr(u)&&(f!=null&&f.length)&&u.removeListener(f),yr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var p=m;e.observablePropertyListenerMap[s]=m,c.addListener(m)}else yr(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,s){if(s in i)return{get value(){return o(i,s)},configurable:!0,enumerable:!0}},has:(i,s)=>Reflect.has(i,s)})}function Ks(e){return e?Ce(e,t=>t):{}}function Qs({hostClassNames:e,cssVars:t}){return{hostClasses:Ce(e,(r,n)=>({name:E(n),selector:E(`:host(.${n})`)})),cssVars:t}}function el({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Q(t).forEach(a=>{const i=t[a],s=r[a];typeof i=="function"&&(i({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function tl(e,t){function r(o){Q(o).forEach(a=>{const i=o[a];e.instanceState[a]=i})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var rl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function nr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...zs,...e.options},n=Vs(e.events),o=Ks(e.hostClasses);e.hostClasses&&Qn(e.tagName,e.hostClasses),e.cssVars&&Qn(e.tagName,e.cssVars);const a=e.cssVars?j(e.cssVars):{},i=typeof e.styles=="function"?e.styles(Qs({hostClassNames:o,cssVars:a})):e.styles||Ke``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends ba{createRenderParams(){return tl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){try{ya(this)&&!this.haveInputsBeenSet&&!r[cn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${nr.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return el({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=ta(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){$a(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=eo(this,!1),this.instanceState=eo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};Q(u).forEach(f=>{va()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},rl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=i,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Zi(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Ma(){return e=>nr({...e,options:{[cn]:!1,...e.options}})}function Aa(e,t){return Or(e,t),e.element}function nl(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Or(e,t){const r=nl(e),n=r?`: in ${r}`:"";if(e.type!==er.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Ba(e,t){return t?to(e,t):to(void 0,e)}const to=ft(class extends Ie{constructor(e){super(e),this.element=Aa(e,"assign")}render(e,t){return $a(this.element,t),ee}});function M(e,t){return ol(e,t)}const ol=ft(class extends Ie{constructor(e){super(e),this.element=Aa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ee}}),$r="onResize",or=ft(class extends Ie{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Or(e,$r)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${$r} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Or(e,$r),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function ae(e,t,r){return $s(e,()=>t,()=>r)}function gn(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Ma()(r(n))),defineElementNoInputs:n=>(t(n),nr(r(n)))}}function al(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const a=e.map(s=>[s]);return a.length||(a[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(a[s]=[])}),t.forEach(s=>{const l=a[s.index];l&&l.splice(0,0,...s.values)}),a.flat()}function Ir(e){return ne(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function bn(e){return ne(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Pa(e){return e.map(t=>Ir(t)?t.definition:t).filter(t=>bn(t))}const Ra=new WeakMap;function il(e,t){var o;const r=Pa(t);return(o=Na(Ra,[e,...r]).value)==null?void 0:o.template}function sl(e,t,r){const n=Pa(t);return za(Ra,[e,...n],r)}function Na(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=La(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Na(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function La(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function za(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:i}=La(e,t,n);if(!a)return{result:!1,reason:i};const s=o??{nested:void 0,template:void 0};if(o||e.set(a,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),za(l,t,r,n+1)}const ll=new WeakMap;function Oa(e,t,r){const n=il(e,t),o=n??r();if(!n){const s=sl(e,t,o);if(s.result)ll.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=o.valuesTransform(t),i=al(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:i}}function Ia(e,t,r,n){const o=[],a=[],i=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],p=u-1,m=t[p];n&&n(c);let b,v=[];if(typeof f=="string"&&(b=r(f,c,m),b)){o[d]=f+b.replacement,i.push(p);const T=b.getExtraValues;v=T?T(m):[],v.length&&T?(o[d]+=" ",v.forEach((P,_)=>{_&&o.push(" ")}),s.push(P=>{const _=P[p],C=T(_);return{index:p,values:C}}),o.push(c)):o[d]+=c}b||o.push(c);const S=e.raw[u];b?(a[d]=a[d]+b.replacement+S,v.length&&v.forEach(()=>{a.push("")})):a.push(S)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:i,valueInsertions:u}}}}function cl(...[e,t,r]){if(bn(r))return{replacement:r.tagName,getExtraValues:void 0}}function ul(e,t){return Ia(e,t,cl)}function g(e,...t){const r=Oa(e,t,()=>ul(e,t));return Ke(r.strings,...r.values)}function dl(...[e,t,r]){const n=Ir(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=o||a,s=bn(n);if(i&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=Ir(c)?c.inputs:void 0;return[o&&u?Ba(u):void 0].filter(Kt)}}}function fl(e){}function hl(e){return Ia(e.strings,e.values,dl,fl)}function h(e,...t){const r=ds(e,...t),n=Oa(e,t,()=>hl(r));return{...r,strings:n.strings,values:n.values}}const pl={[R.ElementExample]:()=>[],[R.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...os(e.controls,e.title)].filter(Kt),[R.Root]:()=>[]},It="_isBookTreeNode",Va=new Map;function ml(e){return Va.get(e)}function gl(e,t){Gi(Va,e,()=>t)}function Le(e,t){return!!(Ha(e)&&e.entry.entryType===t)}function Ha(e){return!!(ra(e,[It,"entry"])&&e[It])}function bl(){return{[It]:!0,entry:{entryType:R.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function vl({entries:e,debug:t}){const r=ml(e);if(r)return r;const n=bl();e.forEach(i=>vn({tree:n,newEntry:i,debug:t,manuallyAdded:!0}));const o=Da(n),a={tree:n,flattenedNodes:o};return gl(e,a),t&&console.info("element-book tree:",n),a}function yl(e,t,r){if(!t.parent)return e;const n=Vr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),vn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Vr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${nn(t,!1)}`);return o}function vn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=pl[t.entryType](t);t.errors.push(...o);const a=yl(e,t,r),i=Nt(t.title),s=a.children[i];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${i}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[It]:!0,children:{},urlBreadcrumb:i,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,i],entry:t,manuallyAdded:n};a.children[i]=l,rs(t,R.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>vn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Vr(e,t){const r=Ha(e)?e.fullUrlBreadcrumbs.slice(0,-1):nn(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Da(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Da(o));return[e,...r].flat()}function yn(e,t){return $n(e,["",...t],void 0)}function $n(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],i=a&&$n(a,n,r);return{...e.controls,...i}}function $l(e,t,r){const n=Wi(e);return $n(n,["",...t],r),n}function ja(e,t){const r=(t==null?void 0:t.controls)||(Le(e,R.Page)?Ce(e.entry.controls,(o,a)=>a.initValue):{});return{children:Ce(e.children,(o,a)=>{var i;return ja(a,(i=t==null?void 0:t.children)==null?void 0:i[a.urlBreadcrumb])}),controls:r}}function wl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let i=0,s=0;i<n;i++){const l=a.charCodeAt(i);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const xl=ss(32);function Pt(e){return e.join(xl)}function Fa(e){if(!e.length)return[];const t=Pt(e),r=Fa(e.slice(0,-1));return[t,...r]}const kl=["error","errors"];function Sl(e){return kl.includes(e)}function Cl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(i=>(n(i),Pt(i.fullUrlBreadcrumbs))).forEach(i=>r[i]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&Sl(t),i=Pt(o.fullUrlBreadcrumbs);if(wl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[i]){const l=Fa(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[i]=!1}),e.filter(o=>{const a=Pt(o.fullUrlBreadcrumbs),i=r[a];if(!re(i,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return i})}var O;(function(e){e.Search="search",e.Book="book"})(O||(O={}));function Hr(e){return e[0]===O.Book?"":e[1]?decodeURIComponent(e[1]):""}const Oe={hash:void 0,paths:[O.Book],search:void 0},El=0;function wn(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==El)}class ar extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class ro extends ar{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const st="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const _l=globalThis.history.pushState;function no(...e){const t=_l.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(st)),t}const Tl=globalThis.history.replaceState;function oo(...e){const t=Tl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(st)),t}function Ml(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===no)throw new ro("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===oo)throw new ro("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=no,globalThis.history.replaceState=oo,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(st))})}}function Al(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Bl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Pl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),a=globalThis.location.search?Al(new URLSearchParams(globalThis.location.search)):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:a,hash:i}}function Ua(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Ya({routeBase:e,windowPath:t}){if(!e)return"";const r=Ua(e);if(Za({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Ya({routeBase:n,windowPath:t}):""}function Za({routeBase:e,windowPath:t}){const r=Ua(e);return r?t.startsWith(`/${r}`):!1}class Rl extends ar{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Wa(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const ao=6;function io(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>ao)throw new Rl(`Route sanitization depth has exceed the max of ${ao} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Wa(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class wr extends ar{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Nl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new wr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new wr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new wr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Ll(e,t,r=!1){const n=qa(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function qa(e,t){var l;const r=Za({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Bl(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",i=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(Kt).join("/")}${o}${i}`}function zl(e={}){Nl(e),Ml();const t=e.routeBase?Ya({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>io(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const i={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(i):i},setRoutes(a,i=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!s&&Wa(l,u)))return Ll(u,t,i)},createRoutesUrl(a){return qa(a,t)},getCurrentRawRoutes(){return Pl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,i){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new ar(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(i),r||(globalThis.addEventListener(st,n),r=!0),a&&io(o,i),i},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const i=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(st,n),r=!1),i},sanitizationDepth:0};return o}function Ol(e){return zl({routeBase:e,routeSanitizer(t){return{paths:Il(t.paths),hash:void 0,search:void 0}}})}function Il(e){const t=e[0];if(Ki(t,O)){if(t===O.Book)return[O.Book,...e.slice(1)];if(t===O.Search)return e[1]?[t,e[1]]:[O.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Oe.paths}const w=j({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Vl={nav:{hover:{background:w["element-book-nav-hover-background-color"],foreground:w["element-book-nav-hover-foreground-color"]},active:{background:w["element-book-nav-active-background-color"],foreground:w["element-book-nav-active-foreground-color"]},selected:{background:w["element-book-nav-selected-background-color"],foreground:w["element-book-nav-selected-foreground-color"]}},accent:{icon:w["element-book-accent-icon-color"]},page:{background:w["element-book-page-background-color"],backgroundFaint1:w["element-book-page-background-faint-level-1-color"],backgroundFaint2:w["element-book-page-background-faint-level-2-color"],foreground:w["element-book-page-foreground-color"],foregroundFaint1:w["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:w["element-book-page-foreground-faint-level-2-color"]}};function Hl(e,t){Ga(e,t,Vl)}function Dr(e){return ne(e,"_$cssResult$")}function so(e){return ra(e,["name","value","default"])&&re(e.default,"string")&&Dr(e.name)&&Dr(e.value)}function Ga(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Dr(o)){if(!so(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Rs({forCssVar:a,onElement:e,toValue:String(o)})}else{if(so(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ga(e,o,a)}})}function B(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let n=t[0].length,o=t[0].map((i,s)=>t.map(l=>l[s])),a=e.map(i=>o.map(s=>{let l=0;if(!Array.isArray(i)){for(let c of s)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(s[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(i=>i[0]):a}function mt(e){return he(e)==="string"}function he(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Vt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Xa(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),a.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Ja(e){return e[e.length-1]}function Ht(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ka(e,t,r){return(r-e)/(t-e)}function xn(e,t,r){return Ht(t[0],t[1],Ka(e[0],e[1],r))}function Qa(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Dl=Object.freeze({__proto__:null,interpolate:Ht,interpolateInv:Ka,isString:mt,last:Ja,mapRange:xn,multiplyMatrices:B,parseCoordGrammar:Qa,parseFunction:Xa,toPrecision:Vt,type:he});class jl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const me=new jl;var ie={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const J={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function jr(e){return Array.isArray(e)?e:J[e]}function Dt(e,t,r,n={}){if(e=jr(e),t=jr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(me.run("chromatic-adaptation-start",o),o.M||(o.W1===J.D65&&o.W2===J.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===J.D50&&o.W2===J.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),me.run("chromatic-adaptation-end",o),o.M)return B(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Fl=75e-6,H=class H{constructor(t){var o,a,i;this.id=t.id,this.name=t.name,this.base=t.base?H.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=jr(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Ul(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),me.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Fl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let i=n[a];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[s,l]=i.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=lo(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=lo(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=H.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,a,i;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)a=n[s],i=s;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>i;s--)r=n[s].toBase(r);for(let s=i+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=H.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(H.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof H)return t;if(he(t)==="string"){let o=H.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return H.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=he(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=H.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=he(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=H.get(o);let i=a.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===i||((l=u.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};ur(H,"registry",{}),ur(H,"DEFAULT_FORMAT",{type:"functions",name:"color"});let y=H;function Ul(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function lo(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Qa(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let i=e.coordGrammar[a][0],s=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,i)=>{let{fromRange:s,toRange:l,suffix:c}=r[i];return s&&l&&(a=xn(s,l,a)),a=Vt(a,o),c&&(a+=c),a})}return e}var Z=new y({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class I extends y{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Z),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=B(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Dt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Dt(this.base.white,this.white,r),B(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function ei(e,{meta:t}={}){var n,o,a,i,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(me.run("parse-start",r),r.color)return r.color;if(r.parsed=Xa(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of y.all){let p=f.getFormat("color");if(p&&(c===p.id||(o=p.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((b,v)=>r.parsed.args[v]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in y.registry){let f=(s=(i=(a=y.registry[c].formats)==null?void 0:a.functions)==null?void 0:i.color)==null?void 0:s.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of y.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Ja(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,p;return u.coordGrammar&&(p=Object.entries(c.coords).map(([m,b],v)=>{var z;let S=u.coordGrammar[v],T=(z=f[v])==null?void 0:z.type,P=S.find(se=>se==T);if(!P){let se=b.name||m;throw new TypeError(`${T} not allowed for ${se} in ${l}()`)}let _=P.range;T==="<percentage>"&&(_||(_=[0,1]));let C=b.range||b.refRange;return _&&C&&(f[v]=xn(_,C,f[v])),P})),t&&Object.assign(t,{formatId:u.name,types:p}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of y.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function x(e){if(!e)throw new TypeError("Empty color reference");mt(e)&&(e=ei(e));let t=e.space||e.spaceId;return t instanceof y||(e.space=y.get(t)),e.alpha===void 0&&(e.alpha=1),e}function gt(e,t){return t=y.get(t),t.from(e)}function W(e,t){let{space:r,index:n}=y.resolveCoord(t,e.space);return gt(e,r)[n]}function ti(e,t,r){return t=y.get(t),e.coords=t.to(e.space,r),e}function ge(e,t,r){if(e=x(e),arguments.length===2&&he(arguments[1])==="object"){let n=arguments[1];for(let o in n)ge(e,o,n[o])}else{typeof r=="function"&&(r=r(W(e,t)));let{space:n,index:o}=y.resolveCoord(t,e.space),a=gt(e,n);a[o]=r,ti(e,n,a)}return e}var kn=new y({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Z,fromBase:e=>Dt(Z.white,"D50",e),toBase:e=>Dt("D50",Z.white,e),formats:{color:{}}});const Yl=216/24389,co=24/116,wt=24389/27;let xr=J.D50;var D=new y({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xr,base:kn,fromBase(e){let r=e.map((n,o)=>n/xr[o]).map(n=>n>Yl?Math.cbrt(n):(wt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>co?Math.pow(t[0],3):(116*t[0]-16)/wt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wt,t[2]>co?Math.pow(t[2],3):(116*t[2]-16)/wt].map((n,o)=>n*xr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ir(e){return(e%360+360)%360}function Zl(e,t){if(e==="raw")return t;let[r,n]=t.map(ir),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var lt=new y({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:D,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ir(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const uo=25**7,jt=Math.PI,fo=180/jt,Ae=jt/180;function Fr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,i,s]=D.from(e),l=lt.from(D,[a,i,s])[1],[c,u,d]=D.from(t),f=lt.from(D,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,b=.5*(1-Math.sqrt(m/(m+uo))),v=(1+b)*i,S=(1+b)*u,T=Math.sqrt(v**2+s**2),P=Math.sqrt(S**2+d**2),_=v===0&&s===0?0:Math.atan2(s,v),C=S===0&&d===0?0:Math.atan2(d,S);_<0&&(_+=2*jt),C<0&&(C+=2*jt),_*=fo,C*=fo;let z=c-a,se=P-T,te=C-_,Fe=_+C,En=Math.abs(te),Ue;T*P===0?Ue=0:En<=180?Ue=te:te>180?Ue=te-360:te<-180?Ue=te+360:console.log("the unthinkable has happened");let _n=2*Math.sqrt(P*T)*Math.sin(Ue*Ae/2),Ni=(a+c)/2,cr=(T+P)/2,Tn=Math.pow(cr,7),le;T*P===0?le=Fe:En<=180?le=Fe/2:Fe<360?le=(Fe+360)/2:le=(Fe-360)/2;let Mn=(Ni-50)**2,Li=1+.015*Mn/Math.sqrt(20+Mn),An=1+.045*cr,Ye=1;Ye-=.17*Math.cos((le-30)*Ae),Ye+=.24*Math.cos(2*le*Ae),Ye+=.32*Math.cos((3*le+6)*Ae),Ye-=.2*Math.cos((4*le-63)*Ae);let Bn=1+.015*cr*Ye,zi=30*Math.exp(-1*((le-275)/25)**2),Oi=2*Math.sqrt(Tn/(Tn+uo)),Ii=-1*Math.sin(2*zi*Ae)*Oi,$t=(z/(r*Li))**2;return $t+=(se/(n*An))**2,$t+=(_n/(o*Bn))**2,$t+=Ii*(se/(n*An))*(_n/(o*Bn)),Math.sqrt($t)}const Wl=75e-6;function et(e,t=e.space,{epsilon:r=Wl}={}){e=x(e),t=y.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ct(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function be(e,{method:t=ie.gamut_mapping,space:r=e.space}={}){if(mt(arguments[1])&&(r=arguments[1]),r=y.get(r),et(e,r,{epsilon:0}))return x(e);let n=U(e,r);if(t!=="clip"&&!et(e,r)){let o=be(ct(n),{method:"clip",space:r});if(Fr(e,o)>2){let a=y.resolveCoord(t),i=a.space,s=a.id,l=U(n,i),u=(a.range||a.refRange)[0],d=.01,f=u,p=W(l,s);for(;p-f>d;){let m=ct(l);m=be(m,{space:r,method:"clip"}),Fr(l,m)-2<d?f=W(l,s):p=W(l,s),ge(l,s,(f+p)/2)}n=U(l,r)}else n=o}if(t==="clip"||!et(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,i)=>{let[s,l]=o[i];return s!==void 0&&(a=Math.max(s,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=U(n,e.space)),e.coords=n.coords,e}be.returns="color";function U(e,t,{inGamut:r}={}){e=x(e),t=y.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=be(o)),o}U.returns="color";function Ft(e,{precision:t=ie.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=x(e);let i=r;r=e.space.getFormat(r)??e.space.getFormat("default")??y.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!et(e)&&(s=be(ct(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(p=>Vt(p,t)));let u=[...s];if(c==="color"){let p=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(p)}let d=e.alpha;t!==null&&(d=Vt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const ql=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Gl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var sr=new I({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:ql,fromXYZ_M:Gl,formats:{color:{}}});const xt=1.09929682680944,ho=.018053968510807;var ri=new I({id:"rec2020",name:"REC.2020",base:sr,toBase(e){return e.map(function(t){return t<ho*4.5?t/4.5:Math.pow((t+xt-1)/xt,1/.45)})},fromBase(e){return e.map(function(t){return t>=ho?xt*Math.pow(t,.45)-(xt-1):4.5*t})},formats:{color:{}}});const Xl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Jl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ni=new I({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Xl,fromXYZ_M:Jl});const Kl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ql=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var oi=new I({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Kl,fromXYZ_M:Ql,formats:{color:{}}}),po={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let mo=Array(3).fill("<percentage> | <number>[0, 255]"),go=Array(3).fill("<number>[0, 255]");var ut=new I({id:"srgb",name:"sRGB",base:oi,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:mo},rgb_number:{name:"rgb",commas:!0,coords:go,noAlpha:!0},color:{},rgba:{coords:mo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:go},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=po.black,t.alpha=0):t.coords=po[e],t.coords)return t}}}}),ai=new I({id:"p3",name:"P3",base:ni,fromBase:ut.fromBase,toBase:ut.toBase,formats:{color:{id:"display-p3"}}});ie.display_space=ut;if(typeof CSS<"u"&&CSS.supports)for(let e of[D,ri,ai]){let t=e.getMinCoords(),n=Ft({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ie.display_space=e;break}}function ec(e,{space:t=ie.display_space,...r}={}){let n=Ft(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ie.display_space)n=new String(n),n.color=e;else{let o=U(e,t);n=new String(Ft(o,r)),n.color=o}return n}function ii(e,t,r="lab"){r=y.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,i,s)=>{let l=o[s];return isNaN(i)||isNaN(l)?a:a+(l-i)**2},0))}function tc(e,t){return e=x(e),t=x(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ve(e){return W(e,[Z,"y"])}function si(e,t){ge(e,[Z,"y"],t)}function rc(e){Object.defineProperty(e.prototype,"luminance",{get(){return ve(this)},set(t){si(this,t)}})}var nc=Object.freeze({__proto__:null,getLuminance:ve,register:rc,setLuminance:si});function oc(e,t){e=x(e),t=x(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const ac=.56,ic=.57,sc=.62,lc=.65,bo=.022,cc=1.414,uc=.1,dc=5e-4,fc=1.14,vo=.027,hc=1.14;function yo(e){return e>=bo?e:e+(bo-e)**cc}function Be(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function pc(e,t){t=x(t),e=x(e);let r,n,o,a,i,s;t=U(t,"srgb"),[a,i,s]=t.coords;let l=Be(a)*.2126729+Be(i)*.7151522+Be(s)*.072175;e=U(e,"srgb"),[a,i,s]=e.coords;let c=Be(a)*.2126729+Be(i)*.7151522+Be(s)*.072175,u=yo(l),d=yo(c),f=d>u;return Math.abs(d-u)<dc?n=0:f?(r=d**ac-u**ic,n=r*fc):(r=d**lc-u**sc,n=r*hc),Math.abs(n)<uc?o=0:n>0?o=n-vo:o=n+vo,o*100}function mc(e,t){e=x(e),t=x(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const gc=5e4;function bc(e,t){e=x(e),t=x(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),n===0?gc:(r-n)/n}function vc(e,t){e=x(e),t=x(t);let r=W(e,[D,"l"]),n=W(t,[D,"l"]);return Math.abs(r-n)}const yc=216/24389,$o=24/116,kt=24389/27;let kr=J.D65;var Ur=new y({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:kr,base:Z,fromBase(e){let r=e.map((n,o)=>n/kr[o]).map(n=>n>yc?Math.cbrt(n):(kt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>$o?Math.pow(t[0],3):(116*t[0]-16)/kt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/kt,t[2]>$o?Math.pow(t[2],3):(116*t[2]-16)/kt].map((n,o)=>n*kr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Sr=Math.pow(5,.5)*.5+.5;function $c(e,t){e=x(e),t=x(t);let r=W(e,[Ur,"l"]),n=W(t,[Ur,"l"]),o=Math.abs(Math.pow(r,Sr)-Math.pow(n,Sr)),a=Math.pow(o,1/Sr)*Math.SQRT2-40;return a<7.5?0:a}var Rt=Object.freeze({__proto__:null,contrastAPCA:pc,contrastDeltaPhi:$c,contrastLstar:vc,contrastMichelson:mc,contrastWCAG21:oc,contrastWeber:bc});function wc(e,t,r={}){mt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Rt).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=x(e),t=x(t);for(let a in Rt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Rt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function li(e){let[t,r,n]=gt(e,Z),o=t+15*r+3*n;return[4*t/o,9*r/o]}function ci(e){let[t,r,n]=gt(e,Z),o=t+r+n;return[t/o,r/o]}function xc(e){Object.defineProperty(e.prototype,"uv",{get(){return li(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ci(this)}})}var kc=Object.freeze({__proto__:null,register:xc,uv:li,xy:ci});function Sc(e,t){return ii(e,t,"lab")}const Cc=Math.PI,wo=Cc/180;function Ec(e,t,{l:r=2,c:n=1}={}){let[o,a,i]=D.from(e),[,s,l]=lt.from(D,[o,a,i]),[c,u,d]=D.from(t),f=lt.from(D,[c,u,d])[1];s<0&&(s=0),f<0&&(f=0);let p=o-c,m=s-f,b=a-u,v=i-d,S=b**2+v**2-m**2,T=.511;o>=16&&(T=.040975*o/(1+.01765*o));let P=.0638*s/(1+.0131*s)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*wo)):_=.36+Math.abs(.4*Math.cos((l+35)*wo));let C=Math.pow(s,4),z=Math.sqrt(C/(C+1900)),se=P*(z*_+1-z),te=(p/(r*T))**2;return te+=(m/(n*P))**2,te+=S/se**2,Math.sqrt(te)}const xo=203;var Sn=new y({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Z,fromBase(e){return e.map(t=>Math.max(t*xo,0))},toBase(e){return e.map(t=>Math.max(t/xo,0))}});const St=1.15,Ct=.66,ko=2610/2**14,_c=2**14/2610,So=3424/2**12,Co=2413/2**7,Eo=2392/2**7,Tc=1.7*2523/2**5,_o=2**5/(1.7*2523),Et=-.56,Cr=16295499532821565e-27,Mc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Ac=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Bc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Pc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ui=new y({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Sn,fromBase(e){let[t,r,n]=e,o=St*t-(St-1)*n,a=Ct*r-(Ct-1)*t,s=B(Mc,[o,a,n]).map(function(f){let p=So+Co*(f/1e4)**ko,m=1+Eo*(f/1e4)**ko;return(p/m)**Tc}),[l,c,u]=B(Bc,s);return[(1+Et)*l/(1+Et*l)-Cr,c,u]},toBase(e){let[t,r,n]=e,o=(t+Cr)/(1+Et-Et*(t+Cr)),i=B(Pc,[o,r,n]).map(function(f){let p=So-f**_o,m=Eo*f**_o-Co;return 1e4*(p/m)**_c}),[s,l,c]=B(Ac,i),u=(s+(St-1)*c)/St,d=(l+(Ct-1)*u)/Ct;return[u,d,c]},formats:{color:{}}}),Yr=new y({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ui,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ir(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Rc(e,t){let[r,n,o]=Yr.from(e),[a,i,s]=Yr.from(t),l=r-a,c=n-i;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*i)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const di=3424/4096,fi=2413/128,hi=2392/128,To=2610/16384,Nc=2523/32,Lc=16384/2610,Mo=32/2523,zc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Oc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Ic=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Vc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Zr=new y({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Sn,fromBase(e){let t=B(zc,e);return Hc(t)},toBase(e){let t=Dc(e);return B(Vc,t)},formats:{color:{}}});function Hc(e){let t=e.map(function(r){let n=di+fi*(r/1e4)**To,o=1+hi*(r/1e4)**To;return(n/o)**Nc});return B(Oc,t)}function Dc(e){return B(Ic,e).map(function(n){let o=Math.max(n**Mo-di,0),a=fi-hi*n**Mo;return 1e4*(o/a)**Lc})}function jc(e,t){let[r,n,o]=Zr.from(e),[a,i,s]=Zr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-i)**2+(o-s)**2)}const Fc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Uc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Yc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Zc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Ut=new y({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Z,fromBase(e){let r=B(Fc,e).map(n=>Math.cbrt(n));return B(Yc,r)},toBase(e){let r=B(Zc,e).map(n=>n**3);return B(Uc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Wc(e,t){let[r,n,o]=Ut.from(e),[a,i,s]=Ut.from(t),l=r-a,c=n-i,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var Yt={deltaE76:Sc,deltaECMC:Ec,deltaE2000:Fr,deltaEJz:Rc,deltaEITP:jc,deltaEOK:Wc};function Je(e,t,r={}){mt(r)&&(r={method:r});let{method:n=ie.deltaE,...o}=r;e=x(e),t=x(t);for(let a in Yt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Yt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function qc(e,t=.25){let n=[y.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1+t))}function Gc(e,t=.25){let n=[y.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1-t))}var Xc=Object.freeze({__proto__:null,darken:Gc,lighten:qc});function pi(e,t,r=.5,n={}){[e,t]=[x(e),x(t)],he(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:i}=n;return bt(e,t,{space:o,outputSpace:a,premultiplied:i})(r)}function mi(e,t,r={}){let n;Cn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:i=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[x(e),x(t)],n=bt(e,t,l));let c=Je(e,t),u=o>0?Math.max(i,Math.ceil(c/o)+1):i,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(p,m)=>{let b=m*f;return{p:b,color:n(b)}})}if(o>0){let f=d.reduce((p,m,b)=>{if(b===0)return 0;let v=Je(m.color,d[b-1].color,a);return Math.max(p,v)},0);for(;f>o;){f=0;for(let p=1;p<d.length&&d.length<s;p++){let m=d[p-1],b=d[p],v=(b.p+m.p)/2,S=n(v);f=Math.max(f,Je(S,m.color),Je(S,b.color)),d.splice(p,0,{p:v,color:n(v)}),p++}}}return d=d.map(f=>f.color),d}function bt(e,t,r={}){if(Cn(e)){let[l,c]=[e,t];return bt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:i}=r;e=x(e),t=x(t),e=ct(e),t=ct(t);let s={colors:[e,t],options:r};if(n?n=y.get(n):n=y.registry[ie.interpolationSpace]||e.space,o=o?y.get(o):n,e=U(e,n),t=U(t,n),e=be(e),t=be(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[W(e,c),W(t,c)];[u,d]=Zl(l,[u,d]),ge(e,c,u),ge(t,c,d)}return i&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,p)=>{let m=t.coords[p];return Ht(f,m,l)}),u=Ht(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return i&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=U(d,o)),d},{rangeArgs:s})}function Cn(e){return he(e)==="function"&&!!e.rangeArgs}ie.interpolationSpace="lab";function Jc(e){e.defineFunction("mix",pi,{returns:"color"}),e.defineFunction("range",bt,{returns:"function<color>"}),e.defineFunction("steps",mi,{returns:"array<color>"})}var Kc=Object.freeze({__proto__:null,isRange:Cn,mix:pi,range:bt,register:Jc,steps:mi}),gi=new y({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ut,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[i,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:i=(o-a)/c+(o<a?6:0);break;case o:i=(a-n)/c+2;break;case a:i=(n-o)/c+4}i=i*60}return[i,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let i=(a+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),bi=new y({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:gi,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Qc=new y({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:bi,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let a=1-n,i=a===0?0:1-r/a;return[t,i*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const eu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],tu=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var vi=new I({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:eu,fromXYZ_M:tu}),ru=new I({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:vi,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const nu=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],ou=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var yi=new I({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:kn,toXYZ_M:nu,fromXYZ_M:ou});const au=1/512,iu=16/512;var su=new I({id:"prophoto",name:"ProPhoto",base:yi,toBase(e){return e.map(t=>t<iu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=au?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),lu=new y({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Ut,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ir(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Ao=203,Bo=2610/2**14,cu=2**14/2610,uu=2523/2**5,Po=2**5/2523,Ro=3424/2**12,No=2413/2**7,Lo=2392/2**7;var du=new I({id:"rec2100pq",name:"REC.2100-PQ",base:sr,toBase(e){return e.map(function(t){return(Math.max(t**Po-Ro,0)/(No-Lo*t**Po))**cu*1e4/Ao})},fromBase(e){return e.map(function(t){let r=Math.max(t*Ao/1e4,0),n=Ro+No*r**Bo,o=1+Lo*r**Bo;return(n/o)**uu})},formats:{color:{id:"rec2100-pq"}}});const zo=.17883277,Oo=.28466892,Io=.55991073,Er=3.7743;var fu=new I({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:sr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Er:(Math.exp((t-Io)/zo)+Oo)/12*Er})},fromBase(e){return e.map(function(t){return t/=Er,t<=1/12?Math.sqrt(3*t):zo*Math.log(12*t-Oo)+Io})},formats:{color:{id:"rec2100-hlg"}}});const $i={};me.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=wi(e.W1,e.W2,e.options.method))});me.add("chromatic-adaptation-end",e=>{e.M||(e.M=wi(e.W1,e.W2,e.options.method))});function lr({id:e,toCone_M:t,fromCone_M:r}){$i[e]=arguments[0]}function wi(e,t,r="Bradford"){let n=$i[r],[o,a,i]=B(n.toCone_M,e),[s,l,c]=B(n.toCone_M,t),u=[[s/o,0,0],[0,l/a,0],[0,0,c/i]],d=B(u,n.toCone_M);return B(n.fromCone_M,d)}lr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});lr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});lr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});lr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(J,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});J.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const hu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],pu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var xi=new I({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:J.ACES,toXYZ_M:hu,fromXYZ_M:pu,formats:{color:{}}});const _t=2**-16,_r=-.35828683,Tt=(Math.log2(65504)+9.72)/17.52;var mu=new I({id:"acescc",name:"ACEScc",coords:{r:{range:[_r,Tt],name:"Red"},g:{range:[_r,Tt],name:"Green"},b:{range:[_r,Tt],name:"Blue"}},referred:"scene",base:xi,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-_t)*2:r<Tt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(_t)+9.72)/17.52:t<_t?(Math.log2(_t+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Vo=Object.freeze({__proto__:null,A98RGB:ru,A98RGB_Linear:vi,ACEScc:mu,ACEScg:xi,HSL:gi,HSV:bi,HWB:Qc,ICTCP:Zr,JzCzHz:Yr,Jzazbz:ui,LCH:lt,Lab:D,Lab_D65:Ur,OKLCH:lu,OKLab:Ut,P3:ai,P3_Linear:ni,ProPhoto:su,ProPhoto_Linear:yi,REC_2020:ri,REC_2020_Linear:sr,REC_2100_HLG:fu,REC_2100_PQ:du,XYZ_ABS_D65:Sn,XYZ_D50:kn,XYZ_D65:Z,sRGB:ut,sRGB_Linear:oi});class ${constructor(...t){let r;t.length===1&&(r=x(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:y.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in this.space.coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:s=>this.set(i,s)})}get spaceId(){return this.space.id}clone(){return new $(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=ec(this,...t);return r.color=new $(r.color),r}static get(t,...r){return t instanceof $?t:new $(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,i=function(...s){let l=r(...s);if(a==="color")l=$.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return $.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>$.get(c)));return l};t in $||($[t]=i),o&&($.prototype[t]=function(...s){return i(this,...s)})}static defineFunctions(t){for(let r in t)$.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register($);else for(let r in t)$.defineFunction(r,t[r])}}$.defineFunctions({get:W,getAll:gt,set:ge,setAll:ti,to:U,equals:tc,inGamut:et,toGamut:be,distance:ii,toString:Ft});Object.assign($,{util:Dl,hooks:me,WHITES:J,Space:y,spaces:y.registry,parse:ei,defaults:ie});for(let e of Object.keys(Vo))y.register(Vo[e]);for(let e in y.registry)Wr(e,y.registry[e]);me.add("colorspace-init-end",e=>{var t;Wr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Wr(r,e)})});function Wr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty($.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return y.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,i)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:s}=y.resolveCoord([t,a]);if(s>=0)return o[s]}return Reflect.get(o,a,i)},set:(o,a,i,s)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=y.resolveCoord([t,a]);if(l>=0)return o[l]=i,this.setAll(e,o),!0}return Reflect.set(o,a,i,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}$.extend(Yt);$.extend({deltaE:Je});Object.assign($,{deltaEMethods:Yt});$.extend(Xc);$.extend({contrast:wc});$.extend(kc);$.extend(nc);$.extend(Kc);$.extend(Rt);function ki(e){return Ce(e,(t,r)=>r instanceof $?E(r.toString({format:"hex"})):ki(r))}const gu="dodgerblue";function qr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Tr({background:e,foreground:t}){return{background:e??new $(qr(t)),foreground:t??new $(qr(e))}}var Zt;(function(e){e.Dark="dark",e.Light="light"})(Zt||(Zt={}));function bu(e){return e==="black"?"white":"black"}const vu={black:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")},white:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")}},yu={black:{backgroundFaint1:new $("#666"),backgroundFaint2:new $("#444")},white:{backgroundFaint1:new $("#ccc"),backgroundFaint2:new $("#fafafa")}};function Ho({themeColor:e=gu,themeStyle:t=Zt.Light}={}){const r=new $(e),n=new $(t===Zt.Dark?"black":"white"),o=qr(n),a=new $(o),i={nav:{hover:Tr({background:r.clone().set({"hsl.l":93})}),active:Tr({background:r.clone().set({"hsl.l":90})}),selected:Tr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...yu[bu(o)],foreground:a,...vu[o]}};return ki(i)}const Wt=un()("element-book-change-route"),Do="vira-",{defineElement:vt,defineElementNoInputs:Xu}=gn({assertInputs:e=>{if(!e.tagName.startsWith(Do))throw new Error(`Tag name should start with '${Do}' but got '${e.tagName}'`)}}),Si=g`
    pointer-events: none;
    opacity: 0.3;
`,tt=j({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function $u(e){return`${e}px`}const qt=j({"vira-form-input-border-radius":"8px"}),Gt=j({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${qt["vira-form-input-border-radius"].value} + 4px)`});function Ci({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=E($u(n+r+t));return g`
        ${E(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Gt["vira-focus-outline-color"].value};
            border-radius: ${Gt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Re=g`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Ei=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Gr=j({"vira-icon-color":"currentColor"}),wu=j({"vira-icon-stroke-color":Gr["vira-icon-color"].value,"vira-icon-fill-color":Gr["vira-icon-color"].value}),Y={...Gr,...wu},q=vt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
        :host {
            display: inline-block;
            color: ${Y["vira-icon-color"].value};
            fill: ${Y["vira-icon-fill-color"].value};
            stroke: ${Y["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Xr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Xr||(Xr={}));vt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Xr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ei};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Gt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Si};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Re};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${qt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${tt["vira-interaction-animation-duration"].value},
                background-color
                    ${tt["vira-interaction-animation-duration"].value},
                border-color ${tt["vira-interaction-animation-duration"].value};
        }

        ${Ci({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${q} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${q.assign({icon:e.icon})}></${q}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Jr;(function(e){e.Header="header"})(Jr||(Jr={}));vt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
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
            transition: height ${tt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:oe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?g`
                  height: ${e.contentHeight}px;
              `:g`
                  height: 0;
              `;return h`
            <button
                class="header-wrapper"
                ${M("click",()=>{r(new n.expandChange(!o.expanded))})}
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
        `}});function Kr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Kr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function _i({value:e,allowed:t,blocked:r}){const n=t?Kr({input:e,matcher:t}):!0,o=r?Kr({input:e,matcher:r}):!1;return n&&!o}function jo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(_i({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}vt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:oe(),inputBlocked:oe()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Gt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Si};
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
                ${Ei};
                vertical-align: middle;
                max-height: 100%;
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
                border-radius: ${qt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${tt["vira-interaction-animation-duration"].value};
            }

            label {
                ${Re};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${qt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Ci({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${q} {
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
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=jo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?h`
                  <${q.assign({icon:e.icon})}></${q}>
              `:"",s=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return h`
            <label>
                ${i}
                ${ae(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${or(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${an({"have-value":!!a})}
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${M("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)_i({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:p,blocked:m}=jo({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=p,t(new o.inputBlocked(m))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${ae(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});vt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>g`
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
    `,events:{routeChange:oe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(i){e.route&&wn(i)&&(i.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return h`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return h`
                <a href=${i} rel="noopener noreferrer" ${M("click",n)}>
                    <slot></slot>
                </a>
            `}}});function He({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const xu=He({name:"Element16Icon",svgTemplate:h`
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
    `});He({name:"Element24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const ku=He({name:"Options24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${Y["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `});He({name:"StatusFailure24Icon",svgTemplate:h`
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
                stroke=${Y["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                stroke="none"
                fill=${Y["vira-icon-stroke-color"].value}
                d="m11.33 12-3.7-4.17.74-.66L12 11.25l3.63-4.08.74.66-3.7 4.17 3.7 4.17-.74.66L12 12.75l-3.63 4.08-.74-.66 3.7-4.17Z"
            />
        </svg>
    `});He({name:"StatusInProgress24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${Y["vira-icon-stroke-color"].value}
                fill="none"
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${Y["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${Y["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${Y["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `});He({name:"StatusSuccess24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${Y["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                d="m6.64 13.81.7-.7 2.63 2.62 6.65-7.6.74.66-7.35 8.4-3.37-3.38Z"
                fill=${Y["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `});const Su=g`
    padding: 0;
    margin: 0;
`;g`
    ${Su}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;const{defineElement:G,defineElementNoInputs:Ju}=gn(),F=G()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>g`
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
                ${M("click",a=>{(!e.router||wn(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Wt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Cu(e,t){return e.entry.entryType===R.Root?!1:!!(e.entry.entryType===R.Page||Se(t,e.fullUrlBreadcrumbs.slice(0,-1))||Se(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ce=G()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${w["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${w["element-book-nav-hover-background-color"].value};
            color: ${w["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${w["element-book-nav-active-background-color"].value};
            color: ${w["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${F.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${w["element-book-nav-selected-background-color"].value};
            color: ${w["element-book-nav-selected-foreground-color"].value};
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

        ${q} {
            display: inline-flex;
            color: ${w["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Cu(r,e.selectedPath))return;const n=g`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return h`
                <li style=${n}>
                    <${F.assign({router:e.router,route:{paths:[O.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${an({"title-row":!0,selected:e.selectedPath?Se(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ae(Le(r,R.ElementExample),h`
                                    <${q.assign({icon:xu})}></${q}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${F}>
                </li>
            `});return h`
            <${F.assign({route:Oe,router:e.router})}>
                <slot name=${de.NavHeader}>Book</slot>
            </${F}>
            <ul>
                ${t}
            </ul>
        `}});async function Eu(e){await Br(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await ls(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const fe=G()({tagName:"book-error",styles:g`
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
    `,renderCallback({inputs:e}){return(re(e.message,"array")?e.message:[e.message]).map(r=>h`
                    <p>${r}</p>
                `)}}),Fo=G()({tagName:"book-breadcrumbs",styles:g`
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
                <${F.assign({route:{hash:void 0,search:void 0,paths:[O.Book,...i]},router:e.router})}>
                    ${r}
                </${F}>
                ${s}
            `}):h`
                &nbsp;
            `}}),Uo=G()({tagName:"book-breadcrumbs-bar",styles:g`
        :host {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${w["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${w["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return h`
            ${ae(!!e.currentSearch,h`
                    &nbsp;
                `,h`
                    <${Fo.assign({currentRoute:e.currentRoute,router:e.router})}></${Fo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${M("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await ts(200),n.value===o&&(n.value?t(new Wt({paths:[O.Search,encodeURIComponent(n.value)]})):t(new Wt(Oe)))})}
            />
        `}}),dt=G()({tagName:"book-page-controls",events:{controlValueChange:oe()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
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

        ${q}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===k.Hidden)return"";const i=_u(e.currentValues[n],o,s=>{const l=re(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return h`
                    <div class="control-wrapper">
                        ${ae(a===0,h`
                                <${q.assign({icon:ku})}
                                    class="options-icon"
                                ></${q}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${i}
                        </label>
                    </div>
                `}):""}});function _u(e,t,r){return Me(t,k.Hidden)?"":Me(t,k.Checkbox)?h`
            <input
                type="checkbox"
                .value=${e}
                ${M("input",n=>{const o=Ze(n,HTMLInputElement);r(o.checked)})}
            />
        `:Me(t,k.Color)?h`
            <input
                type="color"
                .value=${e}
                ${M("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Me(t,k.Text)?h`
            <input
                type="text"
                .value=${e}
                ${M("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Me(t,k.Number)?h`
            <input
                type="number"
                .value=${e}
                ${M("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Me(t,k.Dropdown)?h`
            <select
                .value=${e}
                ${M("input",n=>{const o=Ze(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>h`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:h`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Yo=G()({tagName:"book-entry-description",styles:g`
        :host {
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${w["element-book-page-foreground-color"].value};
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
            `)}}),Zo=G()({tagName:"book-page-wrapper",styles:g`
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

        ${F} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?h`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:h`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[O.Book,...e.pageNode.fullUrlBreadcrumbs],n=ea(e.pageNode.entry.errors);return n&&console.error(n),h`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${F.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${F}>
                    ${n?h`
                              <${fe.assign({message:n.message})}></${fe}>
                          `:h`
                              <${Yo.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Yo}>
                              <${dt.assign({config:e.pageNode.entry.controls,currentValues:yn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${dt}>
                          `}
                </div>
            </div>
        `}}),Mt=G()({tagName:"book-element-example-controls",styles:g`
        :host {
            display: flex;
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[O.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return h`
            <${F.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${F}>
        `}}),Wo=Symbol("unset-internal-state"),qo=G()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Wo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw ea(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Wo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return h`
                ${ae(!!t.elementExampleNode.entry.styles,h`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),h`
                <${fe.assign({message:`${t.elementExampleNode.entry.title} failed: ${Qt(n)}`})}></${fe}>
            `}},options:{allowPolymorphicState:!0}}),Go=G()({tagName:"book-element-example-wrapper",styles:g`
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

        ${Mt} {
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Mt} {
            color: ${w["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return h`
            <div class="individual-example-wrapper">
                <${Mt.assign(es(e,["currentPageControls"]))}></${Mt}>
                <${qo.assign(e)}></${qo}>
            </div>
        `}}),Ge=G()({tagName:"book-entry-display",styles:g`
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
    `,renderCallback:({inputs:e})=>{const t=Hr(e.currentRoute.paths),r=Tu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,controls:e.controls,originalTree:e.originalTree});return h`
            <${Uo.assign({currentSearch:t,currentRoute:e.currentRoute,router:e.router})}></${Uo}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${de.Footer}></slot>
        `}});function Ti(e,t,r,n){const o=Vr(r,n),a=[];if(o){const i=Ti(e,t,o,n);i&&a.push(i)}if(Le(r,R.Page)&&!e.includes(r)){const i=yn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:i,breadcrumbs:Ce(i,()=>r.fullUrlBreadcrumbs)})}return a.reduce((i,s)=>({config:{...i.config,...s.config},current:{...i.current,...s.current},breadcrumbs:{...i.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Tu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[h`
                No results
            `];const i=Ln(e,1)?Ti(e,o,e[0],a):void 0,s=i&&Object.values(i.config).length&&Ln(e,1)?h`
                  <${dt.assign({config:i.config,currentValues:i.current,fullUrlBreadcrumbs:i.breadcrumbs})}></${dt}>
              `:"",l=ys(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Le(c,R.Page))return h`
                    <${Zo.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Zo}>
                `;if(Le(c,R.ElementExample)){const d=yn(o,c.fullUrlBreadcrumbs.slice(0,-1));return h`
                    <${Go.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Go}>
                `}else return Le(c,R.Root)?h``:h`
                    <${fe}
                        class="block-entry"
                        ${Ba(fe,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${fe}>
                `});return[s,l]}function Mu(e,t,r){const n=Xo(e,t);if(n.length)return n;r(Oe);const o=Xo(e,Oe.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Xo(e,t){return e.filter(r=>as({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Mr=Ma()({tagName:"element-book-app",events:{pathUpdate:oe()},stateInitStatic:{currentRoute:Oe,router:void 0,loading:!1,colors:{config:void 0,theme:Ho(void 0)},treeBasedControls:void 0},styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${w["element-book-page-background-color"].value};
            color: ${w["element-book-page-foreground-color"].value};
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

        ${Ge} {
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
    `,initCallback({host:e,state:t}){setTimeout(()=>{Jo(e,Hr(t.currentRoute.paths),t.currentRoute)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var s,l,c,u,d,f;t._debug&&console.info("rendering element-book app");try{let p=function(C){e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!Se(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))};var i=p;if(t.elementBookRoutePaths&&!Se(t.elementBookRoutePaths,e.currentRoute.paths)&&p({paths:t.elementBookRoutePaths}),(s=t.internalRouterConfig)!=null&&s.useInternalRouter&&!e.router){const C=Ol(t.internalRouterConfig.basePath);n({router:C}),C.addRouteListener(!0,z=>{n({currentRoute:z})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const m={themeColor:t.themeColor};if(!Se(m,(c=e.colors)==null?void 0:c.config)){const C=Ho(m);n({colors:{config:m,theme:C}}),Hl(r,C)}const b=t._debug??!1,v=vl({entries:t.entries,debug:b});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:ja(v.tree,{children:(d=(u=e.treeBasedControls)==null?void 0:u.controls)==null?void 0:d.children,controls:t.globalValues})}}));const S=Hr(e.currentRoute.paths),P=(S?Cl({flattenedNodes:v.flattenedNodes,searchQuery:S}):void 0)??Mu(v.flattenedNodes,e.currentRoute.paths,p),_=(f=e.treeBasedControls)==null?void 0:f.controls;return _?(t._debug&&console.info({currentControls:_}),h`
                <div
                    class="root"
                    ${M(Wt,async C=>{const z=r.shadowRoot.querySelector(Ge.tagName);for(n({loading:!0});!r.shadowRoot.querySelector(".loading");)await Br();if(await Br(),z?z.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Ge.tagName}' for scrolling.`),p(C.detail),!(r.shadowRoot.querySelector(ce.tagName)instanceof ce))throw new Error(`Failed to find child '${ce.tagName}'`);n({loading:!1}),Jo(r,S,e.currentRoute)})}
                    ${M(dt.events.controlValueChange,C=>{if(!e.treeBasedControls)return;const z=$l(_,C.detail.fullUrlBreadcrumbs,C.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:z}})})}
                >
                    <${ce.assign({flattenedNodes:v.flattenedNodes,router:e.router,selectedPath:S?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${de.NavHeader}
                            slot=${de.NavHeader}
                        ></slot>
                    </${ce}>
                    ${e.loading?h`
                              <div class="loading">Loading...</div>
                          `:h`
                              <${Ge.assign({currentRoute:e.currentRoute,currentNodes:P,router:e.router,debug:b,controls:_,originalTree:v.tree})}>
                                  <slot
                                      name=${de.Footer}
                                      slot=${de.Footer}
                                  ></slot>
                              </${Ge}>
                          `}
                </div>
            `):h`
                    <${fe.assign({message:"Failed to generate page controls."})}></${fe}>
                `}catch(p){return console.error(p),h`
                <p class="error">${Qt(p)}</p>
            `}}});async function Jo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ce.tagName);if(!(n instanceof ce))throw new Error(`Failed to find child '${ce.tagName}'`);await Eu(n)}const De=Te({title:"Elements",parent:void 0}),Mi=g`
    pointer-events: none;
    opacity: 0.3;
`,rt=j({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Au(e){return`${e}px`}const Xt=j({"vira-form-input-border-radius":"8px"}),Jt=j({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${Xt["vira-form-input-border-radius"].value} + 4px)`});function Ai({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=E(Au(n+r+t));return g`
        ${E(e)}::after {
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
    `}const Ne=g`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Bi=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Ko="vira-",{defineElement:yt,defineElementNoInputs:Ku}=gn({assertInputs:e=>{if(!e.tagName.startsWith(Ko))throw new Error(`Tag name should start with '${Ko}' but got '${e.tagName}'`)}}),Qr=j({"vira-icon-color":"currentColor"}),Bu=j({"vira-icon-stroke-color":Qr["vira-icon-color"].value,"vira-icon-fill-color":Qr["vira-icon-color"].value}),L={...Qr,...Bu},K=yt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
        :host {
            display: inline-block;
            color: ${L["vira-icon-color"].value};
            fill: ${L["vira-icon-fill-color"].value};
            stroke: ${L["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Pi=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Pi||{});const N=yt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>g`
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
            ${Mi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Ne};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Xt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${rt["vira-interaction-animation-duration"].value},
                background-color
                    ${rt["vira-interaction-animation-duration"].value},
                border-color ${rt["vira-interaction-animation-duration"].value};
        }

        ${Ai({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${K} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${K.assign({icon:e.icon})}></${K}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),Pu=Te({parent:De,title:N.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:k.Text,initValue:""},"Secondary color":{controlType:k.Text,initValue:""},"Hover color":{controlType:k.Text,initValue:""},"Active color":{controlType:k.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??g``;e({title:r,styles:a,renderCallback({controls:i}){const s=g`
                        ${N.cssVars["vira-button-primary-color"].name}: ${E(i["Primary color"]||"inherit")};
                        ${N.cssVars["vira-button-secondary-color"].name}: ${E(i["Secondary color"]||"inherit")};
                        ${N.cssVars["vira-button-primary-hover-color"].name}: ${E(i["Hover color"]||"inherit")};
                        ${N.cssVars["vira-button-primary-active-color"].name}: ${E(i["Active color"]||"inherit")};
                    `;return h`
                        <${N.assign({text:"hello",...o})}
                            style=${s}
                        ></${N}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:Pi.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:g`
                ${N} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:g`
                ${N} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:g`
                :host {
                    ${N.cssVars["vira-button-primary-color"].name}: pink;
                    ${N.cssVars["vira-button-secondary-color"].name}: purple;
                    ${N.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${N.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return h`
                    <${N.assign({text:"hello"})}></${N}>
                `}})}});var en=(e=>(e.Header="header",e))(en||{});const we=yt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Ne};
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
              `;return h`
            <button
                class="header-wrapper"
                ${M("click",()=>{r(new n.expandChange(!o.expanded))})}
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
        `}}),Ru=Te({title:we.tagName,parent:De,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:g`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>h`
                            <${we.assign({expanded:!!r.expandedStates[o]})}
                                ${M(we.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${en.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${M("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ae(!!r.showMoreStates[o],h`
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
                                ${M(we.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
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
                                    ${M("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ae(!!r.showMoreStates[o],h`
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
                        `)}})}});function je({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Nu=je({name:"Element16Icon",svgTemplate:h`
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
    `}),nt=je({name:"Element24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),Lu=je({name:"Options24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${L["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),zu=je({name:"StatusFailure24Icon",svgTemplate:h`
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
                stroke=${L["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                stroke="none"
                fill=${L["vira-icon-stroke-color"].value}
                d="m11.33 12-3.7-4.17.74-.66L12 11.25l3.63-4.08.74.66-3.7 4.17 3.7 4.17-.74.66L12 12.75l-3.63 4.08-.74-.66 3.7-4.17Z"
            />
        </svg>
    `}),Ou=je({name:"StatusInProgress24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${L["vira-icon-stroke-color"].value}
                fill="none"
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${L["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${L["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${L["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `}),Iu=je({name:"StatusSuccess24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${L["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                d="m6.64 13.81.7-.7 2.63 2.62 6.65-7.6.74.66-7.35 8.4-3.37-3.38Z"
                fill=${L["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `}),Vu={Element16Icon:Nu,Element24Icon:nt,Options24Icon:Lu,StatusFailure24Icon:zu,StatusInProgress24Icon:Ou,StatusSuccess24Icon:Iu},Hu=Te({title:K.tagName,parent:De,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return h`
                    <${K.assign({icon:nt})}></${K}>
                `}})}});function tn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>tn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ri({value:e,allowed:t,blocked:r}){const n=t?tn({input:e,matcher:t}):!0,o=r?tn({input:e,matcher:r}):!1;return n&&!o}function Qo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ri({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const V=yt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:oe(),inputBlocked:oe()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Jt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Mi};
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
                ${Ne};
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

            pre {
                ${Ne};
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
                border-radius: ${Xt["vira-form-input-border-radius"].value};
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
                ${Ne};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Xt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Ai({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${K} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ne};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Qo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?h`
                  <${K.assign({icon:e.icon})}></${K}>
              `:"",s=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return h`
            <label>
                ${i}
                ${ae(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${or(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${an({"have-value":!!a})}
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${M("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)Ri({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:p,blocked:m}=Qo({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=p,t(new o.inputBlocked(m))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${ae(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Du=Te({title:V.tagName,parent:De,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:k.Text,initValue:""},"Placeholder color":{controlType:k.Text,initValue:""},"Border color":{controlType:k.Text,initValue:""},"Focus color":{controlType:k.Text,initValue:""},"Selection color":{controlType:k.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:g`
                    ${r||g``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:i,controls:s}){const l=g`
                        ${V.cssVars["vira-input-text-color"].name}: ${E(s["Text color"]||"inherit")};
                        ${V.cssVars["vira-input-border-color"].name}: ${E(s["Border color"]||"inherit")};
                        ${V.cssVars["vira-input-focus-border-color"].name}: ${E(s["Focus color"]||"inherit")};
                        ${V.cssVars["vira-input-placeholder-color"].name}: ${E(s["Placeholder color"]||"inherit")};
                        ${V.cssVars["vira-input-text-selection-color"].name}: ${E(s["Selection color"]||"inherit")};
                    `;return h`
                        <${V.assign({...o,value:a.value})}
                            style=${l}
                            ${M(V.events.valueChange,c=>{i({value:c.detail})})}
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
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Xe=yt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>g`
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
    `,events:{routeChange:oe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(i){e.route&&wn(i)&&(i.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return h`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return h`
                <a href=${i} rel="noopener noreferrer" ${M("click",n)}>
                    <slot></slot>
                </a>
            `}}}),ju=Te({title:Xe.tagName,parent:De,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:k.Color,initValue:""},"Hover color":{controlType:k.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=g`
                        ${Xe.cssVars["vira-link-hover-color"].name}: ${E(o["Hover color"]||"inherit")};
                        color: ${E(o["CSS Color"]||"inherit")};
                    `;return h`
                        <${Xe.assign(n)}
                            style=${a}
                            ${M(Xe.events.routeChange,i=>{console.info(i)})}
                        >
                            My Link
                        </${Xe}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),Fu=Te({title:"Icons",parent:void 0,controls:{"Icon Color":{controlType:k.Text,initValue:""},"Stroke Color":{controlType:k.Text,initValue:""},"Fill Color":{controlType:k.Text,initValue:""}},elementExamplesCallback({defineExample:e}){Object.values(Vu).forEach(t=>{e({title:t.name,renderCallback({controls:r}){const n=g`
                        ${L["vira-icon-color"].name}: ${E(r["Icon Color"]||"inherit")};
                        ${L["vira-icon-fill-color"].name}: ${E(r["Fill Color"]||"inherit")};
                        ${L["vira-icon-stroke-color"].name}: ${E(r["Stroke Color"]||"inherit")};
                    `;return h`
                        <${K.assign({icon:t})} style=${n}></${K}>
                    `}})})}}),Uu=[De,Fu,Pu,Ru,Hu,Du,ju];nr({tagName:"vira-book-app",styles:g`
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
    `,renderCallback(){return h`
            <${Mr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Uu,themeColor:"#33ccff"})}>
                <h1 slot=${de.NavHeader}>Vira</h1>
            </${Mr}>
        `}});
