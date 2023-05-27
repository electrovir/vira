var Is=Object.defineProperty;var Ds=(t,e,r)=>e in t?Is(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Ft=(t,e,r)=>(Ds(t,typeof e!="symbol"?e+"":e,r),r),Vt=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var fe=(t,e,r)=>(Vt(t,e,"read from private field"),r?r.call(t):e.get(t)),Se=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Ut=(t,e,r,n)=>(Vt(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);var Qe=(t,e,r)=>(Vt(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var X;(function(t){t.Chapter="chapter",t.Page="page",t.Root="root"})(X||(X={}));function At(t){return t.title?{entryType:X.Chapter,...t}:new Error("Cannot have an element-book chapter with an empty title.")}function ao(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const js={capitalizeFirstLetter:!1};function Hs(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Fs(t,e){return e.capitalizeFirstLetter?Hs(t):t}function Vs(t,e=js){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""});return Fs(n,e)}const Us=["january","february","march","april","may","june","july","august","september","october","november","december"];Us.map(t=>t.slice(0,3));function Ys(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(r=>Tt(r).trim()).join(`
`))}function Tt(t){return t?t instanceof Error?t.message:String(t):""}function io(t){return t instanceof Error?t:new Error(Tt(t))}function Xs(t){return!!t}function Gr(t){return!!t&&typeof t=="object"}const qr="Failed to compare objects using JSON.stringify";function Wr(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Te(t,e){try{return t===e?!0:Gr(t)&&Gr(e)?Wr(Object.keys(t).sort(),Object.keys(e).sort())?Object.keys(t).every(n=>Te(t[n],e[n])):!1:Wr(t,e)}catch(r){const n=io(r);throw n.message.startsWith(qr)||(n.message=`${qr}: ${n.message}`),n}}const Zs=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function we(t,e){return t?Zs.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ar(t,e){return t&&e.every(r=>we(t,r))}function J(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Gs(t){return Array.isArray(t)?"array":typeof t}function qs(t,e){return Gs(t)===e}function Ws(t,e,r){const n=e;if(t.has(n))return t.get(n);{const o=r();return t.set(n,o),o}}function Js(t){return J(t).filter(e=>isNaN(Number(e)))}function Ks(t){return Js(t).map(r=>t[r])}function Qs(t,e){return Ks(e).includes(t)}function ea(t,e){return J(t).filter(n=>{const o=t[n];return e(n,o,t)}).reduce((n,o)=>(n[o]=t[o],n),{})}function Pt(t,e){let r=!1;const n=J(t).reduce((o,s)=>{const a=e(s,t[s],t);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(J(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}function ta(t){const e=lo();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function lo(){let t,e,r=!1;const n=new Promise((o,s)=>{t=a=>(r=!0,o(a)),e=a=>{r=!0,s(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${lo.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function ra(t,e){try{return na(t,e),!0}catch{return!1}}function na(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function oa(t,e){return we(t,"entryType")&&t.entryType===e}function Rt(t,e){const r=hr(t.title);return t.parent?[hr(t.parent.title),...Rt(t.parent,!1)].concat(e?[r]:[]):e?[r]:[]}function hr(t){return ao(t).toLowerCase().replaceAll(/\s/g,"-")}function sa(t,e,r){const n=[],o=`Failed to define example '${e.concat(r.title).join(" > ")}'`;t.hasOwnProperty(r.title)?n.push(new Error(`${o}: title '${r.title}' is already being used.`)):r.title||n.push(new Error(`${o}: example title is missing or empty.`)),n.length?t[r.title]=Ys(n):t[r.title]=r}function Lt(t){if(!t.title)throw new Error("Cannot have an element-book page with an empty title.");const e={},r={entryType:X.Page,...t,examples:e,controls:t.controls??{},pageBreadcrumbs:[]};return r.pageBreadcrumbs=Rt(r),t.defineExamplesCallback&&t.defineExamplesCallback({defineExample:n=>sa(e,r.pageBreadcrumbs,n)}),r}var Y;(function(t){t.Checkbox="checkbox",t.Color="color",t.Dropdown="dropdown",t.Text="text"})(Y||(Y={}));var W;(function(t){t.Footer="element-book-footer",t.NavHeader="element-book-nav-header"})(W||(W={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fe=t=>(...e)=>({_$litDirective$:t,values:e});let Ve=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yt;const mt=window,$e=mt.trustedTypes,Jr=$e?$e.createPolicy("lit-html",{createHTML:t=>t}):void 0,pt="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,Tr="?"+q,aa=`<${Tr}>`,de=document,Ne=()=>de.createComment(""),Be=t=>t===null||typeof t!="object"&&typeof t!="function",co=Array.isArray,uo=t=>co(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Xt=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kr=/-->/g,Qr=/>/g,ie=RegExp(`>|${Xt}(?:([^\\s"'>=/]+)(${Xt}*=${Xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),en=/'/g,tn=/"/g,ho=/^(?:script|style|textarea|title)$/i,ia=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),la=ia(1),V=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),rn=new WeakMap,ce=de.createTreeWalker(de,129,null,!1),fo=(t,e)=>{const r=t.length-1,n=[];let o,s=e===2?"<svg>":"",a=xe;for(let l=0;l<r;l++){const c=t[l];let d,u,h=-1,f=0;for(;f<c.length&&(a.lastIndex=f,u=a.exec(c),u!==null);)f=a.lastIndex,a===xe?u[1]==="!--"?a=Kr:u[1]!==void 0?a=Qr:u[2]!==void 0?(ho.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=ie):u[3]!==void 0&&(a=ie):a===ie?u[0]===">"?(a=o??xe,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?ie:u[3]==='"'?tn:en):a===tn||a===en?a=ie:a===Kr||a===Qr?a=xe:(a=ie,o=void 0);const m=a===ie&&t[l+1].startsWith("/>")?" ":"";s+=a===xe?c+aa:h>=0?(n.push(d),c.slice(0,h)+pt+c.slice(h)+q+m):c+q+(h===-2?(n.push(void 0),l):m)}const i=s+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Jr!==void 0?Jr.createHTML(i):i,n]};class Oe{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let s=0,a=0;const i=e.length-1,l=this.parts,[c,d]=fo(e,r);if(this.el=Oe.createElement(c,n),ce.currentNode=this.el.content,r===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=ce.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(pt)||h.startsWith(q)){const f=d[a++];if(u.push(h),f!==void 0){const m=o.getAttribute(f.toLowerCase()+pt).split(q),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:p[2],strings:m,ctor:p[1]==="."?po:p[1]==="?"?go:p[1]==="@"?bo:Ue})}else l.push({type:6,index:s})}for(const h of u)o.removeAttribute(h)}if(ho.test(o.tagName)){const u=o.textContent.split(q),h=u.length-1;if(h>0){o.textContent=$e?$e.emptyScript:"";for(let f=0;f<h;f++)o.append(u[f],Ne()),ce.nextNode(),l.push({type:2,index:++s});o.append(u[h],Ne())}}}else if(o.nodeType===8)if(o.data===Tr)l.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(q,u+1))!==-1;)l.push({type:7,index:s}),u+=q.length-1}s++}}static createElement(e,r){const n=de.createElement("template");return n.innerHTML=e,n}}function he(t,e,r=t,n){var o,s,a,i;if(e===V)return e;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Be(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,r,n)),n!==void 0?((a=(i=r)._$Co)!==null&&a!==void 0?a:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(e=he(t,l._$AS(t,e.values),l,n)),e}let mo=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:n},parts:o}=this._$AD,s=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:de).importNode(n,!0);ce.currentNode=s;let a=ce.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new Ce(a,a.nextSibling,this,e):c.type===1?d=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(d=new vo(a,this,e)),this._$AV.push(d),c=o[++l]}i!==(c==null?void 0:c.index)&&(a=ce.nextNode(),i++)}return ce.currentNode=de,s}v(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}};class Ce{constructor(e,r,n,o){var s;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=he(this,e,r),Be(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):uo(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==E&&Be(this._$AH)?this._$AA.nextSibling.data=e:this.$(de.createTextNode(e)),this._$AH=e}g(e){var r;const{values:n,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Oe.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const a=new mo(s,this),i=a.u(this.options);a.v(n),this.$(i),this._$AH=a}}_$AC(e){let r=rn.get(e.strings);return r===void 0&&rn.set(e.strings,r=new Oe(e)),r}T(e){co(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of e)o===r.length?r.push(n=new Ce(this.k(Ne()),this.k(Ne()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class Ue{constructor(e,r,n,o,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,o){const s=this.strings;let a=!1;if(s===void 0)e=he(this,e,r,0),a=!Be(e)||e!==this._$AH&&e!==V,a&&(this._$AH=e);else{const i=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=he(this,i[n+l],r,l),c===V&&(c=this._$AH[l]),a||(a=!Be(c)||c!==this._$AH[l]),c===E?e=E:e!==E&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!o&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class po extends Ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}const ca=$e?$e.emptyScript:"";class go extends Ue{constructor(){super(...arguments),this.type=4}j(e){e&&e!==E?this.element.setAttribute(this.name,ca):this.element.removeAttribute(this.name)}}class bo extends Ue{constructor(e,r,n,o,s){super(e,r,n,o,s),this.type=5}_$AI(e,r=this){var n;if((e=(n=he(this,e,r,0))!==null&&n!==void 0?n:E)===V)return;const o=this._$AH,s=e===E&&o!==E||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==E&&(o===E||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class vo{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){he(this,e)}}const ua={O:pt,P:q,A:Tr,C:1,M:fo,L:mo,D:uo,R:he,I:Ce,V:Ue,H:go,N:bo,U:po,F:vo},nn=mt.litHtmlPolyfillSupport;nn==null||nn(Oe,Ce),((Yt=mt.litHtmlVersions)!==null&&Yt!==void 0?Yt:mt.litHtmlVersions=[]).push("2.7.4");const da=(t,e,r)=>{var n,o;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let a=s._$litPart$;if(a===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=a=new Ce(e.insertBefore(Ne(),i),i,void 0,r??{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ha}=ua,on=()=>document.createComment(""),Me=(t,e,r)=>{var n;const o=t._$AA.parentNode,s=e===void 0?t._$AB:e._$AA;if(r===void 0){const a=o.insertBefore(on(),s),i=o.insertBefore(on(),s);r=new ha(a,i,t,t.options)}else{const a=r._$AB.nextSibling,i=r._$AM,l=i!==t;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,t),r._$AM=t,r._$AP!==void 0&&(c=t._$AU)!==i._$AU&&r._$AP(c)}if(a!==s||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;o.insertBefore(c,s),c=d}}}return r},le=(t,e,r=t)=>(t._$AI(e,r),t),fa={},ma=(t,e=fa)=>t._$AH=e,pa=t=>t._$AH,Zt=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let r=t._$AA;const n=t._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ga=Fe(class extends Ve{constructor(t){var e;if(super(t),t.type!==Nt.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((r=this.nt)===null||r===void 0)&&r.has(s))&&this.it.add(s);return this.render(e)}const o=t.element.classList;this.it.forEach(s=>{s in e||(o.remove(s),this.it.delete(s))});for(const s in e){const a=!!e[s];a===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(a?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return V}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sn=(t,e,r)=>{const n=new Map;for(let o=e;o<=r;o++)n.set(t[o],o);return n},ba=Fe(class extends Ve{constructor(t){if(super(t),t.type!==Nt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const o=[],s=[];let a=0;for(const i of t)o[a]=n?n(i,a):a,s[a]=r(i,a),a++;return{values:s,keys:o}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){var o;const s=pa(t),{values:a,keys:i}=this.dt(e,r,n);if(!Array.isArray(s))return this.ht=i,a;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,h=0,f=s.length-1,m=0,p=a.length-1;for(;h<=f&&m<=p;)if(s[h]===null)h++;else if(s[f]===null)f--;else if(l[h]===i[m])c[m]=le(s[h],a[m]),h++,m++;else if(l[f]===i[p])c[p]=le(s[f],a[p]),f--,p--;else if(l[h]===i[p])c[p]=le(s[h],a[p]),Me(t,c[p+1],s[h]),h++,p--;else if(l[f]===i[m])c[m]=le(s[f],a[m]),Me(t,s[h],s[f]),f--,m++;else if(d===void 0&&(d=sn(i,m,p),u=sn(l,h,f)),d.has(l[h]))if(d.has(l[f])){const g=u.get(i[m]),$=g!==void 0?s[g]:null;if($===null){const R=Me(t,s[h]);le(R,a[m]),c[m]=R}else c[m]=le($,a[m]),Me(t,s[h],$),s[g]=null;m++}else Zt(s[f]),f--;else Zt(s[h]),h++;for(;m<=p;){const g=Me(t,c[p+1]);le(g,a[m]),c[m++]=g}for(;h<=f;){const g=s[h++];g!==null&&Zt(g)}return this.ht=i,ma(t,c),V}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gt=class extends Ve{constructor(e){if(super(e),this.et=E,e.type!==Nt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===E||e==null)return this.ft=void 0,this.et=e;if(e===V)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const r=[e];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};gt.directiveName="unsafeHTML",gt.resultType=1;const va=Fe(gt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let an=class extends gt{};an.directiveName="unsafeSVG",an.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ya(t,e,r){return t?e():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=window,Pr=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rr=Symbol(),ln=new WeakMap;let yo=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Rr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Pr&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=ln.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ln.set(r,e))}return e}toString(){return this.cssText}};const M=t=>new yo(typeof t=="string"?t:t+"",void 0,Rr),Pe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new yo(r,t,Rr)},$a=(t,e)=>{Pr?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),o=ht.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)})},cn=Pr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return M(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gt;const bt=window,un=bt.trustedTypes,wa=un?un.emptyScript:"",dn=bt.reactiveElementPolyfillSupport,fr={toAttribute(t,e){switch(e){case Boolean:t=t?wa:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},$o=(t,e)=>e!==t&&(e==e||t==t),qt={attribute:!0,type:String,converter:fr,reflect:!1,hasChanged:$o};let be=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),e.push(o))}),e}static createProperty(e,r=qt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,r);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(o){const s=this[e];this[r]=o,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||qt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)r.unshift(cn(o))}else e!==void 0&&r.push(cn(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return $a(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=qt){var o;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:fr).toAttribute(r,n.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,r){var n;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=o.getPropertyOptions(s),i=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:fr;this._$El=s,this[s]=i.fromAttribute(r,a.type),this._$El=null}}requestUpdate(e,r,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||$o)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};be.finalized=!0,be.elementProperties=new Map,be.elementStyles=[],be.shadowRootOptions={mode:"open"},dn==null||dn({ReactiveElement:be}),((Gt=bt.reactiveElementVersions)!==null&&Gt!==void 0?Gt:bt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wt,Jt;class Re extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=da(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return V}}Re.finalized=!0,Re._$litElement$=!0,(Wt=globalThis.litElementHydrateSupport)===null||Wt===void 0||Wt.call(globalThis,{LitElement:Re});const hn=globalThis.litElementPolyfillSupport;hn==null||hn({LitElement:Re});((Jt=globalThis.litElementVersions)!==null&&Jt!==void 0?Jt:globalThis.litElementVersions=[]).push("3.3.2");var Ca=globalThis&&globalThis.__esDecorate||function(t,e,r,n,o,s){function a($){if($!==void 0&&typeof $!="function")throw new TypeError("Function expected");return $}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!e&&t?n.static?t:t.prototype:null,d=e||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,f=r.length-1;f>=0;f--){var m={};for(var p in n)m[p]=p==="access"?{}:n[p];for(var p in n.access)m.access[p]=n.access[p];m.addInitializer=function($){if(h)throw new TypeError("Cannot add initializers after decoration has completed");s.push(a($||null))};var g=(0,r[f])(i==="accessor"?{get:d.get,set:d.set}:d[l],m);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(u=a(g.get))&&(d.get=u),(u=a(g.set))&&(d.set=u),(u=a(g.init))&&o.push(u)}else(u=a(g))&&(i==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},ka=globalThis&&globalThis.__runInitializers||function(t,e,r){for(var n=arguments.length>2,o=0;o<e.length;o++)r=n?e[o].call(t,r):e[o].call(t);return n?r:void 0},Ea=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function _a(){function t(e,r){return e}return t}let wo=(()=>{let t=[_a()],e,r=[],n;return n=class extends Re{},Ea(n,"DeclarativeElement"),Ca(null,e={value:n},t,{kind:"class",name:n.name},null,r),n=e.value,ka(n,r),n})();function fn(t){return t!==t.toUpperCase()}function Sa(t){return t.split("").reduce((r,n,o,s)=>{const a=o>0?s[o-1]:"",i=o<s.length-1?s[o+1]:"",l=fn(a)||fn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const xa=["january","february","march","april","may","june","july","august","september","october","november","december"];xa.map(t=>t.slice(0,3));function Ma(t){return!!t&&typeof t=="object"}function mn(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Aa(t){return Array.isArray(t)?"array":typeof t}function Ta(t,e){return Aa(t)===e}function Pa(t,e){let r=!1;const n=mn(t).reduce((o,s)=>{const a=e(s,t[s],t);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(mn(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}function K(t){if(Ma(t))return Pa(t,(r,n)=>{if(!Ta(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Sa(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,a=r.startsWith("--")?M(r):r.startsWith("-")?Pe`-${M(r)}`:Pe`--${M(r)}`;return{name:a,value:Pe`var(${a}, ${M(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${K.name}' function.`)}function Ra({onElement:t,toValue:e,forCssVar:r}){t.style.setProperty(String(r.name),String(e))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const La=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function Co(t){return(e,r)=>r!==void 0?((n,o,s)=>{o.constructor.createProperty(s,n)})(t,e,r):La(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kt;((Kt=window.HTMLSlotElement)===null||Kt===void 0?void 0:Kt.prototype.assignedElements)!=null;const mr=Symbol("this-is-an-element-vir-declarative-element"),Lr=Symbol("key for ignoring inputs not having been set yet"),Na={[Lr]:!0,allowPolymorphicState:!1};function ko(t,e){const r=t.instanceState;J(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&J(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),Eo(t)}function Eo(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function _o(t,e){return Ba(t,e),t.element}function Ba(t,e){if(t.type!==Nt.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function _(t,e){return e?pn(t,e):pn(void 0,t)}const pn=Fe(class extends Ve{constructor(t){super(t),this.element=_o(t,"assign")}render(t,e){return Oa(t,this.element,e),V}});function Oa(t,e,r){ko(e,r)}function So(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof wo?!0:So(r)}function gn(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class za extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Nr(){return t=>{var e;return e=class extends za{constructor(r){super(t,r),this._type=t}},e.type=t,e}}function xo(){return Nr()}function Ia(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,r)=>{const n=Nr()(r);return e[r]=n,e},{}):{}}const bn="_is_element_vir_observable_property_handler_instance",vn="_is_element_vir_observable_property_handler_creator";function Da(t){return we(t,vn)&&t[vn]===!0}function ja(t){return we(t,bn)&&t[bn]===!0}function Ha(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function yn(t,e){const r=t;function n(a){e?Ha(a,t,t.tagName):Co()(t,a)}function o(a,i){return n(i),r[i]}return new Proxy({},{get:o,set:(a,i,l)=>{n(i);const c=t.observablePropertyHandlerMap[i];function d(u){a[i]=u,r[i]=u}return Da(l)&&(l=l.init()),ja(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),t.observablePropertyHandlerMap[i]=l):c?c.setValue(l):d(l),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,i){if(i in a)return{get value(){return o(a,i)},configurable:!0,enumerable:!0}},has:(a,i)=>Reflect.has(a,i)})}function Fa(t){return t?Pt(t,e=>e):{}}function Va({hostClassNames:t,cssVars:e}){return{hostClasses:Pt(t,(r,n)=>({name:M(n),selector:M(`:host(.${n})`)})),cssVars:e}}function Ua({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:o}){e&&J(e).forEach(s=>{const a=e[s],i=r[s];typeof a=="function"&&(a({state:n,inputs:o})?t.classList.add(i):t.classList.remove(i))})}function Ya(t,e){function r(o){J(o).forEach(s=>{const a=o[s];t.instanceState[s]=a})}return{dispatch:o=>t.dispatchEvent(o),updateState:r,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var Xa=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Bt(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const r={...Na,...t.options},n=Ia(t.events),o=Fa(t.hostClasses);t.hostClasses&&gn(t.tagName,t.hostClasses),t.cssVars&&gn(t.tagName,t.cssVars);const s=t.cssVars?K(t.cssVars):{},a=typeof t.styles=="function"?t.styles(Va({hostClassNames:o,cssVars:s})):t.styles||Pe``,i=t.renderCallback,l=(e=class extends wo{createRenderParams(){return Ya(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Eo(this)}render(){try{So(this)&&!this.haveInputsBeenSet&&!r[Lr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${_.name}" directive on it. If no inputs are intended, use "${Bt.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const d=i(c);return Ua({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=io(c);throw d.message=`Failed to render '${t.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();t.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){ko(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=yn(this,!1),this.instanceState=yn(this,!((d=t.options)!=null&&d.allowPolymorphicState));const c=t.stateInitStatic||{};J(c).forEach(u=>{Co()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},Xa(e,"anonymousClass"),e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=i,e.hostClasses=o,e.cssVars=s,e.stateInitStatic=t.stateInitStatic,e);return Object.defineProperties(l,{[mr]:{value:!0,writable:!1},name:{value:Vs(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,l),l}function Br(){return t=>Bt({...t,options:{[Lr]:!1,...t.options}})}function Ye(t,e){return Za(t,e)}const Za=Fe(class extends Ve{constructor(t){super(t),this.element=_o(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),V}});function Ot(t,e,r){return ya(t,()=>e,()=>r)}function pr(t){if("templateString"in t)return t.templateString;const{strings:e,values:r}=t;if((!e||!(e!=null&&e.length))&&(!r||!r.length))return"";const n=[...r||[],""],s=(e??[""]).map((a,i)=>{const l=Ga(a,n[i]);return`${a}${l}`});return ao(s.join(""))}function Ga(t,e){return e._$litType$!=null||e._$litDirective$!=null?pr(e):Array.isArray(e)?e.map(n=>pr(n)).join(""):t.endsWith("=")?`"${e}"`:e}function Mo(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),Br()(r(n))),defineElementNoInputs:n=>(e(n),Bt(r(n)))}}function qa(t,e){return t.filter((r,n)=>!e.includes(n))}function Ao(t){return t.filter(e=>Ar(e,["tagName",mr])&&!!e.tagName&&!!e[mr])}const To=new WeakMap;function Wa(t,e){var o;const r=Ao(e);return(o=Po(To,[t,...r]).value)==null?void 0:o.template}function Ja(t,e,r){const n=Ao(e);return Lo(To,[t,...n],r)}function Po(t,e,r=0){const{currentTemplateAndNested:n,reason:o}=Ro(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Po(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Ro(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=t.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Lo(t,e,r,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:a}=Ro(t,e,n);if(!s)return{result:!1,reason:a};const i=o??{nested:void 0,template:void 0};if(o||t.set(s,i),n===e.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Lo(l,e,r,n+1)}function No(t,e,r){return{name:t,check:e,transform:r}}const Ka=new WeakMap;function Bo(t,e,r){const n=Wa(t,e),o=n??r();if(!n){const a=Ja(t,e,o);if(a.result)Ka.set(t,o);else throw new Error(`Failed to set template transform: ${a.reason}`)}const s=qa(e,o.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Oo(t,e,r,n){const o=[],s=[],a=[];return t.forEach((l,c)=>{var g;const d=o.length-1,u=o[d],h=c-1,f=e[h];let m;n&&n(l),typeof u=="string"&&(m=(g=r.find($=>$.check(u,l,f)))==null?void 0:g.transform,m&&(o[d]=u+m(f)+l,a.push(h))),m||o.push(l);const p=t.raw[c];m?s[d]=s[d]+m(f)+p:s.push(p)}),{templateStrings:Object.assign([],o,{raw:s}),valueIndexDeletions:a}}function zo(t){return we(t,"tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Qa=[No("tag name css selector interpolation",(t,e,r)=>zo(r),t=>t.tagName)];function ei(t,e){return Oo(t,e,Qa)}function k(t,...e){const r=Bo(t,e,()=>ei(t,e));return Pe(r.strings,...r.values)}const ti=[No("tag name interpolation",(t,e,r)=>{const n=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),o=zo(r);if(n&&!o)throw console.error({lastNewString:t,currentLitString:e,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},t=>t.tagName)];function ri(t){}function ni(t){return Oo(t.strings,t.values,ti,ri)}function v(t,...e){const r=la(t,...e),n=Bo(t,e,()=>ni(r));return{...r,strings:n.strings,values:n.values}}const Io=new Map;function Do(t,e){var r;return(r=Io.get(t))==null?void 0:r.get(e)}function jo(t,e,r){Ws(Io,t,()=>new Map).set(e,r)}const vt="isElementBookEntryTreeNode";function oi(t,e){return!!(Ar(t,[vt,"entry"])&&t[vt]&&t.entry.entryType===e)}function Ho(t){return{[vt]:!0,entry:{entryType:X.Root,title:t||"Everything",parent:void 0},breadcrumb:"",children:{}}}function si(t,e){return ai(t,e)}function ai(t,e){const r=Do(t,"");if(r)return r;const n=Ho(e);return t.forEach(o=>{if(o instanceof Error)throw o;const s=ii(o,n),a=hr(o.title);if(a in s.children)throw new Error(`Cannot create duplicate entry '${a}'${s.breadcrumb?` in parent '${s.breadcrumb}'.`:""}`);const i={[vt]:!0,children:{},breadcrumb:a,entry:o};s.children[a]=i}),jo(t,"",n),n}function ii(t,e){return Rt(t).reverse().reduce((o,s)=>{const a=o.children[s];if(!a)throw new Error(`Failed to find parent ElementBookEntry by name of '${s}' in entry '${o.entry.title}'`);return a},e)}function gr(t,e){if(!ra(t,1))return e;const r=t[0],n=e.children[r];if(n)return gr(t.slice(1),n)}function $n({searchQuery:t,searchIn:e}){const r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;const o=e.toLowerCase(),s=t.toLowerCase();e:for(let a=0,i=0;a<n;a++){const l=s.charCodeAt(a);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}function li({entries:t,startTree:e,searchQuery:r}){const n=Do(t,r);if(n)return n;const o=Ho("Search Results");return Fo(e,o,r),jo(t,r,o),o}function Fo(t,e,r){if(t.entry.entryType!==X.Root&&$n({searchIn:t.entry.title,searchQuery:r}))return e.children=t.children,!0;if("examples"in t.entry){const o=ea(t.entry.examples,a=>$n({searchIn:a,searchQuery:r})),s={...t.entry,examples:o};return e.entry=s,!!Object.values(s.examples).length}const n=Object.entries(t.children).map(([o,s])=>{const a={...s,children:{}};if(Fo(s,a,r))return[o,a]}).filter(Xs);return n.length?(e.children=Object.fromEntries(n),!0):!1}const ci=0;function ui(t){return!(t.type!=="click"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==ci)}class Xe extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class wn extends Xe{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const ze="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const di=globalThis.history.pushState;function Cn(...t){const e=di.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(ze)),e}const hi=globalThis.history.replaceState;function kn(...t){const e=hi.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(ze)),e}function fi(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Cn)throw new wn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===kn)throw new wn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Cn,globalThis.history.replaceState=kn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ze))})}}function mi(t){return Array.from(t.entries()).reduce((e,r)=>(e[r[0]]=r[1],e),{})}function pi(t){const e=Object.entries(t).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(e)}function gi(t){const r=(t?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?mi(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:r,search:o,hash:s}}class bi extends Xe{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Vo(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const r=Object.entries(t.search).join(" "),n=Object.entries(e.search).join(" ");if(r!==n)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const En=6;function _n(t,e){const r=t.getCurrentRawRoutes();if(t.sanitizationDepth>En)throw new bi(`Route sanitization depth has exceed the max of ${En} with ${JSON.stringify(r)}`);const n=t.sanitizeFullRoute(r);if(Vo(n,r))t.sanitizationDepth=0,e?e(n):t.listeners.forEach(o=>{o(n)});else return t.sanitizationDepth++,t.setRoutes(n,!0)}class Qt extends Xe{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function vi(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Qt(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Qt(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Qt(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function yi(t,e,r,n=!1){const o=Uo(t,e,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function Uo(t,e,r=""){var l;if(!r&&e!=null)throw new Xe("Route base regexp was defined but routeBase string was not provided.");const n=$i(e)?`/${r}`:"",o=t.search?pi(t.search).toString():"",s=o?`?${o}`:"",a=(l=t.hash)!=null&&l.startsWith("#")?"":"#",i=t.hash?`${a}${t.hash}`:"";return`${n}/${t.paths.join("/")}${s}${i}`}function $i(t){return!!(t&&globalThis.location.pathname.match(t))}function wi(t={}){var a;vi(t),fi();const e=(a=t.routeBase)==null?void 0:a.replace(/\/+$/,""),r=e?new RegExp(`^\\/${t.routeBase}`):void 0;let n=!1;const o=()=>_n(s),s={listeners:new Set,initParams:t,sanitizeFullRoute:i=>{const l={hash:void 0,search:void 0,...i};return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(i,l=!1,c=!1)=>{const d=s.getCurrentRawRoutes(),u={...d,...i},h=s.sanitizeFullRoute(u);if(!(!c&&Vo(d,h)))return yi(h,r,e,l)},createRoutesUrl:i=>Uo(i,r,e),getCurrentRawRoutes:()=>gi(r),removeAllRouteListeners(){s.listeners.forEach(i=>s.removeRouteListener(i))},addRouteListener:(i,l)=>{if(t.maxListenerCount&&s.listeners.size>=t.maxListenerCount)throw new Xe(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return s.listeners.add(l),n||(globalThis.addEventListener(ze,o),n=!0),i&&_n(s,l),l},hasRouteListener:i=>s.listeners.has(i),removeRouteListener:i=>{const l=s.listeners.delete(i);return s.listeners.size||(globalThis.removeEventListener(ze,o),n=!1),l},sanitizationDepth:0};return s}var P;(function(t){t.Search="search",t.Book="book"})(P||(P={}));function Yo(t){return t[0]===P.Book?"":t[1]?decodeURIComponent(t[1]):""}const zt={hash:void 0,paths:[P.Book],search:void 0};function Ci(t){return wi({routeBase:t,routeSanitizer(e){return{paths:ki(e.paths),hash:void 0,search:void 0}}})}function ki(t){const e=t[0];if(Qs(e,P)){if(e===P.Book)return[P.Book,...t.slice(1)];if(e===P.Search)return t[1]?[e,t[1]]:[P.Book,...t.slice(1)];throw new Error(`Route path not handled for sanitization: ${t.join("/")}`)}else return zt.paths}const y=K({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Ei={nav:{hover:{background:y["element-book-nav-hover-background-color"],foreground:y["element-book-nav-hover-foreground-color"]},active:{background:y["element-book-nav-active-background-color"],foreground:y["element-book-nav-active-foreground-color"]},selected:{background:y["element-book-nav-selected-background-color"],foreground:y["element-book-nav-selected-foreground-color"]}},accent:{icon:y["element-book-accent-icon-color"]},page:{background:y["element-book-page-background-color"],backgroundFaint1:y["element-book-page-background-faint-level-1-color"],backgroundFaint2:y["element-book-page-background-faint-level-2-color"],foreground:y["element-book-page-foreground-color"],foregroundFaint1:y["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:y["element-book-page-foreground-faint-level-2-color"]}};function _i(t,e){Xo(t,e,Ei)}function br(t){return we(t,"_$cssResult$")}function Sn(t){return Ar(t,["name","value","default"])&&qs(t.default,"string")&&br(t.name)&&br(t.value)}function Xo(t,e,r){Object.entries(e).forEach(([n,o])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(br(o)){if(!Sn(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ra({forCssVar:s,onElement:t,toValue:String(o)})}else{if(Sn(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Xo(t,o,s)}})}function S(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(a=>[a]));let n=e[0].length,o=e[0].map((a,i)=>e.map(l=>l[i])),s=t.map(a=>o.map(i=>{let l=0;if(!Array.isArray(a)){for(let c of i)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(i[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(a=>a[0]):s}function Ze(t){return ee(t)==="string"}function ee(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function yt(t,e){t=+t,e=+e;let r=(Math.floor(t)+"").length;if(e>r)return+t.toFixed(e-r);{let n=10**(r-e);return Math.round(t/n)*n}}function Zo(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=t.match(e);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(s,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),s.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Go(t){return t[t.length-1]}function $t(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function qo(t,e,r){return(r-t)/(e-t)}function Or(t,e,r){return $t(e[0],e[1],qo(t[0],t[1],r))}function Wo(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Si=Object.freeze({__proto__:null,isString:Ze,type:ee,toPrecision:yt,parseFunction:Zo,last:Go,interpolate:$t,interpolateInv:qo,mapRange:Or,parseCoordGrammar:Wo,multiplyMatrices:S});class xi{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const re=new xi;var Z={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const H={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function vr(t){return Array.isArray(t)?t:H[t]}function wt(t,e,r,n={}){if(t=vr(t),e=vr(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let o={W1:t,W2:e,XYZ:r,options:n};if(re.run("chromatic-adaptation-start",o),o.M||(o.W1===H.D65&&o.W2===H.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===H.D50&&o.W2===H.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),re.run("chromatic-adaptation-end",o),o.M)return S(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Mi=75e-6;var He,yr,ye,Mt,Jo;const j=class{constructor(e){Se(this,He);Se(this,Mt);Se(this,ye,void 0);var o,s,a;this.id=e.id,this.name=e.name,this.base=e.base?j.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;this.coords=r;let n=e.white??this.base.white??"D65";this.white=vr(n),this.formats=e.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}e.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:e.cssId},Object.defineProperty(this,"cssId",{value:e.cssId})):(s=this.formats)!=null&&s.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=e.referred,Ut(this,ye,Qe(this,Mt,Jo).call(this).reverse()),re.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=Mi}={}){if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((o,s)=>{let a=n[s];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[i,l]=a.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var e,r;return((r=(e=this.formats.functions)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=Qe(this,He,yr).call(this,e),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=Qe(this,He,yr).call(this,r),r):null}to(e,r){if(arguments.length===1&&([e,r]=[e.space,e.coords]),e=j.get(e),this===e)return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=fe(this,ye),o=fe(e,ye),s,a;for(let i=0;i<n.length&&n[i]===o[i];i++)s=n[i],a=i;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let i=n.length-1;i>a;i--)r=n[i].toBase(r);for(let i=a+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(e,r){return arguments.length===1&&([e,r]=[e.space,e.coords]),e=j.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;e.push((o==null?void 0:o.min)??0)}return e}static get all(){return[...new Set(Object.values(j.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof j)return e;if(ee(e)==="string"){let o=j.registry[e.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${e}"`);return o}if(r.length)return j.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=ee(e),o,s;if(n==="string"?e.includes(".")?[o,s]=e.split("."):[o,s]=[,e]:Array.isArray(e)?[o,s]=e:(o=e.space,s=e.coordId),o=j.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=ee(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(o.coords)[s];if(c)return{space:o,id:c[0],index:s,...c[1]}}o=j.get(o);let a=s.toLowerCase(),i=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:i,...d};i++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let b=j;He=new WeakSet,yr=function(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Wo(e.coords);let r=Object.entries(this.coords).map(([n,o],s)=>{let a=e.coordGrammar[s][0],i=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((s,a)=>{let{fromRange:i,toRange:l,suffix:c}=r[a];return i&&l&&(s=Or(i,l,s)),s=yt(s,o),c&&(s+=c),s})}return e},ye=new WeakMap,Mt=new WeakSet,Jo=function(){let e=[this];for(let r=this;r=r.base;)e.push(r);return e},Ft(b,"registry",{}),Ft(b,"DEFAULT_FORMAT",{type:"functions",name:"color"});var z=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class L extends b{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=z),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=S(e.toXYZ_M,r);return this.white!==this.base.white&&(n=wt(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=wt(this.base.white,this.white,r),S(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}}function Ko(t){var r,n,o,s,a;let e={str:(r=String(t))==null?void 0:r.trim()};if(re.run("parse-start",e),e.color)return e.color;if(e.parsed=Zo(e.str),e.parsed){let i=e.parsed.name;if(i==="color"){let l=e.parsed.args.shift(),c=e.parsed.rawArgs.indexOf("/")>0?e.parsed.args.pop():1;for(let u of b.all){let h=u.getFormat("color");if(h&&(l===h.id||(n=h.ids)!=null&&n.includes(l))){let f=Object.keys(u.coords).length,m=Array(f).fill(0);return m.forEach((p,g)=>m[g]=e.parsed.args[g]||0),{spaceId:u.id,coords:m,alpha:c}}}let d="";if(l in b.registry){let u=(a=(s=(o=b.registry[l].formats)==null?void 0:o.functions)==null?void 0:s.color)==null?void 0:a.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of b.all){let c=l.getFormat(i);if(c&&c.type==="function"){let d=1;(c.lastAlpha||Go(e.parsed.args).alpha)&&(d=e.parsed.args.pop());let u=e.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([h,f],m)=>{var D;let p=c.coordGrammar[m],g=(D=u[m])==null?void 0:D.type;if(p=p.find(N=>N==g),!p){let N=f.name||h;throw new TypeError(`${g} not allowed for ${N} in ${i}()`)}let $=p.range;g==="<percentage>"&&($||($=[0,1]));let R=f.range||f.refRange;$&&R&&(u[m]=Or($,R,u[m]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let i of b.all)for(let l in i.formats){let c=i.formats[l];if(c.type!=="custom"||c.test&&!c.test(e.str))continue;let d=c.parse(e.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function w(t){if(!t)throw new TypeError("Empty color reference");Ze(t)&&(t=Ko(t));let e=t.space||t.spaceId;return e instanceof b||(t.space=b.get(e)),t.alpha===void 0&&(t.alpha=1),t}function Ge(t,e){return e=b.get(e),e.from(t)}function I(t,e){let{space:r,index:n}=b.resolveCoord(e,t.space);return Ge(t,r)[n]}function Qo(t,e,r){return e=b.get(e),t.coords=e.to(t.space,r),t}function ne(t,e,r){if(t=w(t),arguments.length===2&&ee(arguments[1])==="object"){let n=arguments[1];for(let o in n)ne(t,o,n[o])}else{typeof r=="function"&&(r=r(I(t,e)));let{space:n,index:o}=b.resolveCoord(e,t.space),s=Ge(t,n);s[o]=r,Qo(t,n,s)}return t}var zr=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:z,fromBase:t=>wt(z.white,"D50",t),toBase:t=>wt("D50",z.white,t),formats:{color:{}}});const Ai=216/24389,xn=24/116,et=24389/27;let er=H.D50;var B=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:er,base:zr,fromBase(t){let r=t.map((n,o)=>n/er[o]).map(n=>n>Ai?Math.cbrt(n):(et*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>xn?Math.pow(e[0],3):(116*e[0]-16)/et,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/et,e[2]>xn?Math.pow(e[2],3):(116*e[2]-16)/et].map((n,o)=>n*er[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function It(t){return(t%360+360)%360}function Ti(t,e){if(t==="raw")return e;let[r,n]=e.map(It),o=n-r;return t==="increasing"?o<0&&(n+=360):t==="decreasing"?o>0&&(r+=360):t==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):t==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Ie=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:B,fromBase(t){let[e,r,n]=t,o;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),It(o)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Mn=25**7,Ct=Math.PI,An=180/Ct,me=Ct/180;function $r(t,e,{kL:r=1,kC:n=1,kH:o=1}={}){let[s,a,i]=B.from(t),l=Ie.from(B,[s,a,i])[1],[c,d,u]=B.from(e),h=Ie.from(B,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let m=((l+h)/2)**7,p=.5*(1-Math.sqrt(m/(m+Mn))),g=(1+p)*a,$=(1+p)*d,R=Math.sqrt(g**2+i**2),D=Math.sqrt($**2+u**2),N=g===0&&i===0?0:Math.atan2(i,g),Q=$===0&&u===0?0:Math.atan2(u,$);N<0&&(N+=2*Ct),Q<0&&(Q+=2*Ct),N*=An,Q*=An;let We=c-s,Je=D-R,U=Q-N,ke=N+Q,Fr=Math.abs(U),Ee;R*D===0?Ee=0:Fr<=180?Ee=U:U>180?Ee=U-360:U<-180?Ee=U+360:console.log("the unthinkable has happened");let Vr=2*Math.sqrt(D*R)*Math.sin(Ee*me/2),Ls=(s+c)/2,Ht=(R+D)/2,Ur=Math.pow(Ht,7),G;R*D===0?G=ke:Fr<=180?G=ke/2:ke<360?G=(ke+360)/2:G=(ke-360)/2;let Yr=(Ls-50)**2,Ns=1+.015*Yr/Math.sqrt(20+Yr),Xr=1+.045*Ht,_e=1;_e-=.17*Math.cos((G-30)*me),_e+=.24*Math.cos(2*G*me),_e+=.32*Math.cos((3*G+6)*me),_e-=.2*Math.cos((4*G-63)*me);let Zr=1+.015*Ht*_e,Bs=30*Math.exp(-1*((G-275)/25)**2),Os=2*Math.sqrt(Ur/(Ur+Mn)),zs=-1*Math.sin(2*Bs*me)*Os,Ke=(We/(r*Ns))**2;return Ke+=(Je/(n*Xr))**2,Ke+=(Vr/(o*Zr))**2,Ke+=zs*(Je/(n*Xr))*(Vr/(o*Zr)),Math.sqrt(Ke)}const Pi=75e-6;function Le(t,e=t.space,{epsilon:r=Pi}={}){t=w(t),e=b.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function De(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function oe(t,{method:e=Z.gamut_mapping,space:r=t.space}={}){if(Ze(arguments[1])&&(r=arguments[1]),r=b.get(r),Le(t,r,{epsilon:0}))return t;let n=O(t,r);if(e!=="clip"&&!Le(t,r)){let o=oe(De(n),{method:"clip",space:r});if($r(t,o)>2){let s=b.resolveCoord(e),a=s.space,i=s.id,l=O(n,a),d=(s.range||s.refRange)[0],u=.01,h=d,f=I(l,i);for(;f-h>u;){let m=De(l);m=oe(m,{space:r,method:"clip"}),$r(l,m)-2<u?h=I(l,i):f=I(l,i),ne(l,i,(h+f)/2)}n=O(l,r)}else n=o}if(e==="clip"||!Le(n,r,{epsilon:0})){let o=Object.values(r.coords).map(s=>s.range||[]);n.coords=n.coords.map((s,a)=>{let[i,l]=o[a];return i!==void 0&&(s=Math.max(i,s)),l!==void 0&&(s=Math.min(s,l)),s})}return r!==t.space&&(n=O(n,t.space)),t.coords=n.coords,t}oe.returns="color";function O(t,e,{inGamut:r}={}){t=w(t),e=b.get(e);let n=e.from(t),o={space:e,coords:n,alpha:t.alpha};return r&&(o=oe(o)),o}O.returns="color";function kt(t,{precision:e=Z.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let s;t=w(t);let a=r;r=t.space.getFormat(r)??t.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=t.coords;if(i=i.map(c=>c||0),n&&!Le(t)&&(i=oe(De(t),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=e,r.serialize)s=r.serialize(i,t.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,e):e!==null&&(i=i.map(f=>yt(f,e)));let d=[...i];if(c==="color"){let f=r.id||((l=r.ids)==null?void 0:l[0])||t.space.id;d.unshift(f)}let u=t.alpha;e!==null&&(u=yt(u,e));let h=t.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";s=`${c}(${d.join(r.commas?", ":" ")}${h})`}return s}const Ri=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Li=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Dt=new L({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Ri,fromXYZ_M:Li,formats:{color:{}}});const tt=1.09929682680944,Tn=.018053968510807;var es=new L({id:"rec2020",name:"REC.2020",base:Dt,toBase(t){return t.map(function(e){return e<Tn*4.5?e/4.5:Math.pow((e+tt-1)/tt,1/.45)})},fromBase(t){return t.map(function(e){return e>=Tn?tt*Math.pow(e,.45)-(tt-1):4.5*e})},formats:{color:{}}});const Ni=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Bi=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ts=new L({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ni,fromXYZ_M:Bi});const Oi=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],zi=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var rs=new L({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Oi,fromXYZ_M:zi,formats:{color:{}}}),Pn={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Rn=Array(3).fill("<percentage> | <number>[0, 255]"),Ln=Array(3).fill("<number>[0, 255]");var je=new L({id:"srgb",name:"sRGB",base:rs,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Rn},rgb_number:{name:"rgb",commas:!0,coords:Ln,noAlpha:!0},color:{},rgba:{coords:Rn,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ln},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(s=>Math.round(s*255));let n=r&&t.every(s=>s%17===0);return"#"+t.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=Pn.black,e.alpha=0):e.coords=Pn[t],e.coords)return e}}}}),ns=new L({id:"p3",name:"P3",base:ts,fromBase:je.fromBase,toBase:je.toBase,formats:{color:{id:"display-p3"}}});Z.display_space=je;if(typeof CSS<"u"&&CSS.supports)for(let t of[B,es,ns]){let e=t.getMinCoords(),n=kt({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){Z.display_space=t;break}}function Ii(t,{space:e=Z.display_space,...r}={}){let n=kt(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Z.display_space)n=new String(n),n.color=t;else{let o=O(t,e);n=new String(kt(o,r)),n.color=o}return n}function os(t,e,r="lab"){r=b.get(r);let n=r.from(t),o=r.from(e);return Math.sqrt(n.reduce((s,a,i)=>{let l=o[i];return isNaN(a)||isNaN(l)?s:s+(l-a)**2},0))}function Di(t,e){return t=w(t),e=w(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function se(t){return I(t,[z,"y"])}function ss(t,e){ne(t,[z,"y"],e)}function ji(t){Object.defineProperty(t.prototype,"luminance",{get(){return se(this)},set(e){ss(this,e)}})}var Hi=Object.freeze({__proto__:null,getLuminance:se,setLuminance:ss,register:ji});function Fi(t,e){t=w(t),e=w(e);let r=Math.max(se(t),0),n=Math.max(se(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Vi=.56,Ui=.57,Yi=.62,Xi=.65,Nn=.022,Zi=1.414,Gi=.1,qi=5e-4,Wi=1.14,Bn=.027,Ji=1.14;function On(t){return t>=Nn?t:t+(Nn-t)**Zi}function pe(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function Ki(t,e){e=w(e),t=w(t);let r,n,o,s,a,i;e=O(e,"srgb"),[s,a,i]=e.coords;let l=pe(s)*.2126729+pe(a)*.7151522+pe(i)*.072175;t=O(t,"srgb"),[s,a,i]=t.coords;let c=pe(s)*.2126729+pe(a)*.7151522+pe(i)*.072175,d=On(l),u=On(c),h=u>d;return Math.abs(u-d)<qi?n=0:h?(r=u**Vi-d**Ui,n=r*Wi):(r=u**Xi-d**Yi,n=r*Ji),Math.abs(n)<Gi?o=0:n>0?o=n-Bn:o=n+Bn,o*100}function Qi(t,e){t=w(t),e=w(e);let r=Math.max(se(t),0),n=Math.max(se(e),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const el=5e4;function tl(t,e){t=w(t),e=w(e);let r=Math.max(se(t),0),n=Math.max(se(e),0);return n>r&&([r,n]=[n,r]),n===0?el:(r-n)/n}function rl(t,e){t=w(t),e=w(e);let r=I(t,[B,"l"]),n=I(e,[B,"l"]);return Math.abs(r-n)}const nl=216/24389,zn=24/116,rt=24389/27;let tr=H.D65;var wr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:tr,base:z,fromBase(t){let r=t.map((n,o)=>n/tr[o]).map(n=>n>nl?Math.cbrt(n):(rt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>zn?Math.pow(e[0],3):(116*e[0]-16)/rt,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/rt,e[2]>zn?Math.pow(e[2],3):(116*e[2]-16)/rt].map((n,o)=>n*tr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const rr=Math.pow(5,.5)*.5+.5;function ol(t,e){t=w(t),e=w(e);let r=I(t,[wr,"l"]),n=I(e,[wr,"l"]),o=Math.abs(Math.pow(r,rr)-Math.pow(n,rr)),s=Math.pow(o,1/rr)*Math.SQRT2-40;return s<7.5?0:s}var ft=Object.freeze({__proto__:null,contrastWCAG21:Fi,contrastAPCA:Ki,contrastMichelson:Qi,contrastWeber:tl,contrastLstar:rl,contrastDeltaPhi:ol});function sl(t,e,r={}){Ze(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let s=Object.keys(ft).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}t=w(t),e=w(e);for(let s in ft)if("contrast"+n.toLowerCase()===s.toLowerCase())return ft[s](t,e,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function as(t){let[e,r,n]=Ge(t,z),o=e+15*r+3*n;return[4*e/o,9*r/o]}function is(t){let[e,r,n]=Ge(t,z),o=e+r+n;return[e/o,r/o]}function al(t){Object.defineProperty(t.prototype,"uv",{get(){return as(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return is(this)}})}var il=Object.freeze({__proto__:null,uv:as,xy:is,register:al});function ll(t,e){return os(t,e,"lab")}const cl=Math.PI,In=cl/180;function ul(t,e,{l:r=2,c:n=1}={}){let[o,s,a]=B.from(t),[,i,l]=Ie.from(B,[o,s,a]),[c,d,u]=B.from(e),h=Ie.from(B,[c,d,u])[1];i<0&&(i=0),h<0&&(h=0);let f=o-c,m=i-h,p=s-d,g=a-u,$=p**2+g**2-m**2,R=.511;o>=16&&(R=.040975*o/(1+.01765*o));let D=.0638*i/(1+.0131*i)+.638,N;Number.isNaN(l)&&(l=0),l>=164&&l<=345?N=.56+Math.abs(.2*Math.cos((l+168)*In)):N=.36+Math.abs(.4*Math.cos((l+35)*In));let Q=Math.pow(i,4),We=Math.sqrt(Q/(Q+1900)),Je=D*(We*N+1-We),U=(f/(r*R))**2;return U+=(m/(n*D))**2,U+=$/Je**2,Math.sqrt(U)}const Dn=203;var Ir=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:z,fromBase(t){return t.map(e=>Math.max(e*Dn,0))},toBase(t){return t.map(e=>Math.max(e/Dn,0))}});const nt=1.15,ot=.66,jn=2610/2**14,dl=2**14/2610,Hn=3424/2**12,Fn=2413/2**7,Vn=2392/2**7,hl=1.7*2523/2**5,Un=2**5/(1.7*2523),st=-.56,nr=16295499532821565e-27,fl=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ml=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],pl=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],gl=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ls=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ir,fromBase(t){let[e,r,n]=t,o=nt*e-(nt-1)*n,s=ot*r-(ot-1)*e,i=S(fl,[o,s,n]).map(function(h){let f=Hn+Fn*(h/1e4)**jn,m=1+Vn*(h/1e4)**jn;return(f/m)**hl}),[l,c,d]=S(pl,i);return[(1+st)*l/(1+st*l)-nr,c,d]},toBase(t){let[e,r,n]=t,o=(e+nr)/(1+st-st*(e+nr)),a=S(gl,[o,r,n]).map(function(h){let f=Hn-h**Un,m=Vn*h**Un-Fn;return 1e4*(f/m)**dl}),[i,l,c]=S(ml,a),d=(i+(nt-1)*c)/nt,u=(l+(ot-1)*d)/ot;return[d,u,c]},formats:{color:{}}}),Cr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ls,fromBase(t){let[e,r,n]=t,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),It(o)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]},formats:{color:{}}});function bl(t,e){let[r,n,o]=Cr.from(t),[s,a,i]=Cr.from(e),l=r-s,c=n-a;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let d=o-i,u=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const cs=3424/4096,us=2413/128,ds=2392/128,Yn=2610/16384,vl=2523/32,yl=16384/2610,Xn=32/2523,$l=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],wl=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Cl=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],kl=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var kr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ir,fromBase(t){let e=S($l,t);return El(e)},toBase(t){let e=_l(t);return S(kl,e)},formats:{color:{}}});function El(t){let e=t.map(function(r){let n=cs+us*(r/1e4)**Yn,o=1+ds*(r/1e4)**Yn;return(n/o)**vl});return S(wl,e)}function _l(t){return S(Cl,t).map(function(n){let o=Math.max(n**Xn-cs,0),s=us-ds*n**Xn;return 1e4*(o/s)**yl})}function Sl(t,e){let[r,n,o]=kr.from(t),[s,a,i]=kr.from(e);return 720*Math.sqrt((r-s)**2+.25*(n-a)**2+(o-i)**2)}const xl=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Ml=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Al=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Tl=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Et=new b({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:z,fromBase(t){let r=S(xl,t).map(n=>Math.cbrt(n));return S(Al,r)},toBase(t){let r=S(Tl,t).map(n=>n**3);return S(Ml,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Pl(t,e){let[r,n,o]=Et.from(t),[s,a,i]=Et.from(e),l=r-s,c=n-a,d=o-i;return Math.sqrt(l**2+c**2+d**2)}var Er=Object.freeze({__proto__:null,deltaE76:ll,deltaECMC:ul,deltaE2000:$r,deltaEJz:bl,deltaEITP:Sl,deltaEOK:Pl});function Ae(t,e,r={}){Ze(r)&&(r={method:r});let{method:n=Z.deltaE,...o}=r;t=w(t),e=w(e);for(let s in Er)if("deltae"+n.toLowerCase()===s.toLowerCase())return Er[s](t,e,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Rl(t,e=.25){let n=[b.get("oklch","lch"),"l"];return ne(t,n,o=>o*(1+e))}function Ll(t,e=.25){let n=[b.get("oklch","lch"),"l"];return ne(t,n,o=>o*(1-e))}var Nl=Object.freeze({__proto__:null,lighten:Rl,darken:Ll});function hs(t,e,r=.5,n={}){[t,e]=[w(t),w(e)],ee(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:s,premultiplied:a}=n;return qe(t,e,{space:o,outputSpace:s,premultiplied:a})(r)}function fs(t,e,r={}){let n;Dr(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:a=2,maxSteps:i=1e3,...l}=r;n||([t,e]=[w(t),w(e)],n=qe(t,e,l));let c=Ae(t,e),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,u=[];if(i!==void 0&&(d=Math.min(d,i)),d===1)u=[{p:.5,color:n(.5)}];else{let h=1/(d-1);u=Array.from({length:d},(f,m)=>{let p=m*h;return{p,color:n(p)}})}if(o>0){let h=u.reduce((f,m,p)=>{if(p===0)return 0;let g=Ae(m.color,u[p-1].color,s);return Math.max(f,g)},0);for(;h>o;){h=0;for(let f=1;f<u.length&&u.length<i;f++){let m=u[f-1],p=u[f],g=(p.p+m.p)/2,$=n(g);h=Math.max(h,Ae($,m.color),Ae($,p.color)),u.splice(f,0,{p:g,color:n(g)}),f++}}}return u=u.map(h=>h.color),u}function qe(t,e,r={}){if(Dr(t)){let[l,c]=[t,e];return qe(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:s,premultiplied:a}=r;t=w(t),e=w(e),t=De(t),e=De(e);let i={colors:[t,e],options:r};if(n?n=b.get(n):n=b.registry[Z.interpolationSpace]||t.space,o=o?b.get(o):n,t=O(t,n),e=O(e,n),t=oe(t),e=oe(e),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[I(t,c),I(e,c)];[d,u]=Ti(l,[d,u]),ne(t,c,d),ne(e,c,u)}return a&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=s?s(l):l;let c=t.coords.map((h,f)=>{let m=e.coords[f];return $t(h,m,l)}),d=$t(t.alpha,e.alpha,l),u={space:n,coords:c,alpha:d};return a&&(u.coords=u.coords.map(h=>h/d)),o!==n&&(u=O(u,o)),u},{rangeArgs:i})}function Dr(t){return ee(t)==="function"&&!!t.rangeArgs}Z.interpolationSpace="lab";function Bl(t){t.defineFunction("mix",hs,{returns:"color"}),t.defineFunction("range",qe,{returns:"function<color>"}),t.defineFunction("steps",fs,{returns:"array<color>"})}var Ol=Object.freeze({__proto__:null,mix:hs,steps:fs,range:qe,isRange:Dr,register:Bl}),ms=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:je,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,o,s]=t,[a,i,l]=[NaN,0,(r+e)/2],c=e-r;if(c!==0){switch(i=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:a=(o-s)/c+(o<s?6:0);break;case o:a=(s-n)/c+2;break;case s:a=(n-o)/c+4}a=a*60}return[a,i*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function o(s){let a=(s+e/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ps=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:ms,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[e,o===0?0:200*(1-n/o),100*o]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n*(1-r/2);return[e,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),zl=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ps,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[e,0,i*100]}let s=1-n,a=s===0?0:1-r/s;return[e,a*100,s*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Il=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Dl=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var gs=new L({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Il,fromXYZ_M:Dl}),jl=new L({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:gs,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e)),formats:{color:{id:"a98-rgb"}}});const Hl=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Fl=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var bs=new L({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:zr,toXYZ_M:Hl,fromXYZ_M:Fl});const Vl=1/512,Ul=16/512;var Yl=new L({id:"prophoto",name:"ProPhoto",base:bs,toBase(t){return t.map(e=>e<Ul?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=Vl?e**(1/1.8):16*e)},formats:{color:{id:"prophoto-rgb"}}}),Xl=new b({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Et,fromBase(t){let[e,r,n]=t,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),It(o)]},toBase(t){let[e,r,n]=t,o,s;return isNaN(n)?(o=0,s=0):(o=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[e,o,s]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Zn=203,Gn=2610/2**14,Zl=2**14/2610,Gl=2523/2**5,qn=2**5/2523,Wn=3424/2**12,Jn=2413/2**7,Kn=2392/2**7;var ql=new L({id:"rec2100pq",name:"REC.2100-PQ",base:Dt,toBase(t){return t.map(function(e){return(Math.max(e**qn-Wn,0)/(Jn-Kn*e**qn))**Zl*1e4/Zn})},fromBase(t){return t.map(function(e){let r=Math.max(e*Zn/1e4,0),n=Wn+Jn*r**Gn,o=1+Kn*r**Gn;return(n/o)**Gl})},formats:{color:{id:"rec2100-pq"}}});const Qn=.17883277,eo=.28466892,to=.55991073,or=3.7743;var Wl=new L({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Dt,toBase(t){return t.map(function(e){return e<=.5?e**2/3*or:Math.exp((e-to)/Qn+eo)/12*or})},fromBase(t){return t.map(function(e){return e/=or,e<=1/12?Math.sqrt(3*e):Qn*Math.log(12*e-eo)+to})},formats:{color:{id:"rec2100-hlg"}}});const vs={};re.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=ys(t.W1,t.W2,t.options.method))});re.add("chromatic-adaptation-end",t=>{t.M||(t.M=ys(t.W1,t.W2,t.options.method))});function jt({id:t,toCone_M:e,fromCone_M:r}){vs[t]=arguments[0]}function ys(t,e,r="Bradford"){let n=vs[r],[o,s,a]=S(n.toCone_M,t),[i,l,c]=S(n.toCone_M,e),d=[[i/o,0,0],[0,l/s,0],[0,0,c/a]],u=S(d,n.toCone_M);return S(n.fromCone_M,u)}jt({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});jt({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});jt({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});jt({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(H,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});H.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Jl=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Kl=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var $s=new L({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:H.ACES,toXYZ_M:Jl,fromXYZ_M:Kl,formats:{color:{}}});const at=2**-16,sr=-.35828683,it=(Math.log2(65504)+9.72)/17.52;var Ql=new L({id:"acescc",name:"ACEScc",coords:{r:{range:[sr,it],name:"Red"},g:{range:[sr,it],name:"Green"},b:{range:[sr,it],name:"Blue"}},referred:"scene",base:$s,toBase(t){const e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-at)*2:r<it?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(at)+9.72)/17.52:e<at?(Math.log2(at+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})},formats:{color:{}}}),ro=Object.freeze({__proto__:null,XYZ_D65:z,XYZ_D50:zr,XYZ_ABS_D65:Ir,Lab_D65:wr,Lab:B,LCH:Ie,sRGB_Linear:rs,sRGB:je,HSL:ms,HWB:zl,HSV:ps,P3_Linear:ts,P3:ns,A98RGB_Linear:gs,A98RGB:jl,ProPhoto_Linear:bs,ProPhoto:Yl,REC_2020_Linear:Dt,REC_2020:es,OKLab:Et,OKLCH:Xl,Jzazbz:ls,JzCzHz:Cr,ICTCP:kr,REC_2100_PQ:ql,REC_2100_HLG:Wl,ACEScg:$s,ACEScc:Ql}),ue;const A=class{constructor(...e){Se(this,ue,void 0);let r;e.length===1&&(r=w(e[0]));let n,o,s;r?(n=r.space||r.spaceId,o=r.coords,s=r.alpha):[n,o,s]=e,Ut(this,ue,b.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=s<1?s:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in fe(this,ue).coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:i=>this.set(a,i)})}get space(){return fe(this,ue)}get spaceId(){return fe(this,ue).id}clone(){return new A(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=Ii(this,...e);return r.color=new A(r.color),r}static get(e,...r){return e instanceof A?e:new A(e,...r)}static defineFunction(e,r,n=r){let{instance:o=!0,returns:s}=n,a=function(...i){let l=r(...i);if(s==="color")l=A.get(l);else if(s==="function<color>"){let c=l;l=function(...d){let u=c(...d);return A.get(u)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>A.get(c)));return l};e in A||(A[e]=a),o&&(A.prototype[e]=function(...i){return a(this,...i)})}static defineFunctions(e){for(let r in e)A.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(A);else for(let r in e)A.defineFunction(r,e[r])}};let C=A;ue=new WeakMap;C.defineFunctions({get:I,getAll:Ge,set:ne,setAll:Qo,to:O,equals:Di,inGamut:Le,toGamut:oe,distance:os,toString:kt});Object.assign(C,{util:Si,hooks:re,WHITES:H,Space:b,spaces:b.registry,parse:Ko,defaults:Z});for(let t of Object.keys(ro))b.register(ro[t]);for(let t in b.registry)_r(t,b.registry[t]);re.add("colorspace-init-end",t=>{var e;_r(t.id,t),(e=t.aliases)==null||e.forEach(r=>{_r(r,t)})});function _r(t,e){Object.keys(e.coords),Object.values(e.coords).map(n=>n.name);let r=t.replace(/-/g,"_");Object.defineProperty(C.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,s)=>{try{return b.resolveCoord([e,s]),!0}catch{}return Reflect.has(o,s)},get:(o,s,a)=>{if(s&&typeof s!="symbol"&&!(s in o)){let{index:i}=b.resolveCoord([e,s]);if(i>=0)return o[i]}return Reflect.get(o,s,a)},set:(o,s,a,i)=>{if(s&&typeof s!="symbol"&&!(s in o)||s>=0){let{index:l}=b.resolveCoord([e,s]);if(l>=0)return o[l]=a,this.setAll(t,o),!0}return Reflect.set(o,s,a,i)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}C.extend(Er);C.extend({deltaE:Ae});C.extend(Nl);C.extend({contrast:sl});C.extend(il);C.extend(Hi);C.extend(Ol);C.extend(ft);function ws(t){return Pt(t,(e,r)=>r instanceof C?M(r.toString({format:"hex"})):ws(r))}const ec="dodgerblue";function Sr(t){const e=Math.abs(t.contrast("white","APCA")),r=Math.abs(t.contrast("black","APCA"));return e>r?"white":"black"}function ar({background:t,foreground:e}){return{background:t??new C(Sr(e)),foreground:e??new C(Sr(t))}}var _t;(function(t){t.Dark="dark",t.Light="light"})(_t||(_t={}));function tc(t){return t==="black"?"white":"black"}const rc={black:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")},white:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")}},nc={black:{backgroundFaint1:new C("#666"),backgroundFaint2:new C("#444")},white:{backgroundFaint1:new C("#ccc"),backgroundFaint2:new C("#fafafa")}};function no({themeColor:t=ec,themeStyle:e=_t.Light}={}){const r=new C(t),n=new C(e===_t.Dark?"black":"white"),o=Sr(n),s=new C(o),a={nav:{hover:ar({background:r.clone().set({"hsl.l":93})}),active:ar({background:r.clone().set({"hsl.l":90})}),selected:ar({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...nc[tc(o)],foreground:s,...rc[o]}};return ws(a)}const St=Nr()("element-book-change-route"),xr=K({"vir-icon-color":"currentColor"}),oc=K({"vir-icon-stroke-color":xr["vir-icon-color"].value,"vir-icon-fill-color":xr["vir-icon-color"].value}),ir={...xr,...oc};function Cs({name:t,svgTemplate:e}){return{name:t,templateString:typeof e=="string"?e:pr(e)}}const te=Br()({tagName:"vir-icon",hostClasses:{"vir-icon-fit-icon":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>k`
        :host {
            display: block;
            color: ${ir["vir-icon-color"].value};
            fill: ${ir["vir-icon-fill-color"].value};
            stroke: ${ir["vir-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${t["vir-icon-fit-icon"].name} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t})=>t.icon?va(t.icon.templateString):""}),sc=Cs({name:"Element16Icon",svgTemplate:v`
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
    `}),{defineElement:ae,defineElementNoInputs:Rc}=Mo(),T=ae()({tagName:"element-book-route-link",cssVars:{"element-book-route-link-anchor-padding":""},styles:({cssVars:t})=>k`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${t["element-book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t,dispatch:e})=>{var n,o;const r=((o=t.router)==null?void 0:o.createRoutesUrl({...(n=t.router)==null?void 0:n.getCurrentRawRoutes(),...t.route}))??"#";return v`
            <a
                href=${r}
                ${Ye("click",s=>{(!t.router||ui(s))&&(s.preventDefault(),window.scrollTo(0,0),e(new St(t.route)))})}
            >
                <slot></slot>
            </a>
        `}}),lt=ae()({tagName:"element-book-nav",styles:k`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${y["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${y["element-book-nav-hover-background-color"].value};
            color: ${y["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${y["element-book-nav-active-background-color"].value};
            color: ${y["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${T.cssVars["element-book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * var(--indent, 0)) + 8px);
        }

        ${T} {
            font-size: 20px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${y["element-book-nav-selected-background-color"].value};
            color: ${y["element-book-nav-selected-foreground-color"].value};
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

        ${te} {
            display: inline-flex;
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){const e=ks({indent:0,entryTreeNode:t.tree,rootPath:[],router:t.router,selectedPath:t.selectedPath.slice(1)});return v`
            <ul>
                ${e}
            </ul>
        `}});function ks({indent:t,entryTreeNode:e,rootPath:r,selectedPath:n,router:o}){const s=e.breadcrumb?r.concat(e.breadcrumb):r,a=e.entry.entryType===X.Page,i=Object.values(e.children).map(l=>ks({indent:t+1,entryTreeNode:l,rootPath:s,selectedPath:n,router:o}));return v`
        <div class="nav-tree-entry" style="--indent: ${t};">
            <slot name=${W.NavHeader}></slot>
            <li class=${e.entry.entryType}>
                <${T}
                    ${_(T,{router:o,route:{paths:[P.Book,...s]}})}
                    class=${ga({"title-row":!0,selected:Te(n,s)})}
                >
                    <div class="title-text">
                        ${Ot(a,v`
                                <${te} ${_(te,{icon:sc})}></${te}>
                            `)}
                        ${e.entry.title}
                    </div>
                </${T}>
            </li>
            ${i}
        </div>
    `}const ac=Cs({name:"Element24Icon",svgTemplate:v`
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
    `}),lr=ae()({tagName:"element-book-breadcrumbs",styles:k`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.currentRoute.paths.slice(1);return e.length?e.map((r,n,o)=>{const s=n>=o.length-1,a=o.slice(0,n+1),i=s?"":v`
                      <span class="spacer">&gt;</span>
                  `;return v`
                <${T}
                    ${_(T,{route:{hash:void 0,search:void 0,paths:[P.Book,...a]},router:t.router})}
                >
                    ${r}
                </${T}>
                ${i}
            `}):v`
                &nbsp;
            `}}),xt=Symbol("unset-internal-state");v`
    &nbsp;
`;const ct=ae()({tagName:"element-book-example-controls",styles:k`
        :host {
            display: flex;
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:t}){return v`
            <span>
                ${t.example.title}
                <span></span>
            </span>
        `}}),cr=ae()({tagName:"element-book-example-viewer",stateInitStatic:{isUnset:xt},renderCallback({state:t,inputs:e,updateState:r}){if(!e.example.renderCallback||typeof e.example.renderCallback=="string")throw new Error(`Failed to render example '${e.example.title}': renderCallback is not a function`);t.isUnset===xt&&r({isUnset:void 0,...e.example.stateInitStatic});try{const n=e.example.renderCallback({state:t,updateState:r,controls:e.currentPageControls});return v`
                ${Ot(!!e.example.styles,v`
                        <style>
                            ${e.example.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),`${e.breadcrumbs.join(" > ")} failed: ${Tt(n)}`}},options:{allowPolymorphicState:!0}}),ut=ae()({tagName:"element-book-page-controls",events:{controlValueChange:xo()},styles:k`
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
    `,renderCallback({inputs:t,dispatch:e,events:r}){return Object.entries(t.config).map(([n,o])=>{const s=ic(t.currentValues[n],o.controlType,a=>{e(new r.controlValueChange({name:n,value:a}))});return v`
                    <label class="control-wrapper">
                        <span>${n}</span>
                        ${s}
                    </label>
                `})}});function ic(t,e,r){return e===Y.Text?v`
            <input
                type="text"
                .value=${t}
                ${Ye("input",n=>{const o=n.currentTarget;if(!(o instanceof HTMLInputElement))throw new Error("Din't get an input element from the event target.");r(o.value)})}
            />
        `:v`
            <p class="error">${e} controls are not implemented yet.</p>
        `}const ur=ae()({tagName:"element-book-page-examples",styles:k`
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

        .individual-example-wrapper:hover ${ct} {
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,stateInitStatic:{unset:xt},renderCallback({inputs:t,state:e,updateState:r}){if(e.unset===xt){const s=Pt(t.page.controls,(a,i)=>i.initValue);r({unset:void 0,...s})}const n=t.page.examples,o=ba(Object.values(n),s=>t.parentBreadcrumbs.concat(s instanceof Error?s.message:s.title).join(">"),s=>{if(s instanceof Error)return v`
                        <p class="error">${s.message}</p>
                    `;const a=t.parentBreadcrumbs.concat(s.title);return v`
                    <div class="individual-example-wrapper">
                        <${ct}
                            ${_(ct,{example:s})}
                        ></${ct}>
                        <${cr}
                            ${_(cr,{example:s,breadcrumbs:a,currentPageControls:e})}
                        ></${cr}>
                    </div>
                `});return v`
            ${Ot(!!Object.keys(t.page.controls).length,v`
                    <${ut}
                        ${_(ut,{config:t.page.controls,currentValues:e})}
                        ${Ye(ut.events.controlValueChange,s=>{r({[s.detail.name]:s.detail.value})})}
                    ></${ut}>
                `)}
            <section class="examples-wrapper">${o}</section>
        `},options:{allowPolymorphicState:!0}}),ge=ae()({tagName:"element-book-entry-display",styles:k`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${y["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${y["element-book-page-background-color"].value};
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

        ${T} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${te} {
            color: ${y["element-book-accent-icon-color"].value};
        }

        .page-examples .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }

        .description {
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        .description:hover {
            color: ${y["element-book-page-foreground-color"].value};
        }

        .description p {
            margin: 0;
            padding: 0;
        }

        .description p:first-child {
            margin-top: 8px;
        }
    `,renderCallback:({inputs:t,dispatch:e})=>{const r=_s(t.currentNode),n=Yo(t.currentRoute.paths),o=Rt(t.currentNode.entry,!1).reverse(),s=Es({nestedPages:r,parentBreadcrumbs:o,isTopLevel:!0,router:t.router,isSearching:!!n});return v`
            <div class="title-bar">
                ${Ot(!!n,v`
                        &nbsp;
                    `,v`
                        <${lr}
                            ${_(lr,{currentRoute:t.currentRoute,router:t.router})}
                        ></${lr}>
                    `)}
                <input
                    placeholder="search"
                    .value=${n}
                    ${Ye("input",async a=>{const i=a.currentTarget;if(!(i instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const l=i.value;await ta(500),i.value===l&&(i.value?e(new St({paths:[P.Search,encodeURIComponent(i.value)]})):e(new St(zt)))})}
                />
            </div>
            <div class="all-examples-wrapper">${s}</div>
            <slot name=${W.Footer}></slot>
        `}});function Es({nestedPages:t,parentBreadcrumbs:e,isTopLevel:r,router:n,isSearching:o}){return!t.length&&o?[v`
                No results
            `]:t.map(s=>{if(oi(s,X.Page)){const a=s.entry;if(!oa(a,X.Page))throw new Error("nested entry should be a page");const i=v`
                    <${te} ${_(te,{icon:ac})}></${te}>
                    ${a.title}
                `,l=r?v`
                          <h2 class="header-with-icon">${i}</h2>
                      `:v`
                          <h3 class="header-with-icon">${i}</h3>
                      `,c=[P.Book,...e.concat(s.breadcrumb)];return v`
                    <div class="page-examples">
                        <div class="title-group">
                            <${T}
                                ${_(T,{route:{paths:c,hash:void 0,search:void 0},router:n})}
                            >
                                ${l}
                            </${T}>
                            ${oo(a)}
                        </div>
                        <${ur}
                            ${_(ur,{page:a,parentBreadcrumbs:e})}
                        ></${ur}>
                    </div>
                `}else return Object.entries(s).map(([a,i])=>{const l=r?v`
                                  <h1>${a}</h1>
                              `:v`
                                  <h2>${a}</h2>
                              `,c=[P.Book,...e.concat(i.node.breadcrumb)];return v`
                            <div class="title-group">
                                <${T}
                                    ${_(T,{route:{paths:c,hash:void 0,search:void 0},router:n})}
                                >
                                    ${l}
                                </${T}>
                                ${oo(i.node.entry)}
                            </div>
                            ${Es({nestedPages:i.nested,parentBreadcrumbs:i.node.breadcrumb?e.concat(i.node.breadcrumb):e,isTopLevel:!1,router:n,isSearching:o})}
                        `})}).flat()}function oo(t){const e=(t.descriptionParagraphs??[]).map(r=>v`
            <p>${r}</p>
        `);return v`
        <div class="description">${e}</div>
    `}function _s(t){return t.entry.entryType===X.Page?[t]:[{[t.entry.title]:{node:t,nested:Object.values(t.children).map(_s).flat()}}]}function lc(t,e,r){if(e[0]===P.Search)return t;gr(e.slice(1),t)||r(zt);const o=gr(e.slice(1),t);if(!o)throw new Error(`Tried to self-correct for invalid path ${e.join("/")}
                        but failed to do so.`);return o}const dt=Br()({tagName:"element-book-app",events:{pathUpdate:xo()},stateInitStatic:{currentRoute:zt,router:void 0,colors:{config:void 0,theme:no(void 0)}},styles:k`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${y["element-book-page-background-color"].value};
            color: ${y["element-book-page-foreground-color"].value};
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

        ${ge} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${lt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,cleanupCallback({state:t,updateState:e}){t.router&&(t.router.removeAllRouteListeners(),e({router:void 0}))},renderCallback:({state:t,inputs:e,host:r,updateState:n,dispatch:o,events:s})=>{var i,l,c;try{let d=function(g){t.router?t.router.setRoutes(g):n({currentRoute:{...t.currentRoute,...g}}),e.elementBookRoutePaths&&!Te(e.elementBookRoutePaths,t.currentRoute.paths)&&o(new s.pathUpdate(g.paths??[]))};var a=d;if(e.elementBookRoutePaths&&!Te(e.elementBookRoutePaths,t.currentRoute.paths)&&d({paths:e.elementBookRoutePaths}),(i=e.internalRouterConfig)!=null&&i.useInternalRouter&&!t.router){const g=Ci(e.internalRouterConfig.basePath);n({router:g}),g.addRouteListener(!0,$=>{n({currentRoute:$})})}else!((l=e.internalRouterConfig)!=null&&l.useInternalRouter)&&t.router&&t.router.removeAllRouteListeners();const u={themeColor:e.themeColor};if(!Te(u,(c=t.colors)==null?void 0:c.config)){const g=no(u);n({colors:{config:u,theme:g}}),_i(r,g)}const h=si(e.entries,e.everythingTitle),f=Yo(t.currentRoute.paths),m=f?li({entries:e.entries,searchQuery:f,startTree:h}):h,p=lc(m,t.currentRoute.paths,d);return v`
                <div
                    class="root"
                    ${Ye(St,g=>{const $=r.shadowRoot.querySelector(ge.tagName);$?$.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${ge.tagName}' for scrolling.`),d(g.detail)})}
                >
                    <${lt}
                        ${_(lt,{tree:h,router:t.router,selectedPath:t.currentRoute.paths})}
                    >
                        <slot
                            name=${W.NavHeader}
                            slot=${W.NavHeader}
                        ></slot>
                    </${lt}>
                    <${ge}
                        ${_(ge,{currentRoute:t.currentRoute,currentNode:p,router:t.router})}
                    >
                        <slot
                            name=${W.Footer}
                            slot=${W.Footer}
                        ></slot>
                    </${ge}>
                </div>
            `}catch(d){return console.error(d),v`
                <p class="error">${Tt(d)}</p>
            `}}}),jr=At({title:"Elements",parent:void 0}),cc=k`
    pointer-events: none;
    opacity: 0.3;
`,dr=K({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function uc(t){return`${t}px`}const Ss=K({"vira-focus-outline-color":"blue"});function dc({mainSelector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=3}){const o=M(uc(n+r+e));return k`
        ${M(t)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Ss["vira-focus-outline-color"].value};
            border-radius: 12px;
            z-index: 100;
        }
    `}const hc=k`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,fc=k`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,so="vira-",{defineElement:xs,defineElementNoInputs:Lc}=Mo({assertInputs:t=>{if(!t.tagName.startsWith(so))throw new Error(`Tag name should start with '${so}' but got '${t.tagName}'`)}}),Mr=K({"vira-icon-color":"currentColor"}),mc=K({"vira-icon-stroke-color":Mr["vira-icon-color"].value,"vira-icon-fill-color":Mr["vira-icon-color"].value}),ve={...Mr,...mc},F=xs()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>k`
        :host {
            display: inline-block;
            color: ${ve["vira-icon-color"].value};
            fill: ${ve["vira-icon-fill-color"].value};
            stroke: ${ve["vira-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${t["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t})=>t.icon?t.icon.svgTemplate:""});var Ms=(t=>(t.Default="vira-button-default",t.Outline="vira-button-outline",t))(Ms||{});const x=xs()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>k`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${fc};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${Ss["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-active-color"].value};
        }

        ${t["vira-button-disabled"].selector} {
            ${cc};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${hc};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: 5px 10px;
            transition: color ${dr["vira-interaction-animation-duration"].value},
                background-color
                    ${dr["vira-interaction-animation-duration"].value},
                border-color ${dr["vira-interaction-animation-duration"].value};
        }

        ${dc({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        button ${F} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?v`
                  <${F}
                      ${_(F,{icon:t.icon})}
                  ></${F}>
              `:"",r=t.text?v`
                  <span class="text-template">${t.text}</span>
              `:"";return v`
            <button>${e} ${r}</button>
        `}}),Hr=At({parent:jr,title:"Button"}),pc=Lt({parent:Hr,title:x.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:Y.Text,initValue:""},"Secondary color":{controlType:Y.Text,initValue:""},"Hover color":{controlType:Y.Text,initValue:""},"Active color":{controlType:Y.Text,initValue:""}},defineExamplesCallback({defineExample:t}){function e({title:r,styles:n,inputs:o}){const s=n??k``;t({title:r,styles:s,renderCallback({controls:a}){const i=k`
                        ${x.cssVars["vira-button-primary-color"].name}: ${M(a["Primary color"]||"inherit")};
                        ${x.cssVars["vira-button-secondary-color"].name}: ${M(a["Secondary color"]||"inherit")};
                        ${x.cssVars["vira-button-primary-hover-color"].name}: ${M(a["Hover color"]||"inherit")};
                        ${x.cssVars["vira-button-primary-active-color"].name}: ${M(a["Active color"]||"inherit")};
                    `;return v`
                        <${x}
                            style=${i}
                            ${_(x,{text:"hello",...o})}
                        ></${x}>
                    `}})}e({title:"basic"}),e({title:"outline",inputs:{buttonStyle:Ms.Outline}}),e({title:"disabled",inputs:{disabled:!0}}),e({title:"custom width",styles:k`
                ${x} {
                    width: 100px;
                }
            `}),e({title:"custom height",styles:k`
                ${x} {
                    height: 75px;
                }
            `})}}),gc=Lt({parent:Hr,title:"with custom colors",descriptionParagraphs:["These are not necessarily GOOD color combinations, but they are custom!"],defineExamplesCallback({defineExample:t}){t({title:"custom colors",styles:k`
                :host {
                    ${x.cssVars["vira-button-primary-color"].name}: pink;
                    ${x.cssVars["vira-button-secondary-color"].name}: purple;
                    ${x.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${x.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return v`
                    <${x}
                        ${_(x,{text:"hello"})}
                    ></${x}>
                `}})}}),bc=[Hr,pc,gc];function As({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}const vc=As({name:"Element16Icon",svgTemplate:v`
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
    `}),Ts=As({name:"Element24Icon",svgTemplate:v`
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
    `}),yc={Element16Icon:vc,Element24Icon:Ts},Ps=At({title:"Icon",parent:jr}),$c=Lt({title:F.tagName,parent:Ps,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],defineExamplesCallback({defineExample:t}){t({title:"basic",renderCallback(){return v`
                    <${F} ${_(F,{icon:Ts})}></${F}>
                `}})}}),wc=[Ps,$c],Rs=At({parent:void 0,title:"Icons"}),Cc=Lt({title:"All Icons",parent:Rs,controls:{"Icon Color":{controlType:Y.Text,initValue:""},"Stroke Color":{controlType:Y.Text,initValue:""},"Fill Color":{controlType:Y.Text,initValue:""}},defineExamplesCallback({defineExample:t}){Object.values(yc).forEach(e=>{t({title:e.name,renderCallback({controls:r}){const n=k`
                        ${ve["vira-icon-color"].name}: ${M(r["Icon Color"]||"inherit")};
                        ${ve["vira-icon-fill-color"].name}: ${M(r["Fill Color"]||"inherit")};
                        ${ve["vira-icon-stroke-color"].name}: ${M(r["Stroke Color"]||"inherit")};
                    `;return v`
                        <${F} style=${n} ${_(F,{icon:e})}></${F}>
                    `}})})}}),kc=[Rs,Cc],Ec=[jr,...kc,...bc,...wc];Bt({tagName:"vira-book-app",styles:k`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${dt} {
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
            <${dt}
                ${_(dt,{internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Ec,themeColor:"#33ccff"})}
            >
                <h1 slot=${W.NavHeader}>Vira</h1>
            </${dt}>
        `}});
