var Ms=Object.defineProperty;var Ts=(e,t,r)=>t in e?Ms(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var or=(e,t,r)=>(Ts(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function As(e,t){return e.includes(t)}function $e(e){return!!e}function Rs(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ps={capitalizeFirstLetter:!1};function Bs(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Ns(e,t){return t.capitalizeFirstLetter?Bs(e):e}function Ls(e,t=Ps){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Ns(n,t)}function yn(e){return e!==e.toUpperCase()}function Os(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=yn(s)||yn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function zs(e,t){return e.split(t)}function Io(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>ft(r).trim()).join(`
`))}function ft(e){return e?e instanceof Error?e.message:q(e,"message")?String(e.message):String(e):""}function Vo(e){return e instanceof Error?e:new Error(ft(e))}function Is(e){try{return e.callback()}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}function se(e){return!!e&&typeof e=="object"}function Vs(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const js=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function q(e,t){return e?js.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function jo(e,t){return e&&t.every(r=>q(e,r))}function H(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Do(e,t,r=!1,n={}){const o=H(e),a=new Set(H(t));if(!r){const s=o.filter(i=>!a.has(i));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}a.forEach(s=>{if(!q(e,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function i(u){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${u}`)}const l=e[s],c=t[s];n[s]||Ho(l,c,i,r,n[s]??{})})}function Ho(e,t,r,n,o){var i;const a=typeof e,s=typeof t;a!==s&&r(`type "${a}" did not match expected type "${s}"`);try{q(t,"constructor")&&(!q(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(i=e==null?void 0:e.constructor)==null?void 0:i.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Ho(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${ft(f)}`)}}).filter($e).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):se(t)&&Do(e,t,n,o)}function Cr(e){return Array.isArray(e)?"array":typeof e}function G(e,t){return Cr(e)===t}function wn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const $n="Failed to compare objects using JSON.stringify";function kn(e,t,r){return wn({source:e,errorHandler(n){if(r)return"";throw n}})===wn({source:t,errorHandler(n){if(r)return"";throw n}})}function he(e,t,r={}){try{return e===t?!0:se(e)&&se(t)?kn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>he(e[o],t[o])):!1:kn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Vo(n);throw o.message.startsWith($n)||(o.message=`${$n}: ${o.message}`),o}}function Ds(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Hs(e){return H(e).filter(t=>isNaN(Number(t)))}function Us(e){return Hs(e).map(r=>e[r])}function Fs(e,t){return Us(t).includes(e)}function Ys(e,t){return H(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Ws(e,t){return Ys(e,r=>!t.includes(r))}function fe(e,t){let r=!1;const n=H(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(H(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function qs(e){const t=Wr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Wr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Wr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Xs({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Gs(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter($e);return t.length?`?${t.join("&")}`:""}function Zs(e){return Xs({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=zs(n,"="),s=a.join("");if(!(!s&&!o))return[o,s]}).filter($e)}function Js(e,t){const r=G(e,"string")?new URL(e):e,n=Zs(r.search),o=Object.fromEntries(n);return t&&Do(o,t),o}const Ks="px";function Uo(e){return Qs({value:e,suffix:Ks})}function Qs({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function xn(e,t){try{return Fo(e,t),!0}catch{return!1}}function Fo(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ei(e,t){return q(e,"entryType")&&e.entryType===t}var z;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(z||(z={}));function Le(e,t){return e.controlType===t}var C;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(C||(C={}));const Yo=Symbol("any-type"),ti={[C.Checkbox]:!1,[C.Color]:"",[C.Dropdown]:"",[C.Hidden]:Yo,[C.Number]:0,[C.Text]:""};function ri(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=ti[o.controlType];a!==Yo&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function qr(e,t){const r=Bt(e.title);return e.parent?[...qr(e.parent,!1),Bt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Bt(e){return Rs(e).toLowerCase().replaceAll(/\s/g,"-")}function ni({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Pe(e){const t={...e,entryType:z.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:z.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter($e)};r.add(n.title),t.elementExamples[Bt(o.title)]=o}}),t}var ae;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ae||(ae={}));async function Er(e=1){const t=Wr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const oi=globalThis.crypto;function ai(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return oi.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function si(e){return ii(e,1)}async function ii(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{Fo(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function Je(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=e=>(...t)=>({_$litDirective$:e,values:t});let Be=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ar;const Nt=window,De=Nt.trustedTypes,Sn=De?De.createPolicy("lit-html",{createHTML:e=>e}):void 0,Lt="$lit$",de=`lit$${(Math.random()+"").slice(9)}$`,Xr="?"+de,li=`<${Xr}>`,Te=document,rt=()=>Te.createComment(""),nt=e=>e===null||typeof e!="object"&&typeof e!="function",Wo=Array.isArray,qo=e=>Wo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",sr=`[ 	
\f\r]`,Xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cn=/-->/g,En=/>/g,ke=RegExp(`>|${sr}(?:([^\\s"'>=/]+)(${sr}*=${sr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_n=/'/g,Mn=/"/g,Xo=/^(?:script|style|textarea|title)$/i,ci=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ui=ci(1),ne=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Tn=new WeakMap,_e=Te.createTreeWalker(Te,129,null,!1);function Go(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Sn!==void 0?Sn.createHTML(t):t}const Zo=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Xe;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Xe?u[1]==="!--"?s=Cn:u[1]!==void 0?s=En:u[2]!==void 0?(Xo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=ke):u[3]!==void 0&&(s=ke):s===ke?u[0]===">"?(s=o??Xe,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?ke:u[3]==='"'?Mn:_n):s===Mn||s===_n?s=ke:s===Cn||s===En?s=Xe:(s=ke,o=void 0);const h=s===ke&&e[i+1].startsWith("/>")?" ":"";a+=s===Xe?l+li:d>=0?(n.push(c),l.slice(0,d)+Lt+l.slice(d)+de+h):l+de+(d===-2?(n.push(void 0),i):h)}return[Go(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class ot{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=Zo(t,r);if(this.el=ot.createElement(c,n),_e.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=_e.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Lt)||f.startsWith(de)){const h=u[s++];if(d.push(f),h!==void 0){const m=o.getAttribute(h.toLowerCase()+Lt).split(de),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:g[2],strings:m,ctor:g[1]==="."?Ko:g[1]==="?"?Qo:g[1]==="@"?ea:ht})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(Xo.test(o.tagName)){const d=o.textContent.split(de),f=d.length-1;if(f>0){o.textContent=De?De.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],rt()),_e.nextNode(),l.push({type:2,index:++a});o.append(d[f],rt())}}}else if(o.nodeType===8)if(o.data===Xr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(de,d+1))!==-1;)l.push({type:7,index:a}),d+=de.length-1}a++}}static createElement(t,r){const n=Te.createElement("template");return n.innerHTML=t,n}}function Ae(e,t,r=e,n){var o,a,s,i;if(t===ne)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=nt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Ae(e,l._$AS(e,t.values),l,n)),t}class Jo{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Te).importNode(n,!0);_e.currentNode=a;let s=_e.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new Fe(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new ta(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=_e.nextNode(),i++)}return _e.currentNode=Te,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Fe{constructor(t,r,n,o){var a;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ae(this,t,r),nt(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==ne&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.$(Te.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ot.createElement(Go(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new Jo(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=Tn.get(t.strings);return r===void 0&&Tn.set(t.strings,r=new ot(t)),r}T(t){Wo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Fe(this.k(rt()),this.k(rt()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ht{constructor(t,r,n,o,a){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=Ae(this,t,r,0),s=!nt(t)||t!==this._$AH&&t!==ne,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Ae(this,i[n+l],r,l),c===ne&&(c=this._$AH[l]),s||(s=!nt(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ko extends ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}const di=De?De.emptyScript:"";class Qo extends ht{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,di):this.element.removeAttribute(this.name)}}class ea extends ht{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Ae(this,t,r,0))!==null&&n!==void 0?n:P)===ne)return;const o=this._$AH,a=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==P&&(o===P||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ta{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ae(this,t)}}const fi={O:Lt,P:de,A:Xr,C:1,M:Zo,L:Jo,R:qo,D:Ae,I:Fe,V:ht,H:Qo,N:ea,U:Ko,F:ta},An=Nt.litHtmlPolyfillSupport;An==null||An(ot,Fe),((ar=Nt.litHtmlVersions)!==null&&ar!==void 0?ar:Nt.litHtmlVersions=[]).push("2.8.0");const hi=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Fe(t.insertBefore(rt(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:pi}=fi,Rn=()=>document.createComment(""),Ge=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(Rn(),a),i=o.insertBefore(Rn(),a);r=new pi(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},xe=(e,t,r=e)=>(e._$AI(t,r),e),mi={},gi=(e,t=mi)=>e._$AH=t,bi=e=>e._$AH,ir=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=Ue(class extends Be{constructor(e){var t;if(super(e),e.type!==Xt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return ne}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},yi=Ue(class extends Be{constructor(e){if(super(e),e.type!==Xt.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=bi(e),{values:s,keys:i}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=i,s;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,h=a.length-1,m=0,g=s.length-1;for(;f<=h&&m<=g;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[m])c[m]=xe(a[f],s[m]),f++,m++;else if(l[h]===i[g])c[g]=xe(a[h],s[g]),h--,g--;else if(l[f]===i[g])c[g]=xe(a[f],s[g]),Ge(e,c[g+1],a[f]),f++,g--;else if(l[h]===i[m])c[m]=xe(a[h],s[m]),Ge(e,a[f],a[h]),h--,m++;else if(u===void 0&&(u=Pn(i,m,g),d=Pn(l,f,h)),u.has(l[f]))if(u.has(l[h])){const y=d.get(i[m]),$=y!==void 0?a[y]:null;if($===null){const S=Ge(e,a[f]);xe(S,s[m]),c[m]=S}else c[m]=xe($,s[m]),Ge(e,a[f],$),a[y]=null;m++}else ir(a[h]),h--;else ir(a[f]),f++;for(;m<=g;){const y=Ge(e,c[g+1]);xe(y,s[m]),c[m++]=y}for(;f<=h;){const y=a[f++];y!==null&&ir(y)}return this.ut=i,gi(e,c),ne}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _r=class extends Be{constructor(t){if(super(t),this.et=P,t.type!==Xt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.ft=void 0,this.et=t;if(t===ne)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};_r.directiveName="unsafeHTML",_r.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bn=class extends _r{};Bn.directiveName="unsafeSVG",Bn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wi(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=window,Gr=Tt.ShadowRoot&&(Tt.ShadyCSS===void 0||Tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zr=Symbol(),Nn=new WeakMap;let ra=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Zr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Gr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Nn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Nn.set(r,t))}return t}toString(){return this.cssText}};const O=e=>new ra(typeof e=="string"?e:e+"",void 0,Zr),Qe=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new ra(r,e,Zr)},$i=(e,t)=>{Gr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Tt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Ln=Gr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return O(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lr;const Ot=window,On=Ot.trustedTypes,ki=On?On.emptyScript:"",zn=Ot.reactiveElementPolyfillSupport,Mr={toAttribute(e,t){switch(t){case Boolean:e=e?ki:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},na=(e,t)=>t!==e&&(t==t||e==e),cr={attribute:!0,type:String,converter:Mr,reflect:!1,hasChanged:na},Tr="finalized";class Ve extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=cr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||cr}static finalize(){if(this.hasOwnProperty(Tr))return!1;this[Tr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Ln(o))}else t!==void 0&&r.push(Ln(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $i(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=cr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Mr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Mr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||na)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Ve[Tr]=!0,Ve.elementProperties=new Map,Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},zn==null||zn({ReactiveElement:Ve}),((lr=Ot.reactiveElementVersions)!==null&&lr!==void 0?lr:Ot.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ur,dr;class et extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ne}}et.finalized=!0,et._$litElement$=!0,(ur=globalThis.litElementHydrateSupport)===null||ur===void 0||ur.call(globalThis,{LitElement:et});const In=globalThis.litElementPolyfillSupport;In==null||In({LitElement:et});((dr=globalThis.litElementVersions)!==null&&dr!==void 0?dr:globalThis.litElementVersions=[]).push("3.3.3");var xi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s($){if($!==void 0&&typeof $!="function")throw new TypeError("Function expected");return $}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var m={};for(var g in n)m[g]=g==="access"?{}:n[g];for(var g in n.access)m.access[g]=n.access[g];m.addInitializer=function($){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s($||null))};var y=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],m);if(i==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=s(y.get))&&(u.get=d),(d=s(y.set))&&(u.set=d),(d=s(y.init))&&o.unshift(d)}else(d=s(y))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Si=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Ci=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Ei(){function e(t,r){return t}return e}let oa=(()=>{let e=[Ei()],t,r=[],n,o=et;return n=class extends o{},Ci(n,"DeclarativeElement"),(()=>{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;xi(null,t={value:n},e,{kind:"class",name:n.name,metadata:a},null,r),n=t.value,a&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),Si(n,r)})(),n})();function Ne(e){if(se(e))return fe(e,(r,n)=>{if(!G(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Os(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?O(r):r.startsWith("-")?Qe`-${O(r)}`:Qe`--${O(r)}`;return{name:s,value:Qe`var(${s}, ${O(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${Ne.name}' function.`)}function _i({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Ti=(e,t,r)=>{t.constructor.createProperty(r,e)};function aa(e){return(t,r)=>r!==void 0?Ti(e,t,r):Mi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fr;((fr=window.HTMLSlotElement)===null||fr===void 0?void 0:fr.prototype.assignedElements)!=null;const Jr=Symbol("key for ignoring inputs not having been set yet"),Ai={[Jr]:!0,allowPolymorphicState:!1};function sa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof oa?!0:sa(r)}function ia(e,t){const r=e.instanceState;H(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&H(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Ri(e)}function Ri(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Vn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Pi extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Kr(){return e=>{var t;return t=class extends Pi{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Re(){return Kr()}function Bi(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Kr()(r);return t[r]=n,t},{}):{}}const Ni="_elementVirStateSetup";function Li(e){return se(e)?Ni in e:!1}function Oi(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Cr(e)===Cr(t)&&r}const la=Symbol("and"),ca=Symbol("or"),ua=Symbol("exact"),da=Symbol("enum"),Qr=Symbol("unknown"),fa="__vir__shape__definition__key__do__not__use__in__actual__objects";function ha(e){return q(e,fa)}const pa="__vir__shape__specifier__key__do__not__use__in__actual__objects",zi=[la,ca,ua,da,Qr];function Ii(){return Vi([],Qr)}function Gt(e){return pt(e,ca)}function en(e){return pt(e,la)}function tn(e){return pt(e,ua)}function rn(e){return pt(e,da)}function nn(e){return pt(e,Qr)}function pt(e,t){const r=Zt(e);return!!r&&r.specifierType===t}function Vi(e,t){return{[pa]:!0,specifierType:t,parts:e}}function At(e,t){const r=Zt(t);if(r){if(en(r))return r.parts.every(n=>At(e,n));if(Gt(r))return r.parts.some(n=>At(e,n));if(tn(r))return se(e)?At(e,r.parts[0]):e===r.parts[0];if(rn(r))return Object.values(r.parts[0]).some(n=>n===e);if(nn(r))return!0}return Oi(e,t)}function Zt(e){if(se(e)&&q(e,pa)){if(!q(e,"parts")||!G(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!q(e,"specifierType")||!As(zi,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Ar(e){return Rr(e)}function Rr(e){const t=Zt(e);if(t){if(Gt(t)||tn(t))return Rr(t.parts[0]);if(en(t))return t.parts.reduce((r,n)=>Object.assign(r,Rr(n)),{});if(rn(t))return Object.values(t.parts[0])[0];if(nn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return ha(e)?Ar(e.shape):e instanceof RegExp||G(e,"array")?e:se(e)?fe(e,(r,n)=>Ar(n)):e}function ji(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Ar(e),[fa]:!0}}class ee extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Di(e,t,r={}){try{return Hi(e,t,r),!0}catch{return!1}}function Hi(e,t,r={}){Ce(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function ma(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Ce(e,t,r,n){if(nn(t))return!0;if(ha(t))return Ce(e,t.shape,r,n);const o=ma(r);if(Zt(e))throw new ee(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!At(e,t))throw new ee(`Subject does not match shape definition at key ${o}`);if(G(t,"function"))return G(e,"function");if(se(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(Gt(t))l=t.parts.some(c=>{try{const u=Ce(e,c,r,{...n});return Object.assign(i,u),!0}catch(u){if(u instanceof ee)return!1;throw u}});else if(en(t))l=t.parts.every(c=>{try{const u=Ce(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof ee)return!1;throw u}});else if(tn(t)){const c=Ce(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(rn(t))throw new ee(`Cannot compare an enum specifier to an object at ${o}`);if(G(t,"array")&&G(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return Ce(c,f,[...r,u],n),!0}catch(h){if(h instanceof ee)return!1;throw h}});return i[u]=d,d});else{const c=Ui({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(i).filter(d=>!i[d]).join(",")}`;throw new ee(u)}return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new ee(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function Ui({keys:e,options:t,shape:r,subject:n}){const o=ma(e),a={};if(se(r)){const s=new Set(H(n)),i=new Set(H(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new ee(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=Gt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new ee(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];Ce(c,u,[...e,l],t),a[l]=!0})}else throw new ee(`shape definition at ${o} was not an object.`);return a}const Fi=ji({addListener(){return!1},removeListener(){return!1},value:Ii()});function hr(e){return Di(e,Fi,{allowExtraKeys:!0})}function Yi(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function jn(e,t){const r=e;function n(s){t?Yi(s,e,e.tagName):aa()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Li(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(m){s[i]=m,r[i]=m}const f=e.observablePropertyListenerMap[i];if(u!==c&&hr(u)&&(f!=null&&f.length)&&u.removeListener(f),hr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[i]=m,c.addListener(m)}else hr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Wi(e){return e?fe(e,t=>t):{}}function qi({hostClassNames:e,cssVars:t}){return{hostClasses:fe(e,(r,n)=>({name:O(n),selector:O(`:host(.${n})`)})),cssVars:t}}function Xi({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&H(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Gi(e,t){function r(o){H(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Zi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Jt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Ai,...e.options},n=Bi(e.events),o=Wi(e.hostClasses);e.hostClasses&&Vn(e.tagName,e.hostClasses),e.cssVars&&Vn(e.tagName,e.cssVars);const a=e.cssVars?Ne(e.cssVars):{},s=typeof e.styles=="function"?e.styles(qi({hostClassNames:o,cssVars:a})):e.styles||Qe``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends oa{createRenderParams(){return Gi(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{sa(this)&&!this.haveInputsBeenSet&&!r[Jr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Jt.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Xi({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Vo(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){ia(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=jn(this,!1),this.instanceState=jn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};H(u).forEach(f=>{aa()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Zi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Ls(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function ga(){return e=>Jt({...e,options:{[Jr]:!1,...e.options}})}function ba(e,t){return at(e,t),e.element}function Ji(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function at(e,t){const r=Ji(e),n=r?`: in ${r}`:"";if(e.type!==Xt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Ki(e,t){return t?Dn(e,t):Dn(void 0,e)}const Dn=Ue(class extends Be{constructor(e){super(e),this.element=ba(e,"assign")}render(e,t){return ia(this.element,t),ne}});function B(e,t){return Qi(e,t)}const Qi=Ue(class extends Be{constructor(e){super(e),this.element=ba(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ne}}),Hn="onDomCreated",Un=Ue(class extends Be{constructor(e){super(e),at(e,Hn)}update(e,[t]){at(e,Hn);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),pr="onResize",va=Ue(class extends Be{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),at(e,pr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${pr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){at(e,pr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function re(e,t,r){return wi(e,()=>t,()=>r)}function ya(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),ga()(r(n))),defineElementNoInputs:n=>(t(n),Jt(r(n)))}}function el(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Pr(e){return q(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function on(e){return q(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function wa(e){return e.map(t=>Pr(t)?t.definition:t).filter(t=>on(t))}const $a=new WeakMap;function tl(e,t){var o;const r=wa(t);return(o=ka($a,[e,...r]).value)==null?void 0:o.template}function rl(e,t,r){const n=wa(t);return Sa($a,[e,...n],r)}function ka(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=xa(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ka(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function xa(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Sa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=xa(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Sa(l,t,r,n+1)}const nl=new WeakMap;function Ca(e,t,r){const n=tl(e,t),o=n??r();if(!n){const i=rl(e,t,o);if(i.result)nl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=el(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Ea(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let g,y=[];if(typeof f=="string"&&(g=r(f,c,m),g)){o[d]=f+g.replacement,s.push(h);const S=g.getExtraValues;y=S?S(m):[],y.length&&S?(o[d]+=" ",y.forEach((R,A)=>{A&&o.push(" ")}),i.push(R=>{const A=R[h],V=S(A);return{index:h,values:V}}),o.push(c)):o[d]+=c}g||o.push(c);const $=e.raw[u];g?(a[d]=a[d]+g.replacement+$,y.length&&y.forEach(()=>{a.push("")})):a.push($)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function ol(...[e,t,r]){if(on(r))return{replacement:r.tagName,getExtraValues:void 0}}function al(e,t){return Ea(e,t,ol)}function v(e,...t){const r=Ca(e,t,()=>al(e,t));return Qe(r.strings,...r.values)}function sl(...[e,t,r]){const n=Pr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=on(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Pr(c)?c.inputs:void 0;return[o&&u?Ki(u):void 0].filter($e)}}}function il(e){}function ll(e){return Ea(e.strings,e.values,sl,il)}function p(e,...t){const r=ui(e,...t),n=Ca(e,t,()=>ll(r));return{...r,strings:n.strings,values:n.values}}const cl={[z.ElementExample]:()=>[],[z.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...ri(e.controls,e.title)].filter($e),[z.Root]:()=>[]},zt="_isBookTreeNode",_a=new Map;function ul(e){return _a.get(e)}function dl(e,t){Ds(_a,e,()=>t)}function je(e,t){return!!(Ma(e)&&e.entry.entryType===t)}function Ma(e){return!!(jo(e,[zt,"entry"])&&e[zt])}function fl(){return{[zt]:!0,entry:{entryType:z.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function hl({entries:e,debug:t}){const r=ul(e);if(r)return r;const n=fl();e.forEach(s=>an({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Ta(n),a={tree:n,flattenedNodes:o};return dl(e,a),t&&console.info("element-book tree:",n),a}function pl(e,t,r){if(!t.parent)return e;const n=Br(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),an({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Br(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${qr(t,!1)}`);return o}function an({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=cl[t.entryType](t);t.errors.push(...o);const a=pl(e,t,r),s=Bt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[zt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,ei(t,z.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>an({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Br(e,t){const r=Ma(e)?e.fullUrlBreadcrumbs.slice(0,-1):qr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ta(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ta(o));return[e,...r].flat()}function sn(e,t){return ln(e,["",...t],void 0)}function ln(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&ln(a,n,r);return{...e.controls,...s}}function ml(e,t,r){const n=Vs(e);return ln(n,["",...t],r),n}function Aa(e,t){const r=(t==null?void 0:t.controls)||(je(e,z.Page)?fe(e.entry.controls,(o,a)=>a.initValue):{});return{children:fe(e.children,(o,a)=>{var s;return Aa(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function gl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const bl=ai(32);function Rt(e){return e.join(bl)}function Ra(e){if(!e.length)return[];const t=Rt(e),r=Ra(e.slice(0,-1));return[t,...r]}const vl=["error","errors"];function yl(e){return vl.includes(e)}function wl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Rt(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&yl(t),s=Rt(o.fullUrlBreadcrumbs);if(gl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=Ra(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=Rt(o.fullUrlBreadcrumbs),s=r[a];if(!G(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var D;(function(e){e.Search="search",e.Book="book"})(D||(D={}));function Nr(e){return e[0]===D.Book?"":e[1]?decodeURIComponent(e[1]):""}const He={hash:void 0,paths:[D.Book],search:void 0},$l=0;function Pa(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==$l)}class Kt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Fn extends Kt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const st="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const kl=globalThis.history.pushState;function Yn(...e){const t=kl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(st)),t}const xl=globalThis.history.replaceState;function Wn(...e){const t=xl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(st)),t}function Sl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Yn)throw new Fn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Wn)throw new Fn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Yn,globalThis.history.replaceState=Wn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(st))})}}function Cl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Js(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function Ba(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Na({routeBase:e,windowPath:t}){if(!e)return"";const r=Ba(e);if(La({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Na({routeBase:n,windowPath:t}):""}function La({routeBase:e,windowPath:t}){const r=Ba(e);return r?t.startsWith(`/${r}`):!1}class El extends Kt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Oa(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const qn=6;function Xn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>qn)throw new El(`Route sanitization depth has exceed the max of ${qn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Oa(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class mr extends Kt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function _l(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new mr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new mr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new mr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Ml(e,t,r=!1){const n=za(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function za(e,t){var i;const r=La({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Gs(e.search):"",o=(i=e.hash)!=null&&i.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter($e).join("/")}${n}${a}`}function Tl(e={}){_l(e),Sl();const t=e.routeBase?Na({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Xn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Oa(l,u)))return Ml(u,t,s)},createRoutesUrl(a){return za(a,t)},getCurrentRawRoutes(){return Cl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Kt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(st,n),r=!0),a&&Xn(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(st,n),r=!1),s},sanitizationDepth:0};return o}function Al(e){return Tl({routeBase:e,routeSanitizer(t){return{paths:Rl(t.paths),hash:void 0,search:void 0}}})}function Rl(e){const t=e[0];if(Fs(t,D)){if(t===D.Book)return[D.Book,...e.slice(1)];if(t===D.Search)return e[1]?[t,e[1]]:[D.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return He.paths}const k=Ne({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Pl={nav:{hover:{background:k["element-book-nav-hover-background-color"],foreground:k["element-book-nav-hover-foreground-color"]},active:{background:k["element-book-nav-active-background-color"],foreground:k["element-book-nav-active-foreground-color"]},selected:{background:k["element-book-nav-selected-background-color"],foreground:k["element-book-nav-selected-foreground-color"]}},accent:{icon:k["element-book-accent-icon-color"]},page:{background:k["element-book-page-background-color"],backgroundFaint1:k["element-book-page-background-faint-level-1-color"],backgroundFaint2:k["element-book-page-background-faint-level-2-color"],foreground:k["element-book-page-foreground-color"],foregroundFaint1:k["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:k["element-book-page-foreground-faint-level-2-color"]}};function Bl(e,t){Ia(e,t,Pl)}function Lr(e){return q(e,"_$cssResult$")}function Gn(e){return jo(e,["name","value","default"])&&G(e.default,"string")&&Lr(e.name)&&Lr(e.value)}function Ia(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Lr(o)){if(!Gn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);_i({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Gn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ia(e,o,a)}})}function N(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function mt(e){return pe(e)==="string"}function pe(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function It(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Va(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ja(e){return e[e.length-1]}function Vt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Da(e,t,r){return(r-e)/(t-e)}function cn(e,t,r){return Vt(t[0],t[1],Da(e[0],e[1],r))}function Ha(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Nl=Object.freeze({__proto__:null,interpolate:Vt,interpolateInv:Da,isString:mt,last:ja,mapRange:cn,multiplyMatrices:N,parseCoordGrammar:Ha,parseFunction:Va,toPrecision:It,type:pe});class Ll{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ge=new Ll;var ie={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const te={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Or(e){return Array.isArray(e)?e:te[e]}function jt(e,t,r,n={}){if(e=Or(e),t=Or(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ge.run("chromatic-adaptation-start",o),o.M||(o.W1===te.D65&&o.W2===te.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===te.D50&&o.W2===te.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ge.run("chromatic-adaptation-end",o),o.M)return N(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ol=75e-6,Y=class Y{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?Y.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Or(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:zl(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ge.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Ol}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Zn(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Zn(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Y.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Y)return t;if(pe(t)==="string"){let o=Y.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Y.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=pe(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=Y.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=pe(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=Y.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};or(Y,"registry",{}),or(Y,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=Y;function zl(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Zn(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ha(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=cn(i,l,a)),a=It(a,o),c&&(a+=c),a})}return e}var J=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class U extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=J),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=N(t.toXYZ_M,r);return this.white!==this.base.white&&(n=jt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=jt(this.base.white,this.white,r),N(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ua(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(ge.run("parse-start",r),r.color)return r.color;if(r.parsed=Va(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((g,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||ja(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([m,g],y)=>{var oe;let $=u.coordGrammar[y],S=(oe=f[y])==null?void 0:oe.type,R=$.find(F=>F==S);if(!R){let F=g.name||m;throw new TypeError(`${S} not allowed for ${F} in ${l}()`)}let A=R.range;S==="<percentage>"&&(A||(A=[0,1]));let V=g.range||g.refRange;return A&&V&&(f[y]=cn(A,V,f[y])),R})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function x(e){if(!e)throw new TypeError("Empty color reference");mt(e)&&(e=Ua(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function gt(e,t){return t=b.get(t),t.from(e)}function K(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return gt(e,r)[n]}function Fa(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function be(e,t,r){if(e=x(e),arguments.length===2&&pe(arguments[1])==="object"){let n=arguments[1];for(let o in n)be(e,o,n[o])}else{typeof r=="function"&&(r=r(K(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=gt(e,n);a[o]=r,Fa(e,n,a)}return e}var un=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:J,fromBase:e=>jt(J.white,"D50",e),toBase:e=>jt("D50",J.white,e),formats:{color:{}}});const Il=216/24389,Jn=24/116,wt=24389/27;let gr=te.D50;var W=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:gr,base:un,fromBase(e){let r=e.map((n,o)=>n/gr[o]).map(n=>n>Il?Math.cbrt(n):(wt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Jn?Math.pow(t[0],3):(116*t[0]-16)/wt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wt,t[2]>Jn?Math.pow(t[2],3):(116*t[2]-16)/wt].map((n,o)=>n*gr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Qt(e){return(e%360+360)%360}function Vl(e,t){if(e==="raw")return t;let[r,n]=t.map(Qt),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var it=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:W,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Qt(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Kn=25**7,Dt=Math.PI,Qn=180/Dt,Oe=Dt/180;function zr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=W.from(e),l=it.from(W,[a,s,i])[1],[c,u,d]=W.from(t),f=it.from(W,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,g=.5*(1-Math.sqrt(m/(m+Kn))),y=(1+g)*s,$=(1+g)*u,S=Math.sqrt(y**2+i**2),R=Math.sqrt($**2+d**2),A=y===0&&i===0?0:Math.atan2(i,y),V=$===0&&d===0?0:Math.atan2(d,$);A<0&&(A+=2*Dt),V<0&&(V+=2*Dt),A*=Qn,V*=Qn;let oe=c-a,F=R-S,M=V-A,I=A+V,rr=Math.abs(M),We;S*R===0?We=0:rr<=180?We=M:M>180?We=M-360:M<-180?We=M+360:console.log("the unthinkable has happened");let pn=2*Math.sqrt(R*S)*Math.sin(We*Oe/2),xs=(a+c)/2,nr=(S+R)/2,mn=Math.pow(nr,7),ce;S*R===0?ce=I:rr<=180?ce=I/2:I<360?ce=(I+360)/2:ce=(I-360)/2;let gn=(xs-50)**2,Ss=1+.015*gn/Math.sqrt(20+gn),bn=1+.045*nr,qe=1;qe-=.17*Math.cos((ce-30)*Oe),qe+=.24*Math.cos(2*ce*Oe),qe+=.32*Math.cos((3*ce+6)*Oe),qe-=.2*Math.cos((4*ce-63)*Oe);let vn=1+.015*nr*qe,Cs=30*Math.exp(-1*((ce-275)/25)**2),Es=2*Math.sqrt(mn/(mn+Kn)),_s=-1*Math.sin(2*Cs*Oe)*Es,yt=(oe/(r*Ss))**2;return yt+=(F/(n*bn))**2,yt+=(pn/(o*vn))**2,yt+=_s*(F/(n*bn))*(pn/(o*vn)),Math.sqrt(yt)}const jl=75e-6;function tt(e,t=e.space,{epsilon:r=jl}={}){e=x(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function lt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ve(e,{method:t=ie.gamut_mapping,space:r=e.space}={}){if(mt(arguments[1])&&(r=arguments[1]),r=b.get(r),tt(e,r,{epsilon:0}))return x(e);let n=Z(e,r);if(t!=="clip"&&!tt(e,r)){let o=ve(lt(n),{method:"clip",space:r});if(zr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=Z(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=K(l,i);for(;h-f>d;){let m=lt(l);m=ve(m,{space:r,method:"clip"}),zr(l,m)-2<d?f=K(l,i):h=K(l,i),be(l,i,(f+h)/2)}n=Z(l,r)}else n=o}if(t==="clip"||!tt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=Z(n,e.space)),e.coords=n.coords,e}ve.returns="color";function Z(e,t,{inGamut:r}={}){e=x(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ve(o)),o}Z.returns="color";function Ht(e,{precision:t=ie.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=x(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!tt(e)&&(i=ve(lt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>It(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=It(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Dl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Hl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var er=new U({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Dl,fromXYZ_M:Hl,formats:{color:{}}});const $t=1.09929682680944,eo=.018053968510807;var Ya=new U({id:"rec2020",name:"REC.2020",base:er,toBase(e){return e.map(function(t){return t<eo*4.5?t/4.5:Math.pow((t+$t-1)/$t,1/.45)})},fromBase(e){return e.map(function(t){return t>=eo?$t*Math.pow(t,.45)-($t-1):4.5*t})},formats:{color:{}}});const Ul=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Fl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Wa=new U({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ul,fromXYZ_M:Fl});const Yl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Wl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var qa=new U({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Yl,fromXYZ_M:Wl,formats:{color:{}}}),to={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ro=Array(3).fill("<percentage> | <number>[0, 255]"),no=Array(3).fill("<number>[0, 255]");var ct=new U({id:"srgb",name:"sRGB",base:qa,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ro},rgb_number:{name:"rgb",commas:!0,coords:no,noAlpha:!0},color:{},rgba:{coords:ro,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:no},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=to.black,t.alpha=0):t.coords=to[e],t.coords)return t}}}}),Xa=new U({id:"p3",name:"P3",base:Wa,fromBase:ct.fromBase,toBase:ct.toBase,formats:{color:{id:"display-p3"}}});ie.display_space=ct;if(typeof CSS<"u"&&CSS.supports)for(let e of[W,Ya,Xa]){let t=e.getMinCoords(),n=Ht({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ie.display_space=e;break}}function ql(e,{space:t=ie.display_space,...r}={}){let n=Ht(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ie.display_space)n=new String(n),n.color=e;else{let o=Z(e,t);n=new String(Ht(o,r)),n.color=o}return n}function Ga(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Xl(e,t){return e=x(e),t=x(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ye(e){return K(e,[J,"y"])}function Za(e,t){be(e,[J,"y"],t)}function Gl(e){Object.defineProperty(e.prototype,"luminance",{get(){return ye(this)},set(t){Za(this,t)}})}var Zl=Object.freeze({__proto__:null,getLuminance:ye,register:Gl,setLuminance:Za});function Jl(e,t){e=x(e),t=x(t);let r=Math.max(ye(e),0),n=Math.max(ye(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Kl=.56,Ql=.57,ec=.62,tc=.65,oo=.022,rc=1.414,nc=.1,oc=5e-4,ac=1.14,ao=.027,sc=1.14;function so(e){return e>=oo?e:e+(oo-e)**rc}function ze(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function ic(e,t){t=x(t),e=x(e);let r,n,o,a,s,i;t=Z(t,"srgb"),[a,s,i]=t.coords;let l=ze(a)*.2126729+ze(s)*.7151522+ze(i)*.072175;e=Z(e,"srgb"),[a,s,i]=e.coords;let c=ze(a)*.2126729+ze(s)*.7151522+ze(i)*.072175,u=so(l),d=so(c),f=d>u;return Math.abs(d-u)<oc?n=0:f?(r=d**Kl-u**Ql,n=r*ac):(r=d**tc-u**ec,n=r*sc),Math.abs(n)<nc?o=0:n>0?o=n-ao:o=n+ao,o*100}function lc(e,t){e=x(e),t=x(t);let r=Math.max(ye(e),0),n=Math.max(ye(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const cc=5e4;function uc(e,t){e=x(e),t=x(t);let r=Math.max(ye(e),0),n=Math.max(ye(t),0);return n>r&&([r,n]=[n,r]),n===0?cc:(r-n)/n}function dc(e,t){e=x(e),t=x(t);let r=K(e,[W,"l"]),n=K(t,[W,"l"]);return Math.abs(r-n)}const fc=216/24389,io=24/116,kt=24389/27;let br=te.D65;var Ir=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:br,base:J,fromBase(e){let r=e.map((n,o)=>n/br[o]).map(n=>n>fc?Math.cbrt(n):(kt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>io?Math.pow(t[0],3):(116*t[0]-16)/kt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/kt,t[2]>io?Math.pow(t[2],3):(116*t[2]-16)/kt].map((n,o)=>n*br[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const vr=Math.pow(5,.5)*.5+.5;function hc(e,t){e=x(e),t=x(t);let r=K(e,[Ir,"l"]),n=K(t,[Ir,"l"]),o=Math.abs(Math.pow(r,vr)-Math.pow(n,vr)),a=Math.pow(o,1/vr)*Math.SQRT2-40;return a<7.5?0:a}var Pt=Object.freeze({__proto__:null,contrastAPCA:ic,contrastDeltaPhi:hc,contrastLstar:dc,contrastMichelson:lc,contrastWCAG21:Jl,contrastWeber:uc});function pc(e,t,r={}){mt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Pt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=x(e),t=x(t);for(let a in Pt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Pt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ja(e){let[t,r,n]=gt(e,J),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ka(e){let[t,r,n]=gt(e,J),o=t+r+n;return[t/o,r/o]}function mc(e){Object.defineProperty(e.prototype,"uv",{get(){return Ja(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ka(this)}})}var gc=Object.freeze({__proto__:null,register:mc,uv:Ja,xy:Ka});function bc(e,t){return Ga(e,t,"lab")}const vc=Math.PI,lo=vc/180;function yc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=W.from(e),[,i,l]=it.from(W,[o,a,s]),[c,u,d]=W.from(t),f=it.from(W,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,m=i-f,g=a-u,y=s-d,$=g**2+y**2-m**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let R=.0638*i/(1+.0131*i)+.638,A;Number.isNaN(l)&&(l=0),l>=164&&l<=345?A=.56+Math.abs(.2*Math.cos((l+168)*lo)):A=.36+Math.abs(.4*Math.cos((l+35)*lo));let V=Math.pow(i,4),oe=Math.sqrt(V/(V+1900)),F=R*(oe*A+1-oe),M=(h/(r*S))**2;return M+=(m/(n*R))**2,M+=$/F**2,Math.sqrt(M)}const co=203;var dn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:J,fromBase(e){return e.map(t=>Math.max(t*co,0))},toBase(e){return e.map(t=>Math.max(t/co,0))}});const xt=1.15,St=.66,uo=2610/2**14,wc=2**14/2610,fo=3424/2**12,ho=2413/2**7,po=2392/2**7,$c=1.7*2523/2**5,mo=2**5/(1.7*2523),Ct=-.56,yr=16295499532821565e-27,kc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],xc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Sc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Cc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Qa=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:dn,fromBase(e){let[t,r,n]=e,o=xt*t-(xt-1)*n,a=St*r-(St-1)*t,i=N(kc,[o,a,n]).map(function(f){let h=fo+ho*(f/1e4)**uo,m=1+po*(f/1e4)**uo;return(h/m)**$c}),[l,c,u]=N(Sc,i);return[(1+Ct)*l/(1+Ct*l)-yr,c,u]},toBase(e){let[t,r,n]=e,o=(t+yr)/(1+Ct-Ct*(t+yr)),s=N(Cc,[o,r,n]).map(function(f){let h=fo-f**mo,m=po*f**mo-ho;return 1e4*(h/m)**wc}),[i,l,c]=N(xc,s),u=(i+(xt-1)*c)/xt,d=(l+(St-1)*u)/St;return[u,d,c]},formats:{color:{}}}),Vr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qa,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Qt(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Ec(e,t){let[r,n,o]=Vr.from(e),[a,s,i]=Vr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const es=3424/4096,ts=2413/128,rs=2392/128,go=2610/16384,_c=2523/32,Mc=16384/2610,bo=32/2523,Tc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Ac=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Rc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Pc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var jr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:dn,fromBase(e){let t=N(Tc,e);return Bc(t)},toBase(e){let t=Nc(e);return N(Pc,t)},formats:{color:{}}});function Bc(e){let t=e.map(function(r){let n=es+ts*(r/1e4)**go,o=1+rs*(r/1e4)**go;return(n/o)**_c});return N(Ac,t)}function Nc(e){return N(Rc,e).map(function(n){let o=Math.max(n**bo-es,0),a=ts-rs*n**bo;return 1e4*(o/a)**Mc})}function Lc(e,t){let[r,n,o]=jr.from(e),[a,s,i]=jr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Oc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],zc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Ic=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Vc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Ut=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:J,fromBase(e){let r=N(Oc,e).map(n=>Math.cbrt(n));return N(Ic,r)},toBase(e){let r=N(Vc,e).map(n=>n**3);return N(zc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function jc(e,t){let[r,n,o]=Ut.from(e),[a,s,i]=Ut.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Ft={deltaE76:bc,deltaECMC:yc,deltaE2000:zr,deltaEJz:Ec,deltaEITP:Lc,deltaEOK:jc};function Ke(e,t,r={}){mt(r)&&(r={method:r});let{method:n=ie.deltaE,...o}=r;e=x(e),t=x(t);for(let a in Ft)if("deltae"+n.toLowerCase()===a.toLowerCase())return Ft[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Dc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return be(e,n,o=>o*(1+t))}function Hc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return be(e,n,o=>o*(1-t))}var Uc=Object.freeze({__proto__:null,darken:Hc,lighten:Dc});function ns(e,t,r=.5,n={}){[e,t]=[x(e),x(t)],pe(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return bt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function os(e,t,r={}){let n;fn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[x(e),x(t)],n=bt(e,t,l));let c=Ke(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,m,g)=>{if(g===0)return 0;let y=Ke(m.color,d[g-1].color,a);return Math.max(h,y)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let m=d[h-1],g=d[h],y=(g.p+m.p)/2,$=n(y);f=Math.max(f,Ke($,m.color),Ke($,g.color)),d.splice(h,0,{p:y,color:n(y)}),h++}}}return d=d.map(f=>f.color),d}function bt(e,t,r={}){if(fn(e)){let[l,c]=[e,t];return bt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=x(e),t=x(t),e=lt(e),t=lt(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[ie.interpolationSpace]||e.space,o=o?b.get(o):n,e=Z(e,n),t=Z(t,n),e=ve(e),t=ve(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[K(e,c),K(t,c)];[u,d]=Vl(l,[u,d]),be(e,c,u),be(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return Vt(f,m,l)}),u=Vt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=Z(d,o)),d},{rangeArgs:i})}function fn(e){return pe(e)==="function"&&!!e.rangeArgs}ie.interpolationSpace="lab";function Fc(e){e.defineFunction("mix",ns,{returns:"color"}),e.defineFunction("range",bt,{returns:"function<color>"}),e.defineFunction("steps",os,{returns:"array<color>"})}var Yc=Object.freeze({__proto__:null,isRange:fn,mix:ns,range:bt,register:Fc,steps:os}),as=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ct,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ss=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:as,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Wc=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ss,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const qc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Xc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var is=new U({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:qc,fromXYZ_M:Xc}),Gc=new U({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:is,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Zc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Jc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var ls=new U({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:un,toXYZ_M:Zc,fromXYZ_M:Jc});const Kc=1/512,Qc=16/512;var eu=new U({id:"prophoto",name:"ProPhoto",base:ls,toBase(e){return e.map(t=>t<Qc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Kc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),tu=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Ut,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Qt(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const vo=203,yo=2610/2**14,ru=2**14/2610,nu=2523/2**5,wo=2**5/2523,$o=3424/2**12,ko=2413/2**7,xo=2392/2**7;var ou=new U({id:"rec2100pq",name:"REC.2100-PQ",base:er,toBase(e){return e.map(function(t){return(Math.max(t**wo-$o,0)/(ko-xo*t**wo))**ru*1e4/vo})},fromBase(e){return e.map(function(t){let r=Math.max(t*vo/1e4,0),n=$o+ko*r**yo,o=1+xo*r**yo;return(n/o)**nu})},formats:{color:{id:"rec2100-pq"}}});const So=.17883277,Co=.28466892,Eo=.55991073,wr=3.7743;var au=new U({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:er,toBase(e){return e.map(function(t){return t<=.5?t**2/3*wr:(Math.exp((t-Eo)/So)+Co)/12*wr})},fromBase(e){return e.map(function(t){return t/=wr,t<=1/12?Math.sqrt(3*t):So*Math.log(12*t-Co)+Eo})},formats:{color:{id:"rec2100-hlg"}}});const cs={};ge.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=us(e.W1,e.W2,e.options.method))});ge.add("chromatic-adaptation-end",e=>{e.M||(e.M=us(e.W1,e.W2,e.options.method))});function tr({id:e,toCone_M:t,fromCone_M:r}){cs[e]=arguments[0]}function us(e,t,r="Bradford"){let n=cs[r],[o,a,s]=N(n.toCone_M,e),[i,l,c]=N(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=N(u,n.toCone_M);return N(n.fromCone_M,d)}tr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});tr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});tr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});tr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(te,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});te.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const su=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],iu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ds=new U({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:te.ACES,toXYZ_M:su,fromXYZ_M:iu,formats:{color:{}}});const Et=2**-16,$r=-.35828683,_t=(Math.log2(65504)+9.72)/17.52;var lu=new U({id:"acescc",name:"ACEScc",coords:{r:{range:[$r,_t],name:"Red"},g:{range:[$r,_t],name:"Green"},b:{range:[$r,_t],name:"Blue"}},referred:"scene",base:ds,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Et)*2:r<_t?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Et)+9.72)/17.52:t<Et?(Math.log2(Et+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),_o=Object.freeze({__proto__:null,A98RGB:Gc,A98RGB_Linear:is,ACEScc:lu,ACEScg:ds,HSL:as,HSV:ss,HWB:Wc,ICTCP:jr,JzCzHz:Vr,Jzazbz:Qa,LCH:it,Lab:W,Lab_D65:Ir,OKLCH:tu,OKLab:Ut,P3:Xa,P3_Linear:Wa,ProPhoto:eu,ProPhoto_Linear:ls,REC_2020:Ya,REC_2020_Linear:er,REC_2100_HLG:au,REC_2100_PQ:ou,XYZ_ABS_D65:dn,XYZ_D50:un,XYZ_D65:J,sRGB:ct,sRGB_Linear:qa});let E=class j{constructor(...t){let r;t.length===1&&(r=x(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new j(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=ql(this,...t);return r.color=new j(r.color),r}static get(t,...r){return t instanceof j?t:new j(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=j.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return j.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>j.get(c)));return l};t in j||(j[t]=s),o&&(j.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)j.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(j);else for(let r in t)j.defineFunction(r,t[r])}};E.defineFunctions({get:K,getAll:gt,set:be,setAll:Fa,to:Z,equals:Xl,inGamut:tt,toGamut:ve,distance:Ga,toString:Ht});Object.assign(E,{util:Nl,hooks:ge,WHITES:te,Space:b,spaces:b.registry,parse:Ua,defaults:ie});for(let e of Object.keys(_o))b.register(_o[e]);for(let e in b.registry)Dr(e,b.registry[e]);ge.add("colorspace-init-end",e=>{var t;Dr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Dr(r,e)})});function Dr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(E.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}E.extend(Ft);E.extend({deltaE:Ke});Object.assign(E,{deltaEMethods:Ft});E.extend(Uc);E.extend({contrast:pc});E.extend(gc);E.extend(Zl);E.extend(Yc);E.extend(Pt);function fs(e){return fe(e,(t,r)=>r instanceof E?O(r.toString({format:"hex"})):fs(r))}const cu="dodgerblue";function Hr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function kr({background:e,foreground:t}){return{background:e??new E(Hr(t)),foreground:t??new E(Hr(e))}}var Yt;(function(e){e.Dark="dark",e.Light="light"})(Yt||(Yt={}));function uu(e){return e==="black"?"white":"black"}const du={black:{foregroundFaint1:new E("#ccc"),foregroundFaint2:new E("#eee")},white:{foregroundFaint1:new E("#ccc"),foregroundFaint2:new E("#eee")}},fu={black:{backgroundFaint1:new E("#666"),backgroundFaint2:new E("#444")},white:{backgroundFaint1:new E("#ccc"),backgroundFaint2:new E("#fafafa")}};function Mo({themeColor:e=cu,themeStyle:t=Yt.Light}={}){const r=new E(e),n=new E(t===Yt.Dark?"black":"white"),o=Hr(n),a=new E(o),s={nav:{hover:kr({background:r.clone().set({"hsl.l":93})}),active:kr({background:r.clone().set({"hsl.l":90})}),selected:kr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...fu[uu(o)],foreground:a,...du[o]}};return fs(s)}const Wt=Kr()("element-book-change-route"),To="vira-",{defineElement:vt,defineElementNoInputs:ju}=ya({assertInputs:e=>{if(!e.tagName.startsWith(To))throw new Error(`Tag name should start with '${To}' but got '${e.tagName}'`)}}),hu=E;function pu(e){try{if(!e)throw new Error("invalid empty color");return new hu(e)}catch{const r=String(e),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?Is({callback:()=>JSON.stringify(e),fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const hs=v`
    pointer-events: none;
    opacity: 0.3;
`,me=Ne({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),ut=Ne({"vira-form-input-border-radius":"8px"}),qt=Ne({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${ut["vira-form-input-border-radius"].value} + 4px)`});function ps({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=O(Uo(n+r+t));return v`
        ${O(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${qt["vira-focus-outline-color"].value};
            border-radius: ${qt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const mu=v`
    padding: 0;
    margin: 0;
`,Ee=v`
    ${mu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Ur=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,_=vt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ms=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(ms||{});const L=vt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ur};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${qt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${hs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Ee};
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
            transition: color ${me["vira-interaction-animation-duration"].value},
                background-color
                    ${me["vira-interaction-animation-duration"].value},
                border-color ${me["vira-interaction-animation-duration"].value};
        }

        ${ps({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${_} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${_.assign({icon:e.icon})}></${_}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Fr=(e=>(e.Header="header",e))(Fr||{});const Se=vt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Ee};
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
    `,events:{expandChange:Re()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
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
                    ${va(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),w=Ne({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function le({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function gu(e,t){const r=H(t).map(n=>{const o=t[n],a=pu(o);return`${w[n].name}: ${a.toString()};`}).join(" ");return le({name:e.name,svgTemplate:p`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const gs=le({name:"CloseX24Icon",svgTemplate:p`
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
    `});function Yr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Yr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function bs({value:e,allowed:t,blocked:r}){const n=t?Yr({input:e,matcher:t}):!0,o=r?Yr({input:e,matcher:r}):!1;return n&&!o}function vs(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(bs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function bu({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=Je(r,HTMLInputElement),s=r.data,i=t;let l=a.value??"";if(s)if(s.length===1)bs({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=i,n(s));else{const{filtered:c,blocked:u}=vs({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),i!==l&&o(l)}const T=vt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Re(),inputBlocked:Re()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${qt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${hs};
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
                ${Ee};
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
                ${Ur};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Ee};
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
                    ${me["vira-interaction-animation-duration"].value};
            }

            label {
                ${Ee};
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

            ${ps({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ee};
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
                ${Ur};
            }

            .close-x-button {
                ${Ee};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=vs({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?p`
                  <${_.assign({icon:e.icon})} class="left-side-icon"></${_}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${s}
                ${re(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${va(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${B("input",l=>{bu({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${re(!!(e.showClearButton&&e.value),p`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${B("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${_.assign({icon:gs})}></${_}>
                        </button>
                    `)}
                ${re(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Ze=vt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:Re()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&Pa(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return p`
                <a href=${s} rel="noopener noreferrer" ${B("click",n)}>
                    <slot></slot>
                </a>
            `}}}),ys=le({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Me=le({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ws=le({name:"Loader24Icon",svgTemplate:p`
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
    `}),vu=v`
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
`,$s=le({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${vu}
        </style>
        ${ws.svgTemplate}
    `}),hn=le({name:"Options24Icon",svgTemplate:p`
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
    `}),yu=le({name:"StatusFailure24Icon",svgTemplate:p`
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
    `}),wu=le({name:"StatusInProgress24Icon",svgTemplate:p`
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
    `}),$u=le({name:"StatusSuccess24Icon",svgTemplate:p`
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
    `}),ku={CloseX24Icon:gs,Element16Icon:ys,Element24Icon:Me,Loader24Icon:ws,LoaderAnimated24Icon:$s,Options24Icon:hn,StatusFailure24Icon:yu,StatusInProgress24Icon:wu,StatusSuccess24Icon:$u},{defineElement:Q,defineElementNoInputs:Du}=ya(),X=Q()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>v`
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
                ${B("click",a=>{(!e.router||Pa(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Wt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function xu(e,t){return e.entry.entryType===z.Root?!1:!!(e.entry.entryType===z.Page||he(t,e.fullUrlBreadcrumbs.slice(0,-1))||he(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ue=Q()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>v`
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
            ${X.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!xu(r,e.selectedPath))return;const n=v`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${X.assign({router:e.router,route:{paths:[D.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${vi({"title-row":!0,selected:e.selectedPath?he(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${re(je(r,z.ElementExample),p`
                                    <${_.assign({icon:ys})}></${_}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${X}>
                </li>
            `});return p`
            <${X.assign({route:He,router:e.router})}>
                <slot name=${ae.NavHeader}>Book</slot>
            </${X}>
            <ul>
                ${t}
            </ul>
        `}});async function Su(e){await Er(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await si(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const we=Q()({tagName:"book-error",styles:v`
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
    `,renderCallback({inputs:e}){return(G(e.message,"array")?e.message:[e.message]).map(r=>p`
                    <p>${r}</p>
                `)}}),dt=Q()({tagName:"book-page-controls",events:{controlValueChange:Re()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>v`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===C.Hidden)return"";const s=Cu(e.currentValues[n],o,i=>{const l=G(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return p`
                    <div class="control-wrapper">
                        ${re(a===0,p`
                                <${_.assign({icon:hn})}
                                    class="options-icon"
                                ></${_}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function Cu(e,t,r){return Le(t,C.Hidden)?"":Le(t,C.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${B("input",n=>{const o=Je(n,HTMLInputElement);r(o.checked)})}
            />
        `:Le(t,C.Color)?p`
            <input
                type="color"
                .value=${e}
                ${B("input",n=>{const o=Je(n,HTMLInputElement);r(o.value)})}
            />
        `:Le(t,C.Text)?p`
            <${T.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${B(T.events.valueChange,n=>{r(n.detail)})}
            ></${T}>
        `:Le(t,C.Number)?p`
            <input
                type="number"
                .value=${e}
                ${B("input",n=>{const o=Je(n,HTMLInputElement);r(o.value)})}
            />
        `:Le(t,C.Dropdown)?p`
            <select
                .value=${e}
                ${B("input",n=>{const o=Je(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Ao=Q()({tagName:"book-breadcrumbs",styles:v`
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
                <${X.assign({route:{hash:void 0,search:void 0,paths:[D.Book,...s]},router:e.router})}>
                    ${r}
                </${X}>
                ${i}
            `}):p`
                &nbsp;
            `}}),xr=Q()({tagName:"book-breadcrumbs-bar",styles:v`
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
            ${re(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Ao.assign({currentRoute:e.currentRoute,router:e.router})}></${Ao}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${B("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await qs(200),n.value===o&&(n.value?t(new Wt({paths:[D.Search,encodeURIComponent(n.value)]})):t(new Wt(He)))})}
            />
        `}}),Ro=Q()({tagName:"book-entry-description",styles:v`
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
            `)}}),Po=Q()({tagName:"book-page-wrapper",styles:v`
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
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[D.Book,...e.pageNode.fullUrlBreadcrumbs],n=Io(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${X.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${X}>
                    ${n?p`
                              <${we.assign({message:n.message})}></${we}>
                          `:p`
                              <${Ro.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Ro}>
                              <${dt.assign({config:e.pageNode.entry.controls,currentValues:sn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${dt}>
                          `}
                </div>
            </div>
        `}}),Mt=Q()({tagName:"book-element-example-controls",styles:v`
        :host {
            display: flex;
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[D.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${X.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${X}>
        `}}),Bo=Symbol("unset-internal-state"),No=Q()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Bo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Io(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Bo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${re(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${we.assign({message:`${t.elementExampleNode.entry.title} failed: ${ft(n)}`})}></${we}>
            `}},options:{allowPolymorphicState:!0}}),Lo=Q()({tagName:"book-element-example-wrapper",styles:v`
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
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Mt} {
            color: ${k["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${Mt.assign(Ws(e,["currentPageControls"]))}></${Mt}>
                <${No.assign(e)}></${No}>
            </div>
        `}});function ks(e,t,r,n){const o=Br(r,n),a=[];if(o){const s=ks(e,t,o,n);s&&a.push(s)}if(je(r,z.Page)&&!e.includes(r)){const s=sn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:fe(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Eu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[p`
                No results
            `];const s=xn(e,1)?ks(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&xn(e,1)?p`
                  <${dt.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${dt}>
              `:"",l=yi(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(je(c,z.Page))return p`
                    <${Po.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Po}>
                `;if(je(c,z.ElementExample)){const d=sn(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${Lo.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Lo}>
                `}else return je(c,z.Root)?"":p`
                    <${we.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${we}>
                `});return[i,l].flat()}const Ie=Q()({tagName:"book-entry-display",styles:v`
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

        ${xr} {
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
    `,events:{loadingRender:Re()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Nr(e.currentRoute.paths),s=Eu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return p`
            <${xr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${xr}>

            ${re(e.showLoading,p`
                    <div
                        ${Un(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${_.assign({icon:$s})}></${_}>
                    </div>
                    ${re(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${ae.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${Un(i=>{o({lastElement:i})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${ae.Footer}></slot>
                `)}
        `}});function _u(e,t,r){const n=Oo(e,t);if(n.length)return n;r(He);const o=Oo(e,He.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Oo(e,t){return e.filter(r=>ni({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Sr=ga()({tagName:"element-book-app",events:{pathUpdate:Re()},stateInitStatic:{currentRoute:He,router:void 0,loading:!0,colors:{config:void 0,theme:Mo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:v`
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

        ${ue} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{zo(e,Nr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,h,m,g,y;t._debug&&console.info("rendering element-book app");function s($){return{...e.currentRoute,...$}}function i($){const S=s($);return!he(e.currentRoute,S)}function l($){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,$].filter($e).join(" - "))}function c($){if(!i($))return;const S=s($);e.router?e.router.setRoutes(S):n({currentRoute:{...e.currentRoute,...S}}),t.elementBookRoutePaths&&!he(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(S.paths??[]))}try{if(t.elementBookRoutePaths&&!he(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const M=Al(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,I=>{n({currentRoute:I})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const $={themeColor:t.themeColor};if(!he($,(f=e.colors)==null?void 0:f.config)){const M=Mo($);n({colors:{config:$,theme:M}}),Bl(r,M)}const S=t._debug??!1,R=hl({entries:t.entries,debug:S});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Aa(R.tree,{children:(m=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:t.globalValues})}}));const A=Nr(e.currentRoute.paths),oe=(A?wl({flattenedNodes:R.flattenedNodes,searchQuery:A}):void 0)??_u(R.flattenedNodes,e.currentRoute.paths,c);l((g=oe[0])==null?void 0:g.entry.title);const F=(y=e.treeBasedControls)==null?void 0:y.controls;return F?(t._debug&&console.info({currentControls:F}),p`
                <div
                    class="root"
                    ${B(Wt,async M=>{const I=M.detail;if(!i(I))return;if(n({loading:!0}),c(I),!(r.shadowRoot.querySelector(ue.tagName)instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);zo(r,A,e.currentRoute)})}
                    ${B(dt.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const I=ml(F,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:I}})})}
                >
                    <${ue.assign({flattenedNodes:R.flattenedNodes,router:e.router,selectedPath:A?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ae.NavHeader}
                            slot=${ae.NavHeader}
                        ></slot>
                    </${ue}>
                    <${Ie.assign({controls:F,currentNodes:oe,currentRoute:e.currentRoute,debug:S,originalTree:R.tree,router:e.router,showLoading:e.loading})}
                        ${B(Ie.events.loadingRender,async M=>{await Er();const I=r.shadowRoot.querySelector(Ie.tagName);I?I.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ie.tagName}' for scrolling.`),await Er(),n({loading:!M.detail})})}
                    >
                        <slot
                            name=${ae.Footer}
                            slot=${ae.Footer}
                        ></slot>
                    </${Ie}>
                </div>
            `):p`
                    <${we.assign({message:"Failed to generate page controls."})}></${we}>
                `}catch($){return console.error($),p`
                <p class="error">${ft($)}</p>
            `}}});async function zo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ue.tagName);if(!(n instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);await Su(n)}const Ye=Pe({title:"Elements",parent:void 0}),Mu=Pe({parent:Ye,title:L.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:C.Color,initValue:L.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:C.Color,initValue:L.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:C.Color,initValue:L.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:C.Color,initValue:L.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??v``;e({title:r,styles:a,renderCallback({controls:s}){const i=v`
                        ${L.cssVars["vira-button-primary-color"].name}: ${O(s["Primary color"]||"inherit")};
                        ${L.cssVars["vira-button-secondary-color"].name}: ${O(s["Secondary color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-hover-color"].name}: ${O(s["Hover color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-active-color"].name}: ${O(s["Active color"]||"inherit")};
                    `;return p`
                        <${L.assign({text:"hello",...o})}
                            style=${i}
                        ></${L}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:hn}}),t({title:"outline",inputs:{buttonStyle:ms.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:v`
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
                `}})}}),Tu=Pe({title:Se.tagName,parent:Ye,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${Se.assign({expanded:!!r.expandedStates[o]})}
                                ${B(Se.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Fr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${B("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${re(!!r.showMoreStates[o],p`
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
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${Se.assign({expanded:!!r.expandedStates[o]})}
                                ${B(Se.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Fr.Header}
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
                                ${re(!!r.showMoreStates[o],p`
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
                        `)}})}}),Au=Pe({title:_.tagName,parent:Ye,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return p`
                    <${_.assign({icon:Me})}></${_}>
                `}}),e({title:"using createColoredIcon",renderCallback(){return p`
                    <${_.assign({icon:gu(Me,{"vira-icon-stroke-color":"red"})})}></${_}>
                `}})}}),Ru=Pe({title:T.tagName,parent:Ye,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:C.Color,initValue:T.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:C.Color,initValue:T.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:C.Color,initValue:T.cssVars["vira-input-border-color"].default},"Focus color":{controlType:C.Color,initValue:T.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:C.Color,initValue:T.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:v`
                    ${r||v``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:s,controls:i}){const l={[String(T.cssVars["vira-input-text-color"].name)]:i["Text color"],[String(T.cssVars["vira-input-placeholder-color"].name)]:i["Placeholder color"],[String(T.cssVars["vira-input-border-color"].name)]:i["Border color"],[String(T.cssVars["vira-input-focus-border-color"].name)]:i["Focus color"],[String(T.cssVars["vira-input-text-selection-color"].name)]:i["Selection color"]},c=fe(l,(d,f)=>f||"inherit"),u=Object.entries(c).map(([d,f])=>[d,f].join(": ")+";").join(`
`);return p`
                        <${T.assign({...o,value:a.value})}
                            style=${u}
                            ${B(T.events.valueChange,d=>{s({value:d.detail})})}
                        ></${T}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:Me}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:v`
                ${T} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:Me}}),t({title:"taller height",styles:v`
                ${T} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:Me}}),t({title:"shorter height",styles:v`
                ${T} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Me}}),t({title:"max width",styles:v`
                ${T} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:v`
                ${T} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Pu=Pe({title:Ze.tagName,parent:Ye,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:C.Color,initValue:""},"Hover color":{controlType:C.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=v`
                        ${Ze.cssVars["vira-link-hover-color"].name}: ${O(o["Hover color"]||"inherit")};
                        color: ${O(o["CSS Color"]||"inherit")};
                    `;return p`
                        <${Ze.assign(n)}
                            style=${a}
                            ${B(Ze.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${Ze}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),Bu=Pe({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:C.Color,initValue:""},"Fill Color":{controlType:C.Color,initValue:""},"Stroke Width":{controlType:C.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(ku).forEach(t=>{e({title:t.name,styles:v`
                    :host(:hover) ${_} {
                        background-color: #f2f2f2;
                    }

                    ${_} {
                        padding: 8px;
                        border-radius: ${ut["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=v`
                        ${w["vira-icon-fill-color"].name}: ${O(r["Fill Color"]||"inherit")};
                        ${w["vira-icon-stroke-color"].name}: ${O(r["Stroke Color"]||"inherit")};
                        ${w["vira-icon-stroke-width"].name}: ${O(Uo(r["Stroke Width"])||"inherit")};
                    `;return p`
                        <${_.assign({icon:t})} style=${n}></${_}>
                    `}})})}}),Nu=[Ye,Bu,Mu,Tu,Au,Ru,Pu];Jt({tagName:"vira-book-app",styles:v`
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
    `,renderCallback(){return p`
            <${Sr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Nu,themeColor:"#33ccff"})}>
                <h1 slot=${ae.NavHeader}>Vira</h1>
            </${Sr}>
        `}});
