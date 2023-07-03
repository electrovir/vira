var Mi=Object.defineProperty;var Ai=(e,t,r)=>t in e?Mi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var lr=(e,t,r)=>(Ai(e,typeof t!="symbol"?t+"":t,r),r),cr=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var Ce=(e,t,r)=>(cr(e,t,"read from private field"),r?r.call(e):t.get(e)),je=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},ur=(e,t,r,n)=>(cr(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var yt=(e,t,r)=>(cr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Se(e,t){return e.controlType===t}var x;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(x||(x={}));const qo=Symbol("any-type"),Pi={[x.Checkbox]:!1,[x.Color]:"",[x.Dropdown]:"",[x.Hidden]:qo,[x.Number]:0,[x.Text]:""};function Ri(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=Pi[o.controlType];a!==qo&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Bi(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ni={capitalizeFirstLetter:!1};function Li(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function zi(e,t){return t.capitalizeFirstLetter?Li(e):e}function Oi(e,t=Ni){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return zi(n,t)}function Go(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Jt(r).trim()).join(`
`))}function Jt(e){return e?e instanceof Error?e.message:xe(e,"message")?String(e.message):String(e):""}function Jo(e){return e instanceof Error?e:new Error(Jt(e))}function on(e){return!!e}function Pn(e){return!!e&&typeof e=="object"}function Ii(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Hi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function xe(e,t){return e?Hi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function an(e,t){return e&&t.every(r=>xe(e,r))}function ce(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Di(e){return Array.isArray(e)?"array":typeof e}function Kt(e,t){return Di(e)===t}function Rn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Bn="Failed to compare objects using JSON.stringify";function Nn(e,t,r){return Rn({source:e,errorHandler(n){if(r)return"";throw n}})===Rn({source:t,errorHandler(n){if(r)return"";throw n}})}function qe(e,t,r={}){try{return e===t?!0:Pn(e)&&Pn(t)?Nn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>qe(e[o],t[o])):!1:Nn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Jo(n);throw o.message.startsWith(Bn)||(o.message=`${Bn}: ${o.message}`),o}}function Fi(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Vi(e){return ce(e).filter(t=>isNaN(Number(t)))}function ji(e){return Vi(e).map(r=>e[r])}function Ui(e,t){return ji(t).includes(e)}function Le(e,t){let r=!1;const n=ce(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(ce(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function Yi(e){const t=sn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function sn(){let e,t,r=!1;const n=new Promise((o,a)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,a(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${sn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ln(e,t){try{return Ko(e,t),!0}catch{return!1}}function Ko(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}var O;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(O||(O={}));function ln(e,t){const r=Bt(e.title);return e.parent?[...ln(e.parent,!1),Bt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Bt(e){return Bi(e).toLowerCase().replaceAll(/\s/g,"-")}function Zi({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function ke(e){const t={...e,entryType:O.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:O.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(on)};r.add(n.title),t.elementExamples[Bt(o.title)]=o}}),t}var ie;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ie||(ie={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dt=e=>(...t)=>({_$litDirective$:e,values:t});let Oe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr;const Nt=window,ze=Nt.trustedTypes,zn=ze?ze.createPolicy("lit-html",{createHTML:e=>e}):void 0,Lt="$lit$",ae=`lit$${(Math.random()+"").slice(9)}$`,cn="?"+ae,Wi=`<${cn}>`,ye=document,rt=()=>ye.createComment(""),nt=e=>e===null||typeof e!="object"&&typeof e!="function",Qo=Array.isArray,ea=e=>Qo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",hr=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,On=/-->/g,In=/>/g,pe=RegExp(`>|${hr}(?:([^\\s"'>=/]+)(${hr}*=${hr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hn=/'/g,Dn=/"/g,ta=/^(?:script|style|textarea|title)$/i,Xi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),qi=Xi(1),J=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Fn=new WeakMap,ge=ye.createTreeWalker(ye,129,null,!1),ra=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",i=Ue;for(let l=0;l<r;l++){const c=e[l];let d,u,h=-1,m=0;for(;m<c.length&&(i.lastIndex=m,u=i.exec(c),u!==null);)m=i.lastIndex,i===Ue?u[1]==="!--"?i=On:u[1]!==void 0?i=In:u[2]!==void 0?(ta.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=pe):u[3]!==void 0&&(i=pe):i===pe?u[0]===">"?(i=o??Ue,h=-1):u[1]===void 0?h=-2:(h=i.lastIndex-u[2].length,d=u[1],i=u[3]===void 0?pe:u[3]==='"'?Dn:Hn):i===Dn||i===Hn?i=pe:i===On||i===In?i=Ue:(i=pe,o=void 0);const f=i===pe&&e[l+1].startsWith("/>")?" ":"";a+=i===Ue?c+Wi:h>=0?(n.push(d),c.slice(0,h)+Lt+c.slice(h)+ae+f):c+ae+(h===-2?(n.push(void 0),l):f)}const s=a+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[zn!==void 0?zn.createHTML(s):s,n]};class ot{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,i=0;const s=t.length-1,l=this.parts,[c,d]=ra(t,r);if(this.el=ot.createElement(c,n),ge.currentNode=this.el.content,r===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=ge.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(Lt)||h.startsWith(ae)){const m=d[i++];if(u.push(h),m!==void 0){const f=o.getAttribute(m.toLowerCase()+Lt).split(ae),b=/([.?@])?(.*)/.exec(m);l.push({type:1,index:a,name:b[2],strings:f,ctor:b[1]==="."?oa:b[1]==="?"?aa:b[1]==="@"?ia:ht})}else l.push({type:6,index:a})}for(const h of u)o.removeAttribute(h)}if(ta.test(o.tagName)){const u=o.textContent.split(ae),h=u.length-1;if(h>0){o.textContent=ze?ze.emptyScript:"";for(let m=0;m<h;m++)o.append(u[m],rt()),ge.nextNode(),l.push({type:2,index:++a});o.append(u[h],rt())}}}else if(o.nodeType===8)if(o.data===cn)l.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(ae,u+1))!==-1;)l.push({type:7,index:a}),u+=ae.length-1}a++}}static createElement(t,r){const n=ye.createElement("template");return n.innerHTML=t,n}}function we(e,t,r=e,n){var o,a,i,s;if(t===J)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=nt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(s=r)._$Co)!==null&&i!==void 0?i:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=we(e,l._$AS(e,t.values),l,n)),t}let na=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:ye).importNode(n,!0);ge.currentNode=a;let i=ge.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new Ie(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new sa(i,this,t)),this._$AV.push(d),c=o[++l]}s!==(c==null?void 0:c.index)&&(i=ge.nextNode(),s++)}return ge.currentNode=ye,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class Ie{constructor(t,r,n,o){var a;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=we(this,t,r),nt(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==J&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ea(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.$(ye.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ot.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const i=new na(a,this),s=i.u(this.options);i.v(n),this.$(s),this._$AH=i}}_$AC(t){let r=Fn.get(t.strings);return r===void 0&&Fn.set(t.strings,r=new ot(t)),r}T(t){Qo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Ie(this.k(rt()),this.k(rt()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ht{constructor(t,r,n,o,a){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let i=!1;if(a===void 0)t=we(this,t,r,0),i=!nt(t)||t!==this._$AH&&t!==J,i&&(this._$AH=t);else{const s=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=we(this,s[n+l],r,l),c===J&&(c=this._$AH[l]),i||(i=!nt(c)||c!==this._$AH[l]),c===M?t=M:t!==M&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class oa extends ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const Gi=ze?ze.emptyScript:"";class aa extends ht{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,Gi):this.element.removeAttribute(this.name)}}class ia extends ht{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=we(this,t,r,0))!==null&&n!==void 0?n:M)===J)return;const o=this._$AH,a=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==M&&(o===M||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class sa{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){we(this,t)}}const Ji={O:Lt,P:ae,A:cn,C:1,M:ra,L:na,D:ea,R:we,I:Ie,V:ht,H:aa,N:ia,U:oa,F:sa},Vn=Nt.litHtmlPolyfillSupport;Vn==null||Vn(ot,Ie),((dr=Nt.litHtmlVersions)!==null&&dr!==void 0?dr:Nt.litHtmlVersions=[]).push("2.7.4");const Ki=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let i=a._$litPart$;if(i===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=i=new Ie(t.insertBefore(rt(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Qi}=Ji,jn=()=>document.createComment(""),Ye=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=o.insertBefore(jn(),a),s=o.insertBefore(jn(),a);r=new Qi(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(i!==a||l){let c=r._$AA;for(;c!==i;){const d=c.nextSibling;o.insertBefore(c,a),c=d}}}return r},me=(e,t,r=e)=>(e._$AI(t,r),e),es={},ts=(e,t=es)=>e._$AH=t,rs=e=>e._$AH,fr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const un=dt(class extends Oe{constructor(e){var t;if(super(e),e.type!==Qt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const i=!!t[a];i===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(i?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return J}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},ns=dt(class extends Oe{constructor(e){if(super(e),e.type!==Qt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let i=0;for(const s of e)o[i]=n?n(s,i):i,a[i]=r(s,i),i++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=rs(e),{values:i,keys:s}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=s,i;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,h=0,m=a.length-1,f=0,b=i.length-1;for(;h<=m&&f<=b;)if(a[h]===null)h++;else if(a[m]===null)m--;else if(l[h]===s[f])c[f]=me(a[h],i[f]),h++,f++;else if(l[m]===s[b])c[b]=me(a[m],i[b]),m--,b--;else if(l[h]===s[b])c[b]=me(a[h],i[b]),Ye(e,c[b+1],a[h]),h++,b--;else if(l[m]===s[f])c[f]=me(a[m],i[f]),Ye(e,a[h],a[m]),m--,f++;else if(d===void 0&&(d=Un(s,f,b),u=Un(l,h,m)),d.has(l[h]))if(d.has(l[m])){const $=u.get(s[f]),S=$!==void 0?a[$]:null;if(S===null){const R=Ye(e,a[h]);me(R,i[f]),c[f]=R}else c[f]=me(S,i[f]),Ye(e,a[h],S),a[$]=null;f++}else fr(a[m]),m--;else fr(a[h]),h++;for(;f<=b;){const $=Ye(e,c[b+1]);me($,i[f]),c[f++]=$}for(;h<=m;){const $=a[h++];$!==null&&fr($)}return this.ht=s,ts(e,c),J}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nr=class extends Oe{constructor(t){if(super(t),this.et=M,t.type!==Qt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||t==null)return this.ft=void 0,this.et=t;if(t===J)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Nr.directiveName="unsafeHTML",Nr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yn=class extends Nr{};Yn.directiveName="unsafeSVG",Yn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function os(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=window,dn=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hn=Symbol(),Zn=new WeakMap;let la=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==hn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(dn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Zn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Zn.set(r,t))}return t}toString(){return this.cssText}};const _=e=>new la(typeof e=="string"?e:e+"",void 0,hn),Ge=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new la(r,e,hn)},as=(e,t)=>{dn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=At.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Wn=dn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return _(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pr;const zt=window,Xn=zt.trustedTypes,is=Xn?Xn.emptyScript:"",qn=zt.reactiveElementPolyfillSupport,Lr={toAttribute(e,t){switch(t){case Boolean:e=e?is:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ca=(e,t)=>t!==e&&(t==t||e==e),mr={attribute:!0,type:String,converter:Lr,reflect:!1,hasChanged:ca},zr="finalized";class Ae extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=mr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||mr}static finalize(){if(this.hasOwnProperty(zr))return!1;this[zr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Wn(o))}else t!==void 0&&r.push(Wn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return as(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=mr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Lr).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const i=o.getPropertyOptions(a),s=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:Lr;this._$El=a,this[a]=s.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ca)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Ae[zr]=!0,Ae.elementProperties=new Map,Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},qn==null||qn({ReactiveElement:Ae}),((pr=zt.reactiveElementVersions)!==null&&pr!==void 0?pr:zt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr,br;class Je extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ki(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return J}}Je.finalized=!0,Je._$litElement$=!0,(gr=globalThis.litElementHydrateSupport)===null||gr===void 0||gr.call(globalThis,{LitElement:Je});const Gn=globalThis.litElementPolyfillSupport;Gn==null||Gn({LitElement:Je});((br=globalThis.litElementVersions)!==null&&br!==void 0?br:globalThis.litElementVersions=[]).push("3.3.2");var ss=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function i(S){if(S!==void 0&&typeof S!="function")throw new TypeError("Function expected");return S}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,m=r.length-1;m>=0;m--){var f={};for(var b in n)f[b]=b==="access"?{}:n[b];for(var b in n.access)f.access[b]=n.access[b];f.addInitializer=function(S){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i(S||null))};var $=(0,r[m])(s==="accessor"?{get:d.get,set:d.set}:d[l],f);if(s==="accessor"){if($===void 0)continue;if($===null||typeof $!="object")throw new TypeError("Object expected");(u=i($.get))&&(d.get=u),(u=i($.set))&&(d.set=u),(u=i($.init))&&o.push(u)}else(u=i($))&&(s==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},ls=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},cs=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function us(){function e(t,r){return t}return e}let ua=(()=>{let e=[us()],t,r=[],n;return n=class extends Je{},cs(n,"DeclarativeElement"),ss(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,ls(n,r),n})();function Jn(e){return e!==e.toUpperCase()}function ds(e){return e.split("").reduce((r,n,o,a)=>{const i=o>0?a[o-1]:"",s=o<a.length-1?a[o+1]:"",l=Jn(i)||Jn(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const hs=["january","february","march","april","may","june","july","august","september","october","november","december"];hs.map(e=>e.slice(0,3));function fs(e){return!!e&&typeof e=="object"}function Kn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ps(e){return Array.isArray(e)?"array":typeof e}function ms(e,t){return ps(e)===t}function gs(e,t){let r=!1;const n=Kn(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Kn(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function j(e){if(fs(e))return gs(e,(r,n)=>{if(!ms(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(ds(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,i=r.startsWith("--")?_(r):r.startsWith("-")?Ge`-${_(r)}`:Ge`--${_(r)}`;return{name:i,value:Ge`var(${i}, ${_(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${j.name}' function.`)}function bs({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vs=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},$s=(e,t,r)=>{t.constructor.createProperty(r,e)};function da(e){return(t,r)=>r!==void 0?$s(e,t,r):vs(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vr;((vr=window.HTMLSlotElement)===null||vr===void 0?void 0:vr.prototype.assignedElements)!=null;const Or=Symbol("this-is-an-element-vir-declarative-element"),fn=Symbol("key for ignoring inputs not having been set yet"),ys={[fn]:!0,allowPolymorphicState:!1};function ha(e,t){const r=e.instanceState;ce(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ce(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),fa(e)}function fa(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function pa(e,t){return Ir(e,t),e.element}function ws(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ir(e,t){const r=ws(e),n=r?`: found in ${r}`:"";if(e.type!==Qt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function y(e,t){return t?Qn(e,t):Qn(void 0,e)}const Qn=dt(class extends Oe{constructor(e){super(e),this.element=pa(e,"assign")}render(e,t){return xs(e,this.element,t),J}});function xs(e,t,r){ha(t,r)}function ma(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ua?!0:ma(r)}function eo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class ks extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function pn(){return e=>{var t;return t=class extends ks{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function se(){return pn()}function Cs(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=pn()(r);return t[r]=n,t},{}):{}}const to="_is_element_vir_observable_property_handler_instance",ro="_is_element_vir_observable_property_handler_creator";function Ss(e){return xe(e,ro)&&e[ro]===!0}function Es(e){return xe(e,to)&&e[to]===!0}function _s(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function no(e,t){const r=e;function n(i){t?_s(i,e,e.tagName):da()(e,i)}function o(i,s){return n(s),r[s]}return new Proxy({},{get:o,set:(i,s,l)=>{n(s);const c=e.observablePropertyHandlerMap[s];function d(u){i[s]=u,r[s]=u}return Ss(l)&&(l=l.init()),Es(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[s]=l):c?c.setValue(l):d(l),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,s){if(s in i)return{get value(){return o(i,s)},configurable:!0,enumerable:!0}},has:(i,s)=>Reflect.has(i,s)})}function Ts(e){return e?Le(e,t=>t):{}}function Ms({hostClassNames:e,cssVars:t}){return{hostClasses:Le(e,(r,n)=>({name:_(n),selector:_(`:host(.${n})`)})),cssVars:t}}function As({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ce(t).forEach(a=>{const i=t[a],s=r[a];typeof i=="function"&&(i({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Ps(e,t){function r(o){ce(o).forEach(a=>{const i=o[a];e.instanceState[a]=i})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Rs=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function er(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...ys,...e.options},n=Cs(e.events),o=Ts(e.hostClasses);e.hostClasses&&eo(e.tagName,e.hostClasses),e.cssVars&&eo(e.tagName,e.cssVars);const a=e.cssVars?j(e.cssVars):{},i=typeof e.styles=="function"?e.styles(Ms({hostClassNames:o,cssVars:a})):e.styles||Ge``,s=e.renderCallback,l=(t=class extends ua{createRenderParams(){return Ps(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){fa(this)}render(){try{ma(this)&&!this.haveInputsBeenSet&&!r[fn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${y.name}" directive on it. If no inputs are intended, use "${er.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(c);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return As({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=Jo(c);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){ha(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=no(this,!1),this.instanceState=no(this,!((d=e.options)!=null&&d.allowPolymorphicState));const c=e.stateInitStatic||{};ce(c).forEach(u=>{da()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},Rs(t,"anonymousClass"),t.tagName=e.tagName,t.styles=i,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[Or]:{value:!0,writable:!1},name:{value:Oi(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function ga(){return e=>er({...e,options:{[fn]:!1,...e.options}})}function A(e,t){return Bs(e,t)}const Bs=dt(class extends Oe{constructor(e){super(e),this.element=pa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),J}}),$r="onResize",tr=dt(class extends Oe{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Ir(e,$r)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${$r} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Ir(e,$r),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function ee(e,t,r){return os(e,()=>t,()=>r)}function mn(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),ga()(r(n))),defineElementNoInputs:n=>(t(n),er(r(n)))}}function Ns(e,t){return e.filter((r,n)=>!t.includes(n))}function ba(e){return e.filter(t=>an(t,["tagName",Or])&&!!t.tagName&&!!t[Or])}const va=new WeakMap;function Ls(e,t){var o;const r=ba(t);return(o=$a(va,[e,...r]).value)==null?void 0:o.template}function zs(e,t,r){const n=ba(t);return wa(va,[e,...n],r)}function $a(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ya(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?$a(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ya(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function wa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:i}=ya(e,t,n);if(!a)return{result:!1,reason:i};const s=o??{nested:void 0,template:void 0};if(o||e.set(a,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),wa(l,t,r,n+1)}function xa(e,t,r){return{name:e,check:t,transform:r}}const Os=new WeakMap;function ka(e,t,r){const n=Ls(e,t),o=n??r();if(!n){const i=zs(e,t,o);if(i.result)Os.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=Ns(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Ca(e,t,r,n){const o=[],a=[],i=[];return e.forEach((l,c)=>{var $;const d=o.length-1,u=o[d],h=c-1,m=t[h];let f;n&&n(l),typeof u=="string"&&(f=($=r.find(S=>S.check(u,l,m)))==null?void 0:$.transform,f&&(o[d]=u+f(m)+l,i.push(h))),f||o.push(l);const b=e.raw[c];f?a[d]=a[d]+f(m)+b:a.push(b)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:i}}function Sa(e){return xe(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Is=[xa("tag name css selector interpolation",(e,t,r)=>Sa(r),e=>e.tagName)];function Hs(e,t){return Ca(e,t,Is)}function g(e,...t){const r=ka(e,t,()=>Hs(e,t));return Ge(r.strings,...r.values)}const Ds=[xa("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=Sa(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Fs(e){}function Vs(e){return Ca(e.strings,e.values,Ds,Fs)}function p(e,...t){const r=qi(e,...t),n=ka(e,t,()=>Vs(r));return{...r,strings:n.strings,values:n.values}}function js(e,t){return xe(e,"entryType")&&e.entryType===t}const Us={[O.ElementExample]:()=>[],[O.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Ri(e.controls,e.title)].filter(on),[O.Root]:()=>[]},Ot="_isBookTreeNode",Ea=new Map;function Ys(e){return Ea.get(e)}function Zs(e,t){Fi(Ea,e,()=>t)}function Be(e,t){return!!(_a(e)&&e.entry.entryType===t)}function _a(e){return!!(an(e,[Ot,"entry"])&&e[Ot])}function Ws(e,t){return{[Ot]:!0,entry:{entryType:O.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Xs({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=Ys(e);if(o)return o;const a=Ws(t,r);e.forEach(l=>gn({tree:a,newEntry:l,debug:n,manuallyAdded:!0}));const i=Ta(a),s={tree:a,flattenedNodes:i};return Zs(e,s),n&&console.info("element-book tree:",a),s}function qs(e,t,r){if(!t.parent)return e;const n=Hr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),gn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Hr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${ln(t,!1)}`);return o}function gn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Us[t.entryType](t);t.errors.push(...o);const a=qs(e,t,r),i=Bt(t.title),s=a.children[i];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${i}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Ot]:!0,children:{},urlBreadcrumb:i,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,i],entry:t,manuallyAdded:n};a.children[i]=l,js(t,O.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>gn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Hr(e,t){const r=_a(e)?e.fullUrlBreadcrumbs.slice(0,-1):ln(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ta(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ta(o));return[e,...r].flat()}function Gs(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function bn(e,t){return vn(e,t,void 0)}function vn(e,t,r){const n=t[0];if(!n)return{};const o=Gs(e,n,r);if(!o)return{};const a=t.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,...vn(o.children,a,r)}}function Js(e,t,r){const n=Ii(e);return vn(n,t,r),n}function Ma(e){return Le(e.children,(r,n)=>Be(n,O.Page)?{children:Ma(n),controls:Le(n.entry.controls,(o,a)=>a.initValue)}:{children:{},controls:{}})}async function Ks(e=1){const t=sn();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const Qs=globalThis.crypto;function el(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Qs.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function tl(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{Ko(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Ze(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function rl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let i=0,s=0;i<n;i++){const l=a.charCodeAt(i);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const nl=el(32);function Dr(e){return e.join(nl)}function Aa(e){if(!e.length)return[];const t=Dr(e),r=Aa(e.slice(0,-1));return[t,...r]}const ol=["error","errors"];function al(e){return ol.includes(e)}function il({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&al(t);if(rl({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)Aa(n.fullUrlBreadcrumbs).forEach(s=>r[s]=!0);else{const i=Dr(n.fullUrlBreadcrumbs);r[i]=!1}}),e.filter(n=>{const o=Dr(n.fullUrlBreadcrumbs),a=r[o];if(!Kt(a,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var H;(function(e){e.Search="search",e.Book="book"})(H||(H={}));function Pa(e){return e[0]===H.Book?"":e[1]?decodeURIComponent(e[1]):""}const at={hash:void 0,paths:[H.Book],search:void 0},sl=0;function Ra(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==sl)}class rr extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class oo extends rr{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const it="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const ll=globalThis.history.pushState;function ao(...e){const t=ll.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(it)),t}const cl=globalThis.history.replaceState;function io(...e){const t=cl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(it)),t}function ul(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ao)throw new oo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===io)throw new oo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ao,globalThis.history.replaceState=io,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(it))})}}function dl(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function hl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function fl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),a=globalThis.location.search?dl(new URLSearchParams(globalThis.location.search)):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:a,hash:i}}function Ba(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Na({routeBase:e,windowPath:t}){if(!e)return"";const r=Ba(e);if(La({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Na({routeBase:n,windowPath:t}):""}function La({routeBase:e,windowPath:t}){const r=Ba(e);return r?t.startsWith(`/${r}`):!1}class pl extends rr{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function za(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const so=6;function lo(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>so)throw new pl(`Route sanitization depth has exceed the max of ${so} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(za(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class yr extends rr{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function ml(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new yr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new yr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new yr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function gl(e,t,r=!1){const n=Oa(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Oa(e,t){var l;const r=La({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?hl(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",i=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(on).join("/")}${o}${i}`}function bl(e={}){ml(e),ul();const t=e.routeBase?Na({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>lo(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const i={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(i):i},setRoutes(a,i=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},d=o.sanitizeFullRoute(c);if(!(!s&&za(l,d)))return gl(d,t,i)},createRoutesUrl(a){return Oa(a,t)},getCurrentRawRoutes(){return fl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,i){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new rr(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(i),r||(globalThis.addEventListener(it,n),r=!0),a&&lo(o,i),i},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const i=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(it,n),r=!1),i},sanitizationDepth:0};return o}function vl(e){return bl({routeBase:e,routeSanitizer(t){return{paths:$l(t.paths),hash:void 0,search:void 0}}})}function $l(e){const t=e[0];if(Ui(t,H)){if(t===H.Book)return[H.Book,...e.slice(1)];if(t===H.Search)return e[1]?[t,e[1]]:[H.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return at.paths}const w=j({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),yl={nav:{hover:{background:w["element-book-nav-hover-background-color"],foreground:w["element-book-nav-hover-foreground-color"]},active:{background:w["element-book-nav-active-background-color"],foreground:w["element-book-nav-active-foreground-color"]},selected:{background:w["element-book-nav-selected-background-color"],foreground:w["element-book-nav-selected-foreground-color"]}},accent:{icon:w["element-book-accent-icon-color"]},page:{background:w["element-book-page-background-color"],backgroundFaint1:w["element-book-page-background-faint-level-1-color"],backgroundFaint2:w["element-book-page-background-faint-level-2-color"],foreground:w["element-book-page-foreground-color"],foregroundFaint1:w["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:w["element-book-page-foreground-faint-level-2-color"]}};function wl(e,t){Ia(e,t,yl)}function Fr(e){return xe(e,"_$cssResult$")}function co(e){return an(e,["name","value","default"])&&Kt(e.default,"string")&&Fr(e.name)&&Fr(e.value)}function Ia(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Fr(o)){if(!co(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);bs({forCssVar:a,onElement:e,toValue:String(o)})}else{if(co(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ia(e,o,a)}})}function P(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let n=t[0].length,o=t[0].map((i,s)=>t.map(l=>l[s])),a=e.map(i=>o.map(s=>{let l=0;if(!Array.isArray(i)){for(let c of s)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(s[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(i=>i[0]):a}function ft(e){return le(e)==="string"}function le(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function It(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ha(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),a.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Da(e){return e[e.length-1]}function Ht(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Fa(e,t,r){return(r-e)/(t-e)}function $n(e,t,r){return Ht(t[0],t[1],Fa(e[0],e[1],r))}function Va(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var xl=Object.freeze({__proto__:null,isString:ft,type:le,toPrecision:It,parseFunction:Ha,last:Da,interpolate:Ht,interpolateInv:Fa,mapRange:$n,parseCoordGrammar:Va,multiplyMatrices:P});class kl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ue=new kl;var te={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const G={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Vr(e){return Array.isArray(e)?e:G[e]}function Dt(e,t,r,n={}){if(e=Vr(e),t=Vr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ue.run("chromatic-adaptation-start",o),o.M||(o.W1===G.D65&&o.W2===G.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===G.D50&&o.W2===G.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ue.run("chromatic-adaptation-end",o),o.M)return P(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Cl=75e-6;var ut,jr,Ne,Gt,ja;const q=class{constructor(t){je(this,ut);je(this,Gt);je(this,Ne,void 0);var o,a,i;this.id=t.id,this.name=t.name,this.base=t.base?q.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=Vr(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,ur(this,Ne,yt(this,Gt,ja).call(this).reverse()),ue.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Cl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let i=n[a];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[s,l]=i.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=yt(this,ut,jr).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=yt(this,ut,jr).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=q.get(t),this===t)return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=Ce(this,Ne),o=Ce(t,Ne),a,i;for(let s=0;s<n.length&&n[s]===o[s];s++)a=n[s],i=s;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>i;s--)r=n[s].toBase(r);for(let s=i+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=q.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(q.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof q)return t;if(le(t)==="string"){let o=q.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return q.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=le(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=q.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=le(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=q.get(o);let i=a.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===i||((l=d.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let v=q;ut=new WeakSet,jr=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=Va(t.coords);let r=Object.entries(this.coords).map(([n,o],a)=>{let i=t.coordGrammar[a][0],s=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((a,i)=>{let{fromRange:s,toRange:l,suffix:c}=r[i];return s&&l&&(a=$n(s,l,a)),a=It(a,o),c&&(a+=c),a})}return t},Ne=new WeakMap,Gt=new WeakSet,ja=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},lr(v,"registry",{}),lr(v,"DEFAULT_FORMAT",{type:"functions",name:"color"});var Y=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class F extends v{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Y),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=P(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Dt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Dt(this.base.white,this.white,r),P(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ua(e){var r,n,o,a,i;let t={str:(r=String(e))==null?void 0:r.trim()};if(ue.run("parse-start",t),t.color)return t.color;if(t.parsed=Ha(t.str),t.parsed){let s=t.parsed.name;if(s==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let u of v.all){let h=u.getFormat("color");if(h&&(l===h.id||(n=h.ids)!=null&&n.includes(l))){let m=Object.keys(u.coords).length,f=Array(m).fill(0);return f.forEach((b,$)=>f[$]=t.parsed.args[$]||0),{spaceId:u.id,coords:f,alpha:c}}}let d="";if(l in v.registry){let u=(i=(a=(o=v.registry[l].formats)==null?void 0:o.functions)==null?void 0:a.color)==null?void 0:i.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of v.all){let c=l.getFormat(s);if(c&&c.type==="function"){let d=1;(c.lastAlpha||Da(t.parsed.args).alpha)&&(d=t.parsed.args.pop());let u=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([h,m],f)=>{var E;let b=c.coordGrammar[f],$=(E=u[f])==null?void 0:E.type;if(b=b.find(T=>T==$),!b){let T=m.name||h;throw new TypeError(`${$} not allowed for ${T} in ${s}()`)}let S=b.range;$==="<percentage>"&&(S||(S=[0,1]));let R=m.range||m.refRange;S&&R&&(u[f]=$n(S,R,u[f]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let s of v.all)for(let l in s.formats){let c=s.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let d=c.parse(t.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function k(e){if(!e)throw new TypeError("Empty color reference");ft(e)&&(e=Ua(e));let t=e.space||e.spaceId;return t instanceof v||(e.space=v.get(t)),e.alpha===void 0&&(e.alpha=1),e}function pt(e,t){return t=v.get(t),t.from(e)}function Z(e,t){let{space:r,index:n}=v.resolveCoord(t,e.space);return pt(e,r)[n]}function Ya(e,t,r){return t=v.get(t),e.coords=t.to(e.space,r),e}function de(e,t,r){if(e=k(e),arguments.length===2&&le(arguments[1])==="object"){let n=arguments[1];for(let o in n)de(e,o,n[o])}else{typeof r=="function"&&(r=r(Z(e,t)));let{space:n,index:o}=v.resolveCoord(t,e.space),a=pt(e,n);a[o]=r,Ya(e,n,a)}return e}var yn=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Y,fromBase:e=>Dt(Y.white,"D50",e),toBase:e=>Dt("D50",Y.white,e),formats:{color:{}}});const Sl=216/24389,uo=24/116,wt=24389/27;let wr=G.D50;var V=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:wr,base:yn,fromBase(e){let r=e.map((n,o)=>n/wr[o]).map(n=>n>Sl?Math.cbrt(n):(wt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>uo?Math.pow(t[0],3):(116*t[0]-16)/wt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wt,t[2]>uo?Math.pow(t[2],3):(116*t[2]-16)/wt].map((n,o)=>n*wr[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function nr(e){return(e%360+360)%360}function El(e,t){if(e==="raw")return t;let[r,n]=t.map(nr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var st=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:V,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),nr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const ho=25**7,Ft=Math.PI,fo=180/Ft,Ee=Ft/180;function Ur(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,i,s]=V.from(e),l=st.from(V,[a,i,s])[1],[c,d,u]=V.from(t),h=st.from(V,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let f=((l+h)/2)**7,b=.5*(1-Math.sqrt(f/(f+ho))),$=(1+b)*i,S=(1+b)*d,R=Math.sqrt($**2+s**2),E=Math.sqrt(S**2+u**2),T=$===0&&s===0?0:Math.atan2(s,$),re=S===0&&u===0?0:Math.atan2(u,S);T<0&&(T+=2*Ft),re<0&&(re+=2*Ft),T*=fo,re*=fo;let bt=c-a,vt=E-R,K=re-T,De=T+re,Sn=Math.abs(K),Fe;R*E===0?Fe=0:Sn<=180?Fe=K:K>180?Fe=K-360:K<-180?Fe=K+360:console.log("the unthinkable has happened");let En=2*Math.sqrt(E*R)*Math.sin(Fe*Ee/2),Ci=(a+c)/2,sr=(R+E)/2,_n=Math.pow(sr,7),ne;R*E===0?ne=De:Sn<=180?ne=De/2:De<360?ne=(De+360)/2:ne=(De-360)/2;let Tn=(Ci-50)**2,Si=1+.015*Tn/Math.sqrt(20+Tn),Mn=1+.045*sr,Ve=1;Ve-=.17*Math.cos((ne-30)*Ee),Ve+=.24*Math.cos(2*ne*Ee),Ve+=.32*Math.cos((3*ne+6)*Ee),Ve-=.2*Math.cos((4*ne-63)*Ee);let An=1+.015*sr*Ve,Ei=30*Math.exp(-1*((ne-275)/25)**2),_i=2*Math.sqrt(_n/(_n+ho)),Ti=-1*Math.sin(2*Ei*Ee)*_i,$t=(bt/(r*Si))**2;return $t+=(vt/(n*Mn))**2,$t+=(En/(o*An))**2,$t+=Ti*(vt/(n*Mn))*(En/(o*An)),Math.sqrt($t)}const _l=75e-6;function Ke(e,t=e.space,{epsilon:r=_l}={}){e=k(e),t=v.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function lt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function he(e,{method:t=te.gamut_mapping,space:r=e.space}={}){if(ft(arguments[1])&&(r=arguments[1]),r=v.get(r),Ke(e,r,{epsilon:0}))return e;let n=U(e,r);if(t!=="clip"&&!Ke(e,r)){let o=he(lt(n),{method:"clip",space:r});if(Ur(e,o)>2){let a=v.resolveCoord(t),i=a.space,s=a.id,l=U(n,i),d=(a.range||a.refRange)[0],u=.01,h=d,m=Z(l,s);for(;m-h>u;){let f=lt(l);f=he(f,{space:r,method:"clip"}),Ur(l,f)-2<u?h=Z(l,s):m=Z(l,s),de(l,s,(h+m)/2)}n=U(l,r)}else n=o}if(t==="clip"||!Ke(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,i)=>{let[s,l]=o[i];return s!==void 0&&(a=Math.max(s,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=U(n,e.space)),e.coords=n.coords,e}he.returns="color";function U(e,t,{inGamut:r}={}){e=k(e),t=v.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=he(o)),o}U.returns="color";function Vt(e,{precision:t=te.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=k(e);let i=r;r=e.space.getFormat(r)??e.space.getFormat("default")??v.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Ke(e)&&(s=he(lt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(m=>It(m,t)));let d=[...s];if(c==="color"){let m=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(m)}let u=e.alpha;t!==null&&(u=It(u,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";a=`${c}(${d.join(r.commas?", ":" ")}${h})`}return a}const Tl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Ml=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var or=new F({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Tl,fromXYZ_M:Ml,formats:{color:{}}});const xt=1.09929682680944,po=.018053968510807;var Za=new F({id:"rec2020",name:"REC.2020",base:or,toBase(e){return e.map(function(t){return t<po*4.5?t/4.5:Math.pow((t+xt-1)/xt,1/.45)})},fromBase(e){return e.map(function(t){return t>=po?xt*Math.pow(t,.45)-(xt-1):4.5*t})},formats:{color:{}}});const Al=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Pl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Wa=new F({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Al,fromXYZ_M:Pl});const Rl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Bl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Xa=new F({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Rl,fromXYZ_M:Bl,formats:{color:{}}}),mo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let go=Array(3).fill("<percentage> | <number>[0, 255]"),bo=Array(3).fill("<number>[0, 255]");var ct=new F({id:"srgb",name:"sRGB",base:Xa,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:go},rgb_number:{name:"rgb",commas:!0,coords:bo,noAlpha:!0},color:{},rgba:{coords:go,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:bo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=mo.black,t.alpha=0):t.coords=mo[e],t.coords)return t}}}}),qa=new F({id:"p3",name:"P3",base:Wa,fromBase:ct.fromBase,toBase:ct.toBase,formats:{color:{id:"display-p3"}}});te.display_space=ct;if(typeof CSS<"u"&&CSS.supports)for(let e of[V,Za,qa]){let t=e.getMinCoords(),n=Vt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){te.display_space=e;break}}function Nl(e,{space:t=te.display_space,...r}={}){let n=Vt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!te.display_space)n=new String(n),n.color=e;else{let o=U(e,t);n=new String(Vt(o,r)),n.color=o}return n}function Ga(e,t,r="lab"){r=v.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,i,s)=>{let l=o[s];return isNaN(i)||isNaN(l)?a:a+(l-i)**2},0))}function Ll(e,t){return e=k(e),t=k(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function fe(e){return Z(e,[Y,"y"])}function Ja(e,t){de(e,[Y,"y"],t)}function zl(e){Object.defineProperty(e.prototype,"luminance",{get(){return fe(this)},set(t){Ja(this,t)}})}var Ol=Object.freeze({__proto__:null,getLuminance:fe,setLuminance:Ja,register:zl});function Il(e,t){e=k(e),t=k(t);let r=Math.max(fe(e),0),n=Math.max(fe(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Hl=.56,Dl=.57,Fl=.62,Vl=.65,vo=.022,jl=1.414,Ul=.1,Yl=5e-4,Zl=1.14,$o=.027,Wl=1.14;function yo(e){return e>=vo?e:e+(vo-e)**jl}function _e(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Xl(e,t){t=k(t),e=k(e);let r,n,o,a,i,s;t=U(t,"srgb"),[a,i,s]=t.coords;let l=_e(a)*.2126729+_e(i)*.7151522+_e(s)*.072175;e=U(e,"srgb"),[a,i,s]=e.coords;let c=_e(a)*.2126729+_e(i)*.7151522+_e(s)*.072175,d=yo(l),u=yo(c),h=u>d;return Math.abs(u-d)<Yl?n=0:h?(r=u**Hl-d**Dl,n=r*Zl):(r=u**Vl-d**Fl,n=r*Wl),Math.abs(n)<Ul?o=0:n>0?o=n-$o:o=n+$o,o*100}function ql(e,t){e=k(e),t=k(t);let r=Math.max(fe(e),0),n=Math.max(fe(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Gl=5e4;function Jl(e,t){e=k(e),t=k(t);let r=Math.max(fe(e),0),n=Math.max(fe(t),0);return n>r&&([r,n]=[n,r]),n===0?Gl:(r-n)/n}function Kl(e,t){e=k(e),t=k(t);let r=Z(e,[V,"l"]),n=Z(t,[V,"l"]);return Math.abs(r-n)}const Ql=216/24389,wo=24/116,kt=24389/27;let xr=G.D65;var Yr=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xr,base:Y,fromBase(e){let r=e.map((n,o)=>n/xr[o]).map(n=>n>Ql?Math.cbrt(n):(kt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>wo?Math.pow(t[0],3):(116*t[0]-16)/kt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/kt,t[2]>wo?Math.pow(t[2],3):(116*t[2]-16)/kt].map((n,o)=>n*xr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const kr=Math.pow(5,.5)*.5+.5;function ec(e,t){e=k(e),t=k(t);let r=Z(e,[Yr,"l"]),n=Z(t,[Yr,"l"]),o=Math.abs(Math.pow(r,kr)-Math.pow(n,kr)),a=Math.pow(o,1/kr)*Math.SQRT2-40;return a<7.5?0:a}var Pt=Object.freeze({__proto__:null,contrastWCAG21:Il,contrastAPCA:Xl,contrastMichelson:ql,contrastWeber:Jl,contrastLstar:Kl,contrastDeltaPhi:ec});function tc(e,t,r={}){ft(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Pt).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=k(e),t=k(t);for(let a in Pt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Pt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ka(e){let[t,r,n]=pt(e,Y),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Qa(e){let[t,r,n]=pt(e,Y),o=t+r+n;return[t/o,r/o]}function rc(e){Object.defineProperty(e.prototype,"uv",{get(){return Ka(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Qa(this)}})}var nc=Object.freeze({__proto__:null,uv:Ka,xy:Qa,register:rc});function oc(e,t){return Ga(e,t,"lab")}const ac=Math.PI,xo=ac/180;function ic(e,t,{l:r=2,c:n=1}={}){let[o,a,i]=V.from(e),[,s,l]=st.from(V,[o,a,i]),[c,d,u]=V.from(t),h=st.from(V,[c,d,u])[1];s<0&&(s=0),h<0&&(h=0);let m=o-c,f=s-h,b=a-d,$=i-u,S=b**2+$**2-f**2,R=.511;o>=16&&(R=.040975*o/(1+.01765*o));let E=.0638*s/(1+.0131*s)+.638,T;Number.isNaN(l)&&(l=0),l>=164&&l<=345?T=.56+Math.abs(.2*Math.cos((l+168)*xo)):T=.36+Math.abs(.4*Math.cos((l+35)*xo));let re=Math.pow(s,4),bt=Math.sqrt(re/(re+1900)),vt=E*(bt*T+1-bt),K=(m/(r*R))**2;return K+=(f/(n*E))**2,K+=S/vt**2,Math.sqrt(K)}const ko=203;var wn=new v({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Y,fromBase(e){return e.map(t=>Math.max(t*ko,0))},toBase(e){return e.map(t=>Math.max(t/ko,0))}});const Ct=1.15,St=.66,Co=2610/2**14,sc=2**14/2610,So=3424/2**12,Eo=2413/2**7,_o=2392/2**7,lc=1.7*2523/2**5,To=2**5/(1.7*2523),Et=-.56,Cr=16295499532821565e-27,cc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],uc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],dc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],hc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ei=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:wn,fromBase(e){let[t,r,n]=e,o=Ct*t-(Ct-1)*n,a=St*r-(St-1)*t,s=P(cc,[o,a,n]).map(function(h){let m=So+Eo*(h/1e4)**Co,f=1+_o*(h/1e4)**Co;return(m/f)**lc}),[l,c,d]=P(dc,s);return[(1+Et)*l/(1+Et*l)-Cr,c,d]},toBase(e){let[t,r,n]=e,o=(t+Cr)/(1+Et-Et*(t+Cr)),i=P(hc,[o,r,n]).map(function(h){let m=So-h**To,f=_o*h**To-Eo;return 1e4*(m/f)**sc}),[s,l,c]=P(uc,i),d=(s+(Ct-1)*c)/Ct,u=(l+(St-1)*d)/St;return[d,u,c]},formats:{color:{}}}),Zr=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ei,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),nr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function fc(e,t){let[r,n,o]=Zr.from(e),[a,i,s]=Zr.from(t),l=r-a,c=n-i;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,u=2*Math.sqrt(n*i)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const ti=3424/4096,ri=2413/128,ni=2392/128,Mo=2610/16384,pc=2523/32,mc=16384/2610,Ao=32/2523,gc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],bc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],vc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],$c=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Wr=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:wn,fromBase(e){let t=P(gc,e);return yc(t)},toBase(e){let t=wc(e);return P($c,t)},formats:{color:{}}});function yc(e){let t=e.map(function(r){let n=ti+ri*(r/1e4)**Mo,o=1+ni*(r/1e4)**Mo;return(n/o)**pc});return P(bc,t)}function wc(e){return P(vc,e).map(function(n){let o=Math.max(n**Ao-ti,0),a=ri-ni*n**Ao;return 1e4*(o/a)**mc})}function xc(e,t){let[r,n,o]=Wr.from(e),[a,i,s]=Wr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-i)**2+(o-s)**2)}const kc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Cc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Sc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Ec=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var jt=new v({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Y,fromBase(e){let r=P(kc,e).map(n=>Math.cbrt(n));return P(Sc,r)},toBase(e){let r=P(Ec,e).map(n=>n**3);return P(Cc,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function _c(e,t){let[r,n,o]=jt.from(e),[a,i,s]=jt.from(t),l=r-a,c=n-i,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var Xr=Object.freeze({__proto__:null,deltaE76:oc,deltaECMC:ic,deltaE2000:Ur,deltaEJz:fc,deltaEITP:xc,deltaEOK:_c});function Xe(e,t,r={}){ft(r)&&(r={method:r});let{method:n=te.deltaE,...o}=r;e=k(e),t=k(t);for(let a in Xr)if("deltae"+n.toLowerCase()===a.toLowerCase())return Xr[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Tc(e,t=.25){let n=[v.get("oklch","lch"),"l"];return de(e,n,o=>o*(1+t))}function Mc(e,t=.25){let n=[v.get("oklch","lch"),"l"];return de(e,n,o=>o*(1-t))}var Ac=Object.freeze({__proto__:null,lighten:Tc,darken:Mc});function oi(e,t,r=.5,n={}){[e,t]=[k(e),k(t)],le(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:i}=n;return mt(e,t,{space:o,outputSpace:a,premultiplied:i})(r)}function ai(e,t,r={}){let n;xn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:i=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[k(e),k(t)],n=mt(e,t,l));let c=Xe(e,t),d=o>0?Math.max(i,Math.ceil(c/o)+1):i,u=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)u=[{p:.5,color:n(.5)}];else{let h=1/(d-1);u=Array.from({length:d},(m,f)=>{let b=f*h;return{p:b,color:n(b)}})}if(o>0){let h=u.reduce((m,f,b)=>{if(b===0)return 0;let $=Xe(f.color,u[b-1].color,a);return Math.max(m,$)},0);for(;h>o;){h=0;for(let m=1;m<u.length&&u.length<s;m++){let f=u[m-1],b=u[m],$=(b.p+f.p)/2,S=n($);h=Math.max(h,Xe(S,f.color),Xe(S,b.color)),u.splice(m,0,{p:$,color:n($)}),m++}}}return u=u.map(h=>h.color),u}function mt(e,t,r={}){if(xn(e)){let[l,c]=[e,t];return mt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:i}=r;e=k(e),t=k(t),e=lt(e),t=lt(t);let s={colors:[e,t],options:r};if(n?n=v.get(n):n=v.registry[te.interpolationSpace]||e.space,o=o?v.get(o):n,e=U(e,n),t=U(t,n),e=he(e),t=he(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[Z(e,c),Z(t,c)];[d,u]=El(l,[d,u]),de(e,c,d),de(t,c,u)}return i&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((h,m)=>{let f=t.coords[m];return Ht(h,f,l)}),d=Ht(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return i&&(u.coords=u.coords.map(h=>h/d)),o!==n&&(u=U(u,o)),u},{rangeArgs:s})}function xn(e){return le(e)==="function"&&!!e.rangeArgs}te.interpolationSpace="lab";function Pc(e){e.defineFunction("mix",oi,{returns:"color"}),e.defineFunction("range",mt,{returns:"function<color>"}),e.defineFunction("steps",ai,{returns:"array<color>"})}var Rc=Object.freeze({__proto__:null,mix:oi,steps:ai,range:mt,isRange:xn,register:Pc}),ii=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ct,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[i,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:i=(o-a)/c+(o<a?6:0);break;case o:i=(a-n)/c+2;break;case a:i=(n-o)/c+4}i=i*60}return[i,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let i=(a+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),si=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:ii,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Bc=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:si,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let a=1-n,i=a===0?0:1-r/a;return[t,i*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Nc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Lc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var li=new F({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Nc,fromXYZ_M:Lc}),zc=new F({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:li,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Oc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Ic=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var ci=new F({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:yn,toXYZ_M:Oc,fromXYZ_M:Ic});const Hc=1/512,Dc=16/512;var Fc=new F({id:"prophoto",name:"ProPhoto",base:ci,toBase(e){return e.map(t=>t<Dc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Hc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Vc=new v({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:jt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),nr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Po=203,Ro=2610/2**14,jc=2**14/2610,Uc=2523/2**5,Bo=2**5/2523,No=3424/2**12,Lo=2413/2**7,zo=2392/2**7;var Yc=new F({id:"rec2100pq",name:"REC.2100-PQ",base:or,toBase(e){return e.map(function(t){return(Math.max(t**Bo-No,0)/(Lo-zo*t**Bo))**jc*1e4/Po})},fromBase(e){return e.map(function(t){let r=Math.max(t*Po/1e4,0),n=No+Lo*r**Ro,o=1+zo*r**Ro;return(n/o)**Uc})},formats:{color:{id:"rec2100-pq"}}});const Oo=.17883277,Io=.28466892,Ho=.55991073,Sr=3.7743;var Zc=new F({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:or,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Sr:Math.exp((t-Ho)/Oo+Io)/12*Sr})},fromBase(e){return e.map(function(t){return t/=Sr,t<=1/12?Math.sqrt(3*t):Oo*Math.log(12*t-Io)+Ho})},formats:{color:{id:"rec2100-hlg"}}});const ui={};ue.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=di(e.W1,e.W2,e.options.method))});ue.add("chromatic-adaptation-end",e=>{e.M||(e.M=di(e.W1,e.W2,e.options.method))});function ar({id:e,toCone_M:t,fromCone_M:r}){ui[e]=arguments[0]}function di(e,t,r="Bradford"){let n=ui[r],[o,a,i]=P(n.toCone_M,e),[s,l,c]=P(n.toCone_M,t),d=[[s/o,0,0],[0,l/a,0],[0,0,c/i]],u=P(d,n.toCone_M);return P(n.fromCone_M,u)}ar({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});ar({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});ar({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});ar({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(G,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});G.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Wc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Xc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var hi=new F({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:G.ACES,toXYZ_M:Wc,fromXYZ_M:Xc,formats:{color:{}}});const _t=2**-16,Er=-.35828683,Tt=(Math.log2(65504)+9.72)/17.52;var qc=new F({id:"acescc",name:"ACEScc",coords:{r:{range:[Er,Tt],name:"Red"},g:{range:[Er,Tt],name:"Green"},b:{range:[Er,Tt],name:"Blue"}},referred:"scene",base:hi,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-_t)*2:r<Tt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(_t)+9.72)/17.52:t<_t?(Math.log2(_t+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Do=Object.freeze({__proto__:null,XYZ_D65:Y,XYZ_D50:yn,XYZ_ABS_D65:wn,Lab_D65:Yr,Lab:V,LCH:st,sRGB_Linear:Xa,sRGB:ct,HSL:ii,HWB:Bc,HSV:si,P3_Linear:Wa,P3:qa,A98RGB_Linear:li,A98RGB:zc,ProPhoto_Linear:ci,ProPhoto:Fc,REC_2020_Linear:or,REC_2020:Za,OKLab:jt,OKLCH:Vc,Jzazbz:ei,JzCzHz:Zr,ICTCP:Wr,REC_2100_PQ:Yc,REC_2100_HLG:Zc,ACEScg:hi,ACEScc:qc}),be;const L=class{constructor(...t){je(this,be,void 0);let r;t.length===1&&(r=k(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,ur(this,be,v.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in Ce(this,be).coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:s=>this.set(i,s)})}get space(){return Ce(this,be)}get spaceId(){return Ce(this,be).id}clone(){return new L(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Nl(this,...t);return r.color=new L(r.color),r}static get(t,...r){return t instanceof L?t:new L(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,i=function(...s){let l=r(...s);if(a==="color")l=L.get(l);else if(a==="function<color>"){let c=l;l=function(...d){let u=c(...d);return L.get(u)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>L.get(c)));return l};t in L||(L[t]=i),o&&(L.prototype[t]=function(...s){return i(this,...s)})}static defineFunctions(t){for(let r in t)L.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(L);else for(let r in t)L.defineFunction(r,t[r])}};let C=L;be=new WeakMap;C.defineFunctions({get:Z,getAll:pt,set:de,setAll:Ya,to:U,equals:Ll,inGamut:Ke,toGamut:he,distance:Ga,toString:Vt});Object.assign(C,{util:xl,hooks:ue,WHITES:G,Space:v,spaces:v.registry,parse:Ua,defaults:te});for(let e of Object.keys(Do))v.register(Do[e]);for(let e in v.registry)qr(e,v.registry[e]);ue.add("colorspace-init-end",e=>{var t;qr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{qr(r,e)})});function qr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(C.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return v.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,i)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:s}=v.resolveCoord([t,a]);if(s>=0)return o[s]}return Reflect.get(o,a,i)},set:(o,a,i,s)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=v.resolveCoord([t,a]);if(l>=0)return o[l]=i,this.setAll(e,o),!0}return Reflect.set(o,a,i,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}C.extend(Xr);C.extend({deltaE:Xe});C.extend(Ac);C.extend({contrast:tc});C.extend(nc);C.extend(Ol);C.extend(Rc);C.extend(Pt);function fi(e){return Le(e,(t,r)=>r instanceof C?_(r.toString({format:"hex"})):fi(r))}const Gc="dodgerblue";function Gr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function _r({background:e,foreground:t}){return{background:e??new C(Gr(t)),foreground:t??new C(Gr(e))}}var Ut;(function(e){e.Dark="dark",e.Light="light"})(Ut||(Ut={}));function Jc(e){return e==="black"?"white":"black"}const Kc={black:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")},white:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")}},Qc={black:{backgroundFaint1:new C("#666"),backgroundFaint2:new C("#444")},white:{backgroundFaint1:new C("#ccc"),backgroundFaint2:new C("#fafafa")}};function Fo({themeColor:e=Gc,themeStyle:t=Ut.Light}={}){const r=new C(e),n=new C(t===Ut.Dark?"black":"white"),o=Gr(n),a=new C(o),i={nav:{hover:_r({background:r.clone().set({"hsl.l":93})}),active:_r({background:r.clone().set({"hsl.l":90})}),selected:_r({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Qc[Jc(o)],foreground:a,...Kc[o]}};return fi(i)}const Yt=pn()("element-book-change-route"),Vo="vira-",{defineElement:ir,defineElementNoInputs:Eu}=mn({assertInputs:e=>{if(!e.tagName.startsWith(Vo))throw new Error(`Tag name should start with '${Vo}' but got '${e.tagName}'`)}}),pi=g`
    pointer-events: none;
    opacity: 0.3;
`,Qe=j({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function eu(e){return`${e}px`}const Zt=j({"vira-form-input-border-radius":"8px"}),Wt=j({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${Zt["vira-form-input-border-radius"].value} + 4px)`});function mi({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=_(eu(n+r+t));return g`
        ${_(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Wt["vira-focus-outline-color"].value};
            border-radius: ${Wt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Pe=g`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,gi=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Jr=j({"vira-icon-color":"currentColor"}),tu=j({"vira-icon-stroke-color":Jr["vira-icon-color"].value,"vira-icon-fill-color":Jr["vira-icon-color"].value}),Rt={...Jr,...tu},N=ir()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
        :host {
            display: inline-block;
            color: ${Rt["vira-icon-color"].value};
            fill: ${Rt["vira-icon-fill-color"].value};
            stroke: ${Rt["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Kr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Kr||(Kr={}));ir()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Kr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${gi};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Wt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${pi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Pe};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Zt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Qe["vira-interaction-animation-duration"].value},
                background-color
                    ${Qe["vira-interaction-animation-duration"].value},
                border-color ${Qe["vira-interaction-animation-duration"].value};
        }

        ${mi({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${N} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${N}
                      ${y(N,{icon:e.icon})}
                  ></${N}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Qr;(function(e){e.Header="header"})(Qr||(Qr={}));ir()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Pe};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Qe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:se()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?g`
                  height: ${e.contentHeight}px;
              `:g`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${A("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Qr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${tr(({contentRect:i})=>{t({contentHeight:i.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function en({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>en({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function bi({value:e,allowed:t,blocked:r}){const n=t?en({input:e,matcher:t}):!0,o=r?en({input:e,matcher:r}):!1;return n&&!o}function jo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(bi({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}ir()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:se(),inputBlocked:se()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Wt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${pi};
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
                ${Pe};
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
                ${gi};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${Pe};
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
                border-radius: ${Zt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Qe["vira-interaction-animation-duration"].value};
            }

            label {
                ${Pe};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Zt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${mi({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${N} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Pe};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=jo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?p`
                  <${N} ${y(N,{icon:e.icon})}></${N}>
              `:"",s=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${i}
                ${ee(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${tr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${un({"have-value":!!a})}
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${A("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=a;let h=c.value??"";if(d)if(d.length===1)bi({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs})||(h=u,t(new o.inputBlocked(d)));else{const{filtered:m,blocked:f}=jo({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs});h=m,t(new o.inputBlocked(f))}c.value!==h&&(c.value=h),u!==h&&t(new o.valueChange(h))})}
                    placeholder=${e.placeholder}
                />
                ${ee(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function kn({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const ru=kn({name:"Element16Icon",svgTemplate:p`
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
    `});kn({name:"Element24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const nu=kn({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${Rt["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),{defineElement:X,defineElementNoInputs:_u}=mn(),D=X()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>g`
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
                ${A("click",a=>{(!e.router||Ra(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Yt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),Q=X()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>g`
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
            ${D.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${N} {
            display: inline-flex;
            color: ${w["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=g`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return p`
                <li style=${n}>
                    <${D}
                        ${y(D,{router:e.router,route:{paths:[H.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${un({"title-row":!0,selected:e.selectedPath?qe(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ee(Be(r,O.ElementExample),p`
                                    <${N}
                                        ${y(N,{icon:ru})}
                                    ></${N}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${D}>
                </li>
            `});return p`
            <slot name=${ie.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}});async function ou(e){await Ks(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await tl(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const W=X()({tagName:"book-error",styles:g`
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
    `,renderCallback({inputs:e}){return(Kt(e.message,"array")?e.message:[e.message]).map(r=>p`
                    <p>${r}</p>
                `)}}),Tr=X()({tagName:"book-breadcrumbs",styles:g`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,i=o.slice(0,n+1),s=a?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${D}
                    ${y(D,{route:{hash:void 0,search:void 0,paths:[H.Book,...i]},router:e.router})}
                >
                    ${r}
                </${D}>
                ${s}
            `}):p`
                &nbsp;
            `}}),Mr=X()({tagName:"book-breadcrumbs-bar",styles:g`
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
    `,renderCallback({inputs:e,dispatch:t}){return p`
            ${ee(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Tr}
                        ${y(Tr,{currentRoute:e.currentRoute,router:e.router})}
                    ></${Tr}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${A("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Yi(200),n.value===o&&(n.value?t(new Yt({paths:[H.Search,encodeURIComponent(n.value)]})):t(new Yt(at)))})}
            />
        `}}),ve=X()({tagName:"book-page-controls",events:{controlValueChange:se()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>g`
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

        ${N}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===x.Hidden)return"";const i=au(e.currentValues[n],o,s=>{const l=Kt(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return p`
                    <div class="control-wrapper">
                        ${ee(a===0,p`
                                <${N}
                                    class="options-icon"
                                    ${y(N,{icon:nu})}
                                ></${N}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${i}
                        </label>
                    </div>
                `}):""}});function au(e,t,r){return Se(t,x.Hidden)?"":Se(t,x.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${A("input",n=>{const o=Ze(n,HTMLInputElement);r(o.checked)})}
            />
        `:Se(t,x.Color)?p`
            <input
                type="color"
                .value=${e}
                ${A("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Se(t,x.Text)?p`
            <input
                type="text"
                .value=${e}
                ${A("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Se(t,x.Number)?p`
            <input
                type="number"
                .value=${e}
                ${A("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Se(t,x.Dropdown)?p`
            <select
                .value=${e}
                ${A("input",n=>{const o=Ze(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Ar=X()({tagName:"book-entry-description",styles:g`
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
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>p`
                <p>${t}</p>
            `)}}),Pr=X()({tagName:"book-page-wrapper",styles:g`
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

        ${D} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[H.Book,...e.pageNode.fullUrlBreadcrumbs],n=Go(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${D}
                        ${y(D,{route:{paths:r,hash:void 0,search:void 0},router:e.router})}
                    >
                        ${t}
                    </${D}>
                    ${n?p`
                              <${W}
                                  ${y(W,{message:n.message})}
                              ></${W}>
                          `:p`
                              <${Ar}
                                  ${y(Ar,{descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}
                              ></${Ar}>
                              <${ve}
                                  ${y(ve,{config:e.pageNode.entry.controls,currentValues:bn(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}
                              ></${ve}>
                          `}
                </div>
            </div>
        `}}),We=X()({tagName:"book-element-example-controls",styles:g`
        :host {
            display: flex;
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[H.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${D}
                ${y(D,{route:{paths:t,hash:void 0,search:void 0},router:e.router})}
            >
                ${e.elementExampleNode.entry.title}
            </${D}>
        `}}),Uo=Symbol("unset-internal-state"),Rr=X()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Uo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Go(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Uo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${ee(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${W}
                    ${y(W,{message:`${t.elementExampleNode.entry.title} failed: ${Jt(n)}`})}
                ></${W}>
            `}},options:{allowPolymorphicState:!0}}),Br=X()({tagName:"book-element-example-wrapper",styles:g`
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

        ${We} {
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${We} {
            color: ${w["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${We}
                    ${y(We,e)}
                ></${We}>
                <${Rr}
                    ${y(Rr,e)}
                ></${Rr}>
            </div>
        `}}),Te=X()({tagName:"book-entry-display",styles:g`
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
    `,renderCallback:({inputs:e})=>{const t=Pa(e.currentRoute.paths),r=iu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return p`
            <${Mr}
                ${y(Mr,{currentSearch:t,currentRoute:e.currentRoute,router:e.router})}
            ></${Mr}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${ie.Footer}></slot>
        `}});function vi(e,t,r,n){const o=Hr(r,n),a=[];if(o){const i=vi(e,t,o,n);i&&a.push(i)}if(Be(r,O.Page)&&!e.includes(r)){const i=bn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:i,breadcrumbs:Le(i,()=>r.fullUrlBreadcrumbs)})}return a.reduce((i,s)=>({config:{...i.config,...s.config},current:{...i.current,...s.current},breadcrumbs:{...i.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function iu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:a}){if(!e.length&&n)return[p`
                No results
            `];const i=Ln(e,1)?vi(e,o,e[0],a):void 0,s=i&&Ln(e,1)?p`
                  <${ve}
                      ${y(ve,{config:i.config,currentValues:i.current,fullUrlBreadcrumbs:i.breadcrumbs})}
                  ></${ve}>
              `:"",l=ns(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Be(c,O.Page))return p`
                    <${Pr}
                        class="block-entry"
                        ${y(Pr,{isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                    ></${Pr}>
                `;if(Be(c,O.ElementExample)){const u=bn(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${Br}
                        class="inline-entry"
                        ${y(Br,{elementExampleNode:c,currentPageControls:u,router:r})}
                    ></${Br}>
                `}else return Be(c,O.Root)?p`
                    <h1>${c.entry.title}</h1>
                `:p`
                    <${W}
                        class="block-entry"
                        ${y(W,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${W}>
                `});return[s,l]}function su(e,t,r){const n=Yo(e,t);if(n.length)return n;r(at);const o=Yo(e,at.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Yo(e,t){return e.filter(r=>Zi({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Mt=ga()({tagName:"element-book-app",events:{pathUpdate:se()},stateInitStatic:{currentRoute:at,router:void 0,colors:{config:void 0,theme:Fo(void 0)},treeBasedCurrentControls:void 0},styles:g`
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

        ${Te} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Q} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({host:e}){setTimeout(()=>{Zo(e)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var s,l,c,d;try{let u=function(E){e.router?e.router.setRoutes(E):n({currentRoute:{...e.currentRoute,...E}}),t.elementBookRoutePaths&&!qe(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(E.paths??[]))};var i=u;if(t.elementBookRoutePaths&&!qe(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:t.elementBookRoutePaths}),(s=t.internalRouterConfig)!=null&&s.useInternalRouter&&!e.router){const E=vl(t.internalRouterConfig.basePath);n({router:E}),E.addRouteListener(!0,T=>{n({currentRoute:T})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const h={themeColor:t.themeColor};if(!qe(h,(c=e.colors)==null?void 0:c.config)){const E=Fo(h);n({colors:{config:h,theme:E}}),wl(r,E)}const m=t.debug??!1,f=Xs({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:m});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.trigger!==t.entries)&&n({treeBasedCurrentControls:{trigger:t.entries,currentControls:Ma(f.tree)}});const b=Pa(e.currentRoute.paths),S=(b?il({flattenedNodes:f.flattenedNodes,searchQuery:b}):void 0)??su(f.flattenedNodes,e.currentRoute.paths,u),R=(d=e.treeBasedCurrentControls)==null?void 0:d.currentControls;return R?(t.debug&&console.info({currentControls:R}),p`
                <div
                    class="root"
                    ${A(Yt,E=>{const T=r.shadowRoot.querySelector(Te.tagName);if(T?T.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Te.tagName}' for scrolling.`),u(E.detail),!(r.shadowRoot.querySelector(Q.tagName)instanceof Q))throw new Error(`Failed to find child '${Q.tagName}'`);Zo(r)})}
                    ${A(ve.events.controlValueChange,E=>{if(!e.treeBasedCurrentControls)return;const T=Js(R,E.detail.fullUrlBreadcrumbs,E.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:T}})})}
                >
                    <${Q}
                        ${y(Q,{flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:b?void 0:e.currentRoute.paths.slice(1)})}
                    >
                        <slot
                            name=${ie.NavHeader}
                            slot=${ie.NavHeader}
                        ></slot>
                    </${Q}>
                    <${Te}
                        ${y(Te,{currentRoute:e.currentRoute,currentNodes:S,router:e.router,debug:m,currentControls:R,originalTree:f.tree})}
                    >
                        <slot
                            name=${ie.Footer}
                            slot=${ie.Footer}
                        ></slot>
                    </${Te}>
                </div>
            `):p`
                    <${W}
                        ${y(W,{message:"Failed to generate page controls."})}
                    ></${W}>
                `}catch(u){return console.error(u),p`
                <p class="error">${Jt(u)}</p>
            `}}});async function Zo(e){const t=e.shadowRoot.querySelector(Q.tagName);if(!(t instanceof Q))throw new Error(`Failed to find child '${Q.tagName}'`);await ou(t)}const He=ke({title:"Elements",parent:void 0}),$i=g`
    pointer-events: none;
    opacity: 0.3;
`,et=j({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function lu(e){return`${e}px`}const Xt=j({"vira-form-input-border-radius":"8px"}),qt=j({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${Xt["vira-form-input-border-radius"].value} + 4px)`});function yi({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=_(lu(n+r+t));return g`
        ${_(e)}::after {
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
`,wi=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Wo="vira-",{defineElement:gt,defineElementNoInputs:Tu}=mn({assertInputs:e=>{if(!e.tagName.startsWith(Wo))throw new Error(`Tag name should start with '${Wo}' but got '${e.tagName}'`)}}),tn=j({"vira-icon-color":"currentColor"}),cu=j({"vira-icon-stroke-color":tn["vira-icon-color"].value,"vira-icon-fill-color":tn["vira-icon-color"].value}),$e={...tn,...cu},z=gt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
        :host {
            display: inline-block;
            color: ${$e["vira-icon-color"].value};
            fill: ${$e["vira-icon-fill-color"].value};
            stroke: ${$e["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var xi=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(xi||{});const B=gt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${wi};
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
            ${$i};
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
            border-radius: ${Xt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${et["vira-interaction-animation-duration"].value},
                background-color
                    ${et["vira-interaction-animation-duration"].value},
                border-color ${et["vira-interaction-animation-duration"].value};
        }

        ${yi({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${z} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${z}
                      ${y(z,{icon:e.icon})}
                  ></${z}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),uu=ke({parent:He,title:B.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:x.Text,initValue:""},"Secondary color":{controlType:x.Text,initValue:""},"Hover color":{controlType:x.Text,initValue:""},"Active color":{controlType:x.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??g``;e({title:r,styles:a,renderCallback({controls:i}){const s=g`
                        ${B.cssVars["vira-button-primary-color"].name}: ${_(i["Primary color"]||"inherit")};
                        ${B.cssVars["vira-button-secondary-color"].name}: ${_(i["Secondary color"]||"inherit")};
                        ${B.cssVars["vira-button-primary-hover-color"].name}: ${_(i["Hover color"]||"inherit")};
                        ${B.cssVars["vira-button-primary-active-color"].name}: ${_(i["Active color"]||"inherit")};
                    `;return p`
                        <${B}
                            style=${s}
                            ${y(B,{text:"hello",...o})}
                        ></${B}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:xi.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:g`
                ${B} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:g`
                ${B} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:g`
                :host {
                    ${B.cssVars["vira-button-primary-color"].name}: pink;
                    ${B.cssVars["vira-button-secondary-color"].name}: purple;
                    ${B.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${B.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return p`
                    <${B}
                        ${y(B,{text:"hello"})}
                    ></${B}>
                `}})}});var rn=(e=>(e.Header="header",e))(rn||{});const oe=gt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
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
            transition: height ${et["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:se()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?g`
                  height: ${e.contentHeight}px;
              `:g`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${A("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${tr(({contentRect:i})=>{t({contentHeight:i.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),du=ke({title:oe.tagName,parent:He,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:g`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${oe}
                                ${y(oe,{expanded:!!r.expandedStates[o]})}
                                ${A(oe.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${rn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${A("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ee(!!r.showMoreStates[o],p`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${oe}>
                        `)}}),e({title:"wider examples",styles:g`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${oe}
                                ${y(oe,{expanded:!!r.expandedStates[o]})}
                                ${A(oe.events.expandChange,a=>{const i=[...r.expandedStates];i[o]=a.detail,t({expandedStates:i})})}
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
                                    ${A("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ee(!!r.showMoreStates[o],p`
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
                            </${oe}>
                        `)}})}});function Cn({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const hu=Cn({name:"Element16Icon",svgTemplate:p`
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
    `}),tt=Cn({name:"Element24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),fu=Cn({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${$e["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),pu={Element16Icon:hu,Element24Icon:tt,Options24Icon:fu},mu=ke({title:z.tagName,parent:He,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return p`
                    <${z} ${y(z,{icon:tt})}></${z}>
                `}})}});function nn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>nn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function ki({value:e,allowed:t,blocked:r}){const n=t?nn({input:e,matcher:t}):!0,o=r?nn({input:e,matcher:r}):!1;return n&&!o}function Xo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(ki({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const I=gt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:se(),inputBlocked:se()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${qt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${$i};
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
                ${wi};
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
                border-radius: ${Xt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${et["vira-interaction-animation-duration"].value};
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
                border-radius: ${Xt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${yi({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${z} {
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Xo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?p`
                  <${z} ${y(z,{icon:e.icon})}></${z}>
              `:"",s=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${i}
                ${ee(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${tr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${un({"have-value":!!a})}
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${A("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=a;let h=c.value??"";if(d)if(d.length===1)ki({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs})||(h=u,t(new o.inputBlocked(d)));else{const{filtered:m,blocked:f}=Xo({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs});h=m,t(new o.inputBlocked(f))}c.value!==h&&(c.value=h),u!==h&&t(new o.valueChange(h))})}
                    placeholder=${e.placeholder}
                />
                ${ee(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),gu=ke({title:I.tagName,parent:He,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:x.Text,initValue:""},"Placeholder color":{controlType:x.Text,initValue:""},"Border color":{controlType:x.Text,initValue:""},"Focus color":{controlType:x.Text,initValue:""},"Selection color":{controlType:x.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:g`
                    ${r||g``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:i,controls:s}){const l=g`
                        ${I.cssVars["vira-input-text-color"].name}: ${_(s["Text color"]||"inherit")};
                        ${I.cssVars["vira-input-border-color"].name}: ${_(s["Border color"]||"inherit")};
                        ${I.cssVars["vira-input-focus-border-color"].name}: ${_(s["Focus color"]||"inherit")};
                        ${I.cssVars["vira-input-placeholder-color"].name}: ${_(s["Placeholder color"]||"inherit")};
                        ${I.cssVars["vira-input-text-selection-color"].name}: ${_(s["Selection color"]||"inherit")};
                    `;return p`
                        <${I}
                            style=${l}
                            ${y(I,{...o,value:a.value})}
                            ${A(I.events.valueChange,c=>{i({value:c.detail})})}
                        ></${I}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:tt}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:g`
                ${I} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:tt}}),t({title:"custom height",styles:g`
                ${I} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"height",icon:tt}}),t({title:"max width",styles:g`
                ${I} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:g`
                ${I} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Me=gt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>g`
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
    `,events:{routeChange:se()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(i){e.route&&Ra(i)&&(i.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return p`
                <a href=${i} rel="noopener noreferrer" ${A("click",n)}>
                    <slot></slot>
                </a>
            `}}}),bu=ke({title:Me.tagName,parent:He,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:x.Color,initValue:""},"Hover color":{controlType:x.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=g`
                        ${Me.cssVars["vira-link-hover-color"].name}: ${_(o["Hover color"]||"inherit")};
                        color: ${_(o["CSS Color"]||"inherit")};
                    `;return p`
                        <${Me}
                            style=${a}
                            ${y(Me,{...n})}
                            ${A(Me.events.routeChange,i=>{console.info(i)})}
                        >
                            My Link
                        </${Me}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),vu=ke({title:"Icons",parent:void 0,controls:{"Icon Color":{controlType:x.Text,initValue:""},"Stroke Color":{controlType:x.Text,initValue:""},"Fill Color":{controlType:x.Text,initValue:""}},elementExamplesCallback({defineExample:e}){Object.values(pu).forEach(t=>{e({title:t.name,renderCallback({controls:r}){const n=g`
                        ${$e["vira-icon-color"].name}: ${_(r["Icon Color"]||"inherit")};
                        ${$e["vira-icon-fill-color"].name}: ${_(r["Fill Color"]||"inherit")};
                        ${$e["vira-icon-stroke-color"].name}: ${_(r["Stroke Color"]||"inherit")};
                    `;return p`
                        <${z} style=${n} ${y(z,{icon:t})}></${z}>
                    `}})})}}),$u=[He,vu,uu,du,mu,gu,bu];er({tagName:"vira-book-app",styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Mt} {
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
            <${Mt}
                ${y(Mt,{internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:$u,themeColor:"#33ccff"})}
            >
                <h1 slot=${ie.NavHeader}>Vira</h1>
            </${Mt}>
        `}});
