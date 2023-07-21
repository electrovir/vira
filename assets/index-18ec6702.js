var Gs=Object.defineProperty;var Xs=(e,t,r)=>t in e?Gs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ir=(e,t,r)=>(Xs(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Js(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Qs={capitalizeFirstLetter:!1};function Ks(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function ei(e,t){return t.capitalizeFirstLetter?Ks(e):e}function ta(e,t=Qs){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return ei(n,t)}function ra(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Xt(r).trim()).join(`
`))}function Xt(e){return e?e instanceof Error?e.message:J(e,"message")?String(e.message):String(e):""}function qr(e){return e instanceof Error?e:new Error(Xt(e))}function ut(e){return!!e}function En(e){return!!e&&typeof e=="object"}function ti(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const ri=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function J(e,t){return e?ri.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function na(e,t){return e&&t.every(r=>J(e,r))}function H(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ni(e){return Array.isArray(e)?"array":typeof e}function Jt(e,t){return ni(e)===t}function Sn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Tn="Failed to compare objects using JSON.stringify";function _n(e,t,r){return Sn({source:e,errorHandler(n){if(r)return"";throw n}})===Sn({source:t,errorHandler(n){if(r)return"";throw n}})}function Xe(e,t,r={}){try{return e===t?!0:En(e)&&En(t)?_n(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Xe(e[o],t[o])):!1:_n(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=qr(n);throw o.message.startsWith(Tn)||(o.message=`${Tn}: ${o.message}`),o}}function oi(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ai(e){return H(e).filter(t=>isNaN(Number(t)))}function si(e){return ai(e).map(r=>e[r])}function ii(e,t){return si(t).includes(e)}function li(e,t){return H(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function ci(e,t){return li(e,r=>!t.includes(r))}function fe(e,t){let r=!1;const n=H(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(H(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function ui(e){const t=Gr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Gr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Gr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Mn(e,t){try{return oa(e,t),!0}catch{return!1}}function oa(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function di(e,t){return J(e,"entryType")&&e.entryType===t}var L;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(L||(L={}));function Me(e,t){return e.controlType===t}var T;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(T||(T={}));const aa=Symbol("any-type"),fi={[T.Checkbox]:!1,[T.Color]:"",[T.Dropdown]:"",[T.Hidden]:aa,[T.Number]:0,[T.Text]:""};function hi(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=fi[o.controlType];a!==aa&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Xr(e,t){const r=Nt(e.title);return e.parent?[...Xr(e.parent,!1),Nt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Nt(e){return Js(e).toLowerCase().replaceAll(/\s/g,"-")}function pi({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Te(e){const t={...e,entryType:L.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:L.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ut)};r.add(n.title),t.elementExamples[Nt(o.title)]=o}}),t}var le;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(le||(le={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_e=e=>(...t)=>({_$litDirective$:e,values:t});let ve=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lr;const Rt=window,Oe=Rt.trustedTypes,An=Oe?Oe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Bt="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,Jr="?"+se,mi=`<${Jr}>`,Ee=document,tt=()=>Ee.createComment(""),rt=e=>e===null||typeof e!="object"&&typeof e!="function",sa=Array.isArray,ia=e=>sa(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",cr=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pn=/-->/g,Nn=/>/g,ye=RegExp(`>|${cr}(?:([^\\s"'>=/]+)(${cr}*=${cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rn=/'/g,Bn=/"/g,la=/^(?:script|style|textarea|title)$/i,gi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ca=gi(1),W=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Ln=new WeakMap,xe=Ee.createTreeWalker(Ee,129,null,!1);function ua(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return An!==void 0?An.createHTML(t):t}const da=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Ue;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Ue?u[1]==="!--"?s=Pn:u[1]!==void 0?s=Nn:u[2]!==void 0?(la.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=ye):u[3]!==void 0&&(s=ye):s===ye?u[0]===">"?(s=o??Ue,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?ye:u[3]==='"'?Bn:Rn):s===Bn||s===Rn?s=ye:s===Pn||s===Nn?s=Ue:(s=ye,o=void 0);const h=s===ye&&e[i+1].startsWith("/>")?" ":"";a+=s===Ue?l+mi:d>=0?(n.push(c),l.slice(0,d)+Bt+l.slice(d)+se+h):l+se+(d===-2?(n.push(void 0),i):h)}return[ua(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class nt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=da(t,r);if(this.el=nt.createElement(c,n),xe.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=xe.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Bt)||f.startsWith(se)){const h=u[s++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+Bt).split(se),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:m[2],strings:p,ctor:m[1]==="."?ha:m[1]==="?"?pa:m[1]==="@"?ma:ft})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(la.test(o.tagName)){const d=o.textContent.split(se),f=d.length-1;if(f>0){o.textContent=Oe?Oe.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],tt()),xe.nextNode(),l.push({type:2,index:++a});o.append(d[f],tt())}}}else if(o.nodeType===8)if(o.data===Jr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(se,d+1))!==-1;)l.push({type:7,index:a}),d+=se.length-1}a++}}static createElement(t,r){const n=Ee.createElement("template");return n.innerHTML=t,n}}function Se(e,t,r=e,n){var o,a,s,i;if(t===W)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=rt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Se(e,l._$AS(e,t.values),l,n)),t}class fa{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Ee).importNode(n,!0);xe.currentNode=a;let s=xe.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new He(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new ga(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=xe.nextNode(),i++)}return xe.currentNode=Ee,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class He{constructor(t,r,n,o){var a;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Se(this,t,r),rt(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ia(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&rt(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ee.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=nt.createElement(ua(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new fa(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=Ln.get(t.strings);return r===void 0&&Ln.set(t.strings,r=new nt(t)),r}T(t){sa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new He(this.k(tt()),this.k(tt()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ft{constructor(t,r,n,o,a){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=Se(this,t,r,0),s=!rt(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Se(this,i[n+l],r,l),c===W&&(c=this._$AH[l]),s||(s=!rt(c)||c!==this._$AH[l]),c===A?t=A:t!==A&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ha extends ft{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const bi=Oe?Oe.emptyScript:"";class pa extends ft{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,bi):this.element.removeAttribute(this.name)}}class ma extends ft{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Se(this,t,r,0))!==null&&n!==void 0?n:A)===W)return;const o=this._$AH,a=t===A&&o!==A||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==A&&(o===A||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ga{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Se(this,t)}}const vi={O:Bt,P:se,A:Jr,C:1,M:da,L:fa,D:ia,R:Se,I:He,V:ft,H:pa,N:ma,U:ha,F:ga},zn=Rt.litHtmlPolyfillSupport;zn==null||zn(nt,He),((lr=Rt.litHtmlVersions)!==null&&lr!==void 0?lr:Rt.litHtmlVersions=[]).push("2.7.5");const $i=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new He(t.insertBefore(tt(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:yi}=vi,On=()=>document.createComment(""),We=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(On(),a),i=o.insertBefore(On(),a);r=new yi(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},we=(e,t,r=e)=>(e._$AI(t,r),e),wi={},xi=(e,t=wi)=>e._$AH=t,ki=e=>e._$AH,ur=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qr=_e(class extends ve{constructor(e){var t;if(super(e),e.type!==dt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Ci=_e(class extends ve{constructor(e){if(super(e),e.type!==dt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=ki(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,f=0,h=a.length-1,p=0,m=s.length-1;for(;f<=h&&p<=m;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[p])c[p]=we(a[f],s[p]),f++,p++;else if(l[h]===i[m])c[m]=we(a[h],s[m]),h--,m--;else if(l[f]===i[m])c[m]=we(a[f],s[m]),We(e,c[m+1],a[f]),f++,m--;else if(l[h]===i[p])c[p]=we(a[h],s[p]),We(e,a[f],a[h]),h--,p++;else if(u===void 0&&(u=Dn(i,p,m),d=Dn(l,f,h)),u.has(l[f]))if(u.has(l[h])){const g=d.get(i[p]),x=g!==void 0?a[g]:null;if(x===null){const E=We(e,a[f]);we(E,s[p]),c[p]=E}else c[p]=we(x,s[p]),We(e,a[f],x),a[g]=null;p++}else ur(a[h]),h--;else ur(a[f]),f++;for(;p<=m;){const g=We(e,c[m+1]);we(g,s[p]),c[p++]=g}for(;f<=h;){const g=a[f++];g!==null&&ur(g)}return this.ht=i,xi(e,c),W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Er=class extends ve{constructor(t){if(super(t),this.et=A,t.type!==dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this.ft=void 0,this.et=t;if(t===W)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Er.directiveName="unsafeHTML",Er.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hn=class extends Er{};Hn.directiveName="unsafeSVG",Hn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ba(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=window,Kr=Mt.ShadowRoot&&(Mt.ShadyCSS===void 0||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,en=Symbol(),In=new WeakMap;let va=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==en)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Kr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=In.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&In.set(r,t))}return t}toString(){return this.cssText}};const M=e=>new va(typeof e=="string"?e:e+"",void 0,en),ke=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new va(r,e,en)},Ei=(e,t)=>{Kr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Mt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Vn=Kr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return M(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr;const Lt=window,jn=Lt.trustedTypes,Si=jn?jn.emptyScript:"",Fn=Lt.reactiveElementPolyfillSupport,Sr={toAttribute(e,t){switch(t){case Boolean:e=e?Si:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},$a=(e,t)=>t!==e&&(t==t||e==e),fr={attribute:!0,type:String,converter:Sr,reflect:!1,hasChanged:$a},Tr="finalized";class Ne extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=fr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||fr}static finalize(){if(this.hasOwnProperty(Tr))return!1;this[Tr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Vn(o))}else t!==void 0&&r.push(Vn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ei(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=fr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Sr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Sr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||$a)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Ne[Tr]=!0,Ne.elementProperties=new Map,Ne.elementStyles=[],Ne.shadowRootOptions={mode:"open"},Fn==null||Fn({ReactiveElement:Ne}),((dr=Lt.reactiveElementVersions)!==null&&dr!==void 0?dr:Lt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hr,pr;class Le extends Ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$i(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return W}}Le.finalized=!0,Le._$litElement$=!0,(hr=globalThis.litElementHydrateSupport)===null||hr===void 0||hr.call(globalThis,{LitElement:Le});const Un=globalThis.litElementPolyfillSupport;Un==null||Un({LitElement:Le});((pr=globalThis.litElementVersions)!==null&&pr!==void 0?pr:globalThis.litElementVersions=[]).push("3.3.2");var Ti=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var m in n)p[m]=m==="access"?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function(x){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(x||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=s(g.get))&&(u.get=d),(d=s(g.set))&&(u.set=d),(d=s(g.init))&&o.unshift(d)}else(d=s(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},_i=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Mi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Ai(){function e(t,r){return t}return e}let ya=(()=>{let e=[Ai()],t,r=[],n;return n=class extends Le{},Mi(n,"DeclarativeElement"),Ti(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,_i(n,r),n})();function Wn(e){return e!==e.toUpperCase()}function Pi(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=Wn(s)||Wn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Ni=["january","february","march","april","may","june","july","august","september","october","november","december"];Ni.map(e=>e.slice(0,3));function Ri(e){return!!e&&typeof e=="object"}function Yn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Bi(e){return Array.isArray(e)?"array":typeof e}function Li(e,t){return Bi(e)===t}function zi(e,t){let r=!1;const n=Yn(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Yn(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function V(e){if(Ri(e))return zi(e,(r,n)=>{if(!Li(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Pi(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?M(r):r.startsWith("-")?ke`-${M(r)}`:ke`--${M(r)}`;return{name:s,value:ke`var(${s}, ${M(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${V.name}' function.`)}function Oi({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Hi=(e,t,r)=>{t.constructor.createProperty(r,e)};function Qt(e){return(t,r)=>r!==void 0?Hi(e,t,r):Di(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mr;((mr=window.HTMLSlotElement)===null||mr===void 0?void 0:mr.prototype.assignedElements)!=null;const tn=Symbol("key for ignoring inputs not having been set yet"),Ii={[tn]:!0,allowPolymorphicState:!1};function wa(e,t){const r=e.instanceState;H(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&H(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),xa(e)}function xa(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function ka(e,t){return ji(e,t),e.element}function Vi(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ji(e,t){const r=Vi(e),n=r?`: in ${r}`:"";if(e.type!==dt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function rn(e,t){return t?Zn(e,t):Zn(void 0,e)}const Zn=_e(class extends ve{constructor(e){super(e),this.element=ka(e,"assign")}render(e,t){return wa(this.element,t),W}});function Ca(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ya?!0:Ca(r)}function qn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}let Fi=class extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}};function nn(){return e=>{var t;return t=class extends Fi{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Ea(){return nn()}function Ui(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=nn()(r);return t[r]=n,t},{}):{}}const Gn="_is_element_vir_observable_property_handler_instance",Xn="_is_element_vir_observable_property_handler_creator";function Wi(e){return J(e,Xn)&&e[Xn]===!0}function Yi(e){return J(e,Gn)&&e[Gn]===!0}function Zi(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Jn(e,t){const r=e;function n(s){t?Zi(s,e,e.tagName):Qt()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function u(d){s[i]=d,r[i]=d}return Wi(l)&&(l=l.init()),Yi(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,d=>{u(d)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):u(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function qi(e){return e?fe(e,t=>t):{}}function Gi({hostClassNames:e,cssVars:t}){return{hostClasses:fe(e,(r,n)=>({name:M(n),selector:M(`:host(.${n})`)})),cssVars:t}}function Xi({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&H(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Ji(e,t){function r(o){H(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Qi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function on(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Ii,...e.options},n=Ui(e.events),o=qi(e.hostClasses);e.hostClasses&&qn(e.tagName,e.hostClasses),e.cssVars&&qn(e.tagName,e.cssVars);const a=e.cssVars?V(e.cssVars):{},s=typeof e.styles=="function"?e.styles(Gi({hostClassNames:o,cssVars:a})):e.styles||ke``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends ya{createRenderParams(){return Ji(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){xa(this)}render(){try{Ca(this)&&!this.haveInputsBeenSet&&!r[tn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${rn.name}" directive on it. If no inputs are intended, use "${on.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Xi({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=qr(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){wa(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Jn(this,!1),this.instanceState=Jn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};H(u).forEach(f=>{Qt()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Qi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:ta(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Sa(){return e=>on({...e,options:{[tn]:!1,...e.options}})}function ie(e,t){return Ki(e,t)}const Ki=_e(class extends ve{constructor(e){super(e),this.element=ka(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),W}});function Kt(e,t,r){return ba(e,()=>t,()=>r)}function el(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Sa()(r(n))),defineElementNoInputs:n=>(t(n),on(r(n)))}}function tl(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function _r(e){return J(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function an(e){return J(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ta(e){return e.map(t=>_r(t)?t.definition:t).filter(t=>an(t))}const _a=new WeakMap;function rl(e,t){var o;const r=Ta(t);return(o=Ma(_a,[e,...r]).value)==null?void 0:o.template}function nl(e,t,r){const n=Ta(t);return Pa(_a,[e,...n],r)}function Ma(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Aa(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ma(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Aa(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Pa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Aa(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Pa(l,t,r,n+1)}const ol=new WeakMap;function Na(e,t,r){const n=rl(e,t),o=n??r();if(!n){const i=nl(e,t,o);if(i.result)ol.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=tl(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Ra(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let m,g=[];if(typeof f=="string"&&(m=r(f,c,p),m)){o[d]=f+m.replacement,s.push(h);const E=m.getExtraValues;g=E?E(p):[],g.length&&E?(o[d]+=" ",g.forEach((k,_)=>{_&&o.push(" ")}),i.push(k=>{const _=k[h],R=E(_);return{index:h,values:R}}),o.push(c)):o[d]+=c}m||o.push(c);const x=e.raw[u];m?(a[d]=a[d]+m.replacement+x,g.length&&g.forEach(()=>{a.push("")})):a.push(x)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function al(...[e,t,r]){if(an(r))return{replacement:r.tagName,getExtraValues:void 0}}function sl(e,t){return Ra(e,t,al)}function Y(e,...t){const r=Na(e,t,()=>sl(e,t));return ke(r.strings,...r.values)}function il(...[e,t,r]){const n=_r(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=an(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=_r(c)?c.inputs:void 0;return[o&&u&&Object.values(u).length?rn(u):void 0].filter(ut)}}}function ll(e){}function cl(e){return Ra(e.strings,e.values,il,ll)}function $(e,...t){const r=ca(e,...t),n=Na(e,t,()=>cl(r));return{...r,strings:n.strings,values:n.values}}const ul={[L.ElementExample]:()=>[],[L.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...hi(e.controls,e.title)].filter(ut),[L.Root]:()=>[]},zt="_isBookTreeNode",Ba=new Map;function dl(e){return Ba.get(e)}function fl(e,t){oi(Ba,e,()=>t)}function ze(e,t){return!!(La(e)&&e.entry.entryType===t)}function La(e){return!!(na(e,[zt,"entry"])&&e[zt])}function hl(e,t){return{[zt]:!0,entry:{entryType:L.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function pl({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=dl(e);if(o)return o;const a=hl(t,r);e.forEach(l=>sn({tree:a,newEntry:l,debug:n,manuallyAdded:!0}));const s=za(a),i={tree:a,flattenedNodes:s};return fl(e,i),n&&console.info("element-book tree:",a),i}function ml(e,t,r){if(!t.parent)return e;const n=Mr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),sn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Mr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Xr(t,!1)}`);return o}function sn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=ul[t.entryType](t);t.errors.push(...o);const a=ml(e,t,r),s=Nt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[zt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,di(t,L.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>sn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Mr(e,t){const r=La(e)?e.fullUrlBreadcrumbs.slice(0,-1):Xr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function za(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>za(o));return[e,...r].flat()}function gl(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function ln(e,t){return cn(e,t,void 0)}function cn(e,t,r){const n=t[0];if(!n)return{};const o=gl(e,n,r);if(!o)return{};const a=t.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,...cn(o.children,a,r)}}function bl(e,t,r){const n=ti(e);return cn(n,t,r),n}function Oa(e,t){return fe(e.children,(n,o)=>ze(o,L.Page)?{children:Oa(o,{}),controls:{...t,...fe(o.entry.controls,(a,s)=>s.initValue)}}:{children:{},controls:{}})}async function vl(e=1){const t=Gr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const $l=globalThis.crypto;function yl(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return $l.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function wl(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{oa(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Ye(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function xl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const kl=yl(32);function Ar(e){return e.join(kl)}function Da(e){if(!e.length)return[];const t=Ar(e),r=Da(e.slice(0,-1));return[t,...r]}const Cl=["error","errors"];function El(e){return Cl.includes(e)}function Sl({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&El(t);if(xl({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)Da(n.fullUrlBreadcrumbs).forEach(i=>r[i]=!0);else{const s=Ar(n.fullUrlBreadcrumbs);r[s]=!1}}),e.filter(n=>{const o=Ar(n.fullUrlBreadcrumbs),a=r[o];if(!Jt(a,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var O;(function(e){e.Search="search",e.Book="book"})(O||(O={}));function Ha(e){return e[0]===O.Book?"":e[1]?decodeURIComponent(e[1]):""}const ot={hash:void 0,paths:[O.Book],search:void 0},Tl=0;function un(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Tl)}class er extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Qn extends er{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const at="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const _l=globalThis.history.pushState;function Kn(...e){const t=_l.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(at)),t}const Ml=globalThis.history.replaceState;function eo(...e){const t=Ml.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(at)),t}function Al(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Kn)throw new Qn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===eo)throw new Qn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Kn,globalThis.history.replaceState=eo,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(at))})}}function Pl(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Nl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Rl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),a=globalThis.location.search?Pl(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:a,hash:s}}function Ia(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Va({routeBase:e,windowPath:t}){if(!e)return"";const r=Ia(e);if(ja({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Va({routeBase:n,windowPath:t}):""}function ja({routeBase:e,windowPath:t}){const r=Ia(e);return r?t.startsWith(`/${r}`):!1}class Bl extends er{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Fa(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const to=6;function ro(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>to)throw new Bl(`Route sanitization depth has exceed the max of ${to} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Fa(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class gr extends er{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Ll(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new gr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new gr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new gr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function zl(e,t,r=!1){const n=Ua(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ua(e,t){var l;const r=ja({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Nl(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",s=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(ut).join("/")}${o}${s}`}function Ol(e={}){Ll(e),Al();const t=e.routeBase?Va({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>ro(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Fa(l,u)))return zl(u,t,s)},createRoutesUrl(a){return Ua(a,t)},getCurrentRawRoutes(){return Rl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new er(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(at,n),r=!0),a&&ro(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(at,n),r=!1),s},sanitizationDepth:0};return o}function Dl(e){return Ol({routeBase:e,routeSanitizer(t){return{paths:Hl(t.paths),hash:void 0,search:void 0}}})}function Hl(e){const t=e[0];if(ii(t,O)){if(t===O.Book)return[O.Book,...e.slice(1)];if(t===O.Search)return e[1]?[t,e[1]]:[O.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return ot.paths}const C=V({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Il={nav:{hover:{background:C["element-book-nav-hover-background-color"],foreground:C["element-book-nav-hover-foreground-color"]},active:{background:C["element-book-nav-active-background-color"],foreground:C["element-book-nav-active-foreground-color"]},selected:{background:C["element-book-nav-selected-background-color"],foreground:C["element-book-nav-selected-foreground-color"]}},accent:{icon:C["element-book-accent-icon-color"]},page:{background:C["element-book-page-background-color"],backgroundFaint1:C["element-book-page-background-faint-level-1-color"],backgroundFaint2:C["element-book-page-background-faint-level-2-color"],foreground:C["element-book-page-foreground-color"],foregroundFaint1:C["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:C["element-book-page-foreground-faint-level-2-color"]}};function Vl(e,t){Wa(e,t,Il)}function Pr(e){return J(e,"_$cssResult$")}function no(e){return na(e,["name","value","default"])&&Jt(e.default,"string")&&Pr(e.name)&&Pr(e.value)}function Wa(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Pr(o)){if(!no(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Oi({forCssVar:a,onElement:e,toValue:String(o)})}else{if(no(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Wa(e,o,a)}})}function P(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function ht(e){return de(e)==="string"}function de(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ot(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ya(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Za(e){return e[e.length-1]}function Dt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function qa(e,t,r){return(r-e)/(t-e)}function dn(e,t,r){return Dt(t[0],t[1],qa(e[0],e[1],r))}function Ga(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var jl=Object.freeze({__proto__:null,interpolate:Dt,interpolateInv:qa,isString:ht,last:Za,mapRange:dn,multiplyMatrices:P,parseCoordGrammar:Ga,parseFunction:Ya,toPrecision:Ot,type:de});class Fl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const he=new Fl;var re={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const K={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Nr(e){return Array.isArray(e)?e:K[e]}function Ht(e,t,r,n={}){if(e=Nr(e),t=Nr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(he.run("chromatic-adaptation-start",o),o.M||(o.W1===K.D65&&o.W2===K.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===K.D50&&o.W2===K.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),he.run("chromatic-adaptation-end",o),o.M)return P(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ul=75e-6,F=class F{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?F.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Nr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Wl(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),he.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Ul}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=oo(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=oo(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=F.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=F.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(F.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof F)return t;if(de(t)==="string"){let o=F.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return F.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=de(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=F.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=de(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=F.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};ir(F,"registry",{}),ir(F,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=F;function Wl(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function oo(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ga(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=dn(i,l,a)),a=Ot(a,o),c&&(a+=c),a})}return e}var G=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class j extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=G),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=P(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ht(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Ht(this.base.white,this.white,r),P(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Xa(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(he.run("parse-start",r),r.color)return r.color;if(r.parsed=Ya(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((m,g)=>r.parsed.args[g]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Za(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,m],g)=>{var $e;let x=u.coordGrammar[g],E=($e=f[g])==null?void 0:$e.type,k=x.find(ue=>ue==E);if(!k){let ue=m.name||p;throw new TypeError(`${E} not allowed for ${ue} in ${l}()`)}let _=k.range;E==="<percentage>"&&(_||(_=[0,1]));let R=m.range||m.refRange;return _&&R&&(f[g]=dn(_,R,f[g])),k})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function S(e){if(!e)throw new TypeError("Empty color reference");ht(e)&&(e=Xa(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function pt(e,t){return t=b.get(t),t.from(e)}function X(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return pt(e,r)[n]}function Ja(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function pe(e,t,r){if(e=S(e),arguments.length===2&&de(arguments[1])==="object"){let n=arguments[1];for(let o in n)pe(e,o,n[o])}else{typeof r=="function"&&(r=r(X(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=pt(e,n);a[o]=r,Ja(e,n,a)}return e}var fn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:G,fromBase:e=>Ht(G.white,"D50",e),toBase:e=>Ht("D50",G.white,e),formats:{color:{}}});const Yl=216/24389,ao=24/116,$t=24389/27;let br=K.D50;var U=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:br,base:fn,fromBase(e){let r=e.map((n,o)=>n/br[o]).map(n=>n>Yl?Math.cbrt(n):($t*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ao?Math.pow(t[0],3):(116*t[0]-16)/$t,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/$t,t[2]>ao?Math.pow(t[2],3):(116*t[2]-16)/$t].map((n,o)=>n*br[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function tr(e){return(e%360+360)%360}function Zl(e,t){if(e==="raw")return t;let[r,n]=t.map(tr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var st=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:U,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const so=25**7,It=Math.PI,io=180/It,Ae=It/180;function Rr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=U.from(e),l=st.from(U,[a,s,i])[1],[c,u,d]=U.from(t),f=st.from(U,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,m=.5*(1-Math.sqrt(p/(p+so))),g=(1+m)*s,x=(1+m)*u,E=Math.sqrt(g**2+i**2),k=Math.sqrt(x**2+d**2),_=g===0&&i===0?0:Math.atan2(i,g),R=x===0&&d===0?0:Math.atan2(d,x);_<0&&(_+=2*It),R<0&&(R+=2*It),_*=io,R*=io;let $e=c-a,ue=k-E,ee=R-_,Ve=_+R,$n=Math.abs(ee),je;E*k===0?je=0:$n<=180?je=ee:ee>180?je=ee-360:ee<-180?je=ee+360:console.log("the unthinkable has happened");let yn=2*Math.sqrt(k*E)*Math.sin(je*Ae/2),Us=(a+c)/2,sr=(E+k)/2,wn=Math.pow(sr,7),ne;E*k===0?ne=Ve:$n<=180?ne=Ve/2:Ve<360?ne=(Ve+360)/2:ne=(Ve-360)/2;let xn=(Us-50)**2,Ws=1+.015*xn/Math.sqrt(20+xn),kn=1+.045*sr,Fe=1;Fe-=.17*Math.cos((ne-30)*Ae),Fe+=.24*Math.cos(2*ne*Ae),Fe+=.32*Math.cos((3*ne+6)*Ae),Fe-=.2*Math.cos((4*ne-63)*Ae);let Cn=1+.015*sr*Fe,Ys=30*Math.exp(-1*((ne-275)/25)**2),Zs=2*Math.sqrt(wn/(wn+so)),qs=-1*Math.sin(2*Ys*Ae)*Zs,vt=($e/(r*Ws))**2;return vt+=(ue/(n*kn))**2,vt+=(yn/(o*Cn))**2,vt+=qs*(ue/(n*kn))*(yn/(o*Cn)),Math.sqrt(vt)}const ql=75e-6;function Je(e,t=e.space,{epsilon:r=ql}={}){e=S(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function it(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function me(e,{method:t=re.gamut_mapping,space:r=e.space}={}){if(ht(arguments[1])&&(r=arguments[1]),r=b.get(r),Je(e,r,{epsilon:0}))return S(e);let n=Z(e,r);if(t!=="clip"&&!Je(e,r)){let o=me(it(n),{method:"clip",space:r});if(Rr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=Z(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=X(l,i);for(;h-f>d;){let p=it(l);p=me(p,{space:r,method:"clip"}),Rr(l,p)-2<d?f=X(l,i):h=X(l,i),pe(l,i,(f+h)/2)}n=Z(l,r)}else n=o}if(t==="clip"||!Je(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=Z(n,e.space)),e.coords=n.coords,e}me.returns="color";function Z(e,t,{inGamut:r}={}){e=S(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=me(o)),o}Z.returns="color";function Vt(e,{precision:t=re.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=S(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Je(e)&&(i=me(it(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>Ot(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Ot(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Gl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Xl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var rr=new j({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Gl,fromXYZ_M:Xl,formats:{color:{}}});const yt=1.09929682680944,lo=.018053968510807;var Qa=new j({id:"rec2020",name:"REC.2020",base:rr,toBase(e){return e.map(function(t){return t<lo*4.5?t/4.5:Math.pow((t+yt-1)/yt,1/.45)})},fromBase(e){return e.map(function(t){return t>=lo?yt*Math.pow(t,.45)-(yt-1):4.5*t})},formats:{color:{}}});const Jl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Ql=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ka=new j({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Jl,fromXYZ_M:Ql});const Kl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],ec=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var es=new j({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Kl,fromXYZ_M:ec,formats:{color:{}}}),co={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let uo=Array(3).fill("<percentage> | <number>[0, 255]"),fo=Array(3).fill("<number>[0, 255]");var lt=new j({id:"srgb",name:"sRGB",base:es,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:uo},rgb_number:{name:"rgb",commas:!0,coords:fo,noAlpha:!0},color:{},rgba:{coords:uo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:fo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=co.black,t.alpha=0):t.coords=co[e],t.coords)return t}}}}),ts=new j({id:"p3",name:"P3",base:Ka,fromBase:lt.fromBase,toBase:lt.toBase,formats:{color:{id:"display-p3"}}});re.display_space=lt;if(typeof CSS<"u"&&CSS.supports)for(let e of[U,Qa,ts]){let t=e.getMinCoords(),n=Vt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){re.display_space=e;break}}function tc(e,{space:t=re.display_space,...r}={}){let n=Vt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!re.display_space)n=new String(n),n.color=e;else{let o=Z(e,t);n=new String(Vt(o,r)),n.color=o}return n}function rs(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function rc(e,t){return e=S(e),t=S(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ge(e){return X(e,[G,"y"])}function ns(e,t){pe(e,[G,"y"],t)}function nc(e){Object.defineProperty(e.prototype,"luminance",{get(){return ge(this)},set(t){ns(this,t)}})}var oc=Object.freeze({__proto__:null,getLuminance:ge,register:nc,setLuminance:ns});function ac(e,t){e=S(e),t=S(t);let r=Math.max(ge(e),0),n=Math.max(ge(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const sc=.56,ic=.57,lc=.62,cc=.65,ho=.022,uc=1.414,dc=.1,fc=5e-4,hc=1.14,po=.027,pc=1.14;function mo(e){return e>=ho?e:e+(ho-e)**uc}function Pe(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function mc(e,t){t=S(t),e=S(e);let r,n,o,a,s,i;t=Z(t,"srgb"),[a,s,i]=t.coords;let l=Pe(a)*.2126729+Pe(s)*.7151522+Pe(i)*.072175;e=Z(e,"srgb"),[a,s,i]=e.coords;let c=Pe(a)*.2126729+Pe(s)*.7151522+Pe(i)*.072175,u=mo(l),d=mo(c),f=d>u;return Math.abs(d-u)<fc?n=0:f?(r=d**sc-u**ic,n=r*hc):(r=d**cc-u**lc,n=r*pc),Math.abs(n)<dc?o=0:n>0?o=n-po:o=n+po,o*100}function gc(e,t){e=S(e),t=S(t);let r=Math.max(ge(e),0),n=Math.max(ge(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const bc=5e4;function vc(e,t){e=S(e),t=S(t);let r=Math.max(ge(e),0),n=Math.max(ge(t),0);return n>r&&([r,n]=[n,r]),n===0?bc:(r-n)/n}function $c(e,t){e=S(e),t=S(t);let r=X(e,[U,"l"]),n=X(t,[U,"l"]);return Math.abs(r-n)}const yc=216/24389,go=24/116,wt=24389/27;let vr=K.D65;var Br=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:vr,base:G,fromBase(e){let r=e.map((n,o)=>n/vr[o]).map(n=>n>yc?Math.cbrt(n):(wt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>go?Math.pow(t[0],3):(116*t[0]-16)/wt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wt,t[2]>go?Math.pow(t[2],3):(116*t[2]-16)/wt].map((n,o)=>n*vr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const $r=Math.pow(5,.5)*.5+.5;function wc(e,t){e=S(e),t=S(t);let r=X(e,[Br,"l"]),n=X(t,[Br,"l"]),o=Math.abs(Math.pow(r,$r)-Math.pow(n,$r)),a=Math.pow(o,1/$r)*Math.SQRT2-40;return a<7.5?0:a}var At=Object.freeze({__proto__:null,contrastAPCA:mc,contrastDeltaPhi:wc,contrastLstar:$c,contrastMichelson:gc,contrastWCAG21:ac,contrastWeber:vc});function xc(e,t,r={}){ht(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(At).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=S(e),t=S(t);for(let a in At)if("contrast"+n.toLowerCase()===a.toLowerCase())return At[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function os(e){let[t,r,n]=pt(e,G),o=t+15*r+3*n;return[4*t/o,9*r/o]}function as(e){let[t,r,n]=pt(e,G),o=t+r+n;return[t/o,r/o]}function kc(e){Object.defineProperty(e.prototype,"uv",{get(){return os(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return as(this)}})}var Cc=Object.freeze({__proto__:null,register:kc,uv:os,xy:as});function Ec(e,t){return rs(e,t,"lab")}const Sc=Math.PI,bo=Sc/180;function Tc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=U.from(e),[,i,l]=st.from(U,[o,a,s]),[c,u,d]=U.from(t),f=st.from(U,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,p=i-f,m=a-u,g=s-d,x=m**2+g**2-p**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let k=.0638*i/(1+.0131*i)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*bo)):_=.36+Math.abs(.4*Math.cos((l+35)*bo));let R=Math.pow(i,4),$e=Math.sqrt(R/(R+1900)),ue=k*($e*_+1-$e),ee=(h/(r*E))**2;return ee+=(p/(n*k))**2,ee+=x/ue**2,Math.sqrt(ee)}const vo=203;var hn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:G,fromBase(e){return e.map(t=>Math.max(t*vo,0))},toBase(e){return e.map(t=>Math.max(t/vo,0))}});const xt=1.15,kt=.66,$o=2610/2**14,_c=2**14/2610,yo=3424/2**12,wo=2413/2**7,xo=2392/2**7,Mc=1.7*2523/2**5,ko=2**5/(1.7*2523),Ct=-.56,yr=16295499532821565e-27,Ac=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Pc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Nc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Rc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ss=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:hn,fromBase(e){let[t,r,n]=e,o=xt*t-(xt-1)*n,a=kt*r-(kt-1)*t,i=P(Ac,[o,a,n]).map(function(f){let h=yo+wo*(f/1e4)**$o,p=1+xo*(f/1e4)**$o;return(h/p)**Mc}),[l,c,u]=P(Nc,i);return[(1+Ct)*l/(1+Ct*l)-yr,c,u]},toBase(e){let[t,r,n]=e,o=(t+yr)/(1+Ct-Ct*(t+yr)),s=P(Rc,[o,r,n]).map(function(f){let h=yo-f**ko,p=xo*f**ko-wo;return 1e4*(h/p)**_c}),[i,l,c]=P(Pc,s),u=(i+(xt-1)*c)/xt,d=(l+(kt-1)*u)/kt;return[u,d,c]},formats:{color:{}}}),Lr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ss,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Bc(e,t){let[r,n,o]=Lr.from(e),[a,s,i]=Lr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const is=3424/4096,ls=2413/128,cs=2392/128,Co=2610/16384,Lc=2523/32,zc=16384/2610,Eo=32/2523,Oc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Dc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Hc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Ic=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var zr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:hn,fromBase(e){let t=P(Oc,e);return Vc(t)},toBase(e){let t=jc(e);return P(Ic,t)},formats:{color:{}}});function Vc(e){let t=e.map(function(r){let n=is+ls*(r/1e4)**Co,o=1+cs*(r/1e4)**Co;return(n/o)**Lc});return P(Dc,t)}function jc(e){return P(Hc,e).map(function(n){let o=Math.max(n**Eo-is,0),a=ls-cs*n**Eo;return 1e4*(o/a)**zc})}function Fc(e,t){let[r,n,o]=zr.from(e),[a,s,i]=zr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Uc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Wc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Yc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Zc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var jt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:G,fromBase(e){let r=P(Uc,e).map(n=>Math.cbrt(n));return P(Yc,r)},toBase(e){let r=P(Zc,e).map(n=>n**3);return P(Wc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function qc(e,t){let[r,n,o]=jt.from(e),[a,s,i]=jt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Ft={deltaE76:Ec,deltaECMC:Tc,deltaE2000:Rr,deltaEJz:Bc,deltaEITP:Fc,deltaEOK:qc};function Ge(e,t,r={}){ht(r)&&(r={method:r});let{method:n=re.deltaE,...o}=r;e=S(e),t=S(t);for(let a in Ft)if("deltae"+n.toLowerCase()===a.toLowerCase())return Ft[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Gc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return pe(e,n,o=>o*(1+t))}function Xc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return pe(e,n,o=>o*(1-t))}var Jc=Object.freeze({__proto__:null,darken:Xc,lighten:Gc});function us(e,t,r=.5,n={}){[e,t]=[S(e),S(t)],de(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return mt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function ds(e,t,r={}){let n;pn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[S(e),S(t)],n=mt(e,t,l));let c=Ge(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let m=p*f;return{p:m,color:n(m)}})}if(o>0){let f=d.reduce((h,p,m)=>{if(m===0)return 0;let g=Ge(p.color,d[m-1].color,a);return Math.max(h,g)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let p=d[h-1],m=d[h],g=(m.p+p.p)/2,x=n(g);f=Math.max(f,Ge(x,p.color),Ge(x,m.color)),d.splice(h,0,{p:g,color:n(g)}),h++}}}return d=d.map(f=>f.color),d}function mt(e,t,r={}){if(pn(e)){let[l,c]=[e,t];return mt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=S(e),t=S(t),e=it(e),t=it(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[re.interpolationSpace]||e.space,o=o?b.get(o):n,e=Z(e,n),t=Z(t,n),e=me(e),t=me(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[X(e,c),X(t,c)];[u,d]=Zl(l,[u,d]),pe(e,c,u),pe(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Dt(f,p,l)}),u=Dt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=Z(d,o)),d},{rangeArgs:i})}function pn(e){return de(e)==="function"&&!!e.rangeArgs}re.interpolationSpace="lab";function Qc(e){e.defineFunction("mix",us,{returns:"color"}),e.defineFunction("range",mt,{returns:"function<color>"}),e.defineFunction("steps",ds,{returns:"array<color>"})}var Kc=Object.freeze({__proto__:null,isRange:pn,mix:us,range:mt,register:Qc,steps:ds}),fs=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:lt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),hs=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:fs,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),eu=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:hs,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const tu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],ru=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ps=new j({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:tu,fromXYZ_M:ru}),nu=new j({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ps,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const ou=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],au=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var ms=new j({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:fn,toXYZ_M:ou,fromXYZ_M:au});const su=1/512,iu=16/512;var lu=new j({id:"prophoto",name:"ProPhoto",base:ms,toBase(e){return e.map(t=>t<iu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=su?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),cu=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:jt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const So=203,To=2610/2**14,uu=2**14/2610,du=2523/2**5,_o=2**5/2523,Mo=3424/2**12,Ao=2413/2**7,Po=2392/2**7;var fu=new j({id:"rec2100pq",name:"REC.2100-PQ",base:rr,toBase(e){return e.map(function(t){return(Math.max(t**_o-Mo,0)/(Ao-Po*t**_o))**uu*1e4/So})},fromBase(e){return e.map(function(t){let r=Math.max(t*So/1e4,0),n=Mo+Ao*r**To,o=1+Po*r**To;return(n/o)**du})},formats:{color:{id:"rec2100-pq"}}});const No=.17883277,Ro=.28466892,Bo=.55991073,wr=3.7743;var hu=new j({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:rr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*wr:(Math.exp((t-Bo)/No)+Ro)/12*wr})},fromBase(e){return e.map(function(t){return t/=wr,t<=1/12?Math.sqrt(3*t):No*Math.log(12*t-Ro)+Bo})},formats:{color:{id:"rec2100-hlg"}}});const gs={};he.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=bs(e.W1,e.W2,e.options.method))});he.add("chromatic-adaptation-end",e=>{e.M||(e.M=bs(e.W1,e.W2,e.options.method))});function nr({id:e,toCone_M:t,fromCone_M:r}){gs[e]=arguments[0]}function bs(e,t,r="Bradford"){let n=gs[r],[o,a,s]=P(n.toCone_M,e),[i,l,c]=P(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=P(u,n.toCone_M);return P(n.fromCone_M,d)}nr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});nr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});nr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});nr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(K,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});K.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const pu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],mu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var vs=new j({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:K.ACES,toXYZ_M:pu,fromXYZ_M:mu,formats:{color:{}}});const Et=2**-16,xr=-.35828683,St=(Math.log2(65504)+9.72)/17.52;var gu=new j({id:"acescc",name:"ACEScc",coords:{r:{range:[xr,St],name:"Red"},g:{range:[xr,St],name:"Green"},b:{range:[xr,St],name:"Blue"}},referred:"scene",base:vs,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Et)*2:r<St?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Et)+9.72)/17.52:t<Et?(Math.log2(Et+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Lo=Object.freeze({__proto__:null,A98RGB:nu,A98RGB_Linear:ps,ACEScc:gu,ACEScg:vs,HSL:fs,HSV:hs,HWB:eu,ICTCP:zr,JzCzHz:Lr,Jzazbz:ss,LCH:st,Lab:U,Lab_D65:Br,OKLCH:cu,OKLab:jt,P3:ts,P3_Linear:Ka,ProPhoto:lu,ProPhoto_Linear:ms,REC_2020:Qa,REC_2020_Linear:rr,REC_2100_HLG:hu,REC_2100_PQ:fu,XYZ_ABS_D65:hn,XYZ_D50:fn,XYZ_D65:G,sRGB:lt,sRGB_Linear:es});class y{constructor(...t){let r;t.length===1&&(r=S(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new y(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=tc(this,...t);return r.color=new y(r.color),r}static get(t,...r){return t instanceof y?t:new y(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=y.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return y.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>y.get(c)));return l};t in y||(y[t]=s),o&&(y.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)y.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(y);else for(let r in t)y.defineFunction(r,t[r])}}y.defineFunctions({get:X,getAll:pt,set:pe,setAll:Ja,to:Z,equals:rc,inGamut:Je,toGamut:me,distance:rs,toString:Vt});Object.assign(y,{util:jl,hooks:he,WHITES:K,Space:b,spaces:b.registry,parse:Xa,defaults:re});for(let e of Object.keys(Lo))b.register(Lo[e]);for(let e in b.registry)Or(e,b.registry[e]);he.add("colorspace-init-end",e=>{var t;Or(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Or(r,e)})});function Or(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(y.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}y.extend(Ft);y.extend({deltaE:Ge});Object.assign(y,{deltaEMethods:Ft});y.extend(Jc);y.extend({contrast:xc});y.extend(Cc);y.extend(oc);y.extend(Kc);y.extend(At);function $s(e){return fe(e,(t,r)=>r instanceof y?M(r.toString({format:"hex"})):$s(r))}const bu="dodgerblue";function Dr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function kr({background:e,foreground:t}){return{background:e??new y(Dr(t)),foreground:t??new y(Dr(e))}}var Ut;(function(e){e.Dark="dark",e.Light="light"})(Ut||(Ut={}));function vu(e){return e==="black"?"white":"black"}const $u={black:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")},white:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")}},yu={black:{backgroundFaint1:new y("#666"),backgroundFaint2:new y("#444")},white:{backgroundFaint1:new y("#ccc"),backgroundFaint2:new y("#fafafa")}};function zo({themeColor:e=bu,themeStyle:t=Ut.Light}={}){const r=new y(e),n=new y(t===Ut.Dark?"black":"white"),o=Dr(n),a=new y(o),s={nav:{hover:kr({background:r.clone().set({"hsl.l":93})}),active:kr({background:r.clone().set({"hsl.l":90})}),selected:kr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...yu[vu(o)],foreground:a,...$u[o]}};return $s(s)}const Wt=nn()("element-book-change-route");var wu=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var m in n)p[m]=m==="access"?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function(x){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(x||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=s(g.get))&&(u.get=d),(d=s(g.set))&&(u.set=d),(d=s(g.init))&&o.unshift(d)}else(d=s(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},xu=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},ku=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Cu(){function e(t,r){return t}return e}let ys=(()=>{let e=[Cu()],t,r=[],n;return n=class extends Le{},ku(n,"DeclarativeElement"),wu(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,xu(n,r),n})();const mn=Symbol("key for ignoring inputs not having been set yet"),Eu={[mn]:!0,allowPolymorphicState:!1};function ws(e,t){const r=e.instanceState;H(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&H(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),xs(e)}function xs(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function ks(e,t){return Hr(e,t),e.element}function Su(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Hr(e,t){const r=Su(e),n=r?`: in ${r}`:"";if(e.type!==dt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function I(e,t){return t?Oo(e,t):Oo(void 0,e)}const Oo=_e(class extends ve{constructor(e){super(e),this.element=ks(e,"assign")}render(e,t){return ws(this.element,t),W}});function Cs(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ys?!0:Cs(r)}function Do(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Tu extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Es(){return e=>{var t;return t=class extends Tu{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function be(){return Es()}function _u(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Es()(r);return t[r]=n,t},{}):{}}const Ho="_is_element_vir_observable_property_handler_instance",Io="_is_element_vir_observable_property_handler_creator";function Mu(e){return J(e,Io)&&e[Io]===!0}function Au(e){return J(e,Ho)&&e[Ho]===!0}function Pu(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Vo(e,t,r){const n=e;function o(i){t?Pu(i,e,e.tagName):Qt()(e,i)}function a(i,l){return o(l),n[l]}return new Proxy({},{get:a,set:(i,l,c)=>{o(l);const u=e.observablePropertyHandlerMap[l];function d(f){i[l]=f,n[l]=f}return r&&Mu(c)&&(c=c.init()),r&&Au(c)?(u&&c!==u?(c.addMultipleListeners(u.getAllListeners()),u.removeAllListeners()):c.addListener(!0,f=>{d(f)}),e.observablePropertyHandlerMap[l]=c):r&&u?u.setValue(c):d(c),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,l){if(l in i)return{get value(){return a(i,l)},configurable:!0,enumerable:!0}},has:(i,l)=>Reflect.has(i,l)})}function Nu(e){return e?fe(e,t=>t):{}}function Ru({hostClassNames:e,cssVars:t}){return{hostClasses:fe(e,(r,n)=>({name:M(n),selector:M(`:host(.${n})`)})),cssVars:t}}function Bu({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&H(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Lu(e,t){function r(o){H(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var zu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function or(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Eu,...e.options},n=_u(e.events),o=Nu(e.hostClasses);e.hostClasses&&Do(e.tagName,e.hostClasses),e.cssVars&&Do(e.tagName,e.cssVars);const a=e.cssVars?V(e.cssVars):{},s=typeof e.styles=="function"?e.styles(Ru({hostClassNames:o,cssVars:a})):e.styles||ke``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends ys{createRenderParams(){return Lu(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){xs(this)}render(){try{Cs(this)&&!this.haveInputsBeenSet&&!r[mn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${I.name}" directive on it. If no inputs are intended, use "${or.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Bu({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=qr(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){ws(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Vo(this,!1,!1),this.instanceState=Vo(this,!((d=e.options)!=null&&d.allowPolymorphicState),!0);const u=e.stateInitStatic||{};H(u).forEach(f=>{Qt()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},zu(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:ta(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Ou(){return e=>or({...e,options:{[mn]:!1,...e.options}})}function q(e,t){return Du(e,t)}const Du=_e(class extends ve{constructor(e){super(e),this.element=ks(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),W}}),Cr="onResize",ar=_e(class extends ve{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Hr(e,Cr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Cr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Hr(e,Cr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function De(e,t,r){return ba(e,()=>t,()=>r)}function Ss(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Ou()(r(n))),defineElementNoInputs:n=>(t(n),or(r(n)))}}function Hu(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Ir(e){return J(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function gn(e){return J(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ts(e){return e.map(t=>Ir(t)?t.definition:t).filter(t=>gn(t))}const _s=new WeakMap;function Iu(e,t){var o;const r=Ts(t);return(o=Ms(_s,[e,...r]).value)==null?void 0:o.template}function Vu(e,t,r){const n=Ts(t);return Ps(_s,[e,...n],r)}function Ms(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=As(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ms(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function As(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ps(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=As(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Ps(l,t,r,n+1)}const ju=new WeakMap;function Ns(e,t,r){const n=Iu(e,t),o=n??r();if(!n){const i=Vu(e,t,o);if(i.result)ju.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=Hu(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Rs(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let m,g=[];if(typeof f=="string"&&(m=r(f,c,p),m)){o[d]=f+m.replacement,s.push(h);const E=m.getExtraValues;g=E?E(p):[],g.length&&E?(o[d]+=" ",g.forEach((k,_)=>{_&&o.push(" ")}),i.push(k=>{const _=k[h],R=E(_);return{index:h,values:R}}),o.push(c)):o[d]+=c}m||o.push(c);const x=e.raw[u];m?(a[d]=a[d]+m.replacement+x,g.length&&g.forEach(()=>{a.push("")})):a.push(x)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function Fu(...[e,t,r]){if(gn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Uu(e,t){return Rs(e,t,Fu)}function v(e,...t){const r=Ns(e,t,()=>Uu(e,t));return ke(r.strings,...r.values)}function Wu(...[e,t,r]){const n=Ir(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=gn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Ir(c)?c.inputs:void 0;return[o&&u&&Object.values(u).length?I(u):void 0].filter(ut)}}}function Yu(e){}function Zu(e){return Rs(e.strings,e.values,Wu,Yu)}function w(e,...t){const r=ca(e,...t),n=Ns(e,t,()=>Zu(r));return{...r,strings:n.strings,values:n.values}}const jo="vira-",{defineElement:gt,defineElementNoInputs:wd}=Ss({assertInputs:e=>{if(!e.tagName.startsWith(jo))throw new Error(`Tag name should start with '${jo}' but got '${e.tagName}'`)}}),Bs=v`
    pointer-events: none;
    opacity: 0.3;
`,Qe=V({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function qu(e){return`${e}px`}const Yt=V({"vira-form-input-border-radius":"8px"}),Zt=V({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${Yt["vira-form-input-border-radius"].value} + 4px)`});function Ls({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=M(qu(n+r+t));return v`
        ${M(e)}::after {
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
    `}const Re=v`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,zs=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Vr=V({"vira-icon-color":"currentColor"}),Gu=V({"vira-icon-stroke-color":Vr["vira-icon-color"].value,"vira-icon-fill-color":Vr["vira-icon-color"].value}),Pt={...Vr,...Gu},D=gt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            color: ${Pt["vira-icon-color"].value};
            fill: ${Pt["vira-icon-fill-color"].value};
            stroke: ${Pt["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var jr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(jr||(jr={}));gt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===jr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${zs};
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
            ${Bs};
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
            border-radius: ${Yt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Qe["vira-interaction-animation-duration"].value},
                background-color
                    ${Qe["vira-interaction-animation-duration"].value},
                border-color ${Qe["vira-interaction-animation-duration"].value};
        }

        ${Ls({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${D} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?w`
                  <${D}
                      ${I(D,{icon:e.icon})}
                  ></${D}>
              `:"",r=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:"";return w`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Fr;(function(e){e.Header="header"})(Fr||(Fr={}));gt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
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
            transition: height ${Qe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:be()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${q("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Fr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${ar(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Ur({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Ur({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Os({value:e,allowed:t,blocked:r}){const n=t?Ur({input:e,matcher:t}):!0,o=r?Ur({input:e,matcher:r}):!1;return n&&!o}function Fo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Os({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}gt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:be(),inputBlocked:be()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Zt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Bs};
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
                ${zs};
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
                border-radius: ${Yt["vira-form-input-border-radius"].value};
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
                ${Re};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Yt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Ls({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${D} {
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Fo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?w`
                  <${D} ${I(D,{icon:e.icon})}></${D}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return w`
            <label>
                ${s}
                ${De(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${ar(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${Qr({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${q("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)Os({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:h,blocked:p}=Fo({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=h,t(new o.inputBlocked(p))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${De(!!e.suffix,w`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});gt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:be()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&un(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return w`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return w`
                <a href=${s} rel="noopener noreferrer" ${q("click",n)}>
                    <slot></slot>
                </a>
            `}}});function bn({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Xu=bn({name:"Element16Icon",svgTemplate:w`
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
    `});bn({name:"Element24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const Ju=bn({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${Pt["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),Qu=v`
    padding: 0;
    margin: 0;
`;v`
    ${Qu}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;const{defineElement:Q,defineElementNoInputs:xd}=el(),te=Q()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>Y`
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
                ${ie("click",a=>{(!e.router||un(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Wt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),ae=Q()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>Y`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${C["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${C["element-book-nav-hover-background-color"].value};
            color: ${C["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${C["element-book-nav-active-background-color"].value};
            color: ${C["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${te.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${C["element-book-nav-selected-background-color"].value};
            color: ${C["element-book-nav-selected-foreground-color"].value};
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

        ${D} {
            display: inline-flex;
            color: ${C["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=Y`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return $`
                <li style=${n}>
                    <${te.assign({router:e.router,route:{paths:[O.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Qr({"title-row":!0,selected:e.selectedPath?Xe(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Kt(ze(r,L.ElementExample),$`
                                    <${D.assign({icon:Xu})}></${D}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${te}>
                </li>
            `});return $`
            <slot name=${le.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}});async function Ku(e){await vl(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await wl(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ce=Q()({tagName:"book-error",styles:Y`
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
    `,renderCallback({inputs:e}){return(Jt(e.message,"array")?e.message:[e.message]).map(r=>$`
                    <p>${r}</p>
                `)}}),Uo=Q()({tagName:"book-breadcrumbs",styles:Y`
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
                <${te.assign({route:{hash:void 0,search:void 0,paths:[O.Book,...s]},router:e.router})}>
                    ${r}
                </${te}>
                ${i}
            `}):$`
                &nbsp;
            `}}),Wo=Q()({tagName:"book-breadcrumbs-bar",styles:Y`
        :host {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${C["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${C["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return $`
            ${Kt(!!e.currentSearch,$`
                    &nbsp;
                `,$`
                    <${Uo.assign({currentRoute:e.currentRoute,router:e.router})}></${Uo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${ie("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await ui(200),n.value===o&&(n.value?t(new Wt({paths:[O.Search,encodeURIComponent(n.value)]})):t(new Wt(ot)))})}
            />
        `}}),ct=Q()({tagName:"book-page-controls",events:{controlValueChange:Ea()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>Y`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${C["element-book-page-foreground-faint-level-1-color"].value};
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

        ${D}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===T.Hidden)return"";const s=ed(e.currentValues[n],o,i=>{const l=Jt(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return $`
                    <div class="control-wrapper">
                        ${Kt(a===0,$`
                                <${D.assign({icon:Ju})}
                                    class="options-icon"
                                ></${D}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function ed(e,t,r){return Me(t,T.Hidden)?"":Me(t,T.Checkbox)?$`
            <input
                type="checkbox"
                .value=${e}
                ${ie("input",n=>{const o=Ye(n,HTMLInputElement);r(o.checked)})}
            />
        `:Me(t,T.Color)?$`
            <input
                type="color"
                .value=${e}
                ${ie("input",n=>{const o=Ye(n,HTMLInputElement);r(o.value)})}
            />
        `:Me(t,T.Text)?$`
            <input
                type="text"
                .value=${e}
                ${ie("input",n=>{const o=Ye(n,HTMLInputElement);r(o.value)})}
            />
        `:Me(t,T.Number)?$`
            <input
                type="number"
                .value=${e}
                ${ie("input",n=>{const o=Ye(n,HTMLInputElement);r(o.value)})}
            />
        `:Me(t,T.Dropdown)?$`
            <select
                .value=${e}
                ${ie("input",n=>{const o=Ye(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>$`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:$`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Yo=Q()({tagName:"book-entry-description",styles:Y`
        :host {
            color: ${C["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${C["element-book-page-foreground-color"].value};
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
            `)}}),Zo=Q()({tagName:"book-page-wrapper",styles:Y`
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

        ${te} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?$`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:$`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[O.Book,...e.pageNode.fullUrlBreadcrumbs],n=ra(e.pageNode.entry.errors);return n&&console.error(n),$`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${te.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${te}>
                    ${n?$`
                              <${ce.assign({message:n.message})}></${ce}>
                          `:$`
                              <${Yo.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Yo}>
                              <${ct.assign({config:e.pageNode.entry.controls,currentValues:ln(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ct}>
                          `}
                </div>
            </div>
        `}}),Tt=Q()({tagName:"book-element-example-controls",styles:Y`
        :host {
            display: flex;
            color: ${C["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[O.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return $`
            <${te.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${te}>
        `}}),qo=Symbol("unset-internal-state"),Go=Q()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:qo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw ra(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===qo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return $`
                ${Kt(!!t.elementExampleNode.entry.styles,$`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),$`
                <${ce.assign({message:`${t.elementExampleNode.entry.title} failed: ${Xt(n)}`})}></${ce}>
            `}},options:{allowPolymorphicState:!0}}),Xo=Q()({tagName:"book-element-example-wrapper",styles:Y`
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

        ${Tt} {
            color: ${C["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Tt} {
            color: ${C["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return $`
            <div class="individual-example-wrapper">
                <${Tt.assign(ci(e,["currentPageControls"]))}></${Tt}>
                <${Go.assign(e)}></${Go}>
            </div>
        `}}),Ze=Q()({tagName:"book-entry-display",styles:Y`
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
    `,renderCallback:({inputs:e})=>{const t=Ha(e.currentRoute.paths),r=td({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return $`
            <${Wo.assign({currentSearch:t,currentRoute:e.currentRoute,router:e.router})}></${Wo}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${le.Footer}></slot>
        `}});function Ds(e,t,r,n){const o=Mr(r,n),a=[];if(o){const s=Ds(e,t,o,n);s&&a.push(s)}if(ze(r,L.Page)&&!e.includes(r)){const s=ln(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:fe(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function td({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:a}){if(!e.length&&n)return[$`
                No results
            `];const s=Mn(e,1)?Ds(e,o,e[0],a):void 0,i=s&&Mn(e,1)?$`
                  <${ct.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${ct}>
              `:"",l=Ci(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(ze(c,L.Page))return $`
                    <${Zo.assign({isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                        class="block-entry"
                    ></${Zo}>
                `;if(ze(c,L.ElementExample)){const d=ln(o,c.fullUrlBreadcrumbs.slice(0,-1));return $`
                    <${Xo.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Xo}>
                `}else return ze(c,L.Root)?$`
                    <h1>${c.entry.title}</h1>
                `:$`
                    <${ce}
                        class="block-entry"
                        ${rn(ce,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${ce}>
                `});return[i,l]}function rd(e,t,r){const n=Jo(e,t);if(n.length)return n;r(ot);const o=Jo(e,ot.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Jo(e,t){return e.filter(r=>pi({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const _t=Sa()({tagName:"element-book-app",events:{pathUpdate:Ea()},stateInitStatic:{currentRoute:ot,router:void 0,colors:{config:void 0,theme:zo(void 0)},treeBasedCurrentControls:void 0},styles:Y`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${C["element-book-page-background-color"].value};
            color: ${C["element-book-page-foreground-color"].value};
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

        ${Ze} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ae} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({host:e}){setTimeout(()=>{Qo(e)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,u;try{let d=function(k){e.router?e.router.setRoutes(k):n({currentRoute:{...e.currentRoute,...k}}),t.elementBookRoutePaths&&!Xe(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(k.paths??[]))};var s=d;if(t.elementBookRoutePaths&&!Xe(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const k=Dl(t.internalRouterConfig.basePath);n({router:k}),k.addRouteListener(!0,_=>{n({currentRoute:_})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const f={themeColor:t.themeColor};if(!Xe(f,(c=e.colors)==null?void 0:c.config)){const k=zo(f);n({colors:{config:f,theme:k}}),Vl(r,k)}const h=t.debug??!1,p=pl({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:h});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.entries!==t.entries||e.treeBasedCurrentControls.globalValues!==t.globalValues)&&n({treeBasedCurrentControls:{entries:t.entries,globalValues:t.globalValues??{},currentControls:Oa(p.tree,t.globalValues??{})}});const m=Ha(e.currentRoute.paths),x=(m?Sl({flattenedNodes:p.flattenedNodes,searchQuery:m}):void 0)??rd(p.flattenedNodes,e.currentRoute.paths,d),E=(u=e.treeBasedCurrentControls)==null?void 0:u.currentControls;return E?(t.debug&&console.info({currentControls:E}),$`
                <div
                    class="root"
                    ${ie(Wt,k=>{const _=r.shadowRoot.querySelector(Ze.tagName);if(_?_.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Ze.tagName}' for scrolling.`),d(k.detail),!(r.shadowRoot.querySelector(ae.tagName)instanceof ae))throw new Error(`Failed to find child '${ae.tagName}'`);Qo(r)})}
                    ${ie(ct.events.controlValueChange,k=>{if(!e.treeBasedCurrentControls)return;const _=bl(E,k.detail.fullUrlBreadcrumbs,k.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:_}})})}
                >
                    <${ae.assign({flattenedNodes:p.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${le.NavHeader}
                            slot=${le.NavHeader}
                        ></slot>
                    </${ae}>
                    <${Ze.assign({currentRoute:e.currentRoute,currentNodes:x,router:e.router,debug:h,currentControls:E,originalTree:p.tree})}>
                        <slot
                            name=${le.Footer}
                            slot=${le.Footer}
                        ></slot>
                    </${Ze}>
                </div>
            `):$`
                    <${ce.assign({message:"Failed to generate page controls."})}></${ce}>
                `}catch(d){return console.error(d),$`
                <p class="error">${Xt(d)}</p>
            `}}});async function Qo(e){const t=e.shadowRoot.querySelector(ae.tagName);if(!(t instanceof ae))throw new Error(`Failed to find child '${ae.tagName}'`);await Ku(t)}const Ie=Te({title:"Elements",parent:void 0}),Hs=v`
    pointer-events: none;
    opacity: 0.3;
`,Ke=V({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function nd(e){return`${e}px`}const qt=V({"vira-form-input-border-radius":"8px"}),Gt=V({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${qt["vira-form-input-border-radius"].value} + 4px)`});function Is({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=M(nd(n+r+t));return v`
        ${M(e)}::after {
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
    `}const Be=v`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Vs=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Ko="vira-",{defineElement:bt,defineElementNoInputs:kd}=Ss({assertInputs:e=>{if(!e.tagName.startsWith(Ko))throw new Error(`Tag name should start with '${Ko}' but got '${e.tagName}'`)}}),Wr=V({"vira-icon-color":"currentColor"}),od=V({"vira-icon-stroke-color":Wr["vira-icon-color"].value,"vira-icon-fill-color":Wr["vira-icon-color"].value}),Ce={...Wr,...od},B=bt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            color: ${Ce["vira-icon-color"].value};
            fill: ${Ce["vira-icon-fill-color"].value};
            stroke: ${Ce["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var js=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(js||{});const N=bt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Vs};
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
            ${Hs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Be};
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
            transition: color ${Ke["vira-interaction-animation-duration"].value},
                background-color
                    ${Ke["vira-interaction-animation-duration"].value},
                border-color ${Ke["vira-interaction-animation-duration"].value};
        }

        ${Is({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${B} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?w`
                  <${B}
                      ${I(B,{icon:e.icon})}
                  ></${B}>
              `:"",r=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:"";return w`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),ad=Te({parent:Ie,title:N.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:T.Text,initValue:""},"Secondary color":{controlType:T.Text,initValue:""},"Hover color":{controlType:T.Text,initValue:""},"Active color":{controlType:T.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??v``;e({title:r,styles:a,renderCallback({controls:s}){const i=v`
                        ${N.cssVars["vira-button-primary-color"].name}: ${M(s["Primary color"]||"inherit")};
                        ${N.cssVars["vira-button-secondary-color"].name}: ${M(s["Secondary color"]||"inherit")};
                        ${N.cssVars["vira-button-primary-hover-color"].name}: ${M(s["Hover color"]||"inherit")};
                        ${N.cssVars["vira-button-primary-active-color"].name}: ${M(s["Active color"]||"inherit")};
                    `;return w`
                        <${N}
                            style=${i}
                            ${I(N,{text:"hello",...o})}
                        ></${N}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:js.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:v`
                ${N} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:v`
                ${N} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:v`
                :host {
                    ${N.cssVars["vira-button-primary-color"].name}: pink;
                    ${N.cssVars["vira-button-secondary-color"].name}: purple;
                    ${N.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${N.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return w`
                    <${N}
                        ${I(N,{text:"hello"})}
                    ></${N}>
                `}})}});var Yr=(e=>(e.Header="header",e))(Yr||{});const oe=bt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Be};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Ke["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:be()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
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
                    ${ar(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),sd=Te({title:oe.tagName,parent:Ie,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>w`
                            <${oe}
                                ${I(oe,{expanded:!!r.expandedStates[o]})}
                                ${q(oe.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Yr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${q("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${De(!!r.showMoreStates[o],w`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${oe}>
                        `)}}),e({title:"wider examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>w`
                            <${oe}
                                ${I(oe,{expanded:!!r.expandedStates[o]})}
                                ${q(oe.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Yr.Header}
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
                                ${De(!!r.showMoreStates[o],w`
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
                        `)}})}});function vn({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const id=vn({name:"Element16Icon",svgTemplate:w`
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
    `}),et=vn({name:"Element24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),ld=vn({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${Ce["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),cd={Element16Icon:id,Element24Icon:et,Options24Icon:ld},ud=Te({title:B.tagName,parent:Ie,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return w`
                    <${B} ${I(B,{icon:et})}></${B}>
                `}})}});function Zr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Zr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Fs({value:e,allowed:t,blocked:r}){const n=t?Zr({input:e,matcher:t}):!0,o=r?Zr({input:e,matcher:r}):!1;return n&&!o}function ea(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Fs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const z=bt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:be(),inputBlocked:be()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Gt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Hs};
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
                ${Be};
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
                ${Vs};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${Be};
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
                    ${Ke["vira-interaction-animation-duration"].value};
            }

            label {
                ${Be};
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

            ${Is({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${B} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Be};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=ea({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?w`
                  <${B} ${I(B,{icon:e.icon})}></${B}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return w`
            <label>
                ${s}
                ${De(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${ar(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${Qr({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${q("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)Fs({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:h,blocked:p}=ea({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=h,t(new o.inputBlocked(p))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${De(!!e.suffix,w`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),dd=Te({title:z.tagName,parent:Ie,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:T.Text,initValue:""},"Placeholder color":{controlType:T.Text,initValue:""},"Border color":{controlType:T.Text,initValue:""},"Focus color":{controlType:T.Text,initValue:""},"Selection color":{controlType:T.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:v`
                    ${r||v``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:s,controls:i}){const l=v`
                        ${z.cssVars["vira-input-text-color"].name}: ${M(i["Text color"]||"inherit")};
                        ${z.cssVars["vira-input-border-color"].name}: ${M(i["Border color"]||"inherit")};
                        ${z.cssVars["vira-input-focus-border-color"].name}: ${M(i["Focus color"]||"inherit")};
                        ${z.cssVars["vira-input-placeholder-color"].name}: ${M(i["Placeholder color"]||"inherit")};
                        ${z.cssVars["vira-input-text-selection-color"].name}: ${M(i["Selection color"]||"inherit")};
                    `;return w`
                        <${z}
                            style=${l}
                            ${I(z,{...o,value:a.value})}
                            ${q(z.events.valueChange,c=>{s({value:c.detail})})}
                        ></${z}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:et}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:v`
                ${z} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:et}}),t({title:"custom height",styles:v`
                ${z} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"height",icon:et}}),t({title:"max width",styles:v`
                ${z} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:v`
                ${z} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),qe=bt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:be()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&un(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return w`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return w`
                <a href=${s} rel="noopener noreferrer" ${q("click",n)}>
                    <slot></slot>
                </a>
            `}}}),fd=Te({title:qe.tagName,parent:Ie,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:T.Color,initValue:""},"Hover color":{controlType:T.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=v`
                        ${qe.cssVars["vira-link-hover-color"].name}: ${M(o["Hover color"]||"inherit")};
                        color: ${M(o["CSS Color"]||"inherit")};
                    `;return w`
                        <${qe.assign(n)}
                            style=${a}
                            ${q(qe.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${qe}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),hd=Te({title:"Icons",parent:void 0,controls:{"Icon Color":{controlType:T.Text,initValue:""},"Stroke Color":{controlType:T.Text,initValue:""},"Fill Color":{controlType:T.Text,initValue:""}},elementExamplesCallback({defineExample:e}){Object.values(cd).forEach(t=>{e({title:t.name,renderCallback({controls:r}){const n=v`
                        ${Ce["vira-icon-color"].name}: ${M(r["Icon Color"]||"inherit")};
                        ${Ce["vira-icon-fill-color"].name}: ${M(r["Fill Color"]||"inherit")};
                        ${Ce["vira-icon-stroke-color"].name}: ${M(r["Stroke Color"]||"inherit")};
                    `;return w`
                        <${B} style=${n} ${I(B,{icon:t})}></${B}>
                    `}})})}}),pd=[Ie,hd,ad,sd,ud,dd,fd];or({tagName:"vira-book-app",styles:v`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${_t} {
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
            <${_t}
                ${I(_t,{internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:pd,themeColor:"#33ccff"})}
            >
                <h1 slot=${le.NavHeader}>Vira</h1>
            </${_t}>
        `}});
