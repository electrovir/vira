var Cs=Object.defineProperty;var Es=(e,t,r)=>t in e?Cs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var nr=(e,t,r)=>(Es(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function _s(e,t){return e.includes(t)}function ut(e){return!!e}function Ts(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ms={capitalizeFirstLetter:!1};function As(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Rs(e,t){return t.capitalizeFirstLetter?As(e):e}function Ps(e,t=Ms){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Rs(n,t)}function bn(e){return e!==e.toUpperCase()}function Bs(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=bn(s)||bn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Vo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Wt(r).trim()).join(`
`))}function Wt(e){return e?e instanceof Error?e.message:oe(e,"message")?String(e.message):String(e):""}function zo(e){return e instanceof Error?e:new Error(Wt(e))}function ce(e){return!!e&&typeof e=="object"}function Ns(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Ls=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function oe(e,t){return e?Ls.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Io(e,t){return e&&t.every(r=>oe(e,r))}function ee(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Sr(e){return Array.isArray(e)?"array":typeof e}function K(e,t){return Sr(e)===t}function vn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const yn="Failed to compare objects using JSON.stringify";function wn(e,t,r){return vn({source:e,errorHandler(n){if(r)return"";throw n}})===vn({source:t,errorHandler(n){if(r)return"";throw n}})}function de(e,t,r={}){try{return e===t?!0:ce(e)&&ce(t)?wn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>de(e[o],t[o])):!1:wn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=zo(n);throw o.message.startsWith(yn)||(o.message=`${yn}: ${o.message}`),o}}function Os(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Vs(e){return ee(e).filter(t=>isNaN(Number(t)))}function zs(e){return Vs(e).map(r=>e[r])}function Is(e,t){return zs(t).includes(e)}function Ds(e,t){return ee(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function js(e,t){return Ds(e,r=>!t.includes(r))}function pe(e,t){let r=!1;const n=ee(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(ee(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Hs(e){const t=Yr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Yr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Yr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function $n(e,t){try{return Do(e,t),!0}catch{return!1}}function Do(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Us(e,t){return oe(e,"entryType")&&e.entryType===t}var V;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(V||(V={}));function Pe(e,t){return e.controlType===t}var E;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(E||(E={}));const jo=Symbol("any-type"),Fs={[E.Checkbox]:!1,[E.Color]:"",[E.Dropdown]:"",[E.Hidden]:jo,[E.Number]:0,[E.Text]:""};function Ys(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=Fs[o.controlType];a!==jo&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Wr(e,t){const r=Rt(e.title);return e.parent?[...Wr(e.parent,!1),Rt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Rt(e){return Ts(e).toLowerCase().replaceAll(/\s/g,"-")}function Ws({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Me(e){const t={...e,entryType:V.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:V.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ut)};r.add(n.title),t.elementExamples[Rt(o.title)]=o}}),t}var ne;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ne||(ne={}));async function Cr(e=1){const t=Yr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const qs=globalThis.crypto;function Xs(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return qs.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function Gs(e){return Zs(e,1)}async function Zs(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{Do(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function Ge(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},je=e=>(...t)=>({_$litDirective$:e,values:t});let Ae=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var or;const Pt=window,Ie=Pt.trustedTypes,kn=Ie?Ie.createPolicy("lit-html",{createHTML:e=>e}):void 0,Bt="$lit$",le=`lit$${(Math.random()+"").slice(9)}$`,qr="?"+le,Ks=`<${qr}>`,Ee=document,et=()=>Ee.createComment(""),tt=e=>e===null||typeof e!="object"&&typeof e!="function",Ho=Array.isArray,Uo=e=>Ho(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ar=`[ 	
\f\r]`,We=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xn=/-->/g,Sn=/>/g,we=RegExp(`>|${ar}(?:([^\\s"'>=/]+)(${ar}*=${ar}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cn=/'/g,En=/"/g,Fo=/^(?:script|style|textarea|title)$/i,Js=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Qs=Js(1),te=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),_n=new WeakMap,Ce=Ee.createTreeWalker(Ee,129,null,!1);function Yo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return kn!==void 0?kn.createHTML(t):t}const Wo=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=We;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===We?u[1]==="!--"?s=xn:u[1]!==void 0?s=Sn:u[2]!==void 0?(Fo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=we):u[3]!==void 0&&(s=we):s===we?u[0]===">"?(s=o??We,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?we:u[3]==='"'?En:Cn):s===En||s===Cn?s=we:s===xn||s===Sn?s=We:(s=we,o=void 0);const h=s===we&&e[i+1].startsWith("/>")?" ":"";a+=s===We?l+Ks:d>=0?(n.push(c),l.slice(0,d)+Bt+l.slice(d)+le+h):l+le+(d===-2?(n.push(void 0),i):h)}return[Yo(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class rt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=Wo(t,r);if(this.el=rt.createElement(c,n),Ce.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=Ce.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Bt)||f.startsWith(le)){const h=u[s++];if(d.push(f),h!==void 0){const m=o.getAttribute(h.toLowerCase()+Bt).split(le),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:g[2],strings:m,ctor:g[1]==="."?Xo:g[1]==="?"?Go:g[1]==="@"?Zo:dt})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(Fo.test(o.tagName)){const d=o.textContent.split(le),f=d.length-1;if(f>0){o.textContent=Ie?Ie.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],et()),Ce.nextNode(),l.push({type:2,index:++a});o.append(d[f],et())}}}else if(o.nodeType===8)if(o.data===qr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(le,d+1))!==-1;)l.push({type:7,index:a}),d+=le.length-1}a++}}static createElement(t,r){const n=Ee.createElement("template");return n.innerHTML=t,n}}function _e(e,t,r=e,n){var o,a,s,i;if(t===te)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=tt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=_e(e,l._$AS(e,t.values),l,n)),t}class qo{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Ee).importNode(n,!0);Ce.currentNode=a;let s=Ce.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new He(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new Ko(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=Ce.nextNode(),i++)}return Ce.currentNode=Ee,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class He{constructor(t,r,n,o){var a;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=_e(this,t,r),tt(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==te&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Uo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ee.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=rt.createElement(Yo(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new qo(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=_n.get(t.strings);return r===void 0&&_n.set(t.strings,r=new rt(t)),r}T(t){Ho(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new He(this.k(et()),this.k(et()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class dt{constructor(t,r,n,o,a){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=_e(this,t,r,0),s=!tt(t)||t!==this._$AH&&t!==te,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=_e(this,i[n+l],r,l),c===te&&(c=this._$AH[l]),s||(s=!tt(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xo extends dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}const ei=Ie?Ie.emptyScript:"";class Go extends dt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,ei):this.element.removeAttribute(this.name)}}class Zo extends dt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=_e(this,t,r,0))!==null&&n!==void 0?n:P)===te)return;const o=this._$AH,a=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==P&&(o===P||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Ko{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){_e(this,t)}}const ti={O:Bt,P:le,A:qr,C:1,M:Wo,L:qo,R:Uo,D:_e,I:He,V:dt,H:Go,N:Zo,U:Xo,F:Ko},Tn=Pt.litHtmlPolyfillSupport;Tn==null||Tn(rt,He),((or=Pt.litHtmlVersions)!==null&&or!==void 0?or:Pt.litHtmlVersions=[]).push("2.8.0");const ri=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new He(t.insertBefore(et(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ni}=ti,Mn=()=>document.createComment(""),qe=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(Mn(),a),i=o.insertBefore(Mn(),a);r=new ni(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},$e=(e,t,r=e)=>(e._$AI(t,r),e),oi={},ai=(e,t=oi)=>e._$AH=t,si=e=>e._$AH,sr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii=je(class extends Ae{constructor(e){var t;if(super(e),e.type!==qt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return te}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},li=je(class extends Ae{constructor(e){if(super(e),e.type!==qt.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=si(e),{values:s,keys:i}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=i,s;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,h=a.length-1,m=0,g=s.length-1;for(;f<=h&&m<=g;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[m])c[m]=$e(a[f],s[m]),f++,m++;else if(l[h]===i[g])c[g]=$e(a[h],s[g]),h--,g--;else if(l[f]===i[g])c[g]=$e(a[f],s[g]),qe(e,c[g+1],a[f]),f++,g--;else if(l[h]===i[m])c[m]=$e(a[h],s[m]),qe(e,a[f],a[h]),h--,m++;else if(u===void 0&&(u=An(i,m,g),d=An(l,f,h)),u.has(l[f]))if(u.has(l[h])){const y=d.get(i[m]),k=y!==void 0?a[y]:null;if(k===null){const C=qe(e,a[f]);$e(C,s[m]),c[m]=C}else c[m]=$e(k,s[m]),qe(e,a[f],k),a[y]=null;m++}else sr(a[h]),h--;else sr(a[f]),f++;for(;m<=g;){const y=qe(e,c[g+1]);$e(y,s[m]),c[m++]=y}for(;f<=h;){const y=a[f++];y!==null&&sr(y)}return this.ut=i,ai(e,c),te}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Er=class extends Ae{constructor(t){if(super(t),this.et=P,t.type!==qt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.ft=void 0,this.et=t;if(t===te)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Er.directiveName="unsafeHTML",Er.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Rn=class extends Er{};Rn.directiveName="unsafeSVG",Rn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ci(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=window,Xr=_t.ShadowRoot&&(_t.ShadyCSS===void 0||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gr=Symbol(),Pn=new WeakMap;let Jo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Gr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Xr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Pn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Pn.set(r,t))}return t}toString(){return this.cssText}};const O=e=>new Jo(typeof e=="string"?e:e+"",void 0,Gr),Ke=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new Jo(r,e,Gr)},ui=(e,t)=>{Xr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=_t.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Bn=Xr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return O(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ir;const Nt=window,Nn=Nt.trustedTypes,di=Nn?Nn.emptyScript:"",Ln=Nt.reactiveElementPolyfillSupport,_r={toAttribute(e,t){switch(t){case Boolean:e=e?di:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Qo=(e,t)=>t!==e&&(t==t||e==e),lr={attribute:!0,type:String,converter:_r,reflect:!1,hasChanged:Qo},Tr="finalized";class Oe extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=lr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||lr}static finalize(){if(this.hasOwnProperty(Tr))return!1;this[Tr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Bn(o))}else t!==void 0&&r.push(Bn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ui(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=lr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:_r).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:_r;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Qo)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Oe[Tr]=!0,Oe.elementProperties=new Map,Oe.elementStyles=[],Oe.shadowRootOptions={mode:"open"},Ln==null||Ln({ReactiveElement:Oe}),((ir=Nt.reactiveElementVersions)!==null&&ir!==void 0?ir:Nt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cr,ur;class Je extends Oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ri(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return te}}Je.finalized=!0,Je._$litElement$=!0,(cr=globalThis.litElementHydrateSupport)===null||cr===void 0||cr.call(globalThis,{LitElement:Je});const On=globalThis.litElementPolyfillSupport;On==null||On({LitElement:Je});((ur=globalThis.litElementVersions)!==null&&ur!==void 0?ur:globalThis.litElementVersions=[]).push("3.3.3");var fi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(k){if(k!==void 0&&typeof k!="function")throw new TypeError("Function expected");return k}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var m={};for(var g in n)m[g]=g==="access"?{}:n[g];for(var g in n.access)m.access[g]=n.access[g];m.addInitializer=function(k){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(k||null))};var y=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],m);if(i==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=s(y.get))&&(u.get=d),(d=s(y.set))&&(u.set=d),(d=s(y.init))&&o.unshift(d)}else(d=s(y))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},hi=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},pi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function mi(){function e(t,r){return t}return e}let ea=(()=>{let e=[mi()],t,r=[],n;return n=class extends Je{},pi(n,"DeclarativeElement"),fi(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,hi(n,r),n})();function Re(e){if(ce(e))return pe(e,(r,n)=>{if(!K(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Bs(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?O(r):r.startsWith("-")?Ke`-${O(r)}`:Ke`--${O(r)}`;return{name:s,value:Ke`var(${s}, ${O(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${Re.name}' function.`)}function gi({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},vi=(e,t,r)=>{t.constructor.createProperty(r,e)};function ta(e){return(t,r)=>r!==void 0?vi(e,t,r):bi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr;((dr=window.HTMLSlotElement)===null||dr===void 0?void 0:dr.prototype.assignedElements)!=null;const Zr=Symbol("key for ignoring inputs not having been set yet"),yi={[Zr]:!0,allowPolymorphicState:!1};function ra(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ea?!0:ra(r)}function na(e,t){const r=e.instanceState;ee(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ee(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),wi(e)}function wi(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Vn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class $i extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Kr(){return e=>{var t;return t=class extends $i{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Te(){return Kr()}function ki(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Kr()(r);return t[r]=n,t},{}):{}}const xi="_elementVirStateSetup";function Si(e){return ce(e)?xi in e:!1}function Ci(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Sr(e)===Sr(t)&&r}const oa=Symbol("and"),aa=Symbol("or"),sa=Symbol("exact"),ia=Symbol("enum"),Jr=Symbol("unknown"),la="__vir__shape__definition__key__do__not__use__in__actual__objects";function ca(e){return oe(e,la)}const ua="__vir__shape__specifier__key__do__not__use__in__actual__objects",Ei=[oa,aa,sa,ia,Jr];function _i(){return Ti([],Jr)}function Xt(e){return ft(e,aa)}function Qr(e){return ft(e,oa)}function en(e){return ft(e,sa)}function tn(e){return ft(e,ia)}function rn(e){return ft(e,Jr)}function ft(e,t){const r=Gt(e);return!!r&&r.specifierType===t}function Ti(e,t){return{[ua]:!0,specifierType:t,parts:e}}function Tt(e,t){const r=Gt(t);if(r){if(Qr(r))return r.parts.every(n=>Tt(e,n));if(Xt(r))return r.parts.some(n=>Tt(e,n));if(en(r))return ce(e)?Tt(e,r.parts[0]):e===r.parts[0];if(tn(r))return Object.values(r.parts[0]).some(n=>n===e);if(rn(r))return!0}return Ci(e,t)}function Gt(e){if(ce(e)&&oe(e,ua)){if(!oe(e,"parts")||!K(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!oe(e,"specifierType")||!_s(Ei,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Mr(e){return Ar(e)}function Ar(e){const t=Gt(e);if(t){if(Xt(t)||en(t))return Ar(t.parts[0]);if(Qr(t))return t.parts.reduce((r,n)=>Object.assign(r,Ar(n)),{});if(tn(t))return Object.values(t.parts[0])[0];if(rn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return ca(e)?Mr(e.shape):e instanceof RegExp||K(e,"array")?e:ce(e)?pe(e,(r,n)=>Mr(n)):e}function Mi(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Mr(e),[la]:!0}}class Z extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ai(e,t,r={}){try{return Ri(e,t,r),!0}catch{return!1}}function Ri(e,t,r={}){xe(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function da(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function xe(e,t,r,n){if(rn(t))return!0;if(ca(t))return xe(e,t.shape,r,n);const o=da(r);if(Gt(e))throw new Z(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Tt(e,t))throw new Z(`Subject does not match shape definition at key ${o}`);if(K(t,"function"))return K(e,"function");if(ce(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(Xt(t))l=t.parts.some(c=>{try{const u=xe(e,c,r,{...n});return Object.assign(i,u),!0}catch(u){if(u instanceof Z)return!1;throw u}});else if(Qr(t))l=t.parts.every(c=>{try{const u=xe(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof Z)return!1;throw u}});else if(en(t)){const c=xe(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(tn(t))throw new Z(`Cannot compare an enum specifier to an object at ${o}`);if(K(t,"array")&&K(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return xe(c,f,[...r,u],n),!0}catch(h){if(h instanceof Z)return!1;throw h}});return i[u]=d,d});else{const c=Pi({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(i).filter(d=>!i[d]).join(",")}`;throw new Z(u)}return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new Z(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function Pi({keys:e,options:t,shape:r,subject:n}){const o=da(e),a={};if(ce(r)){const s=new Set(ee(n)),i=new Set(ee(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new Z(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=Xt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new Z(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];xe(c,u,[...e,l],t),a[l]=!0})}else throw new Z(`shape definition at ${o} was not an object.`);return a}const Bi=Mi({addListener(){return!1},removeListener(){return!1},value:_i()});function fr(e){return Ai(e,Bi,{allowExtraKeys:!0})}function Ni(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function zn(e,t){const r=e;function n(s){t?Ni(s,e,e.tagName):ta()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Si(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(m){s[i]=m,r[i]=m}const f=e.observablePropertyListenerMap[i];if(u!==c&&fr(u)&&(f!=null&&f.length)&&u.removeListener(f),fr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[i]=m,c.addListener(m)}else fr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Li(e){return e?pe(e,t=>t):{}}function Oi({hostClassNames:e,cssVars:t}){return{hostClasses:pe(e,(r,n)=>({name:O(n),selector:O(`:host(.${n})`)})),cssVars:t}}function Vi({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ee(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function zi(e,t){function r(o){ee(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Ii=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Zt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...yi,...e.options},n=ki(e.events),o=Li(e.hostClasses);e.hostClasses&&Vn(e.tagName,e.hostClasses),e.cssVars&&Vn(e.tagName,e.cssVars);const a=e.cssVars?Re(e.cssVars):{},s=typeof e.styles=="function"?e.styles(Oi({hostClassNames:o,cssVars:a})):e.styles||Ke``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends ea{createRenderParams(){return zi(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{ra(this)&&!this.haveInputsBeenSet&&!r[Zr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Zt.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Vi({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=zo(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){na(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=zn(this,!1),this.instanceState=zn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};ee(u).forEach(f=>{ta()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Ii(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Ps(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function fa(){return e=>Zt({...e,options:{[Zr]:!1,...e.options}})}function ha(e,t){return nt(e,t),e.element}function Di(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function nt(e,t){const r=Di(e),n=r?`: in ${r}`:"";if(e.type!==qt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function ji(e,t){return t?In(e,t):In(void 0,e)}const In=je(class extends Ae{constructor(e){super(e),this.element=ha(e,"assign")}render(e,t){return na(this.element,t),te}});function B(e,t){return Hi(e,t)}const Hi=je(class extends Ae{constructor(e){super(e),this.element=ha(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),te}}),Dn="onDomCreated",jn=je(class extends Ae{constructor(e){super(e),nt(e,Dn)}update(e,[t]){nt(e,Dn);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),hr="onResize",pa=je(class extends Ae{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),nt(e,hr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${hr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){nt(e,hr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Q(e,t,r){return ci(e,()=>t,()=>r)}function ma(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),fa()(r(n))),defineElementNoInputs:n=>(t(n),Zt(r(n)))}}function Ui(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Rr(e){return oe(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function nn(e){return oe(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ga(e){return e.map(t=>Rr(t)?t.definition:t).filter(t=>nn(t))}const ba=new WeakMap;function Fi(e,t){var o;const r=ga(t);return(o=va(ba,[e,...r]).value)==null?void 0:o.template}function Yi(e,t,r){const n=ga(t);return wa(ba,[e,...n],r)}function va(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ya(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?va(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ya(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function wa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=ya(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),wa(l,t,r,n+1)}const Wi=new WeakMap;function $a(e,t,r){const n=Fi(e,t),o=n??r();if(!n){const i=Yi(e,t,o);if(i.result)Wi.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=Ui(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function ka(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let g,y=[];if(typeof f=="string"&&(g=r(f,c,m),g)){o[d]=f+g.replacement,s.push(h);const C=g.getExtraValues;y=C?C(m):[],y.length&&C?(o[d]+=" ",y.forEach((R,M)=>{M&&o.push(" ")}),i.push(R=>{const M=R[h],I=C(M);return{index:h,values:I}}),o.push(c)):o[d]+=c}g||o.push(c);const k=e.raw[u];g?(a[d]=a[d]+g.replacement+k,y.length&&y.forEach(()=>{a.push("")})):a.push(k)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function qi(...[e,t,r]){if(nn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Xi(e,t){return ka(e,t,qi)}function v(e,...t){const r=$a(e,t,()=>Xi(e,t));return Ke(r.strings,...r.values)}function Gi(...[e,t,r]){const n=Rr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=nn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Rr(c)?c.inputs:void 0;return[o&&u?ji(u):void 0].filter(ut)}}}function Zi(e){}function Ki(e){return ka(e.strings,e.values,Gi,Zi)}function p(e,...t){const r=Qs(e,...t),n=$a(e,t,()=>Ki(r));return{...r,strings:n.strings,values:n.values}}const Ji={[V.ElementExample]:()=>[],[V.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Ys(e.controls,e.title)].filter(ut),[V.Root]:()=>[]},Lt="_isBookTreeNode",xa=new Map;function Qi(e){return xa.get(e)}function el(e,t){Os(xa,e,()=>t)}function ze(e,t){return!!(Sa(e)&&e.entry.entryType===t)}function Sa(e){return!!(Io(e,[Lt,"entry"])&&e[Lt])}function tl(){return{[Lt]:!0,entry:{entryType:V.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function rl({entries:e,debug:t}){const r=Qi(e);if(r)return r;const n=tl();e.forEach(s=>on({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Ca(n),a={tree:n,flattenedNodes:o};return el(e,a),t&&console.info("element-book tree:",n),a}function nl(e,t,r){if(!t.parent)return e;const n=Pr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),on({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Pr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Wr(t,!1)}`);return o}function on({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Ji[t.entryType](t);t.errors.push(...o);const a=nl(e,t,r),s=Rt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Lt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,Us(t,V.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>on({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Pr(e,t){const r=Sa(e)?e.fullUrlBreadcrumbs.slice(0,-1):Wr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ca(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ca(o));return[e,...r].flat()}function an(e,t){return sn(e,["",...t],void 0)}function sn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&sn(a,n,r);return{...e.controls,...s}}function ol(e,t,r){const n=Ns(e);return sn(n,["",...t],r),n}function Ea(e,t){const r=(t==null?void 0:t.controls)||(ze(e,V.Page)?pe(e.entry.controls,(o,a)=>a.initValue):{});return{children:pe(e.children,(o,a)=>{var s;return Ea(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function al({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const sl=Xs(32);function Mt(e){return e.join(sl)}function _a(e){if(!e.length)return[];const t=Mt(e),r=_a(e.slice(0,-1));return[t,...r]}const il=["error","errors"];function ll(e){return il.includes(e)}function cl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Mt(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&ll(t),s=Mt(o.fullUrlBreadcrumbs);if(al({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=_a(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=Mt(o.fullUrlBreadcrumbs),s=r[a];if(!K(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var D;(function(e){e.Search="search",e.Book="book"})(D||(D={}));function Br(e){return e[0]===D.Book?"":e[1]?decodeURIComponent(e[1]):""}const De={hash:void 0,paths:[D.Book],search:void 0},ul=0;function dl(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==ul)}class Kt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Hn extends Kt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const ot="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const fl=globalThis.history.pushState;function Un(...e){const t=fl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ot)),t}const hl=globalThis.history.replaceState;function Fn(...e){const t=hl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ot)),t}function pl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Un)throw new Hn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Fn)throw new Hn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Un,globalThis.history.replaceState=Fn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ot))})}}function ml(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function gl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function bl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),a=globalThis.location.search?ml(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:a,hash:s}}function Ta(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Ma({routeBase:e,windowPath:t}){if(!e)return"";const r=Ta(e);if(Aa({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Ma({routeBase:n,windowPath:t}):""}function Aa({routeBase:e,windowPath:t}){const r=Ta(e);return r?t.startsWith(`/${r}`):!1}class vl extends Kt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Ra(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Yn=6;function Wn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Yn)throw new vl(`Route sanitization depth has exceed the max of ${Yn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Ra(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class pr extends Kt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function yl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new pr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new pr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new pr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function wl(e,t,r=!1){const n=Pa(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Pa(e,t){var l;const r=Aa({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?gl(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",s=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(ut).join("/")}${o}${s}`}function $l(e={}){yl(e),pl();const t=e.routeBase?Ma({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Wn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Ra(l,u)))return wl(u,t,s)},createRoutesUrl(a){return Pa(a,t)},getCurrentRawRoutes(){return bl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Kt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(ot,n),r=!0),a&&Wn(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(ot,n),r=!1),s},sanitizationDepth:0};return o}function kl(e){return $l({routeBase:e,routeSanitizer(t){return{paths:xl(t.paths),hash:void 0,search:void 0}}})}function xl(e){const t=e[0];if(Is(t,D)){if(t===D.Book)return[D.Book,...e.slice(1)];if(t===D.Search)return e[1]?[t,e[1]]:[D.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return De.paths}const x=Re({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Sl={nav:{hover:{background:x["element-book-nav-hover-background-color"],foreground:x["element-book-nav-hover-foreground-color"]},active:{background:x["element-book-nav-active-background-color"],foreground:x["element-book-nav-active-foreground-color"]},selected:{background:x["element-book-nav-selected-background-color"],foreground:x["element-book-nav-selected-foreground-color"]}},accent:{icon:x["element-book-accent-icon-color"]},page:{background:x["element-book-page-background-color"],backgroundFaint1:x["element-book-page-background-faint-level-1-color"],backgroundFaint2:x["element-book-page-background-faint-level-2-color"],foreground:x["element-book-page-foreground-color"],foregroundFaint1:x["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:x["element-book-page-foreground-faint-level-2-color"]}};function Cl(e,t){Ba(e,t,Sl)}function Nr(e){return oe(e,"_$cssResult$")}function qn(e){return Io(e,["name","value","default"])&&K(e.default,"string")&&Nr(e.name)&&Nr(e.value)}function Ba(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Nr(o)){if(!qn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);gi({forCssVar:a,onElement:e,toValue:String(o)})}else{if(qn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ba(e,o,a)}})}function N(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function ht(e){return fe(e)==="string"}function fe(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ot(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Na(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function La(e){return e[e.length-1]}function Vt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Oa(e,t,r){return(r-e)/(t-e)}function ln(e,t,r){return Vt(t[0],t[1],Oa(e[0],e[1],r))}function Va(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var El=Object.freeze({__proto__:null,interpolate:Vt,interpolateInv:Oa,isString:ht,last:La,mapRange:ln,multiplyMatrices:N,parseCoordGrammar:Va,parseFunction:Na,toPrecision:Ot,type:fe});class _l{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const me=new _l;var ae={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const J={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Lr(e){return Array.isArray(e)?e:J[e]}function zt(e,t,r,n={}){if(e=Lr(e),t=Lr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(me.run("chromatic-adaptation-start",o),o.M||(o.W1===J.D65&&o.W2===J.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===J.D50&&o.W2===J.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),me.run("chromatic-adaptation-end",o),o.M)return N(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Tl=75e-6,U=class U{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?U.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Lr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Ml(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),me.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Tl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Xn(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Xn(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=U.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=U.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(U.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof U)return t;if(fe(t)==="string"){let o=U.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return U.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=fe(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=U.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=fe(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=U.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};nr(U,"registry",{}),nr(U,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=U;function Ml(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Xn(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Va(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=ln(i,l,a)),a=Ot(a,o),c&&(a+=c),a})}return e}var q=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class j extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=q),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=N(t.toXYZ_M,r);return this.white!==this.base.white&&(n=zt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=zt(this.base.white,this.white,r),N(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function za(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(me.run("parse-start",r),r.color)return r.color;if(r.parsed=Na(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((g,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||La(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([m,g],y)=>{var re;let k=u.coordGrammar[y],C=(re=f[y])==null?void 0:re.type,R=k.find(H=>H==C);if(!R){let H=g.name||m;throw new TypeError(`${C} not allowed for ${H} in ${l}()`)}let M=R.range;C==="<percentage>"&&(M||(M=[0,1]));let I=g.range||g.refRange;return M&&I&&(f[y]=ln(M,I,f[y])),R})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function S(e){if(!e)throw new TypeError("Empty color reference");ht(e)&&(e=za(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function pt(e,t){return t=b.get(t),t.from(e)}function X(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return pt(e,r)[n]}function Ia(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function ge(e,t,r){if(e=S(e),arguments.length===2&&fe(arguments[1])==="object"){let n=arguments[1];for(let o in n)ge(e,o,n[o])}else{typeof r=="function"&&(r=r(X(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=pt(e,n);a[o]=r,Ia(e,n,a)}return e}var cn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:q,fromBase:e=>zt(q.white,"D50",e),toBase:e=>zt("D50",q.white,e),formats:{color:{}}});const Al=216/24389,Gn=24/116,vt=24389/27;let mr=J.D50;var F=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:mr,base:cn,fromBase(e){let r=e.map((n,o)=>n/mr[o]).map(n=>n>Al?Math.cbrt(n):(vt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Gn?Math.pow(t[0],3):(116*t[0]-16)/vt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/vt,t[2]>Gn?Math.pow(t[2],3):(116*t[2]-16)/vt].map((n,o)=>n*mr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Jt(e){return(e%360+360)%360}function Rl(e,t){if(e==="raw")return t;let[r,n]=t.map(Jt),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var at=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:F,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Jt(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Zn=25**7,It=Math.PI,Kn=180/It,Be=It/180;function Or(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=F.from(e),l=at.from(F,[a,s,i])[1],[c,u,d]=F.from(t),f=at.from(F,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,g=.5*(1-Math.sqrt(m/(m+Zn))),y=(1+g)*s,k=(1+g)*u,C=Math.sqrt(y**2+i**2),R=Math.sqrt(k**2+d**2),M=y===0&&i===0?0:Math.atan2(i,y),I=k===0&&d===0?0:Math.atan2(d,k);M<0&&(M+=2*It),I<0&&(I+=2*It),M*=Kn,I*=Kn;let re=c-a,H=R-C,_=I-M,z=M+I,tr=Math.abs(_),Fe;C*R===0?Fe=0:tr<=180?Fe=_:_>180?Fe=_-360:_<-180?Fe=_+360:console.log("the unthinkable has happened");let fn=2*Math.sqrt(R*C)*Math.sin(Fe*Be/2),ws=(a+c)/2,rr=(C+R)/2,hn=Math.pow(rr,7),se;C*R===0?se=z:tr<=180?se=z/2:z<360?se=(z+360)/2:se=(z-360)/2;let pn=(ws-50)**2,$s=1+.015*pn/Math.sqrt(20+pn),mn=1+.045*rr,Ye=1;Ye-=.17*Math.cos((se-30)*Be),Ye+=.24*Math.cos(2*se*Be),Ye+=.32*Math.cos((3*se+6)*Be),Ye-=.2*Math.cos((4*se-63)*Be);let gn=1+.015*rr*Ye,ks=30*Math.exp(-1*((se-275)/25)**2),xs=2*Math.sqrt(hn/(hn+Zn)),Ss=-1*Math.sin(2*ks*Be)*xs,bt=(re/(r*$s))**2;return bt+=(H/(n*mn))**2,bt+=(fn/(o*gn))**2,bt+=Ss*(H/(n*mn))*(fn/(o*gn)),Math.sqrt(bt)}const Pl=75e-6;function Qe(e,t=e.space,{epsilon:r=Pl}={}){e=S(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function st(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function be(e,{method:t=ae.gamut_mapping,space:r=e.space}={}){if(ht(arguments[1])&&(r=arguments[1]),r=b.get(r),Qe(e,r,{epsilon:0}))return S(e);let n=W(e,r);if(t!=="clip"&&!Qe(e,r)){let o=be(st(n),{method:"clip",space:r});if(Or(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=W(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=X(l,i);for(;h-f>d;){let m=st(l);m=be(m,{space:r,method:"clip"}),Or(l,m)-2<d?f=X(l,i):h=X(l,i),ge(l,i,(f+h)/2)}n=W(l,r)}else n=o}if(t==="clip"||!Qe(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=W(n,e.space)),e.coords=n.coords,e}be.returns="color";function W(e,t,{inGamut:r}={}){e=S(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=be(o)),o}W.returns="color";function Dt(e,{precision:t=ae.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=S(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Qe(e)&&(i=be(st(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>Ot(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Ot(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Bl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Nl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Qt=new j({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Bl,fromXYZ_M:Nl,formats:{color:{}}});const yt=1.09929682680944,Jn=.018053968510807;var Da=new j({id:"rec2020",name:"REC.2020",base:Qt,toBase(e){return e.map(function(t){return t<Jn*4.5?t/4.5:Math.pow((t+yt-1)/yt,1/.45)})},fromBase(e){return e.map(function(t){return t>=Jn?yt*Math.pow(t,.45)-(yt-1):4.5*t})},formats:{color:{}}});const Ll=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Ol=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ja=new j({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ll,fromXYZ_M:Ol});const Vl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],zl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ha=new j({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Vl,fromXYZ_M:zl,formats:{color:{}}}),Qn={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let eo=Array(3).fill("<percentage> | <number>[0, 255]"),to=Array(3).fill("<number>[0, 255]");var it=new j({id:"srgb",name:"sRGB",base:Ha,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:eo},rgb_number:{name:"rgb",commas:!0,coords:to,noAlpha:!0},color:{},rgba:{coords:eo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:to},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Qn.black,t.alpha=0):t.coords=Qn[e],t.coords)return t}}}}),Ua=new j({id:"p3",name:"P3",base:ja,fromBase:it.fromBase,toBase:it.toBase,formats:{color:{id:"display-p3"}}});ae.display_space=it;if(typeof CSS<"u"&&CSS.supports)for(let e of[F,Da,Ua]){let t=e.getMinCoords(),n=Dt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ae.display_space=e;break}}function Il(e,{space:t=ae.display_space,...r}={}){let n=Dt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ae.display_space)n=new String(n),n.color=e;else{let o=W(e,t);n=new String(Dt(o,r)),n.color=o}return n}function Fa(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Dl(e,t){return e=S(e),t=S(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ve(e){return X(e,[q,"y"])}function Ya(e,t){ge(e,[q,"y"],t)}function jl(e){Object.defineProperty(e.prototype,"luminance",{get(){return ve(this)},set(t){Ya(this,t)}})}var Hl=Object.freeze({__proto__:null,getLuminance:ve,register:jl,setLuminance:Ya});function Ul(e,t){e=S(e),t=S(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Fl=.56,Yl=.57,Wl=.62,ql=.65,ro=.022,Xl=1.414,Gl=.1,Zl=5e-4,Kl=1.14,no=.027,Jl=1.14;function oo(e){return e>=ro?e:e+(ro-e)**Xl}function Ne(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Ql(e,t){t=S(t),e=S(e);let r,n,o,a,s,i;t=W(t,"srgb"),[a,s,i]=t.coords;let l=Ne(a)*.2126729+Ne(s)*.7151522+Ne(i)*.072175;e=W(e,"srgb"),[a,s,i]=e.coords;let c=Ne(a)*.2126729+Ne(s)*.7151522+Ne(i)*.072175,u=oo(l),d=oo(c),f=d>u;return Math.abs(d-u)<Zl?n=0:f?(r=d**Fl-u**Yl,n=r*Kl):(r=d**ql-u**Wl,n=r*Jl),Math.abs(n)<Gl?o=0:n>0?o=n-no:o=n+no,o*100}function ec(e,t){e=S(e),t=S(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const tc=5e4;function rc(e,t){e=S(e),t=S(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),n===0?tc:(r-n)/n}function nc(e,t){e=S(e),t=S(t);let r=X(e,[F,"l"]),n=X(t,[F,"l"]);return Math.abs(r-n)}const oc=216/24389,ao=24/116,wt=24389/27;let gr=J.D65;var Vr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:gr,base:q,fromBase(e){let r=e.map((n,o)=>n/gr[o]).map(n=>n>oc?Math.cbrt(n):(wt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ao?Math.pow(t[0],3):(116*t[0]-16)/wt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wt,t[2]>ao?Math.pow(t[2],3):(116*t[2]-16)/wt].map((n,o)=>n*gr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const br=Math.pow(5,.5)*.5+.5;function ac(e,t){e=S(e),t=S(t);let r=X(e,[Vr,"l"]),n=X(t,[Vr,"l"]),o=Math.abs(Math.pow(r,br)-Math.pow(n,br)),a=Math.pow(o,1/br)*Math.SQRT2-40;return a<7.5?0:a}var At=Object.freeze({__proto__:null,contrastAPCA:Ql,contrastDeltaPhi:ac,contrastLstar:nc,contrastMichelson:ec,contrastWCAG21:Ul,contrastWeber:rc});function sc(e,t,r={}){ht(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(At).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=S(e),t=S(t);for(let a in At)if("contrast"+n.toLowerCase()===a.toLowerCase())return At[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Wa(e){let[t,r,n]=pt(e,q),o=t+15*r+3*n;return[4*t/o,9*r/o]}function qa(e){let[t,r,n]=pt(e,q),o=t+r+n;return[t/o,r/o]}function ic(e){Object.defineProperty(e.prototype,"uv",{get(){return Wa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return qa(this)}})}var lc=Object.freeze({__proto__:null,register:ic,uv:Wa,xy:qa});function cc(e,t){return Fa(e,t,"lab")}const uc=Math.PI,so=uc/180;function dc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=F.from(e),[,i,l]=at.from(F,[o,a,s]),[c,u,d]=F.from(t),f=at.from(F,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,m=i-f,g=a-u,y=s-d,k=g**2+y**2-m**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let R=.0638*i/(1+.0131*i)+.638,M;Number.isNaN(l)&&(l=0),l>=164&&l<=345?M=.56+Math.abs(.2*Math.cos((l+168)*so)):M=.36+Math.abs(.4*Math.cos((l+35)*so));let I=Math.pow(i,4),re=Math.sqrt(I/(I+1900)),H=R*(re*M+1-re),_=(h/(r*C))**2;return _+=(m/(n*R))**2,_+=k/H**2,Math.sqrt(_)}const io=203;var un=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:q,fromBase(e){return e.map(t=>Math.max(t*io,0))},toBase(e){return e.map(t=>Math.max(t/io,0))}});const $t=1.15,kt=.66,lo=2610/2**14,fc=2**14/2610,co=3424/2**12,uo=2413/2**7,fo=2392/2**7,hc=1.7*2523/2**5,ho=2**5/(1.7*2523),xt=-.56,vr=16295499532821565e-27,pc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],mc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],gc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],bc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Xa=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:un,fromBase(e){let[t,r,n]=e,o=$t*t-($t-1)*n,a=kt*r-(kt-1)*t,i=N(pc,[o,a,n]).map(function(f){let h=co+uo*(f/1e4)**lo,m=1+fo*(f/1e4)**lo;return(h/m)**hc}),[l,c,u]=N(gc,i);return[(1+xt)*l/(1+xt*l)-vr,c,u]},toBase(e){let[t,r,n]=e,o=(t+vr)/(1+xt-xt*(t+vr)),s=N(bc,[o,r,n]).map(function(f){let h=co-f**ho,m=fo*f**ho-uo;return 1e4*(h/m)**fc}),[i,l,c]=N(mc,s),u=(i+($t-1)*c)/$t,d=(l+(kt-1)*u)/kt;return[u,d,c]},formats:{color:{}}}),zr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Xa,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Jt(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function vc(e,t){let[r,n,o]=zr.from(e),[a,s,i]=zr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Ga=3424/4096,Za=2413/128,Ka=2392/128,po=2610/16384,yc=2523/32,wc=16384/2610,mo=32/2523,$c=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],kc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],xc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Sc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Ir=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:un,fromBase(e){let t=N($c,e);return Cc(t)},toBase(e){let t=Ec(e);return N(Sc,t)},formats:{color:{}}});function Cc(e){let t=e.map(function(r){let n=Ga+Za*(r/1e4)**po,o=1+Ka*(r/1e4)**po;return(n/o)**yc});return N(kc,t)}function Ec(e){return N(xc,e).map(function(n){let o=Math.max(n**mo-Ga,0),a=Za-Ka*n**mo;return 1e4*(o/a)**wc})}function _c(e,t){let[r,n,o]=Ir.from(e),[a,s,i]=Ir.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Tc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Mc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Ac=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Rc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var jt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:q,fromBase(e){let r=N(Tc,e).map(n=>Math.cbrt(n));return N(Ac,r)},toBase(e){let r=N(Rc,e).map(n=>n**3);return N(Mc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Pc(e,t){let[r,n,o]=jt.from(e),[a,s,i]=jt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Ht={deltaE76:cc,deltaECMC:dc,deltaE2000:Or,deltaEJz:vc,deltaEITP:_c,deltaEOK:Pc};function Ze(e,t,r={}){ht(r)&&(r={method:r});let{method:n=ae.deltaE,...o}=r;e=S(e),t=S(t);for(let a in Ht)if("deltae"+n.toLowerCase()===a.toLowerCase())return Ht[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Bc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1+t))}function Nc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1-t))}var Lc=Object.freeze({__proto__:null,darken:Nc,lighten:Bc});function Ja(e,t,r=.5,n={}){[e,t]=[S(e),S(t)],fe(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return mt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function Qa(e,t,r={}){let n;dn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[S(e),S(t)],n=mt(e,t,l));let c=Ze(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,m,g)=>{if(g===0)return 0;let y=Ze(m.color,d[g-1].color,a);return Math.max(h,y)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let m=d[h-1],g=d[h],y=(g.p+m.p)/2,k=n(y);f=Math.max(f,Ze(k,m.color),Ze(k,g.color)),d.splice(h,0,{p:y,color:n(y)}),h++}}}return d=d.map(f=>f.color),d}function mt(e,t,r={}){if(dn(e)){let[l,c]=[e,t];return mt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=S(e),t=S(t),e=st(e),t=st(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[ae.interpolationSpace]||e.space,o=o?b.get(o):n,e=W(e,n),t=W(t,n),e=be(e),t=be(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[X(e,c),X(t,c)];[u,d]=Rl(l,[u,d]),ge(e,c,u),ge(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return Vt(f,m,l)}),u=Vt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=W(d,o)),d},{rangeArgs:i})}function dn(e){return fe(e)==="function"&&!!e.rangeArgs}ae.interpolationSpace="lab";function Oc(e){e.defineFunction("mix",Ja,{returns:"color"}),e.defineFunction("range",mt,{returns:"function<color>"}),e.defineFunction("steps",Qa,{returns:"array<color>"})}var Vc=Object.freeze({__proto__:null,isRange:dn,mix:Ja,range:mt,register:Oc,steps:Qa}),es=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:it,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ts=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:es,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),zc=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ts,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Ic=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Dc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var rs=new j({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Ic,fromXYZ_M:Dc}),jc=new j({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:rs,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Hc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Uc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var ns=new j({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:cn,toXYZ_M:Hc,fromXYZ_M:Uc});const Fc=1/512,Yc=16/512;var Wc=new j({id:"prophoto",name:"ProPhoto",base:ns,toBase(e){return e.map(t=>t<Yc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Fc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),qc=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:jt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Jt(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const go=203,bo=2610/2**14,Xc=2**14/2610,Gc=2523/2**5,vo=2**5/2523,yo=3424/2**12,wo=2413/2**7,$o=2392/2**7;var Zc=new j({id:"rec2100pq",name:"REC.2100-PQ",base:Qt,toBase(e){return e.map(function(t){return(Math.max(t**vo-yo,0)/(wo-$o*t**vo))**Xc*1e4/go})},fromBase(e){return e.map(function(t){let r=Math.max(t*go/1e4,0),n=yo+wo*r**bo,o=1+$o*r**bo;return(n/o)**Gc})},formats:{color:{id:"rec2100-pq"}}});const ko=.17883277,xo=.28466892,So=.55991073,yr=3.7743;var Kc=new j({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Qt,toBase(e){return e.map(function(t){return t<=.5?t**2/3*yr:(Math.exp((t-So)/ko)+xo)/12*yr})},fromBase(e){return e.map(function(t){return t/=yr,t<=1/12?Math.sqrt(3*t):ko*Math.log(12*t-xo)+So})},formats:{color:{id:"rec2100-hlg"}}});const os={};me.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=as(e.W1,e.W2,e.options.method))});me.add("chromatic-adaptation-end",e=>{e.M||(e.M=as(e.W1,e.W2,e.options.method))});function er({id:e,toCone_M:t,fromCone_M:r}){os[e]=arguments[0]}function as(e,t,r="Bradford"){let n=os[r],[o,a,s]=N(n.toCone_M,e),[i,l,c]=N(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=N(u,n.toCone_M);return N(n.fromCone_M,d)}er({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});er({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});er({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});er({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(J,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});J.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Jc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Qc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ss=new j({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:J.ACES,toXYZ_M:Jc,fromXYZ_M:Qc,formats:{color:{}}});const St=2**-16,wr=-.35828683,Ct=(Math.log2(65504)+9.72)/17.52;var eu=new j({id:"acescc",name:"ACEScc",coords:{r:{range:[wr,Ct],name:"Red"},g:{range:[wr,Ct],name:"Green"},b:{range:[wr,Ct],name:"Blue"}},referred:"scene",base:ss,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-St)*2:r<Ct?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(St)+9.72)/17.52:t<St?(Math.log2(St+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Co=Object.freeze({__proto__:null,A98RGB:jc,A98RGB_Linear:rs,ACEScc:eu,ACEScg:ss,HSL:es,HSV:ts,HWB:zc,ICTCP:Ir,JzCzHz:zr,Jzazbz:Xa,LCH:at,Lab:F,Lab_D65:Vr,OKLCH:qc,OKLab:jt,P3:Ua,P3_Linear:ja,ProPhoto:Wc,ProPhoto_Linear:ns,REC_2020:Da,REC_2020_Linear:Qt,REC_2100_HLG:Kc,REC_2100_PQ:Zc,XYZ_ABS_D65:un,XYZ_D50:cn,XYZ_D65:q,sRGB:it,sRGB_Linear:Ha});class ${constructor(...t){let r;t.length===1&&(r=S(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new $(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Il(this,...t);return r.color=new $(r.color),r}static get(t,...r){return t instanceof $?t:new $(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=$.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return $.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>$.get(c)));return l};t in $||($[t]=s),o&&($.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)$.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register($);else for(let r in t)$.defineFunction(r,t[r])}}$.defineFunctions({get:X,getAll:pt,set:ge,setAll:Ia,to:W,equals:Dl,inGamut:Qe,toGamut:be,distance:Fa,toString:Dt});Object.assign($,{util:El,hooks:me,WHITES:J,Space:b,spaces:b.registry,parse:za,defaults:ae});for(let e of Object.keys(Co))b.register(Co[e]);for(let e in b.registry)Dr(e,b.registry[e]);me.add("colorspace-init-end",e=>{var t;Dr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Dr(r,e)})});function Dr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty($.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}$.extend(Ht);$.extend({deltaE:Ze});Object.assign($,{deltaEMethods:Ht});$.extend(Lc);$.extend({contrast:sc});$.extend(lc);$.extend(Hl);$.extend(Vc);$.extend(At);function is(e){return pe(e,(t,r)=>r instanceof $?O(r.toString({format:"hex"})):is(r))}const tu="dodgerblue";function jr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function $r({background:e,foreground:t}){return{background:e??new $(jr(t)),foreground:t??new $(jr(e))}}var Ut;(function(e){e.Dark="dark",e.Light="light"})(Ut||(Ut={}));function ru(e){return e==="black"?"white":"black"}const nu={black:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")},white:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")}},ou={black:{backgroundFaint1:new $("#666"),backgroundFaint2:new $("#444")},white:{backgroundFaint1:new $("#ccc"),backgroundFaint2:new $("#fafafa")}};function Eo({themeColor:e=tu,themeStyle:t=Ut.Light}={}){const r=new $(e),n=new $(t===Ut.Dark?"black":"white"),o=jr(n),a=new $(o),s={nav:{hover:$r({background:r.clone().set({"hsl.l":93})}),active:$r({background:r.clone().set({"hsl.l":90})}),selected:$r({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...ou[ru(o)],foreground:a,...nu[o]}};return is(s)}const Ft=Kr()("element-book-change-route"),_o="vira-",{defineElement:gt,defineElementNoInputs:Nu}=ma({assertInputs:e=>{if(!e.tagName.startsWith(_o))throw new Error(`Tag name should start with '${_o}' but got '${e.tagName}'`)}}),ls=v`
    pointer-events: none;
    opacity: 0.3;
`,he=Re({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function To(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function au(e,t){let r=!1;const n=To(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(To(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}const su="px";function cs(e){return iu(e,su)}function iu(e,t){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const lt=Re({"vira-form-input-border-radius":"8px"}),Yt=Re({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${lt["vira-form-input-border-radius"].value} + 4px)`});function us({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=O(cs(n+r+t));return v`
        ${O(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Yt["vira-focus-outline-color"].value};
            border-radius: ${Yt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const lu=v`
    padding: 0;
    margin: 0;
`,Se=v`
    ${lu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Hr=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,A=gt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ds=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(ds||{});const L=gt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Hr};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Yt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${ls};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Se};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${lt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${he["vira-interaction-animation-duration"].value},
                background-color
                    ${he["vira-interaction-animation-duration"].value},
                border-color ${he["vira-interaction-animation-duration"].value};
        }

        ${us({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${A} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${A.assign({icon:e.icon})}></${A}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Ur=(e=>(e.Header="header",e))(Ur||{});const ke=gt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Se};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${he["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Te()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${B("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${pa(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),w=Re({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function ue({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const fs=ue({name:"CloseX24Icon",svgTemplate:p`
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
    `});function Fr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Fr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function hs({value:e,allowed:t,blocked:r}){const n=t?Fr({input:e,matcher:t}):!0,o=r?Fr({input:e,matcher:r}):!1;return n&&!o}function ps(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(hs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function cu({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=Ge(r,HTMLInputElement),s=r.data,i=t;let l=a.value??"";if(s)if(s.length===1)hs({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=i,n(s));else{const{filtered:c,blocked:u}=ps({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),i!==l&&o(l)}const T=gt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Te(),inputBlocked:Te()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Yt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${ls};
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
                ${Se};
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
                ${Hr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Se};
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
                border-radius: ${lt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${he["vira-interaction-animation-duration"].value};
            }

            label {
                ${Se};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${lt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${us({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Se};
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
                ${Hr};
            }

            .close-x-button {
                ${Se};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${he["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=ps({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?p`
                  <${A.assign({icon:e.icon})} class="left-side-icon"></${A}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${s}
                ${Q(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${pa(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${B("input",l=>{cu({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Q(!!(e.showClearButton&&e.value),p`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${B("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${A.assign({icon:fs})}></${A}>
                        </button>
                    `)}
                ${Q(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),uu=0;function du(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==uu)}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Xe=gt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:Te()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&du(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return p`
                <a href=${s} rel="noopener noreferrer" ${B("click",n)}>
                    <slot></slot>
                </a>
            `}}}),ms=ue({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ve=ue({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),gs=ue({name:"Loader24Icon",svgTemplate:p`
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
    `}),fu=v`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${he["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,bs=ue({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${fu}
        </style>
        ${gs.svgTemplate}
    `}),vs=ue({name:"Options24Icon",svgTemplate:p`
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
    `}),hu=ue({name:"StatusFailure24Icon",svgTemplate:p`
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
    `}),pu=ue({name:"StatusInProgress24Icon",svgTemplate:p`
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
    `}),mu=ue({name:"StatusSuccess24Icon",svgTemplate:p`
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
    `}),gu={CloseX24Icon:fs,Element16Icon:ms,Element24Icon:Ve,Loader24Icon:gs,LoaderAnimated24Icon:bs,Options24Icon:vs,StatusFailure24Icon:hu,StatusInProgress24Icon:pu,StatusSuccess24Icon:mu},{defineElement:G,defineElementNoInputs:Lu}=ma(),Y=G()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>v`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return p`
            <a
                href=${r}
                ${B("click",a=>{(!e.router||dl(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Ft(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function bu(e,t){return e.entry.entryType===V.Root?!1:!!(e.entry.entryType===V.Page||de(t,e.fullUrlBreadcrumbs.slice(0,-1))||de(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ie=G()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>v`
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
            ${Y.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${A} {
            display: inline-flex;
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!bu(r,e.selectedPath))return;const n=v`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${Y.assign({router:e.router,route:{paths:[D.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ii({"title-row":!0,selected:e.selectedPath?de(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Q(ze(r,V.ElementExample),p`
                                    <${A.assign({icon:ms})}></${A}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Y}>
                </li>
            `});return p`
            <${Y.assign({route:De,router:e.router})}>
                <slot name=${ne.NavHeader}>Book</slot>
            </${Y}>
            <ul>
                ${t}
            </ul>
        `}});async function vu(e){await Cr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Gs(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ye=G()({tagName:"book-error",styles:v`
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
    `,renderCallback({inputs:e}){return(K(e.message,"array")?e.message:[e.message]).map(r=>p`
                    <p>${r}</p>
                `)}}),ct=G()({tagName:"book-page-controls",events:{controlValueChange:Te()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>v`
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

        ${T} {
            height: 24px;
            max-width: 128px;
        }

        ${A}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===E.Hidden)return"";const s=yu(e.currentValues[n],o,i=>{const l=K(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return p`
                    <div class="control-wrapper">
                        ${Q(a===0,p`
                                <${A.assign({icon:vs})}
                                    class="options-icon"
                                ></${A}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function yu(e,t,r){return Pe(t,E.Hidden)?"":Pe(t,E.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${B("input",n=>{const o=Ge(n,HTMLInputElement);r(o.checked)})}
            />
        `:Pe(t,E.Color)?p`
            <input
                type="color"
                .value=${e}
                ${B("input",n=>{const o=Ge(n,HTMLInputElement);r(o.value)})}
            />
        `:Pe(t,E.Text)?p`
            <${T.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${B(T.events.valueChange,n=>{r(n.detail)})}
            ></${T}>
        `:Pe(t,E.Number)?p`
            <input
                type="number"
                .value=${e}
                ${B("input",n=>{const o=Ge(n,HTMLInputElement);r(o.value)})}
            />
        `:Pe(t,E.Dropdown)?p`
            <select
                .value=${e}
                ${B("input",n=>{const o=Ge(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Mo=G()({tagName:"book-breadcrumbs",styles:v`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${Y.assign({route:{hash:void 0,search:void 0,paths:[D.Book,...s]},router:e.router})}>
                    ${r}
                </${Y}>
                ${i}
            `}):p`
                &nbsp;
            `}}),kr=G()({tagName:"book-breadcrumbs-bar",styles:v`
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
    `,renderCallback({inputs:e,dispatch:t}){return p`
            ${Q(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Mo.assign({currentRoute:e.currentRoute,router:e.router})}></${Mo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${B("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Hs(200),n.value===o&&(n.value?t(new Ft({paths:[D.Search,encodeURIComponent(n.value)]})):t(new Ft(De)))})}
            />
        `}}),Ao=G()({tagName:"book-entry-description",styles:v`
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
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>p`
                <p>${t}</p>
            `)}}),Ro=G()({tagName:"book-page-wrapper",styles:v`
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
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[D.Book,...e.pageNode.fullUrlBreadcrumbs],n=Vo(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Y.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Y}>
                    ${n?p`
                              <${ye.assign({message:n.message})}></${ye}>
                          `:p`
                              <${Ao.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Ao}>
                              <${ct.assign({config:e.pageNode.entry.controls,currentValues:an(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ct}>
                          `}
                </div>
            </div>
        `}}),Et=G()({tagName:"book-element-example-controls",styles:v`
        :host {
            display: flex;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[D.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${Y.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Y}>
        `}}),Po=Symbol("unset-internal-state"),Bo=G()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Po},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Vo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Po&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${Q(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${ye.assign({message:`${t.elementExampleNode.entry.title} failed: ${Wt(n)}`})}></${ye}>
            `}},options:{allowPolymorphicState:!0}}),No=G()({tagName:"book-element-example-wrapper",styles:v`
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

        ${Et} {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Et} {
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${Et.assign(js(e,["currentPageControls"]))}></${Et}>
                <${Bo.assign(e)}></${Bo}>
            </div>
        `}});function ys(e,t,r,n){const o=Pr(r,n),a=[];if(o){const s=ys(e,t,o,n);s&&a.push(s)}if(ze(r,V.Page)&&!e.includes(r)){const s=an(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:pe(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function wu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[p`
                No results
            `];const s=$n(e,1)?ys(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&$n(e,1)?p`
                  <${ct.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${ct}>
              `:"",l=li(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(ze(c,V.Page))return p`
                    <${Ro.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Ro}>
                `;if(ze(c,V.ElementExample)){const d=an(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${No.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${No}>
                `}else return ze(c,V.Root)?"":p`
                    <${ye.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ye}>
                `});return[i,l].flat()}const Le=G()({tagName:"book-entry-display",styles:v`
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

        ${kr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${he["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Te()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Br(e.currentRoute.paths),s=wu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return p`
            <${kr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${kr}>

            ${Q(e.showLoading,p`
                    <div
                        ${jn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${A.assign({icon:bs})}></${A}>
                    </div>
                    ${Q(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${ne.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${jn(i=>{o({lastElement:i})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${ne.Footer}></slot>
                `)}
        `}});function $u(e,t,r){const n=Lo(e,t);if(n.length)return n;r(De);const o=Lo(e,De.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Lo(e,t){return e.filter(r=>Ws({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const xr=fa()({tagName:"element-book-app",events:{pathUpdate:Te()},stateInitStatic:{currentRoute:De,router:void 0,loading:!0,colors:{config:void 0,theme:Eo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:v`
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

        ${Le} {
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
    `,initCallback({host:e,state:t}){setTimeout(()=>{Oo(e,Br(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,h,m,g,y;t._debug&&console.info("rendering element-book app");function s(k){return{...e.currentRoute,...k}}function i(k){const C=s(k);return!de(e.currentRoute,C)}function l(k){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,k].filter(ut).join(" - "))}function c(k){if(!i(k))return;const C=s(k);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!de(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!de(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const _=kl(t.internalRouterConfig.basePath);n({router:_}),_.addRouteListener(!0,z=>{n({currentRoute:z})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const k={themeColor:t.themeColor};if(!de(k,(f=e.colors)==null?void 0:f.config)){const _=Eo(k);n({colors:{config:k,theme:_}}),Cl(r,_)}const C=t._debug??!1,R=rl({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Ea(R.tree,{children:(m=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:t.globalValues})}}));const M=Br(e.currentRoute.paths),re=(M?cl({flattenedNodes:R.flattenedNodes,searchQuery:M}):void 0)??$u(R.flattenedNodes,e.currentRoute.paths,c);l((g=re[0])==null?void 0:g.entry.title);const H=(y=e.treeBasedControls)==null?void 0:y.controls;return H?(t._debug&&console.info({currentControls:H}),p`
                <div
                    class="root"
                    ${B(Ft,async _=>{const z=_.detail;if(!i(z))return;if(n({loading:!0}),c(z),!(r.shadowRoot.querySelector(ie.tagName)instanceof ie))throw new Error(`Failed to find child '${ie.tagName}'`);Oo(r,M,e.currentRoute)})}
                    ${B(ct.events.controlValueChange,_=>{if(!e.treeBasedControls)return;const z=ol(H,_.detail.fullUrlBreadcrumbs,_.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:z}})})}
                >
                    <${ie.assign({flattenedNodes:R.flattenedNodes,router:e.router,selectedPath:M?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ne.NavHeader}
                            slot=${ne.NavHeader}
                        ></slot>
                    </${ie}>
                    <${Le.assign({controls:H,currentNodes:re,currentRoute:e.currentRoute,debug:C,originalTree:R.tree,router:e.router,showLoading:e.loading})}
                        ${B(Le.events.loadingRender,async _=>{await Cr();const z=r.shadowRoot.querySelector(Le.tagName);z?z.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Le.tagName}' for scrolling.`),await Cr(),n({loading:!_.detail})})}
                    >
                        <slot
                            name=${ne.Footer}
                            slot=${ne.Footer}
                        ></slot>
                    </${Le}>
                </div>
            `):p`
                    <${ye.assign({message:"Failed to generate page controls."})}></${ye}>
                `}catch(k){return console.error(k),p`
                <p class="error">${Wt(k)}</p>
            `}}});async function Oo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ie.tagName);if(!(n instanceof ie))throw new Error(`Failed to find child '${ie.tagName}'`);await vu(n)}const Ue=Me({title:"Elements",parent:void 0}),ku=Me({parent:Ue,title:L.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:E.Color,initValue:L.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:E.Color,initValue:L.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:E.Color,initValue:L.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:E.Color,initValue:L.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??v``;e({title:r,styles:a,renderCallback({controls:s}){const i=v`
                        ${L.cssVars["vira-button-primary-color"].name}: ${O(s["Primary color"]||"inherit")};
                        ${L.cssVars["vira-button-secondary-color"].name}: ${O(s["Secondary color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-hover-color"].name}: ${O(s["Hover color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-active-color"].name}: ${O(s["Active color"]||"inherit")};
                    `;return p`
                        <${L.assign({text:"hello",...o})}
                            style=${i}
                        ></${L}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:ds.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:v`
                ${L} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:v`
                ${L} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:v`
                :host {
                    ${L.cssVars["vira-button-primary-color"].name}: pink;
                    ${L.cssVars["vira-button-secondary-color"].name}: purple;
                    ${L.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${L.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return p`
                    <${L.assign({text:"hello"})}></${L}>
                `}})}}),xu=Me({title:ke.tagName,parent:Ue,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${ke.assign({expanded:!!r.expandedStates[o]})}
                                ${B(ke.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Ur.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${B("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Q(!!r.showMoreStates[o],p`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${ke}>
                        `)}}),e({title:"wider examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${ke.assign({expanded:!!r.expandedStates[o]})}
                                ${B(ke.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Ur.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${B("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Q(!!r.showMoreStates[o],p`
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
                        `)}})}}),Su=Me({title:A.tagName,parent:Ue,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return p`
                    <${A.assign({icon:Ve})}></${A}>
                `}})}}),Cu=Me({title:T.tagName,parent:Ue,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:E.Color,initValue:T.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:E.Color,initValue:T.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:E.Color,initValue:T.cssVars["vira-input-border-color"].default},"Focus color":{controlType:E.Color,initValue:T.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:E.Color,initValue:T.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:v`
                    ${r||v``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:s,controls:i}){const l={[String(T.cssVars["vira-input-text-color"].name)]:i["Text color"],[String(T.cssVars["vira-input-placeholder-color"].name)]:i["Placeholder color"],[String(T.cssVars["vira-input-border-color"].name)]:i["Border color"],[String(T.cssVars["vira-input-focus-border-color"].name)]:i["Focus color"],[String(T.cssVars["vira-input-text-selection-color"].name)]:i["Selection color"]},c=au(l,(d,f)=>f||"inherit"),u=Object.entries(c).map(([d,f])=>[d,f].join(": ")+";").join(`
`);return p`
                        <${T.assign({...o,value:a.value})}
                            style=${u}
                            ${B(T.events.valueChange,d=>{s({value:d.detail})})}
                        ></${T}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:Ve}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:v`
                ${T} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:Ve}}),t({title:"taller height",styles:v`
                ${T} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:Ve}}),t({title:"shorter height",styles:v`
                ${T} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ve}}),t({title:"max width",styles:v`
                ${T} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:v`
                ${T} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Eu=Me({title:Xe.tagName,parent:Ue,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:E.Color,initValue:""},"Hover color":{controlType:E.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=v`
                        ${Xe.cssVars["vira-link-hover-color"].name}: ${O(o["Hover color"]||"inherit")};
                        color: ${O(o["CSS Color"]||"inherit")};
                    `;return p`
                        <${Xe.assign(n)}
                            style=${a}
                            ${B(Xe.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${Xe}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),_u=Me({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:E.Color,initValue:""},"Fill Color":{controlType:E.Color,initValue:""},"Stroke Width":{controlType:E.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(gu).forEach(t=>{e({title:t.name,styles:v`
                    :host(:hover) ${A} {
                        background-color: #f2f2f2;
                    }

                    ${A} {
                        padding: 8px;
                        border-radius: ${lt["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=v`
                        ${w["vira-icon-fill-color"].name}: ${O(r["Fill Color"]||"inherit")};
                        ${w["vira-icon-stroke-color"].name}: ${O(r["Stroke Color"]||"inherit")};
                        ${w["vira-icon-stroke-width"].name}: ${O(cs(r["Stroke Width"])||"inherit")};
                    `;return p`
                        <${A.assign({icon:t})} style=${n}></${A}>
                    `}})})}}),Tu=[Ue,_u,ku,xu,Su,Cu,Eu];Zt({tagName:"vira-book-app",styles:v`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${xr} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,renderCallback(){return p`
            <${xr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Tu,themeColor:"#33ccff"})}>
                <h1 slot=${ne.NavHeader}>Vira</h1>
            </${xr}>
        `}});
