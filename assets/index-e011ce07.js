var Es=Object.defineProperty;var _s=(e,t,r)=>t in e?Es(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ar=(e,t,r)=>(_s(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Wt(e){return!!e}function Ts(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ms={capitalizeFirstLetter:!1};function As(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Ps(e,t){return t.capitalizeFirstLetter?As(e):e}function Rs(e,t=Ms){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Ps(n,t)}function $n(e){return e!==e.toUpperCase()}function Bs(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=$n(s)||$n(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Io(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Xt(r).trim()).join(`
`))}function Xt(e){return e?e instanceof Error?e.message:Be(e,"message")?String(e.message):String(e):""}function Do(e){return e instanceof Error?e:new Error(Xt(e))}function At(e){return!!e&&typeof e=="object"}function Ns(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Ls=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Be(e,t){return e?Ls.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ho(e,t){return e&&t.every(r=>Be(e,r))}function ae(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Os(e){return Array.isArray(e)?"array":typeof e}function st(e,t){return Os(e)===t}function wn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const kn="Failed to compare objects using JSON.stringify";function xn(e,t,r){return wn({source:e,errorHandler(n){if(r)return"";throw n}})===wn({source:t,errorHandler(n){if(r)return"";throw n}})}function ve(e,t,r={}){try{return e===t?!0:At(e)&&At(t)?xn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ve(e[o],t[o])):!1:xn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Do(n);throw o.message.startsWith(kn)||(o.message=`${kn}: ${o.message}`),o}}function zs(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Vs(e){return ae(e).filter(t=>isNaN(Number(t)))}function Is(e){return Vs(e).map(r=>e[r])}function Ds(e,t){return Is(t).includes(e)}function Hs(e,t){return ae(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function js(e,t){return Hs(e,r=>!t.includes(r))}function ye(e,t){let r=!1;const n=ae(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(ae(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Us(e){const t=qr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function qr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${qr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Sn(e,t){try{return jo(e,t),!0}catch{return!1}}function jo(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Fs(e,t){return Be(e,"entryType")&&e.entryType===t}var B;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(B||(B={}));function xe(e,t){return e.controlType===t}var x;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(x||(x={}));const Uo=Symbol("any-type"),Ys={[x.Checkbox]:!1,[x.Color]:"",[x.Dropdown]:"",[x.Hidden]:Uo,[x.Number]:0,[x.Text]:""};function Zs(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=Ys[o.controlType];a!==Uo&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Wr(e,t){const r=Pt(e.title);return e.parent?[...Wr(e.parent,!1),Pt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Pt(e){return Ts(e).toLowerCase().replaceAll(/\s/g,"-")}function qs({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function ke(e){const t={...e,entryType:B.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:B.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Wt)};r.add(n.title),t.elementExamples[Pt(o.title)]=o}}),t}var ne;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ne||(ne={}));async function Cr(e=1){const t=qr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const Ws=globalThis.crypto;function Xs(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Ws.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function Gs(e){return Js(e,1)}async function Js(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{jo(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function He(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},it=e=>(...t)=>({_$litDirective$:e,values:t});let Ne=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sr;const Rt=window,Ae=Rt.trustedTypes,Cn=Ae?Ae.createPolicy("lit-html",{createHTML:e=>e}):void 0,Bt="$lit$",re=`lit$${(Math.random()+"").slice(9)}$`,Xr="?"+re,Ks=`<${Xr}>`,$e=document,Ke=()=>$e.createComment(""),Qe=e=>e===null||typeof e!="object"&&typeof e!="function",Fo=Array.isArray,Yo=e=>Fo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ir=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,En=/-->/g,_n=/>/g,he=RegExp(`>|${ir}(?:([^\\s"'>=/]+)(${ir}*=${ir}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tn=/'/g,Mn=/"/g,Zo=/^(?:script|style|textarea|title)$/i,Qs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ei=Qs(1),G=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),An=new WeakMap,be=$e.createTreeWalker($e,129,null,!1);function qo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cn!==void 0?Cn.createHTML(t):t}const Wo=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=je;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===je?u[1]==="!--"?s=En:u[1]!==void 0?s=_n:u[2]!==void 0?(Zo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=he):u[3]!==void 0&&(s=he):s===he?u[0]===">"?(s=o??je,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?he:u[3]==='"'?Mn:Tn):s===Mn||s===Tn?s=he:s===En||s===_n?s=je:(s=he,o=void 0);const h=s===he&&e[i+1].startsWith("/>")?" ":"";a+=s===je?l+Ks:d>=0?(n.push(c),l.slice(0,d)+Bt+l.slice(d)+re+h):l+re+(d===-2?(n.push(void 0),i):h)}return[qo(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class et{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=Wo(t,r);if(this.el=et.createElement(c,n),be.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=be.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Bt)||f.startsWith(re)){const h=u[s++];if(d.push(f),h!==void 0){const m=o.getAttribute(h.toLowerCase()+Bt).split(re),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:g[2],strings:m,ctor:g[1]==="."?Go:g[1]==="?"?Jo:g[1]==="@"?Ko:lt})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(Zo.test(o.tagName)){const d=o.textContent.split(re),f=d.length-1;if(f>0){o.textContent=Ae?Ae.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],Ke()),be.nextNode(),l.push({type:2,index:++a});o.append(d[f],Ke())}}}else if(o.nodeType===8)if(o.data===Xr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(re,d+1))!==-1;)l.push({type:7,index:a}),d+=re.length-1}a++}}static createElement(t,r){const n=$e.createElement("template");return n.innerHTML=t,n}}function we(e,t,r=e,n){var o,a,s,i;if(t===G)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Qe(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=we(e,l._$AS(e,t.values),l,n)),t}class Xo{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:$e).importNode(n,!0);be.currentNode=a;let s=be.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new Le(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new Qo(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=be.nextNode(),i++)}return be.currentNode=$e,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Le{constructor(t,r,n,o){var a;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=we(this,t,r),Qe(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==G&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Yo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&Qe(this._$AH)?this._$AA.nextSibling.data=t:this.$($e.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=et.createElement(qo(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new Xo(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=An.get(t.strings);return r===void 0&&An.set(t.strings,r=new et(t)),r}T(t){Fo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Le(this.k(Ke()),this.k(Ke()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class lt{constructor(t,r,n,o,a){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=we(this,t,r,0),s=!Qe(t)||t!==this._$AH&&t!==G,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=we(this,i[n+l],r,l),c===G&&(c=this._$AH[l]),s||(s=!Qe(c)||c!==this._$AH[l]),c===M?t=M:t!==M&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Go extends lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const ti=Ae?Ae.emptyScript:"";class Jo extends lt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,ti):this.element.removeAttribute(this.name)}}class Ko extends lt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=we(this,t,r,0))!==null&&n!==void 0?n:M)===G)return;const o=this._$AH,a=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==M&&(o===M||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Qo{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){we(this,t)}}const ri={O:Bt,P:re,A:Xr,C:1,M:Wo,L:Xo,D:Yo,R:we,I:Le,V:lt,H:Jo,N:Ko,U:Go,F:Qo},Pn=Rt.litHtmlPolyfillSupport;Pn==null||Pn(et,Le),((sr=Rt.litHtmlVersions)!==null&&sr!==void 0?sr:Rt.litHtmlVersions=[]).push("2.7.5");const ni=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Le(t.insertBefore(Ke(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:oi}=ri,Rn=()=>document.createComment(""),Ue=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(Rn(),a),i=o.insertBefore(Rn(),a);r=new oi(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},pe=(e,t,r=e)=>(e._$AI(t,r),e),ai={},si=(e,t=ai)=>e._$AH=t,ii=e=>e._$AH,lr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ea=it(class extends Ne{constructor(e){var t;if(super(e),e.type!==Gt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return G}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},li=it(class extends Ne{constructor(e){if(super(e),e.type!==Gt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=ii(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,f=0,h=a.length-1,m=0,g=s.length-1;for(;f<=h&&m<=g;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[m])c[m]=pe(a[f],s[m]),f++,m++;else if(l[h]===i[g])c[g]=pe(a[h],s[g]),h--,g--;else if(l[f]===i[g])c[g]=pe(a[f],s[g]),Ue(e,c[g+1],a[f]),f++,g--;else if(l[h]===i[m])c[m]=pe(a[h],s[m]),Ue(e,a[f],a[h]),h--,m++;else if(u===void 0&&(u=Bn(i,m,g),d=Bn(l,f,h)),u.has(l[f]))if(u.has(l[h])){const b=d.get(i[m]),S=b!==void 0?a[b]:null;if(S===null){const T=Ue(e,a[f]);pe(T,s[m]),c[m]=T}else c[m]=pe(S,s[m]),Ue(e,a[f],S),a[b]=null;m++}else lr(a[h]),h--;else lr(a[f]),f++;for(;m<=g;){const b=Ue(e,c[g+1]);pe(b,s[m]),c[m++]=b}for(;f<=h;){const b=a[f++];b!==null&&lr(b)}return this.ht=i,si(e,c),G}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Er=class extends Ne{constructor(t){if(super(t),this.et=M,t.type!==Gt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||t==null)return this.ft=void 0,this.et=t;if(t===G)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Er.directiveName="unsafeHTML",Er.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nn=class extends Er{};Nn.directiveName="unsafeSVG",Nn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ci(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=window,Gr=Ct.ShadowRoot&&(Ct.ShadyCSS===void 0||Ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jr=Symbol(),Ln=new WeakMap;let ta=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Jr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Gr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ln.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ln.set(r,t))}return t}toString(){return this.cssText}};const E=e=>new ta(typeof e=="string"?e:e+"",void 0,Jr),qe=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new ta(r,e,Jr)},ui=(e,t)=>{Gr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Ct.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},On=Gr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return E(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cr;const Nt=window,zn=Nt.trustedTypes,di=zn?zn.emptyScript:"",Vn=Nt.reactiveElementPolyfillSupport,_r={toAttribute(e,t){switch(t){case Boolean:e=e?di:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ra=(e,t)=>t!==e&&(t==t||e==e),ur={attribute:!0,type:String,converter:_r,reflect:!1,hasChanged:ra},Tr="finalized";class Ee extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=ur){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ur}static finalize(){if(this.hasOwnProperty(Tr))return!1;this[Tr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(On(o))}else t!==void 0&&r.push(On(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ui(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=ur){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:_r).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:_r;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ra)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Ee[Tr]=!0,Ee.elementProperties=new Map,Ee.elementStyles=[],Ee.shadowRootOptions={mode:"open"},Vn==null||Vn({ReactiveElement:Ee}),((cr=Nt.reactiveElementVersions)!==null&&cr!==void 0?cr:Nt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr,fr;class We extends Ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ni(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return G}}We.finalized=!0,We._$litElement$=!0,(dr=globalThis.litElementHydrateSupport)===null||dr===void 0||dr.call(globalThis,{LitElement:We});const In=globalThis.litElementPolyfillSupport;In==null||In({LitElement:We});((fr=globalThis.litElementVersions)!==null&&fr!==void 0?fr:globalThis.litElementVersions=[]).push("3.3.2");var fi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(S){if(S!==void 0&&typeof S!="function")throw new TypeError("Function expected");return S}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var m={};for(var g in n)m[g]=g==="access"?{}:n[g];for(var g in n.access)m.access[g]=n.access[g];m.addInitializer=function(S){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(S||null))};var b=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],m);if(i==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(d=s(b.get))&&(u.get=d),(d=s(b.set))&&(u.set=d),(d=s(b.init))&&o.unshift(d)}else(d=s(b))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},hi=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},pi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function mi(){function e(t,r){return t}return e}let na=(()=>{let e=[mi()],t,r=[],n;return n=class extends We{},pi(n,"DeclarativeElement"),fi(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,hi(n,r),n})();function fe(e){if(At(e))return ye(e,(r,n)=>{if(!st(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Bs(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?E(r):r.startsWith("-")?qe`-${E(r)}`:qe`--${E(r)}`;return{name:s,value:qe`var(${s}, ${E(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${fe.name}' function.`)}function gi({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},vi=(e,t,r)=>{t.constructor.createProperty(r,e)};function oa(e){return(t,r)=>r!==void 0?vi(e,t,r):bi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hr;((hr=window.HTMLSlotElement)===null||hr===void 0?void 0:hr.prototype.assignedElements)!=null;const Kr=Symbol("key for ignoring inputs not having been set yet"),yi={[Kr]:!0,allowPolymorphicState:!1};function aa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof na?!0:aa(r)}function sa(e,t){const r=e.instanceState;ae(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ae(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),$i(e)}function $i(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Dn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class wi extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Qr(){return e=>{var t;return t=class extends wi{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Pe(){return Qr()}function ki(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Qr()(r);return t[r]=n,t},{}):{}}const xi="_elementVirStateSetup";function Si(e){return At(e)?xi in e:!1}function Ci(e,t){return e.includes(t)}function ct(e){return!!e&&typeof e=="object"}const Ei=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Et(e,t){return e?Ei.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Lt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Mr(e){return Array.isArray(e)?"array":typeof e}function _e(e,t){return Mr(e)===t}function _i(e,t){let r=!1;const n=Lt(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Lt(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Ti(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Mr(e)===Mr(t)&&r}const ia=Symbol("and"),la=Symbol("or"),ca=Symbol("exact"),ua=Symbol("enum"),en=Symbol("unknown"),da="__vir__shape__definition__key__do__not__use__in__actual__objects";function fa(e){return Et(e,da)}const ha="__vir__shape__specifier__key__do__not__use__in__actual__objects",Mi=[ia,la,ca,ua,en];function Ai(){return Pi([],en)}function Jt(e){return ut(e,la)}function tn(e){return ut(e,ia)}function rn(e){return ut(e,ca)}function nn(e){return ut(e,ua)}function on(e){return ut(e,en)}function ut(e,t){const r=Kt(e);return!!r&&r.specifierType===t}function Pi(e,t){return{[ha]:!0,specifierType:t,parts:e}}function _t(e,t){const r=Kt(t);if(r){if(tn(r))return r.parts.every(n=>_t(e,n));if(Jt(r))return r.parts.some(n=>_t(e,n));if(rn(r))return ct(e)?_t(e,r.parts[0]):e===r.parts[0];if(nn(r))return Object.values(r.parts[0]).some(n=>n===e);if(on(r))return!0}return Ti(e,t)}function Kt(e){if(ct(e)&&Et(e,ha)){if(!Et(e,"parts")||!_e(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Et(e,"specifierType")||!Ci(Mi,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Ar(e){return Pr(e)}function Pr(e){const t=Kt(e);if(t){if(Jt(t)||rn(t))return Pr(t.parts[0]);if(tn(t))return t.parts.reduce((r,n)=>Object.assign(r,Pr(n)),{});if(nn(t))return Object.values(t.parts[0])[0];if(on(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return fa(e)?Ar(e.shape):e instanceof RegExp||_e(e,"array")?e:ct(e)?_i(e,(r,n)=>Ar(n)):e}function Ri(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Ar(e),[da]:!0}}class W extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Bi(e,t,r={}){try{return Ni(e,t,r),!0}catch{return!1}}function Ni(e,t,r={}){ge(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function pa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ge(e,t,r,n){if(on(t))return!0;if(fa(t))return ge(e,t.shape,r,n);const o=pa(r);if(Kt(e))throw new W(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!_t(e,t))throw new W(`Subject does not match shape definition at key ${o}`);if(_e(t,"function"))return _e(e,"function");if(ct(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(Jt(t))l=t.parts.some(c=>{try{const u=ge(e,c,r,{...n,ignoreExtraKeys:!1});return Object.assign(i,u),!0}catch(u){if(u instanceof W)return!1;throw u}});else if(tn(t))l=t.parts.every(c=>{try{const u=ge(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof W)return!1;throw u}});else if(rn(t)){const c=ge(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(nn(t))throw new W(`Cannot compare an enum specifier to an object at ${o}`);if(_e(t,"array")&&_e(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return ge(c,f,[...r,u],n),!0}catch(h){if(h instanceof W)return!1;throw h}});return i[u]=d,d});else{const c=Li({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l)throw new W("no error message");return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new W(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function Li({keys:e,options:t,shape:r,subject:n}){const o=pa(e),a={};if(ct(r)){const s=new Set(Lt(n)),i=new Set(Lt(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new W(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=Jt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new W(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];ge(c,u,[...e,l],t),a[l]=!0})}else throw new W(`shape definition at ${o} was not an object.`);return a}const Oi=Ri({addListener(){return!1},removeListener(){return!1},value:Ai()});function pr(e){return Bi(e,Oi,{allowExtraKeys:!0})}function zi(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Hn(e,t){const r=e;function n(s){t?zi(s,e,e.tagName):oa()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Si(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(m){s[i]=m,r[i]=m}const f=e.observablePropertyListenerMap[i];if(u!==c&&pr(u)&&(f!=null&&f.length)&&u.removeListener(f),pr(c))if(f)c.addListener(f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[i]=m,c.addListener(m)}else pr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Vi(e){return e?ye(e,t=>t):{}}function Ii({hostClassNames:e,cssVars:t}){return{hostClasses:ye(e,(r,n)=>({name:E(n),selector:E(`:host(.${n})`)})),cssVars:t}}function Di({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ae(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Hi(e,t){function r(o){ae(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var ji=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Qt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...yi,...e.options},n=ki(e.events),o=Vi(e.hostClasses);e.hostClasses&&Dn(e.tagName,e.hostClasses),e.cssVars&&Dn(e.tagName,e.cssVars);const a=e.cssVars?fe(e.cssVars):{},s=typeof e.styles=="function"?e.styles(Ii({hostClassNames:o,cssVars:a})):e.styles||qe``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends na{createRenderParams(){return Hi(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{aa(this)&&!this.haveInputsBeenSet&&!r[Kr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Qt.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Di({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Do(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){sa(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Hn(this,!1),this.instanceState=Hn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};ae(u).forEach(f=>{oa()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},ji(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Rs(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function ma(){return e=>Qt({...e,options:{[Kr]:!1,...e.options}})}function ga(e,t){return Rr(e,t),e.element}function Ui(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Rr(e,t){const r=Ui(e),n=r?`: in ${r}`:"";if(e.type!==Gt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function ba(e,t){return t?jn(e,t):jn(void 0,e)}const jn=it(class extends Ne{constructor(e){super(e),this.element=ga(e,"assign")}render(e,t){return sa(this.element,t),G}});function P(e,t){return Fi(e,t)}const Fi=it(class extends Ne{constructor(e){super(e),this.element=ga(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),G}}),mr="onResize",va=it(class extends Ne{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Rr(e,mr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${mr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Rr(e,mr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function ie(e,t,r){return ci(e,()=>t,()=>r)}function ya(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),ma()(r(n))),defineElementNoInputs:n=>(t(n),Qt(r(n)))}}function Yi(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Br(e){return Be(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function an(e){return Be(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function $a(e){return e.map(t=>Br(t)?t.definition:t).filter(t=>an(t))}const wa=new WeakMap;function Zi(e,t){var o;const r=$a(t);return(o=ka(wa,[e,...r]).value)==null?void 0:o.template}function qi(e,t,r){const n=$a(t);return Sa(wa,[e,...n],r)}function ka(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=xa(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ka(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function xa(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Sa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=xa(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Sa(l,t,r,n+1)}const Wi=new WeakMap;function Ca(e,t,r){const n=Zi(e,t),o=n??r();if(!n){const i=qi(e,t,o);if(i.result)Wi.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=Yi(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Ea(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let g,b=[];if(typeof f=="string"&&(g=r(f,c,m),g)){o[d]=f+g.replacement,s.push(h);const T=g.getExtraValues;b=T?T(m):[],b.length&&T?(o[d]+=" ",b.forEach((R,_)=>{_&&o.push(" ")}),i.push(R=>{const _=R[h],C=T(_);return{index:h,values:C}}),o.push(c)):o[d]+=c}g||o.push(c);const S=e.raw[u];g?(a[d]=a[d]+g.replacement+S,b.length&&b.forEach(()=>{a.push("")})):a.push(S)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function Xi(...[e,t,r]){if(an(r))return{replacement:r.tagName,getExtraValues:void 0}}function Gi(e,t){return Ea(e,t,Xi)}function y(e,...t){const r=Ca(e,t,()=>Gi(e,t));return qe(r.strings,...r.values)}function Ji(...[e,t,r]){const n=Br(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=an(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Br(c)?c.inputs:void 0;return[o&&u?ba(u):void 0].filter(Wt)}}}function Ki(e){}function Qi(e){return Ea(e.strings,e.values,Ji,Ki)}function p(e,...t){const r=ei(e,...t),n=Ca(e,t,()=>Qi(r));return{...r,strings:n.strings,values:n.values}}const el={[B.ElementExample]:()=>[],[B.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Zs(e.controls,e.title)].filter(Wt),[B.Root]:()=>[]},Ot="_isBookTreeNode",_a=new Map;function tl(e){return _a.get(e)}function rl(e,t){zs(_a,e,()=>t)}function Me(e,t){return!!(Ta(e)&&e.entry.entryType===t)}function Ta(e){return!!(Ho(e,[Ot,"entry"])&&e[Ot])}function nl(){return{[Ot]:!0,entry:{entryType:B.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function ol({entries:e,debug:t}){const r=tl(e);if(r)return r;const n=nl();e.forEach(s=>sn({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Ma(n),a={tree:n,flattenedNodes:o};return rl(e,a),t&&console.info("element-book tree:",n),a}function al(e,t,r){if(!t.parent)return e;const n=Nr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),sn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Nr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Wr(t,!1)}`);return o}function sn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=el[t.entryType](t);t.errors.push(...o);const a=al(e,t,r),s=Pt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Ot]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,Fs(t,B.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>sn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Nr(e,t){const r=Ta(e)?e.fullUrlBreadcrumbs.slice(0,-1):Wr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ma(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ma(o));return[e,...r].flat()}function ln(e,t){return cn(e,["",...t],void 0)}function cn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&cn(a,n,r);return{...e.controls,...s}}function sl(e,t,r){const n=Ns(e);return cn(n,["",...t],r),n}function Aa(e,t){const r=(t==null?void 0:t.controls)||(Me(e,B.Page)?ye(e.entry.controls,(o,a)=>a.initValue):{});return{children:ye(e.children,(o,a)=>{var s;return Aa(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function il({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const ll=Xs(32);function Tt(e){return e.join(ll)}function Pa(e){if(!e.length)return[];const t=Tt(e),r=Pa(e.slice(0,-1));return[t,...r]}const cl=["error","errors"];function ul(e){return cl.includes(e)}function dl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Tt(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&ul(t),s=Tt(o.fullUrlBreadcrumbs);if(il({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=Pa(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=Tt(o.fullUrlBreadcrumbs),s=r[a];if(!st(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var V;(function(e){e.Search="search",e.Book="book"})(V||(V={}));function Lr(e){return e[0]===V.Book?"":e[1]?decodeURIComponent(e[1]):""}const Re={hash:void 0,paths:[V.Book],search:void 0},fl=0;function Ra(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==fl)}class er extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Un extends er{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const tt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const hl=globalThis.history.pushState;function Fn(...e){const t=hl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(tt)),t}const pl=globalThis.history.replaceState;function Yn(...e){const t=pl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(tt)),t}function ml(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Fn)throw new Un("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Yn)throw new Un("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Fn,globalThis.history.replaceState=Yn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(tt))})}}function gl(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function bl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function vl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),a=globalThis.location.search?gl(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:a,hash:s}}function Ba(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Na({routeBase:e,windowPath:t}){if(!e)return"";const r=Ba(e);if(La({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Na({routeBase:n,windowPath:t}):""}function La({routeBase:e,windowPath:t}){const r=Ba(e);return r?t.startsWith(`/${r}`):!1}class yl extends er{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Oa(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Zn=6;function qn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Zn)throw new yl(`Route sanitization depth has exceed the max of ${Zn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Oa(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class gr extends er{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function $l(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new gr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new gr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new gr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function wl(e,t,r=!1){const n=za(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function za(e,t){var l;const r=La({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?bl(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",s=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(Wt).join("/")}${o}${s}`}function kl(e={}){$l(e),ml();const t=e.routeBase?Na({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>qn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Oa(l,u)))return wl(u,t,s)},createRoutesUrl(a){return za(a,t)},getCurrentRawRoutes(){return vl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new er(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(tt,n),r=!0),a&&qn(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(tt,n),r=!1),s},sanitizationDepth:0};return o}function xl(e){return kl({routeBase:e,routeSanitizer(t){return{paths:Sl(t.paths),hash:void 0,search:void 0}}})}function Sl(e){const t=e[0];if(Ds(t,V)){if(t===V.Book)return[V.Book,...e.slice(1)];if(t===V.Search)return e[1]?[t,e[1]]:[V.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Re.paths}const w=fe({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Cl={nav:{hover:{background:w["element-book-nav-hover-background-color"],foreground:w["element-book-nav-hover-foreground-color"]},active:{background:w["element-book-nav-active-background-color"],foreground:w["element-book-nav-active-foreground-color"]},selected:{background:w["element-book-nav-selected-background-color"],foreground:w["element-book-nav-selected-foreground-color"]}},accent:{icon:w["element-book-accent-icon-color"]},page:{background:w["element-book-page-background-color"],backgroundFaint1:w["element-book-page-background-faint-level-1-color"],backgroundFaint2:w["element-book-page-background-faint-level-2-color"],foreground:w["element-book-page-foreground-color"],foregroundFaint1:w["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:w["element-book-page-foreground-faint-level-2-color"]}};function El(e,t){Va(e,t,Cl)}function Or(e){return Be(e,"_$cssResult$")}function Wn(e){return Ho(e,["name","value","default"])&&st(e.default,"string")&&Or(e.name)&&Or(e.value)}function Va(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Or(o)){if(!Wn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);gi({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Wn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Va(e,o,a)}})}function A(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function dt(e){return se(e)==="string"}function se(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function zt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ia(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Da(e){return e[e.length-1]}function Vt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ha(e,t,r){return(r-e)/(t-e)}function un(e,t,r){return Vt(t[0],t[1],Ha(e[0],e[1],r))}function ja(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var _l=Object.freeze({__proto__:null,interpolate:Vt,interpolateInv:Ha,isString:dt,last:Da,mapRange:un,multiplyMatrices:A,parseCoordGrammar:ja,parseFunction:Ia,toPrecision:zt,type:se});class Tl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const le=new Tl;var K={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const X={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function zr(e){return Array.isArray(e)?e:X[e]}function It(e,t,r,n={}){if(e=zr(e),t=zr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(le.run("chromatic-adaptation-start",o),o.M||(o.W1===X.D65&&o.W2===X.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===X.D50&&o.W2===X.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),le.run("chromatic-adaptation-end",o),o.M)return A(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ml=75e-6,H=class H{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?H.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=zr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Al(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),le.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Ml}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Xn(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Xn(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=H.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=H.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(H.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof H)return t;if(se(t)==="string"){let o=H.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return H.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=se(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=H.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=se(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=H.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};ar(H,"registry",{}),ar(H,"DEFAULT_FORMAT",{type:"functions",name:"color"});let v=H;function Al(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Xn(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=ja(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=un(i,l,a)),a=zt(a,o),c&&(a+=c),a})}return e}var Y=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class I extends v{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Y),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=A(t.toXYZ_M,r);return this.white!==this.base.white&&(n=It(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=It(this.base.white,this.white,r),A(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ua(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(le.run("parse-start",r),r.color)return r.color;if(r.parsed=Ia(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of v.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((g,b)=>r.parsed.args[b]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in v.registry){let f=(i=(s=(a=v.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of v.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Da(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([m,g],b)=>{var z;let S=u.coordGrammar[b],T=(z=f[b])==null?void 0:z.type,R=S.find(Q=>Q==T);if(!R){let Q=g.name||m;throw new TypeError(`${T} not allowed for ${Q} in ${l}()`)}let _=R.range;T==="<percentage>"&&(_||(_=[0,1]));let C=g.range||g.refRange;return _&&C&&(f[b]=un(_,C,f[b])),R})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of v.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function k(e){if(!e)throw new TypeError("Empty color reference");dt(e)&&(e=Ua(e));let t=e.space||e.spaceId;return t instanceof v||(e.space=v.get(t)),e.alpha===void 0&&(e.alpha=1),e}function ft(e,t){return t=v.get(t),t.from(e)}function Z(e,t){let{space:r,index:n}=v.resolveCoord(t,e.space);return ft(e,r)[n]}function Fa(e,t,r){return t=v.get(t),e.coords=t.to(e.space,r),e}function ce(e,t,r){if(e=k(e),arguments.length===2&&se(arguments[1])==="object"){let n=arguments[1];for(let o in n)ce(e,o,n[o])}else{typeof r=="function"&&(r=r(Z(e,t)));let{space:n,index:o}=v.resolveCoord(t,e.space),a=ft(e,n);a[o]=r,Fa(e,n,a)}return e}var dn=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Y,fromBase:e=>It(Y.white,"D50",e),toBase:e=>It("D50",Y.white,e),formats:{color:{}}});const Pl=216/24389,Gn=24/116,gt=24389/27;let br=X.D50;var j=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:br,base:dn,fromBase(e){let r=e.map((n,o)=>n/br[o]).map(n=>n>Pl?Math.cbrt(n):(gt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Gn?Math.pow(t[0],3):(116*t[0]-16)/gt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/gt,t[2]>Gn?Math.pow(t[2],3):(116*t[2]-16)/gt].map((n,o)=>n*br[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function tr(e){return(e%360+360)%360}function Rl(e,t){if(e==="raw")return t;let[r,n]=t.map(tr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var rt=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:j,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Jn=25**7,Dt=Math.PI,Kn=180/Dt,Se=Dt/180;function Vr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=j.from(e),l=rt.from(j,[a,s,i])[1],[c,u,d]=j.from(t),f=rt.from(j,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,g=.5*(1-Math.sqrt(m/(m+Jn))),b=(1+g)*s,S=(1+g)*u,T=Math.sqrt(b**2+i**2),R=Math.sqrt(S**2+d**2),_=b===0&&i===0?0:Math.atan2(i,b),C=S===0&&d===0?0:Math.atan2(d,S);_<0&&(_+=2*Dt),C<0&&(C+=2*Dt),_*=Kn,C*=Kn;let z=c-a,Q=R-T,J=C-_,Ve=_+C,pn=Math.abs(J),Ie;T*R===0?Ie=0:pn<=180?Ie=J:J>180?Ie=J-360:J<-180?Ie=J+360:console.log("the unthinkable has happened");let mn=2*Math.sqrt(R*T)*Math.sin(Ie*Se/2),ws=(a+c)/2,or=(T+R)/2,gn=Math.pow(or,7),ee;T*R===0?ee=Ve:pn<=180?ee=Ve/2:Ve<360?ee=(Ve+360)/2:ee=(Ve-360)/2;let bn=(ws-50)**2,ks=1+.015*bn/Math.sqrt(20+bn),vn=1+.045*or,De=1;De-=.17*Math.cos((ee-30)*Se),De+=.24*Math.cos(2*ee*Se),De+=.32*Math.cos((3*ee+6)*Se),De-=.2*Math.cos((4*ee-63)*Se);let yn=1+.015*or*De,xs=30*Math.exp(-1*((ee-275)/25)**2),Ss=2*Math.sqrt(gn/(gn+Jn)),Cs=-1*Math.sin(2*xs*Se)*Ss,mt=(z/(r*ks))**2;return mt+=(Q/(n*vn))**2,mt+=(mn/(o*yn))**2,mt+=Cs*(Q/(n*vn))*(mn/(o*yn)),Math.sqrt(mt)}const Bl=75e-6;function Xe(e,t=e.space,{epsilon:r=Bl}={}){e=k(e),t=v.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function nt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ue(e,{method:t=K.gamut_mapping,space:r=e.space}={}){if(dt(arguments[1])&&(r=arguments[1]),r=v.get(r),Xe(e,r,{epsilon:0}))return k(e);let n=F(e,r);if(t!=="clip"&&!Xe(e,r)){let o=ue(nt(n),{method:"clip",space:r});if(Vr(e,o)>2){let a=v.resolveCoord(t),s=a.space,i=a.id,l=F(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=Z(l,i);for(;h-f>d;){let m=nt(l);m=ue(m,{space:r,method:"clip"}),Vr(l,m)-2<d?f=Z(l,i):h=Z(l,i),ce(l,i,(f+h)/2)}n=F(l,r)}else n=o}if(t==="clip"||!Xe(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=F(n,e.space)),e.coords=n.coords,e}ue.returns="color";function F(e,t,{inGamut:r}={}){e=k(e),t=v.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ue(o)),o}F.returns="color";function Ht(e,{precision:t=K.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=k(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??v.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Xe(e)&&(i=ue(nt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>zt(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=zt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Nl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Ll=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var rr=new I({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Nl,fromXYZ_M:Ll,formats:{color:{}}});const bt=1.09929682680944,Qn=.018053968510807;var Ya=new I({id:"rec2020",name:"REC.2020",base:rr,toBase(e){return e.map(function(t){return t<Qn*4.5?t/4.5:Math.pow((t+bt-1)/bt,1/.45)})},fromBase(e){return e.map(function(t){return t>=Qn?bt*Math.pow(t,.45)-(bt-1):4.5*t})},formats:{color:{}}});const Ol=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],zl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Za=new I({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ol,fromXYZ_M:zl});const Vl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Il=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var qa=new I({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Vl,fromXYZ_M:Il,formats:{color:{}}}),eo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let to=Array(3).fill("<percentage> | <number>[0, 255]"),ro=Array(3).fill("<number>[0, 255]");var ot=new I({id:"srgb",name:"sRGB",base:qa,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:to},rgb_number:{name:"rgb",commas:!0,coords:ro,noAlpha:!0},color:{},rgba:{coords:to,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ro},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=eo.black,t.alpha=0):t.coords=eo[e],t.coords)return t}}}}),Wa=new I({id:"p3",name:"P3",base:Za,fromBase:ot.fromBase,toBase:ot.toBase,formats:{color:{id:"display-p3"}}});K.display_space=ot;if(typeof CSS<"u"&&CSS.supports)for(let e of[j,Ya,Wa]){let t=e.getMinCoords(),n=Ht({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){K.display_space=e;break}}function Dl(e,{space:t=K.display_space,...r}={}){let n=Ht(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!K.display_space)n=new String(n),n.color=e;else{let o=F(e,t);n=new String(Ht(o,r)),n.color=o}return n}function Xa(e,t,r="lab"){r=v.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Hl(e,t){return e=k(e),t=k(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function de(e){return Z(e,[Y,"y"])}function Ga(e,t){ce(e,[Y,"y"],t)}function jl(e){Object.defineProperty(e.prototype,"luminance",{get(){return de(this)},set(t){Ga(this,t)}})}var Ul=Object.freeze({__proto__:null,getLuminance:de,register:jl,setLuminance:Ga});function Fl(e,t){e=k(e),t=k(t);let r=Math.max(de(e),0),n=Math.max(de(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Yl=.56,Zl=.57,ql=.62,Wl=.65,no=.022,Xl=1.414,Gl=.1,Jl=5e-4,Kl=1.14,oo=.027,Ql=1.14;function ao(e){return e>=no?e:e+(no-e)**Xl}function Ce(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function ec(e,t){t=k(t),e=k(e);let r,n,o,a,s,i;t=F(t,"srgb"),[a,s,i]=t.coords;let l=Ce(a)*.2126729+Ce(s)*.7151522+Ce(i)*.072175;e=F(e,"srgb"),[a,s,i]=e.coords;let c=Ce(a)*.2126729+Ce(s)*.7151522+Ce(i)*.072175,u=ao(l),d=ao(c),f=d>u;return Math.abs(d-u)<Jl?n=0:f?(r=d**Yl-u**Zl,n=r*Kl):(r=d**Wl-u**ql,n=r*Ql),Math.abs(n)<Gl?o=0:n>0?o=n-oo:o=n+oo,o*100}function tc(e,t){e=k(e),t=k(t);let r=Math.max(de(e),0),n=Math.max(de(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const rc=5e4;function nc(e,t){e=k(e),t=k(t);let r=Math.max(de(e),0),n=Math.max(de(t),0);return n>r&&([r,n]=[n,r]),n===0?rc:(r-n)/n}function oc(e,t){e=k(e),t=k(t);let r=Z(e,[j,"l"]),n=Z(t,[j,"l"]);return Math.abs(r-n)}const ac=216/24389,so=24/116,vt=24389/27;let vr=X.D65;var Ir=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:vr,base:Y,fromBase(e){let r=e.map((n,o)=>n/vr[o]).map(n=>n>ac?Math.cbrt(n):(vt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>so?Math.pow(t[0],3):(116*t[0]-16)/vt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/vt,t[2]>so?Math.pow(t[2],3):(116*t[2]-16)/vt].map((n,o)=>n*vr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const yr=Math.pow(5,.5)*.5+.5;function sc(e,t){e=k(e),t=k(t);let r=Z(e,[Ir,"l"]),n=Z(t,[Ir,"l"]),o=Math.abs(Math.pow(r,yr)-Math.pow(n,yr)),a=Math.pow(o,1/yr)*Math.SQRT2-40;return a<7.5?0:a}var Mt=Object.freeze({__proto__:null,contrastAPCA:ec,contrastDeltaPhi:sc,contrastLstar:oc,contrastMichelson:tc,contrastWCAG21:Fl,contrastWeber:nc});function ic(e,t,r={}){dt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Mt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=k(e),t=k(t);for(let a in Mt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Mt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ja(e){let[t,r,n]=ft(e,Y),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ka(e){let[t,r,n]=ft(e,Y),o=t+r+n;return[t/o,r/o]}function lc(e){Object.defineProperty(e.prototype,"uv",{get(){return Ja(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ka(this)}})}var cc=Object.freeze({__proto__:null,register:lc,uv:Ja,xy:Ka});function uc(e,t){return Xa(e,t,"lab")}const dc=Math.PI,io=dc/180;function fc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=j.from(e),[,i,l]=rt.from(j,[o,a,s]),[c,u,d]=j.from(t),f=rt.from(j,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,m=i-f,g=a-u,b=s-d,S=g**2+b**2-m**2,T=.511;o>=16&&(T=.040975*o/(1+.01765*o));let R=.0638*i/(1+.0131*i)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*io)):_=.36+Math.abs(.4*Math.cos((l+35)*io));let C=Math.pow(i,4),z=Math.sqrt(C/(C+1900)),Q=R*(z*_+1-z),J=(h/(r*T))**2;return J+=(m/(n*R))**2,J+=S/Q**2,Math.sqrt(J)}const lo=203;var fn=new v({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Y,fromBase(e){return e.map(t=>Math.max(t*lo,0))},toBase(e){return e.map(t=>Math.max(t/lo,0))}});const yt=1.15,$t=.66,co=2610/2**14,hc=2**14/2610,uo=3424/2**12,fo=2413/2**7,ho=2392/2**7,pc=1.7*2523/2**5,po=2**5/(1.7*2523),wt=-.56,$r=16295499532821565e-27,mc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],gc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],bc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],vc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Qa=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:fn,fromBase(e){let[t,r,n]=e,o=yt*t-(yt-1)*n,a=$t*r-($t-1)*t,i=A(mc,[o,a,n]).map(function(f){let h=uo+fo*(f/1e4)**co,m=1+ho*(f/1e4)**co;return(h/m)**pc}),[l,c,u]=A(bc,i);return[(1+wt)*l/(1+wt*l)-$r,c,u]},toBase(e){let[t,r,n]=e,o=(t+$r)/(1+wt-wt*(t+$r)),s=A(vc,[o,r,n]).map(function(f){let h=uo-f**po,m=ho*f**po-fo;return 1e4*(h/m)**hc}),[i,l,c]=A(gc,s),u=(i+(yt-1)*c)/yt,d=(l+($t-1)*u)/$t;return[u,d,c]},formats:{color:{}}}),Dr=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qa,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function yc(e,t){let[r,n,o]=Dr.from(e),[a,s,i]=Dr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const es=3424/4096,ts=2413/128,rs=2392/128,mo=2610/16384,$c=2523/32,wc=16384/2610,go=32/2523,kc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],xc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Sc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Cc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Hr=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:fn,fromBase(e){let t=A(kc,e);return Ec(t)},toBase(e){let t=_c(e);return A(Cc,t)},formats:{color:{}}});function Ec(e){let t=e.map(function(r){let n=es+ts*(r/1e4)**mo,o=1+rs*(r/1e4)**mo;return(n/o)**$c});return A(xc,t)}function _c(e){return A(Sc,e).map(function(n){let o=Math.max(n**go-es,0),a=ts-rs*n**go;return 1e4*(o/a)**wc})}function Tc(e,t){let[r,n,o]=Hr.from(e),[a,s,i]=Hr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Mc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Ac=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Pc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Rc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var jt=new v({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Y,fromBase(e){let r=A(Mc,e).map(n=>Math.cbrt(n));return A(Pc,r)},toBase(e){let r=A(Rc,e).map(n=>n**3);return A(Ac,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Bc(e,t){let[r,n,o]=jt.from(e),[a,s,i]=jt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Ut={deltaE76:uc,deltaECMC:fc,deltaE2000:Vr,deltaEJz:yc,deltaEITP:Tc,deltaEOK:Bc};function Ze(e,t,r={}){dt(r)&&(r={method:r});let{method:n=K.deltaE,...o}=r;e=k(e),t=k(t);for(let a in Ut)if("deltae"+n.toLowerCase()===a.toLowerCase())return Ut[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Nc(e,t=.25){let n=[v.get("oklch","lch"),"l"];return ce(e,n,o=>o*(1+t))}function Lc(e,t=.25){let n=[v.get("oklch","lch"),"l"];return ce(e,n,o=>o*(1-t))}var Oc=Object.freeze({__proto__:null,darken:Lc,lighten:Nc});function ns(e,t,r=.5,n={}){[e,t]=[k(e),k(t)],se(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return ht(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function os(e,t,r={}){let n;hn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[k(e),k(t)],n=ht(e,t,l));let c=Ze(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,m,g)=>{if(g===0)return 0;let b=Ze(m.color,d[g-1].color,a);return Math.max(h,b)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let m=d[h-1],g=d[h],b=(g.p+m.p)/2,S=n(b);f=Math.max(f,Ze(S,m.color),Ze(S,g.color)),d.splice(h,0,{p:b,color:n(b)}),h++}}}return d=d.map(f=>f.color),d}function ht(e,t,r={}){if(hn(e)){let[l,c]=[e,t];return ht(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=k(e),t=k(t),e=nt(e),t=nt(t);let i={colors:[e,t],options:r};if(n?n=v.get(n):n=v.registry[K.interpolationSpace]||e.space,o=o?v.get(o):n,e=F(e,n),t=F(t,n),e=ue(e),t=ue(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Z(e,c),Z(t,c)];[u,d]=Rl(l,[u,d]),ce(e,c,u),ce(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return Vt(f,m,l)}),u=Vt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=F(d,o)),d},{rangeArgs:i})}function hn(e){return se(e)==="function"&&!!e.rangeArgs}K.interpolationSpace="lab";function zc(e){e.defineFunction("mix",ns,{returns:"color"}),e.defineFunction("range",ht,{returns:"function<color>"}),e.defineFunction("steps",os,{returns:"array<color>"})}var Vc=Object.freeze({__proto__:null,isRange:hn,mix:ns,range:ht,register:zc,steps:os}),as=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ot,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ss=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:as,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Ic=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ss,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Dc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Hc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var is=new I({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Dc,fromXYZ_M:Hc}),jc=new I({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:is,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Uc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Fc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var ls=new I({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:dn,toXYZ_M:Uc,fromXYZ_M:Fc});const Yc=1/512,Zc=16/512;var qc=new I({id:"prophoto",name:"ProPhoto",base:ls,toBase(e){return e.map(t=>t<Zc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Yc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Wc=new v({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:jt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const bo=203,vo=2610/2**14,Xc=2**14/2610,Gc=2523/2**5,yo=2**5/2523,$o=3424/2**12,wo=2413/2**7,ko=2392/2**7;var Jc=new I({id:"rec2100pq",name:"REC.2100-PQ",base:rr,toBase(e){return e.map(function(t){return(Math.max(t**yo-$o,0)/(wo-ko*t**yo))**Xc*1e4/bo})},fromBase(e){return e.map(function(t){let r=Math.max(t*bo/1e4,0),n=$o+wo*r**vo,o=1+ko*r**vo;return(n/o)**Gc})},formats:{color:{id:"rec2100-pq"}}});const xo=.17883277,So=.28466892,Co=.55991073,wr=3.7743;var Kc=new I({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:rr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*wr:(Math.exp((t-Co)/xo)+So)/12*wr})},fromBase(e){return e.map(function(t){return t/=wr,t<=1/12?Math.sqrt(3*t):xo*Math.log(12*t-So)+Co})},formats:{color:{id:"rec2100-hlg"}}});const cs={};le.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=us(e.W1,e.W2,e.options.method))});le.add("chromatic-adaptation-end",e=>{e.M||(e.M=us(e.W1,e.W2,e.options.method))});function nr({id:e,toCone_M:t,fromCone_M:r}){cs[e]=arguments[0]}function us(e,t,r="Bradford"){let n=cs[r],[o,a,s]=A(n.toCone_M,e),[i,l,c]=A(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=A(u,n.toCone_M);return A(n.fromCone_M,d)}nr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});nr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});nr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});nr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(X,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});X.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Qc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],eu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ds=new I({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:X.ACES,toXYZ_M:Qc,fromXYZ_M:eu,formats:{color:{}}});const kt=2**-16,kr=-.35828683,xt=(Math.log2(65504)+9.72)/17.52;var tu=new I({id:"acescc",name:"ACEScc",coords:{r:{range:[kr,xt],name:"Red"},g:{range:[kr,xt],name:"Green"},b:{range:[kr,xt],name:"Blue"}},referred:"scene",base:ds,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-kt)*2:r<xt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(kt)+9.72)/17.52:t<kt?(Math.log2(kt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Eo=Object.freeze({__proto__:null,A98RGB:jc,A98RGB_Linear:is,ACEScc:tu,ACEScg:ds,HSL:as,HSV:ss,HWB:Ic,ICTCP:Hr,JzCzHz:Dr,Jzazbz:Qa,LCH:rt,Lab:j,Lab_D65:Ir,OKLCH:Wc,OKLab:jt,P3:Wa,P3_Linear:Za,ProPhoto:qc,ProPhoto_Linear:ls,REC_2020:Ya,REC_2020_Linear:rr,REC_2100_HLG:Kc,REC_2100_PQ:Jc,XYZ_ABS_D65:fn,XYZ_D50:dn,XYZ_D65:Y,sRGB:ot,sRGB_Linear:qa});class ${constructor(...t){let r;t.length===1&&(r=k(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:v.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new $(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Dl(this,...t);return r.color=new $(r.color),r}static get(t,...r){return t instanceof $?t:new $(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=$.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return $.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>$.get(c)));return l};t in $||($[t]=s),o&&($.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)$.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register($);else for(let r in t)$.defineFunction(r,t[r])}}$.defineFunctions({get:Z,getAll:ft,set:ce,setAll:Fa,to:F,equals:Hl,inGamut:Xe,toGamut:ue,distance:Xa,toString:Ht});Object.assign($,{util:_l,hooks:le,WHITES:X,Space:v,spaces:v.registry,parse:Ua,defaults:K});for(let e of Object.keys(Eo))v.register(Eo[e]);for(let e in v.registry)jr(e,v.registry[e]);le.add("colorspace-init-end",e=>{var t;jr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{jr(r,e)})});function jr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty($.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return v.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=v.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=v.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}$.extend(Ut);$.extend({deltaE:Ze});Object.assign($,{deltaEMethods:Ut});$.extend(Oc);$.extend({contrast:ic});$.extend(cc);$.extend(Ul);$.extend(Vc);$.extend(Mt);function fs(e){return ye(e,(t,r)=>r instanceof $?E(r.toString({format:"hex"})):fs(r))}const ru="dodgerblue";function Ur(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function xr({background:e,foreground:t}){return{background:e??new $(Ur(t)),foreground:t??new $(Ur(e))}}var Ft;(function(e){e.Dark="dark",e.Light="light"})(Ft||(Ft={}));function nu(e){return e==="black"?"white":"black"}const ou={black:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")},white:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")}},au={black:{backgroundFaint1:new $("#666"),backgroundFaint2:new $("#444")},white:{backgroundFaint1:new $("#ccc"),backgroundFaint2:new $("#fafafa")}};function _o({themeColor:e=ru,themeStyle:t=Ft.Light}={}){const r=new $(e),n=new $(t===Ft.Dark?"black":"white"),o=Ur(n),a=new $(o),s={nav:{hover:xr({background:r.clone().set({"hsl.l":93})}),active:xr({background:r.clone().set({"hsl.l":90})}),selected:xr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...au[nu(o)],foreground:a,...ou[o]}};return fs(s)}const Yt=Qr()("element-book-change-route"),To="vira-",{defineElement:pt,defineElementNoInputs:Au}=ya({assertInputs:e=>{if(!e.tagName.startsWith(To))throw new Error(`Tag name should start with '${To}' but got '${e.tagName}'`)}}),hs=y`
    pointer-events: none;
    opacity: 0.3;
`,Ge=fe({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function su(e){return`${e}px`}const Zt=fe({"vira-form-input-border-radius":"8px"}),qt=fe({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":y`calc(${Zt["vira-form-input-border-radius"].value} + 4px)`});function ps({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=E(su(n+r+t));return y`
        ${E(e)}::after {
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
    `}const Te=y`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,ms=y`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Fr=fe({"vira-icon-color":"currentColor"}),iu=fe({"vira-icon-stroke-color":Fr["vira-icon-color"].value,"vira-icon-fill-color":Fr["vira-icon-color"].value}),O={...Fr,...iu},N=pt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>y`
        :host {
            display: inline-block;
            color: ${O["vira-icon-color"].value};
            fill: ${O["vira-icon-fill-color"].value};
            stroke: ${O["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var gs=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(gs||{});const L=pt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>y`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ms};
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
            cursor: pointer;
            ${Te};
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
            transition: color ${Ge["vira-interaction-animation-duration"].value},
                background-color
                    ${Ge["vira-interaction-animation-duration"].value},
                border-color ${Ge["vira-interaction-animation-duration"].value};
        }

        ${ps({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${N} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${N.assign({icon:e.icon})}></${N}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Yr=(e=>(e.Header="header",e))(Yr||{});const me=pt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>y`
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
            transition: height ${Ge["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Pe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?y`
                  height: ${e.contentHeight}px;
              `:y`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${P("click",()=>{r(new n.expandChange(!o.expanded))})}
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
        `}});function Zr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Zr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function bs({value:e,allowed:t,blocked:r}){const n=t?Zr({input:e,matcher:t}):!0,o=r?Zr({input:e,matcher:r}):!1;return n&&!o}function Mo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(bs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const D=pt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Pe(),inputBlocked:Pe()},styles:({hostClasses:e,cssVars:t})=>y`
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
                ${ms};
                vertical-align: middle;
                max-height: 100%;
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
                border-radius: ${Zt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Ge["vira-interaction-animation-duration"].value};
            }

            label {
                ${Te};
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

            ${ps({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${N} {
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
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Mo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?p`
                  <${N.assign({icon:e.icon})}></${N}>
              `:"",i=e.fitText?y`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${s}
                ${ie(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${va(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${ea({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${P("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)bs({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:h,blocked:m}=Mo({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=h,t(new o.inputBlocked(m))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${ie(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Fe=pt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>y`
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
    `,events:{routeChange:Pe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&Ra(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return p`
                <a href=${s} rel="noopener noreferrer" ${P("click",n)}>
                    <slot></slot>
                </a>
            `}}});function Oe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const vs=Oe({name:"Element16Icon",svgTemplate:p`
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
    `}),Je=Oe({name:"Element24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),ys=Oe({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${O["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),lu=Oe({name:"StatusFailure24Icon",svgTemplate:p`
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
                stroke=${O["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                stroke="none"
                fill=${O["vira-icon-stroke-color"].value}
                d="m11.33 12-3.7-4.17.74-.66L12 11.25l3.63-4.08.74.66-3.7 4.17 3.7 4.17-.74.66L12 12.75l-3.63 4.08-.74-.66 3.7-4.17Z"
            />
        </svg>
    `}),cu=Oe({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${O["vira-icon-stroke-color"].value}
                fill="none"
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${O["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${O["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${O["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `}),uu=Oe({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${O["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                d="m6.64 13.81.7-.7 2.63 2.62 6.65-7.6.74.66-7.35 8.4-3.37-3.38Z"
                fill=${O["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `}),du={Element16Icon:vs,Element24Icon:Je,Options24Icon:ys,StatusFailure24Icon:lu,StatusInProgress24Icon:cu,StatusSuccess24Icon:uu},fu=y`
    padding: 0;
    margin: 0;
`;y`
    ${fu}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;const{defineElement:q,defineElementNoInputs:Pu}=ya(),U=q()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>y`
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
                ${P("click",a=>{(!e.router||Ra(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Yt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function hu(e,t){return e.entry.entryType===B.Root?!1:!!(e.entry.entryType===B.Page||ve(t,e.fullUrlBreadcrumbs.slice(0,-1))||ve(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const te=q()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>y`
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
            ${U.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!hu(r,e.selectedPath))return;const n=y`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${U.assign({router:e.router,route:{paths:[V.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ea({"title-row":!0,selected:e.selectedPath?ve(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ie(Me(r,B.ElementExample),p`
                                    <${N.assign({icon:vs})}></${N}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${U}>
                </li>
            `});return p`
            <${U.assign({route:Re,router:e.router})}>
                <slot name=${ne.NavHeader}>Book</slot>
            </${U}>
            <ul>
                ${t}
            </ul>
        `}});async function pu(e){await Cr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Gs(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const oe=q()({tagName:"book-error",styles:y`
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
    `,renderCallback({inputs:e}){return(st(e.message,"array")?e.message:[e.message]).map(r=>p`
                    <p>${r}</p>
                `)}}),Ao=q()({tagName:"book-breadcrumbs",styles:y`
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
                <${U.assign({route:{hash:void 0,search:void 0,paths:[V.Book,...s]},router:e.router})}>
                    ${r}
                </${U}>
                ${i}
            `}):p`
                &nbsp;
            `}}),Po=q()({tagName:"book-breadcrumbs-bar",styles:y`
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
            ${ie(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Ao.assign({currentRoute:e.currentRoute,router:e.router})}></${Ao}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${P("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Us(200),n.value===o&&(n.value?t(new Yt({paths:[V.Search,encodeURIComponent(n.value)]})):t(new Yt(Re)))})}
            />
        `}}),at=q()({tagName:"book-page-controls",events:{controlValueChange:Pe()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>y`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===x.Hidden)return"";const s=mu(e.currentValues[n],o,i=>{const l=st(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return p`
                    <div class="control-wrapper">
                        ${ie(a===0,p`
                                <${N.assign({icon:ys})}
                                    class="options-icon"
                                ></${N}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function mu(e,t,r){return xe(t,x.Hidden)?"":xe(t,x.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${P("input",n=>{const o=He(n,HTMLInputElement);r(o.checked)})}
            />
        `:xe(t,x.Color)?p`
            <input
                type="color"
                .value=${e}
                ${P("input",n=>{const o=He(n,HTMLInputElement);r(o.value)})}
            />
        `:xe(t,x.Text)?p`
            <input
                type="text"
                .value=${e}
                ${P("input",n=>{const o=He(n,HTMLInputElement);r(o.value)})}
            />
        `:xe(t,x.Number)?p`
            <input
                type="number"
                .value=${e}
                ${P("input",n=>{const o=He(n,HTMLInputElement);r(o.value)})}
            />
        `:xe(t,x.Dropdown)?p`
            <select
                .value=${e}
                ${P("input",n=>{const o=He(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Ro=q()({tagName:"book-entry-description",styles:y`
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
            `)}}),Bo=q()({tagName:"book-page-wrapper",styles:y`
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

        ${U} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[V.Book,...e.pageNode.fullUrlBreadcrumbs],n=Io(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${U.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${U}>
                    ${n?p`
                              <${oe.assign({message:n.message})}></${oe}>
                          `:p`
                              <${Ro.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Ro}>
                              <${at.assign({config:e.pageNode.entry.controls,currentValues:ln(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${at}>
                          `}
                </div>
            </div>
        `}}),St=q()({tagName:"book-element-example-controls",styles:y`
        :host {
            display: flex;
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[V.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${U.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${U}>
        `}}),No=Symbol("unset-internal-state"),Lo=q()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:No},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Io(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===No&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${ie(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${oe.assign({message:`${t.elementExampleNode.entry.title} failed: ${Xt(n)}`})}></${oe}>
            `}},options:{allowPolymorphicState:!0}}),Oo=q()({tagName:"book-element-example-wrapper",styles:y`
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

        ${St} {
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${St} {
            color: ${w["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${St.assign(js(e,["currentPageControls"]))}></${St}>
                <${Lo.assign(e)}></${Lo}>
            </div>
        `}}),Ye=q()({tagName:"book-entry-display",styles:y`
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
    `,renderCallback:({inputs:e})=>{const t=Lr(e.currentRoute.paths),r=gu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,controls:e.controls,originalTree:e.originalTree});return p`
            <${Po.assign({currentSearch:t,currentRoute:e.currentRoute,router:e.router})}></${Po}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${ne.Footer}></slot>
        `}});function $s(e,t,r,n){const o=Nr(r,n),a=[];if(o){const s=$s(e,t,o,n);s&&a.push(s)}if(Me(r,B.Page)&&!e.includes(r)){const s=ln(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:ye(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function gu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[p`
                No results
            `];const s=Sn(e,1)?$s(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&Sn(e,1)?p`
                  <${at.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${at}>
              `:"",l=li(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Me(c,B.Page))return p`
                    <${Bo.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Bo}>
                `;if(Me(c,B.ElementExample)){const d=ln(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${Oo.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Oo}>
                `}else return Me(c,B.Root)?p``:p`
                    <${oe}
                        class="block-entry"
                        ${ba(oe,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${oe}>
                `});return[i,l]}function bu(e,t,r){const n=zo(e,t);if(n.length)return n;r(Re);const o=zo(e,Re.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function zo(e,t){return e.filter(r=>qs({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Sr=ma()({tagName:"element-book-app",events:{pathUpdate:Pe()},stateInitStatic:{currentRoute:Re,router:void 0,loading:!1,colors:{config:void 0,theme:_o(void 0)},treeBasedControls:void 0},styles:y`
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

        ${Ye} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${te} {
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
    `,initCallback({host:e,state:t}){setTimeout(()=>{Vo(e,Lr(t.currentRoute.paths),t.currentRoute)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,u,d,f;t._debug&&console.info("rendering element-book app");try{let h=function(C){e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!ve(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))};var s=h;if(t.elementBookRoutePaths&&!ve(t.elementBookRoutePaths,e.currentRoute.paths)&&h({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const C=xl(t.internalRouterConfig.basePath);n({router:C}),C.addRouteListener(!0,z=>{n({currentRoute:z})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const m={themeColor:t.themeColor};if(!ve(m,(c=e.colors)==null?void 0:c.config)){const C=_o(m);n({colors:{config:m,theme:C}}),El(r,C)}const g=t._debug??!1,b=ol({entries:t.entries,debug:g});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Aa(b.tree,{children:(d=(u=e.treeBasedControls)==null?void 0:u.controls)==null?void 0:d.children,controls:t.globalValues})}}));const S=Lr(e.currentRoute.paths),R=(S?dl({flattenedNodes:b.flattenedNodes,searchQuery:S}):void 0)??bu(b.flattenedNodes,e.currentRoute.paths,h),_=(f=e.treeBasedControls)==null?void 0:f.controls;return _?(t._debug&&console.info({currentControls:_}),p`
                <div
                    class="root"
                    ${P(Yt,async C=>{const z=r.shadowRoot.querySelector(Ye.tagName);for(n({loading:!0});!r.shadowRoot.querySelector(".loading");)await Cr();if(await Cr(),z?z.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Ye.tagName}' for scrolling.`),h(C.detail),!(r.shadowRoot.querySelector(te.tagName)instanceof te))throw new Error(`Failed to find child '${te.tagName}'`);n({loading:!1}),Vo(r,S,e.currentRoute)})}
                    ${P(at.events.controlValueChange,C=>{if(!e.treeBasedControls)return;const z=sl(_,C.detail.fullUrlBreadcrumbs,C.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:z}})})}
                >
                    <${te.assign({flattenedNodes:b.flattenedNodes,router:e.router,selectedPath:S?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ne.NavHeader}
                            slot=${ne.NavHeader}
                        ></slot>
                    </${te}>
                    ${e.loading?p`
                              <div class="loading">Loading...</div>
                          `:p`
                              <${Ye.assign({currentRoute:e.currentRoute,currentNodes:R,router:e.router,debug:g,controls:_,originalTree:b.tree})}>
                                  <slot
                                      name=${ne.Footer}
                                      slot=${ne.Footer}
                                  ></slot>
                              </${Ye}>
                          `}
                </div>
            `):p`
                    <${oe.assign({message:"Failed to generate page controls."})}></${oe}>
                `}catch(h){return console.error(h),p`
                <p class="error">${Xt(h)}</p>
            `}}});async function Vo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(te.tagName);if(!(n instanceof te))throw new Error(`Failed to find child '${te.tagName}'`);await pu(n)}const ze=ke({title:"Elements",parent:void 0}),vu=ke({parent:ze,title:L.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:x.Text,initValue:""},"Secondary color":{controlType:x.Text,initValue:""},"Hover color":{controlType:x.Text,initValue:""},"Active color":{controlType:x.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??y``;e({title:r,styles:a,renderCallback({controls:s}){const i=y`
                        ${L.cssVars["vira-button-primary-color"].name}: ${E(s["Primary color"]||"inherit")};
                        ${L.cssVars["vira-button-secondary-color"].name}: ${E(s["Secondary color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-hover-color"].name}: ${E(s["Hover color"]||"inherit")};
                        ${L.cssVars["vira-button-primary-active-color"].name}: ${E(s["Active color"]||"inherit")};
                    `;return p`
                        <${L.assign({text:"hello",...o})}
                            style=${i}
                        ></${L}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:gs.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:y`
                ${L} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:y`
                ${L} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:y`
                :host {
                    ${L.cssVars["vira-button-primary-color"].name}: pink;
                    ${L.cssVars["vira-button-secondary-color"].name}: purple;
                    ${L.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${L.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return p`
                    <${L.assign({text:"hello"})}></${L}>
                `}})}}),yu=ke({title:me.tagName,parent:ze,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:y`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${me.assign({expanded:!!r.expandedStates[o]})}
                                ${P(me.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Yr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${P("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ie(!!r.showMoreStates[o],p`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${me}>
                        `)}}),e({title:"wider examples",styles:y`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${me.assign({expanded:!!r.expandedStates[o]})}
                                ${P(me.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
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
                                    ${P("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ie(!!r.showMoreStates[o],p`
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
                            </${me}>
                        `)}})}}),$u=ke({title:N.tagName,parent:ze,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return p`
                    <${N.assign({icon:Je})}></${N}>
                `}})}}),wu=ke({title:D.tagName,parent:ze,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:x.Text,initValue:""},"Placeholder color":{controlType:x.Text,initValue:""},"Border color":{controlType:x.Text,initValue:""},"Focus color":{controlType:x.Text,initValue:""},"Selection color":{controlType:x.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:y`
                    ${r||y``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:s,controls:i}){const l=y`
                        ${D.cssVars["vira-input-text-color"].name}: ${E(i["Text color"]||"inherit")};
                        ${D.cssVars["vira-input-border-color"].name}: ${E(i["Border color"]||"inherit")};
                        ${D.cssVars["vira-input-focus-border-color"].name}: ${E(i["Focus color"]||"inherit")};
                        ${D.cssVars["vira-input-placeholder-color"].name}: ${E(i["Placeholder color"]||"inherit")};
                        ${D.cssVars["vira-input-text-selection-color"].name}: ${E(i["Selection color"]||"inherit")};
                    `;return p`
                        <${D.assign({...o,value:a.value})}
                            style=${l}
                            ${P(D.events.valueChange,c=>{s({value:c.detail})})}
                        ></${D}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:Je}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:y`
                ${D} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:Je}}),t({title:"custom height",styles:y`
                ${D} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"height",icon:Je}}),t({title:"max width",styles:y`
                ${D} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:y`
                ${D} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),ku=ke({title:Fe.tagName,parent:ze,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:x.Color,initValue:""},"Hover color":{controlType:x.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=y`
                        ${Fe.cssVars["vira-link-hover-color"].name}: ${E(o["Hover color"]||"inherit")};
                        color: ${E(o["CSS Color"]||"inherit")};
                    `;return p`
                        <${Fe.assign(n)}
                            style=${a}
                            ${P(Fe.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${Fe}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),xu=ke({title:"Icons",parent:void 0,controls:{"Icon Color":{controlType:x.Text,initValue:""},"Stroke Color":{controlType:x.Text,initValue:""},"Fill Color":{controlType:x.Text,initValue:""}},elementExamplesCallback({defineExample:e}){Object.values(du).forEach(t=>{e({title:t.name,renderCallback({controls:r}){const n=y`
                        ${O["vira-icon-color"].name}: ${E(r["Icon Color"]||"inherit")};
                        ${O["vira-icon-fill-color"].name}: ${E(r["Fill Color"]||"inherit")};
                        ${O["vira-icon-stroke-color"].name}: ${E(r["Stroke Color"]||"inherit")};
                    `;return p`
                        <${N.assign({icon:t})} style=${n}></${N}>
                    `}})})}}),Su=[ze,xu,vu,yu,$u,wu,ku];Qt({tagName:"vira-book-app",styles:y`
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
            <${Sr.assign({internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Su,themeColor:"#33ccff"})}>
                <h1 slot=${ne.NavHeader}>Vira</h1>
            </${Sr}>
        `}});
