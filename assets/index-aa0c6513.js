var Os=Object.defineProperty;var Ds=(e,t,r)=>t in e?Os(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ar=(e,t,r)=>(Ds(e,typeof t!="symbol"?t+"":t,r),r),sr=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var xe=(e,t,r)=>(sr(e,t,"read from private field"),r?r.call(e):t.get(e)),Ie=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},ir=(e,t,r,n)=>(sr(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var mt=(e,t,r)=>(sr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var q;(function(e){e.Chapter="chapter",e.Page="page",e.Root="root"})(q||(q={}));function Le(e){return e.title?{entryType:q.Chapter,...e}:new Error("Cannot have an element-book chapter with an empty title.")}function Oo(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Hs={capitalizeFirstLetter:!1};function Is(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function js(e,t){return t.capitalizeFirstLetter?Is(e):e}function Vs(e,t=Hs){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return js(n,t)}function $n(e){return e!==e.toUpperCase()}function Fs(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=$n(s)||$n(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Us=["january","february","march","april","may","june","july","august","september","october","november","december"];Us.map(e=>e.slice(0,3));function Ys(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Xt(r).trim()).join(`
`))}function Xt(e){return e?e instanceof Error?e.message:ke(e,"message")?String(e.message):String(e):""}function Do(e){return e instanceof Error?e:new Error(Xt(e))}function Ws(e){return!!e}function Mr(e){return!!e&&typeof e=="object"}const wn="Failed to compare objects using JSON.stringify";function Cn(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Ue(e,t){try{return e===t?!0:Mr(e)&&Mr(t)?Cn(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(n=>Ue(e[n],t[n])):!1:Cn(e,t)}catch(r){const n=Do(r);throw n.message.startsWith(wn)||(n.message=`${wn}: ${n.message}`),n}}const Gs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ke(e,t){return e?Gs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Kr(e,t){return e&&t.every(r=>ke(e,r))}function re(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Xs(e){return Array.isArray(e)?"array":typeof e}function Ho(e,t){return Xs(e)===t}function Zs(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function qs(e){return re(e).filter(t=>isNaN(Number(t)))}function Js(e){return qs(e).map(r=>e[r])}function Qs(e,t){return Js(t).includes(e)}function Ks(e,t){return re(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function rt(e,t){let r=!1;const n=re(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(re(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function ei(e){const t=Io();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Io(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Io.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function ti(e,t){try{return ri(e,t),!0}catch{return!1}}function ri(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ni(e,t){return ke(e,"entryType")&&e.entryType===t}function Zt(e,t){const r=Ar(e.title);return e.parent?[Ar(e.parent.title),...Zt(e.parent,!1)].concat(t?[r]:[]):t?[r]:[]}function Ar(e){return Oo(e).toLowerCase().replaceAll(/\s/g,"-")}function oi(e,t,r){const n=[],o=`Failed to define example '${t.concat(r.title).join(" > ")}'`;e.hasOwnProperty(r.title)?n.push(new Error(`${o}: title '${r.title}' is already being used.`)):r.title||n.push(new Error(`${o}: example title is missing or empty.`)),n.length?e[r.title]=Ys(n):e[r.title]=r}function Be(e){if(!e.title)throw new Error("Cannot have an element-book page with an empty title.");const t={},r={entryType:q.Page,...e,examples:t,controls:e.controls??{},pageBreadcrumbs:[]};return r.pageBreadcrumbs=Zt(r),e.defineExamplesCallback&&e.defineExamplesCallback({defineExample:n=>oi(t,r.pageBreadcrumbs,n)}),r}var P;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Text="text"})(P||(P={}));var te;(function(e){e.Footer="element-book-footer",e.NavHeader="element-book-nav-header"})(te||(te={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},de=e=>(...t)=>({_$litDirective$:e,values:t});let he=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lr;const At=window,Ne=At.trustedTypes,kn=Ne?Ne.createPolicy("lit-html",{createHTML:e=>e}):void 0,Pt="$lit$",ee=`lit$${(Math.random()+"").slice(9)}$`,en="?"+ee,ai=`<${en}>`,$e=document,Xe=()=>$e.createComment(""),Ze=e=>e===null||typeof e!="object"&&typeof e!="function",jo=Array.isArray,Vo=e=>jo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",cr=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xn=/-->/g,En=/>/g,pe=RegExp(`>|${cr}(?:([^\\s"'>=/]+)(${cr}*=${cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sn=/'/g,_n=/"/g,Fo=/^(?:script|style|textarea|title)$/i,si=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Uo=si(1),I=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Tn=new WeakMap,ge=$e.createTreeWalker($e,129,null,!1),Yo=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=je;for(let l=0;l<r;l++){const c=e[l];let d,u,h=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===je?u[1]==="!--"?s=xn:u[1]!==void 0?s=En:u[2]!==void 0?(Fo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=pe):u[3]!==void 0&&(s=pe):s===pe?u[0]===">"?(s=o??je,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?pe:u[3]==='"'?_n:Sn):s===_n||s===Sn?s=pe:s===xn||s===En?s=je:(s=pe,o=void 0);const f=s===pe&&e[l+1].startsWith("/>")?" ":"";a+=s===je?c+ai:h>=0?(n.push(d),c.slice(0,h)+Pt+c.slice(h)+ee+f):c+ee+(h===-2?(n.push(void 0),l):f)}const i=a+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[kn!==void 0?kn.createHTML(i):i,n]};class qe{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,d]=Yo(t,r);if(this.el=qe.createElement(c,n),ge.currentNode=this.el.content,r===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=ge.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(Pt)||h.startsWith(ee)){const p=d[s++];if(u.push(h),p!==void 0){const f=o.getAttribute(p.toLowerCase()+Pt).split(ee),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:a,name:m[2],strings:f,ctor:m[1]==="."?Go:m[1]==="?"?Xo:m[1]==="@"?Zo:ot})}else l.push({type:6,index:a})}for(const h of u)o.removeAttribute(h)}if(Fo.test(o.tagName)){const u=o.textContent.split(ee),h=u.length-1;if(h>0){o.textContent=Ne?Ne.emptyScript:"";for(let p=0;p<h;p++)o.append(u[p],Xe()),ge.nextNode(),l.push({type:2,index:++a});o.append(u[h],Xe())}}}else if(o.nodeType===8)if(o.data===en)l.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(ee,u+1))!==-1;)l.push({type:7,index:a}),u+=ee.length-1}a++}}static createElement(t,r){const n=$e.createElement("template");return n.innerHTML=t,n}}function we(e,t,r=e,n){var o,a,s,i;if(t===I)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Ze(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=we(e,l._$AS(e,t.values),l,n)),t}let Wo=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:$e).importNode(n,!0);ge.currentNode=a;let s=ge.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new ze(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new qo(s,this,t)),this._$AV.push(d),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=ge.nextNode(),i++)}return ge.currentNode=$e,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class ze{constructor(t,r,n,o){var a;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=we(this,t,r),Ze(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Vo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==E&&Ze(this._$AH)?this._$AA.nextSibling.data=t:this.$($e.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=qe.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new Wo(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=Tn.get(t.strings);return r===void 0&&Tn.set(t.strings,r=new qe(t)),r}T(t){jo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new ze(this.k(Xe()),this.k(Xe()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ot{constructor(t,r,n,o,a){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=we(this,t,r,0),s=!Ze(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=we(this,i[n+l],r,l),c===I&&(c=this._$AH[l]),s||(s=!Ze(c)||c!==this._$AH[l]),c===E?t=E:t!==E&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Go extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}const ii=Ne?Ne.emptyScript:"";class Xo extends ot{constructor(){super(...arguments),this.type=4}j(t){t&&t!==E?this.element.setAttribute(this.name,ii):this.element.removeAttribute(this.name)}}class Zo extends ot{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=we(this,t,r,0))!==null&&n!==void 0?n:E)===I)return;const o=this._$AH,a=t===E&&o!==E||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==E&&(o===E||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class qo{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){we(this,t)}}const li={O:Pt,P:ee,A:en,C:1,M:Yo,L:Wo,D:Vo,R:we,I:ze,V:ot,H:Xo,N:Zo,U:Go,F:qo},Mn=At.litHtmlPolyfillSupport;Mn==null||Mn(qe,ze),((lr=At.litHtmlVersions)!==null&&lr!==void 0?lr:At.litHtmlVersions=[]).push("2.7.4");const ci=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new ze(t.insertBefore(Xe(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ui}=li,An=()=>document.createComment(""),Ve=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(An(),a),i=o.insertBefore(An(),a);r=new ui(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const d=c.nextSibling;o.insertBefore(c,a),c=d}}}return r},me=(e,t,r=e)=>(e._$AI(t,r),e),di={},hi=(e,t=di)=>e._$AH=t,fi=e=>e._$AH,ur=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo=de(class extends he{constructor(e){var t;if(super(e),e.type!==nt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return I}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Qo=de(class extends he{constructor(e){if(super(e),e.type!==nt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=fi(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,h=0,p=a.length-1,f=0,m=s.length-1;for(;h<=p&&f<=m;)if(a[h]===null)h++;else if(a[p]===null)p--;else if(l[h]===i[f])c[f]=me(a[h],s[f]),h++,f++;else if(l[p]===i[m])c[m]=me(a[p],s[m]),p--,m--;else if(l[h]===i[m])c[m]=me(a[h],s[m]),Ve(e,c[m+1],a[h]),h++,m--;else if(l[p]===i[f])c[f]=me(a[p],s[f]),Ve(e,a[h],a[p]),p--,f++;else if(d===void 0&&(d=Pn(i,f,m),u=Pn(l,h,p)),d.has(l[h]))if(d.has(l[p])){const g=u.get(i[f]),v=g!==void 0?a[g]:null;if(v===null){const L=Ve(e,a[h]);me(L,s[f]),c[f]=L}else c[f]=me(v,s[f]),Ve(e,a[h],v),a[g]=null;f++}else ur(a[p]),p--;else ur(a[h]),h++;for(;f<=m;){const g=Ve(e,c[m+1]);me(g,s[f]),c[f++]=g}for(;h<=p;){const g=a[h++];g!==null&&ur(g)}return this.ht=i,hi(e,c),I}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Rt=class extends he{constructor(t){if(super(t),this.et=E,t.type!==nt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===E||t==null)return this.ft=void 0,this.et=t;if(t===I)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Rt.directiveName="unsafeHTML",Rt.resultType=1;const pi=de(Rt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Rn=class extends Rt{};Rn.directiveName="unsafeSVG",Rn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ko(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=window,tn=Tt.ShadowRoot&&(Tt.ShadyCSS===void 0||Tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rn=Symbol(),Nn=new WeakMap;let ea=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==rn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(tn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Nn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Nn.set(r,t))}return t}toString(){return this.cssText}};const x=e=>new ea(typeof e=="string"?e:e+"",void 0,rn),ye=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new ea(r,e,rn)},mi=(e,t)=>{tn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Tt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Ln=tn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return x(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr;const Nt=window,Bn=Nt.trustedTypes,gi=Bn?Bn.emptyScript:"",zn=Nt.reactiveElementPolyfillSupport,Pr={toAttribute(e,t){switch(t){case Boolean:e=e?gi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ta=(e,t)=>t!==e&&(t==t||e==e),hr={attribute:!0,type:String,converter:Pr,reflect:!1,hasChanged:ta},Rr="finalized";class Te extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=hr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||hr}static finalize(){if(this.hasOwnProperty(Rr))return!1;this[Rr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Ln(o))}else t!==void 0&&r.push(Ln(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return mi(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=hr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Pr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Pr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ta)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Te[Rr]=!0,Te.elementProperties=new Map,Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},zn==null||zn({ReactiveElement:Te}),((dr=Nt.reactiveElementVersions)!==null&&dr!==void 0?dr:Nt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fr,pr;class Ae extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ci(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return I}}Ae.finalized=!0,Ae._$litElement$=!0,(fr=globalThis.litElementHydrateSupport)===null||fr===void 0||fr.call(globalThis,{LitElement:Ae});const On=globalThis.litElementPolyfillSupport;On==null||On({LitElement:Ae});((pr=globalThis.litElementVersions)!==null&&pr!==void 0?pr:globalThis.litElementVersions=[]).push("3.3.2");var bi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(v){if(v!==void 0&&typeof v!="function")throw new TypeError("Function expected");return v}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,p=r.length-1;p>=0;p--){var f={};for(var m in n)f[m]=m==="access"?{}:n[m];for(var m in n.access)f.access[m]=n.access[m];f.addInitializer=function(v){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(v||null))};var g=(0,r[p])(i==="accessor"?{get:d.get,set:d.set}:d[l],f);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(u=s(g.get))&&(d.get=u),(u=s(g.set))&&(d.set=u),(u=s(g.init))&&o.push(u)}else(u=s(g))&&(i==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},vi=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},yi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function $i(){function e(t,r){return t}return e}let ra=(()=>{let e=[$i()],t,r=[],n;return n=class extends Ae{},yi(n,"DeclarativeElement"),bi(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,vi(n,r),n})();function X(e){if(Mr(e))return rt(e,(r,n)=>{if(!Ho(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Fs(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?x(r):r.startsWith("-")?ye`-${x(r)}`:ye`--${x(r)}`;return{name:s,value:ye`var(${s}, ${x(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${X.name}' function.`)}function wi({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},ki=(e,t,r)=>{t.constructor.createProperty(r,e)};function qt(e){return(t,r)=>r!==void 0?ki(e,t,r):Ci(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mr;((mr=window.HTMLSlotElement)===null||mr===void 0?void 0:mr.prototype.assignedElements)!=null;const Nr=Symbol("this-is-an-element-vir-declarative-element"),nn=Symbol("key for ignoring inputs not having been set yet"),xi={[nn]:!0,allowPolymorphicState:!1};function na(e,t){const r=e.instanceState;re(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&re(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),oa(e)}function oa(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function aa(e,t){return Ei(e,t),e.element}function Ei(e,t){if(e.type!==nt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function B(e,t){return t?Dn(e,t):Dn(void 0,e)}const Dn=de(class extends he{constructor(e){super(e),this.element=aa(e,"assign")}render(e,t){return Si(e,this.element,t),I}});function Si(e,t,r){na(t,r)}function sa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ra?!0:sa(r)}function Hn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}let _i=class extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}};function on(){return e=>{var t;return t=class extends _i{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function ia(){return on()}function Ti(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=on()(r);return t[r]=n,t},{}):{}}const In="_is_element_vir_observable_property_handler_instance",jn="_is_element_vir_observable_property_handler_creator";function Mi(e){return ke(e,jn)&&e[jn]===!0}function Ai(e){return ke(e,In)&&e[In]===!0}function Pi(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Vn(e,t){const r=e;function n(s){t?Pi(s,e,e.tagName):qt()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function d(u){s[i]=u,r[i]=u}return Mi(l)&&(l=l.init()),Ai(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):d(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Ri(e){return e?rt(e,t=>t):{}}function Ni({hostClassNames:e,cssVars:t}){return{hostClasses:rt(e,(r,n)=>({name:x(n),selector:x(`:host(.${n})`)})),cssVars:t}}function Li({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&re(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Bi(e,t){function r(o){re(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var zi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function an(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...xi,...e.options},n=Ti(e.events),o=Ri(e.hostClasses);e.hostClasses&&Hn(e.tagName,e.hostClasses),e.cssVars&&Hn(e.tagName,e.cssVars);const a=e.cssVars?X(e.cssVars):{},s=typeof e.styles=="function"?e.styles(Ni({hostClassNames:o,cssVars:a})):e.styles||ye``,i=e.renderCallback,l=(t=class extends ra{createRenderParams(){return Bi(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){oa(this)}render(){try{sa(this)&&!this.haveInputsBeenSet&&!r[nn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${B.name}" directive on it. If no inputs are intended, use "${an.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(c);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Li({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=Do(c);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){na(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Vn(this,!1),this.instanceState=Vn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const c=e.stateInitStatic||{};re(c).forEach(u=>{qt()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},zi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[Nr]:{value:!0,writable:!1},name:{value:Vs(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function sn(){return e=>an({...e,options:{[nn]:!1,...e.options}})}function at(e,t){return Oi(e,t)}const Oi=de(class extends he{constructor(e){super(e),this.element=aa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),I}});function Jt(e,t,r){return Ko(e,()=>t,()=>r)}function Lr(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],a=(t??[""]).map((s,i)=>{const l=Di(s,n[i]);return`${s}${l}`});return Oo(a.join(""))}function Di(e,t){return t._$litType$!=null||t._$litDirective$!=null?Lr(t):Array.isArray(t)?t.map(n=>Lr(n)).join(""):e.endsWith("=")?`"${t}"`:t}function Hi(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),sn()(r(n))),defineElementNoInputs:n=>(t(n),an(r(n)))}}function Ii(e,t){return e.filter((r,n)=>!t.includes(n))}function la(e){return e.filter(t=>Kr(t,["tagName",Nr])&&!!t.tagName&&!!t[Nr])}const ca=new WeakMap;function ji(e,t){var o;const r=la(t);return(o=ua(ca,[e,...r]).value)==null?void 0:o.template}function Vi(e,t,r){const n=la(t);return ha(ca,[e,...n],r)}function ua(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=da(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ua(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function da(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function ha(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=da(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),ha(l,t,r,n+1)}function fa(e,t,r){return{name:e,check:t,transform:r}}const Fi=new WeakMap;function pa(e,t,r){const n=ji(e,t),o=n??r();if(!n){const s=Vi(e,t,o);if(s.result)Fi.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=Ii(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function ma(e,t,r,n){const o=[],a=[],s=[];return e.forEach((l,c)=>{var g;const d=o.length-1,u=o[d],h=c-1,p=t[h];let f;n&&n(l),typeof u=="string"&&(f=(g=r.find(v=>v.check(u,l,p)))==null?void 0:g.transform,f&&(o[d]=u+f(p)+l,s.push(h))),f||o.push(l);const m=e.raw[c];f?a[d]=a[d]+f(p)+m:a.push(m)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:s}}function ga(e){return ke(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Ui=[fa("tag name css selector interpolation",(e,t,r)=>ga(r),e=>e.tagName)];function Yi(e,t){return ma(e,t,Ui)}function ne(e,...t){const r=pa(e,t,()=>Yi(e,t));return ye(r.strings,...r.values)}const Wi=[fa("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=ga(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Gi(e){}function Xi(e){return ma(e.strings,e.values,Wi,Gi)}function y(e,...t){const r=Uo(e,...t),n=pa(e,t,()=>Xi(r));return{...r,strings:n.strings,values:n.values}}const ba=new Map;function va(e,t){var r;return(r=ba.get(e))==null?void 0:r.get(t)}function ya(e,t,r){Zs(ba,e,()=>new Map).set(t,r)}const Lt="isElementBookEntryTreeNode";function Zi(e,t){return!!(Kr(e,[Lt,"entry"])&&e[Lt]&&e.entry.entryType===t)}function $a(e){return{[Lt]:!0,entry:{entryType:q.Root,title:e||"Everything",parent:void 0},breadcrumb:"",children:{}}}function qi(e,t){return Ji(e,t)}function Ji(e,t){const r=va(e,"");if(r)return r;const n=$a(t);return e.forEach(o=>{if(o instanceof Error)throw o;const a=Qi(o,n),s=Ar(o.title);if(s in a.children)throw new Error(`Cannot create duplicate entry '${s}'${a.breadcrumb?` in parent '${a.breadcrumb}'.`:""}`);const i={[Lt]:!0,children:{},breadcrumb:s,entry:o};a.children[s]=i}),ya(e,"",n),n}function Qi(e,t){return Zt(e).reverse().reduce((o,a)=>{const s=o.children[a];if(!s)throw new Error(`Failed to find parent ElementBookEntry by name of '${a}' in entry '${o.entry.title}'`);return s},t)}function Br(e,t){if(!ti(e,1))return t;const r=e[0],n=t.children[r];if(n)return Br(e.slice(1),n)}function Fn({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}function Ki({entries:e,startTree:t,searchQuery:r}){const n=va(e,r);if(n)return n;const o=$a("Search Results");return wa(t,o,r),ya(e,r,o),o}function wa(e,t,r){if(e.entry.entryType!==q.Root&&Fn({searchIn:e.entry.title,searchQuery:r}))return t.children=e.children,!0;if("examples"in e.entry){const o=Ks(e.entry.examples,s=>Fn({searchIn:s,searchQuery:r})),a={...e.entry,examples:o};return t.entry=a,!!Object.values(a.examples).length}const n=Object.entries(e.children).map(([o,a])=>{const s={...a,children:{}};if(wa(a,s,r))return[o,s]}).filter(Ws);return n.length?(t.children=Object.fromEntries(n),!0):!1}const el=0;function tl(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==el)}class st extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Un extends st{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Je="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const rl=globalThis.history.pushState;function Yn(...e){const t=rl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Je)),t}const nl=globalThis.history.replaceState;function Wn(...e){const t=nl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Je)),t}function ol(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Yn)throw new Un("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Wn)throw new Un("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Yn,globalThis.history.replaceState=Wn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Je))})}}function al(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function sl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function il(e){const r=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?al(new URLSearchParams(globalThis.location.search)):void 0,a=globalThis.location.hash||void 0;return{paths:r,search:o,hash:a}}class ll extends st{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Ca(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Gn=6;function Xn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Gn)throw new ll(`Route sanitization depth has exceed the max of ${Gn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Ca(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class gr extends st{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function cl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new gr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new gr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new gr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function ul(e,t,r,n=!1){const o=ka(e,t,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function ka(e,t,r=""){var l;if(!r&&t!=null)throw new st("Route base regexp was defined but routeBase string was not provided.");const n=dl(t)?`/${r}`:"",o=e.search?sl(e.search).toString():"",a=o?`?${o}`:"",s=(l=e.hash)!=null&&l.startsWith("#")?"":"#",i=e.hash?`${s}${e.hash}`:"";return`${n}/${e.paths.join("/")}${a}${i}`}function dl(e){return!!(e&&globalThis.location.pathname.match(e))}function hl(e={}){var s;cl(e),ol();const t=(s=e.routeBase)==null?void 0:s.replace(/\/+$/,""),r=t?new RegExp(`^\\/${e.routeBase}`):void 0;let n=!1;const o=()=>Xn(a),a={listeners:new Set,initParams:e,sanitizeFullRoute:i=>{const l={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(l):l},setRoutes:(i,l=!1,c=!1)=>{const d=a.getCurrentRawRoutes(),u={...d,...i},h=a.sanitizeFullRoute(u);if(!(!c&&Ca(d,h)))return ul(h,r,t,l)},createRoutesUrl:i=>ka(i,r,t),getCurrentRawRoutes:()=>il(r),removeAllRouteListeners(){a.listeners.forEach(i=>a.removeRouteListener(i))},addRouteListener:(i,l)=>{if(e.maxListenerCount&&a.listeners.size>=e.maxListenerCount)throw new st(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return a.listeners.add(l),n||(globalThis.addEventListener(Je,o),n=!0),i&&Xn(a,l),l},hasRouteListener:i=>a.listeners.has(i),removeRouteListener:i=>{const l=a.listeners.delete(i);return a.listeners.size||(globalThis.removeEventListener(Je,o),n=!1),l},sanitizationDepth:0};return a}var R;(function(e){e.Search="search",e.Book="book"})(R||(R={}));function xa(e){return e[0]===R.Book?"":e[1]?decodeURIComponent(e[1]):""}const Qt={hash:void 0,paths:[R.Book],search:void 0};function fl(e){return hl({routeBase:e,routeSanitizer(t){return{paths:pl(t.paths),hash:void 0,search:void 0}}})}function pl(e){const t=e[0];if(Qs(t,R)){if(t===R.Book)return[R.Book,...e.slice(1)];if(t===R.Search)return e[1]?[t,e[1]]:[R.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Qt.paths}const $=X({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),ml={nav:{hover:{background:$["element-book-nav-hover-background-color"],foreground:$["element-book-nav-hover-foreground-color"]},active:{background:$["element-book-nav-active-background-color"],foreground:$["element-book-nav-active-foreground-color"]},selected:{background:$["element-book-nav-selected-background-color"],foreground:$["element-book-nav-selected-foreground-color"]}},accent:{icon:$["element-book-accent-icon-color"]},page:{background:$["element-book-page-background-color"],backgroundFaint1:$["element-book-page-background-faint-level-1-color"],backgroundFaint2:$["element-book-page-background-faint-level-2-color"],foreground:$["element-book-page-foreground-color"],foregroundFaint1:$["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:$["element-book-page-foreground-faint-level-2-color"]}};function gl(e,t){Ea(e,t,ml)}function zr(e){return ke(e,"_$cssResult$")}function Zn(e){return Kr(e,["name","value","default"])&&Ho(e.default,"string")&&zr(e.name)&&zr(e.value)}function Ea(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(zr(o)){if(!Zn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);wi({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Zn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ea(e,o,a)}})}function S(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function it(e){return ae(e)==="string"}function ae(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Bt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Sa(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function _a(e){return e[e.length-1]}function zt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ta(e,t,r){return(r-e)/(t-e)}function ln(e,t,r){return zt(t[0],t[1],Ta(e[0],e[1],r))}function Ma(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var bl=Object.freeze({__proto__:null,isString:it,type:ae,toPrecision:Bt,parseFunction:Sa,last:_a,interpolate:zt,interpolateInv:Ta,mapRange:ln,parseCoordGrammar:Ma,multiplyMatrices:S});class vl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ie=new vl;var J={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const W={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Or(e){return Array.isArray(e)?e:W[e]}function Ot(e,t,r,n={}){if(e=Or(e),t=Or(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ie.run("chromatic-adaptation-start",o),o.M||(o.W1===W.D65&&o.W2===W.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===W.D50&&o.W2===W.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ie.run("chromatic-adaptation-end",o),o.M)return S(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const yl=75e-6;var tt,Dr,Re,Gt,Aa;const Y=class{constructor(t){Ie(this,tt);Ie(this,Gt);Ie(this,Re,void 0);var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?Y.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=Or(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,ir(this,Re,mt(this,Gt,Aa).call(this).reverse()),ie.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=yl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=mt(this,tt,Dr).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=mt(this,tt,Dr).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),this===t)return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=xe(this,Re),o=xe(t,Re),a,s;for(let i=0;i<n.length&&n[i]===o[i];i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Y.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Y)return t;if(ae(t)==="string"){let o=Y.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Y.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ae(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=Y.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ae(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=Y.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===s||((l=d.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...d};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let b=Y;tt=new WeakSet,Dr=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=Ma(t.coords);let r=Object.entries(this.coords).map(([n,o],a)=>{let s=t.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=ln(i,l,a)),a=Bt(a,o),c&&(a+=c),a})}return t},Re=new WeakMap,Gt=new WeakSet,Aa=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},ar(b,"registry",{}),ar(b,"DEFAULT_FORMAT",{type:"functions",name:"color"});var V=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class z extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=V),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=S(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ot(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Ot(this.base.white,this.white,r),S(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Pa(e){var r,n,o,a,s;let t={str:(r=String(e))==null?void 0:r.trim()};if(ie.run("parse-start",t),t.color)return t.color;if(t.parsed=Sa(t.str),t.parsed){let i=t.parsed.name;if(i==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let u of b.all){let h=u.getFormat("color");if(h&&(l===h.id||(n=h.ids)!=null&&n.includes(l))){let p=Object.keys(u.coords).length,f=Array(p).fill(0);return f.forEach((m,g)=>f[g]=t.parsed.args[g]||0),{spaceId:u.id,coords:f,alpha:c}}}let d="";if(l in b.registry){let u=(s=(a=(o=b.registry[l].formats)==null?void 0:o.functions)==null?void 0:a.color)==null?void 0:s.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of b.all){let c=l.getFormat(i);if(c&&c.type==="function"){let d=1;(c.lastAlpha||_a(t.parsed.args).alpha)&&(d=t.parsed.args.pop());let u=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([h,p],f)=>{var U;let m=c.coordGrammar[f],g=(U=u[f])==null?void 0:U.type;if(m=m.find(O=>O==g),!m){let O=p.name||h;throw new TypeError(`${g} not allowed for ${O} in ${i}()`)}let v=m.range;g==="<percentage>"&&(v||(v=[0,1]));let L=p.range||p.refRange;v&&L&&(u[f]=ln(v,L,u[f]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let i of b.all)for(let l in i.formats){let c=i.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let d=c.parse(t.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function w(e){if(!e)throw new TypeError("Empty color reference");it(e)&&(e=Pa(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function lt(e,t){return t=b.get(t),t.from(e)}function F(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return lt(e,r)[n]}function Ra(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function le(e,t,r){if(e=w(e),arguments.length===2&&ae(arguments[1])==="object"){let n=arguments[1];for(let o in n)le(e,o,n[o])}else{typeof r=="function"&&(r=r(F(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=lt(e,n);a[o]=r,Ra(e,n,a)}return e}var cn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:V,fromBase:e=>Ot(V.white,"D50",e),toBase:e=>Ot("D50",V.white,e),formats:{color:{}}});const $l=216/24389,qn=24/116,gt=24389/27;let br=W.D50;var H=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:br,base:cn,fromBase(e){let r=e.map((n,o)=>n/br[o]).map(n=>n>$l?Math.cbrt(n):(gt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>qn?Math.pow(t[0],3):(116*t[0]-16)/gt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/gt,t[2]>qn?Math.pow(t[2],3):(116*t[2]-16)/gt].map((n,o)=>n*br[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Kt(e){return(e%360+360)%360}function wl(e,t){if(e==="raw")return t;let[r,n]=t.map(Kt),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Qe=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:H,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Kt(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Jn=25**7,Dt=Math.PI,Qn=180/Dt,Ee=Dt/180;function Hr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=H.from(e),l=Qe.from(H,[a,s,i])[1],[c,d,u]=H.from(t),h=Qe.from(H,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let f=((l+h)/2)**7,m=.5*(1-Math.sqrt(f/(f+Jn))),g=(1+m)*s,v=(1+m)*d,L=Math.sqrt(g**2+i**2),U=Math.sqrt(v**2+u**2),O=g===0&&i===0?0:Math.atan2(i,g),oe=v===0&&u===0?0:Math.atan2(u,v);O<0&&(O+=2*Dt),oe<0&&(oe+=2*Dt),O*=Qn,oe*=Qn;let ht=c-a,ft=U-L,Z=oe-O,Oe=O+oe,pn=Math.abs(Z),De;L*U===0?De=0:pn<=180?De=Z:Z>180?De=Z-360:Z<-180?De=Z+360:console.log("the unthinkable has happened");let mn=2*Math.sqrt(U*L)*Math.sin(De*Ee/2),Rs=(a+c)/2,or=(L+U)/2,gn=Math.pow(or,7),Q;L*U===0?Q=Oe:pn<=180?Q=Oe/2:Oe<360?Q=(Oe+360)/2:Q=(Oe-360)/2;let bn=(Rs-50)**2,Ns=1+.015*bn/Math.sqrt(20+bn),vn=1+.045*or,He=1;He-=.17*Math.cos((Q-30)*Ee),He+=.24*Math.cos(2*Q*Ee),He+=.32*Math.cos((3*Q+6)*Ee),He-=.2*Math.cos((4*Q-63)*Ee);let yn=1+.015*or*He,Ls=30*Math.exp(-1*((Q-275)/25)**2),Bs=2*Math.sqrt(gn/(gn+Jn)),zs=-1*Math.sin(2*Ls*Ee)*Bs,pt=(ht/(r*Ns))**2;return pt+=(ft/(n*vn))**2,pt+=(mn/(o*yn))**2,pt+=zs*(ft/(n*vn))*(mn/(o*yn)),Math.sqrt(pt)}const Cl=75e-6;function Ye(e,t=e.space,{epsilon:r=Cl}={}){e=w(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Ke(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ce(e,{method:t=J.gamut_mapping,space:r=e.space}={}){if(it(arguments[1])&&(r=arguments[1]),r=b.get(r),Ye(e,r,{epsilon:0}))return e;let n=j(e,r);if(t!=="clip"&&!Ye(e,r)){let o=ce(Ke(n),{method:"clip",space:r});if(Hr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=j(n,s),d=(a.range||a.refRange)[0],u=.01,h=d,p=F(l,i);for(;p-h>u;){let f=Ke(l);f=ce(f,{space:r,method:"clip"}),Hr(l,f)-2<u?h=F(l,i):p=F(l,i),le(l,i,(h+p)/2)}n=j(l,r)}else n=o}if(t==="clip"||!Ye(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=j(n,e.space)),e.coords=n.coords,e}ce.returns="color";function j(e,t,{inGamut:r}={}){e=w(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ce(o)),o}j.returns="color";function Ht(e,{precision:t=J.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=w(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Ye(e)&&(i=ce(Ke(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(p=>Bt(p,t)));let d=[...i];if(c==="color"){let p=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(p)}let u=e.alpha;t!==null&&(u=Bt(u,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";a=`${c}(${d.join(r.commas?", ":" ")}${h})`}return a}const kl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],xl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var er=new z({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:kl,fromXYZ_M:xl,formats:{color:{}}});const bt=1.09929682680944,Kn=.018053968510807;var Na=new z({id:"rec2020",name:"REC.2020",base:er,toBase(e){return e.map(function(t){return t<Kn*4.5?t/4.5:Math.pow((t+bt-1)/bt,1/.45)})},fromBase(e){return e.map(function(t){return t>=Kn?bt*Math.pow(t,.45)-(bt-1):4.5*t})},formats:{color:{}}});const El=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Sl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var La=new z({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:El,fromXYZ_M:Sl});const _l=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Tl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ba=new z({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:_l,fromXYZ_M:Tl,formats:{color:{}}}),eo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let to=Array(3).fill("<percentage> | <number>[0, 255]"),ro=Array(3).fill("<number>[0, 255]");var et=new z({id:"srgb",name:"sRGB",base:Ba,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:to},rgb_number:{name:"rgb",commas:!0,coords:ro,noAlpha:!0},color:{},rgba:{coords:to,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ro},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=eo.black,t.alpha=0):t.coords=eo[e],t.coords)return t}}}}),za=new z({id:"p3",name:"P3",base:La,fromBase:et.fromBase,toBase:et.toBase,formats:{color:{id:"display-p3"}}});J.display_space=et;if(typeof CSS<"u"&&CSS.supports)for(let e of[H,Na,za]){let t=e.getMinCoords(),n=Ht({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){J.display_space=e;break}}function Ml(e,{space:t=J.display_space,...r}={}){let n=Ht(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!J.display_space)n=new String(n),n.color=e;else{let o=j(e,t);n=new String(Ht(o,r)),n.color=o}return n}function Oa(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Al(e,t){return e=w(e),t=w(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ue(e){return F(e,[V,"y"])}function Da(e,t){le(e,[V,"y"],t)}function Pl(e){Object.defineProperty(e.prototype,"luminance",{get(){return ue(this)},set(t){Da(this,t)}})}var Rl=Object.freeze({__proto__:null,getLuminance:ue,setLuminance:Da,register:Pl});function Nl(e,t){e=w(e),t=w(t);let r=Math.max(ue(e),0),n=Math.max(ue(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Ll=.56,Bl=.57,zl=.62,Ol=.65,no=.022,Dl=1.414,Hl=.1,Il=5e-4,jl=1.14,oo=.027,Vl=1.14;function ao(e){return e>=no?e:e+(no-e)**Dl}function Se(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Fl(e,t){t=w(t),e=w(e);let r,n,o,a,s,i;t=j(t,"srgb"),[a,s,i]=t.coords;let l=Se(a)*.2126729+Se(s)*.7151522+Se(i)*.072175;e=j(e,"srgb"),[a,s,i]=e.coords;let c=Se(a)*.2126729+Se(s)*.7151522+Se(i)*.072175,d=ao(l),u=ao(c),h=u>d;return Math.abs(u-d)<Il?n=0:h?(r=u**Ll-d**Bl,n=r*jl):(r=u**Ol-d**zl,n=r*Vl),Math.abs(n)<Hl?o=0:n>0?o=n-oo:o=n+oo,o*100}function Ul(e,t){e=w(e),t=w(t);let r=Math.max(ue(e),0),n=Math.max(ue(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Yl=5e4;function Wl(e,t){e=w(e),t=w(t);let r=Math.max(ue(e),0),n=Math.max(ue(t),0);return n>r&&([r,n]=[n,r]),n===0?Yl:(r-n)/n}function Gl(e,t){e=w(e),t=w(t);let r=F(e,[H,"l"]),n=F(t,[H,"l"]);return Math.abs(r-n)}const Xl=216/24389,so=24/116,vt=24389/27;let vr=W.D65;var Ir=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:vr,base:V,fromBase(e){let r=e.map((n,o)=>n/vr[o]).map(n=>n>Xl?Math.cbrt(n):(vt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>so?Math.pow(t[0],3):(116*t[0]-16)/vt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/vt,t[2]>so?Math.pow(t[2],3):(116*t[2]-16)/vt].map((n,o)=>n*vr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const yr=Math.pow(5,.5)*.5+.5;function Zl(e,t){e=w(e),t=w(t);let r=F(e,[Ir,"l"]),n=F(t,[Ir,"l"]),o=Math.abs(Math.pow(r,yr)-Math.pow(n,yr)),a=Math.pow(o,1/yr)*Math.SQRT2-40;return a<7.5?0:a}var Mt=Object.freeze({__proto__:null,contrastWCAG21:Nl,contrastAPCA:Fl,contrastMichelson:Ul,contrastWeber:Wl,contrastLstar:Gl,contrastDeltaPhi:Zl});function ql(e,t,r={}){it(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Mt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=w(e),t=w(t);for(let a in Mt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Mt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ha(e){let[t,r,n]=lt(e,V),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ia(e){let[t,r,n]=lt(e,V),o=t+r+n;return[t/o,r/o]}function Jl(e){Object.defineProperty(e.prototype,"uv",{get(){return Ha(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ia(this)}})}var Ql=Object.freeze({__proto__:null,uv:Ha,xy:Ia,register:Jl});function Kl(e,t){return Oa(e,t,"lab")}const ec=Math.PI,io=ec/180;function tc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=H.from(e),[,i,l]=Qe.from(H,[o,a,s]),[c,d,u]=H.from(t),h=Qe.from(H,[c,d,u])[1];i<0&&(i=0),h<0&&(h=0);let p=o-c,f=i-h,m=a-d,g=s-u,v=m**2+g**2-f**2,L=.511;o>=16&&(L=.040975*o/(1+.01765*o));let U=.0638*i/(1+.0131*i)+.638,O;Number.isNaN(l)&&(l=0),l>=164&&l<=345?O=.56+Math.abs(.2*Math.cos((l+168)*io)):O=.36+Math.abs(.4*Math.cos((l+35)*io));let oe=Math.pow(i,4),ht=Math.sqrt(oe/(oe+1900)),ft=U*(ht*O+1-ht),Z=(p/(r*L))**2;return Z+=(f/(n*U))**2,Z+=v/ft**2,Math.sqrt(Z)}const lo=203;var un=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:V,fromBase(e){return e.map(t=>Math.max(t*lo,0))},toBase(e){return e.map(t=>Math.max(t/lo,0))}});const yt=1.15,$t=.66,co=2610/2**14,rc=2**14/2610,uo=3424/2**12,ho=2413/2**7,fo=2392/2**7,nc=1.7*2523/2**5,po=2**5/(1.7*2523),wt=-.56,$r=16295499532821565e-27,oc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ac=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],sc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],ic=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ja=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:un,fromBase(e){let[t,r,n]=e,o=yt*t-(yt-1)*n,a=$t*r-($t-1)*t,i=S(oc,[o,a,n]).map(function(h){let p=uo+ho*(h/1e4)**co,f=1+fo*(h/1e4)**co;return(p/f)**nc}),[l,c,d]=S(sc,i);return[(1+wt)*l/(1+wt*l)-$r,c,d]},toBase(e){let[t,r,n]=e,o=(t+$r)/(1+wt-wt*(t+$r)),s=S(ic,[o,r,n]).map(function(h){let p=uo-h**po,f=fo*h**po-ho;return 1e4*(p/f)**rc}),[i,l,c]=S(ac,s),d=(i+(yt-1)*c)/yt,u=(l+($t-1)*d)/$t;return[d,u,c]},formats:{color:{}}}),jr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ja,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Kt(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function lc(e,t){let[r,n,o]=jr.from(e),[a,s,i]=jr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let d=o-i,u=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const Va=3424/4096,Fa=2413/128,Ua=2392/128,mo=2610/16384,cc=2523/32,uc=16384/2610,go=32/2523,dc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],hc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],fc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],pc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Vr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:un,fromBase(e){let t=S(dc,e);return mc(t)},toBase(e){let t=gc(e);return S(pc,t)},formats:{color:{}}});function mc(e){let t=e.map(function(r){let n=Va+Fa*(r/1e4)**mo,o=1+Ua*(r/1e4)**mo;return(n/o)**cc});return S(hc,t)}function gc(e){return S(fc,e).map(function(n){let o=Math.max(n**go-Va,0),a=Fa-Ua*n**go;return 1e4*(o/a)**uc})}function bc(e,t){let[r,n,o]=Vr.from(e),[a,s,i]=Vr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const vc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],yc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],$c=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],wc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var It=new b({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:V,fromBase(e){let r=S(vc,e).map(n=>Math.cbrt(n));return S($c,r)},toBase(e){let r=S(wc,e).map(n=>n**3);return S(yc,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Cc(e,t){let[r,n,o]=It.from(e),[a,s,i]=It.from(t),l=r-a,c=n-s,d=o-i;return Math.sqrt(l**2+c**2+d**2)}var Fr=Object.freeze({__proto__:null,deltaE76:Kl,deltaECMC:tc,deltaE2000:Hr,deltaEJz:lc,deltaEITP:bc,deltaEOK:Cc});function Fe(e,t,r={}){it(r)&&(r={method:r});let{method:n=J.deltaE,...o}=r;e=w(e),t=w(t);for(let a in Fr)if("deltae"+n.toLowerCase()===a.toLowerCase())return Fr[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function kc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return le(e,n,o=>o*(1+t))}function xc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return le(e,n,o=>o*(1-t))}var Ec=Object.freeze({__proto__:null,lighten:kc,darken:xc});function Ya(e,t,r=.5,n={}){[e,t]=[w(e),w(t)],ae(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return ct(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function Wa(e,t,r={}){let n;dn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[w(e),w(t)],n=ct(e,t,l));let c=Fe(e,t),d=o>0?Math.max(s,Math.ceil(c/o)+1):s,u=[];if(i!==void 0&&(d=Math.min(d,i)),d===1)u=[{p:.5,color:n(.5)}];else{let h=1/(d-1);u=Array.from({length:d},(p,f)=>{let m=f*h;return{p:m,color:n(m)}})}if(o>0){let h=u.reduce((p,f,m)=>{if(m===0)return 0;let g=Fe(f.color,u[m-1].color,a);return Math.max(p,g)},0);for(;h>o;){h=0;for(let p=1;p<u.length&&u.length<i;p++){let f=u[p-1],m=u[p],g=(m.p+f.p)/2,v=n(g);h=Math.max(h,Fe(v,f.color),Fe(v,m.color)),u.splice(p,0,{p:g,color:n(g)}),p++}}}return u=u.map(h=>h.color),u}function ct(e,t,r={}){if(dn(e)){let[l,c]=[e,t];return ct(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=w(e),t=w(t),e=Ke(e),t=Ke(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[J.interpolationSpace]||e.space,o=o?b.get(o):n,e=j(e,n),t=j(t,n),e=ce(e),t=ce(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[F(e,c),F(t,c)];[d,u]=wl(l,[d,u]),le(e,c,d),le(t,c,u)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((h,p)=>{let f=t.coords[p];return zt(h,f,l)}),d=zt(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return s&&(u.coords=u.coords.map(h=>h/d)),o!==n&&(u=j(u,o)),u},{rangeArgs:i})}function dn(e){return ae(e)==="function"&&!!e.rangeArgs}J.interpolationSpace="lab";function Sc(e){e.defineFunction("mix",Ya,{returns:"color"}),e.defineFunction("range",ct,{returns:"function<color>"}),e.defineFunction("steps",Wa,{returns:"array<color>"})}var _c=Object.freeze({__proto__:null,mix:Ya,steps:Wa,range:ct,isRange:dn,register:Sc}),Ga=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:et,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Xa=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ga,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Tc=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Xa,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Mc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Ac=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Za=new z({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Mc,fromXYZ_M:Ac}),Pc=new z({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Za,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Rc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Nc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var qa=new z({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:cn,toXYZ_M:Rc,fromXYZ_M:Nc});const Lc=1/512,Bc=16/512;var zc=new z({id:"prophoto",name:"ProPhoto",base:qa,toBase(e){return e.map(t=>t<Bc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Lc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Oc=new b({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:It,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Kt(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const bo=203,vo=2610/2**14,Dc=2**14/2610,Hc=2523/2**5,yo=2**5/2523,$o=3424/2**12,wo=2413/2**7,Co=2392/2**7;var Ic=new z({id:"rec2100pq",name:"REC.2100-PQ",base:er,toBase(e){return e.map(function(t){return(Math.max(t**yo-$o,0)/(wo-Co*t**yo))**Dc*1e4/bo})},fromBase(e){return e.map(function(t){let r=Math.max(t*bo/1e4,0),n=$o+wo*r**vo,o=1+Co*r**vo;return(n/o)**Hc})},formats:{color:{id:"rec2100-pq"}}});const ko=.17883277,xo=.28466892,Eo=.55991073,wr=3.7743;var jc=new z({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:er,toBase(e){return e.map(function(t){return t<=.5?t**2/3*wr:Math.exp((t-Eo)/ko+xo)/12*wr})},fromBase(e){return e.map(function(t){return t/=wr,t<=1/12?Math.sqrt(3*t):ko*Math.log(12*t-xo)+Eo})},formats:{color:{id:"rec2100-hlg"}}});const Ja={};ie.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Qa(e.W1,e.W2,e.options.method))});ie.add("chromatic-adaptation-end",e=>{e.M||(e.M=Qa(e.W1,e.W2,e.options.method))});function tr({id:e,toCone_M:t,fromCone_M:r}){Ja[e]=arguments[0]}function Qa(e,t,r="Bradford"){let n=Ja[r],[o,a,s]=S(n.toCone_M,e),[i,l,c]=S(n.toCone_M,t),d=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],u=S(d,n.toCone_M);return S(n.fromCone_M,u)}tr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});tr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});tr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});tr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(W,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});W.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Vc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Fc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ka=new z({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:W.ACES,toXYZ_M:Vc,fromXYZ_M:Fc,formats:{color:{}}});const Ct=2**-16,Cr=-.35828683,kt=(Math.log2(65504)+9.72)/17.52;var Uc=new z({id:"acescc",name:"ACEScc",coords:{r:{range:[Cr,kt],name:"Red"},g:{range:[Cr,kt],name:"Green"},b:{range:[Cr,kt],name:"Blue"}},referred:"scene",base:Ka,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Ct)*2:r<kt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ct)+9.72)/17.52:t<Ct?(Math.log2(Ct+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),So=Object.freeze({__proto__:null,XYZ_D65:V,XYZ_D50:cn,XYZ_ABS_D65:un,Lab_D65:Ir,Lab:H,LCH:Qe,sRGB_Linear:Ba,sRGB:et,HSL:Ga,HWB:Tc,HSV:Xa,P3_Linear:La,P3:za,A98RGB_Linear:Za,A98RGB:Pc,ProPhoto_Linear:qa,ProPhoto:zc,REC_2020_Linear:er,REC_2020:Na,OKLab:It,OKLCH:Oc,Jzazbz:ja,JzCzHz:jr,ICTCP:Vr,REC_2100_PQ:Ic,REC_2100_HLG:jc,ACEScg:Ka,ACEScc:Uc}),ve;const M=class{constructor(...t){Ie(this,ve,void 0);let r;t.length===1&&(r=w(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,ir(this,ve,b.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in xe(this,ve).coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get space(){return xe(this,ve)}get spaceId(){return xe(this,ve).id}clone(){return new M(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Ml(this,...t);return r.color=new M(r.color),r}static get(t,...r){return t instanceof M?t:new M(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=M.get(l);else if(a==="function<color>"){let c=l;l=function(...d){let u=c(...d);return M.get(u)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>M.get(c)));return l};t in M||(M[t]=s),o&&(M.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)M.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(M);else for(let r in t)M.defineFunction(r,t[r])}};let k=M;ve=new WeakMap;k.defineFunctions({get:F,getAll:lt,set:le,setAll:Ra,to:j,equals:Al,inGamut:Ye,toGamut:ce,distance:Oa,toString:Ht});Object.assign(k,{util:bl,hooks:ie,WHITES:W,Space:b,spaces:b.registry,parse:Pa,defaults:J});for(let e of Object.keys(So))b.register(So[e]);for(let e in b.registry)Ur(e,b.registry[e]);ie.add("colorspace-init-end",e=>{var t;Ur(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ur(r,e)})});function Ur(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(k.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}k.extend(Fr);k.extend({deltaE:Fe});k.extend(Ec);k.extend({contrast:ql});k.extend(Ql);k.extend(Rl);k.extend(_c);k.extend(Mt);function es(e){return rt(e,(t,r)=>r instanceof k?x(r.toString({format:"hex"})):es(r))}const Yc="dodgerblue";function Yr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function kr({background:e,foreground:t}){return{background:e??new k(Yr(t)),foreground:t??new k(Yr(e))}}var jt;(function(e){e.Dark="dark",e.Light="light"})(jt||(jt={}));function Wc(e){return e==="black"?"white":"black"}const Gc={black:{foregroundFaint1:new k("#ccc"),foregroundFaint2:new k("#eee")},white:{foregroundFaint1:new k("#ccc"),foregroundFaint2:new k("#eee")}},Xc={black:{backgroundFaint1:new k("#666"),backgroundFaint2:new k("#444")},white:{backgroundFaint1:new k("#ccc"),backgroundFaint2:new k("#fafafa")}};function _o({themeColor:e=Yc,themeStyle:t=jt.Light}={}){const r=new k(e),n=new k(t===jt.Dark?"black":"white"),o=Yr(n),a=new k(o),s={nav:{hover:kr({background:r.clone().set({"hsl.l":93})}),active:kr({background:r.clone().set({"hsl.l":90})}),selected:kr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Xc[Wc(o)],foreground:a,...Gc[o]}};return es(s)}const Vt=on()("element-book-change-route"),Wr=X({"vir-icon-color":"currentColor"}),Zc=X({"vir-icon-stroke-color":Wr["vir-icon-color"].value,"vir-icon-fill-color":Wr["vir-icon-color"].value}),xr={...Wr,...Zc};function ts({name:e,svgTemplate:t}){return{name:e,templateString:typeof t=="string"?t:Lr(t)}}const se=sn()({tagName:"vir-icon",hostClasses:{"vir-icon-fit-icon":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>ne`
        :host {
            display: block;
            color: ${xr["vir-icon-color"].value};
            fill: ${xr["vir-icon-fill-color"].value};
            stroke: ${xr["vir-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vir-icon-fit-icon"].name} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e})=>e.icon?pi(e.icon.templateString):""}),qc=ts({name:"Element16Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            stroke-width="1px"
        >
            <path d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6" />
        </svg>
    `}),{defineElement:fe,defineElementNoInputs:sd}=Hi(),A=fe()({tagName:"element-book-route-link",cssVars:{"element-book-route-link-anchor-padding":""},styles:({cssVars:e})=>ne`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["element-book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return y`
            <a
                href=${r}
                ${at("click",a=>{(!e.router||tl(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Vt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),xt=fe()({tagName:"element-book-nav",styles:ne`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${$["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${$["element-book-nav-hover-background-color"].value};
            color: ${$["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${$["element-book-nav-active-background-color"].value};
            color: ${$["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${A.cssVars["element-book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * var(--indent, 0)) + 8px);
        }

        ${A} {
            font-size: 20px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${$["element-book-nav-selected-background-color"].value};
            color: ${$["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-flex;
            gap: 8px;
            align-items: center;
            font-size: 0.75em;
        }

        ${se} {
            display: inline-flex;
            color: ${$["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=rs({indent:0,entryTreeNode:e.tree,rootPath:[],router:e.router,selectedPath:e.selectedPath.slice(1)});return y`
            <ul>
                ${t}
            </ul>
        `}});function rs({indent:e,entryTreeNode:t,rootPath:r,selectedPath:n,router:o}){const a=t.breadcrumb?r.concat(t.breadcrumb):r,s=t.entry.entryType===q.Page,i=Object.values(t.children).map(l=>rs({indent:e+1,entryTreeNode:l,rootPath:a,selectedPath:n,router:o}));return y`
        <div class="nav-tree-entry" style="--indent: ${e};">
            <slot name=${te.NavHeader}></slot>
            <li class=${t.entry.entryType}>
                <${A}
                    ${B(A,{router:o,route:{paths:[R.Book,...a]}})}
                    class=${Jo({"title-row":!0,selected:Ue(n,a)})}
                >
                    <div class="title-text">
                        ${Jt(s,y`
                                <${se} ${B(se,{icon:qc})}></${se}>
                            `)}
                        ${t.entry.title}
                    </div>
                </${A}>
            </li>
            ${i}
        </div>
    `}const Jc=ts({name:"Element24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
            stroke-width="1px"
        >
            <path d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),Er=fe()({tagName:"element-book-breadcrumbs",styles:ne`
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
                <${A}
                    ${B(A,{route:{hash:void 0,search:void 0,paths:[R.Book,...s]},router:e.router})}
                >
                    ${r}
                </${A}>
                ${i}
            `}):y`
                &nbsp;
            `}}),Ft=Symbol("unset-internal-state");y`
    &nbsp;
`;const Et=fe()({tagName:"element-book-example-controls",styles:ne`
        :host {
            display: flex;
            color: ${$["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){return y`
            <span>
                ${e.example.title}
                <span></span>
            </span>
        `}}),Sr=fe()({tagName:"element-book-example-viewer",stateInitStatic:{isUnset:Ft},renderCallback({state:e,inputs:t,updateState:r}){if(!t.example.renderCallback||typeof t.example.renderCallback=="string")throw new Error(`Failed to render example '${t.example.title}': renderCallback is not a function`);e.isUnset===Ft&&r({isUnset:void 0,...t.example.stateInitStatic});try{const n=t.example.renderCallback({state:e,updateState:r,controls:t.currentPageControls});return y`
                ${Jt(!!t.example.styles,y`
                        <style>
                            ${t.example.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),`${t.breadcrumbs.join(" > ")} failed: ${Xt(n)}`}},options:{allowPolymorphicState:!0}}),St=fe()({tagName:"element-book-page-controls",events:{controlValueChange:ia()},styles:ne`
        :host {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .control-wrapper {
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).map(([n,o])=>{const a=Qc(e.currentValues[n],o.controlType,s=>{t(new r.controlValueChange({name:n,value:s}))});return y`
                    <label class="control-wrapper">
                        <span>${n}</span>
                        ${a}
                    </label>
                `})}});function Qc(e,t,r){return t===P.Text?y`
            <input
                type="text"
                .value=${e||""}
                ${at("input",n=>{const o=n.currentTarget;if(!(o instanceof HTMLInputElement))throw new Error("Din't get an input element from the event target.");r(o.value)})}
            />
        `:y`
            <p class="error">${t} controls are not implemented yet.</p>
        `}const _r=fe()({tagName:"element-book-page-examples",styles:ne`
        :host {
            display: flex;
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

        .individual-example-wrapper:hover ${Et} {
            color: ${$["element-book-accent-icon-color"].value};
        }
    `,stateInitStatic:{unset:Ft},renderCallback({inputs:e,state:t,updateState:r}){if(t.unset===Ft){const a=rt(e.page.controls,(s,i)=>i.initValue);r({unset:void 0,...a})}const n=e.page.examples,o=Qo(Object.values(n),a=>e.parentBreadcrumbs.concat(a instanceof Error?a.message:a.title).join(">"),a=>{if(a instanceof Error)return y`
                        <p class="error">${a.message}</p>
                    `;const s=e.parentBreadcrumbs.concat(a.title);return y`
                    <div class="individual-example-wrapper">
                        <${Et}
                            ${B(Et,{example:a})}
                        ></${Et}>
                        <${Sr}
                            ${B(Sr,{example:a,breadcrumbs:s,currentPageControls:t})}
                        ></${Sr}>
                    </div>
                `});return y`
            ${Jt(!!Object.keys(e.page.controls).length,y`
                    <${St}
                        ${B(St,{config:e.page.controls,currentValues:t})}
                        ${at(St.events.controlValueChange,a=>{r({[a.detail.name]:a.detail.value})})}
                    ></${St}>
                `)}
            <section class="examples-wrapper">${o}</section>
        `},options:{allowPolymorphicState:!0}}),_e=fe()({tagName:"element-book-entry-display",styles:ne`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${$["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${$["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }

        .all-examples-wrapper {
            flex-grow: 1;
            box-sizing: border-box;
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        h1,
        h2,
        h3 {
            margin: 0;
            padding: 0;
        }

        h2,
        h3 {
            font-size: 1.5em;
        }

        ${A} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${se} {
            color: ${$["element-book-accent-icon-color"].value};
        }

        .page-examples .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }

        .description {
            color: ${$["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        .description:hover {
            color: ${$["element-book-page-foreground-color"].value};
        }

        .description p {
            margin: 0;
            padding: 0;
        }

        .description p:first-child {
            margin-top: 8px;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{const r=os(e.currentNode),n=xa(e.currentRoute.paths),o=Zt(e.currentNode.entry,!1).reverse(),a=ns({nestedPages:r,parentBreadcrumbs:o,isTopLevel:!0,router:e.router,isSearching:!!n});return y`
            <div class="title-bar">
                ${Jt(!!n,y`
                        &nbsp;
                    `,y`
                        <${Er}
                            ${B(Er,{currentRoute:e.currentRoute,router:e.router})}
                        ></${Er}>
                    `)}
                <input
                    placeholder="search"
                    .value=${n}
                    ${at("input",async s=>{const i=s.currentTarget;if(!(i instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const l=i.value;await ei(500),i.value===l&&(i.value?t(new Vt({paths:[R.Search,encodeURIComponent(i.value)]})):t(new Vt(Qt)))})}
                />
            </div>
            <div class="all-examples-wrapper">${a}</div>
            <slot name=${te.Footer}></slot>
        `}});function ns({nestedPages:e,parentBreadcrumbs:t,isTopLevel:r,router:n,isSearching:o}){return!e.length&&o?[y`
                No results
            `]:Qo(e,a=>a.breadcrumb,a=>{if(Zi(a,q.Page)){const s=a.entry;if(!ni(s,q.Page))throw new Error("nested entry should be a page");const i=y`
                    <${se} ${B(se,{icon:Jc})}></${se}>
                    ${s.title}
                `,l=r?y`
                          <h2 class="header-with-icon">${i}</h2>
                      `:y`
                          <h3 class="header-with-icon">${i}</h3>
                      `,c=[R.Book,...t.concat(a.breadcrumb)];return y`
                    <div class="page-examples">
                        <div class="title-group">
                            <${A}
                                ${B(A,{route:{paths:c,hash:void 0,search:void 0},router:n})}
                            >
                                ${l}
                            </${A}>
                            ${To(s)}
                        </div>
                        <${_r}
                            ${B(_r,{page:s,parentBreadcrumbs:t})}
                        ></${_r}>
                    </div>
                `}else{const s=Object.entries(a).map(([i,l])=>{const c=r?y`
                                  <h1>${i}</h1>
                              `:y`
                                  <h2>${i}</h2>
                              `,d=[R.Book,...t.concat(l.node.breadcrumb)];return y`
                            <div class="title-group">
                                <${A}
                                    ${B(A,{route:{paths:d,hash:void 0,search:void 0},router:n})}
                                >
                                    ${c}
                                </${A}>
                                ${To(l.node.entry)}
                            </div>
                            ${ns({nestedPages:l.nested,parentBreadcrumbs:l.node.breadcrumb?t.concat(l.node.breadcrumb):t,isTopLevel:!1,router:n,isSearching:o})}
                        `});return y`
                    ${s}
                `}})}function To(e){const t=(e.descriptionParagraphs??[]).map(r=>y`
            <p>${r}</p>
        `);return y`
        <div class="description">${t}</div>
    `}function os(e){return e.entry.entryType===q.Page?[e]:[{[e.entry.title]:{node:e,nested:Object.values(e.children).map(os).flat()}}]}function Kc(e,t,r){if(t[0]===R.Search)return e;Br(t.slice(1),e)||r(Qt);const o=Br(t.slice(1),e);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}const _t=sn()({tagName:"element-book-app",events:{pathUpdate:ia()},stateInitStatic:{currentRoute:Qt,router:void 0,colors:{config:void 0,theme:_o(void 0)}},styles:ne`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${$["element-book-page-background-color"].value};
            color: ${$["element-book-page-foreground-color"].value};
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

        ${_e} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${xt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c;try{let d=function(g){e.router?e.router.setRoutes(g):n({currentRoute:{...e.currentRoute,...g}}),t.elementBookRoutePaths&&!Ue(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(g.paths??[]))};var s=d;if(t.elementBookRoutePaths&&!Ue(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const g=fl(t.internalRouterConfig.basePath);n({router:g}),g.addRouteListener(!0,v=>{n({currentRoute:v})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const u={themeColor:t.themeColor};if(!Ue(u,(c=e.colors)==null?void 0:c.config)){const g=_o(u);n({colors:{config:u,theme:g}}),gl(r,g)}const h=qi(t.entries,t.everythingTitle),p=xa(e.currentRoute.paths),f=p?Ki({entries:t.entries,searchQuery:p,startTree:h}):h,m=Kc(f,e.currentRoute.paths,d);return y`
                <div
                    class="root"
                    ${at(Vt,g=>{const v=r.shadowRoot.querySelector(_e.tagName);v?v.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${_e.tagName}' for scrolling.`),d(g.detail)})}
                >
                    <${xt}
                        ${B(xt,{tree:h,router:e.router,selectedPath:e.currentRoute.paths})}
                    >
                        <slot
                            name=${te.NavHeader}
                            slot=${te.NavHeader}
                        ></slot>
                    </${xt}>
                    <${_e}
                        ${B(_e,{currentRoute:e.currentRoute,currentNode:m,router:e.router})}
                    >
                        <slot
                            name=${te.Footer}
                            slot=${te.Footer}
                        ></slot>
                    </${_e}>
                </div>
            `}catch(d){return console.error(d),y`
                <p class="error">${Xt(d)}</p>
            `}}});var eu=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(v){if(v!==void 0&&typeof v!="function")throw new TypeError("Function expected");return v}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,p=r.length-1;p>=0;p--){var f={};for(var m in n)f[m]=m==="access"?{}:n[m];for(var m in n.access)f.access[m]=n.access[m];f.addInitializer=function(v){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(v||null))};var g=(0,r[p])(i==="accessor"?{get:d.get,set:d.set}:d[l],f);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(u=s(g.get))&&(d.get=u),(u=s(g.set))&&(d.set=u),(u=s(g.init))&&o.push(u)}else(u=s(g))&&(i==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},tu=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},ru=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function nu(){function e(t,r){return t}return e}let as=(()=>{let e=[nu()],t,r=[],n;return n=class extends Ae{},ru(n,"DeclarativeElement"),eu(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,tu(n,r),n})();const ou={capitalizeFirstLetter:!1};function au(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function su(e,t){return t.capitalizeFirstLetter?au(e):e}function iu(e,t=ou){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return su(n,t)}function lu(e){return e?e instanceof Error?e.message:ut(e,"message")?String(e.message):String(e):""}function cu(e){return e instanceof Error?e:new Error(lu(e))}const uu=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ut(e,t){return e?uu.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function du(e,t){return e&&t.every(r=>ut(e,r))}function Ce(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ss(e,t){let r=!1;const n=Ce(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Ce(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}const Gr=Symbol("this-is-an-element-vir-declarative-element"),hn=Symbol("key for ignoring inputs not having been set yet"),hu={[hn]:!0,allowPolymorphicState:!1};function is(e,t){const r=e.instanceState;Ce(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Ce(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),ls(e)}function ls(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function cs(e,t){return Xr(e,t),e.element}function fu(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Xr(e,t){const r=fu(e),n=r?`: found in ${r}`:"";if(e.type!==nt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function G(e,t){return t?Mo(e,t):Mo(void 0,e)}const Mo=de(class extends he{constructor(e){super(e),this.element=cs(e,"assign")}render(e,t){return pu(e,this.element,t),I}});function pu(e,t,r){is(t,r)}function us(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof as?!0:us(r)}function Ao(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class mu extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function ds(){return e=>{var t;return t=class extends mu{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Zr(){return ds()}function gu(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=ds()(r);return t[r]=n,t},{}):{}}const Po="_is_element_vir_observable_property_handler_instance",Ro="_is_element_vir_observable_property_handler_creator";function bu(e){return ut(e,Ro)&&e[Ro]===!0}function vu(e){return ut(e,Po)&&e[Po]===!0}function yu(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function No(e,t){const r=e;function n(s){t?yu(s,e,e.tagName):qt()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function d(u){s[i]=u,r[i]=u}return bu(l)&&(l=l.init()),vu(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):d(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function $u(e){return e?ss(e,t=>t):{}}function wu({hostClassNames:e,cssVars:t}){return{hostClasses:ss(e,(r,n)=>({name:x(n),selector:x(`:host(.${n})`)})),cssVars:t}}function Cu({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Ce(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function ku(e,t){function r(o){Ce(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var xu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function rr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...hu,...e.options},n=gu(e.events),o=$u(e.hostClasses);e.hostClasses&&Ao(e.tagName,e.hostClasses),e.cssVars&&Ao(e.tagName,e.cssVars);const a=e.cssVars?X(e.cssVars):{},s=typeof e.styles=="function"?e.styles(wu({hostClassNames:o,cssVars:a})):e.styles||ye``,i=e.renderCallback,l=(t=class extends as{createRenderParams(){return ku(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){ls(this)}render(){try{us(this)&&!this.haveInputsBeenSet&&!r[hn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${G.name}" directive on it. If no inputs are intended, use "${rr.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(c);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Cu({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=cu(c);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){is(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=No(this,!1),this.instanceState=No(this,!((d=e.options)!=null&&d.allowPolymorphicState));const c=e.stateInitStatic||{};Ce(c).forEach(u=>{qt()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},xu(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[Gr]:{value:!0,writable:!1},name:{value:iu(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function Eu(){return e=>rr({...e,options:{[hn]:!1,...e.options}})}function be(e,t){return Su(e,t)}const Su=de(class extends he{constructor(e){super(e),this.element=cs(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),I}}),Tr="onResize",hs=de(class extends he{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Xr(e,Tr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Tr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Xr(e,Tr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Ut(e,t,r){return Ko(e,()=>t,()=>r)}function _u(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Eu()(r(n))),defineElementNoInputs:n=>(t(n),rr(r(n)))}}function Tu(e,t){return e.filter((r,n)=>!t.includes(n))}function fs(e){return e.filter(t=>du(t,["tagName",Gr])&&!!t.tagName&&!!t[Gr])}const ps=new WeakMap;function Mu(e,t){var o;const r=fs(t);return(o=ms(ps,[e,...r]).value)==null?void 0:o.template}function Au(e,t,r){const n=fs(t);return bs(ps,[e,...n],r)}function ms(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=gs(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ms(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function gs(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function bs(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=gs(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),bs(l,t,r,n+1)}function vs(e,t,r){return{name:e,check:t,transform:r}}const Pu=new WeakMap;function ys(e,t,r){const n=Mu(e,t),o=n??r();if(!n){const s=Au(e,t,o);if(s.result)Pu.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=Tu(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function $s(e,t,r,n){const o=[],a=[],s=[];return e.forEach((l,c)=>{var g;const d=o.length-1,u=o[d],h=c-1,p=t[h];let f;n&&n(l),typeof u=="string"&&(f=(g=r.find(v=>v.check(u,l,p)))==null?void 0:g.transform,f&&(o[d]=u+f(p)+l,s.push(h))),f||o.push(l);const m=e.raw[c];f?a[d]=a[d]+f(p)+m:a.push(m)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:s}}function ws(e){return ut(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Ru=[vs("tag name css selector interpolation",(e,t,r)=>ws(r),e=>e.tagName)];function Nu(e,t){return $s(e,t,Ru)}function C(e,...t){const r=ys(e,t,()=>Nu(e,t));return ye(r.strings,...r.values)}const Lu=[vs("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=ws(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Bu(e){}function zu(e){return $s(e.strings,e.values,Lu,Bu)}function _(e,...t){const r=Uo(e,...t),n=ys(e,t,()=>zu(r));return{...r,strings:n.strings,values:n.values}}const dt=Le({title:"Elements",parent:void 0}),Cs=C`
    pointer-events: none;
    opacity: 0.3;
`,We=X({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Ou(e){return`${e}px`}const Yt=X({"vira-form-input-border-radius":"8px"}),Wt=X({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":C`calc(${Yt["vira-form-input-border-radius"].value} + 4px)`});function ks({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=x(Ou(n+r+t));return C`
        ${x(e)}::after {
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
    `}const Me=C`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,xs=C`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Lo="vira-",{defineElement:nr,defineElementNoInputs:id}=_u({assertInputs:e=>{if(!e.tagName.startsWith(Lo))throw new Error(`Tag name should start with '${Lo}' but got '${e.tagName}'`)}}),qr=X({"vira-icon-color":"currentColor"}),Du=X({"vira-icon-stroke-color":qr["vira-icon-color"].value,"vira-icon-fill-color":qr["vira-icon-color"].value}),Pe={...qr,...Du},N=nr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>C`
        :host {
            display: inline-block;
            color: ${Pe["vira-icon-color"].value};
            fill: ${Pe["vira-icon-fill-color"].value};
            stroke: ${Pe["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Es=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Es||{});const T=nr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${xs};
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
            ${Cs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Me};
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
            transition: color ${We["vira-interaction-animation-duration"].value},
                background-color
                    ${We["vira-interaction-animation-duration"].value},
                border-color ${We["vira-interaction-animation-duration"].value};
        }

        ${ks({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${N} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?_`
                  <${N}
                      ${G(N,{icon:e.icon})}
                  ></${N}>
              `:"",r=e.text?_`
                  <span class="text-template">${e.text}</span>
              `:"";return _`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),fn=Le({parent:dt,title:"Button"}),Hu=Be({parent:fn,title:T.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:P.Text,initValue:""},"Secondary color":{controlType:P.Text,initValue:""},"Hover color":{controlType:P.Text,initValue:""},"Active color":{controlType:P.Text,initValue:""}},defineExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??C``;e({title:r,styles:a,renderCallback({controls:s}){const i=C`
                        ${T.cssVars["vira-button-primary-color"].name}: ${x(s["Primary color"]||"inherit")};
                        ${T.cssVars["vira-button-secondary-color"].name}: ${x(s["Secondary color"]||"inherit")};
                        ${T.cssVars["vira-button-primary-hover-color"].name}: ${x(s["Hover color"]||"inherit")};
                        ${T.cssVars["vira-button-primary-active-color"].name}: ${x(s["Active color"]||"inherit")};
                    `;return _`
                        <${T}
                            style=${i}
                            ${G(T,{text:"hello",...o})}
                        ></${T}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:Es.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:C`
                ${T} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:C`
                ${T} {
                    height: 75px;
                }
            `})}}),Iu=Be({parent:fn,title:"with custom colors",descriptionParagraphs:["These are not necessarily GOOD color combinations, but they are custom!"],defineExamplesCallback({defineExample:e}){e({title:"custom colors",styles:C`
                :host {
                    ${T.cssVars["vira-button-primary-color"].name}: pink;
                    ${T.cssVars["vira-button-secondary-color"].name}: purple;
                    ${T.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${T.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return _`
                    <${T}
                        ${G(T,{text:"hello"})}
                    ></${T}>
                `}})}}),ju=[fn,Hu,Iu];var Jr=(e=>(e.Header="header",e))(Jr||{});const K=nr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Me};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${We["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Zr()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?C`
                  height: ${e.contentHeight}px;
              `:C`
                  height: 0;
              `;return _`
            <button
                class="header-wrapper"
                ${be("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${hs(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Ss=Le({title:"Collapsible",parent:dt}),Vu=Be({title:K.tagName,parent:Ss,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>_`
                            <${K}
                                ${G(K,{expanded:!!r.expandedStates[o]})}
                                ${be(K.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Jr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${be("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Ut(!!r.showMoreStates[o],_`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${K}>
                        `)}}),e({title:"wider examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>_`
                            <${K}
                                ${G(K,{expanded:!!r.expandedStates[o]})}
                                ${be(K.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Jr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${be("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Ut(!!r.showMoreStates[o],_`
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
                            </${K}>
                        `)}})}}),Fu=[Ss,Vu];function _s({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Uu=_s({name:"Element16Icon",svgTemplate:_`
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
    `}),Ge=_s({name:"Element24Icon",svgTemplate:_`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),Yu={Element16Icon:Uu,Element24Icon:Ge},Ts=Le({title:"Icon",parent:dt}),Wu=Be({title:N.tagName,parent:Ts,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],defineExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return _`
                    <${N} ${G(N,{icon:Ge})}></${N}>
                `}})}}),Gu=[Ts,Wu];function Qr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Qr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ms({value:e,allowed:t,blocked:r}){const n=t?Qr({input:e,matcher:t}):!0,o=r?Qr({input:e,matcher:r}):!1;return n&&!o}function Bo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ms({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const D=nr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Zr(),inputBlocked:Zr()},styles:({hostClasses:e,cssVars:t})=>C`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Wt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Cs};
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
                ${Me};
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
                ${xs};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${Me};
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
                    ${We["vira-interaction-animation-duration"].value};
            }

            label {
                ${Me};
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

            ${ks({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${N} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Me};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Bo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?_`
                  <${N} ${G(N,{icon:e.icon})}></${N}>
              `:"",i=e.fitText?C`
                  width: ${r.forcedInputWidth}px;
              `:"";return _`
            <label>
                ${s}
                ${Ut(!!e.fitText,_`
                        <span
                            class="size-span"
                            ${hs(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${Jo({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${be("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=a;let h=c.value??"";if(d)if(d.length===1)Ms({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs})||(h=u,t(new o.inputBlocked(d)));else{const{filtered:p,blocked:f}=Bo({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs});h=p,t(new o.inputBlocked(f))}c.value!==h&&(c.value=h),u!==h&&t(new o.valueChange(h))})}
                    placeholder=${e.placeholder}
                />
                ${Ut(!!e.suffix,_`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),As=Le({title:"Input",parent:dt});function zo(e,t,r,n){return Be({title:e,parent:As,descriptionParagraphs:r,controls:(()=>{const o={"Text color":{controlType:P.Text,initValue:""},"Placeholder color":{controlType:P.Text,initValue:""},"Border color":{controlType:P.Text,initValue:""},"Focus color":{controlType:P.Text,initValue:""},"Selection color":{controlType:P.Text,initValue:""}};return t?o:{}})(),defineExamplesCallback({defineExample:o}){function a({styles:s,title:i,inputs:l}){o({title:i,styles:C`
                        ${s||C``}
                    `,stateInitStatic:{value:l.value},renderCallback({state:c,updateState:d,controls:u}){const h=t?C`
                                  ${D.cssVars["vira-input-text-color"].name}: ${x(u["Text color"]||"inherit")};
                                  ${D.cssVars["vira-input-border-color"].name}: ${x(u["Border color"]||"inherit")};
                                  ${D.cssVars["vira-input-focus-border-color"].name}: ${x(u["Focus color"]||"inherit")};
                                  ${D.cssVars["vira-input-placeholder-color"].name}: ${x(u["Placeholder color"]||"inherit")};
                                  ${D.cssVars["vira-input-text-selection-color"].name}: ${x(u["Selection color"]||"inherit")};
                              `:C``;return _`
                            <${D}
                                style=${h}
                                ${G(D,{...l,value:c.value,...n})}
                                ${be(D.events.valueChange,p=>{d({value:p.detail})})}
                            ></${D}>
                        `}})}a({title:"basic",inputs:{value:"default value"}}),a({title:"with icon",inputs:{value:"",icon:Ge}}),a({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),a({title:"with suffix",inputs:{value:"42",suffix:"px"}}),a({title:"disabled",inputs:{value:"disabled",disabled:!0}}),a({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),a({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),a({title:"custom width",styles:C`
                    ${D} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Ge}}),a({title:"custom height",styles:C`
                    ${D} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"height",icon:Ge}}),a({title:"max width",styles:C`
                    ${D} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42"}})}})}const Xu=[zo(D.tagName,!0,["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."]),zo("vira-input fit text",!0,["Set the input 'fitText' to true for automatic sizing to fit the given text."],{fitText:!0})],Zu=[As,...Xu],Ps=Le({parent:void 0,title:"Icons"}),qu=Be({title:"All Icons",parent:Ps,controls:{"Icon Color":{controlType:P.Text,initValue:""},"Stroke Color":{controlType:P.Text,initValue:""},"Fill Color":{controlType:P.Text,initValue:""}},defineExamplesCallback({defineExample:e}){Object.values(Yu).forEach(t=>{e({title:t.name,renderCallback({controls:r}){const n=C`
                        ${Pe["vira-icon-color"].name}: ${x(r["Icon Color"]||"inherit")};
                        ${Pe["vira-icon-fill-color"].name}: ${x(r["Fill Color"]||"inherit")};
                        ${Pe["vira-icon-stroke-color"].name}: ${x(r["Stroke Color"]||"inherit")};
                    `;return _`
                        <${N} style=${n} ${G(N,{icon:t})}></${N}>
                    `}})})}}),Ju=[Ps,qu],Qu=[dt,...Ju,...ju,...Fu,...Gu,...Zu];rr({tagName:"vira-book-app",styles:C`
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
    `,renderCallback(){return _`
            <${_t}
                ${G(_t,{internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Qu,themeColor:"#33ccff"})}
            >
                <h1 slot=${te.NavHeader}>Vira</h1>
            </${_t}>
        `}});
