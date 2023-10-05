var Ns=Object.defineProperty;var Ls=(e,t,r)=>t in e?Ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var sr=(e,t,r)=>(Ls(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Os(e,t){return e.includes(t)}function Re(e){return!!e}function zs(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var De;(function(e){e.Upper="upper",e.Lower="lower"})(De||(De={}));function Is(e){return e.toLowerCase()!==e.toUpperCase()}function xn(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Is(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===De.Upper&&o!==o.toUpperCase())return!1;if(t===De.Lower&&o!==o.toLowerCase())return!1}return!0}function Vs(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0&&a[o-1]||"",i=o<a.length-1&&a[o+1]||"",l=xn(s,De.Lower,{blockNoCaseCharacters:!0})||xn(i,De.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function js(e,t){return e.split(t)}function Fo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>pt(r).trim()).join(`
`))}function pt(e){return e?e instanceof Error?e.message:ee(e,"message")?String(e.message):String(e):""}function Ds(e){return e instanceof Error?e:new Error(pt(e))}function ue(e){return!!e&&typeof e=="object"}const Hs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ee(e,t){return e?Hs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Yo(e,t){return e&&t.every(r=>ee(e,r))}function pe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Wo(e,t,r=!1,n={}){const o=pe(e),a=new Set(pe(t));if(!r){const s=o.filter(i=>!a.has(i));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}a.forEach(s=>{if(!ee(e,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function i(u){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${u}`)}const l=e[s],c=t[s];n[s]||qo(l,c,i,r,n[s]??{})})}function qo(e,t,r,n,o){var i;const a=typeof e,s=typeof t;a!==s&&r(`type "${a}" did not match expected type "${s}"`);try{ee(t,"constructor")&&(!ee(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(i=e==null?void 0:e.constructor)==null?void 0:i.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{qo(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${pt(f)}`)}}).filter(Re).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):ue(t)&&Wo(e,t,n,o)}function _r(e){return Array.isArray(e)?"array":typeof e}function q(e,t){return _r(e)===t}function Cn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Sn="Failed to compare objects using JSON.stringify";function En(e,t,r){return Cn({source:e,errorHandler(n){if(r)return"";throw n}})===Cn({source:t,errorHandler(n){if(r)return"";throw n}})}function de(e,t,r={}){try{return e===t?!0:ue(e)&&ue(t)?En(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>de(e[o],t[o])):!1:En(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Ds(n);throw o.message.startsWith(Sn)||(o.message=`${Sn}: ${o.message}`),o}}function Us(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Fs(e){return pe(e).filter(t=>isNaN(Number(t)))}function Ys(e){return Fs(e).map(r=>e[r])}function Ws(e,t){return Ys(t).includes(e)}function qs(e,t){return pe(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Xs(e,t){return qs(e,r=>!t.includes(r))}function He(e,t){let r=!1;const n=pe(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(pe(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Gs(e){const t=Gr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Gr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Gr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Zs({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Ks(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(Re);return t.length?`?${t.join("&")}`:""}function Js(e){return Zs({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=js(n,"="),s=a.join("");if(!(!s&&!o))return[o,s]}).filter(Re)}function Qs(e,t){const r=q(e,"string")?new URL(e):e,n=Js(r.search),o=Object.fromEntries(n);return t&&Wo(o,t),o}function _n(e,t){try{return Xo(e,t),!0}catch{return!1}}function Xo(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ei(e,t){return ee(e,"entryType")&&e.entryType===t}var z;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(z||(z={}));function Le(e,t){return e.controlType===t}var S;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(S||(S={}));const Go=Symbol("any-type"),ti={[S.Checkbox]:!1,[S.Color]:"",[S.Dropdown]:"",[S.Hidden]:Go,[S.Number]:0,[S.Text]:""};function ri(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=ti[o.controlType];a!==Go&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Zr(e,t){const r=Lt(e.title);return e.parent?[...Zr(e.parent,!1),Lt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Lt(e){return zs(e).toLowerCase().replaceAll(/\s/g,"-")}function ni({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Pe(e){const t={...e,entryType:z.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:z.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Re)};r.add(n.title),t.elementExamples[Lt(o.title)]=o}}),t}var oe;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(oe||(oe={}));async function Mr(e=1){const t=Gr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const oi=globalThis.crypto;function ai(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return oi.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function si(e){return ii(e,1)}async function ii(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{Xo(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function Qe(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ye=e=>(...t)=>({_$litDirective$:e,values:t});let Be=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ir;const Ot=window,Ue=Ot.trustedTypes,Mn=Ue?Ue.createPolicy("lit-html",{createHTML:e=>e}):void 0,zt="$lit$",ce=`lit$${(Math.random()+"").slice(9)}$`,Kr="?"+ce,li=`<${Kr}>`,_e=document,ot=()=>_e.createComment(""),at=e=>e===null||typeof e!="object"&&typeof e!="function",Zo=Array.isArray,Ko=e=>Zo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",lr=`[ 	
\f\r]`,Ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tn=/-->/g,An=/>/g,we=RegExp(`>|${lr}(?:([^\\s"'>=/]+)(${lr}*=${lr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rn=/'/g,Pn=/"/g,Jo=/^(?:script|style|textarea|title)$/i,ci=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ui=ci(1),re=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Bn=new WeakMap,Se=_e.createTreeWalker(_e,129,null,!1);function Qo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mn!==void 0?Mn.createHTML(t):t}const ea=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Ze;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Ze?u[1]==="!--"?s=Tn:u[1]!==void 0?s=An:u[2]!==void 0?(Jo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=we):u[3]!==void 0&&(s=we):s===we?u[0]===">"?(s=o??Ze,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?we:u[3]==='"'?Pn:Rn):s===Pn||s===Rn?s=we:s===Tn||s===An?s=Ze:(s=we,o=void 0);const h=s===we&&e[i+1].startsWith("/>")?" ":"";a+=s===Ze?l+li:d>=0?(n.push(c),l.slice(0,d)+zt+l.slice(d)+ce+h):l+ce+(d===-2?(n.push(void 0),i):h)}return[Qo(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class st{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=ea(t,r);if(this.el=st.createElement(c,n),Se.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=Se.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(zt)||f.startsWith(ce)){const h=u[s++];if(d.push(f),h!==void 0){const m=o.getAttribute(h.toLowerCase()+zt).split(ce),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:g[2],strings:m,ctor:g[1]==="."?ra:g[1]==="?"?na:g[1]==="@"?oa:mt})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(Jo.test(o.tagName)){const d=o.textContent.split(ce),f=d.length-1;if(f>0){o.textContent=Ue?Ue.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],ot()),Se.nextNode(),l.push({type:2,index:++a});o.append(d[f],ot())}}}else if(o.nodeType===8)if(o.data===Kr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(ce,d+1))!==-1;)l.push({type:7,index:a}),d+=ce.length-1}a++}}static createElement(t,r){const n=_e.createElement("template");return n.innerHTML=t,n}}function Me(e,t,r=e,n){var o,a,s,i;if(t===re)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=at(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Me(e,l._$AS(e,t.values),l,n)),t}class ta{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:_e).importNode(n,!0);Se.currentNode=a;let s=Se.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new We(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new aa(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=Se.nextNode(),i++)}return Se.currentNode=_e,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class We{constructor(t,r,n,o){var a;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Me(this,t,r),at(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==re&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ko(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&at(this._$AH)?this._$AA.nextSibling.data=t:this.$(_e.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=st.createElement(Qo(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new ta(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=Bn.get(t.strings);return r===void 0&&Bn.set(t.strings,r=new st(t)),r}T(t){Zo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new We(this.k(ot()),this.k(ot()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class mt{constructor(t,r,n,o,a){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=Me(this,t,r,0),s=!at(t)||t!==this._$AH&&t!==re,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Me(this,i[n+l],r,l),c===re&&(c=this._$AH[l]),s||(s=!at(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ra extends mt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}const di=Ue?Ue.emptyScript:"";class na extends mt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,di):this.element.removeAttribute(this.name)}}class oa extends mt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Me(this,t,r,0))!==null&&n!==void 0?n:P)===re)return;const o=this._$AH,a=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==P&&(o===P||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class aa{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Me(this,t)}}const fi={O:zt,P:ce,A:Kr,C:1,M:ea,L:ta,R:Ko,D:Me,I:We,V:mt,H:na,N:oa,U:ra,F:aa},Nn=Ot.litHtmlPolyfillSupport;Nn==null||Nn(st,We),((ir=Ot.litHtmlVersions)!==null&&ir!==void 0?ir:Ot.litHtmlVersions=[]).push("2.8.0");const hi=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new We(t.insertBefore(ot(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:pi}=fi,Ln=()=>document.createComment(""),Ke=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(Ln(),a),i=o.insertBefore(Ln(),a);r=new pi(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},$e=(e,t,r=e)=>(e._$AI(t,r),e),mi={},gi=(e,t=mi)=>e._$AH=t,bi=e=>e._$AH,cr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=Ye(class extends Be{constructor(e){var t;if(super(e),e.type!==Zt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return re}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},yi=Ye(class extends Be{constructor(e){if(super(e),e.type!==Zt.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=bi(e),{values:s,keys:i}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=i,s;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,h=a.length-1,m=0,g=s.length-1;for(;f<=h&&m<=g;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[m])c[m]=$e(a[f],s[m]),f++,m++;else if(l[h]===i[g])c[g]=$e(a[h],s[g]),h--,g--;else if(l[f]===i[g])c[g]=$e(a[f],s[g]),Ke(e,c[g+1],a[f]),f++,g--;else if(l[h]===i[m])c[m]=$e(a[h],s[m]),Ke(e,a[f],a[h]),h--,m++;else if(u===void 0&&(u=On(i,m,g),d=On(l,f,h)),u.has(l[f]))if(u.has(l[h])){const y=d.get(i[m]),$=y!==void 0?a[y]:null;if($===null){const C=Ke(e,a[f]);$e(C,s[m]),c[m]=C}else c[m]=$e($,s[m]),Ke(e,a[f],$),a[y]=null;m++}else cr(a[h]),h--;else cr(a[f]),f++;for(;m<=g;){const y=Ke(e,c[g+1]);$e(y,s[m]),c[m++]=y}for(;f<=h;){const y=a[f++];y!==null&&cr(y)}return this.ut=i,gi(e,c),re}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tr=class extends Be{constructor(t){if(super(t),this.et=P,t.type!==Zt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.ft=void 0,this.et=t;if(t===re)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Tr.directiveName="unsafeHTML",Tr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let zn=class extends Tr{};zn.directiveName="unsafeSVG",zn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wi(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=window,Jr=Rt.ShadowRoot&&(Rt.ShadyCSS===void 0||Rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qr=Symbol(),In=new WeakMap;let sa=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Jr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=In.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&In.set(r,t))}return t}toString(){return this.cssText}};const O=e=>new sa(typeof e=="string"?e:e+"",void 0,Qr),tt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new sa(r,e,Qr)},$i=(e,t)=>{Jr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Rt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Vn=Jr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return O(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ur;const It=window,jn=It.trustedTypes,ki=jn?jn.emptyScript:"",Dn=It.reactiveElementPolyfillSupport,Ar={toAttribute(e,t){switch(t){case Boolean:e=e?ki:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ia=(e,t)=>t!==e&&(t==t||e==e),dr={attribute:!0,type:String,converter:Ar,reflect:!1,hasChanged:ia},Rr="finalized";class Ve extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=dr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||dr}static finalize(){if(this.hasOwnProperty(Rr))return!1;this[Rr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Vn(o))}else t!==void 0&&r.push(Vn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $i(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=dr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Ar).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Ar;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ia)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Ve[Rr]=!0,Ve.elementProperties=new Map,Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},Dn==null||Dn({ReactiveElement:Ve}),((ur=It.reactiveElementVersions)!==null&&ur!==void 0?ur:It.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fr,hr;class rt extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return re}}rt.finalized=!0,rt._$litElement$=!0,(fr=globalThis.litElementHydrateSupport)===null||fr===void 0||fr.call(globalThis,{LitElement:rt});const Hn=globalThis.litElementPolyfillSupport;Hn==null||Hn({LitElement:rt});((hr=globalThis.litElementVersions)!==null&&hr!==void 0?hr:globalThis.litElementVersions=[]).push("3.3.3");var xi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s($){if($!==void 0&&typeof $!="function")throw new TypeError("Function expected");return $}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var m={};for(var g in n)m[g]=g==="access"?{}:n[g];for(var g in n.access)m.access[g]=n.access[g];m.addInitializer=function($){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s($||null))};var y=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],m);if(i==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=s(y.get))&&(u.get=d),(d=s(y.set))&&(u.set=d),(d=s(y.init))&&o.unshift(d)}else(d=s(y))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Ci=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Si=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Ei(){function e(t,r){return t}return e}let la=(()=>{let e=[Ei()],t,r=[],n,o=rt;return n=class extends o{},Si(n,"DeclarativeElement"),(()=>{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;xi(null,t={value:n},e,{kind:"class",name:n.name,metadata:a},null,r),n=t.value,a&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),Ci(n,r)})(),n})();function _i(e){return!!e}const Mi={capitalizeFirstLetter:!1};function Ti(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Ai(e,t){return t.capitalizeFirstLetter?Ti(e):e}function Ri(e,t=Mi){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Ai(n,t)}var Un;(function(e){e.Upper="upper",e.Lower="lower"})(Un||(Un={}));function Pi(e){return e?e instanceof Error?e.message:en(e,"message")?String(e.message):String(e):""}function Bi(e){return e instanceof Error?e:new Error(Pi(e))}function Ni(e){return!!e&&typeof e=="object"}const Li=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function en(e,t){return e?Li.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Te(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ca(e,t){let r=!1;const n=Te(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Te(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Ne(e){if(ue(e))return He(e,(r,n)=>{if(!q(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Vs(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?O(r):r.startsWith("-")?tt`-${O(r)}`:tt`--${O(r)}`;return{name:s,value:tt`var(${s}, ${O(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${Ne.name}' function.`)}function Oi({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Ii=(e,t,r)=>{t.constructor.createProperty(r,e)};function ua(e){return(t,r)=>r!==void 0?Ii(e,t,r):zi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pr;((pr=window.HTMLSlotElement)===null||pr===void 0?void 0:pr.prototype.assignedElements)!=null;const tn=Symbol("key for ignoring inputs not having been set yet"),Vi={[tn]:!0,allowPolymorphicState:!1};function da(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof la?!0:da(r)}function fa(e,t){const r=e.instanceState;Te(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Te(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),ji(e)}function ji(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Fn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Di extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function rn(){return e=>{var t;return t=class extends Di{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Ae(){return rn()}function Hi(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=rn()(r);return t[r]=n,t},{}):{}}const Ui="_elementVirStateSetup";function Fi(e){return Ni(e)?Ui in e:!1}function Yi(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return _r(e)===_r(t)&&r}const ha=Symbol("and"),pa=Symbol("or"),ma=Symbol("exact"),ga=Symbol("enum"),nn=Symbol("unknown"),ba="__vir__shape__definition__key__do__not__use__in__actual__objects";function va(e){return ee(e,ba)}const ya="__vir__shape__specifier__key__do__not__use__in__actual__objects",Wi=[ha,pa,ma,ga,nn];function qi(){return Xi([],nn)}function Kt(e){return gt(e,pa)}function on(e){return gt(e,ha)}function an(e){return gt(e,ma)}function sn(e){return gt(e,ga)}function ln(e){return gt(e,nn)}function gt(e,t){const r=Jt(e);return!!r&&r.specifierType===t}function Xi(e,t){return{[ya]:!0,specifierType:t,parts:e}}function Pt(e,t){const r=Jt(t);if(r){if(on(r))return r.parts.every(n=>Pt(e,n));if(Kt(r))return r.parts.some(n=>Pt(e,n));if(an(r))return ue(e)?Pt(e,r.parts[0]):e===r.parts[0];if(sn(r))return Object.values(r.parts[0]).some(n=>n===e);if(ln(r))return!0}return Yi(e,t)}function Jt(e){if(ue(e)&&ee(e,ya)){if(!ee(e,"parts")||!q(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!ee(e,"specifierType")||!Os(Wi,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Pr(e){return Br(e)}function Br(e){const t=Jt(e);if(t){if(Kt(t)||an(t))return Br(t.parts[0]);if(on(t))return t.parts.reduce((r,n)=>Object.assign(r,Br(n)),{});if(sn(t))return Object.values(t.parts[0])[0];if(ln(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return va(e)?Pr(e.shape):e instanceof RegExp||q(e,"array")?e:ue(e)?He(e,(r,n)=>Pr(n)):e}function Gi(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Pr(e),[ba]:!0}}class J extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Zi(e,t,r={}){try{return Ki(e,t,r),!0}catch{return!1}}function Ki(e,t,r={}){xe(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function wa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function xe(e,t,r,n){if(ln(t))return!0;if(va(t))return xe(e,t.shape,r,n);const o=wa(r);if(Jt(e))throw new J(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Pt(e,t))throw new J(`Subject does not match shape definition at key ${o}`);if(q(t,"function"))return q(e,"function");if(ue(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(Kt(t))l=t.parts.some(c=>{try{const u=xe(e,c,r,{...n});return Object.assign(i,u),!0}catch(u){if(u instanceof J)return!1;throw u}});else if(on(t))l=t.parts.every(c=>{try{const u=xe(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof J)return!1;throw u}});else if(an(t)){const c=xe(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(sn(t))throw new J(`Cannot compare an enum specifier to an object at ${o}`);if(q(t,"array")&&q(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return xe(c,f,[...r,u],n),!0}catch(h){if(h instanceof J)return!1;throw h}});return i[u]=d,d});else{const c=Ji({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(i).filter(d=>!i[d]).join(",")}`;throw new J(u)}return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new J(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function Ji({keys:e,options:t,shape:r,subject:n}){const o=wa(e),a={};if(ue(r)){const s=new Set(pe(n)),i=new Set(pe(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new J(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=Kt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new J(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];xe(c,u,[...e,l],t),a[l]=!0})}else throw new J(`shape definition at ${o} was not an object.`);return a}const Qi=Gi({addListener(){return!1},removeListener(){return!1},value:qi()});function mr(e){return Zi(e,Qi,{allowExtraKeys:!0})}function el(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Yn(e,t){const r=e;function n(s){t?el(s,e,e.tagName):ua()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Fi(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(m){s[i]=m,r[i]=m}const f=e.observablePropertyListenerMap[i];if(u!==c&&mr(u)&&(f!=null&&f.length)&&u.removeListener(f),mr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[i]=m,c.addListener(m)}else mr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function tl(e){return e?ca(e,t=>t):{}}function rl({hostClassNames:e,cssVars:t}){return{hostClasses:ca(e,(r,n)=>({name:O(n),selector:O(`:host(.${n})`)})),cssVars:t}}function nl({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Te(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function ol(e,t){function r(o){Te(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var al=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Qt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Vi,...e.options},n=Hi(e.events),o=tl(e.hostClasses);e.hostClasses&&Fn(e.tagName,e.hostClasses),e.cssVars&&Fn(e.tagName,e.cssVars);const a=e.cssVars?Ne(e.cssVars):{},s=typeof e.styles=="function"?e.styles(rl({hostClassNames:o,cssVars:a})):e.styles||tt``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends la{createRenderParams(){return ol(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{da(this)&&!this.haveInputsBeenSet&&!r[tn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Qt.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return nl({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Bi(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){fa(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Yn(this,!1),this.instanceState=Yn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};Te(u).forEach(f=>{ua()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},al(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Ri(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function $a(){return e=>Qt({...e,options:{[tn]:!1,...e.options}})}function ka(e,t){return it(e,t),e.element}function sl(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function it(e,t){const r=sl(e),n=r?`: in ${r}`:"";if(e.type!==Zt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function il(e,t){return t?Wn(e,t):Wn(void 0,e)}const Wn=Ye(class extends Be{constructor(e){super(e),this.element=ka(e,"assign")}render(e,t){return fa(this.element,t),re}});function B(e,t){return ll(e,t)}const ll=Ye(class extends Be{constructor(e){super(e),this.element=ka(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),re}}),qn="onDomCreated",Xn=Ye(class extends Be{constructor(e){super(e),it(e,qn)}update(e,[t]){it(e,qn);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),gr="onResize",xa=Ye(class extends Be{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),it(e,gr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${gr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){it(e,gr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function te(e,t,r){return wi(e,()=>t,()=>r)}function Ca(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),$a()(r(n))),defineElementNoInputs:n=>(t(n),Qt(r(n)))}}function Nr(e){return en(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function cn(e){return en(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function cl(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Sa(e){return e.map(t=>Nr(t)?t.definition:t).filter(t=>cn(t))}const Ea=new WeakMap;function ul(e,t){var o;const r=Sa(t);return(o=_a(Ea,[e,...r]).value)==null?void 0:o.template}function dl(e,t,r){const n=Sa(t);return Ta(Ea,[e,...n],r)}function _a(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Ma(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?_a(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Ma(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ta(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Ma(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Ta(l,t,r,n+1)}const fl=new WeakMap;function Aa(e,t,r){const n=ul(e,t),o=n??r();if(!n){const i=dl(e,t,o);if(i.result)fl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=cl(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Ra(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let g,y=[];if(typeof f=="string"&&(g=r(f,c,m),g)){o[d]=f+g.replacement,s.push(h);const C=g.getExtraValues;y=C?C(m):[],y.length&&C?(o[d]+=" ",y.forEach((R,A)=>{A&&o.push(" ")}),i.push(R=>{const A=R[h],V=C(A);return{index:h,values:V}}),o.push(c)):o[d]+=c}g||o.push(c);const $=e.raw[u];g?(a[d]=a[d]+g.replacement+$,y.length&&y.forEach(()=>{a.push("")})):a.push($)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function hl(...[e,t,r]){if(cn(r))return{replacement:r.tagName,getExtraValues:void 0}}function pl(e,t){return Ra(e,t,hl)}function v(e,...t){const r=Aa(e,t,()=>pl(e,t));return tt(r.strings,...r.values)}function ml(...[e,t,r]){const n=Nr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=cn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Nr(c)?c.inputs:void 0;return[o&&u?il(u):void 0].filter(_i)}}}function gl(e){}function bl(e){return Ra(e.strings,e.values,ml,gl)}function p(e,...t){const r=ui(e,...t),n=Aa(e,t,()=>bl(r));return{...r,strings:n.strings,values:n.values}}const vl={[z.ElementExample]:()=>[],[z.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...ri(e.controls,e.title)].filter(Re),[z.Root]:()=>[]},Vt="_isBookTreeNode",Pa=new Map;function yl(e){return Pa.get(e)}function wl(e,t){Us(Pa,e,()=>t)}function je(e,t){return!!(Ba(e)&&e.entry.entryType===t)}function Ba(e){return!!(Yo(e,[Vt,"entry"])&&e[Vt])}function $l(){return{[Vt]:!0,entry:{entryType:z.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function kl({entries:e,debug:t}){const r=yl(e);if(r)return r;const n=$l();e.forEach(s=>un({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Na(n),a={tree:n,flattenedNodes:o};return wl(e,a),t&&console.info("element-book tree:",n),a}function xl(e,t,r){if(!t.parent)return e;const n=Lr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),un({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Lr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Zr(t,!1)}`);return o}function un({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=vl[t.entryType](t);t.errors.push(...o);const a=xl(e,t,r),s=Lt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Vt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,ei(t,z.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>un({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Lr(e,t){const r=Ba(e)?e.fullUrlBreadcrumbs.slice(0,-1):Zr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Na(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Na(o));return[e,...r].flat()}function dn(e,t){return fn(e,["",...t],void 0)}function fn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&fn(a,n,r);return{...e.controls,...s}}function Cl(e,t,r){const n={...e};return fn(n,["",...t],r),n}function La(e,t){const r=(t==null?void 0:t.controls)||(je(e,z.Page)?He(e.entry.controls,(o,a)=>a.initValue):{});return{children:He(e.children,(o,a)=>{var s;return La(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function Sl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const El=ai(32);function Bt(e){return e.join(El)}function Oa(e){if(!e.length)return[];const t=Bt(e),r=Oa(e.slice(0,-1));return[t,...r]}const _l=["error","errors"];function Ml(e){return _l.includes(e)}function Tl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Bt(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&Ml(t),s=Bt(o.fullUrlBreadcrumbs);if(Sl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=Oa(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=Bt(o.fullUrlBreadcrumbs),s=r[a];if(!q(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var D;(function(e){e.Search="search",e.Book="book"})(D||(D={}));function Or(e){return e[0]===D.Book?"":e[1]?decodeURIComponent(e[1]):""}const Fe={hash:void 0,paths:[D.Book],search:void 0},Al=0;function za(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Al)}class er extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Gn extends er{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const lt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Rl=globalThis.history.pushState;function Zn(...e){const t=Rl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(lt)),t}const Pl=globalThis.history.replaceState;function Kn(...e){const t=Pl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(lt)),t}function Bl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Zn)throw new Gn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Kn)throw new Gn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Zn,globalThis.history.replaceState=Kn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(lt))})}}function Nl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Qs(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function Ia(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Va({routeBase:e,windowPath:t}){if(!e)return"";const r=Ia(e);if(ja({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Va({routeBase:n,windowPath:t}):""}function ja({routeBase:e,windowPath:t}){const r=Ia(e);return r?t.startsWith(`/${r}`):!1}class Ll extends er{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Da(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Jn=6;function Qn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Jn)throw new Ll(`Route sanitization depth has exceed the max of ${Jn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Da(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class br extends er{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Ol(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new br(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new br(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new br(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function zl(e,t,r=!1){const n=Ha(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ha(e,t){var i;const r=ja({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Ks(e.search):"",o=(i=e.hash)!=null&&i.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(Re).join("/")}${n}${a}`}function Il(e={}){Ol(e),Bl();const t=e.routeBase?Va({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Qn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Da(l,u)))return zl(u,t,s)},createRoutesUrl(a){return Ha(a,t)},getCurrentRawRoutes(){return Nl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new er(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(lt,n),r=!0),a&&Qn(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(lt,n),r=!1),s},sanitizationDepth:0};return o}function Vl(e){return Il({routeBase:e,routeSanitizer(t){return{paths:jl(t.paths),hash:void 0,search:void 0}}})}function jl(e){const t=e[0];if(Ws(t,D)){if(t===D.Book)return[D.Book,...e.slice(1)];if(t===D.Search)return e[1]?[t,e[1]]:[D.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Fe.paths}const k=Ne({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Dl={nav:{hover:{background:k["element-book-nav-hover-background-color"],foreground:k["element-book-nav-hover-foreground-color"]},active:{background:k["element-book-nav-active-background-color"],foreground:k["element-book-nav-active-foreground-color"]},selected:{background:k["element-book-nav-selected-background-color"],foreground:k["element-book-nav-selected-foreground-color"]}},accent:{icon:k["element-book-accent-icon-color"]},page:{background:k["element-book-page-background-color"],backgroundFaint1:k["element-book-page-background-faint-level-1-color"],backgroundFaint2:k["element-book-page-background-faint-level-2-color"],foreground:k["element-book-page-foreground-color"],foregroundFaint1:k["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:k["element-book-page-foreground-faint-level-2-color"]}};function Hl(e,t){Ua(e,t,Dl)}function zr(e){return ee(e,"_$cssResult$")}function eo(e){return Yo(e,["name","value","default"])&&q(e.default,"string")&&zr(e.name)&&zr(e.value)}function Ua(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(zr(o)){if(!eo(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Oi({forCssVar:a,onElement:e,toValue:String(o)})}else{if(eo(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ua(e,o,a)}})}function N(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function bt(e){return fe(e)==="string"}function fe(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function jt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Fa(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Ya(e){return e[e.length-1]}function Dt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Wa(e,t,r){return(r-e)/(t-e)}function hn(e,t,r){return Dt(t[0],t[1],Wa(e[0],e[1],r))}function qa(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Ul=Object.freeze({__proto__:null,interpolate:Dt,interpolateInv:Wa,isString:bt,last:Ya,mapRange:hn,multiplyMatrices:N,parseCoordGrammar:qa,parseFunction:Fa,toPrecision:jt,type:fe});class Fl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const me=new Fl;var ae={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Q={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ir(e){return Array.isArray(e)?e:Q[e]}function Ht(e,t,r,n={}){if(e=Ir(e),t=Ir(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(me.run("chromatic-adaptation-start",o),o.M||(o.W1===Q.D65&&o.W2===Q.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Q.D50&&o.W2===Q.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),me.run("chromatic-adaptation-end",o),o.M)return N(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Yl=75e-6,F=class F{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?F.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ir(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Wl(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),me.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Yl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=to(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=to(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=F.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=F.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(F.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof F)return t;if(fe(t)==="string"){let o=F.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return F.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=fe(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=F.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=fe(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=F.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};sr(F,"registry",{}),sr(F,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=F;function Wl(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function to(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=qa(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=hn(i,l,a)),a=jt(a,o),c&&(a+=c),a})}return e}var G=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class H extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=G),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=N(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ht(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Ht(this.base.white,this.white,r),N(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Xa(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(me.run("parse-start",r),r.color)return r.color;if(r.parsed=Fa(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((g,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Ya(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([m,g],y)=>{var ne;let $=u.coordGrammar[y],C=(ne=f[y])==null?void 0:ne.type,R=$.find(U=>U==C);if(!R){let U=g.name||m;throw new TypeError(`${C} not allowed for ${U} in ${l}()`)}let A=R.range;C==="<percentage>"&&(A||(A=[0,1]));let V=g.range||g.refRange;return A&&V&&(f[y]=hn(A,V,f[y])),R})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function x(e){if(!e)throw new TypeError("Empty color reference");bt(e)&&(e=Xa(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function vt(e,t){return t=b.get(t),t.from(e)}function Z(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return vt(e,r)[n]}function Ga(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function ge(e,t,r){if(e=x(e),arguments.length===2&&fe(arguments[1])==="object"){let n=arguments[1];for(let o in n)ge(e,o,n[o])}else{typeof r=="function"&&(r=r(Z(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=vt(e,n);a[o]=r,Ga(e,n,a)}return e}var pn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:G,fromBase:e=>Ht(G.white,"D50",e),toBase:e=>Ht("D50",G.white,e),formats:{color:{}}});const ql=216/24389,ro=24/116,kt=24389/27;let vr=Q.D50;var Y=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:vr,base:pn,fromBase(e){let r=e.map((n,o)=>n/vr[o]).map(n=>n>ql?Math.cbrt(n):(kt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ro?Math.pow(t[0],3):(116*t[0]-16)/kt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/kt,t[2]>ro?Math.pow(t[2],3):(116*t[2]-16)/kt].map((n,o)=>n*vr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function tr(e){return(e%360+360)%360}function Xl(e,t){if(e==="raw")return t;let[r,n]=t.map(tr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var ct=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Y,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const no=25**7,Ut=Math.PI,oo=180/Ut,Oe=Ut/180;function Vr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=Y.from(e),l=ct.from(Y,[a,s,i])[1],[c,u,d]=Y.from(t),f=ct.from(Y,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,g=.5*(1-Math.sqrt(m/(m+no))),y=(1+g)*s,$=(1+g)*u,C=Math.sqrt(y**2+i**2),R=Math.sqrt($**2+d**2),A=y===0&&i===0?0:Math.atan2(i,y),V=$===0&&d===0?0:Math.atan2(d,$);A<0&&(A+=2*Ut),V<0&&(V+=2*Ut),A*=oo,V*=oo;let ne=c-a,U=R-C,M=V-A,I=A+V,or=Math.abs(M),Xe;C*R===0?Xe=0:or<=180?Xe=M:M>180?Xe=M-360:M<-180?Xe=M+360:console.log("the unthinkable has happened");let vn=2*Math.sqrt(R*C)*Math.sin(Xe*Oe/2),Ts=(a+c)/2,ar=(C+R)/2,yn=Math.pow(ar,7),ie;C*R===0?ie=I:or<=180?ie=I/2:I<360?ie=(I+360)/2:ie=(I-360)/2;let wn=(Ts-50)**2,As=1+.015*wn/Math.sqrt(20+wn),$n=1+.045*ar,Ge=1;Ge-=.17*Math.cos((ie-30)*Oe),Ge+=.24*Math.cos(2*ie*Oe),Ge+=.32*Math.cos((3*ie+6)*Oe),Ge-=.2*Math.cos((4*ie-63)*Oe);let kn=1+.015*ar*Ge,Rs=30*Math.exp(-1*((ie-275)/25)**2),Ps=2*Math.sqrt(yn/(yn+no)),Bs=-1*Math.sin(2*Rs*Oe)*Ps,$t=(ne/(r*As))**2;return $t+=(U/(n*$n))**2,$t+=(vn/(o*kn))**2,$t+=Bs*(U/(n*$n))*(vn/(o*kn)),Math.sqrt($t)}const Gl=75e-6;function nt(e,t=e.space,{epsilon:r=Gl}={}){e=x(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ut(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function be(e,{method:t=ae.gamut_mapping,space:r=e.space}={}){if(bt(arguments[1])&&(r=arguments[1]),r=b.get(r),nt(e,r,{epsilon:0}))return x(e);let n=X(e,r);if(t!=="clip"&&!nt(e,r)){let o=be(ut(n),{method:"clip",space:r});if(Vr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=X(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=Z(l,i);for(;h-f>d;){let m=ut(l);m=be(m,{space:r,method:"clip"}),Vr(l,m)-2<d?f=Z(l,i):h=Z(l,i),ge(l,i,(f+h)/2)}n=X(l,r)}else n=o}if(t==="clip"||!nt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=X(n,e.space)),e.coords=n.coords,e}be.returns="color";function X(e,t,{inGamut:r}={}){e=x(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=be(o)),o}X.returns="color";function Ft(e,{precision:t=ae.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=x(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!nt(e)&&(i=be(ut(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>jt(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=jt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Zl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Kl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var rr=new H({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Zl,fromXYZ_M:Kl,formats:{color:{}}});const xt=1.09929682680944,ao=.018053968510807;var Za=new H({id:"rec2020",name:"REC.2020",base:rr,toBase(e){return e.map(function(t){return t<ao*4.5?t/4.5:Math.pow((t+xt-1)/xt,1/.45)})},fromBase(e){return e.map(function(t){return t>=ao?xt*Math.pow(t,.45)-(xt-1):4.5*t})},formats:{color:{}}});const Jl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Ql=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ka=new H({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Jl,fromXYZ_M:Ql});const ec=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],tc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ja=new H({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:ec,fromXYZ_M:tc,formats:{color:{}}}),so={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let io=Array(3).fill("<percentage> | <number>[0, 255]"),lo=Array(3).fill("<number>[0, 255]");var dt=new H({id:"srgb",name:"sRGB",base:Ja,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:io},rgb_number:{name:"rgb",commas:!0,coords:lo,noAlpha:!0},color:{},rgba:{coords:io,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:lo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=so.black,t.alpha=0):t.coords=so[e],t.coords)return t}}}}),Qa=new H({id:"p3",name:"P3",base:Ka,fromBase:dt.fromBase,toBase:dt.toBase,formats:{color:{id:"display-p3"}}});ae.display_space=dt;if(typeof CSS<"u"&&CSS.supports)for(let e of[Y,Za,Qa]){let t=e.getMinCoords(),n=Ft({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ae.display_space=e;break}}function rc(e,{space:t=ae.display_space,...r}={}){let n=Ft(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ae.display_space)n=new String(n),n.color=e;else{let o=X(e,t);n=new String(Ft(o,r)),n.color=o}return n}function es(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function nc(e,t){return e=x(e),t=x(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ve(e){return Z(e,[G,"y"])}function ts(e,t){ge(e,[G,"y"],t)}function oc(e){Object.defineProperty(e.prototype,"luminance",{get(){return ve(this)},set(t){ts(this,t)}})}var ac=Object.freeze({__proto__:null,getLuminance:ve,register:oc,setLuminance:ts});function sc(e,t){e=x(e),t=x(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const ic=.56,lc=.57,cc=.62,uc=.65,co=.022,dc=1.414,fc=.1,hc=5e-4,pc=1.14,uo=.027,mc=1.14;function fo(e){return e>=co?e:e+(co-e)**dc}function ze(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function gc(e,t){t=x(t),e=x(e);let r,n,o,a,s,i;t=X(t,"srgb"),[a,s,i]=t.coords;let l=ze(a)*.2126729+ze(s)*.7151522+ze(i)*.072175;e=X(e,"srgb"),[a,s,i]=e.coords;let c=ze(a)*.2126729+ze(s)*.7151522+ze(i)*.072175,u=fo(l),d=fo(c),f=d>u;return Math.abs(d-u)<hc?n=0:f?(r=d**ic-u**lc,n=r*pc):(r=d**uc-u**cc,n=r*mc),Math.abs(n)<fc?o=0:n>0?o=n-uo:o=n+uo,o*100}function bc(e,t){e=x(e),t=x(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const vc=5e4;function yc(e,t){e=x(e),t=x(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),n===0?vc:(r-n)/n}function wc(e,t){e=x(e),t=x(t);let r=Z(e,[Y,"l"]),n=Z(t,[Y,"l"]);return Math.abs(r-n)}const $c=216/24389,ho=24/116,Ct=24389/27;let yr=Q.D65;var jr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:yr,base:G,fromBase(e){let r=e.map((n,o)=>n/yr[o]).map(n=>n>$c?Math.cbrt(n):(Ct*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ho?Math.pow(t[0],3):(116*t[0]-16)/Ct,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ct,t[2]>ho?Math.pow(t[2],3):(116*t[2]-16)/Ct].map((n,o)=>n*yr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const wr=Math.pow(5,.5)*.5+.5;function kc(e,t){e=x(e),t=x(t);let r=Z(e,[jr,"l"]),n=Z(t,[jr,"l"]),o=Math.abs(Math.pow(r,wr)-Math.pow(n,wr)),a=Math.pow(o,1/wr)*Math.SQRT2-40;return a<7.5?0:a}var Nt=Object.freeze({__proto__:null,contrastAPCA:gc,contrastDeltaPhi:kc,contrastLstar:wc,contrastMichelson:bc,contrastWCAG21:sc,contrastWeber:yc});function xc(e,t,r={}){bt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Nt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=x(e),t=x(t);for(let a in Nt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Nt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function rs(e){let[t,r,n]=vt(e,G),o=t+15*r+3*n;return[4*t/o,9*r/o]}function ns(e){let[t,r,n]=vt(e,G),o=t+r+n;return[t/o,r/o]}function Cc(e){Object.defineProperty(e.prototype,"uv",{get(){return rs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ns(this)}})}var Sc=Object.freeze({__proto__:null,register:Cc,uv:rs,xy:ns});function Ec(e,t){return es(e,t,"lab")}const _c=Math.PI,po=_c/180;function Mc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=Y.from(e),[,i,l]=ct.from(Y,[o,a,s]),[c,u,d]=Y.from(t),f=ct.from(Y,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,m=i-f,g=a-u,y=s-d,$=g**2+y**2-m**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let R=.0638*i/(1+.0131*i)+.638,A;Number.isNaN(l)&&(l=0),l>=164&&l<=345?A=.56+Math.abs(.2*Math.cos((l+168)*po)):A=.36+Math.abs(.4*Math.cos((l+35)*po));let V=Math.pow(i,4),ne=Math.sqrt(V/(V+1900)),U=R*(ne*A+1-ne),M=(h/(r*C))**2;return M+=(m/(n*R))**2,M+=$/U**2,Math.sqrt(M)}const mo=203;var mn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:G,fromBase(e){return e.map(t=>Math.max(t*mo,0))},toBase(e){return e.map(t=>Math.max(t/mo,0))}});const St=1.15,Et=.66,go=2610/2**14,Tc=2**14/2610,bo=3424/2**12,vo=2413/2**7,yo=2392/2**7,Ac=1.7*2523/2**5,wo=2**5/(1.7*2523),_t=-.56,$r=16295499532821565e-27,Rc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Pc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Bc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Nc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var os=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:mn,fromBase(e){let[t,r,n]=e,o=St*t-(St-1)*n,a=Et*r-(Et-1)*t,i=N(Rc,[o,a,n]).map(function(f){let h=bo+vo*(f/1e4)**go,m=1+yo*(f/1e4)**go;return(h/m)**Ac}),[l,c,u]=N(Bc,i);return[(1+_t)*l/(1+_t*l)-$r,c,u]},toBase(e){let[t,r,n]=e,o=(t+$r)/(1+_t-_t*(t+$r)),s=N(Nc,[o,r,n]).map(function(f){let h=bo-f**wo,m=yo*f**wo-vo;return 1e4*(h/m)**Tc}),[i,l,c]=N(Pc,s),u=(i+(St-1)*c)/St,d=(l+(Et-1)*u)/Et;return[u,d,c]},formats:{color:{}}}),Dr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:os,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Lc(e,t){let[r,n,o]=Dr.from(e),[a,s,i]=Dr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const as=3424/4096,ss=2413/128,is=2392/128,$o=2610/16384,Oc=2523/32,zc=16384/2610,ko=32/2523,Ic=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Vc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],jc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Dc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Hr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:mn,fromBase(e){let t=N(Ic,e);return Hc(t)},toBase(e){let t=Uc(e);return N(Dc,t)},formats:{color:{}}});function Hc(e){let t=e.map(function(r){let n=as+ss*(r/1e4)**$o,o=1+is*(r/1e4)**$o;return(n/o)**Oc});return N(Vc,t)}function Uc(e){return N(jc,e).map(function(n){let o=Math.max(n**ko-as,0),a=ss-is*n**ko;return 1e4*(o/a)**zc})}function Fc(e,t){let[r,n,o]=Hr.from(e),[a,s,i]=Hr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Yc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Wc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],qc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Xc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Yt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:G,fromBase(e){let r=N(Yc,e).map(n=>Math.cbrt(n));return N(qc,r)},toBase(e){let r=N(Xc,e).map(n=>n**3);return N(Wc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Gc(e,t){let[r,n,o]=Yt.from(e),[a,s,i]=Yt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Wt={deltaE76:Ec,deltaECMC:Mc,deltaE2000:Vr,deltaEJz:Lc,deltaEITP:Fc,deltaEOK:Gc};function et(e,t,r={}){bt(r)&&(r={method:r});let{method:n=ae.deltaE,...o}=r;e=x(e),t=x(t);for(let a in Wt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Wt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Zc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1+t))}function Kc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1-t))}var Jc=Object.freeze({__proto__:null,darken:Kc,lighten:Zc});function ls(e,t,r=.5,n={}){[e,t]=[x(e),x(t)],fe(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return yt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function cs(e,t,r={}){let n;gn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[x(e),x(t)],n=yt(e,t,l));let c=et(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,m,g)=>{if(g===0)return 0;let y=et(m.color,d[g-1].color,a);return Math.max(h,y)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let m=d[h-1],g=d[h],y=(g.p+m.p)/2,$=n(y);f=Math.max(f,et($,m.color),et($,g.color)),d.splice(h,0,{p:y,color:n(y)}),h++}}}return d=d.map(f=>f.color),d}function yt(e,t,r={}){if(gn(e)){let[l,c]=[e,t];return yt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=x(e),t=x(t),e=ut(e),t=ut(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[ae.interpolationSpace]||e.space,o=o?b.get(o):n,e=X(e,n),t=X(t,n),e=be(e),t=be(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Z(e,c),Z(t,c)];[u,d]=Xl(l,[u,d]),ge(e,c,u),ge(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return Dt(f,m,l)}),u=Dt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=X(d,o)),d},{rangeArgs:i})}function gn(e){return fe(e)==="function"&&!!e.rangeArgs}ae.interpolationSpace="lab";function Qc(e){e.defineFunction("mix",ls,{returns:"color"}),e.defineFunction("range",yt,{returns:"function<color>"}),e.defineFunction("steps",cs,{returns:"array<color>"})}var eu=Object.freeze({__proto__:null,isRange:gn,mix:ls,range:yt,register:Qc,steps:cs}),us=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ds=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:us,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),tu=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ds,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const ru=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],nu=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var fs=new H({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:ru,fromXYZ_M:nu}),ou=new H({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:fs,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const au=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],su=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var hs=new H({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:pn,toXYZ_M:au,fromXYZ_M:su});const iu=1/512,lu=16/512;var cu=new H({id:"prophoto",name:"ProPhoto",base:hs,toBase(e){return e.map(t=>t<lu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=iu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),uu=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Yt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const xo=203,Co=2610/2**14,du=2**14/2610,fu=2523/2**5,So=2**5/2523,Eo=3424/2**12,_o=2413/2**7,Mo=2392/2**7;var hu=new H({id:"rec2100pq",name:"REC.2100-PQ",base:rr,toBase(e){return e.map(function(t){return(Math.max(t**So-Eo,0)/(_o-Mo*t**So))**du*1e4/xo})},fromBase(e){return e.map(function(t){let r=Math.max(t*xo/1e4,0),n=Eo+_o*r**Co,o=1+Mo*r**Co;return(n/o)**fu})},formats:{color:{id:"rec2100-pq"}}});const To=.17883277,Ao=.28466892,Ro=.55991073,kr=3.7743;var pu=new H({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:rr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*kr:(Math.exp((t-Ro)/To)+Ao)/12*kr})},fromBase(e){return e.map(function(t){return t/=kr,t<=1/12?Math.sqrt(3*t):To*Math.log(12*t-Ao)+Ro})},formats:{color:{id:"rec2100-hlg"}}});const ps={};me.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=ms(e.W1,e.W2,e.options.method))});me.add("chromatic-adaptation-end",e=>{e.M||(e.M=ms(e.W1,e.W2,e.options.method))});function nr({id:e,toCone_M:t,fromCone_M:r}){ps[e]=arguments[0]}function ms(e,t,r="Bradford"){let n=ps[r],[o,a,s]=N(n.toCone_M,e),[i,l,c]=N(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=N(u,n.toCone_M);return N(n.fromCone_M,d)}nr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});nr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});nr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});nr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Q,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Q.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const mu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],gu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var gs=new H({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Q.ACES,toXYZ_M:mu,fromXYZ_M:gu,formats:{color:{}}});const Mt=2**-16,xr=-.35828683,Tt=(Math.log2(65504)+9.72)/17.52;var bu=new H({id:"acescc",name:"ACEScc",coords:{r:{range:[xr,Tt],name:"Red"},g:{range:[xr,Tt],name:"Green"},b:{range:[xr,Tt],name:"Blue"}},referred:"scene",base:gs,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Mt)*2:r<Tt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Mt)+9.72)/17.52:t<Mt?(Math.log2(Mt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Po=Object.freeze({__proto__:null,A98RGB:ou,A98RGB_Linear:fs,ACEScc:bu,ACEScg:gs,HSL:us,HSV:ds,HWB:tu,ICTCP:Hr,JzCzHz:Dr,Jzazbz:os,LCH:ct,Lab:Y,Lab_D65:jr,OKLCH:uu,OKLab:Yt,P3:Qa,P3_Linear:Ka,ProPhoto:cu,ProPhoto_Linear:hs,REC_2020:Za,REC_2020_Linear:rr,REC_2100_HLG:pu,REC_2100_PQ:hu,XYZ_ABS_D65:mn,XYZ_D50:pn,XYZ_D65:G,sRGB:dt,sRGB_Linear:Ja});let E=class j{constructor(...t){let r;t.length===1&&(r=x(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new j(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=rc(this,...t);return r.color=new j(r.color),r}static get(t,...r){return t instanceof j?t:new j(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=j.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return j.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>j.get(c)));return l};t in j||(j[t]=s),o&&(j.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)j.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(j);else for(let r in t)j.defineFunction(r,t[r])}};E.defineFunctions({get:Z,getAll:vt,set:ge,setAll:Ga,to:X,equals:nc,inGamut:nt,toGamut:be,distance:es,toString:Ft});Object.assign(E,{util:Ul,hooks:me,WHITES:Q,Space:b,spaces:b.registry,parse:Xa,defaults:ae});for(let e of Object.keys(Po))b.register(Po[e]);for(let e in b.registry)Ur(e,b.registry[e]);me.add("colorspace-init-end",e=>{var t;Ur(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ur(r,e)})});function Ur(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(E.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}E.extend(Wt);E.extend({deltaE:et});Object.assign(E,{deltaEMethods:Wt});E.extend(Jc);E.extend({contrast:xc});E.extend(Sc);E.extend(ac);E.extend(eu);E.extend(Nt);function bs(e){return He(e,(t,r)=>r instanceof E?O(r.toString({format:"hex"})):bs(r))}const vu="dodgerblue";function Fr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Cr({background:e,foreground:t}){return{background:e??new E(Fr(t)),foreground:t??new E(Fr(e))}}var qt;(function(e){e.Dark="dark",e.Light="light"})(qt||(qt={}));function yu(e){return e==="black"?"white":"black"}const wu={black:{foregroundFaint1:new E("#ccc"),foregroundFaint2:new E("#eee")},white:{foregroundFaint1:new E("#ccc"),foregroundFaint2:new E("#eee")}},$u={black:{backgroundFaint1:new E("#666"),backgroundFaint2:new E("#444")},white:{backgroundFaint1:new E("#ccc"),backgroundFaint2:new E("#fafafa")}};function Bo({themeColor:e=vu,themeStyle:t=qt.Light}={}){const r=new E(e),n=new E(t===qt.Dark?"black":"white"),o=Fr(n),a=new E(o),s={nav:{hover:Cr({background:r.clone().set({"hsl.l":93})}),active:Cr({background:r.clone().set({"hsl.l":90})}),selected:Cr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...$u[yu(o)],foreground:a,...wu[o]}};return bs(s)}const Xt=rn()("element-book-change-route"),No="vira-",{defineElement:wt,defineElementNoInputs:Qu}=Ca({assertInputs:e=>{if(!e.tagName.startsWith(No))throw new Error(`Tag name should start with '${No}' but got '${e.tagName}'`)}});var Lo;(function(e){e.Upper="upper",e.Lower="lower"})(Lo||(Lo={}));function ku(e){try{return e.callback()}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}function Yr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function xu(e,t){let r=!1;const n=Yr(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Yr(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}const Cu="px";function vs(e){return Su({value:e,suffix:Cu})}function Su({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const Eu=E;function _u(e){try{if(!e)throw new Error("invalid empty color");return new Eu(e)}catch{const r=String(e),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?ku({callback:()=>JSON.stringify(e),fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const ys=v`
    pointer-events: none;
    opacity: 0.3;
`,he=Ne({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),ft=Ne({"vira-form-input-border-radius":"8px"}),Gt=Ne({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${ft["vira-form-input-border-radius"].value} + 4px)`});function ws({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=O(vs(n+r+t));return v`
        ${O(e)}::after {
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
    `}const Mu=v`
    padding: 0;
    margin: 0;
`,Ce=v`
    ${Mu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Wr=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,_=wt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var $s=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))($s||{});const L=wt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Wr};
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
            ${ys};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Ce};
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
            transition: color ${he["vira-interaction-animation-duration"].value},
                background-color
                    ${he["vira-interaction-animation-duration"].value},
                border-color ${he["vira-interaction-animation-duration"].value};
        }

        ${ws({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${_} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${_.assign({icon:e.icon})}></${_}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var qr=(e=>(e.Header="header",e))(qr||{});const ke=wt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Ce};
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
    `,events:{expandChange:Ae()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
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
                    ${xa(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),w=Ne({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function se({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Tu(e,t){const r=Yr(t).map(n=>{const o=t[n],a=_u(o);return`${w[n].name}: ${a.toString()};`}).join(" ");return se({name:e.name,svgTemplate:p`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const ks=se({name:"CloseX24Icon",svgTemplate:p`
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
    `});function Xr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Xr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function xs({value:e,allowed:t,blocked:r}){const n=t?Xr({input:e,matcher:t}):!0,o=r?Xr({input:e,matcher:r}):!1;return n&&!o}function Cs(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(xs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Au({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=Qe(r,HTMLInputElement),s=r.data,i=t;let l=a.value??"";if(s)if(s.length===1)xs({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=i,n(s));else{const{filtered:c,blocked:u}=Cs({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),i!==l&&o(l)}const T=wt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Ae(),inputBlocked:Ae()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Gt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${ys};
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
                ${Ce};
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
                ${Wr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Ce};
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
                    ${he["vira-interaction-animation-duration"].value};
            }

            label {
                ${Ce};
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

            ${ws({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ce};
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
                ${Wr};
            }

            .close-x-button {
                ${Ce};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Cs({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?p`
                  <${_.assign({icon:e.icon})} class="left-side-icon"></${_}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${s}
                ${te(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${xa(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${B("input",l=>{Au({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${te(!!(e.showClearButton&&e.value),p`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${B("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${_.assign({icon:ks})}></${_}>
                        </button>
                    `)}
                ${te(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Je=wt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:Ae()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&za(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return p`
                <a href=${s} rel="noopener noreferrer" ${B("click",n)}>
                    <slot></slot>
                </a>
            `}}}),Ss=se({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ee=se({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Es=se({name:"Loader24Icon",svgTemplate:p`
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
    `}),Ru=v`
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
`,_s=se({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${Ru}
        </style>
        ${Es.svgTemplate}
    `}),bn=se({name:"Options24Icon",svgTemplate:p`
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
    `}),Pu=se({name:"StatusFailure24Icon",svgTemplate:p`
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
    `}),Bu=se({name:"StatusInProgress24Icon",svgTemplate:p`
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
    `}),Nu=se({name:"StatusSuccess24Icon",svgTemplate:p`
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
    `}),Lu={CloseX24Icon:ks,Element16Icon:Ss,Element24Icon:Ee,Loader24Icon:Es,LoaderAnimated24Icon:_s,Options24Icon:bn,StatusFailure24Icon:Pu,StatusInProgress24Icon:Bu,StatusSuccess24Icon:Nu},{defineElement:K,defineElementNoInputs:ed}=Ca(),W=K()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>v`
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
                ${B("click",a=>{(!e.router||za(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Xt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Ou(e,t){return e.entry.entryType===z.Root?!1:!!(e.entry.entryType===z.Page||de(t,e.fullUrlBreadcrumbs.slice(0,-1))||de(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const le=K()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${k["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${k["element-book-nav-hover-background-color"].value};
            color: ${k["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${k["element-book-nav-active-background-color"].value};
            color: ${k["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${W.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${k["element-book-nav-selected-background-color"].value};
            color: ${k["element-book-nav-selected-foreground-color"].value};
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

        ${_} {
            display: inline-flex;
            color: ${k["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Ou(r,e.selectedPath))return;const n=v`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${W.assign({router:e.router,route:{paths:[D.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${vi({"title-row":!0,selected:e.selectedPath?de(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${te(je(r,z.ElementExample),p`
                                    <${_.assign({icon:Ss})}></${_}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${W}>
                </li>
            `});return p`
            <${W.assign({route:Fe,router:e.router})}>
                <slot name=${oe.NavHeader}>Book</slot>
            </${W}>
            <ul>
                ${t}
            </ul>
        `}});async function zu(e){await Mr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await si(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ye=K()({tagName:"book-error",styles:v`
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
    `,renderCallback({inputs:e}){return(q(e.message,"array")?e.message:[e.message]).map(r=>p`
                    <p>${r}</p>
                `)}}),ht=K()({tagName:"book-page-controls",events:{controlValueChange:Ae()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
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

        ${_}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===S.Hidden)return"";const s=Iu(e.currentValues[n],o,i=>{const l=q(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return p`
                    <div class="control-wrapper">
                        ${te(a===0,p`
                                <${_.assign({icon:bn})}
                                    class="options-icon"
                                ></${_}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function Iu(e,t,r){return Le(t,S.Hidden)?"":Le(t,S.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${B("input",n=>{const o=Qe(n,HTMLInputElement);r(o.checked)})}
            />
        `:Le(t,S.Color)?p`
            <input
                type="color"
                .value=${e}
                ${B("input",n=>{const o=Qe(n,HTMLInputElement);r(o.value)})}
            />
        `:Le(t,S.Text)?p`
            <${T.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${B(T.events.valueChange,n=>{r(n.detail)})}
            ></${T}>
        `:Le(t,S.Number)?p`
            <input
                type="number"
                .value=${e}
                ${B("input",n=>{const o=Qe(n,HTMLInputElement);r(o.value)})}
            />
        `:Le(t,S.Dropdown)?p`
            <select
                .value=${e}
                ${B("input",n=>{const o=Qe(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Oo=K()({tagName:"book-breadcrumbs",styles:v`
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
                <${W.assign({route:{hash:void 0,search:void 0,paths:[D.Book,...s]},router:e.router})}>
                    ${r}
                </${W}>
                ${i}
            `}):p`
                &nbsp;
            `}}),Sr=K()({tagName:"book-breadcrumbs-bar",styles:v`
        :host {
            border-bottom: 1px solid
                ${k["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${k["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return p`
            ${te(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Oo.assign({currentRoute:e.currentRoute,router:e.router})}></${Oo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${B("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Gs(200),n.value===o&&(n.value?t(new Xt({paths:[D.Search,encodeURIComponent(n.value)]})):t(new Xt(Fe)))})}
            />
        `}}),zo=K()({tagName:"book-entry-description",styles:v`
        :host {
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${k["element-book-page-foreground-color"].value};
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
            `)}}),Io=K()({tagName:"book-page-wrapper",styles:v`
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

        ${W} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[D.Book,...e.pageNode.fullUrlBreadcrumbs],n=Fo(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${W.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${W}>
                    ${n?p`
                              <${ye.assign({message:n.message})}></${ye}>
                          `:p`
                              <${zo.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${zo}>
                              <${ht.assign({config:e.pageNode.entry.controls,currentValues:dn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ht}>
                          `}
                </div>
            </div>
        `}}),At=K()({tagName:"book-element-example-controls",styles:v`
        :host {
            display: flex;
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[D.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${W.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${W}>
        `}}),Vo=Symbol("unset-internal-state"),jo=K()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Vo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Fo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Vo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${te(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${ye.assign({message:`${t.elementExampleNode.entry.title} failed: ${pt(n)}`})}></${ye}>
            `}},options:{allowPolymorphicState:!0}}),Do=K()({tagName:"book-element-example-wrapper",styles:v`
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
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${At} {
            color: ${k["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${At.assign(Xs(e,["currentPageControls"]))}></${At}>
                <${jo.assign(e)}></${jo}>
            </div>
        `}});function Ms(e,t,r,n){const o=Lr(r,n),a=[];if(o){const s=Ms(e,t,o,n);s&&a.push(s)}if(je(r,z.Page)&&!e.includes(r)){const s=dn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:He(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Vu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[p`
                No results
            `];const s=_n(e,1)?Ms(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&_n(e,1)?p`
                  <${ht.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${ht}>
              `:"",l=yi(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(je(c,z.Page))return p`
                    <${Io.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Io}>
                `;if(je(c,z.ElementExample)){const d=dn(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${Do.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Do}>
                `}else return je(c,z.Root)?"":p`
                    <${ye.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ye}>
                `});return[i,l].flat()}const Ie=K()({tagName:"book-entry-display",styles:v`
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

        ${Sr} {
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
    `,events:{loadingRender:Ae()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Or(e.currentRoute.paths),s=Vu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return p`
            <${Sr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${Sr}>

            ${te(e.showLoading,p`
                    <div
                        ${Xn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${_.assign({icon:_s})}></${_}>
                    </div>
                    ${te(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${oe.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${Xn(i=>{o({lastElement:i})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${oe.Footer}></slot>
                `)}
        `}});function ju(e,t,r){const n=Ho(e,t);if(n.length)return n;r(Fe);const o=Ho(e,Fe.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Ho(e,t){return e.filter(r=>ni({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Er=$a()({tagName:"element-book-app",events:{pathUpdate:Ae()},stateInitStatic:{currentRoute:Fe,router:void 0,loading:!0,colors:{config:void 0,theme:Bo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:v`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${k["element-book-page-background-color"].value};
            color: ${k["element-book-page-foreground-color"].value};
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

        ${le} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Uo(e,Or(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,h,m,g,y;t._debug&&console.info("rendering element-book app");function s($){return{...e.currentRoute,...$}}function i($){const C=s($);return!de(e.currentRoute,C)}function l($){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,$].filter(Re).join(" - "))}function c($){if(!i($))return;const C=s($);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!de(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!de(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const M=Vl(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,I=>{n({currentRoute:I})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const $={themeColor:t.themeColor};if(!de($,(f=e.colors)==null?void 0:f.config)){const M=Bo($);n({colors:{config:$,theme:M}}),Hl(r,M)}const C=t._debug??!1,R=kl({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:La(R.tree,{children:(m=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:t.globalValues})}}));const A=Or(e.currentRoute.paths),ne=(A?Tl({flattenedNodes:R.flattenedNodes,searchQuery:A}):void 0)??ju(R.flattenedNodes,e.currentRoute.paths,c);l((g=ne[0])==null?void 0:g.entry.title);const U=(y=e.treeBasedControls)==null?void 0:y.controls;return U?(t._debug&&console.info({currentControls:U}),p`
                <div
                    class="root"
                    ${B(Xt,async M=>{const I=M.detail;if(!i(I))return;if(n({loading:!0}),c(I),!(r.shadowRoot.querySelector(le.tagName)instanceof le))throw new Error(`Failed to find child '${le.tagName}'`);Uo(r,A,e.currentRoute)})}
                    ${B(ht.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const I=Cl(U,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:I}})})}
                >
                    <${le.assign({flattenedNodes:R.flattenedNodes,router:e.router,selectedPath:A?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${oe.NavHeader}
                            slot=${oe.NavHeader}
                        ></slot>
                    </${le}>
                    <${Ie.assign({controls:U,currentNodes:ne,currentRoute:e.currentRoute,debug:C,originalTree:R.tree,router:e.router,showLoading:e.loading})}
                        ${B(Ie.events.loadingRender,async M=>{await Mr();const I=r.shadowRoot.querySelector(Ie.tagName);I?I.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ie.tagName}' for scrolling.`),await Mr(),n({loading:!M.detail})})}
                    >
                        <slot
                            name=${oe.Footer}
                            slot=${oe.Footer}
                        ></slot>
                    </${Ie}>
                </div>
            `):p`
                    <${ye.assign({message:"Failed to generate page controls."})}></${ye}>
                `}catch($){return console.error($),p`
                <p class="error">${pt($)}</p>
            `}}});async function Uo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(le.tagName);if(!(n instanceof le))throw new Error(`Failed to find child '${le.tagName}'`);await zu(n)}const qe=Pe({title:"Elements",parent:void 0}),Du=Pe({parent:qe,title:L.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:S.Color,initValue:L.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:S.Color,initValue:L.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:S.Color,initValue:L.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:S.Color,initValue:L.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??v``;e({title:r,styles:a,renderCallback({controls:s}){const i=v`
                        ${L.cssVars["vira-button-primary-color"].name}: ${O(s["Primary color"]||"inherit")};
                        ${L.cssVars["vira-button-secondary-color"].name}: ${O(s["Secondary color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-hover-color"].name}: ${O(s["Hover color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-active-color"].name}: ${O(s["Active color"]||"inherit")};
                    `;return p`
                        <${L.assign({text:"hello",...o})}
                            style=${i}
                        ></${L}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:bn}}),t({title:"outline",inputs:{buttonStyle:$s.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:v`
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
                `}})}}),Hu=Pe({title:ke.tagName,parent:qe,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:v`
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
                                    slot=${qr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${B("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${te(!!r.showMoreStates[o],p`
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
                                    slot=${qr.Header}
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
                                ${te(!!r.showMoreStates[o],p`
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
                        `)}})}}),Uu=Pe({title:_.tagName,parent:qe,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return p`
                    <${_.assign({icon:Ee})}></${_}>
                `}}),e({title:"using createColoredIcon",renderCallback(){return p`
                    <${_.assign({icon:Tu(Ee,{"vira-icon-stroke-color":"red"})})}></${_}>
                `}})}}),Fu=Pe({title:T.tagName,parent:qe,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:S.Color,initValue:T.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:S.Color,initValue:T.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:S.Color,initValue:T.cssVars["vira-input-border-color"].default},"Focus color":{controlType:S.Color,initValue:T.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:S.Color,initValue:T.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:v`
                    ${r||v``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:s,controls:i}){const l={[String(T.cssVars["vira-input-text-color"].name)]:i["Text color"],[String(T.cssVars["vira-input-placeholder-color"].name)]:i["Placeholder color"],[String(T.cssVars["vira-input-border-color"].name)]:i["Border color"],[String(T.cssVars["vira-input-focus-border-color"].name)]:i["Focus color"],[String(T.cssVars["vira-input-text-selection-color"].name)]:i["Selection color"]},c=xu(l,(d,f)=>f||"inherit"),u=Object.entries(c).map(([d,f])=>[d,f].join(": ")+";").join(`
`);return p`
                        <${T.assign({...o,value:a.value})}
                            style=${u}
                            ${B(T.events.valueChange,d=>{s({value:d.detail})})}
                        ></${T}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:Ee}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:v`
                ${T} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:Ee}}),t({title:"taller height",styles:v`
                ${T} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:Ee}}),t({title:"shorter height",styles:v`
                ${T} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ee}}),t({title:"max width",styles:v`
                ${T} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:v`
                ${T} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Yu=Pe({title:Je.tagName,parent:qe,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:S.Color,initValue:""},"Hover color":{controlType:S.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=v`
                        ${Je.cssVars["vira-link-hover-color"].name}: ${O(o["Hover color"]||"inherit")};
                        color: ${O(o["CSS Color"]||"inherit")};
                    `;return p`
                        <${Je.assign(n)}
                            style=${a}
                            ${B(Je.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${Je}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),Wu=Pe({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:S.Color,initValue:""},"Fill Color":{controlType:S.Color,initValue:""},"Stroke Width":{controlType:S.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(Lu).forEach(t=>{e({title:t.name,styles:v`
                    :host(:hover) ${_} {
                        background-color: #f2f2f2;
                    }

                    ${_} {
                        padding: 8px;
                        border-radius: ${ft["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=v`
                        ${w["vira-icon-fill-color"].name}: ${O(r["Fill Color"]||"inherit")};
                        ${w["vira-icon-stroke-color"].name}: ${O(r["Stroke Color"]||"inherit")};
                        ${w["vira-icon-stroke-width"].name}: ${O(vs(r["Stroke Width"])||"inherit")};
                    `;return p`
                        <${_.assign({icon:t})} style=${n}></${_}>
                    `}})})}}),qu=[qe,Wu,Du,Hu,Uu,Fu,Yu];Qt({tagName:"vira-book-app",styles:v`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Er} {
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
            <${Er.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:qu,themeColor:"#33ccff"})}>
                <h1 slot=${oe.NavHeader}>Vira</h1>
            </${Er}>
        `}});
