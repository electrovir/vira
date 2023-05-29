var rs=Object.defineProperty;var ns=(t,e,r)=>e in t?rs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Kt=(t,e,r)=>(ns(t,typeof e!="symbol"?e+"":e,r),r),Qt=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var be=(t,e,r)=>(Qt(t,e,"read from private field"),r?r.call(t):e.get(t)),Ne=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},er=(t,e,r,n)=>(Qt(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);var ct=(t,e,r)=>(Qt(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var G;(function(t){t.Chapter="chapter",t.Page="page",t.Root="root"})(G||(G={}));function Ee(t){return t.title?{entryType:G.Chapter,...t}:new Error("Cannot have an element-book chapter with an empty title.")}function wo(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const os={capitalizeFirstLetter:!1};function as(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function ss(t,e){return e.capitalizeFirstLetter?as(t):t}function is(t,e=os){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return ss(n,e)}const ls=["january","february","march","april","may","june","july","august","september","october","november","december"];ls.map(t=>t.slice(0,3));function cs(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(r=>Ht(r).trim()).join(`
`))}function Ht(t){return t?t instanceof Error?t.message:String(t):""}function Co(t){return t instanceof Error?t:new Error(Ht(t))}function us(t){return!!t}function sn(t){return!!t&&typeof t=="object"}const ln="Failed to compare objects using JSON.stringify";function cn(t,e){return JSON.stringify(t)===JSON.stringify(e)}function De(t,e){try{return t===e?!0:sn(t)&&sn(e)?cn(Object.keys(t).sort(),Object.keys(e).sort())?Object.keys(t).every(n=>De(t[n],e[n])):!1:cn(t,e)}catch(r){const n=Co(r);throw n.message.startsWith(ln)||(n.message=`${ln}: ${n.message}`),n}}const ds=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function _e(t,e){return t?ds.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Vr(t,e){return t&&e.every(r=>_e(t,r))}function te(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function hs(t){return Array.isArray(t)?"array":typeof t}function fs(t,e){return hs(t)===e}function ps(t,e,r){const n=e;if(t.has(n))return t.get(n);{const o=r();return t.set(n,o),o}}function ms(t){return te(t).filter(e=>isNaN(Number(e)))}function gs(t){return ms(t).map(r=>t[r])}function bs(t,e){return gs(e).includes(t)}function vs(t,e){return te(t).filter(n=>{const o=t[n];return e(n,o,t)}).reduce((n,o)=>(n[o]=t[o],n),{})}function Vt(t,e){let r=!1;const n=te(t).reduce((o,a)=>{const s=e(a,t[a],t);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(te(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function ys(t){const e=xo();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function xo(){let t,e,r=!1;const n=new Promise((o,a)=>{t=s=>(r=!0,o(s)),e=s=>{r=!0,a(s)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${xo.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function $s(t,e){try{return ws(t,e),!0}catch{return!1}}function ws(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Cs(t,e){return _e(t,"entryType")&&t.entryType===e}function Ft(t,e){const r=Cr(t.title);return t.parent?[Cr(t.parent.title),...Ft(t.parent,!1)].concat(e?[r]:[]):e?[r]:[]}function Cr(t){return wo(t).toLowerCase().replaceAll(/\s/g,"-")}function xs(t,e,r){const n=[],o=`Failed to define example '${e.concat(r.title).join(" > ")}'`;t.hasOwnProperty(r.title)?n.push(new Error(`${o}: title '${r.title}' is already being used.`)):r.title||n.push(new Error(`${o}: example title is missing or empty.`)),n.length?t[r.title]=cs(n):t[r.title]=r}function Me(t){if(!t.title)throw new Error("Cannot have an element-book page with an empty title.");const e={},r={entryType:G.Page,...t,examples:e,controls:t.controls??{},pageBreadcrumbs:[]};return r.pageBreadcrumbs=Ft(r),t.defineExamplesCallback&&t.defineExamplesCallback({defineExample:n=>xs(e,r.pageBreadcrumbs,n)}),r}var P;(function(t){t.Checkbox="checkbox",t.Color="color",t.Dropdown="dropdown",t.Text="text"})(P||(P={}));var ee;(function(t){t.Footer="element-book-footer",t.NavHeader="element-book-nav-header"})(ee||(ee={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Te=t=>(...e)=>({_$litDirective$:t,values:e});let Ae=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tr;const kt=window,Se=kt.trustedTypes,un=Se?Se.createPolicy("lit-html",{createHTML:t=>t}):void 0,St="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,Fr="?"+Q,ks=`<${Fr}>`,me=document,Ye=()=>me.createComment(""),Xe=t=>t===null||typeof t!="object"&&typeof t!="function",ko=Array.isArray,So=t=>ko(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",rr=`[ 	
\f\r]`,ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dn=/-->/g,hn=/>/g,de=RegExp(`>|${rr}(?:([^\\s"'>=/]+)(${rr}*=${rr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fn=/'/g,pn=/"/g,Eo=/^(?:script|style|textarea|title)$/i,Ss=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Es=Ss(1),X=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),mn=new WeakMap,fe=me.createTreeWalker(me,129,null,!1),_o=(t,e)=>{const r=t.length-1,n=[];let o,a=e===2?"<svg>":"",s=ze;for(let l=0;l<r;l++){const c=t[l];let d,u,h=-1,f=0;for(;f<c.length&&(s.lastIndex=f,u=s.exec(c),u!==null);)f=s.lastIndex,s===ze?u[1]==="!--"?s=dn:u[1]!==void 0?s=hn:u[2]!==void 0?(Eo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=de):u[3]!==void 0&&(s=de):s===de?u[0]===">"?(s=o??ze,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?de:u[3]==='"'?pn:fn):s===pn||s===fn?s=de:s===dn||s===hn?s=ze:(s=de,o=void 0);const p=s===de&&t[l+1].startsWith("/>")?" ":"";a+=s===ze?c+ks:h>=0?(n.push(d),c.slice(0,h)+St+c.slice(h)+Q+p):c+Q+(h===-2?(n.push(void 0),l):p)}const i=a+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[un!==void 0?un.createHTML(i):i,n]};class Ze{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=e.length-1,l=this.parts,[c,d]=_o(e,r);if(this.el=Ze.createElement(c,n),fe.currentNode=this.el.content,r===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=fe.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(St)||h.startsWith(Q)){const f=d[s++];if(u.push(h),f!==void 0){const p=o.getAttribute(f.toLowerCase()+St).split(Q),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:g[2],strings:p,ctor:g[1]==="."?To:g[1]==="?"?Ao:g[1]==="@"?Po:et})}else l.push({type:6,index:a})}for(const h of u)o.removeAttribute(h)}if(Eo.test(o.tagName)){const u=o.textContent.split(Q),h=u.length-1;if(h>0){o.textContent=Se?Se.emptyScript:"";for(let f=0;f<h;f++)o.append(u[f],Ye()),fe.nextNode(),l.push({type:2,index:++a});o.append(u[h],Ye())}}}else if(o.nodeType===8)if(o.data===Fr)l.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(Q,u+1))!==-1;)l.push({type:7,index:a}),u+=Q.length-1}a++}}static createElement(e,r){const n=me.createElement("template");return n.innerHTML=e,n}}function ge(t,e,r=t,n){var o,a,s,i;if(e===X)return e;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Xe(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(e=ge(t,l._$AS(t,e.values),l,n)),e}let Mo=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:me).importNode(n,!0);fe.currentNode=a;let s=fe.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new Pe(s,s.nextSibling,this,e):c.type===1?d=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(d=new Ro(s,this,e)),this._$AV.push(d),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=fe.nextNode(),i++)}return fe.currentNode=me,a}v(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}};class Pe{constructor(e,r,n,o){var a;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ge(this,e,r),Xe(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):So(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==E&&Xe(this._$AH)?this._$AA.nextSibling.data=e:this.$(me.createTextNode(e)),this._$AH=e}g(e){var r;const{values:n,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ze.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new Mo(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(e){let r=mn.get(e.strings);return r===void 0&&mn.set(e.strings,r=new Ze(e)),r}T(e){ko(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of e)o===r.length?r.push(n=new Pe(this.k(Ye()),this.k(Ye()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class et{constructor(e,r,n,o,a){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)e=ge(this,e,r,0),s=!Xe(e)||e!==this._$AH&&e!==X,s&&(this._$AH=e);else{const i=e;let l,c;for(e=a[0],l=0;l<a.length-1;l++)c=ge(this,i[n+l],r,l),c===X&&(c=this._$AH[l]),s||(s=!Xe(c)||c!==this._$AH[l]),c===E?e=E:e!==E&&(e+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class To extends et{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}const _s=Se?Se.emptyScript:"";class Ao extends et{constructor(){super(...arguments),this.type=4}j(e){e&&e!==E?this.element.setAttribute(this.name,_s):this.element.removeAttribute(this.name)}}class Po extends et{constructor(e,r,n,o,a){super(e,r,n,o,a),this.type=5}_$AI(e,r=this){var n;if((e=(n=ge(this,e,r,0))!==null&&n!==void 0?n:E)===X)return;const o=this._$AH,a=e===E&&o!==E||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==E&&(o===E||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ro{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ge(this,e)}}const Ms={O:St,P:Q,A:Fr,C:1,M:_o,L:Mo,D:So,R:ge,I:Pe,V:et,H:Ao,N:Po,U:To,F:Ro},gn=kt.litHtmlPolyfillSupport;gn==null||gn(Ze,Pe),((tr=kt.litHtmlVersions)!==null&&tr!==void 0?tr:kt.litHtmlVersions=[]).push("2.7.4");const Ts=(t,e,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Pe(e.insertBefore(Ye(),i),i,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:As}=Ms,bn=()=>document.createComment(""),Oe=(t,e,r)=>{var n;const o=t._$AA.parentNode,a=e===void 0?t._$AB:e._$AA;if(r===void 0){const s=o.insertBefore(bn(),a),i=o.insertBefore(bn(),a);r=new As(s,i,t,t.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==t;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,t),r._$AM=t,r._$AP!==void 0&&(c=t._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const d=c.nextSibling;o.insertBefore(c,a),c=d}}}return r},he=(t,e,r=t)=>(t._$AI(e,r),t),Ps={},Rs=(t,e=Ps)=>t._$AH=e,Bs=t=>t._$AH,nr=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let r=t._$AA;const n=t._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo=Te(class extends Ae{constructor(t){var e;if(super(t),t.type!==Ut.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(e)}const o=t.element.classList;this.it.forEach(a=>{a in e||(o.remove(a),this.it.delete(a))});for(const a in e){const s=!!e[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return X}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn=(t,e,r)=>{const n=new Map;for(let o=e;o<=r;o++)n.set(t[o],o);return n},Ls=Te(class extends Ae{constructor(t){if(super(t),t.type!==Ut.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const o=[],a=[];let s=0;for(const i of t)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){var o;const a=Bs(t),{values:s,keys:i}=this.dt(e,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,h=0,f=a.length-1,p=0,g=s.length-1;for(;h<=f&&p<=g;)if(a[h]===null)h++;else if(a[f]===null)f--;else if(l[h]===i[p])c[p]=he(a[h],s[p]),h++,p++;else if(l[f]===i[g])c[g]=he(a[f],s[g]),f--,g--;else if(l[h]===i[g])c[g]=he(a[h],s[g]),Oe(t,c[g+1],a[h]),h++,g--;else if(l[f]===i[p])c[p]=he(a[f],s[p]),Oe(t,a[h],a[f]),f--,p++;else if(d===void 0&&(d=vn(i,p,g),u=vn(l,h,f)),d.has(l[h]))if(d.has(l[f])){const b=u.get(i[p]),w=b!==void 0?a[b]:null;if(w===null){const L=Oe(t,a[h]);he(L,s[p]),c[p]=L}else c[p]=he(w,s[p]),Oe(t,a[h],w),a[b]=null;p++}else nr(a[f]),f--;else nr(a[h]),h++;for(;p<=g;){const b=Oe(t,c[g+1]);he(b,s[p]),c[p++]=b}for(;h<=f;){const b=a[h++];b!==null&&nr(b)}return this.ht=i,Rs(t,c),X}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Et=class extends Ae{constructor(e){if(super(e),this.et=E,e.type!==Ut.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===E||e==null)return this.ft=void 0,this.et=e;if(e===X)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const r=[e];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Et.directiveName="unsafeHTML",Et.resultType=1;const Ns=Te(Et);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yn=class extends Et{};yn.directiveName="unsafeSVG",yn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zs(t,e,r){return t?e():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=window,Ur=Ct.ShadowRoot&&(Ct.ShadyCSS===void 0||Ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yr=Symbol(),$n=new WeakMap;let Lo=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Yr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ur&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=$n.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&$n.set(r,e))}return e}toString(){return this.cssText}};const S=t=>new Lo(typeof t=="string"?t:t+"",void 0,Yr),je=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[a+1],t[0]);return new Lo(r,t,Yr)},Os=(t,e)=>{Ur?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),o=Ct.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)})},wn=Ur?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return S(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var or;const _t=window,Cn=_t.trustedTypes,Is=Cn?Cn.emptyScript:"",xn=_t.reactiveElementPolyfillSupport,xr={toAttribute(t,e){switch(e){case Boolean:t=t?Is:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},No=(t,e)=>e!==t&&(e==e||t==t),ar={attribute:!0,type:String,converter:xr,reflect:!1,hasChanged:No};let we=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),e.push(o))}),e}static createProperty(e,r=ar){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,r);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(o){const a=this[e];this[r]=o,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ar}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)r.unshift(wn(o))}else e!==void 0&&r.push(wn(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Os(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=ar){var o;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:xr).toAttribute(r,n.type);this._$El=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(e,r){var n;const o=this.constructor,a=o._$Ev.get(e);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:xr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(e,r,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||No)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};we.finalized=!0,we.elementProperties=new Map,we.elementStyles=[],we.shadowRootOptions={mode:"open"},xn==null||xn({ReactiveElement:we}),((or=_t.reactiveElementVersions)!==null&&or!==void 0?or:_t.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sr,ir;class He extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ts(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return X}}He.finalized=!0,He._$litElement$=!0,(sr=globalThis.litElementHydrateSupport)===null||sr===void 0||sr.call(globalThis,{LitElement:He});const kn=globalThis.litElementPolyfillSupport;kn==null||kn({LitElement:He});((ir=globalThis.litElementVersions)!==null&&ir!==void 0?ir:globalThis.litElementVersions=[]).push("3.3.2");var Ds=globalThis&&globalThis.__esDecorate||function(t,e,r,n,o,a){function s(w){if(w!==void 0&&typeof w!="function")throw new TypeError("Function expected");return w}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!e&&t?n.static?t:t.prototype:null,d=e||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,f=r.length-1;f>=0;f--){var p={};for(var g in n)p[g]=g==="access"?{}:n[g];for(var g in n.access)p.access[g]=n.access[g];p.addInitializer=function(w){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(w||null))};var b=(0,r[f])(i==="accessor"?{get:d.get,set:d.set}:d[l],p);if(i==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=s(b.get))&&(d.get=u),(u=s(b.set))&&(d.set=u),(u=s(b.init))&&o.push(u)}else(u=s(b))&&(i==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},js=globalThis&&globalThis.__runInitializers||function(t,e,r){for(var n=arguments.length>2,o=0;o<e.length;o++)r=n?e[o].call(t,r):e[o].call(t);return n?r:void 0},Hs=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Vs(){function t(e,r){return e}return t}let zo=(()=>{let t=[Vs()],e,r=[],n;return n=class extends He{},Hs(n,"DeclarativeElement"),Ds(null,e={value:n},t,{kind:"class",name:n.name},null,r),n=e.value,js(n,r),n})();function Sn(t){return t!==t.toUpperCase()}function Fs(t){return t.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=Sn(s)||Sn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Us=["january","february","march","april","may","june","july","august","september","october","november","december"];Us.map(t=>t.slice(0,3));function Ys(t){return!!t&&typeof t=="object"}function En(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Xs(t){return Array.isArray(t)?"array":typeof t}function Zs(t,e){return Xs(t)===e}function Gs(t,e){let r=!1;const n=En(t).reduce((o,a)=>{const s=e(a,t[a],t);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(En(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function q(t){if(Ys(t))return Gs(t,(r,n)=>{if(!Zs(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Fs(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?S(r):r.startsWith("-")?je`-${S(r)}`:je`--${S(r)}`;return{name:s,value:je`var(${s}, ${S(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${q.name}' function.`)}function Ws({onElement:t,toValue:e,forCssVar:r}){t.style.setProperty(String(r.name),String(e))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qs=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function Oo(t){return(e,r)=>r!==void 0?((n,o,a)=>{o.constructor.createProperty(a,n)})(t,e,r):qs(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lr;((lr=window.HTMLSlotElement)===null||lr===void 0?void 0:lr.prototype.assignedElements)!=null;const kr=Symbol("this-is-an-element-vir-declarative-element"),Xr=Symbol("key for ignoring inputs not having been set yet"),Js={[Xr]:!0,allowPolymorphicState:!1};function Io(t,e){const r=t.instanceState;te(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&te(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),Do(t)}function Do(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function jo(t,e){return Sr(t,e),t.element}function Sr(t,e){if(t.type!==Ut.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function k(t,e){return e?_n(t,e):_n(void 0,t)}const _n=Te(class extends Ae{constructor(t){super(t),this.element=jo(t,"assign")}render(t,e){return Ks(t,this.element,e),X}});function Ks(t,e,r){Io(e,r)}function Ho(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof zo?!0:Ho(r)}function Mn(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class Qs extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Zr(){return t=>{var e;return e=class extends Qs{constructor(r){super(t,r),this._type=t}},e.type=t,e}}function Ge(){return Zr()}function ei(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,r)=>{const n=Zr()(r);return e[r]=n,e},{}):{}}const Tn="_is_element_vir_observable_property_handler_instance",An="_is_element_vir_observable_property_handler_creator";function ti(t){return _e(t,An)&&t[An]===!0}function ri(t){return _e(t,Tn)&&t[Tn]===!0}function ni(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function Pn(t,e){const r=t;function n(s){e?ni(s,t,t.tagName):Oo()(t,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=t.observablePropertyHandlerMap[i];function d(u){s[i]=u,r[i]=u}return ti(l)&&(l=l.init()),ri(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),t.observablePropertyHandlerMap[i]=l):c?c.setValue(l):d(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function oi(t){return t?Vt(t,e=>e):{}}function ai({hostClassNames:t,cssVars:e}){return{hostClasses:Vt(t,(r,n)=>({name:S(n),selector:S(`:host(.${n})`)})),cssVars:e}}function si({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:o}){e&&te(e).forEach(a=>{const s=e[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?t.classList.add(i):t.classList.remove(i))})}function ii(t,e){function r(o){te(o).forEach(a=>{const s=o[a];t.instanceState[a]=s})}return{dispatch:o=>t.dispatchEvent(o),updateState:r,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var li=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Yt(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const r={...Js,...t.options},n=ei(t.events),o=oi(t.hostClasses);t.hostClasses&&Mn(t.tagName,t.hostClasses),t.cssVars&&Mn(t.tagName,t.cssVars);const a=t.cssVars?q(t.cssVars):{},s=typeof t.styles=="function"?t.styles(ai({hostClassNames:o,cssVars:a})):t.styles||je``,i=t.renderCallback,l=(e=class extends zo{createRenderParams(){return ii(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Do(this)}render(){try{Ho(this)&&!this.haveInputsBeenSet&&!r[Xr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${k.name}" directive on it. If no inputs are intended, use "${Yt.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const d=i(c);return si({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=Co(c);throw d.message=`Failed to render '${t.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();t.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){Io(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Pn(this,!1),this.instanceState=Pn(this,!((d=t.options)!=null&&d.allowPolymorphicState));const c=t.stateInitStatic||{};te(c).forEach(u=>{Oo()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},li(e,"anonymousClass"),e.tagName=t.tagName,e.styles=s,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=i,e.hostClasses=o,e.cssVars=a,e.stateInitStatic=t.stateInitStatic,e);return Object.defineProperties(l,{[kr]:{value:!0,writable:!1},name:{value:is(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,l),l}function Gr(){return t=>Yt({...t,options:{[Xr]:!1,...t.options}})}function D(t,e){return ci(t,e)}const ci=Te(class extends Ae{constructor(t){super(t),this.element=jo(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),X}}),cr="onResize",Vo=Te(class extends Ae{constructor(t){super(t),this.resizeObserver=new ResizeObserver(e=>this.fireCallback(e)),Sr(t,cr)}fireCallback(t){var r;const e=t[0];if(!e)throw console.error(t),new Error(`${cr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:e.target,contentRect:e.contentRect})}update(t,[e]){Sr(t,cr),this.callback=e;const r=t.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(e)}render(t){}});function ae(t,e,r){return zs(t,()=>e,()=>r)}function Er(t){if("templateString"in t)return t.templateString;const{strings:e,values:r}=t;if((!e||!(e!=null&&e.length))&&(!r||!r.length))return"";const n=[...r||[],""],a=(e??[""]).map((s,i)=>{const l=ui(s,n[i]);return`${s}${l}`});return wo(a.join(""))}function ui(t,e){return e._$litType$!=null||e._$litDirective$!=null?Er(e):Array.isArray(e)?e.map(n=>Er(n)).join(""):t.endsWith("=")?`"${e}"`:e}function Fo(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),Gr()(r(n))),defineElementNoInputs:n=>(e(n),Yt(r(n)))}}function di(t,e){return t.filter((r,n)=>!e.includes(n))}function Uo(t){return t.filter(e=>Vr(e,["tagName",kr])&&!!e.tagName&&!!e[kr])}const Yo=new WeakMap;function hi(t,e){var o;const r=Uo(e);return(o=Xo(Yo,[t,...r]).value)==null?void 0:o.template}function fi(t,e,r){const n=Uo(e);return Go(Yo,[t,...n],r)}function Xo(t,e,r=0){const{currentTemplateAndNested:n,reason:o}=Zo(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Xo(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Zo(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=t.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Go(t,e,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Zo(t,e,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||t.set(a,i),n===e.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Go(l,e,r,n+1)}function Wo(t,e,r){return{name:t,check:e,transform:r}}const pi=new WeakMap;function qo(t,e,r){const n=hi(t,e),o=n??r();if(!n){const s=fi(t,e,o);if(s.result)pi.set(t,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=di(e,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Jo(t,e,r,n){const o=[],a=[],s=[];return t.forEach((l,c)=>{var b;const d=o.length-1,u=o[d],h=c-1,f=e[h];let p;n&&n(l),typeof u=="string"&&(p=(b=r.find(w=>w.check(u,l,f)))==null?void 0:b.transform,p&&(o[d]=u+p(f)+l,s.push(h))),p||o.push(l);const g=t.raw[c];p?a[d]=a[d]+p(f)+g:a.push(g)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:s}}function Ko(t){return _e(t,"tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const mi=[Wo("tag name css selector interpolation",(t,e,r)=>Ko(r),t=>t.tagName)];function gi(t,e){return Jo(t,e,mi)}function y(t,...e){const r=qo(t,e,()=>gi(t,e));return je(r.strings,...r.values)}const bi=[Wo("tag name interpolation",(t,e,r)=>{const n=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),o=Ko(r);if(n&&!o)throw console.error({lastNewString:t,currentLitString:e,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},t=>t.tagName)];function vi(t){}function yi(t){return Jo(t.strings,t.values,bi,vi)}function m(t,...e){const r=Es(t,...e),n=qo(t,e,()=>yi(r));return{...r,strings:n.strings,values:n.values}}const Qo=new Map;function ea(t,e){var r;return(r=Qo.get(t))==null?void 0:r.get(e)}function ta(t,e,r){ps(Qo,t,()=>new Map).set(e,r)}const Mt="isElementBookEntryTreeNode";function $i(t,e){return!!(Vr(t,[Mt,"entry"])&&t[Mt]&&t.entry.entryType===e)}function ra(t){return{[Mt]:!0,entry:{entryType:G.Root,title:t||"Everything",parent:void 0},breadcrumb:"",children:{}}}function wi(t,e){return Ci(t,e)}function Ci(t,e){const r=ea(t,"");if(r)return r;const n=ra(e);return t.forEach(o=>{if(o instanceof Error)throw o;const a=xi(o,n),s=Cr(o.title);if(s in a.children)throw new Error(`Cannot create duplicate entry '${s}'${a.breadcrumb?` in parent '${a.breadcrumb}'.`:""}`);const i={[Mt]:!0,children:{},breadcrumb:s,entry:o};a.children[s]=i}),ta(t,"",n),n}function xi(t,e){return Ft(t).reverse().reduce((o,a)=>{const s=o.children[a];if(!s)throw new Error(`Failed to find parent ElementBookEntry by name of '${a}' in entry '${o.entry.title}'`);return s},e)}function _r(t,e){if(!$s(t,1))return e;const r=t[0],n=e.children[r];if(n)return _r(t.slice(1),n)}function Rn({searchQuery:t,searchIn:e}){const r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;const o=e.toLowerCase(),a=t.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}function ki({entries:t,startTree:e,searchQuery:r}){const n=ea(t,r);if(n)return n;const o=ra("Search Results");return na(e,o,r),ta(t,r,o),o}function na(t,e,r){if(t.entry.entryType!==G.Root&&Rn({searchIn:t.entry.title,searchQuery:r}))return e.children=t.children,!0;if("examples"in t.entry){const o=vs(t.entry.examples,s=>Rn({searchIn:s,searchQuery:r})),a={...t.entry,examples:o};return e.entry=a,!!Object.values(a.examples).length}const n=Object.entries(t.children).map(([o,a])=>{const s={...a,children:{}};if(na(a,s,r))return[o,s]}).filter(us);return n.length?(e.children=Object.fromEntries(n),!0):!1}const Si=0;function Ei(t){return!(t.type!=="click"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==Si)}class tt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class Bn extends tt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const We="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const _i=globalThis.history.pushState;function Ln(...t){const e=_i.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(We)),e}const Mi=globalThis.history.replaceState;function Nn(...t){const e=Mi.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(We)),e}function Ti(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Ln)throw new Bn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Nn)throw new Bn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Ln,globalThis.history.replaceState=Nn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(We))})}}function Ai(t){return Array.from(t.entries()).reduce((e,r)=>(e[r[0]]=r[1],e),{})}function Pi(t){const e=Object.entries(t).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(e)}function Ri(t){const r=(t?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Ai(new URLSearchParams(globalThis.location.search)):void 0,a=globalThis.location.hash||void 0;return{paths:r,search:o,hash:a}}class Bi extends tt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function oa(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const r=Object.entries(t.search).join(" "),n=Object.entries(e.search).join(" ");if(r!==n)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const zn=6;function On(t,e){const r=t.getCurrentRawRoutes();if(t.sanitizationDepth>zn)throw new Bi(`Route sanitization depth has exceed the max of ${zn} with ${JSON.stringify(r)}`);const n=t.sanitizeFullRoute(r);if(oa(n,r))t.sanitizationDepth=0,e?e(n):t.listeners.forEach(o=>{o(n)});else return t.sanitizationDepth++,t.setRoutes(n,!0)}class ur extends tt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Li(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new ur(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new ur(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new ur(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Ni(t,e,r,n=!1){const o=aa(t,e,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function aa(t,e,r=""){var l;if(!r&&e!=null)throw new tt("Route base regexp was defined but routeBase string was not provided.");const n=zi(e)?`/${r}`:"",o=t.search?Pi(t.search).toString():"",a=o?`?${o}`:"",s=(l=t.hash)!=null&&l.startsWith("#")?"":"#",i=t.hash?`${s}${t.hash}`:"";return`${n}/${t.paths.join("/")}${a}${i}`}function zi(t){return!!(t&&globalThis.location.pathname.match(t))}function Oi(t={}){var s;Li(t),Ti();const e=(s=t.routeBase)==null?void 0:s.replace(/\/+$/,""),r=e?new RegExp(`^\\/${t.routeBase}`):void 0;let n=!1;const o=()=>On(a),a={listeners:new Set,initParams:t,sanitizeFullRoute:i=>{const l={hash:void 0,search:void 0,...i};return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(i,l=!1,c=!1)=>{const d=a.getCurrentRawRoutes(),u={...d,...i},h=a.sanitizeFullRoute(u);if(!(!c&&oa(d,h)))return Ni(h,r,e,l)},createRoutesUrl:i=>aa(i,r,e),getCurrentRawRoutes:()=>Ri(r),removeAllRouteListeners(){a.listeners.forEach(i=>a.removeRouteListener(i))},addRouteListener:(i,l)=>{if(t.maxListenerCount&&a.listeners.size>=t.maxListenerCount)throw new tt(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return a.listeners.add(l),n||(globalThis.addEventListener(We,o),n=!0),i&&On(a,l),l},hasRouteListener:i=>a.listeners.has(i),removeRouteListener:i=>{const l=a.listeners.delete(i);return a.listeners.size||(globalThis.removeEventListener(We,o),n=!1),l},sanitizationDepth:0};return a}var R;(function(t){t.Search="search",t.Book="book"})(R||(R={}));function sa(t){return t[0]===R.Book?"":t[1]?decodeURIComponent(t[1]):""}const Xt={hash:void 0,paths:[R.Book],search:void 0};function Ii(t){return Oi({routeBase:t,routeSanitizer(e){return{paths:Di(e.paths),hash:void 0,search:void 0}}})}function Di(t){const e=t[0];if(bs(e,R)){if(e===R.Book)return[R.Book,...t.slice(1)];if(e===R.Search)return t[1]?[e,t[1]]:[R.Book,...t.slice(1)];throw new Error(`Route path not handled for sanitization: ${t.join("/")}`)}else return Xt.paths}const $=q({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),ji={nav:{hover:{background:$["element-book-nav-hover-background-color"],foreground:$["element-book-nav-hover-foreground-color"]},active:{background:$["element-book-nav-active-background-color"],foreground:$["element-book-nav-active-foreground-color"]},selected:{background:$["element-book-nav-selected-background-color"],foreground:$["element-book-nav-selected-foreground-color"]}},accent:{icon:$["element-book-accent-icon-color"]},page:{background:$["element-book-page-background-color"],backgroundFaint1:$["element-book-page-background-faint-level-1-color"],backgroundFaint2:$["element-book-page-background-faint-level-2-color"],foreground:$["element-book-page-foreground-color"],foregroundFaint1:$["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:$["element-book-page-foreground-faint-level-2-color"]}};function Hi(t,e){ia(t,e,ji)}function Mr(t){return _e(t,"_$cssResult$")}function In(t){return Vr(t,["name","value","default"])&&fs(t.default,"string")&&Mr(t.name)&&Mr(t.value)}function ia(t,e,r){Object.entries(e).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Mr(o)){if(!In(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ws({forCssVar:a,onElement:t,toValue:String(o)})}else{if(In(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ia(t,o,a)}})}function _(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(s=>[s]));let n=e[0].length,o=e[0].map((s,i)=>e.map(l=>l[i])),a=t.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function rt(t){return ne(t)==="string"}function ne(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Tt(t,e){t=+t,e=+e;let r=(Math.floor(t)+"").length;if(e>r)return+t.toFixed(e-r);{let n=10**(r-e);return Math.round(t/n)*n}}function la(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=t.match(e);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ca(t){return t[t.length-1]}function At(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function ua(t,e,r){return(r-t)/(e-t)}function Wr(t,e,r){return At(e[0],e[1],ua(t[0],t[1],r))}function da(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Vi=Object.freeze({__proto__:null,isString:rt,type:ne,toPrecision:Tt,parseFunction:la,last:ca,interpolate:At,interpolateInv:ua,mapRange:Wr,parseCoordGrammar:da,multiplyMatrices:_});class Fi{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const se=new Fi;var W={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Y={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Tr(t){return Array.isArray(t)?t:Y[t]}function Pt(t,e,r,n={}){if(t=Tr(t),e=Tr(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let o={W1:t,W2:e,XYZ:r,options:n};if(se.run("chromatic-adaptation-start",o),o.M||(o.W1===Y.D65&&o.W2===Y.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Y.D50&&o.W2===Y.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),se.run("chromatic-adaptation-end",o),o.M)return _(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ui=75e-6;var Qe,Ar,ke,jt,ha;const U=class{constructor(e){Ne(this,Qe);Ne(this,jt);Ne(this,ke,void 0);var o,a,s;this.id=e.id,this.name=e.name,this.base=e.base?U.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;this.coords=r;let n=e.white??this.base.white??"D65";this.white=Tr(n),this.formats=e.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}e.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:e.cssId},Object.defineProperty(this,"cssId",{value:e.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=e.referred,er(this,ke,ct(this,jt,ha).call(this).reverse()),se.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=Ui}={}){if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var e,r;return((r=(e=this.formats.functions)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=ct(this,Qe,Ar).call(this,e),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=ct(this,Qe,Ar).call(this,r),r):null}to(e,r){if(arguments.length===1&&([e,r]=[e.space,e.coords]),e=U.get(e),this===e)return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=be(this,ke),o=be(e,ke),a,s;for(let i=0;i<n.length&&n[i]===o[i];i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(e,r){return arguments.length===1&&([e,r]=[e.space,e.coords]),e=U.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;e.push((o==null?void 0:o.min)??0)}return e}static get all(){return[...new Set(Object.values(U.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof U)return e;if(ne(e)==="string"){let o=U.registry[e.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${e}"`);return o}if(r.length)return U.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=ne(e),o,a;if(n==="string"?e.includes(".")?[o,a]=e.split("."):[o,a]=[,e]:Array.isArray(e)?[o,a]=e:(o=e.space,a=e.coordId),o=U.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=ne(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=U.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===s||((l=d.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...d};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let v=U;Qe=new WeakSet,Ar=function(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=da(e.coords);let r=Object.entries(this.coords).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=Wr(i,l,a)),a=Tt(a,o),c&&(a+=c),a})}return e},ke=new WeakMap,jt=new WeakSet,ha=function(){let e=[this];for(let r=this;r=r.base;)e.push(r);return e},Kt(v,"registry",{}),Kt(v,"DEFAULT_FORMAT",{type:"functions",name:"color"});var H=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class N extends v{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=H),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=_(e.toXYZ_M,r);return this.white!==this.base.white&&(n=Pt(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=Pt(this.base.white,this.white,r),_(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}}function fa(t){var r,n,o,a,s;let e={str:(r=String(t))==null?void 0:r.trim()};if(se.run("parse-start",e),e.color)return e.color;if(e.parsed=la(e.str),e.parsed){let i=e.parsed.name;if(i==="color"){let l=e.parsed.args.shift(),c=e.parsed.rawArgs.indexOf("/")>0?e.parsed.args.pop():1;for(let u of v.all){let h=u.getFormat("color");if(h&&(l===h.id||(n=h.ids)!=null&&n.includes(l))){let f=Object.keys(u.coords).length,p=Array(f).fill(0);return p.forEach((g,b)=>p[b]=e.parsed.args[b]||0),{spaceId:u.id,coords:p,alpha:c}}}let d="";if(l in v.registry){let u=(s=(a=(o=v.registry[l].formats)==null?void 0:o.functions)==null?void 0:a.color)==null?void 0:s.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of v.all){let c=l.getFormat(i);if(c&&c.type==="function"){let d=1;(c.lastAlpha||ca(e.parsed.args).alpha)&&(d=e.parsed.args.pop());let u=e.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([h,f],p)=>{var F;let g=c.coordGrammar[p],b=(F=u[p])==null?void 0:F.type;if(g=g.find(z=>z==b),!g){let z=f.name||h;throw new TypeError(`${b} not allowed for ${z} in ${i}()`)}let w=g.range;b==="<percentage>"&&(w||(w=[0,1]));let L=f.range||f.refRange;w&&L&&(u[p]=Wr(w,L,u[p]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let i of v.all)for(let l in i.formats){let c=i.formats[l];if(c.type!=="custom"||c.test&&!c.test(e.str))continue;let d=c.parse(e.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function C(t){if(!t)throw new TypeError("Empty color reference");rt(t)&&(t=fa(t));let e=t.space||t.spaceId;return e instanceof v||(t.space=v.get(e)),t.alpha===void 0&&(t.alpha=1),t}function nt(t,e){return e=v.get(e),e.from(t)}function V(t,e){let{space:r,index:n}=v.resolveCoord(e,t.space);return nt(t,r)[n]}function pa(t,e,r){return e=v.get(e),t.coords=e.to(t.space,r),t}function ie(t,e,r){if(t=C(t),arguments.length===2&&ne(arguments[1])==="object"){let n=arguments[1];for(let o in n)ie(t,o,n[o])}else{typeof r=="function"&&(r=r(V(t,e)));let{space:n,index:o}=v.resolveCoord(e,t.space),a=nt(t,n);a[o]=r,pa(t,n,a)}return t}var qr=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:H,fromBase:t=>Pt(H.white,"D50",t),toBase:t=>Pt("D50",H.white,t),formats:{color:{}}});const Yi=216/24389,Dn=24/116,ut=24389/27;let dr=Y.D50;var I=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:dr,base:qr,fromBase(t){let r=t.map((n,o)=>n/dr[o]).map(n=>n>Yi?Math.cbrt(n):(ut*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>Dn?Math.pow(e[0],3):(116*e[0]-16)/ut,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/ut,e[2]>Dn?Math.pow(e[2],3):(116*e[2]-16)/ut].map((n,o)=>n*dr[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Zt(t){return(t%360+360)%360}function Xi(t,e){if(t==="raw")return e;let[r,n]=e.map(Zt),o=n-r;return t==="increasing"?o<0&&(n+=360):t==="decreasing"?o>0&&(r+=360):t==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):t==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var qe=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:I,fromBase(t){let[e,r,n]=t,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Zt(o)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const jn=25**7,Rt=Math.PI,Hn=180/Rt,ve=Rt/180;function Pr(t,e,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=I.from(t),l=qe.from(I,[a,s,i])[1],[c,d,u]=I.from(e),h=qe.from(I,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let p=((l+h)/2)**7,g=.5*(1-Math.sqrt(p/(p+jn))),b=(1+g)*s,w=(1+g)*d,L=Math.sqrt(b**2+i**2),F=Math.sqrt(w**2+u**2),z=b===0&&i===0?0:Math.atan2(i,b),re=w===0&&u===0?0:Math.atan2(u,w);z<0&&(z+=2*Rt),re<0&&(re+=2*Rt),z*=Hn,re*=Hn;let st=c-a,it=F-L,Z=re-z,Re=z+re,en=Math.abs(Z),Be;L*F===0?Be=0:en<=180?Be=Z:Z>180?Be=Z-360:Z<-180?Be=Z+360:console.log("the unthinkable has happened");let tn=2*Math.sqrt(F*L)*Math.sin(Be*ve/2),Ja=(a+c)/2,Jt=(L+F)/2,rn=Math.pow(Jt,7),J;L*F===0?J=Re:en<=180?J=Re/2:Re<360?J=(Re+360)/2:J=(Re-360)/2;let nn=(Ja-50)**2,Ka=1+.015*nn/Math.sqrt(20+nn),on=1+.045*Jt,Le=1;Le-=.17*Math.cos((J-30)*ve),Le+=.24*Math.cos(2*J*ve),Le+=.32*Math.cos((3*J+6)*ve),Le-=.2*Math.cos((4*J-63)*ve);let an=1+.015*Jt*Le,Qa=30*Math.exp(-1*((J-275)/25)**2),es=2*Math.sqrt(rn/(rn+jn)),ts=-1*Math.sin(2*Qa*ve)*es,lt=(st/(r*Ka))**2;return lt+=(it/(n*on))**2,lt+=(tn/(o*an))**2,lt+=ts*(it/(n*on))*(tn/(o*an)),Math.sqrt(lt)}const Zi=75e-6;function Ve(t,e=t.space,{epsilon:r=Zi}={}){t=C(t),e=v.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function Je(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function le(t,{method:e=W.gamut_mapping,space:r=t.space}={}){if(rt(arguments[1])&&(r=arguments[1]),r=v.get(r),Ve(t,r,{epsilon:0}))return t;let n=j(t,r);if(e!=="clip"&&!Ve(t,r)){let o=le(Je(n),{method:"clip",space:r});if(Pr(t,o)>2){let a=v.resolveCoord(e),s=a.space,i=a.id,l=j(n,s),d=(a.range||a.refRange)[0],u=.01,h=d,f=V(l,i);for(;f-h>u;){let p=Je(l);p=le(p,{space:r,method:"clip"}),Pr(l,p)-2<u?h=V(l,i):f=V(l,i),ie(l,i,(h+f)/2)}n=j(l,r)}else n=o}if(e==="clip"||!Ve(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==t.space&&(n=j(n,t.space)),t.coords=n.coords,t}le.returns="color";function j(t,e,{inGamut:r}={}){t=C(t),e=v.get(e);let n=e.from(t),o={space:e,coords:n,alpha:t.alpha};return r&&(o=le(o)),o}j.returns="color";function Bt(t,{precision:e=W.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;t=C(t);let s=r;r=t.space.getFormat(r)??t.space.getFormat("default")??v.DEFAULT_FORMAT,n||(n=r.toGamut);let i=t.coords;if(i=i.map(c=>c||0),n&&!Ve(t)&&(i=le(Je(t),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=e,r.serialize)a=r.serialize(i,t.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,e):e!==null&&(i=i.map(f=>Tt(f,e)));let d=[...i];if(c==="color"){let f=r.id||((l=r.ids)==null?void 0:l[0])||t.space.id;d.unshift(f)}let u=t.alpha;e!==null&&(u=Tt(u,e));let h=t.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";a=`${c}(${d.join(r.commas?", ":" ")}${h})`}return a}const Gi=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Wi=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Gt=new N({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Gi,fromXYZ_M:Wi,formats:{color:{}}});const dt=1.09929682680944,Vn=.018053968510807;var ma=new N({id:"rec2020",name:"REC.2020",base:Gt,toBase(t){return t.map(function(e){return e<Vn*4.5?e/4.5:Math.pow((e+dt-1)/dt,1/.45)})},fromBase(t){return t.map(function(e){return e>=Vn?dt*Math.pow(e,.45)-(dt-1):4.5*e})},formats:{color:{}}});const qi=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Ji=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ga=new N({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:qi,fromXYZ_M:Ji});const Ki=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Qi=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ba=new N({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Ki,fromXYZ_M:Qi,formats:{color:{}}}),Fn={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Un=Array(3).fill("<percentage> | <number>[0, 255]"),Yn=Array(3).fill("<number>[0, 255]");var Ke=new N({id:"srgb",name:"sRGB",base:ba,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Un},rgb_number:{name:"rgb",commas:!0,coords:Yn,noAlpha:!0},color:{},rgba:{coords:Un,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Yn},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(a=>Math.round(a*255));let n=r&&t.every(a=>a%17===0);return"#"+t.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=Fn.black,e.alpha=0):e.coords=Fn[t],e.coords)return e}}}}),va=new N({id:"p3",name:"P3",base:ga,fromBase:Ke.fromBase,toBase:Ke.toBase,formats:{color:{id:"display-p3"}}});W.display_space=Ke;if(typeof CSS<"u"&&CSS.supports)for(let t of[I,ma,va]){let e=t.getMinCoords(),n=Bt({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){W.display_space=t;break}}function el(t,{space:e=W.display_space,...r}={}){let n=Bt(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!W.display_space)n=new String(n),n.color=t;else{let o=j(t,e);n=new String(Bt(o,r)),n.color=o}return n}function ya(t,e,r="lab"){r=v.get(r);let n=r.from(t),o=r.from(e);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function tl(t,e){return t=C(t),e=C(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function ce(t){return V(t,[H,"y"])}function $a(t,e){ie(t,[H,"y"],e)}function rl(t){Object.defineProperty(t.prototype,"luminance",{get(){return ce(this)},set(e){$a(this,e)}})}var nl=Object.freeze({__proto__:null,getLuminance:ce,setLuminance:$a,register:rl});function ol(t,e){t=C(t),e=C(e);let r=Math.max(ce(t),0),n=Math.max(ce(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const al=.56,sl=.57,il=.62,ll=.65,Xn=.022,cl=1.414,ul=.1,dl=5e-4,hl=1.14,Zn=.027,fl=1.14;function Gn(t){return t>=Xn?t:t+(Xn-t)**cl}function ye(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function pl(t,e){e=C(e),t=C(t);let r,n,o,a,s,i;e=j(e,"srgb"),[a,s,i]=e.coords;let l=ye(a)*.2126729+ye(s)*.7151522+ye(i)*.072175;t=j(t,"srgb"),[a,s,i]=t.coords;let c=ye(a)*.2126729+ye(s)*.7151522+ye(i)*.072175,d=Gn(l),u=Gn(c),h=u>d;return Math.abs(u-d)<dl?n=0:h?(r=u**al-d**sl,n=r*hl):(r=u**ll-d**il,n=r*fl),Math.abs(n)<ul?o=0:n>0?o=n-Zn:o=n+Zn,o*100}function ml(t,e){t=C(t),e=C(e);let r=Math.max(ce(t),0),n=Math.max(ce(e),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const gl=5e4;function bl(t,e){t=C(t),e=C(e);let r=Math.max(ce(t),0),n=Math.max(ce(e),0);return n>r&&([r,n]=[n,r]),n===0?gl:(r-n)/n}function vl(t,e){t=C(t),e=C(e);let r=V(t,[I,"l"]),n=V(e,[I,"l"]);return Math.abs(r-n)}const yl=216/24389,Wn=24/116,ht=24389/27;let hr=Y.D65;var Rr=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:hr,base:H,fromBase(t){let r=t.map((n,o)=>n/hr[o]).map(n=>n>yl?Math.cbrt(n):(ht*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>Wn?Math.pow(e[0],3):(116*e[0]-16)/ht,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/ht,e[2]>Wn?Math.pow(e[2],3):(116*e[2]-16)/ht].map((n,o)=>n*hr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const fr=Math.pow(5,.5)*.5+.5;function $l(t,e){t=C(t),e=C(e);let r=V(t,[Rr,"l"]),n=V(e,[Rr,"l"]),o=Math.abs(Math.pow(r,fr)-Math.pow(n,fr)),a=Math.pow(o,1/fr)*Math.SQRT2-40;return a<7.5?0:a}var xt=Object.freeze({__proto__:null,contrastWCAG21:ol,contrastAPCA:pl,contrastMichelson:ml,contrastWeber:bl,contrastLstar:vl,contrastDeltaPhi:$l});function wl(t,e,r={}){rt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(xt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}t=C(t),e=C(e);for(let a in xt)if("contrast"+n.toLowerCase()===a.toLowerCase())return xt[a](t,e,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function wa(t){let[e,r,n]=nt(t,H),o=e+15*r+3*n;return[4*e/o,9*r/o]}function Ca(t){let[e,r,n]=nt(t,H),o=e+r+n;return[e/o,r/o]}function Cl(t){Object.defineProperty(t.prototype,"uv",{get(){return wa(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return Ca(this)}})}var xl=Object.freeze({__proto__:null,uv:wa,xy:Ca,register:Cl});function kl(t,e){return ya(t,e,"lab")}const Sl=Math.PI,qn=Sl/180;function El(t,e,{l:r=2,c:n=1}={}){let[o,a,s]=I.from(t),[,i,l]=qe.from(I,[o,a,s]),[c,d,u]=I.from(e),h=qe.from(I,[c,d,u])[1];i<0&&(i=0),h<0&&(h=0);let f=o-c,p=i-h,g=a-d,b=s-u,w=g**2+b**2-p**2,L=.511;o>=16&&(L=.040975*o/(1+.01765*o));let F=.0638*i/(1+.0131*i)+.638,z;Number.isNaN(l)&&(l=0),l>=164&&l<=345?z=.56+Math.abs(.2*Math.cos((l+168)*qn)):z=.36+Math.abs(.4*Math.cos((l+35)*qn));let re=Math.pow(i,4),st=Math.sqrt(re/(re+1900)),it=F*(st*z+1-st),Z=(f/(r*L))**2;return Z+=(p/(n*F))**2,Z+=w/it**2,Math.sqrt(Z)}const Jn=203;var Jr=new v({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:H,fromBase(t){return t.map(e=>Math.max(e*Jn,0))},toBase(t){return t.map(e=>Math.max(e/Jn,0))}});const ft=1.15,pt=.66,Kn=2610/2**14,_l=2**14/2610,Qn=3424/2**12,eo=2413/2**7,to=2392/2**7,Ml=1.7*2523/2**5,ro=2**5/(1.7*2523),mt=-.56,pr=16295499532821565e-27,Tl=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Al=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Pl=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Rl=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var xa=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Jr,fromBase(t){let[e,r,n]=t,o=ft*e-(ft-1)*n,a=pt*r-(pt-1)*e,i=_(Tl,[o,a,n]).map(function(h){let f=Qn+eo*(h/1e4)**Kn,p=1+to*(h/1e4)**Kn;return(f/p)**Ml}),[l,c,d]=_(Pl,i);return[(1+mt)*l/(1+mt*l)-pr,c,d]},toBase(t){let[e,r,n]=t,o=(e+pr)/(1+mt-mt*(e+pr)),s=_(Rl,[o,r,n]).map(function(h){let f=Qn-h**ro,p=to*h**ro-eo;return 1e4*(f/p)**_l}),[i,l,c]=_(Al,s),d=(i+(ft-1)*c)/ft,u=(l+(pt-1)*d)/pt;return[d,u,c]},formats:{color:{}}}),Br=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:xa,fromBase(t){let[e,r,n]=t,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Zt(o)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]},formats:{color:{}}});function Bl(t,e){let[r,n,o]=Br.from(t),[a,s,i]=Br.from(e),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let d=o-i,u=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const ka=3424/4096,Sa=2413/128,Ea=2392/128,no=2610/16384,Ll=2523/32,Nl=16384/2610,oo=32/2523,zl=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Ol=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Il=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Dl=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Lr=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Jr,fromBase(t){let e=_(zl,t);return jl(e)},toBase(t){let e=Hl(t);return _(Dl,e)},formats:{color:{}}});function jl(t){let e=t.map(function(r){let n=ka+Sa*(r/1e4)**no,o=1+Ea*(r/1e4)**no;return(n/o)**Ll});return _(Ol,e)}function Hl(t){return _(Il,t).map(function(n){let o=Math.max(n**oo-ka,0),a=Sa-Ea*n**oo;return 1e4*(o/a)**Nl})}function Vl(t,e){let[r,n,o]=Lr.from(t),[a,s,i]=Lr.from(e);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Fl=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Ul=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Yl=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Xl=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Lt=new v({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:H,fromBase(t){let r=_(Fl,t).map(n=>Math.cbrt(n));return _(Yl,r)},toBase(t){let r=_(Xl,t).map(n=>n**3);return _(Ul,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Zl(t,e){let[r,n,o]=Lt.from(t),[a,s,i]=Lt.from(e),l=r-a,c=n-s,d=o-i;return Math.sqrt(l**2+c**2+d**2)}var Nr=Object.freeze({__proto__:null,deltaE76:kl,deltaECMC:El,deltaE2000:Pr,deltaEJz:Bl,deltaEITP:Vl,deltaEOK:Zl});function Ie(t,e,r={}){rt(r)&&(r={method:r});let{method:n=W.deltaE,...o}=r;t=C(t),e=C(e);for(let a in Nr)if("deltae"+n.toLowerCase()===a.toLowerCase())return Nr[a](t,e,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Gl(t,e=.25){let n=[v.get("oklch","lch"),"l"];return ie(t,n,o=>o*(1+e))}function Wl(t,e=.25){let n=[v.get("oklch","lch"),"l"];return ie(t,n,o=>o*(1-e))}var ql=Object.freeze({__proto__:null,lighten:Gl,darken:Wl});function _a(t,e,r=.5,n={}){[t,e]=[C(t),C(e)],ne(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return ot(t,e,{space:o,outputSpace:a,premultiplied:s})(r)}function Ma(t,e,r={}){let n;Kr(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([t,e]=[C(t),C(e)],n=ot(t,e,l));let c=Ie(t,e),d=o>0?Math.max(s,Math.ceil(c/o)+1):s,u=[];if(i!==void 0&&(d=Math.min(d,i)),d===1)u=[{p:.5,color:n(.5)}];else{let h=1/(d-1);u=Array.from({length:d},(f,p)=>{let g=p*h;return{p:g,color:n(g)}})}if(o>0){let h=u.reduce((f,p,g)=>{if(g===0)return 0;let b=Ie(p.color,u[g-1].color,a);return Math.max(f,b)},0);for(;h>o;){h=0;for(let f=1;f<u.length&&u.length<i;f++){let p=u[f-1],g=u[f],b=(g.p+p.p)/2,w=n(b);h=Math.max(h,Ie(w,p.color),Ie(w,g.color)),u.splice(f,0,{p:b,color:n(b)}),f++}}}return u=u.map(h=>h.color),u}function ot(t,e,r={}){if(Kr(t)){let[l,c]=[t,e];return ot(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;t=C(t),e=C(e),t=Je(t),e=Je(e);let i={colors:[t,e],options:r};if(n?n=v.get(n):n=v.registry[W.interpolationSpace]||t.space,o=o?v.get(o):n,t=j(t,n),e=j(e,n),t=le(t),e=le(e),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[V(t,c),V(e,c)];[d,u]=Xi(l,[d,u]),ie(t,c,d),ie(e,c,u)}return s&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=a?a(l):l;let c=t.coords.map((h,f)=>{let p=e.coords[f];return At(h,p,l)}),d=At(t.alpha,e.alpha,l),u={space:n,coords:c,alpha:d};return s&&(u.coords=u.coords.map(h=>h/d)),o!==n&&(u=j(u,o)),u},{rangeArgs:i})}function Kr(t){return ne(t)==="function"&&!!t.rangeArgs}W.interpolationSpace="lab";function Jl(t){t.defineFunction("mix",_a,{returns:"color"}),t.defineFunction("range",ot,{returns:"function<color>"}),t.defineFunction("steps",Ma,{returns:"array<color>"})}var Kl=Object.freeze({__proto__:null,mix:_a,steps:Ma,range:ot,isRange:Kr,register:Jl}),Ta=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ke,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,o,a]=t,[s,i,l]=[NaN,0,(r+e)/2],c=e-r;if(c!==0){switch(i=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function o(a){let s=(a+e/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Aa=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ta,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[e,o===0?0:200*(1-n/o),100*o]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n*(1-r/2);return[e,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Ql=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Aa,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[e,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[e,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const ec=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],tc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Pa=new N({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:ec,fromXYZ_M:tc}),rc=new N({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Pa,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e)),formats:{color:{id:"a98-rgb"}}});const nc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],oc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Ra=new N({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:qr,toXYZ_M:nc,fromXYZ_M:oc});const ac=1/512,sc=16/512;var ic=new N({id:"prophoto",name:"ProPhoto",base:Ra,toBase(t){return t.map(e=>e<sc?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=ac?e**(1/1.8):16*e)},formats:{color:{id:"prophoto-rgb"}}}),lc=new v({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Lt,fromBase(t){let[e,r,n]=t,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Zt(o)]},toBase(t){let[e,r,n]=t,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[e,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const ao=203,so=2610/2**14,cc=2**14/2610,uc=2523/2**5,io=2**5/2523,lo=3424/2**12,co=2413/2**7,uo=2392/2**7;var dc=new N({id:"rec2100pq",name:"REC.2100-PQ",base:Gt,toBase(t){return t.map(function(e){return(Math.max(e**io-lo,0)/(co-uo*e**io))**cc*1e4/ao})},fromBase(t){return t.map(function(e){let r=Math.max(e*ao/1e4,0),n=lo+co*r**so,o=1+uo*r**so;return(n/o)**uc})},formats:{color:{id:"rec2100-pq"}}});const ho=.17883277,fo=.28466892,po=.55991073,mr=3.7743;var hc=new N({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Gt,toBase(t){return t.map(function(e){return e<=.5?e**2/3*mr:Math.exp((e-po)/ho+fo)/12*mr})},fromBase(t){return t.map(function(e){return e/=mr,e<=1/12?Math.sqrt(3*e):ho*Math.log(12*e-fo)+po})},formats:{color:{id:"rec2100-hlg"}}});const Ba={};se.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=La(t.W1,t.W2,t.options.method))});se.add("chromatic-adaptation-end",t=>{t.M||(t.M=La(t.W1,t.W2,t.options.method))});function Wt({id:t,toCone_M:e,fromCone_M:r}){Ba[t]=arguments[0]}function La(t,e,r="Bradford"){let n=Ba[r],[o,a,s]=_(n.toCone_M,t),[i,l,c]=_(n.toCone_M,e),d=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],u=_(d,n.toCone_M);return _(n.fromCone_M,u)}Wt({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Wt({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Wt({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Wt({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Y,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Y.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const fc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],pc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Na=new N({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Y.ACES,toXYZ_M:fc,fromXYZ_M:pc,formats:{color:{}}});const gt=2**-16,gr=-.35828683,bt=(Math.log2(65504)+9.72)/17.52;var mc=new N({id:"acescc",name:"ACEScc",coords:{r:{range:[gr,bt],name:"Red"},g:{range:[gr,bt],name:"Green"},b:{range:[gr,bt],name:"Blue"}},referred:"scene",base:Na,toBase(t){const e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-gt)*2:r<bt?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(gt)+9.72)/17.52:e<gt?(Math.log2(gt+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})},formats:{color:{}}}),mo=Object.freeze({__proto__:null,XYZ_D65:H,XYZ_D50:qr,XYZ_ABS_D65:Jr,Lab_D65:Rr,Lab:I,LCH:qe,sRGB_Linear:ba,sRGB:Ke,HSL:Ta,HWB:Ql,HSV:Aa,P3_Linear:ga,P3:va,A98RGB_Linear:Pa,A98RGB:rc,ProPhoto_Linear:Ra,ProPhoto:ic,REC_2020_Linear:Gt,REC_2020:ma,OKLab:Lt,OKLCH:lc,Jzazbz:xa,JzCzHz:Br,ICTCP:Lr,REC_2100_PQ:dc,REC_2100_HLG:hc,ACEScg:Na,ACEScc:mc}),pe;const T=class{constructor(...e){Ne(this,pe,void 0);let r;e.length===1&&(r=C(e[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=e,er(this,pe,v.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in be(this,pe).coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get space(){return be(this,pe)}get spaceId(){return be(this,pe).id}clone(){return new T(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=el(this,...e);return r.color=new T(r.color),r}static get(e,...r){return e instanceof T?e:new T(e,...r)}static defineFunction(e,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=T.get(l);else if(a==="function<color>"){let c=l;l=function(...d){let u=c(...d);return T.get(u)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>T.get(c)));return l};e in T||(T[e]=s),o&&(T.prototype[e]=function(...i){return s(this,...i)})}static defineFunctions(e){for(let r in e)T.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(T);else for(let r in e)T.defineFunction(r,e[r])}};let x=T;pe=new WeakMap;x.defineFunctions({get:V,getAll:nt,set:ie,setAll:pa,to:j,equals:tl,inGamut:Ve,toGamut:le,distance:ya,toString:Bt});Object.assign(x,{util:Vi,hooks:se,WHITES:Y,Space:v,spaces:v.registry,parse:fa,defaults:W});for(let t of Object.keys(mo))v.register(mo[t]);for(let t in v.registry)zr(t,v.registry[t]);se.add("colorspace-init-end",t=>{var e;zr(t.id,t),(e=t.aliases)==null||e.forEach(r=>{zr(r,t)})});function zr(t,e){Object.keys(e.coords),Object.values(e.coords).map(n=>n.name);let r=t.replace(/-/g,"_");Object.defineProperty(x.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return v.resolveCoord([e,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=v.resolveCoord([e,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=v.resolveCoord([e,a]);if(l>=0)return o[l]=s,this.setAll(t,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}x.extend(Nr);x.extend({deltaE:Ie});x.extend(ql);x.extend({contrast:wl});x.extend(xl);x.extend(nl);x.extend(Kl);x.extend(xt);function za(t){return Vt(t,(e,r)=>r instanceof x?S(r.toString({format:"hex"})):za(r))}const gc="dodgerblue";function Or(t){const e=Math.abs(t.contrast("white","APCA")),r=Math.abs(t.contrast("black","APCA"));return e>r?"white":"black"}function br({background:t,foreground:e}){return{background:t??new x(Or(e)),foreground:e??new x(Or(t))}}var Nt;(function(t){t.Dark="dark",t.Light="light"})(Nt||(Nt={}));function bc(t){return t==="black"?"white":"black"}const vc={black:{foregroundFaint1:new x("#ccc"),foregroundFaint2:new x("#eee")},white:{foregroundFaint1:new x("#ccc"),foregroundFaint2:new x("#eee")}},yc={black:{backgroundFaint1:new x("#666"),backgroundFaint2:new x("#444")},white:{backgroundFaint1:new x("#ccc"),backgroundFaint2:new x("#fafafa")}};function go({themeColor:t=gc,themeStyle:e=Nt.Light}={}){const r=new x(t),n=new x(e===Nt.Dark?"black":"white"),o=Or(n),a=new x(o),s={nav:{hover:br({background:r.clone().set({"hsl.l":93})}),active:br({background:r.clone().set({"hsl.l":90})}),selected:br({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...yc[bc(o)],foreground:a,...vc[o]}};return za(s)}const zt=Zr()("element-book-change-route"),Ir=q({"vir-icon-color":"currentColor"}),$c=q({"vir-icon-stroke-color":Ir["vir-icon-color"].value,"vir-icon-fill-color":Ir["vir-icon-color"].value}),vr={...Ir,...$c};function Oa({name:t,svgTemplate:e}){return{name:t,templateString:typeof e=="string"?e:Er(e)}}const oe=Gr()({tagName:"vir-icon",hostClasses:{"vir-icon-fit-icon":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>y`
        :host {
            display: block;
            color: ${vr["vir-icon-color"].value};
            fill: ${vr["vir-icon-fill-color"].value};
            stroke: ${vr["vir-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:t})=>t.icon?Ns(t.icon.templateString):""}),wc=Oa({name:"Element16Icon",svgTemplate:m`
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
    `}),{defineElement:ue,defineElementNoInputs:Gc}=Fo(),A=ue()({tagName:"element-book-route-link",cssVars:{"element-book-route-link-anchor-padding":""},styles:({cssVars:t})=>y`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${t["element-book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t,dispatch:e})=>{var n,o;const r=((o=t.router)==null?void 0:o.createRoutesUrl({...(n=t.router)==null?void 0:n.getCurrentRawRoutes(),...t.route}))??"#";return m`
            <a
                href=${r}
                ${D("click",a=>{(!t.router||Ei(a))&&(a.preventDefault(),window.scrollTo(0,0),e(new zt(t.route)))})}
            >
                <slot></slot>
            </a>
        `}}),vt=ue()({tagName:"element-book-nav",styles:y`
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

        ${oe} {
            display: inline-flex;
            color: ${$["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){const e=Ia({indent:0,entryTreeNode:t.tree,rootPath:[],router:t.router,selectedPath:t.selectedPath.slice(1)});return m`
            <ul>
                ${e}
            </ul>
        `}});function Ia({indent:t,entryTreeNode:e,rootPath:r,selectedPath:n,router:o}){const a=e.breadcrumb?r.concat(e.breadcrumb):r,s=e.entry.entryType===G.Page,i=Object.values(e.children).map(l=>Ia({indent:t+1,entryTreeNode:l,rootPath:a,selectedPath:n,router:o}));return m`
        <div class="nav-tree-entry" style="--indent: ${t};">
            <slot name=${ee.NavHeader}></slot>
            <li class=${e.entry.entryType}>
                <${A}
                    ${k(A,{router:o,route:{paths:[R.Book,...a]}})}
                    class=${Bo({"title-row":!0,selected:De(n,a)})}
                >
                    <div class="title-text">
                        ${ae(s,m`
                                <${oe} ${k(oe,{icon:wc})}></${oe}>
                            `)}
                        ${e.entry.title}
                    </div>
                </${A}>
            </li>
            ${i}
        </div>
    `}const Cc=Oa({name:"Element24Icon",svgTemplate:m`
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
    `}),yr=ue()({tagName:"element-book-breadcrumbs",styles:y`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.currentRoute.paths.slice(1);return e.length?e.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":m`
                      <span class="spacer">&gt;</span>
                  `;return m`
                <${A}
                    ${k(A,{route:{hash:void 0,search:void 0,paths:[R.Book,...s]},router:t.router})}
                >
                    ${r}
                </${A}>
                ${i}
            `}):m`
                &nbsp;
            `}}),Ot=Symbol("unset-internal-state");m`
    &nbsp;
`;const yt=ue()({tagName:"element-book-example-controls",styles:y`
        :host {
            display: flex;
            color: ${$["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:t}){return m`
            <span>
                ${t.example.title}
                <span></span>
            </span>
        `}}),$r=ue()({tagName:"element-book-example-viewer",stateInitStatic:{isUnset:Ot},renderCallback({state:t,inputs:e,updateState:r}){if(!e.example.renderCallback||typeof e.example.renderCallback=="string")throw new Error(`Failed to render example '${e.example.title}': renderCallback is not a function`);t.isUnset===Ot&&r({isUnset:void 0,...e.example.stateInitStatic});try{const n=e.example.renderCallback({state:t,updateState:r,controls:e.currentPageControls});return m`
                ${ae(!!e.example.styles,m`
                        <style>
                            ${e.example.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),`${e.breadcrumbs.join(" > ")} failed: ${Ht(n)}`}},options:{allowPolymorphicState:!0}}),$t=ue()({tagName:"element-book-page-controls",events:{controlValueChange:Ge()},styles:y`
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
    `,renderCallback({inputs:t,dispatch:e,events:r}){return Object.entries(t.config).map(([n,o])=>{const a=xc(t.currentValues[n],o.controlType,s=>{e(new r.controlValueChange({name:n,value:s}))});return m`
                    <label class="control-wrapper">
                        <span>${n}</span>
                        ${a}
                    </label>
                `})}});function xc(t,e,r){return e===P.Text?m`
            <input
                type="text"
                .value=${t||""}
                ${D("input",n=>{const o=n.currentTarget;if(!(o instanceof HTMLInputElement))throw new Error("Din't get an input element from the event target.");r(o.value)})}
            />
        `:m`
            <p class="error">${e} controls are not implemented yet.</p>
        `}const wr=ue()({tagName:"element-book-page-examples",styles:y`
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

        .individual-example-wrapper:hover ${yt} {
            color: ${$["element-book-accent-icon-color"].value};
        }
    `,stateInitStatic:{unset:Ot},renderCallback({inputs:t,state:e,updateState:r}){if(e.unset===Ot){const a=Vt(t.page.controls,(s,i)=>i.initValue);r({unset:void 0,...a})}const n=t.page.examples,o=Ls(Object.values(n),a=>t.parentBreadcrumbs.concat(a instanceof Error?a.message:a.title).join(">"),a=>{if(a instanceof Error)return m`
                        <p class="error">${a.message}</p>
                    `;const s=t.parentBreadcrumbs.concat(a.title);return m`
                    <div class="individual-example-wrapper">
                        <${yt}
                            ${k(yt,{example:a})}
                        ></${yt}>
                        <${$r}
                            ${k($r,{example:a,breadcrumbs:s,currentPageControls:e})}
                        ></${$r}>
                    </div>
                `});return m`
            ${ae(!!Object.keys(t.page.controls).length,m`
                    <${$t}
                        ${k($t,{config:t.page.controls,currentValues:e})}
                        ${D($t.events.controlValueChange,a=>{r({[a.detail.name]:a.detail.value})})}
                    ></${$t}>
                `)}
            <section class="examples-wrapper">${o}</section>
        `},options:{allowPolymorphicState:!0}}),$e=ue()({tagName:"element-book-entry-display",styles:y`
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

        ${oe} {
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
    `,renderCallback:({inputs:t,dispatch:e})=>{const r=ja(t.currentNode),n=sa(t.currentRoute.paths),o=Ft(t.currentNode.entry,!1).reverse(),a=Da({nestedPages:r,parentBreadcrumbs:o,isTopLevel:!0,router:t.router,isSearching:!!n});return m`
            <div class="title-bar">
                ${ae(!!n,m`
                        &nbsp;
                    `,m`
                        <${yr}
                            ${k(yr,{currentRoute:t.currentRoute,router:t.router})}
                        ></${yr}>
                    `)}
                <input
                    placeholder="search"
                    .value=${n}
                    ${D("input",async s=>{const i=s.currentTarget;if(!(i instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const l=i.value;await ys(500),i.value===l&&(i.value?e(new zt({paths:[R.Search,encodeURIComponent(i.value)]})):e(new zt(Xt)))})}
                />
            </div>
            <div class="all-examples-wrapper">${a}</div>
            <slot name=${ee.Footer}></slot>
        `}});function Da({nestedPages:t,parentBreadcrumbs:e,isTopLevel:r,router:n,isSearching:o}){return!t.length&&o?[m`
                No results
            `]:t.map(a=>{if($i(a,G.Page)){const s=a.entry;if(!Cs(s,G.Page))throw new Error("nested entry should be a page");const i=m`
                    <${oe} ${k(oe,{icon:Cc})}></${oe}>
                    ${s.title}
                `,l=r?m`
                          <h2 class="header-with-icon">${i}</h2>
                      `:m`
                          <h3 class="header-with-icon">${i}</h3>
                      `,c=[R.Book,...e.concat(a.breadcrumb)];return m`
                    <div class="page-examples">
                        <div class="title-group">
                            <${A}
                                ${k(A,{route:{paths:c,hash:void 0,search:void 0},router:n})}
                            >
                                ${l}
                            </${A}>
                            ${bo(s)}
                        </div>
                        <${wr}
                            ${k(wr,{page:s,parentBreadcrumbs:e})}
                        ></${wr}>
                    </div>
                `}else return Object.entries(a).map(([s,i])=>{const l=r?m`
                                  <h1>${s}</h1>
                              `:m`
                                  <h2>${s}</h2>
                              `,c=[R.Book,...e.concat(i.node.breadcrumb)];return m`
                            <div class="title-group">
                                <${A}
                                    ${k(A,{route:{paths:c,hash:void 0,search:void 0},router:n})}
                                >
                                    ${l}
                                </${A}>
                                ${bo(i.node.entry)}
                            </div>
                            ${Da({nestedPages:i.nested,parentBreadcrumbs:i.node.breadcrumb?e.concat(i.node.breadcrumb):e,isTopLevel:!1,router:n,isSearching:o})}
                        `})}).flat()}function bo(t){const e=(t.descriptionParagraphs??[]).map(r=>m`
            <p>${r}</p>
        `);return m`
        <div class="description">${e}</div>
    `}function ja(t){return t.entry.entryType===G.Page?[t]:[{[t.entry.title]:{node:t,nested:Object.values(t.children).map(ja).flat()}}]}function kc(t,e,r){if(e[0]===R.Search)return t;_r(e.slice(1),t)||r(Xt);const o=_r(e.slice(1),t);if(!o)throw new Error(`Tried to self-correct for invalid path ${e.join("/")}
                        but failed to do so.`);return o}const wt=Gr()({tagName:"element-book-app",events:{pathUpdate:Ge()},stateInitStatic:{currentRoute:Xt,router:void 0,colors:{config:void 0,theme:go(void 0)}},styles:y`
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

        ${$e} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${vt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,cleanupCallback({state:t,updateState:e}){t.router&&(t.router.removeAllRouteListeners(),e({router:void 0}))},renderCallback:({state:t,inputs:e,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c;try{let d=function(b){t.router?t.router.setRoutes(b):n({currentRoute:{...t.currentRoute,...b}}),e.elementBookRoutePaths&&!De(e.elementBookRoutePaths,t.currentRoute.paths)&&o(new a.pathUpdate(b.paths??[]))};var s=d;if(e.elementBookRoutePaths&&!De(e.elementBookRoutePaths,t.currentRoute.paths)&&d({paths:e.elementBookRoutePaths}),(i=e.internalRouterConfig)!=null&&i.useInternalRouter&&!t.router){const b=Ii(e.internalRouterConfig.basePath);n({router:b}),b.addRouteListener(!0,w=>{n({currentRoute:w})})}else!((l=e.internalRouterConfig)!=null&&l.useInternalRouter)&&t.router&&t.router.removeAllRouteListeners();const u={themeColor:e.themeColor};if(!De(u,(c=t.colors)==null?void 0:c.config)){const b=go(u);n({colors:{config:u,theme:b}}),Hi(r,b)}const h=wi(e.entries,e.everythingTitle),f=sa(t.currentRoute.paths),p=f?ki({entries:e.entries,searchQuery:f,startTree:h}):h,g=kc(p,t.currentRoute.paths,d);return m`
                <div
                    class="root"
                    ${D(zt,b=>{const w=r.shadowRoot.querySelector($e.tagName);w?w.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${$e.tagName}' for scrolling.`),d(b.detail)})}
                >
                    <${vt}
                        ${k(vt,{tree:h,router:t.router,selectedPath:t.currentRoute.paths})}
                    >
                        <slot
                            name=${ee.NavHeader}
                            slot=${ee.NavHeader}
                        ></slot>
                    </${vt}>
                    <${$e}
                        ${k($e,{currentRoute:t.currentRoute,currentNode:g,router:t.router})}
                    >
                        <slot
                            name=${ee.Footer}
                            slot=${ee.Footer}
                        ></slot>
                    </${$e}>
                </div>
            `}catch(d){return console.error(d),m`
                <p class="error">${Ht(d)}</p>
            `}}}),at=Ee({title:"Elements",parent:void 0}),Ha=y`
    pointer-events: none;
    opacity: 0.3;
`,Fe=q({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Sc(t){return`${t}px`}const It=q({"vira-form-input-border-radius":"8px"}),Dt=q({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":y`calc(${It["vira-form-input-border-radius"].value} + 4px)`});function Va({mainSelector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=3}){const o=S(Sc(n+r+e));return y`
        ${S(t)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Dt["vira-focus-outline-color"].value};
            border-radius: ${Dt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Ce=y`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Fa=y`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,vo="vira-",{defineElement:qt,defineElementNoInputs:Wc}=Fo({assertInputs:t=>{if(!t.tagName.startsWith(vo))throw new Error(`Tag name should start with '${vo}' but got '${t.tagName}'`)}}),Dr=q({"vira-icon-color":"currentColor"}),Ec=q({"vira-icon-stroke-color":Dr["vira-icon-color"].value,"vira-icon-fill-color":Dr["vira-icon-color"].value}),xe={...Dr,...Ec},B=qt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>y`
        :host {
            display: inline-block;
            color: ${xe["vira-icon-color"].value};
            fill: ${xe["vira-icon-fill-color"].value};
            stroke: ${xe["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:t})=>t.icon?t.icon.svgTemplate:""});var Ua=(t=>(t.Default="vira-button-default",t.Outline="vira-button-outline",t))(Ua||{});const M=qt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:t,cssVars:e})=>y`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Fa};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${Dt["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
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
            ${Ha};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Ce};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${It["vira-form-input-border-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition: color ${Fe["vira-interaction-animation-duration"].value},
                background-color
                    ${Fe["vira-interaction-animation-duration"].value},
                border-color ${Fe["vira-interaction-animation-duration"].value};
        }

        ${Va({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${B} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?m`
                  <${B}
                      ${k(B,{icon:t.icon})}
                  ></${B}>
              `:"",r=t.text?m`
                  <span class="text-template">${t.text}</span>
              `:"";return m`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}}),Qr=Ee({parent:at,title:"Button"}),_c=Me({parent:Qr,title:M.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:P.Text,initValue:""},"Secondary color":{controlType:P.Text,initValue:""},"Hover color":{controlType:P.Text,initValue:""},"Active color":{controlType:P.Text,initValue:""}},defineExamplesCallback({defineExample:t}){function e({title:r,styles:n,inputs:o}){const a=n??y``;t({title:r,styles:a,renderCallback({controls:s}){const i=y`
                        ${M.cssVars["vira-button-primary-color"].name}: ${S(s["Primary color"]||"inherit")};
                        ${M.cssVars["vira-button-secondary-color"].name}: ${S(s["Secondary color"]||"inherit")};
                        ${M.cssVars["vira-button-primary-hover-color"].name}: ${S(s["Hover color"]||"inherit")};
                        ${M.cssVars["vira-button-primary-active-color"].name}: ${S(s["Active color"]||"inherit")};
                    `;return m`
                        <${M}
                            style=${i}
                            ${k(M,{text:"hello",...o})}
                        ></${M}>
                    `}})}e({title:"basic"}),e({title:"outline",inputs:{buttonStyle:Ua.Outline}}),e({title:"disabled",inputs:{disabled:!0}}),e({title:"custom width",styles:y`
                ${M} {
                    width: 100px;
                }
            `}),e({title:"custom height",styles:y`
                ${M} {
                    height: 75px;
                }
            `})}}),Mc=Me({parent:Qr,title:"with custom colors",descriptionParagraphs:["These are not necessarily GOOD color combinations, but they are custom!"],defineExamplesCallback({defineExample:t}){t({title:"custom colors",styles:y`
                :host {
                    ${M.cssVars["vira-button-primary-color"].name}: pink;
                    ${M.cssVars["vira-button-secondary-color"].name}: purple;
                    ${M.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${M.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return m`
                    <${M}
                        ${k(M,{text:"hello"})}
                    ></${M}>
                `}})}}),Tc=[Qr,_c,Mc];var jr=(t=>(t.Header="header",t))(jr||{});const K=qt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},styles:({hostClasses:t})=>y`
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
            transition: height ${Fe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ge()},stateInitStatic:{contentHeight:0},renderCallback({state:t,updateState:e,dispatch:r,events:n,inputs:o}){const a=o.expanded?y`
                  height: ${t.contentHeight}px;
              `:y`
                  height: 0;
              `;return m`
            <button
                class="header-wrapper"
                ${D("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Vo(({contentRect:s})=>{e({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Ya=Ee({title:"Collapsible",parent:at}),Ac=Me({title:K.tagName,parent:Ya,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamplesCallback({defineExample:t}){t({title:"stacked examples",styles:y`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:e,state:r}){return Array(3).fill(0).map((n,o)=>m`
                            <${K}
                                ${k(K,{expanded:!!r.expandedStates[o]})}
                                ${D(K.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,e({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${jr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${D("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],e({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ae(!!r.showMoreStates[o],m`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${K}>
                        `)}}),t({title:"wider examples",styles:y`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:e,state:r}){return Array(3).fill(0).map((n,o)=>m`
                            <${K}
                                ${k(K,{expanded:!!r.expandedStates[o]})}
                                ${D(K.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,e({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${jr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${D("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],e({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ae(!!r.showMoreStates[o],m`
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
                        `)}})}}),Pc=[Ya,Ac];function Xa({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}const Rc=Xa({name:"Element16Icon",svgTemplate:m`
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
    `}),Ue=Xa({name:"Element24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),Bc={Element16Icon:Rc,Element24Icon:Ue},Za=Ee({title:"Icon",parent:at}),Lc=Me({title:B.tagName,parent:Za,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],defineExamplesCallback({defineExample:t}){t({title:"basic",renderCallback(){return m`
                    <${B} ${k(B,{icon:Ue})}></${B}>
                `}})}}),Nc=[Za,Lc];function Hr({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>Hr({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function Ga({value:t,allowed:e,blocked:r}){const n=e?Hr({input:t,matcher:e}):!0,o=r?Hr({input:t,matcher:r}):!1;return n&&!o}function yo(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,o)=>(Ga({...t,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}const O=qt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-has-value":({inputs:t})=>!!t.value,"vira-input-fit-text":({inputs:t})=>!!t.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Ge(),inputBlocked:Ge()},styles:({hostClasses:t,cssVars:e})=>y`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Dt["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${Ha};
            }

            ${t["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${t["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${t["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${t["vira-input-fit-text"].selector} .size-span {
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
                ${Fa};
                vertical-align: middle;
                max-height: 100%;
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
                border-radius: ${It["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${Fe["vira-interaction-animation-duration"].value};
            }

            label {
                ${Ce};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${It["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Va({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${B} {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ce};
                cursor: text;
                margin: ${e["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${e["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${e["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${e["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:o})=>{const{filtered:a}=yo({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),s=t.icon?m`
                  <${B} ${k(B,{icon:t.icon})}></${B}>
              `:"",i=t.fitText?y`
                  width: ${r.forcedInputWidth}px;
              `:"";return m`
            <label>
                ${s}
                ${ae(!!t.fitText,m`
                        <span
                            class="size-span"
                            ${Vo(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${Bo({"have-value":!!a})}
                    style=${i}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${a}
                    ${D("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=a;let h=c.value??"";if(d)if(d.length===1)Ga({value:d,allowed:t.allowedInputs,blocked:t.blockedInputs})||(h=u,e(new o.inputBlocked(d)));else{const{filtered:f,blocked:p}=yo({value:d,allowed:t.allowedInputs,blocked:t.blockedInputs});h=f,e(new o.inputBlocked(p))}c.value!==h&&(c.value=h),u!==h&&e(new o.valueChange(h))})}
                    placeholder=${t.placeholder}
                />
                ${ae(!!t.suffix,m`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Wa=Ee({title:"Input",parent:at});function $o(t,e,r,n){return Me({title:t,parent:Wa,descriptionParagraphs:r,controls:(()=>{const o={"Text color":{controlType:P.Text,initValue:""},"Placeholder color":{controlType:P.Text,initValue:""},"Border color":{controlType:P.Text,initValue:""},"Focus color":{controlType:P.Text,initValue:""},"Selection color":{controlType:P.Text,initValue:""}};return e?o:{}})(),defineExamplesCallback({defineExample:o}){function a({styles:s,title:i,inputs:l}){o({title:i,styles:y`
                        ${s||y``}
                    `,stateInitStatic:{value:l.value},renderCallback({state:c,updateState:d,controls:u}){const h=e?y`
                                  ${O.cssVars["vira-input-text-color"].name}: ${S(u["Text color"]||"inherit")};
                                  ${O.cssVars["vira-input-border-color"].name}: ${S(u["Border color"]||"inherit")};
                                  ${O.cssVars["vira-input-focus-border-color"].name}: ${S(u["Focus color"]||"inherit")};
                                  ${O.cssVars["vira-input-placeholder-color"].name}: ${S(u["Placeholder color"]||"inherit")};
                                  ${O.cssVars["vira-input-text-selection-color"].name}: ${S(u["Selection color"]||"inherit")};
                              `:y``;return m`
                            <${O}
                                style=${h}
                                ${k(O,{...l,value:c.value,...n})}
                                ${D(O.events.valueChange,f=>{d({value:f.detail})})}
                            ></${O}>
                        `}})}a({title:"basic",inputs:{value:"default value"}}),a({title:"with icon",inputs:{value:"",icon:Ue}}),a({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),a({title:"with suffix",inputs:{value:"42",suffix:"px"}}),a({title:"disabled",inputs:{value:"disabled",disabled:!0}}),a({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),a({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),a({title:"custom width",styles:y`
                    ${O} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Ue}}),a({title:"custom height",styles:y`
                    ${O} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"height",icon:Ue}}),a({title:"max width",styles:y`
                    ${O} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42"}})}})}const zc=[$o(O.tagName,!0,["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."]),$o("vira-input fit text",!0,["Set the input 'fitText' to true for automatic sizing to fit the given text."],{fitText:!0})],Oc=[Wa,...zc],qa=Ee({parent:void 0,title:"Icons"}),Ic=Me({title:"All Icons",parent:qa,controls:{"Icon Color":{controlType:P.Text,initValue:""},"Stroke Color":{controlType:P.Text,initValue:""},"Fill Color":{controlType:P.Text,initValue:""}},defineExamplesCallback({defineExample:t}){Object.values(Bc).forEach(e=>{t({title:e.name,renderCallback({controls:r}){const n=y`
                        ${xe["vira-icon-color"].name}: ${S(r["Icon Color"]||"inherit")};
                        ${xe["vira-icon-fill-color"].name}: ${S(r["Fill Color"]||"inherit")};
                        ${xe["vira-icon-stroke-color"].name}: ${S(r["Stroke Color"]||"inherit")};
                    `;return m`
                        <${B} style=${n} ${k(B,{icon:e})}></${B}>
                    `}})})}}),Dc=[qa,Ic],jc=[at,...Dc,...Tc,...Pc,...Nc,...Oc];Yt({tagName:"vira-book-app",styles:y`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${wt} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,renderCallback(){return m`
            <${wt}
                ${k(wt,{internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:jc,themeColor:"#33ccff"})}
            >
                <h1 slot=${ee.NavHeader}>Vira</h1>
            </${wt}>
        `}});
