var Gs=Object.defineProperty;var Xs=(e,t,r)=>t in e?Gs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var lr=(e,t,r)=>(Xs(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Js(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Qs={capitalizeFirstLetter:!1};function Ks(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function ei(e,t){return t.capitalizeFirstLetter?Ks(e):e}function ta(e,t=Qs){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return ei(n,t)}function ra(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Jt(r).trim()).join(`
`))}function Jt(e){return e?e instanceof Error?e.message:ee(e,"message")?String(e.message):String(e):""}function tn(e){return e instanceof Error?e:new Error(Jt(e))}function ft(e){return!!e}function Pn(e){return!!e&&typeof e=="object"}function ti(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const ri=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ee(e,t){return e?ri.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function na(e,t){return e&&t.every(r=>ee(e,r))}function Y(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ni(e){return Array.isArray(e)?"array":typeof e}function Qt(e,t){return ni(e)===t}function Nn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Rn="Failed to compare objects using JSON.stringify";function Bn(e,t,r){return Nn({source:e,errorHandler(n){if(r)return"";throw n}})===Nn({source:t,errorHandler(n){if(r)return"";throw n}})}function Ke(e,t,r={}){try{return e===t?!0:Pn(e)&&Pn(t)?Bn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Ke(e[o],t[o])):!1:Bn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=tn(n);throw o.message.startsWith(Rn)||(o.message=`${Rn}: ${o.message}`),o}}function oi(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ai(e){return Y(e).filter(t=>isNaN(Number(t)))}function si(e){return ai(e).map(r=>e[r])}function ii(e,t){return si(t).includes(e)}function he(e,t){let r=!1;const n=Y(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Y(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function li(e){const t=rn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function rn(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${rn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ln(e,t){try{return oa(e,t),!0}catch{return!1}}function oa(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ci(e,t){return ee(e,"entryType")&&e.entryType===t}var z;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(z||(z={}));function Pe(e,t){return e.controlType===t}var T;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(T||(T={}));const aa=Symbol("any-type"),ui={[T.Checkbox]:!1,[T.Color]:"",[T.Dropdown]:"",[T.Hidden]:aa,[T.Number]:0,[T.Text]:""};function di(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=ui[o.controlType];a!==aa&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function nn(e,t){const r=Rt(e.title);return e.parent?[...nn(e.parent,!1),Rt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Rt(e){return Js(e).toLowerCase().replaceAll(/\s/g,"-")}function fi({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Me(e){const t={...e,entryType:z.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:z.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ft)};r.add(n.title),t.elementExamples[Rt(o.title)]=o}}),t}var ue;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ue||(ue={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ae=e=>(...t)=>({_$litDirective$:e,values:t});let $e=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cr;const Bt=window,Ie=Bt.trustedTypes,On=Ie?Ie.createPolicy("lit-html",{createHTML:e=>e}):void 0,Lt="$lit$",le=`lit$${(Math.random()+"").slice(9)}$`,on="?"+le,hi=`<${on}>`,Te=document,ot=()=>Te.createComment(""),at=e=>e===null||typeof e!="object"&&typeof e!="function",sa=Array.isArray,ia=e=>sa(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ur=`[ 	
\f\r]`,Ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zn=/-->/g,Hn=/>/g,we=RegExp(`>|${ur}(?:([^\\s"'>=/]+)(${ur}*=${ur}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dn=/'/g,In=/"/g,la=/^(?:script|style|textarea|title)$/i,pi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ca=pi(1),Z=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Vn=new WeakMap,ke=Te.createTreeWalker(Te,129,null,!1);function ua(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return On!==void 0?On.createHTML(t):t}const da=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Ze;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Ze?u[1]==="!--"?s=zn:u[1]!==void 0?s=Hn:u[2]!==void 0?(la.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=we):u[3]!==void 0&&(s=we):s===we?u[0]===">"?(s=o??Ze,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?we:u[3]==='"'?In:Dn):s===In||s===Dn?s=we:s===zn||s===Hn?s=Ze:(s=we,o=void 0);const h=s===we&&e[i+1].startsWith("/>")?" ":"";a+=s===Ze?l+hi:d>=0?(n.push(c),l.slice(0,d)+Lt+l.slice(d)+le+h):l+le+(d===-2?(n.push(void 0),i):h)}return[ua(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class st{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=da(t,r);if(this.el=st.createElement(c,n),ke.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=ke.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Lt)||f.startsWith(le)){const h=u[s++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+Lt).split(le),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:m[2],strings:p,ctor:m[1]==="."?ha:m[1]==="?"?pa:m[1]==="@"?ma:pt})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(la.test(o.tagName)){const d=o.textContent.split(le),f=d.length-1;if(f>0){o.textContent=Ie?Ie.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],ot()),ke.nextNode(),l.push({type:2,index:++a});o.append(d[f],ot())}}}else if(o.nodeType===8)if(o.data===on)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(le,d+1))!==-1;)l.push({type:7,index:a}),d+=le.length-1}a++}}static createElement(t,r){const n=Te.createElement("template");return n.innerHTML=t,n}}function _e(e,t,r=e,n){var o,a,s,i;if(t===Z)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=at(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=_e(e,l._$AS(e,t.values),l,n)),t}class fa{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Te).importNode(n,!0);ke.currentNode=a;let s=ke.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new je(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new ga(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=ke.nextNode(),i++)}return ke.currentNode=Te,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class je{constructor(t,r,n,o){var a;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=_e(this,t,r),at(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==Z&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ia(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&at(this._$AH)?this._$AA.nextSibling.data=t:this.$(Te.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=st.createElement(ua(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new fa(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=Vn.get(t.strings);return r===void 0&&Vn.set(t.strings,r=new st(t)),r}T(t){sa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new je(this.k(ot()),this.k(ot()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class pt{constructor(t,r,n,o,a){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=_e(this,t,r,0),s=!at(t)||t!==this._$AH&&t!==Z,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=_e(this,i[n+l],r,l),c===Z&&(c=this._$AH[l]),s||(s=!at(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ha extends pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}const mi=Ie?Ie.emptyScript:"";class pa extends pt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,mi):this.element.removeAttribute(this.name)}}class ma extends pt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=_e(this,t,r,0))!==null&&n!==void 0?n:P)===Z)return;const o=this._$AH,a=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==P&&(o===P||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ga{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){_e(this,t)}}const gi={O:Lt,P:le,A:on,C:1,M:da,L:fa,D:ia,R:_e,I:je,V:pt,H:pa,N:ma,U:ha,F:ga},jn=Bt.litHtmlPolyfillSupport;jn==null||jn(st,je),((cr=Bt.litHtmlVersions)!==null&&cr!==void 0?cr:Bt.litHtmlVersions=[]).push("2.7.5");const bi=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new je(t.insertBefore(ot(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:vi}=gi,Fn=()=>document.createComment(""),qe=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(Fn(),a),i=o.insertBefore(Fn(),a);r=new vi(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},xe=(e,t,r=e)=>(e._$AI(t,r),e),$i={},yi=(e,t=$i)=>e._$AH=t,wi=e=>e._$AH,dr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const an=Ae(class extends $e{constructor(e){var t;if(super(e),e.type!==ht.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return Z}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},xi=Ae(class extends $e{constructor(e){if(super(e),e.type!==ht.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=wi(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,f=0,h=a.length-1,p=0,m=s.length-1;for(;f<=h&&p<=m;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[p])c[p]=xe(a[f],s[p]),f++,p++;else if(l[h]===i[m])c[m]=xe(a[h],s[m]),h--,m--;else if(l[f]===i[m])c[m]=xe(a[f],s[m]),qe(e,c[m+1],a[f]),f++,m--;else if(l[h]===i[p])c[p]=xe(a[h],s[p]),qe(e,a[f],a[h]),h--,p++;else if(u===void 0&&(u=Un(i,p,m),d=Un(l,f,h)),u.has(l[f]))if(u.has(l[h])){const g=d.get(i[p]),x=g!==void 0?a[g]:null;if(x===null){const E=qe(e,a[f]);xe(E,s[p]),c[p]=E}else c[p]=xe(x,s[p]),qe(e,a[f],x),a[g]=null;p++}else dr(a[h]),h--;else dr(a[f]),f++;for(;p<=m;){const g=qe(e,c[m+1]);xe(g,s[p]),c[p++]=g}for(;f<=h;){const g=a[f++];g!==null&&dr(g)}return this.ht=i,yi(e,c),Z}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nr=class extends $e{constructor(t){if(super(t),this.et=P,t.type!==ht.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.ft=void 0,this.et=t;if(t===Z)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Nr.directiveName="unsafeHTML",Nr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wn=class extends Nr{};Wn.directiveName="unsafeSVG",Wn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ba(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=window,sn=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ln=Symbol(),Yn=new WeakMap;let va=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ln)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(sn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Yn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Yn.set(r,t))}return t}toString(){return this.cssText}};const M=e=>new va(typeof e=="string"?e:e+"",void 0,ln),Ce=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new va(r,e,ln)},ki=(e,t)=>{sn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=At.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Zn=sn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return M(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fr;const Ot=window,qn=Ot.trustedTypes,Ci=qn?qn.emptyScript:"",Gn=Ot.reactiveElementPolyfillSupport,Rr={toAttribute(e,t){switch(t){case Boolean:e=e?Ci:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},$a=(e,t)=>t!==e&&(t==t||e==e),hr={attribute:!0,type:String,converter:Rr,reflect:!1,hasChanged:$a},Br="finalized";class Le extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=hr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||hr}static finalize(){if(this.hasOwnProperty(Br))return!1;this[Br]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Zn(o))}else t!==void 0&&r.push(Zn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ki(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=hr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Rr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Rr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||$a)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Le[Br]=!0,Le.elementProperties=new Map,Le.elementStyles=[],Le.shadowRootOptions={mode:"open"},Gn==null||Gn({ReactiveElement:Le}),((fr=Ot.reactiveElementVersions)!==null&&fr!==void 0?fr:Ot.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pr,mr;class He extends Le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=bi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Z}}He.finalized=!0,He._$litElement$=!0,(pr=globalThis.litElementHydrateSupport)===null||pr===void 0||pr.call(globalThis,{LitElement:He});const Xn=globalThis.litElementPolyfillSupport;Xn==null||Xn({LitElement:He});((mr=globalThis.litElementVersions)!==null&&mr!==void 0?mr:globalThis.litElementVersions=[]).push("3.3.2");var Ei=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var m in n)p[m]=m==="access"?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function(x){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(x||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=s(g.get))&&(u.get=d),(d=s(g.set))&&(u.set=d),(d=s(g.init))&&o.unshift(d)}else(d=s(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Si=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Ti=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function _i(){function e(t,r){return t}return e}let ya=(()=>{let e=[_i()],t,r=[],n;return n=class extends He{},Ti(n,"DeclarativeElement"),Ei(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Si(n,r),n})();function Jn(e){return e!==e.toUpperCase()}function Mi(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=Jn(s)||Jn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Ai=["january","february","march","april","may","june","july","august","september","october","november","december"];Ai.map(e=>e.slice(0,3));function Pi(e){return!!e&&typeof e=="object"}function Qn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ni(e){return Array.isArray(e)?"array":typeof e}function Ri(e,t){return Ni(e)===t}function Bi(e,t){let r=!1;const n=Qn(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Qn(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function j(e){if(Pi(e))return Bi(e,(r,n)=>{if(!Ri(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Mi(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?M(r):r.startsWith("-")?Ce`-${M(r)}`:Ce`--${M(r)}`;return{name:s,value:Ce`var(${s}, ${M(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${j.name}' function.`)}function Li({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},zi=(e,t,r)=>{t.constructor.createProperty(r,e)};function Kt(e){return(t,r)=>r!==void 0?zi(e,t,r):Oi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr;((gr=window.HTMLSlotElement)===null||gr===void 0?void 0:gr.prototype.assignedElements)!=null;const cn=Symbol("key for ignoring inputs not having been set yet"),Hi={[cn]:!0,allowPolymorphicState:!1};function wa(e,t){const r=e.instanceState;Y(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Y(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),xa(e)}function xa(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function ka(e,t){return Ii(e,t),e.element}function Di(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ii(e,t){const r=Di(e),n=r?`: in ${r}`:"";if(e.type!==ht.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function A(e,t){return t?Kn(e,t):Kn(void 0,e)}const Kn=Ae(class extends $e{constructor(e){super(e),this.element=ka(e,"assign")}render(e,t){return Vi(e,this.element,t),Z}});function Vi(e,t,r){wa(t,r)}function Ca(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ya?!0:Ca(r)}function eo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}let ji=class extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}};function un(){return e=>{var t;return t=class extends ji{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Ea(){return un()}function Fi(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=un()(r);return t[r]=n,t},{}):{}}const to="_is_element_vir_observable_property_handler_instance",ro="_is_element_vir_observable_property_handler_creator";function Ui(e){return ee(e,ro)&&e[ro]===!0}function Wi(e){return ee(e,to)&&e[to]===!0}function Yi(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function no(e,t){const r=e;function n(s){t?Yi(s,e,e.tagName):Kt()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function u(d){s[i]=d,r[i]=d}return Ui(l)&&(l=l.init()),Wi(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,d=>{u(d)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):u(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Zi(e){return e?he(e,t=>t):{}}function qi({hostClassNames:e,cssVars:t}){return{hostClasses:he(e,(r,n)=>({name:M(n),selector:M(`:host(.${n})`)})),cssVars:t}}function Gi({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Y(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Xi(e,t){function r(o){Y(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Ji=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function dn(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Hi,...e.options},n=Fi(e.events),o=Zi(e.hostClasses);e.hostClasses&&eo(e.tagName,e.hostClasses),e.cssVars&&eo(e.tagName,e.cssVars);const a=e.cssVars?j(e.cssVars):{},s=typeof e.styles=="function"?e.styles(qi({hostClassNames:o,cssVars:a})):e.styles||Ce``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends ya{createRenderParams(){return Xi(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){xa(this)}render(){try{Ca(this)&&!this.haveInputsBeenSet&&!r[cn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${A.name}" directive on it. If no inputs are intended, use "${dn.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Gi({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=tn(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){wa(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=no(this,!1),this.instanceState=no(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};Y(u).forEach(f=>{Kt()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Ji(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:ta(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Sa(){return e=>dn({...e,options:{[cn]:!1,...e.options}})}function ce(e,t){return Qi(e,t)}const Qi=Ae(class extends $e{constructor(e){super(e),this.element=ka(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Z}});function er(e,t,r){return ba(e,()=>t,()=>r)}function Ki(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Sa()(r(n))),defineElementNoInputs:n=>(t(n),dn(r(n)))}}function el(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Lr(e){return ee(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function fn(e){return ee(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ta(e){return e.map(t=>Lr(t)?t.definition:t).filter(t=>fn(t))}const _a=new WeakMap;function tl(e,t){var o;const r=Ta(t);return(o=Ma(_a,[e,...r]).value)==null?void 0:o.template}function rl(e,t,r){const n=Ta(t);return Pa(_a,[e,...n],r)}function Ma(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Aa(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ma(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Aa(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Pa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Aa(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Pa(l,t,r,n+1)}const nl=new WeakMap;function Na(e,t,r){const n=tl(e,t),o=n??r();if(!n){const i=rl(e,t,o);if(i.result)nl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=el(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Ra(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let m,g=[];if(typeof f=="string"&&(m=r(f,c,p),m)){o[d]=f+m.replacement,s.push(h);const E=m.getExtraValues;g=E?E(p):[],g.length&&E?(o[d]+=" ",g.forEach((k,_)=>{_&&o.push(" ")}),i.push(k=>{const _=k[h],B=E(_);return{index:h,values:B}}),o.push(c)):o[d]+=c}m||o.push(c);const x=e.raw[u];m?(a[d]=a[d]+m.replacement+x,g.length&&g.forEach(()=>{a.push("")})):a.push(x)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function ol(...[e,t,r]){if(fn(r))return{replacement:r.tagName,getExtraValues:void 0}}function al(e,t){return Ra(e,t,ol)}function q(e,...t){const r=Na(e,t,()=>al(e,t));return Ce(r.strings,...r.values)}function sl(...[e,t,r]){const n=Lr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=fn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Lr(c)?c.inputs:void 0;return[o&&u&&Object.values(u).length?A(u):void 0].filter(ft)}}}function il(e){}function ll(e){return Ra(e.strings,e.values,sl,il)}function $(e,...t){const r=ca(e,...t),n=Na(e,t,()=>ll(r));return{...r,strings:n.strings,values:n.values}}const cl={[z.ElementExample]:()=>[],[z.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...di(e.controls,e.title)].filter(ft),[z.Root]:()=>[]},zt="_isBookTreeNode",Ba=new Map;function ul(e){return Ba.get(e)}function dl(e,t){oi(Ba,e,()=>t)}function De(e,t){return!!(La(e)&&e.entry.entryType===t)}function La(e){return!!(na(e,[zt,"entry"])&&e[zt])}function fl(e,t){return{[zt]:!0,entry:{entryType:z.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function hl({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=ul(e);if(o)return o;const a=fl(t,r);e.forEach(l=>hn({tree:a,newEntry:l,debug:n,manuallyAdded:!0}));const s=Oa(a),i={tree:a,flattenedNodes:s};return dl(e,i),n&&console.info("element-book tree:",a),i}function pl(e,t,r){if(!t.parent)return e;const n=Or(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),hn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Or(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${nn(t,!1)}`);return o}function hn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=cl[t.entryType](t);t.errors.push(...o);const a=pl(e,t,r),s=Rt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[zt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,ci(t,z.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>hn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Or(e,t){const r=La(e)?e.fullUrlBreadcrumbs.slice(0,-1):nn(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Oa(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Oa(o));return[e,...r].flat()}function ml(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function pn(e,t){return mn(e,t,void 0)}function mn(e,t,r){const n=t[0];if(!n)return{};const o=ml(e,n,r);if(!o)return{};const a=t.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,...mn(o.children,a,r)}}function gl(e,t,r){const n=ti(e);return mn(n,t,r),n}function za(e,t){return he(e.children,(n,o)=>De(o,z.Page)?{children:za(o,{}),controls:{...t,...he(o.entry.controls,(a,s)=>s.initValue)}}:{children:{},controls:{}})}async function bl(e=1){const t=rn();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const vl=globalThis.crypto;function $l(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return vl.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function yl(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{oa(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Ge(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function wl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const xl=$l(32);function zr(e){return e.join(xl)}function Ha(e){if(!e.length)return[];const t=zr(e),r=Ha(e.slice(0,-1));return[t,...r]}const kl=["error","errors"];function Cl(e){return kl.includes(e)}function El({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&Cl(t);if(wl({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)Ha(n.fullUrlBreadcrumbs).forEach(i=>r[i]=!0);else{const s=zr(n.fullUrlBreadcrumbs);r[s]=!1}}),e.filter(n=>{const o=zr(n.fullUrlBreadcrumbs),a=r[o];if(!Qt(a,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var D;(function(e){e.Search="search",e.Book="book"})(D||(D={}));function Da(e){return e[0]===D.Book?"":e[1]?decodeURIComponent(e[1]):""}const it={hash:void 0,paths:[D.Book],search:void 0},Sl=0;function gn(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Sl)}class tr extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class oo extends tr{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const lt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Tl=globalThis.history.pushState;function ao(...e){const t=Tl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(lt)),t}const _l=globalThis.history.replaceState;function so(...e){const t=_l.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(lt)),t}function Ml(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ao)throw new oo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===so)throw new oo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ao,globalThis.history.replaceState=so,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(lt))})}}function Al(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Pl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Nl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),a=globalThis.location.search?Al(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:a,hash:s}}function Ia(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Va({routeBase:e,windowPath:t}){if(!e)return"";const r=Ia(e);if(ja({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Va({routeBase:n,windowPath:t}):""}function ja({routeBase:e,windowPath:t}){const r=Ia(e);return r?t.startsWith(`/${r}`):!1}class Rl extends tr{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Fa(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const io=6;function lo(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>io)throw new Rl(`Route sanitization depth has exceed the max of ${io} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Fa(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class br extends tr{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Bl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new br(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new br(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new br(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Ll(e,t,r=!1){const n=Ua(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ua(e,t){var l;const r=ja({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Pl(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",s=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(ft).join("/")}${o}${s}`}function Ol(e={}){Bl(e),Ml();const t=e.routeBase?Va({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>lo(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Fa(l,u)))return Ll(u,t,s)},createRoutesUrl(a){return Ua(a,t)},getCurrentRawRoutes(){return Nl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new tr(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(lt,n),r=!0),a&&lo(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(lt,n),r=!1),s},sanitizationDepth:0};return o}function zl(e){return Ol({routeBase:e,routeSanitizer(t){return{paths:Hl(t.paths),hash:void 0,search:void 0}}})}function Hl(e){const t=e[0];if(ii(t,D)){if(t===D.Book)return[D.Book,...e.slice(1)];if(t===D.Search)return e[1]?[t,e[1]]:[D.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return it.paths}const C=j({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Dl={nav:{hover:{background:C["element-book-nav-hover-background-color"],foreground:C["element-book-nav-hover-foreground-color"]},active:{background:C["element-book-nav-active-background-color"],foreground:C["element-book-nav-active-foreground-color"]},selected:{background:C["element-book-nav-selected-background-color"],foreground:C["element-book-nav-selected-foreground-color"]}},accent:{icon:C["element-book-accent-icon-color"]},page:{background:C["element-book-page-background-color"],backgroundFaint1:C["element-book-page-background-faint-level-1-color"],backgroundFaint2:C["element-book-page-background-faint-level-2-color"],foreground:C["element-book-page-foreground-color"],foregroundFaint1:C["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:C["element-book-page-foreground-faint-level-2-color"]}};function Il(e,t){Wa(e,t,Dl)}function Hr(e){return ee(e,"_$cssResult$")}function co(e){return na(e,["name","value","default"])&&Qt(e.default,"string")&&Hr(e.name)&&Hr(e.value)}function Wa(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Hr(o)){if(!co(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Li({forCssVar:a,onElement:e,toValue:String(o)})}else{if(co(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Wa(e,o,a)}})}function N(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function mt(e){return fe(e)==="string"}function fe(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ht(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ya(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Za(e){return e[e.length-1]}function Dt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function qa(e,t,r){return(r-e)/(t-e)}function bn(e,t,r){return Dt(t[0],t[1],qa(e[0],e[1],r))}function Ga(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Vl=Object.freeze({__proto__:null,interpolate:Dt,interpolateInv:qa,isString:mt,last:Za,mapRange:bn,multiplyMatrices:N,parseCoordGrammar:Ga,parseFunction:Ya,toPrecision:Ht,type:fe});class jl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const pe=new jl;var ae={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const re={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Dr(e){return Array.isArray(e)?e:re[e]}function It(e,t,r,n={}){if(e=Dr(e),t=Dr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(pe.run("chromatic-adaptation-start",o),o.M||(o.W1===re.D65&&o.W2===re.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===re.D50&&o.W2===re.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),pe.run("chromatic-adaptation-end",o),o.M)return N(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Fl=75e-6,U=class U{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?U.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Dr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Ul(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),pe.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Fl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=uo(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=uo(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=U.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=U.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(U.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof U)return t;if(fe(t)==="string"){let o=U.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return U.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=fe(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=U.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=fe(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=U.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};lr(U,"registry",{}),lr(U,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=U;function Ul(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function uo(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ga(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=bn(i,l,a)),a=Ht(a,o),c&&(a+=c),a})}return e}var J=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class F extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=J),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=N(t.toXYZ_M,r);return this.white!==this.base.white&&(n=It(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=It(this.base.white,this.white,r),N(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Xa(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(pe.run("parse-start",r),r.color)return r.color;if(r.parsed=Ya(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((m,g)=>r.parsed.args[g]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Za(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,m],g)=>{var ye;let x=u.coordGrammar[g],E=(ye=f[g])==null?void 0:ye.type,k=x.find(de=>de==E);if(!k){let de=m.name||p;throw new TypeError(`${E} not allowed for ${de} in ${l}()`)}let _=k.range;E==="<percentage>"&&(_||(_=[0,1]));let B=m.range||m.refRange;return _&&B&&(f[g]=bn(_,B,f[g])),k})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function S(e){if(!e)throw new TypeError("Empty color reference");mt(e)&&(e=Xa(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function gt(e,t){return t=b.get(t),t.from(e)}function Q(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return gt(e,r)[n]}function Ja(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function me(e,t,r){if(e=S(e),arguments.length===2&&fe(arguments[1])==="object"){let n=arguments[1];for(let o in n)me(e,o,n[o])}else{typeof r=="function"&&(r=r(Q(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=gt(e,n);a[o]=r,Ja(e,n,a)}return e}var vn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:J,fromBase:e=>It(J.white,"D50",e),toBase:e=>It("D50",J.white,e),formats:{color:{}}});const Wl=216/24389,fo=24/116,wt=24389/27;let vr=re.D50;var W=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:vr,base:vn,fromBase(e){let r=e.map((n,o)=>n/vr[o]).map(n=>n>Wl?Math.cbrt(n):(wt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fo?Math.pow(t[0],3):(116*t[0]-16)/wt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wt,t[2]>fo?Math.pow(t[2],3):(116*t[2]-16)/wt].map((n,o)=>n*vr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function rr(e){return(e%360+360)%360}function Yl(e,t){if(e==="raw")return t;let[r,n]=t.map(rr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var ct=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:W,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),rr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ho=25**7,Vt=Math.PI,po=180/Vt,Ne=Vt/180;function Ir(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=W.from(e),l=ct.from(W,[a,s,i])[1],[c,u,d]=W.from(t),f=ct.from(W,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,m=.5*(1-Math.sqrt(p/(p+ho))),g=(1+m)*s,x=(1+m)*u,E=Math.sqrt(g**2+i**2),k=Math.sqrt(x**2+d**2),_=g===0&&i===0?0:Math.atan2(i,g),B=x===0&&d===0?0:Math.atan2(d,x);_<0&&(_+=2*Vt),B<0&&(B+=2*Vt),_*=po,B*=po;let ye=c-a,de=k-E,ne=B-_,Ue=_+B,En=Math.abs(ne),We;E*k===0?We=0:En<=180?We=ne:ne>180?We=ne-360:ne<-180?We=ne+360:console.log("the unthinkable has happened");let Sn=2*Math.sqrt(k*E)*Math.sin(We*Ne/2),Us=(a+c)/2,ir=(E+k)/2,Tn=Math.pow(ir,7),se;E*k===0?se=Ue:En<=180?se=Ue/2:Ue<360?se=(Ue+360)/2:se=(Ue-360)/2;let _n=(Us-50)**2,Ws=1+.015*_n/Math.sqrt(20+_n),Mn=1+.045*ir,Ye=1;Ye-=.17*Math.cos((se-30)*Ne),Ye+=.24*Math.cos(2*se*Ne),Ye+=.32*Math.cos((3*se+6)*Ne),Ye-=.2*Math.cos((4*se-63)*Ne);let An=1+.015*ir*Ye,Ys=30*Math.exp(-1*((se-275)/25)**2),Zs=2*Math.sqrt(Tn/(Tn+ho)),qs=-1*Math.sin(2*Ys*Ne)*Zs,yt=(ye/(r*Ws))**2;return yt+=(de/(n*Mn))**2,yt+=(Sn/(o*An))**2,yt+=qs*(de/(n*Mn))*(Sn/(o*An)),Math.sqrt(yt)}const Zl=75e-6;function et(e,t=e.space,{epsilon:r=Zl}={}){e=S(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ut(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ge(e,{method:t=ae.gamut_mapping,space:r=e.space}={}){if(mt(arguments[1])&&(r=arguments[1]),r=b.get(r),et(e,r,{epsilon:0}))return S(e);let n=G(e,r);if(t!=="clip"&&!et(e,r)){let o=ge(ut(n),{method:"clip",space:r});if(Ir(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=G(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=Q(l,i);for(;h-f>d;){let p=ut(l);p=ge(p,{space:r,method:"clip"}),Ir(l,p)-2<d?f=Q(l,i):h=Q(l,i),me(l,i,(f+h)/2)}n=G(l,r)}else n=o}if(t==="clip"||!et(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=G(n,e.space)),e.coords=n.coords,e}ge.returns="color";function G(e,t,{inGamut:r}={}){e=S(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ge(o)),o}G.returns="color";function jt(e,{precision:t=ae.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=S(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!et(e)&&(i=ge(ut(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>Ht(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Ht(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const ql=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Gl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var nr=new F({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:ql,fromXYZ_M:Gl,formats:{color:{}}});const xt=1.09929682680944,mo=.018053968510807;var Qa=new F({id:"rec2020",name:"REC.2020",base:nr,toBase(e){return e.map(function(t){return t<mo*4.5?t/4.5:Math.pow((t+xt-1)/xt,1/.45)})},fromBase(e){return e.map(function(t){return t>=mo?xt*Math.pow(t,.45)-(xt-1):4.5*t})},formats:{color:{}}});const Xl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Jl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ka=new F({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Xl,fromXYZ_M:Jl});const Ql=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Kl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var es=new F({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Ql,fromXYZ_M:Kl,formats:{color:{}}}),go={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let bo=Array(3).fill("<percentage> | <number>[0, 255]"),vo=Array(3).fill("<number>[0, 255]");var dt=new F({id:"srgb",name:"sRGB",base:es,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:bo},rgb_number:{name:"rgb",commas:!0,coords:vo,noAlpha:!0},color:{},rgba:{coords:bo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:vo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=go.black,t.alpha=0):t.coords=go[e],t.coords)return t}}}}),ts=new F({id:"p3",name:"P3",base:Ka,fromBase:dt.fromBase,toBase:dt.toBase,formats:{color:{id:"display-p3"}}});ae.display_space=dt;if(typeof CSS<"u"&&CSS.supports)for(let e of[W,Qa,ts]){let t=e.getMinCoords(),n=jt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ae.display_space=e;break}}function ec(e,{space:t=ae.display_space,...r}={}){let n=jt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ae.display_space)n=new String(n),n.color=e;else{let o=G(e,t);n=new String(jt(o,r)),n.color=o}return n}function rs(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function tc(e,t){return e=S(e),t=S(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function be(e){return Q(e,[J,"y"])}function ns(e,t){me(e,[J,"y"],t)}function rc(e){Object.defineProperty(e.prototype,"luminance",{get(){return be(this)},set(t){ns(this,t)}})}var nc=Object.freeze({__proto__:null,getLuminance:be,register:rc,setLuminance:ns});function oc(e,t){e=S(e),t=S(t);let r=Math.max(be(e),0),n=Math.max(be(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const ac=.56,sc=.57,ic=.62,lc=.65,$o=.022,cc=1.414,uc=.1,dc=5e-4,fc=1.14,yo=.027,hc=1.14;function wo(e){return e>=$o?e:e+($o-e)**cc}function Re(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function pc(e,t){t=S(t),e=S(e);let r,n,o,a,s,i;t=G(t,"srgb"),[a,s,i]=t.coords;let l=Re(a)*.2126729+Re(s)*.7151522+Re(i)*.072175;e=G(e,"srgb"),[a,s,i]=e.coords;let c=Re(a)*.2126729+Re(s)*.7151522+Re(i)*.072175,u=wo(l),d=wo(c),f=d>u;return Math.abs(d-u)<dc?n=0:f?(r=d**ac-u**sc,n=r*fc):(r=d**lc-u**ic,n=r*hc),Math.abs(n)<uc?o=0:n>0?o=n-yo:o=n+yo,o*100}function mc(e,t){e=S(e),t=S(t);let r=Math.max(be(e),0),n=Math.max(be(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const gc=5e4;function bc(e,t){e=S(e),t=S(t);let r=Math.max(be(e),0),n=Math.max(be(t),0);return n>r&&([r,n]=[n,r]),n===0?gc:(r-n)/n}function vc(e,t){e=S(e),t=S(t);let r=Q(e,[W,"l"]),n=Q(t,[W,"l"]);return Math.abs(r-n)}const $c=216/24389,xo=24/116,kt=24389/27;let $r=re.D65;var Vr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:$r,base:J,fromBase(e){let r=e.map((n,o)=>n/$r[o]).map(n=>n>$c?Math.cbrt(n):(kt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>xo?Math.pow(t[0],3):(116*t[0]-16)/kt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/kt,t[2]>xo?Math.pow(t[2],3):(116*t[2]-16)/kt].map((n,o)=>n*$r[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const yr=Math.pow(5,.5)*.5+.5;function yc(e,t){e=S(e),t=S(t);let r=Q(e,[Vr,"l"]),n=Q(t,[Vr,"l"]),o=Math.abs(Math.pow(r,yr)-Math.pow(n,yr)),a=Math.pow(o,1/yr)*Math.SQRT2-40;return a<7.5?0:a}var Pt=Object.freeze({__proto__:null,contrastAPCA:pc,contrastDeltaPhi:yc,contrastLstar:vc,contrastMichelson:mc,contrastWCAG21:oc,contrastWeber:bc});function wc(e,t,r={}){mt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Pt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=S(e),t=S(t);for(let a in Pt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Pt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function os(e){let[t,r,n]=gt(e,J),o=t+15*r+3*n;return[4*t/o,9*r/o]}function as(e){let[t,r,n]=gt(e,J),o=t+r+n;return[t/o,r/o]}function xc(e){Object.defineProperty(e.prototype,"uv",{get(){return os(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return as(this)}})}var kc=Object.freeze({__proto__:null,register:xc,uv:os,xy:as});function Cc(e,t){return rs(e,t,"lab")}const Ec=Math.PI,ko=Ec/180;function Sc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=W.from(e),[,i,l]=ct.from(W,[o,a,s]),[c,u,d]=W.from(t),f=ct.from(W,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,p=i-f,m=a-u,g=s-d,x=m**2+g**2-p**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let k=.0638*i/(1+.0131*i)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*ko)):_=.36+Math.abs(.4*Math.cos((l+35)*ko));let B=Math.pow(i,4),ye=Math.sqrt(B/(B+1900)),de=k*(ye*_+1-ye),ne=(h/(r*E))**2;return ne+=(p/(n*k))**2,ne+=x/de**2,Math.sqrt(ne)}const Co=203;var $n=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:J,fromBase(e){return e.map(t=>Math.max(t*Co,0))},toBase(e){return e.map(t=>Math.max(t/Co,0))}});const Ct=1.15,Et=.66,Eo=2610/2**14,Tc=2**14/2610,So=3424/2**12,To=2413/2**7,_o=2392/2**7,_c=1.7*2523/2**5,Mo=2**5/(1.7*2523),St=-.56,wr=16295499532821565e-27,Mc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Ac=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Pc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Nc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ss=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:$n,fromBase(e){let[t,r,n]=e,o=Ct*t-(Ct-1)*n,a=Et*r-(Et-1)*t,i=N(Mc,[o,a,n]).map(function(f){let h=So+To*(f/1e4)**Eo,p=1+_o*(f/1e4)**Eo;return(h/p)**_c}),[l,c,u]=N(Pc,i);return[(1+St)*l/(1+St*l)-wr,c,u]},toBase(e){let[t,r,n]=e,o=(t+wr)/(1+St-St*(t+wr)),s=N(Nc,[o,r,n]).map(function(f){let h=So-f**Mo,p=_o*f**Mo-To;return 1e4*(h/p)**Tc}),[i,l,c]=N(Ac,s),u=(i+(Ct-1)*c)/Ct,d=(l+(Et-1)*u)/Et;return[u,d,c]},formats:{color:{}}}),jr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ss,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),rr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Rc(e,t){let[r,n,o]=jr.from(e),[a,s,i]=jr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const is=3424/4096,ls=2413/128,cs=2392/128,Ao=2610/16384,Bc=2523/32,Lc=16384/2610,Po=32/2523,Oc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],zc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Hc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Dc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Fr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:$n,fromBase(e){let t=N(Oc,e);return Ic(t)},toBase(e){let t=Vc(e);return N(Dc,t)},formats:{color:{}}});function Ic(e){let t=e.map(function(r){let n=is+ls*(r/1e4)**Ao,o=1+cs*(r/1e4)**Ao;return(n/o)**Bc});return N(zc,t)}function Vc(e){return N(Hc,e).map(function(n){let o=Math.max(n**Po-is,0),a=ls-cs*n**Po;return 1e4*(o/a)**Lc})}function jc(e,t){let[r,n,o]=Fr.from(e),[a,s,i]=Fr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Fc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Uc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Wc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Yc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Ft=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:J,fromBase(e){let r=N(Fc,e).map(n=>Math.cbrt(n));return N(Wc,r)},toBase(e){let r=N(Yc,e).map(n=>n**3);return N(Uc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Zc(e,t){let[r,n,o]=Ft.from(e),[a,s,i]=Ft.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Ut={deltaE76:Cc,deltaECMC:Sc,deltaE2000:Ir,deltaEJz:Rc,deltaEITP:jc,deltaEOK:Zc};function Qe(e,t,r={}){mt(r)&&(r={method:r});let{method:n=ae.deltaE,...o}=r;e=S(e),t=S(t);for(let a in Ut)if("deltae"+n.toLowerCase()===a.toLowerCase())return Ut[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function qc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return me(e,n,o=>o*(1+t))}function Gc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return me(e,n,o=>o*(1-t))}var Xc=Object.freeze({__proto__:null,darken:Gc,lighten:qc});function us(e,t,r=.5,n={}){[e,t]=[S(e),S(t)],fe(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return bt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function ds(e,t,r={}){let n;yn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[S(e),S(t)],n=bt(e,t,l));let c=Qe(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let m=p*f;return{p:m,color:n(m)}})}if(o>0){let f=d.reduce((h,p,m)=>{if(m===0)return 0;let g=Qe(p.color,d[m-1].color,a);return Math.max(h,g)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let p=d[h-1],m=d[h],g=(m.p+p.p)/2,x=n(g);f=Math.max(f,Qe(x,p.color),Qe(x,m.color)),d.splice(h,0,{p:g,color:n(g)}),h++}}}return d=d.map(f=>f.color),d}function bt(e,t,r={}){if(yn(e)){let[l,c]=[e,t];return bt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=S(e),t=S(t),e=ut(e),t=ut(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[ae.interpolationSpace]||e.space,o=o?b.get(o):n,e=G(e,n),t=G(t,n),e=ge(e),t=ge(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Q(e,c),Q(t,c)];[u,d]=Yl(l,[u,d]),me(e,c,u),me(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Dt(f,p,l)}),u=Dt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=G(d,o)),d},{rangeArgs:i})}function yn(e){return fe(e)==="function"&&!!e.rangeArgs}ae.interpolationSpace="lab";function Jc(e){e.defineFunction("mix",us,{returns:"color"}),e.defineFunction("range",bt,{returns:"function<color>"}),e.defineFunction("steps",ds,{returns:"array<color>"})}var Qc=Object.freeze({__proto__:null,isRange:yn,mix:us,range:bt,register:Jc,steps:ds}),fs=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),hs=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:fs,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Kc=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:hs,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const eu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],tu=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ps=new F({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:eu,fromXYZ_M:tu}),ru=new F({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ps,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const nu=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],ou=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var ms=new F({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:vn,toXYZ_M:nu,fromXYZ_M:ou});const au=1/512,su=16/512;var iu=new F({id:"prophoto",name:"ProPhoto",base:ms,toBase(e){return e.map(t=>t<su?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=au?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),lu=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Ft,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),rr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const No=203,Ro=2610/2**14,cu=2**14/2610,uu=2523/2**5,Bo=2**5/2523,Lo=3424/2**12,Oo=2413/2**7,zo=2392/2**7;var du=new F({id:"rec2100pq",name:"REC.2100-PQ",base:nr,toBase(e){return e.map(function(t){return(Math.max(t**Bo-Lo,0)/(Oo-zo*t**Bo))**cu*1e4/No})},fromBase(e){return e.map(function(t){let r=Math.max(t*No/1e4,0),n=Lo+Oo*r**Ro,o=1+zo*r**Ro;return(n/o)**uu})},formats:{color:{id:"rec2100-pq"}}});const Ho=.17883277,Do=.28466892,Io=.55991073,xr=3.7743;var fu=new F({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:nr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*xr:(Math.exp((t-Io)/Ho)+Do)/12*xr})},fromBase(e){return e.map(function(t){return t/=xr,t<=1/12?Math.sqrt(3*t):Ho*Math.log(12*t-Do)+Io})},formats:{color:{id:"rec2100-hlg"}}});const gs={};pe.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=bs(e.W1,e.W2,e.options.method))});pe.add("chromatic-adaptation-end",e=>{e.M||(e.M=bs(e.W1,e.W2,e.options.method))});function or({id:e,toCone_M:t,fromCone_M:r}){gs[e]=arguments[0]}function bs(e,t,r="Bradford"){let n=gs[r],[o,a,s]=N(n.toCone_M,e),[i,l,c]=N(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=N(u,n.toCone_M);return N(n.fromCone_M,d)}or({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});or({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});or({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});or({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(re,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});re.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const hu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],pu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var vs=new F({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:re.ACES,toXYZ_M:hu,fromXYZ_M:pu,formats:{color:{}}});const Tt=2**-16,kr=-.35828683,_t=(Math.log2(65504)+9.72)/17.52;var mu=new F({id:"acescc",name:"ACEScc",coords:{r:{range:[kr,_t],name:"Red"},g:{range:[kr,_t],name:"Green"},b:{range:[kr,_t],name:"Blue"}},referred:"scene",base:vs,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Tt)*2:r<_t?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Tt)+9.72)/17.52:t<Tt?(Math.log2(Tt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Vo=Object.freeze({__proto__:null,A98RGB:ru,A98RGB_Linear:ps,ACEScc:mu,ACEScg:vs,HSL:fs,HSV:hs,HWB:Kc,ICTCP:Fr,JzCzHz:jr,Jzazbz:ss,LCH:ct,Lab:W,Lab_D65:Vr,OKLCH:lu,OKLab:Ft,P3:ts,P3_Linear:Ka,ProPhoto:iu,ProPhoto_Linear:ms,REC_2020:Qa,REC_2020_Linear:nr,REC_2100_HLG:fu,REC_2100_PQ:du,XYZ_ABS_D65:$n,XYZ_D50:vn,XYZ_D65:J,sRGB:dt,sRGB_Linear:es});class y{constructor(...t){let r;t.length===1&&(r=S(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new y(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=ec(this,...t);return r.color=new y(r.color),r}static get(t,...r){return t instanceof y?t:new y(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=y.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return y.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>y.get(c)));return l};t in y||(y[t]=s),o&&(y.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)y.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(y);else for(let r in t)y.defineFunction(r,t[r])}}y.defineFunctions({get:Q,getAll:gt,set:me,setAll:Ja,to:G,equals:tc,inGamut:et,toGamut:ge,distance:rs,toString:jt});Object.assign(y,{util:Vl,hooks:pe,WHITES:re,Space:b,spaces:b.registry,parse:Xa,defaults:ae});for(let e of Object.keys(Vo))b.register(Vo[e]);for(let e in b.registry)Ur(e,b.registry[e]);pe.add("colorspace-init-end",e=>{var t;Ur(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ur(r,e)})});function Ur(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(y.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}y.extend(Ut);y.extend({deltaE:Qe});Object.assign(y,{deltaEMethods:Ut});y.extend(Xc);y.extend({contrast:wc});y.extend(kc);y.extend(nc);y.extend(Qc);y.extend(Pt);function $s(e){return he(e,(t,r)=>r instanceof y?M(r.toString({format:"hex"})):$s(r))}const gu="dodgerblue";function Wr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Cr({background:e,foreground:t}){return{background:e??new y(Wr(t)),foreground:t??new y(Wr(e))}}var Wt;(function(e){e.Dark="dark",e.Light="light"})(Wt||(Wt={}));function bu(e){return e==="black"?"white":"black"}const vu={black:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")},white:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")}},$u={black:{backgroundFaint1:new y("#666"),backgroundFaint2:new y("#444")},white:{backgroundFaint1:new y("#ccc"),backgroundFaint2:new y("#fafafa")}};function jo({themeColor:e=gu,themeStyle:t=Wt.Light}={}){const r=new y(e),n=new y(t===Wt.Dark?"black":"white"),o=Wr(n),a=new y(o),s={nav:{hover:Cr({background:r.clone().set({"hsl.l":93})}),active:Cr({background:r.clone().set({"hsl.l":90})}),selected:Cr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...$u[bu(o)],foreground:a,...vu[o]}};return $s(s)}const Yt=un()("element-book-change-route");var yu=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var m in n)p[m]=m==="access"?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function(x){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(x||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=s(g.get))&&(u.get=d),(d=s(g.set))&&(u.set=d),(d=s(g.init))&&o.unshift(d)}else(d=s(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},wu=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},xu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function ku(){function e(t,r){return t}return e}let ys=(()=>{let e=[ku()],t,r=[],n;return n=class extends He{},xu(n,"DeclarativeElement"),yu(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,wu(n,r),n})();const wn=Symbol("key for ignoring inputs not having been set yet"),Cu={[wn]:!0,allowPolymorphicState:!1};function ws(e,t){const r=e.instanceState;Y(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Y(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),xs(e)}function xs(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function ks(e,t){return Yr(e,t),e.element}function Eu(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Yr(e,t){const r=Eu(e),n=r?`: in ${r}`:"";if(e.type!==ht.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function V(e,t){return t?Fo(e,t):Fo(void 0,e)}const Fo=Ae(class extends $e{constructor(e){super(e),this.element=ks(e,"assign")}render(e,t){return Su(e,this.element,t),Z}});function Su(e,t,r){ws(t,r)}function Cs(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ys?!0:Cs(r)}function Uo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Tu extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Es(){return e=>{var t;return t=class extends Tu{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function ve(){return Es()}function _u(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Es()(r);return t[r]=n,t},{}):{}}const Wo="_is_element_vir_observable_property_handler_instance",Yo="_is_element_vir_observable_property_handler_creator";function Mu(e){return ee(e,Yo)&&e[Yo]===!0}function Au(e){return ee(e,Wo)&&e[Wo]===!0}function Pu(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Zo(e,t){const r=e;function n(s){t?Pu(s,e,e.tagName):Kt()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function u(d){s[i]=d,r[i]=d}return Mu(l)&&(l=l.init()),Au(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,d=>{u(d)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):u(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Nu(e){return e?he(e,t=>t):{}}function Ru({hostClassNames:e,cssVars:t}){return{hostClasses:he(e,(r,n)=>({name:M(n),selector:M(`:host(.${n})`)})),cssVars:t}}function Bu({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Y(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Lu(e,t){function r(o){Y(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Ou=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function ar(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Cu,...e.options},n=_u(e.events),o=Nu(e.hostClasses);e.hostClasses&&Uo(e.tagName,e.hostClasses),e.cssVars&&Uo(e.tagName,e.cssVars);const a=e.cssVars?j(e.cssVars):{},s=typeof e.styles=="function"?e.styles(Ru({hostClassNames:o,cssVars:a})):e.styles||Ce``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends ys{createRenderParams(){return Lu(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){xs(this)}render(){try{Cs(this)&&!this.haveInputsBeenSet&&!r[wn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${V.name}" directive on it. If no inputs are intended, use "${ar.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Bu({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=tn(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){ws(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Zo(this,!1),this.instanceState=Zo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};Y(u).forEach(f=>{Kt()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Ou(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:ta(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function zu(){return e=>ar({...e,options:{[wn]:!1,...e.options}})}function X(e,t){return Hu(e,t)}const Hu=Ae(class extends $e{constructor(e){super(e),this.element=ks(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Z}}),Er="onResize",sr=Ae(class extends $e{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Yr(e,Er)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Er} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Yr(e,Er),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Ve(e,t,r){return ba(e,()=>t,()=>r)}function Ss(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),zu()(r(n))),defineElementNoInputs:n=>(t(n),ar(r(n)))}}function Du(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Zr(e){return ee(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function xn(e){return ee(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ts(e){return e.map(t=>Zr(t)?t.definition:t).filter(t=>xn(t))}const _s=new WeakMap;function Iu(e,t){var o;const r=Ts(t);return(o=Ms(_s,[e,...r]).value)==null?void 0:o.template}function Vu(e,t,r){const n=Ts(t);return Ps(_s,[e,...n],r)}function Ms(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=As(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ms(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function As(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ps(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=As(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Ps(l,t,r,n+1)}const ju=new WeakMap;function Ns(e,t,r){const n=Iu(e,t),o=n??r();if(!n){const i=Vu(e,t,o);if(i.result)ju.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=Du(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Rs(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let m,g=[];if(typeof f=="string"&&(m=r(f,c,p),m)){o[d]=f+m.replacement,s.push(h);const E=m.getExtraValues;g=E?E(p):[],g.length&&E?(o[d]+=" ",g.forEach((k,_)=>{_&&o.push(" ")}),i.push(k=>{const _=k[h],B=E(_);return{index:h,values:B}}),o.push(c)):o[d]+=c}m||o.push(c);const x=e.raw[u];m?(a[d]=a[d]+m.replacement+x,g.length&&g.forEach(()=>{a.push("")})):a.push(x)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function Fu(...[e,t,r]){if(xn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Uu(e,t){return Rs(e,t,Fu)}function v(e,...t){const r=Ns(e,t,()=>Uu(e,t));return Ce(r.strings,...r.values)}function Wu(...[e,t,r]){const n=Zr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=xn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Zr(c)?c.inputs:void 0;return[o&&u&&Object.values(u).length?V(u):void 0].filter(ft)}}}function Yu(e){}function Zu(e){return Rs(e.strings,e.values,Wu,Yu)}function w(e,...t){const r=ca(e,...t),n=Ns(e,t,()=>Zu(r));return{...r,strings:n.strings,values:n.values}}const qo="vira-",{defineElement:vt,defineElementNoInputs:wd}=Ss({assertInputs:e=>{if(!e.tagName.startsWith(qo))throw new Error(`Tag name should start with '${qo}' but got '${e.tagName}'`)}}),Bs=v`
    pointer-events: none;
    opacity: 0.3;
`,tt=j({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function qu(e){return`${e}px`}const Zt=j({"vira-form-input-border-radius":"8px"}),qt=j({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${Zt["vira-form-input-border-radius"].value} + 4px)`});function Ls({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=M(qu(n+r+t));return v`
        ${M(e)}::after {
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
    `}const Oe=v`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Os=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,qr=j({"vira-icon-color":"currentColor"}),Gu=j({"vira-icon-stroke-color":qr["vira-icon-color"].value,"vira-icon-fill-color":qr["vira-icon-color"].value}),Nt={...qr,...Gu},L=vt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            color: ${Nt["vira-icon-color"].value};
            fill: ${Nt["vira-icon-fill-color"].value};
            stroke: ${Nt["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Gr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Gr||(Gr={}));vt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Gr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Os};
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
            ${Bs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Oe};
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
            transition: color ${tt["vira-interaction-animation-duration"].value},
                background-color
                    ${tt["vira-interaction-animation-duration"].value},
                border-color ${tt["vira-interaction-animation-duration"].value};
        }

        ${Ls({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${L} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?w`
                  <${L}
                      ${V(L,{icon:e.icon})}
                  ></${L}>
              `:"",r=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:"";return w`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Xr;(function(e){e.Header="header"})(Xr||(Xr={}));vt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Oe};
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
    `,events:{expandChange:ve()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${X("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Xr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${sr(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Jr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Jr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function zs({value:e,allowed:t,blocked:r}){const n=t?Jr({input:e,matcher:t}):!0,o=r?Jr({input:e,matcher:r}):!1;return n&&!o}function Go(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(zs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}vt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ve(),inputBlocked:ve()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${qt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
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
                ${Oe};
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
                ${Os};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${Oe};
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
                    ${tt["vira-interaction-animation-duration"].value};
            }

            label {
                ${Oe};
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

            ${Ls({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${L} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Oe};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Go({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?w`
                  <${L} ${V(L,{icon:e.icon})}></${L}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return w`
            <label>
                ${s}
                ${Ve(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${sr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${an({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${X("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)zs({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:h,blocked:p}=Go({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=h,t(new o.inputBlocked(p))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${Ve(!!e.suffix,w`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});vt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:ve()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&gn(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return w`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return w`
                <a href=${s} rel="noopener noreferrer" ${X("click",n)}>
                    <slot></slot>
                </a>
            `}}});function kn({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Xu=kn({name:"Element16Icon",svgTemplate:w`
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
    `});kn({name:"Element24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const Ju=kn({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${Nt["vira-icon-stroke-color"].value}"
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
`;const{defineElement:te,defineElementNoInputs:xd}=Ki(),I=te()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>q`
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
                ${ce("click",a=>{(!e.router||gn(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Yt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),oe=te()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>q`
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
            ${I.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${L} {
            display: inline-flex;
            color: ${C["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=q`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return $`
                <li style=${n}>
                    <${I}
                        ${A(I,{router:e.router,route:{paths:[D.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${an({"title-row":!0,selected:e.selectedPath?Ke(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${er(De(r,z.ElementExample),$`
                                    <${L}
                                        ${A(L,{icon:Xu})}
                                    ></${L}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${I}>
                </li>
            `});return $`
            <slot name=${ue.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}});async function Ku(e){await bl(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await yl(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const K=te()({tagName:"book-error",styles:q`
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
    `,renderCallback({inputs:e}){return(Qt(e.message,"array")?e.message:[e.message]).map(r=>$`
                    <p>${r}</p>
                `)}}),Sr=te()({tagName:"book-breadcrumbs",styles:q`
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
                <${I}
                    ${A(I,{route:{hash:void 0,search:void 0,paths:[D.Book,...s]},router:e.router})}
                >
                    ${r}
                </${I}>
                ${i}
            `}):$`
                &nbsp;
            `}}),Tr=te()({tagName:"book-breadcrumbs-bar",styles:q`
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
            ${er(!!e.currentSearch,$`
                    &nbsp;
                `,$`
                    <${Sr}
                        ${A(Sr,{currentRoute:e.currentRoute,router:e.router})}
                    ></${Sr}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${ce("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await li(200),n.value===o&&(n.value?t(new Yt({paths:[D.Search,encodeURIComponent(n.value)]})):t(new Yt(it)))})}
            />
        `}}),Ee=te()({tagName:"book-page-controls",events:{controlValueChange:Ea()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>q`
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

        ${L}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===T.Hidden)return"";const s=ed(e.currentValues[n],o,i=>{const l=Qt(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return $`
                    <div class="control-wrapper">
                        ${er(a===0,$`
                                <${L}
                                    class="options-icon"
                                    ${A(L,{icon:Ju})}
                                ></${L}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function ed(e,t,r){return Pe(t,T.Hidden)?"":Pe(t,T.Checkbox)?$`
            <input
                type="checkbox"
                .value=${e}
                ${ce("input",n=>{const o=Ge(n,HTMLInputElement);r(o.checked)})}
            />
        `:Pe(t,T.Color)?$`
            <input
                type="color"
                .value=${e}
                ${ce("input",n=>{const o=Ge(n,HTMLInputElement);r(o.value)})}
            />
        `:Pe(t,T.Text)?$`
            <input
                type="text"
                .value=${e}
                ${ce("input",n=>{const o=Ge(n,HTMLInputElement);r(o.value)})}
            />
        `:Pe(t,T.Number)?$`
            <input
                type="number"
                .value=${e}
                ${ce("input",n=>{const o=Ge(n,HTMLInputElement);r(o.value)})}
            />
        `:Pe(t,T.Dropdown)?$`
            <select
                .value=${e}
                ${ce("input",n=>{const o=Ge(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>$`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:$`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const _r=te()({tagName:"book-entry-description",styles:q`
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
            `)}}),Mr=te()({tagName:"book-page-wrapper",styles:q`
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

        ${I} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?$`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:$`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[D.Book,...e.pageNode.fullUrlBreadcrumbs],n=ra(e.pageNode.entry.errors);return n&&console.error(n),$`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${I}
                        ${A(I,{route:{paths:r,hash:void 0,search:void 0},router:e.router})}
                    >
                        ${t}
                    </${I}>
                    ${n?$`
                              <${K}
                                  ${A(K,{message:n.message})}
                              ></${K}>
                          `:$`
                              <${_r}
                                  ${A(_r,{descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}
                              ></${_r}>
                              <${Ee}
                                  ${A(Ee,{config:e.pageNode.entry.controls,currentValues:pn(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}
                              ></${Ee}>
                          `}
                </div>
            </div>
        `}}),Xe=te()({tagName:"book-element-example-controls",styles:q`
        :host {
            display: flex;
            color: ${C["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[D.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return $`
            <${I}
                ${A(I,{route:{paths:t,hash:void 0,search:void 0},router:e.router})}
            >
                ${e.elementExampleNode.entry.title}
            </${I}>
        `}}),Xo=Symbol("unset-internal-state"),Ar=te()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Xo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw ra(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Xo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return $`
                ${er(!!t.elementExampleNode.entry.styles,$`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),$`
                <${K}
                    ${A(K,{message:`${t.elementExampleNode.entry.title} failed: ${Jt(n)}`})}
                ></${K}>
            `}},options:{allowPolymorphicState:!0}}),Pr=te()({tagName:"book-element-example-wrapper",styles:q`
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

        ${Xe} {
            color: ${C["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Xe} {
            color: ${C["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return $`
            <div class="individual-example-wrapper">
                <${Xe}
                    ${A(Xe,e)}
                ></${Xe}>
                <${Ar}
                    ${A(Ar,e)}
                ></${Ar}>
            </div>
        `}}),Be=te()({tagName:"book-entry-display",styles:q`
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
    `,renderCallback:({inputs:e})=>{const t=Da(e.currentRoute.paths),r=td({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return $`
            <${Tr}
                ${A(Tr,{currentSearch:t,currentRoute:e.currentRoute,router:e.router})}
            ></${Tr}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${ue.Footer}></slot>
        `}});function Hs(e,t,r,n){const o=Or(r,n),a=[];if(o){const s=Hs(e,t,o,n);s&&a.push(s)}if(De(r,z.Page)&&!e.includes(r)){const s=pn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:he(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function td({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:a}){if(!e.length&&n)return[$`
                No results
            `];const s=Ln(e,1)?Hs(e,o,e[0],a):void 0,i=s&&Ln(e,1)?$`
                  <${Ee}
                      ${A(Ee,{config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}
                  ></${Ee}>
              `:"",l=xi(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(De(c,z.Page))return $`
                    <${Mr}
                        class="block-entry"
                        ${A(Mr,{isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                    ></${Mr}>
                `;if(De(c,z.ElementExample)){const d=pn(o,c.fullUrlBreadcrumbs.slice(0,-1));return $`
                    <${Pr}
                        class="inline-entry"
                        ${A(Pr,{elementExampleNode:c,currentPageControls:d,router:r})}
                    ></${Pr}>
                `}else return De(c,z.Root)?$`
                    <h1>${c.entry.title}</h1>
                `:$`
                    <${K}
                        class="block-entry"
                        ${A(K,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${K}>
                `});return[i,l]}function rd(e,t,r){const n=Jo(e,t);if(n.length)return n;r(it);const o=Jo(e,it.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Jo(e,t){return e.filter(r=>fi({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Mt=Sa()({tagName:"element-book-app",events:{pathUpdate:Ea()},stateInitStatic:{currentRoute:it,router:void 0,colors:{config:void 0,theme:jo(void 0)},treeBasedCurrentControls:void 0},styles:q`
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

        ${Be} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${oe} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({host:e}){setTimeout(()=>{Qo(e)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,u;try{let d=function(k){e.router?e.router.setRoutes(k):n({currentRoute:{...e.currentRoute,...k}}),t.elementBookRoutePaths&&!Ke(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(k.paths??[]))};var s=d;if(t.elementBookRoutePaths&&!Ke(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const k=zl(t.internalRouterConfig.basePath);n({router:k}),k.addRouteListener(!0,_=>{n({currentRoute:_})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const f={themeColor:t.themeColor};if(!Ke(f,(c=e.colors)==null?void 0:c.config)){const k=jo(f);n({colors:{config:f,theme:k}}),Il(r,k)}const h=t.debug??!1,p=hl({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:h});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.entries!==t.entries||e.treeBasedCurrentControls.globalControls!==t.globalControls)&&n({treeBasedCurrentControls:{entries:t.entries,globalControls:t.globalControls??{},currentControls:za(p.tree,t.globalControls??{})}});const m=Da(e.currentRoute.paths),x=(m?El({flattenedNodes:p.flattenedNodes,searchQuery:m}):void 0)??rd(p.flattenedNodes,e.currentRoute.paths,d),E=(u=e.treeBasedCurrentControls)==null?void 0:u.currentControls;return E?(t.debug&&console.info({currentControls:E}),$`
                <div
                    class="root"
                    ${ce(Yt,k=>{const _=r.shadowRoot.querySelector(Be.tagName);if(_?_.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Be.tagName}' for scrolling.`),d(k.detail),!(r.shadowRoot.querySelector(oe.tagName)instanceof oe))throw new Error(`Failed to find child '${oe.tagName}'`);Qo(r)})}
                    ${ce(Ee.events.controlValueChange,k=>{if(!e.treeBasedCurrentControls)return;const _=gl(E,k.detail.fullUrlBreadcrumbs,k.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:_}})})}
                >
                    <${oe}
                        ${A(oe,{flattenedNodes:p.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}
                    >
                        <slot
                            name=${ue.NavHeader}
                            slot=${ue.NavHeader}
                        ></slot>
                    </${oe}>
                    <${Be}
                        ${A(Be,{currentRoute:e.currentRoute,currentNodes:x,router:e.router,debug:h,currentControls:E,originalTree:p.tree})}
                    >
                        <slot
                            name=${ue.Footer}
                            slot=${ue.Footer}
                        ></slot>
                    </${Be}>
                </div>
            `):$`
                    <${K}
                        ${A(K,{message:"Failed to generate page controls."})}
                    ></${K}>
                `}catch(d){return console.error(d),$`
                <p class="error">${Jt(d)}</p>
            `}}});async function Qo(e){const t=e.shadowRoot.querySelector(oe.tagName);if(!(t instanceof oe))throw new Error(`Failed to find child '${oe.tagName}'`);await Ku(t)}const Fe=Me({title:"Elements",parent:void 0}),Ds=v`
    pointer-events: none;
    opacity: 0.3;
`,rt=j({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function nd(e){return`${e}px`}const Gt=j({"vira-form-input-border-radius":"8px"}),Xt=j({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${Gt["vira-form-input-border-radius"].value} + 4px)`});function Is({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=M(nd(n+r+t));return v`
        ${M(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Xt["vira-focus-outline-color"].value};
            border-radius: ${Xt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const ze=v`
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
`,Ko="vira-",{defineElement:$t,defineElementNoInputs:kd}=Ss({assertInputs:e=>{if(!e.tagName.startsWith(Ko))throw new Error(`Tag name should start with '${Ko}' but got '${e.tagName}'`)}}),Qr=j({"vira-icon-color":"currentColor"}),od=j({"vira-icon-stroke-color":Qr["vira-icon-color"].value,"vira-icon-fill-color":Qr["vira-icon-color"].value}),Se={...Qr,...od},O=$t()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            color: ${Se["vira-icon-color"].value};
            fill: ${Se["vira-icon-fill-color"].value};
            stroke: ${Se["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var js=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(js||{});const R=$t()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>v`
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
            ${Xt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ds};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${ze};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Gt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${rt["vira-interaction-animation-duration"].value},
                background-color
                    ${rt["vira-interaction-animation-duration"].value},
                border-color ${rt["vira-interaction-animation-duration"].value};
        }

        ${Is({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${O} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?w`
                  <${O}
                      ${V(O,{icon:e.icon})}
                  ></${O}>
              `:"",r=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:"";return w`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),ad=Me({parent:Fe,title:R.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:T.Text,initValue:""},"Secondary color":{controlType:T.Text,initValue:""},"Hover color":{controlType:T.Text,initValue:""},"Active color":{controlType:T.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??v``;e({title:r,styles:a,renderCallback({controls:s}){const i=v`
                        ${R.cssVars["vira-button-primary-color"].name}: ${M(s["Primary color"]||"inherit")};
                        ${R.cssVars["vira-button-secondary-color"].name}: ${M(s["Secondary color"]||"inherit")};
                        ${R.cssVars["vira-button-primary-hover-color"].name}: ${M(s["Hover color"]||"inherit")};
                        ${R.cssVars["vira-button-primary-active-color"].name}: ${M(s["Active color"]||"inherit")};
                    `;return w`
                        <${R}
                            style=${i}
                            ${V(R,{text:"hello",...o})}
                        ></${R}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:js.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:v`
                ${R} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:v`
                ${R} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:v`
                :host {
                    ${R.cssVars["vira-button-primary-color"].name}: pink;
                    ${R.cssVars["vira-button-secondary-color"].name}: purple;
                    ${R.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${R.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return w`
                    <${R}
                        ${V(R,{text:"hello"})}
                    ></${R}>
                `}})}});var Kr=(e=>(e.Header="header",e))(Kr||{});const ie=$t()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ze};
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
    `,events:{expandChange:ve()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${X("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${sr(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),sd=Me({title:ie.tagName,parent:Fe,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>w`
                            <${ie}
                                ${V(ie,{expanded:!!r.expandedStates[o]})}
                                ${X(ie.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Kr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${X("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Ve(!!r.showMoreStates[o],w`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${ie}>
                        `)}}),e({title:"wider examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>w`
                            <${ie}
                                ${V(ie,{expanded:!!r.expandedStates[o]})}
                                ${X(ie.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Kr.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${X("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${Ve(!!r.showMoreStates[o],w`
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
                            </${ie}>
                        `)}})}});function Cn({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const id=Cn({name:"Element16Icon",svgTemplate:w`
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
    `}),nt=Cn({name:"Element24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),ld=Cn({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${Se["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),cd={Element16Icon:id,Element24Icon:nt,Options24Icon:ld},ud=Me({title:O.tagName,parent:Fe,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return w`
                    <${O} ${V(O,{icon:nt})}></${O}>
                `}})}});function en({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>en({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Fs({value:e,allowed:t,blocked:r}){const n=t?en({input:e,matcher:t}):!0,o=r?en({input:e,matcher:r}):!1;return n&&!o}function ea(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Fs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const H=$t()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ve(),inputBlocked:ve()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Xt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ds};
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
                ${ze};
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
                ${ze};
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
                border-radius: ${Gt["vira-form-input-border-radius"].value};
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
                ${ze};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Gt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Is({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${O} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ze};
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
                  <${O} ${V(O,{icon:e.icon})}></${O}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return w`
            <label>
                ${s}
                ${Ve(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${sr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${an({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${X("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)Fs({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:h,blocked:p}=ea({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=h,t(new o.inputBlocked(p))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${Ve(!!e.suffix,w`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),dd=Me({title:H.tagName,parent:Fe,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:T.Text,initValue:""},"Placeholder color":{controlType:T.Text,initValue:""},"Border color":{controlType:T.Text,initValue:""},"Focus color":{controlType:T.Text,initValue:""},"Selection color":{controlType:T.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:v`
                    ${r||v``}
                `,stateInitStatic:{value:o.value},renderCallback({state:a,updateState:s,controls:i}){const l=v`
                        ${H.cssVars["vira-input-text-color"].name}: ${M(i["Text color"]||"inherit")};
                        ${H.cssVars["vira-input-border-color"].name}: ${M(i["Border color"]||"inherit")};
                        ${H.cssVars["vira-input-focus-border-color"].name}: ${M(i["Focus color"]||"inherit")};
                        ${H.cssVars["vira-input-placeholder-color"].name}: ${M(i["Placeholder color"]||"inherit")};
                        ${H.cssVars["vira-input-text-selection-color"].name}: ${M(i["Selection color"]||"inherit")};
                    `;return w`
                        <${H}
                            style=${l}
                            ${V(H,{...o,value:a.value})}
                            ${X(H.events.valueChange,c=>{s({value:c.detail})})}
                        ></${H}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:nt}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:v`
                ${H} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:nt}}),t({title:"custom height",styles:v`
                ${H} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"height",icon:nt}}),t({title:"max width",styles:v`
                ${H} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:v`
                ${H} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Je=$t()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:ve()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&gn(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return w`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return w`
                <a href=${s} rel="noopener noreferrer" ${X("click",n)}>
                    <slot></slot>
                </a>
            `}}}),fd=Me({title:Je.tagName,parent:Fe,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:T.Color,initValue:""},"Hover color":{controlType:T.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=v`
                        ${Je.cssVars["vira-link-hover-color"].name}: ${M(o["Hover color"]||"inherit")};
                        color: ${M(o["CSS Color"]||"inherit")};
                    `;return w`
                        <${Je.assign(n)}
                            style=${a}
                            ${X(Je.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${Je}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),hd=Me({title:"Icons",parent:void 0,controls:{"Icon Color":{controlType:T.Text,initValue:""},"Stroke Color":{controlType:T.Text,initValue:""},"Fill Color":{controlType:T.Text,initValue:""}},elementExamplesCallback({defineExample:e}){Object.values(cd).forEach(t=>{e({title:t.name,renderCallback({controls:r}){const n=v`
                        ${Se["vira-icon-color"].name}: ${M(r["Icon Color"]||"inherit")};
                        ${Se["vira-icon-fill-color"].name}: ${M(r["Fill Color"]||"inherit")};
                        ${Se["vira-icon-stroke-color"].name}: ${M(r["Stroke Color"]||"inherit")};
                    `;return w`
                        <${O} style=${n} ${V(O,{icon:t})}></${O}>
                    `}})})}}),pd=[Fe,hd,ad,sd,ud,dd,fd];ar({tagName:"vira-book-app",styles:v`
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
    `,renderCallback(){return w`
            <${Mt}
                ${V(Mt,{internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:pd,themeColor:"#33ccff"})}
            >
                <h1 slot=${ue.NavHeader}>Vira</h1>
            </${Mt}>
        `}});
